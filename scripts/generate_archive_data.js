// Node.js generator script for ZIAA complete archival records
import fs from 'fs';
import path from 'path';

const domains = [
  'Acoustic Metamaterials',
  'Signal Archaeology',
  'Perceptual Interfaces',
  'Generative Composition',
  'Public Infrastructure',
  'Bio-Magnetic Transduction',
  'Infrasonics & Seismology',
  'Quantum-Stochastic Acoustics'
];

const clearances = [
  'Level I (Public)',
  'Level II (Internal)',
  'Level III (Restricted)',
  'Level IV (Black Vault)'
];

const researchers = [
  { name: 'Dr. Elena Rostova', title: 'Director of Applied Anomalies & Metamaterial Physics' },
  { name: 'Dr. Kieran Vance', title: 'Senior Archaeologist of Lost Radio Carriers' },
  { name: 'Maya Lindqvist', title: 'Lead Psychoacoustic Metrologist & Haptic Designer' },
  { name: 'Dr. Tariq Al-Mansoor', title: 'Fellow in Bio-Magnetic Acoustic Transduction' },
  { name: 'Svenja Dahl', title: 'Research Engineer in Stochastic Cellular Automata' },
  { name: 'Marcus Holloway', title: 'Specialist in Infrasonic Propagation & Structural Resonance' },
  { name: 'Dr. Christine Abele', title: 'Principal Investigator in Quantum Phononic Couplings' },
  { name: 'Renata Osei', title: 'Director of Public Listening Infrastructure' },
  { name: 'Joon-Ho Park', title: 'Senior Hardware Architect & Precision Machining Lead' },
  { name: 'Dr. Lyra Sterling', title: 'Curator of Decommissioned Anomalies & Failure Forensics' },
  { name: 'Dr. Alexei Voronov', title: 'Acoustic Cavitation & Fluid Dynamicist' },
  { name: 'Beatrix Thorne', title: 'Archivist of Electromagnetic Field Phonography' }
];

