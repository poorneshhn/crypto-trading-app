export const isMatchingRoute = (path: string, route: string): boolean => {
    return path === route;
}

export const noop = () => {
    // do nothing
}

export const wait = (ms: number = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


