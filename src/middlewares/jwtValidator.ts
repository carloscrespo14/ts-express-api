import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {
    //console.log(req.rawHeaders)
    next();
}