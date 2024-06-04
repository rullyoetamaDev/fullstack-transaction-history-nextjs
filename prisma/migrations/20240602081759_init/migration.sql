/*
  Warnings:

  - Added the required column `balance` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "balance" INTEGER NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "TopUp" (
    "id" SERIAL NOT NULL,
    "id_topup" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TopUp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TopUp_id_topup_key" ON "TopUp"("id_topup");

-- CreateIndex
CREATE UNIQUE INDEX "TopUp_username_key" ON "TopUp"("username");

-- AddForeignKey
ALTER TABLE "TopUp" ADD CONSTRAINT "TopUp_username_fkey" FOREIGN KEY ("username") REFERENCES "Transaction"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
