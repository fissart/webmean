import { Schema, model, Document } from 'mongoose'
const schema = new Schema({
    title: String,
    type: String,
    description: String,
    file: String,
    user: {
      type: Schema.Types.ObjectId,
    },
    responce: String,
},{
    timestamps: true
});
export interface ICollection extends Document {
  title: string,
  type: string,
  description: string,
  file: string,
  user: {
    type: Schema.Types.ObjectId,
  },
  responce: string,
}
export default model<ICollection>('Collection', schema);
