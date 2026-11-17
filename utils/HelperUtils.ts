import dotenv from "dotenv";

dotenv.config();
export const config = {
    baseURL: process.env.BASE_URL!,
    username: process.env.USERNAME!,
    password: process.env.PASSWORD!,
    firstName: process.env.FIRST_NAME!,
    lastname: process.env.LAST_NAME!,
    companyname: process.env.COMPANY_NAME!,
    email: process.env.EMAIL_ID!

};