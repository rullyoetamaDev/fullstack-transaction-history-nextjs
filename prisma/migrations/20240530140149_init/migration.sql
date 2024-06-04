/*
  Warnings:

  - Made the column `deskription` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updateAt` on table `Transaction` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updateAt` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "deskription" SET NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updateAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "token" DROP NOT NULL,
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updateAt" SET NOT NULL;
