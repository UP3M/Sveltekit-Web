import { c as create_ssr_component, e as escape, v as validate_component, b as subscribe, d as add_attribute } from './index-41dea004.js';
import { p as page } from './stores-c5f4d1a6.js';
import { b as base } from './paths-6db36210.js';

const telegram = "/Sveltekit-Web/_app/immutable/assets/telegram.311aef01.png";
const github = "/Sveltekit-Web/_app/immutable/assets/github.1ea8d62e.svg";
const css$1 = {
  code: `header.svelte-wl3tw1.svelte-wl3tw1{display:flex;justify-content:space-between}.header.svelte-wl3tw1.svelte-wl3tw1{padding:80px;text-align:center;background-image:url("https://storage-prtl-co.imgix.net/endor/organisations/13205/images/1611226245_promotional-photo-3.jpg");height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;color:white}.header.svelte-wl3tw1 h1.svelte-wl3tw1{font-size:40px}.corner.svelte-wl3tw1.svelte-wl3tw1{width:3em;height:3em}.corner.svelte-wl3tw1 a.svelte-wl3tw1{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-wl3tw1 img.svelte-wl3tw1{width:2em;height:2em;object-fit:contain}nav.svelte-wl3tw1.svelte-wl3tw1{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-wl3tw1.svelte-wl3tw1{width:2em;height:3em;display:block}path.svelte-wl3tw1.svelte-wl3tw1{fill:var(--background)}ul.svelte-wl3tw1.svelte-wl3tw1{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-wl3tw1.svelte-wl3tw1{position:relative;height:100%}li[aria-current='page'].svelte-wl3tw1.svelte-wl3tw1::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--color-theme-1)}nav.svelte-wl3tw1 a.svelte-wl3tw1{display:flex;height:100%;align-items:center;padding:0 0.5rem;color:var(--color-text);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-wl3tw1.svelte-wl3tw1:hover{color:var(--color-theme-1)}`,
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div class="header svelte-wl3tw1"><h1 class="svelte-wl3tw1">My Website</h1></div>
<header class="svelte-wl3tw1"><div class="corner svelte-wl3tw1"><a href="https://github.com/UP3M/Front-end-Web-Develpment" class="svelte-wl3tw1"><img${add_attribute("src", github, 0)} alt="GitHub" class="svelte-wl3tw1"></a></div>
	

	<nav class="svelte-wl3tw1"><svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-wl3tw1"><path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" class="svelte-wl3tw1"></path></svg>
		<ul class="svelte-wl3tw1"><li${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)} class="svelte-wl3tw1"><a href="${escape(base, true) + "/"}" class="svelte-wl3tw1">About Me</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/hometown" ? "page" : void 0, 0)} class="svelte-wl3tw1"><a href="${escape(base, true) + "/hometown"}" class="svelte-wl3tw1">My Hometown</a></li>
			<li${add_attribute("aria-current", $page.url.pathname === "/comic" ? "page" : void 0, 0)} class="svelte-wl3tw1"><a href="${escape(base, true) + "/comic"}" class="svelte-wl3tw1">Comic</a></li></ul>
		<svg viewBox="0 0 2 3" aria-hidden="true" class="svelte-wl3tw1"><path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" class="svelte-wl3tw1"></path></svg></nav>

	<div class="corner svelte-wl3tw1"><a href="https://t.me/okaresia" class="svelte-wl3tw1"><img${add_attribute("src", telegram, 0)} alt="Telegram" class="svelte-wl3tw1"></a></div>
	
</header>`;
});
const css = {
  code: ".app.svelte-1wevoko{display:flex;flex-direction:column;min-height:100vh}main.svelte-1wevoko{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}footer.svelte-1wevoko{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px}@media(min-width: 480px){footer.svelte-1wevoko{padding:12px 0}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="${escape(base, true) + "/"}">Link</a>

<div class="app svelte-1wevoko">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="svelte-1wevoko">${slots.default ? slots.default({}) : ``}</main>

	<footer class="svelte-1wevoko"><p>Copyright Ⓒ Made Oka Resia Wedamerta</p></footer>
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-dea097c3.js.map
