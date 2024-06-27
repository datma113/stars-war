import React from 'react';
import { TypeStarsWarPeople } from '@/types';
import { Grid, GridItem } from '@chakra-ui/react';
import { RowInfo } from '@/components/row-info';

export type PeopleInfoDetailProps = {
    people: TypeStarsWarPeople;
};

export const PeopleInfoDetail: React.FC<PeopleInfoDetailProps> = ({
    people,
}) => {
    const peopleInfo = [
        {
            label: 'Height',
            value: (Number(people.height) / 100).toFixed(2) + ' meters',
        },
        {
            label: 'Mass',
            value: people.mass + ' kg',
        },
        { label: 'Birth Year', value: people.birth_year },
    ];

    const peopleInfoUI = peopleInfo.map((item) => {
        return (
            <GridItem w={'full'} key={item.label}>
                <RowInfo label={item.label} value={item.value} />
            </GridItem>
        );
    });

    return (
        <Grid
            templateColumns={{
                base: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
            }}
            gap={{ base: 4, lg: 6 }}
        >
            {peopleInfoUI}
        </Grid>
    );
};
