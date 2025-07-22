import mongoose from 'mongoose';

const adminUserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    storeName: {
      type: String,
      required: true,
    },
    storeDescription: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    mobilecode: {
      type: String,
      required: true,
    },
    mobilenumber: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const AdminUser = mongoose.model('AdminUser', adminUserSchema);