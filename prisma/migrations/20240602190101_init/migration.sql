-- CreateTable
CREATE TABLE "balanceUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "balanceUser_pkey" PRIMARY KEY ("id")
);
