let datoPaquetes=[]

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

    function Paquete(parsePeso,parseNumero,parseDistancia,parseTitular){
        this.parsePeso = parsePeso,
        this.parseNumero = parseNumero,
        this.parseDistancia = parseDistancia,
        this.parseTitular = parseTitular
    }

    datoPaquetes.push(new Paquete(parsePeso,parseNumero,parseDistancia,parseTitular))
    console.log(datoPaquetes)

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

 
let listaPaquete=[
    {id:5489, direccion:"rio desaguadero",numero:5014},
    {id:4545, direccion:"avenida mitre",numero:4525},
    {id:8989, direccion:"rio gualeguay",numero:258}
]

buscarPaquete=()=>{
    let pesoPaquete = document.getElementById('pesoPaquete').value
    let nPaquete = document.getElementById('nPaquete').value
    let distancia = document.getElementById('distancia').value
    let titular = document.getElementById('titular').value

    let parsePeso = parseFloat(pesoPaquete)
    let parseNumero = parseFloat(nPaquete)
    let parseDistancia = parseFloat(distancia)
    let parseTitular = titular.toUpperCase()

    for(const paquetes of listaPaquete){
        if(paquetes.id == parseNumero){
            alert("Este paquete ya se encuentra \n cargada en la base de datos")
        }
    }

    


}