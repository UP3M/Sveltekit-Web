const manifest = {
	appDir: "_app",
	appPath: "Sveltekit-Web/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.578c1923.js","imports":["_app/immutable/entry/start.578c1923.js","_app/immutable/chunks/index.41f8281f.js","_app/immutable/chunks/singletons.5ef7fe26.js","_app/immutable/chunks/paths.4a20baba.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7c8bb9d1.js","imports":["_app/immutable/entry/app.7c8bb9d1.js","_app/immutable/chunks/index.41f8281f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-c21907b4.js'),
			() => import('./chunks/1-ef20793c.js'),
			() => import('./chunks/2-134e2477.js'),
			() => import('./chunks/3-ff4c8795.js'),
			() => import('./chunks/4-8a06d555.js')
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
