

function cargaPaquete() {

    let pesoPaquete = document.getElementById('pesoPaquete').value
    let nPaquete = document.getElementById('nPaquete').value
    let distancia = document.getElementById('distancia').value
    let titular = document.getElementById('titular').value
    let password = document.getElementById('password').value

    let tarifa1 = 50
    let tarifa2 = 100
    let tarifa3 = 180

    if (password == "123") {
        if (nPaquete.length == 4) {
            switch (pesoPaquete) {
                case "2":
                    distanciaKm(distancia, tarifa1)
                    break;
                case "5":
                    distanciaKm(distancia, tarifa2)
                    break;
                case "10":
                    distanciaKm(distancia, tarifa3)
                    break;

                default:
                    alert("Lo sentimos solo hacemos envios de hasta 10KG")
                    break;
            }
        }
    }

    /*-------------------APLICANDO OBJETO--------------------- */
    let parsePeso = parseFloat(pesoPaquete)
    let parseNumero = parseFloat(nPaquete)
    let parseDistancia = parseFloat(distancia)
    let parseTitular = titular.toUpperCase()

    let datosPaquete={
        peso:parsePeso,
        numberoPaquete:parseNumero,
        distanciaPaquete:parseDistancia,
        titularPaquete:parseTitular
    }

    console.log(datosPaquete)
    /*---------------------------------------- */

}

function distanciaKm(distancia, tarifa1) {
    let resultadoParcial = distancia * 15
    let resultadoTotal = resultadoParcial + tarifa1

    let precioFinal = document.getElementById('precioFinal')
    precioFinal.innerHTML = resultadoTotal
    alert(resultadoTotal)
}
/*
        betaInput.addEventListener('keyup', (e)=>{
            let valorInput = e.target.value
            document.getElementById('betaSalida').textContent = valorInput
        })
        */
/*                               */

 
buscarPaquete=()=>{
    let pesoPaquete = document.getElementById('pesoPaquete').value
    let nPaquete = document.getElementById('nPaquete').value
    let distancia = document.getElementById('distancia').value
    let titular = document.getElementById('titular').value
    let password = document.getElementById('password').value

    let parsePeso = parseFloat(pesoPaquete)
    let parseNumero = parseFloat(nPaquete)
    let parseDistancia = parseFloat(distancia)
    let parseTitular = titular.toUpperCase()

    function Paquete(parsePeso,parseNumero,parseDistancia,parseTitular){
        this.parsePeso = parsePeso,
        this.parseNumero = parseNumero,
        this.parseDistancia = parseDistancia,
        this.parseTitular = parseTitular
    }

    const prueba1 = new Paquete(parsePeso,parseNumero,parseDistancia,parseTitular)
    console.log(prueba1)
    console.log(parsePeso,parseNumero,parseDistancia,parseTitular)

}