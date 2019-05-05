const express = require('express')
const path = require('path');
const app = express();
const credentials = require('./secret/keys.json');
const fs = require('fs');

const WooCommerceAPI = require('woocommerce-api')

var WooCommerce = new WooCommerceAPI({
    url: 'http://localhost/lapicaflor/',
    consumerKey: credentials.CONSUMER_KEY,
    consumerSecret: credentials.CONSUMER_SECRET,
    version: 'v3'
});

const port = 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

WooCommerce.getAsync('products').then((result) => {
    const response = JSON.parse(result.toJSON().body);
    const products = response.products.map(i => {
        console.log(i)
        const title = i.title;
        const price = i.price;
        const regular_price = i.regular_price;
        const sale_price = i.sale_price;
        const featured = i.featured;
        const featured_src = i.featured_src;
        const tags = i.tags;
        const on_sale = i.on_sale;

        const obj = {
            title: title,
            price: price,
            regular_price: regular_price,
            sale_price: sale_price,
            featured_src: featured_src,
            featured: featured,
            tags: tags,
            on_sale: on_sale
        }
        return obj;
    });
    return products;
}).then(
    //Save WooCommerce response as product json
    res => {
        const resToJSON = JSON.stringify(res);
        fs.writeFile("./client/src/assets/products.json", resToJSON, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
            console.log("JSON file has been saved.");
        });
    }
);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.listen(port, () => console.log(`Server starter on ${port}`))