import { NextApiHandler } from "next";

import { createError, createSuccess } from "library/api";
import { database } from "library/database";
import { checkQuery } from "library/serverAPI";
import { toString } from "utilities/string";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const slug = toString(req.query["slug"]);

    if (!slug) {
      res.status(500).json(createError("Unable to access slug"));
      return;
    }

    const paste = await checkQuery(database, slug);

    if (!paste) {
      res.status(404).json(createError("Paste does not exist"));
      return;
    }

    res.status(200).json(
      createSuccess<{ paste: string; encrypted: boolean }>({
        paste: paste.paste,
        encrypted: paste.encrypted,
      })
    );
    return;
  } else {
    res.status(405).json(createError("Method not allowed"));
    return;
  }
};

export default handler;
