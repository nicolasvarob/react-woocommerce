const express = require("express");
const path = require("path");
const app = express();
const credentials = require("./secret/keys.json");
const fs = require("fs");
const cron = require("node-cron");
const emailer = require("./services/emailer");

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

var WooCommerce = new WooCommerceRestApi({
  url: "http://167.99.6.92/",
  consumerKey: credentials.CONSUMER_KEY,
  consumerSecret: credentials.CONSUMER_SECRET,
  version: "wc/v3"
});

const port = 5000;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

//TODO ACTUALIZAR LIBRERIA
async function callWooCommerce() {
  const result = await WooCommerce.get("products");
  const response = await result.data;
  const products = await response.map(i => {
    const id = i.id;
    const title = i.name;
    const price = i.price;
    const regular_price = i.regular_price;
    const sale_price = i.sale_price;
    const featured = i.featured;
    const on_sale = i.on_sale;

    let featured_src = "none";
    let tags = "none";
    let categories = "none";
    if (i.images[0]) featured_src = i.images[0].src;
    if (i.tags[0]) tags = i.tags[0].name;
    if (i.categories[0]) categories = i.categories[0].name;

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
    console.log(obj);
    return obj;
  });

  //Save WooCommerce response as product json
  const resToJSON = JSON.stringify(products);
  fs.writeFile("./products.json", resToJSON, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    //Actualizar JSON
    console.log("JSON file has been saved.");
  });
}
callWooCommerce();

//Cron Job
cron.schedule(
  "0 5 * * *",
  () => callWooCommerce().catch(e => console.log(e)),
  null,
  true,
  "America/Santiago"
);

// Handles any requests that don't match the ones above

app.post("/api/sender", (req, res) => {
  emailer.SendOrderTo(req.body);
  res.send("ok");
});

app.get("/api/store", (req, res) => {
  res.sendFile(path.join(__dirname + "/products.json"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Server starter on ${port}`));
