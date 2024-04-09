import { c as create_ssr_component, a as compute_rest_props, b as spread, i as escape, f as escape_attribute_value, e as escape_object, v as validate_component, u as each } from "./ssr.js";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
const Raw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cursor = 870711;
  function getId() {
    cursor += 1;
    return `fa-${cursor.toString(16)}`;
  }
  let raw = "";
  let { data } = $$props;
  function getRaw(data2) {
    if (!data2 || !data2.raw) {
      return "";
    }
    let rawData = data2.raw;
    const ids = {};
    rawData = rawData.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (match, id) => {
      const uniqueId = getId();
      ids[id] = uniqueId;
      return ` id="${uniqueId}"`;
    });
    rawData = rawData.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (match, rawId, _, pointerId) => {
      const id = rawId || pointerId;
      if (!id || !ids[id]) {
        return match;
      }
      return `#${ids[id]}`;
    });
    return rawData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  raw = getRaw(data);
  return `<g><!-- HTML_TAG_START -->${raw}<!-- HTML_TAG_END --></g>`;
});
const css = {
  code: ".fa-icon.svelte-1mc5hvj{display:inline-block;fill:currentColor}.fa-flip-horizontal.svelte-1mc5hvj{transform:scale(-1, 1)}.fa-flip-vertical.svelte-1mc5hvj{transform:scale(1, -1)}.fa-spin.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s 0s infinite linear}.fa-inverse.svelte-1mc5hvj{color:#fff}.fa-pulse.svelte-1mc5hvj{animation:svelte-1mc5hvj-fa-spin 1s infinite steps(8)}@keyframes svelte-1mc5hvj-fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Svg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"]);
  let { class: className = "" } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  let { box = "0 0 0 0" } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = "none" } = $$props;
  let { style = "" } = $$props;
  let { label = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.box === void 0 && $$bindings.box && box !== void 0)
    $$bindings.box(box);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  $$result.css.add(css);
  return `<svg${spread(
    [
      { version: "1.1" },
      {
        class: "fa-icon " + escape(className, true)
      },
      { width: escape_attribute_value(width) },
      { height: escape_attribute_value(height) },
      {
        "aria-label": escape_attribute_value(label)
      },
      {
        role: escape_attribute_value(label ? "img" : "presentation")
      },
      { viewBox: escape_attribute_value(box) },
      { style: escape_attribute_value(style) },
      escape_object($$restProps)
    ],
    {
      classes: (spin ? "fa-spin" : "") + " " + (pulse ? "fa-pulse" : "") + " " + (inverse ? "fa-inverse" : "") + " " + (flip === "horizontal" ? "fa-flip-horizontal" : "") + " " + (flip === "vertical" ? "fa-flip-vertical" : "") + " svelte-1mc5hvj"
    }
  )}>${slots.default ? slots.default({}) : ``}</svg>`;
});
const { Object: Object_1 } = globals;
let outerScale = 1;
function normaliseData(data) {
  let name;
  let iconData;
  if (!data) {
    return void 0;
  } else if ("definition" in data) {
    console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead");
    return void 0;
  } else if ("iconName" in data && "icon" in data) {
    name = data.iconName;
    const [width, height, , , path] = data.icon;
    const paths = Array.isArray(path) ? path : [path];
    iconData = {
      width,
      height,
      paths: paths.map((path2) => {
        return { d: path2 };
      })
    };
  } else {
    name = Object.keys(data)[0];
    iconData = data[name];
  }
  return iconData;
}
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
  let { class: className = "" } = $$props;
  let { data } = $$props;
  let iconData;
  let { scale = 1 } = $$props;
  let { spin = false } = $$props;
  let { inverse = false } = $$props;
  let { pulse = false } = $$props;
  let { flip = void 0 } = $$props;
  let { label = "" } = $$props;
  let { style = "" } = $$props;
  let width = 10;
  let height = 10;
  let combinedStyle;
  let box;
  function normalisedScale() {
    let numScale = 1;
    if (typeof scale !== "undefined") {
      numScale = Number(scale);
    }
    if (isNaN(numScale) || numScale <= 0) {
      console.warn('Invalid prop: prop "scale" should be a number over 0.');
      return outerScale;
    }
    return numScale * outerScale;
  }
  function calculateBox() {
    if (iconData) {
      return `0 0 ${iconData.width} ${iconData.height}`;
    }
    return `0 0 ${width} ${height}`;
  }
  function calculateRatio() {
    if (!iconData) {
      return 1;
    }
    return Math.max(iconData.width, iconData.height) / 16;
  }
  function calculateWidth() {
    if (iconData) {
      return iconData.width / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateHeight() {
    if (iconData) {
      return iconData.height / calculateRatio() * normalisedScale();
    }
    return 0;
  }
  function calculateStyle() {
    let combined = "";
    if (style !== null) {
      combined += style;
    }
    let size = normalisedScale();
    if (size === 1) {
      if (combined.length === 0) {
        return "";
      }
      return combined;
    }
    if (combined !== "" && !combined.endsWith(";")) {
      combined += "; ";
    }
    return `${combined}font-size: ${size}em`;
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.inverse === void 0 && $$bindings.inverse && inverse !== void 0)
    $$bindings.inverse(inverse);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        iconData = normaliseData(data);
        width = calculateWidth();
        height = calculateHeight();
        combinedStyle = calculateStyle();
        box = calculateBox();
      }
    }
    $$rendered = `${validate_component(Svg, "Svg").$$render($$result, Object_1.assign({}, { label }, { width }, { height }, { box }, { style: combinedStyle }, { spin }, { flip }, { inverse }, { pulse }, { class: className }, $$restProps), {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ` ${each(iconData?.paths || [], (path) => {
          return `<path${spread([escape_object(path)], {})}></path>`;
        })} ${each(iconData?.polygons || [], (polygon) => {
          return `<polygon${spread([escape_object(polygon)], {})}></polygon>`;
        })} ${iconData?.raw ? `${validate_component(Raw, "Raw").$$render(
          $$result,
          { data: iconData },
          {
            data: ($$value) => {
              iconData = $$value;
              $$settled = false;
            }
          },
          {}
        )}` : ``} `}`;
      }
    })}   `;
  } while (!$$settled);
  return $$rendered;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="fixed bottom-0 flex w-full items-center justify-between bg-slate-300 px-4"><p data-svelte-h="svelte-eo9iv0">Made by Paul Hardman. Powered by OpenAI.</p> <div class="gap flex"><a href="https://github.com/" target="_blank">${validate_component(Icon, "Icon").$$render($$result, { data: faGithub, class: "m-3", scale: 2 }, {}, {})}</a> <a href="https://www.linkedin.com/in/paul-hardman-1199b6108/" target="_blank">${validate_component(Icon, "Icon").$$render($$result, { data: faLinkedin, class: "m-3", scale: 2 }, {}, {})}</a></div></div>`;
});
export {
  Footer as F,
  Icon as I
};
