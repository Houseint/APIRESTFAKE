import { API_URL } from "./configApi";
//função para pegar a lista de pessoas
export async function getPeople() {
  //aqui faz a requisição GET
  const response = await fetch(`${API_URL}/people`);
  //aqui pega a resposta e transforma em json
  const data = await response.json();
  //retorna a lista
  return data;
}

//função para criar uma nova pessoa
export async function createPerson(person) {
  //aqui faz a requisição POST
  const response = await fetch(`${API_URL}/people`, {
    method: "POST", //o metodo http
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person), //transforma o objeto em json
  });
  return response.json();
}
//agora uma função pra atualizar uma pessoa
export async function updatePerson(id, person) {
  const response = await fetch(`${API_URL}/people/${id}`, {
    method: "PUT", //metodo put pra atualizar a pessoa que eu escolher
    headers: {
      "Content-Type": "application/json", //pesquisar para saber oq isso significa.
    },
    body: JSON.stringify(person),
  });
  return response.json();
}
//função para deletar uma pessoa
export async function deletePerson(id) {
  await fetch(`${API_URL}/people/${id}`, {
    method: "DELETE", //escolho uma pessoa pelo id e deleto ela
  });
}
