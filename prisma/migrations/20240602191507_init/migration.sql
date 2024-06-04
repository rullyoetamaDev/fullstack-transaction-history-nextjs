/*
  Warnings:

  - You are about to drop the `balanceUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "balanceUser";

-- CreateTable
CREATE TABLE "BalanceUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BalanceUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BalanceUser_username_key" ON "BalanceUser"("username");
