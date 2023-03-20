import { c as create_ssr_component, d as add_attribute } from './index-41dea004.js';

const css = {
  code: ".comic.svelte-1e48ylm{display:block;margin-left:auto;margin-right:auto;width:50%}",
  map: null
};
async function fetchSomeComic(email) {
  const params = new URLSearchParams();
  if (email) {
    params.set("email", email);
  }
  const findId = await fetch("https://fwd.innopolis.app/api/hw2?email=" + params.toString());
  const getId = await findId.json();
  console.log(getId);
  const comicAtr = await fetch("https://getxkcd.vercel.app/api/comic?num=" + getId);
  const getMyComic = await comicAtr.json();
  return getMyComic;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let comicTitle = null;
  let displayComic = null;
  let comicAlt = null;
  let uploadDate = null;
  async function getComic() {
    await fetchSomeComic("m.wedamerta@innopolis.university");
  }
  getComic();
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ls4fa7_START -->${$$result.title = `<title>XKCD comic</title>`, ""}<meta name="description" content="XKCD comic"><!-- HEAD_svelte-ls4fa7_END -->`, ""}

<div><h1>XKCD comic</h1>
<h2 style="text-align: center;"${add_attribute("this", comicTitle, 0)}>title</h2>
<p${add_attribute("this", comicAlt, 0)}></p>
<img src="https://anatomised.com/wp-content/uploads/2016/05/spinner-test4.gif" class="comic svelte-1e48ylm" alt="XKCD comic"${add_attribute("this", displayComic, 0)}>
<p style="text-align: center;"${add_attribute("this", uploadDate, 0)}></p>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a2988195.js.map
