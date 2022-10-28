import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "pages/config/db";
//import {a} from "typings";

type Data =
  | { message: string }
  | {
      id_mat: number;
      url_mat: string;
      id_sub: number;
    };
export const getMaterial = async (req: NextApiRequest, res: NextApiResponse <Data>) => {
  try {
    const DATA_UA = await pool.query("SELECT * FROM MMaterial");
    console.log(DATA_UA);

      return res.status(200).json({message: 'se obtuvo mat'})
    }catch(error: any){
        console.log(error);
        
    }

}