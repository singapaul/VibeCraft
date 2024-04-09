import * as universal from '../entries/pages/getInspired/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/getInspired/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/getInspired/+page.ts";
export const imports = ["_app/immutable/nodes/3.pltg_7if.js","_app/immutable/chunks/firebase.BWuKaDxD.js","_app/immutable/chunks/scheduler.aXdsLRVH.js","_app/immutable/chunks/index.ip_iNarD.js","_app/immutable/chunks/Footer.BjJC01kY.js"];
export const stylesheets = ["_app/immutable/assets/Footer.DNqib9Id.css"];
export const fonts = [];
