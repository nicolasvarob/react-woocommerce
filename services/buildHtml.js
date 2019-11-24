exports.buildHtml = (date, obj) => {
  console.log(obj);
  const style = {
    th: `background-color: #ddefef;
    border: solid 1px #ddeeee;
    color: #336b6b;
    text-align: left;`,
    td: `color: #333;`,
    tdra: `border: solid 1px #ddeeee;
      color: #333;
      padding: 15px 30px;
     
      text-align: right;`,
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
        .container{
          width:80%;
        }
        td,th,tr {
          padding: 15px 30px;
        }
        @media (max-width:650px){
          .container{
            width:98%;
          }
          td,th,tr {
            padding: 4px 8px;
          }
        }
      </style>
    </head>`;

  const tabletop = `
  <body style="background-color:#ECEEF1;width:100%;">
  <div class="container" style="max-width:800px;background-color:#FFF;margin:auto;border:1px solid #d4d6d8;padding:20px 20px;">
  <div class="header" style="text-align:center;">
            <img src="http://lapicaflor.cl/images/logo.png" width="200px"/>
          </div>
  <table style="
      border-collapse: collapse;
      border-spacing: 0;
      font: normal 16px Arial, sans-serif; color:#333;">
        <tr>
          <td><b>Fecha de la orden</b></td>
          <td>${date}</td>
        </tr>
        <tr>
          <td><b>Fecha de despacho</b></td>
          <td>${obj.date}</td>
        </tr>
        <tr>
          <td><b>Nombre</b></td>
          <td>${obj.formData.fullname}</td>
        </tr>
        <tr>
        <td><b>Comuna</b></td>
        <td>${obj.formData.comuna}</td>
      </tr>
      <tr>
        <td><b>Dirección</b></td>
        <td>${obj.formData.address}</td>
      </tr>
      <tr>
        <td><b>Teléfono</b></td>
        <td>${obj.formData.phone}</td>
      </tr>
      </table>
  <table style="border: 1px solid grey;
  border: solid 1px #ddeeee;
  border-collapse: collapse;
  border-spacing: 0;
  font: normal 13px Arial, sans-serif;">
  <thead>
    <tr>
      <th style="${style.th}">Producto</th>
      <th style="${style.th}">Cantidad</th>
      <th style="${style.th}">Unidad</th>
      <th style="${style.th}">Total</th>
    </tr>
  </thead>
  <tbody>`;

  let products = "";
  obj.cart.map(
    i =>
      (products += `<tr><td style="${style.td}">${i.name}</td>
          <td style="${style.tdra}">${i.qty}</td>
          <td style="${style.td}">${i.measure}</td>
          <td style="${style.tdra}">${i.price}</td></tr>`)
  );

  const tablebottom = `</tbody>
  </table></div></body></html>`;

  const content = head + tabletop + products + tablebottom;
  return content;
};
