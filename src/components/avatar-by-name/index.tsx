import React from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { getFirstCharName } from '@/utils/getFirstCharName.ts';
import { randomColors } from '@/constants';

export type AvatarByNameProps = {
    name?: string;
    [k: string]: any;
};

export const AvatarByName: React.FC<AvatarByNameProps> = ({
    name = 'XX',
    ...rest
}) => {
    const shortName = getFirstCharName(name);
    const randomBgColor =
        randomColors[Math.floor(Math.random() * randomColors.length)];
    const isExistsColor = randomColors.includes(rest?.bg);
    return (
        <HStack
            w={10}
            h={10}
            bg={rest?.bg || randomBgColor}
            justifyContent={'center'}
            alignItems={'center'}
            rounded={'full'}
            color={isExistsColor ? 'white' : 'gray'}
            fontWeight={'bold'}
            shadow={'md'}
            {...rest}
        >
            <Text> {shortName} </Text>
        </HStack>
    );
};
