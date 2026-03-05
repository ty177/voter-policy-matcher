'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { policyAreas } from '@/lib/data';
import { Answers, AnswerValue } from '@/lib/types';

const STORAGE_KEY = 'vppm_answers';

const ANSWER_OPTIONS: { value: AnswerValue; label: string; shortLabel: string }[] = [
  { value: 1, label: 'Strongly Disagree', shortLabel: 'Strongly\nDisagree' },
  { value: 2, label: 'Disagree', shortLabel: 'Disagree' },
  { value: 3, label: 'Neutral', shortLabel: 'Neutral' },
  { value: 4, label: 'Agree', shortLabel: 'Agree' },
  { value: 5, label: 'Strongly Agree', shortLabel: 'Strongly\nAgree' },
];

const totalAreas = policyAreas.length;
const totalQuestions = policyAreas.reduce((sum, a) => sum + a.questions.length, 0);

export default function QuizPage() {
  const router = useRouter();
  const [areaIndex, setAreaIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showTooltip, setShowTooltip] = useState(false);

  const currentArea = policyAreas[areaIndex];
  const currentQuestion = currentArea?.questions[questionIndex];
  const currentAnswer = currentQuestion ? (answers[currentQuestion.id] ?? null) : null;

  const questionsBeforeThisArea = policyAreas
    .slice(0, areaIndex)
    .reduce((sum, a) => sum + a.questions.length, 0);
  const currentQuestionNumber = questionsBeforeThisArea + questionIndex + 1;
  const progressPercent = ((currentQuestionNumber - 1) / totalQuestions) * 100;

  // Load saved answers on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setAnswers(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save answers to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch {
      // ignore
    }
  }, [answers]);

  const handleAnswer = useCallback(
    (value: AnswerValue) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
      setShowTooltip(false);
    },
    [currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (!currentAnswer) return; // require an answer before proceeding

    setShowTooltip(false);

    if (questionIndex < currentArea.questions.length - 1) {
      setQuestionIndex((i) => i + 1);
    } else if (areaIndex < totalAreas - 1) {
      setAreaIndex((i) => i + 1);
      setQuestionIndex(0);
    } else {
      // Quiz complete
      router.push('/results');
    }
  }, [currentAnswer, questionIndex, currentArea, areaIndex, router]);

  const handleBack = useCallback(() => {
    setShowTooltip(false);
    if (questionIndex > 0) {
      setQuestionIndex((i) => i - 1);
    } else if (areaIndex > 0) {
      setAreaIndex((i) => i - 1);
      setQuestionIndex(policyAreas[areaIndex - 1].questions.length - 1);
    }
  }, [questionIndex, areaIndex]);

  const handleNotSure = useCallback(() => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: 0 }));
    setShowTooltip(false);
    // Auto-advance on "not sure"
    setTimeout(() => {
      if (questionIndex < currentArea.questions.length - 1) {
        setQuestionIndex((i) => i + 1);
      } else if (areaIndex < totalAreas - 1) {
        setAreaIndex((i) => i + 1);
        setQuestionIndex(0);
      } else {
        router.push('/results');
      }
    }, 100);
  }, [currentQuestion, questionIndex, currentArea, areaIndex, router]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '1') handleAnswer(1);
      if (e.key === '2') handleAnswer(2);
      if (e.key === '3') handleAnswer(3);
      if (e.key === '4') handleAnswer(4);
      if (e.key === '5') handleAnswer(5);
      if (e.key === 'Enter' && currentAnswer !== null && currentAnswer !== 0) handleNext();
      if (e.key === 'ArrowLeft') handleBack();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleAnswer, handleNext, handleBack, currentAnswer]);

  if (!currentArea || !currentQuestion) return null;

  const isFirst = areaIndex === 0 && questionIndex === 0;
  const isLast =
    areaIndex === totalAreas - 1 &&
    questionIndex === currentArea.questions.length - 1;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2.5">
            <Link href="/" className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Home
            </Link>
            <span className="text-sm font-medium text-slate-600">
              Question {currentQuestionNumber} of {totalQuestions}
            </span>
          </div>

          {/* Overall progress bar */}
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-800 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Policy area tabs */}
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pt-2">
            {policyAreas.map((area, i) => {
              const isActive = i === areaIndex;
              const isDone = i < areaIndex;
              return (
                <div
                  key={area.id}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 transition-all ${
                    isActive
                      ? 'bg-slate-800 text-white'
                      : isDone
                      ? 'bg-slate-200 text-slate-600'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  <span>{area.emoji}</span>
                  <span>{area.shortName}</span>
                  {isDone && (
                    <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          {/* Area header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{currentArea.emoji}</span>
            <div>
              <h2 className="font-bold text-slate-900">{currentArea.name}</h2>
              <p className="text-sm text-slate-500">{currentArea.description}</p>
            </div>
          </div>

          {/* Question card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-5">
            {/* Within-area progress */}
            <div className="flex gap-1.5 mb-5">
              {currentArea.questions.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    i < questionIndex
                      ? 'bg-slate-800'
                      : i === questionIndex
                      ? 'bg-slate-400'
                      : 'bg-slate-100'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-start gap-2 mb-6">
              <p className="text-lg sm:text-xl font-medium text-slate-900 leading-snug flex-1">
                {currentQuestion.text}
              </p>
              {currentQuestion.tooltip && (
                <div className="relative flex-shrink-0">
                  <button
                    onClick={() => setShowTooltip((v) => !v)}
                    className="w-6 h-6 rounded-full border border-slate-300 text-slate-400 hover:border-slate-400 hover:text-slate-600 text-xs font-bold flex items-center justify-center mt-0.5 transition-colors"
                    aria-label="More information"
                  >
                    i
                  </button>
                  {showTooltip && (
                    <div className="absolute right-0 top-8 w-64 bg-slate-800 text-white text-sm p-3 rounded-xl shadow-xl z-10">
                      <p className="leading-relaxed">{currentQuestion.tooltip}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Answer buttons */}
            <div className="grid grid-cols-5 gap-2">
              {ANSWER_OPTIONS.map((option) => {
                const isSelected = currentAnswer === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`answer-btn py-3 px-1 rounded-xl border-2 text-center transition-all ${
                      isSelected
                        ? 'border-slate-800 bg-slate-800 text-white shadow-md scale-105'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    aria-label={option.label}
                    aria-pressed={isSelected}
                  >
                    <div className="text-lg font-bold mb-0.5">{option.value}</div>
                    <div className="text-xs leading-tight whitespace-pre-line opacity-75">
                      {option.shortLabel}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 flex justify-between text-xs text-slate-400">
              <span>← Disagree</span>
              <span>Agree →</span>
            </div>
          </div>

          {/* Not sure + Navigation */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleBack}
              disabled={isFirst}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <button
              onClick={handleNotSure}
              className="text-sm text-slate-400 hover:text-slate-600 underline underline-offset-2 transition-colors"
            >
              Not sure, skip
            </button>

            <button
              onClick={handleNext}
              disabled={currentAnswer === null}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isLast ? 'See Results' : 'Next'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <p className="text-center text-xs text-slate-400 mt-5">
            Tip: press 1–5 to answer, Enter to advance, ← to go back
          </p>
        </div>
      </div>
    </div>
  );
}
