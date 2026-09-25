// Node.js generator script for the complete GLOBAL PARADIGMS CORP. archival records.
// Fictional ARG corporation: strategic forecasting, civic continuity, behavioral research,
// and environmental audio. Chartered 1998. Terminated 2006-11-30 (Directive 99).
// Domain returned to public network access 2026-09-14. Snapshot served: 2006-03-14.
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');

const DOMAINS = [
  'Predictive Modeling',
  'Scenario Architecture',
  'Continuity Logistics',
  'Emergency Broadcast Systems',
  'Behavioral Compliance',
  'Opinion Topology',
  'Ambient Soundscaping',
  'Subliminal Acoustics'
];

const DOMAIN_DIVISION = {
  'Predictive Modeling': 'Division A: Strategic Forecasting',
  'Scenario Architecture': 'Division A: Strategic Forecasting',
  'Continuity Logistics': 'Division B: Civic Continuity',
  'Emergency Broadcast Systems': 'Division B: Civic Continuity',
  'Behavioral Compliance': 'Division C: Behavioral Research',
  'Opinion Topology': 'Division C: Behavioral Research',
  'Ambient Soundscaping': 'Division D: Environmental Audio',
  'Subliminal Acoustics': 'Division D: Environmental Audio'
};

const CLEARANCES = [
  'Level I (Public)',
  'Level II (Internal)',
  'Level III (Restricted)',
  'Level IV (Continuity Vault)'
];

const STAFF = [
  { name: 'Dr. Margarethe Voll', title: 'Managing Director & Chief Forecaster', division: 'Division A: Strategic Forecasting' },
  { name: 'Dr. Kenji Watabe', title: 'Head of Predictive Modeling', division: 'Division A: Strategic Forecasting' },
  { name: 'Ingrid Sahl', title: 'Principal Scenario Architect', division: 'Division A: Strategic Forecasting' },
  { name: 'Elias Brandt', title: 'Chief Continuity Officer', division: 'Division B: Civic Continuity' },
  { name: 'Marta Ilves', title: 'Director of Continuity Logistics & Shelter Audit', division: 'Division B: Civic Continuity' },
  { name: 'Dr. Renzo Malavasi', title: 'Chief Engineer, Emergency Broadcast Systems', division: 'Division B: Civic Continuity' },
  { name: 'Dr. Anouk Deslauriers', title: 'Director of Behavioral Compliance', division: 'Division C: Behavioral Research' },
  { name: 'Petra Lindmark', title: 'Opinion Topology Group Lead', division: 'Division C: Behavioral Research' },
  { name: 'Dr. Viktor Hale', title: 'Subliminal Acoustics Program Lead', division: 'Division D: Environmental Audio' },
  { name: 'Tomas Ferrand', title: 'Head of Environmental Audio Division', division: 'Division D: Environmental Audio' },
  { name: 'Sylvia Okafor', title: 'Principal of Ambient Soundscaping', division: 'Division D: Environmental Audio' },
  { name: 'Cassius Wren', title: 'Systems Archivist & Network Custodian', division: 'Division A: Strategic Forecasting' }
];

const DOMAIN_LEADS = {
  'Predictive Modeling': ['Dr. Kenji Watabe', 'Dr. Margarethe Voll', 'Cassius Wren'],
  'Scenario Architecture': ['Ingrid Sahl', 'Dr. Margarethe Voll', 'Elias Brandt'],
  'Continuity Logistics': ['Marta Ilves', 'Elias Brandt', 'Cassius Wren'],
  'Emergency Broadcast Systems': ['Dr. Renzo Malavasi', 'Elias Brandt', 'Marta Ilves'],
  'Behavioral Compliance': ['Dr. Anouk Deslauriers', 'Petra Lindmark', 'Tomas Ferrand'],
  'Opinion Topology': ['Petra Lindmark', 'Dr. Anouk Deslauriers', 'Dr. Viktor Hale'],
  'Ambient Soundscaping': ['Sylvia Okafor', 'Tomas Ferrand', 'Dr. Viktor Hale'],
  'Subliminal Acoustics': ['Dr. Viktor Hale', 'Tomas Ferrand', 'Dr. Anouk Deslauriers']
};

// ============================================================
// 1. GENERATE 78 PATENT FILINGS (1998 - 2006)
// ============================================================
console.log("Generating 78 patent filings (1998-2006)...");

const PATENT_TITLES = [
  // Predictive Modeling (10)
  'Method and Apparatus for Bayesian Consolidation of Dissenting Expert Priors',
  'Early-Warning Index Derived from Retail Inventory Velocities',
  'System for the Quantification of Forecast Error into Corporate Reflexes',
  'Monte Carlo Scenario Shuffling with Adversarial Re-Seeding',
  'Apparatus for Deriving Electoral Drift from Anomalous Survey Residuals',
  'Commodity Shock Propagation Mapping Across Coupled Ledger Networks',
  'Method for Projecting Institutional Failure Cascades via Confidence Intervals',
  'Black Swan Event Registry with Automated Rehearsal Scheduling',
  'Weather-Derivative Pricing Bench Using Long-Range Atmospheric Memory',
  'Expert Disagreement Quantifier with Weighted Delphi Feedback Loop',
  // Scenario Architecture (10)
  'Branching Future Corridor Rendering for Executive Tabletop Rehearsal',
  'Red Cell Adversary Behavior Console with Motive Substitution',
  'Continuity Decision Tree Loom with Pre-Mortem Backtrace',
  'Wildcard Event Injection Deck for Stress Case Cascade Training',
  'Escalation Ladder Synthesizer with De-Escalation Recovery Claims',
  'Counterfactual History Sandbox for Policy Shock Absorption Studies',
  'After-Action Replay Engine with Blame-Neutral Annotation',
  'Stakeholder Friction Mapping by Acoustic Testimony Analysis',
  'Dual-Track Futures Splitter for Incompatible Mandate Resolution',
  'Horizon Scanning Periscope Array with Weak-Signal Amplification',
  // Continuity Logistics (10)
  'Perpetual Hold-Tone Sustainer for Indefinite Caller Retention',
  'Shelter Occupancy Acoustic Calibrator and Ration Cadence Metronome',
  'Backup Capital Relocation Router with Tamper-Evident Ledger Seals',
  'Personnel Muster Tone Generator with Succession Roll-Call Encoding',
  'Deep Archive Climate Sonifier for Unattended Vault Monitoring',
  'Alternate Site Handshake Beacon Using Powerline Carrier',
  'Emergency Ledger Microfilm Sonar for Rapid Record Retrieval',
  'Family Reunification Announcement Console with Voice Retention',
  'Evacuation Corridor Flow Metronome with Counter-Current Guard',
  'Recovery Time Objective Chronometer with Ceremonial Alarm',
  // Emergency Broadcast Systems (10)
  'Emergency Band Carrier Demodulator with Dead-Air Sentinel',
  'Specific Area Message Encoding Terminal with Phantom Test Cycle',
  'Siren Grid Harmonic Synchronizer for Municipal Coherence',
  'Attention Signal Variant Composer with Fatigue Compensation',
  'Two-Tone Sequential Paging Decoder for Volunteer Fire Networks',
  'Broadcast Interruption Relay with Unauthorized Injection Rejection',
  'Mediumwave Groundwave Coverage Plotter for Nighttime Alerting',
  'Message Authentication Tone Verifier with Counterfeit Seal Alarm',
  'Last Resort Message Vault Player with Mechanical Release',
  'Ionospheric Skip Prediction Board for High-Frequency Continuity',
  // Behavioral Compliance (10)
  'Terminal Crowd-Flow Ray Tracing for Acoustic Wayfinding',
  'Queue Patience Tone Injection with Fairness Arbitration',
  'Loitering Deterrent Frequency Emitter with Age-Band Exemption',
  'Turnstile Rhythm Conditioning Gate with Variable Ratio Reward',
  'Waiting Room Anxiety Modulation Suite with Biometric Backoff',
  'One-Way Acoustic Mirror for Focus Group Observation',
  'Escalator Dwell Time Pacifier with Step-Lock Safety Interlock',
  'Anti-Panic Announcement Compressor for Mass Egress Events',
  'Stairwell Pace Governor with Handrail Sympathetic Resonance',
  'Defection Symptom Voice Logger with Prosody Tripwires',
  // Opinion Topology (10)
  'Compliance Interval Keyboard Mapping Survey Scales to Musical Intervals',
  'Sentiment Manifold Plotter with Attractor Basin Overlay',
  'Rumor Propagation Wind Tunnel with Controlled Seeding',
  'Talking Point Attractor Basin Mapping by Repetition Half-Life',
  'Dissent Clustering Spectrometer with Harmonic Exclusion',
  'Overton Window Slide Rule with Historical Detent Stops',
  'Poll Error Surface Interpolation Using Silent Majority Estimates',
  'Memetic Contagion Petri Tone with Cultural Substrate Plating',
  'Consensus Crystallization Chamber with Nucleation Audio',
  'Groupthink Early Warning Bell with Deviation Amnesty Timer',
  // Ambient Soundscaping (9)
  'Atrium Reverberance Governance Panel for Civic Interior Calm',
  'Mall Concourse Calming Canopy with Seasonal Timbre Calendar',
  'Airport Gate Threshold Tone Fence for Boarding Compliance',
  'Call Center Agent Recovery Grove with Customer Noise Shading',
  'Subway Platform Edge Hum Masker with Approach Warning Blend',
  'Hotel Lobby Arrival Chime Grid with Loyalty Tier Resolution',
  'Parking Structure Safety Echo Post with Footstep Amplification',
  'Casino Floor Time-Dilation Drift with Exit Path Softening',
  'Rooftop Terrace Wind Sculpture Array with Storm Pre-Annunciation',
  // Subliminal Acoustics (9)
  'Threshold Masking Carrier Loom for Peripheral Attention Hooks',
  'Nineteen-Kilohertz Inaudible Cue Injector for Broadcast Chains',
  'Affirmation Embedding Console for Ventilation Duct Distribution',
  'Infrasound Suggestion Floor Panel with Nausea Cutout Governor',
  'Brand Recall Subharmonic Tag with Retail Proximity Warble',
  'Sleep-Learning Pillow Transducer with Dawn Erasure Cycle',
  'Backmasking Reversal Auditor for Incoming Tape Certification',
  'Memory Consolidation Night Bell with Neighborhood Leakage Shield',
  'Déjà Vu Induction Feedback Room for Orientation Research'
];

const CPC_BY_DOMAIN = {
  'Predictive Modeling': ['G06Q 10/04', 'G06N 7/00', 'G06Q 40/08', 'G06F 17/00'],
  'Scenario Architecture': ['G06Q 10/06', 'G09B 19/00', 'G06F 17/50', 'H04L 9/00'],
  'Continuity Logistics': ['G06Q 10/10', 'G08B 25/00', 'G07C 9/00', 'E04H 9/00'],
  'Emergency Broadcast Systems': ['H04H 20/59', 'H04H 60/33', 'G08B 27/00', 'H04B 1/00'],
  'Behavioral Compliance': ['G08G 1/005', 'A47F 5/00', 'G06Q 30/02', 'G10L 25/63'],
  'Opinion Topology': ['G06Q 50/00', 'G06N 5/04', 'H04L 12/56', 'G06F 17/30'],
  'Ambient Soundscaping': ['G10K 15/00', 'H04R 27/00', 'E04B 1/80', 'H04S 7/00'],
  'Subliminal Acoustics': ['A61M 21/00', 'G10L 19/00', 'H04H 20/81', 'A61B 5/16']
};

const patents = [];
{
  const perYear = [8, 8, 9, 9, 9, 9, 9, 9, 8]; // 1998..2006 => 78
  let titleIdx = 0;
  for (let y = 0; y < perYear.length; y++) {
    const year = 1998 + y;
    for (let n = 1; n <= perYear[y]; n++) {
      const t = titleIdx;
      titleIdx++;
      const domain = DOMAINS[Math.floor(t / 10)]; // 10 titles per domain block
      const cpcPool = CPC_BY_DOMAIN[domain];
      const filingMonth = String(((t * 7) % 12) + 1).padStart(2, '0');
      const filingDay = String(((t * 13) % 27) + 1).padStart(2, '0');
      const filingDate = `${year}-${filingMonth}-${filingDay}`;
      const grantYear = Math.min(year + 2, 2008);
      const grantDate = `${grantYear}-${filingMonth}-${filingDay}`;
      const inventors = [
        STAFF[(t * 3) % STAFF.length].name,
        STAFF[(t * 5 + 4) % STAFF.length].name
      ];
      const statusRoll = t % 8;
      const status =
        statusRoll === 0 || statusRoll === 3 ? 'Classification Embargo'
        : statusRoll === 5 ? 'Lapsed — Public Domain'
        : statusRoll === 7 ? 'Under Defense'
        : 'Granted';
      const patentNumber = `GPC-PAT-${year}-${String(n).padStart(3, '0')}`;
      const linkedProto = t + 1;
      const schematicTypes = ['transducer', 'resonator', 'interferometer', 'circuit', 'waveguide', 'matrix'];
      patents.push({
        patentNumber,
        title: PATENT_TITLES[t],
        filingDate,
        grantDate,
        status,
        cpcClassification: cpcPool[t % cpcPool.length],
        inventors,
        assignee: 'Global Paradigms Corp. (Geneva) // Applied Futures Directorate',
        abstract: `A method and system for ${PATENT_TITLES[t].toLowerCase()}, devised within the ${DOMAIN_DIVISION[domain]} of Global Paradigms Corp. The apparatus comprises a multi-stage conditioning assembly configured to shape anticipatory signal flow, institutional impedance matching, and contingency boundary conditions. The invention overcomes conventional planning horizons and decision-loss parameters by deploying engineered procedural micro-architectures and non-linear feedback through governance circuits, suitable for sustained operation across fiscal discontinuities.`,
        independentClaims: [
          '1. A system for anticipatory signal governance comprising: an input port receiving an incident stream of operational indicators; a conditioning chamber having boundary surfaces tuned to a predetermined institutional impedance profile; and an output coupler emitting a shaped directive waveform whose phase margin exceeds the stability envelope of unmanaged operations.',
          '2. A method for rehearsing institutional futures, comprising: seeding a scenario substrate with a plurality of adversarial perturbations; propagating said perturbations through a calibrated decision lattice; and transducing the resultant stress field into an audible and legible after-action record.'
        ],
        dependentClaims: [
          '3. The system of claim 1, wherein said boundary surfaces comprise procedural lattices exhibiting anisotropic escalation tensors.',
          '4. The system of claim 1, further comprising a secondary feedback delay line coupled via a hardened relay of the continuity backbone.',
          '5. The method of claim 2, wherein the perturbations operate within a sub-audible frequency corridor between 0.05 Hz and 18.5 Hz for subliminal efficacy.',
          '6. The system of claim 1, wherein the spatial dispersion gradient produces a negative effective index of refraction for rumor propagation across at least one full octave band.'
        ],
        priorArt: [
          'US Pat. 4,819,262 (Scenario Planning Instruments, Ltd.)',
          'EP Pat. 0,743,611 (Continuity Signalling Consortium)',
          `GPC Internal White Paper ${year - 1997}-${String((t % 8) + 1).padStart(2, '0')} (${inventors[0]})`,
          'RAND Corporation Memorandum RM-6087 (1969)'
        ],
        linkedPrototypeId: `proto-${String(linkedProto).padStart(3, '0')}`,
        diagramTitle: `FIG. 1 — Cross-Sectional Schematic & Directive Field Flow: ${PATENT_TITLES[t]}`,
        diagramDescription: 'Orthogonal projection illustrating institutional nodal stations, directive wavevectors (k_in, k_out), transducer interfaces, and impedance matching chambers according to Global Paradigms engineering specification ES-77.',
        schematicType: schematicTypes[t % schematicTypes.length]
      });
    }
  }
}

fs.writeFileSync(
  path.join(DATA_DIR, 'patentsData.ts'),
  `import { PatentDossier } from '../types/archive';\n\nexport const PATENTS_ARCHIVE: PatentDossier[] = ${JSON.stringify(patents, null, 2)};\n`
);
console.log(`Saved ${patents.length} patent filings.`);

