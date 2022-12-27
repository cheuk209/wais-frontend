import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './wais.css';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const baseURL = "https://wais-deployment.herokuapp.com/";
const testURL = "http://127.0.0.1:5000/";

function Wais() {
    const [age, setAge] = useState(16);
    const [response, setResponse] = useState(null);
    const [status, setStatus] = useState('idle');
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
    });

    const handleAgeChange = (event) => {
        setAge((event.target.value).valueOf());
    };

    const handleScoreChange = (identifier) => (event) => {
        const newScores = {...subtestScores};
        newScores[identifier]['value'] = event.target.value;
        setSubtestScores (newScores);
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('submitting');
        const data = { age, ...subtestScores };
        axios.post(testURL, data).then((res) => {
          setResponse(res.data);
          setStatus('success');
        }).catch(() => {
          setStatus('error');
        });
    };

    const handleReset = () => {
        setStatus('idle');
        setResponse(null);
        // Reset other form state variables as needed
    };

    const animationProps = useSpring({
        opacity: status === 'idle' ? 1 : 0,
        transform: status === 'idle' ? 'translateY(0)' : 'translateY(-50%)',
    });
    
    return (
    <div>
        <Navbar />
        <form onSubmit={handleSubmit}>
            <h1>Please enter your attributes</h1>
            <label>
            Age:
            <input type="number" value={age} onChange={handleAgeChange} />
            </label>
            {Object.keys(subtestScores).map((score) => (
            <div key={score}>
                <label>
                {subtestScores[score]['name']}:
                <input
                    type="number"
                    value={subtestScores[score]['value']}
                    onChange={handleScoreChange(score)}
                />
                </label>
            </div>
            ))}
            <button type="submit">Submit</button>
            {status === 'submitting' && (
                <p>Submitting...</p>
            )}
            {status === 'success' && (
                <div>
                    <animated.div style={animationProps}>
                    <p>Success!</p>
                    <p>Response: {response}</p>
                    </animated.div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
            {status === 'error' && (
                <p>An error occurred. Please try again.</p>
            )}
            {response && <h2>Thanks for using this service, your FSIQ score is: {response}</h2>}
        </form>
    </div>
    );
}

export default Wais;