var urunTipi, urunSecimi, urunSayisi, urunTaksidi;
var araToplam, odenecekToplamTutar, kargoUcreti;
var i;
var liste, secenek;
var erkekUrunleri=["Adidas",100,"Nike",80,"Reebok",65,"Puma",90,"New Balance",120,"Skechers",150,"Lumberjack",210,];
var kadinUrunleri=["U.s. Polo Assn",150,"Slazenger",90,"Hummel",225,"Jump",90,"Lescon",110,"Letao",40,"Polaris",190,];

function urunleriGetir() {

    document.querySelectorAll('#urunListesi option').forEach(option=>option.remove());
    liste=document.getElementsByName("urunTipi");
    for (i=0; i<liste.length;i++) {
        if (liste[i].checked) {
            urunTipi=liste[i].value;
        }
    }
    console.log(urunTipi); //bi kontrol edeyim dedim.

    if(urunTipi=="E") {
        for(i=0;i<erkekUrunleri.length;i=i+2) {
            secenek=document.createElement("option");
            liste=document.getElementbyId("urunListesi");
            liste.option.add(secenek);
            secenek.text=erkekUrunleri[i];
            secenek.value=erkekUrunleri[i+1];
        }
    }
    else if(urunTipi=="K"){
        for(i=0;i<kadinUrunleri.length;i=i+2) {
            secenek=document.createElement("option");
            liste=document.getElementbyId("urunListesi");
            liste.option.add(secenek);
            secenek.text=kadinUrunleri[i];
            secenek.value=kadinUrunleri[i+1];
        }
    }
}