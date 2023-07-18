import './ButtonList4.css'
import { ButtonType, Button } from '../button/Button'

export const ButtonList4 = () => {

    const text ='Button'
    const icon = '+'
    const type =  ButtonType.TEXT
    const size = ''
    const pressed = ''
    const disabled = ''
    const selected = ''

    return(
        <div>
            <div className='container'>
                <div className='button-container'>
                    <Button pressed size={size} text={text} type={type}/>
                    <Button pressed size={size} icon={icon} text={text} type={type}/>
                    <Button disabled size={size} text={text} type={type}/>
                    <Button disabled size={size} icon={icon} text={text} type={type}/>
                    <Button selected size={size} text={text} type={type}/>
                    <Button selected size={size} icon={icon} text={text} type={type}/>
                    <Button selected size={size} text={text} type={type}/>
                    <Button selected size={size} isLoading={true} text={text} type={type}/>
                </div>
            </div>
        </div>
    )
}