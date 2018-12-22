import React, { Component } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';
import WooCommerce from '../../services/woocommerceAPI';


class ProductGrid extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        WooCommerce.getAsync('products').then((result) => {
            const response = JSON.parse(result.toJSON().body);
            this.setState({ products: response.products });
        });
    }
    render() {
        const list = this.state.products
        let renderFeatured;
        let listItems;


        if (this.props.featured) {
            const featured = list.filter((item) => {
                return item.featured === true;
            });
            let featuredItems = featured.map((item) => <div className="col-sm-3" key={item.id}><SingleProduct id={item.id} name={item.title} img={item.images[0].src} price={item.regular_price} /></div>)
            renderFeatured = <div><div className="row"><h2>Productos destacados</h2></div><div className="row"> {featuredItems}</div></div>
        }
        listItems = list.map((item) => <div className="col-sm-3" key={item.id}><SingleProduct id={item.id} name={item.title} img={item.images[0].src} price={item.regular_price} /></div>)

        return (
            <div className="container">
                <div className="row">
                    <h1>Frontend Display</h1>
                </div>
                {renderFeatured}
                <div className="row">
                    <h2>Más vistos</h2>
                </div>
                <div className="row">
                    {listItems}
                </div>
            </div>
        );
    }
}

export default ProductGrid;