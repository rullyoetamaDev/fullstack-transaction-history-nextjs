import { authOption } from "@/lib/auth";
import { rupiah } from "@/lib/utils";
import { getServerSession } from "next-auth";
import React from "react";

const PageHomeTransaction = async () => {
  const session = await getServerSession(authOption);
  const response = await fetch(`http://localhost:3000/api/transaction-history/${session?.user?.name}`);
  const { user: data } = await response.json();

  const renderRow = (dataJson: { description: string; status: string; amount: number; createdAt: string }, index: number) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{dataJson.description}</td>
      <td className={dataJson.status === "money in" ? 'text-green-300' : 'text-red-500'}>
        {dataJson.status === "money in" ? rupiah(dataJson.amount) : `-${rupiah(dataJson.amount)}`}
      </td>
      <td>{dataJson.createdAt}</td>
    </tr>
  );

  return (
    <div>
      <h2 className="pb-3 font-semibold">Transaction History <span className="text-[#FD6245]">{`${session?.user?.name}`}</span></h2>
      <table className="w-full table-auto text-center">
        <thead>
          <tr>
            <th>No</th>
            <th>Deskripsi</th>
            <th>Jumlah</th>
            <th>Dibuat Pada</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderRow)}
        </tbody>
      </table>
    </div>
  );
};

export default PageHomeTransaction;
