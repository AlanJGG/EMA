import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "pages/config/db";
//import {a} from "typings";

type Data =
  | { message: string }
  | {
      id_tem: number;
      nombre_tem: string;
      id_par: number;
      id_ua: number;
    };
export const getTema = async (req: NextApiRequest, res: NextApiResponse <Data>) => {
  try {
    const DATA_UA = await pool.query("SELECT * FROM CTema");
    console.log(DATA_UA);

      return res.status(200).json({message: 'se obtuvo tema'})
    }catch(error: any){
        console.log(error);
        
    }

}