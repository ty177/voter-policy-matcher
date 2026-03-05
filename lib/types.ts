export type AnswerValue = 0 | 1 | 2 | 3 | 4 | 5; // 0 = not sure/skip

export type PartyId = 'conservative' | 'labour' | 'libdems' | 'reform' | 'green';

export interface PartyStance {
  score: number; // 1–5: party's position on the question statement
  summary: string; // Plain-English explanation of the party's stance
  source: string; // Citation label
  sourceUrl: string; // Source URL
}

export interface Question {
  id: string;
  text: string;
  tooltip?: string; // Optional clarification shown on "i" icon
  stances: Record<PartyId, PartyStance>;
}

export interface PolicyArea {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  description: string;
  questions: Question[];
}

export interface Party {
  id: PartyId;
  name: string;
  shortName: string;
  color: string; // Hex colour for visualisations
}

export interface AreaResult {
  areaId: string;
  areaName: string;
  areaEmoji: string;
  score: number; // 0–100
}

export interface PartyResult {
  party: Party;
  overallScore: number; // 0–100
  areaResults: AreaResult[];
}

export type Answers = Record<string, AnswerValue>;
