function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txf');
    let passo = document.getElementById('txp');
    let resul = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Preenche direito desgraçado');
    } else {
        resul.innerHTML = 'Contanto:';

        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);



        for( let c = i; c <=f; c += p){
            resul.innerHTML += `${c}, `;
        }
;    }

   
}