import { GetApiHook, useGetDataFromApi } from '@/hooks';
import { swapiInstance } from '@/configs/api';
import { TypeStarsWarPeople } from '@/types';
import { useMemo } from 'react';
import { GetResponseType } from '@/types/response-type.ts';

export const useGetStarsWarPeople = ({ ...args }: GetApiHook = {}) => {
    const { response, ...rest } = useGetDataFromApi<
        Partial<GetResponseType<TypeStarsWarPeople>>
    >({
        axiosInstance: swapiInstance,
        url: '/people',
        ...args,
    });

    const dataDto = useMemo(() => {
        return {
            data: response?.results || [],
            totalPage: response?.count || 0,
        };
    }, [response]);

    return { ...rest, ...dataDto };
};
