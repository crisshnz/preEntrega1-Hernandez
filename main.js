/// proyecto barberia - "ticketera"

const normalCut = 1;
const combo2 = 2;
const combo3 = 3;

let barberDate;
let option;
let quitMenu = false;
let barberDateConfirm = console.log(
  "¡Su cita se registró con exito! Gracias por confiar de nuevo en nosotros."
);

alert("¡Bienvenido a Naribarber! A continuacion elija su servicio.");

do {
  let option = parseInt(
    prompt(`Ingrese la opcion que desee: \n
        1 - Corte de cabello. \n
        2 - Tintura (Reflejos) + corte de cabello. \n
        3 - Tintura (Global) + corte de cabello.
`)
  );
  switch (option) {
    case normalCut:
      barberDate = barberDateConfirm;
      console.log("Corte normal");
      break;
    case combo2:
      barberDate = barberDateConfirm;
      console.log("Combo 2");
      break;
    case combo3:
      barberDate = barberDateConfirm;
      console.log("Combo 3");
      break;
    default:
      alert("Su elección no es valida.");
  }

  let interactWithMenu = prompt("Si desea realizar otro ticket escriba: si");
  if (interactWithMenu === "si") {
    quitMenu = false;
  } else {
    quitMenu = true;
    alert("Elegiste salir del menú");
  }
} while (quitMenu !== true);
