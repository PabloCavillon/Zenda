import { Document, model, Schema, Types } from "mongoose";


export interface ICuriosity extends Document {
    animalId: Types.ObjectId;
    text: string;
}

const curiositySchema = new Schema<ICuriosity>( 
    {
        animalId: { type: Schema.Types.ObjectId, ref: 'Animal', required: true },
        text: { type: String, required: true }
    },
    {
        versionKey: false,
        toJSON: {
            virtuals:true
        }
    }
)

export default model<ICuriosity>('Curiosity', curiositySchema);