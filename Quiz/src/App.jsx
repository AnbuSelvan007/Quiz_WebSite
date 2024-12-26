import { useEffect, useState } from 'react'
import './App.css'

const obj = [
  {
    question: 'React is a?',
    options: ['Library', 'Language', 'Database', 'Framework'],
    ans: 'Library'
  },
  {
    question: 'Who made React?',
    options: ['Google', 'Meta', 'Microsoft', 'Amazon'],
    ans: 'Meta'
  },
  {
    question: 'JSX is?',
    options: ['Syntax', 'Database', 'Language', 'Framework'],
    ans: 'Syntax'
  },
  {
    question: 'Hooks manage?',
    options: ['State', 'Style', 'Routing', 'Fetch'],
    ans: 'State'
  },
  {
    question: 'State hook?',
    options: ['useState', 'useEffect', 'useContext', 'useRef'],
    ans: 'useState'
  },
  {
    question: 'Virtual DOM is?',
    options: ['Memory', 'Database', 'Engine', 'Framework'],
    ans: 'Memory'
  },
  {
    question: 'Class state method?',
    options: ['setState', 'updateState', 'changeState', 'modifyState'],
    ans: 'setState'
  },
  {
    question: 'Router for?',
    options: ['Routing', 'API', 'Animation', 'State'],
    ans: 'Routing'
  },
  {
    question: '"Key" prop is for?',
    options: ['Identify', 'Update', 'Bind', 'Route'],
    ans: 'Identify'
  },
  {
    question: 'HOC is?',
    options: ['Function', 'API', 'Hook', 'State'],
    ans: 'Function'
  }
];


function App() {
  const [timer, setTimer] = useState(10);
  const [index,setIndex]=useState(0);
  const [score,setScore]=useState(0);
  const [showScore,setShowScore]=useState(false);
  useEffect(()=>{
    let Interval;
    if(!showScore && timer>0)
    {
      Interval=setInterval(()=>{
        setTimer(prevTimer=>prevTimer-1);
      },1000);
      console.log(index);
    }
    else if(index<obj.length-1){
      setIndex(index+1); 
      setTimer(10);
    }
    else{
      setShowScore(true);
      clearInterval(Interval);
    }
   
      return ()=>{
        clearInterval(Interval);
      }
  
},[timer])
const answerHandler=(e)=>{
    if(e.target.value===obj[index].ans)
    {
      setScore(score+1);
      
    }
    setIndex(index+1);
    setTimer(10);
    if(index==obj.length-1)
    {
      setShowScore(true);
    }

}
const resetHandler=()=>{
  setScore(0);
  setIndex(0);
  setTimer(11);
  setTimer(prev=>prev-1);
  setShowScore(false);
}

  return (
    <>
    <center>
    <h1 style={{margin:'0px'}}>SIMPLE QUIZ WEBSITE</h1>
    </center>
     <div className="container">
    
     {showScore && <div className="scoreboard">
              <h1>Your score</h1>
              <div className='circle'>
              <p style={{padding:'20px',backgroundColor:'blue',borderRadius:'50px',width:'fit-content'}}>{score}/{obj.length}</p>
              </div>
              <button className='restart' style={{backgroundColor:'tomato', borderRadius:'10px'}} onClick={resetHandler}>Restart</button>
            </div>
            }
     {!showScore &&  <div className="quiz-container">
            <div className="quiz-head">
              <h1>Question {index+1}</h1>
            </div>
            <div className="quiz-body">
              <p>{obj[index].question}</p>
            </div>
            <div className='options'>
             {
              obj[index].options.map((option)=>
                <button onClick={answerHandler} value={option}>{option}</button>
              )
             }
               
            </div>
            <div className="timer">
              <h4>Time:<span>{timer}s</span></h4>
            </div>
            
        </div>
            }
          
     </div>
       
    </>
  )
}

export default App
