import './ButtonList3.css'
import { ButtonType, Button } from '../button/Button'
import { useState } from 'react'

export const ButtonList3 = () => {

    const [isLoading, ] = useState(false)

    const text ='Button'
    const icon = '+'
    const type =  ButtonType.LINK
    const size = ''
    const pressed = ''
    const disabled = ''
    const selected = ''

    return(
        <div>
            <div className='container'>
                <div className='button-container'>
                    <Button colored={'pressed'} size={size} text={text} type={type}/>
                    <Button colored={'pressed'} size={size} icon={icon} text={text} type={type}/>
                    <Button colored={'disabled'} size={size} text={text} type={type}/>
                    <Button colored={'disabled'} size={size} icon={icon} text={text} type={type}/>
                    <Button colored={'selected'} size={size} text={text} type={type}/>
                    <Button colored={'selected'} size={size} icon={icon} text={text} type={type}/>
                    <Button colored={'selected'} size={size} text={text} type={type}/>
                    <Button colored={'selected'} size={size} isLoading={true} text={text} type={type}/>
                </div>
            </div>
        </div>
    )
}