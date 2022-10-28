import type { NextApiRequest, NextApiResponse } from "next";
import { getTema } from "pages/controllers/tema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "GET":              
          
          return await getTema(req, res);
          
        case "POST":
          return res.status(405).json({estado: 'todo mal', estatus: res.status, resultado: ''});
      }
    
}