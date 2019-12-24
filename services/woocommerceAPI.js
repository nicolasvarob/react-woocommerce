import WooCommerceAPI from 'woocommerce-api'
import Credentials from '../secret/keys.json';

var WooCommerce = new WooCommerceAPI({
    url: 'http://167.99.6.92/',
    consumerKey: Credentials.CONSUMER_KEY,
    consumerSecret: Credentials.CONSUMER_SECRET,
    version: 'v3'
});

export default WooCommerce;