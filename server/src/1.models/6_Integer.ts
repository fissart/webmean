//import { timeStamp } from 'console';
import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
  curse: {
    type: Schema.Types.ObjectId,
  },
  user: {
    type: Schema.Types.ObjectId,
  },
  userteach: {
    type: Schema.Types.ObjectId,
  }
});

export interface IInteger extends Document {
  curse: {
    type: Schema.Types.ObjectId,
  },
  usercurse: {
    type: Schema.Types.ObjectId,
  },
  userchild: {
    type: Schema.Types.ObjectId,
  }
}

export default model<IInteger>('Integer', schema);