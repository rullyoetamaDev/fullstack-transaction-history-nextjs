import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const pageTransaction = async () => {
  const session = await getServerSession(authOption);

  if(session?.user?.name){
    return (
      <div>
        <p>Page Transaction</p>
      </div>
    );
  }else{
    return(
      <div>
      </div>
    )
  }
};

export default pageTransaction;
