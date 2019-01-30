# ReactJS Ecommerce + BackEnd WooCommerce
======
Ecommerce sin portal de pago, utiliza WooCommerce  API para gestión de productos.

La carpeta *client* tiene todo el desarrollo en react.

## Arquitectura
* Vista Home, categoría de producto, checkout, página de confirmación y 404.
* [Navbar]:https://github.com/conceptorobledo/react-woocommerce/blob/master/client/src/components/Navigation/Navbar/Navbar.js integrada con React Router.
* Componente de [carro de compras inpage]:https://github.com/conceptorobledo/react-woocommerce/tree/master/client/src/components/InpageCart. El que esta directo en el directorio es mobile, y el que esta dentro de Desktop es para escritorio. (Hay que ordenarlo dp).
* Redux con toda la lógica del carro de compras.
* [Componente Incrementer]:https://github.com/conceptorobledo/react-woocommerce/blob/master/client/src/components/InpageCart/OrderList/Incrementers/Incrementer.js, que incrementa o decrementa las cantidades en el carro de compras. Este debiese ser reutilizado para el TODO de incrementer.
* Servicio de Woocommerce API en [carpeta services]:https://github.com/conceptorobledo/react-woocommerce/blob/master/client/src/services/woocommerceAPI.js, esta API se llama cada vez que se carga la grilla de productos. Hay que optimizar esto con cache o algo más bonito.


## TODOs
* Hacer un incrementer + - dentro de la misma grilla de productos, en los productos que se agregaron al carro de compras.
* Persistencia para el Checkout Cart.
* Cargar la API en redux ? (O quiza haya mejor alternativa).
* Cachear la API.
* Desarrollar vistas de Checkout y Confirmación (Thank you page).
* Envio de email de confimración de compra para cliente y empresa.
* Hacer el footer
