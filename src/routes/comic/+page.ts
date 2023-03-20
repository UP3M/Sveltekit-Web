import { dev } from '$app/environment';

// export const load = async({fetch}) => {
//     const params = new URLSearchParams();
//     const email = 'm.wedamerta@innopolis.university';
//     if (email) {
//         params.set('email', email);
//     }
//     const findId = await fetch('https://fwd.innopolis.app/api/hw2?email=' + params.toString())
//     const getId = await findId.json()
//     const comicAtr = await fetch('https://getxkcd.vercel.app/api/comic?num=' + getId)
//     const getMyComic = await comicAtr.json()
//     return getMyComic;
// };
// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


