import React, { Component } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';
import productJSON from '../../assets/products.json'

const mapProduct = ({ title, id, regular_price, featured_src,sale_price, on_sale, tags,categories }) => ({ categories: categories, name: title, id, price: parseInt(regular_price),sale_price:parseInt(sale_price), img: featured_src,measure:tags[0],on_sale:on_sale })


class ProductGrid extends Component {

    //Grilla de productos,
   /*  state = {
        products: [
            {title: 'test blue', id:0, regular_price: '599', images: [{src: 'https://perskindol.ch/wp-content/uploads/2018/07/gel-pflaster-spray-muskel-gelenkschmerzen-400x400.png'}]},
            {title: 'test other', id:1, regular_price: '2700', images: [{src: 'http://www.ekinos.com.ar/file/im/20180428144543acido_tioctico.jpg'}]},
            {title: 'test yes', id:2,featured:true, regular_price: '1500', images: [{src: 'https://www.dominionsalt.co.nz/wp-content/uploads/2017/03/Pacific_DSPE25_Group4-web800-400x400.jpg'}]},
            {title: 'maybe test', id:3, regular_price: '5000', images: [{src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwTQI9H4W-SkbMY2_D-vcQ8K1GHxCwAWJIyvtpB4ho3sodkItuQ'}]},
            {title: 'other producto', id:4, featured: true,regular_price: '220', images: [{src: 'https://www.molinodezafra.com/wp-content/uploads/2018/03/Aceite-de-oliva-virgen-extra-20-mililitros-enbase-vidrio-400x400.jpg'}]},
            {title: 'product also', id:5, regular_price: '2100', images: [{src: 'http://www.wellnesspremiumproducts.com/wp-content/uploads/2018/08/micro-capsules-hair-mask_keratin-mask-400x400.jpg'}]},
            {title: 'product also', id:6, regular_price: '1290', images: [{src: 'https://quesodealbarracin.es/wp-content/uploads/2014/11/products_optimizada_don-manuel-cuna-400x400.jpg'}]}
        ]
    } */
    state = {
        products:productJSON
    }
    
    render() {
        let list = this.state.products;
        let pageCategory = this.props.category;
        if(pageCategory) list = list.filter(i => { 
            if(i.categories) return i.categories[0].toLowerCase() === pageCategory;
            else return false;
        });
        let renderFeatured;
        let listItems;


        if (this.props.featured) {
            const featured = list.filter((item) => {
                return item.featured === true;
            });

            let featuredItems = featured.map((item) => (
                <div className="col-6 col-md-3" key={item.id}>
                    <SingleProduct product={mapProduct(item)} />
                </div>
            ))
            renderFeatured = <div><div className="row"> {featuredItems}</div></div>
        }

        listItems = list.map((item) => (
            <div className="col-6 col-md-3" key={item.id}>
                <SingleProduct product={mapProduct(item)} />
            </div>
        ))

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
                        <img alt="La Picaflor" style={{"maxWidth":"100%","opacity":"0.2"}} src={require('../../assets/handraw-vegetables.jpg')} />
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