/* 
NOTE : JGN HPS DIBAWAH INI!!
RECODE : RAHMXBOT X RAHMAN GNTENG:V
WHATSAPP : 085821676621
NOMOR BOT : 085821369324
NOTE : JGN HPS AUTHORNYA!!!

DONASI LAH BANG BIAR 
ADMINNYA UPDATE LAGI

Kalau Mau Donasi Silahkan Pilih Yah
Payment : Ovo/Gopay/Dana
Number Payment : Chat Owner Wa nya Di Atas
Pulsa : 081528965381
*/

const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIs = {
liaacans: 'https://zenzapis.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zenzapis.xyz': '9d30efca66',
}

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//
global.thumb = fs.readFileSync('./image/thumbnail.jpg') // JGN DI UBAH!
global.name = 'wkzo_sky (Owner)', // GNTI NAMA LU!
global.creator = 'FelICA' // GANTI NAMA BOT LU BANH!
global.owner = ['6287882774951'] // GNTI NOMOR LU!
global.premium = ['6285821676621', '6281528965381', '62895339252482']
 // ADD PREM YG LU MAU BANH!!
global.quotes = 'Be Your Self, And Never Surrender' // Ganti Quotes, Tapi Trsrh Klian
global.pulsa = ['087882774951'] // UBAH NOMOR YG AKTIF!
global.botname = 'Created FelIca' // GNTI NAMA BOT LU!
global.packname = 'Makan nih Stiker' // TRSERAH MO GANTI AP!
global.author = 'FelIca' // GNTI NMA LU!
global.fake = 'FelIca BOT VERIFIED' // GNTI NMA BOT LU BANH!
// FITUR TOPUP OTOMATIS 
global.hargadmff = 1261
global.hargadmml = 1700
global.merchant = 'M221101PAZJ5903YO' 
global.secret = 'fcc9c3922337cd1443c071dbd3d356daebe4f908632e293241c31e8ac014c46f'
global.signature = 'ad488c46183fa32611f547ffbc5e4e10'
//CARA AKTIFIN:
//1. DAFTAR DI APIGAMES.UD
//2. AMBIL MERCHANT ID DAN SECRET KEY
//3. DAFTAR DI UNIPIN
//4. HUBUNGKAN AKUN UNIPIN DENGAN APIGANES DI BAGIAN KONEKSI
//5. BUAT SIGNATURE DENGAN TOOLS ENCRYPT MD5 MERCHANTID+SECRETKEY
//6 PASANG DIATAS SITU DAN SELESAI.
global.prefa = ['','!','.','/','#','$']
global.sp = '⭔' // JGN DI UBAH²! NTR EROR
global.mess = {
success: '*[SUCCESS]* SUKSES PERMINTAAN ANDA TERKIRIM!',
admin: 'Fitur Ini Khusus Untuk Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
prem: 'Khusus Premium, Lu dah premium kah?',
owner: 'Sorry, Owner only wkwkwk',
group: 'Gabisa, ini mah khusus Grub',
private: 'Gabisa cuy, khusus Private Chat',
bot: 'Fitur Ini Khusus Pengguna Nomor Bot',
wait: '*[WAIT]* SEDANG DIPROSES, HARAP TUNGGU SEBENTAR!',
endLimit: 'Jangan make berlebihan lah bre, Ni gw sewa VPS pake duit jajan w:(',
}
global.limitawal = {
premium: "Unlimited",
free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
