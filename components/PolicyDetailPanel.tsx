'use client';

import { useState } from 'react';
import { PolicyArea, PartyResult, PartyId } from '@/lib/types';
import { parties, partyOrder } from '@/lib/data';

interface PolicyDetailPanelProps {
  area: PolicyArea;
  results: PartyResult[];
  answers: Record<string, number>;
  onClose: () => void;
}

const answerLabels: Record<number, string> = {
  1: 'Strongly Disagree',
  2: 'Disagree',
  3: 'Neutral',
  4: 'Agree',
  5: 'Strongly Agree',
  0: 'Not answered',
};

export default function PolicyDetailPanel({
  area,
  results,
  answers,
  onClose,
}: PolicyDetailPanelProps) {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(
    area.questions[0]?.id ?? null
  );

  const getAreaScore = (partyId: PartyId) => {
    const result = results.find((r) => r.party.id === partyId);
    const areaResult = result?.areaResults.find((ar) => ar.areaId === area.id);
    return areaResult?.score ?? 50;
  };

  const stanceLabel = (score: number) => {
    if (score >= 4.5) return 'Strongly supports';
    if (score >= 3.5) return 'Supports';
    if (score >= 2.5) return 'Neutral / mixed';
    if (score >= 1.5) return 'Opposes';
    return 'Strongly opposes';
  };

  const stanceColor = (score: number) => {
    if (score >= 4.5) return 'bg-emerald-100 text-emerald-800';
    if (score >= 3.5) return 'bg-green-100 text-green-800';
    if (score >= 2.5) return 'bg-slate-100 text-slate-600';
    if (score >= 1.5) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${area.name} policy details`}
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close panel"
      />

      {/* Panel */}
      <div className="relative bg-white w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] rounded-t-2xl sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{area.emoji}</span>
            <div>
              <h2 className="font-bold text-slate-900 text-lg leading-tight">{area.name}</h2>
              <p className="text-slate-500 text-sm">{area.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Party area scores summary */}
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex-shrink-0">
          <p className="text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">Match in this area</p>
          <div className="grid grid-cols-5 gap-2">
            {partyOrder.map((id) => {
              const party = parties[id];
              const score = getAreaScore(id);
              return (
                <div key={id} className="text-center">
                  <div
                    className="text-xs font-bold mb-1"
                    style={{ color: party.color }}
                  >
                    {score}%
                  </div>
                  <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${score}%`, backgroundColor: party.color }}
                    />
                  </div>
                  <div className="text-xs text-slate-500 mt-1 truncate">{party.shortName}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Questions */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-3">
          {area.questions.map((question, qi) => {
            const isOpen = expandedQuestion === question.id;
            const userAnswer = answers[question.id] ?? 0;

            return (
              <div key={question.id} className="border border-slate-200 rounded-xl overflow-hidden">
                {/* Question header */}
                <button
                  className="w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-slate-50 transition-colors"
                  onClick={() =>
                    setExpandedQuestion(isOpen ? null : question.id)
                  }
                >
                  <span className="text-slate-400 text-sm font-medium mt-0.5 flex-shrink-0">
                    Q{qi + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-800 font-medium leading-snug">
                      {question.text}
                    </p>
                    <div className="mt-1 flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-slate-500">
                        Your answer:{' '}
                        <span
                          className={`font-medium ${userAnswer === 0 ? 'text-slate-400' : 'text-slate-700'}`}
                        >
                          {answerLabels[userAnswer]}
                        </span>
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Party stances */}
                {isOpen && (
                  <div className="border-t border-slate-100 divide-y divide-slate-50">
                    {partyOrder.map((partyId) => {
                      const party = parties[partyId];
                      const stance = question.stances[partyId];
                      return (
                        <div key={partyId} className="px-4 py-3">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: party.color }}
                            />
                            <span className="text-sm font-semibold text-slate-800">
                              {party.shortName}
                            </span>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ml-auto ${stanceColor(stance.score)}`}
                            >
                              {stanceLabel(stance.score)}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed pl-4">
                            {stance.summary}
                          </p>
                          <div className="mt-2 pl-4">
                            <a
                              href={stance.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
                            >
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              {stance.source}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
