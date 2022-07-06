import { Schema, model, Document } from 'mongoose'
const schema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
    },
    responce: String,
    idresponce: {
      type: Schema.Types.ObjectId,
    },
},{
    timestamps: true
});
export interface IResponce extends Document {
  user: {
    type: Schema.Types.ObjectId,
  },
  responce: string,
  idresponce: {
    type: Schema.Types.ObjectId,
  },
}
export default model<IResponce>('Responce', schema);
