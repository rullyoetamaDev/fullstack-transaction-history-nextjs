"use server";

import { getServerSession } from "next-auth";
import { authOption } from "../lib/auth";
import { getBalance } from "@/lib/utils";

export const handleSubmit = async (to_username: string, amount: number, deskripsi : string) => {
  const session = await getServerSession(authOption);
  //console.log("check : session di handleSubmit : ", session);

  const username: any = session?.user?.name;

  const [data] = await Promise.all([getBalance(username)]);
  const [dataToUsername] = await Promise.all([getBalance(to_username)]);
  //const dataBalance = data.map((test) => {return test})
  //console.log("check : deskripsi di handleSubmit : ", deskripsi);

  //Update balance User
  const userBalance: number = data[0].balance - amount;
  const toUserBalance: number = dataToUsername[0].balance + amount;

  let dataReturn : [] = [] 

  const response = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/topupbalance"
      : "http://localhost:3000/api/topupbalance",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        balance: userBalance,
      }),
    }
  )
    .then(function (a) {
      return a.json(); // call the json method on the response to get JSON
    })
    .then(function (json) {
      console.log("check : json di SubmitTopUp : ", json);
    });

  // // Transfer Uang
  
  const responseTransfer = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/transfermoney"
      : "http://localhost:3000/api/transfermoney",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_transaction: 1,
        username: username, //Rullyansyah
        to_username: to_username, //Abrizam
        amount: amount, // dana yang akan ditransfer
        balance: toUserBalance, //dana balance abrizam
        description: deskripsi,
        status: "money out",
      }),
    }
  )
    .then(function (a) {
      return a.json(); // call the json method on the response to get JSON
    })
    .then(function (json) {
      dataReturn = json
      //console.log("check : json di SubmitTopUp : ", json);
    });

    //console.log("check : json di dataReturn : ", dataReturn);
};
