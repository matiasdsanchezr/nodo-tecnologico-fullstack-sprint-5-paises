import IRepository from "./IRepository.mjs";
import Country from "../models/country.mjs";

class CountriesRepository extends IRepository {
  async getAll() {
    return await Country.find({ creador: "Matias Sanchez" }).lean();
  }

  async getById(id) {
    return await Country.findById(id).lean();
  }

  async create(country) {
    return await Country.create(country);
  }

  async update(id, countryData) {
    const { name, ...updateFields } = countryData;

    if (name?.common || name?.common === null) {
      updateFields["name.common"] = name.common;
      updateFields["name.nativeName.spa.common"] = name.common;
    }
    if (name?.official) {
      updateFields["name.official"] = name.official;
      updateFields["name.nativeName.spa.official"] = name.official;
    }

    return await Country.findByIdAndUpdate(id, {
      $set: updateFields,
    }).lean();
  }

  async delete(id) {
    return await Country.findByIdAndDelete(id);
  }
}

export default new CountriesRepository();
