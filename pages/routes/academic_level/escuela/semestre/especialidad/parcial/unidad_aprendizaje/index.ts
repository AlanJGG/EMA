import type { NextApiRequest, NextApiResponse } from "next";
import { getUnidadAprendizaje } from "pages/controllers/unidad_aprendizaje";
import { getTema } from "pages/controllers/tema";
import { getSubtema } from "pages/controllers/subtema";
import { getMaterial } from "pages/controllers/material";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    switch (req.method) {
        case "GET":              
          
          return await getUnidadAprendizaje(req, res);
          
        case "POST":
          return res.status(405).json({estado: 'todo mal', estatus: res.status, resultado: ''});
      }
    
}