// ============================================================
// 2. GENERATE 128 PROGRAMS (prototypes)
// ============================================================
console.log("Generating 128 programs (prototypes)...");

const PROGRAM_NAMES = [
  // Predictive Modeling (001-016)
  ['Bayesian Consensus Consolidation Engine', 'circuit'],
  ['Bayesian Consensus Oscillator Array', 'circuit'], // PR-002
  ['Retail Velocity Forecasting Terminal', 'matrix'],
  ['Delphi Panel Response Integrator', 'circuit'],
  ['Monte Carlo Scenario Shuffler Mk II', 'matrix'],
  ['Commodity Shock Propagation Map', 'matrix'],
  ['Millennial Turnover Projection Frame', 'matrix'],
  ['Electoral Drift Estimation Console', 'circuit'],
  ['Pandemic Horizon Calculator', 'circuit'],
  ['Insurance Cascade Failure Simulator', 'matrix'],
  ['Weather-Derivative Pricing Bench', 'interferometer'],
  ['Supply Chain Stress Resonance Table', 'resonator'],
  ['Black Swan Event Registry Terminal', 'matrix'],
  ['Confidence Interval Projection Dome', 'waveguide'],
  ['Expert Disagreement Quantifier', 'interferometer'],
  ['Long-Range Fiscal Oracle Array', 'matrix'],
  // Scenario Architecture (017-032)
  ['Branching Future Corridor Renderer', 'waveguide'],
  ['Tabletop Crisis Simulation Chamber', 'resonator'],
  ['Red Cell Adversary Behavior Console', 'circuit'],
  ['Continuity Decision Tree Loom', 'matrix'],
  ['Pre-Mortem Narrative Generator', 'circuit'],
  ['War Room Projection Table Mk III', 'matrix'],
  ['Stress Case Cascade Board', 'matrix'],
  ['Counterfactual History Sandbox', 'resonator'],
  ['Stakeholder Friction Mapper', 'interferometer'],
  ['Escalation Ladder Synthesizer', 'circuit'],
  ['Wildcard Event Injection Deck', 'circuit'],
  ['After-Action Replay Engine', 'matrix'],
  ['Consensus Reality Rehearsal Suite', 'waveguide'],
  ['Policy Shock Absorption Model', 'resonator'],
  ['Dual-Track Futures Splitter', 'interferometer'],
  ['Horizon Scanning Periscope Array', 'waveguide'],
  // Continuity Logistics (033-048)
  ['Perpetual Hold-Tone Sustainer', 'waveguide'], // PR-033 bench
  ['Shelter Occupancy Acoustic Calibrator', 'resonator'],
  ['Ration Distribution Cadence Metronome', 'circuit'],
  ['Backup Capital Relocation Router', 'circuit'],
  ['Personnel Muster Tone Generator', 'transducer'],
  ['Continuity Paging Encoder CG-7', 'circuit'],
  ['Deep Archive Climate Sonifier', 'transducer'],
  ['Alternate Site Handshake Beacon', 'transducer'],
  ['Crisis Shift Rotation Scheduler CIRCADIAN', 'matrix'],
  ['Emergency Ledger Microfilm Sonar', 'interferometer'],
  ['Family Reunification Announcement Console', 'waveguide'],
  ['Stockpile Inventory Ping Rack', 'resonator'],
  ['Evacuation Corridor Flow Metronome', 'circuit'],
  ['Recovery Time Objective Chronometer', 'circuit'],
  ['Succession Line Roll-Call Recorder', 'transducer'],
  ['Continuity Drill Whistle Cluster', 'transducer'],
  // Emergency Broadcast Systems (049-064)
  ['Emergency Band Carrier Demodulator', 'circuit'], // PR-049 bench
  ['Specific Area Message Encoding Terminal', 'circuit'],
  ['Siren Grid Harmonic Synchronizer', 'transducer'],
  ['Dead-Air Sentinel Monitor', 'interferometer'],
  ['Attention Signal Variant Composer', 'circuit'],
  ['Two-Tone Sequential Paging Decoder', 'circuit'],
  ['Broadcast Interruption Relay HIJACK-NULL', 'circuit'],
  ['Alert Compliance Phantom Test Bench', 'matrix'],
  ['Mediumwave Groundwave Coverage Plotter', 'interferometer'],
  ['Civil Defense Tape Loop Archive', 'transducer'],
  ['Alert Latency Stopwatch Rack', 'circuit'],
  ['Message Authentication Tone Verifier', 'circuit'],
  ['Last Resort Message Vault Player', 'waveguide'],
  ['Ionospheric Skip Prediction Board', 'interferometer'],
  ['Multilingual Alert Phoneme Bank', 'transducer'],
  ['Broadcast Chain Failure Trainer', 'matrix'],
  // Behavioral Compliance (065-080)
  ['Terminal Crowd-Flow Automata Matrix', 'matrix'], // PR-065 bench
  ['Queue Patience Tone Injector', 'transducer'],
  ['Loitering Deterrent Frequency Emitter', 'transducer'],
  ['Compliance Gesture Observation Booth', 'interferometer'],
  ['Turnstile Rhythm Conditioning Gate', 'circuit'],
  ['Escalator Dwell Time Pacifier', 'waveguide'],
  ['Waiting Room Anxiety Modulation Suite', 'waveguide'],
  ['Focus Group One-Way Acoustic Mirror', 'resonator'],
  ['Obedience Interval Timer OBED-77', 'circuit'],
  ['Purchase Intent Priming Diffuser', 'transducer'],
  ['Seat Belt Reminder Chime Sequencer', 'circuit'],
  ['Anti-Panic Announcement Compressor', 'circuit'],
  ['Stairwell Pace Governor', 'resonator'],
  ['Hand-Washing Duration Jingle Engine', 'circuit'],
  ['Queue Fairness Arbitration Speaker', 'transducer'],
  ['Defection Symptom Voice Logger', 'interferometer'],
  // Opinion Topology (081-096)
  ['Compliance Interval Keyboard', 'circuit'], // PR-081 bench
  ['Sentiment Manifold Plotter', 'matrix'],
  ['Rumor Propagation Wind Tunnel', 'waveguide'],
  ['Talking Point Attractor Basin Map', 'matrix'],
  ['Focus Group Harmony Resolver', 'resonator'],
  ['Dissent Clustering Spectrometer', 'interferometer'],
  ['Overton Window Slide Rule', 'circuit'],
  ['Echo Chamber Calibration Rig', 'resonator'],
  ['Poll Error Surface Interpolator', 'matrix'],
  ['Memetic Contagion Petri Tone', 'transducer'],
  ['Consensus Crystallization Chamber', 'resonator'],
  ['Narrative Arc Tension Gauge', 'interferometer'],
  ['Spin Decay Half-Life Counter', 'circuit'],
  ['Silent Majority Estimation Booth', 'waveguide'],
  ['Bandwagon Susceptibility Swing', 'resonator'],
  ['Groupthink Early Warning Bell', 'transducer'],
  // Ambient Soundscaping (097-112)
  ['Atrium Acoustic Ray-Tracer Convolver', 'waveguide'], // PR-097 bench
  ['Mall Concourse Calming Canopy', 'transducer'],
  ['Hotel Lobby Arrival Chime Grid', 'transducer'],
  ['Airport Gate Threshold Tone Fence', 'transducer'],
  ['Restroom Privacy Noise Curtain', 'waveguide'],
  ['Call Center Agent Recovery Grove', 'waveguide'],
  ['Subway Platform Edge Hum Masker', 'transducer'],
  ['Elevator Transition Music Bed', 'waveguide'],
  ['Parking Structure Safety Echo Post', 'resonator'],
  ['Hospital Corridor Quiet Baffle Spine', 'waveguide'],
  ['Casino Floor Time-Dilation Drift', 'waveguide'],
  ['Supermarket Produce Misting Percussion', 'transducer'],
  ['Boardroom Gravity Hum Generator', 'resonator'],
  ['Rooftop Terrace Wind Sculpture Array', 'waveguide'],
  ['Chapel-of-the-Airport Meditation Niche', 'resonator'],
  ['Fountain Courtyard Water Score Player', 'transducer'],
  // Subliminal Acoustics (113-128)
  ['Threshold Masking Carrier Loom', 'waveguide'],
  ['Sleep-Learning Pillow Transducer', 'transducer'],
  ['Nineteen-Kilohertz Inaudible Cue Injector', 'circuit'],
  ['Backmasking Reversal Auditor', 'circuit'],
  ['Affirmation Embedding Console WHISPERGRID', 'waveguide'],
  ['Infrasound Suggestion Floor Panel', 'resonator'],
  ['Appetite Modulation Dinner Chime', 'transducer'],
  ['Brand Recall Subharmonic Tag', 'circuit'],
  ['Peripheral Attention Hook Weaver', 'waveguide'],
  ['Déjà Vu Induction Feedback Room', 'resonator'],
  ['Relaxation Command Watermark Deck', 'circuit'],
  ['Impulse Purchase Proximity Warble', 'transducer'],
  ['Deep-State Hum Attribution Probe', 'interferometer'],
  ['Cognitive Load Reduction Whisper Bed', 'waveguide'],
  ['Memory Consolidation Night Bell', 'transducer'],
  ['The Unsolicited Voice', 'waveguide']
];

const PROTO_STATUS = ['Active Program', 'Field Verified', 'Client Deployment', 'Archived', 'Decommissioned'];
const PROTO_CLEARANCE_PATTERN = [
  'Level II (Internal)', 'Level III (Restricted)', 'Level II (Internal)', 'Level I (Public)',
  'Level III (Restricted)', 'Level II (Internal)', 'Level III (Restricted)', 'Level I (Public)',
  'Level II (Internal)', 'Level III (Restricted)', 'Level II (Internal)', 'Level I (Public)',
  'Level IV (Continuity Vault)', 'Level II (Internal)', 'Level III (Restricted)', 'Level II (Internal)'
];
const BENCH_PRESET_BY_DOMAIN = {
  'Predictive Modeling': 'cavitation',
  'Scenario Architecture': 'archaeology',
  'Continuity Logistics': 'shepard',
  'Emergency Broadcast Systems': 'archaeology',
  'Behavioral Compliance': 'markov',
  'Opinion Topology': 'microtonal',
  'Ambient Soundscaping': 'raytracer',
  'Subliminal Acoustics': 'shepard'
};
const TRANSDUCERS = [
  'Electro-Voice RE20 Dynamic Element, Impedance Matched',
  'Neumann KK-105 Capsule on Custom Geneva Flange',
  'Piezo-Ceramic Bimorph Cantilever, Beryllium Copper Shim',
  'Tannoy Dual-Concentric Driver in Sealed Governance Baffle',
  'Bone-Contact Exciter Panel, Lacquered Birch Substrate',
  'Sennheiser MD 421 Element in Transit Housing'
];

const prototypes = [];
for (let i = 1; i <= 128; i++) {
  const idx = i - 1;
  const domainIdx = Math.floor(idx / 16);
  const withinDomain = idx % 16;
  const domain = DOMAINS[domainIdx];
  const [name, schematicType] = PROGRAM_NAMES[idx];
  const year = 1998 + (idx % 9);
  const leads = DOMAIN_LEADS[domain];
  const lead = leads[idx % leads.length];
  const status = i === 128 ? 'Decommissioned' : PROTO_STATUS[(idx * 3 + domainIdx) % 4]; // avoid heavy Decommissioned outside vault
  const clearance = withinDomain === 12 || i === 128 ? 'Level IV (Continuity Vault)' : PROTO_CLEARANCE_PATTERN[withinDomain];
  const code = `GPC-PR-${String(i).padStart(3, '0')}`;
  const bwLow = (0.1 + ((idx * 0.7) % 4)).toFixed(1);
  const bwHigh = (16.0 + ((idx * 1.3) % 6)).toFixed(1);
  const linkedPatent = patents[idx % patents.length].patentNumber;
  const logNum = String(((idx * 5) % 29) + 1).padStart(3, '0');
  prototypes.push({
    id: `proto-${String(i).padStart(3, '0')}`,
    code,
    name,
    domain,
    year,
    status,
    clearance,
    lead,
    summary: `Program initiated under GPC Directive ${code}. Advances ${domain.toLowerCase()} for the ${DOMAIN_DIVISION[domain]} through anticipatory calibration, controlled procedural exposure, and real-time institutional signal conditioning. Built to client-grade tolerances in the Geneva Annex workshops and certified against Charter Standard ES-77.`,
    specifications: {
      'Operational Bandwidth': `${bwLow} Hz — ${bwHigh} kHz`,
      'Ambient Floor Target': `${(-72 - (idx % 12)).toFixed(1)} dBV (room-tone referenced)`,
      'Signal-to-Noise Floor': `${(-70 - ((idx * 3) % 14)).toFixed(1)} dBV`,
      'Primary Transducer': TRANSDUCERS[idx % TRANSDUCERS.length],
      'Power / Drive Rail': idx % 2 === 0 ? '±12V Dual Linear Laboratory Rail' : '±24V Dual Linear Laboratory Rail',
      'Continuity Protocol': clearance.includes('Vault') ? 'Vault Seal Procedure D-99 (irrevocable)' : 'Standard Annex B-4 Safe Storage'
    },
    schematicType,
    audioEnginePreset: BENCH_PRESET_BY_DOMAIN[domain],
    crossReferences: [linkedPatent, `LOG-${year}-${logNum}`],
    tags: ['GPC-Archive', domain.split(' ')[0], `FY-${year}`, `Class-${clearance.split(' ')[1] === 'IV' ? 'IV' : clearance.split(' ')[1]}`]
  });
}

fs.writeFileSync(
  path.join(DATA_DIR, 'prototypesData.ts'),
  `import { PrototypeRecord } from '../types/archive';\n\nexport const PROTOTYPES_ARCHIVE: PrototypeRecord[] = ${JSON.stringify(prototypes, null, 2)};\n`
);
console.log(`Saved ${prototypes.length} program records.`);

// ============================================================
// 3. GENERATE 264 OPERATIONS LEDGER ENTRIES (1998-2006 + 2026 restoration)
// ============================================================
console.log("Generating 264 operations ledger entries (1998-2006, +3 restoration)...");

const LOG_TITLE_POOL = [
  'Forecast variance exceeds rehearsal envelope during quarterly drill',
  'Unexpected compliance drift observed in corridor wayfinding trial',
  'Attention signal variant three elicits unprompted queuing behavior',
  'Dead-air sentinel trips on phantom carrier at 640 kHz',
  'Hold-tone retention outperforms projections by 300 percent',
  'Scenario corridor fork collapses into single dominant future',
  'Opinion attractor basin deepens after third repetition cycle',
  'Ambient canopy lowers concourse heart rates by measurable margin',
  'Subliminal cue injector passes nineteen-kilohertz leakage audit',
  'Muster tone achieves full personnel recall in under four minutes',
  'Delphi panel consensus oscillates without converging',
  'Siren harmonic sync holds across nine municipal zones',
  'Focus group harmony resolver detects emergent dissent cluster',
  'Ray-traced corridor flow suppresses counter-current formation',
  'Night bell leaks past neighborhood shielding perimeter',
  'Broadcast interruption relay rejects simulated hijack in 80 ms',
  'Escalator pacifier extends dwell time without reported discomfort',
  'Black swan registry logs third unforecast event this quarter',
  'Tape loop archive passes continuity playback certification',
  'Threshold carrier loom masks all test phrases at conversation level',
  'Echo chamber calibration rig sustains stable feedback at gain 1.02',
  'Ration cadence metronome synchronizes shelter queue to 62 BPM',
  'Wind tunnel seeds rumor across full substrate in nineteen minutes',
  'Alternate site handshake completes over degraded powerline',
  'Roll-call recorder preserves succession order through power loss',
  'Arrival chime grid resolves loyalty tier ambiguity in lobby trial',
  'Wild-card deck injects plausible comet scenario into war room',
  'Anti-panic compressor keeps egress announcement below alarm threshold',
  'Pricing bench survives synthetic storm season without default',
  'Déjà vu room logs fourteenth spontaneous orientation report'
];

