function cari(){
    var nilai = document.inputnilai.nilai.value
    if(nilai > 80 && nilai <= 100){
        document.inputnilai.indikator.value = "A";
    }
    else if(nilai > 60){
        document.inputnilai.indikator.value = "B";
    }
    else if(nilai > 40){
        document.inputnilai.indikator.value = "C";
    }
    else if(nilai > 20){
        document.inputnilai.indikator.value = "D";
    }
    else if(nilai > 0){
        document.inputnilai.indikator.value = "E";
    }
    else{
        document.inputnilai.indikator.value = "Input Error"
    }
}

