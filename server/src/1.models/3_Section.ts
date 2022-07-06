import { timeStamp } from 'console';
import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  title: String,
  description: String,
  img: String,
  test: String,
  task: String,
  time: String,  
    timeex: String,


  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  }
});

export interface ISection extends Document {
  title: string,
  description: string,
  img: string,
  test: string,
  task: string,
  time: string,
    timeex: string,


  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  }
}

export default model<ISection>('Section', schema);
