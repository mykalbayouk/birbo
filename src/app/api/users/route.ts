import connectMongoDB from "@/libs/mongodb";
import { User } from "@/models/userSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users });
}