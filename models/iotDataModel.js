import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    timestamp: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    pressure: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    altitude: {
      type: Number,
      required: true,
    }
  },
  { collection: 'iot-bme' }
);

export const Iot = mongoose.model('Iot-bme', bookSchema);