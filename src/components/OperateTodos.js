import axios from "axios";
let baseURL = "http://localhost:3000/";

export async function deleteTodo(id) {
  let data = await axios.delete(baseURL + `delete/${id}`);
  return data;
}
export async function markAsDone(id) {
  let data = await axios.put(baseURL + `complete/${id}`);
  return data;
}
export async function markAsNotDone(id) {
  let data = await axios.put(baseURL + `uncomplete/${id}`);
  return data;
}
