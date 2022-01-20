import { Paste, PrismaClient } from "@prisma/client";
import crypto from "crypto";

import { TExpiration } from "types/expiration";

export const checkQuery = async (
  prisma: PrismaClient,
  slug: string
): Promise<Paste | null> => {
  await prisma.$connect;

  const found = await prisma.paste.findUnique({ where: { slug } });

  await prisma.$disconnect;

  return found;
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

export const postQuery = async (
  prisma: PrismaClient,
  slug: string,
  paste: string,
  expiration: TExpiration,
  burn: boolean,
  encrypted: boolean
): Promise<void> => {
  await prisma.$connect;

  await prisma.paste.create({
    data: { slug, paste, expiration, burn, encrypted },
  });

  const found = await prisma.paste.findUnique({ where: { slug } });

  await prisma.$disconnect;

  if (!found) {
    throw Error;
  }
};
