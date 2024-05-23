import mongoose, {Schema, Document} from 'mongoose';
// document for typesafety

export interface Message extends Document {
  content: string;
  createdAt: Date;
}


const MessageSchema: Schema = new Schema({
    
})