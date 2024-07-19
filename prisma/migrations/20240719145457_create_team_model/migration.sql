/*
  Warnings:

  - You are about to drop the column `ownedTeamId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownedTeamId]` on the table `UserInformation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownedTeamId` to the `UserInformation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_ownedTeamId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_teamId_fkey";

-- DropIndex
DROP INDEX "User_ownedTeamId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "ownedTeamId",
DROP COLUMN "teamId";

-- AlterTable
ALTER TABLE "UserInformation" ADD COLUMN     "ownedTeamId" TEXT NOT NULL,
ADD COLUMN     "teamId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserInformation_ownedTeamId_key" ON "UserInformation"("ownedTeamId");

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_ownedTeamId_fkey" FOREIGN KEY ("ownedTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
