import React from 'react';

//import logo from './logo.svg';
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
              
                <div className='website'>
                  <div className='title text-3xl font-bold underline'>
                    <div className='head'>
                      {element.name}
                    </div>
                  </div>
                  <div>
                  <iframe src={element.link} width="100%" height="420px" title={element.name}></iframe>
                  </div>
                </div>
            )
        }
    )
    return (
        <div className=' drop-shadow-2xl grid-container'>
            {listItems}
        </div>
    )
    }





function App() {
  return (
    <div className='App'>
    {/* <div class="container mt-3">
        <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="pill" href="#home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#menu1">Menu 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="pill" href="#menu2">Menu 2</a>
            </li>   
        </ul>
    </div> */}
          <div className='mb-20'>
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
