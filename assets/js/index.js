async function  converter() {
  
  try {
    const resp = await fetch("https://mindicador.cl/api/");
    const data = await resp.json();
    const { dolar, euro, bitcoin, uf, utm, ivp } = data;

    const $ = document;
    let moneda = $.getElementById("seleccion-moneda").value;
    console.log("moneda", moneda);
    let obtenerMonto = parseFloat($.getElementById("input-monto").value);
    console.log("monto", obtenerMonto);

    $.getElementById("btnBuscar").addEventListener("click", converter);
    let resultado;

    switch (moneda) {
      case "bitcoin":
        resultado = obtenerMonto / bitcoin.valor;
        break;
      case "dolar":
        resultado = obtenerMonto / dolar.valor;
        break;
      case "euros":
        resultado = obtenerMonto / euro.valor;
        break;
      case "uf":
        resultado = obtenerMonto / uf.valor;
        break;
      case "utm":
        resultado = obtenerMonto / utm.valor;
        break;
      case "ivp":
        resultado = obtenerMonto / ivp.valor;
        break;
      default:
        resultado = "favor ingresa algo";
        break;
    }
    $.getElementById("resultado").textContent = resultado.toFixed(4);
    $.getElementById("resultado").style.color = "white"
  }catch (error) {
     console.error("Error en la api", error);
  }
}
converter();
