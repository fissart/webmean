import { timeStamp } from 'console';
import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  img: String,
  task: String,
  note: String,
  theme: {
    type: Schema.Types.ObjectId,
  },
  unidad: {
    type: Schema.Types.ObjectId,
  },
  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  }
});

export interface ITask extends Document {
  img: string,
  task: string,
  note: string,
  theme: {
    type: Schema.Types.ObjectId,
  },
  unidad: {
    type: Schema.Types.ObjectId,
  },
  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  }
}

export default model<ITask>('Task', schema);
