import React from 'react';
import Cities from './cities';



const Citymap =[

        {
          cardimg:require ('./warsaw.png'),
          button1:'Warsaw'
        },
        {
            cardimg:require ('./barcelona.png'),
          button1:'Barcelona'
          
        },
       
         {cardimg:require ('./istanbul.png'),
        button1:'Istanbul'
         },
    
         {cardimg:require ('./rome.png'),
          button1:'Rome'
        },
        
        {
        cardimg:require ('./mexico-city.png'),
          button1:'Mexico-city'
        },
        
        {
        cardimg:require ('./curitiba.png'),
     
        button1:'Curitiba'
        }]



        const CitiesMap = () => {
            return (<div className='citymap'>
              {Citymap.map((el,index) => <Cities key={index} cities={el}/>)}
       </div> );
        }
     
 


export default  CitiesMap ;