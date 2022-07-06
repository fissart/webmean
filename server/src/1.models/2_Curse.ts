import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: String,
  description: String,
  img: String,
  user: {
    type: Schema.Types.ObjectId,
  }
});

export interface ICurse extends Document {
  title: string;
  description: string;
  img: string,
  user: {
    type: Schema.Types.ObjectId,
  }
}

export default model<ICurse>('Curse', schema);