import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { myApi } from "./api"

export const store = configureStore({
    reducer: {
        myapi: myApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(myApi.middleware),
})