const aluno = [
    {
      name: "Lucas",
      height: 1.72,
      age: 22,
      gender: "Masculino",
      class: "trindade",
      matematica: 8,
    },
    {
      name: "João",
      height: 1.82,
      age: 23,
      gender: "Masculino",
      class: "trindade",
      matematica: 6,
    },
    {
      name: "Maria",
      height: 1.65,
      age: 23,
      gender: "Feminino",
      class: "trindade",
      matematica: 9,
    },
    {
      name: "Julia",
      height: 1.75,
      age: 22,
      gender: "Feminino",
      class: "trindade",
      matematica: 10,
    },
    {
      name: "Leticia",
      height: 1.7,
      age: 23,
      gender: "Feminino",
      class: "trindade",
      matematica: 5,
    },
  ];
  console.log (aluno);

  for (i = 0; i < 5; i++) {
    if (aluno[i].matematica >= 7) {
      console.log(`${aluno[i].name} ${aluno[i].matematica} Aprovado`);
    } else {
      console.log(`${aluno[i].name} ${aluno[i].matematica} Reprovado`);
    }
  }

  let totalMat = 0
  for (let i = 0; i <aluno.length; i++) {
    totalMat += aluno[i].matematica;
  }
  const mediaMat = totalMat / aluno.length;

  console.log(`A media da turma é ${mediaMat}`);