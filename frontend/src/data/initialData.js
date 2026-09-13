export const INITIAL_COURSES_AND_MODULES = [
  // ==========================================
  // COURSES SECTIONS (Exact 6 Courses)
  // ==========================================
  {
    id: 'course-1',
    code: 'EASA-SMS-HF',
    title: 'Safety Management System + Human Factor (SMS + HF) Initial Course',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Integrated SMS and HF initial qualification course fulfilling Regulation (EU) 2021/1963 and Part 145.A.30(e). Safety risk management, human error mechanisms, and fatigue risk management.',
    price: 349.00,
    duration: '28 Hours',
    status: 'Active',
    icon: 'ShieldCheck',
    lastCertified: '2024-06-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-sms-01', title: 'Integrated SMS & HF Training Syllabus & Reg (EU) 2021/1963', format: 'PDF (upload)', fileName: 'SMS_HF_Combined_Syllabus.pdf', size: '19.5 MB', pages: 230 },
      { id: 'b-sms-02', title: 'ICAO Doc 9859 Safety Management Manual (SMM)', format: 'PDF (upload)', fileName: 'ICAO_Doc9859_SMM.pdf', size: '14.2 MB', pages: 180 }
    ],
    notes: [
      { id: 'n-sms-01', title: 'The 4 Pillars of ICAO Safety Management', readTime: '15 min', content: 'Safety Policy and Objectives, Safety Risk Management, Safety Assurance, and Safety Promotion in maintenance environments.' },
      { id: 'n-sms-02', title: 'The Dirty Dozen & Just Culture in Hangar Operations', readTime: '18 min', content: 'Analyzing human error precursors (Distraction, Complacency, Fatigue, Pressure) and establishing non-punitive reporting lines.' }
    ],
    quizzes: [
      {
        id: 'quiz-smshf-1',
        title: 'Quiz 1: SMS Pillars & Human Factors',
        description: 'Comprehensive assessment on hazard identification, ALARP risk matrix, and SHELL model.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 5,
        questions: [
          {
            id: 'q-smshf-1',
            text: 'In aviation safety risk assessment, what does the principle "ALARP" stand for?',
            options: ['Always Low Altitude Route Planning', 'As Low As Reasonably Practicable', 'Aviation Legal Accountability & Regulatory Policy', 'Automated Line Aircraft Reliability Protocol'],
            correctOption: 1,
            explanation: 'ALARP means As Low As Reasonably Practicable, balancing risk reduction against practical feasibility and operational resources.'
          },
          {
            id: 'q-smshf-2',
            text: 'Which element of the SHELL model represents the human technician in the center of the aviation maintenance system?',
            options: ['Software', 'Hardware', 'Liveware', 'Environment'],
            correctOption: 2,
            explanation: 'In Hawkins SHELL model, Liveware (the human operator) sits at the core interacting with other entities.'
          },
          {
            id: 'q-smshf-3',
            text: 'Under EASA regulations, what is the mandatory recurrent interval for Human Factors continuation training?',
            options: ['Every 6 months', 'Every 24 months (2 years)', 'Every 5 years', 'Once every 10 years'],
            correctOption: 1,
            explanation: 'Part 145.A.30(e) mandates that certifying and support staff undergo continuation training at least every 2 years.'
          },
          {
            id: 'q-smshf-4',
            text: 'What is the primary objective of a "Just Culture" in an approved maintenance organization?',
            options: [
              'Punish all personnel involved in errors indiscriminately',
              'Encourage voluntary reporting while drawing a clear line between acceptable errors and willful violations',
              'Eliminate all internal disciplinary investigations',
              'Transfer safety liability exclusively to aircraft captains'
            ],
            correctOption: 1,
            explanation: 'A Just Culture fosters transparent safety reporting by guaranteeing protection for genuine mistakes while sanctioning willful misconduct.'
          },
          {
            id: 'q-smshf-5',
            text: 'Which cognitive bias causes an engineer to notice evidence that confirms a diagnosis while ignoring contradictory signs?',
            options: ['Confirmation bias', 'Hindsight bias', 'Sunk cost fallacy', 'Availability heuristic'],
            correctOption: 0,
            explanation: 'Confirmation bias leads maintenance personnel to seek only information confirming their preexisting theory.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    code: 'EASA-FTS-PH2',
    title: 'Fuel Tank Safety (FTS) Initial Course',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Phase 2 Fuel Tank Safety training in accordance with Appendix IV to AMC 145.A.30(e). CDCCL requirements, flammability reduction systems, and explosion prevention protocols.',
    price: 249.00,
    duration: '12 Hours',
    status: 'Active',
    icon: 'Plane',
    lastCertified: '2024-05-10',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-fts-01', title: 'EASA FTS Phase 2 Airworthiness Directives & CDCCL', format: 'PDF (upload)', fileName: 'EASA_FTS_Phase2_Standard.pdf', size: '11.8 MB', pages: 140 }
    ],
    notes: [
      { id: 'n-fts-01', title: 'Critical Design Configuration Control Limitations (CDCCL)', readTime: '14 min', content: 'CDCCL task identification, lightning protection bonding straps, and spark source prevention in fuel zones.' }
    ],
    quizzes: [
      {
        id: 'quiz-fts-1',
        title: 'Quiz 1: CDCCL & Flammability Prevention',
        description: 'Verify comprehension of SFAR 88, TWA 800 findings, and nitrogen inerting systems.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-fts-1',
            text: 'What does the acronym CDCCL stand for in aviation fuel tank airworthiness?',
            options: ['Central Distribution Control Check List', 'Critical Design Configuration Control Limitations', 'Combustion Danger Check & Cleaning Log', 'Continuous Design Calibration Control Loop'],
            correctOption: 1,
            explanation: 'CDCCL defines airworthiness limitations to prevent ignition sources from ever developing inside fuel tanks.'
          },
          {
            id: 'q-fts-2',
            text: 'Which gas is predominantly used in commercial aircraft Flammability Reduction Systems (FRS) to inert fuel tanks?',
            options: ['Carbon Dioxide', 'Nitrogen-Enriched Air (NEA)', 'Argon', 'Helium'],
            correctOption: 1,
            explanation: 'Air Separation Modules generate Nitrogen-Enriched Air (NEA) to reduce oxygen concentration below combustion levels.'
          },
          {
            id: 'q-fts-3',
            text: 'Any maintenance action that alters a CDCCL feature must be:',
            options: [
              'Conducted without documentation if visual inspection passes',
              'Explicitly identified in task cards and completed strictly in accordance with CDCCL instructions',
              'Reported to air traffic control before refuelling',
              'Inspected only during C-checks'
            ],
            correctOption: 1,
            explanation: 'CDCCL tasks require strict compliance and detailed documentation to preserve the original certification baseline.'
          },
          {
            id: 'q-fts-4',
            text: 'The maximum allowable electrical bonding jumper resistance across fuel lines is typically:',
            options: ['Less than 0.005 ohms (5 milliohms)', '50 ohms', '1,000 ohms', '10 ohms'],
            correctOption: 0,
            explanation: 'Fuel tank bonding jumpers must remain below 0.005 ohms to safely dissipate static and lightning energy.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    code: 'EASA-EWIS-TG',
    title: 'Electrical Wiring Interconnect System Initial Course',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Comprehensive EWIS training per AMC 20-22 Target Groups 1 & 2. Zonal inspection, wire degradation mechanisms, contamination protection, and clamping practices.',
    price: 249.00,
    duration: '14 Hours',
    status: 'Active',
    icon: 'Zap',
    lastCertified: '2024-04-20',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-ewis-01', title: 'AMC 20-22 EWIS Technical Standard and Inspection Manual', format: 'PDF (upload)', fileName: 'EWIS_AMC20_22_Guide.pdf', size: '18.4 MB', pages: 210 }
    ],
    notes: [
      { id: 'n-ewis-01', title: 'Clean-as-you-go Policy & Wire Bundle Separation', readTime: '15 min', content: 'Minimum 50 mm clearance from hydraulic/fuel lines, drip loops, and swarf contamination control.' }
    ],
    quizzes: [
      {
        id: 'quiz-ewis-1',
        title: 'Quiz 1: EWIS Inspection Standards',
        description: 'Assess knowledge of wire chafing, clamp cushion deformation, and conduit protection.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-ewis-1',
            text: 'Why must drip loops be provided in electrical wire harnesses near connectors?',
            options: ['To allow extra length for emergency splicing', 'To prevent moisture and condensation from draining into the connector plug', 'To reduce RF radiation', 'To provide aerodynamic cooling'],
            correctOption: 1,
            explanation: 'Drip loops ensure gravity pulls fluid down and away from sensitive multi-pin electrical connectors.'
          },
          {
            id: 'q-ewis-2',
            text: 'What is the standard recommended minimum physical separation between an electrical wire bundle and hydraulic or fuel lines?',
            options: ['50 mm (2 inches) where practicable', '2 mm', '200 mm', 'Zero separation if nylon sleeves are installed'],
            correctOption: 0,
            explanation: 'AMC 20-22 specifies a minimum clearance of 50 mm (2 inches) to prevent arcing and puncture hazards.'
          },
          {
            id: 'q-ewis-3',
            text: 'What does the EWIS maintenance philosophy "Clean as you go" mandate?',
            options: [
              'Pressure-wash aircraft electrical bays weekly',
              'Immediately clean and vacuum metallic swarf, drill clippings, and debris from wiring raceways as work proceeds',
              'Only clean wiring during major D-checks',
              'Use solvent on all exposed connectors'
            ],
            correctOption: 1,
            explanation: 'Metallic shavings and swarf left on wire bundles lead to electrical arc tracking and catastrophic fires.'
          },
          {
            id: 'q-ewis-4',
            text: 'Which condition constitutes a hazardous clamp installation?',
            options: [
              'Pinching wires under the mounting screw or severely crushing the rubber cushion',
              'Using self-locking aircraft hardware',
              'Installing clamps on structural ribs with standoffs',
              'Ensuring bundle does not slide under light hand pressure'
            ],
            correctOption: 0,
            explanation: 'Pinching wires under clamp mounting tabs cuts into the insulation jacket and causes short circuits.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    code: 'CFM-56-FAM',
    title: 'CFM 56-5B Engine Technical Familiarisation',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Line maintenance familiarisation for the CFM 56-5B high-bypass turbofan powerplant. Dual-channel FADEC, airflow control, lubrication, ignition, and fuel metering systems.',
    price: 320.00,
    duration: '24 Hours',
    status: 'Active',
    icon: 'Cpu',
    lastCertified: '2024-03-12',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-cfm-01', title: 'CFM 56-5B Line Maintenance & Engine Familiarisation', format: 'PDF (upload)', fileName: 'CFM56_5B_Technical_Manual.pdf', size: '28.0 MB', pages: 310 }
    ],
    notes: [
      { id: 'n-cfm-01', title: 'FADEC Dual-Channel ECU Architecture & ACC Casings', readTime: '18 min', content: 'Dual ECU channels A & B, active clearance control, variable stator vanes, and transient bleed valves.' }
    ],
    quizzes: [
      {
        id: 'quiz-cfm-1',
        title: 'Quiz 1: Engine Architecture & FADEC Logic',
        description: 'Test turbofan spool mechanics, active clearance control, and fuel metering valves.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-cfm-1',
            text: 'The CFM 56-5B is a dual-spool turbofan engine. Which rotor spool drives the front fan and booster stages?',
            options: ['The High Pressure (N2) spool', 'The Low Pressure (N1) spool driven by the LP turbine', 'The accessory gearbox directly', 'An auxiliary starter turbine'],
            correctOption: 1,
            explanation: 'The N1 Low Pressure spool consists of the front fan and booster stages powered by the 4-stage low pressure turbine.'
          },
          {
            id: 'q-cfm-2',
            text: 'How does the CFM 56-5B Electronic Control Unit (ECU) achieve channel redundancy?',
            options: [
              'It has one active channel and switches to hydromechanical governor backup',
              'It features two independent channels (A & B), with automatic seamless switchover if the active channel degrades',
              'It uses manual flight deck pushrods',
              'It alternates channels based on aircraft altitude'
            ],
            correctOption: 1,
            explanation: 'Dual independent channels provide fail-safe redundancy and continuous engine health monitoring.'
          },
          {
            id: 'q-cfm-3',
            text: 'What is the primary function of the Active Clearance Control (ACC) system?',
            options: [
              'To heat the cabin air',
              'To optimize turbine blade-tip clearances by blowing cooling air on the casing, maximizing fuel efficiency',
              'To lubricate main engine bearings',
              'To extinguish engine nacelle fires'
            ],
            correctOption: 1,
            explanation: 'Modulated fan and core air matches casing thermal contraction to rotor expansion, minimizing tip leakage.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    code: 'AIR-HD-OPS',
    title: 'Aircraft Handling Course',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Ground servicing, aircraft towing, pushback, marshaling, mooring, jacking, and ramp safety procedures in adherence to IATA AHM regulations.',
    price: 180.00,
    duration: '10 Hours',
    status: 'Active',
    icon: 'Navigation',
    lastCertified: '2024-02-18',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-hd-01', title: 'IATA AHM Ground Operations & Aircraft Towing Standard', format: 'PDF (upload)', fileName: 'Aircraft_Handling_Towing_Procedures.pdf', size: '10.5 MB', pages: 120 }
    ],
    notes: [
      { id: 'n-hd-01', title: 'Towing Shear Pins & Steering Bypass Pin Protocols', readTime: '12 min', content: 'Hydraulic steering depressurization, maximum turn angles, wing-walker duties, and emergency stop hand signals.' }
    ],
    quizzes: [
      {
        id: 'quiz-hd-1',
        title: 'Quiz 1: Ramp Operations & Towing Safety',
        description: 'Verify understanding of steering bypass pin insertion, shear pins, and ramp clearance.',
        timeLimitMinutes: 10,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-hd-1',
            text: 'What critical action must be completed before attaching a tow-bar to an aircraft nose landing gear?',
            options: [
              'Depressurize all aircraft cabin doors',
              'Insert the nose gear steering bypass pin to prevent hydraulic lockup of the steering cylinders',
              'Turn off all aircraft emergency lights',
              'Deflate the nose gear shock strut'
            ],
            correctOption: 1,
            explanation: 'The steering bypass pin routes hydraulic fluid back to the return line, allowing the nose gear to swivel freely.'
          },
          {
            id: 'q-hd-2',
            text: 'What is the primary responsibility of a wing-walker during aircraft pushback in congested ramp areas?',
            options: [
              'To assist passengers with hand luggage',
              'To continuously monitor wingtip clearance from obstacles and immediately signal emergency stop to the tug driver if threatened',
              'To refuel the wing tanks while rolling',
              'To measure tire pressures during movement'
            ],
            correctOption: 1,
            explanation: 'Wing-walkers maintain visual clearance around wingtip extremities to prevent ground collisions.'
          },
          {
            id: 'q-hd-3',
            text: 'When jacking an aircraft, what is the primary ambient environmental limitation?',
            options: [
              'Jacking is prohibited on sunny days',
              'Ambient wind velocity must not exceed the maximum limit specified in the Aircraft Maintenance Manual (AMM)',
              'Jacking is only permitted during night shifts',
              'Temperature must be exactly 20 degrees Celsius'
            ],
            correctOption: 1,
            explanation: 'Strong winds create dangerous lateral loads that can cause the airframe to slip off tripod jacks.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    code: 'EASA-TTT-147',
    title: 'Train the Trainer',
    category: 'course',
    subCategory: 'EASA PART-145 & PART-M',
    description: 'Instructional techniques and pedagogical methodologies for EASA Part-147 theoretical and practical instructors. Lesson design, questioning strategies, assessment design, and regulatory compliance.',
    price: 380.00,
    duration: '32 Hours',
    status: 'Active',
    icon: 'Users',
    lastCertified: '2024-01-25',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-ttt-01', title: 'EASA Part-147 Instructor Competency & Instructional Design', format: 'PDF (upload)', fileName: 'Train_The_Trainer_Aviation_Handbook.pdf', size: '16.0 MB', pages: 190 }
    ],
    notes: [
      { id: 'n-ttt-01', title: 'Adult Learning Principles & Formative Assessment in Aviation', readTime: '16 min', content: 'Andragogy principles, Bloom taxonomy for cognitive and psychomotor skills, and objective multiple-choice question authoring.' }
    ],
    quizzes: [
      {
        id: 'quiz-ttt-1',
        title: 'Quiz 1: Pedagogical Techniques & Examination Design',
        description: 'Assess knowledge on objective MCQ authoring, feedback delivery, and Part-147 instructional standards.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-ttt-1',
            text: 'According to Knowles adult learning theory (Andragogy), adult learners are most motivated when:',
            options: [
              'Learning is teacher-centered and passive',
              'Instruction is immediately relevant to their practical real-world duties and problem-centered',
              'Assessments consist entirely of memorization without context',
              'They are not permitted to ask questions'
            ],
            correctOption: 1,
            explanation: 'Adult learners in technical trades require context, autonomy, and direct applicability to their maintenance tasks.'
          },
          {
            id: 'q-ttt-2',
            text: 'When authoring multiple-choice questions for EASA Part-66 basic knowledge examinations, the distractors (incorrect options) must be:',
            options: [
              'Obviously humorous and absurd',
              'Plausible, based on common misconceptions or typical maintenance errors, and mutually exclusive',
              'Copied directly from medical textbooks',
              'True statements under all conditions'
            ],
            correctOption: 1,
            explanation: 'Effective distractors must be plausible to unknowledgeable candidates while clearly incorrect to competent engineers.'
          },
          {
            id: 'q-ttt-3',
            text: 'Under EASA Part-147 requirements, how often must instructional staff update their industry technical knowledge and pedagogical competence?',
            options: ['At least every 24 months', 'Every 10 years', 'Only upon retirement', 'Once during initial induction'],
            correctOption: 0,
            explanation: 'Part-147.A.105 mandates regular continuation training in instructional and technical skills every 2 years.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // MODULAR TRAINING SECTION (Exact 18 Modules)
  // ==========================================
  {
    id: 'module-1',
    code: 'PART66-M01',
    title: 'Module 1: Mathematics',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Arithmetic, Algebra, and Geometry for aircraft maintenance technicians according to EASA Part 66 Appendix I syllabus.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'Calculator',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m1-01', title: 'EASA Part-66 Module 1: Mathematics Text & Worksheets', format: 'PDF (upload)', fileName: 'EASA_Part66_Module01_Mathematics.pdf', size: '14.5 MB', pages: 190 }
    ],
    notes: [
      { id: 'n-m1-01', title: 'Trigonometric Functions in Aviation Navigation', readTime: '15 min', content: 'Sine, Cosine, Tangent, and vector resolution for lift, drag, and crosswind calculations.' }
    ],
    quizzes: [
      {
        id: 'quiz-m1-1',
        title: 'Quiz 1: Mathematics Fundamentals',
        description: 'Test arithmetic, fractions, decimals, binary numbers, and ratios.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 4,
        questions: [
          {
            id: 'q-m1-1',
            text: 'Evaluate the expression: (3/4 + 1/2) * 8',
            options: ['8', '10', '12', '14'],
            correctOption: 1,
            explanation: '3/4 + 2/4 = 5/4. Then (5/4) * 8 = 40/4 = 10.'
          },
          {
            id: 'q-m1-2',
            text: 'Convert the binary number 101101 to decimal equivalent:',
            options: ['35', '41', '45', '49'],
            correctOption: 2,
            explanation: '32 + 8 + 4 + 1 = 45.'
          },
          {
            id: 'q-m1-3',
            text: 'What is the value of x in the equation: 4x - 7 = 2x + 9?',
            options: ['6', '8', '7', '10'],
            correctOption: 1,
            explanation: '2x = 16 => x = 8.'
          },
          {
            id: 'q-m1-4',
            text: 'An aircraft consumes 480 kg of fuel in 40 minutes. What is its hourly fuel burn rate?',
            options: ['640 kg/hr', '720 kg/hr', '800 kg/hr', '960 kg/hr'],
            correctOption: 1,
            explanation: '480 / 40 * 60 = 720 kg/hr.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-2',
    code: 'PART66-M02',
    title: 'Module 2: Physics',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Matter, Mechanics (Statics, Kinetics, Dynamics, Fluid Dynamics), Thermodynamics, Optics, and Wave Motion.',
    price: 199.00,
    duration: '40 Hours',
    status: 'Active',
    icon: 'Atom',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m2-01', title: 'EASA Part-66 Module 2: Physics for AME', format: 'PDF (upload)', fileName: 'EASA_Part66_Module02_Physics.pdf', size: '16.8 MB', pages: 220 }
    ],
    notes: [
      { id: 'n-m2-01', title: 'Bernoulli Principle & Venturi Tube Dynamics', readTime: '15 min', content: 'Conservation of energy in fluid flow: static pressure decreases as velocity increases.' }
    ],
    quizzes: [
      {
        id: 'quiz-m2-1',
        title: 'Quiz 1: Statics, Dynamics & Thermodynamics',
        description: 'Newtonian mechanics, friction, Pascal law, and heat transfer.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 3,
        questions: [
          {
            id: 'q-m2-1',
            text: 'According to Bernoulli’s theorem for incompressible fluid flow:',
            options: ['Dynamic pressure + Static pressure = Total pressure', 'Static pressure increases when velocity increases', 'Density increases with airspeed', 'Pressure is independent of speed'],
            correctOption: 0,
            explanation: 'Total pressure = P_static + 1/2 * rho * V².'
          },
          {
            id: 'q-m2-2',
            text: 'What is the mechanical advantage of a hydraulic press with input area 5 cm² and output area 100 cm²?',
            options: ['10', '20', '50', '500'],
            correctOption: 1,
            explanation: '100 / 5 = 20.'
          },
          {
            id: 'q-m2-3',
            text: 'In transverse wave motion, particle oscillation is:',
            options: ['Parallel to propagation', 'Perpendicular to wave propagation', 'Opposite to wave velocity', 'Rotational only'],
            correctOption: 1,
            explanation: 'Transverse particles oscillate at 90 degrees to wave travel direction.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-3',
    code: 'PART66-M03',
    title: 'Module 3: Electrical Fundamentals',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Electron theory, static electricity, Ohm’s law, Kirchhoff’s laws, AC theory, transformers, filters, and DC/AC generators.',
    price: 219.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Zap',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
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
        questionCount: 3,
        questions: [
          {
            id: 'q-m3-1',
            text: 'Three resistors of 10, 20, and 30 ohms are connected in series across 120V DC. What is the total current?',
            options: ['1 A', '2 A', '3 A', '4 A'],
            correctOption: 1,
            explanation: 'R_total = 60 ohms. I = 120 / 60 = 2 A.'
          },
          {
            id: 'q-m3-2',
            text: 'What happens to capacitive reactance (Xc) when AC frequency increases?',
            options: ['It increases linearly', 'It remains unchanged', 'It decreases inversely', 'It drops to zero instantly'],
            correctOption: 2,
            explanation: 'Xc = 1 / (2 * pi * f * C). As f increases, Xc decreases.'
          },
          {
            id: 'q-m3-3',
            text: 'In an aircraft lead-acid battery, what is the nominal voltage of each single cell?',
            options: ['1.2 Volts', '2.0 Volts', '3.7 Volts', '12 Volts'],
            correctOption: 1,
            explanation: 'A lead-acid cell delivers approximately 2.0 to 2.1 Volts nominal.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-4',
    code: 'PART66-M04',
    title: 'Module 4: Electronic Fundamentals',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Semiconductors, diodes, transistors, integrated circuits, printed circuit boards, and servomechanisms.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'Cpu',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
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
        questionCount: 2,
        questions: [
          {
            id: 'q-m4-1',
            text: 'What is the barrier potential of a forward-biased silicon PN junction diode at room temperature?',
            options: ['0.2 Volts', '0.7 Volts', '1.5 Volts', '3.3 Volts'],
            correctOption: 1,
            explanation: 'Silicon requires approximately 0.7V forward bias to conduct.'
          },
          {
            id: 'q-m4-2',
            text: 'An ideal operational amplifier (Op-Amp) is characterized by:',
            options: ['Zero input impedance', 'Infinite input impedance and zero output impedance', 'Unity gain at DC', 'Zero bandwidth'],
            correctOption: 1,
            explanation: 'Ideal op-amps have infinite input impedance and zero output impedance.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-5',
    code: 'PART66-M05',
    title: 'Module 5: Digital Techniques / Electronic Instrument Systems',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Electronic Instrument Systems, Data Buses (ARINC 429, ARINC 629, MIL-STD-1553), Logic Circuits, Fibre Optics, and Glass Cockpit EFIS.',
    price: 229.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Monitor',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m5-01', title: 'Module 5: Digital Avionics & EFIS Cockpit Systems', format: 'PDF (upload)', fileName: 'EASA_Part66_Module05_Digital.pdf', size: '24.0 MB', pages: 290 }
    ],
    notes: [
      { id: 'n-m5-01', title: 'ARINC 429 Bus Protocol 32-Bit Word Structure', readTime: '15 min', content: 'Labels, SDI, Data Field, SSM, and Parity bit.' }
    ],
    quizzes: [
      {
        id: 'quiz-m5-1',
        title: 'Quiz 1: ARINC 429 & Logic Architecture',
        description: 'Test digital bus standards, logic gates, and ESD protective handling.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m5-1',
            text: 'An ARINC 429 data bus transmission word consists of how many total bits?',
            options: ['16 bits', '24 bits', '32 bits', '64 bits'],
            correctOption: 2,
            explanation: 'The ARINC 429 standard utilizes a 32-bit word format.'
          },
          {
            id: 'q-m5-2',
            text: 'Which logic gate outputs a binary 1 ONLY when all its inputs are 1?',
            options: ['OR gate', 'NAND gate', 'AND gate', 'XOR gate'],
            correctOption: 2,
            explanation: 'An AND gate produces 1 only when all inputs are 1.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-6',
    code: 'PART66-M06',
    title: 'Module 6: Materials & Hardware',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Aircraft materials (Ferrous, Non-ferrous, Composites), corrosion control, fasteners, pipes, bearings, transmissions, and control cables.',
    price: 219.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Layers',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m6-01', title: 'Module 6: Aviation Materials, Fasteners & Hardware', format: 'PDF (upload)', fileName: 'EASA_Part66_Module06_Materials.pdf', size: '18.2 MB', pages: 240 }
    ],
    notes: [
      { id: 'n-m6-01', title: 'Galvanic Series and Dissimilar Metal Corrosion', readTime: '14 min', content: 'Anodic vs cathodic index, protective primers, and sealants.' }
    ],
    quizzes: [
      {
        id: 'quiz-m6-1',
        title: 'Quiz 1: Metallurgy & Fasteners',
        description: 'Assess AN/MS bolts, corrosion types, and composite matrix.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m6-1',
            text: 'An aircraft bolt marked with a raised cross on its head is classified as:',
            options: ['Carriage bolt', 'Standard AN alloy steel aircraft bolt', 'Left-hand thread bolt', 'Titanium bolt'],
            correctOption: 1,
            explanation: 'The raised cross indicates standard aircraft-grade alloy steel.'
          },
          {
            id: 'q-m6-2',
            text: 'What type of corrosion occurs between two dissimilar metals in electrical contact in an electrolyte?',
            options: ['Stress corrosion', 'Galvanic corrosion', 'Intergranular corrosion', 'Fretting corrosion'],
            correctOption: 1,
            explanation: 'Galvanic corrosion attacks the more anodic metal.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-7',
    code: 'PART66-M07',
    title: 'Module 7: Maintenance Practices',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Safety precautions, workshop practices, tooling, engineering drawings, fits & clearances, riveting, NDT, and aircraft disassembly.',
    price: 239.00,
    duration: '50 Hours',
    status: 'Active',
    icon: 'Hammer',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m7-01', title: 'Module 7: Aircraft Maintenance Practices & Workshop Standard', format: 'PDF (upload)', fileName: 'EASA_Part66_Module07_Practices.pdf', size: '26.5 MB', pages: 320 }
    ],
    notes: [
      { id: 'n-m7-01', title: 'Torque Wrenches: Breakaway Torque & Extension Formulas', readTime: '15 min', content: 'Effective torque calculation with in-line extensions.' }
    ],
    quizzes: [
      {
        id: 'quiz-m7-1',
        title: 'Quiz 1: Workshop Tooling & Locking',
        description: 'Safety wiring, torque calculation, and NDT inspection.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m7-1',
            text: 'When locking fasteners with double-twist safety wire, what is the recommended twist rate?',
            options: ['2 to 4 twists per inch', '6 to 8 twists per inch', '12 to 16 twists per inch', '25 twists per inch'],
            correctOption: 1,
            explanation: 'AC 43.13-1B mandates 6 to 8 twists per inch.'
          },
          {
            id: 'q-m7-2',
            text: 'Which Non-Destructive Testing (NDT) method is suitable ONLY for ferromagnetic materials?',
            options: ['Liquid penetrant', 'Eddy current', 'Magnetic particle inspection', 'Ultrasonic'],
            correctOption: 2,
            explanation: 'Magnetic particle inspection requires ferromagnetic material.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-8',
    code: 'PART66-M08',
    title: 'Module 8: Basic Aerodynamics',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Physics of the atmosphere, aerodynamics, airflow around wings, lift, drag, boundary layer, high-lift devices, and flight stability.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'Compass',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m8-01', title: 'Module 8: Subsonic and Transonic Aerodynamics Manual', format: 'PDF (upload)', fileName: 'EASA_Part66_Module08_Aerodynamics.pdf', size: '17.3 MB', pages: 200 }
    ],
    notes: [
      { id: 'n-m8-01', title: 'Boundary Layer Separation & Stall Mechanics', readTime: '15 min', content: 'Adverse pressure gradients and critical angle of attack.' }
    ],
    quizzes: [
      {
        id: 'quiz-m8-1',
        title: 'Quiz 1: Lift, Drag & Stability',
        description: 'Test angle of attack, induced drag, and aspect ratio.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m8-1',
            text: 'How does increasing the aspect ratio of an aircraft wing affect induced drag?',
            options: ['Increases induced drag', 'Reduces induced drag', 'Has zero effect', 'Eliminates parasitic drag'],
            correctOption: 1,
            explanation: 'High aspect ratio wings reduce induced drag by weakening tip vortices.'
          },
          {
            id: 'q-m8-2',
            text: 'What causes an aircraft wing to stall?',
            options: ['Excessive airspeed', 'Exceeding the critical angle of attack', 'Low fuel', 'Flap extension'],
            correctOption: 1,
            explanation: 'A stall occurs when the critical angle of attack is exceeded.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-9',
    code: 'PART66-M09',
    title: 'Module 9: Human Factors',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Human performance and limitations, social psychology, factors affecting performance, physical environment, tasks, communication, and human error.',
    price: 199.00,
    duration: '35 Hours',
    status: 'Active',
    icon: 'UserCheck',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m9-01', title: 'Module 9: Human Factors for Aircraft Maintenance Engineers', format: 'PDF (upload)', fileName: 'EASA_Part66_Module09_HF.pdf', size: '15.9 MB', pages: 195 }
    ],
    notes: [
      { id: 'n-m9-01', title: 'James Reason Swiss Cheese Model of Accident Causation', readTime: '15 min', content: 'Latent organizational failures aligning with active errors.' }
    ],
    quizzes: [
      {
        id: 'quiz-m9-1',
        title: 'Quiz 1: Psychological & Ergonomic Factors',
        description: 'Covers visual acuity, noise limits, and error taxonomy.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m9-1',
            text: 'At what continuous hangar noise level is hearing protection legally mandatory?',
            options: ['60 dBA', '85 dBA', '120 dBA', '150 dBA'],
            correctOption: 1,
            explanation: 'Safety directives mandate hearing protection at or above 85 dBA.'
          },
          {
            id: 'q-m9-2',
            text: 'An error of commission occurs when a technician:',
            options: ['Omits a required step', 'Performs an action incorrectly or carries out the wrong task', 'Reports a defect', 'Signs off a completed card'],
            correctOption: 1,
            explanation: 'Commission means doing something wrong; omission is skipping a required action.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-10',
    code: 'PART66-M10',
    title: 'Module 10: Aviation Legislation',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Regulatory framework, ICAO Chicago Convention, EASA Basic Regulation, Part-21, Part-66, Part-145, Part-M, Part-CAMO, and Part-147.',
    price: 249.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Shield',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m10-01', title: 'Module 10: European Aviation Safety Legislation Comprehensive Guide', format: 'PDF (upload)', fileName: 'EASA_Part66_Module10_Legislation.pdf', size: '25.3 MB', pages: 300 }
    ],
    notes: [
      { id: 'n-m10-01', title: 'Part-66 Aircraft Maintenance Licence (AML) Privileges', readTime: '18 min', content: 'Scope and certification authorizations for Category A, B1, B2, and C licences.' }
    ],
    quizzes: [
      {
        id: 'quiz-m10-1',
        title: 'Quiz 1: EASA Regulations & Licensing',
        description: 'Certificate of Release to Service (CRS), Part-145 approvals, and Part-66 categories.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m10-1',
            text: 'What document is issued by an EASA Part-145 organisation to release an aircraft to service after maintenance?',
            options: ['Airworthiness Certificate Form 15', 'Certificate of Release to Service (CRS)', 'Export Permit', 'Annex 6 Note'],
            correctOption: 1,
            explanation: 'Under Part-145.A.50, a Certificate of Release to Service (CRS) is mandatory.'
          },
          {
            id: 'q-m10-2',
            text: 'What is the minimum age to be issued an EASA Part-66 Aircraft Maintenance Licence?',
            options: ['18 years', '21 years', '25 years', 'No minimum age'],
            correctOption: 1,
            explanation: 'EASA 66.A.15 requires an applicant to be at least 21 years of age.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-11',
    code: 'PART66-M11',
    title: 'Module 11: Aeroplane Aerodynamics, Structures and Systems',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Airframe structures, flight controls, hydraulics, pneumatics, landing gear, air conditioning, oxygen, and fuel systems for turbine aeroplanes.',
    price: 269.00,
    duration: '60 Hours',
    status: 'Active',
    icon: 'Plane',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m11-01', title: 'Module 11: Turbine Aeroplane Structures & Systems Handbook', format: 'PDF (upload)', fileName: 'EASA_Part66_Module11_Systems.pdf', size: '32.0 MB', pages: 380 }
    ],
    notes: [
      { id: 'n-m11-01', title: 'Primary vs Secondary Flight Controls & Hydraulic Redundancy', readTime: '20 min', content: 'Ailerons, elevators, rudder, spoilers, and triple hydraulic architecture.' }
    ],
    quizzes: [
      {
        id: 'quiz-m11-1',
        title: 'Quiz 1: Aeroplane Systems & Airframes',
        description: 'Test hydraulics, pressurization, and primary flight controls.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m11-1',
            text: 'In commercial transport aircraft, cabin altitude is primarily regulated by modulating:',
            options: ['Engine throttle levers', 'Outflow valves', 'Air conditioning pack intake doors', 'Oxygen mask deployment'],
            correctOption: 1,
            explanation: 'Cabin pressure is controlled by varying outflow valve openings while inflow remains steady.'
          },
          {
            id: 'q-m11-2',
            text: 'What is the purpose of a fuse plug (thermal plug) in an aircraft wheel assembly?',
            options: ['To inflate the tire', 'To safely deflate the tire before excessive brake heat causes an explosive burst', 'To ground static electricity', 'To balance the wheel'],
            correctOption: 1,
            explanation: 'Fusible plugs melt under extreme brake heat to release tire pressure safely.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-12',
    code: 'PART66-M12',
    title: 'Module 12: Helicopter Aerodynamics, Structures and Systems',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Rotary wing aerodynamics, swashplate mechanics, rotor heads, transmissions, tail rotor anti-torque systems, and helicopter airframes.',
    price: 259.00,
    duration: '55 Hours',
    status: 'Active',
    icon: 'Compass',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m12-01', title: 'Module 12: Helicopter Aerodynamics & Flight Systems Manual', format: 'PDF (upload)', fileName: 'EASA_Part66_Module12_Helicopter.pdf', size: '28.5 MB', pages: 340 }
    ],
    notes: [
      { id: 'n-m12-01', title: 'Swashplate Cyclic and Collective Pitch Control', readTime: '18 min', content: 'Translational lift, dissymmetry of lift, and tail rotor drift compensation.' }
    ],
    quizzes: [
      {
        id: 'quiz-m12-1',
        title: 'Quiz 1: Rotary Aerodynamics & Rotors',
        description: 'Test swashplate mechanics, gyroscopic precession, and autorotation.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m12-1',
            text: 'How is dissymmetry of lift compensated for in a semi-rigid or fully articulated helicopter rotor system?',
            options: ['By increasing engine RPM', 'By blade flapping and lead-lag hinges', 'By locking the collective lever', 'By deploying tail fins'],
            correctOption: 1,
            explanation: 'The advancing blade flaps upward, reducing its effective angle of attack to equalize lift across the rotor disc.'
          },
          {
            id: 'q-m12-2',
            text: 'During helicopter autorotation following an engine failure, what drives the main rotor?',
            options: ['An auxiliary electric motor', 'Upward airflow through the rotor disc as the helicopter descends', 'Residual tail rotor torque', 'Battery power'],
            correctOption: 1,
            explanation: 'Potential energy of descent creates an upward airflow driving the rotor in autorotation.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-13',
    code: 'PART66-M13',
    title: 'Module 13: Aircraft Aerodynamics, Structures and Systems (Avionic)',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Avionics syllabus for Category B2 AML candidates: Communications (VHF/HF/SATCOM), Navigation (VOR/ILS/GNSS/DME/TCAS), Auto-flight, Radar, and Instruments.',
    price: 279.00,
    duration: '60 Hours',
    status: 'Active',
    icon: 'Radio',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m13-01', title: 'Module 13: Aircraft Avionics & Flight Guidance Systems', format: 'PDF (upload)', fileName: 'EASA_Part66_Module13_Avionics.pdf', size: '34.0 MB', pages: 410 }
    ],
    notes: [
      { id: 'n-m13-01', title: 'ILS Localizer & Glideslope Carrier Frequencies', readTime: '18 min', content: '90 Hz and 150 Hz depth of modulation for runway centerline and descent path tracking.' }
    ],
    quizzes: [
      {
        id: 'quiz-m13-1',
        title: 'Quiz 1: Navigation & Auto-Flight Guidance',
        description: 'Test TCAS resolution advisories, ILS modulation, and Inertial Reference Systems.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m13-1',
            text: 'In an Instrument Landing System (ILS), the localizer transmitter provides:',
            options: ['Vertical glidepath guidance', 'Horizontal lateral runway centerline guidance', 'Distance to touchdown in nautical miles', 'Windshear detection'],
            correctOption: 1,
            explanation: 'The localizer operates in VHF (108.10-111.95 MHz) to provide lateral runway alignment.'
          },
          {
            id: 'q-m13-2',
            text: 'What does a TCAS II Resolution Advisory (RA) command the flight crew to do?',
            options: ['Execute immediate vertical evasive maneuvers (climb or descend)', 'Turn left or right 45 degrees', 'Shut down engines', 'Report to ATC immediately'],
            correctOption: 0,
            explanation: 'TCAS II issues vertical climb or descend maneuvers to prevent mid-air collisions.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-14',
    code: 'PART66-M14',
    title: 'Module 14: Propulsion',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Avionic propulsion engine systems, Electronic Engine Control (FADEC), engine indication, ignition systems, and thrust reverser electrical interlocks.',
    price: 249.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Cpu',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m14-01', title: 'Module 14: Avionic Propulsion & FADEC Controls Manual', format: 'PDF (upload)', fileName: 'EASA_Part66_Module14_Propulsion.pdf', size: '22.0 MB', pages: 270 }
    ],
    notes: [
      { id: 'n-m14-01', title: 'FADEC Dual-Channel Power Supplies (Dedicated PMA)', readTime: '15 min', content: 'Permanent Magnet Alternators guaranteeing self-sufficient electrical power above 10% engine core speed.' }
    ],
    quizzes: [
      {
        id: 'quiz-m14-1',
        title: 'Quiz 1: Engine Electronic Controls',
        description: 'Test PMA dedicated alternators, thermocouple probes, and EGT instrumentation.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m14-1',
            text: 'What provides dedicated electrical power to the engine FADEC Electronic Control Unit once the engine is rotating?',
            options: ['Aircraft main battery only', 'An engine-driven Permanent Magnet Alternator (PMA)', 'APU generator only', 'Solar panels on nacelles'],
            correctOption: 1,
            explanation: 'A dedicated PMA ensures FADEC power is completely independent of aircraft electrical bus failures.'
          },
          {
            id: 'q-m14-2',
            text: 'Exhaust Gas Temperature (EGT) is typically measured using which type of sensor?',
            options: ['Potentiometers', 'Chromel-Alumel (Type K) thermocouples', 'Thermistor beads', 'Optical infrared cameras'],
            correctOption: 1,
            explanation: 'Chromel-Alumel thermocouples generate voltage directly proportional to high turbine exhaust temperatures.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-15',
    code: 'PART66-M15',
    title: 'Module 15: Gas Turbines',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Gas turbine fundamentals, compressor stalls, combustor chambers, axial vs radial turbines, exhaust systems, and thrust reversers.',
    price: 259.00,
    duration: '55 Hours',
    status: 'Active',
    icon: 'Flame',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m15-01', title: 'Module 15: Gas Turbine Engine Mechanical Systems Handbook', format: 'PDF (upload)', fileName: 'EASA_Part66_Module15_GasTurbines.pdf', size: '29.0 MB', pages: 350 }
    ],
    notes: [
      { id: 'n-m15-01', title: 'Compressor Surge, Stalls & Bleed Valve Operation', readTime: '16 min', content: 'Aerodynamic breakdown of compressor blades and automated mitigation using variable vanes.' }
    ],
    quizzes: [
      {
        id: 'quiz-m15-1',
        title: 'Quiz 1: Thermodynamic Cycles & Compressors',
        description: 'Brayton cycle, compressor surge margins, and turbine blade cooling.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m15-1',
            text: 'The ideal thermodynamic cycle on which gas turbine engines operate is known as the:',
            options: ['Otto cycle', 'Diesel cycle', 'Brayton (Joule) cycle', 'Carnot cycle'],
            correctOption: 2,
            explanation: 'Gas turbines operate on the continuous Brayton cycle: compression, constant-pressure combustion, and expansion.'
          },
          {
            id: 'q-m15-2',
            text: 'High-pressure turbine blades are protected from gas temperatures exceeding metal melting points primarily by:',
            options: ['Painting with heat-resistant enamel', 'Internal convection cooling air and external film cooling holes', 'Spraying with fuel', 'Operating only at high altitude'],
            correctOption: 1,
            explanation: 'Compressor bleed air routed through hollow internal passages forms an insulating thermal barrier film.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-16',
    code: 'PART66-M16',
    title: 'Module 16: Piston Engines',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Four-stroke and two-stroke reciprocating engines, carburation, fuel injection, magneto dual-ignition systems, and turbocharging.',
    price: 229.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'Wrench',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m16-01', title: 'Module 16: Aviation Piston Engines & Fuel Metering Systems', format: 'PDF (upload)', fileName: 'EASA_Part66_Module16_PistonEngines.pdf', size: '21.5 MB', pages: 260 }
    ],
    notes: [
      { id: 'n-m16-01', title: 'Aircraft Magneto Ignition & P-lead Grounding', readTime: '15 min', content: 'Self-contained impulse coupling magnetos, breaker points, and spark plug timing.' }
    ],
    quizzes: [
      {
        id: 'quiz-m16-1',
        title: 'Quiz 1: Reciprocating Engine Mechanics',
        description: 'Test Otto 4-stroke cycle, magneto ignition, and detonation vs pre-ignition.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m16-1',
            text: 'Why do certified aircraft piston engines utilize two completely independent magnetos?',
            options: ['To increase fuel burn', 'For redundancy and more efficient dual-flame front combustion', 'To charge dual batteries', 'To power cabin heating'],
            correctOption: 1,
            explanation: 'Dual magnetos provide safety redundancy if one fails and improve combustion speed across two spark plugs.'
          },
          {
            id: 'q-m16-2',
            text: 'Detonation in an aircraft reciprocating piston engine is characterized by:',
            options: ['Controlled slow burning of fuel', 'Extremely rapid uncontrolled explosive combustion of unburned end-gas causing severe cylinder damage', 'Failure of the starter motor', 'Exhaust backfiring on descent'],
            correctOption: 1,
            explanation: 'Detonation produces severe pressure spikes that damage pistons and cylinder heads.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-17',
    code: 'PART66-M17',
    title: 'Module 17: Propellers',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Propeller blade theory, constant-speed governors, feathering, reverse pitch, synchronization, de-icing boots, and blade dynamic balancing.',
    price: 229.00,
    duration: '40 Hours',
    status: 'Active',
    icon: 'RotateCw',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m17-01', title: 'Module 17: Aircraft Propellers & Governor Control Manual', format: 'PDF (upload)', fileName: 'EASA_Part66_Module17_Propellers.pdf', size: '19.8 MB', pages: 230 }
    ],
    notes: [
      { id: 'n-m17-01', title: 'Constant Speed Propeller Governors: Flyweights & Speeder Spring', readTime: '15 min', content: 'Underspeed, on-speed, and overspeed states modulating oil pressure to blade pitch pistons.' }
    ],
    quizzes: [
      {
        id: 'quiz-m17-1',
        title: 'Quiz 1: Constant-Speed Governors & Feathering',
        description: 'Test aerodynamic twisting moments, feathering latch pins, and synchrophasers.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m17-1',
            text: 'What is the primary purpose of feathering a propeller following an in-flight engine failure on a multi-engine aircraft?',
            options: [
              'To reverse aircraft direction',
              'To rotate blade chord parallel to airflow, eliminating windmill rotation and drastically reducing aerodynamic drag',
              'To restart the engine automatically',
              'To recharge the primary batteries'
            ],
            correctOption: 1,
            explanation: 'Feathering aligns blades with the relative wind, averting severe drag and preserving single-engine flight performance.'
          },
          {
            id: 'q-m17-2',
            text: 'Centrifugal twisting moment on a rotating propeller blade tends to turn the blade toward:',
            options: ['A higher pitch angle', 'A lower pitch (fine) angle', 'Feathered pitch', 'Reverse pitch'],
            correctOption: 1,
            explanation: 'Centrifugal force acting on blade mass distribution naturally forces blades toward fine (flat) pitch.'
          }
        ]
      }
    ]
  },
  {
    id: 'module-18',
    code: 'PART66-M18',
    title: 'Module 18: Electric Powerplant',
    category: 'module',
    subCategory: 'EASA PART 66 - MODULES',
    description: 'Electric and hybrid aircraft propulsion systems, high-voltage battery architectures, inverters, brushless DC motors, thermal management, and HV safety procedures.',
    price: 259.00,
    duration: '45 Hours',
    status: 'Active',
    icon: 'BatteryCharging',
    lastCertified: '2024-05-15',
    recertIntervalMonths: 24,
    books: [
      { id: 'b-m18-01', title: 'Module 18: Electric & Hybrid Aircraft Propulsion Systems', format: 'PDF (upload)', fileName: 'EASA_Part66_Module18_ElectricPowerplant.pdf', size: '24.0 MB', pages: 280 }
    ],
    notes: [
      { id: 'n-m18-01', title: 'High Voltage Interlock Loops (HVIL) & Isolation Monitoring', readTime: '16 min', content: 'Pre-charge contactors, battery management systems (BMS), and emergency manual service disconnects.' }
    ],
    quizzes: [
      {
        id: 'quiz-m18-1',
        title: 'Quiz 1: Electric Motors & High-Voltage Architecture',
        description: 'Test high-voltage DC buses, inverter modulation, and thermal runaway prevention.',
        timeLimitMinutes: 15,
        passingScore: 75,
        questionCount: 2,
        questions: [
          {
            id: 'q-m18-1',
            text: 'What is the primary function of a High Voltage Interlock Loop (HVIL) in an electric aircraft propulsion system?',
            options: [
              'To increase battery charging speed',
              'To continuously verify the physical and electrical integrity of all high-voltage connectors and de-energize contactors instantly if any plug opens',
              'To cool electric motor windings',
              'To synchronize navigation lights'
            ],
            correctOption: 1,
            explanation: 'HVIL is a critical safety circuit that cuts high-voltage contactor power if a harness is disconnected.'
          },
          {
            id: 'q-m18-2',
            text: 'Which type of electric motor is predominantly used for electric aircraft propulsion due to its high power density and efficiency?',
            options: ['Brushed DC motor with mechanical commutator', 'Permanent Magnet Synchronous Motor (PMSM) / Brushless DC', 'Single-phase AC shaded-pole motor', 'Stepper motor'],
            correctOption: 1,
            explanation: 'PMSM motors deliver the highest torque-to-weight ratio and efficiency required for aeronautical propulsion.'
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
    birthCountry: 'United Kingdom',
    phone: '+44 20 7946 0912',
    enrolledCourses: []
  },
  {
    id: 'usr-stu-1',
    name: 'Alex Vance',
    email: 'student@trinityaviation.com',
    role: 'student',
    birthCountry: 'United Kingdom',
    phone: '+44 7700 900077',
    enrolledCourses: ['course-1', 'module-1', 'module-3']
  },
  {
    id: 'usr-stu-2',
    name: 'Student One',
    email: 'student1@test.com',
    role: 'student',
    birthCountry: 'United Arab Emirates',
    phone: '+971 50 123 4567',
    enrolledCourses: ['course-1', 'course-2']
  },
  {
    id: 'usr-stu-3',
    name: 'Student Two',
    email: 'student2@test.com',
    role: 'student',
    birthCountry: 'Germany',
    phone: '+49 151 23456789',
    enrolledCourses: ['course-1', 'course-3']
  },
  {
    id: 'usr-stu-4',
    name: 'Student Three',
    email: 'student3@test.com',
    role: 'student',
    birthCountry: 'France',
    phone: '+33 6 12 34 56 78',
    enrolledCourses: []
  },
  {
    id: 'usr-stu-5',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
    birthCountry: 'United States',
    phone: '+1 555 019 2834',
    enrolledCourses: []
  },
  {
    id: 'usr-stu-6',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'student',
    birthCountry: 'Canada',
    phone: '+1 555 018 7654',
    enrolledCourses: ['course-2']
  },
  {
    id: 'usr-stu-7',
    name: 'Tester Test',
    email: 'student1@uams.edu',
    role: 'student',
    birthCountry: 'Ireland',
    phone: '+353 1 234 5678',
    enrolledCourses: []
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'ORD-2024-001',
    studentEmail: 'student@trinityaviation.com',
    studentName: 'Alex Vance',
    courseIds: ['course-1', 'module-1'],
    courseNames: ['Safety Management System + Human Factor (SMS + HF) Initial Course', 'Module 1: Mathematics'],
    total: 548.00,
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
    courseNames: ['Module 3: Electrical Fundamentals'],
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
    courseIds: ['course-1'],
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
    courseIds: ['course-2', 'module-1'],
    courseNames: ['Fuel Tank Safety (FTS) Initial Course', 'Module 1: Mathematics'],
    total: 448.00,
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
    courseTitle: 'Module 1: Mathematics',
    quizId: 'quiz-m1-1',
    quizTitle: 'Quiz 1: Mathematics Fundamentals',
    scorePercent: 100,
    totalQuestions: 4,
    correctAnswers: 4,
    passed: true,
    date: '2024-02-22 14:30',
    timeSpentSeconds: 420,
    answersBreakdown: [
      { questionId: 'q-m1-1', questionText: 'Evaluate the expression: (3/4 + 1/2) * 8', options: ['8', '10', '12', '14'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: '3/4 + 1/2 = 5/4. 5/4 * 8 = 10.' },
      { questionId: 'q-m1-2', questionText: 'Convert binary 101101 to decimal equivalent:', options: ['35', '41', '45', '49'], selectedOption: 2, correctOption: 2, isCorrect: true, explanation: '32 + 8 + 4 + 1 = 45.' },
      { questionId: 'q-m1-3', questionText: 'What is the value of x in the equation: 4x - 7 = 2x + 9?', options: ['6', '8', '7', '10'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: '2x = 16 => x = 8.' },
      { questionId: 'q-m1-4', questionText: 'An aircraft consumes 480 kg of fuel in 40 minutes. Hourly fuel burn rate?', options: ['640 kg/hr', '720 kg/hr', '800 kg/hr', '960 kg/hr'], selectedOption: 1, correctOption: 1, isCorrect: true, explanation: '480 / 40 * 60 = 720 kg/hr.' }
    ]
  },
  {
    id: 'att-102',
    studentEmail: 'student@trinityaviation.com',
    studentName: 'Alex Vance',
    courseId: 'course-1',
    courseTitle: 'Safety Management System + Human Factor (SMS + HF) Initial Course',
    quizId: 'quiz-smshf-1',
    quizTitle: 'Quiz 1: SMS Pillars & Human Factors',
    scorePercent: 100,
    totalQuestions: 5,
    correctAnswers: 5,
    passed: true,
    date: '2024-02-25 11:15',
    timeSpentSeconds: 345,
    answersBreakdown: []
  },
  {
    id: 'att-103',
    studentEmail: 'student2@test.com',
    studentName: 'Student Two',
    courseId: 'course-3',
    courseTitle: 'Electrical Wiring Interconnect System Initial Course',
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
  currency: 'EUR (€)',
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

// Exact 4 Services as requested
export const SERVICES_DATA = [
  {
    id: 'srv-1',
    title: 'EASA Part-66 Modular Training',
    icon: 'BookOpen',
    description: 'Comprehensive modular training packages covering all 18 basic knowledge modules with high-yield study notes, technical PDF manuals, and randomized practice question banks.'
  },
  {
    id: 'srv-2',
    title: 'EASA Part-145 & Part-M Solution',
    icon: 'ShieldCheck',
    description: 'Statutory compliance packages for approved maintenance organizations, covering recurrent Human Factors, Fuel Tank Safety Phase 2, and EWIS Target Groups.'
  },
  {
    id: 'srv-3',
    title: 'EASA Compliant Trainings & Courses',
    icon: 'Award',
    description: 'Specialized continuing airworthiness qualifications including Safety Management Systems (SMS), CFM 56-5B technical familiarisation, Aircraft Handling, and Train the Trainer.'
  },
  {
    id: 'srv-4',
    title: 'Aircraft Sales & Services',
    icon: 'PlaneTakeoff',
    description: 'Aviation technical consultancy, pre-purchase airworthiness inspection support, engineering records auditing, and commercial fleet acquisition services.'
  }
];
