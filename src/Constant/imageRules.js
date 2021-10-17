export const imageRules = (datafromBMKG) => {
  let image;

  switch (datafromBMKG) {
    case "Banjarnegara":
      image =
        "https://cdn.pixabay.com/photo/2020/06/03/22/13/dieng-5256569_960_720.jpg";
      break;
    case "Batang":
      image =
        "https://cdn-2.tstatic.net/jateng/foto/bank/images/pagilaran-batang_20181010_215251.jpg";
      break;
    case "Blora":
      image =
        "https://sanjayatour.com/wp-content/uploads/2020/01/Tempat-Wisata-Di-Blora.jpg";
      break;
    case "Boyolali":
      image =
        "https://cdn-image.hipwee.com/wp-content/uploads/2016/11/hipwee-twitter.com_-1080x630.jpg";
      break;
    case "Brebes":
      image =
        "https://suarabanyumas.com/wp-content/uploads/2019/01/kebun-teh-kaligua-663x375.jpg";
      break;
        // eslint-disable-next-line no-fallthrough
    default:
      console.log(`Sorry, we are out of ${image}.`);
  }
  return image;
};
