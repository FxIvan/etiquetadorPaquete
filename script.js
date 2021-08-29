let datoPaquetes = []

let nPaquete = document.getElementById('nPaquete')
let distancia = document.getElementById('distancia')
let titular = document.getElementById('titular')
let direccion = document.getElementById('direccion')


nPaquete.addEventListener('keyup', (e) => {
    let valorInput = e.target.value
    document.getElementById('sPaquete').innerHTML = valorInput
})


titular.addEventListener('keyup', (e) => {
    let valorInput = e.target.value
    document.getElementById('sSalida').innerHTML = valorInput
})

direccion.addEventListener('keyup', (e) => {
    let valorInput = e.target.value
    document.getElementById('direccionSalida').innerHTML = valorInput
})

function cargaPaquete() {

    let pesoPaquete = document.getElementById('pesoPaquete').value
    let nPaquete = document.getElementById('nPaquete').value
    let distancia = document.getElementById('distancia').value
    let titular = document.getElementById('titular').value
    let password = document.getElementById('password').value
    let direccion = document.getElementById('direccion').value

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
    let parseDireccion =  direccion.toUpperCase()
    let parseTitular = titular.toUpperCase()

    /**Aca estaba la funcion Paquete **/

    datoPaquetes.push(new Paquete(parsePeso, parseNumero, parseDistancia, parseTitular,parseDireccion))
    console.log(datoPaquetes)

    /*---------------------------------------- */

}

function Paquete(parsePeso, parseNumero, parseDistancia, parseTitular,parseDireccion) {
    this.parsePeso = parsePeso,
        this.parseNumero = parseNumero,
        this.parseDistancia = parseDistancia,
        this.parseTitular = parseTitular,
        this.parseDireccion = parseDireccion
}

function distanciaKm(distancia, tarifa1) {
    let resultadoParcial = distancia * 15
    let resultadoTotal = resultadoParcial + tarifa1

    let precioFinal = document.getElementById('precioFinal')

    precioEnvio.innerHTML = resultadoTotal
    alert(resultadoTotal)
}



let listaPaquete = [{
        id: 5489,
        direccion: "rio desaguadero",
        numero: 5014
    },
    {
        id: 4545,
        direccion: "avenida mitre",
        numero: 4525
    },
    {
        id: 8989,
        direccion: "rio gualeguay",
        numero: 258
    }
]

buscarPaquete = () => {
    let nPaquete = document.getElementById('nPaquete').value
    let parseNumero = parseFloat(nPaquete)

    for (const paquetes of listaPaquete) {
        if (paquetes.id == parseNumero) {
            alert("Este paquete ya se encuentra \n cargada en la base de datos")
            let contenedor = document.createElement('div')

            contenedor.innerHTML = `<p>Numero de Paquete: ${paquetes.id}</p>
                              <p>Direccion : ${paquetes.direccion}</p>
                              <p>Numero: ${paquetes.numero}</p>`
            document.body.appendChild(contenedor)
            contenedor.classList.add("contenedorMuestraPaquete")
        }
    }

}