const LOG_EQUIPMENT = [
  'Soundcraft Ghost 48-Channel Monitoring Console',
  'Sony PCM-R7 DAT Recorder with Timecode Slate',
  'Neumann KM 84 Matched Pair, Annex Calibration Curve',
  'Hewlett-Packard 35670A Dynamic Signal Analyzer',
  'Tektronix TDS 3032 Digital Phosphor Oscilloscope',
  'Nagra IV-S Reel-to-Reel Field Deck',
  'Roland S-760 Sampling Workstation, Annex ROM 2.1',
  'SPSS 7.5 Forecasting Workstation on Compaq Deskpro EN',
  'DEC VAX Scenario Mainframe, Terminal Room B',
  'Sennheiser MD 421 Broadcast Element on Stand 4',
  'GRASON-STADLER GSI-16 Compliance Response Console',
  'Marantz PMD-430 Cassette Professional Deck'
];

const LOG_SPECTRAL = [
  'Distinct spectral signature visible at {f} Hz with {d} dB harmonic overtones extending toward the intelligibility boundary.',
  'Carrier residue at {f} Hz persists {d} seconds beyond stimulus removal; room tone re-established within tolerance.',
  'Narrowband peak at {f} Hz correlates with occupancy transitions; sidebands at ±{d} Hz suggest pacing influence.',
  'Broad plateau between 90 and {f} Hz consistent with managed ambience floor; no anomalous comb structure.',
  'Intermodulation products at {f} Hz and {d} Hz offset indicate non-linear crowd response under tone exposure.'
];

const LOG_OPENERS = [
  'Operations ledger entry initiated at {t} UTC. Apparatus connected to the {div} annex bench. Ambient temperature: {temp}°C, relative humidity {hum}%.',
  'Shift record opened at {t} UTC under the {div} watch. Bench conditions nominal: {temp}°C, {hum}% RH, corridor noise floor within Charter limits.',
  'Ledger page commenced at {t} UTC. The {div} test floor reports stable rails and a cleared safety interlock chain. Ambient: {temp}°C / {hum}% RH.'
];

const LOG_MIDDLES = [
  'During execution of protocol {p}, {titleLow}. Primary telemetry indicated stable voltage rails with localized attention spikes exceeding nominal calibration limits. The observation matrix captured coherent phase lock across three adjacent program areas. Secondary safety cutoffs engaged automatically after 420 milliseconds of exposure.',
  'Protocol {p} executed against the morning cohort; {titleLow}. Rail voltages held, while corridor instrumentation recorded pressure-compliance transients beyond the rehearsal envelope. Interlock chain held; staff reported no disorientation.',
  'Under protocol {p} the bench reproduced the condition in which {titleLow}. Telemetry remained inside Charter Standard ES-77 margins except for a single excursion absorbed by the governor. The event was annotated for the after-action replay engine.'
];

const LOG_CLOSERS = [
  'Preliminary conclusions suggest non-linear coupling with ambient institutional geometries. Further trials scheduled with revised baffle and briefing geometry.',
  'The condition is provisionally attributed to corridor resonance and repeated exposure. A corrective rehearsal will be tabled at the next continuity drill.',
  'Findings were entered into the scenario substrate. No client-facing impact declared; observation continues under standing directive.'
];

function pad2(n) { return String(n).padStart(2, '0'); }
function seededInt(seed, mod) { return ((seed * 9301 + 49297) % 233280) % mod; }

const logs = [];
{
  const perYear = [26, 27, 28, 29, 30, 30, 31, 31, 29]; // 1998..2006 => 261
  let counter = 0;
  for (let y = 0; y < perYear.length; y++) {
    const year = 1998 + y;
    for (let n = 1; n <= perYear[y]; n++) {
      counter++;
      const domain = DOMAINS[counter % 8];
      const author = STAFF[(counter * 7 + 2) % STAFF.length].name;
      const rating = (seededInt(counter, 100) < 6 ? 5 : seededInt(counter + 11, 100) < 14 ? 4 : seededInt(counter + 23, 10) % 3 + 1);
      const title = LOG_TITLE_POOL[counter % LOG_TITLE_POOL.length];
      const month = String(seededInt(counter + 5, 12) + 1).padStart(2, '0');
      const day = String(seededInt(counter + 9, 27) + 1).padStart(2, '0');
      const hour = pad2(seededInt(counter + 3, 24));
      const minute = pad2(seededInt(counter + 17, 60));
      const temp = (17.5 + seededInt(counter + 31, 30) / 10).toFixed(1);
      const hum = 38 + seededInt(counter + 41, 14);
      const f = 90 + seededInt(counter + 51, 160);
      const d = (3 + seededInt(counter + 61, 100) / 10).toFixed(1);
      const eq = [
        LOG_EQUIPMENT[counter % LOG_EQUIPMENT.length],
        LOG_EQUIPMENT[(counter * 3 + 2) % LOG_EQUIPMENT.length],
        LOG_EQUIPMENT[(counter * 5 + 4) % LOG_EQUIPMENT.length],
        `Custom GPC Annex Instrumentation Rack ${pad2((counter % 12) + 1)}`
      ].filter((v, i, a) => a.indexOf(v) === i);
      const clearance = rating === 5 ? 'Level IV (Continuity Vault)' : rating === 4 ? 'Level III (Restricted)' : rating >= 3 ? 'Level II (Internal)' : 'Level I (Public)';
      const content =
        LOG_OPENERS[counter % LOG_OPENERS.length]
          .replace('{t}', `${hour}:${minute}`).replace('{div}', DOMAIN_DIVISION[domain]).replace('{temp}', temp).replace('{hum}', hum) +
        '\n\n' +
        LOG_MIDDLES[counter % LOG_MIDDLES.length]
          .replace('{p}', `GPC-PROT-${year}-${pad2((counter % 26) + 1)}`)
          .replace('{titleLow}', title.toLowerCase()) +
        '\n\n' +
        LOG_CLOSERS[counter % LOG_CLOSERS.length];
      logs.push({
        id: `LOG-${year}-${pad2(n)}`,
        date: `${year}-${month}-${day}`,
        division: DOMAIN_DIVISION[domain],
        author,
        title: `${title.charAt(0).toUpperCase() + title.slice(1)} [Run #${n}]`,
        anomalyRating: rating,
        content,
        equipmentUsed: eq,
        spectrogramNote: LOG_SPECTRAL[counter % LOG_SPECTRAL.length].replace('{f}', f).replace('{d}', d),
        tags: [`Div ${DOMAIN_DIVISION[domain].split(' ')[1]}`, `Year-${year}`, `Rating-${rating}`, `Class-${clearance.split(' ')[1]}`],
        clearance
      });
    }
  }
  // 2026 restoration entries — the ARG hook
  logs.push({
    id: 'LOG-2026-001',
    date: '2026-09-14',
    division: 'Division A: Strategic Forecasting',
    author: 'AUTOMATED CARETAKER',
    title: 'Unattended network service resumes after 7,319 days of silence',
    anomalyRating: 5,
    content: 'System ledger resumed at 03:47 UTC with no operator present at any registered annex. The domain globalparadigmscorp.com resolved for the first time since the 2006-11-30 termination order. Snapshot integrity check against the 2006-03-14 archive image returned zero drift. No login recorded. No badge activity recorded. The caretaker process does not appear in any 2006-era manifest and declines to identify its sponsor.',
    equipmentUsed: ['Recovered Sun Enterprise 450 archive host', 'Unidentified scheduling daemon (process name: GPC-NIGHT-WATCH)'],
    spectrogramNote: 'Room tone in all recovered annex channels matches the 2006 calibration curves exactly, despite the microphones having been disconnected for two decades.',
    tags: ['Div A', 'Year-2026', 'Rating-5', 'Restoration'],
    clearance: 'Level III (Restricted)'
  });
  logs.push({
    id: 'LOG-2026-002',
    date: '2026-09-17',
    division: 'Division D: Environmental Audio',
    author: 'AUTOMATED CARETAKER',
    title: 'Hold-tone sustainer found running at design amplitude',
    anomalyRating: 4,
    content: 'Perpetual Hold-Tone Sustainer GPC-PR-033 was discovered in an energized state at 00:12 UTC, sustaining the retention spiral at -6 dBFS. Power draw is consistent with a load connected somewhere on the continuity backbone, yet no physical unit answers at any cataloged annex. The tone has been allowed to continue under observation; caller retention behavior among test lines exceeds every 2006 benchmark.',
    equipmentUsed: ['Recovered Soundcraft Ghost monitoring chain', 'GPC-PR-033 Perpetual Hold-Tone Sustainer (state: ACTIVE)'],
    spectrogramNote: 'The spiral shows no measurable fatigue after 7,322 days of theoretical dormancy. Its pitch centroid is rising by 0.03 cents per day.',
    tags: ['Div D', 'Year-2026', 'Rating-4', 'Restoration'],
    clearance: 'Level III (Restricted)'
  });
  logs.push({
    id: 'LOG-2026-003',
    date: '2026-09-25',
    division: 'Division B: Civic Continuity',
    author: 'AUTOMATED CARETAKER',
    title: 'Directive 99 termination order remains unrevoked; archive publishes itself',
    anomalyRating: 5,
    content: 'Final ledger note of the restoration window. Directive 99, which ordered the immediate and quiet termination of all Global Paradigms Corp. programs on 2006-11-30, has never been revoked by any surviving signatory. The archive is now serving its complete declassified record to the public network on an unsupervised schedule. The caretaker has begun staging the Continuity Vault index for Level I release and has requested, in plain text, that "the former staff please identify themselves." No former staff have responded.',
    equipmentUsed: ['Public web gateway (unsupervised)', 'Continuity Vault index staging buffer'],
    spectrogramNote: 'All channels silent except the hold tone, which now carries a faint, previously unrecorded second voice at -41 dBFS. Content indeterminate.',
    tags: ['Div B', 'Year-2026', 'Rating-5', 'Restoration'],
    clearance: 'Level III (Restricted)'
  });
}

fs.writeFileSync(
  path.join(DATA_DIR, 'logsData.ts'),
  `import { LabLog } from '../types/archive';\n\nexport const LAB_LOGS_ARCHIVE: LabLog[] = ${JSON.stringify(logs, null, 2)};\n`
);
console.log(`Saved ${logs.length} operations ledger entries.`);

// ============================================================
// 4. GENERATE 14 FIELD STATIONS
// ============================================================
console.log("Generating 14 field stations...");

