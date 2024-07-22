/*
  Warnings:

  - A unique constraint covering the columns `[ownedTeamId]` on the table `UserInformation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownedTeamId` to the `UserInformation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `UserInformation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserInformation" ADD COLUMN     "ownedTeamId" TEXT NOT NULL,
ADD COLUMN     "teamId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT,
    "usersIds" TEXT[],

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Team_ownerId_key" ON "Team"("ownerId");

-- CreateIndex
CREATE INDEX "Team_ownerId_idx" ON "Team"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserInformation_ownedTeamId_key" ON "UserInformation"("ownedTeamId");

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_ownedTeamId_fkey" FOREIGN KEY ("ownedTeamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
