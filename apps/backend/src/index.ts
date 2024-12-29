import { Hono } from "hono";

const app = new Hono();

app.get("/", async c => {
  return c.json([]);
});

export default {
  port: 3080,
  fetch: app.fetch,
};
