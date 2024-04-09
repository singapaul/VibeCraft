import { c as create_ssr_component, a as compute_rest_props, b as spread, f as escape_attribute_value, e as escape_object, d as add_attribute, v as validate_component, h as subscribe, j as get_store_value, k as identity, l as createEventDispatcher, o as onDestroy, s as setContext, i as escape, p as null_to_empty, m as missing_component, g as getContext } from "../../chunks/ssr.js";
import { c as cn, b as storedToken, a as storedUser } from "../../chunks/utils.js";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { I as Icon, F as Footer } from "../../chunks/Footer.js";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import SpotifyApi from "spotify-web-api-js";
import "../../chunks/client.js";
import "dequal";
import { tv } from "tailwind-variants";
import "clsx";
import * as yup from "yup";
import { w as writable, d as derived } from "../../chunks/index.js";
import { dequal } from "dequal/lite";
import { d as db, a as analytics } from "../../chunks/firebase.js";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { logEvent } from "firebase/analytics";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
const Button$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "type", "builders", "el"]);
  let { href = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { builders = [] } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-button-root": "" };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0)
    $$bindings.builders(builders);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  return `${builders && builders.length ? ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        { tabindex: "0" },
        escape_object(getAttrs(builders)),
        escape_object($$restProps),
        escape_object(attrs)
      ],
      {}
    )}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}` : ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${spread(
      [
        {
          type: escape_attribute_value(href ? void 0 : type)
        },
        { href: escape_attribute_value(href) },
        { tabindex: "0" },
        escape_object($$restProps),
        escape_object(attrs)
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")}`}`;
});
const buttonVariants = tv({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "variant", "size", "builders"]);
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size = "default" } = $$props;
  let { builders = [] } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.builders === void 0 && $$bindings.builders && builders !== void 0)
    $$bindings.builders(builders);
  return `${validate_component(Button$1, "ButtonPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { builders },
      {
        class: cn(buttonVariants({ variant, size, className }))
      },
      { type: "button" },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_storedToken;
  $$unsubscribe_storedToken = subscribe(storedToken, (value) => value);
  new SpotifyApi();
  $$unsubscribe_storedToken();
  return `<section class="flex flex-col items-center gap-8"><h1 class="mt-10 text-center text-4xl font-bold text-gray-800" data-svelte-h="svelte-5xftnc">Welcome to VibeCraft!</h1> <p class="max-w-80 text-center text-xl text-gray-600" data-svelte-h="svelte-d7tu3x">Craft your perfect Spotify playlist with just a prompt. Enter your musical mood or the silliest
		of random prompts, and let us do the magic in your Spotify account.</p> <div class="flex flex-col gap-4">${validate_component(Button, "Button").$$render($$result, { class: "flex justify-between p-8" }, {}, {
    default: () => {
      return `Login with spotify${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          data: faSpotify,
          class: "p  m-3",
          scale: 2
        },
        {},
        {}
      )}`;
    }
  })} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "flex justify-between p-8",
      variant: "secondary"
    },
    {},
    {
      default: () => {
        return `Looking for inspiration?${validate_component(Icon, "Icon").$$render($$result, { data: faBrain, class: "p  m-3", scale: 2 }, {}, {})}`;
      }
    }
  )}</div></section>`;
});
function subscribeOnce(observable) {
  return new Promise((resolve) => {
    observable.subscribe(resolve)();
  });
}
function update(object, path, value) {
  object.update((o) => {
    set(o, path, value);
    return o;
  });
}
function cloneDeep(object) {
  return JSON.parse(JSON.stringify(object));
}
function isNullish(value) {
  return value === void 0 || value === null;
}
function isEmpty(object) {
  return isNullish(object) || Object.keys(object).length <= 0;
}
function getValues(object) {
  let results = [];
  for (const [, value] of Object.entries(object)) {
    const values = typeof value === "object" ? getValues(value) : [value];
    results = [...results, ...values];
  }
  return results;
}
function getErrorsFromSchema(initialValues, schema, errors = {}) {
  for (const key in schema) {
    switch (true) {
      case (schema[key].type === "object" && !isEmpty(schema[key].fields)): {
        errors[key] = getErrorsFromSchema(
          initialValues[key],
          schema[key].fields,
          { ...errors[key] }
        );
        break;
      }
      case schema[key].type === "array": {
        const values = initialValues && initialValues[key] ? initialValues[key] : [];
        errors[key] = values.map((value) => {
          const innerError = getErrorsFromSchema(
            value,
            schema[key].innerType.fields,
            { ...errors[key] }
          );
          return Object.keys(innerError).length > 0 ? innerError : "";
        });
        break;
      }
      default: {
        errors[key] = "";
      }
    }
  }
  return errors;
}
const deepEqual = dequal;
function assignDeep(object, value) {
  if (Array.isArray(object)) {
    return object.map((o) => assignDeep(o, value));
  }
  const copy = {};
  for (const key in object) {
    copy[key] = typeof object[key] === "object" && !isNullish(object[key]) ? assignDeep(object[key], value) : value;
  }
  return copy;
}
function set(object, path, value) {
  if (new Object(object) !== object)
    return object;
  if (!Array.isArray(path)) {
    path = path.toString().match(/[^.[\]]+/g) || [];
  }
  const result = path.slice(0, -1).reduce(
    (accumulator, key, index) => new Object(accumulator[key]) === accumulator[key] ? accumulator[key] : accumulator[key] = Math.trunc(Math.abs(path[index + 1])) === +path[index + 1] ? [] : {},
    object
  );
  result[path[path.length - 1]] = value;
  return object;
}
const util = {
  assignDeep,
  cloneDeep,
  deepEqual,
  getErrorsFromSchema,
  getValues,
  isEmpty,
  isNullish,
  set,
  subscribeOnce,
  update
};
const NO_ERROR = "";
const IS_TOUCHED = true;
function isCheckbox(element) {
  return element.getAttribute && element.getAttribute("type") === "checkbox";
}
function isFileInput(element) {
  return element.getAttribute && element.getAttribute("type") === "file";
}
function resolveValue(element) {
  if (isFileInput(element)) {
    return element.files;
  } else if (isCheckbox(element)) {
    return element.checked;
  } else {
    return element.value;
  }
}
const createForm = (config) => {
  let initialValues = config.initialValues || {};
  const validationSchema = config.validationSchema;
  const validateFunction = config.validate;
  const onSubmit = config.onSubmit;
  const getInitial = {
    values: () => util.cloneDeep(initialValues),
    errors: () => validationSchema ? util.getErrorsFromSchema(initialValues, validationSchema.fields) : util.assignDeep(initialValues, NO_ERROR),
    touched: () => util.assignDeep(initialValues, !IS_TOUCHED)
  };
  const form = writable(getInitial.values());
  const errors = writable(getInitial.errors());
  const touched = writable(getInitial.touched());
  const isSubmitting = writable(false);
  const isValidating = writable(false);
  const isValid = derived(errors, ($errors) => {
    const noErrors = util.getValues($errors).every((field) => field === NO_ERROR);
    return noErrors;
  });
  const modified = derived(form, ($form) => {
    const object = util.assignDeep($form, false);
    for (let key in $form) {
      object[key] = !util.deepEqual($form[key], initialValues[key]);
    }
    return object;
  });
  const isModified = derived(modified, ($modified) => {
    return util.getValues($modified).includes(true);
  });
  function validateField(field) {
    return util.subscribeOnce(form).then((values) => validateFieldValue(field, values[field]));
  }
  function validateFieldValue(field, value) {
    updateTouched(field, true);
    if (validationSchema) {
      isValidating.set(true);
      return validationSchema.validateAt(field, get_store_value(form)).then(() => util.update(errors, field, "")).catch((error) => util.update(errors, field, error.message)).finally(() => {
        isValidating.set(false);
      });
    }
    if (validateFunction) {
      isValidating.set(true);
      return Promise.resolve().then(() => validateFunction({ [field]: value })).then(
        (errs) => util.update(errors, field, !util.isNullish(errs) ? errs[field] : "")
      ).finally(() => {
        isValidating.set(false);
      });
    }
    return Promise.resolve();
  }
  function updateValidateField(field, value) {
    updateField(field, value);
    return validateFieldValue(field, value);
  }
  function handleChange(event) {
    const element = event.target;
    const field = element.name || element.id;
    const value = resolveValue(element);
    return updateValidateField(field, value);
  }
  function handleSubmit(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    isSubmitting.set(true);
    return util.subscribeOnce(form).then((values) => {
      if (typeof validateFunction === "function") {
        isValidating.set(true);
        return Promise.resolve().then(() => validateFunction(values)).then((error) => {
          if (util.isNullish(error) || util.getValues(error).length === 0) {
            return clearErrorsAndSubmit(values);
          } else {
            errors.set(error);
            isSubmitting.set(false);
          }
        }).finally(() => isValidating.set(false));
      }
      if (validationSchema) {
        isValidating.set(true);
        return validationSchema.validate(values, { abortEarly: false }).then(() => clearErrorsAndSubmit(values)).catch((yupErrors) => {
          if (yupErrors && yupErrors.inner) {
            const updatedErrors = getInitial.errors();
            yupErrors.inner.map(
              (error) => util.set(updatedErrors, error.path, error.message)
            );
            errors.set(updatedErrors);
          }
          isSubmitting.set(false);
        }).finally(() => isValidating.set(false));
      }
      return clearErrorsAndSubmit(values);
    });
  }
  function handleReset() {
    form.set(getInitial.values());
    errors.set(getInitial.errors());
    touched.set(getInitial.touched());
  }
  function clearErrorsAndSubmit(values) {
    return Promise.resolve().then(() => errors.set(getInitial.errors())).then(() => onSubmit(values, form, errors)).finally(() => isSubmitting.set(false));
  }
  function updateField(field, value) {
    util.update(form, field, value);
  }
  function updateTouched(field, value) {
    util.update(touched, field, value);
  }
  function updateInitialValues(newValues) {
    initialValues = newValues;
    handleReset();
  }
  return {
    form,
    errors,
    touched,
    modified,
    isValid,
    isSubmitting,
    isValidating,
    isModified,
    handleChange,
    handleSubmit,
    handleReset,
    updateField,
    updateValidateField,
    updateTouched,
    validateField,
    updateInitialValues,
    state: derived(
      [
        form,
        errors,
        touched,
        modified,
        isValid,
        isValidating,
        isSubmitting,
        isModified
      ],
      ([
        $form,
        $errors,
        $touched,
        $modified,
        $isValid,
        $isValidating,
        $isSubmitting,
        $isModified
      ]) => ({
        form: $form,
        errors: $errors,
        touched: $touched,
        modified: $modified,
        isValid: $isValid,
        isSubmitting: $isSubmitting,
        isValidating: $isValidating,
        isModified: $isModified
      })
    )
  };
};
const spotifyApi = new SpotifyApi();
async function getSongs({
  prompt,
  count,
  user
}) {
  const response = await fetch("https://node-express-starter-2022.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt,
      count
    })
  });
  if (response.ok) {
    const data = await response.json();
    return await searchSongs({ playlist: data.data, user, prompt });
  } else {
    console.error("Error:", response.statusText);
  }
}
async function searchSongs({
  playlist,
  user,
  prompt
}) {
  const queries = playlist.map((track) => `${track.artist} ${track.song}`);
  if (!user)
    return;
  const promiseArray = queries.map(searchSongSpotify);
  const IdArray = await Promise.all(promiseArray);
  const finArray = IdArray.map((id) => `spotify:track:${id}`);
  const created_playlist = await spotifyApi.createPlaylist(user.id, {
    name: prompt,
    description: prompt,
    public: true
  });
  console.log(user);
  await spotifyApi.addTracksToPlaylist(created_playlist.id, finArray);
  await addDoc(collection(db, "prompts"), {
    prompt,
    postedBy: user.display_name,
    userAccount: user,
    createdAt: serverTimestamp()
  });
  return created_playlist;
}
async function searchSongSpotify(songArtistQuery) {
  const id = await spotifyApi.searchTracks(songArtistQuery);
  return id.tracks.items[0].id;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const css = {
  code: ".svelte-yxa4ka{box-sizing:border-box}.bg.svelte-yxa4ka{position:fixed;z-index:1000;top:0;left:0;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66)}@supports (-webkit-touch-callout: none){}.wrap.svelte-yxa4ka{position:relative;margin:2rem;max-height:100%}.window.svelte-yxa4ka{position:relative;width:40rem;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:0.5rem;background:white}.content.svelte-yxa4ka{position:relative;padding:1rem;max-height:calc(100vh - 4rem);overflow:auto}.close.svelte-yxa4ka{display:block;box-sizing:border-box;position:absolute;z-index:1000;top:1rem;right:1rem;margin:0;padding:0;width:1.5rem;height:1.5rem;border:0;color:black;border-radius:1.5rem;background:white;box-shadow:0 0 0 1px black;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);-webkit-appearance:none}.close.svelte-yxa4ka:before,.close.svelte-yxa4ka:after{content:'';display:block;box-sizing:border-box;position:absolute;top:50%;width:1rem;height:1px;background:black;transform-origin:center;transition:height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),\n      background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)}.close.svelte-yxa4ka:before{transform:translate(0, -50%) rotate(45deg);left:0.25rem}.close.svelte-yxa4ka:after{transform:translate(0, -50%) rotate(-45deg);left:0.25rem}.close.svelte-yxa4ka:hover{background:black}.close.svelte-yxa4ka:hover:before,.close.svelte-yxa4ka:hover:after{height:2px;background:white}.close.svelte-yxa4ka:focus{border-color:#3399ff;box-shadow:0 0 0 2px #3399ff}.close.svelte-yxa4ka:active{transform:scale(0.9)}.close.svelte-yxa4ka:hover,.close.svelte-yxa4ka:focus,.close.svelte-yxa4ka:active{outline:none}",
  map: null
};
function bind(Component, props = {}) {
  return function ModalComponent(options) {
    return new Component({
      ...options,
      props: { ...props, ...options.props }
    });
  };
}
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  const baseSetContext = setContext;
  const baseIsTabbable = (node) => node.tabIndex >= 0 && !node.hidden && !node.disabled && node.style.display !== "none" && node.type !== "hidden" && Boolean(node.offsetWidth || node.offsetHeight || node.getClientRects().length);
  let { isTabbable = baseIsTabbable } = $$props;
  let { show = null } = $$props;
  let { id = null } = $$props;
  let { key = "simple-modal" } = $$props;
  let { ariaLabel = null } = $$props;
  let { ariaLabelledBy = null } = $$props;
  let { closeButton = true } = $$props;
  let { closeOnEsc = true } = $$props;
  let { closeOnOuterClick = true } = $$props;
  let { styleBg = {} } = $$props;
  let { styleWindowWrap = {} } = $$props;
  let { styleWindow = {} } = $$props;
  let { styleContent = {} } = $$props;
  let { styleCloseButton = {} } = $$props;
  let { classBg = null } = $$props;
  let { classWindowWrap = null } = $$props;
  let { classWindow = null } = $$props;
  let { classContent = null } = $$props;
  let { classCloseButton = null } = $$props;
  let { unstyled = false } = $$props;
  let { setContext: setContext$1 = baseSetContext } = $$props;
  let { transitionBg = fade } = $$props;
  let { transitionBgProps = { duration: 250 } } = $$props;
  let { transitionWindow = transitionBg } = $$props;
  let { transitionWindowProps = transitionBgProps } = $$props;
  let { disableFocusTrap = false } = $$props;
  const defaultState = {
    id,
    ariaLabel,
    ariaLabelledBy,
    closeButton,
    closeOnEsc,
    closeOnOuterClick,
    styleBg,
    styleWindowWrap,
    styleWindow,
    styleContent,
    styleCloseButton,
    classBg,
    classWindowWrap,
    classWindow,
    classContent,
    classCloseButton,
    transitionBg,
    transitionBgProps,
    transitionWindow,
    transitionWindowProps,
    disableFocusTrap,
    isTabbable,
    unstyled
  };
  let state = { ...defaultState };
  let Component = null;
  let background;
  let wrap;
  let modalWindow;
  let scrollY;
  let cssBg;
  let cssWindowWrap;
  let cssWindow;
  let cssContent;
  let cssCloseButton;
  let prevBodyPosition;
  let prevBodyOverflow;
  let prevBodyWidth;
  const camelCaseToDash = (str) => str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();
  const toCssString = (props) => props ? Object.keys(props).reduce((str, key2) => `${str}; ${camelCaseToDash(key2)}: ${props[key2]}`, "") : "";
  const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);
  const updateStyleTransition = () => {
    cssBg = toCssString(Object.assign(
      {},
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      state.styleBg
    ));
    cssWindowWrap = toCssString(state.styleWindowWrap);
    cssWindow = toCssString(state.styleWindow);
    cssContent = toCssString(state.styleContent);
    cssCloseButton = toCssString(state.styleCloseButton);
    state.transitionBg;
    state.transitionWindow;
  };
  const toVoid = () => {
  };
  let onClose = toVoid;
  let onClosed = toVoid;
  const open = (NewComponent, newProps = {}, options = {}, callbacks = {}) => {
    Component = bind(NewComponent, newProps);
    state = { ...defaultState, ...options };
    updateStyleTransition();
    disableScroll();
    onClose = (event) => {
      if (callbacks.onClose)
        callbacks.onClose(event);
      dispatch("close");
      dispatch("closing");
    };
    onClosed = (event) => {
      if (callbacks.onClosed)
        callbacks.onClosed(event);
      dispatch("closed");
    };
  };
  const close = (callbacks = {}) => {
    if (!Component)
      return;
    onClose = callbacks.onClose || onClose;
    onClosed = callbacks.onClosed || onClosed;
    Component = null;
    enableScroll();
  };
  const disableScroll = () => {
    scrollY = window.scrollY;
    prevBodyPosition = document.body.style.position;
    prevBodyOverflow = document.body.style.overflow;
    prevBodyWidth = document.body.style.width;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
  };
  const enableScroll = () => {
    document.body.style.position = prevBodyPosition || "";
    document.body.style.top = "";
    document.body.style.overflow = prevBodyOverflow || "";
    document.body.style.width = prevBodyWidth || "";
    window.scrollTo({
      top: scrollY,
      left: 0,
      behavior: "instant"
    });
  };
  const context = { open, close };
  setContext$1(key, context);
  onDestroy(() => {
  });
  if ($$props.isTabbable === void 0 && $$bindings.isTabbable && isTabbable !== void 0)
    $$bindings.isTabbable(isTabbable);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.ariaLabelledBy === void 0 && $$bindings.ariaLabelledBy && ariaLabelledBy !== void 0)
    $$bindings.ariaLabelledBy(ariaLabelledBy);
  if ($$props.closeButton === void 0 && $$bindings.closeButton && closeButton !== void 0)
    $$bindings.closeButton(closeButton);
  if ($$props.closeOnEsc === void 0 && $$bindings.closeOnEsc && closeOnEsc !== void 0)
    $$bindings.closeOnEsc(closeOnEsc);
  if ($$props.closeOnOuterClick === void 0 && $$bindings.closeOnOuterClick && closeOnOuterClick !== void 0)
    $$bindings.closeOnOuterClick(closeOnOuterClick);
  if ($$props.styleBg === void 0 && $$bindings.styleBg && styleBg !== void 0)
    $$bindings.styleBg(styleBg);
  if ($$props.styleWindowWrap === void 0 && $$bindings.styleWindowWrap && styleWindowWrap !== void 0)
    $$bindings.styleWindowWrap(styleWindowWrap);
  if ($$props.styleWindow === void 0 && $$bindings.styleWindow && styleWindow !== void 0)
    $$bindings.styleWindow(styleWindow);
  if ($$props.styleContent === void 0 && $$bindings.styleContent && styleContent !== void 0)
    $$bindings.styleContent(styleContent);
  if ($$props.styleCloseButton === void 0 && $$bindings.styleCloseButton && styleCloseButton !== void 0)
    $$bindings.styleCloseButton(styleCloseButton);
  if ($$props.classBg === void 0 && $$bindings.classBg && classBg !== void 0)
    $$bindings.classBg(classBg);
  if ($$props.classWindowWrap === void 0 && $$bindings.classWindowWrap && classWindowWrap !== void 0)
    $$bindings.classWindowWrap(classWindowWrap);
  if ($$props.classWindow === void 0 && $$bindings.classWindow && classWindow !== void 0)
    $$bindings.classWindow(classWindow);
  if ($$props.classContent === void 0 && $$bindings.classContent && classContent !== void 0)
    $$bindings.classContent(classContent);
  if ($$props.classCloseButton === void 0 && $$bindings.classCloseButton && classCloseButton !== void 0)
    $$bindings.classCloseButton(classCloseButton);
  if ($$props.unstyled === void 0 && $$bindings.unstyled && unstyled !== void 0)
    $$bindings.unstyled(unstyled);
  if ($$props.setContext === void 0 && $$bindings.setContext && setContext$1 !== void 0)
    $$bindings.setContext(setContext$1);
  if ($$props.transitionBg === void 0 && $$bindings.transitionBg && transitionBg !== void 0)
    $$bindings.transitionBg(transitionBg);
  if ($$props.transitionBgProps === void 0 && $$bindings.transitionBgProps && transitionBgProps !== void 0)
    $$bindings.transitionBgProps(transitionBgProps);
  if ($$props.transitionWindow === void 0 && $$bindings.transitionWindow && transitionWindow !== void 0)
    $$bindings.transitionWindow(transitionWindow);
  if ($$props.transitionWindowProps === void 0 && $$bindings.transitionWindowProps && transitionWindowProps !== void 0)
    $$bindings.transitionWindowProps(transitionWindowProps);
  if ($$props.disableFocusTrap === void 0 && $$bindings.disableFocusTrap && disableFocusTrap !== void 0)
    $$bindings.disableFocusTrap(disableFocusTrap);
  $$result.css.add(css);
  return ` ${Component ? `<div aria-hidden="true"${add_attribute("id", state.id, 0)} class="${[
    escape(null_to_empty(state.classBg), true) + " svelte-yxa4ka",
    !unstyled ? "bg" : ""
  ].join(" ").trim()}"${add_attribute("style", cssBg, 0)}${add_attribute("this", background, 0)}><div class="${[
    escape(null_to_empty(state.classWindowWrap), true) + " svelte-yxa4ka",
    !unstyled ? "wrap" : ""
  ].join(" ").trim()}"${add_attribute("style", cssWindowWrap, 0)}${add_attribute("this", wrap, 0)}><div class="${[
    escape(null_to_empty(state.classWindow), true) + " svelte-yxa4ka",
    !unstyled ? "window" : ""
  ].join(" ").trim()}" role="dialog" aria-modal="true"${add_attribute("aria-label", state.ariaLabelledBy ? null : state.ariaLabel || null, 0)}${add_attribute("aria-labelledby", state.ariaLabelledBy || null, 0)}${add_attribute("style", cssWindow, 0)}${add_attribute("this", modalWindow, 0)}>${state.closeButton ? `${isFunction(state.closeButton) ? `${validate_component(state.closeButton || missing_component, "svelte:component").$$render($$result, { onClose: close }, {}, {})}` : `<button class="${[
    escape(null_to_empty(state.classCloseButton), true) + " svelte-yxa4ka",
    !unstyled ? "close" : ""
  ].join(" ").trim()}" aria-label="Close modal"${add_attribute("style", cssCloseButton, 0)} type="button"></button>`}` : ``} <div class="${[
    escape(null_to_empty(state.classContent), true) + " svelte-yxa4ka",
    !unstyled ? "content" : ""
  ].join(" ").trim()}"${add_attribute("style", cssContent, 0)}>${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></div></div></div>` : ``} ${slots.default ? slots.default({}) : ``}`;
});
const RandomFactsOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const didYouKnowFacts = [
    "In 2016, Mozart Sold More CDs than Beyoncé.",
    "The British Navy Uses Britney Spears Songs to Scare Off Pirates!",
    "The Offspring's First Drummer Left the Band to Become a Gynecologist.",
    "The world’s largest grand piano was built by a 15-year-old in New Zealand.",
    "A song that gets stuck in your head is called an 'earworm'.",
    "Beethoven could still hear music in his head after going deaf.",
    "The first-ever music video was created in 1894 for a song called 'The Little Lost Child'.",
    "The longest concert ever lasted for 453 hours and was performed by the band Soulflay.",
    "Eminem wrote 'Lose Yourself' during breaks while filming '8 Mile'.",
    "The most expensive musical instrument ever sold was a Stradivarius violin for $16 million.",
    "The Beatles used the word 'love' 613 times in their songs.",
    "Elvis Presley never performed outside of North America.",
    "Michael Jackson's 'Thriller' is the best-selling album of all time.",
    "The world’s first satellite to broadcast music was Soviet Union’s Sputnik 1.",
    "Freddie Mercury created the name 'Queen' for his band.",
    "The first country in the world to grant a radio license was Luxembourg.",
    "The longest time spent in space by a professional musician is 197 days by Chris Hadfield.",
    "The national anthem of Greece has 158 verses.",
    "Bob Dylan’s real name is Robert Zimmerman.",
    "The world record for the most people singing the same national anthem simultaneously is 254,537 for Bangladesh.",
    "Leonard Cohen was originally a poet and novelist before releasing his first album at the age of 33.",
    "The longest marathon drumming by an individual is 134 hours and was set by Carlos Santos from Portugal.",
    "Adele’s '21' is the longest-running number one album by a female solo artist in the history of the UK and US.",
    "The first jazz record was made by the Original Dixieland Jass Band in 1917.",
    "The harmonica is the world's best-selling music instrument.",
    "Wolfgang Amadeus Mozart composed his first piece of music at age 5.",
    "The first guitar was created in ancient Egypt.",
    "Frank Sinatra was arrested for adultery and seduction in 1938.",
    "The most covered song of all time is 'Yesterday' by The Beatles.",
    "The first-ever recorded song was 'Au Clair de la Lune' on a phonautograph in 1860.",
    "Jimi Hendrix’s real name was Johnny Allen Hendrix.",
    "The piano keys were originally black and the sharps and flats white. It was later changed to the current color scheme for better visibility.",
    "The largest orchestra ever consisted of 8,097 musicians in St. Petersburg, Russia.",
    "The first country song to sell a million copies was 'Sallie Gooden' by fiddler A.C. (Eck) Robertson in 1922.",
    "Ludwig Van Beethoven is believed to have been completely deaf by the time he composed his famous 9th Symphony.",
    "'Happy Birthday to You', one of the world's most sung songs, was originally written as 'Good Morning to All' by Patty and Mildred J. Hill.",
    "The longest music video is Michael Jackson’s 'Ghosts', with a runtime of 39 minutes and 31 seconds.",
    "Mariah Carey’s 'All I Want for Christmas Is You' holds the record for the most streamed song on Spotify in 24 hours.",
    "The first rap song to hit number one on the Billboard Hot 100 was 'Rapture' by Blondie in 1981.",
    "The most expensive concert ticket ever sold was for a charity auction to see The Rolling Stones, fetching $2.7 million.",
    "The oldest musical composition discovered is 'Hurrian Hymn No. 6', written in cuneiform, dating to approximately 1400 BC.",
    "The guitar riff from 'Smoke on the Water' by Deep Purple is often considered one of the most recognizable riffs in rock music history.",
    "The highest note ever sung by a male in a recorded song is a G10, achieved by Adam Lopez in 2008.",
    "The Beatles were turned down by Decca Records, who said 'guitar groups are on the way out'.",
    "The most expensive album production ever was Michael Jackson’s 'Invincible', costing approximately $30 million.",
    "Vinyl records have grooves on both sides, and the average LP has about 1,500 feet of grooves.",
    "The first Grammy Awards ceremony was held in 1959.",
    "Madonna holds the record for the most Billboard Hot 100 top ten singles by a female artist.",
    "The longest guitar solo in a studio album is 'Free Bird' by Lynyrd Skynyrd, lasting around 4 minutes and 55 seconds.",
    "Mozart and Beethoven never met in person, despite being alive at the same time and both living in Vienna for a period."
  ];
  const randomFact = didYouKnowFacts[Math.floor(Math.random() * didYouKnowFacts.length)];
  return `<div class="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-900 opacity-75"><div class="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div> <h2 class="text-center text-xl font-semibold text-white" data-svelte-h="svelte-1xlyira">Did you know?</h2> <p class="text-center text-white">${escape(randomFact)}</p></div>`;
});
const PlaylistCreationSuccess = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getContext("simple-modal");
  let { playlistId } = $$props;
  if ($$props.playlistId === void 0 && $$bindings.playlistId && playlistId !== void 0)
    $$bindings.playlistId(playlistId);
  return `<section class="flex flex-col"><h2 class="mb-5 text-3xl font-bold" data-svelte-h="svelte-jlm5k7">Groovy baby!</h2> <p class="mb-3" data-svelte-h="svelte-jpo3m9">You sucessfully created your Spotify playlist!</p> <p class="mb-3" data-svelte-h="svelte-14wd1p3">You can find the new playlist at the top of the playlist sidebar on Spotify.</p> <div class="mt-4 flex w-full flex-col gap-2 sm:flex-row"><a${add_attribute("href", `https://open.spotify.com/playlist/${playlistId}`, 0)} target="_blank" rel="noopener noreferrer" class="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Listen on spotify now</a> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "w-full",
      type: "button",
      variant: "secondary"
    },
    {},
    {
      default: () => {
        return `Create a new playlsit`;
      }
    }
  )}</div></section>`;
});
const ModalContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { open, close } = getContext("simple-modal");
  let { playlistId } = $$props;
  let { isGenerationDone } = $$props;
  if ($$props.playlistId === void 0 && $$bindings.playlistId && playlistId !== void 0)
    $$bindings.playlistId(playlistId);
  if ($$props.isGenerationDone === void 0 && $$bindings.isGenerationDone && isGenerationDone !== void 0)
    $$bindings.isGenerationDone(isGenerationDone);
  {
    if (isGenerationDone) {
      open(PlaylistCreationSuccess, { playlistId });
    } else {
      close();
    }
  }
  return ``;
});
const PlaylistCreationForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storedUser, $$unsubscribe_storedUser;
  let $errors, $$unsubscribe_errors;
  let $form, $$unsubscribe_form;
  let $isValid, $$unsubscribe_isValid;
  let $isSubmitting, $$unsubscribe_isSubmitting;
  $$unsubscribe_storedUser = subscribe(storedUser, (value) => $storedUser = value);
  let playlistCreationPending;
  let playlistId = "";
  let isGenerationDone = false;
  const handlePlaylistCreation = async (values) => {
    try {
      playlistCreationPending = true;
      const { count, prompt } = values;
      const playlistObject = $storedUser && await getSongs({ prompt, count, user: $storedUser });
      playlistId = playlistObject?.id || "";
      handleReset();
      playlistCreationPending = false;
      isGenerationDone = true;
    } catch (e) {
      console.error(e);
    }
  };
  const { form, errors, isValid, isSubmitting, handleChange, handleSubmit, handleReset } = createForm({
    initialValues: { prompt: "", count: 20 },
    validationSchema: yup.object().shape({
      prompt: yup.string().required("Prompt required"),
      count: yup.number()
    }),
    onSubmit: async (values) => {
      await handlePlaylistCreation(values);
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_isValid = subscribe(isValid, (value) => $isValid = value);
  $$unsubscribe_isSubmitting = subscribe(isSubmitting, (value) => $isSubmitting = value);
  $$unsubscribe_storedUser();
  $$unsubscribe_errors();
  $$unsubscribe_form();
  $$unsubscribe_isValid();
  $$unsubscribe_isSubmitting();
  return `${playlistCreationPending ? `${validate_component(RandomFactsOverlay, "RandomFactsOverlay").$$render($$result, {}, {}, {})}` : ``} <section class="img-bg mx-4 w-full sm:max-w-96"><div class="gradient-bg"><form method="post" name="playlistCreation" class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"><div class="mb-6"><label class="mb-2 block text-sm font-bold text-gray-700" for="prompt" data-svelte-h="svelte-hbm1ee">Prompt</label> <input class="${[
    "focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
    $errors.prompt ? "!border-red-600" : ""
  ].join(" ").trim()}" name="prompt" id="prompt" type="text" placeholder="Please enter a prompt"${add_attribute("value", $form.prompt, 0)}> <p class="text-xs italic text-slate-600" data-svelte-h="svelte-xfiy5u">Best results come from 5-6 word phrases</p> ${$errors.prompt ? `<small class="form-validation-error">${escape($errors.prompt)}</small>` : ``}</div> <div class="mb-6"><label class="mb-2 block text-sm font-bold text-gray-700" for="count" data-svelte-h="svelte-7c2p6v">No. of Songs</label> <input class="${[
    "focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
    $errors.count ? "!border-red-600" : ""
  ].join(" ").trim()}" name="count" id="count" type="number"${add_attribute("min", 5, 0)}${add_attribute("value", $form.count, 0)}> <p class="text-xs italic text-slate-600" data-svelte-h="svelte-1nigqn8">How many songs?</p></div> ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      class: "btn-spotify w-full disabled:cursor-not-allowed disabled:opacity-50",
      disabled: !$isValid || $isSubmitting
    },
    {},
    {
      default: () => {
        return `Create new playlist`;
      }
    }
  )}</form></div></section> ${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalContent, "ModalContent").$$render($$result, { playlistId, isGenerationDone }, {}, {})}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storedToken, $$unsubscribe_storedToken;
  $$unsubscribe_storedToken = subscribe(storedToken, (value) => $storedToken = value);
  if (analytics) {
    logEvent(analytics, "page_view", { page_path: window.location.pathname });
  }
  $$unsubscribe_storedToken();
  return `${$storedToken ? `${validate_component(PlaylistCreationForm, "PlaylistCreationForm").$$render($$result, {}, {}, {})}` : `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
