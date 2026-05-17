(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Cm=()=>{};var Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Rm=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const s=i[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=i[e++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=i[e++],u=i[e++],f=i[e++],m=((s&7)<<18|(a&63)<<12|(u&63)<<6|f&63)-65536;t[r++]=String.fromCharCode(55296+(m>>10)),t[r++]=String.fromCharCode(56320+(m&1023))}else{const a=i[e++],u=i[e++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},_d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<i.length;s+=3){const a=i[s],u=s+1<i.length,f=u?i[s+1]:0,m=s+2<i.length,_=m?i[s+2]:0,y=a>>2,w=(a&3)<<4|f>>4;let E=(f&15)<<2|_>>6,k=_&63;m||(k=64,u||(E=64)),r.push(e[y],e[w],e[E],e[k])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(md(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Rm(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<i.length;){const a=e[i.charAt(s++)],f=s<i.length?e[i.charAt(s)]:0;++s;const _=s<i.length?e[i.charAt(s)]:64;++s;const w=s<i.length?e[i.charAt(s)]:64;if(++s,a==null||f==null||_==null||w==null)throw new km;const E=a<<2|f>>4;if(r.push(E),_!==64){const k=f<<4&240|_>>2;if(r.push(k),w!==64){const V=_<<6&192|w;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class km extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lm=function(i){const t=md(i);return _d.encodeByteArray(t,!0)},fa=function(i){return Lm(i).replace(/\./g,"")},gd=function(i){try{return _d.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function xm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dm=()=>xm().__FIREBASE_DEFAULTS__,Nm=()=>{if(typeof process>"u"||typeof Lu>"u")return;const i=Lu.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Mm=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&gd(i[1]);return t&&JSON.parse(t)},Da=()=>{try{return Cm()||Dm()||Nm()||Mm()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},yd=i=>{var t,e;return(e=(t=Da())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},Om=i=>{const t=yd(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},vd=()=>{var i;return(i=Da())==null?void 0:i.config},wd=i=>{var t;return(t=Da())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Fm(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=i.iat||0,a=i.sub||i.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...i};return[fa(JSON.stringify(e)),fa(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function Bm(){var t;const i=(t=Da())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qm(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hm(){const i=ae();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function $m(){return!Bm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)==null?void 0:a.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="FirebaseError";class Nn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Zm,Object.setPrototypeOf(this,Nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?Km(a,r):"Error",f=`${this.serviceName}: ${u} (${s}).`;return new Nn(s,f,r)}}function Km(i,t){return i.replace(Qm,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Qm=/\{\$([^}]+)}/g;function Jm(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Rn(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const a=i[s],u=t[s];if(xu(a)&&xu(u)){if(!Rn(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function xu(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ss(i){const t={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(a)}}),t}function Cs(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function Ym(i,t){const e=new Xm(i,t);return e.subscribe.bind(e)}class Xm{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");t_(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=mc),s.error===void 0&&(s.error=mc),s.complete===void 0&&(s.complete=mc);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t_(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function mc(){}/**
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
 */function Ht(i){return i&&i._delegate?i._delegate:i}/**
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
 */function Js(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Td(i){return(await fetch(i,{credentials:"include"})).ok}class Bi{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Mi="[DEFAULT]";/**
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
 */class e_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Vm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(i_(t))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=Mi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Mi){return this.instances.has(t)}getOptions(t=Mi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[a,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);r===f&&u.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Mi){return this.component?this.component.multipleInstances?t:Mi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n_(i){return i===Mi?void 0:i}function i_(i){return i.instantiationMode==="EAGER"}/**
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
 */class r_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new e_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ft||(ft={}));const s_={debug:ft.DEBUG,verbose:ft.VERBOSE,info:ft.INFO,warn:ft.WARN,error:ft.ERROR,silent:ft.SILENT},o_=ft.INFO,a_={[ft.DEBUG]:"log",[ft.VERBOSE]:"log",[ft.INFO]:"info",[ft.WARN]:"warn",[ft.ERROR]:"error"},c_=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),s=a_[t];if(s)console[s](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cl{constructor(t){this.name=t,this._logLevel=o_,this._logHandler=c_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ft))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?s_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ft.DEBUG,...t),this._logHandler(this,ft.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ft.VERBOSE,...t),this._logHandler(this,ft.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ft.INFO,...t),this._logHandler(this,ft.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ft.WARN,...t),this._logHandler(this,ft.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ft.ERROR,...t),this._logHandler(this,ft.ERROR,...t)}}const l_=(i,t)=>t.some(e=>i instanceof e);let Du,Nu;function u_(){return Du||(Du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h_(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ed=new WeakMap,Lc=new WeakMap,Id=new WeakMap,_c=new WeakMap,ll=new WeakMap;function d_(i){const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("success",a),i.removeEventListener("error",u)},a=()=>{e(Jn(i.result)),s()},u=()=>{r(i.error),s()};i.addEventListener("success",a),i.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Ed.set(e,i)}).catch(()=>{}),ll.set(t,i),t}function f_(i){if(Lc.has(i))return;const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("complete",a),i.removeEventListener("error",u),i.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{r(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",a),i.addEventListener("error",u),i.addEventListener("abort",u)});Lc.set(i,t)}let xc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Lc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Id.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Jn(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function p_(i){xc=i(xc)}function m_(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call(gc(this),t,...e);return Id.set(r,t.sort?t.sort():[t]),Jn(r)}:h_().includes(i)?function(...t){return i.apply(gc(this),t),Jn(Ed.get(this))}:function(...t){return Jn(i.apply(gc(this),t))}}function __(i){return typeof i=="function"?m_(i):(i instanceof IDBTransaction&&f_(i),l_(i,u_())?new Proxy(i,xc):i)}function Jn(i){if(i instanceof IDBRequest)return d_(i);if(_c.has(i))return _c.get(i);const t=__(i);return t!==i&&(_c.set(i,t),ll.set(t,i)),t}const gc=i=>ll.get(i);function g_(i,t,{blocked:e,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(i,t),f=Jn(u);return r&&u.addEventListener("upgradeneeded",m=>{r(Jn(u.result),m.oldVersion,m.newVersion,Jn(u.transaction),m)}),e&&u.addEventListener("blocked",m=>e(m.oldVersion,m.newVersion,m)),f.then(m=>{a&&m.addEventListener("close",()=>a()),s&&m.addEventListener("versionchange",_=>s(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const y_=["get","getKey","getAll","getAllKeys","count"],v_=["put","add","delete","clear"],yc=new Map;function Mu(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(yc.get(t))return yc.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=v_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||y_.includes(e)))return;const a=async function(u,...f){const m=this.transaction(u,s?"readwrite":"readonly");let _=m.store;return r&&(_=_.index(f.shift())),(await Promise.all([_[e](...f),s&&m.done]))[0]};return yc.set(t,a),a}p_(i=>({...i,get:(t,e,r)=>Mu(t,e)||i.get(t,e,r),has:(t,e)=>!!Mu(t,e)||i.has(t,e)}));/**
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
 */class w_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(T_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function T_(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Dc="@firebase/app",Ou="0.14.12";/**
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
 */const kn=new cl("@firebase/app"),E_="@firebase/app-compat",I_="@firebase/analytics-compat",b_="@firebase/analytics",A_="@firebase/app-check-compat",P_="@firebase/app-check",S_="@firebase/auth",C_="@firebase/auth-compat",R_="@firebase/database",k_="@firebase/data-connect",L_="@firebase/database-compat",x_="@firebase/functions",D_="@firebase/functions-compat",N_="@firebase/installations",M_="@firebase/installations-compat",O_="@firebase/messaging",V_="@firebase/messaging-compat",F_="@firebase/performance",U_="@firebase/performance-compat",B_="@firebase/remote-config",z_="@firebase/remote-config-compat",q_="@firebase/storage",j_="@firebase/storage-compat",H_="@firebase/firestore",$_="@firebase/ai",W_="@firebase/firestore-compat",G_="firebase",Z_="12.13.0";/**
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
 */const Nc="[DEFAULT]",K_={[Dc]:"fire-core",[E_]:"fire-core-compat",[b_]:"fire-analytics",[I_]:"fire-analytics-compat",[P_]:"fire-app-check",[A_]:"fire-app-check-compat",[S_]:"fire-auth",[C_]:"fire-auth-compat",[R_]:"fire-rtdb",[k_]:"fire-data-connect",[L_]:"fire-rtdb-compat",[x_]:"fire-fn",[D_]:"fire-fn-compat",[N_]:"fire-iid",[M_]:"fire-iid-compat",[O_]:"fire-fcm",[V_]:"fire-fcm-compat",[F_]:"fire-perf",[U_]:"fire-perf-compat",[B_]:"fire-rc",[z_]:"fire-rc-compat",[q_]:"fire-gcs",[j_]:"fire-gcs-compat",[H_]:"fire-fst",[W_]:"fire-fst-compat",[$_]:"fire-vertex","fire-js":"fire-js",[G_]:"fire-js-all"};/**
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
 */const pa=new Map,Q_=new Map,Mc=new Map;function Vu(i,t){try{i.container.addComponent(t)}catch(e){kn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function Mr(i){const t=i.name;if(Mc.has(t))return kn.debug(`There were multiple attempts to register component ${t}.`),!1;Mc.set(t,i);for(const e of pa.values())Vu(e,i);for(const e of Q_.values())Vu(e,i);return!0}function ul(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function we(i){return i==null?!1:i.settings!==void 0}/**
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
 */const J_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Ks("app","Firebase",J_);/**
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
 */class Y_{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
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
 */const qr=Z_;function bd(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r={name:Nc,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Yn.create("bad-app-name",{appName:String(s)});if(e||(e=vd()),!e)throw Yn.create("no-options");const a=pa.get(s);if(a){if(Rn(e,a.options)&&Rn(r,a.config))return a;throw Yn.create("duplicate-app",{appName:s})}const u=new r_(s);for(const m of Mc.values())u.addComponent(m);const f=new Y_(e,r,u);return pa.set(s,f),f}function Ad(i=Nc){const t=pa.get(i);if(!t&&i===Nc&&vd())return bd();if(!t)throw Yn.create("no-app",{appName:i});return t}function Xn(i,t,e){let r=K_[i]??i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${r}" with version "${t}":`];s&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kn.warn(u.join(" "));return}Mr(new Bi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const X_="firebase-heartbeat-database",tg=1,Us="firebase-heartbeat-store";let vc=null;function Pd(){return vc||(vc=g_(X_,tg,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Us)}catch(e){console.warn(e)}}}}).catch(i=>{throw Yn.create("idb-open",{originalErrorMessage:i.message})})),vc}async function eg(i){try{const e=(await Pd()).transaction(Us),r=await e.objectStore(Us).get(Sd(i));return await e.done,r}catch(t){if(t instanceof Nn)kn.warn(t.message);else{const e=Yn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kn.warn(e.message)}}}async function Fu(i,t){try{const r=(await Pd()).transaction(Us,"readwrite");await r.objectStore(Us).put(t,Sd(i)),await r.done}catch(e){if(e instanceof Nn)kn.warn(e.message);else{const r=Yn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kn.warn(r.message)}}}function Sd(i){return`${i.name}!${i.options.appId}`}/**
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
 */const ng=1024,ig=30;class rg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new og(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Uu();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>ig){const u=ag(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Uu(),{heartbeatsToSend:r,unsentEntries:s}=sg(this._heartbeatsCache.heartbeats),a=fa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return kn.warn(e),""}}}function Uu(){return new Date().toISOString().substring(0,10)}function sg(i,t=ng){const e=[];let r=i.slice();for(const s of i){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Bu(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Bu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class og{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await eg(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Bu(i){return fa(JSON.stringify({version:2,heartbeats:i})).length}function ag(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let r=1;r<i.length;r++)i[r].date<e&&(e=i[r].date,t=r);return t}/**
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
 */function cg(i){Mr(new Bi("platform-logger",t=>new w_(t),"PRIVATE")),Mr(new Bi("heartbeat",t=>new rg(t),"PRIVATE")),Xn(Dc,Ou,i),Xn(Dc,Ou,"esm2020"),Xn("fire-js","")}cg("");var lg="firebase",ug="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(lg,ug,"app");var zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ti,Cd;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,I){function P(){}P.prototype=I.prototype,C.F=I.prototype,C.prototype=new P,C.prototype.constructor=C,C.D=function(R,S,x){for(var b=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)b[Ct-2]=arguments[Ct];return I.prototype[S].apply(R,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,I,P){P||(P=0);const R=Array(16);if(typeof I=="string")for(var S=0;S<16;++S)R[S]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(S=0;S<16;++S)R[S]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=C.g[0],P=C.g[1],S=C.g[2];let x=C.g[3],b;b=I+(x^P&(S^x))+R[0]+3614090360&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+R[1]+3905402710&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+R[2]+606105819&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+R[3]+3250441966&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(x^P&(S^x))+R[4]+4118548399&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+R[5]+1200080426&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+R[6]+2821735955&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+R[7]+4249261313&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(x^P&(S^x))+R[8]+1770035416&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+R[9]+2336552879&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+R[10]+4294925233&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+R[11]+2304563134&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(x^P&(S^x))+R[12]+1804603682&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(S^I&(P^S))+R[13]+4254626195&4294967295,x=I+(b<<12&4294967295|b>>>20),b=S+(P^x&(I^P))+R[14]+2792965006&4294967295,S=x+(b<<17&4294967295|b>>>15),b=P+(I^S&(x^I))+R[15]+1236535329&4294967295,P=S+(b<<22&4294967295|b>>>10),b=I+(S^x&(P^S))+R[1]+4129170786&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+R[6]+3225465664&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+R[11]+643717713&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+R[0]+3921069994&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(S^x&(P^S))+R[5]+3593408605&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+R[10]+38016083&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+R[15]+3634488961&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+R[4]+3889429448&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(S^x&(P^S))+R[9]+568446438&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+R[14]+3275163606&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+R[3]+4107603335&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+R[8]+1163531501&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(S^x&(P^S))+R[13]+2850285829&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^S&(I^P))+R[2]+4243563512&4294967295,x=I+(b<<9&4294967295|b>>>23),b=S+(I^P&(x^I))+R[7]+1735328473&4294967295,S=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(S^x))+R[12]+2368359562&4294967295,P=S+(b<<20&4294967295|b>>>12),b=I+(P^S^x)+R[5]+4294588738&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+R[8]+2272392833&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+R[11]+1839030562&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+R[14]+4259657740&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(P^S^x)+R[1]+2763975236&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+R[4]+1272893353&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+R[7]+4139469664&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+R[10]+3200236656&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(P^S^x)+R[13]+681279174&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+R[0]+3936430074&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+R[3]+3572445317&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+R[6]+76029189&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(P^S^x)+R[9]+3654602809&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^S)+R[12]+3873151461&4294967295,x=I+(b<<11&4294967295|b>>>21),b=S+(x^I^P)+R[15]+530742520&4294967295,S=x+(b<<16&4294967295|b>>>16),b=P+(S^x^I)+R[2]+3299628645&4294967295,P=S+(b<<23&4294967295|b>>>9),b=I+(S^(P|~x))+R[0]+4096336452&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+R[7]+1126891415&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+R[14]+2878612391&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+R[5]+4237533241&4294967295,P=S+(b<<21&4294967295|b>>>11),b=I+(S^(P|~x))+R[12]+1700485571&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+R[3]+2399980690&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+R[10]+4293915773&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+R[1]+2240044497&4294967295,P=S+(b<<21&4294967295|b>>>11),b=I+(S^(P|~x))+R[8]+1873313359&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+R[15]+4264355552&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+R[6]+2734768916&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+R[13]+1309151649&4294967295,P=S+(b<<21&4294967295|b>>>11),b=I+(S^(P|~x))+R[4]+4149444226&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~S))+R[11]+3174756917&4294967295,x=I+(b<<10&4294967295|b>>>22),b=S+(I^(x|~P))+R[2]+718787259&4294967295,S=x+(b<<15&4294967295|b>>>17),b=P+(x^(S|~I))+R[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+S&4294967295,C.g[3]=C.g[3]+x&4294967295}r.prototype.v=function(C,I){I===void 0&&(I=C.length);const P=I-this.blockSize,R=this.C;let S=this.h,x=0;for(;x<I;){if(S==0)for(;x<=P;)s(this,C,x),x+=this.blockSize;if(typeof C=="string"){for(;x<I;)if(R[S++]=C.charCodeAt(x++),S==this.blockSize){s(this,R),S=0;break}}else for(;x<I;)if(R[S++]=C[x++],S==this.blockSize){s(this,R),S=0;break}}this.h=S,this.o+=I},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var P=C.length-8;P<C.length;++P)C[P]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,P=0;P<4;++P)for(let R=0;R<32;R+=8)C[I++]=this.g[P]>>>R&255;return C};function a(C,I){var P=f;return Object.prototype.hasOwnProperty.call(P,C)?P[C]:P[C]=I(C)}function u(C,I){this.h=I;const P=[];let R=!0;for(let S=C.length-1;S>=0;S--){const x=C[S]|0;R&&x==I||(P[S]=x,R=!1)}this.g=P}var f={};function m(C){return-128<=C&&C<128?a(C,function(I){return new u([I|0],I<0?-1:0)}):new u([C|0],C<0?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return w;if(C<0)return q(_(-C));const I=[];let P=1;for(let R=0;C>=P;R++)I[R]=C/P|0,P*=4294967296;return new u(I,0)}function y(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return q(y(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=_(Math.pow(I,8));let R=w;for(let x=0;x<C.length;x+=8){var S=Math.min(8,C.length-x);const b=parseInt(C.substring(x,x+S),I);S<8?(S=_(Math.pow(I,S)),R=R.j(S).add(_(b))):(R=R.j(P),R=R.add(_(b)))}return R}var w=m(0),E=m(1),k=m(16777216);i=u.prototype,i.m=function(){if(U(this))return-q(this).m();let C=0,I=1;for(let P=0;P<this.g.length;P++){const R=this.i(P);C+=(R>=0?R:4294967296+R)*I,I*=4294967296}return C},i.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(V(this))return"0";if(U(this))return"-"+q(this).toString(C);const I=_(Math.pow(C,6));var P=this;let R="";for(;;){const S=vt(P,I).g;P=ot(P,S.j(I));let x=((P.g.length>0?P.g[0]:P.h)>>>0).toString(C);if(P=S,V(P))return x+R;for(;x.length<6;)x="0"+x;R=x+R}},i.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function V(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function U(C){return C.h==-1}i.l=function(C){return C=ot(this,C),U(C)?-1:V(C)?0:1};function q(C){const I=C.g.length,P=[];for(let R=0;R<I;R++)P[R]=~C.g[R];return new u(P,~C.h).add(E)}i.abs=function(){return U(this)?q(this):this},i.add=function(C){const I=Math.max(this.g.length,C.g.length),P=[];let R=0;for(let S=0;S<=I;S++){let x=R+(this.i(S)&65535)+(C.i(S)&65535),b=(x>>>16)+(this.i(S)>>>16)+(C.i(S)>>>16);R=b>>>16,x&=65535,b&=65535,P[S]=b<<16|x}return new u(P,P[P.length-1]&-2147483648?-1:0)};function ot(C,I){return C.add(q(I))}i.j=function(C){if(V(this)||V(C))return w;if(U(this))return U(C)?q(this).j(q(C)):q(q(this).j(C));if(U(C))return q(this.j(q(C)));if(this.l(k)<0&&C.l(k)<0)return _(this.m()*C.m());const I=this.g.length+C.g.length,P=[];for(var R=0;R<2*I;R++)P[R]=0;for(R=0;R<this.g.length;R++)for(let S=0;S<C.g.length;S++){const x=this.i(R)>>>16,b=this.i(R)&65535,Ct=C.i(S)>>>16,qt=C.i(S)&65535;P[2*R+2*S]+=b*qt,ut(P,2*R+2*S),P[2*R+2*S+1]+=x*qt,ut(P,2*R+2*S+1),P[2*R+2*S+1]+=b*Ct,ut(P,2*R+2*S+1),P[2*R+2*S+2]+=x*Ct,ut(P,2*R+2*S+2)}for(C=0;C<I;C++)P[C]=P[2*C+1]<<16|P[2*C];for(C=I;C<2*I;C++)P[C]=0;return new u(P,0)};function ut(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function Q(C,I){this.g=C,this.h=I}function vt(C,I){if(V(I))throw Error("division by zero");if(V(C))return new Q(w,w);if(U(C))return I=vt(q(C),I),new Q(q(I.g),q(I.h));if(U(I))return I=vt(C,q(I)),new Q(q(I.g),I.h);if(C.g.length>30){if(U(C)||U(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,R=I;R.l(C)<=0;)P=bt(P),R=bt(R);var S=Lt(P,1),x=Lt(R,1);for(R=Lt(R,2),P=Lt(P,2);!V(R);){var b=x.add(R);b.l(C)<=0&&(S=S.add(P),x=b),R=Lt(R,1),P=Lt(P,1)}return I=ot(C,S.j(I)),new Q(S,I)}for(S=w;C.l(I)>=0;){for(P=Math.max(1,Math.floor(C.m()/I.m())),R=Math.ceil(Math.log(P)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),x=_(P),b=x.j(I);U(b)||b.l(C)>0;)P-=R,x=_(P),b=x.j(I);V(x)&&(x=E),S=S.add(x),C=ot(C,b)}return new Q(S,C)}i.B=function(C){return vt(this,C).h},i.and=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let R=0;R<I;R++)P[R]=this.i(R)&C.i(R);return new u(P,this.h&C.h)},i.or=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let R=0;R<I;R++)P[R]=this.i(R)|C.i(R);return new u(P,this.h|C.h)},i.xor=function(C){const I=Math.max(this.g.length,C.g.length),P=[];for(let R=0;R<I;R++)P[R]=this.i(R)^C.i(R);return new u(P,this.h^C.h)};function bt(C){const I=C.g.length+1,P=[];for(let R=0;R<I;R++)P[R]=C.i(R)<<1|C.i(R-1)>>>31;return new u(P,C.h)}function Lt(C,I){const P=I>>5;I%=32;const R=C.g.length-P,S=[];for(let x=0;x<R;x++)S[x]=I>0?C.i(x+P)>>>I|C.i(x+P+1)<<32-I:C.i(x+P);return new u(S,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Cd=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=y,ti=u}).apply(typeof zu<"u"?zu:typeof self<"u"?self:typeof window<"u"?window:{});var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rd,Rs,kd,ea,Oc,Ld,xd,Dd;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Go=="object"&&Go];for(var d=0;d<c.length;++d){var g=c[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=e(this);function s(c,d){if(d)t:{var g=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var D=c[T];if(!(D in g))break t;g=g[D]}c=c[c.length-1],T=g[c],d=d(T),d!=T&&d!=null&&t(g,c,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(d){var g=[],T;for(T in d)Object.prototype.hasOwnProperty.call(d,T)&&g.push([T,d[T]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function f(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function m(c,d,g){return c.call.apply(c.bind,arguments)}function _(c,d,g){return _=m,_.apply(null,arguments)}function y(c,d){var g=Array.prototype.slice.call(arguments,1);return function(){var T=g.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,d){function g(){}g.prototype=d.prototype,c.Z=d.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(T,D,M){for(var j=Array(arguments.length-2),it=2;it<arguments.length;it++)j[it-2]=arguments[it];return d.prototype[D].apply(T,j)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function k(c){const d=c.length;if(d>0){const g=Array(d);for(let T=0;T<d;T++)g[T]=c[T];return g}return[]}function V(c,d){for(let T=1;T<arguments.length;T++){const D=arguments[T];var g=typeof D;if(g=g!="object"?g:D?Array.isArray(D)?"array":g:"null",g=="array"||g=="object"&&typeof D.length=="number"){g=c.length||0;const M=D.length||0;c.length=g+M;for(let j=0;j<M;j++)c[g+j]=D[j]}else c.push(D)}}class U{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function q(c){u.setTimeout(()=>{throw c},0)}function ot(){var c=C;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class ut{constructor(){this.h=this.g=null}add(d,g){const T=Q.get();T.set(d,g),this.h?this.h.next=T:this.g=T,this.h=T}}var Q=new U(()=>new vt,c=>c.reset());class vt{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let bt,Lt=!1,C=new ut,I=()=>{const c=Promise.resolve(void 0);bt=()=>{c.then(P)}};function P(){for(var c;c=ot();){try{c.h.call(c.g)}catch(g){q(g)}var d=Q;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}Lt=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};u.addEventListener("test",g,d),u.removeEventListener("test",g,d)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function Ct(c,d){S.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}w(Ct,S),Ct.prototype.init=function(c,d){const g=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(g=="mouseover"?d=c.fromElement:g=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ct.Z.h.call(this)},Ct.prototype.h=function(){Ct.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var qt="closure_listenable_"+(Math.random()*1e6|0),Qt=0;function gi(c,d,g,T,D){this.listener=c,this.proxy=null,this.src=d,this.type=g,this.capture=!!T,this.ha=D,this.key=++Qt,this.da=this.fa=!1}function tt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function yi(c,d,g){for(const T in c)d.call(g,c[T],T,c)}function et(c,d){for(const g in c)d.call(void 0,c[g],g,c)}function At(c){const d={};for(const g in c)d[g]=c[g];return d}const Jt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Yt(c,d){let g,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(g in T)c[g]=T[g];for(let M=0;M<Jt.length;M++)g=Jt[M],Object.prototype.hasOwnProperty.call(T,g)&&(c[g]=T[g])}}function Rt(c){this.src=c,this.g={},this.h=0}Rt.prototype.add=function(c,d,g,T,D){const M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);const j=at(c,d,T,D);return j>-1?(d=c[j],g||(d.fa=!1)):(d=new gi(d,this.src,M,!!T,D),d.fa=g,c.push(d)),d};function _t(c,d){const g=d.type;if(g in c.g){var T=c.g[g],D=Array.prototype.indexOf.call(T,d,void 0),M;(M=D>=0)&&Array.prototype.splice.call(T,D,1),M&&(tt(d),c.g[g].length==0&&(delete c.g[g],c.h--))}}function at(c,d,g,T){for(let D=0;D<c.length;++D){const M=c[D];if(!M.da&&M.listener==d&&M.capture==!!g&&M.ha==T)return D}return-1}var ge="closure_lm_"+(Math.random()*1e6|0),Ae={};function Qr(c,d,g,T,D){if(Array.isArray(d)){for(let M=0;M<d.length;M++)Qr(c,d[M],g,T,D);return null}return g=Ti(g),c&&c[qt]?c.J(d,g,f(T)?!!T.capture:!1,D):Jr(c,d,g,!1,T,D)}function Jr(c,d,g,T,D,M){if(!d)throw Error("Invalid event type");const j=f(D)?!!D.capture:!!D;let it=Ki(c);if(it||(c[ge]=it=new Rt(c)),g=it.add(d,g,T,j,M),g.proxy)return g;if(T=Yr(),g.proxy=T,T.src=c,T.listener=g,c.addEventListener)x||(D=j),D===void 0&&(D=!1),c.addEventListener(d.toString(),T,D);else if(c.attachEvent)c.attachEvent(fo(d.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Yr(){function c(g){return d.call(c.src,c.listener,g)}const d=po;return c}function Mn(c,d,g,T,D){if(Array.isArray(d))for(var M=0;M<d.length;M++)Mn(c,d[M],g,T,D);else T=f(T)?!!T.capture:!!T,g=Ti(g),c&&c[qt]?(c=c.i,M=String(d).toString(),M in c.g&&(d=c.g[M],g=at(d,g,T,D),g>-1&&(tt(d[g]),Array.prototype.splice.call(d,g,1),d.length==0&&(delete c.g[M],c.h--)))):c&&(c=Ki(c))&&(d=c.g[d.toString()],c=-1,d&&(c=at(d,g,T,D)),(g=c>-1?d[c]:null)&&vi(g))}function vi(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[qt])_t(d.i,c);else{var g=c.type,T=c.proxy;d.removeEventListener?d.removeEventListener(g,T,c.capture):d.detachEvent?d.detachEvent(fo(g),T):d.addListener&&d.removeListener&&d.removeListener(T),(g=Ki(d))?(_t(g,c),g.h==0&&(g.src=null,d[ge]=null)):tt(c)}}}function fo(c){return c in Ae?Ae[c]:Ae[c]="on"+c}function po(c,d){if(c.da)c=!0;else{d=new Ct(d,this);const g=c.listener,T=c.ha||c.src;c.fa&&vi(c),c=g.call(T,d)}return c}function Ki(c){return c=c[ge],c instanceof Rt?c:null}var wi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ti(c){return typeof c=="function"?c:(c[wi]||(c[wi]=function(d){return c.handleEvent(d)}),c[wi])}function $t(){R.call(this),this.i=new Rt(this),this.M=this,this.G=null}w($t,R),$t.prototype[qt]=!0,$t.prototype.removeEventListener=function(c,d,g,T){Mn(this,c,d,g,T)};function Wt(c,d){var g,T=c.G;if(T)for(g=[];T;T=T.G)g.push(T);if(c=c.M,T=d.type||d,typeof d=="string")d=new S(d,c);else if(d instanceof S)d.target=d.target||c;else{var D=d;d=new S(T,c),Yt(d,D)}D=!0;let M,j;if(g)for(j=g.length-1;j>=0;j--)M=d.g=g[j],D=On(M,T,!0,d)&&D;if(M=d.g=c,D=On(M,T,!0,d)&&D,D=On(M,T,!1,d)&&D,g)for(j=0;j<g.length;j++)M=d.g=g[j],D=On(M,T,!1,d)&&D}$t.prototype.N=function(){if($t.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const g=c.g[d];for(let T=0;T<g.length;T++)tt(g[T]);delete c.g[d],c.h--}}this.G=null},$t.prototype.J=function(c,d,g,T){return this.i.add(String(c),d,!1,g,T)},$t.prototype.K=function(c,d,g,T){return this.i.add(String(c),d,!0,g,T)};function On(c,d,g,T){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let M=0;M<d.length;++M){const j=d[M];if(j&&!j.da&&j.capture==g){const it=j.listener,yt=j.ha||j.src;j.fa&&_t(c.i,j),D=it.call(yt,T)!==!1&&D}}return D&&!T.defaultPrevented}function mo(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:u.setTimeout(c,d||0)}function Xr(c){c.g=mo(()=>{c.g=null,c.i&&(c.i=!1,Xr(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class nc extends R{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Xr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(c){R.call(this),this.h=c,this.g={}}w(Ei,R);var Qi=[];function ts(c){yi(c.g,function(d,g){this.g.hasOwnProperty(g)&&vi(d)},c),c.g={}}Ei.prototype.N=function(){Ei.Z.N.call(this),ts(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ji=u.JSON.stringify,ic=u.JSON.parse,_o=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function es(){}function go(){}var Vn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ii(){S.call(this,"d")}w(Ii,S);function Yi(){S.call(this,"c")}w(Yi,S);var cn={},Fn=null;function Xi(){return Fn=Fn||new $t}cn.Ia="serverreachability";function yo(c){S.call(this,cn.Ia,c)}w(yo,S);function Un(c){const d=Xi();Wt(d,new yo(d))}cn.STAT_EVENT="statevent";function ns(c,d){S.call(this,cn.STAT_EVENT,c),this.stat=d}w(ns,S);function Gt(c){const d=Xi();Wt(d,new ns(d,c))}cn.Ja="timingevent";function vo(c,d){S.call(this,cn.Ja,c),this.size=d}w(vo,S);function bi(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},d)}function Ai(){this.g=!0}Ai.prototype.ua=function(){this.g=!1};function rc(c,d,g,T,D,M){c.info(function(){if(c.g)if(M){var j="",it=M.split("&");for(let Tt=0;Tt<it.length;Tt++){var yt=it[Tt].split("=");if(yt.length>1){const Mt=yt[0];yt=yt[1];const ke=Mt.split("_");j=ke.length>=2&&ke[1]=="type"?j+(Mt+"="+yt+"&"):j+(Mt+"=redacted&")}}}else j=null;else j=M;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+d+`
`+g+`
`+j})}function sc(c,d,g,T,D,M,j){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+d+`
`+g+`
`+M+" "+j})}function Bn(c,d,g,T){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+oc(c,g)+(T?" "+T:"")})}function is(c,d){c.info(function(){return"TIMEOUT: "+d})}Ai.prototype.info=function(){};function oc(c,d){if(!c.g)return d;if(!d)return null;try{const M=JSON.parse(d);if(M){for(c=0;c<M.length;c++)if(Array.isArray(M[c])){var g=M[c];if(!(g.length<2)){var T=g[1];if(Array.isArray(T)&&!(T.length<1)){var D=T[0];if(D!="noop"&&D!="stop"&&D!="close")for(let j=1;j<T.length;j++)T[j]=""}}}}return Ji(M)}catch{return d}}var tr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},wo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},To;function he(){}w(he,es),he.prototype.g=function(){return new XMLHttpRequest},To=new he;function Z(c){return encodeURIComponent(String(c))}function Eo(c){var d=1;c=c.split(":");const g=[];for(;d>0&&c.length;)g.push(c.shift()),d--;return c.length&&g.push(c.join(":")),g}function Oe(c,d,g,T){this.j=c,this.i=d,this.l=g,this.S=T||1,this.V=new Ei(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new rs}function rs(){this.i=null,this.g="",this.h=!1}var ss={},Pi={};function er(c,d,g){c.M=1,c.A=Pt(ce(d)),c.u=g,c.R=!0,ln(c,null)}function ln(c,d){c.F=Date.now(),nr(c),c.B=ce(c.A);var g=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),ar(g.i,"t",T),c.C=0,g=c.j.L,c.h=new rs,c.g=vs(c.j,g?d:null,!c.u),c.P>0&&(c.O=new nc(_(c.Y,c,c.g),c.P)),d=c.V,g=c.g,T=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(Qi[0]=D.toString()),D=Qi);for(let M=0;M<D.length;M++){const j=Qr(g,D[M],T||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=c.J?At(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),Un(),rc(c.i,c.v,c.B,c.l,c.S,c.u)}Oe.prototype.ba=function(c){c=c.target;const d=this.O;d&&Ke(c)==3?d.j():this.Y(c)},Oe.prototype.Y=function(c){try{if(c==this.g)t:{const it=Ke(this.g),yt=this.g.ya(),Tt=this.g.ca();if(!(it<3)&&(it!=3||this.g&&(this.h.h||this.g.la()||ds(this.g)))){this.K||it!=4||yt==7||(yt==8||Tt<=0?Un(3):Un(2)),ir(this);var d=this.g.ca();this.X=d;var g=Io(this);if(this.o=d==200,sc(this.i,this.v,this.B,this.l,this.S,it,d),this.o){if(this.U&&!this.L){e:{if(this.g){var T,D=this.g;if((T=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var M=T;break e}}M=null}if(c=M)Bn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,os(this,c);else{this.o=!1,this.m=3,Gt(12),Pe(this),Si(this);break t}}if(this.R){c=!0;let Mt;for(;!this.K&&this.C<g.length;)if(Mt=ac(this,g),Mt==Pi){it==4&&(this.m=4,Gt(14),c=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==ss){this.m=4,Gt(15),Bn(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Bn(this.i,this.l,Mt,null),os(this,Mt);if(bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||g.length!=0||this.h.h||(this.m=1,Gt(16),c=!1),this.o=this.o&&c,!c)Bn(this.i,this.l,g,"[Invalid Chunked Response]"),Pe(this),Si(this);else if(g.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),gs(j),j.P=!0,Gt(11))}}else Bn(this.i,this.l,g,null),os(this,g);it==4&&Pe(this),this.o&&!this.K&&(it==4?ve(this.j,this):(this.o=!1,nr(this)))}else fs(this.g),d==400&&g.indexOf("Unknown SID")>0?(this.m=3,Gt(12)):(this.m=0,Gt(13)),Pe(this),Si(this)}}}catch{}finally{}};function Io(c){if(!bo(c))return c.g.la();const d=ds(c.g);if(d==="")return"";let g="";const T=d.length,D=Ke(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Pe(c),Si(c),"";c.h.i=new u.TextDecoder}for(let M=0;M<T;M++)c.h.h=!0,g+=c.h.i.decode(d[M],{stream:!(D&&M==T-1)});return d.length=0,c.h.g+=g,c.C=0,c.h.g}function bo(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function ac(c,d){var g=c.C,T=d.indexOf(`
`,g);return T==-1?Pi:(g=Number(d.substring(g,T)),isNaN(g)?ss:(T+=1,T+g>d.length?Pi:(d=d.slice(T,T+g),c.C=T+g,d)))}Oe.prototype.cancel=function(){this.K=!0,Pe(this)};function nr(c){c.T=Date.now()+c.H,Ao(c,c.H)}function Ao(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=bi(_(c.aa,c),d)}function ir(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Oe.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(is(this.i,this.B),this.M!=2&&(Un(),Gt(17)),Pe(this),this.m=2,Si(this)):Ao(this,this.T-c)};function Si(c){c.j.I==0||c.K||ve(c.j,c)}function Pe(c){ir(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,ts(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function os(c,d){try{var g=c.j;if(g.I!=0&&(g.g==c||Ci(g.h,c))){if(!c.L&&Ci(g.h,c)&&g.I==3){try{var T=g.Ba.g.parse(d)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){t:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)dr(g),ur(g);else break t;_s(g),Gt(18)}}else g.xa=D[1],0<g.xa-g.K&&D[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=bi(_(g.Va,g),6e3));Co(g.h)<=1&&g.ta&&(g.ta=void 0)}else Je(g,11)}else if((c.L||g.g==c)&&dr(g),!b(d))for(D=g.Ba.g.parse(d),d=0;d<D.length;d++){let Tt=D[d];const Mt=Tt[0];if(!(Mt<=g.K))if(g.K=Mt,Tt=Tt[1],g.I==2)if(Tt[0]=="c"){g.M=Tt[1],g.ba=Tt[2];const ke=Tt[3];ke!=null&&(g.ka=ke,g.j.info("VER="+g.ka));const Ue=Tt[4];Ue!=null&&(g.za=Ue,g.j.info("SVER="+g.za));const Le=Tt[5];Le!=null&&typeof Le=="number"&&Le>0&&(T=1.5*Le,g.O=T,g.j.info("backChannelRequestTimeoutMs_="+T)),T=g;const Ye=c.g;if(Ye){const mr=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mr){var M=T.h;M.g||mr.indexOf("spdy")==-1&&mr.indexOf("quic")==-1&&mr.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(un(M,M.h),M.h=null))}if(T.G){const _r=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;_r&&(T.wa=_r,G(T.J,T.G,_r))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),T=g;var j=c;if(T.na=ys(T,T.L?T.ba:null,T.W),j.L){as(T.h,j);var it=j,yt=T.O;yt&&(it.H=yt),it.D&&(ir(it),nr(it)),T.g=j}else ms(T);g.i.length>0&&Qe(g)}else Tt[0]!="stop"&&Tt[0]!="close"||Je(g,7);else g.I==3&&(Tt[0]=="stop"||Tt[0]=="close"?Tt[0]=="stop"?Je(g,7):ct(g):Tt[0]!="noop"&&g.l&&g.l.qa(Tt),g.A=0)}}Un(4)}catch{}}var cc=class{constructor(c,d){this.g=c,this.map=d}};function Po(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function So(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Co(c){return c.h?1:c.g?c.g.size:0}function Ci(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function un(c,d){c.g?c.g.add(d):c.h=d}function as(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Po.prototype.cancel=function(){if(this.i=cs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function cs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const g of c.g.values())d=d.concat(g.G);return d}return k(c.i)}var zn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pt(c,d){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const T=c[g].indexOf("=");let D,M=null;T>=0?(D=c[g].substring(0,T),M=c[g].substring(T+1)):D=c[g],d(D,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function gt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof gt?(this.l=c.l,Se(this,c.j),this.o=c.o,this.g=c.g,Ce(this,c.u),this.h=c.h,Ri(this,ki(c.i)),this.m=c.m):c&&(d=String(c).match(zn))?(this.l=!1,Se(this,d[1]||"",!0),this.o=hn(d[2]||""),this.g=hn(d[3]||"",!0),Ce(this,d[4]),this.h=hn(d[5]||"",!0),Ri(this,d[6]||"",!0),this.m=hn(d[7]||"")):(this.l=!1,this.i=new Ve(null,this.l))}gt.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(We(d,Ro,!0),":");var g=this.g;return(g||d=="file")&&(c.push("//"),(d=this.o)&&c.push(We(d,Ro,!0),"@"),c.push(Z(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(We(g,g.charAt(0)=="/"?dn:rr,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",We(g,fn)),c.join("")},gt.prototype.resolve=function(c){const d=ce(this);let g=!!c.j;g?Se(d,c.j):g=!!c.o,g?d.o=c.o:g=!!c.g,g?d.g=c.g:g=c.u!=null;var T=c.h;if(g)Ce(d,c.u);else if(g=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var D=d.h.lastIndexOf("/");D!=-1&&(T=d.h.slice(0,D+1)+T)}if(D=T,D==".."||D==".")T="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){T=D.lastIndexOf("/",0)==0,D=D.split("/");const M=[];for(let j=0;j<D.length;){const it=D[j++];it=="."?T&&j==D.length&&M.push(""):it==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),T&&j==D.length&&M.push("")):(M.push(it),T=!0)}T=M.join("/")}else T=D}return g?d.h=T:g=c.i.toString()!=="",g?Ri(d,ki(c.i)):g=!!c.m,g&&(d.m=c.m),d};function ce(c){return new gt(c)}function Se(c,d,g){c.j=g?hn(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Ce(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function Ri(c,d,g){d instanceof Ve?(c.i=d,ls(c.i,c.l)):(g||(d=We(d,Dt)),c.i=new Ve(d,c.l))}function G(c,d,g){c.i.set(d,g)}function Pt(c){return G(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function hn(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function We(c,d,g){return typeof c=="string"?(c=encodeURI(c).replace(d,de),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function de(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ro=/[#\/\?@]/g,rr=/[#\?:]/g,dn=/[#\?]/g,Dt=/[#\?@]/g,fn=/#/g;function Ve(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function ye(c){c.g||(c.g=new Map,c.h=0,c.i&&pt(c.i,function(d,g){c.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}i=Ve.prototype,i.add=function(c,d){ye(this),this.i=null,c=Ge(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(d),this.h+=1,this};function sr(c,d){ye(c),d=Ge(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function qn(c,d){return ye(c),d=Ge(c,d),c.g.has(d)}i.forEach=function(c,d){ye(this),this.g.forEach(function(g,T){g.forEach(function(D){c.call(d,D,T,this)},this)},this)};function or(c,d){ye(c);let g=[];if(typeof d=="string")qn(c,d)&&(g=g.concat(c.g.get(Ge(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)g=g.concat(c[d]);return g}i.set=function(c,d){return ye(this),this.i=null,c=Ge(this,c),qn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},i.get=function(c,d){return c?(c=or(this,c),c.length>0?String(c[0]):d):d};function ar(c,d,g){sr(c,d),g.length>0&&(c.i=null,c.g.set(Ge(c,d),k(g)),c.h+=g.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let T=0;T<d.length;T++){var g=d[T];const D=Z(g);g=or(this,g);for(let M=0;M<g.length;M++){let j=D;g[M]!==""&&(j+="="+Z(g[M])),c.push(j)}}return this.i=c.join("&")};function ki(c){const d=new Ve;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function Ge(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function ls(c,d){d&&!c.j&&(ye(c),c.i=null,c.g.forEach(function(g,T){const D=T.toLowerCase();T!=D&&(sr(this,T),ar(this,D,g))},c)),c.j=d}function cr(c,d){const g=new Ai;if(u.Image){const T=new Image;T.onload=y(Re,g,"TestLoadImage: loaded",!0,d,T),T.onerror=y(Re,g,"TestLoadImage: error",!1,d,T),T.onabort=y(Re,g,"TestLoadImage: abort",!1,d,T),T.ontimeout=y(Re,g,"TestLoadImage: timeout",!1,d,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else d(!1)}function ko(c,d){const g=new Ai,T=new AbortController,D=setTimeout(()=>{T.abort(),Re(g,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:T.signal}).then(M=>{clearTimeout(D),M.ok?Re(g,"TestPingServer: ok",!0,d):Re(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Re(g,"TestPingServer: error",!1,d)})}function Re(c,d,g,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(g)}catch{}}function lc(){this.g=new _o}function nt(c){this.i=c.Sb||null,this.h=c.ab||!1}w(nt,es),nt.prototype.g=function(){return new le(this.i,this.h)};function le(c,d){$t.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(le,$t),i=le.prototype,i.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,pn(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||u).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,pn(this)),this.g&&(this.readyState=3,pn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;It(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function It(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?jn(this):pn(this),this.readyState==3&&It(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,jn(this))},i.Na=function(c){this.g&&(this.response=c,jn(this))},i.ga=function(){this.g&&jn(this)};function jn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,pn(c)}i.setRequestHeader=function(c,d){this.A.append(c,d)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=d.next();return c.join(`\r
`)};function pn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(le.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function lr(c){let d="";return yi(c,function(g,T){d+=T,d+=":",d+=g,d+=`\r
`}),d}function Li(c,d,g){t:{for(T in g){var T=!1;break t}T=!0}T||(g=lr(g),typeof c=="string"?g!=null&&Z(g):G(c,d,g))}function wt(c){$t.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(wt,$t);var us=/^https?$/i,xi=["POST","PUT"];i=wt.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,d,g,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():To.g(),this.g.onreadystatechange=E(_(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(M){Vt(this,M);return}if(c=g||"",g=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)g.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const M of T.keys())g.set(M,T.get(M));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),D=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(xi,d,void 0)>=0)||T||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,j]of g)this.g.setRequestHeader(M,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(M){Vt(this,M)}};function Vt(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,Ze(c),Di(c)}function Ze(c){c.A||(c.A=!0,Wt(c,"complete"),Wt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Wt(this,"complete"),Wt(this,"abort"),Di(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),wt.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?hs(this):this.Xa())},i.Xa=function(){hs(this)};function hs(c){if(c.h&&typeof a<"u"){if(c.v&&Ke(c)==4)setTimeout(c.Ca.bind(c),0);else if(Wt(c,"readystatechange"),Ke(c)==4){c.h=!1;try{const M=c.ca();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var g;if(!(g=d)){var T;if(T=M===0){let j=String(c.D).match(zn)[1]||null;!j&&u.self&&u.self.location&&(j=u.self.location.protocol.slice(0,-1)),T=!us.test(j?j.toLowerCase():"")}g=T}if(g)Wt(c,"complete"),Wt(c,"success");else{c.o=6;try{var D=Ke(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Ze(c)}}finally{Di(c)}}}}function Di(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,d||Wt(c,"ready");try{g.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Ke(c){return c.g?c.g.readyState:0}i.ca=function(){try{return Ke(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),ic(d)}};function ds(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function fs(c){const d={};c=(c.g&&Ke(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(b(c[T]))continue;var g=Eo(c[T]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=d[D]||[];d[D]=M,M.push(g)}et(d,function(T){return T.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ni(c,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||d}function ps(c){this.za=0,this.i=[],this.j=new Ai,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ni("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ni("baseRetryDelayMs",5e3,c),this.Za=Ni("retryDelaySeedMs",1e4,c),this.Ta=Ni("forwardChannelMaxRetries",2,c),this.va=Ni("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Po(c&&c.concurrentRequestLimit),this.Ba=new lc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=ps.prototype,i.ka=8,i.I=1,i.connect=function(c,d,g,T){Gt(0),this.W=c,this.H=d||{},g&&T!==void 0&&(this.H.OSID=g,this.H.OAID=T),this.F=this.X,this.J=ys(this,null,this.W),Qe(this)};function ct(c){if(fe(c),c.I==3){var d=c.V++,g=ce(c.J);if(G(g,"SID",c.M),G(g,"RID",d),G(g,"TYPE","terminate"),mn(c,g),d=new Oe(c,c.j,d),d.M=2,d.A=Pt(ce(g)),g=!1,u.navigator&&u.navigator.sendBeacon)try{g=u.navigator.sendBeacon(d.A.toString(),"")}catch{}!g&&u.Image&&(new Image().src=d.A,g=!0),g||(d.g=vs(d.j,null),d.g.ea(d.A)),d.F=Date.now(),nr(d)}Fe(c)}function ur(c){c.g&&(gs(c),c.g.cancel(),c.g=null)}function fe(c){ur(c),c.v&&(u.clearTimeout(c.v),c.v=null),dr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Qe(c){if(!So(c.h)&&!c.m){c.m=!0;var d=c.Ea;bt||I(),Lt||(bt(),Lt=!0),C.add(d,c),c.D=0}}function Lo(c,d){return Co(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=bi(_(c.Ea,c,d),No(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Oe(this,this.j,c);let M=this.o;if(this.U&&(M?(M=At(M),Yt(M,this.U)):M=this.U),this.u!==null||this.R||(D.J=M,M=null),this.S)t:{for(var d=0,g=0;g<this.i.length;g++){e:{var T=this.i[g];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(d+=T,d>4096){d=g;break t}if(d===4096||g===this.i.length-1){d=g+1;break t}}d=1e3}else d=1e3;d=Do(this,D,d),g=ce(this.J),G(g,"RID",c),G(g,"CVER",22),this.G&&G(g,"X-HTTP-Session-Id",this.G),mn(this,g),M&&(this.R?d="headers="+Z(lr(M))+"&"+d:this.u&&Li(g,this.u,M)),un(this.h,D),this.Ra&&G(g,"TYPE","init"),this.S?(G(g,"$req",d),G(g,"SID","null"),D.U=!0,er(D,g,null)):er(D,g,d),this.I=2}}else this.I==3&&(c?xo(this,c):this.i.length==0||So(this.h)||xo(this))};function xo(c,d){var g;d?g=d.l:g=c.V++;const T=ce(c.J);G(T,"SID",c.M),G(T,"RID",g),G(T,"AID",c.K),mn(c,T),c.u&&c.o&&Li(T,c.u,c.o),g=new Oe(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),d&&(c.i=d.G.concat(c.i)),d=Do(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),un(c.h,g),er(g,T,d)}function mn(c,d){c.H&&yi(c.H,function(g,T){G(d,T,g)}),c.l&&yi({},function(g,T){G(d,T,g)})}function Do(c,d,g){g=Math.min(c.i.length,g);const T=c.l?_(c.l.Ka,c.l,c):null;t:{var D=c.i;let it=-1;for(;;){const yt=["count="+g];it==-1?g>0?(it=D[0].g,yt.push("ofs="+it)):it=0:yt.push("ofs="+it);let Tt=!0;for(let Mt=0;Mt<g;Mt++){var M=D[Mt].g;const ke=D[Mt].map;if(M-=it,M<0)it=Math.max(0,D[Mt].g-100),Tt=!1;else try{M="req"+M+"_"||"";try{var j=ke instanceof Map?ke:Object.entries(ke);for(const[Ue,Le]of j){let Ye=Le;f(Le)&&(Ye=Ji(Le)),yt.push(M+Ue+"="+encodeURIComponent(Ye))}}catch(Ue){throw yt.push(M+"type="+encodeURIComponent("_badmap")),Ue}}catch{T&&T(ke)}}if(Tt){j=yt.join("&");break t}}j=void 0}return c=c.i.splice(0,g),d.G=c,j}function ms(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;bt||I(),Lt||(bt(),Lt=!0),C.add(d,c),c.A=0}}function _s(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=bi(_(c.Da,c),No(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,hr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=bi(_(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Gt(10),ur(this),hr(this))};function gs(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function hr(c){c.g=new Oe(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=ce(c.na);G(d,"RID","rpc"),G(d,"SID",c.M),G(d,"AID",c.K),G(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&G(d,"TO",c.ia),G(d,"TYPE","xmlhttp"),mn(c,d),c.u&&c.o&&Li(d,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Pt(ce(d)),g.u=null,g.R=!0,ln(g,c)}i.Va=function(){this.C!=null&&(this.C=null,ur(this),_s(this),Gt(19))};function dr(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function ve(c,d){var g=null;if(c.g==d){dr(c),gs(c),c.g=null;var T=2}else if(Ci(c.h,d))g=d.G,as(c.h,d),T=1;else return;if(c.I!=0){if(d.o)if(T==1){g=d.u?d.u.length:0,d=Date.now()-d.F;var D=c.D;T=Xi(),Wt(T,new vo(T,g)),Qe(c)}else ms(c);else if(D=d.m,D==3||D==0&&d.X>0||!(T==1&&Lo(c,d)||T==2&&_s(c)))switch(g&&g.length>0&&(d=c.h,d.i=d.i.concat(g)),D){case 1:Je(c,5);break;case 4:Je(c,10);break;case 3:Je(c,6);break;default:Je(c,2)}}}function No(c,d){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*d}function Je(c,d){if(c.j.info("Error code "+d),d==2){var g=_(c.bb,c),T=c.Ua;const D=!T;T=new gt(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Se(T,"https"),Pt(T),D?cr(T.toString(),g):ko(T.toString(),g)}else Gt(2);c.I=0,c.l&&c.l.pa(d),Fe(c),fe(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Gt(2)):(this.j.info("Failed to ping google.com"),Gt(1))};function Fe(c){if(c.I=0,c.ja=[],c.l){const d=cs(c.h);(d.length!=0||c.i.length!=0)&&(V(c.ja,d),V(c.ja,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.oa()}}function ys(c,d,g){var T=g instanceof gt?ce(g):new gt(g);if(T.g!="")d&&(T.g=d+"."+T.g),Ce(T,T.u);else{var D=u.location;T=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const M=new gt(null);T&&Se(M,T),d&&(M.g=d),D&&Ce(M,D),g&&(M.h=g),T=M}return g=c.G,d=c.wa,g&&d&&G(T,g,d),G(T,"VER",c.ka),mn(c,T),T}function vs(c,d,g){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new wt(new nt({ab:g})):new wt(c.ma),d.Fa(c.L),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function fr(){}i=fr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function pr(){}pr.prototype.g=function(c,d){return new ie(c,d)};function ie(c,d){$t.call(this),this.g=new ps(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!b(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Hn(this)}w(ie,$t),ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ie.prototype.close=function(){ct(this.g)},ie.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Ji(c),c=g);d.i.push(new cc(d.Ya++,c)),d.I==3&&Qe(d)},ie.prototype.N=function(){this.g.l=null,delete this.j,ct(this.g),delete this.g,ie.Z.N.call(this)};function ws(c){Ii.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){t:{for(const g in d){c=g;break t}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}w(ws,Ii);function Mo(){Yi.call(this),this.status=1}w(Mo,Yi);function Hn(c){this.g=c}w(Hn,fr),Hn.prototype.ra=function(){Wt(this.g,"a")},Hn.prototype.qa=function(c){Wt(this.g,new ws(c))},Hn.prototype.pa=function(c){Wt(this.g,new Mo)},Hn.prototype.oa=function(){Wt(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,ie.prototype.send=ie.prototype.o,ie.prototype.open=ie.prototype.m,ie.prototype.close=ie.prototype.close,Dd=function(){return new pr},xd=function(){return Xi()},Ld=cn,Oc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},tr.NO_ERROR=0,tr.TIMEOUT=8,tr.HTTP_ERROR=6,ea=tr,wo.COMPLETE="complete",kd=wo,go.EventType=Vn,Vn.OPEN="a",Vn.CLOSE="b",Vn.ERROR="c",Vn.MESSAGE="d",$t.prototype.listen=$t.prototype.J,Rs=go,wt.prototype.listenOnce=wt.prototype.K,wt.prototype.getLastError=wt.prototype.Ha,wt.prototype.getLastErrorCode=wt.prototype.ya,wt.prototype.getStatus=wt.prototype.ca,wt.prototype.getResponseJson=wt.prototype.La,wt.prototype.getResponseText=wt.prototype.la,wt.prototype.send=wt.prototype.ea,wt.prototype.setWithCredentials=wt.prototype.Fa,Rd=wt}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let jr="12.13.0";function hg(i){jr=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zi=new cl("@firebase/firestore");function Ir(){return zi.logLevel}function $(i,...t){if(zi.logLevel<=ft.DEBUG){const e=t.map(hl);zi.debug(`Firestore (${jr}): ${i}`,...e)}}function Ln(i,...t){if(zi.logLevel<=ft.ERROR){const e=t.map(hl);zi.error(`Firestore (${jr}): ${i}`,...e)}}function qi(i,...t){if(zi.logLevel<=ft.WARN){const e=t.map(hl);zi.warn(`Firestore (${jr}): ${i}`,...e)}}function hl(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Nd(i,r,e)}function Nd(i,t,e){let r=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ln(r),new Error(r)}function Et(i,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,i||Nd(t,s,r)}function st(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Nn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(se.UNAUTHENTICATED))}shutdown(){}}class fg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class pg{constructor(t){this.t=t,this.currentUser=se.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Et(this.o===void 0,42304);let r=this.i;const s=m=>this.i!==r?(r=this.i,e(m)):Promise.resolve();let a=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Pn,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const m=a;t.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},f=m=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Pn)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Et(typeof r.accessToken=="string",31837,{l:r}),new Md(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Et(t===null||typeof t=="string",2055,{h:t}),new se(t)}}class mg{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=se.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class _g{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new mg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(se.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,we(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Et(this.o===void 0,3512);const r=a=>{a.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,$("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const s=a=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Et(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new qu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=yg(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<e&&(r+=t.charAt(s[a]%62))}return r}}function ht(i,t){return i<t?-1:i>t?1:0}function Vc(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const s=i.charAt(r),a=t.charAt(r);if(s!==a)return wc(s)===wc(a)?ht(s,a):wc(s)?1:-1}return ht(i.length,t.length)}const vg=55296,wg=57343;function wc(i){const t=i.charCodeAt(0);return t>=vg&&t<=wg}function Or(i,t,e){return i.length===t.length&&i.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju="__name__";class tn{constructor(t,e,r){e===void 0?e=0:e>t.length&&X(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&X(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return tn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const a=tn.compareSegments(t.get(s),e.get(s));if(a!==0)return a}return ht(t.length,e.length)}static compareSegments(t,e){const r=tn.isNumericId(t),s=tn.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?tn.extractNumericId(t).compare(tn.extractNumericId(e)):Vc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ti.fromString(t.substring(4,t.length-2))}}class St extends tn{construct(t,e,r){return new St(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new H(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new St(e)}static emptyPath(){return new St([])}}const Tg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ee extends tn{construct(t,e,r){return new ee(t,e,r)}static isValidIdentifier(t){return Tg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ee.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ju}static keyField(){return new ee([ju])}static fromServerFormat(t){const e=[];let r="",s=0;const a=()=>{if(r.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const f=t[s];if(f==="\\"){if(s+1===t.length)throw new H(F.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new H(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=m,s+=2}else f==="`"?(u=!u,s++):f!=="."||u?(r+=f,s++):(a(),s++)}if(a(),u)throw new H(F.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ee(e)}static emptyPath(){return new ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(St.fromString(t))}static fromName(t){return new K(St.fromString(t).popFirst(5))}static empty(){return new K(St.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&St.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return St.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new St(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(i,t,e){if(!e)throw new H(F.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Eg(i,t,e,r){if(t===!0&&r===!0)throw new H(F.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function Hu(i){if(!K.isDocumentKey(i))throw new H(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function $u(i){if(K.isDocumentKey(i))throw new H(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Vd(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Na(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":X(12329,{type:typeof i})}function Ie(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new H(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Na(i);throw new H(F.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */function zt(i,t){const e={typeString:i};return t&&(e.value=t),e}function Ys(i,t){if(!Vd(i))throw new H(F.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const u=i[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new H(F.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=-62135596800,Gu=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(t){return kt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Gu);return new kt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new H(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Wu)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new H(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gu}_compareTo(t){return this.seconds===t.seconds?ht(this.nanoseconds,t.nanoseconds):ht(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ys(t,kt._jsonSchema))return new kt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Wu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:zt("string",kt._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static fromTimestamp(t){return new rt(t)}static min(){return new rt(new kt(0,0))}static max(){return new rt(new kt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Bs=-1;function Ig(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,s=rt.fromTimestamp(r===1e9?new kt(e+1,0):new kt(e,r));return new ii(s,K.empty(),t)}function bg(i){return new ii(i.readTime,i.key,Bs)}class ii{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ii(rt.min(),K.empty(),Bs)}static max(){return new ii(rt.max(),K.empty(),Bs)}}function Ag(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=K.comparator(i.documentKey,t.documentKey),e!==0?e:ht(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(i){if(i.code!==F.FAILED_PRECONDITION||i.message!==Pg)throw i;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new B((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof B?e:B.resolve(e)}catch(e){return B.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):B.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):B.reject(e)}static resolve(t){return new B((e,r)=>{e(t)})}static reject(t){return new B((e,r)=>{r(t)})}static waitFor(t){return new B((e,r)=>{let s=0,a=0,u=!1;t.forEach(f=>{++s,f.next(()=>{++a,u&&a===s&&e()},m=>r(m))}),u=!0,a===s&&e()})}static or(t){let e=B.resolve(!1);for(const r of t)e=e.next(s=>s?B.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,a)=>{r.push(e.call(this,s,a))}),this.waitFor(r)}static mapArray(t,e){return new B((r,s)=>{const a=t.length,u=new Array(a);let f=0;for(let m=0;m<a;m++){const _=m;e(t[_]).next(y=>{u[_]=y,++f,f===a&&r(u)},y=>s(y))}})}static doWhile(t,e){return new B((r,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):r()};a()})}}function Cg(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function $r(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ma{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ma.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=-1;function Oa(i){return i==null}function ma(i){return i===0&&1/i==-1/0}function Rg(i){return typeof i=="number"&&Number.isInteger(i)&&!ma(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="";function kg(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=Zu(t)),t=Lg(i.get(e),t);return Zu(t)}function Lg(i,t){let e=t;const r=i.length;for(let s=0;s<r;s++){const a=i.charAt(s);switch(a){case"\0":e+="";break;case Fd:e+="";break;default:e+=a}}return e}function Zu(i){return i+Fd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function hi(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Ud(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e){this.comparator=t,this.root=e||te.EMPTY}insert(t,e){return new xt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,te.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,te.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zo(this.root,t,this.comparator,!0)}}class Zo{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class te{constructor(t,e,r,s,a){this.key=t,this.value=e,this.color=r??te.RED,this.left=s??te.EMPTY,this.right=a??te.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,a){return new te(t??this.key,e??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const a=r(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,r),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return te.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return te.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,te.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw X(27949);return t+(this.isRed()?0:1)}}te.EMPTY=null,te.RED=!0,te.BLACK=!1;te.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(t,e,r,s,a){return this}insert(t,e,r){return new te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Qu(this.data.getIterator())}getIteratorFrom(t){return new Qu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class Qu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.fields=t,t.sort(ee.comparator)}static empty(){return new Te([])}unionWith(t){let e=new jt(ee.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Te(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Or(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Bd("Invalid base64 string: "+a):a}}(t);return new ne(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new ne(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ht(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const xg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ri(i){if(Et(!!i,39018),typeof i=="string"){let t=0;const e=xg.exec(i);if(Et(!!e,46558,{timestamp:i}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ot(i.seconds),nanos:Ot(i.nanos)}}function Ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function si(i){return typeof i=="string"?ne.fromBase64String(i):ne.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="server_timestamp",qd="__type__",jd="__previous_value__",Hd="__local_write_time__";function pl(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[qd])==null?void 0:r.stringValue)===zd}function Va(i){const t=i.mapValue.fields[jd];return pl(t)?Va(t):t}function zs(i){const t=ri(i.mapValue.fields[Hd].timestampValue);return new kt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(t,e,r,s,a,u,f,m,_,y,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=_,this.isUsingEmulator=y,this.apiKey=w}}const _a="(default)";class qs{constructor(t,e){this.projectId=t,this.database=e||_a}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database===_a}isEqual(t){return t instanceof qs&&t.projectId===this.projectId&&t.database===this.database}}function Ng(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new H(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(i.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="__type__",Mg="__max__",Ko={mapValue:{}},Wd="__vector__",ga="value";function oi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?pl(i)?4:Vg(i)?9007199254740991:Og(i)?10:11:X(28295,{value:i})}function on(i,t){if(i===t)return!0;const e=oi(i);if(e!==oi(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return zs(i).isEqual(zs(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ri(s.timestampValue),f=ri(a.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(s,a){return si(s.bytesValue).isEqual(si(a.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(s,a){return Ot(s.geoPointValue.latitude)===Ot(a.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(a.geoPointValue.longitude)}(i,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Ot(s.integerValue)===Ot(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Ot(s.doubleValue),f=Ot(a.doubleValue);return u===f?ma(u)===ma(f):isNaN(u)&&isNaN(f)}return!1}(i,t);case 9:return Or(i.arrayValue.values||[],t.arrayValue.values||[],on);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},f=a.mapValue.fields||{};if(Ku(u)!==Ku(f))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(f[m]===void 0||!on(u[m],f[m])))return!1;return!0}(i,t);default:return X(52216,{left:i})}}function js(i,t){return(i.values||[]).find(e=>on(e,t))!==void 0}function Vr(i,t){if(i===t)return 0;const e=oi(i),r=oi(t);if(e!==r)return ht(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ht(i.booleanValue,t.booleanValue);case 2:return function(a,u){const f=Ot(a.integerValue||a.doubleValue),m=Ot(u.integerValue||u.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(i,t);case 3:return Ju(i.timestampValue,t.timestampValue);case 4:return Ju(zs(i),zs(t));case 5:return Vc(i.stringValue,t.stringValue);case 6:return function(a,u){const f=si(a),m=si(u);return f.compareTo(m)}(i.bytesValue,t.bytesValue);case 7:return function(a,u){const f=a.split("/"),m=u.split("/");for(let _=0;_<f.length&&_<m.length;_++){const y=ht(f[_],m[_]);if(y!==0)return y}return ht(f.length,m.length)}(i.referenceValue,t.referenceValue);case 8:return function(a,u){const f=ht(Ot(a.latitude),Ot(u.latitude));return f!==0?f:ht(Ot(a.longitude),Ot(u.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return Yu(i.arrayValue,t.arrayValue);case 10:return function(a,u){var E,k,V,U;const f=a.fields||{},m=u.fields||{},_=(E=f[ga])==null?void 0:E.arrayValue,y=(k=m[ga])==null?void 0:k.arrayValue,w=ht(((V=_==null?void 0:_.values)==null?void 0:V.length)||0,((U=y==null?void 0:y.values)==null?void 0:U.length)||0);return w!==0?w:Yu(_,y)}(i.mapValue,t.mapValue);case 11:return function(a,u){if(a===Ko.mapValue&&u===Ko.mapValue)return 0;if(a===Ko.mapValue)return 1;if(u===Ko.mapValue)return-1;const f=a.fields||{},m=Object.keys(f),_=u.fields||{},y=Object.keys(_);m.sort(),y.sort();for(let w=0;w<m.length&&w<y.length;++w){const E=Vc(m[w],y[w]);if(E!==0)return E;const k=Vr(f[m[w]],_[y[w]]);if(k!==0)return k}return ht(m.length,y.length)}(i.mapValue,t.mapValue);default:throw X(23264,{he:e})}}function Ju(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ht(i,t);const e=ri(i),r=ri(t),s=ht(e.seconds,r.seconds);return s!==0?s:ht(e.nanos,r.nanos)}function Yu(i,t){const e=i.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const a=Vr(e[s],r[s]);if(a)return a}return ht(e.length,r.length)}function Fr(i){return Fc(i)}function Fc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=ri(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return si(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return K.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",s=!0;for(const a of e.values||[])s?s=!1:r+=",",r+=Fc(a);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Fc(e.fields[u])}`;return s+"}"}(i.mapValue):X(61005,{value:i})}function na(i){switch(oi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Va(i);return t?16+na(t):16;case 5:return 2*i.stringValue.length;case 6:return si(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+na(a),0)}(i.arrayValue);case 10:case 11:return function(r){let s=0;return hi(r.fields,(a,u)=>{s+=a.length+na(u)}),s}(i.mapValue);default:throw X(13486,{value:i})}}function Xu(i,t){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`}}function Uc(i){return!!i&&"integerValue"in i}function ml(i){return!!i&&"arrayValue"in i}function th(i){return!!i&&"nullValue"in i}function eh(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ia(i){return!!i&&"mapValue"in i}function Og(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[$d])==null?void 0:r.stringValue)===Wd}function Ds(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return hi(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ds(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ds(i.arrayValue.values[e]);return t}return{...i}}function Vg(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Mg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.value=t}static empty(){return new _e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ia(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ds(e)}setAll(t){let e=ee.emptyPath(),r={},s=[];t.forEach((u,f)=>{if(!e.isImmediateParentOf(f)){const m=this.getFieldsMap(e);this.applyChanges(m,r,s),r={},s=[],e=f.popLast()}u?r[f.lastSegment()]=Ds(u):s.push(f.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,s)}delete(t){const e=this.field(t.popLast());ia(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return on(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){hi(e,(s,a)=>t[s]=a);for(const s of r)delete t[s]}clone(){return new _e(Ds(this.value))}}function Gd(i){const t=[];return hi(i.fields,(e,r)=>{const s=new ee([e]);if(ia(r)){const a=Gd(r.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new Te(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,e,r,s,a,u,f){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=f}static newInvalidDocument(t){return new oe(t,0,rt.min(),rt.min(),rt.min(),_e.empty(),0)}static newFoundDocument(t,e,r,s){return new oe(t,1,e,rt.min(),r,s,0)}static newNoDocument(t,e){return new oe(t,2,e,rt.min(),rt.min(),_e.empty(),0)}static newUnknownDocument(t,e){return new oe(t,3,e,rt.min(),rt.min(),_e.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(rt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ya{constructor(t,e){this.position=t,this.inclusive=e}}function nh(i,t,e){let r=0;for(let s=0;s<i.position.length;s++){const a=t[s],u=i.position[s];if(a.field.isKeyField()?r=K.comparator(K.fromName(u.referenceValue),e.key):r=Vr(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function ih(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!on(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Hs{constructor(t,e="asc"){this.field=t,this.dir=e}}function Fg(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class Zd{}class Bt extends Zd{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Bg(t,e,r):e==="array-contains"?new jg(t,r):e==="in"?new Hg(t,r):e==="not-in"?new $g(t,r):e==="array-contains-any"?new Wg(t,r):new Bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new zg(t,r):new qg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Vr(e,this.value)):e!==null&&oi(this.value)===oi(e)&&this.matchesComparison(Vr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $e extends Zd{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new $e(t,e)}matches(t){return Kd(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Kd(i){return i.op==="and"}function Qd(i){return Ug(i)&&Kd(i)}function Ug(i){for(const t of i.filters)if(t instanceof $e)return!1;return!0}function Bc(i){if(i instanceof Bt)return i.field.canonicalString()+i.op.toString()+Fr(i.value);if(Qd(i))return i.filters.map(t=>Bc(t)).join(",");{const t=i.filters.map(e=>Bc(e)).join(",");return`${i.op}(${t})`}}function Jd(i,t){return i instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.field.isEqual(s.field)&&on(r.value,s.value)}(i,t):i instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,f)=>a&&Jd(u,s.filters[f]),!0):!1}(i,t):void X(19439)}function Yd(i){return i instanceof Bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Fr(e.value)}`}(i):i instanceof $e?function(e){return e.op.toString()+" {"+e.getFilters().map(Yd).join(" ,")+"}"}(i):"Filter"}class Bg extends Bt{constructor(t,e,r){super(t,e,r),this.key=K.fromName(r.referenceValue)}matches(t){const e=K.comparator(t.key,this.key);return this.matchesComparison(e)}}class zg extends Bt{constructor(t,e){super(t,"in",e),this.keys=Xd("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class qg extends Bt{constructor(t,e){super(t,"not-in",e),this.keys=Xd("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Xd(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>K.fromName(r.referenceValue))}class jg extends Bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ml(e)&&js(e.arrayValue,this.value)}}class Hg extends Bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&js(this.value.arrayValue,e)}}class $g extends Bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!js(this.value.arrayValue,e)}}class Wg extends Bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ml(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>js(this.value.arrayValue,r))}}/**
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
 */class Gg{constructor(t,e=null,r=[],s=[],a=null,u=null,f=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=f,this.Te=null}}function rh(i,t=null,e=[],r=[],s=null,a=null,u=null){return new Gg(i,t,e,r,s,a,u)}function _l(i){const t=st(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Bc(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Oa(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Fr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Fr(r)).join(",")),t.Te=e}return t.Te}function gl(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!Fg(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!Jd(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!ih(i.startAt,t.startAt)&&ih(i.endAt,t.endAt)}function zc(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,e=null,r=[],s=[],a=null,u="F",f=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=f,this.endAt=m,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Zg(i,t,e,r,s,a,u,f){return new Wr(i,t,e,r,s,a,u,f)}function Fa(i){return new Wr(i)}function sh(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Kg(i){return K.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function tf(i){return i.collectionGroup!==null}function Ns(i){const t=st(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new jt(ee.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(_=>{_.isInequality()&&(f=f.add(_.field))})}),f})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new Hs(a,r))}),e.has(ee.keyField().canonicalString())||t.Ie.push(new Hs(ee.keyField(),r))}return t.Ie}function en(i){const t=st(i);return t.Ee||(t.Ee=Qg(t,Ns(i))),t.Ee}function Qg(i,t){if(i.limitType==="F")return rh(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Hs(s.field,a)});const e=i.endAt?new ya(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new ya(i.startAt.position,i.startAt.inclusive):null;return rh(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function qc(i,t){const e=i.filters.concat([t]);return new Wr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),e,i.limit,i.limitType,i.startAt,i.endAt)}function Jg(i,t){const e=i.explicitOrderBy.concat([t]);return new Wr(i.path,i.collectionGroup,e,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function jc(i,t,e){return new Wr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Ua(i,t){return gl(en(i),en(t))&&i.limitType===t.limitType}function ef(i){return`${_l(en(i))}|lt:${i.limitType}`}function br(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Yd(s)).join(", ")}]`),Oa(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Fr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Fr(s)).join(",")),`Target(${r})`}(en(i))}; limitType=${i.limitType})`}function Ba(i,t){return t.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):K.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(i,t)&&function(r,s){for(const a of Ns(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(i,t)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(i,t)&&function(r,s){return!(r.startAt&&!function(u,f,m){const _=nh(u,f,m);return u.inclusive?_<=0:_<0}(r.startAt,Ns(r),s)||r.endAt&&!function(u,f,m){const _=nh(u,f,m);return u.inclusive?_>=0:_>0}(r.endAt,Ns(r),s))}(i,t)}function Yg(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function nf(i){return(t,e)=>{let r=!1;for(const s of Ns(i)){const a=Xg(s,t,e);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function Xg(i,t,e){const r=i.field.isKeyField()?K.comparator(t.key,e.key):function(a,u,f){const m=u.data.field(a),_=f.data.field(a);return m!==null&&_!==null?Vr(m,_):X(42886)}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return X(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){hi(this.inner,(e,r)=>{for(const[s,a]of r)t(s,a)})}isEmpty(){return Ud(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new xt(K.comparator);function xn(){return ty}const rf=new xt(K.comparator);function ks(...i){let t=rf;for(const e of i)t=t.insert(e.key,e);return t}function sf(i){let t=rf;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Oi(){return Ms()}function of(){return Ms()}function Ms(){return new Wi(i=>i.toString(),(i,t)=>i.isEqual(t))}const ey=new xt(K.comparator),ny=new jt(K.comparator);function dt(...i){let t=ny;for(const e of i)t=t.add(e);return t}const iy=new jt(ht);function ry(){return iy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(t)?"-0":t}}function af(i){return{integerValue:""+i}}function sy(i,t){return Rg(t)?af(t):yl(i,t)}/**
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
 */class za{constructor(){this._=void 0}}function oy(i,t,e){return i instanceof $s?function(s,a){const u={fields:{[qd]:{stringValue:zd},[Hd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&pl(a)&&(a=Va(a)),a&&(u.fields[jd]=a),{mapValue:u}}(e,t):i instanceof Ur?lf(i,t):i instanceof Br?uf(i,t):function(s,a){const u=cf(s,a),f=oh(u)+oh(s.Ae);return Uc(u)&&Uc(s.Ae)?af(f):yl(s.serializer,f)}(i,t)}function ay(i,t,e){return i instanceof Ur?lf(i,t):i instanceof Br?uf(i,t):e}function cf(i,t){return i instanceof va?function(r){return Uc(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class $s extends za{}class Ur extends za{constructor(t){super(),this.elements=t}}function lf(i,t){const e=hf(t);for(const r of i.elements)e.some(s=>on(s,r))||e.push(r);return{arrayValue:{values:e}}}class Br extends za{constructor(t){super(),this.elements=t}}function uf(i,t){let e=hf(t);for(const r of i.elements)e=e.filter(s=>!on(s,r));return{arrayValue:{values:e}}}class va extends za{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function oh(i){return Ot(i.integerValue||i.doubleValue)}function hf(i){return ml(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.field=t,this.transform=e}}function cy(i,t){return i.field.isEqual(t.field)&&function(r,s){return r instanceof Ur&&s instanceof Ur||r instanceof Br&&s instanceof Br?Or(r.elements,s.elements,on):r instanceof va&&s instanceof va?on(r.Ae,s.Ae):r instanceof $s&&s instanceof $s}(i.transform,t.transform)}class ly{constructor(t,e){this.version=t,this.transformResults=e}}class qe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ra(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class qa{}function df(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new wl(i.key,qe.none()):new Xs(i.key,i.data,qe.none());{const e=i.data,r=_e.empty();let s=new jt(ee.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new di(i.key,r,new Te(s.toArray()),qe.none())}}function uy(i,t,e){i instanceof Xs?function(s,a,u){const f=s.value.clone(),m=ch(s.fieldTransforms,a,u.transformResults);f.setAll(m),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(i,t,e):i instanceof di?function(s,a,u){if(!ra(s.precondition,a))return void a.convertToUnknownDocument(u.version);const f=ch(s.fieldTransforms,a,u.transformResults),m=a.data;m.setAll(ff(s)),m.setAll(f),a.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(i,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Os(i,t,e,r){return i instanceof Xs?function(a,u,f,m){if(!ra(a.precondition,u))return f;const _=a.value.clone(),y=lh(a.fieldTransforms,m,u);return _.setAll(y),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null}(i,t,e,r):i instanceof di?function(a,u,f,m){if(!ra(a.precondition,u))return f;const _=lh(a.fieldTransforms,m,u),y=u.data;return y.setAll(ff(a)),y.setAll(_),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),f===null?null:f.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(i,t,e,r):function(a,u,f){return ra(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(i,t,e)}function hy(i,t){let e=null;for(const r of i.fieldTransforms){const s=t.data.field(r.field),a=cf(r.transform,s||null);a!=null&&(e===null&&(e=_e.empty()),e.set(r.field,a))}return e||null}function ah(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Or(r,s,(a,u)=>cy(a,u))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class Xs extends qa{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class di extends qa{constructor(t,e,r,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function ff(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function ch(i,t,e){const r=new Map;Et(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let s=0;s<e.length;s++){const a=i[s],u=a.transform,f=t.data.field(a.field);r.set(a.field,ay(u,f,e[s]))}return r}function lh(i,t,e){const r=new Map;for(const s of i){const a=s.transform,u=e.data.field(s.field);r.set(s.field,oy(a,u,t))}return r}class wl extends qa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dy extends qa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&uy(a,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Os(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Os(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=of();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let f=this.applyToLocalView(u,a.mutatedFields);f=e.has(s.key)?null:f;const m=df(u,f);m!==null&&r.set(s.key,m),u.isValidDocument()||u.convertToNoDocument(rt.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&Or(this.mutations,t.mutations,(e,r)=>ah(e,r))&&Or(this.baseMutations,t.baseMutations,(e,r)=>ah(e,r))}}class Tl{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Et(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return ey}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new Tl(t,e,r,s)}}/**
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
 */class py{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class my{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut,mt;function _y(i){switch(i){case F.OK:return X(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return X(15467,{code:i})}}function pf(i){if(i===void 0)return Ln("GRPC error has no .code"),F.UNKNOWN;switch(i){case Ut.OK:return F.OK;case Ut.CANCELLED:return F.CANCELLED;case Ut.UNKNOWN:return F.UNKNOWN;case Ut.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ut.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ut.INTERNAL:return F.INTERNAL;case Ut.UNAVAILABLE:return F.UNAVAILABLE;case Ut.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ut.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ut.NOT_FOUND:return F.NOT_FOUND;case Ut.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ut.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ut.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ut.ABORTED:return F.ABORTED;case Ut.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ut.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ut.DATA_LOSS:return F.DATA_LOSS;default:return X(39323,{code:i})}}(mt=Ut||(Ut={}))[mt.OK=0]="OK",mt[mt.CANCELLED=1]="CANCELLED",mt[mt.UNKNOWN=2]="UNKNOWN",mt[mt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mt[mt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mt[mt.NOT_FOUND=5]="NOT_FOUND",mt[mt.ALREADY_EXISTS=6]="ALREADY_EXISTS",mt[mt.PERMISSION_DENIED=7]="PERMISSION_DENIED",mt[mt.UNAUTHENTICATED=16]="UNAUTHENTICATED",mt[mt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mt[mt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mt[mt.ABORTED=10]="ABORTED",mt[mt.OUT_OF_RANGE=11]="OUT_OF_RANGE",mt[mt.UNIMPLEMENTED=12]="UNIMPLEMENTED",mt[mt.INTERNAL=13]="INTERNAL",mt[mt.UNAVAILABLE=14]="UNAVAILABLE",mt[mt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gy(){return new TextEncoder}/**
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
 */const yy=new ti([4294967295,4294967295],0);function uh(i){const t=gy().encode(i),e=new Cd;return e.update(t),new Uint8Array(e.digest())}function hh(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new ti([e,r],0),new ti([s,a],0)]}class El{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ls(`Invalid padding: ${e}`);if(r<0)throw new Ls(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ls(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ls(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ti.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ti.fromNumber(r)));return s.compare(yy)===1&&(s=new ti([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=uh(t),[r,s]=hh(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);if(!this.we(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new El(a,s,e);return r.forEach(f=>u.insert(f)),u}insert(t){if(this.ge===0)return;const e=uh(t),[r,s]=hh(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e,r,s,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,eo.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new to(rt.min(),s,new xt(ht),xn(),dt())}}class eo{constructor(t,e,r,s,a){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new eo(r,e,dt(),dt(),dt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class mf{constructor(t,e){this.targetId=t,this.Ce=e}}class _f{constructor(t,e,r=ne.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class dh{constructor(){this.ve=0,this.Fe=fh(),this.Me=ne.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=dt(),e=dt(),r=dt();return this.Fe.forEach((s,a)=>{switch(a){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:X(38017,{changeType:a})}}),new eo(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=fh()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,Et(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class vy{constructor(t){this.Ge=t,this.ze=new Map,this.je=xn(),this.Je=Qo(),this.He=Qo(),this.Ze=new xt(ht)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:X(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const a=s.target;if(zc(a))if(r===0){const u=new K(a.path);this.et(e,u,oe.newNoDocument(u,rt.min()))}else Et(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const f=this.ut(t),m=f?this.ct(f,t,u):1;if(m!==0){this.it(e);const _=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,_)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=e;let u,f;try{u=si(r).toUint8Array()}catch(m){if(m instanceof Bd)return qi("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new El(u,s,a)}catch(m){return qi(m instanceof Ls?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.ge===0?null:f}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(a=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(f)||(this.et(e,a,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((a,u)=>{const f=this.ot(u);if(f){if(a.current&&zc(f.target)){const m=new K(f.target.path);this.It(m).has(u)||this.Et(u,m)||this.et(u,m,oe.newNoDocument(m,t))}a.Be&&(e.set(u,a.ke()),a.Ke())}});let r=dt();this.He.forEach((a,u)=>{let f=!0;u.forEachWhile(m=>{const _=this.ot(m);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(a))}),this.je.forEach((a,u)=>u.setReadTime(t));const s=new to(t,e,this.Ze,this.je,r);return this.je=xn(),this.Je=Qo(),this.He=Qo(),this.Ze=new xt(ht),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new dh,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new jt(ht),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new jt(ht),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||$("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new dh),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Qo(){return new xt(K.comparator)}function fh(){return new xt(K.comparator)}const wy={asc:"ASCENDING",desc:"DESCENDING"},Ty={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ey={and:"AND",or:"OR"};class Iy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Hc(i,t){return i.useProto3Json||Oa(t)?t:{value:t}}function wa(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gf(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function by(i,t){return wa(i,t.toTimestamp())}function nn(i){return Et(!!i,49232),rt.fromTimestamp(function(e){const r=ri(e);return new kt(r.seconds,r.nanos)}(i))}function Il(i,t){return $c(i,t).canonicalString()}function $c(i,t){const e=function(s){return new St(["projects",s.projectId,"databases",s.database])}(i).child("documents");return t===void 0?e:e.child(t)}function yf(i){const t=St.fromString(i);return Et(If(t),10190,{key:t.toString()}),t}function Wc(i,t){return Il(i.databaseId,t.path)}function Tc(i,t){const e=yf(t);if(e.get(1)!==i.databaseId.projectId)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new H(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new K(wf(e))}function vf(i,t){return Il(i.databaseId,t)}function Ay(i){const t=yf(i);return t.length===4?St.emptyPath():wf(t)}function Gc(i){return new St(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function wf(i){return Et(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function ph(i,t,e){return{name:Wc(i,t),fields:e.value.mapValue.fields}}function Py(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:X(39313,{state:_})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],a=function(_,y){return _.useProto3Json?(Et(y===void 0||typeof y=="string",58123),ne.fromBase64String(y||"")):(Et(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ne.fromUint8Array(y||new Uint8Array))}(i,t.targetChange.resumeToken),u=t.targetChange.cause,f=u&&function(_){const y=_.code===void 0?F.UNKNOWN:pf(_.code);return new H(y,_.message||"")}(u);e=new _f(r,s,a,f||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Tc(i,r.document.name),a=nn(r.document.updateTime),u=r.document.createTime?nn(r.document.createTime):rt.min(),f=new _e({mapValue:{fields:r.document.fields}}),m=oe.newFoundDocument(s,a,u,f),_=r.targetIds||[],y=r.removedTargetIds||[];e=new sa(_,y,m.key,m)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Tc(i,r.document),a=r.readTime?nn(r.readTime):rt.min(),u=oe.newNoDocument(s,a),f=r.removedTargetIds||[];e=new sa([],f,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Tc(i,r.document),a=r.removedTargetIds||[];e=new sa([],a,s,null)}else{if(!("filter"in t))return X(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new my(s,a),f=r.targetId;e=new mf(f,u)}}return e}function Sy(i,t){let e;if(t instanceof Xs)e={update:ph(i,t.key,t.value)};else if(t instanceof wl)e={delete:Wc(i,t.key)};else if(t instanceof di)e={update:ph(i,t.key,t.data),updateMask:Oy(t.fieldMask)};else{if(!(t instanceof dy))return X(16599,{dt:t.type});e={verify:Wc(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(a,u){const f=u.transform;if(f instanceof $s)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ur)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Br)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof va)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw X(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:by(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:X(27497)}(i,t.precondition)),e}function Cy(i,t){return i&&i.length>0?(Et(t!==void 0,14353),i.map(e=>function(s,a){let u=s.updateTime?nn(s.updateTime):nn(a);return u.isEqual(rt.min())&&(u=nn(a)),new ly(u,s.transformResults||[])}(e,t))):[]}function Ry(i,t){return{documents:[vf(i,t.path)]}}function ky(i,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=vf(i,s);const a=function(_){if(_.length!==0)return Ef($e.create(_,"and"))}(t.filters);a&&(e.structuredQuery.where=a);const u=function(_){if(_.length!==0)return _.map(y=>function(E){return{field:Ar(E.field),direction:Dy(E.dir)}}(y))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const f=Hc(i,t.limit);return f!==null&&(e.structuredQuery.limit=f),t.startAt&&(e.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{ft:e,parent:s}}function Ly(i){let t=Ay(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Et(r===1,65062);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let a=[];e.where&&(a=function(w){const E=Tf(w);return E instanceof $e&&Qd(E)?E.getFilters():[E]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(E=>function(V){return new Hs(Pr(V.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(E))}(e.orderBy));let f=null;e.limit&&(f=function(w){let E;return E=typeof w=="object"?w.value:w,Oa(E)?null:E}(e.limit));let m=null;e.startAt&&(m=function(w){const E=!!w.before,k=w.values||[];return new ya(k,E)}(e.startAt));let _=null;return e.endAt&&(_=function(w){const E=!w.before,k=w.values||[];return new ya(k,E)}(e.endAt)),Zg(t,s,u,a,f,"F",m,_)}function xy(i,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Tf(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Pr(e.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pr(e.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Pr(e.unaryFilter.field);return Bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pr(e.unaryFilter.field);return Bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}}(i):i.fieldFilter!==void 0?function(e){return Bt.create(Pr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return $e.create(e.compositeFilter.filters.map(r=>Tf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}}(e.compositeFilter.op))}(i):X(30097,{filter:i})}function Dy(i){return wy[i]}function Ny(i){return Ty[i]}function My(i){return Ey[i]}function Ar(i){return{fieldPath:i.canonicalString()}}function Pr(i){return ee.fromServerFormat(i.fieldPath)}function Ef(i){return i instanceof Bt?function(e){if(e.op==="=="){if(eh(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NAN"}};if(th(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(eh(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NOT_NAN"}};if(th(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(e.field),op:Ny(e.op),value:e.value}}}(i):i instanceof $e?function(e){const r=e.getFilters().map(s=>Ef(s));return r.length===1?r[0]:{compositeFilter:{op:My(e.op),filters:r}}}(i):X(54877,{filter:i})}function Oy(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function If(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function bf(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,r,s,a=rt.min(),u=rt.min(),f=ne.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(t){return new In(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t){this.yt=t}}function Fy(i){const t=Ly({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?jc(t,t.limit,"L"):t}/**
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
 */class Uy{constructor(){this.bn=new By}addToCollectionParentIndex(t,e){return this.bn.add(e),B.resolve()}getCollectionParents(t,e){return B.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return B.resolve()}deleteFieldIndex(t,e){return B.resolve()}deleteAllFieldIndexes(t){return B.resolve()}createTargetIndexes(t,e){return B.resolve()}getDocumentsMatchingTarget(t,e){return B.resolve(null)}getIndexType(t,e){return B.resolve(0)}getFieldIndexes(t,e){return B.resolve([])}getNextCollectionGroupToUpdate(t){return B.resolve(null)}getMinOffset(t,e){return B.resolve(ii.min())}getMinOffsetFromCollectionGroup(t,e){return B.resolve(ii.min())}updateCollectionGroup(t,e,r){return B.resolve()}updateIndexEntries(t,e){return B.resolve()}}class By{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new jt(St.comparator),a=!s.has(r);return this.index[e]=s.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new jt(St.comparator)).toArray()}}/**
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
 */const mh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Af=41943040;class me{static withCacheSize(t){return new me(t,me.DEFAULT_COLLECTION_PERCENTILE,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me.DEFAULT_COLLECTION_PERCENTILE=10,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,me.DEFAULT=new me(Af,me.DEFAULT_COLLECTION_PERCENTILE,me.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),me.DISABLED=new me(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new ai(0)}static ar(){return new ai(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="LruGarbageCollector",zy=1048576;function gh([i,t],[e,r]){const s=ht(i,e);return s===0?ht(t,r):s}class qy{constructor(t){this.Pr=t,this.buffer=new jt(gh),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();gh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class jy{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){$(_h,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){$r(e)?$(_h,"Ignoring IndexedDB error during garbage collection: ",e):await Hr(e)}await this.Ar(3e5)})}}class Hy{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return B.resolve(Ma.ce);const r=new qy(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(mh)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mh):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,a,u,f,m,_;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,f=Date.now(),this.removeTargets(t,r,e))).next(w=>(a=w,m=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(_=Date.now(),Ir()<=ft.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(f-u)+`ms
	Removed ${a} targets in `+(m-f)+`ms
	Removed ${w} documents in `+(_-m)+`ms
Total Duration: ${_-y}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function $y(i,t){return new Hy(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.changes=new Wi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,oe.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?B.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gy{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Os(r.mutation,s,Te.empty(),kt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,dt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=dt()){const s=Oi();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(a=>{let u=ks();return a.forEach((f,m)=>{u=u.insert(f,m.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Oi();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,dt()))}populateOverlays(t,e,r){const s=[];return r.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,f)=>{e.set(u,f)})})}computeViews(t,e,r,s){let a=xn();const u=Ms(),f=function(){return Ms()}();return e.forEach((m,_)=>{const y=r.get(_.key);s.has(_.key)&&(y===void 0||y.mutation instanceof di)?a=a.insert(_.key,_):y!==void 0?(u.set(_.key,y.mutation.getFieldMask()),Os(y.mutation,_,y.mutation.getFieldMask(),kt.now())):u.set(_.key,Te.empty())}),this.recalculateAndSaveOverlays(t,a).next(m=>(m.forEach((_,y)=>u.set(_,y)),e.forEach((_,y)=>f.set(_,new Gy(y,u.get(_)??null))),f))}recalculateAndSaveOverlays(t,e){const r=Ms();let s=new xt((u,f)=>u-f),a=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const f of u)f.keys().forEach(m=>{const _=e.get(m);if(_===null)return;let y=r.get(m)||Te.empty();y=f.applyToLocalView(_,y),r.set(m,y);const w=(s.get(f.batchId)||dt()).add(m);s=s.insert(f.batchId,w)})}).next(()=>{const u=[],f=s.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),_=m.key,y=m.value,w=of();y.forEach(E=>{if(!a.has(E)){const k=df(e.get(E),r.get(E));k!==null&&w.set(E,k),a=a.add(E)}}),u.push(this.documentOverlayCache.saveOverlays(t,_,w))}return B.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return Kg(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):tf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-a.size):B.resolve(Oi());let f=Bs,m=a;return u.next(_=>B.forEach(_,(y,w)=>(f<w.largestBatchId&&(f=w.largestBatchId),a.get(y)?B.resolve():this.remoteDocumentCache.getEntry(t,y).next(E=>{m=m.insert(y,E)}))).next(()=>this.populateOverlays(t,_,a)).next(()=>this.computeViews(t,m,_,dt())).next(y=>({batchId:f,changes:sf(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new K(e)).next(r=>{let s=ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const a=e.collectionGroup;let u=ks();return this.indexManager.getCollectionParents(t,a).next(f=>B.forEach(f,m=>{const _=function(w,E){return new Wr(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,m.child(a));return this.getDocumentsMatchingCollectionQuery(t,_,r,s).next(y=>{y.forEach((w,E)=>{u=u.insert(w,E)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,s))).next(u=>{a.forEach((m,_)=>{const y=_.getKey();u.get(y)===null&&(u=u.insert(y,oe.newInvalidDocument(y)))});let f=ks();return u.forEach((m,_)=>{const y=a.get(m);y!==void 0&&Os(y.mutation,_,Te.empty(),kt.now()),Ba(e,_)&&(f=f.insert(m,_))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return B.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(e)),B.resolve()}getNamedQuery(t,e){return B.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:Fy(s.bundledQuery),readTime:nn(s.readTime)}}(e)),B.resolve()}}/**
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
 */class Qy{constructor(){this.overlays=new xt(K.comparator),this.Lr=new Map}getOverlay(t,e){return B.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Oi();return B.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,a)=>{this.St(t,e,a)}),B.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),B.resolve()}getOverlaysForCollection(t,e,r){const s=Oi(),a=e.length+1,u=new K(e.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const m=f.getNext().value,_=m.getKey();if(!e.isPrefixOf(_.path))break;_.path.length===a&&m.largestBatchId>r&&s.set(m.getKey(),m)}return B.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let a=new xt((_,y)=>_-y);const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===e&&_.largestBatchId>r){let y=a.get(_.largestBatchId);y===null&&(y=Oi(),a=a.insert(_.largestBatchId,y)),y.set(_.getKey(),_)}}const f=Oi(),m=a.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((_,y)=>f.set(_,y)),!(f.size()>=s)););return B.resolve(f)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new py(e,r));let a=this.Lr.get(e);a===void 0&&(a=dt(),this.Lr.set(e,a)),this.Lr.set(e,a.add(r.key))}}/**
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
 */class Jy{constructor(){this.sessionToken=ne.EMPTY_BYTE_STRING}getSessionToken(t){return B.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.kr=new jt(Kt.Kr),this.qr=new jt(Kt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Kt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new Kt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new K(new St([])),r=new Kt(e,t),s=new Kt(e,t+1),a=[];return this.qr.forEachInRange([r,s],u=>{this.Wr(u),a.push(u.key)}),a}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new K(new St([])),r=new Kt(e,t),s=new Kt(e,t+1);let a=dt();return this.qr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Kt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Kt{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return K.comparator(t.key,e.key)||ht(t.Jr,e.Jr)}static Ur(t,e){return ht(t.Jr,e.Jr)||K.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new jt(Kt.Kr)}checkEmpty(t){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new fy(a,e,r,s);this.mutationQueue.push(u);for(const f of s)this.Hr=this.Hr.add(new Kt(f.key,a)),this.indexManager.addToCollectionParentIndex(t,f.key.path.popLast());return B.resolve(u)}lookupMutationBatch(t,e){return B.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),a=s<0?0:s;return B.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?fl:this.Yn-1)}getAllMutationBatches(t){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Kt(e,0),s=new Kt(e,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,s],u=>{const f=this.Zr(u.Jr);a.push(f)}),B.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new jt(ht);return e.forEach(s=>{const a=new Kt(s,0),u=new Kt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,u],f=>{r=r.add(f.Jr)})}),B.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let a=r;K.isDocumentKey(a)||(a=a.child(""));const u=new Kt(new K(a),0);let f=new jt(ht);return this.Hr.forEachWhile(m=>{const _=m.key.path;return!!r.isPrefixOf(_)&&(_.length===s&&(f=f.add(m.Jr)),!0)},u),B.resolve(this.Yr(f))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Et(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return B.forEach(e.mutations,s=>{const a=new Kt(s.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new Kt(e,0),s=this.Hr.firstAfterOrEqual(r);return B.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,B.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t){this.ti=t,this.docs=function(){return new xt(K.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),a=s?s.size:0,u=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return B.resolve(r?r.document.mutableCopy():oe.newInvalidDocument(e))}getEntries(t,e){let r=xn();return e.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():oe.newInvalidDocument(s))}),B.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let a=xn();const u=e.path,f=new K(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:_,value:{document:y}}=m.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||Ag(bg(y),r)<=0||(s.has(y.key)||Ba(e,y))&&(a=a.insert(y.key,y.mutableCopy()))}return B.resolve(a)}getAllFromCollectionGroup(t,e,r,s){X(9500)}ni(t,e){return B.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new tv(this)}getSize(t){return B.resolve(this.size)}}class tv extends Wy{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),B.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t){this.persistence=t,this.ri=new Wi(e=>_l(e),gl),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.ii=0,this.si=new bl,this.targetCount=0,this.oi=ai._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),B.resolve()}getLastRemoteSnapshotVersion(t){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return B.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),B.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new ai(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,B.resolve()}updateTargetData(t,e){return this.lr(e),B.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,B.resolve()}removeTargets(t,e,r){let s=0;const a=[];return this.ri.forEach((u,f)=>{f.sequenceNumber<=e&&r.get(f.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(t,f.targetId)),s++)}),B.waitFor(a).next(()=>s)}getTargetCount(t){return B.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return B.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),B.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),B.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),B.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return B.resolve(r)}containsKey(t,e){return B.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this._i={},this.overlays={},this.ai=new Ma(0),this.ui=!1,this.ui=!0,this.ci=new Jy,this.referenceDelegate=t(this),this.li=new ev(this),this.indexManager=new Uy,this.remoteDocumentCache=function(s){return new Xy(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Vy(e),this.Pi=new Ky(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Qy,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Yy(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){$("MemoryPersistence","Starting transaction:",t);const s=new nv(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(a=>this.referenceDelegate.Ii(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(t,e){return B.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class nv extends Sg{constructor(t){super(),this.currentSequenceNumber=t}}class Al{constructor(t){this.persistence=t,this.Ri=new bl,this.Ai=null}static Vi(t){return new Al(t)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),B.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),B.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),B.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(t,s).next(a=>{a||e.removeEntry(s,rt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return B.or([()=>B.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ta{constructor(t,e){this.persistence=t,this.fi=new Wi(r=>kg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=$y(this,e)}static Vi(t,e){return new Ta(t,e)}Ti(){}Ii(t){return B.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return B.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(a=>a?B.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ni(t,u=>this.wr(t,u,e).next(f=>{f||(r++,a.removeEntry(u,rt.min()))})).next(()=>a.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),B.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),B.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),B.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),B.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=na(t.data.value)),e}wr(t,e,r){return B.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return B.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=dt(),s=dt();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Pl(t,e.fromCache,r,s)}}/**
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
 */class iv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class rv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return $m()?8:Cg(ae())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const a={result:null};return this.gs(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ps(t,e,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new iv;return this.ys(t,e,u).next(f=>{if(a.result=f,this.As)return this.ws(t,e,u,f.size)})}).next(()=>a.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Ir()<=ft.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",br(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),B.resolve()):(Ir()<=ft.DEBUG&&$("QueryEngine","Query:",br(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ir()<=ft.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",br(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,en(e))):B.resolve())}gs(t,e){if(sh(e))return B.resolve(null);let r=en(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=jc(e,null,"F"),r=en(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=dt(...a);return this.fs.getDocuments(t,u).next(f=>this.indexManager.getMinOffset(t,r).next(m=>{const _=this.Ss(e,f);return this.bs(e,_,u,m.readTime)?this.gs(t,jc(e,null,"F")):this.Ds(t,_,e,m)}))})))}ps(t,e,r,s){return sh(e)||s.isEqual(rt.min())?B.resolve(null):this.fs.getDocuments(t,r).next(a=>{const u=this.Ss(e,a);return this.bs(e,u,r,s)?B.resolve(null):(Ir()<=ft.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),br(e)),this.Ds(t,u,e,Ig(s,Bs)).next(f=>f))})}Ss(t,e){let r=new jt(nf(t));return e.forEach((s,a)=>{Ba(t,a)&&(r=r.add(a))}),r}bs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ys(t,e,r){return Ir()<=ft.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",br(e)),this.fs.getDocumentsMatchingQuery(t,e,ii.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="LocalStore",sv=3e8;class ov{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new xt(ht),this.Fs=new Wi(a=>_l(a),gl),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Zy(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function av(i,t,e,r){return new ov(i,t,e,r)}async function Sf(i,t){const e=st(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],f=[];let m=dt();for(const _ of s){u.push(_.batchId);for(const y of _.mutations)m=m.add(y.key)}for(const _ of a){f.push(_.batchId);for(const y of _.mutations)m=m.add(y.key)}return e.localDocuments.getDocuments(r,m).next(_=>({Ns:_,removedBatchIds:u,addedBatchIds:f}))})})}function cv(i,t){const e=st(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),a=e.xs.newChangeBuffer({trackRemovals:!0});return function(f,m,_,y){const w=_.batch,E=w.keys();let k=B.resolve();return E.forEach(V=>{k=k.next(()=>y.getEntry(m,V)).next(U=>{const q=_.docVersions.get(V);Et(q!==null,48541),U.version.compareTo(q)<0&&(w.applyToRemoteDocument(U,_),U.isValidDocument()&&(U.setReadTime(_.commitVersion),y.addEntry(U)))})}),k.next(()=>f.mutationQueue.removeMutationBatch(m,w))}(e,r,t,a).next(()=>a.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let m=dt();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(m=m.add(f.batch.mutations[_].key));return m}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Cf(i){const t=st(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function lv(i,t){const e=st(i),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const f=[];t.targetChanges.forEach((y,w)=>{const E=s.get(w);if(!E)return;f.push(e.li.removeMatchingKeys(a,y.removedDocuments,w).next(()=>e.li.addMatchingKeys(a,y.addedDocuments,w)));let k=E.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(w)!==null?k=k.withResumeToken(ne.EMPTY_BYTE_STRING,rt.min()).withLastLimboFreeSnapshotVersion(rt.min()):y.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(y.resumeToken,r)),s=s.insert(w,k),function(U,q,ot){return U.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=sv?!0:ot.addedDocuments.size+ot.modifiedDocuments.size+ot.removedDocuments.size>0}(E,k,y)&&f.push(e.li.updateTargetData(a,k))});let m=xn(),_=dt();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&f.push(e.persistence.referenceDelegate.updateLimboDocument(a,y))}),f.push(uv(a,u,t.documentUpdates).next(y=>{m=y.Bs,_=y.Ls})),!r.isEqual(rt.min())){const y=e.li.getLastRemoteSnapshotVersion(a).next(w=>e.li.setTargetsMetadata(a,a.currentSequenceNumber,r));f.push(y)}return B.waitFor(f).next(()=>u.apply(a)).next(()=>e.localDocuments.getLocalViewOfDocuments(a,m,_)).next(()=>m)}).then(a=>(e.vs=s,a))}function uv(i,t,e){let r=dt(),s=dt();return e.forEach(a=>r=r.add(a)),t.getEntries(i,r).next(a=>{let u=xn();return e.forEach((f,m)=>{const _=a.get(f);m.isFoundDocument()!==_.isFoundDocument()&&(s=s.add(f)),m.isNoDocument()&&m.version.isEqual(rt.min())?(t.removeEntry(f,m.readTime),u=u.insert(f,m)):!_.isValidDocument()||m.version.compareTo(_.version)>0||m.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(m),u=u.insert(f,m)):$(Sl,"Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",m.version)}),{Bs:u,Ls:s}})}function hv(i,t){const e=st(i);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=fl),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function dv(i,t){const e=st(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(a=>a?(s=a,B.resolve(s)):e.li.allocateTargetId(r).next(u=>(s=new In(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function Zc(i,t,e){const r=st(i),s=r.vs.get(t),a=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!$r(u))throw u;$(Sl,`Failed to update sequence numbers for target ${t}: ${u}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function yh(i,t,e){const r=st(i);let s=rt.min(),a=dt();return r.persistence.runTransaction("Execute query","readwrite",u=>function(m,_,y){const w=st(m),E=w.Fs.get(y);return E!==void 0?B.resolve(w.vs.get(E)):w.li.getTargetData(_,y)}(r,u,en(t)).next(f=>{if(f)return s=f.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,f.targetId).next(m=>{a=m})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?s:rt.min(),e?a:dt())).next(f=>(fv(r,Yg(t),f),{documents:f,ks:a})))}function fv(i,t,e){let r=i.Ms.get(t)||rt.min();e.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),i.Ms.set(t,r)}class vh{constructor(){this.activeTargetIds=ry()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pv{constructor(){this.vo=new vh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new vh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class mv{Mo(t){}shutdown(){}}/**
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
 */const wh="ConnectivityMonitor";class Th{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){$(wh,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){$(wh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Jo=null;function Kc(){return Jo===null?Jo=function(){return 268435456+Math.round(2147483648*Math.random())}():Jo++,"0x"+Jo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="RestConnection",_v={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class gv{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===_a?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,a){const u=Kc(),f=this.Qo(t,e.toUriEncodedString());$(Ec,`Sending RPC '${t}' ${u}:`,f,r);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(m,s,a);const{host:_}=new URL(f),y=Js(_);return this.zo(t,f,m,r,y).then(w=>($(Ec,`Received RPC '${t}' ${u}: `,w),w),w=>{throw qi(Ec,`RPC '${t}' ${u} failed with error: `,w,"url: ",f,"request:",r),w})}jo(t,e,r,s,a,u){return this.Wo(t,e,r,s,a)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,a)=>t[a]=s),r&&r.headers.forEach((s,a)=>t[a]=s)}Qo(t,e){const r=_v[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="WebChannelConnection",As=(i,t,e)=>{i.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Rr extends gv{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Rr.c_){const t=xd();As(t,Ld.STAT_EVENT,e=>{e.stat===Oc.PROXY?$(re,"STAT_EVENT: detected buffering proxy"):e.stat===Oc.NOPROXY&&$(re,"STAT_EVENT: detected no buffering proxy")}),Rr.c_=!0}}zo(t,e,r,s,a){const u=Kc();return new Promise((f,m)=>{const _=new Rd;_.setWithCredentials(!0),_.listenOnce(kd.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case ea.NO_ERROR:const w=_.getResponseJson();$(re,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),f(w);break;case ea.TIMEOUT:$(re,`RPC '${t}' ${u} timed out`),m(new H(F.DEADLINE_EXCEEDED,"Request time out"));break;case ea.HTTP_ERROR:const E=_.getStatus();if($(re,`RPC '${t}' ${u} failed with status:`,E,"response text:",_.getResponseText()),E>0){let k=_.getResponseJson();Array.isArray(k)&&(k=k[0]);const V=k==null?void 0:k.error;if(V&&V.status&&V.message){const U=function(ot){const ut=ot.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(ut)>=0?ut:F.UNKNOWN}(V.status);m(new H(U,V.message))}else m(new H(F.UNKNOWN,"Server responded with status "+_.getStatus()))}else m(new H(F.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:t,streamId:u,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{$(re,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(s);$(re,`RPC '${t}' ${u} sending request:`,s),_.send(e,"POST",y,r,15)})}T_(t,e,r){const s=Kc(),a=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const _=a.join("");$(re,`Creating RPC '${t}' stream ${s}: ${_}`,f);const y=u.createWebChannel(_,f);this.I_(y);let w=!1,E=!1;const k=new yv({Jo:V=>{E?$(re,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(w||($(re,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),$(re,`RPC '${t}' stream ${s} sending:`,V),y.send(V))},Ho:()=>y.close()});return As(y,Rs.EventType.OPEN,()=>{E||($(re,`RPC '${t}' stream ${s} transport opened.`),k.i_())}),As(y,Rs.EventType.CLOSE,()=>{E||(E=!0,$(re,`RPC '${t}' stream ${s} transport closed`),k.o_(),this.E_(y))}),As(y,Rs.EventType.ERROR,V=>{E||(E=!0,qi(re,`RPC '${t}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),k.o_(new H(F.UNAVAILABLE,"The operation could not be completed")))}),As(y,Rs.EventType.MESSAGE,V=>{var U;if(!E){const q=V.data[0];Et(!!q,16349);const ot=q,ut=(ot==null?void 0:ot.error)||((U=ot[0])==null?void 0:U.error);if(ut){$(re,`RPC '${t}' stream ${s} received error:`,ut);const Q=ut.status;let vt=function(C){const I=Ut[C];if(I!==void 0)return pf(I)}(Q),bt=ut.message;Q==="NOT_FOUND"&&bt.includes("database")&&bt.includes("does not exist")&&bt.includes(this.databaseId.database)&&qi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),vt===void 0&&(vt=F.INTERNAL,bt="Unknown error status: "+Q+" with message "+ut.message),E=!0,k.o_(new H(vt,bt)),y.close()}else $(re,`RPC '${t}' stream ${s} received:`,q),k.__(q)}}),Rr.u_(),setTimeout(()=>{k.s_()},0),k}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Dd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(i){return new Rr(i)}function Ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(i){return new Iy(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr.c_=!1;class Rf{constructor(t,e,r=1e3,s=1.5,a=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="PersistentStream";class kf{constructor(t,e,r,s,a,u,f,m){this.Ci=t,this.S_=r,this.b_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===F.RESOURCE_EXHAUSTED?(Ln(e.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new H(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return $(Eh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():($(Eh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wv extends kf{constructor(t,e,r,s,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Py(this.serializer,t),r=function(a){if(!("targetChange"in a))return rt.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?rt.min():u.readTime?nn(u.readTime):rt.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=Gc(this.serializer),e.addTarget=function(a,u){let f;const m=u.target;if(f=zc(m)?{documents:Ry(a,m)}:{query:ky(a,m).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=gf(a,u.resumeToken);const _=Hc(a,u.expectedCount);_!==null&&(f.expectedCount=_)}else if(u.snapshotVersion.compareTo(rt.min())>0){f.readTime=wa(a,u.snapshotVersion.toTimestamp());const _=Hc(a,u.expectedCount);_!==null&&(f.expectedCount=_)}return f}(this.serializer,t);const r=xy(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Gc(this.serializer),e.removeTarget=t,this.K_(e)}}class Tv extends kf{constructor(t,e,r,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return Et(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Et(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Et(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Cy(t.writeResults,t.commitTime),r=nn(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Gc(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Sy(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{}class Iv extends Ev{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,$c(e,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(F.UNKNOWN,a.toString())})}jo(t,e,r,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.jo(t,$c(e,r),s,u,f,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new H(F.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function bv(i,t,e,r){return new Iv(i,t,e,r)}class Av{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ln(e),this.aa=!1):$("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="RemoteStore";class Pv{constructor(t,e,r,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new ai(1e3),this.Va=new ai(1001),this.da=new Set,this.ma=[],this.fa=a,this.fa.Mo(u=>{r.enqueueAndForget(async()=>{Gi(this)&&($(an,"Restarting streams for network reachability change."),await async function(m){const _=st(m);_.da.add(4),await no(_),_.ga.set("Unknown"),_.da.delete(4),await Ha(_)}(this))})}),this.ga=new Av(r,s)}}async function Ha(i){if(Gi(i))for(const t of i.ma)await t(!0)}async function no(i){for(const t of i.ma)await t(!1)}function Qc(i,t){return i.Ea.get(t)||void 0}function Lf(i,t){const e=st(i),r=Qc(e,t.targetId);if(r!==void 0&&e.Ia.has(r))return;const s=function(f,m){const _=Qc(f,m);_!==void 0&&f.Ra.delete(_);const y=function(E,k){return k%2!=0?E.Va.next():E.Aa.next()}(f,m);return f.Ea.set(m,y),f.Ra.set(y,m),y}(e,t.targetId);$(an,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const a=new In(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(s,a),Ll(e)?kl(e):Gr(e).O_()&&Rl(e,a)}function Cl(i,t){const e=st(i),r=Gr(e),s=Qc(e,t);$(an,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ia.delete(s),e.Ea.delete(t),e.Ra.delete(s),r.O_()&&xf(e,s),e.Ia.size===0&&(r.O_()?r.L_():Gi(e)&&e.ga.set("Unknown"))}function Rl(i,t){if(i.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(rt.min())>0){const e=i.Ra.get(t.targetId);if(e===void 0)return void $(an,"SDK target ID not found for remote ID: "+t.targetId);const r=i.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}Gr(i).Z_(t)}function xf(i,t){i.pa.$e(t),Gr(i).X_(t)}function kl(i){i.pa=new vy({getRemoteKeysForTarget:t=>{const e=i.Ra.get(t);return e!==void 0?i.remoteSyncer.getRemoteKeysForTarget(e):dt()},At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),Gr(i).start(),i.ga.ua()}function Ll(i){return Gi(i)&&!Gr(i).x_()&&i.Ia.size>0}function Gi(i){return st(i).da.size===0}function Df(i){i.pa=void 0}async function Sv(i){i.ga.set("Online")}async function Cv(i){i.Ia.forEach((t,e)=>{Rl(i,t)})}async function Rv(i,t){Df(i),Ll(i)?(i.ga.ha(t),kl(i)):i.ga.set("Unknown")}async function kv(i,t,e){if(i.ga.set("Online"),t instanceof _f&&t.state===2&&t.cause)try{await async function(s,a){const u=a.cause;for(const f of a.targetIds){if(s.Ia.has(f)){const m=s.Ra.get(f);m!==void 0&&(await s.remoteSyncer.rejectListen(m,u),s.Ea.delete(m),s.Ra.delete(f)),s.Ia.delete(f)}s.pa.removeTarget(f)}}(i,t)}catch(r){$(an,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ea(i,r)}else if(t instanceof sa?i.pa.Xe(t):t instanceof mf?i.pa.st(t):i.pa.tt(t),!e.isEqual(rt.min()))try{const r=await Cf(i.localStore);e.compareTo(r)>=0&&await function(a,u){const f=a.pa.Tt(u);f.targetChanges.forEach((_,y)=>{if(_.resumeToken.approximateByteSize()>0){const w=a.Ia.get(y);w&&a.Ia.set(y,w.withResumeToken(_.resumeToken,u))}}),f.targetMismatches.forEach((_,y)=>{const w=a.Ia.get(_);if(!w)return;a.Ia.set(_,w.withResumeToken(ne.EMPTY_BYTE_STRING,w.snapshotVersion)),xf(a,_);const E=new In(w.target,_,y,w.sequenceNumber);Rl(a,E)});const m=function(y,w){const E=new Map;w.targetChanges.forEach((V,U)=>{const q=y.Ra.get(U);q!==void 0&&E.set(q,V)});let k=new xt(ht);return w.targetMismatches.forEach((V,U)=>{const q=y.Ra.get(V);q!==void 0&&(k=k.insert(q,U))}),new to(w.snapshotVersion,E,k,w.documentUpdates,w.resolvedLimboDocuments)}(a,f);return a.remoteSyncer.applyRemoteEvent(m)}(i,e)}catch(r){$(an,"Failed to raise snapshot:",r),await Ea(i,r)}}async function Ea(i,t,e){if(!$r(t))throw t;i.da.add(1),await no(i),i.ga.set("Offline"),e||(e=()=>Cf(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{$(an,"Retrying IndexedDB access"),await e(),i.da.delete(1),await Ha(i)})}function Nf(i,t){return t().catch(e=>Ea(i,e,t))}async function $a(i){const t=st(i),e=ci(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:fl;for(;Lv(t);)try{const s=await hv(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,xv(t,s)}catch(s){await Ea(t,s)}Mf(t)&&Of(t)}function Lv(i){return Gi(i)&&i.Ta.length<10}function xv(i,t){i.Ta.push(t);const e=ci(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function Mf(i){return Gi(i)&&!ci(i).x_()&&i.Ta.length>0}function Of(i){ci(i).start()}async function Dv(i){ci(i).ra()}async function Nv(i){const t=ci(i);for(const e of i.Ta)t.ea(e.mutations)}async function Mv(i,t,e){const r=i.Ta.shift(),s=Tl.from(r,t,e);await Nf(i,()=>i.remoteSyncer.applySuccessfulWrite(s)),await $a(i)}async function Ov(i,t){t&&ci(i).Y_&&await async function(r,s){if(function(u){return _y(u)&&u!==F.ABORTED}(s.code)){const a=r.Ta.shift();ci(r).B_(),await Nf(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await $a(r)}}(i,t),Mf(i)&&Of(i)}async function Ih(i,t){const e=st(i);e.asyncQueue.verifyOperationInProgress(),$(an,"RemoteStore received new credentials");const r=Gi(e);e.da.add(3),await no(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await Ha(e)}async function Vv(i,t){const e=st(i);t?(e.da.delete(2),await Ha(e)):t||(e.da.add(2),await no(e),e.ga.set("Unknown"))}function Gr(i){return i.ya||(i.ya=function(e,r,s){const a=st(e);return a.sa(),new wv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:Sv.bind(null,i),Yo:Cv.bind(null,i),t_:Rv.bind(null,i),H_:kv.bind(null,i)}),i.ma.push(async t=>{t?(i.ya.B_(),Ll(i)?kl(i):i.ga.set("Unknown")):(await i.ya.stop(),Df(i))})),i.ya}function ci(i){return i.wa||(i.wa=function(e,r,s){const a=st(e);return a.sa(),new Tv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Dv.bind(null,i),t_:Ov.bind(null,i),ta:Nv.bind(null,i),na:Mv.bind(null,i)}),i.ma.push(async t=>{t?(i.wa.B_(),await $a(i)):(await i.wa.stop(),i.Ta.length>0&&($(an,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t,e,r,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,a){const u=Date.now()+r,f=new xl(t,e,u,s,a);return f.start(r),f}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(F.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dl(i,t){if(Ln("AsyncQueue",`${t}: ${i}`),$r(i))return new H(F.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{static emptySet(t){return new kr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||K.comparator(e.key,r.key):(e,r)=>K.comparator(e.key,r.key),this.keyedMap=ks(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof kr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new kr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.Sa=new xt(K.comparator)}track(t){const e=t.doc.key,r=this.Sa.get(e);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(e):t.type===1&&r.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):X(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,r)=>{t.push(r)}),t}}class zr{constructor(t,e,r,s,a,u,f,m,_){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=_}static fromInitialDocuments(t,e,r,s,a){const u=[];return e.forEach(f=>{u.push({type:0,doc:f})}),new zr(t,e,kr.emptySet(e),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ua(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class Uv{constructor(){this.queries=Ah(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const s=st(e),a=s.queries;s.queries=Ah(),a.forEach((u,f)=>{for(const m of f.va)m.onError(r)})})(this,new H(F.ABORTED,"Firestore shutting down"))}}function Ah(){return new Wi(i=>ef(i),Ua)}async function Nl(i,t){const e=st(i);let r=3;const s=t.query;let a=e.queries.get(s);a?!a.Fa()&&t.Ma()&&(r=2):(a=new Fv,r=t.Ma()?0:1);try{switch(r){case 0:a.Ca=await e.onListen(s,!0);break;case 1:a.Ca=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const f=Dl(u,`Initialization of query '${br(t.query)}' failed`);return void t.onError(f)}e.queries.set(s,a),a.va.push(t),t.Oa(e.onlineState),a.Ca&&t.Na(a.Ca)&&Ol(e)}async function Ml(i,t){const e=st(i),r=t.query;let s=3;const a=e.queries.get(r);if(a){const u=a.va.indexOf(t);u>=0&&(a.va.splice(u,1),a.va.length===0?s=t.Ma()?0:1:!a.Fa()&&t.Ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Bv(i,t){const e=st(i);let r=!1;for(const s of t){const a=s.query,u=e.queries.get(a);if(u){for(const f of u.va)f.Na(s)&&(r=!0);u.Ca=s}}r&&Ol(e)}function zv(i,t,e){const r=st(i),s=r.queries.get(t);if(s)for(const a of s.va)a.onError(e);r.queries.delete(t)}function Ol(i){i.xa.forEach(t=>{t.next()})}var Jc,Ph;(Ph=Jc||(Jc={})).Ba="default",Ph.Cache="cache";class Vl{constructor(t,e,r){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new zr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const r=e!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=zr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==Jc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t){this.key=t}}class Ff{constructor(t){this.key=t}}class qv{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=dt(),this.mutatedKeys=dt(),this.iu=nf(t),this.su=new kr(this.iu)}get ou(){return this.tu}_u(t,e){const r=e?e.au:new bh,s=e?e.su:this.su;let a=e?e.mutatedKeys:this.mutatedKeys,u=s,f=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,_=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((y,w)=>{const E=s.get(y),k=Ba(this.query,w)?w:null,V=!!E&&this.mutatedKeys.has(E.key),U=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let q=!1;E&&k?E.data.isEqual(k.data)?V!==U&&(r.track({type:3,doc:k}),q=!0):this.uu(E,k)||(r.track({type:2,doc:k}),q=!0,(m&&this.iu(k,m)>0||_&&this.iu(k,_)<0)&&(f=!0)):!E&&k?(r.track({type:0,doc:k}),q=!0):E&&!k&&(r.track({type:1,doc:E}),q=!0,(m||_)&&(f=!0)),q&&(k?(u=u.add(k),a=U?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{su:u,au:r,bs:f,mutatedKeys:a}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const a=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const u=t.au.Da();u.sort((y,w)=>function(k,V){const U=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:q})}};return U(k)-U(V)}(y.type,w.type)||this.iu(y.doc,w.doc)),this.cu(r),s=s??!1;const f=e&&!s?this.lu():[],m=this.ru.size===0&&this.current&&!s?1:0,_=m!==this.nu;return this.nu=m,u.length!==0||_?{snapshot:new zr(this.query,t.su,a,u,t.mutatedKeys,m===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:f}:{hu:f}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new bh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=dt(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const e=[];return t.forEach(r=>{this.ru.has(r)||e.push(new Ff(r))}),this.ru.forEach(r=>{t.has(r)||e.push(new Vf(r))}),e}Tu(t){this.tu=t.ks,this.ru=dt();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return zr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Fl="SyncEngine";class jv{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Hv{constructor(t){this.key=t,this.Eu=!1}}class $v{constructor(t,e,r,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new Wi(f=>ef(f),Ua),this.Vu=new Map,this.du=new Set,this.mu=new xt(K.comparator),this.fu=new Map,this.gu=new bl,this.pu={},this.yu=new Map,this.wu=ai.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Wv(i,t,e=!0){const r=Hf(i);let s;const a=r.Au.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Iu()):s=await Uf(r,t,e,!0),s}async function Gv(i,t){const e=Hf(i);await Uf(e,t,!0,!1)}async function Uf(i,t,e,r){const s=await dv(i.localStore,en(t)),a=s.targetId,u=i.sharedClientState.addLocalQueryTarget(a,e);let f;return r&&(f=await Zv(i,t,a,u==="current",s.resumeToken)),i.isPrimaryClient&&e&&Lf(i.remoteStore,s),f}async function Zv(i,t,e,r,s){i.bu=(w,E,k)=>async function(U,q,ot,ut){let Q=q.view._u(ot);Q.bs&&(Q=await yh(U.localStore,q.query,!1).then(({documents:C})=>q.view._u(C,Q)));const vt=ut&&ut.targetChanges.get(q.targetId),bt=ut&&ut.targetMismatches.get(q.targetId)!=null,Lt=q.view.applyChanges(Q,U.isPrimaryClient,vt,bt);return Ch(U,q.targetId,Lt.hu),Lt.snapshot}(i,w,E,k);const a=await yh(i.localStore,t,!0),u=new qv(t,a.ks),f=u._u(a.documents),m=eo.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",s),_=u.applyChanges(f,i.isPrimaryClient,m);Ch(i,e,_.hu);const y=new jv(t,e,u);return i.Au.set(t,y),i.Vu.has(e)?i.Vu.get(e).push(t):i.Vu.set(e,[t]),_.snapshot}async function Kv(i,t,e){const r=st(i),s=r.Au.get(t),a=r.Vu.get(s.targetId);if(a.length>1)return r.Vu.set(s.targetId,a.filter(u=>!Ua(u,t))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Zc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Cl(r.remoteStore,s.targetId),Yc(r,s.targetId)}).catch(Hr)):(Yc(r,s.targetId),await Zc(r.localStore,s.targetId,!0))}async function Qv(i,t){const e=st(i),r=e.Au.get(t),s=e.Vu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Cl(e.remoteStore,r.targetId))}async function Jv(i,t,e){const r=rw(i);try{const s=await function(u,f){const m=st(u),_=kt.now(),y=f.reduce((k,V)=>k.add(V.key),dt());let w,E;return m.persistence.runTransaction("Locally write mutations","readwrite",k=>{let V=xn(),U=dt();return m.xs.getEntries(k,y).next(q=>{V=q,V.forEach((ot,ut)=>{ut.isValidDocument()||(U=U.add(ot))})}).next(()=>m.localDocuments.getOverlayedDocuments(k,V)).next(q=>{w=q;const ot=[];for(const ut of f){const Q=hy(ut,w.get(ut.key).overlayedDocument);Q!=null&&ot.push(new di(ut.key,Q,Gd(Q.value.mapValue),qe.exists(!0)))}return m.mutationQueue.addMutationBatch(k,_,ot,f)}).next(q=>{E=q;const ot=q.applyToLocalDocumentSet(w,U);return m.documentOverlayCache.saveOverlays(k,q.batchId,ot)})}).then(()=>({batchId:E.batchId,changes:sf(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,f,m){let _=u.pu[u.currentUser.toKey()];_||(_=new xt(ht)),_=_.insert(f,m),u.pu[u.currentUser.toKey()]=_}(r,s.batchId,e),await io(r,s.changes),await $a(r.remoteStore)}catch(s){const a=Dl(s,"Failed to persist write");e.reject(a)}}async function Bf(i,t){const e=st(i);try{const r=await lv(e.localStore,t);t.targetChanges.forEach((s,a)=>{const u=e.fu.get(a);u&&(Et(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.Eu=!0:s.modifiedDocuments.size>0?Et(u.Eu,14607):s.removedDocuments.size>0&&(Et(u.Eu,42227),u.Eu=!1))}),await io(e,r,t)}catch(r){await Hr(r)}}function Sh(i,t,e){const r=st(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Au.forEach((a,u)=>{const f=u.view.Oa(t);f.snapshot&&s.push(f.snapshot)}),function(u,f){const m=st(u);m.onlineState=f;let _=!1;m.queries.forEach((y,w)=>{for(const E of w.va)E.Oa(f)&&(_=!0)}),_&&Ol(m)}(r.eventManager,t),s.length&&r.Ru.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Yv(i,t,e){const r=st(i);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.fu.get(t),a=s&&s.key;if(a){let u=new xt(K.comparator);u=u.insert(a,oe.newNoDocument(a,rt.min()));const f=dt().add(a),m=new to(rt.min(),new Map,new xt(ht),u,f);await Bf(r,m),r.mu=r.mu.remove(a),r.fu.delete(t),Ul(r)}else await Zc(r.localStore,t,!1).then(()=>Yc(r,t,e)).catch(Hr)}async function Xv(i,t){const e=st(i),r=t.batch.batchId;try{const s=await cv(e.localStore,t);qf(e,r,null),zf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await io(e,s)}catch(s){await Hr(s)}}async function tw(i,t,e){const r=st(i);try{const s=await function(u,f){const m=st(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let y;return m.mutationQueue.lookupMutationBatch(_,f).next(w=>(Et(w!==null,37113),y=w.keys(),m.mutationQueue.removeMutationBatch(_,w))).next(()=>m.mutationQueue.performConsistencyCheck(_)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(_,y,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,y)).next(()=>m.localDocuments.getDocuments(_,y))})}(r.localStore,t);qf(r,t,e),zf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await io(r,s)}catch(s){await Hr(s)}}function zf(i,t){(i.yu.get(t)||[]).forEach(e=>{e.resolve()}),i.yu.delete(t)}function qf(i,t,e){const r=st(i);let s=r.pu[r.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),r.pu[r.currentUser.toKey()]=s}}function Yc(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Vu.get(t))i.Au.delete(r),e&&i.Ru.Du(r,e);i.Vu.delete(t),i.isPrimaryClient&&i.gu.Gr(t).forEach(r=>{i.gu.containsKey(r)||jf(i,r)})}function jf(i,t){i.du.delete(t.path.canonicalString());const e=i.mu.get(t);e!==null&&(Cl(i.remoteStore,e),i.mu=i.mu.remove(t),i.fu.delete(e),Ul(i))}function Ch(i,t,e){for(const r of e)r instanceof Vf?(i.gu.addReference(r.key,t),ew(i,r)):r instanceof Ff?($(Fl,"Document no longer in limbo: "+r.key),i.gu.removeReference(r.key,t),i.gu.containsKey(r.key)||jf(i,r.key)):X(19791,{Cu:r})}function ew(i,t){const e=t.key,r=e.path.canonicalString();i.mu.get(e)||i.du.has(r)||($(Fl,"New document in limbo: "+e),i.du.add(r),Ul(i))}function Ul(i){for(;i.du.size>0&&i.mu.size<i.maxConcurrentLimboResolutions;){const t=i.du.values().next().value;i.du.delete(t);const e=new K(St.fromString(t)),r=i.wu.next();i.fu.set(r,new Hv(e)),i.mu=i.mu.insert(e,r),Lf(i.remoteStore,new In(en(Fa(e.path)),r,"TargetPurposeLimboResolution",Ma.ce))}}async function io(i,t,e){const r=st(i),s=[],a=[],u=[];r.Au.isEmpty()||(r.Au.forEach((f,m)=>{u.push(r.bu(m,t,e).then(_=>{var y;if((_||e)&&r.isPrimaryClient){const w=_?!_.fromCache:(y=e==null?void 0:e.targetChanges.get(m.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(m.targetId,w?"current":"not-current")}if(_){s.push(_);const w=Pl.Es(m.targetId,_);a.push(w)}}))}),await Promise.all(u),r.Ru.H_(s),await async function(m,_){const y=st(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>B.forEach(_,E=>B.forEach(E.Ts,k=>y.persistence.referenceDelegate.addReference(w,E.targetId,k)).next(()=>B.forEach(E.Is,k=>y.persistence.referenceDelegate.removeReference(w,E.targetId,k)))))}catch(w){if(!$r(w))throw w;$(Sl,"Failed to update sequence numbers: "+w)}for(const w of _){const E=w.targetId;if(!w.fromCache){const k=y.vs.get(E),V=k.snapshotVersion,U=k.withLastLimboFreeSnapshotVersion(V);y.vs=y.vs.insert(E,U)}}}(r.localStore,a))}async function nw(i,t){const e=st(i);if(!e.currentUser.isEqual(t)){$(Fl,"User change. New user:",t.toKey());const r=await Sf(e.localStore,t);e.currentUser=t,function(a,u){a.yu.forEach(f=>{f.forEach(m=>{m.reject(new H(F.CANCELLED,u))})}),a.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await io(e,r.Ns)}}function iw(i,t){const e=st(i),r=e.fu.get(t);if(r&&r.Eu)return dt().add(r.key);{let s=dt();const a=e.Vu.get(t);if(!a)return s;for(const u of a){const f=e.Au.get(u);s=s.unionWith(f.view.ou)}return s}}function Hf(i){const t=st(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=Bf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yv.bind(null,t),t.Ru.H_=Bv.bind(null,t.eventManager),t.Ru.Du=zv.bind(null,t.eventManager),t}function rw(i){const t=st(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tw.bind(null,t),t}class Ia{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ja(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return av(this.persistence,new rv,t.initialUser,this.serializer)}xu(t){return new Pf(Al.Vi,this.serializer)}Mu(t){return new pv}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ia.provider={build:()=>new Ia};class sw extends Ia{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){Et(this.persistence.referenceDelegate instanceof Ta,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jy(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?me.withCacheSize(this.cacheSizeBytes):me.DEFAULT;return new Pf(r=>Ta.Vi(r,e),this.serializer)}}class Xc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nw.bind(null,this.syncEngine),await Vv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Uv}()}createDatastore(t){const e=ja(t.databaseInfo.databaseId),r=vv(t.databaseInfo);return bv(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,a,u,f){return new Pv(r,s,a,u,f)}(this.localStore,this.datastore,t.asyncQueue,e=>Sh(this.syncEngine,e,0),function(){return Th.v()?new Th:new mv}())}createSyncEngine(t,e){return function(s,a,u,f,m,_,y){const w=new $v(s,a,u,f,m,_);return y&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=st(s);$(an,"RemoteStore shutting down."),a.da.add(5),await no(a),a.fa.shutdown(),a.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Xc.provider={build:()=>new Xc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):Ln("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="FirestoreClient";class ow{constructor(t,e,r,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=se.UNAUTHENTICATED,this.clientId=dl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{$(li,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>($(li,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Dl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function bc(i,t){i.asyncQueue.verifyOperationInProgress(),$(li,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sf(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Rh(i,t){i.asyncQueue.verifyOperationInProgress();const e=await aw(i);$(li,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>Ih(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,s)=>Ih(t.remoteStore,s)),i._onlineComponents=t}async function aw(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){$(li,"Using user provided OfflineComponentProvider");try{await bc(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;qi("Error using user provided cache. Falling back to memory cache: "+e),await bc(i,new Ia)}}else $(li,"Using default OfflineComponentProvider"),await bc(i,new sw(void 0));return i._offlineComponents}async function $f(i){return i._onlineComponents||(i._uninitializedComponentsProvider?($(li,"Using user provided OnlineComponentProvider"),await Rh(i,i._uninitializedComponentsProvider._online)):($(li,"Using default OnlineComponentProvider"),await Rh(i,new Xc))),i._onlineComponents}function cw(i){return $f(i).then(t=>t.syncEngine)}async function ba(i){const t=await $f(i),e=t.eventManager;return e.onListen=Wv.bind(null,t.syncEngine),e.onUnlisten=Kv.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Gv.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qv.bind(null,t.syncEngine),e}function lw(i,t,e,r){const s=new Bl(r),a=new Vl(t,s,e);return i.asyncQueue.enqueueAndForget(async()=>Nl(await ba(i),a)),()=>{s.Ku(),i.asyncQueue.enqueueAndForget(async()=>Ml(await ba(i),a))}}function uw(i,t,e={}){const r=new Pn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,f,m,_){const y=new Bl({next:E=>{y.Ku(),u.enqueueAndForget(()=>Ml(a,w));const k=E.docs.has(f);!k&&E.fromCache?_.reject(new H(F.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&m&&m.source==="server"?_.reject(new H(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(E)},error:E=>_.reject(E)}),w=new Vl(Fa(f.path),y,{includeMetadataChanges:!0,Wa:!0});return Nl(a,w)}(await ba(i),i.asyncQueue,t,e,r)),r.promise}function hw(i,t,e={}){const r=new Pn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,f,m,_){const y=new Bl({next:E=>{y.Ku(),u.enqueueAndForget(()=>Ml(a,w)),E.fromCache&&m.source==="server"?_.reject(new H(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(E)},error:E=>_.reject(E)}),w=new Vl(f,y,{includeMetadataChanges:!0,Wa:!0});return Nl(a,w)}(await ba(i),i.asyncQueue,t,e,r)),r.promise}function dw(i,t){const e=new Pn;return i.asyncQueue.enqueueAndForget(async()=>Jv(await cw(i),t,e)),e.promise}/**
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
 */function Wf(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="ComponentProvider",kh=new Map;function pw(i,t,e,r,s){return new Dg(i,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Wf(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="firestore.googleapis.com",Lh=!0;class xh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new H(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gf,this.ssl=Lh}else this.host=t.host,this.ssl=t.ssl??Lh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Af;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<zy)throw new H(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Eg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wf(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wa{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new H(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dg;switch(r.type){case"firstParty":return new _g(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=kh.get(e);r&&($(fw,"Removing Datastore"),kh.delete(e),r.terminate())}(this),Promise.resolve()}}function mw(i,t,e,r={}){var _;i=Ie(i,Wa);const s=Js(t),a=i._getSettings(),u={...a,emulatorOptions:i._getEmulatorOptions()},f=`${t}:${e}`;s&&Td(`https://${f}`),a.host!==Gf&&a.host!==f&&qi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m={...a,host:f,ssl:s,emulatorOptions:r};if(!Rn(m,u)&&(i._setSettings(m),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=se.MOCK_USER;else{y=Fm(r.mockUserToken,(_=i._app)==null?void 0:_.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new H(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new se(E)}i._authCredentials=new fg(new Md(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fi(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Ys(e,Nt._jsonSchema))return new Nt(t,r||null,new K(St.fromString(e.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:zt("string",Nt._jsonSchemaVersion),referencePath:zt("string")};class ei extends fi{constructor(t,e,r){super(t,e,Fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new K(t))}withConverter(t){return new ei(this.firestore,t,this._path)}}function tl(i,t,...e){if(i=Ht(i),Od("collection","path",t),i instanceof Wa){const r=St.fromString(t,...e);return $u(r),new ei(i,null,r)}{if(!(i instanceof Nt||i instanceof ei))throw new H(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(St.fromString(t,...e));return $u(r),new ei(i.firestore,null,r)}}function be(i,t,...e){if(i=Ht(i),arguments.length===1&&(t=dl.newId()),Od("doc","path",t),i instanceof Wa){const r=St.fromString(t,...e);return Hu(r),new Nt(i,null,new K(r))}{if(!(i instanceof Nt||i instanceof ei))throw new H(F.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(St.fromString(t,...e));return Hu(r),new Nt(i.firestore,i instanceof ei?i.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="AsyncQueue";class Nh{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Rf(this,"async_queue_retry"),this.lc=()=>{const r=Ic();r&&$(Dh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Ic();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Ic();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new Pn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!$r(t))throw t;$(Dh,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,Ln("INTERNAL UNHANDLED ERROR: ",Mh(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=xl.createAndSchedule(this,t,e,r,a=>this.Ec(a));return this.oc.push(s),s}Pc(){this._c&&X(47125,{Rc:Mh(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Mh(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class ui extends Wa{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Nh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Nh(t),this._firestoreClient=void 0,await t}}}function _w(i,t){const e=typeof i=="object"?i:Ad(),r=typeof i=="string"?i:_a,s=ul(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Om("firestore");a&&mw(s,...a)}return s}function Ga(i){if(i._terminated)throw new H(F.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||gw(i),i._firestoreClient}function gw(i){var r,s,a,u;const t=i._freezeSettings(),e=pw(i._databaseId,((r=i._app)==null?void 0:r.options.appId)||"",i._persistenceKey,(s=i._app)==null?void 0:s.options.apiKey,t);i._componentsProvider||(a=t.localCache)!=null&&a._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new ow(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(m){const _=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(_),_online:_}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(ne.fromBase64String(t))}catch(e){throw new H(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(ne.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ne._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ys(t,Ne._jsonSchema))return Ne.fromBase64String(t.bytes)}}Ne._jsonSchemaVersion="firestore/bytes/1.0",Ne._jsonSchema={type:zt("string",Ne._jsonSchemaVersion),bytes:zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new H(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ee(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new H(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new H(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ht(this._lat,t._lat)||ht(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(t){if(Ys(t,rn._jsonSchema))return new rn(t.latitude,t.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:zt("string",rn._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};/**
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
 */class je{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:je._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ys(t,je._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new je(t.vectorValues);throw new H(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}je._jsonSchemaVersion="firestore/vectorValue/1.0",je._jsonSchema={type:zt("string",je._jsonSchemaVersion),vectorValues:zt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=/^__.*__$/;class vw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new di(t,this.data,this.fieldMask,e,this.fieldTransforms):new Xs(t,this.data,e,this.fieldTransforms)}}class Zf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new di(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Kf(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X(40011,{dataSource:i})}}class Za{constructor(t,e,r,s,a,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.fc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Za({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Aa(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(Kf(this.dataSource)&&yw.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class ww{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ja(t)}V(t,e,r,s=!1){return new Za({dataSource:t,methodName:e,targetDoc:r,path:ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ql(i){const t=i._freezeSettings(),e=ja(i._databaseId);return new ww(i._databaseId,!!t.ignoreUndefinedProperties,e)}function Tw(i,t,e,r,s,a={}){const u=i.V(a.merge||a.mergeFields?2:0,t,e,s);Wl("Data must be an object, but it was:",u,r);const f=Jf(r,u);let m,_;if(a.merge)m=new Te(u.fieldMask),_=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const E=ji(t,w,e);if(!u.contains(E))throw new H(F.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);tp(y,E)||y.push(E)}m=new Te(y),_=u.fieldTransforms.filter(w=>m.covers(w.field))}else m=null,_=u.fieldTransforms;return new vw(new _e(f),m,_)}class ro extends Zr{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ro}}function Qf(i,t,e){return new Za({dataSource:3,targetDoc:t.settings.targetDoc,methodName:i._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class jl extends Zr{_toFieldTransform(t){return new vl(t.path,new $s)}isEqual(t){return t instanceof jl}}class Hl extends Zr{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Qf(this,t,!0),r=this.vc.map(a=>Zi(a,e)),s=new Ur(r);return new vl(t.path,s)}isEqual(t){return t instanceof Hl&&Rn(this.vc,t.vc)}}class $l extends Zr{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=Qf(this,t,!0),r=this.vc.map(a=>Zi(a,e)),s=new Br(r);return new vl(t.path,s)}isEqual(t){return t instanceof $l&&Rn(this.vc,t.vc)}}function Ew(i,t,e,r){const s=i.V(1,t,e);Wl("Data must be an object, but it was:",s,r);const a=[],u=_e.empty();hi(r,(m,_)=>{const y=Xf(t,m,e);_=Ht(_);const w=s.Sc(y);if(_ instanceof ro)a.push(y);else{const E=Zi(_,w);E!=null&&(a.push(y),u.set(y,E))}});const f=new Te(a);return new Zf(u,f,s.fieldTransforms)}function Iw(i,t,e,r,s,a){const u=i.V(1,t,e),f=[ji(t,r,e)],m=[s];if(a.length%2!=0)throw new H(F.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)f.push(ji(t,a[E])),m.push(a[E+1]);const _=[],y=_e.empty();for(let E=f.length-1;E>=0;--E)if(!tp(_,f[E])){const k=f[E];let V=m[E];V=Ht(V);const U=u.Sc(k);if(V instanceof ro)_.push(k);else{const q=Zi(V,U);q!=null&&(_.push(k),y.set(k,q))}}const w=new Te(_);return new Zf(y,w,u.fieldTransforms)}function bw(i,t,e,r=!1){return Zi(e,i.V(r?4:3,t))}function Zi(i,t){if(Yf(i=Ht(i)))return Wl("Unsupported field value:",t,i),Jf(i,t);if(i instanceof Zr)return function(r,s){if(!Kf(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const f of r){let m=Zi(f,s.bc(u));m==null&&(m={nullValue:"NULL_VALUE"}),a.push(m),u++}return{arrayValue:{values:a}}}(i,t)}return function(r,s){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=kt.fromDate(r);return{timestampValue:wa(s.serializer,a)}}if(r instanceof kt){const a=new kt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wa(s.serializer,a)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ne)return{bytesValue:gf(s.serializer,r._byteString)};if(r instanceof Nt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Il(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof je)return function(u,f){const m=u instanceof je?u.toArray():u;return{mapValue:{fields:{[$d]:{stringValue:Wd},[ga]:{arrayValue:{values:m.map(y=>{if(typeof y!="number")throw f.Dc("VectorValues must only contain numeric values.");return yl(f.serializer,y)})}}}}}}(r,s);if(bf(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${Na(r)}`)}(i,t)}function Jf(i,t){const e={};return Ud(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hi(i,(r,s)=>{const a=Zi(s,t.yc(r));a!=null&&(e[r]=a)}),{mapValue:{fields:e}}}function Yf(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof kt||i instanceof rn||i instanceof Ne||i instanceof Nt||i instanceof Zr||i instanceof je||bf(i))}function Wl(i,t,e){if(!Yf(e)||!Vd(e)){const r=Na(e);throw r==="an object"?t.Dc(i+" a custom object"):t.Dc(i+" "+r)}}function ji(i,t,e){if((t=Ht(t))instanceof zl)return t._internalPath;if(typeof t=="string")return Xf(i,t);throw Aa("Field path arguments must be of type string or ",i,!1,void 0,e)}const Aw=new RegExp("[~\\*/\\[\\]]");function Xf(i,t,e){if(t.search(Aw)>=0)throw Aa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new zl(...t.split("."))._internalPath}catch{throw Aa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Aa(i,t,e,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let f=`Function ${t}() called with invalid data`;e&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(a||u)&&(m+=" (found",a&&(m+=` in field ${r}`),u&&(m+=` in document ${s}`),m+=")"),new H(F.INVALID_ARGUMENT,f+i+m)}function tp(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{convertValue(t,e="none"){switch(oi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(si(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw X(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return hi(t,(s,a)=>{r[s]=this.convertValue(a,e)}),r}convertVectorValue(t){var r,s,a;const e=(a=(s=(r=t.fields)==null?void 0:r[ga].arrayValue)==null?void 0:s.values)==null?void 0:a.map(u=>Ot(u.doubleValue));return new je(e)}convertGeoPoint(t){return new rn(Ot(t.latitude),Ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Va(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(zs(t));default:return null}}convertTimestamp(t){const e=ri(t);return new kt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=St.fromString(t);Et(If(r),9688,{name:t});const s=new qs(r.get(1),r.get(3)),a=new K(r.popFirst(5));return s.isEqual(e)||Ln(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}/**
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
 */class Gl extends Pw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){return new ro("deleteField")}function ni(){return new jl("serverTimestamp")}function Cw(...i){return new Hl("arrayUnion",i)}function Rw(...i){return new $l("arrayRemove",i)}const Oh="@firebase/firestore",Vh="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(i){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(i,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,e,r,s,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(ji("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kw extends ep{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new H(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zl{}class ip extends Zl{}function Uh(i,t,...e){let r=[];t instanceof Zl&&r.push(t),r=r.concat(e),function(a){const u=a.filter(m=>m instanceof Kl).length,f=a.filter(m=>m instanceof Ka).length;if(u>1||u>0&&f>0)throw new H(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)i=s._apply(i);return i}class Ka extends ip{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Ka(t,e,r)}_apply(t){const e=this._parse(t);return rp(t._query,e),new fi(t.firestore,t.converter,qc(t._query,e))}_parse(t){const e=ql(t.firestore);return function(a,u,f,m,_,y,w){let E;if(_.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new H(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){qh(w,y);const V=[];for(const U of w)V.push(zh(m,a,U));E={arrayValue:{values:V}}}else E=zh(m,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||qh(w,y),E=bw(f,u,w,y==="in"||y==="not-in");return Bt.create(_,y,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Bh(i,t,e){const r=t,s=ji("where",i);return Ka._create(s,r,e)}class Kl extends Zl{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Kl(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:$e.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,a){let u=s;const f=a.getFlattenedFilters();for(const m of f)rp(u,m),u=qc(u,m)}(t._query,e),new fi(t.firestore,t.converter,qc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ql extends ip{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ql(t,e)}_apply(t){const e=function(s,a,u){if(s.startAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hs(a,u)}(t._query,this._field,this._direction);return new fi(t.firestore,t.converter,Jg(t._query,e))}}function Lw(i,t="asc"){const e=t,r=ji("orderBy",i);return Ql._create(r,e)}function zh(i,t,e){if(typeof(e=Ht(e))=="string"){if(e==="")throw new H(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tf(t)&&e.indexOf("/")!==-1)throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(St.fromString(e));if(!K.isDocumentKey(r))throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Xu(i,new K(r))}if(e instanceof Nt)return Xu(i,e._key);throw new H(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Na(e)}.`)}function qh(i,t){if(!Array.isArray(i)||i.length===0)throw new H(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function rp(i,t){const e=function(s,a){for(const u of s)for(const f of u.getFlattenedFilters())if(a.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new H(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function xw(i,t,e){let r;return r=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,r}class xs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Fi extends ep{constructor(t,e,r,s,a,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(ji("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Fi._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Fi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fi._jsonSchema={type:zt("string",Fi._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class oa extends Fi{data(t={}){return super.data(t)}}class Ui{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new oa(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new H(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(f=>{const m=new oa(s._firestore,s._userDataWriter,f.doc.key,f.doc,new xs(s._snapshot.mutatedKeys.has(f.doc.key),s._snapshot.fromCache),s.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(f=>a||f.type!==3).map(f=>{const m=new oa(s._firestore,s._userDataWriter,f.doc.key,f.doc,new xs(s._snapshot.mutatedKeys.has(f.doc.key),s._snapshot.fromCache),s.query.converter);let _=-1,y=-1;return f.type!==0&&(_=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),y=u.indexOf(f.doc.key)),{type:Dw(f.type),doc:m,oldIndex:_,newIndex:y}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ui._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=dl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Dw(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:i})}}/**
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
 */Ui._jsonSchemaVersion="firestore/querySnapshot/1.0",Ui._jsonSchema={type:zt("string",Ui._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(i){i=Ie(i,Nt);const t=Ie(i.firestore,ui),e=Ga(t);return uw(e,i._key).then(r=>sp(t,i,r))}function Mw(i){i=Ie(i,fi);const t=Ie(i.firestore,ui),e=Ga(t),r=new Gl(t);return np(i._query),hw(e,i._query).then(s=>new Ui(t,r,i,s))}function so(i,t,e){i=Ie(i,Nt);const r=Ie(i.firestore,ui),s=xw(i.converter,t,e),a=ql(r);return Jl(r,[Tw(a,"setDoc",i._key,s,i.converter!==null,e).toMutation(i._key,qe.none())])}function oo(i,t,e,...r){i=Ie(i,Nt);const s=Ie(i.firestore,ui),a=ql(s);let u;return u=typeof(t=Ht(t))=="string"||t instanceof zl?Iw(a,"updateDoc",i._key,t,e,r):Ew(a,"updateDoc",i._key,t),Jl(s,[u.toMutation(i._key,qe.exists(!0))])}function Ow(i){return Jl(Ie(i.firestore,ui),[new wl(i._key,qe.none())])}function el(i,...t){var _,y,w;i=Ht(i);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Fh(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Fh(t[r])){const E=t[r];t[r]=(_=E.next)==null?void 0:_.bind(E),t[r+1]=(y=E.error)==null?void 0:y.bind(E),t[r+2]=(w=E.complete)==null?void 0:w.bind(E)}let a,u,f;if(i instanceof Nt)u=Ie(i.firestore,ui),f=Fa(i._key.path),a={next:E=>{t[r]&&t[r](sp(u,i,E))},error:t[r+1],complete:t[r+2]};else{const E=Ie(i,fi);u=Ie(E.firestore,ui),f=E._query;const k=new Gl(u);a={next:V=>{t[r]&&t[r](new Ui(u,k,E,V))},error:t[r+1],complete:t[r+2]},np(i._query)}const m=Ga(u);return lw(m,f,s,a)}function Jl(i,t){const e=Ga(i);return dw(e,t)}function sp(i,t,e){const r=e.docs.get(t._key),s=new Gl(i);return new Fi(i,s,t._key,r,new xs(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){hg(qr),Mr(new Bi("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),f=new ui(new pg(r.getProvider("auth-internal")),new gg(u,r.getProvider("app-check-internal")),Ng(u,s),u);return a={useFetchStreams:e,...a},f._setSettings(a),f},"PUBLIC").setMultipleInstances(!0)),Xn(Oh,Vh,t),Xn(Oh,Vh,"esm2020")})();function op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vw=op,ap=new Ks("auth","Firebase",op());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new cl("@firebase/auth");function Fw(i,...t){Pa.logLevel<=ft.WARN&&Pa.warn(`Auth (${qr}): ${i}`,...t)}function aa(i,...t){Pa.logLevel<=ft.ERROR&&Pa.error(`Auth (${qr}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(i,...t){throw Xl(i,...t)}function He(i,...t){return Xl(i,...t)}function Yl(i,t,e){const r={...Vw(),[t]:e};return new Ks("auth","Firebase",r).create(t,{appName:i.name})}function Sn(i){return Yl(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uw(i,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Me(i,"argument-error"),Yl(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xl(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return ap.create(i,...t)}function Y(i,t,...e){if(!i)throw Xl(t,...e)}function bn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw aa(t),new Error(t)}function Dn(i,t){i||bn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Bw(){return jh()==="http:"||jh()==="https:"}function jh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bw()||qm()||"connection"in navigator)?navigator.onLine:!0}function qw(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,e){this.shortDelay=t,this.longDelay=e,Dn(e>t,"Short delay should be less than long delay!"),this.isMobile=Um()||jm()}get(){return zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(i,t){Dn(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$w=new ao(3e4,6e4);function pi(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function mi(i,t,e,r,s={}){return lp(i,s,async()=>{let a={},u={};r&&(t==="GET"?u=r:a={body:JSON.stringify(r)});const f=Qs({key:i.config.apiKey,...u}).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const _={method:t,headers:m,...a};return zm()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Js(i.emulatorConfig.host)&&(_.credentials="include"),cp.fetch()(await up(i,i.config.apiHost,e,f),_)})}async function lp(i,t,e){i._canInitEmulator=!1;const r={...jw,...t};try{const s=new Gw(i),a=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Yo(i,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const f=a.ok?u.errorMessage:u.error.message,[m,_]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yo(i,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw Yo(i,"email-already-in-use",u);if(m==="USER_DISABLED")throw Yo(i,"user-disabled",u);const y=r[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw Yl(i,y,_);Me(i,y)}}catch(s){if(s instanceof Nn)throw s;Me(i,"network-request-failed",{message:String(s)})}}async function co(i,t,e,r,s={}){const a=await mi(i,t,e,r,s);return"mfaPendingCredential"in a&&Me(i,"multi-factor-auth-required",{_serverResponse:a}),a}async function up(i,t,e,r){const s=`${t}${e}?${r}`,a=i,u=a.config.emulator?tu(i.config,s):`${i.config.apiScheme}://${s}`;return Hw.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function Ww(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Gw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),$w.get())})}}function Yo(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=He(i,t,r);return s.customData._tokenResponse=e,s}function Hh(i){return i!==void 0&&i.enterprise!==void 0}class Zw{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Ww(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kw(i,t){return mi(i,"GET","/v2/recaptchaConfig",pi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(i,t){return mi(i,"POST","/v1/accounts:delete",t)}async function Sa(i,t){return mi(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Jw(i,t=!1){const e=Ht(i),r=await e.getIdToken(t),s=eu(r);Y(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Vs(Ac(s.auth_time)),issuedAtTime:Vs(Ac(s.iat)),expirationTime:Vs(Ac(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ac(i){return Number(i)*1e3}function eu(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=gd(e);return s?JSON.parse(s):(aa("Failed to decode base64 JWT payload"),null)}catch(s){return aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $h(i){const t=eu(i);return Y(t,"internal-error"),Y(typeof t.exp<"u","internal-error"),Y(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Nn&&Yw(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function Yw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vs(this.lastLoginAt),this.creationTime=Vs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(i){var w;const t=i.auth,e=await i.getIdToken(),r=await Ws(i,Sa(t,{idToken:e}));Y(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];i._notifyReloadListener(s);const a=(w=s.providerUserInfo)!=null&&w.length?hp(s.providerUserInfo):[],u=eT(i.providerData,a),f=i.isAnonymous,m=!(i.email&&s.passwordHash)&&!(u!=null&&u.length),_=f?m:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:_};Object.assign(i,y)}async function tT(i){const t=Ht(i);await Ca(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function eT(i,t){return[...i.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function hp(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(i,t){const e=await lp(i,{},async()=>{const r=Qs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=i.config,u=await up(i,s,"/v1/token",`key=${a}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:r};return i.emulatorConfig&&Js(i.emulatorConfig.host)&&(m.credentials="include"),cp.fetch()(u,m)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function iT(i,t){return mi(i,"POST","/v2/accounts:revokeToken",pi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Y(t.idToken,"internal-error"),Y(typeof t.idToken<"u","internal-error"),Y(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):$h(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Y(t.length!==0,"internal-error");const e=$h(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:a}=await nT(t,e);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:a}=e,u=new Lr;return r&&(Y(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),a&&(Y(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(i,t){Y(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class ze{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new Xw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new il(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ws(this,this.stsTokenManager.getToken(this.auth,t));return Y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Jw(this,t)}reload(){return tT(this)}_assign(t){this!==t&&(Y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ze({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(we(this.auth.app))return Promise.reject(Sn(this.auth));const t=await this.getIdToken();return await Ws(this,Qw(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,a=e.phoneNumber??void 0,u=e.photoURL??void 0,f=e.tenantId??void 0,m=e._redirectEventId??void 0,_=e.createdAt??void 0,y=e.lastLoginAt??void 0,{uid:w,emailVerified:E,isAnonymous:k,providerData:V,stsTokenManager:U}=e;Y(w&&U,t,"internal-error");const q=Lr.fromJSON(this.name,U);Y(typeof w=="string",t,"internal-error"),Wn(r,t.name),Wn(s,t.name),Y(typeof E=="boolean",t,"internal-error"),Y(typeof k=="boolean",t,"internal-error"),Wn(a,t.name),Wn(u,t.name),Wn(f,t.name),Wn(m,t.name),Wn(_,t.name),Wn(y,t.name);const ot=new ze({uid:w,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:k,photoURL:u,phoneNumber:a,tenantId:f,stsTokenManager:q,createdAt:_,lastLoginAt:y});return V&&Array.isArray(V)&&(ot.providerData=V.map(ut=>({...ut}))),m&&(ot._redirectEventId=m),ot}static async _fromIdTokenResponse(t,e,r=!1){const s=new Lr;s.updateFromServerResponse(e);const a=new ze({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Ca(a),a}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];Y(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?hp(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),f=new Lr;f.updateFromIdToken(r);const m=new ze({uid:s.localId,auth:t,stsTokenManager:f,isAnonymous:u}),_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new il(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(m,_),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Map;function An(i){Dn(i instanceof Function,"Expected a class definition");let t=Wh.get(i);return t?(Dn(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Wh.set(i,t),t)}/**
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
 */class dp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}dp.type="NONE";const Gh=dp;/**
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
 */function ca(i,t,e){return`firebase:${i}:${t}:${e}`}class xr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=ca(this.userKey,s.apiKey,a),this.fullPersistenceKey=ca("persistence",s.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Sa(this.auth,{idToken:t}).catch(()=>{});return e?ze._fromGetAccountInfoResponse(this.auth,e,t):null}return ze._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new xr(An(Gh),t,r);const s=(await Promise.all(e.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let a=s[0]||An(Gh);const u=ca(r,t.config.apiKey,t.name);let f=null;for(const _ of e)try{const y=await _._get(u);if(y){let w;if(typeof y=="string"){const E=await Sa(t,{idToken:y}).catch(()=>{});if(!E)break;w=await ze._fromGetAccountInfoResponse(t,E,y)}else w=ze._fromJSON(t,y);_!==a&&(f=w),a=_;break}}catch{}const m=s.filter(_=>_._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new xr(a,t,r):(a=m[0],f&&await a._set(u,f.toJSON()),await Promise.all(e.map(async _=>{if(_!==a)try{await _._remove(u)}catch{}})),new xr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_p(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yp(t))return"Blackberry";if(vp(t))return"Webos";if(pp(t))return"Safari";if((t.includes("chrome/")||mp(t))&&!t.includes("edge/"))return"Chrome";if(gp(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fp(i=ae()){return/firefox\//i.test(i)}function pp(i=ae()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mp(i=ae()){return/crios\//i.test(i)}function _p(i=ae()){return/iemobile/i.test(i)}function gp(i=ae()){return/android/i.test(i)}function yp(i=ae()){return/blackberry/i.test(i)}function vp(i=ae()){return/webos/i.test(i)}function nu(i=ae()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function rT(i=ae()){var t;return nu(i)&&!!((t=window.navigator)!=null&&t.standalone)}function sT(){return Hm()&&document.documentMode===10}function wp(i=ae()){return nu(i)||gp(i)||vp(i)||yp(i)||/windows phone/i.test(i)||_p(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(i,t=[]){let e;switch(i){case"Browser":e=Zh(ae());break;case"Worker":e=`${Zh(ae())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${qr}/${r}`}/**
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
 */class oT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=a=>new Promise((u,f)=>{try{const m=t(a);u(m)}catch(m){f(m)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function aT(i,t={}){return mi(i,"GET","/v2/passwordPolicy",pi(i,t))}/**
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
 */const cT=6;class lT{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??cT,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new oT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ap,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=An(e)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await xr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Sa(this,{idToken:t}),r=await ze._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(we(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,f=r==null?void 0:r._redirectEventId,m=await this.tryRedirectSignIn(t);(!u||u===f)&&(m!=null&&m.user)&&(r=m.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ca(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=qw()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(we(this.app))return Promise.reject(Sn(this));const e=t?Ht(t):null;return e&&Y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return we(this.app)?Promise.reject(Sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return we(this.app)?Promise.reject(Sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await aT(this),e=new lT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ks("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await iT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&An(t)||this._popupRedirectResolver;Y(e,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[An(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(f,this,"internal-error"),f.then(()=>{u||a(this.currentUser)}),typeof e=="function"){const m=t.addObserver(e,r,s);return()=>{u=!0,m()}}else{const m=t.addObserver(e);return()=>{u=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(we(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Fw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _i(i){return Ht(i)}class Kh{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ym(e=>this.observer=e)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hT(i){Qa=i}function Ep(i){return Qa.loadJS(i)}function dT(){return Qa.recaptchaEnterpriseScript}function fT(){return Qa.gapiScript}function pT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class mT{constructor(){this.enterprise=new _T}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class _T{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const gT="recaptcha-enterprise",Ip="NO_RECAPTCHA";class yT{constructor(t){this.type=gT,this.auth=_i(t)}async verify(t="verify",e=!1){async function r(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,f)=>{Kw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new Zw(m);return a.tenantId==null?a._agentRecaptchaConfig=_:a._tenantRecaptchaConfigs[a.tenantId]=_,u(_.siteKey)}}).catch(m=>{f(m)})})}function s(a,u,f){const m=window.grecaptcha;Hh(m)?m.enterprise.ready(()=>{m.enterprise.execute(a,{action:t}).then(_=>{u(_)}).catch(()=>{u(Ip)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mT().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(f=>{if(!e&&Hh(window.grecaptcha))s(f,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=dT();m.length!==0&&(m+=f),Ep(m).then(()=>{s(f,a,u)}).catch(_=>{u(_)})}}).catch(f=>{u(f)})})}}async function Qh(i,t,e,r=!1,s=!1){const a=new yT(i);let u;if(s)u=Ip;else try{u=await a.verify(e)}catch{u=await a.verify(e,!0)}const f={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:_,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function rl(i,t,e,r,s){var a;if((a=i._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Qh(i,t,e,e==="getOobCode");return r(i,u)}else return r(i,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Qh(i,t,e,e==="getOobCode");return r(i,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vT(i,t){const e=ul(i,"auth");if(e.isInitialized()){const s=e.getImmediate(),a=e.getOptions();if(Rn(a,t??{}))return s;Me(s,"already-initialized")}return e.initialize({options:t})}function wT(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(An);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function TT(i,t,e){const r=_i(i);Y(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,a=bp(t),{host:u,port:f}=ET(t),m=f===null?"":`:${f}`,_={url:`${a}//${u}${m}/`},y=Object.freeze({host:u,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Rn(_,r.config.emulator)&&Rn(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,Js(u)?Td(`${a}//${u}${m}`):IT()}function bp(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function ET(i){const t=bp(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Jh(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Jh(u)}}}function Jh(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function IT(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return bn("not implemented")}_getIdTokenResponse(t){return bn("not implemented")}_linkToIdToken(t,e){return bn("not implemented")}_getReauthenticationResolver(t){return bn("not implemented")}}async function bT(i,t){return mi(i,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(i,t){return co(i,"POST","/v1/accounts:signInWithPassword",pi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(i,t){return co(i,"POST","/v1/accounts:signInWithEmailLink",pi(i,t))}async function ST(i,t){return co(i,"POST","/v1/accounts:signInWithEmailLink",pi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends iu{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new Gs(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Gs(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rl(t,e,"signInWithPassword",AT);case"emailLink":return PT(t,{email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rl(t,r,"signUpPassword",bT);case"emailLink":return ST(t,{idToken:e,email:this._email,oobCode:this._password});default:Me(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(i,t){return co(i,"POST","/v1/accounts:signInWithIdp",pi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="http://localhost";class Hi extends iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Hi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Me("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...a}=e;if(!r||!s)return null;const u=new Hi(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const e=this.buildRequest();return Dr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Dr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Dr(t,e)}buildRequest(){const t={requestUri:CT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Qs(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kT(i){const t=Ss(Cs(i)).link,e=t?Ss(Cs(t)).deep_link_id:null,r=Ss(Cs(i)).deep_link_id;return(r?Ss(Cs(r)).link:null)||r||e||t||i}class ru{constructor(t){const e=Ss(Cs(t)),r=e.apiKey??null,s=e.oobCode??null,a=RT(e.mode??null);Y(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=kT(t);try{return new ru(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(t,e){return Gs._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=ru.parseLink(e);return Y(r,"argument-error"),Gs._fromEmailAndCode(t,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lo extends su{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends lo{constructor(){super("facebook.com")}static credential(t){return Hi._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gn.credentialFromTaggedObject(t)}static credentialFromError(t){return Gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gn.credential(t.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Hi._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Tn.credential(e,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends lo{constructor(){super("github.com")}static credential(t){return Hi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zn.credentialFromTaggedObject(t)}static credentialFromError(t){return Zn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zn.credential(t.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends lo{constructor(){super("twitter.com")}static credential(t,e){return Hi._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Kn.credentialFromTaggedObject(t)}static credentialFromError(t){return Kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Kn.credential(e,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(i,t){return co(i,"POST","/v1/accounts:signUp",pi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const a=await ze._fromIdTokenResponse(t,r,s),u=Yh(r);return new $i({user:a,providerId:u,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=Yh(r);return new $i({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function Yh(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Nn{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Ra(t,e,r,s)}}function Ap(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(i,a,t,r):a})}async function xT(i,t,e=!1){const r=await Ws(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return $i._forOperation(i,"link",r)}/**
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
 */async function DT(i,t,e=!1){const{auth:r}=i;if(we(r.app))return Promise.reject(Sn(r));const s="reauthenticate";try{const a=await Ws(i,Ap(r,s,t,i),e);Y(a.idToken,r,"internal-error");const u=eu(a.idToken);Y(u,r,"internal-error");const{sub:f}=u;return Y(i.uid===f,r,"user-mismatch"),$i._forOperation(i,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pp(i,t,e=!1){if(we(i.app))return Promise.reject(Sn(i));const r="signIn",s=await Ap(i,r,t),a=await $i._fromIdTokenResponse(i,r,s);return e||await i._updateCurrentUser(a.user),a}async function NT(i,t){return Pp(_i(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(i){const t=_i(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function MT(i,t,e){if(we(i.app))return Promise.reject(Sn(i));const r=_i(i),u=await rl(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LT).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Sp(i),m}),f=await $i._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(f.user),f}function OT(i,t,e){return we(i.app)?Promise.reject(Sn(i)):NT(Ht(i),Kr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sp(i),r})}function VT(i,t,e,r){return Ht(i).onIdTokenChanged(t,e,r)}function FT(i,t,e){return Ht(i).beforeAuthStateChanged(t,e)}function UT(i,t,e,r){return Ht(i).onAuthStateChanged(t,e,r)}function BT(i){return Ht(i).signOut()}const ka="__sak";/**
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
 */class Cp{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=1e3,qT=10;class Rp extends Cp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((u,f,m)=>{this.notifyListeners(u,m)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!e&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);sT()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,qT):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rp.type="LOCAL";const jT=Rp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Cp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}kp.type="SESSION";const Lp=kp;/**
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
 */function HT(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ja{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new Ja(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:a}=e.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const f=Array.from(u).map(async _=>_(e.origin,a)),m=await HT(f);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:m})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ja.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
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
 */class $T{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((f,m)=>{const _=ou("",20);s.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const E=w;if(E.data.eventId===_)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(E.data.response);break;default:clearTimeout(y),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:_,data:e},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function WT(i){sn().location.href=i}/**
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
 */function xp(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function GT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZT(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function KT(){return xp()?self:null}/**
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
 */const Dp="firebaseLocalStorageDb",QT=1,La="firebaseLocalStorage",Np="fbase_key";class uo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Ya(i,t){return i.transaction([La],t?"readwrite":"readonly").objectStore(La)}function JT(){const i=indexedDB.deleteDatabase(Dp);return new uo(i).toPromise()}function sl(){const i=indexedDB.open(Dp,QT);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(La,{keyPath:Np})}catch(s){e(s)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(La)?t(r):(r.close(),await JT(),t(await sl()))})})}async function Xh(i,t,e){const r=Ya(i,!0).put({[Np]:t,value:e});return new uo(r).toPromise()}async function YT(i,t){const e=Ya(i,!1).get(t),r=await new uo(e).toPromise();return r===void 0?null:r.value}function td(i,t){const e=Ya(i,!0).delete(t);return new uo(e).toPromise()}const XT=800,tE=3;class Mp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>tE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ja._getInstance(KT()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await GT(),!this.activeServiceWorker)return;this.sender=new $T(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ZT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sl();return await Xh(t,ka,"1"),await td(t,ka),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xh(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>YT(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>td(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const a=Ya(s,!1).getAll();return new uo(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:a}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mp.type="LOCAL";const eE=Mp;new ao(3e4,6e4);/**
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
 */function Op(i,t){return t?An(t):(Y(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class au extends iu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Dr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Dr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Dr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function nE(i){return Pp(i.auth,new au(i),i.bypassAuthState)}function iE(i){const{auth:t,user:e}=i;return Y(e,t,"internal-error"),DT(e,new au(i),i.bypassAuthState)}async function rE(i){const{auth:t,user:e}=i;return Y(e,t,"internal-error"),xT(e,new au(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,e,r,s,a=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:a,error:u,type:f}=t;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:e,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return nE;case"linkViaPopup":case"linkViaRedirect":return rE;case"reauthViaPopup":case"reauthViaRedirect":return iE;default:Me(this.auth,"internal-error")}}resolve(t){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new ao(2e3,1e4);async function oE(i,t,e){if(we(i.app))return Promise.reject(He(i,"operation-not-supported-in-this-environment"));const r=_i(i);Uw(i,t,su);const s=Op(r,e);return new Vi(r,"signInViaPopup",t,s).executeNotNull()}class Vi extends Vp{constructor(t,e,r,s,a){super(t,e,s,a),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Y(t,this.auth,"internal-error"),t}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const t=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,sE.get())};t()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="pendingRedirect",la=new Map;class cE extends Vp{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=la.get(this.auth._key());if(!t){try{const r=await lE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}la.set(this.auth._key(),t)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lE(i,t){const e=dE(t),r=hE(i);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function uE(i,t){la.set(i._key(),t)}function hE(i){return An(i._redirectPersistence)}function dE(i){return ca(aE,i.config.apiKey,i.name)}async function fE(i,t,e=!1){if(we(i.app))return Promise.reject(Sn(i));const r=_i(i),s=Op(r,t),u=await new cE(r,s,e).execute();return u&&!e&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=10*60*1e3;class mE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!_E(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Fp(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(He(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=pE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(t))}saveEventToCache(t){this.cachedEventUids.add(ed(t)),this.lastProcessedEventTime=Date.now()}}function ed(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function Fp({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function _E(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fp(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gE(i,t={}){return mi(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vE=/^https?/;async function wE(i){if(i.config.emulator)return;const{authorizedDomains:t}=await gE(i);for(const e of t)try{if(TE(e))return}catch{}Me(i,"unauthorized-domain")}function TE(i){const t=nl(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&u.hostname===r}if(!vE.test(e))return!1;if(yE.test(i))return r===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const EE=new ao(3e4,6e4);function nd(){const i=sn().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function IE(i){return new Promise((t,e)=>{var s,a,u;function r(){nd(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{nd(),e(He(i,"network-request-failed"))},timeout:EE.get()})}if((a=(s=sn().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)t(gapi.iframes.getContext());else if((u=sn().gapi)!=null&&u.load)r();else{const f=pT("iframefcb");return sn()[f]=()=>{gapi.load?r():e(He(i,"network-request-failed"))},Ep(`${fT()}?onload=${f}`).catch(m=>e(m))}}).catch(t=>{throw ua=null,t})}let ua=null;function bE(i){return ua=ua||IE(i),ua}/**
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
 */const AE=new ao(5e3,15e3),PE="__/auth/iframe",SE="emulator/auth/iframe",CE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kE(i){const t=i.config;Y(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?tu(t,SE):`https://${i.config.authDomain}/${PE}`,r={apiKey:t.apiKey,appName:i.name,v:qr},s=RE.get(i.config.apiHost);s&&(r.eid=s);const a=i._getFrameworks();return a.length&&(r.fw=a.join(",")),`${e}?${Qs(r).slice(1)}`}async function LE(i){const t=await bE(i),e=sn().gapi;return Y(e,i,"internal-error"),t.open({where:document.body,url:kE(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CE,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=He(i,"network-request-failed"),f=sn().setTimeout(()=>{a(u)},AE.get());function m(){sn().clearTimeout(f),s(r)}r.ping(m).then(m,()=>{a(u)})}))}/**
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
 */const xE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DE=500,NE=600,ME="_blank",OE="http://localhost";class id{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VE(i,t,e,r=DE,s=NE){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const m={...xE,width:r.toString(),height:s.toString(),top:a,left:u},_=ae().toLowerCase();e&&(f=mp(_)?ME:e),fp(_)&&(t=t||OE,m.scrollbars="yes");const y=Object.entries(m).reduce((E,[k,V])=>`${E}${k}=${V},`,"");if(rT(_)&&f!=="_self")return FE(t||"",f),new id(null);const w=window.open(t||"",f,y);Y(w,i,"popup-blocked");try{w.focus()}catch{}return new id(w)}function FE(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const UE="__/auth/handler",BE="emulator/auth/handler",zE=encodeURIComponent("fac");async function rd(i,t,e,r,s,a){Y(i.config.authDomain,i,"auth-domain-config-required"),Y(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:qr,eventId:s};if(t instanceof su){t.setDefaultLanguage(i.languageCode),u.providerId=t.providerId||"",Jm(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(t instanceof lo){const y=t.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}i.tenantId&&(u.tid=i.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),_=m?`#${zE}=${encodeURIComponent(m)}`:"";return`${qE(i)}?${Qs(f).slice(1)}${_}`}function qE({config:i}){return i.emulator?tu(i,BE):`https://${i.authDomain}/${UE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="webStorageSupport";class jE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lp,this._completeRedirectFn=fE,this._overrideRedirectResult=uE}async _openPopup(t,e,r,s){var u;Dn((u=this.eventManagers[t._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await rd(t,e,r,nl(),s);return VE(t,a,ou())}async _openRedirect(t,e,r,s){await this._originValidation(t);const a=await rd(t,e,r,nl(),s);return WT(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:a}=this.eventManagers[e];return s?Promise.resolve(s):(Dn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await LE(t),r=new mE(t);return e.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Pc,{type:Pc},s=>{var u;const a=(u=s==null?void 0:s[0])==null?void 0:u[Pc];a!==void 0&&e(!!a),Me(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=wE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wp()||pp()||nu()}}const HE=jE;var sd="@firebase/auth",od="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GE(i){Mr(new Bi("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=r.options;Y(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const m={apiKey:u,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tp(i)},_=new uT(r,s,a,m);return wT(_,e),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Mr(new Bi("auth-internal",t=>{const e=_i(t.getProvider("auth").getImmediate());return(r=>new $E(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(sd,od,WE(i)),Xn(sd,od,"esm2020")}/**
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
 */const ZE=5*60,KE=wd("authIdTokenMaxAge")||ZE;let ad=null;const QE=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>KE)return;const s=e==null?void 0:e.token;ad!==s&&(ad=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JE(i=Ad()){const t=ul(i,"auth");if(t.isInitialized())return t.getImmediate();const e=vT(i,{popupRedirectResolver:HE,persistence:[eE,jT,Lp]}),r=wd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=QE(a.toString());FT(e,u,()=>u(e.currentUser)),VT(e,f=>u(f))}}const s=yd("auth");return s&&TT(e,`http://${s}`),e}function YE(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}hT({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=s=>{const a=He("internal-error");a.customData=s,e(a)},r.type="text/javascript",r.charset="UTF-8",YE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GE("Browser");const Up={apiKey:"AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",authDomain:"trippy-planner-807df.firebaseapp.com",projectId:"trippy-planner-807df",storageBucket:"trippy-planner-807df.firebasestorage.app",messagingSenderId:"376063703433",appId:"1:376063703433:web:..."},Bp=!!Up.apiKey;let zp=null,qp=null;function XE(){if(!Bp)return!1;try{const i=bd(Up);return zp=_w(i),qp=JE(i),!0}catch(i){return console.warn("Firebase init failed — running in guest mode",i),!1}}const jp=()=>Bp,Ee=()=>zp,ho=()=>qp;let Fs=null;function tI(i){if(!jp()){i(null);return}const t=ho();if(!t){i(null);return}UT(t,e=>{Fs=e,i(e)})}const Xa=()=>Fs;async function eI(){return oE(ho(),new Tn)}async function nI(i,t){return OT(ho(),i,t)}async function iI(i,t){return MT(ho(),i,t)}async function rI(){return BT(ho())}function tc(i){const t=i.querySelector(".auth-slot");if(t){if(!jp()){t.innerHTML='<span class="auth-guest-note">Guest mode</span>';return}if(Fs){const e=Fs.displayName||Fs.email||"User";t.innerHTML=`
      <span class="auth-user-name">${sI(e)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `,t.querySelector(".auth-signout-btn").addEventListener("click",()=>rI())}else t.innerHTML='<button class="ghost-btn auth-signin-btn">Sign in</button>',t.querySelector(".auth-signin-btn").addEventListener("click",()=>oI())}}function sI(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function oI(){const i=document.getElementById("auth-modal");if(i){i.remove();return}const t=document.createElement("div");t.id="auth-modal",t.className="auth-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t);const e=r=>{t.querySelector("#auth-err").textContent=r};t.querySelector("#auth-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()}),t.querySelector("#auth-google").addEventListener("click",async()=>{try{await eI(),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-signin").addEventListener("click",async()=>{try{await nI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-create").addEventListener("click",async()=>{try{await iI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}})}let ha={};function aI(i){return ha=i,window.addEventListener("hashchange",Sc),{start:Sc,refresh:Sc}}function Cn(i){window.location.hash=i}function Sc(){const i=window.location.hash.slice(1)||"/";for(const[t,e]of Object.entries(ha)){const r=cI(t,i);if(r!==null){e(r);return}}ha["/"]&&ha["/"]({})}function cI(i,t){if(i==="/")return t==="/"||t===""?{}:null;const e=i.split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(e.length!==r.length)return null;const s={};for(let a=0;a<e.length;a++)if(e[a].startsWith(":"))s[e[a].slice(1)]=decodeURIComponent(r[a]);else if(e[a]!==r[a])return null;return s}function cd(i,t){var e;return!t||!i?null:i.ownerId===t?"owner":((e=i.members)==null?void 0:e[t])||null}const ec=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),lI=()=>Math.random().toString(36).slice(2,9).toUpperCase(),uI=()=>({id:ec(),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1}),Hp="trippy-planner-trips",cu=i=>`trippy-trip-${i}`,xa=()=>{try{return JSON.parse(localStorage.getItem(Hp)||"[]")}catch{return[]}},$p=i=>{try{localStorage.setItem(Hp,JSON.stringify(i))}catch{}},Zs=i=>{try{return JSON.parse(localStorage.getItem(cu(i))||"null")}catch{return null}},Nr=i=>{try{localStorage.setItem(cu(i.id),JSON.stringify(i))}catch{}},hI=i=>{try{localStorage.removeItem(cu(i))}catch{}};function ld(i){return i?typeof(i==null?void 0:i.toMillis)=="function"?i.toMillis():typeof i=="number"?i:0:0}function ol(i){return{memberUids:[],members:{},ownerName:"",...i,createdAt:ld(i.createdAt),updatedAt:ld(i.updatedAt)}}function dI(i,t,e){let r=[],s=[],a=null,u=null;function f(){const w=[...r];for(const E of s)w.find(k=>k.id===E.id)||w.push(E);w.forEach(E=>Nr(E)),$p(w.map(({id:E,name:k,createdAt:V})=>({id:E,name:k,createdAt:V}))),e([...w])}function m(w){a&&(a(),a=null),u&&(u(),u=null);const E=Ee();if(!E||!w)return;const k=Uh(tl(E,"trips"),Bh("ownerId","==",w),Lw("updatedAt","desc"));a=el(k,U=>{r=U.docs.map(q=>ol({id:q.id,...q.data()})),f()},U=>console.warn("Firestore owned trips:",U));const V=Uh(tl(E,"trips"),Bh("memberUids","array-contains",w));u=el(V,U=>{s=U.docs.map(q=>ol({id:q.id,...q.data()})),f()},U=>console.warn("Firestore shared trips:",U))}async function _(w){const E=Ee();if(!(!E||!i))try{await so(be(E,"trips",w.id),{...w,createdAt:w.createdAt||ni(),updatedAt:ni()},{merge:!0})}catch(k){console.warn("Firestore write:",k)}}const y=xa().map(w=>Zs(w.id)||{...w,days:[]});return r=y,setTimeout(()=>e([...y]),0),i&&m(i),{getAll:()=>{const w=[...r];for(const E of s)w.find(k=>k.id===E.id)||w.push(E);return w},async create(w){const E=ec(),k={id:E,name:w,ownerId:i||null,ownerName:t||"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]};return r.unshift(k),Nr(k),f(),e([...this.getAll()]),await _(k),E},async delete(w){r=r.filter(k=>k.id!==w),s=s.filter(k=>k.id!==w),hI(w),f();const E=Ee();if(E&&i)try{await Ow(be(E,"trips",w))}catch{}},async rename(w,E){const k=this.getAll().find(U=>U.id===w);if(!k)return;k.name=E,k.updatedAt=Date.now(),Nr(k),e([...this.getAll()]);const V=Ee();if(V&&i)try{await oo(be(V,"trips",w),{name:E,updatedAt:ni()})}catch{}},setUserId(w,E){i=w,t=E||"",w?m(w):(a&&(a(),a=null),u&&(u(),u=null),r=xa().map(k=>Zs(k.id)||{...k,days:[]}),s=[],e([...r]))},destroy(){a&&(a(),a=null),u&&(u(),u=null)}}}function Wp(i,t,e){let r=Zs(i)||{id:i,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=Array.isArray(r.days)?r.days:[],a=null,u=null;function f(){r.days=s,r.updatedAt=Date.now(),Nr(r)}function m(){clearTimeout(u),u=setTimeout(async()=>{const y=Ee();if(!(!y||!t))try{await so(be(y,"trips",i),{...r,days:s,updatedAt:ni()},{merge:!0})}catch(w){console.warn("Firestore write:",w)}},1500)}function _(){f(),t&&m(),e([...s])}if(t){const y=Ee();y&&(a=el(be(y,"trips",i),w=>{if(!w.exists())return;const E=w.data();r=ol({id:i,...E}),s=Array.isArray(r.days)?r.days:[],f(),e([...s])},w=>console.warn("Firestore trip:",w)))}return{tripName:()=>r.name||"Trip",tripData:()=>({...r}),getAll:()=>[...s],add(y,w){const E={...uI(),date:y,destination:w};s.push(E),s.sort((k,V)=>k.date.localeCompare(V.date)),_()},update(y,w,E){const k=s.find(V=>V.id===y);k&&(k[w]=E,_())},remove(y){s=s.filter(w=>w.id!==y),_()},loadFromCSV(y){s=y,_()},toCSV(){const y=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],w=s.map(E=>[E.date,E.destination,E.event,E.travelDay?"Y":"N",E.accommodation,E.accomCost,E.travelDetails,E.travelCost,E.finalised?"Y":"N"].map(k=>`"${(k??"").toString().replace(/"/g,'""')}"`).join(","));return[y.join(","),...w].join(`
`)},metrics(){const y=s.length,w=s.filter(V=>V.travelDay).length,E=s.filter(V=>V.finalised).length,k=s.reduce((V,U)=>V+Number(U.accomCost||0)+Number(U.travelCost||0),0);return{total:y,travelDays:w,finalised:E,cost:k}},destroy(){clearTimeout(u),a&&(a(),a=null)}}}async function fI(i,t,e){const r=Ee();if(!r||!e)throw new Error("Must be signed in to share");const s=lI();return await so(be(r,"invites",s),{tripId:i,role:t,createdBy:e,createdAt:ni()}),s}async function pI(i,t){const e=Ee();if(!e)throw new Error("Firebase not configured");const r=await Nw(be(e,"invites",i));if(!r.exists())throw new Error("Invite not found or already used");const{tripId:s,role:a}=r.data();return await oo(be(e,"trips",s),{[`members.${t}`]:a,memberUids:Cw(t)}),s}async function mI(i,t,e){const r=Ee();r&&await oo(be(r,"trips",i),{[`members.${t}`]:e})}async function _I(i,t){const e=Ee();e&&await oo(be(e,"trips",i),{[`members.${t}`]:Sw(),memberUids:Rw(t)})}async function gI(i,t,e){const r=Zs(t)||{id:t,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=[...r.days,...i.map(u=>({...u,id:ec()}))].sort((u,f)=>u.date.localeCompare(f.date));r.days=s,r.updatedAt=Date.now(),Nr(r);const a=Ee();if(a&&e)try{await oo(be(a,"trips",t),{days:s,updatedAt:ni()})}catch(u){console.warn("copyDaysToTrip Firestore:",u)}}async function yI(i,t){const e=`trippy-migrated-v2-${i}`;if(localStorage.getItem(e))return;const r=Ee();if(!r){localStorage.setItem(e,"1");return}try{const s=await Mw(tl(r,"users",i,"trips"));if(s.empty){localStorage.setItem(e,"1");return}for(const a of s.docs){const u=a.data();await so(be(r,"trips",a.id),{...u,id:a.id,ownerId:i,ownerName:t||"",memberUids:u.memberUids||[],members:u.members||{}},{merge:!0})}localStorage.setItem(e,"1")}catch(s){console.warn("Old-path migration failed:",s)}}function vI(){try{const i=localStorage.getItem("trippy-planner-data");if(!i)return null;const t=JSON.parse(i);return!Array.isArray(t)||t.length===0?(localStorage.removeItem("trippy-planner-data"),null):t}catch{return null}}function wI(i,t,e){const r=ec(),s={id:r,name:i,ownerId:e||null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:t};Nr(s);const a=xa();a.unshift({id:r,name:i,createdAt:s.createdAt}),$p(a),localStorage.removeItem("trippy-planner-data");const u=Ee();return u&&e&&so(be(u,"trips",r),{...s,createdAt:ni(),updatedAt:ni()}).catch(console.warn),r}function Gp(i,t,e){var y;(y=document.getElementById("share-modal-overlay"))==null||y.remove();const r=t.members||{},s=t.memberUids||[],a=t.ownerId===e,u=r[e]||null,f=Object.entries(r).map(([w,E])=>`
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
          <p>Shared with you by <strong>${da(t.ownerName||"the trip owner")}</strong>.</p>
          ${u!=="editor"?'<p class="share-readonly-note">You have read-only access. Ask the owner for edit access.</p>':"<p>You can view and edit this trip.</p>"}
        </div>
      `}

      <div class="modal-actions">
        <button class="ghost-btn" id="share-close-btn">Close</button>
      </div>
    </div>
  `,document.body.appendChild(m);const _=()=>m.remove();document.getElementById("share-close-btn").addEventListener("click",_),m.addEventListener("click",w=>{w.target===m&&_()}),a&&(document.getElementById("gen-link-btn").addEventListener("click",async()=>{const w=document.getElementById("gen-link-btn");w.textContent="Generating…",w.disabled=!0;try{const E=document.getElementById("invite-role").value,k=await fI(i,E,e),V=`${location.origin}${location.pathname}#/join/${k}`;document.getElementById("invite-link-input").value=V,document.getElementById("copy-link-btn").style.display=""}catch(E){alert("Failed to generate invite link: "+E.message)}finally{w.textContent="Generate",w.disabled=!1}}),document.getElementById("copy-link-btn").addEventListener("click",()=>{const w=document.getElementById("invite-link-input").value;navigator.clipboard.writeText(w).then(()=>{const E=document.getElementById("copy-link-btn");E.textContent="Copied!",setTimeout(()=>{E.textContent="Copy"},2e3)})}),m.addEventListener("change",async w=>{if(!w.target.matches(".share-role-select"))return;const E=w.target.dataset.uid;try{await mI(i,E,w.target.value)}catch(k){console.warn("Role update failed:",k)}}),m.addEventListener("click",async w=>{if(!w.target.matches(".share-remove-btn"))return;const E=w.target.dataset.uid;if(confirm("Remove this collaborator from the trip?"))try{await _I(i,E),w.target.closest(".share-member-row").remove()}catch(k){console.warn("Remove member failed:",k)}}))}function TI(i,t,e){var _;(_=document.getElementById("copy-days-overlay"))==null||_.remove();const r=xa().map(y=>Zs(y.id)).filter(Boolean),s=e?r.filter(y=>y.id!==i&&(y.ownerId===e||!y.ownerId)):r.filter(y=>y.id!==i),a=s.length?s.map(y=>`<option value="${y.id}">${da(y.name)}</option>`).join(""):"<option disabled>No own trips found — create one first</option>",u=t.map((y,w)=>`
    <label class="copy-day-row">
      <input type="checkbox" class="copy-day-check" value="${w}">
      <span class="copy-day-date">${EI(y.date)}</span>
      <span class="copy-day-dest">${da(y.destination||"Unknown")}</span>
      ${y.event?`<span class="copy-day-event">${da(y.event)}</span>`:""}
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
  `,document.body.appendChild(f);const m=()=>f.remove();document.getElementById("copy-cancel-btn").addEventListener("click",m),f.addEventListener("click",y=>{y.target===f&&m()}),document.getElementById("copy-select-all").addEventListener("click",()=>{f.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!0})}),document.getElementById("copy-select-none").addEventListener("click",()=>{f.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!1})}),document.getElementById("copy-confirm-btn").addEventListener("click",async()=>{const y=[...f.querySelectorAll(".copy-day-check:checked")];if(!y.length){alert("Select at least one day.");return}const w=y.map(V=>t[Number(V.value)]),E=document.getElementById("copy-target-trip").value,k=document.getElementById("copy-confirm-btn");k.textContent="Copying…",k.disabled=!0;try{await gI(w,E,e),m(),alert(`${w.length} day${w.length!==1?"s":""} copied successfully.`)}catch(V){console.warn("Copy failed:",V),alert("Copy failed: "+V.message),k.textContent="Copy selected",k.disabled=!1}})}function da(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function EI(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}let En=null,Qn="all";function Zp(i){const t=Xa(),e=(t==null?void 0:t.uid)||null,r=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"";En&&(En.destroy(),En=null),En=dI(e,r,s=>Kp(i,s,e))}function Kp(i,t,e){var m;const r=vI(),s=bI(t,e);t.some(_=>e&&_.ownerId&&_.ownerId!==e),i.innerHTML=`
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="auth-slot"></div>
    </div>

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
        <button class="filter-tab ${Qn==="all"?"active":""}" data-filter="all">All Trips</button>
        <button class="filter-tab ${Qn==="mine"?"active":""}" data-filter="mine">My Trips</button>
        <button class="filter-tab ${Qn==="shared"?"active":""}" data-filter="shared">Shared with Me</button>
      </div>
    `:""}

    ${s.length===0?`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>${AI()}</p>
      </div>
    `:`
      <div class="landing-grid" id="trips-grid">
        ${s.map(_=>II(_,e)).join("")}
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
  `,tc(i),r&&(i.querySelector("#mig-save").addEventListener("click",()=>{const _=i.querySelector("#mig-name").value.trim()||"My Trip";wI(_,r,e),Zp(i)}),i.querySelector("#mig-skip").addEventListener("click",()=>{localStorage.removeItem("trippy-planner-data"),i.querySelector("#mig-banner").remove()})),i.querySelectorAll(".filter-tab").forEach(_=>{_.addEventListener("click",()=>{Qn=_.dataset.filter,Kp(i,En.getAll(),e)})});const a=i.querySelector("#new-trip-modal"),u=i.querySelector("#trip-name-input");i.querySelector("#new-trip-btn").addEventListener("click",()=>{a.style.display="flex",u.focus()}),i.querySelector("#modal-cancel").addEventListener("click",()=>{a.style.display="none",u.value=""}),a.addEventListener("click",_=>{_.target===a&&(a.style.display="none",u.value="")});async function f(){const _=u.value.trim();if(!_){u.focus();return}a.style.display="none",u.value="";const y=await En.create(_);Cn(`/trip/${y}`)}i.querySelector("#modal-create").addEventListener("click",f),u.addEventListener("keydown",_=>{_.key==="Enter"&&f(),_.key==="Escape"&&(a.style.display="none",u.value="")}),(m=i.querySelector("#trips-grid"))==null||m.addEventListener("click",async _=>{const y=_.target.closest("[data-trip-id]");if(!y)return;const w=y.dataset.tripId,E=En.getAll().find(k=>k.id===w);if(_.target.closest(".trip-open-btn"))Cn(`/trip/${w}`);else if(_.target.closest(".trip-globe-btn"))Cn(`/globe/${w}`);else if(_.target.closest(".trip-share-btn")){if(!e){alert("Sign in to share trips.");return}Gp(w,E,e)}else if(_.target.closest(".trip-delete-btn"))confirm("Delete this trip? This cannot be undone.")&&await En.delete(w);else if(_.target.closest(".trip-card-title")){if(!(!e||!(E!=null&&E.ownerId)||E.ownerId===e))return;const V=_.target.closest(".trip-card-title"),U=V.textContent.trim(),q=document.createElement("input");q.className="dark-input trip-rename-input",q.value=U,V.replaceWith(q),q.focus(),q.select();const ot=async()=>{const ut=q.value.trim()||U;await En.rename(w,ut)};q.addEventListener("blur",ot),q.addEventListener("keydown",ut=>{ut.key==="Enter"&&q.blur()})}})}function II(i,t){var k;const e=i.days||[],{total:r,finalised:s,cost:a}=PI(e),u=r?Math.round(s/r*100):0,f=e.length?`${ud(e[0].date)} – ${ud(e[e.length-1].date)}`:"No days yet",m=[...new Set(e.map(V=>V.destination).filter(Boolean))],_=m.slice(0,3),y=!t||!i.ownerId||i.ownerId===t,w=i.ownerId&&t&&i.ownerId!==t?((k=i.members)==null?void 0:k[t])||"viewer":null,E=(i.memberUids||[]).length;return`
    <div class="trip-card ${w?"trip-card-shared":""}" data-trip-id="${i.id}">
      <div class="trip-card-top">
        <div class="trip-card-title-row">
          <div class="trip-card-title">${Cc(i.name)}</div>
          ${w?`<span class="role-badge role-${w}">${w}</span>`:""}
          ${y&&E>0?`<span class="collab-count" title="${E} collaborator${E!==1?"s":""}">👥 ${E}</span>`:""}
        </div>
        <div class="trip-card-meta">
          ${w?`<span class="trip-card-owner">by ${Cc(i.ownerName||"Unknown")}</span>`:""}
          <span class="trip-card-range">${f}</span>
        </div>
      </div>
      ${_.length?`
        <div class="trip-card-dests">
          ${_.map(V=>`<span class="dest-tag">${Cc(V)}</span>`).join("")}
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
  `}function bI(i,t){return Qn==="mine"?i.filter(e=>!t||!e.ownerId||e.ownerId===t):Qn==="shared"?i.filter(e=>t&&e.ownerId&&e.ownerId!==t):i}function AI(){return Qn==="shared"?"No trips have been shared with you yet.":"No trips yet — create your first one above."}function PI(i){return{total:i.length,finalised:i.filter(t=>t.finalised).length,cost:i.reduce((t,e)=>t+Number(e.accomCost||0)+Number(e.travelCost||0),0)}}function ud(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}function Cc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const hd=["January","February","March","April","May","June","July","August","September","October","November","December"],SI=["Su","Mo","Tu","We","Th","Fr","Sa"];class CI{constructor(t,e,r){this.wrap=t,this.input=e,this.onSelect=r,this.selected=null;const s=new Date;this.year=s.getFullYear(),this.month=s.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",t=>{this.wrap.contains(t.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(t){this.month+=t,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const t=this._dropdown.querySelector("#dp-month-label"),e=this._dropdown.querySelector("#dp-grid");t.textContent=`${hd[this.month]} ${this.year}`;const r=new Date(this.year,this.month,1).getDay(),s=new Date(this.year,this.month+1,0).getDate(),a=new Date;let u=SI.map(f=>`<div class="dp-dh">${f}</div>`).join("");for(let f=0;f<r;f++)u+='<button class="dp-day empty" disabled></button>';for(let f=1;f<=s;f++){const m=this.dateString(this.year,this.month+1,f),_=this.selected===m,y=a.getFullYear()===this.year&&a.getMonth()===this.month&&a.getDate()===f;let w="dp-day";_?w+=" selected":y&&(w+=" today"),u+=`<button class="${w}" data-date="${m}">${f}</button>`}e.innerHTML=u,e.querySelectorAll(".dp-day:not(.empty)").forEach(f=>{f.addEventListener("click",()=>{this.selected=f.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(t,e,r){return`${t}-${String(e).padStart(2,"0")}-${String(r).padStart(2,"0")}`}formatDisplay(t){const[e,r,s]=t.split("-");return`${s} ${hd[parseInt(r)-1]} ${e}`}reset(){this.selected=null,this.input.value=""}}const RI=["January","February","March","April","May","June","July","August","September","October","November","December"];function kI(i){if(!i)return"";const[t,e,r]=i.split("-");return`${r} ${RI[parseInt(e)-1]} ${t}`}function Xo(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function LI(i,t,e,r,s){const a=e.metrics(),u=i.querySelector("#metrics-row");u&&(u.style.display=t.length?"grid":"none",i.querySelector("#m-days").textContent=a.total,i.querySelector("#m-travel").textContent=a.travelDays,i.querySelector("#m-cost").textContent="$"+Number(a.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const f=i.querySelector("#progress-wrap");if(f)if(t.length){f.style.display="block";const _=a.total?Math.round(a.finalised/a.total*100):0;i.querySelector("#progress-fill").style.width=_+"%",i.querySelector("#progress-count").textContent=`${a.finalised} / ${a.total} days finalised`}else f.style.display="none";const m=i.querySelector("#itinerary-list");if(m){if(t.length===0){m.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}m.innerHTML=t.map(_=>{const y=r===_.id,w=_.finalised?'<span class="day-badge badge-final">Finalised</span>':_.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',E=y?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${_.id}" data-field="event"
              value="${Xo(_.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${_.id}" data-field="accommodation"
              value="${Xo(_.accommodation)}" placeholder="Hotel / Airbnb name">
          </div>
          <div class="detail-field">
            <label>Accommodation Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${_.id}" data-field="accomCost" value="${_.accomCost}">
          </div>
          <div class="detail-field">
            <label>Travel Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${_.id}" data-field="travelCost" value="${_.travelCost}">
          </div>
          <div class="detail-field detail-full">
            <label>Travel Details</label>
            <input class="dark-input" data-id="${_.id}" data-field="travelDetails"
              value="${Xo(_.travelDetails)}" placeholder="Flight / train / driving info">
          </div>
        </div>
        <div class="detail-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${_.id}" data-field="travelDay"
              ${_.travelDay?"checked":""}>
            Travel day
          </label>
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${_.id}" data-field="finalised"
              ${_.finalised?"checked":""}>
            Finalised
          </label>
          <button class="delete-btn" data-delete="${_.id}">Remove</button>
        </div>
      </div>`:"";return`
      <div class="day-card">
        <div class="day-header" data-toggle="${_.id}">
          <div class="day-dot"></div>
          <div class="day-date">${kI(_.date)}</div>
          <div class="day-dest">${Xo(_.destination)}</div>
          ${w}
          <span class="chevron${y?" open":""}">&#9654;</span>
        </div>
        ${E}
      </div>`}).join(""),m.querySelectorAll("[data-toggle]").forEach(_=>{_.addEventListener("click",()=>{const y=_.dataset.toggle;s(r===y?null:y)})}),m.querySelectorAll("[data-field]").forEach(_=>{const y=()=>{const w=_.type==="checkbox"?_.checked:_.value;e.update(_.dataset.id,_.dataset.field,w)};_.addEventListener(_.type==="checkbox"?"change":"blur",y)}),m.querySelectorAll("[data-delete]").forEach(_=>{_.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&e.remove(_.dataset.delete)})})}}const xI=["January","February","March","April","May","June","July","August","September","October","November","December"],DI=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Rc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function ta(i,t,e,r){const s=i.querySelector("#cal-title"),a=i.querySelector("#cal-days-header"),u=i.querySelector("#cal-body");if(!s||!a||!u)return;s.textContent=`${xI[r]} ${e}`,a.innerHTML=DI.map(E=>`<div class="cal-header-cell">${E}</div>`).join("");const f={};t.forEach(E=>{E.date&&(f[E.date]=E)});const m=new Date(e,r,1).getDay(),_=new Date(e,r+1,0).getDate(),y=new Date;let w="";for(let E=0;E<m;E++)w+='<div class="cal-cell empty"></div>';for(let E=1;E<=_;E++){const k=`${e}-${String(r+1).padStart(2,"0")}-${String(E).padStart(2,"0")}`,V=y.getFullYear()===e&&y.getMonth()===r&&y.getDate()===E,U=f[k];let q="cal-cell";V?q+=" today":U&&(q+=" has-trip");let ot=`<div class="cal-date-num${V?" today-num":""}">${E}</div>`;U&&(ot+=`<div class="cal-dest">${Rc(U.destination)}</div>`,U.event&&(ot+=`<div class="cal-note">${Rc(U.event)}</div>`),U.travelDetails&&(ot+=`<div class="cal-travel-note">${Rc(U.travelDetails)}</div>`)),w+=`<div class="${q}">${ot}</div>`}u.innerHTML=w}let Xt=null;function NI(i,t){Xt&&(Xt.destroy(),Xt=null);const e=Xa(),r=(e==null?void 0:e.uid)||null;Xt=Wp(t,r,Q=>{f=Q,ot()});let s=Xt.tripData(),a=cd(s,r),u=a==="viewer";i.innerHTML=`
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
  `;let f=Xt.getAll(),m=null,_="planner";const y=new Date;let w=y.getFullYear(),E=y.getMonth();i.querySelector("#trip-name-label").textContent=Xt.tripName(),tc(i);function k(){s=Xt.tripData(),a=cd(s,r),u=a==="viewer";const Q=i.querySelector("#share-trip-btn"),vt=i.querySelector("#copy-days-btn");a==="owner"&&r?(Q.style.display="",vt.style.display="none"):a==="viewer"?(Q.style.display="none",vt.style.display=""):a==="editor"&&(Q.style.display="none",vt.style.display="none")}k(),i.querySelector("#back-btn").addEventListener("click",()=>Cn("/")),i.querySelector("#globe-nav-btn").addEventListener("click",()=>Cn(`/globe/${t}`)),i.querySelector("#share-trip-btn").addEventListener("click",()=>{Gp(t,Xt.tripData(),r)}),i.querySelector("#copy-days-btn").addEventListener("click",()=>{TI(t,Xt.getAll(),r)});let V=null,U=null;if(!u){let Lt=function(){const C=bt.value.trim();if(!V||!C){vt.style.borderColor=V?"":"var(--accent)",bt.style.borderColor=C?"":"var(--accent)";return}vt.style.borderColor="",bt.style.borderColor="",Xt.add(V,C),V=null,U.reset(),bt.value="",bt.focus()};var ut=Lt;const Q=i.querySelector("#dp-wrap"),vt=i.querySelector("#new-date-display");U=new CI(Q,vt,C=>{V=C}),U.init();const bt=i.querySelector("#new-dest");i.querySelector("#add-btn").addEventListener("click",Lt),bt.addEventListener("keydown",C=>{C.key==="Enter"&&Lt()}),i.querySelector("#download-btn").addEventListener("click",()=>{const C=new Blob([Xt.toCSV()],{type:"text/csv"}),I=document.createElement("a");I.href=URL.createObjectURL(C),I.download=`${Xt.tripName().replace(/\s+/g,"_")}.csv`,I.click(),URL.revokeObjectURL(I.href)}),i.querySelector("#upload-btn").addEventListener("click",()=>{i.querySelector("#upload-input").click()}),i.querySelector("#upload-input").addEventListener("change",C=>{const I=C.target.files[0];if(!I)return;const P=new FileReader;P.onload=R=>{const x=R.target.result.trim().split(`
`).slice(1).map(b=>{const qt=(b.match(/(".*?"|[^,]+)/g)||[]).map(Qt=>Qt.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:qt[0]||"",destination:qt[1]||"",event:qt[2]||"",travelDay:qt[3]==="Y",accommodation:qt[4]||"",accomCost:parseFloat(qt[5])||0,travelDetails:qt[6]||"",travelCost:parseFloat(qt[7])||0,finalised:qt[8]==="Y"}}).filter(b=>b.date&&b.destination);Xt.loadFromCSV(x)},P.readAsText(I),C.target.value=""})}i.querySelectorAll(".tab").forEach(Q=>{Q.addEventListener("click",()=>{_=Q.dataset.tab,i.querySelectorAll(".tab").forEach(vt=>vt.classList.toggle("active",vt.dataset.tab===_)),i.querySelector("#tab-planner").style.display=_==="planner"?"":"none",i.querySelector("#tab-calendar").style.display=_==="calendar"?"":"none",_==="calendar"&&ta(i,f,w,E)})}),i.querySelector("#cal-prev").addEventListener("click",()=>{E--,E<0&&(E=11,w--),ta(i,f,w,E)}),i.querySelector("#cal-next").addEventListener("click",()=>{E++,E>11&&(E=0,w++),ta(i,f,w,E)});function q(){return u?new Proxy(Xt,{get(Q,vt){return["add","update","remove","loadFromCSV"].includes(vt)?()=>{}:Q[vt]}}):Xt}function ot(){k(),i.querySelector("#trip-name-label").textContent=Xt.tripName(),LI(i,f,q(),m,Q=>{m=Q,ot()}),_==="calendar"&&ta(i,f,w,E)}ot()}var MI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function OI(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var al={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})(MI,function(e){var r="1.9.4";function s(n){var o,l,h,p;for(l=1,h=arguments.length;l<h;l++){p=arguments[l];for(o in p)n[o]=p[o]}return n}var a=Object.create||function(){function n(){}return function(o){return n.prototype=o,new n}}();function u(n,o){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var h=l.call(arguments,2);return function(){return n.apply(o,h.length?h.concat(l.call(arguments)):arguments)}}var f=0;function m(n){return"_leaflet_id"in n||(n._leaflet_id=++f),n._leaflet_id}function _(n,o,l){var h,p,v,A;return A=function(){h=!1,p&&(v.apply(l,p),p=!1)},v=function(){h?p=arguments:(n.apply(l,arguments),setTimeout(A,o),h=!0)},v}function y(n,o,l){var h=o[1],p=o[0],v=h-p;return n===h&&l?n:((n-p)%v+v)%v+p}function w(){return!1}function E(n,o){if(o===!1)return n;var l=Math.pow(10,o===void 0?6:o);return Math.round(n*l)/l}function k(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function V(n){return k(n).split(/\s+/)}function U(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in o)n.options[l]=o[l];return n.options}function q(n,o,l){var h=[];for(var p in n)h.push(encodeURIComponent(l?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!o||o.indexOf("?")===-1?"?":"&")+h.join("&")}var ot=/\{ *([\w_ -]+) *\}/g;function ut(n,o){return n.replace(ot,function(l,h){var p=o[h];if(p===void 0)throw new Error("No value provided for variable "+l);return typeof p=="function"&&(p=p(o)),p})}var Q=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function vt(n,o){for(var l=0;l<n.length;l++)if(n[l]===o)return l;return-1}var bt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function Lt(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var C=0;function I(n){var o=+new Date,l=Math.max(0,16-(o-C));return C=o+l,window.setTimeout(n,l)}var P=window.requestAnimationFrame||Lt("RequestAnimationFrame")||I,R=window.cancelAnimationFrame||Lt("CancelAnimationFrame")||Lt("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function S(n,o,l){if(l&&P===I)n.call(o);else return P.call(window,u(n,o))}function x(n){n&&R.call(window,n)}var b={__proto__:null,extend:s,create:a,bind:u,get lastId(){return f},stamp:m,throttle:_,wrapNum:y,falseFn:w,formatNum:E,trim:k,splitWords:V,setOptions:U,getParamString:q,template:ut,isArray:Q,indexOf:vt,emptyImageUrl:bt,requestFn:P,cancelFn:R,requestAnimFrame:S,cancelAnimFrame:x};function Ct(){}Ct.extend=function(n){var o=function(){U(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,h=a(l);h.constructor=o,o.prototype=h;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(o[p]=this[p]);return n.statics&&s(o,n.statics),n.includes&&(qt(n.includes),s.apply(null,[h].concat(n.includes))),s(h,n),delete h.statics,delete h.includes,h.options&&(h.options=l.options?a(l.options):{},s(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,A=h._initHooks.length;v<A;v++)h._initHooks[v].call(this)}},o},Ct.include=function(n){var o=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},Ct.mergeOptions=function(n){return s(this.prototype.options,n),this},Ct.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function qt(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=Q(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Qt={on:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o);else{n=V(n);for(var p=0,v=n.length;p<v;p++)this._on(n[p],o,l)}return this},off:function(n,o,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],o);else{n=V(n);for(var p=arguments.length===1,v=0,A=n.length;v<A;v++)p?this._off(n[v]):this._off(n[v],o,l)}return this},_on:function(n,o,l,h){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,l)===!1){l===this&&(l=void 0);var p={fn:o,ctx:l};h&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,o,l){var h,p,v;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(p=0,v=h.length;p<v;p++)h[p].fn=w;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var A=this._listens(n,o,l);if(A!==!1){var N=h[A];this._firingCount&&(N.fn=w,this._events[n]=h=h.slice()),h.splice(A,1)}}},fire:function(n,o,l){if(!this.listens(n,l))return this;var h=s({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var v=0,A=p.length;v<A;v++){var N=p[v],O=N.fn;N.once&&this.off(n,O,N.ctx),O.call(N.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(n,o,l,h){typeof n!="string"&&console.warn('"string" type argument expected');var p=o;typeof o!="function"&&(h=!!o,p=void 0,l=void 0);var v=this._events&&this._events[n];if(v&&v.length&&this._listens(n,p,l)!==!1)return!0;if(h){for(var A in this._eventParents)if(this._eventParents[A].listens(n,o,l,h))return!0}return!1},_listens:function(n,o,l){if(!this._events)return!1;var h=this._events[n]||[];if(!o)return!!h.length;l===this&&(l=void 0);for(var p=0,v=h.length;p<v;p++)if(h[p].fn===o&&h[p].ctx===l)return p;return!1},once:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o,!0);else{n=V(n);for(var p=0,v=n.length;p<v;p++)this._on(n[p],o,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[m(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[m(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};Qt.addEventListener=Qt.on,Qt.removeEventListener=Qt.clearAllEventListeners=Qt.off,Qt.addOneTimeEventListener=Qt.once,Qt.fireEvent=Qt.fire,Qt.hasEventListeners=Qt.listens;var gi=Ct.extend(Qt);function tt(n,o,l){this.x=l?Math.round(n):n,this.y=l?Math.round(o):o}var yi=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};tt.prototype={clone:function(){return new tt(this.x,this.y)},add:function(n){return this.clone()._add(et(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(et(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new tt(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new tt(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=yi(this.x),this.y=yi(this.y),this},distanceTo:function(n){n=et(n);var o=n.x-this.x,l=n.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(n){return n=et(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=et(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function et(n,o,l){return n instanceof tt?n:Q(n)?new tt(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new tt(n.x,n.y):new tt(n,o,l)}function At(n,o){if(n)for(var l=o?[n,o]:n,h=0,p=l.length;h<p;h++)this.extend(l[h])}At.prototype={extend:function(n){var o,l;if(!n)return this;if(n instanceof tt||typeof n[0]=="number"||"x"in n)o=l=et(n);else if(n=Jt(n),o=n.min,l=n.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return et((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return et(this.min.x,this.max.y)},getTopRight:function(){return et(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,l;return typeof n[0]=="number"||n instanceof tt?n=et(n):n=Jt(n),n instanceof At?(o=n.min,l=n.max):o=l=n,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Jt(n);var o=this.min,l=this.max,h=n.min,p=n.max,v=p.x>=o.x&&h.x<=l.x,A=p.y>=o.y&&h.y<=l.y;return v&&A},overlaps:function(n){n=Jt(n);var o=this.min,l=this.max,h=n.min,p=n.max,v=p.x>o.x&&h.x<l.x,A=p.y>o.y&&h.y<l.y;return v&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,l=this.max,h=Math.abs(o.x-l.x)*n,p=Math.abs(o.y-l.y)*n;return Jt(et(o.x-h,o.y-p),et(l.x+h,l.y+p))},equals:function(n){return n?(n=Jt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Jt(n,o){return!n||n instanceof At?n:new At(n,o)}function Yt(n,o){if(n)for(var l=o?[n,o]:n,h=0,p=l.length;h<p;h++)this.extend(l[h])}Yt.prototype={extend:function(n){var o=this._southWest,l=this._northEast,h,p;if(n instanceof _t)h=n,p=n;else if(n instanceof Yt){if(h=n._southWest,p=n._northEast,!h||!p)return this}else return n?this.extend(at(n)||Rt(n)):this;return!o&&!l?(this._southWest=new _t(h.lat,h.lng),this._northEast=new _t(p.lat,p.lng)):(o.lat=Math.min(h.lat,o.lat),o.lng=Math.min(h.lng,o.lng),l.lat=Math.max(p.lat,l.lat),l.lng=Math.max(p.lng,l.lng)),this},pad:function(n){var o=this._southWest,l=this._northEast,h=Math.abs(o.lat-l.lat)*n,p=Math.abs(o.lng-l.lng)*n;return new Yt(new _t(o.lat-h,o.lng-p),new _t(l.lat+h,l.lng+p))},getCenter:function(){return new _t((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new _t(this.getNorth(),this.getWest())},getSouthEast:function(){return new _t(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof _t||"lat"in n?n=at(n):n=Rt(n);var o=this._southWest,l=this._northEast,h,p;return n instanceof Yt?(h=n.getSouthWest(),p=n.getNorthEast()):h=p=n,h.lat>=o.lat&&p.lat<=l.lat&&h.lng>=o.lng&&p.lng<=l.lng},intersects:function(n){n=Rt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),v=p.lat>=o.lat&&h.lat<=l.lat,A=p.lng>=o.lng&&h.lng<=l.lng;return v&&A},overlaps:function(n){n=Rt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),v=p.lat>o.lat&&h.lat<l.lat,A=p.lng>o.lng&&h.lng<l.lng;return v&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=Rt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Rt(n,o){return n instanceof Yt?n:new Yt(n,o)}function _t(n,o,l){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,l!==void 0&&(this.alt=+l)}_t.prototype={equals:function(n,o){if(!n)return!1;n=at(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+E(this.lat,n)+", "+E(this.lng,n)+")"},distanceTo:function(n){return Ae.distance(this,at(n))},wrap:function(){return Ae.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,l=o/Math.cos(Math.PI/180*this.lat);return Rt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new _t(this.lat,this.lng,this.alt)}};function at(n,o,l){return n instanceof _t?n:Q(n)&&typeof n[0]!="object"?n.length===3?new _t(n[0],n[1],n[2]):n.length===2?new _t(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new _t(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new _t(n,o,l)}var ge={latLngToPoint:function(n,o){var l=this.projection.project(n),h=this.scale(o);return this.transformation._transform(l,h)},pointToLatLng:function(n,o){var l=this.scale(o),h=this.transformation.untransform(n,l);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(n),h=this.transformation.transform(o.min,l),p=this.transformation.transform(o.max,l);return new At(h,p)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?y(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?y(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new _t(l,o,h)},wrapLatLngBounds:function(n){var o=n.getCenter(),l=this.wrapLatLng(o),h=o.lat-l.lat,p=o.lng-l.lng;if(h===0&&p===0)return n;var v=n.getSouthWest(),A=n.getNorthEast(),N=new _t(v.lat-h,v.lng-p),O=new _t(A.lat-h,A.lng-p);return new Yt(N,O)}},Ae=s({},ge,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var l=Math.PI/180,h=n.lat*l,p=o.lat*l,v=Math.sin((o.lat-n.lat)*l/2),A=Math.sin((o.lng-n.lng)*l/2),N=v*v+Math.cos(h)*Math.cos(p)*A*A,O=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*O}}),Qr=6378137,Jr={R:Qr,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,n.lat),-l),p=Math.sin(h*o);return new tt(this.R*n.lng*o,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var o=180/Math.PI;return new _t((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:function(){var n=Qr*Math.PI;return new At([-n,-n],[n,n])}()};function Yr(n,o,l,h){if(Q(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=l,this._d=h}Yr.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new tt((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function Mn(n,o,l,h){return new Yr(n,o,l,h)}var vi=s({},Ae,{code:"EPSG:3857",projection:Jr,transformation:function(){var n=.5/(Math.PI*Jr.R);return Mn(n,.5,-n,.5)}()}),fo=s({},vi,{code:"EPSG:900913"});function po(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Ki(n,o){var l="",h,p,v,A,N,O;for(h=0,v=n.length;h<v;h++){for(N=n[h],p=0,A=N.length;p<A;p++)O=N[p],l+=(p?"L":"M")+O.x+" "+O.y;l+=o?Z.svg?"z":"x":""}return l||"M0 0"}var wi=document.documentElement.style,Ti="ActiveXObject"in window,$t=Ti&&!document.addEventListener,Wt="msLaunchUri"in navigator&&!("documentMode"in document),On=he("webkit"),mo=he("android"),Xr=he("android 2")||he("android 3"),nc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ei=mo&&he("Google")&&nc<537&&!("AudioNode"in window),Qi=!!window.opera,ts=!Wt&&he("chrome"),Ji=he("gecko")&&!On&&!Qi&&!Ti,ic=!ts&&he("safari"),_o=he("phantom"),es="OTransition"in wi,go=navigator.platform.indexOf("Win")===0,Vn=Ti&&"transition"in wi,Ii="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Xr,Yi="MozPerspective"in wi,cn=!window.L_DISABLE_3D&&(Vn||Ii||Yi)&&!es&&!_o,Fn=typeof orientation<"u"||he("mobile"),Xi=Fn&&On,yo=Fn&&Ii,Un=!window.PointerEvent&&window.MSPointerEvent,ns=!!(window.PointerEvent||Un),Gt="ontouchstart"in window||!!window.TouchEvent,vo=!window.L_NO_TOUCH&&(Gt||ns),bi=Fn&&Qi,Ai=Fn&&Ji,rc=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,sc=function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",w,o),window.removeEventListener("testPassiveEventSupport",w,o)}catch{}return n}(),Bn=function(){return!!document.createElement("canvas").getContext}(),is=!!(document.createElementNS&&po("svg").createSVGRect),oc=!!is&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),tr=!is&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),wo=navigator.platform.indexOf("Mac")===0,To=navigator.platform.indexOf("Linux")===0;function he(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Z={ie:Ti,ielt9:$t,edge:Wt,webkit:On,android:mo,android23:Xr,androidStock:Ei,opera:Qi,chrome:ts,gecko:Ji,safari:ic,phantom:_o,opera12:es,win:go,ie3d:Vn,webkit3d:Ii,gecko3d:Yi,any3d:cn,mobile:Fn,mobileWebkit:Xi,mobileWebkit3d:yo,msPointer:Un,pointer:ns,touch:vo,touchNative:Gt,mobileOpera:bi,mobileGecko:Ai,retina:rc,passiveEvents:sc,canvas:Bn,svg:is,vml:tr,inlineSvg:oc,mac:wo,linux:To},Eo=Z.msPointer?"MSPointerDown":"pointerdown",Oe=Z.msPointer?"MSPointerMove":"pointermove",rs=Z.msPointer?"MSPointerUp":"pointerup",ss=Z.msPointer?"MSPointerCancel":"pointercancel",Pi={touchstart:Eo,touchmove:Oe,touchend:rs,touchcancel:ss},er={touchstart:os,touchmove:Pe,touchend:Pe,touchcancel:Pe},ln={},Io=!1;function bo(n,o,l){return o==="touchstart"&&Si(),er[o]?(l=er[o].bind(this,l),n.addEventListener(Pi[o],l,!1),l):(console.warn("wrong event specified:",o),w)}function ac(n,o,l){if(!Pi[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(Pi[o],l,!1)}function nr(n){ln[n.pointerId]=n}function Ao(n){ln[n.pointerId]&&(ln[n.pointerId]=n)}function ir(n){delete ln[n.pointerId]}function Si(){Io||(document.addEventListener(Eo,nr,!0),document.addEventListener(Oe,Ao,!0),document.addEventListener(rs,ir,!0),document.addEventListener(ss,ir,!0),Io=!0)}function Pe(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in ln)o.touches.push(ln[l]);o.changedTouches=[o],n(o)}}function os(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&Vt(o),Pe(n,o)}function cc(n){var o={},l,h;for(h in n)l=n[h],o[h]=l&&l.bind?l.bind(n):l;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Po=200;function So(n,o){n.addEventListener("dblclick",o);var l=0,h;function p(v){if(v.detail!==1){h=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var A=hs(v);if(!(A.some(function(O){return O instanceof HTMLLabelElement&&O.attributes.for})&&!A.some(function(O){return O instanceof HTMLInputElement||O instanceof HTMLSelectElement}))){var N=Date.now();N-l<=Po?(h++,h===2&&o(cc(v))):h=1,l=N}}}return n.addEventListener("click",p),{dblclick:o,simDblclick:p}}function Co(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var Ci=rr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),un=rr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),as=un==="webkitTransition"||un==="OTransition"?un+"End":"transitionend";function cs(n){return typeof n=="string"?document.getElementById(n):n}function zn(n,o){var l=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);l=h?h[o]:null}return l==="auto"?null:l}function pt(n,o,l){var h=document.createElement(n);return h.className=o||"",l&&l.appendChild(h),h}function gt(n){var o=n.parentNode;o&&o.removeChild(n)}function ce(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Se(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function Ce(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function Ri(n,o){if(n.classList!==void 0)return n.classList.contains(o);var l=We(n);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function G(n,o){if(n.classList!==void 0)for(var l=V(o),h=0,p=l.length;h<p;h++)n.classList.add(l[h]);else if(!Ri(n,o)){var v=We(n);hn(n,(v?v+" ":"")+o)}}function Pt(n,o){n.classList!==void 0?n.classList.remove(o):hn(n,k((" "+We(n)+" ").replace(" "+o+" "," ")))}function hn(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function We(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function de(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&Ro(n,o)}function Ro(n,o){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(h)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):n.style.filter+=" progid:"+h+"(opacity="+o+")"}function rr(n){for(var o=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in o)return n[l];return!1}function dn(n,o,l){var h=o||new tt(0,0);n.style[Ci]=(Z.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function Dt(n,o){n._leaflet_pos=o,Z.any3d?dn(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function fn(n){return n._leaflet_pos||new tt(0,0)}var Ve,ye,sr;if("onselectstart"in document)Ve=function(){nt(window,"selectstart",Vt)},ye=function(){It(window,"selectstart",Vt)};else{var qn=rr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ve=function(){if(qn){var n=document.documentElement.style;sr=n[qn],n[qn]="none"}},ye=function(){qn&&(document.documentElement.style[qn]=sr,sr=void 0)}}function or(){nt(window,"dragstart",Vt)}function ar(){It(window,"dragstart",Vt)}var ki,Ge;function ls(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(cr(),ki=n,Ge=n.style.outlineStyle,n.style.outlineStyle="none",nt(window,"keydown",cr))}function cr(){ki&&(ki.style.outlineStyle=Ge,ki=void 0,Ge=void 0,It(window,"keydown",cr))}function ko(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function Re(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var lc={__proto__:null,TRANSFORM:Ci,TRANSITION:un,TRANSITION_END:as,get:cs,getStyle:zn,create:pt,remove:gt,empty:ce,toFront:Se,toBack:Ce,hasClass:Ri,addClass:G,removeClass:Pt,setClass:hn,getClass:We,setOpacity:de,testProp:rr,setTransform:dn,setPosition:Dt,getPosition:fn,get disableTextSelection(){return Ve},get enableTextSelection(){return ye},disableImageDrag:or,enableImageDrag:ar,preventOutline:ls,restoreOutline:cr,getSizedParentNode:ko,getScale:Re};function nt(n,o,l,h){if(o&&typeof o=="object")for(var p in o)lr(n,p,o[p],l);else{o=V(o);for(var v=0,A=o.length;v<A;v++)lr(n,o[v],l,h)}return this}var le="_leaflet_events";function It(n,o,l,h){if(arguments.length===1)jn(n),delete n[le];else if(o&&typeof o=="object")for(var p in o)Li(n,p,o[p],l);else if(o=V(o),arguments.length===2)jn(n,function(N){return vt(o,N)!==-1});else for(var v=0,A=o.length;v<A;v++)Li(n,o[v],l,h);return this}function jn(n,o){for(var l in n[le]){var h=l.split(/\d/)[0];(!o||o(h))&&Li(n,h,null,null,l)}}var pn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function lr(n,o,l,h){var p=o+m(l)+(h?"_"+m(h):"");if(n[le]&&n[le][p])return this;var v=function(N){return l.call(h||n,N||window.event)},A=v;!Z.touchNative&&Z.pointer&&o.indexOf("touch")===0?v=bo(n,o,v):Z.touch&&o==="dblclick"?v=So(n,v):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(pn[o]||o,v,Z.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(v=function(N){N=N||window.event,fs(n,N)&&A(N)},n.addEventListener(pn[o],v,!1)):n.addEventListener(o,A,!1):n.attachEvent("on"+o,v),n[le]=n[le]||{},n[le][p]=v}function Li(n,o,l,h,p){p=p||o+m(l)+(h?"_"+m(h):"");var v=n[le]&&n[le][p];if(!v)return this;!Z.touchNative&&Z.pointer&&o.indexOf("touch")===0?ac(n,o,v):Z.touch&&o==="dblclick"?Co(n,v):"removeEventListener"in n?n.removeEventListener(pn[o]||o,v,!1):n.detachEvent("on"+o,v),n[le][p]=null}function wt(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function us(n){return lr(n,"wheel",wt),this}function xi(n){return nt(n,"mousedown touchstart dblclick contextmenu",wt),n._leaflet_disable_click=!0,this}function Vt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Ze(n){return Vt(n),wt(n),this}function hs(n){if(n.composedPath)return n.composedPath();for(var o=[],l=n.target;l;)o.push(l),l=l.parentNode;return o}function Di(n,o){if(!o)return new tt(n.clientX,n.clientY);var l=Re(o),h=l.boundingClientRect;return new tt((n.clientX-h.left)/l.x-o.clientLeft,(n.clientY-h.top)/l.y-o.clientTop)}var Ke=Z.linux&&Z.chrome?window.devicePixelRatio:Z.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function ds(n){return Z.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Ke:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function fs(n,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Ni={__proto__:null,on:nt,off:It,stopPropagation:wt,disableScrollPropagation:us,disableClickPropagation:xi,preventDefault:Vt,stop:Ze,getPropagationPath:hs,getMousePosition:Di,getWheelDelta:ds,isExternalTarget:fs,addListener:nt,removeListener:It},ps=gi.extend({run:function(n,o,l,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=fn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=S(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var l=this._startPos.add(this._offset.multiplyBy(n));o&&l._round(),Dt(this._el,l),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ct=gi.extend({options:{crs:vi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=U(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(at(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=un&&Z.any3d&&!Z.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),nt(this._proxy,as,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(at(n),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,l.zoom):this._tryAnimatedPan(n,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,l){var h=this.getZoomScale(o),p=this.getSize().divideBy(2),v=n instanceof tt?n:this.latLngToContainerPoint(n),A=v.subtract(p).multiplyBy(1-1/h),N=this.containerPointToLatLng(p.add(A));return this.setView(N,o,{zoom:l})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():Rt(n);var l=et(o.paddingTopLeft||o.padding||[0,0]),h=et(o.paddingBottomRight||o.padding||[0,0]),p=this.getBoundsZoom(n,!1,l.add(h));if(p=typeof o.maxZoom=="number"?Math.min(o.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var v=h.subtract(l).divideBy(2),A=this.project(n.getSouthWest(),p),N=this.project(n.getNorthEast(),p),O=this.unproject(A.add(N).divideBy(2).add(v),p);return{center:O,zoom:p}},fitBounds:function(n,o){if(n=Rt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=et(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new ps,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){G(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,l){if(l=l||{},l.animate===!1||!Z.any3d)return this.setView(n,o,l);this._stop();var h=this.project(this.getCenter()),p=this.project(n),v=this.getSize(),A=this._zoom;n=at(n),o=o===void 0?A:o;var N=Math.max(v.x,v.y),O=N*this.getZoomScale(A,o),z=p.distanceTo(h)||1,W=1.42,J=W*W;function lt(Ft){var Wo=Ft?-1:1,bm=Ft?O:N,Am=O*O-N*N+Wo*J*J*z*z,Pm=2*bm*J*z,pc=Am/Pm,ku=Math.sqrt(pc*pc+1)-pc,Sm=ku<1e-9?-18:Math.log(ku);return Sm}function ue(Ft){return(Math.exp(Ft)-Math.exp(-Ft))/2}function Zt(Ft){return(Math.exp(Ft)+Math.exp(-Ft))/2}function xe(Ft){return ue(Ft)/Zt(Ft)}var pe=lt(0);function Er(Ft){return N*(Zt(pe)/Zt(pe+W*Ft))}function wm(Ft){return N*(Zt(pe)*xe(pe+W*Ft)-ue(pe))/J}function Tm(Ft){return 1-Math.pow(1-Ft,1.5)}var Em=Date.now(),Cu=(lt(1)-pe)/W,Im=l.duration?1e3*l.duration:1e3*Cu*.8;function Ru(){var Ft=(Date.now()-Em)/Im,Wo=Tm(Ft)*Cu;Ft<=1?(this._flyToFrame=S(Ru,this),this._move(this.unproject(h.add(p.subtract(h).multiplyBy(wm(Wo)/z)),A),this.getScaleZoom(N/Er(Wo),A),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Ru.call(this),this},flyToBounds:function(n,o){var l=this._getBoundsCenterZoom(n,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(n){return n=Rt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,Rt(n));return l.equals(h)||this.panTo(h,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var l=et(o.paddingTopLeft||o.padding||[0,0]),h=et(o.paddingBottomRight||o.padding||[0,0]),p=this.project(this.getCenter()),v=this.project(n),A=this.getPixelBounds(),N=Jt([A.min.add(l),A.max.subtract(h)]),O=N.getSize();if(!N.contains(v)){this._enforcingBounds=!0;var z=v.subtract(N.getCenter()),W=N.extend(v).getSize().subtract(O);p.x+=z.x<0?-W.x:W.x,p.y+=z.y<0?-W.y:W.y,this.panTo(this.unproject(p),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=o.divideBy(2).round(),p=l.divideBy(2).round(),v=h.subtract(p);return!v.x&&!v.y?this:(n.animate&&n.pan?this.panBy(v):(n.pan&&this._rawPanBy(v),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,n):navigator.geolocation.getCurrentPosition(o,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,l=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,l=n.coords.longitude,h=new _t(o,l),p=h.toBounds(n.coords.accuracy*2),v=this._locateOptions;if(v.setView){var A=this.getBoundsZoom(p);this.setView(h,v.maxZoom?Math.min(A,v.maxZoom):A)}var N={latlng:h,bounds:p,timestamp:n.timestamp};for(var O in n.coords)typeof n.coords[O]=="number"&&(N[O]=n.coords[O]);this.fire("locationfound",N)}},addHandler:function(n,o){if(!o)return this;var l=this[n]=new o(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),gt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)gt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=pt("div",l,o||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new Yt(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,l){n=Rt(n),l=et(l||[0,0]);var h=this.getZoom()||0,p=this.getMinZoom(),v=this.getMaxZoom(),A=n.getNorthWest(),N=n.getSouthEast(),O=this.getSize().subtract(l),z=Jt(this.project(N,h),this.project(A,h)).getSize(),W=Z.any3d?this.options.zoomSnap:1,J=O.x/z.x,lt=O.y/z.y,ue=o?Math.max(J,lt):Math.min(J,lt);return h=this.getScaleZoom(ue,h),W&&(h=Math.round(h/(W/100))*(W/100),h=o?Math.ceil(h/W)*W:Math.floor(h/W)*W),Math.max(p,Math.min(v,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new tt(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var l=this._getTopLeftPoint(n,o);return new At(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(n)/l.scale(o)},getScaleZoom:function(n,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var h=l.zoom(n*l.scale(o));return isNaN(h)?1/0:h},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(at(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(et(n),o)},layerPointToLatLng:function(n){var o=et(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(at(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(at(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Rt(n))},distance:function(n,o){return this.options.crs.distance(at(n),at(o))},containerPointToLayerPoint:function(n){return et(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return et(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(et(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(at(n)))},mouseEventToContainerPoint:function(n){return Di(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=cs(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");nt(o,"scroll",this._onScroll,this),this._containerId=m(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Z.any3d,G(n,"leaflet-container"+(Z.touch?" leaflet-touch":"")+(Z.retina?" leaflet-retina":"")+(Z.ielt9?" leaflet-oldie":"")+(Z.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=zn(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Dt(this._mapPane,new tt(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(G(n.markerPane,"leaflet-zoom-hide"),G(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,l){Dt(this._mapPane,new tt(0,0));var h=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var p=this._zoom!==o;this._moveStart(p,l)._move(n,o)._moveEnd(p),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,l,h){o===void 0&&(o=this._zoom);var p=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?l&&l.pinch&&this.fire("zoom",l):((p||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Dt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[m(this._container)]=this;var o=n?It:nt;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),Z.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=S(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var l=[],h,p=o==="mouseout"||o==="mouseover",v=n.target||n.srcElement,A=!1;v;){if(h=this._targets[m(v)],h&&(o==="click"||o==="preclick")&&this._draggableMoved(h)){A=!0;break}if(h&&h.listens(o,!0)&&(p&&!fs(v,n)||(l.push(h),p))||v===this._container)break;v=v.parentNode}return!l.length&&!A&&!p&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var l=n.type;l==="mousedown"&&ls(o),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,l){if(n.type==="click"){var h=s({},n);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var p=this._findEventTargets(n,o);if(l){for(var v=[],A=0;A<l.length;A++)l[A].listens(o,!0)&&v.push(l[A]);p=v.concat(p)}if(p.length){o==="contextmenu"&&Vt(n);var N=p[0],O={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var z=N.getLatLng&&(!N._radius||N._radius<=10);O.containerPoint=z?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(n),O.layerPoint=this.containerPointToLayerPoint(O.containerPoint),O.latlng=z?N.getLatLng():this.layerPointToLatLng(O.layerPoint)}for(A=0;A<p.length;A++)if(p[A].fire(o,O,!0),O.originalEvent._stopped||p[A].options.bubblingMouseEvents===!1&&vt(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return fn(this._mapPane)||new tt(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var l=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var l=this.getSize()._divideBy(2);return this.project(n,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return this.project(n,o)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return Jt([this.project(n.getSouthWest(),o)._subtract(h),this.project(n.getNorthWest(),o)._subtract(h),this.project(n.getSouthEast(),o)._subtract(h),this.project(n.getNorthEast(),o)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,l){if(!l)return n;var h=this.project(n,o),p=this.getSize().divideBy(2),v=new At(h.subtract(p),h.add(p)),A=this._getBoundsOffset(v,l,o);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?n:this.unproject(h.add(A),o)},_limitOffset:function(n,o){if(!o)return n;var l=this.getPixelBounds(),h=new At(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(h,o))},_getBoundsOffset:function(n,o,l){var h=Jt(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),p=h.min.subtract(n.min),v=h.max.subtract(n.max),A=this._rebound(p.x,-v.x),N=this._rebound(p.y,-v.y);return new tt(A,N)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),l=this.getMaxZoom(),h=Z.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(o,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Pt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var l=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var n=this._proxy=pt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var l=Ci,h=this._proxy.style[l];dn(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){gt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();dn(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(o),p=this._getCenterOffset(n)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(p)?!1:(S(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,G(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Pt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function ur(n,o){return new ct(n,o)}var fe=Ct.extend({options:{position:"topright"},initialize:function(n){U(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),l=this.getPosition(),h=n._controlCorners[l];return G(o,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(o,h.firstChild):h.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(gt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Qe=function(n){return new fe(n)};ct.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",l=this._controlContainer=pt("div",o+"control-container",this._container);function h(p,v){var A=o+p+" "+o+v;n[p+v]=pt("div",A,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)gt(this._controlCorners[n]);gt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Lo=fe.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,l,h){return l<h?-1:h<l?1:0}},initialize:function(n,o,l){U(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in o)this._addLayer(o[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return fe.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(m(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){G(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(G(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Pt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Pt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=pt("div",n),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),xi(o),us(o);var h=this._section=pt("section",n+"-list");l&&(this._map.on("click",this.collapse,this),nt(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=pt("a",n+"-toggle",o);p.href="#",p.title="Layers",p.setAttribute("role","button"),nt(p,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Vt(v),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=pt("div",n+"-base",h),this._separator=pt("div",n+"-separator",h),this._overlaysList=pt("div",n+"-overlays",h),o.appendChild(h)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&m(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(h,p){return this.options.sortFunction(h.layer,p.layer,h.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ce(this._baseLayersList),ce(this._overlaysList),this._layerControlInputs=[];var n,o,l,h,p=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),o=o||h.overlay,n=n||!h.overlay,p+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(m(n.target)),l=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(n,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(n){var o=document.createElement("label"),l=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+m(this),l),this._layerControlInputs.push(h),h.layerId=m(n.layer),nt(h,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var v=document.createElement("span");o.appendChild(v),v.appendChild(h),v.appendChild(p);var A=n.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,l,h=[],p=[];this._handlingClick=!0;for(var v=n.length-1;v>=0;v--)o=n[v],l=this._getLayer(o.layerId).layer,o.checked?h.push(l):o.checked||p.push(l);for(v=0;v<p.length;v++)this._map.hasLayer(p[v])&&this._map.removeLayer(p[v]);for(v=0;v<h.length;v++)this._map.hasLayer(h[v])||this._map.addLayer(h[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,l,h=this._map.getZoom(),p=n.length-1;p>=0;p--)o=n[p],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,nt(n,"click",Vt),this.expand();var o=this;setTimeout(function(){It(n,"click",Vt),o._preventClick=!1})}}),xo=function(n,o,l){return new Lo(n,o,l)},mn=fe.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",l=pt("div",o+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,l,h,p){var v=pt("a",l,h);return v.innerHTML=n,v.href="#",v.title=o,v.setAttribute("role","button"),v.setAttribute("aria-label",o),xi(v),nt(v,"click",Ze),nt(v,"click",p,this),nt(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";Pt(this._zoomInButton,o),Pt(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(G(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(G(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ct.mergeOptions({zoomControl:!0}),ct.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new mn,this.addControl(this.zoomControl))});var Do=function(n){return new mn(n)},ms=fe.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",l=pt("div",o),h=this.options;return this._addScales(h,o+"-line",l),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,l){n.metric&&(this._mScale=pt("div",o,l)),n.imperial&&(this._iScale=pt("div",o,l))},_update:function(){var n=this._map,o=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/n)},_updateImperial:function(n){var o=n*3.2808399,l,h,p;o>5280?(l=o/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(p=this._getRoundNum(o),this._updateScale(this._iScale,p+" ft",p/o))},_updateScale:function(n,o,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),l=n/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),_s=function(n){return new ms(n)},gs='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',hr=fe.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Z.inlineSvg?gs+" ":"")+"Leaflet</a>"},initialize:function(n){U(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=pt("div","leaflet-control-attribution"),xi(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});ct.mergeOptions({attributionControl:!0}),ct.addInitHook(function(){this.options.attributionControl&&new hr().addTo(this)});var dr=function(n){return new hr(n)};fe.Layers=Lo,fe.Zoom=mn,fe.Scale=ms,fe.Attribution=hr,Qe.layers=xo,Qe.zoom=Do,Qe.scale=_s,Qe.attribution=dr;var ve=Ct.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ve.addTo=function(n,o){return n.addHandler(o,this),this};var No={Events:Qt},Je=Z.touch?"touchstart mousedown":"mousedown",Fe=gi.extend({options:{clickTolerance:3},initialize:function(n,o,l,h){U(this,h),this._element=n,this._dragStartTarget=o||n,this._preventOutline=l},enable:function(){this._enabled||(nt(this._dragStartTarget,Je,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Fe._dragging===this&&this.finishDrag(!0),It(this._dragStartTarget,Je,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ri(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Fe._dragging===this&&this.finishDrag();return}if(!(Fe._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Fe._dragging=this,this._preventOutline&&ls(this._element),or(),Ve(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,l=ko(this._element);this._startPoint=new tt(o.clientX,o.clientY),this._startPos=fn(this._element),this._parentScale=Re(l);var h=n.type==="mousedown";nt(document,h?"mousemove":"touchmove",this._onMove,this),nt(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,l=new tt(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Vt(n),this._moved||(this.fire("dragstart"),this._moved=!0,G(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),G(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Dt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Pt(document.body,"leaflet-dragging"),this._lastTarget&&(Pt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),It(document,"mousemove touchmove",this._onMove,this),It(document,"mouseup touchend touchcancel",this._onUp,this),ar(),ye();var o=this._moved&&this._moving;this._moving=!1,Fe._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function ys(n,o,l){var h,p=[1,4,2,8],v,A,N,O,z,W,J,lt;for(v=0,W=n.length;v<W;v++)n[v]._code=M(n[v],o);for(N=0;N<4;N++){for(J=p[N],h=[],v=0,W=n.length,A=W-1;v<W;A=v++)O=n[v],z=n[A],O._code&J?z._code&J||(lt=D(z,O,J,o,l),lt._code=M(lt,o),h.push(lt)):(z._code&J&&(lt=D(z,O,J,o,l),lt._code=M(lt,o),h.push(lt)),h.push(O));n=h}return n}function vs(n,o){var l,h,p,v,A,N,O,z,W;if(!n||n.length===0)throw new Error("latlngs not passed");yt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var J=at([0,0]),lt=Rt(n),ue=lt.getNorthWest().distanceTo(lt.getSouthWest())*lt.getNorthEast().distanceTo(lt.getNorthWest());ue<1700&&(J=fr(n));var Zt=n.length,xe=[];for(l=0;l<Zt;l++){var pe=at(n[l]);xe.push(o.project(at([pe.lat-J.lat,pe.lng-J.lng])))}for(N=O=z=0,l=0,h=Zt-1;l<Zt;h=l++)p=xe[l],v=xe[h],A=p.y*v.x-v.y*p.x,O+=(p.x+v.x)*A,z+=(p.y+v.y)*A,N+=A*3;N===0?W=xe[0]:W=[O/N,z/N];var Er=o.unproject(et(W));return at([Er.lat+J.lat,Er.lng+J.lng])}function fr(n){for(var o=0,l=0,h=0,p=0;p<n.length;p++){var v=at(n[p]);o+=v.lat,l+=v.lng,h++}return at([o/h,l/h])}var pr={__proto__:null,clipPolygon:ys,polygonCenter:vs,centroid:fr};function ie(n,o){if(!o||!n.length)return n.slice();var l=o*o;return n=d(n,l),n=Hn(n,l),n}function ws(n,o,l){return Math.sqrt(it(n,o,l,!0))}function Mo(n,o,l){return it(n,o,l)}function Hn(n,o){var l=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,p=new h(l);p[0]=p[l-1]=1,c(n,p,o,0,l-1);var v,A=[];for(v=0;v<l;v++)p[v]&&A.push(n[v]);return A}function c(n,o,l,h,p){var v=0,A,N,O;for(N=h+1;N<=p-1;N++)O=it(n[N],n[h],n[p],!0),O>v&&(A=N,v=O);v>l&&(o[A]=1,c(n,o,l,h,A),c(n,o,l,A,p))}function d(n,o){for(var l=[n[0]],h=1,p=0,v=n.length;h<v;h++)j(n[h],n[p])>o&&(l.push(n[h]),p=h);return p<v-1&&l.push(n[v-1]),l}var g;function T(n,o,l,h,p){var v=h?g:M(n,l),A=M(o,l),N,O,z;for(g=A;;){if(!(v|A))return[n,o];if(v&A)return!1;N=v||A,O=D(n,o,N,l,p),z=M(O,l),N===v?(n=O,v=z):(o=O,A=z)}}function D(n,o,l,h,p){var v=o.x-n.x,A=o.y-n.y,N=h.min,O=h.max,z,W;return l&8?(z=n.x+v*(O.y-n.y)/A,W=O.y):l&4?(z=n.x+v*(N.y-n.y)/A,W=N.y):l&2?(z=O.x,W=n.y+A*(O.x-n.x)/v):l&1&&(z=N.x,W=n.y+A*(N.x-n.x)/v),new tt(z,W,p)}function M(n,o){var l=0;return n.x<o.min.x?l|=1:n.x>o.max.x&&(l|=2),n.y<o.min.y?l|=4:n.y>o.max.y&&(l|=8),l}function j(n,o){var l=o.x-n.x,h=o.y-n.y;return l*l+h*h}function it(n,o,l,h){var p=o.x,v=o.y,A=l.x-p,N=l.y-v,O=A*A+N*N,z;return O>0&&(z=((n.x-p)*A+(n.y-v)*N)/O,z>1?(p=l.x,v=l.y):z>0&&(p+=A*z,v+=N*z)),A=n.x-p,N=n.y-v,h?A*A+N*N:new tt(p,v)}function yt(n){return!Q(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Tt(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),yt(n)}function Mt(n,o){var l,h,p,v,A,N,O,z;if(!n||n.length===0)throw new Error("latlngs not passed");yt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var W=at([0,0]),J=Rt(n),lt=J.getNorthWest().distanceTo(J.getSouthWest())*J.getNorthEast().distanceTo(J.getNorthWest());lt<1700&&(W=fr(n));var ue=n.length,Zt=[];for(l=0;l<ue;l++){var xe=at(n[l]);Zt.push(o.project(at([xe.lat-W.lat,xe.lng-W.lng])))}for(l=0,h=0;l<ue-1;l++)h+=Zt[l].distanceTo(Zt[l+1])/2;if(h===0)z=Zt[0];else for(l=0,v=0;l<ue-1;l++)if(A=Zt[l],N=Zt[l+1],p=A.distanceTo(N),v+=p,v>h){O=(v-h)/p,z=[N.x-O*(N.x-A.x),N.y-O*(N.y-A.y)];break}var pe=o.unproject(et(z));return at([pe.lat+W.lat,pe.lng+W.lng])}var ke={__proto__:null,simplify:ie,pointToSegmentDistance:ws,closestPointOnSegment:Mo,clipSegment:T,_getEdgeIntersection:D,_getBitCode:M,_sqClosestPointOnSegment:it,isFlat:yt,_flat:Tt,polylineCenter:Mt},Ue={project:function(n){return new tt(n.lng,n.lat)},unproject:function(n){return new _t(n.y,n.x)},bounds:new At([-180,-90],[180,90])},Le={R:6378137,R_MINOR:6356752314245179e-9,bounds:new At([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,l=this.R,h=n.lat*o,p=this.R_MINOR/l,v=Math.sqrt(1-p*p),A=v*Math.sin(h),N=Math.tan(Math.PI/4-h/2)/Math.pow((1-A)/(1+A),v/2);return h=-l*Math.log(Math.max(N,1e-10)),new tt(n.lng*o*l,h)},unproject:function(n){for(var o=180/Math.PI,l=this.R,h=this.R_MINOR/l,p=Math.sqrt(1-h*h),v=Math.exp(-n.y/l),A=Math.PI/2-2*Math.atan(v),N=0,O=.1,z;N<15&&Math.abs(O)>1e-7;N++)z=p*Math.sin(A),z=Math.pow((1-z)/(1+z),p/2),O=Math.PI/2-2*Math.atan(v*z)-A,A+=O;return new _t(A*o,n.x*o/l)}},Ye={__proto__:null,LonLat:Ue,Mercator:Le,SphericalMercator:Jr},mr=s({},Ae,{code:"EPSG:3395",projection:Le,transformation:function(){var n=.5/(Math.PI*Le.R);return Mn(n,.5,-n,.5)}()}),_r=s({},Ae,{code:"EPSG:4326",projection:Ue,transformation:Mn(1/180,1,-1/180,.5)}),Yp=s({},ge,{projection:Ue,transformation:Mn(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var l=o.lng-n.lng,h=o.lat-n.lat;return Math.sqrt(l*l+h*h)},infinite:!0});ge.Earth=Ae,ge.EPSG3395=mr,ge.EPSG3857=vi,ge.EPSG900913=fo,ge.EPSG4326=_r,ge.Simple=Yp;var Be=gi.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[m(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[m(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ct.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=m(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=m(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return m(n)in this._layers},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},_addLayers:function(n){n=n?Q(n)?n:[n]:[];for(var o=0,l=n.length;o<l;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[m(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=m(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var p=this._zoomBoundLayers[h].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),o=p.maxZoom===void 0?o:Math.max(o,p.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var gr=Be.extend({initialize:function(n,o){U(this,o),this._layers={};var l,h;if(n)for(l=0,h=n.length;l<h;l++)this.addLayer(n[l])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[n]&&h[n].apply(h,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return m(n)}}),Xp=function(n,o){return new gr(n,o)},_n=gr.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),gr.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),gr.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new Yt;for(var o in this._layers){var l=this._layers[o];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),tm=function(n,o){return new _n(n,o)},yr=Ct.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){U(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,o){var l=this.options,h=l[o+"Size"];typeof h=="number"&&(h=[h,h]);var p=et(h),v=et(o==="shadow"&&l.shadowAnchor||l.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(l.className||""),v&&(n.style.marginLeft=-v.x+"px",n.style.marginTop=-v.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return Z.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function em(n){return new yr(n)}var Ts=yr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Ts.imagePath!="string"&&(Ts.imagePath=this._detectIconPath()),(this.options.imagePath||Ts.imagePath)+yr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(l,h,p){var v=h.exec(l);return v&&v[p]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=pt("div","leaflet-default-icon-path",document.body),o=zn(n,"background-image")||zn(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),lu=ve.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Fe(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),G(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Pt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,l=o._map,h=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,v=fn(o._icon),A=l.getPixelBounds(),N=l.getPixelOrigin(),O=Jt(A.min._subtract(N).add(p),A.max._subtract(N).subtract(p));if(!O.contains(v)){var z=et((Math.max(O.max.x,v.x)-O.max.x)/(A.max.x-O.max.x)-(Math.min(O.min.x,v.x)-O.min.x)/(A.min.x-O.min.x),(Math.max(O.max.y,v.y)-O.max.y)/(A.max.y-O.max.y)-(Math.min(O.min.y,v.y)-O.min.y)/(A.min.y-O.min.y)).multiplyBy(h);l.panBy(z,{animate:!1}),this._draggable._newPos._add(z),this._draggable._startPos._add(z),Dt(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=S(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=S(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,l=o._shadow,h=fn(o._icon),p=o._map.layerPointToLatLng(h);l&&Dt(l,h),o._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Oo=Be.extend({options:{icon:new Ts,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){U(this,o),this._latlng=at(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=at(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),G(l,o),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&nt(l,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),v=!1;p!==this._shadow&&(this._removeShadow(),v=!0),p&&(G(p,o),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&v&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&It(this._icon,"focus",this._panOnFocus,this),gt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&gt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Dt(this._icon,n),this._shadow&&Dt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(G(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),lu)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new lu(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&de(this._icon,n),this._shadow&&de(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,l=o.iconSize?et(o.iconSize):et(0,0),h=o.iconAnchor?et(o.iconAnchor):et(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function nm(n,o){return new Oo(n,o)}var $n=Be.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return U(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Vo=$n.extend({options:{fill:!0,radius:10},initialize:function(n,o){U(this,o),this._latlng=at(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=at(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return $n.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,l=this._clickTolerance(),h=[n+l,o+l];this._pxBounds=new At(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function im(n,o){return new Vo(n,o)}var uc=Vo.extend({initialize:function(n,o,l){if(typeof o=="number"&&(o=s({},l,{radius:o})),U(this,o),this._latlng=at(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new Yt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:$n.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===Ae.distance){var p=Math.PI/180,v=this._mRadius/Ae.R/p,A=l.project([o+v,n]),N=l.project([o-v,n]),O=A.add(N).divideBy(2),z=l.unproject(O).lat,W=Math.acos((Math.cos(v*p)-Math.sin(o*p)*Math.sin(z*p))/(Math.cos(o*p)*Math.cos(z*p)))/p;(isNaN(W)||W===0)&&(W=v/Math.cos(Math.PI/180*o)),this._point=O.subtract(l.getPixelOrigin()),this._radius=isNaN(W)?0:O.x-l.project([z,n-W]).x,this._radiusY=O.y-A.y}else{var J=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(J).x}this._updateBounds()}});function rm(n,o,l){return new uc(n,o,l)}var gn=$n.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){U(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,l=null,h=it,p,v,A=0,N=this._parts.length;A<N;A++)for(var O=this._parts[A],z=1,W=O.length;z<W;z++){p=O[z-1],v=O[z];var J=h(n,p,v,!0);J<o&&(o=J,l=h(n,p,v))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mt(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=at(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new Yt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return yt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],l=yt(n),h=0,p=n.length;h<p;h++)l?(o[h]=at(n[h]),this._bounds.extend(o[h])):o[h]=this._convertLatLngs(n[h]);return o},_project:function(){var n=new At;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new tt(n,n);this._rawPxBounds&&(this._pxBounds=new At([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,l){var h=n[0]instanceof _t,p=n.length,v,A;if(h){for(A=[],v=0;v<p;v++)A[v]=this._map.latLngToLayerPoint(n[v]),l.extend(A[v]);o.push(A)}else for(v=0;v<p;v++)this._projectLatlngs(n[v],o,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,h,p,v,A,N,O;for(l=0,p=0,v=this._rings.length;l<v;l++)for(O=this._rings[l],h=0,A=O.length;h<A-1;h++)N=T(O[h],O[h+1],n,h,!0),N&&(o[p]=o[p]||[],o[p].push(N[0]),(N[1]!==O[h+1]||h===A-2)&&(o[p].push(N[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,l=0,h=n.length;l<h;l++)n[l]=ie(n[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var l,h,p,v,A,N,O=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,v=this._parts.length;l<v;l++)for(N=this._parts[l],h=0,A=N.length,p=A-1;h<A;p=h++)if(!(!o&&h===0)&&ws(n,N[p],N[h])<=O)return!0;return!1}});function sm(n,o){return new gn(n,o)}gn._flat=Tt;var vr=gn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vs(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=gn.prototype._convertLatLngs.call(this,n),l=o.length;return l>=2&&o[0]instanceof _t&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(n){gn.prototype._setLatLngs.call(this,n),yt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return yt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,l=new tt(o,o);if(n=new At(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,p=this._rings.length,v;h<p;h++)v=ys(this._rings[h],n,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,l,h,p,v,A,N,O,z;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(v=0,O=this._parts.length;v<O;v++)for(l=this._parts[v],A=0,z=l.length,N=z-1;A<z;N=A++)h=l[A],p=l[N],h.y>n.y!=p.y>n.y&&n.x<(p.x-h.x)*(n.y-h.y)/(p.y-h.y)+h.x&&(o=!o);return o||gn.prototype._containsPoint.call(this,n,!0)}});function om(n,o){return new vr(n,o)}var yn=_n.extend({initialize:function(n,o){U(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=Q(n)?n:n.features,l,h,p;if(o){for(l=0,h=o.length;l<h;l++)p=o[l],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var v=this.options;if(v.filter&&!v.filter(n))return this;var A=Fo(n,v);return A?(A.feature=zo(n),A.defaultOptions=A.options,this.resetStyle(A),v.onEachFeature&&v.onEachFeature(n,A),this.addLayer(A)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function Fo(n,o){var l=n.type==="Feature"?n.geometry:n,h=l?l.coordinates:null,p=[],v=o&&o.pointToLayer,A=o&&o.coordsToLatLng||hc,N,O,z,W;if(!h&&!l)return null;switch(l.type){case"Point":return N=A(h),uu(v,n,N,o);case"MultiPoint":for(z=0,W=h.length;z<W;z++)N=A(h[z]),p.push(uu(v,n,N,o));return new _n(p);case"LineString":case"MultiLineString":return O=Uo(h,l.type==="LineString"?0:1,A),new gn(O,o);case"Polygon":case"MultiPolygon":return O=Uo(h,l.type==="Polygon"?1:2,A),new vr(O,o);case"GeometryCollection":for(z=0,W=l.geometries.length;z<W;z++){var J=Fo({geometry:l.geometries[z],type:"Feature",properties:n.properties},o);J&&p.push(J)}return new _n(p);case"FeatureCollection":for(z=0,W=l.features.length;z<W;z++){var lt=Fo(l.features[z],o);lt&&p.push(lt)}return new _n(p);default:throw new Error("Invalid GeoJSON object.")}}function uu(n,o,l,h){return n?n(o,l):new Oo(l,h&&h.markersInheritOptions&&h)}function hc(n){return new _t(n[1],n[0],n[2])}function Uo(n,o,l){for(var h=[],p=0,v=n.length,A;p<v;p++)A=o?Uo(n[p],o-1,l):(l||hc)(n[p]),h.push(A);return h}function dc(n,o){return n=at(n),n.alt!==void 0?[E(n.lng,o),E(n.lat,o),E(n.alt,o)]:[E(n.lng,o),E(n.lat,o)]}function Bo(n,o,l,h){for(var p=[],v=0,A=n.length;v<A;v++)p.push(o?Bo(n[v],yt(n[v])?0:o-1,l,h):dc(n[v],h));return!o&&l&&p.length>0&&p.push(p[0].slice()),p}function wr(n,o){return n.feature?s({},n.feature,{geometry:o}):zo(o)}function zo(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var fc={toGeoJSON:function(n){return wr(this,{type:"Point",coordinates:dc(this.getLatLng(),n)})}};Oo.include(fc),uc.include(fc),Vo.include(fc),gn.include({toGeoJSON:function(n){var o=!yt(this._latlngs),l=Bo(this._latlngs,o?1:0,!1,n);return wr(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),vr.include({toGeoJSON:function(n){var o=!yt(this._latlngs),l=o&&!yt(this._latlngs[0]),h=Bo(this._latlngs,l?2:o?1:0,!0,n);return o||(h=[h]),wr(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),gr.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(n).geometry.coordinates)}),wr(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var l=o==="GeometryCollection",h=[];return this.eachLayer(function(p){if(p.toGeoJSON){var v=p.toGeoJSON(n);if(l)h.push(v.geometry);else{var A=zo(v);A.type==="FeatureCollection"?h.push.apply(h,A.features):h.push(A)}}}),l?wr(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function hu(n,o){return new yn(n,o)}var am=hu,qo=Be.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,l){this._url=n,this._bounds=Rt(o),U(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(G(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){gt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Se(this._image),this},bringToBack:function(){return this._map&&Ce(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Rt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:pt("img");if(G(o,"leaflet-image-layer"),this._zoomAnimated&&G(o,"leaflet-zoom-animated"),this.options.className&&G(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onload=u(this.fire,this,"load"),o.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;dn(this._image,l,o)},_reset:function(){var n=this._image,o=new At(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();Dt(n,o.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){de(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),cm=function(n,o,l){return new qo(n,o,l)},du=qo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:pt("video");if(G(o,"leaflet-image-layer"),this._zoomAnimated&&G(o,"leaflet-zoom-animated"),this.options.className&&G(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onloadeddata=u(this.fire,this,"load"),n){for(var l=o.getElementsByTagName("source"),h=[],p=0;p<l.length;p++)h.push(l[p].src);this._url=l.length>0?h:[o.src];return}Q(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var A=pt("source");A.src=this._url[v],o.appendChild(A)}}});function lm(n,o,l){return new du(n,o,l)}var fu=qo.extend({_initImage:function(){var n=this._image=this._url;G(n,"leaflet-image-layer"),this._zoomAnimated&&G(n,"leaflet-zoom-animated"),this.options.className&&G(n,this.options.className),n.onselectstart=w,n.onmousemove=w}});function um(n,o,l){return new fu(n,o,l)}var Xe=Be.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof _t||Q(n))?(this._latlng=at(n),U(this,o)):(U(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&de(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&de(this._container,1),this.bringToFront(),this.options.interactive&&(G(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(de(this._container,0),this._removeTimeout=setTimeout(u(gt,void 0,this._container),200)):gt(this._container),this.options.interactive&&(Pt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=at(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Se(this._container),this},bringToBack:function(){return this._map&&Ce(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof _n){o=null;var l=this._source._layers;for(var h in l)if(l[h]._map){o=l[h];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=et(this.options.offset),l=this._getAnchor();this._zoomAnimated?Dt(this._container,n.add(l)):o=o.add(n).add(l);var h=this._containerBottom=-o.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=h+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});ct.include({_initOverlay:function(n,o,l,h){var p=o;return p instanceof n||(p=new n(h).setContent(o)),l&&p.setLatLng(l),p}}),Be.include({_initOverlay:function(n,o,l,h){var p=l;return p instanceof n?(U(p,h),p._source=this):(p=o&&!h?o:new n(h,this),p.setContent(l)),p}});var jo=Xe.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Xe.prototype.openOn.call(this,n)},onAdd:function(n){Xe.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof $n||this._source.on("preclick",wt))},onRemove:function(n){Xe.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof $n||this._source.off("preclick",wt))},getEvents:function(){var n=Xe.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=pt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=pt("div",n+"-content-wrapper",o);if(this._contentNode=pt("div",n+"-content",l),xi(o),us(this._contentNode),nt(o,"contextmenu",wt),this._tipContainer=pt("div",n+"-tip-container",o),this._tip=pt("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=pt("a",n+"-close-button",o);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',nt(h,"click",function(p){Vt(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var h=n.offsetHeight,p=this.options.maxHeight,v="leaflet-popup-scrolled";p&&h>p?(o.height=p+"px",G(n,v)):Pt(n,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Dt(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(zn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,h=this._containerWidth,p=new tt(this._containerLeft,-l-this._containerBottom);p._add(fn(this._container));var v=n.layerPointToContainerPoint(p),A=et(this.options.autoPanPadding),N=et(this.options.autoPanPaddingTopLeft||A),O=et(this.options.autoPanPaddingBottomRight||A),z=n.getSize(),W=0,J=0;v.x+h+O.x>z.x&&(W=v.x+h-z.x+O.x),v.x-W-N.x<0&&(W=v.x-N.x),v.y+l+O.y>z.y&&(J=v.y+l-z.y+O.y),v.y-J-N.y<0&&(J=v.y-N.y),(W||J)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([W,J]))}},_getAnchor:function(){return et(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),hm=function(n,o){return new jo(n,o)};ct.mergeOptions({closePopupOnClick:!0}),ct.include({openPopup:function(n,o,l){return this._initOverlay(jo,n,o,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Be.include({bindPopup:function(n,o){return this._popup=this._initOverlay(jo,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof _n||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Ze(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof $n)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Ho=Xe.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Xe.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Xe.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Xe.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=pt("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+m(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,l,h=this._map,p=this._container,v=h.latLngToContainerPoint(h.getCenter()),A=h.layerPointToContainerPoint(n),N=this.options.direction,O=p.offsetWidth,z=p.offsetHeight,W=et(this.options.offset),J=this._getAnchor();N==="top"?(o=O/2,l=z):N==="bottom"?(o=O/2,l=0):N==="center"?(o=O/2,l=z/2):N==="right"?(o=0,l=z/2):N==="left"?(o=O,l=z/2):A.x<v.x?(N="right",o=0,l=z/2):(N="left",o=O+(W.x+J.x)*2,l=z/2),n=n.subtract(et(o,l,!0)).add(W).add(J),Pt(p,"leaflet-tooltip-right"),Pt(p,"leaflet-tooltip-left"),Pt(p,"leaflet-tooltip-top"),Pt(p,"leaflet-tooltip-bottom"),G(p,"leaflet-tooltip-"+N),Dt(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&de(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return et(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),dm=function(n,o){return new Ho(n,o)};ct.include({openTooltip:function(n,o,l){return this._initOverlay(Ho,n,o,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Be.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ho,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof _n||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(nt(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),nt(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,l,h;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(o)}});var pu=yr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(ce(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=et(l.bgPos);o.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function fm(n){return new pu(n)}yr.Default=Ts;var Es=Be.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Z.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){U(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),gt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Se(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ce(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=_(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof tt?n:new tt(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,l=-n(-1/0,1/0),h=0,p=o.length,v;h<p;h++)v=o[h].style.zIndex,o[h]!==this._container&&v&&(l=n(l,+v));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Z.ielt9){de(this._container,this.options.opacity);var n=+new Date,o=!1,l=!1;for(var h in this._tiles){var p=this._tiles[h];if(!(!p.current||!p.loaded)){var v=Math.min(1,(n-p.loaded)/200);de(p.el,v),v<1?o=!0:(p.active?l=!0:this._onOpaqueTile(p),p.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(x(this._fadeFrame),this._fadeFrame=S(this._updateOpacity,this))}},_onOpaqueTile:w,_initContainer:function(){this._container||(this._container=pt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=o-Math.abs(n-l),this._onUpdateLevel(l)):(gt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[n],p=this._map;return h||(h=this._levels[n]={},h.el=pt("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=o,h.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,p.getCenter(),p.getZoom()),w(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:w,_onRemoveLevel:w,_onCreateLevel:w,_pruneTiles:function(){if(this._map){var n,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var h=o.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)gt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,l,h){var p=Math.floor(n/2),v=Math.floor(o/2),A=l-1,N=new tt(+p,+v);N.z=+A;var O=this._tileCoordsToKey(N),z=this._tiles[O];return z&&z.active?(z.retain=!0,!0):(z&&z.loaded&&(z.retain=!0),A>h?this._retainParent(p,v,A,h):!1)},_retainChildren:function(n,o,l,h){for(var p=2*n;p<2*n+2;p++)for(var v=2*o;v<2*o+2;v++){var A=new tt(p,v);A.z=l+1;var N=this._tileCoordsToKey(A),O=this._tiles[N];if(O&&O.active){O.retain=!0;continue}else O&&O.loaded&&(O.retain=!0);l+1<h&&this._retainChildren(p,v,l+1,h)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,l,h){var p=Math.round(o);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var v=this.options.updateWhenZooming&&p!==this._tileZoom;(!h||v)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,o)},_setZoomTransform:function(n,o,l){var h=this._map.getZoomScale(l,n.zoom),p=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(o,l)).round();Z.any3d?dn(n.el,p,h):Dt(n.el,p)},_resetGrid:function(){var n=this._map,o=n.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],h).x/l.x),Math.ceil(n.project([0,o.wrapLng[1]],h).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],h).y/l.x),Math.ceil(n.project([o.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),h=o.getZoomScale(l,this._tileZoom),p=o.project(n,this._tileZoom).floor(),v=o.getSize().divideBy(h*2);return new At(p.subtract(v),p.add(v))},_update:function(n){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(h),v=p.getCenter(),A=[],N=this.options.keepBuffer,O=new At(p.getBottomLeft().subtract([N,-N]),p.getTopRight().add([N,-N]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var z in this._tiles){var W=this._tiles[z].coords;(W.z!==this._tileZoom||!O.contains(new tt(W.x,W.y)))&&(this._tiles[z].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var J=p.min.y;J<=p.max.y;J++)for(var lt=p.min.x;lt<=p.max.x;lt++){var ue=new tt(lt,J);if(ue.z=this._tileZoom,!!this._isValidTile(ue)){var Zt=this._tiles[this._tileCoordsToKey(ue)];Zt?Zt.current=!0:A.push(ue)}}if(A.sort(function(pe,Er){return pe.distanceTo(v)-Er.distanceTo(v)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var xe=document.createDocumentFragment();for(lt=0;lt<A.length;lt++)this._addTile(A[lt],xe);this._level.el.appendChild(xe)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!o.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return Rt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,l=this.getTileSize(),h=n.scaleBy(l),p=h.add(l),v=o.unproject(h,n.z),A=o.unproject(p,n.z);return[v,A]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),l=new Yt(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),l=new tt(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(n){var o=this._tiles[n];o&&(gt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){G(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=w,n.onmousemove=w,Z.ielt9&&this.options.opacity<1&&de(n,this.options.opacity)},_addTile:function(n,o){var l=this._getTilePos(n),h=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&S(u(this._tileReady,this,n,null,p)),Dt(p,l),this._tiles[h]={el:p,coords:n,current:!0},o.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:n});var h=this._tileCoordsToKey(n);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(de(l.el,0),x(this._fadeFrame),this._fadeFrame=S(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(G(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Z.ielt9||!this._map._fadeAnimated?S(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new tt(this._wrapX?y(n.x,this._wrapX):n.x,this._wrapY?y(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new At(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function pm(n){return new Es(n)}var Tr=Es.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=U(this,o),o.detectRetina&&Z.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var l=document.createElement("img");return nt(l,"load",u(this._tileOnLoad,this,o,l)),nt(l,"error",u(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var o={r:Z.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=l),o["-y"]=l}return ut(this._url,s(o,this.options))},_tileOnLoad:function(n,o){Z.ielt9?setTimeout(u(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,l){var h=this.options.errorTileUrl;h&&o.getAttribute("src")!==h&&(o.src=h),n(l,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(n=o-n),n+h},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=w,o.onerror=w,!o.complete)){o.src=bt;var l=this._tiles[n].coords;gt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",bt),Es.prototype._removeTile.call(this,n)},_tileReady:function(n,o,l){if(!(!this._map||l&&l.getAttribute("src")===bt))return Es.prototype._tileReady.call(this,n,o,l)}});function mu(n,o){return new Tr(n,o)}var _u=Tr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var l=s({},this.defaultWmsParams);for(var h in o)h in this.options||(l[h]=o[h]);o=U(this,o);var p=o.detectRetina&&Z.retina?2:1,v=this.getTileSize();l.width=v.x*p,l.height=v.y*p,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Tr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),l=this._crs,h=Jt(l.project(o[0]),l.project(o[1])),p=h.min,v=h.max,A=(this._wmsVersion>=1.3&&this._crs===_r?[p.y,p.x,v.y,v.x]:[p.x,p.y,v.x,v.y]).join(","),N=Tr.prototype.getTileUrl.call(this,n);return N+q(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(n,o){return s(this.wmsParams,n),o||this.redraw(),this}});function mm(n,o){return new _u(n,o)}Tr.WMS=_u,mu.wms=mm;var vn=Be.extend({options:{padding:.1},initialize:function(n){U(this,n),m(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),G(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var l=this._map.getZoomScale(o,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,o),v=h.multiplyBy(-l).add(p).subtract(this._map._getNewPixelOrigin(n,o));Z.any3d?dn(this._container,v,l):Dt(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new At(l,l.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),gu=vn.extend({options:{tolerance:0},getEvents:function(){var n=vn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){vn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");nt(n,"mousemove",this._onMouseMove,this),nt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),nt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,gt(this._container),It(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){vn.prototype._update.call(this);var n=this._bounds,o=this._container,l=n.getSize(),h=Z.retina?2:1;Dt(o,n.min),o.width=h*l.x,o.height=h*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",Z.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){vn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[m(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,l=o.next,h=o.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete n._order,delete this._layers[m(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),l=[],h,p;for(p=0;p<o.length;p++){if(h=Number(o[p]),isNaN(h))return;l.push(h)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||S(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new At,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var l,h,p,v,A=n._parts,N=A.length,O=this._ctx;if(N){for(O.beginPath(),l=0;l<N;l++){for(h=0,p=A[l].length;h<p;h++)v=A[l][h],O[h?"lineTo":"moveTo"](v.x,v.y);o&&O.closePath()}this._fillStroke(O,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,l=this._ctx,h=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||h)/h;p!==1&&(l.save(),l.scale(1,p)),l.beginPath(),l.arc(o.x,o.y/p,h,0,Math.PI*2,!1),p!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,o){var l=o.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),l,h,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(Pt(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var l,h,p=this._drawFirst;p;p=p.next)l=p.layer,l.options.interactive&&l._containsPoint(o)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(G(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,l){this._map._fireDOMEvent(o,l||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function yu(n){return Z.canvas?new gu(n):null}var Is=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),_m={_initContainer:function(){this._container=pt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(vn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=Is("shape");G(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=Is("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[m(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;gt(o),n.removeInteractiveTarget(o),delete this._layers[m(n)]},_updateStyle:function(n){var o=n._stroke,l=n._fill,h=n.options,p=n._container;p.stroked=!!h.stroke,p.filled=!!h.fill,h.stroke?(o||(o=n._stroke=Is("stroke")),p.appendChild(o),o.weight=h.weight+"px",o.color=h.color,o.opacity=h.opacity,h.dashArray?o.dashStyle=Q(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=h.lineCap.replace("butt","flat"),o.joinstyle=h.lineJoin):o&&(p.removeChild(o),n._stroke=null),h.fill?(l||(l=n._fill=Is("fill")),p.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(p.removeChild(l),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),l=Math.round(n._radius),h=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){Se(n._container)},_bringToBack:function(n){Ce(n._container)}},$o=Z.vml?Is:po,bs=vn.extend({_initContainer:function(){this._container=$o("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=$o("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){gt(this._container),It(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){vn.prototype._update.call(this);var n=this._bounds,o=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),Dt(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=$o("path");n.options.className&&G(o,n.options.className),n.options.interactive&&G(o,"leaflet-interactive"),this._updateStyle(n),this._layers[m(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){gt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[m(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,l=n.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,Ki(n._parts,o))},_updateCircle:function(n){var o=n._point,l=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||l,p="a"+l+","+h+" 0 1,0 ",v=n._empty()?"M0 0":"M"+(o.x-l)+","+o.y+p+l*2+",0 "+p+-l*2+",0 ";this._setPath(n,v)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){Se(n._path)},_bringToBack:function(n){Ce(n._path)}});Z.vml&&bs.include(_m);function vu(n){return Z.svg||Z.vml?new bs(n):null}ct.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&yu(n)||vu(n)}});var wu=vr.extend({initialize:function(n,o){vr.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Rt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function gm(n,o){return new wu(n,o)}bs.create=$o,bs.pointsToPath=Ki,yn.geometryToLayer=Fo,yn.coordsToLatLng=hc,yn.coordsToLatLngs=Uo,yn.latLngToCoords=dc,yn.latLngsToCoords=Bo,yn.getFeature=wr,yn.asFeature=zo,ct.mergeOptions({boxZoom:!0});var Tu=ve.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){nt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){It(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){gt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ve(),or(),this._startPoint=this._map.mouseEventToContainerPoint(n),nt(document,{contextmenu:Ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=pt("div","leaflet-zoom-box",this._container),G(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new At(this._point,this._startPoint),l=o.getSize();Dt(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(gt(this._box),Pt(this._container,"leaflet-crosshair")),ye(),ar(),It(document,{contextmenu:Ze,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var o=new Yt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ct.addInitHook("addHandler","boxZoom",Tu),ct.mergeOptions({doubleClickZoom:!0});var Eu=ve.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,l=o.getZoom(),h=o.options.zoomDelta,p=n.originalEvent.shiftKey?l-h:l+h;o.options.doubleClickZoom==="center"?o.setZoom(p):o.setZoomAround(n.containerPoint,p)}});ct.addInitHook("addHandler","doubleClickZoom",Eu),ct.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Iu=ve.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Fe(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}G(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Pt(this._map._container,"leaflet-grab"),Pt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=Rt(this._map.options.maxBounds);this._offsetLimit=Jt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,p=(h-o+l)%n+o-l,v=(h+o+l)%n-o-l,A=Math.abs(p+l)<Math.abs(v+l)?p:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(n){var o=this._map,l=o.options,h=!l.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),h)o.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,A=l.easeLinearity,N=p.multiplyBy(A/v),O=N.distanceTo([0,0]),z=Math.min(l.inertiaMaxSpeed,O),W=N.multiplyBy(z/O),J=z/(l.inertiaDeceleration*A),lt=W.multiplyBy(-J/2).round();!lt.x&&!lt.y?o.fire("moveend"):(lt=o._limitOffset(lt,o.options.maxBounds),S(function(){o.panBy(lt,{duration:J,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});ct.addInitHook("addHandler","dragging",Iu),ct.mergeOptions({keyboard:!0,keyboardPanDelta:80});var bu=ve.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),nt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),It(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,l=n.scrollTop||o.scrollTop,h=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},l=this.keyCodes,h,p;for(h=0,p=l.left.length;h<p;h++)o[l.left[h]]=[-1*n,0];for(h=0,p=l.right.length;h<p;h++)o[l.right[h]]=[n,0];for(h=0,p=l.down.length;h<p;h++)o[l.down[h]]=[0,n];for(h=0,p=l.up.length;h<p;h++)o[l.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},l=this.keyCodes,h,p;for(h=0,p=l.zoomIn.length;h<p;h++)o[l.zoomIn[h]]=n;for(h=0,p=l.zoomOut.length;h<p;h++)o[l.zoomOut[h]]=-n},_addHooks:function(){nt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){It(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,l=this._map,h;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[o],n.shiftKey&&(h=et(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(et(h),l.options.maxBounds)),l.options.worldCopyJump){var p=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(p)}else l.panBy(h)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Ze(n)}}});ct.addInitHook("addHandler","keyboard",bu),ct.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Au=ve.extend({addHooks:function(){nt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){It(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=ds(n),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),h),Ze(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,v=l?Math.ceil(p/l)*l:p,A=n._limitZoom(o+(this._delta>0?v:-v))-o;this._delta=0,this._startTime=null,A&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+A):n.setZoomAround(this._lastMousePos,o+A))}});ct.addInitHook("addHandler","scrollWheelZoom",Au);var ym=600;ct.mergeOptions({tapHold:Z.touchNative&&Z.safari&&Z.mobile,tapTolerance:15});var Pu=ve.extend({addHooks:function(){nt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){It(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new tt(o.clientX,o.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(nt(document,"touchend",Vt),nt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),ym),nt(document,"touchend touchcancel contextmenu",this._cancel,this),nt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){It(document,"touchend",Vt),It(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),It(document,"touchend touchcancel contextmenu",this._cancel,this),It(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new tt(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});ct.addInitHook("addHandler","tapHold",Pu),ct.mergeOptions({touchZoom:Z.touch,bounceAtZoomLimits:!0});var Su=ve.extend({addHooks:function(){G(this._map._container,"leaflet-touch-zoom"),nt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Pt(this._map._container,"leaflet-touch-zoom"),It(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),nt(document,"touchmove",this._onTouchMove,this),nt(document,"touchend touchcancel",this._onTouchEnd,this),Vt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]),p=l.distanceTo(h)/this._startDist;if(this._zoom=o.getScaleZoom(p,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&p<1||this._zoom>o.getMaxZoom()&&p>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var v=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(p===1&&v.x===0&&v.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var A=u(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=S(A,this,!0),Vt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,x(this._animRequest),It(document,"touchmove",this._onTouchMove,this),It(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ct.addInitHook("addHandler","touchZoom",Su),ct.BoxZoom=Tu,ct.DoubleClickZoom=Eu,ct.Drag=Iu,ct.Keyboard=bu,ct.ScrollWheelZoom=Au,ct.TapHold=Pu,ct.TouchZoom=Su,e.Bounds=At,e.Browser=Z,e.CRS=ge,e.Canvas=gu,e.Circle=uc,e.CircleMarker=Vo,e.Class=Ct,e.Control=fe,e.DivIcon=pu,e.DivOverlay=Xe,e.DomEvent=Ni,e.DomUtil=lc,e.Draggable=Fe,e.Evented=gi,e.FeatureGroup=_n,e.GeoJSON=yn,e.GridLayer=Es,e.Handler=ve,e.Icon=yr,e.ImageOverlay=qo,e.LatLng=_t,e.LatLngBounds=Yt,e.Layer=Be,e.LayerGroup=gr,e.LineUtil=ke,e.Map=ct,e.Marker=Oo,e.Mixin=No,e.Path=$n,e.Point=tt,e.PolyUtil=pr,e.Polygon=vr,e.Polyline=gn,e.Popup=jo,e.PosAnimation=ps,e.Projection=Ye,e.Rectangle=wu,e.Renderer=vn,e.SVG=bs,e.SVGOverlay=fu,e.TileLayer=Tr,e.Tooltip=Ho,e.Transformation=Yr,e.Util=b,e.VideoOverlay=du,e.bind=u,e.bounds=Jt,e.canvas=yu,e.circle=rm,e.circleMarker=im,e.control=Qe,e.divIcon=fm,e.extend=s,e.featureGroup=tm,e.geoJSON=hu,e.geoJson=am,e.gridLayer=pm,e.icon=em,e.imageOverlay=cm,e.latLng=at,e.latLngBounds=Rt,e.layerGroup=Xp,e.map=ur,e.marker=nm,e.point=et,e.polygon=om,e.polyline=sm,e.popup=hm,e.rectangle=gm,e.setOptions=U,e.stamp=m,e.svg=vu,e.svgOverlay=um,e.tileLayer=mu,e.tooltip=dm,e.transformation=Mn,e.version=r,e.videoOverlay=lm;var vm=window.L;e.noConflict=function(){return window.L=vm,this},window.L=e})})(al,al.exports);var VI=al.exports;const Cr=OI(VI),Qp="trippy-geocache";let dd=Promise.resolve();function fd(){try{return JSON.parse(localStorage.getItem(Qp)||"{}")}catch{return{}}}function FI(i){try{localStorage.setItem(Qp,JSON.stringify(i))}catch{}}async function UI(i){const t=i.toLowerCase().trim(),e=fd();if(e[t])return e[t];const r=await(dd=dd.then(async()=>{await new Promise(s=>setTimeout(s,350));try{const s=`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(i)}`,u=await(await fetch(s,{headers:{"Accept-Language":"en"}})).json();return u!=null&&u.length?{lat:parseFloat(u[0].lat),lng:parseFloat(u[0].lon)}:null}catch{return null}}));if(r){const s=fd();s[t]=r,FI(s)}return r}async function BI(i){const t=[...new Set(i.filter(Boolean))],e={};for(const r of t)e[r]=await UI(r);return e}let Ps=null,De=null,Sr=null;function zI(i,t){var r;Ps&&(Ps.destroy(),Ps=null),De&&(De.remove(),De=null),Sr=null;const e=((r=Xa())==null?void 0:r.uid)||null;i.innerHTML=`
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
  `,tc(i),i.querySelector("#globe-back").addEventListener("click",()=>Cn(`/trip/${t}`)),De=Cr.map("map-inner",{zoomControl:!0}).setView([20,10],2),Cr.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(De),Ps=Wp(t,e,s=>pd(i,s)),pd(i,Ps.getAll())}async function pd(i,t,e){var m,_;const r=i.querySelector("#globe-day-list");if(!r||!De)return;if(Sr&&(r.removeEventListener("click",Sr),Sr=null),De.eachLayer(y=>{y instanceof Cr.TileLayer||De.removeLayer(y)}),t.length===0){r.innerHTML='<div class="globe-empty">No days in this trip yet.</div>';return}r.innerHTML='<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>'+t.map((y,w)=>`
      <div class="globe-day-item" data-dest="${kc(y.destination)}" data-idx="${w}">
        <div class="globe-day-date">${qI(y.date)}</div>
        <div class="globe-day-dest">${kc(y.destination||"Unknown")}</div>
        ${y.event?`<div class="globe-day-event">${kc(y.event)}</div>`:""}
        ${y.travelDay?'<span class="globe-travel-badge">Travel</span>':""}
      </div>
    `).join("");const s=[...new Set(t.map(y=>y.destination).filter(Boolean))],a=await BI(s);(m=r.querySelector(".geocoding-hint"))==null||m.remove(),(_=r.querySelector(".globe-day-item"))==null||_.classList.add("active");const u=t.filter(y=>y.destination&&a[y.destination]).map(y=>[a[y.destination].lat,a[y.destination].lng]);u.length>1&&Cr.polyline(u,{color:"#7c6af7",weight:2.5,opacity:.85,dashArray:"6 10"}).addTo(De);const f={};for(const y of s){if(!a[y])continue;const w=Cr.circleMarker([a[y].lat,a[y].lng],{radius:7,fillColor:"#7c6af7",color:"#fff",weight:1.5,fillOpacity:.9}).addTo(De);w.bindTooltip(y,{direction:"top",offset:[0,-8],className:"map-tooltip"}),f[y]=w}u.length>0&&De.fitBounds(Cr.latLngBounds(u),{padding:[50,50],maxZoom:8}),Sr=y=>{var k;const w=y.target.closest(".globe-day-item");if(!w)return;const E=w.dataset.dest;E&&a[E]&&(De.flyTo([a[E].lat,a[E].lng],10,{duration:1.5}),r.querySelectorAll(".globe-day-item").forEach(V=>V.classList.remove("active")),w.classList.add("active"),w.scrollIntoView({behavior:"smooth",block:"nearest"}),(k=f[E])==null||k.openTooltip())},r.addEventListener("click",Sr)}function qI(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function kc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const wn=document.getElementById("app");XE();const Jp=aI({"/":()=>Zp(wn),"/trip/:id":({id:i})=>NI(wn,i),"/globe/:id":({id:i})=>zI(wn,i),"/join/:code":async({code:i})=>{var e,r;const t=Xa();if(!t){wn.innerHTML=`
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
      `,tc(wn),(e=wn.querySelector("#join-home-btn"))==null||e.addEventListener("click",()=>Cn("/"));return}try{wn.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⏳</div>
          <p>Joining trip…</p>
        </div>
      `;const s=await pI(i,t.uid);Cn(`/trip/${s}`)}catch(s){wn.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⚠️</div>
          <h2>Could not join trip</h2>
          <p>${s.message}</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `,(r=wn.querySelector("#join-home-btn"))==null||r.addEventListener("click",()=>Cn("/"))}}});tI(i=>{i&&yI(i.uid,i.displayName||i.email||""),Jp.refresh()});Jp.start();