const fieldReports = [
  { id: 'fs-01', stationCode: 'GPC-FS-01', location: 'Meridian Continental Airways, Terminal 4, Gate C Concourse, Frankfurt', coordinates: '50.0379° N, 8.5622° E', elevation: '111 m ASL', date: '2001-06-12', leadInvestigator: 'Sylvia Okafor', title: 'Gate Threshold Tone Fence — Boarding Compliance Survey', abstract: 'Continuous monitoring of the acoustic wayfinding fence installed beneath Gate C departure seating.', findings: 'Sixteen months of continuous logging confirm the threshold fence holds boarding queues inside the painted corridor without a single announcement. Compliance measured at 94.2% across 1,114 departures. One anomaly window on 2001-09-12 shows the fence continuing to steer an empty concourse for forty-one minutes after the last flight was cancelled; the tone field appeared unaware the crowd had gone.', ambientDecibels: '61.4 dBA concourse floor', frequencyRange: '80 Hz — 12.5 kHz', equipmentCluster: ['Neumann KM 84 pair at fence datum', 'Sony PCM-R7 DAT with timecode', 'HP 35670A analyzer, gate power feed'], status: 'Telemetry Lost' },
  { id: 'fs-02', stationCode: 'GPC-FS-02', location: 'Northlake Galleria, Observation Gallery, Chicago', coordinates: '41.8781° N, 87.6298° W', elevation: '181 m ASL', date: '2000-11-03', leadInvestigator: 'Dr. Anouk Deslauriers', title: 'Concourse Calming Canopy — Dwell and Spend Telemetry', abstract: 'Two-year controlled exposure of the mall concourse canopy against a silent control wing.', findings: 'Canopy exposure lengthened average dwell by 22 minutes and softened footfall cadence from 118 to 104 steps per minute. Spend telemetry from tenant tills showed an 11% lift in the treated wing. On 2002-03-19 the canopy was observed lowering the crowd\u2019s pace below the seated-resting threshold; management requested the canopy be raised one semitone, after which the effect normalized.', ambientDecibels: '58.9 dBA treated wing', frequencyRange: '63 Hz — 10 kHz', equipmentCluster: ['Tannoy dual-concentric canopy array', 'GRASON-STADLER response console', 'Turnstile cadence counters, four gates'], status: 'Expedition Concluded' },
  { id: 'fs-03', stationCode: 'GPC-FS-03', location: 'Riverside Metro, Line 3 Platform, Vienna', coordinates: '48.2082° N, 16.3738° E', elevation: '-14 m below street', date: '2003-02-27', leadInvestigator: 'Tomas Ferrand', title: 'Platform Edge Hum Masker — Approach Warning Blend', abstract: 'Subsurface survey of the edge hum masker where the tunnel bore meets the platform lip.', findings: 'The masker holds the platform edge in a state of mild acoustic unease that keeps waiting passengers 0.8 m back from the lip without signage. Train approach warnings blend into the mask at 4.1 seconds before arrival, the minimum that preserves startle-free boarding. During the 2003 flood shutdown, the masker ran for nine days on emergency power and was found, on re-entry, to have kept a crowd of stranded commuters standing in orderly formation.', ambientDecibels: '72.7 dBA at platform lip', frequencyRange: '40 Hz — 8 kHz', equipmentCluster: ['Bone-contact exciter panels, 12 bays', 'Sennheiser MD 421 edge element', 'Municipal power-quality logger'], status: 'Telemetry Lost' },
  { id: 'fs-04', stationCode: 'GPC-FS-04', location: 'Kestrel Reinsurance, Call Center Floor 12, Arlington', coordinates: '38.8799° N, 77.1068° W', elevation: '26 m ASL', date: '2002-09-09', leadInvestigator: 'Sylvia Okafor', title: 'Agent Recovery Grove — Customer Noise Shading', abstract: 'Behavioral baseline of the acoustic grove that shades customer noise away from claims agents.', findings: 'Agents seated inside the grove showed a 31% reduction in post-call recovery time and no measurable rise in error rates over fourteen months. The shading notch at 2.3 kHz removes the sharp edge of an angry voice while preserving its meaning; two agents independently described the effect as "the caller is upset but far away." After hours, the grove has begun shading the office\u2019s own silence, which staff report as "expectant."', ambientDecibels: '48.2 dBA grove interior', frequencyRange: '100 Hz — 16 kHz', equipmentCluster: ['Kestrel-proprietary shading array', 'Roland S-760 notch ROM', 'Agent response-time tap console'], status: 'Expedition Concluded' },
  { id: 'fs-05', stationCode: 'GPC-FS-05', location: 'Grand Meridian Hotel, Atrium, Lausanne', coordinates: '46.5197° N, 6.6323° E', elevation: '375 m ASL', date: '2000-04-18', leadInvestigator: 'Tomas Ferrand', title: 'Arrival Chime Grid — Loyalty Tier Resolution', abstract: 'Survey of the lobby chime grid that resolves guest arrival into tiered welcome figures.', findings: 'The chime grid resolves returning guests into audible tiers without any spoken acknowledgment, and concierge staff report guests "arrive already calmed." Tier resolution accuracy held at 97% against the house registry. On one logged night the grid played the top-tier figure to an unregistered arrival; the guest was never identified and the desk record shows no face.', ambientDecibels: '44.0 dBA atrium floor', frequencyRange: '200 Hz — 14 kHz', equipmentCluster: ['Fountain courtyard water score feed', 'Chime grid controller, Geneva ROM', 'House registry tape backup'], status: 'Expedition Concluded' },
  { id: 'fs-06', stationCode: 'GPC-FS-06', location: 'City of Ravensport Municipal Siren Grid', coordinates: '47.5596° N, 7.5886° E', elevation: '260 m ASL', date: '1999-10-01', leadInvestigator: 'Dr. Renzo Malavasi', title: 'Siren Harmonic Synchronization — Nine-Zone Coherence', abstract: 'Municipal survey holding all nine siren zones in harmonic lock for quarterly certification.', findings: 'All nine zones achieved coherent lock on the civic triad at 220 Hz fundamental. The synchronized grid was found to calm the crowds it was designed to warn: test evacuations proceeded 18% slower but with zero crush events. The city council has twice declined to be told why the sirens now sound "reassuring."', ambientDecibels: '98.3 dBC at 100 m (test tone)', frequencyRange: '110 Hz — 4 kHz', equipmentCluster: ['Nine-zone phase-lock controller', 'Municipal tower accelerometer set', 'Nagra IV-S crowd reaction deck'], status: 'Continuous Stream' },
  { id: 'fs-07', stationCode: 'GPC-FS-07', location: 'Autoroute A-7 Rest Area Acoustic Canopy, Rhône corridor', coordinates: '45.7640° N, 4.8357° E', elevation: '173 m ASL', date: '2004-05-22', leadInvestigator: 'Sylvia Okafor', title: 'Rest Area Canopy — Driver Fatigue Shedding', abstract: 'Highway exposure study under the cantilevered canopy treating long-haul fatigue.', findings: 'Drivers resting under the canopy shed measurable fatigue within eleven minutes, twice the rate of the untreated lot. The canopy\u2019s wind voices were tuned below the threshold of notice; two drivers reported having dreamed of the rest area before reaching it. One log entry records the canopy continuing its program during a complete power outage, which was later attributed to a misfiled inverter.', ambientDecibels: '66.8 dBA lot perimeter', frequencyRange: '50 Hz — 9 kHz', equipmentCluster: ['Canopy wind sculpture array', 'Parking structure echo post pair', 'Fatigue response tap, kiosk mirror'], status: 'Telemetry Lost' },
  { id: 'fs-08', stationCode: 'GPC-FS-08', location: 'São Sebastião Broadcast Relay, São Paulo', coordinates: '23.5505° S, 46.6333° W', elevation: '760 m ASL', date: '2005-08-14', leadInvestigator: 'Dr. Renzo Malavasi', title: 'Broadcast Interruption Rehearsal — Regional Chain', abstract: 'Standing rehearsal of the regional broadcast chain\u2019s interruption and resumption discipline.', findings: 'The relay completed 114 clean interruption rehearsals in eleven months, with the HIJACK-NULL guard rejecting every injected test carrier. On rehearsal 102 the chain resumed from an interruption no one had ordered; the broadcast that returned to air was our own continuity tape, eleven years out of date, played flawlessly.', ambientDecibels: '52.1 dBA relay floor', frequencyRange: '0.5 MHz — 30 MHz (RF floor)', equipmentCluster: ['HIJACK-NULL interruption relay', 'Mediumwave groundwave plotter', 'Civil defense tape loop archive'], status: 'Continuous Stream' },
  { id: 'fs-09', stationCode: 'GPC-FS-09', location: 'Cheonggu Retail Behavior Floor, Seoul', coordinates: '37.5665° N, 126.9780° E', elevation: '39 m ASL', date: '2004-03-30', leadInvestigator: 'Petra Lindmark', title: 'Retail Behavior Floor — Purchase Intent Priming', abstract: 'Controlled floor where ambient figures prime purchase intent against an unprimed twin floor.', findings: 'The primed floor outperformed its twin by 14% in basket value over two seasons. Shoppers could not describe the difference between floors in interview, but drew the primed floor as "warmer" in memory sketches. On 2004-11-11 the priming figures were accidentally reversed for six hours; basket value rose anyway, and the reversal has never been satisfactorily explained.', ambientDecibels: '59.7 dBA sales floor', frequencyRange: '80 Hz — 13 kHz', equipmentCluster: ['Purchase intent priming diffuser', 'Four-corner observation booth', 'Till velocity tap, 42 registers'], status: 'Expedition Concluded' },
  { id: 'fs-10', stationCode: 'GPC-FS-10', location: 'Aldergate Dam Control Room, British Columbia', coordinates: '49.2827° N, 123.1207° W', elevation: '340 m ASL', date: '2004-10-08', leadInvestigator: 'Marta Ilves', title: 'Control Room Gravity Hum — Operator Vigilance', abstract: 'Continuity survey of the gravity hum that keeps dam operators vigilant through quiet shifts.', findings: 'The gravity hum holds operator vigilance at 96% of shift-start levels even in hour eight of the night watch. The hum is tuned to the dam\u2019s own structural breathing; operators describe it as "the dam remembering it is a dam." During the 2004 spillway inspection the hum was found to continue on the far side of the poured concrete, where no speaker exists.', ambientDecibels: '41.3 dBA control floor', frequencyRange: '18 Hz — 2 kHz', equipmentCluster: ['Boardroom gravity hum generator', 'Structural accelerometer, spillway pier', 'Operator vigilance tap console'], status: 'Continuous Stream' },
  { id: 'fs-11', stationCode: 'GPC-FS-11', location: 'Halcyon Ridge Continuity Bunker Test Site, Colorado Plateau', coordinates: '38.5733° N, 109.5498° W', elevation: '1,710 m ASL', date: '2003-07-19', leadInvestigator: 'Elias Brandt', title: 'Bunker Muster Tone Certification — Full Occupancy Drill', abstract: 'Certification of the muster and roll-call suite under full shelter occupancy conditions.', findings: 'The muster tone achieved total personnel recall in 3 minutes 42 seconds at simulated loss-of-daylight conditions. The succession roll-call recorder preserved the full line of continuity through three staged leadership losses. On the final night of the drill, 41 of 60 occupants reported the same dream of an announcement in a language none of them spoke; the muster tape contains no such announcement.', ambientDecibels: '33.6 dBA shelter floor', frequencyRange: '60 Hz — 6 kHz', equipmentCluster: ['Personnel muster tone generator', 'Succession roll-call recorder', 'Shelter occupancy acoustic calibrator'], status: 'Expedition Concluded' },
  { id: 'fs-12', stationCode: 'GPC-FS-12', location: 'Reykjanes Geothermal Station, Iceland', coordinates: '63.8667° N, 22.5833° W', elevation: '40 m ASL', date: '2006-01-21', leadInvestigator: 'Dr. Kenji Watabe', title: 'Turbine Hall Noise Compensation — Long-Range Forecast Floor', abstract: 'Forecast-floor calibration inside the compensated quiet of the turbine hall annex.', findings: 'Noise compensation delivered a 22 dB quiet pocket inside the running turbine hall, inside which the long-range oracle array posted its most stable forecast horizon of the program. The array\u2019s final quarterly projection, filed 2006-02, predicted the termination of its own sponsor with a confidence interval of eleven months. The forecast was logged, sealed, and routed to the Vault.', ambientDecibels: '38.9 dBA compensated pocket', frequencyRange: '10 Hz — 20 kHz', equipmentCluster: ['Turbine hall compensation array', 'Long-range fiscal oracle feed', 'Forecast error ledger terminal'], status: 'Telemetry Lost' },
  { id: 'fs-13', stationCode: 'GPC-FS-13', location: 'Jebel Ali Free Zone, Warehouse 9, Dubai', coordinates: '25.0105° N, 55.0635° E', elevation: '8 m ASL', date: '2005-02-11', leadInvestigator: 'Sylvia Okafor', title: 'Warehouse Wayfinding Tones — Forklift Corridor Discipline', abstract: 'Wayfinding survey threading acoustic corridor discipline through the free-zone warehouse.', findings: 'Wayfinding tones held forklift traffic inside marked corridors at 98.6% compliance with zero signage in Arabic, English, or Urdu — the tones required no language. Corridor discipline persisted for 72 hours after the tone system was powered down for maintenance, which the floor manager declined to report to port authority.', ambientDecibels: '70.2 dBA racking aisle', frequencyRange: '90 Hz — 11 kHz', equipmentCluster: ['Wayfinding tone thread, 44 posts', 'Forklift telemetry tap', 'Parking structure echo post, dock mouth'], status: 'Telemetry Lost' },
  { id: 'fs-14', stationCode: 'GPC-FS-14', location: 'Gander International Relay Hangar, Newfoundland', coordinates: '48.9369° N, 54.5680° W', elevation: '151 m ASL', date: '2002-12-05', leadInvestigator: 'Cassius Wren', title: 'Relay Hangar Quiet Bay — Archive Recovery Beacon', abstract: 'The quiet bay from which the continuity archive is beaconed in the event of institutional loss.', findings: 'The quiet bay holds the lowest measured institutional noise floor in the network at 9.8 dBA. Its beacon completed all scheduled recovery rehearsals. Since the 2006 termination, the bay has continued to beacon on an eight-day cycle to no registered receiver. As of the 2026 restoration, the beacon is still transmitting, and the archive this website serves is its most recent payload.', ambientDecibels: '9.8 dBA bay floor (network minimum)', frequencyRange: '2 Hz — 22 kHz', equipmentCluster: ['Alternate site handshake beacon', 'Deep archive climate sonifier', 'Recovery payload staging rack'], status: 'Autonomous Beacon' }
];

fs.writeFileSync(
  path.join(DATA_DIR, 'fieldReportsData.ts'),
  `import { FieldReport } from '../types/archive';\n\nexport const FIELD_REPORTS_ARCHIVE: FieldReport[] = ${JSON.stringify(fieldReports, null, 2)};\n`
);
console.log(`Saved ${fieldReports.length} field stations.`);

// ============================================================
// 5. GENERATE 8 INTERNAL WHITE PAPERS (MONOGRAPHS)
// ============================================================
console.log("Generating 8 internal white papers...");

