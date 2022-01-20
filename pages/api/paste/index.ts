import { NextApiHandler } from "next";

import { createError, createSuccess } from "library/api";
import { database } from "library/database";
import { toExpiration } from "library/expiration";
import {
  checkQuery,
  generateSlug,
  getBody,
  postQuery,
} from "library/serverAPI";
import { toBoolean } from "utilities/boolean";
import { toString } from "utilities/string";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const body = getBody(req.body);

    if (!body) {
      res.status(400).json(createError("Missing request body"));
      return;
    }

    const paste = toString(body["paste"]);

    if (!paste) {
      res.status(400).json(createError("Missing or invalid paste"));
      return;
    }

    const expiration = toExpiration(body["expiration"]);

    if (!expiration) {
      res.status(400).json(createError("Missing or invalid paste"));
      return;
    }

    const burn = toBoolean(body["burn"]);

    if (burn === undefined) {
      res
        .status(400)
        .json(createError("Missing or invalid burn after reading"));
      return;
    }

    const encrypted = toBoolean(body["encrypted"]);

    if (encrypted === undefined) {
      res.status(400).json(createError("Missing or invalid encrypted status"));
      return;
    }

    let slug = generateSlug();

    try {
      let slugExists = await checkQuery(database, slug);

      while (slugExists) {
        slug = generateSlug();
        slugExists = await checkQuery(database, slug);
      }
    } catch (error: unknown) {
      res.status(500).json(createError("Unable to generate slug"));
      return;
    }

    try {
      await postQuery(database, slug, paste, expiration, burn, encrypted);
    } catch (error: unknown) {
      res.status(500).json(createError("Unable to add paste to database"));
      return;
    }

    res.status(200).json(createSuccess<string>(slug));
    return;
  } else {
    res.status(405).json(createError("Method not allowed"));
    return;
  }
};

export default handler;
