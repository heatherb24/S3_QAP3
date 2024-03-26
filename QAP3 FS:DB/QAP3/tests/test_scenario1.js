// As a Martha’s Good Eats customer, I can see a web page listing all the 
// [insert your table name here] from the database.

const assert = require("assert");
const request = require("supertest");
const app = require("../index");

describe("Martha’s Good Eats customer", () => {
  it("should be able to see a web page listing all the [insert your table name here] from the database", (done) => {
    request(app)
      .get("/api/[insert your table name here]")
      .end((err, res) => {
        if (err) return done(err);
        assert(res.body.length > 0); 
        done();
      });
  });
});