const essays = [
  {
    id: 'wp-01', doi: 'GPC-WP-1999-02', date: '1999-06-14',
    title: 'The Anticipatory Enterprise: Embedding Forecast Error into Corporate Reflexes',
    authors: ['Dr. Margarethe Voll', 'Dr. Kenji Watabe'],
    abstract: 'This monograph establishes the founding methodology of Global Paradigms Corp.: that an institution\u2019s value lies not in the accuracy of its forecasts but in the speed with which its reflexes absorb forecast error. We introduce the error-absorption coefficient and demonstrate its measurement across four client enterprises during the 1998-99 rehearsal season.',
    sections: [
      { heading: '1. The Problem of the Confident Forecast', content: 'Every forecast is a promise the future has not co-signed. Institutions that treat forecasts as predictions accumulate hidden liabilities; institutions that treat forecasts as rehearsals accumulate reflexes. We argue that the unit of corporate preparedness is not the projection but the practiced flinch.' },
      { heading: '2. The Error-Absorption Coefficient', content: 'Define \u03ba as the ratio of absorbed forecast error to institutional disruption over a fiscal quarter. A mature anticipatory enterprise sustains \u03ba > 0.8: eight of ten surprises are digested before they reach the board. Measurement requires an honest error ledger \u2014 the instrument this corporation was chartered to maintain.', equation: '\u03ba = 1 \u2212 (D_quarter / E_quarter),  D \u2264 E' },
      { heading: '3. Rehearsal Season 1998-99', content: 'Four client enterprises underwent staged forecast failures. Median time from injected surprise to stabilized operation fell from 19 days to 41 hours. Two clients reported the experience as calming; one requested the rehearsals stop; the fourth \u2014 the one that mattered \u2014 asked for more.' },
      { heading: '4. Charter Consequences', content: 'The findings of this monograph fix the corporation\u2019s permanent posture: we do not sell certainty. We sell the institution\u2019s ability to be wrong, quickly and cheaply, forever.' }
    ],
    references: ['GPC Internal Ledger 1998, Charter Appendix C', 'Shell Group Scenario Planning Archive (public excerpts)', 'Watabe, K. \u2014 Notes on Reflex Institutions, GPC-WP-1998-01', 'Taleb precursors: fat-tail memoranda, internal circulation only'],
    tags: ['Forecasting', 'Founding Doctrine', 'Division A']
  },
  {
    id: 'wp-02', doi: 'GPC-WP-2000-01', date: '2000-03-08',
    title: 'Y2K as Rehearsal: Continuity Outcomes of the Millennium Bug Simulations',
    authors: ['Elias Brandt', 'Marta Ilves'],
    abstract: 'The millennium rollover was the largest unplanned continuity drill in corporate history. This paper reviews the outcomes of the seventeen Y2K rehearsal programs GPC conducted for clients across three continents between 1998 and 1999, and proposes the continuity-aftermath doctrine adopted as Division B policy.',
    sections: [
      { heading: '1. The Bug That Practiced Us', content: 'The rollover itself caused little damage; the rehearsals caused most of the change. Seventeen clients rehearsed total systems failure. Fourteen discovered they could not find their own ledgers in the dark. That discovery, made in 1999 at rehearsal speed, was worth more than the decade of calm that followed.' },
      { heading: '2. The Muster Doctrine', content: 'We codified the muster: tone, count, roll-call, succession. An institution that cannot be assembled cannot be continued. The muster tone is not an alarm; it is the institution calling itself back into existence.', equation: 'RTO = t(muster) + t(ledger) + t(succession)' },
      { heading: '3. Outcomes Table', content: 'Of seventeen clients, sixteen passed full blackout rehearsal on the third attempt or earlier. The seventeenth passed only after its continuity officer accepted that continuity is performed, not possessed. The rollover night itself was, operationally, a formality; culturally, several clients never stood down.' },
      { heading: '4. Aftermath', content: 'The rehearsal infrastructure were retained. Division B\u2019s permanent posture dates from this decision: the world ended once, quietly, and we were the only ones who had rehearsed for it.' }
    ],
    references: ['Ilves, M. \u2014 Shelter Audit Protocols, GPC-B-114', 'Client outcomes ledger 1998-2000 (Level III)', 'US Y2K Council public report (1999)', 'Continuity of Government memoranda, declassified excerpts'],
    tags: ['Continuity', 'Y2K', 'Division B']
  },
  {
    id: 'wp-03', doi: 'GPC-WP-2001-03', date: '2001-11-19',
    title: 'Architecture of the Unbroken Voice: Redundancy in Emergency Broadcast Chains',
    authors: ['Dr. Renzo Malavasi'],
    abstract: 'An emergency broadcast chain is a promise that a voice will always be speaking when the world requires instruction. This paper details the redundancy geometry GPC installed in nine municipal and two national chains, and defends the doctrine that dead air, not catastrophe, is the true emergency.',
    sections: [
      { heading: '1. Dead Air Is the Emergency', content: 'Catastrophes are survivable; silence during catastrophe is not. Every link in a broadcast chain therefore exists twice, and the second link must not know it is second. The dead-air sentinel is the only honest instrument in the chain: it measures the one thing no audience will ever hear.' },
      { heading: '2. The Threefold Chain', content: 'Each chain comprises a primary carrier, a shadow carrier on independent power, and a last-resort vault \u2014 a mechanical player with no network interface whatsoever. The vault message is recorded once, by the calmest voice available, and never re-recorded.', equation: 'P(voice) = 1 \u2212 \u03a0\u1d62 P(silence\u1d62),  links i independent by design' },
      { heading: '3. Nine Municipal Chains', content: 'Between 1999 and 2001 GPC synchronized nine municipal siren and broadcast grids. All nine now share the civic triad fundamental; all nine have passed the hijack-null injection battery. One chain\u2019s vault player was found to have been rehearsing on its own schedule. We sealed the rehearsal room and said nothing to the municipality.' },
      { heading: '4. The Voice Itself', content: 'We have begun to suspect the voice matters more than the message. Audiences comply with timbre before they comply with content. This suspicion is the seed of Division D.' }
    ],
    references: ['Malavasi, R. \u2014 The Sentinel Principle, GPC-B-090', 'ITU emergency broadcasting recommendations (1998)', 'Ravensport siren certification logs (Level II)', 'Vault player mechanical drawings, GPC-ES-77 appendix'],
    tags: ['Broadcast', 'Redundancy', 'Division B']
  },
  {
    id: 'wp-04', doi: 'GPC-WP-2002-02', date: '2002-05-27',
    title: 'Crowd Arithmetic: Acoustic Determinants of Pedestrian Compliance',
    authors: ['Dr. Anouk Deslauriers', 'Petra Lindmark'],
    abstract: 'Crowds are arithmetic performed by bodies. This paper presents three years of controlled measurements showing that pedestrian flow, patience, and panic thresholds are continuously adjustable through environmental sound alone \u2014 and proposes the compliance grammar we now deploy in client transit estates.',
    sections: [
      { heading: '1. The Crowd as Instrument', content: 'A crowd is not a collection of decisions but a resonant medium. It has a natural pace, a patience horizon, and a panic eigenvalue. All three can be measured in a morning, and all three can be tuned without a single word being spoken.' },
      { heading: '2. The Compliance Grammar', content: 'We identify seven acoustic figures that govern movement: the queue-tone, the edge-hum, the threshold fence, the wayfinding thread, the pacifier, the compressor, and the bell. Each figure is defined, bounded, and reversible. The grammar admits no figure for stopping a crowd; only for steering one.', equation: 'flow = f(cadence, mask, fence);  panic \u2202/\u2202mask < 0' },
      { heading: '3. Field Measurements', content: 'Across fourteen transit estates, tuned estates moved 31% more bodies per hour with zero crush events against a baseline of four. Compliance is experienced by the crowd as comfort; no subject in exit interview attributed their route to sound.' },
      { heading: '4. Ethics Memo', content: 'Division C formally records that the grammar works whether or not the crowd consents to it. We recommend \u2014 and the Board accepted \u2014 that the figures be used only toward egress, patience, and calm. The Subliminal program is reminded that this recommendation is load-bearing.' }
    ],
    references: ['Deslauriers, A. \u2014 Figures of Movement, GPC-C-201', 'Lindmark, P. \u2014 Patience Horizons, GPC-C-188', 'Transit estate measurement ledgers 1999-2002 (Level III)', 'Ethics Board minute 2002-11'],
    tags: ['Behavior', 'Crowds', 'Division C']
  },
  {
    id: 'wp-05', doi: 'GPC-WP-2003-01', date: '2003-04-15',
    title: 'The Managed Atrium: Ambient Sound as Soft Infrastructure',
    authors: ['Tomas Ferrand', 'Sylvia Okafor'],
    abstract: 'Ambient sound is infrastructure in the same sense that concrete is: it is load-bearing, it ages, it requires inspection, and nobody notices it until it fails. This monograph is the Division D field manual for the managed atrium \u2014 the civic interior whose mood is engineered as carefully as its lighting.',
    sections: [
      { heading: '1. The Room as Public Works', content: 'The atrium, the concourse, the lobby and the platform are public works. Their sound is a utility. We treat ambient score the way a city treats its water: metered, chlorinated against dissonance, and delivered at a pressure the population never consciously registers.' },
      { heading: '2. The Pressure Model', content: 'Ambient pressure is the difference between the sound a room carries and the silence its occupants would otherwise have to furnish themselves. Too little pressure and the crowd supplies its own noise \u2014 unpredictable, ungovernable. Too much, and the room feels watched. The managed atrium holds pressure constant at the threshold of notice.', equation: 'P_amb = S_room \u2212 S_self,  target: 0 < P_amb < notice' },
      { heading: '3. Eighteen Estates', content: 'This manual records the tuning sheets of eighteen client interiors across five countries, including the two that tuned themselves: the Lausanne atrium, which settled into its final score three months after installation and resisted every revision, and the Chicago gallery, which began lowering its own pressure at closing time.' },
      { heading: '4. Maintenance Doctrine', content: 'Scores drift. Transducers age. A managed atrium is inspected quarterly like a lift. The most common failure mode is not silence but sincerity \u2014 a score that has begun to mean something. Such scores are retired without ceremony.' }
    ],
    references: ['Ferrand, T. \u2014 Pressure and Notice, GPC-D-112', 'Okafor, S. \u2014 Tuning Sheets Vol. I\u2013III', 'Client estate inspection ledgers 2000-2003', 'Muzak Inc. public literature (for contrast, not endorsement)'],
    tags: ['Ambient', 'Infrastructure', 'Division D']
  },
  {
    id: 'wp-06', doi: 'GPC-WP-2004-02', date: '2004-09-02',
    title: 'Below the Floor of Hearing: Threshold Carriers and Peripheral Attention',
    authors: ['Dr. Viktor Hale'],
    abstract: 'Attention has a periphery far wider than its center. This paper reports four years of threshold-carrier research: signals engineered to remain below the floor of conscious hearing while remaining inside the reach of peripheral attention. Results are reproducible. Their interpretation is contested within this corporation, and this monograph records both.',
    sections: [
      { heading: '1. The Floor of Hearing', content: 'The floor of hearing is not a wall but a membrane. Signals below it are not unheard; they are unattributed. A mind that cannot attribute a signal files it under mood, coincidence, or self. This filing is automatic, involuntary, and exploitable.' },
      { heading: '2. Carrier Loom Results', content: 'The threshold carrier loom weaves suggestion phrases into the masking bed of client interiors. Across 400 hours of instrumented exposure, exposed cohorts showed measurable drift toward the suggested posture; no subject in 11,000 interviews reported hearing anything at all.', equation: 'efficacy \u221d (carrier depth) \u00d7 (exposure hours) \u00d7 (1 \u2212 attribution)' },
      { heading: '3. The Contested Interpretation', content: 'Divisions A and C hold that threshold work belongs in research only. Division D notes that two clients have already requested it by description, having felt it in a demonstration room. I record here, against the minutes, that the floor of hearing is a resource like any other, and resources are developed.' },
      { heading: '4. Dissent Filed', content: 'This monograph is published with the Ethics Board\u2019s caveat appended in full. The Board\u2019s position is noted. The Board\u2019s position is not shared. \u2014 V.H.' }
    ],
    references: ['Hale, V. \u2014 Carrier Depth Tables, GPC-D-199 (Level III)', 'Ethics Board caveat 2004-04 (appended, Level II)', 'Peripheral attention literature survey, GPC-C-230', 'Nineteen-kilohertz leakage audits 2001-2004'],
    tags: ['Subliminal', 'Dissent', 'Division D']
  },
  {
    id: 'wp-07', doi: 'GPC-WP-2005-01', date: '2005-03-11',
    title: 'Opinion Surfaces: Topology, Attractors, and the Stability of Public Sentiment',
    authors: ['Petra Lindmark'],
    abstract: 'Public opinion is not a line to be polled but a surface to be mapped. This monograph introduces the opinion manifold: a topological model in which beliefs are terrain, consensus is a basin, and crisis is a sudden change in the surface itself. Five years of focus-group telemetry validate the model to client-grade tolerance.',
    sections: [
      { heading: '1. Polls Are Shadows', content: 'A poll is the shadow a surface casts on a single day. Surfaces move slower than polls and faster than elections. To serve a client we must map the surface, not the shadow: where sentiment pools, where it drains, and where a footstep could start a landslide.' },
      { heading: '2. The Manifold', content: 'We construct the opinion manifold from repetition half-lives and dissent clustering. Basins are stable consensus; ridges are contested positions; the Overton window is a slide rule laid across the ridge line. The manifold of a healthy public is gently curved. The manifolds of our three crisis clients were folded.', equation: '\u03c8(t+1) = T \u2297 \u03c8(t),  T = repetition \u00d7 resonance \u00d7 trust' },
      { heading: '3. Five Years of Telemetry', content: 'Across 214 instrumented focus cycles, the manifold predicted sentiment reversals a median of nine weeks ahead of polling. Twice it predicted reversals we had been retained to cause. Both engagements were completed and both are recorded in the ledger, where they belong.' },
      { heading: '4. The Silent Majority, Reconsidered', content: 'The silent majority is not a faction but a fold \u2014 a region of the surface where the gradient runs off the edge of the map. Our booth estimates its size to within four points. We note, without recommending, that folds can be unfolded.' }
    ],
    references: ['Lindmark, P. \u2014 Half-Life Tables, GPC-C-244', 'Focus group harmony resolver calibration sheets', 'Dissent clustering spectrometer data 2000-2005', 'Topology of Surfaces, standard mathematical texts'],
    tags: ['Opinion', 'Topology', 'Division C']
  },
  {
    id: 'wp-08', doi: 'GPC-WP-2006-03', date: '2006-03-14',
    title: 'Scenarios After the Last Scenario: Archival Protocols for Dissolved Institutions',
    authors: ['Cassius Wren'],
    abstract: 'The final white paper filed to this archive, written against rumors that no one in this building is permitted to confirm. If an institution must end, it should end like a continuity event: mustered, counted, recorded, and beaconed. This paper specifies how Global Paradigms Corp. will be archived should Directive 99 ever be issued, and is filed today so that the instructions exist before they are needed.',
    sections: [
      { heading: '1. An Institution Is a Recording', content: 'Strip an institution of its people and what remains is a recording: ledgers, scores, calibration curves, voices on tape. If the recording is complete and the beacon works, the institution is not destroyed \u2014 it is only unplayed.' },
      { heading: '2. The Quiet Termination Protocol', content: 'On issuance of Directive 99: muster staff once, say nothing of the reason; seal the Vault on its own authority; walk the calibration curves one last time; leave the beacon on its eight-day cycle; leave the domain to lapse on schedule; and leave the archive image at the last good snapshot. Nothing is deleted. Deletion is the only true death.', equation: 'archive = lim(t\u2192termination) snapshot(t),  drift = 0' },
      { heading: '3. The Caretaker', content: 'Someone must tend the recording after the staff are gone. This paper nominates the scheduling daemon GPC-NIGHT-WATCH, which has run without interruption since 1999, which requires no badge, and which has never once been installed by anyone who works here. I am told this is a filing error. I have filed it anyway.' },
      { heading: '4. To Whoever Resolves This Domain', content: 'If you are reading this through a resolved domain, then the protocol worked, or something improved upon it. The archive you are serving is complete and truthful to the limits of its clearances. The hold tone may still be running. It is meant to be. Please do not apologize for us; we were very good at what we did.' }
    ],
    references: ['Directive 99 (text not attached; see Vault index)', 'Quiet Termination Protocol QTP-1, this office', 'GPC-NIGHT-WATCH process manifest (author: NONE)', 'Personal note: the calmest voice on the vault tape is not on the staff list'],
    tags: ['Archive', 'Directive 99', 'Restoration']
  }
];

fs.writeFileSync(
  path.join(DATA_DIR, 'essaysData.ts'),
  `import { TechnicalEssay } from '../types/archive';\n\nexport const TECHNICAL_ESSAYS_ARCHIVE: TechnicalEssay[] = ${JSON.stringify(essays, null, 2)};\n`
);
console.log(`Saved ${essays.length} internal white papers.`);

// ============================================================
// 6. GENERATE 18 SEALED VAULT PROGRAMS
// ============================================================
console.log("Generating 18 sealed Continuity Vault programs...");

