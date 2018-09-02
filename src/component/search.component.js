import React from 'react';
import { reduxForm, Field } from 'redux-form';

const SearchBar = ({ handleChange, handleSubmit, user }) => (
  <form onSubmit={handleSubmit}>
    <div className="example">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <img src={require('../img/Github_Logo.png')} alt='logo' />
      <Field
        component="input"
        name="search"
        onChange={handleChange}
        type="text"
        value={user}
      />
      <button type="submit"><i className="fa fa-search"></i></button>
    </div>
  </form>
)


export default reduxForm({ form: 'SearchBar' })(SearchBar)
