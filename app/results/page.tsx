'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { calculateResults, sortResults, getAnsweredCount } from '@/lib/algorithm';
import { policyAreas } from '@/lib/data';
import { Answers, PartyResult, PolicyArea } from '@/lib/types';
import MatchBar from '@/components/MatchBar';
import PolicyDetailPanel from '@/components/PolicyDetailPanel';

const STORAGE_KEY = 'vppm_answers';

function ScoreMatrix({ results, areas }: { results: PartyResult[]; areas: PolicyArea[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left py-2 pr-3 text-slate-500 font-medium w-28">Policy area</th>
            {results.map((r) => (
              <th key={r.party.id} className="py-2 px-2 text-center min-w-16">
                <span
                  className="text-xs font-bold"
                  style={{ color: r.party.color }}
                >
                  {r.party.shortName}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {areas.map((area) => (
            <tr key={area.id} className="border-t border-slate-100">
              <td className="py-2.5 pr-3 text-slate-600">
                <span className="mr-1">{area.emoji}</span>
                {area.shortName}
              </td>
              {results.map((r) => {
                const areaResult = r.areaResults.find((ar) => ar.areaId === area.id);
                const score = areaResult?.score ?? 50;
                const isHigh = score >= 70;
                const isMid = score >= 45 && score < 70;
                return (
                  <td key={r.party.id} className="py-2.5 px-2 text-center">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold ${
                        isHigh
                          ? 'bg-emerald-100 text-emerald-800'
                          : isMid
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {score}%
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="border-t-2 border-slate-200">
            <td className="py-2.5 pr-3 font-semibold text-slate-800">Overall</td>
            {results.map((r) => (
              <td key={r.party.id} className="py-2.5 px-2 text-center">
                <span
                  className="inline-block px-2 py-0.5 rounded-md text-xs font-bold text-white"
                  style={{ backgroundColor: r.party.color }}
                >
                  {r.overallScore}%
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function ResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<PartyResult[] | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [selectedPartyId, setSelectedPartyId] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<PolicyArea | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown'>('overview');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        router.replace('/quiz');
        return;
      }
      const parsed: Answers = JSON.parse(saved);
      setAnswers(parsed);
      const raw = calculateResults(parsed);
      setResults(sortResults(raw));
    } catch {
      router.replace('/quiz');
    }
  }, [router]);

  const handleShare = useCallback(async () => {
    if (!results) return;
    const top = results[0];
    const text = `I took the UK Policy Matcher and my top match is ${top.party.name} at ${top.overallScore}%! Find out yours at UKPolicyMatcher.com`;
    try {
      if (navigator.share) {
        await navigator.share({ text, title: 'My UK Policy Match' });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // ignore
    }
  }, [results]);

  const handleRetake = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    router.push('/quiz');
  }, [router]);

  if (!results) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-500">Calculating your match…</p>
        </div>
      </div>
    );
  }

  const answeredCount = getAnsweredCount(answers);
  const topResult = results[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Home
          </Link>
          <h1 className="text-sm font-semibold text-slate-800">Your Policy Match</h1>
          <button
            onClick={handleRetake}
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Retake
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Top match hero */}
        <div
          className="rounded-2xl text-white p-6 text-center"
          style={{ backgroundColor: topResult.party.color }}
        >
          <p className="text-white/80 text-sm mb-1">Your top match</p>
          <h2 className="text-3xl font-bold mb-1">{topResult.party.name}</h2>
          <p className="text-5xl font-black mb-2">{topResult.overallScore}%</p>
          <p className="text-white/80 text-sm">
            Based on {answeredCount} answered question{answeredCount !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-100 rounded-xl p-1 gap-1">
          {(['overview', 'breakdown'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                activeTab === tab
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab === 'overview' ? 'Party Rankings' : 'Area Breakdown'}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-3">
            <p className="text-sm text-slate-500">
              Click any party to explore their detailed policy positions.
            </p>
            {results.map((result, i) => (
              <MatchBar
                key={result.party.id}
                result={result}
                rank={i}
                isTop={i === 0}
                isSelected={selectedPartyId === result.party.id}
                onClick={() => {
                  if (selectedPartyId === result.party.id) {
                    setSelectedPartyId(null);
                  } else {
                    setSelectedPartyId(result.party.id);
                    setActiveTab('breakdown');
                  }
                }}
              />
            ))}
          </div>
        )}

        {activeTab === 'breakdown' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900 mb-4">Match by policy area</h3>
              <ScoreMatrix results={results} areas={policyAreas} />
            </div>

            <div>
              <p className="text-sm text-slate-500 mb-3">
                Tap any policy area to see detailed party positions and your answers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {policyAreas.map((area) => {
                  // Find best-matching party for this area
                  const sortedByArea = [...results].sort((a, b) => {
                    const aScore = a.areaResults.find((r) => r.areaId === area.id)?.score ?? 0;
                    const bScore = b.areaResults.find((r) => r.areaId === area.id)?.score ?? 0;
                    return bScore - aScore;
                  });
                  const topForArea = sortedByArea[0];
                  const topScore =
                    topForArea.areaResults.find((r) => r.areaId === area.id)?.score ?? 0;

                  return (
                    <button
                      key={area.id}
                      onClick={() => setSelectedArea(area)}
                      className="bg-white border border-slate-200 rounded-xl p-4 text-left hover:border-slate-300 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{area.emoji}</span>
                        <span className="font-semibold text-slate-800">{area.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2">
                        Top match:{' '}
                        <span
                          className="font-semibold"
                          style={{ color: topForArea.party.color }}
                        >
                          {topForArea.party.shortName} ({topScore}%)
                        </span>
                      </p>
                      <div className="flex gap-1">
                        {sortedByArea.map((r) => {
                          const s = r.areaResults.find((ar) => ar.areaId === area.id)?.score ?? 0;
                          return (
                            <div key={r.party.id} className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${s}%`, backgroundColor: r.party.color }}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-xs text-blue-600 mt-2">See details →</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Algorithm note */}
        <div className="bg-slate-100 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-700">How your score is calculated:</strong> For each question,
          we measure the distance between your answer and each party&apos;s position on a 1–5 scale.
          A perfect match scores 100%; a maximum disagreement scores 0%. Area scores are averaged
          equally to give the overall match. &quot;Not sure&quot; answers are excluded from the calculation.
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white py-3 rounded-xl text-sm font-semibold hover:bg-slate-700 transition-colors"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share My Match
              </>
            )}
          </button>
          <button
            onClick={handleRetake}
            className="flex-1 flex items-center justify-center gap-2 border border-slate-200 bg-white text-slate-700 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retake Quiz
          </button>
        </div>

        <p className="text-center text-xs text-slate-400">
          Answers saved on your device only · No account or tracking required
        </p>
      </div>

      {/* Policy detail panel */}
      {selectedArea && (
        <PolicyDetailPanel
          area={selectedArea}
          results={results}
          answers={answers}
          onClose={() => setSelectedArea(null)}
        />
      )}
    </div>
  );
}
