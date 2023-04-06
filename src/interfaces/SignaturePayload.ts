import { Request } from 'express';

export interface SignaturePayload {
  id: number;
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: SignaturePayload;
    }
  }
}