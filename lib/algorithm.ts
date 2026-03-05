import { Answers, AreaResult, PartyId, PartyResult, PolicyArea } from './types';
import { parties, partyOrder, policyAreas } from './data';

/**
 * Calculate alignment score between a user answer and a party stance.
 * Both are on a 1–5 scale.
 * Returns a value between 0 (no alignment) and 1 (perfect alignment).
 */
function alignmentScore(userAnswer: number, partyStance: number): number {
  return 1 - Math.abs(userAnswer - partyStance) / 4;
}

/**
 * Calculate results for all parties based on user answers.
 *
 * - Answers with value 0 ("Not sure") are excluded from the area calculation.
 * - If all questions in an area are "not sure", that area defaults to 50%.
 * - Overall score = unweighted average across all five policy areas.
 */
export function calculateResults(answers: Answers): PartyResult[] {
  return partyOrder.map((partyId: PartyId) => {
    const party = parties[partyId];

    const areaResults: AreaResult[] = policyAreas.map((area: PolicyArea) => {
      const scores: number[] = [];

      for (const question of area.questions) {
        const answer = answers[question.id];
        if (!answer || answer === 0) continue; // skip "not sure"

        const stance = question.stances[partyId].score;
        scores.push(alignmentScore(answer, stance));
      }

      const rawScore =
        scores.length > 0
          ? scores.reduce((sum, s) => sum + s, 0) / scores.length
          : 0.5; // default to 50% if all "not sure"

      return {
        areaId: area.id,
        areaName: area.name,
        areaEmoji: area.emoji,
        score: Math.round(rawScore * 100),
      };
    });

    const overallScore = Math.round(
      areaResults.reduce((sum, r) => sum + r.score, 0) / areaResults.length
    );

    return { party, overallScore, areaResults };
  });
}

/**
 * Sort results by overall score, descending.
 */
export function sortResults(results: PartyResult[]): PartyResult[] {
  return [...results].sort((a, b) => b.overallScore - a.overallScore);
}

/**
 * Return the total number of questions across all areas.
 */
export function getTotalQuestions(): number {
  return policyAreas.reduce((sum, area) => sum + area.questions.length, 0);
}

/**
 * Return the number of answered (non-zero) questions.
 */
export function getAnsweredCount(answers: Answers): number {
  return Object.values(answers).filter((v) => v !== 0).length;
}
