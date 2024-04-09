export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BymlEZs5.js","app":"_app/immutable/entry/app.IWD9GiwP.js","imports":["_app/immutable/entry/start.BymlEZs5.js","_app/immutable/chunks/entry.BaliKPfA.js","_app/immutable/chunks/scheduler.aXdsLRVH.js","_app/immutable/chunks/index.bwJqWkDI.js","_app/immutable/entry/app.IWD9GiwP.js","_app/immutable/chunks/scheduler.aXdsLRVH.js","_app/immutable/chunks/index.ip_iNarD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/getInspired",
				pattern: /^\/getInspired\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
