import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  authentication: {
    password: { type: String, require: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const userModel = mongoose.model('User', UserSchema);

export const getUsers = () => userModel.find();
export const getUserByEmail = (email: string) => userModel.findOne({ email });

export const getUserByEmailOrUsername = (identifier: string) => {
  return userModel.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  });
};

export const getUserBySessionToken = (sessionToken: string) =>
  userModel.findOne({
    'authentication.sessionToken': sessionToken,
  });

export const getUserById = (id: string) => userModel.findById(id);

export const createUser = (values: Record<string, any>) => new userModel(values).save().then(user => user.toObject());

export const deleteUserById = (id: string) =>
  userModel.findByIdAndDelete({
    _id: id,
  });

export const updateUserById = (id: string, values: Record<string, string>) => userModel.findByIdAndUpdate(id, values);
