import { type } from "arktype";

export default defineEventHandler(async event => {
    const body = await readValidatedBody(event, b => t(b))

    if (body instanceof type.errors) {
        return { error: "There was a validation error" }
    }

    return body;
})

const t = type({
    name: "string"
})
