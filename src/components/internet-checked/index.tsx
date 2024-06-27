import React, { useEffect, useState } from 'react';
import { useGetStatusInternet } from '@/hooks';
import { BrowserAlert } from '@/components';

export const InternetChecked = () => {
    const status = useGetStatusInternet();
    const [isShowInternetStatus, setIsShowInternetStatus] = useState(false);

    useEffect(() => {
        if (status) {
            setTimeout(() => {
                setIsShowInternetStatus(false);
            }, 3000);
        } else {
            setIsShowInternetStatus(true);
        }
    }, [status]);

    return (
        isShowInternetStatus && (
            <>
                {status ? (
                    <BrowserAlert
                        status={'success'}
                        label={'You are online'}
                        content={'Successfully connected.'}
                    />
                ) : (
                    <BrowserAlert
                        status={'error'}
                        label={'You are offline'}
                        content={'please re-connect your internet.'}
                    />
                )}
            </>
        )
    );
};
