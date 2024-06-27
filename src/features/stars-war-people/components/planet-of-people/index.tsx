import React from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { RowInfo } from '@/components/row-info';
import { TypePlanet } from '@/types';

export type PlanetOfPeopleProps = {
    planet?: TypePlanet;
    isLoading?: boolean;
    error?;
};

export const PlanetOfPeople: React.FC<PlanetOfPeopleProps> = ({
    planet,
    isLoading = false,
    error,
}) => {
    const planetInfo = [
        {
            label: 'Name',
            value: planet?.name,
        },
        {
            label: 'Rotation Period',
            value: planet?.rotation_period,
        },
        {
            label: 'Orbital Period',
            value: planet?.orbital_period,
        },
        {
            label: 'Diameter',
            value: planet?.diameter,
        },
        {
            label: 'Climate',
            value: planet?.climate,
        },
    ];

    const planetInfoUI = planetInfo.map((item) => {
        return (
            <GridItem w={'full'} key={item.label}>
                <RowInfo label={item.label} value={item.value} />
            </GridItem>
        );
    });

    const planetInfoLoading = Array(planetInfo.length)
        .fill(null)
        .map((_, index) => {
            return (
                <GridItem w={'full'} key={index}>
                    <RowInfo isLoading={isLoading} />
                </GridItem>
            );
        });

    if (!planetInfo) return <Text> Not found Planet </Text>;

    if (error) return <Text> Can not get Data. Please reload again! </Text>;

    return (
        <Grid
            templateColumns={{
                base: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
            }}
            gap={{ base: 4, lg: 6 }}
        >
            {isLoading ? planetInfoLoading : planetInfoUI}
        </Grid>
    );
};
