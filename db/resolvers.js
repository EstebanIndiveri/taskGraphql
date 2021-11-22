const cursos = [
  {
    titulo: "Javascript 2021",
    tecnologia: "Javascript ES6",
  },
  {
    titulo: "React la guia de 2021",
    tecnologia: "React JS",
  },
  {
    titulo: "Flutter el SDK de google",
    tecnologia: "Flutter",
  },
];

const resolvers = {
  Query: {
    obtenerCursos: () => cursos,
    obtenerTecnologias: () => cursos,
  },
};

module.exports = resolvers;
