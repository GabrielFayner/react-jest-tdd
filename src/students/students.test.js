const student = require("./student");

describe("Testes para alunos", () => {
  it("Deve retornar 10 quando as notas forem 5, 3 e 2", () => {
    const notes = [5, 3, 2];
    expect(student.sum(notes)).toEqual(10);
  });
  it("Deve retornar zero quando uma das notas for zero", () => {
    const notes = [1, 2, 3, 0];
    expect(student.sum(notes)).toEqual(0);
  });
  it("Deve dobrar a nota quando o aluno tiver mais de cinco notas", () => {
    const notes = [1, 2, 3, 4, 5, 6, 7];
    expect(student.sum(notes)).toEqual(56);
  });
  it("Deve dobrar a nota quando for naior que 9", () => {
    const notes = [10, 5, 3];
    expect(student.sum(notes)).toEqual(28);
  });
});

// Anotações :

// test = it(É apenas um apelido para a funcão test).

// Ao descrever o Teste ele deve ser formalizado em que o 'DEVE' venha
// seguido do 'QUANDO'. Ex:.

// Deve retonar algo, quando acontecer algo.
