import express from "express";
import {
  getAllCountriesController,
  showAddViewController,
  createCountryController,
  updateCountryController,
  deleteCountryByIdController,
  showEditViewController,
} from "../controllers/countriesController.mjs";
import {
  validateGetCountry,
  validateCreateCountry,
  validateUpdateCountry,
} from "../validators/countriesValidator.mjs";
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

router.get("/", getAllCountriesController);
router.get("/agregar", showAddViewController);
router.post(
  "/agregar",
  validateCreateCountry,
  handleValidationErrors,
  createCountryController
);

router.delete("/:id", deleteCountryByIdController);
router.get(
  "/:id/editar",
  validateGetCountry,
  handleValidationErrors,
  showEditViewController
);
router.put(
  "/:id/editar",
  validateUpdateCountry,
  handleValidationErrors,
  updateCountryController
);

export default router;
