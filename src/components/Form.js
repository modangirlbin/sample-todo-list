import React from 'react';

let styles = {
    form:{
        position: 'relative',
        margin: '0',
        width: '100%',
        padding: '16px 16px 16px 60px',
        background: 'rgba(0, 0, 0, 0.003)',
        boxShadow: 'inset 0 -2px 1px rgba(0,0,0,0.03)',
        fontSize: '24px',
        lineHeight: '1.4em',
        border: '0',
        color: 'inherit',
        boxSizing: 'border-box',
        // -webkit-font-smoothing: 'antialiased'
    }
  }

const Form = () => {
  return (
    <input className="Form" style={styles.form} placeholder="What needs to be done?" value="" />
  );
};

export default Form;