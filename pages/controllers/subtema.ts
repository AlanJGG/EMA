import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "pages/config/db";
//import {a} from "typings";

type Data =
  | { message: string }
  | {
      id_sub: number;
      nombre_sub: string;
      id_tem: number;
    };
export const getSubtema = async (req: NextApiRequest, res: NextApiResponse <Data>) => {
  try {
    const DATA_UA = await pool.query("SELECT * FROM CSubtema");
    console.log(DATA_UA);

      return res.status(200).json({message: 'se obtuvo subtema'})
    }catch(error: any){
        console.log(error);
        
    }

}