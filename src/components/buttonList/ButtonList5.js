import './ButtonList5.css'
import { Button, ButtonType, ButtonSize } from '../button'
import { IconButton, IconButtonType, IconButtonSize } from '../button'
import Icon1 from '../../../src/images/Vector.svg'
import { useState } from 'react'

export const ButtonList5 = () => {

    const [isLoading, ] = useState(false)

    const text ='Button'
    const icon = ''
    const type =  ''
    const round = ''
    const size = ''
    const pressed = ''
    const disabled = ''
    const selected = ''

    return(
        <div>
            <div className='container'>
                <div className='button-container'>
                    <Button round={true} colored={'pressed'} size={ButtonSize.LARGE} text={text} type={ButtonType.SECONDARY}/>
                    <IconButton type={IconButtonType.PRIMARY} icon={<img src={Icon1}></img>} size={IconButtonSize.MEDIUM} colored={"pressed"}/>
                    <IconButton colored={'selected'} icon_round size={IconButtonSize.SMALL} icon={'!'} type={IconButtonType.SECONDARY}/>
                    <IconButton colored={'pressed'} icon_round size={IconButtonSize.MEDIUM} isLoading={true} type={IconButtonType.PRIMARY}/>
                    <IconButton colored={'disabled'} size={IconButtonSize.LARGE} icon={"+"} type={IconButtonType.SECONDARY}/>
                    <Button colored={'disabled'} size={ButtonSize.MEDIUM} isLoading={true} text={'Download'} type={ButtonType.PRIMARY}/>
                    <Button colored={'selected'} text={text} type={ButtonType.TEXT}/>
                    <Button colored={'disabled'} size={ButtonSize.SMALL} text={text} type={ButtonType.PRIMARY}/>
                </div>
            </div>
        </div>
    )
}