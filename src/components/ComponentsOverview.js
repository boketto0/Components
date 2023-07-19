import './ComponentsOverview.css';
import { Card, CardType } from './cards/Card'; // Обновленный импорт
import { CardWrapper } from './cards/CardWrapper';
import { Button, ButtonSize, ButtonType } from './button/Button';
import { Checkbox } from './checkbox';
import { CheckboxStory2 } from './checkboxStories';
import { SwitchStory2 } from './switchStories';
import { SwitchStory4 } from './switchStories';

export const ComponenetsOverview = () => {

    function hanldePictureClick() {

    }

  const componentsStory = [
    {
      title: 'Button',
      component: 
      <div className='card-component'>
        <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} text={'Button'}/>
        <Button size={ButtonSize.LARGE} type={ButtonType.SECONDARY} text={'Button'}/>
        <Button type={ButtonType.TEXT} text={'Button'}/>
      </div>
    },
    {
      title: 'Switch',
      component: 
        <div className='card-component'>
            <SwitchStory2/>
            <SwitchStory4/>
        </div>
    },
    {
      title: 'Checkbox',
      component: 
      <div className='card-component'>
          <Checkbox text={'Check all'}/>
          <CheckboxStory2/>
      </div>
    }
  ];

  return (
    <div className='components-wrapper'>
        <div className='components-list'>
            <div className="par-1">Components Overview</div>
            <div className="par-2">Components</div>
        </div>
        <CardWrapper>
          {componentsStory.map((el) => {
            return (
              <div>
                <Card cardType={CardType.SECOND} title={el.title} component={el.component} />
              </div>
            );
          })}
        </CardWrapper>
    </div>
  );
}

// Router>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/button">Button</a>
//           </li>
//           <li>
//             <a href="/checkbox">Checkbox</a>
//           </li>
//           <li>
//             <a href="/switch">Switch</a>
//           </li>
//         </ul>
//         <Routes className="component-wrapper">
//           <Route className='wrapper' path="/" element={<ComponenetsOverview/>} />
//           <Route className='wrapper' path="/checkbox" element={<CheckboxStory />} />
//           <Route path="/switch" element={<SwitchStory/>}/>
//           <Route path="/button" element={<ButtonStory/>}/>
//         </Routes>
//       </Router>