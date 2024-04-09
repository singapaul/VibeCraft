var nl={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},y_=nl,E_={prefix:"fas",iconName:"brain",icon:[512,512,[129504],"f5dc","M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"]},Us={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},rl=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},sa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),r.push(n[l],n[h],n[p],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ia(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):rl(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new il;const p=s<<2|a>>4;if(r.push(p),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const R=u<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class il extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sl=function(e){const t=ia(e);return sa.encodeByteArray(t,!0)},xn=function(e){return sl(e).replace(/\./g,"")},ol=function(e){try{return sa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=()=>al().__FIREBASE_DEFAULTS__,ul=()=>{if(typeof process>"u"||typeof Us>"u")return;const e=Us.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ll=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&ol(e[1]);return t&&JSON.parse(t)},Ci=()=>{try{return cl()||ul()||ll()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},hl=e=>{var t,n;return(n=(t=Ci())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},dl=e=>{const t=hl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},oa=()=>{var e;return(e=Ci())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[xn(JSON.stringify(n)),xn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ml(){var e;const t=(e=Ci())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gl(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _l(){return!ml()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vi(){try{return typeof indexedDB=="object"}catch{return!1}}function aa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function yl(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="FirebaseError";class Ft extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=El,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Tl(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ft(i,a,r)}}function Tl(e,t){return e.replace(vl,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const vl=/\{\$([^}]+)}/g;function Fn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Bs(s)&&Bs(o)){if(!Fn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bs(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=1e3,wl=2,Al=4*60*60*1e3,Rl=.5;function qs(e,t=Il,n=wl){const r=t*Math.pow(n,e),i=Math.round(Rl*r*(Math.random()-.5)*2);return Math.min(Al,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){return e&&e._delegate?e._delegate:e}class St{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new fl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Cl(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Pl(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pl(e){return e===qt?void 0:e}function Cl(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Sl(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(V||(V={}));const Dl={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},bl=V.INFO,Nl={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},kl=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Nl[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Di{constructor(t){this.name=t,this._logLevel=bl,this._logHandler=kl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in V))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...t),this._logHandler(this,V.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...t),this._logHandler(this,V.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,V.INFO,...t),this._logHandler(this,V.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,V.WARN,...t),this._logHandler(this,V.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...t),this._logHandler(this,V.ERROR,...t)}}const Ol=(e,t)=>t.some(n=>e instanceof n);let js,$s;function Ml(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xl(){return $s||($s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ca=new WeakMap,Xr=new WeakMap,ua=new WeakMap,Nr=new WeakMap,bi=new WeakMap;function Ll(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Dt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ca.set(n,e)}).catch(()=>{}),bi.set(t,e),t}function Fl(e){if(Xr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Xr.set(e,t)}let Jr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ua.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ul(e){Jr=e(Jr)}function Bl(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(kr(this),t,...n);return ua.set(r,t.sort?t.sort():[t]),Dt(r)}:xl().includes(e)?function(...t){return e.apply(kr(this),t),Dt(ca.get(this))}:function(...t){return Dt(e.apply(kr(this),t))}}function ql(e){return typeof e=="function"?Bl(e):(e instanceof IDBTransaction&&Fl(e),Ol(e,Ml())?new Proxy(e,Jr):e)}function Dt(e){if(e instanceof IDBRequest)return Ll(e);if(Nr.has(e))return Nr.get(e);const t=ql(e);return t!==e&&(Nr.set(e,t),bi.set(t,e)),t}const kr=e=>bi.get(e);function la(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dt(o.result),c.oldVersion,c.newVersion,Dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jl=["get","getKey","getAll","getAllKeys","count"],$l=["put","add","delete","clear"],Or=new Map;function zs(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Or.get(t))return Or.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=$l.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jl.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return Or.set(t,s),s}Ul(e=>({...e,get:(t,n,r)=>zs(t,n)||e.get(t,n,r),has:(t,n)=>!!zs(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kl(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Kl(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Zr="@firebase/app",Ks="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Di("@firebase/app"),Gl="@firebase/app-compat",Hl="@firebase/analytics-compat",Wl="@firebase/analytics",Ql="@firebase/app-check-compat",Yl="@firebase/app-check",Xl="@firebase/auth",Jl="@firebase/auth-compat",Zl="@firebase/database",th="@firebase/database-compat",eh="@firebase/functions",nh="@firebase/functions-compat",rh="@firebase/installations",ih="@firebase/installations-compat",sh="@firebase/messaging",oh="@firebase/messaging-compat",ah="@firebase/performance",ch="@firebase/performance-compat",uh="@firebase/remote-config",lh="@firebase/remote-config-compat",hh="@firebase/storage",dh="@firebase/storage-compat",fh="@firebase/firestore",ph="@firebase/firestore-compat",mh="firebase",gh="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti="[DEFAULT]",_h={[Zr]:"fire-core",[Gl]:"fire-core-compat",[Wl]:"fire-analytics",[Hl]:"fire-analytics-compat",[Yl]:"fire-app-check",[Ql]:"fire-app-check-compat",[Xl]:"fire-auth",[Jl]:"fire-auth-compat",[Zl]:"fire-rtdb",[th]:"fire-rtdb-compat",[eh]:"fire-fn",[nh]:"fire-fn-compat",[rh]:"fire-iid",[ih]:"fire-iid-compat",[sh]:"fire-fcm",[oh]:"fire-fcm-compat",[ah]:"fire-perf",[ch]:"fire-perf-compat",[uh]:"fire-rc",[lh]:"fire-rc-compat",[hh]:"fire-gcs",[dh]:"fire-gcs-compat",[fh]:"fire-fst",[ph]:"fire-fst-compat","fire-js":"fire-js",[mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,yh=new Map,ei=new Map;function Gs(e,t){try{e.container.addComponent(t)}catch(n){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ot(e){const t=e.name;if(ei.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;ei.set(t,e);for(const n of Un.values())Gs(n,e);for(const n of yh.values())Gs(n,e);return!0}function sn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new nr("app","Firebase",Eh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=gh;function ha(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ti,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=oa()),!n)throw bt.create("no-options");const s=Un.get(i);if(s){if(Fn(n,s.options)&&Fn(r,s.config))return s;throw bt.create("duplicate-app",{appName:i})}const o=new Vl(i);for(const c of ei.values())o.addComponent(c);const a=new Th(n,r,o);return Un.set(i,a),a}function da(e=ti){const t=Un.get(e);if(!t&&e===ti&&oa())return ha();if(!t)throw bt.create("no-app",{appName:e});return t}function _t(e,t,n){var r;let i=(r=_h[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Ot(new St(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="firebase-heartbeat-database",wh=1,je="firebase-heartbeat-store";let Mr=null;function fa(){return Mr||(Mr=la(Ih,wh,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(je)}catch(n){console.warn(n)}}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),Mr}async function Ah(e){try{const n=(await fa()).transaction(je),r=await n.objectStore(je).get(pa(e));return await n.done,r}catch(t){if(t instanceof Ft)Qt.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}}async function Hs(e,t){try{const r=(await fa()).transaction(je,"readwrite");await r.objectStore(je).put(t,pa(e)),await r.done}catch(n){if(n instanceof Ft)Qt.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function pa(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=1024,Sh=30*24*60*60*1e3;class Ph{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ws();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ws(),{heartbeatsToSend:r,unsentEntries:i}=Ch(this._heartbeatsCache.heartbeats),s=xn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ws(){return new Date().toISOString().substring(0,10)}function Ch(e,t=Rh){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Qs(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Qs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Vh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vi()?aa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ah(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hs(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Qs(e){return xn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(e){Ot(new St("platform-logger",t=>new zl(t),"PRIVATE")),Ot(new St("heartbeat",t=>new Ph(t),"PRIVATE")),_t(Zr,Ks,e),_t(Zr,Ks,"esm2017"),_t("fire-js","")}Dh("");var bh="firebase",Nh="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(bh,Nh,"app");var kh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_,Ni=Ni||{},I=kh||self;function rr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function on(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Oh(e){return Object.prototype.hasOwnProperty.call(e,xr)&&e[xr]||(e[xr]=++Mh)}var xr="closure_uid_"+(1e9*Math.random()>>>0),Mh=0;function xh(e,t,n){return e.call.apply(e.bind,arguments)}function Lh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function tt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=xh:tt=Lh,tt.apply(null,arguments)}function wn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function z(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ut(){this.s=this.s,this.o=this.o}var Fh=0;Ut.prototype.s=!1;Ut.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Fh!=0)&&Oh(this)};Ut.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ma=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ki(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ys(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(rr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function et(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var Uh=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function $e(e){return/^[\s\xa0]*$/.test(e)}function ir(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function pt(e){return ir().indexOf(e)!=-1}function Oi(e){return Oi[" "](e),e}Oi[" "]=function(){};function Bh(e,t){var n=Nd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var qh=pt("Opera"),fe=pt("Trident")||pt("MSIE"),ga=pt("Edge"),ni=ga||fe,_a=pt("Gecko")&&!(ir().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),jh=ir().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function ya(){var e=I.document;return e?e.documentMode:void 0}var ri;t:{var Lr="",Fr=function(){var e=ir();if(_a)return/rv:([^\);]+)(\)|;)/.exec(e);if(ga)return/Edge\/([\d\.]+)/.exec(e);if(fe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(jh)return/WebKit\/(\S+)/.exec(e);if(qh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fr&&(Lr=Fr?Fr[1]:""),fe){var Ur=ya();if(Ur!=null&&Ur>parseFloat(Lr)){ri=String(Ur);break t}}ri=Lr}var ii;if(I.document&&fe){var Xs=ya();ii=Xs||parseInt(ri,10)||void 0}else ii=void 0;var $h=ii;function ze(e,t){if(et.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_a){t:{try{Oi(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:zh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ze.$.h.call(this)}}z(ze,et);var zh={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var an="closure_listenable_"+(1e6*Math.random()|0),Kh=0;function Gh(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Kh,this.fa=this.ia=!1}function sr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Mi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Hh(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ea(e){const t={};for(const n in e)t[n]=e[n];return t}const Js="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ta(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Js.length;s++)n=Js[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function or(e){this.src=e,this.g={},this.h=0}or.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=oi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Gh(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function si(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ma(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(sr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function oi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),Br={};function va(e,t,n,r,i){if(r&&r.once)return wa(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)va(e,t[s],n,r,i);return null}return n=Ui(n),e&&e[an]?e.O(t,n,on(r)?!!r.capture:!!r,i):Ia(e,t,n,!1,r,i)}function Ia(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=on(i)?!!i.capture:!!i,a=Fi(e);if(a||(e[xi]=a=new or(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Wh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Uh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ra(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Wh(){function e(n){return t.call(e.src,e.listener,n)}const t=Qh;return e}function wa(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)wa(e,t[s],n,r,i);return null}return n=Ui(n),e&&e[an]?e.P(t,n,on(r)?!!r.capture:!!r,i):Ia(e,t,n,!0,r,i)}function Aa(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Aa(e,t[s],n,r,i);else r=on(r)?!!r.capture:!!r,n=Ui(n),e&&e[an]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=oi(s,n,r,i),-1<n&&(sr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Fi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=oi(t,n,r,i)),(n=-1<e?t[e]:null)&&Li(n))}function Li(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[an])si(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ra(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Fi(t))?(si(n,e),n.h==0&&(n.src=null,t[xi]=null)):sr(e)}}}function Ra(e){return e in Br?Br[e]:Br[e]="on"+e}function Qh(e,t){if(e.fa)e=!0;else{t=new ze(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Li(e),e=n.call(r,t)}return e}function Fi(e){return e=e[xi],e instanceof or?e:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(e){return typeof e=="function"?e:(e[qr]||(e[qr]=function(t){return e.handleEvent(t)}),e[qr])}function $(){Ut.call(this),this.i=new or(this),this.S=this,this.J=null}z($,Ut);$.prototype[an]=!0;$.prototype.removeEventListener=function(e,t,n,r){Aa(this,e,t,n,r)};function Q(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new et(t,e);else if(t instanceof et)t.target=t.target||e;else{var i=t;t=new et(r,e),Ta(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=An(o,r,!0,t)&&i}if(o=t.g=e,i=An(o,r,!0,t)&&i,i=An(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=An(o,r,!1,t)&&i}$.prototype.N=function(){if($.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)sr(n[r]);delete e.g[t],e.h--}}this.J=null};$.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};$.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function An(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&si(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Bi=I.JSON.stringify;class Yh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Xh(){var e=qi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Jh{constructor(){this.h=this.g=null}add(t,n){const r=Sa.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Sa=new Yh(()=>new Zh,e=>e.reset());class Zh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function td(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function ed(e){I.setTimeout(()=>{throw e},0)}let Ke,Ge=!1,qi=new Jh,Pa=()=>{const e=I.Promise.resolve(void 0);Ke=()=>{e.then(nd)}};var nd=()=>{for(var e;e=Xh();){try{e.h.call(e.g)}catch(n){ed(n)}var t=Sa;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ge=!1};function ar(e,t){$.call(this),this.h=e||1,this.g=t||I,this.j=tt(this.qb,this),this.l=Date.now()}z(ar,$);_=ar.prototype;_.ga=!1;_.T=null;_.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Q(this,"tick"),this.ga&&(ji(this),this.start()))}};_.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ji(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}_.N=function(){ar.$.N.call(this),ji(this),delete this.g};function $i(e,t,n){if(typeof e=="function")n&&(e=tt(e,n));else if(e&&typeof e.handleEvent=="function")e=tt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function Ca(e){e.g=$i(()=>{e.g=null,e.i&&(e.i=!1,Ca(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class rd extends Ut{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ca(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(e){Ut.call(this),this.h=e,this.g={}}z(He,Ut);var Zs=[];function Va(e,t,n,r){Array.isArray(n)||(n&&(Zs[0]=n.toString()),n=Zs);for(var i=0;i<n.length;i++){var s=va(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Da(e){Mi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Li(t)},e),e.g={}}He.prototype.N=function(){He.$.N.call(this),Da(this)};He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function cr(){this.g=!0}cr.prototype.Ea=function(){this.g=!1};function id(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function sd(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ue(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ad(e,n)+(r?" "+r:"")})}function od(e,t){e.info(function(){return"TIMEOUT: "+t})}cr.prototype.info=function(){};function ad(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bi(n)}catch{return t}}var ee={},to=null;function ur(){return to=to||new $}ee.Ta="serverreachability";function ba(e){et.call(this,ee.Ta,e)}z(ba,et);function We(e){const t=ur();Q(t,new ba(t))}ee.STAT_EVENT="statevent";function Na(e,t){et.call(this,ee.STAT_EVENT,e),this.stat=t}z(Na,et);function rt(e){const t=ur();Q(t,new Na(t,e))}ee.Ua="timingevent";function ka(e,t){et.call(this,ee.Ua,e),this.size=t}z(ka,et);function cn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var lr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Oa={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zi(){}zi.prototype.h=null;function eo(e){return e.h||(e.h=e.i())}function Ma(){}var un={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ki(){et.call(this,"d")}z(Ki,et);function Gi(){et.call(this,"c")}z(Gi,et);var ai;function hr(){}z(hr,zi);hr.prototype.g=function(){return new XMLHttpRequest};hr.prototype.i=function(){return{}};ai=new hr;function ln(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new He(this),this.P=cd,e=ni?125:void 0,this.V=new ar(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xa}function xa(){this.i=null,this.g="",this.h=!1}var cd=45e3,La={},ci={};_=ln.prototype;_.setTimeout=function(e){this.P=e};function ui(e,t,n){e.L=1,e.A=fr(Pt(t)),e.u=n,e.S=!0,Fa(e,null)}function Fa(e,t){e.G=Date.now(),hn(e),e.B=Pt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Ga(n.i,"t",r),e.o=0,n=e.l.J,e.h=new xa,e.g=fc(e.l,n?t:null,!e.u),0<e.O&&(e.M=new rd(tt(e.Pa,e,e.g),e.O)),Va(e.U,e.g,"readystatechange",e.nb),t=e.I?Ea(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),We(),id(e.j,e.v,e.B,e.m,e.W,e.u)}_.nb=function(e){e=e.target;const t=this.M;t&&mt(e)==3?t.l():this.Pa(e)};_.Pa=function(e){try{if(e==this.g)t:{const l=mt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||ni||this.g&&(this.h.h||this.g.ja()||so(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?We(3):We(2)),dr(this);var n=this.g.da();this.ca=n;e:if(Ua(this)){var r=so(this.g);e="";var i=r.length,s=mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Me(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sd(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$e(a)){var u=a;break e}}u=null}if(n=u)ue(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,li(this,n);else{this.i=!1,this.s=3,rt(12),$t(this),Me(this);break t}}this.S?(Ba(this,l,o),ni&&this.i&&l==3&&(Va(this.U,this.V,"tick",this.mb),this.V.start())):(ue(this.j,this.m,o,null),li(this,o)),l==4&&$t(this),this.i&&!this.J&&(l==4?uc(this.l,this):(this.i=!1,hn(this)))}else Vd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),$t(this),Me(this)}}}catch{}finally{}};function Ua(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Ba(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=ud(e,n),i==ci){t==4&&(e.s=4,rt(14),r=!1),ue(e.j,e.m,null,"[Incomplete Response]");break}else if(i==La){e.s=4,rt(15),ue(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ue(e.j,e.m,i,null),li(e,i);Ua(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,rt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ji(t),t.M=!0,rt(11))):(ue(e.j,e.m,n,"[Invalid Chunked Response]"),$t(e),Me(e))}_.mb=function(){if(this.g){var e=mt(this.g),t=this.g.ja();this.o<t.length&&(dr(this),Ba(this,e,t),this.i&&e!=4&&hn(this))}};function ud(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ci:(n=Number(t.substring(n,r)),isNaN(n)?La:(r+=1,r+n>t.length?ci:(t=t.slice(r,r+n),e.o=r+n,t)))}_.cancel=function(){this.J=!0,$t(this)};function hn(e){e.Y=Date.now()+e.P,qa(e,e.P)}function qa(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=cn(tt(e.lb,e),t)}function dr(e){e.C&&(I.clearTimeout(e.C),e.C=null)}_.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(od(this.j,this.B),this.L!=2&&(We(),rt(17)),$t(this),this.s=2,Me(this)):qa(this,this.Y-e)};function Me(e){e.l.H==0||e.J||uc(e.l,e)}function $t(e){dr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ji(e.V),Da(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function li(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||hi(n.i,e))){if(!e.K&&hi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)jn(n),_r(n);else break t;Xi(n),rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cn(tt(n.ib,n),6e3));if(1>=Qa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zt(n,11)}else if((e.K||n.g==e)&&jn(n),!$e(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const R=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(R){var s=r.i;s.g||R.indexOf("spdy")==-1&&R.indexOf("quic")==-1&&R.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Hi(s,s.h),s.h=null))}if(r.F){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,k(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=dc(r,r.J?r.pa:null,r.Y),o.K){Ya(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(dr(a),hn(a)),r.g=o}else ac(r);0<n.j.length&&yr(n)}else u[0]!="stop"&&u[0]!="close"||zt(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zt(n,7):Yi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}We(4)}catch{}}function ld(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(rr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function hd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(rr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ja(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(rr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=hd(e),r=ld(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var $a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Wt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wt){this.h=e.h,Bn(this,e.j),this.s=e.s,this.g=e.g,qn(this,e.m),this.l=e.l;var t=e.i,n=new Qe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),no(this,n),this.o=e.o}else e&&(t=String(e).match($a))?(this.h=!1,Bn(this,t[1]||"",!0),this.s=be(t[2]||""),this.g=be(t[3]||"",!0),qn(this,t[4]),this.l=be(t[5]||"",!0),no(this,t[6]||"",!0),this.o=be(t[7]||"")):(this.h=!1,this.i=new Qe(null,this.h))}Wt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ne(t,ro,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ne(t,ro,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ne(n,n.charAt(0)=="/"?md:pd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ne(n,_d)),e.join("")};function Pt(e){return new Wt(e)}function Bn(e,t,n){e.j=n?be(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function no(e,t,n){t instanceof Qe?(e.i=t,yd(e.i,e.h)):(n||(t=Ne(t,gd)),e.i=new Qe(t,e.h))}function k(e,t,n){e.i.set(t,n)}function fr(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function be(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ne(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,fd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ro=/[#\/\?@]/g,pd=/[#\?:]/g,md=/[#\?]/g,gd=/[#\?@]/g,_d=/#/g;function Qe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Bt(e){e.g||(e.g=new Map,e.h=0,e.i&&dd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}_=Qe.prototype;_.add=function(e,t){Bt(this),this.i=null,e=ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function za(e,t){Bt(e),t=ve(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ka(e,t){return Bt(e),t=ve(e,t),e.g.has(t)}_.forEach=function(e,t){Bt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};_.ta=function(){Bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};_.Z=function(e){Bt(this);let t=[];if(typeof e=="string")Ka(this,e)&&(t=t.concat(this.g.get(ve(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};_.set=function(e,t){return Bt(this),this.i=null,e=ve(this,e),Ka(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};_.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ga(e,t,n){za(e,t),0<n.length&&(e.i=null,e.g.set(ve(e,t),ki(n)),e.h+=n.length)}_.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function yd(e,t){t&&!e.j&&(Bt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(za(this,r),Ga(this,i,n))},e)),e.j=t}var Ed=class{constructor(e,t){this.g=e,this.map=t}};function Ha(e){this.l=e||Td,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Td=10;function Wa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qa(e){return e.h?1:e.g?e.g.size:0}function hi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Hi(e,t){e.g?e.g.add(t):e.h=t}function Ya(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ha.prototype.cancel=function(){if(this.i=Xa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xa(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ki(e.i)}var vd=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function Id(){this.g=new vd}function wd(e,t,n){const r=n||"";try{ja(e,function(i,s){let o=i;on(i)&&(o=Bi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Ad(e,t){const n=new cr;if(I.Image){const r=new Image;r.onload=wn(Rn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=wn(Rn,n,r,"TestLoadImage: error",!1,t),r.onabort=wn(Rn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=wn(Rn,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Rn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function pr(e){this.l=e.ec||null,this.j=e.ob||!1}z(pr,zi);pr.prototype.g=function(){return new mr(this.l,this.j)};pr.prototype.i=function(e){return function(){return e}}({});function mr(e,t){$.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Wi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}z(mr,$);var Wi=0;_=mr.prototype;_.open=function(e,t){if(this.readyState!=Wi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ye(this)};_.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};_.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,dn(this)),this.readyState=Wi};_.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ja(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ja(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}_.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?dn(this):Ye(this),this.readyState==3&&Ja(this)}};_.Za=function(e){this.g&&(this.response=this.responseText=e,dn(this))};_.Ya=function(e){this.g&&(this.response=e,dn(this))};_.ka=function(){this.g&&dn(this)};function dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ye(e)}_.setRequestHeader=function(e,t){this.v.append(e,t)};_.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};_.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ye(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Rd=I.JSON.parse;function x(e){$.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Za,this.L=this.M=!1}z(x,$);var Za="",Sd=/^https?$/i,Pd=["POST","PUT"];_=x.prototype;_.Oa=function(e){this.M=e};_.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ai.g(),this.C=this.u?eo(this.u):eo(ai),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){io(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=I.FormData&&e instanceof I.FormData,!(0<=ma(Pd,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nc(this),0<this.B&&((this.L=Cd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=$i(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){io(this,s)}};function Cd(e){return fe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}_.ua=function(){typeof Ni<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Q(this,"timeout"),this.abort(8))};function io(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,tc(e),gr(e)}function tc(e){e.F||(e.F=!0,Q(e,"complete"),Q(e,"error"))}_.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Q(this,"complete"),Q(this,"abort"),gr(this))};_.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gr(this,!0)),x.$.N.call(this)};_.La=function(){this.s||(this.G||this.v||this.l?ec(this):this.kb())};_.kb=function(){ec(this)};function ec(e){if(e.h&&typeof Ni<"u"&&(!e.C[1]||mt(e)!=4||e.da()!=2)){if(e.v&&mt(e)==4)$i(e.La,0,e);else if(Q(e,"readystatechange"),mt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match($a)[1]||null;!i&&I.self&&I.self.location&&(i=I.self.location.protocol.slice(0,-1)),r=!Sd.test(i?i.toLowerCase():"")}n=r}if(n)Q(e,"complete"),Q(e,"success");else{e.m=6;try{var s=2<mt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",tc(e)}}finally{gr(e)}}}}function gr(e,t){if(e.g){nc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Q(e,"ready");try{n.onreadystatechange=r}catch{}}}function nc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}_.isActive=function(){return!!this.g};function mt(e){return e.g?e.g.readyState:0}_.da=function(){try{return 2<mt(this)?this.g.status:-1}catch{return-1}};_.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};_.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Rd(t)}};function so(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Za:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Vd(e){const t={};e=(e.g&&2<=mt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if($e(e[r]))continue;var n=td(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Hh(t,function(r){return r.join(", ")})}_.Ia=function(){return this.m};_.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rc(e){let t="";return Mi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Qi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=rc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function Ce(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ic(e){this.Ga=0,this.j=[],this.l=new cr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ce("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ce("baseRetryDelayMs",5e3,e),this.hb=Ce("retryDelaySeedMs",1e4,e),this.eb=Ce("forwardChannelMaxRetries",2,e),this.xa=Ce("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ha(e&&e.concurrentRequestLimit),this.Ja=new Id,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}_=ic.prototype;_.ra=8;_.H=1;function Yi(e){if(sc(e),e.H==3){var t=e.W++,n=Pt(e.I);if(k(n,"SID",e.K),k(n,"RID",t),k(n,"TYPE","terminate"),fn(e,n),t=new ln(e,e.l,t),t.L=2,t.A=fr(Pt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=fc(t.l,null),t.g.ha(t.A)),t.G=Date.now(),hn(t)}hc(e)}function _r(e){e.g&&(Ji(e),e.g.cancel(),e.g=null)}function sc(e){_r(e),e.u&&(I.clearTimeout(e.u),e.u=null),jn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function yr(e){if(!Wa(e.i)&&!e.m){e.m=!0;var t=e.Na;Ke||Pa(),Ge||(Ke(),Ge=!0),qi.add(t,e),e.C=0}}function Dd(e,t){return Qa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=cn(tt(e.Na,e,t),lc(e,e.C)),e.C++,!0)}_.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new ln(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ea(s),Ta(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=oc(this,i,t),n=Pt(this.I),k(n,"RID",e),k(n,"CVER",22),this.F&&k(n,"X-HTTP-Session-Id",this.F),fn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(rc(s)))+"&"+t:this.o&&Qi(n,this.o,s)),Hi(this.i,i),this.bb&&k(n,"TYPE","init"),this.P?(k(n,"$req",t),k(n,"SID","null"),i.aa=!0,ui(i,n,null)):ui(i,n,t),this.H=2}}else this.H==3&&(e?oo(this,e):this.j.length==0||Wa(this.i)||oo(this))};function oo(e,t){var n;t?n=t.m:n=e.W++;const r=Pt(e.I);k(r,"SID",e.K),k(r,"RID",n),k(r,"AID",e.V),fn(e,r),e.o&&e.s&&Qi(r,e.o,e.s),n=new ln(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=oc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Hi(e.i,n),ui(n,r,t)}function fn(e,t){e.na&&Mi(e.na,function(n,r){k(t,r,n)}),e.h&&ja({},function(n,r){k(t,r,n)})}function oc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?tt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{wd(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ac(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ke||Pa(),Ge||(Ke(),Ge=!0),qi.add(t,e),e.A=0}}function Xi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=cn(tt(e.Ma,e),lc(e,e.A)),e.A++,!0)}_.Ma=function(){if(this.u=null,cc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=cn(tt(this.jb,this),e)}};_.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),_r(this),cc(this))};function Ji(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function cc(e){e.g=new ln(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Pt(e.wa);k(t,"RID","rpc"),k(t,"SID",e.K),k(t,"AID",e.V),k(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&k(t,"TO",e.qa),k(t,"TYPE","xmlhttp"),fn(e,t),e.o&&e.s&&Qi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=fr(Pt(t)),n.u=null,n.S=!0,Fa(n,e)}_.ib=function(){this.v!=null&&(this.v=null,_r(this),Xi(this),rt(19))};function jn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function uc(e,t){var n=null;if(e.g==t){jn(e),Ji(e),e.g=null;var r=2}else if(hi(e.i,t))n=t.F,Ya(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=ur(),Q(r,new ka(r,n)),yr(e)}else ac(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Dd(e,t)||r==2&&Xi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:zt(e,5);break;case 4:zt(e,10);break;case 3:zt(e,6);break;default:zt(e,2)}}}function lc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function zt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=tt(e.pb,e);n||(n=new Wt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Bn(n,"https"),fr(n)),Ad(n.toString(),r)}else rt(2);e.H=0,e.h&&e.h.za(t),hc(e),sc(e)}_.pb=function(e){e?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function hc(e){if(e.H=0,e.ma=[],e.h){const t=Xa(e.i);(t.length!=0||e.j.length!=0)&&(Ys(e.ma,t),Ys(e.ma,e.j),e.i.i.length=0,ki(e.j),e.j.length=0),e.h.ya()}}function dc(e,t,n){var r=n instanceof Wt?Pt(n):new Wt(n);if(r.g!="")t&&(r.g=t+"."+r.g),qn(r,r.m);else{var i=I.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Wt(null);r&&Bn(s,r),t&&(s.g=t),i&&qn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&k(r,n,t),k(r,"VER",e.ra),fn(e,r),r}function fc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new x(new pr({ob:n})):new x(e.va),t.Oa(e.J),t}_.isActive=function(){return!!this.h&&this.h.isActive(this)};function pc(){}_=pc.prototype;_.Ba=function(){};_.Aa=function(){};_.za=function(){};_.ya=function(){};_.isActive=function(){return!0};_.Va=function(){};function $n(){if(fe&&!(10<=Number($h)))throw Error("Environmental error: no available transport.")}$n.prototype.g=function(e,t){return new at(e,t)};function at(e,t){$.call(this),this.g=new ic(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!$e(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!$e(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ie(this)}z(at,$);at.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;rt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=dc(e,null,e.Y),yr(e)};at.prototype.close=function(){Yi(this.g)};at.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Bi(e),e=n);t.j.push(new Ed(t.fb++,e)),t.H==3&&yr(t)};at.prototype.N=function(){this.g.h=null,delete this.j,Yi(this.g),delete this.g,at.$.N.call(this)};function mc(e){Ki.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}z(mc,Ki);function gc(){Gi.call(this),this.status=1}z(gc,Gi);function Ie(e){this.g=e}z(Ie,pc);Ie.prototype.Ba=function(){Q(this.g,"a")};Ie.prototype.Aa=function(e){Q(this.g,new mc(e))};Ie.prototype.za=function(e){Q(this.g,new gc)};Ie.prototype.ya=function(){Q(this.g,"b")};function bd(){this.blockSize=-1}function dt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}z(dt,bd);dt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function jr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}dt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)jr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){jr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){jr(this,r),i=0;break}}this.h=i,this.i+=t};dt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function b(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Nd={};function Zi(e){return-128<=e&&128>e?Bh(e,function(t){return new b([t|0],0>t?-1:0)}):new b([e|0],0>e?-1:0)}function gt(e){if(isNaN(e)||!isFinite(e))return le;if(0>e)return H(gt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=di;return new b(t,0)}function _c(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return H(_c(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gt(Math.pow(t,8)),r=le,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=gt(Math.pow(t,s)),r=r.R(s).add(gt(o))):(r=r.R(n),r=r.add(gt(o)))}return r}var di=4294967296,le=Zi(0),fi=Zi(1),ao=Zi(16777216);_=b.prototype;_.ea=function(){if(ct(this))return-H(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:di+r)*t,t*=di}return e};_.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(wt(this))return"0";if(ct(this))return"-"+H(this).toString(e);for(var t=gt(Math.pow(e,6)),n=this,r="";;){var i=Kn(n,t).g;n=zn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,wt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};_.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function wt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ct(e){return e.h==-1}_.X=function(e){return e=zn(this,e),ct(e)?-1:wt(e)?0:1};function H(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new b(n,~e.h).add(fi)}_.abs=function(){return ct(this)?H(this):this};_.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new b(n,n[n.length-1]&-2147483648?-1:0)};function zn(e,t){return e.add(H(t))}_.R=function(e){if(wt(this)||wt(e))return le;if(ct(this))return ct(e)?H(this).R(H(e)):H(H(this).R(e));if(ct(e))return H(this.R(H(e)));if(0>this.X(ao)&&0>e.X(ao))return gt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,Sn(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Sn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Sn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Sn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new b(n,0)};function Sn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ve(e,t){this.g=e,this.h=t}function Kn(e,t){if(wt(t))throw Error("division by zero");if(wt(e))return new Ve(le,le);if(ct(e))return t=Kn(H(e),t),new Ve(H(t.g),H(t.h));if(ct(t))return t=Kn(e,H(t)),new Ve(H(t.g),t.h);if(30<e.g.length){if(ct(e)||ct(t))throw Error("slowDivide_ only works with positive integers.");for(var n=fi,r=t;0>=r.X(e);)n=co(n),r=co(r);var i=se(n,1),s=se(r,1);for(r=se(r,2),n=se(n,2);!wt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=se(r,1),n=se(n,1)}return t=zn(e,i.R(t)),new Ve(i,t)}for(i=le;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gt(n),o=s.R(t);ct(o)||0<o.X(e);)n-=r,s=gt(n),o=s.R(t);wt(s)&&(s=fi),i=i.add(s),e=zn(e,o)}return new Ve(i,e)}_.gb=function(e){return Kn(this,e).h};_.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new b(n,this.h&e.h)};_.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new b(n,this.h|e.h)};_.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new b(n,this.h^e.h)};function co(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new b(n,e.h)}function se(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new b(i,e.h)}$n.prototype.createWebChannel=$n.prototype.g;at.prototype.send=at.prototype.u;at.prototype.open=at.prototype.m;at.prototype.close=at.prototype.close;lr.NO_ERROR=0;lr.TIMEOUT=8;lr.HTTP_ERROR=6;Oa.COMPLETE="complete";Ma.EventType=un;un.OPEN="a";un.CLOSE="b";un.ERROR="c";un.MESSAGE="d";$.prototype.listen=$.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;dt.prototype.digest=dt.prototype.l;dt.prototype.reset=dt.prototype.reset;dt.prototype.update=dt.prototype.j;b.prototype.add=b.prototype.add;b.prototype.multiply=b.prototype.R;b.prototype.modulo=b.prototype.gb;b.prototype.compare=b.prototype.X;b.prototype.toNumber=b.prototype.ea;b.prototype.toString=b.prototype.toString;b.prototype.getBits=b.prototype.D;b.fromNumber=gt;b.fromString=_c;var kd=function(){return new $n},Od=function(){return ur()},$r=lr,Md=Oa,xd=ee,uo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Pn=Ma,Ld=x,Fd=dt,he=b;const lo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}J.UNAUTHENTICATED=new J(null),J.GOOGLE_CREDENTIALS=new J("google-credentials-uid"),J.FIRST_PARTY=new J("first-party-uid"),J.MOCK_USER=new J("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Di("@firebase/firestore");function De(){return Yt.logLevel}function g(e,...t){if(Yt.logLevel<=V.DEBUG){const n=t.map(ts);Yt.debug(`Firestore (${we}): ${e}`,...n)}}function Tt(e,...t){if(Yt.logLevel<=V.ERROR){const n=t.map(ts);Yt.error(`Firestore (${we}): ${e}`,...n)}}function pe(e,...t){if(Yt.logLevel<=V.WARN){const n=t.map(ts);Yt.warn(`Firestore (${we}): ${e}`,...n)}}function ts(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+e;throw Tt(t),new Error(t)}function N(e,t){e||T()}function A(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ft{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ud{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(J.UNAUTHENTICATED))}shutdown(){}}class Bd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qd{constructor(t){this.t=t,this.currentUser=J.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new At;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new At,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new At)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new yc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new J(t)}}class jd{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=J.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $d{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new jd(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(J.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,g("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(N(typeof n.token=="string"),this.R=n.token,new zd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Gd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function D(e,t){return e<t?-1:e>t?1:0}function me(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new q(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.timestamp=t}static fromTimestamp(t){return new w(t)}static min(){return new w(new q(0,0))}static max(){return new w(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Xe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Xe?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class O extends Xe{construct(t,n,r){return new O(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new O(n)}static emptyPath(){return new O([])}}const Hd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends Xe{construct(t,n,r){return new W(t,n,r)}static isValidIdentifier(t){return Hd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new W(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new W(n)}static emptyPath(){return new W([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(O.fromString(t))}static fromName(t){return new E(O.fromString(t).popFirst(5))}static empty(){return new E(O.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&O.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return O.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new O(t.slice()))}}function Wd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=w.fromTimestamp(r===1e9?new q(n+1,0):new q(n,r));return new Mt(i,E.empty(),t)}function Qd(e){return new Mt(e.readTime,e.key,-1)}class Mt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Mt(w.min(),E.empty(),-1)}static max(){return new Mt(w.max(),E.empty(),-1)}}function Yd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:D(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Xd)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(i=>i?f.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new f((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,n){return new f((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new At,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new xe(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ns(r.target.error);this.V.reject(new xe(t,i))}}static open(t,n,r,i){try{return new es(n,t.transaction(i,r))}catch(s){throw new xe(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(g("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new tf(n)}}class Kt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,Kt.S(Ln())===12.2&&Tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return g("SimpleDb","Removing database:",t),jt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Vi())return!1;if(Kt.C())return!0;const t=Ln(),n=Kt.S(t),r=0<n&&n<10,i=Kt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(g("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new xe(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(d.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(d.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new xe(t,o))},i.onupgradeneeded=s=>{g("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{g("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=es.open(this.db,t,s?"readonly":"readwrite",r),c=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),f.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(g("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Zd{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return jt(this.k.delete())}}class xe extends y{constructor(t,n){super(d.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function mn(e){return e.name==="IndexedDbTransactionError"}class tf{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(g("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(g("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),jt(r)}add(t){return g("SimpleDb","ADD",this.store.name,t,t),jt(this.store.add(t))}get(t){return jt(this.store.get(t)).next(n=>(n===void 0&&(n=null),g("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return g("SimpleDb","DELETE",this.store.name,t),jt(this.store.delete(t))}count(){return g("SimpleDb","COUNT",this.store.name),jt(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new f((o,a)=>{s.onerror=c=>{a(c.target.error)},s.onsuccess=c=>{o(c.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new f((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){g("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new f((r,i)=>{n.onerror=s=>{const o=ns(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new f((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new Zd(a),u=n(a.primaryKey,a.value,c);if(u instanceof f){const l=u.catch(h=>(c.done(),f.reject(h)));r.push(l)}c.isDone?i():c.$===null?a.continue():a.continue(c.$)}}).next(()=>f.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function jt(e){return new f((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=ns(r.target.error);n(i)}})}let ho=!1;function ns(e){const t=Kt.S(Ln());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ho||(ho=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}rs._e=-1;function Er(e){return e==null}function Gn(e){return e===0&&1/e==-1/0}function ef(e){return typeof e=="number"&&Number.isInteger(e)&&!Gn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ae(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Tc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,n){this.comparator=t,this.root=n||G.EMPTY}insert(t,n){return new M(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,G.BLACK,null,null))}remove(t){return new M(this.comparator,this.root.remove(t,this.comparator).copy(null,null,G.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class G{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??G.RED,this.left=i??G.EMPTY,this.right=s??G.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new G(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return G.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return G.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}G.EMPTY=null,G.RED=!0,G.BLACK=!1;G.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,i,s){return this}insert(t,n,r){return new G(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.comparator=t,this.data=new M(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new po(this.data.getIterator())}getIteratorFrom(t){return new po(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Y)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Y(this.comparator);return n.data=t,n}}class po{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.fields=t,t.sort(W.comparator)}static empty(){return new ht([])}unionWith(t){let n=new Y(W.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ht(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return me(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vc("Invalid base64 string: "+s):s}}(t);return new nt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new nt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const nf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(e){if(N(!!e),typeof e=="string"){let t=0;const n=nf.exec(e);if(N(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(e.seconds),nanos:U(e.nanos)}}function U(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xt(e){return typeof e=="string"?nt.fromBase64String(e):nt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ss(e){const t=e.mapValue.fields.__previous_value__;return is(t)?ss(t):t}function Je(e){const t=xt(e.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(t,n,r,i,s,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ze{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?is(e)?4:sf(e)?9007199254740991:10:T()}function vt(e,t){if(e===t)return!0;const n=Jt(e);if(n!==Jt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Je(e).isEqual(Je(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xt(i.timestampValue),a=xt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Xt(i.bytesValue).isEqual(Xt(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return U(i.geoPointValue.latitude)===U(s.geoPointValue.latitude)&&U(i.geoPointValue.longitude)===U(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return U(i.integerValue)===U(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=U(i.doubleValue),a=U(s.doubleValue);return o===a?Gn(o)===Gn(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return me(e.arrayValue.values||[],t.arrayValue.values||[],vt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(fo(o)!==fo(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!vt(o[c],a[c])))return!1;return!0}(e,t);default:return T()}}function tn(e,t){return(e.values||[]).find(n=>vt(n,t))!==void 0}function ge(e,t){if(e===t)return 0;const n=Jt(e),r=Jt(t);if(n!==r)return D(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return D(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=U(s.integerValue||s.doubleValue),c=U(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return mo(e.timestampValue,t.timestampValue);case 4:return mo(Je(e),Je(t));case 5:return D(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Xt(s),c=Xt(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=D(U(s.latitude),U(o.latitude));return a!==0?a:D(U(s.longitude),U(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=ge(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Vn.mapValue&&o===Vn.mapValue)return 0;if(s===Vn.mapValue)return 1;if(o===Vn.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const p=D(c[h],l[h]);if(p!==0)return p;const m=ge(a[c[h]],u[l[h]]);if(m!==0)return m}return D(c.length,l.length)}(e.mapValue,t.mapValue);default:throw T()}}function mo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return D(e,t);const n=xt(e),r=xt(t),i=D(n.seconds,r.seconds);return i!==0?i:D(n.nanos,r.nanos)}function _e(e){return pi(e)}function pi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=xt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Xt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pi(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pi(n.fields[o])}`;return i+"}"}(e.mapValue):T()}function go(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function mi(e){return!!e&&"integerValue"in e}function os(e){return!!e&&"arrayValue"in e}function _o(e){return!!e&&"nullValue"in e}function yo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nn(e){return!!e&&"mapValue"in e}function Le(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ae(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Le(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Le(e.arrayValue.values[n]);return t}return Object.assign({},e)}function sf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Nn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Le(n)}setAll(t){let n=W.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Le(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Nn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return vt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Nn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Ae(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ut(Le(this.value))}}function Ic(e){const t=[];return Ae(e.fields,(n,r)=>{const i=new W([n]);if(Nn(r)){const s=Ic(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ht(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Z(t,0,w.min(),w.min(),w.min(),ut.empty(),0)}static newFoundDocument(t,n,r,i){return new Z(t,1,n,w.min(),r,i,0)}static newNoDocument(t,n){return new Z(t,2,n,w.min(),w.min(),ut.empty(),0)}static newUnknownDocument(t,n){return new Z(t,3,n,w.min(),w.min(),ut.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(w.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=w.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Z&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Z(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t,n){this.position=t,this.inclusive=n}}function Eo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=ge(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function To(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!vt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,n="asc"){this.field=t,this.dir=n}}function of(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{}class B extends wc{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new cf(t,n,r):n==="array-contains"?new hf(t,r):n==="in"?new df(t,r):n==="not-in"?new ff(t,r):n==="array-contains-any"?new pf(t,r):new B(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new uf(t,r):new lf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ge(n,this.value)):n!==null&&Jt(this.value)===Jt(n)&&this.matchesComparison(ge(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends wc{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new ft(t,n)}matches(t){return Ac(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ac(e){return e.op==="and"}function Rc(e){return af(e)&&Ac(e)}function af(e){for(const t of e.filters)if(t instanceof ft)return!1;return!0}function gi(e){if(e instanceof B)return e.field.canonicalString()+e.op.toString()+_e(e.value);if(Rc(e))return e.filters.map(t=>gi(t)).join(",");{const t=e.filters.map(n=>gi(n)).join(",");return`${e.op}(${t})`}}function Sc(e,t){return e instanceof B?function(r,i){return i instanceof B&&r.op===i.op&&r.field.isEqual(i.field)&&vt(r.value,i.value)}(e,t):e instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Sc(o,i.filters[a]),!0):!1}(e,t):void T()}function Pc(e){return e instanceof B?function(n){return`${n.field.canonicalString()} ${n.op} ${_e(n.value)}`}(e):e instanceof ft?function(n){return n.op.toString()+" {"+n.getFilters().map(Pc).join(" ,")+"}"}(e):"Filter"}class cf extends B{constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class uf extends B{constructor(t,n){super(t,"in",n),this.keys=Cc("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class lf extends B{constructor(t,n){super(t,"not-in",n),this.keys=Cc("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Cc(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class hf extends B{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return os(n)&&tn(n.arrayValue,this.value)}}class df extends B{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&tn(this.value.arrayValue,n)}}class ff extends B{constructor(t,n){super(t,"not-in",n)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!tn(this.value.arrayValue,n)}}class pf extends B{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!os(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function vo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new mf(e,t,n,r,i,s,o)}function as(e){const t=A(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>gi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Er(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>_e(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>_e(r)).join(",")),t.ce=n}return t.ce}function cs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!of(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Sc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!To(e.startAt,t.startAt)&&To(e.endAt,t.endAt)}function _i(e){return E.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function gf(e,t,n,r,i,s,o,a){return new gn(e,t,n,r,i,s,o,a)}function Vc(e){return new gn(e)}function Io(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Dc(e){return e.collectionGroup!==null}function Fe(e){const t=A(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Y(W.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new Wn(s,r))}),n.has(W.keyField().canonicalString())||t.le.push(new Wn(W.keyField(),r))}return t.le}function yt(e){const t=A(e);return t.he||(t.he=_f(t,Fe(e))),t.he}function _f(e,t){if(e.limitType==="F")return vo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wn(i.field,s)});const n=e.endAt?new Hn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Hn(e.startAt.position,e.startAt.inclusive):null;return vo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function yi(e,t){const n=e.filters.concat([t]);return new gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ei(e,t,n){return new gn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Tr(e,t){return cs(yt(e),yt(t))&&e.limitType===t.limitType}function bc(e){return`${as(yt(e))}|lt:${e.limitType}`}function oe(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Pc(i)).join(", ")}]`),Er(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_e(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_e(i)).join(",")),`Target(${r})`}(yt(e))}; limitType=${e.limitType})`}function vr(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Fe(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=Eo(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Fe(r),i)||r.endAt&&!function(o,a,c){const u=Eo(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Fe(r),i))}(e,t)}function yf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Nc(e){return(t,n)=>{let r=!1;for(const i of Fe(e)){const s=Ef(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ef(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?ge(c,u):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ae(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Tc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=new M(E.comparator);function Ct(){return Tf}const kc=new M(E.comparator);function ke(...e){let t=kc;for(const n of e)t=t.insert(n.key,n);return t}function Oc(e){let t=kc;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Gt(){return Ue()}function Mc(){return Ue()}function Ue(){return new Re(e=>e.toString(),(e,t)=>e.isEqual(t))}const vf=new M(E.comparator),If=new Y(E.comparator);function P(...e){let t=If;for(const n of e)t=t.add(n);return t}const wf=new Y(D);function Af(){return wf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function Lc(e){return{integerValue:""+e}}function Rf(e,t){return ef(t)?Lc(t):xc(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this._=void 0}}function Sf(e,t,n){return e instanceof en?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&is(s)&&(s=ss(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof nn?Uc(e,t):e instanceof rn?Bc(e,t):function(i,s){const o=Fc(i,s),a=wo(o)+wo(i.Ie);return mi(o)&&mi(i.Ie)?Lc(a):xc(i.serializer,a)}(e,t)}function Pf(e,t,n){return e instanceof nn?Uc(e,t):e instanceof rn?Bc(e,t):n}function Fc(e,t){return e instanceof Qn?function(r){return mi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class en extends Ir{}class nn extends Ir{constructor(t){super(),this.elements=t}}function Uc(e,t){const n=qc(t);for(const r of e.elements)n.some(i=>vt(i,r))||n.push(r);return{arrayValue:{values:n}}}class rn extends Ir{constructor(t){super(),this.elements=t}}function Bc(e,t){let n=qc(t);for(const r of e.elements)n=n.filter(i=>!vt(i,r));return{arrayValue:{values:n}}}class Qn extends Ir{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function wo(e){return U(e.integerValue||e.doubleValue)}function qc(e){return os(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n){this.field=t,this.transform=n}}function Vf(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof nn&&i instanceof nn||r instanceof rn&&i instanceof rn?me(r.elements,i.elements,vt):r instanceof Qn&&i instanceof Qn?vt(r.Ie,i.Ie):r instanceof en&&i instanceof en}(e.transform,t.transform)}class Df{constructor(t,n){this.version=t,this.transformResults=n}}class Rt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Rt}static exists(t){return new Rt(void 0,t)}static updateTime(t){return new Rt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class wr{}function jc(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new zc(e.key,Rt.none()):new _n(e.key,e.data,Rt.none());{const n=e.data,r=ut.empty();let i=new Y(W.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ne(e.key,r,new ht(i.toArray()),Rt.none())}}function bf(e,t,n){e instanceof _n?function(i,s,o){const a=i.value.clone(),c=Ro(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ne?function(i,s,o){if(!kn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ro(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll($c(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Be(e,t,n,r){return e instanceof _n?function(s,o,a,c){if(!kn(s.precondition,o))return a;const u=s.value.clone(),l=So(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ne?function(s,o,a,c){if(!kn(s.precondition,o))return a;const u=So(s.fieldTransforms,c,o),l=o.data;return l.setAll($c(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return kn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Nf(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Fc(r.transform,i||null);s!=null&&(n===null&&(n=ut.empty()),n.set(r.field,s))}return n||null}function Ao(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&me(r,i,(s,o)=>Vf(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class _n extends wr{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ne extends wr{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $c(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ro(e,t,n){const r=new Map;N(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Pf(o,a,n[i]))}return r}function So(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Sf(s,o,t))}return r}class zc extends wr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kf extends wr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&bf(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Be(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Be(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Mc();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=jc(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(w.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&me(this.mutations,t.mutations,(n,r)=>Ao(n,r))&&me(this.baseMutations,t.baseMutations,(n,r)=>Ao(n,r))}}class us{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){N(t.mutations.length===r.length);let i=function(){return vf}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new us(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Lf(e){switch(e){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Kc(e){if(e===void 0)return Tt("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new he([4294967295,4294967295],0);function Po(e){const t=Ff().encode(e),n=new Fd;return n.update(t),new Uint8Array(n.digest())}function Co(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new he([n,r],0),new he([i,s],0)]}class ls{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oe(`Invalid padding: ${n}`);if(r<0)throw new Oe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Oe(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Oe(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=he.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(he.fromNumber(r)));return i.compare(Uf)===1&&(i=new he([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Po(t),[r,i]=Co(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ls(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Po(t),[r,i]=Co(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Oe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ar(w.min(),i,new M(D),Ct(),P())}}class yn{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new yn(r,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Gc{constructor(t,n){this.targetId=t,this.fe=n}}class Hc{constructor(t,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Vo{constructor(){this.ge=0,this.pe=bo(),this.ye=nt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),n=P(),r=P();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:T()}}),new yn(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=bo()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,N(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Bf{constructor(t){this.Be=t,this.ke=new Map,this.qe=Ct(),this.Qe=Do(),this.Ke=new M(D)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:T()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(_i(s))if(r===0){const o=new E(s.path);this.We(n,o,Z.newNoDocument(o,w.min()))}else N(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Xt(r).toUint8Array()}catch(c){if(c instanceof vc)return pe("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ls(o,i,s)}catch(c){return pe(c instanceof Oe?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&_i(a.target)){const c=new E(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Z.newNoDocument(c,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=P();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new Ar(t,n,this.Ke,this.qe,r);return this.qe=Ct(),this.Qe=Do(),this.Ke=new M(D),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Vo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Y(D),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||g("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Vo),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function Do(){return new M(E.comparator)}function bo(){return new M(E.comparator)}const qf={asc:"ASCENDING",desc:"DESCENDING"},jf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$f={and:"AND",or:"OR"};class zf{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ti(e,t){return e.useProto3Json||Er(t)?t:{value:t}}function Yn(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Kf(e,t){return Yn(e,t.toTimestamp())}function Et(e){return N(!!e),w.fromTimestamp(function(n){const r=xt(n);return new q(r.seconds,r.nanos)}(e))}function hs(e,t){return vi(e,t).canonicalString()}function vi(e,t){const n=function(i){return new O(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Qc(e){const t=O.fromString(e);return N(tu(t)),t}function Ii(e,t){return hs(e.databaseId,t.path)}function zr(e,t){const n=Qc(t);if(n.get(1)!==e.databaseId.projectId)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new y(d.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new E(Xc(n))}function Yc(e,t){return hs(e.databaseId,t)}function Gf(e){const t=Qc(e);return t.length===4?O.emptyPath():Xc(t)}function wi(e){return new O(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Xc(e){return N(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function No(e,t,n){return{name:Ii(e,t),fields:n.value.mapValue.fields}}function Hf(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:T()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(N(l===void 0||typeof l=="string"),nt.fromBase64String(l||"")):(N(l===void 0||l instanceof Uint8Array),nt.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?d.UNKNOWN:Kc(u.code);return new y(l,u.message||"")}(o);n=new Hc(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=zr(e,r.document.name),s=Et(r.document.updateTime),o=r.document.createTime?Et(r.document.createTime):w.min(),a=new ut({mapValue:{fields:r.document.fields}}),c=Z.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new On(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=zr(e,r.document),s=r.readTime?Et(r.readTime):w.min(),o=Z.newNoDocument(i,s),a=r.removedTargetIds||[];n=new On([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=zr(e,r.document),s=r.removedTargetIds||[];n=new On([],s,i,null)}else{if(!("filter"in t))return T();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new xf(i,s),a=r.targetId;n=new Gc(a,o)}}return n}function Wf(e,t){let n;if(t instanceof _n)n={update:No(e,t.key,t.value)};else if(t instanceof zc)n={delete:Ii(e,t.key)};else if(t instanceof ne)n={update:No(e,t.key,t.data),updateMask:rp(t.fieldMask)};else{if(!(t instanceof kf))return T();n={verify:Ii(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof en)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof nn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof rn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Qn)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Kf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function Qf(e,t){return e&&e.length>0?(N(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Et(i.updateTime):Et(s);return o.isEqual(w.min())&&(o=Et(s)),new Df(o,i.transformResults||[])}(n,t))):[]}function Yf(e,t){return{documents:[Yc(e,t.path)]}}function Xf(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yc(e,i);const s=function(u){if(u.length!==0)return Zc(ft.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(l=>function(p){return{field:ae(p.field),direction:tp(p.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ti(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:i}}function Jf(e){let t=Gf(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){N(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];n.where&&(s=function(h){const p=Jc(h);return p instanceof ft&&Rc(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(R){return new Wn(ce(R.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Er(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(h){const p=!!h.before,m=h.values||[];return new Hn(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,m=h.values||[];return new Hn(m,p)}(n.endAt)),gf(t,i,o,s,a,"F",c,u)}function Zf(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return T()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Jc(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ce(n.unaryFilter.field);return B.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ce(n.unaryFilter.field);return B.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ce(n.unaryFilter.field);return B.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ce(n.unaryFilter.field);return B.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return B.create(ce(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return ft.create(n.compositeFilter.filters.map(r=>Jc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function tp(e){return qf[e]}function ep(e){return jf[e]}function np(e){return $f[e]}function ae(e){return{fieldPath:e.canonicalString()}}function ce(e){return W.fromServerFormat(e.fieldPath)}function Zc(e){return e instanceof B?function(n){if(n.op==="=="){if(yo(n.value))return{unaryFilter:{field:ae(n.field),op:"IS_NAN"}};if(_o(n.value))return{unaryFilter:{field:ae(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yo(n.value))return{unaryFilter:{field:ae(n.field),op:"IS_NOT_NAN"}};if(_o(n.value))return{unaryFilter:{field:ae(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ae(n.field),op:ep(n.op),value:n.value}}}(e):e instanceof ft?function(n){const r=n.getFilters().map(i=>Zc(i));return r.length===1?r[0]:{compositeFilter:{op:np(n.op),filters:r}}}(e):T()}function rp(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function tu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,n,r,i,s=w.min(),o=w.min(),a=nt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Vt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Vt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t){this.ct=t}}function sp(e){const t=Jf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ei(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this._n=new ap}addToCollectionParentIndex(t,n){return this._n.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Mt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Mt.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class ap{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Y(O.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Y(O.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ye(0)}static Ln(){return new ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.changes=new Re(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Z.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Be(r.mutation,i,ht.empty(),q.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,n,r=P()){const i=Gt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=ke();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Gt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,P()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Ct();const o=Ue(),a=function(){return Ue()}();return n.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof ne)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Be(l.mutation,u,l.mutation.getFieldMask(),q.now())):o.set(u.key,ht.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new up(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ue();let i=new M((o,a)=>o-a),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||ht.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||P()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Mc();l.forEach(p=>{if(!s.has(p)){const m=jc(n.get(p),r.get(p));m!==null&&h.set(p,m),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Dc(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):f.resolve(Gt());let a=-1,c=s;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?f.resolve():this.remoteDocumentCache.getEntry(t,l).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,P())).next(l=>({batchId:a,changes:Oc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let i=ke();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=ke();return this.indexManager.getCollectionParents(t,s).next(a=>f.forEach(a,c=>{const u=function(h,p){return new gn(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(l=>{l.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,Z.newInvalidDocument(l)))});let a=ke();return o.forEach((c,u)=>{const l=s.get(c);l!==void 0&&Be(l.mutation,u,ht.empty(),q.now()),vr(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return f.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Et(i.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:sp(i.bundledQuery),readTime:Et(i.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.overlays=new M(E.comparator),this.hr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Gt();return f.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const i=Gt(),s=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new M((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=Gt(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Gt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return f.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Mf(n,r));let s=this.hr.get(n);s===void 0&&(s=P(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.Pr=new Y(j.Ir),this.Tr=new Y(j.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new j(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new j(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new E(new O([])),r=new j(n,t),i=new j(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new E(new O([])),r=new j(n,t),i=new j(n,t+1);let s=P();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new j(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class j{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return E.comparator(t.key,n.key)||D(t.pr,n.pr)}static Er(t,n){return D(t.pr,n.pr)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Y(j.Ir)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Of(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new j(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new j(n,0),i=new j(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Y(D);return n.forEach(i=>{const s=new j(i,0),o=new j(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),f.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new j(new E(s),0);let a=new Y(D);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.pr)),!0)},o),f.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){N(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return f.forEach(n.mutations,i=>{const s=new j(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new j(n,0),i=this.wr.firstAfterOrEqual(r);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t){this.vr=t,this.docs=function(){return new M(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():Z.newInvalidDocument(n))}getEntries(t,n){let r=Ct();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Z.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Ct();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Yd(Qd(l),r)<=0||(i.has(l.key)||vr(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,n,r,i){T()}Fr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new mp(this)}getSize(t){return f.resolve(this.size)}}class mp extends cp{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t){this.persistence=t,this.Mr=new Re(n=>as(n),cs),this.lastRemoteSnapshotVersion=w.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ds,this.targetCount=0,this.Lr=ye.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),f.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new ye(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.qn(n),f.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t,n){this.Br={},this.overlays={},this.kr=new rs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new gp(this),this.indexManager=new op,this.remoteDocumentCache=function(i){return new pp(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new ip(n),this.$r=new hp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new fp(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){g("MemoryPersistence","Starting transaction:",t);const i=new yp(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class yp extends Jd{constructor(t){super(),this.currentSequenceNumber=t}}class fs{constructor(t){this.persistence=t,this.zr=new ds,this.jr=null}static Hr(t){return new fs(t)}get Jr(){if(this.jr)return this.jr;throw T()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),f.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,w.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return f.or([()=>f.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=P(),i=P();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ps(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return _l()?8:Kt.v(Ln())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ep;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(De()<=V.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",oe(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),f.resolve()):(De()<=V.DEBUG&&g("QueryEngine","Query:",oe(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(De()<=V.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",oe(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,yt(n))):f.resolve())}ji(t,n){if(Io(n))return f.resolve(null);let r=yt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ei(n,null,"F"),r=yt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=P(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(t,Ei(n,null,"F")):this.es(t,u,n,c)}))})))}Hi(t,n,r,i){return Io(n)||i.isEqual(w.min())?f.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?f.resolve(null):(De()<=V.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oe(n)),this.es(t,o,n,Wd(i,-1)).next(a=>a))})}Zi(t,n){let r=new Y(Nc(t));return n.forEach((i,s)=>{vr(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return De()<=V.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",oe(n)),this.zi.getDocumentsMatchingQuery(t,n,Mt.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new M(D),this.rs=new Re(s=>as(s),cs),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lp(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Ip(e,t,n,r){return new vp(e,t,n,r)}async function eu(e,t){const n=A(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=P();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function wp(e,t){const n=A(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,p=h.keys();let m=f.resolve();return p.forEach(R=>{m=m.next(()=>l.getEntry(c,R)).next(S=>{const v=u.docVersions.get(R);N(v!==null),S.version.compareTo(v)<0&&(h.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),l.addEntry(S)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=P();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function nu(e){const t=A(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Ap(e,t){const n=A(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,l.addedDocuments,h)));let m=p.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(nt.EMPTY_BYTE_STRING,w.min()).withLastLimboFreeSnapshotVersion(w.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),i=i.insert(h,m),function(S,v,L){return S.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,m,l)&&a.push(n.Qr.updateTargetData(s,m))});let c=Ct(),u=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Rp(s,o,t.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(w.min())){const l=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return f.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.ns=i,s))}function Rp(e,t,n){let r=P(),i=P();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Ct();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(w.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):g("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:i}})}function Sp(e,t){const n=A(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Pp(e,t){const n=A(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,f.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Vt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Ai(e,t,n){const r=A(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!mn(o))throw o;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function ko(e,t,n){const r=A(e);let i=w.min(),s=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=A(c),p=h.rs.get(l);return p!==void 0?f.resolve(h.ns.get(p)):h.Qr.getTargetData(u,l)}(r,o,yt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:w.min(),n?s:P())).next(a=>(Cp(r,yf(t),a),{documents:a,hs:s})))}function Cp(e,t,n){let r=e.ss.get(t)||w.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class Oo{constructor(){this.activeTargetIds=Af()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vp{constructor(){this.no=new Oo,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Oo,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){g("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn=null;function Kr(){return Dn===null?Dn=function(){return 268435456+Math.round(2147483648*Math.random())}():Dn++,"0x"+Dn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="WebChannelConnection";class kp extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Kr(),c=this.bo(n,r.toUriEncodedString());g("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,c,u,i).then(l=>(g("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw pe("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=bp[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Kr();return new Promise((o,a)=>{const c=new Ld;c.setWithCredentials(!0),c.listenOnce(Md.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $r.NO_ERROR:const l=c.getResponseJson();g(X,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case $r.TIMEOUT:g(X,`RPC '${t}' ${s} timed out`),a(new y(d.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const h=c.getStatus();if(g(X,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const R=function(v){const L=v.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(L)>=0?L:d.UNKNOWN}(m.status);a(new y(R,m.message))}else a(new y(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{g(X,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);g(X,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Fo(t,n,r){const i=Kr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=kd(),a=Od(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=s.join("");g(X,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let p=!1,m=!1;const R=new Np({lo:v=>{m?g(X,`Not sending because RPC '${t}' stream ${i} is closed:`,v):(p||(g(X,`Opening RPC '${t}' stream ${i} transport.`),h.open(),p=!0),g(X,`RPC '${t}' stream ${i} sending:`,v),h.send(v))},ho:()=>h.close()}),S=(v,L,K)=>{v.listen(L,st=>{try{K(st)}catch(It){setTimeout(()=>{throw It},0)}})};return S(h,Pn.EventType.OPEN,()=>{m||g(X,`RPC '${t}' stream ${i} transport opened.`)}),S(h,Pn.EventType.CLOSE,()=>{m||(m=!0,g(X,`RPC '${t}' stream ${i} transport closed`),R.Vo())}),S(h,Pn.EventType.ERROR,v=>{m||(m=!0,pe(X,`RPC '${t}' stream ${i} transport errored:`,v),R.Vo(new y(d.UNAVAILABLE,"The operation could not be completed")))}),S(h,Pn.EventType.MESSAGE,v=>{var L;if(!m){const K=v.data[0];N(!!K);const st=K,It=st.error||((L=st[0])===null||L===void 0?void 0:L.error);if(It){g(X,`RPC '${t}' stream ${i} received error:`,It);const vn=It.status;let ie=function(el){const Fs=F[el];if(Fs!==void 0)return Kc(Fs)}(vn),In=It.message;ie===void 0&&(ie=d.INTERNAL,In="Unknown error status: "+vn+" with message "+It.message),m=!0,R.Vo(new y(ie,In)),h.close()}else g(X,`RPC '${t}' stream ${i} received:`,K),R.mo(K)}}),S(a,xd.STAT_EVENT,v=>{v.stat===uo.PROXY?g(X,`RPC '${t}' stream ${i} detected buffering proxy`):v.stat===uo.NOPROXY&&g(X,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.Ro()},0),R}}function Gr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e){return new zf(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&g("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n,r,i,s,o,a,c){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ru(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Tt(n.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new y(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return g("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Op extends iu{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Hf(this.serializer,t),r=function(s){if(!("targetChange"in s))return w.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?w.min():o.readTime?Et(o.readTime):w.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=wi(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=_i(c)?{documents:Yf(s,c)}:{query:Xf(s,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Wc(s,o.resumeToken);const u=Ti(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(w.min())>0){a.readTime=Yn(s,o.snapshotVersion.toTimestamp());const u=Ti(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Zf(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=wi(this.serializer),n.removeTarget=t,this.t_(n)}}class Mp extends iu{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=Qf(t.writeResults,t.commitTime),r=Et(t.commitTime);return this.listener.T_(r,n)}return N(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=wi(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Wf(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,vi(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(d.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,vi(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(d.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Lp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Tt(n),this.g_=!1):g("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{re(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=A(c);u.v_.add(4),await En(u),u.x_.set("Unknown"),u.v_.delete(4),await Sr(u)}(this))})}),this.x_=new Lp(r,i)}}async function Sr(e){if(re(e))for(const t of e.F_)await t(!0)}async function En(e){for(const t of e.F_)await t(!1)}function su(e,t){const n=A(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),ys(n)?_s(n):Se(n).Jo()&&gs(n,t))}function ms(e,t){const n=A(e),r=Se(n);n.C_.delete(t),r.Jo()&&ou(n,t),n.C_.size===0&&(r.Jo()?r.Xo():re(n)&&n.x_.set("Unknown"))}function gs(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(w.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Se(e).c_(t)}function ou(e,t){e.O_.Oe(t),Se(e).l_(t)}function _s(e){e.O_=new Bf({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Se(e).start(),e.x_.p_()}function ys(e){return re(e)&&!Se(e).Ho()&&e.C_.size>0}function re(e){return A(e).v_.size===0}function au(e){e.O_=void 0}async function Up(e){e.C_.forEach((t,n)=>{gs(e,t)})}async function Bp(e,t){au(e),ys(e)?(e.x_.S_(t),_s(e)):e.x_.set("Unknown")}async function qp(e,t,n){if(e.x_.set("Online"),t instanceof Hc&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Xn(e,r)}else if(t instanceof On?e.O_.$e(t):t instanceof Gc?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(w.min()))try{const r=await nu(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.C_.get(u);l&&s.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.C_.get(c);if(!l)return;s.C_.set(c,l.withResumeToken(nt.EMPTY_BYTE_STRING,l.snapshotVersion)),ou(s,c);const h=new Vt(l.target,c,u,l.sequenceNumber);gs(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){g("RemoteStore","Failed to raise snapshot:",r),await Xn(e,r)}}async function Xn(e,t,n){if(!mn(t))throw t;e.v_.add(1),await En(e),e.x_.set("Offline"),n||(n=()=>nu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Sr(e)})}function cu(e,t){return t().catch(n=>Xn(e,n,t))}async function Pr(e){const t=A(e),n=Lt(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;jp(t);)try{const i=await Sp(t.localStore,r);if(i===null){t.D_.length===0&&n.Xo();break}r=i.batchId,$p(t,i)}catch(i){await Xn(t,i)}uu(t)&&lu(t)}function jp(e){return re(e)&&e.D_.length<10}function $p(e,t){e.D_.push(t);const n=Lt(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function uu(e){return re(e)&&!Lt(e).Ho()&&e.D_.length>0}function lu(e){Lt(e).start()}async function zp(e){Lt(e).d_()}async function Kp(e){const t=Lt(e);for(const n of e.D_)t.I_(n.mutations)}async function Gp(e,t,n){const r=e.D_.shift(),i=us.from(r,t,n);await cu(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Pr(e)}async function Hp(e,t){t&&Lt(e).P_&&await async function(r,i){if(function(o){return Lf(o)&&o!==d.ABORTED}(i.code)){const s=r.D_.shift();Lt(r).Zo(),await cu(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Pr(r)}}(e,t),uu(e)&&lu(e)}async function xo(e,t){const n=A(e);n.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");const r=re(n);n.v_.add(3),await En(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Sr(n)}async function Wp(e,t){const n=A(e);t?(n.v_.delete(2),await Sr(n)):t||(n.v_.add(2),await En(n),n.x_.set("Unknown"))}function Se(e){return e.N_||(e.N_=function(n,r,i){const s=A(n);return s.R_(),new Op(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Up.bind(null,e),To:Bp.bind(null,e),u_:qp.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),ys(e)?_s(e):e.x_.set("Unknown")):(await e.N_.stop(),au(e))})),e.N_}function Lt(e){return e.L_||(e.L_=function(n,r,i){const s=A(n);return s.R_(),new Mp(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:zp.bind(null,e),To:Hp.bind(null,e),E_:Kp.bind(null,e),T_:Gp.bind(null,e)}),e.F_.push(async t=>{t?(e.L_.Zo(),await Pr(e)):(await e.L_.stop(),e.D_.length>0&&(g("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Es(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ts(e,t){if(Tt("AsyncQueue",`${t}: ${e}`),mn(e))return new y(d.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.comparator=t?(n,r)=>t(n,r)||E.comparator(n.key,r.key):(n,r)=>E.comparator(n.key,r.key),this.keyedMap=ke(),this.sortedSet=new M(this.comparator)}static emptySet(t){return new de(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof de)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new de;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.B_=new M(E.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):T():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Ee{constructor(t,n,r,i,s,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ee(t,n,de.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Tr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class Yp{constructor(){this.queries=new Re(t=>bc(t),Tr),this.onlineState="Unknown",this.W_=new Set}}async function Xp(e,t){const n=A(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.K_()&&t.U_()&&(r=2):(s=new Qp,r=t.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Ts(o,`Initialization of query '${oe(t.query)}' failed`);return void t.onError(a)}n.queries.set(i,s),s.Q_.push(t),t.G_(n.onlineState),s.q_&&t.z_(s.q_)&&vs(n)}async function Jp(e,t){const n=A(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=t.U_()?0:1:!s.K_()&&t.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Zp(e,t){const n=A(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&vs(n)}function tm(e,t,n){const r=A(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function vs(e){e.W_.forEach(t=>{t.next()})}var Ri,Fo;(Fo=Ri||(Ri={})).j_="default",Fo.Cache="cache";class em{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ee(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=Ee.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Ri.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t){this.key=t}}class du{constructor(t){this.key=t}}class nm{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=P(),this.mutatedKeys=P(),this.ha=Nc(t),this.Pa=new de(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new Lo,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const p=i.get(l),m=vr(this.query,h)?h:null,R=!!p&&this.mutatedKeys.has(p.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;p&&m?p.data.isEqual(m.data)?R!==S&&(r.track({type:3,doc:m}),v=!0):this.da(p,m)||(r.track({type:2,doc:m}),v=!0,(c&&this.ha(m,c)>0||u&&this.ha(m,u)<0)&&(a=!0)):!p&&m?(r.track({type:0,doc:m}),v=!0):p&&!m&&(r.track({type:1,doc:p}),v=!0,(c||u)&&(a=!0)),v&&(m?(o=o.add(m),s=S?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,h)=>function(m,R){const S=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return S(m)-S(R)}(l.type,h.type)||this.ha(l.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],c=this.la.size===0&&this.current&&!i?1:0,u=c!==this.ca;return this.ca=c,o.length!==0||u?{snapshot:new Ee(this.query,t.Pa,s,o,t.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Lo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=P(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new du(r))}),this.la.forEach(r=>{t.has(r)||n.push(new hu(r))}),n}fa(t){this.ua=t.hs,this.la=P();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return Ee.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class rm{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class im{constructor(t){this.key=t,this.pa=!1}}class sm{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Re(a=>bc(a),Tr),this.Sa=new Map,this.ba=new Set,this.Da=new M(E.comparator),this.Ca=new Map,this.va=new ds,this.Fa={},this.Ma=new Map,this.xa=ye.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function om(e,t,n=!0){const r=yu(e);let i;const s=r.wa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await fu(r,t,n,!0),i}async function am(e,t){const n=yu(e);await fu(n,t,!0,!1)}async function fu(e,t,n,r){const i=await Pp(e.localStore,yt(t)),s=i.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await cm(e,t,s,o==="current",i.resumeToken)),e.isPrimaryClient&&n&&su(e.remoteStore,i),a}async function cm(e,t,n,r,i){e.Na=(h,p,m)=>async function(S,v,L,K){let st=v.view.Ta(L);st.Xi&&(st=await ko(S.localStore,v.query,!1).then(({documents:In})=>v.view.Ta(In,st)));const It=K&&K.targetChanges.get(v.targetId),vn=K&&K.targetMismatches.get(v.targetId)!=null,ie=v.view.applyChanges(st,S.isPrimaryClient,It,vn);return Bo(S,v.targetId,ie.Va),ie.snapshot}(e,h,p,m);const s=await ko(e.localStore,t,!0),o=new nm(t,s.hs),a=o.Ta(s.documents),c=yn.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,c);Bo(e,n,u.Va);const l=new rm(t,n,o);return e.wa.set(t,l),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),u.snapshot}async function um(e,t,n){const r=A(e),i=r.wa.get(t),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!Tr(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ai(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ms(r.remoteStore,i.targetId),Si(r,i.targetId)}).catch(pn)):(Si(r,i.targetId),await Ai(r.localStore,i.targetId,!0))}async function lm(e,t){const n=A(e),r=n.wa.get(t),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ms(n.remoteStore,r.targetId))}async function hm(e,t,n){const r=ym(e);try{const i=await function(o,a){const c=A(o),u=q.now(),l=a.reduce((m,R)=>m.add(R.key),P());let h,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let R=Ct(),S=P();return c.os.getEntries(m,l).next(v=>{R=v,R.forEach((L,K)=>{K.isValidDocument()||(S=S.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,R)).next(v=>{h=v;const L=[];for(const K of a){const st=Nf(K,h.get(K.key).overlayedDocument);st!=null&&L.push(new ne(K.key,st,Ic(st.value.mapValue),Rt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,L,a)}).next(v=>{p=v;const L=v.applyToLocalDocumentSet(h,S);return c.documentOverlayCache.saveOverlays(m,v.batchId,L)})}).then(()=>({batchId:p.batchId,changes:Oc(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.Fa[o.currentUser.toKey()];u||(u=new M(D)),u=u.insert(a,c),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Tn(r,i.changes),await Pr(r.remoteStore)}catch(i){const s=Ts(i,"Failed to persist write");n.reject(s)}}async function pu(e,t){const n=A(e);try{const r=await Ap(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(N(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?N(o.pa):i.removedDocuments.size>0&&(N(o.pa),o.pa=!1))}),await Tn(n,r,t)}catch(r){await pn(r)}}function Uo(e,t,n){const r=A(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=A(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const p of h.Q_)p.G_(a)&&(u=!0)}),u&&vs(c)}(r.eventManager,t),i.length&&r.ya.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dm(e,t,n){const r=A(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Ca.get(t),s=i&&i.key;if(s){let o=new M(E.comparator);o=o.insert(s,Z.newNoDocument(s,w.min()));const a=P().add(s),c=new Ar(w.min(),new Map,new M(D),o,a);await pu(r,c),r.Da=r.Da.remove(s),r.Ca.delete(t),Is(r)}else await Ai(r.localStore,t,!1).then(()=>Si(r,t,n)).catch(pn)}async function fm(e,t){const n=A(e),r=t.batch.batchId;try{const i=await wp(n.localStore,t);gu(n,r,null),mu(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Tn(n,i)}catch(i){await pn(i)}}async function pm(e,t,n){const r=A(e);try{const i=await function(o,a){const c=A(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(N(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);gu(r,t,n),mu(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Tn(r,i)}catch(i){await pn(i)}}function mu(e,t){(e.Ma.get(t)||[]).forEach(n=>{n.resolve()}),e.Ma.delete(t)}function gu(e,t,n){const r=A(e);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Fa[r.currentUser.toKey()]=i}}function Si(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||_u(e,r)})}function _u(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(ms(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Is(e))}function Bo(e,t,n){for(const r of n)r instanceof hu?(e.va.addReference(r.key,t),mm(e,r)):r instanceof du?(g("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||_u(e,r.key)):T()}function mm(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(g("SyncEngine","New document in limbo: "+n),e.ba.add(r),Is(e))}function Is(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new E(O.fromString(t)),r=e.xa.next();e.Ca.set(r,new im(n)),e.Da=e.Da.insert(n,r),su(e.remoteStore,new Vt(yt(Vc(n.path)),r,"TargetPurposeLimboResolution",rs._e))}}async function Tn(e,t,n){const r=A(e),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=ps.Ki(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.ya.u_(i),await async function(c,u){const l=A(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,p=>f.forEach(p.qi,m=>l.persistence.referenceDelegate.addReference(h,p.targetId,m)).next(()=>f.forEach(p.Qi,m=>l.persistence.referenceDelegate.removeReference(h,p.targetId,m)))))}catch(h){if(!mn(h))throw h;g("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const m=l.ns.get(p),R=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(R);l.ns=l.ns.insert(p,S)}}}(r.localStore,s))}async function gm(e,t){const n=A(e);if(!n.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());const r=await eu(n.localStore,t);n.currentUser=t,function(s,o){s.Ma.forEach(a=>{a.forEach(c=>{c.reject(new y(d.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Tn(n,r.us)}}function _m(e,t){const n=A(e),r=n.Ca.get(t);if(r&&r.pa)return P().add(r.key);{let i=P();const s=n.Sa.get(t);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function yu(e){const t=A(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=pu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_m.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dm.bind(null,t),t.ya.u_=Zp.bind(null,t.eventManager),t.ya.La=tm.bind(null,t.eventManager),t}function ym(e){const t=A(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=pm.bind(null,t),t}class qo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Rr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Ip(this.persistence,new Tp,t.initialUser,this.serializer)}createPersistence(t){return new _p(fs.Hr,this.serializer)}createSharedClientState(t){return new Vp}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Em{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gm.bind(null,this.syncEngine),await Wp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Yp}()}createDatastore(t){const n=Rr(t.databaseInfo.databaseId),r=function(s){return new kp(s)}(t.databaseInfo);return function(s,o,a,c){return new xp(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Fp(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Uo(this.syncEngine,n,0),function(){return Mo.D()?new Mo:new Dp}())}createSyncEngine(t,n){return function(i,s,o,a,c,u,l){const h=new sm(i,s,o,a,c,u);return l&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=A(r);g("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await En(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):Tt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=J.UNAUTHENTICATED,this.clientId=Ec.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{g("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(g("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ts(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Hr(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function jo(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wm(e);g("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>xo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>xo(t.remoteStore,i)),e._onlineComponents=t}function Im(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function wm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Im(n))throw n;pe("Error using user provided cache. Falling back to memory cache: "+n),await Hr(e,new qo)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await Hr(e,new qo);return e._offlineComponents}async function Eu(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await jo(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await jo(e,new Em))),e._onlineComponents}function Am(e){return Eu(e).then(t=>t.syncEngine)}async function Rm(e){const t=await Eu(e),n=t.eventManager;return n.onListen=om.bind(null,t.syncEngine),n.onUnlisten=um.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=am.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=lm.bind(null,t.syncEngine),n}function Sm(e,t,n={}){const r=new At;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Tm({next:p=>{o.enqueueAndForget(()=>Jp(s,h)),p.fromCache&&c.source==="server"?u.reject(new y(d.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new em(a,l,{includeMetadataChanges:!0,ta:!0});return Xp(s,h)}(await Rm(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t,n){if(!n)throw new y(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Pm(e,t,n,r){if(t===!0&&r===!0)throw new y(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function zo(e){if(!E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ko(e){if(E.isDocumentKey(e))throw new y(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Jn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cr(e);throw new y(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Vr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Go(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ud;switch(r.type){case"firstParty":return new $d(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$o.get(n);r&&(g("ComponentProvider","Removing Datastore"),$o.delete(n),r.terminate())}(this),Promise.resolve()}}function Cm(e,t,n,r={}){var i;const s=(e=Jn(e,Vr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=J.MOCK_USER;else{a=pl(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new y(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new J(u)}e._authCredentials=new Bd(new yc(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Pe(this.firestore,t,this._query)}}class lt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new lt(this.firestore,t,this._key)}}class Nt extends Pe{constructor(t,n,r){super(t,n,Vc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new lt(this.firestore,null,new E(t))}withConverter(t){return new Nt(this.firestore,t,this._path)}}function w_(e,t,...n){if(e=kt(e),vu("collection","path",t),e instanceof Vr){const r=O.fromString(t,...n);return Ko(r),new Nt(e,null,r)}{if(!(e instanceof lt||e instanceof Nt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return Ko(r),new Nt(e.firestore,null,r)}}function Vm(e,t,...n){if(e=kt(e),arguments.length===1&&(t=Ec.newId()),vu("doc","path",t),e instanceof Vr){const r=O.fromString(t,...n);return zo(r),new lt(e,null,new E(r))}{if(!(e instanceof lt||e instanceof Nt))throw new y(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(O.fromString(t,...n));return zo(r),new lt(e.firestore,e instanceof Nt?e.converter:null,new E(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new ru(this,"async_queue_retry"),this.cu=()=>{const n=Gr();n&&g("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Gr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=Gr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new At;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!mn(t))throw t;g("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const i=Es.createAndSchedule(this,t,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&T()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class ws extends Vr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Dm}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wu(this),this._firestoreClient.terminate()}}function bm(e,t){const n=typeof e=="object"?e:da(),r=typeof e=="string"?e:t||"(default)",i=sn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dl("firestore");s&&Cm(i,...s)}return i}function Iu(e){return e._firestoreClient||wu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function wu(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,u,l){return new rf(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Tu(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new vm(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Te(nt.fromBase64String(t))}catch(n){throw new y(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Te(nt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=/^__.*__$/;class km{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,n,this.fieldTransforms):new _n(t,this.data,n,this.fieldTransforms)}}function Au(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Ps{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Ps(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.mu({path:r,gu:!1});return i.pu(t),i}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return Zn(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(Au(this.Vu)&&Nm.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class Om{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Rr(t)}Cu(t,n,r,i=!1){return new Ps({Vu:t,methodName:n,Du:r,path:W.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ru(e){const t=e._freezeSettings(),n=Rr(e._databaseId);return new Om(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Mm(e,t,n,r,i,s={}){const o=e.Cu(s.merge||s.mergeFields?2:0,t,n,i);Cu("Data must be an object, but it was:",o,r);const a=Su(r,o);let c,u;if(s.merge)c=new ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const p=Lm(t,h,n);if(!o.contains(p))throw new y(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Um(l,p)||l.push(p)}c=new ht(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new km(new ut(a),c,u)}class Cs extends Rs{_toFieldTransform(t){return new Cf(t.path,new en)}isEqual(t){return t instanceof Cs}}function xm(e,t,n,r=!1){return Vs(n,e.Cu(r?4:3,t))}function Vs(e,t){if(Pu(e=kt(e)))return Cu("Unsupported field value:",t,e),Su(e,t);if(e instanceof Rs)return function(r,i){if(!Au(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Vs(a,i.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=q.fromDate(r);return{timestampValue:Yn(i.serializer,s)}}if(r instanceof q){const s=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yn(i.serializer,s)}}if(r instanceof Ss)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Te)return{bytesValue:Wc(i.serializer,r._byteString)};if(r instanceof lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:hs(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${Cr(r)}`)}(e,t)}function Su(e,t){const n={};return Tc(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ae(e,(r,i)=>{const s=Vs(i,t.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Pu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof q||e instanceof Ss||e instanceof Te||e instanceof lt||e instanceof Rs)}function Cu(e,t,n){if(!Pu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Cr(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function Lm(e,t,n){if((t=kt(t))instanceof As)return t._internalPath;if(typeof t=="string")return Vu(e,t);throw Zn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Fm=new RegExp("[~\\*/\\[\\]]");function Vu(e,t,n){if(t.search(Fm)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new As(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Zn(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new y(d.INVALID_ARGUMENT,a+e+c)}function Um(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Bm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(bu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bm extends Du{data(){return super.data()}}function bu(e,t){return typeof t=="string"?Vu(e,t):t instanceof As?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new y(d.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ds{}class jm extends Ds{}function A_(e,t,...n){let r=[];t instanceof Ds&&r.push(t),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof Ns).length,a=s.filter(c=>c instanceof bs).length;if(o>1||o>0&&a>0)throw new y(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class bs extends jm{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new bs(t,n,r)}_apply(t){const n=this._parse(t);return Nu(t._query,n),new Pe(t.firestore,t.converter,yi(t._query,n))}_parse(t){const n=Ru(t.firestore);return function(s,o,a,c,u,l,h){let p;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Wo(h,l);const m=[];for(const R of h)m.push(Ho(c,s,R));p={arrayValue:{values:m}}}else p=Ho(c,s,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Wo(h,l),p=xm(a,o,h,l==="in"||l==="not-in");return B.create(u,l,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Ns extends Ds{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Ns(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ft.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)Nu(o,c),o=yi(o,c)}(t._query,n),new Pe(t.firestore,t.converter,yi(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ho(e,t,n){if(typeof(n=kt(n))=="string"){if(n==="")throw new y(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dc(t)&&n.indexOf("/")!==-1)throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(O.fromString(n));if(!E.isDocumentKey(r))throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return go(e,new E(r))}if(n instanceof lt)return go(e,n._key);throw new y(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cr(n)}.`)}function Wo(e,t){if(!Array.isArray(e)||e.length===0)throw new y(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nu(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class $m{convertValue(t,n="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw T()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ae(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Ss(U(t.latitude),U(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ss(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Je(t));default:return null}}convertTimestamp(t){const n=xt(t);return new q(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=O.fromString(t);N(tu(r));const i=new Ze(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(n)||Tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Km extends Du{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(bu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Mn extends Km{data(t={}){return super.data(t)}}class Gm{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new bn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Mn(this._firestore,this._userDataWriter,r.key,r,new bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(d.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const c=new Mn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Mn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new bn(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Hm(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Hm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}class Wm extends $m{constructor(t){super(),this.firestore=t}convertBytes(t){return new Te(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function R_(e){e=Jn(e,Pe);const t=Jn(e.firestore,ws),n=Iu(t),r=new Wm(t);return qm(e._query),Sm(n,e._query).then(i=>new Gm(t,r,e,i))}function S_(e,t){const n=Jn(e.firestore,ws),r=Vm(e),i=zm(e.converter,t);return Qm(n,[Mm(Ru(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Rt.exists(!1))]).then(()=>r)}function Qm(e,t){return function(r,i){const s=new At;return r.asyncQueue.enqueueAndForget(async()=>hm(await Am(r),i,s)),s.promise}(Iu(e),t)}function P_(){return new Cs("serverTimestamp")}(function(t,n=!0){(function(i){we=i})(vh),Ot(new St("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ws(new qd(r.getProvider("auth-internal")),new Kd(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new y(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ze(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),_t(lo,"4.5.1",t),_t(lo,"4.5.1","esm2017")})();const ku="@firebase/installations",ks="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=1e4,Mu=`w:${ks}`,xu="FIS_v2",Ym="https://firebaseinstallations.googleapis.com/v1",Xm=60*60*1e3,Jm="installations",Zm="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zt=new nr(Jm,Zm,tg);function Lu(e){return e instanceof Ft&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu({projectId:e}){return`${Ym}/projects/${e}/installations`}function Uu(e){return{token:e.token,requestStatus:2,expiresIn:ng(e.expiresIn),creationTime:Date.now()}}async function Bu(e,t){const r=(await t.json()).error;return Zt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qu({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function eg(e,{refreshToken:t}){const n=qu(e);return n.append("Authorization",rg(t)),n}async function ju(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ng(e){return Number(e.replace("s","000"))}function rg(e){return`${xu} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Fu(e),i=qu(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:xu,appId:e.appId,sdkVersion:Mu},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ju(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Uu(u.authToken)}}else throw await Bu("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=/^[cdef][\w-]{21}$/,Pi="";function ag(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=cg(e);return og.test(n)?n:Pi}catch{return Pi}}function cg(e){return sg(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map;function Ku(e,t){const n=Dr(e);Gu(n,t),ug(n,t)}function Gu(e,t){const n=zu.get(e);if(n)for(const r of n)r(t)}function ug(e,t){const n=lg();n&&n.postMessage({key:e,fid:t}),hg()}let Ht=null;function lg(){return!Ht&&"BroadcastChannel"in self&&(Ht=new BroadcastChannel("[Firebase] FID Change"),Ht.onmessage=e=>{Gu(e.data.key,e.data.fid)}),Ht}function hg(){zu.size===0&&Ht&&(Ht.close(),Ht=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firebase-installations-database",fg=1,te="firebase-installations-store";let Wr=null;function Os(){return Wr||(Wr=la(dg,fg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(te)}}})),Wr}async function tr(e,t){const n=Dr(e),i=(await Os()).transaction(te,"readwrite"),s=i.objectStore(te),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Ku(e,t.fid),t}async function Hu(e){const t=Dr(e),r=(await Os()).transaction(te,"readwrite");await r.objectStore(te).delete(t),await r.done}async function br(e,t){const n=Dr(e),i=(await Os()).transaction(te,"readwrite"),s=i.objectStore(te),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&Ku(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(e){let t;const n=await br(e.appConfig,r=>{const i=pg(r),s=mg(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Pi?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pg(e){const t=e||{fid:ag(),registrationStatus:0};return Wu(t)}function mg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=gg(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_g(e)}:{installationEntry:t}}async function gg(e,t){try{const n=await ig(e,t);return tr(e.appConfig,n)}catch(n){throw Lu(n)&&n.customData.serverCode===409?await Hu(e.appConfig):await tr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _g(e){let t=await Qo(e.appConfig);for(;t.registrationStatus===1;)await $u(100),t=await Qo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ms(e);return r||n}return t}function Qo(e){return br(e,t=>{if(!t)throw Zt.create("installation-not-found");return Wu(t)})}function Wu(e){return yg(e)?{fid:e.fid,registrationStatus:0}:e}function yg(e){return e.registrationStatus===1&&e.registrationTime+Ou<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eg({appConfig:e,heartbeatServiceProvider:t},n){const r=Tg(e,n),i=eg(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Mu,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ju(()=>fetch(r,a));if(c.ok){const u=await c.json();return Uu(u)}else throw await Bu("Generate Auth Token",c)}function Tg(e,{fid:t}){return`${Fu(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e,t=!1){let n;const r=await br(e.appConfig,s=>{if(!Qu(s))throw Zt.create("not-registered");const o=s.authToken;if(!t&&wg(o))return s;if(o.requestStatus===1)return n=vg(e,t),s;{if(!navigator.onLine)throw Zt.create("app-offline");const a=Rg(s);return n=Ig(e,a),a}});return n?await n:r.authToken}async function vg(e,t){let n=await Yo(e.appConfig);for(;n.authToken.requestStatus===1;)await $u(100),n=await Yo(e.appConfig);const r=n.authToken;return r.requestStatus===0?xs(e,t):r}function Yo(e){return br(e,t=>{if(!Qu(t))throw Zt.create("not-registered");const n=t.authToken;return Sg(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ig(e,t){try{const n=await Eg(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await tr(e.appConfig,r),n}catch(n){if(Lu(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hu(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tr(e.appConfig,r)}throw n}}function Qu(e){return e!==void 0&&e.registrationStatus===2}function wg(e){return e.requestStatus===2&&!Ag(e)}function Ag(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Xm}function Rg(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Sg(e){return e.requestStatus===1&&e.requestTime+Ou<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pg(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ms(t);return r?r.catch(console.error):xs(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(e,t=!1){const n=e;return await Vg(n),(await xs(n,t)).token}async function Vg(e){const{registrationPromise:t}=await Ms(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(e){if(!e||!e.options)throw Qr("App Configuration");if(!e.name)throw Qr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Qr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Qr(e){return Zt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="installations",bg="installations-internal",Ng=e=>{const t=e.getProvider("app").getImmediate(),n=Dg(t),r=sn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},kg=e=>{const t=e.getProvider("app").getImmediate(),n=sn(t,Yu).getImmediate();return{getId:()=>Pg(n),getToken:i=>Cg(n,i)}};function Og(){Ot(new St(Yu,Ng,"PUBLIC")),Ot(new St(bg,kg,"PRIVATE"))}Og();_t(ku,ks);_t(ku,ks,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="analytics",Mg="firebase_id",xg="origin",Lg=60*1e3,Fg="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ls="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new Di("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ot=new nr("analytics","Analytics",Ug);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e){if(!e.startsWith(Ls)){const t=ot.create("invalid-gtag-resource",{gtagURL:e});return it.warn(t.message),""}return e}function Xu(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function qg(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function jg(e,t){const n=qg("firebase-js-sdk-policy",{createScriptURL:Bg}),r=document.createElement("script"),i=`${Ls}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function $g(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function zg(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const c=(await Xu(n)).find(u=>u.measurementId===i);c&&await t[c.appId]}}catch(a){it.error(a)}e("config",i,s)}async function Kg(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Xu(n);for(const c of o){const u=a.find(h=>h.measurementId===c),l=u&&t[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){it.error(s)}}function Gg(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,c]=o;await Kg(e,t,n,a,c)}else if(s==="config"){const[a,c]=o;await zg(e,t,n,r,a,c)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,c,u]=o;e("get",a,c,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){it.error(a)}}return i}function Hg(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Gg(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Wg(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ls)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=30,Yg=1e3;class Xg{constructor(t={},n=Yg){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Ju=new Xg;function Jg(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Zg(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Jg(r)},s=Fg.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function t_(e,t=Ju,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ot.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new r_;return setTimeout(async()=>{a.abort()},n!==void 0?n:Lg),Zu({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Zu(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ju){var s;const{appId:o,measurementId:a}=e;try{await e_(r,t)}catch(c){if(a)return it.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Zg(e);return i.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!n_(u)){if(i.deleteThrottleMetadata(o),a)return it.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?qs(n,i.intervalMillis,Qg):qs(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,h),it.debug(`Calling attemptFetch again in ${l} millis`),Zu(e,h,r,i)}}function e_(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function n_(e){if(!(e instanceof Ft)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class r_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function i_(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(){if(Vi())try{await aa()}catch(e){return it.warn(ot.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return it.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function o_(e,t,n,r,i,s,o){var a;const c=t_(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&it.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>it.error(m)),t.push(c);const u=s_().then(m=>{if(m)return r.getId()}),[l,h]=await Promise.all([c,u]);Wg(s)||jg(s,l.measurementId),i("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[xg]="firebase",p.update=!0,h!=null&&(p[Mg]=h),i("config",l.measurementId,p),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this.app=t}_delete(){return delete qe[this.app.options.appId],Promise.resolve()}}let qe={},Xo=[];const Jo={};let Yr="dataLayer",c_="gtag",Zo,tl,ta=!1;function u_(){const e=[];if(gl()&&e.push("This is a browser extension environment."),yl()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:t});it.warn(n.message)}}function l_(e,t,n){u_();const r=e.options.appId;if(!r)throw ot.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)it.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(qe[r]!=null)throw ot.create("already-exists",{id:r});if(!ta){$g(Yr);const{wrappedGtag:s,gtagCore:o}=Hg(qe,Xo,Jo,Yr,c_);tl=s,Zo=o,ta=!0}return qe[r]=o_(e,Xo,Jo,t,Zo,Yr,n),new a_(e)}function h_(e=da()){e=kt(e);const t=sn(e,er);return t.isInitialized()?t.getImmediate():d_(e)}function d_(e,t={}){const n=sn(e,er);if(n.isInitialized()){const i=n.getImmediate();if(Fn(t,n.getOptions()))return i;throw ot.create("already-initialized")}return n.initialize({options:t})}function f_(e,t,n,r){e=kt(e),i_(tl,qe[e.app.options.appId],t,n,r).catch(i=>it.error(i))}const ea="@firebase/analytics",na="0.10.2";function p_(){Ot(new St(er,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return l_(r,i,n)},"PUBLIC")),Ot(new St("analytics-internal",e,"PRIVATE")),_t(ea,na),_t(ea,na,"esm2017");function e(t){try{const n=t.getProvider(er).getImmediate();return{logEvent:(r,i,s)=>f_(n,r,i,s)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}p_();var m_={};const g_={apiKey:m_.FIREBASEAPIKEY,projectId:"moody-13597",authDomain:"moody-13597.firebaseapp.com",storageBucket:"moody-13597.appspot.com",messagingSenderId:"969808116822",appId:"1:969808116822:web:6c18fe0e40f8f0c27f8ff7"},ra=ha(g_),C_=bm(),V_=ra.name&&typeof window<"u"?h_(ra):null;export{V_ as a,E_ as b,w_ as c,C_ as d,S_ as e,y_ as f,R_ as g,f_ as l,A_ as q,P_ as s};
