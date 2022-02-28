import React from 'react'
import { Feature } from '../../components'
import './quantise.css'


function Quantise() {
  return (
    <div className='quantise section__padding'>
      <div className='quantise-feature'>
        <Feature title="What is Quantise?" text="Call me Ishmael. This resonant opening of Moby-Dick, the greatest novel in American literature, announces the narrator, Herman Melville, as he with a measure of slyness thought of himself. In the Scriptures Ishmael, a wild man sired by the overwhelming patriarch Abraham, was nevertheless the bastard son of a serving girl Hagar."/>
      </div>
      <div className='quantise-heading'>
        <h2 className='gradient__text'>Streamline your workflow.</h2>
        <p>Explore our toolkit</p>
      </div>
      <div className='quantise-container'>
      <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  )
}

export default Quantise