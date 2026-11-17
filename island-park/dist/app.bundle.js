/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */
(()=>{var hu=Object.defineProperty;var Qa=(e,t)=>()=>(e&&(t=e(e=0)),t);var uu=(e,t)=>{for(var i in t)hu(e,i,{get:t[i],enumerable:!0})};var ma,ct,jt,dr,Ct,ga,Ci,$a=Qa(()=>{ma={medium:600,wide:1024},ct={day:{sky:13625074,seaDeep:3108758,seaShallow:5217471,keyLight:16774368},night:{sky:1582653,seaDeep:1257546,seaShallow:1983840,keyLight:10335446},sand:15127982,grass:8826460,tree:6197064,rock:9211786,structure:16052974,accent:12860706,bulb:16761963,beam:16769955,shadow:0},jt={day:{hemi:1.9,key:2.6,bulb:0,point:0,beam:.05,seaGlow:0},night:{hemi:.55,key:.55,bulb:1.6,point:26,beam:.3,seaGlow:.32}},dr={wave:4,ferris:40,carousel:20,coaster:12,beam:8,autoRotate:90},Ct={fov:35,elevationMin:15,elevationMax:70,startElevation:35,startAzimuth:35,stepRotate:30,stepZoom:.75,fitRadius:13.2,fitShare:.66,minDistance:12,maxDistanceFactor:1.6},ga={wide:{width:2400,height:1400,refWidth:1056,refHeight:810},medium:{width:2e3,height:1120,refWidth:1e3,refHeight:800},narrow:{width:900,height:1170,refWidth:600,refHeight:780}},Ci={pixelRatioHigh:2,pixelRatioLow:1.5,seaSegmentsHigh:56,seaSegmentsLow:36,shadowMapSize:1024,slowFrameMs:33,sampleWindowMs:2e3,warmupMs:1200}});function _a(e,t){let i=Qn*(e/t),r=Ct.fitRadius/(Ct.fitShare*i),n=(Ct.fitRadius*Math.sin(Ct.startElevation*al)+6)/(.86*Qn);return Math.max(r,n)}function rl(e,t){return e/2/Qn/t}function nl(e){let t=ga[e];return _a(t.refWidth,t.refHeight)*(t.height/t.refHeight)}function sl(e,t,i,r){let a=ga[e],n=rl(i,_a(t-r,i)),s=rl(a.refHeight,_a(a.refWidth,a.refHeight)),o=n/s,l=a.width*o,c=a.height*o,h=(t+r)/2-l/2,d=i/2-c/2;return h<=0&&d<=0&&h+l>=t&&d+c>=i?{left:h,top:d,width:l,height:c}:null}var al,Qn,$n=Qa(()=>{$a();al=Math.PI/180,Qn=Math.tan(Ct.fov/2*al)});function Xu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ju(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function qu(){let e=Hn("canvas");return e.style.display="block",e}function gl(...e){let t="THREE."+e.shift();ta?ta("log",t,...e):console.log(t,...e)}function Uc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ve(...e){e=Uc(e);let t="THREE."+e.shift();if(ta)ta("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Xe(...e){e=Uc(e);let t="THREE."+e.shift();if(ta)ta("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Ln(...e){let t=e.join(" ");t in ml||(ml[t]=!0,Ve(...e))}function Yu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function Oa(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qt[e&255]+qt[e>>8&255]+qt[e>>16&255]+qt[e>>24&255]+"-"+qt[t&255]+qt[t>>8&255]+"-"+qt[t>>16&15|64]+qt[t>>24&255]+"-"+qt[i&63|128]+qt[i>>8&255]+"-"+qt[i>>16&255]+qt[i>>24&255]+qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]).toLowerCase()}function it(e,t,i){return Math.max(t,Math.min(i,e))}function Zu(e,t){return(e%t+t)%t}function ss(e,t,i){return(1-i)*e+i*t}function Ju(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Do(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Qu(e,t){if(t.constructor===Float32Array)return e;let i=Do(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function $u(e,t){if(t.constructor===Float32Array)return e;let i=Do(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function ed(){let e={enabled:!0,workingColorSpace:Bn,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===ft&&(a.r=qi(a.r),a.g=qi(a.g),a.b=qi(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(a.r=qr(a.r),a.g=qr(a.g),a.b=qr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===rr?zn:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Bn]:{primaries:t,whitePoint:r,transfer:zn,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:r,transfer:ft,toXYZ:vl,fromXYZ:Ml,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),e}function qi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function cs(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?td.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}function ps(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function xs(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){fr.fromArray(e,n);let o=a.x*Math.abs(fr.x)+a.y*Math.abs(fr.y)+a.z*Math.abs(fr.z),l=t.dot(fr),c=i.dot(fr),h=r.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Md(e,t,i,r,a,n,s,o){let l;if(t.side===ai?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===vr,o),l===null)return null;gn.copy(o),gn.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(gn);return c<i.near||c>i.far?null:{distance:c,point:gn.clone(),object:e}}function _n(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,dn),e.getVertexPosition(l,pn),e.getVertexPosition(c,fn);let h=Md(e,t,i,r,dn,pn,fn,Ll);if(h){let d=new P;Ma.getBarycoord(Ll,dn,pn,fn,d),a&&(h.uv=Ma.getInterpolatedAttribute(a,o,l,c,d,new Ie)),n&&(h.uv1=Ma.getInterpolatedAttribute(n,o,l,c,d,new Ie)),s&&(h.normal=Ma.getInterpolatedAttribute(s,o,l,c,d,new P),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Ma.getNormal(dn,pn,fn,u.normal),h.face=u,h.barycoord=d}return h}function Fo(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){a(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,h,d){let u=(s-n)/c-(o-n)/(c+h)+(o-s)/h,m=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,m*=h,a(s,o,u,m)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}function Fl(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function bd(e,t){let i=1-e;return i*i*t}function wd(e,t){return 2*(1-e)*e*t}function Ad(e,t){return e*e*t}function Ca(e,t,i,r){return bd(e,t)+wd(e,i)+Ad(e,r)}function Rd(e,t){let i=1-e;return i*i*i*t}function Cd(e,t){let i=1-e;return 3*i*i*e*t}function Ld(e,t){return 3*(1-e)*e*e*t}function Pd(e,t){return e*e*e*t}function La(e,t,i,r,a){return Rd(e,t)+Cd(e,i)+Ld(e,r)+Pd(e,a)}function aa(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Bl(a))a.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Bl(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Qt(e){let t={};for(let i=0;i<e.length;i++){let r=aa(e[i]);for(let a in r)t[a]=r[a]}return t}function Bl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function dh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:st.workingColorSpace}function Hr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Sn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function ph(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Zd(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Jd(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=ph(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Zd(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function zl(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function Hl(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function jl(e,t){return e.distance-t.distance}function Eo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)Eo(n[s],t,i,!0)}}function ql(e,t,i,r){let a=_p(r);switch(i){case Lc:return e*t;case Co:return e*t/a.components*a.byteLength;case Lo:return e*t/a.components*a.byteLength;case Mr:return e*t*2/a.components*a.byteLength;case Po:return e*t*2/a.components*a.byteLength;case Pc:return e*t*3/a.components*a.byteLength;case Di:return e*t*4/a.components*a.byteLength;case No:return e*t*4/a.components*a.byteLength;case wn:case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Rn:case Cn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ks:case Xs:return Math.max(e,16)*Math.max(t,8)/4;case Vs:case Ws:return Math.max(e,8)*Math.max(t,8)/2;case js:case qs:case Ks:case Zs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Un:case Js:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $s:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ro:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ao:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case so:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case po:case fo:case mo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(e/4)*Math.ceil(t/4)*8;case On:case vo:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function _p(e){switch(e){case ci:case wc:return{byteLength:1,components:1};case Da:case Ac:case Oi:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case Ui:case wo:case Ti:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function xh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function vp(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<d.length;m++){let x=d[u],M=d[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,d[u]=M)}d.length=u+1;for(let m=0,x=d.length;m<x;m++){let M=d[m];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}function eg(e,t,i,r,a,n){let s=new Ye(0),o=a===!0?0:1,l,c,h=null,d=0,u=null;function m(E){let T=E.isScene===!0?E.background:null;if(T&&T.isTexture){let S=E.backgroundBlurriness>0;T=t.get(T,S)}return T}function x(E){let T=!1,S=m(E);S===null?g(s,o):S&&S.isColor&&(g(S,1),T=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(E,T){let S=m(T);S&&S.isCubeTexture?(c===void 0&&(c=new $e(new Fi(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:aa(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,R,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($m.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yh),c.material.toneMapped=st.getTransfer(S.colorSpace)!==ft,(h!==S||d!==S.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $e(new za(2,2),new Sr({name:"BackgroundMaterial",uniforms:aa(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=st.getTransfer(S.colorSpace)!==ft,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function g(E,T){E.getRGB(En,dh(e)),i.buffers.color.setClear(En.r,En.g,En.b,T,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(E,T=1){s.set(E),o=T,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,g(s,o)},render:x,addToRenderList:M,dispose:p}}function tg(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(I,B,Z,N,k){let $=!1,V=d(I,N,Z,B);n!==V&&(n=V,c(n.object)),$=m(I,N,Z,k),$&&x(I,N,Z,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,S(I,B,Z,N),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function d(I,B,Z,N){let k=N.wireframe===!0,$=r[B.id];$===void 0&&($={},r[B.id]=$);let V=I.isInstancedMesh===!0?I.id:0,me=$[V];me===void 0&&(me={},$[V]=me);let q=me[Z.id];q===void 0&&(q={},me[Z.id]=q);let J=q[k];return J===void 0&&(J=u(l()),q[k]=J),J}function u(I){let B=[],Z=[],N=[];for(let k=0;k<i;k++)B[k]=0,Z[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:N,object:I,attributes:{},index:null}}function m(I,B,Z,N){let k=n.attributes,$=B.attributes,V=0,me=Z.getAttributes();for(let q in me)if(me[q].location>=0){let J=k[q],ce=$[q];if(ce===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),J===void 0||J.attribute!==ce||ce&&J.data!==ce.data)return!0;V++}return n.attributesNum!==V||n.index!==N}function x(I,B,Z,N){let k={},$=B.attributes,V=0,me=Z.getAttributes();for(let q in me)if(me[q].location>=0){let J=$[q];J===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let ce={};ce.attribute=J,J&&J.data&&(ce.data=J.data),k[q]=ce,V++}n.attributes=k,n.attributesNum=V,n.index=N}function M(){let I=n.newAttributes;for(let B=0,Z=I.length;B<Z;B++)I[B]=0}function g(I){p(I,0)}function p(I,B){let Z=n.newAttributes,N=n.enabledAttributes,k=n.attributeDivisors;Z[I]=1,N[I]===0&&(e.enableVertexAttribArray(I),N[I]=1),k[I]!==B&&(e.vertexAttribDivisor(I,B),k[I]=B)}function E(){let I=n.newAttributes,B=n.enabledAttributes;for(let Z=0,N=B.length;Z<N;Z++)B[Z]!==I[Z]&&(e.disableVertexAttribArray(Z),B[Z]=0)}function T(I,B,Z,N,k,$,V){V===!0?e.vertexAttribIPointer(I,B,Z,k,$):e.vertexAttribPointer(I,B,Z,N,k,$)}function S(I,B,Z,N){M();let k=N.attributes,$=Z.getAttributes(),V=B.defaultAttributeValues;for(let me in $){let q=$[me];if(q.location>=0){let J=k[me];if(J===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){let ce=J.normalized,Ue=J.itemSize,ee=t.get(J);if(ee===void 0)continue;let he=ee.buffer,be=ee.type,Le=ee.bytesPerElement,Fe=be===e.INT||be===e.UNSIGNED_INT||J.gpuType===wo;if(J.isInterleavedBufferAttribute){let ve=J.data,Je=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,nt=J.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let De=0;De<q.locationSize;De++)p(q.location+De,ve.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let De=0;De<q.locationSize;De++)g(q.location+De);e.bindBuffer(e.ARRAY_BUFFER,he);for(let De=0;De<q.locationSize;De++)T(q.location+De,Ue/q.locationSize,be,ce,Je*Le,(nt+Ue/q.locationSize*De)*Le,Fe)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<q.locationSize;ve++)p(q.location+ve,J.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<q.locationSize;ve++)g(q.location+ve);e.bindBuffer(e.ARRAY_BUFFER,he);for(let ve=0;ve<q.locationSize;ve++)T(q.location+ve,Ue/q.locationSize,be,ce,Ue*Le,Ue/q.locationSize*ve*Le,Fe)}}else if(V!==void 0){let ce=V[me];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(q.location,ce);break;case 3:e.vertexAttrib3fv(q.location,ce);break;case 4:e.vertexAttrib4fv(q.location,ce);break;default:e.vertexAttrib1fv(q.location,ce)}}}}E()}function w(){b();for(let I in r){let B=r[I];for(let Z in B){let N=B[Z];for(let k in N){let $=N[k];for(let V in $)h($[V].object),delete $[V];delete N[k]}}delete r[I]}}function R(I){if(r[I.id]===void 0)return;let B=r[I.id];for(let Z in B){let N=B[Z];for(let k in N){let $=N[k];for(let V in $)h($[V].object),delete $[V];delete N[k]}}delete r[I.id]}function f(I){for(let B in r){let Z=r[B];for(let N in Z){let k=Z[N];if(k[I.id]===void 0)continue;let $=k[I.id];for(let V in $)h($[V].object),delete $[V];delete k[I.id]}}}function y(I){for(let B in r){let Z=r[B],N=I.isInstancedMesh===!0?I.id:0,k=Z[N];if(k!==void 0){for(let $ in k){let V=k[$];for(let me in V)h(V[me].object),delete V[me];delete k[$]}delete Z[N],Object.keys(Z).length===0&&delete r[B]}}}function b(){O(),s=!0,n!==a&&(n=a,c(n.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:f,initAttributes:M,enableAttribute:g,disableUnusedAttributes:E}}function ig(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function rg(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let f=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(f){return!(f!==Di&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){let y=f===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(f!==ci&&f!==Ti&&!y&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(f){if(f==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&d===!1;i.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&d===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:R}}function ag(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ir,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||r!==0||a;return a=u,r=d.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,m){let x=d.clippingPlanes,M=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!a||x===null||x.length===0||n&&!g)n?h(null):c();else{let E=n?0:r,T=E*4,S=p.clippingState||null;l.value=S,S=h(x,u,T,m);for(let w=0;w!==T;++w)S[w]=i[w];p.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(d,u,m,x){let M=d!==null?d.length:0,g=null;if(M!==0){if(g=l.value,x!==!0||g===null){let p=m+M*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,S=m;T!==M;++T,S+=4)s.copy(d[T]).applyMatrix4(E,o),s.normal.toArray(g,S),g[S+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function Zl(e,t,i){return new ko(e,{minFilter:ar,generateMipmaps:t,type:Oi,colorSpace:Bn,depthBuffer:i})}function ka(e,t,i){return new Sr({name:e,uniforms:t,vertexShader:Qe.cube_vert,fragmentShader:i,side:ai,blending:jr,depthTest:!1,depthWrite:!1})}function hg(){return ka("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Eh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ug(){return ka("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Th}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function dg(){return ka("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sg}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Jl(){return ka("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ql(){return ka("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function pg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,m=!1){return u==null?null:m?s(u):n(u)}function n(u){if(u&&u.isTexture){let m=u.mapping;if(m===es||m===ts)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new ko(x.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,x=m===es||m===ts,M=m===$r||m===Na;if(x||M){let g=i.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return r===null&&(r=new Kl(e)),g=x?r.fromEquirectangular(u,g):r.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),g.texture;if(g!==void 0)return g.texture;{let E=u.image;return x&&E&&E.height>0||M&&E&&l(E)?(r===null&&(r=new Kl(e)),g=x?r.fromEquirectangular(u):r.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,m){return m===es?u.mapping=$r:m===ts&&(u.mapping=Na),u}function l(u){let m=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&m++;return m===x}function c(u){let m=u.target;m.removeEventListener("dispose",c);let x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let x=i.get(m);x!==void 0&&(i.delete(m),x.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function fg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Ln("WebGLRenderer: "+r+" extension not supported."),a}}}function mg(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(x=>delete a[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete a[x.id],s.unregister(x);let M=n.get(x);M&&(t.remove(M),n.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function c(x,M){return a[M.id]!==void 0||(M.addEventListener("dispose",o),a[M.id]=new WeakRef(M),s.register(M,M.id,M),i.memory.geometries++),M}function h(x){let M=x.attributes;for(let g in M)t.update(M[g],e.ARRAY_BUFFER)}function d(x){let M=x.index,g=x.attributes.position,p=0;if(g===void 0)return;let E=M!==null?M.array.length:g.array.length/3-1,T=g.count>=65535?kc:Vc,S=new T(Math.ceil(E/3)*6,1),w=S.array;if(M!==null){let f=M.array;p=M.version;for(let y=0,b=0;y<E;y+=3){let O=f[y+0],I=f[y+1],B=f[y+2];w[b++]=O,w[b++]=I,w[b++]=I,w[b++]=B,w[b++]=B,w[b++]=O}}else{p=g.version;for(let f=0,y=0;f<E;f+=3){let b=f+0,O=f+1,I=f+2;w[y++]=b,w[y++]=O,w[y++]=O,w[y++]=I,w[y++]=I,w[y++]=b}}S.version=p;let R=n.get(x);R&&t.remove(R),n.set(x,S)}function u(x){let M=n.get(x);if(M){let g=x.index;g!==null&&M.version<g.version&&d(x)}else d(x);return n.get(x)}function m(){for(let x in a){let M=a[x].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function gg(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function c(d,u,m){m!==0&&(e.drawElementsInstanced(r,u,n,d*s,m),i.update(u,r,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,m);let x=0;for(let M=0;M<m;M++)x+=u[M];i.update(x,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _g(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Xe("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function vg(e,t,i){let r=new WeakMap,a=new bt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==d){let m=function(){y.dispose(),r.delete(o),o.removeEventListener("dispose",m)};u!==void 0&&u.texture.dispose();let x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],S=0;x===!0&&(S=1),M===!0&&(S=2),g===!0&&(S=3);let w=o.attributes.position.count*S,R=1;w>t.maxTextureSize&&(R=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let f=new Float32Array(w*R*4*d),y=new Oc(f,w,R,d);y.type=Ti,y.needsUpdate=!0;let b=S*4;for(let O=0;O<d;O++){let I=p[O],B=E[O],Z=T[O],N=w*R*4*O;for(let k=0;k<I.count;k++){let $=k*b;x===!0&&(a.fromBufferAttribute(I,k),f[N+$+0]=a.x,f[N+$+1]=a.y,f[N+$+2]=a.z,f[N+$+3]=0),M===!0&&(a.fromBufferAttribute(B,k),f[N+$+4]=a.x,f[N+$+5]=a.y,f[N+$+6]=a.z,f[N+$+7]=0),g===!0&&(a.fromBufferAttribute(Z,k),f[N+$+8]=a.x,f[N+$+9]=a.y,f[N+$+10]=a.z,f[N+$+11]=Z.itemSize===4?a.w:1)}}u={count:d,texture:y,size:new Ie(w,R)},r.set(o,u),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let x=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Mg(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,d=c.geometry,u=t.get(c,d);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;n.get(m)!==h&&(m.update(),n.set(m,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}function xg(e,t,i,r,a,n){let s=new Ii(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new hi;h.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ht([0,2,0,0,2,0],2));let d=new kd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $e(h,d),m=new vh(-1,1,1,-1,0,1),x=null,M=null,g=!1,p,E=null,T=[],S=!1;this.setSize=function(w,R){s.setSize(w,R),o!==null&&o.setSize(w,R),l!==null&&l.setSize(w,R);for(let f=0;f<T.length;f++){let y=T[f];y.setSize&&y.setSize(w,R)}},this.setEffects=function(w){T=w,S=T.length>0&&T[0].isRenderPass===!0;let R=s.width,f=s.height;T.length>0&&o===null&&(o=new Ii(R,f,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),l=new Ii(R,f,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));let y=a===!0&&T.some(b=>b.needsDepthTexture===!0);y!==(s.depthTexture!==null)&&(y===!0&&c===null&&(c=new ra(R,f),n===!0&&(c.format=nr,c.type=ea)),s.dispose(),s.depthTexture=y?c:null,s.resolveDepthBuffer=y,s.storeMultisampledDepthBuffer=y);for(let b=0;b<T.length;b++){let O=T[b];O.setSize&&O.setSize(R,f),y&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(w,R){if(g||w.toneMapping===ji&&T.length===0)return!1;if(E=R,R!==null){let f=R.width,y=R.height;(s.width!==f||s.height!==y)&&this.setSize(f,y)}return S===!1&&w.setRenderTarget(s),p=w.toneMapping,w.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(w,R){w.toneMapping=p,g=!0;let f=s,y=o;for(let b=0;b<T.length;b++){let O=T[b];O.enabled!==!1&&(O.render(w,y,f,R),O.needsSwap!==!1&&(f=y,y=y===o?l:o))}if(x!==w.outputColorSpace||M!==w.toneMapping){x=w.outputColorSpace,M=w.toneMapping,d.defines={},st.getTransfer(x)===ft&&(d.defines.SRGB_TRANSFER="");let b=Sg[M];b&&(d.defines[b]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=f.texture,w.setRenderTarget(E),w.render(u,m),E=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function sa(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=$l[a];if(n===void 0&&(n=new Float32Array(a),$l[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Ut(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ot(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Wn(e,t){let i=ec[t];i===void 0&&(i=new Int32Array(t),ec[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function yg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Eg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2fv(this.addr,t),Ot(i,t)}}function Tg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ut(i,t))return;e.uniform3fv(this.addr,t),Ot(i,t)}}function bg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4fv(this.addr,t),Ot(i,t)}}function wg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ot(i,t)}else{if(Ut(i,r))return;rc.set(r),e.uniformMatrix2fv(this.addr,!1,rc),Ot(i,r)}}function Ag(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ot(i,t)}else{if(Ut(i,r))return;ic.set(r),e.uniformMatrix3fv(this.addr,!1,ic),Ot(i,r)}}function Rg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ot(i,t)}else{if(Ut(i,r))return;tc.set(r),e.uniformMatrix4fv(this.addr,!1,tc),Ot(i,r)}}function Cg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Lg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2iv(this.addr,t),Ot(i,t)}}function Pg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ut(i,t))return;e.uniform3iv(this.addr,t),Ot(i,t)}}function Ng(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4iv(this.addr,t),Ot(i,t)}}function Dg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Ig(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2uiv(this.addr,t),Ot(i,t)}}function Ug(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ut(i,t))return;e.uniform3uiv(this.addr,t),Ot(i,t)}}function Og(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4uiv(this.addr,t),Ot(i,t)}}function Xn(e){return e.version===0&&(e.compareFunction=Ic,e.needsUpdate=!0),e}function Fg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=Xn(Ah):n=wh,i.setTexture2D(t||n,a)}function Bg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Lh,a)}function zg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=Xn(Rh):n=Ph,i.setTextureCube(t||n,a)}function Hg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Ch,a)}function Gg(e){switch(e){case 5126:return yg;case 35664:return Eg;case 35665:return Tg;case 35666:return bg;case 35674:return wg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Lg;case 35668:case 35672:return Pg;case 35669:case 35673:return Ng;case 5125:return Dg;case 36294:return Ig;case 36295:return Ug;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Vg(e,t){e.uniform1fv(this.addr,t)}function kg(e,t){let i=sa(t,this.size,2);e.uniform2fv(this.addr,i)}function Wg(e,t){let i=sa(t,this.size,3);e.uniform3fv(this.addr,i)}function Xg(e,t){let i=sa(t,this.size,4);e.uniform4fv(this.addr,i)}function jg(e,t){let i=sa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function qg(e,t){let i=sa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Yg(e,t){let i=sa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Kg(e,t){e.uniform1iv(this.addr,t)}function Zg(e,t){e.uniform2iv(this.addr,t)}function Jg(e,t){e.uniform3iv(this.addr,t)}function Qg(e,t){e.uniform4iv(this.addr,t)}function $g(e,t){e.uniform1uiv(this.addr,t)}function e_(e,t){e.uniform2uiv(this.addr,t)}function t_(e,t){e.uniform3uiv(this.addr,t)}function i_(e,t){e.uniform4uiv(this.addr,t)}function r_(e,t,i){let r=this.cache,a=t.length,n=Wn(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Xn(Ah):s=wh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function a_(e,t,i){let r=this.cache,a=t.length,n=Wn(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Lh,n[s])}function n_(e,t,i){let r=this.cache,a=t.length,n=Wn(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=Xn(Rh):s=Ph;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function s_(e,t,i){let r=this.cache,a=t.length,n=Wn(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Ch,n[s])}function o_(e){switch(e){case 5126:return Vg;case 35664:return kg;case 35665:return Wg;case 35666:return Xg;case 35674:return jg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Kg;case 35667:case 35671:return Zg;case 35668:case 35672:return Jg;case 35669:case 35673:return Qg;case 5125:return $g;case 36294:return e_;case 36295:return t_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return s_}}function ac(e,t){e.seq.push(t),e.map[t.id]=t}function u_(e,t,i){let r=e.name,a=r.length;for(Ps.lastIndex=0;;){let n=Ps.exec(r),s=Ps.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){ac(i,c===void 0?new l_(o,e,t):new c_(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new h_(o),ac(i,h)),i=h}}}function nc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function f_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function m_(e){st._getMatrix(sc,st.workingColorSpace,e);let t=`mat3( ${sc.elements.map(i=>i.toFixed(4))} )`;switch(st.getTransfer(e)){case zn:return[t,"LinearTransferOETF"];case ft:return[t,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function oc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+f_(e.getShaderSource(t),s)}else return a}function g_(e,t){let i=m_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function v_(e,t){let i=__[t];return i===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function M_(){st.getLuminanceCoefficients(Tn);let e=Tn.x.toFixed(4),t=Tn.y.toFixed(4),i=Tn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function x_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function y_(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Aa(e){return e!==""}function lc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function To(e){return e.replace(E_,T_)}function T_(e,t){let i=Qe[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return To(i)}function hc(e){return e.replace(b_,w_)}function w_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function uc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function R_(e){return A_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function L_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":C_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function N_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":P_[e.combine]||"ENVMAP_BLENDING_NONE"}function D_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=R_(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=L_(i),d=N_(i),u=S_(i),m=x_(n),x=a.createProgram(),M,g,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Aa).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(Aa).join(`
`),g.length>0&&(g+=`
`)):(M=[uc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),g=[uc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?Qe.tonemapping_pars_fragment:"",i.toneMapping!==ji?v_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,g_("linearToOutputTexel",i.outputColorSpace),M_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Aa).join(`
`)),s=To(s),s=lc(s,i),s=cc(s,i),o=To(o),o=lc(o,i),o=cc(o,i),s=hc(s),o=hc(o),i.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=p+M+s,T=p+g+o,S=nc(a,a.VERTEX_SHADER,E),w=nc(a,a.FRAGMENT_SHADER,T);a.attachShader(x,S),a.attachShader(x,w),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function R(O){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(x)||"",B=a.getShaderInfoLog(S)||"",Z=a.getShaderInfoLog(w)||"",N=I.trim(),k=B.trim(),$=Z.trim(),V=!0,me=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,S,w);else{let q=oc(a,S,"vertex"),J=oc(a,w,"fragment");Xe("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+N+`
`+q+`
`+J)}else N!==""?Ve("WebGLProgram: Program Info Log:",N):(k===""||$==="")&&(me=!1);me&&(O.diagnostics={runnable:V,programLog:N,vertexShader:{log:k,prefix:M},fragmentShader:{log:$,prefix:g}})}a.deleteShader(S),a.deleteShader(w),f=new Dn(a,x),y=y_(a,x)}let f;this.getUniforms=function(){return f===void 0&&R(this),f};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(x,d_)),b},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}function F_(e){return e===Mr||e===Un||e===On}function B_(e,t,i,r,a,n){let s=new Uo,o=new U_,l=new Set,c=[],h=new Map,d=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return l.add(f),f===0?"uv":`uv${f}`}function x(f,y,b,O,I,B){let Z=O.fog,N=I.geometry,k=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?O.environment:null,$=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,V=t.get(f.envMap||k,$),me=u[f.type],q=r.precision;f.precision!==null&&(q=r.getMaxPrecision(f.precision),q!==f.precision&&Ve("WebGLProgram.getParameters:",f.precision,"not supported, using",q,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ce=J!==void 0?J.length:0,Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let ee,he,be,Le;if(me){let we=Ni[me];ee=we.vertexShader,he=we.fragmentShader}else{ee=f.vertexShader,he=f.fragmentShader;let we=o.getVertexShaderStage(f),pt=o.getFragmentShaderStage(f);o.update(f,we,pt),be=we.id,Le=pt.id}let Fe=e.getRenderTarget(),ve=e.state.buffers.depth.getReversed(),Je=I.isInstancedMesh===!0,nt=I.isBatchedMesh===!0,De=!!f.map,dt=!!f.matcap,xt=!!V,At=xt&&V.isPMREMTexture===!0,yt=!!f.aoMap,Gt=!!f.lightMap,Zt=!!f.bumpMap&&f.wireframe===!1,Et=!!f.normalMap,Nt=!!f.displacementMap,Vt=!!f.emissiveMap,kt=!!f.metalnessMap,ei=!!f.roughnessMap,F=f.anisotropy>0,ti=f.clearcoat>0,ut=f.diffuseRoughness>0,vt=f.dispersion>0,xe=f.retroreflectivity>0,mt=f.iridescence>0,Pe=f.sheen>0,ke=f.transmission>0,Dt=F&&!!f.anisotropyMap,A=ti&&!!f.clearcoatMap,_=ti&&!!f.clearcoatNormalMap,G=ti&&!!f.clearcoatRoughnessMap,ne=ut&&!!f.diffuseRoughnessMap,Q=mt&&!!f.iridescenceMap,Me=mt&&!!f.iridescenceThicknessMap,Se=Pe&&!!f.sheenColorMap,U=Pe&&!!f.sheenRoughnessMap,ie=!!f.specularMap,te=!!f.specularColorMap,L=!!f.specularIntensityMap,j=ke&&!!f.transmissionMap,re=ke&&!!f.thicknessMap,le=!!f.gradientMap,ge=!!f.alphaMap,fe=f.alphaTest>0,Ae=!!f.alphaHash,ae=!!f.extensions,We=ji;f.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(We=e.toneMapping);let Oe=At?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,tt={shaderID:me,shaderType:f.type,shaderName:f.name,vertexShader:ee,fragmentShader:he,defines:f.defines,customVertexShaderID:be,customFragmentShaderID:Le,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:q,batching:nt,batchingColor:nt&&I._colorsTexture!==null,instancing:Je,instancingColor:Je&&I.instanceColor!==null,instancingMorph:Je&&I.morphTexture!==null,outputColorSpace:Fe===null?e.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:De,matcap:dt,envMap:xt,envMapMode:xt&&V.mapping,envMapPMREM:At,envMapMaxLod:At?Oe.length-1:null,envMapSize:At?Oe[0].width:null,aoMap:yt,lightMap:Gt,bumpMap:Zt,normalMap:Et,displacementMap:Nt,emissiveMap:Vt,normalMapObjectSpace:Et&&f.normalMapType===Fu,normalMapTangentSpace:Et&&f.normalMapType===So,packedNormalMap:Et&&f.normalMapType===So&&F_(f.normalMap.format),metalnessMap:kt,roughnessMap:ei,anisotropy:F,anisotropyMap:Dt,clearcoat:ti,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:G,diffuseRoughness:ut,diffuseRoughnessMap:ne,dispersion:vt,retroreflection:xe,iridescence:mt,iridescenceMap:Q,iridescenceThicknessMap:Me,sheen:Pe,sheenColorMap:Se,sheenRoughnessMap:U,specularMap:ie,specularColorMap:te,specularIntensityMap:L,transmission:ke,transmissionMap:j,thicknessMap:re,gradientMap:le,opaque:f.transparent===!1&&f.blending===Ra&&f.alphaToCoverage===!1,alphaMap:ge,alphaTest:fe,alphaHash:Ae,combine:f.combine,mapUv:De&&m(f.map.channel),aoMapUv:yt&&m(f.aoMap.channel),lightMapUv:Gt&&m(f.lightMap.channel),bumpMapUv:Zt&&m(f.bumpMap.channel),normalMapUv:Et&&m(f.normalMap.channel),displacementMapUv:Nt&&m(f.displacementMap.channel),emissiveMapUv:Vt&&m(f.emissiveMap.channel),metalnessMapUv:kt&&m(f.metalnessMap.channel),roughnessMapUv:ei&&m(f.roughnessMap.channel),anisotropyMapUv:Dt&&m(f.anisotropyMap.channel),clearcoatMapUv:A&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&m(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&m(f.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:U&&m(f.sheenRoughnessMap.channel),specularMapUv:ie&&m(f.specularMap.channel),specularColorMapUv:te&&m(f.specularColorMap.channel),specularIntensityMapUv:L&&m(f.specularIntensityMap.channel),transmissionMapUv:j&&m(f.transmissionMap.channel),thicknessMapUv:re&&m(f.thicknessMap.channel),alphaMapUv:ge&&m(f.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Et||F),vertexNormals:!!N.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(De||ge),fog:!!Z,useFog:f.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||N.attributes.normal===void 0&&Et===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ue,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:B.filter(we=>we.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&b.length>0,shadowMapType:e.shadowMap.type,toneMapping:We,decodeVideoTexture:De&&f.map.isVideoTexture===!0&&st.getTransfer(f.map.colorSpace)===ft,decodeVideoTextureEmissive:Vt&&f.emissiveMap.isVideoTexture===!0&&st.getTransfer(f.emissiveMap.colorSpace)===ft,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===Ei,flipSided:f.side===ai,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ae&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&f.extensions.multiDraw===!0||nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function M(f){let y=[];if(f.shaderID?y.push(f.shaderID):(y.push(f.customVertexShaderID),y.push(f.customFragmentShaderID)),f.defines!==void 0)for(let b in f.defines)y.push(b),y.push(f.defines[b]);return f.isRawShaderMaterial===!1&&(g(y,f),p(y,f),y.push(e.outputColorSpace)),y.push(f.customProgramCacheKey),y.join()}function g(f,y){f.push(y.precision),f.push(y.outputColorSpace),f.push(y.envMapMode),f.push(y.envMapPMREM),f.push(y.envMapMaxLod),f.push(y.envMapSize),f.push(y.mapUv),f.push(y.alphaMapUv),f.push(y.lightMapUv),f.push(y.aoMapUv),f.push(y.bumpMapUv),f.push(y.normalMapUv),f.push(y.displacementMapUv),f.push(y.emissiveMapUv),f.push(y.metalnessMapUv),f.push(y.roughnessMapUv),f.push(y.anisotropyMapUv),f.push(y.clearcoatMapUv),f.push(y.clearcoatNormalMapUv),f.push(y.clearcoatRoughnessMapUv),f.push(y.diffuseRoughnessMapUv),f.push(y.iridescenceMapUv),f.push(y.iridescenceThicknessMapUv),f.push(y.sheenColorMapUv),f.push(y.sheenRoughnessMapUv),f.push(y.specularMapUv),f.push(y.specularColorMapUv),f.push(y.specularIntensityMapUv),f.push(y.transmissionMapUv),f.push(y.thicknessMapUv),f.push(y.combine),f.push(y.fogExp2),f.push(y.sizeAttenuation),f.push(y.morphTargetsCount),f.push(y.numSunLights),f.push(y.numDirLights),f.push(y.numPointLights),f.push(y.numSpotLights),f.push(y.numSpotLightMaps),f.push(y.numHemiLights),f.push(y.numRectAreaLights),f.push(y.numSunLightShadows),f.push(y.numDirLightShadows),f.push(y.numPointLightShadows),f.push(y.numSpotLightShadows),f.push(y.numSpotLightShadowsWithMaps),f.push(y.numLightProbes),f.push(y.numLightProbeGrids),f.push(y.shadowMapType),f.push(y.toneMapping),f.push(y.numClippingPlanes),f.push(y.numClipIntersection),f.push(y.depthPacking)}function p(f,y){s.disableAll(),y.instancing&&s.enable(0),y.instancingColor&&s.enable(1),y.instancingMorph&&s.enable(2),y.matcap&&s.enable(3),y.envMap&&s.enable(4),y.normalMapObjectSpace&&s.enable(5),y.normalMapTangentSpace&&s.enable(6),y.clearcoat&&s.enable(7),y.iridescence&&s.enable(8),y.alphaTest&&s.enable(9),y.vertexColors&&s.enable(10),y.vertexAlphas&&s.enable(11),y.vertexUv1s&&s.enable(12),y.vertexUv2s&&s.enable(13),y.vertexUv3s&&s.enable(14),y.vertexTangents&&s.enable(15),y.anisotropy&&s.enable(16),y.alphaHash&&s.enable(17),y.batching&&s.enable(18),y.dispersion&&s.enable(19),y.retroreflection&&s.enable(24),y.diffuseRoughness&&s.enable(25),y.batchingColor&&s.enable(20),y.gradientMap&&s.enable(21),y.packedNormalMap&&s.enable(22),y.vertexNormals&&s.enable(23),f.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reversedDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.decodeVideoTextureEmissive&&s.enable(20),y.alphaToCoverage&&s.enable(21),y.numLightProbeGrids>0&&s.enable(22),y.hasPositionAttribute&&s.enable(23),f.push(s.mask)}function E(f){let y=u[f.type],b;if(y){let O=Ni[y];b=Hd.clone(O.uniforms)}else b=f.uniforms;return b}function T(f,y){let b=h.get(y);return b!==void 0?++b.usedTimes:(b=new D_(e,y,f,a),c.push(b),h.set(y,b)),b}function S(f){if(--f.usedTimes===0){let y=c.indexOf(f);c[y]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}}function w(f){o.remove(f)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:E,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:R}}function z_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function H_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function dc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function pc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,M,g,p){let E=e[t];return E===void 0?(E={id:u.id,object:u,geometry:m,material:x,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:p},e[t]=E):(E.id=u.id,E.object=u,E.geometry=m,E.material=x,E.materialVariant=s(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=g,E.group=p),t++,E}function l(u,m,x,M,g,p,E){E.reversedDepth===!0&&(g=-g);let T=o(u,m,x,M,g,p);x.transmission>0?r.push(T):x.transparent===!0?a.push(T):i.push(T)}function c(u,m,x,M,g,p){let E=o(u,m,x,M,g,p);x.transmission>0?r.unshift(E):x.transparent===!0?a.unshift(E):i.unshift(E)}function h(u,m){i.length>1&&i.sort(u||H_),r.length>1&&r.sort(m||dc),a.length>1&&a.sort(m||dc)}function d(){for(let u=t,m=e.length;u<m;u++){let x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:d,sort:h}}function G_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new pc,e.set(r,[s])):a>=n.length?(s=new pc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function V_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new P,color:new Ye};break;case"SpotLight":i={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":i={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return e[t.id]=i,i}}}function k_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function X_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function j_(e){let t=new V_,i=k_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new P);let a=new P,n=new _t,s=new _t;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let m=0,x=0,M=0,g=0,p=0,E=0,T=0,S=0,w=0,R=0,f=0,y=0,b=0,O=0;c.sort(X_);for(let B=0,Z=c.length;B<Z;B++){let N=c[B],k=N.color,$=N.intensity,V=N.distance,me=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Mr?me=N.shadow.map.texture:me=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*$,d+=k.g*$,u+=k.b*$;else if(N.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(N.sh.coefficients[q],$);O++}else if(N.isSunLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,ce=i.get(N);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[x]=ce,r.sunShadowMap[x]=me;let Ue=J.getViewportCount();for(let ee=0;ee<Ue;ee++)r.sunShadowMatrix[M+ee]=J.getMatrix(ee),r.sunShadowCascade[M+ee]=J._cascadeData[ee];M+=Ue,x++}r.sun[m]=q,m++}else if(N.isDirectionalLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,ce=i.get(N);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize=J.mapSize,r.directionalShadow[g]=ce,r.directionalShadowMap[g]=me,r.directionalShadowMatrix[g]=N.shadow.matrix,w++}r.directional[g]=q,g++}else if(N.isSpotLight){let q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(k).multiplyScalar($),q.distance=V,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,r.spot[E]=q;let J=N.shadow;if(N.map&&(r.spotLightMap[y]=N.map,y++,J.updateMatrices(N),N.castShadow&&b++),r.spotLightMatrix[E]=J.matrix,N.castShadow){let ce=i.get(N);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize=J.mapSize,r.spotShadow[E]=ce,r.spotShadowMap[E]=me,f++}E++}else if(N.isRectAreaLight){let q=t.get(N);q.color.copy(k).multiplyScalar($),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),r.rectArea[T]=q,T++}else if(N.isPointLight){let q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){let J=N.shadow,ce=i.get(N);ce.shadowIntensity=J.intensity,ce.shadowBias=J.bias,ce.shadowNormalBias=J.normalBias,ce.shadowRadius=J.radius,ce.shadowMapSize=J.mapSize,ce.shadowCameraNear=J.camera.near,ce.shadowCameraFar=J.camera.far,r.pointShadow[p]=ce,r.pointShadowMap[p]=me,r.pointShadowMatrix[p]=N.shadow.matrix,R++}r.point[p]=q,p++}else if(N.isHemisphereLight){let q=t.get(N);q.skyColor.copy(N.color).multiplyScalar($),q.groundColor.copy(N.groundColor).multiplyScalar($),r.hemi[S]=q,S++}}T>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let I=r.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==E||I.rectAreaLength!==T||I.hemiLength!==S||I.numSunShadows!==x||I.numDirectionalShadows!==w||I.numPointShadows!==R||I.numSpotShadows!==f||I.numSpotMaps!==y||I.numLightProbes!==O)&&(r.sun.length=m,r.directional.length=g,r.spot.length=E,r.rectArea.length=T,r.point.length=p,r.hemi.length=S,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=f,r.spotShadowMap.length=f,r.spotLightMatrix.length=f+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=O,I.sunLength=m,I.directionalLength=g,I.pointLength=p,I.spotLength=E,I.rectAreaLength=T,I.hemiLength=S,I.numSunShadows=x,I.numDirectionalShadows=w,I.numPointShadows=R,I.numSpotShadows=f,I.numSpotMaps=y,I.numLightProbes=O,r.version=W_++)}function l(c,h){let d=0,u=0,m=0,x=0,M=0,g=0,p=h.matrixWorldInverse;for(let E=0,T=c.length;E<T;E++){let S=c[E];if(S.isSunLight){let w=r.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),d++}else if(S.isDirectionalLight){let w=r.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),u++}else if(S.isSpotLight){let w=r.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(p),x++}else if(S.isRectAreaLight){let w=r.rectArea[M];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),s.identity(),n.copy(S.matrixWorld),n.premultiply(p),s.extractRotation(n),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),M++}else if(S.isPointLight){let w=r.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){let w=r.hemi[g];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:r}}function fc(e){let t=new j_(e),i=[],r=[],a=[];function n(d){h.camera=d,i.length=0,r.length=0,a.length=0}function s(d){d.isLightProbeGrid?a.push(d):i.push(d)}function o(d){r.push(d)}function l(){t.setup(i),a.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(i,d)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function q_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new fc(e),t.set(a,[o])):n>=s.length?(o=new fc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function Q_(e,t,i){let r=new Ua,a=new Ie,n=new Ie,s=new bt,o=new Wd,l=new Xd,c={},h=i.maxTextureSize,d={[vr]:ai,[ai]:vr,[Ei]:Ei},u=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:Y_,fragmentShader:K_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let x=new hi;x.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new $e(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bn;let p=this.type;this.render=function(R,f,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===fu&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bn);let b=e.getRenderTarget(),O=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),B=e.state;B.setBlending(jr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let Z=p!==this.type;Z&&f.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=R.length;N<k;N++){let $=R[N],V=$.shadow;if(V===void 0){Ve("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);let me=V.getFrameExtents();a.multiply(me),n.copy(V.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/me.x),a.x=n.x*me.x,V.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/me.y),a.y=n.y*me.y,V.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===wa){if($.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Ii(a.x,a.y,{format:Mr,type:Oi,minFilter:ri,magFilter:ri,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new ra(a.x,a.y,Ti),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=or,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else $.isPointLight?(V.map=new ko(a.x),V.map.depthTexture=new Kc(a.x,Ui)):(V.map=new Ii(a.x,a.y),V.map.depthTexture=new ra(a.x,a.y,Ui)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=or,this.type===bn?(V.map.depthTexture.compareFunction=q?Dc:Nc,V.map.depthTexture.minFilter=ri,V.map.depthTexture.magFilter=ri):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==a.x||V.map.height!==a.y)&&V.map.setSize(a.x,a.y);let J=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();$.isPointLight!==!0&&V.updateMatrices($,y);let ce=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:y.layers;for(let Ue=0;Ue<J;Ue++){let ee=V.getCamera(Ue);if($.isPointLight){let he=V.camera,be=V.matrix,Le=$.distance||he.far;Le!==he.far&&(he.far=Le,he.updateProjectionMatrix()),ba.setFromMatrixPosition($.matrixWorld),he.position.copy(ba),Ns.copy(he.position),Ns.add(Z_[Ue]),he.up.copy(J_[Ue]),he.lookAt(Ns),he.updateMatrixWorld(),be.makeTranslation(-ba.x,-ba.y,-ba.z),mc.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),V._frustum.setFromProjectionMatrix(mc,he.coordinateSystem,he.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)e.setRenderTarget(V.map,Ue),e.clear();else{Ue===0&&(e.setRenderTarget(V.map),e.clear());let he=V.getViewport(Ue);s.set(n.x*he.x,n.y*he.y,n.x*he.z,n.y*he.w),B.viewport(s)}r=V.getFrustum(Ue),S(f,y,ee,$,ce,this.type)}V.isPointLightShadow!==!0&&this.type===wa&&E(V,y),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(b,O,I)};function E(R,f){let y=t.update(M);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null?R.mapPass=new Ii(a.x,a.y,{format:Mr,type:Oi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(f,null,y,u,M,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(f,null,y,m,M,null)}function T(R,f,y,b){let O=null,I=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)O=I;else if(O=y.isPointLight===!0?l:o,e.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let B=O.uuid,Z=f.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let k=N[Z];k===void 0&&(k=O.clone(),N[Z]=k,f.addEventListener("dispose",w)),O=k}if(O.visible=f.visible,O.wireframe=f.wireframe,b===wa?O.side=f.shadowSide!==null?f.shadowSide:f.side:O.side=f.shadowSide!==null?f.shadowSide:d[f.side],O.alphaMap=f.alphaMap,O.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,O.map=f.map,O.clipShadows=f.clipShadows,O.clippingPlanes=f.clippingPlanes,O.clipIntersection=f.clipIntersection,O.displacementMap=f.displacementMap,O.displacementScale=f.displacementScale,O.displacementBias=f.displacementBias,O.wireframeLinewidth=f.wireframeLinewidth,O.linewidth=f.linewidth,y.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let B=e.properties.get(O);B.light=y}return O}function S(R,f,y,b,O,I){if(R.visible===!1)return;if(R.layers.test(O)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===wa)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);let Z=t.update(R),N=R.material;if(Array.isArray(N)){let k=Z.groups;for(let $=0,V=k.length;$<V;$++){let me=k[$],q=N[me.materialIndex];if(q&&q.visible){let J=T(R,q,b,I);R.onBeforeShadow(e,R,f,y,Z,J,me),e.renderBufferDirect(y,null,Z,J,R,me),R.onAfterShadow(e,R,f,y,Z,J,me)}}}else if(N.visible){let k=T(R,N,b,I);R.onBeforeShadow(e,R,f,y,Z,k,null),e.renderBufferDirect(y,null,Z,k,R,null),R.onAfterShadow(e,R,f,y,Z,k,null)}}let B=R.children;for(let Z=0,N=B.length;Z<N;Z++)S(B[Z],f,y,b,O,I)}function w(R){R.target.removeEventListener("dispose",w);for(let f in c){let y=c[f],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function $_(e,t){function i(){let L=!1,j=new bt,re=null,le=new bt(0,0,0,0);return{setMask:function(ge){re!==ge&&!L&&(e.colorMask(ge,ge,ge,ge),re=ge)},setLocked:function(ge){L=ge},setClear:function(ge,fe,Ae,ae,We){We===!0&&(ge*=ae,fe*=ae,Ae*=ae),j.set(ge,fe,Ae,ae),le.equals(j)===!1&&(e.clearColor(ge,fe,Ae,ae),le.copy(j))},reset:function(){L=!1,re=null,le.set(-1,0,0,0)}}}function r(){let L=!1,j=!1,re=null,le=null,ge=null;return{setReversed:function(fe){if(j!==fe){let Ae=t.get("EXT_clip_control");fe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),j=fe;let ae=ge;ge=null,this.setClear(ae)}},getReversed:function(){return j},setTest:function(fe){fe?ve(e.DEPTH_TEST):Je(e.DEPTH_TEST)},setMask:function(fe){re!==fe&&!L&&(e.depthMask(fe),re=fe)},setFunc:function(fe){if(j&&(fe=Ku[fe]),le!==fe){switch(fe){case Ds:e.depthFunc(e.NEVER);break;case Is:e.depthFunc(e.ALWAYS);break;case Us:e.depthFunc(e.LESS);break;case Pa:e.depthFunc(e.LEQUAL);break;case Os:e.depthFunc(e.EQUAL);break;case Fs:e.depthFunc(e.GEQUAL);break;case Bs:e.depthFunc(e.GREATER);break;case zs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}le=fe}},setLocked:function(fe){L=fe},setClear:function(fe){ge!==fe&&(ge=fe,j&&(fe=1-fe),e.clearDepth(fe))},reset:function(){L=!1,re=null,le=null,ge=null,j=!1}}}function a(){let L=!1,j=null,re=null,le=null,ge=null,fe=null,Ae=null,ae=null,We=null;return{setTest:function(Oe){L||(Oe?ve(e.STENCIL_TEST):Je(e.STENCIL_TEST))},setMask:function(Oe){j!==Oe&&!L&&(e.stencilMask(Oe),j=Oe)},setFunc:function(Oe,tt,we){(re!==Oe||le!==tt||ge!==we)&&(e.stencilFunc(Oe,tt,we),re=Oe,le=tt,ge=we)},setOp:function(Oe,tt,we){(fe!==Oe||Ae!==tt||ae!==we)&&(e.stencilOp(Oe,tt,we),fe=Oe,Ae=tt,ae=we)},setLocked:function(Oe){L=Oe},setClear:function(Oe){We!==Oe&&(e.clearStencil(Oe),We=Oe)},reset:function(){L=!1,j=null,re=null,le=null,ge=null,fe=null,Ae=null,ae=null,We=null}}}let n=new i,s=new r,o=new a,l={},c=new WeakMap,h={},d={},u={},m=new WeakMap,x=[],M=null,g=!1,p=null,E=null,T=null,S=null,w=null,R=null,f=null,y=new Ye(0,0,0),b=0,O=!1,I=null,B=null,Z=null,N=null,k=null,$=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,me=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=me>=1):q.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=me>=2);let J=null,ce={},Ue=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),he=new bt().fromArray(Ue),be=new bt().fromArray(ee);function Le(L,j,re,le){let ge=new Uint8Array(4),fe=e.createTexture();e.bindTexture(L,fe),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<re;Ae++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,le,0,e.RGBA,e.UNSIGNED_BYTE,ge):e.texImage2D(j+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ge);return fe}let Fe={};Fe[e.TEXTURE_2D]=Le(e.TEXTURE_2D,e.TEXTURE_2D,1),Fe[e.TEXTURE_CUBE_MAP]=Le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[e.TEXTURE_2D_ARRAY]=Le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Fe[e.TEXTURE_3D]=Le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(e.DEPTH_TEST),s.setFunc(Pa),Zt(!1),Et(ol),ve(e.CULL_FACE),yt(jr);function ve(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function Je(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function nt(L,j){return u[L]!==j?(e.bindFramebuffer(L,j),u[L]=j,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=j),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=j),!0):!1}function De(L,j){let re=x,le=!1;if(L){re=m.get(j),re===void 0&&(re=[],m.set(j,re));let ge=L.textures;if(re.length!==ge.length||re[0]!==e.COLOR_ATTACHMENT0){for(let fe=0,Ae=ge.length;fe<Ae;fe++)re[fe]=e.COLOR_ATTACHMENT0+fe;re.length=ge.length,le=!0}}else re[0]!==e.BACK&&(re[0]=e.BACK,le=!0);le&&e.drawBuffers(re)}function dt(L){return M!==L?(e.useProgram(L),M=L,!0):!1}let xt={[kr]:e.FUNC_ADD,[gu]:e.FUNC_SUBTRACT,[_u]:e.FUNC_REVERSE_SUBTRACT};xt[vu]=e.MIN,xt[Mu]=e.MAX;let At={[Su]:e.ZERO,[xu]:e.ONE,[yu]:e.SRC_COLOR,[gc]:e.SRC_ALPHA,[Ru]:e.SRC_ALPHA_SATURATE,[wu]:e.DST_COLOR,[Tu]:e.DST_ALPHA,[Eu]:e.ONE_MINUS_SRC_COLOR,[_c]:e.ONE_MINUS_SRC_ALPHA,[Au]:e.ONE_MINUS_DST_COLOR,[bu]:e.ONE_MINUS_DST_ALPHA,[Cu]:e.CONSTANT_COLOR,[Lu]:e.ONE_MINUS_CONSTANT_COLOR,[Pu]:e.CONSTANT_ALPHA,[Nu]:e.ONE_MINUS_CONSTANT_ALPHA};function yt(L,j,re,le,ge,fe,Ae,ae,We,Oe){if(L===jr){g===!0&&(Je(e.BLEND),g=!1);return}if(g===!1&&(ve(e.BLEND),g=!0),L!==mu){if(L!==p||Oe!==O){if((E!==kr||w!==kr)&&(e.blendEquation(e.FUNC_ADD),E=kr,w=kr),Oe)switch(L){case Ra:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case In:e.blendFunc(e.ONE,e.ONE);break;case ll:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case cl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Xe("WebGLState: Invalid blending: ",L);break}else switch(L){case Ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case In:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case ll:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cl:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",L);break}T=null,S=null,R=null,f=null,y.set(0,0,0),b=0,p=L,O=Oe}return}ge=ge||j,fe=fe||re,Ae=Ae||le,(j!==E||ge!==w)&&(e.blendEquationSeparate(xt[j],xt[ge]),E=j,w=ge),(re!==T||le!==S||fe!==R||Ae!==f)&&(e.blendFuncSeparate(At[re],At[le],At[fe],At[Ae]),T=re,S=le,R=fe,f=Ae),(ae.equals(y)===!1||We!==b)&&(e.blendColor(ae.r,ae.g,ae.b,We),y.copy(ae),b=We),p=L,O=!1}function Gt(L,j){L.side===Ei?Je(e.CULL_FACE):ve(e.CULL_FACE);let re=L.side===ai;j&&(re=!re),Zt(re),L.blending===Ra&&L.transparent===!1?yt(jr):yt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(e.SAMPLE_ALPHA_TO_COVERAGE):Je(e.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(L){I!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),I=L)}function Et(L){L!==du?(ve(e.CULL_FACE),L!==B&&(L===ol?e.cullFace(e.BACK):L===pu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Je(e.CULL_FACE),B=L}function Nt(L){L!==Z&&(V&&e.lineWidth(L),Z=L)}function Vt(L,j,re){L?(ve(e.POLYGON_OFFSET_FILL),(N!==j||k!==re)&&(N=j,k=re,s.getReversed()&&(j=-j,re=-re),e.polygonOffset(j,re))):Je(e.POLYGON_OFFSET_FILL)}function kt(L){L?ve(e.SCISSOR_TEST):Je(e.SCISSOR_TEST)}function ei(L){L===void 0&&(L=e.TEXTURE0+$-1),J!==L&&(e.activeTexture(L),J=L)}function F(L,j,re){re===void 0&&(J===null?re=e.TEXTURE0+$-1:re=J);let le=ce[re];le===void 0&&(le={type:void 0,texture:void 0},ce[re]=le),(le.type!==L||le.texture!==j)&&(J!==re&&(e.activeTexture(re),J=re),e.bindTexture(L,j||Fe[L]),le.type=L,le.texture=j)}function ti(){let L=ce[J];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{e.compressedTexImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function vt(){try{e.compressedTexImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function xe(){try{e.texSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function mt(){try{e.texSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Pe(){try{e.compressedTexSubImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function Dt(){try{e.texStorage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function A(){try{e.texStorage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function _(){try{e.texImage2D(...arguments)}catch(L){Xe("WebGLState:",L)}}function G(){try{e.texImage3D(...arguments)}catch(L){Xe("WebGLState:",L)}}function ne(L){return d[L]!==void 0?d[L]:e.getParameter(L)}function Q(L,j){d[L]!==j&&(e.pixelStorei(L,j),d[L]=j)}function Me(L){he.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function Se(L){be.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),be.copy(L))}function U(L,j){let re=c.get(j);re===void 0&&(re=new WeakMap,c.set(j,re));let le=re.get(L);le===void 0&&(le=e.getUniformBlockIndex(j,L.name),e.uniformBlockBinding(j,le,le),re.set(L,le))}function ie(L,j,re){let le=c.get(j).get(L);l[le]!==re&&(e.bindBufferBase(e.UNIFORM_BUFFER,le,re),l[le]=re)}function te(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,ce={},u={},l={},m=new WeakMap,x=[],M=null,g=!1,p=null,E=null,T=null,S=null,w=null,R=null,f=null,y=new Ye(0,0,0),b=0,O=!1,I=null,B=null,Z=null,N=null,k=null,he.set(0,0,e.canvas.width,e.canvas.height),be.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ve,disable:Je,bindFramebuffer:nt,drawBuffers:De,useProgram:dt,setBlending:yt,setMaterial:Gt,setFlipSided:Zt,setCullFace:Et,setLineWidth:Nt,setPolygonOffset:Vt,setScissorTest:kt,activeTexture:ei,bindTexture:F,unbindTexture:ti,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:_,texImage3D:G,pixelStorei:Q,getParameter:ne,updateUBOMapping:U,uniformBlockBinding:ie,texStorage2D:Dt,texStorage3D:A,texSubImage2D:xe,texSubImage3D:mt,compressedTexSubImage2D:Pe,compressedTexSubImage3D:ke,scissor:Me,viewport:Se,reset:te}}function e0(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap,d=new Set,u,m=new WeakMap,x=new Set,M=new FinalizationRegistry(A=>x.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,_){return g?new OffscreenCanvas(A,_):Hn("canvas")}function E(A,_,G){let ne=1,Q=Dt(A);if((Q.width>G||Q.height>G)&&(ne=G/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Me=Math.floor(ne*Q.width),Se=Math.floor(ne*Q.height);u===void 0&&(u=p(Me,Se));let U=_?p(Me,Se):u;return U.width=Me,U.height=Se,U.getContext("2d").drawImage(A,0,0,Me,Se),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Me+"x"+Se+")."),U}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function T(A){return A.generateMipmaps}function S(A){e.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(A,_,G,ne,Q,Me=!1){if(A!==null){if(e[A]!==void 0)return e[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Se;ne&&(Se=t.get("EXT_texture_norm16"),Se||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=_;if(_===e.RED&&(G===e.FLOAT&&(U=e.R32F),G===e.HALF_FLOAT&&(U=e.R16F),G===e.UNSIGNED_BYTE&&(U=e.R8),G===e.UNSIGNED_SHORT&&Se&&(U=Se.R16_EXT),G===e.SHORT&&Se&&(U=Se.R16_SNORM_EXT)),_===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.R8UI),G===e.UNSIGNED_SHORT&&(U=e.R16UI),G===e.UNSIGNED_INT&&(U=e.R32UI),G===e.BYTE&&(U=e.R8I),G===e.SHORT&&(U=e.R16I),G===e.INT&&(U=e.R32I)),_===e.RG&&(G===e.FLOAT&&(U=e.RG32F),G===e.HALF_FLOAT&&(U=e.RG16F),G===e.UNSIGNED_BYTE&&(U=e.RG8),G===e.UNSIGNED_SHORT&&Se&&(U=Se.RG16_EXT),G===e.SHORT&&Se&&(U=Se.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RG8UI),G===e.UNSIGNED_SHORT&&(U=e.RG16UI),G===e.UNSIGNED_INT&&(U=e.RG32UI),G===e.BYTE&&(U=e.RG8I),G===e.SHORT&&(U=e.RG16I),G===e.INT&&(U=e.RG32I)),_===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RGB8UI),G===e.UNSIGNED_SHORT&&(U=e.RGB16UI),G===e.UNSIGNED_INT&&(U=e.RGB32UI),G===e.BYTE&&(U=e.RGB8I),G===e.SHORT&&(U=e.RGB16I),G===e.INT&&(U=e.RGB32I)),_===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(U=e.RGBA16UI),G===e.UNSIGNED_INT&&(U=e.RGBA32UI),G===e.BYTE&&(U=e.RGBA8I),G===e.SHORT&&(U=e.RGBA16I),G===e.INT&&(U=e.RGBA32I)),_===e.RGB&&(G===e.UNSIGNED_SHORT&&Se&&(U=Se.RGB16_EXT),G===e.SHORT&&Se&&(U=Se.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(U=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(U=e.R11F_G11F_B10F)),_===e.RGBA){let ie=Me?zn:st.getTransfer(Q);G===e.FLOAT&&(U=e.RGBA32F),G===e.HALF_FLOAT&&(U=e.RGBA16F),G===e.UNSIGNED_BYTE&&(U=ie===ft?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&Se&&(U=Se.RGBA16_EXT),G===e.SHORT&&Se&&(U=Se.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(U=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(U=e.RGB5_A1)}return(U===e.R16F||U===e.R32F||U===e.RG16F||U===e.RG32F||U===e.RGBA16F||U===e.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function f(A,_){let G;return A?_===null||_===Ui||_===ea?G=e.DEPTH24_STENCIL8:_===Ti?G=e.DEPTH32F_STENCIL8:_===Da&&(G=e.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ui||_===ea?G=e.DEPTH_COMPONENT24:_===Ti?G=e.DEPTH_COMPONENT32F:_===Da&&(G=e.DEPTH_COMPONENT16),G}function y(A,_){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==ri?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function b(A){let _=new WeakRef(A);r.get(A).__ref=_,x.add(_),M.register(A,_,_)}function O(A){let _=r.get(A).__ref;_!==void 0&&(x.delete(_),M.unregister(_))}function I(A){Z(A.target)}function B(A){N(A.target)}function Z(A){A.removeEventListener("dispose",I),O(A),$(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function N(A){A.removeEventListener("dispose",B),O(A),me(A)}function k(){for(let A of x){let _=A.deref();_!==void 0&&(_.isRenderTarget===!0?N(_):Z(_))}x.clear(),d.clear()}function $(A){let _=r.get(A);if(_.__webglInit===void 0)return;let G=A.source,ne=m.get(G);if(ne){let Q=ne[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&V(A),Object.keys(ne).length===0&&m.delete(G)}r.remove(A)}function V(A){let _=r.get(A);e.deleteTexture(_.__webglTexture);let G=A.source,ne=m.get(G);delete ne[_.__cacheKey],s.memory.textures--}function me(A){let _=r.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&Z(G),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let Me=0;Me<_.__webglFramebuffer[Q].length;Me++)e.deleteFramebuffer(_.__webglFramebuffer[Q][Me]);else e.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[Q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ne=A.textures;for(let Q=0,Me=ne.length;Q<Me;Q++){let Se=r.get(ne[Q]);Se.__webglTexture&&(e.deleteTexture(Se.__webglTexture),s.memory.textures--),r.remove(ne[Q])}r.remove(A)}let q=0;function J(){q=0}function ce(){return q}function Ue(A){q=A}function ee(){let A=q;return A>=a.maxTextures&&Ve("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+a.maxTextures),q+=1,A}function he(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function be(A,_){let G=r.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let ne=A.image;if(ne===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(G,A,_);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+_)}function Le(A,_){let G=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Gt(G,A,_);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+_)}function Fe(A,_){let G=r.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Gt(G,A,_);return}i.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+_)}function ve(A,_){let G=r.get(A);if(A.version>0&&G.__version!==A.version){Zt(G,A,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+_)}let Je={[Hs]:e.REPEAT,[Xi]:e.CLAMP_TO_EDGE,[Gs]:e.MIRRORED_REPEAT},nt={[Wt]:e.NEAREST,[Uu]:e.NEAREST_MIPMAP_NEAREST,[en]:e.NEAREST_MIPMAP_LINEAR,[ri]:e.LINEAR,[is]:e.LINEAR_MIPMAP_NEAREST,[ar]:e.LINEAR_MIPMAP_LINEAR},De={[zu]:e.NEVER,[Ic]:e.ALWAYS,[Hu]:e.LESS,[Nc]:e.LEQUAL,[Gu]:e.EQUAL,[Dc]:e.GEQUAL,[Vu]:e.GREATER,[ku]:e.NOTEQUAL};function dt(A,_){if(_.type===Ti&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ri||_.magFilter===is||_.magFilter===en||_.magFilter===ar||_.minFilter===ri||_.minFilter===is||_.minFilter===en||_.minFilter===ar)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Je[_.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Je[_.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Je[_.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,nt[_.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,nt[_.minFilter]),_.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,De[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==en&&_.minFilter!==ar||_.type===Ti&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function xt(A,_){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",I),b(_));let ne=_.source,Q=m.get(ne);Q===void 0&&(Q={},m.set(ne,Q));let Me=he(_);if(Me!==A.__cacheKey){Q[Me]===void 0&&(Q[Me]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),Q[Me].usedTimes++;let Se=Q[A.__cacheKey];Se!==void 0&&(Q[A.__cacheKey].usedTimes--,Se.usedTimes===0&&V(_)),A.__cacheKey=Me,A.__webglTexture=Q[Me].texture}return G}function At(A,_,G){return Math.floor(Math.floor(A/G)/_)}function yt(A,_,G,ne){let Q=A.updateRanges;if(Q.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,G,ne,_.data);else{Q.sort((te,L)=>te.start-L.start);let Me=0;for(let te=1;te<Q.length;te++){let L=Q[Me],j=Q[te],re=L.start+L.count,le=At(j.start,_.width,4),ge=At(L.start,_.width,4);j.start<=re+1&&le===ge&&At(j.start+j.count-1,_.width,4)===le?L.count=Math.max(L.count,j.start+j.count-L.start):(++Me,Q[Me]=j)}Q.length=Me+1;let Se=i.getParameter(e.UNPACK_ROW_LENGTH),U=i.getParameter(e.UNPACK_SKIP_PIXELS),ie=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let te=0,L=Q.length;te<L;te++){let j=Q[te],re=Math.floor(j.start/4),le=Math.ceil(j.count/4),ge=re%_.width,fe=Math.floor(re/_.width),Ae=le;i.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(e.UNPACK_SKIP_ROWS,fe),i.texSubImage2D(e.TEXTURE_2D,0,ge,fe,Ae,1,G,ne,_.data)}A.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Se),i.pixelStorei(e.UNPACK_SKIP_PIXELS,U),i.pixelStorei(e.UNPACK_SKIP_ROWS,ie)}}function Gt(A,_,G){let ne=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ne=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ne=e.TEXTURE_3D);let Q=xt(A,_),Me=_.source;i.bindTexture(ne,A.__webglTexture,e.TEXTURE0+G);let Se=r.get(Me);if(Me.version!==Se.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+G),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let ae=st.getPrimaries(st.workingColorSpace),We=_.colorSpace===rr?null:st.getPrimaries(_.colorSpace),Oe=_.colorSpace===rr||ae===We?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let U=E(_.image,!1,a.maxTextureSize);U=ke(_,U);let ie=n.convert(_.format,_.colorSpace),te=n.convert(_.type),L=R(_.internalFormat,ie,te,_.normalized,_.colorSpace,_.isVideoTexture);dt(ne,_);let j,re=_.mipmaps,le=_.isVideoTexture!==!0,ge=Se.__version===void 0||Q===!0,fe=Me.dataReady,Ae=y(_,U);if(_.isDepthTexture)L=f(_.format===nr,_.type),ge&&(le?i.texStorage2D(e.TEXTURE_2D,1,L,U.width,U.height):i.texImage2D(e.TEXTURE_2D,0,L,U.width,U.height,0,ie,te,null));else if(_.isDataTexture)if(re.length>0){le&&ge&&i.texStorage2D(e.TEXTURE_2D,Ae,L,re[0].width,re[0].height);for(let ae=0,We=re.length;ae<We;ae++)j=re[ae],le?fe&&i.texSubImage2D(e.TEXTURE_2D,ae,0,0,j.width,j.height,ie,te,j.data):i.texImage2D(e.TEXTURE_2D,ae,L,j.width,j.height,0,ie,te,j.data);_.generateMipmaps=!1}else le?(ge&&i.texStorage2D(e.TEXTURE_2D,Ae,L,U.width,U.height),fe&&yt(_,U,ie,te)):i.texImage2D(e.TEXTURE_2D,0,L,U.width,U.height,0,ie,te,U.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){le&&ge&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,L,re[0].width,re[0].height,U.depth);for(let ae=0,We=re.length;ae<We;ae++)if(j=re[ae],_.format!==Di)if(ie!==null)if(le){if(fe)if(_.layerUpdates.size>0){let Oe=ql(j.width,j.height,_.format,_.type);for(let tt of _.layerUpdates){let we=j.data.subarray(tt*Oe/j.data.BYTES_PER_ELEMENT,(tt+1)*Oe/j.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,tt,j.width,j.height,1,ie,we)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,j.width,j.height,U.depth,ie,j.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ae,L,j.width,j.height,U.depth,0,j.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?fe&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ae,0,0,0,j.width,j.height,U.depth,ie,te,j.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ae,L,j.width,j.height,U.depth,0,ie,te,j.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{le&&ge&&i.texStorage2D(e.TEXTURE_2D,Ae,L,re[0].width,re[0].height);for(let ae=0,We=re.length;ae<We;ae++)j=re[ae],_.format!==Di?ie!==null?le?fe&&i.compressedTexSubImage2D(e.TEXTURE_2D,ae,0,0,j.width,j.height,ie,j.data):i.compressedTexImage2D(e.TEXTURE_2D,ae,L,j.width,j.height,0,j.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?fe&&i.texSubImage2D(e.TEXTURE_2D,ae,0,0,j.width,j.height,ie,te,j.data):i.texImage2D(e.TEXTURE_2D,ae,L,j.width,j.height,0,ie,te,j.data)}else if(_.isDataArrayTexture)if(le){if(ge&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,L,U.width,U.height,U.depth),fe)if(_.layerUpdates.size>0){let ae=ql(U.width,U.height,_.format,_.type);for(let We of _.layerUpdates){let Oe=U.data.subarray(We*ae/U.data.BYTES_PER_ELEMENT,(We+1)*ae/U.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,We,U.width,U.height,1,ie,te,Oe)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,ie,te,U.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,L,U.width,U.height,U.depth,0,ie,te,U.data);else if(_.isData3DTexture)le?(ge&&i.texStorage3D(e.TEXTURE_3D,Ae,L,U.width,U.height,U.depth),fe&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,ie,te,U.data)):i.texImage3D(e.TEXTURE_3D,0,L,U.width,U.height,U.depth,0,ie,te,U.data);else if(_.isFramebufferTexture){if(ge)if(le)i.texStorage2D(e.TEXTURE_2D,Ae,L,U.width,U.height);else{let ae=U.width,We=U.height;for(let Oe=0;Oe<Ae;Oe++)i.texImage2D(e.TEXTURE_2D,Oe,L,ae,We,0,ie,te,null),ae>>=1,We>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let ae=e.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),U.parentNode!==ae){ae.appendChild(U),d.add(_),ae.onpaint=We=>{let Oe=We.changedElements;for(let tt of d)Oe.includes(tt.image)&&(tt.needsUpdate=!0)},ae.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,U);else{let We=e.RGBA,Oe=e.RGBA,tt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,We,Oe,tt,U)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(re.length>0){if(le&&ge){let ae=Dt(re[0]);i.texStorage2D(e.TEXTURE_2D,Ae,L,ae.width,ae.height)}for(let ae=0,We=re.length;ae<We;ae++)j=re[ae],le?fe&&i.texSubImage2D(e.TEXTURE_2D,ae,0,0,ie,te,j):i.texImage2D(e.TEXTURE_2D,ae,L,ie,te,j);_.generateMipmaps=!1}else if(le){if(ge){let ae=Dt(U);i.texStorage2D(e.TEXTURE_2D,Ae,L,ae.width,ae.height)}fe&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ie,te,U)}else i.texImage2D(e.TEXTURE_2D,0,L,ie,te,U);T(_)&&_.mipmapsAutoUpdate===!0&&S(ne),Se.__version=Me.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Zt(A,_,G){if(_.image.length!==6)return;let ne=xt(A,_),Q=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+G);let Me=r.get(Q);if(Q.version!==Me.__version||ne===!0){i.activeTexture(e.TEXTURE0+G);let Se=st.getPrimaries(st.workingColorSpace),U=_.colorSpace===rr?null:st.getPrimaries(_.colorSpace),ie=_.colorSpace===rr||Se===U?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let te=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,j=[];for(let we=0;we<6;we++)!te&&!L?j[we]=E(_.image[we],!0,a.maxCubemapSize):j[we]=L?_.image[we].image:_.image[we],j[we]=ke(_,j[we]);let re=j[0],le=n.convert(_.format,_.colorSpace),ge=n.convert(_.type),fe=R(_.internalFormat,le,ge,_.normalized,_.colorSpace),Ae=_.isVideoTexture!==!0,ae=Me.__version===void 0||ne===!0,We=Q.dataReady,Oe=y(_,re);dt(e.TEXTURE_CUBE_MAP,_);let tt;if(_.isDepthTexture){if(fe=f(_.format===nr,_.type),ae)if(Ae)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,fe,re.width,re.height);else for(let we=0;we<6;we++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,fe,re.width,re.height,0,le,ge,null)}else if(te){Ae&&ae&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Oe,fe,re.width,re.height);for(let we=0;we<6;we++){tt=j[we].mipmaps;for(let pt=0;pt<tt.length;pt++){let gt=tt[pt];_.format!==Di?le!==null?Ae?We&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,0,0,gt.width,gt.height,le,gt.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,fe,gt.width,gt.height,0,gt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,0,0,gt.width,gt.height,le,ge,gt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,fe,gt.width,gt.height,0,le,ge,gt.data)}}}else{if(tt=_.mipmaps,Ae&&ae){tt.length>0&&Oe++;let we=Dt(j[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Oe,fe,we.width,we.height)}for(let we=0;we<6;we++)if(L){Ae?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,j[we].width,j[we].height,le,ge,j[we].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,fe,j[we].width,j[we].height,0,le,ge,j[we].data);for(let pt=0;pt<tt.length;pt++){let gt=tt[pt].image[we].image;Ae?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,0,0,gt.width,gt.height,le,ge,gt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,fe,gt.width,gt.height,0,le,ge,gt.data)}}else{Ae?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,le,ge,j[we]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,fe,le,ge,j[we]);for(let pt=0;pt<tt.length;pt++){let gt=tt[pt];Ae?We&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,0,0,le,ge,gt.image[we]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,fe,le,ge,gt.image[we])}}}T(_)&&_.mipmapsAutoUpdate===!0&&S(e.TEXTURE_CUBE_MAP),Me.__version=Q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Et(A,_,G,ne,Q,Me){let Se=n.convert(G.format,G.colorSpace),U=n.convert(G.type),ie=R(G.internalFormat,Se,U,G.normalized,G.colorSpace),te=r.get(_),L=r.get(G);if(L.__renderTarget=_,!te.__hasExternalTextures){let j=Math.max(1,_.width>>Me),re=Math.max(1,_.height>>Me);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?i.texImage3D(Q,Me,ie,j,re,_.depth,0,Se,U,null):i.texImage2D(Q,Me,ie,j,re,0,Se,U,null)}i.bindFramebuffer(e.FRAMEBUFFER,A),mt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ne,Q,L.__webglTexture,0,xe(_)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ne,Q,L.__webglTexture,Me),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Nt(A,_,G){if(e.bindRenderbuffer(e.RENDERBUFFER,A),_.depthBuffer){let ne=_.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,Me=f(_.stencilBuffer,Q),Se=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;mt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(_),Me,_.width,_.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(_),Me,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Me,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Se,e.RENDERBUFFER,A)}else{let ne=_.textures;for(let Q=0;Q<ne.length;Q++){let Me=ne[Q],Se=n.convert(Me.format,Me.colorSpace),U=n.convert(Me.type),ie=R(Me.internalFormat,Se,U,Me.normalized,Me.colorSpace);mt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe(_),ie,_.width,_.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe(_),ie,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ie,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Vt(A,_,G){let ne=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(_.depthTexture);Q.__renderTarget=_;let Me=ne?_.depthTexture.image[0]:_.depthTexture.image;(!Q.__webglTexture||Me.width!==_.width||Me.height!==_.height)&&(Me.width=_.width,Me.height=_.height,_.depthTexture.needsUpdate=!0),ne?ve(_.depthTexture,0):be(_.depthTexture,0);let Se=Q.__webglTexture,U=xe(_),ie=ne?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,te=_.depthTexture.format===nr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===or)mt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,ie,Se,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,te,ie,Se,0);else if(_.depthTexture.format===nr)mt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,ie,Se,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,te,ie,Se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(A){let _=r.get(A),G=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let ne=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ne){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=ne}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(G)for(let ne=0;ne<6;ne++)Vt(_.__webglFramebuffer[ne],A,ne);else A.texture.mipmaps.length>0?Vt(_.__webglFramebuffer[0],A,0):Vt(_.__webglFramebuffer,A,0);else if(G){_.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[ne]),_.__webglDepthbuffer[ne]===void 0)_.__webglDepthbuffer[ne]=e.createRenderbuffer(),Nt(_.__webglDepthbuffer[ne],A,!1);else{let Q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Me=_.__webglDepthbuffer[ne];e.bindRenderbuffer(e.RENDERBUFFER,Me),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,Me)}}else if(A.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Nt(_.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Q),e.framebufferRenderbuffer(e.FRAMEBUFFER,ne,e.RENDERBUFFER,Q)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ei(A,_,G){let ne=r.get(A);_!==void 0&&Et(ne.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&kt(A)}function F(A){let _=A.texture,G=r.get(A),ne=r.get(_);A.addEventListener("dispose",B),b(A);let Q=A.textures,Me=A.isWebGLCubeRenderTarget===!0,Se=Q.length>1;if(Se||(ne.__webglTexture===void 0&&(ne.__webglTexture=e.createTexture()),ne.__version=_.version,s.memory.textures++),Me){G.__webglFramebuffer=[];for(let U=0;U<6;U++)if(_.mipmaps.length>0){G.__webglFramebuffer[U]=[];for(let ie=0;ie<_.mipmaps.length;ie++)G.__webglFramebuffer[U][ie]=e.createFramebuffer()}else G.__webglFramebuffer[U]=e.createFramebuffer()}else{if(_.mipmaps.length>0){G.__webglFramebuffer=[];for(let U=0;U<_.mipmaps.length;U++)G.__webglFramebuffer[U]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(Se)for(let U=0,ie=Q.length;U<ie;U++){let te=r.get(Q[U]);te.__webglTexture===void 0&&(te.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&mt(A)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let U=0;U<Q.length;U++){let ie=Q[U];G.__webglColorRenderbuffer[U]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[U]);let te=n.convert(ie.format,ie.colorSpace),L=n.convert(ie.type),j=R(ie.internalFormat,te,L,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),re=xe(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,j,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+U,e.RENDERBUFFER,G.__webglColorRenderbuffer[U])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),Nt(G.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Me){i.bindTexture(e.TEXTURE_CUBE_MAP,ne.__webglTexture),dt(e.TEXTURE_CUBE_MAP,_);for(let U=0;U<6;U++)if(_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Et(G.__webglFramebuffer[U][ie],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,ie);else Et(G.__webglFramebuffer[U],A,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);T(_)?S(e.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}else if(Se){for(let U=0,ie=Q.length;U<ie;U++){let te=Q[U],L=r.get(te),j=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(j,L.__webglTexture),dt(j,te),Et(G.__webglFramebuffer,A,te,e.COLOR_ATTACHMENT0+U,j,0),T(te)&&S(j)}i.unbindTexture()}else{let U=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(U=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(U,ne.__webglTexture),dt(U,_),_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Et(G.__webglFramebuffer[ie],A,_,e.COLOR_ATTACHMENT0,U,ie);else Et(G.__webglFramebuffer,A,_,e.COLOR_ATTACHMENT0,U,0);T(_)?S(U):_.mipmaps.length>0&&e.texParameteri(U,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}A.depthBuffer&&kt(A)}function ti(A){let _=A.textures;for(let G=0,ne=_.length;G<ne;G++){let Q=_[G];if(T(Q)&&Q.mipmapsAutoUpdate===!0){let Me=w(A),Se=r.get(Q).__webglTexture;i.bindTexture(Me,Se),S(Me),i.unbindTexture()}}}let ut=[];function vt(A){if(A.samples>0){if(mt(A)===!1){let _=A.textures,G=A.width,ne=A.height,Q=e.COLOR_BUFFER_BIT,Me=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Se=r.get(A),U=_.length>1;if(U)for(let ie=0;ie<_.length;ie++)i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),U){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ie]);let te=r.get(_[ie]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,G,ne,0,0,G,ne,Q,e.NEAREST),l===!0&&(ut.length=0,ut.push(e.COLOR_ATTACHMENT0+ie),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ut.push(Me),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),U)for(let ie=0;ie<_.length;ie++){i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.RENDERBUFFER,Se.__webglColorRenderbuffer[ie]);let te=r.get(_[ie]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Se.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ie,e.TEXTURE_2D,te,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function xe(A){return Math.min(a.maxSamples,A.samples)}function mt(A){let _=r.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pe(A){let _=s.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ke(A,_){let G=A.colorSpace,ne=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Bn&&G!==rr&&(st.getTransfer(G)===ft?(ne!==Di||Q!==ci)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",G)),_}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=J,this.getTextureUnits=ce,this.setTextureUnits=Ue,this.setTexture2D=be,this.setTexture2DArray=Le,this.setTexture3D=Fe,this.setTextureCube=ve,this.rebindTextures=ei,this.setupRenderTarget=F,this.updateRenderTargetMipmap=ti,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=mt,this.dispose=k}function t0(e,t){function i(r,a=rr){let n,s=st.getTransfer(a);if(r===ci)return e.UNSIGNED_BYTE;if(r===Ao)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Ro)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Rc)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Cc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===wc)return e.BYTE;if(r===Ac)return e.SHORT;if(r===Da)return e.UNSIGNED_SHORT;if(r===wo)return e.INT;if(r===Ui)return e.UNSIGNED_INT;if(r===Ti)return e.FLOAT;if(r===Oi)return e.HALF_FLOAT;if(r===Lc)return e.ALPHA;if(r===Pc)return e.RGB;if(r===Di)return e.RGBA;if(r===or)return e.DEPTH_COMPONENT;if(r===nr)return e.DEPTH_STENCIL;if(r===Co)return e.RED;if(r===Lo)return e.RED_INTEGER;if(r===Mr)return e.RG;if(r===Po)return e.RG_INTEGER;if(r===No)return e.RGBA_INTEGER;if(r===wn||r===An||r===Rn||r===Cn)if(s===ft)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===wn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===An)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===wn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===An)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cn)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vs||r===ks||r===Ws||r===Xs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Vs)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ks)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ws)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===js||r===qs||r===Ys||r===Ks||r===Zs||r===Un||r===Js)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===js||r===qs)return s===ft?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ys)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ks)return n.COMPRESSED_R11_EAC;if(r===Zs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Un)return n.COMPRESSED_RG11_EAC;if(r===Js)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Qs||r===$s||r===eo||r===to||r===io||r===ro||r===ao||r===no||r===so||r===oo||r===lo||r===co||r===ho||r===uo)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Qs)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$s)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===to)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===io)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ro)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ao)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===no)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===so)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===co)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ho)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uo)return s===ft?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===po||r===fo||r===mo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===po)return s===ft?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===go||r===_o||r===On||r===vo)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===go)return n.COMPRESSED_RED_RGTC1_EXT;if(r===_o)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===On)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vo)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ea?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function o0(e,t){function i(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,dh(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,E,T,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(g,p),d(g,p)):p.isMeshPhongMaterial?(n(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,S)):p.isMeshMatcapMaterial?(n(g,p),x(g,p)):p.isMeshDepthMaterial?n(g,p):p.isMeshDistanceMaterial?(n(g,p),M(g,p)):p.isMeshNormalMaterial?n(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,E,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,i(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ai&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,i(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ai&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,i(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,i(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=t.get(p),T=E.envMap,S=E.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(s0.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Nh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,E,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=T*.5,p.map&&(g.map.value=p.map,i(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,E){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ai&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){let E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function l0(e,t,i,r){let a={},n={};function s(E,T){let S=T.program;r.uniformBlockBinding(E,S,a[E.id])}function o(E,T){let S=a[E.id];S===void 0&&(x(E),S=l(E),a[E.id]=S,E.addEventListener("dispose",g));let w=T.program;r.updateUBOMapping(E,w);let R=t.render.frame;n[E.id]!==R&&(c(E),n[E.id]=R)}function l(E){let T=e.createBuffer(),S=E.__size,w=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,S,w),e.bindBuffer(e.UNIFORM_BUFFER,null),T}function c(E){let T=a[E.id],S=E.uniforms,w=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let R=0,f=S.length;R<f;R++){let y=S[R];if(Array.isArray(y))for(let b=0,O=y.length;b<O;b++)h(y[b],R,b,w);else h(y,R,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(E,T,S,w){if(u(E,T,S,w)===!0){let R=E.__offset,f=E.value;if(Array.isArray(f)){let y=0;for(let b=0;b<f.length;b++){let O=f[b],I=M(O,!0);d(O,E.__data,y),y+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else d(f,E.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,R,E.__data)}}function d(E,T,S){typeof E=="number"||typeof E=="boolean"?T[S]=E:E.isMatrix3?(T[S]=E.elements[0],T[S+1]=E.elements[1],T[S+2]=E.elements[2],T[S+3]=0,T[S+4]=E.elements[3],T[S+5]=E.elements[4],T[S+6]=E.elements[5],T[S+7]=0,T[S+8]=E.elements[6],T[S+9]=E.elements[7],T[S+10]=E.elements[8],T[S+11]=0):ArrayBuffer.isView(E)?T.set(E.subarray(0,T.length-S),S):E.toArray(T,S)}function u(E,T,S,w){let R=E.value,f=T+"_"+S;if(Array.isArray(R)){w[f]===void 0&&(w[f]=[]);let y=w[f],b=!1;for(let O=0;O<R.length;O++)m(R[O],y,O)===!0&&(b=!0);return b}return m(R,w,f)}function m(E,T,S){if(T[S]===void 0)return typeof E=="number"||typeof E=="boolean"?T[S]=E:ArrayBuffer.isView(E)?T[S]=E.slice():T[S]=E.clone(),!0;{let w=T[S];if(typeof E=="number"||typeof E=="boolean"){if(w!==E)return T[S]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(w.equals(E)===!1)return w.copy(E),!0}}return!1}function x(E){let T=E.uniforms,S=0,w=16;for(let f=0,y=T.length;f<y;f++){let b=Array.isArray(T[f])?T[f]:[T[f]];for(let O=0,I=b.length;O<I;O++){let B=b[O],Z=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(T[f])||Array.isArray(B.value),k=S;for(let V=0,me=Z.length;V<me;V++){let q=Z[V],J=M(q,N),ce=S%w,Ue=ce%J.boundary,ee=ce+Ue;S+=Ue,ee!==0&&w-ee<J.storage&&(S+=w-ee),V===0&&(k=S),S+=J.storage}let $=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new $((S-k)/Float32Array.BYTES_PER_ELEMENT),B.__offset=k}}let R=S%w;return R>0&&(S+=w-R),E.__size=S,E.__cache={},this}function M(E,T){let S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=16,S.storage=48):E.isMatrix4?(S.boundary=16,S.storage=64):E.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(S.boundary=16,S.storage=E.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",E),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(E){let T=E.target;T.removeEventListener("dispose",g),e.deleteBuffer(a[T.id]),delete a[T.id],delete n[T.id]}function p(){for(let E in a)e.deleteBuffer(a[E]);a={},n={}}return{bind:s,update:o,dispose:p}}function h0(){return Pi===null&&(Pi=new jc(c0,16,16,Mr,Oi),Pi.name="DFG_LUT",Pi.minFilter=ri,Pi.magFilter=ri,Pi.wrapS=Xi,Pi.wrapT=Xi,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}var du,ol,pu,bn,fu,wa,vr,ai,Ei,jr,Ra,In,ll,cl,mu,kr,gu,_u,vu,Mu,Su,xu,yu,Eu,gc,_c,Tu,bu,wu,Au,Ru,Cu,Lu,Pu,Nu,Ds,Is,Us,Pa,Os,Fs,Bs,zs,bo,Du,Iu,ji,vc,Mc,Sc,xc,yc,Ec,Tc,bc,$r,Na,es,ts,Hs,Xi,Gs,Wt,Uu,en,ri,is,ar,ci,wc,Ac,Da,wo,Ui,Ti,Oi,Ao,Ro,ea,Rc,Cc,Lc,Pc,Di,or,nr,Co,Lo,Mr,Po,No,wn,An,Rn,Cn,Vs,ks,Ws,Xs,js,qs,Ys,Ks,Zs,Un,Js,Qs,$s,eo,to,io,ro,ao,no,so,oo,lo,co,ho,uo,po,fo,mo,go,_o,On,vo,Fn,Mo,rs,hl,ul,dl,pl,Ou,So,Fu,rr,pi,Bn,zn,ft,as,Bu,zu,Hu,Gu,Nc,Vu,ku,Dc,Ic,Wu,fl,bi,Ia,ml,ta,Ku,xr,qt,ns,xo,Yr,Ie,yr,Kr,P,os,_l,Zr,qe,ls,vl,Ml,st,Cr,td,id,Io,rd,hs,wi,Jr,bt,ad,Ii,Oc,nd,_r,_t,Lr,Si,sd,od,Ji,tn,si,Sl,xl,ia,Uo,ld,yl,Pr,Hi,rn,va,cd,hd,El,Tl,bl,wl,ud,Nr,us,$t,Pt,dd,ds,Bc,Qi,an,Ye,Yt,zc,Gc,xi,Gi,fs,Vi,Dr,Ir,Al,ms,gs,_s,vs,Ms,Ss,Ma,Er,ki,yi,nn,Ur,Or,Fr,$i,er,pr,Sa,sn,on,fr,Lt,ln,pd,sr,Vc,kc,ht,fd,xa,ys,Fa,md,di,Es,Br,oi,ya,Bt,hi,Ts,gd,_d,ir,vd,Ba,Wi,bs,cn,hn,Xc,Gn,Rl,mr,un,Cl,dn,pn,fn,ws,mn,Ll,gn,$e,jc,Pl,zr,Nl,vn,Dl,Sd,Ea,Ta,Tr,gr,xd,Mn,Ua,Il,yd,Yc,ra,Kc,Zc,Fi,Oo,Ai,na,Ed,ih,Yi,ah,Td,Ul,Ol,As,Rs,Cs,Vn,Nd,Dd,Id,Ud,Od,nh,Fd,Bd,za,kn,lh,hh,Hd,Gd,Vd,Sr,kd,Bo,Wd,Xd,Ha,jd,qd,Yd,Kd,Bi,Ga,Qd,$d,ep,fh,Va,tp,ip,rp,ap,zo,mh,Ls,Gl,Vl,gh,xn,yn,Li,_h,tr,kl,Wl,li,np,Ho,vh,sp,Mh,Gr,Vr,yo,op,Go,lp,Vo,cp,hp,up,dp,pp,fp,mp,gp,Tt,I0,Xl,Sh,Qr,U0,Mp,Sp,xp,yp,Ep,Tp,bp,wp,Ap,Rp,Cp,Lp,Pp,Np,Dp,Ip,Up,Op,Fp,Bp,zp,Hp,Gp,Vp,kp,Wp,Xp,jp,qp,Yp,Kp,Zp,Jp,Qp,$p,ef,tf,rf,af,nf,sf,of,lf,cf,hf,uf,df,pf,ff,mf,gf,_f,vf,Mf,Sf,xf,yf,Ef,Tf,bf,wf,Af,Rf,Cf,Lf,Pf,Nf,Df,If,Uf,Of,Ff,Bf,zf,Hf,Gf,Vf,kf,Wf,Xf,jf,qf,Yf,Kf,Zf,Jf,Qf,$f,em,tm,im,rm,am,nm,sm,om,lm,cm,hm,um,dm,pm,fm,mm,gm,_m,vm,Mm,Sm,xm,ym,Em,Tm,bm,wm,Am,Rm,Cm,Lm,Pm,Nm,Dm,Im,Um,Om,Fm,Bm,zm,Hm,Gm,Vm,km,Wm,Xm,jm,qm,Ym,Km,Zm,Jm,Qm,Qe,Ee,Ni,En,$m,yh,ko,Yl,ng,sg,Eh,Th,og,lg,cg,Kl,Sg,wh,Ah,Rh,Ch,Lh,Ph,$l,ec,tc,ic,rc,l_,c_,h_,Ps,Dn,d_,p_,sc,__,Tn,E_,b_,A_,C_,P_,I_,U_,O_,W_,Y_,K_,Z_,J_,mc,ba,Ns,i0,r0,a0,n0,s0,Nh,c0,Pi,Dh,Ih=Qa(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */du=0,ol=1,pu=2,bn=1,fu=2,wa=3,vr=0,ai=1,Ei=2,jr=0,Ra=1,In=2,ll=3,cl=4,mu=5,kr=100,gu=101,_u=102,vu=103,Mu=104,Su=200,xu=201,yu=202,Eu=203,gc=204,_c=205,Tu=206,bu=207,wu=208,Au=209,Ru=210,Cu=211,Lu=212,Pu=213,Nu=214,Ds=0,Is=1,Us=2,Pa=3,Os=4,Fs=5,Bs=6,zs=7,bo=0,Du=1,Iu=2,ji=0,vc=1,Mc=2,Sc=3,xc=4,yc=5,Ec=6,Tc=7,bc=300,$r=301,Na=302,es=303,ts=304,Hs=1e3,Xi=1001,Gs=1002,Wt=1003,Uu=1004,en=1005,ri=1006,is=1007,ar=1008,ci=1009,wc=1010,Ac=1011,Da=1012,wo=1013,Ui=1014,Ti=1015,Oi=1016,Ao=1017,Ro=1018,ea=1020,Rc=35902,Cc=35899,Lc=1021,Pc=1022,Di=1023,or=1026,nr=1027,Co=1028,Lo=1029,Mr=1030,Po=1031,No=1033,wn=33776,An=33777,Rn=33778,Cn=33779,Vs=35840,ks=35841,Ws=35842,Xs=35843,js=36196,qs=37492,Ys=37496,Ks=37488,Zs=37489,Un=37490,Js=37491,Qs=37808,$s=37809,eo=37810,to=37811,io=37812,ro=37813,ao=37814,no=37815,so=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,po=36492,fo=36494,mo=36495,go=36283,_o=36284,On=36285,vo=36286,Fn=2300,Mo=2301,rs=2302,hl=2303,ul=2400,dl=2401,pl=2402,Ou=3200,So=0,Fu=1,rr="",pi="srgb",Bn="srgb-linear",zn="linear",ft="srgb",as=7680,Bu=519,zu=512,Hu=513,Gu=514,Nc=515,Vu=516,ku=517,Dc=518,Ic=519,Wu=35044,fl="300 es",bi=2e3,Ia=2001;ml={},ta=null;Ku={[Ds]:Ds,[Us]:Bs,[Os]:Os,[Pa]:Fs,[Is]:Is,[Bs]:Us,[zs]:zs,[Fs]:Pa},xr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ns=Math.PI/180,xo=180/Math.PI;Ie=(Yr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=it(this.x,t.x,i.x),this.y=it(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=it(this.x,t,i),this.y=it(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(it(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(it(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yr.prototype.isVector2=!0,Yr),yr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],d=a[n+0],u=a[n+1],m=a[n+2],x=a[n+3];if(h!==x||o!==d||l!==u||c!==m){let M=o*d+l*u+c*m+h*x;M<0&&(d=-d,u=-u,m=-m,x=-x,M=-M);let g=1-s;if(M<.9995){let p=Math.acos(M),E=Math.sin(p);g=Math.sin(g*p)/E,s=Math.sin(s*p)/E,o=o*g+d*s,l=l*g+u*s,c=c*g+m*s,h=h*g+x*s}else{o=o*g+d*s,l=l*g+u*s,c=c*g+m*s,h=h*g+x*s;let p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],d=a[n+1],u=a[n+2],m=a[n+3];return e[t]=s*m+c*h+o*u-l*d,e[t+1]=o*m+c*d+l*h-s*u,e[t+2]=l*m+c*u+s*d-o*h,e[t+3]=c*m-s*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),d=o(i/2),u=o(r/2),m=o(a/2);switch(n){case"XYZ":this._x=d*c*h+l*u*m,this._y=l*u*h-d*c*m,this._z=l*c*m+d*u*h,this._w=l*c*h-d*u*m;break;case"YXZ":this._x=d*c*h+l*u*m,this._y=l*u*h-d*c*m,this._z=l*c*m-d*u*h,this._w=l*c*h+d*u*m;break;case"ZXY":this._x=d*c*h-l*u*m,this._y=l*u*h+d*c*m,this._z=l*c*m+d*u*h,this._w=l*c*h-d*u*m;break;case"ZYX":this._x=d*c*h-l*u*m,this._y=l*u*h+d*c*m,this._z=l*c*m-d*u*h,this._w=l*c*h+d*u*m;break;case"YZX":this._x=d*c*h+l*u*m,this._y=l*u*h+d*c*m,this._z=l*c*m-d*u*h,this._w=l*c*h-d*u*m;break;case"XZY":this._x=d*c*h-l*u*m,this._y=l*u*h-d*c*m,this._z=l*c*m+d*u*h,this._w=l*c*h+d*u*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+s+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=(Kr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(_l.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*c+s*d-o*h,this.y=r+l*h+o*c-n*d,this.z=a+l*d+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=it(this.x,t.x,i.x),this.y=it(this.y,t.y,i.y),this.z=it(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=it(this.x,t,i),this.y=it(this.y,t,i),this.z=it(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(it(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return os.copy(this).projectOnVector(t),this.sub(os)}reflect(t){return this.sub(os.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(it(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kr.prototype.isVector3=!0,Kr),os=new P,_l=new yr,qe=(Zr=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],m=r[5],x=r[8],M=a[0],g=a[3],p=a[6],E=a[1],T=a[4],S=a[7],w=a[2],R=a[5],f=a[8];return n[0]=s*M+o*E+l*w,n[3]=s*g+o*T+l*R,n[6]=s*p+o*S+l*f,n[1]=c*M+h*E+d*w,n[4]=c*g+h*T+d*R,n[7]=c*p+h*S+d*f,n[2]=u*M+m*E+x*w,n[5]=u*g+m*T+x*R,n[8]=u*p+m*S+x*f,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,u=o*l-h*n,m=c*n-s*l,x=i*d+r*u+a*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(a*c-h*r)*M,t[2]=(o*r-a*s)*M,t[3]=u*M,t[4]=(h*i-a*l)*M,t[5]=(a*n-o*i)*M,t[6]=m*M,t[7]=(r*l-c*i)*M,t[8]=(s*i-r*n)*M,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Ln("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ls.makeScale(t,i)),this}rotate(t){return Ln("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ls.makeRotation(-t)),this}translate(t,i){return Ln("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ls.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zr.prototype.isMatrix3=!0,Zr),ls=new qe,vl=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);st=ed();td=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cr===void 0&&(Cr=Hn("canvas")),Cr.width=e.width,Cr.height=e.height;let r=Cr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=qi(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},id=0,Io=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(cs(r[n].image)):a.push(cs(r[n]))}else a=cs(r);i.url=a}return t||(e.images[this.uuid]=i),i}};rd=0,hs=new P,wi=class Pn extends xr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=Xi,a=Xi,n=ri,s=ar,o=Di,l=ci,c=Pn.DEFAULT_ANISOTROPY,h=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Oa(),this.name="",this.source=new Io(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(hs).x}get height(){return this.source.getSize(hs).y}get depth(){return this.source.getSize(hs).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Ve(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Ve(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wi.DEFAULT_IMAGE=null;wi.DEFAULT_MAPPING=bc;wi.DEFAULT_ANISOTROPY=1;bt=(Jr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],m=s[2],x=s[6],M=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(u-x)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(u+x)<.1&&Math.abs(o+d+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,E=(d+1)/2,T=(M+1)/2,S=(l+h)/4,w=(c+m)/4,R=(u+x)/4;return p>E&&p>T?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=S/r,n=w/r):E>T?E<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(E),r=S/a,n=R/a):T<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(T),r=w/n,a=R/n),this.set(r,a,n,i),this}let g=Math.sqrt((x-u)*(x-u)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(x-u)/g,this.y=(c-m)/g,this.z=(h-l)/g,this.w=Math.acos((o+d+M-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=it(this.x,t.x,i.x),this.y=it(this.y,t.y,i.y),this.z=it(this.z,t.z,i.z),this.w=it(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=it(this.x,t,i),this.y=it(this.y,t,i),this.z=it(this.z,t,i),this.w=it(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(it(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jr.prototype.isVector4=!0,Jr),ad=class extends xr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new wi({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ii=class extends ad{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Oc=class extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},nd=class extends wi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},_t=(_r=class{constructor(t,i,r,a,n,s,o,l,c,h,d,u,m,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,d,u,m,x,M,g)}set(t,i,r,a,n,s,o,l,c,h,d,u,m,x,M,g){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=x,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _r().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Lr.setFromMatrixColumn(t,0).length(),n=1/Lr.setFromMatrixColumn(t,1).length(),s=1/Lr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*h,m=s*d,x=o*h,M=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=m+x*c,i[5]=u-M*c,i[9]=-o*l,i[2]=M-u*c,i[6]=x+m*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,x=c*h,M=c*d;i[0]=u+M*o,i[4]=x*o-m,i[8]=s*c,i[1]=s*d,i[5]=s*h,i[9]=-o,i[2]=m*o-x,i[6]=M+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,x=c*h,M=c*d;i[0]=u-M*o,i[4]=-s*d,i[8]=x+m*o,i[1]=m+x*o,i[5]=s*h,i[9]=M-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,m=s*d,x=o*h,M=o*d;i[0]=l*h,i[4]=x*c-m,i[8]=u*c+M,i[1]=l*d,i[5]=M*c+u,i[9]=m*c-x,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,m=s*c,x=o*l,M=o*c;i[0]=l*h,i[4]=M-u*d,i[8]=x*d+m,i[1]=d,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=m*d+x,i[10]=u-M*d}else if(t.order==="XZY"){let u=s*l,m=s*c,x=o*l,M=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+M,i[5]=s*h,i[9]=m*d-x,i[2]=x*d-m,i[6]=o*h,i[10]=M*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sd,t,od)}lookAt(t,i,r){let a=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Ji.crossVectors(r,si),Ji.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ji.crossVectors(r,si)),Ji.normalize(),tn.crossVectors(si,Ji),a[0]=Ji.x,a[4]=tn.x,a[8]=si.x,a[1]=Ji.y,a[5]=tn.y,a[9]=si.y,a[2]=Ji.z,a[6]=tn.z,a[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],m=r[13],x=r[2],M=r[6],g=r[10],p=r[14],E=r[3],T=r[7],S=r[11],w=r[15],R=a[0],f=a[4],y=a[8],b=a[12],O=a[1],I=a[5],B=a[9],Z=a[13],N=a[2],k=a[6],$=a[10],V=a[14],me=a[3],q=a[7],J=a[11],ce=a[15];return n[0]=s*R+o*O+l*N+c*me,n[4]=s*f+o*I+l*k+c*q,n[8]=s*y+o*B+l*$+c*J,n[12]=s*b+o*Z+l*V+c*ce,n[1]=h*R+d*O+u*N+m*me,n[5]=h*f+d*I+u*k+m*q,n[9]=h*y+d*B+u*$+m*J,n[13]=h*b+d*Z+u*V+m*ce,n[2]=x*R+M*O+g*N+p*me,n[6]=x*f+M*I+g*k+p*q,n[10]=x*y+M*B+g*$+p*J,n[14]=x*b+M*Z+g*V+p*ce,n[3]=E*R+T*O+S*N+w*me,n[7]=E*f+T*I+S*k+w*q,n[11]=E*y+T*B+S*$+w*J,n[15]=E*b+T*Z+S*V+w*ce,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],x=t[3],M=t[7],g=t[11],p=t[15],E=l*m-c*u,T=o*m-c*d,S=o*u-l*d,w=s*m-c*h,R=s*u-l*h,f=s*d-o*h;return i*(M*E-g*T+p*S)-r*(x*E-g*w+p*R)+a*(x*T-M*w+p*f)-n*(x*S-M*R+g*f)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],x=t[12],M=t[13],g=t[14],p=t[15],E=i*o-r*s,T=i*l-a*s,S=i*c-n*s,w=r*l-a*o,R=r*c-n*o,f=a*c-n*l,y=h*M-d*x,b=h*g-u*x,O=h*p-m*x,I=d*g-u*M,B=d*p-m*M,Z=u*p-m*g,N=E*Z-T*B+S*I+w*O-R*b+f*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*Z-l*B+c*I)*k,t[1]=(a*B-r*Z-n*I)*k,t[2]=(M*f-g*R+p*w)*k,t[3]=(u*R-d*f-m*w)*k,t[4]=(l*O-s*Z-c*b)*k,t[5]=(i*Z-a*O+n*b)*k,t[6]=(g*S-x*f-p*T)*k,t[7]=(h*f-u*S+m*T)*k,t[8]=(s*B-o*O+c*y)*k,t[9]=(r*O-i*B-n*y)*k,t[10]=(x*R-M*S+p*E)*k,t[11]=(d*S-h*R-m*E)*k,t[12]=(o*b-s*I-l*y)*k,t[13]=(i*I-r*b+a*y)*k,t[14]=(M*T-x*w-g*E)*k,t[15]=(h*w-d*T+u*E)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,d=o+o,u=n*c,m=n*h,x=n*d,M=s*h,g=s*d,p=o*d,E=l*c,T=l*h,S=l*d,w=r.x,R=r.y,f=r.z;return a[0]=(1-(M+p))*w,a[1]=(m+S)*w,a[2]=(x-T)*w,a[3]=0,a[4]=(m-S)*R,a[5]=(1-(u+p))*R,a[6]=(g+E)*R,a[7]=0,a[8]=(x+T)*f,a[9]=(g-E)*f,a[10]=(1-(u+M))*f,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Lr.set(a[0],a[1],a[2]).length(),o=Lr.set(a[4],a[5],a[6]).length(),l=Lr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Si.copy(this);let c=1/s,h=1/o,d=1/l;return Si.elements[0]*=c,Si.elements[1]*=c,Si.elements[2]*=c,Si.elements[4]*=h,Si.elements[5]*=h,Si.elements[6]*=h,Si.elements[8]*=d,Si.elements[9]*=d,Si.elements[10]*=d,i.setFromRotationMatrix(Si),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=bi,l=!1){let c=this.elements,h=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),m=(r+a)/(r-a),x,M;if(l)x=n/(s-n),M=s*n/(s-n);else if(o===bi)x=-(s+n)/(s-n),M=-2*s*n/(s-n);else if(o===Ia)x=-s/(s-n),M=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=bi,l=!1){let c=this.elements,h=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),m=-(r+a)/(r-a),x,M;if(l)x=1/(s-n),M=s/(s-n);else if(o===bi)x=-2/(s-n),M=-(s+n)/(s-n);else if(o===Ia)x=-1/(s-n),M=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},_r.prototype.isMatrix4=!0,_r),Lr=new P,Si=new _t,sd=new P(0,0,0),od=new P(1,1,1),Ji=new P,tn=new P,si=new P,Sl=new _t,xl=new yr,ia=class Fc{constructor(t=0,i=0,r=0,a=Fc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-it(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ia.DEFAULT_ORDER="XYZ";Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ld=0,yl=new P,Pr=new yr,Hi=new _t,rn=new P,va=new P,cd=new P,hd=new yr,El=new P(1,0,0),Tl=new P(0,1,0),bl=new P(0,0,1),wl={type:"added"},ud={type:"removed"},Nr={type:"childadded",child:null},us={type:"childremoved",child:null},$t=class Nn extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();let t=new P,i=new ia,r=new yr,a=new P(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new _t},normalMatrix:{value:new qe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(Tl,t)}rotateZ(t){return this.rotateOnAxis(bl,t)}translateOnAxis(t,i){return yl.copy(t).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(Tl,t)}translateZ(t){return this.translateOnAxis(bl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?rn.copy(t):rn.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(va,rn,this.up):Hi.lookAt(rn,va,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Pr.setFromRotationMatrix(Hi),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ud),us.child=t,this.dispatchEvent(us),us.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),Nr.child=t,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,t,cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),u=s(t.skeletons),m=s(t.animations),x=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),m.length>0&&(r.animations=m),x.length>0&&(r.nodes=x)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new P(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Pt=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},dd={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let x of e.hand.values()){let M=t.getJointPose(x,i),g=this._getHandJoint(l,x);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=.02,m=.005;l.inputState.pinching&&d>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},an={h:0,s:0,l:0};Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=Zu(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=ps(n,a,e+1/3),this.g=ps(n,a,e),this.b=ps(n,a,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=pi){function i(a){a!==void 0&&parseFloat(a)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){let i=Bc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return st.workingToColorSpace(Yt.copy(this),e),Math.round(it(Yt.r*255,0,255))*65536+Math.round(it(Yt.g*255,0,255))*256+Math.round(it(Yt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Yt.copy(this),t);let i=Yt.r,r=Yt.g,a=Yt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=pi){st.workingToColorSpace(Yt.copy(this),e);let t=Yt.r,i=Yt.g,r=Yt.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(an);let i=ss(Qi.h,an.h,t),r=ss(Qi.s,an.s,t),a=ss(Qi.l,an.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yt=new Ye;Ye.NAMES=Bc;zc=class Hc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ye(t),this.near=i,this.far=r}clone(){return new Hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gc=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new P,Gi=new P,fs=new P,Vi=new P,Dr=new P,Ir=new P,Al=new P,ms=new P,gs=new P,_s=new P,vs=new bt,Ms=new bt,Ss=new bt,Ma=class Wr{constructor(t=new P,i=new P,r=new P){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),xi.subVectors(t,i),a.cross(xi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){xi.subVectors(a,i),Gi.subVectors(r,i),fs.subVectors(t,i);let s=xi.dot(xi),o=xi.dot(Gi),l=xi.dot(fs),c=Gi.dot(Gi),h=Gi.dot(fs),d=s*c-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,x=(s*h-o*l)*u;return n.set(1-m-x,x,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Vi.x),l.addScaledVector(s,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return vs.setScalar(0),Ms.setScalar(0),Ss.setScalar(0),vs.fromBufferAttribute(t,i),Ms.fromBufferAttribute(t,r),Ss.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(vs,n.x),s.addScaledVector(Ms,n.y),s.addScaledVector(Ss,n.z),s}static isFrontFacing(t,i,r,a){return xi.subVectors(r,i),Gi.subVectors(t,i),xi.cross(Gi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),xi.cross(Gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Wr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Wr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Wr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Dr.subVectors(a,r),Ir.subVectors(n,r),ms.subVectors(t,r);let l=Dr.dot(ms),c=Ir.dot(ms);if(l<=0&&c<=0)return i.copy(r);gs.subVectors(t,a);let h=Dr.dot(gs),d=Ir.dot(gs);if(h>=0&&d<=h)return i.copy(a);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(Dr,s);_s.subVectors(t,n);let m=Dr.dot(_s),x=Ir.dot(_s);if(x>=0&&m<=x)return i.copy(n);let M=m*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),i.copy(r).addScaledVector(Ir,o);let g=h*x-m*d;if(g<=0&&d-h>=0&&m-x>=0)return Al.subVectors(n,a),o=(d-h)/(d-h+(m-x)),i.copy(a).addScaledVector(Al,o);let p=1/(g+M+u);return s=M*p,o=u*p,i.copy(r).addScaledVector(Dr,s).addScaledVector(Ir,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Er=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,yi):yi.fromBufferAttribute(a,n),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nn.copy(i.boundingBox)),nn.applyMatrix4(e.matrixWorld),this.union(nn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),sn.subVectors(this.max,Sa),Ur.subVectors(e.a,Sa),Or.subVectors(e.b,Sa),Fr.subVectors(e.c,Sa),$i.subVectors(Or,Ur),er.subVectors(Fr,Or),pr.subVectors(Ur,Fr);let t=[0,-$i.z,$i.y,0,-er.z,er.y,0,-pr.z,pr.y,$i.z,0,-$i.x,er.z,0,-er.x,pr.z,0,-pr.x,-$i.y,$i.x,0,-er.y,er.x,0,-pr.y,pr.x,0];return!xs(t,Ur,Or,Fr,sn)||(t=[1,0,0,0,1,0,0,0,1],!xs(t,Ur,Or,Fr,sn))?!1:(on.crossVectors($i,er),t=[on.x,on.y,on.z],xs(t,Ur,Or,Fr,sn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ki=[new P,new P,new P,new P,new P,new P,new P,new P],yi=new P,nn=new Er,Ur=new P,Or=new P,Fr=new P,$i=new P,er=new P,pr=new P,Sa=new P,sn=new P,on=new P,fr=new P;Lt=new P,ln=new Ie,pd=0,sr=class extends xr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wu,this.updateRanges=[],this.gpuType=Ti,this.version=0,this._normalizationScale=e!==void 0?Do(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXY(t,ln.x,ln.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Qu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):$u(e,this.array)}},Vc=class extends sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},kc=class extends sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ht=class extends sr{constructor(e,t,i){super(new Float32Array(e),t,i)}},fd=new Er,xa=new P,ys=new P,Fa=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(ys)),this.expandByPoint(xa.copy(e.center).sub(ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},md=0,di=new _t,Es=new $t,Br=new P,oi=new Er,ya=new Er,Bt=new P,hi=class Wc extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xu(t)?kc:Vc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new qe().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,r){return di.makeTranslation(t,i,r),this.applyMatrix4(di),this}scale(t,i,r){return di.makeScale(t,i,r),this.applyMatrix4(di),this}lookAt(t){return Es.lookAt(t),Es.updateMatrix(),this.applyMatrix4(Es.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ht(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];oi.setFromBufferAttribute(n),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let r=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(oi.min,ya.min),oi.expandByPoint(Bt),Bt.addVectors(oi.max,ya.max),oi.expandByPoint(Bt)):(oi.expandByPoint(ya.min),oi.expandByPoint(ya.max))}oi.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Bt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Bt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Bt.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(t,c),Bt.add(Br)),a=Math.max(a,r.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new sr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],c=new Uint8Array(r.count);for(let b=0;b<r.count;b++)o[b]=new P,l[b]=new P;let h=new P,d=new P,u=new P,m=new Ie,x=new Ie,M=new Ie,g=new P,p=new P;function E(b,O,I){c[b]=c[O]=c[I]=1,h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,O),u.fromBufferAttribute(r,I),m.fromBufferAttribute(n,b),x.fromBufferAttribute(n,O),M.fromBufferAttribute(n,I),d.sub(h),u.sub(h),x.sub(m),M.sub(m);let B=1/(x.x*M.y-M.x*x.y);isFinite(B)&&(g.copy(d).multiplyScalar(M.y).addScaledVector(u,-x.y).multiplyScalar(B),p.copy(u).multiplyScalar(x.x).addScaledVector(d,-M.x).multiplyScalar(B),o[b].add(g),o[O].add(g),o[I].add(g),l[b].add(p),l[O].add(p),l[I].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let b=0,O=T.length;b<O;++b){let I=T[b],B=I.start,Z=I.count;for(let N=B,k=B+Z;N<k;N+=3)E(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new P,w=new P,R=new P,f=new P;function y(b){R.fromBufferAttribute(a,b),f.copy(R);let O=o[b];S.copy(O),S.sub(R.multiplyScalar(R.dot(O))).normalize(),w.crossVectors(f,O);let I=w.dot(l[b])<0?-1:1;s.setXYZW(b,S.x,S.y,S.z,I)}for(let b=0,O=r.count;b<O;++b)c[b]&&y(b);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new sr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,m=r.count;u<m;u++)r.setXYZ(u,0,0,0);let a=new P,n=new P,s=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,m=t.count;u<m;u+=3){let x=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,M),s.fromBufferAttribute(i,g),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,M),c.fromBufferAttribute(r,g),o.add(h),l.add(h),c.add(h),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(M,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=i.count;u<m;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Bt.fromBufferAttribute(t,i),Bt.normalize(),t.setXYZ(i,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*h;for(let p=0;p<h;p++)u[x++]=c[m++]}return new sr(u,h,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Wc,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,r);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],d=n[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ts=new P,gd=new P,_d=new qe,ir=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ts.subVectors(i,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Ts),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_d.getNormalMatrix(e),r=this.coplanarPoint(Ts).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},vd=0,Ba=class extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=Ra,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ir().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wi=new P,bs=new P,cn=new P,hn=new P,Xc=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bs.copy(e).add(t).multiplyScalar(.5),cn.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(bs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(cn),s=hn.dot(this.direction),o=-hn.dot(cn),l=hn.lengthSq(),c=Math.abs(1-n*n),h,d,u,m;if(c>0)if(h=n*o-s,d=n*s-o,m=a*c,h>=0)if(d>=-m)if(d<=m){let x=1/c;h*=x,d*=x,u=h*(h+n*d+2*s)+d*(n*h+d+2*o)+l}else d=a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d=-a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d<=-m?(h=Math.max(0,-(-n*a+s)),d=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l):d<=m?(h=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(h=Math.max(0,-(n*a+s)),d=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l);else d=n>0?-a:a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bs).addScaledVector(cn,d),u}intersectSphere(e,t){if(e.radius<0)return null;Wi.subVectors(e.center,this.origin);let i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),c>=0?(a=(e.min.y-d.y)*c,n=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,n=(e.min.y-d.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,d=e.y-n.y,u=e.z-n.z,m=t.x-n.x,x=t.y-n.y,M=t.z-n.z,g=i.x-n.x,p=i.y-n.y,E=i.z-n.z,T=Math.abs(o),S=Math.abs(l),w=Math.abs(c),R,f,y,b,O,I,B,Z,N,k,$,V;if(T>=S&&T>=w?(y=o,I=h,N=m,V=g,o>=0?(R=l,f=c,b=d,O=u,B=x,Z=M,k=p,$=E):(R=c,f=l,b=u,O=d,B=M,Z=x,k=E,$=p)):S>=w?(y=l,I=d,N=x,V=p,l>=0?(R=c,f=o,b=u,O=h,B=M,Z=m,k=E,$=g):(R=o,f=c,b=h,O=u,B=m,Z=M,k=g,$=E)):(y=c,I=u,N=M,V=E,c>=0?(R=o,f=l,b=h,O=d,B=m,Z=x,k=g,$=p):(R=l,f=o,b=d,O=h,B=x,Z=m,k=p,$=g)),y===0)return null;let me=R/y,q=f/y,J=1/y,ce=b-me*I,Ue=O-q*I,ee=B-me*N,he=Z-q*N,be=k-me*V,Le=$-q*V,Fe=be*he-Le*ee,ve=ce*Le-Ue*be,Je=ee*Ue-he*ce;if(r){if(Fe<0||ve<0||Je<0)return null}else if((Fe<0||ve<0||Je<0)&&(Fe>0||ve>0||Je>0))return null;let nt=Fe+ve+Je;if(nt===0)return null;let De=J*(Fe*I+ve*N+Je*V);return(nt>0?De<0:De>0)?null:this.at(De/nt,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gn=class extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rl=new _t,mr=new Xc,un=new Fa,Cl=new P,dn=new P,pn=new P,fn=new P,ws=new P,mn=new P,Ll=new P,gn=new P,$e=class extends $t{constructor(e=new hi,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){mn.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(ws.fromBufferAttribute(h,e),n?mn.addScaledVector(ws,c):mn.addScaledVector(ws.sub(t),c))}t.add(mn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),un.copy(i.boundingSphere),un.applyMatrix4(a),mr.copy(e.ray).recast(e.near),!(un.containsPoint(mr.origin)===!1&&(mr.intersectSphere(un,Cl)===null||mr.origin.distanceToSquared(Cl)>(e.far-e.near)**2))&&(Rl.copy(a).invert(),mr.copy(e.ray).applyMatrix4(Rl),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let m=0,x=d.length;m<x;m++){let M=d[m],g=n[M.materialIndex],p=Math.max(M.start,u.start),E=Math.min(s.count,Math.min(M.start+M.count,u.start+u.count));for(let T=p,S=E;T<S;T+=3){let w=s.getX(T),R=s.getX(T+1),f=s.getX(T+2);r=_n(this,g,e,i,l,c,h,w,R,f),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),x=Math.min(s.count,u.start+u.count);for(let M=m,g=x;M<g;M+=3){let p=s.getX(M),E=s.getX(M+1),T=s.getX(M+2);r=_n(this,n,e,i,l,c,h,p,E,T),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let m=0,x=d.length;m<x;m++){let M=d[m],g=n[M.materialIndex],p=Math.max(M.start,u.start),E=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let T=p,S=E;T<S;T+=3){let w=T,R=T+1,f=T+2;r=_n(this,g,e,i,l,c,h,w,R,f),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let M=m,g=x;M<g;M+=3){let p=M,E=M+1,T=M+2;r=_n(this,n,e,i,l,c,h,p,E,T),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}};jc=class extends wi{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Wt,c=Wt,h,d){super(null,n,s,o,l,c,r,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pl=class extends sr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new _t,Nl=new _t,vn=[],Dl=new Er,Sd=new _t,Ea=new $e,Ta=new Fa,Tr=class extends $e{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Sd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Dl.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Dl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,zr),Ta.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(Ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ta.copy(this.boundingSphere),Ta.applyMatrix4(i),e.ray.intersectsSphere(Ta)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,zr),Nl.multiplyMatrices(i,zr),Ea.matrixWorld=Nl,Ea.raycast(e,vn);for(let n=0,s=vn.length;n<s;n++){let o=vn[n];o.instanceId=a,o.object=this,t.push(o)}vn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new jc(new Float32Array(r*this.count),r,this.count,Co,Ti));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gr=new Fa,xd=new Ie(.5,.5),Mn=new P,Ua=class{constructor(e=new ir,t=new ir,i=new ir,r=new ir,a=new ir,n=new ir){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],u=a[7],m=a[8],x=a[9],M=a[10],g=a[11],p=a[12],E=a[13],T=a[14],S=a[15];if(r[0].setComponents(l-n,u-c,g-m,S-p).normalize(),r[1].setComponents(l+n,u+c,g+m,S+p).normalize(),r[2].setComponents(l+s,u+h,g+x,S+E).normalize(),r[3].setComponents(l-s,u-h,g-x,S-E).normalize(),i)r[4].setComponents(o,d,M,T).normalize(),r[5].setComponents(l-o,u-d,g-M,S-T).normalize();else if(r[4].setComponents(l-o,u-d,g-M,S-T).normalize(),t===bi)r[5].setComponents(l+o,u+d,g+M,S+T).normalize();else if(t===Ia)r[5].setComponents(o,d,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);let t=xd.distanceTo(e.center);return gr.radius=.7071067811865476+t,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Mn.x=r.normal.x>0?e.max.x:e.min.x,Mn.y=r.normal.y>0?e.max.y:e.min.y,Mn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Il=new _t,yd=class qc{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Ua),r[a].setFromProjectionMatrix(Il,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Ua),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new qc().copy(this)}},Yc=class extends wi{constructor(e=[],t=$r,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ra=class extends wi{constructor(e,t,i=Ui,r,a,n,s=Wt,o=Wt,l,c=or,h=1){if(c!==or&&c!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Kc=class extends ra{constructor(e,t=Ui,i=$r,r,a,n=Wt,s=Wt,o,l=or){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zc=class extends wi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class Jc extends hi{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=0,m=0;x("z","y","x",-1,-1,r,i,t,s,n,0),x("z","y","x",1,-1,r,i,-t,s,n,1),x("x","z","y",1,1,t,r,i,a,s,2),x("x","z","y",1,-1,t,r,-i,a,s,3),x("x","y","z",1,-1,t,i,r,a,n,4),x("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2));function x(M,g,p,E,T,S,w,R,f,y,b){let O=S/f,I=w/y,B=S/2,Z=w/2,N=R/2,k=f+1,$=y+1,V=0,me=0,q=new P;for(let J=0;J<$;J++){let ce=J*I-Z;for(let Ue=0;Ue<k;Ue++){let ee=Ue*O-B;q[M]=ee*E,q[g]=ce*T,q[p]=N,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[p]=R>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ue/f),d.push(1-J/y),V+=1}}for(let J=0;J<y;J++)for(let ce=0;ce<f;ce++){let Ue=u+ce+k*J,ee=u+ce+k*(J+1),he=u+(ce+1)+k*(J+1),be=u+(ce+1)+k*J;l.push(Ue,ee,be),l.push(ee,he,be),me+=6}o.addGroup(m,me,b),m+=me,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Oo=class Qc extends hi{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],c=new P,h=new Ie;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let m=r+d/i*a;c.x=t*Math.cos(m),c.y=t*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ai=class $c extends hi{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],d=[],u=[],m=[],x=0,M=[],g=r/2,p=0;E(),s===!1&&(t>0&&T(!0),i>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(m,2));function E(){let S=new P,w=new P,R=0,f=(i-t)/r;for(let y=0;y<=n;y++){let b=[],O=y/n,I=O*(i-t)+t;for(let B=0;B<=a;B++){let Z=B/a,N=Z*l+o,k=Math.sin(N),$=Math.cos(N);w.x=I*k,w.y=-O*r+g,w.z=I*$,d.push(w.x,w.y,w.z),S.set(k,f,$).normalize(),u.push(S.x,S.y,S.z),m.push(Z,1-O),b.push(x++)}M.push(b)}for(let y=0;y<a;y++)for(let b=0;b<n;b++){let O=M[b][y],I=M[b+1][y],B=M[b+1][y+1],Z=M[b][y+1];(t>0||b!==0)&&(h.push(O,I,Z),R+=3),(i>0||b!==n-1)&&(h.push(I,B,Z),R+=3)}c.addGroup(p,R,0),p+=R}function T(S){let w=x,R=new Ie,f=new P,y=0,b=S===!0?t:i,O=S===!0?1:-1;for(let B=1;B<=a;B++)d.push(0,g*O,0),u.push(0,O,0),m.push(.5,.5),x++;let I=x;for(let B=0;B<=a;B++){let Z=B/a*l+o,N=Math.cos(Z),k=Math.sin(Z);f.x=b*k,f.y=g*O,f.z=b*N,d.push(f.x,f.y,f.z),u.push(0,O,0),R.x=N*.5+.5,R.y=k*.5*O+.5,m.push(R.x,R.y),x++}for(let B=0;B<a;B++){let Z=w+B,N=I+B;S===!0?h.push(N,N+1,Z):h.push(N+1,N,Z),y+=3}c.addGroup(p,y,S===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},na=class eh extends Ai{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new eh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ed=class th extends hi{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),c(r),h(),this.setAttribute("position",new ht(n,3)),this.setAttribute("normal",new ht(n.slice(),3)),this.setAttribute("uv",new ht(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let T=new P,S=new P,w=new P;for(let R=0;R<i.length;R+=3)m(i[R+0],T),m(i[R+1],S),m(i[R+2],w),l(T,S,w,E)}function l(E,T,S,w){let R=w+1,f=[];for(let y=0;y<=R;y++){f[y]=[];let b=E.clone().lerp(S,y/R),O=T.clone().lerp(S,y/R),I=R-y;for(let B=0;B<=I;B++)B===0&&y===R?f[y][B]=b:f[y][B]=b.clone().lerp(O,B/I)}for(let y=0;y<R;y++)for(let b=0;b<2*(R-y)-1;b++){let O=Math.floor(b/2);b%2===0?(u(f[y][O+1]),u(f[y+1][O]),u(f[y][O])):(u(f[y][O+1]),u(f[y+1][O+1]),u(f[y+1][O]))}}function c(E){let T=new P;for(let S=0;S<n.length;S+=3)T.x=n[S+0],T.y=n[S+1],T.z=n[S+2],T.normalize().multiplyScalar(E),n[S+0]=T.x,n[S+1]=T.y,n[S+2]=T.z}function h(){let E=new P;for(let T=0;T<n.length;T+=3){E.x=n[T+0],E.y=n[T+1],E.z=n[T+2];let S=g(E)/2/Math.PI+.5,w=p(E)/Math.PI+.5;s.push(S,1-w)}x(),d()}function d(){for(let E=0;E<s.length;E+=6){let T=s[E+0],S=s[E+2],w=s[E+4],R=Math.max(T,S,w),f=Math.min(T,S,w);R>.9&&f<.1&&(T<.2&&(s[E+0]+=1),S<.2&&(s[E+2]+=1),w<.2&&(s[E+4]+=1))}}function u(E){n.push(E.x,E.y,E.z)}function m(E,T){let S=E*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function x(){let E=new P,T=new P,S=new P,w=new P,R=new Ie,f=new Ie,y=new Ie;for(let b=0,O=0;b<n.length;b+=9,O+=6){E.set(n[b+0],n[b+1],n[b+2]),T.set(n[b+3],n[b+4],n[b+5]),S.set(n[b+6],n[b+7],n[b+8]),R.set(s[O+0],s[O+1]),f.set(s[O+2],s[O+3]),y.set(s[O+4],s[O+5]),w.copy(E).add(T).add(S).divideScalar(3);let I=g(w);M(R,O+0,E,I),M(f,O+2,T,I),M(y,O+4,S,I)}}function M(E,T,S,w){w<0&&E.x===1&&(s[T]=E.x-1),S.x===0&&S.z===0&&(s[T]=w/2/Math.PI+.5)}function g(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.vertices,t.indices,t.radius,t.detail)}},ih=class rh extends Ed{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new rh(t.radius,t.detail)}},Yi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let c=i[r],h=i[r+1]-c,d=(n-c)/h;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new Ie:new P);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,r=[],a=[],n=[],s=new P,o=new _t;for(let u=0;u<=e;u++){let m=u/e;r[u]=this.getTangentAt(m,new P)}a[0]=new P,n[0]=new P;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let m=Math.acos(it(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,m))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(it(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let m=1;m<=e;m++)a[m].applyMatrix4(o.makeRotationAxis(r[m],u*m)),n[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ah=class extends Yi{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Ie){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Td=class extends ah{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};Ul=new P,Ol=new P,As=new Fo,Rs=new Fo,Cs=new Fo,Vn=class extends Yi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,c;this.closed||s>0?l=r[(s-1)%a]:(Ol.subVectors(r[0],r[1]).add(r[0]),l=Ol);let h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?c=r[(s+2)%a]:(Ul.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=Ul),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),u),x=Math.pow(h.distanceToSquared(d),u),M=Math.pow(d.distanceToSquared(c),u);x<1e-4&&(x=1),m<1e-4&&(m=x),M<1e-4&&(M=x),As.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,m,x,M),Rs.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,m,x,M),Cs.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,m,x,M)}else this.curveType==="catmullrom"&&(As.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),Rs.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Cs.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(As.calc(o),Rs.calc(o),Cs.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Nd=class extends Yi{constructor(e=new Ie,t=new Ie,i=new Ie,r=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ie){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(La(e,r.x,a.x,n.x,s.x),La(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dd=class extends Yi{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(La(e,r.x,a.x,n.x,s.x),La(e,r.y,a.y,n.y,s.y),La(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Id=class extends Yi{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ud=class extends Yi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Od=class extends Yi{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ca(e,r.x,a.x,n.x),Ca(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nh=class extends Yi{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Ca(e,r.x,a.x,n.x),Ca(e,r.y,a.y,n.y),Ca(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fd=class extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],c=r[n>r.length-2?r.length-1:n+1],h=r[n>r.length-3?r.length-1:n+2];return i.set(Fl(s,o.x,l.x,c.x,h.x),Fl(s,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ie().fromArray(r))}return this}},Bd=Object.freeze({__proto__:null,ArcCurve:Td,CatmullRomCurve3:Vn,CubicBezierCurve:Nd,CubicBezierCurve3:Dd,EllipseCurve:ah,LineCurve:Id,LineCurve3:Ud,QuadraticBezierCurve:Od,QuadraticBezierCurve3:nh,SplineCurve:Fd}),za=class sh extends hi{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=i/l,m=[],x=[],M=[],g=[];for(let p=0;p<h;p++){let E=p*u-s;for(let T=0;T<c;T++){let S=T*d-n;x.push(S,-E,0),M.push(0,0,1),g.push(T/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let T=E+c*p,S=E+c*(p+1),w=E+1+c*(p+1),R=E+1+c*p;m.push(T,S,R),m.push(S,w,R)}this.setIndex(m),this.setAttribute("position",new ht(x,3)),this.setAttribute("normal",new ht(M,3)),this.setAttribute("uv",new ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sh(t.width,t.height,t.widthSegments,t.heightSegments)}},kn=class oh extends hi{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],d=new P,u=new P,m=[],x=[],M=[],g=[];for(let p=0;p<=r;p++){let E=[],T=p/r,S=s+T*o,w=t*Math.cos(S),R=Math.sqrt(t*t-w*w),f=0;p===0&&s===0?f=.5/i:p===r&&l===Math.PI&&(f=-.5/i);for(let y=0;y<=i;y++){let b=y/i,O=a+b*n;d.x=-R*Math.cos(O),d.y=w,d.z=R*Math.sin(O),x.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),g.push(b+f,1-T),E.push(c++)}h.push(E)}for(let p=0;p<r;p++)for(let E=0;E<i;E++){let T=h[p][E+1],S=h[p][E],w=h[p+1][E],R=h[p+1][E+1];(p!==0||s>0)&&m.push(T,S,R),(p!==r-1||l<Math.PI)&&m.push(S,w,R)}this.setIndex(m),this.setAttribute("position",new ht(x,3)),this.setAttribute("normal",new ht(M,3)),this.setAttribute("uv",new ht(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},lh=class ch extends hi{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=new P,m=new P,x=new P;for(let M=0;M<=r;M++){let g=s+M/r*o;for(let p=0;p<=a;p++){let E=p/a*n;m.x=(t+i*Math.cos(g))*Math.cos(E),m.y=(t+i*Math.cos(g))*Math.sin(E),m.z=i*Math.sin(g),c.push(m.x,m.y,m.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),x.subVectors(m,u).normalize(),h.push(x.x,x.y,x.z),d.push(p/a),d.push(M/r)}}for(let M=1;M<=r;M++)for(let g=1;g<=a;g++){let p=(a+1)*M+g-1,E=(a+1)*(M-1)+g-1,T=(a+1)*(M-1)+g,S=(a+1)*M+g;l.push(p,E,S),l.push(E,T,S)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ch(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},hh=class uh extends hi{constructor(t=new nh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new P,l=new P,c=new Ie,h=new P,d=[],u=[],m=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(m,2));function M(){for(let T=0;T<i;T++)g(T);g(n===!1?i:0),E(),p()}function g(T){h=t.getPointAt(T/i,h);let S=s.normals[T],w=s.binormals[T];for(let R=0;R<=a;R++){let f=R/a*Math.PI*2,y=Math.sin(f),b=-Math.cos(f);l.x=b*S.x+y*w.x,l.y=b*S.y+y*w.y,l.z=b*S.z+y*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let T=1;T<=i;T++)for(let S=1;S<=a;S++){let w=(a+1)*(T-1)+(S-1),R=(a+1)*T+(S-1),f=(a+1)*T+S,y=(a+1)*(T-1)+S;x.push(w,R,y),x.push(R,f,y)}}function E(){for(let T=0;T<=i;T++)for(let S=0;S<=a;S++)c.x=T/i,c.y=S/a,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new uh(new Bd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};Hd={clone:aa,merge:Qt},Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sr=class extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=zd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"v3":this.uniforms[i].value=new P().fromArray(r.value);break;case"v4":this.uniforms[i].value=new bt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new _t().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kd=class extends Sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bo=class extends Ba{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wd=class extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xd=class extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ha=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jd=class extends Ha{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case dl:a=e,s=2*t-i;break;case pl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case dl:n=e,o=2*i-t;break;case pl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(i-t)/(r-t),x=m*m,M=x*m,g=-d*M+2*d*x-d*m,p=(1+d)*M+(-1.5-2*d)*x+(-.5+d)*m+1,E=(-1-u)*M+(1.5+u)*x+.5*m,T=u*M-u*x;for(let S=0;S!==s;++S)a[S]=g*n[c+S]+p*n[l+S]+E*n[o+S]+T*n[h+S];return a}},qd=class extends Ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let d=0;d!==s;++d)a[d]=n[l+d]*h+n[o+d]*c;return a}},Yd=class extends Ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kd=class extends Ha{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(r-t),x=1-m;for(let M=0;M!==s;++M)a[M]=n[l+M]*x+n[o+M]*m;return a}let d=s*2,u=e-1;for(let m=0;m!==s;++m){let x=n[l+m],M=n[o+m],g=u*d+m*2,p=h[g],E=h[g+1],T=e*d+m*2,S=c[T],w=c[T+1],R=Jd(i,t,p,S,r);a[m]=ph(R,x,E,w,M)}return a}};Bi=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hr(t,this.TimeBufferType),this.values=Hr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hr(e.times,Array),values:Hr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Sn(e.settings)&&(i.settings={inTangents:Hr(e.settings.inTangents,Array),outTangents:Hr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fn:t=this.InterpolantFactoryMethodDiscrete;break;case Mo:t=this.InterpolantFactoryMethodLinear;break;case rs:t=this.InterpolantFactoryMethodSmooth;break;case hl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fn;case this.InterpolantFactoryMethodLinear:return Mo;case this.InterpolantFactoryMethodSmooth:return rs;case this.InterpolantFactoryMethodBezier:return hl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Sn(this.settings)&&(zl(this.settings.inTangents,e),zl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Sn(this.settings)&&(Hl(this.settings.inTangents,e),Hl(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Xe("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Xe("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&ju(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Xe("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===rs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,d=h-i,u=h+i;for(let m=0;m!==i;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[u+m]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Sn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Bi.prototype.ValueTypeName="";Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=Mo;Ga=class extends Bi{constructor(e,t,i){super(e,t,i)}};Ga.prototype.ValueTypeName="bool";Ga.prototype.ValueBufferType=Array;Ga.prototype.DefaultInterpolation=Fn;Ga.prototype.InterpolantFactoryMethodLinear=void 0;Ga.prototype.InterpolantFactoryMethodSmooth=void 0;Qd=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}};Qd.prototype.ValueTypeName="color";$d=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}};$d.prototype.ValueTypeName="number";ep=class extends Ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)yr.slerpFlat(a,0,n,l-s,n,l,o);return a}},fh=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ep(this.times,this.values,this.getValueSize(),e)}};fh.prototype.ValueTypeName="quaternion";fh.prototype.InterpolantFactoryMethodSmooth=void 0;Va=class extends Bi{constructor(e,t,i){super(e,t,i)}};Va.prototype.ValueTypeName="string";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=Fn;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;tp=class extends Bi{constructor(e,t,i,r){super(e,t,i,r)}};tp.prototype.ValueTypeName="vector";ip=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],m=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new ip,ap=class{constructor(e){this.manager=e!==void 0?e:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ap.DEFAULT_MATERIAL_NAME="__DEFAULT";zo=class extends $t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mh=class extends zo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ls=new _t,Gl=new P,Vl=new P,gh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ls.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ls,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===Ia||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xn=new P,yn=new yr,Li=new P,_h=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xn,yn,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xn,yn,Li.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xn,yn,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xn,yn,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new P,kl=new Ie,Wl=new Ie,li=class extends _h{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Wl),t.subVectors(Wl,kl)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},np=class extends gh{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}},Ho=class extends zo{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vh=class extends _h{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sp=class extends gh{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mh=class extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new sp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Gr=-90,Vr=1,yo=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new li(Gr,Vr,e,t);r.layers=this.layers,this.add(r);let a=new li(Gr,Vr,e,t);a.layers=this.layers,this.add(a);let n=new li(Gr,Vr,e,t);n.layers=this.layers,this.add(n);let s=new li(Gr,Vr,e,t);s.layers=this.layers,this.add(s);let o=new li(Gr,Vr,e,t);o.layers=this.layers,this.add(o);let l=new li(Gr,Vr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},op=class extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Go="\\[\\]\\.:\\/",lp=new RegExp("["+Go+"]","g"),Vo="[^"+Go+"]",cp="[^"+Go.replace("\\.","")+"]",hp=/((?:WC+[\/:])*)/.source.replace("WC",Vo),up=/(WCOD+)?/.source.replace("WCOD",cp),dp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),fp=new RegExp("^"+hp+up+dp+pp+"$"),mp=["material","materials","bones","map"],gp=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class Xr{constructor(t,i,r){this.path=i,this.parsedPath=r||Xr.parseTrackName(i),this.node=Xr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Xr.Composite(t,i,r):new Xr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lp,"")}static parseTrackName(t){let i=fp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);mp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Xr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=gp;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];I0=new Float32Array(1),Xl=new _t,Sh=class{constructor(e,t,i=0,r=1/0){this.ray=new Xc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xl),this}intersectObject(e,t=!0,i=[]){return Eo(e,this,i,t),i.sort(jl),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Eo(e[r],this,i,t);return i.sort(jl),i}};U0=(Qr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Qr.prototype.isMatrix2=!0,Qr);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,uf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_f=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Df=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,am=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Am=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ym=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:xp,alphamap_pars_fragment:yp,alphatest_fragment:Ep,alphatest_pars_fragment:Tp,aomap_fragment:bp,aomap_pars_fragment:wp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Lp,bsdfs:Pp,iridescence_fragment:Np,bumpmap_pars_fragment:Dp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Op,clipping_planes_vertex:Fp,color_fragment:Bp,color_pars_fragment:zp,color_pars_vertex:Hp,color_vertex:Gp,common:Vp,defaultnormal_vertex:kp,displacementmap_pars_vertex:Wp,displacementmap_vertex:Xp,emissivemap_fragment:jp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Kp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Qp,envmap_pars_vertex:$p,envmap_physical_pars_fragment:uf,envmap_vertex:ef,fog_vertex:tf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:of,lights_lambert_fragment:lf,lights_lambert_pars_fragment:cf,lights_pars_begin:hf,lights_toon_fragment:df,lights_toon_pars_fragment:pf,lights_phong_fragment:ff,lights_phong_pars_fragment:mf,lights_physical_fragment:gf,lights_physical_pars_fragment:_f,lights_fragment_begin:vf,lights_fragment_maps:Mf,lights_fragment_end:Sf,lightprobes_pars_fragment:xf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:bf,map_fragment:wf,map_pars_fragment:Af,map_particle_fragment:Rf,map_particle_pars_fragment:Cf,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:Nf,morphcolor_vertex:Df,morphnormal_vertex:If,morphtarget_pars_vertex:Uf,morphtarget_vertex:Of,normal_fragment_begin:Ff,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:Hf,normal_vertex:Gf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:kf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:jf,opaque_fragment:qf,packing:Yf,premultiplied_alpha_fragment:Kf,project_vertex:Zf,dithering_fragment:Jf,dithering_pars_fragment:Qf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:em,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:am,skinbase_vertex:nm,skinning_pars_vertex:sm,skinning_vertex:om,skinnormal_vertex:lm,specularmap_fragment:cm,specularmap_pars_fragment:hm,tonemapping_fragment:um,tonemapping_pars_fragment:dm,transmission_fragment:pm,transmission_pars_fragment:fm,uv_pars_fragment:mm,uv_pars_vertex:gm,uv_vertex:_m,worldpos_vertex:vm,background_vert:Mm,background_frag:Sm,backgroundCube_vert:xm,backgroundCube_frag:ym,cube_vert:Em,cube_frag:Tm,depth_vert:bm,depth_frag:wm,distance_vert:Am,distance_frag:Rm,equirect_vert:Cm,equirect_frag:Lm,linedashed_vert:Pm,linedashed_frag:Nm,meshbasic_vert:Dm,meshbasic_frag:Im,meshlambert_vert:Um,meshlambert_frag:Om,meshmatcap_vert:Fm,meshmatcap_frag:Bm,meshnormal_vert:zm,meshnormal_frag:Hm,meshphong_vert:Gm,meshphong_frag:Vm,meshphysical_vert:km,meshphysical_frag:Wm,meshtoon_vert:Xm,meshtoon_frag:jm,points_vert:qm,points_frag:Ym,shadow_vert:Km,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:Qm},Ee={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Ni={basic:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Qt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Qt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Qt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Qt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Qt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Qt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Qt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Qt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Qt([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Qt([Ee.lights,Ee.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ni.physical={uniforms:Qt([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};En={r:0,b:0,g:0},$m=new _t,yh=new qe;yh.set(-1,0,0,0,1,0,0,0,1);ko=class extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Yc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fi(5,5,5),a=new Sr({name:"CubemapFromEquirect",uniforms:aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:jr});a.uniforms.tEquirect.value=t;let n=new $e(r,a),s=t.minFilter;return t.minFilter===ar&&(t.minFilter=ri),new yo(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},Yl=256,ng=3,sg=20,Eh=256,Th=16,og=3,lg=new P,cg=new Ye,Kl=class bh{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new yo(1,10,null),this._boxMesh=new $e(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=lg}=n,l=this._renderer;this._setSize(s);let c=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,x=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(cg));let g=new yo(r,a,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=x,t.background=M,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,i)),this._applyPMREM(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Yl,Ju(t))}_fromTexture(t,i){t.mapping===$r||t.mapping===Na?this._setSize(t.image.length===0?Yl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=Zl(t,!1,!1),r=Math.log2(t)-ng;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Zl(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===$r||t.mapping===Na?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jl()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=hg(),this._integrationMaterial=ug());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/Th);for(let s=0;s<=r;s++){let o=bh.lodToRoughness(s,r);if(s>r-og)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(Eh*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=dg());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};Sg={[vc]:"LINEAR_TONE_MAPPING",[Mc]:"REINHARD_TONE_MAPPING",[Sc]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};wh=new wi,Ah=new ra(1,1),Rh=new Kc(1),Ch=new Oc,Lh=new nd,Ph=new Yc,$l=[],ec=[],tc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);l_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},c_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}},h_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Ps=/(\w+)(\])?(\[|\.)?/g;Dn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);u_(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};d_=37297,p_=0;sc=new qe;__={[vc]:"Linear",[Mc]:"Reinhard",[Sc]:"Cineon",[xc]:"ACESFilmic",[Ec]:"AgX",[Tc]:"Neutral",[yc]:"Custom"};Tn=new P;E_=/^[ \t]*#include +<([\w\d./]+)>/gm;b_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;A_={[bn]:"SHADOWMAP_TYPE_PCF",[wa]:"SHADOWMAP_TYPE_VSM"};C_={[Na]:"ENVMAP_MODE_REFRACTION"};P_={[bo]:"ENVMAP_BLENDING_MULTIPLY",[Du]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};I_=0,U_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new O_(e),t.set(e,i)),i}},O_=class{constructor(e){this.id=I_++,this.code=e,this.usedTimes=0}};W_=0;Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],J_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],mc=new _t,ba=new P,Ns=new P;i0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,a0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Sr({vertexShader:i0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},n0=class extends xr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,m=null,x=typeof XRWebGLBinding<"u",M=new a0,g={},p=t.getContextAttributes(),E=null,T=null,S=[],w=[],R=new Ie,f=null,y=null,b=new li;b.viewport=new bt;let O=new li;O.viewport=new bt;let I=[b,O],B=new op,Z=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=S[ee];return he===void 0&&(he=new ds,S[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=S[ee];return he===void 0&&(he=new ds,S[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=S[ee];return he===void 0&&(he=new ds,S[ee]=he),he.getHandSpace()};function k(ee){let he=w.indexOf(ee.inputSource);if(he===-1)return;let be=S[he];be!==void 0&&(be.update(ee.inputSource,ee.frame,l||n),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",V);for(let ee=0;ee<S.length;ee++){let he=w[ee];he!==null&&(w[ee]=null,S[ee].disconnect(he))}Z=null,N=null,M.reset();for(let ee in g)delete g[ee];if(e.setRenderTarget(E),u=null,d=null,h=null,r=null,T=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(f),e.setSize(R.width,R.height,!1),y!==null){let ee=y.camera;ee.fov=y.fov,ee.zoom=y.zoom,ee.updateProjectionMatrix(),y=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){s=ee,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),f=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,be=null,Le=null;p.depth&&(Le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?nr:or,be=p.stencil?ea:Ui);let Fe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ii(d.textureWidth,d.textureHeight,{format:Di,type:ci,depthTexture:new ra(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new Ii(u.framebufferWidth,u.framebufferHeight,{format:Di,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(ee){for(let he=0;he<ee.removed.length;he++){let be=ee.removed[he],Le=w.indexOf(be);Le>=0&&(w[Le]=null,S[Le].disconnect(be))}for(let he=0;he<ee.added.length;he++){let be=ee.added[he],Le=w.indexOf(be);if(Le===-1){for(let ve=0;ve<S.length;ve++)if(ve>=w.length){w.push(be),Le=ve;break}else if(w[ve]===null){w[ve]=be,Le=ve;break}if(Le===-1)break}let Fe=S[Le];Fe&&Fe.connect(be)}}function me(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let he=ee.near,be=ee.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(be=M.depthFar)),B.near=O.near=b.near=he,B.far=O.far=b.far=be,(Z!==B.near||N!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Z=B.near,N=B.far),B.layers.mask=ee.layers.mask|6,b.layers.mask=B.layers.mask&-5,O.layers.mask=B.layers.mask&-3;let Le=ee.parent,Fe=B.cameras;me(B,Le);for(let ve=0;ve<Fe.length;ve++)me(Fe[ve],Le);B.projectionMatrix.copy(b.projectionMatrix),B.projectionMatrixInverse.copy(b.projectionMatrixInverse),y===null&&ee.isPerspectiveCamera&&(y={camera:ee,fov:ee.fov,zoom:ee.zoom}),q(ee,B,Le)};function q(ee,he,be){be===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=xo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(ee){o=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(B)},this.getCameraTexture=function(ee){return g[ee]};let J=null;function ce(ee,he){if(c=he.getViewerPose(l||n),m=he,c!==null){let be=c.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let Le=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let ve=0;ve<be.length;ve++){let Je=be[ve],nt=null;if(u!==null)nt=u.getViewport(Je);else{let dt=h.getViewSubImage(d,Je);nt=dt.viewport,ve===0&&(e.setRenderTargetTextures(T,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(T))}let De=I[ve];De===void 0&&(De=new li,De.layers.enable(ve),De.viewport=new bt,I[ve]=De),De.matrix.fromArray(Je.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Je.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(nt.x,nt.y,nt.width,nt.height),ve===0&&(B.matrix.copy(De.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(De)}let Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let ve=h.getDepthInformation(be[0]);ve&&ve.isValid&&ve.texture&&M.init(ve,r.renderState)}if(Fe&&Fe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ve=0;ve<be.length;ve++){let Je=be[ve].camera;if(Je){let nt=g[Je];nt||(nt=new Zc,g[Je]=nt);let De=h.getCameraImage(Je);nt.sourceTexture=De}}}}for(let be=0;be<S.length;be++){let Le=w[be],Fe=S[be];Le!==null&&Fe!==void 0&&Fe.update(Le,he,l||n)}J&&J(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}let Ue=new xh;Ue.setAnimationLoop(ce),this.setAnimationLoop=function(ee){J=ee},this.dispose=function(){}}},s0=new _t,Nh=new qe;Nh.set(-1,0,0,0,1,0,0,0,1);c0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pi=null;Dh=class{constructor(e={}){let{canvas:t=qu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=ci}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=n;let x=u,M=new Set([No,Po,Lo]),g=new Set([ci,Ui,Da,ea,Ao,Ro]),p=new Uint32Array(4),E=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},S=null,w=null,R=[],f=[],y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,O=!1,I=null,B=null,Z=null,N=null;this._outputColorSpace=pi;let k=0,$=0,V=null,me=-1,q=null,J=new bt,ce=new bt,Ue=null,ee=new Ye(0),he=0,be=t.width,Le=t.height,Fe=1,ve=null,Je=null,nt=new bt(0,0,be,Le),De=new bt(0,0,be,Le),dt=!1,xt=new Ua,At=new yd,yt=!1,Gt=!1,Zt=new _t,Et=new P,Nt=new bt,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ei(){return V===null?Fe:1}let F=i;function ti(v,D){return t.getContext(v,D)}let ut,vt,xe,mt,Pe,ke,Dt,A,_,G,ne,Q,Me,Se,U,ie,te,L,j,re,le,ge,fe;try{let v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",tt,!1),F===null){let D="webgl2";if(F=ti(D,v),F===null)throw ti(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),Xe("WebGLRenderer: "+v.message),v}function Ae(){ut=new fg(F),ut.init(),le=new t0(F,ut),vt=new rg(F,ut,e,le),xe=new $_(F,ut),vt.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),B=F.createFramebuffer(),Z=F.createFramebuffer(),N=F.createFramebuffer(),mt=new _g(F),Pe=new z_,ke=new e0(F,ut,xe,Pe,vt,le,mt),Dt=new pg(b),A=new vp(F),ge=new tg(F,A),_=new mg(F,A,mt,ge),G=new Mg(F,_,A,ge,mt),L=new vg(F,vt,ke),U=new ag(Pe),ne=new B_(b,Dt,ut,vt,ge,U),Q=new o0(b,Pe),Me=new G_,Se=new q_(ut),te=new eg(b,Dt,xe,G,m,o),ie=new Q_(b,G,vt),fe=new l0(F,mt,vt,xe),j=new ig(F,ut,mt),re=new gg(F,ut,mt),mt.programs=ne.programs,b.capabilities=vt,b.extensions=ut,b.properties=Pe,b.renderLists=Me,b.shadowMap=ie,b.state=xe,b.info=mt}x!==ci&&(y=new xg(x,t.width,t.height,s,r,a));let ae=new n0(b,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let v=ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(v){v!==void 0&&(Fe=v,this.setSize(be,Le,!1))},this.getSize=function(v){return v.set(be,Le)},this.setSize=function(v,D,X=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}be=v,Le=D,t.width=Math.floor(v*Fe),t.height=Math.floor(D*Fe),X===!0&&(t.style.width=v+"px",t.style.height=D+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(be*Fe,Le*Fe).floor()},this.setDrawingBufferSize=function(v,D,X){be=v,Le=D,Fe=X,t.width=Math.floor(v*X),t.height=Math.floor(D*X),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(x===ci){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(J)},this.getViewport=function(v){return v.copy(nt)},this.setViewport=function(v,D,X,H){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,D,X,H),xe.viewport(J.copy(nt).multiplyScalar(ei()).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,D,X,H){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,D,X,H),xe.scissor(ce.copy(De).multiplyScalar(ei()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(v){xe.setScissorTest(dt=v)},this.setOpaqueSort=function(v){ve=v},this.setTransparentSort=function(v){Je=v},this.getClearColor=function(v){return v.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,X=!0){let H=0;if(v){let z=!1;if(V!==null){let oe=V.texture.format;z=M.has(oe)}if(z){let oe=V.texture.type,de=g.has(oe),pe=te.getClearColor(),Te=te.getClearAlpha(),Ne=pe.r,Ke=pe.g,rt=pe.b;de?(p[0]=Ne,p[1]=Ke,p[2]=rt,p[3]=Te,F.clearBufferuiv(F.COLOR,0,p)):(E[0]=Ne,E[1]=Ke,E[2]=rt,E[3]=Te,F.clearBufferiv(F.COLOR,0,E))}else H|=F.COLOR_BUFFER_BIT}D&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),te.dispose(),Me.dispose(),Se.dispose(),ke.dispose(),Pe.dispose(),Dt.dispose(),G.dispose(),_.dispose(),ge.dispose(),fe.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ha),ae.removeEventListener("sessionend",_i),vi.stop()};function We(v){v.preventDefault(),gl("WebGLRenderer: Context Lost."),O=!0}function Oe(){gl("WebGLRenderer: Context Restored."),O=!1;let v=mt.autoReset,D=ie.enabled,X=ie.autoUpdate,H=ie.needsUpdate,z=ie.type;Ae(),mt.autoReset=v,ie.enabled=D,ie.autoUpdate=X,ie.needsUpdate=H,ie.type=z}function tt(v){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function we(v){let D=v.target;D.removeEventListener("dispose",we),pt(D)}function pt(v){gt(v),Pe.remove(v)}function gt(v){let D=Pe.get(v).programs;D!==void 0&&(D.forEach(function(X){ne.releaseProgram(X)}),v.isShaderMaterial&&ne.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,X,H,z,oe){D===null&&(D=Vt);let de=z.isMesh&&z.matrixWorld.determinantAffine()<0,pe=fa(v,D,X,H,z);xe.setMaterial(H,de);let Te=X.index,Ne=1;if(H.wireframe===!0){if(Te=_.getWireframeAttribute(X),Te===void 0)return;Ne=2}let Ke=X.drawRange,rt=X.attributes.position,Re=Ke.start*Ne,C=(Ke.start+Ke.count)*Ne;oe!==null&&(Re=Math.max(Re,oe.start*Ne),C=Math.min(C,(oe.start+oe.count)*Ne)),Te!==null?(Re=Math.max(Re,0),C=Math.min(C,Te.count)):rt!=null&&(Re=Math.max(Re,0),C=Math.min(C,rt.count));let W=C-Re;if(W<0||W===1/0)return;ge.setup(z,H,pe,X,Te);let Y,ue=j;if(Te!==null&&(Y=A.get(Te),ue=re,ue.setIndex(Y)),z.isMesh)H.wireframe===!0?(xe.setLineWidth(H.wireframeLinewidth*ei()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(z.isLine){let ye=H.linewidth;ye===void 0&&(ye=1),xe.setLineWidth(ye*ei()),z.isLineSegments?ue.setMode(F.LINES):z.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else z.isPoints?ue.setMode(F.POINTS):z.isSprite&&ue.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))ue.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let ye=z._multiDrawStarts,K=z._multiDrawCounts,_e=z._multiDrawCount,Ze=Te?A.get(Te).bytesPerElement:1,lt=Pe.get(H).currentProgram.getUniforms();for(let Be=0;Be<_e;Be++)lt.setValue(F,"_gl_DrawID",Be),ue.render(ye[Be]/Ze,K[Be])}else if(z.isInstancedMesh)ue.renderInstances(Re,W,z.count);else if(X.isInstancedBufferGeometry){let ye=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,K=Math.min(X.instanceCount,ye);ue.renderInstances(Re,W,K)}else ue.render(Re,W)};function qa(v,D,X,H){I!==null&&v.isNodeMaterial&&I.setObject(H,v),yt===!0&&U.setState(v,X,!1),v.transparent===!0&&v.side===Ei&&v.forceSinglePass===!1?(v.side=ai,v.needsUpdate=!0,ii(v,D,H),v.side=vr,v.needsUpdate=!0,ii(v,D,H),v.side=Ei):ii(v,D,H)}this.compile=function(v,D,X=null){X===null&&(X=v),I!==null&&I.renderStart(v,D,X),w=Se.get(X),w.init(D),f.push(w),X.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),v!==X&&v.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),Gt=this.localClippingEnabled,yt=U.init(this.clippingPlanes,Gt),yt===!0&&U.setGlobalState(this.clippingPlanes,D),I!==null&&ie.render(w.state.shadowsArray,X,D);let H=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let oe=z.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){let pe=oe[de];qa(pe,X,D,z),H.add(pe)}else qa(oe,X,D,z),H.add(oe)}),w=f.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(v,D,X=null){let H=this.compile(v,D,X);return new Promise(z=>{function oe(){if(H.forEach(function(de){let pe=Pe.get(de).currentProgram;(pe===void 0||pe.isReady())&&H.delete(de)}),H.size===0){z(v);return}setTimeout(oe,10)}ut.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let zi=null;function hr(v){zi&&zi(v)}function ha(){vi.stop()}function _i(){vi.start()}let vi=new xh;vi.setAnimationLoop(hr),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(v){zi=v,ae.setAnimationLoop(v),v===null?vi.stop():vi.start()},ae.addEventListener("sessionstart",ha),ae.addEventListener("sessionend",_i),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;I!==null&&I.renderStart(v,D);let X=ae.enabled===!0&&ae.isPresenting===!0,H=y!==null&&(V===null||X)&&y.begin(b,V);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(b,v,D,V),w=Se.get(v,f.length),w.init(D),w.state.textureUnits=ke.getTextureUnits(),f.push(w),Zt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?At.setFromArrayCamera(D):xt.setFromProjectionMatrix(Zt,bi,D.reversedDepth),Gt=this.localClippingEnabled,yt=U.init(this.clippingPlanes,Gt),S=Me.get(v,R.length),S.init(),R.push(S),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let oe=b.xr.getDepthSensingMesh();oe!==null&&ur(oe,D,-1/0,b.sortObjects)}ur(v,D,0,b.sortObjects),S.finish(),I!==null&&I.updateLights(w.state.lightsArray),b.sortObjects===!0&&S.sort(ve,Je),kt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,kt&&te.addToRenderList(S,v),this.info.autoReset===!0&&this.info.reset(),yt===!0&&U.beginShadows();let z=w.state.shadowsArray;if(ie.render(z,v,D),yt===!0&&U.endShadows(),(H&&y.hasRenderPass())===!1){let oe=S.opaque,de=S.transmissive;if(w.setupLights(),D.isArrayCamera){let pe=D.cameras;if(de.length>0)for(let Te=0,Ne=pe.length;Te<Ne;Te++){let Ke=pe[Te];Ya(oe,de,v,Ke)}kt&&te.render(v);for(let Te=0,Ne=pe.length;Te<Ne;Te++){let Ke=pe[Te];ua(S,v,Ke,Ke.viewport)}}else de.length>0&&Ya(oe,de,v,D),kt&&te.render(v),ua(S,v,D)}V!==null&&$===0&&(ke.updateMultisampleRenderTarget(V),ke.updateRenderTargetMipmap(V)),H&&y.end(b),v.isScene===!0&&v.onAfterRender(b,v,D),ge.resetDefaultState(),me=-1,q=null,f.pop(),f.length>0?(w=f[f.length-1],ke.setTextureUnits(w.state.textureUnits),yt===!0&&U.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,I!==null&&I.renderEnd()};function ur(v,D,X,H){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)X=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){let oe=D.isArrayCamera?At:xt;if(!v.frustumCulled||v.intersectsFrustum(oe)){H&&Nt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Zt);let de=G.update(v),pe=v.material;pe.visible&&S.push(v,de,pe,X,Nt.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){let oe=D.isArrayCamera?At:xt;if(!v.frustumCulled||v.intersectsFrustum(oe)){let de=G.update(v),pe=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Nt.copy(v.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Nt.copy(de.boundingSphere.center)),Nt.applyMatrix4(v.matrixWorld).applyMatrix4(Zt)),Array.isArray(pe)){let Te=de.groups;for(let Ne=0,Ke=Te.length;Ne<Ke;Ne++){let rt=Te[Ne],Re=pe[rt.materialIndex];Re&&Re.visible&&S.push(v,de,Re,X,Nt.z,rt,D)}}else pe.visible&&S.push(v,de,pe,X,Nt.z,null,D)}}}let z=v.children;for(let oe=0,de=z.length;oe<de;oe++)ur(z[oe],D,X,H)}function ua(v,D,X,H){let{opaque:z,transmissive:oe,transparent:de}=v;w.setupLightsView(X),yt===!0&&U.setGlobalState(b.clippingPlanes,X),H&&xe.viewport(J.copy(H)),z.length>0&&Rr(z,D,X),oe.length>0&&Rr(oe,D,X),de.length>0&&Rr(de,D,X),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ya(v,D,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let rt=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Ii(1,1,{generateMipmaps:!0,type:rt?Oi:ci,minFilter:ar,samples:Math.max(4,vt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let z=w.state.transmissionRenderTarget[H.id],oe=H.viewport||J;z.setSize(oe.z*b.transmissionResolutionScale,oe.w*b.transmissionResolutionScale);let de=b.getRenderTarget(),pe=b.getActiveCubeFace(),Te=b.getActiveMipmapLevel();b.setRenderTarget(z),b.getClearColor(ee),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),kt&&te.render(X);let Ne=b.toneMapping;b.toneMapping=ji;let Ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),yt===!0&&U.setGlobalState(b.clippingPlanes,H),Rr(v,X,H),ke.updateMultisampleRenderTarget(z),ke.updateRenderTargetMipmap(z),ut.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Re=0,C=D.length;Re<C;Re++){let W=D[Re],{object:Y,geometry:ue,material:ye,group:K}=W;if(ye.side===Ei&&Y.layers.test(H.layers)){let _e=ye.side;ye.side=ai,ye.needsUpdate=!0,Jn(Y,X,H,ue,ye,K),ye.side=_e,ye.needsUpdate=!0,rt=!0}}rt===!0&&(ke.updateMultisampleRenderTarget(z),ke.updateRenderTargetMipmap(z))}b.setRenderTarget(de,pe,Te),b.setClearColor(ee,he),Ke!==void 0&&(H.viewport=Ke),b.toneMapping=Ne}function Rr(v,D,X){let H=D.isScene===!0?D.overrideMaterial:null;for(let z=0,oe=v.length;z<oe;z++){let de=v[z],{object:pe,geometry:Te,group:Ne}=de,Ke=de.material;Ke.allowOverride===!0&&H!==null&&(Ke=H),pe.layers.test(X.layers)&&Jn(pe,D,X,Te,Ke,Ne)}}function Jn(v,D,X,H,z,oe){I!==null&&z.isNodeMaterial&&I.setObject(v,z),v.onBeforeRender(b,D,X,H,z,oe),v.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(b,D,X,H,v,oe),z.transparent===!0&&z.side===Ei&&z.forceSinglePass===!1?(z.side=ai,z.needsUpdate=!0,b.renderBufferDirect(X,D,H,z,v,oe),z.side=vr,z.needsUpdate=!0,b.renderBufferDirect(X,D,H,z,v,oe),z.side=Ei):b.renderBufferDirect(X,D,H,z,v,oe),v.onAfterRender(b,D,X,H,z,oe)}function Ri(v){let D=0;for(let X of v)X.texture!==null&&D++;return D}function ii(v,D,X){D.isScene!==!0&&(D=Vt);let H=Pe.get(v),z=w.state.lights,oe=w.state.shadowsArray,de=z.state.version,pe=ne.getParameters(v,z.state,oe,D,X,w.state.lightProbeGridArray),Te=ne.getProgramCacheKey(pe),Ne=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let Ke=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=Dt.get(v.envMap||H.environment,Ke),H.envMapRotation=H.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",we),Ne=new Map,H.programs=Ne,H.programVariants=new Map);let rt=Ne.get(Te);if(rt!==void 0){if(H.currentProgram===rt&&H.lightsStateVersion===de)return pa(v,pe),rt}else pe.uniforms=ne.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,X,pe),v.onBeforeCompile(pe,b),rt=ne.acquireProgram(pe,Te),Ne.set(Te,rt),H.uniforms=pe.uniforms;let Re=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=U.uniform),pa(v,pe),H.needsLights=It(v),H.lightsStateVersion=de,H.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.sunLights.value=z.state.sun,Re.sunLightShadows.value=z.state.sunShadow,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.sunShadowMatrix.value=z.state.sunShadowMatrix,Re.sunShadowCascade.value=z.state.sunShadowCascade,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),H.numLightProbeGrids=Ri(w.state.lightProbeGridArray),H.currentProgram=rt,H.uniformsList=null,rt}function Mi(v,D,X,H,z){let oe=Pe.get(v),de=oe.currentProgram.id+","+H+","+z,pe=oe.programVariants.get(de);return pe===void 0?(pe=ii(v,D,X),oe.programVariants.set(de,pe)):(oe.currentProgram=pe,oe.uniformsList=null,oe.outputColorSpace=H,oe.toneMapping=z),pe}function da(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Dn.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function pa(v,D){let X=Pe.get(v);X.outputColorSpace=D.outputColorSpace,X.batching=D.batching,X.batchingColor=D.batchingColor,X.instancing=D.instancing,X.instancingColor=D.instancingColor,X.instancingMorph=D.instancingMorph,X.skinning=D.skinning,X.morphTargets=D.morphTargets,X.morphNormals=D.morphNormals,X.morphColors=D.morphColors,X.morphTargetsCount=D.morphTargetsCount,X.numClippingPlanes=D.numClippingPlanes,X.numIntersection=D.numClipIntersection,X.vertexAlphas=D.vertexAlphas,X.vertexTangents=D.vertexTangents,X.toneMapping=D.toneMapping}function fa(v,D,X,H,z){D.isScene!==!0&&(D=Vt),ke.resetTextureUnits();let oe=D.fog,de=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,pe=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:st.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=Dt.get(H.envMap||de,Te),Ke=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,rt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!X.morphAttributes.position,C=!!X.morphAttributes.normal,W=!!X.morphAttributes.color,Y=ji;H.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Y=b.toneMapping);let ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=ue!==void 0?ue.length:0,K=Pe.get(H),_e=w.state.lights;if(yt===!0&&(Gt===!0||v!==q)){let at=v===q&&H.id===me;U.setState(H,v,at)}let Ze=!1,lt=!1;H.version===K.__version?K.needsLights&&K.lightsStateVersion!==_e.state.version||z.isBatchedMesh&&K.batching===!1||!z.isBatchedMesh&&K.batching===!0||z.isBatchedMesh&&K.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&K.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&K.instancing===!1||!z.isInstancedMesh&&K.instancing===!0||z.isSkinnedMesh&&K.skinning===!1||!z.isSkinnedMesh&&K.skinning===!0||z.isInstancedMesh&&K.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&K.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&K.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&K.instancingMorph===!1&&z.morphTexture!==null||K.envMap!==Ne||H.fog===!0&&K.fog!==oe||K.numClippingPlanes!==void 0&&(K.numClippingPlanes!==U.numPlanes||K.numIntersection!==U.numIntersection)||K.vertexAlphas!==Ke||K.vertexTangents!==rt||K.morphTargets!==Re||K.morphNormals!==C||K.morphColors!==W||K.morphTargetsCount!==ye||K.numLightProbeGrids!==Ri(w.state.lightProbeGridArray)?Ze=!0:(K.outputColorSpace!==pe||K.toneMapping!==Y)&&(lt=!0):(Ze=!0,K.__version=H.version);let Be=K.currentProgram;(Ze===!0||lt===!0)&&(Be=lt===!0?Mi(H,D,z,pe,Y):ii(H,D,z),I&&H.isNodeMaterial&&I.onUpdateProgram(H,Be,K));let He=!1,se=!1,Ge=!1,Ce=Be.getUniforms(),je=K.uniforms;if(xe.useProgram(Be.program)&&(He=!0,se=!0,Ge=!0),H.id!==me&&(me=H.id,se=!0),He||q!==v){xe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ce.setValue(F,"projectionMatrix",v.projectionMatrix),Ce.setValue(F,"viewMatrix",v.matrixWorldInverse);let at=Ce.map.cameraPosition;at!==void 0&&at.setValue(F,Et.setFromMatrixPosition(v.matrixWorld)),vt.logarithmicDepthBuffer&&Ce.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ce.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),q!==v&&(q=v,se=!0,Ge=!0)}if(K.needsLights&&(_e.state.sunShadowMap.length>0&&Ce.setValue(F,"sunShadowMap",_e.state.sunShadowMap,ke),_e.state.directionalShadowMap.length>0&&Ce.setValue(F,"directionalShadowMap",_e.state.directionalShadowMap,ke),_e.state.spotShadowMap.length>0&&Ce.setValue(F,"spotShadowMap",_e.state.spotShadowMap,ke),_e.state.pointShadowMap.length>0&&Ce.setValue(F,"pointShadowMap",_e.state.pointShadowMap,ke)),z.isSkinnedMesh){Ce.setOptional(F,z,"bindMatrix"),Ce.setOptional(F,z,"bindMatrixInverse");let at=z.skeleton;at&&(at.boneTexture===null&&at.computeBoneTexture(),Ce.setValue(F,"boneTexture",at.boneTexture,ke))}z.isBatchedMesh&&(Ce.setOptional(F,z,"batchingTexture"),Ce.setValue(F,"batchingTexture",z._matricesTexture,ke),Ce.setOptional(F,z,"batchingIdTexture"),Ce.setValue(F,"batchingIdTexture",z._indirectTexture,ke),Ce.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Ce.setValue(F,"batchingColorTexture",z._colorsTexture,ke));let Rt=X.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0)&&L.update(z,X,Be),(se||K.receiveShadow!==z.receiveShadow)&&(K.receiveShadow=z.receiveShadow,Ce.setValue(F,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(je.envMapIntensity.value=D.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=h0()),se){if(Ce.setValue(F,"toneMappingExposure",b.toneMappingExposure),K.needsLights&&Ka(je,Ge),oe&&H.fog===!0&&Q.refreshFogUniforms(je,oe),Q.refreshMaterialUniforms(je,H,Fe,Le,w.state.transmissionRenderTarget[v.id]),K.needsLights&&K.numLightProbeGrids>0){let at=T,ot=0;for(let St of w.state.lightProbeGridArray)St.texture!==null&&(at.textures[ot]=St.texture,at.min[ot]=St.boundingBox.min,at.max[ot]=St.boundingBox.max,at.resolution[ot]=St.resolution,ot++);for(let St in at)at[St].length=ot;je.probesSH.value=at.textures,je.probesMin.value=at.min,je.probesMax.value=at.max,je.probesResolution.value=at.resolution}Dn.upload(F,da(K),je,ke)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Dn.upload(F,da(K),je,ke),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ce.setValue(F,"center",z.center),Ce.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ce.setValue(F,"normalMatrix",z.normalMatrix),Ce.setValue(F,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){let at=H.uniformsGroups;for(let ot=0,St=at.length;ot<St;ot++){let Jt=at[ot];fe.update(Jt,Be),fe.bind(Jt,Be)}}return Be}function Ka(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function It(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,D,X){let H=Pe.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Pe.get(v.texture).__webglTexture=D,Pe.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let X=Pe.get(v);X.__webglFramebuffer=D,X.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,X=0){V=v,k=D,$=X;let H=null,z=!1,oe=!1;if(v){let de=Pe.get(v);if(de.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(F.FRAMEBUFFER,de.__webglFramebuffer),J.copy(v.viewport),ce.copy(v.scissor),Ue=v.scissorTest,xe.viewport(J),xe.scissor(ce),xe.setScissorTest(Ue),me=-1;return}else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(v);else if(de.__hasExternalTextures)ke.rebindTextures(v,Pe.get(v.texture).__webglTexture,Pe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ne=v.depthTexture;if(de.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(v)}}let pe=v.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(oe=!0);let Te=Pe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Te[D])?H=Te[D][X]:H=Te[D],z=!0):v.samples>0&&ke.useMultisampledRTT(v)===!1?H=Pe.get(v).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[X]:H=Te,J.copy(v.viewport),ce.copy(v.scissor),Ue=v.scissorTest}else J.copy(nt).multiplyScalar(Fe).floor(),ce.copy(De).multiplyScalar(Fe).floor(),Ue=dt;if(X!==0&&(H=B),xe.bindFramebuffer(F.FRAMEBUFFER,H)&&xe.drawBuffers(v,H),xe.viewport(J),xe.scissor(ce),xe.setScissorTest(Ue),z){let de=Pe.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,X)}else if(oe){let de=D;for(let pe=0;pe<v.textures.length;pe++){let Te=Pe.get(v.textures[pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+pe,Te.__webglTexture,X,de)}}else if(v!==null&&X!==0){let de=Pe.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,X)}me=-1};function Za(v){let D=Pe.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=vt.textureFormatReadable(v.format),D.__typeReadable=vt.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,X,H,z,oe,de,pe=0){if(!(v&&v.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Te=Te[de],Array.isArray(Te)&&(Te=Te[0])),Te){xe.bindFramebuffer(F.FRAMEBUFFER,Te);try{let Ne=v.textures[pe],Ke=Ne.format,rt=Ne.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Re=Za(Ne);if(Re.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-H&&X>=0&&X<=v.height-z&&F.readPixels(D,X,H,z,le.convert(Ke),le.convert(rt),oe)}finally{let Ne=V!==null?Pe.get(V).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,D,X,H,z,oe,de,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&de!==void 0&&(Te=Te[de],Array.isArray(Te)&&(Te=Te[0])),Te)if(D>=0&&D<=v.width-H&&X>=0&&X<=v.height-z){xe.bindFramebuffer(F.FRAMEBUFFER,Te);let Ne=v.textures[pe],Ke=Ne.format,rt=Ne.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Re=Za(Ne);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let C=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,C),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(D,X,H,z,le.convert(Ke),le.convert(rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let W=V!==null?Pe.get(V).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,W);let Y=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Yu(F,Y,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,C),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(C),F.deleteSync(Y),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,X=0){let H=Math.pow(2,-X),z=Math.floor(v.image.width*H),oe=Math.floor(v.image.height*H),de=D!==null?D.x:0,pe=D!==null?D.y:0;ke.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,de,pe,z,oe),xe.unbindTexture()},this.copyTextureToTexture=function(v,D,X=null,H=null,z=0,oe=0){let de,pe,Te,Ne,Ke,rt,Re,C,W,Y=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(X!==null)de=X.max.x-X.min.x,pe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Ke=X.min.y,rt=X.isBox3?X.min.z:0;else{let Ce=Math.pow(2,-z);de=Math.floor(Y.width*Ce),pe=Math.floor(Y.height*Ce),v.isDataArrayTexture?Te=Y.depth:v.isData3DTexture?Te=Math.floor(Y.depth*Ce):Te=1,Ne=0,Ke=0,rt=0}H!==null?(Re=H.x,C=H.y,W=H.z):(Re=0,C=0,W=0);let ue=le.convert(D.format),ye=le.convert(D.type),K;D.isData3DTexture?(ke.setTexture3D(D,0),K=F.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ke.setTexture2DArray(D,0),K=F.TEXTURE_2D_ARRAY):(ke.setTexture2D(D,0),K=F.TEXTURE_2D),xe.activeTexture(F.TEXTURE0),xe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,D.flipY),xe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),xe.pixelStorei(F.UNPACK_ALIGNMENT,D.unpackAlignment);let _e=xe.getParameter(F.UNPACK_ROW_LENGTH),Ze=xe.getParameter(F.UNPACK_IMAGE_HEIGHT),lt=xe.getParameter(F.UNPACK_SKIP_PIXELS),Be=xe.getParameter(F.UNPACK_SKIP_ROWS),He=xe.getParameter(F.UNPACK_SKIP_IMAGES);xe.pixelStorei(F.UNPACK_ROW_LENGTH,Y.width),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Y.height),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),xe.pixelStorei(F.UNPACK_SKIP_ROWS,Ke),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,rt);let se=v.isDataArrayTexture||v.isData3DTexture,Ge=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let Ce=Pe.get(v),je=Pe.get(D),Rt=Pe.get(Ce.__renderTarget),at=Pe.get(je.__renderTarget);xe.bindFramebuffer(F.READ_FRAMEBUFFER,Rt.__webglFramebuffer),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<Te;ot++)se&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(v).__webglTexture,z,rt+ot),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,oe,W+ot)),F.blitFramebuffer(Ne,Ke,Ne+de,Ke+pe,Re,C,Re+de,C+pe,F.DEPTH_BUFFER_BIT,F.NEAREST);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Pe.has(v)){let Ce=Pe.get(v),je=Pe.get(D);xe.bindFramebuffer(F.READ_FRAMEBUFFER,Z),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let Rt=0;Rt<Te;Rt++)se?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,z,rt+Rt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ce.__webglTexture,z),Ge?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.__webglTexture,oe,W+Rt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,je.__webglTexture,oe),z!==0?F.blitFramebuffer(Ne,Ke,Ne+de,Ke+pe,Re,C,Re+de,C+pe,F.COLOR_BUFFER_BIT,F.NEAREST):Ge?F.copyTexSubImage3D(K,oe,Re,C,W+Rt,Ne,Ke,de,pe):F.copyTexSubImage2D(K,oe,Re,C,Ne,Ke,de,pe);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ge?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(K,oe,Re,C,W,de,pe,Te,ue,ye,Y.data):D.isCompressedArrayTexture?F.compressedTexSubImage3D(K,oe,Re,C,W,de,pe,Te,ue,Y.data):F.texSubImage3D(K,oe,Re,C,W,de,pe,Te,ue,ye,Y):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,Re,C,de,pe,ue,ye,Y.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,Re,C,Y.width,Y.height,ue,Y.data):F.texSubImage2D(F.TEXTURE_2D,oe,Re,C,de,pe,ue,ye,Y);xe.pixelStorei(F.UNPACK_ROW_LENGTH,_e),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),xe.pixelStorei(F.UNPACK_SKIP_ROWS,Be),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,He),oe===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&F.generateMipmap(K),xe.unbindTexture()},this.initRenderTarget=function(v){Pe.get(v).__webglFramebuffer===void 0&&ke.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ke.setTextureCube(v,0):v.isData3DTexture?ke.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ke.setTexture2DArray(v,0):ke.setTexture2D(v,0),xe.unbindTexture()},this.resetState=function(){k=0,$=0,V=null,xe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}});var Wh={};uu(Wh,{createScene:()=>p0});function Oh(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function zh(e,t,i=1){return(e/(Mt.rx*i))**2+(t/(Mt.rz*i))**2<1}function kh(e){let t=new hi;return t.setAttribute("position",new ht(e,3)),t.computeVertexNormals(),t}function jn(e,t,i){let r=e.length;return e.map((a,n)=>{let s=n/r*gi;return new P(Math.cos(s)*Mt.rx*a*t,i,Math.sin(s)*Mt.rz*a*t)})}function d0(e,t){let i=[],r=e.length;for(let a=0;a<r;a+=1){let n=e[a],s=e[(a+1)%r];i.push(0,t,0,s.x,s.y,s.z,n.x,n.y,n.z)}return kh(i)}function Wo(e,t){let i=[],r=e.length;for(let a=0;a<r;a+=1){let n=(a+1)%r,s=e[a],o=e[n],l=t[a],c=t[n];i.push(s.x,s.y,s.z,o.x,o.y,o.z,l.x,l.y,l.z),i.push(o.x,o.y,o.z,c.x,c.y,c.z,l.x,l.y,l.z)}return kh(i)}function wr(e,t,i,r,a=6){let n=new P().subVectors(t,e),s=n.length(),o=new $e(new Ai(i,i,s,a,1),r);return o.position.copy(e).addScaledVector(n,.5),o.quaternion.setFromUnitVectors(Vh,n.normalize()),o}function lr(e,t,i,r){return new $e(new Fi(e,t,i),r)}function Hh(e,t,i){let r=new $e(new na(e,t,4,1),i);return r.rotation.y=Math.PI/4,r}function Gh(e,t,i){let r=gi/dr.wave;return Xo.amp*.5*(Math.sin(e*Xo.kx+i*r)+Math.sin(t*Xo.kz-i*r*.8+1.3))}async function p0(e){let{container:t,labelLayer:i,landmarks:r,canvasLabel:a,getInsetLeft:n=()=>0,durations:s,onSelect:o=()=>{},onInteract:l=()=>{},onZoomLimits:c=()=>{},onContextLost:h=()=>{},onContextRestored:d=()=>{}}=e,u=!!e.poster,m=window.matchMedia(`(min-width: ${ma.wide}px)`),x=()=>m.matches,M=e.quality||(u||x()?"high":"low"),g=e.motion!==!1,p=!!e.reduced,E=e.time==="night"?"night":"day",T=document.createElement("canvas");T.className="scene__canvas",T.setAttribute("role","img"),T.setAttribute("aria-label",a(E)),t.prepend(T);let S=new Dh({canvas:T,antialias:M==="high",powerPreference:"high-performance"});S.shadowMap.enabled=!0;let w=new Gc,R=new zc(ct.day.sky,60,200);w.fog=R,w.background=new Ye(ct.day.sky);let f=new li(Ct.fov,1,.5,3e3),y=(C,W={})=>new Bo({color:C,flatShading:!0,...W}),b={grass:y(ct.grass),sand:y(ct.sand),rock:y(ct.rock),tree:y(ct.tree),structure:y(ct.structure),accent:y(ct.accent),bulb:y(ct.structure,{emissive:ct.bulb,emissiveIntensity:0}),sea:new Bo({vertexColors:!0,flatShading:!0}),farSea:y(ct.day.seaDeep),beam:new Gn({color:ct.beam,vertexColors:!0,transparent:!0,opacity:jt.day.beam,blending:In,depthWrite:!1,side:Ei}),blob:new Gn({color:ct.shadow,transparent:!0,opacity:.16,depthWrite:!1})},O=new $t,I=new kn(.075,6,4),B=[],Z=new Pt;w.add(Z);let N=(C,W,Y,ue)=>{let ye=new $e(new Oo(ue,12).rotateX(-Math.PI/2),b.blob);ye.position.set(C,W+.03,Y),Z.add(ye)},k=new mh(ct.day.sky,ct.sand,jt.day.hemi);w.add(k);let $=new Mh(ct.day.keyLight,jt.day.key);$.position.set(-16,24,12),$.shadow.mapSize.set(Ci.shadowMapSize,Ci.shadowMapSize),Object.assign($.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:70}),$.shadow.bias=-6e-4,$.shadow.normalBias=.03,w.add($);let V=new Ho(ct.bulb,0,13,2);V.position.set(Ft.x,3.4,Ft.z);let me=new Ho(ct.bulb,0,15,2);me.position.set(Xt.x,Wa+4,Xt.z+1.6),w.add(V,me);let q=(()=>{let C=Oh(7);return Array.from({length:Mt.points},()=>1+(C()*2-1)*.09)})(),J=jn(q,1,Mt.top),ce=jn(q,1.07,.5),Ue=jn(q,1.17,.3),ee=jn(q,1.32,-1.6);[new $e(d0(J,Mt.top),b.grass),new $e(Wo(J,ce),b.sand),new $e(Wo(ce,Ue),b.sand),new $e(Wo(Ue,ee),b.sand)].forEach(C=>{C.receiveShadow=!0,w.add(C),B.push(C)});let be=new $e(new Ai(1.9,3.6,Xt.height,9,1),b.grass);be.position.set(Xt.x,Mt.top+Xt.height/2,Xt.z),be.rotation.y=.3,be.receiveShadow=!0,be.castShadow=!0,w.add(be),B.push(be);let Le=new Pt;w.add(Le);let Fe=new $e(new Oo(3,12).rotateX(-Math.PI/2),b.sand);Fe.position.set(Ft.x,Mt.top+.025,Ft.z),Le.add(Fe);let ve=[[Ft,{x:1.6,z:9.2}],[Ft,{x:-.6,z:-1.2}],[Ft,{x:4.4,z:.6}],[Ft,{x:ni.x+.9,z:ni.z}],[Ft,br]];ve.forEach(([C,W])=>{let Y=W.x-C.x,ue=W.z-C.z,ye=Math.hypot(Y,ue),K=lr(.9,.04,ye,b.sand);K.position.set(C.x+Y/2,Mt.top+.02,C.z+ue/2),K.rotation.y=Math.atan2(Y,ue),Le.add(K)}),Le.traverse(C=>{C.receiveShadow=!0});let Je=(C,W,Y,ue)=>{let ye=ue.x-Y.x,K=ue.z-Y.z,_e=ui(((C-Y.x)*ye+(W-Y.z)*K)/(ye*ye+K*K),0,1);return Math.hypot(C-(Y.x+ye*_e),W-(Y.z+K*_e))},nt=M==="high"?Ci.seaSegmentsHigh:Ci.seaSegmentsLow,De=new za(130,130,nt,nt).rotateX(-Math.PI/2),dt=De.attributes.position,xt=new Float32Array(dt.count*2),At=new Float32Array(dt.count);for(let C=0;C<dt.count;C+=1){let W=dt.getX(C),Y=dt.getZ(C);xt[C*2]=W,xt[C*2+1]=Y;let ue=Math.sqrt((W/13.5)**2+(Y/10.8)**2);At[C]=ui((ue-1)/1.6,0,1)}De.setAttribute("color",new ht(new Float32Array(dt.count*3),3));let yt=new $e(De,b.sea);w.add(yt);let Gt=new $e(new za(3e3,3e3).rotateX(-Math.PI/2),b.farSea);Gt.position.y=-.14,w.add(Gt);let Zt=C=>{for(let W=0;W<dt.count;W+=1)dt.setY(W,Gh(xt[W*2],xt[W*2+1],C));dt.needsUpdate=!0},Et=[[1.6,14.6,3.2],[14.2,1.1,3.6],[ni.x-1.2,ni.z,3]],Nt=new Float32Array(dt.count);for(let C=0;C<dt.count;C+=1){let W=xt[C*2],Y=xt[C*2+1],ue=0;Et.forEach(([ye,K,_e])=>{ue+=Math.exp(-((W-ye)**2+(Y-K)**2)/(_e*_e))}),Nt[C]=Math.min(1,ue)}let Vt=(()=>{let C=new Pt;C.position.set(Xt.x,Wa,Xt.z),C.rotation.y=5*fi;let W=3.7,Y=3,ue=.42;[-1,1].forEach(Be=>{[-1,1].forEach(He=>{C.add(wr(new P(He*1.7,0,Be*.75),new P(0,W,Be*ue),.09,b.structure))})}),C.add(wr(new P(0,W,-ue-.15),new P(0,W,ue+.15),.14,b.structure));let ye=new Pt;ye.position.y=W,C.add(ye),[-1,1].forEach(Be=>{let He=new $e(new lh(Y,.07,4,32),b.accent);He.position.z=Be*ue,ye.add(He);for(let se=0;se<8;se+=1){let Ge=se/8*gi;ye.add(wr(new P(0,0,Be*ue),new P(Math.cos(Ge)*Y,Math.sin(Ge)*Y,Be*ue),.035,b.structure,4))}});let K=new Fi(.5,.55,.5),_e=[];for(let Be=0;Be<8;Be+=1){let He=(Be+.5)/8*gi,se=new Pt;se.position.set(Math.cos(He)*Y,Math.sin(He)*Y,0);let Ge=new $e(K,Be%2?b.accent:b.structure);Ge.position.y=-.36,se.add(Ge),ye.add(se),_e.push(se)}let Ze=new Tr(I,b.bulb,48),lt=0;return[-1,1].forEach(Be=>{for(let He=0;He<24;He+=1){let se=He/24*gi;O.position.set(Math.cos(se)*Y,Math.sin(se)*Y,Be*(ue+.09)),O.updateMatrix(),Ze.setMatrixAt(lt,O.matrix),lt+=1}}),ye.add(Ze),w.add(C),N(Xt.x,Wa,Xt.z,2),{group:C,update(Be){ye.rotation.z=-(Be/dr.ferris)*gi,_e.forEach(He=>{He.rotation.z=-ye.rotation.z})}}})(),kt=(()=>{let C=new Pt;C.position.set(Ft.x,Mt.top,Ft.z);let W=new Pt;C.add(W);let Y=new $e(new Ai(2,2.05,.25,16),b.structure);Y.position.y=.125,W.add(Y);let ue=new $e(new Ai(.16,.16,2.3,8),b.structure);ue.position.y=1.15,C.add(ue);let ye=new $e(new Ai(2.3,2.3,.22,14),b.structure);ye.position.y=2.36,W.add(ye);let K=new $e(new na(2.4,1,14),b.accent);K.position.y=2.97,W.add(K);let _e=new $e(new kn(.15,8,6),b.accent);_e.position.y=3.55,W.add(_e);let Ze=new Fi(.2,.32,.6),lt=[];for(let He=0;He<8;He+=1){let se=He/8*gi,Ge=Math.cos(se)*1.45,Ce=Math.sin(se)*1.45;W.add(wr(new P(Ge,.25,Ce),new P(Ge,2.26,Ce),.025,b.structure,4));let je=new $e(Ze,He%2?b.accent:b.structure);je.position.set(Ge,1,Ce),je.rotation.y=-se,W.add(je),lt.push(je)}let Be=new Tr(I,b.bulb,18);for(let He=0;He<18;He+=1){let se=He/18*gi;O.position.set(Math.cos(se)*2.33,2.25,Math.sin(se)*2.33),O.updateMatrix(),Be.setMatrixAt(He,O.matrix)}return W.add(Be),w.add(C),N(Ft.x,Mt.top,Ft.z,2.5),{group:C,update(He){W.rotation.y=He/dr.carousel*gi,lt.forEach((se,Ge)=>{se.position.y=1+Math.sin(He*2.2+Ge*1.7)*.12})}}})(),ei=(()=>{let C=new Pt,W=new Vn([[4.4,1.7,-3.2],[7.4,3.4,-4.6],[10.4,2.6,-3.6],[14.4,1.8,-.6],[14.2,2.6,2.8],[10.8,4,4.6],[7.6,2,4.4],[5,1.6,2.4],[3.9,2.4,-.4]].map(([ot,St,Jt])=>new P(ot,St,Jt)),!0,"catmullrom",.5),Y=220,ue=[],ye=[],K=new P,_e=new P,Ze=new P,lt=new Tr(new Fi(.66,.05,.12),b.structure,Y/2),Be=new Tr(I,b.bulb,Math.floor(Y/6)*2),He=0,se=0;for(let ot=0;ot<Y;ot+=1){let St=ot/Y;if(W.getPointAt(St,K),W.getTangentAt(St,_e),Ze.crossVectors(_e,Vh).normalize(),ue.push(K.clone().addScaledVector(Ze,.27)),ye.push(K.clone().addScaledVector(Ze,-.27)),ot%2===0&&(O.position.copy(K),O.lookAt(K.clone().add(_e)),O.updateMatrix(),lt.setMatrixAt(He,O.matrix),He+=1),ot%6===0&&[.36,-.36].forEach(Jt=>{O.position.copy(K).addScaledVector(Ze,Jt),O.position.y+=.05,O.rotation.set(0,0,0),O.updateMatrix(),Be.setMatrixAt(se,O.matrix),se+=1}),ot%9===0){let Jt=zh(K.x,K.z,1.04)?Mt.top:-.8;C.add(wr(new P(K.x,Jt,K.z),new P(K.x,K.y-.06,K.z),.06,b.structure,5))}}[ue,ye].forEach(ot=>{C.add(new $e(new hh(new Vn(ot,!0),Y,.07,5,!0),b.accent))}),C.add(lt,Be);let Ge=new Fi(.62,.34,.72),Ce=new Fi(.5,.16,.3),je=[];for(let ot=0;ot<3;ot+=1){let St=new Pt,Jt=new $e(Ge,b.accent);Jt.position.y=.2;let Ja=new $e(Ce,b.structure);Ja.position.set(0,.42,-.12),St.add(Jt,Ja),C.add(St),je.push(St)}let Rt=.82/W.getLength();w.add(C);let at=new P;return{group:C,update(ot){let St=ot/dr.coaster%1;je.forEach((Jt,Ja)=>{let il=(St-Ja*Rt+2)%1;W.getPointAt(il,Jt.position),W.getTangentAt(il,_e),at.copy(Jt.position).add(_e),Jt.lookAt(at)})}}})(),F=(()=>{let C=new Pt;C.position.set(ni.x,Mt.top,ni.z);let W=.9;for(let _e=0;_e<4;_e+=1){let Ze=mi(.72,.48,_e/4),lt=mi(.72,.48,(_e+1)/4),Be=new $e(new Ai(lt,Ze,W,10),_e%2?b.accent:b.structure);Be.position.y=W*(_e+.5),C.add(Be)}let Y=new $e(new Ai(.72,.72,.12,10),b.structure);Y.position.y=3.66;let ue=new $e(new Ai(.4,.4,.55,10),b.bulb);ue.position.y=4;let ye=new $e(new na(.56,.5,10),b.accent);ye.position.y=4.52,C.add(Y,ue,ye);let K=new Pt;return K.position.y=4,[0,Math.PI].forEach(_e=>{let Ze=new na(.9,7.5,12,4,!0).rotateZ(Math.PI/2).translate(3.75,0,0),lt=Ze.attributes.position,Be=new Float32Array(lt.count*3);for(let se=0;se<lt.count;se+=1){let Ge=Math.pow(1-ui(lt.getX(se)/7.5,0,1),1.6);Be.set([Ge,Ge,Ge],se*3)}Ze.setAttribute("color",new ht(Be,3));let He=new $e(Ze,b.beam);He.rotation.y=_e,He.castShadow=!1,K.add(He)}),C.add(K),[[-1.6,-.6,.8,1.1],[-1.3,-.5,-1,.8],[-2.3,-.8,-.2,.9],[-.6,-.4,1.6,.6]].forEach(([_e,Ze,lt,Be])=>{let He=new $e(new ih(Be,0),b.rock);He.position.set(_e,Ze,lt),He.rotation.set(_e,lt,Be),C.add(He)}),w.add(C),N(ni.x,Mt.top,ni.z,1),{group:C,beams:K,update(_e){K.rotation.y=_e/dr.beam*gi}}})(),ti=(()=>{let C=new Pt,W=lr(1.3,.14,5.8,b.structure);W.position.set(1.6,.55,11.9),C.add(W);for(let Ce=9.4;Ce<=14.7;Ce+=1.3)[-.55,.55].forEach(je=>{C.add(wr(new P(1.6+je,-1,Ce),new P(1.6+je,.5,Ce),.08,b.rock,5))});[1,2.2].forEach(Ce=>{C.add(wr(new P(Ce,.6,14.6),new P(Ce,1.7,14.6),.05,b.structure,5));let je=new $e(new kn(.15,8,6),b.bulb);je.position.set(Ce,1.78,14.6),C.add(je)});let Y=new Pt,ue=lr(1.1,.5,3,b.structure);ue.position.y=.15;let ye=lr(1.12,.12,3.02,b.accent);ye.position.y=.3;let K=lr(.8,.5,1,b.structure);K.position.set(0,.65,.3);let _e=lr(.9,.08,1.1,b.accent);_e.position.set(0,.94,.3),Y.add(ue,ye,K,_e),Y.position.set(3.3,0,13.4),Y.rotation.y=.15,C.add(Y);let Ze=new Pt,lt=lr(1,.9,1,b.structure);lt.position.y=.45;let Be=Hh(.85,.6,b.accent);Be.position.y=1.2,Ze.add(lt,Be),Ze.position.set(oa.x,Mt.top,oa.z),C.add(Ze),N(oa.x,Mt.top,oa.z,.9);let He=new Pt,se=lr(1.6,1,1.2,b.structure);se.position.y=.5;let Ge=Hh(1.25,.7,b.accent);return Ge.position.y=1.35,He.add(se,Ge),He.position.set(br.x,Mt.top,br.z),He.rotation.y=.4,C.add(He),N(br.x,Mt.top,br.z,1.2),w.add(C),{group:C,update(Ce){Y.position.y=Gh(3.3,13.4,Ce)*.9,Y.rotation.z=Math.sin(Ce*1.3)*.04}}})(),ut=(()=>{let C=Oh(21),W=[],Y=(K,_e)=>!zh(K,_e,.88)||Math.hypot(K-Ft.x,_e-Ft.z)<3.6||Math.hypot(K-Xt.x,_e-Xt.z)<3.9||Math.hypot(K-ni.x,_e-ni.z)<1.9||K>3.3&&Math.abs(_e)<5.4||Math.hypot(K-oa.x,_e-oa.z)<1.4||Math.hypot(K-br.x,_e-br.z)<1.7||ve.some(([Ze,lt])=>Je(K,_e,Ze,lt)<.9)?!0:W.some(Ze=>Math.hypot(K-Ze.x,_e-Ze.z)<1.4);for(let K=0;K<900&&W.length<30;K+=1){let _e=(C()*2-1)*Mt.rx,Ze=(C()*2-1)*Mt.rz;Y(_e,Ze)||W.push({x:_e,z:Ze,s:.75+C()*.45,r:C()*gi})}let ue=new Tr(new na(.6,1.5,6),b.tree,W.length),ye=new Tr(new Ai(.11,.13,.5,5),b.rock,W.length);return W.forEach((K,_e)=>{O.rotation.set(0,K.r,0),O.scale.setScalar(K.s),O.position.set(K.x,Mt.top+.25*K.s,K.z),O.updateMatrix(),ye.setMatrixAt(_e,O.matrix),O.position.set(K.x,Mt.top+(.5+.75)*K.s,K.z),O.updateMatrix(),ue.setMatrixAt(_e,O.matrix)}),O.scale.setScalar(1),O.rotation.set(0,0,0),w.add(ue,ye),[ue,ye]})();[Vt.group,kt.group,ei.group,F.group,ti.group,...ut].forEach(C=>{C.traverse(W=>{W.isMesh&&W.material!==b.beam&&(W.castShadow=!0,W.receiveShadow=!0)})}),F.beams.traverse(C=>{C.castShadow=!1,C.receiveShadow=!1});let vt=E==="night"?1:0,xe=new Ye,mt=new Ye,Pe=(C,W,Y,ue)=>ue.copy(xe.set(C)).lerp(mt.set(W),Y),ke=new Ye,Dt=new Ye,A=De.attributes.color,_=new Ye,G=new Ye(ct.bulb);function ne(C){Pe(ct.day.sky,ct.night.sky,C,w.background),R.color.copy(w.background),Pe(ct.day.sky,ct.night.keyLight,C,k.color),k.intensity=mi(jt.day.hemi,jt.night.hemi,C),Pe(ct.day.keyLight,ct.night.keyLight,C,$.color),$.intensity=mi(jt.day.key,jt.night.key,C),V.intensity=mi(jt.day.point,jt.night.point,C),me.intensity=V.intensity,b.bulb.emissiveIntensity=mi(jt.day.bulb,jt.night.bulb,C),b.beam.opacity=mi(jt.day.beam,jt.night.beam,C);let W=mi(jt.day.seaGlow,jt.night.seaGlow,C);Pe(ct.day.seaDeep,ct.night.seaDeep,C,b.farSea.color),Pe(ct.day.seaShallow,ct.night.seaShallow,C,ke),Pe(ct.day.seaDeep,ct.night.seaDeep,C,Dt);for(let Y=0;Y<A.count;Y+=1){_.copy(ke).lerp(Dt,At[Y]);let ue=Nt[Y]*W;A.setXYZ(Y,_.r+G.r*ue,_.g+G.g*ue,_.b+G.b*ue)}A.needsUpdate=!0}ne(vt);function Q(){let C=window.devicePixelRatio||1;return u?1:Math.min(C,M==="high"?Ci.pixelRatioHigh:Ci.pixelRatioLow)}function Me(){$.castShadow=M==="high",Z.visible=M!=="high"}Me();function Se(C){C!==M&&(M=C,Me(),H())}let U=Ct.elevationMin*fi,ie=Ct.elevationMax*fi,te={az:Ct.startAzimuth*fi,el:Ct.startElevation*fi,dist:50,target:Bh.clone()},L=50,j=1,re=0,le=80,ge=!0,fe=!1,Ae=null,ae=null,We="",Oe=C=>ui(C,Ct.minDistance,le);function tt(){let C=te.dist<=Ct.minDistance+.01,W=te.dist>=le-.01,Y=`${C}|${W}`;Y!==We&&(We=Y,c({atMin:C,atMax:W}))}function we(){let{az:C,el:W,dist:Y,target:ue}=te;f.position.set(ue.x+Y*Math.cos(W)*Math.sin(C),ue.y+Y*Math.sin(W),ue.z+Y*Math.cos(W)*Math.cos(C)),f.lookAt(ue),R.near=Y+18,R.far=Y+150,tt()}function pt(C,W){let Y={az:te.az+u0((C.az??te.az)-te.az),el:ui(C.el??te.el,U,ie),dist:Oe(C.dist??te.dist),target:(C.target??te.target).clone()};if(p||W<=0){te.az=Y.az,te.el=Y.el,te.dist=Y.dist,te.target.copy(Y.target),Ae=null,v();return}Ae={from:{az:te.az,el:te.el,dist:te.dist,target:te.target.clone()},to:Y,start:performance.now(),duration:W},v()}function gt(C){if(!Ae)return;let{from:W,to:Y,start:ue,duration:ye}=Ae,K=Uh(ui((C-ue)/ye,0,1));te.az=mi(W.az,Y.az,K),te.el=mi(W.el,Y.el,K),te.dist=mi(W.dist,Y.dist,K),te.target.lerpVectors(W.target,Y.target,K),K>=1&&(Ae=null)}function qa(C){if(!ae)return;let{from:W,to:Y,start:ue,duration:ye}=ae,K=Uh(ui((C-ue)/ye,0,1));vt=mi(W,Y,K),ne(vt),K>=1&&(ae=null)}function zi(){Ae=null,ge=!1,fe||(fe=!0,l())}let hr=r.map(({id:C,name:W})=>{let Y=document.createElement("button");Y.type="button",Y.className="marker is-hidden",Y.tabIndex=-1,Y.dataset.id=C;let ue=document.createElement("span");ue.className="marker__pill";let ye=document.createElement("span");return ye.className="marker__text",ye.textContent=W,ue.append(ye),Y.append(ue),Y.addEventListener("click",()=>o(C)),i.append(Y),{id:C,el:Y,anchor:new P(...Fh[C].anchor),occluded:!1,shown:!1,current:!1,half:null,height:0,pillW:0,pillH:0}}),ha=!1,_i=new P,vi=new P,ur=new Sh,ua=0,Ya=e.avoid||[];function Rr(C){if(!ha)return;let W=t.clientWidth,Y=t.clientHeight,ue=C-ua>120;ue&&(ua=C),hr.forEach(se=>{se.half===null&&(se.half=se.el.offsetWidth/2,se.height=se.el.offsetHeight,se.pillW=se.el.firstElementChild.offsetWidth,se.pillH=se.el.firstElementChild.offsetHeight)});let ye=t.getBoundingClientRect(),K=Ya.map(se=>se.getBoundingClientRect()).filter(se=>se.width>0&&se.height>0).map(se=>({l:se.left-ye.left,t:se.top-ye.top,r:se.right-ye.left,b:se.bottom-ye.top})),_e=4,Ze=(se,Ge)=>se.l<Ge.r+_e&&se.r>Ge.l-_e&&se.t<Ge.b+_e&&se.b>Ge.t-_e,lt=(se,Ge,Ce)=>{let je=Ce-se.height/2;return{l:Ge-se.pillW/2,r:Ge+se.pillW/2,t:je-se.pillH/2,b:je+se.pillH/2}},Be=hr.map(se=>{if(ue){vi.subVectors(se.anchor,f.position);let ot=vi.length();ur.set(f.position,vi.normalize()),ur.far=ot;let St=ur.intersectObjects(B,!1);se.occluded=St.length>0&&St[0].distance<ot-.6}_i.copy(se.anchor).project(f);let Ge=(_i.x*.5+.5)*W,Ce=_i.z<1&&Ge>re&&_i.x<1.02&&_i.y>-1.02&&_i.y<1.08,je=re+se.half+_e,Rt=ui(Ge,je,Math.max(je,W-se.half-_e)),at=ui((-_i.y*.5+.5)*Y,se.height+_e,Math.max(se.height+_e,Y-_e));return{m:se,x:Rt,y:at,depth:_i.z,candidate:Ce&&!se.occluded}});Be.sort((se,Ge)=>Number(Ge.m.current)-Number(se.m.current)||se.depth-Ge.depth);let He=[];Be.forEach(se=>{let{y:Ge}=se,Ce=se.candidate;if(Ce){let je=lt(se.m,se.x,Ge),Rt=se.m.current&&K.find(at=>Ze(je,at));Rt&&(Ge+=Rt.t>Y/2?Rt.t-_e*2-je.b:Rt.b+_e*2-je.t,Ge=ui(Ge,se.m.height+_e,Math.max(se.m.height+_e,Y-_e)),je=lt(se.m,se.x,Ge)),K.some(at=>Ze(je,at))||He.some(at=>Ze(je,at))?Ce=!1:He.push(je)}se.m.el.style.transform=`translate3d(${se.x.toFixed(1)}px, ${Ge.toFixed(1)}px, 0) translate(-50%, -100%)`,Ce!==se.m.shown&&(se.m.shown=Ce,se.m.el.classList.toggle("is-hidden",!Ce))})}let Ri=u?7.4:0,ii=0,Mi=0,da=!document.hidden,pa=!0,fa=!1,Ka=!1,It={warmUntil:0,frames:0,total:0,prev:0};function Za(){return g&&!u}function v(){!ii&&da&&pa&&!fa&&!Ka&&(ii=requestAnimationFrame(X))}function D(C,W){if(!W||M!=="high"||u||e.quality){It.warmUntil=0,It.prev=0;return}if(!It.warmUntil){It.warmUntil=C+Ci.warmupMs,It.frames=0,It.total=0,It.prev=C;return}let Y=C-It.prev;It.prev=C,!(C<It.warmUntil)&&(It.frames+=1,It.total+=Y,It.total>=Ci.sampleWindowMs&&(It.total/It.frames>Ci.slowFrameMs&&Se("low"),It.frames=0,It.total=0))}function X(C){ii=0;let W=Mi?Math.min((C-Mi)/1e3,.1):0;Mi=C;let Y=Za();Y&&(Ri+=W,!fe&&!p&&!Ae&&(te.az+=W/dr.autoRotate*gi)),gt(C),qa(C),Vt.update(Ri),kt.update(Ri),ei.update(Ri),F.update(Ri),ti.update(Ri),Zt(Ri),we(),S.render(w,f),Rr(C),D(C,Y),Y||Ae||ae?v():Mi=0}function H(){let C=t.clientWidth,W=t.clientHeight;if(!C||!W)return;S.setPixelRatio(Q()),S.setSize(C,W,!1),f.aspect=C/W;let Y=Math.min(n(),C*.6);Y>0?f.setViewOffset(C,W,-Y/2,0,C,W):f.clearViewOffset(),f.updateProjectionMatrix(),re=Y,j=(C-Y)/W,L=u?nl(e.posterSize||"wide"):_a(C-Y,W),hr.forEach(ue=>{ue.half=null}),le=L*Ct.maxDistanceFactor,ge&&!Ae&&(te.dist=L),te.dist=Oe(te.dist),Mi=0,v()}let z=new AbortController,{signal:oe}=z,de=new Map,pe=null,Te=()=>{let[C,W]=[...de.values()];return{d:Math.max(1,Math.hypot(C.x-W.x,C.y-W.y)),my:(C.y+W.y)/2}};T.addEventListener("pointerdown",C=>{C.pointerType==="mouse"&&C.button!==0||(zi(),de.set(C.pointerId,{x:C.clientX,y:C.clientY,type:C.pointerType}),C.pointerType==="mouse"&&T.setPointerCapture(C.pointerId),pe=de.size===2?Te():null)},{signal:oe}),T.addEventListener("pointermove",C=>{let W=de.get(C.pointerId);if(!W)return;let Y=C.clientX-W.x,ue=C.clientY-W.y;W.x=C.clientX,W.y=C.clientY;let ye=Math.PI/Math.max(320,t.clientHeight);if(de.size===1)te.az-=Y*ye*1.3,(W.type==="mouse"||x())&&(te.el=ui(te.el+ue*ye,U,ie));else if(de.size===2&&pe){let K=Te();te.dist=Oe(te.dist*(pe.d/K.d)),te.el=ui(te.el+(K.my-pe.my)*ye,U,ie),pe=K}v()},{signal:oe});let Ne=C=>{de.delete(C.pointerId),pe=de.size===2?Te():null};T.addEventListener("pointerup",Ne,{signal:oe}),T.addEventListener("pointercancel",Ne,{signal:oe}),T.addEventListener("wheel",C=>{if(!x())return;C.preventDefault(),zi();let W=C.deltaMode===1?C.deltaY*16:C.deltaY;te.dist=Oe(te.dist*Math.exp(W*.0012)),v()},{passive:!1,signal:oe}),T.addEventListener("webglcontextlost",C=>{C.preventDefault(),fa=!0,ii&&cancelAnimationFrame(ii),ii=0,h()},{signal:oe}),T.addEventListener("webglcontextrestored",()=>{fa=!1,Mi=0,v(),d()},{signal:oe}),document.addEventListener("visibilitychange",()=>{da=!document.hidden,Mi=0,v()},{signal:oe});let Ke=new ResizeObserver(()=>H());Ke.observe(t);let rt=new IntersectionObserver(C=>{pa=C.some(W=>W.isIntersecting),Mi=0,v()});rt.observe(t),m.addEventListener("change",()=>H(),{signal:oe}),H(),await new Promise(C=>{requestAnimationFrame(W=>{X(W),C()})}),ha=!0;let Re=C=>pt({az:Ct.startAzimuth*fi,el:Ct.startElevation*fi,dist:L,target:Bh},C);return{canvas:T,relayout(){H()},focus(C){let W=Fh[C];W&&(zi(),pt({az:W.azimuth*fi,el:W.elevation*fi,dist:W.distance*ui(1.25/j,1,2),target:new P(...W.target)},s.camera))},reset(){Ae=null,Re(s.camera),ge=!0},rotateStep(C){zi(),pt({az:te.az+C*Ct.stepRotate*fi},s.cameraStep)},zoomStep(C){zi();let W=C>0?Ct.stepZoom:1/Ct.stepZoom;pt({dist:te.dist*W},s.cameraStep)},setSelected(C){hr.forEach(W=>{W.current=W.id===C,W.el.classList.toggle("is-current",W.current),W.half=null}),v()},setTime(C,W){E=C,T.setAttribute("aria-label",a(E));let Y=C==="night"?1:0;if(!W||p||!g){ae=null,vt=Y,ne(vt),v();return}ae={from:vt,to:Y,start:performance.now(),duration:s.timeShift},v()},setMotion(C){g=C,Mi=0,v()},setReduced(C){p=C,v()},loseContextForTest(){S.forceContextLoss()},get quality(){return M},cameraState(){return{azimuth:te.az/fi,elevation:te.el/fi,distance:te.dist,target:te.target.toArray(),tweening:!!Ae}},stats(){return{calls:S.info.render.calls,triangles:S.info.render.triangles,quality:M}},dispose(){Ka=!0,ii&&cancelAnimationFrame(ii),z.abort(),Ke.disconnect(),rt.disconnect(),w.traverse(C=>{C.geometry&&C.geometry.dispose()}),Object.values(b).forEach(C=>C.dispose()),S.dispose(),T.remove(),hr.forEach(C=>C.el.remove())}}}var fi,gi,Vh,ui,mi,Uh,u0,Mt,Xt,Wa,Ft,ni,oa,br,Fh,Bh,Xo,Xh=Qa(()=>{Ih();$a();$n();fi=Math.PI/180,gi=Math.PI*2,Vh=new P(0,1,0),ui=(e,t,i)=>Math.min(i,Math.max(t,e)),mi=(e,t,i)=>e+(t-e)*i,Uh=e=>1-Math.pow(1-e,3),u0=e=>Math.atan2(Math.sin(e),Math.cos(e));Mt={rx:11,rz:8.6,top:.9,points:24},Xt={x:-1.2,z:-4.4,height:2},Wa=Mt.top+Xt.height,Ft={x:.6,z:1.4},ni={x:-10.2,z:.6},oa={x:.2,z:7.3},br={x:-3.6,z:3.6},Fh={pier:{anchor:[1.6,1.9,13.4],target:[2.2,.9,12.2],distance:18,azimuth:22,elevation:28},carousel:{anchor:[Ft.x,3.9,Ft.z],target:[Ft.x,1.7,Ft.z],distance:14,azimuth:35,elevation:30},ferris:{anchor:[Xt.x,Wa+7.1,Xt.z],target:[Xt.x,Wa+3.4,Xt.z],distance:24,azimuth:-25,elevation:22},coaster:{anchor:[14.2,3.3,1.1],target:[9.6,2.4,.8],distance:19,azimuth:68,elevation:28},lighthouse:{anchor:[ni.x,Mt.top+5,ni.z],target:[ni.x-.4,3.6,ni.z],distance:16,azimuth:-52,elevation:22}},Bh=new P(.4,2,.6);Xo={amp:.1,kx:.33,kz:.27}});$a();$n();var la=document.documentElement,Ki=new URLSearchParams(window.location.search),Kt={state:Ki.get("state"),poster:Ki.get("poster"),time:Ki.get("time"),select:Ki.get("select"),motion:Ki.get("motion"),quality:["high","low"].includes(Ki.get("quality"))?Ki.get("quality"):void 0,size:["wide","medium","narrow"].includes(Ki.get("size"))?Ki.get("size"):"wide"},zt=(e,t=document)=>t.querySelector(e),Ar=(e,t=document)=>[...t.querySelectorAll(e)],ze={scene:zt("#scene"),labels:zt(".scene__labels"),poster:zt(".scene__poster"),posterImg:zt(".scene__poster img"),posterSources:Ar(".scene__poster source"),progress:zt(".scene__progress"),controls:zt(".scene__controls"),toggles:zt(".scene__toggles"),motionBtn:zt('[data-action="motion"]'),timeBtn:zt('[data-action="time"]'),zoomIn:zt('[data-action="zoom-in"]'),zoomOut:zt('[data-action="zoom-out"]'),bannerRegion:zt(".banner-region"),landmarksHead:zt("#landmarks"),announcer:zt("[data-announcer]"),backdrop:zt(".panel-backdrop"),landmarkButtons:Ar(".landmark"),details:Ar("[data-detail]")},f0=e=>getComputedStyle(la).getPropertyValue(e).trim(),Zi=e=>parseFloat(f0(e))||0,cr={camera:Zi("--ds-motion-camera"),cameraStep:Zi("--ds-motion-camera-step"),timeShift:Zi("--ds-motion-time-shift"),crossfade:Zi("--ds-motion-crossfade"),loadingDelay:Zi("--ds-motion-loading-delay"),loadingMin:Zi("--ds-motion-loading-min"),loadingSlow:Zi("--ds-motion-loading-slow"),contextRestore:Zi("--ds-motion-context-restore"),hintHold:Zi("--ds-motion-hint-hold")},Ht={motionStop:"\uC6C0\uC9C1\uC784 \uBA48\uCD94\uAE30",motionStart:"\uC6C0\uC9C1\uC784 \uB2E4\uC2DC \uCF1C\uAE30",toNight:"\uBC24\uC73C\uB85C \uBC14\uAFB8\uAE30",toDay:"\uB0AE\uC73C\uB85C \uBC14\uAFB8\uAE30",progress:"\uC12C\uC744 \uADF8\uB9AC\uB294 \uC911\uC774\uC5D0\uC694",slow:"\uC5F0\uACB0\uC774 \uB290\uB824 3D \uC7A5\uBA74 \uD30C\uC77C\uC744 \uBC1B\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB824\uC694. \uBAA9\uB85D\uC740 \uC9C0\uAE08 \uBCFC \uC218 \uC788\uC5B4\uC694.",slowAction:"3D \uC5C6\uC774 \uBCF4\uAE30",failed:"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uC7A5\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4\uC694. \uBAA9\uB85D\uC5D0\uC11C \uBA85\uC18C\uB97C \uACE0\uB974\uBA74 \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.",lost:"3D \uC7A5\uBA74\uC774 \uBA48\uCDC4\uC5B4\uC694. \uB2E4\uC2DC \uADF8\uB9AC\uBA74 \uC774\uC5B4\uC11C \uBCFC \uC218 \uC788\uC5B4\uC694.",lostAction:"\uB2E4\uC2DC \uADF8\uB9AC\uAE30",closeBanner:"\uC54C\uB9BC \uB2EB\uAE30",viewing:e=>`${e} \uBCF4\uB294 \uC911`,altDay:"\uBC14\uB2E4 \uC704 \uC12C \uD558\uB098\uC5D0 \uC120\uCC29\uC7A5, \uD68C\uC804\uBAA9\uB9C8, \uB300\uAD00\uB78C\uCC28, \uB864\uB7EC\uCF54\uC2A4\uD130, \uB4F1\uB300 \uC804\uB9DD\uB300\uAC00 \uC788\uB294 3D \uC7A5\uBA74",altNight:"\uBC24\uC758 \uBC14\uB2E4 \uC704 \uC12C. \uC120\uCC29\uC7A5, \uD68C\uC804\uBAA9\uB9C8, \uB300\uAD00\uB78C\uCC28, \uB864\uB7EC\uCF54\uC2A4\uD130, \uB4F1\uB300 \uC804\uB9DD\uB300\uC5D0 \uBD88\uC774 \uCF1C\uC9C4 3D \uC7A5\uBA74"},Jo=ze.landmarkButtons.map(e=>({id:e.dataset.id,name:zt(".landmark__name",e).textContent.trim()})),m0=e=>Jo.find(t=>t.id===e)?.name??"",Yn=window.matchMedia("(prefers-reduced-motion: reduce)"),$h=window.matchMedia(`(min-width: ${ma.wide}px)`),et={mode:"loading",selected:null,time:Kt.time==="night"||Kt.poster==="night"?"night":"day",reduced:Yn.matches,motion:Kt.motion!=="off"&&!Yn.matches&&!Kt.poster},wt=null,jo=null,Xa=!1,Kn=0,jh=!1,qh=new ResizeObserver(()=>{Ko(),wt?.relayout()}),eu=e=>new Promise(t=>setTimeout(t,e));function ca(e){et.mode=e,la.dataset.mode=e,tu()}var Yh=(e,t)=>{t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")};function tu(){let e=et.mode==="ready";Ar(".scene__canvas",ze.scene).forEach(t=>Yh(t,!e)),Yh(ze.poster,e)}function Qo(e){ze.announcer.textContent="",e&&requestAnimationFrame(()=>ze.announcer.textContent=e)}function $o(){ze.landmarkButtons.forEach(t=>{t.dataset.id===et.selected?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")});let e=et.selected??"intro";ze.details.forEach(t=>t.classList.toggle("is-current",t.dataset.detail===e)),wt?.setSelected(et.selected)}function iu(){let e=new URL(window.location.href);et.selected?e.searchParams.set("select",et.selected):e.searchParams.delete("select");try{window.history.replaceState(null,"",e)}catch{}}function Yo(e){Jo.some(t=>t.id===e)&&(et.selected=e,$o(),iu(),Qo(Ht.viewing(m0(e))),wt&&et.mode==="ready"&&wt.focus(e))}function ru(){let e=et.selected!==null;et.selected=null,$o(),iu(),wt&&et.mode==="ready"&&wt.reset(),e&&Qo("")}function qo(){ze.motionBtn.textContent=et.motion?Ht.motionStop:Ht.motionStart,wt?.setMotion(et.motion)}function Kh(e,t){return`assets/poster-${e}-${t}.webp`}function g0(){ze.posterSources.forEach(e=>{e.srcset=Kh(et.time,e.dataset.size)}),ze.posterImg.src=Kh(et.time,"narrow"),ze.posterImg.alt=et.time==="night"?Ht.altNight:Ht.altDay}var _0=window.matchMedia(`(min-width: ${ma.medium}px)`);function v0(){return $h.matches?"wide":_0.matches?"medium":"narrow"}function Ko(){if(Kt.poster)return;let e=ze.scene.clientWidth,t=ze.scene.clientHeight;if(!e||!t)return;let i=v0(),r=ze.posterImg;if(r.naturalWidth&&r.naturalWidth!==ga[i].width){ze.poster.classList.remove("is-placed");return}let a=sl(i,e,t,lu());ze.poster.classList.toggle("is-placed",!!a),a&&Object.entries(a).forEach(([n,s])=>{ze.poster.style.setProperty(`--poster-${n}`,`${s.toFixed(1)}px`)})}function M0(){return Ar(".tooltip",ze.controls).some(t=>getComputedStyle(t).visibility==="visible")?(ze.controls.classList.add("is-tip-dismissed"),Ar(".icon-btn.is-tip",ze.controls).forEach(t=>t.classList.remove("is-tip")),!0):!1}function Zh(e){la.dataset.time=et.time,ze.timeBtn.textContent=et.time==="night"?Ht.toDay:Ht.toNight,g0(),wt?.setTime(et.time,e)}function Jh(e,t){let i=zt(".tooltip",e);e.setAttribute("aria-disabled",t?"true":"false"),i.textContent=t?i.dataset.limit:e.getAttribute("aria-label"),t?e.setAttribute("aria-describedby",i.id):e.removeAttribute("aria-describedby")}function S0({atMin:e,atMax:t}){Jh(ze.zoomIn,e),Jh(ze.zoomOut,t)}function x0(e){!wt||et.mode!=="ready"||(e==="rotate-left"?wt.rotateStep(1):e==="rotate-right"?wt.rotateStep(-1):e==="zoom-in"?wt.zoomStep(1):e==="zoom-out"?wt.zoomStep(-1):e==="reset"&&ru())}function Qh(e,t){let i=document.createElement("button");return i.type="button",i.className=e,i.textContent=t,i}var y0=e=>e.getClientRects().length>0&&getComputedStyle(e).visibility!=="hidden";function au(){if(!ze.bannerRegion.contains(document.activeElement))return;(Ar("button",ze.toggles).find(y0)??ze.landmarksHead).focus()}function ja(){au(),ze.bannerRegion.replaceChildren()}function el({text:e,action:t,onAction:i}){let r=document.createElement("div");r.className="banner";let a=document.createElement("div");a.className="banner__body";let n=document.createElement("p");if(n.className="banner__text",n.textContent=e,a.append(n),t){let o=Qh("btn",t);o.addEventListener("click",i),a.append(o)}let s=Qh("icon-btn icon-btn--plain","");s.setAttribute("aria-label",Ht.closeBanner),s.innerHTML='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',s.addEventListener("click",ja),r.append(a,s),au(),ze.bannerRegion.replaceChildren(r)}var Zo=0,qn=0;function nu(){clearTimeout(Zo),Zo=setTimeout(()=>{ze.progress.textContent=Ht.progress,qn=performance.now()},cr.loadingDelay)}async function tl(){if(clearTimeout(Zo),qn){let e=cr.loadingMin-(performance.now()-qn);e>0&&await eu(e)}ze.progress.textContent="",qn=0}function su(){ze.poster.classList.remove("is-fading"),ze.poster.hidden=!1}function ou(){ze.poster.classList.add("is-fading"),setTimeout(()=>{et.mode==="ready"&&(ze.poster.hidden=!0)},et.reduced?0:cr.crossfade)}function Zn(e){ca("fallback"),tl(),su(),e?el({text:e}):ja()}function E0(){Xa=!0,Zn(null)}function T0(){et.mode==="loading"&&(tl(),el({text:Ht.slow,action:Ht.slowAction,onAction:E0}))}function b0(){ca("lost"),su(),clearTimeout(Kn),Kn=setTimeout(()=>{el({text:Ht.lost,action:Ht.lostAction,onAction:A0})},cr.contextRestore)}function w0(){clearTimeout(Kn),ja(),ca("ready"),ou()}async function A0(){ja(),clearTimeout(Kn),wt?.dispose(),wt=null,ca("loading"),nu();try{await cu()}catch(e){console.error(e),Zn(Ht.failed)}}function R0(){try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}}function lu(){return!$h.matches||Kt.poster?0:ze.backdrop.getBoundingClientRect().right-ze.scene.getBoundingClientRect().left}async function cu(){if(jo=jo||await Promise.resolve().then(()=>(Xh(),Wh)),Xa)return;let e=await jo.createScene({container:ze.scene,labelLayer:ze.labels,landmarks:Jo,canvasLabel:t=>t==="night"?Ht.altNight:Ht.altDay,getInsetLeft:lu,durations:cr,time:et.time,motion:et.motion,reduced:et.reduced,poster:!!Kt.poster,posterSize:Kt.size,avoid:[ze.toggles,ze.controls],quality:Kt.quality,onSelect:Yo,onZoomLimits:S0,onContextLost:b0,onContextRestored:w0});if(Xa){e.dispose();return}wt=e,window.islandPark={scene:wt,state:et},await tl(),ja(),ca("ready"),wt.setSelected(et.selected),et.selected&&wt.focus(et.selected),ou(),Kt.poster&&(la.dataset.posterReady="true"),Kt.state==="lost"&&!jh&&(jh=!0,setTimeout(()=>wt?.loseContextForTest(),800))}async function C0(){if(window.islandParkBooted=!0,la.classList.add("js"),ca("loading"),Kt.poster&&la.classList.add("is-poster"),$o(),qo(),Zh(!1),Ko(),ze.posterImg.addEventListener("load",Ko),qh.observe(ze.scene),qh.observe(ze.backdrop),new MutationObserver(tu).observe(ze.scene,{childList:!0}),Kt.select&&Yo(Kt.select),ze.landmarkButtons.forEach(t=>{t.addEventListener("click",()=>Yo(t.dataset.id))}),ze.controls.addEventListener("click",t=>{if(t.target.closest(".tooltip"))return;let i=t.target.closest("[data-action]");if(i){if(i.getAttribute("aria-disabled")==="true"){let r=zt(".tooltip",i);i.classList.add("is-tip"),Qo(r.textContent),clearTimeout(i.tipTimer),i.tipTimer=setTimeout(()=>i.classList.remove("is-tip"),cr.hintHold);return}x0(i.dataset.action)}}),ze.motionBtn.addEventListener("click",()=>{et.motion=!et.motion,qo()}),ze.timeBtn.addEventListener("click",()=>{et.time=et.time==="night"?"day":"night",Zh(!0)}),document.addEventListener("keydown",t=>{t.key!=="Escape"||t.defaultPrevented||M0()||ru()}),ze.controls.addEventListener("pointerleave",()=>ze.controls.classList.remove("is-tip-dismissed")),ze.controls.addEventListener("focusin",()=>ze.controls.classList.remove("is-tip-dismissed")),Yn.addEventListener("change",()=>{et.reduced=Yn.matches,wt?.setReduced(et.reduced),et.reduced&&(et.motion=!1,qo())}),Kt.state==="nowebgl"||!R0()){Zn(Ht.failed);return}nu();let e=setTimeout(T0,cr.loadingSlow);try{if(Kt.state==="slow"&&await eu(cr.loadingSlow+3e4),Xa)return;await cu()}catch(t){console.error(t),Xa||Zn(Ht.failed)}finally{clearTimeout(e)}}C0();})();
