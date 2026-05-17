(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const jm=()=>{};var zu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=function(i){const t=[];let e=0;for(let r=0;r<i.length;r++){let s=i.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<i.length&&(i.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(i.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Hm=function(i){const t=[];let e=0,r=0;for(;e<i.length;){const s=i[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=i[e++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=i[e++],u=i[e++],f=i[e++],p=((s&7)<<18|(a&63)<<12|(u&63)<<6|f&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const a=i[e++],u=i[e++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Sd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<i.length;s+=3){const a=i[s],u=s+1<i.length,f=u?i[s+1]:0,p=s+2<i.length,g=p?i[s+2]:0,y=a>>2,w=(a&3)<<4|f>>4;let E=(f&15)<<2|g>>6,S=g&63;p||(S=64,u||(E=64)),r.push(e[y],e[w],e[E],e[S])}return r.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Pd(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Hm(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<i.length;){const a=e[i.charAt(s++)],f=s<i.length?e[i.charAt(s)]:0;++s;const g=s<i.length?e[i.charAt(s)]:64;++s;const w=s<i.length?e[i.charAt(s)]:64;if(++s,a==null||f==null||g==null||w==null)throw new Wm;const E=a<<2|f>>4;if(r.push(E),g!==64){const S=f<<4&240|g>>2;if(r.push(S),w!==64){const M=g<<6&192|w;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Wm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gm=function(i){const t=Pd(i);return Sd.encodeByteArray(t,!0)},Ta=function(i){return Gm(i).replace(/\./g,"")},Cd=function(i){try{return Sd.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Zm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Km=()=>Zm().__FIREBASE_DEFAULTS__,Qm=()=>{if(typeof process>"u"||typeof zu>"u")return;const i=zu.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Jm=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&Cd(i[1]);return t&&JSON.parse(t)},$a=()=>{try{return jm()||Km()||Qm()||Jm()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Rd=i=>{var t,e;return(e=(t=$a())==null?void 0:t.emulatorHosts)==null?void 0:e[i]},Ym=i=>{const t=Rd(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},kd=()=>{var i;return(i=$a())==null?void 0:i.config},Ld=i=>{var t;return(t=$a())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function t_(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=i.iat||0,a=i.sub||i.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...i};return[Ta(JSON.stringify(e)),Ta(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function n_(){var t;const i=(t=$a())==null?void 0:t.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function i_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r_(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function s_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o_(){const i=le();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function a_(){return!n_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function l_(){return new Promise((i,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),i(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var a;t(((a=s.error)==null?void 0:a.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="FirebaseError";class Fn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=u_,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,a=this.errors[t],u=a?h_(a,r):"Error",f=`${this.serviceName}: ${u} (${s}).`;return new Fn(s,f,r)}}function h_(i,t){return i.replace(d_,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const d_=/\{\$([^}]+)}/g;function f_(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Dn(i,t){if(i===t)return!0;const e=Object.keys(i),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const a=i[s],u=t[s];if(qu(a)&&qu(u)){if(!Dn(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function qu(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(i){const t=[];for(const[e,r]of Object.entries(i))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Os(i){const t={};return i.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,a]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(a)}}),t}function Vs(i){const t=i.indexOf("?");if(!t)return"";const e=i.indexOf("#",t);return i.substring(t,e>0?e:void 0)}function p_(i,t){const e=new m_(i,t);return e.subscribe.bind(e)}class m_{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");__(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Ac),s.error===void 0&&(s.error=Ac),s.complete===void 0&&(s.complete=Ac);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function __(i,t){if(typeof i!="object"||i===null)return!1;for(const e of t)if(e in i&&typeof i[e]=="function")return!0;return!1}function Ac(){}/**
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
 */function ao(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xd(i){return(await fetch(i,{credentials:"include"})).ok}class Wi{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class g_{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Xm;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(v_(t))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=Ui){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ui){return this.instances.has(t)}getOptions(t=Ui){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[a,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);r===f&&u.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&t(a,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y_(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ui){return this.component?this.component.multipleInstances?t:Ui:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y_(i){return i===Ui?void 0:i}function v_(i){return i.instantiationMode==="EAGER"}/**
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
 */class w_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new g_(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(mt||(mt={}));const T_={debug:mt.DEBUG,verbose:mt.VERBOSE,info:mt.INFO,warn:mt.WARN,error:mt.ERROR,silent:mt.SILENT},E_=mt.INFO,I_={[mt.DEBUG]:"log",[mt.VERBOSE]:"log",[mt.INFO]:"info",[mt.WARN]:"warn",[mt.ERROR]:"error"},b_=(i,t,...e)=>{if(t<i.logLevel)return;const r=new Date().toISOString(),s=I_[t];if(s)console[s](`[${r}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gl{constructor(t){this.name=t,this._logLevel=E_,this._logHandler=b_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?T_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,mt.DEBUG,...t),this._logHandler(this,mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,mt.VERBOSE,...t),this._logHandler(this,mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,mt.INFO,...t),this._logHandler(this,mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,mt.WARN,...t),this._logHandler(this,mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,mt.ERROR,...t),this._logHandler(this,mt.ERROR,...t)}}const A_=(i,t)=>t.some(e=>i instanceof e);let $u,ju;function P_(){return $u||($u=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S_(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dd=new WeakMap,zc=new WeakMap,Nd=new WeakMap,Pc=new WeakMap,yl=new WeakMap;function C_(i){const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("success",a),i.removeEventListener("error",u)},a=()=>{e(ei(i.result)),s()},u=()=>{r(i.error),s()};i.addEventListener("success",a),i.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Dd.set(e,i)}).catch(()=>{}),yl.set(t,i),t}function R_(i){if(zc.has(i))return;const t=new Promise((e,r)=>{const s=()=>{i.removeEventListener("complete",a),i.removeEventListener("error",u),i.removeEventListener("abort",u)},a=()=>{e(),s()},u=()=>{r(i.error||new DOMException("AbortError","AbortError")),s()};i.addEventListener("complete",a),i.addEventListener("error",u),i.addEventListener("abort",u)});zc.set(i,t)}let qc={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return zc.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Nd.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ei(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function k_(i){qc=i(qc)}function L_(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=i.call(Sc(this),t,...e);return Nd.set(r,t.sort?t.sort():[t]),ei(r)}:S_().includes(i)?function(...t){return i.apply(Sc(this),t),ei(Dd.get(this))}:function(...t){return ei(i.apply(Sc(this),t))}}function x_(i){return typeof i=="function"?L_(i):(i instanceof IDBTransaction&&R_(i),A_(i,P_())?new Proxy(i,qc):i)}function ei(i){if(i instanceof IDBRequest)return C_(i);if(Pc.has(i))return Pc.get(i);const t=x_(i);return t!==i&&(Pc.set(i,t),yl.set(t,i)),t}const Sc=i=>yl.get(i);function D_(i,t,{blocked:e,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(i,t),f=ei(u);return r&&u.addEventListener("upgradeneeded",p=>{r(ei(u.result),p.oldVersion,p.newVersion,ei(u.transaction),p)}),e&&u.addEventListener("blocked",p=>e(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const N_=["get","getKey","getAll","getAllKeys","count"],M_=["put","add","delete","clear"],Cc=new Map;function Hu(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Cc.get(t))return Cc.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=M_.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||N_.includes(e)))return;const a=async function(u,...f){const p=this.transaction(u,s?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[e](...f),s&&p.done]))[0]};return Cc.set(t,a),a}k_(i=>({...i,get:(t,e,r)=>Hu(t,e)||i.get(t,e,r),has:(t,e)=>!!Hu(t,e)||i.has(t,e)}));/**
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
 */class O_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(V_(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function V_(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $c="@firebase/app",Wu="0.14.12";/**
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
 */const Nn=new gl("@firebase/app"),F_="@firebase/app-compat",U_="@firebase/analytics-compat",B_="@firebase/analytics",z_="@firebase/app-check-compat",q_="@firebase/app-check",$_="@firebase/auth",j_="@firebase/auth-compat",H_="@firebase/database",W_="@firebase/data-connect",G_="@firebase/database-compat",Z_="@firebase/functions",K_="@firebase/functions-compat",Q_="@firebase/installations",J_="@firebase/installations-compat",Y_="@firebase/messaging",X_="@firebase/messaging-compat",tg="@firebase/performance",eg="@firebase/performance-compat",ng="@firebase/remote-config",ig="@firebase/remote-config-compat",rg="@firebase/storage",sg="@firebase/storage-compat",og="@firebase/firestore",ag="@firebase/ai",cg="@firebase/firestore-compat",lg="firebase",ug="12.13.0";/**
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
 */const jc="[DEFAULT]",hg={[$c]:"fire-core",[F_]:"fire-core-compat",[B_]:"fire-analytics",[U_]:"fire-analytics-compat",[q_]:"fire-app-check",[z_]:"fire-app-check-compat",[$_]:"fire-auth",[j_]:"fire-auth-compat",[H_]:"fire-rtdb",[W_]:"fire-data-connect",[G_]:"fire-rtdb-compat",[Z_]:"fire-fn",[K_]:"fire-fn-compat",[Q_]:"fire-iid",[J_]:"fire-iid-compat",[Y_]:"fire-fcm",[X_]:"fire-fcm-compat",[tg]:"fire-perf",[eg]:"fire-perf-compat",[ng]:"fire-rc",[ig]:"fire-rc-compat",[rg]:"fire-gcs",[sg]:"fire-gcs-compat",[og]:"fire-fst",[cg]:"fire-fst-compat",[ag]:"fire-vertex","fire-js":"fire-js",[lg]:"fire-js-all"};/**
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
 */const Ea=new Map,dg=new Map,Hc=new Map;function Gu(i,t){try{i.container.addComponent(t)}catch(e){Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function jr(i){const t=i.name;if(Hc.has(t))return Nn.debug(`There were multiple attempts to register component ${t}.`),!1;Hc.set(t,i);for(const e of Ea.values())Gu(e,i);for(const e of dg.values())Gu(e,i);return!0}function vl(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}function be(i){return i==null?!1:i.settings!==void 0}/**
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
 */const fg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ni=new so("app","Firebase",fg);/**
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
 */class pg{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
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
 */const Jr=ug;function Md(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const r={name:jc,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw ni.create("bad-app-name",{appName:String(s)});if(e||(e=kd()),!e)throw ni.create("no-options");const a=Ea.get(s);if(a){if(Dn(e,a.options)&&Dn(r,a.config))return a;throw ni.create("duplicate-app",{appName:s})}const u=new w_(s);for(const p of Hc.values())u.addComponent(p);const f=new pg(e,r,u);return Ea.set(s,f),f}function Od(i=jc){const t=Ea.get(i);if(!t&&i===jc&&kd())return Md();if(!t)throw ni.create("no-app",{appName:i});return t}function ii(i,t,e){let r=hg[i]??i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${r}" with version "${t}":`];s&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Nn.warn(u.join(" "));return}jr(new Wi(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const mg="firebase-heartbeat-database",_g=1,Zs="firebase-heartbeat-store";let Rc=null;function Vd(){return Rc||(Rc=D_(mg,_g,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Zs)}catch(e){console.warn(e)}}}}).catch(i=>{throw ni.create("idb-open",{originalErrorMessage:i.message})})),Rc}async function gg(i){try{const e=(await Vd()).transaction(Zs),r=await e.objectStore(Zs).get(Fd(i));return await e.done,r}catch(t){if(t instanceof Fn)Nn.warn(t.message);else{const e=ni.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Nn.warn(e.message)}}}async function Zu(i,t){try{const r=(await Vd()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(t,Fd(i)),await r.done}catch(e){if(e instanceof Fn)Nn.warn(e.message);else{const r=ni.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(r.message)}}}function Fd(i){return`${i.name}!${i.options.appId}`}/**
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
 */const yg=1024,vg=30;class wg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Eg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Ku();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>vg){const u=Ig(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ku(),{heartbeatsToSend:r,unsentEntries:s}=Tg(this._heartbeatsCache.heartbeats),a=Ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(e){return Nn.warn(e),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function Tg(i,t=yg){const e=[];let r=i.slice();for(const s of i){const a=e.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Qu(e)>t){a.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Qu(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Eg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?l_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await gg(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zu(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Qu(i){return Ta(JSON.stringify({version:2,heartbeats:i})).length}function Ig(i){if(i.length===0)return-1;let t=0,e=i[0].date;for(let r=1;r<i.length;r++)i[r].date<e&&(e=i[r].date,t=r);return t}/**
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
 */function bg(i){jr(new Wi("platform-logger",t=>new O_(t),"PRIVATE")),jr(new Wi("heartbeat",t=>new wg(t),"PRIVATE")),ii($c,Wu,i),ii($c,Wu,"esm2020"),ii("fire-js","")}bg("");var Ag="firebase",Pg="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ii(Ag,Pg,"app");var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ri,Ud;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(R,I){function P(){}P.prototype=I.prototype,R.F=I.prototype,R.prototype=new P,R.prototype.constructor=R,R.D=function(k,C,x){for(var b=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)b[Rt-2]=arguments[Rt];return I.prototype[C].apply(k,b)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,I,P){P||(P=0);const k=Array(16);if(typeof I=="string")for(var C=0;C<16;++C)k[C]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(C=0;C<16;++C)k[C]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=R.g[0],P=R.g[1],C=R.g[2];let x=R.g[3],b;b=I+(x^P&(C^x))+k[0]+3614090360&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[1]+3905402710&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[2]+606105819&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[3]+3250441966&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(x^P&(C^x))+k[4]+4118548399&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[5]+1200080426&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[6]+2821735955&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[7]+4249261313&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(x^P&(C^x))+k[8]+1770035416&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[9]+2336552879&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[10]+4294925233&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[11]+2304563134&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(x^P&(C^x))+k[12]+1804603682&4294967295,I=P+(b<<7&4294967295|b>>>25),b=x+(C^I&(P^C))+k[13]+4254626195&4294967295,x=I+(b<<12&4294967295|b>>>20),b=C+(P^x&(I^P))+k[14]+2792965006&4294967295,C=x+(b<<17&4294967295|b>>>15),b=P+(I^C&(x^I))+k[15]+1236535329&4294967295,P=C+(b<<22&4294967295|b>>>10),b=I+(C^x&(P^C))+k[1]+4129170786&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[6]+3225465664&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[11]+643717713&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[0]+3921069994&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(P^C))+k[5]+3593408605&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[10]+38016083&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[15]+3634488961&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[4]+3889429448&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(P^C))+k[9]+568446438&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[14]+3275163606&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[3]+4107603335&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[8]+1163531501&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(C^x&(P^C))+k[13]+2850285829&4294967295,I=P+(b<<5&4294967295|b>>>27),b=x+(P^C&(I^P))+k[2]+4243563512&4294967295,x=I+(b<<9&4294967295|b>>>23),b=C+(I^P&(x^I))+k[7]+1735328473&4294967295,C=x+(b<<14&4294967295|b>>>18),b=P+(x^I&(C^x))+k[12]+2368359562&4294967295,P=C+(b<<20&4294967295|b>>>12),b=I+(P^C^x)+k[5]+4294588738&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[8]+2272392833&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[11]+1839030562&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[14]+4259657740&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(P^C^x)+k[1]+2763975236&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[4]+1272893353&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[7]+4139469664&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[10]+3200236656&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(P^C^x)+k[13]+681279174&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[0]+3936430074&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[3]+3572445317&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[6]+76029189&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(P^C^x)+k[9]+3654602809&4294967295,I=P+(b<<4&4294967295|b>>>28),b=x+(I^P^C)+k[12]+3873151461&4294967295,x=I+(b<<11&4294967295|b>>>21),b=C+(x^I^P)+k[15]+530742520&4294967295,C=x+(b<<16&4294967295|b>>>16),b=P+(C^x^I)+k[2]+3299628645&4294967295,P=C+(b<<23&4294967295|b>>>9),b=I+(C^(P|~x))+k[0]+4096336452&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[7]+1126891415&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[14]+2878612391&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[5]+4237533241&4294967295,P=C+(b<<21&4294967295|b>>>11),b=I+(C^(P|~x))+k[12]+1700485571&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[3]+2399980690&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[10]+4293915773&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[1]+2240044497&4294967295,P=C+(b<<21&4294967295|b>>>11),b=I+(C^(P|~x))+k[8]+1873313359&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[15]+4264355552&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[6]+2734768916&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[13]+1309151649&4294967295,P=C+(b<<21&4294967295|b>>>11),b=I+(C^(P|~x))+k[4]+4149444226&4294967295,I=P+(b<<6&4294967295|b>>>26),b=x+(P^(I|~C))+k[11]+3174756917&4294967295,x=I+(b<<10&4294967295|b>>>22),b=C+(I^(x|~P))+k[2]+718787259&4294967295,C=x+(b<<15&4294967295|b>>>17),b=P+(x^(C|~I))+k[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(C+(b<<21&4294967295|b>>>11))&4294967295,R.g[2]=R.g[2]+C&4294967295,R.g[3]=R.g[3]+x&4294967295}r.prototype.v=function(R,I){I===void 0&&(I=R.length);const P=I-this.blockSize,k=this.C;let C=this.h,x=0;for(;x<I;){if(C==0)for(;x<=P;)s(this,R,x),x+=this.blockSize;if(typeof R=="string"){for(;x<I;)if(k[C++]=R.charCodeAt(x++),C==this.blockSize){s(this,k),C=0;break}}else for(;x<I;)if(k[C++]=R[x++],C==this.blockSize){s(this,k),C=0;break}}this.h=C,this.o+=I},r.prototype.A=function(){var R=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;I=this.o*8;for(var P=R.length-8;P<R.length;++P)R[P]=I&255,I/=256;for(this.v(R),R=Array(16),I=0,P=0;P<4;++P)for(let k=0;k<32;k+=8)R[I++]=this.g[P]>>>k&255;return R};function a(R,I){var P=f;return Object.prototype.hasOwnProperty.call(P,R)?P[R]:P[R]=I(R)}function u(R,I){this.h=I;const P=[];let k=!0;for(let C=R.length-1;C>=0;C--){const x=R[C]|0;k&&x==I||(P[C]=x,k=!1)}this.g=P}var f={};function p(R){return-128<=R&&R<128?a(R,function(I){return new u([I|0],I<0?-1:0)}):new u([R|0],R<0?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return w;if(R<0)return B(g(-R));const I=[];let P=1;for(let k=0;R>=P;k++)I[k]=R/P|0,P*=4294967296;return new u(I,0)}function y(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return B(y(R.substring(1),I));if(R.indexOf("-")>=0)throw Error('number format error: interior "-" character');const P=g(Math.pow(I,8));let k=w;for(let x=0;x<R.length;x+=8){var C=Math.min(8,R.length-x);const b=parseInt(R.substring(x,x+C),I);C<8?(C=g(Math.pow(I,C)),k=k.j(C).add(g(b))):(k=k.j(P),k=k.add(g(b)))}return k}var w=p(0),E=p(1),S=p(16777216);i=u.prototype,i.m=function(){if(F(this))return-B(this).m();let R=0,I=1;for(let P=0;P<this.g.length;P++){const k=this.i(P);R+=(k>=0?k:4294967296+k)*I,I*=4294967296}return R},i.toString=function(R){if(R=R||10,R<2||36<R)throw Error("radix out of range: "+R);if(M(this))return"0";if(F(this))return"-"+B(this).toString(R);const I=g(Math.pow(R,6));var P=this;let k="";for(;;){const C=ct(P,I).g;P=j(P,C.j(I));let x=((P.g.length>0?P.g[0]:P.h)>>>0).toString(R);if(P=C,M(P))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},i.i=function(R){return R<0?0:R<this.g.length?this.g[R]:this.h};function M(R){if(R.h!=0)return!1;for(let I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function F(R){return R.h==-1}i.l=function(R){return R=j(this,R),F(R)?-1:M(R)?0:1};function B(R){const I=R.g.length,P=[];for(let k=0;k<I;k++)P[k]=~R.g[k];return new u(P,~R.h).add(E)}i.abs=function(){return F(this)?B(this):this},i.add=function(R){const I=Math.max(this.g.length,R.g.length),P=[];let k=0;for(let C=0;C<=I;C++){let x=k+(this.i(C)&65535)+(R.i(C)&65535),b=(x>>>16)+(this.i(C)>>>16)+(R.i(C)>>>16);k=b>>>16,x&=65535,b&=65535,P[C]=b<<16|x}return new u(P,P[P.length-1]&-2147483648?-1:0)};function j(R,I){return R.add(B(I))}i.j=function(R){if(M(this)||M(R))return w;if(F(this))return F(R)?B(this).j(B(R)):B(B(this).j(R));if(F(R))return B(this.j(B(R)));if(this.l(S)<0&&R.l(S)<0)return g(this.m()*R.m());const I=this.g.length+R.g.length,P=[];for(var k=0;k<2*I;k++)P[k]=0;for(k=0;k<this.g.length;k++)for(let C=0;C<R.g.length;C++){const x=this.i(k)>>>16,b=this.i(k)&65535,Rt=R.i(C)>>>16,$t=R.i(C)&65535;P[2*k+2*C]+=b*$t,H(P,2*k+2*C),P[2*k+2*C+1]+=x*$t,H(P,2*k+2*C+1),P[2*k+2*C+1]+=b*Rt,H(P,2*k+2*C+1),P[2*k+2*C+2]+=x*Rt,H(P,2*k+2*C+2)}for(R=0;R<I;R++)P[R]=P[2*R+1]<<16|P[2*R];for(R=I;R<2*I;R++)P[R]=0;return new u(P,0)};function H(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function W(R,I){this.g=R,this.h=I}function ct(R,I){if(M(I))throw Error("division by zero");if(M(R))return new W(w,w);if(F(R))return I=ct(B(R),I),new W(B(I.g),B(I.h));if(F(I))return I=ct(R,B(I)),new W(B(I.g),I.h);if(R.g.length>30){if(F(R)||F(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,k=I;k.l(R)<=0;)P=lt(P),k=lt(k);var C=At(P,1),x=At(k,1);for(k=At(k,2),P=At(P,2);!M(k);){var b=x.add(k);b.l(R)<=0&&(C=C.add(P),x=b),k=At(k,1),P=At(P,1)}return I=j(R,C.j(I)),new W(C,I)}for(C=w;R.l(I)>=0;){for(P=Math.max(1,Math.floor(R.m()/I.m())),k=Math.ceil(Math.log(P)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=g(P),b=x.j(I);F(b)||b.l(R)>0;)P-=k,x=g(P),b=x.j(I);M(x)&&(x=E),C=C.add(x),R=j(R,b)}return new W(C,R)}i.B=function(R){return ct(this,R).h},i.and=function(R){const I=Math.max(this.g.length,R.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)&R.i(k);return new u(P,this.h&R.h)},i.or=function(R){const I=Math.max(this.g.length,R.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)|R.i(k);return new u(P,this.h|R.h)},i.xor=function(R){const I=Math.max(this.g.length,R.g.length),P=[];for(let k=0;k<I;k++)P[k]=this.i(k)^R.i(k);return new u(P,this.h^R.h)};function lt(R){const I=R.g.length+1,P=[];for(let k=0;k<I;k++)P[k]=R.i(k)<<1|R.i(k-1)>>>31;return new u(P,R.h)}function At(R,I){const P=I>>5;I%=32;const k=R.g.length-P,C=[];for(let x=0;x<k;x++)C[x]=I>0?R.i(x+P)>>>I|R.i(x+P+1)<<32-I:R.i(x+P);return new u(C,R.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ud=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,ri=u}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bd,Fs,zd,ua,Wc,qd,$d,jd;(function(){var i,t=Object.defineProperty;function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof ea=="object"&&ea];for(var d=0;d<c.length;++d){var _=c[d];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=e(this);function s(c,d){if(d)t:{var _=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var D=c[T];if(!(D in _))break t;_=_[D]}c=c[c.length-1],T=_[c],d=d(T),d!=T&&d!=null&&t(_,c,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(d){var _=[],T;for(T in d)Object.prototype.hasOwnProperty.call(d,T)&&_.push([T,d[T]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function f(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function p(c,d,_){return c.call.apply(c.bind,arguments)}function g(c,d,_){return g=p,g.apply(null,arguments)}function y(c,d){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function w(c,d){function _(){}_.prototype=d.prototype,c.Z=d.prototype,c.prototype=new _,c.prototype.constructor=c,c.Ob=function(T,D,O){for(var $=Array(arguments.length-2),st=2;st<arguments.length;st++)$[st-2]=arguments[st];return d.prototype[D].apply(T,$)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function S(c){const d=c.length;if(d>0){const _=Array(d);for(let T=0;T<d;T++)_[T]=c[T];return _}return[]}function M(c,d){for(let T=1;T<arguments.length;T++){const D=arguments[T];var _=typeof D;if(_=_!="object"?_:D?Array.isArray(D)?"array":_:"null",_=="array"||_=="object"&&typeof D.length=="number"){_=c.length||0;const O=D.length||0;c.length=_+O;for(let $=0;$<O;$++)c[_+$]=D[$]}else c.push(D)}}class F{constructor(d,_){this.i=d,this.j=_,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function B(c){u.setTimeout(()=>{throw c},0)}function j(){var c=R;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class H{constructor(){this.h=this.g=null}add(d,_){const T=W.get();T.set(d,_),this.h?this.h.next=T:this.g=T,this.h=T}}var W=new F(()=>new ct,c=>c.reset());class ct{constructor(){this.next=this.g=this.h=null}set(d,_){this.h=d,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let lt,At=!1,R=new H,I=()=>{const c=Promise.resolve(void 0);lt=()=>{c.then(P)}};function P(){for(var c;c=j();){try{c.h.call(c.g)}catch(_){B(_)}var d=W;d.j(c),d.h<100&&(d.h++,c.next=d.g,d.g=c)}At=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};u.addEventListener("test",_,d),u.removeEventListener("test",_,d)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function Rt(c,d){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,d)}w(Rt,C),Rt.prototype.init=function(c,d){const _=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget,d||(_=="mouseover"?d=c.fromElement:_=="mouseout"&&(d=c.toElement)),this.relatedTarget=d,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Rt.Z.h.call(this)},Rt.prototype.h=function(){Rt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var $t="closure_listenable_"+(Math.random()*1e6|0),Yt=0;function Ti(c,d,_,T,D){this.listener=c,this.proxy=null,this.src=d,this.type=_,this.capture=!!T,this.ha=D,this.key=++Yt,this.da=this.fa=!1}function nt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ei(c,d,_){for(const T in c)d.call(_,c[T],T,c)}function it(c,d){for(const _ in c)d.call(void 0,c[_],_,c)}function Pt(c){const d={};for(const _ in c)d[_]=c[_];return d}const Xt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function te(c,d){let _,T;for(let D=1;D<arguments.length;D++){T=arguments[D];for(_ in T)c[_]=T[_];for(let O=0;O<Xt.length;O++)_=Xt[O],Object.prototype.hasOwnProperty.call(T,_)&&(c[_]=T[_])}}function kt(c){this.src=c,this.g={},this.h=0}kt.prototype.add=function(c,d,_,T,D){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const $=ut(c,d,T,D);return $>-1?(d=c[$],_||(d.fa=!1)):(d=new Ti(d,this.src,O,!!T,D),d.fa=_,c.push(d)),d};function yt(c,d){const _=d.type;if(_ in c.g){var T=c.g[_],D=Array.prototype.indexOf.call(T,d,void 0),O;(O=D>=0)&&Array.prototype.splice.call(T,D,1),O&&(nt(d),c.g[_].length==0&&(delete c.g[_],c.h--))}}function ut(c,d,_,T){for(let D=0;D<c.length;++D){const O=c[D];if(!O.da&&O.listener==d&&O.capture==!!_&&O.ha==T)return D}return-1}var we="closure_lm_"+(Math.random()*1e6|0),Ce={};function ss(c,d,_,T,D){if(Array.isArray(d)){for(let O=0;O<d.length;O++)ss(c,d[O],_,T,D);return null}return _=Ai(_),c&&c[$t]?c.J(d,_,f(T)?!!T.capture:!1,D):os(c,d,_,!1,T,D)}function os(c,d,_,T,D,O){if(!d)throw Error("Invalid event type");const $=f(D)?!!D.capture:!!D;let st=ir(c);if(st||(c[we]=st=new kt(c)),_=st.add(d,_,T,$,O),_.proxy)return _;if(T=as(),_.proxy=T,T.src=c,T.listener=_,c.addEventListener)x||(D=$),D===void 0&&(D=!1),c.addEventListener(d.toString(),T,D);else if(c.attachEvent)c.attachEvent(To(d.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function as(){function c(_){return d.call(c.src,c.listener,_)}const d=Eo;return c}function Un(c,d,_,T,D){if(Array.isArray(d))for(var O=0;O<d.length;O++)Un(c,d[O],_,T,D);else T=f(T)?!!T.capture:!!T,_=Ai(_),c&&c[$t]?(c=c.i,O=String(d).toString(),O in c.g&&(d=c.g[O],_=ut(d,_,T,D),_>-1&&(nt(d[_]),Array.prototype.splice.call(d,_,1),d.length==0&&(delete c.g[O],c.h--)))):c&&(c=ir(c))&&(d=c.g[d.toString()],c=-1,d&&(c=ut(d,_,T,D)),(_=c>-1?d[c]:null)&&Ii(_))}function Ii(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[$t])yt(d.i,c);else{var _=c.type,T=c.proxy;d.removeEventListener?d.removeEventListener(_,T,c.capture):d.detachEvent?d.detachEvent(To(_),T):d.addListener&&d.removeListener&&d.removeListener(T),(_=ir(d))?(yt(_,c),_.h==0&&(_.src=null,d[we]=null)):nt(c)}}}function To(c){return c in Ce?Ce[c]:Ce[c]="on"+c}function Eo(c,d){if(c.da)c=!0;else{d=new Rt(d,this);const _=c.listener,T=c.ha||c.src;c.fa&&Ii(c),c=_.call(T,d)}return c}function ir(c){return c=c[we],c instanceof kt?c:null}var bi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ai(c){return typeof c=="function"?c:(c[bi]||(c[bi]=function(d){return c.handleEvent(d)}),c[bi])}function Wt(){k.call(this),this.i=new kt(this),this.M=this,this.G=null}w(Wt,k),Wt.prototype[$t]=!0,Wt.prototype.removeEventListener=function(c,d,_,T){Un(this,c,d,_,T)};function Gt(c,d){var _,T=c.G;if(T)for(_=[];T;T=T.G)_.push(T);if(c=c.M,T=d.type||d,typeof d=="string")d=new C(d,c);else if(d instanceof C)d.target=d.target||c;else{var D=d;d=new C(T,c),te(d,D)}D=!0;let O,$;if(_)for($=_.length-1;$>=0;$--)O=d.g=_[$],D=Bn(O,T,!0,d)&&D;if(O=d.g=c,D=Bn(O,T,!0,d)&&D,D=Bn(O,T,!1,d)&&D,_)for($=0;$<_.length;$++)O=d.g=_[$],D=Bn(O,T,!1,d)&&D}Wt.prototype.N=function(){if(Wt.Z.N.call(this),this.i){var c=this.i;for(const d in c.g){const _=c.g[d];for(let T=0;T<_.length;T++)nt(_[T]);delete c.g[d],c.h--}}this.G=null},Wt.prototype.J=function(c,d,_,T){return this.i.add(String(c),d,!1,_,T)},Wt.prototype.K=function(c,d,_,T){return this.i.add(String(c),d,!0,_,T)};function Bn(c,d,_,T){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();let D=!0;for(let O=0;O<d.length;++O){const $=d[O];if($&&!$.da&&$.capture==_){const st=$.listener,wt=$.ha||$.src;$.fa&&yt(c.i,$),D=st.call(wt,T)!==!1&&D}}return D&&!T.defaultPrevented}function Io(c,d){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:u.setTimeout(c,d||0)}function cs(c){c.g=Io(()=>{c.g=null,c.i&&(c.i=!1,cs(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class dc extends k{constructor(d,_){super(),this.m=d,this.l=_,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:cs(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(c){k.call(this),this.h=c,this.g={}}w(Pi,k);var rr=[];function ls(c){Ei(c.g,function(d,_){this.g.hasOwnProperty(_)&&Ii(d)},c),c.g={}}Pi.prototype.N=function(){Pi.Z.N.call(this),ls(this)},Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sr=u.JSON.stringify,fc=u.JSON.parse,bo=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function us(){}function Ao(){}var zn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Si(){C.call(this,"d")}w(Si,C);function or(){C.call(this,"c")}w(or,C);var dn={},qn=null;function ar(){return qn=qn||new Wt}dn.Ia="serverreachability";function Po(c){C.call(this,dn.Ia,c)}w(Po,C);function $n(c){const d=ar();Gt(d,new Po(d))}dn.STAT_EVENT="statevent";function hs(c,d){C.call(this,dn.STAT_EVENT,c),this.stat=d}w(hs,C);function Zt(c){const d=ar();Gt(d,new hs(d,c))}dn.Ja="timingevent";function So(c,d){C.call(this,dn.Ja,c),this.size=d}w(So,C);function Ci(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},d)}function Ri(){this.g=!0}Ri.prototype.ua=function(){this.g=!1};function pc(c,d,_,T,D,O){c.info(function(){if(c.g)if(O){var $="",st=O.split("&");for(let Et=0;Et<st.length;Et++){var wt=st[Et].split("=");if(wt.length>1){const Mt=wt[0];wt=wt[1];const De=Mt.split("_");$=De.length>=2&&De[1]=="type"?$+(Mt+"="+wt+"&"):$+(Mt+"=redacted&")}}}else $=null;else $=O;return"XMLHTTP REQ ("+T+") [attempt "+D+"]: "+d+`
`+_+`
`+$})}function mc(c,d,_,T,D,O,$){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+D+"]: "+d+`
`+_+`
`+O+" "+$})}function jn(c,d,_,T){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+_c(c,_)+(T?" "+T:"")})}function ds(c,d){c.info(function(){return"TIMEOUT: "+d})}Ri.prototype.info=function(){};function _c(c,d){if(!c.g)return d;if(!d)return null;try{const O=JSON.parse(d);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var _=O[c];if(!(_.length<2)){var T=_[1];if(Array.isArray(T)&&!(T.length<1)){var D=T[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<T.length;$++)T[$]=""}}}}return sr(O)}catch{return d}}var cr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Co={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ro;function pe(){}w(pe,us),pe.prototype.g=function(){return new XMLHttpRequest},Ro=new pe;function J(c){return encodeURIComponent(String(c))}function ko(c){var d=1;c=c.split(":");const _=[];for(;d>0&&c.length;)_.push(c.shift()),d--;return c.length&&_.push(c.join(":")),_}function Ue(c,d,_,T){this.j=c,this.i=d,this.l=_,this.S=T||1,this.V=new Pi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new fs}function fs(){this.i=null,this.g="",this.h=!1}var ps={},ki={};function lr(c,d,_){c.M=1,c.A=St(ue(d)),c.u=_,c.R=!0,fn(c,null)}function fn(c,d){c.F=Date.now(),ur(c),c.B=ue(c.A);var _=c.B,T=c.S;Array.isArray(T)||(T=[String(T)]),mr(_.i,"t",T),c.C=0,_=c.j.L,c.h=new fs,c.g=Cs(c.j,_?d:null,!c.u),c.P>0&&(c.O=new dc(g(c.Y,c,c.g),c.P)),d=c.V,_=c.g,T=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(rr[0]=D.toString()),D=rr);for(let O=0;O<D.length;O++){const $=ss(_,D[O],T||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=c.J?Pt(c.J):{},c.u?(c.v||(c.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,d)):(c.v="GET",c.g.ea(c.B,c.v,null,d)),$n(),pc(c.i,c.v,c.B,c.l,c.S,c.u)}Ue.prototype.ba=function(c){c=c.target;const d=this.O;d&&Ye(c)==3?d.j():this.Y(c)},Ue.prototype.Y=function(c){try{if(c==this.g)t:{const st=Ye(this.g),wt=this.g.ya(),Et=this.g.ca();if(!(st<3)&&(st!=3||this.g&&(this.h.h||this.g.la()||Ts(this.g)))){this.K||st!=4||wt==7||(wt==8||Et<=0?$n(3):$n(2)),hr(this);var d=this.g.ca();this.X=d;var _=Lo(this);if(this.o=d==200,mc(this.i,this.v,this.B,this.l,this.S,st,d),this.o){if(this.U&&!this.L){e:{if(this.g){var T,D=this.g;if((T=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(T)){var O=T;break e}}O=null}if(c=O)jn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ms(this,c);else{this.o=!1,this.m=3,Zt(12),Re(this),Li(this);break t}}if(this.R){c=!0;let Mt;for(;!this.K&&this.C<_.length;)if(Mt=gc(this,_),Mt==ki){st==4&&(this.m=4,Zt(14),c=!1),jn(this.i,this.l,null,"[Incomplete Response]");break}else if(Mt==ps){this.m=4,Zt(15),jn(this.i,this.l,_,"[Invalid Chunk]"),c=!1;break}else jn(this.i,this.l,Mt,null),ms(this,Mt);if(xo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||_.length!=0||this.h.h||(this.m=1,Zt(16),c=!1),this.o=this.o&&c,!c)jn(this.i,this.l,_,"[Invalid Chunked Response]"),Re(this),Li(this);else if(_.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Ps($),$.P=!0,Zt(11))}}else jn(this.i,this.l,_,null),ms(this,_);st==4&&Re(this),this.o&&!this.K&&(st==4?Ee(this.j,this):(this.o=!1,ur(this)))}else Es(this.g),d==400&&_.indexOf("Unknown SID")>0?(this.m=3,Zt(12)):(this.m=0,Zt(13)),Re(this),Li(this)}}}catch{}finally{}};function Lo(c){if(!xo(c))return c.g.la();const d=Ts(c.g);if(d==="")return"";let _="";const T=d.length,D=Ye(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Re(c),Li(c),"";c.h.i=new u.TextDecoder}for(let O=0;O<T;O++)c.h.h=!0,_+=c.h.i.decode(d[O],{stream:!(D&&O==T-1)});return d.length=0,c.h.g+=_,c.C=0,c.h.g}function xo(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function gc(c,d){var _=c.C,T=d.indexOf(`
`,_);return T==-1?ki:(_=Number(d.substring(_,T)),isNaN(_)?ps:(T+=1,T+_>d.length?ki:(d=d.slice(T,T+_),c.C=T+_,d)))}Ue.prototype.cancel=function(){this.K=!0,Re(this)};function ur(c){c.T=Date.now()+c.H,Do(c,c.H)}function Do(c,d){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Ci(g(c.aa,c),d)}function hr(c){c.D&&(u.clearTimeout(c.D),c.D=null)}Ue.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ds(this.i,this.B),this.M!=2&&($n(),Zt(17)),Re(this),this.m=2,Li(this)):Do(this,this.T-c)};function Li(c){c.j.I==0||c.K||Ee(c.j,c)}function Re(c){hr(c);var d=c.O;d&&typeof d.dispose=="function"&&d.dispose(),c.O=null,ls(c.V),c.g&&(d=c.g,c.g=null,d.abort(),d.dispose())}function ms(c,d){try{var _=c.j;if(_.I!=0&&(_.g==c||xi(_.h,c))){if(!c.L&&xi(_.h,c)&&_.I==3){try{var T=_.Ba.g.parse(d)}catch{T=null}if(Array.isArray(T)&&T.length==3){var D=T;if(D[0]==0){t:if(!_.v){if(_.g)if(_.g.F+3e3<c.F)wr(_),yr(_);else break t;As(_),Zt(18)}}else _.xa=D[1],0<_.xa-_.K&&D[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Ci(g(_.Va,_),6e3));Oo(_.h)<=1&&_.ta&&(_.ta=void 0)}else tn(_,11)}else if((c.L||_.g==c)&&wr(_),!b(d))for(D=_.Ba.g.parse(d),d=0;d<D.length;d++){let Et=D[d];const Mt=Et[0];if(!(Mt<=_.K))if(_.K=Mt,Et=Et[1],_.I==2)if(Et[0]=="c"){_.M=Et[1],_.ba=Et[2];const De=Et[3];De!=null&&(_.ka=De,_.j.info("VER="+_.ka));const qe=Et[4];qe!=null&&(_.za=qe,_.j.info("SVER="+_.za));const Ne=Et[5];Ne!=null&&typeof Ne=="number"&&Ne>0&&(T=1.5*Ne,_.O=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const en=c.g;if(en){const Ir=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ir){var O=T.h;O.g||Ir.indexOf("spdy")==-1&&Ir.indexOf("quic")==-1&&Ir.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(pn(O,O.h),O.h=null))}if(T.G){const br=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;br&&(T.wa=br,Q(T.J,T.G,br))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-c.F,_.j.info("Handshake RTT: "+_.T+"ms")),T=_;var $=c;if(T.na=Ss(T,T.L?T.ba:null,T.W),$.L){_s(T.h,$);var st=$,wt=T.O;wt&&(st.H=wt),st.D&&(hr(st),ur(st)),T.g=$}else bs(T);_.i.length>0&&Xe(_)}else Et[0]!="stop"&&Et[0]!="close"||tn(_,7);else _.I==3&&(Et[0]=="stop"||Et[0]=="close"?Et[0]=="stop"?tn(_,7):ht(_):Et[0]!="noop"&&_.l&&_.l.qa(Et),_.A=0)}}$n(4)}catch{}}var yc=class{constructor(c,d){this.g=c,this.map=d}};function No(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Oo(c){return c.h?1:c.g?c.g.size:0}function xi(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function pn(c,d){c.g?c.g.add(d):c.h=d}function _s(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}No.prototype.cancel=function(){if(this.i=gs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function gs(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const _ of c.g.values())d=d.concat(_.G);return d}return S(c.i)}var Hn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _t(c,d){if(c){c=c.split("&");for(let _=0;_<c.length;_++){const T=c[_].indexOf("=");let D,O=null;T>=0?(D=c[_].substring(0,T),O=c[_].substring(T+1)):D=c[_],d(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function vt(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;c instanceof vt?(this.l=c.l,ke(this,c.j),this.o=c.o,this.g=c.g,Le(this,c.u),this.h=c.h,Di(this,Ni(c.i)),this.m=c.m):c&&(d=String(c).match(Hn))?(this.l=!1,ke(this,d[1]||"",!0),this.o=mn(d[2]||""),this.g=mn(d[3]||"",!0),Le(this,d[4]),this.h=mn(d[5]||"",!0),Di(this,d[6]||"",!0),this.m=mn(d[7]||"")):(this.l=!1,this.i=new Be(null,this.l))}vt.prototype.toString=function(){const c=[];var d=this.j;d&&c.push(Ke(d,Vo,!0),":");var _=this.g;return(_||d=="file")&&(c.push("//"),(d=this.o)&&c.push(Ke(d,Vo,!0),"@"),c.push(J(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&c.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ke(_,_.charAt(0)=="/"?_n:dr,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ke(_,gn)),c.join("")},vt.prototype.resolve=function(c){const d=ue(this);let _=!!c.j;_?ke(d,c.j):_=!!c.o,_?d.o=c.o:_=!!c.g,_?d.g=c.g:_=c.u!=null;var T=c.h;if(_)Le(d,c.u);else if(_=!!c.h){if(T.charAt(0)!="/")if(this.g&&!this.h)T="/"+T;else{var D=d.h.lastIndexOf("/");D!=-1&&(T=d.h.slice(0,D+1)+T)}if(D=T,D==".."||D==".")T="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){T=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let $=0;$<D.length;){const st=D[$++];st=="."?T&&$==D.length&&O.push(""):st==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),T&&$==D.length&&O.push("")):(O.push(st),T=!0)}T=O.join("/")}else T=D}return _?d.h=T:_=c.i.toString()!=="",_?Di(d,Ni(c.i)):_=!!c.m,_&&(d.m=c.m),d};function ue(c){return new vt(c)}function ke(c,d,_){c.j=_?mn(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function Le(c,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);c.u=d}else c.u=null}function Di(c,d,_){d instanceof Be?(c.i=d,ys(c.i,c.l)):(_||(d=Ke(d,Dt)),c.i=new Be(d,c.l))}function Q(c,d,_){c.i.set(d,_)}function St(c){return Q(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function mn(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ke(c,d,_){return typeof c=="string"?(c=encodeURI(c).replace(d,me),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function me(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Vo=/[#\/\?@]/g,dr=/[#\?:]/g,_n=/[#\?]/g,Dt=/[#\?@]/g,gn=/#/g;function Be(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Te(c){c.g||(c.g=new Map,c.h=0,c.i&&_t(c.i,function(d,_){c.add(decodeURIComponent(d.replace(/\+/g," ")),_)}))}i=Be.prototype,i.add=function(c,d){Te(this),this.i=null,c=Qe(this,c);let _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(d),this.h+=1,this};function fr(c,d){Te(c),d=Qe(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Wn(c,d){return Te(c),d=Qe(c,d),c.g.has(d)}i.forEach=function(c,d){Te(this),this.g.forEach(function(_,T){_.forEach(function(D){c.call(d,D,T,this)},this)},this)};function pr(c,d){Te(c);let _=[];if(typeof d=="string")Wn(c,d)&&(_=_.concat(c.g.get(Qe(c,d))));else for(c=Array.from(c.g.values()),d=0;d<c.length;d++)_=_.concat(c[d]);return _}i.set=function(c,d){return Te(this),this.i=null,c=Qe(this,c),Wn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},i.get=function(c,d){return c?(c=pr(this,c),c.length>0?String(c[0]):d):d};function mr(c,d,_){fr(c,d),_.length>0&&(c.i=null,c.g.set(Qe(c,d),S(_)),c.h+=_.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(let T=0;T<d.length;T++){var _=d[T];const D=J(_);_=pr(this,_);for(let O=0;O<_.length;O++){let $=D;_[O]!==""&&($+="="+J(_[O])),c.push($)}}return this.i=c.join("&")};function Ni(c){const d=new Be;return d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),d}function Qe(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function ys(c,d){d&&!c.j&&(Te(c),c.i=null,c.g.forEach(function(_,T){const D=T.toLowerCase();T!=D&&(fr(this,T),mr(this,D,_))},c)),c.j=d}function _r(c,d){const _=new Ri;if(u.Image){const T=new Image;T.onload=y(xe,_,"TestLoadImage: loaded",!0,d,T),T.onerror=y(xe,_,"TestLoadImage: error",!1,d,T),T.onabort=y(xe,_,"TestLoadImage: abort",!1,d,T),T.ontimeout=y(xe,_,"TestLoadImage: timeout",!1,d,T),u.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else d(!1)}function Fo(c,d){const _=new Ri,T=new AbortController,D=setTimeout(()=>{T.abort(),xe(_,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:T.signal}).then(O=>{clearTimeout(D),O.ok?xe(_,"TestPingServer: ok",!0,d):xe(_,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),xe(_,"TestPingServer: error",!1,d)})}function xe(c,d,_,T,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),T(_)}catch{}}function vc(){this.g=new bo}function rt(c){this.i=c.Sb||null,this.h=c.ab||!1}w(rt,us),rt.prototype.g=function(){return new he(this.i,this.h)};function he(c,d){Wt.call(this),this.H=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(he,Wt),i=he.prototype,i.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=d,this.readyState=1,yn(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(d.body=c),(this.H||u).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gn(this)),this.readyState=0},i.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,yn(this)),this.g&&(this.readyState=3,yn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bt(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function bt(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}i.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Gn(this):yn(this),this.readyState==3&&bt(this)}},i.Oa=function(c){this.g&&(this.response=this.responseText=c,Gn(this))},i.Na=function(c){this.g&&(this.response=c,Gn(this))},i.ga=function(){this.g&&Gn(this)};function Gn(c){c.readyState=4,c.l=null,c.j=null,c.B=null,yn(c)}i.setRequestHeader=function(c,d){this.A.append(c,d)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var _=d.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=d.next();return c.join(`\r
`)};function yn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(he.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function gr(c){let d="";return Ei(c,function(_,T){d+=T,d+=":",d+=_,d+=`\r
`}),d}function Mi(c,d,_){t:{for(T in _){var T=!1;break t}T=!0}T||(_=gr(_),typeof c=="string"?_!=null&&J(_):Q(c,d,_))}function Tt(c){Wt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(Tt,Wt);var vs=/^https?$/i,Oi=["POST","PUT"];i=Tt.prototype,i.Fa=function(c){this.H=c},i.ea=function(c,d,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ro.g(),this.g.onreadystatechange=E(g(this.Ca,this));try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(O){Vt(this,O);return}if(c=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var D in T)_.set(D,T[D]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const O of T.keys())_.set(O,T.get(O));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find(O=>O.toLowerCase()=="content-type"),D=u.FormData&&c instanceof u.FormData,!(Array.prototype.indexOf.call(Oi,d,void 0)>=0)||T||D||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of _)this.g.setRequestHeader(O,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){Vt(this,O)}};function Vt(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.o=5,Je(c),Vi(c)}function Je(c){c.A||(c.A=!0,Gt(c,"complete"),Gt(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Gt(this,"complete"),Gt(this,"abort"),Vi(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vi(this,!0)),Tt.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?ws(this):this.Xa())},i.Xa=function(){ws(this)};function ws(c){if(c.h&&typeof a<"u"){if(c.v&&Ye(c)==4)setTimeout(c.Ca.bind(c),0);else if(Gt(c,"readystatechange"),Ye(c)==4){c.h=!1;try{const O=c.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break t;default:d=!1}var _;if(!(_=d)){var T;if(T=O===0){let $=String(c.D).match(Hn)[1]||null;!$&&u.self&&u.self.location&&($=u.self.location.protocol.slice(0,-1)),T=!vs.test($?$.toLowerCase():"")}_=T}if(_)Gt(c,"complete"),Gt(c,"success");else{c.o=6;try{var D=Ye(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Je(c)}}finally{Vi(c)}}}}function Vi(c,d){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const _=c.g;c.g=null,d||Gt(c,"ready");try{_.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Ye(c){return c.g?c.g.readyState:0}i.ca=function(){try{return Ye(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),fc(d)}};function Ts(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Es(c){const d={};c=(c.g&&Ye(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(b(c[T]))continue;var _=ko(c[T]);const D=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const O=d[D]||[];d[D]=O,O.push(_)}it(d,function(T){return T.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(c,d,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||d}function Is(c){this.za=0,this.i=[],this.j=new Ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Fi("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Fi("baseRetryDelayMs",5e3,c),this.Za=Fi("retryDelaySeedMs",1e4,c),this.Ta=Fi("forwardChannelMaxRetries",2,c),this.va=Fi("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new No(c&&c.concurrentRequestLimit),this.Ba=new vc,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Is.prototype,i.ka=8,i.I=1,i.connect=function(c,d,_,T){Zt(0),this.W=c,this.H=d||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.J=Ss(this,null,this.W),Xe(this)};function ht(c){if(_e(c),c.I==3){var d=c.V++,_=ue(c.J);if(Q(_,"SID",c.M),Q(_,"RID",d),Q(_,"TYPE","terminate"),vn(c,_),d=new Ue(c,c.j,d),d.M=2,d.A=St(ue(_)),_=!1,u.navigator&&u.navigator.sendBeacon)try{_=u.navigator.sendBeacon(d.A.toString(),"")}catch{}!_&&u.Image&&(new Image().src=d.A,_=!0),_||(d.g=Cs(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ur(d)}ze(c)}function yr(c){c.g&&(Ps(c),c.g.cancel(),c.g=null)}function _e(c){yr(c),c.v&&(u.clearTimeout(c.v),c.v=null),wr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&u.clearTimeout(c.m),c.m=null)}function Xe(c){if(!Mo(c.h)&&!c.m){c.m=!0;var d=c.Ea;lt||I(),At||(lt(),At=!0),R.add(d,c),c.D=0}}function Uo(c,d){return Oo(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=d.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Ci(g(c.Ea,c,d),qo(c,c.D)),c.D++,!0)}i.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Ue(this,this.j,c);let O=this.o;if(this.U&&(O?(O=Pt(O),te(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)t:{for(var d=0,_=0;_<this.i.length;_++){e:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break e}T=void 0}if(T===void 0)break;if(d+=T,d>4096){d=_;break t}if(d===4096||_===this.i.length-1){d=_+1;break t}}d=1e3}else d=1e3;d=zo(this,D,d),_=ue(this.J),Q(_,"RID",c),Q(_,"CVER",22),this.G&&Q(_,"X-HTTP-Session-Id",this.G),vn(this,_),O&&(this.R?d="headers="+J(gr(O))+"&"+d:this.u&&Mi(_,this.u,O)),pn(this.h,D),this.Ra&&Q(_,"TYPE","init"),this.S?(Q(_,"$req",d),Q(_,"SID","null"),D.U=!0,lr(D,_,null)):lr(D,_,d),this.I=2}}else this.I==3&&(c?Bo(this,c):this.i.length==0||Mo(this.h)||Bo(this))};function Bo(c,d){var _;d?_=d.l:_=c.V++;const T=ue(c.J);Q(T,"SID",c.M),Q(T,"RID",_),Q(T,"AID",c.K),vn(c,T),c.u&&c.o&&Mi(T,c.u,c.o),_=new Ue(c,c.j,_,c.D+1),c.u===null&&(_.J=c.o),d&&(c.i=d.G.concat(c.i)),d=zo(c,_,1e3),_.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),pn(c.h,_),lr(_,T,d)}function vn(c,d){c.H&&Ei(c.H,function(_,T){Q(d,T,_)}),c.l&&Ei({},function(_,T){Q(d,T,_)})}function zo(c,d,_){_=Math.min(c.i.length,_);const T=c.l?g(c.l.Ka,c.l,c):null;t:{var D=c.i;let st=-1;for(;;){const wt=["count="+_];st==-1?_>0?(st=D[0].g,wt.push("ofs="+st)):st=0:wt.push("ofs="+st);let Et=!0;for(let Mt=0;Mt<_;Mt++){var O=D[Mt].g;const De=D[Mt].map;if(O-=st,O<0)st=Math.max(0,D[Mt].g-100),Et=!1;else try{O="req"+O+"_"||"";try{var $=De instanceof Map?De:Object.entries(De);for(const[qe,Ne]of $){let en=Ne;f(Ne)&&(en=sr(Ne)),wt.push(O+qe+"="+encodeURIComponent(en))}}catch(qe){throw wt.push(O+"type="+encodeURIComponent("_badmap")),qe}}catch{T&&T(De)}}if(Et){$=wt.join("&");break t}}$=void 0}return c=c.i.splice(0,_),d.G=c,$}function bs(c){if(!c.g&&!c.v){c.Y=1;var d=c.Da;lt||I(),At||(lt(),At=!0),R.add(d,c),c.A=0}}function As(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Ci(g(c.Da,c),qo(c,c.A)),c.A++,!0)}i.Da=function(){if(this.v=null,vr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Ci(g(this.Wa,this),c)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Zt(10),yr(this),vr(this))};function Ps(c){c.B!=null&&(u.clearTimeout(c.B),c.B=null)}function vr(c){c.g=new Ue(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var d=ue(c.na);Q(d,"RID","rpc"),Q(d,"SID",c.M),Q(d,"AID",c.K),Q(d,"CI",c.F?"0":"1"),!c.F&&c.ia&&Q(d,"TO",c.ia),Q(d,"TYPE","xmlhttp"),vn(c,d),c.u&&c.o&&Mi(d,c.u,c.o),c.O&&(c.g.H=c.O);var _=c.g;c=c.ba,_.M=1,_.A=St(ue(d)),_.u=null,_.R=!0,fn(_,c)}i.Va=function(){this.C!=null&&(this.C=null,yr(this),As(this),Zt(19))};function wr(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function Ee(c,d){var _=null;if(c.g==d){wr(c),Ps(c),c.g=null;var T=2}else if(xi(c.h,d))_=d.G,_s(c.h,d),T=1;else return;if(c.I!=0){if(d.o)if(T==1){_=d.u?d.u.length:0,d=Date.now()-d.F;var D=c.D;T=ar(),Gt(T,new So(T,_)),Xe(c)}else bs(c);else if(D=d.m,D==3||D==0&&d.X>0||!(T==1&&Uo(c,d)||T==2&&As(c)))switch(_&&_.length>0&&(d=c.h,d.i=d.i.concat(_)),D){case 1:tn(c,5);break;case 4:tn(c,10);break;case 3:tn(c,6);break;default:tn(c,2)}}}function qo(c,d){let _=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(_*=2),_*d}function tn(c,d){if(c.j.info("Error code "+d),d==2){var _=g(c.bb,c),T=c.Ua;const D=!T;T=new vt(T||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ke(T,"https"),St(T),D?_r(T.toString(),_):Fo(T.toString(),_)}else Zt(2);c.I=0,c.l&&c.l.pa(d),ze(c),_e(c)}i.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Zt(2)):(this.j.info("Failed to ping google.com"),Zt(1))};function ze(c){if(c.I=0,c.ja=[],c.l){const d=gs(c.h);(d.length!=0||c.i.length!=0)&&(M(c.ja,d),M(c.ja,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.oa()}}function Ss(c,d,_){var T=_ instanceof vt?ue(_):new vt(_);if(T.g!="")d&&(T.g=d+"."+T.g),Le(T,T.u);else{var D=u.location;T=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;const O=new vt(null);T&&ke(O,T),d&&(O.g=d),D&&Le(O,D),_&&(O.h=_),T=O}return _=c.G,d=c.wa,_&&d&&Q(T,_,d),Q(T,"VER",c.ka),vn(c,T),T}function Cs(c,d,_){if(d&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Aa&&!c.ma?new Tt(new rt({ab:_})):new Tt(c.ma),d.Fa(c.L),d}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tr(){}i=Tr.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function Er(){}Er.prototype.g=function(c,d){return new se(c,d)};function se(c,d){Wt.call(this),this.g=new Is(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(c?c["X-WebChannel-Client-Profile"]=d.sa:c={"X-WebChannel-Client-Profile":d.sa}),this.g.U=c,(c=d&&d.Qb)&&!b(c)&&(this.g.u=c),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Zn(this)}w(se,Wt),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){ht(this.g)},se.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.v&&(_={},_.__data__=sr(c),c=_);d.i.push(new yc(d.Ya++,c)),d.I==3&&Xe(d)},se.prototype.N=function(){this.g.l=null,delete this.j,ht(this.g),delete this.g,se.Z.N.call(this)};function Rs(c){Si.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){t:{for(const _ in d){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}w(Rs,Si);function $o(){or.call(this),this.status=1}w($o,or);function Zn(c){this.g=c}w(Zn,Tr),Zn.prototype.ra=function(){Gt(this.g,"a")},Zn.prototype.qa=function(c){Gt(this.g,new Rs(c))},Zn.prototype.pa=function(c){Gt(this.g,new $o)},Zn.prototype.oa=function(){Gt(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,jd=function(){return new Er},$d=function(){return ar()},qd=dn,Wc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},cr.NO_ERROR=0,cr.TIMEOUT=8,cr.HTTP_ERROR=6,ua=cr,Co.COMPLETE="complete",zd=Co,Ao.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",Wt.prototype.listen=Wt.prototype.J,Fs=Ao,Tt.prototype.listenOnce=Tt.prototype.K,Tt.prototype.getLastError=Tt.prototype.Ha,Tt.prototype.getLastErrorCode=Tt.prototype.ya,Tt.prototype.getStatus=Tt.prototype.ca,Tt.prototype.getResponseJson=Tt.prototype.La,Tt.prototype.getResponseText=Tt.prototype.la,Tt.prototype.send=Tt.prototype.ea,Tt.prototype.setWithCredentials=Tt.prototype.Fa,Bd=Tt}).apply(typeof ea<"u"?ea:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Yr="12.13.0";function Sg(i){Yr=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Gi=new gl("@firebase/firestore");function Lr(){return Gi.logLevel}function Z(i,...t){if(Gi.logLevel<=mt.DEBUG){const e=t.map(wl);Gi.debug(`Firestore (${Yr}): ${i}`,...e)}}function Mn(i,...t){if(Gi.logLevel<=mt.ERROR){const e=t.map(wl);Gi.error(`Firestore (${Yr}): ${i}`,...e)}}function Zi(i,...t){if(Gi.logLevel<=mt.WARN){const e=t.map(wl);Gi.warn(`Firestore (${Yr}): ${i}`,...e)}}function wl(i){if(typeof i=="string")return i;try{return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(i,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Hd(i,r,e)}function Hd(i,t,e){let r=`FIRESTORE (${Yr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Mn(r),new Error(r)}function It(i,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,i||Hd(t,s,r)}function at(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Fn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ae.UNAUTHENTICATED))}shutdown(){}}class Rg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class kg{constructor(t){this.t=t,this.currentUser=ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){It(this.o===void 0,42304);let r=this.i;const s=p=>this.i!==r?(r=this.i,e(p)):Promise.resolve();let a=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Rn,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const p=a;t.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},f=p=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Rn)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(It(typeof r.accessToken=="string",31837,{l:r}),new Wd(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return It(t===null||typeof t=="string",2055,{h:t}),new ae(t)}}class Lg{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ae.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class xg{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Lg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Yu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dg{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,be(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){It(this.o===void 0,3512);const r=a=>{a.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,Z("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const s=a=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Yu(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(It(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Yu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<i;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ng(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<e&&(r+=t.charAt(s[a]%62))}return r}}function ft(i,t){return i<t?-1:i>t?1:0}function Gc(i,t){const e=Math.min(i.length,t.length);for(let r=0;r<e;r++){const s=i.charAt(r),a=t.charAt(r);if(s!==a)return kc(s)===kc(a)?ft(s,a):kc(s)?1:-1}return ft(i.length,t.length)}const Mg=55296,Og=57343;function kc(i){const t=i.charCodeAt(0);return t>=Mg&&t<=Og}function Hr(i,t,e){return i.length===t.length&&i.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="__name__";class rn{constructor(t,e,r){e===void 0?e=0:e>t.length&&et(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&et(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return rn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof rn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const a=rn.compareSegments(t.get(s),e.get(s));if(a!==0)return a}return ft(t.length,e.length)}static compareSegments(t,e){const r=rn.isNumericId(t),s=rn.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(t).compare(rn.extractNumericId(e)):Gc(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ri.fromString(t.substring(4,t.length-2))}}class Ct extends rn{construct(t,e,r){return new Ct(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new G(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Ct(e)}static emptyPath(){return new Ct([])}}const Vg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ie extends rn{construct(t,e,r){return new ie(t,e,r)}static isValidIdentifier(t){return Vg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ie.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xu}static keyField(){return new ie([Xu])}static fromServerFormat(t){const e=[];let r="",s=0;const a=()=>{if(r.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const f=t[s];if(f==="\\"){if(s+1===t.length)throw new G(U.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new G(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=p,s+=2}else f==="`"?(u=!u,s++):f!=="."||u?(r+=f,s++):(a(),s++)}if(a(),u)throw new G(U.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ie(e)}static emptyPath(){return new ie([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.path=t}static fromPath(t){return new Y(Ct.fromString(t))}static fromName(t){return new Y(Ct.fromString(t).popFirst(5))}static empty(){return new Y(Ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Y(new Ct(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(i,t,e){if(!e)throw new G(U.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function Fg(i,t,e,r){if(t===!0&&r===!0)throw new G(U.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function th(i){if(!Y.isDocumentKey(i))throw new G(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function eh(i){if(Y.isDocumentKey(i))throw new G(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Zd(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ja(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":et(12329,{type:typeof i})}function Se(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new G(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ja(i);throw new G(U.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */function zt(i,t){const e={typeString:i};return t&&(e.value=t),e}function co(i,t){if(!Zd(i))throw new G(U.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in i)){e=`JSON missing required field: '${r}'`;break}const u=i[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new G(U.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=-62135596800,ih=1e6;class Lt{static now(){return Lt.fromMillis(Date.now())}static fromDate(t){return Lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ih);return new Lt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new G(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<nh)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new G(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ih}_compareTo(t){return this.seconds===t.seconds?ft(this.nanoseconds,t.nanoseconds):ft(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Lt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(co(t,Lt._jsonSchema))return new Lt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-nh;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Lt._jsonSchemaVersion="firestore/timestamp/1.0",Lt._jsonSchema={type:zt("string",Lt._jsonSchemaVersion),seconds:zt("number"),nanoseconds:zt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static fromTimestamp(t){return new ot(t)}static min(){return new ot(new Lt(0,0))}static max(){return new ot(new Lt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ks=-1;function Ug(i,t){const e=i.toTimestamp().seconds,r=i.toTimestamp().nanoseconds+1,s=ot.fromTimestamp(r===1e9?new Lt(e+1,0):new Lt(e,r));return new ai(s,Y.empty(),t)}function Bg(i){return new ai(i.readTime,i.key,Ks)}class ai{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ai(ot.min(),Y.empty(),Ks)}static max(){return new ai(ot.max(),Y.empty(),Ks)}}function zg(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Y.comparator(i.documentKey,t.documentKey),e!==0?e:ft(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $g{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(i){if(i.code!==U.FAILED_PRECONDITION||i.message!==qg)throw i;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&et(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new z((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof z?e:z.resolve(e)}catch(e){return z.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):z.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):z.reject(e)}static resolve(t){return new z((e,r)=>{e(t)})}static reject(t){return new z((e,r)=>{r(t)})}static waitFor(t){return new z((e,r)=>{let s=0,a=0,u=!1;t.forEach(f=>{++s,f.next(()=>{++a,u&&a===s&&e()},p=>r(p))}),u=!0,a===s&&e()})}static or(t){let e=z.resolve(!1);for(const r of t)e=e.next(s=>s?z.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,a)=>{r.push(e.call(this,s,a))}),this.waitFor(r)}static mapArray(t,e){return new z((r,s)=>{const a=t.length,u=new Array(a);let f=0;for(let p=0;p<a;p++){const g=p;e(t[g]).next(y=>{u[g]=y,++f,f===a&&r(u)},y=>s(y))}})}static doWhile(t,e){return new z((r,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):r()};a()})}}function jg(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ts(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ha{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ha.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=-1;function Wa(i){return i==null}function Ia(i){return i===0&&1/i==-1/0}function Hg(i){return typeof i=="number"&&Number.isInteger(i)&&!Ia(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="";function Wg(i){let t="";for(let e=0;e<i.length;e++)t.length>0&&(t=rh(t)),t=Gg(i.get(e),t);return rh(t)}function Gg(i,t){let e=t;const r=i.length;for(let s=0;s<r;s++){const a=i.charAt(s);switch(a){case"\0":e+="";break;case Kd:e+="";break;default:e+=a}}return e}function rh(i){return i+Kd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function mi(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function Qd(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e){this.comparator=t,this.root=e||ne.EMPTY}insert(t,e){return new xt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ne.BLACK,null,null))}remove(t){return new xt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ne.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new na(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new na(this.root,t,this.comparator,!1)}getReverseIterator(){return new na(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new na(this.root,t,this.comparator,!0)}}class na{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ne{constructor(t,e,r,s,a){this.key=t,this.value=e,this.color=r??ne.RED,this.left=s??ne.EMPTY,this.right=a??ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,a){return new ne(t??this.key,e??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const a=r(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,r),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ne.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ne.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw et(43730,{key:this.key,value:this.value});if(this.right.isRed())throw et(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw et(27949);return t+(this.isRed()?0:1)}}ne.EMPTY=null,ne.RED=!0,ne.BLACK=!1;ne.EMPTY=new class{constructor(){this.size=0}get key(){throw et(57766)}get value(){throw et(16141)}get color(){throw et(16727)}get left(){throw et(29726)}get right(){throw et(36894)}copy(t,e,r,s,a){return this}insert(t,e,r){return new ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.comparator=t,this.data=new xt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oh(this.data.getIterator())}getIteratorFrom(t){return new oh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof jt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new jt(this.comparator);return e.data=t,e}}class oh{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.fields=t,t.sort(ie.comparator)}static empty(){return new Pe([])}unionWith(t){let e=new jt(ie.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pe(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Hr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Jd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Jd("Invalid base64 string: "+a):a}}(t);return new re(e)}static fromUint8Array(t){const e=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(t);return new re(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ft(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}re.EMPTY_BYTE_STRING=new re("");const Zg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(i){if(It(!!i,39018),typeof i=="string"){let t=0;const e=Zg.exec(i);if(It(!!e,46558,{timestamp:i}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(i);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ot(i.seconds),nanos:Ot(i.nanos)}}function Ot(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function li(i){return typeof i=="string"?re.fromBase64String(i):re.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="server_timestamp",Xd="__type__",tf="__previous_value__",ef="__local_write_time__";function Il(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[Xd])==null?void 0:r.stringValue)===Yd}function Ga(i){const t=i.mapValue.fields[tf];return Il(t)?Ga(t):t}function Qs(i){const t=ci(i.mapValue.fields[ef].timestampValue);return new Lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t,e,r,s,a,u,f,p,g,y,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y,this.apiKey=w}}const ba="(default)";class Js{constructor(t,e){this.projectId=t,this.database=e||ba}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===ba}isEqual(t){return t instanceof Js&&t.projectId===this.projectId&&t.database===this.database}}function Qg(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new G(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(i.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="__type__",Jg="__max__",ia={mapValue:{}},rf="__vector__",Aa="value";function ui(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Il(i)?4:Xg(i)?9007199254740991:Yg(i)?10:11:et(28295,{value:i})}function un(i,t){if(i===t)return!0;const e=ui(i);if(e!==ui(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Qs(i).isEqual(Qs(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ci(s.timestampValue),f=ci(a.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(s,a){return li(s.bytesValue).isEqual(li(a.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(s,a){return Ot(s.geoPointValue.latitude)===Ot(a.geoPointValue.latitude)&&Ot(s.geoPointValue.longitude)===Ot(a.geoPointValue.longitude)}(i,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return Ot(s.integerValue)===Ot(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=Ot(s.doubleValue),f=Ot(a.doubleValue);return u===f?Ia(u)===Ia(f):isNaN(u)&&isNaN(f)}return!1}(i,t);case 9:return Hr(i.arrayValue.values||[],t.arrayValue.values||[],un);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},f=a.mapValue.fields||{};if(sh(u)!==sh(f))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(f[p]===void 0||!un(u[p],f[p])))return!1;return!0}(i,t);default:return et(52216,{left:i})}}function Ys(i,t){return(i.values||[]).find(e=>un(e,t))!==void 0}function Wr(i,t){if(i===t)return 0;const e=ui(i),r=ui(t);if(e!==r)return ft(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return ft(i.booleanValue,t.booleanValue);case 2:return function(a,u){const f=Ot(a.integerValue||a.doubleValue),p=Ot(u.integerValue||u.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(i,t);case 3:return ah(i.timestampValue,t.timestampValue);case 4:return ah(Qs(i),Qs(t));case 5:return Gc(i.stringValue,t.stringValue);case 6:return function(a,u){const f=li(a),p=li(u);return f.compareTo(p)}(i.bytesValue,t.bytesValue);case 7:return function(a,u){const f=a.split("/"),p=u.split("/");for(let g=0;g<f.length&&g<p.length;g++){const y=ft(f[g],p[g]);if(y!==0)return y}return ft(f.length,p.length)}(i.referenceValue,t.referenceValue);case 8:return function(a,u){const f=ft(Ot(a.latitude),Ot(u.latitude));return f!==0?f:ft(Ot(a.longitude),Ot(u.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return ch(i.arrayValue,t.arrayValue);case 10:return function(a,u){var E,S,M,F;const f=a.fields||{},p=u.fields||{},g=(E=f[Aa])==null?void 0:E.arrayValue,y=(S=p[Aa])==null?void 0:S.arrayValue,w=ft(((M=g==null?void 0:g.values)==null?void 0:M.length)||0,((F=y==null?void 0:y.values)==null?void 0:F.length)||0);return w!==0?w:ch(g,y)}(i.mapValue,t.mapValue);case 11:return function(a,u){if(a===ia.mapValue&&u===ia.mapValue)return 0;if(a===ia.mapValue)return 1;if(u===ia.mapValue)return-1;const f=a.fields||{},p=Object.keys(f),g=u.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let w=0;w<p.length&&w<y.length;++w){const E=Gc(p[w],y[w]);if(E!==0)return E;const S=Wr(f[p[w]],g[y[w]]);if(S!==0)return S}return ft(p.length,y.length)}(i.mapValue,t.mapValue);default:throw et(23264,{he:e})}}function ah(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ft(i,t);const e=ci(i),r=ci(t),s=ft(e.seconds,r.seconds);return s!==0?s:ft(e.nanos,r.nanos)}function ch(i,t){const e=i.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const a=Wr(e[s],r[s]);if(a)return a}return ft(e.length,r.length)}function Gr(i){return Zc(i)}function Zc(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const r=ci(e);return`time(${r.seconds},${r.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return li(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Y.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let r="[",s=!0;for(const a of e.values||[])s?s=!1:r+=",",r+=Zc(a);return r+"]"}(i.arrayValue):"mapValue"in i?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const u of r)a?a=!1:s+=",",s+=`${u}:${Zc(e.fields[u])}`;return s+"}"}(i.mapValue):et(61005,{value:i})}function ha(i){switch(ui(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ga(i);return t?16+ha(t):16;case 5:return 2*i.stringValue.length;case 6:return li(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,a)=>s+ha(a),0)}(i.arrayValue);case 10:case 11:return function(r){let s=0;return mi(r.fields,(a,u)=>{s+=a.length+ha(u)}),s}(i.mapValue);default:throw et(13486,{value:i})}}function lh(i,t){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`}}function Kc(i){return!!i&&"integerValue"in i}function bl(i){return!!i&&"arrayValue"in i}function uh(i){return!!i&&"nullValue"in i}function hh(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function da(i){return!!i&&"mapValue"in i}function Yg(i){var e,r;return((r=(((e=i==null?void 0:i.mapValue)==null?void 0:e.fields)||{})[nf])==null?void 0:r.stringValue)===rf}function qs(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const t={mapValue:{fields:{}}};return mi(i.mapValue.fields,(e,r)=>t.mapValue.fields[e]=qs(r)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=qs(i.arrayValue.values[e]);return t}return{...i}}function Xg(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Jg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!da(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=qs(e)}setAll(t){let e=ie.emptyPath(),r={},s=[];t.forEach((u,f)=>{if(!e.isImmediateParentOf(f)){const p=this.getFieldsMap(e);this.applyChanges(p,r,s),r={},s=[],e=f.popLast()}u?r[f.lastSegment()]=qs(u):s.push(f.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,s)}delete(t){const e=this.field(t.popLast());da(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return un(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){mi(e,(s,a)=>t[s]=a);for(const s of r)delete t[s]}clone(){return new ve(qs(this.value))}}function sf(i){const t=[];return mi(i.fields,(e,r)=>{const s=new ie([e]);if(da(r)){const a=sf(r.mapValue).fields;if(a.length===0)t.push(s);else for(const u of a)t.push(s.child(u))}else t.push(s)}),new Pe(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e,r,s,a,u,f){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=f}static newInvalidDocument(t){return new ce(t,0,ot.min(),ot.min(),ot.min(),ve.empty(),0)}static newFoundDocument(t,e,r,s){return new ce(t,1,e,ot.min(),r,s,0)}static newNoDocument(t,e){return new ce(t,2,e,ot.min(),ot.min(),ve.empty(),0)}static newUnknownDocument(t,e){return new ce(t,3,e,ot.min(),ot.min(),ve.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(ot.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ot.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ce&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pa{constructor(t,e){this.position=t,this.inclusive=e}}function dh(i,t,e){let r=0;for(let s=0;s<i.position.length;s++){const a=t[s],u=i.position[s];if(a.field.isKeyField()?r=Y.comparator(Y.fromName(u.referenceValue),e.key):r=Wr(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function fh(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!un(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Xs{constructor(t,e="asc"){this.field=t,this.dir=e}}function ty(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class of{}class Bt extends of{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ny(t,e,r):e==="array-contains"?new sy(t,r):e==="in"?new oy(t,r):e==="not-in"?new ay(t,r):e==="array-contains-any"?new cy(t,r):new Bt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new iy(t,r):new ry(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Wr(e,this.value)):e!==null&&ui(this.value)===ui(e)&&this.matchesComparison(Wr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return et(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends of{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ze(t,e)}matches(t){return af(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function af(i){return i.op==="and"}function cf(i){return ey(i)&&af(i)}function ey(i){for(const t of i.filters)if(t instanceof Ze)return!1;return!0}function Qc(i){if(i instanceof Bt)return i.field.canonicalString()+i.op.toString()+Gr(i.value);if(cf(i))return i.filters.map(t=>Qc(t)).join(",");{const t=i.filters.map(e=>Qc(e)).join(",");return`${i.op}(${t})`}}function lf(i,t){return i instanceof Bt?function(r,s){return s instanceof Bt&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(i,t):i instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((a,u,f)=>a&&lf(u,s.filters[f]),!0):!1}(i,t):void et(19439)}function uf(i){return i instanceof Bt?function(e){return`${e.field.canonicalString()} ${e.op} ${Gr(e.value)}`}(i):i instanceof Ze?function(e){return e.op.toString()+" {"+e.getFilters().map(uf).join(" ,")+"}"}(i):"Filter"}class ny extends Bt{constructor(t,e,r){super(t,e,r),this.key=Y.fromName(r.referenceValue)}matches(t){const e=Y.comparator(t.key,this.key);return this.matchesComparison(e)}}class iy extends Bt{constructor(t,e){super(t,"in",e),this.keys=hf("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ry extends Bt{constructor(t,e){super(t,"not-in",e),this.keys=hf("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function hf(i,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>Y.fromName(r.referenceValue))}class sy extends Bt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return bl(e)&&Ys(e.arrayValue,this.value)}}class oy extends Bt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ys(this.value.arrayValue,e)}}class ay extends Bt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ys(this.value.arrayValue,e)}}class cy extends Bt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!bl(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
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
 */class ly{constructor(t,e=null,r=[],s=[],a=null,u=null,f=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=f,this.Te=null}}function ph(i,t=null,e=[],r=[],s=null,a=null,u=null){return new ly(i,t,e,r,s,a,u)}function Al(i){const t=at(i);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Qc(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Wa(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Gr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Gr(r)).join(",")),t.Te=e}return t.Te}function Pl(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!ty(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!lf(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!fh(i.startAt,t.startAt)&&fh(i.endAt,t.endAt)}function Jc(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e=null,r=[],s=[],a=null,u="F",f=null,p=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=f,this.endAt=p,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function uy(i,t,e,r,s,a,u,f){return new es(i,t,e,r,s,a,u,f)}function Za(i){return new es(i)}function mh(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function hy(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function df(i){return i.collectionGroup!==null}function $s(i){const t=at(i);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new jt(ie.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(f=f.add(g.field))})}),f})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new Xs(a,r))}),e.has(ie.keyField().canonicalString())||t.Ie.push(new Xs(ie.keyField(),r))}return t.Ie}function on(i){const t=at(i);return t.Ee||(t.Ee=dy(t,$s(i))),t.Ee}function dy(i,t){if(i.limitType==="F")return ph(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Xs(s.field,a)});const e=i.endAt?new Pa(i.endAt.position,i.endAt.inclusive):null,r=i.startAt?new Pa(i.startAt.position,i.startAt.inclusive):null;return ph(i.path,i.collectionGroup,t,i.filters,i.limit,e,r)}}function Yc(i,t){const e=i.filters.concat([t]);return new es(i.path,i.collectionGroup,i.explicitOrderBy.slice(),e,i.limit,i.limitType,i.startAt,i.endAt)}function fy(i,t){const e=i.explicitOrderBy.concat([t]);return new es(i.path,i.collectionGroup,e,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function Xc(i,t,e){return new es(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function Ka(i,t){return Pl(on(i),on(t))&&i.limitType===t.limitType}function ff(i){return`${Al(on(i))}|lt:${i.limitType}`}function xr(i){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>uf(s)).join(", ")}]`),Wa(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Gr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Gr(s)).join(",")),`Target(${r})`}(on(i))}; limitType=${i.limitType})`}function Qa(i,t){return t.isFoundDocument()&&function(r,s){const a=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Y.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(i,t)&&function(r,s){for(const a of $s(r))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(i,t)&&function(r,s){for(const a of r.filters)if(!a.matches(s))return!1;return!0}(i,t)&&function(r,s){return!(r.startAt&&!function(u,f,p){const g=dh(u,f,p);return u.inclusive?g<=0:g<0}(r.startAt,$s(r),s)||r.endAt&&!function(u,f,p){const g=dh(u,f,p);return u.inclusive?g>=0:g>0}(r.endAt,$s(r),s))}(i,t)}function py(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function pf(i){return(t,e)=>{let r=!1;for(const s of $s(i)){const a=my(s,t,e);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function my(i,t,e){const r=i.field.isKeyField()?Y.comparator(t.key,e.key):function(a,u,f){const p=u.data.field(a),g=f.data.field(a);return p!==null&&g!==null?Wr(p,g):et(42886)}(i.field,t,e);switch(i.dir){case"asc":return r;case"desc":return-1*r;default:return et(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){mi(this.inner,(e,r)=>{for(const[s,a]of r)t(s,a)})}isEmpty(){return Qd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new xt(Y.comparator);function On(){return _y}const mf=new xt(Y.comparator);function Us(...i){let t=mf;for(const e of i)t=t.insert(e.key,e);return t}function _f(i){let t=mf;return i.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function zi(){return js()}function gf(){return js()}function js(){return new Yi(i=>i.toString(),(i,t)=>i.isEqual(t))}const gy=new xt(Y.comparator),yy=new jt(Y.comparator);function pt(...i){let t=yy;for(const e of i)t=t.add(e);return t}const vy=new jt(ft);function wy(){return vy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ia(t)?"-0":t}}function yf(i){return{integerValue:""+i}}function Ty(i,t){return Hg(t)?yf(t):Sl(i,t)}/**
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
 */class Ja{constructor(){this._=void 0}}function Ey(i,t,e){return i instanceof to?function(s,a){const u={fields:{[Xd]:{stringValue:Yd},[ef]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Il(a)&&(a=Ga(a)),a&&(u.fields[tf]=a),{mapValue:u}}(e,t):i instanceof Zr?wf(i,t):i instanceof Kr?Tf(i,t):function(s,a){const u=vf(s,a),f=_h(u)+_h(s.Ae);return Kc(u)&&Kc(s.Ae)?yf(f):Sl(s.serializer,f)}(i,t)}function Iy(i,t,e){return i instanceof Zr?wf(i,t):i instanceof Kr?Tf(i,t):e}function vf(i,t){return i instanceof Sa?function(r){return Kc(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class to extends Ja{}class Zr extends Ja{constructor(t){super(),this.elements=t}}function wf(i,t){const e=Ef(t);for(const r of i.elements)e.some(s=>un(s,r))||e.push(r);return{arrayValue:{values:e}}}class Kr extends Ja{constructor(t){super(),this.elements=t}}function Tf(i,t){let e=Ef(t);for(const r of i.elements)e=e.filter(s=>!un(s,r));return{arrayValue:{values:e}}}class Sa extends Ja{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function _h(i){return Ot(i.integerValue||i.doubleValue)}function Ef(i){return bl(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e){this.field=t,this.transform=e}}function by(i,t){return i.field.isEqual(t.field)&&function(r,s){return r instanceof Zr&&s instanceof Zr||r instanceof Kr&&s instanceof Kr?Hr(r.elements,s.elements,un):r instanceof Sa&&s instanceof Sa?un(r.Ae,s.Ae):r instanceof to&&s instanceof to}(i.transform,t.transform)}class Ay{constructor(t,e){this.version=t,this.transformResults=e}}class He{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new He}static exists(t){return new He(void 0,t)}static updateTime(t){return new He(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fa(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class Ya{}function If(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new Rl(i.key,He.none()):new lo(i.key,i.data,He.none());{const e=i.data,r=ve.empty();let s=new jt(ie.comparator);for(let a of t.fields)if(!s.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new _i(i.key,r,new Pe(s.toArray()),He.none())}}function Py(i,t,e){i instanceof lo?function(s,a,u){const f=s.value.clone(),p=yh(s.fieldTransforms,a,u.transformResults);f.setAll(p),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(i,t,e):i instanceof _i?function(s,a,u){if(!fa(s.precondition,a))return void a.convertToUnknownDocument(u.version);const f=yh(s.fieldTransforms,a,u.transformResults),p=a.data;p.setAll(bf(s)),p.setAll(f),a.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(i,t,e):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Hs(i,t,e,r){return i instanceof lo?function(a,u,f,p){if(!fa(a.precondition,u))return f;const g=a.value.clone(),y=vh(a.fieldTransforms,p,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(i,t,e,r):i instanceof _i?function(a,u,f,p){if(!fa(a.precondition,u))return f;const g=vh(a.fieldTransforms,p,u),y=u.data;return y.setAll(bf(a)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),f===null?null:f.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(i,t,e,r):function(a,u,f){return fa(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(i,t,e)}function Sy(i,t){let e=null;for(const r of i.fieldTransforms){const s=t.data.field(r.field),a=vf(r.transform,s||null);a!=null&&(e===null&&(e=ve.empty()),e.set(r.field,a))}return e||null}function gh(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(a,u)=>by(a,u))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class lo extends Ya{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _i extends Ya{constructor(t,e,r,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function bf(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=i.data.field(e);t.set(e,r)}}),t}function yh(i,t,e){const r=new Map;It(i.length===e.length,32656,{Ve:e.length,de:i.length});for(let s=0;s<e.length;s++){const a=i[s],u=a.transform,f=t.data.field(a.field);r.set(a.field,Iy(u,f,e[s]))}return r}function vh(i,t,e){const r=new Map;for(const s of i){const a=s.transform,u=e.data.field(s.field);r.set(s.field,Ey(a,u,t))}return r}class Rl extends Ya{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cy extends Ya{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&Py(a,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Hs(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Hs(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=gf();return this.mutations.forEach(s=>{const a=t.get(s.key),u=a.overlayedDocument;let f=this.applyToLocalView(u,a.mutatedFields);f=e.has(s.key)?null:f;const p=If(u,f);p!==null&&r.set(s.key,p),u.isValidDocument()||u.convertToNoDocument(ot.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),pt())}isEqual(t){return this.batchId===t.batchId&&Hr(this.mutations,t.mutations,(e,r)=>gh(e,r))&&Hr(this.baseMutations,t.baseMutations,(e,r)=>gh(e,r))}}class kl{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){It(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return gy}();const a=t.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new kl(t,e,r,s)}}/**
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
 */class ky{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Ly{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut,gt;function xy(i){switch(i){case U.OK:return et(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return et(15467,{code:i})}}function Af(i){if(i===void 0)return Mn("GRPC error has no .code"),U.UNKNOWN;switch(i){case Ut.OK:return U.OK;case Ut.CANCELLED:return U.CANCELLED;case Ut.UNKNOWN:return U.UNKNOWN;case Ut.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ut.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ut.INTERNAL:return U.INTERNAL;case Ut.UNAVAILABLE:return U.UNAVAILABLE;case Ut.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ut.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ut.NOT_FOUND:return U.NOT_FOUND;case Ut.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ut.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ut.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ut.ABORTED:return U.ABORTED;case Ut.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ut.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ut.DATA_LOSS:return U.DATA_LOSS;default:return et(39323,{code:i})}}(gt=Ut||(Ut={}))[gt.OK=0]="OK",gt[gt.CANCELLED=1]="CANCELLED",gt[gt.UNKNOWN=2]="UNKNOWN",gt[gt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gt[gt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gt[gt.NOT_FOUND=5]="NOT_FOUND",gt[gt.ALREADY_EXISTS=6]="ALREADY_EXISTS",gt[gt.PERMISSION_DENIED=7]="PERMISSION_DENIED",gt[gt.UNAUTHENTICATED=16]="UNAUTHENTICATED",gt[gt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gt[gt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gt[gt.ABORTED=10]="ABORTED",gt[gt.OUT_OF_RANGE=11]="OUT_OF_RANGE",gt[gt.UNIMPLEMENTED=12]="UNIMPLEMENTED",gt[gt.INTERNAL=13]="INTERNAL",gt[gt.UNAVAILABLE=14]="UNAVAILABLE",gt[gt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Dy(){return new TextEncoder}/**
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
 */const Ny=new ri([4294967295,4294967295],0);function wh(i){const t=Dy().encode(i),e=new Ud;return e.update(t),new Uint8Array(e.digest())}function Th(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),a=t.getUint32(12,!0);return[new ri([e,r],0),new ri([s,a],0)]}class Ll{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Bs(`Invalid padding: ${e}`);if(r<0)throw new Bs(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=ri.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(ri.fromNumber(r)));return s.compare(Ny)===1&&(s=new ri([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=wh(t),[r,s]=Th(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);if(!this.we(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,a=new Uint8Array(Math.ceil(t/8)),u=new Ll(a,s,e);return r.forEach(f=>u.insert(f)),u}insert(t){if(this.ge===0)return;const e=wh(t),[r,s]=Th(e);for(let a=0;a<this.hashCount;a++){const u=this.ye(r,s,a);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,r,s,a){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ho.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new uo(ot.min(),s,new xt(ft),On(),pt())}}class ho{constructor(t,e,r,s,a){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ho(r,e,pt(),pt(),pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,r,s){this.be=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Pf{constructor(t,e){this.targetId=t,this.Ce=e}}class Sf{constructor(t,e,r=re.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Eh{constructor(){this.ve=0,this.Fe=Ih(),this.Me=re.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=pt(),e=pt(),r=pt();return this.Fe.forEach((s,a)=>{switch(a){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:et(38017,{changeType:a})}}),new ho(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=Ih()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,It(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class My{constructor(t){this.Ge=t,this.ze=new Map,this.je=On(),this.Je=ra(),this.He=ra(),this.Ze=new xt(ft)}Xe(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:et(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const a=s.target;if(Jc(a))if(r===0){const u=new Y(a.path);this.et(e,u,ce.newNoDocument(u,ot.min()))}else It(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const f=this.ut(t),p=f?this.ct(f,t,u):1;if(p!==0){this.it(e);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:a=0}=e;let u,f;try{u=li(r).toUint8Array()}catch(p){if(p instanceof Jd)return Zi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Ll(u,s,a)}catch(p){return Zi(p instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.ge===0?null:f}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(a=>{const u=this.Ge.ht(),f=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;t.mightContain(f)||(this.et(e,a,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((a,u)=>{const f=this.ot(u);if(f){if(a.current&&Jc(f.target)){const p=new Y(f.target.path);this.It(p).has(u)||this.Et(u,p)||this.et(u,p,ce.newNoDocument(p,t))}a.Be&&(e.set(u,a.ke()),a.Ke())}});let r=pt();this.He.forEach((a,u)=>{let f=!0;u.forEachWhile(p=>{const g=this.ot(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(r=r.add(a))}),this.je.forEach((a,u)=>u.setReadTime(t));const s=new uo(t,e,this.Ze,this.je,r);return this.je=On(),this.Je=ra(),this.He=ra(),this.Ze=new xt(ft),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.He=this.He.insert(e,this.Rt(e).delete(t)),this.He=this.He.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new Eh,this.ze.set(t,e)),e}Rt(t){let e=this.He.get(t);return e||(e=new jt(ft),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new jt(ft),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||Z("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Eh),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ra(){return new xt(Y.comparator)}function Ih(){return new xt(Y.comparator)}const Oy={asc:"ASCENDING",desc:"DESCENDING"},Vy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fy={and:"AND",or:"OR"};class Uy{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function tl(i,t){return i.useProto3Json||Wa(t)?t:{value:t}}function Ca(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cf(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function By(i,t){return Ca(i,t.toTimestamp())}function an(i){return It(!!i,49232),ot.fromTimestamp(function(e){const r=ci(e);return new Lt(r.seconds,r.nanos)}(i))}function xl(i,t){return el(i,t).canonicalString()}function el(i,t){const e=function(s){return new Ct(["projects",s.projectId,"databases",s.database])}(i).child("documents");return t===void 0?e:e.child(t)}function Rf(i){const t=Ct.fromString(i);return It(Nf(t),10190,{key:t.toString()}),t}function nl(i,t){return xl(i.databaseId,t.path)}function Lc(i,t){const e=Rf(t);if(e.get(1)!==i.databaseId.projectId)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new G(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Y(Lf(e))}function kf(i,t){return xl(i.databaseId,t)}function zy(i){const t=Rf(i);return t.length===4?Ct.emptyPath():Lf(t)}function il(i){return new Ct(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Lf(i){return It(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function bh(i,t,e){return{name:nl(i,t),fields:e.value.mapValue.fields}}function qy(i,t){let e;if("targetChange"in t){t.targetChange;const r=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:et(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],a=function(g,y){return g.useProto3Json?(It(y===void 0||typeof y=="string",58123),re.fromBase64String(y||"")):(It(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),re.fromUint8Array(y||new Uint8Array))}(i,t.targetChange.resumeToken),u=t.targetChange.cause,f=u&&function(g){const y=g.code===void 0?U.UNKNOWN:Af(g.code);return new G(y,g.message||"")}(u);e=new Sf(r,s,a,f||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Lc(i,r.document.name),a=an(r.document.updateTime),u=r.document.createTime?an(r.document.createTime):ot.min(),f=new ve({mapValue:{fields:r.document.fields}}),p=ce.newFoundDocument(s,a,u,f),g=r.targetIds||[],y=r.removedTargetIds||[];e=new pa(g,y,p.key,p)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Lc(i,r.document),a=r.readTime?an(r.readTime):ot.min(),u=ce.newNoDocument(s,a),f=r.removedTargetIds||[];e=new pa([],f,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Lc(i,r.document),a=r.removedTargetIds||[];e=new pa([],a,s,null)}else{if(!("filter"in t))return et(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:a}=r,u=new Ly(s,a),f=r.targetId;e=new Pf(f,u)}}return e}function $y(i,t){let e;if(t instanceof lo)e={update:bh(i,t.key,t.value)};else if(t instanceof Rl)e={delete:nl(i,t.key)};else if(t instanceof _i)e={update:bh(i,t.key,t.data),updateMask:Yy(t.fieldMask)};else{if(!(t instanceof Cy))return et(16599,{dt:t.type});e={verify:nl(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(a,u){const f=u.transform;if(f instanceof to)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Zr)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Kr)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Sa)return{fieldPath:u.field.canonicalString(),increment:f.Ae};throw et(20930,{transform:u.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:By(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:et(27497)}(i,t.precondition)),e}function jy(i,t){return i&&i.length>0?(It(t!==void 0,14353),i.map(e=>function(s,a){let u=s.updateTime?an(s.updateTime):an(a);return u.isEqual(ot.min())&&(u=an(a)),new Ay(u,s.transformResults||[])}(e,t))):[]}function Hy(i,t){return{documents:[kf(i,t.path)]}}function Wy(i,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=kf(i,s);const a=function(g){if(g.length!==0)return Df(Ze.create(g,"and"))}(t.filters);a&&(e.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(y=>function(E){return{field:Dr(E.field),direction:Ky(E.dir)}}(y))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const f=tl(i,t.limit);return f!==null&&(e.structuredQuery.limit=f),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{ft:e,parent:s}}function Gy(i){let t=zy(i.parent);const e=i.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){It(r===1,65062);const y=e.from[0];y.allDescendants?s=y.collectionId:t=t.child(y.collectionId)}let a=[];e.where&&(a=function(w){const E=xf(w);return E instanceof Ze&&cf(E)?E.getFilters():[E]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(E=>function(M){return new Xs(Nr(M.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(E))}(e.orderBy));let f=null;e.limit&&(f=function(w){let E;return E=typeof w=="object"?w.value:w,Wa(E)?null:E}(e.limit));let p=null;e.startAt&&(p=function(w){const E=!!w.before,S=w.values||[];return new Pa(S,E)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const E=!w.before,S=w.values||[];return new Pa(S,E)}(e.endAt)),uy(t,s,u,a,f,"F",p,g)}function Zy(i,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return et(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xf(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Nr(e.unaryFilter.field);return Bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(e.unaryFilter.field);return Bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Nr(e.unaryFilter.field);return Bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Nr(e.unaryFilter.field);return Bt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return et(61313);default:return et(60726)}}(i):i.fieldFilter!==void 0?function(e){return Bt.create(Nr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return et(58110);default:return et(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Ze.create(e.compositeFilter.filters.map(r=>xf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return et(1026)}}(e.compositeFilter.op))}(i):et(30097,{filter:i})}function Ky(i){return Oy[i]}function Qy(i){return Vy[i]}function Jy(i){return Fy[i]}function Dr(i){return{fieldPath:i.canonicalString()}}function Nr(i){return ie.fromServerFormat(i.fieldPath)}function Df(i){return i instanceof Bt?function(e){if(e.op==="=="){if(hh(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NAN"}};if(uh(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hh(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NOT_NAN"}};if(uh(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(e.field),op:Qy(e.op),value:e.value}}}(i):i instanceof Ze?function(e){const r=e.getFilters().map(s=>Df(s));return r.length===1?r[0]:{compositeFilter:{op:Jy(e.op),filters:r}}}(i):et(54877,{filter:i})}function Yy(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Nf(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function Mf(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e,r,s,a=ot.min(),u=ot.min(),f=re.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(t){return new Pn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(t){this.yt=t}}function tv(i){const t=Gy({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Xc(t,t.limit,"L"):t}/**
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
 */class ev{constructor(){this.bn=new nv}addToCollectionParentIndex(t,e){return this.bn.add(e),z.resolve()}getCollectionParents(t,e){return z.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return z.resolve()}deleteFieldIndex(t,e){return z.resolve()}deleteAllFieldIndexes(t){return z.resolve()}createTargetIndexes(t,e){return z.resolve()}getDocumentsMatchingTarget(t,e){return z.resolve(null)}getIndexType(t,e){return z.resolve(0)}getFieldIndexes(t,e){return z.resolve([])}getNextCollectionGroupToUpdate(t){return z.resolve(null)}getMinOffset(t,e){return z.resolve(ai.min())}getMinOffsetFromCollectionGroup(t,e){return z.resolve(ai.min())}updateCollectionGroup(t,e,r){return z.resolve()}updateIndexEntries(t,e){return z.resolve()}}class nv{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new jt(Ct.comparator),a=!s.has(r);return this.index[e]=s.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new jt(Ct.comparator)).toArray()}}/**
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
 */const Ah={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Of=41943040;class ye{static withCacheSize(t){return new ye(t,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(Of,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ph="LruGarbageCollector",iv=1048576;function Sh([i,t],[e,r]){const s=ft(i,e);return s===0?ft(t,r):s}class rv{constructor(t){this.Pr=t,this.buffer=new jt(Sh),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Sh(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class sv{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){Z(Ph,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ts(e)?Z(Ph,"Ignoring IndexedDB error during garbage collection: ",e):await Xr(e)}await this.Ar(3e5)})}}class ov{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return z.resolve(Ha.ce);const r=new rv(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Ah)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ah):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,a,u,f,p,g;const y=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,f=Date.now(),this.removeTargets(t,r,e))).next(w=>(a=w,p=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(g=Date.now(),Lr()<=mt.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(f-u)+`ms
	Removed ${a} targets in `+(p-f)+`ms
	Removed ${w} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:w})))}}function av(i,t){return new ov(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.changes=new Yi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ce.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?z.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lv{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Hs(r.mutation,s,Pe.empty(),Lt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,pt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=pt()){const s=zi();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(a=>{let u=Us();return a.forEach((f,p)=>{u=u.insert(f,p.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=zi();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,pt()))}populateOverlays(t,e,r){const s=[];return r.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((u,f)=>{e.set(u,f)})})}computeViews(t,e,r,s){let a=On();const u=js(),f=function(){return js()}();return e.forEach((p,g)=>{const y=r.get(g.key);s.has(g.key)&&(y===void 0||y.mutation instanceof _i)?a=a.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),Hs(y.mutation,g,y.mutation.getFieldMask(),Lt.now())):u.set(g.key,Pe.empty())}),this.recalculateAndSaveOverlays(t,a).next(p=>(p.forEach((g,y)=>u.set(g,y)),e.forEach((g,y)=>f.set(g,new lv(y,u.get(g)??null))),f))}recalculateAndSaveOverlays(t,e){const r=js();let s=new xt((u,f)=>u-f),a=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const f of u)f.keys().forEach(p=>{const g=e.get(p);if(g===null)return;let y=r.get(p)||Pe.empty();y=f.applyToLocalView(g,y),r.set(p,y);const w=(s.get(f.batchId)||pt()).add(p);s=s.insert(f.batchId,w)})}).next(()=>{const u=[],f=s.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,y=p.value,w=gf();y.forEach(E=>{if(!a.has(E)){const S=If(e.get(E),r.get(E));S!==null&&w.set(E,S),a=a.add(E)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return z.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return hy(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):df(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-a.size):z.resolve(zi());let f=Ks,p=a;return u.next(g=>z.forEach(g,(y,w)=>(f<w.largestBatchId&&(f=w.largestBatchId),a.get(y)?z.resolve():this.remoteDocumentCache.getEntry(t,y).next(E=>{p=p.insert(y,E)}))).next(()=>this.populateOverlays(t,g,a)).next(()=>this.computeViews(t,p,g,pt())).next(y=>({batchId:f,changes:_f(y)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Y(e)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const a=e.collectionGroup;let u=Us();return this.indexManager.getCollectionParents(t,a).next(f=>z.forEach(f,p=>{const g=function(w,E){return new es(E,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,p.child(a));return this.getDocumentsMatchingCollectionQuery(t,g,r,s).next(y=>{y.forEach((w,E)=>{u=u.insert(w,E)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,s))).next(u=>{a.forEach((p,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,ce.newInvalidDocument(y)))});let f=Us();return u.forEach((p,g)=>{const y=a.get(p);y!==void 0&&Hs(y.mutation,g,Pe.empty(),Lt.now()),Qa(e,g)&&(f=f.insert(p,g))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return z.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:an(s.createTime)}}(e)),z.resolve()}getNamedQuery(t,e){return z.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:tv(s.bundledQuery),readTime:an(s.readTime)}}(e)),z.resolve()}}/**
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
 */class dv{constructor(){this.overlays=new xt(Y.comparator),this.Lr=new Map}getOverlay(t,e){return z.resolve(this.overlays.get(e))}getOverlays(t,e){const r=zi();return z.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,a)=>{this.St(t,e,a)}),z.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),z.resolve()}getOverlaysForCollection(t,e,r){const s=zi(),a=e.length+1,u=new Y(e.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===a&&p.largestBatchId>r&&s.set(p.getKey(),p)}return z.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let a=new xt((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>r){let y=a.get(g.largestBatchId);y===null&&(y=zi(),a=a.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const f=zi(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>f.set(g,y)),!(f.size()>=s)););return z.resolve(f)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ky(e,r));let a=this.Lr.get(e);a===void 0&&(a=pt(),this.Lr.set(e,a)),this.Lr.set(e,a.add(r.key))}}/**
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
 */class fv{constructor(){this.sessionToken=re.EMPTY_BYTE_STRING}getSessionToken(t){return z.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.kr=new jt(Qt.Kr),this.qr=new jt(Qt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Qt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new Qt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new Y(new Ct([])),r=new Qt(e,t),s=new Qt(e,t+1),a=[];return this.qr.forEachInRange([r,s],u=>{this.Wr(u),a.push(u.key)}),a}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new Y(new Ct([])),r=new Qt(e,t),s=new Qt(e,t+1);let a=pt();return this.qr.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new Qt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Qt{constructor(t,e){this.key=t,this.Jr=e}static Kr(t,e){return Y.comparator(t.key,e.key)||ft(t.Jr,e.Jr)}static Ur(t,e){return ft(t.Jr,e.Jr)||Y.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new jt(Qt.Kr)}checkEmpty(t){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ry(a,e,r,s);this.mutationQueue.push(u);for(const f of s)this.Hr=this.Hr.add(new Qt(f.key,a)),this.indexManager.addToCollectionParentIndex(t,f.key.path.popLast());return z.resolve(u)}lookupMutationBatch(t,e){return z.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),a=s<0?0:s;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?El:this.Yn-1)}getAllMutationBatches(t){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Qt(e,0),s=new Qt(e,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,s],u=>{const f=this.Zr(u.Jr);a.push(f)}),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new jt(ft);return e.forEach(s=>{const a=new Qt(s,0),u=new Qt(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,u],f=>{r=r.add(f.Jr)})}),z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let a=r;Y.isDocumentKey(a)||(a=a.child(""));const u=new Qt(new Y(a),0);let f=new jt(ft);return this.Hr.forEachWhile(p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===s&&(f=f.add(p.Jr)),!0)},u),z.resolve(this.Yr(f))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){It(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return z.forEach(e.mutations,s=>{const a=new Qt(s.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new Qt(e,0),s=this.Hr.firstAfterOrEqual(r);return z.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,z.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t){this.ti=t,this.docs=function(){return new xt(Y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),a=s?s.size:0,u=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return z.resolve(r?r.document.mutableCopy():ce.newInvalidDocument(e))}getEntries(t,e){let r=On();return e.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():ce.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let a=On();const u=e.path,f=new Y(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||zg(Bg(y),r)<=0||(s.has(y.key)||Qa(e,y))&&(a=a.insert(y.key,y.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(t,e,r,s){et(9500)}ni(t,e){return z.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new _v(this)}getSize(t){return z.resolve(this.size)}}class _v extends cv{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),z.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(t){this.persistence=t,this.ri=new Yi(e=>Al(e),Pl),this.lastRemoteSnapshotVersion=ot.min(),this.highestTargetId=0,this.ii=0,this.si=new Dl,this.targetCount=0,this.oi=hi._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),z.resolve()}getLastRemoteSnapshotVersion(t){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return z.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),z.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new hi(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,z.resolve()}updateTargetData(t,e){return this.lr(e),z.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,z.resolve()}removeTargets(t,e,r){let s=0;const a=[];return this.ri.forEach((u,f)=>{f.sequenceNumber<=e&&r.get(f.targetId)===null&&(this.ri.delete(u),a.push(this.removeMatchingKeysForTargetId(t,f.targetId)),s++)}),z.waitFor(a).next(()=>s)}getTargetCount(t){return z.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return z.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),z.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(u=>{a.push(s.markPotentiallyOrphaned(t,u))}),z.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),z.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return z.resolve(r)}containsKey(t,e){return z.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(t,e){this._i={},this.overlays={},this.ai=new Ha(0),this.ui=!1,this.ui=!0,this.ci=new fv,this.referenceDelegate=t(this),this.li=new gv(this),this.indexManager=new ev,this.remoteDocumentCache=function(s){return new mv(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Xy(e),this.Pi=new hv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new dv,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new pv(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){Z("MemoryPersistence","Starting transaction:",t);const s=new yv(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(a=>this.referenceDelegate.Ii(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ei(t,e){return z.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class yv extends $g{constructor(t){super(),this.currentSequenceNumber=t}}class Nl{constructor(t){this.persistence=t,this.Ri=new Dl,this.Ai=null}static Vi(t){return new Nl(t)}get di(){if(this.Ai)return this.Ai;throw et(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),z.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),z.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const s=Y.fromPath(r);return this.mi(t,s).next(a=>{a||e.removeEntry(s,ot.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return z.or([()=>z.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Ra{constructor(t,e){this.persistence=t,this.fi=new Yi(r=>Wg(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=av(this,e)}static Vi(t,e){return new Ra(t,e)}Ti(){}Ii(t){return z.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return z.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(a=>a?z.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.ni(t,u=>this.wr(t,u,e).next(f=>{f||(r++,a.removeEntry(u,ot.min()))})).next(()=>a.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),z.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),z.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ha(t.data.value)),e}wr(t,e,r){return z.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=pt(),s=pt();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new Ml(t,e.fromCache,r,s)}}/**
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
 */class vv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class wv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return a_()?8:jg(le())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const a={result:null};return this.gs(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ps(t,e,s,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new vv;return this.ys(t,e,u).next(f=>{if(a.result=f,this.As)return this.ws(t,e,u,f.size)})}).next(()=>a.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(Lr()<=mt.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",xr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Lr()<=mt.DEBUG&&Z("QueryEngine","Query:",xr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Lr()<=mt.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",xr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,on(e))):z.resolve())}gs(t,e){if(mh(e))return z.resolve(null);let r=on(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Xc(e,null,"F"),r=on(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=pt(...a);return this.fs.getDocuments(t,u).next(f=>this.indexManager.getMinOffset(t,r).next(p=>{const g=this.Ss(e,f);return this.bs(e,g,u,p.readTime)?this.gs(t,Xc(e,null,"F")):this.Ds(t,g,e,p)}))})))}ps(t,e,r,s){return mh(e)||s.isEqual(ot.min())?z.resolve(null):this.fs.getDocuments(t,r).next(a=>{const u=this.Ss(e,a);return this.bs(e,u,r,s)?z.resolve(null):(Lr()<=mt.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xr(e)),this.Ds(t,u,e,Ug(s,Ks)).next(f=>f))})}Ss(t,e){let r=new jt(pf(t));return e.forEach((s,a)=>{Qa(t,a)&&(r=r.add(a))}),r}bs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}ys(t,e,r){return Lr()<=mt.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",xr(e)),this.fs.getDocumentsMatchingQuery(t,e,ai.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="LocalStore",Tv=3e8;class Ev{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new xt(ft),this.Fs=new Yi(a=>Al(a),Pl),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Iv(i,t,e,r){return new Ev(i,t,e,r)}async function Ff(i,t){const e=at(i);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],f=[];let p=pt();for(const g of s){u.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of a){f.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return e.localDocuments.getDocuments(r,p).next(g=>({Ns:g,removedBatchIds:u,addedBatchIds:f}))})})}function bv(i,t){const e=at(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),a=e.xs.newChangeBuffer({trackRemovals:!0});return function(f,p,g,y){const w=g.batch,E=w.keys();let S=z.resolve();return E.forEach(M=>{S=S.next(()=>y.getEntry(p,M)).next(F=>{const B=g.docVersions.get(M);It(B!==null,48541),F.version.compareTo(B)<0&&(w.applyToRemoteDocument(F,g),F.isValidDocument()&&(F.setReadTime(g.commitVersion),y.addEntry(F)))})}),S.next(()=>f.mutationQueue.removeMutationBatch(p,w))}(e,r,t,a).next(()=>a.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(f){let p=pt();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Uf(i){const t=at(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Av(i,t){const e=at(i),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const f=[];t.targetChanges.forEach((y,w)=>{const E=s.get(w);if(!E)return;f.push(e.li.removeMatchingKeys(a,y.removedDocuments,w).next(()=>e.li.addMatchingKeys(a,y.addedDocuments,w)));let S=E.withSequenceNumber(a.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(re.EMPTY_BYTE_STRING,ot.min()).withLastLimboFreeSnapshotVersion(ot.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,r)),s=s.insert(w,S),function(F,B,j){return F.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Tv?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(E,S,y)&&f.push(e.li.updateTargetData(a,S))});let p=On(),g=pt();if(t.documentUpdates.forEach(y=>{t.resolvedLimboDocuments.has(y)&&f.push(e.persistence.referenceDelegate.updateLimboDocument(a,y))}),f.push(Pv(a,u,t.documentUpdates).next(y=>{p=y.Bs,g=y.Ls})),!r.isEqual(ot.min())){const y=e.li.getLastRemoteSnapshotVersion(a).next(w=>e.li.setTargetsMetadata(a,a.currentSequenceNumber,r));f.push(y)}return z.waitFor(f).next(()=>u.apply(a)).next(()=>e.localDocuments.getLocalViewOfDocuments(a,p,g)).next(()=>p)}).then(a=>(e.vs=s,a))}function Pv(i,t,e){let r=pt(),s=pt();return e.forEach(a=>r=r.add(a)),t.getEntries(i,r).next(a=>{let u=On();return e.forEach((f,p)=>{const g=a.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(f)),p.isNoDocument()&&p.version.isEqual(ot.min())?(t.removeEntry(f,p.readTime),u=u.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(p),u=u.insert(f,p)):Z(Ol,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)}),{Bs:u,Ls:s}})}function Sv(i,t){const e=at(i);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=El),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Cv(i,t){const e=at(i);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(a=>a?(s=a,z.resolve(s)):e.li.allocateTargetId(r).next(u=>(s=new Pn(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function rl(i,t,e){const r=at(i),s=r.vs.get(t),a=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!ts(u))throw u;Z(Ol,`Failed to update sequence numbers for target ${t}: ${u}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function Ch(i,t,e){const r=at(i);let s=ot.min(),a=pt();return r.persistence.runTransaction("Execute query","readwrite",u=>function(p,g,y){const w=at(p),E=w.Fs.get(y);return E!==void 0?z.resolve(w.vs.get(E)):w.li.getTargetData(g,y)}(r,u,on(t)).next(f=>{if(f)return s=f.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(u,f.targetId).next(p=>{a=p})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,t,e?s:ot.min(),e?a:pt())).next(f=>(Rv(r,py(t),f),{documents:f,ks:a})))}function Rv(i,t,e){let r=i.Ms.get(t)||ot.min();e.forEach((s,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),i.Ms.set(t,r)}class Rh{constructor(){this.activeTargetIds=wy()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class kv{constructor(){this.vo=new Rh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Rh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Lv{Mo(t){}shutdown(){}}/**
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
 */const kh="ConnectivityMonitor";class Lh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Z(kh,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){Z(kh,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sa=null;function sl(){return sa===null?sa=function(){return 268435456+Math.round(2147483648*Math.random())}():sa++,"0x"+sa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="RestConnection",xv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Dv{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ba?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,a){const u=sl(),f=this.Qo(t,e.toUriEncodedString());Z(xc,`Sending RPC '${t}' ${u}:`,f,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(p,s,a);const{host:g}=new URL(f),y=ao(g);return this.zo(t,f,p,r,y).then(w=>(Z(xc,`Received RPC '${t}' ${u}: `,w),w),w=>{throw Zi(xc,`RPC '${t}' ${u} failed with error: `,w,"url: ",f,"request:",r),w})}jo(t,e,r,s,a,u){return this.Wo(t,e,r,s,a)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,a)=>t[a]=s),r&&r.headers.forEach((s,a)=>t[a]=s)}Qo(t,e){const r=xv[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="WebChannelConnection",Ns=(i,t,e)=>{i.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Fr extends Dv{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Fr.c_){const t=$d();Ns(t,qd.STAT_EVENT,e=>{e.stat===Wc.PROXY?Z(oe,"STAT_EVENT: detected buffering proxy"):e.stat===Wc.NOPROXY&&Z(oe,"STAT_EVENT: detected no buffering proxy")}),Fr.c_=!0}}zo(t,e,r,s,a){const u=sl();return new Promise((f,p)=>{const g=new Bd;g.setWithCredentials(!0),g.listenOnce(zd.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ua.NO_ERROR:const w=g.getResponseJson();Z(oe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),f(w);break;case ua.TIMEOUT:Z(oe,`RPC '${t}' ${u} timed out`),p(new G(U.DEADLINE_EXCEEDED,"Request time out"));break;case ua.HTTP_ERROR:const E=g.getStatus();if(Z(oe,`RPC '${t}' ${u} failed with status:`,E,"response text:",g.getResponseText()),E>0){let S=g.getResponseJson();Array.isArray(S)&&(S=S[0]);const M=S==null?void 0:S.error;if(M&&M.status&&M.message){const F=function(j){const H=j.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(H)>=0?H:U.UNKNOWN}(M.status);p(new G(F,M.message))}else p(new G(U.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new G(U.UNAVAILABLE,"Connection failed."));break;default:et(9055,{l_:t,streamId:u,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{Z(oe,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(s);Z(oe,`RPC '${t}' ${u} sending request:`,s),g.send(e,"POST",y,r,15)})}T_(t,e,r){const s=sl(),a=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=this.createWebChannelTransport(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Go(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const g=a.join("");Z(oe,`Creating RPC '${t}' stream ${s}: ${g}`,f);const y=u.createWebChannel(g,f);this.I_(y);let w=!1,E=!1;const S=new Nv({Jo:M=>{E?Z(oe,`Not sending because RPC '${t}' stream ${s} is closed:`,M):(w||(Z(oe,`Opening RPC '${t}' stream ${s} transport.`),y.open(),w=!0),Z(oe,`RPC '${t}' stream ${s} sending:`,M),y.send(M))},Ho:()=>y.close()});return Ns(y,Fs.EventType.OPEN,()=>{E||(Z(oe,`RPC '${t}' stream ${s} transport opened.`),S.i_())}),Ns(y,Fs.EventType.CLOSE,()=>{E||(E=!0,Z(oe,`RPC '${t}' stream ${s} transport closed`),S.o_(),this.E_(y))}),Ns(y,Fs.EventType.ERROR,M=>{E||(E=!0,Zi(oe,`RPC '${t}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),S.o_(new G(U.UNAVAILABLE,"The operation could not be completed")))}),Ns(y,Fs.EventType.MESSAGE,M=>{var F;if(!E){const B=M.data[0];It(!!B,16349);const j=B,H=(j==null?void 0:j.error)||((F=j[0])==null?void 0:F.error);if(H){Z(oe,`RPC '${t}' stream ${s} received error:`,H);const W=H.status;let ct=function(R){const I=Ut[R];if(I!==void 0)return Af(I)}(W),lt=H.message;W==="NOT_FOUND"&&lt.includes("database")&&lt.includes("does not exist")&&lt.includes(this.databaseId.database)&&Zi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ct===void 0&&(ct=U.INTERNAL,lt="Unknown error status: "+W+" with message "+H.message),E=!0,S.o_(new G(ct,lt)),y.close()}else Z(oe,`RPC '${t}' stream ${s} received:`,B),S.__(B)}}),Fr.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return jd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(i){return new Fr(i)}function Dc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(i){return new Uy(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr.c_=!1;class Bf{constructor(t,e,r=1e3,s=1.5,a=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="PersistentStream";class zf{constructor(t,e,r,s,a,u,f,p){this.Ci=t,this.S_=r,this.b_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Bf(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===U.RESOURCE_EXHAUSTED?(Mn(e.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new G(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return Z(xh,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(Z(xh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ov extends zf{constructor(t,e,r,s,a,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=qy(this.serializer,t),r=function(a){if(!("targetChange"in a))return ot.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ot.min():u.readTime?an(u.readTime):ot.min()}(t);return this.listener.H_(e,r)}Z_(t){const e={};e.database=il(this.serializer),e.addTarget=function(a,u){let f;const p=u.target;if(f=Jc(p)?{documents:Hy(a,p)}:{query:Wy(a,p).ft},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=Cf(a,u.resumeToken);const g=tl(a,u.expectedCount);g!==null&&(f.expectedCount=g)}else if(u.snapshotVersion.compareTo(ot.min())>0){f.readTime=Ca(a,u.snapshotVersion.toTimestamp());const g=tl(a,u.expectedCount);g!==null&&(f.expectedCount=g)}return f}(this.serializer,t);const r=Zy(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=il(this.serializer),e.removeTarget=t,this.K_(e)}}class Vv extends zf{constructor(t,e,r,s,a,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return It(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,It(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){It(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=jy(t.writeResults,t.commitTime),r=an(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=il(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>$y(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{}class Uv extends Fv{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(t,el(e,r),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new G(U.UNKNOWN,a.toString())})}jo(t,e,r,s,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.jo(t,el(e,r),s,u,f,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new G(U.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Bv(i,t,e,r){return new Uv(i,t,e,r)}class zv{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mn(e),this.aa=!1):Z("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="RemoteStore";class qv{constructor(t,e,r,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new hi(1e3),this.Va=new hi(1001),this.da=new Set,this.ma=[],this.fa=a,this.fa.Mo(u=>{r.enqueueAndForget(async()=>{Xi(this)&&(Z(hn,"Restarting streams for network reachability change."),await async function(p){const g=at(p);g.da.add(4),await fo(g),g.ga.set("Unknown"),g.da.delete(4),await tc(g)}(this))})}),this.ga=new zv(r,s)}}async function tc(i){if(Xi(i))for(const t of i.ma)await t(!0)}async function fo(i){for(const t of i.ma)await t(!1)}function ol(i,t){return i.Ea.get(t)||void 0}function qf(i,t){const e=at(i),r=ol(e,t.targetId);if(r!==void 0&&e.Ia.has(r))return;const s=function(f,p){const g=ol(f,p);g!==void 0&&f.Ra.delete(g);const y=function(E,S){return S%2!=0?E.Va.next():E.Aa.next()}(f,p);return f.Ea.set(p,y),f.Ra.set(y,p),y}(e,t.targetId);Z(hn,"remoteStoreListen mapping SDK target ID to remote",t.targetId,s);const a=new Pn(t.target,s,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ia.set(s,a),Bl(e)?Ul(e):ns(e).O_()&&Fl(e,a)}function Vl(i,t){const e=at(i),r=ns(e),s=ol(e,t);Z(hn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,s),e.Ia.delete(s),e.Ea.delete(t),e.Ra.delete(s),r.O_()&&$f(e,s),e.Ia.size===0&&(r.O_()?r.L_():Xi(e)&&e.ga.set("Unknown"))}function Fl(i,t){if(i.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ot.min())>0){const e=i.Ra.get(t.targetId);if(e===void 0)return void Z(hn,"SDK target ID not found for remote ID: "+t.targetId);const r=i.remoteSyncer.getRemoteKeysForTarget(e).size;t=t.withExpectedCount(r)}ns(i).Z_(t)}function $f(i,t){i.pa.$e(t),ns(i).X_(t)}function Ul(i){i.pa=new My({getRemoteKeysForTarget:t=>{const e=i.Ra.get(t);return e!==void 0?i.remoteSyncer.getRemoteKeysForTarget(e):pt()},At:t=>i.Ia.get(t)||null,ht:()=>i.datastore.serializer.databaseId}),ns(i).start(),i.ga.ua()}function Bl(i){return Xi(i)&&!ns(i).x_()&&i.Ia.size>0}function Xi(i){return at(i).da.size===0}function jf(i){i.pa=void 0}async function $v(i){i.ga.set("Online")}async function jv(i){i.Ia.forEach((t,e)=>{Fl(i,t)})}async function Hv(i,t){jf(i),Bl(i)?(i.ga.ha(t),Ul(i)):i.ga.set("Unknown")}async function Wv(i,t,e){if(i.ga.set("Online"),t instanceof Sf&&t.state===2&&t.cause)try{await async function(s,a){const u=a.cause;for(const f of a.targetIds){if(s.Ia.has(f)){const p=s.Ra.get(f);p!==void 0&&(await s.remoteSyncer.rejectListen(p,u),s.Ea.delete(p),s.Ra.delete(f)),s.Ia.delete(f)}s.pa.removeTarget(f)}}(i,t)}catch(r){Z(hn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ka(i,r)}else if(t instanceof pa?i.pa.Xe(t):t instanceof Pf?i.pa.st(t):i.pa.tt(t),!e.isEqual(ot.min()))try{const r=await Uf(i.localStore);e.compareTo(r)>=0&&await function(a,u){const f=a.pa.Tt(u);f.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const w=a.Ia.get(y);w&&a.Ia.set(y,w.withResumeToken(g.resumeToken,u))}}),f.targetMismatches.forEach((g,y)=>{const w=a.Ia.get(g);if(!w)return;a.Ia.set(g,w.withResumeToken(re.EMPTY_BYTE_STRING,w.snapshotVersion)),$f(a,g);const E=new Pn(w.target,g,y,w.sequenceNumber);Fl(a,E)});const p=function(y,w){const E=new Map;w.targetChanges.forEach((M,F)=>{const B=y.Ra.get(F);B!==void 0&&E.set(B,M)});let S=new xt(ft);return w.targetMismatches.forEach((M,F)=>{const B=y.Ra.get(M);B!==void 0&&(S=S.insert(B,F))}),new uo(w.snapshotVersion,E,S,w.documentUpdates,w.resolvedLimboDocuments)}(a,f);return a.remoteSyncer.applyRemoteEvent(p)}(i,e)}catch(r){Z(hn,"Failed to raise snapshot:",r),await ka(i,r)}}async function ka(i,t,e){if(!ts(t))throw t;i.da.add(1),await fo(i),i.ga.set("Offline"),e||(e=()=>Uf(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Z(hn,"Retrying IndexedDB access"),await e(),i.da.delete(1),await tc(i)})}function Hf(i,t){return t().catch(e=>ka(i,e,t))}async function ec(i){const t=at(i),e=di(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:El;for(;Gv(t);)try{const s=await Sv(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Zv(t,s)}catch(s){await ka(t,s)}Wf(t)&&Gf(t)}function Gv(i){return Xi(i)&&i.Ta.length<10}function Zv(i,t){i.Ta.push(t);const e=di(i);e.O_()&&e.Y_&&e.ea(t.mutations)}function Wf(i){return Xi(i)&&!di(i).x_()&&i.Ta.length>0}function Gf(i){di(i).start()}async function Kv(i){di(i).ra()}async function Qv(i){const t=di(i);for(const e of i.Ta)t.ea(e.mutations)}async function Jv(i,t,e){const r=i.Ta.shift(),s=kl.from(r,t,e);await Hf(i,()=>i.remoteSyncer.applySuccessfulWrite(s)),await ec(i)}async function Yv(i,t){t&&di(i).Y_&&await async function(r,s){if(function(u){return xy(u)&&u!==U.ABORTED}(s.code)){const a=r.Ta.shift();di(r).B_(),await Hf(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,s)),await ec(r)}}(i,t),Wf(i)&&Gf(i)}async function Dh(i,t){const e=at(i);e.asyncQueue.verifyOperationInProgress(),Z(hn,"RemoteStore received new credentials");const r=Xi(e);e.da.add(3),await fo(e),r&&e.ga.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.da.delete(3),await tc(e)}async function Xv(i,t){const e=at(i);t?(e.da.delete(2),await tc(e)):t||(e.da.add(2),await fo(e),e.ga.set("Unknown"))}function ns(i){return i.ya||(i.ya=function(e,r,s){const a=at(e);return a.sa(),new Ov(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:$v.bind(null,i),Yo:jv.bind(null,i),t_:Hv.bind(null,i),H_:Wv.bind(null,i)}),i.ma.push(async t=>{t?(i.ya.B_(),Bl(i)?Ul(i):i.ga.set("Unknown")):(await i.ya.stop(),jf(i))})),i.ya}function di(i){return i.wa||(i.wa=function(e,r,s){const a=at(e);return a.sa(),new Vv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Kv.bind(null,i),t_:Yv.bind(null,i),ta:Qv.bind(null,i),na:Jv.bind(null,i)}),i.ma.push(async t=>{t?(i.wa.B_(),await ec(i)):(await i.wa.stop(),i.Ta.length>0&&(Z(hn,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))})),i.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,r,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,a){const u=Date.now()+r,f=new zl(t,e,u,s,a);return f.start(r),f}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(U.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(i,t){if(Mn("AsyncQueue",`${t}: ${i}`),ts(i))return new G(U.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{static emptySet(t){return new Ur(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||Y.comparator(e.key,r.key):(e,r)=>Y.comparator(e.key,r.key),this.keyedMap=Us(),this.sortedSet=new xt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ur)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=r.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.Sa=new xt(Y.comparator)}track(t){const e=t.doc.key,r=this.Sa.get(e);r?t.type!==0&&r.type===3?this.Sa=this.Sa.insert(e,t):t.type===3&&r.type!==1?this.Sa=this.Sa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Sa=this.Sa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Sa=this.Sa.remove(e):t.type===1&&r.type===2?this.Sa=this.Sa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Sa=this.Sa.insert(e,{type:2,doc:t.doc}):et(63341,{Vt:t,ba:r}):this.Sa=this.Sa.insert(e,t)}Da(){const t=[];return this.Sa.inorderTraversal((e,r)=>{t.push(r)}),t}}class Qr{constructor(t,e,r,s,a,u,f,p,g){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(t,e,r,s,a){const u=[];return e.forEach(f=>{u.push({type:0,doc:f})}),new Qr(t,e,Ur.emptySet(e),u,r,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ka(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class ew{constructor(){this.queries=Mh(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,r){const s=at(e),a=s.queries;s.queries=Mh(),a.forEach((u,f)=>{for(const p of f.va)p.onError(r)})})(this,new G(U.ABORTED,"Firestore shutting down"))}}function Mh(){return new Yi(i=>ff(i),Ka)}async function $l(i,t){const e=at(i);let r=3;const s=t.query;let a=e.queries.get(s);a?!a.Fa()&&t.Ma()&&(r=2):(a=new tw,r=t.Ma()?0:1);try{switch(r){case 0:a.Ca=await e.onListen(s,!0);break;case 1:a.Ca=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const f=ql(u,`Initialization of query '${xr(t.query)}' failed`);return void t.onError(f)}e.queries.set(s,a),a.va.push(t),t.Oa(e.onlineState),a.Ca&&t.Na(a.Ca)&&Hl(e)}async function jl(i,t){const e=at(i),r=t.query;let s=3;const a=e.queries.get(r);if(a){const u=a.va.indexOf(t);u>=0&&(a.va.splice(u,1),a.va.length===0?s=t.Ma()?0:1:!a.Fa()&&t.Ma()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function nw(i,t){const e=at(i);let r=!1;for(const s of t){const a=s.query,u=e.queries.get(a);if(u){for(const f of u.va)f.Na(s)&&(r=!0);u.Ca=s}}r&&Hl(e)}function iw(i,t,e){const r=at(i),s=r.queries.get(t);if(s)for(const a of s.va)a.onError(e);r.queries.delete(t)}function Hl(i){i.xa.forEach(t=>{t.next()})}var al,Oh;(Oh=al||(al={})).Ba="default",Oh.Cache="cache";class Wl{constructor(t,e,r){this.query=t,this.La=e,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Qr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ka?this.qa(t)&&(this.La.next(t),e=!0):this.Ua(t,this.onlineState)&&(this.$a(t),e=!0),this.Ka=t,e}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let e=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),e=!0),e}Ua(t,e){if(!t.fromCache||!this.Ma())return!0;const r=e!=="Offline";return(!this.options.Wa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const e=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}$a(t){t=Qr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==al.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(t){this.key=t}}class Kf{constructor(t){this.key=t}}class rw{constructor(t,e){this.query=t,this.tu=e,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=pt(),this.mutatedKeys=pt(),this.iu=pf(t),this.su=new Ur(this.iu)}get ou(){return this.tu}_u(t,e){const r=e?e.au:new Nh,s=e?e.su:this.su;let a=e?e.mutatedKeys:this.mutatedKeys,u=s,f=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((y,w)=>{const E=s.get(y),S=Qa(this.query,w)?w:null,M=!!E&&this.mutatedKeys.has(E.key),F=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let B=!1;E&&S?E.data.isEqual(S.data)?M!==F&&(r.track({type:3,doc:S}),B=!0):this.uu(E,S)||(r.track({type:2,doc:S}),B=!0,(p&&this.iu(S,p)>0||g&&this.iu(S,g)<0)&&(f=!0)):!E&&S?(r.track({type:0,doc:S}),B=!0):E&&!S&&(r.track({type:1,doc:E}),B=!0,(p||g)&&(f=!0)),B&&(S?(u=u.add(S),a=F?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{su:u,au:r,bs:f,mutatedKeys:a}}uu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const a=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const u=t.au.Da();u.sort((y,w)=>function(S,M){const F=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return et(20277,{Vt:B})}};return F(S)-F(M)}(y.type,w.type)||this.iu(y.doc,w.doc)),this.cu(r),s=s??!1;const f=e&&!s?this.lu():[],p=this.ru.size===0&&this.current&&!s?1:0,g=p!==this.nu;return this.nu=p,u.length!==0||g?{snapshot:new Qr(this.query,t.su,a,u,t.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:f}:{hu:f}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Nh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(e=>this.tu=this.tu.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.tu=this.tu.delete(e)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=pt(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const e=[];return t.forEach(r=>{this.ru.has(r)||e.push(new Kf(r))}),this.ru.forEach(r=>{t.has(r)||e.push(new Zf(r))}),e}Tu(t){this.tu=t.ks,this.ru=pt();const e=this._u(t.documents);return this.applyChanges(e,!0)}Iu(){return Qr.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const Gl="SyncEngine";class sw{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ow{constructor(t){this.key=t,this.Eu=!1}}class aw{constructor(t,e,r,s,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Ru={},this.Au=new Yi(f=>ff(f),Ka),this.Vu=new Map,this.du=new Set,this.mu=new xt(Y.comparator),this.fu=new Map,this.gu=new Dl,this.pu={},this.yu=new Map,this.wu=hi.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function cw(i,t,e=!0){const r=ep(i);let s;const a=r.Au.get(t);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.Iu()):s=await Qf(r,t,e,!0),s}async function lw(i,t){const e=ep(i);await Qf(e,t,!0,!1)}async function Qf(i,t,e,r){const s=await Cv(i.localStore,on(t)),a=s.targetId,u=i.sharedClientState.addLocalQueryTarget(a,e);let f;return r&&(f=await uw(i,t,a,u==="current",s.resumeToken)),i.isPrimaryClient&&e&&qf(i.remoteStore,s),f}async function uw(i,t,e,r,s){i.bu=(w,E,S)=>async function(F,B,j,H){let W=B.view._u(j);W.bs&&(W=await Ch(F.localStore,B.query,!1).then(({documents:R})=>B.view._u(R,W)));const ct=H&&H.targetChanges.get(B.targetId),lt=H&&H.targetMismatches.get(B.targetId)!=null,At=B.view.applyChanges(W,F.isPrimaryClient,ct,lt);return Fh(F,B.targetId,At.hu),At.snapshot}(i,w,E,S);const a=await Ch(i.localStore,t,!0),u=new rw(t,a.ks),f=u._u(a.documents),p=ho.createSynthesizedTargetChangeForCurrentChange(e,r&&i.onlineState!=="Offline",s),g=u.applyChanges(f,i.isPrimaryClient,p);Fh(i,e,g.hu);const y=new sw(t,e,u);return i.Au.set(t,y),i.Vu.has(e)?i.Vu.get(e).push(t):i.Vu.set(e,[t]),g.snapshot}async function hw(i,t,e){const r=at(i),s=r.Au.get(t),a=r.Vu.get(s.targetId);if(a.length>1)return r.Vu.set(s.targetId,a.filter(u=>!Ka(u,t))),void r.Au.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await rl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Vl(r.remoteStore,s.targetId),cl(r,s.targetId)}).catch(Xr)):(cl(r,s.targetId),await rl(r.localStore,s.targetId,!0))}async function dw(i,t){const e=at(i),r=e.Au.get(t),s=e.Vu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Vl(e.remoteStore,r.targetId))}async function fw(i,t,e){const r=ww(i);try{const s=await function(u,f){const p=at(u),g=Lt.now(),y=f.reduce((S,M)=>S.add(M.key),pt());let w,E;return p.persistence.runTransaction("Locally write mutations","readwrite",S=>{let M=On(),F=pt();return p.xs.getEntries(S,y).next(B=>{M=B,M.forEach((j,H)=>{H.isValidDocument()||(F=F.add(j))})}).next(()=>p.localDocuments.getOverlayedDocuments(S,M)).next(B=>{w=B;const j=[];for(const H of f){const W=Sy(H,w.get(H.key).overlayedDocument);W!=null&&j.push(new _i(H.key,W,sf(W.value.mapValue),He.exists(!0)))}return p.mutationQueue.addMutationBatch(S,g,j,f)}).next(B=>{E=B;const j=B.applyToLocalDocumentSet(w,F);return p.documentOverlayCache.saveOverlays(S,B.batchId,j)})}).then(()=>({batchId:E.batchId,changes:_f(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,f,p){let g=u.pu[u.currentUser.toKey()];g||(g=new xt(ft)),g=g.insert(f,p),u.pu[u.currentUser.toKey()]=g}(r,s.batchId,e),await po(r,s.changes),await ec(r.remoteStore)}catch(s){const a=ql(s,"Failed to persist write");e.reject(a)}}async function Jf(i,t){const e=at(i);try{const r=await Av(e.localStore,t);t.targetChanges.forEach((s,a)=>{const u=e.fu.get(a);u&&(It(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.Eu=!0:s.modifiedDocuments.size>0?It(u.Eu,14607):s.removedDocuments.size>0&&(It(u.Eu,42227),u.Eu=!1))}),await po(e,r,t)}catch(r){await Xr(r)}}function Vh(i,t,e){const r=at(i);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Au.forEach((a,u)=>{const f=u.view.Oa(t);f.snapshot&&s.push(f.snapshot)}),function(u,f){const p=at(u);p.onlineState=f;let g=!1;p.queries.forEach((y,w)=>{for(const E of w.va)E.Oa(f)&&(g=!0)}),g&&Hl(p)}(r.eventManager,t),s.length&&r.Ru.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function pw(i,t,e){const r=at(i);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.fu.get(t),a=s&&s.key;if(a){let u=new xt(Y.comparator);u=u.insert(a,ce.newNoDocument(a,ot.min()));const f=pt().add(a),p=new uo(ot.min(),new Map,new xt(ft),u,f);await Jf(r,p),r.mu=r.mu.remove(a),r.fu.delete(t),Zl(r)}else await rl(r.localStore,t,!1).then(()=>cl(r,t,e)).catch(Xr)}async function mw(i,t){const e=at(i),r=t.batch.batchId;try{const s=await bv(e.localStore,t);Xf(e,r,null),Yf(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await po(e,s)}catch(s){await Xr(s)}}async function _w(i,t,e){const r=at(i);try{const s=await function(u,f){const p=at(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,f).next(w=>(It(w!==null,37113),y=w.keys(),p.mutationQueue.removeMutationBatch(g,w))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(r.localStore,t);Xf(r,t,e),Yf(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await po(r,s)}catch(s){await Xr(s)}}function Yf(i,t){(i.yu.get(t)||[]).forEach(e=>{e.resolve()}),i.yu.delete(t)}function Xf(i,t,e){const r=at(i);let s=r.pu[r.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),r.pu[r.currentUser.toKey()]=s}}function cl(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const r of i.Vu.get(t))i.Au.delete(r),e&&i.Ru.Du(r,e);i.Vu.delete(t),i.isPrimaryClient&&i.gu.Gr(t).forEach(r=>{i.gu.containsKey(r)||tp(i,r)})}function tp(i,t){i.du.delete(t.path.canonicalString());const e=i.mu.get(t);e!==null&&(Vl(i.remoteStore,e),i.mu=i.mu.remove(t),i.fu.delete(e),Zl(i))}function Fh(i,t,e){for(const r of e)r instanceof Zf?(i.gu.addReference(r.key,t),gw(i,r)):r instanceof Kf?(Z(Gl,"Document no longer in limbo: "+r.key),i.gu.removeReference(r.key,t),i.gu.containsKey(r.key)||tp(i,r.key)):et(19791,{Cu:r})}function gw(i,t){const e=t.key,r=e.path.canonicalString();i.mu.get(e)||i.du.has(r)||(Z(Gl,"New document in limbo: "+e),i.du.add(r),Zl(i))}function Zl(i){for(;i.du.size>0&&i.mu.size<i.maxConcurrentLimboResolutions;){const t=i.du.values().next().value;i.du.delete(t);const e=new Y(Ct.fromString(t)),r=i.wu.next();i.fu.set(r,new ow(e)),i.mu=i.mu.insert(e,r),qf(i.remoteStore,new Pn(on(Za(e.path)),r,"TargetPurposeLimboResolution",Ha.ce))}}async function po(i,t,e){const r=at(i),s=[],a=[],u=[];r.Au.isEmpty()||(r.Au.forEach((f,p)=>{u.push(r.bu(p,t,e).then(g=>{var y;if((g||e)&&r.isPrimaryClient){const w=g?!g.fromCache:(y=e==null?void 0:e.targetChanges.get(p.targetId))==null?void 0:y.current;r.sharedClientState.updateQueryState(p.targetId,w?"current":"not-current")}if(g){s.push(g);const w=Ml.Es(p.targetId,g);a.push(w)}}))}),await Promise.all(u),r.Ru.H_(s),await async function(p,g){const y=at(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>z.forEach(g,E=>z.forEach(E.Ts,S=>y.persistence.referenceDelegate.addReference(w,E.targetId,S)).next(()=>z.forEach(E.Is,S=>y.persistence.referenceDelegate.removeReference(w,E.targetId,S)))))}catch(w){if(!ts(w))throw w;Z(Ol,"Failed to update sequence numbers: "+w)}for(const w of g){const E=w.targetId;if(!w.fromCache){const S=y.vs.get(E),M=S.snapshotVersion,F=S.withLastLimboFreeSnapshotVersion(M);y.vs=y.vs.insert(E,F)}}}(r.localStore,a))}async function yw(i,t){const e=at(i);if(!e.currentUser.isEqual(t)){Z(Gl,"User change. New user:",t.toKey());const r=await Ff(e.localStore,t);e.currentUser=t,function(a,u){a.yu.forEach(f=>{f.forEach(p=>{p.reject(new G(U.CANCELLED,u))})}),a.yu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await po(e,r.Ns)}}function vw(i,t){const e=at(i),r=e.fu.get(t);if(r&&r.Eu)return pt().add(r.key);{let s=pt();const a=e.Vu.get(t);if(!a)return s;for(const u of a){const f=e.Au.get(u);s=s.unionWith(f.view.ou)}return s}}function ep(i){const t=at(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=Jf.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=vw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pw.bind(null,t),t.Ru.H_=nw.bind(null,t.eventManager),t.Ru.Du=iw.bind(null,t.eventManager),t}function ww(i){const t=at(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=mw.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_w.bind(null,t),t}class La{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Xa(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,e){return null}Bu(t,e){return null}Ou(t){return Iv(this.persistence,new wv,t.initialUser,this.serializer)}xu(t){return new Vf(Nl.Vi,this.serializer)}Mu(t){return new kv}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}La.provider={build:()=>new La};class Tw extends La{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,e){It(this.persistence.referenceDelegate instanceof Ra,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sv(r,t.asyncQueue,e)}xu(t){const e=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new Vf(r=>Ra.Vi(r,e),this.serializer)}}class ll{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yw.bind(null,this.syncEngine),await Xv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ew}()}createDatastore(t){const e=Xa(t.databaseInfo.databaseId),r=Mv(t.databaseInfo);return Bv(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,a,u,f){return new qv(r,s,a,u,f)}(this.localStore,this.datastore,t.asyncQueue,e=>Vh(this.syncEngine,e,0),function(){return Lh.v()?new Lh:new Lv}())}createSyncEngine(t,e){return function(s,a,u,f,p,g,y){const w=new aw(s,a,u,f,p,g);return y&&(w.Su=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=at(s);Z(hn,"RemoteStore shutting down."),a.da.add(5),await fo(a),a.fa.shutdown(),a.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ll.provider={build:()=>new ll};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kl{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):Mn("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi="FirestoreClient";class Ew{constructor(t,e,r,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=ae.UNAUTHENTICATED,this.clientId=Tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{Z(fi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(Z(fi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ql(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Nc(i,t){i.asyncQueue.verifyOperationInProgress(),Z(fi,"Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let r=e.initialUser;i.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ff(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Uh(i,t){i.asyncQueue.verifyOperationInProgress();const e=await Iw(i);Z(fi,"Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(r=>Dh(t.remoteStore,r)),i.setAppCheckTokenChangeListener((r,s)=>Dh(t.remoteStore,s)),i._onlineComponents=t}async function Iw(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Z(fi,"Using user provided OfflineComponentProvider");try{await Nc(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Zi("Error using user provided cache. Falling back to memory cache: "+e),await Nc(i,new La)}}else Z(fi,"Using default OfflineComponentProvider"),await Nc(i,new Tw(void 0));return i._offlineComponents}async function np(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Z(fi,"Using user provided OnlineComponentProvider"),await Uh(i,i._uninitializedComponentsProvider._online)):(Z(fi,"Using default OnlineComponentProvider"),await Uh(i,new ll))),i._onlineComponents}function bw(i){return np(i).then(t=>t.syncEngine)}async function xa(i){const t=await np(i),e=t.eventManager;return e.onListen=cw.bind(null,t.syncEngine),e.onUnlisten=hw.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=lw.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=dw.bind(null,t.syncEngine),e}function Aw(i,t,e,r){const s=new Kl(r),a=new Wl(t,s,e);return i.asyncQueue.enqueueAndForget(async()=>$l(await xa(i),a)),()=>{s.Ku(),i.asyncQueue.enqueueAndForget(async()=>jl(await xa(i),a))}}function Pw(i,t,e={}){const r=new Rn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,f,p,g){const y=new Kl({next:E=>{y.Ku(),u.enqueueAndForget(()=>jl(a,w));const S=E.docs.has(f);!S&&E.fromCache?g.reject(new G(U.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&E.fromCache&&p&&p.source==="server"?g.reject(new G(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new Wl(Za(f.path),y,{includeMetadataChanges:!0,Wa:!0});return $l(a,w)}(await xa(i),i.asyncQueue,t,e,r)),r.promise}function Sw(i,t,e={}){const r=new Rn;return i.asyncQueue.enqueueAndForget(async()=>function(a,u,f,p,g){const y=new Kl({next:E=>{y.Ku(),u.enqueueAndForget(()=>jl(a,w)),E.fromCache&&p.source==="server"?g.reject(new G(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(E)},error:E=>g.reject(E)}),w=new Wl(f,y,{includeMetadataChanges:!0,Wa:!0});return $l(a,w)}(await xa(i),i.asyncQueue,t,e,r)),r.promise}function Cw(i,t){const e=new Rn;return i.asyncQueue.enqueueAndForget(async()=>fw(await bw(i),t,e)),e.promise}/**
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
 */function ip(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="ComponentProvider",Bh=new Map;function kw(i,t,e,r,s){return new Kg(i,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ip(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="firestore.googleapis.com",zh=!0;class qh{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new G(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rp,this.ssl=zh}else this.host=t.host,this.ssl=t.ssl??zh;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Of;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<iv)throw new G(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ip(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class nc{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new G(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qh(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Cg;switch(r.type){case"firstParty":return new xg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Bh.get(e);r&&(Z(Rw,"Removing Datastore"),Bh.delete(e),r.terminate())}(this),Promise.resolve()}}function Lw(i,t,e,r={}){var g;i=Se(i,nc);const s=ao(t),a=i._getSettings(),u={...a,emulatorOptions:i._getEmulatorOptions()},f=`${t}:${e}`;s&&xd(`https://${f}`),a.host!==rp&&a.host!==f&&Zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p={...a,host:f,ssl:s,emulatorOptions:r};if(!Dn(p,u)&&(i._setSettings(p),r.mockUserToken)){let y,w;if(typeof r.mockUserToken=="string")y=r.mockUserToken,w=ae.MOCK_USER;else{y=t_(r.mockUserToken,(g=i._app)==null?void 0:g.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new G(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ae(E)}i._authCredentials=new Rg(new Wd(y,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new gi(this.firestore,t,this._query)}}class Nt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nt(this.firestore,t,this._key)}toJSON(){return{type:Nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(co(e,Nt._jsonSchema))return new Nt(t,r||null,new Y(Ct.fromString(e.referencePath)))}}Nt._jsonSchemaVersion="firestore/documentReference/1.0",Nt._jsonSchema={type:zt("string",Nt._jsonSchemaVersion),referencePath:zt("string")};class si extends gi{constructor(t,e,r){super(t,e,Za(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nt(this.firestore,null,new Y(t))}withConverter(t){return new si(this.firestore,t,this._path)}}function eo(i,t,...e){if(i=Ht(i),Gd("collection","path",t),i instanceof nc){const r=Ct.fromString(t,...e);return eh(r),new si(i,null,r)}{if(!(i instanceof Nt||i instanceof si))throw new G(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Ct.fromString(t,...e));return eh(r),new si(i.firestore,null,r)}}function Jt(i,t,...e){if(i=Ht(i),arguments.length===1&&(t=Tl.newId()),Gd("doc","path",t),i instanceof nc){const r=Ct.fromString(t,...e);return th(r),new Nt(i,null,new Y(r))}{if(!(i instanceof Nt||i instanceof si))throw new G(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=i._path.child(Ct.fromString(t,...e));return th(r),new Nt(i.firestore,i instanceof si?i.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h="AsyncQueue";class jh{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Bf(this,"async_queue_retry"),this.lc=()=>{const r=Dc();r&&Z($h,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=t;const e=Dc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const e=Dc();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const e=new Rn;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!ts(t))throw t;Z($h,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const e=this.hc.then(()=>(this.ac=!0,t().catch(r=>{throw this._c=r,this.ac=!1,Mn("INTERNAL UNHANDLED ERROR: ",Hh(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=e,e}enqueueAfterDelay(t,e,r){this.Pc(),this.cc.indexOf(t)>-1&&(e=0);const s=zl.createAndSchedule(this,t,e,r,a=>this.Ec(a));return this.oc.push(s),s}Pc(){this._c&&et(47125,{Rc:Hh(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const e of this.oc)if(e.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.oc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const e=this.oc.indexOf(t);this.oc.splice(e,1)}}function Hh(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class pi extends nc{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new jh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new jh(t),this._firestoreClient=void 0,await t}}}function xw(i,t){const e=typeof i=="object"?i:Od(),r=typeof i=="string"?i:ba,s=vl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Ym("firestore");a&&Lw(s,...a)}return s}function ic(i){if(i._terminated)throw new G(U.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||Dw(i),i._firestoreClient}function Dw(i){var r,s,a,u;const t=i._freezeSettings(),e=kw(i._databaseId,((r=i._app)==null?void 0:r.options.appId)||"",i._persistenceKey,(s=i._app)==null?void 0:s.options.apiKey,t);i._componentsProvider||(a=t.localCache)!=null&&a._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(i._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),i._firestoreClient=new Ew(i._authCredentials,i._appCheckCredentials,i._queue,e,i._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ve(re.fromBase64String(t))}catch(e){throw new G(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ve(re.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ve._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(co(t,Ve._jsonSchema))return Ve.fromBase64String(t.bytes)}}Ve._jsonSchemaVersion="firestore/bytes/1.0",Ve._jsonSchema={type:zt("string",Ve._jsonSchemaVersion),bytes:zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new G(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ie(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new G(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new G(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return ft(this._lat,t._lat)||ft(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(t){if(co(t,cn._jsonSchema))return new cn(t.latitude,t.longitude)}}cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:zt("string",cn._jsonSchemaVersion),latitude:zt("number"),longitude:zt("number")};/**
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
 */class We{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==s[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:We._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(co(t,We._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new We(t.vectorValues);throw new G(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}We._jsonSchemaVersion="firestore/vectorValue/1.0",We._jsonSchema={type:zt("string",We._jsonSchemaVersion),vectorValues:zt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=/^__.*__$/;class Mw{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new _i(t,this.data,this.fieldMask,e,this.fieldTransforms):new lo(t,this.data,e,this.fieldTransforms)}}class sp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new _i(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function op(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw et(40011,{dataSource:i})}}class rc{constructor(t,e,r,s,a,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.fc(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new rc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.wc(t),r}Sc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.fc(),r}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Da(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(op(this.dataSource)&&Nw.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class Ow{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Xa(t)}V(t,e,r,s=!1){return new rc({dataSource:t,methodName:e,targetDoc:r,path:ie.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jl(i){const t=i._freezeSettings(),e=Xa(i._databaseId);return new Ow(i._databaseId,!!t.ignoreUndefinedProperties,e)}function Vw(i,t,e,r,s,a={}){const u=i.V(a.merge||a.mergeFields?2:0,t,e,s);eu("Data must be an object, but it was:",u,r);const f=cp(r,u);let p,g;if(a.merge)p=new Pe(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const w of a.mergeFields){const E=Ki(t,w,e);if(!u.contains(E))throw new G(U.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);hp(y,E)||y.push(E)}p=new Pe(y),g=u.fieldTransforms.filter(w=>p.covers(w.field))}else p=null,g=u.fieldTransforms;return new Mw(new ve(f),p,g)}class mo extends is{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mo}}function ap(i,t,e){return new rc({dataSource:3,targetDoc:t.settings.targetDoc,methodName:i._methodName,arrayElement:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Yl extends is{_toFieldTransform(t){return new Cl(t.path,new to)}isEqual(t){return t instanceof Yl}}class Xl extends is{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=ap(this,t,!0),r=this.vc.map(a=>tr(a,e)),s=new Zr(r);return new Cl(t.path,s)}isEqual(t){return t instanceof Xl&&Dn(this.vc,t.vc)}}class tu extends is{constructor(t,e){super(t),this.vc=e}_toFieldTransform(t){const e=ap(this,t,!0),r=this.vc.map(a=>tr(a,e)),s=new Kr(r);return new Cl(t.path,s)}isEqual(t){return t instanceof tu&&Dn(this.vc,t.vc)}}function Fw(i,t,e,r){const s=i.V(1,t,e);eu("Data must be an object, but it was:",s,r);const a=[],u=ve.empty();mi(r,(p,g)=>{const y=up(t,p,e);g=Ht(g);const w=s.Sc(y);if(g instanceof mo)a.push(y);else{const E=tr(g,w);E!=null&&(a.push(y),u.set(y,E))}});const f=new Pe(a);return new sp(u,f,s.fieldTransforms)}function Uw(i,t,e,r,s,a){const u=i.V(1,t,e),f=[Ki(t,r,e)],p=[s];if(a.length%2!=0)throw new G(U.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)f.push(Ki(t,a[E])),p.push(a[E+1]);const g=[],y=ve.empty();for(let E=f.length-1;E>=0;--E)if(!hp(g,f[E])){const S=f[E];let M=p[E];M=Ht(M);const F=u.Sc(S);if(M instanceof mo)g.push(S);else{const B=tr(M,F);B!=null&&(g.push(S),y.set(S,B))}}const w=new Pe(g);return new sp(y,w,u.fieldTransforms)}function Bw(i,t,e,r=!1){return tr(e,i.V(r?4:3,t))}function tr(i,t){if(lp(i=Ht(i)))return eu("Unsupported field value:",t,i),cp(i,t);if(i instanceof is)return function(r,s){if(!op(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(r,s){const a=[];let u=0;for(const f of r){let p=tr(f,s.bc(u));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),u++}return{arrayValue:{values:a}}}(i,t)}return function(r,s){if((r=Ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ty(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Lt.fromDate(r);return{timestampValue:Ca(s.serializer,a)}}if(r instanceof Lt){const a=new Lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ca(s.serializer,a)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ve)return{bytesValue:Cf(s.serializer,r._byteString)};if(r instanceof Nt){const a=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw s.Dc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:xl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof We)return function(u,f){const p=u instanceof We?u.toArray():u;return{mapValue:{fields:{[nf]:{stringValue:rf},[Aa]:{arrayValue:{values:p.map(y=>{if(typeof y!="number")throw f.Dc("VectorValues must only contain numeric values.");return Sl(f.serializer,y)})}}}}}}(r,s);if(Mf(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${ja(r)}`)}(i,t)}function cp(i,t){const e={};return Qd(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):mi(i,(r,s)=>{const a=tr(s,t.yc(r));a!=null&&(e[r]=a)}),{mapValue:{fields:e}}}function lp(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Lt||i instanceof cn||i instanceof Ve||i instanceof Nt||i instanceof is||i instanceof We||Mf(i))}function eu(i,t,e){if(!lp(e)||!Zd(e)){const r=ja(e);throw r==="an object"?t.Dc(i+" a custom object"):t.Dc(i+" "+r)}}function Ki(i,t,e){if((t=Ht(t))instanceof Ql)return t._internalPath;if(typeof t=="string")return up(i,t);throw Da("Field path arguments must be of type string or ",i,!1,void 0,e)}const zw=new RegExp("[~\\*/\\[\\]]");function up(i,t,e){if(t.search(zw)>=0)throw Da(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Ql(...t.split("."))._internalPath}catch{throw Da(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function Da(i,t,e,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let f=`Function ${t}() called with invalid data`;e&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(a||u)&&(p+=" (found",a&&(p+=` in field ${r}`),u&&(p+=` in document ${s}`),p+=")"),new G(U.INVALID_ARGUMENT,f+i+p)}function hp(i,t){return i.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{convertValue(t,e="none"){switch(ui(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ot(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(li(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw et(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return mi(t,(s,a)=>{r[s]=this.convertValue(a,e)}),r}convertVectorValue(t){var r,s,a;const e=(a=(s=(r=t.fields)==null?void 0:r[Aa].arrayValue)==null?void 0:s.values)==null?void 0:a.map(u=>Ot(u.doubleValue));return new We(e)}convertGeoPoint(t){return new cn(Ot(t.latitude),Ot(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ga(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Qs(t));default:return null}}convertTimestamp(t){const e=ci(t);return new Lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Ct.fromString(t);It(Nf(r),9688,{name:t});const s=new Js(r.get(1),r.get(3)),a=new Y(r.popFirst(5));return s.isEqual(e)||Mn(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),a}}/**
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
 */class nu extends qw{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ve(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){return new mo("deleteField")}function kn(){return new Yl("serverTimestamp")}function fp(...i){return new Xl("arrayUnion",i)}function pp(...i){return new tu("arrayRemove",i)}const Wh="@firebase/firestore",Gh="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(i){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const a of r)if(a in s&&typeof s[a]=="function")return!0;return!1}(i,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e,r,s,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $w(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Ki("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class $w extends mp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new G(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iu{}class gp extends iu{}function Na(i,t,...e){let r=[];t instanceof iu&&r.push(t),r=r.concat(e),function(a){const u=a.filter(p=>p instanceof ru).length,f=a.filter(p=>p instanceof sc).length;if(u>1||u>0&&f>0)throw new G(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)i=s._apply(i);return i}class sc extends gp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new sc(t,e,r)}_apply(t){const e=this._parse(t);return yp(t._query,e),new gi(t.firestore,t.converter,Yc(t._query,e))}_parse(t){const e=Jl(t.firestore);return function(a,u,f,p,g,y,w){let E;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new G(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){Qh(w,y);const M=[];for(const F of w)M.push(Kh(p,a,F));E={arrayValue:{values:M}}}else E=Kh(p,a,w)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||Qh(w,y),E=Bw(f,u,w,y==="in"||y==="not-in");return Bt.create(g,y,E)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function no(i,t,e){const r=t,s=Ki("where",i);return sc._create(s,r,e)}class ru extends iu{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ru(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ze.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,a){let u=s;const f=a.getFlattenedFilters();for(const p of f)yp(u,p),u=Yc(u,p)}(t._query,e),new gi(t.firestore,t.converter,Yc(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class su extends gp{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new su(t,e)}_apply(t){const e=function(s,a,u){if(s.startAt!==null)throw new G(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new G(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Xs(a,u)}(t._query,this._field,this._direction);return new gi(t.firestore,t.converter,fy(t._query,e))}}function jw(i,t="asc"){const e=t,r=Ki("orderBy",i);return su._create(r,e)}function Kh(i,t,e){if(typeof(e=Ht(e))=="string"){if(e==="")throw new G(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!df(t)&&e.indexOf("/")!==-1)throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Ct.fromString(e));if(!Y.isDocumentKey(r))throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lh(i,new Y(r))}if(e instanceof Nt)return lh(i,e._key);throw new G(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ja(e)}.`)}function Qh(i,t){if(!Array.isArray(i)||i.length===0)throw new G(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function yp(i,t){const e=function(s,a){for(const u of s)for(const f of u.getFlattenedFilters())if(a.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new G(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new G(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Hw(i,t,e){let r;return r=i?e&&(e.merge||e.mergeFields)?i.toFirestore(t,e):i.toFirestore(t):t,r}class zs{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $i extends mp{constructor(t,e,r,s,a,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ki("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=$i._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}$i._jsonSchemaVersion="firestore/documentSnapshot/1.0",$i._jsonSchema={type:zt("string",$i._jsonSchemaVersion),bundleSource:zt("string","DocumentSnapshot"),bundleName:zt("string"),bundle:zt("string")};class ma extends $i{data(t={}){return super.data(t)}}class ji{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ma(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new G(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(f=>{const p=new ma(s._firestore,s._userDataWriter,f.doc.key,f.doc,new zs(s._snapshot.mutatedKeys.has(f.doc.key),s._snapshot.fromCache),s.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(f=>a||f.type!==3).map(f=>{const p=new ma(s._firestore,s._userDataWriter,f.doc.key,f.doc,new zs(s._snapshot.mutatedKeys.has(f.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,y=-1;return f.type!==0&&(g=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),y=u.indexOf(f.doc.key)),{type:Ww(f.type),doc:p,oldIndex:g,newIndex:y}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ji._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Tl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),s.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Ww(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return et(61501,{type:i})}}/**
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
 */ji._jsonSchemaVersion="firestore/querySnapshot/1.0",ji._jsonSchema={type:zt("string",ji._jsonSchemaVersion),bundleSource:zt("string","QuerySnapshot"),bundleName:zt("string"),bundle:zt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(i){i=Se(i,Nt);const t=Se(i.firestore,pi),e=ic(t);return Pw(e,i._key).then(r=>vp(t,i,r))}function ou(i){i=Se(i,gi);const t=Se(i.firestore,pi),e=ic(t),r=new nu(t);return _p(i._query),Sw(e,i._query).then(s=>new ji(t,r,i,s))}function er(i,t,e){i=Se(i,Nt);const r=Se(i.firestore,pi),s=Hw(i.converter,t,e),a=Jl(r);return au(r,[Vw(a,"setDoc",i._key,s,i.converter!==null,e).toMutation(i._key,He.none())])}function nr(i,t,e,...r){i=Se(i,Nt);const s=Se(i.firestore,pi),a=Jl(s);let u;return u=typeof(t=Ht(t))=="string"||t instanceof Ql?Uw(a,"updateDoc",i._key,t,e,r):Fw(a,"updateDoc",i._key,t),au(s,[u.toMutation(i._key,He.exists(!0))])}function Zw(i){return au(Se(i.firestore,pi),[new Rl(i._key,He.none())])}function Ma(i,...t){var g,y,w;i=Ht(i);let e={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||Zh(t[r])||(e=t[r++]);const s={includeMetadataChanges:e.includeMetadataChanges,source:e.source};if(Zh(t[r])){const E=t[r];t[r]=(g=E.next)==null?void 0:g.bind(E),t[r+1]=(y=E.error)==null?void 0:y.bind(E),t[r+2]=(w=E.complete)==null?void 0:w.bind(E)}let a,u,f;if(i instanceof Nt)u=Se(i.firestore,pi),f=Za(i._key.path),a={next:E=>{t[r]&&t[r](vp(u,i,E))},error:t[r+1],complete:t[r+2]};else{const E=Se(i,gi);u=Se(E.firestore,pi),f=E._query;const S=new nu(u);a={next:M=>{t[r]&&t[r](new ji(u,S,E,M))},error:t[r+1],complete:t[r+2]},_p(i._query)}const p=ic(u);return Aw(p,f,s,a)}function au(i,t){const e=ic(i);return Cw(e,t)}function vp(i,t,e){const r=e.docs.get(t._key),s=new nu(i);return new $i(i,s,t._key,r,new zs(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){Sg(Jr),jr(new Wi("firestore",(r,{instanceIdentifier:s,options:a})=>{const u=r.getProvider("app").getImmediate(),f=new pi(new kg(r.getProvider("auth-internal")),new Dg(u,r.getProvider("app-check-internal")),Qg(u,s),u);return a={useFetchStreams:e,...a},f._setSettings(a),f},"PUBLIC").setMultipleInstances(!0)),ii(Wh,Gh,t),ii(Wh,Gh,"esm2020")})();function wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kw=wp,Tp=new so("auth","Firebase",wp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new gl("@firebase/auth");function Qw(i,...t){Oa.logLevel<=mt.WARN&&Oa.warn(`Auth (${Jr}): ${i}`,...t)}function _a(i,...t){Oa.logLevel<=mt.ERROR&&Oa.error(`Auth (${Jr}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(i,...t){throw lu(i,...t)}function Ge(i,...t){return lu(i,...t)}function cu(i,t,e){const r={...Kw(),[t]:e};return new so("auth","Firebase",r).create(t,{appName:i.name})}function Ln(i){return cu(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jw(i,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&Fe(i,"argument-error"),cu(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lu(i,...t){if(typeof i!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=i.name),i._errorFactory.create(e,...r)}return Tp.create(i,...t)}function tt(i,t,...e){if(!i)throw lu(t,...e)}function Sn(i){const t="INTERNAL ASSERTION FAILED: "+i;throw _a(t),new Error(t)}function Vn(i,t){i||Sn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Yw(){return Jh()==="http:"||Jh()==="https:"}function Jh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yw()||r_()||"connection"in navigator)?navigator.onLine:!0}function tT(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t,e){this.shortDelay=t,this.longDelay=e,Vn(e>t,"Short delay should be less than long delay!"),this.isMobile=e_()||s_()}get(){return Xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(i,t){Vn(i.emulator,"Emulator should always be set here");const{url:e}=i.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iT=new _o(3e4,6e4);function yi(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function vi(i,t,e,r,s={}){return Ip(i,s,async()=>{let a={},u={};r&&(t==="GET"?u=r:a={body:JSON.stringify(r)});const f=oo({key:i.config.apiKey,...u}).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g={method:t,headers:p,...a};return i_()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&ao(i.emulatorConfig.host)&&(g.credentials="include"),Ep.fetch()(await bp(i,i.config.apiHost,e,f),g)})}async function Ip(i,t,e){i._canInitEmulator=!1;const r={...eT,...t};try{const s=new sT(i),a=await Promise.race([e(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw oa(i,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const f=a.ok?u.errorMessage:u.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(i,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw oa(i,"email-already-in-use",u);if(p==="USER_DISABLED")throw oa(i,"user-disabled",u);const y=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw cu(i,y,g);Fe(i,y)}}catch(s){if(s instanceof Fn)throw s;Fe(i,"network-request-failed",{message:String(s)})}}async function go(i,t,e,r,s={}){const a=await vi(i,t,e,r,s);return"mfaPendingCredential"in a&&Fe(i,"multi-factor-auth-required",{_serverResponse:a}),a}async function bp(i,t,e,r){const s=`${t}${e}?${r}`,a=i,u=a.config.emulator?uu(i.config,s):`${i.config.apiScheme}://${s}`;return nT.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function rT(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),iT.get())})}}function oa(i,t,e){const r={appName:i.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const s=Ge(i,t,r);return s.customData._tokenResponse=e,s}function Yh(i){return i!==void 0&&i.enterprise!==void 0}class oT{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return rT(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aT(i,t){return vi(i,"GET","/v2/recaptchaConfig",yi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cT(i,t){return vi(i,"POST","/v1/accounts:delete",t)}async function Va(i,t){return vi(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lT(i,t=!1){const e=Ht(i),r=await e.getIdToken(t),s=hu(r);tt(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:Ws(Mc(s.auth_time)),issuedAtTime:Ws(Mc(s.iat)),expirationTime:Ws(Mc(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Mc(i){return Number(i)*1e3}function hu(i){const[t,e,r]=i.split(".");if(t===void 0||e===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cd(e);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xh(i){const t=hu(i);return tt(t,"internal-error"),tt(typeof t.exp<"u","internal-error"),tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(i,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Fn&&uT(r)&&i.auth.currentUser===i&&await i.auth.signOut(),r}}function uT({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fa(i){var w;const t=i.auth,e=await i.getIdToken(),r=await io(i,Va(t,{idToken:e}));tt(r==null?void 0:r.users.length,t,"internal-error");const s=r.users[0];i._notifyReloadListener(s);const a=(w=s.providerUserInfo)!=null&&w.length?Ap(s.providerUserInfo):[],u=fT(i.providerData,a),f=i.isAnonymous,p=!(i.email&&s.passwordHash)&&!(u!=null&&u.length),g=f?p:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(i,y)}async function dT(i){const t=Ht(i);await Fa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fT(i,t){return[...i.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Ap(i){return i.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pT(i,t){const e=await Ip(i,{},async()=>{const r=oo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:a}=i.config,u=await bp(i,s,"/v1/token",`key=${a}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:r};return i.emulatorConfig&&ao(i.emulatorConfig.host)&&(p.credentials="include"),Ep.fetch()(u,p)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function mT(i,t){return vi(i,"POST","/v2/accounts:revokeToken",yi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){tt(t.idToken,"internal-error"),tt(typeof t.idToken<"u","internal-error"),tt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Xh(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){tt(t.length!==0,"internal-error");const e=Xh(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:s,expiresIn:a}=await pT(t,e);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:s,expirationTime:a}=e,u=new Br;return r&&(tt(typeof r=="string","internal-error",{appName:t}),u.refreshToken=r),s&&(tt(typeof s=="string","internal-error",{appName:t}),u.accessToken=s),a&&(tt(typeof a=="number","internal-error",{appName:t}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(i,t){tt(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class je{constructor({uid:t,auth:e,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await io(this,this.stsTokenManager.getToken(this.auth,t));return tt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return lT(this,t)}reload(){return dT(this)}_assign(t){this!==t&&(tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new je({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Ln(this.auth));const t=await this.getIdToken();return await io(this,cT(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const r=e.displayName??void 0,s=e.email??void 0,a=e.phoneNumber??void 0,u=e.photoURL??void 0,f=e.tenantId??void 0,p=e._redirectEventId??void 0,g=e.createdAt??void 0,y=e.lastLoginAt??void 0,{uid:w,emailVerified:E,isAnonymous:S,providerData:M,stsTokenManager:F}=e;tt(w&&F,t,"internal-error");const B=Br.fromJSON(this.name,F);tt(typeof w=="string",t,"internal-error"),Qn(r,t.name),Qn(s,t.name),tt(typeof E=="boolean",t,"internal-error"),tt(typeof S=="boolean",t,"internal-error"),Qn(a,t.name),Qn(u,t.name),Qn(f,t.name),Qn(p,t.name),Qn(g,t.name),Qn(y,t.name);const j=new je({uid:w,auth:t,email:s,emailVerified:E,displayName:r,isAnonymous:S,photoURL:u,phoneNumber:a,tenantId:f,stsTokenManager:B,createdAt:g,lastLoginAt:y});return M&&Array.isArray(M)&&(j.providerData=M.map(H=>({...H}))),p&&(j._redirectEventId=p),j}static async _fromIdTokenResponse(t,e,r=!1){const s=new Br;s.updateFromServerResponse(e);const a=new je({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Fa(a),a}static async _fromGetAccountInfoResponse(t,e,r){const s=e.users[0];tt(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?Ap(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),f=new Br;f.updateFromIdToken(r);const p=new je({uid:s.localId,auth:t,stsTokenManager:f,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function Cn(i){Vn(i instanceof Function,"Expected a class definition");let t=td.get(i);return t?(Vn(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,td.set(i,t),t)}/**
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
 */class Pp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Pp.type="NONE";const ed=Pp;/**
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
 */function ga(i,t,e){return`firebase:${i}:${t}:${e}`}class zr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,a),this.fullPersistenceKey=ga("persistence",s.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await Va(this.auth,{idToken:t}).catch(()=>{});return e?je._fromGetAccountInfoResponse(this.auth,e,t):null}return je._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new zr(Cn(ed),t,r);const s=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||Cn(ed);const u=ga(r,t.config.apiKey,t.name);let f=null;for(const g of e)try{const y=await g._get(u);if(y){let w;if(typeof y=="string"){const E=await Va(t,{idToken:y}).catch(()=>{});if(!E)break;w=await je._fromGetAccountInfoResponse(t,E,y)}else w=je._fromJSON(t,y);g!==a&&(f=w),a=g;break}}catch{}const p=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new zr(a,t,r):(a=p[0],f&&await a._set(u,f.toJSON()),await Promise.all(e.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new zr(a,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(xp(t))return"Blackberry";if(Dp(t))return"Webos";if(Cp(t))return"Safari";if((t.includes("chrome/")||Rp(t))&&!t.includes("edge/"))return"Chrome";if(Lp(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=i.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sp(i=le()){return/firefox\//i.test(i)}function Cp(i=le()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rp(i=le()){return/crios\//i.test(i)}function kp(i=le()){return/iemobile/i.test(i)}function Lp(i=le()){return/android/i.test(i)}function xp(i=le()){return/blackberry/i.test(i)}function Dp(i=le()){return/webos/i.test(i)}function du(i=le()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _T(i=le()){var t;return du(i)&&!!((t=window.navigator)!=null&&t.standalone)}function gT(){return o_()&&document.documentMode===10}function Np(i=le()){return du(i)||Lp(i)||Dp(i)||xp(i)||/windows phone/i.test(i)||kp(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(i,t=[]){let e;switch(i){case"Browser":e=nd(le());break;case"Worker":e=`${nd(le())}-${i}`;break;default:e=i}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Jr}/${r}`}/**
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
 */class yT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=a=>new Promise((u,f)=>{try{const p=t(a);u(p)}catch(p){f(p)}});r.onAbort=e,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const s of e)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vT(i,t={}){return vi(i,"GET","/v2/passwordPolicy",yi(i,t))}/**
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
 */const wT=6;class TT{constructor(t){var r;const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??wT,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),s&&(e.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,s,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(t,e,r,s){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new id(this),this.idTokenSubscription=new id(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Cn(e)),this._initializationPromise=this.queue(async()=>{var r,s,a;if(!this._deleted&&(this.persistenceManager=await zr.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await Va(this,{idToken:t}),r=await je._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var a;if(be(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let r=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(a=this.redirectUser)==null?void 0:a._redirectEventId,f=r==null?void 0:r._redirectEventId,p=await this.tryRedirectSignIn(t);(!u||u===f)&&(p!=null&&p.user)&&(r=p.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(u){r=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Fa(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(be(this.app))return Promise.reject(Ln(this));const e=t?Ht(t):null;return e&&tt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return be(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vT(this),e=new TT(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new so("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await mT(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Cn(t)||this._popupRedirectResolver;tt(e,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[Cn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)==null?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,s){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(tt(f,this,"internal-error"),f.then(()=>{u||a(this.currentUser)}),typeof e=="function"){const p=t.addObserver(e,r,s);return()=>{u=!0,p()}}else{const p=t.addObserver(e);return()=>{u=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());e&&(t["X-Firebase-Client"]=e);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return t!=null&&t.error&&Qw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wi(i){return Ht(i)}class id{constructor(t){this.auth=t,this.observer=null,this.addObserver=p_(e=>this.observer=e)}get next(){return tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IT(i){oc=i}function Op(i){return oc.loadJS(i)}function bT(){return oc.recaptchaEnterpriseScript}function AT(){return oc.gapiScript}function PT(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class ST{constructor(){this.enterprise=new CT}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class CT{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const RT="recaptcha-enterprise",Vp="NO_RECAPTCHA";class kT{constructor(t){this.type=RT,this.auth=wi(t)}async verify(t="verify",e=!1){async function r(a){if(!e){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,f)=>{aT(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new oT(p);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(p=>{f(p)})})}function s(a,u,f){const p=window.grecaptcha;Yh(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:t}).then(g=>{u(g)}).catch(()=>{u(Vp)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ST().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(f=>{if(!e&&Yh(window.grecaptcha))s(f,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=bT();p.length!==0&&(p+=f),Op(p).then(()=>{s(f,a,u)}).catch(g=>{u(g)})}}).catch(f=>{u(f)})})}}async function rd(i,t,e,r=!1,s=!1){const a=new kT(i);let u;if(s)u=Vp;else try{u=await a.verify(e)}catch{u=await a.verify(e,!0)}const f={...t};if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function dl(i,t,e,r,s){var a;if((a=i._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await rd(i,t,e,e==="getOobCode");return r(i,u)}else return r(i,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await rd(i,t,e,e==="getOobCode");return r(i,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(i,t){const e=vl(i,"auth");if(e.isInitialized()){const s=e.getImmediate(),a=e.getOptions();if(Dn(a,t??{}))return s;Fe(s,"already-initialized")}return e.initialize({options:t})}function xT(i,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Cn);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function DT(i,t,e){const r=wi(i);tt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,a=Fp(t),{host:u,port:f}=NT(t),p=f===null?"":`:${f}`,g={url:`${a}//${u}${p}/`},y=Object.freeze({host:u,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){tt(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),tt(Dn(g,r.config.emulator)&&Dn(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,ao(u)?xd(`${a}//${u}${p}`):MT()}function Fp(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function NT(i){const t=Fp(i),e=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:sd(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:sd(u)}}}function sd(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function MT(){function i(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Sn("not implemented")}_getIdTokenResponse(t){return Sn("not implemented")}_linkToIdToken(t,e){return Sn("not implemented")}_getReauthenticationResolver(t){return Sn("not implemented")}}async function OT(i,t){return vi(i,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(i,t){return go(i,"POST","/v1/accounts:signInWithPassword",yi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(i,t){return go(i,"POST","/v1/accounts:signInWithEmailLink",yi(i,t))}async function UT(i,t){return go(i,"POST","/v1/accounts:signInWithEmailLink",yi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends fu{constructor(t,e,r,s=null){super("password",r),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new ro(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new ro(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(t,e,"signInWithPassword",VT);case"emailLink":return FT(t,{email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dl(t,r,"signUpPassword",OT);case"emailLink":return UT(t,{idToken:e,email:this._email,oobCode:this._password});default:Fe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(i,t){return go(i,"POST","/v1/accounts:signInWithIdp",yi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="http://localhost";class Qi extends fu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Qi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Fe("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s,...a}=e;if(!r||!s)return null;const u=new Qi(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(t){const e=this.buildRequest();return qr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,qr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,qr(t,e)}buildRequest(){const t={requestUri:BT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=oo(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qT(i){const t=Os(Vs(i)).link,e=t?Os(Vs(t)).deep_link_id:null,r=Os(Vs(i)).deep_link_id;return(r?Os(Vs(r)).link:null)||r||e||t||i}class pu{constructor(t){const e=Os(Vs(t)),r=e.apiKey??null,s=e.oobCode??null,a=zT(e.mode??null);tt(r&&s&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=s,this.continueUrl=e.continueUrl??null,this.languageCode=e.lang??null,this.tenantId=e.tenantId??null}static parseLink(t){const e=qT(t);try{return new pu(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.providerId=rs.PROVIDER_ID}static credential(t,e){return ro._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=pu.parseLink(e);return tt(r,"argument-error"),ro._fromEmailAndCode(t,r.code,r.tenantId)}}rs.PROVIDER_ID="password";rs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class yo extends mu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends yo{constructor(){super("facebook.com")}static credential(t){return Qi._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jn.credentialFromTaggedObject(t)}static credentialFromError(t){return Jn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jn.credential(t.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends yo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Qi._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return An.credential(e,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends yo{constructor(){super("github.com")}static credential(t){return Qi._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yn.credentialFromTaggedObject(t)}static credentialFromError(t){return Yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yn.credential(t.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends yo{constructor(){super("twitter.com")}static credential(t,e){return Qi._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Xn.credentialFromTaggedObject(t)}static credentialFromError(t){return Xn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Xn.credential(e,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(i,t){return go(i,"POST","/v1/accounts:signUp",yi(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,s=!1){const a=await je._fromIdTokenResponse(t,r,s),u=od(r);return new Ji({user:a,providerId:u,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const s=od(r);return new Ji({user:t,providerId:s,_tokenResponse:r,operationType:e})}}function od(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Fn{constructor(t,e,r,s){super(e.code,e.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,s){return new Ua(t,e,r,s)}}function Up(i,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(i):e._getIdTokenResponse(i)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(i,a,t,r):a})}async function jT(i,t,e=!1){const r=await io(i,t._linkToIdToken(i.auth,await i.getIdToken()),e);return Ji._forOperation(i,"link",r)}/**
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
 */async function HT(i,t,e=!1){const{auth:r}=i;if(be(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const a=await io(i,Up(r,s,t,i),e);tt(a.idToken,r,"internal-error");const u=hu(a.idToken);tt(u,r,"internal-error");const{sub:f}=u;return tt(i.uid===f,r,"user-mismatch"),Ji._forOperation(i,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(i,t,e=!1){if(be(i.app))return Promise.reject(Ln(i));const r="signIn",s=await Up(i,r,t),a=await Ji._fromIdTokenResponse(i,r,s);return e||await i._updateCurrentUser(a.user),a}async function WT(i,t){return Bp(wi(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(i){const t=wi(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function GT(i,t,e){if(be(i.app))return Promise.reject(Ln(i));const r=wi(i),u=await dl(r,{returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$T).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&zp(i),p}),f=await Ji._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(f.user),f}function ZT(i,t,e){return be(i.app)?Promise.reject(Ln(i)):WT(Ht(i),rs.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zp(i),r})}function KT(i,t,e,r){return Ht(i).onIdTokenChanged(t,e,r)}function QT(i,t,e){return Ht(i).beforeAuthStateChanged(t,e)}function JT(i,t,e,r){return Ht(i).onAuthStateChanged(t,e,r)}function YT(i){return Ht(i).signOut()}const Ba="__sak";/**
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
 */class qp{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=1e3,tE=10;class $p extends qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Np(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),s=this.localCache[e];r!==s&&t(e,s,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((u,f,p)=>{this.notifyListeners(u,p)});return}const r=t.key;e?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(r);!e&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);gT()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,tE):s()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}$p.type="LOCAL";const eE=$p;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}jp.type="SESSION";const Hp=jp;/**
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
 */function nE(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class ac{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(s=>s.isListeningto(t));if(e)return e;const r=new ac(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:s,data:a}=e.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const f=Array.from(u).map(async g=>g(e.origin,a)),p=await nE(f);e.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:p})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(i="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return i+e}/**
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
 */class iE{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((f,p)=>{const g=_u("",20);s.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(w){const E=w;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(E.data.response);break;default:clearTimeout(y),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function rE(i){ln().location.href=i}/**
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
 */function Wp(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function sE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oE(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function aE(){return Wp()?self:null}/**
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
 */const Gp="firebaseLocalStorageDb",cE=1,za="firebaseLocalStorage",Zp="fbase_key";class vo{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function cc(i,t){return i.transaction([za],t?"readwrite":"readonly").objectStore(za)}function lE(){const i=indexedDB.deleteDatabase(Gp);return new vo(i).toPromise()}function fl(){const i=indexedDB.open(Gp,cE);return new Promise((t,e)=>{i.addEventListener("error",()=>{e(i.error)}),i.addEventListener("upgradeneeded",()=>{const r=i.result;try{r.createObjectStore(za,{keyPath:Zp})}catch(s){e(s)}}),i.addEventListener("success",async()=>{const r=i.result;r.objectStoreNames.contains(za)?t(r):(r.close(),await lE(),t(await fl()))})})}async function ad(i,t,e){const r=cc(i,!0).put({[Zp]:t,value:e});return new vo(r).toPromise()}async function uE(i,t){const e=cc(i,!1).get(t),r=await new vo(e).toPromise();return r===void 0?null:r.value}function cd(i,t){const e=cc(i,!0).delete(t);return new vo(e).toPromise()}const hE=800,dE=3;class Kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>dE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(aE()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await sE(),!this.activeServiceWorker)return;this.sender=new iE(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(e=t[0])!=null&&e.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||oE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fl();return await ad(t,Ba,"1"),await cd(t,Ba),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ad(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>uE(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>cd(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const a=cc(s,!1).getAll();return new vo(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:a}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kp.type="LOCAL";const fE=Kp;new _o(3e4,6e4);/**
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
 */function Qp(i,t){return t?Cn(t):(tt(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class gu extends fu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return qr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return qr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function pE(i){return Bp(i.auth,new gu(i),i.bypassAuthState)}function mE(i){const{auth:t,user:e}=i;return tt(e,t,"internal-error"),HT(e,new gu(i),i.bypassAuthState)}async function _E(i){const{auth:t,user:e}=i;return tt(e,t,"internal-error"),jT(e,new gu(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(t,e,r,s,a=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:s,tenantId:a,error:u,type:f}=t;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:e,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pE;case"linkViaPopup":case"linkViaRedirect":return _E;case"reauthViaPopup":case"reauthViaRedirect":return mE;default:Fe(this.auth,"internal-error")}}resolve(t){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=new _o(2e3,1e4);async function yE(i,t,e){if(be(i.app))return Promise.reject(Ge(i,"operation-not-supported-in-this-environment"));const r=wi(i);Jw(i,t,mu);const s=Qp(r,e);return new qi(r,"signInViaPopup",t,s).executeNotNull()}class qi extends Jp{constructor(t,e,r,s,a){super(t,e,s,a),this.provider=r,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return tt(t,this.auth,"internal-error"),t}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const t=_u();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if((r=(e=this.authWindow)==null?void 0:e.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,gE.get())};t()}}qi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="pendingRedirect",ya=new Map;class wE extends Jp{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=ya.get(this.auth._key());if(!t){try{const r=await TE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}ya.set(this.auth._key(),t)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TE(i,t){const e=bE(t),r=IE(i);if(!await r._isAvailable())return!1;const s=await r._get(e)==="true";return await r._remove(e),s}function EE(i,t){ya.set(i._key(),t)}function IE(i){return Cn(i._redirectPersistence)}function bE(i){return ga(vE,i.config.apiKey,i.name)}async function AE(i,t,e=!1){if(be(i.app))return Promise.reject(Ln(i));const r=wi(i),s=Qp(r,t),u=await new wE(r,s,e).execute();return u&&!e&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,t)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=10*60*1e3;class SE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!CE(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Yp(t)){const s=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ge(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=PE&&this.cachedEventUids.clear(),this.cachedEventUids.has(ld(t))}saveEventToCache(t){this.cachedEventUids.add(ld(t)),this.lastProcessedEventTime=Date.now()}}function ld(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function Yp({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function CE(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yp(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RE(i,t={}){return vi(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LE=/^https?/;async function xE(i){if(i.config.emulator)return;const{authorizedDomains:t}=await RE(i);for(const e of t)try{if(DE(e))return}catch{}Fe(i,"unauthorized-domain")}function DE(i){const t=ul(),{protocol:e,hostname:r}=new URL(t);if(i.startsWith("chrome-extension://")){const u=new URL(i);return u.hostname===""&&r===""?e==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&u.hostname===r}if(!LE.test(e))return!1;if(kE.test(i))return r===i;const s=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const NE=new _o(3e4,6e4);function ud(){const i=ln().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let e=0;e<i.CP.length;e++)i.CP[e]=null}}function ME(i){return new Promise((t,e)=>{var s,a,u;function r(){ud(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ud(),e(Ge(i,"network-request-failed"))},timeout:NE.get()})}if((a=(s=ln().gapi)==null?void 0:s.iframes)!=null&&a.Iframe)t(gapi.iframes.getContext());else if((u=ln().gapi)!=null&&u.load)r();else{const f=PT("iframefcb");return ln()[f]=()=>{gapi.load?r():e(Ge(i,"network-request-failed"))},Op(`${AT()}?onload=${f}`).catch(p=>e(p))}}).catch(t=>{throw va=null,t})}let va=null;function OE(i){return va=va||ME(i),va}/**
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
 */const VE=new _o(5e3,15e3),FE="__/auth/iframe",UE="emulator/auth/iframe",BE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(i){const t=i.config;tt(t.authDomain,i,"auth-domain-config-required");const e=t.emulator?uu(t,UE):`https://${i.config.authDomain}/${FE}`,r={apiKey:t.apiKey,appName:i.name,v:Jr},s=zE.get(i.config.apiHost);s&&(r.eid=s);const a=i._getFrameworks();return a.length&&(r.fw=a.join(",")),`${e}?${oo(r).slice(1)}`}async function $E(i){const t=await OE(i),e=ln().gapi;return tt(e,i,"internal-error"),t.open({where:document.body,url:qE(i),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BE,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Ge(i,"network-request-failed"),f=ln().setTimeout(()=>{a(u)},VE.get());function p(){ln().clearTimeout(f),s(r)}r.ping(p).then(p,()=>{a(u)})}))}/**
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
 */const jE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HE=500,WE=600,GE="_blank",ZE="http://localhost";class hd{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KE(i,t,e,r=HE,s=WE){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const p={...jE,width:r.toString(),height:s.toString(),top:a,left:u},g=le().toLowerCase();e&&(f=Rp(g)?GE:e),Sp(g)&&(t=t||ZE,p.scrollbars="yes");const y=Object.entries(p).reduce((E,[S,M])=>`${E}${S}=${M},`,"");if(_T(g)&&f!=="_self")return QE(t||"",f),new hd(null);const w=window.open(t||"",f,y);tt(w,i,"popup-blocked");try{w.focus()}catch{}return new hd(w)}function QE(i,t){const e=document.createElement("a");e.href=i,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const JE="__/auth/handler",YE="emulator/auth/handler",XE=encodeURIComponent("fac");async function dd(i,t,e,r,s,a){tt(i.config.authDomain,i,"auth-domain-config-required"),tt(i.config.apiKey,i,"invalid-api-key");const u={apiKey:i.config.apiKey,appName:i.name,authType:e,redirectUrl:r,v:Jr,eventId:s};if(t instanceof mu){t.setDefaultLanguage(i.languageCode),u.providerId=t.providerId||"",f_(t.getCustomParameters())||(u.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,w]of Object.entries({}))u[y]=w}if(t instanceof yo){const y=t.getScopes().filter(w=>w!=="");y.length>0&&(u.scopes=y.join(","))}i.tenantId&&(u.tid=i.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const p=await i._getAppCheckToken(),g=p?`#${XE}=${encodeURIComponent(p)}`:"";return`${tI(i)}?${oo(f).slice(1)}${g}`}function tI({config:i}){return i.emulator?uu(i,YE):`https://${i.authDomain}/${JE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hp,this._completeRedirectFn=AE,this._overrideRedirectResult=EE}async _openPopup(t,e,r,s){var u;Vn((u=this.eventManagers[t._key()])==null?void 0:u.manager,"_initialize() not called before _openPopup()");const a=await dd(t,e,r,ul(),s);return KE(t,a,_u())}async _openRedirect(t,e,r,s){await this._originValidation(t);const a=await dd(t,e,r,ul(),s);return rE(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:s,promise:a}=this.eventManagers[e];return s?Promise.resolve(s):(Vn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await $E(t),r=new SE(t);return e.register("authEvent",s=>(tt(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Oc,{type:Oc},s=>{var u;const a=(u=s==null?void 0:s[0])==null?void 0:u[Oc];a!==void 0&&e(!!a),Fe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=xE(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Np()||Cp()||du()}}const nI=eI;var fd="@firebase/auth",pd="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(i){jr(new Wi("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=r.options;tt(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:u,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(i)},g=new ET(r,s,a,p);return xT(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),jr(new Wi("auth-internal",t=>{const e=wi(t.getProvider("auth").getImmediate());return(r=>new iI(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),ii(fd,pd,rI(i)),ii(fd,pd,"esm2020")}/**
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
 */const oI=5*60,aI=Ld("authIdTokenMaxAge")||oI;let md=null;const cI=i=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>aI)return;const s=e==null?void 0:e.token;md!==s&&(md=s,await fetch(i,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lI(i=Od()){const t=vl(i,"auth");if(t.isInitialized())return t.getImmediate();const e=LT(i,{popupRedirectResolver:nI,persistence:[fE,eE,Hp]}),r=Ld("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=cI(a.toString());QT(e,u,()=>u(e.currentUser)),KT(e,f=>u(f))}}const s=Rd("auth");return s&&DT(e,`http://${s}`),e}function uI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}IT({loadJS(i){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",i),r.onload=t,r.onerror=s=>{const a=Ge("internal-error");a.customData=s,e(a)},r.type="text/javascript",r.charset="UTF-8",uI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");const Xp={apiKey:"AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",authDomain:"trippy-planner-807df.firebaseapp.com",projectId:"trippy-planner-807df",storageBucket:"trippy-planner-807df.firebasestorage.app",messagingSenderId:"376063703433",appId:"1:376063703433:web:..."},tm=!!Xp.apiKey;let em=null,nm=null;function hI(){if(!tm)return!1;try{const i=Md(Xp);return em=xw(i),nm=lI(i),!0}catch(i){return console.warn("Firebase init failed — running in guest mode",i),!1}}const im=()=>tm,qt=()=>em,wo=()=>nm;let Gs=null;function dI(i){if(!im()){i(null);return}const t=wo();if(!t){i(null);return}JT(t,e=>{Gs=e,i(e)})}const lc=()=>Gs;async function fI(){return yE(wo(),new An)}async function pI(i,t){return ZT(wo(),i,t)}async function mI(i,t){return GT(wo(),i,t)}async function _I(){return YT(wo())}function uc(i){const t=i.querySelector(".auth-slot");if(t){if(!im()){t.innerHTML='<span class="auth-guest-note">Guest mode</span>';return}if(Gs){const e=Gs.displayName||Gs.email||"User";t.innerHTML=`
      <span class="auth-user-name">${gI(e)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `,t.querySelector(".auth-signout-btn").addEventListener("click",()=>_I())}else t.innerHTML='<button class="ghost-btn auth-signin-btn">Sign in</button>',t.querySelector(".auth-signin-btn").addEventListener("click",()=>yI())}}function gI(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function yI(){const i=document.getElementById("auth-modal");if(i){i.remove();return}const t=document.createElement("div");t.id="auth-modal",t.className="auth-modal-overlay",t.innerHTML=`
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
  `,document.body.appendChild(t);const e=r=>{t.querySelector("#auth-err").textContent=r};t.querySelector("#auth-close").addEventListener("click",()=>t.remove()),t.addEventListener("click",r=>{r.target===t&&t.remove()}),t.querySelector("#auth-google").addEventListener("click",async()=>{try{await fI(),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-signin").addEventListener("click",async()=>{try{await pI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}}),t.querySelector("#auth-create").addEventListener("click",async()=>{try{await mI(t.querySelector("#auth-email").value,t.querySelector("#auth-pass").value),t.remove()}catch(r){e(r.message)}})}let wa={};function vI(i){return wa=i,window.addEventListener("hashchange",Vc),{start:Vc,refresh:Vc}}function xn(i){window.location.hash=i}function Vc(){const i=window.location.hash.slice(1)||"/";for(const[t,e]of Object.entries(wa)){const r=wI(t,i);if(r!==null){e(r);return}}wa["/"]&&wa["/"]({})}function wI(i,t){if(i==="/")return t==="/"||t===""?{}:null;const e=i.split("/").filter(Boolean),r=t.split("/").filter(Boolean);if(e.length!==r.length)return null;const s={};for(let a=0;a<e.length;a++)if(e[a].startsWith(":"))s[e[a].slice(1)]=decodeURIComponent(r[a]);else if(e[a]!==r[a])return null;return s}function _d(i,t){var e;return!t||!i?null:i.ownerId===t?"owner":((e=i.members)==null?void 0:e[t])||null}const hc=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),TI=()=>Math.random().toString(36).slice(2,9).toUpperCase(),EI=()=>({id:hc(),date:"",destination:"",event:"",travelDay:!1,accommodation:"",accomCost:0,travelDetails:"",travelCost:0,finalised:!1}),rm="trippy-planner-trips",yu=i=>`trippy-trip-${i}`,$r=()=>{try{return JSON.parse(localStorage.getItem(rm)||"[]")}catch{return[]}},sm=i=>{try{localStorage.setItem(rm,JSON.stringify(i))}catch{}},oi=i=>{try{return JSON.parse(localStorage.getItem(yu(i))||"null")}catch{return null}},Hi=i=>{try{localStorage.setItem(yu(i.id),JSON.stringify(i))}catch{}},II=i=>{try{localStorage.removeItem(yu(i))}catch{}};function gd(i){return i?typeof(i==null?void 0:i.toMillis)=="function"?i.toMillis():typeof i=="number"?i:0:0}function qa(i){return{memberUids:[],members:{},ownerName:"",sharedWithFriends:!0,...i,createdAt:gd(i.createdAt),updatedAt:gd(i.updatedAt)}}function bI(i,t,e){let r=[],s=[],a=null,u=null;function f(){const w=[...r];for(const M of s)w.find(F=>F.id===M.id)||w.push(M);w.forEach(M=>Hi(M));const E=new Set(w.map(M=>M.id)),S=$r().filter(M=>!E.has(M.id)&&!!oi(M.id));sm([...w.map(({id:M,name:F,createdAt:B})=>({id:M,name:F,createdAt:B})),...S]),e([...w])}function p(w){a&&(a(),a=null),u&&(u(),u=null);const E=qt();if(!E||!w)return;const S=Na(eo(E,"trips"),no("ownerId","==",w),jw("updatedAt","desc"));a=Ma(S,F=>{const B=F.docs.map(H=>qa({id:H.id,...H.data()})),j=r.filter(H=>!B.find(W=>W.id===H.id));r=[...B,...j],f()},F=>console.warn("Firestore owned trips:",F));const M=Na(eo(E,"trips"),no("memberUids","array-contains",w));u=Ma(M,F=>{s=F.docs.map(B=>qa({id:B.id,...B.data()})),f()},F=>console.warn("Firestore shared trips:",F))}async function g(w){const E=qt();if(!(!E||!i))try{await er(Jt(E,"trips",w.id),{...w,createdAt:w.createdAt||kn(),updatedAt:kn()},{merge:!0})}catch(S){console.warn("Firestore write:",S)}}const y=$r().map(w=>oi(w.id)||{...w,days:[]});return r=y,setTimeout(()=>e([...y]),0),i&&p(i),{getAll:()=>{const w=[...r];for(const E of s)w.find(S=>S.id===E.id)||w.push(E);return w},async create(w){const E=hc(),S={id:E,name:w,ownerId:i||null,ownerName:t||"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]};return r.unshift(S),Hi(S),f(),await g(S),E},async delete(w){r=r.filter(S=>S.id!==w),s=s.filter(S=>S.id!==w),II(w),f();const E=qt();if(E&&i)try{await Zw(Jt(E,"trips",w))}catch{}},async rename(w,E){const S=this.getAll().find(F=>F.id===w);if(!S)return;S.name=E,S.updatedAt=Date.now(),Hi(S),e([...this.getAll()]);const M=qt();if(M&&i)try{await nr(Jt(M,"trips",w),{name:E,updatedAt:kn()})}catch{}},setUserId(w,E){i=w,t=E||"",w?p(w):(a&&(a(),a=null),u&&(u(),u=null),r=$r().map(S=>oi(S.id)||{...S,days:[]}),s=[],e([...r]))},destroy(){a&&(a(),a=null),u&&(u(),u=null)}}}function yd(i){return i.map(t=>`${t.id}|${t.date}|${t.destination}|${t.event}|${t.accommodation}|${t.accomCost}|${t.travelDetails}|${t.travelCost}|${t.travelDay}|${t.finalised}`).join("~")}function om(i,t,e){let r=oi(i)||{id:i,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=Array.isArray(r.days)?r.days:[],a=null,u=null,f=!1;function p(){r.days=s,r.updatedAt=Date.now(),Hi(r)}function g(){clearTimeout(u),f=!0,u=setTimeout(async()=>{const E=qt();if(!E||!t){f=!1;return}try{await er(Jt(E,"trips",i),{...r,days:s,updatedAt:kn()},{merge:!0})}catch(S){console.warn("Firestore write:",S)}setTimeout(()=>{f=!1},3e3)},1500)}function y(){p(),t&&g(),e([...s])}function w(){p(),t&&g()}if(t){const E=qt();E&&(a=Ma(Jt(E,"trips",i),S=>{if(!S.exists()||f)return;const M=S.data(),F=Array.isArray(M.days)?M.days:[];yd(F)!==yd(s)&&(r=qa({id:i,...M}),s=F,p(),e([...s]))},S=>console.warn("Firestore trip:",S)))}return{tripName:()=>r.name||"Trip",tripData:()=>({...r}),getAll:()=>[...s],add(E,S){const M={...EI(),date:E,destination:S};s.push(M),s.sort((F,B)=>F.date.localeCompare(B.date)),y()},update(E,S,M){const F=s.find(B=>B.id===E);F&&(F[S]=M,w())},remove(E){s=s.filter(S=>S.id!==E),y()},loadFromCSV(E){s=E,y()},toCSV(){const E=["Date","Destination","Event","Travel Day","Accommodation","Accom Cost","Travel Details","Travel Cost","Finalised"],S=s.map(M=>[M.date,M.destination,M.event,M.travelDay?"Y":"N",M.accommodation,M.accomCost,M.travelDetails,M.travelCost,M.finalised?"Y":"N"].map(F=>`"${(F??"").toString().replace(/"/g,'""')}"`).join(","));return[E.join(","),...S].join(`
`)},metrics(){const E=s.length,S=s.filter(B=>B.travelDay).length,M=s.filter(B=>B.finalised).length,F=s.reduce((B,j)=>B+Number(j.accomCost||0)+Number(j.travelCost||0),0);return{total:E,travelDays:S,finalised:M,cost:F}},destroy(){clearTimeout(u),a&&(a(),a=null)}}}async function AI(i,t,e){const r=qt();if(!r||!e)throw new Error("Must be signed in to share");const s=TI();return await er(Jt(r,"invites",s),{tripId:i,role:t,createdBy:e,createdAt:kn()}),s}async function PI(i,t){const e=qt();if(!e)throw new Error("Firebase not configured");const r=await Gw(Jt(e,"invites",i));if(!r.exists())throw new Error("Invite not found or already used");const{tripId:s,role:a}=r.data();return await nr(Jt(e,"trips",s),{[`members.${t}`]:a,memberUids:fp(t)}),s}async function SI(i,t,e){const r=qt();r&&await nr(Jt(r,"trips",i),{[`members.${t}`]:e})}async function CI(i,t){const e=qt();e&&await nr(Jt(e,"trips",i),{[`members.${t}`]:dp(),memberUids:pp(t)})}async function am(i,t,e){const r=oi(t)||{id:t,name:"Trip",ownerId:null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:[]},s=[...r.days,...i.map(u=>({...u,id:hc()}))].sort((u,f)=>u.date.localeCompare(f.date));r.days=s,r.updatedAt=Date.now(),Hi(r);const a=qt();if(a&&e)try{await nr(Jt(a,"trips",t),{days:s,updatedAt:kn()})}catch(u){console.warn("copyDaysToTrip Firestore:",u)}}async function RI(i,t){const e=`trippy-migrated-v2-${i}`;if(localStorage.getItem(e))return;const r=qt();if(!r){localStorage.setItem(e,"1");return}try{const s=await ou(eo(r,"users",i,"trips"));if(s.empty){localStorage.setItem(e,"1");return}for(const a of s.docs){const u=a.data();await er(Jt(r,"trips",a.id),{...u,id:a.id,ownerId:i,ownerName:t||"",memberUids:u.memberUids||[],members:u.members||{}},{merge:!0})}localStorage.setItem(e,"1")}catch(s){console.warn("Old-path migration failed:",s)}}function kI(){try{const i=localStorage.getItem("trippy-planner-data");if(!i)return null;const t=JSON.parse(i);return!Array.isArray(t)||t.length===0?(localStorage.removeItem("trippy-planner-data"),null):t}catch{return null}}function LI(i,t,e){const r=hc(),s={id:r,name:i,ownerId:e||null,ownerName:"",memberUids:[],members:{},createdAt:Date.now(),updatedAt:Date.now(),days:t};Hi(s);const a=$r();a.unshift({id:r,name:i,createdAt:s.createdAt}),sm(a),localStorage.removeItem("trippy-planner-data");const u=qt();return u&&e&&er(Jt(u,"trips",r),{...s,createdAt:kn(),updatedAt:kn()}).catch(console.warn),r}async function xI(i,t,e){const r=qt();r&&await er(Jt(r,"users",i),{uid:i,displayName:t||"",email:(e||"").toLowerCase(),updatedAt:kn()},{merge:!0})}async function DI(i){const t=qt();if(!t)return null;const e=await ou(Na(eo(t,"users"),no("email","==",i.toLowerCase().trim())));return e.empty?null:e.docs[0].data()}function NI(i,t){const e=qt();return e?Ma(Jt(e,"users",i),r=>{if(!r.exists()){t({friends:[],friendProfiles:{}});return}t(r.data())}):(t({friends:[],friendProfiles:{}}),()=>{})}async function MI(i,t){const e=qt();e&&await er(Jt(e,"users",i),{friends:fp(t.uid),[`friendProfiles.${t.uid}`]:{displayName:t.displayName||"",email:t.email||""}},{merge:!0})}async function OI(i,t){const e=qt();e&&await nr(Jt(e,"users",i),{friends:pp(t),[`friendProfiles.${t}`]:dp()})}async function VI(i){const t=qt();if(!t)return[];try{return(await ou(Na(eo(t,"trips"),no("ownerId","==",i),no("sharedWithFriends","==",!0)))).docs.map(r=>qa({id:r.id,...r.data()}))}catch(e){return console.warn("getFriendTrips:",e),[]}}async function FI(i,t){const e=oi(i);e&&(e.sharedWithFriends=t,Hi(e));const r=qt();if(r)try{await nr(Jt(r,"trips",i),{sharedWithFriends:t})}catch(s){console.warn("updateTripVisibility:",s)}}const UI=["January","February","March","April","May","June","July","August","September","October","November","December"],BI=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function Fc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;")}function Or(i,t,e,r,s={}){const a=i.querySelector(s.title||"#cal-title"),u=i.querySelector(s.header||"#cal-days-header"),f=i.querySelector(s.body||"#cal-body");if(!a||!u||!f)return;a.textContent=`${UI[r]} ${e}`,u.innerHTML=BI.map(S=>`<div class="cal-header-cell">${S}</div>`).join("");const p={};t.forEach(S=>{S.date&&(p[S.date]=S)});const g=new Date(e,r,1).getDay(),y=new Date(e,r+1,0).getDate(),w=new Date;let E="";for(let S=0;S<g;S++)E+='<div class="cal-cell empty"></div>';for(let S=1;S<=y;S++){const M=`${e}-${String(r+1).padStart(2,"0")}-${String(S).padStart(2,"0")}`,F=w.getFullYear()===e&&w.getMonth()===r&&w.getDate()===S,B=p[M];let j="cal-cell";F?j+=" today":B&&(j+=" has-trip");let H=`<div class="cal-date-num${F?" today-num":""}">${S}</div>`;B&&(H+=`<div class="cal-dest">${Fc(B.destination)}</div>`,B.event&&(H+=`<div class="cal-note">${Fc(B.event)}</div>`),B.travelDetails&&(H+=`<div class="cal-travel-note">${Fc(B.travelDetails)}</div>`)),E+=`<div class="${j}">${H}</div>`}f.innerHTML=E}function cm(i,t,e){var y;(y=document.getElementById("share-modal-overlay"))==null||y.remove();const r=t.members||{},s=t.memberUids||[],a=t.ownerId===e,u=r[e]||null,f=Object.entries(r).map(([w,E])=>`
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
            <div id="share-members-list">${f}</div>
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
  `,document.body.appendChild(p);const g=()=>p.remove();document.getElementById("share-close-btn").addEventListener("click",g),p.addEventListener("click",w=>{w.target===p&&g()}),a&&(document.getElementById("gen-link-btn").addEventListener("click",async()=>{const w=document.getElementById("gen-link-btn");w.textContent="Generating…",w.disabled=!0;try{const E=document.getElementById("invite-role").value,S=await AI(i,E,e),M=`${location.origin}${location.pathname}#/join/${S}`;document.getElementById("invite-link-input").value=M,document.getElementById("copy-link-btn").style.display=""}catch(E){alert("Failed to generate invite link: "+E.message)}finally{w.textContent="Generate",w.disabled=!1}}),document.getElementById("copy-link-btn").addEventListener("click",()=>{const w=document.getElementById("invite-link-input").value;navigator.clipboard.writeText(w).then(()=>{const E=document.getElementById("copy-link-btn");E.textContent="Copied!",setTimeout(()=>{E.textContent="Copy"},2e3)})}),p.addEventListener("change",async w=>{if(!w.target.matches(".share-role-select"))return;const E=w.target.dataset.uid;try{await SI(i,E,w.target.value)}catch(S){console.warn("Role update failed:",S)}}),p.addEventListener("click",async w=>{if(!w.target.matches(".share-remove-btn"))return;const E=w.target.dataset.uid;if(confirm("Remove this collaborator from the trip?"))try{await CI(i,E),w.target.closest(".share-member-row").remove()}catch(S){console.warn("Remove member failed:",S)}}))}function zI(i,t,e){var f;(f=document.getElementById("add-day-overlay"))==null||f.remove();const r=$r().map(p=>oi(p.id)).filter(Boolean).filter(p=>p.id!==t&&(!p.ownerId||p.ownerId===e)),s=r.length?r.map(p=>`<option value="${p.id}">${ti(p.name)}</option>`).join(""):"<option disabled>No own trips — create one first</option>",a=document.createElement("div");a.className="modal-overlay",a.id="add-day-overlay",a.style.display="flex",a.innerHTML=`
    <div class="modal-box add-day-box">
      <div class="modal-title">Add Day to My Trip</div>
      <div class="add-day-preview">
        <div class="add-day-date">${lm(i.date)}</div>
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
  `,document.body.appendChild(a);const u=()=>a.remove();document.getElementById("add-day-cancel").addEventListener("click",u),a.addEventListener("click",p=>{p.target===a&&u()}),document.getElementById("add-day-confirm").addEventListener("click",async()=>{var w;const p=document.getElementById("add-day-target").value,g=((w=r.find(E=>E.id===p))==null?void 0:w.name)||"trip",y=document.getElementById("add-day-confirm");y.textContent="Adding…",y.disabled=!0;try{await am([i],p,e),u(),qI(`Day added to "${g}"`)}catch(E){alert("Could not add day: "+E.message),y.textContent="Add Day",y.disabled=!1}})}function qI(i){const t=document.createElement("div");t.className="toast-success",t.textContent=i,document.body.appendChild(t),setTimeout(()=>t.remove(),2800)}function $I(i,t,e){var g;(g=document.getElementById("copy-days-overlay"))==null||g.remove();const r=$r().map(y=>oi(y.id)).filter(Boolean),s=e?r.filter(y=>y.id!==i&&(y.ownerId===e||!y.ownerId)):r.filter(y=>y.id!==i),a=s.length?s.map(y=>`<option value="${y.id}">${ti(y.name)}</option>`).join(""):"<option disabled>No own trips found — create one first</option>",u=t.map((y,w)=>`
    <label class="copy-day-row">
      <input type="checkbox" class="copy-day-check" value="${w}">
      <span class="copy-day-date">${lm(y.date)}</span>
      <span class="copy-day-dest">${ti(y.destination||"Unknown")}</span>
      ${y.event?`<span class="copy-day-event">${ti(y.event)}</span>`:""}
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
  `,document.body.appendChild(f);const p=()=>f.remove();document.getElementById("copy-cancel-btn").addEventListener("click",p),f.addEventListener("click",y=>{y.target===f&&p()}),document.getElementById("copy-select-all").addEventListener("click",()=>{f.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!0})}),document.getElementById("copy-select-none").addEventListener("click",()=>{f.querySelectorAll(".copy-day-check").forEach(y=>{y.checked=!1})}),document.getElementById("copy-confirm-btn").addEventListener("click",async()=>{const y=[...f.querySelectorAll(".copy-day-check:checked")];if(!y.length){alert("Select at least one day.");return}const w=y.map(M=>t[Number(M.value)]),E=document.getElementById("copy-target-trip").value,S=document.getElementById("copy-confirm-btn");S.textContent="Copying…",S.disabled=!0;try{await am(w,E,e),p(),alert(`${w.length} day${w.length!==1?"s":""} copied successfully.`)}catch(M){console.warn("Copy failed:",M),alert("Copy failed: "+M.message),S.textContent="Copy selected",S.disabled=!1}})}function ti(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function lm(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}let aa=null;const jI={title:"#fl-cal-title",header:"#fl-cal-header",body:"#fl-cal-body"};function HI(i,t){if(!t)return i.innerHTML=`
      <div class="empty-state" style="margin-top:60px">
        <div class="empty-icon">👥</div>
        <p>Sign in to use Trippy Friends.</p>
      </div>`,()=>{};let e=[],r=null,s=[],a=new Date().getFullYear(),u=new Date().getMonth();i.innerHTML=`
    <div class="friends-layout">

      <div class="friends-panel">
        <div class="friends-search-row">
          <input class="dark-input friends-email-input" id="fl-email"
            type="email" placeholder="Add friend by email">
          <button class="add-btn" id="fl-add-btn">Add</button>
        </div>
        <div id="fl-status" class="fl-status"></div>
        <div id="fl-list"   class="fl-list"></div>
      </div>

      <div class="friends-cal-panel">
        <div class="friends-cal-placeholder" id="fl-placeholder">
          <div class="empty-icon">👥</div>
          <p>Select a friend to view their calendar</p>
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
  `;function f(){i.querySelector("#fl-placeholder").style.display="",i.querySelector("#fl-cal-view").style.display="none"}function p(){const j=s.flatMap(H=>(H.days||[]).map(W=>({...W,_tripName:H.name}))).sort((H,W)=>H.date.localeCompare(W.date));Or(i,j,a,u,jI)}async function g(j){if(r=j,aa=(j==null?void 0:j.uid)||null,!j){f();return}i.querySelector("#fl-placeholder").style.display="none",i.querySelector("#fl-cal-view").style.display="",i.querySelector("#fl-cal-name").textContent=j.displayName||j.email,s=await VI(j.uid),p()}function y(){const j=i.querySelector("#fl-list");if(!e.length){j.innerHTML='<p class="fl-empty">No friends yet — add one above.</p>';return}j.innerHTML=e.map(H=>`
      <div class="fl-friend-item ${(r==null?void 0:r.uid)===H.uid?"selected":""}"
           data-fuid="${H.uid}">
        <div class="fl-friend-info">
          <div class="fl-friend-name">${vd(H.displayName||H.email)}</div>
          <div class="fl-friend-email">${vd(H.email)}</div>
        </div>
        <button class="fl-remove-btn" data-fuid="${H.uid}" title="Remove friend">×</button>
      </div>
    `).join(""),j.querySelectorAll(".fl-friend-item").forEach(H=>{H.addEventListener("click",W=>{if(W.target.closest(".fl-remove-btn"))return;const ct=e.find(lt=>lt.uid===H.dataset.fuid)||null;y(),g(ct)})}),j.querySelectorAll(".fl-remove-btn").forEach(H=>{H.addEventListener("click",async()=>{const W=H.dataset.fuid;(r==null?void 0:r.uid)===W&&(r=null,aa=null,f()),await OI(t,W)})})}const w=i.querySelector("#fl-email"),E=i.querySelector("#fl-add-btn"),S=i.querySelector("#fl-status");function M(j,H){S.textContent=j,S.className=`fl-status ${H?"error":"success"}`}async function F(){const j=w.value.trim();if(j){E.disabled=!0,E.textContent="…",S.textContent="";try{const H=await DI(j);H?H.uid===t?M("You can't add yourself.",!0):e.some(W=>W.uid===H.uid)?M("Already in your list.",!0):(await MI(t,H),w.value="",M(`${H.displayName||H.email} added!`,!1)):M("No user found with that email.",!0)}catch{M("Something went wrong.",!0)}finally{E.disabled=!1,E.textContent="Add"}}}return E.addEventListener("click",F),w.addEventListener("keydown",j=>{j.key==="Enter"&&F()}),i.querySelector("#fl-prev").addEventListener("click",()=>{u--,u<0&&(u=11,a--),r&&p()}),i.querySelector("#fl-next").addEventListener("click",()=>{u++,u>11&&(u=0,a++),r&&p()}),NI(t,j=>{const H=j.friends||[],W=j.friendProfiles||{};e=H.map(lt=>{var At,R;return{uid:lt,displayName:((At=W[lt])==null?void 0:At.displayName)||"",email:((R=W[lt])==null?void 0:R.email)||""}});const ct=aa?e.find(lt=>lt.uid===aa):null;ct&&!r&&g(ct),y()})}function vd(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}let Ie=null,Ae=null,sn="all",fe="trips",pl=new Date().getFullYear(),Bi=new Date().getMonth();function um(i){const t=lc(),e=(t==null?void 0:t.uid)||null,r=(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"";Ie&&(Ie.destroy(),Ie=null),Ie=bI(e,r,s=>{const a=window.location.hash;if(a!=="#/"&&a!=="#"&&a!==""){Ae==null||Ae(),Ae=null,Ie==null||Ie.destroy(),Ie=null;return}hm(i,s,e)})}function hm(i,t,e){var p,g,y,w;Ae==null||Ae(),Ae=null;const r=kI(),s=GI(t,e);i.innerHTML=`
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
          <p>${ZI()}</p>
        </div>
      `:`
        <div class="landing-grid" id="trips-grid">
          ${s.map(E=>WI(E,e)).join("")}
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
  `,uc(i),i.querySelectorAll("[data-ltab]").forEach(E=>{E.addEventListener("click",()=>{fe=E.dataset.ltab,i.querySelector("#lv-trips").style.display=fe==="trips"?"":"none",i.querySelector("#lv-calendar").style.display=fe==="calendar"?"":"none",i.querySelector("#lv-friends").style.display=fe==="friends"?"":"none",i.querySelectorAll(".landing-tab").forEach(S=>S.classList.toggle("active",S.dataset.ltab===fe)),fe==="calendar"&&ca(i,t,e),fe==="friends"&&wd(i,e)})}),fe==="calendar"&&ca(i,t,e),fe==="friends"&&wd(i,e),(p=i.querySelector("#cal-prev"))==null||p.addEventListener("click",()=>{Bi--,Bi<0&&(Bi=11,pl--),ca(i,t,e)}),(g=i.querySelector("#cal-next"))==null||g.addEventListener("click",()=>{Bi++,Bi>11&&(Bi=0,pl++),ca(i,t,e)}),r&&(i.querySelector("#mig-save").addEventListener("click",()=>{const E=i.querySelector("#mig-name").value.trim()||"My Trip";LI(E,r,e),um(i)}),i.querySelector("#mig-skip").addEventListener("click",()=>{localStorage.removeItem("trippy-planner-data"),i.querySelector("#mig-banner").remove()})),i.querySelectorAll(".filter-tab").forEach(E=>{E.addEventListener("click",()=>{sn=E.dataset.filter,hm(i,Ie.getAll(),e)})});const a=i.querySelector("#new-trip-modal"),u=i.querySelector("#trip-name-input");(y=i.querySelector("#new-trip-btn"))==null||y.addEventListener("click",()=>{a.style.display="flex",u.focus()}),i.querySelector("#modal-cancel").addEventListener("click",()=>{a.style.display="none",u.value=""}),a.addEventListener("click",E=>{E.target===a&&(a.style.display="none",u.value="")});async function f(){const E=u.value.trim();if(!E){u.focus();return}a.style.display="none",u.value="";const S=await Ie.create(E);xn(`/trip/${S}`)}i.querySelector("#modal-create").addEventListener("click",f),u.addEventListener("keydown",E=>{E.key==="Enter"&&f(),E.key==="Escape"&&(a.style.display="none",u.value="")}),(w=i.querySelector("#trips-grid"))==null||w.addEventListener("click",async E=>{const S=E.target.closest("[data-trip-id]");if(!S)return;const M=S.dataset.tripId,F=Ie.getAll().find(B=>B.id===M);if(E.target.closest(".vis-btn")){const B=E.target.closest(".vis-btn"),j=B.classList.contains("vis-on");if(!(!e||!(F!=null&&F.ownerId)||F.ownerId===e))return;B.classList.toggle("vis-on",!j),B.classList.toggle("vis-off",j),B.title=j?"Hidden from friends — click to show":"Visible to friends — click to hide",FI(M,!j);return}if(E.target.closest(".trip-open-btn"))xn(`/trip/${M}`);else if(E.target.closest(".trip-globe-btn"))xn(`/globe/${M}`);else if(E.target.closest(".trip-share-btn")){if(!e){alert("Sign in to share trips.");return}cm(M,F,e)}else if(E.target.closest(".trip-delete-btn"))confirm("Delete this trip? This cannot be undone.")&&await Ie.delete(M);else if(E.target.closest(".trip-card-title")){if(!(!e||!(F!=null&&F.ownerId)||F.ownerId===e))return;const j=E.target.closest(".trip-card-title"),H=j.textContent.trim(),W=document.createElement("input");W.className="dark-input trip-rename-input",W.value=H,j.replaceWith(W),W.focus(),W.select();const ct=async()=>{const lt=W.value.trim()||H;await Ie.rename(M,lt)};W.addEventListener("blur",ct),W.addEventListener("keydown",lt=>{lt.key==="Enter"&&W.blur()})}})}function wd(i,t){Ae==null||Ae(),Ae=null;const e=i.querySelector("#lv-friends");e&&(Ae=HI(e,t))}function ca(i,t,e){const r=e?t.filter(u=>!u.ownerId||u.ownerId===e):t,s=new Set,a=r.flatMap(u=>(u.days||[]).map(f=>({...f,_tripName:u.name}))).filter(u=>!u.date||s.has(u.date)?!1:(s.add(u.date),!0)).sort((u,f)=>u.date.localeCompare(f.date));Or(i,a,pl,Bi)}function WI(i,t){var F;const e=i.days||[],{total:r,finalised:s,cost:a}=KI(e),u=r?Math.round(s/r*100):0,f=e.length?`${Td(e[0].date)} – ${Td(e[e.length-1].date)}`:"No days yet",p=[...new Set(e.map(B=>B.destination).filter(Boolean))],g=p.slice(0,3),y=!t||!i.ownerId||i.ownerId===t,w=i.ownerId&&t&&i.ownerId!==t?((F=i.members)==null?void 0:F[t])||"viewer":null,E=(i.memberUids||[]).length,S=i.sharedWithFriends!==!1,M=ml(i);return`
    <div class="trip-card ${w?"trip-card-shared":""} ${M?"trip-card-past":""}" data-trip-id="${i.id}">
      ${y&&t?`
        <button class="vis-btn ${S?"vis-on":"vis-off"}"
          title="${S?"Visible to friends — click to hide":"Hidden from friends — click to show"}">👁</button>
      `:""}
      <div class="trip-card-top">
        <div class="trip-card-title-row">
          <div class="trip-card-title">${Uc(i.name)}</div>
          ${w?`<span class="role-badge role-${w}">${w}</span>`:""}
          ${y&&E>0?`<span class="collab-count" title="${E} collaborator${E!==1?"s":""}">👥 ${E}</span>`:""}
        </div>
        <div class="trip-card-meta">
          ${w?`<span class="trip-card-owner">by ${Uc(i.ownerName||"Unknown")}</span>`:""}
          <span class="trip-card-range">${f}</span>
        </div>
      </div>
      ${g.length?`
        <div class="trip-card-dests">
          ${g.map(B=>`<span class="dest-tag">${Uc(B)}</span>`).join("")}
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
  `}function ml(i){const t=(i.days||[]).map(r=>r.date).filter(Boolean).sort();if(!t.length)return!1;const e=new Date().toISOString().slice(0,10);return t[t.length-1]<e}function GI(i,t){if(sn==="past")return i.filter(r=>ml(r));const e=i.filter(r=>!ml(r));return sn==="mine"?e.filter(r=>!t||!r.ownerId||r.ownerId===t):sn==="shared"?e.filter(r=>t&&r.ownerId&&r.ownerId!==t):e}function ZI(){return sn==="past"?"No past trips yet.":sn==="shared"?"No trips have been shared with you yet.":"No trips yet — create your first one above."}function KI(i){return{total:i.length,finalised:i.filter(t=>t.finalised).length,cost:i.reduce((t,e)=>t+Number(e.accomCost||0)+Number(e.travelCost||0),0)}}function Td(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short",year:"numeric"})}function Uc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const Ed=["January","February","March","April","May","June","July","August","September","October","November","December"],QI=["Su","Mo","Tu","We","Th","Fr","Sa"];class JI{constructor(t,e,r){this.wrap=t,this.input=e,this.onSelect=r,this.selected=null;const s=new Date;this.year=s.getFullYear(),this.month=s.getMonth(),this._dropdown=null,this._open=!1}init(){this._dropdown=document.createElement("div"),this._dropdown.className="date-picker-dropdown",this._dropdown.innerHTML=`
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `,this.wrap.appendChild(this._dropdown),this.input.addEventListener("click",()=>this.toggle()),this._dropdown.querySelector("#dp-prev").addEventListener("click",()=>this.navigate(-1)),this._dropdown.querySelector("#dp-next").addEventListener("click",()=>this.navigate(1)),document.addEventListener("click",t=>{this.wrap.contains(t.target)||this.close()}),this.render()}toggle(){this._open?this.close():this.open()}open(){this._open=!0,this._dropdown.style.display="block",this.render()}close(){this._open=!1,this._dropdown.style.display="none"}navigate(t){this.month+=t,this.month<0&&(this.month=11,this.year--),this.month>11&&(this.month=0,this.year++),this.render()}render(){const t=this._dropdown.querySelector("#dp-month-label"),e=this._dropdown.querySelector("#dp-grid");t.textContent=`${Ed[this.month]} ${this.year}`;const r=new Date(this.year,this.month,1).getDay(),s=new Date(this.year,this.month+1,0).getDate(),a=new Date;let u=QI.map(f=>`<div class="dp-dh">${f}</div>`).join("");for(let f=0;f<r;f++)u+='<button class="dp-day empty" disabled></button>';for(let f=1;f<=s;f++){const p=this.dateString(this.year,this.month+1,f),g=this.selected===p,y=a.getFullYear()===this.year&&a.getMonth()===this.month&&a.getDate()===f;let w="dp-day";g?w+=" selected":y&&(w+=" today"),u+=`<button class="${w}" data-date="${p}">${f}</button>`}e.innerHTML=u,e.querySelectorAll(".dp-day:not(.empty)").forEach(f=>{f.addEventListener("click",()=>{this.selected=f.dataset.date,this.input.value=this.formatDisplay(this.selected),this.close(),this.onSelect(this.selected)})})}dateString(t,e,r){return`${t}-${String(e).padStart(2,"0")}-${String(r).padStart(2,"0")}`}formatDisplay(t){const[e,r,s]=t.split("-");return`${s} ${Ed[parseInt(r)-1]} ${e}`}reset(){this.selected=null,this.input.value=""}}const YI=["January","February","March","April","May","June","July","August","September","October","November","December"];function XI(i){if(!i)return"";const[t,e,r]=i.split("-");return`${r} ${YI[parseInt(e)-1]} ${t}`}function la(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function tb(i,t,e,r,s,a={}){const u=e.metrics(),f=i.querySelector("#metrics-row");f&&(f.style.display=t.length?"grid":"none",i.querySelector("#m-days").textContent=u.total,i.querySelector("#m-travel").textContent=u.travelDays,i.querySelector("#m-cost").textContent="$"+Number(u.cost).toLocaleString("en-AU",{minimumFractionDigits:2,maximumFractionDigits:2}));const p=i.querySelector("#progress-wrap");if(p)if(t.length){p.style.display="block";const y=u.total?Math.round(u.finalised/u.total*100):0;i.querySelector("#progress-fill").style.width=y+"%",i.querySelector("#progress-count").textContent=`${u.finalised} / ${u.total} days finalised`}else p.style.display="none";const g=i.querySelector("#itinerary-list");if(g){if(t.length===0){g.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;return}g.innerHTML=t.map(y=>{const w=r===y.id,E=y.finalised?'<span class="day-badge badge-final">Finalised</span>':y.travelDay?'<span class="day-badge badge-travel">Travel</span>':'<span class="day-badge badge-pending">Pending</span>',S=w?`
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${y.id}" data-field="event"
              value="${la(y.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${y.id}" data-field="accommodation"
              value="${la(y.accommodation)}" placeholder="Hotel / Airbnb name">
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
              value="${la(y.travelDetails)}" placeholder="Flight / train / driving info">
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
          <div class="day-date">${XI(y.date)}</div>
          <div class="day-dest">${la(y.destination)}</div>
          ${E}
          <span class="chevron${w?" open":""}">&#9654;</span>
          ${a.onAddDay?`<button class="add-to-my-trip-btn" data-addday="${y.id}" title="Add this day to one of your trips">＋ Add</button>`:""}
        </div>
        ${S}
      </div>`}).join(""),g.querySelectorAll("[data-toggle]").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.toggle;s(r===w?null:w)})}),a.onAddDay&&g.querySelectorAll("[data-addday]").forEach(y=>{y.addEventListener("click",w=>{w.stopPropagation();const E=t.find(S=>S.id===y.dataset.addday);E&&a.onAddDay(E)})}),g.querySelectorAll("[data-field]").forEach(y=>{const w=()=>{const E=y.type==="checkbox"?y.checked:y.value;e.update(y.dataset.id,y.dataset.field,E)};y.addEventListener(y.type==="checkbox"?"change":"blur",w)}),g.querySelectorAll("[data-delete]").forEach(y=>{y.addEventListener("click",()=>{confirm("Remove this day from your trip?")&&e.remove(y.dataset.delete)})})}}let ee=null;function eb(i,t){ee&&(ee.destroy(),ee=null);const e=lc(),r=(e==null?void 0:e.uid)||null;ee=om(t,r,W=>{f=W,j()});let s=ee.tripData(),a=_d(s,r),u=a==="viewer";i.innerHTML=`
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
  `;let f=ee.getAll(),p=null,g="planner";const y=new Date;let w=y.getFullYear(),E=y.getMonth();i.querySelector("#trip-name-label").textContent=ee.tripName(),uc(i);function S(){s=ee.tripData(),a=_d(s,r),u=a==="viewer";const W=i.querySelector("#share-trip-btn"),ct=i.querySelector("#copy-days-btn");a==="owner"&&r?(W.style.display="",ct.style.display="none"):a==="viewer"?(W.style.display="none",ct.style.display=""):a==="editor"&&(W.style.display="none",ct.style.display="none")}S(),i.querySelector("#back-btn").addEventListener("click",()=>xn("/")),i.querySelector("#globe-nav-btn").addEventListener("click",()=>xn(`/globe/${t}`)),i.querySelector("#share-trip-btn").addEventListener("click",()=>{cm(t,ee.tripData(),r)}),i.querySelector("#copy-days-btn").addEventListener("click",()=>{$I(t,ee.getAll(),r)});let M=null,F=null;if(!u){let At=function(){const R=lt.value.trim();if(!M||!R){ct.style.borderColor=M?"":"var(--accent)",lt.style.borderColor=R?"":"var(--accent)";return}ct.style.borderColor="",lt.style.borderColor="",ee.add(M,R),M=null,F.reset(),lt.value="",lt.focus()};var H=At;const W=i.querySelector("#dp-wrap"),ct=i.querySelector("#new-date-display");F=new JI(W,ct,R=>{M=R}),F.init();const lt=i.querySelector("#new-dest");i.querySelector("#add-btn").addEventListener("click",At),lt.addEventListener("keydown",R=>{R.key==="Enter"&&At()}),i.querySelector("#download-btn").addEventListener("click",()=>{const R=new Blob([ee.toCSV()],{type:"text/csv"}),I=document.createElement("a");I.href=URL.createObjectURL(R),I.download=`${ee.tripName().replace(/\s+/g,"_")}.csv`,I.click(),URL.revokeObjectURL(I.href)}),i.querySelector("#upload-btn").addEventListener("click",()=>{i.querySelector("#upload-input").click()}),i.querySelector("#upload-input").addEventListener("change",R=>{const I=R.target.files[0];if(!I)return;const P=new FileReader;P.onload=k=>{const x=k.target.result.trim().split(`
`).slice(1).map(b=>{const $t=(b.match(/(".*?"|[^,]+)/g)||[]).map(Yt=>Yt.replace(/^"|"$/g,"").replace(/""/g,'"'));return{id:Date.now().toString(36)+Math.random().toString(36).slice(2),date:$t[0]||"",destination:$t[1]||"",event:$t[2]||"",travelDay:$t[3]==="Y",accommodation:$t[4]||"",accomCost:parseFloat($t[5])||0,travelDetails:$t[6]||"",travelCost:parseFloat($t[7])||0,finalised:$t[8]==="Y"}}).filter(b=>b.date&&b.destination);ee.loadFromCSV(x)},P.readAsText(I),R.target.value=""})}i.querySelectorAll(".tab").forEach(W=>{W.addEventListener("click",()=>{g=W.dataset.tab,i.querySelectorAll(".tab").forEach(ct=>ct.classList.toggle("active",ct.dataset.tab===g)),i.querySelector("#tab-planner").style.display=g==="planner"?"":"none",i.querySelector("#tab-calendar").style.display=g==="calendar"?"":"none",g==="calendar"&&Or(i,f,w,E)})}),i.querySelector("#cal-prev").addEventListener("click",()=>{E--,E<0&&(E=11,w--),Or(i,f,w,E)}),i.querySelector("#cal-next").addEventListener("click",()=>{E++,E>11&&(E=0,w++),Or(i,f,w,E)});function B(){return u?new Proxy(ee,{get(W,ct){return["add","update","remove","loadFromCSV"].includes(ct)?()=>{}:W[ct]}}):ee}function j(){S(),i.querySelector("#trip-name-label").textContent=ee.tripName();const W=r&&a!=="owner"?{onAddDay:ct=>zI(ct,t,r)}:{};tb(i,f,B(),p,ct=>{p=ct,j()},W),g==="calendar"&&Or(i,f,w,E)}j()}var nb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ib(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var _l={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(i,t){(function(e,r){r(t)})(nb,function(e){var r="1.9.4";function s(n){var o,l,h,m;for(l=1,h=arguments.length;l<h;l++){m=arguments[l];for(o in m)n[o]=m[o]}return n}var a=Object.create||function(){function n(){}return function(o){return n.prototype=o,new n}}();function u(n,o){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var h=l.call(arguments,2);return function(){return n.apply(o,h.length?h.concat(l.call(arguments)):arguments)}}var f=0;function p(n){return"_leaflet_id"in n||(n._leaflet_id=++f),n._leaflet_id}function g(n,o,l){var h,m,v,A;return A=function(){h=!1,m&&(v.apply(l,m),m=!1)},v=function(){h?m=arguments:(n.apply(l,arguments),setTimeout(A,o),h=!0)},v}function y(n,o,l){var h=o[1],m=o[0],v=h-m;return n===h&&l?n:((n-m)%v+v)%v+m}function w(){return!1}function E(n,o){if(o===!1)return n;var l=Math.pow(10,o===void 0?6:o);return Math.round(n*l)/l}function S(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function M(n){return S(n).split(/\s+/)}function F(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in o)n.options[l]=o[l];return n.options}function B(n,o,l){var h=[];for(var m in n)h.push(encodeURIComponent(l?m.toUpperCase():m)+"="+encodeURIComponent(n[m]));return(!o||o.indexOf("?")===-1?"?":"&")+h.join("&")}var j=/\{ *([\w_ -]+) *\}/g;function H(n,o){return n.replace(j,function(l,h){var m=o[h];if(m===void 0)throw new Error("No value provided for variable "+l);return typeof m=="function"&&(m=m(o)),m})}var W=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function ct(n,o){for(var l=0;l<n.length;l++)if(n[l]===o)return l;return-1}var lt="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function At(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var R=0;function I(n){var o=+new Date,l=Math.max(0,16-(o-R));return R=o+l,window.setTimeout(n,l)}var P=window.requestAnimationFrame||At("RequestAnimationFrame")||I,k=window.cancelAnimationFrame||At("CancelAnimationFrame")||At("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function C(n,o,l){if(l&&P===I)n.call(o);else return P.call(window,u(n,o))}function x(n){n&&k.call(window,n)}var b={__proto__:null,extend:s,create:a,bind:u,get lastId(){return f},stamp:p,throttle:g,wrapNum:y,falseFn:w,formatNum:E,trim:S,splitWords:M,setOptions:F,getParamString:B,template:H,isArray:W,indexOf:ct,emptyImageUrl:lt,requestFn:P,cancelFn:k,requestAnimFrame:C,cancelAnimFrame:x};function Rt(){}Rt.extend=function(n){var o=function(){F(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,h=a(l);h.constructor=o,o.prototype=h;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(o[m]=this[m]);return n.statics&&s(o,n.statics),n.includes&&($t(n.includes),s.apply(null,[h].concat(n.includes))),s(h,n),delete h.statics,delete h.includes,h.options&&(h.options=l.options?a(l.options):{},s(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,A=h._initHooks.length;v<A;v++)h._initHooks[v].call(this)}},o},Rt.include=function(n){var o=this.prototype.options;return s(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},Rt.mergeOptions=function(n){return s(this.prototype.options,n),this},Rt.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function $t(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=W(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Yt={on:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o);else{n=M(n);for(var m=0,v=n.length;m<v;m++)this._on(n[m],o,l)}return this},off:function(n,o,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],o);else{n=M(n);for(var m=arguments.length===1,v=0,A=n.length;v<A;v++)m?this._off(n[v]):this._off(n[v],o,l)}return this},_on:function(n,o,l,h){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,l)===!1){l===this&&(l=void 0);var m={fn:o,ctx:l};h&&(m.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(m)}},_off:function(n,o,l){var h,m,v;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(m=0,v=h.length;m<v;m++)h[m].fn=w;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var A=this._listens(n,o,l);if(A!==!1){var N=h[A];this._firingCount&&(N.fn=w,this._events[n]=h=h.slice()),h.splice(A,1)}}},fire:function(n,o,l){if(!this.listens(n,l))return this;var h=s({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var m=this._events[n];if(m){this._firingCount=this._firingCount+1||1;for(var v=0,A=m.length;v<A;v++){var N=m[v],V=N.fn;N.once&&this.off(n,V,N.ctx),V.call(N.ctx||this,h)}this._firingCount--}}return l&&this._propagateEvent(h),this},listens:function(n,o,l,h){typeof n!="string"&&console.warn('"string" type argument expected');var m=o;typeof o!="function"&&(h=!!o,m=void 0,l=void 0);var v=this._events&&this._events[n];if(v&&v.length&&this._listens(n,m,l)!==!1)return!0;if(h){for(var A in this._eventParents)if(this._eventParents[A].listens(n,o,l,h))return!0}return!1},_listens:function(n,o,l){if(!this._events)return!1;var h=this._events[n]||[];if(!o)return!!h.length;l===this&&(l=void 0);for(var m=0,v=h.length;m<v;m++)if(h[m].fn===o&&h[m].ctx===l)return m;return!1},once:function(n,o,l){if(typeof n=="object")for(var h in n)this._on(h,n[h],o,!0);else{n=M(n);for(var m=0,v=n.length;m<v;m++)this._on(n[m],o,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[p(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[p(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,s({layer:n.target,propagatedFrom:n.target},n),!0)}};Yt.addEventListener=Yt.on,Yt.removeEventListener=Yt.clearAllEventListeners=Yt.off,Yt.addOneTimeEventListener=Yt.once,Yt.fireEvent=Yt.fire,Yt.hasEventListeners=Yt.listens;var Ti=Rt.extend(Yt);function nt(n,o,l){this.x=l?Math.round(n):n,this.y=l?Math.round(o):o}var Ei=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};nt.prototype={clone:function(){return new nt(this.x,this.y)},add:function(n){return this.clone()._add(it(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(it(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new nt(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new nt(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Ei(this.x),this.y=Ei(this.y),this},distanceTo:function(n){n=it(n);var o=n.x-this.x,l=n.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(n){return n=it(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=it(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+E(this.x)+", "+E(this.y)+")"}};function it(n,o,l){return n instanceof nt?n:W(n)?new nt(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new nt(n.x,n.y):new nt(n,o,l)}function Pt(n,o){if(n)for(var l=o?[n,o]:n,h=0,m=l.length;h<m;h++)this.extend(l[h])}Pt.prototype={extend:function(n){var o,l;if(!n)return this;if(n instanceof nt||typeof n[0]=="number"||"x"in n)o=l=it(n);else if(n=Xt(n),o=n.min,l=n.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return it((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return it(this.min.x,this.max.y)},getTopRight:function(){return it(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,l;return typeof n[0]=="number"||n instanceof nt?n=it(n):n=Xt(n),n instanceof Pt?(o=n.min,l=n.max):o=l=n,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=Xt(n);var o=this.min,l=this.max,h=n.min,m=n.max,v=m.x>=o.x&&h.x<=l.x,A=m.y>=o.y&&h.y<=l.y;return v&&A},overlaps:function(n){n=Xt(n);var o=this.min,l=this.max,h=n.min,m=n.max,v=m.x>o.x&&h.x<l.x,A=m.y>o.y&&h.y<l.y;return v&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,l=this.max,h=Math.abs(o.x-l.x)*n,m=Math.abs(o.y-l.y)*n;return Xt(it(o.x-h,o.y-m),it(l.x+h,l.y+m))},equals:function(n){return n?(n=Xt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Xt(n,o){return!n||n instanceof Pt?n:new Pt(n,o)}function te(n,o){if(n)for(var l=o?[n,o]:n,h=0,m=l.length;h<m;h++)this.extend(l[h])}te.prototype={extend:function(n){var o=this._southWest,l=this._northEast,h,m;if(n instanceof yt)h=n,m=n;else if(n instanceof te){if(h=n._southWest,m=n._northEast,!h||!m)return this}else return n?this.extend(ut(n)||kt(n)):this;return!o&&!l?(this._southWest=new yt(h.lat,h.lng),this._northEast=new yt(m.lat,m.lng)):(o.lat=Math.min(h.lat,o.lat),o.lng=Math.min(h.lng,o.lng),l.lat=Math.max(m.lat,l.lat),l.lng=Math.max(m.lng,l.lng)),this},pad:function(n){var o=this._southWest,l=this._northEast,h=Math.abs(o.lat-l.lat)*n,m=Math.abs(o.lng-l.lng)*n;return new te(new yt(o.lat-h,o.lng-m),new yt(l.lat+h,l.lng+m))},getCenter:function(){return new yt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new yt(this.getNorth(),this.getWest())},getSouthEast:function(){return new yt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof yt||"lat"in n?n=ut(n):n=kt(n);var o=this._southWest,l=this._northEast,h,m;return n instanceof te?(h=n.getSouthWest(),m=n.getNorthEast()):h=m=n,h.lat>=o.lat&&m.lat<=l.lat&&h.lng>=o.lng&&m.lng<=l.lng},intersects:function(n){n=kt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),m=n.getNorthEast(),v=m.lat>=o.lat&&h.lat<=l.lat,A=m.lng>=o.lng&&h.lng<=l.lng;return v&&A},overlaps:function(n){n=kt(n);var o=this._southWest,l=this._northEast,h=n.getSouthWest(),m=n.getNorthEast(),v=m.lat>o.lat&&h.lat<l.lat,A=m.lng>o.lng&&h.lng<l.lng;return v&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=kt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function kt(n,o){return n instanceof te?n:new te(n,o)}function yt(n,o,l){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,l!==void 0&&(this.alt=+l)}yt.prototype={equals:function(n,o){if(!n)return!1;n=ut(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+E(this.lat,n)+", "+E(this.lng,n)+")"},distanceTo:function(n){return Ce.distance(this,ut(n))},wrap:function(){return Ce.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,l=o/Math.cos(Math.PI/180*this.lat);return kt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new yt(this.lat,this.lng,this.alt)}};function ut(n,o,l){return n instanceof yt?n:W(n)&&typeof n[0]!="object"?n.length===3?new yt(n[0],n[1],n[2]):n.length===2?new yt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new yt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new yt(n,o,l)}var we={latLngToPoint:function(n,o){var l=this.projection.project(n),h=this.scale(o);return this.transformation._transform(l,h)},pointToLatLng:function(n,o){var l=this.scale(o),h=this.transformation.untransform(n,l);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(n),h=this.transformation.transform(o.min,l),m=this.transformation.transform(o.max,l);return new Pt(h,m)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?y(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?y(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new yt(l,o,h)},wrapLatLngBounds:function(n){var o=n.getCenter(),l=this.wrapLatLng(o),h=o.lat-l.lat,m=o.lng-l.lng;if(h===0&&m===0)return n;var v=n.getSouthWest(),A=n.getNorthEast(),N=new yt(v.lat-h,v.lng-m),V=new yt(A.lat-h,A.lng-m);return new te(N,V)}},Ce=s({},we,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var l=Math.PI/180,h=n.lat*l,m=o.lat*l,v=Math.sin((o.lat-n.lat)*l/2),A=Math.sin((o.lng-n.lng)*l/2),N=v*v+Math.cos(h)*Math.cos(m)*A*A,V=2*Math.atan2(Math.sqrt(N),Math.sqrt(1-N));return this.R*V}}),ss=6378137,os={R:ss,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,l=this.MAX_LATITUDE,h=Math.max(Math.min(l,n.lat),-l),m=Math.sin(h*o);return new nt(this.R*n.lng*o,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(n){var o=180/Math.PI;return new yt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:function(){var n=ss*Math.PI;return new Pt([-n,-n],[n,n])}()};function as(n,o,l,h){if(W(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=l,this._d=h}as.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new nt((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function Un(n,o,l,h){return new as(n,o,l,h)}var Ii=s({},Ce,{code:"EPSG:3857",projection:os,transformation:function(){var n=.5/(Math.PI*os.R);return Un(n,.5,-n,.5)}()}),To=s({},Ii,{code:"EPSG:900913"});function Eo(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ir(n,o){var l="",h,m,v,A,N,V;for(h=0,v=n.length;h<v;h++){for(N=n[h],m=0,A=N.length;m<A;m++)V=N[m],l+=(m?"L":"M")+V.x+" "+V.y;l+=o?J.svg?"z":"x":""}return l||"M0 0"}var bi=document.documentElement.style,Ai="ActiveXObject"in window,Wt=Ai&&!document.addEventListener,Gt="msLaunchUri"in navigator&&!("documentMode"in document),Bn=pe("webkit"),Io=pe("android"),cs=pe("android 2")||pe("android 3"),dc=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Pi=Io&&pe("Google")&&dc<537&&!("AudioNode"in window),rr=!!window.opera,ls=!Gt&&pe("chrome"),sr=pe("gecko")&&!Bn&&!rr&&!Ai,fc=!ls&&pe("safari"),bo=pe("phantom"),us="OTransition"in bi,Ao=navigator.platform.indexOf("Win")===0,zn=Ai&&"transition"in bi,Si="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!cs,or="MozPerspective"in bi,dn=!window.L_DISABLE_3D&&(zn||Si||or)&&!us&&!bo,qn=typeof orientation<"u"||pe("mobile"),ar=qn&&Bn,Po=qn&&Si,$n=!window.PointerEvent&&window.MSPointerEvent,hs=!!(window.PointerEvent||$n),Zt="ontouchstart"in window||!!window.TouchEvent,So=!window.L_NO_TOUCH&&(Zt||hs),Ci=qn&&rr,Ri=qn&&sr,pc=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,mc=function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",w,o),window.removeEventListener("testPassiveEventSupport",w,o)}catch{}return n}(),jn=function(){return!!document.createElement("canvas").getContext}(),ds=!!(document.createElementNS&&Eo("svg").createSVGRect),_c=!!ds&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),cr=!ds&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}}(),Co=navigator.platform.indexOf("Mac")===0,Ro=navigator.platform.indexOf("Linux")===0;function pe(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var J={ie:Ai,ielt9:Wt,edge:Gt,webkit:Bn,android:Io,android23:cs,androidStock:Pi,opera:rr,chrome:ls,gecko:sr,safari:fc,phantom:bo,opera12:us,win:Ao,ie3d:zn,webkit3d:Si,gecko3d:or,any3d:dn,mobile:qn,mobileWebkit:ar,mobileWebkit3d:Po,msPointer:$n,pointer:hs,touch:So,touchNative:Zt,mobileOpera:Ci,mobileGecko:Ri,retina:pc,passiveEvents:mc,canvas:jn,svg:ds,vml:cr,inlineSvg:_c,mac:Co,linux:Ro},ko=J.msPointer?"MSPointerDown":"pointerdown",Ue=J.msPointer?"MSPointerMove":"pointermove",fs=J.msPointer?"MSPointerUp":"pointerup",ps=J.msPointer?"MSPointerCancel":"pointercancel",ki={touchstart:ko,touchmove:Ue,touchend:fs,touchcancel:ps},lr={touchstart:ms,touchmove:Re,touchend:Re,touchcancel:Re},fn={},Lo=!1;function xo(n,o,l){return o==="touchstart"&&Li(),lr[o]?(l=lr[o].bind(this,l),n.addEventListener(ki[o],l,!1),l):(console.warn("wrong event specified:",o),w)}function gc(n,o,l){if(!ki[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(ki[o],l,!1)}function ur(n){fn[n.pointerId]=n}function Do(n){fn[n.pointerId]&&(fn[n.pointerId]=n)}function hr(n){delete fn[n.pointerId]}function Li(){Lo||(document.addEventListener(ko,ur,!0),document.addEventListener(Ue,Do,!0),document.addEventListener(fs,hr,!0),document.addEventListener(ps,hr,!0),Lo=!0)}function Re(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in fn)o.touches.push(fn[l]);o.changedTouches=[o],n(o)}}function ms(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&Vt(o),Re(n,o)}function yc(n){var o={},l,h;for(h in n)l=n[h],o[h]=l&&l.bind?l.bind(n):l;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var No=200;function Mo(n,o){n.addEventListener("dblclick",o);var l=0,h;function m(v){if(v.detail!==1){h=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var A=ws(v);if(!(A.some(function(V){return V instanceof HTMLLabelElement&&V.attributes.for})&&!A.some(function(V){return V instanceof HTMLInputElement||V instanceof HTMLSelectElement}))){var N=Date.now();N-l<=No?(h++,h===2&&o(yc(v))):h=1,l=N}}}return n.addEventListener("click",m),{dblclick:o,simDblclick:m}}function Oo(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var xi=dr(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),pn=dr(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),_s=pn==="webkitTransition"||pn==="OTransition"?pn+"End":"transitionend";function gs(n){return typeof n=="string"?document.getElementById(n):n}function Hn(n,o){var l=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);l=h?h[o]:null}return l==="auto"?null:l}function _t(n,o,l){var h=document.createElement(n);return h.className=o||"",l&&l.appendChild(h),h}function vt(n){var o=n.parentNode;o&&o.removeChild(n)}function ue(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function ke(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function Le(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function Di(n,o){if(n.classList!==void 0)return n.classList.contains(o);var l=Ke(n);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function Q(n,o){if(n.classList!==void 0)for(var l=M(o),h=0,m=l.length;h<m;h++)n.classList.add(l[h]);else if(!Di(n,o)){var v=Ke(n);mn(n,(v?v+" ":"")+o)}}function St(n,o){n.classList!==void 0?n.classList.remove(o):mn(n,S((" "+Ke(n)+" ").replace(" "+o+" "," ")))}function mn(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function Ke(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function me(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&Vo(n,o)}function Vo(n,o){var l=!1,h="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(h)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):n.style.filter+=" progid:"+h+"(opacity="+o+")"}function dr(n){for(var o=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in o)return n[l];return!1}function _n(n,o,l){var h=o||new nt(0,0);n.style[xi]=(J.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(l?" scale("+l+")":"")}function Dt(n,o){n._leaflet_pos=o,J.any3d?_n(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function gn(n){return n._leaflet_pos||new nt(0,0)}var Be,Te,fr;if("onselectstart"in document)Be=function(){rt(window,"selectstart",Vt)},Te=function(){bt(window,"selectstart",Vt)};else{var Wn=dr(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Be=function(){if(Wn){var n=document.documentElement.style;fr=n[Wn],n[Wn]="none"}},Te=function(){Wn&&(document.documentElement.style[Wn]=fr,fr=void 0)}}function pr(){rt(window,"dragstart",Vt)}function mr(){bt(window,"dragstart",Vt)}var Ni,Qe;function ys(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(_r(),Ni=n,Qe=n.style.outlineStyle,n.style.outlineStyle="none",rt(window,"keydown",_r))}function _r(){Ni&&(Ni.style.outlineStyle=Qe,Ni=void 0,Qe=void 0,bt(window,"keydown",_r))}function Fo(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function xe(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var vc={__proto__:null,TRANSFORM:xi,TRANSITION:pn,TRANSITION_END:_s,get:gs,getStyle:Hn,create:_t,remove:vt,empty:ue,toFront:ke,toBack:Le,hasClass:Di,addClass:Q,removeClass:St,setClass:mn,getClass:Ke,setOpacity:me,testProp:dr,setTransform:_n,setPosition:Dt,getPosition:gn,get disableTextSelection(){return Be},get enableTextSelection(){return Te},disableImageDrag:pr,enableImageDrag:mr,preventOutline:ys,restoreOutline:_r,getSizedParentNode:Fo,getScale:xe};function rt(n,o,l,h){if(o&&typeof o=="object")for(var m in o)gr(n,m,o[m],l);else{o=M(o);for(var v=0,A=o.length;v<A;v++)gr(n,o[v],l,h)}return this}var he="_leaflet_events";function bt(n,o,l,h){if(arguments.length===1)Gn(n),delete n[he];else if(o&&typeof o=="object")for(var m in o)Mi(n,m,o[m],l);else if(o=M(o),arguments.length===2)Gn(n,function(N){return ct(o,N)!==-1});else for(var v=0,A=o.length;v<A;v++)Mi(n,o[v],l,h);return this}function Gn(n,o){for(var l in n[he]){var h=l.split(/\d/)[0];(!o||o(h))&&Mi(n,h,null,null,l)}}var yn={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function gr(n,o,l,h){var m=o+p(l)+(h?"_"+p(h):"");if(n[he]&&n[he][m])return this;var v=function(N){return l.call(h||n,N||window.event)},A=v;!J.touchNative&&J.pointer&&o.indexOf("touch")===0?v=xo(n,o,v):J.touch&&o==="dblclick"?v=Mo(n,v):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(yn[o]||o,v,J.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(v=function(N){N=N||window.event,Es(n,N)&&A(N)},n.addEventListener(yn[o],v,!1)):n.addEventListener(o,A,!1):n.attachEvent("on"+o,v),n[he]=n[he]||{},n[he][m]=v}function Mi(n,o,l,h,m){m=m||o+p(l)+(h?"_"+p(h):"");var v=n[he]&&n[he][m];if(!v)return this;!J.touchNative&&J.pointer&&o.indexOf("touch")===0?gc(n,o,v):J.touch&&o==="dblclick"?Oo(n,v):"removeEventListener"in n?n.removeEventListener(yn[o]||o,v,!1):n.detachEvent("on"+o,v),n[he][m]=null}function Tt(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function vs(n){return gr(n,"wheel",Tt),this}function Oi(n){return rt(n,"mousedown touchstart dblclick contextmenu",Tt),n._leaflet_disable_click=!0,this}function Vt(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Je(n){return Vt(n),Tt(n),this}function ws(n){if(n.composedPath)return n.composedPath();for(var o=[],l=n.target;l;)o.push(l),l=l.parentNode;return o}function Vi(n,o){if(!o)return new nt(n.clientX,n.clientY);var l=xe(o),h=l.boundingClientRect;return new nt((n.clientX-h.left)/l.x-o.clientLeft,(n.clientY-h.top)/l.y-o.clientTop)}var Ye=J.linux&&J.chrome?window.devicePixelRatio:J.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Ts(n){return J.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Ye:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Es(n,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var Fi={__proto__:null,on:rt,off:bt,stopPropagation:Tt,disableScrollPropagation:vs,disableClickPropagation:Oi,preventDefault:Vt,stop:Je,getPropagationPath:ws,getMousePosition:Vi,getWheelDelta:Ts,isExternalTarget:Es,addListener:rt,removeListener:bt},Is=Ti.extend({run:function(n,o,l,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=gn(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=C(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var l=this._startPos.add(this._offset.multiplyBy(n));o&&l._round(),Dt(this._el,l),this.fire("step")},_complete:function(){x(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),ht=Ti.extend({options:{crs:Ii,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=F(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(ut(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=pn&&J.any3d&&!J.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),rt(this._proxy,_s,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(ut(n),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=s({animate:l.animate},l.zoom),l.pan=s({animate:l.animate,duration:l.duration},l.pan));var h=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,l.zoom):this._tryAnimatedPan(n,l.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(J.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(J.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,l){var h=this.getZoomScale(o),m=this.getSize().divideBy(2),v=n instanceof nt?n:this.latLngToContainerPoint(n),A=v.subtract(m).multiplyBy(1-1/h),N=this.containerPointToLatLng(m.add(A));return this.setView(N,o,{zoom:l})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():kt(n);var l=it(o.paddingTopLeft||o.padding||[0,0]),h=it(o.paddingBottomRight||o.padding||[0,0]),m=this.getBoundsZoom(n,!1,l.add(h));if(m=typeof o.maxZoom=="number"?Math.min(o.maxZoom,m):m,m===1/0)return{center:n.getCenter(),zoom:m};var v=h.subtract(l).divideBy(2),A=this.project(n.getSouthWest(),m),N=this.project(n.getNorthEast(),m),V=this.unproject(A.add(N).divideBy(2).add(v),m);return{center:V,zoom:m}},fitBounds:function(n,o){if(n=kt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=it(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Is,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Q(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,l){if(l=l||{},l.animate===!1||!J.any3d)return this.setView(n,o,l);this._stop();var h=this.project(this.getCenter()),m=this.project(n),v=this.getSize(),A=this._zoom;n=ut(n),o=o===void 0?A:o;var N=Math.max(v.x,v.y),V=N*this.getZoomScale(A,o),q=m.distanceTo(h)||1,K=1.42,X=K*K;function dt(Ft){var ta=Ft?-1:1,Bm=Ft?V:N,zm=V*V-N*N+ta*X*X*q*q,qm=2*Bm*X*q,bc=zm/qm,Bu=Math.sqrt(bc*bc+1)-bc,$m=Bu<1e-9?-18:Math.log(Bu);return $m}function de(Ft){return(Math.exp(Ft)-Math.exp(-Ft))/2}function Kt(Ft){return(Math.exp(Ft)+Math.exp(-Ft))/2}function Me(Ft){return de(Ft)/Kt(Ft)}var ge=dt(0);function kr(Ft){return N*(Kt(ge)/Kt(ge+K*Ft))}function Om(Ft){return N*(Kt(ge)*Me(ge+K*Ft)-de(ge))/X}function Vm(Ft){return 1-Math.pow(1-Ft,1.5)}var Fm=Date.now(),Fu=(dt(1)-ge)/K,Um=l.duration?1e3*l.duration:1e3*Fu*.8;function Uu(){var Ft=(Date.now()-Fm)/Um,ta=Vm(Ft)*Fu;Ft<=1?(this._flyToFrame=C(Uu,this),this._move(this.unproject(h.add(m.subtract(h).multiplyBy(Om(ta)/q)),A),this.getScaleZoom(N/kr(ta),A),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Uu.call(this),this},flyToBounds:function(n,o){var l=this._getBoundsCenterZoom(n,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(n){return n=kt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var l=this.getCenter(),h=this._limitCenter(l,this._zoom,kt(n));return l.equals(h)||this.panTo(h,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var l=it(o.paddingTopLeft||o.padding||[0,0]),h=it(o.paddingBottomRight||o.padding||[0,0]),m=this.project(this.getCenter()),v=this.project(n),A=this.getPixelBounds(),N=Xt([A.min.add(l),A.max.subtract(h)]),V=N.getSize();if(!N.contains(v)){this._enforcingBounds=!0;var q=v.subtract(N.getCenter()),K=N.extend(v).getSize().subtract(V);m.x+=q.x<0?-K.x:K.x,m.y+=q.y<0?-K.y:K.y,this.panTo(this.unproject(m),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=s({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),h=o.divideBy(2).round(),m=l.divideBy(2).round(),v=h.subtract(m);return!v.x&&!v.y?this:(n.animate&&n.pan?this.panBy(v):(n.pan&&this._rawPanBy(v),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=s({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=u(this._handleGeolocationResponse,this),l=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,n):navigator.geolocation.getCurrentPosition(o,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,l=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,l=n.coords.longitude,h=new yt(o,l),m=h.toBounds(n.coords.accuracy*2),v=this._locateOptions;if(v.setView){var A=this.getBoundsZoom(m);this.setView(h,v.maxZoom?Math.min(A,v.maxZoom):A)}var N={latlng:h,bounds:m,timestamp:n.timestamp};for(var V in n.coords)typeof n.coords[V]=="number"&&(N[V]=n.coords[V]);this.fire("locationfound",N)}},addHandler:function(n,o){if(!o)return this;var l=this[n]=new o(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),vt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(x(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)vt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=_t("div",l,o||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new te(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,l){n=kt(n),l=it(l||[0,0]);var h=this.getZoom()||0,m=this.getMinZoom(),v=this.getMaxZoom(),A=n.getNorthWest(),N=n.getSouthEast(),V=this.getSize().subtract(l),q=Xt(this.project(N,h),this.project(A,h)).getSize(),K=J.any3d?this.options.zoomSnap:1,X=V.x/q.x,dt=V.y/q.y,de=o?Math.max(X,dt):Math.min(X,dt);return h=this.getScaleZoom(de,h),K&&(h=Math.round(h/(K/100))*(K/100),h=o?Math.ceil(h/K)*K:Math.floor(h/K)*K),Math.max(m,Math.min(v,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new nt(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var l=this._getTopLeftPoint(n,o);return new Pt(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(n)/l.scale(o)},getScaleZoom:function(n,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var h=l.zoom(n*l.scale(o));return isNaN(h)?1/0:h},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(ut(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(it(n),o)},layerPointToLatLng:function(n){var o=it(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(ut(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ut(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(kt(n))},distance:function(n,o){return this.options.crs.distance(ut(n),ut(o))},containerPointToLayerPoint:function(n){return it(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return it(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(it(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ut(n)))},mouseEventToContainerPoint:function(n){return Vi(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=gs(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");rt(o,"scroll",this._onScroll,this),this._containerId=p(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&J.any3d,Q(n,"leaflet-container"+(J.touch?" leaflet-touch":"")+(J.retina?" leaflet-retina":"")+(J.ielt9?" leaflet-oldie":"")+(J.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Hn(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Dt(this._mapPane,new nt(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(n.markerPane,"leaflet-zoom-hide"),Q(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,l){Dt(this._mapPane,new nt(0,0));var h=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var m=this._zoom!==o;this._moveStart(m,l)._move(n,o)._moveEnd(m),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,l,h){o===void 0&&(o=this._zoom);var m=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?l&&l.pinch&&this.fire("zoom",l):((m||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return x(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Dt(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[p(this._container)]=this;var o=n?bt:rt;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),J.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){x(this._resizeRequest),this._resizeRequest=C(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var l=[],h,m=o==="mouseout"||o==="mouseover",v=n.target||n.srcElement,A=!1;v;){if(h=this._targets[p(v)],h&&(o==="click"||o==="preclick")&&this._draggableMoved(h)){A=!0;break}if(h&&h.listens(o,!0)&&(m&&!Es(v,n)||(l.push(h),m))||v===this._container)break;v=v.parentNode}return!l.length&&!A&&!m&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var l=n.type;l==="mousedown"&&ys(o),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,l){if(n.type==="click"){var h=s({},n);h.type="preclick",this._fireDOMEvent(h,h.type,l)}var m=this._findEventTargets(n,o);if(l){for(var v=[],A=0;A<l.length;A++)l[A].listens(o,!0)&&v.push(l[A]);m=v.concat(m)}if(m.length){o==="contextmenu"&&Vt(n);var N=m[0],V={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var q=N.getLatLng&&(!N._radius||N._radius<=10);V.containerPoint=q?this.latLngToContainerPoint(N.getLatLng()):this.mouseEventToContainerPoint(n),V.layerPoint=this.containerPointToLayerPoint(V.containerPoint),V.latlng=q?N.getLatLng():this.layerPointToLatLng(V.layerPoint)}for(A=0;A<m.length;A++)if(m[A].fire(o,V,!0),V.originalEvent._stopped||m[A].options.bubblingMouseEvents===!1&&ct(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return gn(this._mapPane)||new nt(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var l=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var l=this.getSize()._divideBy(2);return this.project(n,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return this.project(n,o)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,o,l){var h=this._getNewPixelOrigin(l,o);return Xt([this.project(n.getSouthWest(),o)._subtract(h),this.project(n.getNorthWest(),o)._subtract(h),this.project(n.getSouthEast(),o)._subtract(h),this.project(n.getNorthEast(),o)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,l){if(!l)return n;var h=this.project(n,o),m=this.getSize().divideBy(2),v=new Pt(h.subtract(m),h.add(m)),A=this._getBoundsOffset(v,l,o);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?n:this.unproject(h.add(A),o)},_limitOffset:function(n,o){if(!o)return n;var l=this.getPixelBounds(),h=new Pt(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(h,o))},_getBoundsOffset:function(n,o,l){var h=Xt(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),m=h.min.subtract(n.min),v=h.max.subtract(n.max),A=this._rebound(m.x,-v.x),N=this._rebound(m.y,-v.y);return new nt(A,N)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),l=this.getMaxZoom(),h=J.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(o,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){St(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var l=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var n=this._proxy=_t("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var l=xi,h=this._proxy.style[l];_n(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),h===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){vt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();_n(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(o),m=this._getCenterOffset(n)._divideBy(1-1/h);return l.animate!==!0&&!this.getSize().contains(m)?!1:(C(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,l,h){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&St(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function yr(n,o){return new ht(n,o)}var _e=Rt.extend({options:{position:"topright"},initialize:function(n){F(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),l=this.getPosition(),h=n._controlCorners[l];return Q(o,"leaflet-control"),l.indexOf("bottom")!==-1?h.insertBefore(o,h.firstChild):h.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(vt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Xe=function(n){return new _e(n)};ht.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",l=this._controlContainer=_t("div",o+"control-container",this._container);function h(m,v){var A=o+m+" "+o+v;n[m+v]=_t("div",A,l)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)vt(this._controlCorners[n]);vt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Uo=_e.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,l,h){return l<h?-1:h<l?1:0}},initialize:function(n,o,l){F(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in o)this._addLayer(o[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return _e.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(p(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):St(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return St(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=_t("div",n),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),Oi(o),vs(o);var h=this._section=_t("section",n+"-list");l&&(this._map.on("click",this.collapse,this),rt(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=_t("a",n+"-toggle",o);m.href="#",m.title="Layers",m.setAttribute("role","button"),rt(m,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Vt(v),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=_t("div",n+"-base",h),this._separator=_t("div",n+"-separator",h),this._overlaysList=_t("div",n+"-overlays",h),o.appendChild(h)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&p(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(u(function(h,m){return this.options.sortFunction(h.layer,m.layer,h.name,m.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ue(this._baseLayersList),ue(this._overlaysList),this._layerControlInputs=[];var n,o,l,h,m=0;for(l=0;l<this._layers.length;l++)h=this._layers[l],this._addItem(h),o=o||h.overlay,n=n||!h.overlay,m+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&m>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(p(n.target)),l=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(n,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=l,h.firstChild},_addItem:function(n){var o=document.createElement("label"),l=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=l):h=this._createRadioElement("leaflet-base-layers_"+p(this),l),this._layerControlInputs.push(h),h.layerId=p(n.layer),rt(h,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+n.name;var v=document.createElement("span");o.appendChild(v),v.appendChild(h),v.appendChild(m);var A=n.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,l,h=[],m=[];this._handlingClick=!0;for(var v=n.length-1;v>=0;v--)o=n[v],l=this._getLayer(o.layerId).layer,o.checked?h.push(l):o.checked||m.push(l);for(v=0;v<m.length;v++)this._map.hasLayer(m[v])&&this._map.removeLayer(m[v]);for(v=0;v<h.length;v++)this._map.hasLayer(h[v])||this._map.addLayer(h[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,l,h=this._map.getZoom(),m=n.length-1;m>=0;m--)o=n[m],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&h<l.options.minZoom||l.options.maxZoom!==void 0&&h>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,rt(n,"click",Vt),this.expand();var o=this;setTimeout(function(){bt(n,"click",Vt),o._preventClick=!1})}}),Bo=function(n,o,l){return new Uo(n,o,l)},vn=_e.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",l=_t("div",o+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,l,h,m){var v=_t("a",l,h);return v.innerHTML=n,v.href="#",v.title=o,v.setAttribute("role","button"),v.setAttribute("aria-label",o),Oi(v),rt(v,"click",Je),rt(v,"click",m,this),rt(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";St(this._zoomInButton,o),St(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Q(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Q(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});ht.mergeOptions({zoomControl:!0}),ht.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new vn,this.addControl(this.zoomControl))});var zo=function(n){return new vn(n)},bs=_e.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",l=_t("div",o),h=this.options;return this._addScales(h,o+"-line",l),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,l){n.metric&&(this._mScale=_t("div",o,l)),n.imperial&&(this._iScale=_t("div",o,l))},_update:function(){var n=this._map,o=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/n)},_updateImperial:function(n){var o=n*3.2808399,l,h,m;o>5280?(l=o/5280,h=this._getRoundNum(l),this._updateScale(this._iScale,h+" mi",h/l)):(m=this._getRoundNum(o),this._updateScale(this._iScale,m+" ft",m/o))},_updateScale:function(n,o,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),l=n/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),As=function(n){return new bs(n)},Ps='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',vr=_e.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(J.inlineSvg?Ps+" ":"")+"Leaflet</a>"},initialize:function(n){F(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=_t("div","leaflet-control-attribution"),Oi(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});ht.mergeOptions({attributionControl:!0}),ht.addInitHook(function(){this.options.attributionControl&&new vr().addTo(this)});var wr=function(n){return new vr(n)};_e.Layers=Uo,_e.Zoom=vn,_e.Scale=bs,_e.Attribution=vr,Xe.layers=Bo,Xe.zoom=zo,Xe.scale=As,Xe.attribution=wr;var Ee=Rt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(n,o){return n.addHandler(o,this),this};var qo={Events:Yt},tn=J.touch?"touchstart mousedown":"mousedown",ze=Ti.extend({options:{clickTolerance:3},initialize:function(n,o,l,h){F(this,h),this._element=n,this._dragStartTarget=o||n,this._preventOutline=l},enable:function(){this._enabled||(rt(this._dragStartTarget,tn,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ze._dragging===this&&this.finishDrag(!0),bt(this._dragStartTarget,tn,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Di(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){ze._dragging===this&&this.finishDrag();return}if(!(ze._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(ze._dragging=this,this._preventOutline&&ys(this._element),pr(),Be(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,l=Fo(this._element);this._startPoint=new nt(o.clientX,o.clientY),this._startPos=gn(this._element),this._parentScale=xe(l);var h=n.type==="mousedown";rt(document,h?"mousemove":"touchmove",this._onMove,this),rt(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,l=new nt(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,Vt(n),this._moved||(this.fire("dragstart"),this._moved=!0,Q(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Dt(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){St(document.body,"leaflet-dragging"),this._lastTarget&&(St(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),bt(document,"mousemove touchmove",this._onMove,this),bt(document,"mouseup touchend touchcancel",this._onUp,this),mr(),Te();var o=this._moved&&this._moving;this._moving=!1,ze._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Ss(n,o,l){var h,m=[1,4,2,8],v,A,N,V,q,K,X,dt;for(v=0,K=n.length;v<K;v++)n[v]._code=O(n[v],o);for(N=0;N<4;N++){for(X=m[N],h=[],v=0,K=n.length,A=K-1;v<K;A=v++)V=n[v],q=n[A],V._code&X?q._code&X||(dt=D(q,V,X,o,l),dt._code=O(dt,o),h.push(dt)):(q._code&X&&(dt=D(q,V,X,o,l),dt._code=O(dt,o),h.push(dt)),h.push(V));n=h}return n}function Cs(n,o){var l,h,m,v,A,N,V,q,K;if(!n||n.length===0)throw new Error("latlngs not passed");wt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var X=ut([0,0]),dt=kt(n),de=dt.getNorthWest().distanceTo(dt.getSouthWest())*dt.getNorthEast().distanceTo(dt.getNorthWest());de<1700&&(X=Tr(n));var Kt=n.length,Me=[];for(l=0;l<Kt;l++){var ge=ut(n[l]);Me.push(o.project(ut([ge.lat-X.lat,ge.lng-X.lng])))}for(N=V=q=0,l=0,h=Kt-1;l<Kt;h=l++)m=Me[l],v=Me[h],A=m.y*v.x-v.y*m.x,V+=(m.x+v.x)*A,q+=(m.y+v.y)*A,N+=A*3;N===0?K=Me[0]:K=[V/N,q/N];var kr=o.unproject(it(K));return ut([kr.lat+X.lat,kr.lng+X.lng])}function Tr(n){for(var o=0,l=0,h=0,m=0;m<n.length;m++){var v=ut(n[m]);o+=v.lat,l+=v.lng,h++}return ut([o/h,l/h])}var Er={__proto__:null,clipPolygon:Ss,polygonCenter:Cs,centroid:Tr};function se(n,o){if(!o||!n.length)return n.slice();var l=o*o;return n=d(n,l),n=Zn(n,l),n}function Rs(n,o,l){return Math.sqrt(st(n,o,l,!0))}function $o(n,o,l){return st(n,o,l)}function Zn(n,o){var l=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,m=new h(l);m[0]=m[l-1]=1,c(n,m,o,0,l-1);var v,A=[];for(v=0;v<l;v++)m[v]&&A.push(n[v]);return A}function c(n,o,l,h,m){var v=0,A,N,V;for(N=h+1;N<=m-1;N++)V=st(n[N],n[h],n[m],!0),V>v&&(A=N,v=V);v>l&&(o[A]=1,c(n,o,l,h,A),c(n,o,l,A,m))}function d(n,o){for(var l=[n[0]],h=1,m=0,v=n.length;h<v;h++)$(n[h],n[m])>o&&(l.push(n[h]),m=h);return m<v-1&&l.push(n[v-1]),l}var _;function T(n,o,l,h,m){var v=h?_:O(n,l),A=O(o,l),N,V,q;for(_=A;;){if(!(v|A))return[n,o];if(v&A)return!1;N=v||A,V=D(n,o,N,l,m),q=O(V,l),N===v?(n=V,v=q):(o=V,A=q)}}function D(n,o,l,h,m){var v=o.x-n.x,A=o.y-n.y,N=h.min,V=h.max,q,K;return l&8?(q=n.x+v*(V.y-n.y)/A,K=V.y):l&4?(q=n.x+v*(N.y-n.y)/A,K=N.y):l&2?(q=V.x,K=n.y+A*(V.x-n.x)/v):l&1&&(q=N.x,K=n.y+A*(N.x-n.x)/v),new nt(q,K,m)}function O(n,o){var l=0;return n.x<o.min.x?l|=1:n.x>o.max.x&&(l|=2),n.y<o.min.y?l|=4:n.y>o.max.y&&(l|=8),l}function $(n,o){var l=o.x-n.x,h=o.y-n.y;return l*l+h*h}function st(n,o,l,h){var m=o.x,v=o.y,A=l.x-m,N=l.y-v,V=A*A+N*N,q;return V>0&&(q=((n.x-m)*A+(n.y-v)*N)/V,q>1?(m=l.x,v=l.y):q>0&&(m+=A*q,v+=N*q)),A=n.x-m,N=n.y-v,h?A*A+N*N:new nt(m,v)}function wt(n){return!W(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Et(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),wt(n)}function Mt(n,o){var l,h,m,v,A,N,V,q;if(!n||n.length===0)throw new Error("latlngs not passed");wt(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var K=ut([0,0]),X=kt(n),dt=X.getNorthWest().distanceTo(X.getSouthWest())*X.getNorthEast().distanceTo(X.getNorthWest());dt<1700&&(K=Tr(n));var de=n.length,Kt=[];for(l=0;l<de;l++){var Me=ut(n[l]);Kt.push(o.project(ut([Me.lat-K.lat,Me.lng-K.lng])))}for(l=0,h=0;l<de-1;l++)h+=Kt[l].distanceTo(Kt[l+1])/2;if(h===0)q=Kt[0];else for(l=0,v=0;l<de-1;l++)if(A=Kt[l],N=Kt[l+1],m=A.distanceTo(N),v+=m,v>h){V=(v-h)/m,q=[N.x-V*(N.x-A.x),N.y-V*(N.y-A.y)];break}var ge=o.unproject(it(q));return ut([ge.lat+K.lat,ge.lng+K.lng])}var De={__proto__:null,simplify:se,pointToSegmentDistance:Rs,closestPointOnSegment:$o,clipSegment:T,_getEdgeIntersection:D,_getBitCode:O,_sqClosestPointOnSegment:st,isFlat:wt,_flat:Et,polylineCenter:Mt},qe={project:function(n){return new nt(n.lng,n.lat)},unproject:function(n){return new yt(n.y,n.x)},bounds:new Pt([-180,-90],[180,90])},Ne={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Pt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,l=this.R,h=n.lat*o,m=this.R_MINOR/l,v=Math.sqrt(1-m*m),A=v*Math.sin(h),N=Math.tan(Math.PI/4-h/2)/Math.pow((1-A)/(1+A),v/2);return h=-l*Math.log(Math.max(N,1e-10)),new nt(n.lng*o*l,h)},unproject:function(n){for(var o=180/Math.PI,l=this.R,h=this.R_MINOR/l,m=Math.sqrt(1-h*h),v=Math.exp(-n.y/l),A=Math.PI/2-2*Math.atan(v),N=0,V=.1,q;N<15&&Math.abs(V)>1e-7;N++)q=m*Math.sin(A),q=Math.pow((1-q)/(1+q),m/2),V=Math.PI/2-2*Math.atan(v*q)-A,A+=V;return new yt(A*o,n.x*o/l)}},en={__proto__:null,LonLat:qe,Mercator:Ne,SphericalMercator:os},Ir=s({},Ce,{code:"EPSG:3395",projection:Ne,transformation:function(){var n=.5/(Math.PI*Ne.R);return Un(n,.5,-n,.5)}()}),br=s({},Ce,{code:"EPSG:4326",projection:qe,transformation:Un(1/180,1,-1/180,.5)}),pm=s({},we,{projection:qe,transformation:Un(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var l=o.lng-n.lng,h=o.lat-n.lat;return Math.sqrt(l*l+h*h)},infinite:!0});we.Earth=Ce,we.EPSG3395=Ir,we.EPSG3857=Ii,we.EPSG900913=To,we.EPSG4326=br,we.Simple=pm;var $e=Ti.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[p(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[p(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});ht.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=p(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=p(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return p(n)in this._layers},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},_addLayers:function(n){n=n?W(n)?n:[n]:[];for(var o=0,l=n.length;o<l;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[p(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=p(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,l=this._getZoomSpan();for(var h in this._zoomBoundLayers){var m=this._zoomBoundLayers[h].options;n=m.minZoom===void 0?n:Math.min(n,m.minZoom),o=m.maxZoom===void 0?o:Math.max(o,m.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ar=$e.extend({initialize:function(n,o){F(this,o),this._layers={};var l,h;if(n)for(l=0,h=n.length;l<h;l++)this.addLayer(n[l])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),l,h;for(l in this._layers)h=this._layers[l],h[n]&&h[n].apply(h,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return p(n)}}),mm=function(n,o){return new Ar(n,o)},wn=Ar.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Ar.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Ar.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new te;for(var o in this._layers){var l=this._layers[o];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),_m=function(n,o){return new wn(n,o)},Pr=Rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){F(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,o){var l=this.options,h=l[o+"Size"];typeof h=="number"&&(h=[h,h]);var m=it(h),v=it(o==="shadow"&&l.shadowAnchor||l.iconAnchor||m&&m.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(l.className||""),v&&(n.style.marginLeft=-v.x+"px",n.style.marginTop=-v.y+"px"),m&&(n.style.width=m.x+"px",n.style.height=m.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return J.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function gm(n){return new Pr(n)}var ks=Pr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof ks.imagePath!="string"&&(ks.imagePath=this._detectIconPath()),(this.options.imagePath||ks.imagePath)+Pr.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(l,h,m){var v=h.exec(l);return v&&v[m]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=_t("div","leaflet-default-icon-path",document.body),o=Hn(n,"background-image")||Hn(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),vu=Ee.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new ze(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&St(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,l=o._map,h=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,v=gn(o._icon),A=l.getPixelBounds(),N=l.getPixelOrigin(),V=Xt(A.min._subtract(N).add(m),A.max._subtract(N).subtract(m));if(!V.contains(v)){var q=it((Math.max(V.max.x,v.x)-V.max.x)/(A.max.x-V.max.x)-(Math.min(V.min.x,v.x)-V.min.x)/(A.min.x-V.min.x),(Math.max(V.max.y,v.y)-V.max.y)/(A.max.y-V.max.y)-(Math.min(V.min.y,v.y)-V.min.y)/(A.min.y-V.min.y)).multiplyBy(h);l.panBy(q,{animate:!1}),this._draggable._newPos._add(q),this._draggable._startPos._add(q),Dt(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=C(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(x(this._panRequest),this._panRequest=C(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,l=o._shadow,h=gn(o._icon),m=o._map.layerPointToLatLng(h);l&&Dt(l,h),o._latlng=m,n.latlng=m,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){x(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),jo=$e.extend({options:{icon:new ks,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){F(this,o),this._latlng=ut(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=ut(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),h=!1;l!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),Q(l,o),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&rt(l,"focus",this._panOnFocus,this);var m=n.icon.createShadow(this._shadow),v=!1;m!==this._shadow&&(this._removeShadow(),v=!0),m&&(Q(m,o),m.alt=""),this._shadow=m,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&v&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&bt(this._icon,"focus",this._panOnFocus,this),vt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&vt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Dt(this._icon,n),this._shadow&&Dt(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),vu)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new vu(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&me(this._icon,n),this._shadow&&me(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,l=o.iconSize?it(o.iconSize):it(0,0),h=o.iconAnchor?it(o.iconAnchor):it(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:l.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ym(n,o){return new jo(n,o)}var Kn=$e.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return F(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ho=Kn.extend({options:{fill:!0,radius:10},initialize:function(n,o){F(this,o),this._latlng=ut(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=ut(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return Kn.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,l=this._clickTolerance(),h=[n+l,o+l];this._pxBounds=new Pt(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function vm(n,o){return new Ho(n,o)}var wc=Ho.extend({initialize:function(n,o,l){if(typeof o=="number"&&(o=s({},l,{radius:o})),F(this,o),this._latlng=ut(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new te(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Kn.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,l=this._map,h=l.options.crs;if(h.distance===Ce.distance){var m=Math.PI/180,v=this._mRadius/Ce.R/m,A=l.project([o+v,n]),N=l.project([o-v,n]),V=A.add(N).divideBy(2),q=l.unproject(V).lat,K=Math.acos((Math.cos(v*m)-Math.sin(o*m)*Math.sin(q*m))/(Math.cos(o*m)*Math.cos(q*m)))/m;(isNaN(K)||K===0)&&(K=v/Math.cos(Math.PI/180*o)),this._point=V.subtract(l.getPixelOrigin()),this._radius=isNaN(K)?0:V.x-l.project([q,n-K]).x,this._radiusY=V.y-A.y}else{var X=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(X).x}this._updateBounds()}});function wm(n,o,l){return new wc(n,o,l)}var Tn=Kn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){F(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,l=null,h=st,m,v,A=0,N=this._parts.length;A<N;A++)for(var V=this._parts[A],q=1,K=V.length;q<K;q++){m=V[q-1],v=V[q];var X=h(n,m,v,!0);X<o&&(o=X,l=h(n,m,v))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Mt(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=ut(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new te,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return wt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],l=wt(n),h=0,m=n.length;h<m;h++)l?(o[h]=ut(n[h]),this._bounds.extend(o[h])):o[h]=this._convertLatLngs(n[h]);return o},_project:function(){var n=new Pt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new nt(n,n);this._rawPxBounds&&(this._pxBounds=new Pt([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,l){var h=n[0]instanceof yt,m=n.length,v,A;if(h){for(A=[],v=0;v<m;v++)A[v]=this._map.latLngToLayerPoint(n[v]),l.extend(A[v]);o.push(A)}else for(v=0;v<m;v++)this._projectLatlngs(n[v],o,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,h,m,v,A,N,V;for(l=0,m=0,v=this._rings.length;l<v;l++)for(V=this._rings[l],h=0,A=V.length;h<A-1;h++)N=T(V[h],V[h+1],n,h,!0),N&&(o[m]=o[m]||[],o[m].push(N[0]),(N[1]!==V[h+1]||h===A-2)&&(o[m].push(N[1]),m++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,l=0,h=n.length;l<h;l++)n[l]=se(n[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var l,h,m,v,A,N,V=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,v=this._parts.length;l<v;l++)for(N=this._parts[l],h=0,A=N.length,m=A-1;h<A;m=h++)if(!(!o&&h===0)&&Rs(n,N[m],N[h])<=V)return!0;return!1}});function Tm(n,o){return new Tn(n,o)}Tn._flat=Et;var Sr=Tn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Cs(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=Tn.prototype._convertLatLngs.call(this,n),l=o.length;return l>=2&&o[0]instanceof yt&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(n){Tn.prototype._setLatLngs.call(this,n),wt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return wt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,l=new nt(o,o);if(n=new Pt(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,m=this._rings.length,v;h<m;h++)v=Ss(this._rings[h],n,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,l,h,m,v,A,N,V,q;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(v=0,V=this._parts.length;v<V;v++)for(l=this._parts[v],A=0,q=l.length,N=q-1;A<q;N=A++)h=l[A],m=l[N],h.y>n.y!=m.y>n.y&&n.x<(m.x-h.x)*(n.y-h.y)/(m.y-h.y)+h.x&&(o=!o);return o||Tn.prototype._containsPoint.call(this,n,!0)}});function Em(n,o){return new Sr(n,o)}var En=wn.extend({initialize:function(n,o){F(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=W(n)?n:n.features,l,h,m;if(o){for(l=0,h=o.length;l<h;l++)m=o[l],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var v=this.options;if(v.filter&&!v.filter(n))return this;var A=Wo(n,v);return A?(A.feature=Ko(n),A.defaultOptions=A.options,this.resetStyle(A),v.onEachFeature&&v.onEachFeature(n,A),this.addLayer(A)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=s({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function Wo(n,o){var l=n.type==="Feature"?n.geometry:n,h=l?l.coordinates:null,m=[],v=o&&o.pointToLayer,A=o&&o.coordsToLatLng||Tc,N,V,q,K;if(!h&&!l)return null;switch(l.type){case"Point":return N=A(h),wu(v,n,N,o);case"MultiPoint":for(q=0,K=h.length;q<K;q++)N=A(h[q]),m.push(wu(v,n,N,o));return new wn(m);case"LineString":case"MultiLineString":return V=Go(h,l.type==="LineString"?0:1,A),new Tn(V,o);case"Polygon":case"MultiPolygon":return V=Go(h,l.type==="Polygon"?1:2,A),new Sr(V,o);case"GeometryCollection":for(q=0,K=l.geometries.length;q<K;q++){var X=Wo({geometry:l.geometries[q],type:"Feature",properties:n.properties},o);X&&m.push(X)}return new wn(m);case"FeatureCollection":for(q=0,K=l.features.length;q<K;q++){var dt=Wo(l.features[q],o);dt&&m.push(dt)}return new wn(m);default:throw new Error("Invalid GeoJSON object.")}}function wu(n,o,l,h){return n?n(o,l):new jo(l,h&&h.markersInheritOptions&&h)}function Tc(n){return new yt(n[1],n[0],n[2])}function Go(n,o,l){for(var h=[],m=0,v=n.length,A;m<v;m++)A=o?Go(n[m],o-1,l):(l||Tc)(n[m]),h.push(A);return h}function Ec(n,o){return n=ut(n),n.alt!==void 0?[E(n.lng,o),E(n.lat,o),E(n.alt,o)]:[E(n.lng,o),E(n.lat,o)]}function Zo(n,o,l,h){for(var m=[],v=0,A=n.length;v<A;v++)m.push(o?Zo(n[v],wt(n[v])?0:o-1,l,h):Ec(n[v],h));return!o&&l&&m.length>0&&m.push(m[0].slice()),m}function Cr(n,o){return n.feature?s({},n.feature,{geometry:o}):Ko(o)}function Ko(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Ic={toGeoJSON:function(n){return Cr(this,{type:"Point",coordinates:Ec(this.getLatLng(),n)})}};jo.include(Ic),wc.include(Ic),Ho.include(Ic),Tn.include({toGeoJSON:function(n){var o=!wt(this._latlngs),l=Zo(this._latlngs,o?1:0,!1,n);return Cr(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),Sr.include({toGeoJSON:function(n){var o=!wt(this._latlngs),l=o&&!wt(this._latlngs[0]),h=Zo(this._latlngs,l?2:o?1:0,!0,n);return o||(h=[h]),Cr(this,{type:(l?"Multi":"")+"Polygon",coordinates:h})}}),Ar.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(n).geometry.coordinates)}),Cr(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var l=o==="GeometryCollection",h=[];return this.eachLayer(function(m){if(m.toGeoJSON){var v=m.toGeoJSON(n);if(l)h.push(v.geometry);else{var A=Ko(v);A.type==="FeatureCollection"?h.push.apply(h,A.features):h.push(A)}}}),l?Cr(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Tu(n,o){return new En(n,o)}var Im=Tu,Qo=$e.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,l){this._url=n,this._bounds=kt(o),F(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){vt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&ke(this._image),this},bringToBack:function(){return this._map&&Le(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=kt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:_t("img");if(Q(o,"leaflet-image-layer"),this._zoomAnimated&&Q(o,"leaflet-zoom-animated"),this.options.className&&Q(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onload=u(this.fire,this,"load"),o.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;_n(this._image,l,o)},_reset:function(){var n=this._image,o=new Pt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();Dt(n,o.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){me(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),bm=function(n,o,l){return new Qo(n,o,l)},Eu=Qo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:_t("video");if(Q(o,"leaflet-image-layer"),this._zoomAnimated&&Q(o,"leaflet-zoom-animated"),this.options.className&&Q(o,this.options.className),o.onselectstart=w,o.onmousemove=w,o.onloadeddata=u(this.fire,this,"load"),n){for(var l=o.getElementsByTagName("source"),h=[],m=0;m<l.length;m++)h.push(l[m].src);this._url=l.length>0?h:[o.src];return}W(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var A=_t("source");A.src=this._url[v],o.appendChild(A)}}});function Am(n,o,l){return new Eu(n,o,l)}var Iu=Qo.extend({_initImage:function(){var n=this._image=this._url;Q(n,"leaflet-image-layer"),this._zoomAnimated&&Q(n,"leaflet-zoom-animated"),this.options.className&&Q(n,this.options.className),n.onselectstart=w,n.onmousemove=w}});function Pm(n,o,l){return new Iu(n,o,l)}var nn=$e.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof yt||W(n))?(this._latlng=ut(n),F(this,o)):(F(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&me(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&me(this._container,1),this.bringToFront(),this.options.interactive&&(Q(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(me(this._container,0),this._removeTimeout=setTimeout(u(vt,void 0,this._container),200)):vt(this._container),this.options.interactive&&(St(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ut(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ke(this._container),this},bringToBack:function(){return this._map&&Le(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof wn){o=null;var l=this._source._layers;for(var h in l)if(l[h]._map){o=l[h];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=it(this.options.offset),l=this._getAnchor();this._zoomAnimated?Dt(this._container,n.add(l)):o=o.add(n).add(l);var h=this._containerBottom=-o.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=h+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});ht.include({_initOverlay:function(n,o,l,h){var m=o;return m instanceof n||(m=new n(h).setContent(o)),l&&m.setLatLng(l),m}}),$e.include({_initOverlay:function(n,o,l,h){var m=l;return m instanceof n?(F(m,h),m._source=this):(m=o&&!h?o:new n(h,this),m.setContent(l)),m}});var Jo=nn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,nn.prototype.openOn.call(this,n)},onAdd:function(n){nn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Kn||this._source.on("preclick",Tt))},onRemove:function(n){nn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Kn||this._source.off("preclick",Tt))},getEvents:function(){var n=nn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=_t("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=_t("div",n+"-content-wrapper",o);if(this._contentNode=_t("div",n+"-content",l),Oi(o),vs(this._contentNode),rt(o,"contextmenu",Tt),this._tipContainer=_t("div",n+"-tip-container",o),this._tip=_t("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=_t("a",n+"-close-button",o);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',rt(h,"click",function(m){Vt(m),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var h=n.offsetHeight,m=this.options.maxHeight,v="leaflet-popup-scrolled";m&&h>m?(o.height=m+"px",Q(n,v)):St(n,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();Dt(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(Hn(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,h=this._containerWidth,m=new nt(this._containerLeft,-l-this._containerBottom);m._add(gn(this._container));var v=n.layerPointToContainerPoint(m),A=it(this.options.autoPanPadding),N=it(this.options.autoPanPaddingTopLeft||A),V=it(this.options.autoPanPaddingBottomRight||A),q=n.getSize(),K=0,X=0;v.x+h+V.x>q.x&&(K=v.x+h-q.x+V.x),v.x-K-N.x<0&&(K=v.x-N.x),v.y+l+V.y>q.y&&(X=v.y+l-q.y+V.y),v.y-X-N.y<0&&(X=v.y-N.y),(K||X)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([K,X]))}},_getAnchor:function(){return it(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Sm=function(n,o){return new Jo(n,o)};ht.mergeOptions({closePopupOnClick:!0}),ht.include({openPopup:function(n,o,l){return this._initOverlay(Jo,n,o,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),$e.include({bindPopup:function(n,o){return this._popup=this._initOverlay(Jo,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof wn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Je(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof Kn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var Yo=nn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){nn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){nn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=nn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=_t("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+p(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,l,h=this._map,m=this._container,v=h.latLngToContainerPoint(h.getCenter()),A=h.layerPointToContainerPoint(n),N=this.options.direction,V=m.offsetWidth,q=m.offsetHeight,K=it(this.options.offset),X=this._getAnchor();N==="top"?(o=V/2,l=q):N==="bottom"?(o=V/2,l=0):N==="center"?(o=V/2,l=q/2):N==="right"?(o=0,l=q/2):N==="left"?(o=V,l=q/2):A.x<v.x?(N="right",o=0,l=q/2):(N="left",o=V+(K.x+X.x)*2,l=q/2),n=n.subtract(it(o,l,!0)).add(K).add(X),St(m,"leaflet-tooltip-right"),St(m,"leaflet-tooltip-left"),St(m,"leaflet-tooltip-top"),St(m,"leaflet-tooltip-bottom"),Q(m,"leaflet-tooltip-"+N),Dt(m,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&me(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return it(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Cm=function(n,o){return new Yo(n,o)};ht.include({openTooltip:function(n,o,l){return this._initOverlay(Yo,n,o,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),$e.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Yo,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof wn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(rt(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),rt(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,l,h;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(o)}});var bu=Pr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(ue(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var h=it(l.bgPos);o.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function Rm(n){return new bu(n)}Pr.Default=ks;var Ls=$e.extend({options:{tileSize:256,opacity:1,updateWhenIdle:J.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){F(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),vt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ke(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Le(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=g(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof nt?n:new nt(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,l=-n(-1/0,1/0),h=0,m=o.length,v;h<m;h++)v=o[h].style.zIndex,o[h]!==this._container&&v&&(l=n(l,+v));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!J.ielt9){me(this._container,this.options.opacity);var n=+new Date,o=!1,l=!1;for(var h in this._tiles){var m=this._tiles[h];if(!(!m.current||!m.loaded)){var v=Math.min(1,(n-m.loaded)/200);me(m.el,v),v<1?o=!0:(m.active?l=!0:this._onOpaqueTile(m),m.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(x(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this))}},_onOpaqueTile:w,_initContainer:function(){this._container||(this._container=_t("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=o-Math.abs(n-l),this._onUpdateLevel(l)):(vt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var h=this._levels[n],m=this._map;return h||(h=this._levels[n]={},h.el=_t("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=o,h.origin=m.project(m.unproject(m.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,m.getCenter(),m.getZoom()),w(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:w,_onRemoveLevel:w,_onCreateLevel:w,_pruneTiles:function(){if(this._map){var n,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var h=o.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)vt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,l,h){var m=Math.floor(n/2),v=Math.floor(o/2),A=l-1,N=new nt(+m,+v);N.z=+A;var V=this._tileCoordsToKey(N),q=this._tiles[V];return q&&q.active?(q.retain=!0,!0):(q&&q.loaded&&(q.retain=!0),A>h?this._retainParent(m,v,A,h):!1)},_retainChildren:function(n,o,l,h){for(var m=2*n;m<2*n+2;m++)for(var v=2*o;v<2*o+2;v++){var A=new nt(m,v);A.z=l+1;var N=this._tileCoordsToKey(A),V=this._tiles[N];if(V&&V.active){V.retain=!0;continue}else V&&V.loaded&&(V.retain=!0);l+1<h&&this._retainChildren(m,v,l+1,h)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,l,h){var m=Math.round(o);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var v=this.options.updateWhenZooming&&m!==this._tileZoom;(!h||v)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,o)},_setZoomTransform:function(n,o,l){var h=this._map.getZoomScale(l,n.zoom),m=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(o,l)).round();J.any3d?_n(n.el,m,h):Dt(n.el,m)},_resetGrid:function(){var n=this._map,o=n.options.crs,l=this._tileSize=this.getTileSize(),h=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],h).x/l.x),Math.ceil(n.project([0,o.wrapLng[1]],h).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],h).y/l.x),Math.ceil(n.project([o.wrapLat[1],0],h).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),h=o.getZoomScale(l,this._tileZoom),m=o.project(n,this._tileZoom).floor(),v=o.getSize().divideBy(h*2);return new Pt(m.subtract(v),m.add(v))},_update:function(n){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),m=this._pxBoundsToTileRange(h),v=m.getCenter(),A=[],N=this.options.keepBuffer,V=new Pt(m.getBottomLeft().subtract([N,-N]),m.getTopRight().add([N,-N]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var q in this._tiles){var K=this._tiles[q].coords;(K.z!==this._tileZoom||!V.contains(new nt(K.x,K.y)))&&(this._tiles[q].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var X=m.min.y;X<=m.max.y;X++)for(var dt=m.min.x;dt<=m.max.x;dt++){var de=new nt(dt,X);if(de.z=this._tileZoom,!!this._isValidTile(de)){var Kt=this._tiles[this._tileCoordsToKey(de)];Kt?Kt.current=!0:A.push(de)}}if(A.sort(function(ge,kr){return ge.distanceTo(v)-kr.distanceTo(v)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Me=document.createDocumentFragment();for(dt=0;dt<A.length;dt++)this._addTile(A[dt],Me);this._level.el.appendChild(Me)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!o.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return kt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,l=this.getTileSize(),h=n.scaleBy(l),m=h.add(l),v=o.unproject(h,n.z),A=o.unproject(m,n.z);return[v,A]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),l=new te(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),l=new nt(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(n){var o=this._tiles[n];o&&(vt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Q(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=w,n.onmousemove=w,J.ielt9&&this.options.opacity<1&&me(n,this.options.opacity)},_addTile:function(n,o){var l=this._getTilePos(n),h=this._tileCoordsToKey(n),m=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(m),this.createTile.length<2&&C(u(this._tileReady,this,n,null,m)),Dt(m,l),this._tiles[h]={el:m,coords:n,current:!0},o.appendChild(m),this.fire("tileloadstart",{tile:m,coords:n})},_tileReady:function(n,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:n});var h=this._tileCoordsToKey(n);l=this._tiles[h],l&&(l.loaded=+new Date,this._map._fadeAnimated?(me(l.el,0),x(this._fadeFrame),this._fadeFrame=C(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(Q(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),J.ielt9||!this._map._fadeAnimated?C(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new nt(this._wrapX?y(n.x,this._wrapX):n.x,this._wrapY?y(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new Pt(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function km(n){return new Ls(n)}var Rr=Ls.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=F(this,o),o.detectRetina&&J.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var l=document.createElement("img");return rt(l,"load",u(this._tileOnLoad,this,o,l)),rt(l,"error",u(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var o={r:J.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=l),o["-y"]=l}return H(this._url,s(o,this.options))},_tileOnLoad:function(n,o){J.ielt9?setTimeout(u(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,l){var h=this.options.errorTileUrl;h&&o.getAttribute("src")!==h&&(o.src=h),n(l,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,h=this.options.zoomOffset;return l&&(n=o-n),n+h},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=w,o.onerror=w,!o.complete)){o.src=lt;var l=this._tiles[n].coords;vt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",lt),Ls.prototype._removeTile.call(this,n)},_tileReady:function(n,o,l){if(!(!this._map||l&&l.getAttribute("src")===lt))return Ls.prototype._tileReady.call(this,n,o,l)}});function Au(n,o){return new Rr(n,o)}var Pu=Rr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var l=s({},this.defaultWmsParams);for(var h in o)h in this.options||(l[h]=o[h]);o=F(this,o);var m=o.detectRetina&&J.retina?2:1,v=this.getTileSize();l.width=v.x*m,l.height=v.y*m,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,Rr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),l=this._crs,h=Xt(l.project(o[0]),l.project(o[1])),m=h.min,v=h.max,A=(this._wmsVersion>=1.3&&this._crs===br?[m.y,m.x,v.y,v.x]:[m.x,m.y,v.x,v.y]).join(","),N=Rr.prototype.getTileUrl.call(this,n);return N+B(this.wmsParams,N,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(n,o){return s(this.wmsParams,n),o||this.redraw(),this}});function Lm(n,o){return new Pu(n,o)}Rr.WMS=Pu,Au.wms=Lm;var In=$e.extend({options:{padding:.1},initialize:function(n){F(this,n),p(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var l=this._map.getZoomScale(o,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,o),v=h.multiplyBy(-l).add(m).subtract(this._map._getNewPixelOrigin(n,o));J.any3d?_n(this._container,v,l):Dt(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new Pt(l,l.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Su=In.extend({options:{tolerance:0},getEvents:function(){var n=In.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){In.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");rt(n,"mousemove",this._onMouseMove,this),rt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),rt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){x(this._redrawRequest),delete this._ctx,vt(this._container),bt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){In.prototype._update.call(this);var n=this._bounds,o=this._container,l=n.getSize(),h=J.retina?2:1;Dt(o,n.min),o.width=h*l.x,o.height=h*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",J.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){In.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[p(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,l=o.next,h=o.prev;l?l.prev=h:this._drawLast=h,h?h.next=l:this._drawFirst=l,delete n._order,delete this._layers[p(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),l=[],h,m;for(m=0;m<o.length;m++){if(h=Number(o[m]),isNaN(h))return;l.push(h)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||C(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Pt,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var l,h,m,v,A=n._parts,N=A.length,V=this._ctx;if(N){for(V.beginPath(),l=0;l<N;l++){for(h=0,m=A[l].length;h<m;h++)v=A[l][h],V[h?"lineTo":"moveTo"](v.x,v.y);o&&V.closePath()}this._fillStroke(V,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,l=this._ctx,h=Math.max(Math.round(n._radius),1),m=(Math.max(Math.round(n._radiusY),1)||h)/h;m!==1&&(l.save(),l.scale(1,m)),l.beginPath(),l.arc(o.x,o.y/m,h,0,Math.PI*2,!1),m!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,o){var l=o.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),l,h,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(h=l);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(St(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var l,h,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(h=l);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(Q(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,l){this._map._fireDOMEvent(o,l||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(l)l.prev=h;else return;h?h.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var l=o.next,h=o.prev;if(h)h.next=l;else return;l?l.prev=h:h&&(this._drawLast=h),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function Cu(n){return J.canvas?new Su(n):null}var xs=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),xm={_initContainer:function(){this._container=_t("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(In.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=xs("shape");Q(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=xs("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[p(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;vt(o),n.removeInteractiveTarget(o),delete this._layers[p(n)]},_updateStyle:function(n){var o=n._stroke,l=n._fill,h=n.options,m=n._container;m.stroked=!!h.stroke,m.filled=!!h.fill,h.stroke?(o||(o=n._stroke=xs("stroke")),m.appendChild(o),o.weight=h.weight+"px",o.color=h.color,o.opacity=h.opacity,h.dashArray?o.dashStyle=W(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=h.lineCap.replace("butt","flat"),o.joinstyle=h.lineJoin):o&&(m.removeChild(o),n._stroke=null),h.fill?(l||(l=n._fill=xs("fill")),m.appendChild(l),l.color=h.fillColor||h.color,l.opacity=h.fillOpacity):l&&(m.removeChild(l),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),l=Math.round(n._radius),h=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+h+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){ke(n._container)},_bringToBack:function(n){Le(n._container)}},Xo=J.vml?xs:Eo,Ds=In.extend({_initContainer:function(){this._container=Xo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Xo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){vt(this._container),bt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){In.prototype._update.call(this);var n=this._bounds,o=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),Dt(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=Xo("path");n.options.className&&Q(o,n.options.className),n.options.interactive&&Q(o,"leaflet-interactive"),this._updateStyle(n),this._layers[p(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){vt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[p(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,l=n.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,ir(n._parts,o))},_updateCircle:function(n){var o=n._point,l=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||l,m="a"+l+","+h+" 0 1,0 ",v=n._empty()?"M0 0":"M"+(o.x-l)+","+o.y+m+l*2+",0 "+m+-l*2+",0 ";this._setPath(n,v)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){ke(n._path)},_bringToBack:function(n){Le(n._path)}});J.vml&&Ds.include(xm);function Ru(n){return J.svg||J.vml?new Ds(n):null}ht.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&Cu(n)||Ru(n)}});var ku=Sr.extend({initialize:function(n,o){Sr.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=kt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Dm(n,o){return new ku(n,o)}Ds.create=Xo,Ds.pointsToPath=ir,En.geometryToLayer=Wo,En.coordsToLatLng=Tc,En.coordsToLatLngs=Go,En.latLngToCoords=Ec,En.latLngsToCoords=Zo,En.getFeature=Cr,En.asFeature=Ko,ht.mergeOptions({boxZoom:!0});var Lu=Ee.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){rt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){bt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){vt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Be(),pr(),this._startPoint=this._map.mouseEventToContainerPoint(n),rt(document,{contextmenu:Je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=_t("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new Pt(this._point,this._startPoint),l=o.getSize();Dt(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(vt(this._box),St(this._container,"leaflet-crosshair")),Te(),mr(),bt(document,{contextmenu:Je,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var o=new te(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});ht.addInitHook("addHandler","boxZoom",Lu),ht.mergeOptions({doubleClickZoom:!0});var xu=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,l=o.getZoom(),h=o.options.zoomDelta,m=n.originalEvent.shiftKey?l-h:l+h;o.options.doubleClickZoom==="center"?o.setZoom(m):o.setZoomAround(n.containerPoint,m)}});ht.addInitHook("addHandler","doubleClickZoom",xu),ht.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Du=Ee.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new ze(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){St(this._map._container,"leaflet-grab"),St(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=kt(this._map.options.maxBounds);this._offsetLimit=Xt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),l=this._initialWorldOffset,h=this._draggable._newPos.x,m=(h-o+l)%n+o-l,v=(h+o+l)%n-o-l,A=Math.abs(m+l)<Math.abs(v+l)?m:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(n){var o=this._map,l=o.options,h=!l.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),h)o.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,A=l.easeLinearity,N=m.multiplyBy(A/v),V=N.distanceTo([0,0]),q=Math.min(l.inertiaMaxSpeed,V),K=N.multiplyBy(q/V),X=q/(l.inertiaDeceleration*A),dt=K.multiplyBy(-X/2).round();!dt.x&&!dt.y?o.fire("moveend"):(dt=o._limitOffset(dt,o.options.maxBounds),C(function(){o.panBy(dt,{duration:X,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});ht.addInitHook("addHandler","dragging",Du),ht.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Nu=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),rt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),bt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,l=n.scrollTop||o.scrollTop,h=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(h,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},l=this.keyCodes,h,m;for(h=0,m=l.left.length;h<m;h++)o[l.left[h]]=[-1*n,0];for(h=0,m=l.right.length;h<m;h++)o[l.right[h]]=[n,0];for(h=0,m=l.down.length;h<m;h++)o[l.down[h]]=[0,n];for(h=0,m=l.up.length;h<m;h++)o[l.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},l=this.keyCodes,h,m;for(h=0,m=l.zoomIn.length;h<m;h++)o[l.zoomIn[h]]=n;for(h=0,m=l.zoomOut.length;h<m;h++)o[l.zoomOut[h]]=-n},_addHooks:function(){rt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){bt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,l=this._map,h;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(h=this._panKeys[o],n.shiftKey&&(h=it(h).multiplyBy(3)),l.options.maxBounds&&(h=l._limitOffset(it(h),l.options.maxBounds)),l.options.worldCopyJump){var m=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(h)));l.panTo(m)}else l.panBy(h)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Je(n)}}});ht.addInitHook("addHandler","keyboard",Nu),ht.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Mu=Ee.extend({addHooks:function(){rt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){bt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=Ts(n),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),h),Je(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,v=l?Math.ceil(m/l)*l:m,A=n._limitZoom(o+(this._delta>0?v:-v))-o;this._delta=0,this._startTime=null,A&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+A):n.setZoomAround(this._lastMousePos,o+A))}});ht.addInitHook("addHandler","scrollWheelZoom",Mu);var Nm=600;ht.mergeOptions({tapHold:J.touchNative&&J.safari&&J.mobile,tapTolerance:15});var Ou=Ee.extend({addHooks:function(){rt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){bt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new nt(o.clientX,o.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(rt(document,"touchend",Vt),rt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),Nm),rt(document,"touchend touchcancel contextmenu",this._cancel,this),rt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){bt(document,"touchend",Vt),bt(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),bt(document,"touchend touchcancel contextmenu",this._cancel,this),bt(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new nt(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});ht.addInitHook("addHandler","tapHold",Ou),ht.mergeOptions({touchZoom:J.touch,bounceAtZoomLimits:!0});var Vu=Ee.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),rt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){St(this._map._container,"leaflet-touch-zoom"),bt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(h)._divideBy(2))),this._startDist=l.distanceTo(h),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),rt(document,"touchmove",this._onTouchMove,this),rt(document,"touchend touchcancel",this._onTouchEnd,this),Vt(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(n.touches[0]),h=o.mouseEventToContainerPoint(n.touches[1]),m=l.distanceTo(h)/this._startDist;if(this._zoom=o.getScaleZoom(m,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&m<1||this._zoom>o.getMaxZoom()&&m>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var v=l._add(h)._divideBy(2)._subtract(this._centerPoint);if(m===1&&v.x===0&&v.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),x(this._animRequest);var A=u(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=C(A,this,!0),Vt(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,x(this._animRequest),bt(document,"touchmove",this._onTouchMove,this),bt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});ht.addInitHook("addHandler","touchZoom",Vu),ht.BoxZoom=Lu,ht.DoubleClickZoom=xu,ht.Drag=Du,ht.Keyboard=Nu,ht.ScrollWheelZoom=Mu,ht.TapHold=Ou,ht.TouchZoom=Vu,e.Bounds=Pt,e.Browser=J,e.CRS=we,e.Canvas=Su,e.Circle=wc,e.CircleMarker=Ho,e.Class=Rt,e.Control=_e,e.DivIcon=bu,e.DivOverlay=nn,e.DomEvent=Fi,e.DomUtil=vc,e.Draggable=ze,e.Evented=Ti,e.FeatureGroup=wn,e.GeoJSON=En,e.GridLayer=Ls,e.Handler=Ee,e.Icon=Pr,e.ImageOverlay=Qo,e.LatLng=yt,e.LatLngBounds=te,e.Layer=$e,e.LayerGroup=Ar,e.LineUtil=De,e.Map=ht,e.Marker=jo,e.Mixin=qo,e.Path=Kn,e.Point=nt,e.PolyUtil=Er,e.Polygon=Sr,e.Polyline=Tn,e.Popup=Jo,e.PosAnimation=Is,e.Projection=en,e.Rectangle=ku,e.Renderer=In,e.SVG=Ds,e.SVGOverlay=Iu,e.TileLayer=Rr,e.Tooltip=Yo,e.Transformation=as,e.Util=b,e.VideoOverlay=Eu,e.bind=u,e.bounds=Xt,e.canvas=Cu,e.circle=wm,e.circleMarker=vm,e.control=Xe,e.divIcon=Rm,e.extend=s,e.featureGroup=_m,e.geoJSON=Tu,e.geoJson=Im,e.gridLayer=km,e.icon=gm,e.imageOverlay=bm,e.latLng=ut,e.latLngBounds=kt,e.layerGroup=mm,e.map=yr,e.marker=ym,e.point=it,e.polygon=Em,e.polyline=Tm,e.popup=Sm,e.rectangle=Dm,e.setOptions=F,e.stamp=p,e.svg=Ru,e.svgOverlay=Pm,e.tileLayer=Au,e.tooltip=Cm,e.transformation=Un,e.version=r,e.videoOverlay=Am;var Mm=window.L;e.noConflict=function(){return window.L=Mm,this},window.L=e})})(_l,_l.exports);var rb=_l.exports;const Vr=ib(rb),dm="trippy-geocache";let Id=Promise.resolve();function bd(){try{return JSON.parse(localStorage.getItem(dm)||"{}")}catch{return{}}}function sb(i){try{localStorage.setItem(dm,JSON.stringify(i))}catch{}}async function ob(i){const t=i.toLowerCase().trim(),e=bd();if(e[t])return e[t];const r=await(Id=Id.then(async()=>{await new Promise(s=>setTimeout(s,350));try{const s=`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(i)}`,u=await(await fetch(s,{headers:{"Accept-Language":"en"}})).json();return u!=null&&u.length?{lat:parseFloat(u[0].lat),lng:parseFloat(u[0].lon)}:null}catch{return null}}));if(r){const s=bd();s[t]=r,sb(s)}return r}async function ab(i){const t=[...new Set(i.filter(Boolean))],e={};for(const r of t)e[r]=await ob(r);return e}let Ms=null,Oe=null,Mr=null;function cb(i,t){var r;Ms&&(Ms.destroy(),Ms=null),Oe&&(Oe.remove(),Oe=null),Mr=null;const e=((r=lc())==null?void 0:r.uid)||null;i.innerHTML=`
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
  `,uc(i),i.querySelector("#globe-back").addEventListener("click",()=>xn(`/trip/${t}`)),Oe=Vr.map("map-inner",{zoomControl:!0}).setView([20,10],2),Vr.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',subdomains:"abcd",maxZoom:19}).addTo(Oe),Ms=om(t,e,s=>Ad(i,s)),Ad(i,Ms.getAll())}async function Ad(i,t,e){var p,g;const r=i.querySelector("#globe-day-list");if(!r||!Oe)return;if(Mr&&(r.removeEventListener("click",Mr),Mr=null),Oe.eachLayer(y=>{y instanceof Vr.TileLayer||Oe.removeLayer(y)}),t.length===0){r.innerHTML='<div class="globe-empty">No days in this trip yet.</div>';return}r.innerHTML='<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>'+t.map((y,w)=>`
      <div class="globe-day-item" data-dest="${Bc(y.destination)}" data-idx="${w}">
        <div class="globe-day-date">${lb(y.date)}</div>
        <div class="globe-day-dest">${Bc(y.destination||"Unknown")}</div>
        ${y.event?`<div class="globe-day-event">${Bc(y.event)}</div>`:""}
        ${y.travelDay?'<span class="globe-travel-badge">Travel</span>':""}
      </div>
    `).join("");const s=[...new Set(t.map(y=>y.destination).filter(Boolean))],a=await ab(s);(p=r.querySelector(".geocoding-hint"))==null||p.remove(),(g=r.querySelector(".globe-day-item"))==null||g.classList.add("active");const u=t.filter(y=>y.destination&&a[y.destination]).map(y=>[a[y.destination].lat,a[y.destination].lng]);u.length>1&&Vr.polyline(u,{color:"#7c6af7",weight:2.5,opacity:.85,dashArray:"6 10"}).addTo(Oe);const f={};for(const y of s){if(!a[y])continue;const w=Vr.circleMarker([a[y].lat,a[y].lng],{radius:7,fillColor:"#7c6af7",color:"#fff",weight:1.5,fillOpacity:.9}).addTo(Oe);w.bindTooltip(y,{direction:"top",offset:[0,-8],className:"map-tooltip"}),f[y]=w}u.length>0&&Oe.fitBounds(Vr.latLngBounds(u),{padding:[50,50],maxZoom:8}),Mr=y=>{var S;const w=y.target.closest(".globe-day-item");if(!w)return;const E=w.dataset.dest;E&&a[E]&&(Oe.flyTo([a[E].lat,a[E].lng],10,{duration:1.5}),r.querySelectorAll(".globe-day-item").forEach(M=>M.classList.remove("active")),w.classList.add("active"),w.scrollIntoView({behavior:"smooth",block:"nearest"}),(S=f[E])==null||S.openTooltip())},r.addEventListener("click",Mr)}function lb(i){if(!i)return"";const[t,e,r]=i.split("-").map(Number);return new Date(t,e-1,r).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}function Bc(i){return(i||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}const bn=document.getElementById("app");hI();const fm=vI({"/":()=>um(bn),"/trip/:id":({id:i})=>eb(bn,i),"/globe/:id":({id:i})=>cb(bn,i),"/join/:code":async({code:i})=>{var e,r;const t=lc();if(!t){bn.innerHTML=`
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
      `,uc(bn),(e=bn.querySelector("#join-home-btn"))==null||e.addEventListener("click",()=>xn("/"));return}try{bn.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⏳</div>
          <p>Joining trip…</p>
        </div>
      `;const s=await PI(i,t.uid);xn(`/trip/${s}`)}catch(s){bn.innerHTML=`
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⚠️</div>
          <h2>Could not join trip</h2>
          <p>${s.message}</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `,(r=bn.querySelector("#join-home-btn"))==null||r.addEventListener("click",()=>xn("/"))}}});dI(async i=>{i&&(await RI(i.uid,i.displayName||i.email||""),xI(i.uid,i.displayName||"",i.email||"")),fm.refresh()});fm.start();
