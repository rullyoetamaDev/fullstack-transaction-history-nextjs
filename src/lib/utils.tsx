import { db } from "../lib/db";

export const rupiah = (uang: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(uang);
};

export const tanggal = (tgl : string) => {
    console.log(tgl)
    const d = new Date(tgl);
    return d;
}

export const getBalance = async (username : string) => {
  const res = await db.balanceUser.findMany({
    where : {
      username : username
    },
    select : {
      username : true,
      balance : true
    }
  })

  return res
}
