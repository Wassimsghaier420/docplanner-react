import React from 'react';
import './App.css';
import Navbar1 from './nav';
import Text from './paragraph';
import Liste from './liste';
import Doc from './doc';
import Improve from './improve';
import CitiesMap  from './citymap'
import Listedetails from './listedetails';
import Footer from './footer'

   const tab=[{
  title: 'For doctors',
  text:'Save time managing visits and cut no-shows by half',
  img:require ('./fordoctors.png'),
  color:'#3d83df'
},
{
  title: 'For patients',
  text:'Find a doctor, book a visit and solve any health-related doubt',
  img:require('./forpatients.png'),
  color:'#00ccb1'
}
]

function App() {

  return (
    
<div className="App">
  <Navbar1/>
  <img class="lead__logo" src="https://www.docplanner.com/img/sygnet.png" srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"></img>
  <h1 className="title">
  
			Making the healthcare experience more human
    </h1>
        <Text/>

        <Liste x={tab} />
        
      <Doc/>
      <Listedetails/>
      <Improve/>
      <div className='fct'>
      <CitiesMap/>
     <Footer/>
     </div>

</div>

  );
}
export default App