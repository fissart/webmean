import { Schema, model, Document } from 'mongoose'
const schema = new Schema({
    nota: String,
    curse: String,
    user: String,
    carrera: String,
    ciclo: String,
    year: String,
    carwww: String
},{
    timestamps: true
});
export interface IBook extends Document {
    title: string,
    type: string,
    subtype: string,
    author: string,
    description: string,
    file: string,
    user: {
      type: Schema.Types.ObjectId,
    },
}
export default model<IBook>('Book', schema)
