// order.model.ts
import { Schema, model, Types } from "mongoose";

// Interface untuk OrderItem
export interface OrderItem {
  name: string;
  productId: Types.ObjectId; // Referensi ke Product
  price: number;
  quantity: number;
}

// Interface untuk Order
export interface Order {
  grandTotal: number;
  orderItems: OrderItem[];
  createdBy: Types.ObjectId; // Referensi ke User
  status: "pending" | "completed" | "cancelled"; // Status order
  createdAt?: Date; // Tanggal dibuat
  updatedAt?: Date; // Tanggal di-update
}

// Schema untuk OrderItem
const orderItemSchema = new Schema<OrderItem>({
  name: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1, max: 5 },
});

// Schema untuk Order
const orderSchema = new Schema<Order>(
  {
    grandTotal: { type: Number, required: true },
    orderItems: { type: [orderItemSchema], required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
); // timestamps akan otomatis menambahkan createdAt dan updatedAt

// Export model Order untuk digunakan dalam aplikasi
export const OrderModel = model<Order>("Order", orderSchema);
