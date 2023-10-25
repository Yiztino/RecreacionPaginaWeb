/*let $linkGithub = document.querySelector("#link-github");
console.log($linkGithub);

$linkGithub.href =
  "https://github.com/jonmircha/amerike-lenguajes-interpretados-2023";
$linkGithub.target = "_blank";*/

let nombre = "Luis Lemus / Yiztino ";
let $nombre = document.querySelector("#nombre");

$nombre.innerHTML = nombre;
//PARA LO DE LOS TEMAS
document.addEventListener("click", (e) => {
  if (!e.target.matches("input[name='theme-color']")) {
    return false;
  }

  //alert(`Se activara el tema ${e.target.dataset.name}`);
  document.getElementById("css-theme").href = e.target.dataset.theme;
});
//Para obtener la info del JSON
async function obtenerDatos() {
  let respuesta = await fetch("./js/filosofos.json");
  let datos = await respuesta.json();

  let $nombresFilos = document.querySelector("#nomFilos");
  let tabla = "<table class='table table-striped table-bordered'>";
  tabla += `
    <thead class='thead-dark'>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Imagen</th>
      </tr>
    </thead>
  `;
  datos.filosofos.forEach(filosofo => {
    tabla += `
      <tr>
        <td>${filosofo.nombre}</td>
        <td>${filosofo.descripcion}</td>
        <td><img src="${filosofo.imagen}" alt="${filosofo.nombre}" class="img-thumbnail" style="max-width: 100px; max-height: 100px;">
        </td>
      </tr>
    `;
  });

  tabla += "</table>";

  $nombresFilos.innerHTML = tabla;

  console.log(datos);
}





obtenerDatos();
$pasatiempos.setAttribute("id", "pasatiempos");

function hacerGrandote(e) {
  e.target.style.fontSize = "20px";
}

$pasatiempos.addEventListener("mouseover", hacerGrandote);
