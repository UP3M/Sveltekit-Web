const manifest = {
	appDir: "_app",
	appPath: "Sveltekit-Web/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.c2b075cf.js","imports":["_app/immutable/entry/start.c2b075cf.js","_app/immutable/chunks/index.41f8281f.js","_app/immutable/chunks/singletons.6888240f.js","_app/immutable/chunks/paths.cf7816e9.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d1820bd1.js","imports":["_app/immutable/entry/app.d1820bd1.js","_app/immutable/chunks/index.41f8281f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-7507f373.js'),
			() => import('./chunks/1-b20bf949.js'),
			() => import('./chunks/2-d5eafd55.js'),
			() => import('./chunks/3-a2470465.js'),
			() => import('./chunks/4-948b0ec4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/comic",
				pattern: /^\/comic\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/hometown",
				pattern: /^\/hometown\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set(["/Sveltekit-Web/comic","/Sveltekit-Web/hometown","/Sveltekit-Web"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
