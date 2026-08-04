import dotenv from "dotenv";

dotenv.config({
    path: "config/.env"
});

export class ConfigReader {

    static get(key: string): string {
        const value = process.env[key];

        if (!value) {
            throw new Error(`Missing environment variable: ${key}`);
        }

        return value;
    }
}