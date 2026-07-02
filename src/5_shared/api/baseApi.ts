import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://www.freetogame.com/api" }),
    tagTypes: ["Games"],
    endpoints: () => ({}),
});