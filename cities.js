import React from 'react';
import { Card, Button, CardImg } from 'reactstrap';

const Cities = ({cities}) => {
  return (<Card className="cords">
    
        
            <CardImg  src= {cities.cardimg} alt="Card image cap"/>
          <div className='button1'>
          <Button>{cities.button1}</Button>
  
          </div>
      
      </Card>
     
  );
};


export default Cities;