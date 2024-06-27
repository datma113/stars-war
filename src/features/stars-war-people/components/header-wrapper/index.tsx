import React, { ReactNode, useState } from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { TextInputDebounce } from '@/components/text-input-debounce';
import { useLocation, useSearchParams } from 'react-router-dom';
import { convertSearchParams } from '@/utils/convertSearchParams.ts';
import { parse, stringify } from '@/utils';

export type HeaderWrapperProps = {
    title: string;
    children?: ReactNode;
};

export const HeaderWrapper: React.FC<HeaderWrapperProps> = ({
    title = '',
    children,
}) => {
    const [_, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [isMounted, setIsMounted] = useState(false);

    const existsParams = convertSearchParams(location.search);
    const q = parse(existsParams?.q, '');

    const handleChangeTextInput = (text: string) => {
        if (!isMounted && existsParams.q) {
            setIsMounted(true);
            return;
        }
        setSearchParams({ ...existsParams, q: stringify(text), page: 0 });
    };

    return (
        <Box>
            <Stack
                w={'100vw'}
                h={{ base: '100px', md: '200px' }}
                justifyContent={'center'}
                alignItems={'center'}
                bg={'linear-gradient(to right, #4e54c8, #8f94fb)'}
            >
                <Stack>
                    <Text
                        fontSize={{ base: '24px', md: '36px' }}
                        color={'white'}
                    >
                        {title}
                    </Text>
                    <TextInputDebounce
                        onChange={handleChangeTextInput}
                        placeholder={'search...'}
                        color={'white'}
                        borderColor={'gray.400'}
                        defaultValues={q}
                        _focus={{
                            borderColor: 'white',
                        }}
                        _placeholder={{ color: '#f0f0f0' }}
                    />
                </Stack>
            </Stack>
            {children}
        </Box>
    );
};
