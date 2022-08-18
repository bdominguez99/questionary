export const score = ["+ Facil", "Facil", "Normal", "Dificil", "+ Dificil"];

export const subjects = ["materia 1", "materia 2", "materia 3"];

export const strategies = [
  "Relacionar conceptos",
  "Preguntas abiertas",
  "Preguntas de opcion multiple",
];

export const getTopics = (subject) => {
  switch (subject) {
    case subjects[0]:
      return [
        { topic: "tema 1", value: false },
        { topic: "tema 2", value: false },
        { topic: "tema 3", value: false },
      ];
    case subjects[1]:
      return [
        { topic: "tema 4", value: false },
        { topic: "tema 5", value: false },
        { topic: "tema 6", value: false },
      ];
    case subjects[2]:
      return [
        { topic: "tema 7", value: false },
        { topic: "tema 8", value: false },
        { topic: "tema 9", value: false },
      ];
    default:
      return [];
  }
};
