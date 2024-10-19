var serverName = "Server1";
console.log(serverName);

let enesserver;
console.log(enesserver); 
enesserver = "oc";
console.log(enesserver)


let fullname = "Enes Irmak"
//let değişkenlerin değeri değiştirilebilir!
fullname = "Lorem ipsumdolor"
console.log(fullname)


const serverPass = "es.i3452"
console.log("server pass : " + serverPass)

let enesIrmak = "Merhaba Dünya!"
console.log(enesIrmak)
const ENESIRMAK = "Merhaba Dünya!"
console.log(ENESIRMAK)
let türkçeBilgi = "Türkçe Bilgi Yazdırılıyor..." // doğru kullanım değil

console.log(türkçeBilgi)


let fiyat = 1000
let kdv = 0.18
let kdvfiyat = fiyat * kdv
let toplam = fiyat + kdvfiyat

console.log(
    "fiyat : ", fiyat,"\n",
    "kdv oranı : ", kdv,"\n",
    "kdv tutarı : ", kdvfiyat,"\n",
    "toplam tutar : ", toplam
)

let counter = 1
counter += 2
console.log(counter)

function islemyap() {
    var sayi1 = parseInt(prompt("sayi 1 girin: "))
    var sayi2 = parseInt(prompt("sayi 2 girin: "))

    var sonuc = sayi1 + sayi2
alert(sonuc)
}


let osmankilli;
let newosmankilli = Boolean(osmankilli)
console.log(newosmankilli)


let enes = "11"
console.log(
    "enes: ",
    typeof(enes)
);


let username = "enesirmak81"
const domain = "enesirmak.rf.gd"

let email = username + "@" + domain
console.log("Merhaba", username, "Sitemize Hoş Geldin!", "\n",
     "mail adresin: ", email);

console.log(document.location);
document.body.style.background="aqua"

let title = document.getElementById('app')
console.log(title.innerHTML);

let linksikis = document.querySelector('ul.ull>li>a')
linksikis.style.color = "red"
linksikis.classList.add("iman")
console.log(linksikis.innerHTML="link yok boka basın");

function yarrakolcum(){
    let fullName = prompt("Lütfen ekran uzunluğunu gir (cm): ")
    let cevap = "Girilen değer: " + fullName + "cm"
    let kck = "Yani !KÜÇÜK!"
    let byk = "Ho!"
    alert(cevap)
    if(fullName > 20)
        alert(byk)
    else
        alert(kck)
}


