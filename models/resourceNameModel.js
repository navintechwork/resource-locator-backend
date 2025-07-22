import mongoose from 'mongoose';

const resourceNameSchema = mongoose.Schema(
  {
    resource_category: {
      type: String,
      required: true,
    },
    resource_name: {
        type: String,
        required: true,
      }
  },
  {
    timestamps: true,
  }
);

export const ResourceName = mongoose.model('ResourceName', resourceNameSchema);