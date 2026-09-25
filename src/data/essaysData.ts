import { TechnicalEssay } from '../types/archive';

export const TECHNICAL_ESSAYS_ARCHIVE: TechnicalEssay[] = [
  {
    "id": "essay-01",
    "doi": "10.48550/ZIAA.MONO.2021.001",
    "date": "2021-08-15",
    "title": "Non-Hermitian Acoustics and Parity-Time Symmetry Breaking in Coupled Cavities",
    "authors": [
      "Dr. Elena Rostova",
      "Dr. Alexei Voronov"
    ],
    "abstract": "We report on the physical construction and acoustic characterization of coupled phononic cavities possessing balanced gain and loss. By tuning the complex coupling coefficient κ, we observe spontaneous parity-time (PT) symmetry breaking at an exceptional point singularity, yielding non-reciprocal acoustic transmission and asymmetric energy reflection.",
    "sections": [
      {
        "heading": "1. Theoretical Framework and Hamiltonian Formalism",
        "content": "Classical acoustic systems are traditionally constrained by reciprocity and Hermiticity, where acoustic energy is strictly conserved and Green's functions obey spatial symmetry. In this work, we introduce synthetic acoustic gain via piezoelectric feedback amplifiers coupled to lossy viscous cavities. The effective non-Hermitian Hamiltonian of the two-cavity system is described by:",
        "equation": "H = [[ω₀ + iγ, κ], [κ, ω₀ - iγ]]"
      },
      {
        "heading": "2. Experimental Metasurface Construction",
        "content": "The experimental apparatus comprises two precision-milled aluminum Helmholtz resonators connected via an adjustable iris waveguide. Cavity A is equipped with an active synthetic negative-impedance converter injecting phase-coherent pressure gain, while Cavity B contains porous acoustic melamine foam calibrated to match the gain rate γ."
      },
      {
        "heading": "3. Observation of Singular Exceptional Points",
        "content": "As the inter-cavity separation distance is swept from 12 mm to 48 mm, the real eigenvalues coalesce at κ = γ = 24.6 Hz. At this exceptional point, the phase response exhibits an abrupt π/2 discontinuity, enabling unidirectional acoustic transparency with greater than 34 dB isolation in reverse propagation."
      }
    ],
    "references": [
      "Bender, C. M. & Boettcher, S. Real spectra in non-Hermitian Hamiltonians having PT symmetry. Phys. Rev. Lett. 80, 5243 (1998).",
      "Fleury, R., Sounas, D. & Alù, A. Negative-refraction metamaterials for acoustic cloaking. Nat. Mater. 14, 521 (2015).",
      "ZIAA Internal Technical Directive 2021-09A (Acoustics Lab Press)."
    ],
    "tags": [
      "Metamaterials",
      "Non-Hermitian",
      "Quantum Acoustics",
      "Waveguides"
    ]
  },
  {
    "id": "essay-02",
    "doi": "10.48550/ZIAA.MONO.2022.004",
    "date": "2022-04-10",
    "title": "Signal Archaeology: Demodulation of Extinct Shortwave Carriers and Cold War Telluric Currents",
    "authors": [
      "Dr. Kieran Vance",
      "Beatrix Thorne"
    ],
    "abstract": "An examination of the material remnants of mid-20th century high-frequency radio transmissions preserved within magnetic wire recordings, telluric ground currents, and non-linear chemical patina on copper telephone conductors across Eastern and Western Europe.",
    "sections": [
      {
        "heading": "1. The Archaeology of Discarded Electromagnetic Envelopes",
        "content": "Radio signals do not merely propagate into the cosmos; substantial fractions of ground-wave emissions couple into conductive geological strata, railway tracks, and buried iron cables. Through high-gain synchronous demodulation, we recover coherent carrier ghosts that have circulated in low-loss ground-loops for over forty years."
      },
      {
        "heading": "2. Telluric Current Audio Recovery Methodology",
        "content": "Pairs of pure copper earth probes were driven 12 meters into water-saturated clay strata separated by 500 meters at three decommissioned military listening posts. The telluric potential difference is fed into ultra-low noise chopper-stabilized preamplifiers operating with a noise floor of 0.8 nV/√Hz."
      },
      {
        "heading": "3. Reconstruction of Numbers Station Spectral Signatures",
        "content": "By applying blind deconvolution and high-order cyclostationary analysis, we isolated periodic pulse repetition frequencies corresponding to the legendary 'Lincolnshire Poacher' and 'Swedish Rhapsody' transmissions, demonstrating that physical landscape memory retains modulated RF artifacts long after transmitter shutdown."
      }
    ],
    "references": [
      "Vance, K. Archaeological recovery of vanished electromagnetic phenomena. J. Speculative Arch. 14, 88–114 (2020).",
      "Stankovic, L. Digital Signal Processing with Selected Topics. Springer, 2015.",
      "Ministry of Defence Declassified Signal Logs (UK National Archives FO 953/1209)."
    ],
    "tags": [
      "Signal Archaeology",
      "Shortwave",
      "Telluric",
      "Cold War"
    ]
  },
  {
    "id": "essay-03",
    "doi": "10.48550/ZIAA.MONO.2023.007",
    "date": "2023-09-01",
    "title": "Psychoacoustic Shear and the Continuous Pitch Spiral: Perceptual Illusions in Infrasound Boundaries",
    "authors": [
      "Maya Lindqvist",
      "Marcus Holloway"
    ],
    "abstract": "We examine the physiological and neurological responses elicited by continuous Shepard-Risset pitch spirals when the lower spectral bound extends into the infrasonic cutoff (4 Hz to 18 Hz). We demonstrate that sub-audible beat frequencies induce vestibular nystagmus and subjective disorientation.",
    "sections": [
      {
        "heading": "1. Geometry of the Auditory Spiral",
        "content": "The Shepard-Risset tone constructs an illusion of infinitely ascending or descending pitch by distributing sinusoidal partials separated by octave intervals across a fixed bell-shaped spectral envelope. As partials descend below 20 Hz, human sensation transitions from tonal pitch perception to discrete somatic vibration:",
        "equation": "S(t) = ∑ [A_k · exp(-((f_k(t) - f_c) / σ)²) · sin(2π ∫ f_k(t) dt)]"
      },
      {
        "heading": "2. Vestibular Cross-Talk and Infrasonic Somatosensation",
        "content": "When partials cross the 7.83 Hz Schumann corridor, mechanoreceptors in the human mastoid and chest cavity experience localized mechanical resonance. Clinical testing across 48 monitored subjects indicated elevated galvanic skin response and temporary spatial mislocalization."
      },
      {
        "heading": "3. Containment Recommendations for Acoustic Installations",
        "content": "Due to cumulative autonomic nervous system stimulation, sustained exposure to low-frequency Shepard spirals in enclosed public environments must be capped at 90 seconds, with strict notch filtering applied between 4.0 Hz and 6.5 Hz."
      }
    ],
    "references": [
      "Shepard, R. N. Circularity in judgments of relative pitch. J. Acoust. Soc. Am. 36, 2346 (1964).",
      "Risset, J. C. Pitch study with computer-synthesized sounds. Bell Labs Rep. (1969).",
      "Lindqvist, M. Psychoacoustic Liminality. ZIAA Monograph Series, 2023."
    ],
    "tags": [
      "Psychoacoustics",
      "Infrasound",
      "Shepard Tones",
      "Vestibular"
    ]
  },
  {
    "id": "essay-04",
    "doi": "10.48550/ZIAA.MONO.2024.002",
    "date": "2024-02-18",
    "title": "Cellular Automata as Acoustic Substrates: Ergodic Phase Transitions in Multi-Voice Synthesis",
    "authors": [
      "Svenja Dahl"
    ],
    "abstract": "This paper develops a rigorous mathematical framework for mapping two-dimensional cellular automata lattices (specifically Wolfram and Conway variants) directly onto polyphonic microtonal acoustic oscillators, treating sound generation as an emergent thermodynamic property.",
    "sections": [
      {
        "heading": "1. State Space Mapping and Discrete Acoustic Manifolds",
        "content": "Traditional algorithmic composition treats computers as score generators. In contrast, our approach treats the cellular automaton state matrix directly as an array of coupled micro-mechanical oscillators, where cell state transitions act as impulsive Dirac excitations into tuned physical waveguides."
      },
      {
        "heading": "2. Lyapunov Exponents and Emergent Rhythmic Structures",
        "content": "By varying the neighbor coupling rule from Class I (homogeneous) to Class IV (complex edge-of-chaos), the acoustic emission shifts smoothly from static droning to non-repeating yet structurally cohesive polyrhythmic textures with long-range power-law correlations (1/f noise)."
      }
    ],
    "references": [
      "Wolfram, S. Cellular Automata and Complexity. Addison-Wesley, 1994.",
      "Xenakis, I. Formalized Music: Thought and Mathematics in Composition. Pendragon Press, 1992."
    ],
    "tags": [
      "Generative Composition",
      "Cellular Automata",
      "Markov",
      "Microtonal"
    ]
  },
  {
    "id": "essay-05",
    "doi": "10.48550/ZIAA.MONO.2024.009",
    "date": "2024-11-12",
    "title": "Subterranean Cistern Acoustics: Spatial Impulse Response Decomposition in Giant Enclosed Voids",
    "authors": [
      "Renata Osei",
      "Joon-Ho Park"
    ],
    "abstract": "A comparative acoustic survey of historic subterranean water cisterns across Europe and the Middle East, analyzing the decay dynamics of low-frequency standing waves and the creation of synthetic public acoustic infrastructure.",
    "sections": [
      {
        "heading": "1. The Physics of Giant Masonry Cavities",
        "content": "Underground cisterns feature thick brick or stone perimeter walls backed by millions of tons of compacted earth. This yields an acoustic reflection coefficient exceeding 0.995 across the entire audible spectrum, generating room impulse response tails lasting up to 34 seconds."
      },
      {
        "heading": "2. Real-Time Ray Tracing and Modal Decomposition",
        "content": "Using high-order Ambisonic measurement microphones and 3D LiDAR point clouds, we computed modal frequency distribution maps for the Basilica Cistern (Istanbul) and the San Lorenzo Vaults (Venice), uncovering dense modal clustering in the 50 Hz to 120 Hz band."
      }
    ],
    "references": [
      "Kuttruff, H. Room Acoustics. 5th edn, Spon Press, 2009.",
      "Osei, R. Architectural Resonances of the Underworld. ZIAA Press, 2024."
    ],
    "tags": [
      "Public Infrastructure",
      "Acoustic Ray Tracing",
      "Reverberation",
      "Cisterns"
    ]
  },
  {
    "id": "essay-06",
    "doi": "10.48550/ZIAA.MONO.2025.003",
    "date": "2025-03-24",
    "title": "Bio-Magnetic Transduction in Mycelial Networks: Action Potentials as Sonic Modulation Sources",
    "authors": [
      "Dr. Tariq Al-Mansoor"
    ],
    "abstract": "Living mycelial hyphae generate slow extracellular voltage spikes in response to environmental stimuli. We describe a microelectrode array and trans-impedance amplifier system that sonifies these biophysical pulses into microtonal acoustic structures.",
    "sections": [
      {
        "heading": "1. Bio-Electrical Dynamics of Fungal Hyphae",
        "content": "Fungal electrical spikes have amplitudes ranging from 0.05 mV to 5 mV and durations from 1 to 20 minutes. These slow waveforms cannot be heard directly; instead, they serve as modulating voltages controlling carrier frequencies and spectral envelopes in analog synth matrices."
      },
      {
        "heading": "2. Transduction Circuitry and Micro-Electrode Fabrication",
        "content": "Gold-plated tungsten micro-needles (10 µm tip diameter) were inserted directly into Pleurotus ostreatus colonies growing in agar cultures inside a Faraday cage. Signals were digitized at 24-bit/96kHz with high input impedance (>10¹² Ω)."
      }
    ],
    "references": [
      "Adamatzky, A. Towards fungal computer. Interface Focus 9, 20190012 (2019).",
      "Al-Mansoor, T. Bio-Acoustic Coupling. ZIAA Press, 2025."
    ],
    "tags": [
      "Bio-Magnetic",
      "Mycelium",
      "Transduction",
      "Microtonal"
    ]
  },
  {
    "id": "essay-07",
    "doi": "10.48550/ZIAA.MONO.2025.011",
    "date": "2025-08-30",
    "title": "Quantum Phononics: Single-Phonon Generation and Squeezed Acoustic States at Cryogenic Temperatures",
    "authors": [
      "Dr. Christine Abele"
    ],
    "abstract": "We review experimental progress in cooling macroscopic mechanical resonators to their quantum ground state (n < 0.1) and generating non-classical states of sound, including squeezed acoustic states and single-phonon Fock states.",
    "sections": [
      {
        "heading": "1. Ground-State Cooling of Silicon Nitride Membranes",
        "content": "By coupling a 1 mm² stoichiometric Si₃N₄ membrane inside an optical Fabry-Pérot cavity held at 20 mK in a dilution refrigerator, optomechanical radiation pressure damping cools the fundamental mechanical vibrational mode (1.45 MHz) to the quantum ground state.",
        "equation": "⟨n⟩ = k_B · T / (ℏ · ω_m) < 0.05"
      },
      {
        "heading": "2. Squeezed Acoustic Fluctuations",
        "content": "Applying two-tone parametric driving squeezes mechanical position quadrature fluctuations by 4.8 dB below the standard quantum zero-point limit, proving that macroscopic sound can exhibit quantum uncertainty manipulation."
      }
    ],
    "references": [
      "Aspelmeyer, M., Kippenberg, T. J. & Marquardt, F. Cavity optomechanics. Rev. Mod. Phys. 86, 1391 (2014).",
      "Abele, C. Macroscopic Quantum Phononics. ZIAA Research Monograph, 2025."
    ],
    "tags": [
      "Quantum Acoustics",
      "Phonons",
      "Optomechanics",
      "Cryogenics"
    ]
  },
  {
    "id": "essay-08",
    "doi": "10.48550/ZIAA.MONO.2026.001",
    "date": "2026-02-14",
    "title": "Forensics of Acoustic Failures: Structural Rupture and Containment in Extreme Sound Fields",
    "authors": [
      "Dr. Lyra Sterling"
    ],
    "abstract": "A definitive technical review of 18 catastrophic failures recorded across ZIAA's five-year operational history, focusing on cavitation chamber explosions, structural fatigue from sustained standing waves, and containment protocols for hazardous acoustic anomalies.",
    "sections": [
      {
        "heading": "1. The Thermodynamics of Acoustic Rupture",
        "content": "Sound fields exceeding 165 dB SPL in enclosed gas or fluid volumes generate extreme acoustic streaming, shockwave formation, and rapid localized temperature increases. In three separate incidents, structural aluminum and titanium enclosures suffered high-cycle fatigue fractures within minutes of resonance excitation."
      },
      {
        "heading": "2. Containment Protocol Evolution (Level I to Level IV)",
        "content": "We document the evolution of laboratory safety enclosures from simple foam-lined rooms to the present Black Vault standard: triple-walled decoupled steel containers suspended on elastomeric bearings with continuous helium purge lines."
      }
    ],
    "references": [
      "Sterling, L. Structural Forensics of Extreme Acoustics. ZIAA Special Report 2026-IV.",
      "Hamilton, M. F. & Blackstock, D. T. Nonlinear Acoustics. Academic Press, 1998."
    ],
    "tags": [
      "Containment",
      "Failure Forensics",
      "Black Vault",
      "Safety Protocol"
    ]
  }
];
