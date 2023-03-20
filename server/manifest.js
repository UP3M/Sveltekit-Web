const manifest = {
	appDir: "_app",
	appPath: "Sveltekit-Web/_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.b801ec88.js","imports":["_app/immutable/entry/start.b801ec88.js","_app/immutable/chunks/index.41f8281f.js","_app/immutable/chunks/singletons.5028c854.js","_app/immutable/chunks/paths.f82e74d7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.4c8db71a.js","imports":["_app/immutable/entry/app.4c8db71a.js","_app/immutable/chunks/index.41f8281f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-1dbdeffe.js'),
			() => import('./chunks/1-daa252a8.js'),
			() => import('./chunks/2-b8f09fee.js'),
			() => import('./chunks/3-d1c48f91.js'),
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
