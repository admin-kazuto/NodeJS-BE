function route(app) {
  app.get("/", (req, res) => res.render("home"));
  app.get("/new", (req, res) => res.render("news"));
  app.get("/search", (req, res) => {
    // console.log(req.query.q) check tìm kiếm
    res.render("search");
  });
}

module.exports = route;
