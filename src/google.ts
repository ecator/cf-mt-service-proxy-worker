export default {
	async fetch(request, env, ctx): Promise<Response> {
		let targets = [0, 1, 2, 3].map(i => `https://mt${i}.google.com/`);
		let targetIdx = Math.floor(Math.random() * targets.length);
		let target = targets[targetIdx];
		let url = new URL(request.url);
		target = target + url.pathname.replace(/^\/google\/.*?\//, "") + url.search;
		console.log(`FORWARD ${request.method} ${target}`);
		return fetch(target, { body: request.body, method: request.method, headers: request.headers, redirect: "follow" });
	},
} satisfies ExportedHandler<Env>;
