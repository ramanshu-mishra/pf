import mongoose from "mongoose"


interface IMessage {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    contact: string;
    message: string;
}

const messageSchema = new mongoose.Schema({
    name: {type: String, required:true},
    contact: {type:String, required:true},
    message: {type:String, required:true}
})

export const message = mongoose.models.message || mongoose.model("message", messageSchema);
export type {IMessage}