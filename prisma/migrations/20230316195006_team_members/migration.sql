-- CreateTable
CREATE TABLE "TeamMembers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userRegistration" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "responsability" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TeamMembers_userRegistration_key" ON "TeamMembers"("userRegistration");
