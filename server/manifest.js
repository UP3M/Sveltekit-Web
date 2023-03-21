const manifest = {
	appDir: "_app",
	appPath: "Sveltekit-Web/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.4be8b58e.js","imports":["_app/immutable/entry/start.4be8b58e.js","_app/immutable/chunks/index.41f8281f.js","_app/immutable/chunks/singletons.561a4c4d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2d2a222c.js","imports":["_app/immutable/entry/app.2d2a222c.js","_app/immutable/chunks/index.41f8281f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-99ae25c7.js'),
			() => import('./chunks/1-3c5d6a8b.js'),
			() => import('./chunks/2-e99272f8.js'),
			() => import('./chunks/3-1bb94363.js'),
			() => import('./chunks/4-fda13a49.js')
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
