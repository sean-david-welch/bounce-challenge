import mongoose from 'mongoose';
import { userModel } from './users';

const nameSchema = new mongoose.Schema({
  common: String,
  official: String,
});

const currencySchema = new mongoose.Schema(
  {
    currencies: {
      type: Map,
      of: String,
    },
  },
  { _id: false }
);

const languageSchema = new mongoose.Schema(
  {
    languages: {
      type: Map,
      of: String,
    },
  },
  { _id: false }
);

const carSchema = new mongoose.Schema({
  signs: [String],
  side: String,
});

const flagSchema = new mongoose.Schema({
  png: String,
  alt: String,
});

const countrySchema = new mongoose.Schema({
  name: nameSchema,
  cca2: String,
  cca3: String,
  unMember: Boolean,
  currencies: currencySchema,
  capital: [String],
  altSpellings: [String],
  region: String,
  languages: languageSchema,
  borders: [String],
  population: Number,
  fifa: String,
  car: carSchema,
  timezones: [String],
  continents: [String],
  flags: flagSchema,
  startOfWeek: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const searchModel = mongoose.model('Search', countrySchema);

export const getSearchByUser = async (username: string) => {
  try {
    const user = await userModel.findOne({ username: username }).exec();
    if (!user) {
      throw new Error('User not found');
    }

    return await searchModel.find({ user: user._id }).exec();
  } catch (error) {
    console.error('Error in getSearchByUser:', error);
    throw error;
  }
};

export const getSearchById = (id: string) => searchModel.findById(id);

export const deleteSearchById = (id: string) =>
  searchModel.findByIdAndDelete({
    _id: id,
  });

export const createSearch = async (values: Record<string, any>) => {
  try {
    const search = await new searchModel(values).save();
    return search.toObject();
  } catch (error) {
    console.error('Error creating search:', error);
    throw error;
  }
};
