class IRepository {
  getAll() {
    throw new Error("Método 'obtenerTodos()' no implementado");
  }

  getById(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
  }

  getByAttribute(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo()' no implementado");
  }

  create(superHeroData) {
    throw new Error("Método 'crear()' no implementado");
  }

  update(id, superHeroData) {
    throw new Error("Método 'actualizar()' no implementado");
  }

  delete(id) {
    throw new Error("Método 'eliminar()' no implementado");
  }
}

export default IRepository;
