import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Category extends Document {
  name: string;
}

const CategoriesSchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoriesModel = mongoose.model<Category>(
  "Categories",
  CategoriesSchema
);

export { CategoriesModel, Category };
