import React, { Component } from 'react';

import { data } from './Data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    
    state = {
        data: data
    }
    
    render(){

        console.log(this.state.data);

        return(
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };