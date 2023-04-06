import jwt, { Secret } from "jsonwebtoken";
import { APP_SECRET } from "../config"
import { Request } from "express";
import { SignaturePayload } from "src/interfaces/SignaturePayload";

export const createSignature = async (signaturePayload: SignaturePayload): Promise<string> => {

    return new Promise ((resolve,reject) => {
        jwt.sign(signaturePayload, APP_SECRET, {expiresIn: "10m"}, (err, signature) => {
            if (err) {
                console.log(err) //! REMOVER
                reject(err.message)
            };

            resolve(signature);
        });
    });
};

export const validateSignature = async (req: Request):Promise<SignaturePayload> => {
    
    const signature = req.get("Authorization");
    
    if (!signature) throw new Error("No token on headers")

    return new Promise ((resolve,reject) => {
        jwt.verify(signature.split(" ")[1], APP_SECRET, (err, payload: SignaturePayload) => {
            if (err) {
                console.log(err) //! REMOVER
                reject(err.message)
            };

            resolve(payload);
        });
    });
};