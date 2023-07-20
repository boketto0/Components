import './ButtonList1.css';
import { ButtonType, ButtonSize, Button } from '../button/Button';
import { useState } from 'react';


export const ButtonList1 = () => {

    // const [size, setSize] = useState(ButtonSize.SMALL);

    // const sizes = [
    //     {type: ButtonSize.SMALL, text: "Small"},
    //     {type: ButtonSize.MEDIUM, text: "Medium"},
    //     {type: ButtonSize.LARGE, text: "Large"}
    // ]


    const buttonConfigs = [
        { colored: 'pressed', text: 'Primary Button', icon: '', isLoading: false, type: ButtonType.PRIMARY },
        { colored: 'pressed', text: 'Primary Button', icon: '', isLoading: false, type: ButtonType.SECONDARY },
        { colored: 'selected', text: 'Primary Button', icon: '', isLoading: false, type: ButtonType.LINK },
        { colored: 'selected', text: 'Primary Button', icon: '', isLoading: false, type: ButtonType.TEXT }
    ];

    return (
        <div>
            {/* <div className='size-divider'>
                {
                    sizes.map(el => <div className='text-design' onClick={() => setSize(el.type)}>{el.text}</div>)
                }
            </div> */}
            <div className='wrapper'>
            <div className='button-container'>
                    {buttonConfigs.map((config) => (
                        <Button colored={config.colored} size={ButtonSize.LARGE} text={config.text} icon={config.icon} isLoading={config.isLoading} type={config.type}/>
                    ))}
                </div>
            </div>
        </div>
    );
    }