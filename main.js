/// proyecto barberia - "ticketera"

const hairCut = 1;
const hairCutHighlights = 2;
const hairCutDye = 3;
const hairCutPrice = 1200;
const hairCutHighlightsPrice = 4500;
const hairCutDyePrice = 6000;

let barberDate;
let option;
let quitMenu = false;
const barberDateConfirm = (totalPrice) => {
  alert(
    `¡Su cita se registró con exito! Gracias por confiar de nuevo en nosotros. El costo de su servicio será: $${totalPrice}`
  );
};
alert("¡Bienvenido a Naribarber! A continuacion elija su servicio.");

do {
  let option = parseInt(
    prompt(`Ingrese la opcion que desee: \n
        ${hairCut} - $${hairCutPrice} Corte de cabello. \n
        ${hairCutHighlights} - $${hairCutHighlightsPrice} Tintura (Reflejos) + corte de cabello. \n
        ${hairCutDye} - $${hairCutDyePrice} Tintura (Global) + corte de cabello.`)
  );
  switch (option) {
    case hairCut:
      barberDateConfirm(`${hairCutPrice}`);
      //  console.log("Corte de pelo");
      break;
    case hairCutHighlights:
      barberDateConfirm(`${hairCutHighlightsPrice}`);
      //  console.log("Corte de pelo con reflejos");
      break;
    case hairCutDye:
      barberDateConfirm(`${hairCutDyePrice}`);
      //  console.log("Corte de pelo + tintura global");
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
