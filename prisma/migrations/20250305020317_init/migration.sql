/*
  Warnings:

  - You are about to alter the column `date` on the `Activities` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[code]` on the table `Activities` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Activities` MODIFY `date` DATETIME NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Activities_code_key` ON `Activities`(`code`);
