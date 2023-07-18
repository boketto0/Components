import './ButtonList1.css';
import { ButtonType, ButtonSize, Button } from '../button/Button';
import { useState } from 'react';


export const ButtonList1 = () => {

    const type = ButtonType.PRIMARY;

    const [size, setSize] = useState(ButtonSize.SMALL);

    const sizes = [
        {type: ButtonSize.SMALL, text: "Small"},
        {type: ButtonSize.MEDIUM, text: "Medium"},
        {type: ButtonSize.LARGE, text: "Large"}
    ]

    const buttonConfigs = [
        { colored: 'pressed', text: 'Button', icon: '', isLoading: false },
        { colored: 'pressed', text: 'Button', icon: '+', isLoading: false },
        { colored: 'disabled', text: 'Button', icon: '', isLoading: false },
        { colored: 'disabled', text: 'Button', icon: '+', isLoading: false },
        { colored: 'selected', text: 'Button', icon: '', isLoading: false },
        { colored: 'selected', text: 'Button', icon: '+', isLoading: false },
        { colored: 'selected', text: 'Button', icon: '', isLoading: false },
        { colored: 'selected', text: 'Loading', icon: '', isLoading: true }
    ];

    return (
        <div>
            <div className='size-divider'>
                {
                    sizes.map(el => <div className='text-design' onClick={() => setSize(el.type)}>{el.text}</div>)
                }
            </div>
            <div className='wrapper'>
            <div className='button-container'>
                    {buttonConfigs.map((config) => (
                        <Button colored={config.colored} size={size} text={config.text} icon={config.icon} isLoading={config.isLoading} type={type}/>
                    ))}
                </div>
            </div>
        </div>
    );
    }