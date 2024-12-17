import CountriesRepository from "../repositories/CountriesRepository.mjs";
import Country from "../models/country.mjs";

export async function populateDatabase() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/lang/spanish");
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const countries = await response.json();
    countries.forEach((country) => {
      delete country.translations;
      delete country.tld;
      delete country.cca2;
      delete country.cca3;
      delete country.ccn3;
      delete country.cioc;
      delete country.idd;
      delete country.altSpellings;
      delete country.car;
      delete country.coatOfArms;
      delete country.postalCode;
      delete country.demonyms;
      country.creador = "Matias Sanchez";
    });
    const savedCountries = await Country.insertMany(countries);
    console.log("La lista de paises ha sido cargada a la base de datos.");
    return savedCountries;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Se produjo un error al popular la base de datos usando la API restcountries"
    );
  }
}

export async function resetDatabase() {
  try {
    await Country.deleteMany({ creador: "Matias Sanchez" });
    console.log("La base de datos se ha reiniciado correctamente");
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error al reiniciar la base de datos");
  }
}

export async function getCountryById(id) {
  try {
    return await CountriesRepository.getById(id);
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error interno al obtener el país mediante su id");
  }
}

export async function getAllCountries() {
  try {
    return await CountriesRepository.getAll();
  } catch (error) {
    console.error(error);
    throw new Error(
      "Se produjo un error interno al obtener la lista con todos los paises"
    );
  }
}

export async function createCountry(country) {
  try {
    country.creador = "Matias Sanchez";
    country.name.nativeName = {};
    country.name.nativeName.spa = {};
    country.name.nativeName.spa.official = country.name.official;
    country.name.nativeName.spa.common = country.name.common;
    return await CountriesRepository.create(country);
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error interno al actualizar el pais mediante su id");
  }
}

export async function updateCountry(id, countryData) {
  try {
    return await CountriesRepository.update(id, countryData);
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error interno al eliminar el pais mediante su id");
  }
}

export async function deleteCountryById(id) {
  try {
    return await CountriesRepository.delete(id);
  } catch (error) {
    console.error(error);
    throw new Error("Se produjo un error interno al eliminar el pais mediante su id");
  }
}
