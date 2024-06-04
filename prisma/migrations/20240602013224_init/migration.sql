/*
  Warnings:

  - You are about to drop the column `balance` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `deskription` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_transaction]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_transaction` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_username` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transaction_email_key";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "balance",
DROP COLUMN "deskription",
DROP COLUMN "email",
DROP COLUMN "token",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "id_transaction" INTEGER NOT NULL,
ADD COLUMN     "to_username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_id_transaction_key" ON "Transaction"("id_transaction");
