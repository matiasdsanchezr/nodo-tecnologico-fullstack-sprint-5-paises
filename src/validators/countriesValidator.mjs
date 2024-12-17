import { body, param } from "express-validator";

export const validateGetCountry = [
  param("id").isMongoId().withMessage("ID debe ser un UUID válido"),
];

export const validateCreateCountry = [
  body("name").notEmpty().withMessage("Es requerido"),
  body("name.official")
    .notEmpty()
    .withMessage("Es requerido")
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .isLength({ min: 3, max: 90 })
    .withMessage("Debe contener un mínimo de 3 caracteres y un máximo de 90"),
  body("name.common")
    .optional()
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .isLength({ min: 3, max: 90 })
    .withMessage("Debe contener un mínimo de 3 caracteres y un máximo de 90")
    .optional({ values: "falsy" }),
  body("capital")
    .notEmpty()
    .withMessage("Es requerido")
    .isArray({ min: 1, max: 10 })
    .withMessage("Debe ser un array con al menos un elemento"),
  body("capital.*")
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .isLength({ min: 3, max: 90 })
    .withMessage(
      "Debe ser una cadena de caracteres con al menos 3 caracteres y un máximo de 90"
    ),
  body("borders")
    .notEmpty()
    .withMessage("Es requerido")
    .isArray({ min: 1, max: 20 })
    .withMessage("Debe ser un array con al menos un elemento"),
  body("borders.*")
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .isLength({ min: 3, max: 3 })
    .withMessage("Solo puede contener tres caracteres"),
  body("area")
    .notEmpty()
    .withMessage("Es requerido")
    .isInt({ min: 0 })
    .withMessage("Debe ser un entero positivo"),
  body("population")
    .notEmpty()
    .withMessage("Es requerido")
    .isInt({ min: 0 })
    .withMessage("Debe ser un entero positivo"),
  body("gini")
    .optional()
    .isObject()
    .withMessage("Debe ser un objeto")
    .custom((value) => {
      const keys = Object.keys(value);
      keys.forEach((key) => {
        const year = parseInt(key);
        if (isNaN(year)) {
          throw new Error("Cada key de Gini debe ser un año");
        }
        if (year < 1912 || year > 2024) {
          throw new Error("El año mínimo es 1912, y no puede ser mayor a 2024");
        }
      });
      return true;
    }),
  body("gini.*")
    .isFloat({ min: 0, max: 100 })
    .withMessage("Debe ser un float con valores entre 0 y 100"),
];

export const validateUpdateCountry = [
  body("name.official")
    .optional()
    .trim()
    .isLength({ min: 3, max: 90 })
    .withMessage("Debe contener un mínimo de 3 caracteres y un máximo de 90"),
  body("name.common")
    .optional()
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .if((value) => value != "")
    .isLength({ min: 3, max: 90 })
    .withMessage("Debe contener un mínimo de 3 caracteres y un máximo de 90"),
  body("capital")
    .optional()
    .isArray({ min: 1, max: 10 })
    .withMessage("Debe ser un array con al menos un elemento"),
  body("capital.*")
    .optional()
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .isLength({ min: 3, max: 90 })
    .withMessage("Debe contener un mínimo de 3 caracteres y un máximo de 90"),
  body("borders")
    .optional()
    .isArray({ min: 1, max: 20 })
    .withMessage("Debe ser un array con al menos un elemento"),
  body("borders.*")
    .optional()
    .isString()
    .withMessage("Debe ser una cadena de caracteres")
    .trim()
    .isLength({ min: 3, max: 3 })
    .withMessage("Solo puede contener tres caracteres"),
  body("area").optional().isInt({ min: 0 }).withMessage("Debe ser un entero positivo"),
  body("population")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Debe ser un entero positivo"),
  body("gini")
    .optional()
    .isObject()
    .withMessage("Debe ser un objeto")
    .custom((value) => {
      const keys = Object.keys(value);
      keys.forEach((key) => {
        const year = parseInt(key);
        if (isNaN(year)) {
          throw new Error("Cada key de Gini debe ser un año");
        }
        if (year < 1912 || year > 2024) {
          throw new Error("El año mínimo es 1912, y no puede ser mayor a 2024");
        }
      });
      return true;
    }),
  body("gini.*")
    .isFloat({ min: 0, max: 100 })
    .withMessage("Debe ser un float con valores entre 0 y 100"),
];
