import React from 'react';
import { TypeStarsWarPeople } from '@/types';
import { Box, Grid, GridItem, HStack, Text, Tooltip } from '@chakra-ui/react';
import { stringify } from '@/utils';
import { UserCard } from '@/components/user-card';
import { StarsWarInfoModal } from '@/features/stars-war-people/components';

export type StarsWarPeopleProps = {
    data: TypeStarsWarPeople[];
    isLoading?: boolean;
};

export const StarsWarPeople: React.FC<StarsWarPeopleProps> = ({
    data,
    isLoading = false,
}) => {
    const getPlanetId = (planetLink: string) => {
        const splitPlanetLink = planetLink.split('/');
        return splitPlanetLink[splitPlanetLink.length - 2];
    };
    const cards = data.map((item) => {
        const planetId = getPlanetId(item.homeworld || '');

        return (
            <GridItem
                w={'full'}
                key={stringify(item)}
                rounded={'4px'}
                border={'1px solid #f3f3f3'}
                px={4}
                py={2}
                shadow={'md'}
                cursor={'pointer'}
                transition={'0.1s'}
                _hover={{
                    transform: 'translateY(-4px)',
                }}
                position={'relative'}
                overflow={'hidden'}
            >
                <Box
                    h={'full'}
                    w={'3px'}
                    position={'absolute'}
                    top={0}
                    left={0}
                    bg={item.eye_color}
                />
                <StarsWarInfoModal people={item} planetId={planetId}>
                    <UserCard
                        name={item.name || 'N/A'}
                        gender={item.gender}
                        eyeColor={item.eye_color}
                    />
                </StarsWarInfoModal>
            </GridItem>
        );
    });

    const renderCards = () => {
        if (!data.length) return 'Not found anyone!';
        return cards;
    };

    const cardsLoading = Array(10)
        .fill(null)
        .map((_, index) => {
            return (
                <GridItem w={'full'} key={index}>
                    <UserCard isLoading />
                </GridItem>
            );
        });

    return (
        <Grid
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: 4, lg: 6 }}
        >
            {isLoading ? cardsLoading : renderCards()}
        </Grid>
    );
};
