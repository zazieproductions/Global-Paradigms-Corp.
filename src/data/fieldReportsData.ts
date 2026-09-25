import { FieldReport } from '../types/archive';

export const FIELD_REPORTS_ARCHIVE: FieldReport[] = [
  {
    "id": "fs-01",
    "stationCode": "GPC-FS-01",
    "location": "Meridian Continental Airways, Terminal 4, Gate C Concourse, Frankfurt",
    "coordinates": "50.0379° N, 8.5622° E",
    "elevation": "111 m ASL",
    "date": "2001-06-12",
    "leadInvestigator": "Sylvia Okafor",
    "title": "Gate Threshold Tone Fence — Boarding Compliance Survey",
    "abstract": "Continuous monitoring of the acoustic wayfinding fence installed beneath Gate C departure seating.",
    "findings": "Sixteen months of continuous logging confirm the threshold fence holds boarding queues inside the painted corridor without a single announcement. Compliance measured at 94.2% across 1,114 departures. One anomaly window on 2001-09-12 shows the fence continuing to steer an empty concourse for forty-one minutes after the last flight was cancelled; the tone field appeared unaware the crowd had gone.",
    "ambientDecibels": "61.4 dBA concourse floor",
    "frequencyRange": "80 Hz — 12.5 kHz",
    "equipmentCluster": [
      "Neumann KM 84 pair at fence datum",
      "Sony PCM-R7 DAT with timecode",
      "HP 35670A analyzer, gate power feed"
    ],
    "status": "Telemetry Lost"
  },
  {
    "id": "fs-02",
    "stationCode": "GPC-FS-02",
    "location": "Northlake Galleria, Observation Gallery, Chicago",
    "coordinates": "41.8781° N, 87.6298° W",
    "elevation": "181 m ASL",
    "date": "2000-11-03",
    "leadInvestigator": "Dr. Anouk Deslauriers",
    "title": "Concourse Calming Canopy — Dwell and Spend Telemetry",
    "abstract": "Two-year controlled exposure of the mall concourse canopy against a silent control wing.",
    "findings": "Canopy exposure lengthened average dwell by 22 minutes and softened footfall cadence from 118 to 104 steps per minute. Spend telemetry from tenant tills showed an 11% lift in the treated wing. On 2002-03-19 the canopy was observed lowering the crowd’s pace below the seated-resting threshold; management requested the canopy be raised one semitone, after which the effect normalized.",
    "ambientDecibels": "58.9 dBA treated wing",
    "frequencyRange": "63 Hz — 10 kHz",
    "equipmentCluster": [
      "Tannoy dual-concentric canopy array",
      "GRASON-STADLER response console",
      "Turnstile cadence counters, four gates"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "fs-03",
    "stationCode": "GPC-FS-03",
    "location": "Riverside Metro, Line 3 Platform, Vienna",
    "coordinates": "48.2082° N, 16.3738° E",
    "elevation": "-14 m below street",
    "date": "2003-02-27",
    "leadInvestigator": "Tomas Ferrand",
    "title": "Platform Edge Hum Masker — Approach Warning Blend",
    "abstract": "Subsurface survey of the edge hum masker where the tunnel bore meets the platform lip.",
    "findings": "The masker holds the platform edge in a state of mild acoustic unease that keeps waiting passengers 0.8 m back from the lip without signage. Train approach warnings blend into the mask at 4.1 seconds before arrival, the minimum that preserves startle-free boarding. During the 2003 flood shutdown, the masker ran for nine days on emergency power and was found, on re-entry, to have kept a crowd of stranded commuters standing in orderly formation.",
    "ambientDecibels": "72.7 dBA at platform lip",
    "frequencyRange": "40 Hz — 8 kHz",
    "equipmentCluster": [
      "Bone-contact exciter panels, 12 bays",
      "Sennheiser MD 421 edge element",
      "Municipal power-quality logger"
    ],
    "status": "Telemetry Lost"
  },
  {
    "id": "fs-04",
    "stationCode": "GPC-FS-04",
    "location": "Kestrel Reinsurance, Call Center Floor 12, Arlington",
    "coordinates": "38.8799° N, 77.1068° W",
    "elevation": "26 m ASL",
    "date": "2002-09-09",
    "leadInvestigator": "Sylvia Okafor",
    "title": "Agent Recovery Grove — Customer Noise Shading",
    "abstract": "Behavioral baseline of the acoustic grove that shades customer noise away from claims agents.",
    "findings": "Agents seated inside the grove showed a 31% reduction in post-call recovery time and no measurable rise in error rates over fourteen months. The shading notch at 2.3 kHz removes the sharp edge of an angry voice while preserving its meaning; two agents independently described the effect as \"the caller is upset but far away.\" After hours, the grove has begun shading the office’s own silence, which staff report as \"expectant.\"",
    "ambientDecibels": "48.2 dBA grove interior",
    "frequencyRange": "100 Hz — 16 kHz",
    "equipmentCluster": [
      "Kestrel-proprietary shading array",
      "Roland S-760 notch ROM",
      "Agent response-time tap console"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "fs-05",
    "stationCode": "GPC-FS-05",
    "location": "Grand Meridian Hotel, Atrium, Lausanne",
    "coordinates": "46.5197° N, 6.6323° E",
    "elevation": "375 m ASL",
    "date": "2000-04-18",
    "leadInvestigator": "Tomas Ferrand",
    "title": "Arrival Chime Grid — Loyalty Tier Resolution",
    "abstract": "Survey of the lobby chime grid that resolves guest arrival into tiered welcome figures.",
    "findings": "The chime grid resolves returning guests into audible tiers without any spoken acknowledgment, and concierge staff report guests \"arrive already calmed.\" Tier resolution accuracy held at 97% against the house registry. On one logged night the grid played the top-tier figure to an unregistered arrival; the guest was never identified and the desk record shows no face.",
    "ambientDecibels": "44.0 dBA atrium floor",
    "frequencyRange": "200 Hz — 14 kHz",
    "equipmentCluster": [
      "Fountain courtyard water score feed",
      "Chime grid controller, Geneva ROM",
      "House registry tape backup"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "fs-06",
    "stationCode": "GPC-FS-06",
    "location": "City of Ravensport Municipal Siren Grid",
    "coordinates": "47.5596° N, 7.5886° E",
    "elevation": "260 m ASL",
    "date": "1999-10-01",
    "leadInvestigator": "Dr. Renzo Malavasi",
    "title": "Siren Harmonic Synchronization — Nine-Zone Coherence",
    "abstract": "Municipal survey holding all nine siren zones in harmonic lock for quarterly certification.",
    "findings": "All nine zones achieved coherent lock on the civic triad at 220 Hz fundamental. The synchronized grid was found to calm the crowds it was designed to warn: test evacuations proceeded 18% slower but with zero crush events. The city council has twice declined to be told why the sirens now sound \"reassuring.\"",
    "ambientDecibels": "98.3 dBC at 100 m (test tone)",
    "frequencyRange": "110 Hz — 4 kHz",
    "equipmentCluster": [
      "Nine-zone phase-lock controller",
      "Municipal tower accelerometer set",
      "Nagra IV-S crowd reaction deck"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "fs-07",
    "stationCode": "GPC-FS-07",
    "location": "Autoroute A-7 Rest Area Acoustic Canopy, Rhône corridor",
    "coordinates": "45.7640° N, 4.8357° E",
    "elevation": "173 m ASL",
    "date": "2004-05-22",
    "leadInvestigator": "Sylvia Okafor",
    "title": "Rest Area Canopy — Driver Fatigue Shedding",
    "abstract": "Highway exposure study under the cantilevered canopy treating long-haul fatigue.",
    "findings": "Drivers resting under the canopy shed measurable fatigue within eleven minutes, twice the rate of the untreated lot. The canopy’s wind voices were tuned below the threshold of notice; two drivers reported having dreamed of the rest area before reaching it. One log entry records the canopy continuing its program during a complete power outage, which was later attributed to a misfiled inverter.",
    "ambientDecibels": "66.8 dBA lot perimeter",
    "frequencyRange": "50 Hz — 9 kHz",
    "equipmentCluster": [
      "Canopy wind sculpture array",
      "Parking structure echo post pair",
      "Fatigue response tap, kiosk mirror"
    ],
    "status": "Telemetry Lost"
  },
  {
    "id": "fs-08",
    "stationCode": "GPC-FS-08",
    "location": "São Sebastião Broadcast Relay, São Paulo",
    "coordinates": "23.5505° S, 46.6333° W",
    "elevation": "760 m ASL",
    "date": "2005-08-14",
    "leadInvestigator": "Dr. Renzo Malavasi",
    "title": "Broadcast Interruption Rehearsal — Regional Chain",
    "abstract": "Standing rehearsal of the regional broadcast chain’s interruption and resumption discipline.",
    "findings": "The relay completed 114 clean interruption rehearsals in eleven months, with the HIJACK-NULL guard rejecting every injected test carrier. On rehearsal 102 the chain resumed from an interruption no one had ordered; the broadcast that returned to air was our own continuity tape, eleven years out of date, played flawlessly.",
    "ambientDecibels": "52.1 dBA relay floor",
    "frequencyRange": "0.5 MHz — 30 MHz (RF floor)",
    "equipmentCluster": [
      "HIJACK-NULL interruption relay",
      "Mediumwave groundwave plotter",
      "Civil defense tape loop archive"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "fs-09",
    "stationCode": "GPC-FS-09",
    "location": "Cheonggu Retail Behavior Floor, Seoul",
    "coordinates": "37.5665° N, 126.9780° E",
    "elevation": "39 m ASL",
    "date": "2004-03-30",
    "leadInvestigator": "Petra Lindmark",
    "title": "Retail Behavior Floor — Purchase Intent Priming",
    "abstract": "Controlled floor where ambient figures prime purchase intent against an unprimed twin floor.",
    "findings": "The primed floor outperformed its twin by 14% in basket value over two seasons. Shoppers could not describe the difference between floors in interview, but drew the primed floor as \"warmer\" in memory sketches. On 2004-11-11 the priming figures were accidentally reversed for six hours; basket value rose anyway, and the reversal has never been satisfactorily explained.",
    "ambientDecibels": "59.7 dBA sales floor",
    "frequencyRange": "80 Hz — 13 kHz",
    "equipmentCluster": [
      "Purchase intent priming diffuser",
      "Four-corner observation booth",
      "Till velocity tap, 42 registers"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "fs-10",
    "stationCode": "GPC-FS-10",
    "location": "Aldergate Dam Control Room, British Columbia",
    "coordinates": "49.2827° N, 123.1207° W",
    "elevation": "340 m ASL",
    "date": "2004-10-08",
    "leadInvestigator": "Marta Ilves",
    "title": "Control Room Gravity Hum — Operator Vigilance",
    "abstract": "Continuity survey of the gravity hum that keeps dam operators vigilant through quiet shifts.",
    "findings": "The gravity hum holds operator vigilance at 96% of shift-start levels even in hour eight of the night watch. The hum is tuned to the dam’s own structural breathing; operators describe it as \"the dam remembering it is a dam.\" During the 2004 spillway inspection the hum was found to continue on the far side of the poured concrete, where no speaker exists.",
    "ambientDecibels": "41.3 dBA control floor",
    "frequencyRange": "18 Hz — 2 kHz",
    "equipmentCluster": [
      "Boardroom gravity hum generator",
      "Structural accelerometer, spillway pier",
      "Operator vigilance tap console"
    ],
    "status": "Continuous Stream"
  },
  {
    "id": "fs-11",
    "stationCode": "GPC-FS-11",
    "location": "Halcyon Ridge Continuity Bunker Test Site, Colorado Plateau",
    "coordinates": "38.5733° N, 109.5498° W",
    "elevation": "1,710 m ASL",
    "date": "2003-07-19",
    "leadInvestigator": "Elias Brandt",
    "title": "Bunker Muster Tone Certification — Full Occupancy Drill",
    "abstract": "Certification of the muster and roll-call suite under full shelter occupancy conditions.",
    "findings": "The muster tone achieved total personnel recall in 3 minutes 42 seconds at simulated loss-of-daylight conditions. The succession roll-call recorder preserved the full line of continuity through three staged leadership losses. On the final night of the drill, 41 of 60 occupants reported the same dream of an announcement in a language none of them spoke; the muster tape contains no such announcement.",
    "ambientDecibels": "33.6 dBA shelter floor",
    "frequencyRange": "60 Hz — 6 kHz",
    "equipmentCluster": [
      "Personnel muster tone generator",
      "Succession roll-call recorder",
      "Shelter occupancy acoustic calibrator"
    ],
    "status": "Expedition Concluded"
  },
  {
    "id": "fs-12",
    "stationCode": "GPC-FS-12",
    "location": "Reykjanes Geothermal Station, Iceland",
    "coordinates": "63.8667° N, 22.5833° W",
    "elevation": "40 m ASL",
    "date": "2006-01-21",
    "leadInvestigator": "Dr. Kenji Watabe",
    "title": "Turbine Hall Noise Compensation — Long-Range Forecast Floor",
    "abstract": "Forecast-floor calibration inside the compensated quiet of the turbine hall annex.",
    "findings": "Noise compensation delivered a 22 dB quiet pocket inside the running turbine hall, inside which the long-range oracle array posted its most stable forecast horizon of the program. The array’s final quarterly projection, filed 2006-02, predicted the termination of its own sponsor with a confidence interval of eleven months. The forecast was logged, sealed, and routed to the Vault.",
    "ambientDecibels": "38.9 dBA compensated pocket",
    "frequencyRange": "10 Hz — 20 kHz",
    "equipmentCluster": [
      "Turbine hall compensation array",
      "Long-range fiscal oracle feed",
      "Forecast error ledger terminal"
    ],
    "status": "Telemetry Lost"
  },
  {
    "id": "fs-13",
    "stationCode": "GPC-FS-13",
    "location": "Jebel Ali Free Zone, Warehouse 9, Dubai",
    "coordinates": "25.0105° N, 55.0635° E",
    "elevation": "8 m ASL",
    "date": "2005-02-11",
    "leadInvestigator": "Sylvia Okafor",
    "title": "Warehouse Wayfinding Tones — Forklift Corridor Discipline",
    "abstract": "Wayfinding survey threading acoustic corridor discipline through the free-zone warehouse.",
    "findings": "Wayfinding tones held forklift traffic inside marked corridors at 98.6% compliance with zero signage in Arabic, English, or Urdu — the tones required no language. Corridor discipline persisted for 72 hours after the tone system was powered down for maintenance, which the floor manager declined to report to port authority.",
    "ambientDecibels": "70.2 dBA racking aisle",
    "frequencyRange": "90 Hz — 11 kHz",
    "equipmentCluster": [
      "Wayfinding tone thread, 44 posts",
      "Forklift telemetry tap",
      "Parking structure echo post, dock mouth"
    ],
    "status": "Telemetry Lost"
  },
  {
    "id": "fs-14",
    "stationCode": "GPC-FS-14",
    "location": "Gander International Relay Hangar, Newfoundland",
    "coordinates": "48.9369° N, 54.5680° W",
    "elevation": "151 m ASL",
    "date": "2002-12-05",
    "leadInvestigator": "Cassius Wren",
    "title": "Relay Hangar Quiet Bay — Archive Recovery Beacon",
    "abstract": "The quiet bay from which the continuity archive is beaconed in the event of institutional loss.",
    "findings": "The quiet bay holds the lowest measured institutional noise floor in the network at 9.8 dBA. Its beacon completed all scheduled recovery rehearsals. Since the 2006 termination, the bay has continued to beacon on an eight-day cycle to no registered receiver. As of the 2026 restoration, the beacon is still transmitting, and the archive this website serves is its most recent payload.",
    "ambientDecibels": "9.8 dBA bay floor (network minimum)",
    "frequencyRange": "2 Hz — 22 kHz",
    "equipmentCluster": [
      "Alternate site handshake beacon",
      "Deep archive climate sonifier",
      "Recovery payload staging rack"
    ],
    "status": "Autonomous Beacon"
  }
];
