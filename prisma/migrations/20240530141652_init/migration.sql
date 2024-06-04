/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transaction_token_key";

-- DropIndex
DROP INDEX "User_token_key";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_email_key" ON "Transaction"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