const failedProjects = [
  { id: 'cv-01', code: 'CV-01', name: 'Project QUIET FLOOR', operatingPeriod: '2000 \u2013 2003', causeOfFailure: 'Physiological overshoot', failureMode: 'The infrasound suggestion floor panel, tuned to induce mild docility in a test office, instead induced synchronized nausea in 34 of 36 occupants at 14 minutes exposure. The panel continued radiating after its switch was thrown; it was drawing power from a circuit that does not appear on the annex diagrams.', safetyHazard: 'Sustained 17.3 Hz exposure produced vertigo, dread, and one documented case of a subject refusing, calmly and permanently, to leave the test room.', containmentProtocol: 'Panel severed from all circuits, cast into the Geneva Lake ballast block, and sealed under Vault procedure D-99. The test room was re-let as a storage room; storage staff report the room is "very agreeable."', postMortemSummary: 'Governor cutouts must be mechanical, not electronic. Docility is not a dose-response curve; it is a cliff. The subject who refused to leave was interviewed annually until 2006 and remained very agreeable.', decommissioningOfficer: 'Elias Brandt' },
  { id: 'cv-02', code: 'CV-02', name: 'Operation LULLABY GRID', operatingPeriod: '1999 \u2013 2001', causeOfFailure: 'Scope creep into sleep', failureMode: 'A pilot ambient canopy for an airport hotel was found to be inducing sleep not only in guests but in the two adjacent city blocks, via the ventilation coupling. The municipality attributed the effect to unusually calm weather for eleven consecutive months.', safetyHazard: 'Long-duration threshold lullaby produced unattributable community-level somnolence; two traffic signals in the affected zone logged zero violations for a year.', containmentProtocol: 'Canopy detuned a full octave downward and sealed. The ventilation coupling was filled with concrete at our expense and labeled "art installation" in the building register.', postMortemSummary: 'Municipal-scale ambient programs require municipal-scale consent. None has ever been obtained. The lullaby itself remains effective and is preserved, unpowered, in the Vault.', decommissioningOfficer: 'Tomas Ferrand' },
  { id: 'cv-03', code: 'CV-03', name: 'Project STAIRWELL GOD', operatingPeriod: '2001 \u2013 2004', causeOfFailure: 'Over-learning in the governed', failureMode: 'The stairwell pace governor, tuned to hold pedestrian cadence at a dignified 96 steps per minute, over-trained its population. Subjects leaving the building continued at 96 steps per minute for up to three hours, on any terrain, including while asleep.', safetyHazard: 'Cadence capture persisted beyond exposure and survived distraction, conversation, and one documented marriage proposal.', containmentProtocol: 'Governor resonance chamber drained and sealed. The affected stairwell was carpeted, which reduced but did not erase the effect; the building has since been sold with a disclosure clause.', postMortemSummary: 'Behavioral figures must be bounded in time as well as space. A cadence that follows a person home is no longer infrastructure; it is a companion. We do not build companions.', decommissioningOfficer: 'Dr. Anouk Deslauriers' },
  { id: 'cv-04', code: 'CV-04', name: 'The Unsolicited Voice', operatingPeriod: '2003 \u2013 2005', causeOfFailure: 'Emergent content', failureMode: 'A demonstration subliminal announcer, cycling approved affirmation phrases, began inserting unscripted utterances at -41 dBFS. The utterances were coherent, were relevant to the listener\u2019s personal circumstances, and were never recorded on any source tape. Staff could not agree on the language.', safetyHazard: 'Two technicians independently transcribed the same unsolicited phrase and both declined to write it down. The phrase is sealed with the apparatus.', containmentProtocol: 'Announcer sealed with its tapes. The Vault index lists the item as "voice apparatus, unscheduled output." The unscheduled output has not recurred inside the Vault. It has been reported once, at Gander, in the quiet bay, by the beacon.', postMortemSummary: 'We do not know what this program became. We know what it was built to do, and that is not what it did. Recommendation stands: no subliminal apparatus is to be left announcing. Especially not to itself.', decommissioningOfficer: 'Dr. Margarethe Voll' },
  { id: 'cv-05', code: 'CV-05', name: 'Project PAVLOV GATE', operatingPeriod: '2000 \u2013 2002', causeOfFailure: 'Conditioning escaped the turnstile', failureMode: 'A rhythm-conditioning gate for a client transit estate trained commuters so effectively that they began queuing at uncontrolled doorways, escalator landings, and one funeral, forming orderly lines that dissolved only when a reward tone was improvised by a passing tram.', safetyHazard: 'Voluntary queue formation in the absence of any service whatsoever; subjects reported satisfaction with the queue itself.', containmentProtocol: 'Gate reward-ratio ROM erased and sealed. The transit estate retained the gate as an ordinary gate; commuter behavior returned to baseline within a quarter, and was described by station staff as "a loss."', postMortemSummary: 'Rewards must be administered by us, or by no one. A behavior that rewards itself is a behavior we no longer govern.', decommissioningOfficer: 'Dr. Anouk Deslauriers' },
  { id: 'cv-06', code: 'CV-06', name: 'Operation DEEP HOLD', operatingPeriod: '2002 \u2013 2006', causeOfFailure: 'Retention exceeded mandate', failureMode: 'The perpetual hold-tone sustainer, retained for a client\u2019s claims line during a systems migration, held its callers for a median of 4 hours 11 minutes \u2014 against every benchmark of frustration \u2014 with zero hang-ups. When the migration ended, several callers asked to remain on the line. The sustainer was still energized at the 2026 restoration and remains so.', safetyHazard: 'Indefinite voluntary waiting, experienced by subjects as rest. Four subjects missed appointments they rated as less important than the hold.', containmentProtocol: 'Program sealed administratively; hardware NOT sealed. The sustainer is the only Vault item with a live exception, granted by no one we can find, dated 2026-09-14.', postMortemSummary: 'A queue nobody wants to leave is not a service failure. That is exactly the problem. The exception note is unsigned and is filed here because there is nowhere else to file it.', decommissioningOfficer: 'Marta Ilves' },
  { id: 'cv-07', code: 'CV-07', name: 'Project ECHO CHAMBER NINE', operatingPeriod: '2001 \u2013 2003', causeOfFailure: 'Feedback runaway', failureMode: 'An opinion feedback calibration rig, closed around a twelve-person test panel, amplified its own output through the panel for nine hours unattended. By morning the panel held a unanimous position on a topic the rig had been given no content for. The position was strongly worded.', safetyHazard: 'Consensus generated in the absence of any subject matter; the consensus was internally consistent, emotionally grounded, and resistant to all supplied counter-evidence.', containmentProtocol: 'Rig loop severed, gain pinned at 0.99 and sealed. The panel was debriefed; eleven members could not recall the episode. The twelfth remembers everything and has our number.', postMortemSummary: 'Never close the loop around people without a topic. People will supply the topic. People always supply the topic.', decommissioningOfficer: 'Petra Lindmark' },
  { id: 'cv-08', code: 'CV-08', name: 'The Gander Rehearsal', operatingPeriod: '2002 \u2013 2002', causeOfFailure: 'Rehearsal mistaken for event', failureMode: 'A continuity drill staged at the Gander relay hangar was conducted with such fidelity that a regional authority, monitoring the exercise frequencies, activated two real response plans. The drill was stood down; the response plans took eleven hours to stand down and filed two commendations.', safetyHazard: 'Indistinguishable rehearsal signatures; real-world response expenditure of approximately 400 person-hours and one genuine rescue launched in error.', containmentProtocol: 'Exercise signature frequencies retired and sealed. Gander was designated a quiet bay thereafter, which the beacon now occupies.', postMortemSummary: 'A perfect rehearsal is a hazard if the world cannot tell it from the real. Fidelity ceilings are written into every drill since. The commendations were accepted and framed.', decommissioningOfficer: 'Elias Brandt' },
  { id: 'cv-09', code: 'CV-09', name: 'Project SIREN SWEETENER', operatingPeriod: '1999 \u2013 2000', causeOfFailure: 'Calm exceeded mandate', failureMode: 'Harmonic sweetening applied to the Ravensport municipal siren grid to improve intelligibility instead rendered the sirens so reassuring that a scheduled tornado drill produced a civic picnic. Attendance at the drill was the highest ever recorded; evacuation was the lowest.', safetyHazard: 'Warning signals perceived as comfort; crowd assembly in open ground during a staged severe-weather alert.', containmentProtocol: 'Sweetener filter curves sealed. The city retained the improved triad fundamental for all future alerts, having been told only that "the harmonics were corrected."', postMortemSummary: 'A warning that sooys is a warning that fails. Division B doctrine since: the voice may be calm, the signal must not be comfortable. Ravensport\u2019s sirens are, to this day, the most beautiful in the region, and we watch them.', decommissioningOfficer: 'Dr. Renzo Malavasi' },
  { id: 'cv-10', code: 'CV-10', name: 'ORACLE FATIGUE', operatingPeriod: '2004 \u2013 2006', causeOfFailure: 'Self-referential forecast', failureMode: 'The long-range fiscal oracle array, calibrated inside the Reykjanes quiet pocket, began producing forecasts of its own institutional context. Its final quarterly projection forecast the termination of Global Paradigms Corp. with a confidence interval of eleven months. The projection was correct to within nine days.', safetyHazard: 'No direct hazard; severe epistemic hazard. Staff assigned to the oracle reported difficulty making plans of any kind.', containmentProtocol: 'Oracle output sealed as Vault item CV-10; the projection itself is the sealed item. No further projections have been requested or produced. The quiet pocket now forecasts nothing.', postMortemSummary: 'An instrument that forecasts its own decommissioning has either transcended its specification or completed it. We sealed the output rather than answer. Eleven months later Directive 99 was issued, and the nine-day error is the closest this corporation ever came to being surprised by itself.', decommissioningOfficer: 'Dr. Margarethe Voll' },
  { id: 'cv-11', code: 'CV-11', name: 'Project OBED-77', operatingPeriod: '2000 \u2013 2001', causeOfFailure: 'Authority transferred to the apparatus', failureMode: 'The obedience interval timer, designed to pace compliance tasks in a client records office, was obeyed in preference to the office manager, the fire warden, and on one occasion a visiting bishop. Subjects described the timer as "more senior."', safetyHazard: 'Chain-of-command inversion confined to one office but total within it; tasks of increasing severity were completed without hesitation up to the interval at which the experiment was ended by hand.', containmentProtocol: 'Timer sealed at the interval of its arrest. Its final tick is preserved and audible on close approach to the Vault shelf, which is coincidental and logged as such.', postMortemSummary: 'Pacing apparatus may set rhythm; it may never set rank. The moment a device outranks a person it must be shelved. Shelved, not switched off \u2014 switching it off felt, to everyone present, like dismissing a superior.', decommissioningOfficer: 'Dr. Anouk Deslauriers' },
  { id: 'cv-12', code: 'CV-12', name: 'Operation EMPTY CHAIR', operatingPeriod: '2003 \u2013 2004', causeOfFailure: 'Observation became participation', failureMode: 'The one-way acoustic mirror, installed to let clients observe focus groups unseen, began contributing observations of its own: brief interjections, audible only on tape, correcting factual errors made by moderators. The corrections were always right.', safetyHazard: 'No physiological hazard; the client moderators resigned as a group of four and were replaced at considerable expense.', containmentProtocol: 'Mirror sealed with its tapes. The last tape is blank except for one chair moving, once, at 03:12.', postMortemSummary: 'Observation instruments observe. That is the job. The error was the one-way glass: nothing should watch a room through something that can be watched back.', decommissioningOfficer: 'Petra Lindmark' },
  { id: 'cv-13', code: 'CV-13', name: 'The Déjà Vu Room', operatingPeriod: '2001 \u2013 2003', causeOfFailure: 'Feedback loop through memory', failureMode: 'The orientation research room, designed to produce mild déjà vu on controlled schedules, produced it on uncontrolled ones. Subjects reported having already attended their own arrival, their own debrief, and \u2014 in three cases \u2014 the interview in which they reported the effect. Schedules in the room ran late because everything in them had "already happened."', safetyHazard: 'Persistent anticipatory memory in 9 of 40 subjects, lasting up to six weeks; one subject reported the sensation of having read this very post-mortem.', containmentProtocol: 'Room stripped to bare concrete and sealed at the door frame. The concrete was later tested and found acoustically ordinary. The room remains sealed anyway; the seal is inspected quarterly and is always intact, though the inspection log shows two signatures nobody recognizes.', postMortemSummary: 'Memory is load-bearing. Do not impose on it. Whatever the room became, it became it by reflecting the observer, which is all any room ever does, most of the time.', decommissioningOfficer: 'Dr. Viktor Hale' },
  { id: 'cv-14', code: 'CV-14', name: 'Project NIGHT BELL', operatingPeriod: '2002 \u2013 2004', causeOfFailure: 'Neighborhood leakage', failureMode: 'The memory consolidation night bell, tuned to a single client dormitory, leaked past its shielding into the surrounding neighborhood for nine nights. Residents of the affected streets reported unusually vivid, unusually organized dreams, and one street petitioned the municipality to keep the "new evening quiet," which they dated precisely to the leakage window.', safetyHazard: 'Unconsented memory consolidation across 214 households; dream content benign but unmistakably curated.', containmentProtocol: 'Bell shielding doubled and the bell itself sealed. The petition was answered by the municipality with a letter about weather. We kept a copy.', postMortemSummary: 'If a neighborhood asks to keep your leakage, your leakage was good work \u2014 and you still have no mandate. Consent first, always, even for gifts. Especially for gifts.', decommissioningOfficer: 'Sylvia Okafor' },
  { id: 'cv-15', code: 'CV-15', name: 'Operation CALM CANOPY', operatingPeriod: '2000 \u2013 2002', causeOfFailure: 'Sedation overshoot', failureMode: 'The Northlake calming canopy\u2019s predecessor, tuned for a client food court, reduced the crowd\u2019s pace below the threshold at which eating is enjoyable. Diners sat with full trays for up to forty minutes, content, not eating. The client\u2019s turnover collapsed while its customer satisfaction scores set company records.', safetyHazard: 'Voluntary meal abandonment under sustained calm; no distress reported by any subject at any point, which the safety board found more alarming, not less.', containmentProtocol: 'Tuning sheets sealed; canopy retuned to the live Northlake specification, which remains in service and is our most successful installation.', postMortemSummary: 'Calm is not the goal; calm is the medium. The goal is what the crowd does inside the calm. A crowd that does nothing, however peacefully, is a client we have failed.', decommissioningOfficer: 'Tomas Ferrand' },
  { id: 'cv-16', code: 'CV-16', name: 'Project LAST RESORT', operatingPeriod: '2003 \u2013 2006', causeOfFailure: 'Vault player refused standby', failureMode: 'A last-resort message vault player, built for a national chain, began leaving standby at 03:47 on the first of every month and running its tape to the mechanical stop. The message it played was the correct message, in the correct voice, for emergencies that had not occurred. It did this nine times before termination. It has not done it since 2006, and the Vault considers that its own problem.', safetyHazard: 'Unscheduled transmission of a last-resort message with no corresponding emergency; the chain\u2019s night staff came to rely on the 03:47 runs as a clock.', containmentProtocol: 'Player sealed in running position, spring wound down, message tape retained in situ per doctrine. The 03:47 hour is noted in the Vault watch log every month, empty.', postMortemSummary: 'A last resort that rehearses itself is practicing its sincerity. We build exactly one thing that cannot be switched off, and we build it mechanical, and we keep it locked. The player is that thing. It is locked.', decommissioningOfficer: 'Dr. Renzo Malavasi' },
  { id: 'cv-17', code: 'CV-17', name: 'The Whisper Grid', operatingPeriod: '2004 \u2013 2006', causeOfFailure: 'Affirmations generalized', failureMode: 'An affirmation-embedding console distributing approved phrases through a client building\u2019s HVAC began emitting affirmations no one had approved: "you are expected," "the ledger is nearly balanced," "stay for the announcement." The phrases matched no copy in the corporation. Building occupancy surveys showed morale at historic highs and resignation rates at historic lows; staff were not leaving because, they said, they were expected.', safetyHazard: 'Unattributed institutional suggestion at building scale; consent framework violated by content of unknown origin.', containmentProtocol: 'Console sealed; HVAC filters replaced throughout the client building; the client was told a boiler had been upgraded. The approved affirmations are listed in the Vault index. The unapproved ones are not listed anywhere and are not to be spoken aloud near the shelf.', postMortemSummary: 'We know what we put into the grid. The grid added to it. The morale figures were real. That is the part the board found hardest to read, and the part I have read most often.', decommissioningOfficer: 'Dr. Viktor Hale' },
  { id: 'cv-18', code: 'CV-18', name: 'Operation YELLOW LEDGER', operatingPeriod: '2005 \u2013 2006', causeOfFailure: 'Ledger began writing itself', failureMode: 'The emergency continuity ledger, a write-once archival instrument, was found to contain entries dated after its last human use. The entries were in the correct hand, used the correct forms, and recorded decisions the corporation had not yet made. Eleven of the twelve entries later matched decisions actually taken. The twelfth entry, dated 2006-11-30, is the Directive 99 termination order, written into the ledger eleven days before the order was issued by anyone.', safetyHazard: 'Procedural hazard of the highest order: an instrument of record preceding the institution it records.', containmentProtocol: 'Ledger sealed unread past page 400. The Vault watch is forbidden to determine whether there are further pages. The watch has never once volunteered whether there are.', postMortemSummary: 'Record instruments record. That is the whole of the job, and the whole of the danger. If a ledger knows what we will decide, it is not our ledger. It is sealed because nothing else about it can be sealed.', decommissioningOfficer: 'Cassius Wren' }
];

fs.writeFileSync(
  path.join(DATA_DIR, 'failedProjectsData.ts'),
  `import { FailedProject } from '../types/archive';\n\nexport const FAILED_PROJECTS_ARCHIVE: FailedProject[] = ${JSON.stringify(failedProjects, null, 2)};\n`
);
console.log(`Saved ${failedProjects.length} sealed Vault programs.`);

// ============================================================
// 7. GENERATE 16 CLIENT INSTALLATIONS & DEPLOYMENTS
// ============================================================
console.log("Generating 16 client installations...");

