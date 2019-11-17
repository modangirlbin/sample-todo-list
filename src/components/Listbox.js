import React from 'react';
import Form from './Form';
import List from './List';
import '../css/common.css';


let styles = {
    listbox:{
        border:'1px solid #ddd'
    }
  }

const Listbox = () => {
  return (
    <div className="Listbox Inner" style={styles.listbox}>
      <Form />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Listbox;