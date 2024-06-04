import { db } from "@/lib/db"
import { hash } from "bcrypt";
import { NextResponse } from "next/server"

export const POST = async (req:Request) => {
    const body = await req.json();
  
    try {
        const {email,username,password} =body

        //check if email is already
        const existingUserByEmail = await db.user.findUnique({
            where : {email : email}
        })

        if(existingUserByEmail){
            return NextResponse.json({
                user : null,
                description : "Email already exists"
            },{status : 409})
        }

        //check if username is already
        const existingUserByUsername = await db.user.findUnique({
            where : {username : username}
        })

        if(existingUserByUsername){
            return NextResponse.json({
                user : null,
                description : "Username already exists"
            },{status : 409})
        }

        const newBalance = await db.balanceUser.create({
            data : {     
                username,
                balance : 0,
            }
        })

        const hashPassword = await hash(password,10)
        const newUser = await db.user.create({
            data : {
                email,
                username,
                password : hashPassword,
                token :"masihdevrully123"
            }
        })

        const {password:newUserPassword, ...rest} = newUser
        
        return NextResponse.json({
            user : rest,
            status : 201,
            description : "Success"
        })
    } catch (error) {
        return NextResponse.json({
            messsage : "Something when wrong!!",
            status : 500,
        })
    }
}