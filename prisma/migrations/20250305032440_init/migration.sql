-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `lastname` VARCHAR(40) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `cedula` VARCHAR(9) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Clients_email_key`(`email`),
    UNIQUE INDEX `Clients_cedula_key`(`cedula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Activities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `date` DATETIME NOT NULL,
    `coste` INTEGER NOT NULL,
    `description` VARCHAR(300) NOT NULL,
    `code` VARCHAR(16) NOT NULL,
    `clientCed` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Activities_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Activities` ADD CONSTRAINT `Activities_clientCed_fkey` FOREIGN KEY (`clientCed`) REFERENCES `Clients`(`cedula`) ON DELETE CASCADE ON UPDATE CASCADE;
