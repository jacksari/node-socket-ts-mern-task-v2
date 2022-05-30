import { Schema, model } from 'mongoose';
import { Project } from '../data/project.data';

const ProjectSchema = new Schema<Project>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  client: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  collaborators: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
},{
  timestamps: true,
  collection: 'projects'
});

ProjectSchema.method('toJSON', function () {
  //const { __v, _id, ...object } = this.toObject();
  const { _id, ...object } = this.toObject();
  // object.uid = _id;
  return object;
});

export default model('Project', ProjectSchema);
