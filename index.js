const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Curso {
    titulo: String
    tecnologia: String
  }
  type Tecnologia {
    tecnologia: String
  }
  type Query {
    obtenerCursos: [Curso]
    obtenerTecnologias: [Tecnologia]
  }
`;

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

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`);
});
