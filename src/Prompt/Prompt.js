import React from 'react';
import './Prompt.scss'

const Prompt = () => {


  return(
    <article className="Prompt">
      <article className="prompt-card">
        <h2>Prompt Question</h2>
        <input type="dropdown"/>
        <button>Submit</button>
      </article>
    </article>
  )
}

export default Prompt