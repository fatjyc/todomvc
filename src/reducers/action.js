let apiUrl = "";
// eslint-disable-next-line
// @ts-ignore
const apiHost = window._env_.API_HOST;
if (apiHost.indexOf("http") >= 0) {
  apiUrl = apiHost;
} else {
  apiUrl = `http://${apiHost}`;
}
if (apiUrl.endsWith("/")) {
  apiUrl = apiUrl.substring(0, apiUrl.length - 1);
}

export const API_URL = `${apiUrl}/todo`;

export const updateTodo = async (label, id) => {
  const body = { label: `${label}` };
  const resp = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
  const todo = await resp.json();
  return todo;
};

export const updateTodoDone = async (id) => {
  const resp = await fetch(`${API_URL}/${id}/done`, {
    method: "POST",
  });
  const todo = await resp.json();
  return todo;
};

export const deleteTodo = async (id) => {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const getTodos = async () => {
  const todoResponse = await fetch(API_URL);
  const todos = await todoResponse.json();
  return todos;
};

export const newTodo = async (label) => {
  const body = { label: `${label}` };

  const resp = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const todo = await resp.json();
  return todo;
};
