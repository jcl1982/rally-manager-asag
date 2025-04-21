
import { Event, EventType, Registration, Participant, Car, Equipment, License } from "@/types";

// Données d'exemple pour les événements
export const mockEvents: Event[] = [
  {
    id: "1",
    name: "Rallye du Mont-Blanc",
    type: EventType.RALLY,
    date: "2025-06-15",
    location: "Morzine, France",
    description: "Le Rallye du Mont-Blanc est une épreuve mythique du championnat de France des rallyes.",
    organizerName: "ASA Mont-Blanc",
    organizerPhone: "04 50 52 30 26",
    organizerEmail: "contact@rallye-mont-blanc.com",
    registrationDeadline: "2025-05-30",
    imageUrl: "https://picsum.photos/800/400?random=1"
  },
  {
    id: "2",
    name: "Course de Côte du Col Saint-Pierre",
    type: EventType.HILL_CLIMB,
    date: "2025-07-22",
    location: "Saint-Jean-du-Gard, France",
    description: "La Course de Côte du Col Saint-Pierre est une épreuve comptant pour le championnat de France de la montagne.",
    organizerName: "ASA Alès",
    organizerPhone: "04 66 55 65 66",
    organizerEmail: "contact@asa-ales.org",
    registrationDeadline: "2025-07-10",
    imageUrl: "https://picsum.photos/800/400?random=2"
  },
  {
    id: "3",
    name: "Slalom de Bordeaux-Mérignac",
    type: EventType.SLALOM,
    date: "2025-08-10",
    location: "Mérignac, France",
    description: "Le Slalom de Bordeaux-Mérignac se déroule sur le parking de l'aéroport de Mérignac.",
    organizerName: "ASA du Sud-Ouest",
    organizerPhone: "05 56 52 35 60",
    organizerEmail: "contact@asasudouest.fr",
    registrationDeadline: "2025-08-01",
    imageUrl: "https://picsum.photos/800/400?random=3"
  }
];

// Données d'exemple pour les licences
const mockLicenses: Record<string, License> = {
  pilot1: {
    number: "123456",
    type: "Internationale Concurrent Conducteur",
    expiryDate: "2025-12-31",
    asmName: "ASK Karting",
    asmCode: "1234"
  },
  copilot1: {
    number: "789012",
    type: "Internationale Concurrent Conducteur",
    expiryDate: "2025-12-31",
    asmName: "ASA Sud Bourgogne",
    asmCode: "5678"
  },
  pilot2: {
    number: "345678",
    type: "Nationale Concurrent Conducteur",
    expiryDate: "2025-12-31",
    asmName: "ASA Mont-Blanc",
    asmCode: "9012"
  }
};

// Données d'exemple pour les participants
export const mockParticipants: Record<string, Participant> = {
  pilot1: {
    id: "p1",
    firstname: "Pierre",
    lastname: "Dupont",
    birthDate: "1985-05-12",
    address: "15 rue des Pilotes",
    postalCode: "75001",
    city: "Paris",
    country: "France",
    phone: "06 12 34 56 78",
    email: "pierre.dupont@example.com",
    license: mockLicenses.pilot1,
    bloodGroup: "A+"
  },
  copilot1: {
    id: "c1",
    firstname: "Sophie",
    lastname: "Martin",
    birthDate: "1988-09-24",
    address: "8 avenue des Navigateurs",
    postalCode: "69002",
    city: "Lyon",
    country: "France",
    phone: "06 98 76 54 32",
    email: "sophie.martin@example.com",
    license: mockLicenses.copilot1,
    bloodGroup: "O-"
  },
  pilot2: {
    id: "p2",
    firstname: "Lucas",
    lastname: "Bernard",
    birthDate: "1990-03-18",
    address: "42 boulevard des Sports",
    postalCode: "33000",
    city: "Bordeaux",
    country: "France",
    phone: "06 45 67 89 10",
    email: "lucas.bernard@example.com",
    license: mockLicenses.pilot2
  }
};

