(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const $m=()=>{};var qu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},jm=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const s=i[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=i[e++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=i[e++],u=i[e++],d=i[e++],p=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const a=i[e++],u=i[e++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<i.length;s+=3){const a=i[s],u=s+1<i.length,d=u?i[s+1]:0,p=s+2<i.length,g=p?i[s+2]:0,y=a>>2,w=(a&3)<<4|d>>4;let E=(d&15)<<2|g>>6,S=g&63;p||(S=64,u||(E=64)),r.push(e[y],e[w],e[E],e[S])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Sd(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):jm(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<i.length;){const a=e[i.charAt(s++)],d=s<i.length?e[i.charAt(s)]:0;++s;const g=s<i.length?e[i.charAt(s)]:64;++s;const w=s<i.length?e[i.charAt(s)]:64;if(++s,a==null||d==null||g==null||w==null)throw new Hm;const E=a<<2|d>>4;if(r.push(E),g!==64){const S=d<<4&240|g>>2;if(r.push(S),w!==64){const O=g<<6&192|w;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Hm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wm=function(i){const t=Sd(i);return Cd.encodeByteArray(t,!0)},Aa=function(i){return Wm(i).replace(/\./g,"")},Rd=function(i){try{return Cd.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Gm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zm=()=>Gm().__FIREBASE_DEFAULTS__,Km=()=>{if(typeof process>"u"||typeof qu>"u")return;const i=qu.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Qm=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Rd(i[1]);return t&&JSON.parse(t)},Ha=()=>{try{return $m()||Zm()||Km()||Qm()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},kd=i=>{var t,e;return(e=(t=Ha())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},Jm=i=>{const t=kd(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ld=()=>{var i;return(i=Ha())==null?void 0:i.config},xd=i=>{var t;return(t=Ha())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Xm(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=i.iat||0,a=i.sub||i.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Aa(JSON.stringify(e)),Aa(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function e_(){var t;const i=(t=Ha())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function i_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function r_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function s_(){const i=le();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function o_(){return!e_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a_(){try{return typeof indexedDB=="object"}catch{return!1}}function c_(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)==null?void 0:a.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="FirebaseError";class Fn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=l_,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?u_(a,r):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new Fn(s,d,r)}}function u_(i,t){return i.replace(h_,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const h_=/\{\$([^}]+)}/g;function d_(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Dn(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const a=i[s],u=t[s];if($u(a)&&$u(u)){if(!Dn(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function $u(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Bs(i){const t={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(a)}}),t}function zs(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function f_(i,t){const e=new p_(i,t);return e.subscribe.bind(e)}class p_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");m_(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Pc),s.error===void 0&&(s.error=Pc),s.complete===void 0&&(s.complete=Pc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m_(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function Pc(){}/**
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
 */function Wt(i){return i&&i._delegate?i._delegate:i}/**
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
 */function uo(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dd(i){return(await fetch(i,{credentials:"include"})).ok}class Zi{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class __{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Ym;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(y_(t))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=zi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zi){return this.instances.has(t)}getOptions(t=zi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:g_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zi){return this.component?this.component.multipleInstances?t:zi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function g_(i){return i===zi?void 0:i}function y_(i){return i.instantiationMode==="EAGER"}/**
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
 */class v_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new __(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(_t||(_t={}));const w_={debug:_t.DEBUG,verbose:_t.VERBOSE,info:_t.INFO,warn:_t.WARN,error:_t.ERROR,silent:_t.SILENT},T_=_t.INFO,E_={[_t.DEBUG]:"log",[_t.VERBOSE]:"log",[_t.INFO]:"info",[_t.WARN]:"warn",[_t.ERROR]:"error"},I_=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),s=E_[t];if(s)console[s](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yl{constructor(t){this.name=t,this._logLevel=T_,this._logHandler=I_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in _t))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?w_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,_t.DEBUG,...t),this._logHandler(this,_t.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,_t.VERBOSE,...t),this._logHandler(this,_t.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,_t.INFO,...t),this._logHandler(this,_t.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,_t.WARN,...t),this._logHandler(this,_t.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,_t.ERROR,...t),this._logHandler(this,_t.ERROR,...t)}}const b_=(i,t)=>t.some(e=>i instanceof e);let ju,Hu;function A_(){return ju||(ju=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function P_(){return Hu||(Hu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nd=new WeakMap,qc=new WeakMap,Md=new WeakMap,Sc=new WeakMap,vl=new WeakMap;function S_(i){const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("success",a),i.removeEventListener("error",u)},a=()=>{e(ei(i.result)),s()},u=()=>{r(i.error),s()};i.addEventListener("success",a),i.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Nd.set(e,i)}).catch(()=>{}),vl.set(t,i),t}function C_(i){if(qc.has(i))return;const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("complete",a),i.removeEventListener("error",u),i.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{r(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",a),i.addEventListener("error",u),i.addEventListener("abort",u)});qc.set(i,t)}let $c={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return qc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Md.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ei(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function R_(i){$c=i($c)}function k_(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call(Cc(this),t,...e);return Md.set(r,t.sort?t.sort():[t]),ei(r)}:P_().includes(i)?function(...t){return i.apply(Cc(this),t),ei(Nd.get(this))}:function(...t){return ei(i.apply(Cc(this),t))}}function L_(i){return typeof i=="function"?k_(i):(i instanceof IDBTransaction&&C_(i),b_(i,A_())?new Proxy(i,$c):i)}function ei(i){if(i instanceof IDBRequest)return S_(i);if(Sc.has(i))return Sc.get(i);const t=L_(i);return t!==i&&(Sc.set(i,t),vl.set(t,i)),t}const Cc=i=>vl.get(i);function x_(i,t,{blocked:e,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(i,t),d=ei(u);return r&&u.addEventListener("upgradeneeded",p=>{r(ei(u.result),p.oldVersion,p.newVersion,ei(u.transaction),p)}),e&&u.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),d.then(p=>{a&&p.addEventListener("close",()=>a()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const D_=["get","getKey","getAll","getAllKeys","count"],N_=["put","add","delete","clear"],Rc=new Map;function Wu(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Rc.get(t))return Rc.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=N_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||D_.includes(e)))return;const a=async function(u,...d){const p=this.transaction(u,s?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(d.shift())),(await Promise.all([g[e](...d),s&&p.done]))[0]};return Rc.set(t,a),a}R_(i=>({...i,get:(t,e,r)=>Wu(t,e)||i.get(t,e,r),has:(t,e)=>!!Wu(t,e)||i.has(t,e)}));/**
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
 */class M_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(O_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function O_(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jc="@firebase/app",Gu="0.14.12";/**
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
 */const Nn=new yl("@firebase/app"),V_="@firebase/app-compat",F_="@firebase/analytics-compat",U_="@firebase/analytics",B_="@firebase/app-check-compat",z_="@firebase/app-check",q_="@firebase/auth",$_="@firebase/auth-compat",j_="@firebase/database",H_="@firebase/data-connect",W_="@firebase/database-compat",G_="@firebase/functions",Z_="@firebase/functions-compat",K_="@firebase/installations",Q_="@firebase/installations-compat",J_="@firebase/messaging",Y_="@firebase/messaging-compat",X_="@firebase/performance",tg="@firebase/performance-compat",eg="@firebase/remote-config",ng="@firebase/remote-config-compat",ig="@firebase/storage",rg="@firebase/storage-compat",sg="@firebase/firestore",og="@firebase/ai",ag="@firebase/firestore-compat",cg="firebase",lg="12.13.0";/**
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
 */const Hc="[DEFAULT]",ug={[jc]:"fire-core",[V_]:"fire-core-compat",[U_]:"fire-analytics",[F_]:"fire-analytics-compat",[z_]:"fire-app-check",[B_]:"fire-app-check-compat",[q_]:"fire-auth",[$_]:"fire-auth-compat",[j_]:"fire-rtdb",[H_]:"fire-data-connect",[W_]:"fire-rtdb-compat",[G_]:"fire-fn",[Z_]:"fire-fn-compat",[K_]:"fire-iid",[Q_]:"fire-iid-compat",[J_]:"fire-fcm",[Y_]:"fire-fcm-compat",[X_]:"fire-perf",[tg]:"fire-perf-compat",[eg]:"fire-rc",[ng]:"fire-rc-compat",[ig]:"fire-gcs",[rg]:"fire-gcs-compat",[sg]:"fire-fst",[ag]:"fire-fst-compat",[og]:"fire-vertex","fire-js":"fire-js",[cg]:"fire-js-all"};/**
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
 */const Pa=new Map,hg=new Map,Wc=new Map;function Zu(i,t){try{i.container.addComponent(t)}catch(e){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Gr(i){const t=i.name;if(Wc.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;Wc.set(t,i);for(const e of Pa.values())Zu(e,i);for(const e of hg.values())Zu(e,i);return!0}function wl(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function be(i){return i==null?!1:i.settings!==void 0}/**
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
 */const dg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ni=new co("app","Firebase",dg);/**
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
 */class fg{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
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
 */const es=lg;function Od(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r={name:Hc,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ni.create("bad-app-name",{appName:String(s)});if(e||(e=Ld()),!e)throw ni.create("no-options");const a=Pa.get(s);if(a){if(Dn(e,a.options)&&Dn(r,a.config))return a;throw ni.create("duplicate-app",{appName:s})}const u=new v_(s);for(const p of Wc.values())u.addComponent(p);const d=new fg(e,r,u);return Pa.set(s,d),d}function Vd(i=Hc){const t=Pa.get(i);if(!t&&i===Hc&&Ld())return Od();if(!t)throw ni.create("no-app",{appName:i});return t}function ii(i,t,e){let r=ug[i]??i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${r}" with version "${t}":`];s&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nn.warn(u.join(" "));return}Gr(new Zi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const pg="firebase-heartbeat-database",mg=1,Ys="firebase-heartbeat-store";let kc=null;function Fd(){return kc||(kc=x_(pg,mg,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Ys)}catch(e){console.warn(e)}}}}).catch(i=>{throw ni.create("idb-open",{originalErrorMessage:i.message})})),kc}async function _g(i){try{const e=(await Fd()).transaction(Ys),r=await e.objectStore(Ys).get(Ud(i));return await e.done,r}catch(t){if(t instanceof Fn)Nn.warn(t.message);else{const e=ni.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nn.warn(e.message)}}}async function Ku(i,t){try{const r=(await Fd()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(t,Ud(i)),await r.done}catch(e){if(e instanceof Fn)Nn.warn(e.message);else{const r=ni.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(r.message)}}}function Ud(i){return`${i.name}!${i.options.appId}`}/**
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
 */const gg=1024,yg=30;class vg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Tg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Qu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>yg){const u=Eg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Qu(),{heartbeatsToSend:r,unsentEntries:s}=wg(this._heartbeatsCache.heartbeats),a=Aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Nn.warn(e),""}}}function Qu(){return new Date().toISOString().substring(0,10)}function wg(i,t=gg){const e=[];let r=i.slice();for(const s of i){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Ju(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Ju(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Tg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a_()?c_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await _g(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ku(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ju(i){return Aa(JSON.stringify({version:2,heartbeats:i})).length}function Eg(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let r=1;r<i.length;r++)i[r].date<e&&(e=i[r].date,t=r);return t}/**
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
 */function Ig(i){Gr(new Zi("platform-logger",t=>new M_(t),"PRIVATE")),Gr(new Zi("heartbeat",t=>new vg(t),"PRIVATE")),ii(jc,Gu,i),ii(jc,Gu,"esm2020"),ii("fire-js","")}Ig("");var bg="firebase",Ag="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii(bg,Ag,"app");var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ri,Bd;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,I){function P(){}P.prototype=I.prototype,R.F=I.prototype,R.prototype=new P,R.prototype.constructor=R,R.D=function(k,C,x){for(var b=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)b[Rt-2]=arguments[Rt];return I.prototype[C].apply(k,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,I,P){P||(P=0);const k=Array(16);if(typeof I=="string")for(var C=0;C<16;++C)k[C]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(C=0;C<16;++C)k[C]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=R.g[0],P=R.g[1],C=R.g[2];let x=R.g[3],b;b=I+(x^P&(C^x))+k[0]+3614090360&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[1]+3905402710&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[2]+606105819&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[3]+3250441966&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(x^P&(C^x))+k[4]+4118548399&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[5]+1200080426&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[6]+2821735955&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[7]+4249261313&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(x^P&(C^x))+k[8]+1770035416&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[9]+2336552879&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[10]+4294925233&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[11]+2304563134&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(x^P&(C^x))+k[12]+1804603682&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[13]+4254626195&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[14]+2792965006&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[15]+1236535329&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(C^x&(P^C))+k[1]+4129170786&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[6]+3225465664&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[11]+643717713&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[0]+3921069994&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(P^C))+k[5]+3593408605&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[10]+38016083&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[15]+3634488961&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[4]+3889429448&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(P^C))+k[9]+568446438&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[14]+3275163606&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[3]+4107603335&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[8]+1163531501&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(P^C))+k[13]+2850285829&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[2]+4243563512&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[7]+1735328473&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[12]+2368359562&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(P^C^x)+k[5]+4294588738&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[8]+2272392833&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[11]+1839030562&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[14]+4259657740&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(P^C^x)+k[1]+2763975236&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[4]+1272893353&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[7]+4139469664&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[10]+3200236656&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(P^C^x)+k[13]+681279174&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[0]+3936430074&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[3]+3572445317&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[6]+76029189&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(P^C^x)+k[9]+3654602809&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[12]+3873151461&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[15]+530742520&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[2]+3299628645&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(C^(P|~x))+k[0]+4096336452&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[7]+1126891415&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[14]+2878612391&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[5]+4237533241&4294967295,P=C+(b<<21&4294967295|b>>>11),b=I+(C^(P|~x))+k[12]+1700485571&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[3]+2399980690&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[10]+4293915773&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[1]+2240044497&4294967295,P=C+(b<<21&4294967295|b>>>11),b=I+(C^(P|~x))+k[8]+1873313359&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[15]+4264355552&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[6]+2734768916&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[13]+1309151649&4294967295,P=C+(b<<21&4294967295|b>>>11),b=I+(C^(P|~x))+k[4]+4149444226&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[11]+3174756917&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[2]+718787259&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+x&4294967295}r.prototype.v=function(R,I){I===void 0&&(I=R.length);const P=I-this.blockSize,k=this.C;let C=this.h,x=0;for(;x<I;){if(C==0)for(;x<=P;)s(this,R,x),x+=this.blockSize;if(typeof R=="string"){for(;x<I;)if(k[C++]=R.charCodeAt(x++),C==this.blockSize){s(this,k),C=0;break}}else for(;x<I;)if(k[C++]=R[x++],C==this.blockSize){s(this,k),C=0;break}}this.h=C,this.o+=I},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;I=this.o*8;for(var P=R.length-8;P<R.length;++P)R[P]=I&255,I/=256;for(this.v(R),R=Array(16),I=0,P=0;P<4;++P)for(let k=0;k<32;k+=8)R[I++]=this.g[P]>>>k&255;return R};function a(R,I){var P=d;return Object.prototype.hasOwnProperty.call(P,R)?P[R]:P[R]=I(R)}function u(R,I){this.h=I;const P=[];let k=!0;for(let C=R.length-1;C>=0;C--){const x=R[C]|0;k&&x==I||(P[C]=x,k=!1)}this.g=P}var d={};function p(R){return-128<=R&&R<128?a(R,function(I){return new u([I|0],I<0?-1:0)}):new u([R|0],R<0?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return w;if(R<0)return B(g(-R));const I=[];let P=1;for(let k=0;R>=P;k++)I[k]=R/P|0,P*=4294967296;return new u(I,0)}function y(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return B(y(R.substring(1),I));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=g(Math.pow(I,8));let k=w;for(let x=0;x<R.length;x+=8){var C=Math.min(8,R.length-x);const b=parseInt(R.substring(x,x+C),I);C<8?(C=g(Math.pow(I,C)),k=k.j(C).add(g(b))):(k=k.j(P),k=k.add(g(b)))}return k}var w=p(0),E=p(1),S=p(16777216);i=u.prototype,i.m=function(){if(F(this))return-B(this).m();let R=0,I=1;for(let P=0;P<this.g.length;P++){const k=this.i(P);R+=(k>=0?k:4294967296+k)*I,I*=4294967296}return R},i.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(O(this))return"0";if(F(this))return"-"+B(this).toString(R);const I=g(Math.pow(R,6));var P=this;let k="";for(;;){const C=Y(P,I).g;P=tt(P,C.j(I));let x=((P.g.length>0?P.g[0]:P.h)>>>0).toString(R);if(P=C,O(P))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},i.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function O(R){if(R.h!=0)return!1;for(let I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function F(R){return R.h==-1}i.l=function(R){return R=tt(this,R),F(R)?-1:O(R)?0:1};function B(R){const I=R.g.length,P=[];for(let k=0;k<I;k++)P[k]=~R.g[k];return new u(P,~R.h).add(E)}i.abs=function(){return F(this)?B(this):this},i.add=function(R){const I=Math.max(this.g.length,R.g.length),P=[];let k=0;for(let C=0;C<=I;C++){let x=k+(this.i(C)&65535)+(R.i(C)&65535),b=(x>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);k=b>>>16,x&=65535,b&=65535,P[C]=b<<16|x}return new u(P,P[P.length-1]&-2147483648?-1:0)};function tt(R,I){return R.add(B(I))}i.j=function(R){if(O(this)||O(R))return w;if(F(this))return F(R)?B(this).j(B(R)):B(B(this).j(R));if(F(R))return B(this.j(B(R)));if(this.l(S)<0&&R.l(S)<0)return g(this.m()*R.m());const I=this.g.length+R.g.length,P=[];for(var k=0;k<2*I;k++)P[k]=0;for(k=0;k<this.g.length;k++)for(let C=0;C<R.g.length;C++){const x=this.i(k)>>>16,b=this.i(k)&65535,Rt=R.i(C)>>>16,$t=R.i(C)&65535;P[2*k+2*C]+=b*$t,H(P,2*k+2*C),P[2*k+2*C+1]+=x*$t,H(P,2*k+2*C+1),P[2*k+2*C+1]+=b*Rt,H(P,2*k+2*C+1),P[2*k+2*C+2]+=x*Rt,H(P,2*k+2*C+2)}for(R=0;R<I;R++)P[R]=P[2*R+1]<<16|P[2*R];for(R=I;R<2*I;R++)P[R]=0;return new u(P,0)};function H(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function j(R,I){this.g=R,this.h=I}function Y(R,I){if(O(I))throw Error("division by zero");if(O(R))return new j(w,w);if(F(R))return I=Y(B(R),I),new j(B(I.g),B(I.h));if(F(I))return I=Y(R,B(I)),new j(B(I.g),I.h);if(R.g.length>30){if(F(R)||F(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,k=I;k.l(R)<=0;)P=lt(P),k=lt(k);var C=Z(P,1),x=Z(k,1);for(k=Z(k,2),P=Z(P,2);!O(k);){var b=x.add(k);b.l(R)<=0&&(C=C.add(P),x=b),k=Z(k,1),P=Z(P,1)}return I=tt(R,C.j(I)),new j(C,I)}for(C=w;R.l(I)>=0;){for(P=Math.max(1,Math.floor(R.m()/I.m())),k=Math.ceil(Math.log(P)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=g(P),b=x.j(I);F(b)||b.l(R)>0;)P-=k,x=g(P),b=x.j(I);O(x)&&(x=E),C=C.add(x),R=tt(R,b)}return new j(C,R)}i.B=function(R){return Y(this,R).h},i.and=function(R){const I=Math.max(this.g.length,R.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)&R.i(k);return new u(P,this.h&R.h)},i.or=function(R){const I=Math.max(this.g.length,R.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)|R.i(k);return new u(P,this.h|R.h)},i.xor=function(R){const I=Math.max(this.g.length,R.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)^R.i(k);return new u(P,this.h^R.h)};function lt(R){const I=R.g.length+1,P=[];for(let k=0;k<I;k++)P[k]=R.i(k)<<1|R.i(k-1)>>>31;return new u(P,R.h)}function Z(R,I){const P=I>>5;I%=32;const k=R.g.length-P,C=[];for(let x=0;x<k;x++)C[x]=I>0?R.i(x+P)>>>I|R.i(x+P+1)<<32-I:R.i(x+P);return new u(C,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Bd=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,ri=u}).apply(typeof Yu<"u"?Yu:typeof self<"u"?self:typeof window<"u"?window:{});var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zd,qs,qd,pa,Gc,$d,jd,Hd;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof sa=="object"&&sa];for(var f=0;f<c.length;++f){var _=c[f];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=e(this);function s(c,f){if(f)t:{var _=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var D=c[T];if(!(D in _))break t;_=_[D]}c=c[c.length-1],T=_[c],f=f(T),f!=T&&f!=null&&t(_,c,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(f){var _=[],T;for(T in f)Object.prototype.hasOwnProperty.call(f,T)&&_.push([T,f[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function d(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function p(c,f,_){return c.call.apply(c.bind,arguments)}function g(c,f,_){return g=p,g.apply(null,arguments)}function y(c,f){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,f){function _(){}_.prototype=f.prototype,c.Z=f.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,D,M){for(var $=Array(arguments.length-2),at=2;at<arguments.length;at++)$[at-2]=arguments[at];return f.prototype[D].apply(T,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function S(c){const f=c.length;if(f>0){const _=Array(f);for(let T=0;T<f;T++)_[T]=c[T];return _}return[]}function O(c,f){for(let T=1;T<arguments.length;T++){const D=arguments[T];var _=typeof D;if(_=_!="object"?_:D?Array.isArray(D)?"array":_:"null",_=="array"||_=="object"&&typeof D.length=="number"){_=c.length||0;const M=D.length||0;c.length=_+M;for(let $=0;$<M;$++)c[_+$]=D[$]}else c.push(D)}}class F{constructor(f,_){this.i=f,this.j=_,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function B(c){u.setTimeout(()=>{throw c},0)}function tt(){var c=R;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class H{constructor(){this.h=this.g=null}add(f,_){const T=j.get();T.set(f,_),this.h?this.h.next=T:this.g=T,this.h=T}}var j=new F(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(f,_){this.h=f,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,Z=!1,R=new H,I=()=>{const c=Promise.resolve(void 0);lt=()=>{c.then(P)}};function P(){for(var c;c=tt();){try{c.h.call(c.g)}catch(_){B(_)}var f=j;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}Z=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,f),u.removeEventListener("test",_,f)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function Rt(c,f){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}w(Rt,C),Rt.prototype.init=function(c,f){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(_=="mouseover"?f=c.fromElement:_=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Rt.Z.h.call(this)},Rt.prototype.h=function(){Rt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),Yt=0;function Ei(c,f,_,T,D){this.listener=c,this.proxy=null,this.src=f,this.type=_,this.capture=!!T,this.ha=D,this.key=++Yt,this.da=this.fa=!1}function rt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ii(c,f,_){for(const T in c)f.call(_,c[T],T,c)}function st(c,f){for(const _ in c)f.call(void 0,c[_],_,c)}function Pt(c){const f={};for(const _ in c)f[_]=c[_];return f}const Xt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(c,f){let _,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(_ in T)c[_]=T[_];for(let M=0;M<Xt.length;M++)_=Xt[M],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function kt(c){this.src=c,this.g={},this.h=0}kt.prototype.add=function(c,f,_,T,D){const M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);const $=ht(c,f,T,D);return $>-1?(f=c[$],_||(f.fa=!1)):(f=new Ei(f,this.src,M,!!T,D),f.fa=_,c.push(f)),f};function vt(c,f){const _=f.type;if(_ in c.g){var T=c.g[_],D=Array.prototype.indexOf.call(T,f,void 0),M;(M=D>=0)&&Array.prototype.splice.call(T,D,1),M&&(rt(f),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ht(c,f,_,T){for(let D=0;D<c.length;++D){const M=c[D];if(!M.da&&M.listener==f&&M.capture==!!_&&M.ha==T)return D}return-1}var we="closure_lm_"+(Math.random()*1e6|0),Ce={};function ls(c,f,_,T,D){if(Array.isArray(f)){for(let M=0;M<f.length;M++)ls(c,f[M],_,T,D);return null}return _=Pi(_),c&&c[$t]?c.J(f,_,d(T)?!!T.capture:!1,D):us(c,f,_,!1,T,D)}function us(c,f,_,T,D,M){if(!f)throw Error("Invalid event type");const $=d(D)?!!D.capture:!!D;let at=or(c);if(at||(c[we]=at=new kt(c)),_=at.add(f,_,T,$,M),_.proxy)return _;if(T=hs(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)x||(D=$),D===void 0&&(D=!1),c.addEventListener(f.toString(),T,D);else if(c.attachEvent)c.attachEvent(Ao(f.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function hs(){function c(_){return f.call(c.src,c.listener,_)}const f=Po;return c}function Un(c,f,_,T,D){if(Array.isArray(f))for(var M=0;M<f.length;M++)Un(c,f[M],_,T,D);else T=d(T)?!!T.capture:!!T,_=Pi(_),c&&c[$t]?(c=c.i,M=String(f).toString(),M in c.g&&(f=c.g[M],_=ht(f,_,T,D),_>-1&&(rt(f[_]),Array.prototype.splice.call(f,_,1),f.length==0&&(delete c.g[M],c.h--)))):c&&(c=or(c))&&(f=c.g[f.toString()],c=-1,f&&(c=ht(f,_,T,D)),(_=c>-1?f[c]:null)&&bi(_))}function bi(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[$t])vt(f.i,c);else{var _=c.type,T=c.proxy;f.removeEventListener?f.removeEventListener(_,T,c.capture):f.detachEvent?f.detachEvent(Ao(_),T):f.addListener&&f.removeListener&&f.removeListener(T),(_=or(f))?(vt(_,c),_.h==0&&(_.src=null,f[we]=null)):rt(c)}}}function Ao(c){return c in Ce?Ce[c]:Ce[c]="on"+c}function Po(c,f){if(c.da)c=!0;else{f=new Rt(f,this);const _=c.listener,T=c.ha||c.src;c.fa&&bi(c),c=_.call(T,f)}return c}function or(c){return c=c[we],c instanceof kt?c:null}var Ai="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pi(c){return typeof c=="function"?c:(c[Ai]||(c[Ai]=function(f){return c.handleEvent(f)}),c[Ai])}function Gt(){k.call(this),this.i=new kt(this),this.M=this,this.G=null}w(Gt,k),Gt.prototype[$t]=!0,Gt.prototype.removeEventListener=function(c,f,_,T){Un(this,c,f,_,T)};function Zt(c,f){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=f.type||f,typeof f=="string")f=new C(f,c);else if(f instanceof C)f.target=f.target||c;else{var D=f;f=new C(T,c),te(f,D)}D=!0;let M,$;if(_)for($=_.length-1;$>=0;$--)M=f.g=_[$],D=Bn(M,T,!0,f)&&D;if(M=f.g=c,D=Bn(M,T,!0,f)&&D,D=Bn(M,T,!1,f)&&D,_)for($=0;$<_.length;$++)M=f.g=_[$],D=Bn(M,T,!1,f)&&D}Gt.prototype.N=function(){if(Gt.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const _=c.g[f];for(let T=0;T<_.length;T++)rt(_[T]);delete c.g[f],c.h--}}this.G=null},Gt.prototype.J=function(c,f,_,T){return this.i.add(String(c),f,!1,_,T)},Gt.prototype.K=function(c,f,_,T){return this.i.add(String(c),f,!0,_,T)};function Bn(c,f,_,T){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let D=!0;for(let M=0;M<f.length;++M){const $=f[M];if($&&!$.da&&$.capture==_){const at=$.listener,Tt=$.ha||$.src;$.fa&&vt(c.i,$),D=at.call(Tt,T)!==!1&&D}}return D&&!T.defaultPrevented}function So(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:u.setTimeout(c,f||0)}function ds(c){c.g=So(()=>{c.g=null,c.i&&(c.i=!1,ds(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class fc extends k{constructor(f,_){super(),this.m=f,this.l=_,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ds(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(c){k.call(this),this.h=c,this.g={}}w(Si,k);var ar=[];function fs(c){Ii(c.g,function(f,_){this.g.hasOwnProperty(_)&&bi(f)},c),c.g={}}Si.prototype.N=function(){Si.Z.N.call(this),fs(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cr=u.JSON.stringify,pc=u.JSON.parse,Co=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ps(){}function Ro(){}var zn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ci(){C.call(this,"d")}w(Ci,C);function lr(){C.call(this,"c")}w(lr,C);var fn={},qn=null;function ur(){return qn=qn||new Gt}fn.Ia="serverreachability";function ko(c){C.call(this,fn.Ia,c)}w(ko,C);function $n(c){const f=ur();Zt(f,new ko(f))}fn.STAT_EVENT="statevent";function ms(c,f){C.call(this,fn.STAT_EVENT,c),this.stat=f}w(ms,C);function Kt(c){const f=ur();Zt(f,new ms(f,c))}fn.Ja="timingevent";function Lo(c,f){C.call(this,fn.Ja,c),this.size=f}w(Lo,C);function Ri(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},f)}function ki(){this.g=!0}ki.prototype.ua=function(){this.g=!1};function mc(c,f,_,T,D,M){c.info(function(){if(c.g)if(M){var $="",at=M.split("&");for(let It=0;It<at.length;It++){var Tt=at[It].split("=");if(Tt.length>1){const Ot=Tt[0];Tt=Tt[1];const De=Ot.split("_");$=De.length>=2&&De[1]=="type"?$+(Ot+"="+Tt+"&"):$+(Ot+"=redacted&")}}}else $=null;else $=M;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+f+`
`+_+`
`+$})}function _c(c,f,_,T,D,M,$){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+f+`
`+_+`
`+M+" "+$})}function jn(c,f,_,T){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+gc(c,_)+(T?" "+T:"")})}function _s(c,f){c.info(function(){return"TIMEOUT: "+f})}ki.prototype.info=function(){};function gc(c,f){if(!c.g)return f;if(!f)return null;try{const M=JSON.parse(f);if(M){for(c=0;c<M.length;c++)if(Array.isArray(M[c])){var _=M[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var D=T[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<T.length;$++)T[$]=""}}}}return cr(M)}catch{return f}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},xo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function pe(){}w(pe,ps),pe.prototype.g=function(){return new XMLHttpRequest},Do=new pe;function J(c){return encodeURIComponent(String(c))}function No(c){var f=1;c=c.split(":");const _=[];for(;f>0&&c.length;)_.push(c.shift()),f--;return c.length&&_.push(c.join(":")),_}function Ue(c,f,_,T){this.j=c,this.i=f,this.l=_,this.S=T||1,this.V=new Si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gs}function gs(){this.i=null,this.g="",this.h=!1}var ys={},Li={};function dr(c,f,_){c.M=1,c.A=St(ue(f)),c.u=_,c.R=!0,pn(c,null)}function pn(c,f){c.F=Date.now(),fr(c),c.B=ue(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),yr(_.i,"t",T),c.C=0,_=c.j.L,c.h=new gs,c.g=xs(c.j,_?f:null,!c.u),c.P>0&&(c.O=new fc(g(c.Y,c,c.g),c.P)),f=c.V,_=c.g,T=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(ar[0]=D.toString()),D=ar);for(let M=0;M<D.length;M++){const $=ls(_,D[M],T||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=c.J?Pt(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),$n(),mc(c.i,c.v,c.B,c.l,c.S,c.u)}Ue.prototype.ba=function(c){c=c.target;const f=this.O;f&&Ye(c)==3?f.j():this.Y(c)},Ue.prototype.Y=function(c){try{if(c==this.g)t:{const at=Ye(this.g),Tt=this.g.ya(),It=this.g.ca();if(!(at<3)&&(at!=3||this.g&&(this.h.h||this.g.la()||As(this.g)))){this.K||at!=4||Tt==7||(Tt==8||It<=0?$n(3):$n(2)),pr(this);var f=this.g.ca();this.X=f;var _=Mo(this);if(this.o=f==200,_c(this.i,this.v,this.B,this.l,this.S,at,f),this.o){if(this.U&&!this.L){e:{if(this.g){var T,D=this.g;if((T=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var M=T;break e}}M=null}if(c=M)jn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vs(this,c);else{this.o=!1,this.m=3,Kt(12),Re(this),xi(this);break t}}if(this.R){c=!0;let Ot;for(;!this.K&&this.C<_.length;)if(Ot=yc(this,_),Ot==Li){at==4&&(this.m=4,Kt(14),c=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==ys){this.m=4,Kt(15),jn(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else jn(this.i,this.l,Ot,null),vs(this,Ot);if(Oo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||_.length!=0||this.h.h||(this.m=1,Kt(16),c=!1),this.o=this.o&&c,!c)jn(this.i,this.l,_,"[Invalid Chunked Response]"),Re(this),xi(this);else if(_.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),ks($),$.P=!0,Kt(11))}}else jn(this.i,this.l,_,null),vs(this,_);at==4&&Re(this),this.o&&!this.K&&(at==4?Ee(this.j,this):(this.o=!1,fr(this)))}else Ps(this.g),f==400&&_.indexOf("Unknown SID")>0?(this.m=3,Kt(12)):(this.m=0,Kt(13)),Re(this),xi(this)}}}catch{}finally{}};function Mo(c){if(!Oo(c))return c.g.la();const f=As(c.g);if(f==="")return"";let _="";const T=f.length,D=Ye(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Re(c),xi(c),"";c.h.i=new u.TextDecoder}for(let M=0;M<T;M++)c.h.h=!0,_+=c.h.i.decode(f[M],{stream:!(D&&M==T-1)});return f.length=0,c.h.g+=_,c.C=0,c.h.g}function Oo(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function yc(c,f){var _=c.C,T=f.indexOf(`
`,_);return T==-1?Li:(_=Number(f.substring(_,T)),isNaN(_)?ys:(T+=1,T+_>f.length?Li:(f=f.slice(T,T+_),c.C=T+_,f)))}Ue.prototype.cancel=function(){this.K=!0,Re(this)};function fr(c){c.T=Date.now()+c.H,Vo(c,c.H)}function Vo(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Ri(g(c.aa,c),f)}function pr(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Ue.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(_s(this.i,this.B),this.M!=2&&($n(),Kt(17)),Re(this),this.m=2,xi(this)):Vo(this,this.T-c)};function xi(c){c.j.I==0||c.K||Ee(c.j,c)}function Re(c){pr(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,fs(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function vs(c,f){try{var _=c.j;if(_.I!=0&&(_.g==c||Di(_.h,c))){if(!c.L&&Di(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(f)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)Ir(_),Tr(_);else break t;Rs(_),Kt(18)}}else _.xa=D[1],0<_.xa-_.K&&D[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Ri(g(_.Va,_),6e3));Bo(_.h)<=1&&_.ta&&(_.ta=void 0)}else tn(_,11)}else if((c.L||_.g==c)&&Ir(_),!b(f))for(D=_.Ba.g.parse(f),f=0;f<D.length;f++){let It=D[f];const Ot=It[0];if(!(Ot<=_.K))if(_.K=Ot,It=It[1],_.I==2)if(It[0]=="c"){_.M=It[1],_.ba=It[2];const De=It[3];De!=null&&(_.ka=De,_.j.info("VER="+_.ka));const qe=It[4];qe!=null&&(_.za=qe,_.j.info("SVER="+_.za));const Ne=It[5];Ne!=null&&typeof Ne=="number"&&Ne>0&&(T=1.5*Ne,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const en=c.g;if(en){const Pr=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pr){var M=T.h;M.g||Pr.indexOf("spdy")==-1&&Pr.indexOf("quic")==-1&&Pr.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(mn(M,M.h),M.h=null))}if(T.G){const Sr=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Sr&&(T.wa=Sr,Q(T.J,T.G,Sr))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var $=c;if(T.na=Ls(T,T.L?T.ba:null,T.W),$.L){ws(T.h,$);var at=$,Tt=T.O;Tt&&(at.H=Tt),at.D&&(pr(at),fr(at)),T.g=$}else Cs(T);_.i.length>0&&Xe(_)}else It[0]!="stop"&&It[0]!="close"||tn(_,7);else _.I==3&&(It[0]=="stop"||It[0]=="close"?It[0]=="stop"?tn(_,7):dt(_):It[0]!="noop"&&_.l&&_.l.qa(It),_.A=0)}}$n(4)}catch{}}var vc=class{constructor(c,f){this.g=c,this.map=f}};function Fo(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Uo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bo(c){return c.h?1:c.g?c.g.size:0}function Di(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function mn(c,f){c.g?c.g.add(f):c.h=f}function ws(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Fo.prototype.cancel=function(){if(this.i=Ts(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ts(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const _ of c.g.values())f=f.concat(_.G);return f}return S(c.i)}var Hn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gt(c,f){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let D,M=null;T>=0?(D=c[_].substring(0,T),M=c[_].substring(T+1)):D=c[_],f(D,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function wt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof wt?(this.l=c.l,ke(this,c.j),this.o=c.o,this.g=c.g,Le(this,c.u),this.h=c.h,Ni(this,Mi(c.i)),this.m=c.m):c&&(f=String(c).match(Hn))?(this.l=!1,ke(this,f[1]||"",!0),this.o=_n(f[2]||""),this.g=_n(f[3]||"",!0),Le(this,f[4]),this.h=_n(f[5]||"",!0),Ni(this,f[6]||"",!0),this.m=_n(f[7]||"")):(this.l=!1,this.i=new Be(null,this.l))}wt.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(Ke(f,zo,!0),":");var _=this.g;return(_||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Ke(f,zo,!0),"@"),c.push(J(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ke(_,_.charAt(0)=="/"?gn:mr,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ke(_,yn)),c.join("")},wt.prototype.resolve=function(c){const f=ue(this);let _=!!c.j;_?ke(f,c.j):_=!!c.o,_?f.o=c.o:_=!!c.g,_?f.g=c.g:_=c.u!=null;var T=c.h;if(_)Le(f,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var D=f.h.lastIndexOf("/");D!=-1&&(T=f.h.slice(0,D+1)+T)}if(D=T,D==".."||D==".")T="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){T=D.lastIndexOf("/",0)==0,D=D.split("/");const M=[];for(let $=0;$<D.length;){const at=D[$++];at=="."?T&&$==D.length&&M.push(""):at==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),T&&$==D.length&&M.push("")):(M.push(at),T=!0)}T=M.join("/")}else T=D}return _?f.h=T:_=c.i.toString()!=="",_?Ni(f,Mi(c.i)):_=!!c.m,_&&(f.m=c.m),f};function ue(c){return new wt(c)}function ke(c,f,_){c.j=_?_n(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Le(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function Ni(c,f,_){f instanceof Be?(c.i=f,Es(c.i,c.l)):(_||(f=Ke(f,Dt)),c.i=new Be(f,c.l))}function Q(c,f,_){c.i.set(f,_)}function St(c){return Q(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function _n(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ke(c,f,_){return typeof c=="string"?(c=encodeURI(c).replace(f,me),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function me(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var zo=/[#\/\?@]/g,mr=/[#\?:]/g,gn=/[#\?]/g,Dt=/[#\?@]/g,yn=/#/g;function Be(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Te(c){c.g||(c.g=new Map,c.h=0,c.i&&gt(c.i,function(f,_){c.add(decodeURIComponent(f.replace(/\+/g," ")),_)}))}i=Be.prototype,i.add=function(c,f){Te(this),this.i=null,c=Qe(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(f),this.h+=1,this};function _r(c,f){Te(c),f=Qe(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Wn(c,f){return Te(c),f=Qe(c,f),c.g.has(f)}i.forEach=function(c,f){Te(this),this.g.forEach(function(_,T){_.forEach(function(D){c.call(f,D,T,this)},this)},this)};function gr(c,f){Te(c);let _=[];if(typeof f=="string")Wn(c,f)&&(_=_.concat(c.g.get(Qe(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)_=_.concat(c[f]);return _}i.set=function(c,f){return Te(this),this.i=null,c=Qe(this,c),Wn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},i.get=function(c,f){return c?(c=gr(this,c),c.length>0?String(c[0]):f):f};function yr(c,f,_){_r(c,f),_.length>0&&(c.i=null,c.g.set(Qe(c,f),S(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let T=0;T<f.length;T++){var _=f[T];const D=J(_);_=gr(this,_);for(let M=0;M<_.length;M++){let $=D;_[M]!==""&&($+="="+J(_[M])),c.push($)}}return this.i=c.join("&")};function Mi(c){const f=new Be;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Qe(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function Es(c,f){f&&!c.j&&(Te(c),c.i=null,c.g.forEach(function(_,T){const D=T.toLowerCase();T!=D&&(_r(this,T),yr(this,D,_))},c)),c.j=f}function vr(c,f){const _=new ki;if(u.Image){const T=new Image;T.onload=y(xe,_,"TestLoadImage: loaded",!0,f,T),T.onerror=y(xe,_,"TestLoadImage: error",!1,f,T),T.onabort=y(xe,_,"TestLoadImage: abort",!1,f,T),T.ontimeout=y(xe,_,"TestLoadImage: timeout",!1,f,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else f(!1)}function qo(c,f){const _=new ki,T=new AbortController,D=setTimeout(()=>{T.abort(),xe(_,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:T.signal}).then(M=>{clearTimeout(D),M.ok?xe(_,"TestPingServer: ok",!0,f):xe(_,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),xe(_,"TestPingServer: error",!1,f)})}function xe(c,f,_,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(_)}catch{}}function wc(){this.g=new Co}function ot(c){this.i=c.Sb||null,this.h=c.ab||!1}w(ot,ps),ot.prototype.g=function(){return new he(this.i,this.h)};function he(c,f){Gt.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(he,Gt),i=he.prototype,i.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,vn(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||u).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;At(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function At(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Gn(this):vn(this),this.readyState==3&&At(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Gn(this))},i.Na=function(c){this.g&&(this.response=c,Gn(this))},i.ga=function(){this.g&&Gn(this)};function Gn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,vn(c)}i.setRequestHeader=function(c,f){this.A.append(c,f)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var _=f.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=f.next();return c.join(`\r
`)};function vn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(he.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function wr(c){let f="";return Ii(c,function(_,T){f+=T,f+=":",f+=_,f+=`\r
`}),f}function Oi(c,f,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=wr(_),typeof c=="string"?_!=null&&J(_):Q(c,f,_))}function Et(c){Gt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Et,Gt);var Is=/^https?$/i,Vi=["POST","PUT"];i=Et.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,f,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=E(g(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(M){Ft(this,M);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)_.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const M of T.keys())_.set(M,T.get(M));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(M=>M.toLowerCase()=="content-type"),D=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(Vi,f,void 0)>=0)||T||D||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,$]of _)this.g.setRequestHeader(M,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(M){Ft(this,M)}};function Ft(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,Je(c),Fi(c)}function Je(c){c.A||(c.A=!0,Zt(c,"complete"),Zt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Zt(this,"complete"),Zt(this,"abort"),Fi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),Et.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?bs(this):this.Xa())},i.Xa=function(){bs(this)};function bs(c){if(c.h&&typeof a<"u"){if(c.v&&Ye(c)==4)setTimeout(c.Ca.bind(c),0);else if(Zt(c,"readystatechange"),Ye(c)==4){c.h=!1;try{const M=c.ca();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break t;default:f=!1}var _;if(!(_=f)){var T;if(T=M===0){let $=String(c.D).match(Hn)[1]||null;!$&&u.self&&u.self.location&&($=u.self.location.protocol.slice(0,-1)),T=!Is.test($?$.toLowerCase():"")}_=T}if(_)Zt(c,"complete"),Zt(c,"success");else{c.o=6;try{var D=Ye(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Je(c)}}finally{Fi(c)}}}}function Fi(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,f||Zt(c,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Ye(c){return c.g?c.g.readyState:0}i.ca=function(){try{return Ye(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),pc(f)}};function As(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(c){const f={};c=(c.g&&Ye(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(b(c[T]))continue;var _=No(c[T]);const D=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const M=f[D]||[];f[D]=M,M.push(_)}st(f,function(T){return T.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(c,f,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||f}function Ss(c){this.za=0,this.i=[],this.j=new ki,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ui("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ui("baseRetryDelayMs",5e3,c),this.Za=Ui("retryDelaySeedMs",1e4,c),this.Ta=Ui("forwardChannelMaxRetries",2,c),this.va=Ui("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Fo(c&&c.concurrentRequestLimit),this.Ba=new wc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Ss.prototype,i.ka=8,i.I=1,i.connect=function(c,f,_,T){Kt(0),this.W=c,this.H=f||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Ls(this,null,this.W),Xe(this)};function dt(c){if(_e(c),c.I==3){var f=c.V++,_=ue(c.J);if(Q(_,"SID",c.M),Q(_,"RID",f),Q(_,"TYPE","terminate"),wn(c,_),f=new Ue(c,c.j,f),f.M=2,f.A=St(ue(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(f.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=f.A,_=!0),_||(f.g=xs(f.j,null),f.g.ea(f.A)),f.F=Date.now(),fr(f)}ze(c)}function Tr(c){c.g&&(ks(c),c.g.cancel(),c.g=null)}function _e(c){Tr(c),c.v&&(u.clearTimeout(c.v),c.v=null),Ir(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Xe(c){if(!Uo(c.h)&&!c.m){c.m=!0;var f=c.Ea;lt||I(),Z||(lt(),Z=!0),R.add(f,c),c.D=0}}function $o(c,f){return Bo(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Ri(g(c.Ea,c,f),Wo(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Ue(this,this.j,c);let M=this.o;if(this.U&&(M?(M=Pt(M),te(M,this.U)):M=this.U),this.u!==null||this.R||(D.J=M,M=null),this.S)t:{for(var f=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(f+=T,f>4096){f=_;break t}if(f===4096||_===this.i.length-1){f=_+1;break t}}f=1e3}else f=1e3;f=Ho(this,D,f),_=ue(this.J),Q(_,"RID",c),Q(_,"CVER",22),this.G&&Q(_,"X-HTTP-Session-Id",this.G),wn(this,_),M&&(this.R?f="headers="+J(wr(M))+"&"+f:this.u&&Oi(_,this.u,M)),mn(this.h,D),this.Ra&&Q(_,"TYPE","init"),this.S?(Q(_,"$req",f),Q(_,"SID","null"),D.U=!0,dr(D,_,null)):dr(D,_,f),this.I=2}}else this.I==3&&(c?jo(this,c):this.i.length==0||Uo(this.h)||jo(this))};function jo(c,f){var _;f?_=f.l:_=c.V++;const T=ue(c.J);Q(T,"SID",c.M),Q(T,"RID",_),Q(T,"AID",c.K),wn(c,T),c.u&&c.o&&Oi(T,c.u,c.o),_=new Ue(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),f&&(c.i=f.G.concat(c.i)),f=Ho(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),mn(c.h,_),dr(_,T,f)}function wn(c,f){c.H&&Ii(c.H,function(_,T){Q(f,T,_)}),c.l&&Ii({},function(_,T){Q(f,T,_)})}function Ho(c,f,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var D=c.i;let at=-1;for(;;){const Tt=["count="+_];at==-1?_>0?(at=D[0].g,Tt.push("ofs="+at)):at=0:Tt.push("ofs="+at);let It=!0;for(let Ot=0;Ot<_;Ot++){var M=D[Ot].g;const De=D[Ot].map;if(M-=at,M<0)at=Math.max(0,D[Ot].g-100),It=!1;else try{M="req"+M+"_"||"";try{var $=De instanceof Map?De:Object.entries(De);for(const[qe,Ne]of $){let en=Ne;d(Ne)&&(en=cr(Ne)),Tt.push(M+qe+"="+encodeURIComponent(en))}}catch(qe){throw Tt.push(M+"type="+encodeURIComponent("_badmap")),qe}}catch{T&&T(De)}}if(It){$=Tt.join("&");break t}}$=void 0}return c=c.i.splice(0,_),f.G=c,$}function Cs(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;lt||I(),Z||(lt(),Z=!0),R.add(f,c),c.A=0}}function Rs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Ri(g(c.Da,c),Wo(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,Er(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Ri(g(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Kt(10),Tr(this),Er(this))};function ks(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function Er(c){c.g=new Ue(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=ue(c.na);Q(f,"RID","rpc"),Q(f,"SID",c.M),Q(f,"AID",c.K),Q(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&Q(f,"TO",c.ia),Q(f,"TYPE","xmlhttp"),wn(c,f),c.u&&c.o&&Oi(f,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=St(ue(f)),_.u=null,_.R=!0,pn(_,c)}i.Va=function(){this.C!=null&&(this.C=null,Tr(this),Rs(this),Kt(19))};function Ir(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function Ee(c,f){var _=null;if(c.g==f){Ir(c),ks(c),c.g=null;var T=2}else if(Di(c.h,f))_=f.G,ws(c.h,f),T=1;else return;if(c.I!=0){if(f.o)if(T==1){_=f.u?f.u.length:0,f=Date.now()-f.F;var D=c.D;T=ur(),Zt(T,new Lo(T,_)),Xe(c)}else Cs(c);else if(D=f.m,D==3||D==0&&f.X>0||!(T==1&&$o(c,f)||T==2&&Rs(c)))switch(_&&_.length>0&&(f=c.h,f.i=f.i.concat(_)),D){case 1:tn(c,5);break;case 4:tn(c,10);break;case 3:tn(c,6);break;default:tn(c,2)}}}function Wo(c,f){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*f}function tn(c,f){if(c.j.info("Error code "+f),f==2){var _=g(c.bb,c),T=c.Ua;const D=!T;T=new wt(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ke(T,"https"),St(T),D?vr(T.toString(),_):qo(T.toString(),_)}else Kt(2);c.I=0,c.l&&c.l.pa(f),ze(c),_e(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))};function ze(c){if(c.I=0,c.ja=[],c.l){const f=Ts(c.h);(f.length!=0||c.i.length!=0)&&(O(c.ja,f),O(c.ja,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.oa()}}function Ls(c,f,_){var T=_ instanceof wt?ue(_):new wt(_);if(T.g!="")f&&(T.g=f+"."+T.g),Le(T,T.u);else{var D=u.location;T=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;const M=new wt(null);T&&ke(M,T),f&&(M.g=f),D&&Le(M,D),_&&(M.h=_),T=M}return _=c.G,f=c.wa,_&&f&&Q(T,_,f),Q(T,"VER",c.ka),wn(c,T),T}function xs(c,f,_){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Et(new ot({ab:_})):new Et(c.ma),f.Fa(c.L),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function br(){}i=br.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Ar(){}Ar.prototype.g=function(c,f){return new se(c,f)};function se(c,f){Gt.call(this),this.g=new Ss(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!b(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Zn(this)}w(se,Gt),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){dt(this.g)},se.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=cr(c),c=_);f.i.push(new vc(f.Ya++,c)),f.I==3&&Xe(f)},se.prototype.N=function(){this.g.l=null,delete this.j,dt(this.g),delete this.g,se.Z.N.call(this)};function Ds(c){Ci.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){t:{for(const _ in f){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(Ds,Ci);function Go(){lr.call(this),this.status=1}w(Go,lr);function Zn(c){this.g=c}w(Zn,br),Zn.prototype.ra=function(){Zt(this.g,"a")},Zn.prototype.qa=function(c){Zt(this.g,new Ds(c))},Zn.prototype.pa=function(c){Zt(this.g,new Go)},Zn.prototype.oa=function(){Zt(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,Hd=function(){return new Ar},jd=function(){return ur()},$d=fn,Gc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,pa=hr,xo.COMPLETE="complete",qd=xo,Ro.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",Gt.prototype.listen=Gt.prototype.J,qs=Ro,Et.prototype.listenOnce=Et.prototype.K,Et.prototype.getLastError=Et.prototype.Ha,Et.prototype.getLastErrorCode=Et.prototype.ya,Et.prototype.getStatus=Et.prototype.ca,Et.prototype.getResponseJson=Et.prototype.La,Et.prototype.getResponseText=Et.prototype.la,Et.prototype.send=Et.prototype.ea,Et.prototype.setWithCredentials=Et.prototype.Fa,zd=Et}).apply(typeof sa<"u"?sa:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ns="12.13.0";function Pg(i){ns=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ki=new yl("@firebase/firestore");function Nr(){return Ki.logLevel}function G(i,...t){if(Ki.logLevel<=_t.DEBUG){const e=t.map(Tl);Ki.debug(`Firestore (${ns}): ${i}`,...e)}}function Mn(i,...t){if(Ki.logLevel<=_t.ERROR){const e=t.map(Tl);Ki.error(`Firestore (${ns}): ${i}`,...e)}}function Qi(i,...t){if(Ki.logLevel<=_t.WARN){const e=t.map(Tl);Ki.warn(`Firestore (${ns}): ${i}`,...e)}}function Tl(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Wd(i,r,e)}function Wd(i,t,e){let r=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Mn(r),new Error(r)}function bt(i,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,i||Wd(t,s,r)}function ut(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ae.UNAUTHENTICATED))}shutdown(){}}class Cg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Rg{constructor(t){this.t=t,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){bt(this.o===void 0,42304);let r=this.i;const s=p=>this.i!==r?(r=this.i,e(p)):Promise.resolve();let a=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new kn,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const p=a;t.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},d=p=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new kn)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(bt(typeof r.accessToken=="string",31837,{l:r}),new Gd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return bt(t===null||typeof t=="string",2055,{h:t}),new ae(t)}}class kg{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Lg{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new kg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){bt(this.o===void 0,3512);const r=a=>{a.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,G("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const s=a=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(bt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Xu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Dg(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<e&&(r+=t.charAt(s[a]%62))}return r}}function pt(i,t){return i<t?-1:i>t?1:0}function Zc(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const s=i.charAt(r),a=t.charAt(r);if(s!==a)return Lc(s)===Lc(a)?pt(s,a):Lc(s)?1:-1}return pt(i.length,t.length)}const Ng=55296,Mg=57343;function Lc(i){const t=i.charCodeAt(0);return t>=Ng&&t<=Mg}function Zr(i,t,e){return i.length===t.length&&i.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th="__name__";class rn{constructor(t,e,r){e===void 0?e=0:e>t.length&&it(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&it(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const a=rn.compareSegments(t.get(s),e.get(s));if(a!==0)return a}return pt(t.length,e.length)}static compareSegments(t,e){const r=rn.isNumericId(t),s=rn.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(t).compare(rn.extractNumericId(e)):Zc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ri.fromString(t.substring(4,t.length-2))}}class Ct extends rn{construct(t,e,r){return new Ct(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new W(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Ct(e)}static emptyPath(){return new Ct([])}}const Og=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends rn{construct(t,e,r){return new ie(t,e,r)}static isValidIdentifier(t){return Og.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===th}static keyField(){return new ie([th])}static fromServerFormat(t){const e=[];let r="",s=0;const a=()=>{if(r.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const d=t[s];if(d==="\\"){if(s+1===t.length)throw new W(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new W(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(r+=d,s++):(a(),s++)}if(a(),u)throw new W(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(e)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.path=t}static fromPath(t){return new X(Ct.fromString(t))}static fromName(t){return new X(Ct.fromString(t).popFirst(5))}static empty(){return new X(Ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new X(new Ct(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(i,t,e){if(!e)throw new W(U.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Vg(i,t,e,r){if(t===!0&&r===!0)throw new W(U.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function eh(i){if(!X.isDocumentKey(i))throw new W(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function nh(i){if(X.isDocumentKey(i))throw new W(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Kd(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Wa(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":it(12329,{type:typeof i})}function Se(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new W(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Wa(i);throw new W(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */function qt(i,t){const e={typeString:i};return t&&(e.value=t),e}function ho(i,t){if(!Kd(i))throw new W(U.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const u=i[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new W(U.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=-62135596800,rh=1e6;class Lt{static now(){return Lt.fromMillis(Date.now())}static fromDate(t){return Lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*rh);return new Lt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new W(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ih)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new W(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rh}_compareTo(t){return this.seconds===t.seconds?pt(this.nanoseconds,t.nanoseconds):pt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Lt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ho(t,Lt._jsonSchema))return new Lt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ih;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Lt._jsonSchemaVersion="firestore/timestamp/1.0",Lt._jsonSchema={type:qt("string",Lt._jsonSchemaVersion),seconds:qt("number"),nanoseconds:qt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{static fromTimestamp(t){return new ct(t)}static min(){return new ct(new Lt(0,0))}static max(){return new ct(new Lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xs=-1;function Fg(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,s=ct.fromTimestamp(r===1e9?new Lt(e+1,0):new Lt(e,r));return new ai(s,X.empty(),t)}function Ug(i){return new ai(i.readTime,i.key,Xs)}class ai{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ai(ct.min(),X.empty(),Xs)}static max(){return new ai(ct.max(),X.empty(),Xs)}}function Bg(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=X.comparator(i.documentKey,t.documentKey),e!==0?e:pt(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(i){if(i.code!==U.FAILED_PRECONDITION||i.message!==zg)throw i;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&it(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new z((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof z?e:z.resolve(e)}catch(e){return z.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):z.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):z.reject(e)}static resolve(t){return new z((e,r)=>{e(t)})}static reject(t){return new z((e,r)=>{r(t)})}static waitFor(t){return new z((e,r)=>{let s=0,a=0,u=!1;t.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&e()},p=>r(p))}),u=!0,a===s&&e()})}static or(t){let e=z.resolve(!1);for(const r of t)e=e.next(s=>s?z.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,a)=>{r.push(e.call(this,s,a))}),this.waitFor(r)}static mapArray(t,e){return new z((r,s)=>{const a=t.length,u=new Array(a);let d=0;for(let p=0;p<a;p++){const g=p;e(t[g]).next(y=>{u[g]=y,++d,d===a&&r(u)},y=>s(y))}})}static doWhile(t,e){return new z((r,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):r()};a()})}}function $g(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function rs(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ga{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ga.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=-1;function Za(i){return i==null}function Sa(i){return i===0&&1/i==-1/0}function jg(i){return typeof i=="number"&&Number.isInteger(i)&&!Sa(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="";function Hg(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=sh(t)),t=Wg(i.get(e),t);return sh(t)}function Wg(i,t){let e=t;const r=i.length;for(let s=0;s<r;s++){const a=i.charAt(s);switch(a){case"\0":e+="";break;case Qd:e+="";break;default:e+=a}}return e}function sh(i){return i+Qd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function mi(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Jd(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}insert(t,e){return new xt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oa(this.root,t,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oa(this.root,t,this.comparator,!0)}}class oa{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ne{constructor(t,e,r,s,a){this.key=t,this.value=e,this.color=r??ne.RED,this.left=s??ne.EMPTY,this.right=a??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,a){return new ne(t??this.key,e??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const a=r(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,r),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw it(43730,{key:this.key,value:this.value});if(this.right.isRed())throw it(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw it(27949);return t+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw it(57766)}get value(){throw it(16141)}get color(){throw it(16727)}get left(){throw it(29726)}get right(){throw it(36894)}copy(t,e,r,s,a){return this}insert(t,e,r){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ah(this.data.getIterator())}getIteratorFrom(t){return new ah(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class ah{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.fields=t,t.sort(ie.comparator)}static empty(){return new Pe([])}unionWith(t){let e=new jt(ie.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Zr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Yd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Yd("Invalid base64 string: "+a):a}}(t);return new re(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new re(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}re.EMPTY_BYTE_STRING=new re("");const Gg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(i){if(bt(!!i,39018),typeof i=="string"){let t=0;const e=Gg.exec(i);if(bt(!!e,46558,{timestamp:i}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Vt(i.seconds),nanos:Vt(i.nanos)}}function Vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function li(i){return typeof i=="string"?re.fromBase64String(i):re.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="server_timestamp",tf="__type__",ef="__previous_value__",nf="__local_write_time__";function bl(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[tf])==null?void 0:r.stringValue)===Xd}function Ka(i){const t=i.mapValue.fields[ef];return bl(t)?Ka(t):t}function to(i){const t=ci(i.mapValue.fields[nf].timestampValue);return new Lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(t,e,r,s,a,u,d,p,g,y,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y,this.apiKey=w}}const Ca="(default)";class eo{constructor(t,e){this.projectId=t,this.database=e||Ca}static empty(){return new eo("","")}get isDefaultDatabase(){return this.database===Ca}isEqual(t){return t instanceof eo&&t.projectId===this.projectId&&t.database===this.database}}function Kg(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eo(i.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="__type__",Qg="__max__",aa={mapValue:{}},sf="__vector__",Ra="value";function ui(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?bl(i)?4:Yg(i)?9007199254740991:Jg(i)?10:11:it(28295,{value:i})}function hn(i,t){if(i===t)return!0;const e=ui(i);if(e!==ui(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return to(i).isEqual(to(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ci(s.timestampValue),d=ci(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(s,a){return li(s.bytesValue).isEqual(li(a.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(s,a){return Vt(s.geoPointValue.latitude)===Vt(a.geoPointValue.latitude)&&Vt(s.geoPointValue.longitude)===Vt(a.geoPointValue.longitude)}(i,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Vt(s.integerValue)===Vt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Vt(s.doubleValue),d=Vt(a.doubleValue);return u===d?Sa(u)===Sa(d):isNaN(u)&&isNaN(d)}return!1}(i,t);case 9:return Zr(i.arrayValue.values||[],t.arrayValue.values||[],hn);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(oh(u)!==oh(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!hn(u[p],d[p])))return!1;return!0}(i,t);default:return it(52216,{left:i})}}function no(i,t){return(i.values||[]).find(e=>hn(e,t))!==void 0}function Kr(i,t){if(i===t)return 0;const e=ui(i),r=ui(t);if(e!==r)return pt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return pt(i.booleanValue,t.booleanValue);case 2:return function(a,u){const d=Vt(a.integerValue||a.doubleValue),p=Vt(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(i,t);case 3:return ch(i.timestampValue,t.timestampValue);case 4:return ch(to(i),to(t));case 5:return Zc(i.stringValue,t.stringValue);case 6:return function(a,u){const d=li(a),p=li(u);return d.compareTo(p)}(i.bytesValue,t.bytesValue);case 7:return function(a,u){const d=a.split("/"),p=u.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=pt(d[g],p[g]);if(y!==0)return y}return pt(d.length,p.length)}(i.referenceValue,t.referenceValue);case 8:return function(a,u){const d=pt(Vt(a.latitude),Vt(u.latitude));return d!==0?d:pt(Vt(a.longitude),Vt(u.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return lh(i.arrayValue,t.arrayValue);case 10:return function(a,u){var E,S,O,F;const d=a.fields||{},p=u.fields||{},g=(E=d[Ra])==null?void 0:E.arrayValue,y=(S=p[Ra])==null?void 0:S.arrayValue,w=pt(((O=g==null?void 0:g.values)==null?void 0:O.length)||0,((F=y==null?void 0:y.values)==null?void 0:F.length)||0);return w!==0?w:lh(g,y)}(i.mapValue,t.mapValue);case 11:return function(a,u){if(a===aa.mapValue&&u===aa.mapValue)return 0;if(a===aa.mapValue)return 1;if(u===aa.mapValue)return-1;const d=a.fields||{},p=Object.keys(d),g=u.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let w=0;w<p.length&&w<y.length;++w){const E=Zc(p[w],y[w]);if(E!==0)return E;const S=Kr(d[p[w]],g[y[w]]);if(S!==0)return S}return pt(p.length,y.length)}(i.mapValue,t.mapValue);default:throw it(23264,{he:e})}}function ch(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return pt(i,t);const e=ci(i),r=ci(t),s=pt(e.seconds,r.seconds);return s!==0?s:pt(e.nanos,r.nanos)}function lh(i,t){const e=i.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const a=Kr(e[s],r[s]);if(a)return a}return pt(e.length,r.length)}function Qr(i){return Kc(i)}function Kc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=ci(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return li(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return X.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",s=!0;for(const a of e.values||[])s?s=!1:r+=",",r+=Kc(a);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Kc(e.fields[u])}`;return s+"}"}(i.mapValue):it(61005,{value:i})}function ma(i){switch(ui(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ka(i);return t?16+ma(t):16;case 5:return 2*i.stringValue.length;case 6:return li(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+ma(a),0)}(i.arrayValue);case 10:case 11:return function(r){let s=0;return mi(r.fields,(a,u)=>{s+=a.length+ma(u)}),s}(i.mapValue);default:throw it(13486,{value:i})}}function uh(i,t){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`}}function Qc(i){return!!i&&"integerValue"in i}function Al(i){return!!i&&"arrayValue"in i}function hh(i){return!!i&&"nullValue"in i}function dh(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function _a(i){return!!i&&"mapValue"in i}function Jg(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[rf])==null?void 0:r.stringValue)===sf}function Ws(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return mi(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ws(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ws(i.arrayValue.values[e]);return t}return{...i}}function Yg(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Qg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!_a(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ws(e)}setAll(t){let e=ie.emptyPath(),r={},s=[];t.forEach((u,d)=>{if(!e.isImmediateParentOf(d)){const p=this.getFieldsMap(e);this.applyChanges(p,r,s),r={},s=[],e=d.popLast()}u?r[d.lastSegment()]=Ws(u):s.push(d.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,s)}delete(t){const e=this.field(t.popLast());_a(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return hn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];_a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){mi(e,(s,a)=>t[s]=a);for(const s of r)delete t[s]}clone(){return new ve(Ws(this.value))}}function of(i){const t=[];return mi(i.fields,(e,r)=>{const s=new ie([e]);if(_a(r)){const a=of(r.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new Pe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e,r,s,a,u,d){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(t){return new ce(t,0,ct.min(),ct.min(),ct.min(),ve.empty(),0)}static newFoundDocument(t,e,r,s){return new ce(t,1,e,ct.min(),r,s,0)}static newNoDocument(t,e){return new ce(t,2,e,ct.min(),ct.min(),ve.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,ct.min(),ct.min(),ve.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ct.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ct.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ka{constructor(t,e){this.position=t,this.inclusive=e}}function fh(i,t,e){let r=0;for(let s=0;s<i.position.length;s++){const a=t[s],u=i.position[s];if(a.field.isKeyField()?r=X.comparator(X.fromName(u.referenceValue),e.key):r=Kr(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function ph(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!hn(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class io{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xg(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class af{}class zt extends af{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ey(t,e,r):e==="array-contains"?new ry(t,r):e==="in"?new sy(t,r):e==="not-in"?new oy(t,r):e==="array-contains-any"?new ay(t,r):new zt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ny(t,r):new iy(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Kr(e,this.value)):e!==null&&ui(this.value)===ui(e)&&this.matchesComparison(Kr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return it(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends af{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ze(t,e)}matches(t){return cf(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cf(i){return i.op==="and"}function lf(i){return ty(i)&&cf(i)}function ty(i){for(const t of i.filters)if(t instanceof Ze)return!1;return!0}function Jc(i){if(i instanceof zt)return i.field.canonicalString()+i.op.toString()+Qr(i.value);if(lf(i))return i.filters.map(t=>Jc(t)).join(",");{const t=i.filters.map(e=>Jc(e)).join(",");return`${i.op}(${t})`}}function uf(i,t){return i instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(i,t):i instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,d)=>a&&uf(u,s.filters[d]),!0):!1}(i,t):void it(19439)}function hf(i){return i instanceof zt?function(e){return`${e.field.canonicalString()} ${e.op} ${Qr(e.value)}`}(i):i instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(hf).join(" ,")+"}"}(i):"Filter"}class ey extends zt{constructor(t,e,r){super(t,e,r),this.key=X.fromName(r.referenceValue)}matches(t){const e=X.comparator(t.key,this.key);return this.matchesComparison(e)}}class ny extends zt{constructor(t,e){super(t,"in",e),this.keys=df("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class iy extends zt{constructor(t,e){super(t,"not-in",e),this.keys=df("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function df(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>X.fromName(r.referenceValue))}class ry extends zt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Al(e)&&no(e.arrayValue,this.value)}}class sy extends zt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&no(this.value.arrayValue,e)}}class oy extends zt{constructor(t,e){super(t,"not-in",e)}matches(t){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!no(this.value.arrayValue,e)}}class ay extends zt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Al(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
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
 */class cy{constructor(t,e=null,r=[],s=[],a=null,u=null,d=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Te=null}}function mh(i,t=null,e=[],r=[],s=null,a=null,u=null){return new cy(i,t,e,r,s,a,u)}function Pl(i){const t=ut(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Jc(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Za(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Qr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Qr(r)).join(",")),t.Te=e}return t.Te}function Sl(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!Xg(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!uf(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!ph(i.startAt,t.startAt)&&ph(i.endAt,t.endAt)}function Yc(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t,e=null,r=[],s=[],a=null,u="F",d=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ly(i,t,e,r,s,a,u,d){return new ss(i,t,e,r,s,a,u,d)}function Qa(i){return new ss(i)}function _h(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function uy(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function ff(i){return i.collectionGroup!==null}function Gs(i){const t=ut(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new jt(ie.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new io(a,r))}),e.has(ie.keyField().canonicalString())||t.Ie.push(new io(ie.keyField(),r))}return t.Ie}function on(i){const t=ut(i);return t.Ee||(t.Ee=hy(t,Gs(i))),t.Ee}function hy(i,t){if(i.limitType==="F")return mh(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new io(s.field,a)});const e=i.endAt?new ka(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new ka(i.startAt.position,i.startAt.inclusive):null;return mh(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function Xc(i,t){const e=i.filters.concat([t]);return new ss(i.path,i.collectionGroup,i.explicitOrderBy.slice(),e,i.limit,i.limitType,i.startAt,i.endAt)}function dy(i,t){const e=i.explicitOrderBy.concat([t]);return new ss(i.path,i.collectionGroup,e,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function tl(i,t,e){return new ss(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Ja(i,t){return Sl(on(i),on(t))&&i.limitType===t.limitType}function pf(i){return`${Pl(on(i))}|lt:${i.limitType}`}function Mr(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>hf(s)).join(", ")}]`),Za(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Qr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Qr(s)).join(",")),`Target(${r})`}(on(i))}; limitType=${i.limitType})`}function Ya(i,t){return t.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):X.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(i,t)&&function(r,s){for(const a of Gs(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(i,t)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(i,t)&&function(r,s){return!(r.startAt&&!function(u,d,p){const g=fh(u,d,p);return u.inclusive?g<=0:g<0}(r.startAt,Gs(r),s)||r.endAt&&!function(u,d,p){const g=fh(u,d,p);return u.inclusive?g>=0:g>0}(r.endAt,Gs(r),s))}(i,t)}function fy(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function mf(i){return(t,e)=>{let r=!1;for(const s of Gs(i)){const a=py(s,t,e);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function py(i,t,e){const r=i.field.isKeyField()?X.comparator(t.key,e.key):function(a,u,d){const p=u.data.field(a),g=d.data.field(a);return p!==null&&g!==null?Kr(p,g):it(42886)}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return it(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){mi(this.inner,(e,r)=>{for(const[s,a]of r)t(s,a)})}isEmpty(){return Jd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new xt(X.comparator);function On(){return my}const _f=new xt(X.comparator);function $s(...i){let t=_f;for(const e of i)t=t.insert(e.key,e);return t}function gf(i){let t=_f;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function $i(){return Zs()}function yf(){return Zs()}function Zs(){return new nr(i=>i.toString(),(i,t)=>i.isEqual(t))}const _y=new xt(X.comparator),gy=new jt(X.comparator);function mt(...i){let t=gy;for(const e of i)t=t.add(e);return t}const yy=new jt(pt);function vy(){return yy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(t)?"-0":t}}function vf(i){return{integerValue:""+i}}function wy(i,t){return jg(t)?vf(t):Cl(i,t)}/**
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
 */class Xa{constructor(){this._=void 0}}function Ty(i,t,e){return i instanceof ro?function(s,a){const u={fields:{[tf]:{stringValue:Xd},[nf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&bl(a)&&(a=Ka(a)),a&&(u.fields[ef]=a),{mapValue:u}}(e,t):i instanceof Jr?Tf(i,t):i instanceof Yr?Ef(i,t):function(s,a){const u=wf(s,a),d=gh(u)+gh(s.Ae);return Qc(u)&&Qc(s.Ae)?vf(d):Cl(s.serializer,d)}(i,t)}function Ey(i,t,e){return i instanceof Jr?Tf(i,t):i instanceof Yr?Ef(i,t):e}function wf(i,t){return i instanceof La?function(r){return Qc(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class ro extends Xa{}class Jr extends Xa{constructor(t){super(),this.elements=t}}function Tf(i,t){const e=If(t);for(const r of i.elements)e.some(s=>hn(s,r))||e.push(r);return{arrayValue:{values:e}}}class Yr extends Xa{constructor(t){super(),this.elements=t}}function Ef(i,t){let e=If(t);for(const r of i.elements)e=e.filter(s=>!hn(s,r));return{arrayValue:{values:e}}}class La extends Xa{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function gh(i){return Vt(i.integerValue||i.doubleValue)}function If(i){return Al(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.field=t,this.transform=e}}function Iy(i,t){return i.field.isEqual(t.field)&&function(r,s){return r instanceof Jr&&s instanceof Jr||r instanceof Yr&&s instanceof Yr?Zr(r.elements,s.elements,hn):r instanceof La&&s instanceof La?hn(r.Ae,s.Ae):r instanceof ro&&s instanceof ro}(i.transform,t.transform)}class by{constructor(t,e){this.version=t,this.transformResults=e}}class He{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new He}static exists(t){return new He(void 0,t)}static updateTime(t){return new He(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ga(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class tc{}function bf(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new kl(i.key,He.none()):new fo(i.key,i.data,He.none());{const e=i.data,r=ve.empty();let s=new jt(ie.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new _i(i.key,r,new Pe(s.toArray()),He.none())}}function Ay(i,t,e){i instanceof fo?function(s,a,u){const d=s.value.clone(),p=vh(s.fieldTransforms,a,u.transformResults);d.setAll(p),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(i,t,e):i instanceof _i?function(s,a,u){if(!ga(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=vh(s.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(Af(s)),p.setAll(d),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(i,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ks(i,t,e,r){return i instanceof fo?function(a,u,d,p){if(!ga(a.precondition,u))return d;const g=a.value.clone(),y=wh(a.fieldTransforms,p,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(i,t,e,r):i instanceof _i?function(a,u,d,p){if(!ga(a.precondition,u))return d;const g=wh(a.fieldTransforms,p,u),y=u.data;return y.setAll(Af(a)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(i,t,e,r):function(a,u,d){return ga(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(i,t,e)}function Py(i,t){let e=null;for(const r of i.fieldTransforms){const s=t.data.field(r.field),a=wf(r.transform,s||null);a!=null&&(e===null&&(e=ve.empty()),e.set(r.field,a))}return e||null}function yh(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(a,u)=>Iy(a,u))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class fo extends tc{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _i extends tc{constructor(t,e,r,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Af(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function vh(i,t,e){const r=new Map;bt(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let s=0;s<e.length;s++){const a=i[s],u=a.transform,d=t.data.field(a.field);r.set(a.field,Ey(u,d,e[s]))}return r}function wh(i,t,e){const r=new Map;for(const s of i){const a=s.transform,u=e.data.field(s.field);r.set(s.field,Ty(a,u,t))}return r}class kl extends tc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Sy extends tc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&Ay(a,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ks(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ks(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=yf();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=e.has(s.key)?null:d;const p=bf(u,d);p!==null&&r.set(s.key,p),u.isValidDocument()||u.convertToNoDocument(ct.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),mt())}isEqual(t){return this.batchId===t.batchId&&Zr(this.mutations,t.mutations,(e,r)=>yh(e,r))&&Zr(this.baseMutations,t.baseMutations,(e,r)=>yh(e,r))}}class Ll{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){bt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return _y}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Ll(t,e,r,s)}}/**
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
 */class Ry{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class ky{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bt,yt;function Ly(i){switch(i){case U.OK:return it(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return it(15467,{code:i})}}function Pf(i){if(i===void 0)return Mn("GRPC error has no .code"),U.UNKNOWN;switch(i){case Bt.OK:return U.OK;case Bt.CANCELLED:return U.CANCELLED;case Bt.UNKNOWN:return U.UNKNOWN;case Bt.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Bt.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Bt.INTERNAL:return U.INTERNAL;case Bt.UNAVAILABLE:return U.UNAVAILABLE;case Bt.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Bt.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Bt.NOT_FOUND:return U.NOT_FOUND;case Bt.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Bt.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Bt.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Bt.ABORTED:return U.ABORTED;case Bt.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Bt.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Bt.DATA_LOSS:return U.DATA_LOSS;default:return it(39323,{code:i})}}(yt=Bt||(Bt={}))[yt.OK=0]="OK",yt[yt.CANCELLED=1]="CANCELLED",yt[yt.UNKNOWN=2]="UNKNOWN",yt[yt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yt[yt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yt[yt.NOT_FOUND=5]="NOT_FOUND",yt[yt.ALREADY_EXISTS=6]="ALREADY_EXISTS",yt[yt.PERMISSION_DENIED=7]="PERMISSION_DENIED",yt[yt.UNAUTHENTICATED=16]="UNAUTHENTICATED",yt[yt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yt[yt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yt[yt.ABORTED=10]="ABORTED",yt[yt.OUT_OF_RANGE=11]="OUT_OF_RANGE",yt[yt.UNIMPLEMENTED=12]="UNIMPLEMENTED",yt[yt.INTERNAL=13]="INTERNAL",yt[yt.UNAVAILABLE=14]="UNAVAILABLE",yt[yt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function xy(){return new TextEncoder}/**
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
 */const Dy=new ri([4294967295,4294967295],0);function Th(i){const t=xy().encode(i),e=new Bd;return e.update(t),new Uint8Array(e.digest())}function Eh(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new ri([e,r],0),new ri([s,a],0)]}class xl{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new js(`Invalid padding: ${e}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new js(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ri.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ri.fromNumber(r)));return s.compare(Dy)===1&&(s=new ri([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Th(t),[r,s]=Eh(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);if(!this.we(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new xl(a,s,e);return r.forEach(d=>u.insert(d)),u}insert(t){if(this.ge===0)return;const e=Th(t),[r,s]=Eh(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e,r,s,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,mo.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new po(ct.min(),s,new xt(pt),On(),mt())}}class mo{constructor(t,e,r,s,a){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new mo(r,e,mt(),mt(),mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Sf{constructor(t,e){this.targetId=t,this.Ce=e}}class Cf{constructor(t,e,r=re.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ih{constructor(){this.ve=0,this.Fe=bh(),this.Me=re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=mt(),e=mt(),r=mt();return this.Fe.forEach((s,a)=>{switch(a){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:it(38017,{changeType:a})}}),new mo(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=bh()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,bt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Ny{constructor(t){this.Ge=t,this.ze=new Map,this.je=On(),this.Je=ca(),this.He=ca(),this.Ze=new xt(pt)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:it(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const a=s.target;if(Yc(a))if(r===0){const u=new X(a.path);this.et(e,u,ce.newNoDocument(u,ct.min()))}else bt(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const d=this.ut(t),p=d?this.ct(d,t,u):1;if(p!==0){this.it(e);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=e;let u,d;try{u=li(r).toUint8Array()}catch(p){if(p instanceof Yd)return Qi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new xl(u,s,a)}catch(p){return Qi(p instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.ge===0?null:d}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(a=>{const u=this.Ge.ht(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(d)||(this.et(e,a,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((a,u)=>{const d=this.ot(u);if(d){if(a.current&&Yc(d.target)){const p=new X(d.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,ce.newNoDocument(p,t))}a.Be&&(e.set(u,a.ke()),a.Ke())}});let r=mt();this.He.forEach((a,u)=>{let d=!0;u.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.je.forEach((a,u)=>u.setReadTime(t));const s=new po(t,e,this.Ze,this.je,r);return this.je=On(),this.Je=ca(),this.He=ca(),this.Ze=new xt(pt),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Ih,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new jt(pt),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new jt(pt),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||G("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Ih),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ca(){return new xt(X.comparator)}function bh(){return new xt(X.comparator)}const My={asc:"ASCENDING",desc:"DESCENDING"},Oy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Vy={and:"AND",or:"OR"};class Fy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function el(i,t){return i.useProto3Json||Za(t)?t:{value:t}}function xa(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rf(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function Uy(i,t){return xa(i,t.toTimestamp())}function an(i){return bt(!!i,49232),ct.fromTimestamp(function(e){const r=ci(e);return new Lt(r.seconds,r.nanos)}(i))}function Dl(i,t){return nl(i,t).canonicalString()}function nl(i,t){const e=function(s){return new Ct(["projects",s.projectId,"databases",s.database])}(i).child("documents");return t===void 0?e:e.child(t)}function kf(i){const t=Ct.fromString(i);return bt(Mf(t),10190,{key:t.toString()}),t}function il(i,t){return Dl(i.databaseId,t.path)}function xc(i,t){const e=kf(t);if(e.get(1)!==i.databaseId.projectId)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new W(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new X(xf(e))}function Lf(i,t){return Dl(i.databaseId,t)}function By(i){const t=kf(i);return t.length===4?Ct.emptyPath():xf(t)}function rl(i){return new Ct(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function xf(i){return bt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Ah(i,t,e){return{name:il(i,t),fields:e.value.mapValue.fields}}function zy(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:it(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],a=function(g,y){return g.useProto3Json?(bt(y===void 0||typeof y=="string",58123),re.fromBase64String(y||"")):(bt(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),re.fromUint8Array(y||new Uint8Array))}(i,t.targetChange.resumeToken),u=t.targetChange.cause,d=u&&function(g){const y=g.code===void 0?U.UNKNOWN:Pf(g.code);return new W(y,g.message||"")}(u);e=new Cf(r,s,a,d||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=xc(i,r.document.name),a=an(r.document.updateTime),u=r.document.createTime?an(r.document.createTime):ct.min(),d=new ve({mapValue:{fields:r.document.fields}}),p=ce.newFoundDocument(s,a,u,d),g=r.targetIds||[],y=r.removedTargetIds||[];e=new ya(g,y,p.key,p)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=xc(i,r.document),a=r.readTime?an(r.readTime):ct.min(),u=ce.newNoDocument(s,a),d=r.removedTargetIds||[];e=new ya([],d,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=xc(i,r.document),a=r.removedTargetIds||[];e=new ya([],a,s,null)}else{if(!("filter"in t))return it(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new ky(s,a),d=r.targetId;e=new Sf(d,u)}}return e}function qy(i,t){let e;if(t instanceof fo)e={update:Ah(i,t.key,t.value)};else if(t instanceof kl)e={delete:il(i,t.key)};else if(t instanceof _i)e={update:Ah(i,t.key,t.data),updateMask:Jy(t.fieldMask)};else{if(!(t instanceof Sy))return it(16599,{dt:t.type});e={verify:il(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof ro)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Jr)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Yr)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof La)return{fieldPath:u.field.canonicalString(),increment:d.Ae};throw it(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:Uy(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:it(27497)}(i,t.precondition)),e}function $y(i,t){return i&&i.length>0?(bt(t!==void 0,14353),i.map(e=>function(s,a){let u=s.updateTime?an(s.updateTime):an(a);return u.isEqual(ct.min())&&(u=an(a)),new by(u,s.transformResults||[])}(e,t))):[]}function jy(i,t){return{documents:[Lf(i,t.path)]}}function Hy(i,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Lf(i,s);const a=function(g){if(g.length!==0)return Nf(Ze.create(g,"and"))}(t.filters);a&&(e.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(y=>function(E){return{field:Or(E.field),direction:Zy(E.dir)}}(y))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const d=el(i,t.limit);return d!==null&&(e.structuredQuery.limit=d),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ft:e,parent:s}}function Wy(i){let t=By(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){bt(r===1,65062);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let a=[];e.where&&(a=function(w){const E=Df(w);return E instanceof Ze&&lf(E)?E.getFilters():[E]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(E=>function(O){return new io(Vr(O.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(e.orderBy));let d=null;e.limit&&(d=function(w){let E;return E=typeof w=="object"?w.value:w,Za(E)?null:E}(e.limit));let p=null;e.startAt&&(p=function(w){const E=!!w.before,S=w.values||[];return new ka(S,E)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const E=!w.before,S=w.values||[];return new ka(S,E)}(e.endAt)),ly(t,s,u,a,d,"F",p,g)}function Gy(i,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return it(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Df(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Vr(e.unaryFilter.field);return zt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Vr(e.unaryFilter.field);return zt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Vr(e.unaryFilter.field);return zt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Vr(e.unaryFilter.field);return zt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return it(61313);default:return it(60726)}}(i):i.fieldFilter!==void 0?function(e){return zt.create(Vr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return it(58110);default:return it(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Ze.create(e.compositeFilter.filters.map(r=>Df(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return it(1026)}}(e.compositeFilter.op))}(i):it(30097,{filter:i})}function Zy(i){return My[i]}function Ky(i){return Oy[i]}function Qy(i){return Vy[i]}function Or(i){return{fieldPath:i.canonicalString()}}function Vr(i){return ie.fromServerFormat(i.fieldPath)}function Nf(i){return i instanceof zt?function(e){if(e.op==="=="){if(dh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NAN"}};if(hh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NAN"}};if(hh(e.value))return{unaryFilter:{field:Or(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(e.field),op:Ky(e.op),value:e.value}}}(i):i instanceof Ze?function(e){const r=e.getFilters().map(s=>Nf(s));return r.length===1?r[0]:{compositeFilter:{op:Qy(e.op),filters:r}}}(i):it(54877,{filter:i})}function Jy(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mf(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Of(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e,r,s,a=ct.min(),u=ct.min(),d=re.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(t){return new Sn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t){this.yt=t}}function Xy(i){const t=Wy({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?tl(t,t.limit,"L"):t}/**
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
 */class tv{constructor(){this.bn=new ev}addToCollectionParentIndex(t,e){return this.bn.add(e),z.resolve()}getCollectionParents(t,e){return z.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return z.resolve()}deleteFieldIndex(t,e){return z.resolve()}deleteAllFieldIndexes(t){return z.resolve()}createTargetIndexes(t,e){return z.resolve()}getDocumentsMatchingTarget(t,e){return z.resolve(null)}getIndexType(t,e){return z.resolve(0)}getFieldIndexes(t,e){return z.resolve([])}getNextCollectionGroupToUpdate(t){return z.resolve(null)}getMinOffset(t,e){return z.resolve(ai.min())}getMinOffsetFromCollectionGroup(t,e){return z.resolve(ai.min())}updateCollectionGroup(t,e,r){return z.resolve()}updateIndexEntries(t,e){return z.resolve()}}class ev{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new jt(Ct.comparator),a=!s.has(r);return this.index[e]=s.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new jt(Ct.comparator)).toArray()}}/**
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
 */const Ph={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Vf=41943040;class ye{static withCacheSize(t){return new ye(t,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(Vf,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new hi(0)}static ar(){return new hi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="LruGarbageCollector",nv=1048576;function Ch([i,t],[e,r]){const s=pt(i,e);return s===0?pt(t,r):s}class iv{constructor(t){this.Pr=t,this.buffer=new jt(Ch),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Ch(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class rv{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){G(Sh,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){rs(e)?G(Sh,"Ignoring IndexedDB error during garbage collection: ",e):await is(e)}await this.Ar(3e5)})}}class sv{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return z.resolve(Ga.ce);const r=new iv(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Ph)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ph):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,a,u,d,p,g;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,d=Date.now(),this.removeTargets(t,r,e))).next(w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(g=Date.now(),Nr()<=_t.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(p-d)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function ov(i,t){return new sv(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.changes=new nr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?z.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cv{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Ks(r.mutation,s,Pe.empty(),Lt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,mt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=mt()){const s=$i();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(a=>{let u=$s();return a.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=$i();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,mt()))}populateOverlays(t,e,r){const s=[];return r.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,d)=>{e.set(u,d)})})}computeViews(t,e,r,s){let a=On();const u=Zs(),d=function(){return Zs()}();return e.forEach((p,g)=>{const y=r.get(g.key);s.has(g.key)&&(y===void 0||y.mutation instanceof _i)?a=a.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),Ks(y.mutation,g,y.mutation.getFieldMask(),Lt.now())):u.set(g.key,Pe.empty())}),this.recalculateAndSaveOverlays(t,a).next(p=>(p.forEach((g,y)=>u.set(g,y)),e.forEach((g,y)=>d.set(g,new cv(y,u.get(g)??null))),d))}recalculateAndSaveOverlays(t,e){const r=Zs();let s=new xt((u,d)=>u-d),a=mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const d of u)d.keys().forEach(p=>{const g=e.get(p);if(g===null)return;let y=r.get(p)||Pe.empty();y=d.applyToLocalView(g,y),r.set(p,y);const w=(s.get(d.batchId)||mt()).add(p);s=s.insert(d.batchId,w)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,w=yf();y.forEach(E=>{if(!a.has(E)){const S=bf(e.get(E),r.get(E));S!==null&&w.set(E,S),a=a.add(E)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return z.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return uy(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ff(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-a.size):z.resolve($i());let d=Xs,p=a;return u.next(g=>z.forEach(g,(y,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),a.get(y)?z.resolve():this.remoteDocumentCache.getEntry(t,y).next(E=>{p=p.insert(y,E)}))).next(()=>this.populateOverlays(t,g,a)).next(()=>this.computeViews(t,p,g,mt())).next(y=>({batchId:d,changes:gf(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new X(e)).next(r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const a=e.collectionGroup;let u=$s();return this.indexManager.getCollectionParents(t,a).next(d=>z.forEach(d,p=>{const g=function(w,E){return new ss(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,p.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,r,s).next(y=>{y.forEach((w,E)=>{u=u.insert(w,E)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,s))).next(u=>{a.forEach((p,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,ce.newInvalidDocument(y)))});let d=$s();return u.forEach((p,g)=>{const y=a.get(p);y!==void 0&&Ks(y.mutation,g,Pe.empty(),Lt.now()),Ya(e,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return z.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(e)),z.resolve()}getNamedQuery(t,e){return z.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:Xy(s.bundledQuery),readTime:an(s.readTime)}}(e)),z.resolve()}}/**
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
 */class hv{constructor(){this.overlays=new xt(X.comparator),this.Lr=new Map}getOverlay(t,e){return z.resolve(this.overlays.get(e))}getOverlays(t,e){const r=$i();return z.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,a)=>{this.St(t,e,a)}),z.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),z.resolve()}getOverlaysForCollection(t,e,r){const s=$i(),a=e.length+1,u=new X(e.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&p.largestBatchId>r&&s.set(p.getKey(),p)}return z.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let a=new xt((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let y=a.get(g.largestBatchId);y===null&&(y=$i(),a=a.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=$i(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=s)););return z.resolve(d)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Ry(e,r));let a=this.Lr.get(e);a===void 0&&(a=mt(),this.Lr.set(e,a)),this.Lr.set(e,a.add(r.key))}}/**
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
 */class dv{constructor(){this.sessionToken=re.EMPTY_BYTE_STRING}getSessionToken(t){return z.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.kr=new jt(Jt.Kr),this.qr=new jt(Jt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Jt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new Jt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new X(new Ct([])),r=new Jt(e,t),s=new Jt(e,t+1),a=[];return this.qr.forEachInRange([r,s],u=>{this.Wr(u),a.push(u.key)}),a}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new X(new Ct([])),r=new Jt(e,t),s=new Jt(e,t+1);let a=mt();return this.qr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Jt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Jt{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return X.comparator(t.key,e.key)||pt(t.Jr,e.Jr)}static Ur(t,e){return pt(t.Jr,e.Jr)||X.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new jt(Jt.Kr)}checkEmpty(t){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Cy(a,e,r,s);this.mutationQueue.push(u);for(const d of s)this.Hr=this.Hr.add(new Jt(d.key,a)),this.indexManager.addToCollectionParentIndex(t,d.key.path.popLast());return z.resolve(u)}lookupMutationBatch(t,e){return z.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),a=s<0?0:s;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Il:this.Yn-1)}getAllMutationBatches(t){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Jt(e,0),s=new Jt(e,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,s],u=>{const d=this.Zr(u.Jr);a.push(d)}),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new jt(pt);return e.forEach(s=>{const a=new Jt(s,0),u=new Jt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,u],d=>{r=r.add(d.Jr)})}),z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let a=r;X.isDocumentKey(a)||(a=a.child(""));const u=new Jt(new X(a),0);let d=new jt(pt);return this.Hr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(d=d.add(p.Jr)),!0)},u),z.resolve(this.Yr(d))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){bt(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return z.forEach(e.mutations,s=>{const a=new Jt(s.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new Jt(e,0),s=this.Hr.firstAfterOrEqual(r);return z.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,z.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t){this.ti=t,this.docs=function(){return new xt(X.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),a=s?s.size:0,u=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return z.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let r=On();return e.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():ce.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let a=On();const u=e.path,d=new X(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||Bg(Ug(y),r)<=0||(s.has(y.key)||Ya(e,y))&&(a=a.insert(y.key,y.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(t,e,r,s){it(9500)}ni(t,e){return z.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new mv(this)}getSize(t){return z.resolve(this.size)}}class mv extends av{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),z.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t){this.persistence=t,this.ri=new nr(e=>Pl(e),Sl),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.ii=0,this.si=new Nl,this.targetCount=0,this.oi=hi._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),z.resolve()}getLastRemoteSnapshotVersion(t){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return z.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),z.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new hi(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,z.resolve()}updateTargetData(t,e){return this.lr(e),z.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,z.resolve()}removeTargets(t,e,r){let s=0;const a=[];return this.ri.forEach((u,d)=>{d.sequenceNumber<=e&&r.get(d.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(t,d.targetId)),s++)}),z.waitFor(a).next(()=>s)}getTargetCount(t){return z.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return z.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),z.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),z.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),z.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return z.resolve(r)}containsKey(t,e){return z.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e){this._i={},this.overlays={},this.ai=new Ga(0),this.ui=!1,this.ui=!0,this.ci=new dv,this.referenceDelegate=t(this),this.li=new _v(this),this.indexManager=new tv,this.remoteDocumentCache=function(s){return new pv(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Yy(e),this.Pi=new uv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new hv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new fv(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){G("MemoryPersistence","Starting transaction:",t);const s=new gv(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(a=>this.referenceDelegate.Ii(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(t,e){return z.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class gv extends qg{constructor(t){super(),this.currentSequenceNumber=t}}class Ml{constructor(t){this.persistence=t,this.Ri=new Nl,this.Ai=null}static Vi(t){return new Ml(t)}get di(){if(this.Ai)return this.Ai;throw it(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),z.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),z.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const s=X.fromPath(r);return this.mi(t,s).next(a=>{a||e.removeEntry(s,ct.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return z.or([()=>z.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Da{constructor(t,e){this.persistence=t,this.fi=new nr(r=>Hg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ov(this,e)}static Vi(t,e){return new Da(t,e)}Ti(){}Ii(t){return z.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return z.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(a=>a?z.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ni(t,u=>this.wr(t,u,e).next(d=>{d||(r++,a.removeEntry(u,ct.min()))})).next(()=>a.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ma(t.data.value)),e}wr(t,e,r){return z.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=mt(),s=mt();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ol(t,e.fromCache,r,s)}}/**
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
 */class yv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class vv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return o_()?8:$g(le())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const a={result:null};return this.gs(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ps(t,e,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new yv;return this.ys(t,e,u).next(d=>{if(a.result=d,this.As)return this.ws(t,e,u,d.size)})}).next(()=>a.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Nr()<=_t.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Mr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Nr()<=_t.DEBUG&&G("QueryEngine","Query:",Mr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Nr()<=_t.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Mr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,on(e))):z.resolve())}gs(t,e){if(_h(e))return z.resolve(null);let r=on(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=tl(e,null,"F"),r=on(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=mt(...a);return this.fs.getDocuments(t,u).next(d=>this.indexManager.getMinOffset(t,r).next(p=>{const g=this.Ss(e,d);return this.bs(e,g,u,p.readTime)?this.gs(t,tl(e,null,"F")):this.Ds(t,g,e,p)}))})))}ps(t,e,r,s){return _h(e)||s.isEqual(ct.min())?z.resolve(null):this.fs.getDocuments(t,r).next(a=>{const u=this.Ss(e,a);return this.bs(e,u,r,s)?z.resolve(null):(Nr()<=_t.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(e)),this.Ds(t,u,e,Fg(s,Xs)).next(d=>d))})}Ss(t,e){let r=new jt(mf(t));return e.forEach((s,a)=>{Ya(t,a)&&(r=r.add(a))}),r}bs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ys(t,e,r){return Nr()<=_t.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Mr(e)),this.fs.getDocumentsMatchingQuery(t,e,ai.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="LocalStore",wv=3e8;class Tv{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new xt(pt),this.Fs=new nr(a=>Pl(a),Sl),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new lv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Ev(i,t,e,r){return new Tv(i,t,e,r)}async function Uf(i,t){const e=ut(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let p=mt();for(const g of s){u.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of a){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return e.localDocuments.getDocuments(r,p).next(g=>({Ns:g,removedBatchIds:u,addedBatchIds:d}))})})}function Iv(i,t){const e=ut(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),a=e.xs.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const w=g.batch,E=w.keys();let S=z.resolve();return E.forEach(O=>{S=S.next(()=>y.getEntry(p,O)).next(F=>{const B=g.docVersions.get(O);bt(B!==null,48541),F.version.compareTo(B)<0&&(w.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),y.addEntry(F)))})}),S.next(()=>d.mutationQueue.removeMutationBatch(p,w))}(e,r,t,a).next(()=>a.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let p=mt();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Bf(i){const t=ut(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function bv(i,t){const e=ut(i),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const d=[];t.targetChanges.forEach((y,w)=>{const E=s.get(w);if(!E)return;d.push(e.li.removeMatchingKeys(a,y.removedDocuments,w).next(()=>e.li.addMatchingKeys(a,y.addedDocuments,w)));let S=E.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(re.EMPTY_BYTE_STRING,ct.min()).withLastLimboFreeSnapshotVersion(ct.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),s=s.insert(w,S),function(F,B,tt){return F.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=wv?!0:tt.addedDocuments.size+tt.modifiedDocuments.size+tt.removedDocuments.size>0}(E,S,y)&&d.push(e.li.updateTargetData(a,S))});let p=On(),g=mt();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&d.push(e.persistence.referenceDelegate.updateLimboDocument(a,y))}),d.push(Av(a,u,t.documentUpdates).next(y=>{p=y.Bs,g=y.Ls})),!r.isEqual(ct.min())){const y=e.li.getLastRemoteSnapshotVersion(a).next(w=>e.li.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(y)}return z.waitFor(d).next(()=>u.apply(a)).next(()=>e.localDocuments.getLocalViewOfDocuments(a,p,g)).next(()=>p)}).then(a=>(e.vs=s,a))}function Av(i,t,e){let r=mt(),s=mt();return e.forEach(a=>r=r.add(a)),t.getEntries(i,r).next(a=>{let u=On();return e.forEach((d,p)=>{const g=a.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),p.isNoDocument()&&p.version.isEqual(ct.min())?(t.removeEntry(d,p.readTime),u=u.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),u=u.insert(d,p)):G(Vl,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Bs:u,Ls:s}})}function Pv(i,t){const e=ut(i);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Il),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Sv(i,t){const e=ut(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(a=>a?(s=a,z.resolve(s)):e.li.allocateTargetId(r).next(u=>(s=new Sn(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function sl(i,t,e){const r=ut(i),s=r.vs.get(t),a=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!rs(u))throw u;G(Vl,`Failed to update sequence numbers for target ${t}: ${u}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function Rh(i,t,e){const r=ut(i);let s=ct.min(),a=mt();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,g,y){const w=ut(p),E=w.Fs.get(y);return E!==void 0?z.resolve(w.vs.get(E)):w.li.getTargetData(g,y)}(r,u,on(t)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,d.targetId).next(p=>{a=p})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?s:ct.min(),e?a:mt())).next(d=>(Cv(r,fy(t),d),{documents:d,ks:a})))}function Cv(i,t,e){let r=i.Ms.get(t)||ct.min();e.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),i.Ms.set(t,r)}class kh{constructor(){this.activeTargetIds=vy()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Rv{constructor(){this.vo=new kh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new kh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class kv{Mo(t){}shutdown(){}}/**
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
 */let la=null;function ol(){return la===null?la=function(){return 268435456+Math.round(2147483648*Math.random())}():la++,"0x"+la.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="RestConnection",Lv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class xv{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,a){const u=ol(),d=this.Qo(t,e.toUriEncodedString());G(Dc,`Sending RPC '${t}' ${u}:`,d,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,s,a);const{host:g}=new URL(d),y=uo(g);return this.zo(t,d,p,r,y).then(w=>(G(Dc,`Received RPC '${t}' ${u}: `,w),w),w=>{throw Qi(Dc,`RPC '${t}' ${u} failed with error: `,w,"url: ",d,"request:",r),w})}jo(t,e,r,s,a,u){return this.Wo(t,e,r,s,a)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,a)=>t[a]=s),r&&r.headers.forEach((s,a)=>t[a]=s)}Qo(t,e){const r=Lv[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="WebChannelConnection",Fs=(i,t,e)=>{i.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class zr extends xv{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!zr.c_){const t=jd();Fs(t,$d.STAT_EVENT,e=>{e.stat===Gc.PROXY?G(oe,"STAT_EVENT: detected buffering proxy"):e.stat===Gc.NOPROXY&&G(oe,"STAT_EVENT: detected no buffering proxy")}),zr.c_=!0}}zo(t,e,r,s,a){const u=ol();return new Promise((d,p)=>{const g=new zd;g.setWithCredentials(!0),g.listenOnce(qd.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case pa.NO_ERROR:const w=g.getResponseJson();G(oe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),d(w);break;case pa.TIMEOUT:G(oe,`RPC '${t}' ${u} timed out`),p(new W(U.DEADLINE_EXCEEDED,"Request time out"));break;case pa.HTTP_ERROR:const E=g.getStatus();if(G(oe,`RPC '${t}' ${u} failed with status:`,E,"response text:",g.getResponseText()),E>0){let S=g.getResponseJson();Array.isArray(S)&&(S=S[0]);const O=S==null?void 0:S.error;if(O&&O.status&&O.message){const F=function(tt){const H=tt.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(H)>=0?H:U.UNKNOWN}(O.status);p(new W(F,O.message))}else p(new W(U.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new W(U.UNAVAILABLE,"Connection failed."));break;default:it(9055,{l_:t,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{G(oe,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(s);G(oe,`RPC '${t}' ${u} sending request:`,s),g.send(e,"POST",y,r,15)})}T_(t,e,r){const s=ol(),a=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=this.createWebChannelTransport(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Go(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const g=a.join("");G(oe,`Creating RPC '${t}' stream ${s}: ${g}`,d);const y=u.createWebChannel(g,d);this.I_(y);let w=!1,E=!1;const S=new Dv({Jo:O=>{E?G(oe,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(w||(G(oe,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),G(oe,`RPC '${t}' stream ${s} sending:`,O),y.send(O))},Ho:()=>y.close()});return Fs(y,qs.EventType.OPEN,()=>{E||(G(oe,`RPC '${t}' stream ${s} transport opened.`),S.i_())}),Fs(y,qs.EventType.CLOSE,()=>{E||(E=!0,G(oe,`RPC '${t}' stream ${s} transport closed`),S.o_(),this.E_(y))}),Fs(y,qs.EventType.ERROR,O=>{E||(E=!0,Qi(oe,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),S.o_(new W(U.UNAVAILABLE,"The operation could not be completed")))}),Fs(y,qs.EventType.MESSAGE,O=>{var F;if(!E){const B=O.data[0];bt(!!B,16349);const tt=B,H=(tt==null?void 0:tt.error)||((F=tt[0])==null?void 0:F.error);if(H){G(oe,`RPC '${t}' stream ${s} received error:`,H);const j=H.status;let Y=function(R){const I=Bt[R];if(I!==void 0)return Pf(I)}(j),lt=H.message;j==="NOT_FOUND"&&lt.includes("database")&&lt.includes("does not exist")&&lt.includes(this.databaseId.database)&&Qi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Y===void 0&&(Y=U.INTERNAL,lt="Unknown error status: "+j+" with message "+H.message),E=!0,S.o_(new W(Y,lt)),y.close()}else G(oe,`RPC '${t}' stream ${s} received:`,B),S.__(B)}}),zr.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Hd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(i){return new zr(i)}function Nc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(i){return new Fy(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr.c_=!1;class zf{constructor(t,e,r=1e3,s=1.5,a=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="PersistentStream";class qf{constructor(t,e,r,s,a,u,d,p){this.Ci=t,this.S_=r,this.b_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===U.RESOURCE_EXHAUSTED?(Mn(e.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new W(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return G(Dh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(G(Dh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mv extends qf{constructor(t,e,r,s,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=zy(this.serializer,t),r=function(a){if(!("targetChange"in a))return ct.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ct.min():u.readTime?an(u.readTime):ct.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=rl(this.serializer),e.addTarget=function(a,u){let d;const p=u.target;if(d=Yc(p)?{documents:jy(a,p)}:{query:Hy(a,p).ft},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=Rf(a,u.resumeToken);const g=el(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(ct.min())>0){d.readTime=xa(a,u.snapshotVersion.toTimestamp());const g=el(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,t);const r=Gy(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=rl(this.serializer),e.removeTarget=t,this.K_(e)}}class Ov extends qf{constructor(t,e,r,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return bt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,bt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){bt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=$y(t.writeResults,t.commitTime),r=an(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=rl(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>qy(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{}class Fv extends Vv{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,nl(e,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(U.UNKNOWN,a.toString())})}jo(t,e,r,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.jo(t,nl(e,r),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new W(U.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Uv(i,t,e,r){return new Fv(i,t,e,r)}class Bv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(e),this.aa=!1):G("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="RemoteStore";class zv{constructor(t,e,r,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new hi(1e3),this.Va=new hi(1001),this.da=new Set,this.ma=[],this.fa=a,this.fa.Mo(u=>{r.enqueueAndForget(async()=>{ir(this)&&(G(dn,"Restarting streams for network reachability change."),await async function(p){const g=ut(p);g.da.add(4),await _o(g),g.ga.set("Unknown"),g.da.delete(4),await nc(g)}(this))})}),this.ga=new Bv(r,s)}}async function nc(i){if(ir(i))for(const t of i.ma)await t(!0)}async function _o(i){for(const t of i.ma)await t(!1)}function al(i,t){return i.Ea.get(t)||void 0}function $f(i,t){const e=ut(i),r=al(e,t.targetId);if(r!==void 0&&e.Ia.has(r))return;const s=function(d,p){const g=al(d,p);g!==void 0&&d.Ra.delete(g);const y=function(E,S){return S%2!=0?E.Va.next():E.Aa.next()}(d,p);return d.Ea.set(p,y),d.Ra.set(y,p),y}(e,t.targetId);G(dn,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const a=new Sn(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(s,a),zl(e)?Bl(e):os(e).O_()&&Ul(e,a)}function Fl(i,t){const e=ut(i),r=os(e),s=al(e,t);G(dn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ia.delete(s),e.Ea.delete(t),e.Ra.delete(s),r.O_()&&jf(e,s),e.Ia.size===0&&(r.O_()?r.L_():ir(e)&&e.ga.set("Unknown"))}function Ul(i,t){if(i.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ct.min())>0){const e=i.Ra.get(t.targetId);if(e===void 0)return void G(dn,"SDK target ID not found for remote ID: "+t.targetId);const r=i.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}os(i).Z_(t)}function jf(i,t){i.pa.$e(t),os(i).X_(t)}function Bl(i){i.pa=new Ny({getRemoteKeysForTarget:t=>{const e=i.Ra.get(t);return e!==void 0?i.remoteSyncer.getRemoteKeysForTarget(e):mt()},At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),os(i).start(),i.ga.ua()}function zl(i){return ir(i)&&!os(i).x_()&&i.Ia.size>0}function ir(i){return ut(i).da.size===0}function Hf(i){i.pa=void 0}async function qv(i){i.ga.set("Online")}async function $v(i){i.Ia.forEach((t,e)=>{Ul(i,t)})}async function jv(i,t){Hf(i),zl(i)?(i.ga.ha(t),Bl(i)):i.ga.set("Unknown")}async function Hv(i,t,e){if(i.ga.set("Online"),t instanceof Cf&&t.state===2&&t.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds){if(s.Ia.has(d)){const p=s.Ra.get(d);p!==void 0&&(await s.remoteSyncer.rejectListen(p,u),s.Ea.delete(p),s.Ra.delete(d)),s.Ia.delete(d)}s.pa.removeTarget(d)}}(i,t)}catch(r){G(dn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Na(i,r)}else if(t instanceof ya?i.pa.Xe(t):t instanceof Sf?i.pa.st(t):i.pa.tt(t),!e.isEqual(ct.min()))try{const r=await Bf(i.localStore);e.compareTo(r)>=0&&await function(a,u){const d=a.pa.Tt(u);d.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=a.Ia.get(y);w&&a.Ia.set(y,w.withResumeToken(g.resumeToken,u))}}),d.targetMismatches.forEach((g,y)=>{const w=a.Ia.get(g);if(!w)return;a.Ia.set(g,w.withResumeToken(re.EMPTY_BYTE_STRING,w.snapshotVersion)),jf(a,g);const E=new Sn(w.target,g,y,w.sequenceNumber);Ul(a,E)});const p=function(y,w){const E=new Map;w.targetChanges.forEach((O,F)=>{const B=y.Ra.get(F);B!==void 0&&E.set(B,O)});let S=new xt(pt);return w.targetMismatches.forEach((O,F)=>{const B=y.Ra.get(O);B!==void 0&&(S=S.insert(B,F))}),new po(w.snapshotVersion,E,S,w.documentUpdates,w.resolvedLimboDocuments)}(a,d);return a.remoteSyncer.applyRemoteEvent(p)}(i,e)}catch(r){G(dn,"Failed to raise snapshot:",r),await Na(i,r)}}async function Na(i,t,e){if(!rs(t))throw t;i.da.add(1),await _o(i),i.ga.set("Offline"),e||(e=()=>Bf(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{G(dn,"Retrying IndexedDB access"),await e(),i.da.delete(1),await nc(i)})}function Wf(i,t){return t().catch(e=>Na(i,e,t))}async function ic(i){const t=ut(i),e=di(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Il;for(;Wv(t);)try{const s=await Pv(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Gv(t,s)}catch(s){await Na(t,s)}Gf(t)&&Zf(t)}function Wv(i){return ir(i)&&i.Ta.length<10}function Gv(i,t){i.Ta.push(t);const e=di(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function Gf(i){return ir(i)&&!di(i).x_()&&i.Ta.length>0}function Zf(i){di(i).start()}async function Zv(i){di(i).ra()}async function Kv(i){const t=di(i);for(const e of i.Ta)t.ea(e.mutations)}async function Qv(i,t,e){const r=i.Ta.shift(),s=Ll.from(r,t,e);await Wf(i,()=>i.remoteSyncer.applySuccessfulWrite(s)),await ic(i)}async function Jv(i,t){t&&di(i).Y_&&await async function(r,s){if(function(u){return Ly(u)&&u!==U.ABORTED}(s.code)){const a=r.Ta.shift();di(r).B_(),await Wf(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await ic(r)}}(i,t),Gf(i)&&Zf(i)}async function Nh(i,t){const e=ut(i);e.asyncQueue.verifyOperationInProgress(),G(dn,"RemoteStore received new credentials");const r=ir(e);e.da.add(3),await _o(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await nc(e)}async function Yv(i,t){const e=ut(i);t?(e.da.delete(2),await nc(e)):t||(e.da.add(2),await _o(e),e.ga.set("Unknown"))}function os(i){return i.ya||(i.ya=function(e,r,s){const a=ut(e);return a.sa(),new Mv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:qv.bind(null,i),Yo:$v.bind(null,i),t_:jv.bind(null,i),H_:Hv.bind(null,i)}),i.ma.push(async t=>{t?(i.ya.B_(),zl(i)?Bl(i):i.ga.set("Unknown")):(await i.ya.stop(),Hf(i))})),i.ya}function di(i){return i.wa||(i.wa=function(e,r,s){const a=ut(e);return a.sa(),new Ov(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Zv.bind(null,i),t_:Jv.bind(null,i),ta:Kv.bind(null,i),na:Qv.bind(null,i)}),i.ma.push(async t=>{t?(i.wa.B_(),await ic(i)):(await i.wa.stop(),i.Ta.length>0&&(G(dn,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,r,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,a){const u=Date.now()+r,d=new ql(t,e,u,s,a);return d.start(r),d}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(i,t){if(Mn("AsyncQueue",`${t}: ${i}`),rs(i))return new W(U.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static emptySet(t){return new qr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||X.comparator(e.key,r.key):(e,r)=>X.comparator(e.key,r.key),this.keyedMap=$s(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof qr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Mh{constructor(){this.Sa=new xt(X.comparator)}track(t){const e=t.doc.key,r=this.Sa.get(e);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(e):t.type===1&&r.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):it(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Xr{constructor(t,e,r,s,a,u,d,p,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,s,a){const u=[];return e.forEach(d=>{u.push({type:0,doc:d})}),new Xr(t,e,qr.emptySet(e),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ja(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class tw{constructor(){this.queries=Oh(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const s=ut(e),a=s.queries;s.queries=Oh(),a.forEach((u,d)=>{for(const p of d.va)p.onError(r)})})(this,new W(U.ABORTED,"Firestore shutting down"))}}function Oh(){return new nr(i=>pf(i),Ja)}async function jl(i,t){const e=ut(i);let r=3;const s=t.query;let a=e.queries.get(s);a?!a.Fa()&&t.Ma()&&(r=2):(a=new Xv,r=t.Ma()?0:1);try{switch(r){case 0:a.Ca=await e.onListen(s,!0);break;case 1:a.Ca=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const d=$l(u,`Initialization of query '${Mr(t.query)}' failed`);return void t.onError(d)}e.queries.set(s,a),a.va.push(t),t.Oa(e.onlineState),a.Ca&&t.Na(a.Ca)&&Wl(e)}async function Hl(i,t){const e=ut(i),r=t.query;let s=3;const a=e.queries.get(r);if(a){const u=a.va.indexOf(t);u>=0&&(a.va.splice(u,1),a.va.length===0?s=t.Ma()?0:1:!a.Fa()&&t.Ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ew(i,t){const e=ut(i);let r=!1;for(const s of t){const a=s.query,u=e.queries.get(a);if(u){for(const d of u.va)d.Na(s)&&(r=!0);u.Ca=s}}r&&Wl(e)}function nw(i,t,e){const r=ut(i),s=r.queries.get(t);if(s)for(const a of s.va)a.onError(e);r.queries.delete(t)}function Wl(i){i.xa.forEach(t=>{t.next()})}var cl,Vh;(Vh=cl||(cl={})).Ba="default",Vh.Cache="cache";class Gl{constructor(t,e,r){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Xr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const r=e!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=Xr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==cl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.key=t}}class Qf{constructor(t){this.key=t}}class iw{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=mt(),this.mutatedKeys=mt(),this.iu=mf(t),this.su=new qr(this.iu)}get ou(){return this.tu}_u(t,e){const r=e?e.au:new Mh,s=e?e.su:this.su;let a=e?e.mutatedKeys:this.mutatedKeys,u=s,d=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((y,w)=>{const E=s.get(y),S=Ya(this.query,w)?w:null,O=!!E&&this.mutatedKeys.has(E.key),F=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let B=!1;E&&S?E.data.isEqual(S.data)?O!==F&&(r.track({type:3,doc:S}),B=!0):this.uu(E,S)||(r.track({type:2,doc:S}),B=!0,(p&&this.iu(S,p)>0||g&&this.iu(S,g)<0)&&(d=!0)):!E&&S?(r.track({type:0,doc:S}),B=!0):E&&!S&&(r.track({type:1,doc:E}),B=!0,(p||g)&&(d=!0)),B&&(S?(u=u.add(S),a=F?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{su:u,au:r,bs:d,mutatedKeys:a}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const a=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const u=t.au.Da();u.sort((y,w)=>function(S,O){const F=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return it(20277,{Vt:B})}};return F(S)-F(O)}(y.type,w.type)||this.iu(y.doc,w.doc)),this.cu(r),s=s??!1;const d=e&&!s?this.lu():[],p=this.ru.size===0&&this.current&&!s?1:0,g=p!==this.nu;return this.nu=p,u.length!==0||g?{snapshot:new Xr(this.query,t.su,a,u,t.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:d}:{hu:d}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Mh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=mt(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const e=[];return t.forEach(r=>{this.ru.has(r)||e.push(new Qf(r))}),this.ru.forEach(r=>{t.has(r)||e.push(new Kf(r))}),e}Tu(t){this.tu=t.ks,this.ru=mt();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return Xr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Zl="SyncEngine";class rw{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class sw{constructor(t){this.key=t,this.Eu=!1}}class ow{constructor(t,e,r,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new nr(d=>pf(d),Ja),this.Vu=new Map,this.du=new Set,this.mu=new xt(X.comparator),this.fu=new Map,this.gu=new Nl,this.pu={},this.yu=new Map,this.wu=hi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function aw(i,t,e=!0){const r=np(i);let s;const a=r.Au.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Iu()):s=await Jf(r,t,e,!0),s}async function cw(i,t){const e=np(i);await Jf(e,t,!0,!1)}async function Jf(i,t,e,r){const s=await Sv(i.localStore,on(t)),a=s.targetId,u=i.sharedClientState.addLocalQueryTarget(a,e);let d;return r&&(d=await lw(i,t,a,u==="current",s.resumeToken)),i.isPrimaryClient&&e&&$f(i.remoteStore,s),d}async function lw(i,t,e,r,s){i.bu=(w,E,S)=>async function(F,B,tt,H){let j=B.view._u(tt);j.bs&&(j=await Rh(F.localStore,B.query,!1).then(({documents:R})=>B.view._u(R,j)));const Y=H&&H.targetChanges.get(B.targetId),lt=H&&H.targetMismatches.get(B.targetId)!=null,Z=B.view.applyChanges(j,F.isPrimaryClient,Y,lt);return Uh(F,B.targetId,Z.hu),Z.snapshot}(i,w,E,S);const a=await Rh(i.localStore,t,!0),u=new iw(t,a.ks),d=u._u(a.documents),p=mo.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",s),g=u.applyChanges(d,i.isPrimaryClient,p);Uh(i,e,g.hu);const y=new rw(t,e,u);return i.Au.set(t,y),i.Vu.has(e)?i.Vu.get(e).push(t):i.Vu.set(e,[t]),g.snapshot}async function uw(i,t,e){const r=ut(i),s=r.Au.get(t),a=r.Vu.get(s.targetId);if(a.length>1)return r.Vu.set(s.targetId,a.filter(u=>!Ja(u,t))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await sl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Fl(r.remoteStore,s.targetId),ll(r,s.targetId)}).catch(is)):(ll(r,s.targetId),await sl(r.localStore,s.targetId,!0))}async function hw(i,t){const e=ut(i),r=e.Au.get(t),s=e.Vu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Fl(e.remoteStore,r.targetId))}async function dw(i,t,e){const r=vw(i);try{const s=await function(u,d){const p=ut(u),g=Lt.now(),y=d.reduce((S,O)=>S.add(O.key),mt());let w,E;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let O=On(),F=mt();return p.xs.getEntries(S,y).next(B=>{O=B,O.forEach((tt,H)=>{H.isValidDocument()||(F=F.add(tt))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,O)).next(B=>{w=B;const tt=[];for(const H of d){const j=Py(H,w.get(H.key).overlayedDocument);j!=null&&tt.push(new _i(H.key,j,of(j.value.mapValue),He.exists(!0)))}return p.mutationQueue.addMutationBatch(S,g,tt,d)}).next(B=>{E=B;const tt=B.applyToLocalDocumentSet(w,F);return p.documentOverlayCache.saveOverlays(S,B.batchId,tt)})}).then(()=>({batchId:E.batchId,changes:gf(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,d,p){let g=u.pu[u.currentUser.toKey()];g||(g=new xt(pt)),g=g.insert(d,p),u.pu[u.currentUser.toKey()]=g}(r,s.batchId,e),await go(r,s.changes),await ic(r.remoteStore)}catch(s){const a=$l(s,"Failed to persist write");e.reject(a)}}async function Yf(i,t){const e=ut(i);try{const r=await bv(e.localStore,t);t.targetChanges.forEach((s,a)=>{const u=e.fu.get(a);u&&(bt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.Eu=!0:s.modifiedDocuments.size>0?bt(u.Eu,14607):s.removedDocuments.size>0&&(bt(u.Eu,42227),u.Eu=!1))}),await go(e,r,t)}catch(r){await is(r)}}function Fh(i,t,e){const r=ut(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Au.forEach((a,u)=>{const d=u.view.Oa(t);d.snapshot&&s.push(d.snapshot)}),function(u,d){const p=ut(u);p.onlineState=d;let g=!1;p.queries.forEach((y,w)=>{for(const E of w.va)E.Oa(d)&&(g=!0)}),g&&Wl(p)}(r.eventManager,t),s.length&&r.Ru.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fw(i,t,e){const r=ut(i);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.fu.get(t),a=s&&s.key;if(a){let u=new xt(X.comparator);u=u.insert(a,ce.newNoDocument(a,ct.min()));const d=mt().add(a),p=new po(ct.min(),new Map,new xt(pt),u,d);await Yf(r,p),r.mu=r.mu.remove(a),r.fu.delete(t),Kl(r)}else await sl(r.localStore,t,!1).then(()=>ll(r,t,e)).catch(is)}async function pw(i,t){const e=ut(i),r=t.batch.batchId;try{const s=await Iv(e.localStore,t);tp(e,r,null),Xf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await go(e,s)}catch(s){await is(s)}}async function mw(i,t,e){const r=ut(i);try{const s=await function(u,d){const p=ut(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(w=>(bt(w!==null,37113),y=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(r.localStore,t);tp(r,t,e),Xf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await go(r,s)}catch(s){await is(s)}}function Xf(i,t){(i.yu.get(t)||[]).forEach(e=>{e.resolve()}),i.yu.delete(t)}function tp(i,t,e){const r=ut(i);let s=r.pu[r.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),r.pu[r.currentUser.toKey()]=s}}function ll(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Vu.get(t))i.Au.delete(r),e&&i.Ru.Du(r,e);i.Vu.delete(t),i.isPrimaryClient&&i.gu.Gr(t).forEach(r=>{i.gu.containsKey(r)||ep(i,r)})}function ep(i,t){i.du.delete(t.path.canonicalString());const e=i.mu.get(t);e!==null&&(Fl(i.remoteStore,e),i.mu=i.mu.remove(t),i.fu.delete(e),Kl(i))}function Uh(i,t,e){for(const r of e)r instanceof Kf?(i.gu.addReference(r.key,t),_w(i,r)):r instanceof Qf?(G(Zl,"Document no longer in limbo: "+r.key),i.gu.removeReference(r.key,t),i.gu.containsKey(r.key)||ep(i,r.key)):it(19791,{Cu:r})}function _w(i,t){const e=t.key,r=e.path.canonicalString();i.mu.get(e)||i.du.has(r)||(G(Zl,"New document in limbo: "+e),i.du.add(r),Kl(i))}function Kl(i){for(;i.du.size>0&&i.mu.size<i.maxConcurrentLimboResolutions;){const t=i.du.values().next().value;i.du.delete(t);const e=new X(Ct.fromString(t)),r=i.wu.next();i.fu.set(r,new sw(e)),i.mu=i.mu.insert(e,r),$f(i.remoteStore,new Sn(on(Qa(e.path)),r,"TargetPurposeLimboResolution",Ga.ce))}}async function go(i,t,e){const r=ut(i),s=[],a=[],u=[];r.Au.isEmpty()||(r.Au.forEach((d,p)=>{u.push(r.bu(p,t,e).then(g=>{var y;if((g||e)&&r.isPrimaryClient){const w=g?!g.fromCache:(y=e==null?void 0:e.targetChanges.get(p.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){s.push(g);const w=Ol.Es(p.targetId,g);a.push(w)}}))}),await Promise.all(u),r.Ru.H_(s),await async function(p,g){const y=ut(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>z.forEach(g,E=>z.forEach(E.Ts,S=>y.persistence.referenceDelegate.addReference(w,E.targetId,S)).next(()=>z.forEach(E.Is,S=>y.persistence.referenceDelegate.removeReference(w,E.targetId,S)))))}catch(w){if(!rs(w))throw w;G(Vl,"Failed to update sequence numbers: "+w)}for(const w of g){const E=w.targetId;if(!w.fromCache){const S=y.vs.get(E),O=S.snapshotVersion,F=S.withLastLimboFreeSnapshotVersion(O);y.vs=y.vs.insert(E,F)}}}(r.localStore,a))}async function gw(i,t){const e=ut(i);if(!e.currentUser.isEqual(t)){G(Zl,"User change. New user:",t.toKey());const r=await Uf(e.localStore,t);e.currentUser=t,function(a,u){a.yu.forEach(d=>{d.forEach(p=>{p.reject(new W(U.CANCELLED,u))})}),a.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await go(e,r.Ns)}}function yw(i,t){const e=ut(i),r=e.fu.get(t);if(r&&r.Eu)return mt().add(r.key);{let s=mt();const a=e.Vu.get(t);if(!a)return s;for(const u of a){const d=e.Au.get(u);s=s.unionWith(d.view.ou)}return s}}function np(i){const t=ut(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=yw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fw.bind(null,t),t.Ru.H_=ew.bind(null,t.eventManager),t.Ru.Du=nw.bind(null,t.eventManager),t}function vw(i){const t=ut(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=pw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mw.bind(null,t),t}class Ma{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ec(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return Ev(this.persistence,new vv,t.initialUser,this.serializer)}xu(t){return new Ff(Ml.Vi,this.serializer)}Mu(t){return new Rv}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ma.provider={build:()=>new Ma};class ww extends Ma{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){bt(this.persistence.referenceDelegate instanceof Da,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new rv(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new Ff(r=>Da.Vi(r,e),this.serializer)}}class ul{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gw.bind(null,this.syncEngine),await Yv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tw}()}createDatastore(t){const e=ec(t.databaseInfo.databaseId),r=Nv(t.databaseInfo);return Uv(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,a,u,d){return new zv(r,s,a,u,d)}(this.localStore,this.datastore,t.asyncQueue,e=>Fh(this.syncEngine,e,0),function(){return xh.v()?new xh:new kv}())}createSyncEngine(t,e){return function(s,a,u,d,p,g,y){const w=new ow(s,a,u,d,p,g);return y&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=ut(s);G(dn,"RemoteStore shutting down."),a.da.add(5),await _o(a),a.fa.shutdown(),a.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ul.provider={build:()=>new ul};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ql{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):Mn("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="FirestoreClient";class Tw{constructor(t,e,r,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=El.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{G(fi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(G(fi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$l(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Mc(i,t){i.asyncQueue.verifyOperationInProgress(),G(fi,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Uf(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Bh(i,t){i.asyncQueue.verifyOperationInProgress();const e=await Ew(i);G(fi,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>Nh(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,s)=>Nh(t.remoteStore,s)),i._onlineComponents=t}async function Ew(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){G(fi,"Using user provided OfflineComponentProvider");try{await Mc(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Qi("Error using user provided cache. Falling back to memory cache: "+e),await Mc(i,new Ma)}}else G(fi,"Using default OfflineComponentProvider"),await Mc(i,new ww(void 0));return i._offlineComponents}async function ip(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(G(fi,"Using user provided OnlineComponentProvider"),await Bh(i,i._uninitializedComponentsProvider._online)):(G(fi,"Using default OnlineComponentProvider"),await Bh(i,new ul))),i._onlineComponents}function Iw(i){return ip(i).then(t=>t.syncEngine)}async function Oa(i){const t=await ip(i),e=t.eventManager;return e.onListen=aw.bind(null,t.syncEngine),e.onUnlisten=uw.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=cw.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=hw.bind(null,t.syncEngine),e}function bw(i,t,e,r){const s=new Ql(r),a=new Gl(t,s,e);return i.asyncQueue.enqueueAndForget(async()=>jl(await Oa(i),a)),()=>{s.Ku(),i.asyncQueue.enqueueAndForget(async()=>Hl(await Oa(i),a))}}function Aw(i,t,e={}){const r=new kn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,d,p,g){const y=new Ql({next:E=>{y.Ku(),u.enqueueAndForget(()=>Hl(a,w));const S=E.docs.has(d);!S&&E.fromCache?g.reject(new W(U.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&p&&p.source==="server"?g.reject(new W(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new Gl(Qa(d.path),y,{includeMetadataChanges:!0,Wa:!0});return jl(a,w)}(await Oa(i),i.asyncQueue,t,e,r)),r.promise}function Pw(i,t,e={}){const r=new kn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,d,p,g){const y=new Ql({next:E=>{y.Ku(),u.enqueueAndForget(()=>Hl(a,w)),E.fromCache&&p.source==="server"?g.reject(new W(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new Gl(d,y,{includeMetadataChanges:!0,Wa:!0});return jl(a,w)}(await Oa(i),i.asyncQueue,t,e,r)),r.promise}function Sw(i,t){const e=new kn;return i.asyncQueue.enqueueAndForget(async()=>dw(await Iw(i),t,e)),e.promise}/**
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
 */function rp(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="ComponentProvider",zh=new Map;function Rw(i,t,e,r,s){return new Zg(i,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rp(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="firestore.googleapis.com",qh=!0;class $h{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new W(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sp,this.ssl=qh}else this.host=t.host,this.ssl=t.ssl??qh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Vf;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<nv)throw new W(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rp(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class rc{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $h({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new W(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $h(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sg;switch(r.type){case"firstParty":return new Lg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=zh.get(e);r&&(G(Cw,"Removing Datastore"),zh.delete(e),r.terminate())}(this),Promise.resolve()}}function kw(i,t,e,r={}){var g;i=Se(i,rc);const s=uo(t),a=i._getSettings(),u={...a,emulatorOptions:i._getEmulatorOptions()},d=`${t}:${e}`;s&&Dd(`https://${d}`),a.host!==sp&&a.host!==d&&Qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:d,ssl:s,emulatorOptions:r};if(!Dn(p,u)&&(i._setSettings(p),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=ae.MOCK_USER;else{y=Xm(r.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new W(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ae(E)}i._authCredentials=new Cg(new Gd(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new gi(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(ho(e,Nt._jsonSchema))return new Nt(t,r||null,new X(Ct.fromString(e.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:qt("string",Nt._jsonSchemaVersion),referencePath:qt("string")};class si extends gi{constructor(t,e,r){super(t,e,Qa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new X(t))}withConverter(t){return new si(this.firestore,t,this._path)}}function Ji(i,t,...e){if(i=Wt(i),Zd("collection","path",t),i instanceof rc){const r=Ct.fromString(t,...e);return nh(r),new si(i,null,r)}{if(!(i instanceof Nt||i instanceof si))throw new W(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Ct.fromString(t,...e));return nh(r),new si(i.firestore,null,r)}}function Ht(i,t,...e){if(i=Wt(i),arguments.length===1&&(t=El.newId()),Zd("doc","path",t),i instanceof rc){const r=Ct.fromString(t,...e);return eh(r),new Nt(i,null,new X(r))}{if(!(i instanceof Nt||i instanceof si))throw new W(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Ct.fromString(t,...e));return eh(r),new Nt(i.firestore,i instanceof si?i.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="AsyncQueue";class Hh{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new zf(this,"async_queue_retry"),this.lc=()=>{const r=Nc();r&&G(jh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Nc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Nc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new kn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!rs(t))throw t;G(jh,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,Mn("INTERNAL UNHANDLED ERROR: ",Wh(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=ql.createAndSchedule(this,t,e,r,a=>this.Ec(a));return this.oc.push(s),s}Pc(){this._c&&it(47125,{Rc:Wh(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Wh(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class pi extends rc{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Hh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Hh(t),this._firestoreClient=void 0,await t}}}function Lw(i,t){const e=typeof i=="object"?i:Vd(),r=typeof i=="string"?i:Ca,s=wl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Jm("firestore");a&&kw(s,...a)}return s}function sc(i){if(i._terminated)throw new W(U.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||xw(i),i._firestoreClient}function xw(i){var r,s,a,u;const t=i._freezeSettings(),e=Rw(i._databaseId,((r=i._app)==null?void 0:r.options.appId)||"",i._persistenceKey,(s=i._app)==null?void 0:s.options.apiKey,t);i._componentsProvider||(a=t.localCache)!=null&&a._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new Tw(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(re.fromBase64String(t))}catch(e){throw new W(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(re.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ho(t,Ve._jsonSchema))return Ve.fromBase64String(t.bytes)}}Ve._jsonSchemaVersion="firestore/bytes/1.0",Ve._jsonSchema={type:qt("string",Ve._jsonSchemaVersion),bytes:qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new W(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new W(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new W(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return pt(this._lat,t._lat)||pt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(t){if(ho(t,cn._jsonSchema))return new cn(t.latitude,t.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:qt("string",cn._jsonSchemaVersion),latitude:qt("number"),longitude:qt("number")};/**
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
 */class We{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ho(t,We._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new We(t.vectorValues);throw new W(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:qt("string",We._jsonSchemaVersion),vectorValues:qt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=/^__.*__$/;class Nw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new _i(t,this.data,this.fieldMask,e,this.fieldTransforms):new fo(t,this.data,e,this.fieldTransforms)}}class op{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new _i(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ap(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw it(40011,{dataSource:i})}}class oc{constructor(t,e,r,s,a,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.fc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new oc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Va(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(ap(this.dataSource)&&Dw.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Mw{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ec(t)}V(t,e,r,s=!1){return new oc({dataSource:t,methodName:e,targetDoc:r,path:ie.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yl(i){const t=i._freezeSettings(),e=ec(i._databaseId);return new Mw(i._databaseId,!!t.ignoreUndefinedProperties,e)}function Ow(i,t,e,r,s,a={}){const u=i.V(a.merge||a.mergeFields?2:0,t,e,s);nu("Data must be an object, but it was:",u,r);const d=lp(r,u);let p,g;if(a.merge)p=new Pe(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const E=Yi(t,w,e);if(!u.contains(E))throw new W(U.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);dp(y,E)||y.push(E)}p=new Pe(y),g=u.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=u.fieldTransforms;return new Nw(new ve(d),p,g)}class yo extends as{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof yo}}function cp(i,t,e){return new oc({dataSource:3,targetDoc:t.settings.targetDoc,methodName:i._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Xl extends as{_toFieldTransform(t){return new Rl(t.path,new ro)}isEqual(t){return t instanceof Xl}}class tu extends as{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=cp(this,t,!0),r=this.vc.map(a=>rr(a,e)),s=new Jr(r);return new Rl(t.path,s)}isEqual(t){return t instanceof tu&&Dn(this.vc,t.vc)}}class eu extends as{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=cp(this,t,!0),r=this.vc.map(a=>rr(a,e)),s=new Yr(r);return new Rl(t.path,s)}isEqual(t){return t instanceof eu&&Dn(this.vc,t.vc)}}function Vw(i,t,e,r){const s=i.V(1,t,e);nu("Data must be an object, but it was:",s,r);const a=[],u=ve.empty();mi(r,(p,g)=>{const y=hp(t,p,e);g=Wt(g);const w=s.Sc(y);if(g instanceof yo)a.push(y);else{const E=rr(g,w);E!=null&&(a.push(y),u.set(y,E))}});const d=new Pe(a);return new op(u,d,s.fieldTransforms)}function Fw(i,t,e,r,s,a){const u=i.V(1,t,e),d=[Yi(t,r,e)],p=[s];if(a.length%2!=0)throw new W(U.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)d.push(Yi(t,a[E])),p.push(a[E+1]);const g=[],y=ve.empty();for(let E=d.length-1;E>=0;--E)if(!dp(g,d[E])){const S=d[E];let O=p[E];O=Wt(O);const F=u.Sc(S);if(O instanceof yo)g.push(S);else{const B=rr(O,F);B!=null&&(g.push(S),y.set(S,B))}}const w=new Pe(g);return new op(y,w,u.fieldTransforms)}function Uw(i,t,e,r=!1){return rr(e,i.V(r?4:3,t))}function rr(i,t){if(up(i=Wt(i)))return nu("Unsupported field value:",t,i),lp(i,t);if(i instanceof as)return function(r,s){if(!ap(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const d of r){let p=rr(d,s.bc(u));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),u++}return{arrayValue:{values:a}}}(i,t)}return function(r,s){if((r=Wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Lt.fromDate(r);return{timestampValue:xa(s.serializer,a)}}if(r instanceof Lt){const a=new Lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xa(s.serializer,a)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:Rf(s.serializer,r._byteString)};if(r instanceof Nt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Dl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof We)return function(u,d){const p=u instanceof We?u.toArray():u;return{mapValue:{fields:{[rf]:{stringValue:sf},[Ra]:{arrayValue:{values:p.map(y=>{if(typeof y!="number")throw d.Dc("VectorValues must only contain numeric values.");return Cl(d.serializer,y)})}}}}}}(r,s);if(Of(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Wa(r)}`)}(i,t)}function lp(i,t){const e={};return Jd(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mi(i,(r,s)=>{const a=rr(s,t.yc(r));a!=null&&(e[r]=a)}),{mapValue:{fields:e}}}function up(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Lt||i instanceof cn||i instanceof Ve||i instanceof Nt||i instanceof as||i instanceof We||Of(i))}function nu(i,t,e){if(!up(e)||!Kd(e)){const r=Wa(e);throw r==="an object"?t.Dc(i+" a custom object"):t.Dc(i+" "+r)}}function Yi(i,t,e){if((t=Wt(t))instanceof Jl)return t._internalPath;if(typeof t=="string")return hp(i,t);throw Va("Field path arguments must be of type string or ",i,!1,void 0,e)}const Bw=new RegExp("[~\\*/\\[\\]]");function hp(i,t,e){if(t.search(Bw)>=0)throw Va(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Jl(...t.split("."))._internalPath}catch{throw Va(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Va(i,t,e,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let d=`Function ${t}() called with invalid data`;e&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(a||u)&&(p+=" (found",a&&(p+=` in field ${r}`),u&&(p+=` in document ${s}`),p+=")"),new W(U.INVALID_ARGUMENT,d+i+p)}function dp(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{convertValue(t,e="none"){switch(ui(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Vt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(li(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw it(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return mi(t,(s,a)=>{r[s]=this.convertValue(a,e)}),r}convertVectorValue(t){var r,s,a;const e=(a=(s=(r=t.fields)==null?void 0:r[Ra].arrayValue)==null?void 0:s.values)==null?void 0:a.map(u=>Vt(u.doubleValue));return new We(e)}convertGeoPoint(t){return new cn(Vt(t.latitude),Vt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ka(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(to(t));default:return null}}convertTimestamp(t){const e=ci(t);return new Lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Ct.fromString(t);bt(Mf(r),9688,{name:t});const s=new eo(r.get(1),r.get(3)),a=new X(r.popFirst(5));return s.isEqual(e)||Mn(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}/**
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
 */class iu extends zw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(){return new yo("deleteField")}function ln(){return new Xl("serverTimestamp")}function $w(...i){return new tu("arrayUnion",i)}function jw(...i){return new eu("arrayRemove",i)}const Gh="@firebase/firestore",Zh="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(i){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(i,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,e,r,s,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Hw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Yi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Hw extends fp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new W(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ru{}class mp extends ru{}function ts(i,t,...e){let r=[];t instanceof ru&&r.push(t),r=r.concat(e),function(a){const u=a.filter(p=>p instanceof su).length,d=a.filter(p=>p instanceof ac).length;if(u>1||u>0&&d>0)throw new W(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)i=s._apply(i);return i}class ac extends mp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ac(t,e,r)}_apply(t){const e=this._parse(t);return _p(t._query,e),new gi(t.firestore,t.converter,Xc(t._query,e))}_parse(t){const e=Yl(t.firestore);return function(a,u,d,p,g,y,w){let E;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new W(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Jh(w,y);const O=[];for(const F of w)O.push(Qh(p,a,F));E={arrayValue:{values:O}}}else E=Qh(p,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Jh(w,y),E=Uw(d,u,w,y==="in"||y==="not-in");return zt.create(g,y,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Xi(i,t,e){const r=t,s=Yi("where",i);return ac._create(s,r,e)}class su extends ru{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new su(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ze.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,a){let u=s;const d=a.getFlattenedFilters();for(const p of d)_p(u,p),u=Xc(u,p)}(t._query,e),new gi(t.firestore,t.converter,Xc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ou extends mp{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ou(t,e)}_apply(t){const e=function(s,a,u){if(s.startAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new io(a,u)}(t._query,this._field,this._direction);return new gi(t.firestore,t.converter,dy(t._query,e))}}function Ww(i,t="asc"){const e=t,r=Yi("orderBy",i);return ou._create(r,e)}function Qh(i,t,e){if(typeof(e=Wt(e))=="string"){if(e==="")throw new W(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ff(t)&&e.indexOf("/")!==-1)throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Ct.fromString(e));if(!X.isDocumentKey(r))throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uh(i,new X(r))}if(e instanceof Nt)return uh(i,e._key);throw new W(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wa(e)}.`)}function Jh(i,t){if(!Array.isArray(i)||i.length===0)throw new W(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function _p(i,t){const e=function(s,a){for(const u of s)for(const d of u.getFlattenedFilters())if(a.indexOf(d.op)>=0)return d.op;return null}(i.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new W(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Gw(i,t,e){let r;return r=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,r}class Hs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hi extends fp{constructor(t,e,r,s,a,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Yi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Hi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Hi._jsonSchema={type:qt("string",Hi._jsonSchemaVersion),bundleSource:qt("string","DocumentSnapshot"),bundleName:qt("string"),bundle:qt("string")};class va extends Hi{data(t={}){return super.data(t)}}class Wi{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Hs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new va(this._firestore,this._userDataWriter,r.key,r,new Hs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new W(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const p=new va(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Hs(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const p=new va(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Hs(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,y=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:Zw(d.type),doc:p,oldIndex:g,newIndex:y}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Wi._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=El.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Zw(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return it(61501,{type:i})}}/**
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
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:qt("string",Wi._jsonSchemaVersion),bundleSource:qt("string","QuerySnapshot"),bundleName:qt("string"),bundle:qt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(i){i=Se(i,Nt);const t=Se(i.firestore,pi),e=sc(t);return Aw(e,i._key).then(r=>yp(t,i,r))}function au(i){i=Se(i,gi);const t=Se(i.firestore,pi),e=sc(t),r=new iu(t);return pp(i._query),Pw(e,i._query).then(s=>new Wi(t,r,i,s))}function sr(i,t,e){i=Se(i,Nt);const r=Se(i.firestore,pi),s=Gw(i.converter,t,e),a=Yl(r);return cu(r,[Ow(a,"setDoc",i._key,s,i.converter!==null,e).toMutation(i._key,He.none())])}function yi(i,t,e,...r){i=Se(i,Nt);const s=Se(i.firestore,pi),a=Yl(s);let u;return u=typeof(t=Wt(t))=="string"||t instanceof Jl?Fw(a,"updateDoc",i._key,t,e,r):Vw(a,"updateDoc",i._key,t),cu(s,[u.toMutation(i._key,He.exists(!0))])}function gp(i){return cu(Se(i.firestore,pi),[new kl(i._key,He.none())])}function so(i,...t){var g,y,w;i=Wt(i);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Kh(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Kh(t[r])){const E=t[r];t[r]=(g=E.next)==null?void 0:g.bind(E),t[r+1]=(y=E.error)==null?void 0:y.bind(E),t[r+2]=(w=E.complete)==null?void 0:w.bind(E)}let a,u,d;if(i instanceof Nt)u=Se(i.firestore,pi),d=Qa(i._key.path),a={next:E=>{t[r]&&t[r](yp(u,i,E))},error:t[r+1],complete:t[r+2]};else{const E=Se(i,gi);u=Se(E.firestore,pi),d=E._query;const S=new iu(u);a={next:O=>{t[r]&&t[r](new Wi(u,S,E,O))},error:t[r+1],complete:t[r+2]},pp(i._query)}const p=sc(u);return bw(p,d,s,a)}function cu(i,t){const e=sc(i);return Sw(e,t)}function yp(i,t,e){const r=e.docs.get(t._key),s=new iu(i);return new Hi(i,s,t._key,r,new Hs(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){Pg(es),Gr(new Zi("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new pi(new Rg(r.getProvider("auth-internal")),new xg(u,r.getProvider("app-check-internal")),Kg(u,s),u);return a={useFetchStreams:e,...a},d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),ii(Gh,Zh,t),ii(Gh,Zh,"esm2020")})();function vp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=vp,wp=new co("auth","Firebase",vp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new yl("@firebase/auth");function Jw(i,...t){Fa.logLevel<=_t.WARN&&Fa.warn(`Auth (${es}): ${i}`,...t)}function wa(i,...t){Fa.logLevel<=_t.ERROR&&Fa.error(`Auth (${es}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(i,...t){throw uu(i,...t)}function Ge(i,...t){return uu(i,...t)}function lu(i,t,e){const r={...Qw(),[t]:e};return new co("auth","Firebase",r).create(t,{appName:i.name})}function Ln(i){return lu(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yw(i,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Fe(i,"argument-error"),lu(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uu(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return wp.create(i,...t)}function nt(i,t,...e){if(!i)throw uu(t,...e)}function Cn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw wa(t),new Error(t)}function Vn(i,t){i||Cn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Xw(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xw()||i_()||"connection"in navigator)?navigator.onLine:!0}function eT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e){this.shortDelay=t,this.longDelay=e,Vn(e>t,"Short delay should be less than long delay!"),this.isMobile=t_()||r_()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(i,t){Vn(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rT=new vo(3e4,6e4);function vi(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function wi(i,t,e,r,s={}){return Ep(i,s,async()=>{let a={},u={};r&&(t==="GET"?u=r:a={body:JSON.stringify(r)});const d=lo({key:i.config.apiKey,...u}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g={method:t,headers:p,...a};return n_()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&uo(i.emulatorConfig.host)&&(g.credentials="include"),Tp.fetch()(await Ip(i,i.config.apiHost,e,d),g)})}async function Ep(i,t,e){i._canInitEmulator=!1;const r={...nT,...t};try{const s=new oT(i),a=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw ua(i,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(i,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw ua(i,"email-already-in-use",u);if(p==="USER_DISABLED")throw ua(i,"user-disabled",u);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw lu(i,y,g);Fe(i,y)}}catch(s){if(s instanceof Fn)throw s;Fe(i,"network-request-failed",{message:String(s)})}}async function wo(i,t,e,r,s={}){const a=await wi(i,t,e,r,s);return"mfaPendingCredential"in a&&Fe(i,"multi-factor-auth-required",{_serverResponse:a}),a}async function Ip(i,t,e,r){const s=`${t}${e}?${r}`,a=i,u=a.config.emulator?hu(i.config,s):`${i.config.apiScheme}://${s}`;return iT.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function sT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),rT.get())})}}function ua(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Ge(i,t,r);return s.customData._tokenResponse=e,s}function Xh(i){return i!==void 0&&i.enterprise!==void 0}class aT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return sT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cT(i,t){return wi(i,"GET","/v2/recaptchaConfig",vi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lT(i,t){return wi(i,"POST","/v1/accounts:delete",t)}async function Ua(i,t){return wi(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function uT(i,t=!1){const e=Wt(i),r=await e.getIdToken(t),s=du(r);nt(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Qs(Oc(s.auth_time)),issuedAtTime:Qs(Oc(s.iat)),expirationTime:Qs(Oc(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Oc(i){return Number(i)*1e3}function du(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rd(e);return s?JSON.parse(s):(wa("Failed to decode base64 JWT payload"),null)}catch(s){return wa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function td(i){const t=du(i);return nt(t,"internal-error"),nt(typeof t.exp<"u","internal-error"),nt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Fn&&hT(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function hT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(i){var w;const t=i.auth,e=await i.getIdToken(),r=await oo(i,Ua(t,{idToken:e}));nt(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];i._notifyReloadListener(s);const a=(w=s.providerUserInfo)!=null&&w.length?bp(s.providerUserInfo):[],u=pT(i.providerData,a),d=i.isAnonymous,p=!(i.email&&s.passwordHash)&&!(u!=null&&u.length),g=d?p:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function fT(i){const t=Wt(i);await Ba(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function pT(i,t){return[...i.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function bp(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(i,t){const e=await Ep(i,{},async()=>{const r=lo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=i.config,u=await Ip(i,s,"/v1/token",`key=${a}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:r};return i.emulatorConfig&&uo(i.emulatorConfig.host)&&(p.credentials="include"),Tp.fetch()(u,p)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function _T(i,t){return wi(i,"POST","/v2/accounts:revokeToken",vi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){nt(t.idToken,"internal-error"),nt(typeof t.idToken<"u","internal-error"),nt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):td(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){nt(t.length!==0,"internal-error");const e=td(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(nt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:a}=await mT(t,e);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:a}=e,u=new $r;return r&&(nt(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),s&&(nt(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),a&&(nt(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(i,t){nt(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class je{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new dT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await oo(this,this.stsTokenManager.getToken(this.auth,t));return nt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return uT(this,t)}reload(){return fT(this)}_assign(t){this!==t&&(nt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new je({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){nt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Ln(this.auth));const t=await this.getIdToken();return await oo(this,lT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,a=e.phoneNumber??void 0,u=e.photoURL??void 0,d=e.tenantId??void 0,p=e._redirectEventId??void 0,g=e.createdAt??void 0,y=e.lastLoginAt??void 0,{uid:w,emailVerified:E,isAnonymous:S,providerData:O,stsTokenManager:F}=e;nt(w&&F,t,"internal-error");const B=$r.fromJSON(this.name,F);nt(typeof w=="string",t,"internal-error"),Qn(r,t.name),Qn(s,t.name),nt(typeof E=="boolean",t,"internal-error"),nt(typeof S=="boolean",t,"internal-error"),Qn(a,t.name),Qn(u,t.name),Qn(d,t.name),Qn(p,t.name),Qn(g,t.name),Qn(y,t.name);const tt=new je({uid:w,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:S,photoURL:u,phoneNumber:a,tenantId:d,stsTokenManager:B,createdAt:g,lastLoginAt:y});return O&&Array.isArray(O)&&(tt.providerData=O.map(H=>({...H}))),p&&(tt._redirectEventId=p),tt}static async _fromIdTokenResponse(t,e,r=!1){const s=new $r;s.updateFromServerResponse(e);const a=new je({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Ba(a),a}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];nt(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?bp(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new $r;d.updateFromIdToken(r);const p=new je({uid:s.localId,auth:t,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Map;function Rn(i){Vn(i instanceof Function,"Expected a class definition");let t=ed.get(i);return t?(Vn(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,ed.set(i,t),t)}/**
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
 */class Ap{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ap.type="NONE";const nd=Ap;/**
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
 */function Ta(i,t,e){return`firebase:${i}:${t}:${e}`}class jr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=Ta(this.userKey,s.apiKey,a),this.fullPersistenceKey=Ta("persistence",s.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Ua(this.auth,{idToken:t}).catch(()=>{});return e?je._fromGetAccountInfoResponse(this.auth,e,t):null}return je._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new jr(Rn(nd),t,r);const s=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||Rn(nd);const u=Ta(r,t.config.apiKey,t.name);let d=null;for(const g of e)try{const y=await g._get(u);if(y){let w;if(typeof y=="string"){const E=await Ua(t,{idToken:y}).catch(()=>{});if(!E)break;w=await je._fromGetAccountInfoResponse(t,E,y)}else w=je._fromJSON(t,y);g!==a&&(d=w),a=g;break}}catch{}const p=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new jr(a,t,r):(a=p[0],d&&await a._set(u,d.toJSON()),await Promise.all(e.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new jr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Rp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Pp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Lp(t))return"Blackberry";if(xp(t))return"Webos";if(Sp(t))return"Safari";if((t.includes("chrome/")||Cp(t))&&!t.includes("edge/"))return"Chrome";if(kp(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pp(i=le()){return/firefox\//i.test(i)}function Sp(i=le()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cp(i=le()){return/crios\//i.test(i)}function Rp(i=le()){return/iemobile/i.test(i)}function kp(i=le()){return/android/i.test(i)}function Lp(i=le()){return/blackberry/i.test(i)}function xp(i=le()){return/webos/i.test(i)}function fu(i=le()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function gT(i=le()){var t;return fu(i)&&!!((t=window.navigator)!=null&&t.standalone)}function yT(){return s_()&&document.documentMode===10}function Dp(i=le()){return fu(i)||kp(i)||xp(i)||Lp(i)||/windows phone/i.test(i)||Rp(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(i,t=[]){let e;switch(i){case"Browser":e=id(le());break;case"Worker":e=`${id(le())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${es}/${r}`}/**
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
 */class vT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=a=>new Promise((u,d)=>{try{const p=t(a);u(p)}catch(p){d(p)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wT(i,t={}){return wi(i,"GET","/v2/passwordPolicy",vi(i,t))}/**
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
 */const TT=6;class ET{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??TT,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rd(this),this.idTokenSubscription=new rd(this),this.beforeStateQueue=new vT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Rn(e)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await jr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Ua(this,{idToken:t}),r=await je._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(be(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,d=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(t);(!u||u===d)&&(p!=null&&p.user)&&(r=p.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return nt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ba(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=eT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(be(this.app))return Promise.reject(Ln(this));const e=t?Wt(t):null;return e&&nt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&nt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return be(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await wT(this),e=new ET(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new co("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await _T(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Rn(t)||this._popupRedirectResolver;nt(e,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Rn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(nt(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof e=="function"){const p=t.addObserver(e,r,s);return()=>{u=!0,p()}}else{const p=t.addObserver(e);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return nt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Jw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ti(i){return Wt(i)}class rd{constructor(t){this.auth=t,this.observer=null,this.addObserver=f_(e=>this.observer=e)}get next(){return nt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bT(i){cc=i}function Mp(i){return cc.loadJS(i)}function AT(){return cc.recaptchaEnterpriseScript}function PT(){return cc.gapiScript}function ST(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class CT{constructor(){this.enterprise=new RT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class RT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const kT="recaptcha-enterprise",Op="NO_RECAPTCHA";class LT{constructor(t){this.type=kT,this.auth=Ti(t)}async verify(t="verify",e=!1){async function r(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{cT(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new aT(p);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(p=>{d(p)})})}function s(a,u,d){const p=window.grecaptcha;Xh(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:t}).then(g=>{u(g)}).catch(()=>{u(Op)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CT().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!e&&Xh(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=AT();p.length!==0&&(p+=d),Mp(p).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function sd(i,t,e,r=!1,s=!1){const a=new LT(i);let u;if(s)u=Op;else try{u=await a.verify(e)}catch{u=await a.verify(e,!0)}const d={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function fl(i,t,e,r,s){var a;if((a=i._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await sd(i,t,e,e==="getOobCode");return r(i,u)}else return r(i,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await sd(i,t,e,e==="getOobCode");return r(i,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(i,t){const e=wl(i,"auth");if(e.isInitialized()){const s=e.getImmediate(),a=e.getOptions();if(Dn(a,t??{}))return s;Fe(s,"already-initialized")}return e.initialize({options:t})}function DT(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Rn);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function NT(i,t,e){const r=Ti(i);nt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,a=Vp(t),{host:u,port:d}=MT(t),p=d===null?"":`:${d}`,g={url:`${a}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){nt(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),nt(Dn(g,r.config.emulator)&&Dn(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,uo(u)?Dd(`${a}//${u}${p}`):OT()}function Vp(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function MT(i){const t=Vp(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:od(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:od(u)}}}function od(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function OT(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Cn("not implemented")}_getIdTokenResponse(t){return Cn("not implemented")}_linkToIdToken(t,e){return Cn("not implemented")}_getReauthenticationResolver(t){return Cn("not implemented")}}async function VT(i,t){return wi(i,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(i,t){return wo(i,"POST","/v1/accounts:signInWithPassword",vi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(i,t){return wo(i,"POST","/v1/accounts:signInWithEmailLink",vi(i,t))}async function BT(i,t){return wo(i,"POST","/v1/accounts:signInWithEmailLink",vi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends pu{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new ao(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new ao(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(t,e,"signInWithPassword",FT);case"emailLink":return UT(t,{email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fl(t,r,"signUpPassword",VT);case"emailLink":return BT(t,{idToken:e,email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(i,t){return wo(i,"POST","/v1/accounts:signInWithIdp",vi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="http://localhost";class tr extends pu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new tr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Fe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...a}=e;if(!r||!s)return null;const u=new tr(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const e=this.buildRequest();return Hr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Hr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Hr(t,e)}buildRequest(){const t={requestUri:zT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=lo(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $T(i){const t=Bs(zs(i)).link,e=t?Bs(zs(t)).deep_link_id:null,r=Bs(zs(i)).deep_link_id;return(r?Bs(zs(r)).link:null)||r||e||t||i}class mu{constructor(t){const e=Bs(zs(t)),r=e.apiKey??null,s=e.oobCode??null,a=qT(e.mode??null);nt(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=$T(t);try{return new mu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.providerId=cs.PROVIDER_ID}static credential(t,e){return ao._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=mu.parseLink(e);return nt(r,"argument-error"),ao._fromEmailAndCode(t,r.code,r.tenantId)}}cs.PROVIDER_ID="password";cs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class To extends _u{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends To{constructor(){super("facebook.com")}static credential(t){return tr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return tr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Pn.credentialFromTaggedObject(t)}static credentialFromError(t){return Pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Pn.credential(e,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends To{constructor(){super("github.com")}static credential(t){return tr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yn.credentialFromTaggedObject(t)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yn.credential(t.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends To{constructor(){super("twitter.com")}static credential(t,e){return tr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Xn.credential(e,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(i,t){return wo(i,"POST","/v1/accounts:signUp",vi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const a=await je._fromIdTokenResponse(t,r,s),u=ad(r);return new er({user:a,providerId:u,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=ad(r);return new er({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function ad(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends Fn{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,za.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new za(t,e,r,s)}}function Fp(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?za._fromErrorAndOperation(i,a,t,r):a})}async function HT(i,t,e=!1){const r=await oo(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return er._forOperation(i,"link",r)}/**
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
 */async function WT(i,t,e=!1){const{auth:r}=i;if(be(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const a=await oo(i,Fp(r,s,t,i),e);nt(a.idToken,r,"internal-error");const u=du(a.idToken);nt(u,r,"internal-error");const{sub:d}=u;return nt(i.uid===d,r,"user-mismatch"),er._forOperation(i,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(i,t,e=!1){if(be(i.app))return Promise.reject(Ln(i));const r="signIn",s=await Fp(i,r,t),a=await er._fromIdTokenResponse(i,r,s);return e||await i._updateCurrentUser(a.user),a}async function GT(i,t){return Up(Ti(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(i){const t=Ti(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ZT(i,t,e){if(be(i.app))return Promise.reject(Ln(i));const r=Ti(i),u=await fl(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jT).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Bp(i),p}),d=await er._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function KT(i,t,e){return be(i.app)?Promise.reject(Ln(i)):GT(Wt(i),cs.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bp(i),r})}function QT(i,t,e,r){return Wt(i).onIdTokenChanged(t,e,r)}function JT(i,t,e){return Wt(i).beforeAuthStateChanged(t,e)}function YT(i,t,e,r){return Wt(i).onAuthStateChanged(t,e,r)}function XT(i){return Wt(i).signOut()}const qa="__sak";/**
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
 */class zp{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=1e3,eE=10;class qp extends zp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!e&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);yT()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,eE):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},tE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}qp.type="LOCAL";const nE=qp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p extends zp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$p.type="SESSION";const jp=$p;/**
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
 */function iE(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class lc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new lc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:a}=e.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const d=Array.from(u).map(async g=>g(e.origin,a)),p=await iE(d);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:p})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
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
 */class rE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,p)=>{const g=gu("",20);s.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const E=w;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(E.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return window}function sE(i){un().location.href=i}/**
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
 */function Hp(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function oE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function cE(){return Hp()?self:null}/**
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
 */const Wp="firebaseLocalStorageDb",lE=1,$a="firebaseLocalStorage",Gp="fbase_key";class Eo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function uc(i,t){return i.transaction([$a],t?"readwrite":"readonly").objectStore($a)}function uE(){const i=indexedDB.deleteDatabase(Wp);return new Eo(i).toPromise()}function pl(){const i=indexedDB.open(Wp,lE);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore($a,{keyPath:Gp})}catch(s){e(s)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains($a)?t(r):(r.close(),await uE(),t(await pl()))})})}async function cd(i,t,e){const r=uc(i,!0).put({[Gp]:t,value:e});return new Eo(r).toPromise()}async function hE(i,t){const e=uc(i,!1).get(t),r=await new Eo(e).toPromise();return r===void 0?null:r.value}function ld(i,t){const e=uc(i,!0).delete(t);return new Eo(e).toPromise()}const dE=800,fE=3;class Zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>fE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(cE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await oE(),!this.activeServiceWorker)return;this.sender=new rE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||aE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pl();return await cd(t,qa,"1"),await ld(t,qa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>cd(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>hE(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ld(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const a=uc(s,!1).getAll();return new Eo(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:a}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zp.type="LOCAL";const pE=Zp;new vo(3e4,6e4);/**
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
 */function Kp(i,t){return t?Rn(t):(nt(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class yu extends pu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Hr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Hr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function mE(i){return Up(i.auth,new yu(i),i.bypassAuthState)}function _E(i){const{auth:t,user:e}=i;return nt(e,t,"internal-error"),WT(e,new yu(i),i.bypassAuthState)}async function gE(i){const{auth:t,user:e}=i;return nt(e,t,"internal-error"),HT(e,new yu(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t,e,r,s,a=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:a,error:u,type:d}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:e,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mE;case"linkViaPopup":case"linkViaRedirect":return gE;case"reauthViaPopup":case"reauthViaRedirect":return _E;default:Fe(this.auth,"internal-error")}}resolve(t){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new vo(2e3,1e4);async function vE(i,t,e){if(be(i.app))return Promise.reject(Ge(i,"operation-not-supported-in-this-environment"));const r=Ti(i);Yw(i,t,_u);const s=Kp(r,e);return new ji(r,"signInViaPopup",t,s).executeNotNull()}class ji extends Qp{constructor(t,e,r,s,a){super(t,e,s,a),this.provider=r,this.authWindow=null,this.pollId=null,ji.currentPopupAction&&ji.currentPopupAction.cancel(),ji.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return nt(t,this.auth,"internal-error"),t}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const t=gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ji.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yE.get())};t()}}ji.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="pendingRedirect",Ea=new Map;class TE extends Qp{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=Ea.get(this.auth._key());if(!t){try{const r=await EE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}Ea.set(this.auth._key(),t)}return this.bypassAuthState||Ea.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EE(i,t){const e=AE(t),r=bE(i);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function IE(i,t){Ea.set(i._key(),t)}function bE(i){return Rn(i._redirectPersistence)}function AE(i){return Ta(wE,i.config.apiKey,i.name)}async function PE(i,t,e=!1){if(be(i.app))return Promise.reject(Ln(i));const r=Ti(i),s=Kp(r,t),u=await new TE(r,s,e).execute();return u&&!e&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=10*60*1e3;class CE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!RE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Jp(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ge(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=SE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(t))}saveEventToCache(t){this.cachedEventUids.add(ud(t)),this.lastProcessedEventTime=Date.now()}}function ud(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function Jp({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function RE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jp(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(i,t={}){return wi(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xE=/^https?/;async function DE(i){if(i.config.emulator)return;const{authorizedDomains:t}=await kE(i);for(const e of t)try{if(NE(e))return}catch{}Fe(i,"unauthorized-domain")}function NE(i){const t=hl(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&u.hostname===r}if(!xE.test(e))return!1;if(LE.test(i))return r===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ME=new vo(3e4,6e4);function hd(){const i=un().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function OE(i){return new Promise((t,e)=>{var s,a,u;function r(){hd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{hd(),e(Ge(i,"network-request-failed"))},timeout:ME.get()})}if((a=(s=un().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)t(gapi.iframes.getContext());else if((u=un().gapi)!=null&&u.load)r();else{const d=ST("iframefcb");return un()[d]=()=>{gapi.load?r():e(Ge(i,"network-request-failed"))},Mp(`${PT()}?onload=${d}`).catch(p=>e(p))}}).catch(t=>{throw Ia=null,t})}let Ia=null;function VE(i){return Ia=Ia||OE(i),Ia}/**
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
 */const FE=new vo(5e3,15e3),UE="__/auth/iframe",BE="emulator/auth/iframe",zE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $E(i){const t=i.config;nt(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?hu(t,BE):`https://${i.config.authDomain}/${UE}`,r={apiKey:t.apiKey,appName:i.name,v:es},s=qE.get(i.config.apiHost);s&&(r.eid=s);const a=i._getFrameworks();return a.length&&(r.fw=a.join(",")),`${e}?${lo(r).slice(1)}`}async function jE(i){const t=await VE(i),e=un().gapi;return nt(e,i,"internal-error"),t.open({where:document.body,url:$E(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zE,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ge(i,"network-request-failed"),d=un().setTimeout(()=>{a(u)},FE.get());function p(){un().clearTimeout(d),s(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const HE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WE=500,GE=600,ZE="_blank",KE="http://localhost";class dd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QE(i,t,e,r=WE,s=GE){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const p={...HE,width:r.toString(),height:s.toString(),top:a,left:u},g=le().toLowerCase();e&&(d=Cp(g)?ZE:e),Pp(g)&&(t=t||KE,p.scrollbars="yes");const y=Object.entries(p).reduce((E,[S,O])=>`${E}${S}=${O},`,"");if(gT(g)&&d!=="_self")return JE(t||"",d),new dd(null);const w=window.open(t||"",d,y);nt(w,i,"popup-blocked");try{w.focus()}catch{}return new dd(w)}function JE(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const YE="__/auth/handler",XE="emulator/auth/handler",tI=encodeURIComponent("fac");async function fd(i,t,e,r,s,a){nt(i.config.authDomain,i,"auth-domain-config-required"),nt(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:es,eventId:s};if(t instanceof _u){t.setDefaultLanguage(i.languageCode),u.providerId=t.providerId||"",d_(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(t instanceof To){const y=t.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}i.tenantId&&(u.tid=i.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await i._getAppCheckToken(),g=p?`#${tI}=${encodeURIComponent(p)}`:"";return`${eI(i)}?${lo(d).slice(1)}${g}`}function eI({config:i}){return i.emulator?hu(i,XE):`https://${i.authDomain}/${YE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="webStorageSupport";class nI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jp,this._completeRedirectFn=PE,this._overrideRedirectResult=IE}async _openPopup(t,e,r,s){var u;Vn((u=this.eventManagers[t._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await fd(t,e,r,hl(),s);return QE(t,a,gu())}async _openRedirect(t,e,r,s){await this._originValidation(t);const a=await fd(t,e,r,hl(),s);return sE(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:a}=this.eventManagers[e];return s?Promise.resolve(s):(Vn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await jE(t),r=new CE(t);return e.register("authEvent",s=>(nt(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Vc,{type:Vc},s=>{var u;const a=(u=s==null?void 0:s[0])==null?void 0:u[Vc];a!==void 0&&e(!!a),Fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=DE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Dp()||Sp()||fu()}}const iI=nI;var pd="@firebase/auth",md="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){nt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oI(i){Gr(new Zi("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;nt(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Np(i)},g=new IT(r,s,a,p);return DT(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Gr(new Zi("auth-internal",t=>{const e=Ti(t.getProvider("auth").getImmediate());return(r=>new rI(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ii(pd,md,sI(i)),ii(pd,md,"esm2020")}/**
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
 */const aI=5*60,cI=xd("authIdTokenMaxAge")||aI;let _d=null;const lI=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>cI)return;const s=e==null?void 0:e.token;_d!==s&&(_d=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uI(i=Vd()){const t=wl(i,"auth");if(t.isInitialized())return t.getImmediate();const e=xT(i,{popupRedirectResolver:iI,persistence:[pE,nE,jp]}),r=xd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=lI(a.toString());JT(e,u,()=>u(e.currentUser)),QT(e,d=>u(d))}}const s=kd("auth");return s&&NT(e,`http://${s}`),e}function hI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}bT({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=s=>{const a=Ge("internal-error");a.customData=s,e(a)},r.type="text/javascript",r.charset="UTF-8",hI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oI("Browser");const Yp={apiKey:"AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",authDomain:"trippy-planner-807df.firebaseapp.com",projectId:"trippy-planner-807df",storageBucket:"trippy-planner-807df.firebasestorage.app",messagingSenderId:"376063703433",appId:"1:376063703433:web:..."},Xp=!!Yp.apiKey;let tm=null,em=null;function dI(){if(!Xp)return!1;try{const i=Od(Yp);return tm=Lw(i),em=uI(i),!0}catch(i){return console.warn("Firebase init failed — running in guest mode",i),!1}}const nm=()=>Xp,Mt=()=>tm,Io=()=>em;let Js=null;function fI(i){if(!nm()){i(null);return}const t=Io();if(!t){i(null);return}YT(t,e=>{Js=e,i(e)})}const bo=()=>Js;async function pI(){return vE(Io(),new Pn)}async function mI(i,t){return KT(Io(),i,t)}async function _I(i,t){return ZT(Io(),i,t)}async function gI(){return XT(Io())}function hc(i){const t=i.querySelector(".auth-slot");if(t){if(!nm()){t.innerHTML='<span class="auth-guest-note">Guest mode</span>';return}if(Js){const e=Js.displayName||Js.email||"User";t.innerHTML=`
      <span class="auth-user-name">${yI(e)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `,t.querySelector(".auth-signout-btn").addEventListener("click",()=>gI())}else t.innerHTML='<button class="ghost-btn auth-signin-btn">Sign in</button>',t.querySelector(".auth-signin-btn").addEventListener("click",()=>vI())}}function yI(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function vI(){const i=document.getElementById("auth-modal");if(i){i.remove();return}const t=document.createElement("div");t.id="auth-modal",t.className="auth-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t);const e=r=>{t.querySelector("#auth-err").textContent=r};t.querySelector("#auth-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()}),t.querySelector("#auth-google").addEventListener("click",async()=>{try{await pI(),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-signin").addEventListener("click",async()=>{try{await mI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-create").addEventListener("click",async()=>{try{await _I(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}})}let ba={};function wI(i){return ba=i,window.addEventListener("hashchange",Fc),{start:Fc,refresh:Fc}}function xn(i){window.location.hash=i}function Fc(){const i=window.location.hash.slice(1)||"/";for(const[t,e]of Object.entries(ba)){const r=TI(t,i);if(r!==null){e(r);return}}ba["/"]&&ba["/"]({})}function TI(i,t){if(i==="/")return t==="/"||t===""?{}:null;const e=i.split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(e.length!==r.length)return null;const s={};for(let a=0;a<e.length;a++)if(e[a].startsWith(":"))s[e[a].slice(1)]=decodeURIComponent(r[a]);else if(e[a]!==r[a])return null;return s}function gd(i,t){var e;return!t||!i?null:i.ownerId===t?"owner":((e=i.members)==null?void 0:e[t])||null}const dc=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),EI=()=>Math.random().toString(36).slice(2,9).toUpperCase(),II=()=>({id:dc(),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1}),im="trippy-planner-trips",vu=i=>`trippy-trip-${i}`,Wr=()=>{try{return JSON.parse(localStorage.getItem(im)||"[]")}catch{return[]}},rm=i=>{try{localStorage.setItem(im,JSON.stringify(i))}catch{}},oi=i=>{try{return JSON.parse(localStorage.getItem(vu(i))||"null")}catch{return null}},Gi=i=>{try{localStorage.setItem(vu(i.id),JSON.stringify(i))}catch{}},bI=i=>{try{localStorage.removeItem(vu(i))}catch{}};function yd(i){return i?typeof(i==null?void 0:i.toMillis)=="function"?i.toMillis():typeof i=="number"?i:0:0}function ja(i){return{memberUids:[],members:{},ownerName:"",sharedWithFriends:!0,...i,createdAt:yd(i.createdAt),updatedAt:yd(i.updatedAt)}}function AI(i,t,e){let r=[],s=[],a=null,u=null;function d(){const w=[...r];for(const O of s)w.find(F=>F.id===O.id)||w.push(O);w.forEach(O=>Gi(O));const E=new Set(w.map(O=>O.id)),S=Wr().filter(O=>!E.has(O.id)&&!!oi(O.id));rm([...w.map(({id:O,name:F,createdAt:B})=>({id:O,name:F,createdAt:B})),...S]),e([...w])}function p(w){a&&(a(),a=null),u&&(u(),u=null);const E=Mt();if(!E||!w)return;const S=ts(Ji(E,"trips"),Xi("ownerId","==",w),Ww("updatedAt","desc"));a=so(S,F=>{const B=F.docs.map(H=>ja({id:H.id,...H.data()})),tt=r.filter(H=>!B.find(j=>j.id===H.id));r=[...B,...tt],d()},F=>console.warn("Firestore owned trips:",F));const O=ts(Ji(E,"trips"),Xi("memberUids","array-contains",w));u=so(O,F=>{s=F.docs.map(B=>ja({id:B.id,...B.data()})),d()},F=>console.warn("Firestore shared trips:",F))}async function g(w){const E=Mt();if(!(!E||!i))try{await sr(Ht(E,"trips",w.id),{...w,createdAt:w.createdAt||ln(),updatedAt:ln()},{merge:!0})}catch(S){console.warn("Firestore write:",S)}}const y=Wr().map(w=>oi(w.id)||{...w,days:[]});return r=y,setTimeout(()=>e([...y]),0),i&&p(i),{getAll:()=>{const w=[...r];for(const E of s)w.find(S=>S.id===E.id)||w.push(E);return w},async create(w){const E=dc(),S={id:E,name:w,ownerId:i||null,ownerName:t||"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]};return r.unshift(S),Gi(S),d(),await g(S),E},async delete(w){r=r.filter(S=>S.id!==w),s=s.filter(S=>S.id!==w),bI(w),d();const E=Mt();if(E&&i)try{await gp(Ht(E,"trips",w))}catch{}},async rename(w,E){const S=this.getAll().find(F=>F.id===w);if(!S)return;S.name=E,S.updatedAt=Date.now(),Gi(S),e([...this.getAll()]);const O=Mt();if(O&&i)try{await yi(Ht(O,"trips",w),{name:E,updatedAt:ln()})}catch{}},setUserId(w,E){i=w,t=E||"",w?p(w):(a&&(a(),a=null),u&&(u(),u=null),r=Wr().map(S=>oi(S.id)||{...S,days:[]}),s=[],e([...r]))},destroy(){a&&(a(),a=null),u&&(u(),u=null)}}}function vd(i){return i.map(t=>`${t.id}|${t.date}|${t.destination}|${t.event}|${t.accommodation}|${t.accomCost}|${t.travelDetails}|${t.travelCost}|${t.travelDay}|${t.finalised}`).join("~")}function sm(i,t,e){let r=oi(i)||{id:i,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=Array.isArray(r.days)?r.days:[],a=null,u=null,d=!1;function p(){r.days=s,r.updatedAt=Date.now(),Gi(r)}function g(){clearTimeout(u),d=!0,u=setTimeout(async()=>{const E=Mt();if(!E||!t){d=!1;return}try{await sr(Ht(E,"trips",i),{...r,days:s,updatedAt:ln()},{merge:!0})}catch(S){console.warn("Firestore write:",S)}setTimeout(()=>{d=!1},3e3)},1500)}function y(){p(),t&&g(),e([...s])}function w(){p(),t&&g()}if(t){const E=Mt();E&&(a=so(Ht(E,"trips",i),S=>{if(!S.exists()||d)return;const O=S.data(),F=Array.isArray(O.days)?O.days:[];vd(F)!==vd(s)&&(r=ja({id:i,...O}),s=F,p(),e([...s]))},S=>console.warn("Firestore trip:",S)))}return{tripName:()=>r.name||"Trip",tripData:()=>({...r}),getAll:()=>[...s],add(E,S){const O={...II(),date:E,destination:S};s.push(O),s.sort((F,B)=>F.date.localeCompare(B.date)),y()},update(E,S,O){const F=s.find(B=>B.id===E);F&&(F[S]=O,w())},remove(E){s=s.filter(S=>S.id!==E),y()},loadFromCSV(E){s=E,y()},toCSV(){const E=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],S=s.map(O=>[O.date,O.destination,O.event,O.travelDay?"Y":"N",O.accommodation,O.accomCost,O.travelDetails,O.travelCost,O.finalised?"Y":"N"].map(F=>`"${(F??"").toString().replace(/"/g,'""')}"`).join(","));return[E.join(","),...S].join(`
`)},metrics(){const E=s.length,S=s.filter(B=>B.travelDay).length,O=s.filter(B=>B.finalised).length,F=s.reduce((B,tt)=>B+Number(tt.accomCost||0)+Number(tt.travelCost||0),0);return{total:E,travelDays:S,finalised:O,cost:F}},destroy(){clearTimeout(u),a&&(a(),a=null)}}}async function PI(i,t,e){const r=Mt();if(!r||!e)throw new Error("Must be signed in to share");const s=EI();return await sr(Ht(r,"invites",s),{tripId:i,role:t,createdBy:e,createdAt:ln()}),s}async function SI(i,t){const e=Mt();if(!e)throw new Error("Firebase not configured");const r=await Kw(Ht(e,"invites",i));if(!r.exists())throw new Error("Invite not found or already used");const{tripId:s,role:a}=r.data();return await yi(Ht(e,"trips",s),{[`members.${t}`]:a,memberUids:$w(t)}),s}async function CI(i,t,e){const r=Mt();r&&await yi(Ht(r,"trips",i),{[`members.${t}`]:e})}async function RI(i,t){const e=Mt();e&&await yi(Ht(e,"trips",i),{[`members.${t}`]:qw(),memberUids:jw(t)})}async function om(i,t,e){const r=oi(t)||{id:t,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=[...r.days,...i.map(u=>({...u,id:dc()}))].sort((u,d)=>u.date.localeCompare(d.date));r.days=s,r.updatedAt=Date.now(),Gi(r);const a=Mt();if(a&&e)try{await yi(Ht(a,"trips",t),{days:s,updatedAt:ln()})}catch(u){console.warn("copyDaysToTrip Firestore:",u)}}async function kI(i,t){const e=`trippy-migrated-v2-${i}`;if(localStorage.getItem(e))return;const r=Mt();if(!r){localStorage.setItem(e,"1");return}try{const s=await au(Ji(r,"users",i,"trips"));if(s.empty){localStorage.setItem(e,"1");return}for(const a of s.docs){const u=a.data();await sr(Ht(r,"trips",a.id),{...u,id:a.id,ownerId:i,ownerName:t||"",memberUids:u.memberUids||[],members:u.members||{}},{merge:!0})}localStorage.setItem(e,"1")}catch(s){console.warn("Old-path migration failed:",s)}}function LI(){try{const i=localStorage.getItem("trippy-planner-data");if(!i)return null;const t=JSON.parse(i);return!Array.isArray(t)||t.length===0?(localStorage.removeItem("trippy-planner-data"),null):t}catch{return null}}function xI(i,t,e){const r=dc(),s={id:r,name:i,ownerId:e||null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:t};Gi(s);const a=Wr();a.unshift({id:r,name:i,createdAt:s.createdAt}),rm(a),localStorage.removeItem("trippy-planner-data");const u=Mt();return u&&e&&sr(Ht(u,"trips",r),{...s,createdAt:ln(),updatedAt:ln()}).catch(console.warn),r}async function DI(i,t,e){const r=Mt();r&&await sr(Ht(r,"users",i),{uid:i,displayName:t||"",email:(e||"").toLowerCase(),updatedAt:ln()},{merge:!0})}async function NI(i){const t=Mt();if(!t)return null;const e=await au(ts(Ji(t,"users"),Xi("email","==",i.toLowerCase().trim())));return e.empty?null:e.docs[0].data()}async function MI(i,t,e,r){const s=Mt();if(!s)return;const a=`${i}_${r.uid}`;await sr(Ht(s,"friendRequests",a),{from:i,fromDisplayName:t||"",fromEmail:(e||"").toLowerCase(),to:r.uid,toDisplayName:r.displayName||"",toEmail:(r.email||"").toLowerCase(),status:"pending",createdAt:ln()})}async function OI(i){const t=Mt();t&&await yi(Ht(t,"friendRequests",i),{status:"accepted"})}async function VI(i){const t=Mt();t&&await yi(Ht(t,"friendRequests",i),{status:"declined"})}async function FI(i){const t=Mt();t&&await gp(Ht(t,"friendRequests",i))}function UI(i,t){const e=Mt();if(!e)return t([],[]),()=>{};let r=[],s=[];const a=()=>t([...r],[...s]),u=so(ts(Ji(e,"friendRequests"),Xi("from","==",i)),p=>{r=p.docs.map(g=>({id:g.id,...g.data()})),a()},p=>console.warn("friendRequests (sent):",p)),d=so(ts(Ji(e,"friendRequests"),Xi("to","==",i)),p=>{s=p.docs.map(g=>({id:g.id,...g.data()})).filter(g=>g.status==="pending"),a()},p=>console.warn("friendRequests (recv):",p));return()=>{u(),d()}}async function BI(i){const t=Mt();if(!t)return[];try{return(await au(ts(Ji(t,"trips"),Xi("ownerId","==",i),Xi("sharedWithFriends","==",!0)))).docs.map(r=>ja({id:r.id,...r.data()}))}catch(e){return console.warn("getFriendTrips:",e),[]}}async function zI(i,t){const e=oi(i);e&&(e.sharedWithFriends=t,Gi(e));const r=Mt();if(r)try{await yi(Ht(r,"trips",i),{sharedWithFriends:t})}catch(s){console.warn("updateTripVisibility:",s)}}const qI=["January","February","March","April","May","June","July","August","September","October","November","December"],$I=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Uc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function Ur(i,t,e,r,s={}){const a=i.querySelector(s.title||"#cal-title"),u=i.querySelector(s.header||"#cal-days-header"),d=i.querySelector(s.body||"#cal-body");if(!a||!u||!d)return;a.textContent=`${qI[r]} ${e}`,u.innerHTML=$I.map(S=>`<div class="cal-header-cell">${S}</div>`).join("");const p={};t.forEach(S=>{S.date&&(p[S.date]=S)});const g=new Date(e,r,1).getDay(),y=new Date(e,r+1,0).getDate(),w=new Date;let E="";for(let S=0;S<g;S++)E+='<div class="cal-cell empty"></div>';for(let S=1;S<=y;S++){const O=`${e}-${String(r+1).padStart(2,"0")}-${String(S).padStart(2,"0")}`,F=w.getFullYear()===e&&w.getMonth()===r&&w.getDate()===S,B=p[O];let tt="cal-cell";F?tt+=" today":B&&(tt+=" has-trip");let H=`<div class="cal-date-num${F?" today-num":""}">${S}</div>`;B&&(H+=`<div class="cal-dest">${Uc(B.destination)}</div>`,B.event&&(H+=`<div class="cal-note">${Uc(B.event)}</div>`),B.travelDetails&&(H+=`<div class="cal-travel-note">${Uc(B.travelDetails)}</div>`)),E+=`<div class="${tt}">${H}</div>`}d.innerHTML=E}function am(i,t,e){var y;(y=document.getElementById("share-modal-overlay"))==null||y.remove();const r=t.members||{},s=t.memberUids||[],a=t.ownerId===e,u=r[e]||null,d=Object.entries(r).map(([w,E])=>`
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
          <p>Shared with you by <strong>${ti(t.ownerName||"the trip owner")}</strong>.</p>
          ${u!=="editor"?'<p class="share-readonly-note">You have read-only access. Ask the owner for edit access.</p>':"<p>You can view and edit this trip.</p>"}
        </div>
      `}

      <div class="modal-actions">
        <button class="ghost-btn" id="share-close-btn">Close</button>
      </div>
    </div>
  `,document.body.appendChild(p);const g=()=>p.remove();document.getElementById("share-close-btn").addEventListener("click",g),p.addEventListener("click",w=>{w.target===p&&g()}),a&&(document.getElementById("gen-link-btn").addEventListener("click",async()=>{const w=document.getElementById("gen-link-btn");w.textContent="Generating…",w.disabled=!0;try{const E=document.getElementById("invite-role").value,S=await PI(i,E,e),O=`${location.origin}${location.pathname}#/join/${S}`;document.getElementById("invite-link-input").value=O,document.getElementById("copy-link-btn").style.display=""}catch(E){alert("Failed to generate invite link: "+E.message)}finally{w.textContent="Generate",w.disabled=!1}}),document.getElementById("copy-link-btn").addEventListener("click",()=>{const w=document.getElementById("invite-link-input").value;navigator.clipboard.writeText(w).then(()=>{const E=document.getElementById("copy-link-btn");E.textContent="Copied!",setTimeout(()=>{E.textContent="Copy"},2e3)})}),p.addEventListener("change",async w=>{if(!w.target.matches(".share-role-select"))return;const E=w.target.dataset.uid;try{await CI(i,E,w.target.value)}catch(S){console.warn("Role update failed:",S)}}),p.addEventListener("click",async w=>{if(!w.target.matches(".share-remove-btn"))return;const E=w.target.dataset.uid;if(confirm("Remove this collaborator from the trip?"))try{await RI(i,E),w.target.closest(".share-member-row").remove()}catch(S){console.warn("Remove member failed:",S)}}))}function jI(i,t,e){var d;(d=document.getElementById("add-day-overlay"))==null||d.remove();const r=Wr().map(p=>oi(p.id)).filter(Boolean).filter(p=>p.id!==t&&(!p.ownerId||p.ownerId===e)),s=r.length?r.map(p=>`<option value="${p.id}">${ti(p.name)}</option>`).join(""):"<option disabled>No own trips — create one first</option>",a=document.createElement("div");a.className="modal-overlay",a.id="add-day-overlay",a.style.display="flex",a.innerHTML=`
    <div class="modal-box add-day-box">
      <div class="modal-title">Add Day to My Trip</div>
      <div class="add-day-preview">
        <div class="add-day-date">${cm(i.date)}</div>
        <div class="add-day-dest">${ti(i.destination||"Unknown")}</div>
        ${i.event?`<div class="add-day-field">${ti(i.event)}</div>`:""}
        ${i.travelDetails?`<div class="add-day-field muted">${ti(i.travelDetails)}</div>`:""}
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
  `,document.body.appendChild(a);const u=()=>a.remove();document.getElementById("add-day-cancel").addEventListener("click",u),a.addEventListener("click",p=>{p.target===a&&u()}),document.getElementById("add-day-confirm").addEventListener("click",async()=>{var w;const p=document.getElementById("add-day-target").value,g=((w=r.find(E=>E.id===p))==null?void 0:w.name)||"trip",y=document.getElementById("add-day-confirm");y.textContent="Adding…",y.disabled=!0;try{await om([i],p,e),u(),HI(`Day added to "${g}"`)}catch(E){alert("Could not add day: "+E.message),y.textContent="Add Day",y.disabled=!1}})}function HI(i){const t=document.createElement("div");t.className="toast-success",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2800)}function WI(i,t,e){var g;(g=document.getElementById("copy-days-overlay"))==null||g.remove();const r=Wr().map(y=>oi(y.id)).filter(Boolean),s=e?r.filter(y=>y.id!==i&&(y.ownerId===e||!y.ownerId)):r.filter(y=>y.id!==i),a=s.length?s.map(y=>`<option value="${y.id}">${ti(y.name)}</option>`).join(""):"<option disabled>No own trips found — create one first</option>",u=t.map((y,w)=>`
    <label class="copy-day-row">
      <input type="checkbox" class="copy-day-check" value="${w}">
      <span class="copy-day-date">${cm(y.date)}</span>
      <span class="copy-day-dest">${ti(y.destination||"Unknown")}</span>
      ${y.event?`<span class="copy-day-event">${ti(y.event)}</span>`:""}
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
  `,document.body.appendChild(d);const p=()=>d.remove();document.getElementById("copy-cancel-btn").addEventListener("click",p),d.addEventListener("click",y=>{y.target===d&&p()}),document.getElementById("copy-select-all").addEventListener("click",()=>{d.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!0})}),document.getElementById("copy-select-none").addEventListener("click",()=>{d.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!1})}),document.getElementById("copy-confirm-btn").addEventListener("click",async()=>{const y=[...d.querySelectorAll(".copy-day-check:checked")];if(!y.length){alert("Select at least one day.");return}const w=y.map(O=>t[Number(O.value)]),E=document.getElementById("copy-target-trip").value,S=document.getElementById("copy-confirm-btn");S.textContent="Copying…",S.disabled=!0;try{await om(w,E,e),p(),alert(`${w.length} day${w.length!==1?"s":""} copied successfully.`)}catch(O){console.warn("Copy failed:",O),alert("Copy failed: "+O.message),S.textContent="Copy selected",S.disabled=!1}})}function ti(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function cm(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}let ha=null;const GI={title:"#fl-cal-title",header:"#fl-cal-header",body:"#fl-cal-body"};function ZI(i,t){if(!t)return i.innerHTML=`
      <div class="empty-state" style="margin-top:60px">
        <div class="empty-icon">👥</div>
        <p>Sign in to use Trippy Friends.</p>
      </div>`,()=>{};let e=[],r=[],s=null,a=[],u=new Date().getFullYear(),d=new Date().getMonth();i.innerHTML=`
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
  `;function p(){i.querySelector("#fl-placeholder").style.display="",i.querySelector("#fl-cal-view").style.display="none"}function g(){const H=a.flatMap(j=>(j.days||[]).map(Y=>({...Y,_tripName:j.name}))).sort((j,Y)=>j.date.localeCompare(Y.date));Ur(i,H,u,d,GI)}async function y(H){if(s=H,ha=(H==null?void 0:H.uid)||null,!H){p();return}i.querySelector("#fl-placeholder").style.display="none",i.querySelector("#fl-cal-view").style.display="",i.querySelector("#fl-cal-name").textContent=H.displayName||H.email||"Friend",a=await BI(H.uid),g()}function w(){const H=e.filter(Z=>Z.status==="accepted"),j=e.filter(Z=>Z.status==="pending"),Y=i.querySelector("#fl-panel-body");let lt="";r.length&&(lt+=`<div class="fl-section-label">Requests (${r.length})</div>`,lt+=r.map(Z=>`
        <div class="fl-request-item" data-reqid="${Z.id}">
          <div class="fl-friend-info">
            <div class="fl-friend-name">${Bi(Z.fromDisplayName||Z.fromEmail)}</div>
            <div class="fl-friend-email">${Bi(Z.fromEmail)}</div>
          </div>
          <button class="fl-accept-btn add-btn"   data-reqid="${Z.id}" data-uid="${Z.from}" data-name="${Bi(Z.fromDisplayName)}" data-email="${Bi(Z.fromEmail)}">✓</button>
          <button class="fl-decline-btn ghost-btn" data-reqid="${Z.id}">✕</button>
        </div>
      `).join("")),lt+=`<div class="fl-section-label">${H.length?`Friends (${H.length})`:"Friends"}</div>`,H.length?lt+=H.map(Z=>`
          <div class="fl-friend-item ${(s==null?void 0:s.uid)===Z.to?"selected":""}" data-uid="${Z.to}" data-reqid="${Z.id}">
            <div class="fl-friend-info">
              <div class="fl-friend-name">${Bi(Z.toDisplayName||Z.toEmail)}</div>
              <div class="fl-friend-email">${Bi(Z.toEmail)}</div>
            </div>
            <button class="fl-remove-btn" data-reqid="${Z.id}" data-uid="${Z.to}" title="Remove">×</button>
          </div>`).join(""):lt+='<p class="fl-empty">No friends yet — send a request above.</p>',j.length&&(lt+='<div class="fl-section-label">Pending</div>',lt+=j.map(Z=>`
        <div class="fl-pending-item">
          <div class="fl-friend-info">
            <div class="fl-friend-name">${Bi(Z.toDisplayName||Z.toEmail)}</div>
            <div class="fl-friend-email">Awaiting response…</div>
          </div>
          <button class="fl-remove-btn" data-reqid="${Z.id}" title="Cancel request">×</button>
        </div>
      `).join("")),Y.innerHTML=lt,Y.querySelectorAll(".fl-accept-btn").forEach(Z=>{Z.addEventListener("click",async()=>{Z.disabled=!0,await OI(Z.dataset.reqid),y({uid:Z.dataset.uid,displayName:Z.dataset.name,email:Z.dataset.email})})}),Y.querySelectorAll(".fl-decline-btn").forEach(Z=>{Z.addEventListener("click",async()=>{Z.disabled=!0,await VI(Z.dataset.reqid)})}),Y.querySelectorAll(".fl-friend-item").forEach(Z=>{Z.addEventListener("click",R=>{if(R.target.closest(".fl-remove-btn"))return;const I=e.find(P=>P.id===Z.dataset.reqid);I&&y({uid:I.to,displayName:I.toDisplayName,email:I.toEmail})})}),Y.querySelectorAll(".fl-remove-btn").forEach(Z=>{Z.addEventListener("click",async()=>{Z.disabled=!0,(s==null?void 0:s.uid)===Z.dataset.uid&&(s=null,ha=null,p()),await FI(Z.dataset.reqid)})})}const E=i.querySelector("#fl-email"),S=i.querySelector("#fl-add-btn"),O=i.querySelector("#fl-status");function F(H,j){O.textContent=H,O.className=`fl-status ${j?"error":"success"}`}async function B(){const H=E.value.trim();if(H){S.disabled=!0,S.textContent="…",O.textContent="";try{const j=await NI(H);if(!j)F("No account found. Ask your friend to open Trippy Planner first.",!0);else if(j.uid===t)F("You can't add yourself.",!0);else if(e.some(Y=>Y.to===j.uid))F("You already have a request with this person.",!0);else{const Y=bo();await MI(t,(Y==null?void 0:Y.displayName)||"",(Y==null?void 0:Y.email)||"",j),E.value="",F(`Request sent to ${j.displayName||j.email}!`,!1)}}catch{F("Something went wrong. Try again.",!0)}finally{S.disabled=!1,S.textContent="Add"}}}return S.addEventListener("click",B),E.addEventListener("keydown",H=>{H.key==="Enter"&&B()}),i.querySelector("#fl-prev").addEventListener("click",()=>{d--,d<0&&(d=11,u--),s&&g()}),i.querySelector("#fl-next").addEventListener("click",()=>{d++,d>11&&(d=0,u++),s&&g()}),UI(t,(H,j)=>{if(e=H,r=j,w(),ha&&!s){const Y=H.find(lt=>lt.status==="accepted"&&lt.to===ha);Y&&y({uid:Y.to,displayName:Y.toDisplayName,email:Y.toEmail})}})}function Bi(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}let Ie=null,Ae=null,sn="all",fe="trips",ml=new Date().getFullYear(),qi=new Date().getMonth();function lm(i){const t=bo(),e=(t==null?void 0:t.uid)||null,r=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"";Ie&&(Ie.destroy(),Ie=null),Ie=AI(e,r,s=>{const a=window.location.hash;if(a!=="#/"&&a!=="#"&&a!==""){Ae==null||Ae(),Ae=null,Ie==null||Ie.destroy(),Ie=null;return}um(i,s,e)})}function um(i,t,e){var p,g,y,w;Ae==null||Ae(),Ae=null;const r=LI(),s=QI(t,e);i.innerHTML=`
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
          <p>${JI()}</p>
        </div>
      `:`
        <div class="landing-grid" id="trips-grid">
          ${s.map(E=>KI(E,e)).join("")}
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
  `,hc(i),i.querySelectorAll("[data-ltab]").forEach(E=>{E.addEventListener("click",()=>{fe=E.dataset.ltab,i.querySelector("#lv-trips").style.display=fe==="trips"?"":"none",i.querySelector("#lv-calendar").style.display=fe==="calendar"?"":"none",i.querySelector("#lv-friends").style.display=fe==="friends"?"":"none",i.querySelectorAll(".landing-tab").forEach(S=>S.classList.toggle("active",S.dataset.ltab===fe)),fe==="calendar"&&da(i,t,e),fe==="friends"&&wd(i,e)})}),fe==="calendar"&&da(i,t,e),fe==="friends"&&wd(i,e),(p=i.querySelector("#cal-prev"))==null||p.addEventListener("click",()=>{qi--,qi<0&&(qi=11,ml--),da(i,t,e)}),(g=i.querySelector("#cal-next"))==null||g.addEventListener("click",()=>{qi++,qi>11&&(qi=0,ml++),da(i,t,e)}),r&&(i.querySelector("#mig-save").addEventListener("click",()=>{const E=i.querySelector("#mig-name").value.trim()||"My Trip";xI(E,r,e),lm(i)}),i.querySelector("#mig-skip").addEventListener("click",()=>{localStorage.removeItem("trippy-planner-data"),i.querySelector("#mig-banner").remove()})),i.querySelectorAll(".filter-tab").forEach(E=>{E.addEventListener("click",()=>{sn=E.dataset.filter,um(i,Ie.getAll(),e)})});const a=i.querySelector("#new-trip-modal"),u=i.querySelector("#trip-name-input");(y=i.querySelector("#new-trip-btn"))==null||y.addEventListener("click",()=>{a.style.display="flex",u.focus()}),i.querySelector("#modal-cancel").addEventListener("click",()=>{a.style.display="none",u.value=""}),a.addEventListener("click",E=>{E.target===a&&(a.style.display="none",u.value="")});async function d(){const E=u.value.trim();if(!E){u.focus();return}a.style.display="none",u.value="";const S=await Ie.create(E);xn(`/trip/${S}`)}i.querySelector("#modal-create").addEventListener("click",d),u.addEventListener("keydown",E=>{E.key==="Enter"&&d(),E.key==="Escape"&&(a.style.display="none",u.value="")}),(w=i.querySelector("#trips-grid"))==null||w.addEventListener("click",async E=>{const S=E.target.closest("[data-trip-id]");if(!S)return;const O=S.dataset.tripId,F=Ie.getAll().find(B=>B.id===O);if(E.target.closest(".vis-btn")){const B=E.target.closest(".vis-btn"),tt=B.classList.contains("vis-on");if(!(!e||!(F!=null&&F.ownerId)||F.ownerId===e))return;B.classList.toggle("vis-on",!tt),B.classList.toggle("vis-off",tt),B.title=tt?"Hidden from friends — click to show":"Visible to friends — click to hide",zI(O,!tt);return}if(E.target.closest(".trip-open-btn"))xn(`/trip/${O}`);else if(E.target.closest(".trip-globe-btn"))xn(`/globe/${O}`);else if(E.target.closest(".trip-share-btn")){if(!e){alert("Sign in to share trips.");return}am(O,F,e)}else if(E.target.closest(".trip-delete-btn"))confirm("Delete this trip? This cannot be undone.")&&await Ie.delete(O);else if(E.target.closest(".trip-card-title")){if(!(!e||!(F!=null&&F.ownerId)||F.ownerId===e))return;const tt=E.target.closest(".trip-card-title"),H=tt.textContent.trim(),j=document.createElement("input");j.className="dark-input trip-rename-input",j.value=H,tt.replaceWith(j),j.focus(),j.select();const Y=async()=>{const lt=j.value.trim()||H;await Ie.rename(O,lt)};j.addEventListener("blur",Y),j.addEventListener("keydown",lt=>{lt.key==="Enter"&&j.blur()})}})}function wd(i,t){Ae==null||Ae(),Ae=null;const e=i.querySelector("#lv-friends");e&&(Ae=ZI(e,t))}function da(i,t,e){const r=e?t.filter(u=>!u.ownerId||u.ownerId===e):t,s=new Set,a=r.flatMap(u=>(u.days||[]).map(d=>({...d,_tripName:u.name}))).filter(u=>!u.date||s.has(u.date)?!1:(s.add(u.date),!0)).sort((u,d)=>u.date.localeCompare(d.date));Ur(i,a,ml,qi)}function KI(i,t){var F;const e=i.days||[],{total:r,finalised:s,cost:a}=YI(e),u=r?Math.round(s/r*100):0,d=e.length?`${Ed(e[0].date)} – ${Ed(e[e.length-1].date)}`:"No days yet",p=[...new Set(e.map(B=>B.destination).filter(Boolean))],g=p.slice(0,3),y=!t||!i.ownerId||i.ownerId===t,w=i.ownerId&&t&&i.ownerId!==t?((F=i.members)==null?void 0:F[t])||"viewer":null,E=(i.memberUids||[]).length,S=i.sharedWithFriends!==!1,O=_l(i);return`
    <div class="trip-card ${w?"trip-card-shared":""} ${O?"trip-card-past":""}" data-trip-id="${i.id}">
      ${y&&t?`
        <button class="vis-btn ${S?"vis-on":"vis-off"}"
          title="${S?"Visible to friends — click to hide":"Hidden from friends — click to show"}">👁</button>
      `:""}
      <div class="trip-card-top">
        <div class="trip-card-title-row">
          <div class="trip-card-title">${Bc(i.name)}</div>
          ${w?`<span class="role-badge role-${w}">${w}</span>`:""}
          ${y&&E>0?`<span class="collab-count" title="${E} collaborator${E!==1?"s":""}">👥 ${E}</span>`:""}
        </div>
        <div class="trip-card-meta">
          ${w?`<span class="trip-card-owner">by ${Bc(i.ownerName||"Unknown")}</span>`:""}
          <span class="trip-card-range">${d}</span>
        </div>
      </div>
      ${g.length?`
        <div class="trip-card-dests">
          ${g.map(B=>`<span class="dest-tag">${Bc(B)}</span>`).join("")}
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
  `}function _l(i){const t=(i.days||[]).map(r=>r.date).filter(Boolean).sort();if(!t.length)return!1;const e=new Date().toISOString().slice(0,10);return t[t.length-1]<e}function Td(i){return(i.days||[]).map(e=>e.date).filter(Boolean).sort()[0]||"9999-99-99"}function QI(i,t){const e=s=>[...s].sort((a,u)=>Td(a).localeCompare(Td(u)));if(sn==="past")return e(i.filter(s=>_l(s)));const r=i.filter(s=>!_l(s));return e(sn==="mine"?r.filter(s=>!t||!s.ownerId||s.ownerId===t):sn==="shared"?r.filter(s=>t&&s.ownerId&&s.ownerId!==t):r)}function JI(){return sn==="past"?"No past trips yet.":sn==="shared"?"No trips have been shared with you yet.":"No trips yet — create your first one above."}function YI(i){return{total:i.length,finalised:i.filter(t=>t.finalised).length,cost:i.reduce((t,e)=>t+Number(e.accomCost||0)+Number(e.travelCost||0),0)}}function Ed(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}function Bc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const Id=["January","February","March","April","May","June","July","August","September","October","November","December"],XI=["Su","Mo","Tu","We","Th","Fr","Sa"];class tb{constructor(t,e,r){this.wrap=t,this.input=e,this.onSelect=r,this.selected=null;const s=new Date;this.year=s.getFullYear(),this.month=s.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",t=>{this.wrap.contains(t.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(t){this.month+=t,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const t=this._dropdown.querySelector("#dp-month-label"),e=this._dropdown.querySelector("#dp-grid");t.textContent=`${Id[this.month]} ${this.year}`;const r=new Date(this.year,this.month,1).getDay(),s=new Date(this.year,this.month+1,0).getDate(),a=new Date;let u=XI.map(d=>`<div class="dp-dh">${d}</div>`).join("");for(let d=0;d<r;d++)u+='<button class="dp-day empty" disabled></button>';for(let d=1;d<=s;d++){const p=this.dateString(this.year,this.month+1,d),g=this.selected===p,y=a.getFullYear()===this.year&&a.getMonth()===this.month&&a.getDate()===d;let w="dp-day";g?w+=" selected":y&&(w+=" today"),u+=`<button class="${w}" data-date="${p}">${d}</button>`}e.innerHTML=u,e.querySelectorAll(".dp-day:not(.empty)").forEach(d=>{d.addEventListener("click",()=>{this.selected=d.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(t,e,r){return`${t}-${String(e).padStart(2,"0")}-${String(r).padStart(2,"0")}`}formatDisplay(t){const[e,r,s]=t.split("-");return`${s} ${Id[parseInt(r)-1]} ${e}`}reset(){this.selected=null,this.input.value=""}}const eb=["January","February","March","April","May","June","July","August","September","October","November","December"];function nb(i){if(!i)return"";const[t,e,r]=i.split("-");return`${r} ${eb[parseInt(e)-1]} ${t}`}function fa(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function ib(i,t,e,r,s,a={}){const u=e.metrics(),d=i.querySelector("#metrics-row");d&&(d.style.display=t.length?"grid":"none",i.querySelector("#m-days").textContent=u.total,i.querySelector("#m-travel").textContent=u.travelDays,i.querySelector("#m-cost").textContent="$"+Number(u.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const p=i.querySelector("#progress-wrap");if(p)if(t.length){p.style.display="block";const y=u.total?Math.round(u.finalised/u.total*100):0;i.querySelector("#progress-fill").style.width=y+"%",i.querySelector("#progress-count").textContent=`${u.finalised} / ${u.total} days finalised`}else p.style.display="none";const g=i.querySelector("#itinerary-list");if(g){if(t.length===0){g.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}g.innerHTML=t.map(y=>{const w=r===y.id,E=y.finalised?'<span class="day-badge badge-final">Finalised</span>':y.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',S=w?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${y.id}" data-field="event"
              value="${fa(y.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${y.id}" data-field="accommodation"
              value="${fa(y.accommodation)}" placeholder="Hotel / Airbnb name">
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
              value="${fa(y.travelDetails)}" placeholder="Flight / train / driving info">
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
          <div class="day-date">${nb(y.date)}</div>
          <div class="day-dest">${fa(y.destination)}</div>
          ${E}
          <span class="chevron${w?" open":""}">&#9654;</span>
          ${a.onAddDay?`<button class="add-to-my-trip-btn" data-addday="${y.id}" title="Add this day to one of your trips">＋ Add</button>`:""}
        </div>
        ${S}
      </div>`}).join(""),g.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.toggle;s(r===w?null:w)})}),a.onAddDay&&g.querySelectorAll("[data-addday]").forEach(y=>{y.addEventListener("click",w=>{w.stopPropagation();const E=t.find(S=>S.id===y.dataset.addday);E&&a.onAddDay(E)})}),g.querySelectorAll("[data-field]").forEach(y=>{const w=()=>{const E=y.type==="checkbox"?y.checked:y.value;e.update(y.dataset.id,y.dataset.field,E)};y.addEventListener(y.type==="checkbox"?"change":"blur",w)}),g.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&e.remove(y.dataset.delete)})})}}let ee=null;function rb(i,t){ee&&(ee.destroy(),ee=null);const e=bo(),r=(e==null?void 0:e.uid)||null;ee=sm(t,r,j=>{d=j,tt()});let s=ee.tripData(),a=gd(s,r),u=a==="viewer";i.innerHTML=`
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
  `;let d=ee.getAll(),p=null,g="planner";const y=new Date;let w=y.getFullYear(),E=y.getMonth();i.querySelector("#trip-name-label").textContent=ee.tripName(),hc(i);function S(){s=ee.tripData(),a=gd(s,r),u=a==="viewer";const j=i.querySelector("#share-trip-btn"),Y=i.querySelector("#copy-days-btn");a==="owner"&&r?(j.style.display="",Y.style.display="none"):a==="viewer"?(j.style.display="none",Y.style.display=""):a==="editor"&&(j.style.display="none",Y.style.display="none")}S(),i.querySelector("#back-btn").addEventListener("click",()=>xn("/")),i.querySelector("#globe-nav-btn").addEventListener("click",()=>xn(`/globe/${t}`)),i.querySelector("#share-trip-btn").addEventListener("click",()=>{am(t,ee.tripData(),r)}),i.querySelector("#copy-days-btn").addEventListener("click",()=>{WI(t,ee.getAll(),r)});let O=null,F=null;if(!u){let Z=function(){const R=lt.value.trim();if(!O||!R){Y.style.borderColor=O?"":"var(--accent)",lt.style.borderColor=R?"":"var(--accent)";return}Y.style.borderColor="",lt.style.borderColor="",ee.add(O,R),O=null,F.reset(),lt.value="",lt.focus()};var H=Z;const j=i.querySelector("#dp-wrap"),Y=i.querySelector("#new-date-display");F=new tb(j,Y,R=>{O=R}),F.init();const lt=i.querySelector("#new-dest");i.querySelector("#add-btn").addEventListener("click",Z),lt.addEventListener("keydown",R=>{R.key==="Enter"&&Z()}),i.querySelector("#download-btn").addEventListener("click",()=>{const R=new Blob([ee.toCSV()],{type:"text/csv"}),I=document.createElement("a");I.href=URL.createObjectURL(R),I.download=`${ee.tripName().replace(/\s+/g,"_")}.csv`,I.click(),URL.revokeObjectURL(I.href)}),i.querySelector("#upload-btn").addEventListener("click",()=>{i.querySelector("#upload-input").click()}),i.querySelector("#upload-input").addEventListener("change",R=>{const I=R.target.files[0];if(!I)return;const P=new FileReader;P.onload=k=>{const x=k.target.result.trim().split(`
`).slice(1).map(b=>{const $t=(b.match(/(".*?"|[^,]+)/g)||[]).map(Yt=>Yt.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:$t[0]||"",destination:$t[1]||"",event:$t[2]||"",travelDay:$t[3]==="Y",accommodation:$t[4]||"",accomCost:parseFloat($t[5])||0,travelDetails:$t[6]||"",travelCost:parseFloat($t[7])||0,finalised:$t[8]==="Y"}}).filter(b=>b.date&&b.destination);ee.loadFromCSV(x)},P.readAsText(I),R.target.value=""})}i.querySelectorAll(".tab").forEach(j=>{j.addEventListener("click",()=>{g=j.dataset.tab,i.querySelectorAll(".tab").forEach(Y=>Y.classList.toggle("active",Y.dataset.tab===g)),i.querySelector("#tab-planner").style.display=g==="planner"?"":"none",i.querySelector("#tab-calendar").style.display=g==="calendar"?"":"none",g==="calendar"&&Ur(i,d,w,E)})}),i.querySelector("#cal-prev").addEventListener("click",()=>{E--,E<0&&(E=11,w--),Ur(i,d,w,E)}),i.querySelector("#cal-next").addEventListener("click",()=>{E++,E>11&&(E=0,w++),Ur(i,d,w,E)});function B(){return u?new Proxy(ee,{get(j,Y){return["add","update","remove","loadFromCSV"].includes(Y)?()=>{}:j[Y]}}):ee}function tt(){S(),i.querySelector("#trip-name-label").textContent=ee.tripName();const j=r&&a!=="owner"?{onAddDay:Y=>jI(Y,t,r)}:{};ib(i,d,B(),p,Y=>{p=Y,tt()},j),g==="calendar"&&Ur(i,d,w,E)}tt()}var sb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ob(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var gl={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})(sb,function(e){var r="1.9.4";function s(n){var o,l,h,m;for(l=1,h=arguments.length;l<h;l++){m=arguments[l];for(o in m)n[o]=m[o]}return n}var a=Object.create||function(){function n(){}return function(o){return n.prototype=o,new n}}();function u(n,o){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var h=l.call(arguments,2);return function(){return n.apply(o,h.length?h.concat(l.call(arguments)):arguments)}}var d=0;function p(n){return"_leaflet_id"in n||(n._leaflet_id=++d),n._leaflet_id}function g(n,o,l){var h,m,v,A;return A=function(){h=!1,m&&(v.apply(l,m),m=!1)},v=function(){h?m=arguments:(n.apply(l,arguments),setTimeout(A,o),h=!0)},v}function y(n,o,l){var h=o[1],m=o[0],v=h-m;return n===h&&l?n:((n-m)%v+v)%v+m}function w(){return!1}function E(n,o){if(o===!1)return n;var l=Math.pow(10,o===void 0?6:o);return Math.round(n*l)/l}function S(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function O(n){return S(n).split(/\s+/)}function F(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in o)n.options[l]=o[l];return n.options}function B(n,o,l){var h=[];for(var m in n)h.push(encodeURIComponent(l?m.toUpperCase():m)+"="+encodeURIComponent(n[m]));return(!o||o.indexOf("?")===-1?"?":"&")+h.join("&")}var tt=/\{ *([\w_ -]+) *\}/g;function H(n,o){return n.replace(tt,function(l,h){var m=o[h];if(m===void 0)throw new Error("No value provided for variable "+l);return typeof m=="function"&&(m=m(o)),m})}var j=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function Y(n,o){for(var l=0;l<n.length;l++)if(n[l]===o)return l;return-1}var lt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Z(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var R=0;function I(n){var o=+new Date,l=Math.max(0,16-(o-R));return R=o+l,window.setTimeout(n,l)}var P=window.requestAnimationFrame||Z("RequestAnimationFrame")||I,k=window.cancelAnimationFrame||Z("CancelAnimationFrame")||Z("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function C(n,o,l){if(l&&P===I)n.call(o);else return P.call(window,u(n,o))}function x(n){n&&k.call(window,n)}var b={__proto__:null,extend:s,create:a,bind:u,get lastId(){return d},stamp:p,throttle:g,wrapNum:y,falseFn:w,formatNum:E,trim:S,splitWords:O,setOptions:F,getParamString:B,template:H,isArray:j,indexOf:Y,emptyImageUrl:lt,requestFn:P,cancelFn:k,requestAnimFrame:C,cancelAnimFrame:x};function Rt(){}Rt.extend=function(n){var o=function(){F(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,h=a(l);h.constructor=o,o.prototype=h;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(o[m]=this[m]);return n.statics&&s(o,n.statics),n.includes&&($t(n.includes),s.apply(null,[h].concat(n.includes))),s(h,n),delete h.statics,delete h.includes,h.options&&(h.options=l.options?a(l.options):{},s(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,A=h._initHooks.length;v<A;v++)h._initHooks[v].call(this)}},o},Rt.include=function(n){var o=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},Rt.mergeOptions=function(n){return s(this.prototype.options,n),this},Rt.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function $t(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=j(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Yt={on:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o);else{n=O(n);for(var m=0,v=n.length;m<v;m++)this._on(n[m],o,l)}return this},off:function(n,o,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],o);else{n=O(n);for(var m=arguments.length===1,v=0,A=n.length;v<A;v++)m?this._off(n[v]):this._off(n[v],o,l)}return this},_on:function(n,o,l,h){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,l)===!1){l===this&&(l=void 0);var m={fn:o,ctx:l};h&&(m.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(m)}},_off:function(n,o,l){var h,m,v;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(m=0,v=h.length;m<v;m++)h[m].fn=w;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var A=this._listens(n,o,l);if(A!==!1){var N=h[A];this._firingCount&&(N.fn=w,this._events[n]=h=h.slice()),h.splice(A,1)}}},fire:function(n,o,l){if(!this.listens(n,l))return this;var h=s({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var m=this._events[n];if(m){this._firingCount=this._firingCount+1||1;for(var v=0,A=m.length;v<A;v++){var N=m[v],V=N.fn;N.once&&this.off(n,V,N.ctx),V.call(N.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(n,o,l,h){typeof n!="string"&&console.warn('"string" type argument expected');var m=o;typeof o!="function"&&(h=!!o,m=void 0,l=void 0);var v=this._events&&this._events[n];if(v&&v.length&&this._listens(n,m,l)!==!1)return!0;if(h){for(var A in this._eventParents)if(this._eventParents[A].listens(n,o,l,h))return!0}return!1},_listens:function(n,o,l){if(!this._events)return!1;var h=this._events[n]||[];if(!o)return!!h.length;l===this&&(l=void 0);for(var m=0,v=h.length;m<v;m++)if(h[m].fn===o&&h[m].ctx===l)return m;return!1},once:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o,!0);else{n=O(n);for(var m=0,v=n.length;m<v;m++)this._on(n[m],o,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[p(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[p(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};Yt.addEventListener=Yt.on,Yt.removeEventListener=Yt.clearAllEventListeners=Yt.off,Yt.addOneTimeEventListener=Yt.once,Yt.fireEvent=Yt.fire,Yt.hasEventListeners=Yt.listens;var Ei=Rt.extend(Yt);function rt(n,o,l){this.x=l?Math.round(n):n,this.y=l?Math.round(o):o}var Ii=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};rt.prototype={clone:function(){return new rt(this.x,this.y)},add:function(n){return this.clone()._add(st(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(st(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new rt(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new rt(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ii(this.x),this.y=Ii(this.y),this},distanceTo:function(n){n=st(n);var o=n.x-this.x,l=n.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(n){return n=st(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=st(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function st(n,o,l){return n instanceof rt?n:j(n)?new rt(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new rt(n.x,n.y):new rt(n,o,l)}function Pt(n,o){if(n)for(var l=o?[n,o]:n,h=0,m=l.length;h<m;h++)this.extend(l[h])}Pt.prototype={extend:function(n){var o,l;if(!n)return this;if(n instanceof rt||typeof n[0]=="number"||"x"in n)o=l=st(n);else if(n=Xt(n),o=n.min,l=n.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return st((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return st(this.min.x,this.max.y)},getTopRight:function(){return st(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,l;return typeof n[0]=="number"||n instanceof rt?n=st(n):n=Xt(n),n instanceof Pt?(o=n.min,l=n.max):o=l=n,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Xt(n);var o=this.min,l=this.max,h=n.min,m=n.max,v=m.x>=o.x&&h.x<=l.x,A=m.y>=o.y&&h.y<=l.y;return v&&A},overlaps:function(n){n=Xt(n);var o=this.min,l=this.max,h=n.min,m=n.max,v=m.x>o.x&&h.x<l.x,A=m.y>o.y&&h.y<l.y;return v&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,l=this.max,h=Math.abs(o.x-l.x)*n,m=Math.abs(o.y-l.y)*n;return Xt(st(o.x-h,o.y-m),st(l.x+h,l.y+m))},equals:function(n){return n?(n=Xt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Xt(n,o){return!n||n instanceof Pt?n:new Pt(n,o)}function te(n,o){if(n)for(var l=o?[n,o]:n,h=0,m=l.length;h<m;h++)this.extend(l[h])}te.prototype={extend:function(n){var o=this._southWest,l=this._northEast,h,m;if(n instanceof vt)h=n,m=n;else if(n instanceof te){if(h=n._southWest,m=n._northEast,!h||!m)return this}else return n?this.extend(ht(n)||kt(n)):this;return!o&&!l?(this._southWest=new vt(h.lat,h.lng),this._northEast=new vt(m.lat,m.lng)):(o.lat=Math.min(h.lat,o.lat),o.lng=Math.min(h.lng,o.lng),l.lat=Math.max(m.lat,l.lat),l.lng=Math.max(m.lng,l.lng)),this},pad:function(n){var o=this._southWest,l=this._northEast,h=Math.abs(o.lat-l.lat)*n,m=Math.abs(o.lng-l.lng)*n;return new te(new vt(o.lat-h,o.lng-m),new vt(l.lat+h,l.lng+m))},getCenter:function(){return new vt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new vt(this.getNorth(),this.getWest())},getSouthEast:function(){return new vt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof vt||"lat"in n?n=ht(n):n=kt(n);var o=this._southWest,l=this._northEast,h,m;return n instanceof te?(h=n.getSouthWest(),m=n.getNorthEast()):h=m=n,h.lat>=o.lat&&m.lat<=l.lat&&h.lng>=o.lng&&m.lng<=l.lng},intersects:function(n){n=kt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),m=n.getNorthEast(),v=m.lat>=o.lat&&h.lat<=l.lat,A=m.lng>=o.lng&&h.lng<=l.lng;return v&&A},overlaps:function(n){n=kt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),m=n.getNorthEast(),v=m.lat>o.lat&&h.lat<l.lat,A=m.lng>o.lng&&h.lng<l.lng;return v&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=kt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function kt(n,o){return n instanceof te?n:new te(n,o)}function vt(n,o,l){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,l!==void 0&&(this.alt=+l)}vt.prototype={equals:function(n,o){if(!n)return!1;n=ht(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+E(this.lat,n)+", "+E(this.lng,n)+")"},distanceTo:function(n){return Ce.distance(this,ht(n))},wrap:function(){return Ce.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,l=o/Math.cos(Math.PI/180*this.lat);return kt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new vt(this.lat,this.lng,this.alt)}};function ht(n,o,l){return n instanceof vt?n:j(n)&&typeof n[0]!="object"?n.length===3?new vt(n[0],n[1],n[2]):n.length===2?new vt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new vt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new vt(n,o,l)}var we={latLngToPoint:function(n,o){var l=this.projection.project(n),h=this.scale(o);return this.transformation._transform(l,h)},pointToLatLng:function(n,o){var l=this.scale(o),h=this.transformation.untransform(n,l);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(n),h=this.transformation.transform(o.min,l),m=this.transformation.transform(o.max,l);return new Pt(h,m)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?y(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?y(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new vt(l,o,h)},wrapLatLngBounds:function(n){var o=n.getCenter(),l=this.wrapLatLng(o),h=o.lat-l.lat,m=o.lng-l.lng;if(h===0&&m===0)return n;var v=n.getSouthWest(),A=n.getNorthEast(),N=new vt(v.lat-h,v.lng-m),V=new vt(A.lat-h,A.lng-m);return new te(N,V)}},Ce=s({},we,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var l=Math.PI/180,h=n.lat*l,m=o.lat*l,v=Math.sin((o.lat-n.lat)*l/2),A=Math.sin((o.lng-n.lng)*l/2),N=v*v+Math.cos(h)*Math.cos(m)*A*A,V=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*V}}),ls=6378137,us={R:ls,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,n.lat),-l),m=Math.sin(h*o);return new rt(this.R*n.lng*o,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(n){var o=180/Math.PI;return new vt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:function(){var n=ls*Math.PI;return new Pt([-n,-n],[n,n])}()};function hs(n,o,l,h){if(j(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=l,this._d=h}hs.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new rt((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function Un(n,o,l,h){return new hs(n,o,l,h)}var bi=s({},Ce,{code:"EPSG:3857",projection:us,transformation:function(){var n=.5/(Math.PI*us.R);return Un(n,.5,-n,.5)}()}),Ao=s({},bi,{code:"EPSG:900913"});function Po(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function or(n,o){var l="",h,m,v,A,N,V;for(h=0,v=n.length;h<v;h++){for(N=n[h],m=0,A=N.length;m<A;m++)V=N[m],l+=(m?"L":"M")+V.x+" "+V.y;l+=o?J.svg?"z":"x":""}return l||"M0 0"}var Ai=document.documentElement.style,Pi="ActiveXObject"in window,Gt=Pi&&!document.addEventListener,Zt="msLaunchUri"in navigator&&!("documentMode"in document),Bn=pe("webkit"),So=pe("android"),ds=pe("android 2")||pe("android 3"),fc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Si=So&&pe("Google")&&fc<537&&!("AudioNode"in window),ar=!!window.opera,fs=!Zt&&pe("chrome"),cr=pe("gecko")&&!Bn&&!ar&&!Pi,pc=!fs&&pe("safari"),Co=pe("phantom"),ps="OTransition"in Ai,Ro=navigator.platform.indexOf("Win")===0,zn=Pi&&"transition"in Ai,Ci="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ds,lr="MozPerspective"in Ai,fn=!window.L_DISABLE_3D&&(zn||Ci||lr)&&!ps&&!Co,qn=typeof orientation<"u"||pe("mobile"),ur=qn&&Bn,ko=qn&&Ci,$n=!window.PointerEvent&&window.MSPointerEvent,ms=!!(window.PointerEvent||$n),Kt="ontouchstart"in window||!!window.TouchEvent,Lo=!window.L_NO_TOUCH&&(Kt||ms),Ri=qn&&ar,ki=qn&&cr,mc=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,_c=function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",w,o),window.removeEventListener("testPassiveEventSupport",w,o)}catch{}return n}(),jn=function(){return!!document.createElement("canvas").getContext}(),_s=!!(document.createElementNS&&Po("svg").createSVGRect),gc=!!_s&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),hr=!_s&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),xo=navigator.platform.indexOf("Mac")===0,Do=navigator.platform.indexOf("Linux")===0;function pe(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var J={ie:Pi,ielt9:Gt,edge:Zt,webkit:Bn,android:So,android23:ds,androidStock:Si,opera:ar,chrome:fs,gecko:cr,safari:pc,phantom:Co,opera12:ps,win:Ro,ie3d:zn,webkit3d:Ci,gecko3d:lr,any3d:fn,mobile:qn,mobileWebkit:ur,mobileWebkit3d:ko,msPointer:$n,pointer:ms,touch:Lo,touchNative:Kt,mobileOpera:Ri,mobileGecko:ki,retina:mc,passiveEvents:_c,canvas:jn,svg:_s,vml:hr,inlineSvg:gc,mac:xo,linux:Do},No=J.msPointer?"MSPointerDown":"pointerdown",Ue=J.msPointer?"MSPointerMove":"pointermove",gs=J.msPointer?"MSPointerUp":"pointerup",ys=J.msPointer?"MSPointerCancel":"pointercancel",Li={touchstart:No,touchmove:Ue,touchend:gs,touchcancel:ys},dr={touchstart:vs,touchmove:Re,touchend:Re,touchcancel:Re},pn={},Mo=!1;function Oo(n,o,l){return o==="touchstart"&&xi(),dr[o]?(l=dr[o].bind(this,l),n.addEventListener(Li[o],l,!1),l):(console.warn("wrong event specified:",o),w)}function yc(n,o,l){if(!Li[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Li[o],l,!1)}function fr(n){pn[n.pointerId]=n}function Vo(n){pn[n.pointerId]&&(pn[n.pointerId]=n)}function pr(n){delete pn[n.pointerId]}function xi(){Mo||(document.addEventListener(No,fr,!0),document.addEventListener(Ue,Vo,!0),document.addEventListener(gs,pr,!0),document.addEventListener(ys,pr,!0),Mo=!0)}function Re(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in pn)o.touches.push(pn[l]);o.changedTouches=[o],n(o)}}function vs(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&Ft(o),Re(n,o)}function vc(n){var o={},l,h;for(h in n)l=n[h],o[h]=l&&l.bind?l.bind(n):l;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Fo=200;function Uo(n,o){n.addEventListener("dblclick",o);var l=0,h;function m(v){if(v.detail!==1){h=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var A=bs(v);if(!(A.some(function(V){return V instanceof HTMLLabelElement&&V.attributes.for})&&!A.some(function(V){return V instanceof HTMLInputElement||V instanceof HTMLSelectElement}))){var N=Date.now();N-l<=Fo?(h++,h===2&&o(vc(v))):h=1,l=N}}}return n.addEventListener("click",m),{dblclick:o,simDblclick:m}}function Bo(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var Di=mr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),mn=mr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),ws=mn==="webkitTransition"||mn==="OTransition"?mn+"End":"transitionend";function Ts(n){return typeof n=="string"?document.getElementById(n):n}function Hn(n,o){var l=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);l=h?h[o]:null}return l==="auto"?null:l}function gt(n,o,l){var h=document.createElement(n);return h.className=o||"",l&&l.appendChild(h),h}function wt(n){var o=n.parentNode;o&&o.removeChild(n)}function ue(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function ke(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function Le(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function Ni(n,o){if(n.classList!==void 0)return n.classList.contains(o);var l=Ke(n);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function Q(n,o){if(n.classList!==void 0)for(var l=O(o),h=0,m=l.length;h<m;h++)n.classList.add(l[h]);else if(!Ni(n,o)){var v=Ke(n);_n(n,(v?v+" ":"")+o)}}function St(n,o){n.classList!==void 0?n.classList.remove(o):_n(n,S((" "+Ke(n)+" ").replace(" "+o+" "," ")))}function _n(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function Ke(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function me(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&zo(n,o)}function zo(n,o){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(h)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):n.style.filter+=" progid:"+h+"(opacity="+o+")"}function mr(n){for(var o=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in o)return n[l];return!1}function gn(n,o,l){var h=o||new rt(0,0);n.style[Di]=(J.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function Dt(n,o){n._leaflet_pos=o,J.any3d?gn(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function yn(n){return n._leaflet_pos||new rt(0,0)}var Be,Te,_r;if("onselectstart"in document)Be=function(){ot(window,"selectstart",Ft)},Te=function(){At(window,"selectstart",Ft)};else{var Wn=mr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Be=function(){if(Wn){var n=document.documentElement.style;_r=n[Wn],n[Wn]="none"}},Te=function(){Wn&&(document.documentElement.style[Wn]=_r,_r=void 0)}}function gr(){ot(window,"dragstart",Ft)}function yr(){At(window,"dragstart",Ft)}var Mi,Qe;function Es(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(vr(),Mi=n,Qe=n.style.outlineStyle,n.style.outlineStyle="none",ot(window,"keydown",vr))}function vr(){Mi&&(Mi.style.outlineStyle=Qe,Mi=void 0,Qe=void 0,At(window,"keydown",vr))}function qo(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function xe(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var wc={__proto__:null,TRANSFORM:Di,TRANSITION:mn,TRANSITION_END:ws,get:Ts,getStyle:Hn,create:gt,remove:wt,empty:ue,toFront:ke,toBack:Le,hasClass:Ni,addClass:Q,removeClass:St,setClass:_n,getClass:Ke,setOpacity:me,testProp:mr,setTransform:gn,setPosition:Dt,getPosition:yn,get disableTextSelection(){return Be},get enableTextSelection(){return Te},disableImageDrag:gr,enableImageDrag:yr,preventOutline:Es,restoreOutline:vr,getSizedParentNode:qo,getScale:xe};function ot(n,o,l,h){if(o&&typeof o=="object")for(var m in o)wr(n,m,o[m],l);else{o=O(o);for(var v=0,A=o.length;v<A;v++)wr(n,o[v],l,h)}return this}var he="_leaflet_events";function At(n,o,l,h){if(arguments.length===1)Gn(n),delete n[he];else if(o&&typeof o=="object")for(var m in o)Oi(n,m,o[m],l);else if(o=O(o),arguments.length===2)Gn(n,function(N){return Y(o,N)!==-1});else for(var v=0,A=o.length;v<A;v++)Oi(n,o[v],l,h);return this}function Gn(n,o){for(var l in n[he]){var h=l.split(/\d/)[0];(!o||o(h))&&Oi(n,h,null,null,l)}}var vn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function wr(n,o,l,h){var m=o+p(l)+(h?"_"+p(h):"");if(n[he]&&n[he][m])return this;var v=function(N){return l.call(h||n,N||window.event)},A=v;!J.touchNative&&J.pointer&&o.indexOf("touch")===0?v=Oo(n,o,v):J.touch&&o==="dblclick"?v=Uo(n,v):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(vn[o]||o,v,J.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(v=function(N){N=N||window.event,Ps(n,N)&&A(N)},n.addEventListener(vn[o],v,!1)):n.addEventListener(o,A,!1):n.attachEvent("on"+o,v),n[he]=n[he]||{},n[he][m]=v}function Oi(n,o,l,h,m){m=m||o+p(l)+(h?"_"+p(h):"");var v=n[he]&&n[he][m];if(!v)return this;!J.touchNative&&J.pointer&&o.indexOf("touch")===0?yc(n,o,v):J.touch&&o==="dblclick"?Bo(n,v):"removeEventListener"in n?n.removeEventListener(vn[o]||o,v,!1):n.detachEvent("on"+o,v),n[he][m]=null}function Et(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Is(n){return wr(n,"wheel",Et),this}function Vi(n){return ot(n,"mousedown touchstart dblclick contextmenu",Et),n._leaflet_disable_click=!0,this}function Ft(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Je(n){return Ft(n),Et(n),this}function bs(n){if(n.composedPath)return n.composedPath();for(var o=[],l=n.target;l;)o.push(l),l=l.parentNode;return o}function Fi(n,o){if(!o)return new rt(n.clientX,n.clientY);var l=xe(o),h=l.boundingClientRect;return new rt((n.clientX-h.left)/l.x-o.clientLeft,(n.clientY-h.top)/l.y-o.clientTop)}var Ye=J.linux&&J.chrome?window.devicePixelRatio:J.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function As(n){return J.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Ye:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Ps(n,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Ui={__proto__:null,on:ot,off:At,stopPropagation:Et,disableScrollPropagation:Is,disableClickPropagation:Vi,preventDefault:Ft,stop:Je,getPropagationPath:bs,getMousePosition:Fi,getWheelDelta:As,isExternalTarget:Ps,addListener:ot,removeListener:At},Ss=Ei.extend({run:function(n,o,l,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=yn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=C(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var l=this._startPos.add(this._offset.multiplyBy(n));o&&l._round(),Dt(this._el,l),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),dt=Ei.extend({options:{crs:bi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=F(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(ht(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=mn&&J.any3d&&!J.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ot(this._proxy,ws,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(ht(n),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,l.zoom):this._tryAnimatedPan(n,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(J.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(J.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,l){var h=this.getZoomScale(o),m=this.getSize().divideBy(2),v=n instanceof rt?n:this.latLngToContainerPoint(n),A=v.subtract(m).multiplyBy(1-1/h),N=this.containerPointToLatLng(m.add(A));return this.setView(N,o,{zoom:l})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():kt(n);var l=st(o.paddingTopLeft||o.padding||[0,0]),h=st(o.paddingBottomRight||o.padding||[0,0]),m=this.getBoundsZoom(n,!1,l.add(h));if(m=typeof o.maxZoom=="number"?Math.min(o.maxZoom,m):m,m===1/0)return{center:n.getCenter(),zoom:m};var v=h.subtract(l).divideBy(2),A=this.project(n.getSouthWest(),m),N=this.project(n.getNorthEast(),m),V=this.unproject(A.add(N).divideBy(2).add(v),m);return{center:V,zoom:m}},fitBounds:function(n,o){if(n=kt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=st(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Ss,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Q(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,l){if(l=l||{},l.animate===!1||!J.any3d)return this.setView(n,o,l);this._stop();var h=this.project(this.getCenter()),m=this.project(n),v=this.getSize(),A=this._zoom;n=ht(n),o=o===void 0?A:o;var N=Math.max(v.x,v.y),V=N*this.getZoomScale(A,o),q=m.distanceTo(h)||1,K=1.42,et=K*K;function ft(Ut){var ra=Ut?-1:1,Um=Ut?V:N,Bm=V*V-N*N+ra*et*et*q*q,zm=2*Um*et*q,Ac=Bm/zm,zu=Math.sqrt(Ac*Ac+1)-Ac,qm=zu<1e-9?-18:Math.log(zu);return qm}function de(Ut){return(Math.exp(Ut)-Math.exp(-Ut))/2}function Qt(Ut){return(Math.exp(Ut)+Math.exp(-Ut))/2}function Me(Ut){return de(Ut)/Qt(Ut)}var ge=ft(0);function Dr(Ut){return N*(Qt(ge)/Qt(ge+K*Ut))}function Mm(Ut){return N*(Qt(ge)*Me(ge+K*Ut)-de(ge))/et}function Om(Ut){return 1-Math.pow(1-Ut,1.5)}var Vm=Date.now(),Uu=(ft(1)-ge)/K,Fm=l.duration?1e3*l.duration:1e3*Uu*.8;function Bu(){var Ut=(Date.now()-Vm)/Fm,ra=Om(Ut)*Uu;Ut<=1?(this._flyToFrame=C(Bu,this),this._move(this.unproject(h.add(m.subtract(h).multiplyBy(Mm(ra)/q)),A),this.getScaleZoom(N/Dr(ra),A),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Bu.call(this),this},flyToBounds:function(n,o){var l=this._getBoundsCenterZoom(n,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(n){return n=kt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,kt(n));return l.equals(h)||this.panTo(h,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var l=st(o.paddingTopLeft||o.padding||[0,0]),h=st(o.paddingBottomRight||o.padding||[0,0]),m=this.project(this.getCenter()),v=this.project(n),A=this.getPixelBounds(),N=Xt([A.min.add(l),A.max.subtract(h)]),V=N.getSize();if(!N.contains(v)){this._enforcingBounds=!0;var q=v.subtract(N.getCenter()),K=N.extend(v).getSize().subtract(V);m.x+=q.x<0?-K.x:K.x,m.y+=q.y<0?-K.y:K.y,this.panTo(this.unproject(m),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=o.divideBy(2).round(),m=l.divideBy(2).round(),v=h.subtract(m);return!v.x&&!v.y?this:(n.animate&&n.pan?this.panBy(v):(n.pan&&this._rawPanBy(v),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,n):navigator.geolocation.getCurrentPosition(o,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,l=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,l=n.coords.longitude,h=new vt(o,l),m=h.toBounds(n.coords.accuracy*2),v=this._locateOptions;if(v.setView){var A=this.getBoundsZoom(m);this.setView(h,v.maxZoom?Math.min(A,v.maxZoom):A)}var N={latlng:h,bounds:m,timestamp:n.timestamp};for(var V in n.coords)typeof n.coords[V]=="number"&&(N[V]=n.coords[V]);this.fire("locationfound",N)}},addHandler:function(n,o){if(!o)return this;var l=this[n]=new o(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),wt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)wt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=gt("div",l,o||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new te(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,l){n=kt(n),l=st(l||[0,0]);var h=this.getZoom()||0,m=this.getMinZoom(),v=this.getMaxZoom(),A=n.getNorthWest(),N=n.getSouthEast(),V=this.getSize().subtract(l),q=Xt(this.project(N,h),this.project(A,h)).getSize(),K=J.any3d?this.options.zoomSnap:1,et=V.x/q.x,ft=V.y/q.y,de=o?Math.max(et,ft):Math.min(et,ft);return h=this.getScaleZoom(de,h),K&&(h=Math.round(h/(K/100))*(K/100),h=o?Math.ceil(h/K)*K:Math.floor(h/K)*K),Math.max(m,Math.min(v,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new rt(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var l=this._getTopLeftPoint(n,o);return new Pt(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(n)/l.scale(o)},getScaleZoom:function(n,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var h=l.zoom(n*l.scale(o));return isNaN(h)?1/0:h},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(ht(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(st(n),o)},layerPointToLatLng:function(n){var o=st(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(ht(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ht(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(kt(n))},distance:function(n,o){return this.options.crs.distance(ht(n),ht(o))},containerPointToLayerPoint:function(n){return st(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return st(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(st(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ht(n)))},mouseEventToContainerPoint:function(n){return Fi(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=Ts(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ot(o,"scroll",this._onScroll,this),this._containerId=p(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&J.any3d,Q(n,"leaflet-container"+(J.touch?" leaflet-touch":"")+(J.retina?" leaflet-retina":"")+(J.ielt9?" leaflet-oldie":"")+(J.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Hn(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Dt(this._mapPane,new rt(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(n.markerPane,"leaflet-zoom-hide"),Q(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,l){Dt(this._mapPane,new rt(0,0));var h=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var m=this._zoom!==o;this._moveStart(m,l)._move(n,o)._moveEnd(m),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,l,h){o===void 0&&(o=this._zoom);var m=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?l&&l.pinch&&this.fire("zoom",l):((m||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Dt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[p(this._container)]=this;var o=n?At:ot;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),J.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=C(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var l=[],h,m=o==="mouseout"||o==="mouseover",v=n.target||n.srcElement,A=!1;v;){if(h=this._targets[p(v)],h&&(o==="click"||o==="preclick")&&this._draggableMoved(h)){A=!0;break}if(h&&h.listens(o,!0)&&(m&&!Ps(v,n)||(l.push(h),m))||v===this._container)break;v=v.parentNode}return!l.length&&!A&&!m&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var l=n.type;l==="mousedown"&&Es(o),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,l){if(n.type==="click"){var h=s({},n);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var m=this._findEventTargets(n,o);if(l){for(var v=[],A=0;A<l.length;A++)l[A].listens(o,!0)&&v.push(l[A]);m=v.concat(m)}if(m.length){o==="contextmenu"&&Ft(n);var N=m[0],V={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var q=N.getLatLng&&(!N._radius||N._radius<=10);V.containerPoint=q?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(n),V.layerPoint=this.containerPointToLayerPoint(V.containerPoint),V.latlng=q?N.getLatLng():this.layerPointToLatLng(V.layerPoint)}for(A=0;A<m.length;A++)if(m[A].fire(o,V,!0),V.originalEvent._stopped||m[A].options.bubblingMouseEvents===!1&&Y(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return yn(this._mapPane)||new rt(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var l=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var l=this.getSize()._divideBy(2);return this.project(n,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return this.project(n,o)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return Xt([this.project(n.getSouthWest(),o)._subtract(h),this.project(n.getNorthWest(),o)._subtract(h),this.project(n.getSouthEast(),o)._subtract(h),this.project(n.getNorthEast(),o)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,l){if(!l)return n;var h=this.project(n,o),m=this.getSize().divideBy(2),v=new Pt(h.subtract(m),h.add(m)),A=this._getBoundsOffset(v,l,o);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?n:this.unproject(h.add(A),o)},_limitOffset:function(n,o){if(!o)return n;var l=this.getPixelBounds(),h=new Pt(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(h,o))},_getBoundsOffset:function(n,o,l){var h=Xt(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),m=h.min.subtract(n.min),v=h.max.subtract(n.max),A=this._rebound(m.x,-v.x),N=this._rebound(m.y,-v.y);return new rt(A,N)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),l=this.getMaxZoom(),h=J.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(o,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){St(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var l=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var n=this._proxy=gt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var l=Di,h=this._proxy.style[l];gn(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){wt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();gn(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(o),m=this._getCenterOffset(n)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(m)?!1:(C(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&St(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Tr(n,o){return new dt(n,o)}var _e=Rt.extend({options:{position:"topright"},initialize:function(n){F(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),l=this.getPosition(),h=n._controlCorners[l];return Q(o,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(o,h.firstChild):h.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(wt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Xe=function(n){return new _e(n)};dt.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",l=this._controlContainer=gt("div",o+"control-container",this._container);function h(m,v){var A=o+m+" "+o+v;n[m+v]=gt("div",A,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)wt(this._controlCorners[n]);wt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var $o=_e.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,l,h){return l<h?-1:h<l?1:0}},initialize:function(n,o,l){F(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in o)this._addLayer(o[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return _e.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(p(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):St(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return St(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=gt("div",n),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Vi(o),Is(o);var h=this._section=gt("section",n+"-list");l&&(this._map.on("click",this.collapse,this),ot(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=gt("a",n+"-toggle",o);m.href="#",m.title="Layers",m.setAttribute("role","button"),ot(m,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Ft(v),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=gt("div",n+"-base",h),this._separator=gt("div",n+"-separator",h),this._overlaysList=gt("div",n+"-overlays",h),o.appendChild(h)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&p(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(h,m){return this.options.sortFunction(h.layer,m.layer,h.name,m.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ue(this._baseLayersList),ue(this._overlaysList),this._layerControlInputs=[];var n,o,l,h,m=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),o=o||h.overlay,n=n||!h.overlay,m+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&m>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(p(n.target)),l=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(n,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(n){var o=document.createElement("label"),l=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+p(this),l),this._layerControlInputs.push(h),h.layerId=p(n.layer),ot(h,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+n.name;var v=document.createElement("span");o.appendChild(v),v.appendChild(h),v.appendChild(m);var A=n.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,l,h=[],m=[];this._handlingClick=!0;for(var v=n.length-1;v>=0;v--)o=n[v],l=this._getLayer(o.layerId).layer,o.checked?h.push(l):o.checked||m.push(l);for(v=0;v<m.length;v++)this._map.hasLayer(m[v])&&this._map.removeLayer(m[v]);for(v=0;v<h.length;v++)this._map.hasLayer(h[v])||this._map.addLayer(h[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,l,h=this._map.getZoom(),m=n.length-1;m>=0;m--)o=n[m],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ot(n,"click",Ft),this.expand();var o=this;setTimeout(function(){At(n,"click",Ft),o._preventClick=!1})}}),jo=function(n,o,l){return new $o(n,o,l)},wn=_e.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",l=gt("div",o+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,l,h,m){var v=gt("a",l,h);return v.innerHTML=n,v.href="#",v.title=o,v.setAttribute("role","button"),v.setAttribute("aria-label",o),Vi(v),ot(v,"click",Je),ot(v,"click",m,this),ot(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";St(this._zoomInButton,o),St(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Q(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Q(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});dt.mergeOptions({zoomControl:!0}),dt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new wn,this.addControl(this.zoomControl))});var Ho=function(n){return new wn(n)},Cs=_e.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",l=gt("div",o),h=this.options;return this._addScales(h,o+"-line",l),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,l){n.metric&&(this._mScale=gt("div",o,l)),n.imperial&&(this._iScale=gt("div",o,l))},_update:function(){var n=this._map,o=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/n)},_updateImperial:function(n){var o=n*3.2808399,l,h,m;o>5280?(l=o/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(m=this._getRoundNum(o),this._updateScale(this._iScale,m+" ft",m/o))},_updateScale:function(n,o,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),l=n/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),Rs=function(n){return new Cs(n)},ks='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Er=_e.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(J.inlineSvg?ks+" ":"")+"Leaflet</a>"},initialize:function(n){F(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=gt("div","leaflet-control-attribution"),Vi(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});dt.mergeOptions({attributionControl:!0}),dt.addInitHook(function(){this.options.attributionControl&&new Er().addTo(this)});var Ir=function(n){return new Er(n)};_e.Layers=$o,_e.Zoom=wn,_e.Scale=Cs,_e.Attribution=Er,Xe.layers=jo,Xe.zoom=Ho,Xe.scale=Rs,Xe.attribution=Ir;var Ee=Rt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(n,o){return n.addHandler(o,this),this};var Wo={Events:Yt},tn=J.touch?"touchstart mousedown":"mousedown",ze=Ei.extend({options:{clickTolerance:3},initialize:function(n,o,l,h){F(this,h),this._element=n,this._dragStartTarget=o||n,this._preventOutline=l},enable:function(){this._enabled||(ot(this._dragStartTarget,tn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ze._dragging===this&&this.finishDrag(!0),At(this._dragStartTarget,tn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ni(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){ze._dragging===this&&this.finishDrag();return}if(!(ze._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(ze._dragging=this,this._preventOutline&&Es(this._element),gr(),Be(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,l=qo(this._element);this._startPoint=new rt(o.clientX,o.clientY),this._startPos=yn(this._element),this._parentScale=xe(l);var h=n.type==="mousedown";ot(document,h?"mousemove":"touchmove",this._onMove,this),ot(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,l=new rt(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Ft(n),this._moved||(this.fire("dragstart"),this._moved=!0,Q(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Dt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){St(document.body,"leaflet-dragging"),this._lastTarget&&(St(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),At(document,"mousemove touchmove",this._onMove,this),At(document,"mouseup touchend touchcancel",this._onUp,this),yr(),Te();var o=this._moved&&this._moving;this._moving=!1,ze._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Ls(n,o,l){var h,m=[1,4,2,8],v,A,N,V,q,K,et,ft;for(v=0,K=n.length;v<K;v++)n[v]._code=M(n[v],o);for(N=0;N<4;N++){for(et=m[N],h=[],v=0,K=n.length,A=K-1;v<K;A=v++)V=n[v],q=n[A],V._code&et?q._code&et||(ft=D(q,V,et,o,l),ft._code=M(ft,o),h.push(ft)):(q._code&et&&(ft=D(q,V,et,o,l),ft._code=M(ft,o),h.push(ft)),h.push(V));n=h}return n}function xs(n,o){var l,h,m,v,A,N,V,q,K;if(!n||n.length===0)throw new Error("latlngs not passed");Tt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var et=ht([0,0]),ft=kt(n),de=ft.getNorthWest().distanceTo(ft.getSouthWest())*ft.getNorthEast().distanceTo(ft.getNorthWest());de<1700&&(et=br(n));var Qt=n.length,Me=[];for(l=0;l<Qt;l++){var ge=ht(n[l]);Me.push(o.project(ht([ge.lat-et.lat,ge.lng-et.lng])))}for(N=V=q=0,l=0,h=Qt-1;l<Qt;h=l++)m=Me[l],v=Me[h],A=m.y*v.x-v.y*m.x,V+=(m.x+v.x)*A,q+=(m.y+v.y)*A,N+=A*3;N===0?K=Me[0]:K=[V/N,q/N];var Dr=o.unproject(st(K));return ht([Dr.lat+et.lat,Dr.lng+et.lng])}function br(n){for(var o=0,l=0,h=0,m=0;m<n.length;m++){var v=ht(n[m]);o+=v.lat,l+=v.lng,h++}return ht([o/h,l/h])}var Ar={__proto__:null,clipPolygon:Ls,polygonCenter:xs,centroid:br};function se(n,o){if(!o||!n.length)return n.slice();var l=o*o;return n=f(n,l),n=Zn(n,l),n}function Ds(n,o,l){return Math.sqrt(at(n,o,l,!0))}function Go(n,o,l){return at(n,o,l)}function Zn(n,o){var l=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,m=new h(l);m[0]=m[l-1]=1,c(n,m,o,0,l-1);var v,A=[];for(v=0;v<l;v++)m[v]&&A.push(n[v]);return A}function c(n,o,l,h,m){var v=0,A,N,V;for(N=h+1;N<=m-1;N++)V=at(n[N],n[h],n[m],!0),V>v&&(A=N,v=V);v>l&&(o[A]=1,c(n,o,l,h,A),c(n,o,l,A,m))}function f(n,o){for(var l=[n[0]],h=1,m=0,v=n.length;h<v;h++)$(n[h],n[m])>o&&(l.push(n[h]),m=h);return m<v-1&&l.push(n[v-1]),l}var _;function T(n,o,l,h,m){var v=h?_:M(n,l),A=M(o,l),N,V,q;for(_=A;;){if(!(v|A))return[n,o];if(v&A)return!1;N=v||A,V=D(n,o,N,l,m),q=M(V,l),N===v?(n=V,v=q):(o=V,A=q)}}function D(n,o,l,h,m){var v=o.x-n.x,A=o.y-n.y,N=h.min,V=h.max,q,K;return l&8?(q=n.x+v*(V.y-n.y)/A,K=V.y):l&4?(q=n.x+v*(N.y-n.y)/A,K=N.y):l&2?(q=V.x,K=n.y+A*(V.x-n.x)/v):l&1&&(q=N.x,K=n.y+A*(N.x-n.x)/v),new rt(q,K,m)}function M(n,o){var l=0;return n.x<o.min.x?l|=1:n.x>o.max.x&&(l|=2),n.y<o.min.y?l|=4:n.y>o.max.y&&(l|=8),l}function $(n,o){var l=o.x-n.x,h=o.y-n.y;return l*l+h*h}function at(n,o,l,h){var m=o.x,v=o.y,A=l.x-m,N=l.y-v,V=A*A+N*N,q;return V>0&&(q=((n.x-m)*A+(n.y-v)*N)/V,q>1?(m=l.x,v=l.y):q>0&&(m+=A*q,v+=N*q)),A=n.x-m,N=n.y-v,h?A*A+N*N:new rt(m,v)}function Tt(n){return!j(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function It(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Tt(n)}function Ot(n,o){var l,h,m,v,A,N,V,q;if(!n||n.length===0)throw new Error("latlngs not passed");Tt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var K=ht([0,0]),et=kt(n),ft=et.getNorthWest().distanceTo(et.getSouthWest())*et.getNorthEast().distanceTo(et.getNorthWest());ft<1700&&(K=br(n));var de=n.length,Qt=[];for(l=0;l<de;l++){var Me=ht(n[l]);Qt.push(o.project(ht([Me.lat-K.lat,Me.lng-K.lng])))}for(l=0,h=0;l<de-1;l++)h+=Qt[l].distanceTo(Qt[l+1])/2;if(h===0)q=Qt[0];else for(l=0,v=0;l<de-1;l++)if(A=Qt[l],N=Qt[l+1],m=A.distanceTo(N),v+=m,v>h){V=(v-h)/m,q=[N.x-V*(N.x-A.x),N.y-V*(N.y-A.y)];break}var ge=o.unproject(st(q));return ht([ge.lat+K.lat,ge.lng+K.lng])}var De={__proto__:null,simplify:se,pointToSegmentDistance:Ds,closestPointOnSegment:Go,clipSegment:T,_getEdgeIntersection:D,_getBitCode:M,_sqClosestPointOnSegment:at,isFlat:Tt,_flat:It,polylineCenter:Ot},qe={project:function(n){return new rt(n.lng,n.lat)},unproject:function(n){return new vt(n.y,n.x)},bounds:new Pt([-180,-90],[180,90])},Ne={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Pt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,l=this.R,h=n.lat*o,m=this.R_MINOR/l,v=Math.sqrt(1-m*m),A=v*Math.sin(h),N=Math.tan(Math.PI/4-h/2)/Math.pow((1-A)/(1+A),v/2);return h=-l*Math.log(Math.max(N,1e-10)),new rt(n.lng*o*l,h)},unproject:function(n){for(var o=180/Math.PI,l=this.R,h=this.R_MINOR/l,m=Math.sqrt(1-h*h),v=Math.exp(-n.y/l),A=Math.PI/2-2*Math.atan(v),N=0,V=.1,q;N<15&&Math.abs(V)>1e-7;N++)q=m*Math.sin(A),q=Math.pow((1-q)/(1+q),m/2),V=Math.PI/2-2*Math.atan(v*q)-A,A+=V;return new vt(A*o,n.x*o/l)}},en={__proto__:null,LonLat:qe,Mercator:Ne,SphericalMercator:us},Pr=s({},Ce,{code:"EPSG:3395",projection:Ne,transformation:function(){var n=.5/(Math.PI*Ne.R);return Un(n,.5,-n,.5)}()}),Sr=s({},Ce,{code:"EPSG:4326",projection:qe,transformation:Un(1/180,1,-1/180,.5)}),fm=s({},we,{projection:qe,transformation:Un(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var l=o.lng-n.lng,h=o.lat-n.lat;return Math.sqrt(l*l+h*h)},infinite:!0});we.Earth=Ce,we.EPSG3395=Pr,we.EPSG3857=bi,we.EPSG900913=Ao,we.EPSG4326=Sr,we.Simple=fm;var $e=Ei.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[p(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[p(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});dt.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=p(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=p(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return p(n)in this._layers},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},_addLayers:function(n){n=n?j(n)?n:[n]:[];for(var o=0,l=n.length;o<l;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[p(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=p(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var m=this._zoomBoundLayers[h].options;n=m.minZoom===void 0?n:Math.min(n,m.minZoom),o=m.maxZoom===void 0?o:Math.max(o,m.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Cr=$e.extend({initialize:function(n,o){F(this,o),this._layers={};var l,h;if(n)for(l=0,h=n.length;l<h;l++)this.addLayer(n[l])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[n]&&h[n].apply(h,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return p(n)}}),pm=function(n,o){return new Cr(n,o)},Tn=Cr.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Cr.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Cr.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new te;for(var o in this._layers){var l=this._layers[o];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),mm=function(n,o){return new Tn(n,o)},Rr=Rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){F(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,o){var l=this.options,h=l[o+"Size"];typeof h=="number"&&(h=[h,h]);var m=st(h),v=st(o==="shadow"&&l.shadowAnchor||l.iconAnchor||m&&m.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(l.className||""),v&&(n.style.marginLeft=-v.x+"px",n.style.marginTop=-v.y+"px"),m&&(n.style.width=m.x+"px",n.style.height=m.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return J.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function _m(n){return new Rr(n)}var Ns=Rr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Ns.imagePath!="string"&&(Ns.imagePath=this._detectIconPath()),(this.options.imagePath||Ns.imagePath)+Rr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(l,h,m){var v=h.exec(l);return v&&v[m]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=gt("div","leaflet-default-icon-path",document.body),o=Hn(n,"background-image")||Hn(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),wu=Ee.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new ze(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&St(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,l=o._map,h=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,v=yn(o._icon),A=l.getPixelBounds(),N=l.getPixelOrigin(),V=Xt(A.min._subtract(N).add(m),A.max._subtract(N).subtract(m));if(!V.contains(v)){var q=st((Math.max(V.max.x,v.x)-V.max.x)/(A.max.x-V.max.x)-(Math.min(V.min.x,v.x)-V.min.x)/(A.min.x-V.min.x),(Math.max(V.max.y,v.y)-V.max.y)/(A.max.y-V.max.y)-(Math.min(V.min.y,v.y)-V.min.y)/(A.min.y-V.min.y)).multiplyBy(h);l.panBy(q,{animate:!1}),this._draggable._newPos._add(q),this._draggable._startPos._add(q),Dt(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=C(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=C(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,l=o._shadow,h=yn(o._icon),m=o._map.layerPointToLatLng(h);l&&Dt(l,h),o._latlng=m,n.latlng=m,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Zo=$e.extend({options:{icon:new Ns,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){F(this,o),this._latlng=ht(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=ht(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),Q(l,o),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ot(l,"focus",this._panOnFocus,this);var m=n.icon.createShadow(this._shadow),v=!1;m!==this._shadow&&(this._removeShadow(),v=!0),m&&(Q(m,o),m.alt=""),this._shadow=m,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&v&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&At(this._icon,"focus",this._panOnFocus,this),wt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&wt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Dt(this._icon,n),this._shadow&&Dt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),wu)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new wu(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&me(this._icon,n),this._shadow&&me(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,l=o.iconSize?st(o.iconSize):st(0,0),h=o.iconAnchor?st(o.iconAnchor):st(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function gm(n,o){return new Zo(n,o)}var Kn=$e.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return F(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ko=Kn.extend({options:{fill:!0,radius:10},initialize:function(n,o){F(this,o),this._latlng=ht(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=ht(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return Kn.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,l=this._clickTolerance(),h=[n+l,o+l];this._pxBounds=new Pt(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function ym(n,o){return new Ko(n,o)}var Tc=Ko.extend({initialize:function(n,o,l){if(typeof o=="number"&&(o=s({},l,{radius:o})),F(this,o),this._latlng=ht(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new te(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Kn.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===Ce.distance){var m=Math.PI/180,v=this._mRadius/Ce.R/m,A=l.project([o+v,n]),N=l.project([o-v,n]),V=A.add(N).divideBy(2),q=l.unproject(V).lat,K=Math.acos((Math.cos(v*m)-Math.sin(o*m)*Math.sin(q*m))/(Math.cos(o*m)*Math.cos(q*m)))/m;(isNaN(K)||K===0)&&(K=v/Math.cos(Math.PI/180*o)),this._point=V.subtract(l.getPixelOrigin()),this._radius=isNaN(K)?0:V.x-l.project([q,n-K]).x,this._radiusY=V.y-A.y}else{var et=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(et).x}this._updateBounds()}});function vm(n,o,l){return new Tc(n,o,l)}var En=Kn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){F(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,l=null,h=at,m,v,A=0,N=this._parts.length;A<N;A++)for(var V=this._parts[A],q=1,K=V.length;q<K;q++){m=V[q-1],v=V[q];var et=h(n,m,v,!0);et<o&&(o=et,l=h(n,m,v))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ot(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=ht(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new te,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Tt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],l=Tt(n),h=0,m=n.length;h<m;h++)l?(o[h]=ht(n[h]),this._bounds.extend(o[h])):o[h]=this._convertLatLngs(n[h]);return o},_project:function(){var n=new Pt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new rt(n,n);this._rawPxBounds&&(this._pxBounds=new Pt([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,l){var h=n[0]instanceof vt,m=n.length,v,A;if(h){for(A=[],v=0;v<m;v++)A[v]=this._map.latLngToLayerPoint(n[v]),l.extend(A[v]);o.push(A)}else for(v=0;v<m;v++)this._projectLatlngs(n[v],o,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,h,m,v,A,N,V;for(l=0,m=0,v=this._rings.length;l<v;l++)for(V=this._rings[l],h=0,A=V.length;h<A-1;h++)N=T(V[h],V[h+1],n,h,!0),N&&(o[m]=o[m]||[],o[m].push(N[0]),(N[1]!==V[h+1]||h===A-2)&&(o[m].push(N[1]),m++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,l=0,h=n.length;l<h;l++)n[l]=se(n[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var l,h,m,v,A,N,V=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,v=this._parts.length;l<v;l++)for(N=this._parts[l],h=0,A=N.length,m=A-1;h<A;m=h++)if(!(!o&&h===0)&&Ds(n,N[m],N[h])<=V)return!0;return!1}});function wm(n,o){return new En(n,o)}En._flat=It;var kr=En.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return xs(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=En.prototype._convertLatLngs.call(this,n),l=o.length;return l>=2&&o[0]instanceof vt&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(n){En.prototype._setLatLngs.call(this,n),Tt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Tt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,l=new rt(o,o);if(n=new Pt(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,m=this._rings.length,v;h<m;h++)v=Ls(this._rings[h],n,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,l,h,m,v,A,N,V,q;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(v=0,V=this._parts.length;v<V;v++)for(l=this._parts[v],A=0,q=l.length,N=q-1;A<q;N=A++)h=l[A],m=l[N],h.y>n.y!=m.y>n.y&&n.x<(m.x-h.x)*(n.y-h.y)/(m.y-h.y)+h.x&&(o=!o);return o||En.prototype._containsPoint.call(this,n,!0)}});function Tm(n,o){return new kr(n,o)}var In=Tn.extend({initialize:function(n,o){F(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=j(n)?n:n.features,l,h,m;if(o){for(l=0,h=o.length;l<h;l++)m=o[l],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var v=this.options;if(v.filter&&!v.filter(n))return this;var A=Qo(n,v);return A?(A.feature=Xo(n),A.defaultOptions=A.options,this.resetStyle(A),v.onEachFeature&&v.onEachFeature(n,A),this.addLayer(A)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function Qo(n,o){var l=n.type==="Feature"?n.geometry:n,h=l?l.coordinates:null,m=[],v=o&&o.pointToLayer,A=o&&o.coordsToLatLng||Ec,N,V,q,K;if(!h&&!l)return null;switch(l.type){case"Point":return N=A(h),Tu(v,n,N,o);case"MultiPoint":for(q=0,K=h.length;q<K;q++)N=A(h[q]),m.push(Tu(v,n,N,o));return new Tn(m);case"LineString":case"MultiLineString":return V=Jo(h,l.type==="LineString"?0:1,A),new En(V,o);case"Polygon":case"MultiPolygon":return V=Jo(h,l.type==="Polygon"?1:2,A),new kr(V,o);case"GeometryCollection":for(q=0,K=l.geometries.length;q<K;q++){var et=Qo({geometry:l.geometries[q],type:"Feature",properties:n.properties},o);et&&m.push(et)}return new Tn(m);case"FeatureCollection":for(q=0,K=l.features.length;q<K;q++){var ft=Qo(l.features[q],o);ft&&m.push(ft)}return new Tn(m);default:throw new Error("Invalid GeoJSON object.")}}function Tu(n,o,l,h){return n?n(o,l):new Zo(l,h&&h.markersInheritOptions&&h)}function Ec(n){return new vt(n[1],n[0],n[2])}function Jo(n,o,l){for(var h=[],m=0,v=n.length,A;m<v;m++)A=o?Jo(n[m],o-1,l):(l||Ec)(n[m]),h.push(A);return h}function Ic(n,o){return n=ht(n),n.alt!==void 0?[E(n.lng,o),E(n.lat,o),E(n.alt,o)]:[E(n.lng,o),E(n.lat,o)]}function Yo(n,o,l,h){for(var m=[],v=0,A=n.length;v<A;v++)m.push(o?Yo(n[v],Tt(n[v])?0:o-1,l,h):Ic(n[v],h));return!o&&l&&m.length>0&&m.push(m[0].slice()),m}function Lr(n,o){return n.feature?s({},n.feature,{geometry:o}):Xo(o)}function Xo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var bc={toGeoJSON:function(n){return Lr(this,{type:"Point",coordinates:Ic(this.getLatLng(),n)})}};Zo.include(bc),Tc.include(bc),Ko.include(bc),En.include({toGeoJSON:function(n){var o=!Tt(this._latlngs),l=Yo(this._latlngs,o?1:0,!1,n);return Lr(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),kr.include({toGeoJSON:function(n){var o=!Tt(this._latlngs),l=o&&!Tt(this._latlngs[0]),h=Yo(this._latlngs,l?2:o?1:0,!0,n);return o||(h=[h]),Lr(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),Cr.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(n).geometry.coordinates)}),Lr(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var l=o==="GeometryCollection",h=[];return this.eachLayer(function(m){if(m.toGeoJSON){var v=m.toGeoJSON(n);if(l)h.push(v.geometry);else{var A=Xo(v);A.type==="FeatureCollection"?h.push.apply(h,A.features):h.push(A)}}}),l?Lr(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Eu(n,o){return new In(n,o)}var Em=Eu,ta=$e.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,l){this._url=n,this._bounds=kt(o),F(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){wt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&ke(this._image),this},bringToBack:function(){return this._map&&Le(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=kt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:gt("img");if(Q(o,"leaflet-image-layer"),this._zoomAnimated&&Q(o,"leaflet-zoom-animated"),this.options.className&&Q(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onload=u(this.fire,this,"load"),o.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;gn(this._image,l,o)},_reset:function(){var n=this._image,o=new Pt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();Dt(n,o.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),Im=function(n,o,l){return new ta(n,o,l)},Iu=ta.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:gt("video");if(Q(o,"leaflet-image-layer"),this._zoomAnimated&&Q(o,"leaflet-zoom-animated"),this.options.className&&Q(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onloadeddata=u(this.fire,this,"load"),n){for(var l=o.getElementsByTagName("source"),h=[],m=0;m<l.length;m++)h.push(l[m].src);this._url=l.length>0?h:[o.src];return}j(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var A=gt("source");A.src=this._url[v],o.appendChild(A)}}});function bm(n,o,l){return new Iu(n,o,l)}var bu=ta.extend({_initImage:function(){var n=this._image=this._url;Q(n,"leaflet-image-layer"),this._zoomAnimated&&Q(n,"leaflet-zoom-animated"),this.options.className&&Q(n,this.options.className),n.onselectstart=w,n.onmousemove=w}});function Am(n,o,l){return new bu(n,o,l)}var nn=$e.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof vt||j(n))?(this._latlng=ht(n),F(this,o)):(F(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&me(this._container,1),this.bringToFront(),this.options.interactive&&(Q(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(u(wt,void 0,this._container),200)):wt(this._container),this.options.interactive&&(St(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ht(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ke(this._container),this},bringToBack:function(){return this._map&&Le(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof Tn){o=null;var l=this._source._layers;for(var h in l)if(l[h]._map){o=l[h];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=st(this.options.offset),l=this._getAnchor();this._zoomAnimated?Dt(this._container,n.add(l)):o=o.add(n).add(l);var h=this._containerBottom=-o.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=h+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});dt.include({_initOverlay:function(n,o,l,h){var m=o;return m instanceof n||(m=new n(h).setContent(o)),l&&m.setLatLng(l),m}}),$e.include({_initOverlay:function(n,o,l,h){var m=l;return m instanceof n?(F(m,h),m._source=this):(m=o&&!h?o:new n(h,this),m.setContent(l)),m}});var ea=nn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,nn.prototype.openOn.call(this,n)},onAdd:function(n){nn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Kn||this._source.on("preclick",Et))},onRemove:function(n){nn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Kn||this._source.off("preclick",Et))},getEvents:function(){var n=nn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=gt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=gt("div",n+"-content-wrapper",o);if(this._contentNode=gt("div",n+"-content",l),Vi(o),Is(this._contentNode),ot(o,"contextmenu",Et),this._tipContainer=gt("div",n+"-tip-container",o),this._tip=gt("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=gt("a",n+"-close-button",o);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',ot(h,"click",function(m){Ft(m),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var h=n.offsetHeight,m=this.options.maxHeight,v="leaflet-popup-scrolled";m&&h>m?(o.height=m+"px",Q(n,v)):St(n,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Dt(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(Hn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,h=this._containerWidth,m=new rt(this._containerLeft,-l-this._containerBottom);m._add(yn(this._container));var v=n.layerPointToContainerPoint(m),A=st(this.options.autoPanPadding),N=st(this.options.autoPanPaddingTopLeft||A),V=st(this.options.autoPanPaddingBottomRight||A),q=n.getSize(),K=0,et=0;v.x+h+V.x>q.x&&(K=v.x+h-q.x+V.x),v.x-K-N.x<0&&(K=v.x-N.x),v.y+l+V.y>q.y&&(et=v.y+l-q.y+V.y),v.y-et-N.y<0&&(et=v.y-N.y),(K||et)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([K,et]))}},_getAnchor:function(){return st(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Pm=function(n,o){return new ea(n,o)};dt.mergeOptions({closePopupOnClick:!0}),dt.include({openPopup:function(n,o,l){return this._initOverlay(ea,n,o,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),$e.include({bindPopup:function(n,o){return this._popup=this._initOverlay(ea,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Tn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Je(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof Kn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var na=nn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){nn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){nn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=nn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=gt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+p(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,l,h=this._map,m=this._container,v=h.latLngToContainerPoint(h.getCenter()),A=h.layerPointToContainerPoint(n),N=this.options.direction,V=m.offsetWidth,q=m.offsetHeight,K=st(this.options.offset),et=this._getAnchor();N==="top"?(o=V/2,l=q):N==="bottom"?(o=V/2,l=0):N==="center"?(o=V/2,l=q/2):N==="right"?(o=0,l=q/2):N==="left"?(o=V,l=q/2):A.x<v.x?(N="right",o=0,l=q/2):(N="left",o=V+(K.x+et.x)*2,l=q/2),n=n.subtract(st(o,l,!0)).add(K).add(et),St(m,"leaflet-tooltip-right"),St(m,"leaflet-tooltip-left"),St(m,"leaflet-tooltip-top"),St(m,"leaflet-tooltip-bottom"),Q(m,"leaflet-tooltip-"+N),Dt(m,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&me(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return st(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Sm=function(n,o){return new na(n,o)};dt.include({openTooltip:function(n,o,l){return this._initOverlay(na,n,o,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),$e.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(na,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Tn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(ot(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ot(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,l,h;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(o)}});var Au=Rr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(ue(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=st(l.bgPos);o.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Cm(n){return new Au(n)}Rr.Default=Ns;var Ms=$e.extend({options:{tileSize:256,opacity:1,updateWhenIdle:J.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){F(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),wt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ke(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Le(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof rt?n:new rt(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,l=-n(-1/0,1/0),h=0,m=o.length,v;h<m;h++)v=o[h].style.zIndex,o[h]!==this._container&&v&&(l=n(l,+v));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!J.ielt9){me(this._container,this.options.opacity);var n=+new Date,o=!1,l=!1;for(var h in this._tiles){var m=this._tiles[h];if(!(!m.current||!m.loaded)){var v=Math.min(1,(n-m.loaded)/200);me(m.el,v),v<1?o=!0:(m.active?l=!0:this._onOpaqueTile(m),m.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(x(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this))}},_onOpaqueTile:w,_initContainer:function(){this._container||(this._container=gt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=o-Math.abs(n-l),this._onUpdateLevel(l)):(wt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[n],m=this._map;return h||(h=this._levels[n]={},h.el=gt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=o,h.origin=m.project(m.unproject(m.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,m.getCenter(),m.getZoom()),w(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:w,_onRemoveLevel:w,_onCreateLevel:w,_pruneTiles:function(){if(this._map){var n,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var h=o.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)wt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,l,h){var m=Math.floor(n/2),v=Math.floor(o/2),A=l-1,N=new rt(+m,+v);N.z=+A;var V=this._tileCoordsToKey(N),q=this._tiles[V];return q&&q.active?(q.retain=!0,!0):(q&&q.loaded&&(q.retain=!0),A>h?this._retainParent(m,v,A,h):!1)},_retainChildren:function(n,o,l,h){for(var m=2*n;m<2*n+2;m++)for(var v=2*o;v<2*o+2;v++){var A=new rt(m,v);A.z=l+1;var N=this._tileCoordsToKey(A),V=this._tiles[N];if(V&&V.active){V.retain=!0;continue}else V&&V.loaded&&(V.retain=!0);l+1<h&&this._retainChildren(m,v,l+1,h)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,l,h){var m=Math.round(o);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var v=this.options.updateWhenZooming&&m!==this._tileZoom;(!h||v)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,o)},_setZoomTransform:function(n,o,l){var h=this._map.getZoomScale(l,n.zoom),m=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(o,l)).round();J.any3d?gn(n.el,m,h):Dt(n.el,m)},_resetGrid:function(){var n=this._map,o=n.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],h).x/l.x),Math.ceil(n.project([0,o.wrapLng[1]],h).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],h).y/l.x),Math.ceil(n.project([o.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),h=o.getZoomScale(l,this._tileZoom),m=o.project(n,this._tileZoom).floor(),v=o.getSize().divideBy(h*2);return new Pt(m.subtract(v),m.add(v))},_update:function(n){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),m=this._pxBoundsToTileRange(h),v=m.getCenter(),A=[],N=this.options.keepBuffer,V=new Pt(m.getBottomLeft().subtract([N,-N]),m.getTopRight().add([N,-N]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var q in this._tiles){var K=this._tiles[q].coords;(K.z!==this._tileZoom||!V.contains(new rt(K.x,K.y)))&&(this._tiles[q].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var et=m.min.y;et<=m.max.y;et++)for(var ft=m.min.x;ft<=m.max.x;ft++){var de=new rt(ft,et);if(de.z=this._tileZoom,!!this._isValidTile(de)){var Qt=this._tiles[this._tileCoordsToKey(de)];Qt?Qt.current=!0:A.push(de)}}if(A.sort(function(ge,Dr){return ge.distanceTo(v)-Dr.distanceTo(v)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Me=document.createDocumentFragment();for(ft=0;ft<A.length;ft++)this._addTile(A[ft],Me);this._level.el.appendChild(Me)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!o.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return kt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,l=this.getTileSize(),h=n.scaleBy(l),m=h.add(l),v=o.unproject(h,n.z),A=o.unproject(m,n.z);return[v,A]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),l=new te(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),l=new rt(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(n){var o=this._tiles[n];o&&(wt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Q(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=w,n.onmousemove=w,J.ielt9&&this.options.opacity<1&&me(n,this.options.opacity)},_addTile:function(n,o){var l=this._getTilePos(n),h=this._tileCoordsToKey(n),m=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(m),this.createTile.length<2&&C(u(this._tileReady,this,n,null,m)),Dt(m,l),this._tiles[h]={el:m,coords:n,current:!0},o.appendChild(m),this.fire("tileloadstart",{tile:m,coords:n})},_tileReady:function(n,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:n});var h=this._tileCoordsToKey(n);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(me(l.el,0),x(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(Q(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),J.ielt9||!this._map._fadeAnimated?C(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new rt(this._wrapX?y(n.x,this._wrapX):n.x,this._wrapY?y(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new Pt(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Rm(n){return new Ms(n)}var xr=Ms.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=F(this,o),o.detectRetina&&J.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var l=document.createElement("img");return ot(l,"load",u(this._tileOnLoad,this,o,l)),ot(l,"error",u(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var o={r:J.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=l),o["-y"]=l}return H(this._url,s(o,this.options))},_tileOnLoad:function(n,o){J.ielt9?setTimeout(u(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,l){var h=this.options.errorTileUrl;h&&o.getAttribute("src")!==h&&(o.src=h),n(l,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(n=o-n),n+h},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=w,o.onerror=w,!o.complete)){o.src=lt;var l=this._tiles[n].coords;wt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",lt),Ms.prototype._removeTile.call(this,n)},_tileReady:function(n,o,l){if(!(!this._map||l&&l.getAttribute("src")===lt))return Ms.prototype._tileReady.call(this,n,o,l)}});function Pu(n,o){return new xr(n,o)}var Su=xr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var l=s({},this.defaultWmsParams);for(var h in o)h in this.options||(l[h]=o[h]);o=F(this,o);var m=o.detectRetina&&J.retina?2:1,v=this.getTileSize();l.width=v.x*m,l.height=v.y*m,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,xr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),l=this._crs,h=Xt(l.project(o[0]),l.project(o[1])),m=h.min,v=h.max,A=(this._wmsVersion>=1.3&&this._crs===Sr?[m.y,m.x,v.y,v.x]:[m.x,m.y,v.x,v.y]).join(","),N=xr.prototype.getTileUrl.call(this,n);return N+B(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(n,o){return s(this.wmsParams,n),o||this.redraw(),this}});function km(n,o){return new Su(n,o)}xr.WMS=Su,Pu.wms=km;var bn=$e.extend({options:{padding:.1},initialize:function(n){F(this,n),p(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var l=this._map.getZoomScale(o,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,o),v=h.multiplyBy(-l).add(m).subtract(this._map._getNewPixelOrigin(n,o));J.any3d?gn(this._container,v,l):Dt(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new Pt(l,l.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Cu=bn.extend({options:{tolerance:0},getEvents:function(){var n=bn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){bn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ot(n,"mousemove",this._onMouseMove,this),ot(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ot(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,wt(this._container),At(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){bn.prototype._update.call(this);var n=this._bounds,o=this._container,l=n.getSize(),h=J.retina?2:1;Dt(o,n.min),o.width=h*l.x,o.height=h*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",J.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){bn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[p(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,l=o.next,h=o.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete n._order,delete this._layers[p(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),l=[],h,m;for(m=0;m<o.length;m++){if(h=Number(o[m]),isNaN(h))return;l.push(h)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||C(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Pt,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var l,h,m,v,A=n._parts,N=A.length,V=this._ctx;if(N){for(V.beginPath(),l=0;l<N;l++){for(h=0,m=A[l].length;h<m;h++)v=A[l][h],V[h?"lineTo":"moveTo"](v.x,v.y);o&&V.closePath()}this._fillStroke(V,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,l=this._ctx,h=Math.max(Math.round(n._radius),1),m=(Math.max(Math.round(n._radiusY),1)||h)/h;m!==1&&(l.save(),l.scale(1,m)),l.beginPath(),l.arc(o.x,o.y/m,h,0,Math.PI*2,!1),m!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,o){var l=o.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),l,h,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(St(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var l,h,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(Q(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,l){this._map._fireDOMEvent(o,l||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function Ru(n){return J.canvas?new Cu(n):null}var Os=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Lm={_initContainer:function(){this._container=gt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(bn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Os("shape");Q(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Os("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[p(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;wt(o),n.removeInteractiveTarget(o),delete this._layers[p(n)]},_updateStyle:function(n){var o=n._stroke,l=n._fill,h=n.options,m=n._container;m.stroked=!!h.stroke,m.filled=!!h.fill,h.stroke?(o||(o=n._stroke=Os("stroke")),m.appendChild(o),o.weight=h.weight+"px",o.color=h.color,o.opacity=h.opacity,h.dashArray?o.dashStyle=j(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=h.lineCap.replace("butt","flat"),o.joinstyle=h.lineJoin):o&&(m.removeChild(o),n._stroke=null),h.fill?(l||(l=n._fill=Os("fill")),m.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(m.removeChild(l),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),l=Math.round(n._radius),h=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){ke(n._container)},_bringToBack:function(n){Le(n._container)}},ia=J.vml?Os:Po,Vs=bn.extend({_initContainer:function(){this._container=ia("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ia("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){wt(this._container),At(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){bn.prototype._update.call(this);var n=this._bounds,o=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),Dt(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=ia("path");n.options.className&&Q(o,n.options.className),n.options.interactive&&Q(o,"leaflet-interactive"),this._updateStyle(n),this._layers[p(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){wt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[p(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,l=n.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,or(n._parts,o))},_updateCircle:function(n){var o=n._point,l=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||l,m="a"+l+","+h+" 0 1,0 ",v=n._empty()?"M0 0":"M"+(o.x-l)+","+o.y+m+l*2+",0 "+m+-l*2+",0 ";this._setPath(n,v)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){ke(n._path)},_bringToBack:function(n){Le(n._path)}});J.vml&&Vs.include(Lm);function ku(n){return J.svg||J.vml?new Vs(n):null}dt.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&Ru(n)||ku(n)}});var Lu=kr.extend({initialize:function(n,o){kr.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=kt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function xm(n,o){return new Lu(n,o)}Vs.create=ia,Vs.pointsToPath=or,In.geometryToLayer=Qo,In.coordsToLatLng=Ec,In.coordsToLatLngs=Jo,In.latLngToCoords=Ic,In.latLngsToCoords=Yo,In.getFeature=Lr,In.asFeature=Xo,dt.mergeOptions({boxZoom:!0});var xu=Ee.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ot(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){At(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){wt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Be(),gr(),this._startPoint=this._map.mouseEventToContainerPoint(n),ot(document,{contextmenu:Je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=gt("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new Pt(this._point,this._startPoint),l=o.getSize();Dt(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(wt(this._box),St(this._container,"leaflet-crosshair")),Te(),yr(),At(document,{contextmenu:Je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var o=new te(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});dt.addInitHook("addHandler","boxZoom",xu),dt.mergeOptions({doubleClickZoom:!0});var Du=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,l=o.getZoom(),h=o.options.zoomDelta,m=n.originalEvent.shiftKey?l-h:l+h;o.options.doubleClickZoom==="center"?o.setZoom(m):o.setZoomAround(n.containerPoint,m)}});dt.addInitHook("addHandler","doubleClickZoom",Du),dt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Nu=Ee.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new ze(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){St(this._map._container,"leaflet-grab"),St(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=kt(this._map.options.maxBounds);this._offsetLimit=Xt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,m=(h-o+l)%n+o-l,v=(h+o+l)%n-o-l,A=Math.abs(m+l)<Math.abs(v+l)?m:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(n){var o=this._map,l=o.options,h=!l.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),h)o.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,A=l.easeLinearity,N=m.multiplyBy(A/v),V=N.distanceTo([0,0]),q=Math.min(l.inertiaMaxSpeed,V),K=N.multiplyBy(q/V),et=q/(l.inertiaDeceleration*A),ft=K.multiplyBy(-et/2).round();!ft.x&&!ft.y?o.fire("moveend"):(ft=o._limitOffset(ft,o.options.maxBounds),C(function(){o.panBy(ft,{duration:et,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});dt.addInitHook("addHandler","dragging",Nu),dt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mu=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ot(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),At(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,l=n.scrollTop||o.scrollTop,h=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},l=this.keyCodes,h,m;for(h=0,m=l.left.length;h<m;h++)o[l.left[h]]=[-1*n,0];for(h=0,m=l.right.length;h<m;h++)o[l.right[h]]=[n,0];for(h=0,m=l.down.length;h<m;h++)o[l.down[h]]=[0,n];for(h=0,m=l.up.length;h<m;h++)o[l.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},l=this.keyCodes,h,m;for(h=0,m=l.zoomIn.length;h<m;h++)o[l.zoomIn[h]]=n;for(h=0,m=l.zoomOut.length;h<m;h++)o[l.zoomOut[h]]=-n},_addHooks:function(){ot(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){At(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,l=this._map,h;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[o],n.shiftKey&&(h=st(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(st(h),l.options.maxBounds)),l.options.worldCopyJump){var m=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(m)}else l.panBy(h)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Je(n)}}});dt.addInitHook("addHandler","keyboard",Mu),dt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ou=Ee.extend({addHooks:function(){ot(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){At(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=As(n),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),h),Je(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,v=l?Math.ceil(m/l)*l:m,A=n._limitZoom(o+(this._delta>0?v:-v))-o;this._delta=0,this._startTime=null,A&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+A):n.setZoomAround(this._lastMousePos,o+A))}});dt.addInitHook("addHandler","scrollWheelZoom",Ou);var Dm=600;dt.mergeOptions({tapHold:J.touchNative&&J.safari&&J.mobile,tapTolerance:15});var Vu=Ee.extend({addHooks:function(){ot(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){At(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new rt(o.clientX,o.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(ot(document,"touchend",Ft),ot(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Dm),ot(document,"touchend touchcancel contextmenu",this._cancel,this),ot(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){At(document,"touchend",Ft),At(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),At(document,"touchend touchcancel contextmenu",this._cancel,this),At(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new rt(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});dt.addInitHook("addHandler","tapHold",Vu),dt.mergeOptions({touchZoom:J.touch,bounceAtZoomLimits:!0});var Fu=Ee.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),ot(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){St(this._map._container,"leaflet-touch-zoom"),At(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),ot(document,"touchmove",this._onTouchMove,this),ot(document,"touchend touchcancel",this._onTouchEnd,this),Ft(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]),m=l.distanceTo(h)/this._startDist;if(this._zoom=o.getScaleZoom(m,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&m<1||this._zoom>o.getMaxZoom()&&m>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var v=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(m===1&&v.x===0&&v.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var A=u(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=C(A,this,!0),Ft(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,x(this._animRequest),At(document,"touchmove",this._onTouchMove,this),At(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});dt.addInitHook("addHandler","touchZoom",Fu),dt.BoxZoom=xu,dt.DoubleClickZoom=Du,dt.Drag=Nu,dt.Keyboard=Mu,dt.ScrollWheelZoom=Ou,dt.TapHold=Vu,dt.TouchZoom=Fu,e.Bounds=Pt,e.Browser=J,e.CRS=we,e.Canvas=Cu,e.Circle=Tc,e.CircleMarker=Ko,e.Class=Rt,e.Control=_e,e.DivIcon=Au,e.DivOverlay=nn,e.DomEvent=Ui,e.DomUtil=wc,e.Draggable=ze,e.Evented=Ei,e.FeatureGroup=Tn,e.GeoJSON=In,e.GridLayer=Ms,e.Handler=Ee,e.Icon=Rr,e.ImageOverlay=ta,e.LatLng=vt,e.LatLngBounds=te,e.Layer=$e,e.LayerGroup=Cr,e.LineUtil=De,e.Map=dt,e.Marker=Zo,e.Mixin=Wo,e.Path=Kn,e.Point=rt,e.PolyUtil=Ar,e.Polygon=kr,e.Polyline=En,e.Popup=ea,e.PosAnimation=Ss,e.Projection=en,e.Rectangle=Lu,e.Renderer=bn,e.SVG=Vs,e.SVGOverlay=bu,e.TileLayer=xr,e.Tooltip=na,e.Transformation=hs,e.Util=b,e.VideoOverlay=Iu,e.bind=u,e.bounds=Xt,e.canvas=Ru,e.circle=vm,e.circleMarker=ym,e.control=Xe,e.divIcon=Cm,e.extend=s,e.featureGroup=mm,e.geoJSON=Eu,e.geoJson=Em,e.gridLayer=Rm,e.icon=_m,e.imageOverlay=Im,e.latLng=ht,e.latLngBounds=kt,e.layerGroup=pm,e.map=Tr,e.marker=gm,e.point=st,e.polygon=Tm,e.polyline=wm,e.popup=Pm,e.rectangle=xm,e.setOptions=F,e.stamp=p,e.svg=ku,e.svgOverlay=Am,e.tileLayer=Pu,e.tooltip=Sm,e.transformation=Un,e.version=r,e.videoOverlay=bm;var Nm=window.L;e.noConflict=function(){return window.L=Nm,this},window.L=e})})(gl,gl.exports);var ab=gl.exports;const Br=ob(ab),hm="trippy-geocache";let bd=Promise.resolve();function Ad(){try{return JSON.parse(localStorage.getItem(hm)||"{}")}catch{return{}}}function cb(i){try{localStorage.setItem(hm,JSON.stringify(i))}catch{}}async function lb(i){const t=i.toLowerCase().trim(),e=Ad();if(e[t])return e[t];const r=await(bd=bd.then(async()=>{await new Promise(s=>setTimeout(s,350));try{const s=`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(i)}`,u=await(await fetch(s,{headers:{"Accept-Language":"en"}})).json();return u!=null&&u.length?{lat:parseFloat(u[0].lat),lng:parseFloat(u[0].lon)}:null}catch{return null}}));if(r){const s=Ad();s[t]=r,cb(s)}return r}async function ub(i){const t=[...new Set(i.filter(Boolean))],e={};for(const r of t)e[r]=await lb(r);return e}let Us=null,Oe=null,Fr=null;function hb(i,t){var r;Us&&(Us.destroy(),Us=null),Oe&&(Oe.remove(),Oe=null),Fr=null;const e=((r=bo())==null?void 0:r.uid)||null;i.innerHTML=`
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
  `,hc(i),i.querySelector("#globe-back").addEventListener("click",()=>xn(`/trip/${t}`)),Oe=Br.map("map-inner",{zoomControl:!0}).setView([20,10],2),Br.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(Oe),Us=sm(t,e,s=>Pd(i,s)),Pd(i,Us.getAll())}async function Pd(i,t,e){var p,g;const r=i.querySelector("#globe-day-list");if(!r||!Oe)return;if(Fr&&(r.removeEventListener("click",Fr),Fr=null),Oe.eachLayer(y=>{y instanceof Br.TileLayer||Oe.removeLayer(y)}),t.length===0){r.innerHTML='<div class="globe-empty">No days in this trip yet.</div>';return}r.innerHTML='<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>'+t.map((y,w)=>`
      <div class="globe-day-item" data-dest="${zc(y.destination)}" data-idx="${w}">
        <div class="globe-day-date">${db(y.date)}</div>
        <div class="globe-day-dest">${zc(y.destination||"Unknown")}</div>
        ${y.event?`<div class="globe-day-event">${zc(y.event)}</div>`:""}
        ${y.travelDay?'<span class="globe-travel-badge">Travel</span>':""}
      </div>
    `).join("");const s=[...new Set(t.map(y=>y.destination).filter(Boolean))],a=await ub(s);(p=r.querySelector(".geocoding-hint"))==null||p.remove(),(g=r.querySelector(".globe-day-item"))==null||g.classList.add("active");const u=t.filter(y=>y.destination&&a[y.destination]).map(y=>[a[y.destination].lat,a[y.destination].lng]);u.length>1&&Br.polyline(u,{color:"#7c6af7",weight:2.5,opacity:.85,dashArray:"6 10"}).addTo(Oe);const d={};for(const y of s){if(!a[y])continue;const w=Br.circleMarker([a[y].lat,a[y].lng],{radius:7,fillColor:"#7c6af7",color:"#fff",weight:1.5,fillOpacity:.9}).addTo(Oe);w.bindTooltip(y,{direction:"top",offset:[0,-8],className:"map-tooltip"}),d[y]=w}u.length>0&&Oe.fitBounds(Br.latLngBounds(u),{padding:[50,50],maxZoom:8}),Fr=y=>{var S;const w=y.target.closest(".globe-day-item");if(!w)return;const E=w.dataset.dest;E&&a[E]&&(Oe.flyTo([a[E].lat,a[E].lng],10,{duration:1.5}),r.querySelectorAll(".globe-day-item").forEach(O=>O.classList.remove("active")),w.classList.add("active"),w.scrollIntoView({behavior:"smooth",block:"nearest"}),(S=d[E])==null||S.openTooltip())},r.addEventListener("click",Fr)}function db(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function zc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const An=document.getElementById("app");dI();const dm=wI({"/":()=>lm(An),"/trip/:id":({id:i})=>rb(An,i),"/globe/:id":({id:i})=>hb(An,i),"/join/:code":async({code:i})=>{var e,r;const t=bo();if(!t){An.innerHTML=`
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
      `,hc(An),(e=An.querySelector("#join-home-btn"))==null||e.addEventListener("click",()=>xn("/"));return}try{An.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⏳</div>
          <p>Joining trip…</p>
        </div>
      `;const s=await SI(i,t.uid);xn(`/trip/${s}`)}catch(s){An.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⚠️</div>
          <h2>Could not join trip</h2>
          <p>${s.message}</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `,(r=An.querySelector("#join-home-btn"))==null||r.addEventListener("click",()=>xn("/"))}}});fI(async i=>{i&&(await kI(i.uid,i.displayName||i.email||""),DI(i.uid,i.displayName||"",i.email||"")),dm.refresh()});dm.start();
