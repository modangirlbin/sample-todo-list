import React from 'react';
import '../css/list.css';


let styles = {
    view: {
        // display:'none'
    }
  }

const List = () => {
  return (
    <div className="view" style={styles.view}>
        <input class="toggle" type="checkbox" />
        <label>dd</label>
        <button class="destroy"></button>
    </div>
  );
};

export default List;