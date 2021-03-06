import { Paste, PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { formatISO } from "date-fns";

import { TExpiration } from "types/expiration";

export const createPaste = async (
  prisma: PrismaClient,
  slug: string,
  paste: string,
  expiration: TExpiration,
  burn: boolean,
  encrypted: boolean
): Promise<void> => {
  await prisma.$connect;

  await prisma.paste.create({
    data: {
      slug,
      paste,
      expiration,
      burn,
      encrypted,
      date: formatISO(Date.now()),
    },
  });

  const found = await prisma.paste.findUnique({ where: { slug } });

  await prisma.$disconnect;

  if (!found) {
    throw Error;
  }
};

export const deletePaste = async (
  prisma: PrismaClient,
  slug: string
): Promise<void> => {
  await prisma.$connect;

  await prisma.paste.delete({ where: { slug } });

  await prisma.$disconnect;
};

export const generateSlug = (): string => {
  return crypto.randomBytes(8).toString("hex");
};

export const getBody = (val: unknown): any | undefined => {
  if (val && typeof val === "object") {
    return val;
  }

  return undefined;
};

export const getPaste = async (
  prisma: PrismaClient,
  slug: string
): Promise<Paste | null> => {
  await prisma.$connect;

  const found = await prisma.paste.findUnique({ where: { slug } });

  await prisma.$disconnect;

  return found;
};
