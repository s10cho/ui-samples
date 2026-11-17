/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */
(()=>{var ud=Object.defineProperty;var Wn=(e,t)=>()=>(e&&(t=e(e=0)),t);var dd=(e,t)=>{for(var i in t)ud(e,i,{get:t[i],enumerable:!0})};var nn,Be,sn,Qr,Nt,on,pi,Xn=Wn(()=>{nn={medium:600,wide:1024},Be={dusk:{sky:15319715,riverDeep:5204870,riverShallow:7309216,keyLight:16757626,hemiSky:10989508,ground:7036503},night:{sky:1317934,riverDeep:989738,riverShallow:1583165,keyLight:9348040,hemiSky:9348040,ground:1909811},pavement:12432550,road:7301734,grass:8166231,tree:5601859,trunk:7232072,stone:10261899,roofs:[9067851,6252146],walls:[14207154,13218972,12172994,13483950],structure:15657699,accent:11029018,carBody:[15657699,6121081,11029018,9211786,3949392],carGlass:2830912,window:{early:[14853224,16762995],late:[6121081,16762995],off:[4870754,1910069]},instanceBase:16777215,windowTints:[16777215,16774370,16771526,16775920],bulb:16761963,headlight:[10262412,16773586],taillight:[6959910,14699054],beacon:16738893,clockFace:16249834,clockGlow:16773586,fountain:12573160,shadow:0},sn={dusk:{hemi:1.5,key:2.4,bulb:0,point:0,pool:0,riverGlow:0,beacon:.45,clock:0,fountain:0},night:{hemi:.5,key:.5,bulb:1.7,point:9,pool:.5,riverGlow:.34,beacon:1,clock:.9,fountain:.45}},Qr={wave:4,boat:45,car:34,fountain:3,beacon:2.4,autoRotate:90},Nt={fov:35,elevationMin:15,elevationMax:70,startElevation:35,startAzimuth:35,stepRotate:30,stepZoom:.75,fitRadius:14.6,fitShare:.66,fitLift:7.5,fitHeightShare:.86,minDistance:12,maxDistanceFactor:1.6},on={wide:{width:2400,height:1400,refWidth:1056,refHeight:810},medium:{width:2e3,height:1120,refWidth:1e3,refHeight:800},narrow:{width:900,height:1170,refWidth:600,refHeight:780}},pi={pixelRatioHigh:2,pixelRatioLow:1.5,riverSegmentsHigh:[96,8],riverSegmentsLow:[56,5],fillerRadiusHigh:46,fillerRadiusLow:32,shadowMapSize:1024,slowFrameMs:33,sampleWindowMs:2e3,warmupMs:1200}});function ln(e,t){let i=Ws*(e/t),r=Nt.fitRadius/(Nt.fitShare*i),n=(Nt.fitRadius*Math.sin(Nt.startElevation*lc)+Nt.fitLift)/(Nt.fitHeightShare*Ws);return Math.max(r,n)}function oc(e,t){return e/2/Ws/t}function cc(e){let t=on[e];return ln(t.refWidth,t.refHeight)*(t.height/t.refHeight)}function hc(e,t,i,r){let a=on[e],n=oc(i,ln(t-r,i)),s=oc(a.refHeight,ln(a.refWidth,a.refHeight)),o=n/s,l=a.width*o,c=a.height*o,h=(t+r)/2-l/2,d=i/2-c/2;return h<=0&&d<=0&&h+l>=t&&d+c>=i?{left:h,top:d,width:l,height:c}:null}var lc,Ws,Xs=Wn(()=>{Xn();lc=Math.PI/180,Ws=Math.tan(Nt.fov/2*lc)});function jd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function qd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ls(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Yd(){let e=Ls("canvas");return e.style.display="block",e}function Sc(...e){let t="THREE."+e.shift();ja?ja("log",t,...e):console.log(t,...e)}function zh(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ke(...e){e=zh(e);let t="THREE."+e.shift();if(ja)ja("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function je(...e){e=zh(e);let t="THREE."+e.shift();if(ja)ja("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function xs(...e){let t=e.join(" ");t in Mc||(Mc[t]=!0,ke(...e))}function Kd(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function An(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fi[e&255]+fi[e>>8&255]+fi[e>>16&255]+fi[e>>24&255]+"-"+fi[t&255]+fi[t>>8&255]+"-"+fi[t>>16&15|64]+fi[t>>24&255]+"-"+fi[i&63|128]+fi[i>>8&255]+"-"+fi[i>>16&255]+fi[i>>24&255]+fi[r&255]+fi[r>>8&255]+fi[r>>16&255]+fi[r>>24&255]).toLowerCase()}function lt(e,t,i){return Math.max(t,Math.min(i,e))}function Jd(e,t){return(e%t+t)%t}function Qs(e,t,i){return(1-i)*e+i*t}function Qd(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function wl(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function $d(e,t){if(t.constructor===Float32Array)return e;let i=wl(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function ep(e,t){if(t.constructor===Float32Array)return e;let i=wl(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function tp(){let e={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===St&&(a.r=wr(a.r),a.g=wr(a.g),a.b=wr(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===St&&(a.r=Ba(a.r),a.g=Ba(a.g),a.b=Ba(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Fr?Ps:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Cs]:{primaries:t,whitePoint:r,transfer:Ps,toXYZ:yc,fromXYZ:Ec,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:zi},outputColorSpaceConfig:{drawingBufferColorSpace:zi}},[zi]:{primaries:t,whitePoint:r,transfer:St,toXYZ:yc,fromXYZ:Ec,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:zi}}}),e}function wr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ba(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function to(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?ip.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}function no(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function fo(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){ea.fromArray(e,n);let o=a.x*Math.abs(ea.x)+a.y*Math.abs(ea.y)+a.z*Math.abs(ea.z),l=t.dot(ea),c=i.dot(ea),h=r.dot(ea);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Sp(e,t,i,r,a,n,s,o){let l;if(t.side===Ai?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===aa,o),l===null)return null;os.copy(o),os.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(os);return c<i.near||c>i.far?null:{distance:c,point:os.clone(),object:e}}function ls(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,rs),e.getVertexPosition(l,as),e.getVertexPosition(c,ns);let h=Sp(e,t,i,r,rs,as,ns,Uc);if(h){let d=new O;hn.getBarycoord(Uc,rs,as,ns,d),a&&(h.uv=hn.getInterpolatedAttribute(a,o,l,c,d,new Ge)),n&&(h.uv1=hn.getInterpolatedAttribute(n,o,l,c,d,new Ge)),s&&(h.normal=hn.getInterpolatedAttribute(s,o,l,c,d,new O),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new O,materialIndex:0};hn.getNormal(rs,as,ns,u.normal),h.face=u,h.barycoord=d}return h}function Pl(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){a(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,h,d){let u=(s-n)/c-(o-n)/(c+h)+(o-s)/h,m=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,m*=h,a(s,o,u,m)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}function Gc(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function wp(e,t){let i=1-e;return i*i*t}function Tp(e,t){return 2*(1-e)*e*t}function Ap(e,t){return e*e*t}function Sn(e,t,i,r){return wp(e,t)+Tp(e,i)+Ap(e,r)}function Rp(e,t){let i=1-e;return i*i*i*t}function Cp(e,t){let i=1-e;return 3*i*i*e*t}function Pp(e,t){return 3*(1-e)*e*e*t}function Lp(e,t){return e*e*e*t}function xn(e,t,i,r,a){return Rp(e,t)+Cp(e,i)+Pp(e,r)+Lp(e,a)}function Ka(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Vc(a))a.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Vc(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Ei(e){let t={};for(let i=0;i<e.length;i++){let r=Ka(e[i]);for(let a in r)t[a]=r[a]}return t}function Vc(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zp(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function hu(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ct.workingColorSpace}function La(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function us(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function uu(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Zp(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Jp(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=uu(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Zp(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function kc(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function Wc(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Zc(e,t){return e.distance-t.distance}function ml(e,t,i,r){let a=!0;if(e.layers.test(t.layers)&&e.raycast(t,i)===!1&&(a=!1),a===!0&&r===!0){let n=e.children;for(let s=0,o=n.length;s<o;s++)ml(n[s],t,i,!0)}}function Jc(e,t,i,r){let a=vf(r);switch(i){case Uh:return e*t;case xl:return e*t/a.components*a.byteLength;case yl:return e*t/a.components*a.byteLength;case na:return e*t*2/a.components*a.byteLength;case El:return e*t*2/a.components*a.byteLength;case Ih:return e*t*3/a.components*a.byteLength;case or:return e*t*4/a.components*a.byteLength;case bl:return e*t*4/a.components*a.byteLength;case _s:case vs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ms:case Ss:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oo:case Bo:return Math.max(e,16)*Math.max(t,8)/4;case Io:case Fo:return Math.max(e,8)*Math.max(t,8)/2;case zo:case Ho:case Vo:case ko:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Go:case Ts:case Wo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case $o:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case el:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case il:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case nl:case sl:case ol:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ll:case cl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case As:case hl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vf(e){switch(e){case Ui:case Ph:return{byteLength:1,components:1};case bn:case Lh:case hr:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case cr:case vl:case Yi:return{byteLength:4,components:1};case Nh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function Mu(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Mf(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((m,M)=>m.start-M.start);let u=0;for(let m=1;m<d.length;m++){let M=d[u],S=d[m];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++u,d[u]=S)}d.length=u+1;for(let m=0,M=d.length;m<M;m++){let S=d[m];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}function e0(e,t,i,r,a,n){let s=new qe(0),o=a===!0?0:1,l,c,h=null,d=0,u=null;function m(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let y=w.backgroundBlurriness>0;A=t.get(A,y)}return A}function M(w){let A=!1,y=m(w);y===null?g(s,o):y&&y.isColor&&(g(y,1),A=!0);let T=e.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,n):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(w,A){let y=m(A);y&&y.isCubeTexture?(c===void 0&&(c=new Je(new Ii(1,1,1),new sa({name:"BackgroundCubeMaterial",uniforms:Ka(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Su),c.material.toneMapped=ct.getTransfer(y.colorSpace)!==St,(h!==y||d!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=e.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Je(new ua(2,2),new sa({name:"BackgroundMaterial",uniforms:Ka(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ct.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=e.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,A){w.getRGB(fs,hu(e)),i.buffers.color.setClear(fs.r,fs.g,fs.b,A,n)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(w,A=1){s.set(w),o=A,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(s,o)},render:M,addToRenderList:S,dispose:p}}function t0(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(U,H,Z,D,z){let $=!1,X=d(U,D,Z,H);n!==X&&(n=X,c(n.object)),$=m(U,D,Z,z),$&&M(U,D,Z,z),z!==null&&t.update(z,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,y(U,H,Z,D),z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function h(U){return e.deleteVertexArray(U)}function d(U,H,Z,D){let z=D.wireframe===!0,$=r[H.id];$===void 0&&($={},r[H.id]=$);let X=U.isInstancedMesh===!0?U.id:0,me=$[X];me===void 0&&(me={},$[X]=me);let K=me[Z.id];K===void 0&&(K={},me[Z.id]=K);let Y=K[z];return Y===void 0&&(Y=u(l()),K[z]=Y),Y}function u(U){let H=[],Z=[],D=[];for(let z=0;z<i;z++)H[z]=0,Z[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:D,object:U,attributes:{},index:null}}function m(U,H,Z,D){let z=n.attributes,$=H.attributes,X=0,me=Z.getAttributes();for(let K in me)if(me[K].location>=0){let Y=z[K],oe=$[K];if(oe===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;X++}return n.attributesNum!==X||n.index!==D}function M(U,H,Z,D){let z={},$=H.attributes,X=0,me=Z.getAttributes();for(let K in me)if(me[K].location>=0){let Y=$[K];Y===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));let oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),z[K]=oe,X++}n.attributes=z,n.attributesNum=X,n.index=D}function S(){let U=n.newAttributes;for(let H=0,Z=U.length;H<Z;H++)U[H]=0}function g(U){p(U,0)}function p(U,H){let Z=n.newAttributes,D=n.enabledAttributes,z=n.attributeDivisors;Z[U]=1,D[U]===0&&(e.enableVertexAttribArray(U),D[U]=1),z[U]!==H&&(e.vertexAttribDivisor(U,H),z[U]=H)}function w(){let U=n.newAttributes,H=n.enabledAttributes;for(let Z=0,D=H.length;Z<D;Z++)H[Z]!==U[Z]&&(e.disableVertexAttribArray(Z),H[Z]=0)}function A(U,H,Z,D,z,$,X){X===!0?e.vertexAttribIPointer(U,H,Z,z,$):e.vertexAttribPointer(U,H,Z,D,z,$)}function y(U,H,Z,D){S();let z=D.attributes,$=Z.getAttributes(),X=H.defaultAttributeValues;for(let me in $){let K=$[me];if(K.location>=0){let Y=z[me];if(Y===void 0&&(me==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),me==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),Y!==void 0){let oe=Y.normalized,Ue=Y.itemSize,J=t.get(Y);if(J===void 0)continue;let se=J.buffer,Ae=J.type,De=J.bytesPerElement,Oe=Ae===e.INT||Ae===e.UNSIGNED_INT||Y.gpuType===vl;if(Y.isInterleavedBufferAttribute){let ge=Y.data,Ke=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,et=Y.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Fe=0;Fe<K.locationSize;Fe++)p(K.location+Fe,ge.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Fe=0;Fe<K.locationSize;Fe++)g(K.location+Fe);e.bindBuffer(e.ARRAY_BUFFER,se);for(let Fe=0;Fe<K.locationSize;Fe++)A(K.location+Fe,Ue/K.locationSize,Ae,oe,Ke*De,(et+Ue/K.locationSize*Fe)*De,Oe)}else{if(Y.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)p(K.location+ge,Y.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ge=0;ge<K.locationSize;ge++)g(K.location+ge);e.bindBuffer(e.ARRAY_BUFFER,se);for(let ge=0;ge<K.locationSize;ge++)A(K.location+ge,Ue/K.locationSize,Ae,oe,Ue*De,Ue/K.locationSize*ge*De,Oe)}}else if(X!==void 0){let oe=X[me];if(oe!==void 0)switch(oe.length){case 2:e.vertexAttrib2fv(K.location,oe);break;case 3:e.vertexAttrib3fv(K.location,oe);break;case 4:e.vertexAttrib4fv(K.location,oe);break;default:e.vertexAttrib1fv(K.location,oe)}}}}w()}function T(){P();for(let U in r){let H=r[U];for(let Z in H){let D=H[Z];for(let z in D){let $=D[z];for(let X in $)h($[X].object),delete $[X];delete D[z]}}delete r[U]}}function C(U){if(r[U.id]===void 0)return;let H=r[U.id];for(let Z in H){let D=H[Z];for(let z in D){let $=D[z];for(let X in $)h($[X].object),delete $[X];delete D[z]}}delete r[U.id]}function f(U){for(let H in r){let Z=r[H];for(let D in Z){let z=Z[D];if(z[U.id]===void 0)continue;let $=z[U.id];for(let X in $)h($[X].object),delete $[X];delete z[U.id]}}}function x(U){for(let H in r){let Z=r[H],D=U.isInstancedMesh===!0?U.id:0,z=Z[D];if(z!==void 0){for(let $ in z){let X=z[$];for(let me in X)h(X[me].object),delete X[me];delete z[$]}delete Z[D],Object.keys(Z).length===0&&delete r[H]}}}function P(){R(),s=!0,n!==a&&(n=a,c(n.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:x,releaseStatesOfProgram:f,initAttributes:S,enableAttribute:g,disableUnusedAttributes:w}}function i0(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function r0(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let f=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(f){return!(f!==or&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){let x=f===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(f!==Ui&&f!==Yi&&!x&&r.convert(f)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(f){if(f==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&d===!1;i.reversedDepthBuffer===!0&&d===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&d===!0&&ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:y,maxSamples:T,samples:C}}function a0(e){let t=this,i=null,r=0,a=!1,n=!1,s=new Or,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||r!==0||a;return a=u,r=d.length,m},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,m){let M=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!a||M===null||M.length===0||n&&!g)n?h(null):c();else{let w=n?0:r,A=w*4,y=p.clippingState||null;l.value=y,y=h(M,u,A,m);for(let T=0;T!==A;++T)y[T]=i[T];p.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(d,u,m,M){let S=d!==null?d.length:0,g=null;if(S!==0){if(g=l.value,M!==!0||g===null){let p=m+S*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,y=m;A!==S;++A,y+=4)s.copy(d[A]).applyMatrix4(w,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}function eh(e,t,i){return new Fl(e,{minFilter:Br,generateMipmaps:t,type:hr,colorSpace:Cs,depthBuffer:i})}function Un(e,t,i){return new sa({name:e,uniforms:t,vertexShader:$e.cube_vert,fragmentShader:i,side:Ai,blending:Fa,depthTest:!1,depthWrite:!1})}function h0(){return Un("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${xu}u

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
	`)}function u0(){return Un("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yu}},`

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
	`)}function d0(){return Un("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${s0}
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
	`)}function th(){return Un("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ih(){return Un("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function p0(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,m=!1){return u==null?null:m?s(u):n(u)}function n(u){if(u&&u.isTexture){let m=u.mapping;if(m===js||m===qs)if(t.has(u)){let M=t.get(u).texture;return o(M,u.mapping)}else{let M=u.image;if(M&&M.height>0){let S=new Fl(M.height);return S.fromEquirectangularTexture(e,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,M=m===js||m===qs,S=m===Wa||m===En;if(M||S){let g=i.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return r===null&&(r=new $c(e)),g=M?r.fromEquirectangular(u,g):r.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),g.texture;if(g!==void 0)return g.texture;{let w=u.image;return M&&w&&w.height>0||S&&w&&l(w)?(r===null&&(r=new $c(e)),g=M?r.fromEquirectangular(u):r.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,m){return m===js?u.mapping=Wa:m===qs&&(u.mapping=En),u}function l(u){let m=0,M=6;for(let S=0;S<M;S++)u[S]!==void 0&&m++;return m===M}function c(u){let m=u.target;m.removeEventListener("dispose",c);let M=t.get(m);M!==void 0&&(t.delete(m),M.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let M=i.get(m);M!==void 0&&(i.delete(m),M.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function f0(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&xs("WebGLRenderer: "+r+" extension not supported."),a}}}function m0(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(M=>delete a[M]);function o(M){l(M.target)}function l(M){M.index!==null&&t.remove(M.index);for(let g in M.attributes)t.remove(M.attributes[g]);M.removeEventListener("dispose",o),delete a[M.id],s.unregister(M);let S=n.get(M);S&&(t.remove(S),n.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,i.memory.geometries--}function c(M,S){return a[S.id]!==void 0||(S.addEventListener("dispose",o),a[S.id]=new WeakRef(S),s.register(S,S.id,S),i.memory.geometries++),S}function h(M){let S=M.attributes;for(let g in S)t.update(S[g],e.ARRAY_BUFFER)}function d(M){let S=M.index,g=M.attributes.position,p=0;if(g===void 0)return;let w=S!==null?S.array.length:g.array.length/3-1,A=g.count>=65535?qh:jh,y=new A(Math.ceil(w/3)*6,1),T=y.array;if(S!==null){let f=S.array;p=S.version;for(let x=0,P=0;x<w;x+=3){let R=f[x+0],U=f[x+1],H=f[x+2];T[P++]=R,T[P++]=U,T[P++]=U,T[P++]=H,T[P++]=H,T[P++]=R}}else{p=g.version;for(let f=0,x=0;f<w;f+=3){let P=f+0,R=f+1,U=f+2;T[x++]=P,T[x++]=R,T[x++]=R,T[x++]=U,T[x++]=U,T[x++]=P}}y.version=p;let C=n.get(M);C&&t.remove(C),n.set(M,y)}function u(M){let S=n.get(M);if(S){let g=M.index;g!==null&&S.version<g.version&&d(M)}else d(M);return n.get(M)}function m(){for(let M in a){let S=a[M].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function g0(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function c(d,u,m){m!==0&&(e.drawElementsInstanced(r,u,n,d*s,m),i.update(u,r,m))}function h(d,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,m);let M=0;for(let S=0;S<m;S++)M+=u[S];i.update(M,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _0(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:je("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function v0(e,t,i){let r=new WeakMap,a=new Ot;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==d){let m=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",m)};u!==void 0&&u.texture.dispose();let M=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],y=0;M===!0&&(y=1),S===!0&&(y=2),g===!0&&(y=3);let T=o.attributes.position.count*y,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let f=new Float32Array(T*C*4*d),x=new Hh(f,T,C,d);x.type=Yi,x.needsUpdate=!0;let P=y*4;for(let R=0;R<d;R++){let U=p[R],H=w[R],Z=A[R],D=T*C*4*R;for(let z=0;z<U.count;z++){let $=z*P;M===!0&&(a.fromBufferAttribute(U,z),f[D+$+0]=a.x,f[D+$+1]=a.y,f[D+$+2]=a.z,f[D+$+3]=0),S===!0&&(a.fromBufferAttribute(H,z),f[D+$+4]=a.x,f[D+$+5]=a.y,f[D+$+6]=a.z,f[D+$+7]=0),g===!0&&(a.fromBufferAttribute(Z,z),f[D+$+8]=a.x,f[D+$+9]=a.y,f[D+$+10]=a.z,f[D+$+11]=Z.itemSize===4?a.w:1)}}u={count:d,texture:x,size:new Ge(T,C)},r.set(o,u),o.addEventListener("dispose",m)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];let M=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",M),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function M0(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,d=c.geometry,u=t.get(c,d);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;n.get(m)!==h&&(m.update(),n.set(m,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}function x0(e,t,i,r,a,n){let s=new lr(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ji;h.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new At([0,2,0,0,2,0],2));let d=new kp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Je(h,d),m=new gu(-1,1,1,-1,0,1),M=null,S=null,g=!1,p,w=null,A=[],y=!1;this.setSize=function(T,C){s.setSize(T,C),o!==null&&o.setSize(T,C),l!==null&&l.setSize(T,C);for(let f=0;f<A.length;f++){let x=A[f];x.setSize&&x.setSize(T,C)}},this.setEffects=function(T){A=T,y=A.length>0&&A[0].isRenderPass===!0;let C=s.width,f=s.height;A.length>0&&o===null&&(o=new lr(C,f,{type:hr,depthBuffer:!1,stencilBuffer:!1}),l=new lr(C,f,{type:hr,depthBuffer:!1,stencilBuffer:!1}));let x=a===!0&&A.some(P=>P.needsDepthTexture===!0);x!==(s.depthTexture!==null)&&(x===!0&&c===null&&(c=new Ya(C,f),n===!0&&(c.format=zr,c.type=Xa)),s.dispose(),s.depthTexture=x?c:null,s.resolveDepthBuffer=x,s.storeMultisampledDepthBuffer=x);for(let P=0;P<A.length;P++){let R=A[P];R.setSize&&R.setSize(C,f),x&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,C){if(g||T.toneMapping===br&&A.length===0)return!1;if(w=C,C!==null){let f=C.width,x=C.height;(s.width!==f||s.height!==x)&&this.setSize(f,x)}return y===!1&&T.setRenderTarget(s),p=T.toneMapping,T.toneMapping=br,!0},this.hasRenderPass=function(){return y},this.end=function(T,C){T.toneMapping=p,g=!0;let f=s,x=o;for(let P=0;P<A.length;P++){let R=A[P];R.enabled!==!1&&(R.render(T,x,f,C),R.needsSwap!==!1&&(f=x,x=x===o?l:o))}if(M!==T.outputColorSpace||S!==T.toneMapping){M=T.outputColorSpace,S=T.toneMapping,d.defines={},ct.getTransfer(M)===St&&(d.defines.SRGB_TRANSFER="");let P=S0[S];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=f.texture,T.setRenderTarget(w),T.render(u,m),w=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}function Za(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=rh[a];if(n===void 0&&(n=new Float32Array(a),rh[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Yt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Kt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Ds(e,t){let i=ah[t];i===void 0&&(i=new Int32Array(t),ah[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function y0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function E0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yt(i,t))return;e.uniform2fv(this.addr,t),Kt(i,t)}}function b0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Yt(i,t))return;e.uniform3fv(this.addr,t),Kt(i,t)}}function w0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yt(i,t))return;e.uniform4fv(this.addr,t),Kt(i,t)}}function T0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Yt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Kt(i,t)}else{if(Yt(i,r))return;oh.set(r),e.uniformMatrix2fv(this.addr,!1,oh),Kt(i,r)}}function A0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Yt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Kt(i,t)}else{if(Yt(i,r))return;sh.set(r),e.uniformMatrix3fv(this.addr,!1,sh),Kt(i,r)}}function R0(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Yt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Kt(i,t)}else{if(Yt(i,r))return;nh.set(r),e.uniformMatrix4fv(this.addr,!1,nh),Kt(i,r)}}function C0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function P0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yt(i,t))return;e.uniform2iv(this.addr,t),Kt(i,t)}}function L0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yt(i,t))return;e.uniform3iv(this.addr,t),Kt(i,t)}}function N0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yt(i,t))return;e.uniform4iv(this.addr,t),Kt(i,t)}}function D0(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function U0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Yt(i,t))return;e.uniform2uiv(this.addr,t),Kt(i,t)}}function I0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Yt(i,t))return;e.uniform3uiv(this.addr,t),Kt(i,t)}}function O0(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Yt(i,t))return;e.uniform4uiv(this.addr,t),Kt(i,t)}}function Us(e){return e.version===0&&(e.compareFunction=Bh,e.needsUpdate=!0),e}function F0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=Us(wu):n=bu,i.setTexture2D(t||n,a)}function B0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Ru,a)}function z0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=Us(Tu):n=Cu,i.setTextureCube(t||n,a)}function H0(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Au,a)}function G0(e){switch(e){case 5126:return y0;case 35664:return E0;case 35665:return b0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return N0;case 5125:return D0;case 36294:return U0;case 36295:return I0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}function V0(e,t){e.uniform1fv(this.addr,t)}function k0(e,t){let i=Za(t,this.size,2);e.uniform2fv(this.addr,i)}function W0(e,t){let i=Za(t,this.size,3);e.uniform3fv(this.addr,i)}function X0(e,t){let i=Za(t,this.size,4);e.uniform4fv(this.addr,i)}function j0(e,t){let i=Za(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function q0(e,t){let i=Za(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function Y0(e,t){let i=Za(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function K0(e,t){e.uniform1iv(this.addr,t)}function Z0(e,t){e.uniform2iv(this.addr,t)}function J0(e,t){e.uniform3iv(this.addr,t)}function Q0(e,t){e.uniform4iv(this.addr,t)}function $0(e,t){e.uniform1uiv(this.addr,t)}function e_(e,t){e.uniform2uiv(this.addr,t)}function t_(e,t){e.uniform3uiv(this.addr,t)}function i_(e,t){e.uniform4uiv(this.addr,t)}function r_(e,t,i){let r=this.cache,a=t.length,n=Ds(i,a);Yt(r,n)||(e.uniform1iv(this.addr,n),Kt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Us(wu):s=bu;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function a_(e,t,i){let r=this.cache,a=t.length,n=Ds(i,a);Yt(r,n)||(e.uniform1iv(this.addr,n),Kt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Ru,n[s])}function n_(e,t,i){let r=this.cache,a=t.length,n=Ds(i,a);Yt(r,n)||(e.uniform1iv(this.addr,n),Kt(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=Us(Tu):s=Cu;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function s_(e,t,i){let r=this.cache,a=t.length,n=Ds(i,a);Yt(r,n)||(e.uniform1iv(this.addr,n),Kt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Au,n[s])}function o_(e){switch(e){case 5126:return V0;case 35664:return k0;case 35665:return W0;case 35666:return X0;case 35674:return j0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return $0;case 36294:return e_;case 36295:return t_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return s_}}function lh(e,t){e.seq.push(t),e.map[t.id]=t}function u_(e,t,i){let r=e.name,a=r.length;for(bo.lastIndex=0;;){let n=bo.exec(r),s=bo.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){lh(i,c===void 0?new l_(o,e,t):new c_(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new h_(o),lh(i,h)),i=h}}}function ch(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function f_(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function m_(e){ct._getMatrix(hh,ct.workingColorSpace,e);let t=`mat3( ${hh.elements.map(i=>i.toFixed(4))} )`;switch(ct.getTransfer(e)){case Ps:return[t,"LinearTransferOETF"];case St:return[t,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function uh(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+f_(e.getShaderSource(t),s)}else return a}function g_(e,t){let i=m_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function v_(e,t){let i=__[t];return i===void 0?(ke("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function M_(){ct.getLuminanceCoefficients(ms);let e=ms.x.toFixed(4),t=ms.y.toFixed(4),i=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vn).join(`
`)}function x_(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function y_(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function vn(e){return e!==""}function dh(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ph(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function gl(e){return e.replace(E_,b_)}function b_(e,t){let i=$e[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gl(i)}function fh(e){return e.replace(w_,T_)}function T_(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function mh(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function R_(e){return A_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function P_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":C_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function N_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":L_[e.combine]||"ENVMAP_BLENDING_NONE"}function D_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=R_(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=P_(i),d=N_(i),u=S_(i),m=x_(n),M=a.createProgram(),S,g,p=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(vn).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m].filter(vn).join(`
`),g.length>0&&(g+=`
`)):(S=[mh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vn).join(`
`),g=[mh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,m,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==br?"#define TONE_MAPPING":"",i.toneMapping!==br?$e.tonemapping_pars_fragment:"",i.toneMapping!==br?v_("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,g_("linearToOutputTexel",i.outputColorSpace),M_(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vn).join(`
`)),s=gl(s),s=dh(s,i),s=ph(s,i),o=gl(o),o=dh(o,i),o=ph(o,i),s=fh(s),o=fh(o),i.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",i.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=p+S+s,A=p+g+o,y=ch(a,a.VERTEX_SHADER,w),T=ch(a,a.FRAGMENT_SHADER,A);a.attachShader(M,y),a.attachShader(M,T),i.index0AttributeName!==void 0?a.bindAttribLocation(M,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function C(R){if(e.debug.checkShaderErrors){let U=a.getProgramInfoLog(M)||"",H=a.getShaderInfoLog(y)||"",Z=a.getShaderInfoLog(T)||"",D=U.trim(),z=H.trim(),$=Z.trim(),X=!0,me=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(X=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,M,y,T);else{let K=uh(a,y,"vertex"),Y=uh(a,T,"fragment");je("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+K+`
`+Y)}else D!==""?ke("WebGLProgram: Program Info Log:",D):(z===""||$==="")&&(me=!1);me&&(R.diagnostics={runnable:X,programLog:D,vertexShader:{log:z,prefix:S},fragmentShader:{log:$,prefix:g}})}a.deleteShader(y),a.deleteShader(T),f=new bs(a,M),x=y_(a,M)}let f;this.getUniforms=function(){return f===void 0&&C(this),f};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=a.getProgramParameter(M,d_)),P},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=p_++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=y,this.fragmentShader=T,this}function F_(e){return e===na||e===Ts||e===As}function B_(e,t,i,r,a,n){let s=new Al,o=new I_,l=new Set,c=[],h=new Map,d=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return l.add(f),f===0?"uv":`uv${f}`}function M(f,x,P,R,U,H){let Z=R.fog,D=U.geometry,z=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?R.environment:null,$=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,X=t.get(f.envMap||z,$),me=u[f.type],K=r.precision;f.precision!==null&&(K=r.getMaxPrecision(f.precision),K!==f.precision&&ke("WebGLProgram.getParameters:",f.precision,"not supported, using",K,"instead."));let Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=Y!==void 0?Y.length:0,Ue=0;D.morphAttributes.position!==void 0&&(Ue=1),D.morphAttributes.normal!==void 0&&(Ue=2),D.morphAttributes.color!==void 0&&(Ue=3);let J,se,Ae,De;if(me){let we=sr[me];J=we.vertexShader,se=we.fragmentShader}else{J=f.vertexShader,se=f.fragmentShader;let we=o.getVertexShaderStage(f),tt=o.getFragmentShaderStage(f);o.update(f,we,tt),Ae=we.id,De=tt.id}let Oe=e.getRenderTarget(),ge=e.state.buffers.depth.getReversed(),Ke=U.isInstancedMesh===!0,et=U.isBatchedMesh===!0,Fe=!!f.map,Rt=!!f.matcap,Ht=!!X,_t=Ht&&X.isPMREMTexture===!0,xt=!!f.aoMap,ai=!!f.lightMap,ni=!!f.bumpMap&&f.wireframe===!1,Ct=!!f.normalMap,Jt=!!f.displacementMap,ui=!!f.emissiveMap,si=!!f.metalnessMap,Si=!!f.roughnessMap,F=f.anisotropy>0,xi=f.clearcoat>0,pt=f.diffuseRoughness>0,Lt=f.dispersion>0,Me=f.retroreflectivity>0,vt=f.iridescence>0,Ie=f.sheen>0,ze=f.transmission>0,Ut=F&&!!f.anisotropyMap,b=xi&&!!f.clearcoatMap,_=xi&&!!f.clearcoatNormalMap,k=xi&&!!f.clearcoatRoughnessMap,ae=pt&&!!f.diffuseRoughnessMap,Q=vt&&!!f.iridescenceMap,he=vt&&!!f.iridescenceThicknessMap,fe=Ie&&!!f.sheenColorMap,I=Ie&&!!f.sheenRoughnessMap,ee=!!f.specularMap,Se=!!f.specularColorMap,L=!!f.specularIntensityMap,q=ze&&!!f.transmissionMap,re=ze&&!!f.thicknessMap,le=!!f.gradientMap,_e=!!f.alphaMap,de=f.alphaTest>0,Pe=!!f.alphaHash,ie=!!f.extensions,Xe=br;f.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Xe=e.toneMapping);let Ve=_t?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,st={shaderID:me,shaderType:f.type,shaderName:f.name,vertexShader:J,fragmentShader:se,defines:f.defines,customVertexShaderID:Ae,customFragmentShaderID:De,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:K,batching:et,batchingColor:et&&U._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&U.instanceColor!==null,instancingMorph:Ke&&U.morphTexture!==null,outputColorSpace:Oe===null?e.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Fe,matcap:Rt,envMap:Ht,envMapMode:Ht&&X.mapping,envMapPMREM:_t,envMapMaxLod:_t?Ve.length-1:null,envMapSize:_t?Ve[0].width:null,aoMap:xt,lightMap:ai,bumpMap:ni,normalMap:Ct,displacementMap:Jt,emissiveMap:ui,normalMapObjectSpace:Ct&&f.normalMapType===Bd,normalMapTangentSpace:Ct&&f.normalMapType===dl,packedNormalMap:Ct&&f.normalMapType===dl&&F_(f.normalMap.format),metalnessMap:si,roughnessMap:Si,anisotropy:F,anisotropyMap:Ut,clearcoat:xi,clearcoatMap:b,clearcoatNormalMap:_,clearcoatRoughnessMap:k,diffuseRoughness:pt,diffuseRoughnessMap:ae,dispersion:Lt,retroreflection:Me,iridescence:vt,iridescenceMap:Q,iridescenceThicknessMap:he,sheen:Ie,sheenColorMap:fe,sheenRoughnessMap:I,specularMap:ee,specularColorMap:Se,specularIntensityMap:L,transmission:ze,transmissionMap:q,thicknessMap:re,gradientMap:le,opaque:f.transparent===!1&&f.blending===Mn&&f.alphaToCoverage===!1,alphaMap:_e,alphaTest:de,alphaHash:Pe,combine:f.combine,mapUv:Fe&&m(f.map.channel),aoMapUv:xt&&m(f.aoMap.channel),lightMapUv:ai&&m(f.lightMap.channel),bumpMapUv:ni&&m(f.bumpMap.channel),normalMapUv:Ct&&m(f.normalMap.channel),displacementMapUv:Jt&&m(f.displacementMap.channel),emissiveMapUv:ui&&m(f.emissiveMap.channel),metalnessMapUv:si&&m(f.metalnessMap.channel),roughnessMapUv:Si&&m(f.roughnessMap.channel),anisotropyMapUv:Ut&&m(f.anisotropyMap.channel),clearcoatMapUv:b&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&m(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&m(f.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(f.sheenRoughnessMap.channel),specularMapUv:ee&&m(f.specularMap.channel),specularColorMapUv:Se&&m(f.specularColorMap.channel),specularIntensityMapUv:L&&m(f.specularIntensityMap.channel),transmissionMapUv:q&&m(f.transmissionMap.channel),thicknessMapUv:re&&m(f.thicknessMap.channel),alphaMapUv:_e&&m(f.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ct||F),vertexNormals:!!D.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Fe||_e),fog:!!Z,useFog:f.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||D.attributes.normal===void 0&&Ct===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ue,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:H.filter(we=>we.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Fe&&f.map.isVideoTexture===!0&&ct.getTransfer(f.map.colorSpace)===St,decodeVideoTextureEmissive:ui&&f.emissiveMap.isVideoTexture===!0&&ct.getTransfer(f.emissiveMap.colorSpace)===St,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===yr,flipSided:f.side===Ai,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ie&&f.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&f.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function S(f){let x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(let P in f.defines)x.push(P),x.push(f.defines[P]);return f.isRawShaderMaterial===!1&&(g(x,f),p(x,f),x.push(e.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()}function g(f,x){f.push(x.precision),f.push(x.outputColorSpace),f.push(x.envMapMode),f.push(x.envMapPMREM),f.push(x.envMapMaxLod),f.push(x.envMapSize),f.push(x.mapUv),f.push(x.alphaMapUv),f.push(x.lightMapUv),f.push(x.aoMapUv),f.push(x.bumpMapUv),f.push(x.normalMapUv),f.push(x.displacementMapUv),f.push(x.emissiveMapUv),f.push(x.metalnessMapUv),f.push(x.roughnessMapUv),f.push(x.anisotropyMapUv),f.push(x.clearcoatMapUv),f.push(x.clearcoatNormalMapUv),f.push(x.clearcoatRoughnessMapUv),f.push(x.diffuseRoughnessMapUv),f.push(x.iridescenceMapUv),f.push(x.iridescenceThicknessMapUv),f.push(x.sheenColorMapUv),f.push(x.sheenRoughnessMapUv),f.push(x.specularMapUv),f.push(x.specularColorMapUv),f.push(x.specularIntensityMapUv),f.push(x.transmissionMapUv),f.push(x.thicknessMapUv),f.push(x.combine),f.push(x.fogExp2),f.push(x.sizeAttenuation),f.push(x.morphTargetsCount),f.push(x.numSunLights),f.push(x.numDirLights),f.push(x.numPointLights),f.push(x.numSpotLights),f.push(x.numSpotLightMaps),f.push(x.numHemiLights),f.push(x.numRectAreaLights),f.push(x.numSunLightShadows),f.push(x.numDirLightShadows),f.push(x.numPointLightShadows),f.push(x.numSpotLightShadows),f.push(x.numSpotLightShadowsWithMaps),f.push(x.numLightProbes),f.push(x.numLightProbeGrids),f.push(x.shadowMapType),f.push(x.toneMapping),f.push(x.numClippingPlanes),f.push(x.numClipIntersection),f.push(x.depthPacking)}function p(f,x){s.disableAll(),x.instancing&&s.enable(0),x.instancingColor&&s.enable(1),x.instancingMorph&&s.enable(2),x.matcap&&s.enable(3),x.envMap&&s.enable(4),x.normalMapObjectSpace&&s.enable(5),x.normalMapTangentSpace&&s.enable(6),x.clearcoat&&s.enable(7),x.iridescence&&s.enable(8),x.alphaTest&&s.enable(9),x.vertexColors&&s.enable(10),x.vertexAlphas&&s.enable(11),x.vertexUv1s&&s.enable(12),x.vertexUv2s&&s.enable(13),x.vertexUv3s&&s.enable(14),x.vertexTangents&&s.enable(15),x.anisotropy&&s.enable(16),x.alphaHash&&s.enable(17),x.batching&&s.enable(18),x.dispersion&&s.enable(19),x.retroreflection&&s.enable(24),x.diffuseRoughness&&s.enable(25),x.batchingColor&&s.enable(20),x.gradientMap&&s.enable(21),x.packedNormalMap&&s.enable(22),x.vertexNormals&&s.enable(23),f.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.reversedDepthBuffer&&s.enable(4),x.skinning&&s.enable(5),x.morphTargets&&s.enable(6),x.morphNormals&&s.enable(7),x.morphColors&&s.enable(8),x.premultipliedAlpha&&s.enable(9),x.shadowMapEnabled&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.decodeVideoTextureEmissive&&s.enable(20),x.alphaToCoverage&&s.enable(21),x.numLightProbeGrids>0&&s.enable(22),x.hasPositionAttribute&&s.enable(23),f.push(s.mask)}function w(f){let x=u[f.type],P;if(x){let R=sr[x];P=Hp.clone(R.uniforms)}else P=f.uniforms;return P}function A(f,x){let P=h.get(x);return P!==void 0?++P.usedTimes:(P=new D_(e,x,f,a),c.push(P),h.set(x,P)),P}function y(f){if(--f.usedTimes===0){let x=c.indexOf(f);c[x]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}}function T(f){o.remove(f)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:w,acquireProgram:A,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:C}}function z_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function H_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function gh(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function _h(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,M,S,g,p){let w=e[t];return w===void 0?(w={id:u.id,object:u,geometry:m,material:M,materialVariant:s(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:p},e[t]=w):(w.id=u.id,w.object=u,w.geometry=m,w.material=M,w.materialVariant=s(u),w.groupOrder=S,w.renderOrder=u.renderOrder,w.z=g,w.group=p),t++,w}function l(u,m,M,S,g,p,w){w.reversedDepth===!0&&(g=-g);let A=o(u,m,M,S,g,p);M.transmission>0?r.push(A):M.transparent===!0?a.push(A):i.push(A)}function c(u,m,M,S,g,p){let w=o(u,m,M,S,g,p);M.transmission>0?r.unshift(w):M.transparent===!0?a.unshift(w):i.unshift(w)}function h(u,m){i.length>1&&i.sort(u||H_),r.length>1&&r.sort(m||gh),a.length>1&&a.sort(m||gh)}function d(){for(let u=t,m=e.length;u<m;u++){let M=e[u];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:d,sort:h}}function G_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new _h,e.set(r,[s])):a>=n.length?(s=new _h,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function V_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new O,color:new qe};break;case"SpotLight":i={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":i={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=i,i}}}function k_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function X_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function j_(e){let t=new V_,i=k_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new O);let a=new O,n=new wt,s=new wt;function o(c){let h=0,d=0,u=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let m=0,M=0,S=0,g=0,p=0,w=0,A=0,y=0,T=0,C=0,f=0,x=0,P=0,R=0;c.sort(X_);for(let H=0,Z=c.length;H<Z;H++){let D=c[H],z=D.color,$=D.intensity,X=D.distance,me=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===na?me=D.shadow.map.texture:me=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*$,d+=z.g*$,u+=z.b*$;else if(D.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],$);R++}else if(D.isSunLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,oe=i.get(D);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[M]=oe,r.sunShadowMap[M]=me;let Ue=Y.getViewportCount();for(let J=0;J<Ue;J++)r.sunShadowMatrix[S+J]=Y.getMatrix(J),r.sunShadowCascade[S+J]=Y._cascadeData[J];S+=Ue,M++}r.sun[m]=K,m++}else if(D.isDirectionalLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,oe=i.get(D);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,r.directionalShadow[g]=oe,r.directionalShadowMap[g]=me,r.directionalShadowMatrix[g]=D.shadow.matrix,T++}r.directional[g]=K,g++}else if(D.isSpotLight){let K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(z).multiplyScalar($),K.distance=X,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[w]=K;let Y=D.shadow;if(D.map&&(r.spotLightMap[x]=D.map,x++,Y.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[w]=Y.matrix,D.castShadow){let oe=i.get(D);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,r.spotShadow[w]=oe,r.spotShadowMap[w]=me,f++}w++}else if(D.isRectAreaLight){let K=t.get(D);K.color.copy(z).multiplyScalar($),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[A]=K,A++}else if(D.isPointLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){let Y=D.shadow,oe=i.get(D);oe.shadowIntensity=Y.intensity,oe.shadowBias=Y.bias,oe.shadowNormalBias=Y.normalBias,oe.shadowRadius=Y.radius,oe.shadowMapSize=Y.mapSize,oe.shadowCameraNear=Y.camera.near,oe.shadowCameraFar=Y.camera.far,r.pointShadow[p]=oe,r.pointShadowMap[p]=me,r.pointShadowMatrix[p]=D.shadow.matrix,C++}r.point[p]=K,p++}else if(D.isHemisphereLight){let K=t.get(D);K.skyColor.copy(D.color).multiplyScalar($),K.groundColor.copy(D.groundColor).multiplyScalar($),r.hemi[y]=K,y++}}A>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let U=r.hash;(U.sunLength!==m||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==w||U.rectAreaLength!==A||U.hemiLength!==y||U.numSunShadows!==M||U.numDirectionalShadows!==T||U.numPointShadows!==C||U.numSpotShadows!==f||U.numSpotMaps!==x||U.numLightProbes!==R)&&(r.sun.length=m,r.directional.length=g,r.spot.length=w,r.rectArea.length=A,r.point.length=p,r.hemi.length=y,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=S,r.sunShadowCascade.length=S,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.directionalShadowMatrix.length=T,r.pointShadow.length=C,r.pointShadowMap.length=C,r.pointShadowMatrix.length=C,r.spotShadow.length=f,r.spotShadowMap.length=f,r.spotLightMatrix.length=f+x-P,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=R,U.sunLength=m,U.directionalLength=g,U.pointLength=p,U.spotLength=w,U.rectAreaLength=A,U.hemiLength=y,U.numSunShadows=M,U.numDirectionalShadows=T,U.numPointShadows=C,U.numSpotShadows=f,U.numSpotMaps=x,U.numLightProbes=R,r.version=W_++)}function l(c,h){let d=0,u=0,m=0,M=0,S=0,g=0,p=h.matrixWorldInverse;for(let w=0,A=c.length;w<A;w++){let y=c[w];if(y.isSunLight){let T=r.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let T=r.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),u++}else if(y.isSpotLight){let T=r.spot[M];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(p),M++}else if(y.isRectAreaLight){let T=r.rectArea[S];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),s.identity(),n.copy(y.matrixWorld),n.premultiply(p),s.extractRotation(n),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),S++}else if(y.isPointLight){let T=r.point[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),m++}else if(y.isHemisphereLight){let T=r.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:r}}function vh(e){let t=new j_(e),i=[],r=[],a=[];function n(d){h.camera=d,i.length=0,r.length=0,a.length=0}function s(d){d.isLightProbeGrid?a.push(d):i.push(d)}function o(d){r.push(d)}function l(){t.setup(i),a.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(i,d)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function q_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new vh(e),t.set(a,[o])):n>=s.length?(o=new vh(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function Q_(e,t,i){let r=new Tn,a=new Ge,n=new Ge,s=new Ot,o=new Wp,l=new Xp,c={},h=i.maxTextureSize,d={[aa]:Ai,[Ai]:aa,[yr]:yr},u=new sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Y_,fragmentShader:K_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let M=new Ji;M.setAttribute("position",new Hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Je(M,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(C,f,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===md&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let P=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Fa),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Z=p!==this.type;Z&&f.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=C.length;D<z;D++){let $=C[D],X=$.shadow;if(X===void 0){ke("WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;a.copy(X.mapSize);let me=X.getFrameExtents();a.multiply(me),n.copy(X.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/me.x),a.x=n.x*me.x,X.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/me.y),a.y=n.y*me.y,X.mapSize.y=n.y));let K=e.state.buffers.depth.getReversed();if(X.camera._reversedDepth=K,X.map===null||Z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===_n){if($.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new lr(a.x,a.y,{format:na,type:hr,minFilter:Ti,magFilter:Ti,generateMipmaps:!1}),X.map.texture.name=$.name+".shadowMap",X.map.depthTexture=new Ya(a.x,a.y,Yi),X.map.depthTexture.name=$.name+".shadowMapDepth",X.map.depthTexture.format=Gr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=li,X.map.depthTexture.magFilter=li}else $.isPointLight?(X.map=new Fl(a.x),X.map.depthTexture=new $h(a.x,cr)):(X.map=new lr(a.x,a.y),X.map.depthTexture=new Ya(a.x,a.y,cr)),X.map.depthTexture.name=$.name+".shadowMap",X.map.depthTexture.format=Gr,this.type===gs?(X.map.depthTexture.compareFunction=K?Fh:Oh,X.map.depthTexture.minFilter=Ti,X.map.depthTexture.magFilter=Ti):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=li,X.map.depthTexture.magFilter=li);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==a.x||X.map.height!==a.y)&&X.map.setSize(a.x,a.y);let Y=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();$.isPointLight!==!0&&X.updateMatrices($,x);let oe=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:x.layers;for(let Ue=0;Ue<Y;Ue++){let J=X.getCamera(Ue);if($.isPointLight){let se=X.camera,Ae=X.matrix,De=$.distance||se.far;De!==se.far&&(se.far=De,se.updateProjectionMatrix()),gn.setFromMatrixPosition($.matrixWorld),se.position.copy(gn),wo.copy(se.position),wo.add(Z_[Ue]),se.up.copy(J_[Ue]),se.lookAt(wo),se.updateMatrixWorld(),Ae.makeTranslation(-gn.x,-gn.y,-gn.z),Mh.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Mh,se.coordinateSystem,se.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)e.setRenderTarget(X.map,Ue),e.clear();else{Ue===0&&(e.setRenderTarget(X.map),e.clear());let se=X.getViewport(Ue);s.set(n.x*se.x,n.y*se.y,n.x*se.z,n.y*se.w),H.viewport(s)}r=X.getFrustum(Ue),y(f,x,J,$,oe,this.type)}X.isPointLightShadow!==!0&&this.type===_n&&w(X,x),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(P,R,U)};function w(C,f){let x=t.update(S);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new lr(a.x,a.y,{format:na,type:hr}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(f,null,x,u,S,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(f,null,x,m,S,null)}function A(C,f,x,P){let R=null,U=x.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)R=U;else if(R=x.isPointLight===!0?l:o,e.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){let H=R.uuid,Z=f.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let z=D[Z];z===void 0&&(z=R.clone(),D[Z]=z,f.addEventListener("dispose",T)),R=z}if(R.visible=f.visible,R.wireframe=f.wireframe,P===_n?R.side=f.shadowSide!==null?f.shadowSide:f.side:R.side=f.shadowSide!==null?f.shadowSide:d[f.side],R.alphaMap=f.alphaMap,R.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,R.map=f.map,R.clipShadows=f.clipShadows,R.clippingPlanes=f.clippingPlanes,R.clipIntersection=f.clipIntersection,R.displacementMap=f.displacementMap,R.displacementScale=f.displacementScale,R.displacementBias=f.displacementBias,R.wireframeLinewidth=f.wireframeLinewidth,R.linewidth=f.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=x}return R}function y(C,f,x,P,R,U){if(C.visible===!1)return;if(C.layers.test(R)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&U===_n)&&(!C.frustumCulled||C.intersectsFrustum(r))){C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld);let Z=t.update(C),D=C.material;if(Array.isArray(D)){let z=Z.groups;for(let $=0,X=z.length;$<X;$++){let me=z[$],K=D[me.materialIndex];if(K&&K.visible){let Y=A(C,K,P,U);C.onBeforeShadow(e,C,f,x,Z,Y,me),e.renderBufferDirect(x,null,Z,Y,C,me),C.onAfterShadow(e,C,f,x,Z,Y,me)}}}else if(D.visible){let z=A(C,D,P,U);C.onBeforeShadow(e,C,f,x,Z,z,null),e.renderBufferDirect(x,null,Z,z,C,null),C.onAfterShadow(e,C,f,x,Z,z,null)}}let H=C.children;for(let Z=0,D=H.length;Z<D;Z++)y(H[Z],f,x,P,R,U)}function T(C){C.target.removeEventListener("dispose",T);for(let f in c){let x=c[f],P=C.target.uuid;P in x&&(x[P].dispose(),delete x[P])}}}function $_(e,t){function i(){let L=!1,q=new Ot,re=null,le=new Ot(0,0,0,0);return{setMask:function(_e){re!==_e&&!L&&(e.colorMask(_e,_e,_e,_e),re=_e)},setLocked:function(_e){L=_e},setClear:function(_e,de,Pe,ie,Xe){Xe===!0&&(_e*=ie,de*=ie,Pe*=ie),q.set(_e,de,Pe,ie),le.equals(q)===!1&&(e.clearColor(_e,de,Pe,ie),le.copy(q))},reset:function(){L=!1,re=null,le.set(-1,0,0,0)}}}function r(){let L=!1,q=!1,re=null,le=null,_e=null;return{setReversed:function(de){if(q!==de){let Pe=t.get("EXT_clip_control");de?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),q=de;let ie=_e;_e=null,this.setClear(ie)}},getReversed:function(){return q},setTest:function(de){de?ge(e.DEPTH_TEST):Ke(e.DEPTH_TEST)},setMask:function(de){re!==de&&!L&&(e.depthMask(de),re=de)},setFunc:function(de){if(q&&(de=Zd[de]),le!==de){switch(de){case To:e.depthFunc(e.NEVER);break;case Ao:e.depthFunc(e.ALWAYS);break;case Ro:e.depthFunc(e.LESS);break;case yn:e.depthFunc(e.LEQUAL);break;case Co:e.depthFunc(e.EQUAL);break;case Po:e.depthFunc(e.GEQUAL);break;case Lo:e.depthFunc(e.GREATER);break;case No:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}le=de}},setLocked:function(de){L=de},setClear:function(de){_e!==de&&(_e=de,q&&(de=1-de),e.clearDepth(de))},reset:function(){L=!1,re=null,le=null,_e=null,q=!1}}}function a(){let L=!1,q=null,re=null,le=null,_e=null,de=null,Pe=null,ie=null,Xe=null;return{setTest:function(Ve){L||(Ve?ge(e.STENCIL_TEST):Ke(e.STENCIL_TEST))},setMask:function(Ve){q!==Ve&&!L&&(e.stencilMask(Ve),q=Ve)},setFunc:function(Ve,st,we){(re!==Ve||le!==st||_e!==we)&&(e.stencilFunc(Ve,st,we),re=Ve,le=st,_e=we)},setOp:function(Ve,st,we){(de!==Ve||Pe!==st||ie!==we)&&(e.stencilOp(Ve,st,we),de=Ve,Pe=st,ie=we)},setLocked:function(Ve){L=Ve},setClear:function(Ve){Xe!==Ve&&(e.clearStencil(Ve),Xe=Ve)},reset:function(){L=!1,q=null,re=null,le=null,_e=null,de=null,Pe=null,ie=null,Xe=null}}}let n=new i,s=new r,o=new a,l={},c=new WeakMap,h={},d={},u={},m=new WeakMap,M=[],S=null,g=!1,p=null,w=null,A=null,y=null,T=null,C=null,f=null,x=new qe(0,0,0),P=0,R=!1,U=null,H=null,Z=null,D=null,z=null,$=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,me=0,K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=me>=1):K.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=me>=2);let Y=null,oe={},Ue=e.getParameter(e.SCISSOR_BOX),J=e.getParameter(e.VIEWPORT),se=new Ot().fromArray(Ue),Ae=new Ot().fromArray(J);function De(L,q,re,le){let _e=new Uint8Array(4),de=e.createTexture();e.bindTexture(L,de),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pe=0;Pe<re;Pe++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(q,0,e.RGBA,1,1,le,0,e.RGBA,e.UNSIGNED_BYTE,_e):e.texImage2D(q+Pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,_e);return de}let Oe={};Oe[e.TEXTURE_2D]=De(e.TEXTURE_2D,e.TEXTURE_2D,1),Oe[e.TEXTURE_CUBE_MAP]=De(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[e.TEXTURE_2D_ARRAY]=De(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Oe[e.TEXTURE_3D]=De(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(e.DEPTH_TEST),s.setFunc(yn),ni(!1),Ct(uc),ge(e.CULL_FACE),xt(Fa);function ge(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function Ke(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function et(L,q){return u[L]!==q?(e.bindFramebuffer(L,q),u[L]=q,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=q),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=q),!0):!1}function Fe(L,q){let re=M,le=!1;if(L){re=m.get(q),re===void 0&&(re=[],m.set(q,re));let _e=L.textures;if(re.length!==_e.length||re[0]!==e.COLOR_ATTACHMENT0){for(let de=0,Pe=_e.length;de<Pe;de++)re[de]=e.COLOR_ATTACHMENT0+de;re.length=_e.length,le=!0}}else re[0]!==e.BACK&&(re[0]=e.BACK,le=!0);le&&e.drawBuffers(re)}function Rt(L){return S!==L?(e.useProgram(L),S=L,!0):!1}let Ht={[Ua]:e.FUNC_ADD,[_d]:e.FUNC_SUBTRACT,[vd]:e.FUNC_REVERSE_SUBTRACT};Ht[Md]=e.MIN,Ht[Sd]=e.MAX;let _t={[xd]:e.ZERO,[yd]:e.ONE,[Ed]:e.SRC_COLOR,[Sh]:e.SRC_ALPHA,[Cd]:e.SRC_ALPHA_SATURATE,[Ad]:e.DST_COLOR,[wd]:e.DST_ALPHA,[bd]:e.ONE_MINUS_SRC_COLOR,[xh]:e.ONE_MINUS_SRC_ALPHA,[Rd]:e.ONE_MINUS_DST_COLOR,[Td]:e.ONE_MINUS_DST_ALPHA,[Pd]:e.CONSTANT_COLOR,[Ld]:e.ONE_MINUS_CONSTANT_COLOR,[Nd]:e.CONSTANT_ALPHA,[Dd]:e.ONE_MINUS_CONSTANT_ALPHA};function xt(L,q,re,le,_e,de,Pe,ie,Xe,Ve){if(L===Fa){g===!0&&(Ke(e.BLEND),g=!1);return}if(g===!1&&(ge(e.BLEND),g=!0),L!==gd){if(L!==p||Ve!==R){if((w!==Ua||T!==Ua)&&(e.blendEquation(e.FUNC_ADD),w=Ua,T=Ua),Ve)switch(L){case Mn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ws:e.blendFunc(e.ONE,e.ONE);break;case dc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case pc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:je("WebGLState: Invalid blending: ",L);break}else switch(L){case Mn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ws:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case dc:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",L);break}A=null,y=null,C=null,f=null,x.set(0,0,0),P=0,p=L,R=Ve}return}_e=_e||q,de=de||re,Pe=Pe||le,(q!==w||_e!==T)&&(e.blendEquationSeparate(Ht[q],Ht[_e]),w=q,T=_e),(re!==A||le!==y||de!==C||Pe!==f)&&(e.blendFuncSeparate(_t[re],_t[le],_t[de],_t[Pe]),A=re,y=le,C=de,f=Pe),(ie.equals(x)===!1||Xe!==P)&&(e.blendColor(ie.r,ie.g,ie.b,Xe),x.copy(ie),P=Xe),p=L,R=!1}function ai(L,q){L.side===yr?Ke(e.CULL_FACE):ge(e.CULL_FACE);let re=L.side===Ai;q&&(re=!re),ni(re),L.blending===Mn&&L.transparent===!1?xt(Fa):xt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let le=L.stencilWrite;o.setTest(le),le&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ui(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ge(e.SAMPLE_ALPHA_TO_COVERAGE):Ke(e.SAMPLE_ALPHA_TO_COVERAGE)}function ni(L){U!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),U=L)}function Ct(L){L!==pd?(ge(e.CULL_FACE),L!==H&&(L===uc?e.cullFace(e.BACK):L===fd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ke(e.CULL_FACE),H=L}function Jt(L){L!==Z&&(X&&e.lineWidth(L),Z=L)}function ui(L,q,re){L?(ge(e.POLYGON_OFFSET_FILL),(D!==q||z!==re)&&(D=q,z=re,s.getReversed()&&(q=-q,re=-re),e.polygonOffset(q,re))):Ke(e.POLYGON_OFFSET_FILL)}function si(L){L?ge(e.SCISSOR_TEST):Ke(e.SCISSOR_TEST)}function Si(L){L===void 0&&(L=e.TEXTURE0+$-1),Y!==L&&(e.activeTexture(L),Y=L)}function F(L,q,re){re===void 0&&(Y===null?re=e.TEXTURE0+$-1:re=Y);let le=oe[re];le===void 0&&(le={type:void 0,texture:void 0},oe[re]=le),(le.type!==L||le.texture!==q)&&(Y!==re&&(e.activeTexture(re),Y=re),e.bindTexture(L,q||Oe[L]),le.type=L,le.texture=q)}function xi(){let L=oe[Y];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function pt(){try{e.compressedTexImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function Lt(){try{e.compressedTexImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function Me(){try{e.texSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function vt(){try{e.texSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function Ie(){try{e.compressedTexSubImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function ze(){try{e.compressedTexSubImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function Ut(){try{e.texStorage2D(...arguments)}catch(L){je("WebGLState:",L)}}function b(){try{e.texStorage3D(...arguments)}catch(L){je("WebGLState:",L)}}function _(){try{e.texImage2D(...arguments)}catch(L){je("WebGLState:",L)}}function k(){try{e.texImage3D(...arguments)}catch(L){je("WebGLState:",L)}}function ae(L){return d[L]!==void 0?d[L]:e.getParameter(L)}function Q(L,q){d[L]!==q&&(e.pixelStorei(L,q),d[L]=q)}function he(L){se.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function fe(L){Ae.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Ae.copy(L))}function I(L,q){let re=c.get(q);re===void 0&&(re=new WeakMap,c.set(q,re));let le=re.get(L);le===void 0&&(le=e.getUniformBlockIndex(q,L.name),e.uniformBlockBinding(q,le,le),re.set(L,le))}function ee(L,q,re){let le=c.get(q).get(L);l[le]!==re&&(e.bindBufferBase(e.UNIFORM_BUFFER,le,re),l[le]=re)}function Se(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,oe={},u={},l={},m=new WeakMap,M=[],S=null,g=!1,p=null,w=null,A=null,y=null,T=null,C=null,f=null,x=new qe(0,0,0),P=0,R=!1,U=null,H=null,Z=null,D=null,z=null,se.set(0,0,e.canvas.width,e.canvas.height),Ae.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:ge,disable:Ke,bindFramebuffer:et,drawBuffers:Fe,useProgram:Rt,setBlending:xt,setMaterial:ai,setFlipSided:ni,setCullFace:Ct,setLineWidth:Jt,setPolygonOffset:ui,setScissorTest:si,activeTexture:Si,bindTexture:F,unbindTexture:xi,compressedTexImage2D:pt,compressedTexImage3D:Lt,texImage2D:_,texImage3D:k,pixelStorei:Q,getParameter:ae,updateUBOMapping:I,uniformBlockBinding:ee,texStorage2D:Ut,texStorage3D:b,texSubImage2D:Me,texSubImage3D:vt,compressedTexSubImage2D:Ie,compressedTexSubImage3D:ze,scissor:he,viewport:fe,reset:Se}}function ev(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,h=new WeakMap,d=new Set,u,m=new WeakMap,M=new Set,S=new FinalizationRegistry(b=>M.delete(b)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(b,_){return g?new OffscreenCanvas(b,_):Ls("canvas")}function w(b,_,k){let ae=1,Q=Ut(b);if((Q.width>k||Q.height>k)&&(ae=k/Math.max(Q.width,Q.height)),ae<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let he=Math.floor(ae*Q.width),fe=Math.floor(ae*Q.height);u===void 0&&(u=p(he,fe));let I=_?p(he,fe):u;return I.width=he,I.height=fe,I.getContext("2d").drawImage(b,0,0,he,fe),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+he+"x"+fe+")."),I}else return"data"in b&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),b;return b}function A(b){return b.generateMipmaps}function y(b){e.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?e.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(b,_,k,ae,Q,he=!1){if(b!==null){if(e[b]!==void 0)return e[b];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let fe;ae&&(fe=t.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let I=_;if(_===e.RED&&(k===e.FLOAT&&(I=e.R32F),k===e.HALF_FLOAT&&(I=e.R16F),k===e.UNSIGNED_BYTE&&(I=e.R8),k===e.UNSIGNED_SHORT&&fe&&(I=fe.R16_EXT),k===e.SHORT&&fe&&(I=fe.R16_SNORM_EXT)),_===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&(I=e.R8UI),k===e.UNSIGNED_SHORT&&(I=e.R16UI),k===e.UNSIGNED_INT&&(I=e.R32UI),k===e.BYTE&&(I=e.R8I),k===e.SHORT&&(I=e.R16I),k===e.INT&&(I=e.R32I)),_===e.RG&&(k===e.FLOAT&&(I=e.RG32F),k===e.HALF_FLOAT&&(I=e.RG16F),k===e.UNSIGNED_BYTE&&(I=e.RG8),k===e.UNSIGNED_SHORT&&fe&&(I=fe.RG16_EXT),k===e.SHORT&&fe&&(I=fe.RG16_SNORM_EXT)),_===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&(I=e.RG8UI),k===e.UNSIGNED_SHORT&&(I=e.RG16UI),k===e.UNSIGNED_INT&&(I=e.RG32UI),k===e.BYTE&&(I=e.RG8I),k===e.SHORT&&(I=e.RG16I),k===e.INT&&(I=e.RG32I)),_===e.RGB_INTEGER&&(k===e.UNSIGNED_BYTE&&(I=e.RGB8UI),k===e.UNSIGNED_SHORT&&(I=e.RGB16UI),k===e.UNSIGNED_INT&&(I=e.RGB32UI),k===e.BYTE&&(I=e.RGB8I),k===e.SHORT&&(I=e.RGB16I),k===e.INT&&(I=e.RGB32I)),_===e.RGBA_INTEGER&&(k===e.UNSIGNED_BYTE&&(I=e.RGBA8UI),k===e.UNSIGNED_SHORT&&(I=e.RGBA16UI),k===e.UNSIGNED_INT&&(I=e.RGBA32UI),k===e.BYTE&&(I=e.RGBA8I),k===e.SHORT&&(I=e.RGBA16I),k===e.INT&&(I=e.RGBA32I)),_===e.RGB&&(k===e.UNSIGNED_SHORT&&fe&&(I=fe.RGB16_EXT),k===e.SHORT&&fe&&(I=fe.RGB16_SNORM_EXT),k===e.UNSIGNED_INT_5_9_9_9_REV&&(I=e.RGB9_E5),k===e.UNSIGNED_INT_10F_11F_11F_REV&&(I=e.R11F_G11F_B10F)),_===e.RGBA){let ee=he?Ps:ct.getTransfer(Q);k===e.FLOAT&&(I=e.RGBA32F),k===e.HALF_FLOAT&&(I=e.RGBA16F),k===e.UNSIGNED_BYTE&&(I=ee===St?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT&&fe&&(I=fe.RGBA16_EXT),k===e.SHORT&&fe&&(I=fe.RGBA16_SNORM_EXT),k===e.UNSIGNED_SHORT_4_4_4_4&&(I=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&(I=e.RGB5_A1)}return(I===e.R16F||I===e.R32F||I===e.RG16F||I===e.RG32F||I===e.RGBA16F||I===e.RGBA32F)&&t.get("EXT_color_buffer_float"),I}function f(b,_){let k;return b?_===null||_===cr||_===Xa?k=e.DEPTH24_STENCIL8:_===Yi?k=e.DEPTH32F_STENCIL8:_===bn&&(k=e.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===cr||_===Xa?k=e.DEPTH_COMPONENT24:_===Yi?k=e.DEPTH_COMPONENT32F:_===bn&&(k=e.DEPTH_COMPONENT16),k}function x(b,_){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==li&&b.minFilter!==Ti?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function P(b){let _=new WeakRef(b);r.get(b).__ref=_,M.add(_),S.register(b,_,_)}function R(b){let _=r.get(b).__ref;_!==void 0&&(M.delete(_),S.unregister(_))}function U(b){Z(b.target)}function H(b){D(b.target)}function Z(b){b.removeEventListener("dispose",U),R(b),$(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function D(b){b.removeEventListener("dispose",H),R(b),me(b)}function z(){for(let b of M){let _=b.deref();_!==void 0&&(_.isRenderTarget===!0?D(_):Z(_))}M.clear(),d.clear()}function $(b){let _=r.get(b);if(_.__webglInit===void 0)return;let k=b.source,ae=m.get(k);if(ae){let Q=ae[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&X(b),Object.keys(ae).length===0&&m.delete(k)}r.remove(b)}function X(b){let _=r.get(b);e.deleteTexture(_.__webglTexture);let k=b.source,ae=m.get(k);delete ae[_.__cacheKey],s.memory.textures--}function me(b){let _=r.get(b);_.__depthDisposeCallback&&_.__depthDisposeCallback();let k=b.depthTexture;if(k&&k.renderTarget===b&&Z(k),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let he=0;he<_.__webglFramebuffer[Q].length;he++)e.deleteFramebuffer(_.__webglFramebuffer[Q][he]);else e.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)e.deleteFramebuffer(_.__webglFramebuffer[Q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let ae=b.textures;for(let Q=0,he=ae.length;Q<he;Q++){let fe=r.get(ae[Q]);fe.__webglTexture&&(e.deleteTexture(fe.__webglTexture),s.memory.textures--),r.remove(ae[Q])}r.remove(b)}let K=0;function Y(){K=0}function oe(){return K}function Ue(b){K=b}function J(){let b=K;return b>=a.maxTextures&&ke("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+a.maxTextures),K+=1,b}function se(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.mipmapsAutoUpdate),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Ae(b,_){let k=r.get(b);if(b.isVideoTexture&&Ie(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){let ae=b.image;if(ae===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{ai(k,b,_);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+_)}function De(b,_){let k=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){ai(k,b,_);return}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+_)}function Oe(b,_){let k=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){ai(k,b,_);return}i.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+_)}function ge(b,_){let k=r.get(b);if(b.version>0&&k.__version!==b.version){ni(k,b,_);return}i.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+_)}let Ke={[Do]:e.REPEAT,[Er]:e.CLAMP_TO_EDGE,[Uo]:e.MIRRORED_REPEAT},et={[li]:e.NEAREST,[Od]:e.NEAREST_MIPMAP_NEAREST,[jn]:e.NEAREST_MIPMAP_LINEAR,[Ti]:e.LINEAR,[Ys]:e.LINEAR_MIPMAP_NEAREST,[Br]:e.LINEAR_MIPMAP_LINEAR},Fe={[Hd]:e.NEVER,[Bh]:e.ALWAYS,[Gd]:e.LESS,[Oh]:e.LEQUAL,[Vd]:e.EQUAL,[Fh]:e.GEQUAL,[kd]:e.GREATER,[Wd]:e.NOTEQUAL};function Rt(b,_){if(_.type===Yi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ti||_.magFilter===Ys||_.magFilter===jn||_.magFilter===Br||_.minFilter===Ti||_.minFilter===Ys||_.minFilter===jn||_.minFilter===Br)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,Ke[_.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,Ke[_.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,Ke[_.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,et[_.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,et[_.minFilter]),_.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,Fe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===li||_.minFilter!==jn&&_.minFilter!==Br||_.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function Ht(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",U),P(_));let ae=_.source,Q=m.get(ae);Q===void 0&&(Q={},m.set(ae,Q));let he=se(_);if(he!==b.__cacheKey){Q[he]===void 0&&(Q[he]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,k=!0),Q[he].usedTimes++;let fe=Q[b.__cacheKey];fe!==void 0&&(Q[b.__cacheKey].usedTimes--,fe.usedTimes===0&&X(_)),b.__cacheKey=he,b.__webglTexture=Q[he].texture}return k}function _t(b,_,k){return Math.floor(Math.floor(b/k)/_)}function xt(b,_,k,ae){let Q=b.updateRanges;if(Q.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,k,ae,_.data);else{Q.sort((Se,L)=>Se.start-L.start);let he=0;for(let Se=1;Se<Q.length;Se++){let L=Q[he],q=Q[Se],re=L.start+L.count,le=_t(q.start,_.width,4),_e=_t(L.start,_.width,4);q.start<=re+1&&le===_e&&_t(q.start+q.count-1,_.width,4)===le?L.count=Math.max(L.count,q.start+q.count-L.start):(++he,Q[he]=q)}Q.length=he+1;let fe=i.getParameter(e.UNPACK_ROW_LENGTH),I=i.getParameter(e.UNPACK_SKIP_PIXELS),ee=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let Se=0,L=Q.length;Se<L;Se++){let q=Q[Se],re=Math.floor(q.start/4),le=Math.ceil(q.count/4),_e=re%_.width,de=Math.floor(re/_.width),Pe=le;i.pixelStorei(e.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(e.UNPACK_SKIP_ROWS,de),i.texSubImage2D(e.TEXTURE_2D,0,_e,de,Pe,1,k,ae,_.data)}b.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,fe),i.pixelStorei(e.UNPACK_SKIP_PIXELS,I),i.pixelStorei(e.UNPACK_SKIP_ROWS,ee)}}function ai(b,_,k){let ae=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ae=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ae=e.TEXTURE_3D);let Q=Ht(b,_),he=_.source;i.bindTexture(ae,b.__webglTexture,e.TEXTURE0+k);let fe=r.get(he);if(he.version!==fe.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+k),!(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)){let ie=ct.getPrimaries(ct.workingColorSpace),Xe=_.colorSpace===Fr?null:ct.getPrimaries(_.colorSpace),Ve=_.colorSpace===Fr||ie===Xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment);let I=w(_.image,!1,a.maxTextureSize);I=ze(_,I);let ee=n.convert(_.format,_.colorSpace),Se=n.convert(_.type),L=C(_.internalFormat,ee,Se,_.normalized,_.colorSpace,_.isVideoTexture);Rt(ae,_);let q,re=_.mipmaps,le=_.isVideoTexture!==!0,_e=fe.__version===void 0||Q===!0,de=he.dataReady,Pe=x(_,I);if(_.isDepthTexture)L=f(_.format===zr,_.type),_e&&(le?i.texStorage2D(e.TEXTURE_2D,1,L,I.width,I.height):i.texImage2D(e.TEXTURE_2D,0,L,I.width,I.height,0,ee,Se,null));else if(_.isDataTexture)if(re.length>0){le&&_e&&i.texStorage2D(e.TEXTURE_2D,Pe,L,re[0].width,re[0].height);for(let ie=0,Xe=re.length;ie<Xe;ie++)q=re[ie],le?de&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,q.width,q.height,ee,Se,q.data):i.texImage2D(e.TEXTURE_2D,ie,L,q.width,q.height,0,ee,Se,q.data);_.generateMipmaps=!1}else le?(_e&&i.texStorage2D(e.TEXTURE_2D,Pe,L,I.width,I.height),de&&xt(_,I,ee,Se)):i.texImage2D(e.TEXTURE_2D,0,L,I.width,I.height,0,ee,Se,I.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){le&&_e&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,L,re[0].width,re[0].height,I.depth);for(let ie=0,Xe=re.length;ie<Xe;ie++)if(q=re[ie],_.format!==or)if(ee!==null)if(le){if(de)if(_.layerUpdates.size>0){let Ve=Jc(q.width,q.height,_.format,_.type);for(let st of _.layerUpdates){let we=q.data.subarray(st*Ve/q.data.BYTES_PER_ELEMENT,(st+1)*Ve/q.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,st,q.width,q.height,1,ee,we)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,I.depth,ee,q.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ie,L,q.width,q.height,I.depth,0,q.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?de&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,q.width,q.height,I.depth,ee,Se,q.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ie,L,q.width,q.height,I.depth,0,ee,Se,q.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{le&&_e&&i.texStorage2D(e.TEXTURE_2D,Pe,L,re[0].width,re[0].height);for(let ie=0,Xe=re.length;ie<Xe;ie++)q=re[ie],_.format!==or?ee!==null?le?de&&i.compressedTexSubImage2D(e.TEXTURE_2D,ie,0,0,q.width,q.height,ee,q.data):i.compressedTexImage2D(e.TEXTURE_2D,ie,L,q.width,q.height,0,q.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?de&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,q.width,q.height,ee,Se,q.data):i.texImage2D(e.TEXTURE_2D,ie,L,q.width,q.height,0,ee,Se,q.data)}else if(_.isDataArrayTexture)if(le){if(_e&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,L,I.width,I.height,I.depth),de)if(_.layerUpdates.size>0){let ie=Jc(I.width,I.height,_.format,_.type);for(let Xe of _.layerUpdates){let Ve=I.data.subarray(Xe*ie/I.data.BYTES_PER_ELEMENT,(Xe+1)*ie/I.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Xe,I.width,I.height,1,ee,Se,Ve)}_.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,ee,Se,I.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,L,I.width,I.height,I.depth,0,ee,Se,I.data);else if(_.isData3DTexture)le?(_e&&i.texStorage3D(e.TEXTURE_3D,Pe,L,I.width,I.height,I.depth),de&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,ee,Se,I.data)):i.texImage3D(e.TEXTURE_3D,0,L,I.width,I.height,I.depth,0,ee,Se,I.data);else if(_.isFramebufferTexture){if(_e)if(le)i.texStorage2D(e.TEXTURE_2D,Pe,L,I.width,I.height);else{let ie=I.width,Xe=I.height;for(let Ve=0;Ve<Pe;Ve++)i.texImage2D(e.TEXTURE_2D,Ve,L,ie,Xe,0,ee,Se,null),ie>>=1,Xe>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in e){let ie=e.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),I.parentNode!==ie){ie.appendChild(I),d.add(_),ie.onpaint=Xe=>{let Ve=Xe.changedElements;for(let st of d)Ve.includes(st.image)&&(st.needsUpdate=!0)},ie.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,I);else{let Xe=e.RGBA,Ve=e.RGBA,st=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Xe,Ve,st,I)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(re.length>0){if(le&&_e){let ie=Ut(re[0]);i.texStorage2D(e.TEXTURE_2D,Pe,L,ie.width,ie.height)}for(let ie=0,Xe=re.length;ie<Xe;ie++)q=re[ie],le?de&&i.texSubImage2D(e.TEXTURE_2D,ie,0,0,ee,Se,q):i.texImage2D(e.TEXTURE_2D,ie,L,ee,Se,q);_.generateMipmaps=!1}else if(le){if(_e){let ie=Ut(I);i.texStorage2D(e.TEXTURE_2D,Pe,L,ie.width,ie.height)}de&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,ee,Se,I)}else i.texImage2D(e.TEXTURE_2D,0,L,ee,Se,I);A(_)&&_.mipmapsAutoUpdate===!0&&y(ae),fe.__version=he.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ni(b,_,k){if(_.image.length!==6)return;let ae=Ht(b,_),Q=_.source;i.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+k);let he=r.get(Q);if(Q.version!==he.__version||ae===!0){i.activeTexture(e.TEXTURE0+k);let fe=ct.getPrimaries(ct.workingColorSpace),I=_.colorSpace===Fr?null:ct.getPrimaries(_.colorSpace),ee=_.colorSpace===Fr||fe===I?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Se=_.isCompressedTexture||_.image[0].isCompressedTexture,L=_.image[0]&&_.image[0].isDataTexture,q=[];for(let we=0;we<6;we++)!Se&&!L?q[we]=w(_.image[we],!0,a.maxCubemapSize):q[we]=L?_.image[we].image:_.image[we],q[we]=ze(_,q[we]);let re=q[0],le=n.convert(_.format,_.colorSpace),_e=n.convert(_.type),de=C(_.internalFormat,le,_e,_.normalized,_.colorSpace),Pe=_.isVideoTexture!==!0,ie=he.__version===void 0||ae===!0,Xe=Q.dataReady,Ve=x(_,re);Rt(e.TEXTURE_CUBE_MAP,_);let st;if(_.isDepthTexture){if(de=f(_.format===zr,_.type),ie)if(Pe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,de,re.width,re.height);else for(let we=0;we<6;we++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,de,re.width,re.height,0,le,_e,null)}else if(Se){Pe&&ie&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ve,de,re.width,re.height);for(let we=0;we<6;we++){st=q[we].mipmaps;for(let tt=0;tt<st.length;tt++){let Mt=st[tt];_.format!==or?le!==null?Pe?Xe&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,0,0,Mt.width,Mt.height,le,Mt.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,de,Mt.width,Mt.height,0,Mt.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,0,0,Mt.width,Mt.height,le,_e,Mt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt,de,Mt.width,Mt.height,0,le,_e,Mt.data)}}}else{if(st=_.mipmaps,Pe&&ie){st.length>0&&Ve++;let we=Ut(q[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ve,de,we.width,we.height)}for(let we=0;we<6;we++)if(L){Pe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,q[we].width,q[we].height,le,_e,q[we].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,de,q[we].width,q[we].height,0,le,_e,q[we].data);for(let tt=0;tt<st.length;tt++){let Mt=st[tt].image[we].image;Pe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,0,0,Mt.width,Mt.height,le,_e,Mt.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,de,Mt.width,Mt.height,0,le,_e,Mt.data)}}else{Pe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,le,_e,q[we]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,de,le,_e,q[we]);for(let tt=0;tt<st.length;tt++){let Mt=st[tt];Pe?Xe&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,0,0,le,_e,Mt.image[we]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+we,tt+1,de,le,_e,Mt.image[we])}}}A(_)&&_.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),he.__version=Q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ct(b,_,k,ae,Q,he){let fe=n.convert(k.format,k.colorSpace),I=n.convert(k.type),ee=C(k.internalFormat,fe,I,k.normalized,k.colorSpace),Se=r.get(_),L=r.get(k);if(L.__renderTarget=_,!Se.__hasExternalTextures){let q=Math.max(1,_.width>>he),re=Math.max(1,_.height>>he);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?i.texImage3D(Q,he,ee,q,re,_.depth,0,fe,I,null):i.texImage2D(Q,he,ee,q,re,0,fe,I,null)}i.bindFramebuffer(e.FRAMEBUFFER,b),vt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ae,Q,L.__webglTexture,0,Me(_)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,ae,Q,L.__webglTexture,he),i.bindFramebuffer(e.FRAMEBUFFER,null)}function Jt(b,_,k){if(e.bindRenderbuffer(e.RENDERBUFFER,b),_.depthBuffer){let ae=_.depthTexture,Q=ae&&ae.isDepthTexture?ae.type:null,he=f(_.stencilBuffer,Q),fe=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;vt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(_),he,_.width,_.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(_),he,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,he,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,fe,e.RENDERBUFFER,b)}else{let ae=_.textures;for(let Q=0;Q<ae.length;Q++){let he=ae[Q],fe=n.convert(he.format,he.colorSpace),I=n.convert(he.type),ee=C(he.internalFormat,fe,I,he.normalized,he.colorSpace);vt(_)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(_),ee,_.width,_.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(_),ee,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,ee,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ui(b,_,k){let ae=_.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(_.depthTexture);Q.__renderTarget=_;let he=ae?_.depthTexture.image[0]:_.depthTexture.image;(!Q.__webglTexture||he.width!==_.width||he.height!==_.height)&&(he.width=_.width,he.height=_.height,_.depthTexture.needsUpdate=!0),ae?ge(_.depthTexture,0):Ae(_.depthTexture,0);let fe=Q.__webglTexture,I=Me(_),ee=ae?e.TEXTURE_CUBE_MAP_POSITIVE_X+k:e.TEXTURE_2D,Se=_.depthTexture.format===zr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Gr)vt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,ee,fe,0,I):e.framebufferTexture2D(e.FRAMEBUFFER,Se,ee,fe,0);else if(_.depthTexture.format===zr)vt(_)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Se,ee,fe,0,I):e.framebufferTexture2D(e.FRAMEBUFFER,Se,ee,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function si(b){let _=r.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let ae=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ae){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ae.removeEventListener("dispose",Q)};ae.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=ae}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let ae=0;ae<6;ae++)ui(_.__webglFramebuffer[ae],b,ae);else b.texture.mipmaps.length>0?ui(_.__webglFramebuffer[0],b,0):ui(_.__webglFramebuffer,b,0);else if(k){_.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[ae]),_.__webglDepthbuffer[ae]===void 0)_.__webglDepthbuffer[ae]=e.createRenderbuffer(),Jt(_.__webglDepthbuffer[ae],b,!1);else{let Q=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer[ae];e.bindRenderbuffer(e.RENDERBUFFER,he),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,he)}}else if(b.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Jt(_.__webglDepthbuffer,b,!1);else{let ae=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Q),e.framebufferRenderbuffer(e.FRAMEBUFFER,ae,e.RENDERBUFFER,Q)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function Si(b,_,k){let ae=r.get(b);_!==void 0&&Ct(ae.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&si(b)}function F(b){let _=b.texture,k=r.get(b),ae=r.get(_);b.addEventListener("dispose",H),P(b);let Q=b.textures,he=b.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(ae.__webglTexture===void 0&&(ae.__webglTexture=e.createTexture()),ae.__version=_.version,s.memory.textures++),he){k.__webglFramebuffer=[];for(let I=0;I<6;I++)if(_.mipmaps.length>0){k.__webglFramebuffer[I]=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[I][ee]=e.createFramebuffer()}else k.__webglFramebuffer[I]=e.createFramebuffer()}else{if(_.mipmaps.length>0){k.__webglFramebuffer=[];for(let I=0;I<_.mipmaps.length;I++)k.__webglFramebuffer[I]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(fe)for(let I=0,ee=Q.length;I<ee;I++){let Se=r.get(Q[I]);Se.__webglTexture===void 0&&(Se.__webglTexture=e.createTexture(),s.memory.textures++)}if(b.samples>0&&vt(b)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let I=0;I<Q.length;I++){let ee=Q[I];k.__webglColorRenderbuffer[I]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[I]);let Se=n.convert(ee.format,ee.colorSpace),L=n.convert(ee.type),q=C(ee.internalFormat,Se,L,ee.normalized,ee.colorSpace,b.isXRRenderTarget===!0),re=Me(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,re,q,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+I,e.RENDERBUFFER,k.__webglColorRenderbuffer[I])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),Jt(k.__webglDepthRenderbuffer,b,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(he){i.bindTexture(e.TEXTURE_CUBE_MAP,ae.__webglTexture),Rt(e.TEXTURE_CUBE_MAP,_);for(let I=0;I<6;I++)if(_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ct(k.__webglFramebuffer[I][ee],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,ee);else Ct(k.__webglFramebuffer[I],b,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+I,0);A(_)?y(e.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}else if(fe){for(let I=0,ee=Q.length;I<ee;I++){let Se=Q[I],L=r.get(Se),q=e.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(q=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(q,L.__webglTexture),Rt(q,Se),Ct(k.__webglFramebuffer,b,Se,e.COLOR_ATTACHMENT0+I,q,0),A(Se)&&y(q)}i.unbindTexture()}else{let I=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(I=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(I,ae.__webglTexture),Rt(I,_),_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Ct(k.__webglFramebuffer[ee],b,_,e.COLOR_ATTACHMENT0,I,ee);else Ct(k.__webglFramebuffer,b,_,e.COLOR_ATTACHMENT0,I,0);A(_)?y(I):_.mipmaps.length>0&&e.texParameteri(I,e.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),i.unbindTexture()}b.depthBuffer&&si(b)}function xi(b){let _=b.textures;for(let k=0,ae=_.length;k<ae;k++){let Q=_[k];if(A(Q)&&Q.mipmapsAutoUpdate===!0){let he=T(b),fe=r.get(Q).__webglTexture;i.bindTexture(he,fe),y(he),i.unbindTexture()}}}let pt=[];function Lt(b){if(b.samples>0){if(vt(b)===!1){let _=b.textures,k=b.width,ae=b.height,Q=e.COLOR_BUFFER_BIT,he=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,fe=r.get(b),I=_.length>1;if(I)for(let ee=0;ee<_.length;ee++)i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ee=0;ee<_.length;ee++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),I){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,fe.__webglColorRenderbuffer[ee]);let Se=r.get(_[ee]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Se,0)}e.blitFramebuffer(0,0,k,ae,0,0,k,ae,Q,e.NEAREST),l===!0&&(pt.length=0,pt.push(e.COLOR_ATTACHMENT0+ee),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&pt.push(he),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pt))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),I)for(let ee=0;ee<_.length;ee++){i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,fe.__webglColorRenderbuffer[ee]);let Se=r.get(_[ee]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.TEXTURE_2D,Se,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function Me(b){return Math.min(a.maxSamples,b.samples)}function vt(b){let _=r.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ie(b){let _=s.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function ze(b,_){let k=b.colorSpace,ae=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Cs&&k!==Fr&&(ct.getTransfer(k)===St?(ae!==or||Q!==Ui)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",k)),_}function Ut(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.getTextureUnits=oe,this.setTextureUnits=Ue,this.setTexture2D=Ae,this.setTexture2DArray=De,this.setTexture3D=Oe,this.setTextureCube=ge,this.rebindTextures=Si,this.setupRenderTarget=F,this.updateRenderTargetMipmap=xi,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=si,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=vt,this.dispose=z}function tv(e,t){function i(r,a=Fr){let n,s=ct.getTransfer(a);if(r===Ui)return e.UNSIGNED_BYTE;if(r===Ml)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Sl)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Nh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Dh)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ph)return e.BYTE;if(r===Lh)return e.SHORT;if(r===bn)return e.UNSIGNED_SHORT;if(r===vl)return e.INT;if(r===cr)return e.UNSIGNED_INT;if(r===Yi)return e.FLOAT;if(r===hr)return e.HALF_FLOAT;if(r===Uh)return e.ALPHA;if(r===Ih)return e.RGB;if(r===or)return e.RGBA;if(r===Gr)return e.DEPTH_COMPONENT;if(r===zr)return e.DEPTH_STENCIL;if(r===xl)return e.RED;if(r===yl)return e.RED_INTEGER;if(r===na)return e.RG;if(r===El)return e.RG_INTEGER;if(r===bl)return e.RGBA_INTEGER;if(r===_s||r===vs||r===Ms||r===Ss)if(s===St)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===_s)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vs)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ms)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ss)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===_s)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vs)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ms)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ss)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Io||r===Oo||r===Fo||r===Bo)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Io)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Oo)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fo)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bo)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zo||r===Ho||r===Go||r===Vo||r===ko||r===Ts||r===Wo)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===zo||r===Ho)return s===St?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Go)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Vo)return n.COMPRESSED_R11_EAC;if(r===ko)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Ts)return n.COMPRESSED_RG11_EAC;if(r===Wo)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Xo||r===jo||r===qo||r===Yo||r===Ko||r===Zo||r===Jo||r===Qo||r===$o||r===el||r===tl||r===il||r===rl||r===al)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Xo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ko)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qo)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$o)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===el)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tl)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===il)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rl)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===al)return s===St?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nl||r===sl||r===ol)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===nl)return s===St?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ol)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ll||r===cl||r===As||r===hl)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===ll)return n.COMPRESSED_RED_RGTC1_EXT;if(r===cl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===As)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xa?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function ov(e,t){function i(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function r(g,p){p.color.getRGB(g.fogColor.value,hu(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function a(g,p,w,A,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?n(g,p):p.isMeshLambertMaterial?(n(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(n(g,p),d(g,p)):p.isMeshPhongMaterial?(n(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(n(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,y)):p.isMeshMatcapMaterial?(n(g,p),M(g,p)):p.isMeshDepthMaterial?n(g,p):p.isMeshDistanceMaterial?(n(g,p),S(g,p)):p.isMeshNormalMaterial?n(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,i(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ai&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,i(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ai&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,i(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,i(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,i(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),A=w.envMap,y=w.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(sv.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Pu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,i(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,i(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=A*.5,p.map&&(g.map.value=p.map,i(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,i(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,i(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,i(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,i(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,w){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,i(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,i(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,i(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,i(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,i(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,i(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ai&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,i(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,i(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,i(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,i(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,i(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,i(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,i(p.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function lv(e,t,i,r){let a={},n={};function s(w,A){let y=A.program;r.uniformBlockBinding(w,y,a[w.id])}function o(w,A){let y=a[w.id];y===void 0&&(M(w),y=l(w),a[w.id]=y,w.addEventListener("dispose",g));let T=A.program;r.updateUBOMapping(w,T);let C=t.render.frame;n[w.id]!==C&&(c(w),n[w.id]=C)}function l(w){let A=e.createBuffer(),y=w.__size,T=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,y,T),e.bindBuffer(e.UNIFORM_BUFFER,null),A}function c(w){let A=a[w.id],y=w.uniforms,T=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let C=0,f=y.length;C<f;C++){let x=y[C];if(Array.isArray(x))for(let P=0,R=x.length;P<R;P++)h(x[P],C,P,T);else h(x,C,0,T)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(w,A,y,T){if(u(w,A,y,T)===!0){let C=w.__offset,f=w.value;if(Array.isArray(f)){let x=0;for(let P=0;P<f.length;P++){let R=f[P],U=S(R,!0);d(R,w.__data,x),x+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else d(f,w.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,C,w.__data)}}function d(w,A,y){typeof w=="number"||typeof w=="boolean"?A[y]=w:w.isMatrix3?(A[y]=w.elements[0],A[y+1]=w.elements[1],A[y+2]=w.elements[2],A[y+3]=0,A[y+4]=w.elements[3],A[y+5]=w.elements[4],A[y+6]=w.elements[5],A[y+7]=0,A[y+8]=w.elements[6],A[y+9]=w.elements[7],A[y+10]=w.elements[8],A[y+11]=0):ArrayBuffer.isView(w)?A.set(w.subarray(0,A.length-y),y):w.toArray(A,y)}function u(w,A,y,T){let C=w.value,f=A+"_"+y;if(Array.isArray(C)){T[f]===void 0&&(T[f]=[]);let x=T[f],P=!1;for(let R=0;R<C.length;R++)m(C[R],x,R)===!0&&(P=!0);return P}return m(C,T,f)}function m(w,A,y){if(A[y]===void 0)return typeof w=="number"||typeof w=="boolean"?A[y]=w:ArrayBuffer.isView(w)?A[y]=w.slice():A[y]=w.clone(),!0;{let T=A[y];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return A[y]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(T.equals(w)===!1)return T.copy(w),!0}}return!1}function M(w){let A=w.uniforms,y=0,T=16;for(let f=0,x=A.length;f<x;f++){let P=Array.isArray(A[f])?A[f]:[A[f]];for(let R=0,U=P.length;R<U;R++){let H=P[R],Z=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(A[f])||Array.isArray(H.value),z=y;for(let X=0,me=Z.length;X<me;X++){let K=Z[X],Y=S(K,D),oe=y%T,Ue=oe%Y.boundary,J=oe+Ue;y+=Ue,J!==0&&T-J<Y.storage&&(y+=T-J),X===0&&(z=y),y+=Y.storage}let $=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new $((y-z)/Float32Array.BYTES_PER_ELEMENT),H.__offset=z}}let C=y%T;return C>0&&(y+=T-C),w.__size=y,w.__cache={},this}function S(w,A){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=16,y.storage=48):w.isMatrix4?(y.boundary=16,y.storage=64):w.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(y.boundary=16,y.storage=w.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",w),A===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(w){let A=w.target;A.removeEventListener("dispose",g),e.deleteBuffer(a[A.id]),delete a[A.id],delete n[A.id]}function p(){for(let w in a)e.deleteBuffer(a[w]);a={},n={}}return{bind:s,update:o,dispose:p}}function hv(){return nr===null&&(nr=new Zh(cv,16,16,na,hr),nr.name="DFG_LUT",nr.minFilter=Ti,nr.magFilter=Ti,nr.wrapS=Er,nr.wrapT=Er,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}var pd,uc,fd,gs,md,_n,aa,Ai,yr,Fa,Mn,ws,dc,pc,gd,Ua,_d,vd,Md,Sd,xd,yd,Ed,bd,Sh,xh,wd,Td,Ad,Rd,Cd,Pd,Ld,Nd,Dd,To,Ao,Ro,yn,Co,Po,Lo,No,_l,Ud,Id,br,yh,Eh,bh,wh,Th,Ah,Rh,Ch,Wa,En,js,qs,Do,Er,Uo,li,Od,jn,Ti,Ys,Br,Ui,Ph,Lh,bn,vl,cr,Yi,hr,Ml,Sl,Xa,Nh,Dh,Uh,Ih,or,Gr,zr,xl,yl,na,El,bl,_s,vs,Ms,Ss,Io,Oo,Fo,Bo,zo,Ho,Go,Vo,ko,Ts,Wo,Xo,jo,qo,Yo,Ko,Zo,Jo,Qo,$o,el,tl,il,rl,al,nl,sl,ol,ll,cl,As,hl,Rs,ul,Ks,fc,mc,gc,_c,Fd,dl,Bd,Fr,zi,Cs,Ps,St,Zs,zd,Hd,Gd,Vd,Oh,kd,Wd,Fh,Bh,Xd,vc,Ki,wn,Mc,ja,Zd,oa,fi,Js,pl,za,Ge,la,Ha,O,$s,xc,Ga,Ze,eo,yc,Ec,ct,Sa,ip,rp,Tl,ap,io,Zi,Va,Ot,np,lr,Hh,sp,ra,wt,xa,Xi,op,lp,Lr,qn,Li,bc,wc,qa,Al,cp,Tc,ya,_r,Yn,cn,hp,up,Ac,Rc,Cc,Pc,dp,Ea,ro,_i,gi,pp,ao,Vh,Nr,Kn,qe,mi,kh,Xh,ji,vr,so,Mr,ba,wa,Lc,oo,lo,co,ho,uo,po,hn,ca,Sr,qi,Zn,Ta,Aa,Ra,Dr,Ur,$r,un,Jn,Qn,ea,Gt,$n,fp,Hr,jh,qh,At,mp,dn,mo,Rn,gp,Bi,go,Ca,Ni,pn,Qt,Ji,_o,_p,vp,Or,Mp,Cn,xr,vo,es,ts,Kh,Rl,Nc,ta,is,Dc,rs,as,ns,Mo,ss,Uc,os,Je,Zh,Ic,Pa,Oc,cs,Fc,xp,fn,mn,Vr,ia,yp,hs,Tn,Bc,Ep,Qh,Ya,$h,eu,Ii,ha,ci,Cl,Tr,nu,bp,zc,Hc,So,xo,yo,Ns,Np,Dp,Up,Ip,Op,su,Fp,Bp,ua,Pn,Ll,Hp,Gp,Vp,sa,kp,Nl,Wp,Xp,Ln,jp,qp,Yp,Kp,ur,Nn,Qp,$p,ef,du,Dn,tf,rf,af,nf,Dl,pu,Eo,Xc,jc,fu,ds,ps,ar,mu,Ir,qc,Yc,Di,sf,Ul,gu,of,_u,Na,Da,fl,lf,Il,cf,Ol,hf,uf,df,pf,ff,mf,gf,_f,Dt,Bv,Kc,vu,ka,zv,Sf,xf,yf,Ef,bf,wf,Tf,Af,Rf,Cf,Pf,Lf,Nf,Df,Uf,If,Of,Ff,Bf,zf,Hf,Gf,Vf,kf,Wf,Xf,jf,qf,Yf,Kf,Zf,Jf,Qf,$f,em,tm,im,rm,am,nm,sm,om,lm,cm,hm,um,dm,pm,fm,mm,gm,_m,vm,Mm,Sm,xm,ym,Em,bm,wm,Tm,Am,Rm,Cm,Pm,Lm,Nm,Dm,Um,Im,Om,Fm,Bm,zm,Hm,Gm,Vm,km,Wm,Xm,jm,qm,Ym,Km,Zm,Jm,Qm,$m,eg,tg,ig,rg,ag,ng,sg,og,lg,cg,hg,ug,dg,pg,fg,mg,gg,_g,vg,Mg,Sg,xg,yg,Eg,bg,wg,Tg,Ag,Rg,Cg,Pg,Lg,Ng,Dg,Ug,Ig,Og,Fg,Bg,zg,Hg,Gg,Vg,kg,Wg,Xg,jg,qg,Yg,Kg,Zg,Jg,Qg,$e,xe,sr,fs,$g,Su,Fl,Qc,n0,s0,xu,yu,o0,l0,c0,$c,S0,bu,wu,Tu,Au,Ru,Cu,rh,ah,nh,sh,oh,l_,c_,h_,bo,bs,d_,p_,hh,__,ms,E_,w_,A_,C_,L_,U_,I_,O_,W_,Y_,K_,Z_,J_,Mh,gn,wo,iv,rv,av,nv,sv,Pu,cv,nr,Lu,Nu=Wn(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */pd=0,uc=1,fd=2,gs=1,md=2,_n=3,aa=0,Ai=1,yr=2,Fa=0,Mn=1,ws=2,dc=3,pc=4,gd=5,Ua=100,_d=101,vd=102,Md=103,Sd=104,xd=200,yd=201,Ed=202,bd=203,Sh=204,xh=205,wd=206,Td=207,Ad=208,Rd=209,Cd=210,Pd=211,Ld=212,Nd=213,Dd=214,To=0,Ao=1,Ro=2,yn=3,Co=4,Po=5,Lo=6,No=7,_l=0,Ud=1,Id=2,br=0,yh=1,Eh=2,bh=3,wh=4,Th=5,Ah=6,Rh=7,Ch=300,Wa=301,En=302,js=303,qs=304,Do=1e3,Er=1001,Uo=1002,li=1003,Od=1004,jn=1005,Ti=1006,Ys=1007,Br=1008,Ui=1009,Ph=1010,Lh=1011,bn=1012,vl=1013,cr=1014,Yi=1015,hr=1016,Ml=1017,Sl=1018,Xa=1020,Nh=35902,Dh=35899,Uh=1021,Ih=1022,or=1023,Gr=1026,zr=1027,xl=1028,yl=1029,na=1030,El=1031,bl=1033,_s=33776,vs=33777,Ms=33778,Ss=33779,Io=35840,Oo=35841,Fo=35842,Bo=35843,zo=36196,Ho=37492,Go=37496,Vo=37488,ko=37489,Ts=37490,Wo=37491,Xo=37808,jo=37809,qo=37810,Yo=37811,Ko=37812,Zo=37813,Jo=37814,Qo=37815,$o=37816,el=37817,tl=37818,il=37819,rl=37820,al=37821,nl=36492,sl=36494,ol=36495,ll=36283,cl=36284,As=36285,hl=36286,Rs=2300,ul=2301,Ks=2302,fc=2303,mc=2400,gc=2401,_c=2402,Fd=3200,dl=0,Bd=1,Fr="",zi="srgb",Cs="srgb-linear",Ps="linear",St="srgb",Zs=7680,zd=519,Hd=512,Gd=513,Vd=514,Oh=515,kd=516,Wd=517,Fh=518,Bh=519,Xd=35044,vc="300 es",Ki=2e3,wn=2001;Mc={},ja=null;Zd={[To]:To,[Ro]:Lo,[Co]:Co,[yn]:Po,[Ao]:Ao,[Lo]:Ro,[No]:No,[Po]:yn},oa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,pl=180/Math.PI;Ge=(za=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=lt(this.x,t.x,i.x),this.y=lt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=lt(this.x,t,i),this.y=lt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(lt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},za.prototype.isVector2=!0,za),la=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],d=a[n+0],u=a[n+1],m=a[n+2],M=a[n+3];if(h!==M||o!==d||l!==u||c!==m){let S=o*d+l*u+c*m+h*M;S<0&&(d=-d,u=-u,m=-m,M=-M,S=-S);let g=1-s;if(S<.9995){let p=Math.acos(S),w=Math.sin(p);g=Math.sin(g*p)/w,s=Math.sin(s*p)/w,o=o*g+d*s,l=l*g+u*s,c=c*g+m*s,h=h*g+M*s}else{o=o*g+d*s,l=l*g+u*s,c=c*g+m*s,h=h*g+M*s;let p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],d=a[n+1],u=a[n+2],m=a[n+3];return e[t]=s*m+c*h+o*u-l*d,e[t+1]=o*m+c*d+l*h-s*u,e[t+2]=l*m+c*u+s*d-o*h,e[t+3]=c*m-s*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),d=o(i/2),u=o(r/2),m=o(a/2);switch(n){case"XYZ":this._x=d*c*h+l*u*m,this._y=l*u*h-d*c*m,this._z=l*c*m+d*u*h,this._w=l*c*h-d*u*m;break;case"YXZ":this._x=d*c*h+l*u*m,this._y=l*u*h-d*c*m,this._z=l*c*m-d*u*h,this._w=l*c*h+d*u*m;break;case"ZXY":this._x=d*c*h-l*u*m,this._y=l*u*h+d*c*m,this._z=l*c*m+d*u*h,this._w=l*c*h-d*u*m;break;case"ZYX":this._x=d*c*h-l*u*m,this._y=l*u*h+d*c*m,this._z=l*c*m-d*u*h,this._w=l*c*h+d*u*m;break;case"YZX":this._x=d*c*h+l*u*m,this._y=l*u*h+d*c*m,this._z=l*c*m-d*u*h,this._w=l*c*h-d*u*m;break;case"XZY":this._x=d*c*h-l*u*m,this._y=l*u*h-d*c*m,this._z=l*c*m+d*u*h,this._w=l*c*h+d*u*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+s+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=(Ha=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(xc.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*c+s*d-o*h,this.y=r+l*h+o*c-n*d,this.z=a+l*d+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=lt(this.x,t.x,i.x),this.y=lt(this.y,t.y,i.y),this.z=lt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=lt(this.x,t,i),this.y=lt(this.y,t,i),this.z=lt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return $s.copy(this).projectOnVector(t),this.sub($s)}reflect(t){return this.sub($s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(lt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ha.prototype.isVector3=!0,Ha),$s=new O,xc=new la,Ze=(Ga=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],m=r[5],M=r[8],S=a[0],g=a[3],p=a[6],w=a[1],A=a[4],y=a[7],T=a[2],C=a[5],f=a[8];return n[0]=s*S+o*w+l*T,n[3]=s*g+o*A+l*C,n[6]=s*p+o*y+l*f,n[1]=c*S+h*w+d*T,n[4]=c*g+h*A+d*C,n[7]=c*p+h*y+d*f,n[2]=u*S+m*w+M*T,n[5]=u*g+m*A+M*C,n[8]=u*p+m*y+M*f,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,u=o*l-h*n,m=c*n-s*l,M=i*d+r*u+a*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/M;return t[0]=d*S,t[1]=(a*c-h*r)*S,t[2]=(o*r-a*s)*S,t[3]=u*S,t[4]=(h*i-a*l)*S,t[5]=(a*n-o*i)*S,t[6]=m*S,t[7]=(r*l-c*i)*S,t[8]=(s*i-r*n)*S,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eo.makeScale(t,i)),this}rotate(t){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eo.makeRotation(-t)),this}translate(t,i){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eo.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ga.prototype.isMatrix3=!0,Ga),eo=new Ze,yc=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ct=tp();ip=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Sa===void 0&&(Sa=Ls("canvas")),Sa.width=e.width,Sa.height=e.height;let r=Sa.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Sa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ls("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=wr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rp=0,Tl=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=An(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(to(r[n].image)):a.push(to(r[n]))}else a=to(r);i.url=a}return t||(e.images[this.uuid]=i),i}};ap=0,io=new O,Zi=class ys extends oa{constructor(t=ys.DEFAULT_IMAGE,i=ys.DEFAULT_MAPPING,r=Er,a=Er,n=Ti,s=Br,o=or,l=Ui,c=ys.DEFAULT_ANISOTROPY,h=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=An(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(io).x}get height(){return this.source.getSize(io).y}get depth(){return this.source.getSize(io).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){ke(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){ke(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Do:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case Uo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Do:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case Uo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Zi.DEFAULT_IMAGE=null;Zi.DEFAULT_MAPPING=Ch;Zi.DEFAULT_ANISOTROPY=1;Ot=(Va=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],m=s[2],M=s[6],S=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(u-M)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(u+M)<.1&&Math.abs(o+d+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let p=(o+1)/2,w=(d+1)/2,A=(S+1)/2,y=(l+h)/4,T=(c+m)/4,C=(u+M)/4;return p>w&&p>A?p<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(p),a=y/r,n=T/r):w>A?w<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(w),r=y/a,n=C/a):A<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(A),r=T/n,a=C/n),this.set(r,a,n,i),this}let g=Math.sqrt((M-u)*(M-u)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(M-u)/g,this.y=(c-m)/g,this.z=(h-l)/g,this.w=Math.acos((o+d+S-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=lt(this.x,t.x,i.x),this.y=lt(this.y,t.y,i.y),this.z=lt(this.z,t.z,i.z),this.w=lt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=lt(this.x,t,i),this.y=lt(this.y,t,i),this.z=lt(this.z,t,i),this.w=lt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(lt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va.prototype.isVector4=!0,Va),np=class extends oa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new Zi({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Tl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},lr=class extends np{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Hh=class extends Zi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},sp=class extends Zi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},wt=(ra=class{constructor(t,i,r,a,n,s,o,l,c,h,d,u,m,M,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,d,u,m,M,S,g)}set(t,i,r,a,n,s,o,l,c,h,d,u,m,M,S,g){let p=this.elements;return p[0]=t,p[4]=i,p[8]=r,p[12]=a,p[1]=n,p[5]=s,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=M,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/xa.setFromMatrixColumn(t,0).length(),n=1/xa.setFromMatrixColumn(t,1).length(),s=1/xa.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*h,m=s*d,M=o*h,S=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=m+M*c,i[5]=u-S*c,i[9]=-o*l,i[2]=S-u*c,i[6]=M+m*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,m=l*d,M=c*h,S=c*d;i[0]=u+S*o,i[4]=M*o-m,i[8]=s*c,i[1]=s*d,i[5]=s*h,i[9]=-o,i[2]=m*o-M,i[6]=S+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,m=l*d,M=c*h,S=c*d;i[0]=u-S*o,i[4]=-s*d,i[8]=M+m*o,i[1]=m+M*o,i[5]=s*h,i[9]=S-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,m=s*d,M=o*h,S=o*d;i[0]=l*h,i[4]=M*c-m,i[8]=u*c+S,i[1]=l*d,i[5]=S*c+u,i[9]=m*c-M,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,m=s*c,M=o*l,S=o*c;i[0]=l*h,i[4]=S-u*d,i[8]=M*d+m,i[1]=d,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=m*d+M,i[10]=u-S*d}else if(t.order==="XZY"){let u=s*l,m=s*c,M=o*l,S=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+S,i[5]=s*h,i[9]=m*d-M,i[2]=M*d-m,i[6]=o*h,i[10]=S*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,lp)}lookAt(t,i,r){let a=this.elements;return Li.subVectors(t,i),Li.lengthSq()===0&&(Li.z=1),Li.normalize(),Lr.crossVectors(r,Li),Lr.lengthSq()===0&&(Math.abs(r.z)===1?Li.x+=1e-4:Li.z+=1e-4,Li.normalize(),Lr.crossVectors(r,Li)),Lr.normalize(),qn.crossVectors(Li,Lr),a[0]=Lr.x,a[4]=qn.x,a[8]=Li.x,a[1]=Lr.y,a[5]=qn.y,a[9]=Li.y,a[2]=Lr.z,a[6]=qn.z,a[10]=Li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],m=r[13],M=r[2],S=r[6],g=r[10],p=r[14],w=r[3],A=r[7],y=r[11],T=r[15],C=a[0],f=a[4],x=a[8],P=a[12],R=a[1],U=a[5],H=a[9],Z=a[13],D=a[2],z=a[6],$=a[10],X=a[14],me=a[3],K=a[7],Y=a[11],oe=a[15];return n[0]=s*C+o*R+l*D+c*me,n[4]=s*f+o*U+l*z+c*K,n[8]=s*x+o*H+l*$+c*Y,n[12]=s*P+o*Z+l*X+c*oe,n[1]=h*C+d*R+u*D+m*me,n[5]=h*f+d*U+u*z+m*K,n[9]=h*x+d*H+u*$+m*Y,n[13]=h*P+d*Z+u*X+m*oe,n[2]=M*C+S*R+g*D+p*me,n[6]=M*f+S*U+g*z+p*K,n[10]=M*x+S*H+g*$+p*Y,n[14]=M*P+S*Z+g*X+p*oe,n[3]=w*C+A*R+y*D+T*me,n[7]=w*f+A*U+y*z+T*K,n[11]=w*x+A*H+y*$+T*Y,n[15]=w*P+A*Z+y*X+T*oe,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],M=t[3],S=t[7],g=t[11],p=t[15],w=l*m-c*u,A=o*m-c*d,y=o*u-l*d,T=s*m-c*h,C=s*u-l*h,f=s*d-o*h;return i*(S*w-g*A+p*y)-r*(M*w-g*T+p*C)+a*(M*A-S*T+p*f)-n*(M*y-S*C+g*f)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],M=t[12],S=t[13],g=t[14],p=t[15],w=i*o-r*s,A=i*l-a*s,y=i*c-n*s,T=r*l-a*o,C=r*c-n*o,f=a*c-n*l,x=h*S-d*M,P=h*g-u*M,R=h*p-m*M,U=d*g-u*S,H=d*p-m*S,Z=u*p-m*g,D=w*Z-A*H+y*U+T*R-C*P+f*x;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return t[0]=(o*Z-l*H+c*U)*z,t[1]=(a*H-r*Z-n*U)*z,t[2]=(S*f-g*C+p*T)*z,t[3]=(u*C-d*f-m*T)*z,t[4]=(l*R-s*Z-c*P)*z,t[5]=(i*Z-a*R+n*P)*z,t[6]=(g*y-M*f-p*A)*z,t[7]=(h*f-u*y+m*A)*z,t[8]=(s*H-o*R+c*x)*z,t[9]=(r*R-i*H-n*x)*z,t[10]=(M*C-S*y+p*w)*z,t[11]=(d*y-h*C-m*w)*z,t[12]=(o*P-s*U-l*x)*z,t[13]=(i*U-r*P+a*x)*z,t[14]=(S*A-M*T-g*w)*z,t[15]=(h*T-d*A+u*w)*z,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,d=o+o,u=n*c,m=n*h,M=n*d,S=s*h,g=s*d,p=o*d,w=l*c,A=l*h,y=l*d,T=r.x,C=r.y,f=r.z;return a[0]=(1-(S+p))*T,a[1]=(m+y)*T,a[2]=(M-A)*T,a[3]=0,a[4]=(m-y)*C,a[5]=(1-(u+p))*C,a[6]=(g+w)*C,a[7]=0,a[8]=(M+A)*f,a[9]=(g-w)*f,a[10]=(1-(u+S))*f,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=xa.set(a[0],a[1],a[2]).length(),o=xa.set(a[4],a[5],a[6]).length(),l=xa.set(a[8],a[9],a[10]).length();n<0&&(s=-s),Xi.copy(this);let c=1/s,h=1/o,d=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,i.setFromRotationMatrix(Xi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=Ki,l=!1){let c=this.elements,h=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),m=(r+a)/(r-a),M,S;if(l)M=n/(s-n),S=s*n/(s-n);else if(o===Ki)M=-(s+n)/(s-n),S=-2*s*n/(s-n);else if(o===wn)M=-s/(s-n),S=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=M,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Ki,l=!1){let c=this.elements,h=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),m=-(r+a)/(r-a),M,S;if(l)M=1/(s-n),S=s/(s-n);else if(o===Ki)M=-2/(s-n),S=-(s+n)/(s-n);else if(o===wn)M=-1/(s-n),S=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=M,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},ra.prototype.isMatrix4=!0,ra),xa=new O,Xi=new wt,op=new O(0,0,0),lp=new O(1,1,1),Lr=new O,qn=new O,Li=new O,bc=new wt,wc=new la,qa=class Gh{constructor(t=0,i=0,r=0,a=Gh.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],m=a[10];switch(i){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,m),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qa.DEFAULT_ORDER="XYZ";Al=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cp=0,Tc=new O,ya=new la,_r=new wt,Yn=new O,cn=new O,hp=new O,up=new la,Ac=new O(1,0,0),Rc=new O(0,1,0),Cc=new O(0,0,1),Pc={type:"added"},dp={type:"removed"},Ea={type:"childadded",child:null},ro={type:"childremoved",child:null},_i=class Es extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Es.DEFAULT_UP.clone();let t=new O,i=new qa,r=new la,a=new O(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ze}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Es.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Es.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ya.setFromAxisAngle(t,i),this.quaternion.multiply(ya),this}rotateOnWorldAxis(t,i){return ya.setFromAxisAngle(t,i),this.quaternion.premultiply(ya),this}rotateX(t){return this.rotateOnAxis(Ac,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Cc,t)}translateOnAxis(t,i){return Tc.copy(t).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ac,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Yn.copy(t):Yn.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(cn,Yn,this.up):_r.lookAt(Yn,cn,this.up),this.quaternion.setFromRotationMatrix(_r),a&&(_r.extractRotation(a.matrixWorld),ya.setFromRotationMatrix(_r),this.quaternion.premultiply(ya.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(je("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pc),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(dp),ro.child=t,this.dispatchEvent(ro),ro.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_r.multiply(t.parent.matrixWorld)),t.applyMatrix4(_r),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pc),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),u=s(t.skeletons),m=s(t.animations),M=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),m.length>0&&(r.animations=m),M.length>0&&(r.nodes=M)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_i.DEFAULT_UP=new O(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;gi=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},pp={type:"move"},ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let M of e.hand.values()){let S=t.getJointPose(M,i),g=this._getHandJoint(l,M);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=.02,m=.005;l.inputState.pinching&&d>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(pp)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Kn={h:0,s:0,l:0};qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Jd(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=no(n,a,e+1/3),this.g=no(n,a,e),this.b=no(n,a,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=zi){function i(a){a!==void 0&&parseFloat(a)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zi){let i=Vh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zi){return ct.workingToColorSpace(mi.copy(this),e),Math.round(lt(mi.r*255,0,255))*65536+Math.round(lt(mi.g*255,0,255))*256+Math.round(lt(mi.b*255,0,255))}getHexString(e=zi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(mi.copy(this),t);let i=mi.r,r=mi.g,a=mi.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(mi.copy(this),t),e.r=mi.r,e.g=mi.g,e.b=mi.b,e}getStyle(e=zi){ct.workingToColorSpace(mi.copy(this),e);let t=mi.r,i=mi.g,r=mi.b;return e!==zi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Kn);let i=Qs(Nr.h,Kn.h,t),r=Qs(Nr.s,Kn.s,t),a=Qs(Nr.l,Kn.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mi=new qe;qe.NAMES=Vh;kh=class Wh{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new qe(t),this.near=i,this.far=r}clone(){return new Wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xh=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qa,this.environmentIntensity=1,this.environmentRotation=new qa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ji=new O,vr=new O,so=new O,Mr=new O,ba=new O,wa=new O,Lc=new O,oo=new O,lo=new O,co=new O,ho=new Ot,uo=new Ot,po=new Ot,hn=class Ia{constructor(t=new O,i=new O,r=new O){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),ji.subVectors(t,i),a.cross(ji);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){ji.subVectors(a,i),vr.subVectors(r,i),so.subVectors(t,i);let s=ji.dot(ji),o=ji.dot(vr),l=ji.dot(so),c=vr.dot(vr),h=vr.dot(so),d=s*c-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,m=(c*l-o*h)*u,M=(s*h-o*l)*u;return n.set(1-m-M,M,m)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Mr.x),l.addScaledVector(s,Mr.y),l.addScaledVector(o,Mr.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return ho.setScalar(0),uo.setScalar(0),po.setScalar(0),ho.fromBufferAttribute(t,i),uo.fromBufferAttribute(t,r),po.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ho,n.x),s.addScaledVector(uo,n.y),s.addScaledVector(po,n.z),s}static isFrontFacing(t,i,r,a){return ji.subVectors(r,i),vr.subVectors(t,i),ji.cross(vr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),ji.cross(vr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ia.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ia.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return Ia.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return Ia.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ia.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;ba.subVectors(a,r),wa.subVectors(n,r),oo.subVectors(t,r);let l=ba.dot(oo),c=wa.dot(oo);if(l<=0&&c<=0)return i.copy(r);lo.subVectors(t,a);let h=ba.dot(lo),d=wa.dot(lo);if(h>=0&&d<=h)return i.copy(a);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(ba,s);co.subVectors(t,n);let m=ba.dot(co),M=wa.dot(co);if(M>=0&&m<=M)return i.copy(n);let S=m*c-l*M;if(S<=0&&c>=0&&M<=0)return o=c/(c-M),i.copy(r).addScaledVector(wa,o);let g=h*M-m*d;if(g<=0&&d-h>=0&&m-M>=0)return Lc.subVectors(n,a),o=(d-h)/(d-h+(m-M)),i.copy(a).addScaledVector(Lc,o);let p=1/(g+S+u);return s=S*p,o=u*p,i.copy(r).addScaledVector(ba,s).addScaledVector(wa,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ca=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,qi):qi.fromBufferAttribute(a,n),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zn.copy(i.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(un),Jn.subVectors(this.max,un),Ta.subVectors(e.a,un),Aa.subVectors(e.b,un),Ra.subVectors(e.c,un),Dr.subVectors(Aa,Ta),Ur.subVectors(Ra,Aa),$r.subVectors(Ta,Ra);let t=[0,-Dr.z,Dr.y,0,-Ur.z,Ur.y,0,-$r.z,$r.y,Dr.z,0,-Dr.x,Ur.z,0,-Ur.x,$r.z,0,-$r.x,-Dr.y,Dr.x,0,-Ur.y,Ur.x,0,-$r.y,$r.x,0];return!fo(t,Ta,Aa,Ra,Jn)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,Ta,Aa,Ra,Jn))?!1:(Qn.crossVectors(Dr,Ur),t=[Qn.x,Qn.y,Qn.z],fo(t,Ta,Aa,Ra,Jn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sr=[new O,new O,new O,new O,new O,new O,new O,new O],qi=new O,Zn=new ca,Ta=new O,Aa=new O,Ra=new O,Dr=new O,Ur=new O,$r=new O,un=new O,Jn=new O,Qn=new O,ea=new O;Gt=new O,$n=new Ge,fp=0,Hr=class extends oa{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xd,this.updateRanges=[],this.gpuType=Yi,this.version=0,this._normalizationScale=e!==void 0?wl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXY(t,$n.x,$n.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):$d(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ep(e,this.array)}},jh=class extends Hr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},qh=class extends Hr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},At=class extends Hr{constructor(e,t,i){super(new Float32Array(e),t,i)}},mp=new ca,dn=new O,mo=new O,Rn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):mp.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dn.subVectors(e,this.center);let t=dn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(dn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dn.copy(e.center).add(mo)),this.expandByPoint(dn.copy(e.center).sub(mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gp=0,Bi=new wt,go=new _i,Ca=new O,Ni=new ca,pn=new ca,Qt=new O,Ji=class Yh extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jd(t)?qh:jh)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new Ze().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,i,r){return Bi.makeTranslation(t,i,r),this.applyMatrix4(Bi),this}scale(t,i,r){return Bi.makeScale(t,i,r),this.applyMatrix4(Bi),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new At(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];Ni.setFromBufferAttribute(n),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let r=this.boundingSphere.center;if(Ni.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Ni.min,pn.min),Ni.expandByPoint(Qt),Qt.addVectors(Ni.max,pn.max),Ni.expandByPoint(Qt)):(Ni.expandByPoint(pn.min),Ni.expandByPoint(pn.max))}Ni.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Qt.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Qt));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qt.fromBufferAttribute(o,c),l&&(Ca.fromBufferAttribute(t,c),Qt.add(Ca)),a=Math.max(a,r.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Hr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],c=new Uint8Array(r.count);for(let P=0;P<r.count;P++)o[P]=new O,l[P]=new O;let h=new O,d=new O,u=new O,m=new Ge,M=new Ge,S=new Ge,g=new O,p=new O;function w(P,R,U){c[P]=c[R]=c[U]=1,h.fromBufferAttribute(r,P),d.fromBufferAttribute(r,R),u.fromBufferAttribute(r,U),m.fromBufferAttribute(n,P),M.fromBufferAttribute(n,R),S.fromBufferAttribute(n,U),d.sub(h),u.sub(h),M.sub(m),S.sub(m);let H=1/(M.x*S.y-S.x*M.y);isFinite(H)&&(g.copy(d).multiplyScalar(S.y).addScaledVector(u,-M.y).multiplyScalar(H),p.copy(u).multiplyScalar(M.x).addScaledVector(d,-S.x).multiplyScalar(H),o[P].add(g),o[R].add(g),o[U].add(g),l[P].add(p),l[R].add(p),l[U].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let P=0,R=A.length;P<R;++P){let U=A[P],H=U.start,Z=U.count;for(let D=H,z=H+Z;D<z;D+=3)w(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new O,T=new O,C=new O,f=new O;function x(P){C.fromBufferAttribute(a,P),f.copy(C);let R=o[P];y.copy(R),y.sub(C.multiplyScalar(C.dot(R))).normalize(),T.crossVectors(f,R);let U=T.dot(l[P])<0?-1:1;s.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,R=r.count;P<R;++P)c[P]&&x(P);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Hr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,m=r.count;u<m;u++)r.setXYZ(u,0,0,0);let a=new O,n=new O,s=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,m=t.count;u<m;u+=3){let M=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(i,M),n.fromBufferAttribute(i,S),s.fromBufferAttribute(i,g),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),o.fromBufferAttribute(r,M),l.fromBufferAttribute(r,S),c.fromBufferAttribute(r,g),o.add(h),l.add(h),c.add(h),r.setXYZ(M,o.x,o.y,o.z),r.setXYZ(S,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=i.count;u<m;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Qt.fromBufferAttribute(t,i),Qt.normalize(),t.setXYZ(i,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),m=0,M=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let p=0;p<h;p++)u[M++]=c[m++]}return new Hr(u,h,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Yh,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=t(u,r);l.push(m)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],d=n[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_o=new O,_p=new O,vp=new Ze,Or=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=_o.subVectors(i,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(_o),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||vp.getNormalMatrix(e),r=this.coplanarPoint(_o).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Mp=0,Cn=class extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Mn,this.side=aa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=xh,this.blendEquation=Ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){ke(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Or().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ge().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xr=new O,vo=new O,es=new O,ts=new O,Kh=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vo.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(vo);let a=e.distanceTo(t)*.5,n=-this.direction.dot(es),s=ts.dot(this.direction),o=-ts.dot(es),l=ts.lengthSq(),c=Math.abs(1-n*n),h,d,u,m;if(c>0)if(h=n*o-s,d=n*s-o,m=a*c,h>=0)if(d>=-m)if(d<=m){let M=1/c;h*=M,d*=M,u=h*(h+n*d+2*s)+d*(n*h+d+2*o)+l}else d=a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d=-a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d<=-m?(h=Math.max(0,-(-n*a+s)),d=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l):d<=m?(h=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(h=Math.max(0,-(n*a+s)),d=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l);else d=n>0?-a:a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(vo).addScaledVector(es,d),u}intersectSphere(e,t){if(e.radius<0)return null;xr.subVectors(e.center,this.origin);let i=xr.dot(this.direction),r=xr.dot(xr)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),c>=0?(a=(e.min.y-d.y)*c,n=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,n=(e.min.y-d.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,d=e.y-n.y,u=e.z-n.z,m=t.x-n.x,M=t.y-n.y,S=t.z-n.z,g=i.x-n.x,p=i.y-n.y,w=i.z-n.z,A=Math.abs(o),y=Math.abs(l),T=Math.abs(c),C,f,x,P,R,U,H,Z,D,z,$,X;if(A>=y&&A>=T?(x=o,U=h,D=m,X=g,o>=0?(C=l,f=c,P=d,R=u,H=M,Z=S,z=p,$=w):(C=c,f=l,P=u,R=d,H=S,Z=M,z=w,$=p)):y>=T?(x=l,U=d,D=M,X=p,l>=0?(C=c,f=o,P=u,R=h,H=S,Z=m,z=w,$=g):(C=o,f=c,P=h,R=u,H=m,Z=S,z=g,$=w)):(x=c,U=u,D=S,X=w,c>=0?(C=o,f=l,P=h,R=d,H=m,Z=M,z=g,$=p):(C=l,f=o,P=d,R=h,H=M,Z=m,z=p,$=g)),x===0)return null;let me=C/x,K=f/x,Y=1/x,oe=P-me*U,Ue=R-K*U,J=H-me*D,se=Z-K*D,Ae=z-me*X,De=$-K*X,Oe=Ae*se-De*J,ge=oe*De-Ue*Ae,Ke=J*Ue-se*oe;if(r){if(Oe<0||ge<0||Ke<0)return null}else if((Oe<0||ge<0||Ke<0)&&(Oe>0||ge>0||Ke>0))return null;let et=Oe+ge+Ke;if(et===0)return null;let Fe=Y*(Oe*U+ge*D+Ke*X);return(et>0?Fe<0:Fe>0)?null:this.at(Fe/et,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rl=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Nc=new wt,ta=new Kh,is=new Rn,Dc=new O,rs=new O,as=new O,ns=new O,Mo=new O,ss=new O,Uc=new O,os=new O,Je=class extends _i{constructor(e=new Ji,t=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){ss.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(Mo.fromBufferAttribute(h,e),n?ss.addScaledVector(Mo,c):ss.addScaledVector(Mo.sub(t),c))}t.add(ss)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),is.copy(i.boundingSphere),is.applyMatrix4(a),ta.copy(e.ray).recast(e.near),!(is.containsPoint(ta.origin)===!1&&(ta.intersectSphere(is,Dc)===null||ta.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Nc.copy(a).invert(),ta.copy(e.ray).applyMatrix4(Nc),!(i.boundingBox!==null&&ta.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ta)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let m=0,M=d.length;m<M;m++){let S=d[m],g=n[S.materialIndex],p=Math.max(S.start,u.start),w=Math.min(s.count,Math.min(S.start+S.count,u.start+u.count));for(let A=p,y=w;A<y;A+=3){let T=s.getX(A),C=s.getX(A+1),f=s.getX(A+2);r=ls(this,g,e,i,l,c,h,T,C,f),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),M=Math.min(s.count,u.start+u.count);for(let S=m,g=M;S<g;S+=3){let p=s.getX(S),w=s.getX(S+1),A=s.getX(S+2);r=ls(this,n,e,i,l,c,h,p,w,A),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let m=0,M=d.length;m<M;m++){let S=d[m],g=n[S.materialIndex],p=Math.max(S.start,u.start),w=Math.min(o.count,Math.min(S.start+S.count,u.start+u.count));for(let A=p,y=w;A<y;A+=3){let T=A,C=A+1,f=A+2;r=ls(this,g,e,i,l,c,h,T,C,f),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=S.materialIndex,t.push(r))}}else{let m=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let S=m,g=M;S<g;S+=3){let p=S,w=S+1,A=S+2;r=ls(this,n,e,i,l,c,h,p,w,A),r&&(r.faceIndex=Math.floor(S/3),t.push(r))}}}};Zh=class extends Zi{constructor(e=null,t=1,i=1,r,a,n,s,o,l=li,c=li,h,d){super(null,n,s,o,l,c,r,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ic=class extends Hr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pa=new wt,Oc=new wt,cs=[],Fc=new ca,xp=new wt,fn=new Je,mn=new Rn,Vr=class extends Je{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ic(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,xp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ca),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),Fc.copy(e.boundingBox).applyMatrix4(Pa),this.boundingBox.union(Fc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Pa),mn.copy(e.boundingSphere).applyMatrix4(Pa),this.boundingSphere.union(mn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(fn.geometry=this.geometry,fn.material=this.material,fn.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mn.copy(this.boundingSphere),mn.applyMatrix4(i),e.ray.intersectsSphere(mn)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Pa),Oc.multiplyMatrices(i,Pa),fn.matrixWorld=Oc,fn.raycast(e,cs);for(let n=0,s=cs.length;n<s;n++){let o=cs[n];o.instanceId=a,o.object=this,t.push(o)}cs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zh(new Float32Array(r*this.count),r,this.count,xl,Yi));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ia=new Rn,yp=new Ge(.5,.5),hs=new O,Tn=class{constructor(e=new Or,t=new Or,i=new Or,r=new Or,a=new Or,n=new Or){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],u=a[7],m=a[8],M=a[9],S=a[10],g=a[11],p=a[12],w=a[13],A=a[14],y=a[15];if(r[0].setComponents(l-n,u-c,g-m,y-p).normalize(),r[1].setComponents(l+n,u+c,g+m,y+p).normalize(),r[2].setComponents(l+s,u+h,g+M,y+w).normalize(),r[3].setComponents(l-s,u-h,g-M,y-w).normalize(),i)r[4].setComponents(o,d,S,A).normalize(),r[5].setComponents(l-o,u-d,g-S,y-A).normalize();else if(r[4].setComponents(l-o,u-d,g-S,y-A).normalize(),t===Ki)r[5].setComponents(l+o,u+d,g+S,y+A).normalize();else if(t===wn)r[5].setComponents(o,d,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ia.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ia.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ia)}intersectsSprite(e){ia.center.set(0,0,0);let t=yp.distanceTo(e.center);return ia.radius=.7071067811865476+t,ia.applyMatrix4(e.matrixWorld),this.intersectsSphere(ia)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(hs.x=r.normal.x>0?e.max.x:e.min.x,hs.y=r.normal.y>0?e.max.y:e.min.y,hs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(hs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Bc=new wt,Ep=class Jh{constructor(){this.coordinateSystem=Ki,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Tn),r[a].setFromProjectionMatrix(Bc,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Tn),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Jh().copy(this)}},Qh=class extends Zi{constructor(e=[],t=Wa,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ya=class extends Zi{constructor(e,t,i=cr,r,a,n,s=li,o=li,l,c=Gr,h=1){if(c!==Gr&&c!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$h=class extends Ya{constructor(e,t=cr,i=Wa,r,a,n=li,s=li,o,l=Gr){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},eu=class extends Zi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ii=class tu extends Ji{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=0,m=0;M("z","y","x",-1,-1,r,i,t,s,n,0),M("z","y","x",1,-1,r,i,-t,s,n,1),M("x","z","y",1,1,t,r,i,a,s,2),M("x","z","y",1,-1,t,r,-i,a,s,3),M("x","y","z",1,-1,t,i,r,a,n,4),M("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function M(S,g,p,w,A,y,T,C,f,x,P){let R=y/f,U=T/x,H=y/2,Z=T/2,D=C/2,z=f+1,$=x+1,X=0,me=0,K=new O;for(let Y=0;Y<$;Y++){let oe=Y*U-Z;for(let Ue=0;Ue<z;Ue++){let J=Ue*R-H;K[S]=J*w,K[g]=oe*A,K[p]=D,c.push(K.x,K.y,K.z),K[S]=0,K[g]=0,K[p]=C>0?1:-1,h.push(K.x,K.y,K.z),d.push(Ue/f),d.push(1-Y/x),X+=1}}for(let Y=0;Y<x;Y++)for(let oe=0;oe<f;oe++){let Ue=u+oe+z*Y,J=u+oe+z*(Y+1),se=u+(oe+1)+z*(Y+1),Ae=u+(oe+1)+z*Y;l.push(Ue,J,Ae),l.push(J,se,Ae),me+=6}o.addGroup(m,me,P),m+=me,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ha=class iu extends Ji{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],c=new O,h=new Ge;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let m=r+d/i*a;c.x=t*Math.cos(m),c.y=t*Math.sin(m),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new At(s,3)),this.setAttribute("normal",new At(o,3)),this.setAttribute("uv",new At(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new iu(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ci=class ru extends Ji{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],d=[],u=[],m=[],M=0,S=[],g=r/2,p=0;w(),s===!1&&(t>0&&A(!0),i>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(m,2));function w(){let y=new O,T=new O,C=0,f=(i-t)/r;for(let x=0;x<=n;x++){let P=[],R=x/n,U=R*(i-t)+t;for(let H=0;H<=a;H++){let Z=H/a,D=Z*l+o,z=Math.sin(D),$=Math.cos(D);T.x=U*z,T.y=-R*r+g,T.z=U*$,d.push(T.x,T.y,T.z),y.set(z,f,$).normalize(),u.push(y.x,y.y,y.z),m.push(Z,1-R),P.push(M++)}S.push(P)}for(let x=0;x<a;x++)for(let P=0;P<n;P++){let R=S[P][x],U=S[P+1][x],H=S[P+1][x+1],Z=S[P][x+1];(t>0||P!==0)&&(h.push(R,U,Z),C+=3),(i>0||P!==n-1)&&(h.push(U,H,Z),C+=3)}c.addGroup(p,C,0),p+=C}function A(y){let T=M,C=new Ge,f=new O,x=0,P=y===!0?t:i,R=y===!0?1:-1;for(let H=1;H<=a;H++)d.push(0,g*R,0),u.push(0,R,0),m.push(.5,.5),M++;let U=M;for(let H=0;H<=a;H++){let Z=H/a*l+o,D=Math.cos(Z),z=Math.sin(Z);f.x=P*z,f.y=g*R,f.z=P*D,d.push(f.x,f.y,f.z),u.push(0,R,0),C.x=D*.5+.5,C.y=z*.5*R+.5,m.push(C.x,C.y),M++}for(let H=0;H<a;H++){let Z=T+H,D=U+H;y===!0?h.push(D,D+1,Z):h.push(D+1,D,Z),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ru(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cl=class au extends ci{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new au(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Tr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let c=i[r],h=i[r+1]-c,d=(n-c)/h;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new Ge:new O);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new O,r=[],a=[],n=[],s=new O,o=new wt;for(let u=0;u<=e;u++){let m=u/e;r[u]=this.getTangentAt(m,new O)}a[0]=new O,n[0]=new O;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let m=Math.acos(lt(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,m))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(lt(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let m=1;m<=e;m++)a[m].applyMatrix4(o.makeRotationAxis(r[m],u*m)),n[m].crossVectors(r[m],a[m])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},nu=class extends Tr{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new Ge){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bp=class extends nu{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};zc=new O,Hc=new O,So=new Pl,xo=new Pl,yo=new Pl,Ns=class extends Tr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new O){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,c;this.closed||s>0?l=r[(s-1)%a]:(Hc.subVectors(r[0],r[1]).add(r[0]),l=Hc);let h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?c=r[(s+2)%a]:(zc.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=zc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),u),M=Math.pow(h.distanceToSquared(d),u),S=Math.pow(d.distanceToSquared(c),u);M<1e-4&&(M=1),m<1e-4&&(m=M),S<1e-4&&(S=M),So.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,m,M,S),xo.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,m,M,S),yo.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,m,M,S)}else this.curveType==="catmullrom"&&(So.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),xo.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),yo.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(So.calc(o),xo.calc(o),yo.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Np=class extends Tr{constructor(e=new Ge,t=new Ge,i=new Ge,r=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ge){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(xn(e,r.x,a.x,n.x,s.x),xn(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Dp=class extends Tr{constructor(e=new O,t=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new O){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(xn(e,r.x,a.x,n.x,s.x),xn(e,r.y,a.y,n.y,s.y),xn(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Up=class extends Tr{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ip=class extends Tr{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Op=class extends Tr{constructor(e=new Ge,t=new Ge,i=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ge){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Sn(e,r.x,a.x,n.x),Sn(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},su=class extends Tr{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(Sn(e,r.x,a.x,n.x),Sn(e,r.y,a.y,n.y),Sn(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fp=class extends Tr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],c=r[n>r.length-2?r.length-1:n+1],h=r[n>r.length-3?r.length-1:n+2];return i.set(Gc(s,o.x,l.x,c.x,h.x),Gc(s,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new Ge().fromArray(r))}return this}},Bp=Object.freeze({__proto__:null,ArcCurve:bp,CatmullRomCurve3:Ns,CubicBezierCurve:Np,CubicBezierCurve3:Dp,EllipseCurve:nu,LineCurve:Up,LineCurve3:Ip,QuadraticBezierCurve:Op,QuadraticBezierCurve3:su,SplineCurve:Fp}),ua=class ou extends Ji{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=i/l,m=[],M=[],S=[],g=[];for(let p=0;p<h;p++){let w=p*u-s;for(let A=0;A<c;A++){let y=A*d-n;M.push(y,-w,0),S.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let A=w+c*p,y=w+c*(p+1),T=w+1+c*(p+1),C=w+1+c*p;m.push(A,y,C),m.push(y,T,C)}this.setIndex(m),this.setAttribute("position",new At(M,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}},Pn=class lu extends Ji{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],d=new O,u=new O,m=[],M=[],S=[],g=[];for(let p=0;p<=r;p++){let w=[],A=p/r,y=s+A*o,T=t*Math.cos(y),C=Math.sqrt(t*t-T*T),f=0;p===0&&s===0?f=.5/i:p===r&&l===Math.PI&&(f=-.5/i);for(let x=0;x<=i;x++){let P=x/i,R=a+P*n;d.x=-C*Math.cos(R),d.y=T,d.z=C*Math.sin(R),M.push(d.x,d.y,d.z),u.copy(d).normalize(),S.push(u.x,u.y,u.z),g.push(P+f,1-A),w.push(c++)}h.push(w)}for(let p=0;p<r;p++)for(let w=0;w<i;w++){let A=h[p][w+1],y=h[p][w],T=h[p+1][w],C=h[p+1][w+1];(p!==0||s>0)&&m.push(A,y,C),(p!==r-1||l<Math.PI)&&m.push(y,T,C)}this.setIndex(m),this.setAttribute("position",new At(M,3)),this.setAttribute("normal",new At(S,3)),this.setAttribute("uv",new At(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ll=class cu extends Ji{constructor(t=new su(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new O,l=new O,c=new Ge,h=new O,d=[],u=[],m=[],M=[];S(),this.setIndex(M),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(m,2));function S(){for(let A=0;A<i;A++)g(A);g(n===!1?i:0),w(),p()}function g(A){h=t.getPointAt(A/i,h);let y=s.normals[A],T=s.binormals[A];for(let C=0;C<=a;C++){let f=C/a*Math.PI*2,x=Math.sin(f),P=-Math.cos(f);l.x=P*y.x+x*T.x,l.y=P*y.y+x*T.y,l.z=P*y.z+x*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=i;A++)for(let y=1;y<=a;y++){let T=(a+1)*(A-1)+(y-1),C=(a+1)*A+(y-1),f=(a+1)*A+y,x=(a+1)*(A-1)+y;M.push(T,C,x),M.push(C,f,x)}}function w(){for(let A=0;A<=i;A++)for(let y=0;y<=a;y++)c.x=A/i,c.y=y/a,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cu(new Bp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};Hp={clone:Ka,merge:Ei},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sa=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ka(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ot().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},kp=class extends sa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Nl=class extends Cn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qa,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wp=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xp=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ln=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},jp=class extends Ln{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case gc:a=e,s=2*t-i;break;case _c:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case gc:n=e,o=2*i-t;break;case _c:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(i-t)/(r-t),M=m*m,S=M*m,g=-d*S+2*d*M-d*m,p=(1+d)*S+(-1.5-2*d)*M+(-.5+d)*m+1,w=(-1-u)*S+(1.5+u)*M+.5*m,A=u*S-u*M;for(let y=0;y!==s;++y)a[y]=g*n[c+y]+p*n[l+y]+w*n[o+y]+A*n[h+y];return a}},qp=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let d=0;d!==s;++d)a[d]=n[l+d]*h+n[o+d]*c;return a}},Yp=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Kp=class extends Ln{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let m=(i-t)/(r-t),M=1-m;for(let S=0;S!==s;++S)a[S]=n[l+S]*M+n[o+S]*m;return a}let d=s*2,u=e-1;for(let m=0;m!==s;++m){let M=n[l+m],S=n[o+m],g=u*d+m*2,p=h[g],w=h[g+1],A=e*d+m*2,y=c[A],T=c[A+1],C=Jp(i,t,p,y,r);a[m]=uu(C,M,w,T,S)}return a}};ur=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),us(e.settings)&&(i.settings={inTangents:La(e.settings.inTangents,Array),outTangents:La(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Yp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Kp(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case ul:t=this.InterpolantFactoryMethodLinear;break;case Ks:t=this.InterpolantFactoryMethodSmooth;break;case fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ke("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return ul;case this.InterpolantFactoryMethodSmooth:return Ks;case this.InterpolantFactoryMethodBezier:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;us(this.settings)&&(kc(this.settings.inTangents,e),kc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;us(this.settings)&&(Wc(this.settings.inTangents,e),Wc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){je("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){je("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&qd(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ks,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,d=h-i,u=h+i;for(let m=0;m!==i;++m){let M=t[h+m];if(M!==t[d+m]||M!==t[u+m]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,us(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};ur.prototype.ValueTypeName="";ur.prototype.TimeBufferType=Float32Array;ur.prototype.ValueBufferType=Float32Array;ur.prototype.DefaultInterpolation=ul;Nn=class extends ur{constructor(e,t,i){super(e,t,i)}};Nn.prototype.ValueTypeName="bool";Nn.prototype.ValueBufferType=Array;Nn.prototype.DefaultInterpolation=Rs;Nn.prototype.InterpolantFactoryMethodLinear=void 0;Nn.prototype.InterpolantFactoryMethodSmooth=void 0;Qp=class extends ur{constructor(e,t,i,r){super(e,t,i,r)}};Qp.prototype.ValueTypeName="color";$p=class extends ur{constructor(e,t,i,r){super(e,t,i,r)}};$p.prototype.ValueTypeName="number";ef=class extends Ln{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)la.slerpFlat(a,0,n,l-s,n,l,o);return a}},du=class extends ur{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new ef(this.times,this.values,this.getValueSize(),e)}};du.prototype.ValueTypeName="quaternion";du.prototype.InterpolantFactoryMethodSmooth=void 0;Dn=class extends ur{constructor(e,t,i){super(e,t,i)}};Dn.prototype.ValueTypeName="string";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=Rs;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;tf=class extends ur{constructor(e,t,i,r){super(e,t,i,r)}};tf.prototype.ValueTypeName="vector";rf=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],m=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},af=new rf,nf=class{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};nf.DEFAULT_MATERIAL_NAME="__DEFAULT";Dl=class extends _i{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pu=class extends Dl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Eo=new wt,Xc=new O,jc=new O,fu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tn,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xc),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Eo,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===wn||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(Eo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ds=new O,ps=new la,ar=new O,mu=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ds,ps,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,ps,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ds,ps,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ds,ps,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ir=new O,qc=new Ge,Yc=new Ge,Di=class extends mu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Yc),t.subVectors(Yc,qc)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sf=class extends fu{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0}},Ul=class extends Dl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gu=class extends mu{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},of=class extends fu{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_u=class extends Dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new of}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Na=-90,Da=1,fl=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Di(Na,Da,e,t);r.layers=this.layers,this.add(r);let a=new Di(Na,Da,e,t);a.layers=this.layers,this.add(a);let n=new Di(Na,Da,e,t);n.layers=this.layers,this.add(n);let s=new Di(Na,Da,e,t);s.layers=this.layers,this.add(s);let o=new Di(Na,Da,e,t);o.layers=this.layers,this.add(o);let l=new Di(Na,Da,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===wn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=M,e.setRenderTarget(i,5,r),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},lf=class extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Il="\\[\\]\\.:\\/",cf=new RegExp("["+Il+"]","g"),Ol="[^"+Il+"]",hf="[^"+Il.replace("\\.","")+"]",uf=/((?:WC+[\/:])*)/.source.replace("WC",Ol),df=/(WCOD+)?/.source.replace("WCOD",hf),pf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),mf=new RegExp("^"+uf+df+pf+ff+"$"),gf=["material","materials","bones","map"],_f=class{constructor(e,t,i){let r=i||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Dt=class Oa{constructor(t,i,r){this.path=i,this.parsedPath=r||Oa.parseTrackName(i),this.node=Oa.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Oa.Composite(t,i,r):new Oa(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cf,"")}static parseTrackName(t){let i=mf.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);gf.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Oa.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=_f;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Bv=new Float32Array(1),Kc=new wt,vu=class{constructor(e,t,i=0,r=1/0){this.ray=new Kh(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(e,t=!0,i=[]){return ml(e,this,i,t),i.sort(Zc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)ml(e[r],this,i,t);return i.sort(Zc),i}};zv=(ka=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},ka.prototype.isMatrix2=!0,ka);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Df=`#ifdef USE_IRIDESCENCE
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
#endif`,Uf=`#ifdef USE_BUMPMAP
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
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kf=`#define PI 3.141592653589793
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
} // validated`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
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
#endif`,_m=`uniform sampler2D dfgLUT;
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
}`,vm=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`#ifdef USE_MORPHTARGETS
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
#endif`,Om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vm=`#ifdef USE_NORMALMAP
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
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform float backgroundBlurriness;
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Tg=`#if DEPTH_PACKING == 3200
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ig=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Gg=`#define PHONG
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
}`,Vg=`#define PHONG
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
}`,kg=`#define STANDARD
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define TOON
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
}`,jg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Sf,alphahash_pars_fragment:xf,alphamap_fragment:yf,alphamap_pars_fragment:Ef,alphatest_fragment:bf,alphatest_pars_fragment:wf,aomap_fragment:Tf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Lf,bsdfs:Nf,iridescence_fragment:Df,bumpmap_pars_fragment:Uf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:Hf,color_pars_vertex:Gf,color_vertex:Vf,common:kf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:jf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:Kf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:$f,envmap_pars_vertex:em,envmap_physical_pars_fragment:um,envmap_vertex:tm,fog_vertex:im,fog_pars_vertex:rm,fog_fragment:am,fog_pars_fragment:nm,gradientmap_pars_fragment:sm,lightmap_pars_fragment:om,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:hm,lights_toon_fragment:dm,lights_toon_pars_fragment:pm,lights_phong_fragment:fm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:_m,lights_fragment_begin:vm,lights_fragment_maps:Mm,lights_fragment_end:Sm,lightprobes_pars_fragment:xm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:bm,logdepthbuf_vertex:wm,map_fragment:Tm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Nm,morphcolor_vertex:Dm,morphnormal_vertex:Um,morphtarget_pars_vertex:Im,morphtarget_vertex:Om,normal_fragment_begin:Fm,normal_fragment_maps:Bm,normal_pars_fragment:zm,normal_pars_vertex:Hm,normal_vertex:Gm,normalmap_pars_fragment:Vm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:jm,opaque_fragment:qm,packing:Ym,premultiplied_alpha_fragment:Km,project_vertex:Zm,dithering_fragment:Jm,dithering_pars_fragment:Qm,roughnessmap_fragment:$m,roughnessmap_pars_fragment:eg,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:ig,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:ng,skinning_pars_vertex:sg,skinning_vertex:og,skinnormal_vertex:lg,specularmap_fragment:cg,specularmap_pars_fragment:hg,tonemapping_fragment:ug,tonemapping_pars_fragment:dg,transmission_fragment:pg,transmission_pars_fragment:fg,uv_pars_fragment:mg,uv_pars_vertex:gg,uv_vertex:_g,worldpos_vertex:vg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:xg,backgroundCube_frag:yg,cube_vert:Eg,cube_frag:bg,depth_vert:wg,depth_frag:Tg,distance_vert:Ag,distance_frag:Rg,equirect_vert:Cg,equirect_frag:Pg,linedashed_vert:Lg,linedashed_frag:Ng,meshbasic_vert:Dg,meshbasic_frag:Ug,meshlambert_vert:Ig,meshlambert_frag:Og,meshmatcap_vert:Fg,meshmatcap_frag:Bg,meshnormal_vert:zg,meshnormal_frag:Hg,meshphong_vert:Gg,meshphong_frag:Vg,meshphysical_vert:kg,meshphysical_frag:Wg,meshtoon_vert:Xg,meshtoon_frag:jg,points_vert:qg,points_frag:Yg,shadow_vert:Kg,shadow_frag:Zg,sprite_vert:Jg,sprite_frag:Qg},xe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},sr={basic:{uniforms:Ei([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ei([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ei([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ei([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ei([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ei([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ei([xe.points,xe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ei([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ei([xe.common,xe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ei([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ei([xe.sprite,xe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Ei([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Ei([xe.lights,xe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};sr.physical={uniforms:Ei([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};fs={r:0,b:0,g:0},$g=new wt,Su=new Ze;Su.set(-1,0,0,0,1,0,0,0,1);Fl=class extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ii(5,5,5),a=new sa({name:"CubemapFromEquirect",uniforms:Ka(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ai,blending:Fa});a.uniforms.tEquirect.value=t;let n=new Je(r,a),s=t.minFilter;return t.minFilter===Br&&(t.minFilter=Ti),new fl(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},Qc=256,n0=3,s0=20,xu=256,yu=16,o0=3,l0=new O,c0=new qe,$c=class Eu{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fl(1,10,null),this._boxMesh=new Je(new Ii(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=l0}=n,l=this._renderer;this._setSize(s);let c=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,M=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(c0));let g=new fl(r,a,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=M,t.background=S,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,i)),this._applyPMREM(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Qc,Qd(t))}_fromTexture(t,i){t.mapping===Wa||t.mapping===En?this._setSize(t.image.length===0?Qc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=eh(t,!1,!1),r=Math.log2(t)-n0;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=eh(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===Wa||t.mapping===En?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=th()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=h0(),this._integrationMaterial=u0());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/yu);for(let s=0;s<=r;s++){let o=Eu.lodToRoughness(s,r);if(s>r-o0)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(xu*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=d0());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};S0={[yh]:"LINEAR_TONE_MAPPING",[Eh]:"REINHARD_TONE_MAPPING",[bh]:"CINEON_TONE_MAPPING",[wh]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[Th]:"CUSTOM_TONE_MAPPING"};bu=new Zi,wu=new Ya(1,1),Tu=new $h(1),Au=new Hh,Ru=new sp,Cu=new Qh,rh=[],ah=[],nh=new Float32Array(16),sh=new Float32Array(9),oh=new Float32Array(4);l_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=G0(t.type)}},c_=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o_(t.type)}},h_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},bo=/(\w+)(\])?(\[|\.)?/g;bs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);u_(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};d_=37297,p_=0;hh=new Ze;__={[yh]:"Linear",[Eh]:"Reinhard",[bh]:"Cineon",[wh]:"ACESFilmic",[Ah]:"AgX",[Rh]:"Neutral",[Th]:"Custom"};ms=new O;E_=/^[ \t]*#include +<([\w\d./]+)>/gm;w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;A_={[gs]:"SHADOWMAP_TYPE_PCF",[_n]:"SHADOWMAP_TYPE_VSM"};C_={[En]:"ENVMAP_MODE_REFRACTION"};L_={[_l]:"ENVMAP_BLENDING_MULTIPLY",[Ud]:"ENVMAP_BLENDING_MIX",[Id]:"ENVMAP_BLENDING_ADD"};U_=0,I_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new O_(e),t.set(e,i)),i}},O_=class{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}};W_=0;Y_=`void main() {
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
}`,Z_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],J_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Mh=new wt,gn=new O,wo=new O;iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,av=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new eu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new sa({vertexShader:iv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nv=class extends oa{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,m=null,M=typeof XRWebGLBinding<"u",S=new av,g={},p=t.getContextAttributes(),w=null,A=null,y=[],T=[],C=new Ge,f=null,x=null,P=new Di;P.viewport=new Ot;let R=new Di;R.viewport=new Ot;let U=[P,R],H=new lf,Z=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=y[J];return se===void 0&&(se=new ao,y[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=y[J];return se===void 0&&(se=new ao,y[J]=se),se.getGripSpace()},this.getHand=function(J){let se=y[J];return se===void 0&&(se=new ao,y[J]=se),se.getHandSpace()};function z(J){let se=T.indexOf(J.inputSource);if(se===-1)return;let Ae=y[se];Ae!==void 0&&(Ae.update(J.inputSource,J.frame,l||n),Ae.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",X);for(let J=0;J<y.length;J++){let se=T[J];se!==null&&(T[J]=null,y[J].disconnect(se))}Z=null,D=null,S.reset();for(let J in g)delete g[J];if(e.setRenderTarget(w),u=null,d=null,h=null,r=null,A=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(f),e.setSize(C.width,C.height,!1),x!==null){let J=x.camera;J.fov=x.fov,J.zoom=x.zoom,J.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){s=J,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await t.makeXRCompatible(),f=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Ae=null,De=null;p.depth&&(De=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?zr:Gr,Ae=p.stencil?Xa:cr);let Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new lr(d.textureWidth,d.textureHeight,{format:or,type:Ui,depthTexture:new Ya(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),A=new lr(u.framebufferWidth,u.framebufferHeight,{format:or,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(J){for(let se=0;se<J.removed.length;se++){let Ae=J.removed[se],De=T.indexOf(Ae);De>=0&&(T[De]=null,y[De].disconnect(Ae))}for(let se=0;se<J.added.length;se++){let Ae=J.added[se],De=T.indexOf(Ae);if(De===-1){for(let ge=0;ge<y.length;ge++)if(ge>=T.length){T.push(Ae),De=ge;break}else if(T[ge]===null){T[ge]=Ae,De=ge;break}if(De===-1)break}let Oe=y[De];Oe&&Oe.connect(Ae)}}function me(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let se=J.near,Ae=J.far;S.texture!==null&&(S.depthNear>0&&(se=S.depthNear),S.depthFar>0&&(Ae=S.depthFar)),H.near=R.near=P.near=se,H.far=R.far=P.far=Ae,(Z!==H.near||D!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),Z=H.near,D=H.far),H.layers.mask=J.layers.mask|6,P.layers.mask=H.layers.mask&-5,R.layers.mask=H.layers.mask&-3;let De=J.parent,Oe=H.cameras;me(H,De);for(let ge=0;ge<Oe.length;ge++)me(Oe[ge],De);H.projectionMatrix.copy(P.projectionMatrix),H.projectionMatrixInverse.copy(P.projectionMatrixInverse),x===null&&J.isPerspectiveCamera&&(x={camera:J,fov:J.fov,zoom:J.zoom}),K(J,H,De)};function K(J,se,Ae){Ae===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(Ae.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(J){o=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(H)},this.getCameraTexture=function(J){return g[J]};let Y=null;function oe(J,se){if(c=se.getViewerPose(l||n),m=se,c!==null){let Ae=c.views;u!==null&&(e.setRenderTargetFramebuffer(A,u.framebuffer),e.setRenderTarget(A));let De=!1;Ae.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let ge=0;ge<Ae.length;ge++){let Ke=Ae[ge],et=null;if(u!==null)et=u.getViewport(Ke);else{let Rt=h.getViewSubImage(d,Ke);et=Rt.viewport,ge===0&&(e.setRenderTargetTextures(A,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(A))}let Fe=U[ge];Fe===void 0&&(Fe=new Di,Fe.layers.enable(ge),Fe.viewport=new Ot,U[ge]=Fe),Fe.matrix.fromArray(Ke.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ke.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(et.x,et.y,et.width,et.height),ge===0&&(H.matrix.copy(Fe.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(Fe)}let Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();let ge=h.getDepthInformation(Ae[0]);ge&&ge.isValid&&ge.texture&&S.init(ge,r.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let ge=0;ge<Ae.length;ge++){let Ke=Ae[ge].camera;if(Ke){let et=g[Ke];et||(et=new eu,g[Ke]=et);let Fe=h.getCameraImage(Ke);et.sourceTexture=Fe}}}}for(let Ae=0;Ae<y.length;Ae++){let De=T[Ae],Oe=y[Ae];De!==null&&Oe!==void 0&&Oe.update(De,se,l||n)}Y&&Y(J,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}let Ue=new Mu;Ue.setAnimationLoop(oe),this.setAnimationLoop=function(J){Y=J},this.dispose=function(){}}},sv=new wt,Pu=new Ze;Pu.set(-1,0,0,0,1,0,0,0,1);cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nr=null;Lu=class{constructor(e={}){let{canvas:t=Yd(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Ui}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=n;let M=u,S=new Set([bl,El,yl]),g=new Set([Ui,cr,bn,Xa,Ml,Sl]),p=new Uint32Array(4),w=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},y=null,T=null,C=[],f=[],x=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,U=null,H=null,Z=null,D=null;this._outputColorSpace=zi;let z=0,$=0,X=null,me=-1,K=null,Y=new Ot,oe=new Ot,Ue=null,J=new qe(0),se=0,Ae=t.width,De=t.height,Oe=1,ge=null,Ke=null,et=new Ot(0,0,Ae,De),Fe=new Ot(0,0,Ae,De),Rt=!1,Ht=new Tn,_t=new Ep,xt=!1,ai=!1,ni=new wt,Ct=new O,Jt=new Ot,ui={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},si=!1;function Si(){return X===null?Oe:1}let F=i;function xi(v,N){return t.getContext(v,N)}let pt,Lt,Me,vt,Ie,ze,Ut,b,_,k,ae,Q,he,fe,I,ee,Se,L,q,re,le,_e,de;try{let v={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",st,!1),F===null){let N="webgl2";if(F=xi(N,v),F===null)throw xi(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(v){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",st,!1),je("WebGLRenderer: "+v.message),v}function Pe(){pt=new f0(F),pt.init(),le=new tv(F,pt),Lt=new r0(F,pt,e,le),Me=new $_(F,pt),Lt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),H=F.createFramebuffer(),Z=F.createFramebuffer(),D=F.createFramebuffer(),vt=new _0(F),Ie=new z_,ze=new ev(F,pt,Me,Ie,Lt,le,vt),Ut=new p0(P),b=new Mf(F),_e=new t0(F,b),_=new m0(F,b,vt,_e),k=new M0(F,_,b,_e,vt),L=new v0(F,Lt,ze),I=new a0(Ie),ae=new B_(P,Ut,pt,Lt,_e,I),Q=new ov(P,Ie),he=new G_,fe=new q_(pt),Se=new e0(P,Ut,Me,k,m,o),ee=new Q_(P,k,Lt),de=new lv(F,vt,Lt,Me),q=new i0(F,pt,vt),re=new g0(F,pt,vt),vt.programs=ae.programs,P.capabilities=Lt,P.extensions=pt,P.properties=Ie,P.renderLists=he,P.shadowMap=ee,P.state=Me,P.info=vt}M!==Ui&&(x=new x0(M,t.width,t.height,s,r,a));let ie=new nv(P,F);this.xr=ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let v=pt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=pt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(v){v!==void 0&&(Oe=v,this.setSize(Ae,De,!1))},this.getSize=function(v){return v.set(Ae,De)},this.setSize=function(v,N,j=!0){if(ie.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=v,De=N,t.width=Math.floor(v*Oe),t.height=Math.floor(N*Oe),j===!0&&(t.style.width=v+"px",t.style.height=N+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Ae*Oe,De*Oe).floor()},this.setDrawingBufferSize=function(v,N,j){Ae=v,De=N,Oe=j,t.width=Math.floor(v*j),t.height=Math.floor(N*j),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(M===Ui){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Y)},this.getViewport=function(v){return v.copy(et)},this.setViewport=function(v,N,j,W){v.isVector4?et.set(v.x,v.y,v.z,v.w):et.set(v,N,j,W),Me.viewport(Y.copy(et).multiplyScalar(Si()).round())},this.getScissor=function(v){return v.copy(Fe)},this.setScissor=function(v,N,j,W){v.isVector4?Fe.set(v.x,v.y,v.z,v.w):Fe.set(v,N,j,W),Me.scissor(oe.copy(Fe).multiplyScalar(Si()).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(v){Me.setScissorTest(Rt=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){Ke=v},this.getClearColor=function(v){return v.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,j=!0){let W=0;if(v){let G=!1;if(X!==null){let ce=X.texture.format;G=S.has(ce)}if(G){let ce=X.texture.type,ve=g.has(ce),pe=Se.getClearColor(),be=Se.getClearAlpha(),Ne=pe.r,Qe=pe.g,ot=pe.b;ve?(p[0]=Ne,p[1]=Qe,p[2]=ot,p[3]=be,F.clearBufferuiv(F.COLOR,0,p)):(w[0]=Ne,w[1]=Qe,w[2]=ot,w[3]=be,F.clearBufferiv(F.COLOR,0,w))}else W|=F.COLOR_BUFFER_BIT}N&&(W|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",st,!1),Se.dispose(),he.dispose(),fe.dispose(),ze.dispose(),Ie.dispose(),Ut.dispose(),k.dispose(),_.dispose(),_e.dispose(),de.dispose(),ae.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",fa),ie.removeEventListener("sessionend",ma),tr.stop()};function Xe(v){v.preventDefault(),Sc("WebGLRenderer: Context Lost."),R=!0}function Ve(){Sc("WebGLRenderer: Context Restored."),R=!1;let v=vt.autoReset,N=ee.enabled,j=ee.autoUpdate,W=ee.needsUpdate,G=ee.type;Pe(),vt.autoReset=v,ee.enabled=N,ee.autoUpdate=j,ee.needsUpdate=W,ee.type=G}function st(v){je("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function we(v){let N=v.target;N.removeEventListener("dispose",we),tt(N)}function tt(v){Mt(v),Ie.remove(v)}function Mt(v){let N=Ie.get(v).programs;N!==void 0&&(N.forEach(function(j){ae.releaseProgram(j)}),v.isShaderMaterial&&ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,j,W,G,ce){N===null&&(N=ui);let ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=Vi(v,N,j,W,G);Me.setMaterial(W,ve);let be=j.index,Ne=1;if(W.wireframe===!0){if(be=_.getWireframeAttribute(j),be===void 0)return;Ne=2}let Qe=j.drawRange,ot=j.attributes.position,Re=Qe.start*Ne,Ee=(Qe.start+Qe.count)*Ne;ce!==null&&(Re=Math.max(Re,ce.start*Ne),Ee=Math.min(Ee,(ce.start+ce.count)*Ne)),be!==null?(Re=Math.max(Re,0),Ee=Math.min(Ee,be.count)):ot!=null&&(Re=Math.max(Re,0),Ee=Math.min(Ee,ot.count));let Tt=Ee-Re;if(Tt<0||Tt===1/0)return;_e.setup(G,W,pe,j,be);let mt,gt=q;if(be!==null&&(mt=b.get(be),gt=re,gt.setIndex(mt)),G.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*Si()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(G.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),Me.setLineWidth(yt*Si()),G.isLineSegments?gt.setMode(F.LINES):G.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else G.isPoints?gt.setMode(F.POINTS):G.isSprite&&gt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))gt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let yt=G._multiDrawStarts,Le=G._multiDrawCounts,kt=G._multiDrawCount,Wt=be?b.get(be).bytesPerElement:1,bi=Ie.get(W).currentProgram.getUniforms();for(let Xt=0;Xt<kt;Xt++)bi.setValue(F,"_gl_DrawID",Xt),gt.render(yt[Xt]/Wt,Le[Xt])}else if(G.isInstancedMesh)gt.renderInstances(Re,Tt,G.count);else if(j.isInstancedBufferGeometry){let yt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Le=Math.min(j.instanceCount,yt);gt.renderInstances(Re,Tt,Le)}else gt.render(Re,Tt)};function Kr(v,N,j,W){U!==null&&v.isNodeMaterial&&U.setObject(W,v),xt===!0&&I.setState(v,j,!1),v.transparent===!0&&v.side===yr&&v.forceSinglePass===!1?(v.side=Ai,v.needsUpdate=!0,Zr(v,N,W),v.side=aa,v.needsUpdate=!0,Zr(v,N,W),v.side=yr):Zr(v,N,W)}this.compile=function(v,N,j=null){j===null&&(j=v),U!==null&&U.renderStart(v,N,j),T=fe.get(j),T.init(N),f.push(T),j.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),v!==j&&v.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),ai=this.localClippingEnabled,xt=I.init(this.clippingPlanes,ai),xt===!0&&I.setGlobalState(this.clippingPlanes,N),U!==null&&ee.render(T.state.shadowsArray,j,N);let W=new Set;return v.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ce=G.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){let pe=ce[ve];Kr(pe,j,N,G),W.add(pe)}else Kr(ce,j,N,G),W.add(ce)}),T=f.pop(),U!==null&&U.renderEnd(),W},this.compileAsync=function(v,N,j=null){let W=this.compile(v,N,j);return new Promise(G=>{function ce(){if(W.forEach(function(ve){let pe=Ie.get(ve).currentProgram;(pe===void 0||pe.isReady())&&W.delete(ve)}),W.size===0){G(v);return}setTimeout(ce,10)}pt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let pa=null;function $a(v){pa&&pa(v)}function fa(){tr.stop()}function ma(){tr.start()}let tr=new Mu;tr.setAnimationLoop($a),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(v){pa=v,ie.setAnimationLoop(v),v===null?tr.stop():tr.start()},ie.addEventListener("sessionstart",fa),ie.addEventListener("sessionend",ma),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;U!==null&&U.renderStart(v,N);let j=ie.enabled===!0&&ie.isPresenting===!0,W=x!==null&&(X===null||j)&&x.begin(P,X);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,X),T=fe.get(v,f.length),T.init(N),T.state.textureUnits=ze.getTextureUnits(),f.push(T),ni.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?_t.setFromArrayCamera(N):Ht.setFromProjectionMatrix(ni,Ki,N.reversedDepth),ai=this.localClippingEnabled,xt=I.init(this.clippingPlanes,ai),y=he.get(v,C.length),y.init(),C.push(y),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let ce=P.xr.getDepthSensingMesh();ce!==null&&ga(ce,N,-1/0,P.sortObjects)}ga(v,N,0,P.sortObjects),y.finish(),U!==null&&U.updateLights(T.state.lightsArray),P.sortObjects===!0&&y.sort(ge,Ke),si=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,si&&Se.addToRenderList(y,v),this.info.autoReset===!0&&this.info.reset(),xt===!0&&I.beginShadows();let G=T.state.shadowsArray;if(ee.render(G,v,N),xt===!0&&I.endShadows(),(W&&x.hasRenderPass())===!1){let ce=y.opaque,ve=y.transmissive;if(T.setupLights(),N.isArrayCamera){let pe=N.cameras;if(ve.length>0)for(let be=0,Ne=pe.length;be<Ne;be++){let Qe=pe[be];en(ce,ve,v,Qe)}si&&Se.render(v);for(let be=0,Ne=pe.length;be<Ne;be++){let Qe=pe[be];zn(y,v,Qe,Qe.viewport)}}else ve.length>0&&en(ce,ve,v,N),si&&Se.render(v),zn(y,v,N)}X!==null&&$===0&&(ze.updateMultisampleRenderTarget(X),ze.updateRenderTargetMipmap(X)),W&&x.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),_e.resetDefaultState(),me=-1,K=null,f.pop(),f.length>0?(T=f[f.length-1],ze.setTextureUnits(T.state.textureUnits),xt===!0&&I.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,U!==null&&U.renderEnd()};function ga(v,N,j,W){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)j=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let ce=N.isArrayCamera?_t:Ht;if(!v.frustumCulled||v.intersectsFrustum(ce)){W&&Jt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ni);let ve=k.update(v),pe=v.material;pe.visible&&y.push(v,ve,pe,j,Jt.z,null,N)}}else if(v.isMesh||v.isLine||v.isPoints){let ce=N.isArrayCamera?_t:Ht;if(!v.frustumCulled||v.intersectsFrustum(ce)){let ve=k.update(v),pe=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Jt.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Jt.copy(ve.boundingSphere.center)),Jt.applyMatrix4(v.matrixWorld).applyMatrix4(ni)),Array.isArray(pe)){let be=ve.groups;for(let Ne=0,Qe=be.length;Ne<Qe;Ne++){let ot=be[Ne],Re=pe[ot.materialIndex];Re&&Re.visible&&y.push(v,ve,Re,j,Jt.z,ot,N)}}else pe.visible&&y.push(v,ve,pe,j,Jt.z,null,N)}}}let G=v.children;for(let ce=0,ve=G.length;ce<ve;ce++)ga(G[ce],N,j,W)}function zn(v,N,j,W){let{opaque:G,transmissive:ce,transparent:ve}=v;T.setupLightsView(j),xt===!0&&I.setGlobalState(P.clippingPlanes,j),W&&Me.viewport(Y.copy(W)),G.length>0&&_a(G,N,j),ce.length>0&&_a(ce,N,j),ve.length>0&&_a(ve,N,j),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function en(v,N,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let ot=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new lr(1,1,{generateMipmaps:!0,type:ot?hr:Ui,minFilter:Br,samples:Math.max(4,Lt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let G=T.state.transmissionRenderTarget[W.id],ce=W.viewport||Y;G.setSize(ce.z*P.transmissionResolutionScale,ce.w*P.transmissionResolutionScale);let ve=P.getRenderTarget(),pe=P.getActiveCubeFace(),be=P.getActiveMipmapLevel();P.setRenderTarget(G),P.getClearColor(J),se=P.getClearAlpha(),se<1&&P.setClearColor(16777215,.5),P.clear(),si&&Se.render(j);let Ne=P.toneMapping;P.toneMapping=br;let Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),xt===!0&&I.setGlobalState(P.clippingPlanes,W),_a(v,j,W),ze.updateMultisampleRenderTarget(G),ze.updateRenderTargetMipmap(G),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Re=0,Ee=N.length;Re<Ee;Re++){let Tt=N[Re],{object:mt,geometry:gt,material:yt,group:Le}=Tt;if(yt.side===yr&&mt.layers.test(W.layers)){let kt=yt.side;yt.side=Ai,yt.needsUpdate=!0,ir(mt,j,W,gt,yt,Le),yt.side=kt,yt.needsUpdate=!0,ot=!0}}ot===!0&&(ze.updateMultisampleRenderTarget(G),ze.updateRenderTargetMipmap(G))}P.setRenderTarget(ve,pe,be),P.setClearColor(J,se),Qe!==void 0&&(W.viewport=Qe),P.toneMapping=Ne}function _a(v,N,j){let W=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ce=v.length;G<ce;G++){let ve=v[G],{object:pe,geometry:be,group:Ne}=ve,Qe=ve.material;Qe.allowOverride===!0&&W!==null&&(Qe=W),pe.layers.test(j.layers)&&ir(pe,N,j,be,Qe,Ne)}}function ir(v,N,j,W,G,ce){U!==null&&G.isNodeMaterial&&U.setObject(v,G),v.onBeforeRender(P,N,j,W,G,ce),v.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),G.onBeforeRender(P,N,j,W,v,ce),G.transparent===!0&&G.side===yr&&G.forceSinglePass===!1?(G.side=Ai,G.needsUpdate=!0,P.renderBufferDirect(j,N,W,G,v,ce),G.side=aa,G.needsUpdate=!0,P.renderBufferDirect(j,N,W,G,v,ce),G.side=yr):P.renderBufferDirect(j,N,W,G,v,ce),v.onAfterRender(P,N,j,W,G,ce)}function Hn(v){let N=0;for(let j of v)j.texture!==null&&N++;return N}function Zr(v,N,j){N.isScene!==!0&&(N=ui);let W=Ie.get(v),G=T.state.lights,ce=T.state.shadowsArray,ve=G.state.version,pe=ae.getParameters(v,G.state,ce,N,j,T.state.lightProbeGridArray),be=ae.getProgramCacheKey(pe),Ne=W.programs;W.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,W.fog=N.fog;let Qe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;W.envMap=Ut.get(v.envMap||W.environment,Qe),W.envMapRotation=W.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ne===void 0&&(v.addEventListener("dispose",we),Ne=new Map,W.programs=Ne,W.programVariants=new Map);let ot=Ne.get(be);if(ot!==void 0){if(W.currentProgram===ot&&W.lightsStateVersion===ve)return Gi(v,pe),ot}else pe.uniforms=ae.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,j,pe),v.onBeforeCompile(pe,P),ot=ae.acquireProgram(pe,be),Ne.set(be,ot),W.uniforms=pe.uniforms;let Re=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=I.uniform),Gi(v,pe),W.needsLights=Gn(v),W.lightsStateVersion=ve,W.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.sunLights.value=G.state.sun,Re.sunLightShadows.value=G.state.sunShadow,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.sunShadowMatrix.value=G.state.sunShadowMatrix,Re.sunShadowCascade.value=G.state.sunShadowCascade,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),W.numLightProbeGrids=Hn(T.state.lightProbeGridArray),W.currentProgram=ot,W.uniformsList=null,ot}function yi(v,N,j,W,G){let ce=Ie.get(v),ve=ce.currentProgram.id+","+W+","+G,pe=ce.programVariants.get(ve);return pe===void 0?(pe=Zr(v,N,j),ce.programVariants.set(ve,pe)):(ce.currentProgram=pe,ce.uniformsList=null,ce.outputColorSpace=W,ce.toneMapping=G),pe}function Hi(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=bs.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Gi(v,N){let j=Ie.get(v);j.outputColorSpace=N.outputColorSpace,j.batching=N.batching,j.batchingColor=N.batchingColor,j.instancing=N.instancing,j.instancingColor=N.instancingColor,j.instancingMorph=N.instancingMorph,j.skinning=N.skinning,j.morphTargets=N.morphTargets,j.morphNormals=N.morphNormals,j.morphColors=N.morphColors,j.morphTargetsCount=N.morphTargetsCount,j.numClippingPlanes=N.numClippingPlanes,j.numIntersection=N.numClipIntersection,j.vertexAlphas=N.vertexAlphas,j.vertexTangents=N.vertexTangents,j.toneMapping=N.toneMapping}function Vi(v,N,j,W,G){N.isScene!==!0&&(N=ui),ze.resetTextureUnits();let ce=N.fog,ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?N.environment:null,pe=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ct.workingColorSpace,be=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=Ut.get(W.envMap||ve,be),Qe=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ot=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Re=!!j.morphAttributes.position,Ee=!!j.morphAttributes.normal,Tt=!!j.morphAttributes.color,mt=br;W.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(mt=P.toneMapping);let gt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,yt=gt!==void 0?gt.length:0,Le=Ie.get(W),kt=T.state.lights;if(xt===!0&&(ai===!0||v!==K)){let ft=v===K&&W.id===me;I.setState(W,v,ft)}let Wt=!1,bi=!1;W.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==kt.state.version||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Ne||W.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==I.numPlanes||Le.numIntersection!==I.numIntersection)||Le.vertexAlphas!==Qe||Le.vertexTangents!==ot||Le.morphTargets!==Re||Le.morphNormals!==Ee||Le.morphColors!==Tt||Le.morphTargetsCount!==yt||Le.numLightProbeGrids!==Hn(T.state.lightProbeGridArray)?Wt=!0:(Le.outputColorSpace!==pe||Le.toneMapping!==mt)&&(bi=!0):(Wt=!0,Le.__version=W.version);let Xt=Le.currentProgram;(Wt===!0||bi===!0)&&(Xt=bi===!0?yi(W,N,G,pe,mt):Zr(W,N,G),U&&W.isNodeMaterial&&U.onUpdateProgram(W,Xt,Le));let pr=!1,rr=!1,fr=!1,it=Xt.getUniforms(),jt=Le.uniforms;if(Me.useProgram(Xt.program)&&(pr=!0,rr=!0,fr=!0),W.id!==me&&(me=W.id,rr=!0),pr||K!==v){Me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(F,"projectionMatrix",v.projectionMatrix),it.setValue(F,"viewMatrix",v.matrixWorldInverse);let ft=it.map.cameraPosition;ft!==void 0&&ft.setValue(F,Ct.setFromMatrixPosition(v.matrixWorld)),Lt.logarithmicDepthBuffer&&it.setValue(F,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(F,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,rr=!0,fr=!0)}if(Le.needsLights&&(kt.state.sunShadowMap.length>0&&it.setValue(F,"sunShadowMap",kt.state.sunShadowMap,ze),kt.state.directionalShadowMap.length>0&&it.setValue(F,"directionalShadowMap",kt.state.directionalShadowMap,ze),kt.state.spotShadowMap.length>0&&it.setValue(F,"spotShadowMap",kt.state.spotShadowMap,ze),kt.state.pointShadowMap.length>0&&it.setValue(F,"pointShadowMap",kt.state.pointShadowMap,ze)),G.isSkinnedMesh){it.setOptional(F,G,"bindMatrix"),it.setOptional(F,G,"bindMatrixInverse");let ft=G.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),it.setValue(F,"boneTexture",ft.boneTexture,ze))}G.isBatchedMesh&&(it.setOptional(F,G,"batchingTexture"),it.setValue(F,"batchingTexture",G._matricesTexture,ze),it.setOptional(F,G,"batchingIdTexture"),it.setValue(F,"batchingIdTexture",G._indirectTexture,ze),it.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(F,"batchingColorTexture",G._colorsTexture,ze));let Pi=j.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&L.update(G,j,Xt),(rr||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,it.setValue(F,"receiveShadow",G.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&N.environment!==null&&(jt.envMapIntensity.value=N.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=hv()),rr){if(it.setValue(F,"toneMappingExposure",P.toneMappingExposure),Le.needsLights&&ki(jt,fr),ce&&W.fog===!0&&Q.refreshFogUniforms(jt,ce),Q.refreshMaterialUniforms(jt,W,Oe,De,T.state.transmissionRenderTarget[v.id]),Le.needsLights&&Le.numLightProbeGrids>0){let ft=A,It=0;for(let Fi of T.state.lightProbeGridArray)Fi.texture!==null&&(ft.textures[It]=Fi.texture,ft.min[It]=Fi.boundingBox.min,ft.max[It]=Fi.boundingBox.max,ft.resolution[It]=Fi.resolution,It++);for(let Fi in ft)ft[Fi].length=It;jt.probesSH.value=ft.textures,jt.probesMin.value=ft.min,jt.probesMax.value=ft.max,jt.probesResolution.value=ft.resolution}bs.upload(F,Hi(Le),jt,ze)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(bs.upload(F,Hi(Le),jt,ze),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(F,"center",G.center),it.setValue(F,"modelViewMatrix",G.modelViewMatrix),it.setValue(F,"normalMatrix",G.normalMatrix),it.setValue(F,"modelMatrix",G.matrixWorld),W.uniformsGroups!==void 0){let ft=W.uniformsGroups;for(let It=0,Fi=ft.length;It<Fi;It++){let Wi=ft[It];de.update(Wi,Xt),de.bind(Wi,Xt)}}return Xt}function ki(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Gn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(v,N,j){let W=Ie.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ie.get(v.texture).__webglTexture=N,Ie.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let j=Ie.get(v);j.__webglFramebuffer=N,j.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,j=0){X=v,z=N,$=j;let W=null,G=!1,ce=!1;if(v){let ve=Ie.get(v);if(ve.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,ve.__webglFramebuffer),Y.copy(v.viewport),oe.copy(v.scissor),Ue=v.scissorTest,Me.viewport(Y),Me.scissor(oe),Me.setScissorTest(Ue),me=-1;return}else if(ve.__webglFramebuffer===void 0)ze.setupRenderTarget(v);else if(ve.__hasExternalTextures)ze.rebindTextures(v,Ie.get(v.texture).__webglTexture,Ie.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ne=v.depthTexture;if(ve.__boundDepthTexture!==Ne){if(Ne!==null&&Ie.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(v)}}let pe=v.texture;(pe.isData3DTexture||pe.isDataArrayTexture||pe.isCompressedArrayTexture)&&(ce=!0);let be=Ie.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(be[N])?W=be[N][j]:W=be[N],G=!0):v.samples>0&&ze.useMultisampledRTT(v)===!1?W=Ie.get(v).__webglMultisampledFramebuffer:Array.isArray(be)?W=be[j]:W=be,Y.copy(v.viewport),oe.copy(v.scissor),Ue=v.scissorTest}else Y.copy(et).multiplyScalar(Oe).floor(),oe.copy(Fe).multiplyScalar(Oe).floor(),Ue=Rt;if(j!==0&&(W=H),Me.bindFramebuffer(F.FRAMEBUFFER,W)&&Me.drawBuffers(v,W),Me.viewport(Y),Me.scissor(oe),Me.setScissorTest(Ue),G){let ve=Ie.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,j)}else if(ce){let ve=N;for(let pe=0;pe<v.textures.length;pe++){let be=Ie.get(v.textures[pe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+pe,be.__webglTexture,j,ve)}}else if(v!==null&&j!==0){let ve=Ie.get(v.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ve.__webglTexture,j)}me=-1};function tn(v){let N=Ie.get(v);return(N.__readFormat!==v.format||N.__readType!==v.type)&&(N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=Lt.textureFormatReadable(v.format),N.__typeReadable=Lt.textureTypeReadable(v.type)),N}this.readRenderTargetPixels=function(v,N,j,W,G,ce,ve,pe=0){if(!(v&&v.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve],Array.isArray(be)&&(be=be[0])),be){Me.bindFramebuffer(F.FRAMEBUFFER,be);try{let Ne=v.textures[pe],Qe=Ne.format,ot=Ne.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Re=tn(Ne);if(Re.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-W&&j>=0&&j<=v.height-G&&F.readPixels(N,j,W,G,le.convert(Qe),le.convert(ot),ce)}finally{let Ne=X!==null?Ie.get(X).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(v,N,j,W,G,ce,ve,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ie.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve],Array.isArray(be)&&(be=be[0])),be)if(N>=0&&N<=v.width-W&&j>=0&&j<=v.height-G){Me.bindFramebuffer(F.FRAMEBUFFER,be);let Ne=v.textures[pe],Qe=Ne.format,ot=Ne.type;v.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Re=tn(Ne);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,ce.byteLength,F.STREAM_READ),F.readPixels(N,j,W,G,le.convert(Qe),le.convert(ot),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Tt=X!==null?Ie.get(X).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Tt);let mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kd(F,mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ce),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ee),F.deleteSync(mt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,j=0){let W=Math.pow(2,-j),G=Math.floor(v.image.width*W),ce=Math.floor(v.image.height*W),ve=N!==null?N.x:0,pe=N!==null?N.y:0;ze.setTexture2D(v,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,ve,pe,G,ce),Me.unbindTexture()},this.copyTextureToTexture=function(v,N,j=null,W=null,G=0,ce=0){let ve,pe,be,Ne,Qe,ot,Re,Ee,Tt,mt=v.isCompressedTexture?v.mipmaps[ce]:v.image;if(j!==null)ve=j.max.x-j.min.x,pe=j.max.y-j.min.y,be=j.isBox3?j.max.z-j.min.z:1,Ne=j.min.x,Qe=j.min.y,ot=j.isBox3?j.min.z:0;else{let it=Math.pow(2,-G);ve=Math.floor(mt.width*it),pe=Math.floor(mt.height*it),v.isDataArrayTexture?be=mt.depth:v.isData3DTexture?be=Math.floor(mt.depth*it):be=1,Ne=0,Qe=0,ot=0}W!==null?(Re=W.x,Ee=W.y,Tt=W.z):(Re=0,Ee=0,Tt=0);let gt=le.convert(N.format),yt=le.convert(N.type),Le;N.isData3DTexture?(ze.setTexture3D(N,0),Le=F.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ze.setTexture2DArray(N,0),Le=F.TEXTURE_2D_ARRAY):(ze.setTexture2D(N,0),Le=F.TEXTURE_2D),Me.activeTexture(F.TEXTURE0),Me.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,N.flipY),Me.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),Me.pixelStorei(F.UNPACK_ALIGNMENT,N.unpackAlignment);let kt=Me.getParameter(F.UNPACK_ROW_LENGTH),Wt=Me.getParameter(F.UNPACK_IMAGE_HEIGHT),bi=Me.getParameter(F.UNPACK_SKIP_PIXELS),Xt=Me.getParameter(F.UNPACK_SKIP_ROWS),pr=Me.getParameter(F.UNPACK_SKIP_IMAGES);Me.pixelStorei(F.UNPACK_ROW_LENGTH,mt.width),Me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt.height),Me.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),Me.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),Me.pixelStorei(F.UNPACK_SKIP_IMAGES,ot);let rr=v.isDataArrayTexture||v.isData3DTexture,fr=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let it=Ie.get(v),jt=Ie.get(N),Pi=Ie.get(it.__renderTarget),ft=Ie.get(jt.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Pi.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let It=0;It<be;It++)rr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(v).__webglTexture,G,ot+It),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.get(N).__webglTexture,ce,Tt+It)),F.blitFramebuffer(Ne,Qe,Ne+ve,Qe+pe,Re,Ee,Re+ve,Ee+pe,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||v.isRenderTargetTexture||Ie.has(v)){let it=Ie.get(v),jt=Ie.get(N);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Z),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,D);for(let Pi=0;Pi<be;Pi++)rr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,it.__webglTexture,G,ot+Pi):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,it.__webglTexture,G),fr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,ce,Tt+Pi):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,ce),G!==0?F.blitFramebuffer(Ne,Qe,Ne+ve,Qe+pe,Re,Ee,Re+ve,Ee+pe,F.COLOR_BUFFER_BIT,F.NEAREST):fr?F.copyTexSubImage3D(Le,ce,Re,Ee,Tt+Pi,Ne,Qe,ve,pe):F.copyTexSubImage2D(Le,ce,Re,Ee,Ne,Qe,ve,pe);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else fr?v.isDataTexture||v.isData3DTexture?F.texSubImage3D(Le,ce,Re,Ee,Tt,ve,pe,be,gt,yt,mt.data):N.isCompressedArrayTexture?F.compressedTexSubImage3D(Le,ce,Re,Ee,Tt,ve,pe,be,gt,mt.data):F.texSubImage3D(Le,ce,Re,Ee,Tt,ve,pe,be,gt,yt,mt):v.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ce,Re,Ee,ve,pe,gt,yt,mt.data):v.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ce,Re,Ee,mt.width,mt.height,gt,mt.data):F.texSubImage2D(F.TEXTURE_2D,ce,Re,Ee,ve,pe,gt,yt,mt);Me.pixelStorei(F.UNPACK_ROW_LENGTH,kt),Me.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Wt),Me.pixelStorei(F.UNPACK_SKIP_PIXELS,bi),Me.pixelStorei(F.UNPACK_SKIP_ROWS,Xt),Me.pixelStorei(F.UNPACK_SKIP_IMAGES,pr),ce===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&F.generateMipmap(Le),Me.unbindTexture()},this.initRenderTarget=function(v){Ie.get(v).__webglFramebuffer===void 0&&ze.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ze.setTextureCube(v,0):v.isData3DTexture?ze.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ze.setTexture2DArray(v,0):ze.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){z=0,$=0,X=null,Me.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}});var Vu={};dd(Vu,{createScene:()=>vv});function pv(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Fu(e,t,i){let r=qr(e);return t+i>r-ii.half-Uu&&t-i<r+ii.half+Uu||t-i<jr.z1&&e+i>ei.x0-.45&&e-i<ei.x1+.45||t+i>jr.z0-.35&&t-i<jr.z1+.35||e-i<Ft.end+.6&&t+i>Ft.z0-.25&&t-i<Ft.z1+.25||Bl(e,t,i,vi.x0-.5,Bt.x+Bt.w/2+.4,vi.z0-.3,Xr.z1+.2)||Bl(e,t,i,ti.x0-.3,ti.x1+.3,ti.rowN[0]-.3,ti.rowS[1]+.3)||Bl(e,t,i,Vt.x0-.4,Vt.x1+.4,Vt.z0-.4,Vt.z1+.4)?!0:Math.hypot(e-Oi.x,t-Oi.z)<Oi.r+.4+i}function Gl(e){let t=new Ji;return t.setAttribute("position",new At(e,3)),t.computeVertexNormals(),t}function zu(e,t,i,r,a){let n=i[0]-t[0],s=i[1]-t[1],o=i[2]-t[2],l=r[0]-t[0],c=r[1]-t[1],h=r[2]-t[2],d=[s*h-o*c,o*l-n*h,n*c-s*l];d[0]*a[0]+d[1]*a[1]+d[2]*a[2]<0?e.push(...t,...r,...i):e.push(...t,...i,...r)}function In(e,t,i,r,a,n){zu(e,t,i,r,n),zu(e,t,r,a,n)}function Hu(e,t,i,r,a,n){let s=[];for(let o=0;o<e.length-1;o+=1){let[l,c]=[e[o],e[o+1]],h=t(l),d=t(c);In(s,[l,a,h+n*i],[c,a,d+n*i],[c,a,d+n*r],[l,a,h+n*r],[0,1,0])}return Gl(s)}function Is(e,t,i,r,a=6){let n=new O().subVectors(t,e),s=n.length(),o=new Je(new ci(i,i,s,a,1),r);return o.position.copy(e).addScaledVector(n,.5),o.quaternion.setFromUnitVectors(uv,n.normalize()),o}function Ri(e,t,i,r){return new Je(new Ii(e,t,i),r)}function mv(e,t,i){let r=new Je(new Cl(e,t,4,1),i);return r.rotation.y=Math.PI/4,r}function gv(){let e=1/Math.sqrt(3);return new ci(e,e,1,3,1).rotateZ(Math.PI/2).rotateX(-Math.PI/2).translate(0,e/2,0).scale(1,1/(1.5*e),1)}function Ci(e,t,{colors:i=!1}={}){let r=[],a=new _i;return{items:r,add(n){r.push(n)},build(n){r.sort((o,l)=>o.r-l.r);let s=new Vr(e,t,Math.max(1,r.length));return r.forEach((o,l)=>{a.position.set(o.x,o.y,o.z),a.rotation.set(0,o.ry||0,0),a.scale.set(o.sx??1,o.sy??1,o.sz??1),a.updateMatrix(),s.setMatrixAt(l,a.matrix),i&&s.setColorAt(l,new qe(o.color))}),s.count=r.length,s.userData.full=r.length,s.userData.low=r.filter(o=>o.r<=n).length,s}}}function _v(){let e=new ha(1,16).rotateX(-Math.PI/2),t=e.attributes.position,i=new Float32Array(t.count*3);for(let r=0;r<t.count;r+=1){let a=Math.pow(1-Math.min(1,Math.hypot(t.getX(r),t.getZ(r))),1.5);i.set([a,a,a],r*3)}return e.setAttribute("color",new At(i,3)),e}function Gu(e,t,i){let r=er/Qr.wave;return zl.amp*.5*(Math.sin(e*zl.kx+i*r)+Math.sin(t*zl.kz-i*r*.8+1.3))}async function vv(e){let{container:t,labelLayer:i,landmarks:r,canvasLabel:a,getInsetLeft:n=()=>0,durations:s,onSelect:o=()=>{},onInteract:l=()=>{},onZoomLimits:c=()=>{},onContextLost:h=()=>{},onContextRestored:d=()=>{}}=e,u=!!e.poster,m=window.matchMedia(`(min-width: ${nn.wide}px)`),M=()=>m.matches,S=e.quality||(u||M()?"high":"low"),g=e.motion!==!1,p=!!e.reduced,w=e.time==="night"?"night":"dusk",A=document.createElement("canvas");A.className="scene__canvas",A.setAttribute("role","img"),A.setAttribute("aria-label",a(w)),t.prepend(A);let y=new Lu({canvas:A,antialias:S==="high",powerPreference:"high-performance"});y.shadowMap.enabled=!0;let T=new Xh,C=new kh(Be.dusk.sky,60,200);T.fog=C,T.background=new qe(Be.dusk.sky);let f=new Di(Nt.fov,1,.5,3e3),x=(E,B={})=>new Nl({color:E,flatShading:!0,...B}),P=(E,B={})=>new Rl({color:E,...B}),R={pavement:x(Be.pavement),road:x(Be.road,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),grass:x(Be.grass,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),path:x(Be.pavement,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),tree:x(Be.tree),trunk:x(Be.trunk),stone:x(Be.stone),roof:x(Be.instanceBase),structure:x(Be.structure),accent:x(Be.accent),wall:x(Be.instanceBase),car:x(Be.instanceBase),carGlass:x(Be.carGlass),bulb:x(Be.structure,{emissive:Be.bulb,emissiveIntensity:0}),clock:x(Be.clockFace,{emissive:Be.clockGlow,emissiveIntensity:0}),jet:x(Be.fountain,{emissive:Be.bulb,emissiveIntensity:0,transparent:!0,opacity:.7}),water:new Nl({vertexColors:!0,flatShading:!0}),farWater:x(Be.dusk.riverDeep),pondWater:x(Be.dusk.riverDeep),windowEarly:P(Be.window.early[0]),windowLate:P(Be.window.late[0]),windowOff:P(Be.window.off[0]),headlight:P(Be.headlight[0]),taillight:P(Be.taillight[0]),beacon:P(Be.beacon),pool:P(Be.bulb,{vertexColors:!0,transparent:!0,opacity:0,blending:ws,depthWrite:!1}),blob:P(Be.shadow,{transparent:!0,opacity:.16,depthWrite:!1})},U=new _i,H=[],Z=[],D=new gi;T.add(D);let z=pv(11),$=(E,B,V)=>{let te=new Je(new ha(V,12).rotateX(-Math.PI/2),R.blob);te.position.set(E,.03,B),D.add(te)},X=new pu(Be.dusk.hemiSky,Be.dusk.ground,sn.dusk.hemi);T.add(X);let me=new O(-26,10.5,9),K=new O(-12,26,-16),Y=new _u(Be.dusk.keyLight,sn.dusk.key);Y.position.copy(me),Y.shadow.mapSize.set(pi.shadowMapSize,pi.shadowMapSize),Object.assign(Y.shadow.camera,{left:-21,right:21,top:21,bottom:-21,near:1,far:90}),Y.shadow.bias=-6e-4,Y.shadow.normalBias=.03,T.add(Y,Y.target);let oe=new Ul(Be.bulb,0,9,2);oe.position.set((ti.x0+ti.x1)/2,1.9,Hl);let Ue=new Ul(Be.bulb,0,9,2);Ue.position.set(dt.x,1.6,dt.mid),T.add(oe,Ue);let J=[-da,-200,-140,-100,-70,-50];for(let E=-45;E<=45.001;E+=1.5)J.push(E);J.push(50,70,100,140,200,da);let se=[],Ae=[];for(let E=0;E<J.length-1;E+=1){let[B,V]=[J[E],J[E+1]],te=kr(B),ne=kr(V),Te=Wr(B),ye=Wr(V);In(se,[B,0,te],[V,0,ne],[V,0,da],[B,0,da],[0,1,0]),In(se,[B,0,-da],[V,0,-da],[V,0,ye],[B,0,Te],[0,1,0]);let Ce=ii.wallBottom;In(Ae,[B,0,te],[V,0,ne],[V,Ce,ne],[B,Ce,te],[0,0,-1]),In(Ae,[B,0,Te],[V,0,ye],[V,Ce,ye],[B,Ce,Te],[0,0,1])}let De=new Je(Gl(se),R.pavement),Oe=new Je(Gl(Ae),R.stone);De.receiveShadow=!0,Oe.receiveShadow=!0,T.add(De,Oe),H.push(De);let ge=J.filter(E=>Math.abs(E)<=70),Ke=new gi;Ke.add(new Je(Hu(ge,kr,dr.promenade,dr.promenade+dr.road,.012,1),R.road),new Je(Hu(ge,Wr,dr.promenade,dr.promenade+dr.road,.012,-1),R.road));let et=(E,B,V,te,ne,Te=.012)=>{let ye=new Je(new ua(B-E,te-V).rotateX(-Math.PI/2),ne);return ye.position.set((E+B)/2,Te,(V+te)/2),ye.userData.flat=!0,ye};Ke.add(et(-70,70,jr.z0,jr.z1,R.road),et(ei.x0,ei.x1,kr(ei.mid)+dr.promenade,jr.z0,R.road),et(ei.x0,ei.x1,-70,Wr(ei.mid)-dr.promenade,R.road)),Ke.traverse(E=>{E.receiveShadow=!0}),T.add(Ke);let Fe=S==="high"?pi.riverSegmentsHigh:pi.riverSegmentsLow,Rt={x:120,z:7.8,cz:ii.base-.4},Ht=new ua(Rt.x,Rt.z,Fe[0],Fe[1]).rotateX(-Math.PI/2).translate(0,0,Rt.cz),_t=Ht.attributes.position,xt=new Float32Array(_t.count*2),ai=new Float32Array(_t.count);for(let E=0;E<_t.count;E+=1){let B=_t.getX(E),V=_t.getZ(E);xt[E*2]=B,xt[E*2+1]=V,ai[E]=1-$i(Math.abs(V-qr(B))/ii.half,0,1)}Ht.setAttribute("color",new At(new Float32Array(_t.count*3),3));let ni=new Je(Ht,R.water);ni.position.y=ii.water,ni.receiveShadow=!0,T.add(ni);let Ct=new Je(new ua(da*2,Rt.z).rotateX(-Math.PI/2),R.farWater);Ct.position.set(0,ii.water-.08,Rt.cz),T.add(Ct);let Jt=E=>{for(let B=0;B<_t.count;B+=1)_t.setY(B,Gu(xt[B*2],xt[B*2+1],E));_t.needsUpdate=!0},ui=[[dt.x,dt.mid,3.2],[7,kr(7)-.4,3],[-8,kr(-8)-.4,2.6],[8,Wr(8)+.4,2.8],[-10,Wr(-10)+.4,2.4]],si=new Float32Array(_t.count);for(let E=0;E<_t.count;E+=1){let B=xt[E*2],V=xt[E*2+1],te=0;ui.forEach(([ne,Te,ye])=>{te+=Math.exp(-((B-ne)**2+(V-Te)**2)/(ye*ye))}),si[E]=Math.min(1,te)}let Si=new Ii(1,1,1).translate(0,.5,0),F=Ci(Si,R.wall,{colors:!0}),xi=Ci(Si,R.wall,{colors:!0}),pt=gv(),Lt=Ci(pt,R.roof,{colors:!0}),Me=Ci(pt,R.roof,{colors:!0}),vt=Ci(Si,R.structure),Ie=new ua(.26,.32),ze={early:Ci(Ie,R.windowEarly,{colors:!0}),late:Ci(Ie,R.windowLate,{colors:!0}),off:Ci(Ie,R.windowOff)},Ut=Ci(new Pn(.07,6,4),R.bulb),b=Ci(new ci(.035,.045,1,5).translate(0,.5,0),R.stone),_=Ci(new Pn(.1,6,4),R.bulb),k=Ci(_v(),R.pool),ae=Ci(new Cl(.5,1.3,6).translate(0,.65,0),R.tree),Q=Ci(new ci(.08,.1,1,5).translate(0,.5,0),R.trunk),he={colStep:.52,floorStep:.62,base:.42},fe=Be.windowTints;function I(E,B,V,te,ne,{r:Te,early:ye=.1,late:Ce=.5,skip:We=0,base:He=he.base,faces:rt="all"}){let ue=[{nx:0,nz:1,width:V,ox:0,oz:te/2},{nx:0,nz:-1,width:V,ox:0,oz:-te/2},{nx:1,nz:0,width:te,ox:V/2,oz:0},{nx:-1,nz:0,width:te,ox:-V/2,oz:0}].filter(ut=>rt==="all"||rt.includes(`${ut.nx},${ut.nz}`)),at=Math.floor((ne-He-.42)/he.floorStep)+1;at<1||ue.forEach(ut=>{let Et=Math.max(1,Math.floor((ut.width-.24)/he.colStep));for(let di=0;di<at;di+=1)for(let qt=0;qt<Et;qt+=1){if(z()<We)continue;let bt=(qt-(Et-1)/2)*he.colStep,Pt={x:E+ut.ox+ut.nx*.012+ut.nz*bt,y:He+.2+di*he.floorStep,z:B+ut.oz+ut.nz*.012-ut.nx*bt,ry:Math.atan2(ut.nx,ut.nz),r:Te,color:fe[Math.floor(z()*fe.length)]},Jr=z();Jr<ye?ze.early.add(Pt):Jr<ye+Ce?ze.late.add(Pt):ze.off.add(Pt)}})}function ee(E,B,V,te,ne,Te,{color:ye,roof:Ce=!1,top:We=!1,win:He}){let rt=Math.hypot(B,V);if(E.add({x:B,y:0,z:V,sx:te,sy:Te,sz:ne,r:rt,color:ye}),Ce){let ue=te>=ne;(E===xi?Me:Lt).add({x:B,y:Te,z:V,ry:ue?0:Math.PI/2,sx:(ue?te:ne)+.12,sy:Math.min(te,ne)*.42,sz:(ue?ne:te)+.14,r:rt,color:Be.roofs[z()<.6?0:1]})}We&&vt.add({x:B+(z()-.5)*te*.3,y:Te,z:V+(z()-.5)*ne*.3,sx:te*.35,sy:.35,sz:ne*.35,r:rt}),I(B,V,te,ne,Te,{r:rt,...He})}let Se=E=>{let B=Be.walls,V=E?[0,1,3][Math.floor(z()*3)]:Math.floor(z()*B.length);return B[V]},L=2.25;for(let E=-15;E<=15.01;E+=L)for(let B=-16.5;B<=17.5;B+=L){let V=E+(z()-.5)*.4,te=B+(z()-.5)*.4,ne=1.3+z()*.6,Te=1.3+z()*.6;if(!Bu(V,te)||Fu(V,te,Math.max(ne,Te)/2))continue;if(te<qr(V)){let Ce=Math.min(7.2,2.6+z()*3+(V>2?z()*1.8:0));ee(F,V,te,ne,Te,Ce,{color:Se(!1),top:z()<.5,win:{early:.12,late:.56}})}else{let Ce=1.1+z()*1.4;ee(F,V,te,ne,Te,Ce,{color:Se(!0),roof:z()<.6,top:z()<.3,win:{early:.1,late:.5,skip:.15}})}}let q=3.3;for(let E=-pi.fillerRadiusHigh;E<=pi.fillerRadiusHigh;E+=q)for(let B=-pi.fillerRadiusHigh;B<=pi.fillerRadiusHigh;B+=q){let V=E+(z()-.5)*.6,te=B+(z()-.5)*.6,ne=1.4+z()*.8,Te=1.4+z()*.8;if(Bu(V,te)||Math.hypot(V,te)>pi.fillerRadiusHigh||z()<.22||Fu(V,te,Math.max(ne,Te)/2))continue;let ye=te<qr(V),Ce=ye?1.4+z()*2.8:.8+z()*1.3;ee(xi,V,te,ne,Te,Ce,{color:Se(!ye),roof:!ye&&z()<.45,win:{early:.1,late:.5,skip:.6}})}let re=(()=>{let E=new gi,B=dt.south-dt.north+1.2,V=Ri(2.3,.3,B,R.structure);V.position.set(dt.x,dt.deckY-.15,(dt.south+dt.north)/2);let te=Ri(1.6,.02,B,R.road);te.position.set(dt.x,dt.deckY+.005,V.position.z),E.add(V,te);let ne=(dt.south-dt.north)/2;return[-1.2,1.2].forEach(Te=>{let ye=dt.x+Te,Ce=[];for(let He=0;He<=10;He+=1){let rt=He/10,ue=$t(dt.north,dt.south,rt),at=dt.deckY+dt.rise*(1-((ue-dt.mid)/ne)**2);Ce.push(new O(ye,at,ue))}let We=new Ns(Ce);E.add(new Je(new Ll(We,28,.09,5,!1),R.structure));for(let He=1;He<8;He+=1){let rt=We.getPointAt(He/8);E.add(Is(new O(ye,dt.deckY,rt.z),rt,.022,R.structure,4))}for(let He=0;He<=14;He+=1){let rt=We.getPointAt(He/14);Ut.add({x:rt.x,y:rt.y+.1,z:rt.z,r:0})}}),T.add(E),{group:E}})();(()=>{let E=new gi;E.position.set(Zt.x,0,Zt.z);let B=new Je(new ci(Oi.r-1,Oi.r,Oi.h,10,1),R.grass);B.position.y=Oi.h/2,B.rotation.y=.2,B.receiveShadow=!0,E.add(B),H.push(B);let V=Zt.base;for(let We=0;We<3;We+=1){let He=We/3*er+.4;E.add(Is(new O(Math.cos(He)*1.1,V,Math.sin(He)*1.1),new O(0,V+3.2,0),.12,R.structure,5))}let te=new Je(new ci(.3,.5,Zt.deck-.4,8,1),R.structure);te.position.y=V+(Zt.deck-.4)/2,E.add(te),H.push(te),[3.6,6.4].forEach(We=>{let He=new Je(new ci(.47-We*.02,.5-We*.02,.32,8,1),R.accent);He.position.y=V+We,E.add(He)});let ne=new Je(new ci(1.15,.85,.9,12,1),R.structure);ne.position.y=V+Zt.deck;let Te=new Je(new ci(1.17,1.12,.32,12,1),R.bulb);Te.position.y=V+Zt.deck+.12;let ye=new Je(new ci(.55,1,.45,12,1),R.accent);ye.position.y=V+Zt.deck+.68,E.add(ne,Te,ye),E.add(Is(new O(0,V+Zt.deck+.9,0),new O(0,V+Zt.top,0),.06,R.structure,5));let Ce=new Je(new Pn(.16,8,6),R.beacon);Ce.position.y=V+Zt.top+.05,E.add(Ce),T.add(E),Z.push(E),$(Zt.x,Zt.z,1.4)})();let le=[];(()=>{let E=new gi,B=vi.x1-vi.x0,V=vi.z1-vi.z0,te=(vi.x0+vi.x1)/2,ne=(vi.z0+vi.z1)/2,Te=Ri(B,vi.h,V,R.structure);Te.position.set(te,vi.h/2,ne),E.add(Te),H.push(Te),Lt.add({x:te,y:vi.h,z:ne,sx:B+.2,sy:.9,sz:V+.2,r:Math.hypot(te,ne),color:Be.roofs[1]}),I(te,ne,B,V,vi.h,{r:Math.hypot(te,ne),early:.5,late:.5,base:.25});let ye=Ri(B+.6,.22,Xr.z1-Xr.z0,R.pavement);ye.position.set(te-.3,.11,(Xr.z0+Xr.z1)/2);let Ce=Ri(B-.6,.08,.9,R.accent);Ce.position.set(te-.3,1.25,Xr.z0+.38),E.add(ye,Ce);for(let bt=vi.x0+.4;bt<vi.x1-.2;bt+=1.6)E.add(Is(new O(bt,.22,Xr.z1-.12),new O(bt,1.22,Xr.z1-.12),.04,R.structure,4));let We=new gi;We.position.set(Bt.x,0,Bt.z);let He=Ri(Bt.w,Bt.h,Bt.w,R.structure);He.position.y=Bt.h/2,H.push(He);let rt=mv(Bt.w*.82,1.1,R.accent);rt.position.y=Bt.h+.55,We.add(He,rt);let ue=Bt.h-.55;[0,Math.PI/2,Math.PI,-Math.PI/2].forEach(bt=>{let Pt=new gi;Pt.rotation.y=bt,Pt.position.set(Math.sin(bt)*(Bt.w/2+.01),ue,Math.cos(bt)*(Bt.w/2+.01));let Jr=new Je(new ha(.4,16),R.carGlass),an=new Je(new ha(.34,16),R.clock);an.position.z=.006,Pt.add(Jr,an),[{len:.2,width:.05,kind:"hour"},{len:.3,width:.035,kind:"minute"}].forEach(Vn=>{let kn=new gi;kn.position.z=.012;let hd=new Je(new Ii(Vn.width,Vn.len,.01).translate(0,Vn.len/2-.03,0),R.carGlass);kn.add(hd),Pt.add(kn),le.push({pivot:kn,kind:Vn.kind})}),We.add(Pt)}),E.add(We),I(Bt.x,Bt.z,Bt.w,Bt.w,Bt.h-1.1,{r:6,early:.4,late:.6,base:.5});let at=Ri(Ft.end+120,.05,Ft.z1-Ft.z0,R.stone);at.position.set((Ft.end-120)/2,.025,(Ft.z0+Ft.z1)/2),E.add(at),Ft.rails.forEach(bt=>{let Pt=Ri(Ft.end+120,.06,.06,R.structure);Pt.position.set((Ft.end-120)/2,.1,bt),E.add(Pt)});let ut=new Vr(new Ii(.14,.04,.9),R.trunk,110),Et=0;for(let bt=Ft.end-.2;Et<110;bt-=.55,Et+=1)U.position.set(bt,.07,(Ft.z0+Ft.z1)/2),U.rotation.set(0,0,0),U.scale.set(1,1,1),U.updateMatrix(),ut.setMatrixAt(Et,U.matrix);E.add(ut);let di=Ri(.3,.4,.9,R.accent);di.position.set(Ft.end+.1,.2,(Ft.z0+Ft.z1)/2),E.add(di);let qt=(Ft.rails[0]+Ft.rails[1])/2;for(let bt=0;bt<3;bt+=1){let Pt=Ft.end-1.6-bt*2.45,Jr=Ri(2.3,.72,.74,R.structure);Jr.position.set(Pt,.5,qt);let an=Ri(2.32,.12,.76,R.accent);an.position.set(Pt,.36,qt),E.add(Jr,an),I(Pt,qt,2.3,.74,.86,{r:Math.hypot(Pt,qt),early:.6,late:.4,base:.36,faces:["0,1","0,-1"]})}T.add(E),Z.push(E),$(te,ne,2.4)})(),(()=>{let E=new gi,B=(ti.x1-ti.x0)/5,V=new Vr(new Ii(1,.05,.55),R.accent,10),te=0;[{z0:ti.rowN[0],z1:ti.rowN[1],side:1},{z0:ti.rowS[0],z1:ti.rowS[1],side:-1}].forEach(ne=>{for(let Te=0;Te<5;Te+=1){let ye=ti.x0+B*(Te+.5),Ce=(ne.z0+ne.z1)/2,We=ne.z1-ne.z0,He=1.2+z()*.7;ee(F,ye,Ce,B-.06,We,He,{color:Se(!0),roof:!0,win:{early:.35,late:.6,base:.9}}),ze.early.add({x:ye,y:.32,z:Ce+ne.side*We/2+ne.side*.013,ry:ne.side>0?0:Math.PI,sx:3.6,sy:1,r:8,color:Be.instanceBase}),U.position.set(ye,.78,Ce+ne.side*(We/2+.24)),U.rotation.set(-ne.side*.32,0,0),U.scale.set(B-.24,1,1),U.updateMatrix(),V.setMatrixAt(te,U.matrix),te+=1}}),E.add(V);for(let ne=0;ne<5;ne+=1){let Te=ti.x0+.5+ne*1.6;for(let ye=0;ye<=8;ye+=1){let Ce=ye/8;Ut.add({x:Te+Ce*.9,y:1.22-Math.sin(Ce*Math.PI)*.22,z:$t(ti.rowN[1],ti.rowS[0],Ce),r:8})}}T.add(E),Z.push(E)})();let _e=(()=>{let E=new gi;E.add(et(Vt.x0,Vt.x1,Vt.z0,Vt.z1,R.grass,.014)),E.add(et(ht.x-.5,ht.x+.5,Vt.z0,Vt.z1,R.path,.02)),E.add(et(Vt.x0,Vt.x1,ht.z-.45,ht.z+.45,R.path,.02));let B=new Je(new ha(2,18).rotateX(-Math.PI/2),R.path);B.position.set(ht.x,.025,ht.z),B.userData.flat=!0,E.add(B);let V=new Je(new ci(1.3,1.38,.3,18,1),R.structure);V.position.set(ht.x,.15,ht.z);let te=new Je(new ha(1.16,18).rotateX(-Math.PI/2),R.pondWater);te.position.set(ht.x,.26,ht.z);let ne=new Je(new ci(.16,.22,.6,8,1),R.structure);ne.position.set(ht.x,.4,ht.z);let Te=new Je(new ci(.5,.2,.18,12,1),R.structure);Te.position.set(ht.x,.74,ht.z);let ye=new Je(new ci(.11,.05,1,8,1,!0).translate(0,.5,0),R.jet);ye.position.set(ht.x,.8,ht.z);let Ce=new Je(new ci(.36,.1,.3,10,1,!0).translate(0,-.15,0),R.jet);Ce.position.set(ht.x,1.8,ht.z),E.add(V,te,ne,Te,ye,Ce);for(let We=0;We<8;We+=1){let He=We/8*er+.2,rt=(at,ut)=>new O(ht.x+Math.cos(He)*at,ut,ht.z+Math.sin(He)*at),ue=new Ns([rt(1.12,.3),rt(.95,.72),rt(.7,.86),rt(.48,.62),rt(.36,.3)]);E.add(new Je(new Ll(ue,10,.03,4,!1),R.jet))}for(let We=0;We<12;We+=1){let He=We/12*er;Ut.add({x:ht.x+Math.cos(He)*1.34,y:.34,z:ht.z+Math.sin(He)*1.34,r:13})}return T.add(E),Z.push(E),$(ht.x,ht.z,1.6),{group:E,update(We){let He=.5+.5*Math.sin(We/Qr.fountain*er);ye.scale.set(1,.75+He*.5,1),Ce.position.y=.8+ye.scale.y,Ce.scale.set(.85+He*.3,1,.85+He*.3)}}})(),de=(E,B,V,te=0)=>{let ne=Math.hypot(E,B);Q.add({x:E,y:te,z:B,sx:V,sy:.45*V,sz:V,r:ne}),ae.add({x:E,y:te+.38*V,z:B,sx:V,sy:V,sz:V,ry:z()*er,r:ne})};for(let E=0;E<10;E+=1){let B=E/10*er+.3,V=ht.x+Math.cos(B)*3,te=ht.z+Math.sin(B)*2;Math.abs(V-ht.x)<.8||Math.abs(te-ht.z)<.7||de(V,te,.8+z()*.3)}[[Vt.x0+.5,Vt.z1-.5],[Vt.x1-.5,Vt.z1-.5],[Vt.x0+.5,Vt.z0+.5],[Vt.x1-.5,Vt.z0+.5]].forEach(([E,B])=>de(E,B,.9));for(let E=0;E<7;E+=1){let B=E/7*er+.5;de(Oi.x+Math.cos(B)*1.95,Oi.z+Math.sin(B)*1.95,.7+z()*.3,Oi.h)}let Pe=(E,B)=>{let V=Math.hypot(E,B);b.add({x:E,y:0,z:B,sy:1.15,r:V}),_.add({x:E,y:1.2,z:B,r:V}),k.add({x:E,y:.03,z:B,sx:1.1,sz:1.1,r:V})};for(let E=-14.4;E<=14.5;E+=3.2)Math.abs(E-dt.x)>=1.8&&Pe(E,kr(E)+.42),Math.abs(E+1.6-dt.x)>=1.8&&Pe(E+1.6,Wr(E+1.6)-.42);[3.6,6,8.4].forEach(E=>{Pe(ei.x0-.2,E),Pe(ei.x1+.2,E)}),[-5.4,-8,-10.6].forEach(E=>{Pe(ei.x0-.2,E),Pe(ei.x1+.2,E)}),[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]].forEach(([E,B])=>Pe(ht.x+E*1.15,ht.z+B*.95)),[-12,-8,-4.6,4,8,12].forEach(E=>Pe(E,jr.z0-.25));let ie={south:ei.mid-.4,north:ei.mid+.4,west:jr.z0+.35},Xe=[[[ie.south,-64],[ie.south,ie.west],[-64,ie.west]],[[64,ie.west],[ie.north,ie.west],[ie.north,-64]]].map(E=>{let B=[],V=0;for(let te=0;te<E.length-1;te+=1){let[ne,Te]=E[te],[ye,Ce]=E[te+1],We=Math.hypot(ye-ne,Ce-Te);B.push({ax:ne,az:Te,bx:ye,bz:Ce,len:We,start:V}),V+=We}return{segs:B,total:V}});function Ve(E,B,V){let te=B*E.total,ne=E.segs.find(ye=>te<=ye.start+ye.len)||E.segs[E.segs.length-1],Te=(te-ne.start)/ne.len;return V.x=$t(ne.ax,ne.bx,Te),V.z=$t(ne.az,ne.bz,Te),V.ry=Math.atan2(ne.bx-ne.ax,ne.bz-ne.az),V}let st=(()=>{let B=4*Xe.length,V=new Vr(new Ii(.42,.24,.86).translate(0,.17,0),R.car,B),te=new Vr(new Ii(.36,.18,.44).translate(0,.36,-.04),R.carGlass,B),ne=new Vr(new Ii(.1,.06,.03),R.headlight,B*2),Te=new Vr(new Ii(.1,.06,.03),R.taillight,B*2),ye=[];Xe.forEach((He,rt)=>{for(let ue=0;ue<4;ue+=1)ye.push({path:He,offset:(ue+rt*.37+z()*.3)/4}),V.setColorAt(ye.length-1,new qe(Be.carBody[(ue+rt*2)%Be.carBody.length]))}),[V,te,ne,Te].forEach(He=>{He.frustumCulled=!1,T.add(He)}),V.castShadow=!0;let Ce={x:0,z:0,ry:0},We=(He,rt,ue,at,ut,Et)=>{U.position.set(ue,at,ut),U.rotation.set(0,Et,0),U.scale.set(1,1,1),U.updateMatrix(),He.setMatrixAt(rt,U.matrix)};return{update(He){ye.forEach((rt,ue)=>{Ve(rt.path,(He/Qr.car+rt.offset)%1,Ce);let at=.02+(Math.abs(Ce.x-dt.x)<1.2&&Ce.z>dt.north-.6&&Ce.z<dt.south+.6?dt.deckY:0);We(V,ue,Ce.x,at,Ce.z,Ce.ry),We(te,ue,Ce.x,at,Ce.z,Ce.ry);let ut=Math.sin(Ce.ry),Et=Math.cos(Ce.ry);[-.13,.13].forEach((di,qt)=>{let bt=Et*di,Pt=-ut*di;We(ne,ue*2+qt,Ce.x+ut*.44+bt,at+.18,Ce.z+Et*.44+Pt,Ce.ry),We(Te,ue*2+qt,Ce.x-ut*.44+bt,at+.18,Ce.z-Et*.44+Pt,Ce.ry)})}),[V,te,ne,Te].forEach(rt=>{rt.instanceMatrix.needsUpdate=!0})}}})(),we=(()=>{let E=new gi,B=Ri(.7,.3,1.9,R.structure);B.position.y=.1;let V=Ri(.72,.08,1.92,R.accent);V.position.y=.2;let te=Ri(.52,.3,.8,R.structure);te.position.set(0,.4,-.2);let ne=new Je(new Pn(.07,6,4),R.bulb);ne.position.set(0,.62,-.2),E.add(B,V,te,ne),E.traverse(ye=>{ye.castShadow=!0}),T.add(E);let Te=140;return{update(ye){let Ce=ye/Qr.boat%1*Te-Te/2,We=qr(Ce)+.7,He=ii.amp*ii.k*Math.cos(ii.k*Ce+ii.phase);E.position.set(Ce,ii.water+Gu(Ce,We,ye)*.8,We),E.rotation.set(0,Math.atan2(1,He),Math.sin(ye*1.3)*.03)}}})(),tt=pi.fillerRadiusLow,Mt=F.build(tt),Kr=xi.build(tt),pa=Lt.build(tt),$a=Me.build(tt),fa=vt.build(tt),ma=[ze.early.build(tt),ze.late.build(tt),ze.off.build(tt)],tr=[b.build(tt),_.build(tt)],ga=k.build(tt),zn=Ut.build(tt),en=[ae.build(tt),Q.build(tt)],_a=[Kr,$a,fa,...ma];T.add(Mt,Kr,pa,$a,fa,...ma,...tr,ga,zn,...en),H.push(Mt),[Mt,pa,fa,...en,...tr].forEach(E=>{E.castShadow=!0,E.receiveShadow=!0}),Kr.receiveShadow=!0,$a.receiveShadow=!0,Z.forEach(E=>E.traverse(B=>{B.isMesh&&B.material!==R.jet&&!B.userData.flat&&(B.castShadow=!0,B.receiveShadow=!0)})),re.group.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),T.traverse(E=>{E.userData.flat&&(E.receiveShadow=!0)});let ir=w==="night"?1:0,Hn=new qe,Zr=new qe,yi=(E,B,V)=>V.copy(Hn.set(E[0])).lerp(Zr.set(E[1]),B),Hi=Be.dusk,Gi=Be.night,Vi=sn.dusk,ki=sn.night,Gn=new qe,tn=new qe,v=Ht.attributes.color,N=new qe,j=new qe(Be.bulb),W=new qe(Be.beacon),G=1;function ce(E){let B=$t(1110,1260,E);le.forEach(({pivot:V,kind:te})=>{let ne=te==="hour"?B%720/720:B%60/60;V.rotation.z=-ne*er})}function ve(){R.beacon.color.copy(W).multiplyScalar($t(Vi.beacon,ki.beacon,ir)*G)}function pe(E){yi([Hi.sky,Gi.sky],E,T.background),C.color.copy(T.background),yi([Hi.hemiSky,Gi.hemiSky],E,X.color),yi([Hi.ground,Gi.ground],E,X.groundColor),X.intensity=$t(Vi.hemi,ki.hemi,E),yi([Hi.keyLight,Gi.keyLight],E,Y.color),Y.intensity=$t(Vi.key,ki.key,E),Y.position.lerpVectors(me,K,E),oe.intensity=$t(Vi.point,ki.point,E),Ue.intensity=oe.intensity,R.bulb.emissiveIntensity=$t(Vi.bulb,ki.bulb,E),R.clock.emissiveIntensity=$t(Vi.clock,ki.clock,E),R.jet.emissiveIntensity=$t(Vi.fountain,ki.fountain,E),R.pool.opacity=$t(Vi.pool,ki.pool,E),ga.visible=R.pool.opacity>.001,yi(Be.window.early,E,R.windowEarly.color),yi(Be.window.late,E,R.windowLate.color),yi(Be.window.off,E,R.windowOff.color),yi(Be.headlight,E,R.headlight.color),yi(Be.taillight,E,R.taillight.color),yi([Hi.riverDeep,Gi.riverDeep],E,R.farWater.color),yi([Hi.riverDeep,Gi.riverDeep],E,R.pondWater.color),yi([Hi.riverShallow,Gi.riverShallow],E,Gn),yi([Hi.riverDeep,Gi.riverDeep],E,tn);let B=$t(Vi.riverGlow,ki.riverGlow,E);for(let V=0;V<v.count;V+=1){N.copy(Gn).lerp(tn,ai[V]);let te=si[V]*B;v.setXYZ(V,N.r+j.r*te,N.g+j.g*te,N.b+j.b*te)}v.needsUpdate=!0,ce(E),ve()}pe(ir);function be(){let E=window.devicePixelRatio||1;return u?1:Math.min(E,S==="high"?pi.pixelRatioHigh:pi.pixelRatioLow)}function Ne(){Y.castShadow=S==="high",D.visible=S!=="high",_a.forEach(E=>{E.count=S==="high"?E.userData.full:E.userData.low})}Ne();function Qe(E){E!==S&&(S=E,Ne(),rn())}let ot=Nt.elevationMin*Qi,Re=Nt.elevationMax*Qi,Ee={az:Nt.startAzimuth*Qi,el:Nt.startElevation*Qi,dist:50,target:Ou.clone()},Tt=50,mt=1,gt=0,yt=80,Le=!0,kt=!1,Wt=null,bi=null,Xt="",pr=E=>$i(E,Nt.minDistance,yt);function rr(){let E=Ee.dist<=Nt.minDistance+.01,B=Ee.dist>=yt-.01,V=`${E}|${B}`;V!==Xt&&(Xt=V,c({atMin:E,atMax:B}))}function fr(){let{az:E,el:B,dist:V,target:te}=Ee;f.position.set(te.x+V*Math.cos(B)*Math.sin(E),te.y+V*Math.sin(B),te.z+V*Math.cos(B)*Math.cos(E)),f.lookAt(te),C.near=V+14,C.far=V+120,rr()}function it(E,B){let V={az:Ee.az+dv((E.az??Ee.az)-Ee.az),el:$i(E.el??Ee.el,ot,Re),dist:pr(E.dist??Ee.dist),target:(E.target??Ee.target).clone()};if(p||B<=0){Ee.az=V.az,Ee.el=V.el,Ee.dist=V.dist,Ee.target.copy(V.target),Wt=null,wi();return}Wt={from:{az:Ee.az,el:Ee.el,dist:Ee.dist,target:Ee.target.clone()},to:V,start:performance.now(),duration:B},wi()}function jt(E){if(!Wt)return;let{from:B,to:V,start:te,duration:ne}=Wt,Te=Du($i((E-te)/ne,0,1));Ee.az=$t(B.az,V.az,Te),Ee.el=$t(B.el,V.el,Te),Ee.dist=$t(B.dist,V.dist,Te),Ee.target.lerpVectors(B.target,V.target,Te),Te>=1&&(Wt=null)}function Pi(E){if(!bi)return;let{from:B,to:V,start:te,duration:ne}=bi,Te=Du($i((E-te)/ne,0,1));ir=$t(B,V,Te),pe(ir),Te>=1&&(bi=null)}function ft(){Wt=null,Le=!1,kt||(kt=!0,l())}let It=r.map(({id:E,name:B})=>{let V=document.createElement("button");V.type="button",V.className="marker is-hidden",V.tabIndex=-1,V.dataset.id=E;let te=document.createElement("span");te.className="marker__pill";let ne=document.createElement("span");return ne.className="marker__text",ne.textContent=B,te.append(ne),V.append(te),V.addEventListener("click",()=>o(E)),i.append(V),{id:E,el:V,anchor:new O(...Iu[E].anchor),occluded:!1,shown:!1,current:!1,half:null,height:0,pillW:0,pillH:0}}),Fi=!1,Wi=new O,Hs=new O,Gs=new vu,Ql=0,nd=e.avoid||[];function sd(E){if(!Fi)return;let B=t.clientWidth,V=t.clientHeight,te=E-Ql>120;te&&(Ql=E),It.forEach(ue=>{ue.half===null&&(ue.half=ue.el.offsetWidth/2,ue.height=ue.el.offsetHeight,ue.pillW=ue.el.firstElementChild.offsetWidth,ue.pillH=ue.el.firstElementChild.offsetHeight)});let ne=t.getBoundingClientRect(),Te=nd.map(ue=>ue.getBoundingClientRect()).filter(ue=>ue.width>0&&ue.height>0).map(ue=>({l:ue.left-ne.left,t:ue.top-ne.top,r:ue.right-ne.left,b:ue.bottom-ne.top})),ye=4,Ce=(ue,at)=>ue.l<at.r+ye&&ue.r>at.l-ye&&ue.t<at.b+ye&&ue.b>at.t-ye,We=(ue,at,ut)=>{let Et=ut-ue.height/2;return{l:at-ue.pillW/2,r:at+ue.pillW/2,t:Et-ue.pillH/2,b:Et+ue.pillH/2}},He=It.map(ue=>{if(te){Hs.subVectors(ue.anchor,f.position);let bt=Hs.length();Gs.set(f.position,Hs.normalize()),Gs.far=bt;let Pt=Gs.intersectObjects(H,!1);ue.occluded=Pt.length>0&&Pt[0].distance<bt-.6}Wi.copy(ue.anchor).project(f);let at=(Wi.x*.5+.5)*B,ut=Wi.z<1&&at>gt&&Wi.x<1.02&&Wi.y>-1.02&&Wi.y<1.08,Et=gt+ue.half+ye,di=$i(at,Et,Math.max(Et,B-ue.half-ye)),qt=$i((-Wi.y*.5+.5)*V,ue.height+ye,Math.max(ue.height+ye,V-ye));return{m:ue,x:di,y:qt,depth:Wi.z,candidate:ut&&!ue.occluded}});He.sort((ue,at)=>Number(at.m.current)-Number(ue.m.current)||ue.depth-at.depth);let rt=[];He.forEach(ue=>{let{y:at}=ue,ut=ue.candidate;if(ut){let Et=We(ue.m,ue.x,at),di=ue.m.current&&Te.find(qt=>Ce(Et,qt));di&&(at+=di.t>V/2?di.t-ye*2-Et.b:di.b+ye*2-Et.t,at=$i(at,ue.m.height+ye,Math.max(ue.m.height+ye,V-ye)),Et=We(ue.m,ue.x,at)),Te.some(qt=>Ce(Et,qt))||rt.some(qt=>Ce(Et,qt))?ut=!1:rt.push(Et)}ue.m.el.style.transform=`translate3d(${ue.x.toFixed(1)}px, ${at.toFixed(1)}px, 0) translate(-50%, -100%)`,ut!==ue.m.shown&&(ue.m.shown=ut,ue.m.el.classList.toggle("is-hidden",!ut))})}let va=fv,Cr=0,mr=0,$l=!document.hidden,ec=!0,Vs=!1,tc=!1,oi={warmUntil:0,frames:0,total:0,prev:0};function od(){return g&&!u}function wi(){!Cr&&$l&&ec&&!Vs&&!tc&&(Cr=requestAnimationFrame(ic))}function ld(E,B){if(!B||S!=="high"||u||e.quality){oi.warmUntil=0,oi.prev=0;return}if(!oi.warmUntil){oi.warmUntil=E+pi.warmupMs,oi.frames=0,oi.total=0,oi.prev=E;return}let V=E-oi.prev;oi.prev=E,!(E<oi.warmUntil)&&(oi.frames+=1,oi.total+=V,oi.total>=pi.sampleWindowMs&&(oi.total/oi.frames>pi.slowFrameMs&&Qe("low"),oi.frames=0,oi.total=0))}function ic(E){Cr=0;let B=mr?Math.min((E-mr)/1e3,.1):0;mr=E;let V=od();V&&(va+=B,!kt&&!p&&!Wt&&(Ee.az+=B/Qr.autoRotate*er)),G=V?.55+.45*(.5+.5*Math.sin(va/Qr.beacon*er)):1,ve(),jt(E),Pi(E),st.update(va),we.update(va),_e.update(va),Jt(va),fr(),y.render(T,f),sd(E),ld(E,V),V||Wt||bi?wi():mr=0}function rn(){let E=t.clientWidth,B=t.clientHeight;if(!E||!B)return;y.setPixelRatio(be()),y.setSize(E,B,!1),f.aspect=E/B;let V=Math.min(n(),E*.6);V>0?f.setViewOffset(E,B,-V/2,0,E,B):f.clearViewOffset(),f.updateProjectionMatrix(),gt=V,mt=(E-V)/B,Tt=u?cc(e.posterSize||"wide"):ln(E-V,B),It.forEach(te=>{te.half=null}),yt=Tt*Nt.maxDistanceFactor,Le&&!Wt&&(Ee.dist=Tt),Ee.dist=pr(Ee.dist),mr=0,wi()}let rc=new AbortController,{signal:gr}=rc,Pr=new Map,Ma=null,ks=()=>{let[E,B]=[...Pr.values()];return{d:Math.max(1,Math.hypot(E.x-B.x,E.y-B.y)),my:(E.y+B.y)/2}};A.addEventListener("pointerdown",E=>{E.pointerType==="mouse"&&E.button!==0||(ft(),Pr.set(E.pointerId,{x:E.clientX,y:E.clientY,type:E.pointerType}),E.pointerType==="mouse"&&A.setPointerCapture(E.pointerId),Ma=Pr.size===2?ks():null)},{signal:gr}),A.addEventListener("pointermove",E=>{let B=Pr.get(E.pointerId);if(!B)return;let V=E.clientX-B.x,te=E.clientY-B.y;B.x=E.clientX,B.y=E.clientY;let ne=Math.PI/Math.max(320,t.clientHeight);if(Pr.size===1)Ee.az-=V*ne*1.3,(B.type==="mouse"||M())&&(Ee.el=$i(Ee.el+te*ne,ot,Re));else if(Pr.size===2&&Ma){let Te=ks();Ee.dist=pr(Ee.dist*(Ma.d/Te.d)),Ee.el=$i(Ee.el+(Te.my-Ma.my)*ne,ot,Re),Ma=Te}wi()},{signal:gr});let ac=E=>{Pr.delete(E.pointerId),Ma=Pr.size===2?ks():null};A.addEventListener("pointerup",ac,{signal:gr}),A.addEventListener("pointercancel",ac,{signal:gr}),A.addEventListener("wheel",E=>{if(!M())return;E.preventDefault(),ft();let B=E.deltaMode===1?E.deltaY*16:E.deltaY;Ee.dist=pr(Ee.dist*Math.exp(B*.0012)),wi()},{passive:!1,signal:gr}),A.addEventListener("webglcontextlost",E=>{E.preventDefault(),Vs=!0,Cr&&cancelAnimationFrame(Cr),Cr=0,h()},{signal:gr}),A.addEventListener("webglcontextrestored",()=>{Vs=!1,mr=0,wi(),d()},{signal:gr}),document.addEventListener("visibilitychange",()=>{$l=!document.hidden,mr=0,wi()},{signal:gr});let nc=new ResizeObserver(()=>rn());nc.observe(t);let sc=new IntersectionObserver(E=>{ec=E.some(B=>B.isIntersecting),mr=0,wi()});sc.observe(t),m.addEventListener("change",()=>rn(),{signal:gr}),rn(),await new Promise(E=>{requestAnimationFrame(B=>{ic(B),E()})}),Fi=!0;let cd=E=>it({az:Nt.startAzimuth*Qi,el:Nt.startElevation*Qi,dist:Tt,target:Ou},E);return{canvas:A,relayout(){rn()},focus(E){let B=Iu[E];B&&(ft(),it({az:B.azimuth*Qi,el:B.elevation*Qi,dist:B.distance*$i(1.25/mt,1,2),target:new O(...B.target)},s.camera))},reset(){Wt=null,cd(s.camera),Le=!0},rotateStep(E){ft(),it({az:Ee.az+E*Nt.stepRotate*Qi},s.cameraStep)},zoomStep(E){ft();let B=E>0?Nt.stepZoom:1/Nt.stepZoom;it({dist:Ee.dist*B},s.cameraStep)},setSelected(E){It.forEach(B=>{B.current=B.id===E,B.el.classList.toggle("is-current",B.current),B.half=null}),wi()},setTime(E,B){w=E,A.setAttribute("aria-label",a(w));let V=E==="night"?1:0;if(!B||p||!g){bi=null,ir=V,pe(ir),wi();return}bi={from:ir,to:V,start:performance.now(),duration:s.timeShift},wi()},setMotion(E){g=E,mr=0,wi()},setReduced(E){p=E,wi()},loseContextForTest(){y.forceContextLoss()},get quality(){return S},cameraState(){return{azimuth:Ee.az/Qi,elevation:Ee.el/Qi,distance:Ee.dist,target:Ee.target.toArray(),tweening:!!Wt}},stats(){return{calls:y.info.render.calls,triangles:y.info.render.triangles,quality:S,buildings:Mt.count+Kr.count,windows:ma.reduce((E,B)=>E+B.count,0)}},dispose(){tc=!0,Cr&&cancelAnimationFrame(Cr),rc.abort(),nc.disconnect(),sc.disconnect(),T.traverse(E=>{E.geometry&&E.geometry.dispose()}),Object.values(R).forEach(E=>E.dispose()),y.dispose(),A.remove(),It.forEach(E=>E.el.remove())}}}var Qi,er,uv,$i,$t,Du,dv,ii,qr,kr,Wr,dr,Uu,da,ei,jr,Ft,vi,Xr,Bt,ti,Hl,Vt,ht,Oi,Zt,dt,Iu,Ou,fv,Bl,Bu,zl,ku=Wn(()=>{Nu();Xn();Xs();Qi=Math.PI/180,er=Math.PI*2,uv=new O(0,1,0),$i=(e,t,i)=>Math.min(i,Math.max(t,e)),$t=(e,t,i)=>e+(t-e)*i,Du=e=>1-Math.pow(1-e,3),dv=e=>Math.atan2(Math.sin(e),Math.cos(e));ii={base:-1,amp:.7,k:.12,phase:.4,half:2.4,water:-1.1,wallBottom:-1.6},qr=e=>ii.base+ii.amp*Math.sin(ii.k*e+ii.phase),kr=e=>qr(e)+ii.half,Wr=e=>qr(e)-ii.half,dr={promenade:.8,road:1.4},Uu=dr.promenade+dr.road+.2,da=260,ei={x0:.2,x1:1.8,mid:1},jr={z0:9,z1:10.4},Ft={z0:7,z1:8.2,rails:[7.35,7.85],end:-4.4},vi={x0:-11.8,x1:-4.8,z0:4.1,z1:6.3,h:1.7},Xr={z0:6.3,z1:6.95},Bt={x:-3.7,z:4.8,w:1,h:4.4},ti={x0:3.2,x1:10.8,rowN:[4.4,5.5],rowS:[6.7,7.8]},Hl=(ti.rowN[1]+ti.rowS[0])/2,Vt={x0:-2.6,x1:5.4,z0:10.9,z1:16.6},ht={x:1.4,z:13.35},Oi={x:-5.2,z:-11.2,r:3.4,h:1},Zt={x:Oi.x,z:Oi.z,base:Oi.h,deck:9.6,top:13.6},dt={x:ei.mid,deckY:.04,south:kr(ei.mid),north:Wr(ei.mid),mid:qr(ei.mid),rise:2.6},Iu={tower:{anchor:[Zt.x,Zt.base+Zt.top+.9,Zt.z],target:[Zt.x,7.6,Zt.z],distance:36,azimuth:18,elevation:14},bridge:{anchor:[dt.x,dt.rise+1,dt.mid],target:[dt.x,.6,dt.mid],distance:19,azimuth:52,elevation:28},station:{anchor:[Bt.x,Bt.h+1.7,Bt.z],target:[-6.4,1.4,5.5],distance:21,azimuth:18,elevation:30},market:{anchor:[7,2.7,Hl],target:[7,.5,Hl],distance:16,azimuth:78,elevation:40},fountain:{anchor:[ht.x,2.4,ht.z],target:[ht.x,.6,ht.z-.8],distance:15,azimuth:8,elevation:36}},Ou=new O(0,1.8,1.2),fv=7.4,Bl=(e,t,i,r,a,n,s)=>e+i>r&&e-i<a&&t+i>n&&t-i<s;Bu=(e,t)=>Math.abs(e)<=15.5&&t>=-16.5&&t<=17.5;zl={amp:.045,kx:.5,kz:.9}});Xn();Xs();var Ja=document.documentElement,Ar=new URLSearchParams(window.location.search),Mi={state:Ar.get("state"),poster:Ar.get("poster"),time:Ar.get("time"),select:Ar.get("select"),motion:Ar.get("motion"),quality:["high","low"].includes(Ar.get("quality"))?Ar.get("quality"):void 0,size:["wide","medium","narrow"].includes(Ar.get("size"))?Ar.get("size"):"wide"},hi=(e,t=document)=>t.querySelector(e),On=(e,t=document)=>[...t.querySelectorAll(e)],Ye={scene:hi("#scene"),labels:hi(".scene__labels"),poster:hi(".scene__poster"),posterImg:hi(".scene__poster img"),posterSources:On(".scene__poster source"),progress:hi(".scene__progress"),controls:hi(".scene__controls"),toggles:hi(".scene__toggles"),motionBtn:hi('[data-action="motion"]'),timeBtn:hi('[data-action="time"]'),zoomIn:hi('[data-action="zoom-in"]'),zoomOut:hi('[data-action="zoom-out"]'),bannerRegion:hi(".banner-region"),announcer:hi("[data-announcer]"),backdrop:hi(".panel-backdrop"),landmarkButtons:On(".landmark"),details:On("[data-detail]")},Mv=e=>getComputedStyle(Ja).getPropertyValue(e).trim(),Rr=e=>parseFloat(Mv(e))||0,Yr={camera:Rr("--ds-motion-camera"),cameraStep:Rr("--ds-motion-camera-step"),timeShift:Rr("--ds-motion-time-shift"),crossfade:Rr("--ds-motion-crossfade"),loadingDelay:Rr("--ds-motion-loading-delay"),loadingMin:Rr("--ds-motion-loading-min"),loadingSlow:Rr("--ds-motion-loading-slow"),contextRestore:Rr("--ds-motion-context-restore"),hintHold:Rr("--ds-motion-hint-hold")},ri={motionStop:"\uC6C0\uC9C1\uC784 \uBA48\uCD94\uAE30",motionStart:"\uC6C0\uC9C1\uC784 \uB2E4\uC2DC \uCF1C\uAE30",toNight:"\uBC24\uC73C\uB85C \uBC14\uAFB8\uAE30",toDusk:"\uD574 \uC9C8 \uB158\uC73C\uB85C \uBC14\uAFB8\uAE30",progress:"\uB3C4\uC2DC\uB97C \uADF8\uB9AC\uB294 \uC911\uC774\uC5D0\uC694",slow:"\uC5F0\uACB0\uC774 \uB290\uB824 3D \uC7A5\uBA74 \uD30C\uC77C\uC744 \uBC1B\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB824\uC694. \uBAA9\uB85D\uC740 \uC9C0\uAE08 \uBCFC \uC218 \uC788\uC5B4\uC694.",slowAction:"3D \uC5C6\uC774 \uBCF4\uAE30",failed:"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uC7A5\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4\uC694. \uBAA9\uB85D\uC5D0\uC11C \uBA85\uC18C\uB97C \uACE0\uB974\uBA74 \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.",lost:"3D \uC7A5\uBA74\uC774 \uBA48\uCDC4\uC5B4\uC694. \uB2E4\uC2DC \uADF8\uB9AC\uBA74 \uC774\uC5B4\uC11C \uBCFC \uC218 \uC788\uC5B4\uC694.",lostAction:"\uB2E4\uC2DC \uADF8\uB9AC\uAE30",closeBanner:"\uC54C\uB9BC \uB2EB\uAE30",viewing:e=>`${e} \uBCF4\uB294 \uC911`,altDusk:"\uD574 \uC9C8 \uB158, \uAC15\uC744 \uB080 \uC791\uC740 \uB3C4\uC2DC. \uC804\uB9DD \uD0C0\uC6CC, \uC544\uCE58 \uB2E4\uB9AC, \uC2DC\uACC4\uD0D1 \uAE30\uCC28\uC5ED, \uC2DC\uC7A5 \uACE8\uBAA9, \uACF5\uC6D0 \uBD84\uC218\uAC00 \uC788\uB294 3D \uC7A5\uBA74",altNight:"\uBC24\uC774 \uB41C \uAC15\uAC00 \uB3C4\uC2DC. \uCC3D\uBB38\uACFC \uAC00\uB85C\uB4F1, \uC544\uCE58 \uB2E4\uB9AC\uC5D0 \uBD88\uC774 \uCF1C\uC9C0\uACE0 \uC804\uB9DD \uD0C0\uC6CC, \uC2DC\uACC4\uD0D1 \uAE30\uCC28\uC5ED, \uC2DC\uC7A5 \uACE8\uBAA9, \uACF5\uC6D0 \uBD84\uC218\uAC00 \uBCF4\uC774\uB294 3D \uC7A5\uBA74"},ql=Ye.landmarkButtons.map(e=>({id:e.dataset.id,name:hi(".landmark__name",e).textContent.trim()})),Sv=e=>ql.find(t=>t.id===e)?.name??"",Fs=window.matchMedia("(prefers-reduced-motion: reduce)"),Zu=window.matchMedia(`(min-width: ${nn.wide}px)`),nt={mode:"loading",selected:null,time:Mi.time==="night"||Mi.poster==="night"?"night":"dusk",reduced:Fs.matches,motion:Mi.motion!=="off"&&!Fs.matches&&!Mi.poster},zt=null,Vl=null,Fn=!1,Bs=0,Wu=!1,Xu=new ResizeObserver(()=>{Xl(),zt?.relayout()}),Ju=e=>new Promise(t=>setTimeout(t,e));function Qa(e){nt.mode=e,Ja.dataset.mode=e}function Yl(e){Ye.announcer.textContent="",e&&requestAnimationFrame(()=>Ye.announcer.textContent=e)}function Kl(){Ye.landmarkButtons.forEach(t=>{t.dataset.id===nt.selected?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")});let e=nt.selected??"intro";Ye.details.forEach(t=>t.classList.toggle("is-current",t.dataset.detail===e)),zt?.setSelected(nt.selected)}function Qu(){let e=new URL(window.location.href);nt.selected?e.searchParams.set("select",nt.selected):e.searchParams.delete("select");try{window.history.replaceState(null,"",e)}catch{}}function Wl(e){ql.some(t=>t.id===e)&&(nt.selected=e,Kl(),Qu(),Yl(ri.viewing(Sv(e))),zt&&nt.mode==="ready"&&zt.focus(e))}function $u(){let e=nt.selected!==null;nt.selected=null,Kl(),Qu(),zt&&nt.mode==="ready"&&zt.reset(),e&&Yl("")}function kl(){Ye.motionBtn.textContent=nt.motion?ri.motionStop:ri.motionStart,zt?.setMotion(nt.motion)}function ju(e,t){return`assets/poster-${e}-${t}.webp`}function xv(){Ye.posterSources.forEach(e=>{e.srcset=ju(nt.time,e.dataset.size)}),Ye.posterImg.src=ju(nt.time,"narrow"),Ye.posterImg.alt=nt.time==="night"?ri.altNight:ri.altDusk}var yv=window.matchMedia(`(min-width: ${nn.medium}px)`);function Ev(){return Zu.matches?"wide":yv.matches?"medium":"narrow"}function Xl(){if(Mi.poster)return;let e=Ye.scene.clientWidth,t=Ye.scene.clientHeight;if(!e||!t)return;let i=Ev(),r=Ye.posterImg;if(r.naturalWidth&&r.naturalWidth!==on[i].width){Ye.poster.classList.remove("is-placed");return}let a=hc(i,e,t,rd());Ye.poster.classList.toggle("is-placed",!!a),a&&Object.entries(a).forEach(([n,s])=>{Ye.poster.style.setProperty(`--poster-${n}`,`${s.toFixed(1)}px`)})}function bv(){return On(".tooltip",Ye.controls).some(t=>getComputedStyle(t).visibility==="visible")?(Ye.controls.classList.add("is-tip-dismissed"),On(".icon-btn.is-tip",Ye.controls).forEach(t=>t.classList.remove("is-tip")),!0):!1}function qu(e){Ja.dataset.time=nt.time,Ye.timeBtn.textContent=nt.time==="night"?ri.toDusk:ri.toNight,xv(),zt?.setTime(nt.time,e)}function Yu(e,t){let i=hi(".tooltip",e);e.setAttribute("aria-disabled",t?"true":"false"),i.textContent=t?i.dataset.limit:e.getAttribute("aria-label"),t?e.setAttribute("aria-describedby",i.id):e.removeAttribute("aria-describedby")}function wv({atMin:e,atMax:t}){Yu(Ye.zoomIn,e),Yu(Ye.zoomOut,t)}function Tv(e){!zt||nt.mode!=="ready"||(e==="rotate-left"?zt.rotateStep(1):e==="rotate-right"?zt.rotateStep(-1):e==="zoom-in"?zt.zoomStep(1):e==="zoom-out"?zt.zoomStep(-1):e==="reset"&&$u())}function Ku(e,t){let i=document.createElement("button");return i.type="button",i.className=e,i.textContent=t,i}function Bn(){Ye.bannerRegion.replaceChildren()}function Zl({text:e,action:t,onAction:i}){let r=document.createElement("div");r.className="banner";let a=document.createElement("div");a.className="banner__body";let n=document.createElement("p");if(n.className="banner__text",n.textContent=e,a.append(n),t){let o=Ku("btn",t);o.addEventListener("click",i),a.append(o)}let s=Ku("icon-btn icon-btn--plain banner__close","");s.setAttribute("aria-label",ri.closeBanner),s.innerHTML='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',s.addEventListener("click",Bn),r.append(a,s),Ye.bannerRegion.replaceChildren(r)}var jl=0,Os=0;function ed(){clearTimeout(jl),jl=setTimeout(()=>{Ye.progress.textContent=ri.progress,Os=performance.now()},Yr.loadingDelay)}async function Jl(){if(clearTimeout(jl),Os){let e=Yr.loadingMin-(performance.now()-Os);e>0&&await Ju(e)}Ye.progress.textContent="",Os=0}function td(){Ye.poster.classList.remove("is-fading"),Ye.poster.hidden=!1}function id(){Ye.poster.classList.add("is-fading"),setTimeout(()=>{nt.mode==="ready"&&(Ye.poster.hidden=!0)},nt.reduced?0:Yr.crossfade)}function zs(e){Qa("fallback"),Jl(),td(),e?Zl({text:e}):Bn()}function Av(){Fn=!0,zs(null)}function Rv(){nt.mode==="loading"&&(Jl(),Zl({text:ri.slow,action:ri.slowAction,onAction:Av}))}function Cv(){Qa("lost"),td(),clearTimeout(Bs),Bs=setTimeout(()=>{Zl({text:ri.lost,action:ri.lostAction,onAction:Lv})},Yr.contextRestore)}function Pv(){clearTimeout(Bs),Bn(),Qa("ready"),id()}async function Lv(){Bn(),clearTimeout(Bs),zt?.dispose(),zt=null,Qa("loading"),ed();try{await ad()}catch(e){console.error(e),zs(ri.failed)}}function Nv(){try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}}function rd(){return!Zu.matches||Mi.poster?0:Ye.backdrop.getBoundingClientRect().right-Ye.scene.getBoundingClientRect().left}async function ad(){if(Vl=Vl||await Promise.resolve().then(()=>(ku(),Vu)),Fn)return;let e=await Vl.createScene({container:Ye.scene,labelLayer:Ye.labels,landmarks:ql,canvasLabel:t=>t==="night"?ri.altNight:ri.altDusk,getInsetLeft:rd,durations:Yr,time:nt.time,motion:nt.motion,reduced:nt.reduced,poster:!!Mi.poster,posterSize:Mi.size,avoid:[Ye.toggles,Ye.controls],quality:Mi.quality,onSelect:Wl,onZoomLimits:wv,onContextLost:Cv,onContextRestored:Pv});if(Fn){e.dispose();return}zt=e,window.cityNight={scene:zt,state:nt},await Jl(),Bn(),Qa("ready"),zt.setSelected(nt.selected),nt.selected&&zt.focus(nt.selected),id(),Mi.poster&&(Ja.dataset.posterReady="true"),Mi.state==="lost"&&!Wu&&(Wu=!0,setTimeout(()=>zt?.loseContextForTest(),800))}async function Dv(){if(window.cityNightBooted=!0,Ja.classList.add("js"),Qa("loading"),Mi.poster&&Ja.classList.add("is-poster"),Kl(),kl(),qu(!1),Xl(),Ye.posterImg.addEventListener("load",Xl),Xu.observe(Ye.scene),Xu.observe(Ye.backdrop),Mi.select&&Wl(Mi.select),Ye.landmarkButtons.forEach(t=>{t.addEventListener("click",()=>Wl(t.dataset.id))}),Ye.controls.addEventListener("click",t=>{if(t.target.closest(".tooltip"))return;let i=t.target.closest("[data-action]");if(i){if(i.getAttribute("aria-disabled")==="true"){let r=hi(".tooltip",i);i.classList.add("is-tip"),Yl(r.textContent),clearTimeout(i.tipTimer),i.tipTimer=setTimeout(()=>i.classList.remove("is-tip"),Yr.hintHold);return}Tv(i.dataset.action)}}),Ye.motionBtn.addEventListener("click",()=>{nt.motion=!nt.motion,kl()}),Ye.timeBtn.addEventListener("click",()=>{nt.time=nt.time==="night"?"dusk":"night",qu(!0)}),document.addEventListener("keydown",t=>{t.key!=="Escape"||t.defaultPrevented||bv()||$u()}),Ye.controls.addEventListener("pointerleave",()=>Ye.controls.classList.remove("is-tip-dismissed")),Ye.controls.addEventListener("focusin",()=>Ye.controls.classList.remove("is-tip-dismissed")),Fs.addEventListener("change",()=>{nt.reduced=Fs.matches,zt?.setReduced(nt.reduced),nt.reduced&&(nt.motion=!1,kl())}),Mi.state==="nowebgl"||!Nv()){zs(ri.failed);return}ed();let e=setTimeout(Rv,Yr.loadingSlow);try{if(Mi.state==="slow"&&await Ju(Yr.loadingSlow+3e4),Fn)return;await ad()}catch(t){console.error(t),Fn||zs(ri.failed)}finally{clearTimeout(e)}}Dv();})();
