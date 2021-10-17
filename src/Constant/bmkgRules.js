export const bmkgRules = (datafromBMKG) => {
  let day;

  switch (datafromBMKG) {
    case 0:
      day = "Cerah";
      break;
    case 1:
      day = "Cerah Berawan";
      break;
    case 2:
      day = "Cerah Berawan";
      break;
    case 3:
      day = "Berawan";
      break;
    case 4:
      day = "Berawan Tebal ";
      break;
    case 5:
      day = "Udara Kabur ";
      break;
    case 45:
      day = "Kabut";
    case 0:
      day = "Sunday";
    case 60:
      day = "Hujan Ringan";
      break;
    case 61:
      day = " Hujan Sedang ";
      break;
    case 63:
      day = "Hujan Lebat";
      break;
    case 80:
      day = "Hujan Lokal";
      break;
    case 95:
      day = "Hujan Petir";
      break;
    case 97:
      day = "Hujan Petir ";
  }
  return day;
};
