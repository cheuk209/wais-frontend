import { useState, useEffect } from 'react'
import './subtestCalculation.css'
import axios from 'axios'


const SubsetForm = ({ onSubmit, scores, scoreHandler, ageHandler, age }) => {

  return (
    <form onSubmit={onSubmit} className='subtestForm'>
      <div>
        <h2>Please enter the patient's age and subtest scores</h2>
        <p>Age</p>
        <input value={age} onChange={ageHandler} />
      </div>
      
      { 
        Object.keys(scores).map((score, index) => {
          return (
            <>
              <p> { scores[score]['name'] }</p>
              <input value={ scores[score]['value'] } onChange={scoreHandler(score)} />
            </>
            
          )
        })
      }
      <div>
          <button type="submit">Submit</button>
      </div>
    </form>
  )
}


const SubtestCalculation = () => {
  const baseURL = "https://wais-deployment.herokuapp.com/";
  const [age, setAge] = useState(10)
  const [post, setPost] = useState(null)
  const [subtestScores, setSubtestScores] = useState({
    BD : { name: 'Block Design', abbrev: 'BD', value: 10 },
    SI : { name: 'Similarities', abbrev: 'SI', value: 10 },
    DS : { name: 'Digit Span', abbrev: 'DS', value: 10 },
    MR : { name: 'Matrix Reasoning', abbrev: 'MR', value: 10 },
    VC : { name: 'Vocabulary', abbrev: 'VC', value: 10 },
    AR : { name: 'Arithmetic', abbrev: 'AR', value: 10 },
    SS : { name: 'Symbol Search', abbrev: 'SS', value: 10 },
    VP : { name: 'Visual Puzzles', abbrev: 'VP', value: 10 },
    IN : { name: 'Information', abbrev: 'IN', value: 10 },
    CD : { name: 'Coding', abbrev: 'CD', value: 10 },
  })


  const handleScoreChange = (identifier) => (event) => {
    const newScores = {... subtestScores}
    console.log(identifier)
    newScores[identifier]['value'] = Number(event.target.value) 
    console.log(newScores)
    setSubtestScores(newScores)
  }
  
  const handleAgeChange = (event) => {
    const newAge = Number(event.target.value)
    setAge(newAge)

  }
  
  const sendData = (event) => {
    event.preventDefault()
    const dataObject = subtestScores
    
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  
  if (!post) return null  

  function createPost() {
    const requestData = {...subtestScores}
    requestData['age'] = age
    axios
      .post(baseURL, requestData)
      .then((response) => {
        setPost(response.data);
      });
  }


  return (
    <div className='subtestCalculation section__padding'>
        
      <SubsetForm onSubmit={sendData} scores={subtestScores} scoreHandler={handleScoreChange} age={age} ageHandler={handleAgeChange}/>
      <h1>Response Data from Backend</h1>
      <h2>Your FSIQ Score is: {JSON.stringify(post)}</h2>
      <button onClick={createPost}>Calculate your FSIQ scores</button>
    </div>
  )
}

export default SubtestCalculation;