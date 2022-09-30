"use strict";

import MariaDbRepo from "./backend/repository/interface/MariaDbRepo.js";
import ProjectRepo from "./backend/repository/project.repo.js";
import AdminRepo from "./backend/repository/admin.repo.js";
import * as dotenv from "dotenv";

dotenv.config();
import jwt from "jsonwebtoken";
import express from "express";
import config from "./config.js";
import multer from "multer";
import path from "path";

const __dirname = path.resolve();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage });

const app = express();
const port = 8989;
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.listen(port, () => console.log(`Listening on port ${port}`));
MariaDbRepo.createConnection(config);
app.post("/admin/login", async (req, res) => {
  console.log("Start login");
  try {
    console.log(req.body);
    let input = req.body;
    let admin = await AdminRepo.findByUsername(input.username);
    if (admin.password == input.password) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        username: admin.username,
        time: Date()
      };
      console.log(jwtSecretKey);
      const token = jwt.sign(data, jwtSecretKey);

      res.json({
        token: token
      });
    } else {
      res.json({
        code: 401
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500
    });
  }
});
app.post("/admin/project", async (req, res) => {
  try {
    const token = req.header("token");

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) {
      var decoded = jwt.decode(token, { complete: true });
      let project = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        content: req.body.content,
        images: req.body.images,
        status: req.body.status,
        type: req.body.type,
        createdAt: new Date(),
        createdBy: decoded.payload.username,
        modifiedAt: new Date(),
        modifiedBy: decoded.payload.username
      };
      await ProjectRepo.create(project);
      res.json({
        code: 0
      });
    } else {
      // Access Denied
      res.status(403).json({
        code: 403
      });
    }
  } catch (error) {
    // Access Denied
    res.status(500).json({
      code: 500
    });
  }
});
app.put("/admin/project", async (req, res) => {
  try {
    const token = req.header("token");

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) {
      var decoded = jwt.decode(token, { complete: true });
      let project = await ProjectRepo.findById(req.body.id);
      project.title = req.body.title;
      project.subTitle = req.body.subTitle;
      project.content = req.body.content;
      project.images = req.body.images;
      project.status = req.body.status;
      project.type = req.body.type;
      project.modifiedAt = new Date();
      project.modifiedBy = decoded.payload.username;
      await ProjectRepo.update(req.body.id, project);
      res.json({
        code: 0
      });
    } else {
      // Access Denied
      res.status(403).json({
        code: 403
      });
    }
  } catch (error) {
    // Access Denied
    res.status(500).json({
      code: 500
    });
  }
});
app.get("/admin/project", async (req, res) => {
  try {
    const token = req.header("token");

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) {
      res.json({
        code: 0,
        data: await ProjectRepo.findAll()
      });
    } else {
      // Access Denied
      res.status(403).json({
        code: 403
      });
    }
  } catch (error) {
    // Access Denied
    res.status(500).json({
      code: 500
    });
  }
});
app.delete("/admin/project", async (req, res) => {
  try {
    const token = req.header("token");

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) {
      await ProjectRepo.delete(req.body.id);
      res.json({
        code: 0
      });
    } else {
      // Access Denied
      res.status(403).json({
        code: 403
      });
    }
  } catch (error) {
    // Access Denied
    res.status(500).json({
      code: 500
    });
  }
});
app.post("/admin/upload", upload.single("image"), async (req, res) => {
  try {
    const token = req.header("token");

    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (verified) {
      const file = req.file;
      if (!file) {
        res.status(400).json({
          code: 400
        });
      } else {
        res.json({
          code: 0,
          data: file.path
        });
      }
    } else {
      // Access Denied
      res.status(403).json({
        code: 403
      });
    }
  } catch (error) {
    // Access Denied
    res.status(500).json({
      code: 500
    });
  }
});
app.get("/public/project", async (req, res) => {
  try {
    res.json({
      code: 0,
      data: await ProjectRepo.findByTypePublic(req.query.type)
    });
  } catch (error) {
    // Access Denied
    res.status(500).json({
      code: 500
    });
  }
});
app.get("/public/news", async (req, res) => {});

// export default app;
