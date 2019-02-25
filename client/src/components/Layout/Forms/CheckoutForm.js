import React from 'react';

const CheckoutForm = () => {
    return (
        <form>
            <div className="form-row">
                <div className="form-group col">
                    <label >Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label>Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
        </form>
    );
};

export default CheckoutForm;