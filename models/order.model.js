import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    }
  },
);

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    orderItems: {
      type: [orderItemSchema],
      required: true,
    },

    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },

    status: {
      type: String,
      enum: ["Ordered", "Shipped", "Out for Delivery", "Delivered", "Cancelled"],
      default: "Ordered",
    },
  },
  {timestamps: true}
);

const Order = mongoose.model('Order', orderSchema);