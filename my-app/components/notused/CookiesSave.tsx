/* eslint-disable @typescript-eslint/no-unused-vars */
//참고 https://medium.com/swlh/how-to-use-cookies-to-persist-state-in-nextjs-934bed5e6da5
import { useCookies } from 'react-cookie';
type Product = {
    id: string;
    name: string;
    price: string;
    imgName: string;
};

const mydefult = 'nothing';

const CartCookies = (data: Array<Product>) => {
    const [cookie, setCookie] = useCookies(['user', mydefult]);

    const SaveCartCookies = async () => {
        try {
            setCookie('user', JSON.stringify(data), {
                path: '/',
                maxAge: 3600,
                sameSite: true,
            });
        } catch (err) {
            console.log(err);
        }
    };
    return <>{console.log(cookie)}</>;
};
export default CartCookies;
