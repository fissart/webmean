import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: String,
  description: String,
  img: String,
  show: String,
  user: {
    type: Schema.Types.ObjectId,
  }
});

export interface INews  extends Document {
  title: string;
  description: string;
  img: string,
  show: String,
  user: {
    type: Schema.Types.ObjectId,
  }
}

export default model<INews>('News', schema);
