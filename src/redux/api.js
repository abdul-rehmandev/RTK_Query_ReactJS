import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
    reducerPath: "myapi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getPosts: builder.query({ query: () => "posts", providesTags: ["Posts"] }),
        newPost: builder.mutation({
            query: (post) => ({
                url: "posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ["Posts"]
        })
    })
})

export const { useGetPostsQuery, useNewPostMutation } = myApi