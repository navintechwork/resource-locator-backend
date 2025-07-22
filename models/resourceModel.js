import mongoose from 'mongoose';

const resourceSchema = mongoose.Schema(
  {
    resource_type: {
      type: String,
      required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    resource_category: {
        type: String,
        required: true,
    },
    resource_name: {
        type: String,
        required: true,
    },
    resource_age: {
        type: String,
        required: true,
    },
    resource_feedback: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Resource = mongoose.model('Resource', resourceSchema);