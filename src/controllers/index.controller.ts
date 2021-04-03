import { Request, Response} from "express";
import { IndexBussiness } from "../bussiness/index.bussiness";

export function indexWelcome(req: Request, res: Response) {

    const indexBussiness = new IndexBussiness();

    indexBussiness.newResponse().then(
        (resp)=> { return res.status(200).json(resp)},
        (err) => {return res.status(500).json(err)}
    )
        
}