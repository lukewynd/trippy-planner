(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Om=()=>{};var Ou={};/**
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
 */const Td=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Vm=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const s=i[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=i[e++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=i[e++],u=i[e++],f=i[e++],m=((s&7)<<18|(a&63)<<12|(u&63)<<6|f&63)-65536;t[r++]=String.fromCharCode(55296+(m>>10)),t[r++]=String.fromCharCode(56320+(m&1023))}else{const a=i[e++],u=i[e++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Ed={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<i.length;s+=3){const a=i[s],u=s+1<i.length,f=u?i[s+1]:0,m=s+2<i.length,g=m?i[s+2]:0,y=a>>2,w=(a&3)<<4|f>>4;let E=(f&15)<<2|g>>6,R=g&63;m||(R=64,u||(E=64)),r.push(e[y],e[w],e[E],e[R])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Td(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Vm(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<i.length;){const a=e[i.charAt(s++)],f=s<i.length?e[i.charAt(s)]:0;++s;const g=s<i.length?e[i.charAt(s)]:64;++s;const w=s<i.length?e[i.charAt(s)]:64;if(++s,a==null||f==null||g==null||w==null)throw new Fm;const E=a<<2|f>>4;if(r.push(E),g!==64){const R=f<<4&240|g>>2;if(r.push(R),w!==64){const O=g<<6&192|w;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Fm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Um=function(i){const t=Td(i);return Ed.encodeByteArray(t,!0)},ga=function(i){return Um(i).replace(/\./g,"")},Id=function(i){try{return Ed.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zm=()=>Bm().__FIREBASE_DEFAULTS__,qm=()=>{if(typeof process>"u"||typeof Ou>"u")return;const i=Ou.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},$m=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Id(i[1]);return t&&JSON.parse(t)},Oa=()=>{try{return Om()||zm()||qm()||$m()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},bd=i=>{var t,e;return(e=(t=Oa())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},jm=i=>{const t=bd(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ad=()=>{var i;return(i=Oa())==null?void 0:i.config},Pd=i=>{var t;return(t=Oa())==null?void 0:t[`_${i}`]};/**
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
 */class Hm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Wm(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=i.iat||0,a=i.sub||i.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...i};return[ga(JSON.stringify(e)),ga(JSON.stringify(u)),""].join(".")}/**
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
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function Zm(){var t;const i=(t=Oa())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Km(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qm(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const i=ae();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Xm(){return!Zm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function t_(){try{return typeof indexedDB=="object"}catch{return!1}}function e_(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)==null?void 0:a.message)||"")}}catch(e){t(e)}})}/**
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
 */const n_="FirebaseError";class On extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=n_,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?i_(a,r):"Error",f=`${this.serviceName}: ${u} (${s}).`;return new On(s,f,r)}}function i_(i,t){return i.replace(r_,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const r_=/\{\$([^}]+)}/g;function s_(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Ln(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const a=i[s],u=t[s];if(Vu(a)&&Vu(u)){if(!Ln(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Vu(i){return i!==null&&typeof i=="object"}/**
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
 */function eo(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xs(i){const t={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(a)}}),t}function Ds(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function o_(i,t){const e=new a_(i,t);return e.subscribe.bind(e)}class a_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");c_(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=yc),s.error===void 0&&(s.error=yc),s.complete===void 0&&(s.complete=yc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function c_(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function yc(){}/**
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
 */function jt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function no(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sd(i){return(await fetch(i,{credentials:"include"})).ok}class ji{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Vi="[DEFAULT]";/**
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
 */class l_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Hm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(h_(t))try{this.getOrInitializeService({instanceIdentifier:Vi})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=Vi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vi){return this.instances.has(t)}getOptions(t=Vi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[a,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);r===f&&u.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vi){return this.component?this.component.multipleInstances?t:Vi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u_(i){return i===Vi?void 0:i}function h_(i){return i.instantiationMode==="EAGER"}/**
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
 */class d_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new l_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(pt||(pt={}));const f_={debug:pt.DEBUG,verbose:pt.VERBOSE,info:pt.INFO,warn:pt.WARN,error:pt.ERROR,silent:pt.SILENT},p_=pt.INFO,m_={[pt.DEBUG]:"log",[pt.VERBOSE]:"log",[pt.INFO]:"info",[pt.WARN]:"warn",[pt.ERROR]:"error"},__=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),s=m_[t];if(s)console[s](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fl{constructor(t){this.name=t,this._logLevel=p_,this._logHandler=__,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?f_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pt.DEBUG,...t),this._logHandler(this,pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pt.VERBOSE,...t),this._logHandler(this,pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pt.INFO,...t),this._logHandler(this,pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pt.WARN,...t),this._logHandler(this,pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pt.ERROR,...t),this._logHandler(this,pt.ERROR,...t)}}const g_=(i,t)=>t.some(e=>i instanceof e);let Fu,Uu;function y_(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v_(){return Uu||(Uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cd=new WeakMap,Nc=new WeakMap,Rd=new WeakMap,vc=new WeakMap,pl=new WeakMap;function w_(i){const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("success",a),i.removeEventListener("error",u)},a=()=>{e(Xn(i.result)),s()},u=()=>{r(i.error),s()};i.addEventListener("success",a),i.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Cd.set(e,i)}).catch(()=>{}),pl.set(t,i),t}function T_(i){if(Nc.has(i))return;const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("complete",a),i.removeEventListener("error",u),i.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{r(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",a),i.addEventListener("error",u),i.addEventListener("abort",u)});Nc.set(i,t)}let Mc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Nc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Rd.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Xn(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function E_(i){Mc=i(Mc)}function I_(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call(wc(this),t,...e);return Rd.set(r,t.sort?t.sort():[t]),Xn(r)}:v_().includes(i)?function(...t){return i.apply(wc(this),t),Xn(Cd.get(this))}:function(...t){return Xn(i.apply(wc(this),t))}}function b_(i){return typeof i=="function"?I_(i):(i instanceof IDBTransaction&&T_(i),g_(i,y_())?new Proxy(i,Mc):i)}function Xn(i){if(i instanceof IDBRequest)return w_(i);if(vc.has(i))return vc.get(i);const t=b_(i);return t!==i&&(vc.set(i,t),pl.set(t,i)),t}const wc=i=>pl.get(i);function A_(i,t,{blocked:e,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(i,t),f=Xn(u);return r&&u.addEventListener("upgradeneeded",m=>{r(Xn(u.result),m.oldVersion,m.newVersion,Xn(u.transaction),m)}),e&&u.addEventListener("blocked",m=>e(m.oldVersion,m.newVersion,m)),f.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const P_=["get","getKey","getAll","getAllKeys","count"],S_=["put","add","delete","clear"],Tc=new Map;function Bu(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Tc.get(t))return Tc.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=S_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||P_.includes(e)))return;const a=async function(u,...f){const m=this.transaction(u,s?"readwrite":"readonly");let g=m.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[e](...f),s&&m.done]))[0]};return Tc.set(t,a),a}E_(i=>({...i,get:(t,e,r)=>Bu(t,e)||i.get(t,e,r),has:(t,e)=>!!Bu(t,e)||i.has(t,e)}));/**
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
 */class C_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(R_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function R_(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Oc="@firebase/app",zu="0.14.12";/**
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
 */const xn=new fl("@firebase/app"),k_="@firebase/app-compat",L_="@firebase/analytics-compat",x_="@firebase/analytics",D_="@firebase/app-check-compat",N_="@firebase/app-check",M_="@firebase/auth",O_="@firebase/auth-compat",V_="@firebase/database",F_="@firebase/data-connect",U_="@firebase/database-compat",B_="@firebase/functions",z_="@firebase/functions-compat",q_="@firebase/installations",$_="@firebase/installations-compat",j_="@firebase/messaging",H_="@firebase/messaging-compat",W_="@firebase/performance",G_="@firebase/performance-compat",Z_="@firebase/remote-config",K_="@firebase/remote-config-compat",Q_="@firebase/storage",J_="@firebase/storage-compat",Y_="@firebase/firestore",X_="@firebase/ai",tg="@firebase/firestore-compat",eg="firebase",ng="12.13.0";/**
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
 */const Vc="[DEFAULT]",ig={[Oc]:"fire-core",[k_]:"fire-core-compat",[x_]:"fire-analytics",[L_]:"fire-analytics-compat",[N_]:"fire-app-check",[D_]:"fire-app-check-compat",[M_]:"fire-auth",[O_]:"fire-auth-compat",[V_]:"fire-rtdb",[F_]:"fire-data-connect",[U_]:"fire-rtdb-compat",[B_]:"fire-fn",[z_]:"fire-fn-compat",[q_]:"fire-iid",[$_]:"fire-iid-compat",[j_]:"fire-fcm",[H_]:"fire-fcm-compat",[W_]:"fire-perf",[G_]:"fire-perf-compat",[Z_]:"fire-rc",[K_]:"fire-rc-compat",[Q_]:"fire-gcs",[J_]:"fire-gcs-compat",[Y_]:"fire-fst",[tg]:"fire-fst-compat",[X_]:"fire-vertex","fire-js":"fire-js",[eg]:"fire-js-all"};/**
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
 */const ya=new Map,rg=new Map,Fc=new Map;function qu(i,t){try{i.container.addComponent(t)}catch(e){xn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Br(i){const t=i.name;if(Fc.has(t))return xn.debug(`There were multiple attempts to register component ${t}.`),!1;Fc.set(t,i);for(const e of ya.values())qu(e,i);for(const e of rg.values())qu(e,i);return!0}function ml(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function we(i){return i==null?!1:i.settings!==void 0}/**
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
 */const sg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ti=new to("app","Firebase",sg);/**
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
 */class og{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ti.create("app-deleted",{appName:this._name})}}/**
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
 */const Gr=ng;function kd(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r={name:Vc,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ti.create("bad-app-name",{appName:String(s)});if(e||(e=Ad()),!e)throw ti.create("no-options");const a=ya.get(s);if(a){if(Ln(e,a.options)&&Ln(r,a.config))return a;throw ti.create("duplicate-app",{appName:s})}const u=new d_(s);for(const m of Fc.values())u.addComponent(m);const f=new og(e,r,u);return ya.set(s,f),f}function Ld(i=Vc){const t=ya.get(i);if(!t&&i===Vc&&Ad())return kd();if(!t)throw ti.create("no-app",{appName:i});return t}function ei(i,t,e){let r=ig[i]??i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${r}" with version "${t}":`];s&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),xn.warn(u.join(" "));return}Br(new ji(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ag="firebase-heartbeat-database",cg=1,Hs="firebase-heartbeat-store";let Ec=null;function xd(){return Ec||(Ec=A_(ag,cg,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Hs)}catch(e){console.warn(e)}}}}).catch(i=>{throw ti.create("idb-open",{originalErrorMessage:i.message})})),Ec}async function lg(i){try{const e=(await xd()).transaction(Hs),r=await e.objectStore(Hs).get(Dd(i));return await e.done,r}catch(t){if(t instanceof On)xn.warn(t.message);else{const e=ti.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});xn.warn(e.message)}}}async function $u(i,t){try{const r=(await xd()).transaction(Hs,"readwrite");await r.objectStore(Hs).put(t,Dd(i)),await r.done}catch(e){if(e instanceof On)xn.warn(e.message);else{const r=ti.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});xn.warn(r.message)}}}function Dd(i){return`${i.name}!${i.options.appId}`}/**
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
 */const ug=1024,hg=30;class dg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new pg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=ju();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>hg){const u=mg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ju(),{heartbeatsToSend:r,unsentEntries:s}=fg(this._heartbeatsCache.heartbeats),a=ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return xn.warn(e),""}}}function ju(){return new Date().toISOString().substring(0,10)}function fg(i,t=ug){const e=[];let r=i.slice();for(const s of i){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Hu(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Hu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class pg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t_()?e_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await lg(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return $u(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return $u(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Hu(i){return ga(JSON.stringify({version:2,heartbeats:i})).length}function mg(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let r=1;r<i.length;r++)i[r].date<e&&(e=i[r].date,t=r);return t}/**
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
 */function _g(i){Br(new ji("platform-logger",t=>new C_(t),"PRIVATE")),Br(new ji("heartbeat",t=>new dg(t),"PRIVATE")),ei(Oc,zu,i),ei(Oc,zu,"esm2020"),ei("fire-js","")}_g("");var gg="firebase",yg="12.13.0";/**
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
 */ei(gg,yg,"app");var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ni,Nd;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,I){function P(){}P.prototype=I.prototype,C.F=I.prototype,C.prototype=new P,C.prototype.constructor=C,C.D=function(k,S,x){for(var b=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)b[Ct-2]=arguments[Ct];return I.prototype[S].apply(k,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,I,P){P||(P=0);const k=Array(16);if(typeof I=="string")for(var S=0;S<16;++S)k[S]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(S=0;S<16;++S)k[S]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=C.g[0],P=C.g[1],S=C.g[2];let x=C.g[3],b;b=I+(x^P&(S^x))+k[0]+3614090360&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+k[1]+3905402710&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+k[2]+606105819&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+k[3]+3250441966&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(x^P&(S^x))+k[4]+4118548399&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+k[5]+1200080426&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+k[6]+2821735955&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+k[7]+4249261313&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(x^P&(S^x))+k[8]+1770035416&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+k[9]+2336552879&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+k[10]+4294925233&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+k[11]+2304563134&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(x^P&(S^x))+k[12]+1804603682&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+k[13]+4254626195&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+k[14]+2792965006&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+k[15]+1236535329&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(S^x&(P^S))+k[1]+4129170786&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+k[6]+3225465664&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+k[11]+643717713&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+k[0]+3921069994&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(S^x&(P^S))+k[5]+3593408605&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+k[10]+38016083&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+k[15]+3634488961&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+k[4]+3889429448&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(S^x&(P^S))+k[9]+568446438&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+k[14]+3275163606&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+k[3]+4107603335&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+k[8]+1163531501&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(S^x&(P^S))+k[13]+2850285829&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+k[2]+4243563512&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+k[7]+1735328473&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+k[12]+2368359562&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(P^S^x)+k[5]+4294588738&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+k[8]+2272392833&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+k[11]+1839030562&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+k[14]+4259657740&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(P^S^x)+k[1]+2763975236&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+k[4]+1272893353&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+k[7]+4139469664&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+k[10]+3200236656&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(P^S^x)+k[13]+681279174&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+k[0]+3936430074&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+k[3]+3572445317&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+k[6]+76029189&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(P^S^x)+k[9]+3654602809&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+k[12]+3873151461&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+k[15]+530742520&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+k[2]+3299628645&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(S^(P|~x))+k[0]+4096336452&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+k[7]+1126891415&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+k[14]+2878612391&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+k[5]+4237533241&4294967295,P=S+(b<<21&4294967295|b>>>11),b=I+(S^(P|~x))+k[12]+1700485571&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+k[3]+2399980690&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+k[10]+4293915773&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+k[1]+2240044497&4294967295,P=S+(b<<21&4294967295|b>>>11),b=I+(S^(P|~x))+k[8]+1873313359&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+k[15]+4264355552&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+k[6]+2734768916&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+k[13]+1309151649&4294967295,P=S+(b<<21&4294967295|b>>>11),b=I+(S^(P|~x))+k[4]+4149444226&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+k[11]+3174756917&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+k[2]+718787259&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+x&4294967295}r.prototype.v=function(C,I){I===void 0&&(I=C.length);const P=I-this.blockSize,k=this.C;let S=this.h,x=0;for(;x<I;){if(S==0)for(;x<=P;)s(this,C,x),x+=this.blockSize;if(typeof C=="string"){for(;x<I;)if(k[S++]=C.charCodeAt(x++),S==this.blockSize){s(this,k),S=0;break}}else for(;x<I;)if(k[S++]=C[x++],S==this.blockSize){s(this,k),S=0;break}}this.h=S,this.o+=I},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var P=C.length-8;P<C.length;++P)C[P]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,P=0;P<4;++P)for(let k=0;k<32;k+=8)C[I++]=this.g[P]>>>k&255;return C};function a(C,I){var P=f;return Object.prototype.hasOwnProperty.call(P,C)?P[C]:P[C]=I(C)}function u(C,I){this.h=I;const P=[];let k=!0;for(let S=C.length-1;S>=0;S--){const x=C[S]|0;k&&x==I||(P[S]=x,k=!1)}this.g=P}var f={};function m(C){return-128<=C&&C<128?a(C,function(I){return new u([I|0],I<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return w;if(C<0)return q(g(-C));const I=[];let P=1;for(let k=0;C>=P;k++)I[k]=C/P|0,P*=4294967296;return new u(I,0)}function y(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return q(y(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=g(Math.pow(I,8));let k=w;for(let x=0;x<C.length;x+=8){var S=Math.min(8,C.length-x);const b=parseInt(C.substring(x,x+S),I);S<8?(S=g(Math.pow(I,S)),k=k.j(S).add(g(b))):(k=k.j(P),k=k.add(g(b)))}return k}var w=m(0),E=m(1),R=m(16777216);i=u.prototype,i.m=function(){if(F(this))return-q(this).m();let C=0,I=1;for(let P=0;P<this.g.length;P++){const k=this.i(P);C+=(k>=0?k:4294967296+k)*I,I*=4294967296}return C},i.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(O(this))return"0";if(F(this))return"-"+q(this).toString(C);const I=g(Math.pow(C,6));var P=this;let k="";for(;;){const S=ft(P,I).g;P=J(P,S.j(I));let x=((P.g.length>0?P.g[0]:P.h)>>>0).toString(C);if(P=S,O(P))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},i.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function O(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function F(C){return C.h==-1}i.l=function(C){return C=J(this,C),F(C)?-1:O(C)?0:1};function q(C){const I=C.g.length,P=[];for(let k=0;k<I;k++)P[k]=~C.g[k];return new u(P,~C.h).add(E)}i.abs=function(){return F(this)?q(this):this},i.add=function(C){const I=Math.max(this.g.length,C.g.length),P=[];let k=0;for(let S=0;S<=I;S++){let x=k+(this.i(S)&65535)+(C.i(S)&65535),b=(x>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);k=b>>>16,x&=65535,b&=65535,P[S]=b<<16|x}return new u(P,P[P.length-1]&-2147483648?-1:0)};function J(C,I){return C.add(q(I))}i.j=function(C){if(O(this)||O(C))return w;if(F(this))return F(C)?q(this).j(q(C)):q(q(this).j(C));if(F(C))return q(this.j(q(C)));if(this.l(R)<0&&C.l(R)<0)return g(this.m()*C.m());const I=this.g.length+C.g.length,P=[];for(var k=0;k<2*I;k++)P[k]=0;for(k=0;k<this.g.length;k++)for(let S=0;S<C.g.length;S++){const x=this.i(k)>>>16,b=this.i(k)&65535,Ct=C.i(S)>>>16,qt=C.i(S)&65535;P[2*k+2*S]+=b*qt,at(P,2*k+2*S),P[2*k+2*S+1]+=x*qt,at(P,2*k+2*S+1),P[2*k+2*S+1]+=b*Ct,at(P,2*k+2*S+1),P[2*k+2*S+2]+=x*Ct,at(P,2*k+2*S+2)}for(C=0;C<I;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=I;C<2*I;C++)P[C]=0;return new u(P,0)};function at(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function K(C,I){this.g=C,this.h=I}function ft(C,I){if(O(I))throw Error("division by zero");if(O(C))return new K(w,w);if(F(C))return I=ft(q(C),I),new K(q(I.g),q(I.h));if(F(I))return I=ft(C,q(I)),new K(q(I.g),I.h);if(C.g.length>30){if(F(C)||F(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,k=I;k.l(C)<=0;)P=gt(P),k=gt(k);var S=Lt(P,1),x=Lt(k,1);for(k=Lt(k,2),P=Lt(P,2);!O(k);){var b=x.add(k);b.l(C)<=0&&(S=S.add(P),x=b),k=Lt(k,1),P=Lt(P,1)}return I=J(C,S.j(I)),new K(S,I)}for(S=w;C.l(I)>=0;){for(P=Math.max(1,Math.floor(C.m()/I.m())),k=Math.ceil(Math.log(P)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=g(P),b=x.j(I);F(b)||b.l(C)>0;)P-=k,x=g(P),b=x.j(I);O(x)&&(x=E),S=S.add(x),C=J(C,b)}return new K(S,C)}i.B=function(C){return ft(this,C).h},i.and=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)&C.i(k);return new u(P,this.h&C.h)},i.or=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)|C.i(k);return new u(P,this.h|C.h)},i.xor=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)^C.i(k);return new u(P,this.h^C.h)};function gt(C){const I=C.g.length+1,P=[];for(let k=0;k<I;k++)P[k]=C.i(k)<<1|C.i(k-1)>>>31;return new u(P,C.h)}function Lt(C,I){const P=I>>5;I%=32;const k=C.g.length-P,S=[];for(let x=0;x<k;x++)S[x]=I>0?C.i(x+P)>>>I|C.i(x+P+1)<<32-I:C.i(x+P);return new u(S,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Nd=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,ni=u}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Md,Ns,Od,oa,Uc,Vd,Fd,Ud;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yo=="object"&&Yo];for(var d=0;d<c.length;++d){var _=c[d];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=e(this);function s(c,d){if(d)t:{var _=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var D=c[T];if(!(D in _))break t;_=_[D]}c=c[c.length-1],T=_[c],d=d(T),d!=T&&d!=null&&t(_,c,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(d){var _=[],T;for(T in d)Object.prototype.hasOwnProperty.call(d,T)&&_.push([T,d[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function f(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function m(c,d,_){return c.call.apply(c.bind,arguments)}function g(c,d,_){return g=m,g.apply(null,arguments)}function y(c,d){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,d){function _(){}_.prototype=d.prototype,c.Z=d.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,D,M){for(var $=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)$[rt-2]=arguments[rt];return d.prototype[D].apply(T,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function R(c){const d=c.length;if(d>0){const _=Array(d);for(let T=0;T<d;T++)_[T]=c[T];return _}return[]}function O(c,d){for(let T=1;T<arguments.length;T++){const D=arguments[T];var _=typeof D;if(_=_!="object"?_:D?Array.isArray(D)?"array":_:"null",_=="array"||_=="object"&&typeof D.length=="number"){_=c.length||0;const M=D.length||0;c.length=_+M;for(let $=0;$<M;$++)c[_+$]=D[$]}else c.push(D)}}class F{constructor(d,_){this.i=d,this.j=_,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function q(c){u.setTimeout(()=>{throw c},0)}function J(){var c=C;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class at{constructor(){this.h=this.g=null}add(d,_){const T=K.get();T.set(d,_),this.h?this.h.next=T:this.g=T,this.h=T}}var K=new F(()=>new ft,c=>c.reset());class ft{constructor(){this.next=this.g=this.h=null}set(d,_){this.h=d,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let gt,Lt=!1,C=new at,I=()=>{const c=Promise.resolve(void 0);gt=()=>{c.then(P)}};function P(){for(var c;c=J();){try{c.h.call(c.g)}catch(_){q(_)}var d=K;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}Lt=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,d),u.removeEventListener("test",_,d)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function Ct(c,d){S.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}w(Ct,S),Ct.prototype.init=function(c,d){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(_=="mouseover"?d=c.fromElement:_=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ct.Z.h.call(this)},Ct.prototype.h=function(){Ct.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var qt="closure_listenable_"+(Math.random()*1e6|0),Qt=0;function vi(c,d,_,T,D){this.listener=c,this.proxy=null,this.src=d,this.type=_,this.capture=!!T,this.ha=D,this.key=++Qt,this.da=this.fa=!1}function et(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function wi(c,d,_){for(const T in c)d.call(_,c[T],T,c)}function nt(c,d){for(const _ in c)d.call(void 0,c[_],_,c)}function At(c){const d={};for(const _ in c)d[_]=c[_];return d}const Jt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yt(c,d){let _,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(_ in T)c[_]=T[_];for(let M=0;M<Jt.length;M++)_=Jt[M],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function Rt(c){this.src=c,this.g={},this.h=0}Rt.prototype.add=function(c,d,_,T,D){const M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);const $=ct(c,d,T,D);return $>-1?(d=c[$],_||(d.fa=!1)):(d=new vi(d,this.src,M,!!T,D),d.fa=_,c.push(d)),d};function yt(c,d){const _=d.type;if(_ in c.g){var T=c.g[_],D=Array.prototype.indexOf.call(T,d,void 0),M;(M=D>=0)&&Array.prototype.splice.call(T,D,1),M&&(et(d),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ct(c,d,_,T){for(let D=0;D<c.length;++D){const M=c[D];if(!M.da&&M.listener==d&&M.capture==!!_&&M.ha==T)return D}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Ae={};function es(c,d,_,T,D){if(Array.isArray(d)){for(let M=0;M<d.length;M++)es(c,d[M],_,T,D);return null}return _=Ii(_),c&&c[qt]?c.J(d,_,f(T)?!!T.capture:!1,D):ns(c,d,_,!1,T,D)}function ns(c,d,_,T,D,M){if(!d)throw Error("Invalid event type");const $=f(D)?!!D.capture:!!D;let rt=Xi(c);if(rt||(c[ge]=rt=new Rt(c)),_=rt.add(d,_,T,$,M),_.proxy)return _;if(T=is(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)x||(D=$),D===void 0&&(D=!1),c.addEventListener(d.toString(),T,D);else if(c.attachEvent)c.attachEvent(yo(d.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function is(){function c(_){return d.call(c.src,c.listener,_)}const d=vo;return c}function Vn(c,d,_,T,D){if(Array.isArray(d))for(var M=0;M<d.length;M++)Vn(c,d[M],_,T,D);else T=f(T)?!!T.capture:!!T,_=Ii(_),c&&c[qt]?(c=c.i,M=String(d).toString(),M in c.g&&(d=c.g[M],_=ct(d,_,T,D),_>-1&&(et(d[_]),Array.prototype.splice.call(d,_,1),d.length==0&&(delete c.g[M],c.h--)))):c&&(c=Xi(c))&&(d=c.g[d.toString()],c=-1,d&&(c=ct(d,_,T,D)),(_=c>-1?d[c]:null)&&Ti(_))}function Ti(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[qt])yt(d.i,c);else{var _=c.type,T=c.proxy;d.removeEventListener?d.removeEventListener(_,T,c.capture):d.detachEvent?d.detachEvent(yo(_),T):d.addListener&&d.removeListener&&d.removeListener(T),(_=Xi(d))?(yt(_,c),_.h==0&&(_.src=null,d[ge]=null)):et(c)}}}function yo(c){return c in Ae?Ae[c]:Ae[c]="on"+c}function vo(c,d){if(c.da)c=!0;else{d=new Ct(d,this);const _=c.listener,T=c.ha||c.src;c.fa&&Ti(c),c=_.call(T,d)}return c}function Xi(c){return c=c[ge],c instanceof Rt?c:null}var Ei="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ii(c){return typeof c=="function"?c:(c[Ei]||(c[Ei]=function(d){return c.handleEvent(d)}),c[Ei])}function Ht(){k.call(this),this.i=new Rt(this),this.M=this,this.G=null}w(Ht,k),Ht.prototype[qt]=!0,Ht.prototype.removeEventListener=function(c,d,_,T){Vn(this,c,d,_,T)};function Wt(c,d){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=d.type||d,typeof d=="string")d=new S(d,c);else if(d instanceof S)d.target=d.target||c;else{var D=d;d=new S(T,c),Yt(d,D)}D=!0;let M,$;if(_)for($=_.length-1;$>=0;$--)M=d.g=_[$],D=Fn(M,T,!0,d)&&D;if(M=d.g=c,D=Fn(M,T,!0,d)&&D,D=Fn(M,T,!1,d)&&D,_)for($=0;$<_.length;$++)M=d.g=_[$],D=Fn(M,T,!1,d)&&D}Ht.prototype.N=function(){if(Ht.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const _=c.g[d];for(let T=0;T<_.length;T++)et(_[T]);delete c.g[d],c.h--}}this.G=null},Ht.prototype.J=function(c,d,_,T){return this.i.add(String(c),d,!1,_,T)},Ht.prototype.K=function(c,d,_,T){return this.i.add(String(c),d,!0,_,T)};function Fn(c,d,_,T){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let M=0;M<d.length;++M){const $=d[M];if($&&!$.da&&$.capture==_){const rt=$.listener,wt=$.ha||$.src;$.fa&&yt(c.i,$),D=rt.call(wt,T)!==!1&&D}}return D&&!T.defaultPrevented}function wo(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:u.setTimeout(c,d||0)}function rs(c){c.g=wo(()=>{c.g=null,c.i&&(c.i=!1,rs(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class sc extends k{constructor(d,_){super(),this.m=d,this.l=_,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:rs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(c){k.call(this),this.h=c,this.g={}}w(bi,k);var tr=[];function ss(c){wi(c.g,function(d,_){this.g.hasOwnProperty(_)&&Ti(d)},c),c.g={}}bi.prototype.N=function(){bi.Z.N.call(this),ss(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=u.JSON.stringify,oc=u.JSON.parse,To=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function os(){}function Eo(){}var Un={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ai(){S.call(this,"d")}w(Ai,S);function nr(){S.call(this,"c")}w(nr,S);var un={},Bn=null;function ir(){return Bn=Bn||new Ht}un.Ia="serverreachability";function Io(c){S.call(this,un.Ia,c)}w(Io,S);function zn(c){const d=ir();Wt(d,new Io(d))}un.STAT_EVENT="statevent";function as(c,d){S.call(this,un.STAT_EVENT,c),this.stat=d}w(as,S);function Gt(c){const d=ir();Wt(d,new as(d,c))}un.Ja="timingevent";function bo(c,d){S.call(this,un.Ja,c),this.size=d}w(bo,S);function Pi(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},d)}function Si(){this.g=!0}Si.prototype.ua=function(){this.g=!1};function ac(c,d,_,T,D,M){c.info(function(){if(c.g)if(M){var $="",rt=M.split("&");for(let Et=0;Et<rt.length;Et++){var wt=rt[Et].split("=");if(wt.length>1){const Mt=wt[0];wt=wt[1];const ke=Mt.split("_");$=ke.length>=2&&ke[1]=="type"?$+(Mt+"="+wt+"&"):$+(Mt+"=redacted&")}}}else $=null;else $=M;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+d+`
`+_+`
`+$})}function cc(c,d,_,T,D,M,$){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+d+`
`+_+`
`+M+" "+$})}function qn(c,d,_,T){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+lc(c,_)+(T?" "+T:"")})}function cs(c,d){c.info(function(){return"TIMEOUT: "+d})}Si.prototype.info=function(){};function lc(c,d){if(!c.g)return d;if(!d)return null;try{const M=JSON.parse(d);if(M){for(c=0;c<M.length;c++)if(Array.isArray(M[c])){var _=M[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var D=T[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<T.length;$++)T[$]=""}}}}return er(M)}catch{return d}}var rr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ao={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Po;function he(){}w(he,os),he.prototype.g=function(){return new XMLHttpRequest},Po=new he;function Z(c){return encodeURIComponent(String(c))}function So(c){var d=1;c=c.split(":");const _=[];for(;d>0&&c.length;)_.push(c.shift()),d--;return c.length&&_.push(c.join(":")),_}function Oe(c,d,_,T){this.j=c,this.i=d,this.l=_,this.S=T||1,this.V=new bi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ls}function ls(){this.i=null,this.g="",this.h=!1}var us={},Ci={};function sr(c,d,_){c.M=1,c.A=Pt(ce(d)),c.u=_,c.R=!0,hn(c,null)}function hn(c,d){c.F=Date.now(),or(c),c.B=ce(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),hr(_.i,"t",T),c.C=0,_=c.j.L,c.h=new ls,c.g=bs(c.j,_?d:null,!c.u),c.P>0&&(c.O=new sc(g(c.Y,c,c.g),c.P)),d=c.V,_=c.g,T=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(tr[0]=D.toString()),D=tr);for(let M=0;M<D.length;M++){const $=es(_,D[M],T||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=c.J?At(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),zn(),ac(c.i,c.v,c.B,c.l,c.S,c.u)}Oe.prototype.ba=function(c){c=c.target;const d=this.O;d&&Ke(c)==3?d.j():this.Y(c)},Oe.prototype.Y=function(c){try{if(c==this.g)t:{const rt=Ke(this.g),wt=this.g.ya(),Et=this.g.ca();if(!(rt<3)&&(rt!=3||this.g&&(this.h.h||this.g.la()||gs(this.g)))){this.K||rt!=4||wt==7||(wt==8||Et<=0?zn(3):zn(2)),ar(this);var d=this.g.ca();this.X=d;var _=Co(this);if(this.o=d==200,cc(this.i,this.v,this.B,this.l,this.S,rt,d),this.o){if(this.U&&!this.L){e:{if(this.g){var T,D=this.g;if((T=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var M=T;break e}}M=null}if(c=M)qn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hs(this,c);else{this.o=!1,this.m=3,Gt(12),Pe(this),Ri(this);break t}}if(this.R){c=!0;let Mt;for(;!this.K&&this.C<_.length;)if(Mt=uc(this,_),Mt==Ci){rt==4&&(this.m=4,Gt(14),c=!1),qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==us){this.m=4,Gt(15),qn(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else qn(this.i,this.l,Mt,null),hs(this,Mt);if(Ro(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||_.length!=0||this.h.h||(this.m=1,Gt(16),c=!1),this.o=this.o&&c,!c)qn(this.i,this.l,_,"[Invalid Chunked Response]"),Pe(this),Ri(this);else if(_.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Es($),$.P=!0,Gt(11))}}else qn(this.i,this.l,_,null),hs(this,_);rt==4&&Pe(this),this.o&&!this.K&&(rt==4?ve(this.j,this):(this.o=!1,or(this)))}else ys(this.g),d==400&&_.indexOf("Unknown SID")>0?(this.m=3,Gt(12)):(this.m=0,Gt(13)),Pe(this),Ri(this)}}}catch{}finally{}};function Co(c){if(!Ro(c))return c.g.la();const d=gs(c.g);if(d==="")return"";let _="";const T=d.length,D=Ke(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Pe(c),Ri(c),"";c.h.i=new u.TextDecoder}for(let M=0;M<T;M++)c.h.h=!0,_+=c.h.i.decode(d[M],{stream:!(D&&M==T-1)});return d.length=0,c.h.g+=_,c.C=0,c.h.g}function Ro(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function uc(c,d){var _=c.C,T=d.indexOf(`
`,_);return T==-1?Ci:(_=Number(d.substring(_,T)),isNaN(_)?us:(T+=1,T+_>d.length?Ci:(d=d.slice(T,T+_),c.C=T+_,d)))}Oe.prototype.cancel=function(){this.K=!0,Pe(this)};function or(c){c.T=Date.now()+c.H,ko(c,c.H)}function ko(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Pi(g(c.aa,c),d)}function ar(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Oe.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(cs(this.i,this.B),this.M!=2&&(zn(),Gt(17)),Pe(this),this.m=2,Ri(this)):ko(this,this.T-c)};function Ri(c){c.j.I==0||c.K||ve(c.j,c)}function Pe(c){ar(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,ss(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function hs(c,d){try{var _=c.j;if(_.I!=0&&(_.g==c||ki(_.h,c))){if(!c.L&&ki(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(d)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)_r(_),pr(_);else break t;Ts(_),Gt(18)}}else _.xa=D[1],0<_.xa-_.K&&D[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Pi(g(_.Va,_),6e3));Do(_.h)<=1&&_.ta&&(_.ta=void 0)}else Je(_,11)}else if((c.L||_.g==c)&&_r(_),!b(d))for(D=_.Ba.g.parse(d),d=0;d<D.length;d++){let Et=D[d];const Mt=Et[0];if(!(Mt<=_.K))if(_.K=Mt,Et=Et[1],_.I==2)if(Et[0]=="c"){_.M=Et[1],_.ba=Et[2];const ke=Et[3];ke!=null&&(_.ka=ke,_.j.info("VER="+_.ka));const Ue=Et[4];Ue!=null&&(_.za=Ue,_.j.info("SVER="+_.za));const Le=Et[5];Le!=null&&typeof Le=="number"&&Le>0&&(T=1.5*Le,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const Ye=c.g;if(Ye){const vr=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var M=T.h;M.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(dn(M,M.h),M.h=null))}if(T.G){const wr=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;wr&&(T.wa=wr,G(T.J,T.G,wr))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var $=c;if(T.na=Is(T,T.L?T.ba:null,T.W),$.L){ds(T.h,$);var rt=$,wt=T.O;wt&&(rt.H=wt),rt.D&&(ar(rt),or(rt)),T.g=$}else ws(T);_.i.length>0&&Qe(_)}else Et[0]!="stop"&&Et[0]!="close"||Je(_,7);else _.I==3&&(Et[0]=="stop"||Et[0]=="close"?Et[0]=="stop"?Je(_,7):lt(_):Et[0]!="noop"&&_.l&&_.l.qa(Et),_.A=0)}}zn(4)}catch{}}var hc=class{constructor(c,d){this.g=c,this.map=d}};function Lo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Do(c){return c.h?1:c.g?c.g.size:0}function ki(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function dn(c,d){c.g?c.g.add(d):c.h=d}function ds(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Lo.prototype.cancel=function(){if(this.i=fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function fs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const _ of c.g.values())d=d.concat(_.G);return d}return R(c.i)}var $n=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mt(c,d){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let D,M=null;T>=0?(D=c[_].substring(0,T),M=c[_].substring(T+1)):D=c[_],d(D,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function vt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof vt?(this.l=c.l,Se(this,c.j),this.o=c.o,this.g=c.g,Ce(this,c.u),this.h=c.h,Li(this,xi(c.i)),this.m=c.m):c&&(d=String(c).match($n))?(this.l=!1,Se(this,d[1]||"",!0),this.o=fn(d[2]||""),this.g=fn(d[3]||"",!0),Ce(this,d[4]),this.h=fn(d[5]||"",!0),Li(this,d[6]||"",!0),this.m=fn(d[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}vt.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(We(d,No,!0),":");var _=this.g;return(_||d=="file")&&(c.push("//"),(d=this.o)&&c.push(We(d,No,!0),"@"),c.push(Z(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(We(_,_.charAt(0)=="/"?pn:cr,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",We(_,mn)),c.join("")},vt.prototype.resolve=function(c){const d=ce(this);let _=!!c.j;_?Se(d,c.j):_=!!c.o,_?d.o=c.o:_=!!c.g,_?d.g=c.g:_=c.u!=null;var T=c.h;if(_)Ce(d,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var D=d.h.lastIndexOf("/");D!=-1&&(T=d.h.slice(0,D+1)+T)}if(D=T,D==".."||D==".")T="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){T=D.lastIndexOf("/",0)==0,D=D.split("/");const M=[];for(let $=0;$<D.length;){const rt=D[$++];rt=="."?T&&$==D.length&&M.push(""):rt==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),T&&$==D.length&&M.push("")):(M.push(rt),T=!0)}T=M.join("/")}else T=D}return _?d.h=T:_=c.i.toString()!=="",_?Li(d,xi(c.i)):_=!!c.m,_&&(d.m=c.m),d};function ce(c){return new vt(c)}function Se(c,d,_){c.j=_?fn(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Ce(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function Li(c,d,_){d instanceof Ve?(c.i=d,ps(c.i,c.l)):(_||(d=We(d,Dt)),c.i=new Ve(d,c.l))}function G(c,d,_){c.i.set(d,_)}function Pt(c){return G(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function fn(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function We(c,d,_){return typeof c=="string"?(c=encodeURI(c).replace(d,de),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function de(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var No=/[#\/\?@]/g,cr=/[#\?:]/g,pn=/[#\?]/g,Dt=/[#\?@]/g,mn=/#/g;function Ve(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function ye(c){c.g||(c.g=new Map,c.h=0,c.i&&mt(c.i,function(d,_){c.add(decodeURIComponent(d.replace(/\+/g," ")),_)}))}i=Ve.prototype,i.add=function(c,d){ye(this),this.i=null,c=Ge(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(d),this.h+=1,this};function lr(c,d){ye(c),d=Ge(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function jn(c,d){return ye(c),d=Ge(c,d),c.g.has(d)}i.forEach=function(c,d){ye(this),this.g.forEach(function(_,T){_.forEach(function(D){c.call(d,D,T,this)},this)},this)};function ur(c,d){ye(c);let _=[];if(typeof d=="string")jn(c,d)&&(_=_.concat(c.g.get(Ge(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)_=_.concat(c[d]);return _}i.set=function(c,d){return ye(this),this.i=null,c=Ge(this,c),jn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},i.get=function(c,d){return c?(c=ur(this,c),c.length>0?String(c[0]):d):d};function hr(c,d,_){lr(c,d),_.length>0&&(c.i=null,c.g.set(Ge(c,d),R(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let T=0;T<d.length;T++){var _=d[T];const D=Z(_);_=ur(this,_);for(let M=0;M<_.length;M++){let $=D;_[M]!==""&&($+="="+Z(_[M])),c.push($)}}return this.i=c.join("&")};function xi(c){const d=new Ve;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function Ge(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function ps(c,d){d&&!c.j&&(ye(c),c.i=null,c.g.forEach(function(_,T){const D=T.toLowerCase();T!=D&&(lr(this,T),hr(this,D,_))},c)),c.j=d}function dr(c,d){const _=new Si;if(u.Image){const T=new Image;T.onload=y(Re,_,"TestLoadImage: loaded",!0,d,T),T.onerror=y(Re,_,"TestLoadImage: error",!1,d,T),T.onabort=y(Re,_,"TestLoadImage: abort",!1,d,T),T.ontimeout=y(Re,_,"TestLoadImage: timeout",!1,d,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else d(!1)}function Mo(c,d){const _=new Si,T=new AbortController,D=setTimeout(()=>{T.abort(),Re(_,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:T.signal}).then(M=>{clearTimeout(D),M.ok?Re(_,"TestPingServer: ok",!0,d):Re(_,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Re(_,"TestPingServer: error",!1,d)})}function Re(c,d,_,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(_)}catch{}}function dc(){this.g=new To}function it(c){this.i=c.Sb||null,this.h=c.ab||!1}w(it,os),it.prototype.g=function(){return new le(this.i,this.h)};function le(c,d){Ht.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(le,Ht),i=le.prototype,i.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,_n(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||u).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bt(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function bt(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Hn(this):_n(this),this.readyState==3&&bt(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Hn(this))},i.Na=function(c){this.g&&(this.response=c,Hn(this))},i.ga=function(){this.g&&Hn(this)};function Hn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,_n(c)}i.setRequestHeader=function(c,d){this.A.append(c,d)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var _=d.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=d.next();return c.join(`\r
`)};function _n(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(le.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function fr(c){let d="";return wi(c,function(_,T){d+=T,d+=":",d+=_,d+=`\r
`}),d}function Di(c,d,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=fr(_),typeof c=="string"?_!=null&&Z(_):G(c,d,_))}function Tt(c){Ht.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Tt,Ht);var ms=/^https?$/i,Ni=["POST","PUT"];i=Tt.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,d,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Po.g(),this.g.onreadystatechange=E(g(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(M){Vt(this,M);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)_.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const M of T.keys())_.set(M,T.get(M));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(M=>M.toLowerCase()=="content-type"),D=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(Ni,d,void 0)>=0)||T||D||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of _)this.g.setRequestHeader(M,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(M){Vt(this,M)}};function Vt(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,Ze(c),Mi(c)}function Ze(c){c.A||(c.A=!0,Wt(c,"complete"),Wt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Wt(this,"complete"),Wt(this,"abort"),Mi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),Tt.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?_s(this):this.Xa())},i.Xa=function(){_s(this)};function _s(c){if(c.h&&typeof a<"u"){if(c.v&&Ke(c)==4)setTimeout(c.Ca.bind(c),0);else if(Wt(c,"readystatechange"),Ke(c)==4){c.h=!1;try{const M=c.ca();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var _;if(!(_=d)){var T;if(T=M===0){let $=String(c.D).match($n)[1]||null;!$&&u.self&&u.self.location&&($=u.self.location.protocol.slice(0,-1)),T=!ms.test($?$.toLowerCase():"")}_=T}if(_)Wt(c,"complete"),Wt(c,"success");else{c.o=6;try{var D=Ke(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Ze(c)}}finally{Mi(c)}}}}function Mi(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,d||Wt(c,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Ke(c){return c.g?c.g.readyState:0}i.ca=function(){try{return Ke(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),oc(d)}};function gs(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ys(c){const d={};c=(c.g&&Ke(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(b(c[T]))continue;var _=So(c[T]);const D=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const M=d[D]||[];d[D]=M,M.push(_)}nt(d,function(T){return T.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oi(c,d,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||d}function vs(c){this.za=0,this.i=[],this.j=new Si,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Oi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Oi("baseRetryDelayMs",5e3,c),this.Za=Oi("retryDelaySeedMs",1e4,c),this.Ta=Oi("forwardChannelMaxRetries",2,c),this.va=Oi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Lo(c&&c.concurrentRequestLimit),this.Ba=new dc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=vs.prototype,i.ka=8,i.I=1,i.connect=function(c,d,_,T){Gt(0),this.W=c,this.H=d||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Is(this,null,this.W),Qe(this)};function lt(c){if(fe(c),c.I==3){var d=c.V++,_=ce(c.J);if(G(_,"SID",c.M),G(_,"RID",d),G(_,"TYPE","terminate"),gn(c,_),d=new Oe(c,c.j,d),d.M=2,d.A=Pt(ce(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(d.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=d.A,_=!0),_||(d.g=bs(d.j,null),d.g.ea(d.A)),d.F=Date.now(),or(d)}Fe(c)}function pr(c){c.g&&(Es(c),c.g.cancel(),c.g=null)}function fe(c){pr(c),c.v&&(u.clearTimeout(c.v),c.v=null),_r(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Qe(c){if(!xo(c.h)&&!c.m){c.m=!0;var d=c.Ea;gt||I(),Lt||(gt(),Lt=!0),C.add(d,c),c.D=0}}function Oo(c,d){return Do(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Pi(g(c.Ea,c,d),Uo(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Oe(this,this.j,c);let M=this.o;if(this.U&&(M?(M=At(M),Yt(M,this.U)):M=this.U),this.u!==null||this.R||(D.J=M,M=null),this.S)t:{for(var d=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(d+=T,d>4096){d=_;break t}if(d===4096||_===this.i.length-1){d=_+1;break t}}d=1e3}else d=1e3;d=Fo(this,D,d),_=ce(this.J),G(_,"RID",c),G(_,"CVER",22),this.G&&G(_,"X-HTTP-Session-Id",this.G),gn(this,_),M&&(this.R?d="headers="+Z(fr(M))+"&"+d:this.u&&Di(_,this.u,M)),dn(this.h,D),this.Ra&&G(_,"TYPE","init"),this.S?(G(_,"$req",d),G(_,"SID","null"),D.U=!0,sr(D,_,null)):sr(D,_,d),this.I=2}}else this.I==3&&(c?Vo(this,c):this.i.length==0||xo(this.h)||Vo(this))};function Vo(c,d){var _;d?_=d.l:_=c.V++;const T=ce(c.J);G(T,"SID",c.M),G(T,"RID",_),G(T,"AID",c.K),gn(c,T),c.u&&c.o&&Di(T,c.u,c.o),_=new Oe(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),d&&(c.i=d.G.concat(c.i)),d=Fo(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),dn(c.h,_),sr(_,T,d)}function gn(c,d){c.H&&wi(c.H,function(_,T){G(d,T,_)}),c.l&&wi({},function(_,T){G(d,T,_)})}function Fo(c,d,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var D=c.i;let rt=-1;for(;;){const wt=["count="+_];rt==-1?_>0?(rt=D[0].g,wt.push("ofs="+rt)):rt=0:wt.push("ofs="+rt);let Et=!0;for(let Mt=0;Mt<_;Mt++){var M=D[Mt].g;const ke=D[Mt].map;if(M-=rt,M<0)rt=Math.max(0,D[Mt].g-100),Et=!1;else try{M="req"+M+"_"||"";try{var $=ke instanceof Map?ke:Object.entries(ke);for(const[Ue,Le]of $){let Ye=Le;f(Le)&&(Ye=er(Le)),wt.push(M+Ue+"="+encodeURIComponent(Ye))}}catch(Ue){throw wt.push(M+"type="+encodeURIComponent("_badmap")),Ue}}catch{T&&T(ke)}}if(Et){$=wt.join("&");break t}}$=void 0}return c=c.i.splice(0,_),d.G=c,$}function ws(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;gt||I(),Lt||(gt(),Lt=!0),C.add(d,c),c.A=0}}function Ts(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Pi(g(c.Da,c),Uo(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,mr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Pi(g(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Gt(10),pr(this),mr(this))};function Es(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function mr(c){c.g=new Oe(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=ce(c.na);G(d,"RID","rpc"),G(d,"SID",c.M),G(d,"AID",c.K),G(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&G(d,"TO",c.ia),G(d,"TYPE","xmlhttp"),gn(c,d),c.u&&c.o&&Di(d,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Pt(ce(d)),_.u=null,_.R=!0,hn(_,c)}i.Va=function(){this.C!=null&&(this.C=null,pr(this),Ts(this),Gt(19))};function _r(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function ve(c,d){var _=null;if(c.g==d){_r(c),Es(c),c.g=null;var T=2}else if(ki(c.h,d))_=d.G,ds(c.h,d),T=1;else return;if(c.I!=0){if(d.o)if(T==1){_=d.u?d.u.length:0,d=Date.now()-d.F;var D=c.D;T=ir(),Wt(T,new bo(T,_)),Qe(c)}else ws(c);else if(D=d.m,D==3||D==0&&d.X>0||!(T==1&&Oo(c,d)||T==2&&Ts(c)))switch(_&&_.length>0&&(d=c.h,d.i=d.i.concat(_)),D){case 1:Je(c,5);break;case 4:Je(c,10);break;case 3:Je(c,6);break;default:Je(c,2)}}}function Uo(c,d){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*d}function Je(c,d){if(c.j.info("Error code "+d),d==2){var _=g(c.bb,c),T=c.Ua;const D=!T;T=new vt(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Se(T,"https"),Pt(T),D?dr(T.toString(),_):Mo(T.toString(),_)}else Gt(2);c.I=0,c.l&&c.l.pa(d),Fe(c),fe(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Gt(2)):(this.j.info("Failed to ping google.com"),Gt(1))};function Fe(c){if(c.I=0,c.ja=[],c.l){const d=fs(c.h);(d.length!=0||c.i.length!=0)&&(O(c.ja,d),O(c.ja,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.oa()}}function Is(c,d,_){var T=_ instanceof vt?ce(_):new vt(_);if(T.g!="")d&&(T.g=d+"."+T.g),Ce(T,T.u);else{var D=u.location;T=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const M=new vt(null);T&&Se(M,T),d&&(M.g=d),D&&Ce(M,D),_&&(M.h=_),T=M}return _=c.G,d=c.wa,_&&d&&G(T,_,d),G(T,"VER",c.ka),gn(c,T),T}function bs(c,d,_){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new Tt(new it({ab:_})):new Tt(c.ma),d.Fa(c.L),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function gr(){}i=gr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function yr(){}yr.prototype.g=function(c,d){return new ie(c,d)};function ie(c,d){Ht.call(this),this.g=new vs(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!b(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Wn(this)}w(ie,Ht),ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ie.prototype.close=function(){lt(this.g)},ie.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=er(c),c=_);d.i.push(new hc(d.Ya++,c)),d.I==3&&Qe(d)},ie.prototype.N=function(){this.g.l=null,delete this.j,lt(this.g),delete this.g,ie.Z.N.call(this)};function As(c){Ai.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){t:{for(const _ in d){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}w(As,Ai);function Bo(){nr.call(this),this.status=1}w(Bo,nr);function Wn(c){this.g=c}w(Wn,gr),Wn.prototype.ra=function(){Wt(this.g,"a")},Wn.prototype.qa=function(c){Wt(this.g,new As(c))},Wn.prototype.pa=function(c){Wt(this.g,new Bo)},Wn.prototype.oa=function(){Wt(this.g,"b")},yr.prototype.createWebChannel=yr.prototype.g,ie.prototype.send=ie.prototype.o,ie.prototype.open=ie.prototype.m,ie.prototype.close=ie.prototype.close,Ud=function(){return new yr},Fd=function(){return ir()},Vd=un,Uc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},rr.NO_ERROR=0,rr.TIMEOUT=8,rr.HTTP_ERROR=6,oa=rr,Ao.COMPLETE="complete",Od=Ao,Eo.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Ht.prototype.listen=Ht.prototype.J,Ns=Eo,Tt.prototype.listenOnce=Tt.prototype.K,Tt.prototype.getLastError=Tt.prototype.Ha,Tt.prototype.getLastErrorCode=Tt.prototype.ya,Tt.prototype.getStatus=Tt.prototype.ca,Tt.prototype.getResponseJson=Tt.prototype.La,Tt.prototype.getResponseText=Tt.prototype.la,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Fa,Md=Tt}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class se{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}se.UNAUTHENTICATED=new se(null),se.GOOGLE_CREDENTIALS=new se("google-credentials-uid"),se.FIRST_PARTY=new se("first-party-uid"),se.MOCK_USER=new se("mock-user");/**
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
 */let Zr="12.13.0";function vg(i){Zr=i}/**
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
 */const Hi=new fl("@firebase/firestore");function Sr(){return Hi.logLevel}function H(i,...t){if(Hi.logLevel<=pt.DEBUG){const e=t.map(_l);Hi.debug(`Firestore (${Zr}): ${i}`,...e)}}function Dn(i,...t){if(Hi.logLevel<=pt.ERROR){const e=t.map(_l);Hi.error(`Firestore (${Zr}): ${i}`,...e)}}function Wi(i,...t){if(Hi.logLevel<=pt.WARN){const e=t.map(_l);Hi.warn(`Firestore (${Zr}): ${i}`,...e)}}function _l(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
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
 */function tt(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Bd(i,r,e)}function Bd(i,t,e){let r=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Dn(r),new Error(r)}function It(i,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,i||Bd(t,s,r)}function ot(i,t){return i}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends On{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class zd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(se.UNAUTHENTICATED))}shutdown(){}}class Tg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Eg{constructor(t){this.t=t,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){It(this.o===void 0,42304);let r=this.i;const s=m=>this.i!==r?(r=this.i,e(m)):Promise.resolve();let a=new Cn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Cn,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=a;t.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},f=m=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Cn)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(It(typeof r.accessToken=="string",31837,{l:r}),new zd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return It(t===null||typeof t=="string",2055,{h:t}),new se(t)}}class Ig{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class bg{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Ig(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Gu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ag{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,we(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){It(this.o===void 0,3512);const r=a=>{a.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,H("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const s=a=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(It(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Gu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Pg(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class gl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Pg(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<e&&(r+=t.charAt(s[a]%62))}return r}}function ht(i,t){return i<t?-1:i>t?1:0}function Bc(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const s=i.charAt(r),a=t.charAt(r);if(s!==a)return Ic(s)===Ic(a)?ht(s,a):Ic(s)?1:-1}return ht(i.length,t.length)}const Sg=55296,Cg=57343;function Ic(i){const t=i.charCodeAt(0);return t>=Sg&&t<=Cg}function zr(i,t,e){return i.length===t.length&&i.every((r,s)=>e(r,t[s]))}/**
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
 */const Zu="__name__";class en{constructor(t,e,r){e===void 0?e=0:e>t.length&&tt(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&tt(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return en.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof en?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const a=en.compareSegments(t.get(s),e.get(s));if(a!==0)return a}return ht(t.length,e.length)}static compareSegments(t,e){const r=en.isNumericId(t),s=en.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(t).compare(en.extractNumericId(e)):Bc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ni.fromString(t.substring(4,t.length-2))}}class St extends en{construct(t,e,r){return new St(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new St(e)}static emptyPath(){return new St([])}}const Rg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends en{construct(t,e,r){return new ee(t,e,r)}static isValidIdentifier(t){return Rg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zu}static keyField(){return new ee([Zu])}static fromServerFormat(t){const e=[];let r="",s=0;const a=()=>{if(r.length===0)throw new j(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const f=t[s];if(f==="\\"){if(s+1===t.length)throw new j(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new j(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=m,s+=2}else f==="`"?(u=!u,s++):f!=="."||u?(r+=f,s++):(a(),s++)}if(a(),u)throw new j(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ee(e)}static emptyPath(){return new ee([])}}/**
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
 */class Q{constructor(t){this.path=t}static fromPath(t){return new Q(St.fromString(t))}static fromName(t){return new Q(St.fromString(t).popFirst(5))}static empty(){return new Q(St.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&St.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return St.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Q(new St(t.slice()))}}/**
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
 */function qd(i,t,e){if(!e)throw new j(U.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function kg(i,t,e,r){if(t===!0&&r===!0)throw new j(U.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Ku(i){if(!Q.isDocumentKey(i))throw new j(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Qu(i){if(Q.isDocumentKey(i))throw new j(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function $d(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Va(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":tt(12329,{type:typeof i})}function Ie(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new j(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Va(i);throw new j(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */function zt(i,t){const e={typeString:i};return t&&(e.value=t),e}function io(i,t){if(!$d(i))throw new j(U.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const u=i[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new j(U.INVALID_ARGUMENT,e);return!0}/**
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
 */const Ju=-62135596800,Yu=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Yu);return new kt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ju)throw new j(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yu}_compareTo(t){return this.seconds===t.seconds?ht(this.nanoseconds,t.nanoseconds):ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(io(t,kt._jsonSchema))return new kt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ju;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:zt("string",kt._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};/**
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
 */class st{static fromTimestamp(t){return new st(t)}static min(){return new st(new kt(0,0))}static max(){return new st(new kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ws=-1;function Lg(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,s=st.fromTimestamp(r===1e9?new kt(e+1,0):new kt(e,r));return new si(s,Q.empty(),t)}function xg(i){return new si(i.readTime,i.key,Ws)}class si{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new si(st.min(),Q.empty(),Ws)}static max(){return new si(st.max(),Q.empty(),Ws)}}function Dg(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Q.comparator(i.documentKey,t.documentKey),e!==0?e:ht(i.largestBatchId,t.largestBatchId))}/**
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
 */const Ng="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Kr(i){if(i.code!==U.FAILED_PRECONDITION||i.message!==Ng)throw i;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):B.reject(e)}static resolve(t){return new B((e,r)=>{e(t)})}static reject(t){return new B((e,r)=>{r(t)})}static waitFor(t){return new B((e,r)=>{let s=0,a=0,u=!1;t.forEach(f=>{++s,f.next(()=>{++a,u&&a===s&&e()},m=>r(m))}),u=!0,a===s&&e()})}static or(t){let e=B.resolve(!1);for(const r of t)e=e.next(s=>s?B.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,a)=>{r.push(e.call(this,s,a))}),this.waitFor(r)}static mapArray(t,e){return new B((r,s)=>{const a=t.length,u=new Array(a);let f=0;for(let m=0;m<a;m++){const g=m;e(t[g]).next(y=>{u[g]=y,++f,f===a&&r(u)},y=>s(y))}})}static doWhile(t,e){return new B((r,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):r()};a()})}}function Og(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Qr(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Fa{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Fa.ce=-1;/**
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
 */const yl=-1;function Ua(i){return i==null}function va(i){return i===0&&1/i==-1/0}function Vg(i){return typeof i=="number"&&Number.isInteger(i)&&!va(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const jd="";function Fg(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=Xu(t)),t=Ug(i.get(e),t);return Xu(t)}function Ug(i,t){let e=t;const r=i.length;for(let s=0;s<r;s++){const a=i.charAt(s);switch(a){case"\0":e+="";break;case jd:e+="";break;default:e+=a}}return e}function Xu(i){return i+jd+""}/**
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
 */function th(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function fi(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Hd(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class xt{constructor(t,e){this.comparator=t,this.root=e||te.EMPTY}insert(t,e){return new xt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,te.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,te.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xo(this.root,t,this.comparator,!0)}}class Xo{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class te{constructor(t,e,r,s,a){this.key=t,this.value=e,this.color=r??te.RED,this.left=s??te.EMPTY,this.right=a??te.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,a){return new te(t??this.key,e??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const a=r(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,r),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw tt(27949);return t+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1;te.EMPTY=new class{constructor(){this.size=0}get key(){throw tt(57766)}get value(){throw tt(16141)}get color(){throw tt(16727)}get left(){throw tt(29726)}get right(){throw tt(36894)}copy(t,e,r,s,a){return this}insert(t,e,r){return new te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $t{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new eh(this.data.getIterator())}getIteratorFrom(t){return new eh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof $t)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new $t(this.comparator);return e.data=t,e}}class eh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Te{constructor(t){this.fields=t,t.sort(ee.comparator)}static empty(){return new Te([])}unionWith(t){let e=new $t(ee.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return zr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ne{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Wd("Invalid base64 string: "+a):a}}(t);return new ne(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new ne(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const Bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(i){if(It(!!i,39018),typeof i=="string"){let t=0;const e=Bg.exec(i);if(It(!!e,46558,{timestamp:i}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ot(i.seconds),nanos:Ot(i.nanos)}}function Ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ai(i){return typeof i=="string"?ne.fromBase64String(i):ne.fromUint8Array(i)}/**
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
 */const Gd="server_timestamp",Zd="__type__",Kd="__previous_value__",Qd="__local_write_time__";function vl(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Zd])==null?void 0:r.stringValue)===Gd}function Ba(i){const t=i.mapValue.fields[Kd];return vl(t)?Ba(t):t}function Gs(i){const t=oi(i.mapValue.fields[Qd].timestampValue);return new kt(t.seconds,t.nanos)}/**
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
 */class zg{constructor(t,e,r,s,a,u,f,m,g,y,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=y,this.apiKey=w}}const wa="(default)";class Zs{constructor(t,e){this.projectId=t,this.database=e||wa}static empty(){return new Zs("","")}get isDefaultDatabase(){return this.database===wa}isEqual(t){return t instanceof Zs&&t.projectId===this.projectId&&t.database===this.database}}function qg(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new j(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(i.options.projectId,t)}/**
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
 */const Jd="__type__",$g="__max__",ta={mapValue:{}},Yd="__vector__",Ta="value";function ci(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?vl(i)?4:Hg(i)?9007199254740991:jg(i)?10:11:tt(28295,{value:i})}function cn(i,t){if(i===t)return!0;const e=ci(i);if(e!==ci(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Gs(i).isEqual(Gs(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=oi(s.timestampValue),f=oi(a.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(s,a){return ai(s.bytesValue).isEqual(ai(a.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(s,a){return Ot(s.geoPointValue.latitude)===Ot(a.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(a.geoPointValue.longitude)}(i,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Ot(s.integerValue)===Ot(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Ot(s.doubleValue),f=Ot(a.doubleValue);return u===f?va(u)===va(f):isNaN(u)&&isNaN(f)}return!1}(i,t);case 9:return zr(i.arrayValue.values||[],t.arrayValue.values||[],cn);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},f=a.mapValue.fields||{};if(th(u)!==th(f))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(f[m]===void 0||!cn(u[m],f[m])))return!1;return!0}(i,t);default:return tt(52216,{left:i})}}function Ks(i,t){return(i.values||[]).find(e=>cn(e,t))!==void 0}function qr(i,t){if(i===t)return 0;const e=ci(i),r=ci(t);if(e!==r)return ht(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ht(i.booleanValue,t.booleanValue);case 2:return function(a,u){const f=Ot(a.integerValue||a.doubleValue),m=Ot(u.integerValue||u.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(i,t);case 3:return nh(i.timestampValue,t.timestampValue);case 4:return nh(Gs(i),Gs(t));case 5:return Bc(i.stringValue,t.stringValue);case 6:return function(a,u){const f=ai(a),m=ai(u);return f.compareTo(m)}(i.bytesValue,t.bytesValue);case 7:return function(a,u){const f=a.split("/"),m=u.split("/");for(let g=0;g<f.length&&g<m.length;g++){const y=ht(f[g],m[g]);if(y!==0)return y}return ht(f.length,m.length)}(i.referenceValue,t.referenceValue);case 8:return function(a,u){const f=ht(Ot(a.latitude),Ot(u.latitude));return f!==0?f:ht(Ot(a.longitude),Ot(u.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return ih(i.arrayValue,t.arrayValue);case 10:return function(a,u){var E,R,O,F;const f=a.fields||{},m=u.fields||{},g=(E=f[Ta])==null?void 0:E.arrayValue,y=(R=m[Ta])==null?void 0:R.arrayValue,w=ht(((O=g==null?void 0:g.values)==null?void 0:O.length)||0,((F=y==null?void 0:y.values)==null?void 0:F.length)||0);return w!==0?w:ih(g,y)}(i.mapValue,t.mapValue);case 11:return function(a,u){if(a===ta.mapValue&&u===ta.mapValue)return 0;if(a===ta.mapValue)return 1;if(u===ta.mapValue)return-1;const f=a.fields||{},m=Object.keys(f),g=u.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let w=0;w<m.length&&w<y.length;++w){const E=Bc(m[w],y[w]);if(E!==0)return E;const R=qr(f[m[w]],g[y[w]]);if(R!==0)return R}return ht(m.length,y.length)}(i.mapValue,t.mapValue);default:throw tt(23264,{he:e})}}function nh(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ht(i,t);const e=oi(i),r=oi(t),s=ht(e.seconds,r.seconds);return s!==0?s:ht(e.nanos,r.nanos)}function ih(i,t){const e=i.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const a=qr(e[s],r[s]);if(a)return a}return ht(e.length,r.length)}function $r(i){return zc(i)}function zc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=oi(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ai(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Q.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",s=!0;for(const a of e.values||[])s?s=!1:r+=",",r+=zc(a);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${zc(e.fields[u])}`;return s+"}"}(i.mapValue):tt(61005,{value:i})}function aa(i){switch(ci(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ba(i);return t?16+aa(t):16;case 5:return 2*i.stringValue.length;case 6:return ai(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+aa(a),0)}(i.arrayValue);case 10:case 11:return function(r){let s=0;return fi(r.fields,(a,u)=>{s+=a.length+aa(u)}),s}(i.mapValue);default:throw tt(13486,{value:i})}}function rh(i,t){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`}}function qc(i){return!!i&&"integerValue"in i}function wl(i){return!!i&&"arrayValue"in i}function sh(i){return!!i&&"nullValue"in i}function oh(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ca(i){return!!i&&"mapValue"in i}function jg(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Jd])==null?void 0:r.stringValue)===Yd}function Us(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return fi(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Us(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Us(i.arrayValue.values[e]);return t}return{...i}}function Hg(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===$g}/**
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
 */class _e{constructor(t){this.value=t}static empty(){return new _e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ca(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Us(e)}setAll(t){let e=ee.emptyPath(),r={},s=[];t.forEach((u,f)=>{if(!e.isImmediateParentOf(f)){const m=this.getFieldsMap(e);this.applyChanges(m,r,s),r={},s=[],e=f.popLast()}u?r[f.lastSegment()]=Us(u):s.push(f.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,s)}delete(t){const e=this.field(t.popLast());ca(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return cn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ca(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){fi(e,(s,a)=>t[s]=a);for(const s of r)delete t[s]}clone(){return new _e(Us(this.value))}}function Xd(i){const t=[];return fi(i.fields,(e,r)=>{const s=new ee([e]);if(ca(r)){const a=Xd(r.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new Te(t)}/**
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
 */class oe{constructor(t,e,r,s,a,u,f){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=f}static newInvalidDocument(t){return new oe(t,0,st.min(),st.min(),st.min(),_e.empty(),0)}static newFoundDocument(t,e,r,s){return new oe(t,1,e,st.min(),r,s,0)}static newNoDocument(t,e){return new oe(t,2,e,st.min(),st.min(),_e.empty(),0)}static newUnknownDocument(t,e){return new oe(t,3,e,st.min(),st.min(),_e.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(st.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=st.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ea{constructor(t,e){this.position=t,this.inclusive=e}}function ah(i,t,e){let r=0;for(let s=0;s<i.position.length;s++){const a=t[s],u=i.position[s];if(a.field.isKeyField()?r=Q.comparator(Q.fromName(u.referenceValue),e.key):r=qr(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function ch(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!cn(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Qs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wg(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class tf{}class Bt extends tf{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Zg(t,e,r):e==="array-contains"?new Jg(t,r):e==="in"?new Yg(t,r):e==="not-in"?new Xg(t,r):e==="array-contains-any"?new ty(t,r):new Bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Kg(t,r):new Qg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(qr(e,this.value)):e!==null&&ci(this.value)===ci(e)&&this.matchesComparison(qr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends tf{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new He(t,e)}matches(t){return ef(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ef(i){return i.op==="and"}function nf(i){return Gg(i)&&ef(i)}function Gg(i){for(const t of i.filters)if(t instanceof He)return!1;return!0}function $c(i){if(i instanceof Bt)return i.field.canonicalString()+i.op.toString()+$r(i.value);if(nf(i))return i.filters.map(t=>$c(t)).join(",");{const t=i.filters.map(e=>$c(e)).join(",");return`${i.op}(${t})`}}function rf(i,t){return i instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(i,t):i instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,f)=>a&&rf(u,s.filters[f]),!0):!1}(i,t):void tt(19439)}function sf(i){return i instanceof Bt?function(e){return`${e.field.canonicalString()} ${e.op} ${$r(e.value)}`}(i):i instanceof He?function(e){return e.op.toString()+" {"+e.getFilters().map(sf).join(" ,")+"}"}(i):"Filter"}class Zg extends Bt{constructor(t,e,r){super(t,e,r),this.key=Q.fromName(r.referenceValue)}matches(t){const e=Q.comparator(t.key,this.key);return this.matchesComparison(e)}}class Kg extends Bt{constructor(t,e){super(t,"in",e),this.keys=of("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Qg extends Bt{constructor(t,e){super(t,"not-in",e),this.keys=of("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function of(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>Q.fromName(r.referenceValue))}class Jg extends Bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wl(e)&&Ks(e.arrayValue,this.value)}}class Yg extends Bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ks(this.value.arrayValue,e)}}class Xg extends Bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ks(this.value.arrayValue,e)}}class ty extends Bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wl(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ks(this.value.arrayValue,r))}}/**
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
 */class ey{constructor(t,e=null,r=[],s=[],a=null,u=null,f=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=f,this.Te=null}}function lh(i,t=null,e=[],r=[],s=null,a=null,u=null){return new ey(i,t,e,r,s,a,u)}function Tl(i){const t=ot(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>$c(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Ua(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>$r(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>$r(r)).join(",")),t.Te=e}return t.Te}function El(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!Wg(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!rf(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!ch(i.startAt,t.startAt)&&ch(i.endAt,t.endAt)}function jc(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Jr{constructor(t,e=null,r=[],s=[],a=null,u="F",f=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ny(i,t,e,r,s,a,u,f){return new Jr(i,t,e,r,s,a,u,f)}function za(i){return new Jr(i)}function uh(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function iy(i){return Q.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function af(i){return i.collectionGroup!==null}function Bs(i){const t=ot(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new $t(ee.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(f=f.add(g.field))})}),f})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new Qs(a,r))}),e.has(ee.keyField().canonicalString())||t.Ie.push(new Qs(ee.keyField(),r))}return t.Ie}function rn(i){const t=ot(i);return t.Ee||(t.Ee=ry(t,Bs(i))),t.Ee}function ry(i,t){if(i.limitType==="F")return lh(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Qs(s.field,a)});const e=i.endAt?new Ea(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new Ea(i.startAt.position,i.startAt.inclusive):null;return lh(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function Hc(i,t){const e=i.filters.concat([t]);return new Jr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),e,i.limit,i.limitType,i.startAt,i.endAt)}function sy(i,t){const e=i.explicitOrderBy.concat([t]);return new Jr(i.path,i.collectionGroup,e,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function Wc(i,t,e){return new Jr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function qa(i,t){return El(rn(i),rn(t))&&i.limitType===t.limitType}function cf(i){return`${Tl(rn(i))}|lt:${i.limitType}`}function Cr(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>sf(s)).join(", ")}]`),Ua(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>$r(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>$r(s)).join(",")),`Target(${r})`}(rn(i))}; limitType=${i.limitType})`}function $a(i,t){return t.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Q.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(i,t)&&function(r,s){for(const a of Bs(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(i,t)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(i,t)&&function(r,s){return!(r.startAt&&!function(u,f,m){const g=ah(u,f,m);return u.inclusive?g<=0:g<0}(r.startAt,Bs(r),s)||r.endAt&&!function(u,f,m){const g=ah(u,f,m);return u.inclusive?g>=0:g>0}(r.endAt,Bs(r),s))}(i,t)}function oy(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function lf(i){return(t,e)=>{let r=!1;for(const s of Bs(i)){const a=ay(s,t,e);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function ay(i,t,e){const r=i.field.isKeyField()?Q.comparator(t.key,e.key):function(a,u,f){const m=u.data.field(a),g=f.data.field(a);return m!==null&&g!==null?qr(m,g):tt(42886)}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return tt(19790,{direction:i.dir})}}/**
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
 */class Qi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){fi(this.inner,(e,r)=>{for(const[s,a]of r)t(s,a)})}isEmpty(){return Hd(this.inner)}size(){return this.innerSize}}/**
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
 */const cy=new xt(Q.comparator);function Nn(){return cy}const uf=new xt(Q.comparator);function Ms(...i){let t=uf;for(const e of i)t=t.insert(e.key,e);return t}function hf(i){let t=uf;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ui(){return zs()}function df(){return zs()}function zs(){return new Qi(i=>i.toString(),(i,t)=>i.isEqual(t))}const ly=new xt(Q.comparator),uy=new $t(Q.comparator);function dt(...i){let t=uy;for(const e of i)t=t.add(e);return t}const hy=new $t(ht);function dy(){return hy}/**
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
 */function Il(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:va(t)?"-0":t}}function ff(i){return{integerValue:""+i}}function fy(i,t){return Vg(t)?ff(t):Il(i,t)}/**
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
 */class ja{constructor(){this._=void 0}}function py(i,t,e){return i instanceof Js?function(s,a){const u={fields:{[Zd]:{stringValue:Gd},[Qd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&vl(a)&&(a=Ba(a)),a&&(u.fields[Kd]=a),{mapValue:u}}(e,t):i instanceof jr?mf(i,t):i instanceof Hr?_f(i,t):function(s,a){const u=pf(s,a),f=hh(u)+hh(s.Ae);return qc(u)&&qc(s.Ae)?ff(f):Il(s.serializer,f)}(i,t)}function my(i,t,e){return i instanceof jr?mf(i,t):i instanceof Hr?_f(i,t):e}function pf(i,t){return i instanceof Ia?function(r){return qc(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class Js extends ja{}class jr extends ja{constructor(t){super(),this.elements=t}}function mf(i,t){const e=gf(t);for(const r of i.elements)e.some(s=>cn(s,r))||e.push(r);return{arrayValue:{values:e}}}class Hr extends ja{constructor(t){super(),this.elements=t}}function _f(i,t){let e=gf(t);for(const r of i.elements)e=e.filter(s=>!cn(s,r));return{arrayValue:{values:e}}}class Ia extends ja{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function hh(i){return Ot(i.integerValue||i.doubleValue)}function gf(i){return wl(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class bl{constructor(t,e){this.field=t,this.transform=e}}function _y(i,t){return i.field.isEqual(t.field)&&function(r,s){return r instanceof jr&&s instanceof jr||r instanceof Hr&&s instanceof Hr?zr(r.elements,s.elements,cn):r instanceof Ia&&s instanceof Ia?cn(r.Ae,s.Ae):r instanceof Js&&s instanceof Js}(i.transform,t.transform)}class gy{constructor(t,e){this.version=t,this.transformResults=e}}class qe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function la(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Ha{}function yf(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new Al(i.key,qe.none()):new ro(i.key,i.data,qe.none());{const e=i.data,r=_e.empty();let s=new $t(ee.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new pi(i.key,r,new Te(s.toArray()),qe.none())}}function yy(i,t,e){i instanceof ro?function(s,a,u){const f=s.value.clone(),m=fh(s.fieldTransforms,a,u.transformResults);f.setAll(m),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(i,t,e):i instanceof pi?function(s,a,u){if(!la(s.precondition,a))return void a.convertToUnknownDocument(u.version);const f=fh(s.fieldTransforms,a,u.transformResults),m=a.data;m.setAll(vf(s)),m.setAll(f),a.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(i,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function qs(i,t,e,r){return i instanceof ro?function(a,u,f,m){if(!la(a.precondition,u))return f;const g=a.value.clone(),y=ph(a.fieldTransforms,m,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(i,t,e,r):i instanceof pi?function(a,u,f,m){if(!la(a.precondition,u))return f;const g=ph(a.fieldTransforms,m,u),y=u.data;return y.setAll(vf(a)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),f===null?null:f.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(i,t,e,r):function(a,u,f){return la(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(i,t,e)}function vy(i,t){let e=null;for(const r of i.fieldTransforms){const s=t.data.field(r.field),a=pf(r.transform,s||null);a!=null&&(e===null&&(e=_e.empty()),e.set(r.field,a))}return e||null}function dh(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zr(r,s,(a,u)=>_y(a,u))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class ro extends Ha{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class pi extends Ha{constructor(t,e,r,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function vf(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function fh(i,t,e){const r=new Map;It(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let s=0;s<e.length;s++){const a=i[s],u=a.transform,f=t.data.field(a.field);r.set(a.field,my(u,f,e[s]))}return r}function ph(i,t,e){const r=new Map;for(const s of i){const a=s.transform,u=e.data.field(s.field);r.set(s.field,py(a,u,t))}return r}class Al extends Ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wy extends Ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ty{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&yy(a,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=qs(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=qs(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=df();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let f=this.applyToLocalView(u,a.mutatedFields);f=e.has(s.key)?null:f;const m=yf(u,f);m!==null&&r.set(s.key,m),u.isValidDocument()||u.convertToNoDocument(st.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&zr(this.mutations,t.mutations,(e,r)=>dh(e,r))&&zr(this.baseMutations,t.baseMutations,(e,r)=>dh(e,r))}}class Pl{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){It(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return ly}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Pl(t,e,r,s)}}/**
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
 */class Ey{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Iy{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Ut,_t;function by(i){switch(i){case U.OK:return tt(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return tt(15467,{code:i})}}function wf(i){if(i===void 0)return Dn("GRPC error has no .code"),U.UNKNOWN;switch(i){case Ut.OK:return U.OK;case Ut.CANCELLED:return U.CANCELLED;case Ut.UNKNOWN:return U.UNKNOWN;case Ut.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ut.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ut.INTERNAL:return U.INTERNAL;case Ut.UNAVAILABLE:return U.UNAVAILABLE;case Ut.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ut.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ut.NOT_FOUND:return U.NOT_FOUND;case Ut.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ut.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ut.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ut.ABORTED:return U.ABORTED;case Ut.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ut.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ut.DATA_LOSS:return U.DATA_LOSS;default:return tt(39323,{code:i})}}(_t=Ut||(Ut={}))[_t.OK=0]="OK",_t[_t.CANCELLED=1]="CANCELLED",_t[_t.UNKNOWN=2]="UNKNOWN",_t[_t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_t[_t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_t[_t.NOT_FOUND=5]="NOT_FOUND",_t[_t.ALREADY_EXISTS=6]="ALREADY_EXISTS",_t[_t.PERMISSION_DENIED=7]="PERMISSION_DENIED",_t[_t.UNAUTHENTICATED=16]="UNAUTHENTICATED",_t[_t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_t[_t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_t[_t.ABORTED=10]="ABORTED",_t[_t.OUT_OF_RANGE=11]="OUT_OF_RANGE",_t[_t.UNIMPLEMENTED=12]="UNIMPLEMENTED",_t[_t.INTERNAL=13]="INTERNAL",_t[_t.UNAVAILABLE=14]="UNAVAILABLE",_t[_t.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ay(){return new TextEncoder}/**
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
 */const Py=new ni([4294967295,4294967295],0);function mh(i){const t=Ay().encode(i),e=new Nd;return e.update(t),new Uint8Array(e.digest())}function _h(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new ni([e,r],0),new ni([s,a],0)]}class Sl{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Os(`Invalid padding: ${e}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Os(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ni.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ni.fromNumber(r)));return s.compare(Py)===1&&(s=new ni([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=mh(t),[r,s]=_h(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);if(!this.we(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new Sl(a,s,e);return r.forEach(f=>u.insert(f)),u}insert(t){if(this.ge===0)return;const e=mh(t),[r,s]=_h(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class so{constructor(t,e,r,s,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,oo.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new so(st.min(),s,new xt(ht),Nn(),dt())}}class oo{constructor(t,e,r,s,a){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new oo(r,e,dt(),dt(),dt())}}/**
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
 */class ua{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Tf{constructor(t,e){this.targetId=t,this.Ce=e}}class Ef{constructor(t,e,r=ne.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class gh{constructor(){this.ve=0,this.Fe=yh(),this.Me=ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=dt(),e=dt(),r=dt();return this.Fe.forEach((s,a)=>{switch(a){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:tt(38017,{changeType:a})}}),new oo(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=yh()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,It(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Sy{constructor(t){this.Ge=t,this.ze=new Map,this.je=Nn(),this.Je=ea(),this.He=ea(),this.Ze=new xt(ht)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:tt(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const a=s.target;if(jc(a))if(r===0){const u=new Q(a.path);this.et(e,u,oe.newNoDocument(u,st.min()))}else It(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const f=this.ut(t),m=f?this.ct(f,t,u):1;if(m!==0){this.it(e);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=e;let u,f;try{u=ai(r).toUint8Array()}catch(m){if(m instanceof Wd)return Wi("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Sl(u,s,a)}catch(m){return Wi(m instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(a=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(f)||(this.et(e,a,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((a,u)=>{const f=this.ot(u);if(f){if(a.current&&jc(f.target)){const m=new Q(f.target.path);this.It(m).has(u)||this.Et(u,m)||this.et(u,m,oe.newNoDocument(m,t))}a.Be&&(e.set(u,a.ke()),a.Ke())}});let r=dt();this.He.forEach((a,u)=>{let f=!0;u.forEachWhile(m=>{const g=this.ot(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(a))}),this.je.forEach((a,u)=>u.setReadTime(t));const s=new so(t,e,this.Ze,this.je,r);return this.je=Nn(),this.Je=ea(),this.He=ea(),this.Ze=new xt(ht),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new gh,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new $t(ht),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new $t(ht),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||H("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new gh),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ea(){return new xt(Q.comparator)}function yh(){return new xt(Q.comparator)}const Cy={asc:"ASCENDING",desc:"DESCENDING"},Ry={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ky={and:"AND",or:"OR"};class Ly{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Gc(i,t){return i.useProto3Json||Ua(t)?t:{value:t}}function ba(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function If(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function xy(i,t){return ba(i,t.toTimestamp())}function sn(i){return It(!!i,49232),st.fromTimestamp(function(e){const r=oi(e);return new kt(r.seconds,r.nanos)}(i))}function Cl(i,t){return Zc(i,t).canonicalString()}function Zc(i,t){const e=function(s){return new St(["projects",s.projectId,"databases",s.database])}(i).child("documents");return t===void 0?e:e.child(t)}function bf(i){const t=St.fromString(i);return It(Rf(t),10190,{key:t.toString()}),t}function Kc(i,t){return Cl(i.databaseId,t.path)}function bc(i,t){const e=bf(t);if(e.get(1)!==i.databaseId.projectId)throw new j(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new j(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Q(Pf(e))}function Af(i,t){return Cl(i.databaseId,t)}function Dy(i){const t=bf(i);return t.length===4?St.emptyPath():Pf(t)}function Qc(i){return new St(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Pf(i){return It(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function vh(i,t,e){return{name:Kc(i,t),fields:e.value.mapValue.fields}}function Ny(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:tt(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],a=function(g,y){return g.useProto3Json?(It(y===void 0||typeof y=="string",58123),ne.fromBase64String(y||"")):(It(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ne.fromUint8Array(y||new Uint8Array))}(i,t.targetChange.resumeToken),u=t.targetChange.cause,f=u&&function(g){const y=g.code===void 0?U.UNKNOWN:wf(g.code);return new j(y,g.message||"")}(u);e=new Ef(r,s,a,f||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bc(i,r.document.name),a=sn(r.document.updateTime),u=r.document.createTime?sn(r.document.createTime):st.min(),f=new _e({mapValue:{fields:r.document.fields}}),m=oe.newFoundDocument(s,a,u,f),g=r.targetIds||[],y=r.removedTargetIds||[];e=new ua(g,y,m.key,m)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bc(i,r.document),a=r.readTime?sn(r.readTime):st.min(),u=oe.newNoDocument(s,a),f=r.removedTargetIds||[];e=new ua([],f,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bc(i,r.document),a=r.removedTargetIds||[];e=new ua([],a,s,null)}else{if(!("filter"in t))return tt(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new Iy(s,a),f=r.targetId;e=new Tf(f,u)}}return e}function My(i,t){let e;if(t instanceof ro)e={update:vh(i,t.key,t.value)};else if(t instanceof Al)e={delete:Kc(i,t.key)};else if(t instanceof pi)e={update:vh(i,t.key,t.data),updateMask:jy(t.fieldMask)};else{if(!(t instanceof wy))return tt(16599,{dt:t.type});e={verify:Kc(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(a,u){const f=u.transform;if(f instanceof Js)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof jr)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Hr)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Ia)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw tt(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:xy(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:tt(27497)}(i,t.precondition)),e}function Oy(i,t){return i&&i.length>0?(It(t!==void 0,14353),i.map(e=>function(s,a){let u=s.updateTime?sn(s.updateTime):sn(a);return u.isEqual(st.min())&&(u=sn(a)),new gy(u,s.transformResults||[])}(e,t))):[]}function Vy(i,t){return{documents:[Af(i,t.path)]}}function Fy(i,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Af(i,s);const a=function(g){if(g.length!==0)return Cf(He.create(g,"and"))}(t.filters);a&&(e.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(y=>function(E){return{field:Rr(E.field),direction:zy(E.dir)}}(y))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const f=Gc(i,t.limit);return f!==null&&(e.structuredQuery.limit=f),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ft:e,parent:s}}function Uy(i){let t=Dy(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){It(r===1,65062);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let a=[];e.where&&(a=function(w){const E=Sf(w);return E instanceof He&&nf(E)?E.getFilters():[E]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(E=>function(O){return new Qs(kr(O.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(e.orderBy));let f=null;e.limit&&(f=function(w){let E;return E=typeof w=="object"?w.value:w,Ua(E)?null:E}(e.limit));let m=null;e.startAt&&(m=function(w){const E=!!w.before,R=w.values||[];return new Ea(R,E)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const E=!w.before,R=w.values||[];return new Ea(R,E)}(e.endAt)),ny(t,s,u,a,f,"F",m,g)}function By(i,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tt(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sf(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=kr(e.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(e.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=kr(e.unaryFilter.field);return Bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=kr(e.unaryFilter.field);return Bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return tt(61313);default:return tt(60726)}}(i):i.fieldFilter!==void 0?function(e){return Bt.create(kr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return tt(58110);default:return tt(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return He.create(e.compositeFilter.filters.map(r=>Sf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return tt(1026)}}(e.compositeFilter.op))}(i):tt(30097,{filter:i})}function zy(i){return Cy[i]}function qy(i){return Ry[i]}function $y(i){return ky[i]}function Rr(i){return{fieldPath:i.canonicalString()}}function kr(i){return ee.fromServerFormat(i.fieldPath)}function Cf(i){return i instanceof Bt?function(e){if(e.op==="=="){if(oh(e.value))return{unaryFilter:{field:Rr(e.field),op:"IS_NAN"}};if(sh(e.value))return{unaryFilter:{field:Rr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(oh(e.value))return{unaryFilter:{field:Rr(e.field),op:"IS_NOT_NAN"}};if(sh(e.value))return{unaryFilter:{field:Rr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rr(e.field),op:qy(e.op),value:e.value}}}(i):i instanceof He?function(e){const r=e.getFilters().map(s=>Cf(s));return r.length===1?r[0]:{compositeFilter:{op:$y(e.op),filters:r}}}(i):tt(54877,{filter:i})}function jy(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Rf(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function kf(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
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
 */class An{constructor(t,e,r,s,a=st.min(),u=st.min(),f=ne.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(t){return new An(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new An(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Hy{constructor(t){this.yt=t}}function Wy(i){const t=Uy({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Wc(t,t.limit,"L"):t}/**
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
 */class Gy{constructor(){this.bn=new Zy}addToCollectionParentIndex(t,e){return this.bn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(si.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(si.min())}updateCollectionGroup(t,e,r){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class Zy{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new $t(St.comparator),a=!s.has(r);return this.index[e]=s.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new $t(St.comparator)).toArray()}}/**
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
 */const wh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lf=41943040;class me{static withCacheSize(t){return new me(t,me.DEFAULT_COLLECTION_PERCENTILE,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */me.DEFAULT_COLLECTION_PERCENTILE=10,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,me.DEFAULT=new me(Lf,me.DEFAULT_COLLECTION_PERCENTILE,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),me.DISABLED=new me(-1,0,0);/**
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
 */class li{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new li(0)}static ar(){return new li(-1)}}/**
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
 */const Th="LruGarbageCollector",Ky=1048576;function Eh([i,t],[e,r]){const s=ht(i,e);return s===0?ht(t,r):s}class Qy{constructor(t){this.Pr=t,this.buffer=new $t(Eh),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Eh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Jy{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){H(Th,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Qr(e)?H(Th,"Ignoring IndexedDB error during garbage collection: ",e):await Kr(e)}await this.Ar(3e5)})}}class Yy{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return B.resolve(Fa.ce);const r=new Qy(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(wh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wh):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,a,u,f,m,g;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,f=Date.now(),this.removeTargets(t,r,e))).next(w=>(a=w,m=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(g=Date.now(),Sr()<=pt.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(f-u)+`ms
	Removed ${a} targets in `+(m-f)+`ms
	Removed ${w} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function Xy(i,t){return new Yy(i,t)}/**
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
 */class tv{constructor(){this.changes=new Qi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?B.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ev{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class nv{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&qs(r.mutation,s,Te.empty(),kt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,dt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=dt()){const s=Ui();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(a=>{let u=Ms();return a.forEach((f,m)=>{u=u.insert(f,m.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Ui();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,dt()))}populateOverlays(t,e,r){const s=[];return r.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,f)=>{e.set(u,f)})})}computeViews(t,e,r,s){let a=Nn();const u=zs(),f=function(){return zs()}();return e.forEach((m,g)=>{const y=r.get(g.key);s.has(g.key)&&(y===void 0||y.mutation instanceof pi)?a=a.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),qs(y.mutation,g,y.mutation.getFieldMask(),kt.now())):u.set(g.key,Te.empty())}),this.recalculateAndSaveOverlays(t,a).next(m=>(m.forEach((g,y)=>u.set(g,y)),e.forEach((g,y)=>f.set(g,new ev(y,u.get(g)??null))),f))}recalculateAndSaveOverlays(t,e){const r=zs();let s=new xt((u,f)=>u-f),a=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const f of u)f.keys().forEach(m=>{const g=e.get(m);if(g===null)return;let y=r.get(m)||Te.empty();y=f.applyToLocalView(g,y),r.set(m,y);const w=(s.get(f.batchId)||dt()).add(m);s=s.insert(f.batchId,w)})}).next(()=>{const u=[],f=s.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),g=m.key,y=m.value,w=df();y.forEach(E=>{if(!a.has(E)){const R=yf(e.get(E),r.get(E));R!==null&&w.set(E,R),a=a.add(E)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return B.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return iy(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):af(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-a.size):B.resolve(Ui());let f=Ws,m=a;return u.next(g=>B.forEach(g,(y,w)=>(f<w.largestBatchId&&(f=w.largestBatchId),a.get(y)?B.resolve():this.remoteDocumentCache.getEntry(t,y).next(E=>{m=m.insert(y,E)}))).next(()=>this.populateOverlays(t,g,a)).next(()=>this.computeViews(t,m,g,dt())).next(y=>({batchId:f,changes:hf(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Q(e)).next(r=>{let s=Ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const a=e.collectionGroup;let u=Ms();return this.indexManager.getCollectionParents(t,a).next(f=>B.forEach(f,m=>{const g=function(w,E){return new Jr(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,m.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,r,s).next(y=>{y.forEach((w,E)=>{u=u.insert(w,E)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,s))).next(u=>{a.forEach((m,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,oe.newInvalidDocument(y)))});let f=Ms();return u.forEach((m,g)=>{const y=a.get(m);y!==void 0&&qs(y.mutation,g,Te.empty(),kt.now()),$a(e,g)&&(f=f.insert(m,g))}),f})}}/**
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
 */class iv{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return B.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:sn(s.createTime)}}(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:Wy(s.bundledQuery),readTime:sn(s.readTime)}}(e)),B.resolve()}}/**
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
 */class rv{constructor(){this.overlays=new xt(Q.comparator),this.Lr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ui();return B.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,a)=>{this.St(t,e,a)}),B.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),B.resolve()}getOverlaysForCollection(t,e,r){const s=Ui(),a=e.length+1,u=new Q(e.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const m=f.getNext().value,g=m.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&m.largestBatchId>r&&s.set(m.getKey(),m)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let a=new xt((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let y=a.get(g.largestBatchId);y===null&&(y=Ui(),a=a.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=Ui(),m=a.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,y)=>f.set(g,y)),!(f.size()>=s)););return B.resolve(f)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Ey(e,r));let a=this.Lr.get(e);a===void 0&&(a=dt(),this.Lr.set(e,a)),this.Lr.set(e,a.add(r.key))}}/**
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
 */class sv{constructor(){this.sessionToken=ne.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
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
 */class Rl{constructor(){this.kr=new $t(Kt.Kr),this.qr=new $t(Kt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Kt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new Kt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new Q(new St([])),r=new Kt(e,t),s=new Kt(e,t+1),a=[];return this.qr.forEachInRange([r,s],u=>{this.Wr(u),a.push(u.key)}),a}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new Q(new St([])),r=new Kt(e,t),s=new Kt(e,t+1);let a=dt();return this.qr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Kt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Kt{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return Q.comparator(t.key,e.key)||ht(t.Jr,e.Jr)}static Ur(t,e){return ht(t.Jr,e.Jr)||Q.comparator(t.key,e.key)}}/**
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
 */class ov{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new $t(Kt.Kr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ty(a,e,r,s);this.mutationQueue.push(u);for(const f of s)this.Hr=this.Hr.add(new Kt(f.key,a)),this.indexManager.addToCollectionParentIndex(t,f.key.path.popLast());return B.resolve(u)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),a=s<0?0:s;return B.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?yl:this.Yn-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Kt(e,0),s=new Kt(e,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,s],u=>{const f=this.Zr(u.Jr);a.push(f)}),B.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new $t(ht);return e.forEach(s=>{const a=new Kt(s,0),u=new Kt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,u],f=>{r=r.add(f.Jr)})}),B.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let a=r;Q.isDocumentKey(a)||(a=a.child(""));const u=new Kt(new Q(a),0);let f=new $t(ht);return this.Hr.forEachWhile(m=>{const g=m.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(f=f.add(m.Jr)),!0)},u),B.resolve(this.Yr(f))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){It(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return B.forEach(e.mutations,s=>{const a=new Kt(s.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new Kt(e,0),s=this.Hr.firstAfterOrEqual(r);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class av{constructor(t){this.ti=t,this.docs=function(){return new xt(Q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),a=s?s.size:0,u=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return B.resolve(r?r.document.mutableCopy():oe.newInvalidDocument(e))}getEntries(t,e){let r=Nn();return e.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():oe.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let a=Nn();const u=e.path,f=new Q(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Dg(xg(y),r)<=0||(s.has(y.key)||$a(e,y))&&(a=a.insert(y.key,y.mutableCopy()))}return B.resolve(a)}getAllFromCollectionGroup(t,e,r,s){tt(9500)}ni(t,e){return B.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new cv(this)}getSize(t){return B.resolve(this.size)}}class cv extends tv{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),B.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class lv{constructor(t){this.persistence=t,this.ri=new Qi(e=>Tl(e),El),this.lastRemoteSnapshotVersion=st.min(),this.highestTargetId=0,this.ii=0,this.si=new Rl,this.targetCount=0,this.oi=li._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),B.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new li(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.lr(e),B.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,r){let s=0;const a=[];return this.ri.forEach((u,f)=>{f.sequenceNumber<=e&&r.get(f.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(t,f.targetId)),s++)}),B.waitFor(a).next(()=>s)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return B.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),B.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),B.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return B.resolve(r)}containsKey(t,e){return B.resolve(this.si.containsKey(e))}}/**
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
 */class xf{constructor(t,e){this._i={},this.overlays={},this.ai=new Fa(0),this.ui=!1,this.ui=!0,this.ci=new sv,this.referenceDelegate=t(this),this.li=new lv(this),this.indexManager=new Gy,this.remoteDocumentCache=function(s){return new av(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Hy(e),this.Pi=new iv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new ov(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){H("MemoryPersistence","Starting transaction:",t);const s=new uv(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(a=>this.referenceDelegate.Ii(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(t,e){return B.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class uv extends Mg{constructor(t){super(),this.currentSequenceNumber=t}}class kl{constructor(t){this.persistence=t,this.Ri=new Rl,this.Ai=null}static Vi(t){return new kl(t)}get di(){if(this.Ai)return this.Ai;throw tt(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),B.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(t,s).next(a=>{a||e.removeEntry(s,st.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return B.or([()=>B.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Aa{constructor(t,e){this.persistence=t,this.fi=new Qi(r=>Fg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Xy(this,e)}static Vi(t,e){return new Aa(t,e)}Ti(){}Ii(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return B.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(a=>a?B.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ni(t,u=>this.wr(t,u,e).next(f=>{f||(r++,a.removeEntry(u,st.min()))})).next(()=>a.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),B.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),B.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=aa(t.data.value)),e}wr(t,e,r){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ll{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=dt(),s=dt();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ll(t,e.fromCache,r,s)}}/**
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
 */class hv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class dv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Xm()?8:Og(ae())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const a={result:null};return this.gs(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ps(t,e,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new hv;return this.ys(t,e,u).next(f=>{if(a.result=f,this.As)return this.ws(t,e,u,f.size)})}).next(()=>a.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Sr()<=pt.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Cr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Sr()<=pt.DEBUG&&H("QueryEngine","Query:",Cr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Sr()<=pt.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Cr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,rn(e))):B.resolve())}gs(t,e){if(uh(e))return B.resolve(null);let r=rn(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Wc(e,null,"F"),r=rn(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=dt(...a);return this.fs.getDocuments(t,u).next(f=>this.indexManager.getMinOffset(t,r).next(m=>{const g=this.Ss(e,f);return this.bs(e,g,u,m.readTime)?this.gs(t,Wc(e,null,"F")):this.Ds(t,g,e,m)}))})))}ps(t,e,r,s){return uh(e)||s.isEqual(st.min())?B.resolve(null):this.fs.getDocuments(t,r).next(a=>{const u=this.Ss(e,a);return this.bs(e,u,r,s)?B.resolve(null):(Sr()<=pt.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(e)),this.Ds(t,u,e,Lg(s,Ws)).next(f=>f))})}Ss(t,e){let r=new $t(lf(t));return e.forEach((s,a)=>{$a(t,a)&&(r=r.add(a))}),r}bs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ys(t,e,r){return Sr()<=pt.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Cr(e)),this.fs.getDocumentsMatchingQuery(t,e,si.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */const xl="LocalStore",fv=3e8;class pv{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new xt(ht),this.Fs=new Qi(a=>Tl(a),El),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function mv(i,t,e,r){return new pv(i,t,e,r)}async function Df(i,t){const e=ot(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],f=[];let m=dt();for(const g of s){u.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of a){f.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return e.localDocuments.getDocuments(r,m).next(g=>({Ns:g,removedBatchIds:u,addedBatchIds:f}))})})}function _v(i,t){const e=ot(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),a=e.xs.newChangeBuffer({trackRemovals:!0});return function(f,m,g,y){const w=g.batch,E=w.keys();let R=B.resolve();return E.forEach(O=>{R=R.next(()=>y.getEntry(m,O)).next(F=>{const q=g.docVersions.get(O);It(q!==null,48541),F.version.compareTo(q)<0&&(w.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),y.addEntry(F)))})}),R.next(()=>f.mutationQueue.removeMutationBatch(m,w))}(e,r,t,a).next(()=>a.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let m=dt();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(m=m.add(f.batch.mutations[g].key));return m}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Nf(i){const t=ot(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function gv(i,t){const e=ot(i),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const f=[];t.targetChanges.forEach((y,w)=>{const E=s.get(w);if(!E)return;f.push(e.li.removeMatchingKeys(a,y.removedDocuments,w).next(()=>e.li.addMatchingKeys(a,y.addedDocuments,w)));let R=E.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(w)!==null?R=R.withResumeToken(ne.EMPTY_BYTE_STRING,st.min()).withLastLimboFreeSnapshotVersion(st.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,r)),s=s.insert(w,R),function(F,q,J){return F.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=fv?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(E,R,y)&&f.push(e.li.updateTargetData(a,R))});let m=Nn(),g=dt();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&f.push(e.persistence.referenceDelegate.updateLimboDocument(a,y))}),f.push(yv(a,u,t.documentUpdates).next(y=>{m=y.Bs,g=y.Ls})),!r.isEqual(st.min())){const y=e.li.getLastRemoteSnapshotVersion(a).next(w=>e.li.setTargetsMetadata(a,a.currentSequenceNumber,r));f.push(y)}return B.waitFor(f).next(()=>u.apply(a)).next(()=>e.localDocuments.getLocalViewOfDocuments(a,m,g)).next(()=>m)}).then(a=>(e.vs=s,a))}function yv(i,t,e){let r=dt(),s=dt();return e.forEach(a=>r=r.add(a)),t.getEntries(i,r).next(a=>{let u=Nn();return e.forEach((f,m)=>{const g=a.get(f);m.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(f)),m.isNoDocument()&&m.version.isEqual(st.min())?(t.removeEntry(f,m.readTime),u=u.insert(f,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),u=u.insert(f,m)):H(xl,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",m.version)}),{Bs:u,Ls:s}})}function vv(i,t){const e=ot(i);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=yl),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function wv(i,t){const e=ot(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(a=>a?(s=a,B.resolve(s)):e.li.allocateTargetId(r).next(u=>(s=new An(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function Jc(i,t,e){const r=ot(i),s=r.vs.get(t),a=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Qr(u))throw u;H(xl,`Failed to update sequence numbers for target ${t}: ${u}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function Ih(i,t,e){const r=ot(i);let s=st.min(),a=dt();return r.persistence.runTransaction("Execute query","readwrite",u=>function(m,g,y){const w=ot(m),E=w.Fs.get(y);return E!==void 0?B.resolve(w.vs.get(E)):w.li.getTargetData(g,y)}(r,u,rn(t)).next(f=>{if(f)return s=f.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,f.targetId).next(m=>{a=m})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?s:st.min(),e?a:dt())).next(f=>(Tv(r,oy(t),f),{documents:f,ks:a})))}function Tv(i,t,e){let r=i.Ms.get(t)||st.min();e.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),i.Ms.set(t,r)}class bh{constructor(){this.activeTargetIds=dy()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ev{constructor(){this.vo=new bh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new bh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Iv{Mo(t){}shutdown(){}}/**
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
 */const Ah="ConnectivityMonitor";class Ph{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Ah,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){H(Ah,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let na=null;function Yc(){return na===null?na=function(){return 268435456+Math.round(2147483648*Math.random())}():na++,"0x"+na.toString(16)}/**
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
 */const Ac="RestConnection",bv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Av{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===wa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,a){const u=Yc(),f=this.Qo(t,e.toUriEncodedString());H(Ac,`Sending RPC '${t}' ${u}:`,f,r);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(m,s,a);const{host:g}=new URL(f),y=no(g);return this.zo(t,f,m,r,y).then(w=>(H(Ac,`Received RPC '${t}' ${u}: `,w),w),w=>{throw Wi(Ac,`RPC '${t}' ${u} failed with error: `,w,"url: ",f,"request:",r),w})}jo(t,e,r,s,a,u){return this.Wo(t,e,r,s,a)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,a)=>t[a]=s),r&&r.headers.forEach((s,a)=>t[a]=s)}Qo(t,e){const r=bv[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Pv{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const re="WebChannelConnection",ks=(i,t,e)=>{i.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Dr extends Av{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Dr.c_){const t=Fd();ks(t,Vd.STAT_EVENT,e=>{e.stat===Uc.PROXY?H(re,"STAT_EVENT: detected buffering proxy"):e.stat===Uc.NOPROXY&&H(re,"STAT_EVENT: detected no buffering proxy")}),Dr.c_=!0}}zo(t,e,r,s,a){const u=Yc();return new Promise((f,m)=>{const g=new Md;g.setWithCredentials(!0),g.listenOnce(Od.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case oa.NO_ERROR:const w=g.getResponseJson();H(re,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),f(w);break;case oa.TIMEOUT:H(re,`RPC '${t}' ${u} timed out`),m(new j(U.DEADLINE_EXCEEDED,"Request time out"));break;case oa.HTTP_ERROR:const E=g.getStatus();if(H(re,`RPC '${t}' ${u} failed with status:`,E,"response text:",g.getResponseText()),E>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R==null?void 0:R.error;if(O&&O.status&&O.message){const F=function(J){const at=J.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(at)>=0?at:U.UNKNOWN}(O.status);m(new j(F,O.message))}else m(new j(U.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new j(U.UNAVAILABLE,"Connection failed."));break;default:tt(9055,{l_:t,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{H(re,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(s);H(re,`RPC '${t}' ${u} sending request:`,s),g.send(e,"POST",y,r,15)})}T_(t,e,r){const s=Yc(),a=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const g=a.join("");H(re,`Creating RPC '${t}' stream ${s}: ${g}`,f);const y=u.createWebChannel(g,f);this.I_(y);let w=!1,E=!1;const R=new Pv({Jo:O=>{E?H(re,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(w||(H(re,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),H(re,`RPC '${t}' stream ${s} sending:`,O),y.send(O))},Ho:()=>y.close()});return ks(y,Ns.EventType.OPEN,()=>{E||(H(re,`RPC '${t}' stream ${s} transport opened.`),R.i_())}),ks(y,Ns.EventType.CLOSE,()=>{E||(E=!0,H(re,`RPC '${t}' stream ${s} transport closed`),R.o_(),this.E_(y))}),ks(y,Ns.EventType.ERROR,O=>{E||(E=!0,Wi(re,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),R.o_(new j(U.UNAVAILABLE,"The operation could not be completed")))}),ks(y,Ns.EventType.MESSAGE,O=>{var F;if(!E){const q=O.data[0];It(!!q,16349);const J=q,at=(J==null?void 0:J.error)||((F=J[0])==null?void 0:F.error);if(at){H(re,`RPC '${t}' stream ${s} received error:`,at);const K=at.status;let ft=function(C){const I=Ut[C];if(I!==void 0)return wf(I)}(K),gt=at.message;K==="NOT_FOUND"&&gt.includes("database")&&gt.includes("does not exist")&&gt.includes(this.databaseId.database)&&Wi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ft===void 0&&(ft=U.INTERNAL,gt="Unknown error status: "+K+" with message "+at.message),E=!0,R.o_(new j(ft,gt)),y.close()}else H(re,`RPC '${t}' stream ${s} received:`,q),R.__(q)}}),Dr.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Ud()}}/**
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
 */function Sv(i){return new Dr(i)}function Pc(){return typeof document<"u"?document:null}/**
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
 */function Wa(i){return new Ly(i,!0)}/**
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
 */Dr.c_=!1;class Mf{constructor(t,e,r=1e3,s=1.5,a=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Sh="PersistentStream";class Of{constructor(t,e,r,s,a,u,f,m){this.Ci=t,this.S_=r,this.b_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Mf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===U.RESOURCE_EXHAUSTED?(Dn(e.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new j(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return H(Sh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(H(Sh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Cv extends Of{constructor(t,e,r,s,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Ny(this.serializer,t),r=function(a){if(!("targetChange"in a))return st.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?st.min():u.readTime?sn(u.readTime):st.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=Qc(this.serializer),e.addTarget=function(a,u){let f;const m=u.target;if(f=jc(m)?{documents:Vy(a,m)}:{query:Fy(a,m).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=If(a,u.resumeToken);const g=Gc(a,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(st.min())>0){f.readTime=ba(a,u.snapshotVersion.toTimestamp());const g=Gc(a,u.expectedCount);g!==null&&(f.expectedCount=g)}return f}(this.serializer,t);const r=By(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Qc(this.serializer),e.removeTarget=t,this.K_(e)}}class Rv extends Of{constructor(t,e,r,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return It(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,It(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){It(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Oy(t.writeResults,t.commitTime),r=sn(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Qc(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>My(this.serializer,r))};this.K_(e)}}/**
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
 */class kv{}class Lv extends kv{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,Zc(e,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(U.UNKNOWN,a.toString())})}jo(t,e,r,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.jo(t,Zc(e,r),s,u,f,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new j(U.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function xv(i,t,e,r){return new Lv(i,t,e,r)}class Dv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Dn(e),this.aa=!1):H("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ln="RemoteStore";class Nv{constructor(t,e,r,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new li(1e3),this.Va=new li(1001),this.da=new Set,this.ma=[],this.fa=a,this.fa.Mo(u=>{r.enqueueAndForget(async()=>{Ji(this)&&(H(ln,"Restarting streams for network reachability change."),await async function(m){const g=ot(m);g.da.add(4),await ao(g),g.ga.set("Unknown"),g.da.delete(4),await Ga(g)}(this))})}),this.ga=new Dv(r,s)}}async function Ga(i){if(Ji(i))for(const t of i.ma)await t(!0)}async function ao(i){for(const t of i.ma)await t(!1)}function Xc(i,t){return i.Ea.get(t)||void 0}function Vf(i,t){const e=ot(i),r=Xc(e,t.targetId);if(r!==void 0&&e.Ia.has(r))return;const s=function(f,m){const g=Xc(f,m);g!==void 0&&f.Ra.delete(g);const y=function(E,R){return R%2!=0?E.Va.next():E.Aa.next()}(f,m);return f.Ea.set(m,y),f.Ra.set(y,m),y}(e,t.targetId);H(ln,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const a=new An(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(s,a),Ol(e)?Ml(e):Yr(e).O_()&&Nl(e,a)}function Dl(i,t){const e=ot(i),r=Yr(e),s=Xc(e,t);H(ln,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ia.delete(s),e.Ea.delete(t),e.Ra.delete(s),r.O_()&&Ff(e,s),e.Ia.size===0&&(r.O_()?r.L_():Ji(e)&&e.ga.set("Unknown"))}function Nl(i,t){if(i.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(st.min())>0){const e=i.Ra.get(t.targetId);if(e===void 0)return void H(ln,"SDK target ID not found for remote ID: "+t.targetId);const r=i.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}Yr(i).Z_(t)}function Ff(i,t){i.pa.$e(t),Yr(i).X_(t)}function Ml(i){i.pa=new Sy({getRemoteKeysForTarget:t=>{const e=i.Ra.get(t);return e!==void 0?i.remoteSyncer.getRemoteKeysForTarget(e):dt()},At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),Yr(i).start(),i.ga.ua()}function Ol(i){return Ji(i)&&!Yr(i).x_()&&i.Ia.size>0}function Ji(i){return ot(i).da.size===0}function Uf(i){i.pa=void 0}async function Mv(i){i.ga.set("Online")}async function Ov(i){i.Ia.forEach((t,e)=>{Nl(i,t)})}async function Vv(i,t){Uf(i),Ol(i)?(i.ga.ha(t),Ml(i)):i.ga.set("Unknown")}async function Fv(i,t,e){if(i.ga.set("Online"),t instanceof Ef&&t.state===2&&t.cause)try{await async function(s,a){const u=a.cause;for(const f of a.targetIds){if(s.Ia.has(f)){const m=s.Ra.get(f);m!==void 0&&(await s.remoteSyncer.rejectListen(m,u),s.Ea.delete(m),s.Ra.delete(f)),s.Ia.delete(f)}s.pa.removeTarget(f)}}(i,t)}catch(r){H(ln,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Pa(i,r)}else if(t instanceof ua?i.pa.Xe(t):t instanceof Tf?i.pa.st(t):i.pa.tt(t),!e.isEqual(st.min()))try{const r=await Nf(i.localStore);e.compareTo(r)>=0&&await function(a,u){const f=a.pa.Tt(u);f.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=a.Ia.get(y);w&&a.Ia.set(y,w.withResumeToken(g.resumeToken,u))}}),f.targetMismatches.forEach((g,y)=>{const w=a.Ia.get(g);if(!w)return;a.Ia.set(g,w.withResumeToken(ne.EMPTY_BYTE_STRING,w.snapshotVersion)),Ff(a,g);const E=new An(w.target,g,y,w.sequenceNumber);Nl(a,E)});const m=function(y,w){const E=new Map;w.targetChanges.forEach((O,F)=>{const q=y.Ra.get(F);q!==void 0&&E.set(q,O)});let R=new xt(ht);return w.targetMismatches.forEach((O,F)=>{const q=y.Ra.get(O);q!==void 0&&(R=R.insert(q,F))}),new so(w.snapshotVersion,E,R,w.documentUpdates,w.resolvedLimboDocuments)}(a,f);return a.remoteSyncer.applyRemoteEvent(m)}(i,e)}catch(r){H(ln,"Failed to raise snapshot:",r),await Pa(i,r)}}async function Pa(i,t,e){if(!Qr(t))throw t;i.da.add(1),await ao(i),i.ga.set("Offline"),e||(e=()=>Nf(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{H(ln,"Retrying IndexedDB access"),await e(),i.da.delete(1),await Ga(i)})}function Bf(i,t){return t().catch(e=>Pa(i,e,t))}async function Za(i){const t=ot(i),e=ui(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:yl;for(;Uv(t);)try{const s=await vv(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Bv(t,s)}catch(s){await Pa(t,s)}zf(t)&&qf(t)}function Uv(i){return Ji(i)&&i.Ta.length<10}function Bv(i,t){i.Ta.push(t);const e=ui(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function zf(i){return Ji(i)&&!ui(i).x_()&&i.Ta.length>0}function qf(i){ui(i).start()}async function zv(i){ui(i).ra()}async function qv(i){const t=ui(i);for(const e of i.Ta)t.ea(e.mutations)}async function $v(i,t,e){const r=i.Ta.shift(),s=Pl.from(r,t,e);await Bf(i,()=>i.remoteSyncer.applySuccessfulWrite(s)),await Za(i)}async function jv(i,t){t&&ui(i).Y_&&await async function(r,s){if(function(u){return by(u)&&u!==U.ABORTED}(s.code)){const a=r.Ta.shift();ui(r).B_(),await Bf(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Za(r)}}(i,t),zf(i)&&qf(i)}async function Ch(i,t){const e=ot(i);e.asyncQueue.verifyOperationInProgress(),H(ln,"RemoteStore received new credentials");const r=Ji(e);e.da.add(3),await ao(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await Ga(e)}async function Hv(i,t){const e=ot(i);t?(e.da.delete(2),await Ga(e)):t||(e.da.add(2),await ao(e),e.ga.set("Unknown"))}function Yr(i){return i.ya||(i.ya=function(e,r,s){const a=ot(e);return a.sa(),new Cv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:Mv.bind(null,i),Yo:Ov.bind(null,i),t_:Vv.bind(null,i),H_:Fv.bind(null,i)}),i.ma.push(async t=>{t?(i.ya.B_(),Ol(i)?Ml(i):i.ga.set("Unknown")):(await i.ya.stop(),Uf(i))})),i.ya}function ui(i){return i.wa||(i.wa=function(e,r,s){const a=ot(e);return a.sa(),new Rv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:zv.bind(null,i),t_:jv.bind(null,i),ta:qv.bind(null,i),na:$v.bind(null,i)}),i.ma.push(async t=>{t?(i.wa.B_(),await Za(i)):(await i.wa.stop(),i.Ta.length>0&&(H(ln,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.wa}/**
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
 */class Vl{constructor(t,e,r,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Cn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,a){const u=Date.now()+r,f=new Vl(t,e,u,s,a);return f.start(r),f}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fl(i,t){if(Dn("AsyncQueue",`${t}: ${i}`),Qr(i))return new j(U.UNAVAILABLE,`${t}: ${i}`);throw i}/**
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
 */class Nr{static emptySet(t){return new Nr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||Q.comparator(e.key,r.key):(e,r)=>Q.comparator(e.key,r.key),this.keyedMap=Ms(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Nr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Nr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Rh{constructor(){this.Sa=new xt(Q.comparator)}track(t){const e=t.doc.key,r=this.Sa.get(e);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(e):t.type===1&&r.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):tt(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Wr{constructor(t,e,r,s,a,u,f,m,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,s,a){const u=[];return e.forEach(f=>{u.push({type:0,doc:f})}),new Wr(t,e,Nr.emptySet(e),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qa(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Wv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class Gv{constructor(){this.queries=kh(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const s=ot(e),a=s.queries;s.queries=kh(),a.forEach((u,f)=>{for(const m of f.va)m.onError(r)})})(this,new j(U.ABORTED,"Firestore shutting down"))}}function kh(){return new Qi(i=>cf(i),qa)}async function Ul(i,t){const e=ot(i);let r=3;const s=t.query;let a=e.queries.get(s);a?!a.Fa()&&t.Ma()&&(r=2):(a=new Wv,r=t.Ma()?0:1);try{switch(r){case 0:a.Ca=await e.onListen(s,!0);break;case 1:a.Ca=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const f=Fl(u,`Initialization of query '${Cr(t.query)}' failed`);return void t.onError(f)}e.queries.set(s,a),a.va.push(t),t.Oa(e.onlineState),a.Ca&&t.Na(a.Ca)&&zl(e)}async function Bl(i,t){const e=ot(i),r=t.query;let s=3;const a=e.queries.get(r);if(a){const u=a.va.indexOf(t);u>=0&&(a.va.splice(u,1),a.va.length===0?s=t.Ma()?0:1:!a.Fa()&&t.Ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Zv(i,t){const e=ot(i);let r=!1;for(const s of t){const a=s.query,u=e.queries.get(a);if(u){for(const f of u.va)f.Na(s)&&(r=!0);u.Ca=s}}r&&zl(e)}function Kv(i,t,e){const r=ot(i),s=r.queries.get(t);if(s)for(const a of s.va)a.onError(e);r.queries.delete(t)}function zl(i){i.xa.forEach(t=>{t.next()})}var tl,Lh;(Lh=tl||(tl={})).Ba="default",Lh.Cache="cache";class ql{constructor(t,e,r){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Wr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const r=e!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=Wr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==tl.Cache}}/**
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
 */class $f{constructor(t){this.key=t}}class jf{constructor(t){this.key=t}}class Qv{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=dt(),this.mutatedKeys=dt(),this.iu=lf(t),this.su=new Nr(this.iu)}get ou(){return this.tu}_u(t,e){const r=e?e.au:new Rh,s=e?e.su:this.su;let a=e?e.mutatedKeys:this.mutatedKeys,u=s,f=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((y,w)=>{const E=s.get(y),R=$a(this.query,w)?w:null,O=!!E&&this.mutatedKeys.has(E.key),F=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let q=!1;E&&R?E.data.isEqual(R.data)?O!==F&&(r.track({type:3,doc:R}),q=!0):this.uu(E,R)||(r.track({type:2,doc:R}),q=!0,(m&&this.iu(R,m)>0||g&&this.iu(R,g)<0)&&(f=!0)):!E&&R?(r.track({type:0,doc:R}),q=!0):E&&!R&&(r.track({type:1,doc:E}),q=!0,(m||g)&&(f=!0)),q&&(R?(u=u.add(R),a=F?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{su:u,au:r,bs:f,mutatedKeys:a}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const a=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const u=t.au.Da();u.sort((y,w)=>function(R,O){const F=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tt(20277,{Vt:q})}};return F(R)-F(O)}(y.type,w.type)||this.iu(y.doc,w.doc)),this.cu(r),s=s??!1;const f=e&&!s?this.lu():[],m=this.ru.size===0&&this.current&&!s?1:0,g=m!==this.nu;return this.nu=m,u.length!==0||g?{snapshot:new Wr(this.query,t.su,a,u,t.mutatedKeys,m===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:f}:{hu:f}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Rh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=dt(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const e=[];return t.forEach(r=>{this.ru.has(r)||e.push(new jf(r))}),this.ru.forEach(r=>{t.has(r)||e.push(new $f(r))}),e}Tu(t){this.tu=t.ks,this.ru=dt();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return Wr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const $l="SyncEngine";class Jv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Yv{constructor(t){this.key=t,this.Eu=!1}}class Xv{constructor(t,e,r,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new Qi(f=>cf(f),qa),this.Vu=new Map,this.du=new Set,this.mu=new xt(Q.comparator),this.fu=new Map,this.gu=new Rl,this.pu={},this.yu=new Map,this.wu=li.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function tw(i,t,e=!0){const r=Qf(i);let s;const a=r.Au.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Iu()):s=await Hf(r,t,e,!0),s}async function ew(i,t){const e=Qf(i);await Hf(e,t,!0,!1)}async function Hf(i,t,e,r){const s=await wv(i.localStore,rn(t)),a=s.targetId,u=i.sharedClientState.addLocalQueryTarget(a,e);let f;return r&&(f=await nw(i,t,a,u==="current",s.resumeToken)),i.isPrimaryClient&&e&&Vf(i.remoteStore,s),f}async function nw(i,t,e,r,s){i.bu=(w,E,R)=>async function(F,q,J,at){let K=q.view._u(J);K.bs&&(K=await Ih(F.localStore,q.query,!1).then(({documents:C})=>q.view._u(C,K)));const ft=at&&at.targetChanges.get(q.targetId),gt=at&&at.targetMismatches.get(q.targetId)!=null,Lt=q.view.applyChanges(K,F.isPrimaryClient,ft,gt);return Dh(F,q.targetId,Lt.hu),Lt.snapshot}(i,w,E,R);const a=await Ih(i.localStore,t,!0),u=new Qv(t,a.ks),f=u._u(a.documents),m=oo.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",s),g=u.applyChanges(f,i.isPrimaryClient,m);Dh(i,e,g.hu);const y=new Jv(t,e,u);return i.Au.set(t,y),i.Vu.has(e)?i.Vu.get(e).push(t):i.Vu.set(e,[t]),g.snapshot}async function iw(i,t,e){const r=ot(i),s=r.Au.get(t),a=r.Vu.get(s.targetId);if(a.length>1)return r.Vu.set(s.targetId,a.filter(u=>!qa(u,t))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Dl(r.remoteStore,s.targetId),el(r,s.targetId)}).catch(Kr)):(el(r,s.targetId),await Jc(r.localStore,s.targetId,!0))}async function rw(i,t){const e=ot(i),r=e.Au.get(t),s=e.Vu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Dl(e.remoteStore,r.targetId))}async function sw(i,t,e){const r=dw(i);try{const s=await function(u,f){const m=ot(u),g=kt.now(),y=f.reduce((R,O)=>R.add(O.key),dt());let w,E;return m.persistence.runTransaction("Locally write mutations","readwrite",R=>{let O=Nn(),F=dt();return m.xs.getEntries(R,y).next(q=>{O=q,O.forEach((J,at)=>{at.isValidDocument()||(F=F.add(J))})}).next(()=>m.localDocuments.getOverlayedDocuments(R,O)).next(q=>{w=q;const J=[];for(const at of f){const K=vy(at,w.get(at.key).overlayedDocument);K!=null&&J.push(new pi(at.key,K,Xd(K.value.mapValue),qe.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,J,f)}).next(q=>{E=q;const J=q.applyToLocalDocumentSet(w,F);return m.documentOverlayCache.saveOverlays(R,q.batchId,J)})}).then(()=>({batchId:E.batchId,changes:hf(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,f,m){let g=u.pu[u.currentUser.toKey()];g||(g=new xt(ht)),g=g.insert(f,m),u.pu[u.currentUser.toKey()]=g}(r,s.batchId,e),await co(r,s.changes),await Za(r.remoteStore)}catch(s){const a=Fl(s,"Failed to persist write");e.reject(a)}}async function Wf(i,t){const e=ot(i);try{const r=await gv(e.localStore,t);t.targetChanges.forEach((s,a)=>{const u=e.fu.get(a);u&&(It(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.Eu=!0:s.modifiedDocuments.size>0?It(u.Eu,14607):s.removedDocuments.size>0&&(It(u.Eu,42227),u.Eu=!1))}),await co(e,r,t)}catch(r){await Kr(r)}}function xh(i,t,e){const r=ot(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Au.forEach((a,u)=>{const f=u.view.Oa(t);f.snapshot&&s.push(f.snapshot)}),function(u,f){const m=ot(u);m.onlineState=f;let g=!1;m.queries.forEach((y,w)=>{for(const E of w.va)E.Oa(f)&&(g=!0)}),g&&zl(m)}(r.eventManager,t),s.length&&r.Ru.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ow(i,t,e){const r=ot(i);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.fu.get(t),a=s&&s.key;if(a){let u=new xt(Q.comparator);u=u.insert(a,oe.newNoDocument(a,st.min()));const f=dt().add(a),m=new so(st.min(),new Map,new xt(ht),u,f);await Wf(r,m),r.mu=r.mu.remove(a),r.fu.delete(t),jl(r)}else await Jc(r.localStore,t,!1).then(()=>el(r,t,e)).catch(Kr)}async function aw(i,t){const e=ot(i),r=t.batch.batchId;try{const s=await _v(e.localStore,t);Zf(e,r,null),Gf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await co(e,s)}catch(s){await Kr(s)}}async function cw(i,t,e){const r=ot(i);try{const s=await function(u,f){const m=ot(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return m.mutationQueue.lookupMutationBatch(g,f).next(w=>(It(w!==null,37113),y=w.keys(),m.mutationQueue.removeMutationBatch(g,w))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>m.localDocuments.getDocuments(g,y))})}(r.localStore,t);Zf(r,t,e),Gf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await co(r,s)}catch(s){await Kr(s)}}function Gf(i,t){(i.yu.get(t)||[]).forEach(e=>{e.resolve()}),i.yu.delete(t)}function Zf(i,t,e){const r=ot(i);let s=r.pu[r.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),r.pu[r.currentUser.toKey()]=s}}function el(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Vu.get(t))i.Au.delete(r),e&&i.Ru.Du(r,e);i.Vu.delete(t),i.isPrimaryClient&&i.gu.Gr(t).forEach(r=>{i.gu.containsKey(r)||Kf(i,r)})}function Kf(i,t){i.du.delete(t.path.canonicalString());const e=i.mu.get(t);e!==null&&(Dl(i.remoteStore,e),i.mu=i.mu.remove(t),i.fu.delete(e),jl(i))}function Dh(i,t,e){for(const r of e)r instanceof $f?(i.gu.addReference(r.key,t),lw(i,r)):r instanceof jf?(H($l,"Document no longer in limbo: "+r.key),i.gu.removeReference(r.key,t),i.gu.containsKey(r.key)||Kf(i,r.key)):tt(19791,{Cu:r})}function lw(i,t){const e=t.key,r=e.path.canonicalString();i.mu.get(e)||i.du.has(r)||(H($l,"New document in limbo: "+e),i.du.add(r),jl(i))}function jl(i){for(;i.du.size>0&&i.mu.size<i.maxConcurrentLimboResolutions;){const t=i.du.values().next().value;i.du.delete(t);const e=new Q(St.fromString(t)),r=i.wu.next();i.fu.set(r,new Yv(e)),i.mu=i.mu.insert(e,r),Vf(i.remoteStore,new An(rn(za(e.path)),r,"TargetPurposeLimboResolution",Fa.ce))}}async function co(i,t,e){const r=ot(i),s=[],a=[],u=[];r.Au.isEmpty()||(r.Au.forEach((f,m)=>{u.push(r.bu(m,t,e).then(g=>{var y;if((g||e)&&r.isPrimaryClient){const w=g?!g.fromCache:(y=e==null?void 0:e.targetChanges.get(m.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(m.targetId,w?"current":"not-current")}if(g){s.push(g);const w=Ll.Es(m.targetId,g);a.push(w)}}))}),await Promise.all(u),r.Ru.H_(s),await async function(m,g){const y=ot(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>B.forEach(g,E=>B.forEach(E.Ts,R=>y.persistence.referenceDelegate.addReference(w,E.targetId,R)).next(()=>B.forEach(E.Is,R=>y.persistence.referenceDelegate.removeReference(w,E.targetId,R)))))}catch(w){if(!Qr(w))throw w;H(xl,"Failed to update sequence numbers: "+w)}for(const w of g){const E=w.targetId;if(!w.fromCache){const R=y.vs.get(E),O=R.snapshotVersion,F=R.withLastLimboFreeSnapshotVersion(O);y.vs=y.vs.insert(E,F)}}}(r.localStore,a))}async function uw(i,t){const e=ot(i);if(!e.currentUser.isEqual(t)){H($l,"User change. New user:",t.toKey());const r=await Df(e.localStore,t);e.currentUser=t,function(a,u){a.yu.forEach(f=>{f.forEach(m=>{m.reject(new j(U.CANCELLED,u))})}),a.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await co(e,r.Ns)}}function hw(i,t){const e=ot(i),r=e.fu.get(t);if(r&&r.Eu)return dt().add(r.key);{let s=dt();const a=e.Vu.get(t);if(!a)return s;for(const u of a){const f=e.Au.get(u);s=s.unionWith(f.view.ou)}return s}}function Qf(i){const t=ot(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=hw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ow.bind(null,t),t.Ru.H_=Zv.bind(null,t.eventManager),t.Ru.Du=Kv.bind(null,t.eventManager),t}function dw(i){const t=ot(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=cw.bind(null,t),t}class Sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Wa(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return mv(this.persistence,new dv,t.initialUser,this.serializer)}xu(t){return new xf(kl.Vi,this.serializer)}Mu(t){return new Ev}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sa.provider={build:()=>new Sa};class fw extends Sa{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){It(this.persistence.referenceDelegate instanceof Aa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jy(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?me.withCacheSize(this.cacheSizeBytes):me.DEFAULT;return new xf(r=>Aa.Vi(r,e),this.serializer)}}class nl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uw.bind(null,this.syncEngine),await Hv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Gv}()}createDatastore(t){const e=Wa(t.databaseInfo.databaseId),r=Sv(t.databaseInfo);return xv(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,a,u,f){return new Nv(r,s,a,u,f)}(this.localStore,this.datastore,t.asyncQueue,e=>xh(this.syncEngine,e,0),function(){return Ph.v()?new Ph:new Iv}())}createSyncEngine(t,e){return function(s,a,u,f,m,g,y){const w=new Xv(s,a,u,f,m,g);return y&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=ot(s);H(ln,"RemoteStore shutting down."),a.da.add(5),await ao(a),a.fa.shutdown(),a.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}nl.provider={build:()=>new nl};/**
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
 */class Hl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):Dn("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const hi="FirestoreClient";class pw{constructor(t,e,r,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{H(hi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(H(hi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Fl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Sc(i,t){i.asyncQueue.verifyOperationInProgress(),H(hi,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Df(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Nh(i,t){i.asyncQueue.verifyOperationInProgress();const e=await mw(i);H(hi,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>Ch(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,s)=>Ch(t.remoteStore,s)),i._onlineComponents=t}async function mw(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){H(hi,"Using user provided OfflineComponentProvider");try{await Sc(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Wi("Error using user provided cache. Falling back to memory cache: "+e),await Sc(i,new Sa)}}else H(hi,"Using default OfflineComponentProvider"),await Sc(i,new fw(void 0));return i._offlineComponents}async function Jf(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(H(hi,"Using user provided OnlineComponentProvider"),await Nh(i,i._uninitializedComponentsProvider._online)):(H(hi,"Using default OnlineComponentProvider"),await Nh(i,new nl))),i._onlineComponents}function _w(i){return Jf(i).then(t=>t.syncEngine)}async function Ca(i){const t=await Jf(i),e=t.eventManager;return e.onListen=tw.bind(null,t.syncEngine),e.onUnlisten=iw.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=ew.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=rw.bind(null,t.syncEngine),e}function gw(i,t,e,r){const s=new Hl(r),a=new ql(t,s,e);return i.asyncQueue.enqueueAndForget(async()=>Ul(await Ca(i),a)),()=>{s.Ku(),i.asyncQueue.enqueueAndForget(async()=>Bl(await Ca(i),a))}}function yw(i,t,e={}){const r=new Cn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,f,m,g){const y=new Hl({next:E=>{y.Ku(),u.enqueueAndForget(()=>Bl(a,w));const R=E.docs.has(f);!R&&E.fromCache?g.reject(new j(U.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&m&&m.source==="server"?g.reject(new j(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new ql(za(f.path),y,{includeMetadataChanges:!0,Wa:!0});return Ul(a,w)}(await Ca(i),i.asyncQueue,t,e,r)),r.promise}function vw(i,t,e={}){const r=new Cn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,f,m,g){const y=new Hl({next:E=>{y.Ku(),u.enqueueAndForget(()=>Bl(a,w)),E.fromCache&&m.source==="server"?g.reject(new j(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new ql(f,y,{includeMetadataChanges:!0,Wa:!0});return Ul(a,w)}(await Ca(i),i.asyncQueue,t,e,r)),r.promise}function ww(i,t){const e=new Cn;return i.asyncQueue.enqueueAndForget(async()=>sw(await _w(i),t,e)),e.promise}/**
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
 */function Yf(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const Tw="ComponentProvider",Mh=new Map;function Ew(i,t,e,r,s){return new zg(i,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Yf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Xf="firestore.googleapis.com",Oh=!0;class Vh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new j(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xf,this.ssl=Oh}else this.host=t.host,this.ssl=t.ssl??Oh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Lf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Ky)throw new j(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yf(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ka{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wg;switch(r.type){case"firstParty":return new bg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Mh.get(e);r&&(H(Tw,"Removing Datastore"),Mh.delete(e),r.terminate())}(this),Promise.resolve()}}function Iw(i,t,e,r={}){var g;i=Ie(i,Ka);const s=no(t),a=i._getSettings(),u={...a,emulatorOptions:i._getEmulatorOptions()},f=`${t}:${e}`;s&&Sd(`https://${f}`),a.host!==Xf&&a.host!==f&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:f,ssl:s,emulatorOptions:r};if(!Ln(m,u)&&(i._setSettings(m),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=se.MOCK_USER;else{y=Wm(r.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new j(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new se(E)}i._authCredentials=new Tg(new zd(y,w))}}/**
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
 */class mi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new mi(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(io(e,Nt._jsonSchema))return new Nt(t,r||null,new Q(St.fromString(e.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:zt("string",Nt._jsonSchemaVersion),referencePath:zt("string")};class ii extends mi{constructor(t,e,r){super(t,e,za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new Q(t))}withConverter(t){return new ii(this.firestore,t,this._path)}}function il(i,t,...e){if(i=jt(i),qd("collection","path",t),i instanceof Ka){const r=St.fromString(t,...e);return Qu(r),new ii(i,null,r)}{if(!(i instanceof Nt||i instanceof ii))throw new j(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(St.fromString(t,...e));return Qu(r),new ii(i.firestore,null,r)}}function be(i,t,...e){if(i=jt(i),arguments.length===1&&(t=gl.newId()),qd("doc","path",t),i instanceof Ka){const r=St.fromString(t,...e);return Ku(r),new Nt(i,null,new Q(r))}{if(!(i instanceof Nt||i instanceof ii))throw new j(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(St.fromString(t,...e));return Ku(r),new Nt(i.firestore,i instanceof ii?i.converter:null,new Q(r))}}/**
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
 */const Fh="AsyncQueue";class Uh{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Mf(this,"async_queue_retry"),this.lc=()=>{const r=Pc();r&&H(Fh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Pc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new Cn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!Qr(t))throw t;H(Fh,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,Dn("INTERNAL UNHANDLED ERROR: ",Bh(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=Vl.createAndSchedule(this,t,e,r,a=>this.Ec(a));return this.oc.push(s),s}Pc(){this._c&&tt(47125,{Rc:Bh(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Bh(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class di extends Ka{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Uh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Uh(t),this._firestoreClient=void 0,await t}}}function bw(i,t){const e=typeof i=="object"?i:Ld(),r=typeof i=="string"?i:wa,s=ml(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=jm("firestore");a&&Iw(s,...a)}return s}function Qa(i){if(i._terminated)throw new j(U.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Aw(i),i._firestoreClient}function Aw(i){var r,s,a,u;const t=i._freezeSettings(),e=Ew(i._databaseId,((r=i._app)==null?void 0:r.options.appId)||"",i._persistenceKey,(s=i._app)==null?void 0:s.options.apiKey,t);i._componentsProvider||(a=t.localCache)!=null&&a._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new pw(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(ne.fromBase64String(t))}catch(e){throw new j(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(ne.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ne._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(io(t,Ne._jsonSchema))return Ne.fromBase64String(t.bytes)}}Ne._jsonSchemaVersion="firestore/bytes/1.0",Ne._jsonSchema={type:zt("string",Ne._jsonSchemaVersion),bytes:zt("string")};/**
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
 */class Wl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xr{constructor(t){this._methodName=t}}/**
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
 */class on{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ht(this._lat,t._lat)||ht(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(t){if(io(t,on._jsonSchema))return new on(t.latitude,t.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:zt("string",on._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};/**
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
 */class $e{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:$e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(io(t,$e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new $e(t.vectorValues);throw new j(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$e._jsonSchemaVersion="firestore/vectorValue/1.0",$e._jsonSchema={type:zt("string",$e._jsonSchemaVersion),vectorValues:zt("object")};/**
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
 */const Pw=/^__.*__$/;class Sw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new pi(t,this.data,this.fieldMask,e,this.fieldTransforms):new ro(t,this.data,e,this.fieldTransforms)}}class tp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new pi(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ep(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tt(40011,{dataSource:i})}}class Ja{constructor(t,e,r,s,a,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.fc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Ja({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Ra(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(ep(this.dataSource)&&Pw.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Cw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Wa(t)}V(t,e,r,s=!1){return new Ja({dataSource:t,methodName:e,targetDoc:r,path:ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gl(i){const t=i._freezeSettings(),e=Wa(i._databaseId);return new Cw(i._databaseId,!!t.ignoreUndefinedProperties,e)}function Rw(i,t,e,r,s,a={}){const u=i.V(a.merge||a.mergeFields?2:0,t,e,s);Jl("Data must be an object, but it was:",u,r);const f=ip(r,u);let m,g;if(a.merge)m=new Te(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const E=Gi(t,w,e);if(!u.contains(E))throw new j(U.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);op(y,E)||y.push(E)}m=new Te(y),g=u.fieldTransforms.filter(w=>m.covers(w.field))}else m=null,g=u.fieldTransforms;return new Sw(new _e(f),m,g)}class lo extends Xr{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof lo}}function np(i,t,e){return new Ja({dataSource:3,targetDoc:t.settings.targetDoc,methodName:i._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Zl extends Xr{_toFieldTransform(t){return new bl(t.path,new Js)}isEqual(t){return t instanceof Zl}}class Kl extends Xr{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=np(this,t,!0),r=this.vc.map(a=>Yi(a,e)),s=new jr(r);return new bl(t.path,s)}isEqual(t){return t instanceof Kl&&Ln(this.vc,t.vc)}}class Ql extends Xr{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=np(this,t,!0),r=this.vc.map(a=>Yi(a,e)),s=new Hr(r);return new bl(t.path,s)}isEqual(t){return t instanceof Ql&&Ln(this.vc,t.vc)}}function kw(i,t,e,r){const s=i.V(1,t,e);Jl("Data must be an object, but it was:",s,r);const a=[],u=_e.empty();fi(r,(m,g)=>{const y=sp(t,m,e);g=jt(g);const w=s.Sc(y);if(g instanceof lo)a.push(y);else{const E=Yi(g,w);E!=null&&(a.push(y),u.set(y,E))}});const f=new Te(a);return new tp(u,f,s.fieldTransforms)}function Lw(i,t,e,r,s,a){const u=i.V(1,t,e),f=[Gi(t,r,e)],m=[s];if(a.length%2!=0)throw new j(U.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)f.push(Gi(t,a[E])),m.push(a[E+1]);const g=[],y=_e.empty();for(let E=f.length-1;E>=0;--E)if(!op(g,f[E])){const R=f[E];let O=m[E];O=jt(O);const F=u.Sc(R);if(O instanceof lo)g.push(R);else{const q=Yi(O,F);q!=null&&(g.push(R),y.set(R,q))}}const w=new Te(g);return new tp(y,w,u.fieldTransforms)}function xw(i,t,e,r=!1){return Yi(e,i.V(r?4:3,t))}function Yi(i,t){if(rp(i=jt(i)))return Jl("Unsupported field value:",t,i),ip(i,t);if(i instanceof Xr)return function(r,s){if(!ep(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const f of r){let m=Yi(f,s.bc(u));m==null&&(m={nullValue:"NULL_VALUE"}),a.push(m),u++}return{arrayValue:{values:a}}}(i,t)}return function(r,s){if((r=jt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return fy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=kt.fromDate(r);return{timestampValue:ba(s.serializer,a)}}if(r instanceof kt){const a=new kt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ba(s.serializer,a)}}if(r instanceof on)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ne)return{bytesValue:If(s.serializer,r._byteString)};if(r instanceof Nt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Cl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof $e)return function(u,f){const m=u instanceof $e?u.toArray():u;return{mapValue:{fields:{[Jd]:{stringValue:Yd},[Ta]:{arrayValue:{values:m.map(y=>{if(typeof y!="number")throw f.Dc("VectorValues must only contain numeric values.");return Il(f.serializer,y)})}}}}}}(r,s);if(kf(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Va(r)}`)}(i,t)}function ip(i,t){const e={};return Hd(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fi(i,(r,s)=>{const a=Yi(s,t.yc(r));a!=null&&(e[r]=a)}),{mapValue:{fields:e}}}function rp(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof kt||i instanceof on||i instanceof Ne||i instanceof Nt||i instanceof Xr||i instanceof $e||kf(i))}function Jl(i,t,e){if(!rp(e)||!$d(e)){const r=Va(e);throw r==="an object"?t.Dc(i+" a custom object"):t.Dc(i+" "+r)}}function Gi(i,t,e){if((t=jt(t))instanceof Wl)return t._internalPath;if(typeof t=="string")return sp(i,t);throw Ra("Field path arguments must be of type string or ",i,!1,void 0,e)}const Dw=new RegExp("[~\\*/\\[\\]]");function sp(i,t,e){if(t.search(Dw)>=0)throw Ra(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Wl(...t.split("."))._internalPath}catch{throw Ra(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Ra(i,t,e,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let f=`Function ${t}() called with invalid data`;e&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(a||u)&&(m+=" (found",a&&(m+=` in field ${r}`),u&&(m+=` in document ${s}`),m+=")"),new j(U.INVALID_ARGUMENT,f+i+m)}function op(i,t){return i.some(e=>e.isEqual(t))}/**
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
 */class Nw{convertValue(t,e="none"){switch(ci(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ai(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw tt(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return fi(t,(s,a)=>{r[s]=this.convertValue(a,e)}),r}convertVectorValue(t){var r,s,a;const e=(a=(s=(r=t.fields)==null?void 0:r[Ta].arrayValue)==null?void 0:s.values)==null?void 0:a.map(u=>Ot(u.doubleValue));return new $e(e)}convertGeoPoint(t){return new on(Ot(t.latitude),Ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ba(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Gs(t));default:return null}}convertTimestamp(t){const e=oi(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=St.fromString(t);It(Rf(r),9688,{name:t});const s=new Zs(r.get(1),r.get(3)),a=new Q(r.popFirst(5));return s.isEqual(e)||Dn(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}/**
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
 */class Yl extends Nw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}/**
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
 */function Mw(){return new lo("deleteField")}function ri(){return new Zl("serverTimestamp")}function Ow(...i){return new Kl("arrayUnion",i)}function Vw(...i){return new Ql("arrayRemove",i)}const zh="@firebase/firestore",qh="4.14.1";/**
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
 */function $h(i){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(i,["next","error","complete"])}/**
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
 */class ap{constructor(t,e,r,s,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Gi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Fw extends ap{data(){return super.data()}}/**
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
 */function cp(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new j(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Xl{}class lp extends Xl{}function jh(i,t,...e){let r=[];t instanceof Xl&&r.push(t),r=r.concat(e),function(a){const u=a.filter(m=>m instanceof tu).length,f=a.filter(m=>m instanceof Ya).length;if(u>1||u>0&&f>0)throw new j(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)i=s._apply(i);return i}class Ya extends lp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ya(t,e,r)}_apply(t){const e=this._parse(t);return up(t._query,e),new mi(t.firestore,t.converter,Hc(t._query,e))}_parse(t){const e=Gl(t.firestore);return function(a,u,f,m,g,y,w){let E;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new j(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Gh(w,y);const O=[];for(const F of w)O.push(Wh(m,a,F));E={arrayValue:{values:O}}}else E=Wh(m,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Gh(w,y),E=xw(f,u,w,y==="in"||y==="not-in");return Bt.create(g,y,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Hh(i,t,e){const r=t,s=Gi("where",i);return Ya._create(s,r,e)}class tu extends Xl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new tu(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:He.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,a){let u=s;const f=a.getFlattenedFilters();for(const m of f)up(u,m),u=Hc(u,m)}(t._query,e),new mi(t.firestore,t.converter,Hc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class eu extends lp{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new eu(t,e)}_apply(t){const e=function(s,a,u){if(s.startAt!==null)throw new j(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qs(a,u)}(t._query,this._field,this._direction);return new mi(t.firestore,t.converter,sy(t._query,e))}}function Uw(i,t="asc"){const e=t,r=Gi("orderBy",i);return eu._create(r,e)}function Wh(i,t,e){if(typeof(e=jt(e))=="string"){if(e==="")throw new j(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!af(t)&&e.indexOf("/")!==-1)throw new j(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(St.fromString(e));if(!Q.isDocumentKey(r))throw new j(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rh(i,new Q(r))}if(e instanceof Nt)return rh(i,e._key);throw new j(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Va(e)}.`)}function Gh(i,t){if(!Array.isArray(i)||i.length===0)throw new j(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function up(i,t){const e=function(s,a){for(const u of s)for(const f of u.getFlattenedFilters())if(a.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new j(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Bw(i,t,e){let r;return r=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,r}class Vs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zi extends ap{constructor(t,e,r,s,a,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ha(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Gi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=zi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}zi._jsonSchemaVersion="firestore/documentSnapshot/1.0",zi._jsonSchema={type:zt("string",zi._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class ha extends zi{data(t={}){return super.data(t)}}class qi{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ha(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(f=>{const m=new ha(s._firestore,s._userDataWriter,f.doc.key,f.doc,new Vs(s._snapshot.mutatedKeys.has(f.doc.key),s._snapshot.fromCache),s.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(f=>a||f.type!==3).map(f=>{const m=new ha(s._firestore,s._userDataWriter,f.doc.key,f.doc,new Vs(s._snapshot.mutatedKeys.has(f.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,y=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),y=u.indexOf(f.doc.key)),{type:zw(f.type),doc:m,oldIndex:g,newIndex:y}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=qi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=gl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function zw(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tt(61501,{type:i})}}/**
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
 */qi._jsonSchemaVersion="firestore/querySnapshot/1.0",qi._jsonSchema={type:zt("string",qi._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};/**
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
 */function qw(i){i=Ie(i,Nt);const t=Ie(i.firestore,di),e=Qa(t);return yw(e,i._key).then(r=>hp(t,i,r))}function $w(i){i=Ie(i,mi);const t=Ie(i.firestore,di),e=Qa(t),r=new Yl(t);return cp(i._query),vw(e,i._query).then(s=>new qi(t,r,i,s))}function uo(i,t,e){i=Ie(i,Nt);const r=Ie(i.firestore,di),s=Bw(i.converter,t,e),a=Gl(r);return nu(r,[Rw(a,"setDoc",i._key,s,i.converter!==null,e).toMutation(i._key,qe.none())])}function ho(i,t,e,...r){i=Ie(i,Nt);const s=Ie(i.firestore,di),a=Gl(s);let u;return u=typeof(t=jt(t))=="string"||t instanceof Wl?Lw(a,"updateDoc",i._key,t,e,r):kw(a,"updateDoc",i._key,t),nu(s,[u.toMutation(i._key,qe.exists(!0))])}function jw(i){return nu(Ie(i.firestore,di),[new Al(i._key,qe.none())])}function rl(i,...t){var g,y,w;i=jt(i);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||$h(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if($h(t[r])){const E=t[r];t[r]=(g=E.next)==null?void 0:g.bind(E),t[r+1]=(y=E.error)==null?void 0:y.bind(E),t[r+2]=(w=E.complete)==null?void 0:w.bind(E)}let a,u,f;if(i instanceof Nt)u=Ie(i.firestore,di),f=za(i._key.path),a={next:E=>{t[r]&&t[r](hp(u,i,E))},error:t[r+1],complete:t[r+2]};else{const E=Ie(i,mi);u=Ie(E.firestore,di),f=E._query;const R=new Yl(u);a={next:O=>{t[r]&&t[r](new qi(u,R,E,O))},error:t[r+1],complete:t[r+2]},cp(i._query)}const m=Qa(u);return gw(m,f,s,a)}function nu(i,t){const e=Qa(i);return ww(e,t)}function hp(i,t,e){const r=e.docs.get(t._key),s=new Yl(i);return new zi(i,s,t._key,r,new Vs(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){vg(Gr),Br(new ji("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),f=new di(new Eg(r.getProvider("auth-internal")),new Ag(u,r.getProvider("app-check-internal")),qg(u,s),u);return a={useFetchStreams:e,...a},f._setSettings(a),f},"PUBLIC").setMultipleInstances(!0)),ei(zh,qh,t),ei(zh,qh,"esm2020")})();function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hw=dp,fp=new to("auth","Firebase",dp());/**
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
 */const ka=new fl("@firebase/auth");function Ww(i,...t){ka.logLevel<=pt.WARN&&ka.warn(`Auth (${Gr}): ${i}`,...t)}function da(i,...t){ka.logLevel<=pt.ERROR&&ka.error(`Auth (${Gr}): ${i}`,...t)}/**
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
 */function Me(i,...t){throw ru(i,...t)}function je(i,...t){return ru(i,...t)}function iu(i,t,e){const r={...Hw(),[t]:e};return new to("auth","Firebase",r).create(t,{appName:i.name})}function Rn(i){return iu(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gw(i,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Me(i,"argument-error"),iu(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ru(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return fp.create(i,...t)}function X(i,t,...e){if(!i)throw ru(t,...e)}function Pn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw da(t),new Error(t)}function Mn(i,t){i||Pn(t)}/**
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
 */function sl(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Zw(){return Zh()==="http:"||Zh()==="https:"}function Zh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zw()||Qm()||"connection"in navigator)?navigator.onLine:!0}function Qw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class fo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Mn(e>t,"Short delay should be less than long delay!"),this.isMobile=Gm()||Jm()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function su(i,t){Mn(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class pp{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Xw=new fo(3e4,6e4);function _i(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function gi(i,t,e,r,s={}){return mp(i,s,async()=>{let a={},u={};r&&(t==="GET"?u=r:a={body:JSON.stringify(r)});const f=eo({key:i.config.apiKey,...u}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g={method:t,headers:m,...a};return Km()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&no(i.emulatorConfig.host)&&(g.credentials="include"),pp.fetch()(await _p(i,i.config.apiHost,e,f),g)})}async function mp(i,t,e){i._canInitEmulator=!1;const r={...Jw,...t};try{const s=new eT(i),a=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ia(i,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const f=a.ok?u.errorMessage:u.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw ia(i,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw ia(i,"email-already-in-use",u);if(m==="USER_DISABLED")throw ia(i,"user-disabled",u);const y=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw iu(i,y,g);Me(i,y)}}catch(s){if(s instanceof On)throw s;Me(i,"network-request-failed",{message:String(s)})}}async function po(i,t,e,r,s={}){const a=await gi(i,t,e,r,s);return"mfaPendingCredential"in a&&Me(i,"multi-factor-auth-required",{_serverResponse:a}),a}async function _p(i,t,e,r){const s=`${t}${e}?${r}`,a=i,u=a.config.emulator?su(i.config,s):`${i.config.apiScheme}://${s}`;return Yw.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function tT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),Xw.get())})}}function ia(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=je(i,t,r);return s.customData._tokenResponse=e,s}function Kh(i){return i!==void 0&&i.enterprise!==void 0}class nT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return tT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iT(i,t){return gi(i,"GET","/v2/recaptchaConfig",_i(i,t))}/**
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
 */async function rT(i,t){return gi(i,"POST","/v1/accounts:delete",t)}async function La(i,t){return gi(i,"POST","/v1/accounts:lookup",t)}/**
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
 */function $s(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sT(i,t=!1){const e=jt(i),r=await e.getIdToken(t),s=ou(r);X(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:$s(Cc(s.auth_time)),issuedAtTime:$s(Cc(s.iat)),expirationTime:$s(Cc(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Cc(i){return Number(i)*1e3}function ou(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const s=Id(e);return s?JSON.parse(s):(da("Failed to decode base64 JWT payload"),null)}catch(s){return da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qh(i){const t=ou(i);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ys(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof On&&oT(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function oT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class aT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ol{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xa(i){var w;const t=i.auth,e=await i.getIdToken(),r=await Ys(i,La(t,{idToken:e}));X(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];i._notifyReloadListener(s);const a=(w=s.providerUserInfo)!=null&&w.length?gp(s.providerUserInfo):[],u=lT(i.providerData,a),f=i.isAnonymous,m=!(i.email&&s.passwordHash)&&!(u!=null&&u.length),g=f?m:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function cT(i){const t=jt(i);await xa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lT(i,t){return[...i.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function gp(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function uT(i,t){const e=await mp(i,{},async()=>{const r=eo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=i.config,u=await _p(i,s,"/v1/token",`key=${a}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:r};return i.emulatorConfig&&no(i.emulatorConfig.host)&&(m.credentials="include"),pp.fetch()(u,m)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function hT(i,t){return gi(i,"POST","/v2/accounts:revokeToken",_i(i,t))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Qh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){X(t.length!==0,"internal-error");const e=Qh(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:a}=await uT(t,e);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:a}=e,u=new Mr;return r&&(X(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),a&&(X(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Zn(i,t){X(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class ze{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new aT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ol(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ys(this,this.stsTokenManager.getToken(this.auth,t));return X(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return sT(this,t)}reload(){return cT(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ze({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(Rn(this.auth));const t=await this.getIdToken();return await Ys(this,rT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,a=e.phoneNumber??void 0,u=e.photoURL??void 0,f=e.tenantId??void 0,m=e._redirectEventId??void 0,g=e.createdAt??void 0,y=e.lastLoginAt??void 0,{uid:w,emailVerified:E,isAnonymous:R,providerData:O,stsTokenManager:F}=e;X(w&&F,t,"internal-error");const q=Mr.fromJSON(this.name,F);X(typeof w=="string",t,"internal-error"),Zn(r,t.name),Zn(s,t.name),X(typeof E=="boolean",t,"internal-error"),X(typeof R=="boolean",t,"internal-error"),Zn(a,t.name),Zn(u,t.name),Zn(f,t.name),Zn(m,t.name),Zn(g,t.name),Zn(y,t.name);const J=new ze({uid:w,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:R,photoURL:u,phoneNumber:a,tenantId:f,stsTokenManager:q,createdAt:g,lastLoginAt:y});return O&&Array.isArray(O)&&(J.providerData=O.map(at=>({...at}))),m&&(J._redirectEventId=m),J}static async _fromIdTokenResponse(t,e,r=!1){const s=new Mr;s.updateFromServerResponse(e);const a=new ze({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await xa(a),a}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];X(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?gp(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),f=new Mr;f.updateFromIdToken(r);const m=new ze({uid:s.localId,auth:t,stsTokenManager:f,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(m,g),m}}/**
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
 */const Jh=new Map;function Sn(i){Mn(i instanceof Function,"Expected a class definition");let t=Jh.get(i);return t?(Mn(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Jh.set(i,t),t)}/**
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
 */class yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}yp.type="NONE";const Yh=yp;/**
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
 */function fa(i,t,e){return`firebase:${i}:${t}:${e}`}class Or{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=fa(this.userKey,s.apiKey,a),this.fullPersistenceKey=fa("persistence",s.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await La(this.auth,{idToken:t}).catch(()=>{});return e?ze._fromGetAccountInfoResponse(this.auth,e,t):null}return ze._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Or(Sn(Yh),t,r);const s=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||Sn(Yh);const u=fa(r,t.config.apiKey,t.name);let f=null;for(const g of e)try{const y=await g._get(u);if(y){let w;if(typeof y=="string"){const E=await La(t,{idToken:y}).catch(()=>{});if(!E)break;w=await ze._fromGetAccountInfoResponse(t,E,y)}else w=ze._fromJSON(t,y);g!==a&&(f=w),a=g;break}}catch{}const m=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new Or(a,t,r):(a=m[0],f&&await a._set(u,f.toJSON()),await Promise.all(e.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new Or(a,t,r))}}/**
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
 */function Xh(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ep(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bp(t))return"Blackberry";if(Ap(t))return"Webos";if(wp(t))return"Safari";if((t.includes("chrome/")||Tp(t))&&!t.includes("edge/"))return"Chrome";if(Ip(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vp(i=ae()){return/firefox\//i.test(i)}function wp(i=ae()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tp(i=ae()){return/crios\//i.test(i)}function Ep(i=ae()){return/iemobile/i.test(i)}function Ip(i=ae()){return/android/i.test(i)}function bp(i=ae()){return/blackberry/i.test(i)}function Ap(i=ae()){return/webos/i.test(i)}function au(i=ae()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function dT(i=ae()){var t;return au(i)&&!!((t=window.navigator)!=null&&t.standalone)}function fT(){return Ym()&&document.documentMode===10}function Pp(i=ae()){return au(i)||Ip(i)||Ap(i)||bp(i)||/windows phone/i.test(i)||Ep(i)}/**
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
 */function Sp(i,t=[]){let e;switch(i){case"Browser":e=Xh(ae());break;case"Worker":e=`${Xh(ae())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Gr}/${r}`}/**
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
 */class pT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=a=>new Promise((u,f)=>{try{const m=t(a);u(m)}catch(m){f(m)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mT(i,t={}){return gi(i,"GET","/v2/passwordPolicy",_i(i,t))}/**
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
 */const _T=6;class gT{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??_T,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class yT{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new td(this),this.idTokenSubscription=new td(this),this.beforeStateQueue=new pT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Sn(e)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await Or.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await La(this,{idToken:t}),r=await ze._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(we(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,f=r==null?void 0:r._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&(m!=null&&m.user)&&(r=m.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await xa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Qw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(we(this.app))return Promise.reject(Rn(this));const e=t?jt(t):null;return e&&X(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(Rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return we(this.app)?Promise.reject(Rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mT(this),e=new gT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new to("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await hT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Sn(t)||this._popupRedirectResolver;X(e,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Sn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(f,this,"internal-error"),f.then(()=>{u||a(this.currentUser)}),typeof e=="function"){const m=t.addObserver(e,r,s);return()=>{u=!0,m()}}else{const m=t.addObserver(e);return()=>{u=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Sp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(we(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Ww(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yi(i){return jt(i)}class td{constructor(t){this.auth=t,this.observer=null,this.addObserver=o_(e=>this.observer=e)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vT(i){Xa=i}function Cp(i){return Xa.loadJS(i)}function wT(){return Xa.recaptchaEnterpriseScript}function TT(){return Xa.gapiScript}function ET(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class IT{constructor(){this.enterprise=new bT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class bT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const AT="recaptcha-enterprise",Rp="NO_RECAPTCHA";class PT{constructor(t){this.type=AT,this.auth=yi(t)}async verify(t="verify",e=!1){async function r(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,f)=>{iT(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new nT(m);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(m=>{f(m)})})}function s(a,u,f){const m=window.grecaptcha;Kh(m)?m.enterprise.ready(()=>{m.enterprise.execute(a,{action:t}).then(g=>{u(g)}).catch(()=>{u(Rp)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new IT().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(f=>{if(!e&&Kh(window.grecaptcha))s(f,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=wT();m.length!==0&&(m+=f),Cp(m).then(()=>{s(f,a,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function ed(i,t,e,r=!1,s=!1){const a=new PT(i);let u;if(s)u=Rp;else try{u=await a.verify(e)}catch{u=await a.verify(e,!0)}const f={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function al(i,t,e,r,s){var a;if((a=i._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await ed(i,t,e,e==="getOobCode");return r(i,u)}else return r(i,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ed(i,t,e,e==="getOobCode");return r(i,f)}else return Promise.reject(u)})}/**
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
 */function ST(i,t){const e=ml(i,"auth");if(e.isInitialized()){const s=e.getImmediate(),a=e.getOptions();if(Ln(a,t??{}))return s;Me(s,"already-initialized")}return e.initialize({options:t})}function CT(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Sn);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function RT(i,t,e){const r=yi(i);X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,a=kp(t),{host:u,port:f}=kT(t),m=f===null?"":`:${f}`,g={url:`${a}//${u}${m}/`},y=Object.freeze({host:u,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(Ln(g,r.config.emulator)&&Ln(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,no(u)?Sd(`${a}//${u}${m}`):LT()}function kp(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function kT(i){const t=kp(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:nd(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:nd(u)}}}function nd(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function LT(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class cu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Pn("not implemented")}_getIdTokenResponse(t){return Pn("not implemented")}_linkToIdToken(t,e){return Pn("not implemented")}_getReauthenticationResolver(t){return Pn("not implemented")}}async function xT(i,t){return gi(i,"POST","/v1/accounts:signUp",t)}/**
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
 */async function DT(i,t){return po(i,"POST","/v1/accounts:signInWithPassword",_i(i,t))}/**
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
 */async function NT(i,t){return po(i,"POST","/v1/accounts:signInWithEmailLink",_i(i,t))}async function MT(i,t){return po(i,"POST","/v1/accounts:signInWithEmailLink",_i(i,t))}/**
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
 */class Xs extends cu{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Xs(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Xs(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return al(t,e,"signInWithPassword",DT);case"emailLink":return NT(t,{email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return al(t,r,"signUpPassword",xT);case"emailLink":return MT(t,{idToken:e,email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Vr(i,t){return po(i,"POST","/v1/accounts:signInWithIdp",_i(i,t))}/**
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
 */const OT="http://localhost";class Zi extends cu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Me("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...a}=e;if(!r||!s)return null;const u=new Zi(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const e=this.buildRequest();return Vr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Vr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Vr(t,e)}buildRequest(){const t={requestUri:OT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=eo(e)}return t}}/**
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
 */function VT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FT(i){const t=xs(Ds(i)).link,e=t?xs(Ds(t)).deep_link_id:null,r=xs(Ds(i)).deep_link_id;return(r?xs(Ds(r)).link:null)||r||e||t||i}class lu{constructor(t){const e=xs(Ds(t)),r=e.apiKey??null,s=e.oobCode??null,a=VT(e.mode??null);X(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=FT(t);try{return new lu(e)}catch{return null}}}/**
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
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(t,e){return Xs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=lu.parseLink(e);return X(r,"argument-error"),Xs._fromEmailAndCode(t,r.code,r.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class uu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mo extends uu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends mo{constructor(){super("facebook.com")}static credential(t){return Zi._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kn.credentialFromTaggedObject(t)}static credentialFromError(t){return Kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Kn.credential(t.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class In extends mo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zi._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return In.credential(e,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class Qn extends mo{constructor(){super("github.com")}static credential(t){return Zi._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qn.credentialFromTaggedObject(t)}static credentialFromError(t){return Qn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qn.credential(t.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Jn extends mo{constructor(){super("twitter.com")}static credential(t,e){return Zi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Jn.credential(e,r)}catch{return null}}}Jn.TWITTER_SIGN_IN_METHOD="twitter.com";Jn.PROVIDER_ID="twitter.com";/**
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
 */async function UT(i,t){return po(i,"POST","/v1/accounts:signUp",_i(i,t))}/**
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
 */class Ki{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const a=await ze._fromIdTokenResponse(t,r,s),u=id(r);return new Ki({user:a,providerId:u,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=id(r);return new Ki({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function id(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Da extends On{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Da(t,e,r,s)}}function Lp(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(i,a,t,r):a})}async function BT(i,t,e=!1){const r=await Ys(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return Ki._forOperation(i,"link",r)}/**
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
 */async function zT(i,t,e=!1){const{auth:r}=i;if(we(r.app))return Promise.reject(Rn(r));const s="reauthenticate";try{const a=await Ys(i,Lp(r,s,t,i),e);X(a.idToken,r,"internal-error");const u=ou(a.idToken);X(u,r,"internal-error");const{sub:f}=u;return X(i.uid===f,r,"user-mismatch"),Ki._forOperation(i,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),a}}/**
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
 */async function xp(i,t,e=!1){if(we(i.app))return Promise.reject(Rn(i));const r="signIn",s=await Lp(i,r,t),a=await Ki._fromIdTokenResponse(i,r,s);return e||await i._updateCurrentUser(a.user),a}async function qT(i,t){return xp(yi(i),t)}/**
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
 */async function Dp(i){const t=yi(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function $T(i,t,e){if(we(i.app))return Promise.reject(Rn(i));const r=yi(i),u=await al(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UT).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Dp(i),m}),f=await Ki._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(f.user),f}function jT(i,t,e){return we(i.app)?Promise.reject(Rn(i)):qT(jt(i),ts.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Dp(i),r})}function HT(i,t,e,r){return jt(i).onIdTokenChanged(t,e,r)}function WT(i,t,e){return jt(i).beforeAuthStateChanged(t,e)}function GT(i,t,e,r){return jt(i).onAuthStateChanged(t,e,r)}function ZT(i){return jt(i).signOut()}const Na="__sak";/**
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
 */class Np{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KT=1e3,QT=10;class Mp extends Np{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((u,f,m)=>{this.notifyListeners(u,m)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!e&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);fT()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,QT):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Mp.type="LOCAL";const JT=Mp;/**
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
 */class Op extends Np{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Op.type="SESSION";const Vp=Op;/**
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
 */function YT(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class tc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new tc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:a}=e.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const f=Array.from(u).map(async g=>g(e.origin,a)),m=await YT(f);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:m})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tc.receivers=[];/**
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
 */function hu(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
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
 */class XT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((f,m)=>{const g=hu("",20);s.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const E=w;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(E.data.response);break;default:clearTimeout(y),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function an(){return window}function tE(i){an().location.href=i}/**
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
 */function Fp(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function eE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function iE(){return Fp()?self:null}/**
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
 */const Up="firebaseLocalStorageDb",rE=1,Ma="firebaseLocalStorage",Bp="fbase_key";class _o{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ec(i,t){return i.transaction([Ma],t?"readwrite":"readonly").objectStore(Ma)}function sE(){const i=indexedDB.deleteDatabase(Up);return new _o(i).toPromise()}function cl(){const i=indexedDB.open(Up,rE);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(Ma,{keyPath:Bp})}catch(s){e(s)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(Ma)?t(r):(r.close(),await sE(),t(await cl()))})})}async function rd(i,t,e){const r=ec(i,!0).put({[Bp]:t,value:e});return new _o(r).toPromise()}async function oE(i,t){const e=ec(i,!1).get(t),r=await new _o(e).toPromise();return r===void 0?null:r.value}function sd(i,t){const e=ec(i,!0).delete(t);return new _o(e).toPromise()}const aE=800,cE=3;class zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>cE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tc._getInstance(iE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await eE(),!this.activeServiceWorker)return;this.sender=new XT(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||nE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await cl();return await rd(t,Na,"1"),await sd(t,Na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>rd(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>oE(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>sd(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const a=ec(s,!1).getAll();return new _o(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:a}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zp.type="LOCAL";const lE=zp;new fo(3e4,6e4);/**
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
 */function qp(i,t){return t?Sn(t):(X(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class du extends cu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Vr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Vr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Vr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function uE(i){return xp(i.auth,new du(i),i.bypassAuthState)}function hE(i){const{auth:t,user:e}=i;return X(e,t,"internal-error"),zT(e,new du(i),i.bypassAuthState)}async function dE(i){const{auth:t,user:e}=i;return X(e,t,"internal-error"),BT(e,new du(i),i.bypassAuthState)}/**
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
 */class $p{constructor(t,e,r,s,a=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:a,error:u,type:f}=t;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:e,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return uE;case"linkViaPopup":case"linkViaRedirect":return dE;case"reauthViaPopup":case"reauthViaRedirect":return hE;default:Me(this.auth,"internal-error")}}resolve(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fE=new fo(2e3,1e4);async function pE(i,t,e){if(we(i.app))return Promise.reject(je(i,"operation-not-supported-in-this-environment"));const r=yi(i);Gw(i,t,uu);const s=qp(r,e);return new Bi(r,"signInViaPopup",t,s).executeNotNull()}class Bi extends $p{constructor(t,e,r,s,a){super(t,e,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const t=hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,fE.get())};t()}}Bi.currentPopupAction=null;/**
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
 */const mE="pendingRedirect",pa=new Map;class _E extends $p{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=pa.get(this.auth._key());if(!t){try{const r=await gE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}pa.set(this.auth._key(),t)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gE(i,t){const e=wE(t),r=vE(i);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function yE(i,t){pa.set(i._key(),t)}function vE(i){return Sn(i._redirectPersistence)}function wE(i){return fa(mE,i.config.apiKey,i.name)}async function TE(i,t,e=!1){if(we(i.app))return Promise.reject(Rn(i));const r=yi(i),s=qp(r,t),u=await new _E(r,s,e).execute();return u&&!e&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,t)),u}/**
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
 */const EE=10*60*1e3;class IE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!jp(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(je(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=EE&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(t))}saveEventToCache(t){this.cachedEventUids.add(od(t)),this.lastProcessedEventTime=Date.now()}}function od(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function jp({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jp(i);default:return!1}}/**
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
 */async function AE(i,t={}){return gi(i,"GET","/v1/projects",t)}/**
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
 */const PE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SE=/^https?/;async function CE(i){if(i.config.emulator)return;const{authorizedDomains:t}=await AE(i);for(const e of t)try{if(RE(e))return}catch{}Me(i,"unauthorized-domain")}function RE(i){const t=sl(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&u.hostname===r}if(!SE.test(e))return!1;if(PE.test(i))return r===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kE=new fo(3e4,6e4);function ad(){const i=an().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function LE(i){return new Promise((t,e)=>{var s,a,u;function r(){ad(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ad(),e(je(i,"network-request-failed"))},timeout:kE.get()})}if((a=(s=an().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)t(gapi.iframes.getContext());else if((u=an().gapi)!=null&&u.load)r();else{const f=ET("iframefcb");return an()[f]=()=>{gapi.load?r():e(je(i,"network-request-failed"))},Cp(`${TT()}?onload=${f}`).catch(m=>e(m))}}).catch(t=>{throw ma=null,t})}let ma=null;function xE(i){return ma=ma||LE(i),ma}/**
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
 */const DE=new fo(5e3,15e3),NE="__/auth/iframe",ME="emulator/auth/iframe",OE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FE(i){const t=i.config;X(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?su(t,ME):`https://${i.config.authDomain}/${NE}`,r={apiKey:t.apiKey,appName:i.name,v:Gr},s=VE.get(i.config.apiHost);s&&(r.eid=s);const a=i._getFrameworks();return a.length&&(r.fw=a.join(",")),`${e}?${eo(r).slice(1)}`}async function UE(i){const t=await xE(i),e=an().gapi;return X(e,i,"internal-error"),t.open({where:document.body,url:FE(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OE,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=je(i,"network-request-failed"),f=an().setTimeout(()=>{a(u)},DE.get());function m(){an().clearTimeout(f),s(r)}r.ping(m).then(m,()=>{a(u)})}))}/**
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
 */const BE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zE=500,qE=600,$E="_blank",jE="http://localhost";class cd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HE(i,t,e,r=zE,s=qE){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const m={...BE,width:r.toString(),height:s.toString(),top:a,left:u},g=ae().toLowerCase();e&&(f=Tp(g)?$E:e),vp(g)&&(t=t||jE,m.scrollbars="yes");const y=Object.entries(m).reduce((E,[R,O])=>`${E}${R}=${O},`,"");if(dT(g)&&f!=="_self")return WE(t||"",f),new cd(null);const w=window.open(t||"",f,y);X(w,i,"popup-blocked");try{w.focus()}catch{}return new cd(w)}function WE(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const GE="__/auth/handler",ZE="emulator/auth/handler",KE=encodeURIComponent("fac");async function ld(i,t,e,r,s,a){X(i.config.authDomain,i,"auth-domain-config-required"),X(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:Gr,eventId:s};if(t instanceof uu){t.setDefaultLanguage(i.languageCode),u.providerId=t.providerId||"",s_(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(t instanceof mo){const y=t.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}i.tenantId&&(u.tid=i.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),g=m?`#${KE}=${encodeURIComponent(m)}`:"";return`${QE(i)}?${eo(f).slice(1)}${g}`}function QE({config:i}){return i.emulator?su(i,ZE):`https://${i.authDomain}/${GE}`}/**
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
 */const Rc="webStorageSupport";class JE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vp,this._completeRedirectFn=TE,this._overrideRedirectResult=yE}async _openPopup(t,e,r,s){var u;Mn((u=this.eventManagers[t._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await ld(t,e,r,sl(),s);return HE(t,a,hu())}async _openRedirect(t,e,r,s){await this._originValidation(t);const a=await ld(t,e,r,sl(),s);return tE(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:a}=this.eventManagers[e];return s?Promise.resolve(s):(Mn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await UE(t),r=new IE(t);return e.register("authEvent",s=>(X(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Rc,{type:Rc},s=>{var u;const a=(u=s==null?void 0:s[0])==null?void 0:u[Rc];a!==void 0&&e(!!a),Me(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=CE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Pp()||wp()||au()}}const YE=JE;var ud="@firebase/auth",hd="1.13.1";/**
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
 */class XE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eI(i){Br(new ji("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=r.options;X(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:u,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sp(i)},g=new yT(r,s,a,m);return CT(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Br(new ji("auth-internal",t=>{const e=yi(t.getProvider("auth").getImmediate());return(r=>new XE(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ei(ud,hd,tI(i)),ei(ud,hd,"esm2020")}/**
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
 */const nI=5*60,iI=Pd("authIdTokenMaxAge")||nI;let dd=null;const rI=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>iI)return;const s=e==null?void 0:e.token;dd!==s&&(dd=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sI(i=Ld()){const t=ml(i,"auth");if(t.isInitialized())return t.getImmediate();const e=ST(i,{popupRedirectResolver:YE,persistence:[lE,JT,Vp]}),r=Pd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=rI(a.toString());WT(e,u,()=>u(e.currentUser)),HT(e,f=>u(f))}}const s=bd("auth");return s&&RT(e,`http://${s}`),e}function oI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}vT({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=s=>{const a=je("internal-error");a.customData=s,e(a)},r.type="text/javascript",r.charset="UTF-8",oI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eI("Browser");const Hp={apiKey:"AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",authDomain:"trippy-planner-807df.firebaseapp.com",projectId:"trippy-planner-807df",storageBucket:"trippy-planner-807df.firebasestorage.app",messagingSenderId:"376063703433",appId:"1:376063703433:web:..."},Wp=!!Hp.apiKey;let Gp=null,Zp=null;function aI(){if(!Wp)return!1;try{const i=kd(Hp);return Gp=bw(i),Zp=sI(i),!0}catch(i){return console.warn("Firebase init failed — running in guest mode",i),!1}}const Kp=()=>Wp,Ee=()=>Gp,go=()=>Zp;let js=null;function cI(i){if(!Kp()){i(null);return}const t=go();if(!t){i(null);return}GT(t,e=>{js=e,i(e)})}const nc=()=>js;async function lI(){return pE(go(),new In)}async function uI(i,t){return jT(go(),i,t)}async function hI(i,t){return $T(go(),i,t)}async function dI(){return ZT(go())}function ic(i){const t=i.querySelector(".auth-slot");if(t){if(!Kp()){t.innerHTML='<span class="auth-guest-note">Guest mode</span>';return}if(js){const e=js.displayName||js.email||"User";t.innerHTML=`
      <span class="auth-user-name">${fI(e)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `,t.querySelector(".auth-signout-btn").addEventListener("click",()=>dI())}else t.innerHTML='<button class="ghost-btn auth-signin-btn">Sign in</button>',t.querySelector(".auth-signin-btn").addEventListener("click",()=>pI())}}function fI(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function pI(){const i=document.getElementById("auth-modal");if(i){i.remove();return}const t=document.createElement("div");t.id="auth-modal",t.className="auth-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t);const e=r=>{t.querySelector("#auth-err").textContent=r};t.querySelector("#auth-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()}),t.querySelector("#auth-google").addEventListener("click",async()=>{try{await lI(),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-signin").addEventListener("click",async()=>{try{await uI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-create").addEventListener("click",async()=>{try{await hI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}})}let _a={};function mI(i){return _a=i,window.addEventListener("hashchange",kc),{start:kc,refresh:kc}}function kn(i){window.location.hash=i}function kc(){const i=window.location.hash.slice(1)||"/";for(const[t,e]of Object.entries(_a)){const r=_I(t,i);if(r!==null){e(r);return}}_a["/"]&&_a["/"]({})}function _I(i,t){if(i==="/")return t==="/"||t===""?{}:null;const e=i.split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(e.length!==r.length)return null;const s={};for(let a=0;a<e.length;a++)if(e[a].startsWith(":"))s[e[a].slice(1)]=decodeURIComponent(r[a]);else if(e[a]!==r[a])return null;return s}function fd(i,t){var e;return!t||!i?null:i.ownerId===t?"owner":((e=i.members)==null?void 0:e[t])||null}const rc=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),gI=()=>Math.random().toString(36).slice(2,9).toUpperCase(),yI=()=>({id:rc(),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1}),Qp="trippy-planner-trips",fu=i=>`trippy-trip-${i}`,Fr=()=>{try{return JSON.parse(localStorage.getItem(Qp)||"[]")}catch{return[]}},Jp=i=>{try{localStorage.setItem(Qp,JSON.stringify(i))}catch{}},$i=i=>{try{return JSON.parse(localStorage.getItem(fu(i))||"null")}catch{return null}},Ur=i=>{try{localStorage.setItem(fu(i.id),JSON.stringify(i))}catch{}},vI=i=>{try{localStorage.removeItem(fu(i))}catch{}};function pd(i){return i?typeof(i==null?void 0:i.toMillis)=="function"?i.toMillis():typeof i=="number"?i:0:0}function ll(i){return{memberUids:[],members:{},ownerName:"",...i,createdAt:pd(i.createdAt),updatedAt:pd(i.updatedAt)}}function wI(i,t,e){let r=[],s=[],a=null,u=null;function f(){const w=[...r];for(const O of s)w.find(F=>F.id===O.id)||w.push(O);w.forEach(O=>Ur(O));const E=new Set(w.map(O=>O.id)),R=Fr().filter(O=>!E.has(O.id)&&!!$i(O.id));Jp([...w.map(({id:O,name:F,createdAt:q})=>({id:O,name:F,createdAt:q})),...R]),e([...w])}function m(w){a&&(a(),a=null),u&&(u(),u=null);const E=Ee();if(!E||!w)return;const R=jh(il(E,"trips"),Hh("ownerId","==",w),Uw("updatedAt","desc"));a=rl(R,F=>{const q=F.docs.map(at=>ll({id:at.id,...at.data()})),J=r.filter(at=>!q.find(K=>K.id===at.id));r=[...q,...J],f()},F=>console.warn("Firestore owned trips:",F));const O=jh(il(E,"trips"),Hh("memberUids","array-contains",w));u=rl(O,F=>{s=F.docs.map(q=>ll({id:q.id,...q.data()})),f()},F=>console.warn("Firestore shared trips:",F))}async function g(w){const E=Ee();if(!(!E||!i))try{await uo(be(E,"trips",w.id),{...w,createdAt:w.createdAt||ri(),updatedAt:ri()},{merge:!0})}catch(R){console.warn("Firestore write:",R)}}const y=Fr().map(w=>$i(w.id)||{...w,days:[]});return r=y,setTimeout(()=>e([...y]),0),i&&m(i),{getAll:()=>{const w=[...r];for(const E of s)w.find(R=>R.id===E.id)||w.push(E);return w},async create(w){const E=rc(),R={id:E,name:w,ownerId:i||null,ownerName:t||"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]};return r.unshift(R),Ur(R),f(),await g(R),E},async delete(w){r=r.filter(R=>R.id!==w),s=s.filter(R=>R.id!==w),vI(w),f();const E=Ee();if(E&&i)try{await jw(be(E,"trips",w))}catch{}},async rename(w,E){const R=this.getAll().find(F=>F.id===w);if(!R)return;R.name=E,R.updatedAt=Date.now(),Ur(R),e([...this.getAll()]);const O=Ee();if(O&&i)try{await ho(be(O,"trips",w),{name:E,updatedAt:ri()})}catch{}},setUserId(w,E){i=w,t=E||"",w?m(w):(a&&(a(),a=null),u&&(u(),u=null),r=Fr().map(R=>$i(R.id)||{...R,days:[]}),s=[],e([...r]))},destroy(){a&&(a(),a=null),u&&(u(),u=null)}}}function md(i){return i.map(t=>`${t.id}|${t.date}|${t.destination}|${t.event}|${t.accommodation}|${t.accomCost}|${t.travelDetails}|${t.travelCost}|${t.travelDay}|${t.finalised}`).join("~")}function Yp(i,t,e){let r=$i(i)||{id:i,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=Array.isArray(r.days)?r.days:[],a=null,u=null,f=!1;function m(){r.days=s,r.updatedAt=Date.now(),Ur(r)}function g(){clearTimeout(u),f=!0,u=setTimeout(async()=>{const E=Ee();if(!E||!t){f=!1;return}try{await uo(be(E,"trips",i),{...r,days:s,updatedAt:ri()},{merge:!0})}catch(R){console.warn("Firestore write:",R)}setTimeout(()=>{f=!1},3e3)},1500)}function y(){m(),t&&g(),e([...s])}function w(){m(),t&&g()}if(t){const E=Ee();E&&(a=rl(be(E,"trips",i),R=>{if(!R.exists()||f)return;const O=R.data(),F=Array.isArray(O.days)?O.days:[];md(F)!==md(s)&&(r=ll({id:i,...O}),s=F,m(),e([...s]))},R=>console.warn("Firestore trip:",R)))}return{tripName:()=>r.name||"Trip",tripData:()=>({...r}),getAll:()=>[...s],add(E,R){const O={...yI(),date:E,destination:R};s.push(O),s.sort((F,q)=>F.date.localeCompare(q.date)),y()},update(E,R,O){const F=s.find(q=>q.id===E);F&&(F[R]=O,w())},remove(E){s=s.filter(R=>R.id!==E),y()},loadFromCSV(E){s=E,y()},toCSV(){const E=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],R=s.map(O=>[O.date,O.destination,O.event,O.travelDay?"Y":"N",O.accommodation,O.accomCost,O.travelDetails,O.travelCost,O.finalised?"Y":"N"].map(F=>`"${(F??"").toString().replace(/"/g,'""')}"`).join(","));return[E.join(","),...R].join(`
`)},metrics(){const E=s.length,R=s.filter(q=>q.travelDay).length,O=s.filter(q=>q.finalised).length,F=s.reduce((q,J)=>q+Number(J.accomCost||0)+Number(J.travelCost||0),0);return{total:E,travelDays:R,finalised:O,cost:F}},destroy(){clearTimeout(u),a&&(a(),a=null)}}}async function TI(i,t,e){const r=Ee();if(!r||!e)throw new Error("Must be signed in to share");const s=gI();return await uo(be(r,"invites",s),{tripId:i,role:t,createdBy:e,createdAt:ri()}),s}async function EI(i,t){const e=Ee();if(!e)throw new Error("Firebase not configured");const r=await qw(be(e,"invites",i));if(!r.exists())throw new Error("Invite not found or already used");const{tripId:s,role:a}=r.data();return await ho(be(e,"trips",s),{[`members.${t}`]:a,memberUids:Ow(t)}),s}async function II(i,t,e){const r=Ee();r&&await ho(be(r,"trips",i),{[`members.${t}`]:e})}async function bI(i,t){const e=Ee();e&&await ho(be(e,"trips",i),{[`members.${t}`]:Mw(),memberUids:Vw(t)})}async function Xp(i,t,e){const r=$i(t)||{id:t,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=[...r.days,...i.map(u=>({...u,id:rc()}))].sort((u,f)=>u.date.localeCompare(f.date));r.days=s,r.updatedAt=Date.now(),Ur(r);const a=Ee();if(a&&e)try{await ho(be(a,"trips",t),{days:s,updatedAt:ri()})}catch(u){console.warn("copyDaysToTrip Firestore:",u)}}async function AI(i,t){const e=`trippy-migrated-v2-${i}`;if(localStorage.getItem(e))return;const r=Ee();if(!r){localStorage.setItem(e,"1");return}try{const s=await $w(il(r,"users",i,"trips"));if(s.empty){localStorage.setItem(e,"1");return}for(const a of s.docs){const u=a.data();await uo(be(r,"trips",a.id),{...u,id:a.id,ownerId:i,ownerName:t||"",memberUids:u.memberUids||[],members:u.members||{}},{merge:!0})}localStorage.setItem(e,"1")}catch(s){console.warn("Old-path migration failed:",s)}}function PI(){try{const i=localStorage.getItem("trippy-planner-data");if(!i)return null;const t=JSON.parse(i);return!Array.isArray(t)||t.length===0?(localStorage.removeItem("trippy-planner-data"),null):t}catch{return null}}function SI(i,t,e){const r=rc(),s={id:r,name:i,ownerId:e||null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:t};Ur(s);const a=Fr();a.unshift({id:r,name:i,createdAt:s.createdAt}),Jp(a),localStorage.removeItem("trippy-planner-data");const u=Ee();return u&&e&&uo(be(u,"trips",r),{...s,createdAt:ri(),updatedAt:ri()}).catch(console.warn),r}const CI=["January","February","March","April","May","June","July","August","September","October","November","December"],RI=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Lc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function Fs(i,t,e,r){const s=i.querySelector("#cal-title"),a=i.querySelector("#cal-days-header"),u=i.querySelector("#cal-body");if(!s||!a||!u)return;s.textContent=`${CI[r]} ${e}`,a.innerHTML=RI.map(E=>`<div class="cal-header-cell">${E}</div>`).join("");const f={};t.forEach(E=>{E.date&&(f[E.date]=E)});const m=new Date(e,r,1).getDay(),g=new Date(e,r+1,0).getDate(),y=new Date;let w="";for(let E=0;E<m;E++)w+='<div class="cal-cell empty"></div>';for(let E=1;E<=g;E++){const R=`${e}-${String(r+1).padStart(2,"0")}-${String(E).padStart(2,"0")}`,O=y.getFullYear()===e&&y.getMonth()===r&&y.getDate()===E,F=f[R];let q="cal-cell";O?q+=" today":F&&(q+=" has-trip");let J=`<div class="cal-date-num${O?" today-num":""}">${E}</div>`;F&&(J+=`<div class="cal-dest">${Lc(F.destination)}</div>`,F.event&&(J+=`<div class="cal-note">${Lc(F.event)}</div>`),F.travelDetails&&(J+=`<div class="cal-travel-note">${Lc(F.travelDetails)}</div>`)),w+=`<div class="${q}">${J}</div>`}u.innerHTML=w}function tm(i,t,e){var y;(y=document.getElementById("share-modal-overlay"))==null||y.remove();const r=t.members||{},s=t.memberUids||[],a=t.ownerId===e,u=r[e]||null,f=Object.entries(r).map(([w,E])=>`
    <div class="share-member-row" data-uid="${w}">
      <span class="share-member-id">${w.slice(0,12)}…</span>
      ${a?`
        <select class="dark-input share-role-select" data-uid="${w}">
          <option value="editor" ${E==="editor"?"selected":""}>Editor</option>
          <option value="viewer" ${E==="viewer"?"selected":""}>Viewer</option>
        </select>
        <button class="ghost-btn share-remove-btn" data-uid="${w}">Remove</button>
      `:`<span class="role-badge role-${E}">${E}</span>`}
    </div>
  `).join(""),m=document.createElement("div");m.className="modal-overlay",m.id="share-modal-overlay",m.style.display="flex",m.innerHTML=`
    <div class="modal-box share-modal-box">
      <div class="modal-title">Share Trip</div>

      ${a?`
        <div class="share-section">
          <div class="share-section-label">Invite someone</div>
          <div class="share-role-row">
            <span class="share-role-label">Join as:</span>
            <select id="invite-role" class="dark-input share-role-dropdown">
              <option value="editor">Editor — can view &amp; edit</option>
              <option value="viewer">Viewer — read only</option>
            </select>
          </div>
          <div class="share-link-row">
            <input class="dark-input share-link-input" id="invite-link-input"
              readonly placeholder="Click Generate to create a link">
            <button class="add-btn" id="gen-link-btn">Generate</button>
            <button class="ghost-btn" id="copy-link-btn" style="display:none">Copy</button>
          </div>
          <p class="share-hint">Send the link to your collaborator. Each link can be used once.</p>
        </div>

        ${s.length>0?`
          <div class="share-section">
            <div class="share-section-label">Collaborators (${s.length})</div>
            <div id="share-members-list">${f}</div>
          </div>
        `:""}
      `:`
        <div class="share-section share-viewer-info">
          <span class="role-badge role-${u}">${u||"viewer"}</span>
          <p>Shared with you by <strong>${Yn(t.ownerName||"the trip owner")}</strong>.</p>
          ${u!=="editor"?'<p class="share-readonly-note">You have read-only access. Ask the owner for edit access.</p>':"<p>You can view and edit this trip.</p>"}
        </div>
      `}

      <div class="modal-actions">
        <button class="ghost-btn" id="share-close-btn">Close</button>
      </div>
    </div>
  `,document.body.appendChild(m);const g=()=>m.remove();document.getElementById("share-close-btn").addEventListener("click",g),m.addEventListener("click",w=>{w.target===m&&g()}),a&&(document.getElementById("gen-link-btn").addEventListener("click",async()=>{const w=document.getElementById("gen-link-btn");w.textContent="Generating…",w.disabled=!0;try{const E=document.getElementById("invite-role").value,R=await TI(i,E,e),O=`${location.origin}${location.pathname}#/join/${R}`;document.getElementById("invite-link-input").value=O,document.getElementById("copy-link-btn").style.display=""}catch(E){alert("Failed to generate invite link: "+E.message)}finally{w.textContent="Generate",w.disabled=!1}}),document.getElementById("copy-link-btn").addEventListener("click",()=>{const w=document.getElementById("invite-link-input").value;navigator.clipboard.writeText(w).then(()=>{const E=document.getElementById("copy-link-btn");E.textContent="Copied!",setTimeout(()=>{E.textContent="Copy"},2e3)})}),m.addEventListener("change",async w=>{if(!w.target.matches(".share-role-select"))return;const E=w.target.dataset.uid;try{await II(i,E,w.target.value)}catch(R){console.warn("Role update failed:",R)}}),m.addEventListener("click",async w=>{if(!w.target.matches(".share-remove-btn"))return;const E=w.target.dataset.uid;if(confirm("Remove this collaborator from the trip?"))try{await bI(i,E),w.target.closest(".share-member-row").remove()}catch(R){console.warn("Remove member failed:",R)}}))}function kI(i,t,e){var f;(f=document.getElementById("add-day-overlay"))==null||f.remove();const r=Fr().map(m=>$i(m.id)).filter(Boolean).filter(m=>m.id!==t&&(!m.ownerId||m.ownerId===e)),s=r.length?r.map(m=>`<option value="${m.id}">${Yn(m.name)}</option>`).join(""):"<option disabled>No own trips — create one first</option>",a=document.createElement("div");a.className="modal-overlay",a.id="add-day-overlay",a.style.display="flex",a.innerHTML=`
    <div class="modal-box add-day-box">
      <div class="modal-title">Add Day to My Trip</div>
      <div class="add-day-preview">
        <div class="add-day-date">${em(i.date)}</div>
        <div class="add-day-dest">${Yn(i.destination||"Unknown")}</div>
        ${i.event?`<div class="add-day-field">${Yn(i.event)}</div>`:""}
        ${i.travelDetails?`<div class="add-day-field muted">${Yn(i.travelDetails)}</div>`:""}
      </div>
      <div class="add-day-target-row">
        <label class="add-day-label">Add to:</label>
        <select id="add-day-target" class="dark-input">${s}</select>
      </div>
      <div class="modal-actions">
        <button class="add-btn"   id="add-day-confirm" ${r.length?"":"disabled"}>Add Day</button>
        <button class="ghost-btn" id="add-day-cancel">Cancel</button>
      </div>
    </div>
  `,document.body.appendChild(a);const u=()=>a.remove();document.getElementById("add-day-cancel").addEventListener("click",u),a.addEventListener("click",m=>{m.target===a&&u()}),document.getElementById("add-day-confirm").addEventListener("click",async()=>{var w;const m=document.getElementById("add-day-target").value,g=((w=r.find(E=>E.id===m))==null?void 0:w.name)||"trip",y=document.getElementById("add-day-confirm");y.textContent="Adding…",y.disabled=!0;try{await Xp([i],m,e),u(),LI(`Day added to "${g}"`)}catch(E){alert("Could not add day: "+E.message),y.textContent="Add Day",y.disabled=!1}})}function LI(i){const t=document.createElement("div");t.className="toast-success",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2800)}function xI(i,t,e){var g;(g=document.getElementById("copy-days-overlay"))==null||g.remove();const r=Fr().map(y=>$i(y.id)).filter(Boolean),s=e?r.filter(y=>y.id!==i&&(y.ownerId===e||!y.ownerId)):r.filter(y=>y.id!==i),a=s.length?s.map(y=>`<option value="${y.id}">${Yn(y.name)}</option>`).join(""):"<option disabled>No own trips found — create one first</option>",u=t.map((y,w)=>`
    <label class="copy-day-row">
      <input type="checkbox" class="copy-day-check" value="${w}">
      <span class="copy-day-date">${em(y.date)}</span>
      <span class="copy-day-dest">${Yn(y.destination||"Unknown")}</span>
      ${y.event?`<span class="copy-day-event">${Yn(y.event)}</span>`:""}
    </label>
  `).join(""),f=document.createElement("div");f.className="modal-overlay",f.id="copy-days-overlay",f.style.display="flex",f.innerHTML=`
    <div class="modal-box copy-days-box">
      <div class="modal-title">Copy Days to My Trip</div>
      <div class="copy-days-target-row">
        <label>Copy into:</label>
        <select id="copy-target-trip" class="dark-input">
          ${a}
        </select>
      </div>
      <div class="copy-day-list">${u}</div>
      <div class="copy-select-all-row">
        <button class="ghost-btn" id="copy-select-all">Select all</button>
        <button class="ghost-btn" id="copy-select-none">Clear</button>
      </div>
      <div class="modal-actions">
        <button class="add-btn" id="copy-confirm-btn" ${s.length?"":"disabled"}>Copy selected</button>
        <button class="ghost-btn" id="copy-cancel-btn">Cancel</button>
      </div>
    </div>
  `,document.body.appendChild(f);const m=()=>f.remove();document.getElementById("copy-cancel-btn").addEventListener("click",m),f.addEventListener("click",y=>{y.target===f&&m()}),document.getElementById("copy-select-all").addEventListener("click",()=>{f.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!0})}),document.getElementById("copy-select-none").addEventListener("click",()=>{f.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!1})}),document.getElementById("copy-confirm-btn").addEventListener("click",async()=>{const y=[...f.querySelectorAll(".copy-day-check:checked")];if(!y.length){alert("Select at least one day.");return}const w=y.map(O=>t[Number(O.value)]),E=document.getElementById("copy-target-trip").value,R=document.getElementById("copy-confirm-btn");R.textContent="Copying…",R.disabled=!0;try{await Xp(w,E,e),m(),alert(`${w.length} day${w.length!==1?"s":""} copied successfully.`)}catch(O){console.warn("Copy failed:",O),alert("Copy failed: "+O.message),R.textContent="Copy selected",R.disabled=!1}})}function Yn(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function em(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}let bn=null,nn="all",tn="trips",ul=new Date().getFullYear(),Fi=new Date().getMonth();function nm(i){const t=nc(),e=(t==null?void 0:t.uid)||null,r=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"";bn&&(bn.destroy(),bn=null),bn=wI(e,r,s=>im(i,s,e))}function im(i,t,e){var m,g,y,w;const r=PI(),s=NI(t,e);i.innerHTML=`
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="auth-slot"></div>
    </div>

    <div class="landing-tabs">
      <button class="landing-tab ${tn==="trips"?"active":""}" data-ltab="trips">Trips</button>
      <button class="landing-tab ${tn==="calendar"?"active":""}" data-ltab="calendar">Calendar</button>
    </div>

    <!-- ── Trips view ──────────────────────────────────────────────────── -->
    <div id="lv-trips" ${tn!=="trips"?'style="display:none"':""}>
      ${r?`
        <div class="migration-banner" id="mig-banner">
          <span class="mig-text">You have a saved trip — give it a name to keep it:</span>
          <input class="dark-input mig-input" id="mig-name" value="My Trip" placeholder="Trip name">
          <button class="add-btn mig-save" id="mig-save">Save</button>
          <button class="ghost-btn mig-skip" id="mig-skip">Dismiss</button>
        </div>
      `:""}

      <div class="landing-header">
        <h1 class="landing-title">Your Trips</h1>
        <button class="add-btn" id="new-trip-btn">+ New Trip</button>
      </div>

      ${e?`
        <div class="filter-tabs">
          <button class="filter-tab ${nn==="all"?"active":""}" data-filter="all">All Trips</button>
          <button class="filter-tab ${nn==="mine"?"active":""}" data-filter="mine">My Trips</button>
          <button class="filter-tab ${nn==="shared"?"active":""}" data-filter="shared">Shared with Me</button>
          <button class="filter-tab ${nn==="past"?"active":""}" data-filter="past">Past Trips</button>
        </div>
      `:""}

      ${s.length===0?`
        <div class="empty-state">
          <div class="empty-icon">✈</div>
          <p>${MI()}</p>
        </div>
      `:`
        <div class="landing-grid" id="trips-grid">
          ${s.map(E=>DI(E,e)).join("")}
        </div>
      `}
    </div>

    <!-- ── Calendar view ───────────────────────────────────────────────── -->
    <div id="lv-calendar" ${tn!=="calendar"?'style="display:none"':""}>
      <div class="landing-cal-header">
        <h2 class="landing-cal-title">All My Trips</h2>
        <div class="cal-nav">
          <button class="cal-nav-btn" id="cal-prev">&#8249; Prev</button>
          <span class="cal-title" id="cal-title"></span>
          <button class="cal-nav-btn" id="cal-next">Next &#8250;</button>
        </div>
      </div>
      <div class="cal-grid" id="cal-days-header"></div>
      <div style="height:6px"></div>
      <div class="cal-grid" id="cal-body"></div>
      ${t.length===0?`
        <div class="empty-state" style="margin-top:32px">
          <div class="empty-icon">📅</div>
          <p>Add days to your trips and they'll appear here.</p>
        </div>
      `:""}
    </div>

    <!-- ── New-trip modal ──────────────────────────────────────────────── -->
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
  `,ic(i),i.querySelectorAll("[data-ltab]").forEach(E=>{E.addEventListener("click",()=>{tn=E.dataset.ltab,i.querySelector("#lv-trips").style.display=tn==="trips"?"":"none",i.querySelector("#lv-calendar").style.display=tn==="calendar"?"":"none",i.querySelectorAll(".landing-tab").forEach(R=>R.classList.toggle("active",R.dataset.ltab===tn)),tn==="calendar"&&ra(i,t,e)})}),tn==="calendar"&&ra(i,t,e),(m=i.querySelector("#cal-prev"))==null||m.addEventListener("click",()=>{Fi--,Fi<0&&(Fi=11,ul--),ra(i,t,e)}),(g=i.querySelector("#cal-next"))==null||g.addEventListener("click",()=>{Fi++,Fi>11&&(Fi=0,ul++),ra(i,t,e)}),r&&(i.querySelector("#mig-save").addEventListener("click",()=>{const E=i.querySelector("#mig-name").value.trim()||"My Trip";SI(E,r,e),nm(i)}),i.querySelector("#mig-skip").addEventListener("click",()=>{localStorage.removeItem("trippy-planner-data"),i.querySelector("#mig-banner").remove()})),i.querySelectorAll(".filter-tab").forEach(E=>{E.addEventListener("click",()=>{nn=E.dataset.filter,im(i,bn.getAll(),e)})});const a=i.querySelector("#new-trip-modal"),u=i.querySelector("#trip-name-input");(y=i.querySelector("#new-trip-btn"))==null||y.addEventListener("click",()=>{a.style.display="flex",u.focus()}),i.querySelector("#modal-cancel").addEventListener("click",()=>{a.style.display="none",u.value=""}),a.addEventListener("click",E=>{E.target===a&&(a.style.display="none",u.value="")});async function f(){const E=u.value.trim();if(!E){u.focus();return}a.style.display="none",u.value="";const R=await bn.create(E);kn(`/trip/${R}`)}i.querySelector("#modal-create").addEventListener("click",f),u.addEventListener("keydown",E=>{E.key==="Enter"&&f(),E.key==="Escape"&&(a.style.display="none",u.value="")}),(w=i.querySelector("#trips-grid"))==null||w.addEventListener("click",async E=>{const R=E.target.closest("[data-trip-id]");if(!R)return;const O=R.dataset.tripId,F=bn.getAll().find(q=>q.id===O);if(E.target.closest(".trip-open-btn"))kn(`/trip/${O}`);else if(E.target.closest(".trip-globe-btn"))kn(`/globe/${O}`);else if(E.target.closest(".trip-share-btn")){if(!e){alert("Sign in to share trips.");return}tm(O,F,e)}else if(E.target.closest(".trip-delete-btn"))confirm("Delete this trip? This cannot be undone.")&&await bn.delete(O);else if(E.target.closest(".trip-card-title")){if(!(!e||!(F!=null&&F.ownerId)||F.ownerId===e))return;const J=E.target.closest(".trip-card-title"),at=J.textContent.trim(),K=document.createElement("input");K.className="dark-input trip-rename-input",K.value=at,J.replaceWith(K),K.focus(),K.select();const ft=async()=>{const gt=K.value.trim()||at;await bn.rename(O,gt)};K.addEventListener("blur",ft),K.addEventListener("keydown",gt=>{gt.key==="Enter"&&K.blur()})}})}function ra(i,t,e){const r=e?t.filter(u=>!u.ownerId||u.ownerId===e):t,s=new Set,a=r.flatMap(u=>(u.days||[]).map(f=>({...f,_tripName:u.name}))).filter(u=>!u.date||s.has(u.date)?!1:(s.add(u.date),!0)).sort((u,f)=>u.date.localeCompare(f.date));Fs(i,a,ul,Fi)}function DI(i,t){var O;const e=i.days||[],{total:r,finalised:s,cost:a}=OI(e),u=r?Math.round(s/r*100):0,f=e.length?`${_d(e[0].date)} – ${_d(e[e.length-1].date)}`:"No days yet",m=[...new Set(e.map(F=>F.destination).filter(Boolean))],g=m.slice(0,3),y=!t||!i.ownerId||i.ownerId===t,w=i.ownerId&&t&&i.ownerId!==t?((O=i.members)==null?void 0:O[t])||"viewer":null,E=(i.memberUids||[]).length,R=hl(i);return`
    <div class="trip-card ${w?"trip-card-shared":""} ${R?"trip-card-past":""}" data-trip-id="${i.id}">
      <div class="trip-card-top">
        <div class="trip-card-title-row">
          <div class="trip-card-title">${xc(i.name)}</div>
          ${w?`<span class="role-badge role-${w}">${w}</span>`:""}
          ${y&&E>0?`<span class="collab-count" title="${E} collaborator${E!==1?"s":""}">👥 ${E}</span>`:""}
        </div>
        <div class="trip-card-meta">
          ${w?`<span class="trip-card-owner">by ${xc(i.ownerName||"Unknown")}</span>`:""}
          <span class="trip-card-range">${f}</span>
        </div>
      </div>
      ${g.length?`
        <div class="trip-card-dests">
          ${g.map(F=>`<span class="dest-tag">${xc(F)}</span>`).join("")}
          ${m.length>3?`<span class="dest-tag dest-more">+${m.length-3} more</span>`:""}
        </div>
      `:'<div class="trip-card-no-days">No days added yet</div>'}
      <div class="trip-card-stats">
        <span>${r} day${r!==1?"s":""}</span>
        <span>$${a.toLocaleString("en-AU",{maximumFractionDigits:0})} AUD</span>
        <span>${u}% finalised</span>
      </div>
      <div class="trip-card-progress">
        <div class="trip-progress-fill" style="width:${u}%"></div>
      </div>
      <div class="trip-card-actions">
        <button class="add-btn trip-open-btn">Open</button>
        <button class="ghost-btn trip-globe-btn">Globe</button>
        ${y?'<button class="ghost-btn trip-share-btn">Share</button>':""}
        ${y?'<button class="ghost-btn trip-delete-btn">Delete</button>':""}
      </div>
    </div>
  `}function hl(i){const t=(i.days||[]).map(r=>r.date).filter(Boolean).sort();if(!t.length)return!1;const e=new Date().toISOString().slice(0,10);return t[t.length-1]<e}function NI(i,t){if(nn==="past")return i.filter(r=>hl(r));const e=i.filter(r=>!hl(r));return nn==="mine"?e.filter(r=>!t||!r.ownerId||r.ownerId===t):nn==="shared"?e.filter(r=>t&&r.ownerId&&r.ownerId!==t):e}function MI(){return nn==="past"?"No past trips yet.":nn==="shared"?"No trips have been shared with you yet.":"No trips yet — create your first one above."}function OI(i){return{total:i.length,finalised:i.filter(t=>t.finalised).length,cost:i.reduce((t,e)=>t+Number(e.accomCost||0)+Number(e.travelCost||0),0)}}function _d(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}function xc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const gd=["January","February","March","April","May","June","July","August","September","October","November","December"],VI=["Su","Mo","Tu","We","Th","Fr","Sa"];class FI{constructor(t,e,r){this.wrap=t,this.input=e,this.onSelect=r,this.selected=null;const s=new Date;this.year=s.getFullYear(),this.month=s.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",t=>{this.wrap.contains(t.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(t){this.month+=t,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const t=this._dropdown.querySelector("#dp-month-label"),e=this._dropdown.querySelector("#dp-grid");t.textContent=`${gd[this.month]} ${this.year}`;const r=new Date(this.year,this.month,1).getDay(),s=new Date(this.year,this.month+1,0).getDate(),a=new Date;let u=VI.map(f=>`<div class="dp-dh">${f}</div>`).join("");for(let f=0;f<r;f++)u+='<button class="dp-day empty" disabled></button>';for(let f=1;f<=s;f++){const m=this.dateString(this.year,this.month+1,f),g=this.selected===m,y=a.getFullYear()===this.year&&a.getMonth()===this.month&&a.getDate()===f;let w="dp-day";g?w+=" selected":y&&(w+=" today"),u+=`<button class="${w}" data-date="${m}">${f}</button>`}e.innerHTML=u,e.querySelectorAll(".dp-day:not(.empty)").forEach(f=>{f.addEventListener("click",()=>{this.selected=f.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(t,e,r){return`${t}-${String(e).padStart(2,"0")}-${String(r).padStart(2,"0")}`}formatDisplay(t){const[e,r,s]=t.split("-");return`${s} ${gd[parseInt(r)-1]} ${e}`}reset(){this.selected=null,this.input.value=""}}const UI=["January","February","March","April","May","June","July","August","September","October","November","December"];function BI(i){if(!i)return"";const[t,e,r]=i.split("-");return`${r} ${UI[parseInt(e)-1]} ${t}`}function sa(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function zI(i,t,e,r,s,a={}){const u=e.metrics(),f=i.querySelector("#metrics-row");f&&(f.style.display=t.length?"grid":"none",i.querySelector("#m-days").textContent=u.total,i.querySelector("#m-travel").textContent=u.travelDays,i.querySelector("#m-cost").textContent="$"+Number(u.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const m=i.querySelector("#progress-wrap");if(m)if(t.length){m.style.display="block";const y=u.total?Math.round(u.finalised/u.total*100):0;i.querySelector("#progress-fill").style.width=y+"%",i.querySelector("#progress-count").textContent=`${u.finalised} / ${u.total} days finalised`}else m.style.display="none";const g=i.querySelector("#itinerary-list");if(g){if(t.length===0){g.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}g.innerHTML=t.map(y=>{const w=r===y.id,E=y.finalised?'<span class="day-badge badge-final">Finalised</span>':y.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',R=w?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${y.id}" data-field="event"
              value="${sa(y.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${y.id}" data-field="accommodation"
              value="${sa(y.accommodation)}" placeholder="Hotel / Airbnb name">
          </div>
          <div class="detail-field">
            <label>Accommodation Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${y.id}" data-field="accomCost" value="${y.accomCost}">
          </div>
          <div class="detail-field">
            <label>Travel Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${y.id}" data-field="travelCost" value="${y.travelCost}">
          </div>
          <div class="detail-field detail-full">
            <label>Travel Details</label>
            <input class="dark-input" data-id="${y.id}" data-field="travelDetails"
              value="${sa(y.travelDetails)}" placeholder="Flight / train / driving info">
          </div>
        </div>
        <div class="detail-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${y.id}" data-field="travelDay"
              ${y.travelDay?"checked":""}>
            Travel day
          </label>
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${y.id}" data-field="finalised"
              ${y.finalised?"checked":""}>
            Finalised
          </label>
          <button class="delete-btn" data-delete="${y.id}">Remove</button>
        </div>
      </div>`:"";return`
      <div class="day-card">
        <div class="day-header" data-toggle="${y.id}">
          <div class="day-dot"></div>
          <div class="day-date">${BI(y.date)}</div>
          <div class="day-dest">${sa(y.destination)}</div>
          ${E}
          <span class="chevron${w?" open":""}">&#9654;</span>
          ${a.onAddDay?`<button class="add-to-my-trip-btn" data-addday="${y.id}" title="Add this day to one of your trips">＋ Add</button>`:""}
        </div>
        ${R}
      </div>`}).join(""),g.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.toggle;s(r===w?null:w)})}),a.onAddDay&&g.querySelectorAll("[data-addday]").forEach(y=>{y.addEventListener("click",w=>{w.stopPropagation();const E=t.find(R=>R.id===y.dataset.addday);E&&a.onAddDay(E)})}),g.querySelectorAll("[data-field]").forEach(y=>{const w=()=>{const E=y.type==="checkbox"?y.checked:y.value;e.update(y.dataset.id,y.dataset.field,E)};y.addEventListener(y.type==="checkbox"?"change":"blur",w)}),g.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&e.remove(y.dataset.delete)})})}}let Xt=null;function qI(i,t){Xt&&(Xt.destroy(),Xt=null);const e=nc(),r=(e==null?void 0:e.uid)||null;Xt=Yp(t,r,K=>{f=K,J()});let s=Xt.tripData(),a=fd(s,r),u=a==="viewer";i.innerHTML=`
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
        <button class="ghost-btn share-trip-btn" id="share-trip-btn" style="display:none">Share</button>
        <button class="ghost-btn copy-days-btn"  id="copy-days-btn"  style="display:none">Copy Days →</button>
        <div class="auth-slot"></div>
      </div>
    </div>

    ${u?`
      <div class="readonly-banner">
        <span>👁 Read-only — you are a <strong>viewer</strong> on this shared trip</span>
      </div>
    `:""}

    <!-- ── Planner Tab ───────────────────────────────────────────────────── -->
    <div id="tab-planner">
      ${u?"":`
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
      `}

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

      ${u?"":`
        <div class="io-row">
          <button class="ghost-btn" id="download-btn">↓ Download CSV</button>
          <button class="ghost-btn" id="upload-btn">↑ Load Plan</button>
          <input type="file" id="upload-input" accept=".csv" style="display:none">
        </div>
      `}
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
  `;let f=Xt.getAll(),m=null,g="planner";const y=new Date;let w=y.getFullYear(),E=y.getMonth();i.querySelector("#trip-name-label").textContent=Xt.tripName(),ic(i);function R(){s=Xt.tripData(),a=fd(s,r),u=a==="viewer";const K=i.querySelector("#share-trip-btn"),ft=i.querySelector("#copy-days-btn");a==="owner"&&r?(K.style.display="",ft.style.display="none"):a==="viewer"?(K.style.display="none",ft.style.display=""):a==="editor"&&(K.style.display="none",ft.style.display="none")}R(),i.querySelector("#back-btn").addEventListener("click",()=>kn("/")),i.querySelector("#globe-nav-btn").addEventListener("click",()=>kn(`/globe/${t}`)),i.querySelector("#share-trip-btn").addEventListener("click",()=>{tm(t,Xt.tripData(),r)}),i.querySelector("#copy-days-btn").addEventListener("click",()=>{xI(t,Xt.getAll(),r)});let O=null,F=null;if(!u){let Lt=function(){const C=gt.value.trim();if(!O||!C){ft.style.borderColor=O?"":"var(--accent)",gt.style.borderColor=C?"":"var(--accent)";return}ft.style.borderColor="",gt.style.borderColor="",Xt.add(O,C),O=null,F.reset(),gt.value="",gt.focus()};var at=Lt;const K=i.querySelector("#dp-wrap"),ft=i.querySelector("#new-date-display");F=new FI(K,ft,C=>{O=C}),F.init();const gt=i.querySelector("#new-dest");i.querySelector("#add-btn").addEventListener("click",Lt),gt.addEventListener("keydown",C=>{C.key==="Enter"&&Lt()}),i.querySelector("#download-btn").addEventListener("click",()=>{const C=new Blob([Xt.toCSV()],{type:"text/csv"}),I=document.createElement("a");I.href=URL.createObjectURL(C),I.download=`${Xt.tripName().replace(/\s+/g,"_")}.csv`,I.click(),URL.revokeObjectURL(I.href)}),i.querySelector("#upload-btn").addEventListener("click",()=>{i.querySelector("#upload-input").click()}),i.querySelector("#upload-input").addEventListener("change",C=>{const I=C.target.files[0];if(!I)return;const P=new FileReader;P.onload=k=>{const x=k.target.result.trim().split(`
`).slice(1).map(b=>{const qt=(b.match(/(".*?"|[^,]+)/g)||[]).map(Qt=>Qt.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:qt[0]||"",destination:qt[1]||"",event:qt[2]||"",travelDay:qt[3]==="Y",accommodation:qt[4]||"",accomCost:parseFloat(qt[5])||0,travelDetails:qt[6]||"",travelCost:parseFloat(qt[7])||0,finalised:qt[8]==="Y"}}).filter(b=>b.date&&b.destination);Xt.loadFromCSV(x)},P.readAsText(I),C.target.value=""})}i.querySelectorAll(".tab").forEach(K=>{K.addEventListener("click",()=>{g=K.dataset.tab,i.querySelectorAll(".tab").forEach(ft=>ft.classList.toggle("active",ft.dataset.tab===g)),i.querySelector("#tab-planner").style.display=g==="planner"?"":"none",i.querySelector("#tab-calendar").style.display=g==="calendar"?"":"none",g==="calendar"&&Fs(i,f,w,E)})}),i.querySelector("#cal-prev").addEventListener("click",()=>{E--,E<0&&(E=11,w--),Fs(i,f,w,E)}),i.querySelector("#cal-next").addEventListener("click",()=>{E++,E>11&&(E=0,w++),Fs(i,f,w,E)});function q(){return u?new Proxy(Xt,{get(K,ft){return["add","update","remove","loadFromCSV"].includes(ft)?()=>{}:K[ft]}}):Xt}function J(){R(),i.querySelector("#trip-name-label").textContent=Xt.tripName();const K=r&&a!=="owner"?{onAddDay:ft=>kI(ft,t,r)}:{};zI(i,f,q(),m,ft=>{m=ft,J()},K),g==="calendar"&&Fs(i,f,w,E)}J()}var $I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jI(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var dl={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})($I,function(e){var r="1.9.4";function s(n){var o,l,h,p;for(l=1,h=arguments.length;l<h;l++){p=arguments[l];for(o in p)n[o]=p[o]}return n}var a=Object.create||function(){function n(){}return function(o){return n.prototype=o,new n}}();function u(n,o){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var h=l.call(arguments,2);return function(){return n.apply(o,h.length?h.concat(l.call(arguments)):arguments)}}var f=0;function m(n){return"_leaflet_id"in n||(n._leaflet_id=++f),n._leaflet_id}function g(n,o,l){var h,p,v,A;return A=function(){h=!1,p&&(v.apply(l,p),p=!1)},v=function(){h?p=arguments:(n.apply(l,arguments),setTimeout(A,o),h=!0)},v}function y(n,o,l){var h=o[1],p=o[0],v=h-p;return n===h&&l?n:((n-p)%v+v)%v+p}function w(){return!1}function E(n,o){if(o===!1)return n;var l=Math.pow(10,o===void 0?6:o);return Math.round(n*l)/l}function R(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function O(n){return R(n).split(/\s+/)}function F(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in o)n.options[l]=o[l];return n.options}function q(n,o,l){var h=[];for(var p in n)h.push(encodeURIComponent(l?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!o||o.indexOf("?")===-1?"?":"&")+h.join("&")}var J=/\{ *([\w_ -]+) *\}/g;function at(n,o){return n.replace(J,function(l,h){var p=o[h];if(p===void 0)throw new Error("No value provided for variable "+l);return typeof p=="function"&&(p=p(o)),p})}var K=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function ft(n,o){for(var l=0;l<n.length;l++)if(n[l]===o)return l;return-1}var gt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Lt(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var C=0;function I(n){var o=+new Date,l=Math.max(0,16-(o-C));return C=o+l,window.setTimeout(n,l)}var P=window.requestAnimationFrame||Lt("RequestAnimationFrame")||I,k=window.cancelAnimationFrame||Lt("CancelAnimationFrame")||Lt("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function S(n,o,l){if(l&&P===I)n.call(o);else return P.call(window,u(n,o))}function x(n){n&&k.call(window,n)}var b={__proto__:null,extend:s,create:a,bind:u,get lastId(){return f},stamp:m,throttle:g,wrapNum:y,falseFn:w,formatNum:E,trim:R,splitWords:O,setOptions:F,getParamString:q,template:at,isArray:K,indexOf:ft,emptyImageUrl:gt,requestFn:P,cancelFn:k,requestAnimFrame:S,cancelAnimFrame:x};function Ct(){}Ct.extend=function(n){var o=function(){F(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,h=a(l);h.constructor=o,o.prototype=h;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(o[p]=this[p]);return n.statics&&s(o,n.statics),n.includes&&(qt(n.includes),s.apply(null,[h].concat(n.includes))),s(h,n),delete h.statics,delete h.includes,h.options&&(h.options=l.options?a(l.options):{},s(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,A=h._initHooks.length;v<A;v++)h._initHooks[v].call(this)}},o},Ct.include=function(n){var o=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},Ct.mergeOptions=function(n){return s(this.prototype.options,n),this},Ct.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function qt(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=K(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Qt={on:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o);else{n=O(n);for(var p=0,v=n.length;p<v;p++)this._on(n[p],o,l)}return this},off:function(n,o,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],o);else{n=O(n);for(var p=arguments.length===1,v=0,A=n.length;v<A;v++)p?this._off(n[v]):this._off(n[v],o,l)}return this},_on:function(n,o,l,h){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,l)===!1){l===this&&(l=void 0);var p={fn:o,ctx:l};h&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,o,l){var h,p,v;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(p=0,v=h.length;p<v;p++)h[p].fn=w;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var A=this._listens(n,o,l);if(A!==!1){var N=h[A];this._firingCount&&(N.fn=w,this._events[n]=h=h.slice()),h.splice(A,1)}}},fire:function(n,o,l){if(!this.listens(n,l))return this;var h=s({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var v=0,A=p.length;v<A;v++){var N=p[v],V=N.fn;N.once&&this.off(n,V,N.ctx),V.call(N.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(n,o,l,h){typeof n!="string"&&console.warn('"string" type argument expected');var p=o;typeof o!="function"&&(h=!!o,p=void 0,l=void 0);var v=this._events&&this._events[n];if(v&&v.length&&this._listens(n,p,l)!==!1)return!0;if(h){for(var A in this._eventParents)if(this._eventParents[A].listens(n,o,l,h))return!0}return!1},_listens:function(n,o,l){if(!this._events)return!1;var h=this._events[n]||[];if(!o)return!!h.length;l===this&&(l=void 0);for(var p=0,v=h.length;p<v;p++)if(h[p].fn===o&&h[p].ctx===l)return p;return!1},once:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o,!0);else{n=O(n);for(var p=0,v=n.length;p<v;p++)this._on(n[p],o,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[m(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[m(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};Qt.addEventListener=Qt.on,Qt.removeEventListener=Qt.clearAllEventListeners=Qt.off,Qt.addOneTimeEventListener=Qt.once,Qt.fireEvent=Qt.fire,Qt.hasEventListeners=Qt.listens;var vi=Ct.extend(Qt);function et(n,o,l){this.x=l?Math.round(n):n,this.y=l?Math.round(o):o}var wi=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};et.prototype={clone:function(){return new et(this.x,this.y)},add:function(n){return this.clone()._add(nt(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(nt(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new et(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new et(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=wi(this.x),this.y=wi(this.y),this},distanceTo:function(n){n=nt(n);var o=n.x-this.x,l=n.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(n){return n=nt(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=nt(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function nt(n,o,l){return n instanceof et?n:K(n)?new et(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new et(n.x,n.y):new et(n,o,l)}function At(n,o){if(n)for(var l=o?[n,o]:n,h=0,p=l.length;h<p;h++)this.extend(l[h])}At.prototype={extend:function(n){var o,l;if(!n)return this;if(n instanceof et||typeof n[0]=="number"||"x"in n)o=l=nt(n);else if(n=Jt(n),o=n.min,l=n.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return nt((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return nt(this.min.x,this.max.y)},getTopRight:function(){return nt(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,l;return typeof n[0]=="number"||n instanceof et?n=nt(n):n=Jt(n),n instanceof At?(o=n.min,l=n.max):o=l=n,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Jt(n);var o=this.min,l=this.max,h=n.min,p=n.max,v=p.x>=o.x&&h.x<=l.x,A=p.y>=o.y&&h.y<=l.y;return v&&A},overlaps:function(n){n=Jt(n);var o=this.min,l=this.max,h=n.min,p=n.max,v=p.x>o.x&&h.x<l.x,A=p.y>o.y&&h.y<l.y;return v&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,l=this.max,h=Math.abs(o.x-l.x)*n,p=Math.abs(o.y-l.y)*n;return Jt(nt(o.x-h,o.y-p),nt(l.x+h,l.y+p))},equals:function(n){return n?(n=Jt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Jt(n,o){return!n||n instanceof At?n:new At(n,o)}function Yt(n,o){if(n)for(var l=o?[n,o]:n,h=0,p=l.length;h<p;h++)this.extend(l[h])}Yt.prototype={extend:function(n){var o=this._southWest,l=this._northEast,h,p;if(n instanceof yt)h=n,p=n;else if(n instanceof Yt){if(h=n._southWest,p=n._northEast,!h||!p)return this}else return n?this.extend(ct(n)||Rt(n)):this;return!o&&!l?(this._southWest=new yt(h.lat,h.lng),this._northEast=new yt(p.lat,p.lng)):(o.lat=Math.min(h.lat,o.lat),o.lng=Math.min(h.lng,o.lng),l.lat=Math.max(p.lat,l.lat),l.lng=Math.max(p.lng,l.lng)),this},pad:function(n){var o=this._southWest,l=this._northEast,h=Math.abs(o.lat-l.lat)*n,p=Math.abs(o.lng-l.lng)*n;return new Yt(new yt(o.lat-h,o.lng-p),new yt(l.lat+h,l.lng+p))},getCenter:function(){return new yt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new yt(this.getNorth(),this.getWest())},getSouthEast:function(){return new yt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof yt||"lat"in n?n=ct(n):n=Rt(n);var o=this._southWest,l=this._northEast,h,p;return n instanceof Yt?(h=n.getSouthWest(),p=n.getNorthEast()):h=p=n,h.lat>=o.lat&&p.lat<=l.lat&&h.lng>=o.lng&&p.lng<=l.lng},intersects:function(n){n=Rt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),v=p.lat>=o.lat&&h.lat<=l.lat,A=p.lng>=o.lng&&h.lng<=l.lng;return v&&A},overlaps:function(n){n=Rt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),v=p.lat>o.lat&&h.lat<l.lat,A=p.lng>o.lng&&h.lng<l.lng;return v&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=Rt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Rt(n,o){return n instanceof Yt?n:new Yt(n,o)}function yt(n,o,l){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,l!==void 0&&(this.alt=+l)}yt.prototype={equals:function(n,o){if(!n)return!1;n=ct(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+E(this.lat,n)+", "+E(this.lng,n)+")"},distanceTo:function(n){return Ae.distance(this,ct(n))},wrap:function(){return Ae.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,l=o/Math.cos(Math.PI/180*this.lat);return Rt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new yt(this.lat,this.lng,this.alt)}};function ct(n,o,l){return n instanceof yt?n:K(n)&&typeof n[0]!="object"?n.length===3?new yt(n[0],n[1],n[2]):n.length===2?new yt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new yt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new yt(n,o,l)}var ge={latLngToPoint:function(n,o){var l=this.projection.project(n),h=this.scale(o);return this.transformation._transform(l,h)},pointToLatLng:function(n,o){var l=this.scale(o),h=this.transformation.untransform(n,l);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(n),h=this.transformation.transform(o.min,l),p=this.transformation.transform(o.max,l);return new At(h,p)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?y(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?y(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new yt(l,o,h)},wrapLatLngBounds:function(n){var o=n.getCenter(),l=this.wrapLatLng(o),h=o.lat-l.lat,p=o.lng-l.lng;if(h===0&&p===0)return n;var v=n.getSouthWest(),A=n.getNorthEast(),N=new yt(v.lat-h,v.lng-p),V=new yt(A.lat-h,A.lng-p);return new Yt(N,V)}},Ae=s({},ge,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var l=Math.PI/180,h=n.lat*l,p=o.lat*l,v=Math.sin((o.lat-n.lat)*l/2),A=Math.sin((o.lng-n.lng)*l/2),N=v*v+Math.cos(h)*Math.cos(p)*A*A,V=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*V}}),es=6378137,ns={R:es,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,n.lat),-l),p=Math.sin(h*o);return new et(this.R*n.lng*o,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var o=180/Math.PI;return new yt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:function(){var n=es*Math.PI;return new At([-n,-n],[n,n])}()};function is(n,o,l,h){if(K(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=l,this._d=h}is.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new et((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function Vn(n,o,l,h){return new is(n,o,l,h)}var Ti=s({},Ae,{code:"EPSG:3857",projection:ns,transformation:function(){var n=.5/(Math.PI*ns.R);return Vn(n,.5,-n,.5)}()}),yo=s({},Ti,{code:"EPSG:900913"});function vo(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Xi(n,o){var l="",h,p,v,A,N,V;for(h=0,v=n.length;h<v;h++){for(N=n[h],p=0,A=N.length;p<A;p++)V=N[p],l+=(p?"L":"M")+V.x+" "+V.y;l+=o?Z.svg?"z":"x":""}return l||"M0 0"}var Ei=document.documentElement.style,Ii="ActiveXObject"in window,Ht=Ii&&!document.addEventListener,Wt="msLaunchUri"in navigator&&!("documentMode"in document),Fn=he("webkit"),wo=he("android"),rs=he("android 2")||he("android 3"),sc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),bi=wo&&he("Google")&&sc<537&&!("AudioNode"in window),tr=!!window.opera,ss=!Wt&&he("chrome"),er=he("gecko")&&!Fn&&!tr&&!Ii,oc=!ss&&he("safari"),To=he("phantom"),os="OTransition"in Ei,Eo=navigator.platform.indexOf("Win")===0,Un=Ii&&"transition"in Ei,Ai="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!rs,nr="MozPerspective"in Ei,un=!window.L_DISABLE_3D&&(Un||Ai||nr)&&!os&&!To,Bn=typeof orientation<"u"||he("mobile"),ir=Bn&&Fn,Io=Bn&&Ai,zn=!window.PointerEvent&&window.MSPointerEvent,as=!!(window.PointerEvent||zn),Gt="ontouchstart"in window||!!window.TouchEvent,bo=!window.L_NO_TOUCH&&(Gt||as),Pi=Bn&&tr,Si=Bn&&er,ac=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,cc=function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",w,o),window.removeEventListener("testPassiveEventSupport",w,o)}catch{}return n}(),qn=function(){return!!document.createElement("canvas").getContext}(),cs=!!(document.createElementNS&&vo("svg").createSVGRect),lc=!!cs&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),rr=!cs&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),Ao=navigator.platform.indexOf("Mac")===0,Po=navigator.platform.indexOf("Linux")===0;function he(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Z={ie:Ii,ielt9:Ht,edge:Wt,webkit:Fn,android:wo,android23:rs,androidStock:bi,opera:tr,chrome:ss,gecko:er,safari:oc,phantom:To,opera12:os,win:Eo,ie3d:Un,webkit3d:Ai,gecko3d:nr,any3d:un,mobile:Bn,mobileWebkit:ir,mobileWebkit3d:Io,msPointer:zn,pointer:as,touch:bo,touchNative:Gt,mobileOpera:Pi,mobileGecko:Si,retina:ac,passiveEvents:cc,canvas:qn,svg:cs,vml:rr,inlineSvg:lc,mac:Ao,linux:Po},So=Z.msPointer?"MSPointerDown":"pointerdown",Oe=Z.msPointer?"MSPointerMove":"pointermove",ls=Z.msPointer?"MSPointerUp":"pointerup",us=Z.msPointer?"MSPointerCancel":"pointercancel",Ci={touchstart:So,touchmove:Oe,touchend:ls,touchcancel:us},sr={touchstart:hs,touchmove:Pe,touchend:Pe,touchcancel:Pe},hn={},Co=!1;function Ro(n,o,l){return o==="touchstart"&&Ri(),sr[o]?(l=sr[o].bind(this,l),n.addEventListener(Ci[o],l,!1),l):(console.warn("wrong event specified:",o),w)}function uc(n,o,l){if(!Ci[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Ci[o],l,!1)}function or(n){hn[n.pointerId]=n}function ko(n){hn[n.pointerId]&&(hn[n.pointerId]=n)}function ar(n){delete hn[n.pointerId]}function Ri(){Co||(document.addEventListener(So,or,!0),document.addEventListener(Oe,ko,!0),document.addEventListener(ls,ar,!0),document.addEventListener(us,ar,!0),Co=!0)}function Pe(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in hn)o.touches.push(hn[l]);o.changedTouches=[o],n(o)}}function hs(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&Vt(o),Pe(n,o)}function hc(n){var o={},l,h;for(h in n)l=n[h],o[h]=l&&l.bind?l.bind(n):l;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Lo=200;function xo(n,o){n.addEventListener("dblclick",o);var l=0,h;function p(v){if(v.detail!==1){h=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var A=_s(v);if(!(A.some(function(V){return V instanceof HTMLLabelElement&&V.attributes.for})&&!A.some(function(V){return V instanceof HTMLInputElement||V instanceof HTMLSelectElement}))){var N=Date.now();N-l<=Lo?(h++,h===2&&o(hc(v))):h=1,l=N}}}return n.addEventListener("click",p),{dblclick:o,simDblclick:p}}function Do(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var ki=cr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),dn=cr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ds=dn==="webkitTransition"||dn==="OTransition"?dn+"End":"transitionend";function fs(n){return typeof n=="string"?document.getElementById(n):n}function $n(n,o){var l=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);l=h?h[o]:null}return l==="auto"?null:l}function mt(n,o,l){var h=document.createElement(n);return h.className=o||"",l&&l.appendChild(h),h}function vt(n){var o=n.parentNode;o&&o.removeChild(n)}function ce(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Se(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function Ce(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function Li(n,o){if(n.classList!==void 0)return n.classList.contains(o);var l=We(n);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function G(n,o){if(n.classList!==void 0)for(var l=O(o),h=0,p=l.length;h<p;h++)n.classList.add(l[h]);else if(!Li(n,o)){var v=We(n);fn(n,(v?v+" ":"")+o)}}function Pt(n,o){n.classList!==void 0?n.classList.remove(o):fn(n,R((" "+We(n)+" ").replace(" "+o+" "," ")))}function fn(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function We(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function de(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&No(n,o)}function No(n,o){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(h)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):n.style.filter+=" progid:"+h+"(opacity="+o+")"}function cr(n){for(var o=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in o)return n[l];return!1}function pn(n,o,l){var h=o||new et(0,0);n.style[ki]=(Z.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function Dt(n,o){n._leaflet_pos=o,Z.any3d?pn(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function mn(n){return n._leaflet_pos||new et(0,0)}var Ve,ye,lr;if("onselectstart"in document)Ve=function(){it(window,"selectstart",Vt)},ye=function(){bt(window,"selectstart",Vt)};else{var jn=cr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ve=function(){if(jn){var n=document.documentElement.style;lr=n[jn],n[jn]="none"}},ye=function(){jn&&(document.documentElement.style[jn]=lr,lr=void 0)}}function ur(){it(window,"dragstart",Vt)}function hr(){bt(window,"dragstart",Vt)}var xi,Ge;function ps(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(dr(),xi=n,Ge=n.style.outlineStyle,n.style.outlineStyle="none",it(window,"keydown",dr))}function dr(){xi&&(xi.style.outlineStyle=Ge,xi=void 0,Ge=void 0,bt(window,"keydown",dr))}function Mo(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Re(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var dc={__proto__:null,TRANSFORM:ki,TRANSITION:dn,TRANSITION_END:ds,get:fs,getStyle:$n,create:mt,remove:vt,empty:ce,toFront:Se,toBack:Ce,hasClass:Li,addClass:G,removeClass:Pt,setClass:fn,getClass:We,setOpacity:de,testProp:cr,setTransform:pn,setPosition:Dt,getPosition:mn,get disableTextSelection(){return Ve},get enableTextSelection(){return ye},disableImageDrag:ur,enableImageDrag:hr,preventOutline:ps,restoreOutline:dr,getSizedParentNode:Mo,getScale:Re};function it(n,o,l,h){if(o&&typeof o=="object")for(var p in o)fr(n,p,o[p],l);else{o=O(o);for(var v=0,A=o.length;v<A;v++)fr(n,o[v],l,h)}return this}var le="_leaflet_events";function bt(n,o,l,h){if(arguments.length===1)Hn(n),delete n[le];else if(o&&typeof o=="object")for(var p in o)Di(n,p,o[p],l);else if(o=O(o),arguments.length===2)Hn(n,function(N){return ft(o,N)!==-1});else for(var v=0,A=o.length;v<A;v++)Di(n,o[v],l,h);return this}function Hn(n,o){for(var l in n[le]){var h=l.split(/\d/)[0];(!o||o(h))&&Di(n,h,null,null,l)}}var _n={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function fr(n,o,l,h){var p=o+m(l)+(h?"_"+m(h):"");if(n[le]&&n[le][p])return this;var v=function(N){return l.call(h||n,N||window.event)},A=v;!Z.touchNative&&Z.pointer&&o.indexOf("touch")===0?v=Ro(n,o,v):Z.touch&&o==="dblclick"?v=xo(n,v):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(_n[o]||o,v,Z.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(v=function(N){N=N||window.event,ys(n,N)&&A(N)},n.addEventListener(_n[o],v,!1)):n.addEventListener(o,A,!1):n.attachEvent("on"+o,v),n[le]=n[le]||{},n[le][p]=v}function Di(n,o,l,h,p){p=p||o+m(l)+(h?"_"+m(h):"");var v=n[le]&&n[le][p];if(!v)return this;!Z.touchNative&&Z.pointer&&o.indexOf("touch")===0?uc(n,o,v):Z.touch&&o==="dblclick"?Do(n,v):"removeEventListener"in n?n.removeEventListener(_n[o]||o,v,!1):n.detachEvent("on"+o,v),n[le][p]=null}function Tt(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ms(n){return fr(n,"wheel",Tt),this}function Ni(n){return it(n,"mousedown touchstart dblclick contextmenu",Tt),n._leaflet_disable_click=!0,this}function Vt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Ze(n){return Vt(n),Tt(n),this}function _s(n){if(n.composedPath)return n.composedPath();for(var o=[],l=n.target;l;)o.push(l),l=l.parentNode;return o}function Mi(n,o){if(!o)return new et(n.clientX,n.clientY);var l=Re(o),h=l.boundingClientRect;return new et((n.clientX-h.left)/l.x-o.clientLeft,(n.clientY-h.top)/l.y-o.clientTop)}var Ke=Z.linux&&Z.chrome?window.devicePixelRatio:Z.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function gs(n){return Z.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Ke:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ys(n,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Oi={__proto__:null,on:it,off:bt,stopPropagation:Tt,disableScrollPropagation:ms,disableClickPropagation:Ni,preventDefault:Vt,stop:Ze,getPropagationPath:_s,getMousePosition:Mi,getWheelDelta:gs,isExternalTarget:ys,addListener:it,removeListener:bt},vs=vi.extend({run:function(n,o,l,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=mn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=S(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var l=this._startPos.add(this._offset.multiplyBy(n));o&&l._round(),Dt(this._el,l),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),lt=vi.extend({options:{crs:Ti,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=F(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(ct(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=dn&&Z.any3d&&!Z.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),it(this._proxy,ds,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(ct(n),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,l.zoom):this._tryAnimatedPan(n,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,l){var h=this.getZoomScale(o),p=this.getSize().divideBy(2),v=n instanceof et?n:this.latLngToContainerPoint(n),A=v.subtract(p).multiplyBy(1-1/h),N=this.containerPointToLatLng(p.add(A));return this.setView(N,o,{zoom:l})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():Rt(n);var l=nt(o.paddingTopLeft||o.padding||[0,0]),h=nt(o.paddingBottomRight||o.padding||[0,0]),p=this.getBoundsZoom(n,!1,l.add(h));if(p=typeof o.maxZoom=="number"?Math.min(o.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var v=h.subtract(l).divideBy(2),A=this.project(n.getSouthWest(),p),N=this.project(n.getNorthEast(),p),V=this.unproject(A.add(N).divideBy(2).add(v),p);return{center:V,zoom:p}},fitBounds:function(n,o){if(n=Rt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=nt(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new vs,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){G(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,l){if(l=l||{},l.animate===!1||!Z.any3d)return this.setView(n,o,l);this._stop();var h=this.project(this.getCenter()),p=this.project(n),v=this.getSize(),A=this._zoom;n=ct(n),o=o===void 0?A:o;var N=Math.max(v.x,v.y),V=N*this.getZoomScale(A,o),z=p.distanceTo(h)||1,W=1.42,Y=W*W;function ut(Ft){var Jo=Ft?-1:1,xm=Ft?V:N,Dm=V*V-N*N+Jo*Y*Y*z*z,Nm=2*xm*Y*z,gc=Dm/Nm,Mu=Math.sqrt(gc*gc+1)-gc,Mm=Mu<1e-9?-18:Math.log(Mu);return Mm}function ue(Ft){return(Math.exp(Ft)-Math.exp(-Ft))/2}function Zt(Ft){return(Math.exp(Ft)+Math.exp(-Ft))/2}function xe(Ft){return ue(Ft)/Zt(Ft)}var pe=ut(0);function Pr(Ft){return N*(Zt(pe)/Zt(pe+W*Ft))}function Cm(Ft){return N*(Zt(pe)*xe(pe+W*Ft)-ue(pe))/Y}function Rm(Ft){return 1-Math.pow(1-Ft,1.5)}var km=Date.now(),Du=(ut(1)-pe)/W,Lm=l.duration?1e3*l.duration:1e3*Du*.8;function Nu(){var Ft=(Date.now()-km)/Lm,Jo=Rm(Ft)*Du;Ft<=1?(this._flyToFrame=S(Nu,this),this._move(this.unproject(h.add(p.subtract(h).multiplyBy(Cm(Jo)/z)),A),this.getScaleZoom(N/Pr(Jo),A),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Nu.call(this),this},flyToBounds:function(n,o){var l=this._getBoundsCenterZoom(n,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(n){return n=Rt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,Rt(n));return l.equals(h)||this.panTo(h,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var l=nt(o.paddingTopLeft||o.padding||[0,0]),h=nt(o.paddingBottomRight||o.padding||[0,0]),p=this.project(this.getCenter()),v=this.project(n),A=this.getPixelBounds(),N=Jt([A.min.add(l),A.max.subtract(h)]),V=N.getSize();if(!N.contains(v)){this._enforcingBounds=!0;var z=v.subtract(N.getCenter()),W=N.extend(v).getSize().subtract(V);p.x+=z.x<0?-W.x:W.x,p.y+=z.y<0?-W.y:W.y,this.panTo(this.unproject(p),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=o.divideBy(2).round(),p=l.divideBy(2).round(),v=h.subtract(p);return!v.x&&!v.y?this:(n.animate&&n.pan?this.panBy(v):(n.pan&&this._rawPanBy(v),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,n):navigator.geolocation.getCurrentPosition(o,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,l=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,l=n.coords.longitude,h=new yt(o,l),p=h.toBounds(n.coords.accuracy*2),v=this._locateOptions;if(v.setView){var A=this.getBoundsZoom(p);this.setView(h,v.maxZoom?Math.min(A,v.maxZoom):A)}var N={latlng:h,bounds:p,timestamp:n.timestamp};for(var V in n.coords)typeof n.coords[V]=="number"&&(N[V]=n.coords[V]);this.fire("locationfound",N)}},addHandler:function(n,o){if(!o)return this;var l=this[n]=new o(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),vt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)vt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=mt("div",l,o||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new Yt(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,l){n=Rt(n),l=nt(l||[0,0]);var h=this.getZoom()||0,p=this.getMinZoom(),v=this.getMaxZoom(),A=n.getNorthWest(),N=n.getSouthEast(),V=this.getSize().subtract(l),z=Jt(this.project(N,h),this.project(A,h)).getSize(),W=Z.any3d?this.options.zoomSnap:1,Y=V.x/z.x,ut=V.y/z.y,ue=o?Math.max(Y,ut):Math.min(Y,ut);return h=this.getScaleZoom(ue,h),W&&(h=Math.round(h/(W/100))*(W/100),h=o?Math.ceil(h/W)*W:Math.floor(h/W)*W),Math.max(p,Math.min(v,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new et(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var l=this._getTopLeftPoint(n,o);return new At(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(n)/l.scale(o)},getScaleZoom:function(n,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var h=l.zoom(n*l.scale(o));return isNaN(h)?1/0:h},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(ct(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(nt(n),o)},layerPointToLatLng:function(n){var o=nt(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(ct(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ct(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Rt(n))},distance:function(n,o){return this.options.crs.distance(ct(n),ct(o))},containerPointToLayerPoint:function(n){return nt(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return nt(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(nt(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ct(n)))},mouseEventToContainerPoint:function(n){return Mi(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=fs(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");it(o,"scroll",this._onScroll,this),this._containerId=m(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Z.any3d,G(n,"leaflet-container"+(Z.touch?" leaflet-touch":"")+(Z.retina?" leaflet-retina":"")+(Z.ielt9?" leaflet-oldie":"")+(Z.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=$n(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Dt(this._mapPane,new et(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(G(n.markerPane,"leaflet-zoom-hide"),G(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,l){Dt(this._mapPane,new et(0,0));var h=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var p=this._zoom!==o;this._moveStart(p,l)._move(n,o)._moveEnd(p),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,l,h){o===void 0&&(o=this._zoom);var p=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?l&&l.pinch&&this.fire("zoom",l):((p||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Dt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[m(this._container)]=this;var o=n?bt:it;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Z.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=S(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var l=[],h,p=o==="mouseout"||o==="mouseover",v=n.target||n.srcElement,A=!1;v;){if(h=this._targets[m(v)],h&&(o==="click"||o==="preclick")&&this._draggableMoved(h)){A=!0;break}if(h&&h.listens(o,!0)&&(p&&!ys(v,n)||(l.push(h),p))||v===this._container)break;v=v.parentNode}return!l.length&&!A&&!p&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var l=n.type;l==="mousedown"&&ps(o),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,l){if(n.type==="click"){var h=s({},n);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var p=this._findEventTargets(n,o);if(l){for(var v=[],A=0;A<l.length;A++)l[A].listens(o,!0)&&v.push(l[A]);p=v.concat(p)}if(p.length){o==="contextmenu"&&Vt(n);var N=p[0],V={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var z=N.getLatLng&&(!N._radius||N._radius<=10);V.containerPoint=z?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(n),V.layerPoint=this.containerPointToLayerPoint(V.containerPoint),V.latlng=z?N.getLatLng():this.layerPointToLatLng(V.layerPoint)}for(A=0;A<p.length;A++)if(p[A].fire(o,V,!0),V.originalEvent._stopped||p[A].options.bubblingMouseEvents===!1&&ft(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return mn(this._mapPane)||new et(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var l=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var l=this.getSize()._divideBy(2);return this.project(n,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return this.project(n,o)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return Jt([this.project(n.getSouthWest(),o)._subtract(h),this.project(n.getNorthWest(),o)._subtract(h),this.project(n.getSouthEast(),o)._subtract(h),this.project(n.getNorthEast(),o)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,l){if(!l)return n;var h=this.project(n,o),p=this.getSize().divideBy(2),v=new At(h.subtract(p),h.add(p)),A=this._getBoundsOffset(v,l,o);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?n:this.unproject(h.add(A),o)},_limitOffset:function(n,o){if(!o)return n;var l=this.getPixelBounds(),h=new At(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(h,o))},_getBoundsOffset:function(n,o,l){var h=Jt(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),p=h.min.subtract(n.min),v=h.max.subtract(n.max),A=this._rebound(p.x,-v.x),N=this._rebound(p.y,-v.y);return new et(A,N)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),l=this.getMaxZoom(),h=Z.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(o,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Pt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var l=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var n=this._proxy=mt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var l=ki,h=this._proxy.style[l];pn(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){vt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();pn(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(o),p=this._getCenterOffset(n)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(p)?!1:(S(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,G(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Pt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function pr(n,o){return new lt(n,o)}var fe=Ct.extend({options:{position:"topright"},initialize:function(n){F(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),l=this.getPosition(),h=n._controlCorners[l];return G(o,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(o,h.firstChild):h.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(vt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Qe=function(n){return new fe(n)};lt.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",l=this._controlContainer=mt("div",o+"control-container",this._container);function h(p,v){var A=o+p+" "+o+v;n[p+v]=mt("div",A,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)vt(this._controlCorners[n]);vt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Oo=fe.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,l,h){return l<h?-1:h<l?1:0}},initialize:function(n,o,l){F(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in o)this._addLayer(o[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return fe.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(m(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){G(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(G(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Pt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Pt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=mt("div",n),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Ni(o),ms(o);var h=this._section=mt("section",n+"-list");l&&(this._map.on("click",this.collapse,this),it(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=mt("a",n+"-toggle",o);p.href="#",p.title="Layers",p.setAttribute("role","button"),it(p,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Vt(v),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=mt("div",n+"-base",h),this._separator=mt("div",n+"-separator",h),this._overlaysList=mt("div",n+"-overlays",h),o.appendChild(h)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&m(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(h,p){return this.options.sortFunction(h.layer,p.layer,h.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ce(this._baseLayersList),ce(this._overlaysList),this._layerControlInputs=[];var n,o,l,h,p=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),o=o||h.overlay,n=n||!h.overlay,p+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(m(n.target)),l=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(n,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(n){var o=document.createElement("label"),l=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+m(this),l),this._layerControlInputs.push(h),h.layerId=m(n.layer),it(h,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var v=document.createElement("span");o.appendChild(v),v.appendChild(h),v.appendChild(p);var A=n.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,l,h=[],p=[];this._handlingClick=!0;for(var v=n.length-1;v>=0;v--)o=n[v],l=this._getLayer(o.layerId).layer,o.checked?h.push(l):o.checked||p.push(l);for(v=0;v<p.length;v++)this._map.hasLayer(p[v])&&this._map.removeLayer(p[v]);for(v=0;v<h.length;v++)this._map.hasLayer(h[v])||this._map.addLayer(h[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,l,h=this._map.getZoom(),p=n.length-1;p>=0;p--)o=n[p],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,it(n,"click",Vt),this.expand();var o=this;setTimeout(function(){bt(n,"click",Vt),o._preventClick=!1})}}),Vo=function(n,o,l){return new Oo(n,o,l)},gn=fe.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",l=mt("div",o+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,l,h,p){var v=mt("a",l,h);return v.innerHTML=n,v.href="#",v.title=o,v.setAttribute("role","button"),v.setAttribute("aria-label",o),Ni(v),it(v,"click",Ze),it(v,"click",p,this),it(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";Pt(this._zoomInButton,o),Pt(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(G(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(G(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});lt.mergeOptions({zoomControl:!0}),lt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new gn,this.addControl(this.zoomControl))});var Fo=function(n){return new gn(n)},ws=fe.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",l=mt("div",o),h=this.options;return this._addScales(h,o+"-line",l),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,l){n.metric&&(this._mScale=mt("div",o,l)),n.imperial&&(this._iScale=mt("div",o,l))},_update:function(){var n=this._map,o=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/n)},_updateImperial:function(n){var o=n*3.2808399,l,h,p;o>5280?(l=o/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(p=this._getRoundNum(o),this._updateScale(this._iScale,p+" ft",p/o))},_updateScale:function(n,o,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),l=n/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),Ts=function(n){return new ws(n)},Es='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',mr=fe.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Z.inlineSvg?Es+" ":"")+"Leaflet</a>"},initialize:function(n){F(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=mt("div","leaflet-control-attribution"),Ni(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});lt.mergeOptions({attributionControl:!0}),lt.addInitHook(function(){this.options.attributionControl&&new mr().addTo(this)});var _r=function(n){return new mr(n)};fe.Layers=Oo,fe.Zoom=gn,fe.Scale=ws,fe.Attribution=mr,Qe.layers=Vo,Qe.zoom=Fo,Qe.scale=Ts,Qe.attribution=_r;var ve=Ct.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ve.addTo=function(n,o){return n.addHandler(o,this),this};var Uo={Events:Qt},Je=Z.touch?"touchstart mousedown":"mousedown",Fe=vi.extend({options:{clickTolerance:3},initialize:function(n,o,l,h){F(this,h),this._element=n,this._dragStartTarget=o||n,this._preventOutline=l},enable:function(){this._enabled||(it(this._dragStartTarget,Je,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Fe._dragging===this&&this.finishDrag(!0),bt(this._dragStartTarget,Je,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Li(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Fe._dragging===this&&this.finishDrag();return}if(!(Fe._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Fe._dragging=this,this._preventOutline&&ps(this._element),ur(),Ve(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,l=Mo(this._element);this._startPoint=new et(o.clientX,o.clientY),this._startPos=mn(this._element),this._parentScale=Re(l);var h=n.type==="mousedown";it(document,h?"mousemove":"touchmove",this._onMove,this),it(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,l=new et(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Vt(n),this._moved||(this.fire("dragstart"),this._moved=!0,G(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),G(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Dt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Pt(document.body,"leaflet-dragging"),this._lastTarget&&(Pt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),bt(document,"mousemove touchmove",this._onMove,this),bt(document,"mouseup touchend touchcancel",this._onUp,this),hr(),ye();var o=this._moved&&this._moving;this._moving=!1,Fe._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Is(n,o,l){var h,p=[1,4,2,8],v,A,N,V,z,W,Y,ut;for(v=0,W=n.length;v<W;v++)n[v]._code=M(n[v],o);for(N=0;N<4;N++){for(Y=p[N],h=[],v=0,W=n.length,A=W-1;v<W;A=v++)V=n[v],z=n[A],V._code&Y?z._code&Y||(ut=D(z,V,Y,o,l),ut._code=M(ut,o),h.push(ut)):(z._code&Y&&(ut=D(z,V,Y,o,l),ut._code=M(ut,o),h.push(ut)),h.push(V));n=h}return n}function bs(n,o){var l,h,p,v,A,N,V,z,W;if(!n||n.length===0)throw new Error("latlngs not passed");wt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Y=ct([0,0]),ut=Rt(n),ue=ut.getNorthWest().distanceTo(ut.getSouthWest())*ut.getNorthEast().distanceTo(ut.getNorthWest());ue<1700&&(Y=gr(n));var Zt=n.length,xe=[];for(l=0;l<Zt;l++){var pe=ct(n[l]);xe.push(o.project(ct([pe.lat-Y.lat,pe.lng-Y.lng])))}for(N=V=z=0,l=0,h=Zt-1;l<Zt;h=l++)p=xe[l],v=xe[h],A=p.y*v.x-v.y*p.x,V+=(p.x+v.x)*A,z+=(p.y+v.y)*A,N+=A*3;N===0?W=xe[0]:W=[V/N,z/N];var Pr=o.unproject(nt(W));return ct([Pr.lat+Y.lat,Pr.lng+Y.lng])}function gr(n){for(var o=0,l=0,h=0,p=0;p<n.length;p++){var v=ct(n[p]);o+=v.lat,l+=v.lng,h++}return ct([o/h,l/h])}var yr={__proto__:null,clipPolygon:Is,polygonCenter:bs,centroid:gr};function ie(n,o){if(!o||!n.length)return n.slice();var l=o*o;return n=d(n,l),n=Wn(n,l),n}function As(n,o,l){return Math.sqrt(rt(n,o,l,!0))}function Bo(n,o,l){return rt(n,o,l)}function Wn(n,o){var l=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,p=new h(l);p[0]=p[l-1]=1,c(n,p,o,0,l-1);var v,A=[];for(v=0;v<l;v++)p[v]&&A.push(n[v]);return A}function c(n,o,l,h,p){var v=0,A,N,V;for(N=h+1;N<=p-1;N++)V=rt(n[N],n[h],n[p],!0),V>v&&(A=N,v=V);v>l&&(o[A]=1,c(n,o,l,h,A),c(n,o,l,A,p))}function d(n,o){for(var l=[n[0]],h=1,p=0,v=n.length;h<v;h++)$(n[h],n[p])>o&&(l.push(n[h]),p=h);return p<v-1&&l.push(n[v-1]),l}var _;function T(n,o,l,h,p){var v=h?_:M(n,l),A=M(o,l),N,V,z;for(_=A;;){if(!(v|A))return[n,o];if(v&A)return!1;N=v||A,V=D(n,o,N,l,p),z=M(V,l),N===v?(n=V,v=z):(o=V,A=z)}}function D(n,o,l,h,p){var v=o.x-n.x,A=o.y-n.y,N=h.min,V=h.max,z,W;return l&8?(z=n.x+v*(V.y-n.y)/A,W=V.y):l&4?(z=n.x+v*(N.y-n.y)/A,W=N.y):l&2?(z=V.x,W=n.y+A*(V.x-n.x)/v):l&1&&(z=N.x,W=n.y+A*(N.x-n.x)/v),new et(z,W,p)}function M(n,o){var l=0;return n.x<o.min.x?l|=1:n.x>o.max.x&&(l|=2),n.y<o.min.y?l|=4:n.y>o.max.y&&(l|=8),l}function $(n,o){var l=o.x-n.x,h=o.y-n.y;return l*l+h*h}function rt(n,o,l,h){var p=o.x,v=o.y,A=l.x-p,N=l.y-v,V=A*A+N*N,z;return V>0&&(z=((n.x-p)*A+(n.y-v)*N)/V,z>1?(p=l.x,v=l.y):z>0&&(p+=A*z,v+=N*z)),A=n.x-p,N=n.y-v,h?A*A+N*N:new et(p,v)}function wt(n){return!K(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Et(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),wt(n)}function Mt(n,o){var l,h,p,v,A,N,V,z;if(!n||n.length===0)throw new Error("latlngs not passed");wt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var W=ct([0,0]),Y=Rt(n),ut=Y.getNorthWest().distanceTo(Y.getSouthWest())*Y.getNorthEast().distanceTo(Y.getNorthWest());ut<1700&&(W=gr(n));var ue=n.length,Zt=[];for(l=0;l<ue;l++){var xe=ct(n[l]);Zt.push(o.project(ct([xe.lat-W.lat,xe.lng-W.lng])))}for(l=0,h=0;l<ue-1;l++)h+=Zt[l].distanceTo(Zt[l+1])/2;if(h===0)z=Zt[0];else for(l=0,v=0;l<ue-1;l++)if(A=Zt[l],N=Zt[l+1],p=A.distanceTo(N),v+=p,v>h){V=(v-h)/p,z=[N.x-V*(N.x-A.x),N.y-V*(N.y-A.y)];break}var pe=o.unproject(nt(z));return ct([pe.lat+W.lat,pe.lng+W.lng])}var ke={__proto__:null,simplify:ie,pointToSegmentDistance:As,closestPointOnSegment:Bo,clipSegment:T,_getEdgeIntersection:D,_getBitCode:M,_sqClosestPointOnSegment:rt,isFlat:wt,_flat:Et,polylineCenter:Mt},Ue={project:function(n){return new et(n.lng,n.lat)},unproject:function(n){return new yt(n.y,n.x)},bounds:new At([-180,-90],[180,90])},Le={R:6378137,R_MINOR:6356752314245179e-9,bounds:new At([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,l=this.R,h=n.lat*o,p=this.R_MINOR/l,v=Math.sqrt(1-p*p),A=v*Math.sin(h),N=Math.tan(Math.PI/4-h/2)/Math.pow((1-A)/(1+A),v/2);return h=-l*Math.log(Math.max(N,1e-10)),new et(n.lng*o*l,h)},unproject:function(n){for(var o=180/Math.PI,l=this.R,h=this.R_MINOR/l,p=Math.sqrt(1-h*h),v=Math.exp(-n.y/l),A=Math.PI/2-2*Math.atan(v),N=0,V=.1,z;N<15&&Math.abs(V)>1e-7;N++)z=p*Math.sin(A),z=Math.pow((1-z)/(1+z),p/2),V=Math.PI/2-2*Math.atan(v*z)-A,A+=V;return new yt(A*o,n.x*o/l)}},Ye={__proto__:null,LonLat:Ue,Mercator:Le,SphericalMercator:ns},vr=s({},Ae,{code:"EPSG:3395",projection:Le,transformation:function(){var n=.5/(Math.PI*Le.R);return Vn(n,.5,-n,.5)}()}),wr=s({},Ae,{code:"EPSG:4326",projection:Ue,transformation:Vn(1/180,1,-1/180,.5)}),om=s({},ge,{projection:Ue,transformation:Vn(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var l=o.lng-n.lng,h=o.lat-n.lat;return Math.sqrt(l*l+h*h)},infinite:!0});ge.Earth=Ae,ge.EPSG3395=vr,ge.EPSG3857=Ti,ge.EPSG900913=yo,ge.EPSG4326=wr,ge.Simple=om;var Be=vi.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[m(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[m(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});lt.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=m(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=m(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return m(n)in this._layers},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},_addLayers:function(n){n=n?K(n)?n:[n]:[];for(var o=0,l=n.length;o<l;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[m(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=m(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var p=this._zoomBoundLayers[h].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),o=p.maxZoom===void 0?o:Math.max(o,p.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Tr=Be.extend({initialize:function(n,o){F(this,o),this._layers={};var l,h;if(n)for(l=0,h=n.length;l<h;l++)this.addLayer(n[l])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[n]&&h[n].apply(h,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return m(n)}}),am=function(n,o){return new Tr(n,o)},yn=Tr.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Tr.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Tr.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new Yt;for(var o in this._layers){var l=this._layers[o];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),cm=function(n,o){return new yn(n,o)},Er=Ct.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){F(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,o){var l=this.options,h=l[o+"Size"];typeof h=="number"&&(h=[h,h]);var p=nt(h),v=nt(o==="shadow"&&l.shadowAnchor||l.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(l.className||""),v&&(n.style.marginLeft=-v.x+"px",n.style.marginTop=-v.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return Z.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function lm(n){return new Er(n)}var Ps=Er.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Ps.imagePath!="string"&&(Ps.imagePath=this._detectIconPath()),(this.options.imagePath||Ps.imagePath)+Er.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(l,h,p){var v=h.exec(l);return v&&v[p]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=mt("div","leaflet-default-icon-path",document.body),o=$n(n,"background-image")||$n(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),pu=ve.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Fe(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),G(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Pt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,l=o._map,h=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,v=mn(o._icon),A=l.getPixelBounds(),N=l.getPixelOrigin(),V=Jt(A.min._subtract(N).add(p),A.max._subtract(N).subtract(p));if(!V.contains(v)){var z=nt((Math.max(V.max.x,v.x)-V.max.x)/(A.max.x-V.max.x)-(Math.min(V.min.x,v.x)-V.min.x)/(A.min.x-V.min.x),(Math.max(V.max.y,v.y)-V.max.y)/(A.max.y-V.max.y)-(Math.min(V.min.y,v.y)-V.min.y)/(A.min.y-V.min.y)).multiplyBy(h);l.panBy(z,{animate:!1}),this._draggable._newPos._add(z),this._draggable._startPos._add(z),Dt(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=S(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=S(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,l=o._shadow,h=mn(o._icon),p=o._map.layerPointToLatLng(h);l&&Dt(l,h),o._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),zo=Be.extend({options:{icon:new Ps,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){F(this,o),this._latlng=ct(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=ct(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),G(l,o),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&it(l,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),v=!1;p!==this._shadow&&(this._removeShadow(),v=!0),p&&(G(p,o),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&v&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&bt(this._icon,"focus",this._panOnFocus,this),vt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&vt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Dt(this._icon,n),this._shadow&&Dt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(G(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),pu)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new pu(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&de(this._icon,n),this._shadow&&de(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,l=o.iconSize?nt(o.iconSize):nt(0,0),h=o.iconAnchor?nt(o.iconAnchor):nt(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function um(n,o){return new zo(n,o)}var Gn=Be.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return F(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),qo=Gn.extend({options:{fill:!0,radius:10},initialize:function(n,o){F(this,o),this._latlng=ct(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=ct(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return Gn.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,l=this._clickTolerance(),h=[n+l,o+l];this._pxBounds=new At(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function hm(n,o){return new qo(n,o)}var fc=qo.extend({initialize:function(n,o,l){if(typeof o=="number"&&(o=s({},l,{radius:o})),F(this,o),this._latlng=ct(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new Yt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Gn.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===Ae.distance){var p=Math.PI/180,v=this._mRadius/Ae.R/p,A=l.project([o+v,n]),N=l.project([o-v,n]),V=A.add(N).divideBy(2),z=l.unproject(V).lat,W=Math.acos((Math.cos(v*p)-Math.sin(o*p)*Math.sin(z*p))/(Math.cos(o*p)*Math.cos(z*p)))/p;(isNaN(W)||W===0)&&(W=v/Math.cos(Math.PI/180*o)),this._point=V.subtract(l.getPixelOrigin()),this._radius=isNaN(W)?0:V.x-l.project([z,n-W]).x,this._radiusY=V.y-A.y}else{var Y=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(Y).x}this._updateBounds()}});function dm(n,o,l){return new fc(n,o,l)}var vn=Gn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){F(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,l=null,h=rt,p,v,A=0,N=this._parts.length;A<N;A++)for(var V=this._parts[A],z=1,W=V.length;z<W;z++){p=V[z-1],v=V[z];var Y=h(n,p,v,!0);Y<o&&(o=Y,l=h(n,p,v))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mt(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=ct(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new Yt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return wt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],l=wt(n),h=0,p=n.length;h<p;h++)l?(o[h]=ct(n[h]),this._bounds.extend(o[h])):o[h]=this._convertLatLngs(n[h]);return o},_project:function(){var n=new At;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new et(n,n);this._rawPxBounds&&(this._pxBounds=new At([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,l){var h=n[0]instanceof yt,p=n.length,v,A;if(h){for(A=[],v=0;v<p;v++)A[v]=this._map.latLngToLayerPoint(n[v]),l.extend(A[v]);o.push(A)}else for(v=0;v<p;v++)this._projectLatlngs(n[v],o,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,h,p,v,A,N,V;for(l=0,p=0,v=this._rings.length;l<v;l++)for(V=this._rings[l],h=0,A=V.length;h<A-1;h++)N=T(V[h],V[h+1],n,h,!0),N&&(o[p]=o[p]||[],o[p].push(N[0]),(N[1]!==V[h+1]||h===A-2)&&(o[p].push(N[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,l=0,h=n.length;l<h;l++)n[l]=ie(n[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var l,h,p,v,A,N,V=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,v=this._parts.length;l<v;l++)for(N=this._parts[l],h=0,A=N.length,p=A-1;h<A;p=h++)if(!(!o&&h===0)&&As(n,N[p],N[h])<=V)return!0;return!1}});function fm(n,o){return new vn(n,o)}vn._flat=Et;var Ir=vn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return bs(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=vn.prototype._convertLatLngs.call(this,n),l=o.length;return l>=2&&o[0]instanceof yt&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(n){vn.prototype._setLatLngs.call(this,n),wt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return wt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,l=new et(o,o);if(n=new At(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,p=this._rings.length,v;h<p;h++)v=Is(this._rings[h],n,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,l,h,p,v,A,N,V,z;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(v=0,V=this._parts.length;v<V;v++)for(l=this._parts[v],A=0,z=l.length,N=z-1;A<z;N=A++)h=l[A],p=l[N],h.y>n.y!=p.y>n.y&&n.x<(p.x-h.x)*(n.y-h.y)/(p.y-h.y)+h.x&&(o=!o);return o||vn.prototype._containsPoint.call(this,n,!0)}});function pm(n,o){return new Ir(n,o)}var wn=yn.extend({initialize:function(n,o){F(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=K(n)?n:n.features,l,h,p;if(o){for(l=0,h=o.length;l<h;l++)p=o[l],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var v=this.options;if(v.filter&&!v.filter(n))return this;var A=$o(n,v);return A?(A.feature=Wo(n),A.defaultOptions=A.options,this.resetStyle(A),v.onEachFeature&&v.onEachFeature(n,A),this.addLayer(A)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function $o(n,o){var l=n.type==="Feature"?n.geometry:n,h=l?l.coordinates:null,p=[],v=o&&o.pointToLayer,A=o&&o.coordsToLatLng||pc,N,V,z,W;if(!h&&!l)return null;switch(l.type){case"Point":return N=A(h),mu(v,n,N,o);case"MultiPoint":for(z=0,W=h.length;z<W;z++)N=A(h[z]),p.push(mu(v,n,N,o));return new yn(p);case"LineString":case"MultiLineString":return V=jo(h,l.type==="LineString"?0:1,A),new vn(V,o);case"Polygon":case"MultiPolygon":return V=jo(h,l.type==="Polygon"?1:2,A),new Ir(V,o);case"GeometryCollection":for(z=0,W=l.geometries.length;z<W;z++){var Y=$o({geometry:l.geometries[z],type:"Feature",properties:n.properties},o);Y&&p.push(Y)}return new yn(p);case"FeatureCollection":for(z=0,W=l.features.length;z<W;z++){var ut=$o(l.features[z],o);ut&&p.push(ut)}return new yn(p);default:throw new Error("Invalid GeoJSON object.")}}function mu(n,o,l,h){return n?n(o,l):new zo(l,h&&h.markersInheritOptions&&h)}function pc(n){return new yt(n[1],n[0],n[2])}function jo(n,o,l){for(var h=[],p=0,v=n.length,A;p<v;p++)A=o?jo(n[p],o-1,l):(l||pc)(n[p]),h.push(A);return h}function mc(n,o){return n=ct(n),n.alt!==void 0?[E(n.lng,o),E(n.lat,o),E(n.alt,o)]:[E(n.lng,o),E(n.lat,o)]}function Ho(n,o,l,h){for(var p=[],v=0,A=n.length;v<A;v++)p.push(o?Ho(n[v],wt(n[v])?0:o-1,l,h):mc(n[v],h));return!o&&l&&p.length>0&&p.push(p[0].slice()),p}function br(n,o){return n.feature?s({},n.feature,{geometry:o}):Wo(o)}function Wo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var _c={toGeoJSON:function(n){return br(this,{type:"Point",coordinates:mc(this.getLatLng(),n)})}};zo.include(_c),fc.include(_c),qo.include(_c),vn.include({toGeoJSON:function(n){var o=!wt(this._latlngs),l=Ho(this._latlngs,o?1:0,!1,n);return br(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),Ir.include({toGeoJSON:function(n){var o=!wt(this._latlngs),l=o&&!wt(this._latlngs[0]),h=Ho(this._latlngs,l?2:o?1:0,!0,n);return o||(h=[h]),br(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),Tr.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(n).geometry.coordinates)}),br(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var l=o==="GeometryCollection",h=[];return this.eachLayer(function(p){if(p.toGeoJSON){var v=p.toGeoJSON(n);if(l)h.push(v.geometry);else{var A=Wo(v);A.type==="FeatureCollection"?h.push.apply(h,A.features):h.push(A)}}}),l?br(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function _u(n,o){return new wn(n,o)}var mm=_u,Go=Be.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,l){this._url=n,this._bounds=Rt(o),F(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(G(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){vt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Se(this._image),this},bringToBack:function(){return this._map&&Ce(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Rt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:mt("img");if(G(o,"leaflet-image-layer"),this._zoomAnimated&&G(o,"leaflet-zoom-animated"),this.options.className&&G(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onload=u(this.fire,this,"load"),o.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;pn(this._image,l,o)},_reset:function(){var n=this._image,o=new At(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();Dt(n,o.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){de(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),_m=function(n,o,l){return new Go(n,o,l)},gu=Go.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:mt("video");if(G(o,"leaflet-image-layer"),this._zoomAnimated&&G(o,"leaflet-zoom-animated"),this.options.className&&G(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onloadeddata=u(this.fire,this,"load"),n){for(var l=o.getElementsByTagName("source"),h=[],p=0;p<l.length;p++)h.push(l[p].src);this._url=l.length>0?h:[o.src];return}K(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var A=mt("source");A.src=this._url[v],o.appendChild(A)}}});function gm(n,o,l){return new gu(n,o,l)}var yu=Go.extend({_initImage:function(){var n=this._image=this._url;G(n,"leaflet-image-layer"),this._zoomAnimated&&G(n,"leaflet-zoom-animated"),this.options.className&&G(n,this.options.className),n.onselectstart=w,n.onmousemove=w}});function ym(n,o,l){return new yu(n,o,l)}var Xe=Be.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof yt||K(n))?(this._latlng=ct(n),F(this,o)):(F(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&de(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&de(this._container,1),this.bringToFront(),this.options.interactive&&(G(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(de(this._container,0),this._removeTimeout=setTimeout(u(vt,void 0,this._container),200)):vt(this._container),this.options.interactive&&(Pt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ct(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Se(this._container),this},bringToBack:function(){return this._map&&Ce(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof yn){o=null;var l=this._source._layers;for(var h in l)if(l[h]._map){o=l[h];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=nt(this.options.offset),l=this._getAnchor();this._zoomAnimated?Dt(this._container,n.add(l)):o=o.add(n).add(l);var h=this._containerBottom=-o.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=h+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});lt.include({_initOverlay:function(n,o,l,h){var p=o;return p instanceof n||(p=new n(h).setContent(o)),l&&p.setLatLng(l),p}}),Be.include({_initOverlay:function(n,o,l,h){var p=l;return p instanceof n?(F(p,h),p._source=this):(p=o&&!h?o:new n(h,this),p.setContent(l)),p}});var Zo=Xe.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Xe.prototype.openOn.call(this,n)},onAdd:function(n){Xe.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Gn||this._source.on("preclick",Tt))},onRemove:function(n){Xe.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Gn||this._source.off("preclick",Tt))},getEvents:function(){var n=Xe.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=mt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=mt("div",n+"-content-wrapper",o);if(this._contentNode=mt("div",n+"-content",l),Ni(o),ms(this._contentNode),it(o,"contextmenu",Tt),this._tipContainer=mt("div",n+"-tip-container",o),this._tip=mt("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=mt("a",n+"-close-button",o);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',it(h,"click",function(p){Vt(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var h=n.offsetHeight,p=this.options.maxHeight,v="leaflet-popup-scrolled";p&&h>p?(o.height=p+"px",G(n,v)):Pt(n,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Dt(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt($n(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,h=this._containerWidth,p=new et(this._containerLeft,-l-this._containerBottom);p._add(mn(this._container));var v=n.layerPointToContainerPoint(p),A=nt(this.options.autoPanPadding),N=nt(this.options.autoPanPaddingTopLeft||A),V=nt(this.options.autoPanPaddingBottomRight||A),z=n.getSize(),W=0,Y=0;v.x+h+V.x>z.x&&(W=v.x+h-z.x+V.x),v.x-W-N.x<0&&(W=v.x-N.x),v.y+l+V.y>z.y&&(Y=v.y+l-z.y+V.y),v.y-Y-N.y<0&&(Y=v.y-N.y),(W||Y)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([W,Y]))}},_getAnchor:function(){return nt(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),vm=function(n,o){return new Zo(n,o)};lt.mergeOptions({closePopupOnClick:!0}),lt.include({openPopup:function(n,o,l){return this._initOverlay(Zo,n,o,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Be.include({bindPopup:function(n,o){return this._popup=this._initOverlay(Zo,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof yn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Ze(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof Gn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Ko=Xe.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Xe.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Xe.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Xe.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=mt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+m(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,l,h=this._map,p=this._container,v=h.latLngToContainerPoint(h.getCenter()),A=h.layerPointToContainerPoint(n),N=this.options.direction,V=p.offsetWidth,z=p.offsetHeight,W=nt(this.options.offset),Y=this._getAnchor();N==="top"?(o=V/2,l=z):N==="bottom"?(o=V/2,l=0):N==="center"?(o=V/2,l=z/2):N==="right"?(o=0,l=z/2):N==="left"?(o=V,l=z/2):A.x<v.x?(N="right",o=0,l=z/2):(N="left",o=V+(W.x+Y.x)*2,l=z/2),n=n.subtract(nt(o,l,!0)).add(W).add(Y),Pt(p,"leaflet-tooltip-right"),Pt(p,"leaflet-tooltip-left"),Pt(p,"leaflet-tooltip-top"),Pt(p,"leaflet-tooltip-bottom"),G(p,"leaflet-tooltip-"+N),Dt(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&de(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return nt(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),wm=function(n,o){return new Ko(n,o)};lt.include({openTooltip:function(n,o,l){return this._initOverlay(Ko,n,o,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Be.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ko,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof yn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(it(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),it(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,l,h;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(o)}});var vu=Er.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(ce(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=nt(l.bgPos);o.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Tm(n){return new vu(n)}Er.Default=Ps;var Ss=Be.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Z.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){F(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),vt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Se(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ce(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof et?n:new et(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,l=-n(-1/0,1/0),h=0,p=o.length,v;h<p;h++)v=o[h].style.zIndex,o[h]!==this._container&&v&&(l=n(l,+v));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Z.ielt9){de(this._container,this.options.opacity);var n=+new Date,o=!1,l=!1;for(var h in this._tiles){var p=this._tiles[h];if(!(!p.current||!p.loaded)){var v=Math.min(1,(n-p.loaded)/200);de(p.el,v),v<1?o=!0:(p.active?l=!0:this._onOpaqueTile(p),p.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(x(this._fadeFrame),this._fadeFrame=S(this._updateOpacity,this))}},_onOpaqueTile:w,_initContainer:function(){this._container||(this._container=mt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=o-Math.abs(n-l),this._onUpdateLevel(l)):(vt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[n],p=this._map;return h||(h=this._levels[n]={},h.el=mt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=o,h.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,p.getCenter(),p.getZoom()),w(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:w,_onRemoveLevel:w,_onCreateLevel:w,_pruneTiles:function(){if(this._map){var n,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var h=o.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)vt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,l,h){var p=Math.floor(n/2),v=Math.floor(o/2),A=l-1,N=new et(+p,+v);N.z=+A;var V=this._tileCoordsToKey(N),z=this._tiles[V];return z&&z.active?(z.retain=!0,!0):(z&&z.loaded&&(z.retain=!0),A>h?this._retainParent(p,v,A,h):!1)},_retainChildren:function(n,o,l,h){for(var p=2*n;p<2*n+2;p++)for(var v=2*o;v<2*o+2;v++){var A=new et(p,v);A.z=l+1;var N=this._tileCoordsToKey(A),V=this._tiles[N];if(V&&V.active){V.retain=!0;continue}else V&&V.loaded&&(V.retain=!0);l+1<h&&this._retainChildren(p,v,l+1,h)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,l,h){var p=Math.round(o);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var v=this.options.updateWhenZooming&&p!==this._tileZoom;(!h||v)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,o)},_setZoomTransform:function(n,o,l){var h=this._map.getZoomScale(l,n.zoom),p=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(o,l)).round();Z.any3d?pn(n.el,p,h):Dt(n.el,p)},_resetGrid:function(){var n=this._map,o=n.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],h).x/l.x),Math.ceil(n.project([0,o.wrapLng[1]],h).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],h).y/l.x),Math.ceil(n.project([o.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),h=o.getZoomScale(l,this._tileZoom),p=o.project(n,this._tileZoom).floor(),v=o.getSize().divideBy(h*2);return new At(p.subtract(v),p.add(v))},_update:function(n){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(h),v=p.getCenter(),A=[],N=this.options.keepBuffer,V=new At(p.getBottomLeft().subtract([N,-N]),p.getTopRight().add([N,-N]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var z in this._tiles){var W=this._tiles[z].coords;(W.z!==this._tileZoom||!V.contains(new et(W.x,W.y)))&&(this._tiles[z].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var Y=p.min.y;Y<=p.max.y;Y++)for(var ut=p.min.x;ut<=p.max.x;ut++){var ue=new et(ut,Y);if(ue.z=this._tileZoom,!!this._isValidTile(ue)){var Zt=this._tiles[this._tileCoordsToKey(ue)];Zt?Zt.current=!0:A.push(ue)}}if(A.sort(function(pe,Pr){return pe.distanceTo(v)-Pr.distanceTo(v)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var xe=document.createDocumentFragment();for(ut=0;ut<A.length;ut++)this._addTile(A[ut],xe);this._level.el.appendChild(xe)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!o.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return Rt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,l=this.getTileSize(),h=n.scaleBy(l),p=h.add(l),v=o.unproject(h,n.z),A=o.unproject(p,n.z);return[v,A]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),l=new Yt(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),l=new et(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(n){var o=this._tiles[n];o&&(vt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){G(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=w,n.onmousemove=w,Z.ielt9&&this.options.opacity<1&&de(n,this.options.opacity)},_addTile:function(n,o){var l=this._getTilePos(n),h=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&S(u(this._tileReady,this,n,null,p)),Dt(p,l),this._tiles[h]={el:p,coords:n,current:!0},o.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:n});var h=this._tileCoordsToKey(n);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(de(l.el,0),x(this._fadeFrame),this._fadeFrame=S(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(G(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Z.ielt9||!this._map._fadeAnimated?S(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new et(this._wrapX?y(n.x,this._wrapX):n.x,this._wrapY?y(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new At(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Em(n){return new Ss(n)}var Ar=Ss.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=F(this,o),o.detectRetina&&Z.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var l=document.createElement("img");return it(l,"load",u(this._tileOnLoad,this,o,l)),it(l,"error",u(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var o={r:Z.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=l),o["-y"]=l}return at(this._url,s(o,this.options))},_tileOnLoad:function(n,o){Z.ielt9?setTimeout(u(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,l){var h=this.options.errorTileUrl;h&&o.getAttribute("src")!==h&&(o.src=h),n(l,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(n=o-n),n+h},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=w,o.onerror=w,!o.complete)){o.src=gt;var l=this._tiles[n].coords;vt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",gt),Ss.prototype._removeTile.call(this,n)},_tileReady:function(n,o,l){if(!(!this._map||l&&l.getAttribute("src")===gt))return Ss.prototype._tileReady.call(this,n,o,l)}});function wu(n,o){return new Ar(n,o)}var Tu=Ar.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var l=s({},this.defaultWmsParams);for(var h in o)h in this.options||(l[h]=o[h]);o=F(this,o);var p=o.detectRetina&&Z.retina?2:1,v=this.getTileSize();l.width=v.x*p,l.height=v.y*p,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Ar.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),l=this._crs,h=Jt(l.project(o[0]),l.project(o[1])),p=h.min,v=h.max,A=(this._wmsVersion>=1.3&&this._crs===wr?[p.y,p.x,v.y,v.x]:[p.x,p.y,v.x,v.y]).join(","),N=Ar.prototype.getTileUrl.call(this,n);return N+q(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(n,o){return s(this.wmsParams,n),o||this.redraw(),this}});function Im(n,o){return new Tu(n,o)}Ar.WMS=Tu,wu.wms=Im;var Tn=Be.extend({options:{padding:.1},initialize:function(n){F(this,n),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),G(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var l=this._map.getZoomScale(o,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,o),v=h.multiplyBy(-l).add(p).subtract(this._map._getNewPixelOrigin(n,o));Z.any3d?pn(this._container,v,l):Dt(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new At(l,l.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Eu=Tn.extend({options:{tolerance:0},getEvents:function(){var n=Tn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Tn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");it(n,"mousemove",this._onMouseMove,this),it(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),it(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,vt(this._container),bt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Tn.prototype._update.call(this);var n=this._bounds,o=this._container,l=n.getSize(),h=Z.retina?2:1;Dt(o,n.min),o.width=h*l.x,o.height=h*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",Z.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Tn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[m(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,l=o.next,h=o.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete n._order,delete this._layers[m(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),l=[],h,p;for(p=0;p<o.length;p++){if(h=Number(o[p]),isNaN(h))return;l.push(h)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||S(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new At,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var l,h,p,v,A=n._parts,N=A.length,V=this._ctx;if(N){for(V.beginPath(),l=0;l<N;l++){for(h=0,p=A[l].length;h<p;h++)v=A[l][h],V[h?"lineTo":"moveTo"](v.x,v.y);o&&V.closePath()}this._fillStroke(V,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,l=this._ctx,h=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||h)/h;p!==1&&(l.save(),l.scale(1,p)),l.beginPath(),l.arc(o.x,o.y/p,h,0,Math.PI*2,!1),p!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,o){var l=o.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),l,h,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(Pt(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var l,h,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(o)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(G(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,l){this._map._fireDOMEvent(o,l||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function Iu(n){return Z.canvas?new Eu(n):null}var Cs=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),bm={_initContainer:function(){this._container=mt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Tn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Cs("shape");G(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Cs("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[m(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;vt(o),n.removeInteractiveTarget(o),delete this._layers[m(n)]},_updateStyle:function(n){var o=n._stroke,l=n._fill,h=n.options,p=n._container;p.stroked=!!h.stroke,p.filled=!!h.fill,h.stroke?(o||(o=n._stroke=Cs("stroke")),p.appendChild(o),o.weight=h.weight+"px",o.color=h.color,o.opacity=h.opacity,h.dashArray?o.dashStyle=K(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=h.lineCap.replace("butt","flat"),o.joinstyle=h.lineJoin):o&&(p.removeChild(o),n._stroke=null),h.fill?(l||(l=n._fill=Cs("fill")),p.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(p.removeChild(l),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),l=Math.round(n._radius),h=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){Se(n._container)},_bringToBack:function(n){Ce(n._container)}},Qo=Z.vml?Cs:vo,Rs=Tn.extend({_initContainer:function(){this._container=Qo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Qo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){vt(this._container),bt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Tn.prototype._update.call(this);var n=this._bounds,o=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),Dt(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=Qo("path");n.options.className&&G(o,n.options.className),n.options.interactive&&G(o,"leaflet-interactive"),this._updateStyle(n),this._layers[m(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){vt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[m(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,l=n.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,Xi(n._parts,o))},_updateCircle:function(n){var o=n._point,l=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||l,p="a"+l+","+h+" 0 1,0 ",v=n._empty()?"M0 0":"M"+(o.x-l)+","+o.y+p+l*2+",0 "+p+-l*2+",0 ";this._setPath(n,v)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){Se(n._path)},_bringToBack:function(n){Ce(n._path)}});Z.vml&&Rs.include(bm);function bu(n){return Z.svg||Z.vml?new Rs(n):null}lt.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&Iu(n)||bu(n)}});var Au=Ir.extend({initialize:function(n,o){Ir.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Rt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Am(n,o){return new Au(n,o)}Rs.create=Qo,Rs.pointsToPath=Xi,wn.geometryToLayer=$o,wn.coordsToLatLng=pc,wn.coordsToLatLngs=jo,wn.latLngToCoords=mc,wn.latLngsToCoords=Ho,wn.getFeature=br,wn.asFeature=Wo,lt.mergeOptions({boxZoom:!0});var Pu=ve.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){it(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){bt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){vt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ve(),ur(),this._startPoint=this._map.mouseEventToContainerPoint(n),it(document,{contextmenu:Ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=mt("div","leaflet-zoom-box",this._container),G(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new At(this._point,this._startPoint),l=o.getSize();Dt(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(vt(this._box),Pt(this._container,"leaflet-crosshair")),ye(),hr(),bt(document,{contextmenu:Ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var o=new Yt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});lt.addInitHook("addHandler","boxZoom",Pu),lt.mergeOptions({doubleClickZoom:!0});var Su=ve.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,l=o.getZoom(),h=o.options.zoomDelta,p=n.originalEvent.shiftKey?l-h:l+h;o.options.doubleClickZoom==="center"?o.setZoom(p):o.setZoomAround(n.containerPoint,p)}});lt.addInitHook("addHandler","doubleClickZoom",Su),lt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Cu=ve.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Fe(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}G(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Pt(this._map._container,"leaflet-grab"),Pt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Rt(this._map.options.maxBounds);this._offsetLimit=Jt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,p=(h-o+l)%n+o-l,v=(h+o+l)%n-o-l,A=Math.abs(p+l)<Math.abs(v+l)?p:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(n){var o=this._map,l=o.options,h=!l.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),h)o.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,A=l.easeLinearity,N=p.multiplyBy(A/v),V=N.distanceTo([0,0]),z=Math.min(l.inertiaMaxSpeed,V),W=N.multiplyBy(z/V),Y=z/(l.inertiaDeceleration*A),ut=W.multiplyBy(-Y/2).round();!ut.x&&!ut.y?o.fire("moveend"):(ut=o._limitOffset(ut,o.options.maxBounds),S(function(){o.panBy(ut,{duration:Y,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});lt.addInitHook("addHandler","dragging",Cu),lt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ru=ve.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),it(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),bt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,l=n.scrollTop||o.scrollTop,h=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},l=this.keyCodes,h,p;for(h=0,p=l.left.length;h<p;h++)o[l.left[h]]=[-1*n,0];for(h=0,p=l.right.length;h<p;h++)o[l.right[h]]=[n,0];for(h=0,p=l.down.length;h<p;h++)o[l.down[h]]=[0,n];for(h=0,p=l.up.length;h<p;h++)o[l.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},l=this.keyCodes,h,p;for(h=0,p=l.zoomIn.length;h<p;h++)o[l.zoomIn[h]]=n;for(h=0,p=l.zoomOut.length;h<p;h++)o[l.zoomOut[h]]=-n},_addHooks:function(){it(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){bt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,l=this._map,h;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[o],n.shiftKey&&(h=nt(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(nt(h),l.options.maxBounds)),l.options.worldCopyJump){var p=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(p)}else l.panBy(h)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Ze(n)}}});lt.addInitHook("addHandler","keyboard",Ru),lt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ku=ve.extend({addHooks:function(){it(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){bt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=gs(n),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),h),Ze(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,v=l?Math.ceil(p/l)*l:p,A=n._limitZoom(o+(this._delta>0?v:-v))-o;this._delta=0,this._startTime=null,A&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+A):n.setZoomAround(this._lastMousePos,o+A))}});lt.addInitHook("addHandler","scrollWheelZoom",ku);var Pm=600;lt.mergeOptions({tapHold:Z.touchNative&&Z.safari&&Z.mobile,tapTolerance:15});var Lu=ve.extend({addHooks:function(){it(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){bt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new et(o.clientX,o.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(it(document,"touchend",Vt),it(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Pm),it(document,"touchend touchcancel contextmenu",this._cancel,this),it(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){bt(document,"touchend",Vt),bt(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),bt(document,"touchend touchcancel contextmenu",this._cancel,this),bt(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new et(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});lt.addInitHook("addHandler","tapHold",Lu),lt.mergeOptions({touchZoom:Z.touch,bounceAtZoomLimits:!0});var xu=ve.extend({addHooks:function(){G(this._map._container,"leaflet-touch-zoom"),it(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Pt(this._map._container,"leaflet-touch-zoom"),bt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),it(document,"touchmove",this._onTouchMove,this),it(document,"touchend touchcancel",this._onTouchEnd,this),Vt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]),p=l.distanceTo(h)/this._startDist;if(this._zoom=o.getScaleZoom(p,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&p<1||this._zoom>o.getMaxZoom()&&p>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var v=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(p===1&&v.x===0&&v.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var A=u(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=S(A,this,!0),Vt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,x(this._animRequest),bt(document,"touchmove",this._onTouchMove,this),bt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});lt.addInitHook("addHandler","touchZoom",xu),lt.BoxZoom=Pu,lt.DoubleClickZoom=Su,lt.Drag=Cu,lt.Keyboard=Ru,lt.ScrollWheelZoom=ku,lt.TapHold=Lu,lt.TouchZoom=xu,e.Bounds=At,e.Browser=Z,e.CRS=ge,e.Canvas=Eu,e.Circle=fc,e.CircleMarker=qo,e.Class=Ct,e.Control=fe,e.DivIcon=vu,e.DivOverlay=Xe,e.DomEvent=Oi,e.DomUtil=dc,e.Draggable=Fe,e.Evented=vi,e.FeatureGroup=yn,e.GeoJSON=wn,e.GridLayer=Ss,e.Handler=ve,e.Icon=Er,e.ImageOverlay=Go,e.LatLng=yt,e.LatLngBounds=Yt,e.Layer=Be,e.LayerGroup=Tr,e.LineUtil=ke,e.Map=lt,e.Marker=zo,e.Mixin=Uo,e.Path=Gn,e.Point=et,e.PolyUtil=yr,e.Polygon=Ir,e.Polyline=vn,e.Popup=Zo,e.PosAnimation=vs,e.Projection=Ye,e.Rectangle=Au,e.Renderer=Tn,e.SVG=Rs,e.SVGOverlay=yu,e.TileLayer=Ar,e.Tooltip=Ko,e.Transformation=is,e.Util=b,e.VideoOverlay=gu,e.bind=u,e.bounds=Jt,e.canvas=Iu,e.circle=dm,e.circleMarker=hm,e.control=Qe,e.divIcon=Tm,e.extend=s,e.featureGroup=cm,e.geoJSON=_u,e.geoJson=mm,e.gridLayer=Em,e.icon=lm,e.imageOverlay=_m,e.latLng=ct,e.latLngBounds=Rt,e.layerGroup=am,e.map=pr,e.marker=um,e.point=nt,e.polygon=pm,e.polyline=fm,e.popup=vm,e.rectangle=Am,e.setOptions=F,e.stamp=m,e.svg=bu,e.svgOverlay=ym,e.tileLayer=wu,e.tooltip=wm,e.transformation=Vn,e.version=r,e.videoOverlay=gm;var Sm=window.L;e.noConflict=function(){return window.L=Sm,this},window.L=e})})(dl,dl.exports);var HI=dl.exports;const xr=jI(HI),rm="trippy-geocache";let yd=Promise.resolve();function vd(){try{return JSON.parse(localStorage.getItem(rm)||"{}")}catch{return{}}}function WI(i){try{localStorage.setItem(rm,JSON.stringify(i))}catch{}}async function GI(i){const t=i.toLowerCase().trim(),e=vd();if(e[t])return e[t];const r=await(yd=yd.then(async()=>{await new Promise(s=>setTimeout(s,350));try{const s=`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(i)}`,u=await(await fetch(s,{headers:{"Accept-Language":"en"}})).json();return u!=null&&u.length?{lat:parseFloat(u[0].lat),lng:parseFloat(u[0].lon)}:null}catch{return null}}));if(r){const s=vd();s[t]=r,WI(s)}return r}async function ZI(i){const t=[...new Set(i.filter(Boolean))],e={};for(const r of t)e[r]=await GI(r);return e}let Ls=null,De=null,Lr=null;function KI(i,t){var r;Ls&&(Ls.destroy(),Ls=null),De&&(De.remove(),De=null),Lr=null;const e=((r=nc())==null?void 0:r.uid)||null;i.innerHTML=`
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
  `,ic(i),i.querySelector("#globe-back").addEventListener("click",()=>kn(`/trip/${t}`)),De=xr.map("map-inner",{zoomControl:!0}).setView([20,10],2),xr.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(De),Ls=Yp(t,e,s=>wd(i,s)),wd(i,Ls.getAll())}async function wd(i,t,e){var m,g;const r=i.querySelector("#globe-day-list");if(!r||!De)return;if(Lr&&(r.removeEventListener("click",Lr),Lr=null),De.eachLayer(y=>{y instanceof xr.TileLayer||De.removeLayer(y)}),t.length===0){r.innerHTML='<div class="globe-empty">No days in this trip yet.</div>';return}r.innerHTML='<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>'+t.map((y,w)=>`
      <div class="globe-day-item" data-dest="${Dc(y.destination)}" data-idx="${w}">
        <div class="globe-day-date">${QI(y.date)}</div>
        <div class="globe-day-dest">${Dc(y.destination||"Unknown")}</div>
        ${y.event?`<div class="globe-day-event">${Dc(y.event)}</div>`:""}
        ${y.travelDay?'<span class="globe-travel-badge">Travel</span>':""}
      </div>
    `).join("");const s=[...new Set(t.map(y=>y.destination).filter(Boolean))],a=await ZI(s);(m=r.querySelector(".geocoding-hint"))==null||m.remove(),(g=r.querySelector(".globe-day-item"))==null||g.classList.add("active");const u=t.filter(y=>y.destination&&a[y.destination]).map(y=>[a[y.destination].lat,a[y.destination].lng]);u.length>1&&xr.polyline(u,{color:"#7c6af7",weight:2.5,opacity:.85,dashArray:"6 10"}).addTo(De);const f={};for(const y of s){if(!a[y])continue;const w=xr.circleMarker([a[y].lat,a[y].lng],{radius:7,fillColor:"#7c6af7",color:"#fff",weight:1.5,fillOpacity:.9}).addTo(De);w.bindTooltip(y,{direction:"top",offset:[0,-8],className:"map-tooltip"}),f[y]=w}u.length>0&&De.fitBounds(xr.latLngBounds(u),{padding:[50,50],maxZoom:8}),Lr=y=>{var R;const w=y.target.closest(".globe-day-item");if(!w)return;const E=w.dataset.dest;E&&a[E]&&(De.flyTo([a[E].lat,a[E].lng],10,{duration:1.5}),r.querySelectorAll(".globe-day-item").forEach(O=>O.classList.remove("active")),w.classList.add("active"),w.scrollIntoView({behavior:"smooth",block:"nearest"}),(R=f[E])==null||R.openTooltip())},r.addEventListener("click",Lr)}function QI(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function Dc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const En=document.getElementById("app");aI();const sm=mI({"/":()=>nm(En),"/trip/:id":({id:i})=>qI(En,i),"/globe/:id":({id:i})=>KI(En,i),"/join/:code":async({code:i})=>{var e,r;const t=nc();if(!t){En.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
          <div class="auth-slot"></div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">✈</div>
          <h2>You've been invited to a trip!</h2>
          <p>Sign in to accept the invite and view the shared trip.</p>
          <p class="join-hint">After signing in, open this link again to join.</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `,ic(En),(e=En.querySelector("#join-home-btn"))==null||e.addEventListener("click",()=>kn("/"));return}try{En.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⏳</div>
          <p>Joining trip…</p>
        </div>
      `;const s=await EI(i,t.uid);kn(`/trip/${s}`)}catch(s){En.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⚠️</div>
          <h2>Could not join trip</h2>
          <p>${s.message}</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `,(r=En.querySelector("#join-home-btn"))==null||r.addEventListener("click",()=>kn("/"))}}});cI(async i=>{i&&await AI(i.uid,i.displayName||i.email||""),sm.refresh()});sm.start();
