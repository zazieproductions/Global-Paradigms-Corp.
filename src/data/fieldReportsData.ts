import { FieldReport } from '../types/archive';

export const FIELD_REPORTS_ARCHIVE: FieldReport[] = [
  {
    "id": "FR-01",
    "stationCode": "ZIAA-SVALBARD-01",
    "location": "Longyearbyen, Svalbard Archipelago, Norway",
    "coordinates": "78.2232° N, 15.6267° E",
    "elevation": "130m MSL",
    "date": "2021-11-14",
    "leadInvestigator": "Dr. Elena Rostova",
    "title": "Permafrost Thermal Fracture Infrasonic Survey",
    "abstract": "Continuous 30-day acoustic monitoring of subterranean permafrost micro-fractures adjacent to the Global Seed Vault utilizing subterranean optical fiber interferometry.",
    "findings": "Registered 1,418 distinct micro-acoustic seismic pings in the 2.4 Hz to 18.9 Hz band. Correlated micro-fracture bursts precede surface temperature fluctuations by approximately 6 hours, confirming deep ice stress propagation.",
    "ambientDecibels": "18.4 dBA",
    "frequencyRange": "0.1 Hz – 120 Hz",
    "equipmentCluster": [
      "Silixa iDAS Distributed Acoustic Fiber System",
      "Nanometrics Trillium Compact Seismometer",
      "Kevlar-Reinforced Geophone Strings"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "FR-02",
    "stationCode": "ZIAA-ATACAMA-04",
    "location": "Chajnantor Plateau, Atacama Desert, Chile",
    "coordinates": "23.0229° S, 67.7550° W",
    "elevation": "5,050m MSL",
    "date": "2022-03-22",
    "leadInvestigator": "Dr. Kieran Vance",
    "title": "Atmospheric Sferics and High-Altitude Ionospheric Whispers",
    "abstract": "Deployment of broadband VLF magnetic loop antennas in the hyper-arid Atacama desert to record lightning-induced whistlers and magnetospheric hiss free from human electromagnetic interference.",
    "findings": "Detected rare downward-propagating tweeks with dispersion coefficients indicating nighttime D-region ionospheric boundary shifts. Audio fidelity exceeds European base stations by 42 dB signal-to-noise margin.",
    "ambientDecibels": "12.1 dBA",
    "frequencyRange": "300 Hz – 30 kHz",
    "equipmentCluster": [
      "Double-Screened Orthogonal VLF Loops",
      "Stanford Research Systems SR560 Preamp",
      "Solar-Buffered 48V Iron-Phosphate Bank"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "FR-03",
    "stationCode": "ZIAA-TEUFELSBERG-09",
    "location": "Teufelsberg Listening Tower, Berlin, Germany",
    "coordinates": "52.4975° N, 13.2415° E",
    "elevation": "120m MSL",
    "date": "2022-09-08",
    "leadInvestigator": "Maya Lindqvist",
    "title": "Radome Cavity Standing-Wave Infiltration and Cold War Ghost Harmonics",
    "abstract": "Acoustic profiling inside the decommissioned geodesic radar domes of the former NSA listening station on the man-made rubble mountain in Berlin.",
    "findings": "The central fiberglass dome exhibits a persistent acoustic flutter echo with a multi-pole decay contour of 16.4 seconds at 840 Hz. Wind blowing through structural tears induces self-oscillating cavity tones resembling vocal formants.",
    "ambientDecibels": "34.6 dBA",
    "frequencyRange": "18 Hz – 8.5 kHz",
    "equipmentCluster": [
      "Ambisonic 7th-Order Microphone Spheres",
      "B&K Sound Level Calibrator 4231",
      "Sweep Sine Chirp Transducers"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "FR-04",
    "stationCode": "ZIAA-MARIANA-HYD-03",
    "location": "Challenger Deep Ridge, Western Pacific Ocean",
    "coordinates": "11.3493° N, 142.1996° E",
    "elevation": "-10,920m BSL",
    "date": "2023-01-19",
    "leadInvestigator": "Dr. Christine Abele",
    "title": "Abyssal Infrasound and Whale Pelagic Channel Propagation",
    "abstract": "Moored autonomous titanium hydrophone pod capturing acoustic energy propagating through the deep SOFAR channel at extreme hydrostatic pressures.",
    "findings": "Recorded low-frequency vocalizations of baleen whales refracting across oceanic thermal layers over 800 kilometers away, alongside periodic seismic rumble from Philippine Sea plate subduction.",
    "ambientDecibels": "68.2 dB re 1 µPa",
    "frequencyRange": "1 Hz – 2 kHz",
    "equipmentCluster": [
      "Titanium Deep-Sea Hydrophone Pod Z-9",
      "Piezo-Ceramic Pressure Balanced Cartridge",
      "Acoustic Release Transponder"
    ],
    "status": "Telemetry Lost"
  },
  {
    "id": "FR-05",
    "stationCode": "ZIAA-RONNE-ICE-02",
    "location": "Ronne Ice Shelf, Weddell Sea, Antarctica",
    "coordinates": "78.5000° S, 61.0000° W",
    "elevation": "45m MSL",
    "date": "2023-07-04",
    "leadInvestigator": "Marcus Holloway",
    "title": "Aeolian Resonance on Antarctic Snow Dune Formations",
    "abstract": "Analysis of high-velocity katabatic wind-driven acoustic vibrations across wind-sculpted sastrugi snow dunes and floating ice shelf margins.",
    "findings": "The ice shelf acts as a gigantic mechanical acoustic plate. Wind speeds over 25 m/s excite fundamental flexural-gravity waves at 0.035 Hz, creating an unhearable but physically tactile infrasonic hum.",
    "ambientDecibels": "22.5 dBA",
    "frequencyRange": "0.01 Hz – 40 Hz",
    "equipmentCluster": [
      "Infrasonic Micro-Barometer Array",
      "Thermal Jacket Preamplifiers",
      "Satellite Iridium Uplink Terminal"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "FR-06",
    "stationCode": "ZIAA-CWMYSTWYTH-07",
    "location": "Cwmystwyth Lead Mine Caverns, Ceredigion, Wales",
    "coordinates": "52.3610° N, 3.7680° W",
    "elevation": "310m MSL (Underground -180m)",
    "date": "2023-11-28",
    "leadInvestigator": "Dr. Alexei Voronov",
    "title": "Slate Mine Sub-Harmonic Standing Waves and Water Drop Reverberation",
    "abstract": "Subterranean acoustic mapping in the flooded adits of 18th-century abandoned lead and zinc slate mines to study underground wet-rock acoustic impedance.",
    "findings": "The reflective density of wet slate walls creates nearly zero high-frequency absorption. Water droplet impacts generate micro-cavitation pings with phase-coherent reverberation tails exceeding 31 seconds in dead-end tunnels.",
    "ambientDecibels": "14.2 dBA",
    "frequencyRange": "20 Hz – 22 kHz",
    "equipmentCluster": [
      "Omnidirectional Hydrophones",
      "Waterproof Laser Displacement Meters",
      "Binaural Dummy Head Ku-100"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "FR-07",
    "stationCode": "ZIAA-BAIKONUR-VLF",
    "location": "Steppe Periphery, Baikonur Cosmodrome, Kazakhstan",
    "coordinates": "45.9646° N, 63.3052° E",
    "elevation": "90m MSL",
    "date": "2024-04-12",
    "leadInvestigator": "Dr. Kieran Vance",
    "title": "Rocket Exhaust Infrasonic Plume Dispersion and Earth Resonance",
    "abstract": "Measurement of low-frequency tropospheric shockwaves during orbital vehicle launches, studying acoustic coupling into adjacent ground strata.",
    "findings": "Exhaust plume shear creates an acoustic shock cone with peak energy centered at 1.8 Hz. Ground-wave propagation demonstrated 14-kilometer lateral penetration before decaying into the background ambient noise floor.",
    "ambientDecibels": "42.0 dBA",
    "frequencyRange": "0.05 Hz – 500 Hz",
    "equipmentCluster": [
      "Differential Micro-Barographs",
      "3-Axis Seismic Velocity Sensors",
      "GPS-Synchronized Timing Clocks"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "FR-08",
    "stationCode": "ZIAA-VENICE-CIS-01",
    "location": "Church of San Lorenzo Subterranean Vaults, Venice, Italy",
    "coordinates": "45.4372° N, 12.3485° E",
    "elevation": "-2.1m MSL (Lagoon Tide Level)",
    "date": "2024-06-20",
    "leadInvestigator": "Renata Osei",
    "title": "Hydro-Acoustic Coupling in Medieval Brick Cistern Foundations",
    "abstract": "Long-term monitoring of water-borne tidal vibrations transmitting through wooden foundation piles and brick cistern chambers during Acqua Alta events.",
    "findings": "The brick chambers act as acoustic bandpass filters, selectively amplifying low-frequency boat propeller vibrations at 42 Hz while completely deadening surface traffic noise above 200 Hz.",
    "ambientDecibels": "28.3 dBA",
    "frequencyRange": "5 Hz – 4 kHz",
    "equipmentCluster": [
      "Submersible Hydrophone Clusters",
      "Structural Accelerometers",
      "Lagoon Water Pressure Sensors"
    ],
    "status": "Autonomous Beacon"
  },
  {
    "id": "FR-09",
    "stationCode": "ZIAA-ZURICH-ETH-02",
    "location": "Underground Acoustic Crypt, Zurich, Switzerland",
    "coordinates": "47.3769° N, 8.5417° E",
    "elevation": "410m MSL",
    "date": "2024-10-05",
    "leadInvestigator": "Svenja Dahl",
    "title": "Electromagnetic Micro-Leakage Sonification of High-Performance Superclusters",
    "abstract": "Near-field electromagnetic listening around cryogenic quantum computing dilution refrigerators to sonify stray microwave and RF switching pulses.",
    "findings": "The 10 mK pulse-tube cooler generates an audible periodic click at 1.4 Hz, upon which is superimposed a rich, multi-tonal spectrum of clock feedthrough from quantum gate driver lines.",
    "ambientDecibels": "21.0 dBA",
    "frequencyRange": "0.5 Hz – 96 kHz",
    "equipmentCluster": [
      "Rohde & Schwarz Near-Field Sniffing Probes",
      "PicoScope 6000E Oscilloscope",
      "Ultra-Low Noise JFET Buffers"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "FR-10",
    "stationCode": "ZIAA-NAMIB-SAND-01",
    "location": "Sossusvlei Singing Dunes, Namib Desert, Namibia",
    "coordinates": "24.7275° S, 15.3444° E",
    "elevation": "550m MSL",
    "date": "2025-02-18",
    "leadInvestigator": "Beatrix Thorne",
    "title": "Granular Avalanche Acoustic Synchronization and Boom Dunes",
    "abstract": "High-speed audio-visual recording of spontaneous acoustic emissions produced by dry silica sand grains avalanching down slip faces.",
    "findings": "The sand dunes hum at an extraordinarily narrow monotone frequency of 98 Hz with sound levels reaching 105 dB SPL. Grain size sorting and air cushion shearing create a self-synchronizing acoustic laser effect.",
    "ambientDecibels": "31.2 dBA",
    "frequencyRange": "20 Hz – 5 kHz",
    "equipmentCluster": [
      "High-Temperature Condenser Arrays",
      "Laser Vibrometer Polytec PDV-100",
      "Infrared Surface Temperature Sensors"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "FR-11",
    "stationCode": "ZIAA-FUKUSHIMA-EXCL",
    "location": "Coastal Abatement Zone, Fukushima Prefecture, Japan",
    "coordinates": "37.4214° N, 141.0329° E",
    "elevation": "22m MSL",
    "date": "2025-05-30",
    "leadInvestigator": "Joon-Ho Park",
    "title": "Post-Anthropocene Bio-Acoustic Regeneration and Silent Infrastructure",
    "abstract": "Automated audio biodiversity index tracking within abandoned residential zones and decommissioned seawalls now overgrown by coastal vegetation.",
    "findings": "Bio-acoustic complexity has risen by 380% compared to baseline populated zones. Insects and coastal birds have repopulated abandoned concrete wave-breakers, utilizing structural cavities as resonant vocal amplifiers.",
    "ambientDecibels": "26.4 dBA",
    "frequencyRange": "50 Hz – 48 kHz",
    "equipmentCluster": [
      "Wildlife Acoustics Song Meter SM4",
      "Solar Battery Enclosure",
      "Cellular LTE Burst Uplink"
    ],
    "status": "Autonomous Beacon"
  },
  {
    "id": "FR-12",
    "stationCode": "ZIAA-KRAKATOA-HYDRO",
    "location": "Sunda Strait Caldron, Indonesia",
    "coordinates": "6.1021° S, 105.4230° E",
    "elevation": "-240m BSL",
    "date": "2025-09-12",
    "leadInvestigator": "Dr. Elena Rostova",
    "title": "Submarine Magmatic Cavitation and Hydro-Acoustic Tremors",
    "abstract": "Subsea acoustic monitoring around Anak Krakatau's submerged volcanic flank capturing magma degassing and hydrothermal boiling vents.",
    "findings": "Hydrothermal boiling vents produce continuous high-frequency acoustic hiss (8 kHz - 24 kHz) punctuated by deep sub-surface explosive gas collapses at 3.1 Hz that travel over 200 kilometers across the Indonesian archipelago.",
    "ambientDecibels": "84.5 dB re 1 µPa",
    "frequencyRange": "0.5 Hz – 30 kHz",
    "equipmentCluster": [
      "Fiber-Optic Hydrophone Array",
      "Autonomous Wave Glider",
      "Seabed Battery Housing"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "FR-13",
    "stationCode": "ZIAA-CHERNOBYL-RED",
    "location": "Red Forest Zone, Pripyat Exclusion Zone, Ukraine",
    "coordinates": "51.3890° N, 30.0990° E",
    "elevation": "115m MSL",
    "date": "2026-01-20",
    "leadInvestigator": "Dr. Lyra Sterling",
    "title": "Wood Acoustic Resonance and Decay in Radio-Irradiated Pine Strata",
    "abstract": "Acoustic percussion analysis of standing dead pine trunks to examine cell wall density shifts and fungal mycelial colonization in radioactive soils.",
    "findings": "Lignin breakdown in irradiated pine creates an anomalous high-Q acoustic ringing when mechanically struck, shifting the fundamental wood resonance from 440 Hz up to 612 Hz due to desiccated cell micro-structures.",
    "ambientDecibels": "20.1 dBA",
    "frequencyRange": "80 Hz – 18 kHz",
    "equipmentCluster": [
      "Calibrated Piezo-Electric Impact Hammers",
      "Contact Accelerometers",
      "High-Resolution Spectrometer"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "FR-14",
    "stationCode": "ZIAA-DEEP-MINE-ONT",
    "location": "SNOLAB Creighton Mine, Sudbury, Ontario, Canada",
    "coordinates": "46.4719° N, 81.1867° W",
    "elevation": "-2,070m Underground",
    "date": "2026-06-11",
    "leadInvestigator": "Dr. Christine Abele",
    "title": "Ultra-Quiet Bedrock Acoustics and Cosmic Ray Acoustic Shielding",
    "abstract": "Measurement of the quietest acoustic environment in North America, located two kilometers beneath solid norite bedrock inside an active cleanroom research mine.",
    "findings": "Total acoustic noise floor drops below -12 dBA in the 100 Hz to 10 kHz range. Under these conditions, the limiting noise factor becomes thermal Brownian motion of air molecules colliding with the microphone diaphragm.",
    "ambientDecibels": "-11.8 dBA",
    "frequencyRange": "0.01 Hz – 100 kHz",
    "equipmentCluster": [
      "G.R.A.S. 40AU Ultra-Quiet Microphone System",
      "Seismic Isolator Air-Spring Table",
      "Cryogenic Low-Noise Digitizers"
    ],
    "status": "Continuous Stream"
  }
];
