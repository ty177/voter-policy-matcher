import { PartyResult } from '@/lib/types';

interface MatchBarProps {
  result: PartyResult;
  rank: number;
  isTop: boolean;
  onClick: () => void;
  isSelected: boolean;
}

const rankEmoji = ['🥇', '🥈', '🥉', '4th', '5th'];

export default function MatchBar({ result, rank, isTop, onClick, isSelected }: MatchBarProps) {
  const { party, overallScore } = result;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl border-2 transition-all duration-200 p-4 cursor-pointer ${
        isSelected
          ? 'border-slate-700 bg-slate-50 shadow-md'
          : isTop
          ? 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
          : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg w-8 flex-shrink-0">{rankEmoji[rank]}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span
              className={`font-semibold truncate ${isTop ? 'text-slate-900 text-base' : 'text-slate-700 text-sm'}`}
            >
              {party.shortName}
            </span>
            <span
              className={`font-bold flex-shrink-0 ${isTop ? 'text-xl text-slate-900' : 'text-base text-slate-600'}`}
            >
              {overallScore}%
            </span>
          </div>
        </div>
      </div>

      {/* Bar */}
      <div className="ml-11 h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${overallScore}%`,
            backgroundColor: party.color,
          }}
        />
      </div>

      {isSelected && (
        <p className="ml-11 mt-1.5 text-xs text-slate-500">
          Click policy areas below to see the breakdown ↓
        </p>
      )}
    </button>
  );
}
