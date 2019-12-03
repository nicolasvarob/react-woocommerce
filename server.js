const express = require("express");
const path = require("path");
const app = express();
const credentials = require("./secret/keys.json");
const fs = require("fs");
const cron = require("node-cron");
const emailer = require('./services/emailer');

const WooCommerceAPI = require("woocommerce-api");

var WooCommerce = new WooCommerceAPI({
  url: "http://167.99.6.92/backstore/",
  consumerKey: credentials.CONSUMER_KEY,
  consumerSecret: credentials.CONSUMER_SECRET,
  version: "v3"
});

const port = 5000;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json())

async function callWooCommerce() {
  const result = await WooCommerce.getAsync("products");
  const response = await JSON.parse(result.toJSON().body);
  const products = await response.products.map(i => {
    const id = i.id;
    const title = i.title;
    const price = i.price;
    const regular_price = i.regular_price;
    const sale_price = i.sale_price;
    const featured = i.featured;
    const featured_src = i.featured_src;
    const tags = i.tags;
    const on_sale = i.on_sale;
    const categories = i.categories;
    const obj = {
      id: id,
      title: title,
      price: price,
      regular_price: regular_price,
      sale_price: sale_price,
      featured_src: featured_src,
      featured: featured,
      tags: tags,
      on_sale: on_sale,
      categories: categories
    };
    return obj;
  });

  //Save WooCommerce response as product json
  const resToJSON = JSON.stringify(products);
  fs.writeFile("./products.json", resToJSON, "utf8", function(
    err
  ) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    
    //Actualizar JSON
    console.log("JSON file has been saved.");
  });
}
callWooCommerce().catch(e => {
  console.log("Error en llamada a WooCommerce API");
  console.log(e);
});

//Cron Job
cron.schedule(
  "* 5 * * * *",
   () => callWooCommerce().catch(e => console.log(e)),
  null,
  true,
  "America/Santiago"
);

// Handles any requests that don't match the ones above

app.post("/api/sender", (req, res) => {
  emailer.SendOrderTo(req.body);
  res.send('ok')
});

app.get("/api/store/", (req, res) => {
  res.sendFile(path.join(__dirname + "/products.json"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Server starter on ${port}`));
