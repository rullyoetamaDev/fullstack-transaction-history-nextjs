import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const { username, balance } = body;
    // console.log("chek - body : ", body)

    const updateBalance: any = await db.balanceUser.updateMany({
      where: {
        username: username,
      },
      data: {
        username: username,
        balance: balance,
      },
    });

    return NextResponse.json({
      user: updateBalance,
      status: 204,
      description: "Success",
    });
  } catch (error) {
    return NextResponse.json({
      messsage: error,
      status: 500,
    });
  }
};
