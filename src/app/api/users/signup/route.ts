import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
    const { username, email, password } = await request.json();
    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = {
        username,
        password: hashedPassword,
        email
    }
    console.log("in post nu", newUser);
    try {
        await User.create(newUser);
        User.exists(newUser);
        return NextResponse.json({ message: "User created" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Some error occurred" }, { status: 500 });
    }
}

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}