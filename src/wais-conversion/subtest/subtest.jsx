import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import analyse from '../../assets/analyse.png'
import './subtest.css'
import { Box, Grommet } from 'grommet'
import TextField from '@mui/material/TextField';

const styles = {
  media: {
    width: 500,
  },
  card: {
    display: 'flex',
  }
}

const SubtestForm = ({ onSubmit, scores, scoreHandler, ageHandler, age }) => {

  return (
    <div className="card">
      <form onSubmit={onSubmit} className='subtestForm'>
        <div className='heading'>
          <h2>Please enter the patient's age and subtest scores</h2>
          
          {/*
          <p>Age</p> 
          <input value={age} onChange={ageHandler} /> 
          */}
        </div>
        <TextField
          label="Age"
          type="number"
          variant="standard"
          defaultValue='16'
          value={age}
          onChange={ageHandler}
          />
        { 
          Object.keys(scores).map((score, index) => {
            return (
              <>
                
                {/* 
                <p> { scores[score]['name'] }</p>
                <input value={ scores[score]['value'] } onChange={scoreHandler(score)} />
                */}
                <TextField 
                required
                label={scores[score]['name']}
                defaultValue='10'
                value={scores[score]['value']}
                onChange={scoreHandler(score)}
                variant="standard" 
                />
              </>
              
            )
          })
        }
      </form>

      <div className='form-image'>
        <img src={analyse} alt='woman analyse' max-width='300px'/>
      </div>
    </div>
  )
}

export default SubtestForm