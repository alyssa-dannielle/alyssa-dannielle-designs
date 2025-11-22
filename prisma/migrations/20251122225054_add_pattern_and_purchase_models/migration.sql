/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Pattern" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pattern_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "patternId" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "stripeSessionId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "downloadCount" INTEGER NOT NULL DEFAULT 0,
    "maxDownloads" INTEGER NOT NULL DEFAULT 5,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pattern_slug_key" ON "Pattern"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_stripeSessionId_key" ON "Purchase"("stripeSessionId");

-- CreateIndex
CREATE INDEX "Purchase_customerEmail_idx" ON "Purchase"("customerEmail");

-- CreateIndex
CREATE INDEX "Purchase_stripeSessionId_idx" ON "Purchase"("stripeSessionId");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_patternId_fkey" FOREIGN KEY ("patternId") REFERENCES "Pattern"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