// Données d'exemple pour les voitures
export const mockCars: Car[] = [
  {
    id: "car1",
    brand: "Peugeot",
    model: "208 Rally4",
    year: 2022,
    homologationNumber: "A-5780",
    engineCapacity: 1200,
    registrationNumber: "AB-123-CD",
    chassisNumber: "VF3CCBHYXHT123456",
    group: "RC4",
    class: "Rally4",
    passportNumber: "123456",
    technicalPassportNumber: "987654"
  },
  {
    id: "car2",
    brand: "Renault",
    model: "Clio RS",
    year: 2020,
    homologationNumber: "A-5764",
    engineCapacity: 1600,
    registrationNumber: "EF-456-GH",
    chassisNumber: "VF15RPNJ6PS345678",
    group: "A",
    class: "5",
    passportNumber: "234567",
    technicalPassportNumber: "876543"
  }
];

// Données d'exemple pour les équipements
export const mockEquipments: Equipment[] = [
  {
    id: "eq1",
    participantId: "p1",
    helmetBrand: "Stilo",
    helmetModel: "ST5",
    helmetHomologationNumber: "SNELL SA2020-12345",
    helmetExpiryDate: "2030-12-31",
    suitBrand: "Sparco",
    suitModel: "Victory",
    suitHomologationNumber: "FIA 8856-2018",
    suitExpiryDate: "2029-12-31",
    underwearBrand: "Alpinestars",
    underwearModel: "Race v3",
    underwearHomologationNumber: "FIA 8856-2018",
    underwearExpiryDate: "2029-12-31",
    glovesBrand: "OMP",
    glovesModel: "One-S",
    glovesHomologationNumber: "FIA 8856-2018",
    glovesExpiryDate: "2027-12-31",
    shoesBrand: "Sparco",
    shoesModel: "Formula RB-8",
    shoesHomologationNumber: "FIA 8856-2018",
    shoesExpiryDate: "2028-12-31",
    hasBalaclava: true,
    hasHANS: true
  },
  {
    id: "eq2",
    participantId: "c1",
    helmetBrand: "Bell",
    helmetModel: "HP7",
    helmetHomologationNumber: "FIA 8860-2018-67890",
    helmetExpiryDate: "2030-12-31",
    suitBrand: "OMP",
    suitModel: "First-S",
    suitHomologationNumber: "FIA 8856-2018",
    suitExpiryDate: "2028-12-31",
    underwearBrand: "OMP",
    underwearModel: "First",
    underwearHomologationNumber: "FIA 8856-2018",
    underwearExpiryDate: "2028-12-31",
    glovesBrand: "Alpinestars",
    glovesModel: "Tech 1-Z",
    glovesHomologationNumber: "FIA 8856-2018",
    glovesExpiryDate: "2026-12-31",
    shoesBrand: "OMP",
    shoesModel: "First-S",
    shoesHomologationNumber: "FIA 8856-2018",
    shoesExpiryDate: "2027-12-31",
    hasBalaclava: true,
    hasHANS: true
  }
];

// Données d'exemple pour les inscriptions
export const mockRegistrations: Registration[] = [
  {
    id: "reg1",
    eventId: "1",
    pilot: mockParticipants.pilot1,
    copilot: mockParticipants.copilot1,
    car: mockCars[0],
    pilotEquipment: mockEquipments[0],
    copilotEquipment: mockEquipments[1],
    registrationDate: "2025-05-10",
    paymentStatus: "PAID",
    validated: true,
    amount: 550,
    comments: "Premier engagement de la saison"
  },
  {
    id: "reg2",
    eventId: "3",
    pilot: mockParticipants.pilot2,
    car: mockCars[1],
    pilotEquipment: mockEquipments[0],
    registrationDate: "2025-07-25",
    paymentStatus: "PENDING",
    validated: false,
    amount: 250
  }
];
