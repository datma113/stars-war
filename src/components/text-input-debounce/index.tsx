import React, { useEffect, useState } from 'react';
import { ComponentWithAs, Input, InputProps } from '@chakra-ui/react';
import { useDebounce } from 'use-debounce';

export type TextInputDebounceProps = {
    onChange?(text: string): void;
    timeDebounce?: number;
    defaultValues?: string;
    [k: string]: any;
} & Partial<ComponentWithAs<'input', InputProps>>;

export const TextInputDebounce: React.FC<TextInputDebounceProps> = ({
    onChange,
    timeDebounce = 700,
    defaultValues = '',
    ...rest
}) => {
    const [textInput, setTextInput] = useState(defaultValues);
    const [textInputDebounce] = useDebounce(textInput, timeDebounce);
    const handleChange = (e) => {
        setTextInput(e.target.value);
    };

    useEffect(() => {
        onChange?.(textInputDebounce);
    }, [textInputDebounce]);

    return <Input onChange={handleChange} value={textInput} {...rest} />;
};
