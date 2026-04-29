import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
    baseURL:process.env.MONGODB_URI
})