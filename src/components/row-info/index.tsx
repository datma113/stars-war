import React from 'react';
import { HStack, Skeleton, SkeletonText, Stack, Text } from '@chakra-ui/react';

export type RowInfoProps = {
    label?: string;
    value?: string;
    isLoading?: boolean;
};

export const RowInfo: React.FC<RowInfoProps> = ({
    label = 'N/A',
    value = 'N/A',
    isLoading = false,
}) => {
    if (isLoading)
        return (
            <Stack
                w={'full'}
                justifyContent={'center'}
                alignItems={'center'}
                rounded={'8px'}
                shadow={'md'}
                p={2}
            >
                <Skeleton height="16px" w={'full'} />
                <Skeleton height="16px" w={'full'} />
            </Stack>
        );

    return (
        <Stack
            w={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            rounded={'8px'}
            shadow={'md'}
            p={2}
        >
            <Text color={'gray.500'} fontSize={'14px'}>
                {label}
            </Text>
            <Text> {value} </Text>
        </Stack>
    );
};
