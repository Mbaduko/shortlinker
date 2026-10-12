-- CreateTable
CREATE TABLE "links" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "short_phrase" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "links_link_key" ON "links"("link");

-- CreateIndex
CREATE UNIQUE INDEX "links_short_phrase_key" ON "links"("short_phrase");
