import { connectToDB } from "@/DB-Config/DBConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

//connecting to DB
connectToDB()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, password } = reqBody
        console.log("from req ",reqBody);

        //check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return NextResponse.json(
               { error: "user already exists"},
               { status: 400}
            )
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        console.log("hashedPassword ", hashedPassword);
        

        //create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
        console.log("new User",newUser);

        const savedUser = await newUser.save()
        console.log(" savedUser",savedUser);

        return NextResponse.json(
           { message:"user craeted successfully"},
            savedUser
        )


    } catch (error: any) {
        return NextResponse.json(
           { error: error.message},
           { status: 500}
        )
    }
}

export async function GET(){
    return new NextResponse("This is from get signup")
}
