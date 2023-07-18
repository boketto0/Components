import './ButtonList2.css'
import { ButtonType, ButtonSize, Button } from '../button/Button'
import { useState } from 'react'

export const ButtonList2 = () => {

    const type =  ButtonType.SECONDARY

    const [size, setSize] = useState(ButtonSize.SMALL);

    const [isLoading, ] = useState(false)

    const pressed = ''
    const disabled = ''
    const selected = ''

    const sizes = [
        {type: ButtonSize.SMALL, text: "Small"},
        {type: ButtonSize.MEDIUM, text: "Medium"},
        {type: ButtonSize.LARGE, text: "Large"}
    ]

    return (
        <div>
            <div className='size-divider'>
                {
                    sizes.map(el => <div onClick={() => setSize(el.type)}>{el.text}</div>)
                }
            </div>
            <div className='container'>
                <div className='button-container'>
                    <Button pressed size={size} text={'Button'} type={type}/>
                    <Button pressed size={size} icon={"+"} text={'Button'} type={type}/>
                    <Button disabled size={size} text={'Button'} type={type}/>
                    <Button disabled size={size} icon={"+"} text={'Button'} type={type}/>
                    <Button selected size={size} text={'Button'} type={type}/>
                    <Button selected size={size} icon={'+'} text={'Button'} type={type}/>
                    <Button selected size={size} text={'Button'} type={type}/>
                    <Button selected size={size} isLoading={true} text={'Loading'} type={type}/>
                </div>
            </div>
        </div>
    )
}