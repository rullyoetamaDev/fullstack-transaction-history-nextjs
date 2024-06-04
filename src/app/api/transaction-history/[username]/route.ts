import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export const GET = async (req: Request, {params} : {params:{username:string}}) => {
    //console.log("check- params : ",params)
    try {
        //const {username} = body
        const user = await db.transaction.findMany({
            // where: {
            //     username: {
            //         in: [params.username]
            //     }
            // }
            where: {
                username: params.username
            }
        })
        return NextResponse.json({
            user: user,
            status : 200
        })
    } catch (error) {
        return NextResponse.json({
            user: "not",
            status : 500
        })
    }
}