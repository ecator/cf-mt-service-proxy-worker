
import handleGoogle from './google';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		let subPaths = env.SUB_PATHS ? env.SUB_PATHS.split(",") : [];
		if (subPaths.length == 0) {
			console.error("Please set environment variable SUB_PATHS");
		}
		const url = new URL(request.url);
		for (let p of subPaths) {
			let authPath = `/google/${p}`;
			if (url.pathname.startsWith(`${authPath}/`)) {
				console.log(`AUTH FOR ${authPath}`);
				return handleGoogle.fetch(request, env, ctx);
			}
		}
		return new Response('Not Found.', { status: 404 });
	},
} satisfies ExportedHandler<Env>;
