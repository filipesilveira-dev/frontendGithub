class Cliente {
  #cpf;

  set cpf(valor) {
    if (typeof valor === "string" && valor.length === 11) {
      this.#cpf = valor;
    } else {
      throw new Error("CPF inválido");
    }
  }

  get cpf() {
    return this.#cpf;
  }
}

const c = new Cliente();
c.cpf = "12345678900";
console.log(c.cpf);