(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Zm=()=>{};var qu={};/**
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
 */const Ld=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Km=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=n[e++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=n[e++],u=n[e++],d=n[e++],p=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},xd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const a=n[s],u=s+1<n.length,d=u?n[s+1]:0,p=s+2<n.length,g=p?n[s+2]:0,y=a>>2,w=(a&3)<<4|d>>4;let E=(d&15)<<2|g>>6,S=g&63;p||(S=64,u||(E=64)),r.push(e[y],e[w],e[E],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ld(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Km(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const a=e[n.charAt(s++)],d=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,a==null||d==null||g==null||w==null)throw new Qm;const E=a<<2|d>>4;if(r.push(E),g!==64){const S=d<<4&240|g>>2;if(r.push(S),w!==64){const M=g<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jm=function(n){const t=Ld(n);return xd.encodeByteArray(t,!0)},Pa=function(n){return Jm(n).replace(/\./g,"")},Dd=function(n){try{return xd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ym(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xm=()=>Ym().__FIREBASE_DEFAULTS__,t_=()=>{if(typeof process>"u"||typeof qu>"u")return;const n=qu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},e_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Dd(n[1]);return t&&JSON.parse(t)},Wa=()=>{try{return Zm()||Xm()||t_()||e_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Nd=n=>{var t,e;return(e=(t=Wa())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},n_=n=>{const t=Nd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Md=()=>{var n;return(n=Wa())==null?void 0:n.config},Od=n=>{var t;return(t=Wa())==null?void 0:t[`_${n}`]};/**
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
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function r_(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Pa(JSON.stringify(e)),Pa(JSON.stringify(u)),""].join(".")}/**
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
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function o_(){var t;const n=(t=Wa())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function a_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function c_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function l_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function h_(){return!o_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function d_(){try{return typeof indexedDB=="object"}catch{return!1}}function f_(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)==null?void 0:a.message)||"")}}catch(e){t(e)}})}/**
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
 */const p_="FirebaseError";class zn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=p_,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,uo.prototype.create)}}class uo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?m_(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new zn(s,d,r)}}function m_(n,t){return n.replace(__,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const __=/\{\$([^}]+)}/g;function g_(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function On(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const a=n[s],u=t[s];if($u(a)&&$u(u)){if(!On(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function $u(n){return n!==null&&typeof n=="object"}/**
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
 */function ho(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function qs(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(a)}}),t}function $s(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function y_(n,t){const e=new v_(n,t);return e.subscribe.bind(e)}class v_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");w_(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function w_(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Sc(){}/**
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
 */function Gt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function fo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vd(n){return(await fetch(n,{credentials:"include"})).ok}class Zi{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zi="[DEFAULT]";/**
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
 */class T_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new i_;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(I_(t))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=zi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zi){return this.instances.has(t)}getOptions(t=zi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zi){return this.component?this.component.multipleInstances?t:zi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(n){return n===zi?void 0:n}function I_(n){return n.instantiationMode==="EAGER"}/**
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
 */class b_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new T_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var gt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(gt||(gt={}));const A_={debug:gt.DEBUG,verbose:gt.VERBOSE,info:gt.INFO,warn:gt.WARN,error:gt.ERROR,silent:gt.SILENT},P_=gt.INFO,S_={[gt.DEBUG]:"log",[gt.VERBOSE]:"log",[gt.INFO]:"info",[gt.WARN]:"warn",[gt.ERROR]:"error"},C_=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=S_[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yl{constructor(t){this.name=t,this._logLevel=P_,this._logHandler=C_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in gt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?A_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,gt.DEBUG,...t),this._logHandler(this,gt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,gt.VERBOSE,...t),this._logHandler(this,gt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,gt.INFO,...t),this._logHandler(this,gt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,gt.WARN,...t),this._logHandler(this,gt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,gt.ERROR,...t),this._logHandler(this,gt.ERROR,...t)}}const R_=(n,t)=>t.some(e=>n instanceof e);let ju,Hu;function k_(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L_(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fd=new WeakMap,qc=new WeakMap,Ud=new WeakMap,Cc=new WeakMap,vl=new WeakMap;function x_(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",a),n.removeEventListener("error",u)},a=()=>{e(ri(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",a),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Fd.set(e,n)}).catch(()=>{}),vl.set(t,n),t}function D_(n){if(qc.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",u),n.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",a),n.addEventListener("error",u),n.addEventListener("abort",u)});qc.set(n,t)}let $c={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qc.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ud.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ri(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function N_(n){$c=n($c)}function M_(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Rc(this),t,...e);return Ud.set(r,t.sort?t.sort():[t]),ri(r)}:L_().includes(n)?function(...t){return n.apply(Rc(this),t),ri(Fd.get(this))}:function(...t){return ri(n.apply(Rc(this),t))}}function O_(n){return typeof n=="function"?M_(n):(n instanceof IDBTransaction&&D_(n),R_(n,k_())?new Proxy(n,$c):n)}function ri(n){if(n instanceof IDBRequest)return x_(n);if(Cc.has(n))return Cc.get(n);const t=O_(n);return t!==n&&(Cc.set(n,t),vl.set(t,n)),t}const Rc=n=>vl.get(n);function V_(n,t,{blocked:e,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(n,t),d=ri(u);return r&&u.addEventListener("upgradeneeded",p=>{r(ri(u.result),p.oldVersion,p.newVersion,ri(u.transaction),p)}),e&&u.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const F_=["get","getKey","getAll","getAllKeys","count"],U_=["put","add","delete","clear"],kc=new Map;function Wu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kc.get(t))return kc.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=U_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||F_.includes(e)))return;const a=async function(u,...d){const p=this.transaction(u,s?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[e](...d),s&&p.done]))[0]};return kc.set(t,a),a}N_(n=>({...n,get:(t,e,r)=>Wu(t,e)||n.get(t,e,r),has:(t,e)=>!!Wu(t,e)||n.has(t,e)}));/**
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
 */class B_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(z_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function z_(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jc="@firebase/app",Gu="0.14.12";/**
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
 */const Vn=new yl("@firebase/app"),q_="@firebase/app-compat",$_="@firebase/analytics-compat",j_="@firebase/analytics",H_="@firebase/app-check-compat",W_="@firebase/app-check",G_="@firebase/auth",Z_="@firebase/auth-compat",K_="@firebase/database",Q_="@firebase/data-connect",J_="@firebase/database-compat",Y_="@firebase/functions",X_="@firebase/functions-compat",tg="@firebase/installations",eg="@firebase/installations-compat",ng="@firebase/messaging",ig="@firebase/messaging-compat",rg="@firebase/performance",sg="@firebase/performance-compat",og="@firebase/remote-config",ag="@firebase/remote-config-compat",cg="@firebase/storage",lg="@firebase/storage-compat",ug="@firebase/firestore",hg="@firebase/ai",dg="@firebase/firestore-compat",fg="firebase",pg="12.13.0";/**
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
 */const Hc="[DEFAULT]",mg={[jc]:"fire-core",[q_]:"fire-core-compat",[j_]:"fire-analytics",[$_]:"fire-analytics-compat",[W_]:"fire-app-check",[H_]:"fire-app-check-compat",[G_]:"fire-auth",[Z_]:"fire-auth-compat",[K_]:"fire-rtdb",[Q_]:"fire-data-connect",[J_]:"fire-rtdb-compat",[Y_]:"fire-fn",[X_]:"fire-fn-compat",[tg]:"fire-iid",[eg]:"fire-iid-compat",[ng]:"fire-fcm",[ig]:"fire-fcm-compat",[rg]:"fire-perf",[sg]:"fire-perf-compat",[og]:"fire-rc",[ag]:"fire-rc-compat",[cg]:"fire-gcs",[lg]:"fire-gcs-compat",[ug]:"fire-fst",[dg]:"fire-fst-compat",[hg]:"fire-vertex","fire-js":"fire-js",[fg]:"fire-js-all"};/**
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
 */const Sa=new Map,_g=new Map,Wc=new Map;function Zu(n,t){try{n.container.addComponent(t)}catch(e){Vn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Zr(n){const t=n.name;if(Wc.has(t))return Vn.debug(`There were multiple attempts to register component ${t}.`),!1;Wc.set(t,n);for(const e of Sa.values())Zu(e,n);for(const e of _g.values())Zu(e,n);return!0}function wl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function be(n){return n==null?!1:n.settings!==void 0}/**
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
 */const gg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new uo("app","Firebase",gg);/**
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
 */class yg{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=pg;function Bd(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:Hc,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw si.create("bad-app-name",{appName:String(s)});if(e||(e=Md()),!e)throw si.create("no-options");const a=Sa.get(s);if(a){if(On(e,a.options)&&On(r,a.config))return a;throw si.create("duplicate-app",{appName:s})}const u=new b_(s);for(const p of Wc.values())u.addComponent(p);const d=new yg(e,r,u);return Sa.set(s,d),d}function zd(n=Hc){const t=Sa.get(n);if(!t&&n===Hc&&Md())return Bd();if(!t)throw si.create("no-app",{appName:n});return t}function oi(n,t,e){let r=mg[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${r}" with version "${t}":`];s&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vn.warn(u.join(" "));return}Zr(new Zi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const vg="firebase-heartbeat-database",wg=1,to="firebase-heartbeat-store";let Lc=null;function qd(){return Lc||(Lc=V_(vg,wg,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(to)}catch(e){console.warn(e)}}}}).catch(n=>{throw si.create("idb-open",{originalErrorMessage:n.message})})),Lc}async function Tg(n){try{const e=(await qd()).transaction(to),r=await e.objectStore(to).get($d(n));return await e.done,r}catch(t){if(t instanceof zn)Vn.warn(t.message);else{const e=si.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vn.warn(e.message)}}}async function Ku(n,t){try{const r=(await qd()).transaction(to,"readwrite");await r.objectStore(to).put(t,$d(n)),await r.done}catch(e){if(e instanceof zn)Vn.warn(e.message);else{const r=si.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(r.message)}}}function $d(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Eg=1024,Ig=30;class bg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>Ig){const u=Sg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qu(),{heartbeatsToSend:r,unsentEntries:s}=Ag(this._heartbeatsCache.heartbeats),a=Pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Vn.warn(e),""}}}function Qu(){return new Date().toISOString().substring(0,10)}function Ag(n,t=Eg){const e=[];let r=n.slice();for(const s of n){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Ju(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ju(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Pg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d_()?f_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Tg(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ju(n){return Pa(JSON.stringify({version:2,heartbeats:n})).length}function Sg(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Cg(n){Zr(new Zi("platform-logger",t=>new B_(t),"PRIVATE")),Zr(new Zi("heartbeat",t=>new bg(t),"PRIVATE")),oi(jc,Gu,n),oi(jc,Gu,"esm2020"),oi("fire-js","")}Cg("");var Rg="firebase",kg="12.13.0";/**
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
 */oi(Rg,kg,"app");var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ai,jd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,I){function P(){}P.prototype=I.prototype,C.F=I.prototype,C.prototype=new P,C.prototype.constructor=C,C.D=function(k,R,x){for(var b=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)b[lt-2]=arguments[lt];return I.prototype[R].apply(k,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,I,P){P||(P=0);const k=Array(16);if(typeof I=="string")for(var R=0;R<16;++R)k[R]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(R=0;R<16;++R)k[R]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=C.g[0],P=C.g[1],R=C.g[2];let x=C.g[3],b;b=I+(x^P&(R^x))+k[0]+3614090360&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(R^I&(P^R))+k[1]+3905402710&4294967295,x=I+(b<<12&4294967295|b>>>20),b=R+(P^x&(I^P))+k[2]+606105819&4294967295,R=x+(b<<17&4294967295|b>>>15),b=P+(I^R&(x^I))+k[3]+3250441966&4294967295,P=R+(b<<22&4294967295|b>>>10),b=I+(x^P&(R^x))+k[4]+4118548399&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(R^I&(P^R))+k[5]+1200080426&4294967295,x=I+(b<<12&4294967295|b>>>20),b=R+(P^x&(I^P))+k[6]+2821735955&4294967295,R=x+(b<<17&4294967295|b>>>15),b=P+(I^R&(x^I))+k[7]+4249261313&4294967295,P=R+(b<<22&4294967295|b>>>10),b=I+(x^P&(R^x))+k[8]+1770035416&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(R^I&(P^R))+k[9]+2336552879&4294967295,x=I+(b<<12&4294967295|b>>>20),b=R+(P^x&(I^P))+k[10]+4294925233&4294967295,R=x+(b<<17&4294967295|b>>>15),b=P+(I^R&(x^I))+k[11]+2304563134&4294967295,P=R+(b<<22&4294967295|b>>>10),b=I+(x^P&(R^x))+k[12]+1804603682&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(R^I&(P^R))+k[13]+4254626195&4294967295,x=I+(b<<12&4294967295|b>>>20),b=R+(P^x&(I^P))+k[14]+2792965006&4294967295,R=x+(b<<17&4294967295|b>>>15),b=P+(I^R&(x^I))+k[15]+1236535329&4294967295,P=R+(b<<22&4294967295|b>>>10),b=I+(R^x&(P^R))+k[1]+4129170786&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^R&(I^P))+k[6]+3225465664&4294967295,x=I+(b<<9&4294967295|b>>>23),b=R+(I^P&(x^I))+k[11]+643717713&4294967295,R=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(R^x))+k[0]+3921069994&4294967295,P=R+(b<<20&4294967295|b>>>12),b=I+(R^x&(P^R))+k[5]+3593408605&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^R&(I^P))+k[10]+38016083&4294967295,x=I+(b<<9&4294967295|b>>>23),b=R+(I^P&(x^I))+k[15]+3634488961&4294967295,R=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(R^x))+k[4]+3889429448&4294967295,P=R+(b<<20&4294967295|b>>>12),b=I+(R^x&(P^R))+k[9]+568446438&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^R&(I^P))+k[14]+3275163606&4294967295,x=I+(b<<9&4294967295|b>>>23),b=R+(I^P&(x^I))+k[3]+4107603335&4294967295,R=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(R^x))+k[8]+1163531501&4294967295,P=R+(b<<20&4294967295|b>>>12),b=I+(R^x&(P^R))+k[13]+2850285829&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^R&(I^P))+k[2]+4243563512&4294967295,x=I+(b<<9&4294967295|b>>>23),b=R+(I^P&(x^I))+k[7]+1735328473&4294967295,R=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(R^x))+k[12]+2368359562&4294967295,P=R+(b<<20&4294967295|b>>>12),b=I+(P^R^x)+k[5]+4294588738&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^R)+k[8]+2272392833&4294967295,x=I+(b<<11&4294967295|b>>>21),b=R+(x^I^P)+k[11]+1839030562&4294967295,R=x+(b<<16&4294967295|b>>>16),b=P+(R^x^I)+k[14]+4259657740&4294967295,P=R+(b<<23&4294967295|b>>>9),b=I+(P^R^x)+k[1]+2763975236&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^R)+k[4]+1272893353&4294967295,x=I+(b<<11&4294967295|b>>>21),b=R+(x^I^P)+k[7]+4139469664&4294967295,R=x+(b<<16&4294967295|b>>>16),b=P+(R^x^I)+k[10]+3200236656&4294967295,P=R+(b<<23&4294967295|b>>>9),b=I+(P^R^x)+k[13]+681279174&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^R)+k[0]+3936430074&4294967295,x=I+(b<<11&4294967295|b>>>21),b=R+(x^I^P)+k[3]+3572445317&4294967295,R=x+(b<<16&4294967295|b>>>16),b=P+(R^x^I)+k[6]+76029189&4294967295,P=R+(b<<23&4294967295|b>>>9),b=I+(P^R^x)+k[9]+3654602809&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^R)+k[12]+3873151461&4294967295,x=I+(b<<11&4294967295|b>>>21),b=R+(x^I^P)+k[15]+530742520&4294967295,R=x+(b<<16&4294967295|b>>>16),b=P+(R^x^I)+k[2]+3299628645&4294967295,P=R+(b<<23&4294967295|b>>>9),b=I+(R^(P|~x))+k[0]+4096336452&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~R))+k[7]+1126891415&4294967295,x=I+(b<<10&4294967295|b>>>22),b=R+(I^(x|~P))+k[14]+2878612391&4294967295,R=x+(b<<15&4294967295|b>>>17),b=P+(x^(R|~I))+k[5]+4237533241&4294967295,P=R+(b<<21&4294967295|b>>>11),b=I+(R^(P|~x))+k[12]+1700485571&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~R))+k[3]+2399980690&4294967295,x=I+(b<<10&4294967295|b>>>22),b=R+(I^(x|~P))+k[10]+4293915773&4294967295,R=x+(b<<15&4294967295|b>>>17),b=P+(x^(R|~I))+k[1]+2240044497&4294967295,P=R+(b<<21&4294967295|b>>>11),b=I+(R^(P|~x))+k[8]+1873313359&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~R))+k[15]+4264355552&4294967295,x=I+(b<<10&4294967295|b>>>22),b=R+(I^(x|~P))+k[6]+2734768916&4294967295,R=x+(b<<15&4294967295|b>>>17),b=P+(x^(R|~I))+k[13]+1309151649&4294967295,P=R+(b<<21&4294967295|b>>>11),b=I+(R^(P|~x))+k[4]+4149444226&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~R))+k[11]+3174756917&4294967295,x=I+(b<<10&4294967295|b>>>22),b=R+(I^(x|~P))+k[2]+718787259&4294967295,R=x+(b<<15&4294967295|b>>>17),b=P+(x^(R|~I))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(R+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+R&4294967295,C.g[3]=C.g[3]+x&4294967295}r.prototype.v=function(C,I){I===void 0&&(I=C.length);const P=I-this.blockSize,k=this.C;let R=this.h,x=0;for(;x<I;){if(R==0)for(;x<=P;)s(this,C,x),x+=this.blockSize;if(typeof C=="string"){for(;x<I;)if(k[R++]=C.charCodeAt(x++),R==this.blockSize){s(this,k),R=0;break}}else for(;x<I;)if(k[R++]=C[x++],R==this.blockSize){s(this,k),R=0;break}}this.h=R,this.o+=I},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var P=C.length-8;P<C.length;++P)C[P]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,P=0;P<4;++P)for(let k=0;k<32;k+=8)C[I++]=this.g[P]>>>k&255;return C};function a(C,I){var P=d;return Object.prototype.hasOwnProperty.call(P,C)?P[C]:P[C]=I(C)}function u(C,I){this.h=I;const P=[];let k=!0;for(let R=C.length-1;R>=0;R--){const x=C[R]|0;k&&x==I||(P[R]=x,k=!1)}this.g=P}var d={};function p(C){return-128<=C&&C<128?a(C,function(I){return new u([I|0],I<0?-1:0)}):new u([C|0],C<0?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return w;if(C<0)return U(g(-C));const I=[];let P=1;for(let k=0;C>=P;k++)I[k]=C/P|0,P*=4294967296;return new u(I,0)}function y(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return U(y(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=g(Math.pow(I,8));let k=w;for(let x=0;x<C.length;x+=8){var R=Math.min(8,C.length-x);const b=parseInt(C.substring(x,x+R),I);R<8?(R=g(Math.pow(I,R)),k=k.j(R).add(g(b))):(k=k.j(P),k=k.add(g(b)))}return k}var w=p(0),E=p(1),S=p(16777216);n=u.prototype,n.m=function(){if(V(this))return-U(this).m();let C=0,I=1;for(let P=0;P<this.g.length;P++){const k=this.i(P);C+=(k>=0?k:4294967296+k)*I,I*=4294967296}return C},n.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(M(this))return"0";if(V(this))return"-"+U(this).toString(C);const I=g(Math.pow(C,6));var P=this;let k="";for(;;){const R=ut(P,I).g;P=J(P,R.j(I));let x=((P.g.length>0?P.g[0]:P.h)>>>0).toString(C);if(P=R,M(P))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},n.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function M(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function V(C){return C.h==-1}n.l=function(C){return C=J(this,C),V(C)?-1:M(C)?0:1};function U(C){const I=C.g.length,P=[];for(let k=0;k<I;k++)P[k]=~C.g[k];return new u(P,~C.h).add(E)}n.abs=function(){return V(this)?U(this):this},n.add=function(C){const I=Math.max(this.g.length,C.g.length),P=[];let k=0;for(let R=0;R<=I;R++){let x=k+(this.i(R)&65535)+(C.i(R)&65535),b=(x>>>16)+(this.i(R)>>>16)+(C.i(R)>>>16);k=b>>>16,x&=65535,b&=65535,P[R]=b<<16|x}return new u(P,P[P.length-1]&-2147483648?-1:0)};function J(C,I){return C.add(U(I))}n.j=function(C){if(M(this)||M(C))return w;if(V(this))return V(C)?U(this).j(U(C)):U(U(this).j(C));if(V(C))return U(this.j(U(C)));if(this.l(S)<0&&C.l(S)<0)return g(this.m()*C.m());const I=this.g.length+C.g.length,P=[];for(var k=0;k<2*I;k++)P[k]=0;for(k=0;k<this.g.length;k++)for(let R=0;R<C.g.length;R++){const x=this.i(k)>>>16,b=this.i(k)&65535,lt=C.i(R)>>>16,ee=C.i(R)&65535;P[2*k+2*R]+=b*ee,H(P,2*k+2*R),P[2*k+2*R+1]+=x*ee,H(P,2*k+2*R+1),P[2*k+2*R+1]+=b*lt,H(P,2*k+2*R+1),P[2*k+2*R+2]+=x*lt,H(P,2*k+2*R+2)}for(C=0;C<I;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=I;C<2*I;C++)P[C]=0;return new u(P,0)};function H(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function W(C,I){this.g=C,this.h=I}function ut(C,I){if(M(I))throw Error("division by zero");if(M(C))return new W(w,w);if(V(C))return I=ut(U(C),I),new W(U(I.g),U(I.h));if(V(I))return I=ut(C,U(I)),new W(U(I.g),I.h);if(C.g.length>30){if(V(C)||V(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,k=I;k.l(C)<=0;)P=pt(P),k=pt(k);var R=at(P,1),x=at(k,1);for(k=at(k,2),P=at(P,2);!M(k);){var b=x.add(k);b.l(C)<=0&&(R=R.add(P),x=b),k=at(k,1),P=at(P,1)}return I=J(C,R.j(I)),new W(R,I)}for(R=w;C.l(I)>=0;){for(P=Math.max(1,Math.floor(C.m()/I.m())),k=Math.ceil(Math.log(P)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=g(P),b=x.j(I);V(b)||b.l(C)>0;)P-=k,x=g(P),b=x.j(I);M(x)&&(x=E),R=R.add(x),C=J(C,b)}return new W(R,C)}n.B=function(C){return ut(this,C).h},n.and=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)&C.i(k);return new u(P,this.h&C.h)},n.or=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)|C.i(k);return new u(P,this.h|C.h)},n.xor=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)^C.i(k);return new u(P,this.h^C.h)};function pt(C){const I=C.g.length+1,P=[];for(let k=0;k<I;k++)P[k]=C.i(k)<<1|C.i(k-1)>>>31;return new u(P,C.h)}function at(C,I){const P=I>>5;I%=32;const k=C.g.length-P,R=[];for(let x=0;x<k;x++)R[x]=I>0?C.i(x+P)>>>I|C.i(x+P+1)<<32-I:C.i(x+P);return new u(R,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,jd=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,ai=u}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hd,js,Wd,ma,Gc,Gd,Zd,Kd;(function(){var n,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof aa=="object"&&aa];for(var f=0;f<c.length;++f){var _=c[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=e(this);function s(c,f){if(f)t:{var _=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var D=c[T];if(!(D in _))break t;_=_[D]}c=c[c.length-1],T=_[c],f=f(T),f!=T&&f!=null&&t(_,c,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(f){var _=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&_.push([T,f[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function d(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function p(c,f,_){return c.call.apply(c.bind,arguments)}function g(c,f,_){return g=p,g.apply(null,arguments)}function y(c,f){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,f){function _(){}_.prototype=f.prototype,c.Z=f.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,D,O){for(var $=Array(arguments.length-2),st=2;st<arguments.length;st++)$[st-2]=arguments[st];return f.prototype[D].apply(T,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function S(c){const f=c.length;if(f>0){const _=Array(f);for(let T=0;T<f;T++)_[T]=c[T];return _}return[]}function M(c,f){for(let T=1;T<arguments.length;T++){const D=arguments[T];var _=typeof D;if(_=_!="object"?_:D?Array.isArray(D)?"array":_:"null",_=="array"||_=="object"&&typeof D.length=="number"){_=c.length||0;const O=D.length||0;c.length=_+O;for(let $=0;$<O;$++)c[_+$]=D[$]}else c.push(D)}}class V{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function U(c){u.setTimeout(()=>{throw c},0)}function J(){var c=C;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class H{constructor(){this.h=this.g=null}add(f,_){const T=W.get();T.set(f,_),this.h?this.h.next=T:this.g=T,this.h=T}}var W=new V(()=>new ut,c=>c.reset());class ut{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let pt,at=!1,C=new H,I=()=>{const c=Promise.resolve(void 0);pt=()=>{c.then(P)}};function P(){for(var c;c=J();){try{c.h.call(c.g)}catch(_){U(_)}var f=W;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}at=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,f),u.removeEventListener("test",_,f)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function lt(c,f){R.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}w(lt,R),lt.prototype.init=function(c,f){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(_=="mouseover"?f=c.fromElement:_=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&lt.Z.h.call(this)},lt.prototype.h=function(){lt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ee="closure_listenable_"+(Math.random()*1e6|0),Zt=0;function fn(c,f,_,T,D){this.listener=c,this.proxy=null,this.src=f,this.type=_,this.capture=!!T,this.ha=D,this.key=++Zt,this.da=this.fa=!1}function it(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function pn(c,f,_){for(const T in c)f.call(_,c[T],T,c)}function X(c,f){for(const _ in c)f.call(void 0,c[_],_,c)}function St(c){const f={};for(const _ in c)f[_]=c[_];return f}const Ct="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jt(c,f){let _,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(_ in T)c[_]=T[_];for(let O=0;O<Ct.length;O++)_=Ct[O],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function Lt(c){this.src=c,this.g={},this.h=0}Lt.prototype.add=function(c,f,_,T,D){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const $=ht(c,f,T,D);return $>-1?(f=c[$],_||(f.fa=!1)):(f=new fn(f,this.src,O,!!T,D),f.fa=_,c.push(f)),f};function wt(c,f){const _=f.type;if(_ in c.g){var T=c.g[_],D=Array.prototype.indexOf.call(T,f,void 0),O;(O=D>=0)&&Array.prototype.splice.call(T,D,1),O&&(it(f),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ht(c,f,_,T){for(let D=0;D<c.length;++D){const O=c[D];if(!O.da&&O.listener==f&&O.capture==!!_&&O.ha==T)return D}return-1}var we="closure_lm_"+(Math.random()*1e6|0),Ce={};function us(c,f,_,T,D){if(Array.isArray(f)){for(let O=0;O<f.length;O++)us(c,f[O],_,T,D);return null}return _=Si(_),c&&c[ee]?c.J(f,_,d(T)?!!T.capture:!1,D):hs(c,f,_,!1,T,D)}function hs(c,f,_,T,D,O){if(!f)throw Error("Invalid event type");const $=d(D)?!!D.capture:!!D;let st=or(c);if(st||(c[we]=st=new Lt(c)),_=st.add(f,_,T,$,O),_.proxy)return _;if(T=ds(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)x||(D=$),D===void 0&&(D=!1),c.addEventListener(f.toString(),T,D);else if(c.attachEvent)c.attachEvent(So(f.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ds(){function c(_){return f.call(c.src,c.listener,_)}const f=Co;return c}function qn(c,f,_,T,D){if(Array.isArray(f))for(var O=0;O<f.length;O++)qn(c,f[O],_,T,D);else T=d(T)?!!T.capture:!!T,_=Si(_),c&&c[ee]?(c=c.i,O=String(f).toString(),O in c.g&&(f=c.g[O],_=ht(f,_,T,D),_>-1&&(it(f[_]),Array.prototype.splice.call(f,_,1),f.length==0&&(delete c.g[O],c.h--)))):c&&(c=or(c))&&(f=c.g[f.toString()],c=-1,f&&(c=ht(f,_,T,D)),(_=c>-1?f[c]:null)&&Ai(_))}function Ai(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[ee])wt(f.i,c);else{var _=c.type,T=c.proxy;f.removeEventListener?f.removeEventListener(_,T,c.capture):f.detachEvent?f.detachEvent(So(_),T):f.addListener&&f.removeListener&&f.removeListener(T),(_=or(f))?(wt(_,c),_.h==0&&(_.src=null,f[we]=null)):it(c)}}}function So(c){return c in Ce?Ce[c]:Ce[c]="on"+c}function Co(c,f){if(c.da)c=!0;else{f=new lt(f,this);const _=c.listener,T=c.ha||c.src;c.fa&&Ai(c),c=_.call(T,f)}return c}function or(c){return c=c[we],c instanceof Lt?c:null}var Pi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Si(c){return typeof c=="function"?c:(c[Pi]||(c[Pi]=function(f){return c.handleEvent(f)}),c[Pi])}function Kt(){k.call(this),this.i=new Lt(this),this.M=this,this.G=null}w(Kt,k),Kt.prototype[ee]=!0,Kt.prototype.removeEventListener=function(c,f,_,T){qn(this,c,f,_,T)};function Qt(c,f){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=f.type||f,typeof f=="string")f=new R(f,c);else if(f instanceof R)f.target=f.target||c;else{var D=f;f=new R(T,c),jt(f,D)}D=!0;let O,$;if(_)for($=_.length-1;$>=0;$--)O=f.g=_[$],D=$n(O,T,!0,f)&&D;if(O=f.g=c,D=$n(O,T,!0,f)&&D,D=$n(O,T,!1,f)&&D,_)for($=0;$<_.length;$++)O=f.g=_[$],D=$n(O,T,!1,f)&&D}Kt.prototype.N=function(){if(Kt.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const _=c.g[f];for(let T=0;T<_.length;T++)it(_[T]);delete c.g[f],c.h--}}this.G=null},Kt.prototype.J=function(c,f,_,T){return this.i.add(String(c),f,!1,_,T)},Kt.prototype.K=function(c,f,_,T){return this.i.add(String(c),f,!0,_,T)};function $n(c,f,_,T){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let O=0;O<f.length;++O){const $=f[O];if($&&!$.da&&$.capture==_){const st=$.listener,Et=$.ha||$.src;$.fa&&wt(c.i,$),D=st.call(Et,T)!==!1&&D}}return D&&!T.defaultPrevented}function Ro(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:u.setTimeout(c,f||0)}function fs(c){c.g=Ro(()=>{c.g=null,c.i&&(c.i=!1,fs(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class pc extends k{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:fs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(c){k.call(this),this.h=c,this.g={}}w(Ci,k);var ar=[];function ps(c){pn(c.g,function(f,_){this.g.hasOwnProperty(_)&&Ai(f)},c),c.g={}}Ci.prototype.N=function(){Ci.Z.N.call(this),ps(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=u.JSON.stringify,mc=u.JSON.parse,ko=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ms(){}function Lo(){}var jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ri(){R.call(this,"d")}w(Ri,R);function lr(){R.call(this,"c")}w(lr,R);var mn={},Hn=null;function ur(){return Hn=Hn||new Kt}mn.Ia="serverreachability";function xo(c){R.call(this,mn.Ia,c)}w(xo,R);function Wn(c){const f=ur();Qt(f,new xo(f))}mn.STAT_EVENT="statevent";function _s(c,f){R.call(this,mn.STAT_EVENT,c),this.stat=f}w(_s,R);function Jt(c){const f=ur();Qt(f,new _s(f,c))}mn.Ja="timingevent";function Do(c,f){R.call(this,mn.Ja,c),this.size=f}w(Do,R);function ki(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},f)}function Li(){this.g=!0}Li.prototype.ua=function(){this.g=!1};function _c(c,f,_,T,D,O){c.info(function(){if(c.g)if(O){var $="",st=O.split("&");for(let bt=0;bt<st.length;bt++){var Et=st[bt].split("=");if(Et.length>1){const Vt=Et[0];Et=Et[1];const De=Vt.split("_");$=De.length>=2&&De[1]=="type"?$+(Vt+"="+Et+"&"):$+(Vt+"=redacted&")}}}else $=null;else $=O;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+f+`
`+_+`
`+$})}function gc(c,f,_,T,D,O,$){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+f+`
`+_+`
`+O+" "+$})}function Gn(c,f,_,T){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+yc(c,_)+(T?" "+T:"")})}function gs(c,f){c.info(function(){return"TIMEOUT: "+f})}Li.prototype.info=function(){};function yc(c,f){if(!c.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var _=O[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var D=T[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<T.length;$++)T[$]=""}}}}return cr(O)}catch{return f}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},No={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mo;function pe(){}w(pe,ms),pe.prototype.g=function(){return new XMLHttpRequest},Mo=new pe;function Q(c){return encodeURIComponent(String(c))}function Oo(c){var f=1;c=c.split(":");const _=[];for(;f>0&&c.length;)_.push(c.shift()),f--;return c.length&&_.push(c.join(":")),_}function Ue(c,f,_,T){this.j=c,this.i=f,this.l=_,this.S=T||1,this.V=new Ci(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ys}function ys(){this.i=null,this.g="",this.h=!1}var vs={},xi={};function dr(c,f,_){c.M=1,c.A=Rt(ue(f)),c.u=_,c.R=!0,_n(c,null)}function _n(c,f){c.F=Date.now(),fr(c),c.B=ue(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),yr(_.i,"t",T),c.C=0,_=c.j.L,c.h=new ys,c.g=Ds(c.j,_?f:null,!c.u),c.P>0&&(c.O=new pc(g(c.Y,c,c.g),c.P)),f=c.V,_=c.g,T=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(ar[0]=D.toString()),D=ar);for(let O=0;O<D.length;O++){const $=us(_,D[O],T||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=c.J?St(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),Wn(),_c(c.i,c.v,c.B,c.l,c.S,c.u)}Ue.prototype.ba=function(c){c=c.target;const f=this.O;f&&Ye(c)==3?f.j():this.Y(c)},Ue.prototype.Y=function(c){try{if(c==this.g)t:{const st=Ye(this.g),Et=this.g.ya(),bt=this.g.ca();if(!(st<3)&&(st!=3||this.g&&(this.h.h||this.g.la()||Ps(this.g)))){this.K||st!=4||Et==7||(Et==8||bt<=0?Wn(3):Wn(2)),pr(this);var f=this.g.ca();this.X=f;var _=Vo(this);if(this.o=f==200,gc(this.i,this.v,this.B,this.l,this.S,st,f),this.o){if(this.U&&!this.L){e:{if(this.g){var T,D=this.g;if((T=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var O=T;break e}}O=null}if(c=O)Gn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ws(this,c);else{this.o=!1,this.m=3,Jt(12),Re(this),Di(this);break t}}if(this.R){c=!0;let Vt;for(;!this.K&&this.C<_.length;)if(Vt=vc(this,_),Vt==xi){st==4&&(this.m=4,Jt(14),c=!1),Gn(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==vs){this.m=4,Jt(15),Gn(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else Gn(this.i,this.l,Vt,null),ws(this,Vt);if(Fo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||_.length!=0||this.h.h||(this.m=1,Jt(16),c=!1),this.o=this.o&&c,!c)Gn(this.i,this.l,_,"[Invalid Chunked Response]"),Re(this),Di(this);else if(_.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Ls($),$.P=!0,Jt(11))}}else Gn(this.i,this.l,_,null),ws(this,_);st==4&&Re(this),this.o&&!this.K&&(st==4?Ee(this.j,this):(this.o=!1,fr(this)))}else Ss(this.g),f==400&&_.indexOf("Unknown SID")>0?(this.m=3,Jt(12)):(this.m=0,Jt(13)),Re(this),Di(this)}}}catch{}finally{}};function Vo(c){if(!Fo(c))return c.g.la();const f=Ps(c.g);if(f==="")return"";let _="";const T=f.length,D=Ye(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Re(c),Di(c),"";c.h.i=new u.TextDecoder}for(let O=0;O<T;O++)c.h.h=!0,_+=c.h.i.decode(f[O],{stream:!(D&&O==T-1)});return f.length=0,c.h.g+=_,c.C=0,c.h.g}function Fo(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function vc(c,f){var _=c.C,T=f.indexOf(`
`,_);return T==-1?xi:(_=Number(f.substring(_,T)),isNaN(_)?vs:(T+=1,T+_>f.length?xi:(f=f.slice(T,T+_),c.C=T+_,f)))}Ue.prototype.cancel=function(){this.K=!0,Re(this)};function fr(c){c.T=Date.now()+c.H,Uo(c,c.H)}function Uo(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ki(g(c.aa,c),f)}function pr(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Ue.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(gs(this.i,this.B),this.M!=2&&(Wn(),Jt(17)),Re(this),this.m=2,Di(this)):Uo(this,this.T-c)};function Di(c){c.j.I==0||c.K||Ee(c.j,c)}function Re(c){pr(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,ps(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function ws(c,f){try{var _=c.j;if(_.I!=0&&(_.g==c||Ni(_.h,c))){if(!c.L&&Ni(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)Ir(_),Tr(_);else break t;ks(_),Jt(18)}}else _.xa=D[1],0<_.xa-_.K&&D[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=ki(g(_.Va,_),6e3));qo(_.h)<=1&&_.ta&&(_.ta=void 0)}else tn(_,11)}else if((c.L||_.g==c)&&Ir(_),!b(f))for(D=_.Ba.g.parse(f),f=0;f<D.length;f++){let bt=D[f];const Vt=bt[0];if(!(Vt<=_.K))if(_.K=Vt,bt=bt[1],_.I==2)if(bt[0]=="c"){_.M=bt[1],_.ba=bt[2];const De=bt[3];De!=null&&(_.ka=De,_.j.info("VER="+_.ka));const qe=bt[4];qe!=null&&(_.za=qe,_.j.info("SVER="+_.za));const Ne=bt[5];Ne!=null&&typeof Ne=="number"&&Ne>0&&(T=1.5*Ne,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const en=c.g;if(en){const Pr=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var O=T.h;O.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(gn(O,O.h),O.h=null))}if(T.G){const Sr=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(T.wa=Sr,K(T.J,T.G,Sr))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var $=c;if(T.na=xs(T,T.L?T.ba:null,T.W),$.L){Ts(T.h,$);var st=$,Et=T.O;Et&&(st.H=Et),st.D&&(pr(st),fr(st)),T.g=$}else Rs(T);_.i.length>0&&Xe(_)}else bt[0]!="stop"&&bt[0]!="close"||tn(_,7);else _.I==3&&(bt[0]=="stop"||bt[0]=="close"?bt[0]=="stop"?tn(_,7):dt(_):bt[0]!="noop"&&_.l&&_.l.qa(bt),_.A=0)}}Wn(4)}catch{}}var wc=class{constructor(c,f){this.g=c,this.map=f}};function Bo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function qo(c){return c.h?1:c.g?c.g.size:0}function Ni(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function gn(c,f){c.g?c.g.add(f):c.h=f}function Ts(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Bo.prototype.cancel=function(){if(this.i=Es(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Es(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const _ of c.g.values())f=f.concat(_.G);return f}return S(c.i)}var Zn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yt(c,f){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let D,O=null;T>=0?(D=c[_].substring(0,T),O=c[_].substring(T+1)):D=c[_],f(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Tt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof Tt?(this.l=c.l,ke(this,c.j),this.o=c.o,this.g=c.g,Le(this,c.u),this.h=c.h,Mi(this,Oi(c.i)),this.m=c.m):c&&(f=String(c).match(Zn))?(this.l=!1,ke(this,f[1]||"",!0),this.o=yn(f[2]||""),this.g=yn(f[3]||"",!0),Le(this,f[4]),this.h=yn(f[5]||"",!0),Mi(this,f[6]||"",!0),this.m=yn(f[7]||"")):(this.l=!1,this.i=new Be(null,this.l))}Tt.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(Ke(f,$o,!0),":");var _=this.g;return(_||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Ke(f,$o,!0),"@"),c.push(Q(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ke(_,_.charAt(0)=="/"?vn:mr,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ke(_,wn)),c.join("")},Tt.prototype.resolve=function(c){const f=ue(this);let _=!!c.j;_?ke(f,c.j):_=!!c.o,_?f.o=c.o:_=!!c.g,_?f.g=c.g:_=c.u!=null;var T=c.h;if(_)Le(f,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var D=f.h.lastIndexOf("/");D!=-1&&(T=f.h.slice(0,D+1)+T)}if(D=T,D==".."||D==".")T="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){T=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let $=0;$<D.length;){const st=D[$++];st=="."?T&&$==D.length&&O.push(""):st==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&$==D.length&&O.push("")):(O.push(st),T=!0)}T=O.join("/")}else T=D}return _?f.h=T:_=c.i.toString()!=="",_?Mi(f,Oi(c.i)):_=!!c.m,_&&(f.m=c.m),f};function ue(c){return new Tt(c)}function ke(c,f,_){c.j=_?yn(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Le(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function Mi(c,f,_){f instanceof Be?(c.i=f,Is(c.i,c.l)):(_||(f=Ke(f,Nt)),c.i=new Be(f,c.l))}function K(c,f,_){c.i.set(f,_)}function Rt(c){return K(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function yn(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ke(c,f,_){return typeof c=="string"?(c=encodeURI(c).replace(f,me),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function me(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var $o=/[#\/\?@]/g,mr=/[#\?:]/g,vn=/[#\?]/g,Nt=/[#\?@]/g,wn=/#/g;function Be(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Te(c){c.g||(c.g=new Map,c.h=0,c.i&&yt(c.i,function(f,_){c.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}n=Be.prototype,n.add=function(c,f){Te(this),this.i=null,c=Qe(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(f),this.h+=1,this};function _r(c,f){Te(c),f=Qe(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Kn(c,f){return Te(c),f=Qe(c,f),c.g.has(f)}n.forEach=function(c,f){Te(this),this.g.forEach(function(_,T){_.forEach(function(D){c.call(f,D,T,this)},this)},this)};function gr(c,f){Te(c);let _=[];if(typeof f=="string")Kn(c,f)&&(_=_.concat(c.g.get(Qe(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)_=_.concat(c[f]);return _}n.set=function(c,f){return Te(this),this.i=null,c=Qe(this,c),Kn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=gr(this,c),c.length>0?String(c[0]):f):f};function yr(c,f,_){_r(c,f),_.length>0&&(c.i=null,c.g.set(Qe(c,f),S(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var _=f[T];const D=Q(_);_=gr(this,_);for(let O=0;O<_.length;O++){let $=D;_[O]!==""&&($+="="+Q(_[O])),c.push($)}}return this.i=c.join("&")};function Oi(c){const f=new Be;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Qe(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function Is(c,f){f&&!c.j&&(Te(c),c.i=null,c.g.forEach(function(_,T){const D=T.toLowerCase();T!=D&&(_r(this,T),yr(this,D,_))},c)),c.j=f}function vr(c,f){const _=new Li;if(u.Image){const T=new Image;T.onload=y(xe,_,"TestLoadImage: loaded",!0,f,T),T.onerror=y(xe,_,"TestLoadImage: error",!1,f,T),T.onabort=y(xe,_,"TestLoadImage: abort",!1,f,T),T.ontimeout=y(xe,_,"TestLoadImage: timeout",!1,f,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else f(!1)}function jo(c,f){const _=new Li,T=new AbortController,D=setTimeout(()=>{T.abort(),xe(_,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:T.signal}).then(O=>{clearTimeout(D),O.ok?xe(_,"TestPingServer: ok",!0,f):xe(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),xe(_,"TestPingServer: error",!1,f)})}function xe(c,f,_,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(_)}catch{}}function Tc(){this.g=new ko}function rt(c){this.i=c.Sb||null,this.h=c.ab||!1}w(rt,ms),rt.prototype.g=function(){return new he(this.i,this.h)};function he(c,f){Kt.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(he,Kt),n=he.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,Tn(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||u).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qn(this)),this.readyState=0},n.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pt(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pt(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}n.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Qn(this):Tn(this),this.readyState==3&&Pt(this)}},n.Oa=function(c){this.g&&(this.response=this.responseText=c,Qn(this))},n.Na=function(c){this.g&&(this.response=c,Qn(this))},n.ga=function(){this.g&&Qn(this)};function Qn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Tn(c)}n.setRequestHeader=function(c,f){this.A.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=f.next();return c.join(`\r
`)};function Tn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(he.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wr(c){let f="";return pn(c,function(_,T){f+=T,f+=":",f+=_,f+=`\r
`}),f}function Vi(c,f,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=wr(_),typeof c=="string"?_!=null&&Q(_):K(c,f,_))}function It(c){Kt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(It,Kt);var bs=/^https?$/i,Fi=["POST","PUT"];n=It.prototype,n.Fa=function(c){this.H=c},n.ea=function(c,f,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mo.g(),this.g.onreadystatechange=E(g(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Ut(this,O);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)_.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())_.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(O=>O.toLowerCase()=="content-type"),D=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(Fi,f,void 0)>=0)||T||D||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of _)this.g.setRequestHeader(O,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Ut(this,O)}};function Ut(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,Je(c),Ui(c)}function Je(c){c.A||(c.A=!0,Qt(c,"complete"),Qt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Qt(this,"complete"),Qt(this,"abort"),Ui(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ui(this,!0)),It.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?As(this):this.Xa())},n.Xa=function(){As(this)};function As(c){if(c.h&&typeof a<"u"){if(c.v&&Ye(c)==4)setTimeout(c.Ca.bind(c),0);else if(Qt(c,"readystatechange"),Ye(c)==4){c.h=!1;try{const O=c.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var _;if(!(_=f)){var T;if(T=O===0){let $=String(c.D).match(Zn)[1]||null;!$&&u.self&&u.self.location&&($=u.self.location.protocol.slice(0,-1)),T=!bs.test($?$.toLowerCase():"")}_=T}if(_)Qt(c,"complete"),Qt(c,"success");else{c.o=6;try{var D=Ye(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Je(c)}}finally{Ui(c)}}}}function Ui(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,f||Qt(c,"ready");try{_.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ye(c){return c.g?c.g.readyState:0}n.ca=function(){try{return Ye(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),mc(f)}};function Ps(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ss(c){const f={};c=(c.g&&Ye(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(b(c[T]))continue;var _=Oo(c[T]);const D=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const O=f[D]||[];f[D]=O,O.push(_)}X(f,function(T){return T.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bi(c,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||f}function Cs(c){this.za=0,this.i=[],this.j=new Li,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Bi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Bi("baseRetryDelayMs",5e3,c),this.Za=Bi("retryDelaySeedMs",1e4,c),this.Ta=Bi("forwardChannelMaxRetries",2,c),this.va=Bi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Bo(c&&c.concurrentRequestLimit),this.Ba=new Tc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Cs.prototype,n.ka=8,n.I=1,n.connect=function(c,f,_,T){Jt(0),this.W=c,this.H=f||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=xs(this,null,this.W),Xe(this)};function dt(c){if(_e(c),c.I==3){var f=c.V++,_=ue(c.J);if(K(_,"SID",c.M),K(_,"RID",f),K(_,"TYPE","terminate"),En(c,_),f=new Ue(c,c.j,f),f.M=2,f.A=Rt(ue(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(f.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=f.A,_=!0),_||(f.g=Ds(f.j,null),f.g.ea(f.A)),f.F=Date.now(),fr(f)}ze(c)}function Tr(c){c.g&&(Ls(c),c.g.cancel(),c.g=null)}function _e(c){Tr(c),c.v&&(u.clearTimeout(c.v),c.v=null),Ir(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Xe(c){if(!zo(c.h)&&!c.m){c.m=!0;var f=c.Ea;pt||I(),at||(pt(),at=!0),C.add(f,c),c.D=0}}function Ho(c,f){return qo(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ki(g(c.Ea,c,f),Zo(c,c.D)),c.D++,!0)}n.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Ue(this,this.j,c);let O=this.o;if(this.U&&(O?(O=St(O),jt(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)t:{for(var f=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=_;break t}if(f===4096||_===this.i.length-1){f=_+1;break t}}f=1e3}else f=1e3;f=Go(this,D,f),_=ue(this.J),K(_,"RID",c),K(_,"CVER",22),this.G&&K(_,"X-HTTP-Session-Id",this.G),En(this,_),O&&(this.R?f="headers="+Q(wr(O))+"&"+f:this.u&&Vi(_,this.u,O)),gn(this.h,D),this.Ra&&K(_,"TYPE","init"),this.S?(K(_,"$req",f),K(_,"SID","null"),D.U=!0,dr(D,_,null)):dr(D,_,f),this.I=2}}else this.I==3&&(c?Wo(this,c):this.i.length==0||zo(this.h)||Wo(this))};function Wo(c,f){var _;f?_=f.l:_=c.V++;const T=ue(c.J);K(T,"SID",c.M),K(T,"RID",_),K(T,"AID",c.K),En(c,T),c.u&&c.o&&Vi(T,c.u,c.o),_=new Ue(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),f&&(c.i=f.G.concat(c.i)),f=Go(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),gn(c.h,_),dr(_,T,f)}function En(c,f){c.H&&pn(c.H,function(_,T){K(f,T,_)}),c.l&&pn({},function(_,T){K(f,T,_)})}function Go(c,f,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var D=c.i;let st=-1;for(;;){const Et=["count="+_];st==-1?_>0?(st=D[0].g,Et.push("ofs="+st)):st=0:Et.push("ofs="+st);let bt=!0;for(let Vt=0;Vt<_;Vt++){var O=D[Vt].g;const De=D[Vt].map;if(O-=st,O<0)st=Math.max(0,D[Vt].g-100),bt=!1;else try{O="req"+O+"_"||"";try{var $=De instanceof Map?De:Object.entries(De);for(const[qe,Ne]of $){let en=Ne;d(Ne)&&(en=cr(Ne)),Et.push(O+qe+"="+encodeURIComponent(en))}}catch(qe){throw Et.push(O+"type="+encodeURIComponent("_badmap")),qe}}catch{T&&T(De)}}if(bt){$=Et.join("&");break t}}$=void 0}return c=c.i.splice(0,_),f.G=c,$}function Rs(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;pt||I(),at||(pt(),at=!0),C.add(f,c),c.A=0}}function ks(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ki(g(c.Da,c),Zo(c,c.A)),c.A++,!0)}n.Da=function(){if(this.v=null,Er(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ki(g(this.Wa,this),c)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Jt(10),Tr(this),Er(this))};function Ls(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function Er(c){c.g=new Ue(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=ue(c.na);K(f,"RID","rpc"),K(f,"SID",c.M),K(f,"AID",c.K),K(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&K(f,"TO",c.ia),K(f,"TYPE","xmlhttp"),En(c,f),c.u&&c.o&&Vi(f,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=Rt(ue(f)),_.u=null,_.R=!0,_n(_,c)}n.Va=function(){this.C!=null&&(this.C=null,Tr(this),ks(this),Jt(19))};function Ir(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function Ee(c,f){var _=null;if(c.g==f){Ir(c),Ls(c),c.g=null;var T=2}else if(Ni(c.h,f))_=f.G,Ts(c.h,f),T=1;else return;if(c.I!=0){if(f.o)if(T==1){_=f.u?f.u.length:0,f=Date.now()-f.F;var D=c.D;T=ur(),Qt(T,new Do(T,_)),Xe(c)}else Rs(c);else if(D=f.m,D==3||D==0&&f.X>0||!(T==1&&Ho(c,f)||T==2&&ks(c)))switch(_&&_.length>0&&(f=c.h,f.i=f.i.concat(_)),D){case 1:tn(c,5);break;case 4:tn(c,10);break;case 3:tn(c,6);break;default:tn(c,2)}}}function Zo(c,f){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*f}function tn(c,f){if(c.j.info("Error code "+f),f==2){var _=g(c.bb,c),T=c.Ua;const D=!T;T=new Tt(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ke(T,"https"),Rt(T),D?vr(T.toString(),_):jo(T.toString(),_)}else Jt(2);c.I=0,c.l&&c.l.pa(f),ze(c),_e(c)}n.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Jt(2)):(this.j.info("Failed to ping google.com"),Jt(1))};function ze(c){if(c.I=0,c.ja=[],c.l){const f=Es(c.h);(f.length!=0||c.i.length!=0)&&(M(c.ja,f),M(c.ja,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.oa()}}function xs(c,f,_){var T=_ instanceof Tt?ue(_):new Tt(_);if(T.g!="")f&&(T.g=f+"."+T.g),Le(T,T.u);else{var D=u.location;T=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const O=new Tt(null);T&&ke(O,T),f&&(O.g=f),D&&Le(O,D),_&&(O.h=_),T=O}return _=c.G,f=c.wa,_&&f&&K(T,_,f),K(T,"VER",c.ka),En(c,T),T}function Ds(c,f,_){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new It(new rt({ab:_})):new It(c.ma),f.Fa(c.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function br(){}n=br.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ar(){}Ar.prototype.g=function(c,f){return new se(c,f)};function se(c,f){Kt.call(this),this.g=new Cs(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!b(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Jn(this)}w(se,Kt),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){dt(this.g)},se.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=cr(c),c=_);f.i.push(new wc(f.Ya++,c)),f.I==3&&Xe(f)},se.prototype.N=function(){this.g.l=null,delete this.j,dt(this.g),delete this.g,se.Z.N.call(this)};function Ns(c){Ri.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const _ in f){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(Ns,Ri);function Ko(){lr.call(this),this.status=1}w(Ko,lr);function Jn(c){this.g=c}w(Jn,br),Jn.prototype.ra=function(){Qt(this.g,"a")},Jn.prototype.qa=function(c){Qt(this.g,new Ns(c))},Jn.prototype.pa=function(c){Qt(this.g,new Ko)},Jn.prototype.oa=function(){Qt(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,Kd=function(){return new Ar},Zd=function(){return ur()},Gd=mn,Gc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,ma=hr,No.COMPLETE="complete",Wd=No,Lo.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",Kt.prototype.listen=Kt.prototype.J,js=Lo,It.prototype.listenOnce=It.prototype.K,It.prototype.getLastError=It.prototype.Ha,It.prototype.getLastErrorCode=It.prototype.ya,It.prototype.getStatus=It.prototype.ca,It.prototype.getResponseJson=It.prototype.La,It.prototype.getResponseText=It.prototype.la,It.prototype.send=It.prototype.ea,It.prototype.setWithCredentials=It.prototype.Fa,Hd=It}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ae{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ae.UNAUTHENTICATED=new ae(null),ae.GOOGLE_CREDENTIALS=new ae("google-credentials-uid"),ae.FIRST_PARTY=new ae("first-party-uid"),ae.MOCK_USER=new ae("mock-user");/**
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
 */let is="12.13.0";function Lg(n){is=n}/**
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
 */const Ki=new yl("@firebase/firestore");function Nr(){return Ki.logLevel}function G(n,...t){if(Ki.logLevel<=gt.DEBUG){const e=t.map(Tl);Ki.debug(`Firestore (${is}): ${n}`,...e)}}function Fn(n,...t){if(Ki.logLevel<=gt.ERROR){const e=t.map(Tl);Ki.error(`Firestore (${is}): ${n}`,...e)}}function Qi(n,...t){if(Ki.logLevel<=gt.WARN){const e=t.map(Tl);Ki.warn(`Firestore (${is}): ${n}`,...e)}}function Tl(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function nt(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Qd(n,r,e)}function Qd(n,t,e){let r=`FIRESTORE (${is}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Fn(r),new Error(r)}function At(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Qd(t,s,r)}function ct(n,t){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends zn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Jd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ae.UNAUTHENTICATED))}shutdown(){}}class Dg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ng{constructor(t){this.t=t,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){At(this.o===void 0,42304);let r=this.i;const s=p=>this.i!==r?(r=this.i,e(p)):Promise.resolve();let a=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Dn,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const p=a;t.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},d=p=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Dn)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(At(typeof r.accessToken=="string",31837,{l:r}),new Jd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return At(t===null||typeof t=="string",2055,{h:t}),new ae(t)}}class Mg{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Og{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Mg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){At(this.o===void 0,3512);const r=a=>{a.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,G("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const s=a=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(At(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Xu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Fg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class El{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Fg(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<e&&(r+=t.charAt(s[a]%62))}return r}}function mt(n,t){return n<t?-1:n>t?1:0}function Zc(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),a=t.charAt(r);if(s!==a)return xc(s)===xc(a)?mt(s,a):xc(s)?1:-1}return mt(n.length,t.length)}const Ug=55296,Bg=57343;function xc(n){const t=n.charCodeAt(0);return t>=Ug&&t<=Bg}function Kr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const th="__name__";class rn{constructor(t,e,r){e===void 0?e=0:e>t.length&&nt(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&nt(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const a=rn.compareSegments(t.get(s),e.get(s));if(a!==0)return a}return mt(t.length,e.length)}static compareSegments(t,e){const r=rn.isNumericId(t),s=rn.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(t).compare(rn.extractNumericId(e)):Zc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ai.fromString(t.substring(4,t.length-2))}}class kt extends rn{construct(t,e,r){return new kt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new j(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new kt(e)}static emptyPath(){return new kt([])}}const zg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends rn{construct(t,e,r){return new ie(t,e,r)}static isValidIdentifier(t){return zg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===th}static keyField(){return new ie([th])}static fromServerFormat(t){const e=[];let r="",s=0;const a=()=>{if(r.length===0)throw new j(B.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const d=t[s];if(d==="\\"){if(s+1===t.length)throw new j(B.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new j(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new j(B.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(e)}static emptyPath(){return new ie([])}}/**
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
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(kt.fromString(t))}static fromName(t){return new Y(kt.fromString(t).popFirst(5))}static empty(){return new Y(kt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&kt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return kt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new kt(t.slice()))}}/**
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
 */function Yd(n,t,e){if(!e)throw new j(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function qg(n,t,e,r){if(t===!0&&r===!0)throw new j(B.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function eh(n){if(!Y.isDocumentKey(n))throw new j(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nh(n){if(Y.isDocumentKey(n))throw new j(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ga(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":nt(12329,{type:typeof n})}function Se(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new j(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ga(n);throw new j(B.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function $t(n,t){const e={typeString:n};return t&&(e.value=t),e}function po(n,t){if(!Xd(n))throw new j(B.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new j(B.INVALID_ARGUMENT,e);return!0}/**
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
 */const ih=-62135596800,rh=1e6;class xt{static now(){return xt.fromMillis(Date.now())}static fromDate(t){return xt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*rh);return new xt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new j(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new j(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ih)throw new j(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new j(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rh}_compareTo(t){return this.seconds===t.seconds?mt(this.nanoseconds,t.nanoseconds):mt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(po(t,xt._jsonSchema))return new xt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ih;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xt._jsonSchemaVersion="firestore/timestamp/1.0",xt._jsonSchema={type:$t("string",xt._jsonSchemaVersion),seconds:$t("number"),nanoseconds:$t("number")};/**
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
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new xt(0,0))}static max(){return new ot(new xt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const eo=-1;function $g(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new xt(e+1,0):new xt(e,r));return new ui(s,Y.empty(),t)}function jg(n){return new ui(n.readTime,n.key,eo)}class ui{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ui(ot.min(),Y.empty(),eo)}static max(){return new ui(ot.max(),Y.empty(),eo)}}function Hg(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=Y.comparator(n.documentKey,t.documentKey),e!==0?e:mt(n.largestBatchId,t.largestBatchId))}/**
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
 */const Wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rs(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Wg)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&nt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new z((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof z?e:z.resolve(e)}catch(e){return z.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):z.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):z.reject(e)}static resolve(t){return new z((e,r)=>{e(t)})}static reject(t){return new z((e,r)=>{r(t)})}static waitFor(t){return new z((e,r)=>{let s=0,a=0,u=!1;t.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&e()},p=>r(p))}),u=!0,a===s&&e()})}static or(t){let e=z.resolve(!1);for(const r of t)e=e.next(s=>s?z.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,a)=>{r.push(e.call(this,s,a))}),this.waitFor(r)}static mapArray(t,e){return new z((r,s)=>{const a=t.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const g=p;e(t[g]).next(y=>{u[g]=y,++d,d===a&&r(u)},y=>s(y))}})}static doWhile(t,e){return new z((r,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):r()};a()})}}function Zg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ss(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Za{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Za.ce=-1;/**
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
 */const Il=-1;function Ka(n){return n==null}function Ca(n){return n===0&&1/n==-1/0}function Kg(n){return typeof n=="number"&&Number.isInteger(n)&&!Ca(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const tf="";function Qg(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=sh(t)),t=Jg(n.get(e),t);return sh(t)}function Jg(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const a=n.charAt(s);switch(a){case"\0":e+="";break;case tf:e+="";break;default:e+=a}}return e}function sh(n){return n+tf+""}/**
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
 */function oh(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function yi(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ef(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Dt{constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}insert(t,e){return new Dt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new Dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ca(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ca(this.root,t,this.comparator,!1)}getReverseIterator(){return new ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ca(this.root,t,this.comparator,!0)}}class ca{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ne{constructor(t,e,r,s,a){this.key=t,this.value=e,this.color=r??ne.RED,this.left=s??ne.EMPTY,this.right=a??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,a){return new ne(t??this.key,e??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const a=r(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,r),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw nt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw nt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw nt(27949);return t+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw nt(57766)}get value(){throw nt(16141)}get color(){throw nt(16727)}get left(){throw nt(29726)}get right(){throw nt(36894)}copy(t,e,r,s,a){return this}insert(t,e,r){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ht{constructor(t){this.comparator=t,this.data=new Dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ah(this.data.getIterator())}getIteratorFrom(t){return new ah(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ht(this.comparator);return e.data=t,e}}class ah{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pe{constructor(t){this.fields=t,t.sort(ie.comparator)}static empty(){return new Pe([])}unionWith(t){let e=new Ht(ie.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Kr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class nf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class re{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new nf("Invalid base64 string: "+a):a}}(t);return new re(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new re(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return mt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}re.EMPTY_BYTE_STRING=new re("");const Yg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(n){if(At(!!n,39018),typeof n=="string"){let t=0;const e=Yg.exec(n);if(At(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ft(n.seconds),nanos:Ft(n.nanos)}}function Ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function di(n){return typeof n=="string"?re.fromBase64String(n):re.fromUint8Array(n)}/**
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
 */const rf="server_timestamp",sf="__type__",of="__previous_value__",af="__local_write_time__";function bl(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[sf])==null?void 0:r.stringValue)===rf}function Qa(n){const t=n.mapValue.fields[of];return bl(t)?Qa(t):t}function no(n){const t=hi(n.mapValue.fields[af].timestampValue);return new xt(t.seconds,t.nanos)}/**
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
 */class Xg{constructor(t,e,r,s,a,u,d,p,g,y,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y,this.apiKey=w}}const Ra="(default)";class io{constructor(t,e){this.projectId=t,this.database=e||Ra}static empty(){return new io("","")}get isDefaultDatabase(){return this.database===Ra}isEqual(t){return t instanceof io&&t.projectId===this.projectId&&t.database===this.database}}function ty(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(n.options.projectId,t)}/**
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
 */const cf="__type__",ey="__max__",la={mapValue:{}},lf="__vector__",ka="value";function fi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bl(n)?4:iy(n)?9007199254740991:ny(n)?10:11:nt(28295,{value:n})}function hn(n,t){if(n===t)return!0;const e=fi(n);if(e!==fi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return no(n).isEqual(no(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=hi(s.timestampValue),d=hi(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,a){return di(s.bytesValue).isEqual(di(a.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,a){return Ft(s.geoPointValue.latitude)===Ft(a.geoPointValue.latitude)&&Ft(s.geoPointValue.longitude)===Ft(a.geoPointValue.longitude)}(n,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Ft(s.integerValue)===Ft(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Ft(s.doubleValue),d=Ft(a.doubleValue);return u===d?Ca(u)===Ca(d):isNaN(u)&&isNaN(d)}return!1}(n,t);case 9:return Kr(n.arrayValue.values||[],t.arrayValue.values||[],hn);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(oh(u)!==oh(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!hn(u[p],d[p])))return!1;return!0}(n,t);default:return nt(52216,{left:n})}}function ro(n,t){return(n.values||[]).find(e=>hn(e,t))!==void 0}function Qr(n,t){if(n===t)return 0;const e=fi(n),r=fi(t);if(e!==r)return mt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return mt(n.booleanValue,t.booleanValue);case 2:return function(a,u){const d=Ft(a.integerValue||a.doubleValue),p=Ft(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,t);case 3:return ch(n.timestampValue,t.timestampValue);case 4:return ch(no(n),no(t));case 5:return Zc(n.stringValue,t.stringValue);case 6:return function(a,u){const d=di(a),p=di(u);return d.compareTo(p)}(n.bytesValue,t.bytesValue);case 7:return function(a,u){const d=a.split("/"),p=u.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=mt(d[g],p[g]);if(y!==0)return y}return mt(d.length,p.length)}(n.referenceValue,t.referenceValue);case 8:return function(a,u){const d=mt(Ft(a.latitude),Ft(u.latitude));return d!==0?d:mt(Ft(a.longitude),Ft(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return lh(n.arrayValue,t.arrayValue);case 10:return function(a,u){var E,S,M,V;const d=a.fields||{},p=u.fields||{},g=(E=d[ka])==null?void 0:E.arrayValue,y=(S=p[ka])==null?void 0:S.arrayValue,w=mt(((M=g==null?void 0:g.values)==null?void 0:M.length)||0,((V=y==null?void 0:y.values)==null?void 0:V.length)||0);return w!==0?w:lh(g,y)}(n.mapValue,t.mapValue);case 11:return function(a,u){if(a===la.mapValue&&u===la.mapValue)return 0;if(a===la.mapValue)return 1;if(u===la.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),g=u.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let w=0;w<p.length&&w<y.length;++w){const E=Zc(p[w],y[w]);if(E!==0)return E;const S=Qr(d[p[w]],g[y[w]]);if(S!==0)return S}return mt(p.length,y.length)}(n.mapValue,t.mapValue);default:throw nt(23264,{he:e})}}function ch(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return mt(n,t);const e=hi(n),r=hi(t),s=mt(e.seconds,r.seconds);return s!==0?s:mt(e.nanos,r.nanos)}function lh(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const a=Qr(e[s],r[s]);if(a)return a}return mt(e.length,r.length)}function Jr(n){return Kc(n)}function Kc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=hi(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return di(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return Y.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const a of e.values||[])s?s=!1:r+=",",r+=Kc(a);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Kc(e.fields[u])}`;return s+"}"}(n.mapValue):nt(61005,{value:n})}function _a(n){switch(fi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Qa(n);return t?16+_a(t):16;case 5:return 2*n.stringValue.length;case 6:return di(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+_a(a),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return yi(r.fields,(a,u)=>{s+=a.length+_a(u)}),s}(n.mapValue);default:throw nt(13486,{value:n})}}function uh(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Qc(n){return!!n&&"integerValue"in n}function Al(n){return!!n&&"arrayValue"in n}function hh(n){return!!n&&"nullValue"in n}function dh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ga(n){return!!n&&"mapValue"in n}function ny(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[cf])==null?void 0:r.stringValue)===lf}function Zs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return yi(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Zs(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Zs(n.arrayValue.values[e]);return t}return{...n}}function iy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ey}/**
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
 */class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ga(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Zs(e)}setAll(t){let e=ie.emptyPath(),r={},s=[];t.forEach((u,d)=>{if(!e.isImmediateParentOf(d)){const p=this.getFieldsMap(e);this.applyChanges(p,r,s),r={},s=[],e=d.popLast()}u?r[d.lastSegment()]=Zs(u):s.push(d.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,s)}delete(t){const e=this.field(t.popLast());ga(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ga(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){yi(e,(s,a)=>t[s]=a);for(const s of r)delete t[s]}clone(){return new ve(Zs(this.value))}}function uf(n){const t=[];return yi(n.fields,(e,r)=>{const s=new ie([e]);if(ga(r)){const a=uf(r.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new Pe(t)}/**
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
 */class ce{constructor(t,e,r,s,a,u,d){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(t){return new ce(t,0,ot.min(),ot.min(),ot.min(),ve.empty(),0)}static newFoundDocument(t,e,r,s){return new ce(t,1,e,ot.min(),r,s,0)}static newNoDocument(t,e){return new ce(t,2,e,ot.min(),ot.min(),ve.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,ot.min(),ot.min(),ve.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class La{constructor(t,e){this.position=t,this.inclusive=e}}function fh(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const a=t[s],u=n.position[s];if(a.field.isKeyField()?r=Y.comparator(Y.fromName(u.referenceValue),e.key):r=Qr(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function ph(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!hn(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class so{constructor(t,e="asc"){this.field=t,this.dir=e}}function ry(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class hf{}class qt extends hf{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new oy(t,e,r):e==="array-contains"?new ly(t,r):e==="in"?new uy(t,r):e==="not-in"?new hy(t,r):e==="array-contains-any"?new dy(t,r):new qt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ay(t,r):new cy(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Qr(e,this.value)):e!==null&&fi(this.value)===fi(e)&&this.matchesComparison(Qr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return nt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends hf{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ze(t,e)}matches(t){return df(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function df(n){return n.op==="and"}function ff(n){return sy(n)&&df(n)}function sy(n){for(const t of n.filters)if(t instanceof Ze)return!1;return!0}function Jc(n){if(n instanceof qt)return n.field.canonicalString()+n.op.toString()+Jr(n.value);if(ff(n))return n.filters.map(t=>Jc(t)).join(",");{const t=n.filters.map(e=>Jc(e)).join(",");return`${n.op}(${t})`}}function pf(n,t){return n instanceof qt?function(r,s){return s instanceof qt&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(n,t):n instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,d)=>a&&pf(u,s.filters[d]),!0):!1}(n,t):void nt(19439)}function mf(n){return n instanceof qt?function(e){return`${e.field.canonicalString()} ${e.op} ${Jr(e.value)}`}(n):n instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(mf).join(" ,")+"}"}(n):"Filter"}class oy extends qt{constructor(t,e,r){super(t,e,r),this.key=Y.fromName(r.referenceValue)}matches(t){const e=Y.comparator(t.key,this.key);return this.matchesComparison(e)}}class ay extends qt{constructor(t,e){super(t,"in",e),this.keys=_f("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class cy extends qt{constructor(t,e){super(t,"not-in",e),this.keys=_f("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function _f(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>Y.fromName(r.referenceValue))}class ly extends qt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Al(e)&&ro(e.arrayValue,this.value)}}class uy extends qt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ro(this.value.arrayValue,e)}}class hy extends qt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ro(this.value.arrayValue,e)}}class dy extends qt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Al(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}}/**
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
 */class fy{constructor(t,e=null,r=[],s=[],a=null,u=null,d=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Te=null}}function mh(n,t=null,e=[],r=[],s=null,a=null,u=null){return new fy(n,t,e,r,s,a,u)}function Pl(n){const t=ct(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Jc(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Ka(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Jr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Jr(r)).join(",")),t.Te=e}return t.Te}function Sl(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ry(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!pf(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ph(n.startAt,t.startAt)&&ph(n.endAt,t.endAt)}function Yc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class os{constructor(t,e=null,r=[],s=[],a=null,u="F",d=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function py(n,t,e,r,s,a,u,d){return new os(n,t,e,r,s,a,u,d)}function Ja(n){return new os(n)}function _h(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function my(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function gf(n){return n.collectionGroup!==null}function Ks(n){const t=ct(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ht(ie.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new so(a,r))}),e.has(ie.keyField().canonicalString())||t.Ie.push(new so(ie.keyField(),r))}return t.Ie}function on(n){const t=ct(n);return t.Ee||(t.Ee=_y(t,Ks(n))),t.Ee}function _y(n,t){if(n.limitType==="F")return mh(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new so(s.field,a)});const e=n.endAt?new La(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new La(n.startAt.position,n.startAt.inclusive):null;return mh(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Xc(n,t){const e=n.filters.concat([t]);return new os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function gy(n,t){const e=n.explicitOrderBy.concat([t]);return new os(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function tl(n,t,e){return new os(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Ya(n,t){return Sl(on(n),on(t))&&n.limitType===t.limitType}function yf(n){return`${Pl(on(n))}|lt:${n.limitType}`}function Mr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>mf(s)).join(", ")}]`),Ka(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Jr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Jr(s)).join(",")),`Target(${r})`}(on(n))}; limitType=${n.limitType})`}function Xa(n,t){return t.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Y.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(n,t)&&function(r,s){for(const a of Ks(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,d,p){const g=fh(u,d,p);return u.inclusive?g<=0:g<0}(r.startAt,Ks(r),s)||r.endAt&&!function(u,d,p){const g=fh(u,d,p);return u.inclusive?g>=0:g>0}(r.endAt,Ks(r),s))}(n,t)}function yy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vf(n){return(t,e)=>{let r=!1;for(const s of Ks(n)){const a=vy(s,t,e);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function vy(n,t,e){const r=n.field.isKeyField()?Y.comparator(t.key,e.key):function(a,u,d){const p=u.data.field(a),g=d.data.field(a);return p!==null&&g!==null?Qr(p,g):nt(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return nt(19790,{direction:n.dir})}}/**
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
 */class nr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){yi(this.inner,(e,r)=>{for(const[s,a]of r)t(s,a)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
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
 */const wy=new Dt(Y.comparator);function Un(){return wy}const wf=new Dt(Y.comparator);function Hs(...n){let t=wf;for(const e of n)t=t.insert(e.key,e);return t}function Tf(n){let t=wf;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function $i(){return Qs()}function Ef(){return Qs()}function Qs(){return new nr(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ty=new Dt(Y.comparator),Ey=new Ht(Y.comparator);function _t(...n){let t=Ey;for(const e of n)t=t.add(e);return t}const Iy=new Ht(mt);function by(){return Iy}/**
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
 */function Cl(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ca(t)?"-0":t}}function If(n){return{integerValue:""+n}}function Ay(n,t){return Kg(t)?If(t):Cl(n,t)}/**
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
 */class tc{constructor(){this._=void 0}}function Py(n,t,e){return n instanceof oo?function(s,a){const u={fields:{[sf]:{stringValue:rf},[af]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&bl(a)&&(a=Qa(a)),a&&(u.fields[of]=a),{mapValue:u}}(e,t):n instanceof Yr?Af(n,t):n instanceof Xr?Pf(n,t):function(s,a){const u=bf(s,a),d=gh(u)+gh(s.Ae);return Qc(u)&&Qc(s.Ae)?If(d):Cl(s.serializer,d)}(n,t)}function Sy(n,t,e){return n instanceof Yr?Af(n,t):n instanceof Xr?Pf(n,t):e}function bf(n,t){return n instanceof xa?function(r){return Qc(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class oo extends tc{}class Yr extends tc{constructor(t){super(),this.elements=t}}function Af(n,t){const e=Sf(t);for(const r of n.elements)e.some(s=>hn(s,r))||e.push(r);return{arrayValue:{values:e}}}class Xr extends tc{constructor(t){super(),this.elements=t}}function Pf(n,t){let e=Sf(t);for(const r of n.elements)e=e.filter(s=>!hn(s,r));return{arrayValue:{values:e}}}class xa extends tc{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function gh(n){return Ft(n.integerValue||n.doubleValue)}function Sf(n){return Al(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Rl{constructor(t,e){this.field=t,this.transform=e}}function Cy(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Xr&&s instanceof Xr?Kr(r.elements,s.elements,hn):r instanceof xa&&s instanceof xa?hn(r.Ae,s.Ae):r instanceof oo&&s instanceof oo}(n.transform,t.transform)}class Ry{constructor(t,e){this.version=t,this.transformResults=e}}class He{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new He}static exists(t){return new He(void 0,t)}static updateTime(t){return new He(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ya(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ec{}function Cf(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new kl(n.key,He.none()):new mo(n.key,n.data,He.none());{const e=n.data,r=ve.empty();let s=new Ht(ie.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new vi(n.key,r,new Pe(s.toArray()),He.none())}}function ky(n,t,e){n instanceof mo?function(s,a,u){const d=s.value.clone(),p=vh(s.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,t,e):n instanceof vi?function(s,a,u){if(!ya(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=vh(s.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(Rf(s)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Js(n,t,e,r){return n instanceof mo?function(a,u,d,p){if(!ya(a.precondition,u))return d;const g=a.value.clone(),y=wh(a.fieldTransforms,p,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,r):n instanceof vi?function(a,u,d,p){if(!ya(a.precondition,u))return d;const g=wh(a.fieldTransforms,p,u),y=u.data;return y.setAll(Rf(a)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(a,u,d){return ya(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,t,e)}function Ly(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),a=bf(r.transform,s||null);a!=null&&(e===null&&(e=ve.empty()),e.set(r.field,a))}return e||null}function yh(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Kr(r,s,(a,u)=>Cy(a,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class mo extends ec{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class vi extends ec{constructor(t,e,r,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Rf(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function vh(n,t,e){const r=new Map;At(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const a=n[s],u=a.transform,d=t.data.field(a.field);r.set(a.field,Sy(u,d,e[s]))}return r}function wh(n,t,e){const r=new Map;for(const s of n){const a=s.transform,u=e.data.field(s.field);r.set(s.field,Py(a,u,t))}return r}class kl extends ec{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xy extends ec{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Dy{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&ky(a,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Js(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Js(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ef();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=e.has(s.key)?null:d;const p=Cf(u,d);p!==null&&r.set(s.key,p),u.isValidDocument()||u.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),_t())}isEqual(t){return this.batchId===t.batchId&&Kr(this.mutations,t.mutations,(e,r)=>yh(e,r))&&Kr(this.baseMutations,t.baseMutations,(e,r)=>yh(e,r))}}class Ll{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){At(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Ty}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ll(t,e,r,s)}}/**
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
 */class Ny{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class My{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var zt,vt;function Oy(n){switch(n){case B.OK:return nt(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return nt(15467,{code:n})}}function kf(n){if(n===void 0)return Fn("GRPC error has no .code"),B.UNKNOWN;switch(n){case zt.OK:return B.OK;case zt.CANCELLED:return B.CANCELLED;case zt.UNKNOWN:return B.UNKNOWN;case zt.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case zt.INTERNAL:return B.INTERNAL;case zt.UNAVAILABLE:return B.UNAVAILABLE;case zt.UNAUTHENTICATED:return B.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case zt.NOT_FOUND:return B.NOT_FOUND;case zt.ALREADY_EXISTS:return B.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return B.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case zt.ABORTED:return B.ABORTED;case zt.OUT_OF_RANGE:return B.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return B.UNIMPLEMENTED;case zt.DATA_LOSS:return B.DATA_LOSS;default:return nt(39323,{code:n})}}(vt=zt||(zt={}))[vt.OK=0]="OK",vt[vt.CANCELLED=1]="CANCELLED",vt[vt.UNKNOWN=2]="UNKNOWN",vt[vt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vt[vt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vt[vt.NOT_FOUND=5]="NOT_FOUND",vt[vt.ALREADY_EXISTS=6]="ALREADY_EXISTS",vt[vt.PERMISSION_DENIED=7]="PERMISSION_DENIED",vt[vt.UNAUTHENTICATED=16]="UNAUTHENTICATED",vt[vt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vt[vt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vt[vt.ABORTED=10]="ABORTED",vt[vt.OUT_OF_RANGE=11]="OUT_OF_RANGE",vt[vt.UNIMPLEMENTED=12]="UNIMPLEMENTED",vt[vt.INTERNAL=13]="INTERNAL",vt[vt.UNAVAILABLE=14]="UNAVAILABLE",vt[vt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Vy(){return new TextEncoder}/**
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
 */const Fy=new ai([4294967295,4294967295],0);function Th(n){const t=Vy().encode(n),e=new jd;return e.update(t),new Uint8Array(e.digest())}function Eh(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new ai([e,r],0),new ai([s,a],0)]}class xl{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ws(`Invalid padding: ${e}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ai.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ai.fromNumber(r)));return s.compare(Fy)===1&&(s=new ai([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Th(t),[r,s]=Eh(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);if(!this.we(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new xl(a,s,e);return r.forEach(d=>u.insert(d)),u}insert(t){if(this.ge===0)return;const e=Th(t),[r,s]=Eh(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _o{constructor(t,e,r,s,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,go.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new _o(ot.min(),s,new Dt(mt),Un(),_t())}}class go{constructor(t,e,r,s,a){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new go(r,e,_t(),_t(),_t())}}/**
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
 */class va{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Lf{constructor(t,e){this.targetId=t,this.Ce=e}}class xf{constructor(t,e,r=re.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ih{constructor(){this.ve=0,this.Fe=bh(),this.Me=re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=_t(),e=_t(),r=_t();return this.Fe.forEach((s,a)=>{switch(a){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:nt(38017,{changeType:a})}}),new go(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=bh()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,At(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Uy{constructor(t){this.Ge=t,this.ze=new Map,this.je=Un(),this.Je=ua(),this.He=ua(),this.Ze=new Dt(mt)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:nt(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const a=s.target;if(Yc(a))if(r===0){const u=new Y(a.path);this.et(e,u,ce.newNoDocument(u,ot.min()))}else At(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const d=this.ut(t),p=d?this.ct(d,t,u):1;if(p!==0){this.it(e);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=e;let u,d;try{u=di(r).toUint8Array()}catch(p){if(p instanceof nf)return Qi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new xl(u,s,a)}catch(p){return Qi(p instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(a=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(d)||(this.et(e,a,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((a,u)=>{const d=this.ot(u);if(d){if(a.current&&Yc(d.target)){const p=new Y(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,ce.newNoDocument(p,t))}a.Be&&(e.set(u,a.ke()),a.Ke())}});let r=_t();this.He.forEach((a,u)=>{let d=!0;u.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.je.forEach((a,u)=>u.setReadTime(t));const s=new _o(t,e,this.Ze,this.je,r);return this.je=Un(),this.Je=ua(),this.He=ua(),this.Ze=new Dt(mt),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Ih,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new Ht(mt),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new Ht(mt),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||G("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ih),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ua(){return new Dt(Y.comparator)}function bh(){return new Dt(Y.comparator)}const By={asc:"ASCENDING",desc:"DESCENDING"},zy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qy={and:"AND",or:"OR"};class $y{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function el(n,t){return n.useProto3Json||Ka(t)?t:{value:t}}function Da(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Df(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function jy(n,t){return Da(n,t.toTimestamp())}function an(n){return At(!!n,49232),ot.fromTimestamp(function(e){const r=hi(e);return new xt(r.seconds,r.nanos)}(n))}function Dl(n,t){return nl(n,t).canonicalString()}function nl(n,t){const e=function(s){return new kt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Nf(n){const t=kt.fromString(n);return At(Uf(t),10190,{key:t.toString()}),t}function il(n,t){return Dl(n.databaseId,t.path)}function Dc(n,t){const e=Nf(t);if(e.get(1)!==n.databaseId.projectId)throw new j(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new j(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new Y(Of(e))}function Mf(n,t){return Dl(n.databaseId,t)}function Hy(n){const t=Nf(n);return t.length===4?kt.emptyPath():Of(t)}function rl(n){return new kt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Of(n){return At(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ah(n,t,e){return{name:il(n,t),fields:e.value.mapValue.fields}}function Wy(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:nt(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],a=function(g,y){return g.useProto3Json?(At(y===void 0||typeof y=="string",58123),re.fromBase64String(y||"")):(At(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),re.fromUint8Array(y||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,d=u&&function(g){const y=g.code===void 0?B.UNKNOWN:kf(g.code);return new j(y,g.message||"")}(u);e=new xf(r,s,a,d||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dc(n,r.document.name),a=an(r.document.updateTime),u=r.document.createTime?an(r.document.createTime):ot.min(),d=new ve({mapValue:{fields:r.document.fields}}),p=ce.newFoundDocument(s,a,u,d),g=r.targetIds||[],y=r.removedTargetIds||[];e=new va(g,y,p.key,p)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Dc(n,r.document),a=r.readTime?an(r.readTime):ot.min(),u=ce.newNoDocument(s,a),d=r.removedTargetIds||[];e=new va([],d,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Dc(n,r.document),a=r.removedTargetIds||[];e=new va([],a,s,null)}else{if(!("filter"in t))return nt(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new My(s,a),d=r.targetId;e=new Lf(d,u)}}return e}function Gy(n,t){let e;if(t instanceof mo)e={update:Ah(n,t.key,t.value)};else if(t instanceof kl)e={delete:il(n,t.key)};else if(t instanceof vi)e={update:Ah(n,t.key,t.data),updateMask:nv(t.fieldMask)};else{if(!(t instanceof xy))return nt(16599,{dt:t.type});e={verify:il(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof oo)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Yr)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Xr)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof xa)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw nt(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:jy(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:nt(27497)}(n,t.precondition)),e}function Zy(n,t){return n&&n.length>0?(At(t!==void 0,14353),n.map(e=>function(s,a){let u=s.updateTime?an(s.updateTime):an(a);return u.isEqual(ot.min())&&(u=an(a)),new Ry(u,s.transformResults||[])}(e,t))):[]}function Ky(n,t){return{documents:[Mf(n,t.path)]}}function Qy(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Mf(n,s);const a=function(g){if(g.length!==0)return Ff(Ze.create(g,"and"))}(t.filters);a&&(e.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(y=>function(E){return{field:Or(E.field),direction:Xy(E.dir)}}(y))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const d=el(n,t.limit);return d!==null&&(e.structuredQuery.limit=d),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ft:e,parent:s}}function Jy(n){let t=Hy(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){At(r===1,65062);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let a=[];e.where&&(a=function(w){const E=Vf(w);return E instanceof Ze&&ff(E)?E.getFilters():[E]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(E=>function(M){return new so(Vr(M.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(E))}(e.orderBy));let d=null;e.limit&&(d=function(w){let E;return E=typeof w=="object"?w.value:w,Ka(E)?null:E}(e.limit));let p=null;e.startAt&&(p=function(w){const E=!!w.before,S=w.values||[];return new La(S,E)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const E=!w.before,S=w.values||[];return new La(S,E)}(e.endAt)),py(t,s,u,a,d,"F",p,g)}function Yy(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return nt(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vf(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Vr(e.unaryFilter.field);return qt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(e.unaryFilter.field);return qt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Vr(e.unaryFilter.field);return qt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Vr(e.unaryFilter.field);return qt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return nt(61313);default:return nt(60726)}}(n):n.fieldFilter!==void 0?function(e){return qt.create(Vr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return nt(58110);default:return nt(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ze.create(e.compositeFilter.filters.map(r=>Vf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return nt(1026)}}(e.compositeFilter.op))}(n):nt(30097,{filter:n})}function Xy(n){return By[n]}function tv(n){return zy[n]}function ev(n){return qy[n]}function Or(n){return{fieldPath:n.canonicalString()}}function Vr(n){return ie.fromServerFormat(n.fieldPath)}function Ff(n){return n instanceof qt?function(e){if(e.op==="=="){if(dh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NAN"}};if(hh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NAN"}};if(hh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(e.field),op:tv(e.op),value:e.value}}}(n):n instanceof Ze?function(e){const r=e.getFilters().map(s=>Ff(s));return r.length===1?r[0]:{compositeFilter:{op:ev(e.op),filters:r}}}(n):nt(54877,{filter:n})}function nv(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Uf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Bf(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class kn{constructor(t,e,r,s,a=ot.min(),u=ot.min(),d=re.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(t){return new kn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class iv{constructor(t){this.yt=t}}function rv(n){const t=Jy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?tl(t,t.limit,"L"):t}/**
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
 */class sv{constructor(){this.bn=new ov}addToCollectionParentIndex(t,e){return this.bn.add(e),z.resolve()}getCollectionParents(t,e){return z.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return z.resolve()}deleteFieldIndex(t,e){return z.resolve()}deleteAllFieldIndexes(t){return z.resolve()}createTargetIndexes(t,e){return z.resolve()}getDocumentsMatchingTarget(t,e){return z.resolve(null)}getIndexType(t,e){return z.resolve(0)}getFieldIndexes(t,e){return z.resolve([])}getNextCollectionGroupToUpdate(t){return z.resolve(null)}getMinOffset(t,e){return z.resolve(ui.min())}getMinOffsetFromCollectionGroup(t,e){return z.resolve(ui.min())}updateCollectionGroup(t,e,r){return z.resolve()}updateIndexEntries(t,e){return z.resolve()}}class ov{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ht(kt.comparator),a=!s.has(r);return this.index[e]=s.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ht(kt.comparator)).toArray()}}/**
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
 */const Ph={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zf=41943040;class ye{static withCacheSize(t){return new ye(t,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(zf,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);/**
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
 */class pi{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new pi(0)}static ar(){return new pi(-1)}}/**
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
 */const Sh="LruGarbageCollector",av=1048576;function Ch([n,t],[e,r]){const s=mt(n,e);return s===0?mt(t,r):s}class cv{constructor(t){this.Pr=t,this.buffer=new Ht(Ch),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ch(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class lv{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){G(Sh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ss(e)?G(Sh,"Ignoring IndexedDB error during garbage collection: ",e):await rs(e)}await this.Ar(3e5)})}}class uv{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return z.resolve(Za.ce);const r=new cv(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Ph)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ph):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,a,u,d,p,g;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,d=Date.now(),this.removeTargets(t,r,e))).next(w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(g=Date.now(),Nr()<=gt.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function hv(n,t){return new uv(n,t)}/**
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
 */class dv{constructor(){this.changes=new nr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?z.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class fv{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class pv{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Js(r.mutation,s,Pe.empty(),xt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,_t()).next(()=>r))}getLocalViewOfDocuments(t,e,r=_t()){const s=$i();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(a=>{let u=Hs();return a.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=$i();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,_t()))}populateOverlays(t,e,r){const s=[];return r.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,d)=>{e.set(u,d)})})}computeViews(t,e,r,s){let a=Un();const u=Qs(),d=function(){return Qs()}();return e.forEach((p,g)=>{const y=r.get(g.key);s.has(g.key)&&(y===void 0||y.mutation instanceof vi)?a=a.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),Js(y.mutation,g,y.mutation.getFieldMask(),xt.now())):u.set(g.key,Pe.empty())}),this.recalculateAndSaveOverlays(t,a).next(p=>(p.forEach((g,y)=>u.set(g,y)),e.forEach((g,y)=>d.set(g,new fv(y,u.get(g)??null))),d))}recalculateAndSaveOverlays(t,e){const r=Qs();let s=new Dt((u,d)=>u-d),a=_t();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const d of u)d.keys().forEach(p=>{const g=e.get(p);if(g===null)return;let y=r.get(p)||Pe.empty();y=d.applyToLocalView(g,y),r.set(p,y);const w=(s.get(d.batchId)||_t()).add(p);s=s.insert(d.batchId,w)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,w=Ef();y.forEach(E=>{if(!a.has(E)){const S=Cf(e.get(E),r.get(E));S!==null&&w.set(E,S),a=a.add(E)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return z.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return my(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-a.size):z.resolve($i());let d=eo,p=a;return u.next(g=>z.forEach(g,(y,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(y)?z.resolve():this.remoteDocumentCache.getEntry(t,y).next(E=>{p=p.insert(y,E)}))).next(()=>this.populateOverlays(t,g,a)).next(()=>this.computeViews(t,p,g,_t())).next(y=>({batchId:d,changes:Tf(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Y(e)).next(r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const a=e.collectionGroup;let u=Hs();return this.indexManager.getCollectionParents(t,a).next(d=>z.forEach(d,p=>{const g=function(w,E){return new os(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,p.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,r,s).next(y=>{y.forEach((w,E)=>{u=u.insert(w,E)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,s))).next(u=>{a.forEach((p,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,ce.newInvalidDocument(y)))});let d=Hs();return u.forEach((p,g)=>{const y=a.get(p);y!==void 0&&Js(y.mutation,g,Pe.empty(),xt.now()),Xa(e,g)&&(d=d.insert(p,g))}),d})}}/**
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
 */class mv{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return z.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(e)),z.resolve()}getNamedQuery(t,e){return z.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:rv(s.bundledQuery),readTime:an(s.readTime)}}(e)),z.resolve()}}/**
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
 */class _v{constructor(){this.overlays=new Dt(Y.comparator),this.Lr=new Map}getOverlay(t,e){return z.resolve(this.overlays.get(e))}getOverlays(t,e){const r=$i();return z.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,a)=>{this.St(t,e,a)}),z.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),z.resolve()}getOverlaysForCollection(t,e,r){const s=$i(),a=e.length+1,u=new Y(e.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&p.largestBatchId>r&&s.set(p.getKey(),p)}return z.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let a=new Dt((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let y=a.get(g.largestBatchId);y===null&&(y=$i(),a=a.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=$i(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=s)););return z.resolve(d)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Ny(e,r));let a=this.Lr.get(e);a===void 0&&(a=_t(),this.Lr.set(e,a)),this.Lr.set(e,a.add(r.key))}}/**
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
 */class gv{constructor(){this.sessionToken=re.EMPTY_BYTE_STRING}getSessionToken(t){return z.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,z.resolve()}}/**
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
 */class Nl{constructor(){this.kr=new Ht(te.Kr),this.qr=new Ht(te.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new te(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new te(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new Y(new kt([])),r=new te(e,t),s=new te(e,t+1),a=[];return this.qr.forEachInRange([r,s],u=>{this.Wr(u),a.push(u.key)}),a}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new Y(new kt([])),r=new te(e,t),s=new te(e,t+1);let a=_t();return this.qr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new te(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class te{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return Y.comparator(t.key,e.key)||mt(t.Jr,e.Jr)}static Ur(t,e){return mt(t.Jr,e.Jr)||Y.comparator(t.key,e.key)}}/**
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
 */class yv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new Ht(te.Kr)}checkEmpty(t){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Dy(a,e,r,s);this.mutationQueue.push(u);for(const d of s)this.Hr=this.Hr.add(new te(d.key,a)),this.indexManager.addToCollectionParentIndex(t,d.key.path.popLast());return z.resolve(u)}lookupMutationBatch(t,e){return z.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),a=s<0?0:s;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Il:this.Yn-1)}getAllMutationBatches(t){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new te(e,0),s=new te(e,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,s],u=>{const d=this.Zr(u.Jr);a.push(d)}),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ht(mt);return e.forEach(s=>{const a=new te(s,0),u=new te(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,u],d=>{r=r.add(d.Jr)})}),z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let a=r;Y.isDocumentKey(a)||(a=a.child(""));const u=new te(new Y(a),0);let d=new Ht(mt);return this.Hr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(d=d.add(p.Jr)),!0)},u),z.resolve(this.Yr(d))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){At(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return z.forEach(e.mutations,s=>{const a=new te(s.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new te(e,0),s=this.Hr.firstAfterOrEqual(r);return z.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,z.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class vv{constructor(t){this.ti=t,this.docs=function(){return new Dt(Y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),a=s?s.size:0,u=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return z.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let r=Un();return e.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():ce.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let a=Un();const u=e.path,d=new Y(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Hg(jg(y),r)<=0||(s.has(y.key)||Xa(e,y))&&(a=a.insert(y.key,y.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(t,e,r,s){nt(9500)}ni(t,e){return z.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new wv(this)}getSize(t){return z.resolve(this.size)}}class wv extends dv{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),z.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Tv{constructor(t){this.persistence=t,this.ri=new nr(e=>Pl(e),Sl),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.ii=0,this.si=new Nl,this.targetCount=0,this.oi=pi._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),z.resolve()}getLastRemoteSnapshotVersion(t){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return z.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),z.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new pi(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,z.resolve()}updateTargetData(t,e){return this.lr(e),z.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,z.resolve()}removeTargets(t,e,r){let s=0;const a=[];return this.ri.forEach((u,d)=>{d.sequenceNumber<=e&&r.get(d.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(t,d.targetId)),s++)}),z.waitFor(a).next(()=>s)}getTargetCount(t){return z.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return z.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),z.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),z.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),z.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return z.resolve(r)}containsKey(t,e){return z.resolve(this.si.containsKey(e))}}/**
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
 */class qf{constructor(t,e){this._i={},this.overlays={},this.ai=new Za(0),this.ui=!1,this.ui=!0,this.ci=new gv,this.referenceDelegate=t(this),this.li=new Tv(this),this.indexManager=new sv,this.remoteDocumentCache=function(s){return new vv(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new iv(e),this.Pi=new mv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new _v,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new yv(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){G("MemoryPersistence","Starting transaction:",t);const s=new Ev(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(a=>this.referenceDelegate.Ii(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(t,e){return z.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Ev extends Gg{constructor(t){super(),this.currentSequenceNumber=t}}class Ml{constructor(t){this.persistence=t,this.Ri=new Nl,this.Ai=null}static Vi(t){return new Ml(t)}get di(){if(this.Ai)return this.Ai;throw nt(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),z.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),z.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const s=Y.fromPath(r);return this.mi(t,s).next(a=>{a||e.removeEntry(s,ot.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return z.or([()=>z.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Na{constructor(t,e){this.persistence=t,this.fi=new nr(r=>Qg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hv(this,e)}static Vi(t,e){return new Na(t,e)}Ti(){}Ii(t){return z.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return z.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(a=>a?z.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ni(t,u=>this.wr(t,u,e).next(d=>{d||(r++,a.removeEntry(u,ot.min()))})).next(()=>a.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=_a(t.data.value)),e}wr(t,e,r){return z.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ol{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=_t(),s=_t();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ol(t,e.fromCache,r,s)}}/**
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
 */class Iv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class bv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return h_()?8:Zg(le())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const a={result:null};return this.gs(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ps(t,e,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new Iv;return this.ys(t,e,u).next(d=>{if(a.result=d,this.As)return this.ws(t,e,u,d.size)})}).next(()=>a.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Nr()<=gt.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Mr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Nr()<=gt.DEBUG&&G("QueryEngine","Query:",Mr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Nr()<=gt.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Mr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,on(e))):z.resolve())}gs(t,e){if(_h(e))return z.resolve(null);let r=on(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=tl(e,null,"F"),r=on(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=_t(...a);return this.fs.getDocuments(t,u).next(d=>this.indexManager.getMinOffset(t,r).next(p=>{const g=this.Ss(e,d);return this.bs(e,g,u,p.readTime)?this.gs(t,tl(e,null,"F")):this.Ds(t,g,e,p)}))})))}ps(t,e,r,s){return _h(e)||s.isEqual(ot.min())?z.resolve(null):this.fs.getDocuments(t,r).next(a=>{const u=this.Ss(e,a);return this.bs(e,u,r,s)?z.resolve(null):(Nr()<=gt.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(e)),this.Ds(t,u,e,$g(s,eo)).next(d=>d))})}Ss(t,e){let r=new Ht(vf(t));return e.forEach((s,a)=>{Xa(t,a)&&(r=r.add(a))}),r}bs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ys(t,e,r){return Nr()<=gt.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Mr(e)),this.fs.getDocumentsMatchingQuery(t,e,ui.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */const Vl="LocalStore",Av=3e8;class Pv{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Dt(mt),this.Fs=new nr(a=>Pl(a),Sl),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new pv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Sv(n,t,e,r){return new Pv(n,t,e,r)}async function $f(n,t){const e=ct(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let p=_t();for(const g of s){u.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of a){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return e.localDocuments.getDocuments(r,p).next(g=>({Ns:g,removedBatchIds:u,addedBatchIds:d}))})})}function Cv(n,t){const e=ct(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),a=e.xs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const w=g.batch,E=w.keys();let S=z.resolve();return E.forEach(M=>{S=S.next(()=>y.getEntry(p,M)).next(V=>{const U=g.docVersions.get(M);At(U!==null,48541),V.version.compareTo(U)<0&&(w.applyToRemoteDocument(V,g),V.isValidDocument()&&(V.setReadTime(g.commitVersion),y.addEntry(V)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(e,r,t,a).next(()=>a.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=_t();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function jf(n){const t=ct(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Rv(n,t){const e=ct(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const d=[];t.targetChanges.forEach((y,w)=>{const E=s.get(w);if(!E)return;d.push(e.li.removeMatchingKeys(a,y.removedDocuments,w).next(()=>e.li.addMatchingKeys(a,y.addedDocuments,w)));let S=E.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(re.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),s=s.insert(w,S),function(V,U,J){return V.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=Av?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0}(E,S,y)&&d.push(e.li.updateTargetData(a,S))});let p=Un(),g=_t();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&d.push(e.persistence.referenceDelegate.updateLimboDocument(a,y))}),d.push(kv(a,u,t.documentUpdates).next(y=>{p=y.Bs,g=y.Ls})),!r.isEqual(ot.min())){const y=e.li.getLastRemoteSnapshotVersion(a).next(w=>e.li.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(y)}return z.waitFor(d).next(()=>u.apply(a)).next(()=>e.localDocuments.getLocalViewOfDocuments(a,p,g)).next(()=>p)}).then(a=>(e.vs=s,a))}function kv(n,t,e){let r=_t(),s=_t();return e.forEach(a=>r=r.add(a)),t.getEntries(n,r).next(a=>{let u=Un();return e.forEach((d,p)=>{const g=a.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),p.isNoDocument()&&p.version.isEqual(ot.min())?(t.removeEntry(d,p.readTime),u=u.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),u=u.insert(d,p)):G(Vl,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Bs:u,Ls:s}})}function Lv(n,t){const e=ct(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Il),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function xv(n,t){const e=ct(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(a=>a?(s=a,z.resolve(s)):e.li.allocateTargetId(r).next(u=>(s=new kn(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function sl(n,t,e){const r=ct(n),s=r.vs.get(t),a=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!ss(u))throw u;G(Vl,`Failed to update sequence numbers for target ${t}: ${u}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function Rh(n,t,e){const r=ct(n);let s=ot.min(),a=_t();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,g,y){const w=ct(p),E=w.Fs.get(y);return E!==void 0?z.resolve(w.vs.get(E)):w.li.getTargetData(g,y)}(r,u,on(t)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,d.targetId).next(p=>{a=p})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?s:ot.min(),e?a:_t())).next(d=>(Dv(r,yy(t),d),{documents:d,ks:a})))}function Dv(n,t,e){let r=n.Ms.get(t)||ot.min();e.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),n.Ms.set(t,r)}class kh{constructor(){this.activeTargetIds=by()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Nv{constructor(){this.vo=new kh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new kh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Mv{Mo(t){}shutdown(){}}/**
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
 */const Lh="ConnectivityMonitor";class xh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){G(Lh,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){G(Lh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ha=null;function ol(){return ha===null?ha=function(){return 268435456+Math.round(2147483648*Math.random())}():ha++,"0x"+ha.toString(16)}/**
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
 */const Nc="RestConnection",Ov={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Vv{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ra?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,a){const u=ol(),d=this.Qo(t,e.toUriEncodedString());G(Nc,`Sending RPC '${t}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,s,a);const{host:g}=new URL(d),y=fo(g);return this.zo(t,d,p,r,y).then(w=>(G(Nc,`Received RPC '${t}' ${u}: `,w),w),w=>{throw Qi(Nc,`RPC '${t}' ${u} failed with error: `,w,"url: ",d,"request:",r),w})}jo(t,e,r,s,a,u){return this.Wo(t,e,r,s,a)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+is}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,a)=>t[a]=s),r&&r.headers.forEach((s,a)=>t[a]=s)}Qo(t,e){const r=Ov[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Fv{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const oe="WebChannelConnection",Us=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class zr extends Vv{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!zr.c_){const t=Zd();Us(t,Gd.STAT_EVENT,e=>{e.stat===Gc.PROXY?G(oe,"STAT_EVENT: detected buffering proxy"):e.stat===Gc.NOPROXY&&G(oe,"STAT_EVENT: detected no buffering proxy")}),zr.c_=!0}}zo(t,e,r,s,a){const u=ol();return new Promise((d,p)=>{const g=new Hd;g.setWithCredentials(!0),g.listenOnce(Wd.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ma.NO_ERROR:const w=g.getResponseJson();G(oe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),d(w);break;case ma.TIMEOUT:G(oe,`RPC '${t}' ${u} timed out`),p(new j(B.DEADLINE_EXCEEDED,"Request time out"));break;case ma.HTTP_ERROR:const E=g.getStatus();if(G(oe,`RPC '${t}' ${u} failed with status:`,E,"response text:",g.getResponseText()),E>0){let S=g.getResponseJson();Array.isArray(S)&&(S=S[0]);const M=S==null?void 0:S.error;if(M&&M.status&&M.message){const V=function(J){const H=J.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(H)>=0?H:B.UNKNOWN}(M.status);p(new j(V,M.message))}else p(new j(B.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new j(B.UNAVAILABLE,"Connection failed."));break;default:nt(9055,{l_:t,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{G(oe,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(s);G(oe,`RPC '${t}' ${u} sending request:`,s),g.send(e,"POST",y,r,15)})}T_(t,e,r){const s=ol(),a=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=this.createWebChannelTransport(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Go(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const g=a.join("");G(oe,`Creating RPC '${t}' stream ${s}: ${g}`,d);const y=u.createWebChannel(g,d);this.I_(y);let w=!1,E=!1;const S=new Fv({Jo:M=>{E?G(oe,`Not sending because RPC '${t}' stream ${s} is closed:`,M):(w||(G(oe,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),G(oe,`RPC '${t}' stream ${s} sending:`,M),y.send(M))},Ho:()=>y.close()});return Us(y,js.EventType.OPEN,()=>{E||(G(oe,`RPC '${t}' stream ${s} transport opened.`),S.i_())}),Us(y,js.EventType.CLOSE,()=>{E||(E=!0,G(oe,`RPC '${t}' stream ${s} transport closed`),S.o_(),this.E_(y))}),Us(y,js.EventType.ERROR,M=>{E||(E=!0,Qi(oe,`RPC '${t}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),S.o_(new j(B.UNAVAILABLE,"The operation could not be completed")))}),Us(y,js.EventType.MESSAGE,M=>{var V;if(!E){const U=M.data[0];At(!!U,16349);const J=U,H=(J==null?void 0:J.error)||((V=J[0])==null?void 0:V.error);if(H){G(oe,`RPC '${t}' stream ${s} received error:`,H);const W=H.status;let ut=function(C){const I=zt[C];if(I!==void 0)return kf(I)}(W),pt=H.message;W==="NOT_FOUND"&&pt.includes("database")&&pt.includes("does not exist")&&pt.includes(this.databaseId.database)&&Qi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ut===void 0&&(ut=B.INTERNAL,pt="Unknown error status: "+W+" with message "+H.message),E=!0,S.o_(new j(ut,pt)),y.close()}else G(oe,`RPC '${t}' stream ${s} received:`,U),S.__(U)}}),zr.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Kd()}}/**
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
 */function Uv(n){return new zr(n)}function Mc(){return typeof document<"u"?document:null}/**
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
 */function nc(n){return new $y(n,!0)}/**
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
 */zr.c_=!1;class Hf{constructor(t,e,r=1e3,s=1.5,a=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Dh="PersistentStream";class Wf{constructor(t,e,r,s,a,u,d,p){this.Ci=t,this.S_=r,this.b_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Hf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===B.RESOURCE_EXHAUSTED?(Fn(e.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new j(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return G(Dh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(G(Dh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bv extends Wf{constructor(t,e,r,s,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Wy(this.serializer,t),r=function(a){if(!("targetChange"in a))return ot.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ot.min():u.readTime?an(u.readTime):ot.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=rl(this.serializer),e.addTarget=function(a,u){let d;const p=u.target;if(d=Yc(p)?{documents:Ky(a,p)}:{query:Qy(a,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=Df(a,u.resumeToken);const g=el(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(ot.min())>0){d.readTime=Da(a,u.snapshotVersion.toTimestamp());const g=el(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,t);const r=Yy(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=rl(this.serializer),e.removeTarget=t,this.K_(e)}}class zv extends Wf{constructor(t,e,r,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return At(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,At(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){At(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Zy(t.writeResults,t.commitTime),r=an(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=rl(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Gy(this.serializer,r))};this.K_(e)}}/**
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
 */class qv{}class $v extends qv{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(B.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,nl(e,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(B.UNKNOWN,a.toString())})}jo(t,e,r,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.jo(t,nl(e,r),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new j(B.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function jv(n,t,e,r){return new $v(n,t,e,r)}class Hv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fn(e),this.aa=!1):G("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const dn="RemoteStore";class Wv{constructor(t,e,r,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new pi(1e3),this.Va=new pi(1001),this.da=new Set,this.ma=[],this.fa=a,this.fa.Mo(u=>{r.enqueueAndForget(async()=>{ir(this)&&(G(dn,"Restarting streams for network reachability change."),await async function(p){const g=ct(p);g.da.add(4),await yo(g),g.ga.set("Unknown"),g.da.delete(4),await ic(g)}(this))})}),this.ga=new Hv(r,s)}}async function ic(n){if(ir(n))for(const t of n.ma)await t(!0)}async function yo(n){for(const t of n.ma)await t(!1)}function al(n,t){return n.Ea.get(t)||void 0}function Gf(n,t){const e=ct(n),r=al(e,t.targetId);if(r!==void 0&&e.Ia.has(r))return;const s=function(d,p){const g=al(d,p);g!==void 0&&d.Ra.delete(g);const y=function(E,S){return S%2!=0?E.Va.next():E.Aa.next()}(d,p);return d.Ea.set(p,y),d.Ra.set(y,p),y}(e,t.targetId);G(dn,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const a=new kn(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(s,a),zl(e)?Bl(e):as(e).O_()&&Ul(e,a)}function Fl(n,t){const e=ct(n),r=as(e),s=al(e,t);G(dn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ia.delete(s),e.Ea.delete(t),e.Ra.delete(s),r.O_()&&Zf(e,s),e.Ia.size===0&&(r.O_()?r.L_():ir(e)&&e.ga.set("Unknown"))}function Ul(n,t){if(n.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const e=n.Ra.get(t.targetId);if(e===void 0)return void G(dn,"SDK target ID not found for remote ID: "+t.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}as(n).Z_(t)}function Zf(n,t){n.pa.$e(t),as(n).X_(t)}function Bl(n){n.pa=new Uy({getRemoteKeysForTarget:t=>{const e=n.Ra.get(t);return e!==void 0?n.remoteSyncer.getRemoteKeysForTarget(e):_t()},At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),as(n).start(),n.ga.ua()}function zl(n){return ir(n)&&!as(n).x_()&&n.Ia.size>0}function ir(n){return ct(n).da.size===0}function Kf(n){n.pa=void 0}async function Gv(n){n.ga.set("Online")}async function Zv(n){n.Ia.forEach((t,e)=>{Ul(n,t)})}async function Kv(n,t){Kf(n),zl(n)?(n.ga.ha(t),Bl(n)):n.ga.set("Unknown")}async function Qv(n,t,e){if(n.ga.set("Online"),t instanceof xf&&t.state===2&&t.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds){if(s.Ia.has(d)){const p=s.Ra.get(d);p!==void 0&&(await s.remoteSyncer.rejectListen(p,u),s.Ea.delete(p),s.Ra.delete(d)),s.Ia.delete(d)}s.pa.removeTarget(d)}}(n,t)}catch(r){G(dn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ma(n,r)}else if(t instanceof va?n.pa.Xe(t):t instanceof Lf?n.pa.st(t):n.pa.tt(t),!e.isEqual(ot.min()))try{const r=await jf(n.localStore);e.compareTo(r)>=0&&await function(a,u){const d=a.pa.Tt(u);d.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=a.Ia.get(y);w&&a.Ia.set(y,w.withResumeToken(g.resumeToken,u))}}),d.targetMismatches.forEach((g,y)=>{const w=a.Ia.get(g);if(!w)return;a.Ia.set(g,w.withResumeToken(re.EMPTY_BYTE_STRING,w.snapshotVersion)),Zf(a,g);const E=new kn(w.target,g,y,w.sequenceNumber);Ul(a,E)});const p=function(y,w){const E=new Map;w.targetChanges.forEach((M,V)=>{const U=y.Ra.get(V);U!==void 0&&E.set(U,M)});let S=new Dt(mt);return w.targetMismatches.forEach((M,V)=>{const U=y.Ra.get(M);U!==void 0&&(S=S.insert(U,V))}),new _o(w.snapshotVersion,E,S,w.documentUpdates,w.resolvedLimboDocuments)}(a,d);return a.remoteSyncer.applyRemoteEvent(p)}(n,e)}catch(r){G(dn,"Failed to raise snapshot:",r),await Ma(n,r)}}async function Ma(n,t,e){if(!ss(t))throw t;n.da.add(1),await yo(n),n.ga.set("Offline"),e||(e=()=>jf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(dn,"Retrying IndexedDB access"),await e(),n.da.delete(1),await ic(n)})}function Qf(n,t){return t().catch(e=>Ma(n,e,t))}async function rc(n){const t=ct(n),e=mi(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Il;for(;Jv(t);)try{const s=await Lv(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Yv(t,s)}catch(s){await Ma(t,s)}Jf(t)&&Yf(t)}function Jv(n){return ir(n)&&n.Ta.length<10}function Yv(n,t){n.Ta.push(t);const e=mi(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function Jf(n){return ir(n)&&!mi(n).x_()&&n.Ta.length>0}function Yf(n){mi(n).start()}async function Xv(n){mi(n).ra()}async function tw(n){const t=mi(n);for(const e of n.Ta)t.ea(e.mutations)}async function ew(n,t,e){const r=n.Ta.shift(),s=Ll.from(r,t,e);await Qf(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await rc(n)}async function nw(n,t){t&&mi(n).Y_&&await async function(r,s){if(function(u){return Oy(u)&&u!==B.ABORTED}(s.code)){const a=r.Ta.shift();mi(r).B_(),await Qf(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await rc(r)}}(n,t),Jf(n)&&Yf(n)}async function Nh(n,t){const e=ct(n);e.asyncQueue.verifyOperationInProgress(),G(dn,"RemoteStore received new credentials");const r=ir(e);e.da.add(3),await yo(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await ic(e)}async function iw(n,t){const e=ct(n);t?(e.da.delete(2),await ic(e)):t||(e.da.add(2),await yo(e),e.ga.set("Unknown"))}function as(n){return n.ya||(n.ya=function(e,r,s){const a=ct(e);return a.sa(),new Bv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Gv.bind(null,n),Yo:Zv.bind(null,n),t_:Kv.bind(null,n),H_:Qv.bind(null,n)}),n.ma.push(async t=>{t?(n.ya.B_(),zl(n)?Bl(n):n.ga.set("Unknown")):(await n.ya.stop(),Kf(n))})),n.ya}function mi(n){return n.wa||(n.wa=function(e,r,s){const a=ct(e);return a.sa(),new zv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Xv.bind(null,n),t_:nw.bind(null,n),ta:tw.bind(null,n),na:ew.bind(null,n)}),n.ma.push(async t=>{t?(n.wa.B_(),await rc(n)):(await n.wa.stop(),n.Ta.length>0&&(G(dn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.wa}/**
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
 */class ql{constructor(t,e,r,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,a){const u=Date.now()+r,d=new ql(t,e,u,s,a);return d.start(r),d}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(B.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(n,t){if(Fn("AsyncQueue",`${t}: ${n}`),ss(n))return new j(B.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class qr{static emptySet(t){return new qr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||Y.comparator(e.key,r.key):(e,r)=>Y.comparator(e.key,r.key),this.keyedMap=Hs(),this.sortedSet=new Dt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new qr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Mh{constructor(){this.Sa=new Dt(Y.comparator)}track(t){const e=t.doc.key,r=this.Sa.get(e);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(e):t.type===1&&r.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):nt(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,r)=>{t.push(r)}),t}}class ts{constructor(t,e,r,s,a,u,d,p,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,s,a){const u=[];return e.forEach(d=>{u.push({type:0,doc:d})}),new ts(t,e,qr.emptySet(e),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ya(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class rw{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class sw{constructor(){this.queries=Oh(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const s=ct(e),a=s.queries;s.queries=Oh(),a.forEach((u,d)=>{for(const p of d.va)p.onError(r)})})(this,new j(B.ABORTED,"Firestore shutting down"))}}function Oh(){return new nr(n=>yf(n),Ya)}async function jl(n,t){const e=ct(n);let r=3;const s=t.query;let a=e.queries.get(s);a?!a.Fa()&&t.Ma()&&(r=2):(a=new rw,r=t.Ma()?0:1);try{switch(r){case 0:a.Ca=await e.onListen(s,!0);break;case 1:a.Ca=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const d=$l(u,`Initialization of query '${Mr(t.query)}' failed`);return void t.onError(d)}e.queries.set(s,a),a.va.push(t),t.Oa(e.onlineState),a.Ca&&t.Na(a.Ca)&&Wl(e)}async function Hl(n,t){const e=ct(n),r=t.query;let s=3;const a=e.queries.get(r);if(a){const u=a.va.indexOf(t);u>=0&&(a.va.splice(u,1),a.va.length===0?s=t.Ma()?0:1:!a.Fa()&&t.Ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ow(n,t){const e=ct(n);let r=!1;for(const s of t){const a=s.query,u=e.queries.get(a);if(u){for(const d of u.va)d.Na(s)&&(r=!0);u.Ca=s}}r&&Wl(e)}function aw(n,t,e){const r=ct(n),s=r.queries.get(t);if(s)for(const a of s.va)a.onError(e);r.queries.delete(t)}function Wl(n){n.xa.forEach(t=>{t.next()})}var cl,Vh;(Vh=cl||(cl={})).Ba="default",Vh.Cache="cache";class Gl{constructor(t,e,r){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ts(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const r=e!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=ts.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==cl.Cache}}/**
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
 */class Xf{constructor(t){this.key=t}}class tp{constructor(t){this.key=t}}class cw{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=_t(),this.mutatedKeys=_t(),this.iu=vf(t),this.su=new qr(this.iu)}get ou(){return this.tu}_u(t,e){const r=e?e.au:new Mh,s=e?e.su:this.su;let a=e?e.mutatedKeys:this.mutatedKeys,u=s,d=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((y,w)=>{const E=s.get(y),S=Xa(this.query,w)?w:null,M=!!E&&this.mutatedKeys.has(E.key),V=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let U=!1;E&&S?E.data.isEqual(S.data)?M!==V&&(r.track({type:3,doc:S}),U=!0):this.uu(E,S)||(r.track({type:2,doc:S}),U=!0,(p&&this.iu(S,p)>0||g&&this.iu(S,g)<0)&&(d=!0)):!E&&S?(r.track({type:0,doc:S}),U=!0):E&&!S&&(r.track({type:1,doc:E}),U=!0,(p||g)&&(d=!0)),U&&(S?(u=u.add(S),a=V?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{su:u,au:r,bs:d,mutatedKeys:a}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const a=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const u=t.au.Da();u.sort((y,w)=>function(S,M){const V=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return nt(20277,{Vt:U})}};return V(S)-V(M)}(y.type,w.type)||this.iu(y.doc,w.doc)),this.cu(r),s=s??!1;const d=e&&!s?this.lu():[],p=this.ru.size===0&&this.current&&!s?1:0,g=p!==this.nu;return this.nu=p,u.length!==0||g?{snapshot:new ts(this.query,t.su,a,u,t.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:d}:{hu:d}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Mh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=_t(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const e=[];return t.forEach(r=>{this.ru.has(r)||e.push(new tp(r))}),this.ru.forEach(r=>{t.has(r)||e.push(new Xf(r))}),e}Tu(t){this.tu=t.ks,this.ru=_t();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return ts.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Zl="SyncEngine";class lw{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class uw{constructor(t){this.key=t,this.Eu=!1}}class hw{constructor(t,e,r,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new nr(d=>yf(d),Ya),this.Vu=new Map,this.du=new Set,this.mu=new Dt(Y.comparator),this.fu=new Map,this.gu=new Nl,this.pu={},this.yu=new Map,this.wu=pi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function dw(n,t,e=!0){const r=op(n);let s;const a=r.Au.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Iu()):s=await ep(r,t,e,!0),s}async function fw(n,t){const e=op(n);await ep(e,t,!0,!1)}async function ep(n,t,e,r){const s=await xv(n.localStore,on(t)),a=s.targetId,u=n.sharedClientState.addLocalQueryTarget(a,e);let d;return r&&(d=await pw(n,t,a,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Gf(n.remoteStore,s),d}async function pw(n,t,e,r,s){n.bu=(w,E,S)=>async function(V,U,J,H){let W=U.view._u(J);W.bs&&(W=await Rh(V.localStore,U.query,!1).then(({documents:C})=>U.view._u(C,W)));const ut=H&&H.targetChanges.get(U.targetId),pt=H&&H.targetMismatches.get(U.targetId)!=null,at=U.view.applyChanges(W,V.isPrimaryClient,ut,pt);return Uh(V,U.targetId,at.hu),at.snapshot}(n,w,E,S);const a=await Rh(n.localStore,t,!0),u=new cw(t,a.ks),d=u._u(a.documents),p=go.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),g=u.applyChanges(d,n.isPrimaryClient,p);Uh(n,e,g.hu);const y=new lw(t,e,u);return n.Au.set(t,y),n.Vu.has(e)?n.Vu.get(e).push(t):n.Vu.set(e,[t]),g.snapshot}async function mw(n,t,e){const r=ct(n),s=r.Au.get(t),a=r.Vu.get(s.targetId);if(a.length>1)return r.Vu.set(s.targetId,a.filter(u=>!Ya(u,t))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Fl(r.remoteStore,s.targetId),ll(r,s.targetId)}).catch(rs)):(ll(r,s.targetId),await sl(r.localStore,s.targetId,!0))}async function _w(n,t){const e=ct(n),r=e.Au.get(t),s=e.Vu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fl(e.remoteStore,r.targetId))}async function gw(n,t,e){const r=bw(n);try{const s=await function(u,d){const p=ct(u),g=xt.now(),y=d.reduce((S,M)=>S.add(M.key),_t());let w,E;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let M=Un(),V=_t();return p.xs.getEntries(S,y).next(U=>{M=U,M.forEach((J,H)=>{H.isValidDocument()||(V=V.add(J))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,M)).next(U=>{w=U;const J=[];for(const H of d){const W=Ly(H,w.get(H.key).overlayedDocument);W!=null&&J.push(new vi(H.key,W,uf(W.value.mapValue),He.exists(!0)))}return p.mutationQueue.addMutationBatch(S,g,J,d)}).next(U=>{E=U;const J=U.applyToLocalDocumentSet(w,V);return p.documentOverlayCache.saveOverlays(S,U.batchId,J)})}).then(()=>({batchId:E.batchId,changes:Tf(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,d,p){let g=u.pu[u.currentUser.toKey()];g||(g=new Dt(mt)),g=g.insert(d,p),u.pu[u.currentUser.toKey()]=g}(r,s.batchId,e),await vo(r,s.changes),await rc(r.remoteStore)}catch(s){const a=$l(s,"Failed to persist write");e.reject(a)}}async function np(n,t){const e=ct(n);try{const r=await Rv(e.localStore,t);t.targetChanges.forEach((s,a)=>{const u=e.fu.get(a);u&&(At(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.Eu=!0:s.modifiedDocuments.size>0?At(u.Eu,14607):s.removedDocuments.size>0&&(At(u.Eu,42227),u.Eu=!1))}),await vo(e,r,t)}catch(r){await rs(r)}}function Fh(n,t,e){const r=ct(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Au.forEach((a,u)=>{const d=u.view.Oa(t);d.snapshot&&s.push(d.snapshot)}),function(u,d){const p=ct(u);p.onlineState=d;let g=!1;p.queries.forEach((y,w)=>{for(const E of w.va)E.Oa(d)&&(g=!0)}),g&&Wl(p)}(r.eventManager,t),s.length&&r.Ru.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function yw(n,t,e){const r=ct(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.fu.get(t),a=s&&s.key;if(a){let u=new Dt(Y.comparator);u=u.insert(a,ce.newNoDocument(a,ot.min()));const d=_t().add(a),p=new _o(ot.min(),new Map,new Dt(mt),u,d);await np(r,p),r.mu=r.mu.remove(a),r.fu.delete(t),Kl(r)}else await sl(r.localStore,t,!1).then(()=>ll(r,t,e)).catch(rs)}async function vw(n,t){const e=ct(n),r=t.batch.batchId;try{const s=await Cv(e.localStore,t);rp(e,r,null),ip(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await vo(e,s)}catch(s){await rs(s)}}async function ww(n,t,e){const r=ct(n);try{const s=await function(u,d){const p=ct(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(w=>(At(w!==null,37113),y=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(r.localStore,t);rp(r,t,e),ip(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await vo(r,s)}catch(s){await rs(s)}}function ip(n,t){(n.yu.get(t)||[]).forEach(e=>{e.resolve()}),n.yu.delete(t)}function rp(n,t,e){const r=ct(n);let s=r.pu[r.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),r.pu[r.currentUser.toKey()]=s}}function ll(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Vu.get(t))n.Au.delete(r),e&&n.Ru.Du(r,e);n.Vu.delete(t),n.isPrimaryClient&&n.gu.Gr(t).forEach(r=>{n.gu.containsKey(r)||sp(n,r)})}function sp(n,t){n.du.delete(t.path.canonicalString());const e=n.mu.get(t);e!==null&&(Fl(n.remoteStore,e),n.mu=n.mu.remove(t),n.fu.delete(e),Kl(n))}function Uh(n,t,e){for(const r of e)r instanceof Xf?(n.gu.addReference(r.key,t),Tw(n,r)):r instanceof tp?(G(Zl,"Document no longer in limbo: "+r.key),n.gu.removeReference(r.key,t),n.gu.containsKey(r.key)||sp(n,r.key)):nt(19791,{Cu:r})}function Tw(n,t){const e=t.key,r=e.path.canonicalString();n.mu.get(e)||n.du.has(r)||(G(Zl,"New document in limbo: "+e),n.du.add(r),Kl(n))}function Kl(n){for(;n.du.size>0&&n.mu.size<n.maxConcurrentLimboResolutions;){const t=n.du.values().next().value;n.du.delete(t);const e=new Y(kt.fromString(t)),r=n.wu.next();n.fu.set(r,new uw(e)),n.mu=n.mu.insert(e,r),Gf(n.remoteStore,new kn(on(Ja(e.path)),r,"TargetPurposeLimboResolution",Za.ce))}}async function vo(n,t,e){const r=ct(n),s=[],a=[],u=[];r.Au.isEmpty()||(r.Au.forEach((d,p)=>{u.push(r.bu(p,t,e).then(g=>{var y;if((g||e)&&r.isPrimaryClient){const w=g?!g.fromCache:(y=e==null?void 0:e.targetChanges.get(p.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){s.push(g);const w=Ol.Es(p.targetId,g);a.push(w)}}))}),await Promise.all(u),r.Ru.H_(s),await async function(p,g){const y=ct(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>z.forEach(g,E=>z.forEach(E.Ts,S=>y.persistence.referenceDelegate.addReference(w,E.targetId,S)).next(()=>z.forEach(E.Is,S=>y.persistence.referenceDelegate.removeReference(w,E.targetId,S)))))}catch(w){if(!ss(w))throw w;G(Vl,"Failed to update sequence numbers: "+w)}for(const w of g){const E=w.targetId;if(!w.fromCache){const S=y.vs.get(E),M=S.snapshotVersion,V=S.withLastLimboFreeSnapshotVersion(M);y.vs=y.vs.insert(E,V)}}}(r.localStore,a))}async function Ew(n,t){const e=ct(n);if(!e.currentUser.isEqual(t)){G(Zl,"User change. New user:",t.toKey());const r=await $f(e.localStore,t);e.currentUser=t,function(a,u){a.yu.forEach(d=>{d.forEach(p=>{p.reject(new j(B.CANCELLED,u))})}),a.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await vo(e,r.Ns)}}function Iw(n,t){const e=ct(n),r=e.fu.get(t);if(r&&r.Eu)return _t().add(r.key);{let s=_t();const a=e.Vu.get(t);if(!a)return s;for(const u of a){const d=e.Au.get(u);s=s.unionWith(d.view.ou)}return s}}function op(n){const t=ct(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=np.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Iw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=yw.bind(null,t),t.Ru.H_=ow.bind(null,t.eventManager),t.Ru.Du=aw.bind(null,t.eventManager),t}function bw(n){const t=ct(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ww.bind(null,t),t}class Oa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=nc(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return Sv(this.persistence,new bv,t.initialUser,this.serializer)}xu(t){return new qf(Ml.Vi,this.serializer)}Mu(t){return new Nv}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Oa.provider={build:()=>new Oa};class Aw extends Oa{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){At(this.persistence.referenceDelegate instanceof Na,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lv(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new qf(r=>Na.Vi(r,e),this.serializer)}}class ul{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ew.bind(null,this.syncEngine),await iw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sw}()}createDatastore(t){const e=nc(t.databaseInfo.databaseId),r=Uv(t.databaseInfo);return jv(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,a,u,d){return new Wv(r,s,a,u,d)}(this.localStore,this.datastore,t.asyncQueue,e=>Fh(this.syncEngine,e,0),function(){return xh.v()?new xh:new Mv}())}createSyncEngine(t,e){return function(s,a,u,d,p,g,y){const w=new hw(s,a,u,d,p,g);return y&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=ct(s);G(dn,"RemoteStore shutting down."),a.da.add(5),await yo(a),a.fa.shutdown(),a.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ul.provider={build:()=>new ul};/**
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
 */class Ql{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):Fn("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const _i="FirestoreClient";class Pw{constructor(t,e,r,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=El.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{G(_i,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(G(_i,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$l(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Oc(n,t){n.asyncQueue.verifyOperationInProgress(),G(_i,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $f(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Bh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Sw(n);G(_i,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Nh(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Nh(t.remoteStore,s)),n._onlineComponents=t}async function Sw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(_i,"Using user provided OfflineComponentProvider");try{await Oc(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Qi("Error using user provided cache. Falling back to memory cache: "+e),await Oc(n,new Oa)}}else G(_i,"Using default OfflineComponentProvider"),await Oc(n,new Aw(void 0));return n._offlineComponents}async function ap(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(_i,"Using user provided OnlineComponentProvider"),await Bh(n,n._uninitializedComponentsProvider._online)):(G(_i,"Using default OnlineComponentProvider"),await Bh(n,new ul))),n._onlineComponents}function Cw(n){return ap(n).then(t=>t.syncEngine)}async function Va(n){const t=await ap(n),e=t.eventManager;return e.onListen=dw.bind(null,t.syncEngine),e.onUnlisten=mw.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=fw.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=_w.bind(null,t.syncEngine),e}function Rw(n,t,e,r){const s=new Ql(r),a=new Gl(t,s,e);return n.asyncQueue.enqueueAndForget(async()=>jl(await Va(n),a)),()=>{s.Ku(),n.asyncQueue.enqueueAndForget(async()=>Hl(await Va(n),a))}}function kw(n,t,e={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,p,g){const y=new Ql({next:E=>{y.Ku(),u.enqueueAndForget(()=>Hl(a,w));const S=E.docs.has(d);!S&&E.fromCache?g.reject(new j(B.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&p&&p.source==="server"?g.reject(new j(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new Gl(Ja(d.path),y,{includeMetadataChanges:!0,Wa:!0});return jl(a,w)}(await Va(n),n.asyncQueue,t,e,r)),r.promise}function Lw(n,t,e={}){const r=new Dn;return n.asyncQueue.enqueueAndForget(async()=>function(a,u,d,p,g){const y=new Ql({next:E=>{y.Ku(),u.enqueueAndForget(()=>Hl(a,w)),E.fromCache&&p.source==="server"?g.reject(new j(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new Gl(d,y,{includeMetadataChanges:!0,Wa:!0});return jl(a,w)}(await Va(n),n.asyncQueue,t,e,r)),r.promise}function xw(n,t){const e=new Dn;return n.asyncQueue.enqueueAndForget(async()=>gw(await Cw(n),t,e)),e.promise}/**
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
 */function cp(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Dw="ComponentProvider",zh=new Map;function Nw(n,t,e,r,s){return new Xg(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,cp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const lp="firestore.googleapis.com",qh=!0;class $h{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new j(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lp,this.ssl=qh}else this.host=t.host,this.ssl=t.ssl??qh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=zf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<av)throw new j(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cp(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sc{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $h({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new j(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $h(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xg;switch(r.type){case"firstParty":return new Og(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=zh.get(e);r&&(G(Dw,"Removing Datastore"),zh.delete(e),r.terminate())}(this),Promise.resolve()}}function Mw(n,t,e,r={}){var g;n=Se(n,sc);const s=fo(t),a=n._getSettings(),u={...a,emulatorOptions:n._getEmulatorOptions()},d=`${t}:${e}`;s&&Vd(`https://${d}`),a.host!==lp&&a.host!==d&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:d,ssl:s,emulatorOptions:r};if(!On(p,u)&&(n._setSettings(p),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=ae.MOCK_USER;else{y=r_(r.mockUserToken,(g=n._app)==null?void 0:g.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new j(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ae(E)}n._authCredentials=new Dg(new Jd(y,w))}}/**
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
 */class wi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new wi(this.firestore,t,this._query)}}class Mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mt(this.firestore,t,this._key)}toJSON(){return{type:Mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(po(e,Mt._jsonSchema))return new Mt(t,r||null,new Y(kt.fromString(e.referencePath)))}}Mt._jsonSchemaVersion="firestore/documentReference/1.0",Mt._jsonSchema={type:$t("string",Mt._jsonSchemaVersion),referencePath:$t("string")};class ci extends wi{constructor(t,e,r){super(t,e,Ja(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mt(this.firestore,null,new Y(t))}withConverter(t){return new ci(this.firestore,t,this._path)}}function Ji(n,t,...e){if(n=Gt(n),Yd("collection","path",t),n instanceof sc){const r=kt.fromString(t,...e);return nh(r),new ci(n,null,r)}{if(!(n instanceof Mt||n instanceof ci))throw new j(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(kt.fromString(t,...e));return nh(r),new ci(n.firestore,null,r)}}function Wt(n,t,...e){if(n=Gt(n),arguments.length===1&&(t=El.newId()),Yd("doc","path",t),n instanceof sc){const r=kt.fromString(t,...e);return eh(r),new Mt(n,null,new Y(r))}{if(!(n instanceof Mt||n instanceof ci))throw new j(B.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(kt.fromString(t,...e));return eh(r),new Mt(n.firestore,n instanceof ci?n.converter:null,new Y(r))}}/**
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
 */const jh="AsyncQueue";class Hh{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Hf(this,"async_queue_retry"),this.lc=()=>{const r=Mc();r&&G(jh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Mc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new Dn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!ss(t))throw t;G(jh,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,Fn("INTERNAL UNHANDLED ERROR: ",Wh(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=ql.createAndSchedule(this,t,e,r,a=>this.Ec(a));return this.oc.push(s),s}Pc(){this._c&&nt(47125,{Rc:Wh(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Wh(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class gi extends sc{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Hh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Hh(t),this._firestoreClient=void 0,await t}}}function Ow(n,t){const e=typeof n=="object"?n:zd(),r=typeof n=="string"?n:Ra,s=wl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=n_("firestore");a&&Mw(s,...a)}return s}function oc(n){if(n._terminated)throw new j(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vw(n),n._firestoreClient}function Vw(n){var r,s,a,u;const t=n._freezeSettings(),e=Nw(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(a=t.localCache)!=null&&a._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Pw(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(n._componentsProvider))}/**
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
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(re.fromBase64String(t))}catch(e){throw new j(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(re.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(po(t,Ve._jsonSchema))return Ve.fromBase64String(t.bytes)}}Ve._jsonSchemaVersion="firestore/bytes/1.0",Ve._jsonSchema={type:$t("string",Ve._jsonSchemaVersion),bytes:$t("string")};/**
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
 */class Jl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new j(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class cs{constructor(t){this._methodName=t}}/**
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
 */class cn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new j(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new j(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return mt(this._lat,t._lat)||mt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(t){if(po(t,cn._jsonSchema))return new cn(t.latitude,t.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:$t("string",cn._jsonSchemaVersion),latitude:$t("number"),longitude:$t("number")};/**
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
 */class We{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(po(t,We._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new We(t.vectorValues);throw new j(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:$t("string",We._jsonSchemaVersion),vectorValues:$t("object")};/**
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
 */const Fw=/^__.*__$/;class Uw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new vi(t,this.data,this.fieldMask,e,this.fieldTransforms):new mo(t,this.data,e,this.fieldTransforms)}}class up{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new vi(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw nt(40011,{dataSource:n})}}class ac{constructor(t,e,r,s,a,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.fc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new ac({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Fa(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(hp(this.dataSource)&&Fw.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Bw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||nc(t)}V(t,e,r,s=!1){return new ac({dataSource:t,methodName:e,targetDoc:r,path:ie.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yl(n){const t=n._freezeSettings(),e=nc(n._databaseId);return new Bw(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zw(n,t,e,r,s,a={}){const u=n.V(a.merge||a.mergeFields?2:0,t,e,s);nu("Data must be an object, but it was:",u,r);const d=fp(r,u);let p,g;if(a.merge)p=new Pe(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const E=Yi(t,w,e);if(!u.contains(E))throw new j(B.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);_p(y,E)||y.push(E)}p=new Pe(y),g=u.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=u.fieldTransforms;return new Uw(new ve(d),p,g)}class wo extends cs{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof wo}}function dp(n,t,e){return new ac({dataSource:3,targetDoc:t.settings.targetDoc,methodName:n._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Xl extends cs{_toFieldTransform(t){return new Rl(t.path,new oo)}isEqual(t){return t instanceof Xl}}class tu extends cs{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=dp(this,t,!0),r=this.vc.map(a=>rr(a,e)),s=new Yr(r);return new Rl(t.path,s)}isEqual(t){return t instanceof tu&&On(this.vc,t.vc)}}class eu extends cs{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=dp(this,t,!0),r=this.vc.map(a=>rr(a,e)),s=new Xr(r);return new Rl(t.path,s)}isEqual(t){return t instanceof eu&&On(this.vc,t.vc)}}function qw(n,t,e,r){const s=n.V(1,t,e);nu("Data must be an object, but it was:",s,r);const a=[],u=ve.empty();yi(r,(p,g)=>{const y=mp(t,p,e);g=Gt(g);const w=s.Sc(y);if(g instanceof wo)a.push(y);else{const E=rr(g,w);E!=null&&(a.push(y),u.set(y,E))}});const d=new Pe(a);return new up(u,d,s.fieldTransforms)}function $w(n,t,e,r,s,a){const u=n.V(1,t,e),d=[Yi(t,r,e)],p=[s];if(a.length%2!=0)throw new j(B.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)d.push(Yi(t,a[E])),p.push(a[E+1]);const g=[],y=ve.empty();for(let E=d.length-1;E>=0;--E)if(!_p(g,d[E])){const S=d[E];let M=p[E];M=Gt(M);const V=u.Sc(S);if(M instanceof wo)g.push(S);else{const U=rr(M,V);U!=null&&(g.push(S),y.set(S,U))}}const w=new Pe(g);return new up(y,w,u.fieldTransforms)}function jw(n,t,e,r=!1){return rr(e,n.V(r?4:3,t))}function rr(n,t){if(pp(n=Gt(n)))return nu("Unsupported field value:",t,n),fp(n,t);if(n instanceof cs)return function(r,s){if(!hp(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const d of r){let p=rr(d,s.bc(u));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),u++}return{arrayValue:{values:a}}}(n,t)}return function(r,s){if((r=Gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ay(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=xt.fromDate(r);return{timestampValue:Da(s.serializer,a)}}if(r instanceof xt){const a=new xt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(s.serializer,a)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:Df(s.serializer,r._byteString)};if(r instanceof Mt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Dl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof We)return function(u,d){const p=u instanceof We?u.toArray():u;return{mapValue:{fields:{[cf]:{stringValue:lf},[ka]:{arrayValue:{values:p.map(y=>{if(typeof y!="number")throw d.Dc("VectorValues must only contain numeric values.");return Cl(d.serializer,y)})}}}}}}(r,s);if(Bf(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Ga(r)}`)}(n,t)}function fp(n,t){const e={};return ef(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):yi(n,(r,s)=>{const a=rr(s,t.yc(r));a!=null&&(e[r]=a)}),{mapValue:{fields:e}}}function pp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof xt||n instanceof cn||n instanceof Ve||n instanceof Mt||n instanceof cs||n instanceof We||Bf(n))}function nu(n,t,e){if(!pp(e)||!Xd(e)){const r=Ga(e);throw r==="an object"?t.Dc(n+" a custom object"):t.Dc(n+" "+r)}}function Yi(n,t,e){if((t=Gt(t))instanceof Jl)return t._internalPath;if(typeof t=="string")return mp(n,t);throw Fa("Field path arguments must be of type string or ",n,!1,void 0,e)}const Hw=new RegExp("[~\\*/\\[\\]]");function mp(n,t,e){if(t.search(Hw)>=0)throw Fa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Jl(...t.split("."))._internalPath}catch{throw Fa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Fa(n,t,e,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${t}() called with invalid data`;e&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||u)&&(p+=" (found",a&&(p+=` in field ${r}`),u&&(p+=` in document ${s}`),p+=")"),new j(B.INVALID_ARGUMENT,d+n+p)}function _p(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Ww{convertValue(t,e="none"){switch(fi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(di(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw nt(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return yi(t,(s,a)=>{r[s]=this.convertValue(a,e)}),r}convertVectorValue(t){var r,s,a;const e=(a=(s=(r=t.fields)==null?void 0:r[ka].arrayValue)==null?void 0:s.values)==null?void 0:a.map(u=>Ft(u.doubleValue));return new We(e)}convertGeoPoint(t){return new cn(Ft(t.latitude),Ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Qa(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(no(t));default:return null}}convertTimestamp(t){const e=hi(t);return new xt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=kt.fromString(t);At(Uf(r),9688,{name:t});const s=new io(r.get(1),r.get(3)),a=new Y(r.popFirst(5));return s.isEqual(e)||Fn(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}/**
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
 */class iu extends Ww{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Mt(this.firestore,null,e)}}/**
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
 */function Gw(){return new wo("deleteField")}function ln(){return new Xl("serverTimestamp")}function Zw(...n){return new tu("arrayUnion",n)}function Kw(...n){return new eu("arrayRemove",n)}const Gh="@firebase/firestore",Zh="4.14.1";/**
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
 */function Kh(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(n,["next","error","complete"])}/**
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
 */class gp{constructor(t,e,r,s,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Qw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Yi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Qw extends gp{data(){return super.data()}}/**
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
 */function yp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ru{}class vp extends ru{}function es(n,t,...e){let r=[];t instanceof ru&&r.push(t),r=r.concat(e),function(a){const u=a.filter(p=>p instanceof su).length,d=a.filter(p=>p instanceof cc).length;if(u>1||u>0&&d>0)throw new j(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class cc extends vp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new cc(t,e,r)}_apply(t){const e=this._parse(t);return wp(t._query,e),new wi(t.firestore,t.converter,Xc(t._query,e))}_parse(t){const e=Yl(t.firestore);return function(a,u,d,p,g,y,w){let E;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new j(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Jh(w,y);const M=[];for(const V of w)M.push(Qh(p,a,V));E={arrayValue:{values:M}}}else E=Qh(p,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Jh(w,y),E=jw(d,u,w,y==="in"||y==="not-in");return qt.create(g,y,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Xi(n,t,e){const r=t,s=Yi("where",n);return cc._create(s,r,e)}class su extends ru{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new su(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ze.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,a){let u=s;const d=a.getFlattenedFilters();for(const p of d)wp(u,p),u=Xc(u,p)}(t._query,e),new wi(t.firestore,t.converter,Xc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ou extends vp{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ou(t,e)}_apply(t){const e=function(s,a,u){if(s.startAt!==null)throw new j(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new so(a,u)}(t._query,this._field,this._direction);return new wi(t.firestore,t.converter,gy(t._query,e))}}function Jw(n,t="asc"){const e=t,r=Yi("orderBy",n);return ou._create(r,e)}function Qh(n,t,e){if(typeof(e=Gt(e))=="string"){if(e==="")throw new j(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gf(t)&&e.indexOf("/")!==-1)throw new j(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(kt.fromString(e));if(!Y.isDocumentKey(r))throw new j(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uh(n,new Y(r))}if(e instanceof Mt)return uh(n,e._key);throw new j(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ga(e)}.`)}function Jh(n,t){if(!Array.isArray(n)||n.length===0)throw new j(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wp(n,t){const e=function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new j(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new j(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Yw(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class Gs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hi extends gp{constructor(t,e,r,s,a,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Yi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Hi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hi._jsonSchema={type:$t("string",Hi._jsonSchemaVersion),bundleSource:$t("string","DocumentSnapshot"),bundleName:$t("string"),bundle:$t("string")};class wa extends Hi{data(t={}){return super.data(t)}}class Wi{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new wa(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new j(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const p=new wa(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Gs(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const p=new wa(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Gs(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,y=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:Xw(d.type),doc:p,oldIndex:g,newIndex:y}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Wi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=El.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Xw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return nt(61501,{type:n})}}/**
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
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:$t("string",Wi._jsonSchemaVersion),bundleSource:$t("string","QuerySnapshot"),bundleName:$t("string"),bundle:$t("string")};/**
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
 */function tT(n){n=Se(n,Mt);const t=Se(n.firestore,gi),e=oc(t);return kw(e,n._key).then(r=>Ep(t,n,r))}function au(n){n=Se(n,wi);const t=Se(n.firestore,gi),e=oc(t),r=new iu(t);return yp(n._query),Lw(e,n._query).then(s=>new Wi(t,r,n,s))}function sr(n,t,e){n=Se(n,Mt);const r=Se(n.firestore,gi),s=Yw(n.converter,t,e),a=Yl(r);return cu(r,[zw(a,"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,He.none())])}function Ti(n,t,e,...r){n=Se(n,Mt);const s=Se(n.firestore,gi),a=Yl(s);let u;return u=typeof(t=Gt(t))=="string"||t instanceof Jl?$w(a,"updateDoc",n._key,t,e,r):qw(a,"updateDoc",n._key,t),cu(s,[u.toMutation(n._key,He.exists(!0))])}function Tp(n){return cu(Se(n.firestore,gi),[new kl(n._key,He.none())])}function ao(n,...t){var g,y,w;n=Gt(n);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Kh(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Kh(t[r])){const E=t[r];t[r]=(g=E.next)==null?void 0:g.bind(E),t[r+1]=(y=E.error)==null?void 0:y.bind(E),t[r+2]=(w=E.complete)==null?void 0:w.bind(E)}let a,u,d;if(n instanceof Mt)u=Se(n.firestore,gi),d=Ja(n._key.path),a={next:E=>{t[r]&&t[r](Ep(u,n,E))},error:t[r+1],complete:t[r+2]};else{const E=Se(n,wi);u=Se(E.firestore,gi),d=E._query;const S=new iu(u);a={next:M=>{t[r]&&t[r](new Wi(u,S,E,M))},error:t[r+1],complete:t[r+2]},yp(n._query)}const p=oc(u);return Rw(p,d,s,a)}function cu(n,t){const e=oc(n);return xw(e,t)}function Ep(n,t,e){const r=e.docs.get(t._key),s=new iu(n);return new Hi(n,s,t._key,r,new Gs(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){Lg(ns),Zr(new Zi("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new gi(new Ng(r.getProvider("auth-internal")),new Vg(u,r.getProvider("app-check-internal")),ty(u,s),u);return a={useFetchStreams:e,...a},d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),oi(Gh,Zh,t),oi(Gh,Zh,"esm2020")})();function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eT=Ip,bp=new uo("auth","Firebase",Ip());/**
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
 */const Ua=new yl("@firebase/auth");function nT(n,...t){Ua.logLevel<=gt.WARN&&Ua.warn(`Auth (${ns}): ${n}`,...t)}function Ta(n,...t){Ua.logLevel<=gt.ERROR&&Ua.error(`Auth (${ns}): ${n}`,...t)}/**
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
 */function Fe(n,...t){throw uu(n,...t)}function Ge(n,...t){return uu(n,...t)}function lu(n,t,e){const r={...eT(),[t]:e};return new uo("auth","Firebase",r).create(t,{appName:n.name})}function Nn(n){return lu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iT(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Fe(n,"argument-error"),lu(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uu(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return bp.create(n,...t)}function et(n,t,...e){if(!n)throw uu(t,...e)}function Ln(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Ta(t),new Error(t)}function Bn(n,t){n||Ln(t)}/**
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
 */function hl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function rT(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function sT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rT()||c_()||"connection"in navigator)?navigator.onLine:!0}function oT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class To{constructor(t,e){this.shortDelay=t,this.longDelay=e,Bn(e>t,"Short delay should be less than long delay!"),this.isMobile=s_()||l_()}get(){return sT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hu(n,t){Bn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Ap{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const cT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lT=new To(3e4,6e4);function Ei(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function Ii(n,t,e,r,s={}){return Pp(n,s,async()=>{let a={},u={};r&&(t==="GET"?u=r:a={body:JSON.stringify(r)});const d=ho({key:n.config.apiKey,...u}).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g={method:t,headers:p,...a};return a_()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&fo(n.emulatorConfig.host)&&(g.credentials="include"),Ap.fetch()(await Sp(n,n.config.apiHost,e,d),g)})}async function Pp(n,t,e){n._canInitEmulator=!1;const r={...aT,...t};try{const s=new hT(n),a=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw da(n,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw da(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw da(n,"user-disabled",u);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw lu(n,y,g);Fe(n,y)}}catch(s){if(s instanceof zn)throw s;Fe(n,"network-request-failed",{message:String(s)})}}async function Eo(n,t,e,r,s={}){const a=await Ii(n,t,e,r,s);return"mfaPendingCredential"in a&&Fe(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Sp(n,t,e,r){const s=`${t}${e}?${r}`,a=n,u=a.config.emulator?hu(n.config,s):`${n.config.apiScheme}://${s}`;return cT.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function uT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),lT.get())})}}function da(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Ge(n,t,r);return s.customData._tokenResponse=e,s}function Xh(n){return n!==void 0&&n.enterprise!==void 0}class dT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return uT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function fT(n,t){return Ii(n,"GET","/v2/recaptchaConfig",Ei(n,t))}/**
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
 */async function pT(n,t){return Ii(n,"POST","/v1/accounts:delete",t)}async function Ba(n,t){return Ii(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ys(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function mT(n,t=!1){const e=Gt(n),r=await e.getIdToken(t),s=du(r);et(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Ys(Vc(s.auth_time)),issuedAtTime:Ys(Vc(s.iat)),expirationTime:Ys(Vc(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Vc(n){return Number(n)*1e3}function du(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Ta("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dd(e);return s?JSON.parse(s):(Ta("Failed to decode base64 JWT payload"),null)}catch(s){return Ta("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function td(n){const t=du(n);return et(t,"internal-error"),et(typeof t.exp<"u","internal-error"),et(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function co(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof zn&&_T(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _T({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class gT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(n){var w;const t=n.auth,e=await n.getIdToken(),r=await co(n,Ba(t,{idToken:e}));et(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const a=(w=s.providerUserInfo)!=null&&w.length?Cp(s.providerUserInfo):[],u=vT(n.providerData,a),d=n.isAnonymous,p=!(n.email&&s.passwordHash)&&!(u!=null&&u.length),g=d?p:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function yT(n){const t=Gt(n);await za(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function vT(n,t){return[...n.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Cp(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
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
 */async function wT(n,t){const e=await Pp(n,{},async()=>{const r=ho({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=n.config,u=await Sp(n,s,"/v1/token",`key=${a}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return n.emulatorConfig&&fo(n.emulatorConfig.host)&&(p.credentials="include"),Ap.fetch()(u,p)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function TT(n,t){return Ii(n,"POST","/v2/accounts:revokeToken",Ei(n,t))}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){et(t.idToken,"internal-error"),et(typeof t.idToken<"u","internal-error"),et(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):td(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){et(t.length!==0,"internal-error");const e=td(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(et(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:a}=await wT(t,e);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:a}=e,u=new $r;return r&&(et(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),s&&(et(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),a&&(et(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function Xn(n,t){et(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class je{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new gT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await co(this,this.stsTokenManager.getToken(this.auth,t));return et(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return mT(this,t)}reload(){return yT(this)}_assign(t){this!==t&&(et(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new je({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){et(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Nn(this.auth));const t=await this.getIdToken();return await co(this,pT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,a=e.phoneNumber??void 0,u=e.photoURL??void 0,d=e.tenantId??void 0,p=e._redirectEventId??void 0,g=e.createdAt??void 0,y=e.lastLoginAt??void 0,{uid:w,emailVerified:E,isAnonymous:S,providerData:M,stsTokenManager:V}=e;et(w&&V,t,"internal-error");const U=$r.fromJSON(this.name,V);et(typeof w=="string",t,"internal-error"),Xn(r,t.name),Xn(s,t.name),et(typeof E=="boolean",t,"internal-error"),et(typeof S=="boolean",t,"internal-error"),Xn(a,t.name),Xn(u,t.name),Xn(d,t.name),Xn(p,t.name),Xn(g,t.name),Xn(y,t.name);const J=new je({uid:w,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:S,photoURL:u,phoneNumber:a,tenantId:d,stsTokenManager:U,createdAt:g,lastLoginAt:y});return M&&Array.isArray(M)&&(J.providerData=M.map(H=>({...H}))),p&&(J._redirectEventId=p),J}static async _fromIdTokenResponse(t,e,r=!1){const s=new $r;s.updateFromServerResponse(e);const a=new je({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await za(a),a}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];et(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?Cp(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new $r;d.updateFromIdToken(r);const p=new je({uid:s.localId,auth:t,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,g),p}}/**
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
 */const ed=new Map;function xn(n){Bn(n instanceof Function,"Expected a class definition");let t=ed.get(n);return t?(Bn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ed.set(n,t),t)}/**
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
 */class Rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Rp.type="NONE";const nd=Rp;/**
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
 */function Ea(n,t,e){return`firebase:${n}:${t}:${e}`}class jr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Ea(this.userKey,s.apiKey,a),this.fullPersistenceKey=Ea("persistence",s.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ba(this.auth,{idToken:t}).catch(()=>{});return e?je._fromGetAccountInfoResponse(this.auth,e,t):null}return je._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new jr(xn(nd),t,r);const s=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||xn(nd);const u=Ea(r,t.config.apiKey,t.name);let d=null;for(const g of e)try{const y=await g._get(u);if(y){let w;if(typeof y=="string"){const E=await Ba(t,{idToken:y}).catch(()=>{});if(!E)break;w=await je._fromGetAccountInfoResponse(t,E,y)}else w=je._fromJSON(t,y);g!==a&&(d=w),a=g;break}}catch{}const p=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new jr(a,t,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(e.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new jr(a,t,r))}}/**
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
 */function id(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mp(t))return"Blackberry";if(Op(t))return"Webos";if(Lp(t))return"Safari";if((t.includes("chrome/")||xp(t))&&!t.includes("edge/"))return"Chrome";if(Np(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kp(n=le()){return/firefox\//i.test(n)}function Lp(n=le()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xp(n=le()){return/crios\//i.test(n)}function Dp(n=le()){return/iemobile/i.test(n)}function Np(n=le()){return/android/i.test(n)}function Mp(n=le()){return/blackberry/i.test(n)}function Op(n=le()){return/webos/i.test(n)}function fu(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ET(n=le()){var t;return fu(n)&&!!((t=window.navigator)!=null&&t.standalone)}function IT(){return u_()&&document.documentMode===10}function Vp(n=le()){return fu(n)||Np(n)||Op(n)||Mp(n)||/windows phone/i.test(n)||Dp(n)}/**
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
 */function Fp(n,t=[]){let e;switch(n){case"Browser":e=id(le());break;case"Worker":e=`${id(le())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${ns}/${r}`}/**
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
 */class bT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=a=>new Promise((u,d)=>{try{const p=t(a);u(p)}catch(p){d(p)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function AT(n,t={}){return Ii(n,"GET","/v2/passwordPolicy",Ei(n,t))}/**
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
 */const PT=6;class ST{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??PT,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
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
 */class CT{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=xn(e)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await jr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ba(this,{idToken:t}),r=await je._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(be(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,d=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(t);(!u||u===d)&&(p!=null&&p.user)&&(r=p.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return et(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await za(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=oT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(be(this.app))return Promise.reject(Nn(this));const e=t?Gt(t):null;return e&&et(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&et(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return be(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await AT(this),e=new ST(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new uo("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await TT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&xn(t)||this._popupRedirectResolver;et(e,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[xn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(et(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof e=="function"){const p=t.addObserver(e,r,s);return()=>{u=!0,p()}}else{const p=t.addObserver(e);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return et(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&nT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function bi(n){return Gt(n)}class rd{constructor(t){this.auth=t,this.observer=null,this.addObserver=y_(e=>this.observer=e)}get next(){return et(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(n){lc=n}function Up(n){return lc.loadJS(n)}function kT(){return lc.recaptchaEnterpriseScript}function LT(){return lc.gapiScript}function xT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class DT{constructor(){this.enterprise=new NT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class NT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const MT="recaptcha-enterprise",Bp="NO_RECAPTCHA";class OT{constructor(t){this.type=MT,this.auth=bi(t)}async verify(t="verify",e=!1){async function r(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{fT(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new dT(p);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(p=>{d(p)})})}function s(a,u,d){const p=window.grecaptcha;Xh(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:t}).then(g=>{u(g)}).catch(()=>{u(Bp)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DT().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!e&&Xh(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=kT();p.length!==0&&(p+=d),Up(p).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function sd(n,t,e,r=!1,s=!1){const a=new OT(n);let u;if(s)u=Bp;else try{u=await a.verify(e)}catch{u=await a.verify(e,!0)}const d={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function fl(n,t,e,r,s){var a;if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await sd(n,t,e,e==="getOobCode");return r(n,u)}else return r(n,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await sd(n,t,e,e==="getOobCode");return r(n,d)}else return Promise.reject(u)})}/**
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
 */function VT(n,t){const e=wl(n,"auth");if(e.isInitialized()){const s=e.getImmediate(),a=e.getOptions();if(On(a,t??{}))return s;Fe(s,"already-initialized")}return e.initialize({options:t})}function FT(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(xn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function UT(n,t,e){const r=bi(n);et(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,a=zp(t),{host:u,port:d}=BT(t),p=d===null?"":`:${d}`,g={url:`${a}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){et(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),et(On(g,r.config.emulator)&&On(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,fo(u)?Vd(`${a}//${u}${p}`):zT()}function zp(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function BT(n){const t=zp(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:od(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:od(u)}}}function od(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function zT(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ln("not implemented")}_getIdTokenResponse(t){return Ln("not implemented")}_linkToIdToken(t,e){return Ln("not implemented")}_getReauthenticationResolver(t){return Ln("not implemented")}}async function qT(n,t){return Ii(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function $T(n,t){return Eo(n,"POST","/v1/accounts:signInWithPassword",Ei(n,t))}/**
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
 */async function jT(n,t){return Eo(n,"POST","/v1/accounts:signInWithEmailLink",Ei(n,t))}async function HT(n,t){return Eo(n,"POST","/v1/accounts:signInWithEmailLink",Ei(n,t))}/**
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
 */class lo extends pu{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new lo(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new lo(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(t,e,"signInWithPassword",$T);case"emailLink":return jT(t,{email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(t,r,"signUpPassword",qT);case"emailLink":return HT(t,{idToken:e,email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Hr(n,t){return Eo(n,"POST","/v1/accounts:signInWithIdp",Ei(n,t))}/**
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
 */const WT="http://localhost";class tr extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new tr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Fe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...a}=e;if(!r||!s)return null;const u=new tr(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const e=this.buildRequest();return Hr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Hr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Hr(t,e)}buildRequest(){const t={requestUri:WT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=ho(e)}return t}}/**
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
 */function GT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZT(n){const t=qs($s(n)).link,e=t?qs($s(t)).deep_link_id:null,r=qs($s(n)).deep_link_id;return(r?qs($s(r)).link:null)||r||e||t||n}class mu{constructor(t){const e=qs($s(t)),r=e.apiKey??null,s=e.oobCode??null,a=GT(e.mode??null);et(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=ZT(t);try{return new mu(e)}catch{return null}}}/**
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
 */class ls{constructor(){this.providerId=ls.PROVIDER_ID}static credential(t,e){return lo._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=mu.parseLink(e);return et(r,"argument-error"),lo._fromEmailAndCode(t,r.code,r.tenantId)}}ls.PROVIDER_ID="password";ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _u{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Io extends _u{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ti extends Io{constructor(){super("facebook.com")}static credential(t){return tr._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ti.credentialFromTaggedObject(t)}static credentialFromError(t){return ti.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ti.credential(t.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return tr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Rn.credentialFromTaggedObject(t)}static credentialFromError(t){return Rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Rn.credential(e,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class ei extends Io{constructor(){super("github.com")}static credential(t){return tr._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ei.credentialFromTaggedObject(t)}static credentialFromError(t){return ei.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ei.credential(t.oauthAccessToken)}catch{return null}}}ei.GITHUB_SIGN_IN_METHOD="github.com";ei.PROVIDER_ID="github.com";/**
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
 */class ni extends Io{constructor(){super("twitter.com")}static credential(t,e){return tr._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ni.credentialFromTaggedObject(t)}static credentialFromError(t){return ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return ni.credential(e,r)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
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
 */async function KT(n,t){return Eo(n,"POST","/v1/accounts:signUp",Ei(n,t))}/**
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
 */class er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const a=await je._fromIdTokenResponse(t,r,s),u=ad(r);return new er({user:a,providerId:u,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=ad(r);return new er({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function ad(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qa extends zn{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new qa(t,e,r,s)}}function qp(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(n,a,t,r):a})}async function QT(n,t,e=!1){const r=await co(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return er._forOperation(n,"link",r)}/**
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
 */async function JT(n,t,e=!1){const{auth:r}=n;if(be(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const a=await co(n,qp(r,s,t,n),e);et(a.idToken,r,"internal-error");const u=du(a.idToken);et(u,r,"internal-error");const{sub:d}=u;return et(n.uid===d,r,"user-mismatch"),er._forOperation(n,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),a}}/**
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
 */async function $p(n,t,e=!1){if(be(n.app))return Promise.reject(Nn(n));const r="signIn",s=await qp(n,r,t),a=await er._fromIdTokenResponse(n,r,s);return e||await n._updateCurrentUser(a.user),a}async function YT(n,t){return $p(bi(n),t)}/**
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
 */async function jp(n){const t=bi(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function XT(n,t,e){if(be(n.app))return Promise.reject(Nn(n));const r=bi(n),u=await fl(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",KT).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&jp(n),p}),d=await er._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function tE(n,t,e){return be(n.app)?Promise.reject(Nn(n)):YT(Gt(n),ls.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jp(n),r})}function eE(n,t,e,r){return Gt(n).onIdTokenChanged(t,e,r)}function nE(n,t,e){return Gt(n).beforeAuthStateChanged(t,e)}function iE(n,t,e,r){return Gt(n).onAuthStateChanged(t,e,r)}function rE(n){return Gt(n).signOut()}const $a="__sak";/**
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
 */class Hp{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sE=1e3,oE=10;class Wp extends Hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!e&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);IT()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,oE):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},sE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Wp.type="LOCAL";const aE=Wp;/**
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
 */class Gp extends Hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Gp.type="SESSION";const Zp=Gp;/**
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
 */function cE(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class uc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new uc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:a}=e.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async g=>g(e.origin,a)),p=await cE(d);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:p})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
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
 */function gu(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class lE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const g=gu("",20);s.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const E=w;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(E.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function un(){return window}function uE(n){un().location.href=n}/**
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
 */function Kp(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function hE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function fE(){return Kp()?self:null}/**
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
 */const Qp="firebaseLocalStorageDb",pE=1,ja="firebaseLocalStorage",Jp="fbase_key";class bo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function hc(n,t){return n.transaction([ja],t?"readwrite":"readonly").objectStore(ja)}function mE(){const n=indexedDB.deleteDatabase(Qp);return new bo(n).toPromise()}function pl(){const n=indexedDB.open(Qp,pE);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ja,{keyPath:Jp})}catch(s){e(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ja)?t(r):(r.close(),await mE(),t(await pl()))})})}async function cd(n,t,e){const r=hc(n,!0).put({[Jp]:t,value:e});return new bo(r).toPromise()}async function _E(n,t){const e=hc(n,!1).get(t),r=await new bo(e).toPromise();return r===void 0?null:r.value}function ld(n,t){const e=hc(n,!0).delete(t);return new bo(e).toPromise()}const gE=800,yE=3;class Yp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>yE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(fE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await hE(),!this.activeServiceWorker)return;this.sender=new lE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||dE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pl();return await cd(t,$a,"1"),await ld(t,$a),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>_E(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ld(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const a=hc(s,!1).getAll();return new bo(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:a}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yp.type="LOCAL";const vE=Yp;new To(3e4,6e4);/**
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
 */function Xp(n,t){return t?xn(t):(et(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yu extends pu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Hr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function wE(n){return $p(n.auth,new yu(n),n.bypassAuthState)}function TE(n){const{auth:t,user:e}=n;return et(e,t,"internal-error"),JT(e,new yu(n),n.bypassAuthState)}async function EE(n){const{auth:t,user:e}=n;return et(e,t,"internal-error"),QT(e,new yu(n),n.bypassAuthState)}/**
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
 */class tm{constructor(t,e,r,s,a=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:e,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return wE;case"linkViaPopup":case"linkViaRedirect":return EE;case"reauthViaPopup":case"reauthViaRedirect":return TE;default:Fe(this.auth,"internal-error")}}resolve(t){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IE=new To(2e3,1e4);async function bE(n,t,e){if(be(n.app))return Promise.reject(Ge(n,"operation-not-supported-in-this-environment"));const r=bi(n);iT(n,t,_u);const s=Xp(r,e);return new ji(r,"signInViaPopup",t,s).executeNotNull()}class ji extends tm{constructor(t,e,r,s,a){super(t,e,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return et(t,this.auth,"internal-error"),t}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const t=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,IE.get())};t()}}ji.currentPopupAction=null;/**
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
 */const AE="pendingRedirect",Ia=new Map;class PE extends tm{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ia.get(this.auth._key());if(!t){try{const r=await SE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ia.set(this.auth._key(),t)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SE(n,t){const e=kE(t),r=RE(n);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function CE(n,t){Ia.set(n._key(),t)}function RE(n){return xn(n._redirectPersistence)}function kE(n){return Ea(AE,n.config.apiKey,n.name)}async function LE(n,t,e=!1){if(be(n.app))return Promise.reject(Nn(n));const r=bi(n),s=Xp(r,t),u=await new PE(r,s,e).execute();return u&&!e&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,t)),u}/**
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
 */const xE=10*60*1e3;class DE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!NE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!em(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ge(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=xE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(t))}saveEventToCache(t){this.cachedEventUids.add(ud(t)),this.lastProcessedEventTime=Date.now()}}function ud(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function em({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function NE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return em(n);default:return!1}}/**
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
 */async function ME(n,t={}){return Ii(n,"GET","/v1/projects",t)}/**
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
 */const OE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VE=/^https?/;async function FE(n){if(n.config.emulator)return;const{authorizedDomains:t}=await ME(n);for(const e of t)try{if(UE(e))return}catch{}Fe(n,"unauthorized-domain")}function UE(n){const t=hl(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&u.hostname===r}if(!VE.test(e))return!1;if(OE.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const BE=new To(3e4,6e4);function hd(){const n=un().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function zE(n){return new Promise((t,e)=>{var s,a,u;function r(){hd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hd(),e(Ge(n,"network-request-failed"))},timeout:BE.get()})}if((a=(s=un().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)t(gapi.iframes.getContext());else if((u=un().gapi)!=null&&u.load)r();else{const d=xT("iframefcb");return un()[d]=()=>{gapi.load?r():e(Ge(n,"network-request-failed"))},Up(`${LT()}?onload=${d}`).catch(p=>e(p))}}).catch(t=>{throw ba=null,t})}let ba=null;function qE(n){return ba=ba||zE(n),ba}/**
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
 */const $E=new To(5e3,15e3),jE="__/auth/iframe",HE="emulator/auth/iframe",WE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZE(n){const t=n.config;et(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?hu(t,HE):`https://${n.config.authDomain}/${jE}`,r={apiKey:t.apiKey,appName:n.name,v:ns},s=GE.get(n.config.apiHost);s&&(r.eid=s);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${e}?${ho(r).slice(1)}`}async function KE(n){const t=await qE(n),e=un().gapi;return et(e,n,"internal-error"),t.open({where:document.body,url:ZE(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WE,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ge(n,"network-request-failed"),d=un().setTimeout(()=>{a(u)},$E.get());function p(){un().clearTimeout(d),s(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const QE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JE=500,YE=600,XE="_blank",tI="http://localhost";class dd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eI(n,t,e,r=JE,s=YE){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p={...QE,width:r.toString(),height:s.toString(),top:a,left:u},g=le().toLowerCase();e&&(d=xp(g)?XE:e),kp(g)&&(t=t||tI,p.scrollbars="yes");const y=Object.entries(p).reduce((E,[S,M])=>`${E}${S}=${M},`,"");if(ET(g)&&d!=="_self")return nI(t||"",d),new dd(null);const w=window.open(t||"",d,y);et(w,n,"popup-blocked");try{w.focus()}catch{}return new dd(w)}function nI(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const iI="__/auth/handler",rI="emulator/auth/handler",sI=encodeURIComponent("fac");async function fd(n,t,e,r,s,a){et(n.config.authDomain,n,"auth-domain-config-required"),et(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:ns,eventId:s};if(t instanceof _u){t.setDefaultLanguage(n.languageCode),u.providerId=t.providerId||"",g_(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(t instanceof Io){const y=t.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),g=p?`#${sI}=${encodeURIComponent(p)}`:"";return`${oI(n)}?${ho(d).slice(1)}${g}`}function oI({config:n}){return n.emulator?hu(n,rI):`https://${n.authDomain}/${iI}`}/**
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
 */const Fc="webStorageSupport";class aI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zp,this._completeRedirectFn=LE,this._overrideRedirectResult=CE}async _openPopup(t,e,r,s){var u;Bn((u=this.eventManagers[t._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await fd(t,e,r,hl(),s);return eI(t,a,gu())}async _openRedirect(t,e,r,s){await this._originValidation(t);const a=await fd(t,e,r,hl(),s);return uE(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:a}=this.eventManagers[e];return s?Promise.resolve(s):(Bn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await KE(t),r=new DE(t);return e.register("authEvent",s=>(et(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Fc,{type:Fc},s=>{var u;const a=(u=s==null?void 0:s[0])==null?void 0:u[Fc];a!==void 0&&e(!!a),Fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=FE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Vp()||Lp()||fu()}}const cI=aI;var pd="@firebase/auth",md="1.13.1";/**
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
 */class lI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){et(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hI(n){Zr(new Zi("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;et(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fp(n)},g=new CT(r,s,a,p);return FT(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Zr(new Zi("auth-internal",t=>{const e=bi(t.getProvider("auth").getImmediate());return(r=>new lI(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),oi(pd,md,uI(n)),oi(pd,md,"esm2020")}/**
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
 */const dI=5*60,fI=Od("authIdTokenMaxAge")||dI;let _d=null;const pI=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>fI)return;const s=e==null?void 0:e.token;_d!==s&&(_d=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mI(n=zd()){const t=wl(n,"auth");if(t.isInitialized())return t.getImmediate();const e=VT(n,{popupRedirectResolver:cI,persistence:[vE,aE,Zp]}),r=Od("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=pI(a.toString());nE(e,u,()=>u(e.currentUser)),eE(e,d=>u(d))}}const s=Nd("auth");return s&&UT(e,`http://${s}`),e}function _I(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}RT({loadJS(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=s=>{const a=Ge("internal-error");a.customData=s,e(a)},r.type="text/javascript",r.charset="UTF-8",_I().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hI("Browser");const nm={apiKey:"AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",authDomain:"trippy-planner-807df.firebaseapp.com",projectId:"trippy-planner-807df",storageBucket:"trippy-planner-807df.firebasestorage.app",messagingSenderId:"376063703433",appId:"1:376063703433:web:..."},im=!!nm.apiKey;let rm=null,sm=null;function gI(){if(!im)return!1;try{const n=Bd(nm);return rm=Ow(n),sm=mI(n),!0}catch(n){return console.warn("Firebase init failed — running in guest mode",n),!1}}const om=()=>im,Ot=()=>rm,Ao=()=>sm;let Xs=null;function yI(n){if(!om()){n(null);return}const t=Ao();if(!t){n(null);return}iE(t,e=>{Xs=e,n(e)})}const Po=()=>Xs;async function vI(){return bE(Ao(),new Rn)}async function wI(n,t){return tE(Ao(),n,t)}async function TI(n,t){return XT(Ao(),n,t)}async function EI(){return rE(Ao())}function dc(n){const t=n.querySelector(".auth-slot");if(t){if(!om()){t.innerHTML='<span class="auth-guest-note">Guest mode</span>';return}if(Xs){const e=Xs.displayName||Xs.email||"User";t.innerHTML=`
      <span class="auth-user-name">${II(e)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `,t.querySelector(".auth-signout-btn").addEventListener("click",()=>EI())}else t.innerHTML='<button class="ghost-btn auth-signin-btn">Sign in</button>',t.querySelector(".auth-signin-btn").addEventListener("click",()=>bI())}}function II(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function bI(){const n=document.getElementById("auth-modal");if(n){n.remove();return}const t=document.createElement("div");t.id="auth-modal",t.className="auth-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t);const e=r=>{t.querySelector("#auth-err").textContent=r};t.querySelector("#auth-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()}),t.querySelector("#auth-google").addEventListener("click",async()=>{try{await vI(),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-signin").addEventListener("click",async()=>{try{await wI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-create").addEventListener("click",async()=>{try{await TI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}})}let Aa={};function AI(n){return Aa=n,window.addEventListener("hashchange",Uc),{start:Uc,refresh:Uc}}function Mn(n){window.location.hash=n}function Uc(){const n=window.location.hash.slice(1)||"/";for(const[t,e]of Object.entries(Aa)){const r=PI(t,n);if(r!==null){e(r);return}}Aa["/"]&&Aa["/"]({})}function PI(n,t){if(n==="/")return t==="/"||t===""?{}:null;const e=n.split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(e.length!==r.length)return null;const s={};for(let a=0;a<e.length;a++)if(e[a].startsWith(":"))s[e[a].slice(1)]=decodeURIComponent(r[a]);else if(e[a]!==r[a])return null;return s}function gd(n,t){var e;return!t||!n?null:n.ownerId===t?"owner":((e=n.members)==null?void 0:e[t])||null}const fc=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),SI=()=>Math.random().toString(36).slice(2,9).toUpperCase(),yd=()=>({id:fc(),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1}),am="trippy-planner-trips",vu=n=>`trippy-trip-${n}`,Wr=()=>{try{return JSON.parse(localStorage.getItem(am)||"[]")}catch{return[]}},cm=n=>{try{localStorage.setItem(am,JSON.stringify(n))}catch{}},li=n=>{try{return JSON.parse(localStorage.getItem(vu(n))||"null")}catch{return null}},Gi=n=>{try{localStorage.setItem(vu(n.id),JSON.stringify(n))}catch{}},CI=n=>{try{localStorage.removeItem(vu(n))}catch{}};function vd(n){return n?typeof(n==null?void 0:n.toMillis)=="function"?n.toMillis():typeof n=="number"?n:0:0}function Ha(n){return{memberUids:[],members:{},ownerName:"",sharedWithFriends:!0,...n,createdAt:vd(n.createdAt),updatedAt:vd(n.updatedAt)}}function RI(n,t,e){let r=[],s=[],a=null,u=null;function d(){const w=[...r];for(const M of s)w.find(V=>V.id===M.id)||w.push(M);w.forEach(M=>Gi(M));const E=new Set(w.map(M=>M.id)),S=Wr().filter(M=>!E.has(M.id)&&!!li(M.id));cm([...w.map(({id:M,name:V,createdAt:U})=>({id:M,name:V,createdAt:U})),...S]),e([...w])}function p(w){a&&(a(),a=null),u&&(u(),u=null);const E=Ot();if(!E||!w)return;const S=es(Ji(E,"trips"),Xi("ownerId","==",w),Jw("updatedAt","desc"));a=ao(S,V=>{const U=V.docs.map(H=>Ha({id:H.id,...H.data()})),J=r.filter(H=>!U.find(W=>W.id===H.id));r=[...U,...J],d()},V=>console.warn("Firestore owned trips:",V));const M=es(Ji(E,"trips"),Xi("memberUids","array-contains",w));u=ao(M,V=>{s=V.docs.map(U=>Ha({id:U.id,...U.data()})),d()},V=>console.warn("Firestore shared trips:",V))}async function g(w){const E=Ot();if(!(!E||!n))try{await sr(Wt(E,"trips",w.id),{...w,createdAt:w.createdAt||ln(),updatedAt:ln()},{merge:!0})}catch(S){console.warn("Firestore write:",S)}}const y=Wr().map(w=>li(w.id)||{...w,days:[]});return r=y,setTimeout(()=>e([...y]),0),n&&p(n),{getAll:()=>{const w=[...r];for(const E of s)w.find(S=>S.id===E.id)||w.push(E);return w},async create(w){const E=fc(),S={id:E,name:w,ownerId:n||null,ownerName:t||"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]};return r.unshift(S),Gi(S),d(),await g(S),E},async delete(w){r=r.filter(S=>S.id!==w),s=s.filter(S=>S.id!==w),CI(w),d();const E=Ot();if(E&&n)try{await Tp(Wt(E,"trips",w))}catch{}},async rename(w,E){const S=this.getAll().find(V=>V.id===w);if(!S)return;S.name=E,S.updatedAt=Date.now(),Gi(S),e([...this.getAll()]);const M=Ot();if(M&&n)try{await Ti(Wt(M,"trips",w),{name:E,updatedAt:ln()})}catch{}},setUserId(w,E){n=w,t=E||"",w?p(w):(a&&(a(),a=null),u&&(u(),u=null),r=Wr().map(S=>li(S.id)||{...S,days:[]}),s=[],e([...r]))},destroy(){a&&(a(),a=null),u&&(u(),u=null)}}}function wd(n){return n.map(t=>`${t.id}|${t.date}|${t.destination}|${t.event}|${t.accommodation}|${t.accomCost}|${t.travelDetails}|${t.travelCost}|${t.travelDay}|${t.finalised}`).join("~")}function lm(n,t,e){let r=li(n)||{id:n,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=Array.isArray(r.days)?r.days:[],a=null,u=null,d=!1;function p(){r.days=s,r.updatedAt=Date.now(),Gi(r)}function g(){clearTimeout(u),d=!0,u=setTimeout(async()=>{const E=Ot();if(!E||!t){d=!1;return}try{await sr(Wt(E,"trips",n),{...r,days:s,updatedAt:ln()},{merge:!0})}catch(S){console.warn("Firestore write:",S)}setTimeout(()=>{d=!1},3e3)},1500)}function y(){p(),t&&g(),e([...s])}function w(){p(),t&&g()}if(t){const E=Ot();E&&(a=ao(Wt(E,"trips",n),S=>{if(!S.exists()||d)return;const M=S.data(),V=Array.isArray(M.days)?M.days:[];wd(V)!==wd(s)&&(r=Ha({id:n,...M}),s=V,p(),e([...s]))},S=>console.warn("Firestore trip:",S)))}return{tripName:()=>r.name||"Trip",tripData:()=>({...r}),getAll:()=>[...s],add(E,S){const M={...yd(),date:E,destination:S};s.push(M),s.sort((V,U)=>V.date.localeCompare(U.date)),y()},addBatch(E,S){E.forEach(M=>s.push({...yd(),date:M,destination:S})),s.sort((M,V)=>M.date.localeCompare(V.date)),y()},update(E,S,M){const V=s.find(U=>U.id===E);V&&(V[S]=M,w())},remove(E){s=s.filter(S=>S.id!==E),y()},loadFromCSV(E){s=E,y()},toCSV(){const E=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],S=s.map(M=>[M.date,M.destination,M.event,M.travelDay?"Y":"N",M.accommodation,M.accomCost,M.travelDetails,M.travelCost,M.finalised?"Y":"N"].map(V=>`"${(V??"").toString().replace(/"/g,'""')}"`).join(","));return[E.join(","),...S].join(`
`)},metrics(){const E=s.length,S=s.filter(U=>U.travelDay).length,M=s.filter(U=>U.finalised).length,V=s.reduce((U,J)=>U+Number(J.accomCost||0)+Number(J.travelCost||0),0);return{total:E,travelDays:S,finalised:M,cost:V}},destroy(){clearTimeout(u),a&&(a(),a=null)}}}async function kI(n,t,e){const r=Ot();if(!r||!e)throw new Error("Must be signed in to share");const s=SI();return await sr(Wt(r,"invites",s),{tripId:n,role:t,createdBy:e,createdAt:ln()}),s}async function LI(n,t){const e=Ot();if(!e)throw new Error("Firebase not configured");const r=await tT(Wt(e,"invites",n));if(!r.exists())throw new Error("Invite not found or already used");const{tripId:s,role:a}=r.data();return await Ti(Wt(e,"trips",s),{[`members.${t}`]:a,memberUids:Zw(t)}),s}async function xI(n,t,e){const r=Ot();r&&await Ti(Wt(r,"trips",n),{[`members.${t}`]:e})}async function DI(n,t){const e=Ot();e&&await Ti(Wt(e,"trips",n),{[`members.${t}`]:Gw(),memberUids:Kw(t)})}async function um(n,t,e){const r=li(t)||{id:t,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=[...r.days,...n.map(u=>({...u,id:fc()}))].sort((u,d)=>u.date.localeCompare(d.date));r.days=s,r.updatedAt=Date.now(),Gi(r);const a=Ot();if(a&&e)try{await Ti(Wt(a,"trips",t),{days:s,updatedAt:ln()})}catch(u){console.warn("copyDaysToTrip Firestore:",u)}}async function NI(n,t){const e=`trippy-migrated-v2-${n}`;if(localStorage.getItem(e))return;const r=Ot();if(!r){localStorage.setItem(e,"1");return}try{const s=await au(Ji(r,"users",n,"trips"));if(s.empty){localStorage.setItem(e,"1");return}for(const a of s.docs){const u=a.data();await sr(Wt(r,"trips",a.id),{...u,id:a.id,ownerId:n,ownerName:t||"",memberUids:u.memberUids||[],members:u.members||{}},{merge:!0})}localStorage.setItem(e,"1")}catch(s){console.warn("Old-path migration failed:",s)}}function MI(){try{const n=localStorage.getItem("trippy-planner-data");if(!n)return null;const t=JSON.parse(n);return!Array.isArray(t)||t.length===0?(localStorage.removeItem("trippy-planner-data"),null):t}catch{return null}}function OI(n,t,e){const r=fc(),s={id:r,name:n,ownerId:e||null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:t};Gi(s);const a=Wr();a.unshift({id:r,name:n,createdAt:s.createdAt}),cm(a),localStorage.removeItem("trippy-planner-data");const u=Ot();return u&&e&&sr(Wt(u,"trips",r),{...s,createdAt:ln(),updatedAt:ln()}).catch(console.warn),r}async function VI(n,t,e){const r=Ot();r&&await sr(Wt(r,"users",n),{uid:n,displayName:t||"",email:(e||"").toLowerCase(),updatedAt:ln()},{merge:!0})}async function FI(n){const t=Ot();if(!t)return null;const e=await au(es(Ji(t,"users"),Xi("email","==",n.toLowerCase().trim())));return e.empty?null:e.docs[0].data()}async function UI(n,t,e,r){const s=Ot();if(!s)return;const a=`${n}_${r.uid}`;await sr(Wt(s,"friendRequests",a),{from:n,fromDisplayName:t||"",fromEmail:(e||"").toLowerCase(),to:r.uid,toDisplayName:r.displayName||"",toEmail:(r.email||"").toLowerCase(),status:"pending",createdAt:ln()})}async function BI(n){const t=Ot();t&&await Ti(Wt(t,"friendRequests",n),{status:"accepted"})}async function zI(n){const t=Ot();t&&await Ti(Wt(t,"friendRequests",n),{status:"declined"})}async function qI(n){const t=Ot();t&&await Tp(Wt(t,"friendRequests",n))}function $I(n,t){const e=Ot();if(!e)return t([],[]),()=>{};let r=[],s=[];const a=()=>t([...r],[...s]),u=ao(es(Ji(e,"friendRequests"),Xi("from","==",n)),p=>{r=p.docs.map(g=>({id:g.id,...g.data()})),a()},p=>console.warn("friendRequests (sent):",p)),d=ao(es(Ji(e,"friendRequests"),Xi("to","==",n)),p=>{s=p.docs.map(g=>({id:g.id,...g.data()})),a()},p=>console.warn("friendRequests (recv):",p));return()=>{u(),d()}}async function jI(n){const t=Ot();if(!t)return[];try{return(await au(es(Ji(t,"trips"),Xi("ownerId","==",n),Xi("sharedWithFriends","==",!0)))).docs.map(r=>Ha({id:r.id,...r.data()}))}catch(e){return console.warn("getFriendTrips:",e),[]}}async function HI(n,t){const e=li(n);e&&(e.sharedWithFriends=t,Gi(e));const r=Ot();if(r)try{await Ti(Wt(r,"trips",n),{sharedWithFriends:t})}catch(s){console.warn("updateTripVisibility:",s)}}const hm=["January","February","March","April","May","June","July","August","September","October","November","December"],WI=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Gr(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function GI(n){if(!n)return"";const[t,e,r]=n.split("-");return`${parseInt(r)} ${hm[parseInt(e)-1]} ${t}`}function Td(n){return"$"+Number(n).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2})}function ZI(n){const t=document.getElementById("cal-day-modal");t&&t.remove();const e=(s,a)=>a?`<div class="cdm-row"><span class="cdm-label">${s}</span><span class="cdm-val">${Gr(String(a))}</span></div>`:"",r=document.createElement("div");r.id="cal-day-modal",r.className="cal-day-modal-overlay",r.innerHTML=`
    <div class="cal-day-modal">
      <button class="cdm-close" id="cdm-close">✕</button>
      <div class="cdm-date">${GI(n.date)}</div>
      <div class="cdm-dest">${Gr(n.destination||"")}</div>
      ${n._tripName?`<div class="cdm-trip-name">${Gr(n._tripName)}</div>`:""}
      <div class="cdm-body">
        ${e("Event / Activity",n.event)}
        ${e("Accommodation",n.accommodation)}
        ${n.accomCost?e("Accom Cost",Td(n.accomCost)):""}
        ${e("Travel Details",n.travelDetails)}
        ${n.travelCost?e("Travel Cost",Td(n.travelCost)):""}
        ${n.finalised||n.travelDay?`
          <div class="cdm-badges">
            ${n.finalised?'<span class="day-badge badge-final">Finalised</span>':""}
            ${n.travelDay?'<span class="day-badge badge-travel">Travel Day</span>':""}
          </div>`:""}
      </div>
    </div>
  `,document.body.appendChild(r),r.querySelector("#cdm-close").addEventListener("click",()=>r.remove()),r.addEventListener("click",s=>{s.target===r&&r.remove()})}function Ur(n,t,e,r,s={}){const a=n.querySelector(s.title||"#cal-title"),u=n.querySelector(s.header||"#cal-days-header"),d=n.querySelector(s.body||"#cal-body");if(!a||!u||!d)return;a.textContent=`${hm[r]} ${e}`,u.innerHTML=WI.map(S=>`<div class="cal-header-cell">${S}</div>`).join("");const p={};t.forEach(S=>{S.date&&(p[S.date]=S)});const g=new Date(e,r,1).getDay(),y=new Date(e,r+1,0).getDate(),w=new Date;let E="";for(let S=0;S<g;S++)E+='<div class="cal-cell empty"></div>';for(let S=1;S<=y;S++){const M=`${e}-${String(r+1).padStart(2,"0")}-${String(S).padStart(2,"0")}`,V=w.getFullYear()===e&&w.getMonth()===r&&w.getDate()===S,U=p[M];let J="cal-cell";V?J+=" today":U&&(J+=" has-trip"),U&&(J+=" cal-clickable");let H=`<div class="cal-date-num${V?" today-num":""}">${S}</div>`;U&&(H+=`<div class="cal-dest">${Gr(U.destination)}</div>`,U.event&&(H+=`<div class="cal-note">${Gr(U.event)}</div>`),U.travelDetails&&(H+=`<div class="cal-travel-note">${Gr(U.travelDetails)}</div>`)),E+=`<div class="${J}"${U?` data-date="${M}"`:""}>${H}</div>`}d.innerHTML=E,d.onclick=S=>{const M=S.target.closest("[data-date]");if(!M)return;const V=p[M.dataset.date];V&&ZI(V)}}function dm(n,t,e){var y;(y=document.getElementById("share-modal-overlay"))==null||y.remove();const r=t.members||{},s=t.memberUids||[],a=t.ownerId===e,u=r[e]||null,d=Object.entries(r).map(([w,E])=>`
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
  `).join(""),p=document.createElement("div");p.className="modal-overlay",p.id="share-modal-overlay",p.style.display="flex",p.innerHTML=`
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
            <div id="share-members-list">${d}</div>
          </div>
        `:""}
      `:`
        <div class="share-section share-viewer-info">
          <span class="role-badge role-${u}">${u||"viewer"}</span>
          <p>Shared with you by <strong>${ii(t.ownerName||"the trip owner")}</strong>.</p>
          ${u!=="editor"?'<p class="share-readonly-note">You have read-only access. Ask the owner for edit access.</p>':"<p>You can view and edit this trip.</p>"}
        </div>
      `}

      <div class="modal-actions">
        <button class="ghost-btn" id="share-close-btn">Close</button>
      </div>
    </div>
  `,document.body.appendChild(p);const g=()=>p.remove();document.getElementById("share-close-btn").addEventListener("click",g),p.addEventListener("click",w=>{w.target===p&&g()}),a&&(document.getElementById("gen-link-btn").addEventListener("click",async()=>{const w=document.getElementById("gen-link-btn");w.textContent="Generating…",w.disabled=!0;try{const E=document.getElementById("invite-role").value,S=await kI(n,E,e),M=`${location.origin}${location.pathname}#/join/${S}`;document.getElementById("invite-link-input").value=M,document.getElementById("copy-link-btn").style.display=""}catch(E){alert("Failed to generate invite link: "+E.message)}finally{w.textContent="Generate",w.disabled=!1}}),document.getElementById("copy-link-btn").addEventListener("click",()=>{const w=document.getElementById("invite-link-input").value;navigator.clipboard.writeText(w).then(()=>{const E=document.getElementById("copy-link-btn");E.textContent="Copied!",setTimeout(()=>{E.textContent="Copy"},2e3)})}),p.addEventListener("change",async w=>{if(!w.target.matches(".share-role-select"))return;const E=w.target.dataset.uid;try{await xI(n,E,w.target.value)}catch(S){console.warn("Role update failed:",S)}}),p.addEventListener("click",async w=>{if(!w.target.matches(".share-remove-btn"))return;const E=w.target.dataset.uid;if(confirm("Remove this collaborator from the trip?"))try{await DI(n,E),w.target.closest(".share-member-row").remove()}catch(S){console.warn("Remove member failed:",S)}}))}function KI(n,t,e){var d;(d=document.getElementById("add-day-overlay"))==null||d.remove();const r=Wr().map(p=>li(p.id)).filter(Boolean).filter(p=>p.id!==t&&(!p.ownerId||p.ownerId===e)),s=r.length?r.map(p=>`<option value="${p.id}">${ii(p.name)}</option>`).join(""):"<option disabled>No own trips — create one first</option>",a=document.createElement("div");a.className="modal-overlay",a.id="add-day-overlay",a.style.display="flex",a.innerHTML=`
    <div class="modal-box add-day-box">
      <div class="modal-title">Add Day to My Trip</div>
      <div class="add-day-preview">
        <div class="add-day-date">${fm(n.date)}</div>
        <div class="add-day-dest">${ii(n.destination||"Unknown")}</div>
        ${n.event?`<div class="add-day-field">${ii(n.event)}</div>`:""}
        ${n.travelDetails?`<div class="add-day-field muted">${ii(n.travelDetails)}</div>`:""}
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
  `,document.body.appendChild(a);const u=()=>a.remove();document.getElementById("add-day-cancel").addEventListener("click",u),a.addEventListener("click",p=>{p.target===a&&u()}),document.getElementById("add-day-confirm").addEventListener("click",async()=>{var w;const p=document.getElementById("add-day-target").value,g=((w=r.find(E=>E.id===p))==null?void 0:w.name)||"trip",y=document.getElementById("add-day-confirm");y.textContent="Adding…",y.disabled=!0;try{await um([n],p,e),u(),QI(`Day added to "${g}"`)}catch(E){alert("Could not add day: "+E.message),y.textContent="Add Day",y.disabled=!1}})}function QI(n){const t=document.createElement("div");t.className="toast-success",t.textContent=n,document.body.appendChild(t),setTimeout(()=>t.remove(),2800)}function JI(n,t,e){var g;(g=document.getElementById("copy-days-overlay"))==null||g.remove();const r=Wr().map(y=>li(y.id)).filter(Boolean),s=e?r.filter(y=>y.id!==n&&(y.ownerId===e||!y.ownerId)):r.filter(y=>y.id!==n),a=s.length?s.map(y=>`<option value="${y.id}">${ii(y.name)}</option>`).join(""):"<option disabled>No own trips found — create one first</option>",u=t.map((y,w)=>`
    <label class="copy-day-row">
      <input type="checkbox" class="copy-day-check" value="${w}">
      <span class="copy-day-date">${fm(y.date)}</span>
      <span class="copy-day-dest">${ii(y.destination||"Unknown")}</span>
      ${y.event?`<span class="copy-day-event">${ii(y.event)}</span>`:""}
    </label>
  `).join(""),d=document.createElement("div");d.className="modal-overlay",d.id="copy-days-overlay",d.style.display="flex",d.innerHTML=`
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
  `,document.body.appendChild(d);const p=()=>d.remove();document.getElementById("copy-cancel-btn").addEventListener("click",p),d.addEventListener("click",y=>{y.target===d&&p()}),document.getElementById("copy-select-all").addEventListener("click",()=>{d.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!0})}),document.getElementById("copy-select-none").addEventListener("click",()=>{d.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!1})}),document.getElementById("copy-confirm-btn").addEventListener("click",async()=>{const y=[...d.querySelectorAll(".copy-day-check:checked")];if(!y.length){alert("Select at least one day.");return}const w=y.map(M=>t[Number(M.value)]),E=document.getElementById("copy-target-trip").value,S=document.getElementById("copy-confirm-btn");S.textContent="Copying…",S.disabled=!0;try{await um(w,E,e),p(),alert(`${w.length} day${w.length!==1?"s":""} copied successfully.`)}catch(M){console.warn("Copy failed:",M),alert("Copy failed: "+M.message),S.textContent="Copy selected",S.disabled=!1}})}function ii(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function fm(n){if(!n)return"";const[t,e,r]=n.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}let Bs=null;const YI={title:"#fl-cal-title",header:"#fl-cal-header",body:"#fl-cal-body"};function XI(n,t){if(!t)return n.innerHTML=`
      <div class="empty-state" style="margin-top:60px">
        <div class="empty-icon">👥</div>
        <p>Sign in to use Trippy Friends.</p>
      </div>`,()=>{};let e=[],r=[],s=null,a=[],u=new Date().getFullYear(),d=new Date().getMonth();n.innerHTML=`
    <div class="friends-layout">

      <div class="friends-panel">
        <div class="friends-search-row">
          <input class="dark-input friends-email-input" id="fl-email"
            type="email" placeholder="Add friend by email">
          <button class="add-btn" id="fl-add-btn">Add</button>
        </div>
        <div id="fl-status" class="fl-status"></div>
        <div id="fl-panel-body" class="fl-panel-body"></div>
      </div>

      <div class="friends-cal-panel">
        <div class="friends-cal-placeholder" id="fl-placeholder">
          <div class="empty-icon">👥</div>
          <p>Accept a friend request, then select a friend to view their calendar</p>
        </div>
        <div id="fl-cal-view" style="display:none">
          <div class="friends-cal-header">
            <span class="friends-cal-name" id="fl-cal-name"></span>
            <div class="cal-nav">
              <button class="cal-nav-btn" id="fl-prev">&#8249; Prev</button>
              <span class="cal-title" id="fl-cal-title"></span>
              <button class="cal-nav-btn" id="fl-next">Next &#8250;</button>
            </div>
          </div>
          <div class="cal-grid" id="fl-cal-header"></div>
          <div style="height:6px"></div>
          <div class="cal-grid" id="fl-cal-body"></div>
        </div>
      </div>

    </div>
  `;function p(){n.querySelector("#fl-placeholder").style.display="",n.querySelector("#fl-cal-view").style.display="none"}function g(){const H=a.flatMap(W=>(W.days||[]).map(ut=>({...ut,_tripName:W.name}))).sort((W,ut)=>W.date.localeCompare(ut.date));Ur(n,H,u,d,YI)}async function y(H){if(s=H,Bs=(H==null?void 0:H.uid)||null,!H){p();return}n.querySelector("#fl-placeholder").style.display="none",n.querySelector("#fl-cal-view").style.display="",n.querySelector("#fl-cal-name").textContent=H.displayName||H.email||"Friend",a=await jI(H.uid),g()}function w(){const H=new Set,W=[...e.filter(I=>I.status==="accepted").map(I=>({uid:I.to,displayName:I.toDisplayName,email:I.toEmail,reqId:I.id})),...r.filter(I=>I.status==="accepted").map(I=>({uid:I.from,displayName:I.fromDisplayName,email:I.fromEmail,reqId:I.id}))].filter(I=>H.has(I.uid)?!1:(H.add(I.uid),!0)),ut=r.filter(I=>I.status==="pending"),pt=e.filter(I=>I.status==="pending"),at=n.querySelector("#fl-panel-body");let C="";ut.length&&(C+=`<div class="fl-section-label">Requests (${ut.length})</div>`,C+=ut.map(I=>`
        <div class="fl-request-item" data-reqid="${I.id}">
          <div class="fl-friend-info">
            <div class="fl-friend-name">${Sn(I.fromDisplayName||I.fromEmail)}</div>
            <div class="fl-friend-email">${Sn(I.fromEmail)}</div>
          </div>
          <button class="fl-accept-btn add-btn"   data-reqid="${I.id}" data-uid="${I.from}" data-name="${Sn(I.fromDisplayName)}" data-email="${Sn(I.fromEmail)}">✓</button>
          <button class="fl-decline-btn ghost-btn" data-reqid="${I.id}">✕</button>
        </div>
      `).join("")),C+=`<div class="fl-section-label">${W.length?`Friends (${W.length})`:"Friends"}</div>`,W.length?C+=W.map(I=>`
          <div class="fl-friend-item ${(s==null?void 0:s.uid)===I.uid?"selected":""}"
            data-uid="${I.uid}" data-reqid="${I.reqId}"
            data-name="${Sn(I.displayName)}" data-email="${Sn(I.email)}">
            <div class="fl-friend-info">
              <div class="fl-friend-name">${Sn(I.displayName||I.email)}</div>
              <div class="fl-friend-email">${Sn(I.email)}</div>
            </div>
            <button class="fl-remove-btn" data-reqid="${I.reqId}" data-uid="${I.uid}" title="Remove">×</button>
          </div>`).join(""):C+='<p class="fl-empty">No friends yet — send a request above.</p>',pt.length&&(C+='<div class="fl-section-label">Pending</div>',C+=pt.map(I=>`
        <div class="fl-pending-item">
          <div class="fl-friend-info">
            <div class="fl-friend-name">${Sn(I.toDisplayName||I.toEmail)}</div>
            <div class="fl-friend-email">Awaiting response…</div>
          </div>
          <button class="fl-remove-btn" data-reqid="${I.id}" title="Cancel request">×</button>
        </div>
      `).join("")),at.innerHTML=C,at.querySelectorAll(".fl-accept-btn").forEach(I=>{I.addEventListener("click",async()=>{I.disabled=!0,await BI(I.dataset.reqid),y({uid:I.dataset.uid,displayName:I.dataset.name,email:I.dataset.email})})}),at.querySelectorAll(".fl-decline-btn").forEach(I=>{I.addEventListener("click",async()=>{I.disabled=!0,await zI(I.dataset.reqid)})}),at.querySelectorAll(".fl-friend-item").forEach(I=>{I.addEventListener("click",P=>{P.target.closest(".fl-remove-btn")||y({uid:I.dataset.uid,displayName:I.dataset.name,email:I.dataset.email})})}),at.querySelectorAll(".fl-remove-btn").forEach(I=>{I.addEventListener("click",async()=>{I.disabled=!0,(s==null?void 0:s.uid)===I.dataset.uid&&(s=null,Bs=null,p()),await qI(I.dataset.reqid)})})}const E=n.querySelector("#fl-email"),S=n.querySelector("#fl-add-btn"),M=n.querySelector("#fl-status");function V(H,W){M.textContent=H,M.className=`fl-status ${W?"error":"success"}`}async function U(){const H=E.value.trim();if(H){S.disabled=!0,S.textContent="…",M.textContent="";try{const W=await FI(H);if(!W)V("No account found. Ask your friend to open Trippy Planner first.",!0);else if(W.uid===t)V("You can't add yourself.",!0);else if(e.some(ut=>ut.to===W.uid))V("You already have a request with this person.",!0);else{const ut=Po();await UI(t,(ut==null?void 0:ut.displayName)||"",(ut==null?void 0:ut.email)||"",W),E.value="",V(`Request sent to ${W.displayName||W.email}!`,!1)}}catch{V("Something went wrong. Try again.",!0)}finally{S.disabled=!1,S.textContent="Add"}}}return S.addEventListener("click",U),E.addEventListener("keydown",H=>{H.key==="Enter"&&U()}),n.querySelector("#fl-prev").addEventListener("click",()=>{d--,d<0&&(d=11,u--),s&&g()}),n.querySelector("#fl-next").addEventListener("click",()=>{d++,d>11&&(d=0,u++),s&&g()}),$I(t,(H,W)=>{if(e=H,r=W,w(),Bs&&!s){const ut=H.find(pt=>pt.status==="accepted"&&pt.to===Bs);if(ut)y({uid:ut.to,displayName:ut.toDisplayName,email:ut.toEmail});else{const pt=W.find(at=>at.status==="accepted"&&at.from===Bs);pt&&y({uid:pt.from,displayName:pt.fromDisplayName,email:pt.fromEmail})}}})}function Sn(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}let Ie=null,Ae=null,sn="all",fe="trips",ml=new Date().getFullYear(),qi=new Date().getMonth();function pm(n){const t=Po(),e=(t==null?void 0:t.uid)||null,r=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"";Ie&&(Ie.destroy(),Ie=null),Ie=RI(e,r,s=>{const a=window.location.hash;if(a!=="#/"&&a!=="#"&&a!==""){Ae==null||Ae(),Ae=null,Ie==null||Ie.destroy(),Ie=null;return}mm(n,s,e)})}function mm(n,t,e){var p,g,y,w;Ae==null||Ae(),Ae=null;const r=MI(),s=eb(t,e);n.innerHTML=`
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="auth-slot"></div>
    </div>

    <div class="landing-tabs">
      <button class="landing-tab ${fe==="trips"?"active":""}" data-ltab="trips">Trips</button>
      <button class="landing-tab ${fe==="calendar"?"active":""}" data-ltab="calendar">Calendar</button>
      <button class="landing-tab ${fe==="friends"?"active":""}" data-ltab="friends">Trippy Friends</button>
    </div>

    <!-- ── Trips view ──────────────────────────────────────────────────── -->
    <div id="lv-trips" ${fe!=="trips"?'style="display:none"':""}>
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
          <button class="filter-tab ${sn==="all"?"active":""}" data-filter="all">All Trips</button>
          <button class="filter-tab ${sn==="mine"?"active":""}" data-filter="mine">My Trips</button>
          <button class="filter-tab ${sn==="shared"?"active":""}" data-filter="shared">Shared with Me</button>
          <button class="filter-tab ${sn==="past"?"active":""}" data-filter="past">Past Trips</button>
        </div>
      `:""}

      ${s.length===0?`
        <div class="empty-state">
          <div class="empty-icon">✈</div>
          <p>${nb()}</p>
        </div>
      `:`
        <div class="landing-grid" id="trips-grid">
          ${s.map(E=>tb(E,e)).join("")}
        </div>
      `}
    </div>

    <!-- ── Calendar view ───────────────────────────────────────────────── -->
    <div id="lv-calendar" ${fe!=="calendar"?'style="display:none"':""}>
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

    <!-- ── Friends view ─────────────────────────────────────────────────── -->
    <div id="lv-friends" ${fe!=="friends"?'style="display:none"':""}></div>

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
  `,dc(n),n.querySelectorAll("[data-ltab]").forEach(E=>{E.addEventListener("click",()=>{fe=E.dataset.ltab,n.querySelector("#lv-trips").style.display=fe==="trips"?"":"none",n.querySelector("#lv-calendar").style.display=fe==="calendar"?"":"none",n.querySelector("#lv-friends").style.display=fe==="friends"?"":"none",n.querySelectorAll(".landing-tab").forEach(S=>S.classList.toggle("active",S.dataset.ltab===fe)),fe==="calendar"&&fa(n,t,e),fe==="friends"&&Ed(n,e)})}),fe==="calendar"&&fa(n,t,e),fe==="friends"&&Ed(n,e),(p=n.querySelector("#cal-prev"))==null||p.addEventListener("click",()=>{qi--,qi<0&&(qi=11,ml--),fa(n,t,e)}),(g=n.querySelector("#cal-next"))==null||g.addEventListener("click",()=>{qi++,qi>11&&(qi=0,ml++),fa(n,t,e)}),r&&(n.querySelector("#mig-save").addEventListener("click",()=>{const E=n.querySelector("#mig-name").value.trim()||"My Trip";OI(E,r,e),pm(n)}),n.querySelector("#mig-skip").addEventListener("click",()=>{localStorage.removeItem("trippy-planner-data"),n.querySelector("#mig-banner").remove()})),n.querySelectorAll(".filter-tab").forEach(E=>{E.addEventListener("click",()=>{sn=E.dataset.filter,mm(n,Ie.getAll(),e)})});const a=n.querySelector("#new-trip-modal"),u=n.querySelector("#trip-name-input");(y=n.querySelector("#new-trip-btn"))==null||y.addEventListener("click",()=>{a.style.display="flex",u.focus()}),n.querySelector("#modal-cancel").addEventListener("click",()=>{a.style.display="none",u.value=""}),a.addEventListener("click",E=>{E.target===a&&(a.style.display="none",u.value="")});async function d(){const E=u.value.trim();if(!E){u.focus();return}a.style.display="none",u.value="";const S=await Ie.create(E);Mn(`/trip/${S}`)}n.querySelector("#modal-create").addEventListener("click",d),u.addEventListener("keydown",E=>{E.key==="Enter"&&d(),E.key==="Escape"&&(a.style.display="none",u.value="")}),(w=n.querySelector("#trips-grid"))==null||w.addEventListener("click",async E=>{const S=E.target.closest("[data-trip-id]");if(!S)return;const M=S.dataset.tripId,V=Ie.getAll().find(U=>U.id===M);if(E.target.closest(".vis-btn")){const U=E.target.closest(".vis-btn"),J=U.classList.contains("vis-on");if(!(!e||!(V!=null&&V.ownerId)||V.ownerId===e))return;U.classList.toggle("vis-on",!J),U.classList.toggle("vis-off",J),U.title=J?"Hidden from friends — click to show":"Visible to friends — click to hide",HI(M,!J);return}if(E.target.closest(".trip-open-btn"))Mn(`/trip/${M}`);else if(E.target.closest(".trip-globe-btn"))Mn(`/globe/${M}`);else if(E.target.closest(".trip-share-btn")){if(!e){alert("Sign in to share trips.");return}dm(M,V,e)}else if(E.target.closest(".trip-delete-btn"))confirm("Delete this trip? This cannot be undone.")&&await Ie.delete(M);else if(E.target.closest(".trip-card-title")){if(!(!e||!(V!=null&&V.ownerId)||V.ownerId===e))return;const J=E.target.closest(".trip-card-title"),H=J.textContent.trim(),W=document.createElement("input");W.className="dark-input trip-rename-input",W.value=H,J.replaceWith(W),W.focus(),W.select();const ut=async()=>{const pt=W.value.trim()||H;await Ie.rename(M,pt)};W.addEventListener("blur",ut),W.addEventListener("keydown",pt=>{pt.key==="Enter"&&W.blur()})}})}function Ed(n,t){Ae==null||Ae(),Ae=null;const e=n.querySelector("#lv-friends");e&&(Ae=XI(e,t))}function fa(n,t,e){const r=e?t.filter(u=>!u.ownerId||u.ownerId===e):t,s=new Set,a=r.flatMap(u=>(u.days||[]).map(d=>({...d,_tripName:u.name}))).filter(u=>!u.date||s.has(u.date)?!1:(s.add(u.date),!0)).sort((u,d)=>u.date.localeCompare(d.date));Ur(n,a,ml,qi)}function tb(n,t){var V;const e=n.days||[],{total:r,finalised:s,cost:a}=ib(e),u=r?Math.round(s/r*100):0,d=e.length?`${bd(e[0].date)} – ${bd(e[e.length-1].date)}`:"No days yet",p=[...new Set(e.map(U=>U.destination).filter(Boolean))],g=p.slice(0,3),y=!t||!n.ownerId||n.ownerId===t,w=n.ownerId&&t&&n.ownerId!==t?((V=n.members)==null?void 0:V[t])||"viewer":null,E=(n.memberUids||[]).length,S=n.sharedWithFriends!==!1,M=_l(n);return`
    <div class="trip-card ${w?"trip-card-shared":""} ${M?"trip-card-past":""}" data-trip-id="${n.id}">
      ${y&&t?`
        <button class="vis-btn ${S?"vis-on":"vis-off"}"
          title="${S?"Visible to friends — click to hide":"Hidden from friends — click to show"}">👁</button>
      `:""}
      <div class="trip-card-top">
        <div class="trip-card-title-row">
          <div class="trip-card-title">${Bc(n.name)}</div>
          ${w?`<span class="role-badge role-${w}">${w}</span>`:""}
          ${y&&E>0?`<span class="collab-count" title="${E} collaborator${E!==1?"s":""}">👥 ${E}</span>`:""}
        </div>
        <div class="trip-card-meta">
          ${w?`<span class="trip-card-owner">by ${Bc(n.ownerName||"Unknown")}</span>`:""}
          <span class="trip-card-range">${d}</span>
        </div>
      </div>
      ${g.length?`
        <div class="trip-card-dests">
          ${g.map(U=>`<span class="dest-tag">${Bc(U)}</span>`).join("")}
          ${p.length>3?`<span class="dest-tag dest-more">+${p.length-3} more</span>`:""}
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
  `}function _l(n){const t=(n.days||[]).map(r=>r.date).filter(Boolean).sort();if(!t.length)return!1;const e=new Date().toISOString().slice(0,10);return t[t.length-1]<e}function Id(n){return(n.days||[]).map(e=>e.date).filter(Boolean).sort()[0]||"9999-99-99"}function eb(n,t){const e=s=>[...s].sort((a,u)=>Id(a).localeCompare(Id(u)));if(sn==="past")return e(n.filter(s=>_l(s)));const r=n.filter(s=>!_l(s));return e(sn==="mine"?r.filter(s=>!t||!s.ownerId||s.ownerId===t):sn==="shared"?r.filter(s=>t&&s.ownerId&&s.ownerId!==t):r)}function nb(){return sn==="past"?"No past trips yet.":sn==="shared"?"No trips have been shared with you yet.":"No trips yet — create your first one above."}function ib(n){return{total:n.length,finalised:n.filter(t=>t.finalised).length,cost:n.reduce((t,e)=>t+Number(e.accomCost||0)+Number(e.travelCost||0),0)}}function bd(n){if(!n)return"";const[t,e,r]=n.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}function Bc(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const Ad=["January","February","March","April","May","June","July","August","September","October","November","December"],rb=["Su","Mo","Tu","We","Th","Fr","Sa"];class Pd{constructor(t,e,r){this.wrap=t,this.input=e,this.onSelect=r,this.selected=null;const s=new Date;this.year=s.getFullYear(),this.month=s.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",t=>{this.wrap.contains(t.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(t){this.month+=t,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const t=this._dropdown.querySelector("#dp-month-label"),e=this._dropdown.querySelector("#dp-grid");t.textContent=`${Ad[this.month]} ${this.year}`;const r=new Date(this.year,this.month,1).getDay(),s=new Date(this.year,this.month+1,0).getDate(),a=new Date;let u=rb.map(d=>`<div class="dp-dh">${d}</div>`).join("");for(let d=0;d<r;d++)u+='<button class="dp-day empty" disabled></button>';for(let d=1;d<=s;d++){const p=this.dateString(this.year,this.month+1,d),g=this.selected===p,y=a.getFullYear()===this.year&&a.getMonth()===this.month&&a.getDate()===d;let w="dp-day";g?w+=" selected":y&&(w+=" today"),u+=`<button class="${w}" data-date="${p}">${d}</button>`}e.innerHTML=u,e.querySelectorAll(".dp-day:not(.empty)").forEach(d=>{d.addEventListener("click",()=>{this.selected=d.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(t,e,r){return`${t}-${String(e).padStart(2,"0")}-${String(r).padStart(2,"0")}`}formatDisplay(t){const[e,r,s]=t.split("-");return`${s} ${Ad[parseInt(r)-1]} ${e}`}reset(){this.selected=null,this.input.value=""}}const sb=["January","February","March","April","May","June","July","August","September","October","November","December"];function ob(n){if(!n)return"";const[t,e,r]=n.split("-");return`${r} ${sb[parseInt(e)-1]} ${t}`}function pa(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function ab(n,t,e,r,s,a={}){const u=e.metrics(),d=n.querySelector("#metrics-row");d&&(d.style.display=t.length?"grid":"none",n.querySelector("#m-days").textContent=u.total,n.querySelector("#m-travel").textContent=u.travelDays,n.querySelector("#m-cost").textContent="$"+Number(u.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const p=n.querySelector("#progress-wrap");if(p)if(t.length){p.style.display="block";const y=u.total?Math.round(u.finalised/u.total*100):0;n.querySelector("#progress-fill").style.width=y+"%",n.querySelector("#progress-count").textContent=`${u.finalised} / ${u.total} days finalised`}else p.style.display="none";const g=n.querySelector("#itinerary-list");if(g){if(t.length===0){g.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}g.innerHTML=t.map(y=>{const w=r===y.id,E=y.finalised?'<span class="day-badge badge-final">Finalised</span>':y.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',S=w?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${y.id}" data-field="event"
              value="${pa(y.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${y.id}" data-field="accommodation"
              value="${pa(y.accommodation)}" placeholder="Hotel / Airbnb name">
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
              value="${pa(y.travelDetails)}" placeholder="Flight / train / driving info">
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
          <div class="day-date">${ob(y.date)}</div>
          <div class="day-dest">${pa(y.destination)}</div>
          ${E}
          <span class="chevron${w?" open":""}">&#9654;</span>
          ${a.onAddDay?`<button class="add-to-my-trip-btn" data-addday="${y.id}" title="Add this day to one of your trips">＋ Add</button>`:""}
        </div>
        ${S}
      </div>`}).join(""),g.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.toggle;s(r===w?null:w)})}),a.onAddDay&&g.querySelectorAll("[data-addday]").forEach(y=>{y.addEventListener("click",w=>{w.stopPropagation();const E=t.find(S=>S.id===y.dataset.addday);E&&a.onAddDay(E)})}),g.querySelectorAll("[data-field]").forEach(y=>{const w=()=>{const E=y.type==="checkbox"?y.checked:y.value;e.update(y.dataset.id,y.dataset.field,E)};y.addEventListener(y.type==="checkbox"?"change":"blur",w)}),g.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&e.remove(y.dataset.delete)})})}}let Xt=null;function Sd(n,t){const e=[],r=new Date(n+"T00:00:00"),s=new Date(t+"T00:00:00");for(;r<=s;)e.push(r.toISOString().slice(0,10)),r.setDate(r.getDate()+1);return e}function cb(n,t){Xt&&(Xt.destroy(),Xt=null);const e=Po(),r=(e==null?void 0:e.uid)||null;Xt=lm(t,r,at=>{d=at,W()});let s=Xt.tripData(),a=gd(s,r),u=a==="viewer";n.innerHTML=`
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
            <label>Start Date</label>
            <input class="dark-input" id="new-date-display"
              placeholder="Pick a date" readonly>
          </div>
          <div class="field-group date-picker-wrap" id="dp-end-wrap">
            <label>End Date <span class="label-optional">(optional)</span></label>
            <input class="dark-input" id="new-end-date-display"
              placeholder="Same day" readonly>
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
  `;let d=Xt.getAll(),p=null,g="planner";const y=new Date;let w=y.getFullYear(),E=y.getMonth();n.querySelector("#trip-name-label").textContent=Xt.tripName(),dc(n);function S(){s=Xt.tripData(),a=gd(s,r),u=a==="viewer";const at=n.querySelector("#share-trip-btn"),C=n.querySelector("#copy-days-btn");a==="owner"&&r?(at.style.display="",C.style.display="none"):a==="viewer"?(at.style.display="none",C.style.display=""):a==="editor"&&(at.style.display="none",C.style.display="none")}S(),n.querySelector("#back-btn").addEventListener("click",()=>Mn("/")),n.querySelector("#globe-nav-btn").addEventListener("click",()=>Mn(`/globe/${t}`)),n.querySelector("#share-trip-btn").addEventListener("click",()=>{dm(t,Xt.tripData(),r)}),n.querySelector("#copy-days-btn").addEventListener("click",()=>{JI(t,Xt.getAll(),r)});let M=null,V=null,U=null,J=null;if(!u){let R=function(){if(M&&V&&V>M){const lt=Sd(M,V).length;k.textContent=`+ Add ${lt} Days`}else k.textContent="+ Add Day"},b=function(){const lt=x.value.trim();if(!M||!lt){C.style.borderColor=M?"":"var(--accent)",x.style.borderColor=lt?"":"var(--accent)";return}C.style.borderColor="",x.style.borderColor="",V&&V>=M?Xt.addBatch(Sd(M,V),lt):Xt.add(M,lt),M=null,V=null,U.reset(),J.reset(),R(),x.value="",x.focus()};var ut=R,pt=b;const at=n.querySelector("#dp-wrap"),C=n.querySelector("#new-date-display"),I=n.querySelector("#dp-end-wrap"),P=n.querySelector("#new-end-date-display"),k=n.querySelector("#add-btn");U=new Pd(at,C,lt=>{M=lt,R()}),U.init(),J=new Pd(I,P,lt=>{V=lt,R()}),J.init();const x=n.querySelector("#new-dest");n.querySelector("#add-btn").addEventListener("click",b),x.addEventListener("keydown",lt=>{lt.key==="Enter"&&b()}),n.querySelector("#download-btn").addEventListener("click",()=>{const lt=new Blob([Xt.toCSV()],{type:"text/csv"}),ee=document.createElement("a");ee.href=URL.createObjectURL(lt),ee.download=`${Xt.tripName().replace(/\s+/g,"_")}.csv`,ee.click(),URL.revokeObjectURL(ee.href)}),n.querySelector("#upload-btn").addEventListener("click",()=>{n.querySelector("#upload-input").click()}),n.querySelector("#upload-input").addEventListener("change",lt=>{const ee=lt.target.files[0];if(!ee)return;const Zt=new FileReader;Zt.onload=fn=>{const pn=fn.target.result.trim().split(`
`).slice(1).map(X=>{const Ct=(X.match(/(".*?"|[^,]+)/g)||[]).map(jt=>jt.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:Ct[0]||"",destination:Ct[1]||"",event:Ct[2]||"",travelDay:Ct[3]==="Y",accommodation:Ct[4]||"",accomCost:parseFloat(Ct[5])||0,travelDetails:Ct[6]||"",travelCost:parseFloat(Ct[7])||0,finalised:Ct[8]==="Y"}}).filter(X=>X.date&&X.destination);Xt.loadFromCSV(pn)},Zt.readAsText(ee),lt.target.value=""})}n.querySelectorAll(".tab").forEach(at=>{at.addEventListener("click",()=>{g=at.dataset.tab,n.querySelectorAll(".tab").forEach(C=>C.classList.toggle("active",C.dataset.tab===g)),n.querySelector("#tab-planner").style.display=g==="planner"?"":"none",n.querySelector("#tab-calendar").style.display=g==="calendar"?"":"none",g==="calendar"&&Ur(n,d,w,E)})}),n.querySelector("#cal-prev").addEventListener("click",()=>{E--,E<0&&(E=11,w--),Ur(n,d,w,E)}),n.querySelector("#cal-next").addEventListener("click",()=>{E++,E>11&&(E=0,w++),Ur(n,d,w,E)});function H(){return u?new Proxy(Xt,{get(at,C){return["add","update","remove","loadFromCSV"].includes(C)?()=>{}:at[C]}}):Xt}function W(){S(),n.querySelector("#trip-name-label").textContent=Xt.tripName();const at=r&&a!=="owner"?{onAddDay:C=>KI(C,t,r)}:{};ab(n,d,H(),p,C=>{p=C,W()},at),g==="calendar"&&Ur(n,d,w,E)}W()}var lb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ub(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gl={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(n,t){(function(e,r){r(t)})(lb,function(e){var r="1.9.4";function s(i){var o,l,h,m;for(l=1,h=arguments.length;l<h;l++){m=arguments[l];for(o in m)i[o]=m[o]}return i}var a=Object.create||function(){function i(){}return function(o){return i.prototype=o,new i}}();function u(i,o){var l=Array.prototype.slice;if(i.bind)return i.bind.apply(i,l.call(arguments,1));var h=l.call(arguments,2);return function(){return i.apply(o,h.length?h.concat(l.call(arguments)):arguments)}}var d=0;function p(i){return"_leaflet_id"in i||(i._leaflet_id=++d),i._leaflet_id}function g(i,o,l){var h,m,v,A;return A=function(){h=!1,m&&(v.apply(l,m),m=!1)},v=function(){h?m=arguments:(i.apply(l,arguments),setTimeout(A,o),h=!0)},v}function y(i,o,l){var h=o[1],m=o[0],v=h-m;return i===h&&l?i:((i-m)%v+v)%v+m}function w(){return!1}function E(i,o){if(o===!1)return i;var l=Math.pow(10,o===void 0?6:o);return Math.round(i*l)/l}function S(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function M(i){return S(i).split(/\s+/)}function V(i,o){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?a(i.options):{});for(var l in o)i.options[l]=o[l];return i.options}function U(i,o,l){var h=[];for(var m in i)h.push(encodeURIComponent(l?m.toUpperCase():m)+"="+encodeURIComponent(i[m]));return(!o||o.indexOf("?")===-1?"?":"&")+h.join("&")}var J=/\{ *([\w_ -]+) *\}/g;function H(i,o){return i.replace(J,function(l,h){var m=o[h];if(m===void 0)throw new Error("No value provided for variable "+l);return typeof m=="function"&&(m=m(o)),m})}var W=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function ut(i,o){for(var l=0;l<i.length;l++)if(i[l]===o)return l;return-1}var pt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function at(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var C=0;function I(i){var o=+new Date,l=Math.max(0,16-(o-C));return C=o+l,window.setTimeout(i,l)}var P=window.requestAnimationFrame||at("RequestAnimationFrame")||I,k=window.cancelAnimationFrame||at("CancelAnimationFrame")||at("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function R(i,o,l){if(l&&P===I)i.call(o);else return P.call(window,u(i,o))}function x(i){i&&k.call(window,i)}var b={__proto__:null,extend:s,create:a,bind:u,get lastId(){return d},stamp:p,throttle:g,wrapNum:y,falseFn:w,formatNum:E,trim:S,splitWords:M,setOptions:V,getParamString:U,template:H,isArray:W,indexOf:ut,emptyImageUrl:pt,requestFn:P,cancelFn:k,requestAnimFrame:R,cancelAnimFrame:x};function lt(){}lt.extend=function(i){var o=function(){V(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,h=a(l);h.constructor=o,o.prototype=h;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(o[m]=this[m]);return i.statics&&s(o,i.statics),i.includes&&(ee(i.includes),s.apply(null,[h].concat(i.includes))),s(h,i),delete h.statics,delete h.includes,h.options&&(h.options=l.options?a(l.options):{},s(h.options,i.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,A=h._initHooks.length;v<A;v++)h._initHooks[v].call(this)}},o},lt.include=function(i){var o=this.prototype.options;return s(this.prototype,i),i.options&&(this.prototype.options=o,this.mergeOptions(i.options)),this},lt.mergeOptions=function(i){return s(this.prototype.options,i),this},lt.addInitHook=function(i){var o=Array.prototype.slice.call(arguments,1),l=typeof i=="function"?i:function(){this[i].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function ee(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=W(i)?i:[i];for(var o=0;o<i.length;o++)i[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Zt={on:function(i,o,l){if(typeof i=="object")for(var h in i)this._on(h,i[h],o);else{i=M(i);for(var m=0,v=i.length;m<v;m++)this._on(i[m],o,l)}return this},off:function(i,o,l){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var h in i)this._off(h,i[h],o);else{i=M(i);for(var m=arguments.length===1,v=0,A=i.length;v<A;v++)m?this._off(i[v]):this._off(i[v],o,l)}return this},_on:function(i,o,l,h){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(i,o,l)===!1){l===this&&(l=void 0);var m={fn:o,ctx:l};h&&(m.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(m)}},_off:function(i,o,l){var h,m,v;if(this._events&&(h=this._events[i],!!h)){if(arguments.length===1){if(this._firingCount)for(m=0,v=h.length;m<v;m++)h[m].fn=w;delete this._events[i];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var A=this._listens(i,o,l);if(A!==!1){var N=h[A];this._firingCount&&(N.fn=w,this._events[i]=h=h.slice()),h.splice(A,1)}}},fire:function(i,o,l){if(!this.listens(i,l))return this;var h=s({},o,{type:i,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var m=this._events[i];if(m){this._firingCount=this._firingCount+1||1;for(var v=0,A=m.length;v<A;v++){var N=m[v],F=N.fn;N.once&&this.off(i,F,N.ctx),F.call(N.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(i,o,l,h){typeof i!="string"&&console.warn('"string" type argument expected');var m=o;typeof o!="function"&&(h=!!o,m=void 0,l=void 0);var v=this._events&&this._events[i];if(v&&v.length&&this._listens(i,m,l)!==!1)return!0;if(h){for(var A in this._eventParents)if(this._eventParents[A].listens(i,o,l,h))return!0}return!1},_listens:function(i,o,l){if(!this._events)return!1;var h=this._events[i]||[];if(!o)return!!h.length;l===this&&(l=void 0);for(var m=0,v=h.length;m<v;m++)if(h[m].fn===o&&h[m].ctx===l)return m;return!1},once:function(i,o,l){if(typeof i=="object")for(var h in i)this._on(h,i[h],o,!0);else{i=M(i);for(var m=0,v=i.length;m<v;m++)this._on(i[m],o,l,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[p(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[p(i)],this},_propagateEvent:function(i){for(var o in this._eventParents)this._eventParents[o].fire(i.type,s({layer:i.target,propagatedFrom:i.target},i),!0)}};Zt.addEventListener=Zt.on,Zt.removeEventListener=Zt.clearAllEventListeners=Zt.off,Zt.addOneTimeEventListener=Zt.once,Zt.fireEvent=Zt.fire,Zt.hasEventListeners=Zt.listens;var fn=lt.extend(Zt);function it(i,o,l){this.x=l?Math.round(i):i,this.y=l?Math.round(o):o}var pn=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};it.prototype={clone:function(){return new it(this.x,this.y)},add:function(i){return this.clone()._add(X(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(X(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new it(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new it(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=pn(this.x),this.y=pn(this.y),this},distanceTo:function(i){i=X(i);var o=i.x-this.x,l=i.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(i){return i=X(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=X(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function X(i,o,l){return i instanceof it?i:W(i)?new it(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new it(i.x,i.y):new it(i,o,l)}function St(i,o){if(i)for(var l=o?[i,o]:i,h=0,m=l.length;h<m;h++)this.extend(l[h])}St.prototype={extend:function(i){var o,l;if(!i)return this;if(i instanceof it||typeof i[0]=="number"||"x"in i)o=l=X(i);else if(i=Ct(i),o=i.min,l=i.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(i){return X((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return X(this.min.x,this.max.y)},getTopRight:function(){return X(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var o,l;return typeof i[0]=="number"||i instanceof it?i=X(i):i=Ct(i),i instanceof St?(o=i.min,l=i.max):o=l=i,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(i){i=Ct(i);var o=this.min,l=this.max,h=i.min,m=i.max,v=m.x>=o.x&&h.x<=l.x,A=m.y>=o.y&&h.y<=l.y;return v&&A},overlaps:function(i){i=Ct(i);var o=this.min,l=this.max,h=i.min,m=i.max,v=m.x>o.x&&h.x<l.x,A=m.y>o.y&&h.y<l.y;return v&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var o=this.min,l=this.max,h=Math.abs(o.x-l.x)*i,m=Math.abs(o.y-l.y)*i;return Ct(X(o.x-h,o.y-m),X(l.x+h,l.y+m))},equals:function(i){return i?(i=Ct(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function Ct(i,o){return!i||i instanceof St?i:new St(i,o)}function jt(i,o){if(i)for(var l=o?[i,o]:i,h=0,m=l.length;h<m;h++)this.extend(l[h])}jt.prototype={extend:function(i){var o=this._southWest,l=this._northEast,h,m;if(i instanceof wt)h=i,m=i;else if(i instanceof jt){if(h=i._southWest,m=i._northEast,!h||!m)return this}else return i?this.extend(ht(i)||Lt(i)):this;return!o&&!l?(this._southWest=new wt(h.lat,h.lng),this._northEast=new wt(m.lat,m.lng)):(o.lat=Math.min(h.lat,o.lat),o.lng=Math.min(h.lng,o.lng),l.lat=Math.max(m.lat,l.lat),l.lng=Math.max(m.lng,l.lng)),this},pad:function(i){var o=this._southWest,l=this._northEast,h=Math.abs(o.lat-l.lat)*i,m=Math.abs(o.lng-l.lng)*i;return new jt(new wt(o.lat-h,o.lng-m),new wt(l.lat+h,l.lng+m))},getCenter:function(){return new wt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new wt(this.getNorth(),this.getWest())},getSouthEast:function(){return new wt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof wt||"lat"in i?i=ht(i):i=Lt(i);var o=this._southWest,l=this._northEast,h,m;return i instanceof jt?(h=i.getSouthWest(),m=i.getNorthEast()):h=m=i,h.lat>=o.lat&&m.lat<=l.lat&&h.lng>=o.lng&&m.lng<=l.lng},intersects:function(i){i=Lt(i);var o=this._southWest,l=this._northEast,h=i.getSouthWest(),m=i.getNorthEast(),v=m.lat>=o.lat&&h.lat<=l.lat,A=m.lng>=o.lng&&h.lng<=l.lng;return v&&A},overlaps:function(i){i=Lt(i);var o=this._southWest,l=this._northEast,h=i.getSouthWest(),m=i.getNorthEast(),v=m.lat>o.lat&&h.lat<l.lat,A=m.lng>o.lng&&h.lng<l.lng;return v&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,o){return i?(i=Lt(i),this._southWest.equals(i.getSouthWest(),o)&&this._northEast.equals(i.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Lt(i,o){return i instanceof jt?i:new jt(i,o)}function wt(i,o,l){if(isNaN(i)||isNaN(o))throw new Error("Invalid LatLng object: ("+i+", "+o+")");this.lat=+i,this.lng=+o,l!==void 0&&(this.alt=+l)}wt.prototype={equals:function(i,o){if(!i)return!1;i=ht(i);var l=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return l<=(o===void 0?1e-9:o)},toString:function(i){return"LatLng("+E(this.lat,i)+", "+E(this.lng,i)+")"},distanceTo:function(i){return Ce.distance(this,ht(i))},wrap:function(){return Ce.wrapLatLng(this)},toBounds:function(i){var o=180*i/40075017,l=o/Math.cos(Math.PI/180*this.lat);return Lt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new wt(this.lat,this.lng,this.alt)}};function ht(i,o,l){return i instanceof wt?i:W(i)&&typeof i[0]!="object"?i.length===3?new wt(i[0],i[1],i[2]):i.length===2?new wt(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new wt(i.lat,"lng"in i?i.lng:i.lon,i.alt):o===void 0?null:new wt(i,o,l)}var we={latLngToPoint:function(i,o){var l=this.projection.project(i),h=this.scale(o);return this.transformation._transform(l,h)},pointToLatLng:function(i,o){var l=this.scale(o),h=this.transformation.untransform(i,l);return this.projection.unproject(h)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(i),h=this.transformation.transform(o.min,l),m=this.transformation.transform(o.max,l);return new St(h,m)},infinite:!1,wrapLatLng:function(i){var o=this.wrapLng?y(i.lng,this.wrapLng,!0):i.lng,l=this.wrapLat?y(i.lat,this.wrapLat,!0):i.lat,h=i.alt;return new wt(l,o,h)},wrapLatLngBounds:function(i){var o=i.getCenter(),l=this.wrapLatLng(o),h=o.lat-l.lat,m=o.lng-l.lng;if(h===0&&m===0)return i;var v=i.getSouthWest(),A=i.getNorthEast(),N=new wt(v.lat-h,v.lng-m),F=new wt(A.lat-h,A.lng-m);return new jt(N,F)}},Ce=s({},we,{wrapLng:[-180,180],R:6371e3,distance:function(i,o){var l=Math.PI/180,h=i.lat*l,m=o.lat*l,v=Math.sin((o.lat-i.lat)*l/2),A=Math.sin((o.lng-i.lng)*l/2),N=v*v+Math.cos(h)*Math.cos(m)*A*A,F=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*F}}),us=6378137,hs={R:us,MAX_LATITUDE:85.0511287798,project:function(i){var o=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,i.lat),-l),m=Math.sin(h*o);return new it(this.R*i.lng*o,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(i){var o=180/Math.PI;return new wt((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*o,i.x*o/this.R)},bounds:function(){var i=us*Math.PI;return new St([-i,-i],[i,i])}()};function ds(i,o,l,h){if(W(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=o,this._c=l,this._d=h}ds.prototype={transform:function(i,o){return this._transform(i.clone(),o)},_transform:function(i,o){return o=o||1,i.x=o*(this._a*i.x+this._b),i.y=o*(this._c*i.y+this._d),i},untransform:function(i,o){return o=o||1,new it((i.x/o-this._b)/this._a,(i.y/o-this._d)/this._c)}};function qn(i,o,l,h){return new ds(i,o,l,h)}var Ai=s({},Ce,{code:"EPSG:3857",projection:hs,transformation:function(){var i=.5/(Math.PI*hs.R);return qn(i,.5,-i,.5)}()}),So=s({},Ai,{code:"EPSG:900913"});function Co(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function or(i,o){var l="",h,m,v,A,N,F;for(h=0,v=i.length;h<v;h++){for(N=i[h],m=0,A=N.length;m<A;m++)F=N[m],l+=(m?"L":"M")+F.x+" "+F.y;l+=o?Q.svg?"z":"x":""}return l||"M0 0"}var Pi=document.documentElement.style,Si="ActiveXObject"in window,Kt=Si&&!document.addEventListener,Qt="msLaunchUri"in navigator&&!("documentMode"in document),$n=pe("webkit"),Ro=pe("android"),fs=pe("android 2")||pe("android 3"),pc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ci=Ro&&pe("Google")&&pc<537&&!("AudioNode"in window),ar=!!window.opera,ps=!Qt&&pe("chrome"),cr=pe("gecko")&&!$n&&!ar&&!Si,mc=!ps&&pe("safari"),ko=pe("phantom"),ms="OTransition"in Pi,Lo=navigator.platform.indexOf("Win")===0,jn=Si&&"transition"in Pi,Ri="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!fs,lr="MozPerspective"in Pi,mn=!window.L_DISABLE_3D&&(jn||Ri||lr)&&!ms&&!ko,Hn=typeof orientation<"u"||pe("mobile"),ur=Hn&&$n,xo=Hn&&Ri,Wn=!window.PointerEvent&&window.MSPointerEvent,_s=!!(window.PointerEvent||Wn),Jt="ontouchstart"in window||!!window.TouchEvent,Do=!window.L_NO_TOUCH&&(Jt||_s),ki=Hn&&ar,Li=Hn&&cr,_c=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,gc=function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",w,o),window.removeEventListener("testPassiveEventSupport",w,o)}catch{}return i}(),Gn=function(){return!!document.createElement("canvas").getContext}(),gs=!!(document.createElementNS&&Co("svg").createSVGRect),yc=!!gs&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),hr=!gs&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var o=i.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),No=navigator.platform.indexOf("Mac")===0,Mo=navigator.platform.indexOf("Linux")===0;function pe(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var Q={ie:Si,ielt9:Kt,edge:Qt,webkit:$n,android:Ro,android23:fs,androidStock:Ci,opera:ar,chrome:ps,gecko:cr,safari:mc,phantom:ko,opera12:ms,win:Lo,ie3d:jn,webkit3d:Ri,gecko3d:lr,any3d:mn,mobile:Hn,mobileWebkit:ur,mobileWebkit3d:xo,msPointer:Wn,pointer:_s,touch:Do,touchNative:Jt,mobileOpera:ki,mobileGecko:Li,retina:_c,passiveEvents:gc,canvas:Gn,svg:gs,vml:hr,inlineSvg:yc,mac:No,linux:Mo},Oo=Q.msPointer?"MSPointerDown":"pointerdown",Ue=Q.msPointer?"MSPointerMove":"pointermove",ys=Q.msPointer?"MSPointerUp":"pointerup",vs=Q.msPointer?"MSPointerCancel":"pointercancel",xi={touchstart:Oo,touchmove:Ue,touchend:ys,touchcancel:vs},dr={touchstart:ws,touchmove:Re,touchend:Re,touchcancel:Re},_n={},Vo=!1;function Fo(i,o,l){return o==="touchstart"&&Di(),dr[o]?(l=dr[o].bind(this,l),i.addEventListener(xi[o],l,!1),l):(console.warn("wrong event specified:",o),w)}function vc(i,o,l){if(!xi[o]){console.warn("wrong event specified:",o);return}i.removeEventListener(xi[o],l,!1)}function fr(i){_n[i.pointerId]=i}function Uo(i){_n[i.pointerId]&&(_n[i.pointerId]=i)}function pr(i){delete _n[i.pointerId]}function Di(){Vo||(document.addEventListener(Oo,fr,!0),document.addEventListener(Ue,Uo,!0),document.addEventListener(ys,pr,!0),document.addEventListener(vs,pr,!0),Vo=!0)}function Re(i,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in _n)o.touches.push(_n[l]);o.changedTouches=[o],i(o)}}function ws(i,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&Ut(o),Re(i,o)}function wc(i){var o={},l,h;for(h in i)l=i[h],o[h]=l&&l.bind?l.bind(i):l;return i=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Bo=200;function zo(i,o){i.addEventListener("dblclick",o);var l=0,h;function m(v){if(v.detail!==1){h=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var A=As(v);if(!(A.some(function(F){return F instanceof HTMLLabelElement&&F.attributes.for})&&!A.some(function(F){return F instanceof HTMLInputElement||F instanceof HTMLSelectElement}))){var N=Date.now();N-l<=Bo?(h++,h===2&&o(wc(v))):h=1,l=N}}}return i.addEventListener("click",m),{dblclick:o,simDblclick:m}}function qo(i,o){i.removeEventListener("dblclick",o.dblclick),i.removeEventListener("click",o.simDblclick)}var Ni=mr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),gn=mr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ts=gn==="webkitTransition"||gn==="OTransition"?gn+"End":"transitionend";function Es(i){return typeof i=="string"?document.getElementById(i):i}function Zn(i,o){var l=i.style[o]||i.currentStyle&&i.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(i,null);l=h?h[o]:null}return l==="auto"?null:l}function yt(i,o,l){var h=document.createElement(i);return h.className=o||"",l&&l.appendChild(h),h}function Tt(i){var o=i.parentNode;o&&o.removeChild(i)}function ue(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function ke(i){var o=i.parentNode;o&&o.lastChild!==i&&o.appendChild(i)}function Le(i){var o=i.parentNode;o&&o.firstChild!==i&&o.insertBefore(i,o.firstChild)}function Mi(i,o){if(i.classList!==void 0)return i.classList.contains(o);var l=Ke(i);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function K(i,o){if(i.classList!==void 0)for(var l=M(o),h=0,m=l.length;h<m;h++)i.classList.add(l[h]);else if(!Mi(i,o)){var v=Ke(i);yn(i,(v?v+" ":"")+o)}}function Rt(i,o){i.classList!==void 0?i.classList.remove(o):yn(i,S((" "+Ke(i)+" ").replace(" "+o+" "," ")))}function yn(i,o){i.className.baseVal===void 0?i.className=o:i.className.baseVal=o}function Ke(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function me(i,o){"opacity"in i.style?i.style.opacity=o:"filter"in i.style&&$o(i,o)}function $o(i,o){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=i.filters.item(h)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):i.style.filter+=" progid:"+h+"(opacity="+o+")"}function mr(i){for(var o=document.documentElement.style,l=0;l<i.length;l++)if(i[l]in o)return i[l];return!1}function vn(i,o,l){var h=o||new it(0,0);i.style[Ni]=(Q.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function Nt(i,o){i._leaflet_pos=o,Q.any3d?vn(i,o):(i.style.left=o.x+"px",i.style.top=o.y+"px")}function wn(i){return i._leaflet_pos||new it(0,0)}var Be,Te,_r;if("onselectstart"in document)Be=function(){rt(window,"selectstart",Ut)},Te=function(){Pt(window,"selectstart",Ut)};else{var Kn=mr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Be=function(){if(Kn){var i=document.documentElement.style;_r=i[Kn],i[Kn]="none"}},Te=function(){Kn&&(document.documentElement.style[Kn]=_r,_r=void 0)}}function gr(){rt(window,"dragstart",Ut)}function yr(){Pt(window,"dragstart",Ut)}var Oi,Qe;function Is(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(vr(),Oi=i,Qe=i.style.outlineStyle,i.style.outlineStyle="none",rt(window,"keydown",vr))}function vr(){Oi&&(Oi.style.outlineStyle=Qe,Oi=void 0,Qe=void 0,Pt(window,"keydown",vr))}function jo(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function xe(i){var o=i.getBoundingClientRect();return{x:o.width/i.offsetWidth||1,y:o.height/i.offsetHeight||1,boundingClientRect:o}}var Tc={__proto__:null,TRANSFORM:Ni,TRANSITION:gn,TRANSITION_END:Ts,get:Es,getStyle:Zn,create:yt,remove:Tt,empty:ue,toFront:ke,toBack:Le,hasClass:Mi,addClass:K,removeClass:Rt,setClass:yn,getClass:Ke,setOpacity:me,testProp:mr,setTransform:vn,setPosition:Nt,getPosition:wn,get disableTextSelection(){return Be},get enableTextSelection(){return Te},disableImageDrag:gr,enableImageDrag:yr,preventOutline:Is,restoreOutline:vr,getSizedParentNode:jo,getScale:xe};function rt(i,o,l,h){if(o&&typeof o=="object")for(var m in o)wr(i,m,o[m],l);else{o=M(o);for(var v=0,A=o.length;v<A;v++)wr(i,o[v],l,h)}return this}var he="_leaflet_events";function Pt(i,o,l,h){if(arguments.length===1)Qn(i),delete i[he];else if(o&&typeof o=="object")for(var m in o)Vi(i,m,o[m],l);else if(o=M(o),arguments.length===2)Qn(i,function(N){return ut(o,N)!==-1});else for(var v=0,A=o.length;v<A;v++)Vi(i,o[v],l,h);return this}function Qn(i,o){for(var l in i[he]){var h=l.split(/\d/)[0];(!o||o(h))&&Vi(i,h,null,null,l)}}var Tn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function wr(i,o,l,h){var m=o+p(l)+(h?"_"+p(h):"");if(i[he]&&i[he][m])return this;var v=function(N){return l.call(h||i,N||window.event)},A=v;!Q.touchNative&&Q.pointer&&o.indexOf("touch")===0?v=Fo(i,o,v):Q.touch&&o==="dblclick"?v=zo(i,v):"addEventListener"in i?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?i.addEventListener(Tn[o]||o,v,Q.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(v=function(N){N=N||window.event,Ss(i,N)&&A(N)},i.addEventListener(Tn[o],v,!1)):i.addEventListener(o,A,!1):i.attachEvent("on"+o,v),i[he]=i[he]||{},i[he][m]=v}function Vi(i,o,l,h,m){m=m||o+p(l)+(h?"_"+p(h):"");var v=i[he]&&i[he][m];if(!v)return this;!Q.touchNative&&Q.pointer&&o.indexOf("touch")===0?vc(i,o,v):Q.touch&&o==="dblclick"?qo(i,v):"removeEventListener"in i?i.removeEventListener(Tn[o]||o,v,!1):i.detachEvent("on"+o,v),i[he][m]=null}function It(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function bs(i){return wr(i,"wheel",It),this}function Fi(i){return rt(i,"mousedown touchstart dblclick contextmenu",It),i._leaflet_disable_click=!0,this}function Ut(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function Je(i){return Ut(i),It(i),this}function As(i){if(i.composedPath)return i.composedPath();for(var o=[],l=i.target;l;)o.push(l),l=l.parentNode;return o}function Ui(i,o){if(!o)return new it(i.clientX,i.clientY);var l=xe(o),h=l.boundingClientRect;return new it((i.clientX-h.left)/l.x-o.clientLeft,(i.clientY-h.top)/l.y-o.clientTop)}var Ye=Q.linux&&Q.chrome?window.devicePixelRatio:Q.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ps(i){return Q.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/Ye:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function Ss(i,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==i;)l=l.parentNode}catch{return!1}return l!==i}var Bi={__proto__:null,on:rt,off:Pt,stopPropagation:It,disableScrollPropagation:bs,disableClickPropagation:Fi,preventDefault:Ut,stop:Je,getPropagationPath:As,getMousePosition:Ui,getWheelDelta:Ps,isExternalTarget:Ss,addListener:rt,removeListener:Pt},Cs=fn.extend({run:function(i,o,l,h){this.stop(),this._el=i,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=wn(i),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=R(this._animate,this),this._step()},_step:function(i){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),i):(this._runFrame(1),this._complete())},_runFrame:function(i,o){var l=this._startPos.add(this._offset.multiplyBy(i));o&&l._round(),Nt(this._el,l),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),dt=fn.extend({options:{crs:Ai,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,o){o=V(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(ht(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=gn&&Q.any3d&&!Q.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),rt(this._proxy,Ts,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),i=this._limitCenter(ht(i),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,o,l.zoom):this._tryAnimatedPan(i,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(i,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(i,o){return this._loaded?this.setView(this.getCenter(),i,{zoom:o}):(this._zoom=i,this)},zoomIn:function(i,o){return i=i||(Q.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,o)},zoomOut:function(i,o){return i=i||(Q.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,o)},setZoomAround:function(i,o,l){var h=this.getZoomScale(o),m=this.getSize().divideBy(2),v=i instanceof it?i:this.latLngToContainerPoint(i),A=v.subtract(m).multiplyBy(1-1/h),N=this.containerPointToLatLng(m.add(A));return this.setView(N,o,{zoom:l})},_getBoundsCenterZoom:function(i,o){o=o||{},i=i.getBounds?i.getBounds():Lt(i);var l=X(o.paddingTopLeft||o.padding||[0,0]),h=X(o.paddingBottomRight||o.padding||[0,0]),m=this.getBoundsZoom(i,!1,l.add(h));if(m=typeof o.maxZoom=="number"?Math.min(o.maxZoom,m):m,m===1/0)return{center:i.getCenter(),zoom:m};var v=h.subtract(l).divideBy(2),A=this.project(i.getSouthWest(),m),N=this.project(i.getNorthEast(),m),F=this.unproject(A.add(N).divideBy(2).add(v),m);return{center:F,zoom:m}},fitBounds:function(i,o){if(i=Lt(i),!i.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(i,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,o){return this.setView(i,this._zoom,{pan:o})},panBy:function(i,o){if(i=X(i).round(),o=o||{},!i.x&&!i.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Cs,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){K(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,o,l){if(l=l||{},l.animate===!1||!Q.any3d)return this.setView(i,o,l);this._stop();var h=this.project(this.getCenter()),m=this.project(i),v=this.getSize(),A=this._zoom;i=ht(i),o=o===void 0?A:o;var N=Math.max(v.x,v.y),F=N*this.getZoomScale(A,o),q=m.distanceTo(h)||1,Z=1.42,tt=Z*Z;function ft(Bt){var oa=Bt?-1:1,jm=Bt?F:N,Hm=F*F-N*N+oa*tt*tt*q*q,Wm=2*jm*tt*q,Pc=Hm/Wm,zu=Math.sqrt(Pc*Pc+1)-Pc,Gm=zu<1e-9?-18:Math.log(zu);return Gm}function de(Bt){return(Math.exp(Bt)-Math.exp(-Bt))/2}function Yt(Bt){return(Math.exp(Bt)+Math.exp(-Bt))/2}function Me(Bt){return de(Bt)/Yt(Bt)}var ge=ft(0);function Dr(Bt){return N*(Yt(ge)/Yt(ge+Z*Bt))}function Bm(Bt){return N*(Yt(ge)*Me(ge+Z*Bt)-de(ge))/tt}function zm(Bt){return 1-Math.pow(1-Bt,1.5)}var qm=Date.now(),Uu=(ft(1)-ge)/Z,$m=l.duration?1e3*l.duration:1e3*Uu*.8;function Bu(){var Bt=(Date.now()-qm)/$m,oa=zm(Bt)*Uu;Bt<=1?(this._flyToFrame=R(Bu,this),this._move(this.unproject(h.add(m.subtract(h).multiplyBy(Bm(oa)/q)),A),this.getScaleZoom(N/Dr(oa),A),{flyTo:!0})):this._move(i,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Bu.call(this),this},flyToBounds:function(i,o){var l=this._getBoundsCenterZoom(i,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(i){return i=Lt(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var o=this.options.minZoom;return this.options.minZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var o=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&o!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,o){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,Lt(i));return l.equals(h)||this.panTo(h,o),this._enforcingBounds=!1,this},panInside:function(i,o){o=o||{};var l=X(o.paddingTopLeft||o.padding||[0,0]),h=X(o.paddingBottomRight||o.padding||[0,0]),m=this.project(this.getCenter()),v=this.project(i),A=this.getPixelBounds(),N=Ct([A.min.add(l),A.max.subtract(h)]),F=N.getSize();if(!N.contains(v)){this._enforcingBounds=!0;var q=v.subtract(N.getCenter()),Z=N.extend(v).getSize().subtract(F);m.x+=q.x<0?-Z.x:Z.x,m.y+=q.y<0?-Z.y:Z.y,this.panTo(this.unproject(m),o),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=s({animate:!1,pan:!0},i===!0?{animate:!0}:i);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=o.divideBy(2).round(),m=l.divideBy(2).round(),v=h.subtract(m);return!v.x&&!v.y?this:(i.animate&&i.pan?this.panBy(v):(i.pan&&this._rawPanBy(v),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=s({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,i):navigator.geolocation.getCurrentPosition(o,l,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var o=i.code,l=i.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var o=i.coords.latitude,l=i.coords.longitude,h=new wt(o,l),m=h.toBounds(i.coords.accuracy*2),v=this._locateOptions;if(v.setView){var A=this.getBoundsZoom(m);this.setView(h,v.maxZoom?Math.min(A,v.maxZoom):A)}var N={latlng:h,bounds:m,timestamp:i.timestamp};for(var F in i.coords)typeof i.coords[F]=="number"&&(N[F]=i.coords[F]);this.fire("locationfound",N)}},addHandler:function(i,o){if(!o)return this;var l=this[i]=new o(this);return this._handlers.push(l),this.options[i]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Tt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)Tt(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,o){var l="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),h=yt("div",l,o||this._mapPane);return i&&(this._panes[i]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),o=this.unproject(i.getBottomLeft()),l=this.unproject(i.getTopRight());return new jt(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,o,l){i=Lt(i),l=X(l||[0,0]);var h=this.getZoom()||0,m=this.getMinZoom(),v=this.getMaxZoom(),A=i.getNorthWest(),N=i.getSouthEast(),F=this.getSize().subtract(l),q=Ct(this.project(N,h),this.project(A,h)).getSize(),Z=Q.any3d?this.options.zoomSnap:1,tt=F.x/q.x,ft=F.y/q.y,de=o?Math.max(tt,ft):Math.min(tt,ft);return h=this.getScaleZoom(de,h),Z&&(h=Math.round(h/(Z/100))*(Z/100),h=o?Math.ceil(h/Z)*Z:Math.floor(h/Z)*Z),Math.max(m,Math.min(v,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new it(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,o){var l=this._getTopLeftPoint(i,o);return new St(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(i)/l.scale(o)},getScaleZoom:function(i,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var h=l.zoom(i*l.scale(o));return isNaN(h)?1/0:h},project:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(ht(i),o)},unproject:function(i,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(X(i),o)},layerPointToLatLng:function(i){var o=X(i).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(i){var o=this.project(ht(i))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ht(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(Lt(i))},distance:function(i,o){return this.options.crs.distance(ht(i),ht(o))},containerPointToLayerPoint:function(i){return X(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return X(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var o=this.containerPointToLayerPoint(X(i));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ht(i)))},mouseEventToContainerPoint:function(i){return Ui(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var o=this._container=Es(i);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");rt(o,"scroll",this._onScroll,this),this._containerId=p(o)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&Q.any3d,K(i,"leaflet-container"+(Q.touch?" leaflet-touch":"")+(Q.retina?" leaflet-retina":"")+(Q.ielt9?" leaflet-oldie":"")+(Q.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Zn(i,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Nt(this._mapPane,new it(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(K(i.markerPane,"leaflet-zoom-hide"),K(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,o,l){Nt(this._mapPane,new it(0,0));var h=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var m=this._zoom!==o;this._moveStart(m,l)._move(i,o)._moveEnd(m),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(i,o){return i&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(i,o,l,h){o===void 0&&(o=this._zoom);var m=this._zoom!==o;return this._zoom=o,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),h?l&&l.pinch&&this.fire("zoom",l):((m||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){Nt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[p(this._container)]=this;var o=i?Pt:rt;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Q.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=R(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,o){for(var l=[],h,m=o==="mouseout"||o==="mouseover",v=i.target||i.srcElement,A=!1;v;){if(h=this._targets[p(v)],h&&(o==="click"||o==="preclick")&&this._draggableMoved(h)){A=!0;break}if(h&&h.listens(o,!0)&&(m&&!Ss(v,i)||(l.push(h),m))||v===this._container)break;v=v.parentNode}return!l.length&&!A&&!m&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var o=i.target||i.srcElement;if(!(!this._loaded||o._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(o))){var l=i.type;l==="mousedown"&&Is(o),this._fireDOMEvent(i,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,o,l){if(i.type==="click"){var h=s({},i);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var m=this._findEventTargets(i,o);if(l){for(var v=[],A=0;A<l.length;A++)l[A].listens(o,!0)&&v.push(l[A]);m=v.concat(m)}if(m.length){o==="contextmenu"&&Ut(i);var N=m[0],F={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var q=N.getLatLng&&(!N._radius||N._radius<=10);F.containerPoint=q?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(i),F.layerPoint=this.containerPointToLayerPoint(F.containerPoint),F.latlng=q?N.getLatLng():this.layerPointToLatLng(F.layerPoint)}for(A=0;A<m.length;A++)if(m[A].fire(o,F,!0),F.originalEvent._stopped||m[A].options.bubblingMouseEvents===!1&&ut(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,o=this._handlers.length;i<o;i++)this._handlers[i].disable()},whenReady:function(i,o){return this._loaded?i.call(o||this,{target:this}):this.on("load",i,o),this},_getMapPanePos:function(){return wn(this._mapPane)||new it(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,o){var l=i&&o!==void 0?this._getNewPixelOrigin(i,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,o){var l=this.getSize()._divideBy(2);return this.project(i,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,o,l){var h=this._getNewPixelOrigin(l,o);return this.project(i,o)._subtract(h)},_latLngBoundsToNewLayerBounds:function(i,o,l){var h=this._getNewPixelOrigin(l,o);return Ct([this.project(i.getSouthWest(),o)._subtract(h),this.project(i.getNorthWest(),o)._subtract(h),this.project(i.getSouthEast(),o)._subtract(h),this.project(i.getNorthEast(),o)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,o,l){if(!l)return i;var h=this.project(i,o),m=this.getSize().divideBy(2),v=new St(h.subtract(m),h.add(m)),A=this._getBoundsOffset(v,l,o);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?i:this.unproject(h.add(A),o)},_limitOffset:function(i,o){if(!o)return i;var l=this.getPixelBounds(),h=new St(l.min.add(i),l.max.add(i));return i.add(this._getBoundsOffset(h,o))},_getBoundsOffset:function(i,o,l){var h=Ct(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),m=h.min.subtract(i.min),v=h.max.subtract(i.max),A=this._rebound(m.x,-v.x),N=this._rebound(m.y,-v.y);return new it(A,N)},_rebound:function(i,o){return i+o>0?Math.round(i-o)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(o))},_limitZoom:function(i){var o=this.getMinZoom(),l=this.getMaxZoom(),h=Q.any3d?this.options.zoomSnap:1;return h&&(i=Math.round(i/h)*h),Math.max(o,Math.min(l,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Rt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,o){var l=this._getCenterOffset(i)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var i=this._proxy=yt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(o){var l=Ni,h=this._proxy.style[l];vn(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Tt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),o=this.getZoom();vn(this._proxy,this.project(i,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(o),m=this._getCenterOffset(i)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(m)?!1:(R(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(i,o,!0)},this),!0)},_animateZoom:function(i,o,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=o,K(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:o,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Rt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Tr(i,o){return new dt(i,o)}var _e=lt.extend({options:{position:"topright"},initialize:function(i){V(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var o=this._map;return o&&o.removeControl(this),this.options.position=i,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var o=this._container=this.onAdd(i),l=this.getPosition(),h=i._controlCorners[l];return K(o,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(o,h.firstChild):h.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Tt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),Xe=function(i){return new _e(i)};dt.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},o="leaflet-",l=this._controlContainer=yt("div",o+"control-container",this._container);function h(m,v){var A=o+m+" "+o+v;i[m+v]=yt("div",A,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)Tt(this._controlCorners[i]);Tt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Ho=_e.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,o,l,h){return l<h?-1:h<l?1:0}},initialize:function(i,o,l){V(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in i)this._addLayer(i[h],h);for(h in o)this._addLayer(o[h],h,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return _e.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,o){return this._addLayer(i,o),this._map?this._update():this},addOverlay:function(i,o){return this._addLayer(i,o,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var o=this._getLayer(p(i));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){K(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(K(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Rt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Rt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",o=this._container=yt("div",i),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Fi(o),bs(o);var h=this._section=yt("section",i+"-list");l&&(this._map.on("click",this.collapse,this),rt(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=yt("a",i+"-toggle",o);m.href="#",m.title="Layers",m.setAttribute("role","button"),rt(m,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Ut(v),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=yt("div",i+"-base",h),this._separator=yt("div",i+"-separator",h),this._overlaysList=yt("div",i+"-overlays",h),o.appendChild(h)},_getLayer:function(i){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&p(this._layers[o].layer)===i)return this._layers[o]},_addLayer:function(i,o,l){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(h,m){return this.options.sortFunction(h.layer,m.layer,h.name,m.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ue(this._baseLayersList),ue(this._overlaysList),this._layerControlInputs=[];var i,o,l,h,m=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),o=o||h.overlay,i=i||!h.overlay,m+=h.overlay?0:1;return this.options.hideSingleBase&&(i=i&&m>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=o&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var o=this._getLayer(p(i.target)),l=o.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(i,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(o?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(i){var o=document.createElement("label"),l=this._map.hasLayer(i.layer),h;i.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+p(this),l),this._layerControlInputs.push(h),h.layerId=p(i.layer),rt(h,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+i.name;var v=document.createElement("span");o.appendChild(v),v.appendChild(h),v.appendChild(m);var A=i.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,o,l,h=[],m=[];this._handlingClick=!0;for(var v=i.length-1;v>=0;v--)o=i[v],l=this._getLayer(o.layerId).layer,o.checked?h.push(l):o.checked||m.push(l);for(v=0;v<m.length;v++)this._map.hasLayer(m[v])&&this._map.removeLayer(m[v]);for(v=0;v<h.length;v++)this._map.hasLayer(h[v])||this._map.addLayer(h[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,o,l,h=this._map.getZoom(),m=i.length-1;m>=0;m--)o=i[m],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,rt(i,"click",Ut),this.expand();var o=this;setTimeout(function(){Pt(i,"click",Ut),o._preventClick=!1})}}),Wo=function(i,o,l){return new Ho(i,o,l)},En=_e.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var o="leaflet-control-zoom",l=yt("div",o+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,o,l,h,m){var v=yt("a",l,h);return v.innerHTML=i,v.href="#",v.title=o,v.setAttribute("role","button"),v.setAttribute("aria-label",o),Fi(v),rt(v,"click",Je),rt(v,"click",m,this),rt(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var i=this._map,o="leaflet-disabled";Rt(this._zoomInButton,o),Rt(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(K(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(K(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});dt.mergeOptions({zoomControl:!0}),dt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new En,this.addControl(this.zoomControl))});var Go=function(i){return new En(i)},Rs=_e.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var o="leaflet-control-scale",l=yt("div",o),h=this.options;return this._addScales(h,o+"-line",l),i.on(h.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),l},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,o,l){i.metric&&(this._mScale=yt("div",o,l)),i.imperial&&(this._iScale=yt("div",o,l))},_update:function(){var i=this._map,o=i.getSize().y/2,l=i.distance(i.containerPointToLatLng([0,o]),i.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var o=this._getRoundNum(i),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/i)},_updateImperial:function(i){var o=i*3.2808399,l,h,m;o>5280?(l=o/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(m=this._getRoundNum(o),this._updateScale(this._iScale,m+" ft",m/o))},_updateScale:function(i,o,l){i.style.width=Math.round(this.options.maxWidth*l)+"px",i.innerHTML=o},_getRoundNum:function(i){var o=Math.pow(10,(Math.floor(i)+"").length-1),l=i/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),ks=function(i){return new Rs(i)},Ls='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Er=_e.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Q.inlineSvg?Ls+" ":"")+"Leaflet</a>"},initialize:function(i){V(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=yt("div","leaflet-control-attribution"),Fi(this._container);for(var o in i._layers)i._layers[o].getAttribution&&this.addAttribution(i._layers[o].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var o in this._attributions)this._attributions[o]&&i.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),i.length&&l.push(i.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});dt.mergeOptions({attributionControl:!0}),dt.addInitHook(function(){this.options.attributionControl&&new Er().addTo(this)});var Ir=function(i){return new Er(i)};_e.Layers=Ho,_e.Zoom=En,_e.Scale=Rs,_e.Attribution=Er,Xe.layers=Wo,Xe.zoom=Go,Xe.scale=ks,Xe.attribution=Ir;var Ee=lt.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(i,o){return i.addHandler(o,this),this};var Zo={Events:Zt},tn=Q.touch?"touchstart mousedown":"mousedown",ze=fn.extend({options:{clickTolerance:3},initialize:function(i,o,l,h){V(this,h),this._element=i,this._dragStartTarget=o||i,this._preventOutline=l},enable:function(){this._enabled||(rt(this._dragStartTarget,tn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ze._dragging===this&&this.finishDrag(!0),Pt(this._dragStartTarget,tn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!Mi(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){ze._dragging===this&&this.finishDrag();return}if(!(ze._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(ze._dragging=this,this._preventOutline&&Is(this._element),gr(),Be(),!this._moving)){this.fire("down");var o=i.touches?i.touches[0]:i,l=jo(this._element);this._startPoint=new it(o.clientX,o.clientY),this._startPos=wn(this._element),this._parentScale=xe(l);var h=i.type==="mousedown";rt(document,h?"mousemove":"touchmove",this._onMove,this),rt(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var o=i.touches&&i.touches.length===1?i.touches[0]:i,l=new it(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Ut(i),this._moved||(this.fire("dragstart"),this._moved=!0,K(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),K(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),Nt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Rt(document.body,"leaflet-dragging"),this._lastTarget&&(Rt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Pt(document,"mousemove touchmove",this._onMove,this),Pt(document,"mouseup touchend touchcancel",this._onUp,this),yr(),Te();var o=this._moved&&this._moving;this._moving=!1,ze._dragging=!1,o&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function xs(i,o,l){var h,m=[1,4,2,8],v,A,N,F,q,Z,tt,ft;for(v=0,Z=i.length;v<Z;v++)i[v]._code=O(i[v],o);for(N=0;N<4;N++){for(tt=m[N],h=[],v=0,Z=i.length,A=Z-1;v<Z;A=v++)F=i[v],q=i[A],F._code&tt?q._code&tt||(ft=D(q,F,tt,o,l),ft._code=O(ft,o),h.push(ft)):(q._code&tt&&(ft=D(q,F,tt,o,l),ft._code=O(ft,o),h.push(ft)),h.push(F));i=h}return i}function Ds(i,o){var l,h,m,v,A,N,F,q,Z;if(!i||i.length===0)throw new Error("latlngs not passed");Et(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var tt=ht([0,0]),ft=Lt(i),de=ft.getNorthWest().distanceTo(ft.getSouthWest())*ft.getNorthEast().distanceTo(ft.getNorthWest());de<1700&&(tt=br(i));var Yt=i.length,Me=[];for(l=0;l<Yt;l++){var ge=ht(i[l]);Me.push(o.project(ht([ge.lat-tt.lat,ge.lng-tt.lng])))}for(N=F=q=0,l=0,h=Yt-1;l<Yt;h=l++)m=Me[l],v=Me[h],A=m.y*v.x-v.y*m.x,F+=(m.x+v.x)*A,q+=(m.y+v.y)*A,N+=A*3;N===0?Z=Me[0]:Z=[F/N,q/N];var Dr=o.unproject(X(Z));return ht([Dr.lat+tt.lat,Dr.lng+tt.lng])}function br(i){for(var o=0,l=0,h=0,m=0;m<i.length;m++){var v=ht(i[m]);o+=v.lat,l+=v.lng,h++}return ht([o/h,l/h])}var Ar={__proto__:null,clipPolygon:xs,polygonCenter:Ds,centroid:br};function se(i,o){if(!o||!i.length)return i.slice();var l=o*o;return i=f(i,l),i=Jn(i,l),i}function Ns(i,o,l){return Math.sqrt(st(i,o,l,!0))}function Ko(i,o,l){return st(i,o,l)}function Jn(i,o){var l=i.length,h=typeof Uint8Array<"u"?Uint8Array:Array,m=new h(l);m[0]=m[l-1]=1,c(i,m,o,0,l-1);var v,A=[];for(v=0;v<l;v++)m[v]&&A.push(i[v]);return A}function c(i,o,l,h,m){var v=0,A,N,F;for(N=h+1;N<=m-1;N++)F=st(i[N],i[h],i[m],!0),F>v&&(A=N,v=F);v>l&&(o[A]=1,c(i,o,l,h,A),c(i,o,l,A,m))}function f(i,o){for(var l=[i[0]],h=1,m=0,v=i.length;h<v;h++)$(i[h],i[m])>o&&(l.push(i[h]),m=h);return m<v-1&&l.push(i[v-1]),l}var _;function T(i,o,l,h,m){var v=h?_:O(i,l),A=O(o,l),N,F,q;for(_=A;;){if(!(v|A))return[i,o];if(v&A)return!1;N=v||A,F=D(i,o,N,l,m),q=O(F,l),N===v?(i=F,v=q):(o=F,A=q)}}function D(i,o,l,h,m){var v=o.x-i.x,A=o.y-i.y,N=h.min,F=h.max,q,Z;return l&8?(q=i.x+v*(F.y-i.y)/A,Z=F.y):l&4?(q=i.x+v*(N.y-i.y)/A,Z=N.y):l&2?(q=F.x,Z=i.y+A*(F.x-i.x)/v):l&1&&(q=N.x,Z=i.y+A*(N.x-i.x)/v),new it(q,Z,m)}function O(i,o){var l=0;return i.x<o.min.x?l|=1:i.x>o.max.x&&(l|=2),i.y<o.min.y?l|=4:i.y>o.max.y&&(l|=8),l}function $(i,o){var l=o.x-i.x,h=o.y-i.y;return l*l+h*h}function st(i,o,l,h){var m=o.x,v=o.y,A=l.x-m,N=l.y-v,F=A*A+N*N,q;return F>0&&(q=((i.x-m)*A+(i.y-v)*N)/F,q>1?(m=l.x,v=l.y):q>0&&(m+=A*q,v+=N*q)),A=i.x-m,N=i.y-v,h?A*A+N*N:new it(m,v)}function Et(i){return!W(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function bt(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Et(i)}function Vt(i,o){var l,h,m,v,A,N,F,q;if(!i||i.length===0)throw new Error("latlngs not passed");Et(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var Z=ht([0,0]),tt=Lt(i),ft=tt.getNorthWest().distanceTo(tt.getSouthWest())*tt.getNorthEast().distanceTo(tt.getNorthWest());ft<1700&&(Z=br(i));var de=i.length,Yt=[];for(l=0;l<de;l++){var Me=ht(i[l]);Yt.push(o.project(ht([Me.lat-Z.lat,Me.lng-Z.lng])))}for(l=0,h=0;l<de-1;l++)h+=Yt[l].distanceTo(Yt[l+1])/2;if(h===0)q=Yt[0];else for(l=0,v=0;l<de-1;l++)if(A=Yt[l],N=Yt[l+1],m=A.distanceTo(N),v+=m,v>h){F=(v-h)/m,q=[N.x-F*(N.x-A.x),N.y-F*(N.y-A.y)];break}var ge=o.unproject(X(q));return ht([ge.lat+Z.lat,ge.lng+Z.lng])}var De={__proto__:null,simplify:se,pointToSegmentDistance:Ns,closestPointOnSegment:Ko,clipSegment:T,_getEdgeIntersection:D,_getBitCode:O,_sqClosestPointOnSegment:st,isFlat:Et,_flat:bt,polylineCenter:Vt},qe={project:function(i){return new it(i.lng,i.lat)},unproject:function(i){return new wt(i.y,i.x)},bounds:new St([-180,-90],[180,90])},Ne={R:6378137,R_MINOR:6356752314245179e-9,bounds:new St([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var o=Math.PI/180,l=this.R,h=i.lat*o,m=this.R_MINOR/l,v=Math.sqrt(1-m*m),A=v*Math.sin(h),N=Math.tan(Math.PI/4-h/2)/Math.pow((1-A)/(1+A),v/2);return h=-l*Math.log(Math.max(N,1e-10)),new it(i.lng*o*l,h)},unproject:function(i){for(var o=180/Math.PI,l=this.R,h=this.R_MINOR/l,m=Math.sqrt(1-h*h),v=Math.exp(-i.y/l),A=Math.PI/2-2*Math.atan(v),N=0,F=.1,q;N<15&&Math.abs(F)>1e-7;N++)q=m*Math.sin(A),q=Math.pow((1-q)/(1+q),m/2),F=Math.PI/2-2*Math.atan(v*q)-A,A+=F;return new wt(A*o,i.x*o/l)}},en={__proto__:null,LonLat:qe,Mercator:Ne,SphericalMercator:hs},Pr=s({},Ce,{code:"EPSG:3395",projection:Ne,transformation:function(){var i=.5/(Math.PI*Ne.R);return qn(i,.5,-i,.5)}()}),Sr=s({},Ce,{code:"EPSG:4326",projection:qe,transformation:qn(1/180,1,-1/180,.5)}),ym=s({},we,{projection:qe,transformation:qn(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,o){var l=o.lng-i.lng,h=o.lat-i.lat;return Math.sqrt(l*l+h*h)},infinite:!0});we.Earth=Ce,we.EPSG3395=Pr,we.EPSG3857=Ai,we.EPSG900913=So,we.EPSG4326=Sr,we.Simple=ym;var $e=fn.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[p(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[p(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var o=i.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});dt.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var o=p(i);return this._layers[o]?this:(this._layers[o]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var o=p(i);return this._layers[o]?(this._loaded&&i.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return p(i)in this._layers},eachLayer:function(i,o){for(var l in this._layers)i.call(o,this._layers[l]);return this},_addLayers:function(i){i=i?W(i)?i:[i]:[];for(var o=0,l=i.length;o<l;o++)this.addLayer(i[o])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[p(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var o=p(i);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,o=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var m=this._zoomBoundLayers[h].options;i=m.minZoom===void 0?i:Math.min(i,m.minZoom),o=m.maxZoom===void 0?o:Math.max(o,m.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=i===1/0?void 0:i,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Cr=$e.extend({initialize:function(i,o){V(this,o),this._layers={};var l,h;if(i)for(l=0,h=i.length;l<h;l++)this.addLayer(i[l])},addLayer:function(i){var o=this.getLayerId(i);return this._layers[o]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var o=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(i){var o=typeof i=="number"?i:this.getLayerId(i);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var o=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[i]&&h[i].apply(h,o);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,o){for(var l in this._layers)i.call(o,this._layers[l]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return p(i)}}),vm=function(i,o){return new Cr(i,o)},In=Cr.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Cr.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Cr.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new jt;for(var o in this._layers){var l=this._layers[o];i.extend(l.getBounds?l.getBounds():l.getLatLng())}return i}}),wm=function(i,o){return new In(i,o)},Rr=lt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){V(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,o){var l=this._getIconUrl(i);if(!l){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(h,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(i,o){var l=this.options,h=l[o+"Size"];typeof h=="number"&&(h=[h,h]);var m=X(h),v=X(o==="shadow"&&l.shadowAnchor||l.iconAnchor||m&&m.divideBy(2,!0));i.className="leaflet-marker-"+o+" "+(l.className||""),v&&(i.style.marginLeft=-v.x+"px",i.style.marginTop=-v.y+"px"),m&&(i.style.width=m.x+"px",i.style.height=m.y+"px")},_createImg:function(i,o){return o=o||document.createElement("img"),o.src=i,o},_getIconUrl:function(i){return Q.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function Tm(i){return new Rr(i)}var Ms=Rr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof Ms.imagePath!="string"&&(Ms.imagePath=this._detectIconPath()),(this.options.imagePath||Ms.imagePath)+Rr.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var o=function(l,h,m){var v=h.exec(l);return v&&v[m]};return i=o(i,/^url\((['"])?(.+)\1\)$/,2),i&&o(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=yt("div","leaflet-default-icon-path",document.body),o=Zn(i,"background-image")||Zn(i,"backgroundImage");if(document.body.removeChild(i),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),wu=Ee.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new ze(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),K(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Rt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var o=this._marker,l=o._map,h=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,v=wn(o._icon),A=l.getPixelBounds(),N=l.getPixelOrigin(),F=Ct(A.min._subtract(N).add(m),A.max._subtract(N).subtract(m));if(!F.contains(v)){var q=X((Math.max(F.max.x,v.x)-F.max.x)/(A.max.x-F.max.x)-(Math.min(F.min.x,v.x)-F.min.x)/(A.min.x-F.min.x),(Math.max(F.max.y,v.y)-F.max.y)/(A.max.y-F.max.y)-(Math.min(F.min.y,v.y)-F.min.y)/(A.min.y-F.min.y)).multiplyBy(h);l.panBy(q,{animate:!1}),this._draggable._newPos._add(q),this._draggable._startPos._add(q),Nt(o._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=R(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=R(this._adjustPan.bind(this,i)))},_onDrag:function(i){var o=this._marker,l=o._shadow,h=wn(o._icon),m=o._map.layerPointToLatLng(h);l&&Nt(l,h),o._latlng=m,i.latlng=m,i.oldLatLng=this._oldLatLng,o.fire("move",i).fire("drag",i)},_onDragEnd:function(i){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Qo=$e.extend({options:{icon:new Ms,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,o){V(this,o),this._latlng=ht(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var o=this._latlng;return this._latlng=ht(i),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=i.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,i.title&&(l.title=i.title),l.tagName==="IMG"&&(l.alt=i.alt||"")),K(l,o),i.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&rt(l,"focus",this._panOnFocus,this);var m=i.icon.createShadow(this._shadow),v=!1;m!==this._shadow&&(this._removeShadow(),v=!0),m&&(K(m,o),m.alt=""),this._shadow=m,i.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&v&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Pt(this._icon,"focus",this._panOnFocus,this),Tt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Tt(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&Nt(this._icon,i),this._shadow&&Nt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(K(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),wu)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new wu(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&me(this._icon,i),this._shadow&&me(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var o=this.options.icon.options,l=o.iconSize?X(o.iconSize):X(0,0),h=o.iconAnchor?X(o.iconAnchor):X(0,0);i.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Em(i,o){return new Qo(i,o)}var Yn=$e.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return V(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Jo=Yn.extend({options:{fill:!0,radius:10},initialize:function(i,o){V(this,o),this._latlng=ht(i),this._radius=this.options.radius},setLatLng:function(i){var o=this._latlng;return this._latlng=ht(i),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var o=i&&i.radius||this._radius;return Yn.prototype.setStyle.call(this,i),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,o=this._radiusY||i,l=this._clickTolerance(),h=[i+l,o+l];this._pxBounds=new St(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Im(i,o){return new Jo(i,o)}var Ec=Jo.extend({initialize:function(i,o,l){if(typeof o=="number"&&(o=s({},l,{radius:o})),V(this,o),this._latlng=ht(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new jt(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:Yn.prototype.setStyle,_project:function(){var i=this._latlng.lng,o=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===Ce.distance){var m=Math.PI/180,v=this._mRadius/Ce.R/m,A=l.project([o+v,i]),N=l.project([o-v,i]),F=A.add(N).divideBy(2),q=l.unproject(F).lat,Z=Math.acos((Math.cos(v*m)-Math.sin(o*m)*Math.sin(q*m))/(Math.cos(o*m)*Math.cos(q*m)))/m;(isNaN(Z)||Z===0)&&(Z=v/Math.cos(Math.PI/180*o)),this._point=F.subtract(l.getPixelOrigin()),this._radius=isNaN(Z)?0:F.x-l.project([q,i-Z]).x,this._radiusY=F.y-A.y}else{var tt=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(tt).x}this._updateBounds()}});function bm(i,o,l){return new Ec(i,o,l)}var bn=Yn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,o){V(this,o),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var o=1/0,l=null,h=st,m,v,A=0,N=this._parts.length;A<N;A++)for(var F=this._parts[A],q=1,Z=F.length;q<Z;q++){m=F[q-1],v=F[q];var tt=h(i,m,v,!0);tt<o&&(o=tt,l=h(i,m,v))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Vt(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,o){return o=o||this._defaultShape(),i=ht(i),o.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new jt,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return Et(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var o=[],l=Et(i),h=0,m=i.length;h<m;h++)l?(o[h]=ht(i[h]),this._bounds.extend(o[h])):o[h]=this._convertLatLngs(i[h]);return o},_project:function(){var i=new St;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),o=new it(i,i);this._rawPxBounds&&(this._pxBounds=new St([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(i,o,l){var h=i[0]instanceof wt,m=i.length,v,A;if(h){for(A=[],v=0;v<m;v++)A[v]=this._map.latLngToLayerPoint(i[v]),l.extend(A[v]);o.push(A)}else for(v=0;v<m;v++)this._projectLatlngs(i[v],o,l)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,h,m,v,A,N,F;for(l=0,m=0,v=this._rings.length;l<v;l++)for(F=this._rings[l],h=0,A=F.length;h<A-1;h++)N=T(F[h],F[h+1],i,h,!0),N&&(o[m]=o[m]||[],o[m].push(N[0]),(N[1]!==F[h+1]||h===A-2)&&(o[m].push(N[1]),m++))}},_simplifyPoints:function(){for(var i=this._parts,o=this.options.smoothFactor,l=0,h=i.length;l<h;l++)i[l]=se(i[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,o){var l,h,m,v,A,N,F=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(l=0,v=this._parts.length;l<v;l++)for(N=this._parts[l],h=0,A=N.length,m=A-1;h<A;m=h++)if(!(!o&&h===0)&&Ns(i,N[m],N[h])<=F)return!0;return!1}});function Am(i,o){return new bn(i,o)}bn._flat=bt;var kr=bn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ds(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var o=bn.prototype._convertLatLngs.call(this,i),l=o.length;return l>=2&&o[0]instanceof wt&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(i){bn.prototype._setLatLngs.call(this,i),Et(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Et(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,o=this.options.weight,l=new it(o,o);if(i=new St(i.min.subtract(l),i.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,m=this._rings.length,v;h<m;h++)v=xs(this._rings[h],i,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var o=!1,l,h,m,v,A,N,F,q;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(v=0,F=this._parts.length;v<F;v++)for(l=this._parts[v],A=0,q=l.length,N=q-1;A<q;N=A++)h=l[A],m=l[N],h.y>i.y!=m.y>i.y&&i.x<(m.x-h.x)*(i.y-h.y)/(m.y-h.y)+h.x&&(o=!o);return o||bn.prototype._containsPoint.call(this,i,!0)}});function Pm(i,o){return new kr(i,o)}var An=In.extend({initialize:function(i,o){V(this,o),this._layers={},i&&this.addData(i)},addData:function(i){var o=W(i)?i:i.features,l,h,m;if(o){for(l=0,h=o.length;l<h;l++)m=o[l],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var v=this.options;if(v.filter&&!v.filter(i))return this;var A=Yo(i,v);return A?(A.feature=ea(i),A.defaultOptions=A.options,this.resetStyle(A),v.onEachFeature&&v.onEachFeature(i,A),this.addLayer(A)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=s({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(o){this._setLayerStyle(o,i)},this)},_setLayerStyle:function(i,o){i.setStyle&&(typeof o=="function"&&(o=o(i.feature)),i.setStyle(o))}});function Yo(i,o){var l=i.type==="Feature"?i.geometry:i,h=l?l.coordinates:null,m=[],v=o&&o.pointToLayer,A=o&&o.coordsToLatLng||Ic,N,F,q,Z;if(!h&&!l)return null;switch(l.type){case"Point":return N=A(h),Tu(v,i,N,o);case"MultiPoint":for(q=0,Z=h.length;q<Z;q++)N=A(h[q]),m.push(Tu(v,i,N,o));return new In(m);case"LineString":case"MultiLineString":return F=Xo(h,l.type==="LineString"?0:1,A),new bn(F,o);case"Polygon":case"MultiPolygon":return F=Xo(h,l.type==="Polygon"?1:2,A),new kr(F,o);case"GeometryCollection":for(q=0,Z=l.geometries.length;q<Z;q++){var tt=Yo({geometry:l.geometries[q],type:"Feature",properties:i.properties},o);tt&&m.push(tt)}return new In(m);case"FeatureCollection":for(q=0,Z=l.features.length;q<Z;q++){var ft=Yo(l.features[q],o);ft&&m.push(ft)}return new In(m);default:throw new Error("Invalid GeoJSON object.")}}function Tu(i,o,l,h){return i?i(o,l):new Qo(l,h&&h.markersInheritOptions&&h)}function Ic(i){return new wt(i[1],i[0],i[2])}function Xo(i,o,l){for(var h=[],m=0,v=i.length,A;m<v;m++)A=o?Xo(i[m],o-1,l):(l||Ic)(i[m]),h.push(A);return h}function bc(i,o){return i=ht(i),i.alt!==void 0?[E(i.lng,o),E(i.lat,o),E(i.alt,o)]:[E(i.lng,o),E(i.lat,o)]}function ta(i,o,l,h){for(var m=[],v=0,A=i.length;v<A;v++)m.push(o?ta(i[v],Et(i[v])?0:o-1,l,h):bc(i[v],h));return!o&&l&&m.length>0&&m.push(m[0].slice()),m}function Lr(i,o){return i.feature?s({},i.feature,{geometry:o}):ea(o)}function ea(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Ac={toGeoJSON:function(i){return Lr(this,{type:"Point",coordinates:bc(this.getLatLng(),i)})}};Qo.include(Ac),Ec.include(Ac),Jo.include(Ac),bn.include({toGeoJSON:function(i){var o=!Et(this._latlngs),l=ta(this._latlngs,o?1:0,!1,i);return Lr(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),kr.include({toGeoJSON:function(i){var o=!Et(this._latlngs),l=o&&!Et(this._latlngs[0]),h=ta(this._latlngs,l?2:o?1:0,!0,i);return o||(h=[h]),Lr(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),Cr.include({toMultiPoint:function(i){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(i).geometry.coordinates)}),Lr(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(i){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(i);var l=o==="GeometryCollection",h=[];return this.eachLayer(function(m){if(m.toGeoJSON){var v=m.toGeoJSON(i);if(l)h.push(v.geometry);else{var A=ea(v);A.type==="FeatureCollection"?h.push.apply(h,A.features):h.push(A)}}}),l?Lr(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Eu(i,o){return new An(i,o)}var Sm=Eu,na=$e.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,o,l){this._url=i,this._bounds=Lt(o),V(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(K(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Tt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&ke(this._image),this},bringToBack:function(){return this._map&&Le(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=Lt(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",o=this._image=i?this._url:yt("img");if(K(o,"leaflet-image-layer"),this._zoomAnimated&&K(o,"leaflet-zoom-animated"),this.options.className&&K(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onload=u(this.fire,this,"load"),o.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(i){var o=this._map.getZoomScale(i.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;vn(this._image,l,o)},_reset:function(){var i=this._image,o=new St(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();Nt(i,o.min),i.style.width=l.x+"px",i.style.height=l.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),Cm=function(i,o,l){return new na(i,o,l)},Iu=na.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",o=this._image=i?this._url:yt("video");if(K(o,"leaflet-image-layer"),this._zoomAnimated&&K(o,"leaflet-zoom-animated"),this.options.className&&K(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onloadeddata=u(this.fire,this,"load"),i){for(var l=o.getElementsByTagName("source"),h=[],m=0;m<l.length;m++)h.push(l[m].src);this._url=l.length>0?h:[o.src];return}W(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var A=yt("source");A.src=this._url[v],o.appendChild(A)}}});function Rm(i,o,l){return new Iu(i,o,l)}var bu=na.extend({_initImage:function(){var i=this._image=this._url;K(i,"leaflet-image-layer"),this._zoomAnimated&&K(i,"leaflet-zoom-animated"),this.options.className&&K(i,this.options.className),i.onselectstart=w,i.onmousemove=w}});function km(i,o,l){return new bu(i,o,l)}var nn=$e.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,o){i&&(i instanceof wt||W(i))?(this._latlng=ht(i),V(this,o)):(V(this,i),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&me(this._container,1),this.bringToFront(),this.options.interactive&&(K(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(u(Tt,void 0,this._container),200)):Tt(this._container),this.options.interactive&&(Rt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ht(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ke(this._container),this},bringToBack:function(){return this._map&&Le(this._container),this},_prepareOpen:function(i){var o=this._source;if(!o._map)return!1;if(o instanceof In){o=null;var l=this._source._layers;for(var h in l)if(l[h]._map){o=l[h];break}if(!o)return!1;this._source=o}if(!i)if(o.getCenter)i=o.getCenter();else if(o.getLatLng)i=o.getLatLng();else if(o.getBounds)i=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")i.innerHTML=o;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),o=X(this.options.offset),l=this._getAnchor();this._zoomAnimated?Nt(this._container,i.add(l)):o=o.add(i).add(l);var h=this._containerBottom=-o.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=h+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});dt.include({_initOverlay:function(i,o,l,h){var m=o;return m instanceof i||(m=new i(h).setContent(o)),l&&m.setLatLng(l),m}}),$e.include({_initOverlay:function(i,o,l,h){var m=l;return m instanceof i?(V(m,h),m._source=this):(m=o&&!h?o:new i(h,this),m.setContent(l)),m}});var ia=nn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,nn.prototype.openOn.call(this,i)},onAdd:function(i){nn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Yn||this._source.on("preclick",It))},onRemove:function(i){nn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Yn||this._source.off("preclick",It))},getEvents:function(){var i=nn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",o=this._container=yt("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=yt("div",i+"-content-wrapper",o);if(this._contentNode=yt("div",i+"-content",l),Fi(o),bs(this._contentNode),rt(o,"contextmenu",It),this._tipContainer=yt("div",i+"-tip-container",o),this._tip=yt("div",i+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=yt("a",i+"-close-button",o);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',rt(h,"click",function(m){Ut(m),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,o=i.style;o.width="",o.whiteSpace="nowrap";var l=i.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var h=i.offsetHeight,m=this.options.maxHeight,v="leaflet-popup-scrolled";m&&h>m?(o.height=m+"px",K(i,v)):Rt(i,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),l=this._getAnchor();Nt(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,o=parseInt(Zn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,h=this._containerWidth,m=new it(this._containerLeft,-l-this._containerBottom);m._add(wn(this._container));var v=i.layerPointToContainerPoint(m),A=X(this.options.autoPanPadding),N=X(this.options.autoPanPaddingTopLeft||A),F=X(this.options.autoPanPaddingBottomRight||A),q=i.getSize(),Z=0,tt=0;v.x+h+F.x>q.x&&(Z=v.x+h-q.x+F.x),v.x-Z-N.x<0&&(Z=v.x-N.x),v.y+l+F.y>q.y&&(tt=v.y+l-q.y+F.y),v.y-tt-N.y<0&&(tt=v.y-N.y),(Z||tt)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([Z,tt]))}},_getAnchor:function(){return X(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Lm=function(i,o){return new ia(i,o)};dt.mergeOptions({closePopupOnClick:!0}),dt.include({openPopup:function(i,o,l){return this._initOverlay(ia,i,o,l).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),$e.include({bindPopup:function(i,o){return this._popup=this._initOverlay(ia,this._popup,i,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof In||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){Je(i);var o=i.layer||i.target;if(this._popup._source===o&&!(o instanceof Yn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=o,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var ra=nn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){nn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){nn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=nn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",o=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=yt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+p(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var o,l,h=this._map,m=this._container,v=h.latLngToContainerPoint(h.getCenter()),A=h.layerPointToContainerPoint(i),N=this.options.direction,F=m.offsetWidth,q=m.offsetHeight,Z=X(this.options.offset),tt=this._getAnchor();N==="top"?(o=F/2,l=q):N==="bottom"?(o=F/2,l=0):N==="center"?(o=F/2,l=q/2):N==="right"?(o=0,l=q/2):N==="left"?(o=F,l=q/2):A.x<v.x?(N="right",o=0,l=q/2):(N="left",o=F+(Z.x+tt.x)*2,l=q/2),i=i.subtract(X(o,l,!0)).add(Z).add(tt),Rt(m,"leaflet-tooltip-right"),Rt(m,"leaflet-tooltip-left"),Rt(m,"leaflet-tooltip-top"),Rt(m,"leaflet-tooltip-bottom"),K(m,"leaflet-tooltip-"+N),Nt(m,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&me(this._container,i)},_animateZoom:function(i){var o=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(o)},_getAnchor:function(){return X(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),xm=function(i,o){return new ra(i,o)};dt.include({openTooltip:function(i,o,l){return this._initOverlay(ra,i,o,l).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),$e.include({bindTooltip:function(i,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(ra,this._tooltip,i,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var o=i?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof In||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&(rt(o,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),rt(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var o=typeof i.getElement=="function"&&i.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var o=i.latlng,l,h;this._tooltip.options.sticky&&i.originalEvent&&(l=this._map.mouseEventToContainerPoint(i.originalEvent),h=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(o)}});var Au=Rr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var o=i&&i.tagName==="DIV"?i:document.createElement("div"),l=this.options;if(l.html instanceof Element?(ue(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=X(l.bgPos);o.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Dm(i){return new Au(i)}Rr.Default=Ms;var Os=$e.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Q.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){V(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),Tt(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ke(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Le(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof it?i:new it(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var o=this.getPane().children,l=-i(-1/0,1/0),h=0,m=o.length,v;h<m;h++)v=o[h].style.zIndex,o[h]!==this._container&&v&&(l=i(l,+v));isFinite(l)&&(this.options.zIndex=l+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Q.ielt9){me(this._container,this.options.opacity);var i=+new Date,o=!1,l=!1;for(var h in this._tiles){var m=this._tiles[h];if(!(!m.current||!m.loaded)){var v=Math.min(1,(i-m.loaded)/200);me(m.el,v),v<1?o=!0:(m.active?l=!0:this._onOpaqueTile(m),m.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(x(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this))}},_onOpaqueTile:w,_initContainer:function(){this._container||(this._container=yt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,o=this.options.maxZoom;if(i!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===i?(this._levels[l].el.style.zIndex=o-Math.abs(i-l),this._onUpdateLevel(l)):(Tt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[i],m=this._map;return h||(h=this._levels[i]={},h.el=yt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=o,h.origin=m.project(m.unproject(m.getPixelOrigin()),i).round(),h.zoom=i,this._setZoomTransform(h,m.getCenter(),m.getZoom()),w(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:w,_onRemoveLevel:w,_onCreateLevel:w,_pruneTiles:function(){if(this._map){var i,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)o=this._tiles[i],o.retain=o.current;for(i in this._tiles)if(o=this._tiles[i],o.current&&!o.active){var h=o.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var o in this._tiles)this._tiles[o].coords.z===i&&this._removeTile(o)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)Tt(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,o,l,h){var m=Math.floor(i/2),v=Math.floor(o/2),A=l-1,N=new it(+m,+v);N.z=+A;var F=this._tileCoordsToKey(N),q=this._tiles[F];return q&&q.active?(q.retain=!0,!0):(q&&q.loaded&&(q.retain=!0),A>h?this._retainParent(m,v,A,h):!1)},_retainChildren:function(i,o,l,h){for(var m=2*i;m<2*i+2;m++)for(var v=2*o;v<2*o+2;v++){var A=new it(m,v);A.z=l+1;var N=this._tileCoordsToKey(A),F=this._tiles[N];if(F&&F.active){F.retain=!0;continue}else F&&F.loaded&&(F.retain=!0);l+1<h&&this._retainChildren(m,v,l+1,h)}},_resetView:function(i){var o=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var o=this.options;return o.minNativeZoom!==void 0&&i<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<i?o.maxNativeZoom:i},_setView:function(i,o,l,h){var m=Math.round(o);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var v=this.options.updateWhenZooming&&m!==this._tileZoom;(!h||v)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(i),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(i,o)},_setZoomTransforms:function(i,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],i,o)},_setZoomTransform:function(i,o,l){var h=this._map.getZoomScale(l,i.zoom),m=i.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(o,l)).round();Q.any3d?vn(i.el,m,h):Nt(i.el,m)},_resetGrid:function(){var i=this._map,o=i.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,o.wrapLng[0]],h).x/l.x),Math.ceil(i.project([0,o.wrapLng[1]],h).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([o.wrapLat[0],0],h).y/l.x),Math.ceil(i.project([o.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),h=o.getZoomScale(l,this._tileZoom),m=o.project(i,this._tileZoom).floor(),v=o.getSize().divideBy(h*2);return new St(m.subtract(v),m.add(v))},_update:function(i){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(i===void 0&&(i=o.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(i),m=this._pxBoundsToTileRange(h),v=m.getCenter(),A=[],N=this.options.keepBuffer,F=new St(m.getBottomLeft().subtract([N,-N]),m.getTopRight().add([N,-N]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var q in this._tiles){var Z=this._tiles[q].coords;(Z.z!==this._tileZoom||!F.contains(new it(Z.x,Z.y)))&&(this._tiles[q].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(i,l);return}for(var tt=m.min.y;tt<=m.max.y;tt++)for(var ft=m.min.x;ft<=m.max.x;ft++){var de=new it(ft,tt);if(de.z=this._tileZoom,!!this._isValidTile(de)){var Yt=this._tiles[this._tileCoordsToKey(de)];Yt?Yt.current=!0:A.push(de)}}if(A.sort(function(ge,Dr){return ge.distanceTo(v)-Dr.distanceTo(v)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Me=document.createDocumentFragment();for(ft=0;ft<A.length;ft++)this._addTile(A[ft],Me);this._level.el.appendChild(Me)}}}},_isValidTile:function(i){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(i.x<l.min.x||i.x>l.max.x)||!o.wrapLat&&(i.y<l.min.y||i.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(i);return Lt(this.options.bounds).overlaps(h)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var o=this._map,l=this.getTileSize(),h=i.scaleBy(l),m=h.add(l),v=o.unproject(h,i.z),A=o.unproject(m,i.z);return[v,A]},_tileCoordsToBounds:function(i){var o=this._tileCoordsToNwSe(i),l=new jt(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var o=i.split(":"),l=new it(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(i){var o=this._tiles[i];o&&(Tt(o.el),delete this._tiles[i],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){K(i,"leaflet-tile");var o=this.getTileSize();i.style.width=o.x+"px",i.style.height=o.y+"px",i.onselectstart=w,i.onmousemove=w,Q.ielt9&&this.options.opacity<1&&me(i,this.options.opacity)},_addTile:function(i,o){var l=this._getTilePos(i),h=this._tileCoordsToKey(i),m=this.createTile(this._wrapCoords(i),u(this._tileReady,this,i));this._initTile(m),this.createTile.length<2&&R(u(this._tileReady,this,i,null,m)),Nt(m,l),this._tiles[h]={el:m,coords:i,current:!0},o.appendChild(m),this.fire("tileloadstart",{tile:m,coords:i})},_tileReady:function(i,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:i});var h=this._tileCoordsToKey(i);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(me(l.el,0),x(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(K(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Q.ielt9||!this._map._fadeAnimated?R(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var o=new it(this._wrapX?y(i.x,this._wrapX):i.x,this._wrapY?y(i.y,this._wrapY):i.y);return o.z=i.z,o},_pxBoundsToTileRange:function(i){var o=this.getTileSize();return new St(i.min.unscaleBy(o).floor(),i.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function Nm(i){return new Os(i)}var xr=Os.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,o){this._url=i,o=V(this,o),o.detectRetina&&Q.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,o){return this._url===i&&o===void 0&&(o=!0),this._url=i,o||this.redraw(),this},createTile:function(i,o){var l=document.createElement("img");return rt(l,"load",u(this._tileOnLoad,this,o,l)),rt(l,"error",u(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(i),l},getTileUrl:function(i){var o={r:Q.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-i.y;this.options.tms&&(o.y=l),o["-y"]=l}return H(this._url,s(o,this.options))},_tileOnLoad:function(i,o){Q.ielt9?setTimeout(u(i,this,null,o),0):i(null,o)},_tileOnError:function(i,o,l){var h=this.options.errorTileUrl;h&&o.getAttribute("src")!==h&&(o.src=h),i(l,o)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(i=o-i),i+h},_getSubdomain:function(i){var o=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var i,o;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(o=this._tiles[i].el,o.onload=w,o.onerror=w,!o.complete)){o.src=pt;var l=this._tiles[i].coords;Tt(o),delete this._tiles[i],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(i){var o=this._tiles[i];if(o)return o.el.setAttribute("src",pt),Os.prototype._removeTile.call(this,i)},_tileReady:function(i,o,l){if(!(!this._map||l&&l.getAttribute("src")===pt))return Os.prototype._tileReady.call(this,i,o,l)}});function Pu(i,o){return new xr(i,o)}var Su=xr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,o){this._url=i;var l=s({},this.defaultWmsParams);for(var h in o)h in this.options||(l[h]=o[h]);o=V(this,o);var m=o.detectRetina&&Q.retina?2:1,v=this.getTileSize();l.width=v.x*m,l.height=v.y*m,this.wmsParams=l},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,xr.prototype.onAdd.call(this,i)},getTileUrl:function(i){var o=this._tileCoordsToNwSe(i),l=this._crs,h=Ct(l.project(o[0]),l.project(o[1])),m=h.min,v=h.max,A=(this._wmsVersion>=1.3&&this._crs===Sr?[m.y,m.x,v.y,v.x]:[m.x,m.y,v.x,v.y]).join(","),N=xr.prototype.getTileUrl.call(this,i);return N+U(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(i,o){return s(this.wmsParams,i),o||this.redraw(),this}});function Mm(i,o){return new Su(i,o)}xr.WMS=Su,Pu.wms=Mm;var Pn=$e.extend({options:{padding:.1},initialize:function(i){V(this,i),p(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),K(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,o){var l=this._map.getZoomScale(o,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,o),v=h.multiplyBy(-l).add(m).subtract(this._map._getNewPixelOrigin(i,o));Q.any3d?vn(this._container,v,l):Nt(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-i)).round();this._bounds=new St(l,l.add(o.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Cu=Pn.extend({options:{tolerance:0},getEvents:function(){var i=Pn.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Pn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");rt(i,"mousemove",this._onMouseMove,this),rt(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),rt(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,Tt(this._container),Pt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var o in this._layers)i=this._layers[o],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Pn.prototype._update.call(this);var i=this._bounds,o=this._container,l=i.getSize(),h=Q.retina?2:1;Nt(o,i.min),o.width=h*l.x,o.height=h*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",Q.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){Pn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[p(i)]=i;var o=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var o=i._order,l=o.next,h=o.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete i._order,delete this._layers[p(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var o=i.options.dashArray.split(/[, ]+/),l=[],h,m;for(m=0;m<o.length;m++){if(h=Number(o[m]),isNaN(h))return;l.push(h)}i.options._dashArray=l}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||R(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var o=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new St,this._redrawBounds.extend(i._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(i._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var o=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)i=h.layer,(!o||i._pxBounds&&i._pxBounds.intersects(o))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,o){if(this._drawing){var l,h,m,v,A=i._parts,N=A.length,F=this._ctx;if(N){for(F.beginPath(),l=0;l<N;l++){for(h=0,m=A[l].length;h<m;h++)v=A[l][h],F[h?"lineTo":"moveTo"](v.x,v.y);o&&F.closePath()}this._fillStroke(F,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var o=i._point,l=this._ctx,h=Math.max(Math.round(i._radius),1),m=(Math.max(Math.round(i._radiusY),1)||h)/h;m!==1&&(l.save(),l.scale(1,m)),l.beginPath(),l.arc(o.x,o.y/m,h,0,Math.PI*2,!1),m!==1&&l.restore(),this._fillStroke(l,i)}},_fillStroke:function(i,o){var l=o.options;l.fill&&(i.globalAlpha=l.fillOpacity,i.fillStyle=l.fillColor||l.color,i.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(i.setLineDash&&i.setLineDash(o.options&&o.options._dashArray||[]),i.globalAlpha=l.opacity,i.lineWidth=l.weight,i.strokeStyle=l.color,i.lineCap=l.lineCap,i.lineJoin=l.lineJoin,i.stroke())},_onClick:function(i){for(var o=this._map.mouseEventToLayerPoint(i),l,h,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,o)}},_handleMouseOut:function(i){var o=this._hoveredLayer;o&&(Rt(this._container,"leaflet-interactive"),this._fireEvent([o],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,o){if(!this._mouseHoverThrottled){for(var l,h,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(i),h&&(K(this._container,"leaflet-interactive"),this._fireEvent([h],i,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,o,l){this._map._fireDOMEvent(o,l||o.type,i)},_bringToFront:function(i){var o=i._order;if(o){var l=o.next,h=o.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(i)}},_bringToBack:function(i){var o=i._order;if(o){var l=o.next,h=o.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(i)}}});function Ru(i){return Q.canvas?new Cu(i):null}var Vs=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Om={_initContainer:function(){this._container=yt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Pn.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var o=i._container=Vs("shape");K(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",i._path=Vs("path"),o.appendChild(i._path),this._updateStyle(i),this._layers[p(i)]=i},_addPath:function(i){var o=i._container;this._container.appendChild(o),i.options.interactive&&i.addInteractiveTarget(o)},_removePath:function(i){var o=i._container;Tt(o),i.removeInteractiveTarget(o),delete this._layers[p(i)]},_updateStyle:function(i){var o=i._stroke,l=i._fill,h=i.options,m=i._container;m.stroked=!!h.stroke,m.filled=!!h.fill,h.stroke?(o||(o=i._stroke=Vs("stroke")),m.appendChild(o),o.weight=h.weight+"px",o.color=h.color,o.opacity=h.opacity,h.dashArray?o.dashStyle=W(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=h.lineCap.replace("butt","flat"),o.joinstyle=h.lineJoin):o&&(m.removeChild(o),i._stroke=null),h.fill?(l||(l=i._fill=Vs("fill")),m.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(m.removeChild(l),i._fill=null)},_updateCircle:function(i){var o=i._point.round(),l=Math.round(i._radius),h=Math.round(i._radiusY||l);this._setPath(i,i._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(i,o){i._path.v=o},_bringToFront:function(i){ke(i._container)},_bringToBack:function(i){Le(i._container)}},sa=Q.vml?Vs:Co,Fs=Pn.extend({_initContainer:function(){this._container=sa("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=sa("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Tt(this._container),Pt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Pn.prototype._update.call(this);var i=this._bounds,o=i.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),Nt(l,i.min),l.setAttribute("viewBox",[i.min.x,i.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(i){var o=i._path=sa("path");i.options.className&&K(o,i.options.className),i.options.interactive&&K(o,"leaflet-interactive"),this._updateStyle(i),this._layers[p(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){Tt(i._path),i.removeInteractiveTarget(i._path),delete this._layers[p(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var o=i._path,l=i.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(i,o){this._setPath(i,or(i._parts,o))},_updateCircle:function(i){var o=i._point,l=Math.max(Math.round(i._radius),1),h=Math.max(Math.round(i._radiusY),1)||l,m="a"+l+","+h+" 0 1,0 ",v=i._empty()?"M0 0":"M"+(o.x-l)+","+o.y+m+l*2+",0 "+m+-l*2+",0 ";this._setPath(i,v)},_setPath:function(i,o){i._path.setAttribute("d",o)},_bringToFront:function(i){ke(i._path)},_bringToBack:function(i){Le(i._path)}});Q.vml&&Fs.include(Om);function ku(i){return Q.svg||Q.vml?new Fs(i):null}dt.include({getRenderer:function(i){var o=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var o=this._paneRenderers[i];return o===void 0&&(o=this._createRenderer({pane:i}),this._paneRenderers[i]=o),o},_createRenderer:function(i){return this.options.preferCanvas&&Ru(i)||ku(i)}});var Lu=kr.extend({initialize:function(i,o){kr.prototype.initialize.call(this,this._boundsToLatLngs(i),o)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=Lt(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function Vm(i,o){return new Lu(i,o)}Fs.create=sa,Fs.pointsToPath=or,An.geometryToLayer=Yo,An.coordsToLatLng=Ic,An.coordsToLatLngs=Xo,An.latLngToCoords=bc,An.latLngsToCoords=ta,An.getFeature=Lr,An.asFeature=ea,dt.mergeOptions({boxZoom:!0});var xu=Ee.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){rt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Pt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Tt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Be(),gr(),this._startPoint=this._map.mouseEventToContainerPoint(i),rt(document,{contextmenu:Je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=yt("div","leaflet-zoom-box",this._container),K(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var o=new St(this._point,this._startPoint),l=o.getSize();Nt(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(Tt(this._box),Rt(this._container,"leaflet-crosshair")),Te(),yr(),Pt(document,{contextmenu:Je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var o=new jt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});dt.addInitHook("addHandler","boxZoom",xu),dt.mergeOptions({doubleClickZoom:!0});var Du=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var o=this._map,l=o.getZoom(),h=o.options.zoomDelta,m=i.originalEvent.shiftKey?l-h:l+h;o.options.doubleClickZoom==="center"?o.setZoom(m):o.setZoomAround(i.containerPoint,m)}});dt.addInitHook("addHandler","doubleClickZoom",Du),dt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Nu=Ee.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new ze(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}K(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Rt(this._map._container,"leaflet-grab"),Rt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Lt(this._map.options.maxBounds);this._offsetLimit=Ct(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,o){return i-(i-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;i.x<o.min.x&&(i.x=this._viscousLimit(i.x,o.min.x)),i.y<o.min.y&&(i.y=this._viscousLimit(i.y,o.min.y)),i.x>o.max.x&&(i.x=this._viscousLimit(i.x,o.max.x)),i.y>o.max.y&&(i.y=this._viscousLimit(i.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,o=Math.round(i/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,m=(h-o+l)%i+o-l,v=(h+o+l)%i-o-l,A=Math.abs(m+l)<Math.abs(v+l)?m:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(i){var o=this._map,l=o.options,h=!l.inertia||i.noInertia||this._times.length<2;if(o.fire("dragend",i),h)o.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,A=l.easeLinearity,N=m.multiplyBy(A/v),F=N.distanceTo([0,0]),q=Math.min(l.inertiaMaxSpeed,F),Z=N.multiplyBy(q/F),tt=q/(l.inertiaDeceleration*A),ft=Z.multiplyBy(-tt/2).round();!ft.x&&!ft.y?o.fire("moveend"):(ft=o._limitOffset(ft,o.options.maxBounds),R(function(){o.panBy(ft,{duration:tt,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});dt.addInitHook("addHandler","dragging",Nu),dt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mu=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),rt(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Pt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,o=document.documentElement,l=i.scrollTop||o.scrollTop,h=i.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var o=this._panKeys={},l=this.keyCodes,h,m;for(h=0,m=l.left.length;h<m;h++)o[l.left[h]]=[-1*i,0];for(h=0,m=l.right.length;h<m;h++)o[l.right[h]]=[i,0];for(h=0,m=l.down.length;h<m;h++)o[l.down[h]]=[0,i];for(h=0,m=l.up.length;h<m;h++)o[l.up[h]]=[0,-1*i]},_setZoomDelta:function(i){var o=this._zoomKeys={},l=this.keyCodes,h,m;for(h=0,m=l.zoomIn.length;h<m;h++)o[l.zoomIn[h]]=i;for(h=0,m=l.zoomOut.length;h<m;h++)o[l.zoomOut[h]]=-i},_addHooks:function(){rt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Pt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var o=i.keyCode,l=this._map,h;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[o],i.shiftKey&&(h=X(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(X(h),l.options.maxBounds)),l.options.worldCopyJump){var m=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(m)}else l.panBy(h)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Je(i)}}});dt.addInitHook("addHandler","keyboard",Mu),dt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ou=Ee.extend({addHooks:function(){rt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Pt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var o=Ps(i),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),h),Je(i)},_performZoom:function(){var i=this._map,o=i.getZoom(),l=this._map.options.zoomSnap||0;i._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,v=l?Math.ceil(m/l)*l:m,A=i._limitZoom(o+(this._delta>0?v:-v))-o;this._delta=0,this._startTime=null,A&&(i.options.scrollWheelZoom==="center"?i.setZoom(o+A):i.setZoomAround(this._lastMousePos,o+A))}});dt.addInitHook("addHandler","scrollWheelZoom",Ou);var Fm=600;dt.mergeOptions({tapHold:Q.touchNative&&Q.safari&&Q.mobile,tapTolerance:15});var Vu=Ee.extend({addHooks:function(){rt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Pt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var o=i.touches[0];this._startPos=this._newPos=new it(o.clientX,o.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(rt(document,"touchend",Ut),rt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Fm),rt(document,"touchend touchcancel contextmenu",this._cancel,this),rt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){Pt(document,"touchend",Ut),Pt(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),Pt(document,"touchend touchcancel contextmenu",this._cancel,this),Pt(document,"touchmove",this._onMove,this)},_onMove:function(i){var o=i.touches[0];this._newPos=new it(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,o){var l=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});dt.addInitHook("addHandler","tapHold",Vu),dt.mergeOptions({touchZoom:Q.touch,bounceAtZoomLimits:!0});var Fu=Ee.extend({addHooks:function(){K(this._map._container,"leaflet-touch-zoom"),rt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Rt(this._map._container,"leaflet-touch-zoom"),Pt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var o=this._map;if(!(!i.touches||i.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(i.touches[0]),h=o.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),rt(document,"touchmove",this._onTouchMove,this),rt(document,"touchend touchcancel",this._onTouchEnd,this),Ut(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(i.touches[0]),h=o.mouseEventToContainerPoint(i.touches[1]),m=l.distanceTo(h)/this._startDist;if(this._zoom=o.getScaleZoom(m,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&m<1||this._zoom>o.getMaxZoom()&&m>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var v=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(m===1&&v.x===0&&v.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var A=u(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=R(A,this,!0),Ut(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,x(this._animRequest),Pt(document,"touchmove",this._onTouchMove,this),Pt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});dt.addInitHook("addHandler","touchZoom",Fu),dt.BoxZoom=xu,dt.DoubleClickZoom=Du,dt.Drag=Nu,dt.Keyboard=Mu,dt.ScrollWheelZoom=Ou,dt.TapHold=Vu,dt.TouchZoom=Fu,e.Bounds=St,e.Browser=Q,e.CRS=we,e.Canvas=Cu,e.Circle=Ec,e.CircleMarker=Jo,e.Class=lt,e.Control=_e,e.DivIcon=Au,e.DivOverlay=nn,e.DomEvent=Bi,e.DomUtil=Tc,e.Draggable=ze,e.Evented=fn,e.FeatureGroup=In,e.GeoJSON=An,e.GridLayer=Os,e.Handler=Ee,e.Icon=Rr,e.ImageOverlay=na,e.LatLng=wt,e.LatLngBounds=jt,e.Layer=$e,e.LayerGroup=Cr,e.LineUtil=De,e.Map=dt,e.Marker=Qo,e.Mixin=Zo,e.Path=Yn,e.Point=it,e.PolyUtil=Ar,e.Polygon=kr,e.Polyline=bn,e.Popup=ia,e.PosAnimation=Cs,e.Projection=en,e.Rectangle=Lu,e.Renderer=Pn,e.SVG=Fs,e.SVGOverlay=bu,e.TileLayer=xr,e.Tooltip=ra,e.Transformation=ds,e.Util=b,e.VideoOverlay=Iu,e.bind=u,e.bounds=Ct,e.canvas=Ru,e.circle=bm,e.circleMarker=Im,e.control=Xe,e.divIcon=Dm,e.extend=s,e.featureGroup=wm,e.geoJSON=Eu,e.geoJson=Sm,e.gridLayer=Nm,e.icon=Tm,e.imageOverlay=Cm,e.latLng=ht,e.latLngBounds=Lt,e.layerGroup=vm,e.map=Tr,e.marker=Em,e.point=X,e.polygon=Pm,e.polyline=Am,e.popup=Lm,e.rectangle=Vm,e.setOptions=V,e.stamp=p,e.svg=ku,e.svgOverlay=km,e.tileLayer=Pu,e.tooltip=xm,e.transformation=qn,e.version=r,e.videoOverlay=Rm;var Um=window.L;e.noConflict=function(){return window.L=Um,this},window.L=e})})(gl,gl.exports);var hb=gl.exports;const Br=ub(hb),_m="trippy-geocache";let Cd=Promise.resolve();function Rd(){try{return JSON.parse(localStorage.getItem(_m)||"{}")}catch{return{}}}function db(n){try{localStorage.setItem(_m,JSON.stringify(n))}catch{}}async function fb(n){const t=n.toLowerCase().trim(),e=Rd();if(e[t])return e[t];const r=await(Cd=Cd.then(async()=>{await new Promise(s=>setTimeout(s,350));try{const s=`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(n)}`,u=await(await fetch(s,{headers:{"Accept-Language":"en"}})).json();return u!=null&&u.length?{lat:parseFloat(u[0].lat),lng:parseFloat(u[0].lon)}:null}catch{return null}}));if(r){const s=Rd();s[t]=r,db(s)}return r}async function pb(n){const t=[...new Set(n.filter(Boolean))],e={};for(const r of t)e[r]=await fb(r);return e}let zs=null,Oe=null,Fr=null;function mb(n,t){var r;zs&&(zs.destroy(),zs=null),Oe&&(Oe.remove(),Oe=null),Fr=null;const e=((r=Po())==null?void 0:r.uid)||null;n.innerHTML=`
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
  `,dc(n),n.querySelector("#globe-back").addEventListener("click",()=>Mn(`/trip/${t}`)),Oe=Br.map("map-inner",{zoomControl:!0}).setView([20,10],2),Br.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(Oe),zs=lm(t,e,s=>kd(n,s)),kd(n,zs.getAll())}async function kd(n,t,e){var p,g;const r=n.querySelector("#globe-day-list");if(!r||!Oe)return;if(Fr&&(r.removeEventListener("click",Fr),Fr=null),Oe.eachLayer(y=>{y instanceof Br.TileLayer||Oe.removeLayer(y)}),t.length===0){r.innerHTML='<div class="globe-empty">No days in this trip yet.</div>';return}r.innerHTML='<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>'+t.map((y,w)=>`
      <div class="globe-day-item" data-dest="${zc(y.destination)}" data-idx="${w}">
        <div class="globe-day-date">${_b(y.date)}</div>
        <div class="globe-day-dest">${zc(y.destination||"Unknown")}</div>
        ${y.event?`<div class="globe-day-event">${zc(y.event)}</div>`:""}
        ${y.travelDay?'<span class="globe-travel-badge">Travel</span>':""}
      </div>
    `).join("");const s=[...new Set(t.map(y=>y.destination).filter(Boolean))],a=await pb(s);(p=r.querySelector(".geocoding-hint"))==null||p.remove(),(g=r.querySelector(".globe-day-item"))==null||g.classList.add("active");const u=t.filter(y=>y.destination&&a[y.destination]).map(y=>[a[y.destination].lat,a[y.destination].lng]);u.length>1&&Br.polyline(u,{color:"#7c6af7",weight:2.5,opacity:.85,dashArray:"6 10"}).addTo(Oe);const d={};for(const y of s){if(!a[y])continue;const w=Br.circleMarker([a[y].lat,a[y].lng],{radius:7,fillColor:"#7c6af7",color:"#fff",weight:1.5,fillOpacity:.9}).addTo(Oe);w.bindTooltip(y,{direction:"top",offset:[0,-8],className:"map-tooltip"}),d[y]=w}u.length>0&&Oe.fitBounds(Br.latLngBounds(u),{padding:[50,50],maxZoom:8}),Fr=y=>{var S;const w=y.target.closest(".globe-day-item");if(!w)return;const E=w.dataset.dest;E&&a[E]&&(Oe.flyTo([a[E].lat,a[E].lng],10,{duration:1.5}),r.querySelectorAll(".globe-day-item").forEach(M=>M.classList.remove("active")),w.classList.add("active"),w.scrollIntoView({behavior:"smooth",block:"nearest"}),(S=d[E])==null||S.openTooltip())},r.addEventListener("click",Fr)}function _b(n){if(!n)return"";const[t,e,r]=n.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function zc(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const Cn=document.getElementById("app");gI();const gm=AI({"/":()=>pm(Cn),"/trip/:id":({id:n})=>cb(Cn,n),"/globe/:id":({id:n})=>mb(Cn,n),"/join/:code":async({code:n})=>{var e,r;const t=Po();if(!t){Cn.innerHTML=`
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
      `,dc(Cn),(e=Cn.querySelector("#join-home-btn"))==null||e.addEventListener("click",()=>Mn("/"));return}try{Cn.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⏳</div>
          <p>Joining trip…</p>
        </div>
      `;const s=await LI(n,t.uid);Mn(`/trip/${s}`)}catch(s){Cn.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⚠️</div>
          <h2>Could not join trip</h2>
          <p>${s.message}</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `,(r=Cn.querySelector("#join-home-btn"))==null||r.addEventListener("click",()=>Mn("/"))}}});yI(async n=>{n&&(await NI(n.uid,n.displayName||n.email||""),VI(n.uid,n.displayName||"",n.email||"")),gm.refresh()});gm.start();
