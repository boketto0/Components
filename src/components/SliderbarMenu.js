import './SliderbarMenu.css'
import Home from '../Home'
import { CheckboxStory } from './checkbox/ChecboxStory'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

const SliderbarMenu = () => {

    return(
        <div className='sidebar'>
            <Router>
                <ul>
                    <li>
                        <a href="/home">Components Overview</a>
                    </li>
                    <li>
                        <a href="/button">Button</a>
                    </li>
                    <li>
                        <a href="/checkbox">Checkbox</a>
                    </li>
                    <li>
                        <a href="/switch">Switch</a>
                    </li>
                </ul>
                <Routes>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/checkbox" component={CheckboxStory} />
                </Routes>
            </Router>
        </div>
    )
}

export default SliderbarMenu;