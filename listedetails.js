import React from 'react';
import Details from './details';


const details =[

{
  one:require('./flag.png'),
Title:'Leader in 10 countries',
Text:'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
},{
    one:require('./visits.png'),  
    Title:'1.5 million appointments',
    Text:'booked last month'
    
  },{
    one:require('./patient.png'),
    Title:'30 million unique patients',
    Text:'visit us every month'
  },
{
    one:require('./doctoRs.png'),
    Title:'2 million active doctors',
    Text:'trust in our solutions'
  
}]
  
  const Listedetails = () => {
    return (
       <div className='list-card row' >
        
      <div className=' col-lg-6 '>
      <h1> The world's 
         biggest healthcare platform</h1> 
         
      <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>


    
        </div>


<div className='col-lg-6 d-flex flex-wrap'>
         

        
        {details.map((el,index) => <Details key={index} Det={el}/>)
        
    }
    </div>

        </div>
        
        );
  }
  
 
export default Listedetails;