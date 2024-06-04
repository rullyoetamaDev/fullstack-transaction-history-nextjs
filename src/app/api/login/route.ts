import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async (req : Request) => {
    try {
        const user = await db.user.findMany()
        return NextResponse.json({
            user : user
        })
    } catch (error) {
        return NextResponse.json({
            user : "not"
        })
    }
}