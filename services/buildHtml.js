exports.buildHtml = (date, obj) => {
  console.log(obj);
  const style = {
    tdra: `border: solid 1px #ddeeee;
      color: #333;
      padding: 15px 30px;
      text-align: left;`,
    tdunstyle: `color: #333;`
  };

  const head = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Recibo La Picaflor</title>
      <style>
      h2{
        font: bold 24px Arial, sans-serif;
      }
      p{
        font: 16px Arial, sans-serif;
      }
      .total {
        text-align:left;
        font: 20px Arial, sans-serif;
      }
    .left-align{
      text-align:left;
    }
    .right-align{
      text-align:right;
    }
      .container{
        width:80%;
        max-width:100%;
        background-color:#FFF;
        margin:auto;
        padding:20px 20px;
        position:relative;
        width:800px;
      }
      td,th,tr {
        padding: 4px 8px;
        color: #333;
      }
      table {
        margin:auto;
        font: normal 16px Arial, sans-serif;
        width:80%;
      }
      .info-table {
        border:1px solid #e6e6e6;
        background-color:#f3f3f3;
        position:relative;
      }

      .info-table tbody tr {
        padding:0 25px;
      }

      @media (max-width:650px){
        .container{
          width:100%;
        }
        table{
          width:90%;
        }
      }
      </style>
    </head>`;

  const tabletop = `
  <body style="background-color:#ECEEF1;width:100%;">
  <div class="container">
  <div class="header" style="text-align:center;">
            <img src="http://lapicaflor.cl/images/logo.png" width="200px"/>
          </div>
  <h2> Gracias por preferirnos</h2>
  <p> ¡Gracias por comprar en La Picaflor! Para completar su compra favor transferir el total de la compra a:</p>
  <p> <b>Cuenta Corriente BCI</b><br>
      <b>N° CUENTA:</b> 27377849<br>
      <b>NOMBRE:</b> Comercializadora La Picaflor SpA<br>
      <b>RUT:</b> 76.839.053 - 3    <br> 
      <b>MENSAJE:</b> Pedido (Tu Nombre)<br>
      <b>CORREO:</b> pedidoslapicaflor@gmail.com<br>
  </p>
  <h2>Detalles de la compra</h2>
  <table class="info-table left-align">
        <tr>
          <td><b>Fecha de despacho</b><br> ${obj.date}</td>
          <td><b>Nombre</b><br> ${obj.formData.fullname}</td>
        </tr>
        <tr>
          <td><b>Comuna</b><br> ${obj.formData.comuna}</td>
          <td><b>Dirección</b><br> ${obj.formData.address}</td>
        </tr>
          <td><b>Teléfono</b><br> ${obj.formData.phone}</td>
        </tr>
      </table>
  <table>
  <thead class="left-align">
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody>`;

  let products = "";
  obj.cart.map(
    i =>
      (products += `<tr><td>${i.name}</td>
          <td style="left-align">${i.qty} ${i.measure}</td>
          <td style="right-align">${i.price}</td></tr>`)
  );

  const tablebottom = `
  <td></td>
  <td></td>
  <td>
  <p class="total right-align">
  <b>Total</b>  
  $ ${obj.total}
  </p>
  </td>

 
  </tbody>
  </table></div></body></html>`;

  const content = head + tabletop + products + tablebottom;
  return content;
};
