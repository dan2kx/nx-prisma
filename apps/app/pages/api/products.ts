// types
import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@/db";

const apiHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const client = new PrismaClient();

  const products = await client.product.findMany();

  res.status(200).send(products);
};

export default apiHandler;
