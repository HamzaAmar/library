import mongoose from 'mongoose';

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'the name is required field']
  },
  description: {
    type: String,
    required: [true, 'the name is required field']
  },
  img: {
    src: {
      type: String,
      required: [true, 'the name is required field']
    },
    alt: {
      type: String,
      required: [true, 'the alt is required field']
    }
  },
  price: {
    type: Number,
    required: [true, 'the name is required field']
  },
  rating: {
    type: Number,
    required: [true, 'the name is required field']
  },
  pages: {
    type: Number,
    required: [true, 'the name is required field']
  },
  language: {
    type: String,
    required: [true, 'the language is required field']
  },
  published_data: '14/09/2010',
  authors: ['Andy Weir']
});
