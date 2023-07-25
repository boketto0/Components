import './ButtonList5.css'
import { Button, ButtonType, ButtonSize } from '../..'
import { IconButton, IconButtonType, IconButtonSize } from '../..'
import Icon1 from '../../../../images/Vector.svg'
import { useState } from 'react'

export const ButtonList5 = () => {

    const [isLoading, ] = useState(false)

    return(
        <div>
            <div className='buttons-container'>
                <div className='buttonlist5-container'>
                    <Button colored={"disabled"} type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text={"Loading"} isLoading/>
                    <Button colored={"disabled"} type={ButtonType.PRIMARY} size={ButtonSize.SMALL} text={"Loading"} isLoading/>
                    <IconButton colored={"disabled"} type={IconButtonType.PRIMARY} size={IconButtonSize.MEDIUM} isLoading/>
                </div>
                <div className='buttonlist5-container'>
                    <Button colored={"pressed"} type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text={"Click me!"}/>
                    <Button colored={"pressed"} icon={<img src={Icon1}/>} type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text={"Click me!"}/>
                    <IconButton colored={"pressed"} icon={<img src={Icon1}/>} type={IconButtonType.PRIMARY} size={IconButtonSize.MEDIUM}/>
                </div>
            </div>
        </div>
    )
}