let amigo = {
  nome: "José",
  sexo: "M",
  peso: 85.3,
  engordar(p) {
    console.log("Engordou");
    this.peso += p;
  },
};

amigo.engordar(5);
console.log(`${amigo.nome} engordou ${amigo.engordar}Kg`);
