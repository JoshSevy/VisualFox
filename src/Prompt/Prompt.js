import React, { useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

import './Prompt.scss';
import { options } from '../helpers/dropdownOptions'

const Prompt = () => {
  const [selected, setSelected] = useState(options.fitness[0])
  const [promptNumber, setPromptNumber] = useState(0)

  return (
    <article className="Prompt">
      <article className="prompt-card">
        <h2>Prompt Question</h2>
        {promptNumber === 0 ? <h2>hello</h2> : null}
        {promptNumber === 1 ? <h2>hello</h2> : null}
        {promptNumber === 2 ? <h2>hello</h2> : null}
        {promptNumber === 3 ? <h2>hello</h2> : null}
        <button>Submit</button>
      </article>
    </article>
  );
}

export default Prompt