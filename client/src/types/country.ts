export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;
  cca3: string;
  unMember: boolean;
  capital: [string];
  altSpellings: [string];
  region: string;
  borders: [string];
  population: number;
  fifa: string;
  car: {
    signs: [];
    side: string;
  };
  timezones: [string];
  continents: [string];
  flags: {
    png: string;
    alt: string;
  };
  startOfWeek: string;
}
