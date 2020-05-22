import React from 'react';
import { PersonConsumer } from '../Context';

// get all unique values
const getUnique = (persons, value) => {
  return [...new Set(persons.map(person => person[value]))];
};


function PersonsFilter({persons}) {
  return (
    <PersonConsumer>
      {(value) => {

        const {handleChange, username, country, city, age} = value;
        
        // get unique countries
        let countries = getUnique(persons, 'country');

        
        // map to jsx
        countries = countries.map((item, index) => {
          return <option value={item} key={index} >{item}</option>
      });

        // get ages
        let ages = getUnique(persons, 'age');

        // map to jsx
        ages = ages.map((item, index) => {
         return <option key={index} value={item}>{item}</option>
       });


        // get unique cities
        let cities = getUnique(persons, 'city');


        // map to jsx
        cities = cities.map((item, index) => {
          return <option value={item} key={index} >{item}</option>
      });

     

      return(
        <div className="persons-filter">
          <div className="search-form">
            <form className='filter-form'>
                {/* name */}
                <div>
                  <input
                    name='username'
                    id='username'
                    value={username}
                    placeholder="الأسم"
                    className='form-control'
                    onChange={handleChange}
                  />
                </div>
                {/* end name */}
                {/* ages */}
                <div>
                  <select
                    name='age'
                    id='age'
                    value={age}
                    className='form-control'
                    onChange={handleChange}
                  >
                    <option value="">العمر</option>
                    {ages}
                  </select>
                </div>
                {/* end ages */}
                {/* select Country */}
                <div>
                  <select
                    name='country'
                    id='country'
                    defaultValue={country}
                    className='form-control'
                    onChange={handleChange}
                  >
                    <option value="">الدولة</option>
                    {countries}
                  </select>
                </div>
                {/* end select country */}
                {/* select city */}
                <div>
                  <select
                    name='city'
                    id='city'
                    value={city}
                    className='form-control'
                    onChange={handleChange}
                  >
                    <option value="">المدينة</option>
                    {cities}
                  </select>
                </div>
                {/* end select city */}
            </form>
          </div>
          <a href="/#">بحث</a>
        </div>
      );
      }}
    </PersonConsumer>
  );
}

export default PersonsFilter;