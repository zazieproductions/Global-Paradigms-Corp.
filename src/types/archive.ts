export type Domain =
  | 'Predictive Modeling'
  | 'Scenario Architecture'
  | 'Continuity Logistics'
  | 'Emergency Broadcast Systems'
  | 'Behavioral Compliance'
  | 'Opinion Topology'
  | 'Ambient Soundscaping'
  | 'Subliminal Acoustics';

export type ClearanceLevel = 'Level I (Public)' | 'Level II (Internal)' | 'Level III (Restricted)' | 'Level IV (Continuity Vault)';

export type PrototypeStatus = 'Active Program' | 'Field Verified' | 'Archived' | 'Decommissioned' | 'Client Deployment';

export interface PrototypeRecord {
  id: string;
  code: string;
  name: string;
  domain: Domain;
  year: number;
  status: PrototypeStatus;
  clearance: ClearanceLevel;
  lead: string;
  summary: string;
  specifications: Record<string, string>;
  schematicType: string;
  audioEnginePreset?: string;
  crossReferences: string[];
  tags: string[];
}

export interface PatentDossier {
  patentNumber: string;
  title: string;
  filingDate: string;
  grantDate: string;
  status: 'Granted' | 'Under Defense' | 'Classification Embargo' | 'Lapsed — Public Domain';
  cpcClassification: string;
  inventors: string[];
  assignee: string;
  abstract: string;
  independentClaims: string[];
  dependentClaims: string[];
  priorArt: string[];
  linkedPrototypeId: string;
  diagramTitle: string;
  diagramDescription: string;
  schematicType: 'transducer' | 'resonator' | 'interferometer' | 'circuit' | 'waveguide' | 'matrix';
}

export interface LabLog {
  id: string;
  date: string;
  division: string;
  author: string;
  title: string;
  anomalyRating: 1 | 2 | 3 | 4 | 5; // 1 = baseline, 5 = critical containment breach
  content: string;
  equipmentUsed: string[];
  spectrogramNote: string;
  tags: string[];
  clearance: ClearanceLevel;
}

export interface FieldReport {
  id: string;
  stationCode: string;
  location: string;
  coordinates: string;
  elevation: string;
  date: string;
  leadInvestigator: string;
  title: string;
  abstract: string;
  findings: string;
  ambientDecibels: string;
  frequencyRange: string;
  equipmentCluster: string[];
  status: 'Continuous Stream' | 'Expedition Concluded' | 'Telemetry Lost' | 'Autonomous Beacon';
}

export interface TechnicalEssay {
  id: string;
  doi: string;
  date: string;
  title: string;
  authors: string[];
  abstract: string;
  sections: {
    heading: string;
    content: string;
    equation?: string;
  }[];
  references: string[];
  tags: string[];
}

export interface FailedProject {
  id: string;
  code: string;
  name: string;
  operatingPeriod: string;
  causeOfFailure: string;
  failureMode: string;
  safetyHazard: string;
  containmentProtocol: string;
  postMortemSummary: string;
  decommissioningOfficer: string;
}

export interface ExhibitionRecord {
  id: string;
  title: string;
  venue: string;
  city: string;
  year: number;
  curator: string;
  description: string;
  technicalSetup: string;
  audienceReception: string;
  archivalArtifacts: string[];
}

export interface ResidentProfile {
  id: string;
  name: string;
  title: string;
  division: string;
  tenure: string;
  clearance: ClearanceLevel;
  specialization: string[];
  bio: string;
  notableInventions: string[];
}

export interface RevisionEntry {
  commitHash: string;
  date: string;
  author: string;
  category: 'SYSTEMS' | 'AUDIT' | 'DIRECTIVE' | 'CONTAINMENT' | 'BULLETIN' | 'FIELD_SURVEY' | 'PATENT_FILING' | 'INFRASTRUCTURE';
  message: string;
  impactScore: 'NOMINAL' | 'ELEVATED' | 'CRITICAL';
}
