import mongoose, { Document, mongo, Schema } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export const User = mongoose.models.User ?? mongoose.model("User", userSchema);