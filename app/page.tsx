import Link from 'next/link';
import { policyAreas } from '@/lib/data';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-5 py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full mb-6 border border-white/20">
            🗳️ Free · Anonymous · Source-backed
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
            Which party truly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              represents your views?
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Cut through the campaign noise. Answer questions across 5 key policy areas and see
            how closely each major UK party aligns with your actual positions.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-slate-100 transition-colors shadow-lg"
          >
            Start Your Match
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-4 text-slate-400 text-sm">~5 minutes · 25 questions · No sign-up needed</p>
        </div>
      </section>

      {/* Parties covered */}
      <section className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-6">
          <p className="text-center text-sm text-slate-500 mb-4">Matching you against 5 major UK parties</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Conservative', color: '#0087DC' },
              { name: 'Labour', color: '#E4003B' },
              { name: 'Lib Dems', color: '#FAA61A' },
              { name: 'Reform UK', color: '#12B6CF' },
              { name: 'Green Party', color: '#02A95B' },
            ].map((party) => (
              <span
                key={party.name}
                className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: party.color }} />
                {party.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Policy areas */}
      <section className="max-w-3xl mx-auto px-5 py-14">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-2">5 Key Policy Areas</h2>
        <p className="text-slate-500 text-center mb-8">
          Your views are matched across the issues that matter most to UK voters.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {policyAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-2">{area.emoji}</div>
              <div className="font-semibold text-slate-800 text-sm mb-1">{area.shortName}</div>
              <div className="text-xs text-slate-500">{area.questions.length} questions</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-3xl mx-auto px-5 py-14">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Answer policy questions',
                desc: "Rate how much you agree or disagree with 25 clear statements. Includes a 'Not sure' option so you're never forced to guess.",
                icon: '📝',
              },
              {
                step: '2',
                title: 'See your party match',
                desc: "Our transparent algorithm calculates how closely each party's policies align with your answers, shown as a percentage.",
                icon: '📊',
              },
              {
                step: '3',
                title: 'Explore the details',
                desc: "Drill into any policy area to see exactly where each party stands, with plain-English summaries and direct source citations.",
                icon: '🔍',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="w-7 h-7 bg-slate-800 text-white rounded-full text-sm font-bold flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="max-w-3xl mx-auto px-5 py-12 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Built on transparency and trust</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: '🔒',
              title: 'Fully anonymous',
              desc: 'No account needed. Your answers are never linked to your identity. Results are stored on your device only.',
            },
            {
              icon: '📄',
              title: 'Source-backed',
              desc: 'Every party position is drawn from official 2024 manifestos, voting records, and public statements.',
            },
            {
              icon: '⚖️',
              title: 'Politically neutral',
              desc: 'All five parties are treated equally. Our matching algorithm is fully transparent and auditable.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5 text-left">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-slate-800 mb-1.5">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-xl mx-auto px-5 py-14 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to find your match?</h2>
          <p className="text-slate-300 mb-7">
            Join thousands of UK voters making more informed decisions at the ballot box.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Start the Quiz
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-3xl mx-auto px-5 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-400">
          <span>🗳️ UK Policy Matcher — free, anonymous, and source-backed</span>
          <div className="flex gap-4">
            <span>GDPR compliant</span>
            <span>·</span>
            <span>No PII stored</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
