import mongoose, { Schema, Document, Model } from "mongoose";

interface IItem extends Document {
  title: string;
  description: string;
  image: string;
  user: string;
}

const itemSchema = new Schema<IItem>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: String,
  },
});

const Item: Model<IItem> = mongoose.models.Item || mongoose.model<IItem>("Item", itemSchema);
export default Item;