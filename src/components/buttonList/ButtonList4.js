import './ButtonList4.css'
import { ButtonType, Button } from '../button/Button'
import { ButtonSize } from '../button'

export const ButtonList4 = () => {

    return(
        <div>
            <div className='container'>
                <div className='button-container'>
                    <Button colored={"pressed"} type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text={"Primary"}/>
                    <Button colored={"disabled"} type={ButtonType.PRIMARY} size={ButtonSize.MEDIUM} text={"Disabled"}/>
                    <Button colored={"pressed"} type={ButtonType.SECONDARY} size={ButtonSize.MEDIUM} text={"Default"}/>
                    <Button colored={"disabled"} type={ButtonType.SECONDARY} size={ButtonSize.MEDIUM} text={"Disabled"}/>
                    <Button colored={"pressed"} type={ButtonType.TEXT} text={"Text"}/>
                    <Button colored={"disabled"} type={ButtonType.TEXT} text={"Text disabled"}/>
                    <Button colored={"pressed"} type={ButtonType.LINK} text={"Link"}/>
                    <Button colored={"disabled"} type={ButtonType.LINK} text={"Link disabled"}/>
                </div>
            </div>
        </div>
    )
}