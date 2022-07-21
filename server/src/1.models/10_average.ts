import { Schema, model, Document } from 'mongoose'
const schema = new Schema({
    nota: String,
    teacher: {
        type: Schema.Types.ObjectId,
      },
    user: {
        type: Schema.Types.ObjectId,
      },
    curse: {
        type: Schema.Types.ObjectId,
      },
    title: String,
    ciclo: String,
    credito: String,
    especialidad: String,
    year: String,
},{//nota, teacher, user, curse, title, ciclo, credito, especialidad
    timestamps: true
});
export interface IAverage extends Document {
  nota: string,
  teacher: {
      type: Schema.Types.ObjectId,
    },
  user: {
      type: Schema.Types.ObjectId,
    },
  curse: {
      type: Schema.Types.ObjectId,
    },
  title: string,
  ciclo: string,
  credito: string,
  especialidad: string,
  year: string,
}
export default model<IAverage>('Average', schema)
