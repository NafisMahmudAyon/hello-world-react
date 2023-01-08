import React from 'react';
import RenderingArrayOfObjects from './FTPList'
import Parallaxy from './parallaxy';

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import Parallaxing from './parallaxing';

//import logo from './logo.svg';
import './App.css';

// import { Parallax } from '@react-spring/parallax';



function App() {
  return (
    <div className='App'>
        
        

        <div className='para'>
            <Parallaxy />
            
        </div>
        {/* <div className='space'></div> */}
          <div className='doc'>
              <RenderingArrayOfObjects />
          </div>
    </div>
    
  )
  
  }
  
//workingstage>>>>>>>>>>>>>>>>>>>>>>>>>>>
//   const siteLink =["https://nafisbd.com", "https://nafisbd.com", "https://nafisbd.com"]
//   const displayLink = siteLink.map((items, index) =>
//   <div key = {index}>
//     {items}
//   </div>
//   )
// const siteNames = ["Nafis", "Ayon", "Mahmud"]
//   const displayName = siteNames.map((item, index) => 
//   <div key={index}>
//     <div className='style'>{item}
//     {/* <iframe src={displayLink} width="420px" height="600px"></iframe> */}
//     </div>
//   </div>)

  


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

        

        
//       </header>
//       <div className='hello'>
          
            
//          {/* {displayName} */}
//          <h1>{webData.name}</h1>
//          <iframe src={webData.link} width="420px" height="600px"></iframe>
         

            
          
//         </div>
//     </div>
//   );
//working stage...................................









export default App;
