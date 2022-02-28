// import React from "react";
// import Hello from "./Components/Hello";
// import { useState } from "react";
// import "./App.css";
// const App = (user) => {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <Hello name="Prajwal" power="learner" />
//       <Hello name="Rishab" power="Player" />
//       <Hello name="Aman" power="Developer" />
//       <p>this has been clcked {count} times</p>
//       <button onClick={setcount(count + 1)}>Here</button>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <p>I have clicked the button {count} times</p>
//       <button onClick={() => setcount(count + 1)}>Click here</button>
//       <Hello name = "Prajwal" Habit = "Somia"/>
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react';
// import Counter from "./Components/counter";

//  class App extends Component {
//   render() {
//     return (
//       <div>
//         <Counter />
//       </div>
//     )
//   }
// }

// export default App

//This Practice

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count,setcount] = useState(0);
//   return (
//     <div>
//       <p>This has been clicked {count} times</p>
//       <button onClick={() => setcount(count+1)}>Here</button>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <p>Enter Your Name</p>
//       <input placeholder='Prajwal Pandey'></input>
//       <p>Enetr your Mobile Numbe</p>
//       <input placeholder='1000'></input>
//       <button>Submit</button>
//     </div>
//   )
// }

// export default App

import React from 'react'
import TakeData from './Components/TakeData'

const App = () => {
  return (
    <div>
      <TakeData/>
    </div>
  )
}

export default App