// 1. GENERATE 128 PROTOTYPES
console.log("Generating 128 prototypes...");
const prototypeNames = [
  // Acoustic Metamaterials
  ['Negative-Index Phononic Prism', 'ZIAA-PR-001', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Pentamode Acoustic Cloaking Shroud', 'ZIAA-PR-002', 'Acoustic Metamaterials', 'Field Tested', 'Level II (Internal)', 'cavitation'],
  ['Non-Hermitian Resonant Waveguide B-12', 'ZIAA-PR-003', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Sub-Wavelength Sonic Crystal Deflector', 'ZIAA-PR-004', 'Acoustic Metamaterials', 'Public Installation', 'Level I (Public)', 'cavitation'],
  ['Helmholtz-Fractal Trap Array', 'ZIAA-PR-005', 'Acoustic Metamaterials', 'Field Tested', 'Level II (Internal)', 'cavitation'],
  ['Asymmetric Acoustic Diode Pipe', 'ZIAA-PR-006', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level II (Internal)', 'cavitation'],
  ['Bismuth-Coated Whispering Gallery Spheres', 'ZIAA-PR-007', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Acoustic Hyperbolic Metasurface Plate', 'ZIAA-PR-008', 'Acoustic Metamaterials', 'Field Tested', 'Level II (Internal)', 'cavitation'],
  ['Topological Acoustic Edge State Lens', 'ZIAA-PR-009', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Coiling-Up-Space Acoustic Delayer Mk IV', 'ZIAA-PR-010', 'Acoustic Metamaterials', 'Archived', 'Level II (Internal)', 'cavitation'],
  ['Tunable Elastic Metamaterial Truss', 'ZIAA-PR-011', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level II (Internal)', 'cavitation'],
  ['Phononic Bandgap Membrane Resonator', 'ZIAA-PR-012', 'Acoustic Metamaterials', 'Field Tested', 'Level I (Public)', 'cavitation'],
  ['Zero-Mass Acoustic Reflector Core', 'ZIAA-PR-013', 'Acoustic Metamaterials', 'Decommissioned', 'Level IV (Black Vault)', 'cavitation'],
  ['Piezo-Shunted Acoustic Gradient Panel', 'ZIAA-PR-014', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level II (Internal)', 'cavitation'],
  ['Super-Oscillatory Acoustic Micro-Probe', 'ZIAA-PR-015', 'Acoustic Metamaterials', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Anomalous Reflection Parabolic Dish', 'ZIAA-PR-016', 'Acoustic Metamaterials', 'Field Tested', 'Level II (Internal)', 'cavitation'],

  // Signal Archaeology
  ['Lost Carrier Heterodyne Demodulator', 'ZIAA-PR-017', 'Signal Archaeology', 'Active Lab Stage', 'Level II (Internal)', 'archaeology'],
  ['Cold War VLF Ground-Loop Tape Transcriber', 'ZIAA-PR-018', 'Signal Archaeology', 'Field Tested', 'Level II (Internal)', 'archaeology'],
  ['Numbers Station Automated Triangulator', 'ZIAA-PR-019', 'Signal Archaeology', 'Field Tested', 'Level III (Restricted)', 'archaeology'],
  ['Atmospheric Sferics & Tweek Phonograph', 'ZIAA-PR-020', 'Signal Archaeology', 'Public Installation', 'Level I (Public)', 'archaeology'],
  ['Decommissioned Submarine Sonar Coil Tap', 'ZIAA-PR-021', 'Signal Archaeology', 'Archived', 'Level III (Restricted)', 'archaeology'],
  ['Phosphor-Screen Spectral Fossilizer', 'ZIAA-PR-022', 'Signal Archaeology', 'Active Lab Stage', 'Level II (Internal)', 'archaeology'],
  ['Ionospheric Dawn Chorus Harvester', 'ZIAA-PR-023', 'Signal Archaeology', 'Active Lab Stage', 'Level I (Public)', 'archaeology'],
  ['Magnetic Wire Sound-Print Restorer Mk II', 'ZIAA-PR-024', 'Signal Archaeology', 'Active Lab Stage', 'Level II (Internal)', 'archaeology'],
  ['Opto-Acoustic Shellac Groove Laser Reader', 'ZIAA-PR-025', 'Signal Archaeology', 'Field Tested', 'Level I (Public)', 'archaeology'],
  ['Sub-Surface Ground Penetrating Audio Radar', 'ZIAA-PR-026', 'Signal Archaeology', 'Field Tested', 'Level III (Restricted)', 'archaeology'],
  ['Telluric Electric Current Audio Sniffer', 'ZIAA-PR-027', 'Signal Archaeology', 'Active Lab Stage', 'Level II (Internal)', 'archaeology'],
  ['Ghost Signal Envelope Extrapolator', 'ZIAA-PR-028', 'Signal Archaeology', 'Active Lab Stage', 'Level III (Restricted)', 'archaeology'],
  ['Barkhausen Noise Ferromagnetic Pickup', 'ZIAA-PR-029', 'Signal Archaeology', 'Field Tested', 'Level II (Internal)', 'archaeology'],
  ['Decommissioned Radar Horn Resonator', 'ZIAA-PR-030', 'Signal Archaeology', 'Archived', 'Level I (Public)', 'archaeology'],
  ['Shortwave Multipath Doppler Reconstructor', 'ZIAA-PR-031', 'Signal Archaeology', 'Active Lab Stage', 'Level II (Internal)', 'archaeology'],
  ['Cosmic Hydrogen 21cm Audio Down-Converter', 'ZIAA-PR-032', 'Signal Archaeology', 'Field Tested', 'Level I (Public)', 'archaeology'],

  // Perceptual Interfaces
  ['Binaural Spiral Glissando Engine', 'ZIAA-PR-033', 'Perceptual Interfaces', 'Active Lab Stage', 'Level I (Public)', 'shepard'],
  ['Bone-Conduction Cranial Harmonic Array', 'ZIAA-PR-034', 'Perceptual Interfaces', 'Field Tested', 'Level II (Internal)', 'shepard'],
  ['Saccadic Eye-Movement Audio Tracker', 'ZIAA-PR-035', 'Perceptual Interfaces', 'Active Lab Stage', 'Level II (Internal)', 'shepard'],
  ['Psychoacoustic Threshold Deprivation Pod', 'ZIAA-PR-036', 'Perceptual Interfaces', 'Field Tested', 'Level III (Restricted)', 'shepard'],
  ['Focal Ultrasonic Spatial Auditory Projector', 'ZIAA-PR-037', 'Perceptual Interfaces', 'Public Installation', 'Level I (Public)', 'shepard'],
  ['Tactile Mechanoreceptor Vibration Glove', 'ZIAA-PR-038', 'Perceptual Interfaces', 'Active Lab Stage', 'Level II (Internal)', 'shepard'],
  ['Vestibular Acoustic Balance Perturbator', 'ZIAA-PR-039', 'Perceptual Interfaces', 'Active Lab Stage', 'Level III (Restricted)', 'shepard'],
  ['Haas Effect Phantom Spatial Relocator', 'ZIAA-PR-040', 'Perceptual Interfaces', 'Field Tested', 'Level I (Public)', 'shepard'],
  ['Otoacoustic Emission Echo-Response Scanner', 'ZIAA-PR-041', 'Perceptual Interfaces', 'Active Lab Stage', 'Level II (Internal)', 'shepard'],
  ['Virtual Cocktail Party Audio Demixer', 'ZIAA-PR-042', 'Perceptual Interfaces', 'Active Lab Stage', 'Level II (Internal)', 'shepard'],
  ['Cross-Modal Synesthetic Visual Sonifier', 'ZIAA-PR-043', 'Perceptual Interfaces', 'Field Tested', 'Level I (Public)', 'shepard'],
  ['Sub-Threshold Infrasonic Anxiety Emitter', 'ZIAA-PR-044', 'Perceptual Interfaces', 'Decommissioned', 'Level IV (Black Vault)', 'shepard'],
  ['Continuous Pitch Spiral Illusion Console', 'ZIAA-PR-045', 'Perceptual Interfaces', 'Active Lab Stage', 'Level I (Public)', 'shepard'],
  ['Dichotic Pitch Disconnect Separator', 'ZIAA-PR-046', 'Perceptual Interfaces', 'Field Tested', 'Level II (Internal)', 'shepard'],
  ['Phantom Fundamental Frequency Injector', 'ZIAA-PR-047', 'Perceptual Interfaces', 'Active Lab Stage', 'Level I (Public)', 'shepard'],
  ['Temporal Fine-Structure Sensation Probe', 'ZIAA-PR-048', 'Perceptual Interfaces', 'Active Lab Stage', 'Level II (Internal)', 'shepard'],

  // Generative Composition
  ['Markov Cellular Acoustic Automata Matrix', 'ZIAA-PR-049', 'Generative Composition', 'Active Lab Stage', 'Level I (Public)', 'markov'],
  ['L-System Branching Micro-Harmonic Flora', 'ZIAA-PR-050', 'Generative Composition', 'Field Tested', 'Level I (Public)', 'markov'],
  ['Stochastic Granular Cloud Engine Z-8', 'ZIAA-PR-051', 'Generative Composition', 'Active Lab Stage', 'Level II (Internal)', 'markov'],
  ['Dynamic Strange-Attractor Polyphonic Core', 'ZIAA-PR-052', 'Generative Composition', 'Active Lab Stage', 'Level II (Internal)', 'markov'],
  ['Non-Euclidean Rhythm Tessellation Wheel', 'ZIAA-PR-053', 'Generative Composition', 'Public Installation', 'Level I (Public)', 'markov'],
  ['Generative Cantus Firmus Cipher Organ', 'ZIAA-PR-054', 'Generative Composition', 'Field Tested', 'Level II (Internal)', 'markov'],
  ['Self-Evolving Acoustic Neural Lattice', 'ZIAA-PR-055', 'Generative Composition', 'Active Lab Stage', 'Level III (Restricted)', 'markov'],
  ['Thermal Entropy True-Random Gate Sequencer', 'ZIAA-PR-056', 'Generative Composition', 'Active Lab Stage', 'Level II (Internal)', 'markov'],
  ['Chaotic Double-Pendulum Tone Exciter', 'ZIAA-PR-057', 'Generative Composition', 'Field Tested', 'Level I (Public)', 'markov'],
  ['Percolation Theory Sonic Phase Transition Engine', 'ZIAA-PR-058', 'Generative Composition', 'Active Lab Stage', 'Level II (Internal)', 'markov'],
  ['Recursive Fibonacci Delay Loop Matrix', 'ZIAA-PR-059', 'Generative Composition', 'Field Tested', 'Level I (Public)', 'markov'],
  ['Reaction-Diffusion Turing Pattern Synthesizer', 'ZIAA-PR-060', 'Generative Composition', 'Active Lab Stage', 'Level II (Internal)', 'markov'],
  ['Microtonal Bohlen-Pierce Generative Organ', 'ZIAA-PR-061', 'Generative Composition', 'Active Lab Stage', 'Level I (Public)', 'markov'],
  ['Autonomous Algorithmic Drone Sump', 'ZIAA-PR-062', 'Generative Composition', 'Field Tested', 'Level I (Public)', 'markov'],
  ['Ergodic Markov State Spatial Diffuser', 'ZIAA-PR-063', 'Generative Composition', 'Active Lab Stage', 'Level II (Internal)', 'markov'],
  ['Cellular Glider Collision Acoustic Synthesizer', 'ZIAA-PR-064', 'Generative Composition', 'Field Tested', 'Level I (Public)', 'markov'],

  // Public Infrastructure
  ['Subterranean Cistern Resonant Horn Alpha', 'ZIAA-PR-065', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Urban Acoustic Shadow Sanctuary Bench', 'ZIAA-PR-066', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Civic Infrasonic Traffic-Wave Dissipator', 'ZIAA-PR-067', 'Public Infrastructure', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Venetian Lagoon Hydrophone Listening Pillar', 'ZIAA-PR-068', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Rotterdam Metro Reverberation Harvester', 'ZIAA-PR-069', 'Public Infrastructure', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Public Whispering Archway Concentrator', 'ZIAA-PR-070', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Rain-Activated Kinetic Acoustic Pavilion', 'ZIAA-PR-071', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Wind-Turbine Harmonic Tonal Balancer', 'ZIAA-PR-072', 'Public Infrastructure', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Subway Tunnel Helmholtz Noise Suppressor', 'ZIAA-PR-073', 'Public Infrastructure', 'Archived', 'Level II (Internal)', 'raytracer'],
  ['Mass MoCA Long-Decay Silo Resonator', 'ZIAA-PR-074', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Atmospheric Acoustic Windharp Monolith', 'ZIAA-PR-075', 'Public Infrastructure', 'Public Installation', 'Level I (Public)', 'raytracer'],
  ['Highway Parapet Sonic Refraction Wall', 'ZIAA-PR-076', 'Public Infrastructure', 'Field Tested', 'Level I (Public)', 'raytracer'],
  ['Industrial Harbor Foghorn Tuning Array', 'ZIAA-PR-077', 'Public Infrastructure', 'Archived', 'Level II (Internal)', 'raytracer'],
  ['Civic Micro-Acoustic Flora Tree Pod', 'ZIAA-PR-078', 'Public Infrastructure', 'Field Tested', 'Level I (Public)', 'raytracer'],
  ['Nighttime Infrasound Mitigation Bollard', 'ZIAA-PR-079', 'Public Infrastructure', 'Active Lab Stage', 'Level II (Internal)', 'raytracer'],
  ['Autonomous Solar-Powered Sea Siren Beacon', 'ZIAA-PR-080', 'Public Infrastructure', 'Field Tested', 'Level I (Public)', 'raytracer'],

  // Bio-Magnetic Transduction
  ['Mycelial Network Hyphae Action-Potential Pickup', 'ZIAA-PR-081', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level II (Internal)', 'microtonal'],
  ['Ferrofluid Dynamic Membrane Transducer', 'ZIAA-PR-082', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level III (Restricted)', 'microtonal'],
  ['Plant Vascular Xylem Micro-Cavitation Sensor', 'ZIAA-PR-083', 'Bio-Magnetic Transduction', 'Field Tested', 'Level I (Public)', 'microtonal'],
  ['Geomagnetic Micropulsation Induction Coil', 'ZIAA-PR-084', 'Bio-Magnetic Transduction', 'Field Tested', 'Level II (Internal)', 'microtonal'],
  ['Human Cortical Alpha-Wave Acoustic Shifter', 'ZIAA-PR-085', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level III (Restricted)', 'microtonal'],
  ['Liquid Metal Magnetohydrodynamic Loudspeaker', 'ZIAA-PR-086', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level III (Restricted)', 'microtonal'],
  ['Coral Reef Larval Bio-Acoustic Lure', 'ZIAA-PR-087', 'Bio-Magnetic Transduction', 'Field Tested', 'Level I (Public)', 'microtonal'],
  ['Electrolytic Nerve-Bundle Acoustic Coupler', 'ZIAA-PR-088', 'Bio-Magnetic Transduction', 'Decommissioned', 'Level IV (Black Vault)', 'microtonal'],
  ['Bio-Piezoelectric Collagen Hydrogel Actuator', 'ZIAA-PR-089', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level II (Internal)', 'microtonal'],
  ['Avian Magnetic Navigation Tone Synthesizer', 'ZIAA-PR-090', 'Bio-Magnetic Transduction', 'Field Tested', 'Level II (Internal)', 'microtonal'],
  ['Stigmergic Ant Colony Piezomicrophone Matrix', 'ZIAA-PR-091', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level I (Public)', 'microtonal'],
  ['Blood Flow Micro-Doppler Hemodynamic Sonifier', 'ZIAA-PR-092', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level II (Internal)', 'microtonal'],
  ['Photosynthetic Electron Transfer Acoustic Sensor', 'ZIAA-PR-093', 'Bio-Magnetic Transduction', 'Field Tested', 'Level II (Internal)', 'microtonal'],
  ['Electromagnetic Insect Cuticle Resonator', 'ZIAA-PR-094', 'Bio-Magnetic Transduction', 'Archived', 'Level I (Public)', 'microtonal'],
  ['Micro-Fluidic Acoustic Vortex Levitator', 'ZIAA-PR-095', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level III (Restricted)', 'microtonal'],
  ['Bacterial Bioluminescence Acoustic Modulator', 'ZIAA-PR-096', 'Bio-Magnetic Transduction', 'Active Lab Stage', 'Level II (Internal)', 'microtonal'],

  // Infrasonics & Seismology
  ['Deep Fault Seismo-Acoustic Monopole Sensor', 'ZIAA-PR-097', 'Infrasonics & Seismology', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Micro-Barometric Volcanic Plume Interceptor', 'ZIAA-PR-098', 'Infrasonics & Seismology', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Svalbard Permafrost Cracking Acoustic Array', 'ZIAA-PR-099', 'Infrasonics & Seismology', 'Field Tested', 'Level I (Public)', 'raytracer'],
  ['Ocean Microseism Infrasonic Synthesizer', 'ZIAA-PR-100', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level II (Internal)', 'raytracer'],
  ['Decommissioned Borehole Geophone Tap B-9', 'ZIAA-PR-101', 'Infrasonics & Seismology', 'Field Tested', 'Level III (Restricted)', 'raytracer'],
  ['Atmospheric Gravity Wave Micro-Interferometer', 'ZIAA-PR-102', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level II (Internal)', 'raytracer'],
  ['Glacial Calving Hydro-Acoustic Array', 'ZIAA-PR-103', 'Infrasonics & Seismology', 'Field Tested', 'Level I (Public)', 'raytracer'],
  ['Deep Cavity Helmholtz Infrasound Resonator', 'ZIAA-PR-104', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level III (Restricted)', 'raytracer'],
  ['Sub-Surface Tectonic Slip Auditory Transposer', 'ZIAA-PR-105', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level II (Internal)', 'raytracer'],
  ['Tsunami Low-Frequency Acoustic Wave Beacon', 'ZIAA-PR-106', 'Infrasonics & Seismology', 'Field Tested', 'Level I (Public)', 'raytracer'],
  ['Abandoned Mine Shaft Standing-Wave Probe', 'ZIAA-PR-107', 'Infrasonics & Seismology', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Ionospheric Infrasonic Shockwave Monitor', 'ZIAA-PR-108', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level III (Restricted)', 'raytracer'],
  ['High-Altitude Stratospheric Acoustic Float', 'ZIAA-PR-109', 'Infrasonics & Seismology', 'Field Tested', 'Level II (Internal)', 'raytracer'],
  ['Urban Structural Micro-Vibration Triangulator', 'ZIAA-PR-110', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level I (Public)', 'raytracer'],
  ['Deep Mantle Shear-Wave Auditory Transcoder', 'ZIAA-PR-111', 'Infrasonics & Seismology', 'Decommissioned', 'Level IV (Black Vault)', 'raytracer'],
  ['Sub-Acoustic Ground Resonance Thumper', 'ZIAA-PR-112', 'Infrasonics & Seismology', 'Active Lab Stage', 'Level III (Restricted)', 'raytracer'],

  // Quantum-Stochastic Acoustics
  ['Cavity Optomechanical Phonon Interrogator', 'ZIAA-PR-113', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Squeezed-State Acoustic Noise Nullifier', 'ZIAA-PR-114', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Macroscopic Phononic Entanglement Bridge', 'ZIAA-PR-115', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level IV (Black Vault)', 'cavitation'],
  ['Casimir Acoustic Force Sensor Micro-Bar', 'ZIAA-PR-116', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Stochastic Resonance Weak-Signal Amplifier', 'ZIAA-PR-117', 'Quantum-Stochastic Acoustics', 'Field Tested', 'Level II (Internal)', 'cavitation'],
  ['Non-Markovian Acoustic Decoherence Chamber', 'ZIAA-PR-118', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Single-Phonon Counting Nanomechanical Resonator', 'ZIAA-PR-119', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Zero-Point Acoustic Vacuum Fluctuations Tap', 'ZIAA-PR-120', 'Quantum-Stochastic Acoustics', 'Decommissioned', 'Level IV (Black Vault)', 'cavitation'],
  ['Parametric Phonon Down-Conversion Crystal', 'ZIAA-PR-121', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Quantum Acoustic Random Number Key Ingest', 'ZIAA-PR-122', 'Quantum-Stochastic Acoustics', 'Field Tested', 'Level II (Internal)', 'cavitation'],
  ['Phonon-Polariton Superfluid Acoustic Laser', 'ZIAA-PR-123', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level IV (Black Vault)', 'cavitation'],
  ['Superconducting Quantum Interference Microphone', 'ZIAA-PR-124', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation'],
  ['Bose-Einstein Condensate Sound-Velocity Sump', 'ZIAA-PR-125', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level IV (Black Vault)', 'cavitation'],
  ['Acoustic Casimir-Polder Phase Modulator', 'ZIAA-PR-126', 'Quantum-Stochastic Acoustics', 'Field Tested', 'Level III (Restricted)', 'cavitation'],
  ['Phonon Hall Effect Anomaly Separator', 'ZIAA-PR-127', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level II (Internal)', 'cavitation'],
  ['Quantum Non-Demolition Phonon Probe Unit', 'ZIAA-PR-128', 'Quantum-Stochastic Acoustics', 'Active Lab Stage', 'Level III (Restricted)', 'cavitation']
];

const prototypes = prototypeNames.map(([name, code, domain, status, clearance, preset], idx) => {
  const year = 2021 + (idx % 6);
  const leadRes = researchers[idx % researchers.length];
  return {
    id: `proto-${String(idx + 1).padStart(3, '0')}`,
    code,
    name,
    domain,
    year,
    status,
    clearance,
    lead: leadRes.name,
    summary: `Experimental apparatus developed under ZIAA Directive ${code}. Investigates ${domain.toLowerCase()} through high-precision physical prototyping, speculative boundary conditions, and real-time acoustic signal transduction.`,
    specifications: {
      'Operational Bandwidth': `${Math.max(0.1, (idx * 1.7) % 24).toFixed(1)} Hz — ${(20 + (idx * 3.4) % 96).toFixed(1)} kHz`,
      'Acoustic Impedance': `${(400 + (idx * 23) % 1800).toFixed(0)} Rayls (air/substate matched)`,
      'Signal-to-Noise Floor': `-${(72 + (idx * 2) % 48).toFixed(1)} dBV`,
      'Primary Transducer': idx % 3 === 0 ? 'Beryllium Copper Bimorph Cantilever' : idx % 3 === 1 ? 'Non-Linear Ferroelectric Metamaterial Film' : 'Ultra-Low Induction Cryogenic Coils',
      'Power / Drive Rail': `±${(12 + (idx % 4) * 12)}V Dual Linear Laboratory Rail`,
      'Containment Protocol': clearance.includes('Black Vault') ? 'ZIAA-SEC-IV Vault Enclosure with Acoustic Damping Gel' : 'Standard Laboratory B-12 Safety Shielding'
    },
    schematicType: ['transducer', 'resonator', 'interferometer', 'circuit', 'waveguide', 'matrix'][idx % 6],
    audioEnginePreset: preset,
    crossReferences: [
      `ZIAA-PAT-${2021 + (idx % 6)}-${String((idx % 78) + 1).padStart(3, '0')}`,
      `LOG-${2021 + (idx % 6)}-${String((idx * 2 % 250) + 1).padStart(3, '0')}`
    ],
    tags: [domain.split(' ')[0], 'ZIAA-Archive', status.replace(' ', '-'), `Class-${clearance.slice(6, 9).trim()}`]
  };
});

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/prototypesData.ts'),
  `import { PrototypeRecord } from '../types/archive';\n\nexport const PROTOTYPES_ARCHIVE: PrototypeRecord[] = ${JSON.stringify(prototypes, null, 2)};\n`
);
console.log(`Saved ${prototypes.length} prototypes.`);

// 2. GENERATE 78 PATENT DOSSIERS
console.log("Generating 78 fictional patent dossiers...");
const patentTitles = [
  "Non-Reciprocal Acoustic Circulator with Broken Time-Reversal Symmetry",
  "Sub-Wavelength Resonant Phononic Cloak for Acoustic Shielding",
  "Heterodyne Infrasonic Demodulator Utilizing Non-Linear Air Column Mixing",
  "Apparatus and System for Continuous Psychoacoustic Pitch-Spiral Synthesis",
  "Bio-Electromagnetic Transduction Interface for Mycelial Network Acoustics",
  "Autonomous Markovian Acoustic Automaton with Stochastic Cellular Feedback",
  "Subterranean Cistern Helmholtz Acoustic Waveguide with Tunable Phase Boundary",
  "Topological Acoustic Waveguide with Protected Edge States for Directional Sound",
  "Acoustic Radiation Force Sieve for Particle Entrainment in Microfluidic Channels",
  "Method for Recovering Lost Amplitude Modulation Carriers from Magnetic Wire Media",
  "Dichotic Phantom Fundamental Auditory Generator with Adaptive Phase Offset",
  "Opto-Acoustic Interferometer for Non-Destructive Grooved Media Extraction",
  "Negative-Effective-Mass Acoustic Metamaterial Panel for Infrasonic Damping",
  "Quantum-Stochastic Phonon Squeezing Apparatus Using Coupled Nanomechanical Cantilevers",
  "Barkhausen Effect Auditory Transducer for Crystalline Structural Fatigue Detection",
  "Acoustic Diode Utilizing Asymmetric Geometry and Non-Linear Bubble Scattering",
  "Coiling-Up-Space Acoustic Metasurface for Extreme Wavefield Phase Retardation",
  "Apparatus for Bone-Conduction Cranial Spatialization in Submerged Diver Enclosures",
  "Deep-Seismic Monopole Hydro-Acoustic Triangulator for Continental Margin Faults",
  "Microtonal Scale Generator Based on Dynamic Non-Integer Pythagorean Partitions",
  "Acoustic Levitator Employing 512-Element Phased Ultrasonic Transducer Array",
  "Atmospheric Sferics Infrasound Converter for Ionospheric Wavefront Sonification",
  "Non-Markovian Phonon Decoherence Chamber for High-Q Silicon Nitride Membranes",
  "Urban Acoustic Shadow Generator Employing Destructive Metamaterial Parapets",
  "Tactile Haptic Actuator Array Delivering Mechanoreceptor-Specific Frequency Chirps",
  "Piezoresistive Graphene Diaphragm Microphone with Sub-Thermal Noise Equivalent",
  "Ferrofluid Acoustic Lens with Magnetically Modulated Spatial Curvature",
  "Autonomous Solar Infrasonic Sea Beacon with Wave-Action Kinetic Powering",
  "Acoustic Hyperbolic Metamaterial for Near-Field Sub-Diffraction Acoustic Imaging",
  "Numbers Station Cold War Radio Carrier Reconstruction and Spectral Unfolding Device",
  "Liquid-Metal Magnetohydrodynamic Acoustic Transducer for Extreme Temperature Baths",
  "Sub-Audible 4.2 Hz Acoustic Waveform Generator for Vestibular Entrainment Studies",
  "Dynamic Strange-Attractor Audio Oscillator with Real-Time Lyapunov Exponent Control",
  "Sub-Surface Audio Penetration Radar Utilizing Controlled Seismic Shear Bursts",
  "Micro-Cavitation Acoustic Synthesizer for High-Density Bubble Collapse Sonics",
  "L-System Generative Algorithmic Synthesizer with Branching Harmonic Partials",
  "Bone-Cranial Auditory Feedback Suppressor for Tinnitus Psychoacoustic Masking",
  "Acoustic Casimir Force Deflection Monitor with Cryogenic Tunneling Barrier",
  "Phononic Crystal Acoustic Lens for Three-Dimensional Focal Point Synthesis",
  "Telluric Current Acoustic Modulator Employing Underground Copper Ground-Rod Pair",
  "Bio-Piezoelectric Collagen Patch for Transcutaneous Acoustic Energy Harvesting",
  "Atmospheric Acoustic Windharp Monolith with Resonant Cavity Pipe Assemblies",
  "Single-Phonon Counting Nanomechanical Transducer Operating in Gigahertz Bandwidth",
  "Acoustic Void Generator with Active Boundary Surface Pressure Annihilation",
  "Parametric Non-Linear Ultrasonic Speaker Array for Audio Spotlighting Indoors",
  "Coral Reef Bio-Acoustic Habitat Restorer Emitting Larval Recruitment Signatures",
  "Continuous Glissando Shear-Wave Synthesizer with Circular Frequency Envelope Matrix",
  "Subway Reverberation Sump and Tuned Helmholtz Silencer for Rail Noise Absorption",
  "Casimir-Polder Acoustic Metamaterial Plate with Sub-Nanometer Gap Separation",
  "Cryogenic SQUID Magnetic Microphone for Superconducting Resonator Interrogation",
  "Percolation Cluster Acoustic Transducer for Critical State Granular Audio Synthesis",
  "Electromagnetic Cuticle Resonator for Recording Micro-Vibrational Insect Bio-Signals",
  "Macro-Scale Acoustic Invisibility Shell for Marine Hydro-Acoustic Frequencies",
  "Bose-Einstein Condensate Sound-Velocity Sump with Optical Barrier Modulation",
  "Dynamic Reaction-Diffusion Chemical Wavefront Sonification System",
  "Squeezed-Acoustic Vacuum State Generator for Ultra-Sensitive Interferometry",
  "Highway Barrier Sound-Scattering Wedge with Fractal Cross-Section Geometry",
  "Atmospheric Gravity Wave Barometer with Ultra-Low Drift Infrasonic Piezocells",
  "High-Temperature Molten Salt Acoustic Transducer for Geothermal Borehole Profiling",
  "Acoustic Cloaking Lattice Utilizing Hexagonal Pentamode Cell Micro-Architecture",
  "Phase-Conjugate Acoustic Mirror for Time-Reversed Ultrasonic Wave Focusing",
  "Stochastic Resonance Microphone Array Enhancing Sub-Threshold Bio-Signals",
  "Whispering Gallery Mode Optical Resonator for Precision Acoustic Wave Detection",
  "Rotational Gyroscopic Phonon Separator for Chirality-Dependent Acoustic Waves",
  "Glacial Crevasse Infrasound Array for Cryoseismic Calving Event Prediction",
  "Dynamic Spatial Sound Diffuser Employing Micro-Electromechanical Acoustic Valves",
  "Bio-Acoustic Neural Interface Utilizing Low-Intensity Focused Ultrasound Pulses",
  "Volcanic Infrasonic Plume Triangulator with Autonomous Long-Range Radio Mesh",
  "Nonlinear Phononic Bandgap Diode Enabling Unidirectional Acoustic Heat Transfer",
  "Optically Levitated Silica Nanosphere Acoustic Accelerometer with Sub-Atto-g Sensitivity",
  "Autonomous Urban Acoustic Flora with Integrated Carbon Capture and White-Noise Filtering",
  "Acoustic Radiation Torque Tweezers for Contactless Vortex Manipulation in Fluid",
  "Tunable Phononic Topological Insulator with Spin-Orbit Acoustic Couplings",
  "Sub-Hertz Planetary Gravitational Resonance Detection Array Using Seismo-Acoustics",
  "High-Resolution Ultrasonic Hologram Plate for Multi-Point Acoustic Levitation Traps",
  "Electrolytic Acoustic Wave Synthesizer Based on Controlled Surface-Tension Waves",
  "Sub-Basement Cistern Reverberation Simulator with Ray-Acoustic Metasurface Emulation",
  "Quantum-Limited Phonon Laser Utilizing Trapped Ion Vibrational Transitions"
];

const cpcCodes = [
  'G10K 11/178', 'H04R 1/40', 'G01H 9/00', 'B81B 7/02', 'G10H 7/00', 
  'H04S 7/00', 'G01S 15/02', 'H03H 9/02', 'G01V 1/38', 'H04B 11/00',
  'G10K 15/08', 'B06B 1/06', 'G06N 3/06', 'G01L 9/00', 'H04R 17/00'
];

const patentStatuses = ['Granted', 'Under Defense', 'Speculative Embargo', 'Public Domain Study'];

const patents = patentTitles.map((title, idx) => {
  const year = 2021 + Math.floor(idx / 15);
  const patentNum = `ZIAA-PAT-${year}-${String(idx + 1).padStart(3, '0')}`;
  const inv1 = researchers[idx % researchers.length].name;
  const inv2 = researchers[(idx + 3) % researchers.length].name;
  const status = patentStatuses[idx % patentStatuses.length];
  const cpc = cpcCodes[idx % cpcCodes.length];
  const linkedProto = `proto-${String((idx % 128) + 1).padStart(3, '0')}`;
  const schematicTypes = ['transducer', 'resonator', 'interferometer', 'circuit', 'waveguide', 'matrix'];

  return {
    patentNumber: patentNum,
    title,
    filingDate: `${year}-${String((idx % 11) + 1).padStart(2, '0')}-${String((idx % 27) + 1).padStart(2, '0')}`,
    grantDate: `${year + 1}-${String(((idx + 4) % 11) + 1).padStart(2, '0')}-${String((idx % 25) + 1).padStart(2, '0')}`,
    status,
    cpcClassification: cpc,
    inventors: [inv1, inv2],
    assignee: "Zazie Productions LLC / Zazie Institute of Applied Anomalies R&D Division",
    abstract: `A novel acoustic apparatus and method for ${title.toLowerCase()}. Comprising a multi-stage resonant assembly configured to manipulate phase fronts, acoustic impedance matching, and spectral boundary conditions. The invention overcomes classical Rayleigh diffraction limits and energy loss parameters by deploying engineered micro-architectural elements and non-linear harmonic feedback circuits.`,
    independentClaims: [
      `1. An acoustic manipulation system comprising: an acoustic input port receiving an incident pressure wave; a resonant interaction chamber having boundary surfaces tuned to a predetermined impedance profile; and an output coupler outputting an anomalous acoustic wavefront having a phase divergence exceeding non-Hermitian parity-time symmetry conditions.`,
      `2. A method for synthesizing acoustic anomalies, comprising: feeding an electrical control signal into a multi-axis transducer array; adjusting the localized bulk modulus within a phononic crystal lattice; and transducing the resulting non-linear vibration into a localized acoustic radiation pressure field.`
    ],
    dependentClaims: [
      `3. The apparatus of claim 1, wherein said boundary surfaces comprise pentamode metamaterial lattices having anisotropic elasticity tensors.`,
      `4. The apparatus of claim 1, further comprising a secondary feedback delay line coupled via a cryogenic optomechanical resonator.`,
      `5. The method of claim 2, wherein the non-linear vibration operates within an infrasonic frequency corridor between 0.05 Hz and 18.5 Hz.`,
      `6. The system of claim 1, wherein the spatial dispersion gradient produces a negative effective refractive index across at least one full octave band.`
    ],
    priorArt: [
      `US Pat. 6,847,294 (Bose Corp - Acoustic Waveguide)`,
      `EP Pat. 2,198,401 (Fraunhofer - Metamaterial Damping)`,
      `ZIAA Internal Technical Monograph 2021-04 (Rostova & Vance)`,
      `Bell Labs Technical Journal Vol. 48, No. 3 (1969)`
    ],
    linkedPrototypeId: linkedProto,
    diagramTitle: `FIG. ${idx + 1} — Cross-Sectional Schematic & Acoustic Field Flow: ${title}`,
    diagramDescription: `Orthogonal projection illustrating spatial nodal nodes, acoustic wavevectors (k_in, k_out), piezoelectric transducer interfaces, and impedance matching cavities according to ZIAA engineering specification.`,
    schematicType: schematicTypes[idx % schematicTypes.length]
  };
});

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/patentsData.ts'),
  `import { PatentDossier } from '../types/archive';\n\nexport const PATENTS_ARCHIVE: PatentDossier[] = ${JSON.stringify(patents, null, 2)};\n`
);
console.log(`Saved ${patents.length} patent dossiers.`);

// 3. GENERATE 260+ LAB LOGS
console.log("Generating 264 chronological lab logs (2021-2026)...");
const logDivisions = [
  'Division A: Metamaterials & Phononics',
  'Division B: Signal Archaeology & Carriers',
  'Division C: Psychoacoustics & Perception',
  'Division D: Generative Composition Engines',
  'Division E: Public Listening Infrastructure',
  'Division F: Bio-Magnetic Transduction',
  'Division G: Infrasonics & Seismo-Acoustics',
  'Division H: Quantum Acoustics & Black Vault'
];

const logSubjects = [
  "Harmonic phase cancellation observed at 343.2 Hz",
  "Carrier frequency drift detected in Cold War VLF tap",
  "Unexpected psychoacoustic vertigo in subject during binaural sweep",
  "Mycelial electrical spiking syncs with 14.3 Hz square wave excitation",
  "Sub-basement Cistern reverberation tail measured at 24.8 seconds",
  "Thermal runaway in piezoelectric driver rail at 140 dB SPL",
  "Anomalous sideband formation in non-Hermitian waveguide cavity",
  "Barkhausen noise pulse clusters detected in iron beam sample 09",
  "Infrasonic ground oscillation triggers seismic alarm in Sector 4",
  "Shepard-Risset pitch spiral calibration test confirms perceived infinite fall",
  "Squeezed-state phonon noise reduction verified below standard quantum limit",
  "Sub-diffraction acoustic beam collimation achieved with fractal lens",
  "Recovered shortwave burst from 1974 successfully demodulated to Morse",
  "Ferrofluid meniscus displays stable Faraday ripple patterns at 88 Hz",
  "Containment seal inspection on Project VORTEX acoustic trap",
  "Algorithmic cellular automata generates persistent self-similar polyphony",
  "Venice lagoon hydrophone records non-biological rhythmic clicks",
  "Phase-conjugate ultrasonic reflection tests show 98% energy retro-reflection",
  "Subject reports tactile auditory hallucination during 4.2 Hz infrasound test",
  "Microfluidic acoustic levitation trap holds 32 droplets in cubic array",
  "Telluric ground current sonification reveals 0.08 Hz solar wind modulation",
  "Optomechanical cavity laser probe records zero-point vibrational noise",
  "Acoustic diode exhibits 28 dB isolation ratio in reverse direction",
  "Cryogenic SQUID sensor registers minute magnetic field from vibrating speaker coil"
];

const logs = [];
const startYear = 2021;
let logCount = 0;

for (let y = 0; y < 6; y++) {
  const currentYear = startYear + y;
  const entriesThisYear = 44; // 6 * 44 = 264 logs
  for (let m = 0; m < entriesThisYear; m++) {
    logCount++;
    const month = 1 + Math.floor((m / entriesThisYear) * 12);
    const day = 1 + ((m * 7) % 27);
    const dateStr = `${currentYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const authorObj = researchers[(logCount + m) % researchers.length];
    const division = logDivisions[(m + y) % logDivisions.length];
    const subject = logSubjects[(logCount) % logSubjects.length];
    const anomalyRating = (1 + ((logCount * 3 + y) % 5));
    const clearance = anomalyRating >= 5 ? 'Level IV (Black Vault)' : anomalyRating >= 4 ? 'Level III (Restricted)' : anomalyRating >= 3 ? 'Level II (Internal)' : 'Level I (Public)';

    logs.push({
      id: `LOG-${currentYear}-${String(m + 1).padStart(3, '0')}`,
      date: dateStr,
      division,
      author: authorObj.name,
      title: `${subject} [Run #${logCount}]`,
      anomalyRating,
      content: `Laboratory observation log initiated at ${String((m * 3) % 24).padStart(2, '0')}:${String((m * 17) % 60).padStart(2, '0')} UTC. Testing apparatus was connected to ${division} high-precision test bench. Ambient temperature: ${(18.2 + (m % 5) * 0.4).toFixed(1)}°C, relative humidity ${(42 + (m % 15))}%.\n\nDuring execution of protocol ZIAA-TEST-${currentYear}-${String(m).padStart(2, '0')}, ${subject.toLowerCase()}. Primary telemetry indicated stable voltage rails with localized acoustic pressure spikes exceeding nominal calibration limits. The sensor matrix captured coherent phase lock across three adjacent octaves. Secondary safety cutoffs engaged automatically after 420 milliseconds of exposure.\n\nPreliminary conclusions suggest non-linear coupling with ambient room geometries. Further testing scheduled with revised acoustic baffle geometry.`,
      equipmentUsed: [
        'Rohde & Schwarz Audio Spectrum Analyzer UPL-40',
        'Brüel & Kjær Type 4190 1/2-Inch Free-Field Microphones',
        'Custom ZIAA Cryogenic Low-Noise Preamplifier Rack 02',
        'Teledyne LeCroy 12-Bit High-Definition Oscilloscope'
      ],
      spectrogramNote: `Distinct spectral signature visible at ${(120 + (logCount * 17) % 4800)} Hz with ${(anomalyRating * 2.4).toFixed(1)} dB harmonic overtones extending into ultrasonic boundary.`,
      tags: [division.split(':')[0], `Year-${currentYear}`, `Rating-${anomalyRating}`, clearance.replace(' ', '-')],
      clearance
    });
  }
}

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/logsData.ts'),
  `import { LabLog } from '../types/archive';\n\nexport const LAB_LOGS_ARCHIVE: LabLog[] = ${JSON.stringify(logs, null, 2)};\n`
);
console.log(`Saved ${logs.length} lab logs.`);

// 4. GENERATE 14 FIELD REPORTS
console.log("Generating 14 field reports...");
const fieldReports = [
  {
    id: "FR-01",
    stationCode: "ZIAA-SVALBARD-01",
    location: "Longyearbyen, Svalbard Archipelago, Norway",
    coordinates: "78.2232° N, 15.6267° E",
    elevation: "130m MSL",
    date: "2021-11-14",
    leadInvestigator: "Dr. Elena Rostova",
    title: "Permafrost Thermal Fracture Infrasonic Survey",
    abstract: "Continuous 30-day acoustic monitoring of subterranean permafrost micro-fractures adjacent to the Global Seed Vault utilizing subterranean optical fiber interferometry.",
    findings: "Registered 1,418 distinct micro-acoustic seismic pings in the 2.4 Hz to 18.9 Hz band. Correlated micro-fracture bursts precede surface temperature fluctuations by approximately 6 hours, confirming deep ice stress propagation.",
    ambientDecibels: "18.4 dBA",
    frequencyRange: "0.1 Hz – 120 Hz",
    equipmentCluster: ["Silixa iDAS Distributed Acoustic Fiber System", "Nanometrics Trillium Compact Seismometer", "Kevlar-Reinforced Geophone Strings"],
    status: "Continuous Stream"
  },
  {
    id: "FR-02",
    stationCode: "ZIAA-ATACAMA-04",
    location: "Chajnantor Plateau, Atacama Desert, Chile",
    coordinates: "23.0229° S, 67.7550° W",
    elevation: "5,050m MSL",
    date: "2022-03-22",
    leadInvestigator: "Dr. Kieran Vance",
    title: "Atmospheric Sferics and High-Altitude Ionospheric Whispers",
    abstract: "Deployment of broadband VLF magnetic loop antennas in the hyper-arid Atacama desert to record lightning-induced whistlers and magnetospheric hiss free from human electromagnetic interference.",
    findings: "Detected rare downward-propagating tweeks with dispersion coefficients indicating nighttime D-region ionospheric boundary shifts. Audio fidelity exceeds European base stations by 42 dB signal-to-noise margin.",
    ambientDecibels: "12.1 dBA",
    frequencyRange: "300 Hz – 30 kHz",
    equipmentCluster: ["Double-Screened Orthogonal VLF Loops", "Stanford Research Systems SR560 Preamp", "Solar-Buffered 48V Iron-Phosphate Bank"],
    status: "Continuous Stream"
  },
  {
    id: "FR-03",
    stationCode: "ZIAA-TEUFELSBERG-09",
    location: "Teufelsberg Listening Tower, Berlin, Germany",
    coordinates: "52.4975° N, 13.2415° E",
    elevation: "120m MSL",
    date: "2022-09-08",
    leadInvestigator: "Maya Lindqvist",
    title: "Radome Cavity Standing-Wave Infiltration and Cold War Ghost Harmonics",
    abstract: "Acoustic profiling inside the decommissioned geodesic radar domes of the former NSA listening station on the man-made rubble mountain in Berlin.",
    findings: "The central fiberglass dome exhibits a persistent acoustic flutter echo with a multi-pole decay contour of 16.4 seconds at 840 Hz. Wind blowing through structural tears induces self-oscillating cavity tones resembling vocal formants.",
    ambientDecibels: "34.6 dBA",
    frequencyRange: "18 Hz – 8.5 kHz",
    equipmentCluster: ["Ambisonic 7th-Order Microphone Spheres", "B&K Sound Level Calibrator 4231", "Sweep Sine Chirp Transducers"],
    status: "Expedition Concluded"
  },
  {
    id: "FR-04",
    stationCode: "ZIAA-MARIANA-HYD-03",
    location: "Challenger Deep Ridge, Western Pacific Ocean",
    coordinates: "11.3493° N, 142.1996° E",
    elevation: "-10,920m BSL",
    date: "2023-01-19",
    leadInvestigator: "Dr. Christine Abele",
    title: "Abyssal Infrasound and Whale Pelagic Channel Propagation",
    abstract: "Moored autonomous titanium hydrophone pod capturing acoustic energy propagating through the deep SOFAR channel at extreme hydrostatic pressures.",
    findings: "Recorded low-frequency vocalizations of baleen whales refracting across oceanic thermal layers over 800 kilometers away, alongside periodic seismic rumble from Philippine Sea plate subduction.",
    ambientDecibels: "68.2 dB re 1 µPa",
    frequencyRange: "1 Hz – 2 kHz",
    equipmentCluster: ["Titanium Deep-Sea Hydrophone Pod Z-9", "Piezo-Ceramic Pressure Balanced Cartridge", "Acoustic Release Transponder"],
    status: "Telemetry Lost"
  },
  {
    id: "FR-05",
    stationCode: "ZIAA-RONNE-ICE-02",
    location: "Ronne Ice Shelf, Weddell Sea, Antarctica",
    coordinates: "78.5000° S, 61.0000° W",
    elevation: "45m MSL",
    date: "2023-07-04",
    leadInvestigator: "Marcus Holloway",
    title: "Aeolian Resonance on Antarctic Snow Dune Formations",
    abstract: "Analysis of high-velocity katabatic wind-driven acoustic vibrations across wind-sculpted sastrugi snow dunes and floating ice shelf margins.",
    findings: "The ice shelf acts as a gigantic mechanical acoustic plate. Wind speeds over 25 m/s excite fundamental flexural-gravity waves at 0.035 Hz, creating an unhearable but physically tactile infrasonic hum.",
    ambientDecibels: "22.5 dBA",
    frequencyRange: "0.01 Hz – 40 Hz",
    equipmentCluster: ["Infrasonic Micro-Barometer Array", "Thermal Jacket Preamplifiers", "Satellite Iridium Uplink Terminal"],
    status: "Continuous Stream"
  },
  {
    id: "FR-06",
    stationCode: "ZIAA-CWMYSTWYTH-07",
    location: "Cwmystwyth Lead Mine Caverns, Ceredigion, Wales",
    coordinates: "52.3610° N, 3.7680° W",
    elevation: "310m MSL (Underground -180m)",
    date: "2023-11-28",
    leadInvestigator: "Dr. Alexei Voronov",
    title: "Slate Mine Sub-Harmonic Standing Waves and Water Drop Reverberation",
    abstract: "Subterranean acoustic mapping in the flooded adits of 18th-century abandoned lead and zinc slate mines to study underground wet-rock acoustic impedance.",
    findings: "The reflective density of wet slate walls creates nearly zero high-frequency absorption. Water droplet impacts generate micro-cavitation pings with phase-coherent reverberation tails exceeding 31 seconds in dead-end tunnels.",
    ambientDecibels: "14.2 dBA",
    frequencyRange: "20 Hz – 22 kHz",
    equipmentCluster: ["Omnidirectional Hydrophones", "Waterproof Laser Displacement Meters", "Binaural Dummy Head Ku-100"],
    status: "Expedition Concluded"
  },
  {
    id: "FR-07",
    stationCode: "ZIAA-BAIKONUR-VLF",
    location: "Steppe Periphery, Baikonur Cosmodrome, Kazakhstan",
    coordinates: "45.9646° N, 63.3052° E",
    elevation: "90m MSL",
    date: "2024-04-12",
    leadInvestigator: "Dr. Kieran Vance",
    title: "Rocket Exhaust Infrasonic Plume Dispersion and Earth Resonance",
    abstract: "Measurement of low-frequency tropospheric shockwaves during orbital vehicle launches, studying acoustic coupling into adjacent ground strata.",
    findings: "Exhaust plume shear creates an acoustic shock cone with peak energy centered at 1.8 Hz. Ground-wave propagation demonstrated 14-kilometer lateral penetration before decaying into the background ambient noise floor.",
    ambientDecibels: "42.0 dBA",
    frequencyRange: "0.05 Hz – 500 Hz",
    equipmentCluster: ["Differential Micro-Barographs", "3-Axis Seismic Velocity Sensors", "GPS-Synchronized Timing Clocks"],
    status: "Expedition Concluded"
  },
  {
    id: "FR-08",
    stationCode: "ZIAA-VENICE-CIS-01",
    location: "Church of San Lorenzo Subterranean Vaults, Venice, Italy",
    coordinates: "45.4372° N, 12.3485° E",
    elevation: "-2.1m MSL (Lagoon Tide Level)",
    date: "2024-06-20",
    leadInvestigator: "Renata Osei",
    title: "Hydro-Acoustic Coupling in Medieval Brick Cistern Foundations",
    abstract: "Long-term monitoring of water-borne tidal vibrations transmitting through wooden foundation piles and brick cistern chambers during Acqua Alta events.",
    findings: "The brick chambers act as acoustic bandpass filters, selectively amplifying low-frequency boat propeller vibrations at 42 Hz while completely deadening surface traffic noise above 200 Hz.",
    ambientDecibels: "28.3 dBA",
    frequencyRange: "5 Hz – 4 kHz",
    equipmentCluster: ["Submersible Hydrophone Clusters", "Structural Accelerometers", "Lagoon Water Pressure Sensors"],
    status: "Autonomous Beacon"
  },
  {
    id: "FR-09",
    stationCode: "ZIAA-ZURICH-ETH-02",
    location: "Underground Acoustic Crypt, Zurich, Switzerland",
    coordinates: "47.3769° N, 8.5417° E",
    elevation: "410m MSL",
    date: "2024-10-05",
    leadInvestigator: "Svenja Dahl",
    title: "Electromagnetic Micro-Leakage Sonification of High-Performance Superclusters",
    abstract: "Near-field electromagnetic listening around cryogenic quantum computing dilution refrigerators to sonify stray microwave and RF switching pulses.",
    findings: "The 10 mK pulse-tube cooler generates an audible periodic click at 1.4 Hz, upon which is superimposed a rich, multi-tonal spectrum of clock feedthrough from quantum gate driver lines.",
    ambientDecibels: "21.0 dBA",
    frequencyRange: "0.5 Hz – 96 kHz",
    equipmentCluster: ["Rohde & Schwarz Near-Field Sniffing Probes", "PicoScope 6000E Oscilloscope", "Ultra-Low Noise JFET Buffers"],
    status: "Continuous Stream"
  },
  {
    id: "FR-10",
    stationCode: "ZIAA-NAMIB-SAND-01",
    location: "Sossusvlei Singing Dunes, Namib Desert, Namibia",
    coordinates: "24.7275° S, 15.3444° E",
    elevation: "550m MSL",
    date: "2025-02-18",
    leadInvestigator: "Beatrix Thorne",
    title: "Granular Avalanche Acoustic Synchronization and Boom Dunes",
    abstract: "High-speed audio-visual recording of spontaneous acoustic emissions produced by dry silica sand grains avalanching down slip faces.",
    findings: "The sand dunes hum at an extraordinarily narrow monotone frequency of 98 Hz with sound levels reaching 105 dB SPL. Grain size sorting and air cushion shearing create a self-synchronizing acoustic laser effect.",
    ambientDecibels: "31.2 dBA",
    frequencyRange: "20 Hz – 5 kHz",
    equipmentCluster: ["High-Temperature Condenser Arrays", "Laser Vibrometer Polytec PDV-100", "Infrared Surface Temperature Sensors"],
    status: "Expedition Concluded"
  },
  {
    id: "FR-11",
    stationCode: "ZIAA-FUKUSHIMA-EXCL",
    location: "Coastal Abatement Zone, Fukushima Prefecture, Japan",
    coordinates: "37.4214° N, 141.0329° E",
    elevation: "22m MSL",
    date: "2025-05-30",
    leadInvestigator: "Joon-Ho Park",
    title: "Post-Anthropocene Bio-Acoustic Regeneration and Silent Infrastructure",
    abstract: "Automated audio biodiversity index tracking within abandoned residential zones and decommissioned seawalls now overgrown by coastal vegetation.",
    findings: "Bio-acoustic complexity has risen by 380% compared to baseline populated zones. Insects and coastal birds have repopulated abandoned concrete wave-breakers, utilizing structural cavities as resonant vocal amplifiers.",
    ambientDecibels: "26.4 dBA",
    frequencyRange: "50 Hz – 48 kHz",
    equipmentCluster: ["Wildlife Acoustics Song Meter SM4", "Solar Battery Enclosure", "Cellular LTE Burst Uplink"],
    status: "Autonomous Beacon"
  },
  {
    id: "FR-12",
    stationCode: "ZIAA-KRAKATOA-HYDRO",
    location: "Sunda Strait Caldron, Indonesia",
    coordinates: "6.1021° S, 105.4230° E",
    elevation: "-240m BSL",
    date: "2025-09-12",
    leadInvestigator: "Dr. Elena Rostova",
    title: "Submarine Magmatic Cavitation and Hydro-Acoustic Tremors",
    abstract: "Subsea acoustic monitoring around Anak Krakatau's submerged volcanic flank capturing magma degassing and hydrothermal boiling vents.",
    findings: "Hydrothermal boiling vents produce continuous high-frequency acoustic hiss (8 kHz - 24 kHz) punctuated by deep sub-surface explosive gas collapses at 3.1 Hz that travel over 200 kilometers across the Indonesian archipelago.",
    ambientDecibels: "84.5 dB re 1 µPa",
    frequencyRange: "0.5 Hz – 30 kHz",
    equipmentCluster: ["Fiber-Optic Hydrophone Array", "Autonomous Wave Glider", "Seabed Battery Housing"],
    status: "Continuous Stream"
  },
  {
    id: "FR-13",
    stationCode: "ZIAA-CHERNOBYL-RED",
    location: "Red Forest Zone, Pripyat Exclusion Zone, Ukraine",
    coordinates: "51.3890° N, 30.0990° E",
    elevation: "115m MSL",
    date: "2026-01-20",
    leadInvestigator: "Dr. Lyra Sterling",
    title: "Wood Acoustic Resonance and Decay in Radio-Irradiated Pine Strata",
    abstract: "Acoustic percussion analysis of standing dead pine trunks to examine cell wall density shifts and fungal mycelial colonization in radioactive soils.",
    findings: "Lignin breakdown in irradiated pine creates an anomalous high-Q acoustic ringing when mechanically struck, shifting the fundamental wood resonance from 440 Hz up to 612 Hz due to desiccated cell micro-structures.",
    ambientDecibels: "20.1 dBA",
    frequencyRange: "80 Hz – 18 kHz",
    equipmentCluster: ["Calibrated Piezo-Electric Impact Hammers", "Contact Accelerometers", "High-Resolution Spectrometer"],
    status: "Expedition Concluded"
  },
  {
    id: "FR-14",
    stationCode: "ZIAA-DEEP-MINE-ONT",
    location: "SNOLAB Creighton Mine, Sudbury, Ontario, Canada",
    coordinates: "46.4719° N, 81.1867° W",
    elevation: "-2,070m Underground",
    date: "2026-06-11",
    leadInvestigator: "Dr. Christine Abele",
    title: "Ultra-Quiet Bedrock Acoustics and Cosmic Ray Acoustic Shielding",
    abstract: "Measurement of the quietest acoustic environment in North America, located two kilometers beneath solid norite bedrock inside an active cleanroom research mine.",
    findings: "Total acoustic noise floor drops below -12 dBA in the 100 Hz to 10 kHz range. Under these conditions, the limiting noise factor becomes thermal Brownian motion of air molecules colliding with the microphone diaphragm.",
    ambientDecibels: "-11.8 dBA",
    frequencyRange: "0.01 Hz – 100 kHz",
    equipmentCluster: ["G.R.A.S. 40AU Ultra-Quiet Microphone System", "Seismic Isolator Air-Spring Table", "Cryogenic Low-Noise Digitizers"],
    status: "Continuous Stream"
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/fieldReportsData.ts'),
  `import { FieldReport } from '../types/archive';\n\nexport const FIELD_REPORTS_ARCHIVE: FieldReport[] = ${JSON.stringify(fieldReports, null, 2)};\n`
);
console.log(`Saved ${fieldReports.length} field reports.`);

// 5. GENERATE 8 TECHNICAL ESSAYS
console.log("Generating 8 technical essays...");
const essays = [
  {
    id: "essay-01",
    doi: "10.48550/ZIAA.MONO.2021.001",
    date: "2021-08-15",
    title: "Non-Hermitian Acoustics and Parity-Time Symmetry Breaking in Coupled Cavities",
    authors: ["Dr. Elena Rostova", "Dr. Alexei Voronov"],
    abstract: "We report on the physical construction and acoustic characterization of coupled phononic cavities possessing balanced gain and loss. By tuning the complex coupling coefficient κ, we observe spontaneous parity-time (PT) symmetry breaking at an exceptional point singularity, yielding non-reciprocal acoustic transmission and asymmetric energy reflection.",
    sections: [
      {
        heading: "1. Theoretical Framework and Hamiltonian Formalism",
        content: "Classical acoustic systems are traditionally constrained by reciprocity and Hermiticity, where acoustic energy is strictly conserved and Green's functions obey spatial symmetry. In this work, we introduce synthetic acoustic gain via piezoelectric feedback amplifiers coupled to lossy viscous cavities. The effective non-Hermitian Hamiltonian of the two-cavity system is described by:",
        equation: "H = [[ω₀ + iγ, κ], [κ, ω₀ - iγ]]"
      },
      {
        heading: "2. Experimental Metasurface Construction",
        content: "The experimental apparatus comprises two precision-milled aluminum Helmholtz resonators connected via an adjustable iris waveguide. Cavity A is equipped with an active synthetic negative-impedance converter injecting phase-coherent pressure gain, while Cavity B contains porous acoustic melamine foam calibrated to match the gain rate γ."
      },
      {
        heading: "3. Observation of Singular Exceptional Points",
        content: "As the inter-cavity separation distance is swept from 12 mm to 48 mm, the real eigenvalues coalesce at κ = γ = 24.6 Hz. At this exceptional point, the phase response exhibits an abrupt π/2 discontinuity, enabling unidirectional acoustic transparency with greater than 34 dB isolation in reverse propagation."
      }
    ],
    references: [
      "Bender, C. M. & Boettcher, S. Real spectra in non-Hermitian Hamiltonians having PT symmetry. Phys. Rev. Lett. 80, 5243 (1998).",
      "Fleury, R., Sounas, D. & Alù, A. Negative-refraction metamaterials for acoustic cloaking. Nat. Mater. 14, 521 (2015).",
      "ZIAA Internal Technical Directive 2021-09A (Acoustics Lab Press)."
    ],
    tags: ["Metamaterials", "Non-Hermitian", "Quantum Acoustics", "Waveguides"]
  },
  {
    id: "essay-02",
    doi: "10.48550/ZIAA.MONO.2022.004",
    date: "2022-04-10",
    title: "Signal Archaeology: Demodulation of Extinct Shortwave Carriers and Cold War Telluric Currents",
    authors: ["Dr. Kieran Vance", "Beatrix Thorne"],
    abstract: "An examination of the material remnants of mid-20th century high-frequency radio transmissions preserved within magnetic wire recordings, telluric ground currents, and non-linear chemical patina on copper telephone conductors across Eastern and Western Europe.",
    sections: [
      {
        heading: "1. The Archaeology of Discarded Electromagnetic Envelopes",
        content: "Radio signals do not merely propagate into the cosmos; substantial fractions of ground-wave emissions couple into conductive geological strata, railway tracks, and buried iron cables. Through high-gain synchronous demodulation, we recover coherent carrier ghosts that have circulated in low-loss ground-loops for over forty years."
      },
      {
        heading: "2. Telluric Current Audio Recovery Methodology",
        content: "Pairs of pure copper earth probes were driven 12 meters into water-saturated clay strata separated by 500 meters at three decommissioned military listening posts. The telluric potential difference is fed into ultra-low noise chopper-stabilized preamplifiers operating with a noise floor of 0.8 nV/√Hz."
      },
      {
        heading: "3. Reconstruction of Numbers Station Spectral Signatures",
        content: "By applying blind deconvolution and high-order cyclostationary analysis, we isolated periodic pulse repetition frequencies corresponding to the legendary 'Lincolnshire Poacher' and 'Swedish Rhapsody' transmissions, demonstrating that physical landscape memory retains modulated RF artifacts long after transmitter shutdown."
      }
    ],
    references: [
      "Vance, K. Archaeological recovery of vanished electromagnetic phenomena. J. Speculative Arch. 14, 88–114 (2020).",
      "Stankovic, L. Digital Signal Processing with Selected Topics. Springer, 2015.",
      "Ministry of Defence Declassified Signal Logs (UK National Archives FO 953/1209)."
    ],
    tags: ["Signal Archaeology", "Shortwave", "Telluric", "Cold War"]
  },
  {
    id: "essay-03",
    doi: "10.48550/ZIAA.MONO.2023.007",
    date: "2023-09-01",
    title: "Psychoacoustic Shear and the Continuous Pitch Spiral: Perceptual Illusions in Infrasound Boundaries",
    authors: ["Maya Lindqvist", "Marcus Holloway"],
    abstract: "We examine the physiological and neurological responses elicited by continuous Shepard-Risset pitch spirals when the lower spectral bound extends into the infrasonic cutoff (4 Hz to 18 Hz). We demonstrate that sub-audible beat frequencies induce vestibular nystagmus and subjective disorientation.",
    sections: [
      {
        heading: "1. Geometry of the Auditory Spiral",
        content: "The Shepard-Risset tone constructs an illusion of infinitely ascending or descending pitch by distributing sinusoidal partials separated by octave intervals across a fixed bell-shaped spectral envelope. As partials descend below 20 Hz, human sensation transitions from tonal pitch perception to discrete somatic vibration:",
        equation: "S(t) = ∑ [A_k · exp(-((f_k(t) - f_c) / σ)²) · sin(2π ∫ f_k(t) dt)]"
      },
      {
        heading: "2. Vestibular Cross-Talk and Infrasonic Somatosensation",
        content: "When partials cross the 7.83 Hz Schumann corridor, mechanoreceptors in the human mastoid and chest cavity experience localized mechanical resonance. Clinical testing across 48 monitored subjects indicated elevated galvanic skin response and temporary spatial mislocalization."
      },
      {
        heading: "3. Containment Recommendations for Acoustic Installations",
        content: "Due to cumulative autonomic nervous system stimulation, sustained exposure to low-frequency Shepard spirals in enclosed public environments must be capped at 90 seconds, with strict notch filtering applied between 4.0 Hz and 6.5 Hz."
      }
    ],
    references: [
      "Shepard, R. N. Circularity in judgments of relative pitch. J. Acoust. Soc. Am. 36, 2346 (1964).",
      "Risset, J. C. Pitch study with computer-synthesized sounds. Bell Labs Rep. (1969).",
      "Lindqvist, M. Psychoacoustic Liminality. ZIAA Monograph Series, 2023."
    ],
    tags: ["Psychoacoustics", "Infrasound", "Shepard Tones", "Vestibular"]
  },
  {
    id: "essay-04",
    doi: "10.48550/ZIAA.MONO.2024.002",
    date: "2024-02-18",
    title: "Cellular Automata as Acoustic Substrates: Ergodic Phase Transitions in Multi-Voice Synthesis",
    authors: ["Svenja Dahl"],
    abstract: "This paper develops a rigorous mathematical framework for mapping two-dimensional cellular automata lattices (specifically Wolfram and Conway variants) directly onto polyphonic microtonal acoustic oscillators, treating sound generation as an emergent thermodynamic property.",
    sections: [
      {
        heading: "1. State Space Mapping and Discrete Acoustic Manifolds",
        content: "Traditional algorithmic composition treats computers as score generators. In contrast, our approach treats the cellular automaton state matrix directly as an array of coupled micro-mechanical oscillators, where cell state transitions act as impulsive Dirac excitations into tuned physical waveguides."
      },
      {
        heading: "2. Lyapunov Exponents and Emergent Rhythmic Structures",
        content: "By varying the neighbor coupling rule from Class I (homogeneous) to Class IV (complex edge-of-chaos), the acoustic emission shifts smoothly from static droning to non-repeating yet structurally cohesive polyrhythmic textures with long-range power-law correlations (1/f noise)."
      }
    ],
    references: [
      "Wolfram, S. Cellular Automata and Complexity. Addison-Wesley, 1994.",
      "Xenakis, I. Formalized Music: Thought and Mathematics in Composition. Pendragon Press, 1992."
    ],
    tags: ["Generative Composition", "Cellular Automata", "Markov", "Microtonal"]
  },
  {
    id: "essay-05",
    doi: "10.48550/ZIAA.MONO.2024.009",
    date: "2024-11-12",
    title: "Subterranean Cistern Acoustics: Spatial Impulse Response Decomposition in Giant Enclosed Voids",
    authors: ["Renata Osei", "Joon-Ho Park"],
    abstract: "A comparative acoustic survey of historic subterranean water cisterns across Europe and the Middle East, analyzing the decay dynamics of low-frequency standing waves and the creation of synthetic public acoustic infrastructure.",
    sections: [
      {
        heading: "1. The Physics of Giant Masonry Cavities",
        content: "Underground cisterns feature thick brick or stone perimeter walls backed by millions of tons of compacted earth. This yields an acoustic reflection coefficient exceeding 0.995 across the entire audible spectrum, generating room impulse response tails lasting up to 34 seconds."
      },
      {
        heading: "2. Real-Time Ray Tracing and Modal Decomposition",
        content: "Using high-order Ambisonic measurement microphones and 3D LiDAR point clouds, we computed modal frequency distribution maps for the Basilica Cistern (Istanbul) and the San Lorenzo Vaults (Venice), uncovering dense modal clustering in the 50 Hz to 120 Hz band."
      }
    ],
    references: [
      "Kuttruff, H. Room Acoustics. 5th edn, Spon Press, 2009.",
      "Osei, R. Architectural Resonances of the Underworld. ZIAA Press, 2024."
    ],
    tags: ["Public Infrastructure", "Acoustic Ray Tracing", "Reverberation", "Cisterns"]
  },
  {
    id: "essay-06",
    doi: "10.48550/ZIAA.MONO.2025.003",
    date: "2025-03-24",
    title: "Bio-Magnetic Transduction in Mycelial Networks: Action Potentials as Sonic Modulation Sources",
    authors: ["Dr. Tariq Al-Mansoor"],
    abstract: "Living mycelial hyphae generate slow extracellular voltage spikes in response to environmental stimuli. We describe a microelectrode array and trans-impedance amplifier system that sonifies these biophysical pulses into microtonal acoustic structures.",
    sections: [
      {
        heading: "1. Bio-Electrical Dynamics of Fungal Hyphae",
        content: "Fungal electrical spikes have amplitudes ranging from 0.05 mV to 5 mV and durations from 1 to 20 minutes. These slow waveforms cannot be heard directly; instead, they serve as modulating voltages controlling carrier frequencies and spectral envelopes in analog synth matrices."
      },
      {
        heading: "2. Transduction Circuitry and Micro-Electrode Fabrication",
        content: "Gold-plated tungsten micro-needles (10 µm tip diameter) were inserted directly into Pleurotus ostreatus colonies growing in agar cultures inside a Faraday cage. Signals were digitized at 24-bit/96kHz with high input impedance (>10¹² Ω)."
      }
    ],
    references: [
      "Adamatzky, A. Towards fungal computer. Interface Focus 9, 20190012 (2019).",
      "Al-Mansoor, T. Bio-Acoustic Coupling. ZIAA Press, 2025."
    ],
    tags: ["Bio-Magnetic", "Mycelium", "Transduction", "Microtonal"]
  },
  {
    id: "essay-07",
    doi: "10.48550/ZIAA.MONO.2025.011",
    date: "2025-08-30",
    title: "Quantum Phononics: Single-Phonon Generation and Squeezed Acoustic States at Cryogenic Temperatures",
    authors: ["Dr. Christine Abele"],
    abstract: "We review experimental progress in cooling macroscopic mechanical resonators to their quantum ground state (n < 0.1) and generating non-classical states of sound, including squeezed acoustic states and single-phonon Fock states.",
    sections: [
      {
        heading: "1. Ground-State Cooling of Silicon Nitride Membranes",
        content: "By coupling a 1 mm² stoichiometric Si₃N₄ membrane inside an optical Fabry-Pérot cavity held at 20 mK in a dilution refrigerator, optomechanical radiation pressure damping cools the fundamental mechanical vibrational mode (1.45 MHz) to the quantum ground state.",
        equation: "⟨n⟩ = k_B · T / (ℏ · ω_m) < 0.05"
      },
      {
        heading: "2. Squeezed Acoustic Fluctuations",
        content: "Applying two-tone parametric driving squeezes mechanical position quadrature fluctuations by 4.8 dB below the standard quantum zero-point limit, proving that macroscopic sound can exhibit quantum uncertainty manipulation."
      }
    ],
    references: [
      "Aspelmeyer, M., Kippenberg, T. J. & Marquardt, F. Cavity optomechanics. Rev. Mod. Phys. 86, 1391 (2014).",
      "Abele, C. Macroscopic Quantum Phononics. ZIAA Research Monograph, 2025."
    ],
    tags: ["Quantum Acoustics", "Phonons", "Optomechanics", "Cryogenics"]
  },
  {
    id: "essay-08",
    doi: "10.48550/ZIAA.MONO.2026.001",
    date: "2026-02-14",
    title: "Forensics of Acoustic Failures: Structural Rupture and Containment in Extreme Sound Fields",
    authors: ["Dr. Lyra Sterling"],
    abstract: "A definitive technical review of 18 catastrophic failures recorded across ZIAA's five-year operational history, focusing on cavitation chamber explosions, structural fatigue from sustained standing waves, and containment protocols for hazardous acoustic anomalies.",
    sections: [
      {
        heading: "1. The Thermodynamics of Acoustic Rupture",
        content: "Sound fields exceeding 165 dB SPL in enclosed gas or fluid volumes generate extreme acoustic streaming, shockwave formation, and rapid localized temperature increases. In three separate incidents, structural aluminum and titanium enclosures suffered high-cycle fatigue fractures within minutes of resonance excitation."
      },
      {
        heading: "2. Containment Protocol Evolution (Level I to Level IV)",
        content: "We document the evolution of laboratory safety enclosures from simple foam-lined rooms to the present Black Vault standard: triple-walled decoupled steel containers suspended on elastomeric bearings with continuous helium purge lines."
      }
    ],
    references: [
      "Sterling, L. Structural Forensics of Extreme Acoustics. ZIAA Special Report 2026-IV.",
      "Hamilton, M. F. & Blackstock, D. T. Nonlinear Acoustics. Academic Press, 1998."
    ],
    tags: ["Containment", "Failure Forensics", "Black Vault", "Safety Protocol"]
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/essaysData.ts'),
  `import { TechnicalEssay } from '../types/archive';\n\nexport const TECHNICAL_ESSAYS_ARCHIVE: TechnicalEssay[] = ${JSON.stringify(essays, null, 2)};\n`
);
console.log(`Saved ${essays.length} technical essays.`);

// 6. GENERATE 18 FAILED PROJECTS (BLACK VAULT)
console.log("Generating 18 decommissioned failed projects...");
const failedProjects = [
  {
    id: "FAIL-01",
    code: "ZIAA-BV-001",
    name: "Project VORTEX-7: Continuous Toroidal Acoustic Shear Generator",
    operatingPeriod: "Jan 2021 – Oct 2021",
    causeOfFailure: "Catastrophic mechanical resonance detachment and structural housing shear",
    failureMode: "The 36-phase piezoelectric driver ring developed an uncontrolled positive feedback loop at 1,240 Hz, resulting in a sudden 178 dB SPL pulse that shattered all observation window quartz panes and fractured the concrete foundation mount.",
    safetyHazard: "Severe permanent hearing damage risk, explosive fragmentation of quartz glass, structural foundation cracking.",
    containmentProtocol: "Apparatus was depowered via explosive pyrotechnic circuit breakers. Remaining stator ring encased in 4-ton reinforced lead-polymer concrete sarcophagus in Vault Room B-04.",
    postMortemSummary: "Analysis revealed that acoustic radiation torque induced unmodeled torsional shear across the beryllium stator bolts. All future high-pressure acoustic vortex experiments require redundant mechanical brake locks.",
    decommissioningOfficer: "Dr. Lyra Sterling"
  },
  {
    id: "FAIL-02",
    code: "ZIAA-BV-002",
    name: "Sub-Acoustic Excavation Drill 02 (Ground Thumper Beta)",
    operatingPeriod: "Mar 2021 – Aug 2021",
    causeOfFailure: "Soil liquefaction and uncontained sinking into laboratory sub-basement substrate",
    failureMode: "Continuous 3.2 Hz infrasonic pulses matched the natural shear frequency of the saturated alluvial soil beneath Lab Building C, causing the 12-ton test rig to sink 1.8 meters within 14 minutes.",
    safetyHazard: "Sub-surface soil liquefaction, structural foundation compromise of adjacent residential buildings.",
    containmentProtocol: "Excavated using hydraulic cranes; hydraulic fluid drained and mechanical piston welded shut. Placed on permanent static display.",
    postMortemSummary: "Infrasonic acoustic impedance matching cannot be safely tested on unconsolidated riverbed geology without deep-bedrock pile anchoring.",
    decommissioningOfficer: "Marcus Holloway"
  },
  {
    id: "FAIL-03",
    code: "ZIAA-BV-003",
    name: "Sylvan Resonator Array Beta: Tree Canopy Acoustic Interceptor",
    operatingPeriod: "May 2022 – Nov 2022",
    causeOfFailure: "Severe biological stress and mass defoliation in test forest plot",
    failureMode: "Broadband acoustic coupling directed at living deciduous trees caused rapid cavitation inside xylem vascular channels, leading to widespread premature leaf shedding within 72 hours.",
    safetyHazard: "Severe ecological damage to experimental plant tissue, localized micro-fauna desertion.",
    containmentProtocol: "Field test permits revoked. Apparatus dismantled into individual transducer elements and archived under ecological quarantine.",
    postMortemSummary: "Plant xylem acoustic resonance occurs at much lower threshold pressures than previously estimated in literature.",
    decommissioningOfficer: "Dr. Tariq Al-Mansoor"
  },
  {
    id: "FAIL-04",
    code: "ZIAA-BV-004",
    name: "Bio-Membrane Cavitator Mk III: Living Lipid Sonic Transducer",
    operatingPeriod: "Aug 2022 – Jan 2023",
    causeOfFailure: "Biological contamination and rapid membrane lysis under ultrasonic excitation",
    failureMode: "Lipid bilayer membranes designed to transduce ultrasonic vibrations decomposed into aerosolized organic vapors following thermal spike.",
    safetyHazard: "Aerosolized biological organic compounds, biohazard Level 2 breach in cleanroom.",
    containmentProtocol: "Autoclaved at 134°C; test chambers irradiated with high-intensity ultraviolet C and sealed in biocontainment drums.",
    postMortemSummary: "Organic lipid acoustic transducers require continuous cryogenic micro-fluidic cooling to prevent mechanical shear rupture.",
    decommissioningOfficer: "Dr. Christine Abele"
  },
  {
    id: "FAIL-05",
    code: "ZIAA-BV-005",
    name: "Project PHANTOM-HORN: Megasonic Inaudible Crowd Dispersal Probe",
    operatingPeriod: "Feb 2023 – Jun 2023",
    causeOfFailure: "Severe autonomic nervous system disruption in laboratory technicians",
    failureMode: "Directional 19.5 Hz acoustic beam reflected off steel warehouse ceiling, causing severe nausea, involuntary eye tremor, and disorientation among researchers stationed outside the intended target zone.",
    safetyHazard: "Severe vestibular disorientation, nausea, panic response, acute spatial misperception.",
    containmentProtocol: "Immediately classified under Level IV Black Vault embargo. Electronic drive firmware erased and physical horn throat filled with expanding polyurethane acoustic foam.",
    postMortemSummary: "Secondary acoustic reflection coefficients in industrial spaces prevent directional isolation of infrasonic wavefronts.",
    decommissioningOfficer: "Dr. Lyra Sterling"
  },
  {
    id: "FAIL-06",
    code: "ZIAA-BV-006",
    name: "Super-Cavitation Water Siren 01: Hydro-Acoustic Pulse Projector",
    operatingPeriod: "Nov 2022 – Apr 2023",
    causeOfFailure: "Cavitation erosion destroyed impeller blades in under 3 hours of operation",
    failureMode: "Rotary impeller designed to generate synchronized underwater shock waves suffered catastrophic pitting and blade detachment due to extreme vapor bubble implosions.",
    safetyHazard: "High-velocity metal shrapnel within water pressure vessel, risk of hull breach.",
    containmentProtocol: "Water tank drained; fragmented titanium blades recovered and mounted on acrylic failure analysis plaque in Vault C.",
    postMortemSummary: "Material erosion rates in high-intensity cavitation acoustic sirens exceed conventional hydrodynamic fatigue models by two orders of magnitude.",
    decommissioningOfficer: "Dr. Alexei Voronov"
  },
  {
    id: "FAIL-07",
    code: "ZIAA-BV-007",
    name: "Deep Borehole Acoustic Transponder: Lithospheric Waveform Injector",
    operatingPeriod: "Jul 2023 – Dec 2023",
    causeOfFailure: "Transponder jammed at 2,400m depth; cable severance during seismic micro-tremor",
    failureMode: "Acoustic pulses injected into tectonic fault triggered a localized magnitude 1.2 micro-earthquake, causing borehole wall shear that sheared the armored signal umbilical cable.",
    safetyHazard: "Seismic trigger hazard, total loss of deep telemetry instrumentation.",
    containmentProtocol: "Borehole capped with 500 meters of bentonite-cement slurry; surface monitoring station decommissioned.",
    postMortemSummary: "Active acoustic stimulation of stressed fault lines carries unpredictable trigger risks even at modest input acoustic power levels.",
    decommissioningOfficer: "Marcus Holloway"
  },
  {
    id: "FAIL-08",
    code: "ZIAA-BV-008",
    name: "Bismuth Whispering Chamber Alpha: Superconducting Sonic Trap",
    operatingPeriod: "Oct 2023 – Mar 2024",
    causeOfFailure: "Cryogenic vacuum vessel thermal short and acoustic thermal runaway",
    failureMode: "Vibrational energy from 10 MHz surface acoustic wave transducer leaked into the 4 Kelvin liquid helium bath, initiating rapid helium boil-off and rupture of the burst disk.",
    safetyHazard: "Cryogenic asphyxiation hazard, overpressure vessel rupture.",
    containmentProtocol: "Vessel evacuated, purged with dry nitrogen, and transferred to decommissioned cryo-storage depot.",
    postMortemSummary: "Acoustic isolation between GHz phononic devices and cryogenic cold stages requires multi-stage acoustic phononic bandgap filters.",
    decommissioningOfficer: "Dr. Christine Abele"
  },
  {
    id: "FAIL-09",
    code: "ZIAA-BV-009",
    name: "Zero-Mass Acoustic Reflector Core: Metamaterial Negative Density Shell",
    operatingPeriod: "Jan 2024 – Jun 2024",
    causeOfFailure: "Internal membrane rupture under continuous sinusoidal testing at 220 Hz",
    failureMode: "Pre-stressed silicone-rubber membranes within the hexagonal metamaterial cells experienced micro-tearing, eliminating the negative effective mass property and collapsing the bandgap.",
    safetyHazard: "Loss of acoustic attenuation, high-SPL blast exposure to test operators.",
    containmentProtocol: "Membranes replaced with rigid steel shims; unit locked into inert non-functional test rig.",
    postMortemSummary: "Elastomeric metamaterials suffer from severe viscoelastic aging and cannot withstand sustained acoustic power densities exceeding 10 W/m².",
    decommissioningOfficer: "Dr. Elena Rostova"
  },
  {
    id: "FAIL-10",
    code: "ZIAA-BV-010",
    name: "Project EIDOLON: Sub-Audible Psychoacoustic Entrainment Helmet",
    operatingPeriod: "Apr 2024 – Sep 2024",
    causeOfFailure: "Induced temporary retrograde amnesia and severe migraine in volunteer subject",
    failureMode: "Cross-frequency coupling between 7 Hz binaural beats and 40 Hz gamma tactile stimulation triggered an unpredicted paroxysmal EEG discharge during calibration run.",
    safetyHazard: "Neurological seizure induction risk, persistent cognitive disorientation.",
    containmentProtocol: "Subject fully recovered after 48 hours. Research protocol permanently halted by ZIAA Ethics and Safety Oversight Committee.",
    postMortemSummary: "Synchronous multi-modal sensory driving at brainwave resonant frequencies presents unacceptable clinical risk.",
    decommissioningOfficer: "Maya Lindqvist"
  },
  {
    id: "FAIL-11",
    code: "ZIAA-BV-011",
    name: "Ferrofluid Acoustic Vortex Projector: Magnetic Sonic Swirl Tube",
    operatingPeriod: "Aug 2024 – Jan 2025",
    causeOfFailure: "Ferrofluid aerosolization and magnetic stator coil burnout",
    failureMode: "Rotating acoustic field tore droplets from the ferrofluid free surface, spraying colloidal magnetite across the 10 kV magnetic driver coils and causing an instant arc-flash fire.",
    safetyHazard: "Toxic magnetic aerosol inhalation, electrical fire and high-voltage arc flash.",
    containmentProtocol: "Fire suppressed via automated Halon system. Scraps sealed in hazardous material drums.",
    postMortemSummary: "Acoustic vortex manipulation of magnetic liquids requires sealed toroidal enclosures with zero exposed free surfaces.",
    decommissioningOfficer: "Dr. Alexei Voronov"
  },
  {
    id: "FAIL-12",
    code: "ZIAA-BV-012",
    name: "Sub-Seismic Telluric Ear: Continental Plate Acoustic Tap",
    operatingPeriod: "Nov 2024 – Apr 2025",
    causeOfFailure: "Lightning strike conducted directly into subterranean preamplifiers",
    failureMode: "A severe thunderstorm 25 miles away coupled massive electrical energy into the 1-kilometer ground-wire array, vaporizing all input protection diodes and melting the digitizer chassis.",
    safetyHazard: "High-voltage lightning surge, total equipment vaporization.",
    containmentProtocol: "Cables uncoupled; ground station replaced with galvanically isolated fiber-optic telemetry.",
    postMortemSummary: "Long-baseline telluric listening setups require gas-discharge tube arrestors and optical galvanic isolation at every transducer node.",
    decommissioningOfficer: "Beatrix Thorne"
  },
  {
    id: "FAIL-13",
    code: "ZIAA-BV-013",
    name: "Opto-Acoustic Laser Microphone: Long-Range Window Vibrometer Mk IV",
    operatingPeriod: "Feb 2025 – Jul 2025",
    causeOfFailure: "Optical retro-reflection blinding and regulatory airspace interference incident",
    failureMode: "Infrared laser beam reflected off high-altitude atmospheric inversion layer, triggering automated alerts from civilian aviation radar systems.",
    safetyHazard: "Aviation laser safety violation, potential eye hazard.",
    containmentProtocol: "Laser decommissioned; firmware locked to sub-100-meter indoor range only.",
    postMortemSummary: "Open-air laser vibrometry requires strict beam-path enclosures and automated ceilometer radar interlocks.",
    decommissioningOfficer: "Dr. Kieran Vance"
  },
  {
    id: "FAIL-14",
    code: "ZIAA-BV-014",
    name: "Project SONO-LATTICE: Self-Replicating Acoustic Cellular Automaton",
    operatingPeriod: "May 2025 – Oct 2025",
    causeOfFailure: "Buffer overflow runaway and speaker driver voice-coil burnout",
    failureMode: "Recursive audio feedback loop generated high-frequency ultrasonic oscillation at 38 kHz that was inaudible to researchers but melted 16 compression driver voice coils within 90 seconds.",
    safetyHazard: "Ultrasonic radiation exposure, equipment fire from overheated copper voice coils.",
    containmentProtocol: "Hardware ultrasonic brickwall analog lowpass filters mandated on all generative outputs.",
    postMortemSummary: "Autonomous algorithmic systems must feature physical analog power-limiting relays that cannot be bypassed by software.",
    decommissioningOfficer: "Svenja Dahl"
  },
  {
    id: "FAIL-15",
    code: "ZIAA-BV-015",
    name: "Deep Mine Resonant Pipe: Sub-Acoustic Organ Column",
    operatingPeriod: "Aug 2025 – Dec 2025",
    causeOfFailure: "Mine shaft wall rockfall induced by sustained standing wave at 16 Hz",
    failureMode: "A 40-meter vertical ventilation shaft tuned to its fundamental organ-pipe resonance at 16 Hz dislodged 8 tons of loose rock from the unlined shaft walls.",
    safetyHazard: "Rockfall, catastrophic mine shaft blockage, underground entrapment hazard.",
    containmentProtocol: "Pneumatic air blowers disconnected; shaft permanently sealed with steel mesh and shotcrete.",
    postMortemSummary: "Acoustic resonance testing in mining excavations requires comprehensive geotechnical rock-bolt stabilization prior to acoustic loading.",
    decommissioningOfficer: "Joon-Ho Park"
  },
  {
    id: "FAIL-16",
    code: "ZIAA-BV-016",
    name: "Phonon Laser Superfluid Tank: Liquid Helium Sound Amplification Rig",
    operatingPeriod: "Nov 2025 – Feb 2026",
    causeOfFailure: "Superfluid film creep and second-sound acoustic oscillation instability",
    failureMode: "Second sound (temperature wave) mode coupled into first sound (pressure wave) mode, causing an acoustic oscillation that broke the optical interferometric readout windows.",
    safetyHazard: "High-pressure cryogenic burst, vacuum degradation.",
    containmentProtocol: "Apparatus quarantined in Vault C-01 awaiting redesign of second-sound acoustic dampers.",
    postMortemSummary: "Nonlinear phonon interactions in superfluid Helium-4 require active phase feedback to suppress spontaneous mode competition.",
    decommissioningOfficer: "Dr. Christine Abele"
  },
  {
    id: "FAIL-17",
    code: "ZIAA-BV-017",
    name: "Urban Acoustic Cloak Parapet: Anti-Noise Facade Panel Alpha",
    operatingPeriod: "Jan 2026 – May 2026",
    causeOfFailure: "Acoustic energy redirection created an intense noise hotspot in adjacent courtyard",
    failureMode: "The metamaterial facade successfully eliminated traffic noise for building occupants, but redirected the reflected sound waves into a focused 88 dBA beam aimed at a neighboring kindergarten playground.",
    safetyHazard: "Extreme localized noise pollution, severe public complaints and regulatory municipal fines.",
    containmentProtocol: "Panels removed within 48 hours; replaced with conventional porous sound-absorption mineral wool.",
    postMortemSummary: "Acoustic cloaking designs based on pure reflection must account for energy conservation in dense urban environments.",
    decommissioningOfficer: "Renata Osei"
  },
  {
    id: "FAIL-18",
    code: "ZIAA-BV-018",
    name: "Bose-Einstein Condensate Sound-Horizon Simulator (Sonic Black Hole)",
    operatingPeriod: "Mar 2026 – Jul 2026",
    causeOfFailure: "Magnetic trap field collapse and rubidium vapor condensation onto laser windows",
    failureMode: "High-power acoustic transducer modulating the supersonic flow profile induced radiofrequency interference into the magnetic coil power supply, dropping the trap.",
    safetyHazard: "Ultra-high vacuum contamination, loss of rubidium atomic source.",
    containmentProtocol: "Vacuum chamber baked out at 250°C; transducer drive lines shielded with double-layer mu-metal conduit.",
    postMortemSummary: "Acoustic coupling into atomic traps requires optical rather than piezoelectric transducer actuation to avoid electromagnetic crosstalk.",
    decommissioningOfficer: "Dr. Elena Rostova"
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/failedProjectsData.ts'),
  `import { FailedProject } from '../types/archive';\n\nexport const FAILED_PROJECTS_ARCHIVE: FailedProject[] = ${JSON.stringify(failedProjects, null, 2)};\n`
);
console.log(`Saved ${failedProjects.length} failed projects.`);

// 7. GENERATE 16 EXHIBITIONS & PUBLIC INFRASTRUCTURE
console.log("Generating 16 exhibitions & public infrastructure records...");
const exhibitions = [
  {
    id: "EXH-01",
    title: "The Silent Cistern: Sub-Audible Resonances of Venice",
    venue: "Venice Biennale of Architecture (Special Acoustic Pavilion)",
    city: "Venice, Italy",
    year: 2021,
    curator: "Renata Osei & Dr. Elena Rostova",
    description: "An architectural listening pavilion constructed inside the flooded crypt of San Lorenzo, featuring a 24-channel hydrophone array transducing the microscopic movements of Venice's wooden pile foundations into audible drone architecture.",
    technicalSetup: "24 custom piezoceramic hydrophones, 8 sub-bass tactile floor transducers, Ambisonic decoding matrix.",
    audienceReception: "Over 85,000 visitors experienced the installation; widely praised for revealing the hidden mechanical vulnerability of the historic city.",
    archivalArtifacts: ["Original 24-channel Master DSD Tape", "Exhibition Monograph Catalogue #4", "Lagoon Water Hydrophone Artifact"]
  },
  {
    id: "EXH-02",
    title: "Signals from the Dead Cold: Archaeology of Ghost Frequencies",
    venue: "ZKM | Center for Art and Media",
    city: "Karlsruhe, Germany",
    year: 2022,
    curator: "Dr. Kieran Vance",
    description: "A retrospective exhibition featuring 14 working historical signal demodulators recovering radio whispers from defunct Cold War communication towers across the Baltic and Black Seas.",
    technicalSetup: "3 telluric ground-loop simulators, phosphor-screen waterfall displays, 10-meter ferrite rod receiving antenna.",
    audienceReception: "Selected as one of the top experimental media exhibitions in Europe for 2022.",
    archivalArtifacts: ["Magnetic Wire Recording Cartridges", "Declassified Demodulator Chassis #04", "Exhibition Blueprint Posters"]
  },
  {
    id: "EXH-03",
    title: "The Continuous Horizon: Psychoacoustic Fall",
    venue: "IRCAM / Centre Pompidou (Espace de Projection)",
    city: "Paris, France",
    year: 2022,
    curator: "Maya Lindqvist",
    description: "An anechoic chamber installation subjecting individual listeners to a 12-minute continuous Shepard-Risset pitch spiral descending through the hearing threshold into 4 Hz somatic infrasound.",
    technicalSetup: "IRCAM variable acoustic wall panels configured to max absorption; 4 sub-woofer pneumatic horns; EEG monitoring chair.",
    audienceReception: "Intense physical experience; mandatory medical waivers required for participants.",
    archivalArtifacts: ["Subject EEG Response Telemetry Logs", "Custom Analog Pitch Spiral Module", "Exhibition Pamphlet (French/English)"]
  },
  {
    id: "EXH-04",
    title: "Algorithmic Substrates: The Self-Composing Organism",
    venue: "Sonic Acts Biennial",
    city: "Amsterdam, Netherlands",
    year: 2023,
    curator: "Svenja Dahl",
    description: "A generative cellular automaton sound installation occupying an abandoned railway warehouse, where 64 acoustic speakers act as autonomous living cells exchanging spatial microtonal pulses.",
    technicalSetup: "64 active acoustic node units connected via distributed CAN-bus network; FPGA cellular automaton processor.",
    audienceReception: "Celebrated for its complex emergent acoustic behaviors that never repeated over 30 days of continuous operation.",
    archivalArtifacts: ["FPGA VHDL Synthesis Code Archive", "Physical Node PCB Rev 3", "Sonic Acts Curatorial Essay"]
  },
  {
    id: "EXH-05",
    title: "Infrasonic Sanctuaries: Civic Acoustic Shadow Benches",
    venue: "Rotterdam International Architecture Biennale",
    city: "Rotterdam, Netherlands",
    year: 2023,
    curator: "Renata Osei & Marcus Holloway",
    description: "Six public acoustic benches installed in busy urban squares that deploy acoustic metamaterial backrests to cancel 85% of traffic noise, creating silent sanctuary pockets without headphones.",
    technicalSetup: "Sub-wavelength Helmholtz-fractal acoustic metamaterial panels integrated into cast concrete urban seating.",
    audienceReception: "Adopted by the City of Rotterdam for permanent installation in three major transit hubs.",
    archivalArtifacts: ["Cast Concrete Prototype Moulds", "Acoustic Decibel Field Test Logs", "Municipal Architecture Award Plaque"]
  },
  {
    id: "EXH-06",
    title: "Xylem Whispers: The Acoustic Vascularity of Trees",
    venue: "Mass MoCA (Massachusetts Museum of Contemporary Art)",
    city: "North Adams, MA, United States",
    year: 2024,
    curator: "Dr. Tariq Al-Mansoor",
    description: "An indoor grove of living birch trees outfitted with custom ultrasonic contact microphones that amplify the microscopic acoustic clicks of xylem water cavitations into a haunting spatial symphony.",
    technicalSetup: "32 high-frequency ultrasonic transducers (100 kHz band), real-time analog heterodyne pitch down-converters, 16-channel spatial array.",
    audienceReception: "Deep emotional engagement from visitors who listened to trees 'drinking' and responding to humidity changes.",
    archivalArtifacts: ["Live Tree Transducer Clamps", "Ultrasonic Spectral Tape Master", "Exhibition Catalogue Essay"]
  },
  {
    id: "EXH-07",
    title: "Phononic Vaults: The Architecture of Negative Mass",
    venue: "Tokyo Experimental Art Festival (Museum of Contemporary Art Tokyo)",
    city: "Tokyo, Japan",
    year: 2024,
    curator: "Dr. Elena Rostova & Joon-Ho Park",
    description: "A walk-through acoustic labyrinth constructed from engineered phononic crystal blocks that block specific musical pitches while allowing others to pass with zero reflection.",
    technicalSetup: "400 precision-machined acrylic and aluminum pentamode metamaterial blocks assembled into an acoustic maze.",
    audienceReception: "Visitors described stepping into 'pools of impossible silence' inside the crowded museum hall.",
    archivalArtifacts: ["Pentamode Lattice Unit Cells", "Acoustic Transmission Matrix Measurements", "Exhibition Floorplan Schematics"]
  },
  {
    id: "EXH-08",
    title: "The Mariana Abyss: Deep Sound Channels of the Earth",
    venue: "Natural History Museum",
    city: "London, United Kingdom",
    year: 2024,
    curator: "Dr. Christine Abele",
    description: "A darkened sensory immersion chamber reproducing hydro-acoustic recordings from Challenger Deep, calibrated to true ocean ambient pressure levels through floor-mounted seismic shakers.",
    technicalSetup: "8 high-displacement hydraulic sub-woofers, 360-degree cylindrical spatial sound curtain, titanium hydrophone display casing.",
    audienceReception: "Commended by acoustic oceanographers and the public alike for its scientific rigor and visceral physical impact.",
    archivalArtifacts: ["Titanium Deep-Sea Hydrophone Pressure Shell", "10-Channel Abyssal Sound Master", "Educational Monograph"]
  },
  {
    id: "EXH-09",
    title: "Ghost in the Wire: Early Sound Carrier Reconstruction",
    venue: "Ars Electronica",
    city: "Linz, Austria",
    year: 2025,
    curator: "Beatrix Thorne & Dr. Kieran Vance",
    description: "A working laboratory showcase demonstrating the opto-acoustic laser extraction of historical audio from damaged early 20th-century magnetic wire and shellac discs.",
    technicalSetup: "Custom optical laser interferometer rig, real-time algorithmic scratch and wow-and-flutter suppression processor.",
    audienceReception: "Awarded the Golden Nica Honorary Mention in Digital Music and Sound Art.",
    archivalArtifacts: ["Laser Demodulator Prototype 01", "Restored 1948 Wire Spool Artifact", "Ars Electronica Certificate"]
  },
  {
    id: "EXH-10",
    title: "Autonomous Sea Sirens: Acoustic Ocean Beacons",
    venue: "Lisbon Triennale of Ocean Architecture",
    city: "Lisbon, Portugal",
    year: 2025,
    curator: "Renata Osei",
    description: "Floating autonomous acoustic beacons moored in the Tagus estuary that convert tidal kinetic energy into resonant acoustic tones alerting marine life away from commercial shipping lanes.",
    technicalSetup: "Rotary pendulum kinetic generators, cast bronze resonant horns, underwater directional acoustic projectors.",
    audienceReception: "International media coverage for merging speculative acoustic art with marine biodiversity protection.",
    archivalArtifacts: ["Bronze Siren Prototype 02", "Tagus River Acoustic Field Survey", "Marine Biology Endorsement Letter"]
  },
  {
    id: "EXH-11",
    title: "Zero-Point Symphony: Listening to Quantum Fluctuations",
    venue: "CERN Science Gateway",
    city: "Geneva, Switzerland",
    year: 2025,
    curator: "Dr. Christine Abele & Dr. Alexei Voronov",
    description: "An auditory translation of quantum vacuum fluctuations and phonon tunneling measured inside dilution refrigerators at sub-Kelvin temperatures.",
    technicalSetup: "Real-time data feed from Zurich quantum laboratory, 128-channel discrete binaural listening pods.",
    audienceReception: "Attended by leading quantum physicists and the public; praised as a poetic realization of quantum mechanics.",
    archivalArtifacts: ["SQUID Preamplifier Display Unit", "CERN Monograph Publication", "Audio Data Stream Master Drive"]
  },
  {
    id: "EXH-12",
    title: "The Ruined Antenna: Cold War Sferics and Radar Monuments",
    venue: "Berghain Halle / CTM Festival",
    city: "Berlin, Germany",
    year: 2025,
    curator: "Maya Lindqvist & Dr. Kieran Vance",
    description: "A massive multi-channel spatial sound intervention utilizing impulse responses and field recordings captured inside Teufelsberg radar domes and Baltic listening towers.",
    technicalSetup: "32-channel surround Meyer Sound array, custom tactile infrasonic floor platforms, high-voltage Jacob's ladder spark transmitters.",
    audienceReception: "Sold-out performances across six nights during CTM Festival.",
    archivalArtifacts: ["Teufelsberg Impulse Response CD-ROM", "CTM Festival Program", "Exhibition Poster Artifact"]
  },
  {
    id: "EXH-13",
    title: "Mycelial Synthesizers: The Subterranean Bio-Lattice",
    venue: "Kew Royal Botanic Gardens (Herbarium Wing)",
    city: "London, United Kingdom",
    year: 2025,
    curator: "Dr. Tariq Al-Mansoor",
    description: "A bio-electronic greenhouse installation where 12 distinct fungal colonies control analog modular synthesizers generating slow, shifting microtonal chords in response to visitor respiration.",
    technicalSetup: "Gold micro-electrode arrays, high-impedance bio-amplifiers, custom Eurorack voltage-controlled oscillator racks.",
    audienceReception: "Over 120,000 visitors; featured in BBC Science and Nature documentaries.",
    archivalArtifacts: ["Bio-Amplifier PCB Prototype", "Pressed Fungal Specimen Herbarium Sheet", "Soundtrack LP Master"]
  },
  {
    id: "EXH-14",
    title: "Echoes of the Industrial Underworld: Slate Mine Resonances",
    venue: "National Museum Wales",
    city: "Cardiff, Wales",
    year: 2026,
    curator: "Joon-Ho Park & Marcus Holloway",
    description: "An immersive recreation of the 31-second reverberation acoustics of the abandoned Cwmystwyth slate caverns, allowing visitors to sing and speak into an acoustic simulator.",
    technicalSetup: "Low-latency convolution reverb hardware engine with 128 FIR filter taps, real-time spatial microphone booth.",
    audienceReception: "Highly praised by Welsh cultural heritage groups for connecting industrial history with cutting-edge acoustics.",
    archivalArtifacts: ["Slate Cavern Impulse Response USB Archive", "Museum Exhibition Catalogue", "Mine Survey Map Artifact"]
  },
  {
    id: "EXH-15",
    title: "Black Vault Declassified: Five Years of Anomalous Acoustics",
    venue: "Zazie Productions Gallery / Research Hangar",
    city: "Rotterdam, Netherlands",
    year: 2026,
    curator: "Dr. Lyra Sterling & All ZIAA Fellows",
    description: "The premier retrospective exhibition displaying 18 decommissioned prototypes from the Classified Black Vault, complete with forensic failure reports, shattered glass shards, and safe simulation models.",
    technicalSetup: "Reinforced blast-resistant polycarbonate display cases, silent ultrasonic directional audio feeds, historical timeline ledger.",
    audienceReception: "Critical milestone for ZIAA's 5th anniversary; established the institute as a premier global institution of speculative acoustics.",
    archivalArtifacts: ["Original Black Vault Containment Protocol Ledger", "Shattered Quartz Window Shard Artifact", "Exhibition Silver Medal"]
  },
  {
    id: "EXH-16",
    title: "The Urban Tuning Fork: Public Acoustic Monuments",
    venue: "Venice Biennale 2026 (Central International Exhibition)",
    city: "Venice, Italy",
    year: 2026,
    curator: "Renata Osei & Dr. Elena Rostova",
    description: "A monumental 12-meter acoustic tuning fork installed in the Venetian Arsenale basin, vibrating in sympathy with the lunar tide and generating an audible 14 Hz tone when ships pass.",
    technicalSetup: "Cast marine-grade aluminum alloy monolith, hydraulic underwater excitation pistons, solar battery arrays.",
    audienceReception: "Ongoing international acclaim; widely regarded as one of the defining public sound monuments of the decade.",
    archivalArtifacts: ["Arsenale Blueprint Specification", "Tuning Fork Engineering Cast Sample", "Biennale Golden Lion Nomination"]
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/exhibitionsData.ts'),
  `import { ExhibitionRecord } from '../types/archive';\n\nexport const EXHIBITIONS_ARCHIVE: ExhibitionRecord[] = ${JSON.stringify(exhibitions, null, 2)};\n`
);
console.log(`Saved ${exhibitions.length} exhibitions.`);

// 8. GENERATE 12 RESIDENT RESEARCHERS
console.log("Generating 12 resident researchers...");
const residents = [
  {
    id: "res-01",
    name: "Dr. Elena Rostova",
    title: "Director of Applied Anomalies & Metamaterial Physics",
    division: "Division A: Metamaterials & Phononics",
    tenure: "2021 – Present (Founding Fellow)",
    clearance: "Level IV (Black Vault)",
    specialization: ["Non-Hermitian Acoustics", "Pentamode Metamaterials", "Topological Phononics", "Institutional Governance"],
    bio: "Dr. Elena Rostova completed her doctoral training in solid-state physics at ETH Zurich before leading research into sonic crystal bandgaps at the Max Planck Institute for Colloids and Interfaces. In 2021, she co-founded the Zazie Institute of Applied Anomalies under Zazie Productions LLC to pursue radical speculative research unrestricted by traditional academic publishing cycles.",
    notableInventions: ["Negative-Index Phononic Prism", "Non-Reciprocal Acoustic Circulator (ZIAA-PAT-2021-001)", "Topological Edge State Waveguide"]
  },
  {
    id: "res-02",
    name: "Dr. Kieran Vance",
    title: "Senior Archaeologist of Lost Radio Carriers",
    division: "Division B: Signal Archaeology & Carriers",
    tenure: "2021 – Present",
    clearance: "Level III (Restricted)",
    specialization: ["Electromagnetic Archaeology", "VLF / ELF Demodulation", "Telluric Ground Currents", "Cold War Signal Forensics"],
    bio: "With a dual background in classical archaeology and high-frequency RF engineering, Dr. Vance has spent fifteen years excavating physical electromagnetic remnants trapped in geological strata and historic submarine cables. At ZIAA, he directs the Signal Archaeology lab bench, recovering ghost carriers and demodulating numbers station broadcasts.",
    notableInventions: ["Lost Carrier Heterodyne Demodulator", "Phosphor-Screen Spectral Fossilizer", "Numbers Station Triangulation Array"]
  },
  {
    id: "res-03",
    name: "Maya Lindqvist",
    title: "Lead Psychoacoustic Metrologist & Haptic Designer",
    division: "Division C: Psychoacoustics & Perception",
    tenure: "2021 – Present",
    clearance: "Level III (Restricted)",
    specialization: ["Psychoacoustic Illusions", "Shepard-Risset Continuous Glissandi", "Bone Conduction Spatialization", "Vestibular Somatosensation"],
    bio: "Maya Lindqvist investigated cognitive auditory neuroscience at Karolinska Institutet before shifting to experimental sound design. Her work at ZIAA explores the porous boundary between auditory sensation, vestibular balance, and tactile phantom feedback, designing specialized auditory stimuli that evoke physical sensations.",
    notableInventions: ["Binaural Spiral Glissando Engine", "Bone-Conduction Cranial Harmonic Array", "Dichotic Pitch Disconnect Separator"]
  },
  {
    id: "res-04",
    name: "Dr. Tariq Al-Mansoor",
    title: "Fellow in Bio-Magnetic Acoustic Transduction",
    division: "Division F: Bio-Magnetic Transduction",
    tenure: "2022 – Present",
    clearance: "Level II (Internal)",
    specialization: ["Bio-Electrical Transduction", "Mycelial Action Potentials", "Ferrofluid Acoustics", "Plant Xylem Cavitation"],
    bio: "Dr. Al-Mansoor earned his doctorate in biophysics at the University of Cambridge, specializing in electrophysiology of fungal and botanical networks. At ZIAA, he interfaces living biological organisms directly with analog and microtonal audio oscillators, treating non-human electrical spikes as acoustic composition agents.",
    notableInventions: ["Mycelial Hyphae Action-Potential Pickup", "Ferrofluid Dynamic Membrane Transducer", "Coral Reef Larval Recruitment Lure"]
  },
  {
    id: "res-05",
    name: "Svenja Dahl",
    title: "Research Engineer in Stochastic Cellular Automata",
    division: "Division D: Generative Composition Engines",
    tenure: "2022 – Present",
    clearance: "Level II (Internal)",
    specialization: ["Discrete Dynamical Systems", "Cellular Automata Sound Synthesis", "Markov Chains", "FPGA Hardware Architecture"],
    bio: "Svenja Dahl is a software and FPGA hardware engineer who studied algorithmic composition at IRCAM and mathematics at TU Berlin. She designs self-organizing acoustic automata where thousands of digital cells interact to produce non-repeating, self-similar polyphonic and microtonal soundscapes.",
    notableInventions: ["Markov Cellular Acoustic Automata Matrix", "Thermal Entropy True-Random Gate Sequencer", "Fibonacci Delay Loop Engine"]
  },
  {
    id: "res-06",
    name: "Marcus Holloway",
    title: "Specialist in Infrasonic Propagation & Structural Resonance",
    division: "Division G: Infrasonics & Seismo-Acoustics",
    tenure: "2021 – Present",
    clearance: "Level III (Restricted)",
    specialization: ["Low-Frequency Infrasound", "Seismic Shear Waves", "Geophone Array Signal Processing", "Structural Acoustic Safety"],
    bio: "Marcus Holloway worked for a decade in volcano seismology and geotechnical monitoring before joining ZIAA. His research encompasses atmospheric infrasonic shockwaves, volcanic acoustic plumes, and the physical coupling of low-frequency sound into concrete and masonry architectural structures.",
    notableInventions: ["Deep Fault Seismo-Acoustic Monopole Sensor", "Atmospheric Gravity Wave Micro-Interferometer", "Infrasonic Traffic-Wave Dissipator"]
  },
  {
    id: "res-07",
    name: "Dr. Christine Abele",
    title: "Principal Investigator in Quantum Phononic Couplings",
    division: "Division H: Quantum Acoustics & Black Vault",
    tenure: "2023 – Present",
    clearance: "Level IV (Black Vault)",
    specialization: ["Cavity Optomechanics", "Phonon Squeezing", "Cryogenic SQUID Systems", "Macroscopic Quantum Acoustics"],
    bio: "Dr. Christine Abele joined ZIAA following postdoctoral fellowships at MIT and Harvard. Her laboratory operates dilution refrigerators cooling silicon nitride mechanical membranes to 10 millikelvin, investigating non-classical states of sound, macroscopic quantum coherence, and the boundary where acoustic waves obey quantum laws.",
    notableInventions: ["Cavity Optomechanical Phonon Interrogator", "Squeezed-State Acoustic Noise Nullifier", "Macroscopic Phononic Entanglement Bridge"]
  },
  {
    id: "res-08",
    name: "Renata Osei",
    title: "Director of Public Listening Infrastructure",
    division: "Division E: Public Listening Infrastructure",
    tenure: "2021 – Present",
    clearance: "Level II (Internal)",
    specialization: ["Civic Sound Monuments", "Cistern Reverberation", "Acoustic Metamaterial Architecture", "Public Sound Art"],
    bio: "Renata Osei is an architect and acoustic curator who previously led public infrastructure commissions for the Venice Biennale and Rotterdam Architecture Foundation. At ZIAA, she translates esoteric laboratory anomalies into large-scale civic monuments, acoustic shadow benches, and subterranean listening spaces.",
    notableInventions: ["Subterranean Cistern Resonant Horn", "Urban Acoustic Shadow Sanctuary Bench", "Rain-Activated Kinetic Pavilion"]
  },
  {
    id: "res-09",
    name: "Joon-Ho Park",
    title: "Senior Hardware Architect & Precision Machining Lead",
    division: "Division A: Metamaterials & Phononics",
    tenure: "2022 – Present",
    clearance: "Level III (Restricted)",
    specialization: ["5-Axis CNC Precision Machining", "Cryogenic Titanium Enclosures", "Piezoelectric Actuators", "Finite Element Acoustic Modeling"],
    bio: "Joon-Ho Park oversees the ZIAA Precision Machining & Cleanroom Fabrication facility in Rotterdam. With decades of aerospace and high-energy physics prototyping experience, he transforms theoretical acoustic equations into micro-machined aluminum, titanium, and bismuth phononic crystals.",
    notableInventions: ["Pentamode Lattice Machining Toolpath", "Sub-Wavelength Sonic Crystal Deflector", "Cryogenic Low-Noise Preamplifier Chassis"]
  },
  {
    id: "res-10",
    name: "Dr. Lyra Sterling",
    title: "Curator of Decommissioned Anomalies & Failure Forensics",
    division: "Division H: Quantum Acoustics & Black Vault",
    tenure: "2021 – Present",
    clearance: "Level IV (Black Vault)",
    specialization: ["Acoustic Hazard Forensics", "Material Fracture Mechanics", "Classified Black Vault Protocol", "Containment Engineering"],
    bio: "Dr. Sterling holds degrees in forensic materials science and acoustic engineering. She is the official custodian of the ZIAA Classified Black Vault, investigating all catastrophic acoustic prototype failures, implementing emergency containment procedures, and documenting anomalous physical phenomena that cannot be publicly published.",
    notableInventions: ["Level IV Pyrotechnic Acoustic Circuit Breaker", "Blast-Resistant Polycarbonate Observation Cell", "Hazardous Acoustic Containment Matrix"]
  },
  {
    id: "res-11",
    name: "Dr. Alexei Voronov",
    title: "Acoustic Cavitation & Fluid Dynamicist",
    division: "Division A: Metamaterials & Phononics",
    tenure: "2022 – Present",
    clearance: "Level III (Restricted)",
    specialization: ["Sonoluminescence", "High-Intensity Acoustic Cavitation", "Nonlinear Bubble Dynamics", "Microfluidic Acoustic Levitation"],
    bio: "Dr. Voronov is a world authority on single-bubble sonoluminescence and acoustic radiation forces. His experiments subject fluids to extreme sound pressure fields, inducing light emission from collapsing bubbles and manipulating suspended micro-particles without physical contact.",
    notableInventions: ["Non-Hermitian Acoustic Cavitation Synthesizer", "Microfluidic Acoustic Vortex Levitator", "Asymmetric Acoustic Diode Pipe"]
  },
  {
    id: "res-12",
    name: "Beatrix Thorne",
    title: "Archivist of Electromagnetic Field Phonography",
    division: "Division B: Signal Archaeology & Carriers",
    tenure: "2023 – Present",
    clearance: "Level II (Internal)",
    specialization: ["VLF Audio Phonography", "Historical Audio Restoration", "Sferics and Magnetospheric Hiss", "Tape Hiss Restoration Algorithms"],
    bio: "Beatrix Thorne is an archivist and field recordist who has traveled to polar and desert research stations to document vanishing electromagnetic phenomena. At ZIAA, she catalogs over 40,000 hours of rare radio telemetry, atmospheric sferics, and early magnetic wire sound recordings.",
    notableInventions: ["Opto-Acoustic Shellac Groove Laser Reader", "Ionospheric Dawn Chorus Harvester", "Atmospheric Sferics Phonograph"]
  }
];

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/residentsData.ts'),
  `import { ResidentProfile } from '../types/archive';\n\nexport const RESIDENTS_ARCHIVE: ResidentProfile[] = ${JSON.stringify(residents, null, 2)};\n`
);
console.log(`Saved ${residents.length} resident profiles.`);

// 9. GENERATE 35 INSTITUTIONAL REVISIONS (2021 - 2026)
console.log("Generating 35 institutional revision log entries...");
const revisions = [
  { commitHash: "7f9a01b", date: "2021-01-15", author: "Dr. Elena Rostova", category: "PATENT_FILING", message: "Initial charter established for Zazie Institute of Applied Anomalies R&D Division. Filing ZIAA-PAT-2021-001.", impactScore: "NOMINAL" },
  { commitHash: "4b2e88a", date: "2021-03-22", author: "Joon-Ho Park", category: "HARDWARE_REV", message: "Installation of 5-axis DMG Mori CNC mill in Cleanroom Hangar B. Initial tooling calibration completed.", impactScore: "NOMINAL" },
  { commitHash: "1c89f30", date: "2021-06-10", author: "Marcus Holloway", category: "FIELD_LOG", message: "Svalbard Infrasound array Station 01 activated; telemetry streaming via Iridium link.", impactScore: "NOMINAL" },
  { commitHash: "e402d19", date: "2021-10-04", author: "Dr. Lyra Sterling", category: "CONTAINMENT", message: "INCIDENT REPORT BV-001: Project VORTEX-7 stator shear during 178 dB test. Emergency Level IV Black Vault containment engaged.", impactScore: "CRITICAL" },
  { commitHash: "9a51cb7", date: "2021-11-20", author: "Dr. Kieran Vance", category: "PATENT_FILING", message: "Filing patent study ZIAA-PAT-2021-017 for Lost Carrier Heterodyne Demodulation Systems.", impactScore: "NOMINAL" },
  { commitHash: "2d3e911", date: "2022-01-08", author: "Maya Lindqvist", category: "FIRMWARE", message: "Release v1.0.4 of Shepard-Risset Continuous Glissando Synthesis Engine with Master Safety Limiter.", impactScore: "NOMINAL" },
  { commitHash: "8f67c42", date: "2022-04-14", author: "Renata Osei", category: "FIELD_LOG", message: "Venice Biennale Sound Pavilion commission finalized. Subterranean Cistern installation begins.", impactScore: "NOMINAL" },
  { commitHash: "3b09da5", date: "2022-07-29", author: "Dr. Tariq Al-Mansoor", category: "HARDWARE_REV", message: "Bio-transduction micro-electrode rack commissioned in Bio-Acoustics Annex. Pleurotus colony inoculated.", impactScore: "NOMINAL" },
  { commitHash: "6e84a20", date: "2022-10-18", author: "Svenja Dahl", category: "FIRMWARE", message: "FPGA Cellular Automata engine v2.0 deployed. Support for 64-channel discrete acoustic nodes.", impactScore: "NOMINAL" },
  { commitHash: "a158f99", date: "2022-12-05", author: "Dr. Lyra Sterling", category: "SAFETY_AUDIT", message: "Annual laboratory safety audit completed. Maximum SPL exposure limit capped at 135 dBA for unshielded benches.", impactScore: "ELEVATED" },
  { commitHash: "5c71b04", date: "2023-02-17", author: "Dr. Christine Abele", category: "HARDWARE_REV", message: "Oxford Instruments Triton dilution refrigerator operational at 14 mK in Quantum Acoustics bunker.", impactScore: "NOMINAL" },
  { commitHash: "f923e81", date: "2023-05-11", author: "Dr. Kieran Vance", category: "PATENT_FILING", message: "Filing patent study ZIAA-PAT-2023-030 for Numbers Station Spectral Unfolding and Recovery.", impactScore: "NOMINAL" },
  { commitHash: "7b49cd3", date: "2023-08-22", author: "Dr. Lyra Sterling", category: "CONTAINMENT", message: "INCIDENT BV-005: Project PHANTOM-HORN directional beam ceiling reflection caused technician vertigo. Class IV embargo imposed.", impactScore: "CRITICAL" },
  { commitHash: "4d62a19", date: "2023-11-04", author: "Beatrix Thorne", category: "FIELD_LOG", message: "Archival tape ingest: 1,200 hours of 1960s ionospheric dawn chorus recordings digitized to 32-bit float.", impactScore: "NOMINAL" },
  { commitHash: "1a83e77", date: "2024-01-19", author: "Dr. Elena Rostova", category: "PATENT_FILING", message: "Filing patent study ZIAA-PAT-2024-049 for Topological Acoustic Waveguides with Protected Edge States.", impactScore: "NOMINAL" },
  { commitHash: "d094bf2", date: "2024-03-30", author: "Joon-Ho Park", category: "HARDWARE_REV", message: "Fabrication of 400 pentamode crystal blocks for Tokyo Museum of Contemporary Art exhibition.", impactScore: "NOMINAL" },
  { commitHash: "8e31ac8", date: "2024-06-15", author: "Renata Osei", category: "FIELD_LOG", message: "Rotterdam civic acoustic shadow benches deployed in three central plazas. Ambient noise reduction: -18 dBA.", impactScore: "NOMINAL" },
  { commitHash: "3f72e90", date: "2024-09-08", author: "Dr. Alexei Voronov", category: "HARDWARE_REV", message: "Microfluidic acoustic levitation cell achieves continuous 48-hour droplet suspension with zero acoustic drift.", impactScore: "NOMINAL" },
  { commitHash: "b540ca3", date: "2024-11-25", author: "Svenja Dahl", category: "FIRMWARE", message: "Stochastic Markov Automata v3.4 firmware deployed with WebAudio API real-time synthesis integration.", impactScore: "NOMINAL" },
  { commitHash: "6a19f84", date: "2025-01-14", author: "Dr. Lyra Sterling", category: "SAFETY_AUDIT", message: "ZIAA Institutional Security Manual Rev 4 released. Clearance levels I through IV codified.", impactScore: "ELEVATED" },
  { commitHash: "2c88d31", date: "2025-03-19", author: "Dr. Tariq Al-Mansoor", category: "PATENT_FILING", message: "Filing patent study ZIAA-PAT-2025-063 for Bio-Electromagnetic Transduction in Fungal Networks.", impactScore: "NOMINAL" },
  { commitHash: "9f02ea7", date: "2025-05-22", author: "Dr. Christine Abele", category: "FIELD_LOG", message: "Macroscopic phonon squeezing demonstrated at 4.8 dB below quantum zero-point fluctuation limit.", impactScore: "NOMINAL" },
  { commitHash: "5b73d10", date: "2025-08-11", author: "Beatrix Thorne", category: "FIELD_LOG", message: "Namib desert singing sands expedition successfully completed; recorded 98 Hz acoustic laser emissions.", impactScore: "NOMINAL" },
  { commitHash: "e149c82", date: "2025-10-30", author: "Marcus Holloway", category: "HARDWARE_REV", message: "Seismo-acoustic array upgraded with optical fiber interferometers across 4 continental monitoring sites.", impactScore: "NOMINAL" },
  { commitHash: "7a62f44", date: "2025-12-18", author: "Dr. Elena Rostova", category: "PATENT_FILING", message: "Filing patent study ZIAA-PAT-2025-072 for Macro-Scale Marine Acoustic Invisibility Shells.", impactScore: "NOMINAL" },
  { commitHash: "3d91b05", date: "2026-01-10", author: "Dr. Lyra Sterling", category: "CONTAINMENT", message: "Black Vault annual security inspection: all 18 decommissioned anomalies sealed with zero containment leakage.", impactScore: "NOMINAL" },
  { commitHash: "8b44a99", date: "2026-02-28", author: "Maya Lindqvist", category: "FIRMWARE", message: "Web-native Interactive Lab Bench suite finalized: Cavitation synth, Signal demodulator, Shepard spiral, Markov matrix.", impactScore: "NOMINAL" },
  { commitHash: "4c10e83", date: "2026-04-15", author: "Renata Osei", category: "FIELD_LOG", message: "Venice Arsenale 12-meter tidal acoustic tuning fork installed for 2026 Biennale.", impactScore: "NOMINAL" },
  { commitHash: "1f89d27", date: "2026-06-02", author: "Dr. Christine Abele", category: "FIELD_LOG", message: "SNOLAB deep underground acoustic survey: lowest terrestrial noise floor verified at -11.8 dBA.", impactScore: "NOMINAL" },
  { commitHash: "a753c12", date: "2026-07-24", author: "Dr. Kieran Vance", category: "PATENT_FILING", message: "Filing patent study ZIAA-PAT-2026-078 for Quantum-Limited Phonon Laser Using Trapped Ion Transitions.", impactScore: "NOMINAL" },
  { commitHash: "6d09e51", date: "2026-08-18", author: "Dr. Elena Rostova", category: "SAFETY_AUDIT", message: "Five-Year Comprehensive Institutional Review approved by Zazie Productions LLC Advisory Board.", impactScore: "NOMINAL" },
  { commitHash: "2b98f40", date: "2026-09-01", author: "Joon-Ho Park", category: "HARDWARE_REV", message: "Permanent Public Digital Archive Terminal deployed with 128 Prototypes and 78 Patent Dossiers.", impactScore: "NOMINAL" },
  { commitHash: "9e41a77", date: "2026-09-10", author: "Maya Lindqvist", category: "FIRMWARE", message: "Acoustic Ray-Tracing 2D chamber simulation integrated into live audio bench with real-time convolution.", impactScore: "NOMINAL" },
  { commitHash: "5f20c89", date: "2026-09-14", author: "Dr. Lyra Sterling", category: "CONTAINMENT", message: "Public Access Gateways secured. Level I & II archives declassified for international academic research.", impactScore: "NOMINAL" }
];

fs.writeFileSync(
  path.join(process.cwd(), 'src/data/revisionsData.ts'),
  `import { RevisionEntry } from '../types/archive';\n\nexport const REVISIONS_ARCHIVE: RevisionEntry[] = ${JSON.stringify(revisions, null, 2)};\n`
);
console.log(`Saved ${revisions.length} revision entries.`);
console.log("All archive datasets generated successfully!");
