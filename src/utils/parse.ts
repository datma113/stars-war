export const parse = (obj: any, defaultValues: any): any => {
    try {
        return JSON.parse(obj);
    } catch (err) {
        console.error(err);
        return defaultValues;
    }
};
