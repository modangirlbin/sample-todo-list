import React from 'react';
import '../css/common.css';

let styles = {
    header:{
        textAlign:'center'
    },
    title : {
        fontSize:'100px',
        fontWeight:'100',
        textAlign:'center',
        color:'rgba(175, 47, 47, 0.15)'
    }
  }

const Header = () => {
  return (
    <header className="header inner">
      <h1 style={styles.title}>todos</h1>
    </header>
  );
};

export default Header;