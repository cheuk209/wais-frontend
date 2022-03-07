import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import analyse from '../../assets/analyse.png'

const SubtestForm = ({ onSubmit, scores, scoreHandler, ageHandler, age }) => {

  return (
    <div>
      <Card>

      <CardContent>
        <div className='card'>
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

      <CardMedia
        component="img"
        image={analyse}
        alt="Paella dish"
      />

      </div>
      </CardContent>
      </Card>
      
    </div>
  )
}

export default SubtestForm