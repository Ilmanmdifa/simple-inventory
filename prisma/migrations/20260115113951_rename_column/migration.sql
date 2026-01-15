/*
  Warnings:

  - You are about to drop the column `createAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Product` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Product_createAt_idx";

-- AlterTable
ALTER TABLE "Product"
RENAME COLUMN "createAt" TO "createdAt";

ALTER TABLE "Product"
RENAME COLUMN "updateAt" TO "updatedAt";

-- CreateIndex
CREATE INDEX "Product_createdAt_idx" ON "Product"("createdAt");