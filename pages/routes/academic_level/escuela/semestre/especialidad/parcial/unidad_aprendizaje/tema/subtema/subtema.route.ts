import type { NextApiRequest, NextApiResponse } from "next";
import { getSubtema } from "pages/controllers/subtema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "GET":              
          
          return await getSubtema(req, res);
          
        case "POST":
          return res.status(405).json({estado: 'todo mal', estatus: res.status, resultado: ''});
      }
    
}