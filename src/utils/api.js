const API = "https://jsonplaceholder.typicode.com/users";
const headers = {
  "Content-Type": "application/json",
};

const options = {
  method: "GET",
  headers,
};

export function fetchData(route) {
  return fetch(`${API}${route}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("request failed");
    }
  });
}
