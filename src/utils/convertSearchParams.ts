export const convertSearchParams = (params: string) => {
    if (!params.length) return {};
    const search = location.search.substring(1);
    return JSON.parse(
        '{"' +
            decodeURI(search)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"') +
            '"}'
    );
};
