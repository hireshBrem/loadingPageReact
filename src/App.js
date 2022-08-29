
import './App.css';
import {useState} from 'react'; 
import { Dots, ProgressBar, Waves, Spinner, TrinitySpinner, MinimalSpinner } from 'loading-animations-react';

function App() {
  const [shouldRender, changeState] = useState(false)

  const el = setTimeout(()=>{
    changeState(true)
  }, 5000)

  if(shouldRender===true) {
    return(<h1 className='text-center text-[40px] underline mt-20'>This is the rendered page!</h1>)
  } else{
    return(
    <div className='absolute w-[100%] h-[100%] bg-blue-200'>
      <Dots text="" className="absolute w-[100px] left-[45%] right-[50%] top-[40%]" dotColors={[ 'red', 'white', 'blue', '#123abc', 'rgb(50,50,50)','hsla(235, 100%, 50%, .5)' ]} />
    </div>)
  }

  return (
    <></> 
  );
}

export default App;
