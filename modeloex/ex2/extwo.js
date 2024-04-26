function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`Bota os dados direito`);
    }
    else{
        var fsex = document.getElementsByName('radiosex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked){
            genero = 'Homem';

            if(idade >=0 && idade <10){
                img.setAttribute('src', 'criancah.jpg');
                // criança
            }
            else if(idade<21){
                img.setAttribute('src', 'homemj.jpg');
                // jovem
            }
            else if(idade<50){
                img.setAttribute('src', 'mulheri.jpg')
                // homem
            }
            else{
                img.setAttribute('src', 'homemi.jpg');
                // idoso
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'criancam.jpg');

                // criança
            }
            else if(idade<21){
                // jovem
                img.setAttribute('src', 'mulher.jpg');

            }
            else if(idade<50){
                // homem
                img.setAttribute('src', 'homemj.jpg')
            }
            else{
                // idoso
                img.setAttribute('src', 'mulheri.jpg')
            }
        }

        res.innerHTML = ` ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
