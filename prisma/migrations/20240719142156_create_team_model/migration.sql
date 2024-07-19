/*
  Warnings:

  - A unique constraint covering the columns `[ownedTeamId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownedTeamId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ownedTeamId" TEXT NOT NULL,
ADD COLUMN     "teamId" TEXT;

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT,
    "usersIds" TEXT[],

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_ownedTeamId_key" ON "User"("ownedTeamId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ownedTeamId_fkey" FOREIGN KEY ("ownedTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
