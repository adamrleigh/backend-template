const db = require("../db/connection.js");
const testData = require("../db/data/test-data/index.js");
const seed = require("../db/seeds/seed.js");
const request = require("supertest");
const app = require("../app");
const endpoints = require("../endpoints.json");

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("GET /api", () => {
  test("Status 200 and returns endpoints.json", async () => {
    const { text } = await request(app).get("/api").expect(200);
    expect(JSON.parse(text)).toEqual(endpoints);
  });
});
