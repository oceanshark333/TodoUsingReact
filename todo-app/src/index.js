import React from 'react'
import { render } from 'react-dom'

import Todos from './components/Todos'
import tasks from '../data/tasks'

window.React = React

render(
   <Todos  data={tasks} />,
    document.getElementById("todo-container")
)