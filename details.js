import React from 'react';
import img from './flag.png';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Details = ({Det}) => {
  return (
    <div className="doca col-6">
      <Card>
        
        <CardBody>
        <img src={Det.one} />
          <CardTitle>{Det.Title}</CardTitle>
          
          <CardText >{Det.Text}</CardText>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default Details;