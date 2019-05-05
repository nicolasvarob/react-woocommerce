# ReactJS Ecommerce + BackEnd WooCommerce

Ecommerce sin portal de pago, utiliza WooCommerce  API para gestión de productos.

La carpeta *client* tiene todo el desarrollo en react.

## Arquitectura

* Vista Home, categoría de producto, checkout, página de confirmación y 404.
* [Navbar](https://github.com/conceptorobledo/react-woocommerce/blob/master/client/src/components/Navigation/Navbar/Navbar.js) integrada con React Router.
* Componente de [carro de compras inpage](https://github.com/conceptorobledo/react-woocommerce/tree/master/client/src/components/InpageCart). El que esta directo en el directorio es mobile, y el que esta dentro de Desktop es para escritorio. (Hay que ordenar la arquitectura despues).
* Redux con toda la lógica del carro de compras.
* [Componente Incrementer](https://github.com/conceptorobledo/react-woocommerce/blob/master/client/src/components/InpageCart/OrderList/Incrementers/Incrementer.js), que incrementa o decrementa las cantidades en el carro de compras. Este debiese ser reutilizado para el TODO de incrementer.
* Servicio de Woocommerce API en [carpeta services](https://github.com/conceptorobledo/react-woocommerce/blob/master/client/src/services/woocommerceAPI.js), esta API se llama de manera programatica en un JSON de productos y se almacena en un JSON de productos en los [assets](https://github.com/nicolasvarob/react-woocommerce/tree/master/client/src/assets).

## TODOs

1. Persistencia para el Checkout Cart.
2. Envio de email de confimración de compra para cliente y empresa.
3. Mostrar "no hay productos en carror de compras"
