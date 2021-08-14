  function cargaPaquete() {

      let nPaquete = document.getElementById('nPaquete').value
      let pesoPaquete = document.getElementById('pesoPaquete').value
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
                      console.log(titular)
                      break;
                  case "5":
                      distanciaKm(distancia, tarifa2)
                      console.log(titular)
                      break;
                  case "10":
                      distanciaKm(distancia, tarifa3)
                      console.log(titular)
                      break;

                  default:
                      alert("Lo sentimos solo hacemos envios de hasta 10KG")
                      break;
              }
          }
      }
      function distanciaKm(distancia, tarifa1) {
          let resultadoParcial = distancia * 15
          let resultadoTotal = resultadoParcial + tarifa1

          let precioFinal = document.getElementById('precioFinal')
          precioFinal.innerHTML = resultadoTotal
          alert(resultadoTotal)
      }
  }