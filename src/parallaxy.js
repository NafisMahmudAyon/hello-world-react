import React from 'react'
import './App.css'

import Hill1 from './hill1.png'
import Hill2 from './hill2.png'
import Hill3 from './hill3.png'
import Hill4 from './hill4.png'
import Hill5 from './hill5.png'
import Tree from './tree.png'
import Leaf from './leaf.png'
import Plant from './plant.png'

    
export const parallaxy = () => {

    let text = document.getElementById('text');
    let leaf = document.getElementById('leaf');
    let hill1 = document.getElementById('hill1');
    let hill4 = document.getElementById('hill4');
    let hill5 = document.getElementById('hill5');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text.style.marginTop = value * 999 + 'px';
        leaf.style.top = value * -1.5 + 'px';
        leaf.style.left = value * 1.5 + 'px';
        hill5.style.left = value * 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
        hill1.style.top = value * 0.5 + 'px';
    });

  return (
    <div class="parallax">
        <img src={Hill1} id="hill1" alt='' />
        <img src={Hill2} id="hill2" alt='' />
        <img src={Hill3} id="hill3" alt='' />
        <img src={Hill4} id="hill4" alt='' />
        <img src={Hill5} id="hill5" alt='' />
        <img src={Tree} id="tree" alt='' />
        <h2 id="text" className='drop-shadow-[0_10px_10px_rgba(0,51,41,0.8)] hover:drop-shadow-[0_10px_10px_rgba33,102,89,0.8)]' >FTP Server List</h2>
        <img src={Leaf} id="leaf" alt='' />
        <img src={Plant} id="plant" alt='' />
    {/* <script src='./script.js' /> */}
    </div>
  );
}
export default parallaxy;