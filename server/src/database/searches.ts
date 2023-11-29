import mongoose from 'mongoose';
import { userModel } from './users';

const searchSchema = new mongoose.Schema({
  country: { type: String },
  image: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const searchModel = mongoose.model('Search', searchSchema);

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

export const createSearch = (values: Record<string, any>) =>
  new searchModel(values).save().then(search => search.toObject());
