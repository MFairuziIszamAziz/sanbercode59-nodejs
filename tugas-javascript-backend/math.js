let jari2 = 5;
let pi = 3.14;

function luaslingkaran(jari2) {
  let luaslingkaran = jari2 * jari2 * pi;
  return luaslingkaran;
}

let hasil = luaslingkaran(jari2);
console.log(hasil);

//
let array = [1, 2, 3, 4, 5];

function kuadrat(array) {
  return array.map(function (index) {
    return index * index;
  });
}

let hasilkuadrat = kuadrat(array);
console.log(hasilkuadrat);
