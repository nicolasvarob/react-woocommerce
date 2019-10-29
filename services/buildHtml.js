exports.buildHtml = (date, obj) => {
  const style = {
    th: `background-color: #ddefef;
    border: solid 1px #ddeeee;
    color: #336b6b;
    padding: 15px 30px;
    text-align: left;
    text-shadow: 1px 1px 1px #fff;`,
    td: `border: solid 1px #ddeeee;
      color: #333;
      padding: 15px 30px;
      text-shadow: 1px 1px 1px #fff;`,
    tdra: `border: solid 1px #ddeeee;
      color: #333;
      padding: 15px 30px;
      text-shadow: 1px 1px 1px #fff;     
      text-align: right;`,
    tdunstyle: `color: #333;
    padding: 15px 30px;
    text-shadow: 1px 1px 1px #fff;`
  };

  const tabletop = `
  <div style="width:100%;">
  <table style="
      border-collapse: collapse;
      border-spacing: 0;
      font: normal 16px Arial, sans-serif;">
        <tr>
          <td style="${style.tdunstyle}"><b>Fecha de la orden</b></td>
          <td style="${style.tdunstyle}">${date}</td>
        </tr>
        <tr>
          <td style="${style.tdunstyle}"><b>Fecha de despacho</b></td>
          <td style="${style.tdunstyle}">${obj.date}</td>
        </tr>
        <tr>
          <td style="${style.tdunstyle}"><b>Nombre</b></td>
          <td style="${style.tdunstyle}">Nicolás Garcia</td>
        </tr>
        <tr>
        <td style="${style.tdunstyle}"><b>Dirección</b></td>
        <td style="${style.tdunstyle}">Nicolás Garcia</td>
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
  </table></div>`;

  const content = tabletop + products + tablebottom;
  console.log(content);
  return content;
};
