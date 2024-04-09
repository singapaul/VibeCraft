import { c as create_ssr_component, d as add_attribute, v as validate_component, u as each, i as escape } from "../../../chunks/ssr.js";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { I as Icon, F as Footer } from "../../../chunks/Footer.js";
import { logEvent } from "firebase/analytics";
import { a as analytics } from "../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (analytics) {
    console.log("logging page view");
    logEvent(analytics, "page_view", { page_path: window.location.pathname });
  } else {
    console.log("not logging");
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex h-full w-screen flex-col overflow-hidden"><div class="flex items-center justify-between px-6"><h1 class="m-4 w-full text-2xl font-bold" data-svelte-h="svelte-12jcr27">Here are some previous prompts</h1> <a${add_attribute("href", `/`, 0)} rel="noopener noreferrer" class="">${validate_component(Icon, "Icon").$$render($$result, { data: faHome, class: "m-3", scale: 3 }, {}, {})}</a></div> <ul class="flex-1 list-disc overflow-auto px-8 pb-24 pt-4 text-lg">${each(data.typed, (item) => {
    return `<li>${escape(item.prompt)}</li>`;
  })}</ul></section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
