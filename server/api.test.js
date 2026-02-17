
const request = require("supertest");
const app = require("./index");

test("GET /user returns user", async () => {
  const res = await request(app).get("/user");
  expect(res.body.name).toBeDefined();
});
