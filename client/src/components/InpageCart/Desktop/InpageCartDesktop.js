import React, { Component } from 'react';

class componentName extends Component {
    //TODO: Hacer este botón reutilizable.
    // Este boton colapsa el shopping cart del header, la funcionalidad de colapsar el div no esta hecha por react si no que la entrega bootstrap

    render() {
        return (
            <button className="btn btn-primary btn-lg btn-block d-none d-lg-block" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Show cart content
            </button>

        );
    }
}

export default componentName;