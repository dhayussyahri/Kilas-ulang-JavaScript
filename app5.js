// Mengatur Default Value Pada Function
function LemparDadu(sisi = 6) {
   return Math.floor(Math.random() * sisi) + 1;

}

function sapa(name = 'user', msg = 'Selamat Bekerja') {
   console.log(`${name} ${msg}`);
}