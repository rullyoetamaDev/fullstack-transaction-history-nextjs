/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `balanceUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "balanceUser_username_key" ON "balanceUser"("username");
