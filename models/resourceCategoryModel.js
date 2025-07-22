import mongoose from 'mongoose';

const resourceCategorySchema = mongoose.Schema(
  {
    resource_category: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const ResourceCategory = mongoose.model('ResourceCategory', resourceCategorySchema);