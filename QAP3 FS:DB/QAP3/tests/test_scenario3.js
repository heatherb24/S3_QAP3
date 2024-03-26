// As a Martha’s Good Eats staff member
//  I can update the details of a menu item in the database.

describe("Martha’s Good Eats staff member", () => {
  it("should be able to update the details of a menu item in the database", (done) => {
    const updatedMenuItem = {
      name: "Updated Item",
      price: 12.99,
      category: "Entree",
    };

    request(app)
      .put("/api/menu/example-menu-item-id")
      .send(updatedMenuItem)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);

        assert(res.body.success);

        done();
      });
  });
});
