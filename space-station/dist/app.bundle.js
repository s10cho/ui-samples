/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */
(()=>{var Ou=Object.defineProperty;var xn=(e,t)=>()=>(e&&(t=e(e=0)),t);var Fu=(e,t)=>{for(var i in t)Ou(e,i,{get:t[i],enumerable:!0})};var ta,nt,yr,Br,ri,Et,sr,yt,Mn=xn(()=>{ta={medium:600,wide:1024},nt={space:659228,ocean:[[3105680,792104],[4028838,989742]],land:[[7244885,1318446],[9210462,1450035],[10720624,1581882]],cloud:[15659766,2765894],atmosphere:[10273766,2242650],cityLight:16761963,hull:15131352,node:13225427,box:9344156,frame:7041664,gold:12096079,cell:[4087692,1318192],glass:[3426666,16762995],dockLamp:[6252146,16769704],navRed:14701373,navGreen:6142842,stars:[16777215,16774370,14871295],keyLight:[16773596,9348040],hemiSky:[2766160,1317934],hemiGround:[7312316,2372173],workLight:16767392,freighter:14210252},yr={day:{hemi:1.35,key:2.5,glow:0,work:0,stars:.45,cloud:.92,atmosphere:.38,city:0,nav:.55},night:{hemi:1,key:.8,glow:1,work:14,stars:1,cloud:.55,atmosphere:.45,city:1,nav:1}},Br={earth:3600,cloud:1500,panel:40,freighter:60,nav:2.4,autoRotate:90},ri={radius:2e3,altitude:110,capDeg:28,atmosphereCapDeg:36,detail:84,cloudDetail:120,atmosphereDetail:48,cloudLift:7,atmosphereLift:22},Et={fov:35,elevationMin:8,elevationMax:65,startElevation:24,startAzimuth:35,stepRotate:30,stepZoom:.75,fitRadius:14.2,fitShare:.7,fitLift:3,fitHeightShare:.86,minEffective:19,maxDistanceFactor:1.6},sr={wide:{width:2400,height:1400,refWidth:1056,refHeight:748},medium:{width:2e3,height:1120,refWidth:1e3,refHeight:633},narrow:{width:900,height:1170,refWidth:600,refHeight:574}},yt={pixelRatioHigh:2,pixelRatioLow:1.5,starsHigh:1800,starsLow:900,cityHigh:2400,cityLow:1200,starPx:2,cityPx:2,shadowMapSize:1024,slowFrameMs:33,sampleWindowMs:2e3,warmupMs:1200}});function Ul(e,t){let i=Math.max(1,e),r=Math.max(1,t),a=ys*(i/r),n=Et.fitRadius/(Et.fitShare*a),o=(Et.fitRadius*Math.sin(Et.startElevation*Il)+Et.fitLift)/(Et.fitHeightShare*ys);return Math.max(n,o)}function Sn(e){let t=sr[e];return Ul(t.refWidth,t.refHeight)}function Dl(e,t){return e/2/ys/t}function yn(e,t,i){let{left:r=0,top:a=0,bottom:n=0}=i||{},s=Math.max(1,e-r),o=Math.max(1,t-a-n);return{width:s,height:o,cx:r+s/2,cy:a+o/2}}function Es(e,t,i){let r=yn(e,t,i);return Ul(r.width,r.height)*(Math.max(1,t)/r.height)}function Ol(e,t,i,r){let a=sr[e],n=yn(t,i,r),s=Dl(i,Es(t,i,r)),o=Dl(a.refHeight,Sn(e)),c=s/o,l=a.width*c,h=a.height*c,p=n.cx-l/2,u=n.cy-h/2;return p<=0&&u<=0&&p+l>=t&&u+h>=i?{left:p,top:u,width:l,height:h}:null}var Il,ys,Ts=xn(()=>{Mn();Il=Math.PI/180,ys=Math.tan(Et.fov/2*Il)});function _d(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function vd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function cs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function xd(){let e=cs("canvas");return e.style.display="block",e}function ql(...e){let t="THREE."+e.shift();Ra?Ra("log",t,...e):console.log(t,...e)}function uh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Oe(...e){e=uh(e);let t="THREE."+e.shift();if(Ra)Ra("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function ze(...e){e=uh(e);let t="THREE."+e.shift();if(Ra)Ra("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function es(...e){let t=e.join(" ");t in jl||(jl[t]=!0,Oe(...e))}function Md(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function sn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zt[e&255]+Zt[e>>8&255]+Zt[e>>16&255]+Zt[e>>24&255]+"-"+Zt[t&255]+Zt[t>>8&255]+"-"+Zt[t>>16&15|64]+Zt[t>>24&255]+"-"+Zt[i&63|128]+Zt[i>>8&255]+"-"+Zt[i>>16&255]+Zt[i>>24&255]+Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]).toLowerCase()}function $e(e,t,i){return Math.max(t,Math.min(i,e))}function yd(e,t){return(e%t+t)%t}function Ls(e,t,i){return(1-i)*e+i*t}function Ed(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function il(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Td(e,t){if(t.constructor===Float32Array)return e;let i=il(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function bd(e,t){if(t.constructor===Float32Array)return e;let i=il(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function wd(){let e={enabled:!0,workingColorSpace:os,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===pt&&(a.r=mr(a.r),a.g=mr(a.g),a.b=mr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===pt&&(a.r=Ma(a.r),a.g=Ma(a.g),a.b=Ma(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Cr?ls:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[os]:{primaries:t,whitePoint:r,transfer:ls,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:r,transfer:pt,toXYZ:Kl,fromXYZ:Zl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),e}function mr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ma(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function Is(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ad.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}function Bs(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function js(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Hr.fromArray(e,n);let o=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),c=t.dot(Hr),l=i.dot(Hr),h=r.dot(Hr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Xd(e,t,i,r,a,n,s,o){let c;if(t.side===Qt?c=r.intersectTriangle(s,n,a,!0,o):c=r.intersectTriangle(a,n,s,t.side===Wr,o),c===null)return null;Bn.copy(o),Bn.applyMatrix4(e.matrixWorld);let l=i.ray.origin.distanceTo(Bn);return l<i.near||l>i.far?null:{distance:l,point:Bn.clone(),object:e}}function zn(e,t,i,r,a,n,s,o,c,l){e.getVertexPosition(o,In),e.getVertexPosition(c,Un),e.getVertexPosition(l,On);let h=Xd(e,t,i,r,In,Un,On,oc);if(h){let p=new H;Wa.getBarycoord(oc,In,Un,On,p),a&&(h.uv=Wa.getInterpolatedAttribute(a,o,c,l,p,new rt)),n&&(h.uv1=Wa.getInterpolatedAttribute(n,o,c,l,p,new rt)),s&&(h.normal=Wa.getInterpolatedAttribute(s,o,c,l,p,new H),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new H,materialIndex:0};Wa.getNormal(In,Un,On,u.normal),h.face=u,h.barycoord=p}return h}function pc(e,t,i,r,a,n,s){let o=Wo.distanceSqToPoint(e);if(o<i){let c=new H;Wo.closestPointToPoint(e,c),c.applyMatrix4(r);let l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;n.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}function La(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(fc(a))a.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(fc(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function ai(e){let t={};for(let i=0;i<e.length;i++){let r=La(e[i]);for(let a in r)t[a]=r[a]}return t}function fc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Kd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Dh(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qe.workingColorSpace}function pa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Wn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Uh(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function sp(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function op(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Uh(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let c=sp(n,t,i,r,a);if(Math.abs(c)<1e-10)break;n=Math.max(0,Math.min(1,n-o/c))}return n}function mc(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function gc(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function yc(e,t){return e.distance-t.distance}function jo(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)jo(n[s],t,i,!0)}}function Ec(e,t,i,r){let a=Ap(r);switch(i){case sh:return e*t;case Qo:return e*t/a.components*a.byteLength;case $o:return e*t/a.components*a.byteLength;case Xr:return e*t*2/a.components*a.byteLength;case el:return e*t*2/a.components*a.byteLength;case oh:return e*t*3/a.components*a.byteLength;case ji:return e*t*4/a.components*a.byteLength;case tl:return e*t*4/a.components*a.byteLength;case Zn:case Jn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Qn:case $n:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uo:case fo:return Math.max(e,16)*Math.max(t,8)/4;case ho:case po:return Math.max(e,8)*Math.max(t,8)/2;case mo:case go:case vo:case xo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _o:case as:case Mo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case To:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case bo:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Uo:case Oo:case Fo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Bo:case zo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ns:case Ho:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ap(e){switch(e){case xi:case ih:return{byteLength:1,components:1};case rn:case rh:case Zi:return{byteLength:2,components:1};case Zo:case Jo:return{byteLength:2,components:4};case Ki:case Ko:case Oi:return{byteLength:4,components:1};case ah:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function Wh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Rp(e){let t=new WeakMap;function i(o,c){let l=o.array,h=o.usage,p=l.byteLength,u=e.createBuffer();e.bindBuffer(c,u),e.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=e.HALF_FLOAT:g=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=e.SHORT;else if(l instanceof Uint32Array)g=e.UNSIGNED_INT;else if(l instanceof Int32Array)g=e.INT;else if(l instanceof Int8Array)g=e.BYTE;else if(l instanceof Uint8Array)g=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,c,l){let h=c.array,p=c.updateRanges;if(e.bindBuffer(l,o),p.length===0)e.bufferSubData(l,0,h);else{p.sort((g,x)=>g.start-x.start);let u=0;for(let g=1;g<p.length;g++){let x=p[u],M=p[g];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,p[u]=M)}p.length=u+1;for(let g=0,x=p.length;g<x;g++){let M=p[g];e.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,i(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(l.buffer,o,c),l.version=o.version}}return{get:a,remove:n,update:s}}function hg(e,t,i,r,a,n){let s=new Ge(0),o=a===!0?0:1,c,l,h=null,p=0,u=null;function g(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let y=E.backgroundBlurriness>0;A=t.get(A,y)}return A}function x(E){let A=!1,y=g(E);y===null?m(s,o):y&&y.isColor&&(m(y,1),A=!0);let b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,n):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(E,A){let y=g(A);y&&y.isCubeTexture?(l===void 0&&(l=new hi(new Ri(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:La(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,R,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Xh),l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==pt,(h!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new hi(new Ph(2,2),new jr({name:"BackgroundMaterial",uniforms:La(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,A){E.getRGB(qn,Dh(e)),i.buffers.color.setClear(qn.r,qn.g,qn.b,A,n)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(E,A=1){s.set(E),o=A,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(s,o)},render:x,addToRenderList:M,dispose:d}}function ug(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(I,P,q,N,k){let K=!1,G=p(I,N,q,P);n!==G&&(n=G,l(n.object)),K=g(I,N,q,k),K&&x(I,N,q,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,y(I,P,q,N),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return e.createVertexArray()}function l(I){return e.bindVertexArray(I)}function h(I){return e.deleteVertexArray(I)}function p(I,P,q,N){let k=N.wireframe===!0,K=r[P.id];K===void 0&&(K={},r[P.id]=K);let G=I.isInstancedMesh===!0?I.id:0,de=K[G];de===void 0&&(de={},K[G]=de);let j=de[q.id];j===void 0&&(j={},de[q.id]=j);let Z=j[k];return Z===void 0&&(Z=u(c()),j[k]=Z),Z}function u(I){let P=[],q=[],N=[];for(let k=0;k<i;k++)P[k]=0,q[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:N,object:I,attributes:{},index:null}}function g(I,P,q,N){let k=n.attributes,K=P.attributes,G=0,de=q.getAttributes();for(let j in de)if(de[j].location>=0){let Z=k[j],se=K[j];if(se===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(se=I.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;G++}return n.attributesNum!==G||n.index!==N}function x(I,P,q,N){let k={},K=P.attributes,G=0,de=q.getAttributes();for(let j in de)if(de[j].location>=0){let Z=K[j];Z===void 0&&(j==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),j==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),k[j]=se,G++}n.attributes=k,n.attributesNum=G,n.index=N}function M(){let I=n.newAttributes;for(let P=0,q=I.length;P<q;P++)I[P]=0}function m(I){d(I,0)}function d(I,P){let q=n.newAttributes,N=n.enabledAttributes,k=n.attributeDivisors;q[I]=1,N[I]===0&&(e.enableVertexAttribArray(I),N[I]=1),k[I]!==P&&(e.vertexAttribDivisor(I,P),k[I]=P)}function E(){let I=n.newAttributes,P=n.enabledAttributes;for(let q=0,N=P.length;q<N;q++)P[q]!==I[q]&&(e.disableVertexAttribArray(q),P[q]=0)}function A(I,P,q,N,k,K,G){G===!0?e.vertexAttribIPointer(I,P,q,k,K):e.vertexAttribPointer(I,P,q,N,k,K)}function y(I,P,q,N){M();let k=N.attributes,K=q.getAttributes(),G=P.defaultAttributeValues;for(let de in K){let j=K[de];if(j.location>=0){let Z=k[de];if(Z===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let se=Z.normalized,Pe=Z.itemSize,Q=t.get(Z);if(Q===void 0)continue;let ae=Q.buffer,Ee=Q.type,Ce=Q.bytesPerElement,Le=Ee===e.INT||Ee===e.UNSIGNED_INT||Z.gpuType===Ko;if(Z.isInterleavedBufferAttribute){let le=Z.data,ke=le.isInterleavedBuffer===!0?le.stride:le.itemSize,et=Z.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let De=0;De<j.locationSize;De++)d(j.location+De,le.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<j.locationSize;De++)m(j.location+De);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let De=0;De<j.locationSize;De++)A(j.location+De,Pe/j.locationSize,Ee,se,ke*Ce,(et+Pe/j.locationSize*De)*Ce,Le)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)d(j.location+le,Z.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<j.locationSize;le++)m(j.location+le);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let le=0;le<j.locationSize;le++)A(j.location+le,Pe/j.locationSize,Ee,se,Pe*Ce,Pe/j.locationSize*le*Ce,Le)}}else if(G!==void 0){let se=G[de];if(se!==void 0)switch(se.length){case 2:e.vertexAttrib2fv(j.location,se);break;case 3:e.vertexAttrib3fv(j.location,se);break;case 4:e.vertexAttrib4fv(j.location,se);break;default:e.vertexAttrib1fv(j.location,se)}}}}E()}function b(){C();for(let I in r){let P=r[I];for(let q in P){let N=P[q];for(let k in N){let K=N[k];for(let G in K)h(K[G].object),delete K[G];delete N[k]}}delete r[I]}}function R(I){if(r[I.id]===void 0)return;let P=r[I.id];for(let q in P){let N=P[q];for(let k in N){let K=N[k];for(let G in K)h(K[G].object),delete K[G];delete N[k]}}delete r[I.id]}function f(I){for(let P in r){let q=r[P];for(let N in q){let k=q[N];if(k[I.id]===void 0)continue;let K=k[I.id];for(let G in K)h(K[G].object),delete K[G];delete k[I.id]}}}function S(I){for(let P in r){let q=r[P],N=I.isInstancedMesh===!0?I.id:0,k=q[N];if(k!==void 0){for(let K in k){let G=k[K];for(let de in G)h(G[de].object),delete G[de];delete k[K]}delete q[N],Object.keys(q).length===0&&delete r[P]}}}function C(){V(),s=!0,n!==a&&(n=a,l(n.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:V,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:f,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function dg(e,t,i){let r;function a(c){r=c}function n(c,l){e.drawArrays(r,c,l),i.update(l,r,1)}function s(c,l,h){h!==0&&(e.drawArraysInstanced(r,c,l,h),i.update(l,r,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,l,0,h);let p=0;for(let u=0;u<h;u++)p+=l[u];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function pg(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let f=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(f){return!(f!==ji&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){let S=f===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(f!==xi&&f!==Oi&&!S&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(f){if(f==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=i.precision!==void 0?i.precision:"highp",h=c(l);h!==l&&(Oe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&p===!1;i.reversedDepthBuffer===!0&&p===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&p===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),b=e.getParameter(e.MAX_SAMPLES),R=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:y,maxSamples:b,samples:R}}function fg(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Rr,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let g=p.length!==0||u||r!==0||a;return a=u,r=p.length,g},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,u){i=h(p,u,0)},this.setState=function(p,u,g){let x=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,d=e.get(p);if(!a||x===null||x.length===0||n&&!m)n?h(null):l();else{let E=n?0:r,A=E*4,y=d.clippingState||null;c.value=y,y=h(x,u,A,g);for(let b=0;b!==A;++b)y[b]=i[b];d.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==i&&(c.value=i,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(p,u,g,x){let M=p!==null?p.length:0,m=null;if(M!==0){if(m=c.value,x!==!0||m===null){let d=g+M*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,y=g;A!==M;++A,y+=4)s.copy(p[A]).applyMatrix4(E,o),s.normal.toArray(m,y),m[y+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function wc(e,t,i){return new ul(e,{minFilter:Pr,generateMipmaps:t,type:Zi,colorSpace:os,depthBuffer:i})}function un(e,t,i){return new jr({name:e,uniforms:t,vertexShader:Xe.cube_vert,fragmentShader:i,side:Qt,blending:xa,depthTest:!1,depthWrite:!1})}function Mg(){return un("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${jh}u

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
	`)}function Sg(){return un("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qh}},`

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
	`)}function yg(){return un("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gg}
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
	`)}function Ac(){return un("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Rc(){return un("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Eg(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,g=!1){return u==null?null:g?s(u):n(u)}function n(u){if(u&&u.isTexture){let g=u.mapping;if(g===bs||g===ws)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new ul(x.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let g=u.mapping,x=g===bs||g===ws,M=g===wa||g===tn;if(x||M){let m=i.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return r===null&&(r=new bc(e)),m=x?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return x&&E&&E.height>0||M&&E&&c(E)?(r===null&&(r=new bc(e)),m=x?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,g){return g===bs?u.mapping=wa:g===ws&&(u.mapping=tn),u}function c(u){let g=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&g++;return g===x}function l(u){let g=u.target;g.removeEventListener("dispose",l);let x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function h(u){let g=u.target;g.removeEventListener("dispose",h);let x=i.get(g);x!==void 0&&(i.delete(g),x.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function Tg(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&es("WebGLRenderer: "+r+" extension not supported."),a}}}function bg(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(x=>delete a[x]);function o(x){c(x.target)}function c(x){x.index!==null&&t.remove(x.index);for(let m in x.attributes)t.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete a[x.id],s.unregister(x);let M=n.get(x);M&&(t.remove(M),n.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function l(x,M){return a[M.id]!==void 0||(M.addEventListener("dispose",o),a[M.id]=new WeakRef(M),s.register(M,M.id,M),i.memory.geometries++),M}function h(x){let M=x.attributes;for(let m in M)t.update(M[m],e.ARRAY_BUFFER)}function p(x){let M=x.index,m=x.attributes.position,d=0;if(m===void 0)return;let E=M!==null?M.array.length:m.array.length/3-1,A=m.count>=65535?_h:gh,y=new A(Math.ceil(E/3)*6,1),b=y.array;if(M!==null){let f=M.array;d=M.version;for(let S=0,C=0;S<E;S+=3){let V=f[S+0],I=f[S+1],P=f[S+2];b[C++]=V,b[C++]=I,b[C++]=I,b[C++]=P,b[C++]=P,b[C++]=V}}else{d=m.version;for(let f=0,S=0;f<E;f+=3){let C=f+0,V=f+1,I=f+2;b[S++]=C,b[S++]=V,b[S++]=V,b[S++]=I,b[S++]=I,b[S++]=C}}y.version=d;let R=n.get(x);R&&t.remove(R),n.set(x,y)}function u(x){let M=n.get(x);if(M){let m=x.index;m!==null&&M.version<m.version&&p(x)}else p(x);return n.get(x)}function g(){for(let x in a){let M=a[x].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:u,dispose:g}}function wg(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function c(p,u){e.drawElements(r,u,n,p*s),i.update(u,r,1)}function l(p,u,g){g!==0&&(e.drawElementsInstanced(r,u,n,p*s,g),i.update(u,r,g))}function h(p,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,p,0,g);let x=0;for(let M=0;M<g;M++)x+=u[M];i.update(x,r,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Ag(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:ze("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function Rg(e,t,i){let r=new WeakMap,a=new wt;function n(s,o,c){let l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==p){let g=function(){S.dispose(),r.delete(o),o.removeEventListener("dispose",g)};u!==void 0&&u.texture.dispose();let x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],y=0;x===!0&&(y=1),M===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let f=new Float32Array(b*R*4*p),S=new dh(f,b,R,p);S.type=Oi,S.needsUpdate=!0;let C=y*4;for(let V=0;V<p;V++){let I=d[V],P=E[V],q=A[V],N=b*R*4*V;for(let k=0;k<I.count;k++){let K=k*C;x===!0&&(a.fromBufferAttribute(I,k),f[N+K+0]=a.x,f[N+K+1]=a.y,f[N+K+2]=a.z,f[N+K+3]=0),M===!0&&(a.fromBufferAttribute(P,k),f[N+K+4]=a.x,f[N+K+5]=a.y,f[N+K+6]=a.z,f[N+K+7]=0),m===!0&&(a.fromBufferAttribute(q,k),f[N+K+8]=a.x,f[N+K+9]=a.y,f[N+K+10]=a.z,f[N+K+11]=q.itemSize===4?a.w:1)}}u={count:p,texture:S,size:new rt(b,R)},r.set(o,u),o.addEventListener("dispose",g)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let g=0;for(let M=0;M<l.length;M++)g+=l[M];let x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",x),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),c.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Cg(e,t,i,r,a){let n=new WeakMap;function s(l){let h=a.render.frame,p=l.geometry,u=t.get(l,p);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),n.get(l)!==h&&(i.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&i.update(l.instanceColor,e.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){let g=l.skeleton;n.get(g)!==h&&(g.update(),n.set(g,h))}return u}function o(){n=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}function Lg(e,t,i,r,a,n){let s=new Yi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Mi;h.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new gt([0,2,0,0,2,0],2));let p=new $d({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new hi(h,p),g=new Gh(-1,1,1,-1,0,1),x=null,M=null,m=!1,d,E=null,A=[],y=!1;this.setSize=function(b,R){s.setSize(b,R),o!==null&&o.setSize(b,R),c!==null&&c.setSize(b,R);for(let f=0;f<A.length;f++){let S=A[f];S.setSize&&S.setSize(b,R)}},this.setEffects=function(b){A=b,y=A.length>0&&A[0].isRenderPass===!0;let R=s.width,f=s.height;A.length>0&&o===null&&(o=new Yi(R,f,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),c=new Yi(R,f,{type:Zi,depthBuffer:!1,stencilBuffer:!1}));let S=a===!0&&A.some(C=>C.needsDepthTexture===!0);S!==(s.depthTexture!==null)&&(S===!0&&l===null&&(l=new Pa(R,f),n===!0&&(l.format=Lr,l.type=Aa)),s.dispose(),s.depthTexture=S?l:null,s.resolveDepthBuffer=S,s.storeMultisampledDepthBuffer=S);for(let C=0;C<A.length;C++){let V=A[C];V.setSize&&V.setSize(R,f),S&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(l)}},this.begin=function(b,R){if(m||b.toneMapping===fr&&A.length===0)return!1;if(E=R,R!==null){let f=R.width,S=R.height;(s.width!==f||s.height!==S)&&this.setSize(f,S)}return y===!1&&b.setRenderTarget(s),d=b.toneMapping,b.toneMapping=fr,!0},this.hasRenderPass=function(){return y},this.end=function(b,R){b.toneMapping=d,m=!0;let f=s,S=o;for(let C=0;C<A.length;C++){let V=A[C];V.enabled!==!1&&(V.render(b,S,f,R),V.needsSwap!==!1&&(f=S,S=S===o?c:o))}if(x!==b.outputColorSpace||M!==b.toneMapping){x=b.outputColorSpace,M=b.toneMapping,p.defines={},Qe.getTransfer(x)===pt&&(p.defines.SRGB_TRANSFER="");let C=Pg[M];C&&(p.defines[C]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=f.texture,b.setRenderTarget(E),b.render(u,g),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),p.dispose()}}function Ia(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Cc[a];if(n===void 0&&(n=new Float32Array(a),Cc[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Ut(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Ot(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function ds(e,t){let i=Pc[t];i===void 0&&(i=new Int32Array(t),Pc[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function Ng(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Dg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2fv(this.addr,t),Ot(i,t)}}function Ig(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ut(i,t))return;e.uniform3fv(this.addr,t),Ot(i,t)}}function Ug(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4fv(this.addr,t),Ot(i,t)}}function Og(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ot(i,t)}else{if(Ut(i,r))return;Dc.set(r),e.uniformMatrix2fv(this.addr,!1,Dc),Ot(i,r)}}function Fg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ot(i,t)}else{if(Ut(i,r))return;Nc.set(r),e.uniformMatrix3fv(this.addr,!1,Nc),Ot(i,r)}}function Bg(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ut(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ot(i,t)}else{if(Ut(i,r))return;Lc.set(r),e.uniformMatrix4fv(this.addr,!1,Lc),Ot(i,r)}}function zg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function Hg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2iv(this.addr,t),Ot(i,t)}}function Gg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ut(i,t))return;e.uniform3iv(this.addr,t),Ot(i,t)}}function Vg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4iv(this.addr,t),Ot(i,t)}}function kg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function Wg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ut(i,t))return;e.uniform2uiv(this.addr,t),Ot(i,t)}}function Xg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ut(i,t))return;e.uniform3uiv(this.addr,t),Ot(i,t)}}function jg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ut(i,t))return;e.uniform4uiv(this.addr,t),Ot(i,t)}}function ps(e){return e.version===0&&(e.compareFunction=hh,e.needsUpdate=!0),e}function qg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=ps(Zh):n=Kh,i.setTexture2D(t||n,a)}function Yg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||$h,a)}function Kg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=ps(Jh):n=eu,i.setTextureCube(t||n,a)}function Zg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Qh,a)}function Jg(e){switch(e){case 5126:return Ng;case 35664:return Dg;case 35665:return Ig;case 35666:return Ug;case 35674:return Og;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return Hg;case 35668:case 35672:return Gg;case 35669:case 35673:return Vg;case 5125:return kg;case 36294:return Wg;case 36295:return Xg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Zg}}function Qg(e,t){e.uniform1fv(this.addr,t)}function $g(e,t){let i=Ia(t,this.size,2);e.uniform2fv(this.addr,i)}function e_(e,t){let i=Ia(t,this.size,3);e.uniform3fv(this.addr,i)}function t_(e,t){let i=Ia(t,this.size,4);e.uniform4fv(this.addr,i)}function i_(e,t){let i=Ia(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function r_(e,t){let i=Ia(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function a_(e,t){let i=Ia(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function n_(e,t){e.uniform1iv(this.addr,t)}function s_(e,t){e.uniform2iv(this.addr,t)}function o_(e,t){e.uniform3iv(this.addr,t)}function l_(e,t){e.uniform4iv(this.addr,t)}function c_(e,t){e.uniform1uiv(this.addr,t)}function h_(e,t){e.uniform2uiv(this.addr,t)}function u_(e,t){e.uniform3uiv(this.addr,t)}function d_(e,t){e.uniform4uiv(this.addr,t)}function p_(e,t,i){let r=this.cache,a=t.length,n=ds(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=ps(Zh):s=Kh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function f_(e,t,i){let r=this.cache,a=t.length,n=ds(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||$h,n[s])}function m_(e,t,i){let r=this.cache,a=t.length,n=ds(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=ps(Jh):s=eu;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function g_(e,t,i){let r=this.cache,a=t.length,n=ds(i,a);Ut(r,n)||(e.uniform1iv(this.addr,n),Ot(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Qh,n[s])}function __(e){switch(e){case 5126:return Qg;case 35664:return $g;case 35665:return e_;case 35666:return t_;case 35674:return i_;case 35675:return r_;case 35676:return a_;case 5124:case 35670:return n_;case 35667:case 35671:return s_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return f_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function Ic(e,t){e.seq.push(t),e.map[t.id]=t}function S_(e,t,i){let r=e.name,a=r.length;for($s.lastIndex=0;;){let n=$s.exec(r),s=$s.lastIndex,o=n[1],c=n[2]==="]",l=n[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){Ic(i,l===void 0?new v_(o,e,t):new x_(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new M_(o),Ic(i,h)),i=h}}}function Uc(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function T_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function b_(e){Qe._getMatrix(Oc,Qe.workingColorSpace,e);let t=`mat3( ${Oc.elements.map(i=>i.toFixed(4))} )`;switch(Qe.getTransfer(e)){case ls:return[t,"LinearTransferOETF"];case pt:return[t,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Fc(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+T_(e.getShaderSource(t),s)}else return a}function w_(e,t){let i=b_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function R_(e,t){let i=A_[t];return i===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function C_(){Qe.getLuminanceCoefficients(Yn);let e=Yn.x.toFixed(4),t=Yn.y.toFixed(4),i=Yn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function L_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function N_(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Qa(e){return e!==""}function Bc(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function qo(e){return e.replace(D_,I_)}function I_(e,t){let i=Xe[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qo(i)}function Hc(e){return e.replace(U_,O_)}function O_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function Gc(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function B_(e){return F_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function H_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function V_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":G_[e.combine]||"ENVMAP_BLENDING_NONE"}function k_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,c=B_(i),l=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=H_(i),p=V_(i),u=P_(i),g=L_(n),x=a.createProgram(),M,m,d=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Qa).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Qa).join(`
`),m.length>0&&(m+=`
`)):(M=[Gc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),m=[Gc(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.envMap?"#define "+h:"",i.envMap?"#define "+p:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+c:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==fr?"#define TONE_MAPPING":"",i.toneMapping!==fr?Xe.tonemapping_pars_fragment:"",i.toneMapping!==fr?R_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,w_("linearToOutputTexel",i.outputColorSpace),C_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qa).join(`
`)),s=qo(s),s=Bc(s,i),s=zc(s,i),o=qo(o),o=Bc(o,i),o=zc(o,i),s=Hc(s),o=Hc(o),i.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",i.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=d+M+s,A=d+m+o,y=Uc(a,a.VERTEX_SHADER,E),b=Uc(a,a.FRAGMENT_SHADER,A);a.attachShader(x,y),a.attachShader(x,b),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function R(V){if(e.debug.checkShaderErrors){let I=a.getProgramInfoLog(x)||"",P=a.getShaderInfoLog(y)||"",q=a.getShaderInfoLog(b)||"",N=I.trim(),k=P.trim(),K=q.trim(),G=!0,de=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,y,b);else{let j=Fc(a,y,"vertex"),Z=Fc(a,b,"fragment");ze("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+N+`
`+j+`
`+Z)}else N!==""?Oe("WebGLProgram: Program Info Log:",N):(k===""||K==="")&&(de=!1);de&&(V.diagnostics={runnable:G,programLog:N,vertexShader:{log:k,prefix:M},fragmentShader:{log:K,prefix:m}})}a.deleteShader(y),a.deleteShader(b),f=new rs(a,x),S=N_(a,x)}let f;this.getUniforms=function(){return f===void 0&&R(this),f};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(x,y_)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}function q_(e){return e===Xr||e===as||e===ns}function Y_(e,t,i,r,a,n){let s=new al,o=new X_,c=new Set,l=[],h=new Map,p=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(f){return c.add(f),f===0?"uv":`uv${f}`}function x(f,S,C,V,I,P){let q=V.fog,N=I.geometry,k=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?V.environment:null,K=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,G=t.get(f.envMap||k,K),de=u[f.type],j=r.precision;f.precision!==null&&(j=r.getMaxPrecision(f.precision),j!==f.precision&&Oe("WebGLProgram.getParameters:",f.precision,"not supported, using",j,"instead."));let Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=Z!==void 0?Z.length:0,Pe=0;N.morphAttributes.position!==void 0&&(Pe=1),N.morphAttributes.normal!==void 0&&(Pe=2),N.morphAttributes.color!==void 0&&(Pe=3);let Q,ae,Ee,Ce;if(de){let Se=Xi[de];Q=Se.vertexShader,ae=Se.fragmentShader}else{Q=f.vertexShader,ae=f.fragmentShader;let Se=o.getVertexShaderStage(f),at=o.getFragmentShaderStage(f);o.update(f,Se,at),Ee=Se.id,Ce=at.id}let Le=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),ke=I.isInstancedMesh===!0,et=I.isBatchedMesh===!0,De=!!f.map,Lt=!!f.matcap,Bt=!!G,Rt=Bt&&G.isPMREMTexture===!0,_t=!!f.aoMap,zt=!!f.lightMap,ni=!!f.bumpMap&&f.wireframe===!1,bt=!!f.normalMap,Nt=!!f.displacementMap,vt=!!f.emissiveMap,Kt=!!f.metalnessMap,pi=!!f.roughnessMap,O=f.anisotropy>0,fi=f.clearcoat>0,ut=f.diffuseRoughness>0,Ct=f.dispersion>0,he=f.retroreflectivity>0,ot=f.iridescence>0,Ne=f.sheen>0,He=f.transmission>0,Ht=O&&!!f.anisotropyMap,T=fi&&!!f.clearcoatMap,_=fi&&!!f.clearcoatNormalMap,F=fi&&!!f.clearcoatRoughnessMap,ie=ut&&!!f.diffuseRoughnessMap,J=ot&&!!f.iridescenceMap,ce=ot&&!!f.iridescenceThicknessMap,pe=Ne&&!!f.sheenColorMap,U=Ne&&!!f.sheenRoughnessMap,ee=!!f.specularMap,ve=!!f.specularColorMap,L=!!f.specularIntensityMap,X=He&&!!f.transmissionMap,te=He&&!!f.thicknessMap,ne=!!f.gradientMap,me=!!f.alphaMap,ge=f.alphaTest>0,Ae=!!f.alphaHash,re=!!f.extensions,Ue=fr;f.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Ue=e.toneMapping);let Ie=Rt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Ke={shaderID:de,shaderType:f.type,shaderName:f.name,vertexShader:Q,fragmentShader:ae,defines:f.defines,customVertexShaderID:Ee,customFragmentShaderID:Ce,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:j,batching:et,batchingColor:et&&I._colorsTexture!==null,instancing:ke,instancingColor:ke&&I.instanceColor!==null,instancingMorph:ke&&I.morphTexture!==null,outputColorSpace:Le===null?e.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:De,matcap:Lt,envMap:Bt,envMapMode:Bt&&G.mapping,envMapPMREM:Rt,envMapMaxLod:Rt?Ie.length-1:null,envMapSize:Rt?Ie[0].width:null,aoMap:_t,lightMap:zt,bumpMap:ni,normalMap:bt,displacementMap:Nt,emissiveMap:vt,normalMapObjectSpace:bt&&f.normalMapType===cd,normalMapTangentSpace:bt&&f.normalMapType===Vo,packedNormalMap:bt&&f.normalMapType===Vo&&q_(f.normalMap.format),metalnessMap:Kt,roughnessMap:pi,anisotropy:O,anisotropyMap:Ht,clearcoat:fi,clearcoatMap:T,clearcoatNormalMap:_,clearcoatRoughnessMap:F,diffuseRoughness:ut,diffuseRoughnessMap:ie,dispersion:Ct,retroreflection:he,iridescence:ot,iridescenceMap:J,iridescenceThicknessMap:ce,sheen:Ne,sheenColorMap:pe,sheenRoughnessMap:U,specularMap:ee,specularColorMap:ve,specularIntensityMap:L,transmission:He,transmissionMap:X,thicknessMap:te,gradientMap:ne,opaque:f.transparent===!1&&f.blending===$a&&f.alphaToCoverage===!1,alphaMap:me,alphaTest:ge,alphaHash:Ae,combine:f.combine,mapUv:De&&g(f.map.channel),aoMapUv:_t&&g(f.aoMap.channel),lightMapUv:zt&&g(f.lightMap.channel),bumpMapUv:ni&&g(f.bumpMap.channel),normalMapUv:bt&&g(f.normalMap.channel),displacementMapUv:Nt&&g(f.displacementMap.channel),emissiveMapUv:vt&&g(f.emissiveMap.channel),metalnessMapUv:Kt&&g(f.metalnessMap.channel),roughnessMapUv:pi&&g(f.roughnessMap.channel),anisotropyMapUv:Ht&&g(f.anisotropyMap.channel),clearcoatMapUv:T&&g(f.clearcoatMap.channel),clearcoatNormalMapUv:_&&g(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&g(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&g(f.diffuseRoughnessMap.channel),iridescenceMapUv:J&&g(f.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(f.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(f.sheenColorMap.channel),sheenRoughnessMapUv:U&&g(f.sheenRoughnessMap.channel),specularMapUv:ee&&g(f.specularMap.channel),specularColorMapUv:ve&&g(f.specularColorMap.channel),specularIntensityMapUv:L&&g(f.specularIntensityMap.channel),transmissionMapUv:X&&g(f.transmissionMap.channel),thicknessMapUv:te&&g(f.thicknessMap.channel),alphaMapUv:me&&g(f.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(bt||O),vertexNormals:!!N.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(De||me),fog:!!q,useFog:f.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||N.attributes.normal===void 0&&bt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Pe,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:P.filter(Se=>Se.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ue,decodeVideoTexture:De&&f.map.isVideoTexture===!0&&Qe.getTransfer(f.map.colorSpace)===pt,decodeVideoTextureEmissive:vt&&f.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(f.emissiveMap.colorSpace)===pt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===dr,flipSided:f.side===Qt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:re&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&f.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function M(f){let S=[];if(f.shaderID?S.push(f.shaderID):(S.push(f.customVertexShaderID),S.push(f.customFragmentShaderID)),f.defines!==void 0)for(let C in f.defines)S.push(C),S.push(f.defines[C]);return f.isRawShaderMaterial===!1&&(m(S,f),d(S,f),S.push(e.outputColorSpace)),S.push(f.customProgramCacheKey),S.join()}function m(f,S){f.push(S.precision),f.push(S.outputColorSpace),f.push(S.envMapMode),f.push(S.envMapPMREM),f.push(S.envMapMaxLod),f.push(S.envMapSize),f.push(S.mapUv),f.push(S.alphaMapUv),f.push(S.lightMapUv),f.push(S.aoMapUv),f.push(S.bumpMapUv),f.push(S.normalMapUv),f.push(S.displacementMapUv),f.push(S.emissiveMapUv),f.push(S.metalnessMapUv),f.push(S.roughnessMapUv),f.push(S.anisotropyMapUv),f.push(S.clearcoatMapUv),f.push(S.clearcoatNormalMapUv),f.push(S.clearcoatRoughnessMapUv),f.push(S.diffuseRoughnessMapUv),f.push(S.iridescenceMapUv),f.push(S.iridescenceThicknessMapUv),f.push(S.sheenColorMapUv),f.push(S.sheenRoughnessMapUv),f.push(S.specularMapUv),f.push(S.specularColorMapUv),f.push(S.specularIntensityMapUv),f.push(S.transmissionMapUv),f.push(S.thicknessMapUv),f.push(S.combine),f.push(S.fogExp2),f.push(S.sizeAttenuation),f.push(S.morphTargetsCount),f.push(S.numSunLights),f.push(S.numDirLights),f.push(S.numPointLights),f.push(S.numSpotLights),f.push(S.numSpotLightMaps),f.push(S.numHemiLights),f.push(S.numRectAreaLights),f.push(S.numSunLightShadows),f.push(S.numDirLightShadows),f.push(S.numPointLightShadows),f.push(S.numSpotLightShadows),f.push(S.numSpotLightShadowsWithMaps),f.push(S.numLightProbes),f.push(S.numLightProbeGrids),f.push(S.shadowMapType),f.push(S.toneMapping),f.push(S.numClippingPlanes),f.push(S.numClipIntersection),f.push(S.depthPacking)}function d(f,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.diffuseRoughness&&s.enable(25),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),f.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),f.push(s.mask)}function E(f){let S=u[f.type],C;if(S){let V=Xi[S];C=Zd.clone(V.uniforms)}else C=f.uniforms;return C}function A(f,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new k_(e,S,f,a),l.push(C),h.set(S,C)),C}function y(f){if(--f.usedTimes===0){let S=l.indexOf(f);l[S]=l[l.length-1],l.pop(),h.delete(f.cacheKey),f.destroy()}}function b(f){o.remove(f)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:E,acquireProgram:A,releaseProgram:y,releaseShaderCache:b,programs:l,dispose:R}}function K_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,c){e.get(s)[o]=c}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function Z_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Vc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function kc(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let g=0;return u.isInstancedMesh&&(g+=2),u.isSkinnedMesh&&(g+=1),g}function o(u,g,x,M,m,d){let E=e[t];return E===void 0?(E={id:u.id,object:u,geometry:g,material:x,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:d},e[t]=E):(E.id=u.id,E.object=u,E.geometry=g,E.material=x,E.materialVariant=s(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=m,E.group=d),t++,E}function c(u,g,x,M,m,d,E){E.reversedDepth===!0&&(m=-m);let A=o(u,g,x,M,m,d);x.transmission>0?r.push(A):x.transparent===!0?a.push(A):i.push(A)}function l(u,g,x,M,m,d){let E=o(u,g,x,M,m,d);x.transmission>0?r.unshift(E):x.transparent===!0?a.unshift(E):i.unshift(E)}function h(u,g){i.length>1&&i.sort(u||Z_),r.length>1&&r.sort(g||Vc),a.length>1&&a.sort(g||Vc)}function p(){for(let u=t,g=e.length;u<g;u++){let x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:c,unshift:l,finish:p,sort:h}}function J_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new kc,e.set(r,[s])):a>=n.length?(s=new kc,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Q_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new H,color:new Ge};break;case"SpotLight":i={position:new H,direction:new H,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new H,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new H,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=i,i}}}function $_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function t0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function i0(e){let t=new Q_,i=$_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)r.probe.push(new H);let a=new H,n=new mt,s=new mt;function o(l){let h=0,p=0,u=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let g=0,x=0,M=0,m=0,d=0,E=0,A=0,y=0,b=0,R=0,f=0,S=0,C=0,V=0;l.sort(t0);for(let P=0,q=l.length;P<q;P++){let N=l[P],k=N.color,K=N.intensity,G=N.distance,de=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Xr?de=N.shadow.map.texture:de=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*K,p+=k.g*K,u+=k.b*K;else if(N.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(N.sh.coefficients[j],K);V++}else if(N.isSunLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,se=i.get(N);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[x]=se,r.sunShadowMap[x]=de;let Pe=Z.getViewportCount();for(let Q=0;Q<Pe;Q++)r.sunShadowMatrix[M+Q]=Z.getMatrix(Q),r.sunShadowCascade[M+Q]=Z._cascadeData[Q];M+=Pe,x++}r.sun[g]=j,g++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Z=N.shadow,se=i.get(N);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,r.directionalShadow[m]=se,r.directionalShadowMap[m]=de,r.directionalShadowMatrix[m]=N.shadow.matrix,b++}r.directional[m]=j,m++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(K),j.distance=G,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,r.spot[E]=j;let Z=N.shadow;if(N.map&&(r.spotLightMap[S]=N.map,S++,Z.updateMatrices(N),N.castShadow&&C++),r.spotLightMatrix[E]=Z.matrix,N.castShadow){let se=i.get(N);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,r.spotShadow[E]=se,r.spotShadowMap[E]=de,f++}E++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(k).multiplyScalar(K),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),r.rectArea[A]=j,A++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let Z=N.shadow,se=i.get(N);se.shadowIntensity=Z.intensity,se.shadowBias=Z.bias,se.shadowNormalBias=Z.normalBias,se.shadowRadius=Z.radius,se.shadowMapSize=Z.mapSize,se.shadowCameraNear=Z.camera.near,se.shadowCameraFar=Z.camera.far,r.pointShadow[d]=se,r.pointShadowMap[d]=de,r.pointShadowMatrix[d]=N.shadow.matrix,R++}r.point[d]=j,d++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(K),j.groundColor.copy(N.groundColor).multiplyScalar(K),r.hemi[y]=j,y++}}A>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=u;let I=r.hash;(I.sunLength!==g||I.directionalLength!==m||I.pointLength!==d||I.spotLength!==E||I.rectAreaLength!==A||I.hemiLength!==y||I.numSunShadows!==x||I.numDirectionalShadows!==b||I.numPointShadows!==R||I.numSpotShadows!==f||I.numSpotMaps!==S||I.numLightProbes!==V)&&(r.sun.length=g,r.directional.length=m,r.spot.length=E,r.rectArea.length=A,r.point.length=d,r.hemi.length=y,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=f,r.spotShadowMap.length=f,r.spotLightMatrix.length=f+S-C,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=V,I.sunLength=g,I.directionalLength=m,I.pointLength=d,I.spotLength=E,I.rectAreaLength=A,I.hemiLength=y,I.numSunShadows=x,I.numDirectionalShadows=b,I.numPointShadows=R,I.numSpotShadows=f,I.numSpotMaps=S,I.numLightProbes=V,r.version=e0++)}function c(l,h){let p=0,u=0,g=0,x=0,M=0,m=0,d=h.matrixWorldInverse;for(let E=0,A=l.length;E<A;E++){let y=l[E];if(y.isSunLight){let b=r.sun[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),p++}else if(y.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(d),u++}else if(y.isSpotLight){let b=r.spot[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(d),x++}else if(y.isRectAreaLight){let b=r.rectArea[M];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),s.identity(),n.copy(y.matrixWorld),n.premultiply(d),s.extractRotation(n),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),M++}else if(y.isPointLight){let b=r.point[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),g++}else if(y.isHemisphereLight){let b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:r}}function Wc(e){let t=new i0(e),i=[],r=[],a=[];function n(p){h.camera=p,i.length=0,r.length=0,a.length=0}function s(p){p.isLightProbeGrid?a.push(p):i.push(p)}function o(p){r.push(p)}function c(){t.setup(i),a.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function l(p){t.setupView(i,p)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:c,setupLightsView:l,pushLight:s,pushShadow:o}}function r0(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new Wc(e),t.set(a,[o])):n>=s.length?(o=new Wc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function l0(e,t,i){let r=new nn,a=new rt,n=new rt,s=new wt,o=new ep,c=new tp,l={},h=i.maxTextureSize,p={[Wr]:Qt,[Qt]:Wr,[dr]:dr},u=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:a0,fragmentShader:n0}),g=u.clone();g.defines.HORIZONTAL_PASS=1;let x=new Mi;x.setAttribute("position",new Nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new hi(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kn;let d=this.type;this.render=function(R,f,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Hu&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kn);let C=e.getRenderTarget(),V=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),P=e.state;P.setBlending(xa),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let q=d!==this.type;q&&f.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=R.length;N<k;N++){let K=R[N],G=K.shadow;if(G===void 0){Oe("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let de=G.getFrameExtents();a.multiply(de),n.copy(G.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/de.x),a.x=n.x*de.x,G.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/de.y),a.y=n.y*de.y,G.mapSize.y=n.y));let j=e.state.buffers.depth.getReversed();if(G.camera._reversedDepth=j,G.map===null||q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ja){if(K.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Yi(a.x,a.y,{format:Xr,type:Zi,minFilter:ci,magFilter:ci,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Pa(a.x,a.y,Oi),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Dr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt}else K.isPointLight?(G.map=new ul(a.x),G.map.depthTexture=new yh(a.x,Ki)):(G.map=new Yi(a.x,a.y),G.map.depthTexture=new Pa(a.x,a.y,Ki)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Dr,this.type===Kn?(G.map.depthTexture.compareFunction=j?ch:lh,G.map.depthTexture.minFilter=ci,G.map.depthTexture.magFilter=ci):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);let Z=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,S);let se=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Pe=0;Pe<Z;Pe++){let Q=G.getCamera(Pe);if(K.isPointLight){let ae=G.camera,Ee=G.matrix,Ce=K.distance||ae.far;Ce!==ae.far&&(ae.far=Ce,ae.updateProjectionMatrix()),Za.setFromMatrixPosition(K.matrixWorld),ae.position.copy(Za),eo.copy(ae.position),eo.add(s0[Pe]),ae.up.copy(o0[Pe]),ae.lookAt(eo),ae.updateMatrixWorld(),Ee.makeTranslation(-Za.x,-Za.y,-Za.z),Xc.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Xc,ae.coordinateSystem,ae.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)e.setRenderTarget(G.map,Pe),e.clear();else{Pe===0&&(e.setRenderTarget(G.map),e.clear());let ae=G.getViewport(Pe);s.set(n.x*ae.x,n.y*ae.y,n.x*ae.z,n.y*ae.w),P.viewport(s)}r=G.getFrustum(Pe),y(f,S,Q,K,se,this.type)}G.isPointLightShadow!==!0&&this.type===Ja&&E(G,S),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(C,V,I)};function E(R,f){let S=t.update(M);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null?R.mapPass=new Yi(a.x,a.y,{format:Xr,type:Zi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(f,null,S,u,M,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value.set(R.map.width,R.map.height),g.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(f,null,S,g,M,null)}function A(R,f,S,C){let V=null,I=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)V=I;else if(V=S.isPointLight===!0?c:o,e.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let P=V.uuid,q=f.uuid,N=l[P];N===void 0&&(N={},l[P]=N);let k=N[q];k===void 0&&(k=V.clone(),N[q]=k,f.addEventListener("dispose",b)),V=k}if(V.visible=f.visible,V.wireframe=f.wireframe,C===Ja?V.side=f.shadowSide!==null?f.shadowSide:f.side:V.side=f.shadowSide!==null?f.shadowSide:p[f.side],V.alphaMap=f.alphaMap,V.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,V.map=f.map,V.clipShadows=f.clipShadows,V.clippingPlanes=f.clippingPlanes,V.clipIntersection=f.clipIntersection,V.displacementMap=f.displacementMap,V.displacementScale=f.displacementScale,V.displacementBias=f.displacementBias,V.wireframeLinewidth=f.wireframeLinewidth,V.linewidth=f.linewidth,S.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let P=e.properties.get(V);P.light=S}return V}function y(R,f,S,C,V,I){if(R.visible===!1)return;if(R.layers.test(V)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&I===Ja)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);let q=t.update(R),N=R.material;if(Array.isArray(N)){let k=q.groups;for(let K=0,G=k.length;K<G;K++){let de=k[K],j=N[de.materialIndex];if(j&&j.visible){let Z=A(R,j,C,I);R.onBeforeShadow(e,R,f,S,q,Z,de),e.renderBufferDirect(S,null,q,Z,R,de),R.onAfterShadow(e,R,f,S,q,Z,de)}}}else if(N.visible){let k=A(R,N,C,I);R.onBeforeShadow(e,R,f,S,q,k,null),e.renderBufferDirect(S,null,q,k,R,null),R.onAfterShadow(e,R,f,S,q,k,null)}}let P=R.children;for(let q=0,N=P.length;q<N;q++)y(P[q],f,S,C,V,I)}function b(R){R.target.removeEventListener("dispose",b);for(let f in l){let S=l[f],C=R.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function c0(e,t){function i(){let L=!1,X=new wt,te=null,ne=new wt(0,0,0,0);return{setMask:function(me){te!==me&&!L&&(e.colorMask(me,me,me,me),te=me)},setLocked:function(me){L=me},setClear:function(me,ge,Ae,re,Ue){Ue===!0&&(me*=re,ge*=re,Ae*=re),X.set(me,ge,Ae,re),ne.equals(X)===!1&&(e.clearColor(me,ge,Ae,re),ne.copy(X))},reset:function(){L=!1,te=null,ne.set(-1,0,0,0)}}}function r(){let L=!1,X=!1,te=null,ne=null,me=null;return{setReversed:function(ge){if(X!==ge){let Ae=t.get("EXT_clip_control");ge?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),X=ge;let re=me;me=null,this.setClear(re)}},getReversed:function(){return X},setTest:function(ge){ge?le(e.DEPTH_TEST):ke(e.DEPTH_TEST)},setMask:function(ge){te!==ge&&!L&&(e.depthMask(ge),te=ge)},setFunc:function(ge){if(X&&(ge=Sd[ge]),ne!==ge){switch(ge){case to:e.depthFunc(e.NEVER);break;case io:e.depthFunc(e.ALWAYS);break;case ro:e.depthFunc(e.LESS);break;case en:e.depthFunc(e.LEQUAL);break;case ao:e.depthFunc(e.EQUAL);break;case no:e.depthFunc(e.GEQUAL);break;case so:e.depthFunc(e.GREATER);break;case oo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ne=ge}},setLocked:function(ge){L=ge},setClear:function(ge){me!==ge&&(me=ge,X&&(ge=1-ge),e.clearDepth(ge))},reset:function(){L=!1,te=null,ne=null,me=null,X=!1}}}function a(){let L=!1,X=null,te=null,ne=null,me=null,ge=null,Ae=null,re=null,Ue=null;return{setTest:function(Ie){L||(Ie?le(e.STENCIL_TEST):ke(e.STENCIL_TEST))},setMask:function(Ie){X!==Ie&&!L&&(e.stencilMask(Ie),X=Ie)},setFunc:function(Ie,Ke,Se){(te!==Ie||ne!==Ke||me!==Se)&&(e.stencilFunc(Ie,Ke,Se),te=Ie,ne=Ke,me=Se)},setOp:function(Ie,Ke,Se){(ge!==Ie||Ae!==Ke||re!==Se)&&(e.stencilOp(Ie,Ke,Se),ge=Ie,Ae=Ke,re=Se)},setLocked:function(Ie){L=Ie},setClear:function(Ie){Ue!==Ie&&(e.clearStencil(Ie),Ue=Ie)},reset:function(){L=!1,X=null,te=null,ne=null,me=null,ge=null,Ae=null,re=null,Ue=null}}}let n=new i,s=new r,o=new a,c={},l=new WeakMap,h={},p={},u={},g=new WeakMap,x=[],M=null,m=!1,d=null,E=null,A=null,y=null,b=null,R=null,f=null,S=new Ge(0,0,0),C=0,V=!1,I=null,P=null,q=null,N=null,k=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,de=0,j=e.getParameter(e.VERSION);j.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=de>=1):j.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=de>=2);let Z=null,se={},Pe=e.getParameter(e.SCISSOR_BOX),Q=e.getParameter(e.VIEWPORT),ae=new wt().fromArray(Pe),Ee=new wt().fromArray(Q);function Ce(L,X,te,ne){let me=new Uint8Array(4),ge=e.createTexture();e.bindTexture(L,ge),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ae=0;Ae<te;Ae++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(X,0,e.RGBA,1,1,ne,0,e.RGBA,e.UNSIGNED_BYTE,me):e.texImage2D(X+Ae,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,me);return ge}let Le={};Le[e.TEXTURE_2D]=Ce(e.TEXTURE_2D,e.TEXTURE_2D,1),Le[e.TEXTURE_CUBE_MAP]=Ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[e.TEXTURE_2D_ARRAY]=Ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Le[e.TEXTURE_3D]=Ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(e.DEPTH_TEST),s.setFunc(en),ni(!1),bt(Fl),le(e.CULL_FACE),_t(xa);function le(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function ke(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function et(L,X){return u[L]!==X?(e.bindFramebuffer(L,X),u[L]=X,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=X),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=X),!0):!1}function De(L,X){let te=x,ne=!1;if(L){te=g.get(X),te===void 0&&(te=[],g.set(X,te));let me=L.textures;if(te.length!==me.length||te[0]!==e.COLOR_ATTACHMENT0){for(let ge=0,Ae=me.length;ge<Ae;ge++)te[ge]=e.COLOR_ATTACHMENT0+ge;te.length=me.length,ne=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ne=!0);ne&&e.drawBuffers(te)}function Lt(L){return M!==L?(e.useProgram(L),M=L,!0):!1}let Bt={[ga]:e.FUNC_ADD,[Vu]:e.FUNC_SUBTRACT,[ku]:e.FUNC_REVERSE_SUBTRACT};Bt[Wu]=e.MIN,Bt[Xu]=e.MAX;let Rt={[ju]:e.ZERO,[qu]:e.ONE,[Yu]:e.SRC_COLOR,[jc]:e.SRC_ALPHA,[ed]:e.SRC_ALPHA_SATURATE,[Qu]:e.DST_COLOR,[Zu]:e.DST_ALPHA,[Ku]:e.ONE_MINUS_SRC_COLOR,[qc]:e.ONE_MINUS_SRC_ALPHA,[$u]:e.ONE_MINUS_DST_COLOR,[Ju]:e.ONE_MINUS_DST_ALPHA,[td]:e.CONSTANT_COLOR,[id]:e.ONE_MINUS_CONSTANT_COLOR,[rd]:e.CONSTANT_ALPHA,[ad]:e.ONE_MINUS_CONSTANT_ALPHA};function _t(L,X,te,ne,me,ge,Ae,re,Ue,Ie){if(L===xa){m===!0&&(ke(e.BLEND),m=!1);return}if(m===!1&&(le(e.BLEND),m=!0),L!==Gu){if(L!==d||Ie!==V){if((E!==ga||b!==ga)&&(e.blendEquation(e.FUNC_ADD),E=ga,b=ga),Ie)switch(L){case $a:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Bl:e.blendFunc(e.ONE,e.ONE);break;case zl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Hl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ze("WebGLState: Invalid blending: ",L);break}else switch(L){case $a:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Bl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case zl:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hl:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",L);break}A=null,y=null,R=null,f=null,S.set(0,0,0),C=0,d=L,V=Ie}return}me=me||X,ge=ge||te,Ae=Ae||ne,(X!==E||me!==b)&&(e.blendEquationSeparate(Bt[X],Bt[me]),E=X,b=me),(te!==A||ne!==y||ge!==R||Ae!==f)&&(e.blendFuncSeparate(Rt[te],Rt[ne],Rt[ge],Rt[Ae]),A=te,y=ne,R=ge,f=Ae),(re.equals(S)===!1||Ue!==C)&&(e.blendColor(re.r,re.g,re.b,Ue),S.copy(re),C=Ue),d=L,V=!1}function zt(L,X){L.side===dr?ke(e.CULL_FACE):le(e.CULL_FACE);let te=L.side===Qt;X&&(te=!te),ni(te),L.blending===$a&&L.transparent===!1?_t(xa):_t(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let ne=L.stencilWrite;o.setTest(ne),ne&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(e.SAMPLE_ALPHA_TO_COVERAGE):ke(e.SAMPLE_ALPHA_TO_COVERAGE)}function ni(L){I!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),I=L)}function bt(L){L!==Bu?(le(e.CULL_FACE),L!==P&&(L===Fl?e.cullFace(e.BACK):L===zu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ke(e.CULL_FACE),P=L}function Nt(L){L!==q&&(G&&e.lineWidth(L),q=L)}function vt(L,X,te){L?(le(e.POLYGON_OFFSET_FILL),(N!==X||k!==te)&&(N=X,k=te,s.getReversed()&&(X=-X,te=-te),e.polygonOffset(X,te))):ke(e.POLYGON_OFFSET_FILL)}function Kt(L){L?le(e.SCISSOR_TEST):ke(e.SCISSOR_TEST)}function pi(L){L===void 0&&(L=e.TEXTURE0+K-1),Z!==L&&(e.activeTexture(L),Z=L)}function O(L,X,te){te===void 0&&(Z===null?te=e.TEXTURE0+K-1:te=Z);let ne=se[te];ne===void 0&&(ne={type:void 0,texture:void 0},se[te]=ne),(ne.type!==L||ne.texture!==X)&&(Z!==te&&(e.activeTexture(te),Z=te),e.bindTexture(L,X||Le[L]),ne.type=L,ne.texture=X)}function fi(){let L=se[Z];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{e.compressedTexImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function Ct(){try{e.compressedTexImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function he(){try{e.texSubImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function ot(){try{e.texSubImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function He(){try{e.compressedTexSubImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function Ht(){try{e.texStorage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function T(){try{e.texStorage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function _(){try{e.texImage2D(...arguments)}catch(L){ze("WebGLState:",L)}}function F(){try{e.texImage3D(...arguments)}catch(L){ze("WebGLState:",L)}}function ie(L){return p[L]!==void 0?p[L]:e.getParameter(L)}function J(L,X){p[L]!==X&&(e.pixelStorei(L,X),p[L]=X)}function ce(L){ae.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function pe(L){Ee.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Ee.copy(L))}function U(L,X){let te=l.get(X);te===void 0&&(te=new WeakMap,l.set(X,te));let ne=te.get(L);ne===void 0&&(ne=e.getUniformBlockIndex(X,L.name),e.uniformBlockBinding(X,ne,ne),te.set(L,ne))}function ee(L,X,te){let ne=l.get(X).get(L);c[ne]!==te&&(e.bindBufferBase(e.UNIFORM_BUFFER,ne,te),c[ne]=te)}function ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},Z=null,se={},u={},c={},g=new WeakMap,x=[],M=null,m=!1,d=null,E=null,A=null,y=null,b=null,R=null,f=null,S=new Ge(0,0,0),C=0,V=!1,I=null,P=null,q=null,N=null,k=null,ae.set(0,0,e.canvas.width,e.canvas.height),Ee.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:le,disable:ke,bindFramebuffer:et,drawBuffers:De,useProgram:Lt,setBlending:_t,setMaterial:zt,setFlipSided:ni,setCullFace:bt,setLineWidth:Nt,setPolygonOffset:vt,setScissorTest:Kt,activeTexture:pi,bindTexture:O,unbindTexture:fi,compressedTexImage2D:ut,compressedTexImage3D:Ct,texImage2D:_,texImage3D:F,pixelStorei:J,getParameter:ie,updateUBOMapping:U,uniformBlockBinding:ee,texStorage2D:Ht,texStorage3D:T,texSubImage2D:he,texSubImage3D:ot,compressedTexSubImage2D:Ne,compressedTexSubImage3D:He,scissor:ce,viewport:pe,reset:ve}}function h0(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new rt,h=new WeakMap,p=new Set,u,g=new WeakMap,x=new Set,M=new FinalizationRegistry(T=>x.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,_){return m?new OffscreenCanvas(T,_):cs("canvas")}function E(T,_,F){let ie=1,J=Ht(T);if((J.width>F||J.height>F)&&(ie=F/Math.max(J.width,J.height)),ie<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ce=Math.floor(ie*J.width),pe=Math.floor(ie*J.height);u===void 0&&(u=d(ce,pe));let U=_?d(ce,pe):u;return U.width=ce,U.height=pe,U.getContext("2d").drawImage(T,0,0,ce,pe),Oe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ce+"x"+pe+")."),U}else return"data"in T&&Oe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function A(T){return T.generateMipmaps}function y(T){e.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(T,_,F,ie,J,ce=!1){if(T!==null){if(e[T]!==void 0)return e[T];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;ie&&(pe=t.get("EXT_texture_norm16"),pe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=_;if(_===e.RED&&(F===e.FLOAT&&(U=e.R32F),F===e.HALF_FLOAT&&(U=e.R16F),F===e.UNSIGNED_BYTE&&(U=e.R8),F===e.UNSIGNED_SHORT&&pe&&(U=pe.R16_EXT),F===e.SHORT&&pe&&(U=pe.R16_SNORM_EXT)),_===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(U=e.R8UI),F===e.UNSIGNED_SHORT&&(U=e.R16UI),F===e.UNSIGNED_INT&&(U=e.R32UI),F===e.BYTE&&(U=e.R8I),F===e.SHORT&&(U=e.R16I),F===e.INT&&(U=e.R32I)),_===e.RG&&(F===e.FLOAT&&(U=e.RG32F),F===e.HALF_FLOAT&&(U=e.RG16F),F===e.UNSIGNED_BYTE&&(U=e.RG8),F===e.UNSIGNED_SHORT&&pe&&(U=pe.RG16_EXT),F===e.SHORT&&pe&&(U=pe.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(U=e.RG8UI),F===e.UNSIGNED_SHORT&&(U=e.RG16UI),F===e.UNSIGNED_INT&&(U=e.RG32UI),F===e.BYTE&&(U=e.RG8I),F===e.SHORT&&(U=e.RG16I),F===e.INT&&(U=e.RG32I)),_===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(U=e.RGB8UI),F===e.UNSIGNED_SHORT&&(U=e.RGB16UI),F===e.UNSIGNED_INT&&(U=e.RGB32UI),F===e.BYTE&&(U=e.RGB8I),F===e.SHORT&&(U=e.RGB16I),F===e.INT&&(U=e.RGB32I)),_===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(U=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(U=e.RGBA16UI),F===e.UNSIGNED_INT&&(U=e.RGBA32UI),F===e.BYTE&&(U=e.RGBA8I),F===e.SHORT&&(U=e.RGBA16I),F===e.INT&&(U=e.RGBA32I)),_===e.RGB&&(F===e.UNSIGNED_SHORT&&pe&&(U=pe.RGB16_EXT),F===e.SHORT&&pe&&(U=pe.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(U=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(U=e.R11F_G11F_B10F)),_===e.RGBA){let ee=ce?ls:Qe.getTransfer(J);F===e.FLOAT&&(U=e.RGBA32F),F===e.HALF_FLOAT&&(U=e.RGBA16F),F===e.UNSIGNED_BYTE&&(U=ee===pt?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&pe&&(U=pe.RGBA16_EXT),F===e.SHORT&&pe&&(U=pe.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(U=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(U=e.RGB5_A1)}return(U===e.R16F||U===e.R32F||U===e.RG16F||U===e.RG32F||U===e.RGBA16F||U===e.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function f(T,_){let F;return T?_===null||_===Ki||_===Aa?F=e.DEPTH24_STENCIL8:_===Oi?F=e.DEPTH32F_STENCIL8:_===rn&&(F=e.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ki||_===Aa?F=e.DEPTH_COMPONENT24:_===Oi?F=e.DEPTH_COMPONENT32F:_===rn&&(F=e.DEPTH_COMPONENT16),F}function S(T,_){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Yt&&T.minFilter!==ci?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=new WeakRef(T);r.get(T).__ref=_,x.add(_),M.register(T,_,_)}function V(T){let _=r.get(T).__ref;_!==void 0&&(x.delete(_),M.unregister(_))}function I(T){q(T.target)}function P(T){N(T.target)}function q(T){T.removeEventListener("dispose",I),V(T),K(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}function N(T){T.removeEventListener("dispose",P),V(T),de(T)}function k(){for(let T of x){let _=T.deref();_!==void 0&&(_.isRenderTarget===!0?N(_):q(_))}x.clear(),p.clear()}function K(T){let _=r.get(T);if(_.__webglInit===void 0)return;let F=T.source,ie=g.get(F);if(ie){let J=ie[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&G(T),Object.keys(ie).length===0&&g.delete(F)}r.remove(T)}function G(T){let _=r.get(T);e.deleteTexture(_.__webglTexture);let F=T.source,ie=g.get(F);delete ie[_.__cacheKey],s.memory.textures--}function de(T){let _=r.get(T);_.__depthDisposeCallback&&_.__depthDisposeCallback();let F=T.depthTexture;if(F&&F.renderTarget===T&&q(F),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ce=0;ce<_.__webglFramebuffer[J].length;ce++)e.deleteFramebuffer(_.__webglFramebuffer[J][ce]);else e.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)e.deleteFramebuffer(_.__webglFramebuffer[J]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ie=T.textures;for(let J=0,ce=ie.length;J<ce;J++){let pe=r.get(ie[J]);pe.__webglTexture&&(e.deleteTexture(pe.__webglTexture),s.memory.textures--),r.remove(ie[J])}r.remove(T)}let j=0;function Z(){j=0}function se(){return j}function Pe(T){j=T}function Q(){let T=j;return T>=a.maxTextures&&Oe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+a.maxTextures),j+=1,T}function ae(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.mipmapsAutoUpdate),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Ee(T,_){let F=r.get(T);if(T.isVideoTexture&&Ne(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let ie=T.image;if(ie===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{zt(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+_)}function Ce(T,_){let F=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){zt(F,T,_);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+_)}function Le(T,_){let F=r.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){zt(F,T,_);return}i.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+_)}function le(T,_){let F=r.get(T);if(T.version>0&&F.__version!==T.version){ni(F,T,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+_)}let ke={[lo]:e.REPEAT,[pr]:e.CLAMP_TO_EDGE,[co]:e.MIRRORED_REPEAT},et={[Yt]:e.NEAREST,[od]:e.NEAREST_MIPMAP_NEAREST,[En]:e.NEAREST_MIPMAP_LINEAR,[ci]:e.LINEAR,[As]:e.LINEAR_MIPMAP_NEAREST,[Pr]:e.LINEAR_MIPMAP_LINEAR},De={[ud]:e.NEVER,[hh]:e.ALWAYS,[dd]:e.LESS,[lh]:e.LEQUAL,[pd]:e.EQUAL,[ch]:e.GEQUAL,[fd]:e.GREATER,[md]:e.NOTEQUAL};function Lt(T,_){if(_.type===Oi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ci||_.magFilter===As||_.magFilter===En||_.magFilter===Pr||_.minFilter===ci||_.minFilter===As||_.minFilter===En||_.minFilter===Pr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,ke[_.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,ke[_.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,ke[_.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,et[_.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,De[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==En&&_.minFilter!==Pr||_.type===Oi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Bt(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",I),C(_));let ie=_.source,J=g.get(ie);J===void 0&&(J={},g.set(ie,J));let ce=ae(_);if(ce!==T.__cacheKey){J[ce]===void 0&&(J[ce]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,F=!0),J[ce].usedTimes++;let pe=J[T.__cacheKey];pe!==void 0&&(J[T.__cacheKey].usedTimes--,pe.usedTimes===0&&G(_)),T.__cacheKey=ce,T.__webglTexture=J[ce].texture}return F}function Rt(T,_,F){return Math.floor(Math.floor(T/F)/_)}function _t(T,_,F,ie){let J=T.updateRanges;if(J.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,F,ie,_.data);else{J.sort((ve,L)=>ve.start-L.start);let ce=0;for(let ve=1;ve<J.length;ve++){let L=J[ce],X=J[ve],te=L.start+L.count,ne=Rt(X.start,_.width,4),me=Rt(L.start,_.width,4);X.start<=te+1&&ne===me&&Rt(X.start+X.count-1,_.width,4)===ne?L.count=Math.max(L.count,X.start+X.count-L.start):(++ce,J[ce]=X)}J.length=ce+1;let pe=i.getParameter(e.UNPACK_ROW_LENGTH),U=i.getParameter(e.UNPACK_SKIP_PIXELS),ee=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let ve=0,L=J.length;ve<L;ve++){let X=J[ve],te=Math.floor(X.start/4),ne=Math.ceil(X.count/4),me=te%_.width,ge=Math.floor(te/_.width),Ae=ne;i.pixelStorei(e.UNPACK_SKIP_PIXELS,me),i.pixelStorei(e.UNPACK_SKIP_ROWS,ge),i.texSubImage2D(e.TEXTURE_2D,0,me,ge,Ae,1,F,ie,_.data)}T.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,pe),i.pixelStorei(e.UNPACK_SKIP_PIXELS,U),i.pixelStorei(e.UNPACK_SKIP_ROWS,ee)}}function zt(T,_,F){let ie=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ie=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ie=e.TEXTURE_3D);let J=Bt(T,_),ce=_.source;i.bindTexture(ie,T.__webglTexture,e.TEXTURE0+F);let pe=r.get(ce);if(ce.version!==pe.__version||J===!0){if(i.activeTexture(e.TEXTURE0+F),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let re=Qe.getPrimaries(Qe.workingColorSpace),Ue=_.colorSpace===Cr?null:Qe.getPrimaries(_.colorSpace),Ie=_.colorSpace===Cr||re===Ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let U=E(_.image,!1,a.maxTextureSize);U=He(_,U);let ee=n.convert(_.format,_.colorSpace),ve=n.convert(_.type),L=R(_.internalFormat,ee,ve,_.normalized,_.colorSpace,_.isVideoTexture);Lt(ie,_);let X,te=_.mipmaps,ne=_.isVideoTexture!==!0,me=pe.__version===void 0||J===!0,ge=ce.dataReady,Ae=S(_,U);if(_.isDepthTexture)L=f(_.format===Lr,_.type),me&&(ne?i.texStorage2D(e.TEXTURE_2D,1,L,U.width,U.height):i.texImage2D(e.TEXTURE_2D,0,L,U.width,U.height,0,ee,ve,null));else if(_.isDataTexture)if(te.length>0){ne&&me&&i.texStorage2D(e.TEXTURE_2D,Ae,L,te[0].width,te[0].height);for(let re=0,Ue=te.length;re<Ue;re++)X=te[re],ne?ge&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,X.width,X.height,ee,ve,X.data):i.texImage2D(e.TEXTURE_2D,re,L,X.width,X.height,0,ee,ve,X.data);_.generateMipmaps=!1}else ne?(me&&i.texStorage2D(e.TEXTURE_2D,Ae,L,U.width,U.height),ge&&_t(_,U,ee,ve)):i.texImage2D(e.TEXTURE_2D,0,L,U.width,U.height,0,ee,ve,U.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ne&&me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,L,te[0].width,te[0].height,U.depth);for(let re=0,Ue=te.length;re<Ue;re++)if(X=te[re],_.format!==ji)if(ee!==null)if(ne){if(ge)if(_.layerUpdates.size>0){let Ie=Ec(X.width,X.height,_.format,_.type);for(let Ke of _.layerUpdates){let Se=X.data.subarray(Ke*Ie/X.data.BYTES_PER_ELEMENT,(Ke+1)*Ie/X.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,Ke,X.width,X.height,1,ee,Se)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,U.depth,ee,X.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,re,L,X.width,X.height,U.depth,0,X.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?ge&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,re,0,0,0,X.width,X.height,U.depth,ee,ve,X.data):i.texImage3D(e.TEXTURE_2D_ARRAY,re,L,X.width,X.height,U.depth,0,ee,ve,X.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ne&&me&&i.texStorage2D(e.TEXTURE_2D,Ae,L,te[0].width,te[0].height);for(let re=0,Ue=te.length;re<Ue;re++)X=te[re],_.format!==ji?ee!==null?ne?ge&&i.compressedTexSubImage2D(e.TEXTURE_2D,re,0,0,X.width,X.height,ee,X.data):i.compressedTexImage2D(e.TEXTURE_2D,re,L,X.width,X.height,0,X.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?ge&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,X.width,X.height,ee,ve,X.data):i.texImage2D(e.TEXTURE_2D,re,L,X.width,X.height,0,ee,ve,X.data)}else if(_.isDataArrayTexture)if(ne){if(me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Ae,L,U.width,U.height,U.depth),ge)if(_.layerUpdates.size>0){let re=Ec(U.width,U.height,_.format,_.type);for(let Ue of _.layerUpdates){let Ie=U.data.subarray(Ue*re/U.data.BYTES_PER_ELEMENT,(Ue+1)*re/U.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ue,U.width,U.height,1,ee,ve,Ie)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,ee,ve,U.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,L,U.width,U.height,U.depth,0,ee,ve,U.data);else if(_.isData3DTexture)ne?(me&&i.texStorage3D(e.TEXTURE_3D,Ae,L,U.width,U.height,U.depth),ge&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,ee,ve,U.data)):i.texImage3D(e.TEXTURE_3D,0,L,U.width,U.height,U.depth,0,ee,ve,U.data);else if(_.isFramebufferTexture){if(me)if(ne)i.texStorage2D(e.TEXTURE_2D,Ae,L,U.width,U.height);else{let re=U.width,Ue=U.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(e.TEXTURE_2D,Ie,L,re,Ue,0,ee,ve,null),re>>=1,Ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let re=e.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),U.parentNode!==re){re.appendChild(U),p.add(_),re.onpaint=Ue=>{let Ie=Ue.changedElements;for(let Ke of p)Ie.includes(Ke.image)&&(Ke.needsUpdate=!0)},re.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,U);else{let Ue=e.RGBA,Ie=e.RGBA,Ke=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ue,Ie,Ke,U)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(te.length>0){if(ne&&me){let re=Ht(te[0]);i.texStorage2D(e.TEXTURE_2D,Ae,L,re.width,re.height)}for(let re=0,Ue=te.length;re<Ue;re++)X=te[re],ne?ge&&i.texSubImage2D(e.TEXTURE_2D,re,0,0,ee,ve,X):i.texImage2D(e.TEXTURE_2D,re,L,ee,ve,X);_.generateMipmaps=!1}else if(ne){if(me){let re=Ht(U);i.texStorage2D(e.TEXTURE_2D,Ae,L,re.width,re.height)}ge&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ee,ve,U)}else i.texImage2D(e.TEXTURE_2D,0,L,ee,ve,U);A(_)&&_.mipmapsAutoUpdate===!0&&y(ie),pe.__version=ce.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ni(T,_,F){if(_.image.length!==6)return;let ie=Bt(T,_),J=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+F);let ce=r.get(J);if(J.version!==ce.__version||ie===!0){i.activeTexture(e.TEXTURE0+F);let pe=Qe.getPrimaries(Qe.workingColorSpace),U=_.colorSpace===Cr?null:Qe.getPrimaries(_.colorSpace),ee=_.colorSpace===Cr||pe===U?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ve=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,X=[];for(let Se=0;Se<6;Se++)!ve&&!L?X[Se]=E(_.image[Se],!0,a.maxCubemapSize):X[Se]=L?_.image[Se].image:_.image[Se],X[Se]=He(_,X[Se]);let te=X[0],ne=n.convert(_.format,_.colorSpace),me=n.convert(_.type),ge=R(_.internalFormat,ne,me,_.normalized,_.colorSpace),Ae=_.isVideoTexture!==!0,re=ce.__version===void 0||ie===!0,Ue=J.dataReady,Ie=S(_,te);Lt(e.TEXTURE_CUBE_MAP,_);let Ke;if(_.isDepthTexture){if(ge=f(_.format===Lr,_.type),re)if(Ae)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,ge,te.width,te.height);else for(let Se=0;Se<6;Se++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,te.width,te.height,0,ne,me,null)}else if(ve){Ae&&re&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ie,ge,te.width,te.height);for(let Se=0;Se<6;Se++){Ke=X[Se].mipmaps;for(let at=0;at<Ke.length;at++){let dt=Ke[at];_.format!==ji?ne!==null?Ae?Ue&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at,0,0,dt.width,dt.height,ne,dt.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at,ge,dt.width,dt.height,0,dt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?Ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at,0,0,dt.width,dt.height,ne,me,dt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at,ge,dt.width,dt.height,0,ne,me,dt.data)}}}else{if(Ke=_.mipmaps,Ae&&re){Ke.length>0&&Ie++;let Se=Ht(X[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ie,ge,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(L){Ae?Ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,X[Se].width,X[Se].height,ne,me,X[Se].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,X[Se].width,X[Se].height,0,ne,me,X[Se].data);for(let at=0;at<Ke.length;at++){let dt=Ke[at].image[Se].image;Ae?Ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at+1,0,0,dt.width,dt.height,ne,me,dt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at+1,ge,dt.width,dt.height,0,ne,me,dt.data)}}else{Ae?Ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ne,me,X[Se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,ne,me,X[Se]);for(let at=0;at<Ke.length;at++){let dt=Ke[at];Ae?Ue&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at+1,0,0,ne,me,dt.image[Se]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Se,at+1,ge,ne,me,dt.image[Se])}}}A(_)&&_.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),ce.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function bt(T,_,F,ie,J,ce){let pe=n.convert(F.format,F.colorSpace),U=n.convert(F.type),ee=R(F.internalFormat,pe,U,F.normalized,F.colorSpace),ve=r.get(_),L=r.get(F);if(L.__renderTarget=_,!ve.__hasExternalTextures){let X=Math.max(1,_.width>>ce),te=Math.max(1,_.height>>ce);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?i.texImage3D(J,ce,ee,X,te,_.depth,0,pe,U,null):i.texImage2D(J,ce,ee,X,te,0,pe,U,null)}i.bindFramebuffer(e.FRAMEBUFFER,T),ot(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ie,J,L.__webglTexture,0,he(_)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ie,J,L.__webglTexture,ce),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Nt(T,_,F){if(e.bindRenderbuffer(e.RENDERBUFFER,T),_.depthBuffer){let ie=_.depthTexture,J=ie&&ie.isDepthTexture?ie.type:null,ce=f(_.stencilBuffer,J),pe=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ot(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,he(_),ce,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,he(_),ce,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ce,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,T)}else{let ie=_.textures;for(let J=0;J<ie.length;J++){let ce=ie[J],pe=n.convert(ce.format,ce.colorSpace),U=n.convert(ce.type),ee=R(ce.internalFormat,pe,U,ce.normalized,ce.colorSpace);ot(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,he(_),ee,_.width,_.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,he(_),ee,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ee,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function vt(T,_,F){let ie=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=r.get(_.depthTexture);J.__renderTarget=_;let ce=ie?_.depthTexture.image[0]:_.depthTexture.image;(!J.__webglTexture||ce.width!==_.width||ce.height!==_.height)&&(ce.width=_.width,ce.height=_.height,_.depthTexture.needsUpdate=!0),ie?le(_.depthTexture,0):Ee(_.depthTexture,0);let pe=J.__webglTexture,U=he(_),ee=ie?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,ve=_.depthTexture.format===Lr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Dr)ot(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,ee,pe,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,ve,ee,pe,0);else if(_.depthTexture.format===Lr)ot(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ve,ee,pe,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,ve,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(T){let _=r.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let ie=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ie){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ie.removeEventListener("dispose",J)};ie.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=ie}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)vt(_.__webglFramebuffer[ie],T,ie);else T.texture.mipmaps.length>0?vt(_.__webglFramebuffer[0],T,0):vt(_.__webglFramebuffer,T,0);else if(F){_.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[ie]),_.__webglDepthbuffer[ie]===void 0)_.__webglDepthbuffer[ie]=e.createRenderbuffer(),Nt(_.__webglDepthbuffer[ie],T,!1);else{let J=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ce=_.__webglDepthbuffer[ie];e.bindRenderbuffer(e.RENDERBUFFER,ce),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,ce)}}else if(T.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Nt(_.__webglDepthbuffer,T,!1);else{let ie=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,ie,e.RENDERBUFFER,J)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function pi(T,_,F){let ie=r.get(T);_!==void 0&&bt(ie.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Kt(T)}function O(T){let _=T.texture,F=r.get(T),ie=r.get(_);T.addEventListener("dispose",P),C(T);let J=T.textures,ce=T.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=e.createTexture()),ie.__version=_.version,s.memory.textures++),ce){F.__webglFramebuffer=[];for(let U=0;U<6;U++)if(_.mipmaps.length>0){F.__webglFramebuffer[U]=[];for(let ee=0;ee<_.mipmaps.length;ee++)F.__webglFramebuffer[U][ee]=e.createFramebuffer()}else F.__webglFramebuffer[U]=e.createFramebuffer()}else{if(_.mipmaps.length>0){F.__webglFramebuffer=[];for(let U=0;U<_.mipmaps.length;U++)F.__webglFramebuffer[U]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(pe)for(let U=0,ee=J.length;U<ee;U++){let ve=r.get(J[U]);ve.__webglTexture===void 0&&(ve.__webglTexture=e.createTexture(),s.memory.textures++)}if(T.samples>0&&ot(T)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let U=0;U<J.length;U++){let ee=J[U];F.__webglColorRenderbuffer[U]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[U]);let ve=n.convert(ee.format,ee.colorSpace),L=n.convert(ee.type),X=R(ee.internalFormat,ve,L,ee.normalized,ee.colorSpace,T.isXRRenderTarget===!0),te=he(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,te,X,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+U,e.RENDERBUFFER,F.__webglColorRenderbuffer[U])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,T,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ce){i.bindTexture(e.TEXTURE_CUBE_MAP,ie.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,_);for(let U=0;U<6;U++)if(_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)bt(F.__webglFramebuffer[U][ee],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,ee);else bt(F.__webglFramebuffer[U],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);A(_)?y(e.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}else if(pe){for(let U=0,ee=J.length;U<ee;U++){let ve=J[U],L=r.get(ve),X=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(X=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(X,L.__webglTexture),Lt(X,ve),bt(F.__webglFramebuffer,T,ve,e.COLOR_ATTACHMENT0+U,X,0),A(ve)&&y(X)}i.unbindTexture()}else{let U=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(U=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(U,ie.__webglTexture),Lt(U,_),_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)bt(F.__webglFramebuffer[ee],T,_,e.COLOR_ATTACHMENT0,U,ee);else bt(F.__webglFramebuffer,T,_,e.COLOR_ATTACHMENT0,U,0);A(_)?y(U):_.mipmaps.length>0&&e.texParameteri(U,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}T.depthBuffer&&Kt(T)}function fi(T){let _=T.textures;for(let F=0,ie=_.length;F<ie;F++){let J=_[F];if(A(J)&&J.mipmapsAutoUpdate===!0){let ce=b(T),pe=r.get(J).__webglTexture;i.bindTexture(ce,pe),y(ce),i.unbindTexture()}}}let ut=[];function Ct(T){if(T.samples>0){if(ot(T)===!1){let _=T.textures,F=T.width,ie=T.height,J=e.COLOR_BUFFER_BIT,ce=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=r.get(T),U=_.length>1;if(U)for(let ee=0;ee<_.length;ee++)i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ee=0;ee<_.length;ee++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),U){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ee]);let ve=r.get(_[ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ve,0)}e.blitFramebuffer(0,0,F,ie,0,0,F,ie,J,e.NEAREST),c===!0&&(ut.length=0,ut.push(e.COLOR_ATTACHMENT0+ee),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&ut.push(ce),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),U)for(let ee=0;ee<_.length;ee++){i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,pe.__webglColorRenderbuffer[ee]);let ve=r.get(_[ee]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.TEXTURE_2D,ve,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let _=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function he(T){return Math.min(a.maxSamples,T.samples)}function ot(T){let _=r.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ne(T){let _=s.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function He(T,_){let F=T.colorSpace,ie=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==os&&F!==Cr&&(Qe.getTransfer(F)===pt?(ie!==ji||J!==xi)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",F)),_}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=Z,this.getTextureUnits=se,this.setTextureUnits=Pe,this.setTexture2D=Ee,this.setTexture2DArray=Ce,this.setTexture3D=Le,this.setTextureCube=le,this.rebindTextures=pi,this.setupRenderTarget=O,this.updateRenderTargetMipmap=fi,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ot,this.dispose=k}function u0(e,t){function i(r,a=Cr){let n,s=Qe.getTransfer(a);if(r===xi)return e.UNSIGNED_BYTE;if(r===Zo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Jo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===ah)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===nh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===ih)return e.BYTE;if(r===rh)return e.SHORT;if(r===rn)return e.UNSIGNED_SHORT;if(r===Ko)return e.INT;if(r===Ki)return e.UNSIGNED_INT;if(r===Oi)return e.FLOAT;if(r===Zi)return e.HALF_FLOAT;if(r===sh)return e.ALPHA;if(r===oh)return e.RGB;if(r===ji)return e.RGBA;if(r===Dr)return e.DEPTH_COMPONENT;if(r===Lr)return e.DEPTH_STENCIL;if(r===Qo)return e.RED;if(r===$o)return e.RED_INTEGER;if(r===Xr)return e.RG;if(r===el)return e.RG_INTEGER;if(r===tl)return e.RGBA_INTEGER;if(r===Zn||r===Jn||r===Qn||r===$n)if(s===pt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Zn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$n)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Zn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$n)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ho||r===uo||r===po||r===fo)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ho)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===po)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mo||r===go||r===_o||r===vo||r===xo||r===as||r===Mo)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===mo||r===go)return s===pt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===_o)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===vo)return n.COMPRESSED_R11_EAC;if(r===xo)return n.COMPRESSED_SIGNED_R11_EAC;if(r===as)return n.COMPRESSED_RG11_EAC;if(r===Mo)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===So||r===yo||r===Eo||r===To||r===bo||r===wo||r===Ao||r===Ro||r===Co||r===Po||r===Lo||r===No||r===Do||r===Io)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===So)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===To)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ao)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ro)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Co)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Po)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Lo)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===No)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Do)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Io)return s===pt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uo||r===Oo||r===Fo)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Uo)return s===pt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oo)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fo)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bo||r===zo||r===ns||r===Ho)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===Bo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===zo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ns)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ho)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Aa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function _0(e,t){function i(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function r(m,d){d.color.getRGB(m.fogColor.value,Dh(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,E,A,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?n(m,d):d.isMeshLambertMaterial?(n(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(n(m,d),p(m,d)):d.isMeshPhongMaterial?(n(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(n(m,d),u(m,d),d.isMeshPhysicalMaterial&&g(m,d,y)):d.isMeshMatcapMaterial?(n(m,d),x(m,d)):d.isMeshDepthMaterial?n(m,d):d.isMeshDistanceMaterial?(n(m,d),M(m,d)):d.isMeshNormalMaterial?n(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,E,A):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function n(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,i(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,i(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,i(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,i(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,i(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),A=E.envMap,y=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tu),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,i(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,i(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=A*.5,d.map&&(m.map.value=d.map,i(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,i(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,i(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,i(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,i(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,E){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,i(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,i(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,i(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,i(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,i(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,i(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,i(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,i(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,i(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,i(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,i(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,i(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,i(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function v0(e,t,i,r){let a={},n={};function s(E,A){let y=A.program;r.uniformBlockBinding(E,y,a[E.id])}function o(E,A){let y=a[E.id];y===void 0&&(x(E),y=c(E),a[E.id]=y,E.addEventListener("dispose",m));let b=A.program;r.updateUBOMapping(E,b);let R=t.render.frame;n[E.id]!==R&&(l(E),n[E.id]=R)}function c(E){let A=e.createBuffer(),y=E.__size,b=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,y,b),e.bindBuffer(e.UNIFORM_BUFFER,null),A}function l(E){let A=a[E.id],y=E.uniforms,b=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let R=0,f=y.length;R<f;R++){let S=y[R];if(Array.isArray(S))for(let C=0,V=S.length;C<V;C++)h(S[C],R,C,b);else h(S,R,0,b)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(E,A,y,b){if(u(E,A,y,b)===!0){let R=E.__offset,f=E.value;if(Array.isArray(f)){let S=0;for(let C=0;C<f.length;C++){let V=f[C],I=M(V,!0);p(V,E.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else p(f,E.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,R,E.__data)}}function p(E,A,y){typeof E=="number"||typeof E=="boolean"?A[y]=E:E.isMatrix3?(A[y]=E.elements[0],A[y+1]=E.elements[1],A[y+2]=E.elements[2],A[y+3]=0,A[y+4]=E.elements[3],A[y+5]=E.elements[4],A[y+6]=E.elements[5],A[y+7]=0,A[y+8]=E.elements[6],A[y+9]=E.elements[7],A[y+10]=E.elements[8],A[y+11]=0):ArrayBuffer.isView(E)?A.set(E.subarray(0,A.length-y),y):E.toArray(A,y)}function u(E,A,y,b){let R=E.value,f=A+"_"+y;if(Array.isArray(R)){b[f]===void 0&&(b[f]=[]);let S=b[f],C=!1;for(let V=0;V<R.length;V++)g(R[V],S,V)===!0&&(C=!0);return C}return g(R,b,f)}function g(E,A,y){if(A[y]===void 0)return typeof E=="number"||typeof E=="boolean"?A[y]=E:ArrayBuffer.isView(E)?A[y]=E.slice():A[y]=E.clone(),!0;{let b=A[y];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return A[y]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(b.equals(E)===!1)return b.copy(E),!0}}return!1}function x(E){let A=E.uniforms,y=0,b=16;for(let f=0,S=A.length;f<S;f++){let C=Array.isArray(A[f])?A[f]:[A[f]];for(let V=0,I=C.length;V<I;V++){let P=C[V],q=Array.isArray(P.value)?P.value:[P.value],N=Array.isArray(A[f])||Array.isArray(P.value),k=y;for(let G=0,de=q.length;G<de;G++){let j=q[G],Z=M(j,N),se=y%b,Pe=se%Z.boundary,Q=se+Pe;y+=Pe,Q!==0&&b-Q<Z.storage&&(y+=b-Q),G===0&&(k=y),y+=Z.storage}let K=P.type==="int"?Int32Array:P.type==="uint"?Uint32Array:Float32Array;P.__data=new K((y-k)/Float32Array.BYTES_PER_ELEMENT),P.__offset=k}}let R=y%b;return R>0&&(y+=b-R),E.__size=y,E.__cache={},this}function M(E,A){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=16,y.storage=48):E.isMatrix4?(y.boundary=16,y.storage=64):E.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(y.boundary=16,y.storage=E.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",E),A===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(E){let A=E.target;A.removeEventListener("dispose",m),e.deleteBuffer(a[A.id]),delete a[A.id],delete n[A.id]}function d(){for(let E in a)e.deleteBuffer(a[E]);a={},n={}}return{bind:s,update:o,dispose:d}}function M0(){return Wi===null&&(Wi=new xh(x0,16,16,Xr,Zi),Wi.name="DFG_LUT",Wi.minFilter=ci,Wi.magFilter=ci,Wi.wrapS=pr,Wi.wrapT=pr,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var Bu,Fl,zu,Kn,Hu,Ja,Wr,Qt,dr,xa,$a,Bl,zl,Hl,Gu,ga,Vu,ku,Wu,Xu,ju,qu,Yu,Ku,jc,qc,Zu,Ju,Qu,$u,ed,td,id,rd,ad,to,io,ro,en,ao,no,so,oo,Yo,nd,sd,fr,Yc,Kc,Zc,Jc,Qc,$c,eh,th,wa,tn,bs,ws,lo,pr,co,Yt,od,En,ci,As,Pr,xi,ih,rh,rn,Ko,Ki,Oi,Zi,Zo,Jo,Aa,ah,nh,sh,oh,ji,Dr,Lr,Qo,$o,Xr,el,tl,Zn,Jn,Qn,$n,ho,uo,po,fo,mo,go,_o,vo,xo,as,Mo,So,yo,Eo,To,bo,wo,Ao,Ro,Co,Po,Lo,No,Do,Io,Uo,Oo,Fo,Bo,zo,ns,Ho,ss,Go,Rs,Gl,Vl,kl,Wl,ld,Vo,cd,Cr,Ai,os,ls,pt,Cs,hd,ud,dd,pd,lh,fd,md,ch,hh,gd,Xl,Fi,an,jl,Ra,Sd,qr,Zt,Ps,ko,Sa,rt,Yr,ya,H,Ns,Yl,Ea,Ve,Ds,Kl,Zl,Qe,ia,Ad,Rd,rl,Cd,Us,Bi,Ta,wt,Pd,Yi,dh,Ld,kr,mt,ra,Di,Nd,Dd,Er,Tn,gi,Jl,Ql,Ca,al,Id,$l,aa,or,bn,ka,Ud,Od,ec,tc,ic,rc,Fd,na,Os,$t,qi,Bd,Fs,fh,Tr,wn,Ge,Jt,mh,Ii,lr,zs,cr,sa,oa,ac,Hs,Gs,Vs,ks,Ws,Xs,Wa,Kr,hr,Ui,An,la,ca,ha,br,wr,zr,Xa,Rn,Cn,Hr,Pt,Pn,zd,Nr,gh,_h,gt,Hd,ja,qs,Na,Gd,wi,Ys,ua,_i,qa,Wt,Mi,Ks,Vd,kd,Rr,Wd,Da,ur,Zs,Ln,Nn,nl,hs,nc,Gr,Dn,sc,In,Un,On,Js,Fn,oc,Bn,hi,xh,lc,da,cc,Hn,hc,jd,Ya,Ka,on,Vr,qd,Gn,nn,uc,Yd,us,dc,Wo,Vn,kn,sl,Sh,Pa,yh,Eh,Ri,bh,Si,Rh,Ph,ol,Zd,Jd,Qd,jr,$d,Ih,ep,tp,ln,ip,rp,ap,np,Ji,cn,lp,cp,hp,Oh,hn,up,dp,pp,fp,ll,Fh,Qs,_c,vc,Bh,Xn,jn,ki,zh,Ar,xc,Mc,vi,mp,Hh,Gh,gp,Vh,fa,ma,Xo,_p,cl,vp,hl,xp,Mp,Sp,yp,Ep,Tp,bp,wp,Tt,Y0,Sc,kh,ba,K0,Cp,Pp,Lp,Np,Dp,Ip,Up,Op,Fp,Bp,zp,Hp,Gp,Vp,kp,Wp,Xp,jp,qp,Yp,Kp,Zp,Jp,Qp,$p,ef,tf,rf,af,nf,sf,of,lf,cf,hf,uf,df,pf,ff,mf,gf,_f,vf,xf,Mf,Sf,yf,Ef,Tf,bf,wf,Af,Rf,Cf,Pf,Lf,Nf,Df,If,Uf,Of,Ff,Bf,zf,Hf,Gf,Vf,kf,Wf,Xf,jf,qf,Yf,Kf,Zf,Jf,Qf,$f,em,tm,im,rm,am,nm,sm,om,lm,cm,hm,um,dm,pm,fm,mm,gm,_m,vm,xm,Mm,Sm,ym,Em,Tm,bm,wm,Am,Rm,Cm,Pm,Lm,Nm,Dm,Im,Um,Om,Fm,Bm,zm,Hm,Gm,Vm,km,Wm,Xm,jm,qm,Ym,Km,Zm,Jm,Qm,$m,eg,tg,ig,rg,ag,ng,sg,og,lg,Xe,xe,Xi,qn,cg,Xh,ul,Tc,mg,gg,jh,qh,_g,vg,xg,bc,Pg,Kh,Zh,Jh,Qh,$h,eu,Cc,Pc,Lc,Nc,Dc,v_,x_,M_,$s,rs,y_,E_,Oc,A_,Yn,D_,U_,F_,z_,G_,W_,X_,j_,e0,a0,n0,s0,o0,Xc,Za,eo,d0,p0,f0,m0,g0,tu,x0,Wi,iu,ru=xn(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */Bu=0,Fl=1,zu=2,Kn=1,Hu=2,Ja=3,Wr=0,Qt=1,dr=2,xa=0,$a=1,Bl=2,zl=3,Hl=4,Gu=5,ga=100,Vu=101,ku=102,Wu=103,Xu=104,ju=200,qu=201,Yu=202,Ku=203,jc=204,qc=205,Zu=206,Ju=207,Qu=208,$u=209,ed=210,td=211,id=212,rd=213,ad=214,to=0,io=1,ro=2,en=3,ao=4,no=5,so=6,oo=7,Yo=0,nd=1,sd=2,fr=0,Yc=1,Kc=2,Zc=3,Jc=4,Qc=5,$c=6,eh=7,th=300,wa=301,tn=302,bs=303,ws=304,lo=1e3,pr=1001,co=1002,Yt=1003,od=1004,En=1005,ci=1006,As=1007,Pr=1008,xi=1009,ih=1010,rh=1011,rn=1012,Ko=1013,Ki=1014,Oi=1015,Zi=1016,Zo=1017,Jo=1018,Aa=1020,ah=35902,nh=35899,sh=1021,oh=1022,ji=1023,Dr=1026,Lr=1027,Qo=1028,$o=1029,Xr=1030,el=1031,tl=1033,Zn=33776,Jn=33777,Qn=33778,$n=33779,ho=35840,uo=35841,po=35842,fo=35843,mo=36196,go=37492,_o=37496,vo=37488,xo=37489,as=37490,Mo=37491,So=37808,yo=37809,Eo=37810,To=37811,bo=37812,wo=37813,Ao=37814,Ro=37815,Co=37816,Po=37817,Lo=37818,No=37819,Do=37820,Io=37821,Uo=36492,Oo=36494,Fo=36495,Bo=36283,zo=36284,ns=36285,Ho=36286,ss=2300,Go=2301,Rs=2302,Gl=2303,Vl=2400,kl=2401,Wl=2402,ld=3200,Vo=0,cd=1,Cr="",Ai="srgb",os="srgb-linear",ls="linear",pt="srgb",Cs=7680,hd=519,ud=512,dd=513,pd=514,lh=515,fd=516,md=517,ch=518,hh=519,gd=35044,Xl="300 es",Fi=2e3,an=2001;jl={},Ra=null;Sd={[to]:to,[ro]:so,[ao]:ao,[en]:no,[io]:io,[so]:ro,[oo]:oo,[no]:en},qr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ps=Math.PI/180,ko=180/Math.PI;rt=(Sa=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Sa.prototype.isVector2=!0,Sa),Yr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],c=i[r+1],l=i[r+2],h=i[r+3],p=a[n+0],u=a[n+1],g=a[n+2],x=a[n+3];if(h!==x||o!==p||c!==u||l!==g){let M=o*p+c*u+l*g+h*x;M<0&&(p=-p,u=-u,g=-g,x=-x,M=-M);let m=1-s;if(M<.9995){let d=Math.acos(M),E=Math.sin(d);m=Math.sin(m*d)/E,s=Math.sin(s*d)/E,o=o*m+p*s,c=c*m+u*s,l=l*m+g*s,h=h*m+x*s}else{o=o*m+p*s,c=c*m+u*s,l=l*m+g*s,h=h*m+x*s;let d=1/Math.sqrt(o*o+c*c+l*l+h*h);o*=d,c*=d,l*=d,h*=d}}e[t]=o,e[t+1]=c,e[t+2]=l,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],c=i[r+2],l=i[r+3],h=a[n],p=a[n+1],u=a[n+2],g=a[n+3];return e[t]=s*g+l*h+o*u-c*p,e[t+1]=o*g+l*p+c*h-s*u,e[t+2]=c*g+l*u+s*p-o*h,e[t+3]=l*g-s*h-o*p-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,c=s(i/2),l=s(r/2),h=s(a/2),p=o(i/2),u=o(r/2),g=o(a/2);switch(n){case"XYZ":this._x=p*l*h+c*u*g,this._y=c*u*h-p*l*g,this._z=c*l*g+p*u*h,this._w=c*l*h-p*u*g;break;case"YXZ":this._x=p*l*h+c*u*g,this._y=c*u*h-p*l*g,this._z=c*l*g-p*u*h,this._w=c*l*h+p*u*g;break;case"ZXY":this._x=p*l*h-c*u*g,this._y=c*u*h+p*l*g,this._z=c*l*g+p*u*h,this._w=c*l*h-p*u*g;break;case"ZYX":this._x=p*l*h-c*u*g,this._y=c*u*h+p*l*g,this._z=c*l*g-p*u*h,this._w=c*l*h+p*u*g;break;case"YZX":this._x=p*l*h+c*u*g,this._y=c*u*h+p*l*g,this._z=c*l*g-p*u*h,this._w=c*l*h-p*u*g;break;case"XZY":this._x=p*l*h-c*u*g,this._y=c*u*h-p*l*g,this._z=c*l*g+p*u*h,this._w=c*l*h+p*u*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],c=t[2],l=t[6],h=t[10],p=i+s+h;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(l-o)*u,this._y=(a-c)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(l-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+c)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-c)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+l)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+c)/u,this._y=(o+l)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,c=t._z,l=t._w;return this._x=i*l+n*s+r*c-a*o,this._y=r*l+n*o+a*s-i*c,this._z=a*l+n*c+i*o-r*s,this._w=n*l-i*s-r*o-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let c=Math.acos(s),l=Math.sin(c);o=Math.sin(o*c)/l,t=Math.sin(t*c)/l,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=(ya=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Yl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,c=t.w,l=2*(s*a-o*r),h=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+c*l+s*p-o*h,this.y=r+c*h+o*l-n*p,this.z=a+c*p+n*h-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,c=i.z;return this.x=a*c-n*o,this.y=n*s-r*c,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ns.copy(this).projectOnVector(t),this.sub(Ns)}reflect(t){return this.sub(Ns.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos($e(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ya.prototype.isVector3=!0,ya),Ns=new H,Yl=new Yr,Ve=(Ea=class{constructor(t,i,r,a,n,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,c,l)}set(t,i,r,a,n,s,o,c,l){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=c,h[6]=r,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],c=r[6],l=r[1],h=r[4],p=r[7],u=r[2],g=r[5],x=r[8],M=a[0],m=a[3],d=a[6],E=a[1],A=a[4],y=a[7],b=a[2],R=a[5],f=a[8];return n[0]=s*M+o*E+c*b,n[3]=s*m+o*A+c*R,n[6]=s*d+o*y+c*f,n[1]=l*M+h*E+p*b,n[4]=l*m+h*A+p*R,n[7]=l*d+h*y+p*f,n[2]=u*M+g*E+x*b,n[5]=u*m+g*A+x*R,n[8]=u*d+g*y+x*f,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return i*s*h-i*o*l-r*n*h+r*o*c+a*n*l-a*s*c}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=h*s-o*l,u=o*c-h*n,g=l*n-s*c,x=i*p+r*u+a*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=p*M,t[1]=(a*l-h*r)*M,t[2]=(o*r-a*s)*M,t[3]=u*M,t[4]=(h*i-a*c)*M,t[5]=(a*n-o*i)*M,t[6]=g*M,t[7]=(r*c-l*i)*M,t[8]=(s*i-r*n)*M,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let c=Math.cos(n),l=Math.sin(n);return this.set(r*c,r*l,-r*(c*s+l*o)+s+t,-a*l,a*c,-a*(-l*s+c*o)+o+i,0,0,1),this}scale(t,i){return es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ds.makeScale(t,i)),this}rotate(t){return es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ds.makeRotation(-t)),this}translate(t,i){return es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ds.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ea.prototype.isMatrix3=!0,Ea),Ds=new Ve,Kl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe=wd();Ad=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ia===void 0&&(ia=cs("canvas")),ia.width=e.width,ia.height=e.height;let r=ia.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ia}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=cs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=mr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(mr(t[i]/255)*255):t[i]=mr(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rd=0,rl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Is(r[n].image)):a.push(Is(r[n]))}else a=Is(r);i.url=a}return t||(e.images[this.uuid]=i),i}};Cd=0,Us=new H,Bi=class ts extends qr{constructor(t=ts.DEFAULT_IMAGE,i=ts.DEFAULT_MAPPING,r=pr,a=pr,n=ci,s=Pr,o=ji,c=xi,l=ts.DEFAULT_ANISOTROPY,h=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=sn(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Us).x}get height(){return this.source.getSize(Us).y}get depth(){return this.source.getSize(Us).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Oe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case pr:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case pr:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bi.DEFAULT_IMAGE=null;Bi.DEFAULT_MAPPING=th;Bi.DEFAULT_ANISOTROPY=1;wt=(Ta=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],c=s[4],l=s[8],h=s[1],p=s[5],u=s[9],g=s[2],x=s[6],M=s[10];if(Math.abs(c-h)<.01&&Math.abs(l-g)<.01&&Math.abs(u-x)<.01){if(Math.abs(c+h)<.1&&Math.abs(l+g)<.1&&Math.abs(u+x)<.1&&Math.abs(o+p+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let d=(o+1)/2,E=(p+1)/2,A=(M+1)/2,y=(c+h)/4,b=(l+g)/4,R=(u+x)/4;return d>E&&d>A?d<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(d),a=y/r,n=b/r):E>A?E<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(E),r=y/a,n=R/a):A<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(A),r=b/n,a=R/n),this.set(r,a,n,i),this}let m=Math.sqrt((x-u)*(x-u)+(l-g)*(l-g)+(h-c)*(h-c));return Math.abs(m)<.001&&(m=1),this.x=(x-u)/m,this.y=(l-g)/m,this.z=(h-c)/m,this.w=Math.acos((o+p+M-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=$e(this.x,t.x,i.x),this.y=$e(this.y,t.y,i.y),this.z=$e(this.z,t.z,i.z),this.w=$e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=$e(this.x,t,i),this.y=$e(this.y,t,i),this.z=$e(this.z,t,i),this.w=$e(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar($e(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta.prototype.isVector4=!0,Ta),Pd=class extends qr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new Bi({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new rl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yi=class extends Pd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},dh=class extends Bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ld=class extends Bi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},mt=(kr=class{constructor(t,i,r,a,n,s,o,c,l,h,p,u,g,x,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,c,l,h,p,u,g,x,M,m)}set(t,i,r,a,n,s,o,c,l,h,p,u,g,x,M,m){let d=this.elements;return d[0]=t,d[4]=i,d[8]=r,d[12]=a,d[1]=n,d[5]=s,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=p,d[14]=u,d[3]=g,d[7]=x,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/ra.setFromMatrixColumn(t,0).length(),n=1/ra.setFromMatrixColumn(t,1).length(),s=1/ra.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(a),l=Math.sin(a),h=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let u=s*h,g=s*p,x=o*h,M=o*p;i[0]=c*h,i[4]=-c*p,i[8]=l,i[1]=g+x*l,i[5]=u-M*l,i[9]=-o*c,i[2]=M-u*l,i[6]=x+g*l,i[10]=s*c}else if(t.order==="YXZ"){let u=c*h,g=c*p,x=l*h,M=l*p;i[0]=u+M*o,i[4]=x*o-g,i[8]=s*l,i[1]=s*p,i[5]=s*h,i[9]=-o,i[2]=g*o-x,i[6]=M+u*o,i[10]=s*c}else if(t.order==="ZXY"){let u=c*h,g=c*p,x=l*h,M=l*p;i[0]=u-M*o,i[4]=-s*p,i[8]=x+g*o,i[1]=g+x*o,i[5]=s*h,i[9]=M-u*o,i[2]=-s*l,i[6]=o,i[10]=s*c}else if(t.order==="ZYX"){let u=s*h,g=s*p,x=o*h,M=o*p;i[0]=c*h,i[4]=x*l-g,i[8]=u*l+M,i[1]=c*p,i[5]=M*l+u,i[9]=g*l-x,i[2]=-l,i[6]=o*c,i[10]=s*c}else if(t.order==="YZX"){let u=s*c,g=s*l,x=o*c,M=o*l;i[0]=c*h,i[4]=M-u*p,i[8]=x*p+g,i[1]=p,i[5]=s*h,i[9]=-o*h,i[2]=-l*h,i[6]=g*p+x,i[10]=u-M*p}else if(t.order==="XZY"){let u=s*c,g=s*l,x=o*c,M=o*l;i[0]=c*h,i[4]=-p,i[8]=l*h,i[1]=u*p+M,i[5]=s*h,i[9]=g*p-x,i[2]=x*p-g,i[6]=o*h,i[10]=M*p+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Dd)}lookAt(t,i,r){let a=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Er.crossVectors(r,gi),Er.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Er.crossVectors(r,gi)),Er.normalize(),Tn.crossVectors(gi,Er),a[0]=Er.x,a[4]=Tn.x,a[8]=gi.x,a[1]=Er.y,a[5]=Tn.y,a[9]=gi.y,a[2]=Er.z,a[6]=Tn.z,a[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],c=r[8],l=r[12],h=r[1],p=r[5],u=r[9],g=r[13],x=r[2],M=r[6],m=r[10],d=r[14],E=r[3],A=r[7],y=r[11],b=r[15],R=a[0],f=a[4],S=a[8],C=a[12],V=a[1],I=a[5],P=a[9],q=a[13],N=a[2],k=a[6],K=a[10],G=a[14],de=a[3],j=a[7],Z=a[11],se=a[15];return n[0]=s*R+o*V+c*N+l*de,n[4]=s*f+o*I+c*k+l*j,n[8]=s*S+o*P+c*K+l*Z,n[12]=s*C+o*q+c*G+l*se,n[1]=h*R+p*V+u*N+g*de,n[5]=h*f+p*I+u*k+g*j,n[9]=h*S+p*P+u*K+g*Z,n[13]=h*C+p*q+u*G+g*se,n[2]=x*R+M*V+m*N+d*de,n[6]=x*f+M*I+m*k+d*j,n[10]=x*S+M*P+m*K+d*Z,n[14]=x*C+M*q+m*G+d*se,n[3]=E*R+A*V+y*N+b*de,n[7]=E*f+A*I+y*k+b*j,n[11]=E*S+A*P+y*K+b*Z,n[15]=E*C+A*q+y*G+b*se,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],c=t[9],l=t[13],h=t[2],p=t[6],u=t[10],g=t[14],x=t[3],M=t[7],m=t[11],d=t[15],E=c*g-l*u,A=o*g-l*p,y=o*u-c*p,b=s*g-l*h,R=s*u-c*h,f=s*p-o*h;return i*(M*E-m*A+d*y)-r*(x*E-m*b+d*R)+a*(x*A-M*b+d*f)-n*(x*y-M*R+m*f)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return i*(s*h-o*l)-r*(n*h-o*c)+a*(n*l-s*c)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],c=t[6],l=t[7],h=t[8],p=t[9],u=t[10],g=t[11],x=t[12],M=t[13],m=t[14],d=t[15],E=i*o-r*s,A=i*c-a*s,y=i*l-n*s,b=r*c-a*o,R=r*l-n*o,f=a*l-n*c,S=h*M-p*x,C=h*m-u*x,V=h*d-g*x,I=p*m-u*M,P=p*d-g*M,q=u*d-g*m,N=E*q-A*P+y*I+b*V-R*C+f*S;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*q-c*P+l*I)*k,t[1]=(a*P-r*q-n*I)*k,t[2]=(M*f-m*R+d*b)*k,t[3]=(u*R-p*f-g*b)*k,t[4]=(c*V-s*q-l*C)*k,t[5]=(i*q-a*V+n*C)*k,t[6]=(m*y-x*f-d*A)*k,t[7]=(h*f-u*y+g*A)*k,t[8]=(s*P-o*V+l*S)*k,t[9]=(r*V-i*P-n*S)*k,t[10]=(x*R-M*y+d*E)*k,t[11]=(p*y-h*R-g*E)*k,t[12]=(o*C-s*I-c*S)*k,t[13]=(i*I-r*C+a*S)*k,t[14]=(M*A-x*b-m*E)*k,t[15]=(h*b-p*A+u*E)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,c=t.z,l=n*s,h=n*o;return this.set(l*s+r,l*o-a*c,l*c+a*o,0,l*o+a*c,h*o+r,h*c-a*s,0,l*c-a*o,h*c+a*s,n*c*c+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,c=i._w,l=n+n,h=s+s,p=o+o,u=n*l,g=n*h,x=n*p,M=s*h,m=s*p,d=o*p,E=c*l,A=c*h,y=c*p,b=r.x,R=r.y,f=r.z;return a[0]=(1-(M+d))*b,a[1]=(g+y)*b,a[2]=(x-A)*b,a[3]=0,a[4]=(g-y)*R,a[5]=(1-(u+d))*R,a[6]=(m+E)*R,a[7]=0,a[8]=(x+A)*f,a[9]=(m-E)*f,a[10]=(1-(u+M))*f,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=ra.set(a[0],a[1],a[2]).length(),o=ra.set(a[4],a[5],a[6]).length(),c=ra.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Di.copy(this);let l=1/s,h=1/o,p=1/c;return Di.elements[0]*=l,Di.elements[1]*=l,Di.elements[2]*=l,Di.elements[4]*=h,Di.elements[5]*=h,Di.elements[6]*=h,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,i.setFromRotationMatrix(Di),r.x=s,r.y=o,r.z=c,this}makePerspective(t,i,r,a,n,s,o=Fi,c=!1){let l=this.elements,h=2*n/(i-t),p=2*n/(r-a),u=(i+t)/(i-t),g=(r+a)/(r-a),x,M;if(c)x=n/(s-n),M=s*n/(s-n);else if(o===Fi)x=-(s+n)/(s-n),M=-2*s*n/(s-n);else if(o===an)x=-s/(s-n),M=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Fi,c=!1){let l=this.elements,h=2/(i-t),p=2/(r-a),u=-(i+t)/(i-t),g=-(r+a)/(r-a),x,M;if(c)x=1/(s-n),M=s/(s-n);else if(o===Fi)x=-2/(s-n),M=-(s+n)/(s-n);else if(o===an)x=-1/(s-n),M=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=x,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},kr.prototype.isMatrix4=!0,kr),ra=new H,Di=new mt,Nd=new H(0,0,0),Dd=new H(1,1,1),Er=new H,Tn=new H,gi=new H,Jl=new mt,Ql=new Yr,Ca=class ph{constructor(t=0,i=0,r=0,a=ph.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],c=a[1],l=a[5],h=a[9],p=a[2],u=a[6],g=a[10];switch(i){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,g),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Jl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ca.DEFAULT_ORDER="XYZ";al=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Id=0,$l=new H,aa=new Yr,or=new mt,bn=new H,ka=new H,Ud=new H,Od=new Yr,ec=new H(1,0,0),tc=new H(0,1,0),ic=new H(0,0,1),rc={type:"added"},Fd={type:"removed"},na={type:"childadded",child:null},Os={type:"childremoved",child:null},$t=class is extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=is.DEFAULT_UP.clone();let t=new H,i=new Ca,r=new Yr,a=new H(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ve}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=is.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=is.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return aa.setFromAxisAngle(t,i),this.quaternion.multiply(aa),this}rotateOnWorldAxis(t,i){return aa.setFromAxisAngle(t,i),this.quaternion.premultiply(aa),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,i){return $l.copy(t).applyQuaternion(this.quaternion),this.position.add($l.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?bn.copy(t):bn.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(ka,bn,this.up):or.lookAt(bn,ka,this.up),this.quaternion.setFromRotationMatrix(or),a&&(or.extractRotation(a.matrixWorld),aa.setFromRotationMatrix(or),this.quaternion.premultiply(aa.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rc),na.child=t,this.dispatchEvent(na),na.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Fd),Os.child=t,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),or.multiply(t.parent.matrixWorld)),t.applyMatrix4(or),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rc),na.child=t,this.dispatchEvent(na),na.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];n(t.shapes,p)}else n(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(n(t.materials,this.material[c]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];a.animations.push(n(t.animations,c))}}if(i){let o=s(t.geometries),c=s(t.materials),l=s(t.textures),h=s(t.images),p=s(t.shapes),u=s(t.skeletons),g=s(t.animations),x=s(t.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),l.length>0&&(r.textures=l),h.length>0&&(r.images=h),p.length>0&&(r.shapes=p),u.length>0&&(r.skeletons=u),g.length>0&&(r.animations=g),x.length>0&&(r.nodes=x)}return r.object=a,r;function s(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};$t.DEFAULT_UP=new H(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;qi=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(let x of e.hand.values()){let M=t.getJointPose(x,i),m=this._getHandJoint(c,x);M!==null&&(m.matrix.fromArray(M.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=M.radius),m.visible=M!==null}let l=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=l.position.distanceTo(h.position),u=.02,g=.005;c.inputState.pinching&&p>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new qi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},wn={h:0,s:0,l:0};Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=yd(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Bs(n,a,e+1/3),this.g=Bs(n,a,e),this.b=Bs(n,a,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Ai){function i(a){a!==void 0&&parseFloat(a)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){let i=fh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return Qe.workingToColorSpace(Jt.copy(this),e),Math.round($e(Jt.r*255,0,255))*65536+Math.round($e(Jt.g*255,0,255))*256+Math.round($e(Jt.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Jt.copy(this),t);let i=Jt.r,r=Jt.g,a=Jt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,c,l=(s+n)/2;if(s===n)o=0,c=0;else{let h=n-s;switch(c=l<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=c,e.l=l,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ai){Qe.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,r=Jt.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(wn);let i=Ls(Tr.h,wn.h,t),r=Ls(Tr.s,wn.s,t),a=Ls(Tr.l,wn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ge;Ge.NAMES=fh;mh=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ii=new H,lr=new H,zs=new H,cr=new H,sa=new H,oa=new H,ac=new H,Hs=new H,Gs=new H,Vs=new H,ks=new wt,Ws=new wt,Xs=new wt,Wa=class _a{constructor(t=new H,i=new H,r=new H){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),Ii.subVectors(t,i),a.cross(Ii);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){Ii.subVectors(a,i),lr.subVectors(r,i),zs.subVectors(t,i);let s=Ii.dot(Ii),o=Ii.dot(lr),c=Ii.dot(zs),l=lr.dot(lr),h=lr.dot(zs),p=s*l-o*o;if(p===0)return n.set(0,0,0),null;let u=1/p,g=(l*c-o*h)*u,x=(s*h-o*c)*u;return n.set(1-g-x,x,g)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(t,i,r,a,n,s,o,c){return this.getBarycoord(t,i,r,a,cr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,cr.x),c.addScaledVector(s,cr.y),c.addScaledVector(o,cr.z),c)}static getInterpolatedAttribute(t,i,r,a,n,s){return ks.setScalar(0),Ws.setScalar(0),Xs.setScalar(0),ks.fromBufferAttribute(t,i),Ws.fromBufferAttribute(t,r),Xs.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ks,n.x),s.addScaledVector(Ws,n.y),s.addScaledVector(Xs,n.z),s}static isFrontFacing(t,i,r,a){return Ii.subVectors(r,i),lr.subVectors(t,i),Ii.cross(lr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Ii.cross(lr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _a.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _a.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return _a.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return _a.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _a.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;sa.subVectors(a,r),oa.subVectors(n,r),Hs.subVectors(t,r);let c=sa.dot(Hs),l=oa.dot(Hs);if(c<=0&&l<=0)return i.copy(r);Gs.subVectors(t,a);let h=sa.dot(Gs),p=oa.dot(Gs);if(h>=0&&p<=h)return i.copy(a);let u=c*p-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return s=c/(c-h),i.copy(r).addScaledVector(sa,s);Vs.subVectors(t,n);let g=sa.dot(Vs),x=oa.dot(Vs);if(x>=0&&g<=x)return i.copy(n);let M=g*l-c*x;if(M<=0&&l>=0&&x<=0)return o=l/(l-x),i.copy(r).addScaledVector(oa,o);let m=h*x-g*p;if(m<=0&&p-h>=0&&g-x>=0)return ac.subVectors(n,a),o=(p-h)/(p-h+(g-x)),i.copy(a).addScaledVector(ac,o);let d=1/(m+M+u);return s=M*d,o=u*d,i.copy(r).addScaledVector(sa,s).addScaledVector(oa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Ui):Ui.fromBufferAttribute(a,n),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),An.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),An.copy(i.boundingBox)),An.applyMatrix4(e.matrixWorld),this.union(An)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Rn.subVectors(this.max,Xa),la.subVectors(e.a,Xa),ca.subVectors(e.b,Xa),ha.subVectors(e.c,Xa),br.subVectors(ca,la),wr.subVectors(ha,ca),zr.subVectors(la,ha);let t=[0,-br.z,br.y,0,-wr.z,wr.y,0,-zr.z,zr.y,br.z,0,-br.x,wr.z,0,-wr.x,zr.z,0,-zr.x,-br.y,br.x,0,-wr.y,wr.x,0,-zr.y,zr.x,0];return!js(t,la,ca,ha,Rn)||(t=[1,0,0,0,1,0,0,0,1],!js(t,la,ca,ha,Rn))?!1:(Cn.crossVectors(br,wr),t=[Cn.x,Cn.y,Cn.z],js(t,la,ca,ha,Rn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hr=[new H,new H,new H,new H,new H,new H,new H,new H],Ui=new H,An=new Kr,la=new H,ca=new H,ha=new H,br=new H,wr=new H,zr=new H,Xa=new H,Rn=new H,Cn=new H,Hr=new H;Pt=new H,Pn=new rt,zd=0,Nr=class extends qr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gd,this.updateRanges=[],this.gpuType=Oi,this.version=0,this._normalizationScale=e!==void 0?il(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix3(e),this.setXY(t,Pn.x,Pn.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Td(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):bd(e,this.array)}},gh=class extends Nr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},_h=class extends Nr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},gt=class extends Nr{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hd=new Kr,ja=new H,qs=new H,Na=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Hd.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);let t=ja.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ja,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(qs)),this.expandByPoint(ja.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gd=0,wi=new mt,Ys=new $t,ua=new H,_i=new Kr,qa=new Kr,Wt=new H,Mi=class vh extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?_h:gh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ve().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,r){return wi.makeTranslation(t,i,r),this.applyMatrix4(wi),this}scale(t,i,r){return wi.makeScale(t,i,r),this.applyMatrix4(wi),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new gt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];_i.setFromBufferAttribute(n),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Na);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let r=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];qa.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(_i.min,qa.min),_i.expandByPoint(Wt),Wt.addVectors(_i.max,qa.max),_i.expandByPoint(Wt)):(_i.expandByPoint(qa.min),_i.expandByPoint(qa.max))}_i.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Wt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Wt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Wt.fromBufferAttribute(o,l),c&&(ua.fromBufferAttribute(t,l),Wt.add(ua)),a=Math.max(a,r.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Nr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],c=[],l=new Uint8Array(r.count);for(let C=0;C<r.count;C++)o[C]=new H,c[C]=new H;let h=new H,p=new H,u=new H,g=new rt,x=new rt,M=new rt,m=new H,d=new H;function E(C,V,I){l[C]=l[V]=l[I]=1,h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,V),u.fromBufferAttribute(r,I),g.fromBufferAttribute(n,C),x.fromBufferAttribute(n,V),M.fromBufferAttribute(n,I),p.sub(h),u.sub(h),x.sub(g),M.sub(g);let P=1/(x.x*M.y-M.x*x.y);isFinite(P)&&(m.copy(p).multiplyScalar(M.y).addScaledVector(u,-x.y).multiplyScalar(P),d.copy(u).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(P),o[C].add(m),o[V].add(m),o[I].add(m),c[C].add(d),c[V].add(d),c[I].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let C=0,V=A.length;C<V;++C){let I=A[C],P=I.start,q=I.count;for(let N=P,k=P+q;N<k;N+=3)E(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let y=new H,b=new H,R=new H,f=new H;function S(C){R.fromBufferAttribute(a,C),f.copy(R);let V=o[C];y.copy(V),y.sub(R.multiplyScalar(R.dot(V))).normalize(),b.crossVectors(f,V);let I=b.dot(c[C])<0?-1:1;s.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,V=r.count;C<V;++C)l[C]&&S(C);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Nr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,g=r.count;u<g;u++)r.setXYZ(u,0,0,0);let a=new H,n=new H,s=new H,o=new H,c=new H,l=new H,h=new H,p=new H;if(t)for(let u=0,g=t.count;u<g;u+=3){let x=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,M),s.fromBufferAttribute(i,m),h.subVectors(s,n),p.subVectors(a,n),h.cross(p),o.fromBufferAttribute(r,x),c.fromBufferAttribute(r,M),l.fromBufferAttribute(r,m),o.add(h),c.add(h),l.add(h),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,g=i.count;u<g;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),p.subVectors(a,n),h.cross(p),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Wt.fromBufferAttribute(t,i),Wt.normalize(),t.setXYZ(i,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,p=o.normalized,u=new l.constructor(c.length*h),g=0,x=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?g=c[M]*o.data.stride+o.offset:g=c[M]*h;for(let d=0;d<h;d++)u[x++]=l[g++]}return new Nr(u,h,p)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new vh,r=this.index.array,a=this.attributes;for(let o in a){let c=a[o],l=t(c,r);i.setAttribute(o,l)}let n=this.morphAttributes;for(let o in n){let c=[],l=n[o];for(let h=0,p=l.length;h<p;h++){let u=l[h],g=t(u,r);c.push(g)}i.morphAttributes[o]=c}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let l=s[o];i.addGroup(l.start,l.count,l.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let c in r){let l=r[c];t.data.attributes[c]=l.toJSON(t.data)}let a={},n=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){let g=l[p];h.push(g.toJSON(t.data))}h.length>0&&(a[c]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let l in a){let h=a[l];this.setAttribute(l,h.clone(i))}let n=t.morphAttributes;for(let l in n){let h=[],p=n[l];for(let u=0,g=p.length;u<g;u++)h.push(p[u].clone(i));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let l=0,h=s.length;l<h;l++){let p=s[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ks=new H,Vd=new H,kd=new Ve,Rr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ks.subVectors(i,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Ks),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||kd.getNormalMatrix(e),r=this.coplanarPoint(Ks).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Wd=0,Da=class extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=$a,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=qc,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=en,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Rr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new rt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ur=new H,Zs=new H,Ln=new H,Nn=new H,nl=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zs.copy(e).add(t).multiplyScalar(.5),Ln.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Zs);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Ln),s=Nn.dot(this.direction),o=-Nn.dot(Ln),c=Nn.lengthSq(),l=Math.abs(1-n*n),h,p,u,g;if(l>0)if(h=n*o-s,p=n*s-o,g=a*l,h>=0)if(p>=-g)if(p<=g){let x=1/l;h*=x,p*=x,u=h*(h+n*p+2*s)+p*(n*h+p+2*o)+c}else p=a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+c;else p=-a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+c;else p<=-g?(h=Math.max(0,-(-n*a+s)),p=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+p*(p+2*o)+c):p<=g?(h=0,p=Math.min(Math.max(-a,-o),a),u=p*(p+2*o)+c):(h=Math.max(0,-(n*a+s)),p=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+p*(p+2*o)+c);else p=n>0?-a:a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zs).addScaledVector(Ln,p),u}intersectSphere(e,t){if(e.radius<0)return null;ur.subVectors(e.center,this.origin);let i=ur.dot(this.direction),r=ur.dot(ur)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,c=1/this.direction.x,l=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),l>=0?(a=(e.min.y-p.y)*l,n=(e.max.y-p.y)*l):(a=(e.max.y-p.y)*l,n=(e.min.y-p.y)*l),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-p.z)*h,o=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,o=(e.min.z-p.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,c=s.y,l=s.z,h=e.x-n.x,p=e.y-n.y,u=e.z-n.z,g=t.x-n.x,x=t.y-n.y,M=t.z-n.z,m=i.x-n.x,d=i.y-n.y,E=i.z-n.z,A=Math.abs(o),y=Math.abs(c),b=Math.abs(l),R,f,S,C,V,I,P,q,N,k,K,G;if(A>=y&&A>=b?(S=o,I=h,N=g,G=m,o>=0?(R=c,f=l,C=p,V=u,P=x,q=M,k=d,K=E):(R=l,f=c,C=u,V=p,P=M,q=x,k=E,K=d)):y>=b?(S=c,I=p,N=x,G=d,c>=0?(R=l,f=o,C=u,V=h,P=M,q=g,k=E,K=m):(R=o,f=l,C=h,V=u,P=g,q=M,k=m,K=E)):(S=l,I=u,N=M,G=E,l>=0?(R=o,f=c,C=h,V=p,P=g,q=x,k=m,K=d):(R=c,f=o,C=p,V=h,P=x,q=g,k=d,K=m)),S===0)return null;let de=R/S,j=f/S,Z=1/S,se=C-de*I,Pe=V-j*I,Q=P-de*N,ae=q-j*N,Ee=k-de*G,Ce=K-j*G,Le=Ee*ae-Ce*Q,le=se*Ce-Pe*Ee,ke=Q*Pe-ae*se;if(r){if(Le<0||le<0||ke<0)return null}else if((Le<0||le<0||ke<0)&&(Le>0||le>0||ke>0))return null;let et=Le+le+ke;if(et===0)return null;let De=Z*(Le*I+le*N+ke*G);return(et>0?De<0:De>0)?null:this.at(De/et,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hs=class extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nc=new mt,Gr=new nl,Dn=new Na,sc=new H,In=new H,Un=new H,On=new H,Js=new H,Fn=new H,oc=new H,Bn=new H,hi=class extends $t{constructor(e=new Mi,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){Fn.set(0,0,0);for(let o=0,c=a.length;o<c;o++){let l=s[o],h=a[o];l!==0&&(Js.fromBufferAttribute(h,e),n?Fn.addScaledVector(Js,l):Fn.addScaledVector(Js.sub(t),l))}t.add(Fn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dn.copy(i.boundingSphere),Dn.applyMatrix4(a),Gr.copy(e.ray).recast(e.near),!(Dn.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(Dn,sc)===null||Gr.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(nc.copy(a).invert(),Gr.copy(e.ray).applyMatrix4(nc),!(i.boundingBox!==null&&Gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,c=a.attributes.uv,l=a.attributes.uv1,h=a.attributes.normal,p=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let g=0,x=p.length;g<x;g++){let M=p[g],m=n[M.materialIndex],d=Math.max(M.start,u.start),E=Math.min(s.count,Math.min(M.start+M.count,u.start+u.count));for(let A=d,y=E;A<y;A+=3){let b=s.getX(A),R=s.getX(A+1),f=s.getX(A+2);r=zn(this,m,e,i,c,l,h,b,R,f),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let g=Math.max(0,u.start),x=Math.min(s.count,u.start+u.count);for(let M=g,m=x;M<m;M+=3){let d=s.getX(M),E=s.getX(M+1),A=s.getX(M+2);r=zn(this,n,e,i,c,l,h,d,E,A),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let g=0,x=p.length;g<x;g++){let M=p[g],m=n[M.materialIndex],d=Math.max(M.start,u.start),E=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let A=d,y=E;A<y;A+=3){let b=A,R=A+1,f=A+2;r=zn(this,m,e,i,c,l,h,b,R,f),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let M=g,m=x;M<m;M+=3){let d=M,E=M+1,A=M+2;r=zn(this,n,e,i,c,l,h,d,E,A),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}};xh=class extends Bi{constructor(e=null,t=1,i=1,r,a,n,s,o,c=Yt,l=Yt,h,p){super(null,n,s,o,c,l,r,a,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lc=class extends Nr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},da=new mt,cc=new mt,Hn=[],hc=new Kr,jd=new mt,Ya=new hi,Ka=new Na,on=class extends hi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,jd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,da),hc.copy(e.boundingBox).applyMatrix4(da),this.boundingBox.union(hc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Na),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,da),Ka.copy(e.boundingSphere).applyMatrix4(da),this.boundingSphere.union(Ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Ya.geometry=this.geometry,Ya.material=this.material,Ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ka.copy(this.boundingSphere),Ka.applyMatrix4(i),e.ray.intersectsSphere(Ka)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,da),cc.multiplyMatrices(i,da),Ya.matrixWorld=cc,Ya.raycast(e,Hn);for(let n=0,s=Hn.length;n<s;n++){let o=Hn[n];o.instanceId=a,o.object=this,t.push(o)}Hn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new xh(new Float32Array(r*this.count),r,this.count,Qo,Oi));let a=this.morphTexture.source.data.data,n=0;for(let c=0;c<i.length;c++)n+=i[c];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vr=new Na,qd=new rt(.5,.5),Gn=new H,nn=class{constructor(e=new Rr,t=new Rr,i=new Rr,r=new Rr,a=new Rr,n=new Rr){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],c=a[3],l=a[4],h=a[5],p=a[6],u=a[7],g=a[8],x=a[9],M=a[10],m=a[11],d=a[12],E=a[13],A=a[14],y=a[15];if(r[0].setComponents(c-n,u-l,m-g,y-d).normalize(),r[1].setComponents(c+n,u+l,m+g,y+d).normalize(),r[2].setComponents(c+s,u+h,m+x,y+E).normalize(),r[3].setComponents(c-s,u-h,m-x,y-E).normalize(),i)r[4].setComponents(o,p,M,A).normalize(),r[5].setComponents(c-o,u-p,m-M,y-A).normalize();else if(r[4].setComponents(c-o,u-p,m-M,y-A).normalize(),t===Fi)r[5].setComponents(c+o,u+p,m+M,y+A).normalize();else if(t===an)r[5].setComponents(o,p,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);let t=qd.distanceTo(e.center);return Vr.radius=.7071067811865476+t,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Gn.x=r.normal.x>0?e.max.x:e.min.x,Gn.y=r.normal.y>0?e.max.y:e.min.y,Gn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},uc=new mt,Yd=class Mh{constructor(){this.coordinateSystem=Fi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new nn),r[a].setFromProjectionMatrix(uc,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new nn),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Mh().copy(this)}},us=class extends Da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dc=new mt,Wo=new nl,Vn=new Na,kn=new H,sl=class extends $t{constructor(e=new Mi,t=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vn.copy(i.boundingSphere),Vn.applyMatrix4(r),Vn.radius+=a,e.ray.intersectsSphere(Vn)===!1)return;dc.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(dc);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,c=i.index,l=i.attributes.position;if(c!==null){let h=Math.max(0,n.start),p=Math.min(c.count,n.start+n.count);for(let u=h,g=p;u<g;u++){let x=c.getX(u);kn.fromBufferAttribute(l,x),pc(kn,x,o,r,e,t,this)}}else{let h=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let u=h,g=p;u<g;u++)kn.fromBufferAttribute(l,u),pc(kn,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};Sh=class extends Bi{constructor(e=[],t=wa,i,r,a,n,s,o,c,l){super(e,t,i,r,a,n,s,o,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pa=class extends Bi{constructor(e,t,i=Ki,r,a,n,s=Yt,o=Yt,c,l=Dr,h=1){if(l!==Dr&&l!==Lr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:h};super(p,r,a,n,s,o,l,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},yh=class extends Pa{constructor(e,t=Ki,i=wa,r,a,n=Yt,s=Yt,o,c=Dr){let l={width:e,height:e,depth:1},h=[l,l,l,l,l,l];super(e,e,t,i,r,a,n,s,o,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eh=class extends Bi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ri=class Th extends Mi{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],p=[],u=0,g=0;x("z","y","x",-1,-1,r,i,t,s,n,0),x("z","y","x",1,-1,r,i,-t,s,n,1),x("x","z","y",1,1,t,r,i,a,s,2),x("x","z","y",1,-1,t,r,-i,a,s,3),x("x","y","z",1,-1,t,i,r,a,n,4),x("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(p,2));function x(M,m,d,E,A,y,b,R,f,S,C){let V=y/f,I=b/S,P=y/2,q=b/2,N=R/2,k=f+1,K=S+1,G=0,de=0,j=new H;for(let Z=0;Z<K;Z++){let se=Z*I-q;for(let Pe=0;Pe<k;Pe++){let Q=Pe*V-P;j[M]=Q*E,j[m]=se*A,j[d]=N,l.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[d]=R>0?1:-1,h.push(j.x,j.y,j.z),p.push(Pe/f),p.push(1-Z/S),G+=1}}for(let Z=0;Z<S;Z++)for(let se=0;se<f;se++){let Pe=u+se+k*Z,Q=u+se+k*(Z+1),ae=u+(se+1)+k*(Z+1),Ee=u+(se+1)+k*Z;c.push(Pe,Q,Ee),c.push(Q,ae,Ee),de+=6}o.addGroup(g,de,C),g+=de,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Th(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bh=class wh extends Mi{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],c=[],l=new H,h=new rt;s.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=i;p++,u+=3){let g=r+p/i*a;l.x=t*Math.cos(g),l.y=t*Math.sin(g),s.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,c.push(h.x,h.y)}for(let p=1;p<=i;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wh(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Si=class Ah extends Mi{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:c};let l=this;a=Math.floor(a),n=Math.floor(n);let h=[],p=[],u=[],g=[],x=0,M=[],m=r/2,d=0;E(),s===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(g,2));function E(){let y=new H,b=new H,R=0,f=(i-t)/r;for(let S=0;S<=n;S++){let C=[],V=S/n,I=V*(i-t)+t;for(let P=0;P<=a;P++){let q=P/a,N=q*c+o,k=Math.sin(N),K=Math.cos(N);b.x=I*k,b.y=-V*r+m,b.z=I*K,p.push(b.x,b.y,b.z),y.set(k,f,K).normalize(),u.push(y.x,y.y,y.z),g.push(q,1-V),C.push(x++)}M.push(C)}for(let S=0;S<a;S++)for(let C=0;C<n;C++){let V=M[C][S],I=M[C+1][S],P=M[C+1][S+1],q=M[C][S+1];(t>0||C!==0)&&(h.push(V,I,q),R+=3),(i>0||C!==n-1)&&(h.push(I,P,q),R+=3)}l.addGroup(d,R,0),d+=R}function A(y){let b=x,R=new rt,f=new H,S=0,C=y===!0?t:i,V=y===!0?1:-1;for(let P=1;P<=a;P++)p.push(0,m*V,0),u.push(0,V,0),g.push(.5,.5),x++;let I=x;for(let P=0;P<=a;P++){let q=P/a*c+o,N=Math.cos(q),k=Math.sin(q);f.x=C*k,f.y=m*V,f.z=C*N,p.push(f.x,f.y,f.z),u.push(0,V,0),R.x=N*.5+.5,R.y=k*.5*V+.5,g.push(R.x,R.y),x++}for(let P=0;P<a;P++){let q=b+P,N=I+P;y===!0?h.push(N,N+1,q):h.push(N+1,N,q),S+=3}l.addGroup(d,S,y===!0?1:2),d+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ah(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rh=class Ch extends Si{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new Ch(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ph=class Lh extends Mi{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),c=Math.floor(a),l=o+1,h=c+1,p=t/o,u=i/c,g=[],x=[],M=[],m=[];for(let d=0;d<h;d++){let E=d*u-s;for(let A=0;A<l;A++){let y=A*p-n;x.push(y,-E,0),M.push(0,0,1),m.push(A/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){let A=E+l*d,y=E+l*(d+1),b=E+1+l*(d+1),R=E+1+l*d;g.push(A,y,R),g.push(y,b,R)}this.setIndex(g),this.setAttribute("position",new gt(x,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.width,t.height,t.widthSegments,t.heightSegments)}},ol=class Nh extends Mi{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let c=Math.min(s+o,Math.PI),l=0,h=[],p=new H,u=new H,g=[],x=[],M=[],m=[];for(let d=0;d<=r;d++){let E=[],A=d/r,y=s+A*o,b=t*Math.cos(y),R=Math.sqrt(t*t-b*b),f=0;d===0&&s===0?f=.5/i:d===r&&c===Math.PI&&(f=-.5/i);for(let S=0;S<=i;S++){let C=S/i,V=a+C*n;p.x=-R*Math.cos(V),p.y=b,p.z=R*Math.sin(V),x.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),m.push(C+f,1-A),E.push(l++)}h.push(E)}for(let d=0;d<r;d++)for(let E=0;E<i;E++){let A=h[d][E+1],y=h[d][E],b=h[d+1][E],R=h[d+1][E+1];(d!==0||s>0)&&g.push(A,y,R),(d!==r-1||c<Math.PI)&&g.push(y,b,R)}this.setIndex(g),this.setAttribute("position",new gt(x,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};Zd={clone:La,merge:ai},Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jr=class extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=La(e.uniforms),this.uniformsGroups=Kd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new rt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new H().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$d=class extends jr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ih=class extends Da{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ep=class extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tp=class extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ln=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ip=class extends ln{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case kl:a=e,s=2*t-i;break;case Wl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case kl:n=e,o=2*i-t;break;case Wl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let c=(i-t)*.5,l=this.valueSize;this._weightPrev=c/(t-s),this._weightNext=c/(o-i),this._offsetPrev=a*l,this._offsetNext=n*l}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,c=o-s,l=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,u=this._weightNext,g=(i-t)/(r-t),x=g*g,M=x*g,m=-p*M+2*p*x-p*g,d=(1+p)*M+(-1.5-2*p)*x+(-.5+p)*g+1,E=(-1-u)*M+(1.5+u)*x+.5*g,A=u*M-u*x;for(let y=0;y!==s;++y)a[y]=m*n[l+y]+d*n[c+y]+E*n[o+y]+A*n[h+y];return a}},rp=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,c=o-s,l=(i-t)/(r-t),h=1-l;for(let p=0;p!==s;++p)a[p]=n[c+p]*h+n[o+p]*l;return a}},ap=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},np=class extends ln{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,c=o-s,l=this.inTangents,h=this.outTangents;if(!l||!h){let g=(i-t)/(r-t),x=1-g;for(let M=0;M!==s;++M)a[M]=n[c+M]*x+n[o+M]*g;return a}let p=s*2,u=e-1;for(let g=0;g!==s;++g){let x=n[c+g],M=n[o+g],m=u*p+g*2,d=h[m],E=h[m+1],A=e*p+g*2,y=l[A],b=l[A+1],R=op(i,t,d,y,r);a[g]=Uh(R,x,E,b,M)}return a}};Ji=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pa(t,this.TimeBufferType),this.values=pa(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pa(e.times,Array),values:pa(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Wn(e.settings)&&(i.settings={inTangents:pa(e.settings.inTangents,Array),outTangents:pa(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ap(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ip(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new np(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case Rs:t=this.InterpolantFactoryMethodSmooth;break;case Gl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return Rs;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;Wn(this.settings)&&(mc(this.settings.inTangents,e),mc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Wn(this.settings)&&(gc(this.settings.inTangents,e),gc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){ze("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){ze("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&vd(r))for(let s=0,o=r.length;s!==o;++s){let c=r[s];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,s,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Rs,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,c=e[s],l=e[s+1];if(c!==l&&(s!==1||c!==e[0]))if(r)o=!0;else{let h=s*i,p=h-i,u=h+i;for(let g=0;g!==i;++g){let x=t[h+g];if(x!==t[p+g]||x!==t[u+g]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,p=n*i;for(let u=0;u!==i;++u)t[p+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,c=0;c!==i;++c)t[o+c]=t[s+c];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Wn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Ji.prototype.ValueTypeName="";Ji.prototype.TimeBufferType=Float32Array;Ji.prototype.ValueBufferType=Float32Array;Ji.prototype.DefaultInterpolation=Go;cn=class extends Ji{constructor(e,t,i){super(e,t,i)}};cn.prototype.ValueTypeName="bool";cn.prototype.ValueBufferType=Array;cn.prototype.DefaultInterpolation=ss;cn.prototype.InterpolantFactoryMethodLinear=void 0;cn.prototype.InterpolantFactoryMethodSmooth=void 0;lp=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}};lp.prototype.ValueTypeName="color";cp=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}};cp.prototype.ValueTypeName="number";hp=class extends ln{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),c=e*s;for(let l=c+s;c!==l;c+=4)Yr.slerpFlat(a,0,n,c-s,n,c,o);return a}},Oh=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new hp(this.times,this.values,this.getValueSize(),e)}};Oh.prototype.ValueTypeName="quaternion";Oh.prototype.InterpolantFactoryMethodSmooth=void 0;hn=class extends Ji{constructor(e,t,i){super(e,t,i)}};hn.prototype.ValueTypeName="string";hn.prototype.ValueBufferType=Array;hn.prototype.DefaultInterpolation=ss;hn.prototype.InterpolantFactoryMethodLinear=void 0;hn.prototype.InterpolantFactoryMethodSmooth=void 0;up=class extends Ji{constructor(e,t,i,r){super(e,t,i,r)}};up.prototype.ValueTypeName="vector";dp=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(l){s++,a===!1&&r.onStart!==void 0&&r.onStart(l,n,s),a=!0},this.itemEnd=function(l){n++,r.onProgress!==void 0&&r.onProgress(l,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(l){r.onError!==void 0&&r.onError(l)},this.resolveURL=function(l){return l=l.normalize("NFC"),o?o(l):l},this.setURLModifier=function(l){return o=l,this},this.addHandler=function(l,h){return c.push(l,h),this},this.removeHandler=function(l){let h=c.indexOf(l);return h!==-1&&c.splice(h,2),this},this.getHandler=function(l){for(let h=0,p=c.length;h<p;h+=2){let u=c[h],g=c[h+1];if(u.global&&(u.lastIndex=0),u.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pp=new dp,fp=class{constructor(e){this.manager=e!==void 0?e:pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};fp.DEFAULT_MATERIAL_NAME="__DEFAULT";ll=class extends $t{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fh=class extends ll{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qs=new mt,_c=new H,vc=new H,Bh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nn,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_c.setFromMatrixPosition(e.matrixWorld),t.position.copy(_c),vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Qs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Qs,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,c=r?r.y/a.y:0;e.coordinateSystem===an||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+c,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+c,0,0,.5,.5,0,0,0,1),t.multiply(Qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xn=new H,jn=new Yr,ki=new H,zh=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xn,jn,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xn,jn,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Xn,jn,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xn,jn,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ar=new H,xc=new rt,Mc=new rt,vi=class extends zh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,t){return this.getViewBounds(e,xc,Mc),t.subVectors(Mc,xc)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,c=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/c,r*=n.width/o,i*=n.height/c}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mp=class extends Bh{constructor(){super(new vi(90,1,.5,500)),this.isPointLightShadow=!0}},Hh=class extends ll{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Gh=class extends zh{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,n=a+c*this.view.width,s-=l*this.view.offsetY,o=s-l*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gp=class extends Bh{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vh=class extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new gp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fa=-90,ma=1,Xo=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new vi(fa,ma,e,t);r.layers=this.layers,this.add(r);let a=new vi(fa,ma,e,t);a.layers=this.layers,this.add(a);let n=new vi(fa,ma,e,t);n.layers=this.layers,this.add(n);let s=new vi(fa,ma,e,t);s.layers=this.layers,this.add(s);let o=new vi(fa,ma,e,t);o.layers=this.layers,this.add(o);let c=new vi(fa,ma,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===an)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,c,l]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(h,p,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_p=class extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},cl="\\[\\]\\.:\\/",vp=new RegExp("["+cl+"]","g"),hl="[^"+cl+"]",xp="[^"+cl.replace("\\.","")+"]",Mp=/((?:WC+[\/:])*)/.source.replace("WC",hl),Sp=/(WCOD+)?/.source.replace("WCOD",xp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hl),Ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hl),Tp=new RegExp("^"+Mp+Sp+yp+Ep+"$"),bp=["material","materials","bones","map"],wp=class{constructor(e,t,i){let r=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class va{constructor(t,i,r){this.path=i,this.parsedPath=r||va.parseTrackName(i),this.node=va.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new va.Composite(t,i,r):new va(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(t){let i=Tp.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);bp.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let c=r(o.children);if(c)return c}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=va.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let l=i.objectIndex;switch(r){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(l!==void 0){if(t[l]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let s=t[a];if(s===void 0){let l=i.nodeName;ze("PropertyBinding: Trying to update property for track: "+l+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=wp;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Y0=new Float32Array(1),Sc=new mt,kh=class{constructor(e,t,i=0,r=1/0){this.ray=new nl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sc),this}intersectObject(e,t=!0,i=[]){return jo(e,this,i,t),i.sort(yc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)jo(e[r],this,i,t);return i.sort(yc),i}};K0=(ba=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},ba.prototype.isMatrix2=!0,ba);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Np=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,kp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gf=`#ifdef USE_GRADIENTMAP
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
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sf=`#ifdef USE_ENVMAP
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
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wf=`PhysicalMaterial material;
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
#endif`,Af=`uniform sampler2D dfgLUT;
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
}`,Rf=`
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zf=`#if defined( USE_POINTS_UV )
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
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform float backgroundBlurriness;
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,Km=`#define NORMAL
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
}`,Zm=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,$m=`#define STANDARD
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
}`,eg=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,ig=`#define TOON
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
}`,rg=`uniform float size;
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
}`,ag=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,sg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,lg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:Np,alphatest_fragment:Dp,alphatest_pars_fragment:Ip,aomap_fragment:Up,aomap_pars_fragment:Op,batching_pars_vertex:Fp,batching_vertex:Bp,begin_vertex:zp,beginnormal_vertex:Hp,bsdfs:Gp,iridescence_fragment:Vp,bumpmap_pars_fragment:kp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:qp,color_fragment:Yp,color_pars_fragment:Kp,color_pars_vertex:Zp,color_vertex:Jp,common:Qp,defaultnormal_vertex:$p,displacementmap_pars_vertex:ef,displacementmap_vertex:tf,emissivemap_fragment:rf,emissivemap_pars_fragment:af,colorspace_fragment:nf,colorspace_pars_fragment:sf,envmap_fragment:of,envmap_common_pars_fragment:lf,envmap_pars_fragment:cf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Sf,envmap_vertex:uf,fog_vertex:df,fog_pars_vertex:pf,fog_fragment:ff,fog_pars_fragment:mf,gradientmap_pars_fragment:gf,lightmap_pars_fragment:_f,lights_lambert_fragment:vf,lights_lambert_pars_fragment:xf,lights_pars_begin:Mf,lights_toon_fragment:yf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:bf,lights_physical_fragment:wf,lights_physical_pars_fragment:Af,lights_fragment_begin:Rf,lights_fragment_maps:Cf,lights_fragment_end:Pf,lightprobes_pars_fragment:Lf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Df,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Uf,map_fragment:Of,map_pars_fragment:Ff,map_particle_fragment:Bf,map_particle_pars_fragment:zf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Vf,morphcolor_vertex:kf,morphnormal_vertex:Wf,morphtarget_pars_vertex:Xf,morphtarget_vertex:jf,normal_fragment_begin:qf,normal_fragment_maps:Yf,normal_pars_fragment:Kf,normal_pars_vertex:Zf,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:tm,iridescence_pars_fragment:im,opaque_fragment:rm,packing:am,premultiplied_alpha_fragment:nm,project_vertex:sm,dithering_fragment:om,dithering_pars_fragment:lm,roughnessmap_fragment:cm,roughnessmap_pars_fragment:hm,shadowmap_pars_fragment:um,shadowmap_pars_vertex:dm,shadowmap_vertex:pm,shadowmask_pars_fragment:fm,skinbase_vertex:mm,skinning_pars_vertex:gm,skinning_vertex:_m,skinnormal_vertex:vm,specularmap_fragment:xm,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:ym,transmission_fragment:Em,transmission_pars_fragment:Tm,uv_pars_fragment:bm,uv_pars_vertex:wm,uv_vertex:Am,worldpos_vertex:Rm,background_vert:Cm,background_frag:Pm,backgroundCube_vert:Lm,backgroundCube_frag:Nm,cube_vert:Dm,cube_frag:Im,depth_vert:Um,depth_frag:Om,distance_vert:Fm,distance_frag:Bm,equirect_vert:zm,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:km,meshbasic_frag:Wm,meshlambert_vert:Xm,meshlambert_frag:jm,meshmatcap_vert:qm,meshmatcap_frag:Ym,meshnormal_vert:Km,meshnormal_frag:Zm,meshphong_vert:Jm,meshphong_frag:Qm,meshphysical_vert:$m,meshphysical_frag:eg,meshtoon_vert:tg,meshtoon_frag:ig,points_vert:rg,points_frag:ag,shadow_vert:ng,shadow_frag:sg,sprite_vert:og,sprite_frag:lg},xe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Xi={basic:{uniforms:ai([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ai([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ai([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ai([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ai([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ai([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ai([xe.points,xe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ai([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ai([xe.common,xe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ai([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ai([xe.sprite,xe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:ai([xe.common,xe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:ai([xe.lights,xe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Xi.physical={uniforms:ai([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};qn={r:0,b:0,g:0},cg=new mt,Xh=new Ve;Xh.set(-1,0,0,0,1,0,0,0,1);ul=class extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ri(5,5,5),a=new jr({name:"CubemapFromEquirect",uniforms:La(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:xa});a.uniforms.tEquirect.value=t;let n=new hi(r,a),s=t.minFilter;return t.minFilter===Pr&&(t.minFilter=ci),new Xo(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},Tc=256,mg=3,gg=20,jh=256,qh=16,_g=3,vg=new H,xg=new Ge,bc=class Yh{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xo(1,10,null),this._boxMesh=new hi(new Ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=vg}=n,c=this._renderer;this._setSize(s);let l=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let p=c.autoClear,u=c.autoClearColor,g=c.autoClearDepth,x=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(xg));let m=new Xo(r,a,h);return m.position.copy(o),m.update(c,t),c.autoClear=p,c.autoClearColor=u,c.autoClearDepth=g,c.autoClearStencil=x,t.background=M,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,i)),this._applyPMREM(l),l}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Tc,Ed(t))}_fromTexture(t,i){t.mapping===wa||t.mapping===tn?this._setSize(t.image.length===0?Tc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=wc(t,!1,!1),r=Math.log2(t)-mg;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=wc(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===wa||t.mapping===tn?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ac()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Mg(),this._integrationMaterial=Sg());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/qh);for(let s=0;s<=r;s++){let o=Yh.lodToRoughness(s,r);if(s>r-_g)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let c=o>0?Math.log2(i)+.5*Math.log2(6/(jh*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=c,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=yg());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};Pg={[Yc]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[Zc]:"CINEON_TONE_MAPPING",[Jc]:"ACES_FILMIC_TONE_MAPPING",[$c]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};Kh=new Bi,Zh=new Pa(1,1),Jh=new yh(1),Qh=new dh,$h=new Ld,eu=new Sh,Cc=[],Pc=[],Lc=new Float32Array(16),Nc=new Float32Array(9),Dc=new Float32Array(4);v_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jg(t.type)}},x_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=__(t.type)}},M_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},$s=/(\w+)(\])?(\[|\.)?/g;rs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);S_(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};y_=37297,E_=0;Oc=new Ve;A_={[Yc]:"Linear",[Kc]:"Reinhard",[Zc]:"Cineon",[Jc]:"ACESFilmic",[$c]:"AgX",[eh]:"Neutral",[Qc]:"Custom"};Yn=new H;D_=/^[ \t]*#include +<([\w\d./]+)>/gm;U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;F_={[Kn]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};z_={[tn]:"ENVMAP_MODE_REFRACTION"};G_={[Yo]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[sd]:"ENVMAP_BLENDING_ADD"};W_=0,X_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new j_(e),t.set(e,i)),i}},j_=class{constructor(e){this.id=W_++,this.code=e,this.usedTimes=0}};e0=0;a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`,s0=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],o0=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Xc=new mt,Za=new H,eo=new H;d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`,f0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Eh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new jr({vertexShader:d0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new Ph(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},m0=class extends qr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,c=null,l=null,h=null,p=null,u=null,g=null,x=typeof XRWebGLBinding<"u",M=new f0,m={},d=t.getContextAttributes(),E=null,A=null,y=[],b=[],R=new rt,f=null,S=null,C=new vi;C.viewport=new wt;let V=new vi;V.viewport=new wt;let I=[C,V],P=new _p,q=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=y[Q];return ae===void 0&&(ae=new Fs,y[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=y[Q];return ae===void 0&&(ae=new Fs,y[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=y[Q];return ae===void 0&&(ae=new Fs,y[Q]=ae),ae.getHandSpace()};function k(Q){let ae=b.indexOf(Q.inputSource);if(ae===-1)return;let Ee=y[ae];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||n),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function K(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let Q=0;Q<y.length;Q++){let ae=b[Q];ae!==null&&(b[Q]=null,y[Q].disconnect(ae))}q=null,N=null,M.reset();for(let Q in m)delete m[Q];if(e.setRenderTarget(E),u=null,p=null,h=null,r=null,A=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(f),e.setSize(R.width,R.height,!1),S!==null){let Q=S.camera;Q.fov=S.fov,Q.zoom=S.zoom,Q.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){s=Q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await t.makeXRCompatible(),f=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ee=null,Ce=null;d.depth&&(Ce=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=d.stencil?Lr:Dr,Ee=d.stencil?Aa:Ki);let Le={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:a};h=this.getBinding(),p=h.createProjectionLayer(Le),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),A=new Yi(p.textureWidth,p.textureHeight,{format:ji,type:xi,depthTexture:new Pa(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ae={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new Yi(u.framebufferWidth,u.framebufferHeight,{format:ji,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),c=null,n=await r.requestReferenceSpace(s),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(Q){for(let ae=0;ae<Q.removed.length;ae++){let Ee=Q.removed[ae],Ce=b.indexOf(Ee);Ce>=0&&(b[Ce]=null,y[Ce].disconnect(Ee))}for(let ae=0;ae<Q.added.length;ae++){let Ee=Q.added[ae],Ce=b.indexOf(Ee);if(Ce===-1){for(let le=0;le<y.length;le++)if(le>=b.length){b.push(Ee),Ce=le;break}else if(b[le]===null){b[le]=Ee,Ce=le;break}if(Ce===-1)break}let Le=y[Ce];Le&&Le.connect(Ee)}}function de(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,Ee=Q.far;M.texture!==null&&(M.depthNear>0&&(ae=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),P.near=V.near=C.near=ae,P.far=V.far=C.far=Ee,(q!==P.near||N!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),q=P.near,N=P.far),P.layers.mask=Q.layers.mask|6,C.layers.mask=P.layers.mask&-5,V.layers.mask=P.layers.mask&-3;let Ce=Q.parent,Le=P.cameras;de(P,Ce);for(let le=0;le<Le.length;le++)de(Le[le],Ce);P.projectionMatrix.copy(C.projectionMatrix),P.projectionMatrixInverse.copy(C.projectionMatrixInverse),S===null&&Q.isPerspectiveCamera&&(S={camera:Q,fov:Q.fov,zoom:Q.zoom}),j(Q,P,Ce)};function j(Q,ae,Ee){Ee===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ko*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&u===null))return o},this.setFoveation=function(Q){o=Q,p!==null&&(p.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(P)},this.getCameraTexture=function(Q){return m[Q]};let Z=null;function se(Q,ae){if(l=ae.getViewerPose(c||n),g=ae,l!==null){let Ee=l.views;u!==null&&(e.setRenderTargetFramebuffer(A,u.framebuffer),e.setRenderTarget(A));let Ce=!1;Ee.length!==P.cameras.length&&(P.cameras.length=0,Ce=!0);for(let le=0;le<Ee.length;le++){let ke=Ee[le],et=null;if(u!==null)et=u.getViewport(ke);else{let Lt=h.getViewSubImage(p,ke);et=Lt.viewport,le===0&&(e.setRenderTargetTextures(A,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(A))}let De=I[le];De===void 0&&(De=new vi,De.layers.enable(le),De.viewport=new wt,I[le]=De),De.matrix.fromArray(ke.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ke.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(et.x,et.y,et.width,et.height),le===0&&(P.matrix.copy(De.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ce===!0&&P.cameras.push(De)}let Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let le=h.getDepthInformation(Ee[0]);le&&le.isValid&&le.texture&&M.init(le,r.renderState)}if(Le&&Le.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let le=0;le<Ee.length;le++){let ke=Ee[le].camera;if(ke){let et=m[ke];et||(et=new Eh,m[ke]=et);let De=h.getCameraImage(ke);et.sourceTexture=De}}}}for(let Ee=0;Ee<y.length;Ee++){let Ce=b[Ee],Le=y[Ee];Ce!==null&&Le!==void 0&&Le.update(Ce,ae,c||n)}Z&&Z(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Pe=new Wh;Pe.setAnimationLoop(se),this.setAnimationLoop=function(Q){Z=Q},this.dispose=function(){}}},g0=new mt,tu=new Ve;tu.set(-1,0,0,0,1,0,0,0,1);x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;iu=class{constructor(e={}){let{canvas:t=xd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1,outputBufferType:u=xi}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=n;let x=u,M=new Set([tl,el,$o]),m=new Set([xi,Ki,rn,Aa,Zo,Jo]),d=new Uint32Array(4),E=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},y=null,b=null,R=[],f=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,V=!1,I=null,P=null,q=null,N=null;this._outputColorSpace=Ai;let k=0,K=0,G=null,de=-1,j=null,Z=new wt,se=new wt,Pe=null,Q=new Ge(0),ae=0,Ee=t.width,Ce=t.height,Le=1,le=null,ke=null,et=new wt(0,0,Ee,Ce),De=new wt(0,0,Ee,Ce),Lt=!1,Bt=new nn,Rt=new Yd,_t=!1,zt=!1,ni=new mt,bt=new H,Nt=new wt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function pi(){return G===null?Le:1}let O=i;function fi(v,D){return t.getContext(v,D)}let ut,Ct,he,ot,Ne,He,Ht,T,_,F,ie,J,ce,pe,U,ee,ve,L,X,te,ne,me,ge;try{let v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),O===null){let D="webgl2";if(O=fi(D,v),O===null)throw fi(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(v){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),ze("WebGLRenderer: "+v.message),v}function Ae(){ut=new Tg(O),ut.init(),ne=new u0(O,ut),Ct=new pg(O,ut,e,ne),he=new c0(O,ut),Ct.reversedDepthBuffer&&p&&he.buffers.depth.setReversed(!0),P=O.createFramebuffer(),q=O.createFramebuffer(),N=O.createFramebuffer(),ot=new Ag(O),Ne=new K_,He=new h0(O,ut,he,Ne,Ct,ne,ot),Ht=new Eg(C),T=new Rp(O),me=new ug(O,T),_=new bg(O,T,ot,me),F=new Cg(O,_,T,me,ot),L=new Rg(O,Ct,He),U=new fg(Ne),ie=new Y_(C,Ht,ut,Ct,me,U),J=new _0(C,Ne),ce=new J_,pe=new r0(ut),ve=new hg(C,Ht,he,F,g,o),ee=new l0(C,F,Ct),ge=new v0(O,ot,Ct,he),X=new dg(O,ut,ot),te=new wg(O,ut,ot),ot.programs=ie.programs,C.capabilities=Ct,C.extensions=ut,C.properties=Ne,C.renderLists=ce,C.shadowMap=ee,C.state=he,C.info=ot}x!==xi&&(S=new Lg(x,t.width,t.height,s,r,a));let re=new m0(C,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let v=ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(v){v!==void 0&&(Le=v,this.setSize(Ee,Ce,!1))},this.getSize=function(v){return v.set(Ee,Ce)},this.setSize=function(v,D,W=!0){if(re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=v,Ce=D,t.width=Math.floor(v*Le),t.height=Math.floor(D*Le),W===!0&&(t.style.width=v+"px",t.style.height=D+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(Ee*Le,Ce*Le).floor()},this.setDrawingBufferSize=function(v,D,W){Ee=v,Ce=D,Le=W,t.width=Math.floor(v*W),t.height=Math.floor(D*W),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(x===xi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Z)},this.getViewport=function(v){return v.copy(et)},this.setViewport=function(v,D,W,z){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,D,W,z),he.viewport(Z.copy(et).multiplyScalar(pi()).round())},this.getScissor=function(v){return v.copy(De)},this.setScissor=function(v,D,W,z){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,D,W,z),he.scissor(se.copy(De).multiplyScalar(pi()).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(v){he.setScissorTest(Lt=v)},this.setOpaqueSort=function(v){le=v},this.setTransparentSort=function(v){ke=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,W=!0){let z=0;if(v){let B=!1;if(G!==null){let oe=G.texture.format;B=M.has(oe)}if(B){let oe=G.texture.type,_e=m.has(oe),fe=ve.getClearColor(),$=ve.getClearAlpha(),be=fe.r,Fe=fe.g,Ze=fe.b;_e?(d[0]=be,d[1]=Fe,d[2]=Ze,d[3]=$,O.clearBufferuiv(O.COLOR,0,d)):(E[0]=be,E[1]=Fe,E[2]=Ze,E[3]=$,O.clearBufferiv(O.COLOR,0,E))}else z|=O.COLOR_BUFFER_BIT}D&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),I=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),ve.dispose(),ce.dispose(),pe.dispose(),He.dispose(),Ne.dispose(),Ht.dispose(),F.dispose(),_.dispose(),me.dispose(),ge.dispose(),ie.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ba),re.removeEventListener("sessionend",za),zi.stop()};function Ue(v){v.preventDefault(),ql("WebGLRenderer: Context Lost."),V=!0}function Ie(){ql("WebGLRenderer: Context Restored."),V=!1;let v=ot.autoReset,D=ee.enabled,W=ee.autoUpdate,z=ee.needsUpdate,B=ee.type;Ae(),ot.autoReset=v,ee.enabled=D,ee.autoUpdate=W,ee.needsUpdate=z,ee.type=B}function Ke(v){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Se(v){let D=v.target;D.removeEventListener("dispose",Se),at(D)}function at(v){dt(v),Ne.remove(v)}function dt(v){let D=Ne.get(v).programs;D!==void 0&&(D.forEach(function(W){ie.releaseProgram(W)}),v.isShaderMaterial&&ie.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,W,z,B,oe){D===null&&(D=vt);let _e=B.isMesh&&B.matrixWorld.determinantAffine()<0,fe=er(v,D,W,z,B);he.setMaterial(z,_e);let $=W.index,be=1;if(z.wireframe===!0){if($=_.getWireframeAttribute(W),$===void 0)return;be=2}let Fe=W.drawRange,Ze=W.attributes.position,ye=Fe.start*be,Je=(Fe.start+Fe.count)*be;oe!==null&&(ye=Math.max(ye,oe.start*be),Je=Math.min(Je,(oe.start+oe.count)*be)),$!==null?(ye=Math.max(ye,0),Je=Math.min(Je,$.count)):Ze!=null&&(ye=Math.max(ye,0),Je=Math.min(Je,Ze.count));let xt=Je-ye;if(xt<0||xt===1/0)return;me.setup(B,z,fe,W,$);let st,lt=X;if($!==null&&(st=T.get($),lt=te,lt.setIndex(st)),B.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*pi()),lt.setMode(O.LINES)):lt.setMode(O.TRIANGLES);else if(B.isLine){let tt=z.linewidth;tt===void 0&&(tt=1),he.setLineWidth(tt*pi()),B.isLineSegments?lt.setMode(O.LINES):B.isLineLoop?lt.setMode(O.LINE_LOOP):lt.setMode(O.LINE_STRIP)}else B.isPoints?lt.setMode(O.POINTS):B.isSprite&&lt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let tt=B._multiDrawStarts,Te=B._multiDrawCounts,Gt=B._multiDrawCount,Ti=$?T.get($).bytesPerElement:1,tr=Ne.get(z).currentProgram.getUniforms();for(let Vt=0;Vt<Gt;Vt++)tr.setValue(O,"_gl_DrawID",Vt),lt.render(tt[Vt]/Ti,Te[Vt])}else if(B.isInstancedMesh)lt.renderInstances(ye,xt,B.count);else if(W.isInstancedBufferGeometry){let tt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,tt);lt.renderInstances(ye,xt,Te)}else lt.render(ye,xt)};function Jr(v,D,W,z){I!==null&&v.isNodeMaterial&&I.setObject(z,v),_t===!0&&U.setState(v,W,!1),v.transparent===!0&&v.side===dr&&v.forceSinglePass===!1?(v.side=Qt,v.needsUpdate=!0,si(v,D,z),v.side=Wr,v.needsUpdate=!0,si(v,D,z),v.side=dr):si(v,D,z)}this.compile=function(v,D,W=null){W===null&&(W=v),I!==null&&I.renderStart(v,D,W),b=pe.get(W),b.init(D),f.push(b),W.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),v!==W&&v.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),zt=this.localClippingEnabled,_t=U.init(this.clippingPlanes,zt),_t===!0&&U.setGlobalState(this.clippingPlanes,D),I!==null&&ee.render(b.state.shadowsArray,W,D);let z=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){let fe=oe[_e];Jr(fe,W,D,B),z.add(fe)}else Jr(oe,W,D,B),z.add(oe)}),b=f.pop(),I!==null&&I.renderEnd(),z},this.compileAsync=function(v,D,W=null){let z=this.compile(v,D,W);return new Promise(B=>{function oe(){if(z.forEach(function(_e){let fe=Ne.get(_e).currentProgram;(fe===void 0||fe.isReady())&&z.delete(_e)}),z.size===0){B(v);return}setTimeout(oe,10)}ut.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Ur=null;function mn(v){Ur&&Ur(v)}function Ba(){zi.stop()}function za(){zi.start()}let zi=new Wh;zi.setAnimationLoop(mn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(v){Ur=v,re.setAnimationLoop(v),v===null?zi.stop():zi.start()},re.addEventListener("sessionstart",Ba),re.addEventListener("sessionend",za),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;I!==null&&I.renderStart(v,D);let W=re.enabled===!0&&re.isPresenting===!0,z=S!==null&&(G===null||W)&&S.begin(C,G);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(D),D=re.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,D,G),b=pe.get(v,f.length),b.init(D),b.state.textureUnits=He.getTextureUnits(),f.push(b),ni.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?Rt.setFromArrayCamera(D):Bt.setFromProjectionMatrix(ni,Fi,D.reversedDepth),zt=this.localClippingEnabled,_t=U.init(this.clippingPlanes,zt),y=ce.get(v,R.length),y.init(),R.push(y),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let oe=C.xr.getDepthSensingMesh();oe!==null&&Ei(oe,D,-1/0,C.sortObjects)}Ei(v,D,0,C.sortObjects),y.finish(),I!==null&&I.updateLights(b.state.lightsArray),C.sortObjects===!0&&y.sort(le,ke),Kt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Kt&&ve.addToRenderList(y,v),this.info.autoReset===!0&&this.info.reset(),_t===!0&&U.beginShadows();let B=b.state.shadowsArray;if(ee.render(B,v,D),_t===!0&&U.endShadows(),(z&&S.hasRenderPass())===!1){let oe=y.opaque,_e=y.transmissive;if(b.setupLights(),D.isArrayCamera){let fe=D.cameras;if(_e.length>0)for(let $=0,be=fe.length;$<be;$++){let Fe=fe[$];Ha(oe,_e,v,Fe)}Kt&&ve.render(v);for(let $=0,be=fe.length;$<be;$++){let Fe=fe[$];xr(y,v,Fe,Fe.viewport)}}else _e.length>0&&Ha(oe,_e,v,D),Kt&&ve.render(v),xr(y,v,D)}G!==null&&K===0&&(He.updateMultisampleRenderTarget(G),He.updateRenderTargetMipmap(G)),z&&S.end(C),v.isScene===!0&&v.onAfterRender(C,v,D),me.resetDefaultState(),de=-1,j=null,f.pop(),f.length>0?(b=f[f.length-1],He.setTextureUnits(b.state.textureUnits),_t===!0&&U.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?y=R[R.length-1]:y=null,I!==null&&I.renderEnd()};function Ei(v,D,W,z){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){let oe=D.isArrayCamera?Rt:Bt;if(!v.frustumCulled||v.intersectsFrustum(oe)){z&&Nt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ni);let _e=F.update(v),fe=v.material;fe.visible&&y.push(v,_e,fe,W,Nt.z,null,D)}}else if(v.isMesh||v.isLine||v.isPoints){let oe=D.isArrayCamera?Rt:Bt;if(!v.frustumCulled||v.intersectsFrustum(oe)){let _e=F.update(v),fe=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Nt.copy(v.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Nt.copy(_e.boundingSphere.center)),Nt.applyMatrix4(v.matrixWorld).applyMatrix4(ni)),Array.isArray(fe)){let $=_e.groups;for(let be=0,Fe=$.length;be<Fe;be++){let Ze=$[be],ye=fe[Ze.materialIndex];ye&&ye.visible&&y.push(v,_e,ye,W,Nt.z,Ze,D)}}else fe.visible&&y.push(v,_e,fe,W,Nt.z,null,D)}}}let B=v.children;for(let oe=0,_e=B.length;oe<_e;oe++)Ei(B[oe],D,W,z)}function xr(v,D,W,z){let{opaque:B,transmissive:oe,transparent:_e}=v;b.setupLightsView(W),_t===!0&&U.setGlobalState(C.clippingPlanes,W),z&&he.viewport(Z.copy(z)),B.length>0&&Or(B,D,W),oe.length>0&&Or(oe,D,W),_e.length>0&&Or(_e,D,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ha(v,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[z.id]===void 0){let Ze=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[z.id]=new Yi(1,1,{generateMipmaps:!0,type:Ze?Zi:xi,minFilter:Pr,samples:Math.max(4,Ct.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let B=b.state.transmissionRenderTarget[z.id],oe=z.viewport||Z;B.setSize(oe.z*C.transmissionResolutionScale,oe.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),fe=C.getActiveCubeFace(),$=C.getActiveMipmapLevel();C.setRenderTarget(B),C.getClearColor(Q),ae=C.getClearAlpha(),ae<1&&C.setClearColor(16777215,.5),C.clear(),Kt&&ve.render(W);let be=C.toneMapping;C.toneMapping=fr;let Fe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),b.setupLightsView(z),_t===!0&&U.setGlobalState(C.clippingPlanes,z),Or(v,W,z),He.updateMultisampleRenderTarget(B),He.updateRenderTargetMipmap(B),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ye=0,Je=D.length;ye<Je;ye++){let xt=D[ye],{object:st,geometry:lt,material:tt,group:Te}=xt;if(tt.side===dr&&st.layers.test(z.layers)){let Gt=tt.side;tt.side=Qt,tt.needsUpdate=!0,Pi(st,W,z,lt,tt,Te),tt.side=Gt,tt.needsUpdate=!0,Ze=!0}}Ze===!0&&(He.updateMultisampleRenderTarget(B),He.updateRenderTargetMipmap(B))}C.setRenderTarget(_e,fe,$),C.setClearColor(Q,ae),Fe!==void 0&&(z.viewport=Fe),C.toneMapping=be}function Or(v,D,W){let z=D.isScene===!0?D.overrideMaterial:null;for(let B=0,oe=v.length;B<oe;B++){let _e=v[B],{object:fe,geometry:$,group:be}=_e,Fe=_e.material;Fe.allowOverride===!0&&z!==null&&(Fe=z),fe.layers.test(W.layers)&&Pi(fe,D,W,$,Fe,be)}}function Pi(v,D,W,z,B,oe){I!==null&&B.isNodeMaterial&&I.setObject(v,B),v.onBeforeRender(C,D,W,z,B,oe),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(C,D,W,z,v,oe),B.transparent===!0&&B.side===dr&&B.forceSinglePass===!1?(B.side=Qt,B.needsUpdate=!0,C.renderBufferDirect(W,D,z,B,v,oe),B.side=Wr,B.needsUpdate=!0,C.renderBufferDirect(W,D,z,B,v,oe),B.side=dr):C.renderBufferDirect(W,D,z,B,v,oe),v.onAfterRender(C,D,W,z,B,oe)}function Li(v){let D=0;for(let W of v)W.texture!==null&&D++;return D}function si(v,D,W){D.isScene!==!0&&(D=vt);let z=Ne.get(v),B=b.state.lights,oe=b.state.shadowsArray,_e=B.state.version,fe=ie.getParameters(v,B.state,oe,D,W,b.state.lightProbeGridArray),$=ie.getProgramCacheKey(fe),be=z.programs;z.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let Fe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;z.envMap=Ht.get(v.envMap||z.environment,Fe),z.envMapRotation=z.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",Se),be=new Map,z.programs=be,z.programVariants=new Map);let Ze=be.get($);if(Ze!==void 0){if(z.currentProgram===Ze&&z.lightsStateVersion===_e)return Fr(v,fe),Ze}else fe.uniforms=ie.getUniforms(v),I!==null&&v.isNodeMaterial&&I.build(v,W,fe),v.onBeforeCompile(fe,C),Ze=ie.acquireProgram(fe,$),be.set($,Ze),z.uniforms=fe.uniforms;let ye=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=U.uniform),Fr(v,fe),z.needsLights=_n(v),z.lightsStateVersion=_e,z.needsLights&&(ye.ambientLightColor.value=B.state.ambient,ye.lightProbe.value=B.state.probe,ye.sunLights.value=B.state.sun,ye.sunLightShadows.value=B.state.sunShadow,ye.directionalLights.value=B.state.directional,ye.directionalLightShadows.value=B.state.directionalShadow,ye.spotLights.value=B.state.spot,ye.spotLightShadows.value=B.state.spotShadow,ye.rectAreaLights.value=B.state.rectArea,ye.ltc_1.value=B.state.rectAreaLTC1,ye.ltc_2.value=B.state.rectAreaLTC2,ye.pointLights.value=B.state.point,ye.pointLightShadows.value=B.state.pointShadow,ye.hemisphereLights.value=B.state.hemi,ye.sunShadowMatrix.value=B.state.sunShadowMatrix,ye.sunShadowCascade.value=B.state.sunShadowCascade,ye.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ye.spotLightMatrix.value=B.state.spotLightMatrix,ye.spotLightMap.value=B.state.spotLightMap,ye.pointShadowMatrix.value=B.state.pointShadowMatrix),z.numLightProbeGrids=Li(b.state.lightProbeGridArray),z.currentProgram=Ze,z.uniformsList=null,Ze}function xs(v,D,W,z,B){let oe=Ne.get(v),_e=oe.currentProgram.id+","+z+","+B,fe=oe.programVariants.get(_e);return fe===void 0?(fe=si(v,D,W),oe.programVariants.set(_e,fe)):(oe.currentProgram=fe,oe.uniformsList=null,oe.outputColorSpace=z,oe.toneMapping=B),fe}function Ga(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=rs.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Fr(v,D){let W=Ne.get(v);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function er(v,D,W,z,B){D.isScene!==!0&&(D=vt),He.resetTextureUnits();let oe=D.fog,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,fe=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Qe.workingColorSpace,$=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,be=Ht.get(z.envMap||_e,$),Fe=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ze=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color,st=fr;z.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(st=C.toneMapping);let lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,tt=lt!==void 0?lt.length:0,Te=Ne.get(z),Gt=b.state.lights;if(_t===!0&&(zt===!0||v!==j)){let it=v===j&&z.id===de;U.setState(z,v,it)}let Ti=!1,tr=!1;z.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Gt.state.version||B.isBatchedMesh&&Te.batching===!1||!B.isBatchedMesh&&Te.batching===!0||B.isBatchedMesh&&Te.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Te.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Te.instancing===!1||!B.isInstancedMesh&&Te.instancing===!0||B.isSkinnedMesh&&Te.skinning===!1||!B.isSkinnedMesh&&Te.skinning===!0||B.isInstancedMesh&&Te.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Te.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Te.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Te.instancingMorph===!1&&B.morphTexture!==null||Te.envMap!==be||z.fog===!0&&Te.fog!==oe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==U.numPlanes||Te.numIntersection!==U.numIntersection)||Te.vertexAlphas!==Fe||Te.vertexTangents!==Ze||Te.morphTargets!==ye||Te.morphNormals!==Je||Te.morphColors!==xt||Te.morphTargetsCount!==tt||Te.numLightProbeGrids!==Li(b.state.lightProbeGridArray)?Ti=!0:(Te.outputColorSpace!==fe||Te.toneMapping!==st)&&(tr=!0):(Ti=!0,Te.__version=z.version);let Vt=Te.currentProgram;(Ti===!0||tr===!0)&&(Vt=tr===!0?xs(z,D,B,fe,st):si(z,D,B),I&&z.isNodeMaterial&&I.onUpdateProgram(z,Vt,Te));let ir=!1,Hi=!1,rr=!1,je=Vt.getUniforms(),Mt=Te.uniforms;if(he.useProgram(Vt.program)&&(ir=!0,Hi=!0,rr=!0),z.id!==de&&(de=z.id,Hi=!0),ir||j!==v){he.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),je.setValue(O,"projectionMatrix",v.projectionMatrix),je.setValue(O,"viewMatrix",v.matrixWorldInverse);let it=je.map.cameraPosition;it!==void 0&&it.setValue(O,bt.setFromMatrixPosition(v.matrixWorld)),Ct.logarithmicDepthBuffer&&je.setValue(O,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&je.setValue(O,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,Hi=!0,rr=!0)}if(Te.needsLights&&(Gt.state.sunShadowMap.length>0&&je.setValue(O,"sunShadowMap",Gt.state.sunShadowMap,He),Gt.state.directionalShadowMap.length>0&&je.setValue(O,"directionalShadowMap",Gt.state.directionalShadowMap,He),Gt.state.spotShadowMap.length>0&&je.setValue(O,"spotShadowMap",Gt.state.spotShadowMap,He),Gt.state.pointShadowMap.length>0&&je.setValue(O,"pointShadowMap",Gt.state.pointShadowMap,He)),B.isSkinnedMesh){je.setOptional(O,B,"bindMatrix"),je.setOptional(O,B,"bindMatrixInverse");let it=B.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),je.setValue(O,"boneTexture",it.boneTexture,He))}B.isBatchedMesh&&(je.setOptional(O,B,"batchingTexture"),je.setValue(O,"batchingTexture",B._matricesTexture,He),je.setOptional(O,B,"batchingIdTexture"),je.setValue(O,"batchingIdTexture",B._indirectTexture,He),je.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&je.setValue(O,"batchingColorTexture",B._colorsTexture,He));let oi=W.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&L.update(B,W,Vt),(Hi||Te.receiveShadow!==B.receiveShadow)&&(Te.receiveShadow=B.receiveShadow,je.setValue(O,"receiveShadow",B.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(Mt.envMapIntensity.value=D.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=M0()),Hi){if(je.setValue(O,"toneMappingExposure",C.toneMappingExposure),Te.needsLights&&gn(Mt,rr),oe&&z.fog===!0&&J.refreshFogUniforms(Mt,oe),J.refreshMaterialUniforms(Mt,z,Le,Ce,b.state.transmissionRenderTarget[v.id]),Te.needsLights&&Te.numLightProbeGrids>0){let it=A,Dt=0;for(let mi of b.state.lightProbeGridArray)mi.texture!==null&&(it.textures[Dt]=mi.texture,it.min[Dt]=mi.boundingBox.min,it.max[Dt]=mi.boundingBox.max,it.resolution[Dt]=mi.resolution,Dt++);for(let mi in it)it[mi].length=Dt;Mt.probesSH.value=it.textures,Mt.probesMin.value=it.min,Mt.probesMax.value=it.max,Mt.probesResolution.value=it.resolution}rs.upload(O,Ga(Te),Mt,He)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(rs.upload(O,Ga(Te),Mt,He),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&je.setValue(O,"center",B.center),je.setValue(O,"modelViewMatrix",B.modelViewMatrix),je.setValue(O,"normalMatrix",B.normalMatrix),je.setValue(O,"modelMatrix",B.matrixWorld),z.uniformsGroups!==void 0){let it=z.uniformsGroups;for(let Dt=0,mi=it.length;Dt<mi;Dt++){let Va=it[Dt];ge.update(Va,Vt),ge.bind(Va,Vt)}}return Vt}function gn(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function _n(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(v,D,W){let z=Ne.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Ne.get(v.texture).__webglTexture=D,Ne.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let W=Ne.get(v);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,W=0){G=v,k=D,K=W;let z=null,B=!1,oe=!1;if(v){let _e=Ne.get(v);if(_e.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(O.FRAMEBUFFER,_e.__webglFramebuffer),Z.copy(v.viewport),se.copy(v.scissor),Pe=v.scissorTest,he.viewport(Z),he.scissor(se),he.setScissorTest(Pe),de=-1;return}else if(_e.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(_e.__hasExternalTextures)He.rebindTextures(v,Ne.get(v.texture).__webglTexture,Ne.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let be=v.depthTexture;if(_e.__boundDepthTexture!==be){if(be!==null&&Ne.has(be)&&(v.width!==be.image.width||v.height!==be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}let fe=v.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(oe=!0);let $=Ne.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray($[D])?z=$[D][W]:z=$[D],B=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?z=Ne.get(v).__webglMultisampledFramebuffer:Array.isArray($)?z=$[W]:z=$,Z.copy(v.viewport),se.copy(v.scissor),Pe=v.scissorTest}else Z.copy(et).multiplyScalar(Le).floor(),se.copy(De).multiplyScalar(Le).floor(),Pe=Lt;if(W!==0&&(z=P),he.bindFramebuffer(O.FRAMEBUFFER,z)&&he.drawBuffers(v,z),he.viewport(Z),he.scissor(se),he.setScissorTest(Pe),B){let _e=Ne.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,W)}else if(oe){let _e=D;for(let fe=0;fe<v.textures.length;fe++){let $=Ne.get(v.textures[fe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+fe,$.__webglTexture,W,_e)}}else if(v!==null&&W!==0){let _e=Ne.get(v.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_e.__webglTexture,W)}de=-1};function Qr(v){let D=Ne.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=Ct.textureFormatReadable(v.format),D.__typeReadable=Ct.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,W,z,B,oe,_e,fe=0){if(!(v&&v.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Ne.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&($=$[_e],Array.isArray($)&&($=$[0])),$){he.bindFramebuffer(O.FRAMEBUFFER,$);try{let be=v.textures[fe],Fe=be.format,Ze=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ye=Qr(be);if(ye.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-z&&W>=0&&W<=v.height-B&&O.readPixels(D,W,z,B,ne.convert(Fe),ne.convert(Ze),oe)}finally{let be=G!==null?Ne.get(G).__webglFramebuffer:null;he.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,D,W,z,B,oe,_e,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=Ne.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&($=$[_e],Array.isArray($)&&($=$[0])),$)if(D>=0&&D<=v.width-z&&W>=0&&W<=v.height-B){he.bindFramebuffer(O.FRAMEBUFFER,$);let be=v.textures[fe],Fe=be.format,Ze=be.type;v.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);let ye=Qr(be);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Je),O.bufferData(O.PIXEL_PACK_BUFFER,oe.byteLength,O.STREAM_READ),O.readPixels(D,W,z,B,ne.convert(Fe),ne.convert(Ze),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let xt=G!==null?Ne.get(G).__webglFramebuffer:null;he.bindFramebuffer(O.FRAMEBUFFER,xt);let st=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Md(O,st,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Je),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,oe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Je),O.deleteSync(st),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,W=0){let z=Math.pow(2,-W),B=Math.floor(v.image.width*z),oe=Math.floor(v.image.height*z),_e=D!==null?D.x:0,fe=D!==null?D.y:0;He.setTexture2D(v,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,_e,fe,B,oe),he.unbindTexture()},this.copyTextureToTexture=function(v,D,W=null,z=null,B=0,oe=0){let _e,fe,$,be,Fe,Ze,ye,Je,xt,st=v.isCompressedTexture?v.mipmaps[oe]:v.image;if(W!==null)_e=W.max.x-W.min.x,fe=W.max.y-W.min.y,$=W.isBox3?W.max.z-W.min.z:1,be=W.min.x,Fe=W.min.y,Ze=W.isBox3?W.min.z:0;else{let je=Math.pow(2,-B);_e=Math.floor(st.width*je),fe=Math.floor(st.height*je),v.isDataArrayTexture?$=st.depth:v.isData3DTexture?$=Math.floor(st.depth*je):$=1,be=0,Fe=0,Ze=0}z!==null?(ye=z.x,Je=z.y,xt=z.z):(ye=0,Je=0,xt=0);let lt=ne.convert(D.format),tt=ne.convert(D.type),Te;D.isData3DTexture?(He.setTexture3D(D,0),Te=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(He.setTexture2DArray(D,0),Te=O.TEXTURE_2D_ARRAY):(He.setTexture2D(D,0),Te=O.TEXTURE_2D),he.activeTexture(O.TEXTURE0),he.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),he.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),he.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Gt=he.getParameter(O.UNPACK_ROW_LENGTH),Ti=he.getParameter(O.UNPACK_IMAGE_HEIGHT),tr=he.getParameter(O.UNPACK_SKIP_PIXELS),Vt=he.getParameter(O.UNPACK_SKIP_ROWS),ir=he.getParameter(O.UNPACK_SKIP_IMAGES);he.pixelStorei(O.UNPACK_ROW_LENGTH,st.width),he.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st.height),he.pixelStorei(O.UNPACK_SKIP_PIXELS,be),he.pixelStorei(O.UNPACK_SKIP_ROWS,Fe),he.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);let Hi=v.isDataArrayTexture||v.isData3DTexture,rr=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let je=Ne.get(v),Mt=Ne.get(D),oi=Ne.get(je.__renderTarget),it=Ne.get(Mt.__renderTarget);he.bindFramebuffer(O.READ_FRAMEBUFFER,oi.__webglFramebuffer),he.bindFramebuffer(O.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let Dt=0;Dt<$;Dt++)Hi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(v).__webglTexture,B,Ze+Dt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.get(D).__webglTexture,oe,xt+Dt)),O.blitFramebuffer(be,Fe,be+_e,Fe+fe,ye,Je,ye+_e,Je+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);he.bindFramebuffer(O.READ_FRAMEBUFFER,null),he.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Ne.has(v)){let je=Ne.get(v),Mt=Ne.get(D);he.bindFramebuffer(O.READ_FRAMEBUFFER,q),he.bindFramebuffer(O.DRAW_FRAMEBUFFER,N);for(let oi=0;oi<$;oi++)Hi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,je.__webglTexture,B,Ze+oi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,je.__webglTexture,B),rr?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,oe,xt+oi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,oe),B!==0?O.blitFramebuffer(be,Fe,be+_e,Fe+fe,ye,Je,ye+_e,Je+fe,O.COLOR_BUFFER_BIT,O.NEAREST):rr?O.copyTexSubImage3D(Te,oe,ye,Je,xt+oi,be,Fe,_e,fe):O.copyTexSubImage2D(Te,oe,ye,Je,be,Fe,_e,fe);he.bindFramebuffer(O.READ_FRAMEBUFFER,null),he.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else rr?v.isDataTexture||v.isData3DTexture?O.texSubImage3D(Te,oe,ye,Je,xt,_e,fe,$,lt,tt,st.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,oe,ye,Je,xt,_e,fe,$,lt,st.data):O.texSubImage3D(Te,oe,ye,Je,xt,_e,fe,$,lt,tt,st):v.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,oe,ye,Je,_e,fe,lt,tt,st.data):v.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,oe,ye,Je,st.width,st.height,lt,st.data):O.texSubImage2D(O.TEXTURE_2D,oe,ye,Je,_e,fe,lt,tt,st);he.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),he.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ti),he.pixelStorei(O.UNPACK_SKIP_PIXELS,tr),he.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),he.pixelStorei(O.UNPACK_SKIP_IMAGES,ir),oe===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Te),he.unbindTexture()},this.initRenderTarget=function(v){Ne.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),he.unbindTexture()},this.resetState=function(){k=0,K=0,G=null,he.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}});var hu={};Fu(hu,{createScene:()=>A0});function nu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function dl(e){let t=(r,a,n)=>{let s=Math.imul(r,374761393)^Math.imul(a,668265263)^Math.imul(n,2147483647)^e;return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296},i=(r,a,n)=>{let s=Math.floor(r),o=Math.floor(a),c=Math.floor(n),[l,h,p]=[dn(r-s),dn(a-o),dn(n-c)],u=(d,E,A)=>t(s+d,o+E,c+A),g=Ft(u(0,0,0),u(1,0,0),l),x=Ft(u(0,1,0),u(1,1,0),l),M=Ft(u(0,0,1),u(1,0,1),l),m=Ft(u(0,1,1),u(1,1,1),l);return Ft(Ft(g,x,h),Ft(M,m,h),p)};return(r,a,n,s=3)=>{let o=0,c=1,l=0,h=1;for(let p=0;p<s;p+=1)o+=i(r*h,a*h,n*h)*c,l+=c,c*=.5,h*=2.03;return o/l}}function w0(e){let t=(e/Br.freighter%1+1)%1;return t<.47?di.travel*(1-dn(t/.47)):t<.67?0:di.travel*dn((t-.67)/.33)}async function A0(e){let{container:t,labelLayer:i,landmarks:r,canvasLabel:a,getInsets:n=()=>({left:0,top:0,bottom:0}),durations:s,onSelect:o=()=>{},onInteract:c=()=>{},onZoomLimits:l=()=>{},onContextLost:h=()=>{},onContextRestored:p=()=>{}}=e,u=!!e.poster,g=sr[e.posterSize]?e.posterSize:"wide",x=window.matchMedia(`(min-width: ${ta.wide}px)`),M=window.matchMedia(`(min-width: ${ta.medium}px)`),m=()=>x.matches,d=()=>u?g:m()?"wide":M.matches?"medium":"narrow",E=e.quality||(d()==="wide"?"high":"low"),A=e.motion!==!1,y=!!e.reduced,b=e.side==="night"?"night":"day",R=document.createElement("canvas");R.className="scene__canvas",R.setAttribute("role","img"),R.setAttribute("aria-label",a(b)),t.prepend(R);let f=new iu({canvas:R,antialias:E==="high",powerPreference:"high-performance"});f.shadowMap.enabled=!0;let S=new mh;S.background=new Ge(nt.space);let C=new vi(Et.fov,1,.5,9e3),V=(w,Y={})=>new Ih({color:w,flatShading:!0,...Y}),I=(w,Y={})=>new hs({color:w,...Y}),P={hull:V(nt.hull),node:V(nt.node),box:V(nt.box),frame:V(nt.frame),gold:V(nt.gold),cell:V(nt.cell[0]),freighter:V(nt.freighter),glass:I(nt.glass[0]),lamp:I(nt.dockLamp[0]),navRed:I(nt.navRed),navGreen:I(nt.navGreen),earth:new hs({vertexColors:!0}),cloud:I(nt.cloud[0],{transparent:!0,opacity:yr.day.cloud,depthWrite:!1}),atmosphere:I(nt.atmosphere[0],{transparent:!0,opacity:yr.day.atmosphere,side:Qt,depthWrite:!1})},q=new $t,N=[],k=new qi;S.add(k);let K=(w,Y,ue=k)=>{let we=new hi(w,Y);return ue.add(we),we},G=(w,Y,ue,we,We,Be)=>{let qe=K(new Si(w,Y,ue,we).rotateZ(-Math.PI/2),We);return qe.position.x=Be,qe},de=new Fh(nt.hemiSky[0],nt.hemiGround[0],yr.day.hemi);S.add(de);let j=new Vh(nt.keyLight[0],yr.day.key);j.shadow.mapSize.set(yt.shadowMapSize,yt.shadowMapSize),Object.assign(j.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:140}),j.shadow.bias=-6e-4,j.shadow.normalBias=.03,S.add(j,j.target);let Z=new Hh(nt.workLight,0,16,2);Z.position.set(12.4,2.2,1.6),S.add(Z),N.push(G(Ua.r,Ua.r,Ua.len,12,P.node,0)),[-1,1].forEach(w=>{let Y=K(new Si(.72,.72,.9,10).rotateX(Math.PI/2),P.node);Y.position.z=w*(Ua.r+.2)}),K(new Si(.08,.08,1.3,6),P.frame).position.set(-.3,Ua.r+.55,0);let Pe=K(new Si(.85,.16,.32,12),P.hull);Pe.position.set(-.3,Ua.r+1.3,0),Pe.rotation.z=.35;let Q=yi.x1-yi.x0;N.push(G(yi.r,yi.r,Q,14,P.hull,(yi.x0+yi.x1)/2)),yi.bands.forEach(w=>G(yi.r+.04,yi.r+.04,.36,14,P.gold,w));let ae=new on(new bh(.26,10),P.glass,yi.windows.length*2),Ee=0;[-1,1].forEach(w=>{yi.windows.forEach(Y=>{q.position.set(Y,.3,w*(yi.r+.03)),q.rotation.set(0,w>0?0:Math.PI,0),q.updateMatrix(),ae.setMatrixAt(Ee,q.matrix),Ee+=1})}),k.add(ae),N.push(G(Ci.r,yi.r,Ci.x1-Ci.x0,14,P.frame,(Ci.x0+Ci.x1)/2)),G(Ci.r+.12,Ci.r+.12,.4,16,P.node,Ci.collar);let Ce=new on(new Ri(.16,.16,.16),P.lamp,8);for(let w=0;w<8;w+=1){let Y=w/8*gr;q.position.set(Ci.collar+.22,Math.sin(Y)*(Ci.r+.12),Math.cos(Y)*(Ci.r+.12)),q.rotation.set(0,0,0),q.updateMatrix(),Ce.setMatrixAt(w,q.matrix)}k.add(Ce),N.push(G(ui.r,ui.r,ui.x1-ui.x0,14,P.hull,(ui.x0+ui.x1)/2)),ui.bands.forEach(w=>G(ui.r+.04,ui.r+.04,.36,14,P.gold,w));let Le=new on(new Ri(.95,.55,.95),P.box,ui.boxes.length);ui.boxes.forEach((w,Y)=>{q.position.set(w,ui.r+.22,0),q.rotation.set(0,0,0),q.updateMatrix(),Le.setMatrixAt(Y,q.matrix)}),k.add(Le),N.push(Le),G(ui.r,1.05,.5,14,P.node,ui.x0-.25);let le=new qi;le.position.copy(su.at),le.quaternion.setFromUnitVectors(S0,su.dir),k.add(le);let ke=K(new Si(1.12,1.12,.22,12),P.gold,le);ke.position.y=.11;let et=K(new Si(.58,1.02,.78,6),P.glass,le);et.position.y=.6;let De=K(new Si(.62,.62,.06,6),P.frame,le);De.position.y=1;let Lt=K(new Si(.44,.44,.04,6),P.glass,le);Lt.position.y=1.04,N.push(ke);let Bt=[],Rt=[],_t=(ft.width-ft.gap*(ft.cols+1))/ft.cols,zt=(ft.len-ft.gap*(ft.rows+1))/ft.rows;[-1,1].forEach(w=>{let Y=K(new Ri($i.w,$i.w,$i.z1-$i.z0),P.frame);Y.position.z=w*($i.z0+$i.z1)/2,N.push(Y);let ue=new qi;ue.position.z=w*ft.z,k.add(ue),Bt.push(ue);let we=new on(new Ri(_t,.09,zt),P.cell,ft.cols*ft.rows*2),We=0;[-1,1].forEach(qe=>{let bi=qe*(ft.inner+ft.width/2),kt=K(new Ri(ft.width,.06,ft.len),P.gold,ue);kt.position.x=bi,Rt.push(kt);for(let Ni=0;Ni<ft.cols;Ni+=1)for(let nr=0;nr<ft.rows;nr+=1)q.position.set(bi-ft.width/2+ft.gap+_t/2+Ni*(_t+ft.gap),0,-ft.len/2+ft.gap+zt/2+nr*(zt+ft.gap)),q.rotation.set(0,0,0),q.updateMatrix(),we.setMatrixAt(We,q.matrix),We+=1}),ue.add(we),K(new Ri(.18,.18,.18),P.lamp).position.set(0,$i.w/2+.09,w*($i.z0+.3))}),N.push(...Rt),K(new ol(.2,8,6),P.navRed).position.set(0,0,-($i.z1+.15)),K(new ol(.2,8,6),P.navGreen).position.set(0,0,$i.z1+.15);let Nt={red:new Ge(nt.navRed),green:new Ge(nt.navGreen)},vt=new qi;S.add(vt);let Kt=K(new Si(di.r,di.r,di.len,10).rotateZ(-Math.PI/2),P.freighter,vt),pi=K(new Rh(di.r,.55,10).rotateZ(Math.PI/2),P.frame,vt);pi.position.x=-di.len/2-.27;let O=K(new Si(.35,.5,.45,8).rotateZ(-Math.PI/2),P.frame,vt);O.position.x=di.len/2+.22;let fi=K(new Si(di.r+.03,di.r+.03,.22,10).rotateZ(-Math.PI/2),P.gold,vt);fi.position.x=-.3,[-1,1].forEach(w=>{K(new Ri(.7,.05,1.5),P.cell,vt).position.set(.25,0,w*(di.r+.8))}),K(new Ri(.12,.12,.12),P.lamp,vt).position.set(-di.len/2-.05,di.r*.7,0),N.push(Kt);function Ct(w){vt.position.set(E0+w0(w),0,0)}[k,vt].forEach(w=>{w.traverse(Y=>{Y.isMesh&&Y.material!==P.glass&&Y.material!==P.lamp&&(Y.castShadow=!0,Y.receiveShadow=!0)})});let he=new qi;he.position.y=-(ri.radius+ri.altitude),S.add(he);function ot(w,Y){let ue=Math.cos(Y*ei),we=(1+Math.sqrt(5))/2,We=[[-1,we,0],[1,we,0],[-1,-we,0],[1,-we,0],[0,-1,we],[0,1,we],[0,-1,-we],[0,1,-we],[we,0,-1],[we,0,1],[-we,0,-1],[-we,0,1]].map(Me=>new H(...Me).normalize()),Be=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],qe=Math.cos(Math.min(Math.PI,(Y+40)*ei)),bi=[],kt=[],Ni=(Me,ct,It,St,Vi)=>{let ht=w;return new H().addScaledVector(Me,(ht-St-Vi)/ht).addScaledVector(ct,St/ht).addScaledVector(It,Vi/ht).normalize()},nr=(Me,ct,It)=>{let St=new H().add(Me).add(ct).add(It).normalize();St.y<ue||bi.push({v:[Me.x,Me.y,Me.z,ct.x,ct.y,ct.z,It.x,It.y,It.z],c:[St.x,St.y,St.z]})};for(let Me=0;Me<Be.length;Me+=3){let[ct,It,St]=[We[Be[Me]],We[Be[Me+1]],We[Be[Me+2]]];if(!(new H().add(ct).add(It).add(St).normalize().y<qe)){kt.length=0;for(let ht=0;ht<=w;ht+=1){kt[ht]=[];for(let qt=0;qt<=w-ht;qt+=1)kt[ht][qt]=Ni(ct,It,St,ht,qt)}for(let ht=0;ht<w;ht+=1)for(let qt=0;qt<w-ht;qt+=1)nr(kt[ht][qt],kt[ht+1][qt],kt[ht][qt+1]),qt<w-ht-1&&nr(kt[ht+1][qt],kt[ht+1][qt+1],kt[ht][qt+1])}}return bi}function Ne(w,Y){let ue=new Float32Array(w.length*9);w.forEach((We,Be)=>{for(let qe=0;qe<9;qe+=1)ue[Be*9+qe]=We.v[qe]*Y});let we=new Mi;return we.setAttribute("position",new gt(ue,3)),we}let He=dl(7),Ht=dl(19),T=dl(31),_=w=>He(w[0]*9+3.1,w[1]*9,w[2]*9-1.7,4),F=ot(ri.detail,ri.capDeg),ie=F.map(w=>_(w.c)).sort((w,Y)=>w-Y),J=ie[Math.floor(ie.length*.68)],ce=nu(23),pe=F.map(w=>{let Y=_(w.c),ue=.96+ce()*.06;if(Y>=J){let we=Ht(w.c[0]*14,w.c[1]*14+5,w.c[2]*14,2);return{group:"land",index:we<.42?0:we<.62?1:2,jitter:ue}}return{group:"ocean",index:Y>J-.03?1:0,jitter:ue}}),U=Ne(F,ri.radius);U.setAttribute("color",new gt(new Float32Array(F.length*9),3));let ee=new hi(U,P.earth);he.add(ee);let ve=w=>T(w[0]*46,w[1]*46-2,w[2]*46+4,3),L=ot(ri.cloudDetail,ri.capDeg),X=L.map(w=>ve(w.c)).sort((w,Y)=>w-Y),te=X[Math.floor(X.length*.7)],ne=L.filter(w=>ve(w.c)>=te),me=new hi(Ne(ne,ri.radius+ri.cloudLift),P.cloud);me.position.y=he.position.y,S.add(me);let ge=new hi(Ne(ot(ri.atmosphereDetail,ri.atmosphereCapDeg),ri.radius+ri.atmosphereLift),P.atmosphere);ge.position.y=he.position.y,S.add(ge);let Ae=Math.cos(24*ei),re=F.filter((w,Y)=>pe[Y].group==="land"&&w.c[1]>=Ae),Ue=[];for(let w=0;w<70&&re.length;w+=1)Ue.push(re[Math.floor(ce()*re.length)].c);let Ie=new Float32Array(yt.cityHigh*3),Ke=new Float32Array(yt.cityHigh*3),Se=new Ge(nt.cityLight),at=new H;for(let w=0,Y=0;w<yt.cityHigh&&Y<yt.cityHigh*20;Y+=1){let ue=Ue[w%Ue.length],we=.004+ce()*.012;if(at.set(ue[0]+(ce()-.5)*we,ue[1]+(ce()-.5)*we,ue[2]+(ce()-.5)*we).normalize(),_([at.x,at.y,at.z])<J)continue;at.multiplyScalar(ri.radius+.8),Ie.set([at.x,at.y,at.z],w*3);let We=.55+ce()*.45;Ke.set([Se.r*We,Se.g*We,Se.b*We],w*3),w+=1}let dt=new Mi;dt.setAttribute("position",new gt(Ie,3)),dt.setAttribute("color",new gt(Ke,3)),P.city=new us({size:yt.cityPx,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1});let Jr=new sl(dt,P.city);Jr.frustumCulled=!1,he.add(Jr);let Ur=6e3,mn=new Float32Array(yt.starsHigh*3),Ba=new Float32Array(yt.starsHigh*3),za=new Float32Array(yt.starsHigh*4),zi=nt.stars.map(w=>new Ge(w)),Ei=nu(41);for(let w=0;w<yt.starsHigh;w+=1){let Y=-.42+Ei()*1.42,ue=Ei()*gr,we=Math.sqrt(1-Y*Y);mn.set([Math.cos(ue)*we*Ur,Y*Ur,Math.sin(ue)*we*Ur],w*3);let We=zi[Math.floor(Ei()*zi.length)],Be=.45+Ei()*.55;Ba.set([We.r*Be,We.g*Be,We.b*Be],w*3);let qe=1.5+Ei()*2.5;za.set([Ei()*gr,gr/qe,.2+Ei()*.35,.75+Ei()*.6],w*4)}let xr=new Mi;xr.setAttribute("position",new gt(mn,3)),xr.setAttribute("color",new gt(Ba,3)),xr.setAttribute("twinkle",new gt(za,4));let Ha={value:cu};P.stars=new us({size:yt.starPx,sizeAttenuation:!1,vertexColors:!0,transparent:!0,opacity:yr.day.stars,depthWrite:!1}),P.stars.onBeforeCompile=w=>{w.uniforms.twinkleTime=Ha,w.vertexShader=`uniform float twinkleTime;
attribute vec4 twinkle;
${w.vertexShader}`.replace("#include <color_vertex>",`#include <color_vertex>
	vColor *= 1.0 - twinkle.z * ( 0.5 + 0.5 * sin( twinkleTime * twinkle.y + twinkle.x ) );`).replace("gl_PointSize = size;","gl_PointSize = size * twinkle.w;")};let Or=new sl(xr,P.stars);Or.frustumCulled=!1,S.add(Or);let Pi=yr.day,Li=yr.night,si=(w,Y,ue)=>ue.set(w[0]).lerp(new Ge(w[1]),Y),xs={ocean:nt.ocean.map(w=>w.map(Y=>new Ge(Y))),land:nt.land.map(w=>w.map(Y=>new Ge(Y)))},Ga=U.attributes.color,Fr=new Ge,er=b==="night"?1:0,gn=1;function _n(){let w=Ft(Pi.nav,Li.nav,er)*gn;P.navRed.color.copy(Nt.red).multiplyScalar(w),P.navGreen.color.copy(Nt.green).multiplyScalar(w)}function Qr(w){si(nt.hemiSky,w,de.color),si(nt.hemiGround,w,de.groundColor),de.intensity=Ft(Pi.hemi,Li.hemi,w),si(nt.keyLight,w,j.color),j.intensity=Ft(Pi.key,Li.key,w),j.position.lerpVectors(T0,b0,w).normalize().multiplyScalar(60),Z.intensity=Ft(Pi.work,Li.work,w),si(nt.cell,w,P.cell.color),si(nt.glass,w,P.glass.color),si(nt.dockLamp,w,P.lamp.color),si(nt.cloud,w,P.cloud.color),P.cloud.opacity=Ft(Pi.cloud,Li.cloud,w),si(nt.atmosphere,w,P.atmosphere.color),P.atmosphere.opacity=Ft(Pi.atmosphere,Li.atmosphere,w),P.city.opacity=Ft(Pi.city,Li.city,w),Jr.visible=P.city.opacity>.001,P.stars.opacity=Ft(Pi.stars,Li.stars,w);for(let Y=0;Y<pe.length;Y+=1){let{group:ue,index:we,jitter:We}=pe[Y],Be=xs[ue][we];Fr.copy(Be[0]).lerp(Be[1],w).multiplyScalar(We);for(let qe=0;qe<3;qe+=1)Ga.setXYZ(Y*3+qe,Fr.r,Fr.g,Fr.b)}Ga.needsUpdate=!0,_n()}Qr(er);function v(w){he.rotation.y=w/Br.earth*gr,me.rotation.y=w/Br.cloud*gr;let Y=ft.base+ft.sweep*Math.sin(w/Br.panel*gr);Bt.forEach(ue=>{ue.rotation.z=Y}),Ct(w),Ha.value=w}let D=()=>E==="high"?yt.starsHigh:yt.starsLow,W=()=>E==="high"?yt.cityHigh:yt.cityLow;function z(){let w=window.devicePixelRatio||1;return u?1:Math.min(w,E==="high"?yt.pixelRatioHigh:yt.pixelRatioLow)}function B(){j.castShadow=E==="high",xr.setDrawRange(0,D()),dt.setDrawRange(0,W())}B();function oe(w){w!==E&&(E=w,B(),$r())}let _e=Et.elevationMin*ei,fe=Et.elevationMax*ei,$={az:Et.startAzimuth*ei,el:Et.startElevation*ei,dist:60,target:lu.clone()},be=60,Fe=1,Ze=1,ye=0,Je=Et.minEffective,xt=100,st=!0,lt=!1,tt=null,Te=null,Gt="",Ti=w=>Qi(w,Je,xt);function tr(){let w=$.dist<=Je+.01,Y=$.dist>=xt-.01,ue=`${w}|${Y}`;ue!==Gt&&(Gt=ue,l({atMin:w,atMax:Y}))}function Vt(){let{az:w,el:Y,dist:ue,target:we}=$;C.position.set(we.x+ue*Math.cos(Y)*Math.sin(w),we.y+ue*Math.sin(Y),we.z+ue*Math.cos(Y)*Math.cos(w)),C.lookAt(we),tr()}function ir(w,Y){let ue={az:$.az+y0((w.az??$.az)-$.az),el:Qi(w.el??$.el,_e,fe),dist:Ti(w.dist??$.dist),target:(w.target??$.target).clone()};if(y||Y<=0){$.az=ue.az,$.el=ue.el,$.dist=ue.dist,$.target.copy(ue.target),tt=null,li();return}tt={from:{az:$.az,el:$.el,dist:$.dist,target:$.target.clone()},to:ue,start:performance.now(),duration:Y},li()}function Hi(w){if(!tt)return;let{from:Y,to:ue,start:we,duration:We}=tt,Be=au(Qi((w-we)/We,0,1));$.az=Ft(Y.az,ue.az,Be),$.el=Ft(Y.el,ue.el,Be),$.dist=Ft(Y.dist,ue.dist,Be),$.target.lerpVectors(Y.target,ue.target,Be),Be>=1&&(tt=null)}function rr(w){if(!Te)return;let{from:Y,to:ue,start:we,duration:We}=Te,Be=au(Qi((w-we)/We,0,1));er=Ft(Y,ue,Be),Qr(er),Be>=1&&(Te=null)}function je(){tt=null,st=!1,lt||(lt=!0,c())}let Mt=r.map(({id:w,name:Y})=>{let ue=document.createElement("button");ue.type="button",ue.className="marker is-hidden",ue.tabIndex=-1,ue.dataset.id=w;let we=document.createElement("span");we.className="marker__pill";let We=document.createElement("span");return We.className="marker__text",We.textContent=Y,we.append(We),ue.append(we),ue.addEventListener("click",()=>o(w)),i.append(ue),{id:w,el:ue,anchor:new H(...ou[w].anchor),occluded:!1,shown:!1,current:!1,half:null,height:0,pillW:0,pillH:0}}),oi=!1,it=new H,Dt=new H,mi=new kh,Va=0,Pu=e.avoid||[],El=Mt.find(w=>w.id==="solar");function Lu(w){if(!oi)return;let Y=t.clientWidth,ue=t.clientHeight,we=w-Va>120;we&&(Va=w),El&&(El.anchor.z=(C.position.z>=0?1:-1)*ft.z),Mt.forEach(Me=>{Me.half===null&&(Me.half=Me.el.offsetWidth/2,Me.height=Me.el.offsetHeight,Me.pillW=Me.el.firstElementChild.offsetWidth,Me.pillH=Me.el.firstElementChild.offsetHeight)});let We=t.getBoundingClientRect(),Be=Pu.map(Me=>Me.getBoundingClientRect()).filter(Me=>Me.width>0&&Me.height>0).map(Me=>({l:Me.left-We.left,t:Me.top-We.top,r:Me.right-We.left,b:Me.bottom-We.top})),qe=4,bi=(Me,ct)=>Me.l<ct.r+qe&&Me.r>ct.l-qe&&Me.t<ct.b+qe&&Me.b>ct.t-qe,kt=(Me,ct,It)=>{let St=It-Me.height/2;return{l:ct-Me.pillW/2,r:ct+Me.pillW/2,t:St-Me.pillH/2,b:St+Me.pillH/2}},Ni=Mt.map(Me=>{if(we){Dt.subVectors(Me.anchor,C.position);let qt=Dt.length();mi.set(C.position,Dt.normalize()),mi.far=qt;let Nl=mi.intersectObjects(N,!1);Me.occluded=Nl.length>0&&Nl[0].distance<qt-.6}it.copy(Me.anchor).project(C);let ct=(it.x*.5+.5)*Y,It=it.z<1&&ct>ye&&it.x<1.02&&it.y>-1.02&&it.y<1.08,St=ye+Me.half+qe,Vi=Qi(ct,St,Math.max(St,Y-Me.half-qe)),ht=Qi((-it.y*.5+.5)*ue,Me.height+qe,Math.max(Me.height+qe,ue-qe));return{m:Me,x:Vi,y:ht,depth:it.z,candidate:It&&!Me.occluded}});Ni.sort((Me,ct)=>Number(ct.m.current)-Number(Me.m.current)||Me.depth-ct.depth);let nr=[];Ni.forEach(Me=>{let{y:ct}=Me,It=Me.candidate;if(It){let St=kt(Me.m,Me.x,ct),Vi=Me.m.current&&Be.find(ht=>bi(St,ht));Vi&&(ct+=Vi.t>ue/2?Vi.t-qe*2-St.b:Vi.b+qe*2-St.t,ct=Qi(ct,Me.m.height+qe,Math.max(Me.m.height+qe,ue-qe)),St=kt(Me.m,Me.x,ct)),Be.some(ht=>bi(St,ht))||nr.some(ht=>bi(St,ht))?It=!1:nr.push(St)}Me.m.el.style.transform=`translate3d(${Me.x.toFixed(1)}px, ${ct.toFixed(1)}px, 0) translate(-50%, -100%)`,It!==Me.m.shown&&(Me.m.shown=It,Me.m.el.classList.toggle("is-hidden",!It))})}let vn=cu,Mr=0,ar=0,Tl=!document.hidden,bl=!0,Ms=!1,wl=!1,jt={warmUntil:0,frames:0,total:0,prev:0};function Nu(){return A&&!u}function li(){!Mr&&Tl&&bl&&!Ms&&!wl&&(Mr=requestAnimationFrame(Al))}function Du(w,Y){if(!Y||E!=="high"||u||e.quality){jt.warmUntil=0,jt.prev=0;return}if(!jt.warmUntil){jt.warmUntil=w+yt.warmupMs,jt.frames=0,jt.total=0,jt.prev=w;return}let ue=w-jt.prev;jt.prev=w,!(w<jt.warmUntil)&&(jt.frames+=1,jt.total+=ue,jt.total>=yt.sampleWindowMs&&(jt.total/jt.frames>yt.slowFrameMs&&oe("low"),jt.frames=0,jt.total=0))}function Al(w){Mr=0;let Y=ar?Math.min((w-ar)/1e3,.1):0;ar=w;let ue=Nu();ue&&(vn+=Y,!lt&&!y&&!tt&&($.az+=Y/Br.autoRotate*gr)),gn=ue?.55+.45*(.5+.5*Math.sin(vn/Br.nav*gr)):1,_n(),Hi(w),rr(w),v(vn),Vt(),f.render(S,C),Lu(w),Du(w,ue),ue||tt||Te?li():ar=0}function Iu(w,Y){if(u)return 1;let ue=sr[d()];return w/Y/(ue.refHeight/Sn(d()))}function $r(){let w=t.clientWidth,Y=t.clientHeight;if(!w||!Y)return;f.setPixelRatio(z()),f.setSize(w,Y,!1);let ue=d();be=Sn(ue);let we;if(u){let Be=sr[ue];C.aspect=Be.refWidth/Be.refHeight,C.zoom=1,C.setViewOffset(Be.refWidth,Be.refHeight,-(w-Be.refWidth)/2,-(Y-Be.refHeight)/2,w,Y),ye=0,Ze=Be.refWidth/Be.refHeight,Fe=1,we=be}else{let Be=n()||{},qe={left:Math.min(Be.left||0,w*.6),top:Be.top||0,bottom:Be.bottom||0},bi=yn(w,Y,qe);we=Es(w,Y,qe),Fe=be/we,C.aspect=w/Y,C.zoom=Fe;let kt=-qe.left/2,Ni=-(qe.top-qe.bottom)/2;kt||Ni?C.setViewOffset(w,Y,kt,Ni,w,Y):C.clearViewOffset(),ye=qe.left,Ze=bi.width/bi.height}C.updateProjectionMatrix();let We=Iu(Y,we)*z();P.stars.size=yt.starPx*We,P.city.size=yt.cityPx*We,Mt.forEach(Be=>{Be.half=null}),Je=Et.minEffective*Fe,xt=be*Et.maxDistanceFactor,st&&!tt&&($.dist=be),$.dist=Ti($.dist),ar=0,li()}let Rl=new AbortController,{signal:Gi}=Rl,Sr=new Map,ea=null,Ss=()=>{let[w,Y]=[...Sr.values()];return{d:Math.max(1,Math.hypot(w.x-Y.x,w.y-Y.y)),my:(w.y+Y.y)/2}};R.addEventListener("pointerdown",w=>{w.pointerType==="mouse"&&w.button!==0||(je(),Sr.set(w.pointerId,{x:w.clientX,y:w.clientY,type:w.pointerType}),w.pointerType==="mouse"&&R.setPointerCapture(w.pointerId),ea=Sr.size===2?Ss():null)},{signal:Gi}),R.addEventListener("pointermove",w=>{let Y=Sr.get(w.pointerId);if(!Y)return;let ue=w.clientX-Y.x,we=w.clientY-Y.y;Y.x=w.clientX,Y.y=w.clientY;let We=Math.PI/Math.max(320,t.clientHeight);if(Sr.size===1)$.az-=ue*We*1.3,(Y.type==="mouse"||m())&&($.el=Qi($.el+we*We,_e,fe));else if(Sr.size===2&&ea){let Be=Ss();$.dist=Ti($.dist*(ea.d/Be.d)),$.el=Qi($.el+(Be.my-ea.my)*We,_e,fe),ea=Be}li()},{signal:Gi});let Cl=w=>{Sr.delete(w.pointerId),ea=Sr.size===2?Ss():null};R.addEventListener("pointerup",Cl,{signal:Gi}),R.addEventListener("pointercancel",Cl,{signal:Gi}),R.addEventListener("wheel",w=>{if(!m())return;w.preventDefault(),je();let Y=w.deltaMode===1?w.deltaY*16:w.deltaY;$.dist=Ti($.dist*Math.exp(Y*.0012)),li()},{passive:!1,signal:Gi}),R.addEventListener("webglcontextlost",w=>{w.preventDefault(),Ms=!0,Mr&&cancelAnimationFrame(Mr),Mr=0,h()},{signal:Gi}),R.addEventListener("webglcontextrestored",()=>{Ms=!1,ar=0,li(),p()},{signal:Gi}),document.addEventListener("visibilitychange",()=>{Tl=!document.hidden,ar=0,li()},{signal:Gi});let Pl=new ResizeObserver(()=>$r());Pl.observe(t);let Ll=new IntersectionObserver(w=>{bl=w.some(Y=>Y.isIntersecting),ar=0,li()});Ll.observe(t),x.addEventListener("change",()=>$r(),{signal:Gi}),M.addEventListener("change",()=>$r(),{signal:Gi}),$r(),await new Promise(w=>{requestAnimationFrame(Y=>{Al(Y),w()})}),oi=!0;let Uu=w=>ir({az:Et.startAzimuth*ei,el:Et.startElevation*ei,dist:be,target:lu},w);return{canvas:R,relayout(){$r()},focus(w){let Y=ou[w];if(!Y)return;je();let ue=Math.max(Et.minEffective,Y.distance*Qi(1.25/Ze,1,2));ir({az:Y.azimuth*ei,el:Y.elevation*ei,dist:ue*Fe,target:new H(...Y.target)},s.camera)},reset(){tt=null,Uu(s.camera),st=!0},rotateStep(w){je(),ir({az:$.az+w*Et.stepRotate*ei},s.cameraStep)},zoomStep(w){je();let Y=w>0?Et.stepZoom:1/Et.stepZoom;ir({dist:$.dist*Y},s.cameraStep)},setSelected(w){Mt.forEach(Y=>{Y.current=Y.id===w,Y.el.classList.toggle("is-current",Y.current),Y.half=null}),li()},setSide(w,Y){b=w,R.setAttribute("aria-label",a(b));let ue=w==="night"?1:0;if(!Y||y||!A){Te=null,er=ue,Qr(er),li();return}Te={from:er,to:ue,start:performance.now(),duration:s.sideShift},li()},setMotion(w){A=w,ar=0,li()},setReduced(w){y=w,li()},loseContextForTest(){f.forceContextLoss()},get quality(){return E},cameraState(){return{azimuth:$.az/ei,elevation:$.el/ei,distance:$.dist,effective:$.dist/Fe,lens:Fe,minEffective:Je/Fe,target:$.target.toArray(),tweening:!!tt,sceneTime:vn}},stats(){return{calls:f.info.render.calls,triangles:f.info.render.triangles,points:f.info.render.points,quality:E,stars:D(),cityLights:W(),earthFaces:F.length,cloudFaces:ne.length}},dispose(){wl=!0,Mr&&cancelAnimationFrame(Mr),Rl.abort(),Pl.disconnect(),Ll.disconnect(),S.traverse(w=>{w.geometry&&w.geometry.dispose()}),Object.values(P).forEach(w=>w.dispose()),f.dispose(),R.remove(),Mt.forEach(w=>w.el.remove())}}}var ei,gr,S0,Qi,Ft,au,dn,y0,Ua,yi,Ci,ui,su,$i,ft,di,E0,ou,lu,cu,T0,b0,uu=xn(()=>{ru();Mn();Ts();ei=Math.PI/180,gr=Math.PI*2,S0=new H(0,1,0),Qi=(e,t,i)=>Math.min(i,Math.max(t,e)),Ft=(e,t,i)=>e+(t-e)*i,au=e=>1-Math.pow(1-e,3),dn=e=>e*e*(3-2*e),y0=e=>Math.atan2(Math.sin(e),Math.cos(e));Ua={r:1.8,len:2.6},yi={x0:1.3,x1:9.3,r:1.5,bands:[2.4,5.3,8.2],windows:[3,3.7,4.4,6.2,6.9,7.6]},Ci={x0:9.3,x1:10.4,collar:10.6,r:.95},ui={x0:-8.7,x1:-1.3,r:1.4,bands:[-2.6,-7.4],boxes:[-3.3,-5.1,-6.9]},su={at:new H(-9.15,-.2,.15),dir:new H(-1,-.28,.32).normalize()},$i={z0:2.3,z1:12.8,w:.42},ft={z:7.9,len:9,width:3.2,inner:.4,cols:2,rows:6,gap:.12,base:-40*ei,sweep:14*ei},di={len:2.2,r:.55,travel:26},E0=Ci.collar+.2+.35+di.len/2,ou={habitat:{anchor:[5.3,1.7,0],target:[5.3,.2,0],azimuth:28,elevation:22,distance:24},lab:{anchor:[-4.2,1.6,0],target:[-5,.3,0],azimuth:-24,elevation:26,distance:24},solar:{anchor:[0,1.4,ft.z],target:[.4,0,7.4],azimuth:62,elevation:38,distance:30},dock:{anchor:[10.7,1.25,0],target:[12.2,0,0],azimuth:58,elevation:18,distance:21},window:{anchor:[-10.3,.5,.45],target:[-9.4,-.2,.2],azimuth:-68,elevation:12,distance:20}},lu=new H(.6,0,0),cu=19.8,T0=new H(.62,.72,.3).normalize(),b0=new H(-.4,.75,-.3).normalize()});Mn();Ts();var Oa=document.documentElement,_r=new URLSearchParams(window.location.search),ti={state:_r.get("state"),poster:_r.get("poster"),side:_r.get("side"),select:_r.get("select"),motion:_r.get("motion"),quality:["high","low"].includes(_r.get("quality"))?_r.get("quality"):void 0,size:["wide","medium","narrow"].includes(_r.get("size"))?_r.get("size"):"wide"},Xt=(e,t=document)=>t.querySelector(e),Zr=(e,t=document)=>[...t.querySelectorAll(e)],Re={scene:Xt("#scene"),labels:Xt(".scene__labels"),poster:Xt(".scene__poster"),posterImg:Xt(".scene__poster img"),posterSources:Zr(".scene__poster source"),progress:Xt(".scene__progress"),controls:Xt(".scene__controls"),toggles:Xt(".scene__toggles"),motionBtn:Xt('[data-action="motion"]'),sideBtn:Xt('[data-action="side"]'),zoomIn:Xt('[data-action="zoom-in"]'),zoomOut:Xt('[data-action="zoom-out"]'),bannerRegion:Xt(".banner-region"),landmarksHead:Xt("#landmarks"),announcer:Xt("[data-announcer]"),backdrop:Xt(".panel-backdrop"),landmarkButtons:Zr(".landmark"),details:Zr("[data-detail]")},R0=e=>getComputedStyle(Oa).getPropertyValue(e).trim(),vr=e=>parseFloat(R0(e))||0,Ir={camera:vr("--ds-motion-camera"),cameraStep:vr("--ds-motion-camera-step"),sideShift:vr("--ds-motion-side-shift"),crossfade:vr("--ds-motion-crossfade"),loadingDelay:vr("--ds-motion-loading-delay"),loadingMin:vr("--ds-motion-loading-min"),loadingSlow:vr("--ds-motion-loading-slow"),contextRestore:vr("--ds-motion-context-restore"),hintHold:vr("--ds-motion-hint-hold")},ii={motionStop:"\uC6C0\uC9C1\uC784 \uBA48\uCD94\uAE30",motionStart:"\uC6C0\uC9C1\uC784 \uB2E4\uC2DC \uCF1C\uAE30",toNight:"\uC9C0\uAD6C \uBC24 \uCABD\uC73C\uB85C \uAC00\uAE30",toDay:"\uC9C0\uAD6C \uB0AE \uCABD\uC73C\uB85C \uAC00\uAE30",progress:"\uC815\uAC70\uC7A5\uC744 \uADF8\uB9AC\uB294 \uC911\uC774\uC5D0\uC694",slow:"\uC5F0\uACB0\uC774 \uB290\uB824 3D \uC7A5\uBA74 \uD30C\uC77C\uC744 \uBC1B\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB824\uC694. \uBAA9\uB85D\uC740 \uC9C0\uAE08 \uBCFC \uC218 \uC788\uC5B4\uC694.",slowAction:"3D \uC5C6\uC774 \uBCF4\uAE30",failed:"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uC7A5\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4\uC694. \uBAA9\uB85D\uC5D0\uC11C \uBA85\uC18C\uB97C \uACE0\uB974\uBA74 \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.",lost:"3D \uC7A5\uBA74\uC774 \uBA48\uCDC4\uC5B4\uC694. \uB2E4\uC2DC \uADF8\uB9AC\uBA74 \uC774\uC5B4\uC11C \uBCFC \uC218 \uC788\uC5B4\uC694.",lostAction:"\uB2E4\uC2DC \uADF8\uB9AC\uAE30",closeBanner:"\uC54C\uB9BC \uB2EB\uAE30",viewing:e=>`${e} \uBCF4\uB294 \uC911`,altDay:"\uC9C0\uAD6C \uB0AE \uCABD \uC704\uB97C \uB3C4\uB294 \uC791\uC740 \uC815\uAC70\uC7A5. \uAC70\uC8FC \uBAA8\uB4C8, \uC2E4\uD5D8\uC2E4 \uBAA8\uB4C8, \uD0DC\uC591 \uC804\uC9C0\uD310, \uB3C4\uD0B9 \uD3EC\uD2B8, \uAD00\uCE21 \uCC3D\uC774 \uC788\uB294 3D \uC7A5\uBA74",altNight:"\uC9C0\uAD6C \uBC24 \uCABD \uC704\uB97C \uB3C4\uB294 \uC791\uC740 \uC815\uAC70\uC7A5. \uC544\uB798\uB85C \uB3C4\uC2DC \uBD88\uBE5B\uC774 \uBCF4\uC774\uACE0 \uAC70\uC8FC \uBAA8\uB4C8, \uC2E4\uD5D8\uC2E4 \uBAA8\uB4C8, \uD0DC\uC591 \uC804\uC9C0\uD310, \uB3C4\uD0B9 \uD3EC\uD2B8, \uAD00\uCE21 \uCC3D\uC5D0 \uBD88\uC774 \uCF1C\uC9C4 3D \uC7A5\uBA74"},vu=e=>e==="night"?ii.altNight:ii.altDay,vl=Re.landmarkButtons.map(e=>({id:e.dataset.id,name:Xt(".landmark__name",e).textContent.trim()})),C0=e=>vl.find(t=>t.id===e)?.name??"",gs=window.matchMedia("(prefers-reduced-motion: reduce)"),xu=window.matchMedia(`(min-width: ${ta.wide}px)`),Ye={mode:"loading",selected:null,side:ti.side==="night"||ti.poster==="night"?"night":"day",reduced:gs.matches,motion:ti.motion!=="off"&&!gs.matches&&!ti.poster},At=null,pl=null,pn=!1,_s=0,du=!1,fs=new ResizeObserver(()=>{gl(),At?.relayout()}),Mu=e=>new Promise(t=>setTimeout(t,e));function Fa(e){Ye.mode=e,Oa.dataset.mode=e,Su()}var pu=(e,t)=>{t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")};function Su(){let e=Ye.mode==="ready";Zr(".scene__canvas",Re.scene).forEach(t=>pu(t,!e)),pu(Re.poster,e)}function xl(e){Re.announcer.textContent="",e&&requestAnimationFrame(()=>Re.announcer.textContent=e)}function Ml(){Re.landmarkButtons.forEach(t=>{t.dataset.id===Ye.selected?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")});let e=Ye.selected??"intro";Re.details.forEach(t=>t.classList.toggle("is-current",t.dataset.detail===e)),At?.setSelected(Ye.selected)}function yu(){let e=new URL(window.location.href);Ye.selected?e.searchParams.set("select",Ye.selected):e.searchParams.delete("select");try{window.history.replaceState(null,"",e)}catch{}}function ml(e){vl.some(t=>t.id===e)&&(Ye.selected=e,Ml(),yu(),xl(ii.viewing(C0(e))),At&&Ye.mode==="ready"&&At.focus(e))}function Eu(){let e=Ye.selected!==null;Ye.selected=null,Ml(),yu(),At&&Ye.mode==="ready"&&At.reset(),e&&xl("")}function fl(){Re.motionBtn.textContent=Ye.motion?ii.motionStop:ii.motionStart,At?.setMotion(Ye.motion)}function fu(e,t){return`assets/poster-${e}-${t}.webp`}function P0(){Re.posterSources.forEach(e=>{e.srcset=fu(Ye.side,e.dataset.size)}),Re.posterImg.src=fu(Ye.side,"narrow"),Re.posterImg.alt=vu(Ye.side)}var L0=window.matchMedia(`(min-width: ${ta.medium}px)`);function N0(){return xu.matches?"wide":L0.matches?"medium":"narrow"}function gl(){if(ti.poster)return;let e=Re.scene.clientWidth,t=Re.scene.clientHeight;if(!e||!t)return;let i=N0(),r=Re.posterImg;if(r.naturalWidth&&r.naturalWidth!==sr[i].width){Re.poster.classList.remove("is-placed");return}let a=Ol(i,e,t,Ru());Re.poster.classList.toggle("is-placed",!!a),a&&Object.entries(a).forEach(([n,s])=>{Re.poster.style.setProperty(`--poster-${n}`,`${s.toFixed(1)}px`)})}function D0(){return Zr(".tooltip",Re.controls).some(t=>getComputedStyle(t).visibility==="visible")?(Re.controls.classList.add("is-tip-dismissed"),Zr(".icon-btn.is-tip",Re.controls).forEach(t=>t.classList.remove("is-tip")),!0):!1}function mu(e){Oa.dataset.side=Ye.side,Re.sideBtn.textContent=Ye.side==="night"?ii.toDay:ii.toNight,P0(),At?.setSide(Ye.side,e)}function gu(e,t){let i=Xt(".tooltip",e);e.setAttribute("aria-disabled",t?"true":"false"),i.textContent=t?i.dataset.limit:e.getAttribute("aria-label"),t?e.setAttribute("aria-describedby",i.id):e.removeAttribute("aria-describedby")}function I0({atMin:e,atMax:t}){gu(Re.zoomIn,e),gu(Re.zoomOut,t)}function U0(e){!At||Ye.mode!=="ready"||(e==="rotate-left"?At.rotateStep(1):e==="rotate-right"?At.rotateStep(-1):e==="zoom-in"?At.zoomStep(1):e==="zoom-out"?At.zoomStep(-1):e==="reset"&&Eu())}function _u(e,t){let i=document.createElement("button");return i.type="button",i.className=e,i.textContent=t,i}var O0=e=>e.getClientRects().length>0&&getComputedStyle(e).visibility!=="hidden";function Tu(){if(!Re.bannerRegion.contains(document.activeElement))return;(Zr("button",Re.toggles).find(O0)??Re.landmarksHead).focus()}function fn(){Tu(),Re.bannerRegion.replaceChildren()}function Sl({text:e,action:t,onAction:i}){let r=document.createElement("div");r.className="banner";let a=document.createElement("div");a.className="banner__body";let n=document.createElement("p");if(n.className="banner__text",n.textContent=e,a.append(n),t){let o=_u("btn",t);o.addEventListener("click",i),a.append(o)}let s=_u("icon-btn icon-btn--plain banner__close","");s.setAttribute("aria-label",ii.closeBanner),s.innerHTML='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',s.addEventListener("click",fn),r.append(a,s),Tu(),Re.bannerRegion.replaceChildren(r)}var _l=0,ms=0;function bu(){clearTimeout(_l),_l=setTimeout(()=>{Re.progress.textContent=ii.progress,ms=performance.now()},Ir.loadingDelay)}async function yl(){if(clearTimeout(_l),ms){let e=Ir.loadingMin-(performance.now()-ms);e>0&&await Mu(e)}Re.progress.textContent="",ms=0}function wu(){Re.poster.classList.remove("is-fading"),Re.poster.hidden=!1}function Au(){Re.poster.classList.add("is-fading"),setTimeout(()=>{Ye.mode==="ready"&&(Re.poster.hidden=!0)},Ye.reduced?0:Ir.crossfade)}function vs(e){Fa("fallback"),yl(),wu(),e?Sl({text:e}):fn()}function F0(){pn=!0,vs(null)}function B0(){Ye.mode==="loading"&&(yl(),Sl({text:ii.slow,action:ii.slowAction,onAction:F0}))}function z0(){Fa("lost"),wu(),clearTimeout(_s),_s=setTimeout(()=>{Sl({text:ii.lost,action:ii.lostAction,onAction:G0})},Ir.contextRestore)}function H0(){clearTimeout(_s),fn(),Fa("ready"),Au()}async function G0(){fn(),clearTimeout(_s),At?.dispose(),At=null,Fa("loading"),bu();try{await Cu()}catch(e){console.error(e),vs(ii.failed)}}function V0(){try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}}function Ru(){if(ti.poster)return{left:0,top:0,bottom:0};let e=Re.scene.getBoundingClientRect(),t=Re.toggles.getBoundingClientRect(),i=Re.controls.getBoundingClientRect();return{left:xu.matches?Re.backdrop.getBoundingClientRect().right-e.left:0,top:t.height>0?Math.max(0,t.bottom-e.top):0,bottom:i.height>0?Math.max(0,e.bottom-i.top):0}}async function Cu(){if(pl=pl||await Promise.resolve().then(()=>(uu(),hu)),pn)return;let e=await pl.createScene({container:Re.scene,labelLayer:Re.labels,landmarks:vl,canvasLabel:vu,getInsets:Ru,durations:Ir,side:Ye.side,motion:Ye.motion,reduced:Ye.reduced,poster:!!ti.poster,posterSize:ti.size,avoid:[Re.toggles,Re.controls],quality:ti.quality,onSelect:ml,onZoomLimits:I0,onContextLost:z0,onContextRestored:H0});if(pn){e.dispose();return}At=e,window.spaceStation={scene:At,state:Ye},await yl(),fn(),Fa("ready"),At.setSelected(Ye.selected),Ye.selected&&At.focus(Ye.selected),Au(),ti.poster&&(Oa.dataset.posterReady="true"),ti.state==="lost"&&!du&&(du=!0,setTimeout(()=>At?.loseContextForTest(),800))}async function k0(){if(window.spaceStationBooted=!0,Oa.classList.add("js"),Fa("loading"),ti.poster&&Oa.classList.add("is-poster"),Ml(),fl(),mu(!1),gl(),Re.posterImg.addEventListener("load",gl),fs.observe(Re.scene),fs.observe(Re.backdrop),fs.observe(Re.toggles),fs.observe(Re.controls),new MutationObserver(Su).observe(Re.scene,{childList:!0}),ti.select&&ml(ti.select),Re.landmarkButtons.forEach(t=>{t.addEventListener("click",()=>ml(t.dataset.id))}),Re.controls.addEventListener("click",t=>{if(t.target.closest(".tooltip"))return;let i=t.target.closest("[data-action]");if(i){if(i.getAttribute("aria-disabled")==="true"){let r=Xt(".tooltip",i);i.classList.add("is-tip"),xl(r.textContent),clearTimeout(i.tipTimer),i.tipTimer=setTimeout(()=>i.classList.remove("is-tip"),Ir.hintHold);return}U0(i.dataset.action)}}),Re.motionBtn.addEventListener("click",()=>{Ye.motion=!Ye.motion,fl()}),Re.sideBtn.addEventListener("click",()=>{Ye.side=Ye.side==="night"?"day":"night",mu(!0)}),document.addEventListener("keydown",t=>{t.key!=="Escape"||t.defaultPrevented||D0()||Eu()}),Re.controls.addEventListener("pointerleave",()=>Re.controls.classList.remove("is-tip-dismissed")),Re.controls.addEventListener("focusin",()=>Re.controls.classList.remove("is-tip-dismissed")),gs.addEventListener("change",()=>{Ye.reduced=gs.matches,At?.setReduced(Ye.reduced),Ye.reduced&&(Ye.motion=!1,fl())}),ti.state==="nowebgl"||!V0()){vs(ii.failed);return}bu();let e=setTimeout(B0,Ir.loadingSlow);try{if(ti.state==="slow"&&await Mu(Ir.loadingSlow+3e4),pn)return;await Cu()}catch(t){console.error(t),pn||vs(ii.failed)}finally{clearTimeout(e)}}k0();})();
