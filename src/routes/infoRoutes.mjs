import express from "express";

const router = express.Router();

router.get("/contacto", (req, res) => {
  return res.render("contact");
});

router.get("/acerca-de", (req, res) => {
  return res.render("about");
});

export default router;
