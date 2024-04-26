

function carregar(){
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();


    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} : ${min}`;

    if (hora >= 0 && hora <12){
        // Bom dia
        foto.src = `manha.jpg`;
        document.body.style.background = `#dc8a3d`;
    }
    else if (hora >=12 && hora <18 ){
        foto.src = `noite.jpg`;
        document.body.style.background = ` #ff9913`;

// boa tarde
    }
    else{
        // boa noite
        foto.src =`tarde.jpg`; 
        document.body.style.background = `#061632`;
    }
}