export const validateString = (value: unknown, maxLength: number) => {
    if (!value) {
        console.log('is null', value);
        return false;
    }
    if (typeof value !== "string") {
        console.log('is not string', value);
        return false;
    }
    if (value.length > maxLength) {
        console.log('is too long', value);
        return false;
    }
    return true;
}