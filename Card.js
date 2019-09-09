import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { isTemplateElement } from '@babel/types';

const Cart= ({item}) => {
  return (<Row  >
      <Col sm="6">
      
        <Card body style={{backgroundColor:item.color}}>
          <CardTitle className="title1">{item.title}</CardTitle>
          <CardText>{item.text}</CardText>
          
          <img className="img2" src={item.img}/>
        </Card>
      </Col>
    </Row>
    
    
  );
};

export default Cart;