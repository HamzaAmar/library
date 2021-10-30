import mongoose from 'mongoose';

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this User.'],
    maxlength: [20, 'Name cannot be more than 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide a Email for this User.']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password for this User.'],
    maxlength: [30, 'Password cannot be more than 20 characters'],
    minlength: [6, 'Password cannot be more than 20 characters']
  },
  age: {
    type: Number,
    required: [true, 'Please provide a age for this User.']
  },
  image: {
    type: String
  },
  favoriteBook: {},
  status: {}
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
