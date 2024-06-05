import { authOption } from "@/lib/auth";
import { rupiah, tanggal } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { now } from "next-auth/client/_utils";
import React from "react";

const PageHomeTransaction = async () => {
  const session = await getServerSession(authOption);
  //console.log("check : session di transaction : ",session)

  const request 
  = await fetch(
    process.env.NODE_ENV === "development"
      ? `http://localhost:3000/api/transaction-history/${session?.user?.name}`
      : `http://localhost:3000/api/transaction-history/${session?.user?.name}`
  );

    // console.log("check - request : ", request);
  const json = await request.json();
  //console.log("check - json : ", json);
  const data = json.user;
  // console.log("check - data : ", data);
  return (
    <div>
      <h2 className="pb-3 font-semibold">Transaction History <span className="text-[#FD6245]">{`${session?.user?.name}`}</span></h2>
      <table className="w-full table-auto text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>Description</th>
            <th>Amount</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataJson: any, index : any) => {
            return (
              //console.log("check - dataJson : ",dataJson)
              <tr key={index}>
                <td>
                  {index + 1}
                </td>
                <td>
                  {dataJson.description}
                </td>
                <td className={dataJson.status === "money in" ? 'text-green-300' : 'text-red-500'}>
                  {dataJson.status === "money in" ? rupiah(dataJson.amount) : "-" + rupiah(dataJson.amount) }
                </td>
                <td>
                  {dataJson.createdAt}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PageHomeTransaction;
