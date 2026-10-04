export type NavigationTab = 
  | 'home' 
  | 'flights' 
  | 'umrah' 
  | 'visas' 
  | 'safaris' 
  | 'contact';

export interface FlightOption {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  fromCode: string;
  fromCity: string;
  fromAirport: string;
  toCode: string;
  toCity: string;
  toAirport: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopDetails?: string;
  priceUSD: number;
  baggage: string;
  cabinClass: 'Economy' | 'Business';
  seatsLeft: number;
  daysAvailable: string[];
}

export interface UmrahPackage {
  id: string;
  name: string;
  badge: string;
  durationDays: number;
  makkahHotel: string;
  makkahDistance: string;
  madinahHotel: string;
  madinahDistance: string;
  priceUSD: number;
  rating: number;
  season: string;
  inclusions: string[];
  departureAirports: string[];
  imageUrl: string;
}

export interface VisaProduct {
  id: string;
  title: string;
  destination: string;
  validity: string;
  processingTime: string;
  priceUSD: number;
  badge?: string;
  description: string;
  requirements: string[];
  eligiblePassports: string[];
  popular?: boolean;
}

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  priceUSD: number;
  highlights: string[];
  imageUrl: string;
  badge: string;
}

export interface BookingSubmission {
  reference: string;
  serviceType: 'Flight' | 'Umrah' | 'Visa' | 'Safari';
  passengerName: string;
  email: string;
  phone: string;
  origin?: string;
  destination?: string;
  travelDate: string;
  passengersCount: number;
  totalUSD: number;
  status: 'Confirmed' | 'Reviewing' | 'Dispatched';
  timestamp: string;
}
