import { useEffect, useState } from 'react';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { stringify } from '@/utils';

export type GetApi<D = any> = {
    axiosInstance: AxiosInstance;
    url: string;
    config?: AxiosRequestConfig<D>;
    params?: Record<string, any>;
    isSkip?: boolean;
};

export type GetApiHook = Omit<GetApi, 'axiosInstance' | 'url'> & {
    [k: string]: any;
};

export const useGetDataFromApi = <T, D = any>({
    url,
    config,
    axiosInstance,
    params,
    isSkip = false,
}: GetApi<D>) => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        if (isSkip) return;

        const getApi = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<T> = await axiosInstance.get(
                    url,
                    {
                        ...config,
                        params,
                    }
                );
                setLoading(false);
                setResponse(response.data);
            } catch (err) {
                setLoading(false);
                setError(err);
                console.error(err);
            }
        };
        getApi();
    }, [stringify(params), isSkip]);

    return {
        response,
        loading,
        error,
    };
};
