//https://api.bitfinex.com/v1/pubticker/btcusd

document.querySelector("#buton").addEventListener('click', traerDatos);

function traerDatos () {
    //works la funcion
    //console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open ('GET', 'api/bitcoin.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos.timestamp);
            
            //let time = console.log(new Date(datos.timestamp * 1000).toISOString().slice(0, 19).replace('T', ' '));

            let res = document.querySelector('#res');
            res.innerHTML = '';

            res.innerHTML +=`
            <div class="container mt-5">
                <h3>Low</h3>
                <p>${ datos.low }</p>
                <h3>Last Price</h3>
                <p>${ datos.last_price}</p>
                <h3>Volume</h3>
                <p>${ datos.volume}</p>
            </div>
            `
        }
    }
}