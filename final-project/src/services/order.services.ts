import { OrderModel, Order } from "../models/order.models";
import { Types } from "mongoose";
import { ProductsModel } from "../models/products.model";

export const createOrder = async (payload: Order): Promise<Order> => {
  const order = await OrderModel.create(payload);

  // Loop melalui item dalam order untuk mengurangi stok produk
  for (const item of payload.orderItems) {
    const product = await ProductsModel.findById(item.productId);

    if (!product) {
      throw new Error(`Product with ID ${item.productId} not found`);
    }

    if (product.qty < item.quantity) {
      throw new Error(`Not enough stock for product ${product.name}`);
    }

    // Kurangi stok produk
    product.qty -= item.quantity;
    await product.save();
  }

  return order;
};

export const findAllOrders = async (): Promise<Order[]> => {
  const result = await OrderModel.find();
  return result;
};

export const findOrderById = async (id: string): Promise<Order | null> => {
  const result = await OrderModel.findById(id);
  return result;
};

export const updateOrderStatus = async (
  id: string,
  status: string
): Promise<Order | null> => {
  const result = await OrderModel.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
  return result;
};

export const deleteOrder = async (id: string): Promise<Order | null> => {
  const result = await OrderModel.findByIdAndDelete(id);
  return result;
};

export const userOrder = async (
  userId: string,
  page: number = 1,
  limit: number = 10
) => {
  // Validasi userId
  if (!Types.ObjectId.isValid(userId)) {
    throw new Error("Invalid user ID");
  }

  // Mengambil order berdasarkan userId dengan pagination
  const orders = await OrderModel.find({ createdBy: userId })
    .skip((page - 1) * limit) // Skip berdasarkan halaman
    .limit(limit) // Batas jumlah data per halaman
    .sort({ createdAt: -1 }); // Mengurutkan berdasarkan tanggal terbaru

  // Menghitung total order untuk pagination
  const totalOrders = await OrderModel.countDocuments({ createdBy: userId });

  return {
    totalOrders,
    totalPages: Math.ceil(totalOrders / limit),
    currentPage: page,
    orders,
  };
};
