import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

import './Prompt.scss';
import { options } from '../helpers/dropdownOptions'

const Prompt = () => {
  const [selected, setSelected] = useState(options.fitness[0])


  return(
    <article className="Prompt">
      <article className="prompt-card">
        <h2>Prompt Question</h2>
        {/* <Dropdown 
          options={options.diet}
          label={options.fitness}
          selected={selected}
          onSelectedChange={setSelected}
        /> */}
        <button>Submit</button>
      </article>
    </article>
  )
}

export default Prompt