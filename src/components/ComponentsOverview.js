import './ComponentsOverview.css';
import { Card, CardType } from './cards/Card'; // Обновленный импорт
import { CardWrapper } from './cards/CardWrapper';
import { Button, ButtonSize, ButtonType } from './button/Button';

export const ComponenetsOverview = () => {

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
      title: 'Switch'
    },
    {
      title: 'Checkbox'
    }
  ];

  return (
    <div className='components-wrapper'>
      <div className="par-1">Components Overview</div>
      <div className="par-2">Components</div>
      <div>
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
    </div>
  );
}