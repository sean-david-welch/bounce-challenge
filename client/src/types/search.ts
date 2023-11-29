import { Country } from './country';

export interface Search {
  _id: string;
  country: Country;
  user: string;
}
