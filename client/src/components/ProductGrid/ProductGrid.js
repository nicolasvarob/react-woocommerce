import React, { Component } from "react";
import SingleProduct from "./SingleProduct/SingleProduct";
import productJSON from "../../assets/products.json";

const mapProduct = ({
  title,
  id,
  regular_price,
  featured_src,
  sale_price,
  on_sale,
  tags,
  categories
}) => ({
  categories: categories,
  name: title,
  id,
  price: parseInt(regular_price),
  sale_price: parseInt(sale_price),
  img: featured_src,
  measure: tags[0],
  on_sale: on_sale
});

class ProductGrid extends Component {
  //Grilla de productos,

  state = {
    products: [],
    loaded: false
  };

  componentDidMount() {
    console.log('did mount')
    fetch("http://167.99.6.92:5000/api/store")
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log("will load");
        if (json) {
          console.log("load");
          console.log(json);
          return this.setState({ products: json });
        }
      })
      .catch(function(err) {
        console.log("Hubo un problema con la petición Fetch:" + err.message);
      });
  }

  render() {
    console.log('render')
    let list = this.state.products;
    console.log(list)
    let pageCategory = this.props.category;
    if (pageCategory) {
      pageCategory = pageCategory.replace("-", " ");
      list = list.filter(i => {
        if (i.categories) return i.categories[0].toLowerCase() === pageCategory;
        else return false;
      });
    }

    let renderFeatured;
    let listItems;

    if (this.props.featured) {
      const featured = list.filter(item => {
        return item.featured === true;
      });

      let featuredItems = featured.map(item => (
        <div className="col-6 col-md-3" key={item.id}>
          <SingleProduct product={mapProduct(item)} />
        </div>
      ));
      renderFeatured = (
        <div>
          <div className="row"> {featuredItems}</div>
        </div>
      );
    }

    listItems = list.map(item => (
      <div className="col-6 col-md-3" key={item.id}>
        <SingleProduct product={mapProduct(item)} />
      </div>
    ));

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
            <div className="row">{listItems}</div>
            <img
              alt="La Picaflor"
              style={{ maxWidth: "100%", opacity: "0.2" }}
              src={require("../../assets/handraw-vegetables.jpg")}
            />
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
            <div className="row">{listItems}</div>
          </div>
        </div>
      );
    }
  }
}

export default ProductGrid;
