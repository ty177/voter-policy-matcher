import { Party, PartyId, PolicyArea } from './types';

export const parties: Record<PartyId, Party> = {
  conservative: {
    id: 'conservative',
    name: 'Conservative Party',
    shortName: 'Conservatives',
    color: '#0087DC',
  },
  labour: {
    id: 'labour',
    name: 'Labour Party',
    shortName: 'Labour',
    color: '#E4003B',
  },
  libdems: {
    id: 'libdems',
    name: 'Liberal Democrats',
    shortName: 'Lib Dems',
    color: '#FAA61A',
  },
  reform: {
    id: 'reform',
    name: 'Reform UK',
    shortName: 'Reform UK',
    color: '#12B6CF',
  },
  green: {
    id: 'green',
    name: 'Green Party',
    shortName: 'Greens',
    color: '#02A95B',
  },
};

export const partyOrder: PartyId[] = ['conservative', 'labour', 'libdems', 'reform', 'green'];

export const policyAreas: PolicyArea[] = [
  {
    id: 'nhs',
    name: 'NHS & Healthcare',
    shortName: 'NHS',
    emoji: '🏥',
    description: 'Funding, staffing, privatisation, and access to healthcare services.',
    questions: [
      {
        id: 'nhs_1',
        text: 'The NHS should remain entirely publicly funded and free at the point of use for all services.',
        tooltip: 'This concerns whether all NHS services should be state-funded and available at no direct cost to patients.',
        stances: {
          conservative: {
            score: 4,
            summary: 'Conservatives support the NHS as free at the point of use, but have allowed independent providers to deliver NHS-funded services through Integrated Care Systems.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 5,
            summary: 'Labour is committed to a fully public NHS and has moved to limit new private contracts for core clinical services via the NHS Providers legislation.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 5,
            summary: 'The Liberal Democrats strongly support a publicly funded NHS free at the point of use and oppose any privatisation of NHS services.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 4,
            summary: 'Reform UK support the NHS being free at the point of use but want to increase private-sector involvement to reduce waiting times and improve efficiency.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party strongly supports a fully public NHS and has called for the reversal of all NHS privatisation, returning services to direct public ownership.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'nhs_2',
        text: 'Private companies should be allowed to deliver NHS services where they can improve efficiency.',
        tooltip: 'This is about whether non-NHS private providers should be contracted to carry out treatments paid for by the NHS.',
        stances: {
          conservative: {
            score: 4,
            summary: 'Conservatives have actively encouraged private providers to help reduce NHS waiting lists, including through the Elective Recovery Programme.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 2,
            summary: 'Labour has sought to limit new private contracts in core NHS services and has expressed concern about the growth of private provision within the NHS.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 3,
            summary: 'The Liberal Democrats accept a limited role for private providers where they demonstrably improve outcomes, but oppose profit-driven privatisation of core services.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 5,
            summary: 'Reform UK strongly supports using private and independent providers to tackle NHS waiting lists quickly and break what they describe as a public-sector monopoly.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 1,
            summary: 'The Green Party strongly opposes private companies in the NHS, viewing this as a profit-driven threat to universal care, and calls for re-nationalisation of contracted services.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'nhs_3',
        text: 'NHS clinical staff should receive significant pay rises to tackle the workforce and retention crisis.',
        tooltip: 'This refers to whether pay for doctors, nurses, and other healthcare workers should be substantially increased.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives initially offered below-inflation pay awards, triggering historic strikes. Eventual settlements were reached but were criticised as inadequate by unions.',
            source: 'NHS Pay Review Body 2023–24',
            sourceUrl: 'https://www.gov.uk/government/organisations/nhs-pay-review-body',
          },
          labour: {
            score: 4,
            summary: 'Labour settled the NHS pay disputes on taking office and is committed to fair pay for NHS staff as central to workforce retention and recruitment.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats backed significant above-inflation pay rises for NHS staff and opposed the Conservative government\'s handling of the dispute.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 3,
            summary: 'Reform UK acknowledges the staffing crisis but focuses on efficiency savings, reducing NHS management costs, and faster recruitment of overseas staff rather than large pay rises.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party calls for substantially above-inflation pay rises for all NHS and care workers as essential to fixing the workforce crisis.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'nhs_4',
        text: 'Mental health services should receive equivalent funding and priority to physical health services.',
        tooltip: '"Parity of esteem" — treating mental and physical health as equally important in funding and service provision.',
        stances: {
          conservative: {
            score: 3,
            summary: 'Conservatives committed to parity of esteem but mental health services remained significantly underfunded relative to need throughout their time in government.',
            source: 'NHS Long Term Plan 2019',
            sourceUrl: 'https://www.longtermplan.nhs.uk',
          },
          labour: {
            score: 4,
            summary: 'Labour has committed to recruiting 8,500 more mental health workers and establishing mental health standards equivalent to physical health NICE guidance.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 5,
            summary: 'Mental health is a flagship Lib Dem policy. They have committed to 24/7 mental health crisis services in every area, 8,500 more staff, and full parity of funding.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 3,
            summary: 'Reform UK has not detailed specific mental health funding commitments but supports better access to mental health services as part of broader NHS improvement.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports full parity of esteem with significant new investment in community mental health services and the abolition of waiting time disparities.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'nhs_5',
        text: 'Prescription charges in England should be abolished.',
        tooltip: 'England is the only UK nation that still charges patients for prescriptions. Scotland, Wales and Northern Ireland have already abolished charges.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives have maintained and increased prescription charges in England, viewing them as a contribution towards NHS costs.',
            source: 'Department of Health & Social Care',
            sourceUrl: 'https://www.gov.uk/government/organisations/department-of-health-and-social-care',
          },
          labour: {
            score: 3,
            summary: 'Labour has not committed to abolishing prescription charges but has expanded exemptions and is reviewing the charging regime.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support a phased reduction and eventual abolition of prescription charges in England to bring parity with the rest of the UK.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 2,
            summary: 'Reform UK has not committed to abolishing prescription charges, taking the view that personal contribution to healthcare costs is appropriate.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would abolish prescription charges in England immediately, viewing them as a barrier to accessing essential medicines.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
    ],
  },

  {
    id: 'immigration',
    name: 'Immigration',
    shortName: 'Immigration',
    emoji: '✈️',
    description: 'Immigration levels, asylum policy, and refugee resettlement.',
    questions: [
      {
        id: 'imm_1',
        text: 'The UK\'s net migration should be significantly reduced from current levels.',
        tooltip: 'Net migration is the difference between people arriving in and leaving the UK. It reached a record high of around 764,000 in 2022.',
        stances: {
          conservative: {
            score: 4,
            summary: 'Conservatives pledged to reduce net migration to below 100,000 and introduced a series of measures including raising salary thresholds for skilled workers and family visas.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 3,
            summary: 'Labour has committed to reducing net migration from its record highs through managed controls, without setting a specific numerical target.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 2,
            summary: 'The Liberal Democrats focus on managing migration routes and reducing illegal crossings rather than pursuing arbitrary numerical targets for total migration.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 5,
            summary: 'Reform UK\'s central pledge is to reduce net migration to zero or below, describing current levels as incompatible with public services and community cohesion.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 1,
            summary: 'The Green Party opposes arbitrary migration caps, arguing for a humane, needs-based policy that recognises the social and economic contributions of migrants.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'imm_2',
        text: 'Asylum seekers should have the right to work while their claims are being processed.',
        tooltip: 'Currently asylum seekers in the UK are generally banned from working while awaiting a decision on their claim, which can take years.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives restricted the right to work for asylum seekers and opposed any relaxation, citing concerns about encouraging asylum claims.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour announced asylum seekers will be allowed to work after six months if their claim has not been decided, in line with their commitment to a fair system.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 5,
            summary: 'The Liberal Democrats propose allowing asylum seekers to work after just three months, reducing cost to the taxpayer and supporting integration.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK strongly opposes giving asylum seekers the right to work, arguing it acts as a pull factor and should not precede a successful asylum decision.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports an immediate right to work for all asylum seekers, seeing current restrictions as inhumane and economically counterproductive.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'imm_3',
        text: 'Processing asylum claims in offshore countries is an appropriate way to deter illegal channel crossings.',
        tooltip: 'This refers to schemes like the UK–Rwanda plan (since cancelled) that would send asylum seekers to a third country for their claims to be processed.',
        stances: {
          conservative: {
            score: 5,
            summary: 'Conservatives introduced and strongly defended the Rwanda scheme, arguing offshore processing was essential to deter illegal small-boat crossings.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 1,
            summary: 'Labour cancelled the Rwanda scheme on their first day in office, describing it as an expensive and ineffective gimmick that did not reduce channel crossings.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 1,
            summary: 'The Liberal Democrats strongly opposed the Rwanda scheme as unlawful, unethical, and a waste of public money, and called for its cancellation.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 5,
            summary: 'Reform UK support and would expand offshore processing, including returning asylum seekers to France, as a central deterrence measure.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 1,
            summary: 'The Green Party strongly opposes any offshore processing, viewing it as a breach of international humanitarian law and the UK\'s obligations under the Refugee Convention.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'imm_4',
        text: 'The UK should create more safe and legal routes for refugees fleeing conflict and persecution.',
        tooltip: 'Safe and legal routes include formal resettlement programmes and humanitarian visas that allow people to seek asylum without crossing the Channel in small boats.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives supported limited resettlement schemes (e.g., Afghan, Ukrainian) but placed primary emphasis on deterrence over expanding legal pathways.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour is committed to a fair asylum system with safe legal routes, including a new resettlement programme and stronger co-operation with France to address smuggler networks.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 5,
            summary: 'The Liberal Democrats strongly support expanding safe and legal routes including community sponsorship, family reunion, and a new humanitarian visa.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK opposes expanding resettlement or legal routes, arguing this would increase overall numbers and act as a pull factor.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party calls for a significant expansion of safe legal routes, including a humanitarian visa, and views this as the primary way to reduce dangerous crossings.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'imm_5',
        text: 'Family reunion rules should be made easier to allow refugees to bring their immediate family to the UK.',
        tooltip: 'Current rules are complex and restrict refugee family reunification, especially for unaccompanied minors and adult children.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives tightened family reunion rules as part of broader efforts to reduce migration numbers.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour supports family reunion rights for refugees as part of a fair asylum system and has reviewed Conservative restrictions introduced before the 2024 election.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 5,
            summary: 'The Liberal Democrats would restore and extend family reunion rights, including for unaccompanied minors, as a core part of their humane migration policy.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK opposes any expansion of family reunion, arguing it would increase overall migration numbers significantly.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports full and unrestricted family reunion rights for all recognised refugees, viewing family separation as a cruel by-product of restrictive policy.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
    ],
  },

  {
    id: 'education',
    name: 'Education Funding',
    shortName: 'Education',
    emoji: '📚',
    description: 'School funding, university fees, free school meals, and vocational training.',
    questions: [
      {
        id: 'edu_1',
        text: 'University tuition fees in England should be significantly reduced or abolished.',
        tooltip: 'England has among the highest university tuition fees globally at up to £9,250 per year. Scotland, Wales and Northern Ireland have different fee arrangements.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives tripled tuition fees to £9,000 in 2012 and have maintained the fees model, arguing graduates should contribute to the cost of their education.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 3,
            summary: 'Labour has reviewed the student finance system and adjusted loan repayment terms but has not pledged to significantly cut or abolish tuition fees.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats have historically pledged to abolish fees and now call for significant reduction. They accept some graduate contribution but oppose the current high fee level.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 2,
            summary: 'Reform UK focuses on universities offering value for money and would review the fee system, but is not committed to abolition, focusing on alternatives to university.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would abolish tuition fees entirely and reintroduce maintenance grants, viewing free higher education as essential for social mobility.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'edu_2',
        text: 'Per-pupil school funding should be substantially increased in real terms.',
        tooltip: 'Real-terms funding accounts for inflation. Despite headline increases, many schools have faced real-terms cuts when accounting for rising costs.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives claimed record school funding but independent analysis found many schools faced real-terms per-pupil cuts once inflation was factored in.',
            source: 'Institute for Fiscal Studies school funding analysis',
            sourceUrl: 'https://ifs.org.uk',
          },
          labour: {
            score: 4,
            summary: 'Labour has applied VAT to private school fees, with revenue directed to state schools, and committed to real-terms increases in per-pupil funding.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats pledged £4bn in additional school funding, targeting SEND provision, mental health support in schools, and school rebuilding.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 3,
            summary: 'Reform UK proposes reducing bureaucracy and management costs in education to redirect funding to classrooms, without specifying a headline per-pupil funding increase.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party calls for significant real-terms increases in per-pupil school funding as part of a well-funded, fully comprehensive state education system.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'edu_3',
        text: 'Free school meals should be universally available to all primary school children regardless of family income.',
        tooltip: 'Currently free school meals are means-tested in England. Universal provision would remove the threshold entirely for primary-age children.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives maintained means-tested free school meals and did not commit to universal provision, citing cost.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour has expanded free school meal eligibility and is committed to further expansion as part of their child poverty strategy.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats committed to universal free school meals for all primary school children, funded through reforms to business rates.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 2,
            summary: 'Reform UK supports targeted provision for those who genuinely need it but does not support universal free school meals for all children regardless of income.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports universal free school meals for all school-age children as a key anti-poverty measure and investment in children\'s wellbeing.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'edu_4',
        text: 'Grammar schools and academic selection in the state sector should be expanded.',
        tooltip: 'Grammar schools select pupils based on academic ability at age 11. They exist in some areas of England and are rare in Wales and Scotland.',
        stances: {
          conservative: {
            score: 4,
            summary: 'Conservatives support grammar schools and parental choice in education. Some new grammar school provision and expansions have been approved under Conservative governments.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 2,
            summary: 'Labour opposes the creation of new grammar schools and is committed to a comprehensive state education system that does not select on academic ability.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 1,
            summary: 'The Liberal Democrats strongly oppose selective education and grammar schools, arguing they entrench disadvantage and inequality from an early age.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 4,
            summary: 'Reform UK support academic selection and parental choice, backing grammar schools as a route for academically able children from all backgrounds.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 1,
            summary: 'The Green Party strongly opposes grammar schools and all forms of academic selection, advocating for a fully comprehensive, non-selective state system.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'edu_5',
        text: 'Vocational qualifications and apprenticeships should receive equal status and funding to academic routes.',
        tooltip: 'This concerns parity between university degrees and vocational qualifications like T-levels, BTECs and apprenticeships.',
        stances: {
          conservative: {
            score: 3,
            summary: 'Conservatives introduced T-levels as a new vocational route and reformed the apprenticeship levy, but the academic-vocational parity gap persists.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour established Skills England and reformed the Growth and Skills Levy to give employers more flexibility, placing vocational training at the heart of economic growth plans.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support full parity of esteem and funding between academic and vocational qualifications as central to a fair skills system.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 4,
            summary: 'Reform UK strongly values practical, vocational skills and supports equal status for apprenticeships and technical qualifications alongside academic degrees.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 4,
            summary: 'The Green Party supports equal funding and status for all educational pathways, viewing vocational training as just as valuable as academic qualifications.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
    ],
  },

  {
    id: 'tax',
    name: 'Tax & Redistribution',
    shortName: 'Tax',
    emoji: '💰',
    description: 'Income tax, corporation tax, wealth taxes, and fiscal redistribution.',
    questions: [
      {
        id: 'tax_1',
        text: 'Income tax rates should be increased for the highest earners to fund better public services.',
        tooltip: 'The top rate of income tax in the UK is 45% on earnings above £125,140. Some parties support raising this; others want to keep or reduce it.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives strongly oppose raising income tax for high earners and have sought to cut taxes at the top, including Kwarteng\'s ill-fated 2022 top-rate cut.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 3,
            summary: 'Labour pledged not to raise income tax rates but has frozen thresholds, creating an effective real-terms tax rise. They have not committed to raising the 45p rate.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats proposed a 1p rise in income tax across all bands to fund the NHS and social care, with additional levies on very high earners.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK proposes a flat income tax of 20% and raising the personal allowance to £20,000, explicitly cutting taxes for higher earners.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports raising the top rate of income tax to 60% on earnings above £125,000 as part of a broader wealth redistribution programme.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'tax_2',
        text: 'Corporation tax should be raised to ensure businesses contribute more to funding public services.',
        tooltip: 'Corporation tax is charged on company profits. The UK rate is currently 25% for large companies. Some parties want it higher; others want it lower.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives have repeatedly sought to cut corporation tax to attract investment, and resisted the 2023 rise from 19% to 25% before eventually accepting it.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour raised corporation tax to 25% and has promised to keep it stable at that level to give businesses certainty, viewing it as a fair contribution.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 3,
            summary: 'The Liberal Democrats support maintaining the 25% rate and closing loopholes to ensure multinationals pay their fair share, without committing to a further rise.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK would cut corporation tax to 15% to stimulate business investment and growth, arguing lower taxes lead to higher overall revenues.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports raising corporation tax further to 30%+ and cracking down on offshore tax avoidance as part of funding the transition to a green economy.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'tax_3',
        text: 'A new annual wealth tax should be introduced on large accumulated assets.',
        tooltip: 'A wealth tax would apply to the total value of assets (savings, property, investments) above a set threshold, charged annually rather than only when assets are sold.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives strongly oppose any form of wealth tax, viewing it as counterproductive to investment, savings, and the aspiration to build wealth.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 2,
            summary: 'Labour has introduced targeted changes such as taxing private equity carried interest and raising capital gains tax, but has not committed to a broad annual wealth tax.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support equalising capital gains tax with income tax and favour reforms to ensure wealth is taxed more fairly relative to earned income.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK strongly oppose any wealth tax, arguing it discourages saving and investment and would drive wealth out of the UK.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would introduce a 1% annual wealth tax on net assets above £10 million, projected to raise over £40bn per year to fund public services.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'tax_4',
        text: 'Windfall taxes on energy companies making excess profits should be maintained or increased.',
        tooltip: 'A windfall tax (Energy Profits Levy) was introduced in 2022 on North Sea oil and gas companies making excess profits due to the global energy price surge.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives introduced a windfall tax reluctantly and have been supportive of North Sea oil and gas development, opposing moves that would limit production.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour has extended and strengthened the Energy Profits Levy, removing investment allowances that reduced its effect, to fund the green energy transition.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support maintaining the windfall tax on energy companies and using revenue to fund clean energy investment and household energy bill support.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK strongly oppose windfall taxes on the energy sector and would scrap them, backing full development of North Sea oil and gas.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party supports significant windfall taxes on fossil fuel companies and the ending of all subsidies to the industry as part of the transition away from fossil fuels.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'tax_5',
        text: 'Council tax should be reformed to be based on current property values rather than 1991 valuations.',
        tooltip: 'Council tax bands are still based on property values from 1991. A revaluation could shift bills significantly — up for expensive areas, down for cheaper ones.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives have consistently avoided revaluing property for council tax, fearing the political consequences of higher bills in prosperous areas.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 3,
            summary: 'Labour has acknowledged the unfairness of 1991 valuations but has not committed to a full revaluation, concerned about the political complexity.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support replacing council tax with a fairer property tax based on current values to reduce the burden on lower-income homeowners.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 2,
            summary: 'Reform UK\'s priority is to freeze council tax, not to revalue it. A revaluation would risk higher bills for many of their voters.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would replace council tax entirely with a Land Value Tax — a tax on the value of land (not buildings), which they argue is more progressive and economically efficient.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
    ],
  },

  {
    id: 'housing',
    name: 'Housing Crisis',
    shortName: 'Housing',
    emoji: '🏠',
    description: 'Affordable housing, rent, planning, and support for renters and first-time buyers.',
    questions: [
      {
        id: 'hse_1',
        text: 'The government should build significantly more social and council housing.',
        tooltip: 'Social housing (council housing and housing association homes) offers below-market rents. The UK\'s social housing stock has declined sharply since the 1980s Right to Buy scheme.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives maintained Right to Buy, which reduced social housing stock, and consistently missed housebuilding targets, including social homes.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 5,
            summary: 'Labour has committed to 1.5 million new homes including the largest council housing programme for a generation and is reforming Right to Buy to protect social stock.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats would build 150,000 social homes per year as part of their overall 380,000 homes target, including significant investment in affordable housing.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 2,
            summary: 'Reform UK prefers market-led housing solutions and does not emphasise social housing, arguing deregulation and reduced immigration will ease housing pressure.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party makes social housing a central plank of their platform, calling for a massive state-led building programme of genuinely affordable homes.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'hse_2',
        text: 'Private sector rents should be capped or controlled by the government to improve affordability.',
        tooltip: 'Rent controls limit how much landlords can charge or increase rents. Supporters say they protect tenants; critics argue they reduce housing supply.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives strongly oppose rent controls as market distortions that reduce housing supply and disincentivise landlords from renting.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 3,
            summary: 'Labour\'s Renters\' Rights Act ends no-fault evictions and gives tenants more security, but stops short of rent caps, citing supply concerns.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support giving local authorities powers to introduce rent controls in areas of acute housing stress.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK oppose rent controls, arguing the solution to high rents is more housebuilding and less regulation, not price-setting by government.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would introduce a national rent control system linking rents to inflation and ending runaway rent increases that price people out of their homes.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'hse_3',
        text: 'Planning laws should be significantly relaxed to allow more housebuilding.',
        tooltip: 'The planning system controls where and what can be built. Critics say it is too restrictive; others argue looser rules threaten the environment and local character.',
        stances: {
          conservative: {
            score: 3,
            summary: 'Conservatives attempted planning reform but faced significant backbench opposition, leading to a diluted outcome that fell short of their original ambition.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour has reformed the National Planning Policy Framework, reintroduced mandatory housing targets, and opened greenbelt \'grey belt\' land to new development.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 3,
            summary: 'The Liberal Democrats support more housebuilding but favour community-led planning rather than blanket deregulation, seeking to protect local character.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 4,
            summary: 'Reform UK support significant deregulation of planning to unlock housebuilding, including building on greenbelt land, arguing demand far outstrips supply.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 2,
            summary: 'The Green Party opposes wholesale planning deregulation, arguing development must be subject to environmental safeguards and community consent.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'hse_4',
        text: 'Landlords who own multiple properties should pay significantly higher taxes.',
        tooltip: 'This includes measures like higher stamp duty surcharges, removal of mortgage interest relief, or capital gains reforms targeting those who own buy-to-let portfolios.',
        stances: {
          conservative: {
            score: 1,
            summary: 'Conservatives reduced mortgage interest tax relief for landlords but have opposed further increases in landlord taxes, viewing property investment as legitimate.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour has raised stamp duty surcharges on additional properties, abolished the furnished holiday lettings tax loophole, and reformed capital gains tax rules.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support additional taxes on multiple-property ownership as part of their housing affordability package, alongside second home council tax premiums.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK oppose higher taxes on landlords and property investors, arguing this would reduce rental supply and ultimately harm tenants through higher rents.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would introduce a progressive property tax and land value tax specifically targeting large landlords and multiple property owners.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
      {
        id: 'hse_5',
        text: 'Empty homes and second homes should be subject to much higher council tax charges.',
        tooltip: 'Around 270,000 long-term empty homes exist in England. Second homes in tourist areas like Cornwall and the Lake District are often blamed for pushing up prices for locals.',
        stances: {
          conservative: {
            score: 2,
            summary: 'Conservatives gave councils powers to charge up to 100% premium on empty homes but uptake was limited and they did not pursue a robust national policy.',
            source: 'Conservative 2024 Manifesto',
            sourceUrl: 'https://www.conservatives.com',
          },
          labour: {
            score: 4,
            summary: 'Labour has moved to double council tax on second homes and long-term empty properties as part of their housing supply and affordability agenda.',
            source: 'Labour 2024 Manifesto',
            sourceUrl: 'https://labour.org.uk',
          },
          libdems: {
            score: 4,
            summary: 'The Liberal Democrats support a 100% council tax premium on second homes and long-term empty properties to bring homes back into use and reduce speculation.',
            source: 'Lib Dems 2024 Manifesto',
            sourceUrl: 'https://www.libdems.org.uk',
          },
          reform: {
            score: 1,
            summary: 'Reform UK oppose higher taxes on property owners, including second home owners, arguing property rights should be respected and higher taxes are counterproductive.',
            source: 'Reform UK Contract with the People',
            sourceUrl: 'https://www.reformuk.com',
          },
          green: {
            score: 5,
            summary: 'The Green Party would impose punitive council tax rates on long-term empty homes and second homes to force properties onto the market and tackle housing shortages.',
            source: 'Green Party 2024 Manifesto',
            sourceUrl: 'https://greenparty.org.uk',
          },
        },
      },
    ],
  },
];
