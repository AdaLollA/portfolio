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

export const getErrorMessage = (error: unknown): string => {
    let message: string;
    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === 'object' && 'message' in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "something went wrong";
    }
    return message;
}