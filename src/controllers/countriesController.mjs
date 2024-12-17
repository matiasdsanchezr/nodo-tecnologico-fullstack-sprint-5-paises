import * as countriesService from "../services/countriesService.mjs";
import { isEmptyObject } from "../utils/isEmptyObject.mjs";

export async function getAllCountriesController(req, res, next) {
  try {
    const countries = await countriesService.getAllCountries();
    return await res.render("countries/dashboard", { title: "Dashboard", countries });
  } catch (error) {
    return next(error);
  }
}

export async function showAddViewController(req, res, next) {
  try {
    return await res.render("countries/add", { title: "Agregar" });
  } catch (error) {
    return next(error);
  }
}

export async function showEditViewController(req, res, next) {
  try {
    const { id } = req.params;
    const country = await countriesService.getCountryById(id);
    if (!country) {
      throw {
        status: 404,
        message: "No existe ningún País registrado con el id solicitado",
      };
    }
    return await res.render("countries/edit", { title: "Editar", country });
  } catch (error) {
    return next(error);
  }
}

export async function createCountryController(req, res, next) {
  try {
    const country = req.body;
    const createdCountry = await countriesService.createCountry(country);
    return res.json(createdCountry);
  } catch (error) {
    return next(error);
  }
}

export async function updateCountryController(req, res, next) {
  try {
    const { id } = req.params;
    const countryData = req.body;
    if (isEmptyObject(countryData)) {
      throw { status: 400, message: "No hay ningún dato válido para actualizar" };
    }
    const createdCountry = await countriesService.updateCountry(id, countryData);
    return res.json(createdCountry);
  } catch (error) {
    return next(error);
  }
}

export async function deleteCountryByIdController(req, res, next) {
  try {
    const { id } = req.params;
    const deletedCountry = await countriesService.deleteCountryById(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}
