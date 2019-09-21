import React from "react";
import Button from 'react-bootstrap/Button';

const ThemedButton = (props) => {
  return (
    <>
      <style type="text/css">
            {`
        .btn-flat {
        background-color: purple;
        color: white;
        }

        .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
        }
        `}
      </style>

      <Button 
        variant="flat" 
        size="xxl" 
        onClick={props.onClick}>
        +
      </Button >
    </>
  );
};

export default ThemedButton;
