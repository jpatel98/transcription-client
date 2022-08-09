import React from 'react';
import ReactLoading from 'react-loading';
 
const Spinner = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={30} width={25} className="mx-auto"/>
);
 
export default Spinner;