import React from 'react';
import Cart from './Card';
const Liste=({x})=>{
    return(<div className='liste'>
{x.map((element,index)=><Cart key={index} item={element} />)}
        </div> )
}
export default Liste
