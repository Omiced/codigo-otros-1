const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const n = document.querySelector(".name");
const b = document.querySelector(".blog");
const uno = document.querySelector(".location");

//es un programa que realiza una petición a la api de github para buscar un usuario
//luego muestra 3 datos de este usuario.
//arreglado obtención de elementos en el dom, nombres de variable
//peticion y obtención de datos
//se puso asyn cn la función para poder usar await.
async function displayUser(username) {
  n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  n.textContent = data.name;
  b.textContent = data.blog;
  uno.textContent = data.location;
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
