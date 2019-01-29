import React, { Component } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';
import WooCommerce from '../../services/woocommerceAPI';


class ProductGrid extends Component {

    //Grilla de productos,
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
            let featuredItems = featured.map((item) => <div className="col-6 col-md-3" key={item.id}><SingleProduct id={item.id} name={item.title} img={item.images[0].src} price={item.regular_price} /></div>)
            renderFeatured = <div><div className="row"> {featuredItems}</div></div>
        }
        listItems = list.map((item) => <div className="col-6 col-md-3" key={item.id}><SingleProduct id={item.id} name={item.title} img={item.images[0].src} price={item.regular_price} /></div>)

        if (this.props.isHome) {
            return (
                <div className="container">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col">
                                <h2 className="grid-title">Destacados</h2>
                            </div>
                        </div>
                        {renderFeatured}
                        <div className="row text-center">
                            <div className="col">
                                <h2 className="grid-title">Más vistos</h2>
                            </div>
                        </div>
                        <div className="row">
                            {listItems}
                        </div>
                    </div>
                </div>
            );
        } else {
            return ( 
                <div className="container">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col">
                                <h2 className="grid-title">Productos</h2>
                            </div>
                        </div>
                        <div className="row">
                            {listItems}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default ProductGrid;