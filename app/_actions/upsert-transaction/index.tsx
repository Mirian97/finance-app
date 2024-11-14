"use server";
import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { addTransactionSchema } from "./schema";

interface UpsertTransactionActionParams
  extends Omit<Prisma.TransactionCreateInput, "userId"> {
  id?: string;
}

export const upsertTransactionAction = async ({
  id,
  ...params
}: UpsertTransactionActionParams) => {
  addTransactionSchema.parse(params);

  const { userId } = await auth();
  if (!userId) {
    throw new Error("User unathorized");
  }

  if (id) {
    await db.transaction.update({
      where: { id },
      data: { ...params, userId },
    });
  } else {
    await db.transaction.create({
      data: { ...params, userId },
    });
  }
  revalidatePath("/transactions");
};
