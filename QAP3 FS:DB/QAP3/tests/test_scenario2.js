// As a Martha’s Good Eats business partner
// I can add a new menu item to the database through a REST API.

describe("Martha’s Good Eats business partner", () => {
  it("should be able to add a new menu item to the database through a REST API", (done) => {
    const newMenuItem = {
      name: "New Item",
      price: 9.99,
      category: "Entree",
    };

    request(app)
      .post("/api/menu")
      .send(newMenuItem)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        assert(res.body.id);

        done();
      });
  });
});
