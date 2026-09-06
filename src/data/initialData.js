export const INITIAL_COURSES_AND_MODULES = [
  // EASA PART-145 & PART-M COURSES
  {
    id: 'course-1',
    code: 'EASA-145-HF',
    title: 'Human Factor (HF) English',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Compliant with EASA Part 145.A.30(e) and Part M.A.706(f). Covers human error mechanisms, communication, situational awareness, and fatigue risk management.',
    price: 299.00,
    duration: '16 Hours',
    status: 'Active',
    icon: 'Users',
    books: [
      { id: 'b-101', title: 'EASA Part-145 Human Factors Training Manual', format: 'PDF (upload)', fileName: 'EASA_Part145_HF_Manual.pdf', size: '14.2 MB', pages: 184 },
      { id: 'b-102', title: 'ICAO Doc 9683 Human Factors Guidelines', format: 'PDF (upload)', fileName: 'ICAO_Doc9683_Summary.pdf', size: '8.5 MB', pages: 96 }
    ],
    notes: [
      { id: 'n-101', title: 'The Dirty Dozen in Aircraft Maintenance', readTime: '15 min', content: 'Detailed analysis of the 12 most common human error precursors: Lack of Communication, Complacency, Lack of Knowledge, Distraction, Lack of Teamwork, Fatigue, Lack of Resources, Pressure, Lack of Assertiveness, Stress, Lack of Awareness, and Norms.' },
      { id: 'n-102', title: 'PEAR Model in Aviation Operations', readTime: '10 min', content: 'People, Environment, Actions, and Resources framework for assessing operational risks on the maintenance ramp and hangar.' }
    ],
    quizzes: [
      {
        id: 'quiz-hf-1',
        title: 'Quiz 1: Fundamentals of Human Factors',
        description: 'Test your knowledge on cognitive limitations, the Dirty Dozen, and SHELL model.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 5, // Randomly pick 5 questions for student attempt
        questions: [
          {
            id: 'q-hf-1',
            text: 'Which element of the SHELL model represents the human operator in the center of the aviation maintenance system?',
            options: ['Software', 'Hardware', 'Liveware', 'Environment'],
            correctOption: 2,
            explanation: 'In Hawkins SHELL model, Liveware (the human) is at the center, interacting with Software, Hardware, Environment, and other Liveware.'
          },
          {
            id: 'q-hf-2',
            text: 'Which of the following is NOT one of Dupont\'s "Dirty Dozen" human factor pre-conditions?',
            options: ['Lack of Assertiveness', 'Complacency', 'Excessive Hydration', 'Distraction'],
            correctOption: 2,
            explanation: 'Excessive hydration is not a human error factor. The Dirty Dozen includes Complacency, Distraction, Lack of Assertiveness, Fatigue, etc.'
          },
          {
            id: 'q-hf-3',
            text: 'What is the primary objective of a "Just Culture" in an EASA Part-145 approved maintenance organisation?',
            options: [
              'Punish all personnel involved in any incident without exception',
              'Encourage honest reporting of errors while drawing a clear line between acceptable and unacceptable willful behavior',
              'Completely eliminate all internal disciplinary procedures',
              'Transfer maintenance liability exclusively to licensed certifying staff'
            ],
            correctOption: 1,
            explanation: 'A Just Culture fosters open reporting by ensuring people are not punished for actions, omissions or decisions taken by them that are commensurate with their experience, but willful violations are not tolerated.'
          },
          {
            id: 'q-hf-4',
            text: 'Circadian dysrhythmia in aviation maintenance technicians is primarily caused by:',
            options: ['Loud noise in hangar environments', 'Shift work and disruption of the 24-hour biological body clock', 'Chemical fumes from aviation turbine fuel', 'Inadequate lighting during night turnarounds'],
            correctOption: 1,
            explanation: 'Circadian dysrhythmia (jet lag / shift disruption) occurs when circadian rhythms are out of sync with the external environment, common in rotational night shifts.'
          },
          {
            id: 'q-hf-5',
            text: 'Under EASA regulations, what is the required interval for recurrent Human Factors continuation training for maintenance personnel?',
            options: ['Every 6 months', 'Every 24 months (2 years)', 'Every 5 years', 'Once every 10 years'],
            correctOption: 1,
            explanation: 'Part 145.A.30(e) requires that certifying staff and support staff receive human factors continuation training at least every 2 years (24 months).'
          },
          {
            id: 'q-hf-6',
            text: 'Which cognitive bias causes an engineer to see what they expect to see rather than what is actually present?',
            options: ['Confirmation bias', 'Hindsight bias', 'Sunk cost fallacy', 'Availability heuristic'],
            correctOption: 0,
            explanation: 'Confirmation bias leads technicians to search for or interpret information in a way that confirms preexisting beliefs or expectations.'
          },
          {
            id: 'q-hf-7',
            text: 'In interpersonal communication, what percentage of human communication meaning is typically conveyed non-verbally?',
            options: ['Less than 10%', 'Approximately 30%', 'Over 55% to 70%', '100%'],
            correctOption: 2,
            explanation: 'Studies show that body language, tone, and facial expressions account for over 60-70% of communication impact compared to literal words alone.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    code: 'EASA-FTS-PH2',
    title: 'Fuel Tank Safety (FTS)',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Phase 2 Fuel Tank Safety training in accordance with Appendix IV to AMC to 145.A.30(e) and 145.B.10(3). CDCCL requirements, flammability reduction systems, and explosion prevention.',
    price: 249.00,
    duration: '12 Hours',
    status: 'Active',
    icon: 'Plane',
    books: [
      { id: 'b-201', title: 'EASA FTS Phase 2 Airworthiness Directives & CDCCL', format: 'PDF (upload)', fileName: 'EASA_FTS_Phase2_Standard.pdf', size: '11.8 MB', pages: 140 }
    ],
    notes: [
      { id: 'n-201', title: 'CDCCL (Critical Design Configuration Control Limitations)', readTime: '12 min', content: 'Guidelines on maintaining critical design features such as wire separation, bonding strap integrity, and spark prevention in fuel vapor zones.' }
    ],
    quizzes: [
      {
        id: 'quiz-fts-1',
        title: 'Quiz 1: CDCCL & Flammability Prevention',
        description: 'Assess comprehension of TWA 800 findings, Special Federal Aviation Regulation 88 (SFAR 88), and CDCCL task cards.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 5,
        questions: [
          {
            id: 'q-fts-1',
            text: 'What does the acronym CDCCL stand for in aviation fuel tank safety?',
            options: [
              'Central Distribution Control Check List',
              'Critical Design Configuration Control Limitations',
              'Combustion Danger Check & Cleaning Log',
              'Continuous Design Calibration Control Loop'
            ],
            correctOption: 1,
            explanation: 'CDCCL stands for Critical Design Configuration Control Limitations, which define airworthiness limitations to prevent ignition sources inside fuel tanks.'
          },
          {
            id: 'q-fts-2',
            text: 'Which historical accident was the primary catalyst for SFAR 88 and EASA fuel tank safety regulations?',
            options: ['Air France Flight 4590', 'TWA Flight 800 (Boeing 747-100)', 'Swissair Flight 111', 'Aloha Airlines Flight 243'],
            correctOption: 1,
            explanation: 'TWA Flight 800 exploded over Long Island in 1996 due to ignition of flammable fuel/air mixture in the center wing fuel tank, prompting SFAR 88.'
          },
          {
            id: 'q-fts-3',
            text: 'What gas is predominantly used in modern commercial aircraft Flammability Reduction Systems (FRS) to inert fuel tanks?',
            options: ['Carbon Monoxide', 'Nitrogen-Enriched Air (NEA)', 'Argon', 'Pure Helium'],
            correctOption: 1,
            explanation: 'Nitrogen-Enriched Air (NEA) generated by Air Separation Modules (ASMs) reduces oxygen concentration below flammable thresholds.'
          },
          {
            id: 'q-fts-4',
            text: 'Any maintenance task that affects a CDCCL feature must be:',
            options: [
              'Carried out without any documentation if visual inspection passes',
              'Clearly identified in the technical documentation and inspected according to specific CDCCL instructions',
              'Reported directly to ICAO within 24 hours',
              'Approved by air traffic control before refuelling'
            ],
            correctOption: 1,
            explanation: 'CDCCL tasks must be explicitly identified in the maintenance instructions and performed with exact compliance to preserve ignition safety.'
          },
          {
            id: 'q-fts-5',
            text: 'What is the maximum allowable resistance value generally permitted for fuel system electrical bonding jumpers?',
            options: ['Less than 0.005 ohms (5 milliohms)', '50 ohms', '1000 ohms', '10 ohms'],
            correctOption: 0,
            explanation: 'Fuel system bonding jumpers require ultra-low resistance (typically < 0.005 ohms) to safely dissipate static electricity and lightning energy.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    code: 'EASA-EWIS-TG',
    title: 'Electrical Wiring Interconnection System (EWIS)',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Target Groups 1 & 2 comprehensive EWIS training per AMC 20-22. Inspection, housekeeping, contamination protection, wire degradation identification, and clamping practices.',
    price: 249.00,
    duration: '14 Hours',
    status: 'Active',
    icon: 'Zap',
    books: [
      { id: 'b-301', title: 'AMC 20-22 EWIS Technical Standard and Inspection Manual', format: 'PDF (upload)', fileName: 'EWIS_AMC20_22_Guide.pdf', size: '18.4 MB', pages: 210 }
    ],
    notes: [
      { id: 'n-301', title: 'EWIS Housekeeping and Protection Principles', readTime: '15 min', content: 'Clean-as-you-go policy, proper bagging of connectors during maintenance, separation of wiring from hydraulic/oxygen lines, and minimum bend radii.' }
    ],
    quizzes: [
      {
        id: 'quiz-ewis-1',
        title: 'Quiz 1: EWIS Inspection Standards',
        description: 'Verify understanding of wire chafing, clamp orientation, drip loops, and contamination control.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-ewis-1',
            text: 'Why must drip loops be provided in electrical wire harness routing near connectors?',
            options: [
              'To allow excess wire for easy splicing in case of emergency',
              'To prevent moisture and condensation from running directly into the electrical connector or terminal block',
              'To reduce electromagnetic interference',
              'To increase aerodynamic cooling'
            ],
            correctOption: 1,
            explanation: 'Drip loops ensure that any fluid condensation flows downward and drips away rather than accumulating in connector plugs.'
          },
          {
            id: 'q-ewis-2',
            text: 'What is the standard minimum clearance between an electrical wiring bundle and flammable fluid or oxygen lines?',
            options: ['50 mm (2 inches) where practicable', '1 mm', '500 mm (20 inches)', 'Zero clearance if nylon sleeves are used'],
            correctOption: 0,
            explanation: 'AMC 20-22 recommends a minimum clearance of 50 mm (2 inches) between wiring and fluid/oxygen carrying lines, with a positive physical separation.'
          },
          {
            id: 'q-ewis-3',
            text: 'What does the EWIS philosophy "Clean as you go" mandate during maintenance?',
            options: [
              'Wash the entire aircraft exterior after each shift',
              'Immediately clean and remove all swarf, drill shavings, zip-tie clippings, and foreign debris from wire raceways as work proceeds',
              'Use high-pressure steam on electrical junction boxes',
              'Only clean wiring during heavy C-checks'
            ],
            correctOption: 1,
            explanation: 'Metallic shavings, swarf, and debris left near wiring cause insulation breakdown and arcing; cleaning as you go is mandatory.'
          },
          {
            id: 'q-ewis-4',
            text: 'Which type of wire clamp installation is considered non-compliant and hazardous?',
            options: [
              'A clamp where the wire bundle is pinched under the mounting screw or rubber cushion is deformed excessively',
              'A clamp secured with self-locking hardware',
              'A cushion clamp that grips the bundle firmly without pinching wires',
              'A clamp mounted on aircraft structural ribs with correct stand-offs'
            ],
            correctOption: 0,
            explanation: 'Pinching wires under clamp mounting tabs causes severe insulation shearing and short circuits.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    code: 'EASA-AMP-M01',
    title: 'Aircraft Maintenance Planning',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Principles of MSG-3 methodology, task interval escalation, maintenance programme (AMP) development, and reliability monitoring under Part-CAMO.',
    price: 279.00,
    duration: '20 Hours',
    status: 'Active',
    icon: 'Wrench',
    books: [
      { id: 'b-401', title: 'MSG-3 Analysis & Maintenance Program Formulation', format: 'PDF (upload)', fileName: 'Maintenance_Planning_AMP_Guide.pdf', size: '15.0 MB', pages: 160 }
    ],
    notes: [
      { id: 'n-401', title: 'MSG-3 Logic and Task Selection', readTime: '18 min', content: 'Failure consequence categories: Evident safety, hidden safety, operational economic, and non-operational economic.' }
    ],
    quizzes: [
      {
        id: 'quiz-amp-1',
        title: 'Quiz 1: MSG-3 & AMP Optimization',
        description: 'Test fundamentals of Aircraft Maintenance Programmes and regulatory approvals.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-amp-1',
            text: 'In MSG-3 methodology, what is the first priority when categorizing an aircraft system failure effect?',
            options: ['Direct economic loss', 'Passenger comfort', 'Flight safety consequence (hidden or evident)', 'Turnaround schedule impact'],
            correctOption: 2,
            explanation: 'Safety is the paramount initial branching criterion in MSG-3 logic before considering operational or economic factors.'
          },
          {
            id: 'q-amp-2',
            text: 'Under EASA regulations, who holds the primary legal responsibility for the approval and continuous development of the Aircraft Maintenance Programme (AMP)?',
            options: ['The Part-145 maintenance organization', 'The CAMO (Continuing Airworthiness Management Organisation) or Owner', 'The component manufacturer', 'The airport ground handler'],
            correctOption: 1,
            explanation: 'The CAMO (Part-CAMO / Part-M Subpart G) is responsible for producing, updating, and submitting the AMP to the Competent Authority.'
          },
          {
            id: 'q-amp-3',
            text: 'What is the purpose of an Aircraft Reliability Programme?',
            options: [
              'To guarantee that zero maintenance defects ever occur',
              'To monitor maintenance effectiveness, detect recurring trends, and justify escalation or de-escalation of task intervals',
              'To eliminate pre-flight inspections',
              'To replace the Master Minimum Equipment List (MMEL)'
            ],
            correctOption: 1,
            explanation: 'Reliability programs analyze operational failure data to confirm the AMP is controlling failure rates and validating scheduled task intervals.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    code: 'EASA-QA-SYS',
    title: 'Quality Assurance Systems',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Internal audit techniques, corrective action follow-ups, independent compliance monitoring, and quality audits under EASA Part 145.A.65.',
    price: 260.00,
    duration: '18 Hours',
    status: 'Active',
    icon: 'CheckSquare',
    books: [
      { id: 'b-501', title: 'Aviation Quality Auditing & Compliance Manual', format: 'PDF (upload)', fileName: 'Aviation_Quality_Systems_Auditing.pdf', size: '12.0 MB', pages: 130 }
    ],
    notes: [
      { id: 'n-501', title: 'Audit Planning and Root Cause Analysis (5 Whys)', readTime: '14 min', content: 'Techniques for determining root causes of non-conformities rather than treating immediate symptoms.' }
    ],
    quizzes: [
      {
        id: 'quiz-qa-1',
        title: 'Quiz 1: Auditing & Root Cause Analysis',
        description: 'Audit cycles, non-compliance classification, and EASA Level 1 vs Level 2 findings.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-qa-1',
            text: 'Under EASA regulations, what constitutes a Level 1 finding in a quality audit?',
            options: [
              'Any minor clerical error in a logbook entry',
              'Any significant non-compliance which lowers safety standard and seriously hazards flight safety',
              'A recommendation for software upgrade',
              'A delay in issuing a monthly status report'
            ],
            correctOption: 1,
            explanation: 'A Level 1 finding is any significant non-compliance which lowers safety standards and directly hazards flight safety, requiring immediate corrective action.'
          },
          {
            id: 'q-qa-2',
            text: 'Why must quality auditors remain independent from the operational maintenance departments they audit?',
            options: [
              'Because they are not licensed engineers',
              'To guarantee objectivity, impartiality, and eliminate conflicts of interest',
              'Because national law forbids interaction between engineers and auditors',
              'To reduce operational expenses'
            ],
            correctOption: 1,
            explanation: 'Independence ensures impartial findings and prevents organizational pressure from compromising audit integrity.'
          },
          {
            id: 'q-qa-3',
            text: 'In root cause analysis, the primary goal of the "5 Whys" method is to:',
            options: [
              'Assign blame to the individual mechanic',
              'Drill down beneath superficial symptoms to discover the fundamental systemic failure',
              'Complete the report within five minutes',
              'Reduce the number of audit findings'
            ],
            correctOption: 1,
            explanation: 'The 5 Whys technique iteratively investigates causal chains until systemic organizational root causes are uncovered.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    code: 'EASA-PART-M',
    title: 'Continuing Airworthiness',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'EASA Part-M and Part-ML regulatory framework. Airworthiness Review Certificates (ARC), Airworthiness Directives (AD), and service bulletins management.',
    price: 310.00,
    duration: '24 Hours',
    status: 'Active',
    icon: 'ClipboardCheck',
    books: [
      { id: 'b-601', title: 'Part-M & Part-ML Comprehensive Regulatory Guide', format: 'PDF (upload)', fileName: 'Part_M_Airworthiness_Regulation.pdf', size: '22.1 MB', pages: 280 }
    ],
    notes: [
      { id: 'n-601', title: 'ARC Issuance and Extension Protocols', readTime: '16 min', content: 'Detailed conditions for issuing an EASA Form 15a or Form 15b Airworthiness Review Certificate.' }
    ],
    quizzes: [
      {
        id: 'quiz-m-1',
        title: 'Quiz 1: Airworthiness Review & AD Compliance',
        description: 'Test Part-M obligations, ARC validity periods, and mandatory occurrence reporting.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m-1',
            text: 'What is the maximum standard validity period of an EASA Airworthiness Review Certificate (Form 15a/b)?',
            options: ['6 months', '1 year (12 months)', '3 years', 'Indefinite unless revoked'],
            correctOption: 1,
            explanation: 'An ARC has a standard validity period of one year, subject to allowable extensions under controlled environment conditions.'
          },
          {
            id: 'q-m-2',
            text: 'Compliance with an Airworthiness Directive (AD) issued by the state of design is:',
            options: ['Optional if operational costs are excessive', 'Mandatory by law to maintain aircraft airworthiness', 'Recommended only for commercial passenger flights', 'Voluntary for private operators'],
            correctOption: 1,
            explanation: 'Airworthiness Directives are legally binding mandatory airworthiness regulations that must be executed within specified limits.'
          },
          {
            id: 'q-m-3',
            text: 'Within what timeframe must an EASA occurrence report (Form 44) be submitted following an airworthiness incident?',
            options: ['Within 72 hours', 'Within 30 days', 'Before the next annual check', 'Within 2 hours'],
            correctOption: 0,
            explanation: 'Regulation (EU) No 376/2014 and Part-M mandate that safety occurrences must be reported to the authority within 72 hours.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-7',
    code: 'EASA-SMS-HF',
    title: 'Safety Management System + Human Factor (SMS + HF) Initial Course',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Integrated SMS and HF initial qualification course fulfilling Regulation (EU) 2021/1963. Safety risk management, safety culture, and human performance.',
    price: 349.00,
    duration: '28 Hours',
    status: 'Active',
    icon: 'ShieldCheck',
    books: [
      { id: 'b-701', title: 'Integrated SMS & HF Training Syllabus & Reg (EU) 2021/1963', format: 'PDF (upload)', fileName: 'SMS_HF_Combined_Syllabus.pdf', size: '19.5 MB', pages: 230 }
    ],
    notes: [
      { id: 'n-701', title: 'The 4 Pillars of ICAO Safety Management', readTime: '15 min', content: 'Safety Policy and Objectives, Safety Risk Management, Safety Assurance, and Safety Promotion.' }
    ],
    quizzes: [
      {
        id: 'quiz-smshf-1',
        title: 'Quiz 1: SMS Pillars & Risk Mitigation',
        description: 'Comprehensive assessment on hazard identification and ALARP principles.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-smshf-1',
            text: 'In aviation safety risk assessment, what does the principle "ALARP" stand for?',
            options: [
              'Always Low Altitude Route Planning',
              'As Low As Reasonably Practicable',
              'Aviation Legal Accountability & Regulatory Policy',
              'Automated Line Aircraft Reliability Protocol'
            ],
            correctOption: 1,
            explanation: 'ALARP means As Low As Reasonably Practicable, balancing risk reduction against practical feasibility and resources.'
          },
          {
            id: 'q-smshf-2',
            text: 'Which of the following is considered an active hazard identification methodology?',
            options: [
              'Waiting for an aircraft accident to happen before reviewing procedures',
              'Voluntary safety reporting systems, safety surveys, and routine flight data monitoring',
              'Ignoring technician comments during morning briefings',
              'Solely reviewing manufacturer service letters'
            ],
            correctOption: 1,
            explanation: 'Proactive hazard identification relies on confidential reporting, routine audits, and operational data monitoring.'
          },
          {
            id: 'q-smshf-3',
            text: 'What role does top management commitment play in an effective SMS?',
            options: [
              'None, SMS is purely an engineering department task',
              'It defines the accountable manager\'s authority and allocates required resources to safety programs',
              'It guarantees that zero maintenance budget is spent on training',
              'It delegates all safety liabilities to junior mechanics'
            ],
            correctOption: 1,
            explanation: 'Top leadership commitment, embodied by the Accountable Manager, is the cornerstone of organizational safety policy.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-8',
    code: 'CFM-56-FAM',
    title: 'CFM 56-5B Engine Technical Familiarisation',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'General description and mechanical layout of the CFM 56-5B high-bypass turbofan engine powering the Airbus A320 family. FADEC, fuel, oil, and pneumatic systems.',
    price: 320.00,
    duration: '24 Hours',
    status: 'Active',
    icon: 'Cpu',
    books: [
      { id: 'b-801', title: 'CFM 56-5B Line Maintenance & Engine Familiarisation', format: 'PDF (upload)', fileName: 'CFM56_5B_Technical_Manual.pdf', size: '28.0 MB', pages: 310 }
    ],
    notes: [
      { id: 'n-801', title: 'CFM 56-5B Core vs Bypass Airflow & FADEC Logic', readTime: '20 min', content: 'Dual-channel Full Authority Digital Engine Control (ECU/EEC) operations and variable stator vane control.' }
    ],
    quizzes: [
      {
        id: 'quiz-cfm-1',
        title: 'Quiz 1: Engine Architecture & FADEC',
        description: 'Covers compressor stages, active clearance control, and dual-channel EEC redundancy.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-cfm-1',
            text: 'The CFM 56-5B is a dual-spool turbofan engine. Which spool drives the single-stage fan and booster stages?',
            options: ['The High Pressure (N2) spool', 'The Low Pressure (N1) spool driven by the LP turbine', 'The accessory gearbox directly', 'An external electric motor'],
            correctOption: 1,
            explanation: 'The N1 Low Pressure rotor comprises the fan and 4-stage booster driven by a 4-stage Low Pressure Turbine.'
          },
          {
            id: 'q-cfm-2',
            text: 'How does the CFM 56-5B Electronic Control Unit (ECU) achieve channel redundancy?',
            options: [
              'It has one channel that operates only during takeoff',
              'It has two completely independent channels (A & B), with automatic switchover if the active channel degrades',
              'It relies on mechanical cables when electronic control fails',
              'It uses hydraulic fluid to compute thrust ratings'
            ],
            correctOption: 1,
            explanation: 'Dual independent channels (Channel A and Channel B) ensure seamless fail-safe operation.'
          },
          {
            id: 'q-cfm-3',
            text: 'What is the primary function of the Active Clearance Control (ACC) system on the turbine casings?',
            options: [
              'To heat the cabin air',
              'To minimize turbine blade tip clearances by blowing cooling air on the case, thereby maximizing aerodynamic efficiency and reducing EGT',
              'To lubricate turbine bearings',
              'To extinguish engine tailpipe fires'
            ],
            correctOption: 1,
            explanation: 'ACC directs fan and compressor air onto turbine cases to match thermal expansion, maintaining tight blade-tip clearances.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-9',
    code: 'AIR-HD-OPS',
    title: 'Aircraft Handling Course',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Ground servicing, aircraft towing, marshaling, mooring, jacking, and ramp safety procedures in adherence to IATA Airport Handling Manual (AHM).',
    price: 180.00,
    duration: '10 Hours',
    status: 'Active',
    icon: 'Navigation',
    books: [
      { id: 'b-901', title: 'IATA AHM Ground Operations & Aircraft Towing Standard', format: 'PDF (upload)', fileName: 'Aircraft_Handling_Towing_Procedures.pdf', size: '10.5 MB', pages: 120 }
    ],
    notes: [
      { id: 'n-901', title: 'Towing Shear Pins and Safety Turn Radii', readTime: '12 min', content: 'Pre-tow checklists, nose wheel steering deactivation pin insertion, and maximum turning angle limitations.' }
    ],
    quizzes: [
      {
        id: 'quiz-hd-1',
        title: 'Quiz 1: Ramp Operations & Towing Safety',
        description: 'Verify marshaling signals, wing-walker duties, and steering bypass pin rules.',
        timeLimitMinutes: 10,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-hd-1',
            text: 'What critical action must be completed before attaching a tow-bar to an aircraft nose landing gear?',
            options: [
              'Depressurize all aircraft passenger doors',
              'Insert the nose gear steering bypass pin to prevent hydraulic lockup of the steering cylinders during towing',
              'Turn off all aircraft emergency lights',
              'Deflate the nose gear shock strut'
            ],
            correctOption: 1,
            explanation: 'The steering bypass pin mechanically disengages nose wheel steering hydraulics to avoid damaging steering actuators.'
          },
          {
            id: 'q-hd-2',
            text: 'What is the primary role of a wing-walker during aircraft pushback in congested ramp areas?',
            options: [
              'To assist passengers with baggage',
              'To continuously monitor wingtip clearance from obstacles and immediately signal emergency stop to the tug driver if clearance is breached',
              'To refuel the wing tanks while moving',
              'To check tire pressures during roll'
            ],
            correctOption: 1,
            explanation: 'Wing-walkers maintain visual lines of sight on wingtips and ground equipment to avert costly ramp collisions.'
          },
          {
            id: 'q-hd-3',
            text: 'When jacking an aircraft indoors or outdoors, what is the most important weather limitation?',
            options: [
              'Jacking should never be done on sunny days',
              'Maximum allowable ambient wind velocity specified in the Aircraft Maintenance Manual (AMM) must not be exceeded',
              'Jacking is only permitted during night shifts',
              'Ambient temperature must be exactly 20 degrees Celsius'
            ],
            correctOption: 1,
            explanation: 'High winds generate dangerous side loads that can cause an aircraft to slip off tripods or collapse jack pads.'
          }
        ]
      }
    ]
  },

  // EASA PART 66 - MODULES
  {
    id: 'module-1',
    code: 'PART66-M01',
    title: 'Module 1 - Mathematics',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Arithmetic, Algebra, and Geometry for aircraft maintenance technicians according to EASA Part 66 Appendix I syllabus.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'Calculator',
    books: [
      { id: 'b-m1-01', title: 'EASA Part-66 Module 1: Mathematics Text & Worksheets', format: 'PDF (upload)', fileName: 'EASA_Part66_Module01_Mathematics.pdf', size: '14.5 MB', pages: 190 }
    ],
    notes: [
      { id: 'n-m1-01', title: 'Trigonometric Functions in Aviation Navigation', readTime: '15 min', content: 'Sine, Cosine, Tangent, and vector resolution for lift, drag, and crosswind calculations.' },
      { id: 'n-m1-02', title: 'Logarithmic Scales and Decibel Calculations', readTime: '10 min', content: 'Formulas for sound pressure level, RF signal attenuation, and aircraft noise certifications.' }
    ],
    quizzes: [
      {
        id: 'quiz-m1-1',
        title: 'Quiz 1: Introduction',
        description: 'Test your knowledge on the fundamentals of arithmetic, fractions, decimals, and ratios.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 5,
        questions: [
          {
            id: 'q-m1-1',
            text: 'Evaluate the expression: (3/4 + 1/2) * 8',
            options: ['8', '10', '12', '14'],
            correctOption: 1,
            explanation: '3/4 + 1/2 = 3/4 + 2/4 = 5/4. Then (5/4) * 8 = 40/4 = 10.'
          },
          {
            id: 'q-m1-2',
            text: 'Convert the binary number 101101 to decimal equivalent:',
            options: ['35', '41', '45', '49'],
            correctOption: 2,
            explanation: '101101 in binary = 32 + 0 + 8 + 4 + 0 + 1 = 45.'
          },
          {
            id: 'q-m1-3',
            text: 'What is the value of x in the equation: 4x - 7 = 2x + 9?',
            options: ['6', '8', '7', '10'],
            correctOption: 1,
            explanation: '4x - 2x = 9 + 7 => 2x = 16 => x = 8.'
          },
          {
            id: 'q-m1-4',
            text: 'An aircraft consumes 480 kg of fuel in 40 minutes. What is its hourly fuel burn rate?',
            options: ['640 kg/hr', '720 kg/hr', '800 kg/hr', '960 kg/hr'],
            correctOption: 1,
            explanation: 'Fuel burn per minute = 480 / 40 = 12 kg/min. In 60 minutes = 12 * 60 = 720 kg/hr.'
          },
          {
            id: 'q-m1-5',
            text: 'What is the surface area of a circle with a radius of 7 cm? (Use pi = 22/7)',
            options: ['154 cm²', '144 cm²', '168 cm²', '176 cm²'],
            correctOption: 0,
            explanation: 'Area = pi * r² = (22/7) * 7 * 7 = 22 * 7 = 154 cm².'
          },
          {
            id: 'q-m1-6',
            text: 'If log₁₀(x) = 3, what is the value of x?',
            options: ['30', '300', '1000', '10000'],
            correctOption: 2,
            explanation: 'log₁₀(x) = 3 means x = 10³ = 1000.'
          }
        ]
      },
      {
        id: 'quiz-m1-2',
        title: 'Quiz 2: Advanced Topics',
        description: 'Challenge yourself with advanced questions on trigonometry, matrices, and vectors.',
        timeLimitMinutes: 20,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-m1-adv-1',
            text: 'In a right-angled triangle, if the opposite side is 3 and the adjacent side is 4, what is sin(theta)?',
            options: ['0.60', '0.75', '0.80', '1.33'],
            correctOption: 0,
            explanation: 'Hypotenuse = sqrt(3² + 4²) = 5. Sin(theta) = opposite/hypotenuse = 3/5 = 0.60.'
          },
          {
            id: 'q-m1-adv-2',
            text: 'What is the determinant of a 2x2 matrix [[4, 2], [3, 5]]?',
            options: ['14', '20', '26', '6'],
            correctOption: 0,
            explanation: 'Determinant = (4 * 5) - (2 * 3) = 20 - 6 = 14.'
          },
          {
            id: 'q-m1-adv-3',
            text: 'The derivative of y = 3x² + 4x - 5 with respect to x is:',
            options: ['6x + 4', '3x + 4', '6x² + 4', '6x - 5'],
            correctOption: 0,
            explanation: 'dy/dx = d/dx(3x²) + d/dx(4x) - d/dx(5) = 6x + 4.'
          },
          {
            id: 'q-m1-adv-4',
            text: 'Two velocity vectors of 30 knots North and 40 knots East result in a combined speed of:',
            options: ['50 knots', '70 knots', '45 knots', '35 knots'],
            correctOption: 0,
            explanation: 'Resultant = sqrt(30² + 40²) = sqrt(900 + 1600) = sqrt(2500) = 50 knots.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    code: 'PART66-M02',
    title: 'Module 2 - Physics',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Matter, Mechanics (Statics, Kinetics, Dynamics, Fluid Dynamics), Thermodynamics, Optics, and Wave Motion.',
    price: 199.00,
    duration: '40 Hours',
    status: 'Active',
    icon: 'Atom',
    books: [
      { id: 'b-m2-01', title: 'EASA Part-66 Module 2: Physics for AME', format: 'PDF (upload)', fileName: 'EASA_Part66_Module02_Physics.pdf', size: '16.8 MB', pages: 220 }
    ],
    notes: [
      { id: 'n-m2-01', title: 'Bernoulli Principle & Venturi Tube Dynamics', readTime: '15 min', content: 'Conservation of energy in fluid flow: static pressure decreases as fluid speed increases through a constriction.' },
      { id: 'n-m2-02', title: 'Thermodynamic Laws in Gas Turbines', readTime: '18 min', content: 'Brayton cycle, adiabatic compression, isentropic expansion, and thermal efficiency.' }
    ],
    quizzes: [
      {
        id: 'quiz-m2-1',
        title: 'Quiz 1: Statics, Dynamics & Thermodynamics',
        description: 'Newtonian mechanics, friction, Pascal law, and heat transfer principles.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-m2-1',
            text: 'According to Bernoulli’s theorem for incompressible non-viscous fluid flow:',
            options: [
              'Dynamic pressure + Static pressure = Total (Stagnation) pressure',
              'Static pressure increases when velocity increases',
              'Density increases exponentially with air speed',
              'Pressure is independent of flow geometry'
            ],
            correctOption: 0,
            explanation: 'Bernoullis equation states: P_static + 1/2 * rho * V² = P_total (constant along a streamline).'
          },
          {
            id: 'q-m2-2',
            text: 'What is the mechanical advantage of a hydraulic system with an input piston of area 5 cm² and an output piston of area 100 cm²?',
            options: ['10', '20', '50', '500'],
            correctOption: 1,
            explanation: 'Mechanical advantage = Output Area / Input Area = 100 / 5 = 20.'
          },
          {
            id: 'q-m2-3',
            text: 'Specific heat capacity is defined as the amount of heat energy required to:',
            options: [
              'Boil 1 kilogram of water at atmospheric pressure',
              'Raise the temperature of 1 unit mass of a substance by 1 degree Kelvin or Celsius',
              'Melt 1 gram of lead',
              'Maintain isothermal compression'
            ],
            correctOption: 1,
            explanation: 'Specific heat capacity c = Q / (m * delta_T).'
          },
          {
            id: 'q-m2-4',
            text: 'In transverse wave motion, the particle displacement is:',
            options: [
              'Parallel to the direction of wave propagation',
              'Perpendicular to the direction of wave propagation',
              'Opposite to the velocity vector',
              'Rotational only'
            ],
            correctOption: 1,
            explanation: 'Transverse waves oscillate perpendicular to the direction of energy propagation.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    code: 'PART66-M03',
    title: 'Module 3 - Electrical Fundamentals',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Electron theory, static electricity, Ohm’s law, Kirchhoff’s laws, AC theory, transformers, filters, and DC/AC generators.',
    price: 219.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Zap',
    books: [
      { id: 'b-m3-01', title: 'Module 3: Electrical Fundamentals Technical Handbook', format: 'PDF (upload)', fileName: 'EASA_MODULE_03.pdf', size: '21.0 MB', pages: 260 }
    ],
    notes: [
      { id: 'n-m3-01', title: 'Kirchhoff Voltage and Current Laws in Aircraft Circuits', readTime: '15 min', content: 'Node current summation and loop voltage drops in dual-bus 28V DC architectures.' }
    ],
    quizzes: [
      {
        id: 'quiz-m3-1',
        title: 'Quiz 1: DC Circuits & Magnetism',
        description: 'Test circuit analysis, resistance combinations, and magnetic flux density.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-m3-1',
            text: 'Three resistors of 10 ohms, 20 ohms, and 30 ohms are connected in series across a 120V DC supply. What is the total current?',
            options: ['1 A', '2 A', '3 A', '4 A'],
            correctOption: 1,
            explanation: 'Total Resistance R_total = 10 + 20 + 30 = 60 ohms. Current I = V / R = 120 / 60 = 2 A.'
          },
          {
            id: 'q-m3-2',
            text: 'What happens to the capacitive reactance (Xc) of a capacitor when the AC frequency increases?',
            options: ['It increases linearly', 'It remains unchanged', 'It decreases inversely', 'It drops to absolute zero immediately'],
            correctOption: 2,
            explanation: 'Xc = 1 / (2 * pi * f * C). As frequency f increases, Xc decreases.'
          },
          {
            id: 'q-m3-3',
            text: 'In an aircraft lead-acid battery, what is the nominal voltage of each single cell?',
            options: ['1.2 Volts', '2.0 Volts', '3.7 Volts', '12 Volts'],
            correctOption: 1,
            explanation: 'A lead-acid cell delivers approximately 2.0 to 2.1 Volts nominal (12 cells in a 24V battery).'
          },
          {
            id: 'q-m3-4',
            text: 'Lenz\'s law regarding electromagnetic induction states that the induced electromotive force:',
            options: [
              'Always acts to increase the magnetic flux change that created it',
              'Produces a current whose magnetic field opposes the change in magnetic flux that produced it',
              'Is directly proportional to thermal resistance',
              'Has no relationship with the direction of magnet motion'
            ],
            correctOption: 1,
            explanation: 'Lenzs law dictates that the induced current always opposes the flux change responsible for inducing it.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    code: 'PART66-M04',
    title: 'Module 4 - Electronic Fundamentals',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Semiconductors, diodes, transistors, integrated circuits, printed circuit boards, and servomechanisms.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'Cpu',
    books: [
      { id: 'b-m4-01', title: 'EASA Part-66 Module 4: Semiconductor & Avionics Principles', format: 'PDF (upload)', fileName: 'EASA_Part66_Module04_Electronics.pdf', size: '15.4 MB', pages: 180 }
    ],
    notes: [
      { id: 'n-m4-01', title: 'Zener Diode Voltage Regulation', readTime: '12 min', content: 'Reverse breakdown characteristics for stable reference voltages in avionics power supplies.' }
    ],
    quizzes: [
      {
        id: 'quiz-m4-1',
        title: 'Quiz 1: Diodes & Transistor Amplifiers',
        description: 'Covers PN junctions, rectification, BJT biasing, and op-amps.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m4-1',
            text: 'What is the barrier potential of a forward-biased silicon PN junction diode at room temperature?',
            options: ['0.2 Volts', '0.7 Volts', '1.5 Volts', '3.3 Volts'],
            correctOption: 1,
            explanation: 'A silicon diode requires approximately 0.6V to 0.7V forward bias to conduct, compared to 0.3V for germanium.'
          },
          {
            id: 'q-m4-2',
            text: 'An ideal operational amplifier (Op-Amp) is characterized by:',
            options: [
              'Zero input impedance and infinite output impedance',
              'Infinite input impedance and zero output impedance',
              'Unity gain at DC',
              'Zero bandwidth'
            ],
            correctOption: 1,
            explanation: 'Ideal op-amps have infinite input impedance, zero output impedance, infinite open-loop gain, and infinite bandwidth.'
          },
          {
            id: 'q-m4-3',
            text: 'In an NPN bipolar junction transistor (BJT), majority charge carriers in the base are:',
            options: ['Electrons', 'Holes', 'Ions', 'Photons'],
            correctOption: 1,
            explanation: 'In an NPN transistor, the base is p-type material, where holes are majority carriers and electrons are minority carriers.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    code: 'PART66-M05',
    title: 'Module 5 - Digital Techniques / Electronic Instrument Systems',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Electronic Instrument Systems, Data Buses (ARINC 429, ARINC 629, MIL-STD-1553), Logic Circuits, Fibre Optics, and Glass Cockpit EFIS.',
    price: 229.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Monitor',
    books: [
      { id: 'b-m5-01', title: 'Module 5: Digital Avionics & EFIS Cockpit Systems', format: 'PDF (upload)', fileName: 'EASA_Part66_Module05_Digital.pdf', size: '24.0 MB', pages: 290 }
    ],
    notes: [
      { id: 'n-m5-01', title: 'ARINC 429 Bus Protocol 32-Bit Word Structure', readTime: '15 min', content: 'Labels, Source/Destination Identifier (SDI), Data Field, Sign/Status Matrix (SSM), and Parity bit.' }
    ],
    quizzes: [
      {
        id: 'quiz-m5-1',
        title: 'Quiz 1: ARINC 429 & Logic Architecture',
        description: 'Test digital bus standards, logic gates, and ESD protective handling.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m5-1',
            text: 'An ARINC 429 data bus transmission word consists of how many total bits?',
            options: ['16 bits', '24 bits', '32 bits', '64 bits'],
            correctOption: 2,
            explanation: 'The ARINC 429 standard utilizes a 32-bit word format transmitted over a shielded twisted pair.'
          },
          {
            id: 'q-m5-2',
            text: 'Which logic gate outputs a binary 1 ONLY when all its inputs are 1?',
            options: ['OR gate', 'NAND gate', 'AND gate', 'XOR gate'],
            correctOption: 2,
            explanation: 'An AND gate produces a HIGH output if and only if all inputs are HIGH.'
          },
          {
            id: 'q-m5-3',
            text: 'Electrostatic Discharge (ESD) protective wrist straps worn by technicians contain a series resistor of typically:',
            options: ['10 ohms', '1 Megaohm (1,000,000 ohms)', 'Zero ohms (direct wire)', '100 Megaohms'],
            correctOption: 1,
            explanation: 'A 1 Megaohm resistor safely discharges static charges while protecting personnel from electric shock hazard.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    code: 'PART66-M06',
    title: 'Module 6 - Materials & Hardware',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Aircraft materials (Ferrous, Non-ferrous, Composites), corrosion control, fasteners, pipes, bearings, transmissions, and control cables.',
    price: 219.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Layers',
    books: [
      { id: 'b-m6-01', title: 'Module 6: Aviation Materials, Fasteners & Hardware', format: 'PDF (upload)', fileName: 'EASA_Part66_Module06_Materials.pdf', size: '18.2 MB', pages: 240 }
    ],
    notes: [
      { id: 'n-m6-01', title: 'Galvanic Series and Dissimilar Metal Corrosion', readTime: '14 min', content: 'Anodic vs cathodic index, protective barrier primers, and sealants.' }
    ],
    quizzes: [
      {
        id: 'quiz-m6-1',
        title: 'Quiz 1: Metallurgy & Fastener Standards',
        description: 'Assess knowledge on AN/MS bolts, heat treatment, and composite matrix resins.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m6-1',
            text: 'An aircraft bolt marked with a raised cross on its head is classified as:',
            options: ['A low-strength commercial carriage bolt', 'A standard AN corrosion-resistant or alloy steel aircraft bolt', 'A left-hand thread bolt', 'A titanium fastener'],
            correctOption: 1,
            explanation: 'The raised cross or asterisk on an AN bolt head indicates standard aircraft-grade alloy steel.'
          },
          {
            id: 'q-m6-2',
            text: 'What type of corrosion occurs when two dissimilar metals are in direct electrical contact in the presence of an electrolyte?',
            options: ['Stress corrosion cracking', 'Galvanic (bimetallic) corrosion', 'Intergranular corrosion', 'Fretting corrosion'],
            correctOption: 1,
            explanation: 'Galvanic corrosion takes place when the more anodic metal corrodes sacrificially to protect the cathode in an electrolyte.'
          },
          {
            id: 'q-m6-3',
            text: 'In carbon fibre reinforced polymer (CFRP) composites, what is the primary role of the resin matrix?',
            options: [
              'To carry 100% of the tensile loads',
              'To support and transfer loads to the high-strength fibres and protect them from environmental damage',
              'To prevent lightning strikes from entering the engine',
              'To make the component optically transparent'
            ],
            correctOption: 1,
            explanation: 'The matrix holds the fibres in place, transfers interlaminar shear stresses, and seals against moisture and UV.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-7',
    code: 'PART66-M07',
    title: 'Module 7 - Maintenance Practices',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Safety precautions, workshop practices, tooling, engineering drawings, fits & clearances, riveting, NDT, and aircraft disassembly.',
    price: 239.00,
    duration: '50 Hours',
    status: 'Active',
    icon: 'Hammer',
    books: [
      { id: 'b-m7-01', title: 'Module 7: Aircraft Maintenance Practices & Workshop Standard', format: 'PDF (upload)', fileName: 'EASA_Part66_Module07_Practices.pdf', size: '26.5 MB', pages: 320 }
    ],
    notes: [
      { id: 'n-m7-01', title: 'Torque Wrenches: Breakaway Torque & Extension Formulas', readTime: '15 min', content: 'Adapters and crowfoot angle corrections: Effective torque = Desired torque * (L / (L + E)).' }
    ],
    quizzes: [
      {
        id: 'quiz-m7-1',
        title: 'Quiz 1: Workshop Tooling & Torque Calculations',
        description: 'Verify torque procedures, safety wire techniques, and NDT methods.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m7-1',
            text: 'When locking fasteners with double-twist safety wire, what is the recommended twist rate per inch?',
            options: ['2 to 4 twists per inch', '6 to 8 twists per inch', '12 to 16 twists per inch', '25 twists per inch'],
            correctOption: 1,
            explanation: 'AC 43.13-1B mandates 6 to 8 twists per inch for standard aircraft lockwire.'
          },
          {
            id: 'q-m7-2',
            text: 'Which Non-Destructive Testing (NDT) method is suitable ONLY for ferromagnetic materials?',
            options: ['Liquid penetrant inspection (PT)', 'Eddy current inspection (ET)', 'Magnetic particle inspection (MT)', 'Ultrasonic inspection (UT)'],
            correctOption: 2,
            explanation: 'Magnetic particle testing requires the test piece to be ferromagnetic (iron/steel) to induce magnetic flux leakage.'
          },
          {
            id: 'q-m7-3',
            text: 'When a torque wrench extension adapter is fitted straight in line with the wrench handle:',
            options: [
              'The actual torque applied to the bolt will be greater than the torque indicated on the wrench scale',
              'The indicated torque is identical to the bolt torque',
              'The bolt torque will be lower than the indicated torque',
              'The torque wrench will be permanently damaged'
            ],
            correctOption: 0,
            explanation: 'In-line extensions lengthen the lever arm, so the bolt experiences greater torque than the scale setting.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-8',
    code: 'PART66-M08',
    title: 'Module 8 - Basic Aerodynamics',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Physics of the atmosphere, aerodynamics, airflow around wings, lift, drag, boundary layer, high-lift devices, and flight stability.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'Compass',
    books: [
      { id: 'b-m8-01', title: 'Module 8: Subsonic and Transonic Aerodynamics Manual', format: 'PDF (upload)', fileName: 'EASA_Part66_Module08_Aerodynamics.pdf', size: '17.3 MB', pages: 200 }
    ],
    notes: [
      { id: 'n-m8-01', title: 'Boundary Layer Separation and Stall Mechanics', readTime: '15 min', content: 'Adverse pressure gradients, vortex generators, and critical angle of attack.' }
    ],
    quizzes: [
      {
        id: 'quiz-m8-1',
        title: 'Quiz 1: Lift, Drag & Stability',
        description: 'Test angle of attack, induced drag, aspect ratio, and longitudinal dihedral.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m8-1',
            text: 'How does increasing the aspect ratio of an aircraft wing affect induced drag?',
            options: [
              'It drastically increases induced drag',
              'It reduces induced drag for a given lift coefficient',
              'It has zero influence on induced drag',
              'It eliminates parasitic drag'
            ],
            correctOption: 1,
            explanation: 'High aspect ratio wings diminish wingtip vortex strength, significantly reducing induced drag.'
          },
          {
            id: 'q-m8-2',
            text: 'What causes an aircraft wing to stall?',
            options: [
              'Flying at excessively high airspeed',
              'Exceeding the critical angle of attack where boundary layer separates from the upper wing surface',
              'Running out of fuel in the wing tanks',
              'Deploying leading edge slats'
            ],
            correctOption: 1,
            explanation: 'An aerodynamic stall is caused strictly by exceeding the critical angle of attack regardless of airspeed.'
          },
          {
            id: 'q-m8-3',
            text: 'What is the primary function of wingtip winglets on modern airliners?',
            options: [
              'To increase fuel tank capacity',
              'To reduce wingtip vortices and lower induced drag',
              'To provide additional yaw control without a rudder',
              'To mount navigation lights'
            ],
            correctOption: 1,
            explanation: 'Winglets obstruct high-pressure air curling from the bottom to the top surface, decreasing induced drag.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-9',
    code: 'PART66-M09',
    title: 'Module 9 - Human Factors',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Human performance and limitations, social psychology, factors affecting performance, physical environment, tasks, communication, and human error.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'UserCheck',
    books: [
      { id: 'b-m9-01', title: 'Module 9: Human Factors for Aircraft Maintenance Engineers', format: 'PDF (upload)', fileName: 'EASA_Part66_Module09_HF.pdf', size: '15.9 MB', pages: 195 }
    ],
    notes: [
      { id: 'n-m9-01', title: 'James Reason Swiss Cheese Model of Accident Causation', readTime: '15 min', content: 'Latent organizational failures aligning with active failures of maintenance personnel.' }
    ],
    quizzes: [
      {
        id: 'quiz-m9-1',
        title: 'Quiz 1: Psychological & Ergonomic Factors',
        description: 'Covers visual acuity, circadian rhythm, noise exposure limits, and error taxonomy.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m9-1',
            text: 'In James Reason\'s model of organizational accidents, latent failures typically arise from:',
            options: [
              'The front-line mechanic immediately before the crash',
              'High-level decisions made by management, system designers, and regulation authorities long before the event',
              'Bird strikes during takeoff',
              'Severe unexpected turbulence'
            ],
            correctOption: 1,
            explanation: 'Latent conditions reside within procedures, scheduling, training, and management decisions before being triggered by active errors.'
          },
          {
            id: 'q-m9-2',
            text: 'At what continuous noise sound pressure level is ear protection mandatory in aircraft maintenance hangars according to safety directives?',
            options: ['60 dBA', '85 dBA', '120 dBA', '150 dBA'],
            correctOption: 1,
            explanation: 'Occupational health standards require mandatory hearing protection at or above 85 dBA time-weighted exposure.'
          },
          {
            id: 'q-m9-3',
            text: 'An error of commission occurs when an engineer:',
            options: [
              'Omits an essential step of an approved task card',
              'Performs an action incorrectly or carries out an incorrect task',
              'Reports a defect to the supervisor',
              'Signs off a completed job'
            ],
            correctOption: 1,
            explanation: 'Commission means doing something wrong (active mistake), while omission means failing to perform a required step.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-10',
    code: 'PART66-M10',
    title: 'Module 10 - Aviation Legislation',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Regulatory framework, ICAO Chicago Convention, EASA Basic Regulation, Part-21, Part-66, Part-145, Part-M, Part-CAMO, and Part-147.',
    price: 249.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Shield',
    books: [
      { id: 'b-m10-01', title: 'Module 10: European Aviation Safety Legislation Comprehensive Guide', format: 'PDF (upload)', fileName: 'EASA_Part66_Module10_Legislation.pdf', size: '25.3 MB', pages: 300 }
    ],
    notes: [
      { id: 'n-m10-01', title: 'Part-66 Aircraft Maintenance Licence (AML) Privileges', readTime: '18 min', content: 'Category A, B1.1, B1.2, B2, B3, and C licence scope and certification authorizations.' }
    ],
    quizzes: [
      {
        id: 'quiz-m10-1',
        title: 'Quiz 1: EASA Regulations & Licence Privileges',
        description: 'Certificate of Release to Service (CRS), Part-145 approvals, and continuing airworthiness.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m10-1',
            text: 'What document is issued by an EASA Part-145 maintenance organization upon successful completion of maintenance to release the aircraft to service?',
            options: [
              'Airworthiness Certificate Form 15',
              'Certificate of Release to Service (CRS)',
              'Export Airworthiness Permit',
              'ICAO Annex 6 Dispatch Note'
            ],
            correctOption: 1,
            explanation: 'Under Part-145.A.50, a Certificate of Release to Service (CRS) must be issued before flight.'
          },
          {
            id: 'q-m10-2',
            text: 'What is the minimum age to be issued an EASA Part-66 Aircraft Maintenance Licence?',
            options: ['18 years', '21 years', '25 years', 'There is no minimum age requirement'],
            correctOption: 1,
            explanation: 'EASA 66.A.15 requires an applicant for an aircraft maintenance licence to be at least 21 years of age.'
          },
          {
            id: 'q-m10-3',
            text: 'Which EASA Annex governs the approval of maintenance training organisations?',
            options: ['Part-145 (Annex II)', 'Part-66 (Annex III)', 'Part-147 (Annex IV)', 'Part-M (Annex I)'],
            correctOption: 2,
            explanation: 'Part-147 (Annex IV to Regulation (EU) No 1321/2014) specifies requirements for maintenance training organisations.'
          }
        ]
      }
    ]
  }
];

export const INITIAL_USERS = [
  {
    id: 'usr-admin-1',
    name: 'Hassaan Admin',
    email: 'admin@trinityaviation.com',
    role: 'admin',
    enrolledCourses: []
  },
  {
    id: 'usr-stu-1',
    name: 'Alex Vance',
    email: 'student@trinityaviation.com',
    role: 'student',
    licenseGoal: 'EASA B1.1 (Aeroplanes Turbine)',
    phone: '+44 7700 900077',
    enrolledCourses: ['course-1', 'module-1', 'module-3']
  },
  {
    id: 'usr-stu-2',
    name: 'Student One',
    email: 'student1@test.com',
    role: 'student',
    licenseGoal: 'EASA B2 (Avionics)',
    phone: '+971 50 123 4567',
    enrolledCourses: ['course-7', 'course-1']
  },
  {
    id: 'usr-stu-3',
    name: 'Student Two',
    email: 'student2@test.com',
    role: 'student',
    licenseGoal: 'EASA B1.1 (Aeroplanes Turbine)',
    phone: '+44 7890 123456',
    enrolledCourses: ['course-7', 'course-3']
  },
  {
    id: 'usr-stu-4',
    name: 'Student Three',
    email: 'student3@test.com',
    role: 'student',
    licenseGoal: 'EASA Category A',
    phone: '+49 151 23456789',
    enrolledCourses: []
  },
  {
    id: 'usr-stu-5',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
    licenseGoal: 'EASA B1.2 (Piston Aeroplanes)',
    phone: '+1 555 019 2834',
    enrolledCourses: []
  },
  {
    id: 'usr-stu-6',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'student',
    licenseGoal: 'EASA B2 (Avionics)',
    phone: '+1 555 018 7654',
    enrolledCourses: ['course-2']
  },
  {
    id: 'usr-stu-7',
    name: 'Tester Test',
    email: 'student1@uams.edu',
    role: 'student',
    licenseGoal: 'EASA B1.1 (Aeroplanes Turbine)',
    phone: '+44 7123 456789',
    enrolledCourses: []
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'ORD-2024-001',
    studentEmail: 'student@trinityaviation.com',
    studentName: 'Alex Vance',
    courseIds: ['course-1', 'module-1'],
    courseNames: ['EASA Part-145 Training', 'Human Factors (HF)', 'Module 1 - Mathematics'],
    total: 299.00,
    status: 'Completed',
    date: '2024-01-15',
    paymentRef: 'TRX-SCB-883921',
    bankProofNotes: 'Direct wire transfer via Barclays UK'
  },
  {
    id: 'ORD-2024-002',
    studentEmail: 'student@trinityaviation.com',
    studentName: 'Alex Vance',
    courseIds: ['module-3'],
    courseNames: ['Module 3 - Electrical Fundamentals'],
    total: 219.00,
    status: 'Completed',
    date: '2024-02-20',
    paymentRef: 'TRX-WIRE-441092',
    bankProofNotes: 'HSBC Online wire clearance verified'
  },
  {
    id: 'ORD-2024-003',
    studentEmail: 'student3@test.com',
    studentName: 'Student Three',
    courseIds: ['course-7'],
    courseNames: ['Safety Management System + Human Factor (SMS + HF) Initial Course'],
    total: 349.00,
    status: 'Pending Approval',
    date: '2024-03-01',
    paymentRef: 'TRIN-STU3-8820',
    bankProofNotes: 'Submitted wire reference #TRIN-STU3-8820. Awaiting manual admin confirmation.'
  },
  {
    id: 'ORD-2024-004',
    studentEmail: 'john.doe@example.com',
    studentName: 'John Doe',
    courseIds: ['course-7', 'module-1'],
    courseNames: ['Safety Management System + Human Factor (SMS + HF) Initial Course', 'Module 1 - Mathematics'],
    total: 548.00,
    status: 'Pending Approval',
    date: '2024-03-04',
    paymentRef: 'CHASE-WIRE-90812',
    bankProofNotes: 'Chase bank domestic wire reference 90812'
  }
];

export const INITIAL_QUIZ_ATTEMPTS = [
  {
    id: 'att-101',
    studentEmail: 'student@trinityaviation.com',
    studentName: 'Alex Vance',
    courseId: 'module-1',
    courseTitle: 'Module 1 - Mathematics',
    quizId: 'quiz-m1-1',
    quizTitle: 'Quiz 1: Introduction',
    scorePercent: 80,
    totalQuestions: 5,
    correctAnswers: 4,
    passed: true,
    date: '2024-02-22 14:30',
    timeSpentSeconds: 420,
    answersBreakdown: [
      { questionId: 'q-m1-1', questionText: 'Evaluate the expression: (3/4 + 1/2) * 8', options: ['8', '10', '12', '14'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: '3/4 + 1/2 = 5/4. 5/4 * 8 = 10.' },
      { questionId: 'q-m1-2', questionText: 'Convert the binary number 101101 to decimal equivalent:', options: ['35', '41', '45', '49'], selectedOption: 2, correctOption: 2, isCorrect: true, explanation: '32 + 8 + 4 + 1 = 45.' },
      { questionId: 'q-m1-3', questionText: 'What is the value of x in the equation: 4x - 7 = 2x + 9?', options: ['6', '8', '7', '10'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: '2x = 16 => x = 8.' },
      { questionId: 'q-m1-4', questionText: 'An aircraft consumes 480 kg of fuel in 40 minutes. What is its hourly fuel burn rate?', options: ['640 kg/hr', '720 kg/hr', '800 kg/hr', '960 kg/hr'], selectedOption: 0, correctOption: 1, isCorrect: false, explanation: '480 / 40 * 60 = 720 kg/hr.' },
      { questionId: 'q-m1-5', questionText: 'What is the surface area of a circle with a radius of 7 cm? (Use pi = 22/7)', options: ['154 cm²', '144 cm²', '168 cm²', '176 cm²'], selectedOption: 0, correctOption: 0, isCorrect: true, explanation: 'Area = (22/7) * 49 = 154 cm².' }
    ]
  },
  {
    id: 'att-102',
    studentEmail: 'student@trinityaviation.com',
    studentName: 'Alex Vance',
    courseId: 'course-1',
    courseTitle: 'Human Factor (HF) English',
    quizId: 'quiz-hf-1',
    quizTitle: 'Quiz 1: Fundamentals of Human Factors',
    scorePercent: 100,
    totalQuestions: 5,
    correctAnswers: 5,
    passed: true,
    date: '2024-02-25 11:15',
    timeSpentSeconds: 345,
    answersBreakdown: [
      { questionId: 'q-hf-1', questionText: 'Which element of the SHELL model represents the human operator?', options: ['Software', 'Hardware', 'Liveware', 'Environment'], selectedOption: 2, correctOption: 2, isCorrect: true, explanation: 'Liveware is at the center.' },
      { questionId: 'q-hf-2', questionText: 'Which of the following is NOT one of Dupont\'s "Dirty Dozen"?', options: ['Lack of Assertiveness', 'Complacency', 'Excessive Hydration', 'Distraction'], selectedOption: 2, correctOption: 2, isCorrect: true, explanation: 'Excessive hydration is not a human error factor.' },
      { questionId: 'q-hf-3', questionText: 'What is the primary objective of a "Just Culture"?', options: ['Punish all', 'Encourage reporting while drawing a line at willful violations', 'Eliminate discipline', 'Transfer liability'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: 'Just culture fosters safety reporting.' },
      { questionId: 'q-hf-4', questionText: 'Circadian dysrhythmia in aviation maintenance is primarily caused by:', options: ['Noise', 'Shift work and disruption of body clock', 'Fumes', 'Lighting'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: 'Shift work causes biological clock disruption.' },
      { questionId: 'q-hf-5', questionText: 'Required interval for recurrent HF continuation training?', options: ['Every 6 mos', 'Every 24 months (2 years)', 'Every 5 years', '10 years'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: 'Part 145.A.30(e) mandates 2 years.' }
    ]
  },
  {
    id: 'att-103',
    studentEmail: 'student2@test.com',
    studentName: 'Student Two',
    courseId: 'course-3',
    courseTitle: 'Electrical Wiring Interconnection System (EWIS)',
    quizId: 'quiz-ewis-1',
    quizTitle: 'Quiz 1: EWIS Inspection Standards',
    scorePercent: 50,
    totalQuestions: 4,
    correctAnswers: 2,
    passed: false,
    date: '2024-03-02 09:40',
    timeSpentSeconds: 510,
    answersBreakdown: []
  }
];

export const BANK_DETAILS = {
  bankName: 'Standard Chartered Bank / Emirates NBD',
  accountTitle: 'Trinity Aviation Academy FZE',
  iban: 'GB79 SCBL 0023 9910 4458 19',
  swiftBic: 'SCBLGB2L',
  branch: 'London Heathrow Aviation Gateway / Dubai Aviation City',
  currency: 'USD ($) & EUR (€)',
  contactSupport: 'admissions@trinityaviation.com | +44 20 7946 0912',
  note: 'Notice: Payment is made externally via direct bank transfer. The admin manually approves each student upon receipt of cleared funds.'
};

export const BLOGS_DATA = [
  {
    id: 'blog-1',
    title: 'Navigating EASA Part-66 Basic Licence Examinations in 2026',
    author: 'Chief Flight Engineer Mark Henderson',
    date: 'February 28, 2026',
    category: 'Licensing & Regulations',
    summary: 'A step-by-step masterclass on syllabus revisions, modular essay structures, and effective study regimens for B1.1 and B2 certifications.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    content: 'Preparing for Part-66 exams requires a disciplined approach to multiple-choice questions and regulatory syllabus requirements...'
  },
  {
    id: 'blog-2',
    title: 'The Evolution of EWIS: Preventing Electrical Arc Tracking on Modern Airliners',
    author: 'Sarah Lin, EWIS Technical Specialist',
    date: 'January 14, 2026',
    category: 'Avionics Maintenance',
    summary: 'Why AMC 20-22 enhanced zonal inspections are crucial for composite aircraft and how proper clamping protocols save lives.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f9?auto=format&fit=crop&w=800&q=80',
    content: 'Electrical wiring interconnection systems have evolved from passive wiring bundles into certified aircraft subsystems with rigorous inspection criteria...'
  },
  {
    id: 'blog-3',
    title: 'Implementing SMS Under Regulation (EU) 2021/1963 for Part-145 Hangars',
    author: 'Capt. David Ross, Safety Director',
    date: 'December 20, 2025',
    category: 'Safety Management',
    summary: 'How maintenance organizations are bridging the gap between safety risk assessments and human factor reporting systems.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=800&q=80',
    content: 'With the formal integration of SMS into Part-145 organizations, maintaining a robust Just Culture has become an operational necessity...'
  }
];

export const SERVICES_DATA = [
  {
    id: 'srv-1',
    title: 'EASA Part-66 Modular Training',
    icon: 'BookOpen',
    description: 'Self-paced and instructor-led modular packages for Category A, B1.1, B1.2, B2, and B3 licenses with extensive question bank drill simulators.'
  },
  {
    id: 'srv-2',
    title: 'Airline Type Rating Ground Prep',
    icon: 'PlaneTakeoff',
    description: 'In-depth mechanical, avionics, and powerplant technical familiarization courses for Airbus A320, Boeing 737NG/MAX, and CFM56/LEAP engines.'
  },
  {
    id: 'srv-3',
    title: 'EASA Part-145 & Part-M Corporate Compliance',
    icon: 'Award',
    description: 'Regulatory recurrent continuation courses including Human Factors, Fuel Tank Safety Phase 2, and EWIS Target Groups 1-8.'
  },
  {
    id: 'srv-4',
    title: 'Interactive Mock Exam Question Banks',
    icon: 'CheckCircle2',
    description: 'Dynamic question banks that generate randomized examination simulations adhering to official EASA time limits and pass criteria.'
  }
];
