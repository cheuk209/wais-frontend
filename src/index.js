import React from "react"
import ReactDOM from 'react-dom'
import App from './App'
import Wais from './wais-conversion/Wais'
import {Footer } from './containers'
import './index.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/wais' element={<Wais />}/>
        </Routes>
    </Router>,
    document.getElementById('root')

)