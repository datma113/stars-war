export type GetResponseType<T> = {
    results?: T[];
    next?: string;
    count?: number;
    previous?: string;
};
