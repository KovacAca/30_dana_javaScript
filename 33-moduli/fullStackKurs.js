import config from "./config.js";

// funkcionalnost
function fullStackKurs(tehnologija, ime) {
  if(tehnologija == 'front' || tehnologija == 'back') {
    console.log(`${config[tehnologija]} ${ime}`);
  } else {
    console.log('Nije unesen predavac');
  }
}

export default fullStackKurs;