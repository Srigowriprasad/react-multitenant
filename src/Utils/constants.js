import { MainRouter, AdminRouter, UserRouter } from "../Router";

export const APPS = [
    {
        subdomain: "www",
        app: MainRouter,
        main: true
    },
    {
        subdomain: "admin",
        app: AdminRouter,
        main: false
    },
    {
        subdomain: "user",
        app: UserRouter,
        main: false
    }
]
