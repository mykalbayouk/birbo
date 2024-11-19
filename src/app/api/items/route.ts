import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
    await connectMongoDB();
    const items = await Item.find();
    return NextResponse.json({ items });
}

export async function POST(request: NextRequest) {
    const {title, description, image, user } = await request.json();
    await connectMongoDB();
    await Item.create({ title: title, description: description, image: image, user: user });
    return NextResponse.json({ message: "Item added successfully" }, { status: 201 })
}
