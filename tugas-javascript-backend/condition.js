//1
let angka = 3;

if (angka % 2 != 0) {
  console.log(angka + " merupakan bilangan ganjil");
} else {
  console.log(angka + " merupakan bilangan genap");
}

//2
let hari = 3;

switch (hari) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  case 7:
    console.log("Minggu");
    break;
  default:
    console.log("Hari tidak valid");
}
