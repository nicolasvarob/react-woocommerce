import React from 'react';

import './MainButton.css';

const MainButton = (props) => {
  let style = "main";
  if(props.type == "secondary") style ="second"
    return (
        <button
          onClick={props.onClick}
          type="button"
          className={"btn " + style}
        >
          {props.text}
        </button>
    );
};

export default MainButton;