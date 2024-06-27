import { GetApiHook, useGetDataFromApi } from '@/hooks';
import { swapiInstance } from '@/configs/api';
import { TypePlanet } from '@/types';

export const useGetHomeworldByPeople = ({ ...args }: GetApiHook = {}) => {
    return useGetDataFromApi<TypePlanet>({
        axiosInstance: swapiInstance,
        url: '/planets' + '/' + args?.id,
        ...args,
    });
};
