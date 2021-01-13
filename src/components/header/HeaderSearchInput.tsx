import React, { useRef, useEffect } from 'react';

interface HeaderSearchInputProps {
    value: string | number,
    onChange: Function,
    onAction: Function,
    onClose: Function,
    className?: string
}

const HeaderSearchInput = (props: HeaderSearchInputProps) => {
    const input = useRef<any>();
    const container = useRef<any>();

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && props.value) props.onAction()
    }

    const handleChange = (e: any) => {
        if (!e.target.value) props.onChange(e.target.value)
        else if (e.target.value.match(/^[а-яА-ЯёЁa-zA-Z1-9\s\-_#@:№!?<>]+$/gi)) props.onChange(e.target.value)
    }

    const handleClickOutside = (e: any)  => {
        if (container.current.contains(e.target)) return;
        props.onClose();
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);

        if (input.current) input.current.focus();

        return () => document.removeEventListener("mousedown", handleClickOutside, true);
    }, [])

    return (
        <div className="header-search-input-container" ref={container}>
            <input 
                value={props.value}
                ref={input} 
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                placeholder="Напишите вопрос или проблему"
                className={(`header-search-input ${props.className ? props.className : ''}`).trim()}/>
        </div>
    )
}

export default HeaderSearchInput;