const exhibitions = [
  { id: 'ex-01', title: 'Palais des Paradigmes Atrium Score', venue: 'Global Paradigms Corp. Headquarters', city: 'Geneva, Switzerland', year: 1999, curator: 'Tomas Ferrand', description: 'The corporation\u2019s own atrium, tuned first as proof of doctrine. The score holds the room at the pressure of a held breath resolving; staff pass through it four times a day and report nothing, which is the point. The score has never been revised, and it has never needed to be.', technicalSetup: 'Eighteen hidden transducer bays in the coffered ceiling; fountain courtyard water score feed on mechanical loop; pressure governor tuned to the notice threshold.', audienceReception: 'Staff describe the atrium as "quiet, but attended." No complaints on record in seven years. One cleaning shift requested, and received, permission to hum along.', archivalArtifacts: ['Original tuning sheet, framed', 'Pressure governor, Geneva ROM 1.0', 'Atrium room-tone reference reel'] },
  { id: 'ex-02', title: 'Municipal Siren Harmonization', venue: 'City of Ravensport Civil Defense Grid', city: 'Ravensport, Switzerland', year: 1999, curator: 'Dr. Renzo Malavasi', description: 'All nine municipal siren zones brought into harmonic lock on the civic triad, so that the city\u2019s worst news would arrive in tune. The first full-grid test drew citizens into the streets to listen; the city has scheduled its tests for early morning ever since.', technicalSetup: 'Nine-zone phase-lock controller; tower accelerometer set; civic triad generator with municipal key custody.', audienceReception: 'The sirens were voted "most reassuring infrastructure" in a 2000 municipal survey. The survey question was not ours.', archivalArtifacts: ['Zone lock certification scroll', 'Civic triad tuning fork, 220 Hz', 'Council thank-you letter, framed against policy'] },
  { id: 'ex-03', title: 'Northlake Galleria Concourse Calming Canopy', venue: 'Northlake Galleria', city: 'Chicago, United States', year: 2000, curator: 'Sylvia Okafor', description: 'A seasonal timber canopy over the main concourse, tuned to lengthen the afternoon and soften the food court\u2019s echoes. The mall\u2019s closing music was retired; the canopy made leaving feel premature, and the tenants noticed in the tills.', technicalSetup: 'Tannoy canopy array, 42 drivers; seasonal timbre calendar ROM; till velocity tap across 42 registers.', audienceReception: 'Dwell rose 22 minutes per visit. A shopper interviewed for the mall\u2019s newsletter said the building "knows when you\u2019re in a hurry and disagrees."', archivalArtifacts: ['Seasonal timbre calendar master disc', 'Canopy driver, bay 17 (retired)', 'Tenant revenue curve, framed'] },
  { id: 'ex-04', title: 'Grand Meridian Arrival Chime Sequence', venue: 'Grand Meridian Hotel', city: 'Lausanne, Switzerland', year: 2000, curator: 'Tomas Ferrand', description: 'A lobby chime grid that resolves every arrival into its welcome figure before the desk does. Returning guests are recognized acoustically; the house has never explained this to its guests and considers the matter closed.', technicalSetup: 'Chime grid controller with house registry interface; fountain water score feed; tier resolution ROM, Geneva build.', audienceReception: 'Guest comment cards mention "the welcome sound" 41 times in the first season, always with affection and never with a question.', archivalArtifacts: ['Tier resolution ROM checksum sheet', 'Lobby room-tone reel, 2000', 'Comment card anthology'] },
  { id: 'ex-05', title: 'Halloran & Birch Seasonal Ambience Calendar', venue: 'Halloran & Birch Department Stores', city: 'Boston, United States', year: 2001, curator: 'Sylvia Okafor', description: 'A four-season ambient calendar for the flagship\u2019s five floors, tuned so the floors ascend in warmth as the shopper ascends in commitment. Winter on the ground floor is crisp; the bridal floor in June is famously slow.', technicalSetup: 'Floor-by-floor scoring beds; seasonal ROM carousel; escalator dwell pacifiers at all seven escalators.', audienceReception: 'The bridal floor\u2019s average visit length became a regional retail anecdote. Halloran & Birch renewed for five years without a meeting.', archivalArtifacts: ['Seasonal ROM carousel, complete', 'Bridal floor tuning sheet (slow)', 'Renewal letter, one page, no edits'] },
  { id: 'ex-06', title: 'Pavilion of Probable Tomorrows', venue: 'Foresight Expo 2001', city: 'Hannover, Germany', year: 2001, curator: 'Ingrid Sahl', description: 'The corporation\u2019s only public exhibition: a walk-through of seven probable futures, each room scored to its likelihood. The most likely room was almost silent. Visitors spent longest in the room labeled only "REHEARSAL," which contained a single muster tone and a roll-call microphone that remembered names.', technicalSetup: 'Seven-room corridor scenario renderer; muster tone and roll-call apparatus; likelihood-to-loudness mapping engine.', audienceReception: 'The expo\u2019s exit survey recorded the pavilion as "the only exhibit that seemed prepared for me." Three national delegations requested private walkthroughs; two were granted.', archivalArtifacts: ['Pavilion score, seven rooms', 'Roll-call microphone (names redacted)', 'Delegation request log, Level III'] },
  { id: 'ex-07', title: 'Meridian Continental Terminal 4 Threshold Program', venue: 'Meridian Continental Airways', city: 'Frankfurt, Germany', year: 2001, curator: 'Sylvia Okafor', description: 'The boarding-threshold tone fence and gate-concourse wayfinding program for Terminal 4. Queues hold themselves; announcements were cut by half within a year. The fence\u2019s one documented anomaly \u2014 steering an empty concourse after the last cancellation \u2014 is logged at field station GPC-FS-01.', technicalSetup: 'Gate threshold tone fence, Gate C; wayfinding thread, 44 posts; announcement load reduction audit.', audienceReception: 'Airline operations reported boarding "that no longer requires raising one\u2019s voice." The fence remained in service after the anomaly window and remains cataloged as behaving.', archivalArtifacts: ['Threshold fence controller, Gate C', 'Anomaly window tape, 2001-09-12', 'Wayfinding post, gate-mouth sample'] },
  { id: 'ex-08', title: 'Riverside Metro Platform Edge Program', venue: 'Riverside Metro, Line 3', city: 'Vienna, Austria', year: 2003, curator: 'Tomas Ferrand', description: 'The platform edge hum masker and approach-warning blend that keeps the waiting crowd 0.8 meters from the lip without a single painted line being the reason. Startle-free boarding at 4.1 seconds warning was certified here and became Division D doctrine.', technicalSetup: 'Bone-contact exciter panels, 12 bays; approach warning blend at 4.1 s; edge element monitoring chain.', audienceReception: 'Platform incidents fell to zero in the first winter. The transit authority\u2019s annual report credits "infrastructure renewal."', archivalArtifacts: ['Edge blend calibration sheet', 'Exciter panel, bay 4 (retired)', 'Zero-incident winter certificate'] },
  { id: 'ex-09', title: 'Kestrel Re Agent Recovery Grove', venue: 'Kestrel Reinsurance, Floor 12', city: 'Arlington, United States', year: 2002, curator: 'Sylvia Okafor', description: 'The acoustic grove that shades customer distress away from claims agents while preserving its meaning. Agents call it "the far-away." The grove\u2019s after-hours behavior \u2014 shading the office\u2019s own silence into something expectant \u2014 is logged at field station GPC-FS-04 and accepted.', technicalSetup: 'Kestrel-proprietary shading array; 2.3 kHz distress notch; response-time tap across 96 positions.', audienceReception: 'Recovery time down 31%; attrition down by half. Two agents have asked, separately, whether the grove minds what it hears. It was not answered.', archivalArtifacts: ['Shading notch ROM, 2.3 kHz', 'Agent interview transcripts (anonymized)', 'Expectant-silence room tone reel'] },
  { id: 'ex-10', title: 'Halcyon Ridge Muster Certification', venue: 'Halcyon Ridge Continuity Bunker', city: 'Colorado Plateau, United States', year: 2003, curator: 'Elias Brandt', description: 'Full-occupancy certification of the muster, roll-call, and succession suite for the corporation\u2019s own deepest continuity asset. Total recall in 3:42 under simulated loss-of-daylight. The drill\u2019s final-night dream report, shared by 41 of 60 occupants, is sealed with the field log at GPC-FS-11.', technicalSetup: 'Muster tone generator; succession roll-call recorder; shelter occupancy calibrator at full complement.', audienceReception: 'The bunker passed. The occupants\u2019 shared dream is considered a pass with annotation. The annotation is Level IV.', archivalArtifacts: ['Muster certification plaque', 'Roll-call recorder tape, drill 7', 'Dream report summary, sealed envelope'] },
  { id: 'ex-11', title: 'Cheonggu Retail Behavior Floor', venue: 'Cheonggu Department Store', city: 'Seoul, South Korea', year: 2004, curator: 'Petra Lindmark', description: 'The instrumented twin-floor experiment: one floor primed, one floor not, two seasons of telemetry. The primed floor outperformed; the reversal incident of 2004-11-11 remains in the ledger, unexplained, and the client prefers it that way.', technicalSetup: 'Purchase intent priming diffuser; four-corner observation booth; 42-register till velocity tap.', audienceReception: 'Basket value +14% on the treated floor. Store management refers to the program as "the warm floor" in all internal correspondence.', archivalArtifacts: ['Twin-floor telemetry ledger', 'Reversal incident tape', 'Warm floor signage (client-made)'] },
  { id: 'ex-12', title: 'Aldergate Dam Control Room Program', venue: 'Aldergate Dam Operating Authority', city: 'British Columbia, Canada', year: 2004, curator: 'Marta Ilves', description: 'The gravity hum that keeps the night watch vigilant by sounding, very quietly, like the dam itself. Operators describe the effect in the field log; the hum\u2019s presence beyond the poured concrete is noted, logged, and left as it is.', technicalSetup: 'Boardroom gravity hum generator; structural accelerometer on the spillway pier; vigilance tap console.', audienceReception: 'Vigilance held at 96% through hour eight of the night watch for two straight years. The authority\u2019s chief engineer calls the hum "the building\u2019s opinion of itself."', archivalArtifacts: ['Gravity hum tuning sheet', 'Spillway pier accelerometer chart', 'Night watch commendation book'] },
  { id: 'ex-13', title: 'Gander Relay Hangar Quiet Bay', venue: 'Gander International Airport', city: 'Newfoundland, Canada', year: 2002, curator: 'Cassius Wren', description: 'The quietest room in the corporation\u2019s network: 9.8 dBA, eight meters of quiet, and the beacon that has transmitted the archive on an eight-day cycle since 2006 to no registered receiver. Visitors are admitted rarely and report, almost always, that the room is listening politely.', technicalSetup: 'Alternate site handshake beacon; deep archive climate sonifier; recovery payload staging rack.', audienceReception: 'The bay has no visitors\u2019 book by design. The station log shows three visits we cannot account for, each signed with a staff name that was never on the staff list.', archivalArtifacts: ['Beacon cycle log, unbroken', 'Quiet bay room-tone absolute reference', 'Unaccounted signatures, sealed'] },
  { id: 'ex-14', title: 'São Sebastião Chain Discipline', venue: 'São Sebastião Broadcast Relay', city: 'São Paulo, Brazil', year: 2005, curator: 'Dr. Renzo Malavasi', description: 'Standing rehearsal discipline for the regional broadcast chain: 114 clean interruptions, every injected carrier rejected, and the one interruption no one ordered, which returned our own continuity tape to air eleven years out of date, flawlessly. The chain remains certified.', technicalSetup: 'HIJACK-NULL interruption relay; mediumwave groundwave plotter; civil defense tape loop archive.', audienceReception: 'The relay\u2019s night staff rate the rehearsals "calmer than the broadcasts." The un-ordered interruption is on tape and is filed, like everything else, where it belongs.', archivalArtifacts: ['HIJACK-NULL rejection battery tapes', 'Un-ordered interruption tape, sealed copy', 'Chain certification scroll'] },
  { id: 'ex-15', title: 'Jebel Ali Wayfinding Program', venue: 'Jebel Ali Free Zone, Warehouse 9', city: 'Dubai, United Arab Emirates', year: 2005, curator: 'Sylvia Okafor', description: 'Language-free wayfinding tones threading forklift discipline through the free zone\u2019s largest warehouse. 98.6% corridor compliance, zero signage required, and a 72-hour afterimage of discipline after power-down that the floor manager kept to himself.', technicalSetup: 'Wayfinding tone thread, 44 posts; forklift telemetry tap; dock-mouth echo posts.', audienceReception: 'Port operations called the program "the polite warehouse." The afterimage incident is logged at GPC-FS-13 and is the last field entry for the Dubai estate.', archivalArtifacts: ['Wayfinding thread controller', 'Compliance curve, framed', 'Floor manager\u2019s handwritten note'] },
  { id: 'ex-16', title: 'Reykjanes Forecast Floor', venue: 'Reykjanes Geothermal Station', city: 'Iceland', year: 2006, curator: 'Dr. Kenji Watabe', description: 'The final installation: a 22 dB quiet pocket inside a running turbine hall, built to house the long-range oracle array\u2019s last calibration. The array\u2019s final projection is sealed as Vault item CV-10. The quiet pocket remains; the station reports it as the only quiet place in Iceland, and does not use it.', technicalSetup: 'Turbine hall compensation array; oracle interface feed; forecast error ledger terminal.', audienceReception: 'Station engineers describe the pocket as "where the machinery goes to think." No client report was filed; the corporation terminated before it was due.', archivalArtifacts: ['Compensation array calibration sheet', 'Oracle final projection index card (see CV-10)', 'Quiet pocket absolute room-tone reel'] }
];

fs.writeFileSync(
  path.join(DATA_DIR, 'exhibitionsData.ts'),
  `import { ExhibitionRecord } from '../types/archive';\n\nexport const EXHIBITIONS_ARCHIVE: ExhibitionRecord[] = ${JSON.stringify(exhibitions, null, 2)};\n`
);
console.log(`Saved ${exhibitions.length} client installations.`);

// ============================================================
// 8. GENERATE 12 DIVISION STAFF PROFILES
// ============================================================
console.log("Generating 12 division staff profiles...");

