const manifest = {
	appDir: "_app",
	appPath: "Sveltekit-Web/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6fb6d555.js","imports":["_app/immutable/entry/start.6fb6d555.js","_app/immutable/chunks/index.41f8281f.js","_app/immutable/chunks/singletons.0e61b124.js","_app/immutable/chunks/paths.5f82a67e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.99f5a0c6.js","imports":["_app/immutable/entry/app.99f5a0c6.js","_app/immutable/chunks/index.41f8281f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-aa7d65ff.js'),
			() => import('./chunks/1-ced8d813.js'),
			() => import('./chunks/2-214a0f23.js'),
			() => import('./chunks/3-f58a3b85.js'),
			() => import('./chunks/4-66e88701.js')
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
