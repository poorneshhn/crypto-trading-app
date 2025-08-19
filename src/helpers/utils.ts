import { ROUTES } from "@/constants/routes";

export const isMatchingRoute = (path: string, route: string): boolean => {
    return path === route;
}

export const noop = () => {
    // do nothing
}

export const wait = (ms: number = 1000) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getUserNameFromEmail = (email: string): string => {
    const atIndex = email.indexOf('@');
    if (atIndex === -1) return email;
    return email.slice(0, atIndex);
}

const titles = {
    [ROUTES.HOME]: "Crypto Trade",
    [ROUTES.LOGIN]: "Crypto Trade - Login",
    [ROUTES.TRADE]: "Crypto Trade - Trade",
    [ROUTES.ERROR_404]: "Crypto Trade - Not Found",
}
export const getDocumentTitle = (pathname: string) => {
    return titles[pathname]
}