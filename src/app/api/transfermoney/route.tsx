import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();

  try {
    const {
      id_transaction,
      username,
      to_username,
      amount,
      balance,
      description,
      status,
    } = body;

    if (!amount) {
      return NextResponse.json({
        status: 400,
        description: "Insufficient amount",
      });
    }

        //Check user
        if(to_username == username || !username){
          return NextResponse.json({
            status: 400,
            description: "Insufficient username",
          });
        }

    // check existing user destination
    const existingUserDestination = await db.user.findUnique({
      where: {
        username: to_username,
      },
    });

    if (!existingUserDestination) {
      return NextResponse.json({
        status: 404,
        description: "Destination user not found",
      });
    }

    // check balance
    const existingBalance:any = await db.balanceUser.findMany({
      where: {
        username: username,
      },
    });

    if (!existingBalance || existingBalance.balance < amount) {
      return NextResponse.json({
        status: 400,
        description: "Insufficient balance",
      });
    }

    const newUser = await db.transaction.create({
      data: {
        id_transaction,
        username,
        to_username,
        amount,
        description,
        status,
      },
    });

    const toUser = await db.transaction.create({
      data: {
        id_transaction,
        username : to_username,
        to_username : username,
        amount,
        description,
        status : "money in",
      },
    });

    const updateBalance: any = await db.balanceUser.updateMany({
      where: {
        username: to_username,
      },
      data: {
        username: to_username,
        balance: balance,
      },
    });

    return NextResponse.json({
      user: newUser,
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
