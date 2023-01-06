// import React from 'react'
// import Person from './Person';

// export const data = () => {
//   return (
//     <div className='hello'>
//         <div className="style">
//         <Person name="Karim" age="26"/>
//         </div>
//         <div className="style">
//         <Person name="Rarim" age="30"/>
//         </div>
//         <div className="style">
//         <Person name="kalam" age="28"/>
//         </div>
//     </div>
//   )
// }

// export default data;



const names = ["nafis", "mahmud", "ayon"];
const Name = names.map((names) =>
    <li>{names}</li>
);
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ul>{Name}</ul>);