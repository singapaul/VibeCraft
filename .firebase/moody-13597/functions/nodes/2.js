import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.vVSDEdbA.js","_app/immutable/chunks/scheduler.aXdsLRVH.js","_app/immutable/chunks/index.ip_iNarD.js","_app/immutable/chunks/utils.B-FN25VW.js","_app/immutable/chunks/index.bwJqWkDI.js","_app/immutable/chunks/Footer.BjJC01kY.js","_app/immutable/chunks/firebase.i2pYi_zb.js","_app/immutable/chunks/entry.CPKVw1nE.js"];
export const stylesheets = ["_app/immutable/assets/2.DYVagJc7.css","_app/immutable/assets/Footer.DNqib9Id.css"];
export const fonts = [];
