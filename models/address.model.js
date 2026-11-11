import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    houseNo: {
      type: String,
      required: true,
    },

    streetNo: {
      type: String,
    },

    landmark: {
      type: String,
    },

    locality: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    pincode: {
      type: String,
      required: true,
    }
  },
  {timestamps: true}
);

export const Address = mongoose.model('Address', addressSchema);