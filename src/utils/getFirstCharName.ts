const LIMITED_SHORT_NAME_LENGTH = 2;
export const getFirstCharName = (name: string) => {
    if (!name.length) return 'XX';

    const splitShortName = name
        .split(' ')
        .map((char) => char[0])
        .join(' ')
        .replace(/ /g, '');

    if (splitShortName.length < LIMITED_SHORT_NAME_LENGTH)
        return splitShortName;

    return splitShortName[0] + splitShortName[splitShortName.length - 1];
};
