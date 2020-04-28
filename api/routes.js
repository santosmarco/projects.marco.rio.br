function configApiRoutes(configObj) {
  let app = configObj.app;
  let rootDir = configObj.dirname;

  app.get("/api/projects", (req, res) => {
    res.sendFile(`${rootDir}/db/projects/projects.json`);
  });
  app.get("/api/projects/:projectIdx/thumbnail", (req, res) => {
    let pIdx = req.params.projectIdx;
    res.sendFile(`${rootDir}/db/projects/thumbnails/${pIdx}.png`);
  });

  app.get("/api/skills", (req, res) => {
    res.sendFile(`${rootDir}/db/skills/skills.json`);
  });

  console.log("API routes successfully set up");
}

module.exports = configApiRoutes;
