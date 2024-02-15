import { connectToDB } from "@/DB-Config/DBConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";

connectToDB()

export async function POST(request: NextRequest) {
    try {
        const reqBoday = await request.json()
        const { token } = reqBoday
        console.log("token", token);

        const user = await User.findOne({ verfiedToken: token, verfiedTokenExpiry: { $gt: Date.now() } })

        if (!user) {
            return NextResponse.json({ error: "Invalid Token" })
        }
        console.log("user", user);

        user.isVerfied = true
        user.verfiedToken = undefined
        user.verfiedTokenExpiry = undefined
        await user.save()

        return NextResponse.json({ message: "Email verified successfully" })
    } catch (error: any) {
        return NextResponse.json({ error: error.message })
    }
}