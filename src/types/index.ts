
// Types d'événement
export enum EventType {
  RALLY = "Rallye",
  HILL_CLIMB = "Course de côte",
  SLALOM = "Slalom"
}

// Interface pour les événements
export interface Event {
  id: string;
  name: string;
  type: EventType;
  date: string;
  location: string;
  description: string;
  organizerName: string;
  organizerPhone: string;
  organizerEmail: string;
  registrationDeadline: string;
  imageUrl?: string;
}

// Interface pour les licences
export interface License {
  number: string;
  type: string;
  expiryDate: string;
  asmName: string;
  asmCode: string;
}

// Interface pour les participants (pilotes et copilotes)
export interface Participant {
  id: string;
  firstname: string;
  lastname: string;
  birthDate: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  license: License;
  bloodGroup?: string;
}

// Interface pour les voitures
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  homologationNumber: string;
  engineCapacity: number;
  registrationNumber: string;
  chassisNumber: string;
  group: string;
  class: string;
  passportNumber?: string;
  technicalPassportNumber?: string;
}

// Interface pour les équipements
export interface Equipment {
  id: string;
  participantId: string;
  helmetBrand: string;
  helmetModel: string;
  helmetHomologationNumber: string;
  helmetExpiryDate: string;
  suitBrand: string;
  suitModel: string;
  suitHomologationNumber: string;
  suitExpiryDate: string;
  underwearBrand?: string;
  underwearModel?: string;
  underwearHomologationNumber?: string;
  underwearExpiryDate?: string;
  glovesBrand?: string;
  glovesModel?: string;
  glovesHomologationNumber?: string;
  glovesExpiryDate?: string;
  shoesBrand?: string;
  shoesModel?: string;
  shoesHomologationNumber?: string;
  shoesExpiryDate?: string;
  hasBalaclava: boolean;
  hasHANS: boolean;
}

// Interface pour les inscriptions
export interface Registration {
  id: string;
  eventId: string;
  pilot: Participant;
  copilot?: Participant; // Optionnel car pas de copilote pour les Courses de côte et Slaloms
  car: Car;
  pilotEquipment: Equipment;
  copilotEquipment?: Equipment;
  registrationDate: string;
  paymentStatus: 'PENDING' | 'PAID' | 'CANCELLED';
  validated: boolean;
  amount: number;
  comments?: string;
}
