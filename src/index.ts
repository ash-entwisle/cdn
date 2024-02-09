import { Hono } from "hono";
const app = new Hono();

// app.use("/*", serveStatic({ root: "./public" }));
app.get("/", (c) => { return c.redirect("https://proot.dev")});

export default app;
