import React, { Component } from 'react';

import { items } from './Data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    
    state = {
        persons: [],
        sortedPersons: [],
        loading: true,
        account: '',
        username: '',
        country: '',
        city: '',
        sex: '',
        age: '',
        message: ''
    }

    // get data
    componentDidMount(){
        let persons = this.formatData(items);
        this.setState({
            persons: persons,
            sortedPersons: persons,
            loading: false
        })
    }
    
    formatData(items){
        let tempItems = items.map(item => {
            let id = item.id;
            let person = {...item, id};
            return person;
        });
        return tempItems;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterPersons
        )
    };

    filterPersons = () => {
        let {persons, username, country, city, age} = this.state;
        
        // all the persons
        let tempPersons = [...persons];
        
        
        // filter by name
        if(username !== ''){
            tempPersons = tempPersons.filter((person) => {
                return person.username.indexOf(this.state.username) !== -1;
            });
        };

        // filter by country
        if(country !== 'الدولة'){
            tempPersons = tempPersons.filter(person => person.country === country);
        };

        // filter by city
        if(city !== ''){
            tempPersons = tempPersons.filter(person => person.city === city);
        };

        // filter by age
        if(age !== 0){
            tempPersons = tempPersons.filter(person => person.age === age);
        };

        // change state
        this.setState({
            sortedPersons: tempPersons
        });
    };

    render(){

        return(
            <ProductContext.Provider value={{...this.state,  handleChange: this.handleChange}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const PersonConsumer = ProductContext.Consumer;

export { ProductProvider, PersonConsumer };
