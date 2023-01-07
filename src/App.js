import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

//import logo from './logo.svg';
import './App.css';


// const webData = {
//     "name": "nafis",
//     "link": "https://nafisbd.com"
//   }

  function RenderingArrayOfObjects () {
    const data = [
        {
            "name": "ICC FTP Server",
            "link": "http://10.16.100.244/"
        },
        {
            "name": "Circle FTP Server",
            "link": "http://circleftp.net"
        },
        {
            "name": "Movie Server",
            "link": "http://103.152.18.18/"
        },
        {
            "name": "Mojaloss FTP Server",
            "link": "http://mojaloss.net/"
        },
        {
            "name": "Discovery FTP",
            "link": "http://discoveryftp.net/"
        },
        {
            "name": "Discovery Movie Server",
            "link": "http://movies.discoveryftp.net/"
        },
        {
            "name": "Dhaka FTP",
            "link": "http://dhakaftp.com/"
        },
        {
            "name": "Dhaka Movie",
            "link": "http://dhakamovie.com/"
        },
        {
            "name": "Nagordola FTP",
            "link": "http://www.nagordola.com.bd/"
        },
        {
            "name": "Nagordola FTP Live",
            "link": "http://nagordola.live/"
        },
        {
            "name": "FTPBD net",
            "link": "http://ftpbd.net/"
        },
        {
            "name": "FTP BD",
            "link": "http://server2.ftpbd.net/"
        },
        {
            "name": "Link3 FTP",
            "link": "http://www.cinehub24.com/"
        },
        {
            "name": "Amber IT FTP Server",
            "link": "http://binodonmela.net/"
        },
        {
            "name": "Movie Haat",
            "link": "http://moviehaat.net/"
        },
        {
            "name": "Movie Mela",
            "link": "http://www.moviemela.live/"
        },
        {
            "name": "BongoBD",
            "link": "https://bongobd.com/"
        },
        {
            "name": "Cinema Bazar",
            "link": "http://103.81.104.98/"
        },
        {
            "name": "Alpha Media",
            "link": "http://ftp.alphamediazone.com/"
        },
        {
            "name": "Bangla Movie",
            "link": "https://www.bongobd.com/bn/movies"
        },
        {
            "name": "Data Server",
            "link": "http://103.85.156.222/data/"
        },
        {
            "name": "VDO Mela",
            "link": "http://vdomela.com/"
        },
        {
            "name": "Game Server",
            "link": "http://mangogamers.com/"
        },
        {
            "name": "City Cloud",
            "link": "http://103.102.253.250/"
        },
        {
            "name": "Dekhvhai FTP",
            "link": "http://dekhvhai.com/"
        },
        {
            "name": "English Movie",
            "link": "http://45.120.114.222/HDD5/English%20Movies/"
        },
        {
            "name": "Ebox FTP",
            "link": "http://fileserver.ebox.live/"
        },
        {
            "name": "Ebox 2 FTP",
            "link": "http://fileserver.ebox.live/movies"
        },
        {
            "name": "Roar Zone",
            "link": "https://roarzone.info/"
        },
        {
            "name": "Roar Media",
            "link": "http://cdn.roarmediazone.com/"
        },
        {
            "name": "Net Code",
            "link": "http://netcode.live/netcodemedia/"
        },
        {
            "name": "Panda Club",
            "link": "http://showtimebd.com/"
        },
        {
            "name": "Kalponik FTP",
            "link": "http://www.kalponik.net.bd/"
        },
        {
            "name": "BD Lan",
            "link": "https://bdlan.net/"
        },
        {
            "name": "Explore Online",
            "link": "http://103.222.20.150/"
        },
        {
            "name": "Khulna Plex",
            "link": "http://khulnaplex.net/"
        },
        {
            "name": "S-flix",
            "link": "http://cdn.s-flix.com/"
        },
        {
            "name": "Alif Laila FTP",
            "link": "http://aliflailabd.com/"
        },
        {
            "name": "Alif Laila 2",
            "link": "http://ftp1.aliflailabd.com/"
        },
        {
            "name": "NBD FTP",
            "link": "https://nbd-media.tk/"
        },
        {
            "name": "BusNet BD",
            "link": "http://movie.basnetbd.com/"
        },
        {
            "name": "Bee flix FTP",
            "link": "https://beeflix.biz/"
        },
        {
            "name": "Boss BD",
            "link": "http://www.bossbd.net/"
        },
        {
            "name": "Fun Time BD FTP",
            "link": "http://funtimebd.com/"
        },
        {
            "name": "DFN DB",
            "link": "http://media.dfnbd.net/"
        },
        {
            "name": "Spark NET BD",
            "link": "https://sparknetbd.com/"
        },
        {
            "name": "CrazyHD",
            "link": "https://www.crazyhd.com/"
        },
        {
            "name": "Torrent BD",
            "link": "https://www.torrentbd.com/"
        },
        {
            "name": "Sam Online FTP",
            "link": "https://samftp.com/"
        },
        {
            "name": "Net at Home BD",
            "link": "https://www.netathomebd.com/"
        },
        {
            "name": "JDIX",
            "link": "http://162.12.215.254/"
        },
        {
            "name": "CrazyCTG FTP",
            "link": "http://crazyctg.com/"
        },
        {
            "name": "MybdPlex",
            "link": "http://mybdplex.com/"
        },
        {
            "name": "Elaach FTP BD",
            "link": "http://elaach.com/"
        },
        {
            "name": "Kurigram",
            "link": "http://103.119.100.54/"
        },
        {
            "name": "Ant House BD",
            "link": "http://www.anthousebd.net/"
        },
        {
            "name": "Net Matrix BD",
            "link": "http://media.netmatrixbd.com/"
        },
        {
            "name": "Quick Online",
            "link": "http://quickonlineftp.com/"
        },
        {
            "name": "Kiss Anime Server",
            "link": "https://kissanime.ru/"
        },
        {
            "name": "Movie Box BD",
            "link": "http://movieboxbd.com/"
        },
        {
            "name": "CTG Hall",
            "link": "http://www.ctghall.com/"
        },
        {
            "name": "IT Base BD",
            "link": "http://103.70.140.14/"
        },
        {
            "name": "Rangdhanu Server",
            "link": "https://www.rangdhanu.live/"
        },
        {
            "name": "Ihub FTP",
            "link": "http://ihub.live/"
        },
        {
            "name": "EVO Net BD",
            "link": "http://www.evonetbd.com/"
        },
        {
            "name": "Small Screen FTP",
            "link": "http://103.3.226.208/"
        },
        {
            "name": "Free Download FTP",
            "link": "http://www.freedownloadbd.com/"
        },
        {
            "name": "Mazeda Network FTP",
            "link": "https://www.mazedanetworks.net/"
        },
        {
            "name": "Mojar FTP",
            "link": "http://www.mojarftp.com/"
        },
        {
            "name": "Infolink FTP",
            "link": "https://infolinkbd.com/"
        },
        {
            "name": "Asian NET FTP",
            "link": "http://asianftp.com/"
        },
        {
            "name": "DOT Internet FTP",
            "link": "http://www.dotinternetbd.com/"
        },
    ]
    const listItems = data.map(
        (element) => {
            return (
              <div className=''>
                <div className='website hover:drop-shadow-[0_10px_10px_rgba(67,115,198,0.8)]  mb-5 mt-5'>
                  <div className='title '>
                    <div className='head text-2xl font-bold'>
                      {element.name}
                    </div>
                    <div className='button  pl-10 pr-10 bg-emerald-700 min-h-full text-lg'>
                        <div className='butt'>
                            <a target="_blank" href={element.link}  >
                            {element.name}
                            </a>
                        </div>

                    </div>
                  </div>
                  <div>
                  <iframe src={element.link} width="100%" height="420px" title={element.name}></iframe>
                  </div>
                </div>
                </div>
            )
        }
    )
    return (
        <div className='grid-container rounded-[12px] mt-100'>
            {listItems}
        </div>
    )
    }





function App() {
  return (
    <div className='App'>
        <div>
        <Parallax pages={1} style={{ top: '0', left: '0' }} class="animation">
            <ParallaxLayer offset={0} speed={0.25}>
                <div class="animation_layer parallax" id="artback"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div class="animation_layer parallax" id="mountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.1}>
                <div class="animation_layer parallax" id="logoland"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
                <div class="animation_layer parallax" id="jungle1"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
                <div class="animation_layer parallax" id="jungle2"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <div class="animation_layer parallax" id="jungle3"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.45}>
                <div class="animation_layer parallax" id="jungle4"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.40}>
                <div class="animation_layer parallax" id="manonmountain"></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.35}>
                <div class="animation_layer parallax" id="jungle5"></div>
            </ParallaxLayer>
            
        </Parallax>
        </div>

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
          <div className=''>
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
