import dotenv from 'dotenv'

if (process.env.NODE_ENV !== "dev") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotenv.config({path: configFile})
} else {
    dotenv.config();
}


export const APP_SECRET = process.env.APP_SECRET;
export const PORT = process.env.PORT;
export const DATABASE_URI = process.env.DATABASE_URI;

// export default config;