import React from 'react';

import logo from './logo.svg';
import './App.css';


// const webData = {
//     "name": "nafis",
//     "link": "https://nafisbd.com"
//   }

  function RenderingArrayOfObjects () {
    const data = [
        {
            "name": "nafis",
            "link": "https://nafisbd.com"
        },
        {
            "name": "Gujarat",
            "link": "https://nafisbd.com"
        },
        {
            "name": "Karnataka",
            "link": "https://nafisbd.com"
        },
        {
            "name": "ayon",
            "link": "https://nafisbd.com"
        },
        {
            "name": "mahmud",
            "link": "https://nafisbd.com"
        }
    ]
    const listItems = data.map(
        (element) => {
            return (
                <div className='hello'>
                  <div>
                    {element.name}
                  </div>
                  <div>
                  <iframe src={element.link} width="420px" height="600px"></iframe>
                  </div>
                </div>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
    }





function App() {
  return (
    <div className='App'>
      <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
             Learn React
           </a>
           </header>
          <RenderingArrayOfObjects />
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
