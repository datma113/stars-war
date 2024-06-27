import React from 'react';
import { useGetStarsWarPeople } from '@/features/stars-war-people/api/get/useGetStarsWarPeople.ts';
import { HStack, Stack, Text } from '@chakra-ui/react';
import { HeaderWrapper } from '@/features/stars-war-people/components';
import { StarsWarPeople } from '@/features/stars-war-people/components/stars-war-people';
import ReactPaginate from 'react-paginate';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { convertSearchParams } from '@/utils/convertSearchParams.ts';
import { parse } from '@/utils';

export type PeopleInStarsWarProps = {};

export const PeopleInStarsWar: React.FC<PeopleInStarsWarProps> = () => {
    const [_, setSearchParams] = useSearchParams();
    const location = useLocation();

    const existsParams = convertSearchParams(location.search);
    const activePage = Number(existsParams?.page) + 1 || 1;
    const q = parse(existsParams?.q, '');

    const { data, loading, totalPage, error } = useGetStarsWarPeople({
        params: {
            page: activePage,
            search: q,
        },
    });

    const handlePageChange = (page: number) => {
        setSearchParams({ ...existsParams, page: String(page) });
    };

    if (error)
        return <Text> Can not get Data. please Refresh page again! </Text>;

    return (
        <HeaderWrapper title={'Stars war people info'}>
            <Stack maxWidth={'1024px'} mx={'auto'} px={{ base: 4 }} mt={4}>
                <Text fontSize={'16px'} fontWeight={'semibold'}>
                    People list:
                </Text>

                <StarsWarPeople data={data} isLoading={loading} />

                <HStack justifyContent={'center'}>
                    <ReactPaginate
                        activeClassName={'item active'}
                        breakClassName={'item break-me'}
                        breakLabel={'...'}
                        containerClassName={'pagination'}
                        disabledClassName={'disabled-page'}
                        marginPagesDisplayed={2}
                        nextClassName={'item next'}
                        onPageChange={({ selected }) =>
                            handlePageChange(selected)
                        }
                        pageCount={
                            data.length > 0 ? totalPage / data.length : 0
                        }
                        forcePage={activePage - 1}
                        pageClassName={'item pagination-page'}
                        previousClassName={'item previous'}
                        nextLabel=">"
                        previousLabel={'<'}
                    />
                </HStack>
            </Stack>
        </HeaderWrapper>
    );
};