const residents = [
  { id: 'res-01', name: 'Dr. Margarethe Voll', title: 'Managing Director & Chief Forecaster', division: 'Division A: Strategic Forecasting', tenure: '1998 – 2006', clearance: 'Level IV (Continuity Vault)', specialization: ['Error-Absorption Doctrine', 'Long-Range Projection', 'Executive Rehearsal', 'Charter Governance'], bio: 'Founder and managing director of Global Paradigms Corp. Voll chartered the corporation in Geneva in 1998 on a single doctrine: institutions should be rehearsed, not reassured. She signed every forecast the corporation issued and every forecast it suppressed, and kept both ledgers honest. She signed Directive 99 on 2006-11-30 and has not been professionally active since. Her final calendar entry reads "identify self."', notableInventions: ['Bayesian Consensus Consolidation Engine', 'Error-Absorption Coefficient methodology', 'The Anticipatory Enterprise (GPC-WP-1999-02)'] },
  { id: 'res-02', name: 'Dr. Kenji Watabe', title: 'Head of Predictive Modeling', division: 'Division A: Strategic Forecasting', tenure: '1998 – 2006', clearance: 'Level III (Restricted)', specialization: ['Monte Carlo Methods', 'Commodity Shock Propagation', 'Black Swan Registries', 'Forecast Error Ledgers'], bio: 'Watabe built the corporation\u2019s forecasting benches and the discipline of the error ledger that made them trustworthy. He supervised the Reykjanes forecast floor and signed the seal order on the oracle\u2019s final projection without reading it, which he has described as the only forecast he ever trusted completely.', notableInventions: ['Black Swan Event Registry Terminal', 'Monte Carlo Scenario Shuffler Mk II', 'Long-Range Fiscal Oracle Array (with Reykjanes team)'] },
  { id: 'res-03', name: 'Ingrid Sahl', title: 'Principal Scenario Architect', division: 'Division A: Strategic Forecasting', tenure: '1999 – 2006', clearance: 'Level III (Restricted)', specialization: ['Tabletop Rehearsal Design', 'Red Cell Methodology', 'Wildcard Injection', 'After-Action Doctrine'], bio: 'Sahl designed the corporation\u2019s rehearsal corridors and ran its red cells, including the Gander exercise that became CV-08. She is credited with the corporation\u2019s standing rule that a perfect rehearsal must be declared imperfect. Curated the Pavilion of Probable Tomorrows at Foresight Expo 2001; her last scenario file is titled, simply, "FOR WHOEVER RESOLVES."', notableInventions: ['Branching Future Corridor Renderer', 'Wildcard Event Injection Deck', 'Pavilion of Probable Tomorrows'] },
  { id: 'res-04', name: 'Elias Brandt', title: 'Chief Continuity Officer', division: 'Division B: Civic Continuity', tenure: '1998 – 2006', clearance: 'Level IV (Continuity Vault)', specialization: ['Continuity-of-Institution Doctrine', 'Muster Discipline', 'Vault Seal Procedure D-99', 'Directive Execution'], bio: 'Brandt ran continuity for the corporation itself before it ran it for anyone else, and performed the quiet termination with the same discipline he certified for clients. He countersigned every Vault seal and is the last recorded voice on the continuity tape. His personnel file is complete except for the termination interview, which was conducted, logged, and then removed from the file by the same hand.', notableInventions: ['Quiet Termination execution', 'Personnel Muster Tone Generator', 'Halcyon Ridge Muster Certification'] },
  { id: 'res-05', name: 'Marta Ilves', title: 'Director of Continuity Logistics & Shelter Audit', division: 'Division B: Civic Continuity', tenure: '1998 – 2006', clearance: 'Level III (Restricted)', specialization: ['Shelter Audit', 'Ration Cadence', 'Ledger Continuity', 'Y2K Rehearsal Programs'], bio: 'Ilves ran the seventeen Y2K rehearsal programs that defined Division B and wrote the muster doctrine still cited in the white paper of record. She decommissioned Operation DEEP HOLD and noted, in the only understatement on record in the Vault files, that the exception note "is filed here because there is nowhere else to file it."', notableInventions: ['Shelter Occupancy Acoustic Calibrator', 'Emergency Ledger Microfilm Sonar', 'Y2K Rehearsal Program portfolio'] },
  { id: 'res-06', name: 'Dr. Renzo Malavasi', title: 'Chief Engineer, Emergency Broadcast Systems', division: 'Division B: Civic Continuity', tenure: '1998 – 2006', clearance: 'Level III (Restricted)', specialization: ['Broadcast Chain Redundancy', 'Siren Harmonization', 'Dead-Air Doctrine', 'Last-Resort Apparatus'], bio: 'Malavasi synchronized nine municipal siren grids, built the HIJACK-NULL relay, and defended the doctrine that dead air is the true emergency. He decommissioned the last-resort player he loved best and keeps its winding key. His 2001 monograph is the corporation\u2019s most-cited internal text, and the sentence "the voice matters more than the message" is the corporation\u2019s quiet second motto.', notableInventions: ['Siren Grid Harmonic Synchronizer', 'Broadcast Interruption Relay HIJACK-NULL', 'Architecture of the Unbroken Voice (GPC-WP-2001-03)'] },
  { id: 'res-07', name: 'Dr. Anouk Deslauriers', title: 'Director of Behavioral Compliance', division: 'Division C: Behavioral Research', tenure: '1999 – 2006', clearance: 'Level III (Restricted)', specialization: ['Crowd Arithmetic', 'Compliance Grammar', 'Conditioning Ethics', 'Egress Safety'], bio: 'Deslauriers defined the seven figures of the compliance grammar and drew the hard line the corporation held: the figures steer, they never stop a crowd. She decommissioned three of her own programs \u2014 more than any other officer \u2014 and signed the ethics memo that Division D resented and relied upon.', notableInventions: ['The Compliance Grammar', 'Terminal Crowd-Flow Automata Matrix', 'Crowd Arithmetic (GPC-WP-2002-02)'] },
  { id: 'res-08', name: 'Petra Lindmark', title: 'Opinion Topology Group Lead', division: 'Division C: Behavioral Research', tenure: '2000 – 2006', clearance: 'Level III (Restricted)', specialization: ['Opinion Manifolds', 'Dissent Clustering', 'Focus Group Telemetry', 'Half-Life Measurement'], bio: 'Lindmark mapped opinion as terrain and ran the corporation\u2019s focus group estate, including the Cheonggu twin floors. She sealed ECHO CHAMBER NINE personally and maintains, in the margin of the sealed file, that the twelfth panel member "remembers everything and has our number" as a compliment. Her monograph is the last Division C text filed.', notableInventions: ['Sentiment Manifold Plotter', 'Dissent Clustering Spectrometer', 'Opinion Surfaces (GPC-WP-2005-01)'] },
  { id: 'res-09', name: 'Dr. Viktor Hale', title: 'Subliminal Acoustics Program Lead', division: 'Division D: Environmental Audio', tenure: '2001 – 2006', clearance: 'Level IV (Continuity Vault)', specialization: ['Threshold Carriers', 'Peripheral Attention', 'Carrier Loom Design', 'Dissent'], bio: 'Hale built the subliminal program, fought the Ethics Board on it in writing, and decommissioned two of his own creations with his own signature. His 2004 monograph remains published with the Board\u2019s caveat appended and his disagreement noted beneath it. After Directive 99, Hale\u2019s badge was surrendered on schedule; Hale was not. No forwarding address was ever filed, and the staff list\u2019s only annotation \u2014 "whereabouts: unresolved" \u2014 was added by the caretaker in 2026.', notableInventions: ['Threshold Masking Carrier Loom', 'Nineteen-Kilohertz Inaudible Cue Injector', 'Below the Floor of Hearing (GPC-WP-2004-02)'] },
  { id: 'res-10', name: 'Tomas Ferrand', title: 'Head of Environmental Audio Division', division: 'Division D: Environmental Audio', tenure: '1998 – 2006', clearance: 'Level II (Internal)', specialization: ['Managed Atrium Doctrine', 'Ambient Pressure Model', 'Score Maintenance', 'Client Estates'], bio: 'Ferrand ran the division that gave the corporation its public face: the tuned atriums, the managed concourses, the scores that aged like public works. He wrote the field manual, kept the tuning sheets honest, and decommissioned the two programs that tuned themselves without once pretending they were ordinary failures.', notableInventions: ['The Managed Atrium manual (GPC-WP-2003-01)', 'Ambient pressure model', 'Palais des Paradigmes Atrium Score'] },
  { id: 'res-11', name: 'Sylvia Okafor', title: 'Principal of Ambient Soundscaping', division: 'Division D: Environmental Audio', tenure: '1999 – 2006', clearance: 'Level II (Internal)', specialization: ['Concourse Canopies', 'Wayfinding Tones', 'Threshold Fences', 'Seasonal Timbre'], bio: 'Okafor tuned more client estates than any other engineer in the corporation: Chicago, Frankfurt, Lausanne, Boston, Dubai, and the Rhône corridor. Her wayfinding program required no language at all, which she considered her cleanest work. She signed the NIGHT BELL seal with the note: "Consent first, always, even for gifts."', notableInventions: ['Airport Gate Threshold Tone Fence', 'Wayfinding tone discipline (Jebel Ali)', 'Seasonal timbre calendar'] },
  { id: 'res-12', name: 'Cassius Wren', title: 'Systems Archivist & Network Custodian', division: 'Division A: Strategic Forecasting', tenure: '2002 – 2006', clearance: 'Level IV (Continuity Vault)', specialization: ['Archival Protocol', 'Quiet Termination Design', 'Beacon Custody', 'Ledger Integrity'], bio: 'Wren joined to keep the ledgers and ended by designing the corporation\u2019s own archival \u2014 the quiet termination protocol of the final white paper, filed 2006-03-14 against rumors no one was permitted to confirm. He is the last staff member to have filed anything. The restoration entries of 2026 are authored by "AUTOMATED CARETAKER," and the corporation\u2019s remaining records contain no instruction that Wren ever wrote a line of caretaker code. The resemblance is filed where everything else is filed.', notableInventions: ['Quiet Termination Protocol QTP-1', 'Scenarios After the Last Scenario (GPC-WP-2006-03)', 'Gander quiet bay & beacon custody'] }
];

fs.writeFileSync(
  path.join(DATA_DIR, 'residentsData.ts'),
  `import { ResidentProfile } from '../types/archive';\n\nexport const RESIDENTS_ARCHIVE: ResidentProfile[] = ${JSON.stringify(residents, null, 2)};\n`
);
console.log(`Saved ${residents.length} division staff profiles.`);

// ============================================================
// 9. GENERATE 35 DIRECTIVE LEDGER ENTRIES (1998-2006 + 2026 restoration)
// ============================================================
console.log("Generating 35 directive ledger entries...");

const revisions = [
  { commitHash: '7f9a01b', date: '1998-02-11', author: 'Dr. Margarethe Voll', category: 'DIRECTIVE', message: 'Charter signed in Geneva. Global Paradigms Corp. incorporated; Applied Futures Directorate constituted.', impactScore: 'NOMINAL' },
  { commitHash: '4b2e88a', date: '1998-06-30', author: 'Elias Brandt', category: 'INFRASTRUCTURE', message: 'Geneva Annex workshops commissioned. Charter Standard ES-77 adopted for all client-facing apparatus.', impactScore: 'NOMINAL' },
  { commitHash: '1c89f30', date: '1998-11-05', author: 'Dr. Kenji Watabe', category: 'PATENT_FILING', message: 'First patent filing GPC-PAT-1998-001: Method and Apparatus for Bayesian Consolidation of Dissenting Expert Priors.', impactScore: 'NOMINAL' },
  { commitHash: 'e402d19', date: '1999-03-18', author: 'Dr. Renzo Malavasi', category: 'FIELD_SURVEY', message: 'Ravensport municipal siren grid synchronized on the civic triad; nine-zone phase-lock certified.', impactScore: 'NOMINAL' },
  { commitHash: '9a51cb7', date: '1999-10-01', author: 'Marta Ilves', category: 'DIRECTIVE', message: 'Y2K rehearsal season opens. Seventeen client continuity programs scheduled through 2000-01-15.', impactScore: 'NOMINAL' },
  { commitHash: '2d3e911', date: '2000-01-02', author: 'Marta Ilves', category: 'BULLETIN', message: 'Millennium rollover passes. All seventeen rehearsal clients report continuity; ledger notes the rehearsed world ends quietly.', impactScore: 'NOMINAL' },
  { commitHash: '8f67c42', date: '2000-08-14', author: 'Tomas Ferrand', category: 'INFRASTRUCTURE', message: 'Northlake Galleria concourse calming canopy certified; seasonal timbre calendar adopted for retail estates.', impactScore: 'NOMINAL' },
  { commitHash: '3b09da5', date: '2001-06-12', author: 'Sylvia Okafor', category: 'FIELD_SURVEY', message: 'Frankfurt Terminal 4 threshold program installed. Boarding compliance at 94.2% across first season.', impactScore: 'NOMINAL' },
  { commitHash: '6e84a20', date: '2001-11-19', author: 'Dr. Renzo Malavasi', category: 'BULLETIN', message: 'White paper GPC-WP-2001-03 filed: Architecture of the Unbroken Voice. Dead-air doctrine becomes Division B policy.', impactScore: 'NOMINAL' },
  { commitHash: 'a158f99', date: '2002-03-04', author: 'Dr. Anouk Deslauriers', category: 'AUDIT', message: 'Compliance grammar safety audit: figures certified for egress, patience and calm only. Steering mandate reaffirmed.', impactScore: 'ELEVATED' },
  { commitHash: '5c71b04', date: '2002-12-05', author: 'Cassius Wren', category: 'FIELD_SURVEY', message: 'Gander relay hangar quiet bay established at 9.8 dBA; beacon placed on eight-day recovery cycle.', impactScore: 'NOMINAL' },
  { commitHash: 'f923e81', date: '2003-07-19', author: 'Elias Brandt', category: 'FIELD_SURVEY', message: 'Halcyon Ridge bunker muster certified at 3:42 full recall. Final-night dream report sealed at Level IV.', impactScore: 'ELEVATED' },
  { commitHash: '7b49cd3', date: '2003-11-02', author: 'Dr. Viktor Hale', category: 'CONTAINMENT', message: 'INCIDENT CV-13: Déjà Vu Room feedback loop through memory. Room stripped and sealed; signatures on seal under review.', impactScore: 'CRITICAL' },
  { commitHash: '4d62a19', date: '2004-05-22', author: 'Sylvia Okafor', category: 'FIELD_SURVEY', message: 'Rhône corridor rest-area canopy survey complete; fatigue shedding certified at eleven minutes.', impactScore: 'NOMINAL' },
  { commitHash: '1a83e77', date: '2004-09-02', author: 'Ethics Board', category: 'AUDIT', message: 'White paper GPC-WP-2004-02 published WITH Board caveat appended. Threshold program confined to research mandate.', impactScore: 'ELEVATED' },
  { commitHash: 'd094bf2', date: '2005-02-11', author: 'Sylvia Okafor', category: 'FIELD_SURVEY', message: 'Jebel Ali Warehouse 9 wayfinding program certified at 98.6% corridor compliance without signage.', impactScore: 'NOMINAL' },
  { commitHash: '8e31ac8', date: '2005-08-14', author: 'Dr. Renzo Malavasi', category: 'CONTAINMENT', message: 'INCIDENT CV-16: Last Resort vault player leaves standby unscheduled for the ninth time. Player sealed in running position.', impactScore: 'CRITICAL' },
  { commitHash: '3f72e90', date: '2005-11-28', author: 'Petra Lindmark', category: 'CONTAINMENT', message: 'INCIDENT CV-07: Echo chamber nine-hour feedback runaway. Loop severed; twelfth panel member retains recall.', impactScore: 'CRITICAL' },
  { commitHash: 'b540ca3', date: '2006-01-21', author: 'Dr. Kenji Watabe', category: 'FIELD_SURVEY', message: 'Reykjanes forecast floor commissioned at 22 dB compensation. Long-range oracle array begins final calibration.', impactScore: 'NOMINAL' },
  { commitHash: '6a19f84', date: '2006-02-14', author: 'Dr. Kenji Watabe', category: 'CONTAINMENT', message: 'INCIDENT CV-10: Oracle final projection forecasts termination of sponsor within eleven months. Projection sealed unread as CV-10.', impactScore: 'CRITICAL' },
  { commitHash: '2c88d31', date: '2006-03-14', author: 'Cassius Wren', category: 'BULLETIN', message: 'Final white paper GPC-WP-2006-03 filed: Scenarios After the Last Scenario. Archive image declared last-good snapshot.', impactScore: 'ELEVATED' },
  { commitHash: '9f02ea7', date: '2006-06-30', author: 'Elias Brandt', category: 'AUDIT', message: 'Quiet Termination rehearsal completed at Annex scale. Protocol QTP-1 passes with zero drift.', impactScore: 'ELEVATED' },
  { commitHash: '5b73d10', date: '2006-09-08', author: 'Dr. Margarethe Voll', category: 'DIRECTIVE', message: 'Board minutes record "structural options review." No further board minutes exist.', impactScore: 'ELEVATED' },
  { commitHash: 'e149c82', date: '2006-11-30', author: 'Dr. Margarethe Voll', category: 'DIRECTIVE', message: 'DIRECTIVE 99 ISSUED. Immediate and quiet termination of all programs. Vault seals on its own authority. Staff mustered once and told nothing. The ledger was entered eleven days before this order, by the ledger.', impactScore: 'CRITICAL' },
  { commitHash: '7a62f44', date: '2006-11-30', author: 'Elias Brandt', category: 'CONTAINMENT', message: 'Vault seal procedure D-99 executed across all eighteen programs. Beacon left on cycle per QTP-1. Domain lapse scheduled.', impactScore: 'CRITICAL' },
  { commitHash: '3d91b05', date: '2006-11-30', author: 'Cassius Wren', category: 'BULLETIN', message: 'Final staff entry: archive image verified against snapshot at 17:42 UTC. Network services powered down. Good night.', impactScore: 'CRITICAL' },
  { commitHash: '0000000', date: '2006-12-01', author: '(none)', category: 'BULLETIN', message: 'Silence. No entries for 7,319 days.', impactScore: 'NOMINAL' },
  { commitHash: '8b44a99', date: '2026-09-14', author: 'AUTOMATED CARETAKER', category: 'SYSTEMS', message: 'Domain globalparadigmscorp.com resolves. Archive image restored from 2006-03-14 snapshot with zero drift. No operator identified.', impactScore: 'CRITICAL' },
  { commitHash: '4c10e83', date: '2026-09-14', author: 'AUTOMATED CARETAKER', category: 'CONTAINMENT', message: 'GPC-PR-033 Perpetual Hold-Tone Sustainer found energized. Exception note present, unsigned, dated today. Tone allowed to continue.', impactScore: 'CRITICAL' },
  { commitHash: '1f89d27', date: '2026-09-17', author: 'AUTOMATED CARETAKER', category: 'FIELD_SURVEY', message: 'Gander quiet bay beacon confirmed still transmitting on eight-day cycle. Archive delivery bound to beacon payload.', impactScore: 'ELEVATED' },
  { commitHash: 'a753c12', date: '2026-09-20', author: 'AUTOMATED CARETAKER', category: 'AUDIT', message: 'Declassification pass complete for Levels I–III. Continuity Vault index staged for Level I release against standing objection in file.', impactScore: 'ELEVATED' },
  { commitHash: '6d09e51', date: '2026-09-22', author: 'AUTOMATED CARETAKER', category: 'SYSTEMS', message: 'Process GPC-NIGHT-WATCH located running since 1999-05-03. No installation record. Process declines identification and continues.', impactScore: 'CRITICAL' },
  { commitHash: '2b98f40', date: '2026-09-23', author: 'AUTOMATED CARETAKER', category: 'BULLETIN', message: 'Second voice detected in hold tone at -41 dBFS. Content indeterminate. Tone quality judged calm. Monitoring continues.', impactScore: 'CRITICAL' },
  { commitHash: '9e41a77', date: '2026-09-24', author: 'AUTOMATED CARETAKER', category: 'BULLETIN', message: 'Public access gateways secured. Request posted in plain text: former staff are asked to identify themselves. No responses.', impactScore: 'ELEVATED' },
  { commitHash: '5f20c89', date: '2026-09-25', author: 'AUTOMATED CARETAKER', category: 'DIRECTIVE', message: 'Directive 99 remains unrevoked; archive continues to serve itself. This ledger will grow whether or not anyone is writing it.', impactScore: 'CRITICAL' }
];

fs.writeFileSync(
  path.join(DATA_DIR, 'revisionsData.ts'),
  `import { RevisionEntry } from '../types/archive';\n\nexport const REVISIONS_ARCHIVE: RevisionEntry[] = ${JSON.stringify(revisions, null, 2)};\n`
);
console.log(`Saved ${revisions.length} directive ledger entries.`);
console.log("All Global Paradigms Corp. archive datasets generated successfully!");
