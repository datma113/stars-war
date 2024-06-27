import React from 'react';
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    HStack,
    Stack,
} from '@chakra-ui/react';

export type AlertProps = {
    status: 'info' | 'warning' | 'success' | 'error' | 'loading' | undefined;
    label: string;
    content: string;
};

export const BrowserAlert: React.FC<AlertProps> = ({
    label,
    content,
    status,
}) => {
    return (
        <Alert
            status={status}
            w={'max-content'}
            position={'absolute'}
            right={0}
            top={0}
        >
            <Stack>
                <HStack>
                    <AlertIcon />
                    <AlertTitle>{label}</AlertTitle>
                </HStack>
                <AlertDescription>{content}</AlertDescription>
            </Stack>
        </Alert>
    );
};
