import React from 'react';
import {
    Box,
    HStack,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
} from '@chakra-ui/react';
import { AvatarByName } from '@/components/avatar-by-name';

export type UserCardProps = {
    name?: string;
    gender?: string;
    eyeColor?: string;
    isLoading?: boolean;
};

export const UserCard: React.FC<UserCardProps> = ({
    name = 'XX',
    gender,
    eyeColor,
    isLoading = false,
}) => {
    if (isLoading)
        return (
            <HStack
                rounded={'4px'}
                border={'1px solid #f3f3f3'}
                px={4}
                py={2}
                shadow={'md'}
            >
                <Box>
                    <SkeletonCircle size={'10'} />
                </Box>
                <Stack w={'full'}>
                    <Skeleton height="16px" w={'full'} />
                    <Skeleton height="12px" w={'50px'} />
                </Stack>
            </HStack>
        );

    return (
        <HStack>
            <AvatarByName name={name} bg={eyeColor} />
            <Stack spacing={0}>
                <Text
                    fontSize={'16px'}
                    fontWeight={'semibold'}
                    isTruncated
                    whiteSpace={'nowrap'}
                >
                    {name}
                </Text>
                <Text fontSize={'12px'} color={'gray'}>
                    {gender}
                </Text>
            </Stack>
        </HStack>
    );
};
