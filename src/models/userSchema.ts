import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

let User: Model<IUser>;
try {
    User = mongoose.model<IUser>("User");
} catch {
    User = mongoose.model<IUser>("User", userSchema);
}

export default User;