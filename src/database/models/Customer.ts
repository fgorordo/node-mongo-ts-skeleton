import{ Schema, model } from "mongoose";

interface ICar {
    patent: string;
    model: string;
    fabricant: string;
    color: string;
}

export interface ICustomer extends Document {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    cars: ICar[];
}

const customerSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String},
    phone: {type: String},
    cars: [
        {
            patent: {type: String},
            model: {type: String},
            fabricant: {type: String},
            color: {type: String}
        }
    ]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.__V;
            delete ret.createdAt;
            delete ret.updatedAt;
        }
    },
    timestamps: true
});


export const Customer = model<ICustomer>("Customer", customerSchema);

