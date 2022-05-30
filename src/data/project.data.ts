import { Document, Schema } from "mongoose";

export interface Project extends Document{
  name: string;
  description: string;
  client: string,
  user: Schema.Types.ObjectId,
  created_at: Date,
  updated_at: Date,
  collaborators: Schema.Types.ObjectId[]
}