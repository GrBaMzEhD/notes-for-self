import mongoose from 'mongoose';
import dotenv from 'dotenv';
import slugify from 'slugify';

dotenv.config({ path: './config.env' });

const noteSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
      required: [true, 'A note must have an owner'],
    },
    title: {
      type: String,
      required: [true, 'A note needs to have a title'],
    },
    date_created: {
      type: Date,
      default: Date.now(),
    },
    note_content: {
      type: String,
      required: [true, 'A note cannot be empty'],
    },
    id: {
      type: String,
      select: false,
    },
    slug: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

noteSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true, remove: /[*+~.()'"!:@]/g });
  next();
});
const Note = mongoose.model('Note', noteSchema);

export default Note;
