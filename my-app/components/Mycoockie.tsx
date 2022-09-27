/* eslint-disable @typescript-eslint/no-explicit-any */
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: any, option?: any) => {
    return cookies.set(name, { ...value }, { ...option });
};

export const getCookies = (name: string) => {
    return cookies.get(name);
};
