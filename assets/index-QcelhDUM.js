(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const rm=()=>{};var cu={};/**
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
 */const jh=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let o=i.charCodeAt(r);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},sm=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const o=i[e++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=i[e++];t[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=i[e++],u=i[e++],f=i[e++],m=((o&7)<<18|(a&63)<<12|(u&63)<<6|f&63)-65536;t[r++]=String.fromCharCode(55296+(m>>10)),t[r++]=String.fromCharCode(56320+(m&1023))}else{const a=i[e++],u=i[e++];t[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<i.length;o+=3){const a=i[o],u=o+1<i.length,f=u?i[o+1]:0,m=o+2<i.length,g=m?i[o+2]:0,v=a>>2,T=(a&3)<<4|f>>4;let P=(f&15)<<2|g>>6,M=g&63;m||(M=64,u||(P=64)),r.push(e[v],e[T],e[P],e[M])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(jh(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):sm(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<i.length;){const a=e[i.charAt(o++)],f=o<i.length?e[i.charAt(o)]:0;++o;const g=o<i.length?e[i.charAt(o)]:64;++o;const T=o<i.length?e[i.charAt(o)]:64;if(++o,a==null||f==null||g==null||T==null)throw new om;const P=a<<2|f>>4;if(r.push(P),g!==64){const M=f<<4&240|g>>2;if(r.push(M),T!==64){const z=g<<6&192|T;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class om extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const am=function(i){const t=jh(i);return Wh.encodeByteArray(t,!0)},ia=function(i){return am(i).replace(/\./g,"")},$h=function(i){try{return Wh.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lm=()=>cm().__FIREBASE_DEFAULTS__,um=()=>{if(typeof process>"u"||typeof cu>"u")return;const i=cu.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},hm=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&$h(i[1]);return t&&JSON.parse(t)},Ea=()=>{try{return rm()||lm()||um()||hm()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Gh=i=>{var t,e;return(e=(t=Ea())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},dm=i=>{const t=Gh(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Zh=()=>{var i;return(i=Ea())==null?void 0:i.config},Kh=i=>{var t;return(t=Ea())==null?void 0:t[`_${i}`]};/**
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
 */class fm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function pm(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",o=i.iat||0,a=i.sub||i.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ia(JSON.stringify(e)),ia(JSON.stringify(u)),""].join(".")}/**
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
 */function ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function _m(){var t;const i=(t=Ea())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ym(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wm(){const i=ie();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Tm(){return!_m()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Em(){try{return typeof indexedDB=="object"}catch{return!1}}function Im(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var a;t(((a=o.error)==null?void 0:a.message)||"")}}catch(e){t(e)}})}/**
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
 */const Am="FirebaseError";class Pn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Am,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},o=`${this.service}/${t}`,a=this.errors[t],u=a?bm(a,r):"Error",f=`${this.serviceName}: ${u} (${o}).`;return new Pn(o,f,r)}}function bm(i,t){return i.replace(Pm,(e,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const Pm=/\{\$([^}]+)}/g;function Sm(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Ci(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const o of e){if(!r.includes(o))return!1;const a=i[o],u=t[o];if(lu(a)&&lu(u)){if(!Ci(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!e.includes(o))return!1;return!0}function lu(i){return i!==null&&typeof i=="object"}/**
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
 */function js(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _s(i){const t={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");t[decodeURIComponent(o)]=decodeURIComponent(a)}}),t}function gs(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function Cm(i,t){const e=new Rm(i,t);return e.subscribe.bind(e)}class Rm{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let o;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");km(t,["next","error","complete"])?o=t:o={next:t,error:e,complete:r},o.next===void 0&&(o.next=Ya),o.error===void 0&&(o.error=Ya),o.complete===void 0&&(o.complete=Ya);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function km(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function Ya(){}/**
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
 */function re(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ws(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qh(i){return(await fetch(i,{credentials:"include"})).ok}class Ri{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ti="[DEFAULT]";/**
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
 */class Lm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new fm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Dm(t))try{this.getOrInitializeService({instanceIdentifier:Ti})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(t=Ti){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ti){return this.instances.has(t)}getOptions(t=Ti){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[a,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);r===f&&u.resolve(o)}return o}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&t(a,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const o of r)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xm(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ti){return this.component?this.component.multipleInstances?t:Ti:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xm(i){return i===Ti?void 0:i}function Dm(i){return i.instantiationMode==="EAGER"}/**
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
 */class Om{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Lm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ft;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ft||(ft={}));const Nm={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},Mm=ft.INFO,Vm={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},Fm=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),o=Vm[t];if(o)console[o](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qc{constructor(t){this.name=t,this._logLevel=Mm,this._logHandler=Fm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...t),this._logHandler(this,ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...t),this._logHandler(this,ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...t),this._logHandler(this,ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...t),this._logHandler(this,ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...t),this._logHandler(this,ft.ERROR,...t)}}const Um=(i,t)=>t.some(e=>i instanceof e);let uu,hu;function Bm(){return uu||(uu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zm(){return hu||(hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jh=new WeakMap,pc=new WeakMap,Yh=new WeakMap,Xa=new WeakMap,Hc=new WeakMap;function qm(i){const t=new Promise((e,r)=>{const o=()=>{i.removeEventListener("success",a),i.removeEventListener("error",u)},a=()=>{e(qn(i.result)),o()},u=()=>{r(i.error),o()};i.addEventListener("success",a),i.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Jh.set(e,i)}).catch(()=>{}),Hc.set(t,i),t}function Hm(i){if(pc.has(i))return;const t=new Promise((e,r)=>{const o=()=>{i.removeEventListener("complete",a),i.removeEventListener("error",u),i.removeEventListener("abort",u)},a=()=>{e(),o()},u=()=>{r(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",a),i.addEventListener("error",u),i.addEventListener("abort",u)});pc.set(i,t)}let mc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return pc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Yh.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qn(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function jm(i){mc=i(mc)}function Wm(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call(tc(this),t,...e);return Yh.set(r,t.sort?t.sort():[t]),qn(r)}:zm().includes(i)?function(...t){return i.apply(tc(this),t),qn(Jh.get(this))}:function(...t){return qn(i.apply(tc(this),t))}}function $m(i){return typeof i=="function"?Wm(i):(i instanceof IDBTransaction&&Hm(i),Um(i,Bm())?new Proxy(i,mc):i)}function qn(i){if(i instanceof IDBRequest)return qm(i);if(Xa.has(i))return Xa.get(i);const t=$m(i);return t!==i&&(Xa.set(i,t),Hc.set(t,i)),t}const tc=i=>Hc.get(i);function Gm(i,t,{blocked:e,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(i,t),f=qn(u);return r&&u.addEventListener("upgradeneeded",m=>{r(qn(u.result),m.oldVersion,m.newVersion,qn(u.transaction),m)}),e&&u.addEventListener("blocked",m=>e(m.oldVersion,m.newVersion,m)),f.then(m=>{a&&m.addEventListener("close",()=>a()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const Zm=["get","getKey","getAll","getAllKeys","count"],Km=["put","add","delete","clear"],ec=new Map;function du(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(ec.get(t))return ec.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,o=Km.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Zm.includes(e)))return;const a=async function(u,...f){const m=this.transaction(u,o?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[e](...f),o&&m.done]))[0]};return ec.set(t,a),a}jm(i=>({...i,get:(t,e,r)=>du(t,e)||i.get(t,e,r),has:(t,e)=>!!du(t,e)||i.has(t,e)}));/**
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
 */class Qm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Jm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Jm(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _c="@firebase/app",fu="0.14.12";/**
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
 */const En=new qc("@firebase/app"),Ym="@firebase/app-compat",Xm="@firebase/analytics-compat",t_="@firebase/analytics",e_="@firebase/app-check-compat",n_="@firebase/app-check",i_="@firebase/auth",r_="@firebase/auth-compat",s_="@firebase/database",o_="@firebase/data-connect",a_="@firebase/database-compat",c_="@firebase/functions",l_="@firebase/functions-compat",u_="@firebase/installations",h_="@firebase/installations-compat",d_="@firebase/messaging",f_="@firebase/messaging-compat",p_="@firebase/performance",m_="@firebase/performance-compat",__="@firebase/remote-config",g_="@firebase/remote-config-compat",y_="@firebase/storage",v_="@firebase/storage-compat",w_="@firebase/firestore",T_="@firebase/ai",E_="@firebase/firestore-compat",I_="firebase",A_="12.13.0";/**
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
 */const gc="[DEFAULT]",b_={[_c]:"fire-core",[Ym]:"fire-core-compat",[t_]:"fire-analytics",[Xm]:"fire-analytics-compat",[n_]:"fire-app-check",[e_]:"fire-app-check-compat",[i_]:"fire-auth",[r_]:"fire-auth-compat",[s_]:"fire-rtdb",[o_]:"fire-data-connect",[a_]:"fire-rtdb-compat",[c_]:"fire-fn",[l_]:"fire-fn-compat",[u_]:"fire-iid",[h_]:"fire-iid-compat",[d_]:"fire-fcm",[f_]:"fire-fcm-compat",[p_]:"fire-perf",[m_]:"fire-perf-compat",[__]:"fire-rc",[g_]:"fire-rc-compat",[y_]:"fire-gcs",[v_]:"fire-gcs-compat",[w_]:"fire-fst",[E_]:"fire-fst-compat",[T_]:"fire-vertex","fire-js":"fire-js",[I_]:"fire-js-all"};/**
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
 */const ra=new Map,P_=new Map,yc=new Map;function pu(i,t){try{i.container.addComponent(t)}catch(e){En.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Sr(i){const t=i.name;if(yc.has(t))return En.debug(`There were multiple attempts to register component ${t}.`),!1;yc.set(t,i);for(const e of ra.values())pu(e,i);for(const e of P_.values())pu(e,i);return!0}function jc(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function ge(i){return i==null?!1:i.settings!==void 0}/**
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
 */const S_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new Hs("app","Firebase",S_);/**
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
 */class C_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=A_;function Xh(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r={name:gc,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw Hn.create("bad-app-name",{appName:String(o)});if(e||(e=Zh()),!e)throw Hn.create("no-options");const a=ra.get(o);if(a){if(Ci(e,a.options)&&Ci(r,a.config))return a;throw Hn.create("duplicate-app",{appName:o})}const u=new Om(o);for(const m of yc.values())u.addComponent(m);const f=new C_(e,r,u);return ra.set(o,f),f}function td(i=gc){const t=ra.get(i);if(!t&&i===gc&&Zh())return Xh();if(!t)throw Hn.create("no-app",{appName:i});return t}function jn(i,t,e){let r=b_[i]??i;e&&(r+=`-${e}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${r}" with version "${t}":`];o&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),En.warn(u.join(" "));return}Sr(new Ri(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const R_="firebase-heartbeat-database",k_=1,Rs="firebase-heartbeat-store";let nc=null;function ed(){return nc||(nc=Gm(R_,k_,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Rs)}catch(e){console.warn(e)}}}}).catch(i=>{throw Hn.create("idb-open",{originalErrorMessage:i.message})})),nc}async function L_(i){try{const e=(await ed()).transaction(Rs),r=await e.objectStore(Rs).get(nd(i));return await e.done,r}catch(t){if(t instanceof Pn)En.warn(t.message);else{const e=Hn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});En.warn(e.message)}}}async function mu(i,t){try{const r=(await ed()).transaction(Rs,"readwrite");await r.objectStore(Rs).put(t,nd(i)),await r.done}catch(e){if(e instanceof Pn)En.warn(e.message);else{const r=Hn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});En.warn(r.message)}}}function nd(i){return`${i.name}!${i.options.appId}`}/**
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
 */const x_=1024,D_=30;class O_{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new M_(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=_u();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>D_){const u=V_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_u(),{heartbeatsToSend:r,unsentEntries:o}=N_(this._heartbeatsCache.heartbeats),a=ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return En.warn(e),""}}}function _u(){return new Date().toISOString().substring(0,10)}function N_(i,t=x_){const e=[];let r=i.slice();for(const o of i){const a=e.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),gu(e)>t){a.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),gu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class M_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Em()?Im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await L_(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return mu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return mu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function gu(i){return ia(JSON.stringify({version:2,heartbeats:i})).length}function V_(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let r=1;r<i.length;r++)i[r].date<e&&(e=i[r].date,t=r);return t}/**
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
 */function F_(i){Sr(new Ri("platform-logger",t=>new Qm(t),"PRIVATE")),Sr(new Ri("heartbeat",t=>new O_(t),"PRIVATE")),jn(_c,fu,i),jn(_c,fu,"esm2020"),jn("fire-js","")}F_("");var U_="firebase",B_="12.13.0";/**
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
 */jn(U_,B_,"app");var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,id;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,E){function A(){}A.prototype=E.prototype,C.F=E.prototype,C.prototype=new A,C.prototype.constructor=C,C.D=function(R,S,k){for(var b=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)b[Ct-2]=arguments[Ct];return E.prototype[S].apply(R,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,E,A){A||(A=0);const R=Array(16);if(typeof E=="string")for(var S=0;S<16;++S)R[S]=E.charCodeAt(A++)|E.charCodeAt(A++)<<8|E.charCodeAt(A++)<<16|E.charCodeAt(A++)<<24;else for(S=0;S<16;++S)R[S]=E[A++]|E[A++]<<8|E[A++]<<16|E[A++]<<24;E=C.g[0],A=C.g[1],S=C.g[2];let k=C.g[3],b;b=E+(k^A&(S^k))+R[0]+3614090360&4294967295,E=A+(b<<7&4294967295|b>>>25),b=k+(S^E&(A^S))+R[1]+3905402710&4294967295,k=E+(b<<12&4294967295|b>>>20),b=S+(A^k&(E^A))+R[2]+606105819&4294967295,S=k+(b<<17&4294967295|b>>>15),b=A+(E^S&(k^E))+R[3]+3250441966&4294967295,A=S+(b<<22&4294967295|b>>>10),b=E+(k^A&(S^k))+R[4]+4118548399&4294967295,E=A+(b<<7&4294967295|b>>>25),b=k+(S^E&(A^S))+R[5]+1200080426&4294967295,k=E+(b<<12&4294967295|b>>>20),b=S+(A^k&(E^A))+R[6]+2821735955&4294967295,S=k+(b<<17&4294967295|b>>>15),b=A+(E^S&(k^E))+R[7]+4249261313&4294967295,A=S+(b<<22&4294967295|b>>>10),b=E+(k^A&(S^k))+R[8]+1770035416&4294967295,E=A+(b<<7&4294967295|b>>>25),b=k+(S^E&(A^S))+R[9]+2336552879&4294967295,k=E+(b<<12&4294967295|b>>>20),b=S+(A^k&(E^A))+R[10]+4294925233&4294967295,S=k+(b<<17&4294967295|b>>>15),b=A+(E^S&(k^E))+R[11]+2304563134&4294967295,A=S+(b<<22&4294967295|b>>>10),b=E+(k^A&(S^k))+R[12]+1804603682&4294967295,E=A+(b<<7&4294967295|b>>>25),b=k+(S^E&(A^S))+R[13]+4254626195&4294967295,k=E+(b<<12&4294967295|b>>>20),b=S+(A^k&(E^A))+R[14]+2792965006&4294967295,S=k+(b<<17&4294967295|b>>>15),b=A+(E^S&(k^E))+R[15]+1236535329&4294967295,A=S+(b<<22&4294967295|b>>>10),b=E+(S^k&(A^S))+R[1]+4129170786&4294967295,E=A+(b<<5&4294967295|b>>>27),b=k+(A^S&(E^A))+R[6]+3225465664&4294967295,k=E+(b<<9&4294967295|b>>>23),b=S+(E^A&(k^E))+R[11]+643717713&4294967295,S=k+(b<<14&4294967295|b>>>18),b=A+(k^E&(S^k))+R[0]+3921069994&4294967295,A=S+(b<<20&4294967295|b>>>12),b=E+(S^k&(A^S))+R[5]+3593408605&4294967295,E=A+(b<<5&4294967295|b>>>27),b=k+(A^S&(E^A))+R[10]+38016083&4294967295,k=E+(b<<9&4294967295|b>>>23),b=S+(E^A&(k^E))+R[15]+3634488961&4294967295,S=k+(b<<14&4294967295|b>>>18),b=A+(k^E&(S^k))+R[4]+3889429448&4294967295,A=S+(b<<20&4294967295|b>>>12),b=E+(S^k&(A^S))+R[9]+568446438&4294967295,E=A+(b<<5&4294967295|b>>>27),b=k+(A^S&(E^A))+R[14]+3275163606&4294967295,k=E+(b<<9&4294967295|b>>>23),b=S+(E^A&(k^E))+R[3]+4107603335&4294967295,S=k+(b<<14&4294967295|b>>>18),b=A+(k^E&(S^k))+R[8]+1163531501&4294967295,A=S+(b<<20&4294967295|b>>>12),b=E+(S^k&(A^S))+R[13]+2850285829&4294967295,E=A+(b<<5&4294967295|b>>>27),b=k+(A^S&(E^A))+R[2]+4243563512&4294967295,k=E+(b<<9&4294967295|b>>>23),b=S+(E^A&(k^E))+R[7]+1735328473&4294967295,S=k+(b<<14&4294967295|b>>>18),b=A+(k^E&(S^k))+R[12]+2368359562&4294967295,A=S+(b<<20&4294967295|b>>>12),b=E+(A^S^k)+R[5]+4294588738&4294967295,E=A+(b<<4&4294967295|b>>>28),b=k+(E^A^S)+R[8]+2272392833&4294967295,k=E+(b<<11&4294967295|b>>>21),b=S+(k^E^A)+R[11]+1839030562&4294967295,S=k+(b<<16&4294967295|b>>>16),b=A+(S^k^E)+R[14]+4259657740&4294967295,A=S+(b<<23&4294967295|b>>>9),b=E+(A^S^k)+R[1]+2763975236&4294967295,E=A+(b<<4&4294967295|b>>>28),b=k+(E^A^S)+R[4]+1272893353&4294967295,k=E+(b<<11&4294967295|b>>>21),b=S+(k^E^A)+R[7]+4139469664&4294967295,S=k+(b<<16&4294967295|b>>>16),b=A+(S^k^E)+R[10]+3200236656&4294967295,A=S+(b<<23&4294967295|b>>>9),b=E+(A^S^k)+R[13]+681279174&4294967295,E=A+(b<<4&4294967295|b>>>28),b=k+(E^A^S)+R[0]+3936430074&4294967295,k=E+(b<<11&4294967295|b>>>21),b=S+(k^E^A)+R[3]+3572445317&4294967295,S=k+(b<<16&4294967295|b>>>16),b=A+(S^k^E)+R[6]+76029189&4294967295,A=S+(b<<23&4294967295|b>>>9),b=E+(A^S^k)+R[9]+3654602809&4294967295,E=A+(b<<4&4294967295|b>>>28),b=k+(E^A^S)+R[12]+3873151461&4294967295,k=E+(b<<11&4294967295|b>>>21),b=S+(k^E^A)+R[15]+530742520&4294967295,S=k+(b<<16&4294967295|b>>>16),b=A+(S^k^E)+R[2]+3299628645&4294967295,A=S+(b<<23&4294967295|b>>>9),b=E+(S^(A|~k))+R[0]+4096336452&4294967295,E=A+(b<<6&4294967295|b>>>26),b=k+(A^(E|~S))+R[7]+1126891415&4294967295,k=E+(b<<10&4294967295|b>>>22),b=S+(E^(k|~A))+R[14]+2878612391&4294967295,S=k+(b<<15&4294967295|b>>>17),b=A+(k^(S|~E))+R[5]+4237533241&4294967295,A=S+(b<<21&4294967295|b>>>11),b=E+(S^(A|~k))+R[12]+1700485571&4294967295,E=A+(b<<6&4294967295|b>>>26),b=k+(A^(E|~S))+R[3]+2399980690&4294967295,k=E+(b<<10&4294967295|b>>>22),b=S+(E^(k|~A))+R[10]+4293915773&4294967295,S=k+(b<<15&4294967295|b>>>17),b=A+(k^(S|~E))+R[1]+2240044497&4294967295,A=S+(b<<21&4294967295|b>>>11),b=E+(S^(A|~k))+R[8]+1873313359&4294967295,E=A+(b<<6&4294967295|b>>>26),b=k+(A^(E|~S))+R[15]+4264355552&4294967295,k=E+(b<<10&4294967295|b>>>22),b=S+(E^(k|~A))+R[6]+2734768916&4294967295,S=k+(b<<15&4294967295|b>>>17),b=A+(k^(S|~E))+R[13]+1309151649&4294967295,A=S+(b<<21&4294967295|b>>>11),b=E+(S^(A|~k))+R[4]+4149444226&4294967295,E=A+(b<<6&4294967295|b>>>26),b=k+(A^(E|~S))+R[11]+3174756917&4294967295,k=E+(b<<10&4294967295|b>>>22),b=S+(E^(k|~A))+R[2]+718787259&4294967295,S=k+(b<<15&4294967295|b>>>17),b=A+(k^(S|~E))+R[9]+3951481745&4294967295,C.g[0]=C.g[0]+E&4294967295,C.g[1]=C.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+k&4294967295}r.prototype.v=function(C,E){E===void 0&&(E=C.length);const A=E-this.blockSize,R=this.C;let S=this.h,k=0;for(;k<E;){if(S==0)for(;k<=A;)o(this,C,k),k+=this.blockSize;if(typeof C=="string"){for(;k<E;)if(R[S++]=C.charCodeAt(k++),S==this.blockSize){o(this,R),S=0;break}}else for(;k<E;)if(R[S++]=C[k++],S==this.blockSize){o(this,R),S=0;break}}this.h=S,this.o+=E},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var E=1;E<C.length-8;++E)C[E]=0;E=this.o*8;for(var A=C.length-8;A<C.length;++A)C[A]=E&255,E/=256;for(this.v(C),C=Array(16),E=0,A=0;A<4;++A)for(let R=0;R<32;R+=8)C[E++]=this.g[A]>>>R&255;return C};function a(C,E){var A=f;return Object.prototype.hasOwnProperty.call(A,C)?A[C]:A[C]=E(C)}function u(C,E){this.h=E;const A=[];let R=!0;for(let S=C.length-1;S>=0;S--){const k=C[S]|0;R&&k==E||(A[S]=k,R=!1)}this.g=A}var f={};function m(C){return-128<=C&&C<128?a(C,function(E){return new u([E|0],E<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return T;if(C<0)return H(g(-C));const E=[];let A=1;for(let R=0;C>=A;R++)E[R]=C/A|0,A*=4294967296;return new u(E,0)}function v(C,E){if(C.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(C.charAt(0)=="-")return H(v(C.substring(1),E));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=g(Math.pow(E,8));let R=T;for(let k=0;k<C.length;k+=8){var S=Math.min(8,C.length-k);const b=parseInt(C.substring(k,k+S),E);S<8?(S=g(Math.pow(E,S)),R=R.j(S).add(g(b))):(R=R.j(A),R=R.add(g(b)))}return R}var T=m(0),P=m(1),M=m(16777216);i=u.prototype,i.m=function(){if(B(this))return-H(this).m();let C=0,E=1;for(let A=0;A<this.g.length;A++){const R=this.i(A);C+=(R>=0?R:4294967296+R)*E,E*=4294967296}return C},i.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(z(this))return"0";if(B(this))return"-"+H(this).toString(C);const E=g(Math.pow(C,6));var A=this;let R="";for(;;){const S=qt(A,E).g;A=K(A,S.j(E));let k=((A.g.length>0?A.g[0]:A.h)>>>0).toString(C);if(A=S,z(A))return k+R;for(;k.length<6;)k="0"+k;R=k+R}},i.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function z(C){if(C.h!=0)return!1;for(let E=0;E<C.g.length;E++)if(C.g[E]!=0)return!1;return!0}function B(C){return C.h==-1}i.l=function(C){return C=K(this,C),B(C)?-1:z(C)?0:1};function H(C){const E=C.g.length,A=[];for(let R=0;R<E;R++)A[R]=~C.g[R];return new u(A,~C.h).add(P)}i.abs=function(){return B(this)?H(this):this},i.add=function(C){const E=Math.max(this.g.length,C.g.length),A=[];let R=0;for(let S=0;S<=E;S++){let k=R+(this.i(S)&65535)+(C.i(S)&65535),b=(k>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);R=b>>>16,k&=65535,b&=65535,A[S]=b<<16|k}return new u(A,A[A.length-1]&-2147483648?-1:0)};function K(C,E){return C.add(H(E))}i.j=function(C){if(z(this)||z(C))return T;if(B(this))return B(C)?H(this).j(H(C)):H(H(this).j(C));if(B(C))return H(this.j(H(C)));if(this.l(M)<0&&C.l(M)<0)return g(this.m()*C.m());const E=this.g.length+C.g.length,A=[];for(var R=0;R<2*E;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(let S=0;S<C.g.length;S++){const k=this.i(R)>>>16,b=this.i(R)&65535,Ct=C.i(S)>>>16,rn=C.i(S)&65535;A[2*R+2*S]+=b*rn,ot(A,2*R+2*S),A[2*R+2*S+1]+=k*rn,ot(A,2*R+2*S+1),A[2*R+2*S+1]+=b*Ct,ot(A,2*R+2*S+1),A[2*R+2*S+2]+=k*Ct,ot(A,2*R+2*S+2)}for(C=0;C<E;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=E;C<2*E;C++)A[C]=0;return new u(A,0)};function ot(C,E){for(;(C[E]&65535)!=C[E];)C[E+1]+=C[E]>>>16,C[E]&=65535,E++}function ut(C,E){this.g=C,this.h=E}function qt(C,E){if(z(E))throw Error("division by zero");if(z(C))return new ut(T,T);if(B(C))return E=qt(H(C),E),new ut(H(E.g),H(E.h));if(B(E))return E=qt(C,H(E)),new ut(H(E.g),E.h);if(C.g.length>30){if(B(C)||B(E))throw Error("slowDivide_ only works with positive integers.");for(var A=P,R=E;R.l(C)<=0;)A=kt(A),R=kt(R);var S=Lt(A,1),k=Lt(R,1);for(R=Lt(R,2),A=Lt(A,2);!z(R);){var b=k.add(R);b.l(C)<=0&&(S=S.add(A),k=b),R=Lt(R,1),A=Lt(A,1)}return E=K(C,S.j(E)),new ut(S,E)}for(S=T;C.l(E)>=0;){for(A=Math.max(1,Math.floor(C.m()/E.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),k=g(A),b=k.j(E);B(b)||b.l(C)>0;)A-=R,k=g(A),b=k.j(E);z(k)&&(k=P),S=S.add(k),C=K(C,b)}return new ut(S,C)}i.B=function(C){return qt(this,C).h},i.and=function(C){const E=Math.max(this.g.length,C.g.length),A=[];for(let R=0;R<E;R++)A[R]=this.i(R)&C.i(R);return new u(A,this.h&C.h)},i.or=function(C){const E=Math.max(this.g.length,C.g.length),A=[];for(let R=0;R<E;R++)A[R]=this.i(R)|C.i(R);return new u(A,this.h|C.h)},i.xor=function(C){const E=Math.max(this.g.length,C.g.length),A=[];for(let R=0;R<E;R++)A[R]=this.i(R)^C.i(R);return new u(A,this.h^C.h)};function kt(C){const E=C.g.length+1,A=[];for(let R=0;R<E;R++)A[R]=C.i(R)<<1|C.i(R-1)>>>31;return new u(A,C.h)}function Lt(C,E){const A=E>>5;E%=32;const R=C.g.length-A,S=[];for(let k=0;k<R;k++)S[k]=E>0?C.i(k+A)>>>E|C.i(k+A+1)<<32-E:C.i(k+A);return new u(S,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,id=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=v,Wn=u}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});var Fo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rd,ys,sd,$o,vc,od,ad,cd;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fo=="object"&&Fo];for(var d=0;d<c.length;++d){var _=c[d];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=e(this);function o(c,d){if(d)t:{var _=r;c=c.split(".");for(var w=0;w<c.length-1;w++){var x=c[w];if(!(x in _))break t;_=_[x]}c=c[c.length-1],w=_[c],d=d(w),d!=w&&d!=null&&t(_,c,{configurable:!0,writable:!0,value:d})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(d){var _=[],w;for(w in d)Object.prototype.hasOwnProperty.call(d,w)&&_.push([w,d[w]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function f(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function m(c,d,_){return c.call.apply(c.bind,arguments)}function g(c,d,_){return g=m,g.apply(null,arguments)}function v(c,d){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),c.apply(this,w)}}function T(c,d){function _(){}_.prototype=d.prototype,c.Z=d.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(w,x,O){for(var q=Array(arguments.length-2),it=2;it<arguments.length;it++)q[it-2]=arguments[it];return d.prototype[x].apply(w,q)}}var P=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function M(c){const d=c.length;if(d>0){const _=Array(d);for(let w=0;w<d;w++)_[w]=c[w];return _}return[]}function z(c,d){for(let w=1;w<arguments.length;w++){const x=arguments[w];var _=typeof x;if(_=_!="object"?_:x?Array.isArray(x)?"array":_:"null",_=="array"||_=="object"&&typeof x.length=="number"){_=c.length||0;const O=x.length||0;c.length=_+O;for(let q=0;q<O;q++)c[_+q]=x[q]}else c.push(x)}}class B{constructor(d,_){this.i=d,this.j=_,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function H(c){u.setTimeout(()=>{throw c},0)}function K(){var c=C;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class ot{constructor(){this.h=this.g=null}add(d,_){const w=ut.get();w.set(d,_),this.h?this.h.next=w:this.g=w,this.h=w}}var ut=new B(()=>new qt,c=>c.reset());class qt{constructor(){this.next=this.g=this.h=null}set(d,_){this.h=d,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let kt,Lt=!1,C=new ot,E=()=>{const c=Promise.resolve(void 0);kt=()=>{c.then(A)}};function A(){for(var c;c=K();){try{c.h.call(c.g)}catch(_){H(_)}var d=ut;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}Lt=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,d),u.removeEventListener("test",_,d)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function Ct(c,d){S.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}T(Ct,S),Ct.prototype.init=function(c,d){const _=this.type=c.type,w=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(_=="mouseover"?d=c.fromElement:_=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ct.Z.h.call(this)},Ct.prototype.h=function(){Ct.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var rn="closure_listenable_"+(Math.random()*1e6|0),se=0;function ii(c,d,_,w,x){this.listener=c,this.proxy=null,this.src=d,this.type=_,this.capture=!!w,this.ha=x,this.key=++se,this.da=this.fa=!1}function tt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ri(c,d,_){for(const w in c)d.call(_,c[w],w,c)}function et(c,d){for(const _ in c)d.call(void 0,c[_],_,c)}function It(c){const d={};for(const _ in c)d[_]=c[_];return d}const Zt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kt(c,d){let _,w;for(let x=1;x<arguments.length;x++){w=arguments[x];for(_ in w)c[_]=w[_];for(let O=0;O<Zt.length;O++)_=Zt[O],Object.prototype.hasOwnProperty.call(w,_)&&(c[_]=w[_])}}function Pt(c){this.src=c,this.g={},this.h=0}Pt.prototype.add=function(c,d,_,w,x){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const q=at(c,d,w,x);return q>-1?(d=c[q],_||(d.fa=!1)):(d=new ii(d,this.src,O,!!w,x),d.fa=_,c.push(d)),d};function _t(c,d){const _=d.type;if(_ in c.g){var w=c.g[_],x=Array.prototype.indexOf.call(w,d,void 0),O;(O=x>=0)&&Array.prototype.splice.call(w,x,1),O&&(tt(d),c.g[_].length==0&&(delete c.g[_],c.h--))}}function at(c,d,_,w){for(let x=0;x<c.length;++x){const O=c[x];if(!O.da&&O.listener==d&&O.capture==!!_&&O.ha==w)return x}return-1}var pe="closure_lm_"+(Math.random()*1e6|0),ye={};function Ur(c,d,_,w,x){if(Array.isArray(d)){for(let O=0;O<d.length;O++)Ur(c,d[O],_,w,x);return null}return _=ai(_),c&&c[rn]?c.J(d,_,f(w)?!!w.capture:!1,x):Br(c,d,_,!1,w,x)}function Br(c,d,_,w,x,O){if(!d)throw Error("Invalid event type");const q=f(x)?!!x.capture:!!x;let it=Ui(c);if(it||(c[pe]=it=new Pt(c)),_=it.add(d,_,w,q,O),_.proxy)return _;if(w=zr(),_.proxy=w,w.src=c,w.listener=_,c.addEventListener)k||(x=q),x===void 0&&(x=!1),c.addEventListener(d.toString(),w,x);else if(c.attachEvent)c.attachEvent(io(d.toString()),w);else if(c.addListener&&c.removeListener)c.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function zr(){function c(_){return d.call(c.src,c.listener,_)}const d=ro;return c}function Sn(c,d,_,w,x){if(Array.isArray(d))for(var O=0;O<d.length;O++)Sn(c,d[O],_,w,x);else w=f(w)?!!w.capture:!!w,_=ai(_),c&&c[rn]?(c=c.i,O=String(d).toString(),O in c.g&&(d=c.g[O],_=at(d,_,w,x),_>-1&&(tt(d[_]),Array.prototype.splice.call(d,_,1),d.length==0&&(delete c.g[O],c.h--)))):c&&(c=Ui(c))&&(d=c.g[d.toString()],c=-1,d&&(c=at(d,_,w,x)),(_=c>-1?d[c]:null)&&si(_))}function si(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[rn])_t(d.i,c);else{var _=c.type,w=c.proxy;d.removeEventListener?d.removeEventListener(_,w,c.capture):d.detachEvent?d.detachEvent(io(_),w):d.addListener&&d.removeListener&&d.removeListener(w),(_=Ui(d))?(_t(_,c),_.h==0&&(_.src=null,d[pe]=null)):tt(c)}}}function io(c){return c in ye?ye[c]:ye[c]="on"+c}function ro(c,d){if(c.da)c=!0;else{d=new Ct(d,this);const _=c.listener,w=c.ha||c.src;c.fa&&si(c),c=_.call(w,d)}return c}function Ui(c){return c=c[pe],c instanceof Pt?c:null}var oi="__closure_events_fn_"+(Math.random()*1e9>>>0);function ai(c){return typeof c=="function"?c:(c[oi]||(c[oi]=function(d){return c.handleEvent(d)}),c[oi])}function Ht(){R.call(this),this.i=new Pt(this),this.M=this,this.G=null}T(Ht,R),Ht.prototype[rn]=!0,Ht.prototype.removeEventListener=function(c,d,_,w){Sn(this,c,d,_,w)};function jt(c,d){var _,w=c.G;if(w)for(_=[];w;w=w.G)_.push(w);if(c=c.M,w=d.type||d,typeof d=="string")d=new S(d,c);else if(d instanceof S)d.target=d.target||c;else{var x=d;d=new S(w,c),Kt(d,x)}x=!0;let O,q;if(_)for(q=_.length-1;q>=0;q--)O=d.g=_[q],x=Cn(O,w,!0,d)&&x;if(O=d.g=c,x=Cn(O,w,!0,d)&&x,x=Cn(O,w,!1,d)&&x,_)for(q=0;q<_.length;q++)O=d.g=_[q],x=Cn(O,w,!1,d)&&x}Ht.prototype.N=function(){if(Ht.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const _=c.g[d];for(let w=0;w<_.length;w++)tt(_[w]);delete c.g[d],c.h--}}this.G=null},Ht.prototype.J=function(c,d,_,w){return this.i.add(String(c),d,!1,_,w)},Ht.prototype.K=function(c,d,_,w){return this.i.add(String(c),d,!0,_,w)};function Cn(c,d,_,w){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let x=!0;for(let O=0;O<d.length;++O){const q=d[O];if(q&&!q.da&&q.capture==_){const it=q.listener,yt=q.ha||q.src;q.fa&&_t(c.i,q),x=it.call(yt,w)!==!1&&x}}return x&&!w.defaultPrevented}function so(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:u.setTimeout(c,d||0)}function qr(c){c.g=so(()=>{c.g=null,c.i&&(c.i=!1,qr(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class Ua extends R{constructor(d,_){super(),this.m=d,this.l=_,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:qr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(c){R.call(this),this.h=c,this.g={}}T(ci,R);var Bi=[];function Hr(c){ri(c.g,function(d,_){this.g.hasOwnProperty(_)&&si(d)},c),c.g={}}ci.prototype.N=function(){ci.Z.N.call(this),Hr(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zi=u.JSON.stringify,Ba=u.JSON.parse,oo=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function jr(){}function ao(){}var Rn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function li(){S.call(this,"d")}T(li,S);function qi(){S.call(this,"c")}T(qi,S);var sn={},kn=null;function Hi(){return kn=kn||new Ht}sn.Ia="serverreachability";function co(c){S.call(this,sn.Ia,c)}T(co,S);function Ln(c){const d=Hi();jt(d,new co(d))}sn.STAT_EVENT="statevent";function Wr(c,d){S.call(this,sn.STAT_EVENT,c),this.stat=d}T(Wr,S);function Wt(c){const d=Hi();jt(d,new Wr(d,c))}sn.Ja="timingevent";function lo(c,d){S.call(this,sn.Ja,c),this.size=d}T(lo,S);function ui(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},d)}function hi(){this.g=!0}hi.prototype.ua=function(){this.g=!1};function za(c,d,_,w,x,O){c.info(function(){if(c.g)if(O){var q="",it=O.split("&");for(let wt=0;wt<it.length;wt++){var yt=it[wt].split("=");if(yt.length>1){const Dt=yt[0];yt=yt[1];const Ie=Dt.split("_");q=Ie.length>=2&&Ie[1]=="type"?q+(Dt+"="+yt+"&"):q+(Dt+"=redacted&")}}}else q=null;else q=O;return"XMLHTTP REQ ("+w+") [attempt "+x+"]: "+d+`
`+_+`
`+q})}function qa(c,d,_,w,x,O,q){c.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+x+"]: "+d+`
`+_+`
`+O+" "+q})}function xn(c,d,_,w){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ha(c,_)+(w?" "+w:"")})}function $r(c,d){c.info(function(){return"TIMEOUT: "+d})}hi.prototype.info=function(){};function Ha(c,d){if(!c.g)return d;if(!d)return null;try{const O=JSON.parse(d);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var _=O[c];if(!(_.length<2)){var w=_[1];if(Array.isArray(w)&&!(w.length<1)){var x=w[0];if(x!="noop"&&x!="stop"&&x!="close")for(let q=1;q<w.length;q++)w[q]=""}}}}return zi(O)}catch{return d}}var ji={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},uo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ho;function le(){}T(le,jr),le.prototype.g=function(){return new XMLHttpRequest},ho=new le;function Z(c){return encodeURIComponent(String(c))}function fo(c){var d=1;c=c.split(":");const _=[];for(;d>0&&c.length;)_.push(c.shift()),d--;return c.length&&_.push(c.join(":")),_}function ke(c,d,_,w){this.j=c,this.i=d,this.l=_,this.S=w||1,this.V=new ci(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gr}function Gr(){this.i=null,this.g="",this.h=!1}var Zr={},di={};function Wi(c,d,_){c.M=1,c.A=At(oe(d)),c.u=_,c.R=!0,on(c,null)}function on(c,d){c.F=Date.now(),$i(c),c.B=oe(c.A);var _=c.B,w=c.S;Array.isArray(w)||(w=[String(w)]),Ji(_.i,"t",w),c.C=0,_=c.j.L,c.h=new Gr,c.g=cs(c.j,_?d:null,!c.u),c.P>0&&(c.O=new Ua(g(c.Y,c,c.g),c.P)),d=c.V,_=c.g,w=c.ba;var x="readystatechange";Array.isArray(x)||(x&&(Bi[0]=x.toString()),x=Bi);for(let O=0;O<x.length;O++){const q=Ur(_,x[O],w||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=c.J?It(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),Ln(),za(c.i,c.v,c.B,c.l,c.S,c.u)}ke.prototype.ba=function(c){c=c.target;const d=this.O;d&&je(c)==3?d.j():this.Y(c)},ke.prototype.Y=function(c){try{if(c==this.g)t:{const it=je(this.g),yt=this.g.ya(),wt=this.g.ca();if(!(it<3)&&(it!=3||this.g&&(this.h.h||this.g.la()||es(this.g)))){this.K||it!=4||yt==7||(yt==8||wt<=0?Ln(3):Ln(2)),Gi(this);var d=this.g.ca();this.X=d;var _=po(this);if(this.o=d==200,qa(this.i,this.v,this.B,this.l,this.S,it,d),this.o){if(this.U&&!this.L){e:{if(this.g){var w,x=this.g;if((w=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(w)){var O=w;break e}}O=null}if(c=O)xn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Kr(this,c);else{this.o=!1,this.m=3,Wt(12),ve(this),fi(this);break t}}if(this.R){c=!0;let Dt;for(;!this.K&&this.C<_.length;)if(Dt=ja(this,_),Dt==di){it==4&&(this.m=4,Wt(14),c=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Zr){this.m=4,Wt(15),xn(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else xn(this.i,this.l,Dt,null),Kr(this,Dt);if(mo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||_.length!=0||this.h.h||(this.m=1,Wt(16),c=!1),this.o=this.o&&c,!c)xn(this.i,this.l,_,"[Invalid Chunked Response]"),ve(this),fi(this);else if(_.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),os(q),q.P=!0,Wt(11))}}else xn(this.i,this.l,_,null),Kr(this,_);it==4&&ve(this),this.o&&!this.K&&(it==4?_e(this.j,this):(this.o=!1,$i(this)))}else ns(this.g),d==400&&_.indexOf("Unknown SID")>0?(this.m=3,Wt(12)):(this.m=0,Wt(13)),ve(this),fi(this)}}}catch{}finally{}};function po(c){if(!mo(c))return c.g.la();const d=es(c.g);if(d==="")return"";let _="";const w=d.length,x=je(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ve(c),fi(c),"";c.h.i=new u.TextDecoder}for(let O=0;O<w;O++)c.h.h=!0,_+=c.h.i.decode(d[O],{stream:!(x&&O==w-1)});return d.length=0,c.h.g+=_,c.C=0,c.h.g}function mo(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function ja(c,d){var _=c.C,w=d.indexOf(`
`,_);return w==-1?di:(_=Number(d.substring(_,w)),isNaN(_)?Zr:(w+=1,w+_>d.length?di:(d=d.slice(w,w+_),c.C=w+_,d)))}ke.prototype.cancel=function(){this.K=!0,ve(this)};function $i(c){c.T=Date.now()+c.H,_o(c,c.H)}function _o(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ui(g(c.aa,c),d)}function Gi(c){c.D&&(u.clearTimeout(c.D),c.D=null)}ke.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?($r(this.i,this.B),this.M!=2&&(Ln(),Wt(17)),ve(this),this.m=2,fi(this)):_o(this,this.T-c)};function fi(c){c.j.I==0||c.K||_e(c.j,c)}function ve(c){Gi(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,Hr(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function Kr(c,d){try{var _=c.j;if(_.I!=0&&(_.g==c||pi(_.h,c))){if(!c.L&&pi(_.h,c)&&_.I==3){try{var w=_.Ba.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var x=w;if(x[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)nr(_),tr(_);else break t;ss(_),Wt(18)}}else _.xa=x[1],0<_.xa-_.K&&x[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ui(g(_.Va,_),6e3));vo(_.h)<=1&&_.ta&&(_.ta=void 0)}else $e(_,11)}else if((c.L||_.g==c)&&nr(_),!b(d))for(x=_.Ba.g.parse(d),d=0;d<x.length;d++){let wt=x[d];const Dt=wt[0];if(!(Dt<=_.K))if(_.K=Dt,wt=wt[1],_.I==2)if(wt[0]=="c"){_.M=wt[1],_.ba=wt[2];const Ie=wt[3];Ie!=null&&(_.ka=Ie,_.j.info("VER="+_.ka));const De=wt[4];De!=null&&(_.za=De,_.j.info("SVER="+_.za));const Ae=wt[5];Ae!=null&&typeof Ae=="number"&&Ae>0&&(w=1.5*Ae,_.O=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const Ge=c.g;if(Ge){const sr=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sr){var O=w.h;O.g||sr.indexOf("spdy")==-1&&sr.indexOf("quic")==-1&&sr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(an(O,O.h),O.h=null))}if(w.G){const or=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;or&&(w.wa=or,G(w.J,w.G,or))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),w=_;var q=c;if(w.na=as(w,w.L?w.ba:null,w.W),q.L){Qr(w.h,q);var it=q,yt=w.O;yt&&(it.H=yt),it.D&&(Gi(it),$i(it)),w.g=q}else rs(w);_.i.length>0&&We(_)}else wt[0]!="stop"&&wt[0]!="close"||$e(_,7);else _.I==3&&(wt[0]=="stop"||wt[0]=="close"?wt[0]=="stop"?$e(_,7):ct(_):wt[0]!="noop"&&_.l&&_.l.qa(wt),_.A=0)}}Ln(4)}catch{}}var Wa=class{constructor(c,d){this.g=c,this.map=d}};function go(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function yo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function vo(c){return c.h?1:c.g?c.g.size:0}function pi(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function an(c,d){c.g?c.g.add(d):c.h=d}function Qr(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}go.prototype.cancel=function(){if(this.i=Jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Jr(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const _ of c.g.values())d=d.concat(_.G);return d}return M(c.i)}var Dn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pt(c,d){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const w=c[_].indexOf("=");let x,O=null;w>=0?(x=c[_].substring(0,w),O=c[_].substring(w+1)):x=c[_],d(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function gt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof gt?(this.l=c.l,we(this,c.j),this.o=c.o,this.g=c.g,Te(this,c.u),this.h=c.h,mi(this,_i(c.i)),this.m=c.m):c&&(d=String(c).match(Dn))?(this.l=!1,we(this,d[1]||"",!0),this.o=cn(d[2]||""),this.g=cn(d[3]||"",!0),Te(this,d[4]),this.h=cn(d[5]||"",!0),mi(this,d[6]||"",!0),this.m=cn(d[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}gt.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(ze(d,wo,!0),":");var _=this.g;return(_||d=="file")&&(c.push("//"),(d=this.o)&&c.push(ze(d,wo,!0),"@"),c.push(Z(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ze(_,_.charAt(0)=="/"?ln:Zi,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ze(_,un)),c.join("")},gt.prototype.resolve=function(c){const d=oe(this);let _=!!c.j;_?we(d,c.j):_=!!c.o,_?d.o=c.o:_=!!c.g,_?d.g=c.g:_=c.u!=null;var w=c.h;if(_)Te(d,c.u);else if(_=!!c.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var x=d.h.lastIndexOf("/");x!=-1&&(w=d.h.slice(0,x+1)+w)}if(x=w,x==".."||x==".")w="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){w=x.lastIndexOf("/",0)==0,x=x.split("/");const O=[];for(let q=0;q<x.length;){const it=x[q++];it=="."?w&&q==x.length&&O.push(""):it==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),w&&q==x.length&&O.push("")):(O.push(it),w=!0)}w=O.join("/")}else w=x}return _?d.h=w:_=c.i.toString()!=="",_?mi(d,_i(c.i)):_=!!c.m,_&&(d.m=c.m),d};function oe(c){return new gt(c)}function we(c,d,_){c.j=_?cn(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Te(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function mi(c,d,_){d instanceof Le?(c.i=d,Yr(c.i,c.l)):(_||(d=ze(d,xt)),c.i=new Le(d,c.l))}function G(c,d,_){c.i.set(d,_)}function At(c){return G(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function cn(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ze(c,d,_){return typeof c=="string"?(c=encodeURI(c).replace(d,ue),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ue(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var wo=/[#\/\?@]/g,Zi=/[#\?:]/g,ln=/[#\?]/g,xt=/[#\?@]/g,un=/#/g;function Le(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function me(c){c.g||(c.g=new Map,c.h=0,c.i&&pt(c.i,function(d,_){c.add(decodeURIComponent(d.replace(/\+/g," ")),_)}))}i=Le.prototype,i.add=function(c,d){me(this),this.i=null,c=qe(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(d),this.h+=1,this};function Ki(c,d){me(c),d=qe(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function On(c,d){return me(c),d=qe(c,d),c.g.has(d)}i.forEach=function(c,d){me(this),this.g.forEach(function(_,w){_.forEach(function(x){c.call(d,x,w,this)},this)},this)};function Qi(c,d){me(c);let _=[];if(typeof d=="string")On(c,d)&&(_=_.concat(c.g.get(qe(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)_=_.concat(c[d]);return _}i.set=function(c,d){return me(this),this.i=null,c=qe(this,c),On(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},i.get=function(c,d){return c?(c=Qi(this,c),c.length>0?String(c[0]):d):d};function Ji(c,d,_){Ki(c,d),_.length>0&&(c.i=null,c.g.set(qe(c,d),M(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let w=0;w<d.length;w++){var _=d[w];const x=Z(_);_=Qi(this,_);for(let O=0;O<_.length;O++){let q=x;_[O]!==""&&(q+="="+Z(_[O])),c.push(q)}}return this.i=c.join("&")};function _i(c){const d=new Le;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function qe(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function Yr(c,d){d&&!c.j&&(me(c),c.i=null,c.g.forEach(function(_,w){const x=w.toLowerCase();w!=x&&(Ki(this,w),Ji(this,x,_))},c)),c.j=d}function Yi(c,d){const _=new hi;if(u.Image){const w=new Image;w.onload=v(Ee,_,"TestLoadImage: loaded",!0,d,w),w.onerror=v(Ee,_,"TestLoadImage: error",!1,d,w),w.onabort=v(Ee,_,"TestLoadImage: abort",!1,d,w),w.ontimeout=v(Ee,_,"TestLoadImage: timeout",!1,d,w),u.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=c}else d(!1)}function To(c,d){const _=new hi,w=new AbortController,x=setTimeout(()=>{w.abort(),Ee(_,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:w.signal}).then(O=>{clearTimeout(x),O.ok?Ee(_,"TestPingServer: ok",!0,d):Ee(_,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),Ee(_,"TestPingServer: error",!1,d)})}function Ee(c,d,_,w,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),w(_)}catch{}}function $a(){this.g=new oo}function nt(c){this.i=c.Sb||null,this.h=c.ab||!1}T(nt,jr),nt.prototype.g=function(){return new ae(this.i,this.h)};function ae(c,d){Ht.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(ae,Ht),i=ae.prototype,i.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,hn(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||u).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Et(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Et(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Nn(this):hn(this),this.readyState==3&&Et(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Nn(this))},i.Na=function(c){this.g&&(this.response=c,Nn(this))},i.ga=function(){this.g&&Nn(this)};function Nn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,hn(c)}i.setRequestHeader=function(c,d){this.A.append(c,d)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var _=d.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=d.next();return c.join(`\r
`)};function hn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ae.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Xi(c){let d="";return ri(c,function(_,w){d+=w,d+=":",d+=_,d+=`\r
`}),d}function gi(c,d,_){t:{for(w in _){var w=!1;break t}w=!0}w||(_=Xi(_),typeof c=="string"?_!=null&&Z(_):G(c,d,_))}function vt(c){Ht.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(vt,Ht);var Xr=/^https?$/i,yi=["POST","PUT"];i=vt.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,d,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ho.g(),this.g.onreadystatechange=P(g(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(O){Nt(this,O);return}if(c=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var x in w)_.set(x,w[x]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const O of w.keys())_.set(O,w.get(O));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(O=>O.toLowerCase()=="content-type"),x=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(yi,d,void 0)>=0)||w||x||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,q]of _)this.g.setRequestHeader(O,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Nt(this,O)}};function Nt(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,He(c),vi(c)}function He(c){c.A||(c.A=!0,jt(c,"complete"),jt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,jt(this,"complete"),jt(this,"abort"),vi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vi(this,!0)),vt.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?ts(this):this.Xa())},i.Xa=function(){ts(this)};function ts(c){if(c.h&&typeof a<"u"){if(c.v&&je(c)==4)setTimeout(c.Ca.bind(c),0);else if(jt(c,"readystatechange"),je(c)==4){c.h=!1;try{const O=c.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var _;if(!(_=d)){var w;if(w=O===0){let q=String(c.D).match(Dn)[1]||null;!q&&u.self&&u.self.location&&(q=u.self.location.protocol.slice(0,-1)),w=!Xr.test(q?q.toLowerCase():"")}_=w}if(_)jt(c,"complete"),jt(c,"success");else{c.o=6;try{var x=je(c)>2?c.g.statusText:""}catch{x=""}c.l=x+" ["+c.ca()+"]",He(c)}}finally{vi(c)}}}}function vi(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,d||jt(c,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function je(c){return c.g?c.g.readyState:0}i.ca=function(){try{return je(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Ba(d)}};function es(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ns(c){const d={};c=(c.g&&je(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<c.length;w++){if(b(c[w]))continue;var _=fo(c[w]);const x=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const O=d[x]||[];d[x]=O,O.push(_)}et(d,function(w){return w.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(c,d,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||d}function is(c){this.za=0,this.i=[],this.j=new hi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wi("baseRetryDelayMs",5e3,c),this.Za=wi("retryDelaySeedMs",1e4,c),this.Ta=wi("forwardChannelMaxRetries",2,c),this.va=wi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new go(c&&c.concurrentRequestLimit),this.Ba=new $a,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=is.prototype,i.ka=8,i.I=1,i.connect=function(c,d,_,w){Wt(0),this.W=c,this.H=d||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.J=as(this,null,this.W),We(this)};function ct(c){if(he(c),c.I==3){var d=c.V++,_=oe(c.J);if(G(_,"SID",c.M),G(_,"RID",d),G(_,"TYPE","terminate"),dn(c,_),d=new ke(c,c.j,d),d.M=2,d.A=At(oe(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(d.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=d.A,_=!0),_||(d.g=cs(d.j,null),d.g.ea(d.A)),d.F=Date.now(),$i(d)}xe(c)}function tr(c){c.g&&(os(c),c.g.cancel(),c.g=null)}function he(c){tr(c),c.v&&(u.clearTimeout(c.v),c.v=null),nr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function We(c){if(!yo(c.h)&&!c.m){c.m=!0;var d=c.Ea;kt||E(),Lt||(kt(),Lt=!0),C.add(d,c),c.D=0}}function Eo(c,d){return vo(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ui(g(c.Ea,c,d),bo(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const x=new ke(this,this.j,c);let O=this.o;if(this.U&&(O?(O=It(O),Kt(O,this.U)):O=this.U),this.u!==null||this.R||(x.J=O,O=null),this.S)t:{for(var d=0,_=0;_<this.i.length;_++){e:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break e}w=void 0}if(w===void 0)break;if(d+=w,d>4096){d=_;break t}if(d===4096||_===this.i.length-1){d=_+1;break t}}d=1e3}else d=1e3;d=Ao(this,x,d),_=oe(this.J),G(_,"RID",c),G(_,"CVER",22),this.G&&G(_,"X-HTTP-Session-Id",this.G),dn(this,_),O&&(this.R?d="headers="+Z(Xi(O))+"&"+d:this.u&&gi(_,this.u,O)),an(this.h,x),this.Ra&&G(_,"TYPE","init"),this.S?(G(_,"$req",d),G(_,"SID","null"),x.U=!0,Wi(x,_,null)):Wi(x,_,d),this.I=2}}else this.I==3&&(c?Io(this,c):this.i.length==0||yo(this.h)||Io(this))};function Io(c,d){var _;d?_=d.l:_=c.V++;const w=oe(c.J);G(w,"SID",c.M),G(w,"RID",_),G(w,"AID",c.K),dn(c,w),c.u&&c.o&&gi(w,c.u,c.o),_=new ke(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),d&&(c.i=d.G.concat(c.i)),d=Ao(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),an(c.h,_),Wi(_,w,d)}function dn(c,d){c.H&&ri(c.H,function(_,w){G(d,w,_)}),c.l&&ri({},function(_,w){G(d,w,_)})}function Ao(c,d,_){_=Math.min(c.i.length,_);const w=c.l?g(c.l.Ka,c.l,c):null;t:{var x=c.i;let it=-1;for(;;){const yt=["count="+_];it==-1?_>0?(it=x[0].g,yt.push("ofs="+it)):it=0:yt.push("ofs="+it);let wt=!0;for(let Dt=0;Dt<_;Dt++){var O=x[Dt].g;const Ie=x[Dt].map;if(O-=it,O<0)it=Math.max(0,x[Dt].g-100),wt=!1;else try{O="req"+O+"_"||"";try{var q=Ie instanceof Map?Ie:Object.entries(Ie);for(const[De,Ae]of q){let Ge=Ae;f(Ae)&&(Ge=zi(Ae)),yt.push(O+De+"="+encodeURIComponent(Ge))}}catch(De){throw yt.push(O+"type="+encodeURIComponent("_badmap")),De}}catch{w&&w(Ie)}}if(wt){q=yt.join("&");break t}}q=void 0}return c=c.i.splice(0,_),d.G=c,q}function rs(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;kt||E(),Lt||(kt(),Lt=!0),C.add(d,c),c.A=0}}function ss(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ui(g(c.Da,c),bo(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,er(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ui(g(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Wt(10),tr(this),er(this))};function os(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function er(c){c.g=new ke(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=oe(c.na);G(d,"RID","rpc"),G(d,"SID",c.M),G(d,"AID",c.K),G(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&G(d,"TO",c.ia),G(d,"TYPE","xmlhttp"),dn(c,d),c.u&&c.o&&gi(d,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=At(oe(d)),_.u=null,_.R=!0,on(_,c)}i.Va=function(){this.C!=null&&(this.C=null,tr(this),ss(this),Wt(19))};function nr(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function _e(c,d){var _=null;if(c.g==d){nr(c),os(c),c.g=null;var w=2}else if(pi(c.h,d))_=d.G,Qr(c.h,d),w=1;else return;if(c.I!=0){if(d.o)if(w==1){_=d.u?d.u.length:0,d=Date.now()-d.F;var x=c.D;w=Hi(),jt(w,new lo(w,_)),We(c)}else rs(c);else if(x=d.m,x==3||x==0&&d.X>0||!(w==1&&Eo(c,d)||w==2&&ss(c)))switch(_&&_.length>0&&(d=c.h,d.i=d.i.concat(_)),x){case 1:$e(c,5);break;case 4:$e(c,10);break;case 3:$e(c,6);break;default:$e(c,2)}}}function bo(c,d){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*d}function $e(c,d){if(c.j.info("Error code "+d),d==2){var _=g(c.bb,c),w=c.Ua;const x=!w;w=new gt(w||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||we(w,"https"),At(w),x?Yi(w.toString(),_):To(w.toString(),_)}else Wt(2);c.I=0,c.l&&c.l.pa(d),xe(c),he(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Wt(2)):(this.j.info("Failed to ping google.com"),Wt(1))};function xe(c){if(c.I=0,c.ja=[],c.l){const d=Jr(c.h);(d.length!=0||c.i.length!=0)&&(z(c.ja,d),z(c.ja,c.i),c.h.i.length=0,M(c.i),c.i.length=0),c.l.oa()}}function as(c,d,_){var w=_ instanceof gt?oe(_):new gt(_);if(w.g!="")d&&(w.g=d+"."+w.g),Te(w,w.u);else{var x=u.location;w=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;const O=new gt(null);w&&we(O,w),d&&(O.g=d),x&&Te(O,x),_&&(O.h=_),w=O}return _=c.G,d=c.wa,_&&d&&G(w,_,d),G(w,"VER",c.ka),dn(c,w),w}function cs(c,d,_){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new vt(new nt({ab:_})):new vt(c.ma),d.Fa(c.L),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ir(){}i=ir.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function rr(){}rr.prototype.g=function(c,d){return new Xt(c,d)};function Xt(c,d){Ht.call(this),this.g=new is(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!b(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Mn(this)}T(Xt,Ht),Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){ct(this.g)},Xt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=zi(c),c=_);d.i.push(new Wa(d.Ya++,c)),d.I==3&&We(d)},Xt.prototype.N=function(){this.g.l=null,delete this.j,ct(this.g),delete this.g,Xt.Z.N.call(this)};function ls(c){li.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){t:{for(const _ in d){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}T(ls,li);function Po(){qi.call(this),this.status=1}T(Po,qi);function Mn(c){this.g=c}T(Mn,ir),Mn.prototype.ra=function(){jt(this.g,"a")},Mn.prototype.qa=function(c){jt(this.g,new ls(c))},Mn.prototype.pa=function(c){jt(this.g,new Po)},Mn.prototype.oa=function(){jt(this.g,"b")},rr.prototype.createWebChannel=rr.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,cd=function(){return new rr},ad=function(){return Hi()},od=sn,vc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,$o=ji,uo.COMPLETE="complete",sd=uo,ao.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",Ht.prototype.listen=Ht.prototype.J,ys=ao,vt.prototype.listenOnce=vt.prototype.K,vt.prototype.getLastError=vt.prototype.Ha,vt.prototype.getLastErrorCode=vt.prototype.ya,vt.prototype.getStatus=vt.prototype.ca,vt.prototype.getResponseJson=vt.prototype.La,vt.prototype.getResponseText=vt.prototype.la,vt.prototype.send=vt.prototype.ea,vt.prototype.setWithCredentials=vt.prototype.Fa,rd=vt}).apply(typeof Fo<"u"?Fo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
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
 */let Dr="12.13.0";function z_(i){Dr=i}/**
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
 */const ki=new qc("@firebase/firestore");function fr(){return ki.logLevel}function j(i,...t){if(ki.logLevel<=ft.DEBUG){const e=t.map(Wc);ki.debug(`Firestore (${Dr}): ${i}`,...e)}}function In(i,...t){if(ki.logLevel<=ft.ERROR){const e=t.map(Wc);ki.error(`Firestore (${Dr}): ${i}`,...e)}}function Li(i,...t){if(ki.logLevel<=ft.WARN){const e=t.map(Wc);ki.warn(`Firestore (${Dr}): ${i}`,...e)}}function Wc(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
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
 */function X(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,ld(i,r,e)}function ld(i,t,e){let r=`FIRESTORE (${Dr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw In(r),new Error(r)}function Tt(i,t,e,r){let o="Unexpected state";typeof e=="string"?o=e:r=e,i||ld(t,o,r)}function st(i,t){return i}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Pn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class bi{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ud{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ee.UNAUTHENTICATED))}shutdown(){}}class H_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class j_{constructor(t){this.t=t,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Tt(this.o===void 0,42304);let r=this.i;const o=m=>this.i!==r?(r=this.i,e(m)):Promise.resolve();let a=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new bi,t.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const m=a;t.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},f=m=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new bi)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Tt(typeof r.accessToken=="string",31837,{l:r}),new ud(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Tt(t===null||typeof t=="string",2055,{h:t}),new ee(t)}}class W_{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class $_{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new W_(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G_{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ge(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Tt(this.o===void 0,3512);const r=a=>{a.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,j("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const o=a=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new vu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Tt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new vu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Z_(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class $c{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=Z_(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<e&&(r+=t.charAt(o[a]%62))}return r}}function ht(i,t){return i<t?-1:i>t?1:0}function wc(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const o=i.charAt(r),a=t.charAt(r);if(o!==a)return ic(o)===ic(a)?ht(o,a):ic(o)?1:-1}return ht(i.length,t.length)}const K_=55296,Q_=57343;function ic(i){const t=i.charCodeAt(0);return t>=K_&&t<=Q_}function Cr(i,t,e){return i.length===t.length&&i.every((r,o)=>e(r,t[o]))}/**
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
 */const wu="__name__";class Ke{constructor(t,e,r){e===void 0?e=0:e>t.length&&X(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&X(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ke.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ke?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let o=0;o<r;o++){const a=Ke.compareSegments(t.get(o),e.get(o));if(a!==0)return a}return ht(t.length,e.length)}static compareSegments(t,e){const r=Ke.isNumericId(t),o=Ke.isNumericId(e);return r&&!o?-1:!r&&o?1:r&&o?Ke.extractNumericId(t).compare(Ke.extractNumericId(e)):wc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wn.fromString(t.substring(4,t.length-2))}}class bt extends Ke{construct(t,e,r){return new bt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(o=>o.length>0))}return new bt(e)}static emptyPath(){return new bt([])}}const J_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends Ke{construct(t,e,r){return new Jt(t,e,r)}static isValidIdentifier(t){return J_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===wu}static keyField(){return new Jt([wu])}static fromServerFormat(t){const e=[];let r="",o=0;const a=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;o<t.length;){const f=t[o];if(f==="\\"){if(o+1===t.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=m,o+=2}else f==="`"?(u=!u,o++):f!=="."||u?(r+=f,o++):(a(),o++)}if(a(),u)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Jt(e)}static emptyPath(){return new Jt([])}}/**
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
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(bt.fromString(t))}static fromName(t){return new Q(bt.fromString(t).popFirst(5))}static empty(){return new Q(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&bt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return bt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new bt(t.slice()))}}/**
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
 */function hd(i,t,e){if(!e)throw new $(V.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Y_(i,t,e,r){if(t===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Tu(i){if(!Q.isDocumentKey(i))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Eu(i){if(Q.isDocumentKey(i))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function dd(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Ia(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":X(12329,{type:typeof i})}function Pi(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ia(i);throw new $(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ut(i,t){const e={typeString:i};return t&&(e.value=t),e}function $s(i,t){if(!dd(i))throw new $(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const o=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const u=i[r];if(o&&typeof u!==o){e=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new $(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const Iu=-62135596800,Au=1e6;class St{static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Au);return new St(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Iu)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Au}_compareTo(t){return this.seconds===t.seconds?ht(this.nanoseconds,t.nanoseconds):ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:St._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($s(t,St._jsonSchema))return new St(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Iu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}St._jsonSchemaVersion="firestore/timestamp/1.0",St._jsonSchema={type:Ut("string",St._jsonSchemaVersion),seconds:Ut("number"),nanoseconds:Ut("number")};/**
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
 */class rt{static fromTimestamp(t){return new rt(t)}static min(){return new rt(new St(0,0))}static max(){return new rt(new St(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ks=-1;function X_(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,o=rt.fromTimestamp(r===1e9?new St(e+1,0):new St(e,r));return new Gn(o,Q.empty(),t)}function tg(i){return new Gn(i.readTime,i.key,ks)}class Gn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Gn(rt.min(),Q.empty(),ks)}static max(){return new Gn(rt.max(),Q.empty(),ks)}}function eg(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Q.comparator(i.documentKey,t.documentKey),e!==0?e:ht(i.largestBatchId,t.largestBatchId))}/**
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
 */const ng="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ig{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Or(i){if(i.code!==V.FAILED_PRECONDITION||i.message!==ng)throw i;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new F((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof F?e:F.resolve(e)}catch(e){return F.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):F.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):F.reject(e)}static resolve(t){return new F((e,r)=>{e(t)})}static reject(t){return new F((e,r)=>{r(t)})}static waitFor(t){return new F((e,r)=>{let o=0,a=0,u=!1;t.forEach(f=>{++o,f.next(()=>{++a,u&&a===o&&e()},m=>r(m))}),u=!0,a===o&&e()})}static or(t){let e=F.resolve(!1);for(const r of t)e=e.next(o=>o?F.resolve(o):r());return e}static forEach(t,e){const r=[];return t.forEach((o,a)=>{r.push(e.call(this,o,a))}),this.waitFor(r)}static mapArray(t,e){return new F((r,o)=>{const a=t.length,u=new Array(a);let f=0;for(let m=0;m<a;m++){const g=m;e(t[g]).next(v=>{u[g]=v,++f,f===a&&r(u)},v=>o(v))}})}static doWhile(t,e){return new F((r,o)=>{const a=()=>{t()===!0?e().next(()=>{a()},o):r()};a()})}}function rg(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Nr(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Aa{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Aa.ce=-1;/**
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
 */const Gc=-1;function ba(i){return i==null}function sa(i){return i===0&&1/i==-1/0}function sg(i){return typeof i=="number"&&Number.isInteger(i)&&!sa(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const fd="";function og(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=bu(t)),t=ag(i.get(e),t);return bu(t)}function ag(i,t){let e=t;const r=i.length;for(let o=0;o<r;o++){const a=i.charAt(o);switch(a){case"\0":e+="";break;case fd:e+="";break;default:e+=a}}return e}function bu(i){return i+fd+""}/**
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
 */function Pu(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function Oi(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function pd(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class Rt{constructor(t,e){this.comparator=t,this.root=e||Qt.EMPTY}insert(t,e){return new Rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(t,r.key);if(o===0)return e+r.left.size;o<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Uo(this.root,t,this.comparator,!0)}}class Uo{constructor(t,e,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&o&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qt{constructor(t,e,r,o,a){this.key=t,this.value=e,this.color=r??Qt.RED,this.left=o??Qt.EMPTY,this.right=a??Qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,o,a){return new Qt(t??this.key,e??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let o=this;const a=r(t,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(t,e,r),null):a===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Qt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return Qt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw X(27949);return t+(this.isRed()?0:1)}}Qt.EMPTY=null,Qt.RED=!0,Qt.BLACK=!1;Qt.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(t,e,r,o,a){return this}insert(t,e,r){return new Qt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class zt{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Su(this.data.getIterator())}getIteratorFrom(t){return new Su(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof zt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new zt(this.comparator);return e.data=t,e}}class Su{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Me{constructor(t){this.fields=t,t.sort(Jt.comparator)}static empty(){return new Me([])}unionWith(t){let e=new zt(Jt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Me(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Cr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new md("Invalid base64 string: "+a):a}}(t);return new Yt(e)}static fromUint8Array(t){const e=function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a}(t);return new Yt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let o=0;o<e.length;o++)r[o]=e.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const cg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(i){if(Tt(!!i,39018),typeof i=="string"){let t=0;const e=cg.exec(i);if(Tt(!!e,46558,{timestamp:i}),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ot(i.seconds),nanos:Ot(i.nanos)}}function Ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Kn(i){return typeof i=="string"?Yt.fromBase64String(i):Yt.fromUint8Array(i)}/**
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
 */const _d="server_timestamp",gd="__type__",yd="__previous_value__",vd="__local_write_time__";function Zc(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[gd])==null?void 0:r.stringValue)===_d}function Pa(i){const t=i.mapValue.fields[yd];return Zc(t)?Pa(t):t}function Ls(i){const t=Zn(i.mapValue.fields[vd].timestampValue);return new St(t.seconds,t.nanos)}/**
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
 */class lg{constructor(t,e,r,o,a,u,f,m,g,v,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=v,this.apiKey=T}}const oa="(default)";class xs{constructor(t,e){this.projectId=t,this.database=e||oa}static empty(){return new xs("","")}get isDefaultDatabase(){return this.database===oa}isEqual(t){return t instanceof xs&&t.projectId===this.projectId&&t.database===this.database}}function ug(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xs(i.options.projectId,t)}/**
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
 */const wd="__type__",hg="__max__",Bo={mapValue:{}},Td="__vector__",aa="value";function Qn(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Zc(i)?4:fg(i)?9007199254740991:dg(i)?10:11:X(28295,{value:i})}function en(i,t){if(i===t)return!0;const e=Qn(i);if(e!==Qn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Ls(i).isEqual(Ls(t));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=Zn(o.timestampValue),f=Zn(a.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(o,a){return Kn(o.bytesValue).isEqual(Kn(a.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(o,a){return Ot(o.geoPointValue.latitude)===Ot(a.geoPointValue.latitude)&&Ot(o.geoPointValue.longitude)===Ot(a.geoPointValue.longitude)}(i,t);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return Ot(o.integerValue)===Ot(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=Ot(o.doubleValue),f=Ot(a.doubleValue);return u===f?sa(u)===sa(f):isNaN(u)&&isNaN(f)}return!1}(i,t);case 9:return Cr(i.arrayValue.values||[],t.arrayValue.values||[],en);case 10:case 11:return function(o,a){const u=o.mapValue.fields||{},f=a.mapValue.fields||{};if(Pu(u)!==Pu(f))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(f[m]===void 0||!en(u[m],f[m])))return!1;return!0}(i,t);default:return X(52216,{left:i})}}function Ds(i,t){return(i.values||[]).find(e=>en(e,t))!==void 0}function Rr(i,t){if(i===t)return 0;const e=Qn(i),r=Qn(t);if(e!==r)return ht(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ht(i.booleanValue,t.booleanValue);case 2:return function(a,u){const f=Ot(a.integerValue||a.doubleValue),m=Ot(u.integerValue||u.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(i,t);case 3:return Cu(i.timestampValue,t.timestampValue);case 4:return Cu(Ls(i),Ls(t));case 5:return wc(i.stringValue,t.stringValue);case 6:return function(a,u){const f=Kn(a),m=Kn(u);return f.compareTo(m)}(i.bytesValue,t.bytesValue);case 7:return function(a,u){const f=a.split("/"),m=u.split("/");for(let g=0;g<f.length&&g<m.length;g++){const v=ht(f[g],m[g]);if(v!==0)return v}return ht(f.length,m.length)}(i.referenceValue,t.referenceValue);case 8:return function(a,u){const f=ht(Ot(a.latitude),Ot(u.latitude));return f!==0?f:ht(Ot(a.longitude),Ot(u.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return Ru(i.arrayValue,t.arrayValue);case 10:return function(a,u){var P,M,z,B;const f=a.fields||{},m=u.fields||{},g=(P=f[aa])==null?void 0:P.arrayValue,v=(M=m[aa])==null?void 0:M.arrayValue,T=ht(((z=g==null?void 0:g.values)==null?void 0:z.length)||0,((B=v==null?void 0:v.values)==null?void 0:B.length)||0);return T!==0?T:Ru(g,v)}(i.mapValue,t.mapValue);case 11:return function(a,u){if(a===Bo.mapValue&&u===Bo.mapValue)return 0;if(a===Bo.mapValue)return 1;if(u===Bo.mapValue)return-1;const f=a.fields||{},m=Object.keys(f),g=u.fields||{},v=Object.keys(g);m.sort(),v.sort();for(let T=0;T<m.length&&T<v.length;++T){const P=wc(m[T],v[T]);if(P!==0)return P;const M=Rr(f[m[T]],g[v[T]]);if(M!==0)return M}return ht(m.length,v.length)}(i.mapValue,t.mapValue);default:throw X(23264,{he:e})}}function Cu(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ht(i,t);const e=Zn(i),r=Zn(t),o=ht(e.seconds,r.seconds);return o!==0?o:ht(e.nanos,r.nanos)}function Ru(i,t){const e=i.values||[],r=t.values||[];for(let o=0;o<e.length&&o<r.length;++o){const a=Rr(e[o],r[o]);if(a)return a}return ht(e.length,r.length)}function kr(i){return Tc(i)}function Tc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=Zn(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Kn(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Q.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",o=!0;for(const a of e.values||[])o?o=!1:r+=",",r+=Tc(a);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${Tc(e.fields[u])}`;return o+"}"}(i.mapValue):X(61005,{value:i})}function Go(i){switch(Qn(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Pa(i);return t?16+Go(t):16;case 5:return 2*i.stringValue.length;case 6:return Kn(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,a)=>o+Go(a),0)}(i.arrayValue);case 10:case 11:return function(r){let o=0;return Oi(r.fields,(a,u)=>{o+=a.length+Go(u)}),o}(i.mapValue);default:throw X(13486,{value:i})}}function ku(i,t){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`}}function Ec(i){return!!i&&"integerValue"in i}function Kc(i){return!!i&&"arrayValue"in i}function Lu(i){return!!i&&"nullValue"in i}function xu(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Zo(i){return!!i&&"mapValue"in i}function dg(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[wd])==null?void 0:r.stringValue)===Td}function Es(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return Oi(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Es(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Es(i.arrayValue.values[e]);return t}return{...i}}function fg(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===hg}/**
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
 */class Se{constructor(t){this.value=t}static empty(){return new Se({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Zo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Es(e)}setAll(t){let e=Jt.emptyPath(),r={},o=[];t.forEach((u,f)=>{if(!e.isImmediateParentOf(f)){const m=this.getFieldsMap(e);this.applyChanges(m,r,o),r={},o=[],e=f.popLast()}u?r[f.lastSegment()]=Es(u):o.push(f.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,o)}delete(t){const e=this.field(t.popLast());Zo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return en(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let o=e.mapValue.fields[t.get(r)];Zo(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,r){Oi(e,(o,a)=>t[o]=a);for(const o of r)delete t[o]}clone(){return new Se(Es(this.value))}}function Ed(i){const t=[];return Oi(i.fields,(e,r)=>{const o=new Jt([e]);if(Zo(r)){const a=Ed(r.mapValue).fields;if(a.length===0)t.push(o);else for(const u of a)t.push(o.child(u))}else t.push(o)}),new Me(t)}/**
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
 */class ne{constructor(t,e,r,o,a,u,f){this.key=t,this.documentType=e,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=f}static newInvalidDocument(t){return new ne(t,0,rt.min(),rt.min(),rt.min(),Se.empty(),0)}static newFoundDocument(t,e,r,o){return new ne(t,1,e,rt.min(),r,o,0)}static newNoDocument(t,e){return new ne(t,2,e,rt.min(),rt.min(),Se.empty(),0)}static newUnknownDocument(t,e){return new ne(t,3,e,rt.min(),rt.min(),Se.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ne&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ca{constructor(t,e){this.position=t,this.inclusive=e}}function Du(i,t,e){let r=0;for(let o=0;o<i.position.length;o++){const a=t[o],u=i.position[o];if(a.field.isKeyField()?r=Q.comparator(Q.fromName(u.referenceValue),e.key):r=Rr(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ou(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!en(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Os{constructor(t,e="asc"){this.field=t,this.dir=e}}function pg(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class Id{}class Ft extends Id{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _g(t,e,r):e==="array-contains"?new vg(t,r):e==="in"?new wg(t,r):e==="not-in"?new Tg(t,r):e==="array-contains-any"?new Eg(t,r):new Ft(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new gg(t,r):new yg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Rr(e,this.value)):e!==null&&Qn(this.value)===Qn(e)&&this.matchesComparison(Rr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Id{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Be(t,e)}matches(t){return Ad(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ad(i){return i.op==="and"}function bd(i){return mg(i)&&Ad(i)}function mg(i){for(const t of i.filters)if(t instanceof Be)return!1;return!0}function Ic(i){if(i instanceof Ft)return i.field.canonicalString()+i.op.toString()+kr(i.value);if(bd(i))return i.filters.map(t=>Ic(t)).join(",");{const t=i.filters.map(e=>Ic(e)).join(",");return`${i.op}(${t})`}}function Pd(i,t){return i instanceof Ft?function(r,o){return o instanceof Ft&&r.op===o.op&&r.field.isEqual(o.field)&&en(r.value,o.value)}(i,t):i instanceof Be?function(r,o){return o instanceof Be&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((a,u,f)=>a&&Pd(u,o.filters[f]),!0):!1}(i,t):void X(19439)}function Sd(i){return i instanceof Ft?function(e){return`${e.field.canonicalString()} ${e.op} ${kr(e.value)}`}(i):i instanceof Be?function(e){return e.op.toString()+" {"+e.getFilters().map(Sd).join(" ,")+"}"}(i):"Filter"}class _g extends Ft{constructor(t,e,r){super(t,e,r),this.key=Q.fromName(r.referenceValue)}matches(t){const e=Q.comparator(t.key,this.key);return this.matchesComparison(e)}}class gg extends Ft{constructor(t,e){super(t,"in",e),this.keys=Cd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class yg extends Ft{constructor(t,e){super(t,"not-in",e),this.keys=Cd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Cd(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>Q.fromName(r.referenceValue))}class vg extends Ft{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Kc(e)&&Ds(e.arrayValue,this.value)}}class wg extends Ft{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ds(this.value.arrayValue,e)}}class Tg extends Ft{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ds(this.value.arrayValue,e)}}class Eg extends Ft{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Kc(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ds(this.value.arrayValue,r))}}/**
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
 */class Ig{constructor(t,e=null,r=[],o=[],a=null,u=null,f=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=f,this.Te=null}}function Nu(i,t=null,e=[],r=[],o=null,a=null,u=null){return new Ig(i,t,e,r,o,a,u)}function Qc(i){const t=st(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ic(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),ba(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>kr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>kr(r)).join(",")),t.Te=e}return t.Te}function Jc(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!pg(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Pd(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Ou(i.startAt,t.startAt)&&Ou(i.endAt,t.endAt)}function Ac(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Mr{constructor(t,e=null,r=[],o=[],a=null,u="F",f=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Ag(i,t,e,r,o,a,u,f){return new Mr(i,t,e,r,o,a,u,f)}function Yc(i){return new Mr(i)}function Mu(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function bg(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function Rd(i){return i.collectionGroup!==null}function Is(i){const t=st(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new zt(Jt.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(f=f.add(g.field))})}),f})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new Os(a,r))}),e.has(Jt.keyField().canonicalString())||t.Ie.push(new Os(Jt.keyField(),r))}return t.Ie}function Qe(i){const t=st(i);return t.Ee||(t.Ee=Pg(t,Is(i))),t.Ee}function Pg(i,t){if(i.limitType==="F")return Nu(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Os(o.field,a)});const e=i.endAt?new ca(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new ca(i.startAt.position,i.startAt.inclusive):null;return Nu(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function bc(i,t){const e=i.filters.concat([t]);return new Mr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),e,i.limit,i.limitType,i.startAt,i.endAt)}function Sg(i,t){const e=i.explicitOrderBy.concat([t]);return new Mr(i.path,i.collectionGroup,e,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function Pc(i,t,e){return new Mr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Sa(i,t){return Jc(Qe(i),Qe(t))&&i.limitType===t.limitType}function kd(i){return`${Qc(Qe(i))}|lt:${i.limitType}`}function pr(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(o=>Sd(o)).join(", ")}]`),ba(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(o=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(o)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(o=>kr(o)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(o=>kr(o)).join(",")),`Target(${r})`}(Qe(i))}; limitType=${i.limitType})`}function Ca(i,t){return t.isFoundDocument()&&function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Q.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(i,t)&&function(r,o){for(const a of Is(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(i,t)&&function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0}(i,t)&&function(r,o){return!(r.startAt&&!function(u,f,m){const g=Du(u,f,m);return u.inclusive?g<=0:g<0}(r.startAt,Is(r),o)||r.endAt&&!function(u,f,m){const g=Du(u,f,m);return u.inclusive?g>=0:g>0}(r.endAt,Is(r),o))}(i,t)}function Cg(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Ld(i){return(t,e)=>{let r=!1;for(const o of Is(i)){const a=Rg(o,t,e);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Rg(i,t,e){const r=i.field.isKeyField()?Q.comparator(t.key,e.key):function(a,u,f){const m=u.data.field(a),g=f.data.field(a);return m!==null&&g!==null?Rr(m,g):X(42886)}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:i.dir})}}/**
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
 */class Ni{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),o=this.inner[r];if(o===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],t))return void(o[a]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return r.length===1?delete this.inner[e]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Oi(this.inner,(e,r)=>{for(const[o,a]of r)t(o,a)})}isEmpty(){return pd(this.inner)}size(){return this.innerSize}}/**
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
 */const kg=new Rt(Q.comparator);function An(){return kg}const xd=new Rt(Q.comparator);function vs(...i){let t=xd;for(const e of i)t=t.insert(e.key,e);return t}function Dd(i){let t=xd;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ei(){return As()}function Od(){return As()}function As(){return new Ni(i=>i.toString(),(i,t)=>i.isEqual(t))}const Lg=new Rt(Q.comparator),xg=new zt(Q.comparator);function dt(...i){let t=xg;for(const e of i)t=t.add(e);return t}const Dg=new zt(ht);function Og(){return Dg}/**
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
 */function Xc(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sa(t)?"-0":t}}function Nd(i){return{integerValue:""+i}}function Ng(i,t){return sg(t)?Nd(t):Xc(i,t)}/**
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
 */class Ra{constructor(){this._=void 0}}function Mg(i,t,e){return i instanceof Ns?function(o,a){const u={fields:{[gd]:{stringValue:_d},[vd]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Zc(a)&&(a=Pa(a)),a&&(u.fields[yd]=a),{mapValue:u}}(e,t):i instanceof Ms?Vd(i,t):i instanceof Vs?Fd(i,t):function(o,a){const u=Md(o,a),f=Vu(u)+Vu(o.Ae);return Ec(u)&&Ec(o.Ae)?Nd(f):Xc(o.serializer,f)}(i,t)}function Vg(i,t,e){return i instanceof Ms?Vd(i,t):i instanceof Vs?Fd(i,t):e}function Md(i,t){return i instanceof la?function(r){return Ec(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class Ns extends Ra{}class Ms extends Ra{constructor(t){super(),this.elements=t}}function Vd(i,t){const e=Ud(t);for(const r of i.elements)e.some(o=>en(o,r))||e.push(r);return{arrayValue:{values:e}}}class Vs extends Ra{constructor(t){super(),this.elements=t}}function Fd(i,t){let e=Ud(t);for(const r of i.elements)e=e.filter(o=>!en(o,r));return{arrayValue:{values:e}}}class la extends Ra{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Vu(i){return Ot(i.integerValue||i.doubleValue)}function Ud(i){return Kc(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class Fg{constructor(t,e){this.field=t,this.transform=e}}function Ug(i,t){return i.field.isEqual(t.field)&&function(r,o){return r instanceof Ms&&o instanceof Ms||r instanceof Vs&&o instanceof Vs?Cr(r.elements,o.elements,en):r instanceof la&&o instanceof la?en(r.Ae,o.Ae):r instanceof Ns&&o instanceof Ns}(i.transform,t.transform)}class Bg{constructor(t,e){this.version=t,this.transformResults=e}}class Je{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Je}static exists(t){return new Je(void 0,t)}static updateTime(t){return new Je(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ko(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class ka{}function Bd(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new tl(i.key,Je.none()):new Gs(i.key,i.data,Je.none());{const e=i.data,r=Se.empty();let o=new zt(Jt.comparator);for(let a of t.fields)if(!o.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new Mi(i.key,r,new Me(o.toArray()),Je.none())}}function zg(i,t,e){i instanceof Gs?function(o,a,u){const f=o.value.clone(),m=Uu(o.fieldTransforms,a,u.transformResults);f.setAll(m),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(i,t,e):i instanceof Mi?function(o,a,u){if(!Ko(o.precondition,a))return void a.convertToUnknownDocument(u.version);const f=Uu(o.fieldTransforms,a,u.transformResults),m=a.data;m.setAll(zd(o)),m.setAll(f),a.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(i,t,e):function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function bs(i,t,e,r){return i instanceof Gs?function(a,u,f,m){if(!Ko(a.precondition,u))return f;const g=a.value.clone(),v=Bu(a.fieldTransforms,m,u);return g.setAll(v),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(i,t,e,r):i instanceof Mi?function(a,u,f,m){if(!Ko(a.precondition,u))return f;const g=Bu(a.fieldTransforms,m,u),v=u.data;return v.setAll(zd(a)),v.setAll(g),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),f===null?null:f.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(T=>T.field))}(i,t,e,r):function(a,u,f){return Ko(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(i,t,e)}function qg(i,t){let e=null;for(const r of i.fieldTransforms){const o=t.data.field(r.field),a=Md(r.transform,o||null);a!=null&&(e===null&&(e=Se.empty()),e.set(r.field,a))}return e||null}function Fu(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&Cr(r,o,(a,u)=>Ug(a,u))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class Gs extends ka{constructor(t,e,r,o=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Mi extends ka{constructor(t,e,r,o,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function zd(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function Uu(i,t,e){const r=new Map;Tt(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let o=0;o<e.length;o++){const a=i[o],u=a.transform,f=t.data.field(a.field);r.set(a.field,Vg(u,f,e[o]))}return r}function Bu(i,t,e){const r=new Map;for(const o of i){const a=o.transform,u=e.data.field(o.field);r.set(o.field,Mg(a,u,t))}return r}class tl extends ka{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hg extends ka{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jg{constructor(t,e,r,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(t.key)&&zg(a,t,r[o])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=bs(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=bs(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Od();return this.mutations.forEach(o=>{const a=t.get(o.key),u=a.overlayedDocument;let f=this.applyToLocalView(u,a.mutatedFields);f=e.has(o.key)?null:f;const m=Bd(u,f);m!==null&&r.set(o.key,m),u.isValidDocument()||u.convertToNoDocument(rt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&Cr(this.mutations,t.mutations,(e,r)=>Fu(e,r))&&Cr(this.baseMutations,t.baseMutations,(e,r)=>Fu(e,r))}}class el{constructor(t,e,r,o){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=o}static from(t,e,r){Tt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let o=function(){return Lg}();const a=t.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new el(t,e,r,o)}}/**
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
 */class Wg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class $g{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Vt,mt;function Gg(i){switch(i){case V.OK:return X(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return X(15467,{code:i})}}function qd(i){if(i===void 0)return In("GRPC error has no .code"),V.UNKNOWN;switch(i){case Vt.OK:return V.OK;case Vt.CANCELLED:return V.CANCELLED;case Vt.UNKNOWN:return V.UNKNOWN;case Vt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Vt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Vt.INTERNAL:return V.INTERNAL;case Vt.UNAVAILABLE:return V.UNAVAILABLE;case Vt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Vt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Vt.NOT_FOUND:return V.NOT_FOUND;case Vt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Vt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Vt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Vt.ABORTED:return V.ABORTED;case Vt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Vt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Vt.DATA_LOSS:return V.DATA_LOSS;default:return X(39323,{code:i})}}(mt=Vt||(Vt={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Zg(){return new TextEncoder}/**
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
 */const Kg=new Wn([4294967295,4294967295],0);function zu(i){const t=Zg().encode(i),e=new id;return e.update(t),new Uint8Array(e.digest())}function qu(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),o=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new Wn([e,r],0),new Wn([o,a],0)]}class nl{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ws(`Invalid padding: ${e}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ws(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Wn.fromNumber(this.ge)}ye(t,e,r){let o=t.add(e.multiply(Wn.fromNumber(r)));return o.compare(Kg)===1&&(o=new Wn([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=zu(t),[r,o]=qu(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);if(!this.we(u))return!1}return!0}static create(t,e,r){const o=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new nl(a,o,e);return r.forEach(f=>u.insert(f)),u}insert(t){if(this.ge===0)return;const e=zu(t),[r,o]=qu(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,o,a);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zs{constructor(t,e,r,o,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const o=new Map;return o.set(t,Ks.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Zs(rt.min(),o,new Rt(ht),An(),dt())}}class Ks{constructor(t,e,r,o,a){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ks(r,e,dt(),dt(),dt())}}/**
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
 */class Qo{constructor(t,e,r,o){this.be=t,this.removedTargetIds=e,this.key=r,this.De=o}}class Hd{constructor(t,e){this.targetId=t,this.Ce=e}}class jd{constructor(t,e,r=Yt.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=o}}class Hu{constructor(){this.ve=0,this.Fe=ju(),this.Me=Yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=dt(),e=dt(),r=dt();return this.Fe.forEach((o,a)=>{switch(a){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:r=r.add(o);break;default:X(38017,{changeType:a})}}),new Ks(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=ju()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Tt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Qg{constructor(t){this.Ge=t,this.ze=new Map,this.je=An(),this.Je=zo(),this.He=zo(),this.Ze=new Rt(ht)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:X(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,o)=>{this.rt(o)&&e(o)})}st(t){const e=t.targetId,r=t.Ce.count,o=this.ot(e);if(o){const a=o.target;if(Ac(a))if(r===0){const u=new Q(a.path);this.et(e,u,ne.newNoDocument(u,rt.min()))}else Tt(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const f=this.ut(t),m=f?this.ct(f,t,u):1;if(m!==0){this.it(e);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=e;let u,f;try{u=Kn(r).toUint8Array()}catch(m){if(m instanceof md)return Li("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new nl(u,o,a)}catch(m){return Li(m instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let o=0;return r.forEach(a=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(f)||(this.et(e,a,null),o++)}),o}Tt(t){const e=new Map;this.ze.forEach((a,u)=>{const f=this.ot(u);if(f){if(a.current&&Ac(f.target)){const m=new Q(f.target.path);this.It(m).has(u)||this.Et(u,m)||this.et(u,m,ne.newNoDocument(m,t))}a.Be&&(e.set(u,a.ke()),a.Ke())}});let r=dt();this.He.forEach((a,u)=>{let f=!0;u.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(a))}),this.je.forEach((a,u)=>u.setReadTime(t));const o=new Zs(t,e,this.Ze,this.je,r);return this.je=An(),this.Je=zo(),this.He=zo(),this.Ze=new Rt(ht),o}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,e)?o.qe(e,1):o.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Hu,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new zt(ht),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new zt(ht),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||j("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Hu),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function zo(){return new Rt(Q.comparator)}function ju(){return new Rt(Q.comparator)}const Jg={asc:"ASCENDING",desc:"DESCENDING"},Yg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xg={and:"AND",or:"OR"};class ty{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Sc(i,t){return i.useProto3Json||ba(t)?t:{value:t}}function ua(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wd(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function ey(i,t){return ua(i,t.toTimestamp())}function Ye(i){return Tt(!!i,49232),rt.fromTimestamp(function(e){const r=Zn(e);return new St(r.seconds,r.nanos)}(i))}function il(i,t){return Cc(i,t).canonicalString()}function Cc(i,t){const e=function(o){return new bt(["projects",o.projectId,"databases",o.database])}(i).child("documents");return t===void 0?e:e.child(t)}function $d(i){const t=bt.fromString(i);return Tt(Jd(t),10190,{key:t.toString()}),t}function Rc(i,t){return il(i.databaseId,t.path)}function rc(i,t){const e=$d(t);if(e.get(1)!==i.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Q(Zd(e))}function Gd(i,t){return il(i.databaseId,t)}function ny(i){const t=$d(i);return t.length===4?bt.emptyPath():Zd(t)}function kc(i){return new bt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Zd(i){return Tt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Wu(i,t,e){return{name:Rc(i,t),fields:e.value.mapValue.fields}}function iy(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:X(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],a=function(g,v){return g.useProto3Json?(Tt(v===void 0||typeof v=="string",58123),Yt.fromBase64String(v||"")):(Tt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Yt.fromUint8Array(v||new Uint8Array))}(i,t.targetChange.resumeToken),u=t.targetChange.cause,f=u&&function(g){const v=g.code===void 0?V.UNKNOWN:qd(g.code);return new $(v,g.message||"")}(u);e=new jd(r,o,a,f||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=rc(i,r.document.name),a=Ye(r.document.updateTime),u=r.document.createTime?Ye(r.document.createTime):rt.min(),f=new Se({mapValue:{fields:r.document.fields}}),m=ne.newFoundDocument(o,a,u,f),g=r.targetIds||[],v=r.removedTargetIds||[];e=new Qo(g,v,m.key,m)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=rc(i,r.document),a=r.readTime?Ye(r.readTime):rt.min(),u=ne.newNoDocument(o,a),f=r.removedTargetIds||[];e=new Qo([],f,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=rc(i,r.document),a=r.removedTargetIds||[];e=new Qo([],a,o,null)}else{if(!("filter"in t))return X(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new $g(o,a),f=r.targetId;e=new Hd(f,u)}}return e}function ry(i,t){let e;if(t instanceof Gs)e={update:Wu(i,t.key,t.value)};else if(t instanceof tl)e={delete:Rc(i,t.key)};else if(t instanceof Mi)e={update:Wu(i,t.key,t.data),updateMask:fy(t.fieldMask)};else{if(!(t instanceof Hg))return X(16599,{dt:t.type});e={verify:Rc(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(a,u){const f=u.transform;if(f instanceof Ns)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ms)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Vs)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof la)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw X(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:ey(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:X(27497)}(i,t.precondition)),e}function sy(i,t){return i&&i.length>0?(Tt(t!==void 0,14353),i.map(e=>function(o,a){let u=o.updateTime?Ye(o.updateTime):Ye(a);return u.isEqual(rt.min())&&(u=Ye(a)),new Bg(u,o.transformResults||[])}(e,t))):[]}function oy(i,t){return{documents:[Gd(i,t.path)]}}function ay(i,t){const e={structuredQuery:{}},r=t.path;let o;t.collectionGroup!==null?(o=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Gd(i,o);const a=function(g){if(g.length!==0)return Qd(Be.create(g,"and"))}(t.filters);a&&(e.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(v=>function(P){return{field:mr(P.field),direction:uy(P.dir)}}(v))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const f=Sc(i,t.limit);return f!==null&&(e.structuredQuery.limit=f),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ft:e,parent:o}}function cy(i){let t=ny(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let o=null;if(r>0){Tt(r===1,65062);const v=e.from[0];v.allDescendants?o=v.collectionId:t=t.child(v.collectionId)}let a=[];e.where&&(a=function(T){const P=Kd(T);return P instanceof Be&&bd(P)?P.getFilters():[P]}(e.where));let u=[];e.orderBy&&(u=function(T){return T.map(P=>function(z){return new Os(_r(z.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(P))}(e.orderBy));let f=null;e.limit&&(f=function(T){let P;return P=typeof T=="object"?T.value:T,ba(P)?null:P}(e.limit));let m=null;e.startAt&&(m=function(T){const P=!!T.before,M=T.values||[];return new ca(M,P)}(e.startAt));let g=null;return e.endAt&&(g=function(T){const P=!T.before,M=T.values||[];return new ca(M,P)}(e.endAt)),Ag(t,o,u,a,f,"F",m,g)}function ly(i,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:o})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Kd(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=_r(e.unaryFilter.field);return Ft.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=_r(e.unaryFilter.field);return Ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=_r(e.unaryFilter.field);return Ft.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=_r(e.unaryFilter.field);return Ft.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(i):i.fieldFilter!==void 0?function(e){return Ft.create(_r(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Be.create(e.compositeFilter.filters.map(r=>Kd(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(e.compositeFilter.op))}(i):X(30097,{filter:i})}function uy(i){return Jg[i]}function hy(i){return Yg[i]}function dy(i){return Xg[i]}function mr(i){return{fieldPath:i.canonicalString()}}function _r(i){return Jt.fromServerFormat(i.fieldPath)}function Qd(i){return i instanceof Ft?function(e){if(e.op==="=="){if(xu(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NAN"}};if(Lu(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(xu(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NOT_NAN"}};if(Lu(e.value))return{unaryFilter:{field:mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mr(e.field),op:hy(e.op),value:e.value}}}(i):i instanceof Be?function(e){const r=e.getFilters().map(o=>Qd(o));return r.length===1?r[0]:{compositeFilter:{op:dy(e.op),filters:r}}}(i):X(54877,{filter:i})}function fy(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Jd(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Yd(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class yn{constructor(t,e,r,o,a=rt.min(),u=rt.min(),f=Yt.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(t){return new yn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class py{constructor(t){this.yt=t}}function my(i){const t=cy({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Pc(t,t.limit,"L"):t}/**
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
 */class _y{constructor(){this.bn=new gy}addToCollectionParentIndex(t,e){return this.bn.add(e),F.resolve()}getCollectionParents(t,e){return F.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return F.resolve()}deleteFieldIndex(t,e){return F.resolve()}deleteAllFieldIndexes(t){return F.resolve()}createTargetIndexes(t,e){return F.resolve()}getDocumentsMatchingTarget(t,e){return F.resolve(null)}getIndexType(t,e){return F.resolve(0)}getFieldIndexes(t,e){return F.resolve([])}getNextCollectionGroupToUpdate(t){return F.resolve(null)}getMinOffset(t,e){return F.resolve(Gn.min())}getMinOffsetFromCollectionGroup(t,e){return F.resolve(Gn.min())}updateCollectionGroup(t,e,r){return F.resolve()}updateIndexEntries(t,e){return F.resolve()}}class gy{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),o=this.index[e]||new zt(bt.comparator),a=!o.has(r);return this.index[e]=o.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),o=this.index[e];return o&&o.has(r)}getEntries(t){return(this.index[t]||new zt(bt.comparator)).toArray()}}/**
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
 */const $u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xd=41943040;class fe{static withCacheSize(t){return new fe(t,fe.DEFAULT_COLLECTION_PERCENTILE,fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */fe.DEFAULT_COLLECTION_PERCENTILE=10,fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fe.DEFAULT=new fe(Xd,fe.DEFAULT_COLLECTION_PERCENTILE,fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fe.DISABLED=new fe(-1,0,0);/**
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
 */class Jn{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Jn(0)}static ar(){return new Jn(-1)}}/**
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
 */const Gu="LruGarbageCollector",yy=1048576;function Zu([i,t],[e,r]){const o=ht(i,e);return o===0?ht(t,r):o}class vy{constructor(t){this.Pr=t,this.buffer=new zt(Zu),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Zu(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class wy{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){j(Gu,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Nr(e)?j(Gu,"Ignoring IndexedDB error during garbage collection: ",e):await Or(e)}await this.Ar(3e5)})}}class Ty{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return F.resolve(Aa.ce);const r=new vy(e);return this.Vr.forEachTarget(t,o=>r.Er(o.sequenceNumber)).next(()=>this.Vr.mr(t,o=>r.Er(o))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve($u)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$u):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,o,a,u,f,m,g;const v=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,u=Date.now(),this.nthSequenceNumber(t,o))).next(T=>(r=T,f=Date.now(),this.removeTargets(t,r,e))).next(T=>(a=T,m=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(g=Date.now(),fr()<=ft.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(f-u)+`ms
	Removed ${a} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-v}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:T})))}}function Ey(i,t){return new Ty(i,t)}/**
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
 */class Iy{constructor(){this.changes=new Ni(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ne.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?F.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Ay{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class by{constructor(t,e,r,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=o}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(r=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(r!==null&&bs(r.mutation,o,Me.empty(),St.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,dt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=dt()){const o=Ei();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,r).next(a=>{let u=vs();return a.forEach((f,m)=>{u=u.insert(f,m.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Ei();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,dt()))}populateOverlays(t,e,r){const o=[];return r.forEach(a=>{e.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(t,o).next(a=>{a.forEach((u,f)=>{e.set(u,f)})})}computeViews(t,e,r,o){let a=An();const u=As(),f=function(){return As()}();return e.forEach((m,g)=>{const v=r.get(g.key);o.has(g.key)&&(v===void 0||v.mutation instanceof Mi)?a=a.insert(g.key,g):v!==void 0?(u.set(g.key,v.mutation.getFieldMask()),bs(v.mutation,g,v.mutation.getFieldMask(),St.now())):u.set(g.key,Me.empty())}),this.recalculateAndSaveOverlays(t,a).next(m=>(m.forEach((g,v)=>u.set(g,v)),e.forEach((g,v)=>f.set(g,new Ay(v,u.get(g)??null))),f))}recalculateAndSaveOverlays(t,e){const r=As();let o=new Rt((u,f)=>u-f),a=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const f of u)f.keys().forEach(m=>{const g=e.get(m);if(g===null)return;let v=r.get(m)||Me.empty();v=f.applyToLocalView(g,v),r.set(m,v);const T=(o.get(f.batchId)||dt()).add(m);o=o.insert(f.batchId,T)})}).next(()=>{const u=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,v=m.value,T=Od();v.forEach(P=>{if(!a.has(P)){const M=Bd(e.get(P),r.get(P));M!==null&&T.set(P,M),a=a.add(P)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,T))}return F.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,o){return bg(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Rd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,o):this.getDocumentsMatchingCollectionQuery(t,e,r,o)}getNextDocuments(t,e,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,o).next(a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,o-a.size):F.resolve(Ei());let f=ks,m=a;return u.next(g=>F.forEach(g,(v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),a.get(v)?F.resolve():this.remoteDocumentCache.getEntry(t,v).next(P=>{m=m.insert(v,P)}))).next(()=>this.populateOverlays(t,g,a)).next(()=>this.computeViews(t,m,g,dt())).next(v=>({batchId:f,changes:Dd(v)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Q(e)).next(r=>{let o=vs();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,r,o){const a=e.collectionGroup;let u=vs();return this.indexManager.getCollectionParents(t,a).next(f=>F.forEach(f,m=>{const g=function(T,P){return new Mr(P,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,m.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,r,o).next(v=>{v.forEach((T,P)=>{u=u.insert(T,P)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,o))).next(u=>{a.forEach((m,g)=>{const v=g.getKey();u.get(v)===null&&(u=u.insert(v,ne.newInvalidDocument(v)))});let f=vs();return u.forEach((m,g)=>{const v=a.get(m);v!==void 0&&bs(v.mutation,g,Me.empty(),St.now()),Ca(e,g)&&(f=f.insert(m,g))}),f})}}/**
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
 */class Py{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return F.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:Ye(o.createTime)}}(e)),F.resolve()}getNamedQuery(t,e){return F.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(o){return{name:o.name,query:my(o.bundledQuery),readTime:Ye(o.readTime)}}(e)),F.resolve()}}/**
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
 */class Sy{constructor(){this.overlays=new Rt(Q.comparator),this.Lr=new Map}getOverlay(t,e){return F.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ei();return F.forEach(e,o=>this.getOverlay(t,o).next(a=>{a!==null&&r.set(o,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((o,a)=>{this.St(t,e,a)}),F.resolve()}removeOverlaysForBatchId(t,e,r){const o=this.Lr.get(r);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(t,e,r){const o=Ei(),a=e.length+1,u=new Q(e.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&m.largestBatchId>r&&o.set(m.getKey(),m)}return F.resolve(o)}getOverlaysForCollectionGroup(t,e,r,o){let a=new Rt((g,v)=>g-v);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let v=a.get(g.largestBatchId);v===null&&(v=Ei(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=Ei(),m=a.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,v)=>f.set(g,v)),!(f.size()>=o)););return F.resolve(f)}St(t,e,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.Lr.get(o.largestBatchId).delete(r.key);this.Lr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Wg(e,r));let a=this.Lr.get(e);a===void 0&&(a=dt(),this.Lr.set(e,a)),this.Lr.set(e,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Cy{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(t){return F.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,F.resolve()}}/**
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
 */class rl{constructor(){this.kr=new zt(Gt.Kr),this.qr=new zt(Gt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Gt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new Gt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new Q(new bt([])),r=new Gt(e,t),o=new Gt(e,t+1),a=[];return this.qr.forEachInRange([r,o],u=>{this.Wr(u),a.push(u.key)}),a}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new Q(new bt([])),r=new Gt(e,t),o=new Gt(e,t+1);let a=dt();return this.qr.forEachInRange([r,o],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Gt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Gt{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return Q.comparator(t.key,e.key)||ht(t.Jr,e.Jr)}static Ur(t,e){return ht(t.Jr,e.Jr)||Q.comparator(t.key,e.key)}}/**
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
 */class Ry{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new zt(Gt.Kr)}checkEmpty(t){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,o){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new jg(a,e,r,o);this.mutationQueue.push(u);for(const f of o)this.Hr=this.Hr.add(new Gt(f.key,a)),this.indexManager.addToCollectionParentIndex(t,f.key.path.popLast());return F.resolve(u)}lookupMutationBatch(t,e){return F.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,o=this.Xr(r),a=o<0?0:o;return F.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Gc:this.Yn-1)}getAllMutationBatches(t){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Gt(e,0),o=new Gt(e,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,o],u=>{const f=this.Zr(u.Jr);a.push(f)}),F.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new zt(ht);return e.forEach(o=>{const a=new Gt(o,0),u=new Gt(o,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,u],f=>{r=r.add(f.Jr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,o=r.length+1;let a=r;Q.isDocumentKey(a)||(a=a.child(""));const u=new Gt(new Q(a),0);let f=new zt(ht);return this.Hr.forEachWhile(m=>{const g=m.key.path;return!!r.isPrefixOf(g)&&(g.length===o&&(f=f.add(m.Jr)),!0)},u),F.resolve(this.Yr(f))}Yr(t){const e=[];return t.forEach(r=>{const o=this.Zr(r);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){Tt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return F.forEach(e.mutations,o=>{const a=new Gt(o.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new Gt(e,0),o=this.Hr.firstAfterOrEqual(r);return F.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,F.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ky{constructor(t){this.ti=t,this.docs=function(){return new Rt(Q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,o=this.docs.get(r),a=o?o.size:0,u=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return F.resolve(r?r.document.mutableCopy():ne.newInvalidDocument(e))}getEntries(t,e){let r=An();return e.forEach(o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():ne.newInvalidDocument(o))}),F.resolve(r)}getDocumentsMatchingQuery(t,e,r,o){let a=An();const u=e.path,f=new Q(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:v}}=m.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||eg(tg(v),r)<=0||(o.has(v.key)||Ca(e,v))&&(a=a.insert(v.key,v.mutableCopy()))}return F.resolve(a)}getAllFromCollectionGroup(t,e,r,o){X(9500)}ni(t,e){return F.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ly(this)}getSize(t){return F.resolve(this.size)}}class Ly extends Iy{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?e.push(this.Mr.addEntry(t,o)):this.Mr.removeEntry(r)}),F.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class xy{constructor(t){this.persistence=t,this.ri=new Ni(e=>Qc(e),Jc),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.ii=0,this.si=new rl,this.targetCount=0,this.oi=Jn._r()}forEachTarget(t,e){return this.ri.forEach((r,o)=>e(o)),F.resolve()}getLastRemoteSnapshotVersion(t){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return F.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),F.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Jn(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,F.resolve()}updateTargetData(t,e){return this.lr(e),F.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,F.resolve()}removeTargets(t,e,r){let o=0;const a=[];return this.ri.forEach((u,f)=>{f.sequenceNumber<=e&&r.get(f.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(t,f.targetId)),o++)}),F.waitFor(a).next(()=>o)}getTargetCount(t){return F.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return F.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),F.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const o=this.persistence.referenceDelegate,a=[];return o&&e.forEach(u=>{a.push(o.markPotentiallyOrphaned(t,u))}),F.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),F.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return F.resolve(r)}containsKey(t,e){return F.resolve(this.si.containsKey(e))}}/**
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
 */class tf{constructor(t,e){this._i={},this.overlays={},this.ai=new Aa(0),this.ui=!1,this.ui=!0,this.ci=new Cy,this.referenceDelegate=t(this),this.li=new xy(this),this.indexManager=new _y,this.remoteDocumentCache=function(o){return new ky(o)}(r=>this.referenceDelegate.hi(r)),this.serializer=new py(e),this.Pi=new Py(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Ry(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){j("MemoryPersistence","Starting transaction:",t);const o=new Dy(this.ai.next());return this.referenceDelegate.Ti(),r(o).next(a=>this.referenceDelegate.Ii(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Ei(t,e){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Dy extends ig{constructor(t){super(),this.currentSequenceNumber=t}}class sl{constructor(t){this.persistence=t,this.Ri=new rl,this.Ai=null}static Vi(t){return new sl(t)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),F.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),F.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(o=>this.di.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const o=Q.fromPath(r);return this.mi(t,o).next(a=>{a||e.removeEntry(o,rt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return F.or([()=>F.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ha{constructor(t,e){this.persistence=t,this.fi=new Ni(r=>og(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=Ey(this,e)}static Vi(t,e){return new ha(t,e)}Ti(){}Ii(t){return F.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(o=>r+o))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return F.forEach(this.fi,(r,o)=>this.wr(t,r,o).next(a=>a?F.resolve():e(o)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ni(t,u=>this.wr(t,u,e).next(f=>{f||(r++,a.removeEntry(u,rt.min()))})).next(()=>a.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),F.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),F.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),F.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),F.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Go(t.data.value)),e}wr(t,e,r){return F.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const o=this.fi.get(e);return F.resolve(o!==void 0&&o>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class ol{constructor(t,e,r,o){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=o}static Es(t,e){let r=dt(),o=dt();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new ol(t,e.fromCache,r,o)}}/**
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
 */class Oy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ny{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Tm()?8:rg(ie())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,o){const a={result:null};return this.gs(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ps(t,e,o,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Oy;return this.ys(t,e,u).next(f=>{if(a.result=f,this.As)return this.ws(t,e,u,f.size)})}).next(()=>a.result)}ws(t,e,r,o){return r.documentReadCount<this.Vs?(fr()<=ft.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",pr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(fr()<=ft.DEBUG&&j("QueryEngine","Query:",pr(e),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ds*o?(fr()<=ft.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",pr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Qe(e))):F.resolve())}gs(t,e){if(Mu(e))return F.resolve(null);let r=Qe(e);return this.indexManager.getIndexType(t,r).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=Pc(e,null,"F"),r=Qe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=dt(...a);return this.fs.getDocuments(t,u).next(f=>this.indexManager.getMinOffset(t,r).next(m=>{const g=this.Ss(e,f);return this.bs(e,g,u,m.readTime)?this.gs(t,Pc(e,null,"F")):this.Ds(t,g,e,m)}))})))}ps(t,e,r,o){return Mu(e)||o.isEqual(rt.min())?F.resolve(null):this.fs.getDocuments(t,r).next(a=>{const u=this.Ss(e,a);return this.bs(e,u,r,o)?F.resolve(null):(fr()<=ft.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),pr(e)),this.Ds(t,u,e,X_(o,ks)).next(f=>f))})}Ss(t,e){let r=new zt(Ld(t));return e.forEach((o,a)=>{Ca(t,a)&&(r=r.add(a))}),r}bs(t,e,r,o){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ys(t,e,r){return fr()<=ft.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",pr(e)),this.fs.getDocumentsMatchingQuery(t,e,Gn.min(),r)}Ds(t,e,r,o){return this.fs.getDocumentsMatchingQuery(t,r,o).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */const al="LocalStore",My=3e8;class Vy{constructor(t,e,r,o){this.persistence=t,this.Cs=e,this.serializer=o,this.vs=new Rt(ht),this.Fs=new Ni(a=>Qc(a),Jc),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new by(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Fy(i,t,e,r){return new Vy(i,t,e,r)}async function ef(i,t){const e=st(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let o;return e.mutationQueue.getAllMutationBatches(r).next(a=>(o=a,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],f=[];let m=dt();for(const g of o){u.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}for(const g of a){f.push(g.batchId);for(const v of g.mutations)m=m.add(v.key)}return e.localDocuments.getDocuments(r,m).next(g=>({Ns:g,removedBatchIds:u,addedBatchIds:f}))})})}function Uy(i,t){const e=st(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=t.batch.keys(),a=e.xs.newChangeBuffer({trackRemovals:!0});return function(f,m,g,v){const T=g.batch,P=T.keys();let M=F.resolve();return P.forEach(z=>{M=M.next(()=>v.getEntry(m,z)).next(B=>{const H=g.docVersions.get(z);Tt(H!==null,48541),B.version.compareTo(H)<0&&(T.applyToRemoteDocument(B,g),B.isValidDocument()&&(B.setReadTime(g.commitVersion),v.addEntry(B)))})}),M.next(()=>f.mutationQueue.removeMutationBatch(m,T))}(e,r,t,a).next(()=>a.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let m=dt();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m}(t))).next(()=>e.localDocuments.getDocuments(r,o))})}function nf(i){const t=st(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function By(i,t){const e=st(i),r=t.snapshotVersion;let o=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=e.xs.newChangeBuffer({trackRemovals:!0});o=e.vs;const f=[];t.targetChanges.forEach((v,T)=>{const P=o.get(T);if(!P)return;f.push(e.li.removeMatchingKeys(a,v.removedDocuments,T).next(()=>e.li.addMatchingKeys(a,v.addedDocuments,T)));let M=P.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(T)!==null?M=M.withResumeToken(Yt.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):v.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(v.resumeToken,r)),o=o.insert(T,M),function(B,H,K){return B.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=My?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(P,M,v)&&f.push(e.li.updateTargetData(a,M))});let m=An(),g=dt();if(t.documentUpdates.forEach(v=>{t.resolvedLimboDocuments.has(v)&&f.push(e.persistence.referenceDelegate.updateLimboDocument(a,v))}),f.push(zy(a,u,t.documentUpdates).next(v=>{m=v.Bs,g=v.Ls})),!r.isEqual(rt.min())){const v=e.li.getLastRemoteSnapshotVersion(a).next(T=>e.li.setTargetsMetadata(a,a.currentSequenceNumber,r));f.push(v)}return F.waitFor(f).next(()=>u.apply(a)).next(()=>e.localDocuments.getLocalViewOfDocuments(a,m,g)).next(()=>m)}).then(a=>(e.vs=o,a))}function zy(i,t,e){let r=dt(),o=dt();return e.forEach(a=>r=r.add(a)),t.getEntries(i,r).next(a=>{let u=An();return e.forEach((f,m)=>{const g=a.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(rt.min())?(t.removeEntry(f,m.readTime),u=u.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),u=u.insert(f,m)):j(al,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)}),{Bs:u,Ls:o}})}function qy(i,t){const e=st(i);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Gc),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Hy(i,t){const e=st(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return e.li.getTargetData(r,t).next(a=>a?(o=a,F.resolve(o)):e.li.allocateTargetId(r).next(u=>(o=new yn(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=e.vs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function Lc(i,t,e){const r=st(i),o=r.vs.get(t),a=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,o))}catch(u){if(!Nr(u))throw u;j(al,`Failed to update sequence numbers for target ${t}: ${u}`)}r.vs=r.vs.remove(t),r.Fs.delete(o.target)}function Ku(i,t,e){const r=st(i);let o=rt.min(),a=dt();return r.persistence.runTransaction("Execute query","readwrite",u=>function(m,g,v){const T=st(m),P=T.Fs.get(v);return P!==void 0?F.resolve(T.vs.get(P)):T.li.getTargetData(g,v)}(r,u,Qe(t)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,f.targetId).next(m=>{a=m})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?o:rt.min(),e?a:dt())).next(f=>(jy(r,Cg(t),f),{documents:f,ks:a})))}function jy(i,t,e){let r=i.Ms.get(t)||rt.min();e.forEach((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),i.Ms.set(t,r)}class Qu{constructor(){this.activeTargetIds=Og()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wy{constructor(){this.vo=new Qu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Qu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class $y{Mo(t){}shutdown(){}}/**
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
 */const Ju="ConnectivityMonitor";class Yu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(Ju,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){j(Ju,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qo=null;function xc(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
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
 */const sc="RestConnection",Gy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Zy{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${o}`,this.$o=this.databaseId.database===oa?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(t,e,r,o,a){const u=xc(),f=this.Qo(t,e.toUriEncodedString());j(sc,`Sending RPC '${t}' ${u}:`,f,r);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(m,o,a);const{host:g}=new URL(f),v=Ws(g);return this.zo(t,f,m,r,v).then(T=>(j(sc,`Received RPC '${t}' ${u}: `,T),T),T=>{throw Li(sc,`RPC '${t}' ${u} failed with error: `,T,"url: ",f,"request:",r),T})}jo(t,e,r,o,a,u){return this.Wo(t,e,r,o,a)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Dr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((o,a)=>t[a]=o),r&&r.headers.forEach((o,a)=>t[a]=o)}Qo(t,e){const r=Gy[t];let o=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(o=`${o}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),o}terminate(){}}/**
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
 */class Ky{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const te="WebChannelConnection",ps=(i,t,e)=>{i.listen(t,r=>{try{e(r)}catch(o){setTimeout(()=>{throw o},0)}})};class vr extends Zy{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!vr.c_){const t=ad();ps(t,od.STAT_EVENT,e=>{e.stat===vc.PROXY?j(te,"STAT_EVENT: detected buffering proxy"):e.stat===vc.NOPROXY&&j(te,"STAT_EVENT: detected no buffering proxy")}),vr.c_=!0}}zo(t,e,r,o,a){const u=xc();return new Promise((f,m)=>{const g=new rd;g.setWithCredentials(!0),g.listenOnce(sd.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case $o.NO_ERROR:const T=g.getResponseJson();j(te,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(T)),f(T);break;case $o.TIMEOUT:j(te,`RPC '${t}' ${u} timed out`),m(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case $o.HTTP_ERROR:const P=g.getStatus();if(j(te,`RPC '${t}' ${u} failed with status:`,P,"response text:",g.getResponseText()),P>0){let M=g.getResponseJson();Array.isArray(M)&&(M=M[0]);const z=M==null?void 0:M.error;if(z&&z.status&&z.message){const B=function(K){const ot=K.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(ot)>=0?ot:V.UNKNOWN}(z.status);m(new $(B,z.message))}else m(new $(V.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new $(V.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:t,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{j(te,`RPC '${t}' ${u} completed.`)}});const v=JSON.stringify(o);j(te,`RPC '${t}' ${u} sending request:`,o),g.send(e,"POST",v,r,15)})}T_(t,e,r){const o=xc(),a=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const g=a.join("");j(te,`Creating RPC '${t}' stream ${o}: ${g}`,f);const v=u.createWebChannel(g,f);this.I_(v);let T=!1,P=!1;const M=new Ky({Jo:z=>{P?j(te,`Not sending because RPC '${t}' stream ${o} is closed:`,z):(T||(j(te,`Opening RPC '${t}' stream ${o} transport.`),v.open(),T=!0),j(te,`RPC '${t}' stream ${o} sending:`,z),v.send(z))},Ho:()=>v.close()});return ps(v,ys.EventType.OPEN,()=>{P||(j(te,`RPC '${t}' stream ${o} transport opened.`),M.i_())}),ps(v,ys.EventType.CLOSE,()=>{P||(P=!0,j(te,`RPC '${t}' stream ${o} transport closed`),M.o_(),this.E_(v))}),ps(v,ys.EventType.ERROR,z=>{P||(P=!0,Li(te,`RPC '${t}' stream ${o} transport errored. Name:`,z.name,"Message:",z.message),M.o_(new $(V.UNAVAILABLE,"The operation could not be completed")))}),ps(v,ys.EventType.MESSAGE,z=>{var B;if(!P){const H=z.data[0];Tt(!!H,16349);const K=H,ot=(K==null?void 0:K.error)||((B=K[0])==null?void 0:B.error);if(ot){j(te,`RPC '${t}' stream ${o} received error:`,ot);const ut=ot.status;let qt=function(C){const E=Vt[C];if(E!==void 0)return qd(E)}(ut),kt=ot.message;ut==="NOT_FOUND"&&kt.includes("database")&&kt.includes("does not exist")&&kt.includes(this.databaseId.database)&&Li(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),qt===void 0&&(qt=V.INTERNAL,kt="Unknown error status: "+ut+" with message "+ot.message),P=!0,M.o_(new $(qt,kt)),v.close()}else j(te,`RPC '${t}' stream ${o} received:`,H),M.__(H)}}),vr.u_(),setTimeout(()=>{M.s_()},0),M}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cd()}}/**
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
 */function Qy(i){return new vr(i)}function oc(){return typeof document<"u"?document:null}/**
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
 */function La(i){return new ty(i,!0)}/**
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
 */vr.c_=!1;class rf{constructor(t,e,r=1e3,o=1.5,a=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=o,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,e-r);o>0&&j("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Xu="PersistentStream";class sf{constructor(t,e,r,o,a,u,f,m){this.Ci=t,this.S_=r,this.b_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(In(e.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.D_===e&&this.G_(r,o)},r=>{t(()=>{const o=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(o=>{r(()=>this.z_(o))}),this.stream.onMessage(o=>{r(()=>++this.F_==1?this.J_(o):this.onNext(o))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return j(Xu,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(j(Xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jy extends sf{constructor(t,e,r,o,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,o,u),this.serializer=a}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=iy(this.serializer,t),r=function(a){if(!("targetChange"in a))return rt.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?rt.min():u.readTime?Ye(u.readTime):rt.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=kc(this.serializer),e.addTarget=function(a,u){let f;const m=u.target;if(f=Ac(m)?{documents:oy(a,m)}:{query:ay(a,m).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=Wd(a,u.resumeToken);const g=Sc(a,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(rt.min())>0){f.readTime=ua(a,u.snapshotVersion.toTimestamp());const g=Sc(a,u.expectedCount);g!==null&&(f.expectedCount=g)}return f}(this.serializer,t);const r=ly(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=kc(this.serializer),e.removeTarget=t,this.K_(e)}}class Yy extends sf{constructor(t,e,r,o,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,o,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Tt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Tt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Tt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=sy(t.writeResults,t.commitTime),r=Ye(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=kc(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>ry(this.serializer,r))};this.K_(e)}}/**
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
 */class Xy{}class tv extends Xy{constructor(t,e,r,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,Cc(e,r),o,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new $(V.UNKNOWN,a.toString())})}jo(t,e,r,o,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.jo(t,Cc(e,r),o,u,f,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new $(V.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function ev(i,t,e,r){return new tv(i,t,e,r)}class nv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(In(e),this.aa=!1):j("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const nn="RemoteStore";class iv{constructor(t,e,r,o,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Jn(1e3),this.Va=new Jn(1001),this.da=new Set,this.ma=[],this.fa=a,this.fa.Mo(u=>{r.enqueueAndForget(async()=>{Vi(this)&&(j(nn,"Restarting streams for network reachability change."),await async function(m){const g=st(m);g.da.add(4),await Qs(g),g.ga.set("Unknown"),g.da.delete(4),await xa(g)}(this))})}),this.ga=new nv(r,o)}}async function xa(i){if(Vi(i))for(const t of i.ma)await t(!0)}async function Qs(i){for(const t of i.ma)await t(!1)}function Dc(i,t){return i.Ea.get(t)||void 0}function of(i,t){const e=st(i),r=Dc(e,t.targetId);if(r!==void 0&&e.Ia.has(r))return;const o=function(f,m){const g=Dc(f,m);g!==void 0&&f.Ra.delete(g);const v=function(P,M){return M%2!=0?P.Va.next():P.Aa.next()}(f,m);return f.Ea.set(m,v),f.Ra.set(v,m),v}(e,t.targetId);j(nn,"remoteStoreListen mapping SDK target ID to remote",t.targetId,o);const a=new yn(t.target,o,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(o,a),hl(e)?ul(e):Vr(e).O_()&&ll(e,a)}function cl(i,t){const e=st(i),r=Vr(e),o=Dc(e,t);j(nn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,o),e.Ia.delete(o),e.Ea.delete(t),e.Ra.delete(o),r.O_()&&af(e,o),e.Ia.size===0&&(r.O_()?r.L_():Vi(e)&&e.ga.set("Unknown"))}function ll(i,t){if(i.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){const e=i.Ra.get(t.targetId);if(e===void 0)return void j(nn,"SDK target ID not found for remote ID: "+t.targetId);const r=i.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}Vr(i).Z_(t)}function af(i,t){i.pa.$e(t),Vr(i).X_(t)}function ul(i){i.pa=new Qg({getRemoteKeysForTarget:t=>{const e=i.Ra.get(t);return e!==void 0?i.remoteSyncer.getRemoteKeysForTarget(e):dt()},At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),Vr(i).start(),i.ga.ua()}function hl(i){return Vi(i)&&!Vr(i).x_()&&i.Ia.size>0}function Vi(i){return st(i).da.size===0}function cf(i){i.pa=void 0}async function rv(i){i.ga.set("Online")}async function sv(i){i.Ia.forEach((t,e)=>{ll(i,t)})}async function ov(i,t){cf(i),hl(i)?(i.ga.ha(t),ul(i)):i.ga.set("Unknown")}async function av(i,t,e){if(i.ga.set("Online"),t instanceof jd&&t.state===2&&t.cause)try{await async function(o,a){const u=a.cause;for(const f of a.targetIds){if(o.Ia.has(f)){const m=o.Ra.get(f);m!==void 0&&(await o.remoteSyncer.rejectListen(m,u),o.Ea.delete(m),o.Ra.delete(f)),o.Ia.delete(f)}o.pa.removeTarget(f)}}(i,t)}catch(r){j(nn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await da(i,r)}else if(t instanceof Qo?i.pa.Xe(t):t instanceof Hd?i.pa.st(t):i.pa.tt(t),!e.isEqual(rt.min()))try{const r=await nf(i.localStore);e.compareTo(r)>=0&&await function(a,u){const f=a.pa.Tt(u);f.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const T=a.Ia.get(v);T&&a.Ia.set(v,T.withResumeToken(g.resumeToken,u))}}),f.targetMismatches.forEach((g,v)=>{const T=a.Ia.get(g);if(!T)return;a.Ia.set(g,T.withResumeToken(Yt.EMPTY_BYTE_STRING,T.snapshotVersion)),af(a,g);const P=new yn(T.target,g,v,T.sequenceNumber);ll(a,P)});const m=function(v,T){const P=new Map;T.targetChanges.forEach((z,B)=>{const H=v.Ra.get(B);H!==void 0&&P.set(H,z)});let M=new Rt(ht);return T.targetMismatches.forEach((z,B)=>{const H=v.Ra.get(z);H!==void 0&&(M=M.insert(H,B))}),new Zs(T.snapshotVersion,P,M,T.documentUpdates,T.resolvedLimboDocuments)}(a,f);return a.remoteSyncer.applyRemoteEvent(m)}(i,e)}catch(r){j(nn,"Failed to raise snapshot:",r),await da(i,r)}}async function da(i,t,e){if(!Nr(t))throw t;i.da.add(1),await Qs(i),i.ga.set("Offline"),e||(e=()=>nf(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{j(nn,"Retrying IndexedDB access"),await e(),i.da.delete(1),await xa(i)})}function lf(i,t){return t().catch(e=>da(i,e,t))}async function Da(i){const t=st(i),e=Yn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Gc;for(;cv(t);)try{const o=await qy(t.localStore,r);if(o===null){t.Ta.length===0&&e.L_();break}r=o.batchId,lv(t,o)}catch(o){await da(t,o)}uf(t)&&hf(t)}function cv(i){return Vi(i)&&i.Ta.length<10}function lv(i,t){i.Ta.push(t);const e=Yn(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function uf(i){return Vi(i)&&!Yn(i).x_()&&i.Ta.length>0}function hf(i){Yn(i).start()}async function uv(i){Yn(i).ra()}async function hv(i){const t=Yn(i);for(const e of i.Ta)t.ea(e.mutations)}async function dv(i,t,e){const r=i.Ta.shift(),o=el.from(r,t,e);await lf(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await Da(i)}async function fv(i,t){t&&Yn(i).Y_&&await async function(r,o){if(function(u){return Gg(u)&&u!==V.ABORTED}(o.code)){const a=r.Ta.shift();Yn(r).B_(),await lf(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o)),await Da(r)}}(i,t),uf(i)&&hf(i)}async function th(i,t){const e=st(i);e.asyncQueue.verifyOperationInProgress(),j(nn,"RemoteStore received new credentials");const r=Vi(e);e.da.add(3),await Qs(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await xa(e)}async function pv(i,t){const e=st(i);t?(e.da.delete(2),await xa(e)):t||(e.da.add(2),await Qs(e),e.ga.set("Unknown"))}function Vr(i){return i.ya||(i.ya=function(e,r,o){const a=st(e);return a.sa(),new Jy(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(i.datastore,i.asyncQueue,{Zo:rv.bind(null,i),Yo:sv.bind(null,i),t_:ov.bind(null,i),H_:av.bind(null,i)}),i.ma.push(async t=>{t?(i.ya.B_(),hl(i)?ul(i):i.ga.set("Unknown")):(await i.ya.stop(),cf(i))})),i.ya}function Yn(i){return i.wa||(i.wa=function(e,r,o){const a=st(e);return a.sa(),new Yy(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:uv.bind(null,i),t_:fv.bind(null,i),ta:hv.bind(null,i),na:dv.bind(null,i)}),i.ma.push(async t=>{t?(i.wa.B_(),await Da(i)):(await i.wa.stop(),i.Ta.length>0&&(j(nn,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.wa}/**
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
 */class dl{constructor(t,e,r,o,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,o,a){const u=Date.now()+r,f=new dl(t,e,u,o,a);return f.start(r),f}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fl(i,t){if(In("AsyncQueue",`${t}: ${i}`),Nr(i))return new $(V.UNAVAILABLE,`${t}: ${i}`);throw i}/**
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
 */class wr{static emptySet(t){return new wr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||Q.comparator(e.key,r.key):(e,r)=>Q.comparator(e.key,r.key),this.keyedMap=vs(),this.sortedSet=new Rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new wr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class eh{constructor(){this.Sa=new Rt(Q.comparator)}track(t){const e=t.doc.key,r=this.Sa.get(e);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(e):t.type===1&&r.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):X(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Lr{constructor(t,e,r,o,a,u,f,m,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,o,a){const u=[];return e.forEach(f=>{u.push({type:0,doc:f})}),new Lr(t,e,wr.emptySet(e),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==r[o].type||!e[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class mv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class _v{constructor(){this.queries=nh(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const o=st(e),a=o.queries;o.queries=nh(),a.forEach((u,f)=>{for(const m of f.va)m.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function nh(){return new Ni(i=>kd(i),Sa)}async function gv(i,t){const e=st(i);let r=3;const o=t.query;let a=e.queries.get(o);a?!a.Fa()&&t.Ma()&&(r=2):(a=new mv,r=t.Ma()?0:1);try{switch(r){case 0:a.Ca=await e.onListen(o,!0);break;case 1:a.Ca=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(u){const f=fl(u,`Initialization of query '${pr(t.query)}' failed`);return void t.onError(f)}e.queries.set(o,a),a.va.push(t),t.Oa(e.onlineState),a.Ca&&t.Na(a.Ca)&&pl(e)}async function yv(i,t){const e=st(i),r=t.query;let o=3;const a=e.queries.get(r);if(a){const u=a.va.indexOf(t);u>=0&&(a.va.splice(u,1),a.va.length===0?o=t.Ma()?0:1:!a.Fa()&&t.Ma()&&(o=2))}switch(o){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function vv(i,t){const e=st(i);let r=!1;for(const o of t){const a=o.query,u=e.queries.get(a);if(u){for(const f of u.va)f.Na(o)&&(r=!0);u.Ca=o}}r&&pl(e)}function wv(i,t,e){const r=st(i),o=r.queries.get(t);if(o)for(const a of o.va)a.onError(e);r.queries.delete(t)}function pl(i){i.xa.forEach(t=>{t.next()})}var Oc,ih;(ih=Oc||(Oc={})).Ba="default",ih.Cache="cache";class Tv{constructor(t,e,r){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const o of t.docChanges)o.type!==3&&r.push(o);t=new Lr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const r=e!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=Lr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==Oc.Cache}}/**
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
 */class df{constructor(t){this.key=t}}class ff{constructor(t){this.key=t}}class Ev{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=dt(),this.mutatedKeys=dt(),this.iu=Ld(t),this.su=new wr(this.iu)}get ou(){return this.tu}_u(t,e){const r=e?e.au:new eh,o=e?e.su:this.su;let a=e?e.mutatedKeys:this.mutatedKeys,u=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((v,T)=>{const P=o.get(v),M=Ca(this.query,T)?T:null,z=!!P&&this.mutatedKeys.has(P.key),B=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let H=!1;P&&M?P.data.isEqual(M.data)?z!==B&&(r.track({type:3,doc:M}),H=!0):this.uu(P,M)||(r.track({type:2,doc:M}),H=!0,(m&&this.iu(M,m)>0||g&&this.iu(M,g)<0)&&(f=!0)):!P&&M?(r.track({type:0,doc:M}),H=!0):P&&!M&&(r.track({type:1,doc:P}),H=!0,(m||g)&&(f=!0)),H&&(M?(u=u.add(M),a=B?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{su:u,au:r,bs:f,mutatedKeys:a}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,o){const a=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const u=t.au.Da();u.sort((v,T)=>function(M,z){const B=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:H})}};return B(M)-B(z)}(v.type,T.type)||this.iu(v.doc,T.doc)),this.cu(r),o=o??!1;const f=e&&!o?this.lu():[],m=this.ru.size===0&&this.current&&!o?1:0,g=m!==this.nu;return this.nu=m,u.length!==0||g?{snapshot:new Lr(this.query,t.su,a,u,t.mutatedKeys,m===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:f}:{hu:f}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new eh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=dt(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const e=[];return t.forEach(r=>{this.ru.has(r)||e.push(new ff(r))}),this.ru.forEach(r=>{t.has(r)||e.push(new df(r))}),e}Tu(t){this.tu=t.ks,this.ru=dt();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return Lr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ml="SyncEngine";class Iv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Av{constructor(t){this.key=t,this.Eu=!1}}class bv{constructor(t,e,r,o,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new Ni(f=>kd(f),Sa),this.Vu=new Map,this.du=new Set,this.mu=new Rt(Q.comparator),this.fu=new Map,this.gu=new rl,this.pu={},this.yu=new Map,this.wu=Jn.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Pv(i,t,e=!0){const r=vf(i);let o;const a=r.Au.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.Iu()):o=await pf(r,t,e,!0),o}async function Sv(i,t){const e=vf(i);await pf(e,t,!0,!1)}async function pf(i,t,e,r){const o=await Hy(i.localStore,Qe(t)),a=o.targetId,u=i.sharedClientState.addLocalQueryTarget(a,e);let f;return r&&(f=await Cv(i,t,a,u==="current",o.resumeToken)),i.isPrimaryClient&&e&&of(i.remoteStore,o),f}async function Cv(i,t,e,r,o){i.bu=(T,P,M)=>async function(B,H,K,ot){let ut=H.view._u(K);ut.bs&&(ut=await Ku(B.localStore,H.query,!1).then(({documents:C})=>H.view._u(C,ut)));const qt=ot&&ot.targetChanges.get(H.targetId),kt=ot&&ot.targetMismatches.get(H.targetId)!=null,Lt=H.view.applyChanges(ut,B.isPrimaryClient,qt,kt);return sh(B,H.targetId,Lt.hu),Lt.snapshot}(i,T,P,M);const a=await Ku(i.localStore,t,!0),u=new Ev(t,a.ks),f=u._u(a.documents),m=Ks.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",o),g=u.applyChanges(f,i.isPrimaryClient,m);sh(i,e,g.hu);const v=new Iv(t,e,u);return i.Au.set(t,v),i.Vu.has(e)?i.Vu.get(e).push(t):i.Vu.set(e,[t]),g.snapshot}async function Rv(i,t,e){const r=st(i),o=r.Au.get(t),a=r.Vu.get(o.targetId);if(a.length>1)return r.Vu.set(o.targetId,a.filter(u=>!Sa(u,t))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Lc(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),e&&cl(r.remoteStore,o.targetId),Nc(r,o.targetId)}).catch(Or)):(Nc(r,o.targetId),await Lc(r.localStore,o.targetId,!0))}async function kv(i,t){const e=st(i),r=e.Au.get(t),o=e.Vu.get(r.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),cl(e.remoteStore,r.targetId))}async function Lv(i,t,e){const r=Fv(i);try{const o=await function(u,f){const m=st(u),g=St.now(),v=f.reduce((M,z)=>M.add(z.key),dt());let T,P;return m.persistence.runTransaction("Locally write mutations","readwrite",M=>{let z=An(),B=dt();return m.xs.getEntries(M,v).next(H=>{z=H,z.forEach((K,ot)=>{ot.isValidDocument()||(B=B.add(K))})}).next(()=>m.localDocuments.getOverlayedDocuments(M,z)).next(H=>{T=H;const K=[];for(const ot of f){const ut=qg(ot,T.get(ot.key).overlayedDocument);ut!=null&&K.push(new Mi(ot.key,ut,Ed(ut.value.mapValue),Je.exists(!0)))}return m.mutationQueue.addMutationBatch(M,g,K,f)}).next(H=>{P=H;const K=H.applyToLocalDocumentSet(T,B);return m.documentOverlayCache.saveOverlays(M,H.batchId,K)})}).then(()=>({batchId:P.batchId,changes:Dd(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),function(u,f,m){let g=u.pu[u.currentUser.toKey()];g||(g=new Rt(ht)),g=g.insert(f,m),u.pu[u.currentUser.toKey()]=g}(r,o.batchId,e),await Js(r,o.changes),await Da(r.remoteStore)}catch(o){const a=fl(o,"Failed to persist write");e.reject(a)}}async function mf(i,t){const e=st(i);try{const r=await By(e.localStore,t);t.targetChanges.forEach((o,a)=>{const u=e.fu.get(a);u&&(Tt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.Eu=!0:o.modifiedDocuments.size>0?Tt(u.Eu,14607):o.removedDocuments.size>0&&(Tt(u.Eu,42227),u.Eu=!1))}),await Js(e,r,t)}catch(r){await Or(r)}}function rh(i,t,e){const r=st(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const o=[];r.Au.forEach((a,u)=>{const f=u.view.Oa(t);f.snapshot&&o.push(f.snapshot)}),function(u,f){const m=st(u);m.onlineState=f;let g=!1;m.queries.forEach((v,T)=>{for(const P of T.va)P.Oa(f)&&(g=!0)}),g&&pl(m)}(r.eventManager,t),o.length&&r.Ru.H_(o),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function xv(i,t,e){const r=st(i);r.sharedClientState.updateQueryState(t,"rejected",e);const o=r.fu.get(t),a=o&&o.key;if(a){let u=new Rt(Q.comparator);u=u.insert(a,ne.newNoDocument(a,rt.min()));const f=dt().add(a),m=new Zs(rt.min(),new Map,new Rt(ht),u,f);await mf(r,m),r.mu=r.mu.remove(a),r.fu.delete(t),_l(r)}else await Lc(r.localStore,t,!1).then(()=>Nc(r,t,e)).catch(Or)}async function Dv(i,t){const e=st(i),r=t.batch.batchId;try{const o=await Uy(e.localStore,t);gf(e,r,null),_f(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Js(e,o)}catch(o){await Or(o)}}async function Ov(i,t,e){const r=st(i);try{const o=await function(u,f){const m=st(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let v;return m.mutationQueue.lookupMutationBatch(g,f).next(T=>(Tt(T!==null,37113),v=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,v,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v)).next(()=>m.localDocuments.getDocuments(g,v))})}(r.localStore,t);gf(r,t,e),_f(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Js(r,o)}catch(o){await Or(o)}}function _f(i,t){(i.yu.get(t)||[]).forEach(e=>{e.resolve()}),i.yu.delete(t)}function gf(i,t,e){const r=st(i);let o=r.pu[r.currentUser.toKey()];if(o){const a=o.get(t);a&&(e?a.reject(e):a.resolve(),o=o.remove(t)),r.pu[r.currentUser.toKey()]=o}}function Nc(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Vu.get(t))i.Au.delete(r),e&&i.Ru.Du(r,e);i.Vu.delete(t),i.isPrimaryClient&&i.gu.Gr(t).forEach(r=>{i.gu.containsKey(r)||yf(i,r)})}function yf(i,t){i.du.delete(t.path.canonicalString());const e=i.mu.get(t);e!==null&&(cl(i.remoteStore,e),i.mu=i.mu.remove(t),i.fu.delete(e),_l(i))}function sh(i,t,e){for(const r of e)r instanceof df?(i.gu.addReference(r.key,t),Nv(i,r)):r instanceof ff?(j(ml,"Document no longer in limbo: "+r.key),i.gu.removeReference(r.key,t),i.gu.containsKey(r.key)||yf(i,r.key)):X(19791,{Cu:r})}function Nv(i,t){const e=t.key,r=e.path.canonicalString();i.mu.get(e)||i.du.has(r)||(j(ml,"New document in limbo: "+e),i.du.add(r),_l(i))}function _l(i){for(;i.du.size>0&&i.mu.size<i.maxConcurrentLimboResolutions;){const t=i.du.values().next().value;i.du.delete(t);const e=new Q(bt.fromString(t)),r=i.wu.next();i.fu.set(r,new Av(e)),i.mu=i.mu.insert(e,r),of(i.remoteStore,new yn(Qe(Yc(e.path)),r,"TargetPurposeLimboResolution",Aa.ce))}}async function Js(i,t,e){const r=st(i),o=[],a=[],u=[];r.Au.isEmpty()||(r.Au.forEach((f,m)=>{u.push(r.bu(m,t,e).then(g=>{var v;if((g||e)&&r.isPrimaryClient){const T=g?!g.fromCache:(v=e==null?void 0:e.targetChanges.get(m.targetId))==null?void 0:v.current;r.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){o.push(g);const T=ol.Es(m.targetId,g);a.push(T)}}))}),await Promise.all(u),r.Ru.H_(o),await async function(m,g){const v=st(m);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>F.forEach(g,P=>F.forEach(P.Ts,M=>v.persistence.referenceDelegate.addReference(T,P.targetId,M)).next(()=>F.forEach(P.Is,M=>v.persistence.referenceDelegate.removeReference(T,P.targetId,M)))))}catch(T){if(!Nr(T))throw T;j(al,"Failed to update sequence numbers: "+T)}for(const T of g){const P=T.targetId;if(!T.fromCache){const M=v.vs.get(P),z=M.snapshotVersion,B=M.withLastLimboFreeSnapshotVersion(z);v.vs=v.vs.insert(P,B)}}}(r.localStore,a))}async function Mv(i,t){const e=st(i);if(!e.currentUser.isEqual(t)){j(ml,"User change. New user:",t.toKey());const r=await ef(e.localStore,t);e.currentUser=t,function(a,u){a.yu.forEach(f=>{f.forEach(m=>{m.reject(new $(V.CANCELLED,u))})}),a.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Js(e,r.Ns)}}function Vv(i,t){const e=st(i),r=e.fu.get(t);if(r&&r.Eu)return dt().add(r.key);{let o=dt();const a=e.Vu.get(t);if(!a)return o;for(const u of a){const f=e.Au.get(u);o=o.unionWith(f.view.ou)}return o}}function vf(i){const t=st(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=mf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=xv.bind(null,t),t.Ru.H_=vv.bind(null,t.eventManager),t.Ru.Du=wv.bind(null,t.eventManager),t}function Fv(i){const t=st(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ov.bind(null,t),t}class fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=La(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return Fy(this.persistence,new Ny,t.initialUser,this.serializer)}xu(t){return new tf(sl.Vi,this.serializer)}Mu(t){return new Wy}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fa.provider={build:()=>new fa};class Uv extends fa{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){Tt(this.persistence.referenceDelegate instanceof ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wy(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?fe.withCacheSize(this.cacheSizeBytes):fe.DEFAULT;return new tf(r=>ha.Vi(r,e),this.serializer)}}class Mc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mv.bind(null,this.syncEngine),await pv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _v}()}createDatastore(t){const e=La(t.databaseInfo.databaseId),r=Qy(t.databaseInfo);return ev(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,o,a,u,f){return new iv(r,o,a,u,f)}(this.localStore,this.datastore,t.asyncQueue,e=>rh(this.syncEngine,e,0),function(){return Yu.v()?new Yu:new $y}())}createSyncEngine(t,e){return function(o,a,u,f,m,g,v){const T=new bv(o,a,u,f,m,g);return v&&(T.Su=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const a=st(o);j(nn,"RemoteStore shutting down."),a.da.add(5),await Qs(a),a.fa.shutdown(),a.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Mc.provider={build:()=>new Mc};/**
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
 */class Bv{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):In("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Xn="FirestoreClient";class zv{constructor(t,e,r,o,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=o,this.user=ee.UNAUTHENTICATED,this.clientId=$c.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{j(Xn,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(j(Xn,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=fl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ac(i,t){i.asyncQueue.verifyOperationInProgress(),j(Xn,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async o=>{r.isEqual(o)||(await ef(t.localStore,o),r=o)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function oh(i,t){i.asyncQueue.verifyOperationInProgress();const e=await qv(i);j(Xn,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>th(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,o)=>th(t.remoteStore,o)),i._onlineComponents=t}async function qv(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){j(Xn,"Using user provided OfflineComponentProvider");try{await ac(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===V.FAILED_PRECONDITION||o.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;Li("Error using user provided cache. Falling back to memory cache: "+e),await ac(i,new fa)}}else j(Xn,"Using default OfflineComponentProvider"),await ac(i,new Uv(void 0));return i._offlineComponents}async function wf(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(j(Xn,"Using user provided OnlineComponentProvider"),await oh(i,i._uninitializedComponentsProvider._online)):(j(Xn,"Using default OnlineComponentProvider"),await oh(i,new Mc))),i._onlineComponents}function Hv(i){return wf(i).then(t=>t.syncEngine)}async function ah(i){const t=await wf(i),e=t.eventManager;return e.onListen=Pv.bind(null,t.syncEngine),e.onUnlisten=Rv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Sv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=kv.bind(null,t.syncEngine),e}function jv(i,t,e,r){const o=new Bv(r),a=new Tv(t,o,e);return i.asyncQueue.enqueueAndForget(async()=>gv(await ah(i),a)),()=>{o.Ku(),i.asyncQueue.enqueueAndForget(async()=>yv(await ah(i),a))}}function Wv(i,t){const e=new bi;return i.asyncQueue.enqueueAndForget(async()=>Lv(await Hv(i),t,e)),e.promise}/**
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
 */function Tf(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const $v="ComponentProvider",ch=new Map;function Gv(i,t,e,r,o){return new lg(i,t,e,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,Tf(o.experimentalLongPollingOptions),o.useFetchStreams,o.isUsingEmulator,r)}/**
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
 */const Ef="firestore.googleapis.com",lh=!0;class uh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ef,this.ssl=lh}else this.host=t.host,this.ssl=t.ssl??lh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Xd;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yy)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Y_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tf(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Oa{constructor(t,e,r,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new q_;switch(r.type){case"firstParty":return new $_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=ch.get(e);r&&(j($v,"Removing Datastore"),ch.delete(e),r.terminate())}(this),Promise.resolve()}}function Zv(i,t,e,r={}){var g;i=Pi(i,Oa);const o=Ws(t),a=i._getSettings(),u={...a,emulatorOptions:i._getEmulatorOptions()},f=`${t}:${e}`;o&&Qh(`https://${f}`),a.host!==Ef&&a.host!==f&&Li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:f,ssl:o,emulatorOptions:r};if(!Ci(m,u)&&(i._setSettings(m),r.mockUserToken)){let v,T;if(typeof r.mockUserToken=="string")v=r.mockUserToken,T=ee.MOCK_USER;else{v=pm(r.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const P=r.mockUserToken.sub||r.mockUserToken.user_id;if(!P)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ee(P)}i._authCredentials=new H_(new ud(v,T))}}/**
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
 */class Fi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Fi(this.firestore,t,this._query)}}class Bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}toJSON(){return{type:Bt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if($s(e,Bt._jsonSchema))return new Bt(t,r||null,new Q(bt.fromString(e.referencePath)))}}Bt._jsonSchemaVersion="firestore/documentReference/1.0",Bt._jsonSchema={type:Ut("string",Bt._jsonSchemaVersion),referencePath:Ut("string")};class $n extends Fi{constructor(t,e,r){super(t,e,Yc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new Q(t))}withConverter(t){return new $n(this.firestore,t,this._path)}}function Kv(i,t,...e){if(i=re(i),hd("collection","path",t),i instanceof Oa){const r=bt.fromString(t,...e);return Eu(r),new $n(i,null,r)}{if(!(i instanceof Bt||i instanceof $n))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(bt.fromString(t,...e));return Eu(r),new $n(i.firestore,null,r)}}function Fs(i,t,...e){if(i=re(i),arguments.length===1&&(t=$c.newId()),hd("doc","path",t),i instanceof Oa){const r=bt.fromString(t,...e);return Tu(r),new Bt(i,null,new Q(r))}{if(!(i instanceof Bt||i instanceof $n))throw new $(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(bt.fromString(t,...e));return Tu(r),new Bt(i.firestore,i instanceof $n?i.converter:null,new Q(r))}}/**
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
 */const hh="AsyncQueue";class dh{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new rf(this,"async_queue_retry"),this.lc=()=>{const r=oc();r&&j(hh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=oc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new bi;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!Nr(t))throw t;j(hh,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,In("INTERNAL UNHANDLED ERROR: ",fh(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const o=dl.createAndSchedule(this,t,e,r,a=>this.Ec(a));return this.oc.push(o),o}Pc(){this._c&&X(47125,{Rc:fh(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function fh(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class Us extends Oa{constructor(t,e,r,o){super(t,e,r,o),this.type="firestore",this._queue=new dh,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new dh(t),this._firestoreClient=void 0,await t}}}function Qv(i,t){const e=typeof i=="object"?i:td(),r=typeof i=="string"?i:oa,o=jc(e,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=dm("firestore");a&&Zv(o,...a)}return o}function If(i){if(i._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Jv(i),i._firestoreClient}function Jv(i){var r,o,a,u;const t=i._freezeSettings(),e=Gv(i._databaseId,((r=i._app)==null?void 0:r.options.appId)||"",i._persistenceKey,(o=i._app)==null?void 0:o.options.apiKey,t);i._componentsProvider||(a=t.localCache)!=null&&a._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new zv(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class Ce{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ce(Yt.fromBase64String(t))}catch(e){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ce(Yt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ce._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($s(t,Ce._jsonSchema))return Ce.fromBase64String(t.bytes)}}Ce._jsonSchemaVersion="firestore/bytes/1.0",Ce._jsonSchema={type:Ut("string",Ce._jsonSchemaVersion),bytes:Ut("string")};/**
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
 */class Af{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class gl{constructor(t){this._methodName=t}}/**
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
 */class Xe{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ht(this._lat,t._lat)||ht(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(t){if($s(t,Xe._jsonSchema))return new Xe(t.latitude,t.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:Ut("string",Xe._jsonSchemaVersion),latitude:Ut("number"),longitude:Ut("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Fe{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Fe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($s(t,Fe._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Fe(t.vectorValues);throw new $(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fe._jsonSchemaVersion="firestore/vectorValue/1.0",Fe._jsonSchema={type:Ut("string",Fe._jsonSchemaVersion),vectorValues:Ut("object")};/**
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
 */const Yv=/^__.*__$/;class Xv{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Mi(t,this.data,this.fieldMask,e,this.fieldTransforms):new Gs(t,this.data,e,this.fieldTransforms)}}function bf(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:i})}}class yl{constructor(t,e,r,o,a,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.fc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new yl({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var o;const e=(o=this.path)==null?void 0:o.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var o;const e=(o=this.path)==null?void 0:o.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return pa(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(bf(this.dataSource)&&Yv.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class tw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||La(t)}V(t,e,r,o=!1){return new yl({dataSource:t,methodName:e,targetDoc:r,path:Jt.emptyPath(),arrayElement:!1,hasConverter:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pf(i){const t=i._freezeSettings(),e=La(i._databaseId);return new tw(i._databaseId,!!t.ignoreUndefinedProperties,e)}function ew(i,t,e,r,o,a={}){const u=i.V(a.merge||a.mergeFields?2:0,t,e,o);Rf("Data must be an object, but it was:",u,r);const f=Sf(r,u);let m,g;if(a.merge)m=new Me(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const T of a.mergeFields){const P=Na(t,T,e);if(!u.contains(P))throw new $(V.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);sw(v,P)||v.push(P)}m=new Me(v),g=u.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=u.fieldTransforms;return new Xv(new Se(f),m,g)}class vl extends gl{_toFieldTransform(t){return new Fg(t.path,new Ns)}isEqual(t){return t instanceof vl}}function nw(i,t,e,r=!1){return wl(e,i.V(r?4:3,t))}function wl(i,t){if(Cf(i=re(i)))return Rf("Unsupported field value:",t,i),Sf(i,t);if(i instanceof gl)return function(r,o){if(!bf(o.dataSource))throw o.Dc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Dc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,o){const a=[];let u=0;for(const f of r){let m=wl(f,o.bc(u));m==null&&(m={nullValue:"NULL_VALUE"}),a.push(m),u++}return{arrayValue:{values:a}}}(i,t)}return function(r,o){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ng(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=St.fromDate(r);return{timestampValue:ua(o.serializer,a)}}if(r instanceof St){const a=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(o.serializer,a)}}if(r instanceof Xe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ce)return{bytesValue:Wd(o.serializer,r._byteString)};if(r instanceof Bt){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:il(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Fe)return function(u,f){const m=u instanceof Fe?u.toArray():u;return{mapValue:{fields:{[wd]:{stringValue:Td},[aa]:{arrayValue:{values:m.map(v=>{if(typeof v!="number")throw f.Dc("VectorValues must only contain numeric values.");return Xc(f.serializer,v)})}}}}}}(r,o);if(Yd(r))return r._toProto(o.serializer);throw o.Dc(`Unsupported field value: ${Ia(r)}`)}(i,t)}function Sf(i,t){const e={};return pd(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Oi(i,(r,o)=>{const a=wl(o,t.yc(r));a!=null&&(e[r]=a)}),{mapValue:{fields:e}}}function Cf(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof St||i instanceof Xe||i instanceof Ce||i instanceof Bt||i instanceof gl||i instanceof Fe||Yd(i))}function Rf(i,t,e){if(!Cf(e)||!dd(e)){const r=Ia(e);throw r==="an object"?t.Dc(i+" a custom object"):t.Dc(i+" "+r)}}function Na(i,t,e){if((t=re(t))instanceof Af)return t._internalPath;if(typeof t=="string")return rw(i,t);throw pa("Field path arguments must be of type string or ",i,!1,void 0,e)}const iw=new RegExp("[~\\*/\\[\\]]");function rw(i,t,e){if(t.search(iw)>=0)throw pa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Af(...t.split("."))._internalPath}catch{throw pa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function pa(i,t,e,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let f=`Function ${t}() called with invalid data`;e&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(a||u)&&(m+=" (found",a&&(m+=` in field ${r}`),u&&(m+=` in document ${o}`),m+=")"),new $(V.INVALID_ARGUMENT,f+i+m)}function sw(i,t){return i.some(e=>e.isEqual(t))}/**
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
 */class ow{convertValue(t,e="none"){switch(Qn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Kn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw X(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Oi(t,(o,a)=>{r[o]=this.convertValue(a,e)}),r}convertVectorValue(t){var r,o,a;const e=(a=(o=(r=t.fields)==null?void 0:r[aa].arrayValue)==null?void 0:o.values)==null?void 0:a.map(u=>Ot(u.doubleValue));return new Fe(e)}convertGeoPoint(t){return new Xe(Ot(t.latitude),Ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Pa(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ls(t));default:return null}}convertTimestamp(t){const e=Zn(t);return new St(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=bt.fromString(t);Tt(Jd(r),9688,{name:t});const o=new xs(r.get(1),r.get(3)),a=new Q(r.popFirst(5));return o.isEqual(e)||In(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kf extends ow{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ce(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,e)}}function Bs(){return new vl("serverTimestamp")}const ph="@firebase/firestore",mh="4.14.1";/**
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
 */function _h(i){return function(e,r){if(typeof e!="object"||e===null)return!1;const o=e;for(const a of r)if(a in o&&typeof o[a]=="function")return!0;return!1}(i,["next","error","complete"])}/**
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
 */class Lf{constructor(t,e,r,o,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new aw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Na("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class aw extends Lf{data(){return super.data()}}/**
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
 */function cw(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tl{}class xf extends Tl{}function lw(i,t,...e){let r=[];t instanceof Tl&&r.push(t),r=r.concat(e),function(a){const u=a.filter(m=>m instanceof Il).length,f=a.filter(m=>m instanceof El).length;if(u>1||u>0&&f>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const o of r)i=o._apply(i);return i}class El extends xf{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new El(t,e,r)}_apply(t){const e=this._parse(t);return Df(t._query,e),new Fi(t.firestore,t.converter,bc(t._query,e))}_parse(t){const e=Pf(t.firestore);return function(a,u,f,m,g,v,T){let P;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){yh(T,v);const z=[];for(const B of T)z.push(gh(m,a,B));P={arrayValue:{values:z}}}else P=gh(m,a,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||yh(T,v),P=nw(f,u,T,v==="in"||v==="not-in");return Ft.create(g,v,P)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Il extends Tl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Il(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Be.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(o,a){let u=o;const f=a.getFlattenedFilters();for(const m of f)Df(u,m),u=bc(u,m)}(t._query,e),new Fi(t.firestore,t.converter,bc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Al extends xf{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Al(t,e)}_apply(t){const e=function(o,a,u){if(o.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Os(a,u)}(t._query,this._field,this._direction);return new Fi(t.firestore,t.converter,Sg(t._query,e))}}function uw(i,t="asc"){const e=t,r=Na("orderBy",i);return Al._create(r,e)}function gh(i,t,e){if(typeof(e=re(e))=="string"){if(e==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rd(t)&&e.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(bt.fromString(e));if(!Q.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ku(i,new Q(r))}if(e instanceof Bt)return ku(i,e._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ia(e)}.`)}function yh(i,t){if(!Array.isArray(i)||i.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Df(i,t){const e=function(o,a){for(const u of o)for(const f of u.getFlattenedFilters())if(a.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function hw(i,t,e){let r;return r=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,r}class Ts{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Si extends Lf{constructor(t,e,r,o,a,u){super(t,e,r,o,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Jo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Na("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Si._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Si._jsonSchemaVersion="firestore/documentSnapshot/1.0",Si._jsonSchema={type:Ut("string",Si._jsonSchemaVersion),bundleSource:Ut("string","DocumentSnapshot"),bundleName:Ut("string"),bundle:Ut("string")};class Jo extends Si{data(t={}){return super.data(t)}}class Tr{constructor(t,e,r,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new Ts(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Jo(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map(f=>{const m=new Jo(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ts(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>a||f.type!==3).map(f=>{const m=new Jo(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Ts(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,v=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),v=u.indexOf(f.doc.key)),{type:dw(f.type),doc:m,oldIndex:g,newIndex:v}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Tr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=$c.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],o=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function dw(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:i})}}/**
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
 */Tr._jsonSchemaVersion="firestore/querySnapshot/1.0",Tr._jsonSchema={type:Ut("string",Tr._jsonSchemaVersion),bundleSource:Ut("string","QuerySnapshot"),bundleName:Ut("string"),bundle:Ut("string")};function bl(i,t,e){i=Pi(i,Bt);const r=Pi(i.firestore,Us),o=hw(i.converter,t,e),a=Pf(r);return Nf(r,[ew(a,"setDoc",i._key,o,i.converter!==null,e).toMutation(i._key,Je.none())])}function fw(i){return Nf(Pi(i.firestore,Us),[new tl(i._key,Je.none())])}function Of(i,...t){var g,v,T;i=re(i);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||_h(t[r])||(e=t[r++]);const o={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(_h(t[r])){const P=t[r];t[r]=(g=P.next)==null?void 0:g.bind(P),t[r+1]=(v=P.error)==null?void 0:v.bind(P),t[r+2]=(T=P.complete)==null?void 0:T.bind(P)}let a,u,f;if(i instanceof Bt)u=Pi(i.firestore,Us),f=Yc(i._key.path),a={next:P=>{t[r]&&t[r](pw(u,i,P))},error:t[r+1],complete:t[r+2]};else{const P=Pi(i,Fi);u=Pi(P.firestore,Us),f=P._query;const M=new kf(u);a={next:z=>{t[r]&&t[r](new Tr(u,M,P,z))},error:t[r+1],complete:t[r+2]},cw(i._query)}const m=If(u);return jv(m,f,o,a)}function Nf(i,t){const e=If(i);return Wv(e,t)}function pw(i,t,e){const r=e.docs.get(t._key),o=new kf(i);return new Si(i,o,t._key,r,new Ts(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){z_(xr),Sr(new Ri("firestore",(r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),f=new Us(new j_(r.getProvider("auth-internal")),new G_(u,r.getProvider("app-check-internal")),ug(u,o),u);return a={useFetchStreams:e,...a},f._setSettings(a),f},"PUBLIC").setMultipleInstances(!0)),jn(ph,mh,t),jn(ph,mh,"esm2020")})();function Mf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mw=Mf,Vf=new Hs("auth","Firebase",Mf());/**
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
 */const ma=new qc("@firebase/auth");function _w(i,...t){ma.logLevel<=ft.WARN&&ma.warn(`Auth (${xr}): ${i}`,...t)}function Yo(i,...t){ma.logLevel<=ft.ERROR&&ma.error(`Auth (${xr}): ${i}`,...t)}/**
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
 */function Re(i,...t){throw Sl(i,...t)}function Ue(i,...t){return Sl(i,...t)}function Pl(i,t,e){const r={...mw(),[t]:e};return new Hs("auth","Firebase",r).create(t,{appName:i.name})}function Tn(i){return Pl(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gw(i,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Re(i,"argument-error"),Pl(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sl(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return Vf.create(i,...t)}function Y(i,t,...e){if(!i)throw Sl(t,...e)}function vn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw Yo(t),new Error(t)}function bn(i,t){i||vn(t)}/**
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
 */function Vc(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function yw(){return vh()==="http:"||vh()==="https:"}function vh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function vw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yw()||ym()||"connection"in navigator)?navigator.onLine:!0}function ww(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ys{constructor(t,e){this.shortDelay=t,this.longDelay=e,bn(e>t,"Short delay should be less than long delay!"),this.isMobile=mm()||vm()}get(){return vw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cl(i,t){bn(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Ff{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Tw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ew=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Iw=new Ys(3e4,6e4);function ti(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function ei(i,t,e,r,o={}){return Uf(i,o,async()=>{let a={},u={};r&&(t==="GET"?u=r:a={body:JSON.stringify(r)});const f=js({key:i.config.apiKey,...u}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:t,headers:m,...a};return gm()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Ws(i.emulatorConfig.host)&&(g.credentials="include"),Ff.fetch()(await Bf(i,i.config.apiHost,e,f),g)})}async function Uf(i,t,e){i._canInitEmulator=!1;const r={...Tw,...t};try{const o=new bw(i),a=await Promise.race([e(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Ho(i,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const f=a.ok?u.errorMessage:u.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(i,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw Ho(i,"email-already-in-use",u);if(m==="USER_DISABLED")throw Ho(i,"user-disabled",u);const v=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Pl(i,v,g);Re(i,v)}}catch(o){if(o instanceof Pn)throw o;Re(i,"network-request-failed",{message:String(o)})}}async function Xs(i,t,e,r,o={}){const a=await ei(i,t,e,r,o);return"mfaPendingCredential"in a&&Re(i,"multi-factor-auth-required",{_serverResponse:a}),a}async function Bf(i,t,e,r){const o=`${t}${e}?${r}`,a=i,u=a.config.emulator?Cl(i.config,o):`${i.config.apiScheme}://${o}`;return Ew.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Aw(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Iw.get())})}}function Ho(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const o=Ue(i,t,r);return o.customData._tokenResponse=e,o}function wh(i){return i!==void 0&&i.enterprise!==void 0}class Pw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Aw(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sw(i,t){return ei(i,"GET","/v2/recaptchaConfig",ti(i,t))}/**
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
 */async function Cw(i,t){return ei(i,"POST","/v1/accounts:delete",t)}async function _a(i,t){return ei(i,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ps(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Rw(i,t=!1){const e=re(i),r=await e.getIdToken(t),o=Rl(r);Y(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Ps(cc(o.auth_time)),issuedAtTime:Ps(cc(o.iat)),expirationTime:Ps(cc(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function cc(i){return Number(i)*1e3}function Rl(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const o=$h(e);return o?JSON.parse(o):(Yo("Failed to decode base64 JWT payload"),null)}catch(o){return Yo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Th(i){const t=Rl(i);return Y(t,"internal-error"),Y(typeof t.exp<"u","internal-error"),Y(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function zs(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Pn&&kw(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function kw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Lw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fc{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ps(this.lastLoginAt),this.creationTime=Ps(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ga(i){var T;const t=i.auth,e=await i.getIdToken(),r=await zs(i,_a(t,{idToken:e}));Y(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];i._notifyReloadListener(o);const a=(T=o.providerUserInfo)!=null&&T.length?zf(o.providerUserInfo):[],u=Dw(i.providerData,a),f=i.isAnonymous,m=!(i.email&&o.passwordHash)&&!(u!=null&&u.length),g=f?m:!1,v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Fc(o.createdAt,o.lastLoginAt),isAnonymous:g};Object.assign(i,v)}async function xw(i){const t=re(i);await ga(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Dw(i,t){return[...i.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function zf(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function Ow(i,t){const e=await Uf(i,{},async()=>{const r=js({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:a}=i.config,u=await Bf(i,o,"/v1/token",`key=${a}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:r};return i.emulatorConfig&&Ws(i.emulatorConfig.host)&&(m.credentials="include"),Ff.fetch()(u,m)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Nw(i,t){return ei(i,"POST","/v2/accounts:revokeToken",ti(i,t))}/**
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
 */class Er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Y(t.idToken,"internal-error"),Y(typeof t.idToken<"u","internal-error"),Y(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Th(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Y(t.length!==0,"internal-error");const e=Th(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:o,expiresIn:a}=await Ow(t,e);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:o,expirationTime:a}=e,u=new Er;return r&&(Y(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),o&&(Y(typeof o=="string","internal-error",{appName:t}),u.accessToken=o),a&&(Y(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Er,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Fn(i,t){Y(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class Ve{constructor({uid:t,auth:e,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new Lw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Fc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await zs(this,this.stsTokenManager.getToken(this.auth,t));return Y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Rw(this,t)}reload(){return xw(this)}_assign(t){this!==t&&(Y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new Ve({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ge(this.auth.app))return Promise.reject(Tn(this.auth));const t=await this.getIdToken();return await zs(this,Cw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,o=e.email??void 0,a=e.phoneNumber??void 0,u=e.photoURL??void 0,f=e.tenantId??void 0,m=e._redirectEventId??void 0,g=e.createdAt??void 0,v=e.lastLoginAt??void 0,{uid:T,emailVerified:P,isAnonymous:M,providerData:z,stsTokenManager:B}=e;Y(T&&B,t,"internal-error");const H=Er.fromJSON(this.name,B);Y(typeof T=="string",t,"internal-error"),Fn(r,t.name),Fn(o,t.name),Y(typeof P=="boolean",t,"internal-error"),Y(typeof M=="boolean",t,"internal-error"),Fn(a,t.name),Fn(u,t.name),Fn(f,t.name),Fn(m,t.name),Fn(g,t.name),Fn(v,t.name);const K=new Ve({uid:T,auth:t,email:o,emailVerified:P,displayName:r,isAnonymous:M,photoURL:u,phoneNumber:a,tenantId:f,stsTokenManager:H,createdAt:g,lastLoginAt:v});return z&&Array.isArray(z)&&(K.providerData=z.map(ot=>({...ot}))),m&&(K._redirectEventId=m),K}static async _fromIdTokenResponse(t,e,r=!1){const o=new Er;o.updateFromServerResponse(e);const a=new Ve({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await ga(a),a}static async _fromGetAccountInfoResponse(t,e,r){const o=e.users[0];Y(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?zf(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),f=new Er;f.updateFromIdToken(r);const m=new Ve({uid:o.localId,auth:t,stsTokenManager:f,isAnonymous:u}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Fc(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(m,g),m}}/**
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
 */const Eh=new Map;function wn(i){bn(i instanceof Function,"Expected a class definition");let t=Eh.get(i);return t?(bn(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Eh.set(i,t),t)}/**
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
 */class qf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}qf.type="NONE";const Ih=qf;/**
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
 */function Xo(i,t,e){return`firebase:${i}:${t}:${e}`}class Ir{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Xo(this.userKey,o.apiKey,a),this.fullPersistenceKey=Xo("persistence",o.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await _a(this.auth,{idToken:t}).catch(()=>{});return e?Ve._fromGetAccountInfoResponse(this.auth,e,t):null}return Ve._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Ir(wn(Ih),t,r);const o=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=o[0]||wn(Ih);const u=Xo(r,t.config.apiKey,t.name);let f=null;for(const g of e)try{const v=await g._get(u);if(v){let T;if(typeof v=="string"){const P=await _a(t,{idToken:v}).catch(()=>{});if(!P)break;T=await Ve._fromGetAccountInfoResponse(t,P,v)}else T=Ve._fromJSON(t,v);g!==a&&(f=T),a=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new Ir(a,t,r):(a=m[0],f&&await a._set(u,f.toJSON()),await Promise.all(e.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new Ir(a,t,r))}}/**
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
 */function Ah(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($f(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zf(t))return"Blackberry";if(Kf(t))return"Webos";if(jf(t))return"Safari";if((t.includes("chrome/")||Wf(t))&&!t.includes("edge/"))return"Chrome";if(Gf(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hf(i=ie()){return/firefox\//i.test(i)}function jf(i=ie()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wf(i=ie()){return/crios\//i.test(i)}function $f(i=ie()){return/iemobile/i.test(i)}function Gf(i=ie()){return/android/i.test(i)}function Zf(i=ie()){return/blackberry/i.test(i)}function Kf(i=ie()){return/webos/i.test(i)}function kl(i=ie()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Mw(i=ie()){var t;return kl(i)&&!!((t=window.navigator)!=null&&t.standalone)}function Vw(){return wm()&&document.documentMode===10}function Qf(i=ie()){return kl(i)||Gf(i)||Kf(i)||Zf(i)||/windows phone/i.test(i)||$f(i)}/**
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
 */function Jf(i,t=[]){let e;switch(i){case"Browser":e=Ah(ie());break;case"Worker":e=`${Ah(ie())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${xr}/${r}`}/**
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
 */class Fw{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=a=>new Promise((u,f)=>{try{const m=t(a);u(m)}catch(m){f(m)}});r.onAbort=e,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const o of e)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Uw(i,t={}){return ei(i,"GET","/v2/passwordPolicy",ti(i,t))}/**
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
 */const Bw=6;class zw{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??Bw,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class qw{constructor(t,e,r,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new Fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=wn(e)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await Ir.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await _a(this,{idToken:t}),r=await Ve._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(ge(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,f=r==null?void 0:r._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&(m!=null&&m.user)&&(r=m.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await ga(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ww()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ge(this.app))return Promise.reject(Tn(this));const e=t?re(t):null;return e&&Y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ge(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ge(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Uw(this),e=new zw(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Hs("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Nw(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&wn(t)||this._popupRedirectResolver;Y(e,this,"argument-error"),this.redirectPersistenceManager=await Ir.create(this,[wn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,o){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{u||a(this.currentUser)}),typeof e=="function"){const m=t.addObserver(e,r,o);return()=>{u=!0,m()}}else{const m=t.addObserver(e);return()=>{u=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&_w(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ni(i){return re(i)}class bh{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cm(e=>this.observer=e)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hw(i){Ma=i}function Yf(i){return Ma.loadJS(i)}function jw(){return Ma.recaptchaEnterpriseScript}function Ww(){return Ma.gapiScript}function $w(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Gw{constructor(){this.enterprise=new Zw}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class Zw{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const Kw="recaptcha-enterprise",Xf="NO_RECAPTCHA";class Qw{constructor(t){this.type=Kw,this.auth=ni(t)}async verify(t="verify",e=!1){async function r(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,f)=>{Sw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new Pw(m);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(m=>{f(m)})})}function o(a,u,f){const m=window.grecaptcha;wh(m)?m.enterprise.ready(()=>{m.enterprise.execute(a,{action:t}).then(g=>{u(g)}).catch(()=>{u(Xf)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gw().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(f=>{if(!e&&wh(window.grecaptcha))o(f,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=jw();m.length!==0&&(m+=f),Yf(m).then(()=>{o(f,a,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function Ph(i,t,e,r=!1,o=!1){const a=new Qw(i);let u;if(o)u=Xf;else try{u=await a.verify(e)}catch{u=await a.verify(e,!0)}const f={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Uc(i,t,e,r,o){var a;if((a=i._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Ph(i,t,e,e==="getOobCode");return r(i,u)}else return r(i,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Ph(i,t,e,e==="getOobCode");return r(i,f)}else return Promise.reject(u)})}/**
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
 */function Jw(i,t){const e=jc(i,"auth");if(e.isInitialized()){const o=e.getImmediate(),a=e.getOptions();if(Ci(a,t??{}))return o;Re(o,"already-initialized")}return e.initialize({options:t})}function Yw(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(wn);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Xw(i,t,e){const r=ni(i);Y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,a=tp(t),{host:u,port:f}=tT(t),m=f===null?"":`:${f}`,g={url:`${a}//${u}${m}/`},v=Object.freeze({host:u,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Ci(g,r.config.emulator)&&Ci(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,Ws(u)?Qh(`${a}//${u}${m}`):eT()}function tp(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function tT(i){const t=tp(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:Sh(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Sh(u)}}}function Sh(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function eT(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Ll{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return vn("not implemented")}_getIdTokenResponse(t){return vn("not implemented")}_linkToIdToken(t,e){return vn("not implemented")}_getReauthenticationResolver(t){return vn("not implemented")}}async function nT(i,t){return ei(i,"POST","/v1/accounts:signUp",t)}/**
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
 */async function iT(i,t){return Xs(i,"POST","/v1/accounts:signInWithPassword",ti(i,t))}/**
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
 */async function rT(i,t){return Xs(i,"POST","/v1/accounts:signInWithEmailLink",ti(i,t))}async function sT(i,t){return Xs(i,"POST","/v1/accounts:signInWithEmailLink",ti(i,t))}/**
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
 */class qs extends Ll{constructor(t,e,r,o=null){super("password",r),this._email=t,this._password=e,this._tenantId=o}static _fromEmailAndPassword(t,e){return new qs(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new qs(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(t,e,"signInWithPassword",iT);case"emailLink":return rT(t,{email:this._email,oobCode:this._password});default:Re(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uc(t,r,"signUpPassword",nT);case"emailLink":return sT(t,{idToken:e,email:this._email,oobCode:this._password});default:Re(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Ar(i,t){return Xs(i,"POST","/v1/accounts:signInWithIdp",ti(i,t))}/**
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
 */const oT="http://localhost";class xi extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Re("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o,...a}=e;if(!r||!o)return null;const u=new xi(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const e=this.buildRequest();return Ar(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Ar(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Ar(t,e)}buildRequest(){const t={requestUri:oT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=js(e)}return t}}/**
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
 */function aT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cT(i){const t=_s(gs(i)).link,e=t?_s(gs(t)).deep_link_id:null,r=_s(gs(i)).deep_link_id;return(r?_s(gs(r)).link:null)||r||e||t||i}class xl{constructor(t){const e=_s(gs(t)),r=e.apiKey??null,o=e.oobCode??null,a=aT(e.mode??null);Y(r&&o&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=o,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=cT(t);try{return new xl(e)}catch{return null}}}/**
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
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(t,e){return qs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=xl.parseLink(e);return Y(r,"argument-error"),qs._fromEmailAndCode(t,r.code,r.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends Dl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Un extends to{constructor(){super("facebook.com")}static credential(t){return xi._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Un.credentialFromTaggedObject(t)}static credentialFromError(t){return Un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Un.credential(t.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
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
 */class gn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return xi._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return gn.credential(e,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class Bn extends to{constructor(){super("github.com")}static credential(t){return xi._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bn.credentialFromTaggedObject(t)}static credentialFromError(t){return Bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bn.credential(t.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
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
 */class zn extends to{constructor(){super("twitter.com")}static credential(t,e){return xi._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return zn.credentialFromTaggedObject(t)}static credentialFromError(t){return zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return zn.credential(e,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */async function lT(i,t){return Xs(i,"POST","/v1/accounts:signUp",ti(i,t))}/**
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
 */class Di{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,o=!1){const a=await Ve._fromIdTokenResponse(t,r,o),u=Ch(r);return new Di({user:a,providerId:u,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const o=Ch(r);return new Di({user:t,providerId:o,_tokenResponse:r,operationType:e})}}function Ch(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ya extends Pn{constructor(t,e,r,o){super(e.code,e.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,ya.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,o){return new ya(t,e,r,o)}}function ep(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ya._fromErrorAndOperation(i,a,t,r):a})}async function uT(i,t,e=!1){const r=await zs(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return Di._forOperation(i,"link",r)}/**
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
 */async function hT(i,t,e=!1){const{auth:r}=i;if(ge(r.app))return Promise.reject(Tn(r));const o="reauthenticate";try{const a=await zs(i,ep(r,o,t,i),e);Y(a.idToken,r,"internal-error");const u=Rl(a.idToken);Y(u,r,"internal-error");const{sub:f}=u;return Y(i.uid===f,r,"user-mismatch"),Di._forOperation(i,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Re(r,"user-mismatch"),a}}/**
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
 */async function np(i,t,e=!1){if(ge(i.app))return Promise.reject(Tn(i));const r="signIn",o=await ep(i,r,t),a=await Di._fromIdTokenResponse(i,r,o);return e||await i._updateCurrentUser(a.user),a}async function dT(i,t){return np(ni(i),t)}/**
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
 */async function ip(i){const t=ni(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function fT(i,t,e){if(ge(i.app))return Promise.reject(Tn(i));const r=ni(i),u=await Uc(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",lT).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&ip(i),m}),f=await Di._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(f.user),f}function pT(i,t,e){return ge(i.app)?Promise.reject(Tn(i)):dT(re(i),Fr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ip(i),r})}function mT(i,t,e,r){return re(i).onIdTokenChanged(t,e,r)}function _T(i,t,e){return re(i).beforeAuthStateChanged(t,e)}function gT(i,t,e,r){return re(i).onAuthStateChanged(t,e,r)}function yT(i){return re(i).signOut()}const va="__sak";/**
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
 */class rp{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(va,"1"),this.storage.removeItem(va),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const vT=1e3,wT=10;class sp extends rp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),o=this.localCache[e];r!==o&&t(e,o,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((u,f,m)=>{this.notifyListeners(u,m)});return}const r=t.key;e?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!e&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);Vw()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,wT):o()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},vT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}sp.type="LOCAL";const TT=sp;/**
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
 */class op extends rp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}op.type="SESSION";const ap=op;/**
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
 */function ET(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Va{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(o=>o.isListeningto(t));if(e)return e;const r=new Va(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:o,data:a}=e.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const f=Array.from(u).map(async g=>g(e.origin,a)),m=await ET(f);e.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:m})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
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
 */function Ol(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
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
 */class IT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((f,m)=>{const g=Ol("",20);o.port1.start();const v=setTimeout(()=>{m(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(T){const P=T;if(P.data.eventId===g)switch(P.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(P.data.response);break;default:clearTimeout(v),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function tn(){return window}function AT(i){tn().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function cp(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function bT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function ST(){return cp()?self:null}/**
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
 */const lp="firebaseLocalStorageDb",CT=1,wa="firebaseLocalStorage",up="fbase_key";class eo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Fa(i,t){return i.transaction([wa],t?"readwrite":"readonly").objectStore(wa)}function RT(){const i=indexedDB.deleteDatabase(lp);return new eo(i).toPromise()}function Bc(){const i=indexedDB.open(lp,CT);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(wa,{keyPath:up})}catch(o){e(o)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(wa)?t(r):(r.close(),await RT(),t(await Bc()))})})}async function Rh(i,t,e){const r=Fa(i,!0).put({[up]:t,value:e});return new eo(r).toPromise()}async function kT(i,t){const e=Fa(i,!1).get(t),r=await new eo(e).toPromise();return r===void 0?null:r.value}function kh(i,t){const e=Fa(i,!0).delete(t);return new eo(e).toPromise()}const LT=800,xT=3;class hp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bc(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>xT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(ST()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await bT(),!this.activeServiceWorker)return;this.sender=new IT(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||PT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bc();return await Rh(t,va,"1"),await kh(t,va),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rh(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>kT(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>kh(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const a=Fa(o,!1).getAll();return new eo(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:a}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),e.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),e.push(o));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hp.type="LOCAL";const DT=hp;new Ys(3e4,6e4);/**
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
 */function dp(i,t){return t?wn(t):(Y(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Nl extends Ll{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ar(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Ar(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Ar(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function OT(i){return np(i.auth,new Nl(i),i.bypassAuthState)}function NT(i){const{auth:t,user:e}=i;return Y(e,t,"internal-error"),hT(e,new Nl(i),i.bypassAuthState)}async function MT(i){const{auth:t,user:e}=i;return Y(e,t,"internal-error"),uT(e,new Nl(i),i.bypassAuthState)}/**
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
 */class fp{constructor(t,e,r,o,a=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:o,tenantId:a,error:u,type:f}=t;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:e,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return OT;case"linkViaPopup":case"linkViaRedirect":return MT;case"reauthViaPopup":case"reauthViaRedirect":return NT;default:Re(this.auth,"internal-error")}}resolve(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const VT=new Ys(2e3,1e4);async function FT(i,t,e){if(ge(i.app))return Promise.reject(Ue(i,"operation-not-supported-in-this-environment"));const r=ni(i);gw(i,t,Dl);const o=dp(r,e);return new Ii(r,"signInViaPopup",t,o).executeNotNull()}class Ii extends fp{constructor(t,e,r,o,a){super(t,e,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Y(t,this.auth,"internal-error"),t}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const t=Ol();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,VT.get())};t()}}Ii.currentPopupAction=null;/**
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
 */const UT="pendingRedirect",ta=new Map;class BT extends fp{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=ta.get(this.auth._key());if(!t){try{const r=await zT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}ta.set(this.auth._key(),t)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zT(i,t){const e=jT(t),r=HT(i);if(!await r._isAvailable())return!1;const o=await r._get(e)==="true";return await r._remove(e),o}function qT(i,t){ta.set(i._key(),t)}function HT(i){return wn(i._redirectPersistence)}function jT(i){return Xo(UT,i.config.apiKey,i.name)}async function WT(i,t,e=!1){if(ge(i.app))return Promise.reject(Tn(i));const r=ni(i),o=dp(r,t),u=await new BT(r,o,e).execute();return u&&!e&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,t)),u}/**
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
 */const $T=10*60*1e3;class GT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ZT(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!pp(t)){const o=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ue(this.auth,o))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lh(t))}saveEventToCache(t){this.cachedEventUids.add(Lh(t)),this.lastProcessedEventTime=Date.now()}}function Lh(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function pp({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ZT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pp(i);default:return!1}}/**
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
 */async function KT(i,t={}){return ei(i,"GET","/v1/projects",t)}/**
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
 */const QT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JT=/^https?/;async function YT(i){if(i.config.emulator)return;const{authorizedDomains:t}=await KT(i);for(const e of t)try{if(XT(e))return}catch{}Re(i,"unauthorized-domain")}function XT(i){const t=Vc(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&u.hostname===r}if(!JT.test(e))return!1;if(QT.test(i))return r===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tE=new Ys(3e4,6e4);function xh(){const i=tn().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function eE(i){return new Promise((t,e)=>{var o,a,u;function r(){xh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xh(),e(Ue(i,"network-request-failed"))},timeout:tE.get()})}if((a=(o=tn().gapi)==null?void 0:o.iframes)!=null&&a.Iframe)t(gapi.iframes.getContext());else if((u=tn().gapi)!=null&&u.load)r();else{const f=$w("iframefcb");return tn()[f]=()=>{gapi.load?r():e(Ue(i,"network-request-failed"))},Yf(`${Ww()}?onload=${f}`).catch(m=>e(m))}}).catch(t=>{throw ea=null,t})}let ea=null;function nE(i){return ea=ea||eE(i),ea}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const iE=new Ys(5e3,15e3),rE="__/auth/iframe",sE="emulator/auth/iframe",oE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cE(i){const t=i.config;Y(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?Cl(t,sE):`https://${i.config.authDomain}/${rE}`,r={apiKey:t.apiKey,appName:i.name,v:xr},o=aE.get(i.config.apiHost);o&&(r.eid=o);const a=i._getFrameworks();return a.length&&(r.fw=a.join(",")),`${e}?${js(r).slice(1)}`}async function lE(i){const t=await nE(i),e=tn().gapi;return Y(e,i,"internal-error"),t.open({where:document.body,url:cE(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oE,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ue(i,"network-request-failed"),f=tn().setTimeout(()=>{a(u)},iE.get());function m(){tn().clearTimeout(f),o(r)}r.ping(m).then(m,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const uE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hE=500,dE=600,fE="_blank",pE="http://localhost";class Dh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mE(i,t,e,r=hE,o=dE){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const m={...uE,width:r.toString(),height:o.toString(),top:a,left:u},g=ie().toLowerCase();e&&(f=Wf(g)?fE:e),Hf(g)&&(t=t||pE,m.scrollbars="yes");const v=Object.entries(m).reduce((P,[M,z])=>`${P}${M}=${z},`,"");if(Mw(g)&&f!=="_self")return _E(t||"",f),new Dh(null);const T=window.open(t||"",f,v);Y(T,i,"popup-blocked");try{T.focus()}catch{}return new Dh(T)}function _E(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const gE="__/auth/handler",yE="emulator/auth/handler",vE=encodeURIComponent("fac");async function Oh(i,t,e,r,o,a){Y(i.config.authDomain,i,"auth-domain-config-required"),Y(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:xr,eventId:o};if(t instanceof Dl){t.setDefaultLanguage(i.languageCode),u.providerId=t.providerId||"",Sm(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,T]of Object.entries({}))u[v]=T}if(t instanceof to){const v=t.getScopes().filter(T=>T!=="");v.length>0&&(u.scopes=v.join(","))}i.tenantId&&(u.tid=i.tenantId);const f=u;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const m=await i._getAppCheckToken(),g=m?`#${vE}=${encodeURIComponent(m)}`:"";return`${wE(i)}?${js(f).slice(1)}${g}`}function wE({config:i}){return i.emulator?Cl(i,yE):`https://${i.authDomain}/${gE}`}/**
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
 */const lc="webStorageSupport";class TE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ap,this._completeRedirectFn=WT,this._overrideRedirectResult=qT}async _openPopup(t,e,r,o){var u;bn((u=this.eventManagers[t._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await Oh(t,e,r,Vc(),o);return mE(t,a,Ol())}async _openRedirect(t,e,r,o){await this._originValidation(t);const a=await Oh(t,e,r,Vc(),o);return AT(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:o,promise:a}=this.eventManagers[e];return o?Promise.resolve(o):(bn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await lE(t),r=new GT(t);return e.register("authEvent",o=>(Y(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(lc,{type:lc},o=>{var u;const a=(u=o==null?void 0:o[0])==null?void 0:u[lc];a!==void 0&&e(!!a),Re(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=YT(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Qf()||jf()||kl()}}const EE=TE;var Nh="@firebase/auth",Mh="1.13.1";/**
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
 */class IE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AE(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bE(i){Sr(new Ri("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=r.options;Y(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:u,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jf(i)},g=new qw(r,o,a,m);return Yw(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Sr(new Ri("auth-internal",t=>{const e=ni(t.getProvider("auth").getImmediate());return(r=>new IE(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Nh,Mh,AE(i)),jn(Nh,Mh,"esm2020")}/**
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
 */const PE=5*60,SE=Kh("authIdTokenMaxAge")||PE;let Vh=null;const CE=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>SE)return;const o=e==null?void 0:e.token;Vh!==o&&(Vh=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function RE(i=td()){const t=jc(i,"auth");if(t.isInitialized())return t.getImmediate();const e=Jw(i,{popupRedirectResolver:EE,persistence:[DT,TT,ap]}),r=Kh("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=CE(a.toString());_T(e,u,()=>u(e.currentUser)),mT(e,f=>u(f))}}const o=Gh("auth");return o&&Xw(e,`http://${o}`),e}function kE(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}Hw({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=o=>{const a=Ue("internal-error");a.customData=o,e(a)},r.type="text/javascript",r.charset="UTF-8",kE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bE("Browser");const mp={apiKey:"AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",authDomain:"trippy-planner-807df.firebaseapp.com",projectId:"trippy-planner-807df",storageBucket:"trippy-planner-807df.firebasestorage.app",messagingSenderId:"376063703433",appId:"1:376063703433:web:..."},_p=!!mp.apiKey;let gp=null,yp=null;function LE(){if(!_p)return!1;try{const i=Xh(mp);return gp=Qv(i),yp=RE(i),!0}catch(i){return console.warn("Firebase init failed — running in guest mode",i),!1}}const vp=()=>_p,br=()=>gp,no=()=>yp;let Ss=null;function xE(i){if(!vp()){i(null);return}const t=no();if(!t){i(null);return}gT(t,e=>{Ss=e,i(e)})}const Ml=()=>Ss;async function DE(){return FT(no(),new gn)}async function OE(i,t){return pT(no(),i,t)}async function NE(i,t){return fT(no(),i,t)}async function ME(){return yT(no())}function Vl(i){const t=i.querySelector(".auth-slot");if(t){if(!vp()){t.innerHTML='<span class="auth-guest-note">Guest mode</span>';return}if(Ss){const e=Ss.displayName||Ss.email||"User";t.innerHTML=`
      <span class="auth-user-name">${VE(e)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `,t.querySelector(".auth-signout-btn").addEventListener("click",()=>ME())}else t.innerHTML='<button class="ghost-btn auth-signin-btn">Sign in</button>',t.querySelector(".auth-signin-btn").addEventListener("click",()=>FE())}}function VE(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function FE(){const i=document.getElementById("auth-modal");if(i){i.remove();return}const t=document.createElement("div");t.id="auth-modal",t.className="auth-modal-overlay",t.innerHTML=`
    <div class="auth-modal">
      <button class="auth-modal-close" id="auth-close">✕</button>
      <div class="auth-modal-title">Sign in</div>
      <button class="auth-google-btn" id="auth-google">Continue with Google</button>
      <div class="auth-divider">or</div>
      <input class="dark-input" id="auth-email" type="email" placeholder="Email">
      <input class="dark-input" id="auth-pass"  type="password" placeholder="Password" style="margin-top:8px">
      <div class="auth-modal-actions">
        <button class="add-btn"   id="auth-signin">Sign in</button>
        <button class="ghost-btn" id="auth-create">Create account</button>
      </div>
      <div class="auth-error" id="auth-err"></div>
    </div>
  `,document.body.appendChild(t);const e=r=>{t.querySelector("#auth-err").textContent=r};t.querySelector("#auth-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()}),t.querySelector("#auth-google").addEventListener("click",async()=>{try{await DE(),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-signin").addEventListener("click",async()=>{try{await OE(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-create").addEventListener("click",async()=>{try{await NE(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}})}let na={};function UE(i){return na=i,window.addEventListener("hashchange",uc),{start:uc,refresh:uc}}function Pr(i){window.location.hash=i}function uc(){const i=window.location.hash.slice(1)||"/";for(const[t,e]of Object.entries(na)){const r=BE(t,i);if(r!==null){e(r);return}}na["/"]&&na["/"]({})}function BE(i,t){if(i==="/")return t==="/"||t===""?{}:null;const e=i.split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(e.length!==r.length)return null;const o={};for(let a=0;a<e.length;a++)if(e[a].startsWith(":"))o[e[a].slice(1)]=decodeURIComponent(r[a]);else if(e[a]!==r[a])return null;return o}const Fl=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),zE=()=>({id:Fl(),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1}),wp="trippy-planner-trips",Ul=i=>`trippy-trip-${i}`,Tp=()=>{try{return JSON.parse(localStorage.getItem(wp)||"[]")}catch{return[]}},Ep=i=>{try{localStorage.setItem(wp,JSON.stringify(i))}catch{}},Ip=i=>{try{return JSON.parse(localStorage.getItem(Ul(i))||"null")}catch{return null}},Cs=i=>{try{localStorage.setItem(Ul(i.id),JSON.stringify(i))}catch{}},qE=i=>{try{localStorage.removeItem(Ul(i))}catch{}};function Ta(i){return i?typeof(i==null?void 0:i.toMillis)=="function"?i.toMillis():typeof i=="number"?i:0:0}function HE(i,t){let e=[],r=null;function o(){return Tp().map(m=>Ip(m.id)||{...m,days:[]})}function a(){Ep(e.map(({id:m,name:g,createdAt:v})=>({id:m,name:g,createdAt:v})))}function u(m){r&&(r(),r=null);const g=br();if(!g||!m)return;const v=lw(Kv(g,"users",m,"trips"),uw("createdAt","desc"));r=Of(v,T=>{e=T.docs.map(P=>{const M=P.data();return{...M,createdAt:Ta(M.createdAt),updatedAt:Ta(M.updatedAt)}}),e.forEach(P=>Cs(P)),a(),t([...e])},T=>console.warn("Firestore trip list:",T))}async function f(m){const g=br();if(!(!g||!i))try{await bl(Fs(g,"users",i,"trips",m.id),{...m,createdAt:m.createdAt||Bs(),updatedAt:Bs()},{merge:!0})}catch(v){console.warn("Firestore write:",v)}}return e=o(),setTimeout(()=>t([...e]),0),i&&u(i),{getAll:()=>[...e],async create(m){const g=Fl(),v={id:g,name:m,createdAt:Date.now(),updatedAt:Date.now(),days:[]};return e.unshift(v),Cs(v),a(),t([...e]),await f(v),g},async delete(m){e=e.filter(v=>v.id!==m),qE(m),a(),t([...e]);const g=br();if(g&&i)try{await fw(Fs(g,"users",i,"trips",m))}catch{}},async rename(m,g){const v=e.find(T=>T.id===m);v&&(v.name=g,v.updatedAt=Date.now(),Cs(v),a(),t([...e]),await f(v))},setUserId(m){i=m,m?u(m):(r&&(r(),r=null),e=o(),t([...e]))},destroy(){r&&(r(),r=null)}}}function Ap(i,t,e){let r=Ip(i)||{id:i,name:"Trip",createdAt:Date.now(),updatedAt:Date.now(),days:[]},o=Array.isArray(r.days)?r.days:[],a=null,u=null;function f(){r.days=o,r.updatedAt=Date.now(),Cs(r)}function m(){clearTimeout(u),u=setTimeout(async()=>{const v=br();if(!(!v||!t))try{await bl(Fs(v,"users",t,"trips",i),{...r,days:o,updatedAt:Bs()},{merge:!0})}catch(T){console.warn("Firestore write:",T)}},1500)}function g(){f(),t&&m(),e([...o])}if(t){const v=br();v&&(a=Of(Fs(v,"users",t,"trips",i),T=>{if(!T.exists())return;const P=T.data();r={...P,createdAt:Ta(P.createdAt),updatedAt:Ta(P.updatedAt)},o=Array.isArray(r.days)?r.days:[],f(),e([...o])},T=>console.warn("Firestore trip:",T)))}return{tripName:()=>r.name||"Trip",getAll:()=>[...o],add(v,T){const P={...zE(),date:v,destination:T};o.push(P),o.sort((M,z)=>M.date.localeCompare(z.date)),g()},update(v,T,P){const M=o.find(z=>z.id===v);M&&(M[T]=P,g())},remove(v){o=o.filter(T=>T.id!==v),g()},loadFromCSV(v){o=v,g()},toCSV(){const v=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],T=o.map(P=>[P.date,P.destination,P.event,P.travelDay?"Y":"N",P.accommodation,P.accomCost,P.travelDetails,P.travelCost,P.finalised?"Y":"N"].map(M=>`"${(M??"").toString().replace(/"/g,'""')}"`).join(","));return[v.join(","),...T].join(`
`)},metrics(){const v=o.length,T=o.filter(z=>z.travelDay).length,P=o.filter(z=>z.finalised).length,M=o.reduce((z,B)=>z+Number(B.accomCost||0)+Number(B.travelCost||0),0);return{total:v,travelDays:T,finalised:P,cost:M}},destroy(){clearTimeout(u),a&&(a(),a=null)}}}function jE(){try{const i=localStorage.getItem("trippy-planner-data");if(!i)return null;const t=JSON.parse(i);return!Array.isArray(t)||t.length===0?(localStorage.removeItem("trippy-planner-data"),null):t}catch{return null}}function WE(i,t,e){const r=Fl(),o={id:r,name:i,createdAt:Date.now(),updatedAt:Date.now(),days:t};Cs(o);const a=Tp();a.unshift({id:r,name:i,createdAt:o.createdAt}),Ep(a),localStorage.removeItem("trippy-planner-data");const u=br();return u&&e&&bl(Fs(u,"users",e,"trips",r),{...o,createdAt:Bs(),updatedAt:Bs()}).catch(console.warn),r}let Ai=null;function bp(i){const t=Ml(),e=(t==null?void 0:t.uid)||null;Ai&&(Ai.destroy(),Ai=null),Ai=HE(e,r=>$E(i,r,e))}function $E(i,t,e){var f;const r=jE();i.innerHTML=`
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="auth-slot"></div>
    </div>

    ${r?`
      <div class="migration-banner" id="mig-banner">
        <span class="mig-text">You have a saved trip — give it a name to keep it:</span>
        <input class="dark-input mig-input" id="mig-name" value="My Trip" placeholder="Trip name">
        <button class="add-btn mig-save"    id="mig-save">Save</button>
        <button class="ghost-btn mig-skip"  id="mig-skip">Dismiss</button>
      </div>
    `:""}

    <div class="landing-header">
      <h1 class="landing-title">Your Trips</h1>
      <button class="add-btn" id="new-trip-btn">+ New Trip</button>
    </div>

    ${t.length===0?`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No trips yet — create your first one above.</p>
      </div>
    `:`
      <div class="landing-grid" id="trips-grid">
        ${t.map(GE).join("")}
      </div>
    `}

    <div class="modal-overlay" id="new-trip-modal" style="display:none">
      <div class="modal-box">
        <div class="modal-title">Name your trip</div>
        <input class="dark-input" id="trip-name-input" placeholder="e.g. Japan 2025">
        <div class="modal-actions">
          <button class="add-btn"   id="modal-create">Create</button>
          <button class="ghost-btn" id="modal-cancel">Cancel</button>
        </div>
      </div>
    </div>
  `,Vl(i),r&&(i.querySelector("#mig-save").addEventListener("click",()=>{const m=i.querySelector("#mig-name").value.trim()||"My Trip";WE(m,r,e),bp(i)}),i.querySelector("#mig-skip").addEventListener("click",()=>{localStorage.removeItem("trippy-planner-data"),i.querySelector("#mig-banner").remove()}));const o=i.querySelector("#new-trip-modal"),a=i.querySelector("#trip-name-input");i.querySelector("#new-trip-btn").addEventListener("click",()=>{o.style.display="flex",a.focus()}),i.querySelector("#modal-cancel").addEventListener("click",()=>{o.style.display="none",a.value=""}),o.addEventListener("click",m=>{m.target===o&&(o.style.display="none",a.value="")});async function u(){const m=a.value.trim();if(!m){a.focus();return}o.style.display="none",a.value="";const g=await Ai.create(m);Pr(`/trip/${g}`)}i.querySelector("#modal-create").addEventListener("click",u),a.addEventListener("keydown",m=>{m.key==="Enter"&&u(),m.key==="Escape"&&(o.style.display="none",a.value="")}),(f=i.querySelector("#trips-grid"))==null||f.addEventListener("click",async m=>{const g=m.target.closest("[data-trip-id]");if(!g)return;const v=g.dataset.tripId;if(m.target.closest(".trip-open-btn"))Pr(`/trip/${v}`);else if(m.target.closest(".trip-globe-btn"))Pr(`/globe/${v}`);else if(m.target.closest(".trip-delete-btn"))confirm("Delete this trip? This cannot be undone.")&&await Ai.delete(v);else if(m.target.closest(".trip-card-title")){const T=m.target.closest(".trip-card-title"),P=T.textContent.trim(),M=document.createElement("input");M.className="dark-input trip-rename-input",M.value=P,T.replaceWith(M),M.focus(),M.select();const z=async()=>{const B=M.value.trim()||P;await Ai.rename(v,B)};M.addEventListener("blur",z),M.addEventListener("keydown",B=>{B.key==="Enter"&&M.blur()})}})}function GE(i){const t=i.days||[],{total:e,finalised:r,cost:o}=ZE(t),a=e?Math.round(r/e*100):0,u=t.length?`${Fh(t[0].date)} – ${Fh(t[t.length-1].date)}`:"No days yet",f=[...new Set(t.map(g=>g.destination).filter(Boolean))],m=f.slice(0,3);return`
    <div class="trip-card" data-trip-id="${i.id}">
      <div class="trip-card-top">
        <div class="trip-card-title">${Uh(i.name)}</div>
        <div class="trip-card-range">${u}</div>
      </div>
      ${m.length?`
        <div class="trip-card-dests">
          ${m.map(g=>`<span class="dest-tag">${Uh(g)}</span>`).join("")}
          ${f.length>3?`<span class="dest-tag dest-more">+${f.length-3} more</span>`:""}
        </div>
      `:'<div class="trip-card-no-days">No days added yet</div>'}
      <div class="trip-card-stats">
        <span>${e} day${e!==1?"s":""}</span>
        <span>$${o.toLocaleString("en-AU",{maximumFractionDigits:0})} AUD</span>
        <span>${a}% finalised</span>
      </div>
      <div class="trip-card-progress">
        <div class="trip-progress-fill" style="width:${a}%"></div>
      </div>
      <div class="trip-card-actions">
        <button class="add-btn  trip-open-btn">Open</button>
        <button class="ghost-btn trip-globe-btn">Globe</button>
        <button class="ghost-btn trip-delete-btn">Delete</button>
      </div>
    </div>
  `}function ZE(i){return{total:i.length,finalised:i.filter(t=>t.finalised).length,cost:i.reduce((t,e)=>t+Number(e.accomCost||0)+Number(e.travelCost||0),0)}}function Fh(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}function Uh(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const Bh=["January","February","March","April","May","June","July","August","September","October","November","December"],KE=["Su","Mo","Tu","We","Th","Fr","Sa"];class QE{constructor(t,e,r){this.wrap=t,this.input=e,this.onSelect=r,this.selected=null;const o=new Date;this.year=o.getFullYear(),this.month=o.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",t=>{this.wrap.contains(t.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(t){this.month+=t,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const t=this._dropdown.querySelector("#dp-month-label"),e=this._dropdown.querySelector("#dp-grid");t.textContent=`${Bh[this.month]} ${this.year}`;const r=new Date(this.year,this.month,1).getDay(),o=new Date(this.year,this.month+1,0).getDate(),a=new Date;let u=KE.map(f=>`<div class="dp-dh">${f}</div>`).join("");for(let f=0;f<r;f++)u+='<button class="dp-day empty" disabled></button>';for(let f=1;f<=o;f++){const m=this.dateString(this.year,this.month+1,f),g=this.selected===m,v=a.getFullYear()===this.year&&a.getMonth()===this.month&&a.getDate()===f;let T="dp-day";g?T+=" selected":v&&(T+=" today"),u+=`<button class="${T}" data-date="${m}">${f}</button>`}e.innerHTML=u,e.querySelectorAll(".dp-day:not(.empty)").forEach(f=>{f.addEventListener("click",()=>{this.selected=f.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(t,e,r){return`${t}-${String(e).padStart(2,"0")}-${String(r).padStart(2,"0")}`}formatDisplay(t){const[e,r,o]=t.split("-");return`${o} ${Bh[parseInt(r)-1]} ${e}`}reset(){this.selected=null,this.input.value=""}}const JE=["January","February","March","April","May","June","July","August","September","October","November","December"];function YE(i){if(!i)return"";const[t,e,r]=i.split("-");return`${r} ${JE[parseInt(e)-1]} ${t}`}function jo(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function XE(i,t,e,r,o){const a=e.metrics(),u=i.querySelector("#metrics-row");u&&(u.style.display=t.length?"grid":"none",i.querySelector("#m-days").textContent=a.total,i.querySelector("#m-travel").textContent=a.travelDays,i.querySelector("#m-cost").textContent="$"+Number(a.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const f=i.querySelector("#progress-wrap");if(f)if(t.length){f.style.display="block";const g=a.total?Math.round(a.finalised/a.total*100):0;i.querySelector("#progress-fill").style.width=g+"%",i.querySelector("#progress-count").textContent=`${a.finalised} / ${a.total} days finalised`}else f.style.display="none";const m=i.querySelector("#itinerary-list");if(m){if(t.length===0){m.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}m.innerHTML=t.map(g=>{const v=r===g.id,T=g.finalised?'<span class="day-badge badge-final">Finalised</span>':g.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',P=v?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${g.id}" data-field="event"
              value="${jo(g.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${g.id}" data-field="accommodation"
              value="${jo(g.accommodation)}" placeholder="Hotel / Airbnb name">
          </div>
          <div class="detail-field">
            <label>Accommodation Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${g.id}" data-field="accomCost" value="${g.accomCost}">
          </div>
          <div class="detail-field">
            <label>Travel Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${g.id}" data-field="travelCost" value="${g.travelCost}">
          </div>
          <div class="detail-field detail-full">
            <label>Travel Details</label>
            <input class="dark-input" data-id="${g.id}" data-field="travelDetails"
              value="${jo(g.travelDetails)}" placeholder="Flight / train / driving info">
          </div>
        </div>
        <div class="detail-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${g.id}" data-field="travelDay"
              ${g.travelDay?"checked":""}>
            Travel day
          </label>
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${g.id}" data-field="finalised"
              ${g.finalised?"checked":""}>
            Finalised
          </label>
          <button class="delete-btn" data-delete="${g.id}">Remove</button>
        </div>
      </div>`:"";return`
      <div class="day-card">
        <div class="day-header" data-toggle="${g.id}">
          <div class="day-dot"></div>
          <div class="day-date">${YE(g.date)}</div>
          <div class="day-dest">${jo(g.destination)}</div>
          ${T}
          <span class="chevron${v?" open":""}">&#9654;</span>
        </div>
        ${P}
      </div>`}).join(""),m.querySelectorAll("[data-toggle]").forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.toggle;o(r===v?null:v)})}),m.querySelectorAll("[data-field]").forEach(g=>{const v=()=>{const T=g.type==="checkbox"?g.checked:g.value;e.update(g.dataset.id,g.dataset.field,T)};g.addEventListener(g.type==="checkbox"?"change":"blur",v)}),m.querySelectorAll("[data-delete]").forEach(g=>{g.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&e.remove(g.dataset.delete)})})}}const tI=["January","February","March","April","May","June","July","August","September","October","November","December"],eI=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function hc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function Wo(i,t,e,r){const o=i.querySelector("#cal-title"),a=i.querySelector("#cal-days-header"),u=i.querySelector("#cal-body");if(!o||!a||!u)return;o.textContent=`${tI[r]} ${e}`,a.innerHTML=eI.map(P=>`<div class="cal-header-cell">${P}</div>`).join("");const f={};t.forEach(P=>{P.date&&(f[P.date]=P)});const m=new Date(e,r,1).getDay(),g=new Date(e,r+1,0).getDate(),v=new Date;let T="";for(let P=0;P<m;P++)T+='<div class="cal-cell empty"></div>';for(let P=1;P<=g;P++){const M=`${e}-${String(r+1).padStart(2,"0")}-${String(P).padStart(2,"0")}`,z=v.getFullYear()===e&&v.getMonth()===r&&v.getDate()===P,B=f[M];let H="cal-cell";z?H+=" today":B&&(H+=" has-trip");let K=`<div class="cal-date-num${z?" today-num":""}">${P}</div>`;B&&(K+=`<div class="cal-dest">${hc(B.destination)}</div>`,B.event&&(K+=`<div class="cal-note">${hc(B.event)}</div>`),B.travelDetails&&(K+=`<div class="cal-travel-note">${hc(B.travelDetails)}</div>`)),T+=`<div class="${H}">${K}</div>`}u.innerHTML=T}let Ne=null;function nI(i,t){var H;Ne&&(Ne.destroy(),Ne=null);const e=((H=Ml())==null?void 0:H.uid)||null;Ne=Ap(t,e,K=>{r=K,B()}),i.innerHTML=`
    <div class="topbar">
      <div class="topbar-left">
        <button class="ghost-btn back-btn" id="back-btn">← All Trips</button>
        <div class="logo">trippy<span>.</span>planner</div>
        <span class="trip-name-label" id="trip-name-label"></span>
      </div>
      <div class="topbar-right">
        <div class="tabs">
          <button class="tab active" data-tab="planner">Planner</button>
          <button class="tab"        data-tab="calendar">Calendar</button>
        </div>
        <button class="ghost-btn globe-nav-btn" id="globe-nav-btn">🌍 Globe</button>
        <div class="auth-slot"></div>
      </div>
    </div>

    <!-- ── Planner Tab ───────────────────────────────────────────────────── -->
    <div id="tab-planner">
      <div class="section-label">Add a new day</div>
      <div class="add-bar">
        <div class="field-group date-picker-wrap" id="dp-wrap">
          <label>Date</label>
          <input class="dark-input" id="new-date-display"
            placeholder="Pick a date" readonly>
        </div>
        <div class="field-group">
          <label>Destination</label>
          <input class="dark-input" id="new-dest"
            placeholder="e.g. Paris, France">
        </div>
        <button class="add-btn" id="add-btn">+ Add Day</button>
      </div>

      <hr class="divider">

      <div class="metrics" id="metrics-row" style="display:none">
        <div class="metric">
          <div class="metric-label">Total Days</div>
          <div class="metric-value" id="m-days">0</div>
        </div>
        <div class="metric">
          <div class="metric-label">Travel Days</div>
          <div class="metric-value" id="m-travel">0</div>
        </div>
        <div class="metric">
          <div class="metric-label">Total Cost (AUD)</div>
          <div class="metric-value" id="m-cost">$0.00</div>
        </div>
      </div>

      <div id="itinerary-list"></div>

      <div id="progress-wrap" style="display:none" class="progress-wrap">
        <div class="progress-header">
          <span class="progress-label">Trip progress</span>
          <span class="progress-count" id="progress-count">0 / 0 days finalised</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progress-fill" style="width:0%"></div>
        </div>
      </div>

      <div class="io-row">
        <button class="ghost-btn" id="download-btn">↓ Download CSV</button>
        <button class="ghost-btn" id="upload-btn">↑ Load Plan</button>
        <input type="file" id="upload-input" accept=".csv" style="display:none">
      </div>
    </div>

    <!-- ── Calendar Tab ──────────────────────────────────────────────────── -->
    <div id="tab-calendar" style="display:none">
      <div class="cal-nav">
        <button class="cal-nav-btn" id="cal-prev">&#8249; Prev</button>
        <span class="cal-title" id="cal-title"></span>
        <button class="cal-nav-btn" id="cal-next">Next &#8250;</button>
      </div>
      <div class="cal-grid" id="cal-days-header"></div>
      <div style="height:6px"></div>
      <div class="cal-grid" id="cal-body"></div>
    </div>
  `;let r=Ne.getAll(),o=null,a="planner";const u=new Date;let f=u.getFullYear(),m=u.getMonth();i.querySelector("#trip-name-label").textContent=Ne.tripName(),Vl(i),i.querySelector("#back-btn").addEventListener("click",()=>Pr("/")),i.querySelector("#globe-nav-btn").addEventListener("click",()=>Pr(`/globe/${t}`));const g=i.querySelector("#dp-wrap"),v=i.querySelector("#new-date-display");let T=null;const P=new QE(g,v,K=>{T=K});P.init();const M=i.querySelector("#new-dest");function z(){const K=M.value.trim();if(!T||!K){v.style.borderColor=T?"":"var(--accent)",M.style.borderColor=K?"":"var(--accent)";return}v.style.borderColor="",M.style.borderColor="",Ne.add(T,K),T=null,P.reset(),M.value="",M.focus()}i.querySelector("#add-btn").addEventListener("click",z),M.addEventListener("keydown",K=>{K.key==="Enter"&&z()}),i.querySelectorAll(".tab").forEach(K=>{K.addEventListener("click",()=>{a=K.dataset.tab,i.querySelectorAll(".tab").forEach(ot=>ot.classList.toggle("active",ot.dataset.tab===a)),i.querySelector("#tab-planner").style.display=a==="planner"?"":"none",i.querySelector("#tab-calendar").style.display=a==="calendar"?"":"none",a==="calendar"&&Wo(i,r,f,m)})}),i.querySelector("#cal-prev").addEventListener("click",()=>{m--,m<0&&(m=11,f--),Wo(i,r,f,m)}),i.querySelector("#cal-next").addEventListener("click",()=>{m++,m>11&&(m=0,f++),Wo(i,r,f,m)}),i.querySelector("#download-btn").addEventListener("click",()=>{const K=new Blob([Ne.toCSV()],{type:"text/csv"}),ot=document.createElement("a");ot.href=URL.createObjectURL(K),ot.download=`${Ne.tripName().replace(/\s+/g,"_")}.csv`,ot.click(),URL.revokeObjectURL(ot.href)}),i.querySelector("#upload-btn").addEventListener("click",()=>{i.querySelector("#upload-input").click()}),i.querySelector("#upload-input").addEventListener("change",K=>{const ot=K.target.files[0];if(!ot)return;const ut=new FileReader;ut.onload=qt=>{const Lt=qt.target.result.trim().split(`
`).slice(1).map(C=>{const A=(C.match(/(".*?"|[^,]+)/g)||[]).map(R=>R.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:A[0]||"",destination:A[1]||"",event:A[2]||"",travelDay:A[3]==="Y",accommodation:A[4]||"",accomCost:parseFloat(A[5])||0,travelDetails:A[6]||"",travelCost:parseFloat(A[7])||0,finalised:A[8]==="Y"}}).filter(C=>C.date&&C.destination);Ne.loadFromCSV(Lt)},ut.readAsText(ot),K.target.value=""});function B(){XE(i,r,Ne,o,K=>{o=K,B()}),a==="calendar"&&Wo(i,r,f,m)}B()}var iI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rI(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var zc={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})(iI,function(e){var r="1.9.4";function o(n){var s,l,h,p;for(l=1,h=arguments.length;l<h;l++){p=arguments[l];for(s in p)n[s]=p[s]}return n}var a=Object.create||function(){function n(){}return function(s){return n.prototype=s,new n}}();function u(n,s){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var h=l.call(arguments,2);return function(){return n.apply(s,h.length?h.concat(l.call(arguments)):arguments)}}var f=0;function m(n){return"_leaflet_id"in n||(n._leaflet_id=++f),n._leaflet_id}function g(n,s,l){var h,p,y,I;return I=function(){h=!1,p&&(y.apply(l,p),p=!1)},y=function(){h?p=arguments:(n.apply(l,arguments),setTimeout(I,s),h=!0)},y}function v(n,s,l){var h=s[1],p=s[0],y=h-p;return n===h&&l?n:((n-p)%y+y)%y+p}function T(){return!1}function P(n,s){if(s===!1)return n;var l=Math.pow(10,s===void 0?6:s);return Math.round(n*l)/l}function M(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function z(n){return M(n).split(/\s+/)}function B(n,s){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in s)n.options[l]=s[l];return n.options}function H(n,s,l){var h=[];for(var p in n)h.push(encodeURIComponent(l?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var K=/\{ *([\w_ -]+) *\}/g;function ot(n,s){return n.replace(K,function(l,h){var p=s[h];if(p===void 0)throw new Error("No value provided for variable "+l);return typeof p=="function"&&(p=p(s)),p})}var ut=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function qt(n,s){for(var l=0;l<n.length;l++)if(n[l]===s)return l;return-1}var kt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Lt(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var C=0;function E(n){var s=+new Date,l=Math.max(0,16-(s-C));return C=s+l,window.setTimeout(n,l)}var A=window.requestAnimationFrame||Lt("RequestAnimationFrame")||E,R=window.cancelAnimationFrame||Lt("CancelAnimationFrame")||Lt("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function S(n,s,l){if(l&&A===E)n.call(s);else return A.call(window,u(n,s))}function k(n){n&&R.call(window,n)}var b={__proto__:null,extend:o,create:a,bind:u,get lastId(){return f},stamp:m,throttle:g,wrapNum:v,falseFn:T,formatNum:P,trim:M,splitWords:z,setOptions:B,getParamString:H,template:ot,isArray:ut,indexOf:qt,emptyImageUrl:kt,requestFn:A,cancelFn:R,requestAnimFrame:S,cancelAnimFrame:k};function Ct(){}Ct.extend=function(n){var s=function(){B(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=s.__super__=this.prototype,h=a(l);h.constructor=s,s.prototype=h;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(s[p]=this[p]);return n.statics&&o(s,n.statics),n.includes&&(rn(n.includes),o.apply(null,[h].concat(n.includes))),o(h,n),delete h.statics,delete h.includes,h.options&&(h.options=l.options?a(l.options):{},o(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var y=0,I=h._initHooks.length;y<I;y++)h._initHooks[y].call(this)}},s},Ct.include=function(n){var s=this.prototype.options;return o(this.prototype,n),n.options&&(this.prototype.options=s,this.mergeOptions(n.options)),this},Ct.mergeOptions=function(n){return o(this.prototype.options,n),this},Ct.addInitHook=function(n){var s=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function rn(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=ut(n)?n:[n];for(var s=0;s<n.length;s++)n[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var se={on:function(n,s,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],s);else{n=z(n);for(var p=0,y=n.length;p<y;p++)this._on(n[p],s,l)}return this},off:function(n,s,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],s);else{n=z(n);for(var p=arguments.length===1,y=0,I=n.length;y<I;y++)p?this._off(n[y]):this._off(n[y],s,l)}return this},_on:function(n,s,l,h){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(n,s,l)===!1){l===this&&(l=void 0);var p={fn:s,ctx:l};h&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,s,l){var h,p,y;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(p=0,y=h.length;p<y;p++)h[p].fn=T;delete this._events[n];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var I=this._listens(n,s,l);if(I!==!1){var D=h[I];this._firingCount&&(D.fn=T,this._events[n]=h=h.slice()),h.splice(I,1)}}},fire:function(n,s,l){if(!this.listens(n,l))return this;var h=o({},s,{type:n,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var y=0,I=p.length;y<I;y++){var D=p[y],N=D.fn;D.once&&this.off(n,N,D.ctx),N.call(D.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(n,s,l,h){typeof n!="string"&&console.warn('"string" type argument expected');var p=s;typeof s!="function"&&(h=!!s,p=void 0,l=void 0);var y=this._events&&this._events[n];if(y&&y.length&&this._listens(n,p,l)!==!1)return!0;if(h){for(var I in this._eventParents)if(this._eventParents[I].listens(n,s,l,h))return!0}return!1},_listens:function(n,s,l){if(!this._events)return!1;var h=this._events[n]||[];if(!s)return!!h.length;l===this&&(l=void 0);for(var p=0,y=h.length;p<y;p++)if(h[p].fn===s&&h[p].ctx===l)return p;return!1},once:function(n,s,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],s,!0);else{n=z(n);for(var p=0,y=n.length;p<y;p++)this._on(n[p],s,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[m(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[m(n)],this},_propagateEvent:function(n){for(var s in this._eventParents)this._eventParents[s].fire(n.type,o({layer:n.target,propagatedFrom:n.target},n),!0)}};se.addEventListener=se.on,se.removeEventListener=se.clearAllEventListeners=se.off,se.addOneTimeEventListener=se.once,se.fireEvent=se.fire,se.hasEventListeners=se.listens;var ii=Ct.extend(se);function tt(n,s,l){this.x=l?Math.round(n):n,this.y=l?Math.round(s):s}var ri=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};tt.prototype={clone:function(){return new tt(this.x,this.y)},add:function(n){return this.clone()._add(et(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(et(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new tt(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new tt(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=ri(this.x),this.y=ri(this.y),this},distanceTo:function(n){n=et(n);var s=n.x-this.x,l=n.y-this.y;return Math.sqrt(s*s+l*l)},equals:function(n){return n=et(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=et(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+P(this.x)+", "+P(this.y)+")"}};function et(n,s,l){return n instanceof tt?n:ut(n)?new tt(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new tt(n.x,n.y):new tt(n,s,l)}function It(n,s){if(n)for(var l=s?[n,s]:n,h=0,p=l.length;h<p;h++)this.extend(l[h])}It.prototype={extend:function(n){var s,l;if(!n)return this;if(n instanceof tt||typeof n[0]=="number"||"x"in n)s=l=et(n);else if(n=Zt(n),s=n.min,l=n.max,!s||!l)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=l.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return et((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return et(this.min.x,this.max.y)},getTopRight:function(){return et(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var s,l;return typeof n[0]=="number"||n instanceof tt?n=et(n):n=Zt(n),n instanceof It?(s=n.min,l=n.max):s=l=n,s.x>=this.min.x&&l.x<=this.max.x&&s.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Zt(n);var s=this.min,l=this.max,h=n.min,p=n.max,y=p.x>=s.x&&h.x<=l.x,I=p.y>=s.y&&h.y<=l.y;return y&&I},overlaps:function(n){n=Zt(n);var s=this.min,l=this.max,h=n.min,p=n.max,y=p.x>s.x&&h.x<l.x,I=p.y>s.y&&h.y<l.y;return y&&I},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var s=this.min,l=this.max,h=Math.abs(s.x-l.x)*n,p=Math.abs(s.y-l.y)*n;return Zt(et(s.x-h,s.y-p),et(l.x+h,l.y+p))},equals:function(n){return n?(n=Zt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Zt(n,s){return!n||n instanceof It?n:new It(n,s)}function Kt(n,s){if(n)for(var l=s?[n,s]:n,h=0,p=l.length;h<p;h++)this.extend(l[h])}Kt.prototype={extend:function(n){var s=this._southWest,l=this._northEast,h,p;if(n instanceof _t)h=n,p=n;else if(n instanceof Kt){if(h=n._southWest,p=n._northEast,!h||!p)return this}else return n?this.extend(at(n)||Pt(n)):this;return!s&&!l?(this._southWest=new _t(h.lat,h.lng),this._northEast=new _t(p.lat,p.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),l.lat=Math.max(p.lat,l.lat),l.lng=Math.max(p.lng,l.lng)),this},pad:function(n){var s=this._southWest,l=this._northEast,h=Math.abs(s.lat-l.lat)*n,p=Math.abs(s.lng-l.lng)*n;return new Kt(new _t(s.lat-h,s.lng-p),new _t(l.lat+h,l.lng+p))},getCenter:function(){return new _t((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new _t(this.getNorth(),this.getWest())},getSouthEast:function(){return new _t(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof _t||"lat"in n?n=at(n):n=Pt(n);var s=this._southWest,l=this._northEast,h,p;return n instanceof Kt?(h=n.getSouthWest(),p=n.getNorthEast()):h=p=n,h.lat>=s.lat&&p.lat<=l.lat&&h.lng>=s.lng&&p.lng<=l.lng},intersects:function(n){n=Pt(n);var s=this._southWest,l=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),y=p.lat>=s.lat&&h.lat<=l.lat,I=p.lng>=s.lng&&h.lng<=l.lng;return y&&I},overlaps:function(n){n=Pt(n);var s=this._southWest,l=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),y=p.lat>s.lat&&h.lat<l.lat,I=p.lng>s.lng&&h.lng<l.lng;return y&&I},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,s){return n?(n=Pt(n),this._southWest.equals(n.getSouthWest(),s)&&this._northEast.equals(n.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Pt(n,s){return n instanceof Kt?n:new Kt(n,s)}function _t(n,s,l){if(isNaN(n)||isNaN(s))throw new Error("Invalid LatLng object: ("+n+", "+s+")");this.lat=+n,this.lng=+s,l!==void 0&&(this.alt=+l)}_t.prototype={equals:function(n,s){if(!n)return!1;n=at(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(s===void 0?1e-9:s)},toString:function(n){return"LatLng("+P(this.lat,n)+", "+P(this.lng,n)+")"},distanceTo:function(n){return ye.distance(this,at(n))},wrap:function(){return ye.wrapLatLng(this)},toBounds:function(n){var s=180*n/40075017,l=s/Math.cos(Math.PI/180*this.lat);return Pt([this.lat-s,this.lng-l],[this.lat+s,this.lng+l])},clone:function(){return new _t(this.lat,this.lng,this.alt)}};function at(n,s,l){return n instanceof _t?n:ut(n)&&typeof n[0]!="object"?n.length===3?new _t(n[0],n[1],n[2]):n.length===2?new _t(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new _t(n.lat,"lng"in n?n.lng:n.lon,n.alt):s===void 0?null:new _t(n,s,l)}var pe={latLngToPoint:function(n,s){var l=this.projection.project(n),h=this.scale(s);return this.transformation._transform(l,h)},pointToLatLng:function(n,s){var l=this.scale(s),h=this.transformation.untransform(n,l);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var s=this.projection.bounds,l=this.scale(n),h=this.transformation.transform(s.min,l),p=this.transformation.transform(s.max,l);return new It(h,p)},infinite:!1,wrapLatLng:function(n){var s=this.wrapLng?v(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?v(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new _t(l,s,h)},wrapLatLngBounds:function(n){var s=n.getCenter(),l=this.wrapLatLng(s),h=s.lat-l.lat,p=s.lng-l.lng;if(h===0&&p===0)return n;var y=n.getSouthWest(),I=n.getNorthEast(),D=new _t(y.lat-h,y.lng-p),N=new _t(I.lat-h,I.lng-p);return new Kt(D,N)}},ye=o({},pe,{wrapLng:[-180,180],R:6371e3,distance:function(n,s){var l=Math.PI/180,h=n.lat*l,p=s.lat*l,y=Math.sin((s.lat-n.lat)*l/2),I=Math.sin((s.lng-n.lng)*l/2),D=y*y+Math.cos(h)*Math.cos(p)*I*I,N=2*Math.atan2(Math.sqrt(D),Math.sqrt(1-D));return this.R*N}}),Ur=6378137,Br={R:Ur,MAX_LATITUDE:85.0511287798,project:function(n){var s=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,n.lat),-l),p=Math.sin(h*s);return new tt(this.R*n.lng*s,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var s=180/Math.PI;return new _t((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*s,n.x*s/this.R)},bounds:function(){var n=Ur*Math.PI;return new It([-n,-n],[n,n])}()};function zr(n,s,l,h){if(ut(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=s,this._c=l,this._d=h}zr.prototype={transform:function(n,s){return this._transform(n.clone(),s)},_transform:function(n,s){return s=s||1,n.x=s*(this._a*n.x+this._b),n.y=s*(this._c*n.y+this._d),n},untransform:function(n,s){return s=s||1,new tt((n.x/s-this._b)/this._a,(n.y/s-this._d)/this._c)}};function Sn(n,s,l,h){return new zr(n,s,l,h)}var si=o({},ye,{code:"EPSG:3857",projection:Br,transformation:function(){var n=.5/(Math.PI*Br.R);return Sn(n,.5,-n,.5)}()}),io=o({},si,{code:"EPSG:900913"});function ro(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ui(n,s){var l="",h,p,y,I,D,N;for(h=0,y=n.length;h<y;h++){for(D=n[h],p=0,I=D.length;p<I;p++)N=D[p],l+=(p?"L":"M")+N.x+" "+N.y;l+=s?Z.svg?"z":"x":""}return l||"M0 0"}var oi=document.documentElement.style,ai="ActiveXObject"in window,Ht=ai&&!document.addEventListener,jt="msLaunchUri"in navigator&&!("documentMode"in document),Cn=le("webkit"),so=le("android"),qr=le("android 2")||le("android 3"),Ua=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ci=so&&le("Google")&&Ua<537&&!("AudioNode"in window),Bi=!!window.opera,Hr=!jt&&le("chrome"),zi=le("gecko")&&!Cn&&!Bi&&!ai,Ba=!Hr&&le("safari"),oo=le("phantom"),jr="OTransition"in oi,ao=navigator.platform.indexOf("Win")===0,Rn=ai&&"transition"in oi,li="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!qr,qi="MozPerspective"in oi,sn=!window.L_DISABLE_3D&&(Rn||li||qi)&&!jr&&!oo,kn=typeof orientation<"u"||le("mobile"),Hi=kn&&Cn,co=kn&&li,Ln=!window.PointerEvent&&window.MSPointerEvent,Wr=!!(window.PointerEvent||Ln),Wt="ontouchstart"in window||!!window.TouchEvent,lo=!window.L_NO_TOUCH&&(Wt||Wr),ui=kn&&Bi,hi=kn&&zi,za=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,qa=function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",T,s),window.removeEventListener("testPassiveEventSupport",T,s)}catch{}return n}(),xn=function(){return!!document.createElement("canvas").getContext}(),$r=!!(document.createElementNS&&ro("svg").createSVGRect),Ha=!!$r&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),ji=!$r&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var s=n.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),uo=navigator.platform.indexOf("Mac")===0,ho=navigator.platform.indexOf("Linux")===0;function le(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Z={ie:ai,ielt9:Ht,edge:jt,webkit:Cn,android:so,android23:qr,androidStock:ci,opera:Bi,chrome:Hr,gecko:zi,safari:Ba,phantom:oo,opera12:jr,win:ao,ie3d:Rn,webkit3d:li,gecko3d:qi,any3d:sn,mobile:kn,mobileWebkit:Hi,mobileWebkit3d:co,msPointer:Ln,pointer:Wr,touch:lo,touchNative:Wt,mobileOpera:ui,mobileGecko:hi,retina:za,passiveEvents:qa,canvas:xn,svg:$r,vml:ji,inlineSvg:Ha,mac:uo,linux:ho},fo=Z.msPointer?"MSPointerDown":"pointerdown",ke=Z.msPointer?"MSPointerMove":"pointermove",Gr=Z.msPointer?"MSPointerUp":"pointerup",Zr=Z.msPointer?"MSPointerCancel":"pointercancel",di={touchstart:fo,touchmove:ke,touchend:Gr,touchcancel:Zr},Wi={touchstart:Kr,touchmove:ve,touchend:ve,touchcancel:ve},on={},po=!1;function mo(n,s,l){return s==="touchstart"&&fi(),Wi[s]?(l=Wi[s].bind(this,l),n.addEventListener(di[s],l,!1),l):(console.warn("wrong event specified:",s),T)}function ja(n,s,l){if(!di[s]){console.warn("wrong event specified:",s);return}n.removeEventListener(di[s],l,!1)}function $i(n){on[n.pointerId]=n}function _o(n){on[n.pointerId]&&(on[n.pointerId]=n)}function Gi(n){delete on[n.pointerId]}function fi(){po||(document.addEventListener(fo,$i,!0),document.addEventListener(ke,_o,!0),document.addEventListener(Gr,Gi,!0),document.addEventListener(Zr,Gi,!0),po=!0)}function ve(n,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var l in on)s.touches.push(on[l]);s.changedTouches=[s],n(s)}}function Kr(n,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Nt(s),ve(n,s)}function Wa(n){var s={},l,h;for(h in n)l=n[h],s[h]=l&&l.bind?l.bind(n):l;return n=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var go=200;function yo(n,s){n.addEventListener("dblclick",s);var l=0,h;function p(y){if(y.detail!==1){h=y.detail;return}if(!(y.pointerType==="mouse"||y.sourceCapabilities&&!y.sourceCapabilities.firesTouchEvents)){var I=ts(y);if(!(I.some(function(N){return N instanceof HTMLLabelElement&&N.attributes.for})&&!I.some(function(N){return N instanceof HTMLInputElement||N instanceof HTMLSelectElement}))){var D=Date.now();D-l<=go?(h++,h===2&&s(Wa(y))):h=1,l=D}}}return n.addEventListener("click",p),{dblclick:s,simDblclick:p}}function vo(n,s){n.removeEventListener("dblclick",s.dblclick),n.removeEventListener("click",s.simDblclick)}var pi=Zi(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),an=Zi(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Qr=an==="webkitTransition"||an==="OTransition"?an+"End":"transitionend";function Jr(n){return typeof n=="string"?document.getElementById(n):n}function Dn(n,s){var l=n.style[s]||n.currentStyle&&n.currentStyle[s];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);l=h?h[s]:null}return l==="auto"?null:l}function pt(n,s,l){var h=document.createElement(n);return h.className=s||"",l&&l.appendChild(h),h}function gt(n){var s=n.parentNode;s&&s.removeChild(n)}function oe(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function we(n){var s=n.parentNode;s&&s.lastChild!==n&&s.appendChild(n)}function Te(n){var s=n.parentNode;s&&s.firstChild!==n&&s.insertBefore(n,s.firstChild)}function mi(n,s){if(n.classList!==void 0)return n.classList.contains(s);var l=ze(n);return l.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(l)}function G(n,s){if(n.classList!==void 0)for(var l=z(s),h=0,p=l.length;h<p;h++)n.classList.add(l[h]);else if(!mi(n,s)){var y=ze(n);cn(n,(y?y+" ":"")+s)}}function At(n,s){n.classList!==void 0?n.classList.remove(s):cn(n,M((" "+ze(n)+" ").replace(" "+s+" "," ")))}function cn(n,s){n.className.baseVal===void 0?n.className=s:n.className.baseVal=s}function ze(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function ue(n,s){"opacity"in n.style?n.style.opacity=s:"filter"in n.style&&wo(n,s)}function wo(n,s){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),l?(l.Enabled=s!==100,l.Opacity=s):n.style.filter+=" progid:"+h+"(opacity="+s+")"}function Zi(n){for(var s=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in s)return n[l];return!1}function ln(n,s,l){var h=s||new tt(0,0);n.style[pi]=(Z.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function xt(n,s){n._leaflet_pos=s,Z.any3d?ln(n,s):(n.style.left=s.x+"px",n.style.top=s.y+"px")}function un(n){return n._leaflet_pos||new tt(0,0)}var Le,me,Ki;if("onselectstart"in document)Le=function(){nt(window,"selectstart",Nt)},me=function(){Et(window,"selectstart",Nt)};else{var On=Zi(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Le=function(){if(On){var n=document.documentElement.style;Ki=n[On],n[On]="none"}},me=function(){On&&(document.documentElement.style[On]=Ki,Ki=void 0)}}function Qi(){nt(window,"dragstart",Nt)}function Ji(){Et(window,"dragstart",Nt)}var _i,qe;function Yr(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(Yi(),_i=n,qe=n.style.outlineStyle,n.style.outlineStyle="none",nt(window,"keydown",Yi))}function Yi(){_i&&(_i.style.outlineStyle=qe,_i=void 0,qe=void 0,Et(window,"keydown",Yi))}function To(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Ee(n){var s=n.getBoundingClientRect();return{x:s.width/n.offsetWidth||1,y:s.height/n.offsetHeight||1,boundingClientRect:s}}var $a={__proto__:null,TRANSFORM:pi,TRANSITION:an,TRANSITION_END:Qr,get:Jr,getStyle:Dn,create:pt,remove:gt,empty:oe,toFront:we,toBack:Te,hasClass:mi,addClass:G,removeClass:At,setClass:cn,getClass:ze,setOpacity:ue,testProp:Zi,setTransform:ln,setPosition:xt,getPosition:un,get disableTextSelection(){return Le},get enableTextSelection(){return me},disableImageDrag:Qi,enableImageDrag:Ji,preventOutline:Yr,restoreOutline:Yi,getSizedParentNode:To,getScale:Ee};function nt(n,s,l,h){if(s&&typeof s=="object")for(var p in s)Xi(n,p,s[p],l);else{s=z(s);for(var y=0,I=s.length;y<I;y++)Xi(n,s[y],l,h)}return this}var ae="_leaflet_events";function Et(n,s,l,h){if(arguments.length===1)Nn(n),delete n[ae];else if(s&&typeof s=="object")for(var p in s)gi(n,p,s[p],l);else if(s=z(s),arguments.length===2)Nn(n,function(D){return qt(s,D)!==-1});else for(var y=0,I=s.length;y<I;y++)gi(n,s[y],l,h);return this}function Nn(n,s){for(var l in n[ae]){var h=l.split(/\d/)[0];(!s||s(h))&&gi(n,h,null,null,l)}}var hn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Xi(n,s,l,h){var p=s+m(l)+(h?"_"+m(h):"");if(n[ae]&&n[ae][p])return this;var y=function(D){return l.call(h||n,D||window.event)},I=y;!Z.touchNative&&Z.pointer&&s.indexOf("touch")===0?y=mo(n,s,y):Z.touch&&s==="dblclick"?y=yo(n,y):"addEventListener"in n?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?n.addEventListener(hn[s]||s,y,Z.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(y=function(D){D=D||window.event,ns(n,D)&&I(D)},n.addEventListener(hn[s],y,!1)):n.addEventListener(s,I,!1):n.attachEvent("on"+s,y),n[ae]=n[ae]||{},n[ae][p]=y}function gi(n,s,l,h,p){p=p||s+m(l)+(h?"_"+m(h):"");var y=n[ae]&&n[ae][p];if(!y)return this;!Z.touchNative&&Z.pointer&&s.indexOf("touch")===0?ja(n,s,y):Z.touch&&s==="dblclick"?vo(n,y):"removeEventListener"in n?n.removeEventListener(hn[s]||s,y,!1):n.detachEvent("on"+s,y),n[ae][p]=null}function vt(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Xr(n){return Xi(n,"wheel",vt),this}function yi(n){return nt(n,"mousedown touchstart dblclick contextmenu",vt),n._leaflet_disable_click=!0,this}function Nt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function He(n){return Nt(n),vt(n),this}function ts(n){if(n.composedPath)return n.composedPath();for(var s=[],l=n.target;l;)s.push(l),l=l.parentNode;return s}function vi(n,s){if(!s)return new tt(n.clientX,n.clientY);var l=Ee(s),h=l.boundingClientRect;return new tt((n.clientX-h.left)/l.x-s.clientLeft,(n.clientY-h.top)/l.y-s.clientTop)}var je=Z.linux&&Z.chrome?window.devicePixelRatio:Z.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function es(n){return Z.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/je:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ns(n,s){var l=s.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var wi={__proto__:null,on:nt,off:Et,stopPropagation:vt,disableScrollPropagation:Xr,disableClickPropagation:yi,preventDefault:Nt,stop:He,getPropagationPath:ts,getMousePosition:vi,getWheelDelta:es,isExternalTarget:ns,addListener:nt,removeListener:Et},is=ii.extend({run:function(n,s,l,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=un(n),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=S(this._animate,this),this._step()},_step:function(n){var s=+new Date-this._startTime,l=this._duration*1e3;s<l?this._runFrame(this._easeOut(s/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,s){var l=this._startPos.add(this._offset.multiplyBy(n));s&&l._round(),xt(this._el,l),this.fire("step")},_complete:function(){k(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ct=ii.extend({options:{crs:si,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,s){s=B(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(at(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=an&&Z.any3d&&!Z.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),nt(this._proxy,Qr,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,s,l){if(s=s===void 0?this._zoom:this._limitZoom(s),n=this._limitCenter(at(n),s,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=o({animate:l.animate},l.zoom),l.pan=o({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,s,l.zoom):this._tryAnimatedPan(n,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,s,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,s){return this._loaded?this.setView(this.getCenter(),n,{zoom:s}):(this._zoom=n,this)},zoomIn:function(n,s){return n=n||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,s)},zoomOut:function(n,s){return n=n||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,s)},setZoomAround:function(n,s,l){var h=this.getZoomScale(s),p=this.getSize().divideBy(2),y=n instanceof tt?n:this.latLngToContainerPoint(n),I=y.subtract(p).multiplyBy(1-1/h),D=this.containerPointToLatLng(p.add(I));return this.setView(D,s,{zoom:l})},_getBoundsCenterZoom:function(n,s){s=s||{},n=n.getBounds?n.getBounds():Pt(n);var l=et(s.paddingTopLeft||s.padding||[0,0]),h=et(s.paddingBottomRight||s.padding||[0,0]),p=this.getBoundsZoom(n,!1,l.add(h));if(p=typeof s.maxZoom=="number"?Math.min(s.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var y=h.subtract(l).divideBy(2),I=this.project(n.getSouthWest(),p),D=this.project(n.getNorthEast(),p),N=this.unproject(I.add(D).divideBy(2).add(y),p);return{center:N,zoom:p}},fitBounds:function(n,s){if(n=Pt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,s);return this.setView(l.center,l.zoom,s)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,s){return this.setView(n,this._zoom,{pan:s})},panBy:function(n,s){if(n=et(n).round(),s=s||{},!n.x&&!n.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new is,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){G(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,s.duration||.25,s.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,s,l){if(l=l||{},l.animate===!1||!Z.any3d)return this.setView(n,s,l);this._stop();var h=this.project(this.getCenter()),p=this.project(n),y=this.getSize(),I=this._zoom;n=at(n),s=s===void 0?I:s;var D=Math.max(y.x,y.y),N=D*this.getZoomScale(I,s),U=p.distanceTo(h)||1,W=1.42,J=W*W;function lt(Mt){var Vo=Mt?-1:1,tm=Mt?N:D,em=N*N-D*D+Vo*J*J*U*U,nm=2*tm*J*U,Ja=em/nm,au=Math.sqrt(Ja*Ja+1)-Ja,im=au<1e-9?-18:Math.log(au);return im}function ce(Mt){return(Math.exp(Mt)-Math.exp(-Mt))/2}function $t(Mt){return(Math.exp(Mt)+Math.exp(-Mt))/2}function be(Mt){return ce(Mt)/$t(Mt)}var de=lt(0);function dr(Mt){return D*($t(de)/$t(de+W*Mt))}function Qp(Mt){return D*($t(de)*be(de+W*Mt)-ce(de))/J}function Jp(Mt){return 1-Math.pow(1-Mt,1.5)}var Yp=Date.now(),su=(lt(1)-de)/W,Xp=l.duration?1e3*l.duration:1e3*su*.8;function ou(){var Mt=(Date.now()-Yp)/Xp,Vo=Jp(Mt)*su;Mt<=1?(this._flyToFrame=S(ou,this),this._move(this.unproject(h.add(p.subtract(h).multiplyBy(Qp(Vo)/U)),I),this.getScaleZoom(D/dr(Vo),I),{flyTo:!0})):this._move(n,s)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),ou.call(this),this},flyToBounds:function(n,s){var l=this._getBoundsCenterZoom(n,s);return this.flyTo(l.center,l.zoom,s)},setMaxBounds:function(n){return n=Pt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var s=this.options.minZoom;return this.options.minZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var s=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,s){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,Pt(n));return l.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(n,s){s=s||{};var l=et(s.paddingTopLeft||s.padding||[0,0]),h=et(s.paddingBottomRight||s.padding||[0,0]),p=this.project(this.getCenter()),y=this.project(n),I=this.getPixelBounds(),D=Zt([I.min.add(l),I.max.subtract(h)]),N=D.getSize();if(!D.contains(y)){this._enforcingBounds=!0;var U=y.subtract(D.getCenter()),W=D.extend(y).getSize().subtract(N);p.x+=U.x<0?-W.x:W.x,p.y+=U.y<0?-W.y:W.y,this.panTo(this.unproject(p),s),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=o({animate:!1,pan:!0},n===!0?{animate:!0}:n);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=s.divideBy(2).round(),p=l.divideBy(2).round(),y=h.subtract(p);return!y.x&&!y.y?this:(n.animate&&n.pan?this.panBy(y):(n.pan&&this._rawPanBy(y),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=o({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,l,n):navigator.geolocation.getCurrentPosition(s,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var s=n.code,l=n.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var s=n.coords.latitude,l=n.coords.longitude,h=new _t(s,l),p=h.toBounds(n.coords.accuracy*2),y=this._locateOptions;if(y.setView){var I=this.getBoundsZoom(p);this.setView(h,y.maxZoom?Math.min(I,y.maxZoom):I)}var D={latlng:h,bounds:p,timestamp:n.timestamp};for(var N in n.coords)typeof n.coords[N]=="number"&&(D[N]=n.coords[N]);this.fire("locationfound",D)}},addHandler:function(n,s){if(!s)return this;var l=this[n]=new s(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),gt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(k(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)gt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,s){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=pt("div",l,s||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),s=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new Kt(s,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,s,l){n=Pt(n),l=et(l||[0,0]);var h=this.getZoom()||0,p=this.getMinZoom(),y=this.getMaxZoom(),I=n.getNorthWest(),D=n.getSouthEast(),N=this.getSize().subtract(l),U=Zt(this.project(D,h),this.project(I,h)).getSize(),W=Z.any3d?this.options.zoomSnap:1,J=N.x/U.x,lt=N.y/U.y,ce=s?Math.max(J,lt):Math.min(J,lt);return h=this.getScaleZoom(ce,h),W&&(h=Math.round(h/(W/100))*(W/100),h=s?Math.ceil(h/W)*W:Math.floor(h/W)*W),Math.max(p,Math.min(y,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new tt(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,s){var l=this._getTopLeftPoint(n,s);return new It(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,s){var l=this.options.crs;return s=s===void 0?this._zoom:s,l.scale(n)/l.scale(s)},getScaleZoom:function(n,s){var l=this.options.crs;s=s===void 0?this._zoom:s;var h=l.zoom(n*l.scale(s));return isNaN(h)?1/0:h},project:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(at(n),s)},unproject:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(et(n),s)},layerPointToLatLng:function(n){var s=et(n).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(n){var s=this.project(at(n))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(at(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Pt(n))},distance:function(n,s){return this.options.crs.distance(at(n),at(s))},containerPointToLayerPoint:function(n){return et(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return et(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var s=this.containerPointToLayerPoint(et(n));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(at(n)))},mouseEventToContainerPoint:function(n){return vi(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var s=this._container=Jr(n);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");nt(s,"scroll",this._onScroll,this),this._containerId=m(s)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Z.any3d,G(n,"leaflet-container"+(Z.touch?" leaflet-touch":"")+(Z.retina?" leaflet-retina":"")+(Z.ielt9?" leaflet-oldie":"")+(Z.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Dn(n,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),xt(this._mapPane,new tt(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(G(n.markerPane,"leaflet-zoom-hide"),G(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,s,l){xt(this._mapPane,new tt(0,0));var h=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var p=this._zoom!==s;this._moveStart(p,l)._move(n,s)._moveEnd(p),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,s){return n&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(n,s,l,h){s===void 0&&(s=this._zoom);var p=this._zoom!==s;return this._zoom=s,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?l&&l.pinch&&this.fire("zoom",l):((p||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return k(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){xt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[m(this._container)]=this;var s=n?Et:nt;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),Z.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){k(this._resizeRequest),this._resizeRequest=S(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,s){for(var l=[],h,p=s==="mouseout"||s==="mouseover",y=n.target||n.srcElement,I=!1;y;){if(h=this._targets[m(y)],h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)){I=!0;break}if(h&&h.listens(s,!0)&&(p&&!ns(y,n)||(l.push(h),p))||y===this._container)break;y=y.parentNode}return!l.length&&!I&&!p&&this.listens(s,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var s=n.target||n.srcElement;if(!(!this._loaded||s._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(s))){var l=n.type;l==="mousedown"&&Yr(s),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,s,l){if(n.type==="click"){var h=o({},n);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var p=this._findEventTargets(n,s);if(l){for(var y=[],I=0;I<l.length;I++)l[I].listens(s,!0)&&y.push(l[I]);p=y.concat(p)}if(p.length){s==="contextmenu"&&Nt(n);var D=p[0],N={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var U=D.getLatLng&&(!D._radius||D._radius<=10);N.containerPoint=U?this.latLngToContainerPoint(D.getLatLng()):this.mouseEventToContainerPoint(n),N.layerPoint=this.containerPointToLayerPoint(N.containerPoint),N.latlng=U?D.getLatLng():this.layerPointToLatLng(N.layerPoint)}for(I=0;I<p.length;I++)if(p[I].fire(s,N,!0),N.originalEvent._stopped||p[I].options.bubblingMouseEvents===!1&&qt(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,s=this._handlers.length;n<s;n++)this._handlers[n].disable()},whenReady:function(n,s){return this._loaded?n.call(s||this,{target:this}):this.on("load",n,s),this},_getMapPanePos:function(){return un(this._mapPane)||new tt(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,s){var l=n&&s!==void 0?this._getNewPixelOrigin(n,s):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,s){var l=this.getSize()._divideBy(2);return this.project(n,s)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,s,l){var h=this._getNewPixelOrigin(l,s);return this.project(n,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,s,l){var h=this._getNewPixelOrigin(l,s);return Zt([this.project(n.getSouthWest(),s)._subtract(h),this.project(n.getNorthWest(),s)._subtract(h),this.project(n.getSouthEast(),s)._subtract(h),this.project(n.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,s,l){if(!l)return n;var h=this.project(n,s),p=this.getSize().divideBy(2),y=new It(h.subtract(p),h.add(p)),I=this._getBoundsOffset(y,l,s);return Math.abs(I.x)<=1&&Math.abs(I.y)<=1?n:this.unproject(h.add(I),s)},_limitOffset:function(n,s){if(!s)return n;var l=this.getPixelBounds(),h=new It(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(n,s,l){var h=Zt(this.project(s.getNorthEast(),l),this.project(s.getSouthWest(),l)),p=h.min.subtract(n.min),y=h.max.subtract(n.max),I=this._rebound(p.x,-y.x),D=this._rebound(p.y,-y.y);return new tt(I,D)},_rebound:function(n,s){return n+s>0?Math.round(n-s)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(s))},_limitZoom:function(n){var s=this.getMinZoom(),l=this.getMaxZoom(),h=Z.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(s,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){At(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,s){var l=this._getCenterOffset(n)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,s),!0)},_createAnimProxy:function(){var n=this._proxy=pt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(s){var l=pi,h=this._proxy.style[l];ln(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){gt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),s=this.getZoom();ln(this._proxy,this.project(n,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,s,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),p=this._getCenterOffset(n)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(p)?!1:(S(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,s,!0)},this),!0)},_animateZoom:function(n,s,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=s,G(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:s,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&At(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function tr(n,s){return new ct(n,s)}var he=Ct.extend({options:{position:"topright"},initialize:function(n){B(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var s=this._map;return s&&s.removeControl(this),this.options.position=n,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var s=this._container=this.onAdd(n),l=this.getPosition(),h=n._controlCorners[l];return G(s,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(gt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),We=function(n){return new he(n)};ct.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},s="leaflet-",l=this._controlContainer=pt("div",s+"control-container",this._container);function h(p,y){var I=s+p+" "+s+y;n[p+y]=pt("div",I,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)gt(this._controlCorners[n]);gt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Eo=he.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,s,l,h){return l<h?-1:h<l?1:0}},initialize:function(n,s,l){B(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return he.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,s){return this._addLayer(n,s),this._map?this._update():this},addOverlay:function(n,s){return this._addLayer(n,s,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var s=this._getLayer(m(n));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){G(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(G(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):At(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return At(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",s=this._container=pt("div",n),l=this.options.collapsed;s.setAttribute("aria-haspopup",!0),yi(s),Xr(s);var h=this._section=pt("section",n+"-list");l&&(this._map.on("click",this.collapse,this),nt(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=pt("a",n+"-toggle",s);p.href="#",p.title="Layers",p.setAttribute("role","button"),nt(p,{keydown:function(y){y.keyCode===13&&this._expandSafely()},click:function(y){Nt(y),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=pt("div",n+"-base",h),this._separator=pt("div",n+"-separator",h),this._overlaysList=pt("div",n+"-overlays",h),s.appendChild(h)},_getLayer:function(n){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&m(this._layers[s].layer)===n)return this._layers[s]},_addLayer:function(n,s,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:s,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(h,p){return this.options.sortFunction(h.layer,p.layer,h.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;oe(this._baseLayersList),oe(this._overlaysList),this._layerControlInputs=[];var n,s,l,h,p=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),s=s||h.overlay,n=n||!h.overlay,p+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=s&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var s=this._getLayer(m(n.target)),l=s.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,s)},_createRadioElement:function(n,s){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(n){var s=document.createElement("label"),l=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+m(this),l),this._layerControlInputs.push(h),h.layerId=m(n.layer),nt(h,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var y=document.createElement("span");s.appendChild(y),y.appendChild(h),y.appendChild(p);var I=n.overlay?this._overlaysList:this._baseLayersList;return I.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,s,l,h=[],p=[];this._handlingClick=!0;for(var y=n.length-1;y>=0;y--)s=n[y],l=this._getLayer(s.layerId).layer,s.checked?h.push(l):s.checked||p.push(l);for(y=0;y<p.length;y++)this._map.hasLayer(p[y])&&this._map.removeLayer(p[y]);for(y=0;y<h.length;y++)this._map.hasLayer(h[y])||this._map.addLayer(h[y]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,s,l,h=this._map.getZoom(),p=n.length-1;p>=0;p--)s=n[p],l=this._getLayer(s.layerId).layer,s.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,nt(n,"click",Nt),this.expand();var s=this;setTimeout(function(){Et(n,"click",Nt),s._preventClick=!1})}}),Io=function(n,s,l){return new Eo(n,s,l)},dn=he.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var s="leaflet-control-zoom",l=pt("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,s,l,h,p){var y=pt("a",l,h);return y.innerHTML=n,y.href="#",y.title=s,y.setAttribute("role","button"),y.setAttribute("aria-label",s),yi(y),nt(y,"click",He),nt(y,"click",p,this),nt(y,"click",this._refocusOnMap,this),y},_updateDisabled:function(){var n=this._map,s="leaflet-disabled";At(this._zoomInButton,s),At(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(G(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(G(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});ct.mergeOptions({zoomControl:!0}),ct.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new dn,this.addControl(this.zoomControl))});var Ao=function(n){return new dn(n)},rs=he.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var s="leaflet-control-scale",l=pt("div",s),h=this.options;return this._addScales(h,s+"-line",l),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,s,l){n.metric&&(this._mScale=pt("div",s,l)),n.imperial&&(this._iScale=pt("div",s,l))},_update:function(){var n=this._map,s=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,s]),n.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var s=this._getRoundNum(n),l=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,l,s/n)},_updateImperial:function(n){var s=n*3.2808399,l,h,p;s>5280?(l=s/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(p=this._getRoundNum(s),this._updateScale(this._iScale,p+" ft",p/s))},_updateScale:function(n,s,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=s},_getRoundNum:function(n){var s=Math.pow(10,(Math.floor(n)+"").length-1),l=n/s;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,s*l}}),ss=function(n){return new rs(n)},os='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',er=he.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Z.inlineSvg?os+" ":"")+"Leaflet</a>"},initialize:function(n){B(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=pt("div","leaflet-control-attribution"),yi(this._container);for(var s in n._layers)n._layers[s].getAttribution&&this.addAttribution(n._layers[s].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var s in this._attributions)this._attributions[s]&&n.push(s);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});ct.mergeOptions({attributionControl:!0}),ct.addInitHook(function(){this.options.attributionControl&&new er().addTo(this)});var nr=function(n){return new er(n)};he.Layers=Eo,he.Zoom=dn,he.Scale=rs,he.Attribution=er,We.layers=Io,We.zoom=Ao,We.scale=ss,We.attribution=nr;var _e=Ct.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});_e.addTo=function(n,s){return n.addHandler(s,this),this};var bo={Events:se},$e=Z.touch?"touchstart mousedown":"mousedown",xe=ii.extend({options:{clickTolerance:3},initialize:function(n,s,l,h){B(this,h),this._element=n,this._dragStartTarget=s||n,this._preventOutline=l},enable:function(){this._enabled||(nt(this._dragStartTarget,$e,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(xe._dragging===this&&this.finishDrag(!0),Et(this._dragStartTarget,$e,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!mi(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){xe._dragging===this&&this.finishDrag();return}if(!(xe._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(xe._dragging=this,this._preventOutline&&Yr(this._element),Qi(),Le(),!this._moving)){this.fire("down");var s=n.touches?n.touches[0]:n,l=To(this._element);this._startPoint=new tt(s.clientX,s.clientY),this._startPos=un(this._element),this._parentScale=Ee(l);var h=n.type==="mousedown";nt(document,h?"mousemove":"touchmove",this._onMove,this),nt(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var s=n.touches&&n.touches.length===1?n.touches[0]:n,l=new tt(s.clientX,s.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Nt(n),this._moved||(this.fire("dragstart"),this._moved=!0,G(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),G(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),xt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){At(document.body,"leaflet-dragging"),this._lastTarget&&(At(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Et(document,"mousemove touchmove",this._onMove,this),Et(document,"mouseup touchend touchcancel",this._onUp,this),Ji(),me();var s=this._moved&&this._moving;this._moving=!1,xe._dragging=!1,s&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function as(n,s,l){var h,p=[1,4,2,8],y,I,D,N,U,W,J,lt;for(y=0,W=n.length;y<W;y++)n[y]._code=O(n[y],s);for(D=0;D<4;D++){for(J=p[D],h=[],y=0,W=n.length,I=W-1;y<W;I=y++)N=n[y],U=n[I],N._code&J?U._code&J||(lt=x(U,N,J,s,l),lt._code=O(lt,s),h.push(lt)):(U._code&J&&(lt=x(U,N,J,s,l),lt._code=O(lt,s),h.push(lt)),h.push(N));n=h}return n}function cs(n,s){var l,h,p,y,I,D,N,U,W;if(!n||n.length===0)throw new Error("latlngs not passed");yt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var J=at([0,0]),lt=Pt(n),ce=lt.getNorthWest().distanceTo(lt.getSouthWest())*lt.getNorthEast().distanceTo(lt.getNorthWest());ce<1700&&(J=ir(n));var $t=n.length,be=[];for(l=0;l<$t;l++){var de=at(n[l]);be.push(s.project(at([de.lat-J.lat,de.lng-J.lng])))}for(D=N=U=0,l=0,h=$t-1;l<$t;h=l++)p=be[l],y=be[h],I=p.y*y.x-y.y*p.x,N+=(p.x+y.x)*I,U+=(p.y+y.y)*I,D+=I*3;D===0?W=be[0]:W=[N/D,U/D];var dr=s.unproject(et(W));return at([dr.lat+J.lat,dr.lng+J.lng])}function ir(n){for(var s=0,l=0,h=0,p=0;p<n.length;p++){var y=at(n[p]);s+=y.lat,l+=y.lng,h++}return at([s/h,l/h])}var rr={__proto__:null,clipPolygon:as,polygonCenter:cs,centroid:ir};function Xt(n,s){if(!s||!n.length)return n.slice();var l=s*s;return n=d(n,l),n=Mn(n,l),n}function ls(n,s,l){return Math.sqrt(it(n,s,l,!0))}function Po(n,s,l){return it(n,s,l)}function Mn(n,s){var l=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,p=new h(l);p[0]=p[l-1]=1,c(n,p,s,0,l-1);var y,I=[];for(y=0;y<l;y++)p[y]&&I.push(n[y]);return I}function c(n,s,l,h,p){var y=0,I,D,N;for(D=h+1;D<=p-1;D++)N=it(n[D],n[h],n[p],!0),N>y&&(I=D,y=N);y>l&&(s[I]=1,c(n,s,l,h,I),c(n,s,l,I,p))}function d(n,s){for(var l=[n[0]],h=1,p=0,y=n.length;h<y;h++)q(n[h],n[p])>s&&(l.push(n[h]),p=h);return p<y-1&&l.push(n[y-1]),l}var _;function w(n,s,l,h,p){var y=h?_:O(n,l),I=O(s,l),D,N,U;for(_=I;;){if(!(y|I))return[n,s];if(y&I)return!1;D=y||I,N=x(n,s,D,l,p),U=O(N,l),D===y?(n=N,y=U):(s=N,I=U)}}function x(n,s,l,h,p){var y=s.x-n.x,I=s.y-n.y,D=h.min,N=h.max,U,W;return l&8?(U=n.x+y*(N.y-n.y)/I,W=N.y):l&4?(U=n.x+y*(D.y-n.y)/I,W=D.y):l&2?(U=N.x,W=n.y+I*(N.x-n.x)/y):l&1&&(U=D.x,W=n.y+I*(D.x-n.x)/y),new tt(U,W,p)}function O(n,s){var l=0;return n.x<s.min.x?l|=1:n.x>s.max.x&&(l|=2),n.y<s.min.y?l|=4:n.y>s.max.y&&(l|=8),l}function q(n,s){var l=s.x-n.x,h=s.y-n.y;return l*l+h*h}function it(n,s,l,h){var p=s.x,y=s.y,I=l.x-p,D=l.y-y,N=I*I+D*D,U;return N>0&&(U=((n.x-p)*I+(n.y-y)*D)/N,U>1?(p=l.x,y=l.y):U>0&&(p+=I*U,y+=D*U)),I=n.x-p,D=n.y-y,h?I*I+D*D:new tt(p,y)}function yt(n){return!ut(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function wt(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),yt(n)}function Dt(n,s){var l,h,p,y,I,D,N,U;if(!n||n.length===0)throw new Error("latlngs not passed");yt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var W=at([0,0]),J=Pt(n),lt=J.getNorthWest().distanceTo(J.getSouthWest())*J.getNorthEast().distanceTo(J.getNorthWest());lt<1700&&(W=ir(n));var ce=n.length,$t=[];for(l=0;l<ce;l++){var be=at(n[l]);$t.push(s.project(at([be.lat-W.lat,be.lng-W.lng])))}for(l=0,h=0;l<ce-1;l++)h+=$t[l].distanceTo($t[l+1])/2;if(h===0)U=$t[0];else for(l=0,y=0;l<ce-1;l++)if(I=$t[l],D=$t[l+1],p=I.distanceTo(D),y+=p,y>h){N=(y-h)/p,U=[D.x-N*(D.x-I.x),D.y-N*(D.y-I.y)];break}var de=s.unproject(et(U));return at([de.lat+W.lat,de.lng+W.lng])}var Ie={__proto__:null,simplify:Xt,pointToSegmentDistance:ls,closestPointOnSegment:Po,clipSegment:w,_getEdgeIntersection:x,_getBitCode:O,_sqClosestPointOnSegment:it,isFlat:yt,_flat:wt,polylineCenter:Dt},De={project:function(n){return new tt(n.lng,n.lat)},unproject:function(n){return new _t(n.y,n.x)},bounds:new It([-180,-90],[180,90])},Ae={R:6378137,R_MINOR:6356752314245179e-9,bounds:new It([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var s=Math.PI/180,l=this.R,h=n.lat*s,p=this.R_MINOR/l,y=Math.sqrt(1-p*p),I=y*Math.sin(h),D=Math.tan(Math.PI/4-h/2)/Math.pow((1-I)/(1+I),y/2);return h=-l*Math.log(Math.max(D,1e-10)),new tt(n.lng*s*l,h)},unproject:function(n){for(var s=180/Math.PI,l=this.R,h=this.R_MINOR/l,p=Math.sqrt(1-h*h),y=Math.exp(-n.y/l),I=Math.PI/2-2*Math.atan(y),D=0,N=.1,U;D<15&&Math.abs(N)>1e-7;D++)U=p*Math.sin(I),U=Math.pow((1-U)/(1+U),p/2),N=Math.PI/2-2*Math.atan(y*U)-I,I+=N;return new _t(I*s,n.x*s/l)}},Ge={__proto__:null,LonLat:De,Mercator:Ae,SphericalMercator:Br},sr=o({},ye,{code:"EPSG:3395",projection:Ae,transformation:function(){var n=.5/(Math.PI*Ae.R);return Sn(n,.5,-n,.5)}()}),or=o({},ye,{code:"EPSG:4326",projection:De,transformation:Sn(1/180,1,-1/180,.5)}),Cp=o({},pe,{projection:De,transformation:Sn(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,s){var l=s.lng-n.lng,h=s.lat-n.lat;return Math.sqrt(l*l+h*h)},infinite:!0});pe.Earth=ye,pe.EPSG3395=sr,pe.EPSG3857=si,pe.EPSG900913=io,pe.EPSG4326=or,pe.Simple=Cp;var Oe=ii.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[m(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[m(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var s=n.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var l=this.getEvents();s.on(l,this),this.once("remove",function(){s.off(l,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});ct.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var s=m(n);return this._layers[s]?this:(this._layers[s]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var s=m(n);return this._layers[s]?(this._loaded&&n.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return m(n)in this._layers},eachLayer:function(n,s){for(var l in this._layers)n.call(s,this._layers[l]);return this},_addLayers:function(n){n=n?ut(n)?n:[n]:[];for(var s=0,l=n.length;s<l;s++)this.addLayer(n[s])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[m(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var s=m(n);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,s=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var p=this._zoomBoundLayers[h].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),s=p.maxZoom===void 0?s:Math.max(s,p.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ar=Oe.extend({initialize:function(n,s){B(this,s),this._layers={};var l,h;if(n)for(l=0,h=n.length;l<h;l++)this.addLayer(n[l])},addLayer:function(n){var s=this.getLayerId(n);return this._layers[s]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var s=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(n){var s=typeof n=="number"?n:this.getLayerId(n);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var s=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[n]&&h[n].apply(h,s);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,s){for(var l in this._layers)n.call(s,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return m(n)}}),Rp=function(n,s){return new ar(n,s)},fn=ar.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),ar.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),ar.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new Kt;for(var s in this._layers){var l=this._layers[s];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),kp=function(n,s){return new fn(n,s)},cr=Ct.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){B(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,s){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,s){var l=this.options,h=l[s+"Size"];typeof h=="number"&&(h=[h,h]);var p=et(h),y=et(s==="shadow"&&l.shadowAnchor||l.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+s+" "+(l.className||""),y&&(n.style.marginLeft=-y.x+"px",n.style.marginTop=-y.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,s){return s=s||document.createElement("img"),s.src=n,s},_getIconUrl:function(n){return Z.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Lp(n){return new cr(n)}var us=cr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof us.imagePath!="string"&&(us.imagePath=this._detectIconPath()),(this.options.imagePath||us.imagePath)+cr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var s=function(l,h,p){var y=h.exec(l);return y&&y[p]};return n=s(n,/^url\((['"])?(.+)\1\)$/,2),n&&s(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=pt("div","leaflet-default-icon-path",document.body),s=Dn(n,"background-image")||Dn(n,"backgroundImage");if(document.body.removeChild(n),s=this._stripUrl(s),s)return s;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Bl=_e.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new xe(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),G(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&At(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var s=this._marker,l=s._map,h=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,y=un(s._icon),I=l.getPixelBounds(),D=l.getPixelOrigin(),N=Zt(I.min._subtract(D).add(p),I.max._subtract(D).subtract(p));if(!N.contains(y)){var U=et((Math.max(N.max.x,y.x)-N.max.x)/(I.max.x-N.max.x)-(Math.min(N.min.x,y.x)-N.min.x)/(I.min.x-N.min.x),(Math.max(N.max.y,y.y)-N.max.y)/(I.max.y-N.max.y)-(Math.min(N.min.y,y.y)-N.min.y)/(I.min.y-N.min.y)).multiplyBy(h);l.panBy(U,{animate:!1}),this._draggable._newPos._add(U),this._draggable._startPos._add(U),xt(s._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=S(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(k(this._panRequest),this._panRequest=S(this._adjustPan.bind(this,n)))},_onDrag:function(n){var s=this._marker,l=s._shadow,h=un(s._icon),p=s._map.layerPointToLatLng(h);l&&xt(l,h),s._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,s.fire("move",n).fire("drag",n)},_onDragEnd:function(n){k(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),So=Oe.extend({options:{icon:new us,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,s){B(this,s),this._latlng=at(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var s=this._latlng;return this._latlng=at(n),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),G(l,s),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&nt(l,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),y=!1;p!==this._shadow&&(this._removeShadow(),y=!0),p&&(G(p,s),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&y&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Et(this._icon,"focus",this._panOnFocus,this),gt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&gt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&xt(this._icon,n),this._shadow&&xt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(G(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Bl)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Bl(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&ue(this._icon,n),this._shadow&&ue(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var s=this.options.icon.options,l=s.iconSize?et(s.iconSize):et(0,0),h=s.iconAnchor?et(s.iconAnchor):et(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function xp(n,s){return new So(n,s)}var Vn=Oe.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return B(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Co=Vn.extend({options:{fill:!0,radius:10},initialize:function(n,s){B(this,s),this._latlng=at(n),this._radius=this.options.radius},setLatLng:function(n){var s=this._latlng;return this._latlng=at(n),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var s=n&&n.radius||this._radius;return Vn.prototype.setStyle.call(this,n),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,s=this._radiusY||n,l=this._clickTolerance(),h=[n+l,s+l];this._pxBounds=new It(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Dp(n,s){return new Co(n,s)}var Ga=Co.extend({initialize:function(n,s,l){if(typeof s=="number"&&(s=o({},l,{radius:s})),B(this,s),this._latlng=at(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new Kt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Vn.prototype.setStyle,_project:function(){var n=this._latlng.lng,s=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===ye.distance){var p=Math.PI/180,y=this._mRadius/ye.R/p,I=l.project([s+y,n]),D=l.project([s-y,n]),N=I.add(D).divideBy(2),U=l.unproject(N).lat,W=Math.acos((Math.cos(y*p)-Math.sin(s*p)*Math.sin(U*p))/(Math.cos(s*p)*Math.cos(U*p)))/p;(isNaN(W)||W===0)&&(W=y/Math.cos(Math.PI/180*s)),this._point=N.subtract(l.getPixelOrigin()),this._radius=isNaN(W)?0:N.x-l.project([U,n-W]).x,this._radiusY=N.y-I.y}else{var J=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(J).x}this._updateBounds()}});function Op(n,s,l){return new Ga(n,s,l)}var pn=Vn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,s){B(this,s),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var s=1/0,l=null,h=it,p,y,I=0,D=this._parts.length;I<D;I++)for(var N=this._parts[I],U=1,W=N.length;U<W;U++){p=N[U-1],y=N[U];var J=h(n,p,y,!0);J<s&&(s=J,l=h(n,p,y))}return l&&(l.distance=Math.sqrt(s)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Dt(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,s){return s=s||this._defaultShape(),n=at(n),s.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new Kt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return yt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var s=[],l=yt(n),h=0,p=n.length;h<p;h++)l?(s[h]=at(n[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(n[h]);return s},_project:function(){var n=new It;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),s=new tt(n,n);this._rawPxBounds&&(this._pxBounds=new It([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(n,s,l){var h=n[0]instanceof _t,p=n.length,y,I;if(h){for(I=[],y=0;y<p;y++)I[y]=this._map.latLngToLayerPoint(n[y]),l.extend(I[y]);s.push(I)}else for(y=0;y<p;y++)this._projectLatlngs(n[y],s,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,l,h,p,y,I,D,N;for(l=0,p=0,y=this._rings.length;l<y;l++)for(N=this._rings[l],h=0,I=N.length;h<I-1;h++)D=w(N[h],N[h+1],n,h,!0),D&&(s[p]=s[p]||[],s[p].push(D[0]),(D[1]!==N[h+1]||h===I-2)&&(s[p].push(D[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,s=this.options.smoothFactor,l=0,h=n.length;l<h;l++)n[l]=Xt(n[l],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,s){var l,h,p,y,I,D,N=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,y=this._parts.length;l<y;l++)for(D=this._parts[l],h=0,I=D.length,p=I-1;h<I;p=h++)if(!(!s&&h===0)&&ls(n,D[p],D[h])<=N)return!0;return!1}});function Np(n,s){return new pn(n,s)}pn._flat=wt;var lr=pn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return cs(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var s=pn.prototype._convertLatLngs.call(this,n),l=s.length;return l>=2&&s[0]instanceof _t&&s[0].equals(s[l-1])&&s.pop(),s},_setLatLngs:function(n){pn.prototype._setLatLngs.call(this,n),yt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return yt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,s=this.options.weight,l=new tt(s,s);if(n=new It(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,p=this._rings.length,y;h<p;h++)y=as(this._rings[h],n,!0),y.length&&this._parts.push(y)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var s=!1,l,h,p,y,I,D,N,U;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(y=0,N=this._parts.length;y<N;y++)for(l=this._parts[y],I=0,U=l.length,D=U-1;I<U;D=I++)h=l[I],p=l[D],h.y>n.y!=p.y>n.y&&n.x<(p.x-h.x)*(n.y-h.y)/(p.y-h.y)+h.x&&(s=!s);return s||pn.prototype._containsPoint.call(this,n,!0)}});function Mp(n,s){return new lr(n,s)}var mn=fn.extend({initialize:function(n,s){B(this,s),this._layers={},n&&this.addData(n)},addData:function(n){var s=ut(n)?n:n.features,l,h,p;if(s){for(l=0,h=s.length;l<h;l++)p=s[l],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var y=this.options;if(y.filter&&!y.filter(n))return this;var I=Ro(n,y);return I?(I.feature=xo(n),I.defaultOptions=I.options,this.resetStyle(I),y.onEachFeature&&y.onEachFeature(n,I),this.addLayer(I)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=o({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(s){this._setLayerStyle(s,n)},this)},_setLayerStyle:function(n,s){n.setStyle&&(typeof s=="function"&&(s=s(n.feature)),n.setStyle(s))}});function Ro(n,s){var l=n.type==="Feature"?n.geometry:n,h=l?l.coordinates:null,p=[],y=s&&s.pointToLayer,I=s&&s.coordsToLatLng||Za,D,N,U,W;if(!h&&!l)return null;switch(l.type){case"Point":return D=I(h),zl(y,n,D,s);case"MultiPoint":for(U=0,W=h.length;U<W;U++)D=I(h[U]),p.push(zl(y,n,D,s));return new fn(p);case"LineString":case"MultiLineString":return N=ko(h,l.type==="LineString"?0:1,I),new pn(N,s);case"Polygon":case"MultiPolygon":return N=ko(h,l.type==="Polygon"?1:2,I),new lr(N,s);case"GeometryCollection":for(U=0,W=l.geometries.length;U<W;U++){var J=Ro({geometry:l.geometries[U],type:"Feature",properties:n.properties},s);J&&p.push(J)}return new fn(p);case"FeatureCollection":for(U=0,W=l.features.length;U<W;U++){var lt=Ro(l.features[U],s);lt&&p.push(lt)}return new fn(p);default:throw new Error("Invalid GeoJSON object.")}}function zl(n,s,l,h){return n?n(s,l):new So(l,h&&h.markersInheritOptions&&h)}function Za(n){return new _t(n[1],n[0],n[2])}function ko(n,s,l){for(var h=[],p=0,y=n.length,I;p<y;p++)I=s?ko(n[p],s-1,l):(l||Za)(n[p]),h.push(I);return h}function Ka(n,s){return n=at(n),n.alt!==void 0?[P(n.lng,s),P(n.lat,s),P(n.alt,s)]:[P(n.lng,s),P(n.lat,s)]}function Lo(n,s,l,h){for(var p=[],y=0,I=n.length;y<I;y++)p.push(s?Lo(n[y],yt(n[y])?0:s-1,l,h):Ka(n[y],h));return!s&&l&&p.length>0&&p.push(p[0].slice()),p}function ur(n,s){return n.feature?o({},n.feature,{geometry:s}):xo(s)}function xo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Qa={toGeoJSON:function(n){return ur(this,{type:"Point",coordinates:Ka(this.getLatLng(),n)})}};So.include(Qa),Ga.include(Qa),Co.include(Qa),pn.include({toGeoJSON:function(n){var s=!yt(this._latlngs),l=Lo(this._latlngs,s?1:0,!1,n);return ur(this,{type:(s?"Multi":"")+"LineString",coordinates:l})}}),lr.include({toGeoJSON:function(n){var s=!yt(this._latlngs),l=s&&!yt(this._latlngs[0]),h=Lo(this._latlngs,l?2:s?1:0,!0,n);return s||(h=[h]),ur(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),ar.include({toMultiPoint:function(n){var s=[];return this.eachLayer(function(l){s.push(l.toGeoJSON(n).geometry.coordinates)}),ur(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(n){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(n);var l=s==="GeometryCollection",h=[];return this.eachLayer(function(p){if(p.toGeoJSON){var y=p.toGeoJSON(n);if(l)h.push(y.geometry);else{var I=xo(y);I.type==="FeatureCollection"?h.push.apply(h,I.features):h.push(I)}}}),l?ur(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function ql(n,s){return new mn(n,s)}var Vp=ql,Do=Oe.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,s,l){this._url=n,this._bounds=Pt(s),B(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(G(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){gt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&we(this._image),this},bringToBack:function(){return this._map&&Te(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Pt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",s=this._image=n?this._url:pt("img");if(G(s,"leaflet-image-layer"),this._zoomAnimated&&G(s,"leaflet-zoom-animated"),this.options.className&&G(s,this.options.className),s.onselectstart=T,s.onmousemove=T,s.onload=u(this.fire,this,"load"),s.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(n){var s=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;ln(this._image,l,s)},_reset:function(){var n=this._image,s=new It(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=s.getSize();xt(n,s.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){ue(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Fp=function(n,s,l){return new Do(n,s,l)},Hl=Do.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",s=this._image=n?this._url:pt("video");if(G(s,"leaflet-image-layer"),this._zoomAnimated&&G(s,"leaflet-zoom-animated"),this.options.className&&G(s,this.options.className),s.onselectstart=T,s.onmousemove=T,s.onloadeddata=u(this.fire,this,"load"),n){for(var l=s.getElementsByTagName("source"),h=[],p=0;p<l.length;p++)h.push(l[p].src);this._url=l.length>0?h:[s.src];return}ut(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var y=0;y<this._url.length;y++){var I=pt("source");I.src=this._url[y],s.appendChild(I)}}});function Up(n,s,l){return new Hl(n,s,l)}var jl=Do.extend({_initImage:function(){var n=this._image=this._url;G(n,"leaflet-image-layer"),this._zoomAnimated&&G(n,"leaflet-zoom-animated"),this.options.className&&G(n,this.options.className),n.onselectstart=T,n.onmousemove=T}});function Bp(n,s,l){return new jl(n,s,l)}var Ze=Oe.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,s){n&&(n instanceof _t||ut(n))?(this._latlng=at(n),B(this,s)):(B(this,n),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&ue(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&ue(this._container,1),this.bringToFront(),this.options.interactive&&(G(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(ue(this._container,0),this._removeTimeout=setTimeout(u(gt,void 0,this._container),200)):gt(this._container),this.options.interactive&&(At(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=at(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&we(this._container),this},bringToBack:function(){return this._map&&Te(this._container),this},_prepareOpen:function(n){var s=this._source;if(!s._map)return!1;if(s instanceof fn){s=null;var l=this._source._layers;for(var h in l)if(l[h]._map){s=l[h];break}if(!s)return!1;this._source=s}if(!n)if(s.getCenter)n=s.getCenter();else if(s.getLatLng)n=s.getLatLng();else if(s.getBounds)n=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")n.innerHTML=s;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),s=et(this.options.offset),l=this._getAnchor();this._zoomAnimated?xt(this._container,n.add(l)):s=s.add(n).add(l);var h=this._containerBottom=-s.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});ct.include({_initOverlay:function(n,s,l,h){var p=s;return p instanceof n||(p=new n(h).setContent(s)),l&&p.setLatLng(l),p}}),Oe.include({_initOverlay:function(n,s,l,h){var p=l;return p instanceof n?(B(p,h),p._source=this):(p=s&&!h?s:new n(h,this),p.setContent(l)),p}});var Oo=Ze.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Ze.prototype.openOn.call(this,n)},onAdd:function(n){Ze.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Vn||this._source.on("preclick",vt))},onRemove:function(n){Ze.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Vn||this._source.off("preclick",vt))},getEvents:function(){var n=Ze.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",s=this._container=pt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=pt("div",n+"-content-wrapper",s);if(this._contentNode=pt("div",n+"-content",l),yi(s),Xr(this._contentNode),nt(s,"contextmenu",vt),this._tipContainer=pt("div",n+"-tip-container",s),this._tip=pt("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=pt("a",n+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',nt(h,"click",function(p){Nt(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,s=n.style;s.width="",s.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),s.width=l+1+"px",s.whiteSpace="",s.height="";var h=n.offsetHeight,p=this.options.maxHeight,y="leaflet-popup-scrolled";p&&h>p?(s.height=p+"px",G(n,y)):At(n,y),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();xt(this._container,s.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,s=parseInt(Dn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+s,h=this._containerWidth,p=new tt(this._containerLeft,-l-this._containerBottom);p._add(un(this._container));var y=n.layerPointToContainerPoint(p),I=et(this.options.autoPanPadding),D=et(this.options.autoPanPaddingTopLeft||I),N=et(this.options.autoPanPaddingBottomRight||I),U=n.getSize(),W=0,J=0;y.x+h+N.x>U.x&&(W=y.x+h-U.x+N.x),y.x-W-D.x<0&&(W=y.x-D.x),y.y+l+N.y>U.y&&(J=y.y+l-U.y+N.y),y.y-J-D.y<0&&(J=y.y-D.y),(W||J)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([W,J]))}},_getAnchor:function(){return et(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),zp=function(n,s){return new Oo(n,s)};ct.mergeOptions({closePopupOnClick:!0}),ct.include({openPopup:function(n,s,l){return this._initOverlay(Oo,n,s,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Oe.include({bindPopup:function(n,s){return this._popup=this._initOverlay(Oo,this._popup,n,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof fn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){He(n);var s=n.layer||n.target;if(this._popup._source===s&&!(s instanceof Vn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=s,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var No=Ze.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Ze.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Ze.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Ze.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",s=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=pt("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+m(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var s,l,h=this._map,p=this._container,y=h.latLngToContainerPoint(h.getCenter()),I=h.layerPointToContainerPoint(n),D=this.options.direction,N=p.offsetWidth,U=p.offsetHeight,W=et(this.options.offset),J=this._getAnchor();D==="top"?(s=N/2,l=U):D==="bottom"?(s=N/2,l=0):D==="center"?(s=N/2,l=U/2):D==="right"?(s=0,l=U/2):D==="left"?(s=N,l=U/2):I.x<y.x?(D="right",s=0,l=U/2):(D="left",s=N+(W.x+J.x)*2,l=U/2),n=n.subtract(et(s,l,!0)).add(W).add(J),At(p,"leaflet-tooltip-right"),At(p,"leaflet-tooltip-left"),At(p,"leaflet-tooltip-top"),At(p,"leaflet-tooltip-bottom"),G(p,"leaflet-tooltip-"+D),xt(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&ue(this._container,n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(s)},_getAnchor:function(){return et(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),qp=function(n,s){return new No(n,s)};ct.include({openTooltip:function(n,s,l){return this._initOverlay(No,n,s,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Oe.include({bindTooltip:function(n,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(No,this._tooltip,n,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var s=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[s](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof fn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&(nt(s,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),nt(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var s=n.latlng,l,h;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(l),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var Wl=cr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var s=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(oe(s),s.appendChild(l.html)):s.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=et(l.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function Hp(n){return new Wl(n)}cr.Default=us;var hs=Oe.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Z.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){B(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),gt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(we(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Te(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof tt?n:new tt(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var s=this.getPane().children,l=-n(-1/0,1/0),h=0,p=s.length,y;h<p;h++)y=s[h].style.zIndex,s[h]!==this._container&&y&&(l=n(l,+y));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Z.ielt9){ue(this._container,this.options.opacity);var n=+new Date,s=!1,l=!1;for(var h in this._tiles){var p=this._tiles[h];if(!(!p.current||!p.loaded)){var y=Math.min(1,(n-p.loaded)/200);ue(p.el,y),y<1?s=!0:(p.active?l=!0:this._onOpaqueTile(p),p.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),s&&(k(this._fadeFrame),this._fadeFrame=S(this._updateOpacity,this))}},_onOpaqueTile:T,_initContainer:function(){this._container||(this._container=pt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,s=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=s-Math.abs(n-l),this._onUpdateLevel(l)):(gt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[n],p=this._map;return h||(h=this._levels[n]={},h.el=pt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,p.getCenter(),p.getZoom()),T(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:T,_onRemoveLevel:T,_onCreateLevel:T,_pruneTiles:function(){if(this._map){var n,s,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)s=this._tiles[n],s.retain=s.current;for(n in this._tiles)if(s=this._tiles[n],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var s in this._tiles)this._tiles[s].coords.z===n&&this._removeTile(s)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)gt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,s,l,h){var p=Math.floor(n/2),y=Math.floor(s/2),I=l-1,D=new tt(+p,+y);D.z=+I;var N=this._tileCoordsToKey(D),U=this._tiles[N];return U&&U.active?(U.retain=!0,!0):(U&&U.loaded&&(U.retain=!0),I>h?this._retainParent(p,y,I,h):!1)},_retainChildren:function(n,s,l,h){for(var p=2*n;p<2*n+2;p++)for(var y=2*s;y<2*s+2;y++){var I=new tt(p,y);I.z=l+1;var D=this._tileCoordsToKey(I),N=this._tiles[D];if(N&&N.active){N.retain=!0;continue}else N&&N.loaded&&(N.retain=!0);l+1<h&&this._retainChildren(p,y,l+1,h)}},_resetView:function(n){var s=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var s=this.options;return s.minNativeZoom!==void 0&&n<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<n?s.maxNativeZoom:n},_setView:function(n,s,l,h){var p=Math.round(s);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var y=this.options.updateWhenZooming&&p!==this._tileZoom;(!h||y)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,s)},_setZoomTransforms:function(n,s){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,s)},_setZoomTransform:function(n,s,l){var h=this._map.getZoomScale(l,n.zoom),p=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,l)).round();Z.any3d?ln(n.el,p,h):xt(n.el,p)},_resetGrid:function(){var n=this._map,s=n.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,s.wrapLng[0]],h).x/l.x),Math.ceil(n.project([0,s.wrapLng[1]],h).x/l.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([s.wrapLat[0],0],h).y/l.x),Math.ceil(n.project([s.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var s=this._map,l=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(l,this._tileZoom),p=s.project(n,this._tileZoom).floor(),y=s.getSize().divideBy(h*2);return new It(p.subtract(y),p.add(y))},_update:function(n){var s=this._map;if(s){var l=this._clampZoom(s.getZoom());if(n===void 0&&(n=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(h),y=p.getCenter(),I=[],D=this.options.keepBuffer,N=new It(p.getBottomLeft().subtract([D,-D]),p.getTopRight().add([D,-D]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var U in this._tiles){var W=this._tiles[U].coords;(W.z!==this._tileZoom||!N.contains(new tt(W.x,W.y)))&&(this._tiles[U].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var J=p.min.y;J<=p.max.y;J++)for(var lt=p.min.x;lt<=p.max.x;lt++){var ce=new tt(lt,J);if(ce.z=this._tileZoom,!!this._isValidTile(ce)){var $t=this._tiles[this._tileCoordsToKey(ce)];$t?$t.current=!0:I.push(ce)}}if(I.sort(function(de,dr){return de.distanceTo(y)-dr.distanceTo(y)}),I.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var be=document.createDocumentFragment();for(lt=0;lt<I.length;lt++)this._addTile(I[lt],be);this._level.el.appendChild(be)}}}},_isValidTile:function(n){var s=this._map.options.crs;if(!s.infinite){var l=this._globalTileRange;if(!s.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!s.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return Pt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var s=this._map,l=this.getTileSize(),h=n.scaleBy(l),p=h.add(l),y=s.unproject(h,n.z),I=s.unproject(p,n.z);return[y,I]},_tileCoordsToBounds:function(n){var s=this._tileCoordsToNwSe(n),l=new Kt(s[0],s[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var s=n.split(":"),l=new tt(+s[0],+s[1]);return l.z=+s[2],l},_removeTile:function(n){var s=this._tiles[n];s&&(gt(s.el),delete this._tiles[n],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){G(n,"leaflet-tile");var s=this.getTileSize();n.style.width=s.x+"px",n.style.height=s.y+"px",n.onselectstart=T,n.onmousemove=T,Z.ielt9&&this.options.opacity<1&&ue(n,this.options.opacity)},_addTile:function(n,s){var l=this._getTilePos(n),h=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&S(u(this._tileReady,this,n,null,p)),xt(p,l),this._tiles[h]={el:p,coords:n,current:!0},s.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,s,l){s&&this.fire("tileerror",{error:s,tile:l,coords:n});var h=this._tileCoordsToKey(n);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(ue(l.el,0),k(this._fadeFrame),this._fadeFrame=S(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),s||(G(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Z.ielt9||!this._map._fadeAnimated?S(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var s=new tt(this._wrapX?v(n.x,this._wrapX):n.x,this._wrapY?v(n.y,this._wrapY):n.y);return s.z=n.z,s},_pxBoundsToTileRange:function(n){var s=this.getTileSize();return new It(n.min.unscaleBy(s).floor(),n.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function jp(n){return new hs(n)}var hr=hs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,s){this._url=n,s=B(this,s),s.detectRetina&&Z.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,s){return this._url===n&&s===void 0&&(s=!0),this._url=n,s||this.redraw(),this},createTile:function(n,s){var l=document.createElement("img");return nt(l,"load",u(this._tileOnLoad,this,s,l)),nt(l,"error",u(this._tileOnError,this,s,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var s={r:Z.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(s.y=l),s["-y"]=l}return ot(this._url,o(s,this.options))},_tileOnLoad:function(n,s){Z.ielt9?setTimeout(u(n,this,null,s),0):n(null,s)},_tileOnError:function(n,s,l){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),n(l,s)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,s=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(n=s-n),n+h},_getSubdomain:function(n){var s=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var n,s;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(s=this._tiles[n].el,s.onload=T,s.onerror=T,!s.complete)){s.src=kt;var l=this._tiles[n].coords;gt(s),delete this._tiles[n],this.fire("tileabort",{tile:s,coords:l})}},_removeTile:function(n){var s=this._tiles[n];if(s)return s.el.setAttribute("src",kt),hs.prototype._removeTile.call(this,n)},_tileReady:function(n,s,l){if(!(!this._map||l&&l.getAttribute("src")===kt))return hs.prototype._tileReady.call(this,n,s,l)}});function $l(n,s){return new hr(n,s)}var Gl=hr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,s){this._url=n;var l=o({},this.defaultWmsParams);for(var h in s)h in this.options||(l[h]=s[h]);s=B(this,s);var p=s.detectRetina&&Z.retina?2:1,y=this.getTileSize();l.width=y.x*p,l.height=y.y*p,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,hr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var s=this._tileCoordsToNwSe(n),l=this._crs,h=Zt(l.project(s[0]),l.project(s[1])),p=h.min,y=h.max,I=(this._wmsVersion>=1.3&&this._crs===or?[p.y,p.x,y.y,y.x]:[p.x,p.y,y.x,y.y]).join(","),D=hr.prototype.getTileUrl.call(this,n);return D+H(this.wmsParams,D,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+I},setParams:function(n,s){return o(this.wmsParams,n),s||this.redraw(),this}});function Wp(n,s){return new Gl(n,s)}hr.WMS=Gl,$l.wms=Wp;var _n=Oe.extend({options:{padding:.1},initialize:function(n){B(this,n),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),G(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,s){var l=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,s),y=h.multiplyBy(-l).add(p).subtract(this._map._getNewPixelOrigin(n,s));Z.any3d?ln(this._container,y,l):xt(this._container,y)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,s=this._map.getSize(),l=this._map.containerPointToLayerPoint(s.multiplyBy(-n)).round();this._bounds=new It(l,l.add(s.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Zl=_n.extend({options:{tolerance:0},getEvents:function(){var n=_n.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){_n.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");nt(n,"mousemove",this._onMouseMove,this),nt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),nt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){k(this._redrawRequest),delete this._ctx,gt(this._container),Et(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var s in this._layers)n=this._layers[s],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){_n.prototype._update.call(this);var n=this._bounds,s=this._container,l=n.getSize(),h=Z.retina?2:1;xt(s,n.min),s.width=h*l.x,s.height=h*l.y,s.style.width=l.x+"px",s.style.height=l.y+"px",Z.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){_n.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[m(n)]=n;var s=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var s=n._order,l=s.next,h=s.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete n._order,delete this._layers[m(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var s=n.options.dashArray.split(/[, ]+/),l=[],h,p;for(p=0;p<s.length;p++){if(h=Number(s[p]),isNaN(h))return;l.push(h)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||S(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var s=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new It,this._redrawBounds.extend(n._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(n._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var s=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,s=this._redrawBounds;if(this._ctx.save(),s){var l=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!s||n._pxBounds&&n._pxBounds.intersects(s))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,s){if(this._drawing){var l,h,p,y,I=n._parts,D=I.length,N=this._ctx;if(D){for(N.beginPath(),l=0;l<D;l++){for(h=0,p=I[l].length;h<p;h++)y=I[l][h],N[h?"lineTo":"moveTo"](y.x,y.y);s&&N.closePath()}this._fillStroke(N,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var s=n._point,l=this._ctx,h=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||h)/h;p!==1&&(l.save(),l.scale(1,p)),l.beginPath(),l.arc(s.x,s.y/p,h,0,Math.PI*2,!1),p!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,s){var l=s.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(s.options&&s.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var s=this._map.mouseEventToLayerPoint(n),l,h,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(s)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,s)}},_handleMouseOut:function(n){var s=this._hoveredLayer;s&&(At(this._container,"leaflet-interactive"),this._fireEvent([s],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,s){if(!this._mouseHoverThrottled){for(var l,h,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(s)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(G(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,s,l){this._map._fireDOMEvent(s,l||s.type,n)},_bringToFront:function(n){var s=n._order;if(s){var l=s.next,h=s.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(n)}},_bringToBack:function(n){var s=n._order;if(s){var l=s.next,h=s.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(n)}}});function Kl(n){return Z.canvas?new Zl(n):null}var ds=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),$p={_initContainer:function(){this._container=pt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(_n.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var s=n._container=ds("shape");G(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",n._path=ds("path"),s.appendChild(n._path),this._updateStyle(n),this._layers[m(n)]=n},_addPath:function(n){var s=n._container;this._container.appendChild(s),n.options.interactive&&n.addInteractiveTarget(s)},_removePath:function(n){var s=n._container;gt(s),n.removeInteractiveTarget(s),delete this._layers[m(n)]},_updateStyle:function(n){var s=n._stroke,l=n._fill,h=n.options,p=n._container;p.stroked=!!h.stroke,p.filled=!!h.fill,h.stroke?(s||(s=n._stroke=ds("stroke")),p.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=ut(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(p.removeChild(s),n._stroke=null),h.fill?(l||(l=n._fill=ds("fill")),p.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(p.removeChild(l),n._fill=null)},_updateCircle:function(n){var s=n._point.round(),l=Math.round(n._radius),h=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+s.x+","+s.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(n,s){n._path.v=s},_bringToFront:function(n){we(n._container)},_bringToBack:function(n){Te(n._container)}},Mo=Z.vml?ds:ro,fs=_n.extend({_initContainer:function(){this._container=Mo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Mo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){gt(this._container),Et(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){_n.prototype._update.call(this);var n=this._bounds,s=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,l.setAttribute("width",s.x),l.setAttribute("height",s.y)),xt(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(n){var s=n._path=Mo("path");n.options.className&&G(s,n.options.className),n.options.interactive&&G(s,"leaflet-interactive"),this._updateStyle(n),this._layers[m(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){gt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[m(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var s=n._path,l=n.options;s&&(l.stroke?(s.setAttribute("stroke",l.color),s.setAttribute("stroke-opacity",l.opacity),s.setAttribute("stroke-width",l.weight),s.setAttribute("stroke-linecap",l.lineCap),s.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?s.setAttribute("stroke-dasharray",l.dashArray):s.removeAttribute("stroke-dasharray"),l.dashOffset?s.setAttribute("stroke-dashoffset",l.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),l.fill?(s.setAttribute("fill",l.fillColor||l.color),s.setAttribute("fill-opacity",l.fillOpacity),s.setAttribute("fill-rule",l.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(n,s){this._setPath(n,Ui(n._parts,s))},_updateCircle:function(n){var s=n._point,l=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||l,p="a"+l+","+h+" 0 1,0 ",y=n._empty()?"M0 0":"M"+(s.x-l)+","+s.y+p+l*2+",0 "+p+-l*2+",0 ";this._setPath(n,y)},_setPath:function(n,s){n._path.setAttribute("d",s)},_bringToFront:function(n){we(n._path)},_bringToBack:function(n){Te(n._path)}});Z.vml&&fs.include($p);function Ql(n){return Z.svg||Z.vml?new fs(n):null}ct.include({getRenderer:function(n){var s=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var s=this._paneRenderers[n];return s===void 0&&(s=this._createRenderer({pane:n}),this._paneRenderers[n]=s),s},_createRenderer:function(n){return this.options.preferCanvas&&Kl(n)||Ql(n)}});var Jl=lr.extend({initialize:function(n,s){lr.prototype.initialize.call(this,this._boundsToLatLngs(n),s)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Pt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Gp(n,s){return new Jl(n,s)}fs.create=Mo,fs.pointsToPath=Ui,mn.geometryToLayer=Ro,mn.coordsToLatLng=Za,mn.coordsToLatLngs=ko,mn.latLngToCoords=Ka,mn.latLngsToCoords=Lo,mn.getFeature=ur,mn.asFeature=xo,ct.mergeOptions({boxZoom:!0});var Yl=_e.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){nt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Et(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){gt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Le(),Qi(),this._startPoint=this._map.mouseEventToContainerPoint(n),nt(document,{contextmenu:He,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=pt("div","leaflet-zoom-box",this._container),G(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var s=new It(this._point,this._startPoint),l=s.getSize();xt(this._box,s.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(gt(this._box),At(this._container,"leaflet-crosshair")),me(),Ji(),Et(document,{contextmenu:He,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var s=new Kt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ct.addInitHook("addHandler","boxZoom",Yl),ct.mergeOptions({doubleClickZoom:!0});var Xl=_e.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var s=this._map,l=s.getZoom(),h=s.options.zoomDelta,p=n.originalEvent.shiftKey?l-h:l+h;s.options.doubleClickZoom==="center"?s.setZoom(p):s.setZoomAround(n.containerPoint,p)}});ct.addInitHook("addHandler","doubleClickZoom",Xl),ct.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var tu=_e.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new xe(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}G(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){At(this._map._container,"leaflet-grab"),At(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Pt(this._map.options.maxBounds);this._offsetLimit=Zt(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var s=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(s),this._prunePositions(s)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,s){return n-(n-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;n.x<s.min.x&&(n.x=this._viscousLimit(n.x,s.min.x)),n.y<s.min.y&&(n.y=this._viscousLimit(n.y,s.min.y)),n.x>s.max.x&&(n.x=this._viscousLimit(n.x,s.max.x)),n.y>s.max.y&&(n.y=this._viscousLimit(n.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,s=Math.round(n/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,p=(h-s+l)%n+s-l,y=(h+s+l)%n-s-l,I=Math.abs(p+l)<Math.abs(y+l)?p:y;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=I},_onDragEnd:function(n){var s=this._map,l=s.options,h=!l.inertia||n.noInertia||this._times.length<2;if(s.fire("dragend",n),h)s.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),y=(this._lastTime-this._times[0])/1e3,I=l.easeLinearity,D=p.multiplyBy(I/y),N=D.distanceTo([0,0]),U=Math.min(l.inertiaMaxSpeed,N),W=D.multiplyBy(U/N),J=U/(l.inertiaDeceleration*I),lt=W.multiplyBy(-J/2).round();!lt.x&&!lt.y?s.fire("moveend"):(lt=s._limitOffset(lt,s.options.maxBounds),S(function(){s.panBy(lt,{duration:J,easeLinearity:I,noMoveStart:!0,animate:!0})}))}}});ct.addInitHook("addHandler","dragging",tu),ct.mergeOptions({keyboard:!0,keyboardPanDelta:80});var eu=_e.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),nt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Et(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,s=document.documentElement,l=n.scrollTop||s.scrollTop,h=n.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var s=this._panKeys={},l=this.keyCodes,h,p;for(h=0,p=l.left.length;h<p;h++)s[l.left[h]]=[-1*n,0];for(h=0,p=l.right.length;h<p;h++)s[l.right[h]]=[n,0];for(h=0,p=l.down.length;h<p;h++)s[l.down[h]]=[0,n];for(h=0,p=l.up.length;h<p;h++)s[l.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var s=this._zoomKeys={},l=this.keyCodes,h,p;for(h=0,p=l.zoomIn.length;h<p;h++)s[l.zoomIn[h]]=n;for(h=0,p=l.zoomOut.length;h<p;h++)s[l.zoomOut[h]]=-n},_addHooks:function(){nt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Et(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var s=n.keyCode,l=this._map,h;if(s in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[s],n.shiftKey&&(h=et(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(et(h),l.options.maxBounds)),l.options.worldCopyJump){var p=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(p)}else l.panBy(h)}else if(s in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;He(n)}}});ct.addInitHook("addHandler","keyboard",eu),ct.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var nu=_e.extend({addHooks:function(){nt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Et(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var s=es(n),l=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),h),He(n)},_performZoom:function(){var n=this._map,s=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,y=l?Math.ceil(p/l)*l:p,I=n._limitZoom(s+(this._delta>0?y:-y))-s;this._delta=0,this._startTime=null,I&&(n.options.scrollWheelZoom==="center"?n.setZoom(s+I):n.setZoomAround(this._lastMousePos,s+I))}});ct.addInitHook("addHandler","scrollWheelZoom",nu);var Zp=600;ct.mergeOptions({tapHold:Z.touchNative&&Z.safari&&Z.mobile,tapTolerance:15});var iu=_e.extend({addHooks:function(){nt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Et(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var s=n.touches[0];this._startPos=this._newPos=new tt(s.clientX,s.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(nt(document,"touchend",Nt),nt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Zp),nt(document,"touchend touchcancel contextmenu",this._cancel,this),nt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Et(document,"touchend",Nt),Et(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Et(document,"touchend touchcancel contextmenu",this._cancel,this),Et(document,"touchmove",this._onMove,this)},_onMove:function(n){var s=n.touches[0];this._newPos=new tt(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,s){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});l._simulated=!0,s.target.dispatchEvent(l)}});ct.addInitHook("addHandler","tapHold",iu),ct.mergeOptions({touchZoom:Z.touch,bounceAtZoomLimits:!0});var ru=_e.extend({addHooks:function(){G(this._map._container,"leaflet-touch-zoom"),nt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){At(this._map._container,"leaflet-touch-zoom"),Et(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var s=this._map;if(!(!n.touches||n.touches.length!==2||s._animatingZoom||this._zooming)){var l=s.mouseEventToContainerPoint(n.touches[0]),h=s.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),nt(document,"touchmove",this._onTouchMove,this),nt(document,"touchend touchcancel",this._onTouchEnd,this),Nt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var s=this._map,l=s.mouseEventToContainerPoint(n.touches[0]),h=s.mouseEventToContainerPoint(n.touches[1]),p=l.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(p,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&p<1||this._zoom>s.getMaxZoom()&&p>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var y=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(p===1&&y.x===0&&y.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(y),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),k(this._animRequest);var I=u(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=S(I,this,!0),Nt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,k(this._animRequest),Et(document,"touchmove",this._onTouchMove,this),Et(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ct.addInitHook("addHandler","touchZoom",ru),ct.BoxZoom=Yl,ct.DoubleClickZoom=Xl,ct.Drag=tu,ct.Keyboard=eu,ct.ScrollWheelZoom=nu,ct.TapHold=iu,ct.TouchZoom=ru,e.Bounds=It,e.Browser=Z,e.CRS=pe,e.Canvas=Zl,e.Circle=Ga,e.CircleMarker=Co,e.Class=Ct,e.Control=he,e.DivIcon=Wl,e.DivOverlay=Ze,e.DomEvent=wi,e.DomUtil=$a,e.Draggable=xe,e.Evented=ii,e.FeatureGroup=fn,e.GeoJSON=mn,e.GridLayer=hs,e.Handler=_e,e.Icon=cr,e.ImageOverlay=Do,e.LatLng=_t,e.LatLngBounds=Kt,e.Layer=Oe,e.LayerGroup=ar,e.LineUtil=Ie,e.Map=ct,e.Marker=So,e.Mixin=bo,e.Path=Vn,e.Point=tt,e.PolyUtil=rr,e.Polygon=lr,e.Polyline=pn,e.Popup=Oo,e.PosAnimation=is,e.Projection=Ge,e.Rectangle=Jl,e.Renderer=_n,e.SVG=fs,e.SVGOverlay=jl,e.TileLayer=hr,e.Tooltip=No,e.Transformation=zr,e.Util=b,e.VideoOverlay=Hl,e.bind=u,e.bounds=Zt,e.canvas=Kl,e.circle=Op,e.circleMarker=Dp,e.control=We,e.divIcon=Hp,e.extend=o,e.featureGroup=kp,e.geoJSON=ql,e.geoJson=Vp,e.gridLayer=jp,e.icon=Lp,e.imageOverlay=Fp,e.latLng=at,e.latLngBounds=Pt,e.layerGroup=Rp,e.map=tr,e.marker=xp,e.point=et,e.polygon=Mp,e.polyline=Np,e.popup=zp,e.rectangle=Gp,e.setOptions=B,e.stamp=m,e.svg=Ql,e.svgOverlay=Bp,e.tileLayer=$l,e.tooltip=qp,e.transformation=Sn,e.version=r,e.videoOverlay=Up;var Kp=window.L;e.noConflict=function(){return window.L=Kp,this},window.L=e})})(zc,zc.exports);var sI=zc.exports;const yr=rI(sI),Pp="trippy-geocache";let zh=Promise.resolve();function qh(){try{return JSON.parse(localStorage.getItem(Pp)||"{}")}catch{return{}}}function oI(i){try{localStorage.setItem(Pp,JSON.stringify(i))}catch{}}async function aI(i){const t=i.toLowerCase().trim(),e=qh();if(e[t])return e[t];const r=await(zh=zh.then(async()=>{await new Promise(o=>setTimeout(o,350));try{const o=`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(i)}`,u=await(await fetch(o,{headers:{"Accept-Language":"en"}})).json();return u!=null&&u.length?{lat:parseFloat(u[0].lat),lng:parseFloat(u[0].lon)}:null}catch{return null}}));if(r){const o=qh();o[t]=r,oI(o)}return r}async function cI(i){const t=[...new Set(i.filter(Boolean))],e={};for(const r of t)e[r]=await aI(r);return e}let ms=null,Pe=null,gr=null;function lI(i,t){var r;ms&&(ms.destroy(),ms=null),Pe&&(Pe.remove(),Pe=null),gr=null;const e=((r=Ml())==null?void 0:r.uid)||null;i.innerHTML=`
    <div class="globe-page">
      <div class="topbar globe-topbar">
        <div class="topbar-left">
          <button class="ghost-btn" id="globe-back">← Back</button>
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="auth-slot"></div>
      </div>
      <div class="globe-layout">
        <div class="globe-container" id="globe-container">
          <div id="map-inner" style="width:100%;height:100%"></div>
        </div>
        <div class="globe-panel">
          <div class="globe-panel-title">Trip Days</div>
          <div class="globe-day-list" id="globe-day-list">
            <div class="globe-panel-hint">Loading trip…</div>
          </div>
        </div>
      </div>
    </div>
  `,Vl(i),i.querySelector("#globe-back").addEventListener("click",()=>Pr(`/trip/${t}`)),Pe=yr.map("map-inner",{zoomControl:!0}).setView([20,10],2),yr.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(Pe),ms=Ap(t,e,o=>Hh(i,o)),Hh(i,ms.getAll())}async function Hh(i,t,e){var m,g;const r=i.querySelector("#globe-day-list");if(!r||!Pe)return;if(gr&&(r.removeEventListener("click",gr),gr=null),Pe.eachLayer(v=>{v instanceof yr.TileLayer||Pe.removeLayer(v)}),t.length===0){r.innerHTML='<div class="globe-empty">No days in this trip yet.</div>';return}r.innerHTML='<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>'+t.map((v,T)=>`
      <div class="globe-day-item" data-dest="${dc(v.destination)}" data-idx="${T}">
        <div class="globe-day-date">${uI(v.date)}</div>
        <div class="globe-day-dest">${dc(v.destination||"Unknown")}</div>
        ${v.event?`<div class="globe-day-event">${dc(v.event)}</div>`:""}
        ${v.travelDay?'<span class="globe-travel-badge">Travel</span>':""}
      </div>
    `).join("");const o=[...new Set(t.map(v=>v.destination).filter(Boolean))],a=await cI(o);(m=r.querySelector(".geocoding-hint"))==null||m.remove(),(g=r.querySelector(".globe-day-item"))==null||g.classList.add("active");const u=t.filter(v=>v.destination&&a[v.destination]).map(v=>[a[v.destination].lat,a[v.destination].lng]);u.length>1&&yr.polyline(u,{color:"#7c6af7",weight:2.5,opacity:.85,dashArray:"6 10"}).addTo(Pe);const f={};for(const v of o){if(!a[v])continue;const T=yr.circleMarker([a[v].lat,a[v].lng],{radius:7,fillColor:"#7c6af7",color:"#fff",weight:1.5,fillOpacity:.9}).addTo(Pe);T.bindTooltip(v,{direction:"top",offset:[0,-8],className:"map-tooltip"}),f[v]=T}u.length>0&&Pe.fitBounds(yr.latLngBounds(u),{padding:[50,50],maxZoom:8}),gr=v=>{var M;const T=v.target.closest(".globe-day-item");if(!T)return;const P=T.dataset.dest;P&&a[P]&&(Pe.flyTo([a[P].lat,a[P].lng],10,{duration:1.5}),r.querySelectorAll(".globe-day-item").forEach(z=>z.classList.remove("active")),T.classList.add("active"),T.scrollIntoView({behavior:"smooth",block:"nearest"}),(M=f[P])==null||M.openTooltip())},r.addEventListener("click",gr)}function uI(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function dc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const fc=document.getElementById("app");LE();const Sp=UE({"/":()=>bp(fc),"/trip/:id":({id:i})=>nI(fc,i),"/globe/:id":({id:i})=>lI(fc,i)});xE(()=>Sp.refresh());Sp.start();
