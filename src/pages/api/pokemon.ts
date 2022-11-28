import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import type { DocumentData, OrderByDirection } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

import { firestore } from "@db/firebase";

export default async function pokemon(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const querySnapshot = await getDocs(collection(firestore, "pokemon"));
  const posts: Record<string, DocumentData> = {};
  querySnapshot.forEach((doc) => {
    posts[doc.id] = doc.data();
  });
  res.json(posts);
} . 