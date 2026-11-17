/* 생성물 — tools/build-app.mjs 가 js/ 와 vendor/three 로 만든다. 직접 고치지 않는다. */
(()=>{var Jh=Object.defineProperty;var Ya=(e,t)=>()=>(e&&(t=e(e=0)),t);var Qh=(e,t)=>{for(var i in t)Jh(e,i,{get:t[i],enumerable:!0})};var _a,Fi,Ut,Ar,ur,yt,va,Ht,Ka=Ya(()=>{_a={medium:600,wide:1024},Fi={clear:{sky:12573164,keyLight:16774114},snow:{sky:13029337,keyLight:14476526}},Ut={snowCover:15265524,groomed:16317180,rock:7238780,forestFloor:10334886,valley:14936816,farPeak:14016230,tree:3037765,treeSnow:15922680,structure:15922422,accent:12075806,wood:8016437,jacketDark:2504269,flake:16777215,shadow:0},Ar={clear:{hemi:1.15,key:2.3,shadow:1,fogNear:40,fogFar:260,flakes:0},snow:{hemi:2.5,key:1,shadow:.35,fogNear:6,fogFar:150,flakes:.95}},ur={lift:60,easyRun:22,expertRun:11,autoRotate:90},yt={fov:35,elevationMin:12,elevationMax:65,startElevation:24,startAzimuth:20,stepRotate:30,stepZoom:.75,fitRadius:18.5,fitHeight:4,fitShare:.66,minDistance:10,maxDistanceFactor:1.6,groundClearance:1.2},va={wide:{width:2400,height:1400,refWidth:1056,refHeight:810},medium:{width:2e3,height:1120,refWidth:1e3,refHeight:800},narrow:{width:900,height:1170,refWidth:600,refHeight:780}},Ht={pixelRatioHigh:2,pixelRatioLow:1.5,terrainSegmentsHigh:88,terrainSegmentsLow:60,flakesHigh:2400,flakesLow:900,flakeMaxPx:7,shadowMapSize:2048,slowFrameMs:33,sampleWindowMs:2e3,warmupMs:1200}});function xa(e,t){let i=qn*(e/t),r=yt.fitRadius/(yt.fitShare*i),n=(yt.fitRadius*Math.sin(yt.startElevation*Ko)+yt.fitHeight)/(.86*qn);return Math.max(r,n)}function Yo(e,t){return e/2/qn/t}function Zo(e){let t=va[e];return xa(t.refWidth,t.refHeight)*(t.height/t.refHeight)}function Jo(e,t,i,r){let a=va[e],n=Yo(i,xa(t-r,i)),s=Yo(a.refHeight,xa(a.refWidth,a.refHeight)),o=n/s,l=a.width*o,c=a.height*o,h=(t+r)/2-l/2,p=i/2-c/2;return h<=0&&p<=0&&h+l>=t&&p+c>=i?{left:h,top:p,width:l,height:c}:null}var Ko,qn,Yn=Ya(()=>{Ka();Ko=Math.PI/180,qn=Math.tan(yt.fov/2*Ko)});function Nu(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Du(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fn(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Iu(){let e=Fn("canvas");return e.style.display="block",e}function ll(...e){let t="THREE."+e.shift();ea?ea("log",t,...e):console.log(t,...e)}function Tc(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Fe(...e){e=Tc(e);let t="THREE."+e.shift();if(ea)ea("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function Be(...e){e=Tc(e);let t="THREE."+e.shift();if(ea)ea("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Rn(...e){let t=e.join(" ");t in ol||(ol[t]=!0,Fe(...e))}function Uu(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}function Oa(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[e&255]+jt[e>>8&255]+jt[e>>16&255]+jt[e>>24&255]+"-"+jt[t&255]+jt[t>>8&255]+"-"+jt[t>>16&15|64]+jt[t>>24&255]+"-"+jt[i&63|128]+jt[i>>8&255]+"-"+jt[i>>16&255]+jt[i>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function et(e,t,i){return Math.max(t,Math.min(i,e))}function Fu(e,t){return(e%t+t)%t}function ts(e,t,i){return(1-i)*e+i*t}function Bu(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function bo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zu(e,t){if(t.constructor===Float32Array)return e;let i=bo(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/i,-1)}function Hu(e,t){if(t.constructor===Float32Array)return e;let i=bo(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*i)}function Gu(){let e={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===ot&&(a.r=ji(a.r),a.g=ji(a.g),a.b=ji(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ot&&(a.r=jr(a.r),a.g=jr(a.g),a.b=jr(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===rr?On:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[s].fromXYZ).multiply(this.spaces[n].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Un]:{primaries:t,whitePoint:r,transfer:On,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:ot,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),e}function ji(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function jr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}function as(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Vu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function ls(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}function gs(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){pr.fromArray(e,n);let o=a.x*Math.abs(pr.x)+a.y*Math.abs(pr.y)+a.z*Math.abs(pr.z),l=t.dot(pr),c=i.dot(pr),h=r.dot(pr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function sd(e,t,i,r,a,n,s,o){let l;if(t.side===ai?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===_r,o),l===null)return null;dn.copy(o),dn.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(dn);return c<i.near||c>i.far?null:{distance:c,point:dn.clone(),object:e}}function pn(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,ln),e.getVertexPosition(l,cn),e.getVertexPosition(c,hn);let h=sd(e,t,i,r,ln,cn,hn,yl);if(h){let p=new V;Sa.getBarycoord(yl,ln,cn,hn,p),a&&(h.uv=Sa.getInterpolatedAttribute(a,o,l,c,p,new it)),n&&(h.uv1=Sa.getInterpolatedAttribute(n,o,l,c,p,new it)),s&&(h.normal=Sa.getInterpolatedAttribute(s,o,l,c,p,new V),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};Sa.getNormal(ln,cn,hn,u.normal),h.face=u,h.barycoord=p}return h}function Rl(e,t,i,r,a,n,s){let o=fo.distanceSqToPoint(e);if(o<i){let l=new V;fo.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}function ra(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Cl(a))a.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Cl(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function ei(e){let t={};for(let i=0;i<e.length;i++){let r=ra(e[i]);for(let a in r)t[a]=r[a]}return t}function Cl(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function hd(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function Jc(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$e.workingColorSpace}function zr(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function vn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Qc(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Sd(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function yd(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Qc(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Sd(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}function Pl(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]+=t}function Ll(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}function Ol(e,t,i,r){let a=Vd(r);switch(i){case xc:return e*t;case So:return e*t/a.components*a.byteLength;case yo:return e*t/a.components*a.byteLength;case vr:return e*t*2/a.components*a.byteLength;case Eo:return e*t*2/a.components*a.byteLength;case Mc:return e*t*3/a.components*a.byteLength;case Ci:return e*t*4/a.components*a.byteLength;case To:return e*t*4/a.components*a.byteLength;case Tn:case bn:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wn:case An:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Us:case Fs:return Math.max(e,16)*Math.max(t,8)/4;case Is:case Os:return Math.max(e,8)*Math.max(t,8)/2;case Bs:case zs:case Gs:case Vs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Nn:case ks:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ws:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xs:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case js:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case qs:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ys:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ks:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Zs:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Js:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Qs:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case $s:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ro:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ao:case no:case so:return Math.ceil(e/4)*Math.ceil(t/4)*16;case oo:case lo:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Dn:case co:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Vd(e){switch(e){case oi:case mc:return{byteLength:1,components:1};case Da:case gc:case Ni:return{byteLength:2,components:1};case xo:case Mo:return{byteLength:2,components:4};case Li:case vo:case Si:return{byteLength:4,components:1};case _c:case vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}function nh(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function kd(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let _;if(c instanceof Float32Array)_=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)_=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?_=e.HALF_FLOAT:_=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=e.SHORT;else if(c instanceof Uint32Array)_=e.UNSIGNED_INT;else if(c instanceof Int32Array)_=e.INT;else if(c instanceof Int8Array)_=e.BYTE;else if(c instanceof Uint8Array)_=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function r(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((_,x)=>_.start-x.start);let u=0;for(let _=1;_<p.length;_++){let x=p[u],M=p[_];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,p[u]=M)}p.length=u+1;for(let _=0,x=p.length;_<x;_++){let M=p[_];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}function bm(e,t,i,r,a,n){let s=new Ge(0),o=a===!0?0:1,l,c,h=null,p=0,u=null;function _(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){let y=b.backgroundBlurriness>0;R=t.get(R,y)}return R}function x(b){let R=!1,y=_(b);y===null?g(s,o):y&&y.isColor&&(g(y,1),R=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,n):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||R)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(b,R){let y=_(R);y&&y.isCubeTexture?(c===void 0&&(c=new gt(new Ti(1,1,1),new xr({name:"BackgroundCubeMaterial",uniforms:ra(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,N,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sh),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==ot,(h!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gt(new Fa(2,2),new xr({name:"BackgroundMaterial",uniforms:ra(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=$e.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,R){b.getRGB(Sn,Jc(e)),i.buffers.color.setClear(Sn.r,Sn.g,Sn.b,R,n)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,R=1){s.set(b),o=R,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(s,o)},render:x,addToRenderList:M,dispose:f}}function wm(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(F,H,Y,I,k){let te=!1,W=p(F,I,Y,H);n!==W&&(n=W,c(n.object)),te=_(F,I,Y,k),te&&x(F,I,Y,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(te||s)&&(s=!1,y(F,H,Y,I),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(F){return e.bindVertexArray(F)}function h(F){return e.deleteVertexArray(F)}function p(F,H,Y,I){let k=I.wireframe===!0,te=r[H.id];te===void 0&&(te={},r[H.id]=te);let W=F.isInstancedMesh===!0?F.id:0,pe=te[W];pe===void 0&&(pe={},te[W]=pe);let q=pe[Y.id];q===void 0&&(q={},pe[Y.id]=q);let K=q[k];return K===void 0&&(K=u(l()),q[k]=K),K}function u(F){let H=[],Y=[],I=[];for(let k=0;k<i;k++)H[k]=0,Y[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:I,object:F,attributes:{},index:null}}function _(F,H,Y,I){let k=n.attributes,te=H.attributes,W=0,pe=Y.getAttributes();for(let q in pe)if(pe[q].location>=0){let K=k[q],ce=te[q];if(ce===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;W++}return n.attributesNum!==W||n.index!==I}function x(F,H,Y,I){let k={},te=H.attributes,W=0,pe=Y.getAttributes();for(let q in pe)if(pe[q].location>=0){let K=te[q];K===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));let ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),k[q]=ce,W++}n.attributes=k,n.attributesNum=W,n.index=I}function M(){let F=n.newAttributes;for(let H=0,Y=F.length;H<Y;H++)F[H]=0}function g(F){f(F,0)}function f(F,H){let Y=n.newAttributes,I=n.enabledAttributes,k=n.attributeDivisors;Y[F]=1,I[F]===0&&(e.enableVertexAttribArray(F),I[F]=1),k[F]!==H&&(e.vertexAttribDivisor(F,H),k[F]=H)}function b(){let F=n.newAttributes,H=n.enabledAttributes;for(let Y=0,I=H.length;Y<I;Y++)H[Y]!==F[Y]&&(e.disableVertexAttribArray(Y),H[Y]=0)}function R(F,H,Y,I,k,te,W){W===!0?e.vertexAttribIPointer(F,H,Y,k,te):e.vertexAttribPointer(F,H,Y,I,k,te)}function y(F,H,Y,I){M();let k=I.attributes,te=Y.getAttributes(),W=H.defaultAttributeValues;for(let pe in te){let q=te[pe];if(q.location>=0){let K=k[pe];if(K===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(K=F.instanceColor)),K!==void 0){let ce=K.normalized,De=K.itemSize,$=t.get(K);if($===void 0)continue;let he=$.buffer,Ee=$.type,Ae=$.bytesPerElement,Re=Ee===e.INT||Ee===e.UNSIGNED_INT||K.gpuType===vo;if(K.isInterleavedBufferAttribute){let fe=K.data,Xe=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,Qe=K.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let Ce=0;Ce<q.locationSize;Ce++)f(q.location+Ce,fe.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ce=0;Ce<q.locationSize;Ce++)g(q.location+Ce);e.bindBuffer(e.ARRAY_BUFFER,he);for(let Ce=0;Ce<q.locationSize;Ce++)R(q.location+Ce,De/q.locationSize,Ee,ce,Xe*Ae,(Qe+De/q.locationSize*Ce)*Ae,Re)}else{if(K.isInstancedBufferAttribute){for(let fe=0;fe<q.locationSize;fe++)f(q.location+fe,K.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let fe=0;fe<q.locationSize;fe++)g(q.location+fe);e.bindBuffer(e.ARRAY_BUFFER,he);for(let fe=0;fe<q.locationSize;fe++)R(q.location+fe,De/q.locationSize,Ee,ce,De*Ae,De/q.locationSize*fe*Ae,Re)}}else if(W!==void 0){let ce=W[pe];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(q.location,ce);break;case 3:e.vertexAttrib3fv(q.location,ce);break;case 4:e.vertexAttrib4fv(q.location,ce);break;default:e.vertexAttrib1fv(q.location,ce)}}}}b()}function w(){A();for(let F in r){let H=r[F];for(let Y in H){let I=H[Y];for(let k in I){let te=I[k];for(let W in te)h(te[W].object),delete te[W];delete I[k]}}delete r[F]}}function N(F){if(r[F.id]===void 0)return;let H=r[F.id];for(let Y in H){let I=H[Y];for(let k in I){let te=I[k];for(let W in te)h(te[W].object),delete te[W];delete I[k]}}delete r[F.id]}function m(F){for(let H in r){let Y=r[H];for(let I in Y){let k=Y[I];if(k[F.id]===void 0)continue;let te=k[F.id];for(let W in te)h(te[W].object),delete te[W];delete k[F.id]}}}function S(F){for(let H in r){let Y=r[H],I=F.isInstancedMesh===!0?F.id:0,k=Y[I];if(k!==void 0){for(let te in k){let W=k[te];for(let pe in W)h(W[pe].object),delete W[pe];delete k[te]}delete Y[I],Object.keys(Y).length===0&&delete r[H]}}}function A(){z(),s=!0,n!==a&&(n=a,c(n.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:A,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:N,releaseStatesOfObject:S,releaseStatesOfProgram:m,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function Am(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let p=0;for(let u=0;u<h;u++)p+=c[u];i.update(p,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Rm(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(m){return!(m!==Ci&&r.convert(m)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let S=m===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==oi&&m!==Si&&!S&&r.convert(m)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(m){if(m==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.logarithmicDepthBuffer===!0&&p===!1;i.reversedDepthBuffer===!0&&p===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&p===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let _=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),N=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:_,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:y,maxSamples:w,samples:N}}function Cm(e){let t=this,i=null,r=0,a=!1,n=!1,s=new ir,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let _=p.length!==0||u||r!==0||a;return a=u,r=p.length,_},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(p,u){i=h(p,u,0)},this.setState=function(p,u,_){let x=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!a||x===null||x.length===0||n&&!g)n?h(null):c();else{let b=n?0:r,R=b*4,y=f.clippingState||null;l.value=y,y=h(x,u,R,_);for(let w=0;w!==R;++w)y[w]=i[w];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(p,u,_,x){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,x!==!0||g===null){let f=_+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let R=0,y=_;R!==M;++R,y+=4)s.copy(p[R]).applyMatrix4(b,o),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}function zl(e,t,i){return new No(e,{minFilter:ar,generateMipmaps:t,type:Ni,colorSpace:Un,depthBuffer:i})}function Ga(e,t,i){return new xr({name:e,uniforms:t,vertexShader:Ye.cube_vert,fragmentShader:i,side:ai,blending:Xr,depthTest:!1,depthWrite:!1})}function Um(){return Ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${oh}u

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
	`)}function Om(){return Ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lh}},`

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
	`)}function Fm(){return Ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Lm}
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
	`)}function Hl(){return Ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gl(){return Ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Bm(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,_=!1){return u==null?null:_?s(u):n(u)}function n(u){if(u&&u.isTexture){let _=u.mapping;if(_===Kn||_===Zn)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new No(x.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let _=u.mapping,x=_===Kn||_===Zn,M=_===Qr||_===Na;if(x||M){let g=i.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Bl(e)),g=x?r.fromEquirectangular(u,g):r.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return x&&b&&b.height>0||M&&b&&l(b)?(r===null&&(r=new Bl(e)),g=x?r.fromEquirectangular(u):r.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,i.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,_){return _===Kn?u.mapping=Qr:_===Zn&&(u.mapping=Na),u}function l(u){let _=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&_++;return _===x}function c(u){let _=u.target;_.removeEventListener("dispose",c);let x=t.get(_);x!==void 0&&(t.delete(_),x.dispose())}function h(u){let _=u.target;_.removeEventListener("dispose",h);let x=i.get(_);x!==void 0&&(i.delete(_),x.dispose())}function p(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:p}}function zm(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Rn("WebGLRenderer: "+r+" extension not supported."),a}}}function Hm(e,t,i,r){let a={},n=new WeakMap,s=new FinalizationRegistry(x=>delete a[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete a[x.id],s.unregister(x);let M=n.get(x);M&&(t.remove(M),n.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function c(x,M){return a[M.id]!==void 0||(M.addEventListener("dispose",o),a[M.id]=new WeakRef(M),s.register(M,M.id,M),i.memory.geometries++),M}function h(x){let M=x.attributes;for(let g in M)t.update(M[g],e.ARRAY_BUFFER)}function p(x){let M=x.index,g=x.attributes.position,f=0;if(g===void 0)return;let b=M!==null?M.array.length:g.array.length/3-1,R=g.count>=65535?Dc:Nc,y=new R(Math.ceil(b/3)*6,1),w=y.array;if(M!==null){let m=M.array;f=M.version;for(let S=0,A=0;S<b;S+=3){let z=m[S+0],F=m[S+1],H=m[S+2];w[A++]=z,w[A++]=F,w[A++]=F,w[A++]=H,w[A++]=H,w[A++]=z}}else{f=g.version;for(let m=0,S=0;m<b;m+=3){let A=m+0,z=m+1,F=m+2;w[S++]=A,w[S++]=z,w[S++]=z,w[S++]=F,w[S++]=F,w[S++]=A}}y.version=f;let N=n.get(x);N&&t.remove(N),n.set(x,y)}function u(x){let M=n.get(x);if(M){let g=x.index;g!==null&&M.version<g.version&&p(x)}else p(x);return n.get(x)}function _(){for(let x in a){let M=a[x].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:_}}function Gm(e,t,i){let r;function a(p){r=p}let n,s;function o(p){n=p.type,s=p.bytesPerElement}function l(p,u){e.drawElements(r,u,n,p*s),i.update(u,r,1)}function c(p,u,_){_!==0&&(e.drawElementsInstanced(r,u,n,p*s,_),i.update(u,r,_))}function h(p,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,p,0,_);let x=0;for(let M=0;M<_;M++)x+=u[M];i.update(x,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Vm(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:Be("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function km(e,t,i){let r=new WeakMap,a=new Tt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==p){let _=function(){S.dispose(),r.delete(o),o.removeEventListener("dispose",_)};u!==void 0&&u.texture.dispose();let x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],y=0;x===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let m=new Float32Array(w*N*4*p),S=new bc(m,w,N,p);S.type=Si,S.needsUpdate=!0;let A=y*4;for(let z=0;z<p;z++){let F=f[z],H=b[z],Y=R[z],I=w*N*4*z;for(let k=0;k<F.count;k++){let te=k*A;x===!0&&(a.fromBufferAttribute(F,k),m[I+te+0]=a.x,m[I+te+1]=a.y,m[I+te+2]=a.z,m[I+te+3]=0),M===!0&&(a.fromBufferAttribute(H,k),m[I+te+4]=a.x,m[I+te+5]=a.y,m[I+te+6]=a.z,m[I+te+7]=0),g===!0&&(a.fromBufferAttribute(Y,k),m[I+te+8]=a.x,m[I+te+9]=a.y,m[I+te+10]=a.z,m[I+te+11]=Y.itemSize===4?a.w:1)}}u={count:p,texture:S,size:new it(w,N)},r.set(o,u),o.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let _=0;for(let M=0;M<c.length;M++)_+=c[M];let x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Wm(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,p=c.geometry,u=t.get(c,p);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let _=c.skeleton;n.get(_)!==h&&(_.update(),n.set(_,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}function jm(e,t,i,r,a,n){let s=new Pi(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ei;h.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new bt([0,2,0,0,2,0],2));let p=new fd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new gt(h,p),_=new rh(-1,1,1,-1,0,1),x=null,M=null,g=!1,f,b=null,R=[],y=!1;this.setSize=function(w,N){s.setSize(w,N),o!==null&&o.setSize(w,N),l!==null&&l.setSize(w,N);for(let m=0;m<R.length;m++){let S=R[m];S.setSize&&S.setSize(w,N)}},this.setEffects=function(w){R=w,y=R.length>0&&R[0].isRenderPass===!0;let N=s.width,m=s.height;R.length>0&&o===null&&(o=new Pi(N,m,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new Pi(N,m,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));let S=a===!0&&R.some(A=>A.needsDepthTexture===!0);S!==(s.depthTexture!==null)&&(S===!0&&c===null&&(c=new ia(N,m),n===!0&&(c.format=nr,c.type=$r)),s.dispose(),s.depthTexture=S?c:null,s.resolveDepthBuffer=S,s.storeMultisampledDepthBuffer=S);for(let A=0;A<R.length;A++){let z=R[A];z.setSize&&z.setSize(N,m),S&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(c)}},this.begin=function(w,N){if(g||w.toneMapping===Xi&&R.length===0)return!1;if(b=N,N!==null){let m=N.width,S=N.height;(s.width!==m||s.height!==S)&&this.setSize(m,S)}return y===!1&&w.setRenderTarget(s),f=w.toneMapping,w.toneMapping=Xi,!0},this.hasRenderPass=function(){return y},this.end=function(w,N){w.toneMapping=f,g=!0;let m=s,S=o;for(let A=0;A<R.length;A++){let z=R[A];z.enabled!==!1&&(z.render(w,S,m,N),z.needsSwap!==!1&&(m=S,S=S===o?l:o))}if(x!==w.outputColorSpace||M!==w.toneMapping){x=w.outputColorSpace,M=w.toneMapping,p.defines={},$e.getTransfer(x)===ot&&(p.defines.SRGB_TRANSFER="");let A=Xm[M];A&&(p.defines[A]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(b),w.render(u,_),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}function oa(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=Vl[a];if(n===void 0&&(n=new Float32Array(a),Vl[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Nt(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function Dt(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function Bn(e,t){let i=kl[t];i===void 0&&(i=new Int32Array(t),kl[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function qm(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function Ym(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nt(i,t))return;e.uniform2fv(this.addr,t),Dt(i,t)}}function Km(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Nt(i,t))return;e.uniform3fv(this.addr,t),Dt(i,t)}}function Zm(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nt(i,t))return;e.uniform4fv(this.addr,t),Dt(i,t)}}function Jm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Nt(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dt(i,t)}else{if(Nt(i,r))return;jl.set(r),e.uniformMatrix2fv(this.addr,!1,jl),Dt(i,r)}}function Qm(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Nt(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dt(i,t)}else{if(Nt(i,r))return;Xl.set(r),e.uniformMatrix3fv(this.addr,!1,Xl),Dt(i,r)}}function $m(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Nt(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dt(i,t)}else{if(Nt(i,r))return;Wl.set(r),e.uniformMatrix4fv(this.addr,!1,Wl),Dt(i,r)}}function eg(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function tg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nt(i,t))return;e.uniform2iv(this.addr,t),Dt(i,t)}}function ig(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nt(i,t))return;e.uniform3iv(this.addr,t),Dt(i,t)}}function rg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nt(i,t))return;e.uniform4iv(this.addr,t),Dt(i,t)}}function ag(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function ng(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Nt(i,t))return;e.uniform2uiv(this.addr,t),Dt(i,t)}}function sg(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Nt(i,t))return;e.uniform3uiv(this.addr,t),Dt(i,t)}}function og(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Nt(i,t))return;e.uniform4uiv(this.addr,t),Dt(i,t)}}function zn(e){return e.version===0&&(e.compareFunction=Ec,e.needsUpdate=!0),e}function lg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?n=zn(uh):n=hh,i.setTexture2D(t||n,a)}function cg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||fh,a)}function hg(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_CUBE_SHADOW?n=zn(dh):n=mh,i.setTextureCube(t||n,a)}function ug(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||ph,a)}function dg(e){switch(e){case 5126:return qm;case 35664:return Ym;case 35665:return Km;case 35666:return Zm;case 35674:return Jm;case 35675:return Qm;case 35676:return $m;case 5124:case 35670:return eg;case 35667:case 35671:return tg;case 35668:case 35672:return ig;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return ng;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function pg(e,t){e.uniform1fv(this.addr,t)}function fg(e,t){let i=oa(t,this.size,2);e.uniform2fv(this.addr,i)}function mg(e,t){let i=oa(t,this.size,3);e.uniform3fv(this.addr,i)}function gg(e,t){let i=oa(t,this.size,4);e.uniform4fv(this.addr,i)}function _g(e,t){let i=oa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function vg(e,t){let i=oa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function xg(e,t){let i=oa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function Mg(e,t){e.uniform1iv(this.addr,t)}function Sg(e,t){e.uniform2iv(this.addr,t)}function yg(e,t){e.uniform3iv(this.addr,t)}function Eg(e,t){e.uniform4iv(this.addr,t)}function Tg(e,t){e.uniform1uiv(this.addr,t)}function bg(e,t){e.uniform2uiv(this.addr,t)}function wg(e,t){e.uniform3uiv(this.addr,t)}function Ag(e,t){e.uniform4uiv(this.addr,t)}function Rg(e,t,i){let r=this.cache,a=t.length,n=Bn(i,a);Nt(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=zn(uh):s=hh;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function Cg(e,t,i){let r=this.cache,a=t.length,n=Bn(i,a);Nt(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||fh,n[s])}function Pg(e,t,i){let r=this.cache,a=t.length,n=Bn(i,a);Nt(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));let s;this.type===e.SAMPLER_CUBE_SHADOW?s=zn(dh):s=mh;for(let o=0;o!==a;++o)i.setTextureCube(t[o]||s,n[o])}function Lg(e,t,i){let r=this.cache,a=t.length,n=Bn(i,a);Nt(r,n)||(e.uniform1iv(this.addr,n),Dt(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||ph,n[s])}function Ng(e){switch(e){case 5126:return pg;case 35664:return fg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return xg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return yg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return bg;case 36295:return wg;case 36296:return Ag;case 35678:case 36198:case 36298:case 36306:case 35682:return Rg;case 35679:case 36299:case 36307:return Cg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Lg}}function ql(e,t){e.seq.push(t),e.map[t.id]=t}function Og(e,t,i){let r=e.name,a=r.length;for(Es.lastIndex=0;;){let n=Es.exec(r),s=Es.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){ql(i,c===void 0?new Dg(o,e,t):new Ig(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new Ug(o),ql(i,h)),i=h}}}function Yl(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}function zg(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}function Hg(e){$e._getMatrix(Kl,$e.workingColorSpace,e);let t=`mat3( ${Kl.elements.map(i=>i.toFixed(4))} )`;switch($e.getTransfer(e)){case On:return[t,"LinearTransferOETF"];case ot:return[t,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Zl(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+zg(e.getShaderSource(t),s)}else return a}function Gg(e,t){let i=Hg(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function kg(e,t){let i=Vg[t];return i===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Wg(){$e.getLuminanceCoefficients(yn);let e=yn.x.toFixed(4),t=yn.y.toFixed(4),i=yn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function jg(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function qg(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function Ca(e){return e!==""}function Jl(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ql(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function go(e){return e.replace(Yg,Kg)}function Kg(e,t){let i=Ye[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return go(i)}function $l(e){return e.replace(Zg,Jg)}function Jg(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function ec(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function $g(e){return Qg[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function t_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":e_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}function r_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":i_[e.combine]||"ENVMAP_BLENDING_NONE"}function a_(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=$g(i),c=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=t_(i),p=r_(i),u=Xg(i),_=jg(n),x=a.createProgram(),M,g,f=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ca).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_].filter(Ca).join(`
`),g.length>0&&(g+=`
`)):(M=[ec(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),g=[ec(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,_,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+p:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?Ye.tonemapping_pars_fragment:"",i.toneMapping!==Xi?kg("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Gg("linearToOutputTexel",i.outputColorSpace),Wg(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ca).join(`
`)),s=go(s),s=Jl(s,i),s=Ql(s,i),o=go(o),o=Jl(o,i),o=Ql(o,i),s=$l(s),o=$l(o),i.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=f+M+s,R=f+g+o,y=Yl(a,a.VERTEX_SHADER,b),w=Yl(a,a.FRAGMENT_SHADER,R);a.attachShader(x,y),a.attachShader(x,w),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function N(z){if(e.debug.checkShaderErrors){let F=a.getProgramInfoLog(x)||"",H=a.getShaderInfoLog(y)||"",Y=a.getShaderInfoLog(w)||"",I=F.trim(),k=H.trim(),te=Y.trim(),W=!0,pe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(W=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,y,w);else{let q=Zl(a,y,"vertex"),K=Zl(a,w,"fragment");Be("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+I+`
`+q+`
`+K)}else I!==""?Fe("WebGLProgram: Program Info Log:",I):(k===""||te==="")&&(pe=!1);pe&&(z.diagnostics={runnable:W,programLog:I,vertexShader:{log:k,prefix:M},fragmentShader:{log:te,prefix:g}})}a.deleteShader(y),a.deleteShader(w),m=new Ln(a,x),S=qg(a,x)}let m;this.getUniforms=function(){return m===void 0&&N(this),m};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(x,Fg)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}function l_(e){return e===vr||e===Nn||e===Dn}function c_(e,t,i,r,a,n){let s=new Ac,o=new s_,l=new Set,c=[],h=new Map,p=r.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return l.add(m),m===0?"uv":`uv${m}`}function x(m,S,A,z,F,H){let Y=z.fog,I=F.geometry,k=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?z.environment:null,te=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,W=t.get(m.envMap||k,te),pe=u[m.type],q=r.precision;m.precision!==null&&(q=r.getMaxPrecision(m.precision),q!==m.precision&&Fe("WebGLProgram.getParameters:",m.precision,"not supported, using",q,"instead."));let K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ce=K!==void 0?K.length:0,De=0;I.morphAttributes.position!==void 0&&(De=1),I.morphAttributes.normal!==void 0&&(De=2),I.morphAttributes.color!==void 0&&(De=3);let $,he,Ee,Ae;if(pe){let Me=Ri[pe];$=Me.vertexShader,he=Me.fragmentShader}else{$=m.vertexShader,he=m.fragmentShader;let Me=o.getVertexShaderStage(m),lt=o.getFragmentShaderStage(m);o.update(m,Me,lt),Ee=Me.id,Ae=lt.id}let Re=e.getRenderTarget(),fe=e.state.buffers.depth.getReversed(),Xe=F.isInstancedMesh===!0,Qe=F.isBatchedMesh===!0,Ce=!!m.map,Pt=!!m.matcap,Ft=!!W,ft=Ft&&W.isPMREMTexture===!0,dt=!!m.aoMap,Wt=!!m.lightMap,Qt=!!m.bumpMap&&m.wireframe===!1,_t=!!m.normalMap,st=!!m.displacementMap,It=!!m.emissiveMap,Xt=!!m.metalnessMap,ii=!!m.roughnessMap,B=m.anisotropy>0,$t=m.clearcoat>0,Te=m.diffuseRoughness>0,vt=m.dispersion>0,ve=m.retroreflectivity>0,nt=m.iridescence>0,Le=m.sheen>0,Ue=m.transmission>0,At=B&&!!m.anisotropyMap,E=$t&&!!m.clearcoatMap,v=$t&&!!m.clearcoatNormalMap,G=$t&&!!m.clearcoatRoughnessMap,se=Te&&!!m.diffuseRoughnessMap,Q=nt&&!!m.iridescenceMap,_e=nt&&!!m.iridescenceThicknessMap,de=Le&&!!m.sheenColorMap,U=Le&&!!m.sheenRoughnessMap,re=!!m.specularMap,xe=!!m.specularColorMap,L=!!m.specularIntensityMap,X=Ue&&!!m.transmissionMap,ae=Ue&&!!m.thicknessMap,oe=!!m.gradientMap,me=!!m.alphaMap,ge=m.alphaTest>0,Pe=!!m.alphaHash,le=!!m.extensions,He=Xi;m.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(He=e.toneMapping);let Ne=ft?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Ve={shaderID:pe,shaderType:m.type,shaderName:m.name,vertexShader:$,fragmentShader:he,defines:m.defines,customVertexShaderID:Ee,customFragmentShaderID:Ae,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:q,batching:Qe,batchingColor:Qe&&F._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&F.instanceColor!==null,instancingMorph:Xe&&F.morphTexture!==null,outputColorSpace:Re===null?e.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:Ce,matcap:Pt,envMap:Ft,envMapMode:Ft&&W.mapping,envMapPMREM:ft,envMapMaxLod:ft?Ne.length-1:null,envMapSize:ft?Ne[0].width:null,aoMap:dt,lightMap:Wt,bumpMap:Qt,normalMap:_t,displacementMap:st,emissiveMap:It,normalMapObjectSpace:_t&&m.normalMapType===Tu,normalMapTangentSpace:_t&&m.normalMapType===uo,packedNormalMap:_t&&m.normalMapType===uo&&l_(m.normalMap.format),metalnessMap:Xt,roughnessMap:ii,anisotropy:B,anisotropyMap:At,clearcoat:$t,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:Te,diffuseRoughnessMap:se,dispersion:vt,retroreflection:ve,iridescence:nt,iridescenceMap:Q,iridescenceThicknessMap:_e,sheen:Le,sheenColorMap:de,sheenRoughnessMap:U,specularMap:re,specularColorMap:xe,specularIntensityMap:L,transmission:Ue,transmissionMap:X,thicknessMap:ae,gradientMap:oe,opaque:m.transparent===!1&&m.blending===Pa&&m.alphaToCoverage===!1,alphaMap:me,alphaTest:ge,alphaHash:Pe,combine:m.combine,mapUv:Ce&&_(m.map.channel),aoMapUv:dt&&_(m.aoMap.channel),lightMapUv:Wt&&_(m.lightMap.channel),bumpMapUv:Qt&&_(m.bumpMap.channel),normalMapUv:_t&&_(m.normalMap.channel),displacementMapUv:st&&_(m.displacementMap.channel),emissiveMapUv:It&&_(m.emissiveMap.channel),metalnessMapUv:Xt&&_(m.metalnessMap.channel),roughnessMapUv:ii&&_(m.roughnessMap.channel),anisotropyMapUv:At&&_(m.anisotropyMap.channel),clearcoatMapUv:E&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:v&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&_(m.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:U&&_(m.sheenRoughnessMap.channel),specularMapUv:re&&_(m.specularMap.channel),specularColorMapUv:xe&&_(m.specularColorMap.channel),specularIntensityMapUv:L&&_(m.specularIntensityMap.channel),transmissionMapUv:X&&_(m.transmissionMap.channel),thicknessMapUv:ae&&_(m.thicknessMap.channel),alphaMapUv:me&&_(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_t||B),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Ce||me),fog:!!Y,useFog:m.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&_t===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:fe,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:De,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:H.filter(Me=>Me.texture!==null).length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:He,decodeVideoTexture:Ce&&m.map.isVideoTexture===!0&&$e.getTransfer(m.map.colorSpace)===ot,decodeVideoTextureEmissive:It&&m.emissiveMap.isVideoTexture===!0&&$e.getTransfer(m.emissiveMap.colorSpace)===ot,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===ki,flipSided:m.side===ai,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:le&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&m.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function M(m){let S=[];if(m.shaderID?S.push(m.shaderID):(S.push(m.customVertexShaderID),S.push(m.customFragmentShaderID)),m.defines!==void 0)for(let A in m.defines)S.push(A),S.push(m.defines[A]);return m.isRawShaderMaterial===!1&&(g(S,m),f(S,m),S.push(e.outputColorSpace)),S.push(m.customProgramCacheKey),S.join()}function g(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapPMREM),m.push(S.envMapMaxLod),m.push(S.envMapSize),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.diffuseRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.numSunLights),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numSunLightShadows),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.numLightProbeGrids),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}function f(m,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.retroreflection&&s.enable(24),S.diffuseRoughness&&s.enable(25),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),S.packedNormalMap&&s.enable(22),S.vertexNormals&&s.enable(23),m.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),S.numLightProbeGrids>0&&s.enable(22),S.hasPositionAttribute&&s.enable(23),m.push(s.mask)}function b(m){let S=u[m.type],A;if(S){let z=Ri[S];A=ud.clone(z.uniforms)}else A=m.uniforms;return A}function R(m,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new a_(e,S,m,a),c.push(A),h.set(S,A)),A}function y(m){if(--m.usedTimes===0){let S=c.indexOf(m);c[S]=c[c.length-1],c.pop(),h.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function N(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:b,acquireProgram:R,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:N}}function h_(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function u_(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function tc(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function ic(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let _=0;return u.isInstancedMesh&&(_+=2),u.isSkinnedMesh&&(_+=1),_}function o(u,_,x,M,g,f){let b=e[t];return b===void 0?(b={id:u.id,object:u,geometry:_,material:x,materialVariant:s(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:f},e[t]=b):(b.id=u.id,b.object=u,b.geometry=_,b.material=x,b.materialVariant=s(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=g,b.group=f),t++,b}function l(u,_,x,M,g,f,b){b.reversedDepth===!0&&(g=-g);let R=o(u,_,x,M,g,f);x.transmission>0?r.push(R):x.transparent===!0?a.push(R):i.push(R)}function c(u,_,x,M,g,f){let b=o(u,_,x,M,g,f);x.transmission>0?r.unshift(b):x.transparent===!0?a.unshift(b):i.unshift(b)}function h(u,_){i.length>1&&i.sort(u||u_),r.length>1&&r.sort(_||tc),a.length>1&&a.sort(_||tc)}function p(){for(let u=t,_=e.length;u<_;u++){let x=e[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:p,sort:h}}function d_(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new ic,e.set(r,[s])):a>=n.length?(s=new ic,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function p_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new V,color:new Ge};break;case"SpotLight":i={position:new V,direction:new V,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":i={color:new Ge,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=i,i}}}function f_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}function g_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function __(e){let t=new p_,i=f_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new V);let a=new V,n=new pt,s=new pt;function o(c){let h=0,p=0,u=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let _=0,x=0,M=0,g=0,f=0,b=0,R=0,y=0,w=0,N=0,m=0,S=0,A=0,z=0;c.sort(g_);for(let H=0,Y=c.length;H<Y;H++){let I=c[H],k=I.color,te=I.intensity,W=I.distance,pe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===vr?pe=I.shadow.map.texture:pe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*te,p+=k.g*te,u+=k.b*te;else if(I.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(I.sh.coefficients[q],te);z++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ce=i.get(I);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[x]=ce,r.sunShadowMap[x]=pe;let De=K.getViewportCount();for(let $=0;$<De;$++)r.sunShadowMatrix[M+$]=K.getMatrix($),r.sunShadowCascade[M+$]=K._cascadeData[$];M+=De,x++}r.sun[_]=q,_++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let K=I.shadow,ce=i.get(I);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize=K.mapSize,r.directionalShadow[g]=ce,r.directionalShadowMap[g]=pe,r.directionalShadowMatrix[g]=I.shadow.matrix,w++}r.directional[g]=q,g++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(te),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,r.spot[b]=q;let K=I.shadow;if(I.map&&(r.spotLightMap[S]=I.map,S++,K.updateMatrices(I),I.castShadow&&A++),r.spotLightMatrix[b]=K.matrix,I.castShadow){let ce=i.get(I);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize=K.mapSize,r.spotShadow[b]=ce,r.spotShadowMap[b]=pe,m++}b++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(k).multiplyScalar(te),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),r.rectArea[R]=q,R++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let K=I.shadow,ce=i.get(I);ce.shadowIntensity=K.intensity,ce.shadowBias=K.bias,ce.shadowNormalBias=K.normalBias,ce.shadowRadius=K.radius,ce.shadowMapSize=K.mapSize,ce.shadowCameraNear=K.camera.near,ce.shadowCameraFar=K.camera.far,r.pointShadow[f]=ce,r.pointShadowMap[f]=pe,r.pointShadowMatrix[f]=I.shadow.matrix,N++}r.point[f]=q,f++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(te),q.groundColor.copy(I.groundColor).multiplyScalar(te),r.hemi[y]=q,y++}}R>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=u;let F=r.hash;(F.sunLength!==_||F.directionalLength!==g||F.pointLength!==f||F.spotLength!==b||F.rectAreaLength!==R||F.hemiLength!==y||F.numSunShadows!==x||F.numDirectionalShadows!==w||F.numPointShadows!==N||F.numSpotShadows!==m||F.numSpotMaps!==S||F.numLightProbes!==z)&&(r.sun.length=_,r.directional.length=g,r.spot.length=b,r.rectArea.length=R,r.point.length=f,r.hemi.length=y,r.sunShadow.length=x,r.sunShadowMap.length=x,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.directionalShadowMatrix.length=w,r.pointShadow.length=N,r.pointShadowMap.length=N,r.pointShadowMatrix.length=N,r.spotShadow.length=m,r.spotShadowMap.length=m,r.spotLightMatrix.length=m+S-A,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=z,F.sunLength=_,F.directionalLength=g,F.pointLength=f,F.spotLength=b,F.rectAreaLength=R,F.hemiLength=y,F.numSunShadows=x,F.numDirectionalShadows=w,F.numPointShadows=N,F.numSpotShadows=m,F.numSpotMaps=S,F.numLightProbes=z,r.version=m_++)}function l(c,h){let p=0,u=0,_=0,x=0,M=0,g=0,f=h.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){let y=c[b];if(y.isSunLight){let w=r.sun[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),p++}else if(y.isDirectionalLight){let w=r.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(f),u++}else if(y.isSpotLight){let w=r.spot[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(f),x++}else if(y.isRectAreaLight){let w=r.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),s.identity(),n.copy(y.matrixWorld),n.premultiply(f),s.extractRotation(n),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),M++}else if(y.isPointLight){let w=r.point[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),_++}else if(y.isHemisphereLight){let w=r.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:r}}function rc(e){let t=new __(e),i=[],r=[],a=[];function n(p){h.camera=p,i.length=0,r.length=0,a.length=0}function s(p){p.isLightProbeGrid?a.push(p):i.push(p)}function o(p){r.push(p)}function l(){t.setup(i),a.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(i,p)}let h={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:h,setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function v_(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new rc(e),t.set(a,[o])):n>=s.length?(o=new rc(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}function E_(e,t,i){let r=new Ua,a=new it,n=new it,s=new Tt,o=new md,l=new gd,c={},h=i.maxTextureSize,p={[_r]:ai,[ai]:_r,[ki]:ki},u=new xr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:x_,fragmentShader:M_}),_=u.clone();_.defines.HORIZONTAL_PASS=1;let x=new Ei;x.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new gt(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=En;let f=this.type;this.render=function(N,m,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;this.type===tu&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=En);let A=e.getRenderTarget(),z=e.getActiveCubeFace(),F=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Xr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=f!==this.type;Y&&m.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=N.length;I<k;I++){let te=N[I],W=te.shadow;if(W===void 0){Fe("WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);let pe=W.getFrameExtents();a.multiply(pe),n.copy(W.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/pe.x),a.x=n.x*pe.x,W.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/pe.y),a.y=n.y*pe.y,W.mapSize.y=n.y));let q=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||Y===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ra){if(te.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Pi(a.x,a.y,{format:vr,type:Ni,minFilter:ri,magFilter:ri,generateMipmaps:!1}),W.map.texture.name=te.name+".shadowMap",W.map.depthTexture=new ia(a.x,a.y,Si),W.map.depthTexture.name=te.name+".shadowMapDepth",W.map.depthTexture.format=or,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt}else te.isPointLight?(W.map=new No(a.x),W.map.depthTexture=new Gc(a.x,Li)):(W.map=new Pi(a.x,a.y),W.map.depthTexture=new ia(a.x,a.y,Li)),W.map.depthTexture.name=te.name+".shadowMap",W.map.depthTexture.format=or,this.type===En?(W.map.depthTexture.compareFunction=q?yc:Sc,W.map.depthTexture.minFilter=ri,W.map.depthTexture.magFilter=ri):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==a.x||W.map.height!==a.y)&&W.map.setSize(a.x,a.y);let K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();te.isPointLight!==!0&&W.updateMatrices(te,S);let ce=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let De=0;De<K;De++){let $=W.getCamera(De);if(te.isPointLight){let he=W.camera,Ee=W.matrix,Ae=te.distance||he.far;Ae!==he.far&&(he.far=Ae,he.updateProjectionMatrix()),Aa.setFromMatrixPosition(te.matrixWorld),he.position.copy(Aa),Ts.copy(he.position),Ts.add(S_[De]),he.up.copy(y_[De]),he.lookAt(Ts),he.updateMatrixWorld(),Ee.makeTranslation(-Aa.x,-Aa.y,-Aa.z),ac.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ac,he.coordinateSystem,he.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,De),e.clear();else{De===0&&(e.setRenderTarget(W.map),e.clear());let he=W.getViewport(De);s.set(n.x*he.x,n.y*he.y,n.x*he.z,n.y*he.w),H.viewport(s)}r=W.getFrustum(De),y(m,S,$,te,ce,this.type)}W.isPointLightShadow!==!0&&this.type===Ra&&b(W,S),W.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(A,z,F)};function b(N,m){let S=t.update(M);u.defines.VSM_SAMPLES!==N.blurSamples&&(u.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,u.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null?N.mapPass=new Pi(a.x,a.y,{format:vr,type:Ni}):(N.mapPass.width!==N.map.width||N.mapPass.height!==N.map.height)&&N.mapPass.setSize(N.map.width,N.map.height),u.uniforms.shadow_pass.value=N.map.depthTexture,u.uniforms.resolution.value.set(N.map.width,N.map.height),u.uniforms.radius.value=N.radius,e.setRenderTarget(N.mapPass),e.clear(),e.renderBufferDirect(m,null,S,u,M,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value.set(N.map.width,N.map.height),_.uniforms.radius.value=N.radius,e.setRenderTarget(N.map),e.clear(),e.renderBufferDirect(m,null,S,_,M,null)}function R(N,m,S,A){let z=null,F=S.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(F!==void 0)z=F;else if(z=S.isPointLight===!0?l:o,e.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let H=z.uuid,Y=m.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let k=I[Y];k===void 0&&(k=z.clone(),I[Y]=k,m.addEventListener("dispose",w)),z=k}if(z.visible=m.visible,z.wireframe=m.wireframe,A===Ra?z.side=m.shadowSide!==null?m.shadowSide:m.side:z.side=m.shadowSide!==null?m.shadowSide:p[m.side],z.alphaMap=m.alphaMap,z.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,z.map=m.map,z.clipShadows=m.clipShadows,z.clippingPlanes=m.clippingPlanes,z.clipIntersection=m.clipIntersection,z.displacementMap=m.displacementMap,z.displacementScale=m.displacementScale,z.displacementBias=m.displacementBias,z.wireframeLinewidth=m.wireframeLinewidth,z.linewidth=m.linewidth,S.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let H=e.properties.get(z);H.light=S}return z}function y(N,m,S,A,z,F){if(N.visible===!1)return;if(N.layers.test(z)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&F===Ra)&&(!N.frustumCulled||N.intersectsFrustum(r))){N.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,N.matrixWorld);let Y=t.update(N),I=N.material;if(Array.isArray(I)){let k=Y.groups;for(let te=0,W=k.length;te<W;te++){let pe=k[te],q=I[pe.materialIndex];if(q&&q.visible){let K=R(N,q,A,F);N.onBeforeShadow(e,N,m,S,Y,K,pe),e.renderBufferDirect(S,null,Y,K,N,pe),N.onAfterShadow(e,N,m,S,Y,K,pe)}}}else if(I.visible){let k=R(N,I,A,F);N.onBeforeShadow(e,N,m,S,Y,k,null),e.renderBufferDirect(S,null,Y,k,N,null),N.onAfterShadow(e,N,m,S,Y,k,null)}}let H=N.children;for(let Y=0,I=H.length;Y<I;Y++)y(H[Y],m,S,A,z,F)}function w(N){N.target.removeEventListener("dispose",w);for(let m in c){let S=c[m],A=N.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function T_(e,t){function i(){let L=!1,X=new Tt,ae=null,oe=new Tt(0,0,0,0);return{setMask:function(me){ae!==me&&!L&&(e.colorMask(me,me,me,me),ae=me)},setLocked:function(me){L=me},setClear:function(me,ge,Pe,le,He){He===!0&&(me*=le,ge*=le,Pe*=le),X.set(me,ge,Pe,le),oe.equals(X)===!1&&(e.clearColor(me,ge,Pe,le),oe.copy(X))},reset:function(){L=!1,ae=null,oe.set(-1,0,0,0)}}}function r(){let L=!1,X=!1,ae=null,oe=null,me=null;return{setReversed:function(ge){if(X!==ge){let Pe=t.get("EXT_clip_control");ge?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),X=ge;let le=me;me=null,this.setClear(le)}},getReversed:function(){return X},setTest:function(ge){ge?fe(e.DEPTH_TEST):Xe(e.DEPTH_TEST)},setMask:function(ge){ae!==ge&&!L&&(e.depthMask(ge),ae=ge)},setFunc:function(ge){if(X&&(ge=Ou[ge]),oe!==ge){switch(ge){case bs:e.depthFunc(e.NEVER);break;case ws:e.depthFunc(e.ALWAYS);break;case As:e.depthFunc(e.LESS);break;case La:e.depthFunc(e.LEQUAL);break;case Rs:e.depthFunc(e.EQUAL);break;case Cs:e.depthFunc(e.GEQUAL);break;case Ps:e.depthFunc(e.GREATER);break;case Ls:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}oe=ge}},setLocked:function(ge){L=ge},setClear:function(ge){me!==ge&&(me=ge,X&&(ge=1-ge),e.clearDepth(ge))},reset:function(){L=!1,ae=null,oe=null,me=null,X=!1}}}function a(){let L=!1,X=null,ae=null,oe=null,me=null,ge=null,Pe=null,le=null,He=null;return{setTest:function(Ne){L||(Ne?fe(e.STENCIL_TEST):Xe(e.STENCIL_TEST))},setMask:function(Ne){X!==Ne&&!L&&(e.stencilMask(Ne),X=Ne)},setFunc:function(Ne,Ve,Me){(ae!==Ne||oe!==Ve||me!==Me)&&(e.stencilFunc(Ne,Ve,Me),ae=Ne,oe=Ve,me=Me)},setOp:function(Ne,Ve,Me){(ge!==Ne||Pe!==Ve||le!==Me)&&(e.stencilOp(Ne,Ve,Me),ge=Ne,Pe=Ve,le=Me)},setLocked:function(Ne){L=Ne},setClear:function(Ne){He!==Ne&&(e.clearStencil(Ne),He=Ne)},reset:function(){L=!1,X=null,ae=null,oe=null,me=null,ge=null,Pe=null,le=null,He=null}}}let n=new i,s=new r,o=new a,l={},c=new WeakMap,h={},p={},u={},_=new WeakMap,x=[],M=null,g=!1,f=null,b=null,R=null,y=null,w=null,N=null,m=null,S=new Ge(0,0,0),A=0,z=!1,F=null,H=null,Y=null,I=null,k=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,pe=0,q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=pe>=1):q.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=pe>=2);let K=null,ce={},De=e.getParameter(e.SCISSOR_BOX),$=e.getParameter(e.VIEWPORT),he=new Tt().fromArray(De),Ee=new Tt().fromArray($);function Ae(L,X,ae,oe){let me=new Uint8Array(4),ge=e.createTexture();e.bindTexture(L,ge),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pe=0;Pe<ae;Pe++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(X,0,e.RGBA,1,1,oe,0,e.RGBA,e.UNSIGNED_BYTE,me):e.texImage2D(X+Pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,me);return ge}let Re={};Re[e.TEXTURE_2D]=Ae(e.TEXTURE_2D,e.TEXTURE_2D,1),Re[e.TEXTURE_CUBE_MAP]=Ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[e.TEXTURE_2D_ARRAY]=Ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Re[e.TEXTURE_3D]=Ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(e.DEPTH_TEST),s.setFunc(La),Qt(!1),_t(Qo),fe(e.CULL_FACE),dt(Xr);function fe(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function Xe(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Qe(L,X){return u[L]!==X?(e.bindFramebuffer(L,X),u[L]=X,L===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=X),L===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=X),!0):!1}function Ce(L,X){let ae=x,oe=!1;if(L){ae=_.get(X),ae===void 0&&(ae=[],_.set(X,ae));let me=L.textures;if(ae.length!==me.length||ae[0]!==e.COLOR_ATTACHMENT0){for(let ge=0,Pe=me.length;ge<Pe;ge++)ae[ge]=e.COLOR_ATTACHMENT0+ge;ae.length=me.length,oe=!0}}else ae[0]!==e.BACK&&(ae[0]=e.BACK,oe=!0);oe&&e.drawBuffers(ae)}function Pt(L){return M!==L?(e.useProgram(L),M=L,!0):!1}let Ft={[Vr]:e.FUNC_ADD,[ru]:e.FUNC_SUBTRACT,[au]:e.FUNC_REVERSE_SUBTRACT};Ft[nu]=e.MIN,Ft[su]=e.MAX;let ft={[ou]:e.ZERO,[lu]:e.ONE,[cu]:e.SRC_COLOR,[nc]:e.SRC_ALPHA,[mu]:e.SRC_ALPHA_SATURATE,[pu]:e.DST_COLOR,[uu]:e.DST_ALPHA,[hu]:e.ONE_MINUS_SRC_COLOR,[sc]:e.ONE_MINUS_SRC_ALPHA,[fu]:e.ONE_MINUS_DST_COLOR,[du]:e.ONE_MINUS_DST_ALPHA,[gu]:e.CONSTANT_COLOR,[_u]:e.ONE_MINUS_CONSTANT_COLOR,[vu]:e.CONSTANT_ALPHA,[xu]:e.ONE_MINUS_CONSTANT_ALPHA};function dt(L,X,ae,oe,me,ge,Pe,le,He,Ne){if(L===Xr){g===!0&&(Xe(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),L!==iu){if(L!==f||Ne!==z){if((b!==Vr||w!==Vr)&&(e.blendEquation(e.FUNC_ADD),b=Vr,w=Vr),Ne)switch(L){case Pa:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $o:e.blendFunc(e.ONE,e.ONE);break;case el:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case tl:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Be("WebGLState: Invalid blending: ",L);break}else switch(L){case Pa:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case $o:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case el:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",L);break}R=null,y=null,N=null,m=null,S.set(0,0,0),A=0,f=L,z=Ne}return}me=me||X,ge=ge||ae,Pe=Pe||oe,(X!==b||me!==w)&&(e.blendEquationSeparate(Ft[X],Ft[me]),b=X,w=me),(ae!==R||oe!==y||ge!==N||Pe!==m)&&(e.blendFuncSeparate(ft[ae],ft[oe],ft[ge],ft[Pe]),R=ae,y=oe,N=ge,m=Pe),(le.equals(S)===!1||He!==A)&&(e.blendColor(le.r,le.g,le.b,He),S.copy(le),A=He),f=L,z=!1}function Wt(L,X){L.side===ki?Xe(e.CULL_FACE):fe(e.CULL_FACE);let ae=L.side===ai;X&&(ae=!ae),Qt(ae),L.blending===Pa&&L.transparent===!1?dt(Xr):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),n.setMask(L.colorWrite);let oe=L.stencilWrite;o.setTest(oe),oe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):Xe(e.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(L){F!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),F=L)}function _t(L){L!==$h?(fe(e.CULL_FACE),L!==H&&(L===Qo?e.cullFace(e.BACK):L===eu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Xe(e.CULL_FACE),H=L}function st(L){L!==Y&&(W&&e.lineWidth(L),Y=L)}function It(L,X,ae){L?(fe(e.POLYGON_OFFSET_FILL),(I!==X||k!==ae)&&(I=X,k=ae,s.getReversed()&&(X=-X,ae=-ae),e.polygonOffset(X,ae))):Xe(e.POLYGON_OFFSET_FILL)}function Xt(L){L?fe(e.SCISSOR_TEST):Xe(e.SCISSOR_TEST)}function ii(L){L===void 0&&(L=e.TEXTURE0+te-1),K!==L&&(e.activeTexture(L),K=L)}function B(L,X,ae){ae===void 0&&(K===null?ae=e.TEXTURE0+te-1:ae=K);let oe=ce[ae];oe===void 0&&(oe={type:void 0,texture:void 0},ce[ae]=oe),(oe.type!==L||oe.texture!==X)&&(K!==ae&&(e.activeTexture(ae),K=ae),e.bindTexture(L,X||Re[L]),oe.type=L,oe.texture=X)}function $t(){let L=ce[K];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function vt(){try{e.compressedTexImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function ve(){try{e.texSubImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function nt(){try{e.texSubImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function Le(){try{e.compressedTexSubImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function Ue(){try{e.compressedTexSubImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function At(){try{e.texStorage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function E(){try{e.texStorage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function v(){try{e.texImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function G(){try{e.texImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function se(L){return p[L]!==void 0?p[L]:e.getParameter(L)}function Q(L,X){p[L]!==X&&(e.pixelStorei(L,X),p[L]=X)}function _e(L){he.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function de(L){Ee.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Ee.copy(L))}function U(L,X){let ae=c.get(X);ae===void 0&&(ae=new WeakMap,c.set(X,ae));let oe=ae.get(L);oe===void 0&&(oe=e.getUniformBlockIndex(X,L.name),e.uniformBlockBinding(X,oe,oe),ae.set(L,oe))}function re(L,X,ae){let oe=c.get(X).get(L);l[oe]!==ae&&(e.bindBufferBase(e.UNIFORM_BUFFER,oe,ae),l[oe]=ae)}function xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},K=null,ce={},u={},l={},_=new WeakMap,x=[],M=null,g=!1,f=null,b=null,R=null,y=null,w=null,N=null,m=null,S=new Ge(0,0,0),A=0,z=!1,F=null,H=null,Y=null,I=null,k=null,he.set(0,0,e.canvas.width,e.canvas.height),Ee.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:fe,disable:Xe,bindFramebuffer:Qe,drawBuffers:Ce,useProgram:Pt,setBlending:dt,setMaterial:Wt,setFlipSided:Qt,setCullFace:_t,setLineWidth:st,setPolygonOffset:It,setScissorTest:Xt,activeTexture:ii,bindTexture:B,unbindTexture:$t,compressedTexImage2D:Te,compressedTexImage3D:vt,texImage2D:v,texImage3D:G,pixelStorei:Q,getParameter:se,updateUBOMapping:U,uniformBlockBinding:re,texStorage2D:At,texStorage3D:E,texSubImage2D:ve,texSubImage3D:nt,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ue,scissor:_e,viewport:de,reset:xe}}function b_(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,p=new Set,u,_=new WeakMap,x=new Set,M=new FinalizationRegistry(E=>x.delete(E)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,v){return g?new OffscreenCanvas(E,v):Fn("canvas")}function b(E,v,G){let se=1,Q=At(E);if((Q.width>G||Q.height>G)&&(se=G/Math.max(Q.width,Q.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let _e=Math.floor(se*Q.width),de=Math.floor(se*Q.height);u===void 0&&(u=f(_e,de));let U=v?f(_e,de):u;return U.width=_e,U.height=de,U.getContext("2d").drawImage(E,0,0,_e,de),Fe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+_e+"x"+de+")."),U}else return"data"in E&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function R(E){return E.generateMipmaps}function y(E){e.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function N(E,v,G,se,Q,_e=!1){if(E!==null){if(e[E]!==void 0)return e[E];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;se&&(de=t.get("EXT_texture_norm16"),de||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=v;if(v===e.RED&&(G===e.FLOAT&&(U=e.R32F),G===e.HALF_FLOAT&&(U=e.R16F),G===e.UNSIGNED_BYTE&&(U=e.R8),G===e.UNSIGNED_SHORT&&de&&(U=de.R16_EXT),G===e.SHORT&&de&&(U=de.R16_SNORM_EXT)),v===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.R8UI),G===e.UNSIGNED_SHORT&&(U=e.R16UI),G===e.UNSIGNED_INT&&(U=e.R32UI),G===e.BYTE&&(U=e.R8I),G===e.SHORT&&(U=e.R16I),G===e.INT&&(U=e.R32I)),v===e.RG&&(G===e.FLOAT&&(U=e.RG32F),G===e.HALF_FLOAT&&(U=e.RG16F),G===e.UNSIGNED_BYTE&&(U=e.RG8),G===e.UNSIGNED_SHORT&&de&&(U=de.RG16_EXT),G===e.SHORT&&de&&(U=de.RG16_SNORM_EXT)),v===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RG8UI),G===e.UNSIGNED_SHORT&&(U=e.RG16UI),G===e.UNSIGNED_INT&&(U=e.RG32UI),G===e.BYTE&&(U=e.RG8I),G===e.SHORT&&(U=e.RG16I),G===e.INT&&(U=e.RG32I)),v===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RGB8UI),G===e.UNSIGNED_SHORT&&(U=e.RGB16UI),G===e.UNSIGNED_INT&&(U=e.RGB32UI),G===e.BYTE&&(U=e.RGB8I),G===e.SHORT&&(U=e.RGB16I),G===e.INT&&(U=e.RGB32I)),v===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(U=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(U=e.RGBA16UI),G===e.UNSIGNED_INT&&(U=e.RGBA32UI),G===e.BYTE&&(U=e.RGBA8I),G===e.SHORT&&(U=e.RGBA16I),G===e.INT&&(U=e.RGBA32I)),v===e.RGB&&(G===e.UNSIGNED_SHORT&&de&&(U=de.RGB16_EXT),G===e.SHORT&&de&&(U=de.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(U=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(U=e.R11F_G11F_B10F)),v===e.RGBA){let re=_e?On:$e.getTransfer(Q);G===e.FLOAT&&(U=e.RGBA32F),G===e.HALF_FLOAT&&(U=e.RGBA16F),G===e.UNSIGNED_BYTE&&(U=re===ot?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&de&&(U=de.RGBA16_EXT),G===e.SHORT&&de&&(U=de.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(U=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(U=e.RGB5_A1)}return(U===e.R16F||U===e.R32F||U===e.RG16F||U===e.RG32F||U===e.RGBA16F||U===e.RGBA32F)&&t.get("EXT_color_buffer_float"),U}function m(E,v){let G;return E?v===null||v===Li||v===$r?G=e.DEPTH24_STENCIL8:v===Si?G=e.DEPTH32F_STENCIL8:v===Da&&(G=e.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===$r?G=e.DEPTH_COMPONENT24:v===Si?G=e.DEPTH_COMPONENT32F:v===Da&&(G=e.DEPTH_COMPONENT16),G}function S(E,v){return R(E)===!0||E.isFramebufferTexture&&E.minFilter!==Gt&&E.minFilter!==ri?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){let v=new WeakRef(E);r.get(E).__ref=v,x.add(v),M.register(E,v,v)}function z(E){let v=r.get(E).__ref;v!==void 0&&(x.delete(v),M.unregister(v))}function F(E){Y(E.target)}function H(E){I(E.target)}function Y(E){E.removeEventListener("dispose",F),z(E),te(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&p.delete(E)}function I(E){E.removeEventListener("dispose",H),z(E),pe(E)}function k(){for(let E of x){let v=E.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):Y(v))}x.clear(),p.clear()}function te(E){let v=r.get(E);if(v.__webglInit===void 0)return;let G=E.source,se=_.get(G);if(se){let Q=se[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(E),Object.keys(se).length===0&&_.delete(G)}r.remove(E)}function W(E){let v=r.get(E);e.deleteTexture(v.__webglTexture);let G=E.source,se=_.get(G);delete se[v.__cacheKey],s.memory.textures--}function pe(E){let v=r.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=E.depthTexture;if(G&&G.renderTarget===E&&Y(G),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let _e=0;_e<v.__webglFramebuffer[Q].length;_e++)e.deleteFramebuffer(v.__webglFramebuffer[Q][_e]);else e.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)e.deleteFramebuffer(v.__webglFramebuffer[Q]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let se=E.textures;for(let Q=0,_e=se.length;Q<_e;Q++){let de=r.get(se[Q]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),s.memory.textures--),r.remove(se[Q])}r.remove(E)}let q=0;function K(){q=0}function ce(){return q}function De(E){q=E}function $(){let E=q;return E>=a.maxTextures&&Fe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+a.maxTextures),q+=1,E}function he(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Ee(E,v){let G=r.get(E);if(E.isVideoTexture&&Le(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&G.__version!==E.version){let se=E.image;if(se===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(G,E,v);return}}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+v)}function Ae(E,v){let G=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){Wt(G,E,v);return}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+v)}function Re(E,v){let G=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){Wt(G,E,v);return}i.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+v)}function fe(E,v){let G=r.get(E);if(E.version>0&&G.__version!==E.version){Qt(G,E,v);return}i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+v)}let Xe={[Ns]:e.REPEAT,[Wi]:e.CLAMP_TO_EDGE,[Ds]:e.MIRRORED_REPEAT},Qe={[Gt]:e.NEAREST,[yu]:e.NEAREST_MIPMAP_NEAREST,[Za]:e.NEAREST_MIPMAP_LINEAR,[ri]:e.LINEAR,[Jn]:e.LINEAR_MIPMAP_NEAREST,[ar]:e.LINEAR_MIPMAP_LINEAR},Ce={[wu]:e.NEVER,[Ec]:e.ALWAYS,[Au]:e.LESS,[Sc]:e.LEQUAL,[Ru]:e.EQUAL,[yc]:e.GEQUAL,[Cu]:e.GREATER,[Pu]:e.NOTEQUAL};function Pt(E,v){if(v.type===Si&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ri||v.magFilter===Jn||v.magFilter===Za||v.magFilter===ar||v.minFilter===ri||v.minFilter===Jn||v.minFilter===Za||v.minFilter===ar)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Xe[v.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Xe[v.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Xe[v.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Qe[v.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Qe[v.minFilter]),v.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==Za&&v.minFilter!==ar||v.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||r.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),r.get(v).__currentAnisotropy=v.anisotropy}}}function Ft(E,v){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",F),A(v));let se=v.source,Q=_.get(se);Q===void 0&&(Q={},_.set(se,Q));let _e=he(v);if(_e!==E.__cacheKey){Q[_e]===void 0&&(Q[_e]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),Q[_e].usedTimes++;let de=Q[E.__cacheKey];de!==void 0&&(Q[E.__cacheKey].usedTimes--,de.usedTimes===0&&W(v)),E.__cacheKey=_e,E.__webglTexture=Q[_e].texture}return G}function ft(E,v,G){return Math.floor(Math.floor(E/G)/v)}function dt(E,v,G,se){let Q=E.updateRanges;if(Q.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,v.width,v.height,G,se,v.data);else{Q.sort((xe,L)=>xe.start-L.start);let _e=0;for(let xe=1;xe<Q.length;xe++){let L=Q[_e],X=Q[xe],ae=L.start+L.count,oe=ft(X.start,v.width,4),me=ft(L.start,v.width,4);X.start<=ae+1&&oe===me&&ft(X.start+X.count-1,v.width,4)===oe?L.count=Math.max(L.count,X.start+X.count-L.start):(++_e,Q[_e]=X)}Q.length=_e+1;let de=i.getParameter(e.UNPACK_ROW_LENGTH),U=i.getParameter(e.UNPACK_SKIP_PIXELS),re=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,v.width);for(let xe=0,L=Q.length;xe<L;xe++){let X=Q[xe],ae=Math.floor(X.start/4),oe=Math.ceil(X.count/4),me=ae%v.width,ge=Math.floor(ae/v.width),Pe=oe;i.pixelStorei(e.UNPACK_SKIP_PIXELS,me),i.pixelStorei(e.UNPACK_SKIP_ROWS,ge),i.texSubImage2D(e.TEXTURE_2D,0,me,ge,Pe,1,G,se,v.data)}E.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,de),i.pixelStorei(e.UNPACK_SKIP_PIXELS,U),i.pixelStorei(e.UNPACK_SKIP_ROWS,re)}}function Wt(E,v,G){let se=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=e.TEXTURE_3D);let Q=Ft(E,v),_e=v.source;i.bindTexture(se,E.__webglTexture,e.TEXTURE0+G);let de=r.get(_e);if(_e.version!==de.__version||Q===!0){if(i.activeTexture(e.TEXTURE0+G),!(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)){let le=$e.getPrimaries($e.workingColorSpace),He=v.colorSpace===rr?null:$e.getPrimaries(v.colorSpace),Ne=v.colorSpace===rr||le===He?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment);let U=b(v.image,!1,a.maxTextureSize);U=Ue(v,U);let re=n.convert(v.format,v.colorSpace),xe=n.convert(v.type),L=N(v.internalFormat,re,xe,v.normalized,v.colorSpace,v.isVideoTexture);Pt(se,v);let X,ae=v.mipmaps,oe=v.isVideoTexture!==!0,me=de.__version===void 0||Q===!0,ge=_e.dataReady,Pe=S(v,U);if(v.isDepthTexture)L=m(v.format===nr,v.type),me&&(oe?i.texStorage2D(e.TEXTURE_2D,1,L,U.width,U.height):i.texImage2D(e.TEXTURE_2D,0,L,U.width,U.height,0,re,xe,null));else if(v.isDataTexture)if(ae.length>0){oe&&me&&i.texStorage2D(e.TEXTURE_2D,Pe,L,ae[0].width,ae[0].height);for(let le=0,He=ae.length;le<He;le++)X=ae[le],oe?ge&&i.texSubImage2D(e.TEXTURE_2D,le,0,0,X.width,X.height,re,xe,X.data):i.texImage2D(e.TEXTURE_2D,le,L,X.width,X.height,0,re,xe,X.data);v.generateMipmaps=!1}else oe?(me&&i.texStorage2D(e.TEXTURE_2D,Pe,L,U.width,U.height),ge&&dt(v,U,re,xe)):i.texImage2D(e.TEXTURE_2D,0,L,U.width,U.height,0,re,xe,U.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){oe&&me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,L,ae[0].width,ae[0].height,U.depth);for(let le=0,He=ae.length;le<He;le++)if(X=ae[le],v.format!==Ci)if(re!==null)if(oe){if(ge)if(v.layerUpdates.size>0){let Ne=Ol(X.width,X.height,v.format,v.type);for(let Ve of v.layerUpdates){let Me=X.data.subarray(Ve*Ne/X.data.BYTES_PER_ELEMENT,(Ve+1)*Ne/X.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,Ve,X.width,X.height,1,re,Me)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,U.depth,re,X.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,le,L,X.width,X.height,U.depth,0,X.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?ge&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,U.depth,re,xe,X.data):i.texImage3D(e.TEXTURE_2D_ARRAY,le,L,X.width,X.height,U.depth,0,re,xe,X.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{oe&&me&&i.texStorage2D(e.TEXTURE_2D,Pe,L,ae[0].width,ae[0].height);for(let le=0,He=ae.length;le<He;le++)X=ae[le],v.format!==Ci?re!==null?oe?ge&&i.compressedTexSubImage2D(e.TEXTURE_2D,le,0,0,X.width,X.height,re,X.data):i.compressedTexImage2D(e.TEXTURE_2D,le,L,X.width,X.height,0,X.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?ge&&i.texSubImage2D(e.TEXTURE_2D,le,0,0,X.width,X.height,re,xe,X.data):i.texImage2D(e.TEXTURE_2D,le,L,X.width,X.height,0,re,xe,X.data)}else if(v.isDataArrayTexture)if(oe){if(me&&i.texStorage3D(e.TEXTURE_2D_ARRAY,Pe,L,U.width,U.height,U.depth),ge)if(v.layerUpdates.size>0){let le=Ol(U.width,U.height,v.format,v.type);for(let He of v.layerUpdates){let Ne=U.data.subarray(He*le/U.data.BYTES_PER_ELEMENT,(He+1)*le/U.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,He,U.width,U.height,1,re,xe,Ne)}v.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,re,xe,U.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,L,U.width,U.height,U.depth,0,re,xe,U.data);else if(v.isData3DTexture)oe?(me&&i.texStorage3D(e.TEXTURE_3D,Pe,L,U.width,U.height,U.depth),ge&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,re,xe,U.data)):i.texImage3D(e.TEXTURE_3D,0,L,U.width,U.height,U.depth,0,re,xe,U.data);else if(v.isFramebufferTexture){if(me)if(oe)i.texStorage2D(e.TEXTURE_2D,Pe,L,U.width,U.height);else{let le=U.width,He=U.height;for(let Ne=0;Ne<Pe;Ne++)i.texImage2D(e.TEXTURE_2D,Ne,L,le,He,0,re,xe,null),le>>=1,He>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in e){let le=e.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),U.parentNode!==le){le.appendChild(U),p.add(v),le.onpaint=He=>{let Ne=He.changedElements;for(let Ve of p)Ne.includes(Ve.image)&&(Ve.needsUpdate=!0)},le.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,U);else{let He=e.RGBA,Ne=e.RGBA,Ve=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,He,Ne,Ve,U)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ae.length>0){if(oe&&me){let le=At(ae[0]);i.texStorage2D(e.TEXTURE_2D,Pe,L,le.width,le.height)}for(let le=0,He=ae.length;le<He;le++)X=ae[le],oe?ge&&i.texSubImage2D(e.TEXTURE_2D,le,0,0,re,xe,X):i.texImage2D(e.TEXTURE_2D,le,L,re,xe,X);v.generateMipmaps=!1}else if(oe){if(me){let le=At(U);i.texStorage2D(e.TEXTURE_2D,Pe,L,le.width,le.height)}ge&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,re,xe,U)}else i.texImage2D(e.TEXTURE_2D,0,L,re,xe,U);R(v)&&v.mipmapsAutoUpdate===!0&&y(se),de.__version=_e.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Qt(E,v,G){if(v.image.length!==6)return;let se=Ft(E,v),Q=v.source;i.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+G);let _e=r.get(Q);if(Q.version!==_e.__version||se===!0){i.activeTexture(e.TEXTURE0+G);let de=$e.getPrimaries($e.workingColorSpace),U=v.colorSpace===rr?null:$e.getPrimaries(v.colorSpace),re=v.colorSpace===rr||de===U?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let xe=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,X=[];for(let Me=0;Me<6;Me++)!xe&&!L?X[Me]=b(v.image[Me],!0,a.maxCubemapSize):X[Me]=L?v.image[Me].image:v.image[Me],X[Me]=Ue(v,X[Me]);let ae=X[0],oe=n.convert(v.format,v.colorSpace),me=n.convert(v.type),ge=N(v.internalFormat,oe,me,v.normalized,v.colorSpace),Pe=v.isVideoTexture!==!0,le=_e.__version===void 0||se===!0,He=Q.dataReady,Ne=S(v,ae);Pt(e.TEXTURE_CUBE_MAP,v);let Ve;if(v.isDepthTexture){if(ge=m(v.format===nr,v.type),le)if(Pe)i.texStorage2D(e.TEXTURE_CUBE_MAP,1,ge,ae.width,ae.height);else for(let Me=0;Me<6;Me++)i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,ae.width,ae.height,0,oe,me,null)}else if(xe){Pe&&le&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,ge,ae.width,ae.height);for(let Me=0;Me<6;Me++){Ve=X[Me].mipmaps;for(let lt=0;lt<Ve.length;lt++){let ct=Ve[lt];v.format!==Ci?oe!==null?Pe?He&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,0,0,ct.width,ct.height,oe,ct.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,ge,ct.width,ct.height,0,ct.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?He&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,0,0,ct.width,ct.height,oe,me,ct.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt,ge,ct.width,ct.height,0,oe,me,ct.data)}}}else{if(Ve=v.mipmaps,Pe&&le){Ve.length>0&&Ne++;let Me=At(X[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Ne,ge,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(L){Pe?He&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,X[Me].width,X[Me].height,oe,me,X[Me].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,X[Me].width,X[Me].height,0,oe,me,X[Me].data);for(let lt=0;lt<Ve.length;lt++){let ct=Ve[lt].image[Me].image;Pe?He&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,0,0,ct.width,ct.height,oe,me,ct.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,ge,ct.width,ct.height,0,oe,me,ct.data)}}else{Pe?He&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,oe,me,X[Me]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ge,oe,me,X[Me]);for(let lt=0;lt<Ve.length;lt++){let ct=Ve[lt];Pe?He&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,0,0,oe,me,ct.image[Me]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Me,lt+1,ge,oe,me,ct.image[Me])}}}R(v)&&v.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),_e.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function _t(E,v,G,se,Q,_e){let de=n.convert(G.format,G.colorSpace),U=n.convert(G.type),re=N(G.internalFormat,de,U,G.normalized,G.colorSpace),xe=r.get(v),L=r.get(G);if(L.__renderTarget=v,!xe.__hasExternalTextures){let X=Math.max(1,v.width>>_e),ae=Math.max(1,v.height>>_e);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?i.texImage3D(Q,_e,re,X,ae,v.depth,0,de,U,null):i.texImage2D(Q,_e,re,X,ae,0,de,U,null)}i.bindFramebuffer(e.FRAMEBUFFER,E),nt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,se,Q,L.__webglTexture,0,ve(v)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,se,Q,L.__webglTexture,_e),i.bindFramebuffer(e.FRAMEBUFFER,null)}function st(E,v,G){if(e.bindRenderbuffer(e.RENDERBUFFER,E),v.depthBuffer){let se=v.depthTexture,Q=se&&se.isDepthTexture?se.type:null,_e=m(v.stencilBuffer,Q),de=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;nt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(v),_e,v.width,v.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(v),_e,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,_e,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,de,e.RENDERBUFFER,E)}else{let se=v.textures;for(let Q=0;Q<se.length;Q++){let _e=se[Q],de=n.convert(_e.format,_e.colorSpace),U=n.convert(_e.type),re=N(_e.internalFormat,de,U,_e.normalized,_e.colorSpace);nt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(v),re,v.width,v.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(v),re,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,re,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function It(E,v,G){let se=v.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(v.depthTexture);Q.__renderTarget=v;let _e=se?v.depthTexture.image[0]:v.depthTexture.image;(!Q.__webglTexture||_e.width!==v.width||_e.height!==v.height)&&(_e.width=v.width,_e.height=v.height,v.depthTexture.needsUpdate=!0),se?fe(v.depthTexture,0):Ee(v.depthTexture,0);let de=Q.__webglTexture,U=ve(v),re=se?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,xe=v.depthTexture.format===nr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(v.depthTexture.format===or)nt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,re,de,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,xe,re,de,0);else if(v.depthTexture.format===nr)nt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,xe,re,de,0,U):e.framebufferTexture2D(e.FRAMEBUFFER,xe,re,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xt(E){let v=r.get(E),G=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let se=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",Q)};se.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=se}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let se=0;se<6;se++)It(v.__webglFramebuffer[se],E,se);else E.texture.mipmaps.length>0?It(v.__webglFramebuffer[0],E,0):It(v.__webglFramebuffer,E,0);else if(G){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=e.createRenderbuffer(),st(v.__webglDepthbuffer[se],E,!1);else{let Q=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=v.__webglDepthbuffer[se];e.bindRenderbuffer(e.RENDERBUFFER,_e),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,_e)}}else if(E.texture.mipmaps.length>0?i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),st(v.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Q),e.framebufferRenderbuffer(e.FRAMEBUFFER,se,e.RENDERBUFFER,Q)}i.bindFramebuffer(e.FRAMEBUFFER,null)}function ii(E,v,G){let se=r.get(E);v!==void 0&&_t(se.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&Xt(E)}function B(E){let v=E.texture,G=r.get(E),se=r.get(v);E.addEventListener("dispose",H),A(E);let Q=E.textures,_e=E.isWebGLCubeRenderTarget===!0,de=Q.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=e.createTexture()),se.__version=v.version,s.memory.textures++),_e){G.__webglFramebuffer=[];for(let U=0;U<6;U++)if(v.mipmaps.length>0){G.__webglFramebuffer[U]=[];for(let re=0;re<v.mipmaps.length;re++)G.__webglFramebuffer[U][re]=e.createFramebuffer()}else G.__webglFramebuffer[U]=e.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let U=0;U<v.mipmaps.length;U++)G.__webglFramebuffer[U]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(de)for(let U=0,re=Q.length;U<re;U++){let xe=r.get(Q[U]);xe.__webglTexture===void 0&&(xe.__webglTexture=e.createTexture(),s.memory.textures++)}if(E.samples>0&&nt(E)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let U=0;U<Q.length;U++){let re=Q[U];G.__webglColorRenderbuffer[U]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[U]);let xe=n.convert(re.format,re.colorSpace),L=n.convert(re.type),X=N(re.internalFormat,xe,L,re.normalized,re.colorSpace,E.isXRRenderTarget===!0),ae=ve(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,ae,X,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+U,e.RENDERBUFFER,G.__webglColorRenderbuffer[U])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),st(G.__webglDepthRenderbuffer,E,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(_e){i.bindTexture(e.TEXTURE_CUBE_MAP,se.__webglTexture),Pt(e.TEXTURE_CUBE_MAP,v);for(let U=0;U<6;U++)if(v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)_t(G.__webglFramebuffer[U][re],E,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,re);else _t(G.__webglFramebuffer[U],E,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);R(v)?y(e.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),i.unbindTexture()}else if(de){for(let U=0,re=Q.length;U<re;U++){let xe=Q[U],L=r.get(xe),X=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(X=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(X,L.__webglTexture),Pt(X,xe),_t(G.__webglFramebuffer,E,xe,e.COLOR_ATTACHMENT0+U,X,0),R(xe)&&y(X)}i.unbindTexture()}else{let U=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(U=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(U,se.__webglTexture),Pt(U,v),v.mipmaps.length>0)for(let re=0;re<v.mipmaps.length;re++)_t(G.__webglFramebuffer[re],E,v,e.COLOR_ATTACHMENT0,U,re);else _t(G.__webglFramebuffer,E,v,e.COLOR_ATTACHMENT0,U,0);R(v)?y(U):v.mipmaps.length>0&&e.texParameteri(U,e.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),i.unbindTexture()}E.depthBuffer&&Xt(E)}function $t(E){let v=E.textures;for(let G=0,se=v.length;G<se;G++){let Q=v[G];if(R(Q)&&Q.mipmapsAutoUpdate===!0){let _e=w(E),de=r.get(Q).__webglTexture;i.bindTexture(_e,de),y(_e),i.unbindTexture()}}}let Te=[];function vt(E){if(E.samples>0){if(nt(E)===!1){let v=E.textures,G=E.width,se=E.height,Q=e.COLOR_BUFFER_BIT,_e=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=r.get(E),U=v.length>1;if(U)for(let re=0;re<v.length;re++)i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let re=0;re<v.length;re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),U){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,de.__webglColorRenderbuffer[re]);let xe=r.get(v[re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,xe,0)}e.blitFramebuffer(0,0,G,se,0,0,G,se,Q,e.NEAREST),l===!0&&(Te.length=0,Te.push(e.COLOR_ATTACHMENT0+re),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Te.push(_e),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Te))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),U)for(let re=0;re<v.length;re++){i.bindFramebuffer(e.FRAMEBUFFER,de.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,de.__webglColorRenderbuffer[re]);let xe=r.get(v[re]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,de.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,xe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let v=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function ve(E){return Math.min(a.maxSamples,E.samples)}function nt(E){let v=r.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Le(E){let v=s.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Ue(E,v){let G=E.colorSpace,se=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==Un&&G!==rr&&($e.getTransfer(G)===ot?(se!==Ci||Q!==oi)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",G)),v}function At(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.getTextureUnits=ce,this.setTextureUnits=De,this.setTexture2D=Ee,this.setTexture2DArray=Ae,this.setTexture3D=Re,this.setTextureCube=fe,this.rebindTextures=ii,this.setupRenderTarget=B,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=nt,this.dispose=k}function w_(e,t){function i(r,a=rr){let n,s=$e.getTransfer(a);if(r===oi)return e.UNSIGNED_BYTE;if(r===xo)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Mo)return e.UNSIGNED_SHORT_5_5_5_1;if(r===_c)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===vc)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===mc)return e.BYTE;if(r===gc)return e.SHORT;if(r===Da)return e.UNSIGNED_SHORT;if(r===vo)return e.INT;if(r===Li)return e.UNSIGNED_INT;if(r===Si)return e.FLOAT;if(r===Ni)return e.HALF_FLOAT;if(r===xc)return e.ALPHA;if(r===Mc)return e.RGB;if(r===Ci)return e.RGBA;if(r===or)return e.DEPTH_COMPONENT;if(r===nr)return e.DEPTH_STENCIL;if(r===So)return e.RED;if(r===yo)return e.RED_INTEGER;if(r===vr)return e.RG;if(r===Eo)return e.RG_INTEGER;if(r===To)return e.RGBA_INTEGER;if(r===Tn||r===bn||r===wn||r===An)if(s===ot)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Tn)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wn)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===An)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Tn)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bn)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wn)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===An)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Is||r===Us||r===Os||r===Fs)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===Is)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Us)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Os)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fs)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bs||r===zs||r===Hs||r===Gs||r===Vs||r===Nn||r===ks)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Bs||r===zs)return s===ot?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Hs)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===Gs)return n.COMPRESSED_R11_EAC;if(r===Vs)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Nn)return n.COMPRESSED_RG11_EAC;if(r===ks)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ws||r===Xs||r===js||r===qs||r===Ys||r===Ks||r===Zs||r===Js||r===Qs||r===$s||r===eo||r===to||r===io||r===ro)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Ws)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xs)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===js)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qs)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ys)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ks)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zs)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Js)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qs)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$s)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eo)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===to)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===io)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ro)return s===ot?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ao||r===no||r===so)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===ao)return s===ot?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===no)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===so)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===oo||r===lo||r===Dn||r===co)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===oo)return n.COMPRESSED_RED_RGTC1_EXT;if(r===lo)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dn)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===co)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$r?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}function N_(e,t){function i(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function r(g,f){f.color.getRGB(g.fogColor.value,Jc(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function a(g,f,b,R,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(g,f):f.isMeshLambertMaterial?(n(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(g,f),p(g,f)):f.isMeshPhongMaterial?(n(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(g,f),u(g,f),f.isMeshPhysicalMaterial&&_(g,f,y)):f.isMeshMatcapMaterial?(n(g,f),x(g,f)):f.isMeshDepthMaterial?n(g,f):f.isMeshDistanceMaterial?(n(g,f),M(g,f)):f.isMeshNormalMaterial?n(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,b,R):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,i(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===ai&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,i(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===ai&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,i(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,i(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let b=t.get(f),R=b.envMap,y=b.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(L_.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(gh),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,b,R){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=R*.5,f.map&&(g.map.value=f.map,i(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,i(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,i(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function _(g,f,b){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,i(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ai&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){let b=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function D_(e,t,i,r){let a={},n={};function s(b,R){let y=R.program;r.uniformBlockBinding(b,y,a[b.id])}function o(b,R){let y=a[b.id];y===void 0&&(x(b),y=l(b),a[b.id]=y,b.addEventListener("dispose",g));let w=R.program;r.updateUBOMapping(b,w);let N=t.render.frame;n[b.id]!==N&&(c(b),n[b.id]=N)}function l(b){let R=e.createBuffer(),y=b.__size,w=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,R),e.bufferData(e.UNIFORM_BUFFER,y,w),e.bindBuffer(e.UNIFORM_BUFFER,null),R}function c(b){let R=a[b.id],y=b.uniforms,w=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let N=0,m=y.length;N<m;N++){let S=y[N];if(Array.isArray(S))for(let A=0,z=S.length;A<z;A++)h(S[A],N,A,w);else h(S,N,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(b,R,y,w){if(u(b,R,y,w)===!0){let N=b.__offset,m=b.value;if(Array.isArray(m)){let S=0;for(let A=0;A<m.length;A++){let z=m[A],F=M(z,!0);p(z,b.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(m,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,N,b.__data)}}function p(b,R,y){typeof b=="number"||typeof b=="boolean"?R[y]=b:b.isMatrix3?(R[y]=b.elements[0],R[y+1]=b.elements[1],R[y+2]=b.elements[2],R[y+3]=0,R[y+4]=b.elements[3],R[y+5]=b.elements[4],R[y+6]=b.elements[5],R[y+7]=0,R[y+8]=b.elements[6],R[y+9]=b.elements[7],R[y+10]=b.elements[8],R[y+11]=0):ArrayBuffer.isView(b)?R.set(b.subarray(0,R.length-y),y):b.toArray(R,y)}function u(b,R,y,w){let N=b.value,m=R+"_"+y;if(Array.isArray(N)){w[m]===void 0&&(w[m]=[]);let S=w[m],A=!1;for(let z=0;z<N.length;z++)_(N[z],S,z)===!0&&(A=!0);return A}return _(N,w,m)}function _(b,R,y){if(R[y]===void 0)return typeof b=="number"||typeof b=="boolean"?R[y]=b:ArrayBuffer.isView(b)?R[y]=b.slice():R[y]=b.clone(),!0;{let w=R[y];if(typeof b=="number"||typeof b=="boolean"){if(w!==b)return R[y]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(w.equals(b)===!1)return w.copy(b),!0}}return!1}function x(b){let R=b.uniforms,y=0,w=16;for(let m=0,S=R.length;m<S;m++){let A=Array.isArray(R[m])?R[m]:[R[m]];for(let z=0,F=A.length;z<F;z++){let H=A[z],Y=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(R[m])||Array.isArray(H.value),k=y;for(let W=0,pe=Y.length;W<pe;W++){let q=Y[W],K=M(q,I),ce=y%w,De=ce%K.boundary,$=ce+De;y+=De,$!==0&&w-$<K.storage&&(y+=w-$),W===0&&(k=y),y+=K.storage}let te=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new te((y-k)/Float32Array.BYTES_PER_ELEMENT),H.__offset=k}}let N=y%w;return N>0&&(y+=w-N),b.__size=y,b.__cache={},this}function M(b,R){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=16,y.storage=48):b.isMatrix4?(y.boundary=16,y.storage=64):b.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(y.boundary=16,y.storage=b.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",b),R===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(b){let R=b.target;R.removeEventListener("dispose",g),e.deleteBuffer(a[R.id]),delete a[R.id],delete n[R.id]}function f(){for(let b in a)e.deleteBuffer(a[b]);a={},n={}}return{bind:s,update:o,dispose:f}}function U_(){return Ai===null&&(Ai=new Oc(I_,16,16,vr,Ni),Ai.name="DFG_LUT",Ai.minFilter=ri,Ai.magFilter=ri,Ai.wrapS=Wi,Ai.wrapT=Wi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var $h,Qo,eu,En,tu,Ra,_r,ai,ki,Xr,Pa,$o,el,tl,iu,Vr,ru,au,nu,su,ou,lu,cu,hu,nc,sc,uu,du,pu,fu,mu,gu,_u,vu,xu,bs,ws,As,La,Rs,Cs,Ps,Ls,_o,Mu,Su,Xi,oc,lc,cc,hc,uc,dc,pc,fc,Qr,Na,Kn,Zn,Ns,Wi,Ds,Gt,yu,Za,ri,Jn,ar,oi,mc,gc,Da,vo,Li,Si,Ni,xo,Mo,$r,_c,vc,xc,Mc,Ci,or,nr,So,yo,vr,Eo,To,Tn,bn,wn,An,Is,Us,Os,Fs,Bs,zs,Hs,Gs,Vs,Nn,ks,Ws,Xs,js,qs,Ys,Ks,Zs,Js,Qs,$s,eo,to,io,ro,ao,no,so,oo,lo,Dn,co,In,ho,Qn,il,rl,al,nl,Eu,uo,Tu,rr,ui,Un,On,ot,$n,bu,wu,Au,Ru,Sc,Cu,Pu,yc,Ec,Lu,sl,yi,Ia,ol,ea,Ou,Mr,jt,es,po,qr,it,Sr,Yr,V,is,cl,Kr,We,rs,hl,ul,$e,Rr,Vu,ku,wo,Wu,ns,fi,Zr,Tt,Xu,Pi,bc,ju,gr,pt,Cr,vi,qu,Yu,Ji,Ja,ni,dl,pl,ta,Ac,Ku,fl,Pr,Bi,Qa,Ma,Zu,Ju,ml,gl,_l,vl,Qu,Lr,ss,Yt,pi,$u,os,Rc,Qi,$a,Ge,qt,Cc,Lc,xi,zi,cs,Hi,Nr,Dr,xl,hs,us,ds,ps,fs,ms,Sa,yr,Gi,Mi,en,Ir,Ur,Or,$i,er,dr,ya,tn,rn,pr,Ct,an,ed,sr,Nc,Dc,bt,td,Ea,_s,aa,id,hi,vs,Fr,si,Ta,Ot,Ei,xs,rd,ad,ir,nd,na,Vi,Ms,nn,sn,Uc,Ao,Ml,fr,on,Sl,ln,cn,hn,Ss,un,yl,dn,gt,Oc,El,Br,Tl,fn,bl,od,ba,wa,qi,mr,ld,mn,Ua,wl,cd,Ro,Al,fo,gn,_n,Bc,zc,Hc,ia,Gc,Vc,Ti,Wc,lr,sa,Fa,Kc,ud,dd,pd,xr,fd,Co,md,gd,Ba,_d,vd,xd,Md,Di,za,Ed,Td,bd,$c,Ha,wd,Ad,Rd,Cd,eh,th,ys,Nl,Dl,Pd,xn,Mn,wi,ih,tr,Il,Ul,di,rh,Ld,ah,Hr,Gr,mo,Nd,Po,Dd,Lo,Id,Ud,Od,Fd,Bd,zd,Hd,Gd,Et,o0,Jr,l0,Wd,Xd,jd,qd,Yd,Kd,Zd,Jd,Qd,$d,ep,tp,ip,rp,ap,np,sp,op,lp,cp,hp,up,dp,pp,fp,mp,gp,_p,vp,xp,Mp,Sp,yp,Ep,Tp,bp,wp,Ap,Rp,Cp,Pp,Lp,Np,Dp,Ip,Up,Op,Fp,Bp,zp,Hp,Gp,Vp,kp,Wp,Xp,jp,qp,Yp,Kp,Zp,Jp,Qp,$p,ef,tf,rf,af,nf,sf,of,lf,cf,hf,uf,df,pf,ff,mf,gf,_f,vf,xf,Mf,Sf,yf,Ef,Tf,bf,wf,Af,Rf,Cf,Pf,Lf,Nf,Df,If,Uf,Of,Ff,Bf,zf,Hf,Gf,Vf,kf,Wf,Xf,jf,qf,Yf,Kf,Zf,Jf,Qf,$f,em,tm,im,rm,am,nm,sm,om,lm,cm,hm,um,dm,pm,fm,mm,gm,_m,vm,xm,Mm,Sm,ym,Em,Ye,ye,Ri,Sn,Tm,sh,No,Fl,Pm,Lm,oh,lh,Nm,Dm,Im,Bl,Xm,hh,uh,dh,ph,fh,mh,Vl,kl,Wl,Xl,jl,Dg,Ig,Ug,Es,Ln,Fg,Bg,Kl,Vg,yn,Yg,Zg,Qg,e_,i_,n_,s_,o_,m_,x_,M_,S_,y_,ac,Aa,Ts,A_,R_,C_,P_,L_,gh,I_,Ai,_h,vh=Ya(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */$h=0,Qo=1,eu=2,En=1,tu=2,Ra=3,_r=0,ai=1,ki=2,Xr=0,Pa=1,$o=2,el=3,tl=4,iu=5,Vr=100,ru=101,au=102,nu=103,su=104,ou=200,lu=201,cu=202,hu=203,nc=204,sc=205,uu=206,du=207,pu=208,fu=209,mu=210,gu=211,_u=212,vu=213,xu=214,bs=0,ws=1,As=2,La=3,Rs=4,Cs=5,Ps=6,Ls=7,_o=0,Mu=1,Su=2,Xi=0,oc=1,lc=2,cc=3,hc=4,uc=5,dc=6,pc=7,fc=300,Qr=301,Na=302,Kn=303,Zn=304,Ns=1e3,Wi=1001,Ds=1002,Gt=1003,yu=1004,Za=1005,ri=1006,Jn=1007,ar=1008,oi=1009,mc=1010,gc=1011,Da=1012,vo=1013,Li=1014,Si=1015,Ni=1016,xo=1017,Mo=1018,$r=1020,_c=35902,vc=35899,xc=1021,Mc=1022,Ci=1023,or=1026,nr=1027,So=1028,yo=1029,vr=1030,Eo=1031,To=1033,Tn=33776,bn=33777,wn=33778,An=33779,Is=35840,Us=35841,Os=35842,Fs=35843,Bs=36196,zs=37492,Hs=37496,Gs=37488,Vs=37489,Nn=37490,ks=37491,Ws=37808,Xs=37809,js=37810,qs=37811,Ys=37812,Ks=37813,Zs=37814,Js=37815,Qs=37816,$s=37817,eo=37818,to=37819,io=37820,ro=37821,ao=36492,no=36494,so=36495,oo=36283,lo=36284,Dn=36285,co=36286,In=2300,ho=2301,Qn=2302,il=2303,rl=2400,al=2401,nl=2402,Eu=3200,uo=0,Tu=1,rr="",ui="srgb",Un="srgb-linear",On="linear",ot="srgb",$n=7680,bu=519,wu=512,Au=513,Ru=514,Sc=515,Cu=516,Pu=517,yc=518,Ec=519,Lu=35044,sl="300 es",yi=2e3,Ia=2001;ol={},ea=null;Ou={[bs]:bs,[As]:Ps,[Rs]:Rs,[La]:Cs,[ws]:ws,[Ps]:As,[Ls]:Ls,[Cs]:La},Mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],es=Math.PI/180,po=180/Math.PI;it=(qr=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=et(this.x,t.x,i.x),this.y=et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=et(this.x,t,i),this.y=et(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qr.prototype.isVector2=!0,qr),Sr=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],p=a[n+0],u=a[n+1],_=a[n+2],x=a[n+3];if(h!==x||o!==p||l!==u||c!==_){let M=o*p+l*u+c*_+h*x;M<0&&(p=-p,u=-u,_=-_,x=-x,M=-M);let g=1-s;if(M<.9995){let f=Math.acos(M),b=Math.sin(f);g=Math.sin(g*f)/b,s=Math.sin(s*f)/b,o=o*g+p*s,l=l*g+u*s,c=c*g+_*s,h=h*g+x*s}else{o=o*g+p*s,l=l*g+u*s,c=c*g+_*s,h=h*g+x*s;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],p=a[n+1],u=a[n+2],_=a[n+3];return e[t]=s*_+c*h+o*u-l*p,e[t+1]=o*_+c*p+l*h-s*u,e[t+2]=l*_+c*u+s*p-o*h,e[t+3]=c*_-s*h-o*p-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),p=o(i/2),u=o(r/2),_=o(a/2);switch(n){case"XYZ":this._x=p*c*h+l*u*_,this._y=l*u*h-p*c*_,this._z=l*c*_+p*u*h,this._w=l*c*h-p*u*_;break;case"YXZ":this._x=p*c*h+l*u*_,this._y=l*u*h-p*c*_,this._z=l*c*_-p*u*h,this._w=l*c*h+p*u*_;break;case"ZXY":this._x=p*c*h-l*u*_,this._y=l*u*h+p*c*_,this._z=l*c*_+p*u*h,this._w=l*c*h-p*u*_;break;case"ZYX":this._x=p*c*h-l*u*_,this._y=l*u*h+p*c*_,this._z=l*c*_-p*u*h,this._w=l*c*h+p*u*_;break;case"YZX":this._x=p*c*h+l*u*_,this._y=l*u*h+p*c*_,this._z=l*c*_-p*u*h,this._w=l*c*h-p*u*_;break;case"XZY":this._x=p*c*h-l*u*_,this._y=l*u*h-p*c*_,this._z=l*c*_+p*u*h,this._w=l*c*h+p*u*_;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],p=i+s+h;if(p>0){let u=.5/Math.sqrt(p+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=(Yr=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(cl.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(cl.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),p=2*(n*r-s*i);return this.x=i+l*c+s*p-o*h,this.y=r+l*h+o*c-n*p,this.z=a+l*p+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=et(this.x,t.x,i.x),this.y=et(this.y,t.y,i.y),this.z=et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=et(this.x,t,i),this.y=et(this.y,t,i),this.z=et(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return is.copy(this).projectOnVector(t),this.sub(is)}reflect(t){return this.sub(is.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(et(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yr.prototype.isVector3=!0,Yr),is=new V,cl=new Sr,We=(Kr=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],p=r[7],u=r[2],_=r[5],x=r[8],M=a[0],g=a[3],f=a[6],b=a[1],R=a[4],y=a[7],w=a[2],N=a[5],m=a[8];return n[0]=s*M+o*b+l*w,n[3]=s*g+o*R+l*N,n[6]=s*f+o*y+l*m,n[1]=c*M+h*b+p*w,n[4]=c*g+h*R+p*N,n[7]=c*f+h*y+p*m,n[2]=u*M+_*b+x*w,n[5]=u*g+_*R+x*N,n[8]=u*f+_*y+x*m,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*s-o*c,u=o*l-h*n,_=c*n-s*l,x=i*p+r*u+a*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=p*M,t[1]=(a*c-h*r)*M,t[2]=(o*r-a*s)*M,t[3]=u*M,t[4]=(h*i-a*l)*M,t[5]=(a*n-o*i)*M,t[6]=_*M,t[7]=(r*l-c*i)*M,t[8]=(s*i-r*n)*M,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Rn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rs.makeScale(t,i)),this}rotate(t){return Rn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rs.makeRotation(-t)),this}translate(t,i){return Rn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rs.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Kr.prototype.isMatrix3=!0,Kr),rs=new We,hl=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e=Gu();Vu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rr===void 0&&(Rr=Fn("canvas")),Rr.width=e.width,Rr.height=e.height;let r=Rr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Rr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fn("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=ji(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ji(t[i]/255)*255):t[i]=ji(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ku=0,wo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(as(r[n].image)):a.push(as(r[n]))}else a=as(r);i.url=a}return t||(e.images[this.uuid]=i),i}};Wu=0,ns=new V,fi=class Cn extends Mr{constructor(t=Cn.DEFAULT_IMAGE,i=Cn.DEFAULT_MAPPING,r=Wi,a=Wi,n=ri,s=ar,o=Ci,l=oi,c=Cn.DEFAULT_ANISOTROPY,h=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Oa(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ns).x}get height(){return this.source.getSize(ns).y}get depth(){return this.source.getSize(ns).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Fe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Fe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=fc;fi.DEFAULT_ANISOTROPY=1;Tt=(Zr=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],p=s[5],u=s[9],_=s[2],x=s[6],M=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-_)<.01&&Math.abs(u-x)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+_)<.1&&Math.abs(u+x)<.1&&Math.abs(o+p+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,b=(p+1)/2,R=(M+1)/2,y=(l+h)/4,w=(c+_)/4,N=(u+x)/4;return f>b&&f>R?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=y/r,n=w/r):b>R?b<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(b),r=y/a,n=N/a):R<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(R),r=w/n,a=N/n),this.set(r,a,n,i),this}let g=Math.sqrt((x-u)*(x-u)+(c-_)*(c-_)+(h-l)*(h-l));return Math.abs(g)<.001&&(g=1),this.x=(x-u)/g,this.y=(c-_)/g,this.z=(h-l)/g,this.w=Math.acos((o+p+M-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=et(this.x,t.x,i.x),this.y=et(this.y,t.y,i.y),this.z=et(this.z,t.z,i.z),this.w=et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=et(this.x,t,i),this.y=et(this.y,t,i),this.z=et(this.z,t,i),this.w=et(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zr.prototype.isVector4=!0,Zr),Xu=class extends Mr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t),this.textures=[];let r=i.count;for(let a=0;a<r;a++)this.textures[a]=new fi({width:e,height:t,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new wo(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pi=class extends Xu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},bc=class extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ju=class extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},pt=(gr=class{constructor(t,i,r,a,n,s,o,l,c,h,p,u,_,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,p,u,_,x,M,g)}set(t,i,r,a,n,s,o,l,c,h,p,u,_,x,M,g){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=_,f[7]=x,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gr().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Cr.setFromMatrixColumn(t,0).length(),n=1/Cr.setFromMatrixColumn(t,1).length(),s=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),p=Math.sin(n);if(t.order==="XYZ"){let u=s*h,_=s*p,x=o*h,M=o*p;i[0]=l*h,i[4]=-l*p,i[8]=c,i[1]=_+x*c,i[5]=u-M*c,i[9]=-o*l,i[2]=M-u*c,i[6]=x+_*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,_=l*p,x=c*h,M=c*p;i[0]=u+M*o,i[4]=x*o-_,i[8]=s*c,i[1]=s*p,i[5]=s*h,i[9]=-o,i[2]=_*o-x,i[6]=M+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,_=l*p,x=c*h,M=c*p;i[0]=u-M*o,i[4]=-s*p,i[8]=x+_*o,i[1]=_+x*o,i[5]=s*h,i[9]=M-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,_=s*p,x=o*h,M=o*p;i[0]=l*h,i[4]=x*c-_,i[8]=u*c+M,i[1]=l*p,i[5]=M*c+u,i[9]=_*c-x,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,_=s*c,x=o*l,M=o*c;i[0]=l*h,i[4]=M-u*p,i[8]=x*p+_,i[1]=p,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=_*p+x,i[10]=u-M*p}else if(t.order==="XZY"){let u=s*l,_=s*c,x=o*l,M=o*c;i[0]=l*h,i[4]=-p,i[8]=c*h,i[1]=u*p+M,i[5]=s*h,i[9]=_*p-x,i[2]=x*p-_,i[6]=o*h,i[10]=M*p+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qu,t,Yu)}lookAt(t,i,r){let a=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ji.crossVectors(r,ni),Ji.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ji.crossVectors(r,ni)),Ji.normalize(),Ja.crossVectors(ni,Ji),a[0]=Ji.x,a[4]=Ja.x,a[8]=ni.x,a[1]=Ji.y,a[5]=Ja.y,a[9]=ni.y,a[2]=Ji.z,a[6]=Ja.z,a[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],p=r[5],u=r[9],_=r[13],x=r[2],M=r[6],g=r[10],f=r[14],b=r[3],R=r[7],y=r[11],w=r[15],N=a[0],m=a[4],S=a[8],A=a[12],z=a[1],F=a[5],H=a[9],Y=a[13],I=a[2],k=a[6],te=a[10],W=a[14],pe=a[3],q=a[7],K=a[11],ce=a[15];return n[0]=s*N+o*z+l*I+c*pe,n[4]=s*m+o*F+l*k+c*q,n[8]=s*S+o*H+l*te+c*K,n[12]=s*A+o*Y+l*W+c*ce,n[1]=h*N+p*z+u*I+_*pe,n[5]=h*m+p*F+u*k+_*q,n[9]=h*S+p*H+u*te+_*K,n[13]=h*A+p*Y+u*W+_*ce,n[2]=x*N+M*z+g*I+f*pe,n[6]=x*m+M*F+g*k+f*q,n[10]=x*S+M*H+g*te+f*K,n[14]=x*A+M*Y+g*W+f*ce,n[3]=b*N+R*z+y*I+w*pe,n[7]=b*m+R*F+y*k+w*q,n[11]=b*S+R*H+y*te+w*K,n[15]=b*A+R*Y+y*W+w*ce,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],_=t[14],x=t[3],M=t[7],g=t[11],f=t[15],b=l*_-c*u,R=o*_-c*p,y=o*u-l*p,w=s*_-c*h,N=s*u-l*h,m=s*p-o*h;return i*(M*b-g*R+f*y)-r*(x*b-g*w+f*N)+a*(x*R-M*w+f*m)-n*(x*y-M*N+g*m)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],_=t[11],x=t[12],M=t[13],g=t[14],f=t[15],b=i*o-r*s,R=i*l-a*s,y=i*c-n*s,w=r*l-a*o,N=r*c-n*o,m=a*c-n*l,S=h*M-p*x,A=h*g-u*x,z=h*f-_*x,F=p*g-u*M,H=p*f-_*M,Y=u*f-_*g,I=b*Y-R*H+y*F+w*z-N*A+m*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(o*Y-l*H+c*F)*k,t[1]=(a*H-r*Y-n*F)*k,t[2]=(M*m-g*N+f*w)*k,t[3]=(u*N-p*m-_*w)*k,t[4]=(l*z-s*Y-c*A)*k,t[5]=(i*Y-a*z+n*A)*k,t[6]=(g*y-x*m-f*R)*k,t[7]=(h*m-u*y+_*R)*k,t[8]=(s*H-o*z+c*S)*k,t[9]=(r*z-i*H-n*S)*k,t[10]=(x*N-M*y+f*b)*k,t[11]=(p*y-h*N-_*b)*k,t[12]=(o*A-s*F-l*S)*k,t[13]=(i*F-r*A+a*S)*k,t[14]=(M*R-x*w-g*b)*k,t[15]=(h*w-p*R+u*b)*k,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,p=o+o,u=n*c,_=n*h,x=n*p,M=s*h,g=s*p,f=o*p,b=l*c,R=l*h,y=l*p,w=r.x,N=r.y,m=r.z;return a[0]=(1-(M+f))*w,a[1]=(_+y)*w,a[2]=(x-R)*w,a[3]=0,a[4]=(_-y)*N,a[5]=(1-(u+f))*N,a[6]=(g+b)*N,a[7]=0,a[8]=(x+R)*m,a[9]=(g-b)*m,a[10]=(1-(u+M))*m,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Cr.set(a[0],a[1],a[2]).length(),o=Cr.set(a[4],a[5],a[6]).length(),l=Cr.set(a[8],a[9],a[10]).length();n<0&&(s=-s),vi.copy(this);let c=1/s,h=1/o,p=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=p,vi.elements[9]*=p,vi.elements[10]*=p,i.setFromRotationMatrix(vi),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=yi,l=!1){let c=this.elements,h=2*n/(i-t),p=2*n/(r-a),u=(i+t)/(i-t),_=(r+a)/(r-a),x,M;if(l)x=n/(s-n),M=s*n/(s-n);else if(o===yi)x=-(s+n)/(s-n),M=-2*s*n/(s-n);else if(o===Ia)x=-s/(s-n),M=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=_,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=yi,l=!1){let c=this.elements,h=2/(i-t),p=2/(r-a),u=-(i+t)/(i-t),_=-(r+a)/(r-a),x,M;if(l)x=1/(s-n),M=s/(s-n);else if(o===yi)x=-2/(s-n),M=-(s+n)/(s-n);else if(o===Ia)x=-1/(s-n),M=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=_,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},gr.prototype.isMatrix4=!0,gr),Cr=new V,vi=new pt,qu=new V(0,0,0),Yu=new V(1,1,1),Ji=new V,Ja=new V,ni=new V,dl=new pt,pl=new Sr,ta=class wc{constructor(t=0,i=0,r=0,a=wc.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],p=a[2],u=a[6],_=a[10];switch(i){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,_),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,_),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,_),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,_),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ta.DEFAULT_ORDER="XYZ";Ac=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ku=0,fl=new V,Pr=new Sr,Bi=new pt,Qa=new V,Ma=new V,Zu=new V,Ju=new Sr,ml=new V(1,0,0),gl=new V(0,1,0),_l=new V(0,0,1),vl={type:"added"},Qu={type:"removed"},Lr={type:"childadded",child:null},ss={type:"childremoved",child:null},Yt=class Pn extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=Oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();let t=new V,i=new ta,r=new Sr,a=new V(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(t,i){return Pr.setFromAxisAngle(t,i),this.quaternion.premultiply(Pr),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,i){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Qa.copy(t):Qa.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ma,Qa,this.up):Bi.lookAt(Qa,Ma,this.up),this.quaternion.setFromRotationMatrix(Bi),a&&(Bi.extractRotation(a.matrixWorld),Pr.setFromRotationMatrix(Bi),this.quaternion.premultiply(Pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vl),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Qu),ss.child=t,this.dispatchEvent(ss),ss.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vl),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,Ju,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];n(t.shapes,p)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),p=s(t.shapes),u=s(t.skeletons),_=s(t.animations),x=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),p.length>0&&(r.shapes=p),u.length>0&&(r.skeletons=u),_.length>0&&(r.animations=_),x.length>0&&(r.nodes=x)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Yt.DEFAULT_UP=new V(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pi=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$u={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let x of e.hand.values()){let M=t.getJointPose(x,i),g=this._getHandJoint(l,x);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],p=c.position.distanceTo(h.position),u=.02,_=.005;l.inputState.pinching&&p>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent($u)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new pi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},$a={h:0,s:0,l:0};Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=Fu(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=ls(n,a,e+1/3),this.g=ls(n,a,e),this.b=ls(n,a,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=ui){function i(a){a!==void 0&&parseFloat(a)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,t);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){let i=Rc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return $e.workingToColorSpace(qt.copy(this),e),Math.round(et(qt.r*255,0,255))*65536+Math.round(et(qt.g*255,0,255))*256+Math.round(et(qt.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(qt.copy(this),t);let i=qt.r,r=qt.g,a=qt.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ui){$e.workingToColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,r=qt.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL($a);let i=ts(Qi.h,$a.h,t),r=ts(Qi.s,$a.s,t),a=ts(Qi.l,$a.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Ge;Ge.NAMES=Rc;Cc=class Pc{constructor(t,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ge(t),this.near=i,this.far=r}clone(){return new Pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Lc=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ta,this.environmentIntensity=1,this.environmentRotation=new ta,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=new V,zi=new V,cs=new V,Hi=new V,Nr=new V,Dr=new V,xl=new V,hs=new V,us=new V,ds=new V,ps=new Tt,fs=new Tt,ms=new Tt,Sa=class kr{constructor(t=new V,i=new V,r=new V){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),xi.subVectors(t,i),a.cross(xi);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){xi.subVectors(a,i),zi.subVectors(r,i),cs.subVectors(t,i);let s=xi.dot(xi),o=xi.dot(zi),l=xi.dot(cs),c=zi.dot(zi),h=zi.dot(cs),p=s*c-o*o;if(p===0)return n.set(0,0,0),null;let u=1/p,_=(c*l-o*h)*u,x=(s*h-o*l)*u;return n.set(1-_-x,x,_)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,Hi.x),l.addScaledVector(s,Hi.y),l.addScaledVector(o,Hi.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return ps.setScalar(0),fs.setScalar(0),ms.setScalar(0),ps.fromBufferAttribute(t,i),fs.fromBufferAttribute(t,r),ms.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ps,n.x),s.addScaledVector(fs,n.y),s.addScaledVector(ms,n.z),s}static isFrontFacing(t,i,r,a){return xi.subVectors(r,i),zi.subVectors(t,i),xi.cross(zi).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),xi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return kr.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return kr.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return kr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;Nr.subVectors(a,r),Dr.subVectors(n,r),hs.subVectors(t,r);let l=Nr.dot(hs),c=Dr.dot(hs);if(l<=0&&c<=0)return i.copy(r);us.subVectors(t,a);let h=Nr.dot(us),p=Dr.dot(us);if(h>=0&&p<=h)return i.copy(a);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return s=l/(l-h),i.copy(r).addScaledVector(Nr,s);ds.subVectors(t,n);let _=Nr.dot(ds),x=Dr.dot(ds);if(x>=0&&_<=x)return i.copy(n);let M=_*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),i.copy(r).addScaledVector(Dr,o);let g=h*x-_*p;if(g<=0&&p-h>=0&&_-x>=0)return xl.subVectors(n,a),o=(p-h)/(p-h+(_-x)),i.copy(a).addScaledVector(xl,o);let f=1/(g+M+u);return s=M*f,o=u*f,i.copy(r).addScaledVector(Nr,s).addScaledVector(Dr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yr=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Mi):Mi.fromBufferAttribute(a,n),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),en.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),en.copy(i.boundingBox)),en.applyMatrix4(e.matrixWorld),this.union(en)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),tn.subVectors(this.max,ya),Ir.subVectors(e.a,ya),Ur.subVectors(e.b,ya),Or.subVectors(e.c,ya),$i.subVectors(Ur,Ir),er.subVectors(Or,Ur),dr.subVectors(Ir,Or);let t=[0,-$i.z,$i.y,0,-er.z,er.y,0,-dr.z,dr.y,$i.z,0,-$i.x,er.z,0,-er.x,dr.z,0,-dr.x,-$i.y,$i.x,0,-er.y,er.x,0,-dr.y,dr.x,0];return!gs(t,Ir,Ur,Or,tn)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,Ir,Ur,Or,tn))?!1:(rn.crossVectors($i,er),t=[rn.x,rn.y,rn.z],gs(t,Ir,Ur,Or,tn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new V,new V,new V,new V,new V,new V,new V,new V],Mi=new V,en=new yr,Ir=new V,Ur=new V,Or=new V,$i=new V,er=new V,dr=new V,ya=new V,tn=new V,rn=new V,pr=new V;Ct=new V,an=new it,ed=0,sr=class extends Mr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=e!==void 0?bo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXY(t,an.x,an.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),r=this._normalize(r),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hu(e,this.array)}},Nc=class extends sr{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Dc=class extends sr{constructor(e,t,i){super(new Uint32Array(e),t,i)}},bt=class extends sr{constructor(e,t,i){super(new Float32Array(e),t,i)}},td=new yr,Ea=new V,_s=new V,aa=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):td.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ea.subVectors(e,this.center);let t=Ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ea.copy(e.center).add(_s)),this.expandByPoint(Ea.copy(e.center).sub(_s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},id=0,hi=new pt,vs=new Yt,Fr=new V,si=new yr,Ta=new yr,Ot=new V,Ei=class Ic extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nu(t)?Dc:Nc)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new We().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return vs.lookAt(t),vs.updateMatrix(),this.applyMatrix4(vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new bt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];si.setFromBufferAttribute(n),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let r=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(si.min,Ta.min),si.expandByPoint(Ot),Ot.addVectors(si.max,Ta.max),si.expandByPoint(Ot)):(si.expandByPoint(Ta.min),si.expandByPoint(Ta.max))}si.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Ot.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Ot));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(Fr.fromBufferAttribute(t,c),Ot.add(Fr)),a=Math.max(a,r.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new sr(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[],c=new Uint8Array(r.count);for(let A=0;A<r.count;A++)o[A]=new V,l[A]=new V;let h=new V,p=new V,u=new V,_=new it,x=new it,M=new it,g=new V,f=new V;function b(A,z,F){c[A]=c[z]=c[F]=1,h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,z),u.fromBufferAttribute(r,F),_.fromBufferAttribute(n,A),x.fromBufferAttribute(n,z),M.fromBufferAttribute(n,F),p.sub(h),u.sub(h),x.sub(_),M.sub(_);let H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(u,-x.y).multiplyScalar(H),f.copy(u).multiplyScalar(x.x).addScaledVector(p,-M.x).multiplyScalar(H),o[A].add(g),o[z].add(g),o[F].add(g),l[A].add(f),l[z].add(f),l[F].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let A=0,z=R.length;A<z;++A){let F=R[A],H=F.start,Y=F.count;for(let I=H,k=H+Y;I<k;I+=3)b(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new V,w=new V,N=new V,m=new V;function S(A){N.fromBufferAttribute(a,A),m.copy(N);let z=o[A];y.copy(z),y.sub(N.multiplyScalar(N.dot(z))).normalize(),w.crossVectors(m,z);let F=w.dot(l[A])<0?-1:1;s.setXYZW(A,y.x,y.y,y.z,F)}for(let A=0,z=r.count;A<z;++A)c[A]&&S(A);this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new sr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,_=r.count;u<_;u++)r.setXYZ(u,0,0,0);let a=new V,n=new V,s=new V,o=new V,l=new V,c=new V,h=new V,p=new V;if(t)for(let u=0,_=t.count;u<_;u+=3){let x=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);a.fromBufferAttribute(i,x),n.fromBufferAttribute(i,M),s.fromBufferAttribute(i,g),h.subVectors(s,n),p.subVectors(a,n),h.cross(p),o.fromBufferAttribute(r,x),l.fromBufferAttribute(r,M),c.fromBufferAttribute(r,g),o.add(h),l.add(h),c.add(h),r.setXYZ(x,o.x,o.y,o.z),r.setXYZ(M,l.x,l.y,l.z),r.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,_=i.count;u<_;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),p.subVectors(a,n),h.cross(p),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Ot.fromBufferAttribute(t,i),Ot.normalize(),t.setXYZ(i,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),_=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?_=l[M]*o.data.stride+o.offset:_=l[M]*h;for(let f=0;f<h;f++)u[x++]=c[_++]}return new sr(u,h,p)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Ic,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],_=t(u,r);l.push(_)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let _=c[p];h.push(_.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],p=n[c];for(let u=0,_=p.length;u<_;u++)h.push(p[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},xs=new V,rd=new V,ad=new We,ir=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=xs.subVectors(i,t).cross(rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(xs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ad.getNormalMatrix(e),r=this.coplanarPoint(xs).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},nd=0,na=class extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Oa(),this.name="",this.type="Material",this.blending=Pa,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=sc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ir().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vi=new V,Ms=new V,nn=new V,sn=new V,Uc=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ms.copy(e).add(t).multiplyScalar(.5),nn.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(Ms);let a=e.distanceTo(t)*.5,n=-this.direction.dot(nn),s=sn.dot(this.direction),o=-sn.dot(nn),l=sn.lengthSq(),c=Math.abs(1-n*n),h,p,u,_;if(c>0)if(h=n*o-s,p=n*s-o,_=a*c,h>=0)if(p>=-_)if(p<=_){let x=1/c;h*=x,p*=x,u=h*(h+n*p+2*s)+p*(n*h+p+2*o)+l}else p=a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+l;else p=-a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+l;else p<=-_?(h=Math.max(0,-(-n*a+s)),p=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+p*(p+2*o)+l):p<=_?(h=0,p=Math.min(Math.max(-a,-o),a),u=p*(p+2*o)+l):(h=Math.max(0,-(n*a+s)),p=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+p*(p+2*o)+l);else p=n>0?-a:a,h=Math.max(0,-(n*p+s)),u=-h*h+p*(p+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ms).addScaledVector(nn,p),u}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,p=this.origin;return l>=0?(i=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(i=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),c>=0?(a=(e.min.y-p.y)*c,n=(e.max.y-p.y)*c):(a=(e.max.y-p.y)*c,n=(e.min.y-p.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-p.z)*h,o=(e.max.z-p.z)*h):(s=(e.max.z-p.z)*h,o=(e.min.z-p.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,p=e.y-n.y,u=e.z-n.z,_=t.x-n.x,x=t.y-n.y,M=t.z-n.z,g=i.x-n.x,f=i.y-n.y,b=i.z-n.z,R=Math.abs(o),y=Math.abs(l),w=Math.abs(c),N,m,S,A,z,F,H,Y,I,k,te,W;if(R>=y&&R>=w?(S=o,F=h,I=_,W=g,o>=0?(N=l,m=c,A=p,z=u,H=x,Y=M,k=f,te=b):(N=c,m=l,A=u,z=p,H=M,Y=x,k=b,te=f)):y>=w?(S=l,F=p,I=x,W=f,l>=0?(N=c,m=o,A=u,z=h,H=M,Y=_,k=b,te=g):(N=o,m=c,A=h,z=u,H=_,Y=M,k=g,te=b)):(S=c,F=u,I=M,W=b,c>=0?(N=o,m=l,A=h,z=p,H=_,Y=x,k=g,te=f):(N=l,m=o,A=p,z=h,H=x,Y=_,k=f,te=g)),S===0)return null;let pe=N/S,q=m/S,K=1/S,ce=A-pe*F,De=z-q*F,$=H-pe*I,he=Y-q*I,Ee=k-pe*W,Ae=te-q*W,Re=Ee*he-Ae*$,fe=ce*Ae-De*Ee,Xe=$*De-he*ce;if(r){if(Re<0||fe<0||Xe<0)return null}else if((Re<0||fe<0||Xe<0)&&(Re>0||fe>0||Xe>0))return null;let Qe=Re+fe+Xe;if(Qe===0)return null;let Ce=K*(Re*F+fe*I+Xe*W);return(Qe>0?Ce<0:Ce>0)?null:this.at(Ce/Qe,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ao=class extends na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ml=new pt,fr=new Uc,on=new aa,Sl=new V,ln=new V,cn=new V,hn=new V,Ss=new V,un=new V,yl=new V,dn=new V,gt=class extends Yt{constructor(e=new Ei,t=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){un.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&(Ss.fromBufferAttribute(h,e),n?un.addScaledVector(Ss,c):un.addScaledVector(Ss.sub(t),c))}t.add(un)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),on.copy(i.boundingSphere),on.applyMatrix4(a),fr.copy(e.ray).recast(e.near),!(on.containsPoint(fr.origin)===!1&&(fr.intersectSphere(on,Sl)===null||fr.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(Ml.copy(a).invert(),fr.copy(e.ray).applyMatrix4(Ml),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,p=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let _=0,x=p.length;_<x;_++){let M=p[_],g=n[M.materialIndex],f=Math.max(M.start,u.start),b=Math.min(s.count,Math.min(M.start+M.count,u.start+u.count));for(let R=f,y=b;R<y;R+=3){let w=s.getX(R),N=s.getX(R+1),m=s.getX(R+2);r=pn(this,g,e,i,l,c,h,w,N,m),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let _=Math.max(0,u.start),x=Math.min(s.count,u.start+u.count);for(let M=_,g=x;M<g;M+=3){let f=s.getX(M),b=s.getX(M+1),R=s.getX(M+2);r=pn(this,n,e,i,l,c,h,f,b,R),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let _=0,x=p.length;_<x;_++){let M=p[_],g=n[M.materialIndex],f=Math.max(M.start,u.start),b=Math.min(o.count,Math.min(M.start+M.count,u.start+u.count));for(let R=f,y=b;R<y;R+=3){let w=R,N=R+1,m=R+2;r=pn(this,g,e,i,l,c,h,w,N,m),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=M.materialIndex,t.push(r))}}else{let _=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let M=_,g=x;M<g;M+=3){let f=M,b=M+1,R=M+2;r=pn(this,n,e,i,l,c,h,f,b,R),r&&(r.faceIndex=Math.floor(M/3),t.push(r))}}}};Oc=class extends fi{constructor(e=null,t=1,i=1,r,a,n,s,o,l=Gt,c=Gt,h,p){super(null,n,s,o,l,c,r,a,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},El=class extends sr{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new pt,Tl=new pt,fn=[],bl=new yr,od=new pt,ba=new gt,wa=new aa,qi=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,od)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new yr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),bl.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(bl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new aa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Br),wa.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(ba.geometry=this.geometry,ba.material=this.material,ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),e.ray.intersectsSphere(wa)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,Br),Tl.multiplyMatrices(i,Br),ba.matrixWorld=Tl,ba.raycast(e,fn);for(let n=0,s=fn.length;n<s;n++){let o=fn[n];o.instanceId=a,o.object=this,t.push(o)}fn.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(r*this.count),r,this.count,So,Si));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mr=new aa,ld=new it(.5,.5),mn=new V,Ua=class{constructor(e=new ir,t=new ir,i=new ir,r=new ir,a=new ir,n=new ir){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yi,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],p=a[6],u=a[7],_=a[8],x=a[9],M=a[10],g=a[11],f=a[12],b=a[13],R=a[14],y=a[15];if(r[0].setComponents(l-n,u-c,g-_,y-f).normalize(),r[1].setComponents(l+n,u+c,g+_,y+f).normalize(),r[2].setComponents(l+s,u+h,g+x,y+b).normalize(),r[3].setComponents(l-s,u-h,g-x,y-b).normalize(),i)r[4].setComponents(o,p,M,R).normalize(),r[5].setComponents(l-o,u-p,g-M,y-R).normalize();else if(r[4].setComponents(l-o,u-p,g-M,y-R).normalize(),t===yi)r[5].setComponents(l+o,u+p,g+M,y+R).normalize();else if(t===Ia)r[5].setComponents(o,p,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);let t=ld.distanceTo(e.center);return mr.radius=.7071067811865476+t,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(mn.x=r.normal.x>0?e.max.x:e.min.x,mn.y=r.normal.y>0?e.max.y:e.min.y,mn.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mn)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wl=new pt,cd=class Fc{constructor(){this.coordinateSystem=yi,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Ua),r[a].setFromProjectionMatrix(wl,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Ua),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Fc().copy(this)}},Ro=class extends na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Al=new pt,fo=new Uc,gn=new aa,_n=new V,Bc=class extends Yt{constructor(e=new Ei,t=new Ro){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gn.copy(i.boundingSphere),gn.applyMatrix4(r),gn.radius+=a,e.ray.intersectsSphere(gn)===!1)return;Al.copy(r).invert(),fo.copy(e.ray).applyMatrix4(Al);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let h=Math.max(0,n.start),p=Math.min(l.count,n.start+n.count);for(let u=h,_=p;u<_;u++){let x=l.getX(u);_n.fromBufferAttribute(c,x),Rl(_n,x,o,r,e,t,this)}}else{let h=Math.max(0,n.start),p=Math.min(c.count,n.start+n.count);for(let u=h,_=p;u<_;u++)_n.fromBufferAttribute(c,u),Rl(_n,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};zc=class extends fi{constructor(e=[],t=Qr,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hc=class extends fi{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ia=class extends fi{constructor(e,t,i=Li,r,a,n,s=Gt,o=Gt,l,c=or,h=1){if(c!==or&&c!==nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:h};super(p,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Gc=class extends ia{constructor(e,t=Li,i=Qr,r,a,n=Gt,s=Gt,o,l=or){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vc=class extends fi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ti=class kc extends Ei{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=0,_=0;x("z","y","x",-1,-1,r,i,t,s,n,0),x("z","y","x",1,-1,r,i,-t,s,n,1),x("x","z","y",1,1,t,r,i,a,s,2),x("x","z","y",1,-1,t,r,-i,a,s,3),x("x","y","z",1,-1,t,i,r,a,n,4),x("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(p,2));function x(M,g,f,b,R,y,w,N,m,S,A){let z=y/m,F=w/S,H=y/2,Y=w/2,I=N/2,k=m+1,te=S+1,W=0,pe=0,q=new V;for(let K=0;K<te;K++){let ce=K*F-Y;for(let De=0;De<k;De++){let $=De*z-H;q[M]=$*b,q[g]=ce*R,q[f]=I,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[f]=N>0?1:-1,h.push(q.x,q.y,q.z),p.push(De/m),p.push(1-K/S),W+=1}}for(let K=0;K<S;K++)for(let ce=0;ce<m;ce++){let De=u+ce+k*K,$=u+ce+k*(K+1),he=u+(ce+1)+k*(K+1),Ee=u+(ce+1)+k*K;l.push(De,$,Ee),l.push($,he,Ee),pe+=6}o.addGroup(_,pe,A),_+=pe,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wc=class Xc extends Ei{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],c=new V,h=new it;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,u=3;p<=i;p++,u+=3){let _=r+p/i*a;c.x=t*Math.cos(_),c.y=t*Math.sin(_),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=i;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new bt(s,3)),this.setAttribute("normal",new bt(o,3)),this.setAttribute("uv",new bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xc(t.radius,t.segments,t.thetaStart,t.thetaLength)}},lr=class jc extends Ei{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],p=[],u=[],_=[],x=0,M=[],g=r/2,f=0;b(),s===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new bt(p,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(_,2));function b(){let y=new V,w=new V,N=0,m=(i-t)/r;for(let S=0;S<=n;S++){let A=[],z=S/n,F=z*(i-t)+t;for(let H=0;H<=a;H++){let Y=H/a,I=Y*l+o,k=Math.sin(I),te=Math.cos(I);w.x=F*k,w.y=-z*r+g,w.z=F*te,p.push(w.x,w.y,w.z),y.set(k,m,te).normalize(),u.push(y.x,y.y,y.z),_.push(Y,1-z),A.push(x++)}M.push(A)}for(let S=0;S<a;S++)for(let A=0;A<n;A++){let z=M[A][S],F=M[A+1][S],H=M[A+1][S+1],Y=M[A][S+1];(t>0||A!==0)&&(h.push(z,F,Y),N+=3),(i>0||A!==n-1)&&(h.push(F,H,Y),N+=3)}c.addGroup(f,N,0),f+=N}function R(y){let w=x,N=new it,m=new V,S=0,A=y===!0?t:i,z=y===!0?1:-1;for(let H=1;H<=a;H++)p.push(0,g*z,0),u.push(0,z,0),_.push(.5,.5),x++;let F=x;for(let H=0;H<=a;H++){let Y=H/a*l+o,I=Math.cos(Y),k=Math.sin(Y);m.x=A*k,m.y=g*z,m.z=A*I,p.push(m.x,m.y,m.z),u.push(0,z,0),N.x=I*.5+.5,N.y=k*.5*z+.5,_.push(N.x,N.y),x++}for(let H=0;H<a;H++){let Y=w+H,I=F+H;y===!0?h.push(I,I+1,Y):h.push(I+1,I,Y),S+=3}c.addGroup(f,S,y===!0?1:2),f+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class qc extends lr{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new qc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fa=class Yc extends Ei{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,p=t/o,u=i/l,_=[],x=[],M=[],g=[];for(let f=0;f<h;f++){let b=f*u-s;for(let R=0;R<c;R++){let y=R*p-n;x.push(y,-b,0),M.push(0,0,1),g.push(R/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){let R=b+c*f,y=b+c*(f+1),w=b+1+c*(f+1),N=b+1+c*f;_.push(R,y,N),_.push(y,w,N)}this.setIndex(_),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}},Kc=class Zc extends Ei{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],p=new V,u=new V,_=[],x=[],M=[],g=[];for(let f=0;f<=r;f++){let b=[],R=f/r,y=s+R*o,w=t*Math.cos(y),N=Math.sqrt(t*t-w*w),m=0;f===0&&s===0?m=.5/i:f===r&&l===Math.PI&&(m=-.5/i);for(let S=0;S<=i;S++){let A=S/i,z=a+A*n;p.x=-N*Math.cos(z),p.y=w,p.z=N*Math.sin(z),x.push(p.x,p.y,p.z),u.copy(p).normalize(),M.push(u.x,u.y,u.z),g.push(A+m,1-R),b.push(c++)}h.push(b)}for(let f=0;f<r;f++)for(let b=0;b<i;b++){let R=h[f][b+1],y=h[f][b],w=h[f+1][b],N=h[f+1][b+1];(f!==0||s>0)&&_.push(R,y,N),(f!==r-1||l<Math.PI)&&_.push(y,w,N)}this.setIndex(_),this.setAttribute("position",new bt(x,3)),this.setAttribute("normal",new bt(M,3)),this.setAttribute("uv",new bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};ud={clone:ra,merge:ei},dd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xr=class extends na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dd,this.fragmentShader=pd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[i].value=new it().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fd=class extends xr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Co=class extends na{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ta,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},md=class extends na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gd=class extends na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ba=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];i:{e:{let n;t:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break e}n=t.length;break t}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break e}n=i,i=0;break t}break i}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_d=class extends Ba{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rl,endingEnd:rl}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case al:a=e,s=2*t-i;break;case nl:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case al:n=e,o=2*i-t;break;case nl:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,u=this._weightNext,_=(i-t)/(r-t),x=_*_,M=x*_,g=-p*M+2*p*x-p*_,f=(1+p)*M+(-1.5-2*p)*x+(-.5+p)*_+1,b=(-1-u)*M+(1.5+u)*x+.5*_,R=u*M-u*x;for(let y=0;y!==s;++y)a[y]=g*n[c+y]+f*n[l+y]+b*n[o+y]+R*n[h+y];return a}},vd=class extends Ba{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let p=0;p!==s;++p)a[p]=n[l+p]*h+n[o+p]*c;return a}},xd=class extends Ba{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Md=class extends Ba{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let _=(i-t)/(r-t),x=1-_;for(let M=0;M!==s;++M)a[M]=n[l+M]*x+n[o+M]*_;return a}let p=s*2,u=e-1;for(let _=0;_!==s;++_){let x=n[l+_],M=n[o+_],g=u*p+_*2,f=h[g],b=h[g+1],R=e*p+_*2,y=c[R],w=c[R+1],N=yd(i,t,f,y,r);a[_]=Qc(N,x,b,w,M)}return a}};Di=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),vn(e.settings)&&(i.settings={inTangents:zr(e.settings.inTangents,Array),outTangents:zr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Md(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case In:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case Qn:t=this.InterpolantFactoryMethodSmooth;break;case il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return In;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Qn;case this.InterpolantFactoryMethodBezier:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e;vn(this.settings)&&(Pl(this.settings.inTangents,e),Pl(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;vn(this.settings)&&(Ll(this.settings.inTangents,e),Ll(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){Be("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){Be("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Du(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Qn,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,p=h-i,u=h+i;for(let _=0;_!==i;++_){let x=t[h+_];if(x!==t[p+_]||x!==t[u+_]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,p=n*i;for(let u=0;u!==i;++u)t[p+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,vn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=ho;za=class extends Di{constructor(e,t,i){super(e,t,i)}};za.prototype.ValueTypeName="bool";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=In;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;Ed=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}};Ed.prototype.ValueTypeName="color";Td=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}};Td.prototype.ValueTypeName="number";bd=class extends Ba{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)Sr.slerpFlat(a,0,n,l-s,n,l,o);return a}},$c=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new bd(this.times,this.values,this.getValueSize(),e)}};$c.prototype.ValueTypeName="quaternion";$c.prototype.InterpolantFactoryMethodSmooth=void 0;Ha=class extends Di{constructor(e,t,i){super(e,t,i)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=In;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;wd=class extends Di{constructor(e,t,i,r){super(e,t,i,r)}};wd.prototype.ValueTypeName="vector";Ad=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,p=l.length;h<p;h+=2){let u=l[h],_=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rd=new Ad,Cd=class{constructor(e){this.manager=e!==void 0?e:Rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Cd.DEFAULT_MATERIAL_NAME="__DEFAULT";eh=class extends Yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},th=class extends eh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ys=new pt,Nl=new V,Dl=new V,Pd=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nl),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ys,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===Ia||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},xn=new V,Mn=new Sr,wi=new V,ih=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xn,Mn,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xn,Mn,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(xn,Mn,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xn,Mn,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},tr=new V,Il=new it,Ul=new it,di=class extends ih{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Il,Ul),t.subVectors(Ul,Il)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(es*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rh=class extends ih{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ld=class extends Pd{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ah=class extends eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Ld}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Hr=-90,Gr=1,mo=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new di(Hr,Gr,e,t);r.layers=this.layers,this.add(r);let a=new di(Hr,Gr,e,t);a.layers=this.layers,this.add(a);let n=new di(Hr,Gr,e,t);n.layers=this.layers,this.add(n);let s=new di(Hr,Gr,e,t);s.layers=this.layers,this.add(s);let o=new di(Hr,Gr,e,t);o.layers=this.layers,this.add(o);let l=new di(Hr,Gr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,p,u),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Nd=class extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Po="\\[\\]\\.:\\/",Dd=new RegExp("["+Po+"]","g"),Lo="[^"+Po+"]",Id="[^"+Po.replace("\\.","")+"]",Ud=/((?:WC+[\/:])*)/.source.replace("WC",Lo),Od=/(WCOD+)?/.source.replace("WCOD",Id),Fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lo),Bd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lo),zd=new RegExp("^"+Ud+Od+Fd+Bd+"$"),Hd=["material","materials","bones","map"],Gd=class{constructor(e,t,i){let r=i||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Et=class Wr{constructor(t,i,r){this.path=i,this.parsedPath=r||Wr.parseTrackName(i),this.node=Wr.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new Wr.Composite(t,i,r):new Wr(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dd,"")}static parseTrackName(t){let i=zd.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Hd.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=Wr.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Gd;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];o0=new Float32Array(1),l0=(Jr=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Jr.prototype.isMatrix2=!0,Jr);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/Wd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xd=`#ifdef USE_ALPHAHASH
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
#endif`,jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zd=`#ifdef USE_AOMAP
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
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qd=`#ifdef USE_BATCHING
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
#endif`,$d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Up=`#ifdef USE_ENVMAP
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
#endif`,Op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Gp=`uniform sampler2D dfgLUT;
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
}`,Vp=`
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$p=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,af=`#if defined( USE_MORPHCOLORS )
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
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
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
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cf=`float getShadowMask() {
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
}`,Pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform float backgroundBlurriness;
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
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
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
}`,Jf=`#if DEPTH_PACKING == 3200
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
}`,Qf=`#define DISTANCE
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
}`,$f=`#define DISTANCE
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
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,sm=`#define LAMBERT
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
}`,om=`#define LAMBERT
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
}`,lm=`#define MATCAP
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
}`,cm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,um=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,pm=`#define PHONG
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
}`,fm=`#define STANDARD
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
}`,mm=`#define STANDARD
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
}`,gm=`#define TOON
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
}`,_m=`#define TOON
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
}`,vm=`uniform float size;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Mm=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,ym=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Wd,alphahash_pars_fragment:Xd,alphamap_fragment:jd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:Kd,aomap_fragment:Zd,aomap_pars_fragment:Jd,batching_pars_vertex:Qd,batching_vertex:$d,begin_vertex:ep,beginnormal_vertex:tp,bsdfs:ip,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:np,clipping_planes_pars_fragment:sp,clipping_planes_pars_vertex:op,clipping_planes_vertex:lp,color_fragment:cp,color_pars_fragment:hp,color_pars_vertex:up,color_vertex:dp,common:pp,defaultnormal_vertex:fp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:_p,emissivemap_pars_fragment:vp,colorspace_fragment:xp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:yp,envmap_pars_fragment:Ep,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Up,envmap_vertex:bp,fog_vertex:wp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Dp,lights_pars_begin:Ip,lights_toon_fragment:Op,lights_toon_pars_fragment:Fp,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Vp,lights_fragment_maps:kp,lights_fragment_end:Wp,lightprobes_pars_fragment:Xp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Qp,map_particle_pars_fragment:$p,metalnessmap_fragment:ef,metalnessmap_pars_fragment:tf,morphinstance_vertex:rf,morphcolor_vertex:af,morphnormal_vertex:nf,morphtarget_pars_vertex:sf,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:ff,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:vf,packing:xf,premultiplied_alpha_fragment:Mf,project_vertex:Sf,dithering_fragment:yf,dithering_pars_fragment:Ef,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:bf,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:Af,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:Pf,skinning_pars_vertex:Lf,skinning_vertex:Nf,skinnormal_vertex:Df,specularmap_fragment:If,specularmap_pars_fragment:Uf,tonemapping_fragment:Of,tonemapping_pars_fragment:Ff,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:Hf,uv_pars_vertex:Gf,uv_vertex:Vf,worldpos_vertex:kf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:jf,backgroundCube_frag:qf,cube_vert:Yf,cube_frag:Kf,depth_vert:Zf,depth_frag:Jf,distance_vert:Qf,distance_frag:$f,equirect_vert:em,equirect_frag:tm,linedashed_vert:im,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:nm,meshlambert_vert:sm,meshlambert_frag:om,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:pm,meshphysical_vert:fm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:_m,points_vert:vm,points_frag:xm,shadow_vert:Mm,shadow_frag:Sm,sprite_vert:ym,sprite_frag:Em},ye={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ri={basic:{uniforms:ei([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ei([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ei([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ei([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ei([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ei([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ei([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ei([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ei([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ei([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ei([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:ei([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:ei([ye.lights,ye.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ri.physical={uniforms:ei([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};Sn={r:0,b:0,g:0},Tm=new pt,sh=new We;sh.set(-1,0,0,0,1,0,0,0,1);No=class extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ti(5,5,5),a=new xr({name:"CubemapFromEquirect",uniforms:ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:Xr});a.uniforms.tEquirect.value=t;let n=new gt(r,a),s=t.minFilter;return t.minFilter===ar&&(t.minFilter=ri),new mo(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}},Fl=256,Pm=3,Lm=20,oh=256,lh=16,Nm=3,Dm=new V,Im=new Ge,Bl=class ch{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mo(1,10,null),this._boxMesh=new gt(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,a=100,n={}){let{size:s=256,position:o=Dm}=n,l=this._renderer;this._setSize(s);let c=this._allocateTarget(),h=this._getSourceTarget(!0);i>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,_=l.autoClearDepth,x=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(Im));let g=new mo(r,a,h);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=_,l.autoClearStencil=x,t.background=M,i>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,i)),this._applyPMREM(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(Fl,Bu(t))}_fromTexture(t,i){t.mapping===Qr||t.mapping===Na?this._setSize(t.image.length===0?Fl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){let t=this._cubeSize,i=zl(t,!1,!1),r=Math.log2(t)-Pm;for(let a=0;a<=r;a++)i.texture.mipmaps.push({width:t>>a,height:t>>a});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){let i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=zl(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){let a=this._boxMesh,n=this._cubeCamera;a.material=r,n.renderTarget=t,n.activeMipmapLevel=i;let s=t.width>>i;t.viewport.set(0,0,s,s),n.update(this._renderer,a),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===Qr||t.mapping===Na?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Hl()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Um(),this._integrationMaterial=Om());let i=this._cubeSize,r=t.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let n=this._integrationMaterial.uniforms;n.envMap.value=this._sourceTarget.texture,n.sourceLod.value=Math.log2(i/lh);for(let s=0;s<=r;s++){let o=ch.lodToRoughness(s,r);if(s>r-Nm)n.roughness.value=o,this._renderCube(t,s,this._integrationMaterial);else{let l=o>0?Math.log2(i)+.5*Math.log2(6/(oh*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=l,this._renderCube(t,s,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=Fm());let r=this._blurMaterial,a=r.uniforms,n=this._sourceTarget;a.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,a.envMap.value=n.texture,this._renderCube(t,0,r),a.envMap.value=t.texture,this._renderCube(n,0,r)}};Xm={[oc]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[hc]:"ACES_FILMIC_TONE_MAPPING",[dc]:"AGX_TONE_MAPPING",[pc]:"NEUTRAL_TONE_MAPPING",[uc]:"CUSTOM_TONE_MAPPING"};hh=new fi,uh=new ia(1,1),dh=new Gc(1),ph=new bc,fh=new ju,mh=new zc,Vl=[],kl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),jl=new Float32Array(4);Dg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=dg(t.type)}},Ig=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ng(t.type)}},Ug=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},Es=/(\w+)(\])?(\[|\.)?/g;Ln=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Og(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};Fg=37297,Bg=0;Kl=new We;Vg={[oc]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[hc]:"ACESFilmic",[dc]:"AgX",[pc]:"Neutral",[uc]:"Custom"};yn=new V;Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Qg={[En]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};e_={[Na]:"ENVMAP_MODE_REFRACTION"};i_={[_o]:"ENVMAP_BLENDING_MULTIPLY",[Mu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};n_=0,s_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new o_(e),t.set(e,i)),i}},o_=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};m_=0;x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
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
}`,S_=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],y_=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],ac=new pt,Aa=new V,Ts=new V;A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
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

}`,C_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new xr({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Fa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},P_=class extends Mr{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,p=null,u=null,_=null,x=typeof XRWebGLBinding<"u",M=new C_,g={},f=t.getContextAttributes(),b=null,R=null,y=[],w=[],N=new it,m=null,S=null,A=new di;A.viewport=new Tt;let z=new di;z.viewport=new Tt;let F=[A,z],H=new Nd,Y=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let he=y[$];return he===void 0&&(he=new os,y[$]=he),he.getTargetRaySpace()},this.getControllerGrip=function($){let he=y[$];return he===void 0&&(he=new os,y[$]=he),he.getGripSpace()},this.getHand=function($){let he=y[$];return he===void 0&&(he=new os,y[$]=he),he.getHandSpace()};function k($){let he=w.indexOf($.inputSource);if(he===-1)return;let Ee=y[he];Ee!==void 0&&(Ee.update($.inputSource,$.frame,l||n),Ee.dispatchEvent({type:$.type,data:$.inputSource}))}function te(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",W);for(let $=0;$<y.length;$++){let he=w[$];he!==null&&(w[$]=null,y[$].disconnect(he))}Y=null,I=null,M.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(b),u=null,p=null,h=null,r=null,R=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(m),e.setSize(N.width,N.height,!1),S!==null){let $=S.camera;$.fov=S.fov,$.zoom=S.zoom,$.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){s=$,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",te),r.addEventListener("inputsourceschange",W),f.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(N),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ee=null,Ae=null;f.depth&&(Ae=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=f.stencil?nr:or,Ee=f.stencil?$r:Li);let Re={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};h=this.getBinding(),p=h.createProjectionLayer(Re),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),R=new Pi(p.textureWidth,p.textureHeight,{format:Ci,type:oi,depthTexture:new ia(p.textureWidth,p.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let he={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),R=new Pi(u.framebufferWidth,u.framebufferHeight,{format:Ci,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W($){for(let he=0;he<$.removed.length;he++){let Ee=$.removed[he],Ae=w.indexOf(Ee);Ae>=0&&(w[Ae]=null,y[Ae].disconnect(Ee))}for(let he=0;he<$.added.length;he++){let Ee=$.added[he],Ae=w.indexOf(Ee);if(Ae===-1){for(let fe=0;fe<y.length;fe++)if(fe>=w.length){w.push(Ee),Ae=fe;break}else if(w[fe]===null){w[fe]=Ee,Ae=fe;break}if(Ae===-1)break}let Re=y[Ae];Re&&Re.connect(Ee)}}function pe($,he){he===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(he.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let he=$.near,Ee=$.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),H.near=z.near=A.near=he,H.far=z.far=A.far=Ee,(Y!==H.near||I!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),Y=H.near,I=H.far),H.layers.mask=$.layers.mask|6,A.layers.mask=H.layers.mask&-5,z.layers.mask=H.layers.mask&-3;let Ae=$.parent,Re=H.cameras;pe(H,Ae);for(let fe=0;fe<Re.length;fe++)pe(Re[fe],Ae);H.projectionMatrix.copy(A.projectionMatrix),H.projectionMatrixInverse.copy(A.projectionMatrixInverse),S===null&&$.isPerspectiveCamera&&(S={camera:$,fov:$.fov,zoom:$.zoom}),q($,H,Ae)};function q($,he,Ee){Ee===null?$.matrix.copy(he.matrixWorld):($.matrix.copy(Ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(he.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(he.projectionMatrix),$.projectionMatrixInverse.copy(he.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=po*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(p===null&&u===null))return o},this.setFoveation=function($){o=$,p!==null&&(p.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(H)},this.getCameraTexture=function($){return g[$]};let K=null;function ce($,he){if(c=he.getViewerPose(l||n),_=he,c!==null){let Ee=c.views;u!==null&&(e.setRenderTargetFramebuffer(R,u.framebuffer),e.setRenderTarget(R));let Ae=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Ae=!0);for(let fe=0;fe<Ee.length;fe++){let Xe=Ee[fe],Qe=null;if(u!==null)Qe=u.getViewport(Xe);else{let Pt=h.getViewSubImage(p,Xe);Qe=Pt.viewport,fe===0&&(e.setRenderTargetTextures(R,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(R))}let Ce=F[fe];Ce===void 0&&(Ce=new di,Ce.layers.enable(fe),Ce.viewport=new Tt,F[fe]=Ce),Ce.matrix.fromArray(Xe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Xe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),fe===0&&(H.matrix.copy(Ce.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ae===!0&&H.cameras.push(Ce)}let Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();let fe=h.getDepthInformation(Ee[0]);fe&&fe.isValid&&fe.texture&&M.init(fe,r.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let fe=0;fe<Ee.length;fe++){let Xe=Ee[fe].camera;if(Xe){let Qe=g[Xe];Qe||(Qe=new Vc,g[Xe]=Qe);let Ce=h.getCameraImage(Xe);Qe.sourceTexture=Ce}}}}for(let Ee=0;Ee<y.length;Ee++){let Ae=w[Ee],Re=y[Ee];Ae!==null&&Re!==void 0&&Re.update(Ae,he,l||n)}K&&K($,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}let De=new nh;De.setAnimationLoop(ce),this.setAnimationLoop=function($){K=$},this.dispose=function(){}}},L_=new pt,gh=new We;gh.set(-1,0,0,0,1,0,0,0,1);I_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;_h=class{constructor(e={}){let{canvas:t=Iu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1,outputBufferType:u=oi}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=n;let x=u,M=new Set([To,Eo,yo]),g=new Set([oi,Li,Da,$r,xo,Mo]),f=new Uint32Array(4),b=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[]},y=null,w=null,N=[],m=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,z=!1,F=null,H=null,Y=null,I=null;this._outputColorSpace=ui;let k=0,te=0,W=null,pe=-1,q=null,K=new Tt,ce=new Tt,De=null,$=new Ge(0),he=0,Ee=t.width,Ae=t.height,Re=1,fe=null,Xe=null,Qe=new Tt(0,0,Ee,Ae),Ce=new Tt(0,0,Ee,Ae),Pt=!1,Ft=new Ua,ft=new cd,dt=!1,Wt=!1,Qt=new pt,_t=new V,st=new Tt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function ii(){return W===null?Re:1}let B=i;function $t(d,T){return t.getContext(d,T)}let Te,vt,ve,nt,Le,Ue,At,E,v,G,se,Q,_e,de,U,re,xe,L,X,ae,oe,me,ge;try{let d={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r187"),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),B===null){let T="webgl2";if(B=$t(T,d),B===null)throw $t(T)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(d){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Be("WebGLRenderer: "+d.message),d}function Pe(){Te=new zm(B),Te.init(),oe=new w_(B,Te),vt=new Rm(B,Te,e,oe),ve=new T_(B,Te),vt.reversedDepthBuffer&&p&&ve.buffers.depth.setReversed(!0),H=B.createFramebuffer(),Y=B.createFramebuffer(),I=B.createFramebuffer(),nt=new Vm(B),Le=new h_,Ue=new b_(B,Te,ve,Le,vt,oe,nt),At=new Bm(A),E=new kd(B),me=new wm(B,E),v=new Hm(B,E,nt,me),G=new Wm(B,v,E,me,nt),L=new km(B,vt,Ue),U=new Cm(Le),se=new c_(A,At,Te,vt,me,U),Q=new N_(A,Le),_e=new d_,de=new v_(Te),xe=new bm(A,At,ve,G,_,o),re=new E_(A,G,vt),ge=new D_(B,nt,vt,ve),X=new Am(B,Te,nt),ae=new Gm(B,Te,nt),nt.programs=se.programs,A.capabilities=vt,A.extensions=Te,A.properties=Le,A.renderLists=_e,A.shadowMap=re,A.state=ve,A.info=nt}x!==oi&&(S=new jm(x,t.width,t.height,s,r,a));let le=new P_(A,B);this.xr=le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let d=Te.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){let d=Te.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(d){d!==void 0&&(Re=d,this.setSize(Ee,Ae,!1))},this.getSize=function(d){return d.set(Ee,Ae)},this.setSize=function(d,T,D=!0){if(le.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=d,Ae=T,t.width=Math.floor(d*Re),t.height=Math.floor(T*Re),D===!0&&(t.style.width=d+"px",t.style.height=T+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,d,T)},this.getDrawingBufferSize=function(d){return d.set(Ee*Re,Ae*Re).floor()},this.setDrawingBufferSize=function(d,T,D){Ee=d,Ae=T,Re=D,t.width=Math.floor(d*D),t.height=Math.floor(T*D),this.setViewport(0,0,d,T)},this.setEffects=function(d){if(x===oi){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(d){for(let T=0;T<d.length;T++)if(d[T].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(d||[])},this.getCurrentViewport=function(d){return d.copy(K)},this.getViewport=function(d){return d.copy(Qe)},this.setViewport=function(d,T,D,C){d.isVector4?Qe.set(d.x,d.y,d.z,d.w):Qe.set(d,T,D,C),ve.viewport(K.copy(Qe).multiplyScalar(ii()).round())},this.getScissor=function(d){return d.copy(Ce)},this.setScissor=function(d,T,D,C){d.isVector4?Ce.set(d.x,d.y,d.z,d.w):Ce.set(d,T,D,C),ve.scissor(ce.copy(Ce).multiplyScalar(ii()).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(d){ve.setScissorTest(Pt=d)},this.setOpaqueSort=function(d){fe=d},this.setTransparentSort=function(d){Xe=d},this.getClearColor=function(d){return d.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(d=!0,T=!0,D=!0){let C=0;if(d){let P=!1;if(W!==null){let J=W.texture.format;P=M.has(J)}if(P){let J=W.texture.type,ie=g.has(J),ee=xe.getClearColor(),ne=xe.getClearAlpha(),j=ee.r,Se=ee.g,be=ee.b;ie?(f[0]=j,f[1]=Se,f[2]=be,f[3]=ne,B.clearBufferuiv(B.COLOR,0,f)):(b[0]=j,b[1]=Se,b[2]=be,b[3]=ne,B.clearBufferiv(B.COLOR,0,b))}else C|=B.COLOR_BUFFER_BIT}T&&(C|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),D&&(C|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C!==0&&B.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(d){d.setRenderer(this),F=d},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),xe.dispose(),_e.dispose(),de.dispose(),Ue.dispose(),Le.dispose(),At.dispose(),G.dispose(),v.dispose(),me.dispose(),ge.dispose(),se.dispose(),le.dispose(),le.removeEventListener("sessionstart",ja),le.removeEventListener("sessionend",Bt),Ui.stop()};function He(d){d.preventDefault(),ll("WebGLRenderer: Context Lost."),z=!0}function Ne(){ll("WebGLRenderer: Context Restored."),z=!1;let d=nt.autoReset,T=re.enabled,D=re.autoUpdate,C=re.needsUpdate,P=re.type;Pe(),nt.autoReset=d,re.enabled=T,re.autoUpdate=D,re.needsUpdate=C,re.type=P}function Ve(d){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function Me(d){let T=d.target;T.removeEventListener("dispose",Me),lt(T)}function lt(d){ct(d),Le.remove(d)}function ct(d){let T=Le.get(d).programs;T!==void 0&&(T.forEach(function(D){se.releaseProgram(D)}),d.isShaderMaterial&&se.releaseShaderCache(d))}this.renderBufferDirect=function(d,T,D,C,P,J){T===null&&(T=It);let ie=P.isMesh&&P.matrixWorld.determinantAffine()<0,ee=qa(d,T,D,C,P);ve.setMaterial(C,ie);let ne=D.index,j=1;if(C.wireframe===!0){if(ne=v.getWireframeAttribute(D),ne===void 0)return;j=2}let Se=D.drawRange,be=D.attributes.position,ue=Se.start*j,Ie=(Se.start+Se.count)*j;J!==null&&(ue=Math.max(ue,J.start*j),Ie=Math.min(Ie,(J.start+J.count)*j)),ne!==null?(ue=Math.max(ue,0),Ie=Math.min(Ie,ne.count)):be!=null&&(ue=Math.max(ue,0),Ie=Math.min(Ie,be.count));let ke=Ie-ue;if(ke<0||ke===1/0)return;me.setup(P,C,ee,D,ne);let je,rt=X;if(ne!==null&&(je=E.get(ne),rt=ae,rt.setIndex(je)),P.isMesh)C.wireframe===!0?(ve.setLineWidth(C.wireframeLinewidth*ii()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(P.isLine){let ht=C.linewidth;ht===void 0&&(ht=1),ve.setLineWidth(ht*ii()),P.isLineSegments?rt.setMode(B.LINES):P.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else P.isPoints?rt.setMode(B.POINTS):P.isSprite&&rt.setMode(B.TRIANGLES);if(P.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))rt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{let ht=P._multiDrawStarts,we=P._multiDrawCounts,zt=P._multiDrawCount,gi=ne?E.get(ne).bytesPerElement:1,_i=Le.get(C).currentProgram.getUniforms();for(let Rt=0;Rt<zt;Rt++)_i.setValue(B,"_gl_DrawID",Rt),rt.render(ht[Rt]/gi,we[Rt])}else if(P.isInstancedMesh)rt.renderInstances(ue,ke,P.count);else if(D.isInstancedBufferGeometry){let ht=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,we=Math.min(D.instanceCount,ht);rt.renderInstances(ue,ke,we)}else rt.render(ue,ke)};function br(d,T,D,C){F!==null&&d.isNodeMaterial&&F.setObject(C,d),dt===!0&&U.setState(d,D,!1),d.transparent===!0&&d.side===ki&&d.forceSinglePass===!1?(d.side=ai,d.needsUpdate=!0,ci(d,T,C),d.side=_r,d.needsUpdate=!0,ci(d,T,C),d.side=ki):ci(d,T,C)}this.compile=function(d,T,D=null){D===null&&(D=d),F!==null&&F.renderStart(d,T,D),w=de.get(D),w.init(T),m.push(w),D.traverseVisible(function(P){P.isLight&&P.layers.test(T.layers)&&(w.pushLight(P),P.castShadow&&w.pushShadow(P))}),d!==D&&d.traverseVisible(function(P){P.isLight&&P.layers.test(T.layers)&&(w.pushLight(P),P.castShadow&&w.pushShadow(P))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Wt=this.localClippingEnabled,dt=U.init(this.clippingPlanes,Wt),dt===!0&&U.setGlobalState(this.clippingPlanes,T),F!==null&&re.render(w.state.shadowsArray,D,T);let C=new Set;return d.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;let J=P.material;if(J)if(Array.isArray(J))for(let ie=0;ie<J.length;ie++){let ee=J[ie];br(ee,D,T,P),C.add(ee)}else br(J,D,T,P),C.add(J)}),w=m.pop(),F!==null&&F.renderEnd(),C},this.compileAsync=function(d,T,D=null){let C=this.compile(d,T,D);return new Promise(P=>{function J(){if(C.forEach(function(ie){let ee=Le.get(ie).currentProgram;(ee===void 0||ee.isReady())&&C.delete(ie)}),C.size===0){P(d);return}setTimeout(J,10)}Te.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let wr=null;function Lt(d){wr&&wr(d)}function ja(){Ui.stop()}function Bt(){Ui.start()}let Ui=new nh;Ui.setAnimationLoop(Lt),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(d){wr=d,le.setAnimationLoop(d),d===null?Ui.stop():Ui.start()},le.addEventListener("sessionstart",ja),le.addEventListener("sessionend",Bt),this.render=function(d,T){if(T!==void 0&&T.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;F!==null&&F.renderStart(d,T);let D=le.enabled===!0&&le.isPresenting===!0,C=S!==null&&(W===null||D)&&S.begin(A,W);if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(T),T=le.getCamera()),d.isScene===!0&&d.onBeforeRender(A,d,T,W),w=de.get(d,m.length),w.init(T),w.state.textureUnits=Ue.getTextureUnits(),m.push(w),Qt.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),T.isArrayCamera?ft.setFromArrayCamera(T):Ft.setFromProjectionMatrix(Qt,yi,T.reversedDepth),Wt=this.localClippingEnabled,dt=U.init(this.clippingPlanes,Wt),y=_e.get(d,N.length),y.init(),N.push(y),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let J=A.xr.getDepthSensingMesh();J!==null&&da(J,T,-1/0,A.sortObjects)}da(d,T,0,A.sortObjects),y.finish(),F!==null&&F.updateLights(w.state.lightsArray),A.sortObjects===!0&&y.sort(fe,Xe),Xt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Xt&&xe.addToRenderList(y,d),this.info.autoReset===!0&&this.info.reset(),dt===!0&&U.beginShadows();let P=w.state.shadowsArray;if(re.render(P,d,T),dt===!0&&U.endShadows(),(C&&S.hasRenderPass())===!1){let J=y.opaque,ie=y.transmissive;if(w.setupLights(),T.isArrayCamera){let ee=T.cameras;if(ie.length>0)for(let ne=0,j=ee.length;ne<j;ne++){let Se=ee[ne];Zi(J,ie,d,Se)}Xt&&xe.render(d);for(let ne=0,j=ee.length;ne<j;ne++){let Se=ee[ne];pa(y,d,Se,Se.viewport)}}else ie.length>0&&Zi(J,ie,d,T),Xt&&xe.render(d),pa(y,d,T)}W!==null&&te===0&&(Ue.updateMultisampleRenderTarget(W),Ue.updateRenderTargetMipmap(W)),C&&S.end(A),d.isScene===!0&&d.onAfterRender(A,d,T),me.resetDefaultState(),pe=-1,q=null,m.pop(),m.length>0?(w=m[m.length-1],Ue.setTextureUnits(w.state.textureUnits),dt===!0&&U.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,N.pop(),N.length>0?y=N[N.length-1]:y=null,F!==null&&F.renderEnd()};function da(d,T,D,C){if(d.visible===!1)return;if(d.layers.test(T.layers)){if(d.isGroup)D=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(T);else if(d.isLight)w.pushLight(d),d.castShadow&&w.pushShadow(d);else if(d.isSprite){let J=T.isArrayCamera?ft:Ft;if(!d.frustumCulled||d.intersectsFrustum(J)){C&&st.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Qt);let ie=G.update(d),ee=d.material;ee.visible&&y.push(d,ie,ee,D,st.z,null,T)}}else if(d.isMesh||d.isLine||d.isPoints){let J=T.isArrayCamera?ft:Ft;if(!d.frustumCulled||d.intersectsFrustum(J)){let ie=G.update(d),ee=d.material;if(C&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),st.copy(d.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),st.copy(ie.boundingSphere.center)),st.applyMatrix4(d.matrixWorld).applyMatrix4(Qt)),Array.isArray(ee)){let ne=ie.groups;for(let j=0,Se=ne.length;j<Se;j++){let be=ne[j],ue=ee[be.materialIndex];ue&&ue.visible&&y.push(d,ie,ue,D,st.z,be,T)}}else ee.visible&&y.push(d,ie,ee,D,st.z,null,T)}}}let P=d.children;for(let J=0,ie=P.length;J<ie;J++)da(P[J],T,D,C)}function pa(d,T,D,C){let{opaque:P,transmissive:J,transparent:ie}=d;w.setupLightsView(D),dt===!0&&U.setGlobalState(A.clippingPlanes,D),C&&ve.viewport(K.copy(C)),P.length>0&&hr(P,T,D),J.length>0&&hr(J,T,D),ie.length>0&&hr(ie,T,D),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Zi(d,T,D,C){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[C.id]===void 0){let be=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[C.id]=new Pi(1,1,{generateMipmaps:!0,type:be?Ni:oi,minFilter:ar,samples:Math.max(4,vt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let P=w.state.transmissionRenderTarget[C.id],J=C.viewport||K;P.setSize(J.z*A.transmissionResolutionScale,J.w*A.transmissionResolutionScale);let ie=A.getRenderTarget(),ee=A.getActiveCubeFace(),ne=A.getActiveMipmapLevel();A.setRenderTarget(P),A.getClearColor($),he=A.getClearAlpha(),he<1&&A.setClearColor(16777215,.5),A.clear(),Xt&&xe.render(D);let j=A.toneMapping;A.toneMapping=Xi;let Se=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),w.setupLightsView(C),dt===!0&&U.setGlobalState(A.clippingPlanes,C),hr(d,D,C),Ue.updateMultisampleRenderTarget(P),Ue.updateRenderTargetMipmap(P),Te.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ue=0,Ie=T.length;ue<Ie;ue++){let ke=T[ue],{object:je,geometry:rt,material:ht,group:we}=ke;if(ht.side===ki&&je.layers.test(C.layers)){let zt=ht.side;ht.side=ai,ht.needsUpdate=!0,li(je,D,C,rt,ht,we),ht.side=zt,ht.needsUpdate=!0,be=!0}}be===!0&&(Ue.updateMultisampleRenderTarget(P),Ue.updateRenderTargetMipmap(P))}A.setRenderTarget(ie,ee,ne),A.setClearColor($,he),Se!==void 0&&(C.viewport=Se),A.toneMapping=j}function hr(d,T,D){let C=T.isScene===!0?T.overrideMaterial:null;for(let P=0,J=d.length;P<J;P++){let ie=d[P],{object:ee,geometry:ne,group:j}=ie,Se=ie.material;Se.allowOverride===!0&&C!==null&&(Se=C),ee.layers.test(D.layers)&&li(ee,T,D,ne,Se,j)}}function li(d,T,D,C,P,J){F!==null&&P.isNodeMaterial&&F.setObject(d,P),d.onBeforeRender(A,T,D,C,P,J),d.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),P.onBeforeRender(A,T,D,C,d,J),P.transparent===!0&&P.side===ki&&P.forceSinglePass===!1?(P.side=ai,P.needsUpdate=!0,A.renderBufferDirect(D,T,C,P,d,J),P.side=_r,P.needsUpdate=!0,A.renderBufferDirect(D,T,C,P,d,J),P.side=ki):A.renderBufferDirect(D,T,C,P,d,J),d.onAfterRender(A,T,D,C,P,J)}function mi(d){let T=0;for(let D of d)D.texture!==null&&T++;return T}function ci(d,T,D){T.isScene!==!0&&(T=It);let C=Le.get(d),P=w.state.lights,J=w.state.shadowsArray,ie=P.state.version,ee=se.getParameters(d,P.state,J,T,D,w.state.lightProbeGridArray),ne=se.getProgramCacheKey(ee),j=C.programs;C.environment=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?T.environment:null,C.fog=T.fog;let Se=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap;C.envMap=At.get(d.envMap||C.environment,Se),C.envMapRotation=C.environment!==null&&d.envMap===null?T.environmentRotation:d.envMapRotation,j===void 0&&(d.addEventListener("dispose",Me),j=new Map,C.programs=j,C.programVariants=new Map);let be=j.get(ne);if(be!==void 0){if(C.currentProgram===be&&C.lightsStateVersion===ie)return ga(d,ee),be}else ee.uniforms=se.getUniforms(d),F!==null&&d.isNodeMaterial&&F.build(d,D,ee),d.onBeforeCompile(ee,A),be=se.acquireProgram(ee,ne),j.set(ne,be),C.uniforms=ee.uniforms;let ue=C.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(ue.clippingPlanes=U.uniform),ga(d,ee),C.needsLights=O(d),C.lightsStateVersion=ie,C.needsLights&&(ue.ambientLightColor.value=P.state.ambient,ue.lightProbe.value=P.state.probe,ue.sunLights.value=P.state.sun,ue.sunLightShadows.value=P.state.sunShadow,ue.directionalLights.value=P.state.directional,ue.directionalLightShadows.value=P.state.directionalShadow,ue.spotLights.value=P.state.spot,ue.spotLightShadows.value=P.state.spotShadow,ue.rectAreaLights.value=P.state.rectArea,ue.ltc_1.value=P.state.rectAreaLTC1,ue.ltc_2.value=P.state.rectAreaLTC2,ue.pointLights.value=P.state.point,ue.pointLightShadows.value=P.state.pointShadow,ue.hemisphereLights.value=P.state.hemi,ue.sunShadowMatrix.value=P.state.sunShadowMatrix,ue.sunShadowCascade.value=P.state.sunShadowCascade,ue.directionalShadowMatrix.value=P.state.directionalShadowMatrix,ue.spotLightMatrix.value=P.state.spotLightMatrix,ue.spotLightMap.value=P.state.spotLightMap,ue.pointShadowMatrix.value=P.state.pointShadowMatrix),C.numLightProbeGrids=mi(w.state.lightProbeGridArray),C.currentProgram=be,C.uniformsList=null,be}function fa(d,T,D,C,P){let J=Le.get(d),ie=J.currentProgram.id+","+C+","+P,ee=J.programVariants.get(ie);return ee===void 0?(ee=ci(d,T,D),J.programVariants.set(ie,ee)):(J.currentProgram=ee,J.uniformsList=null,J.outputColorSpace=C,J.toneMapping=P),ee}function ma(d){if(d.uniformsList===null){let T=d.currentProgram.getUniforms();d.uniformsList=Ln.seqWithValue(T.seq,d.uniforms)}return d.uniformsList}function ga(d,T){let D=Le.get(d);D.outputColorSpace=T.outputColorSpace,D.batching=T.batching,D.batchingColor=T.batchingColor,D.instancing=T.instancing,D.instancingColor=T.instancingColor,D.instancingMorph=T.instancingMorph,D.skinning=T.skinning,D.morphTargets=T.morphTargets,D.morphNormals=T.morphNormals,D.morphColors=T.morphColors,D.morphTargetsCount=T.morphTargetsCount,D.numClippingPlanes=T.numClippingPlanes,D.numIntersection=T.numClipIntersection,D.vertexAlphas=T.vertexAlphas,D.vertexTangents=T.vertexTangents,D.toneMapping=T.toneMapping}function qa(d,T,D,C,P){T.isScene!==!0&&(T=It),Ue.resetTextureUnits();let J=T.fog,ie=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?T.environment:null,ee=W===null?A.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:$e.workingColorSpace,ne=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,j=At.get(C.envMap||ie,ne),Se=C.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,be=!!D.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),ue=!!D.morphAttributes.position,Ie=!!D.morphAttributes.normal,ke=!!D.morphAttributes.color,je=Xi;C.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(je=A.toneMapping);let rt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ht=rt!==void 0?rt.length:0,we=Le.get(C),zt=w.state.lights;if(dt===!0&&(Wt===!0||d!==q)){let Ke=d===q&&C.id===pe;U.setState(C,d,Ke)}let gi=!1,_i=!1;C.version===we.__version?we.needsLights&&we.lightsStateVersion!==zt.state.version||P.isBatchedMesh&&we.batching===!1||!P.isBatchedMesh&&we.batching===!0||P.isBatchedMesh&&we.batchingColor===!0&&P._colorsTexture===null||P.isBatchedMesh&&we.batchingColor===!1&&P._colorsTexture!==null||P.isInstancedMesh&&we.instancing===!1||!P.isInstancedMesh&&we.instancing===!0||P.isSkinnedMesh&&we.skinning===!1||!P.isSkinnedMesh&&we.skinning===!0||P.isInstancedMesh&&we.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&we.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&we.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&we.instancingMorph===!1&&P.morphTexture!==null||we.envMap!==j||C.fog===!0&&we.fog!==J||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==U.numPlanes||we.numIntersection!==U.numIntersection)||we.vertexAlphas!==Se||we.vertexTangents!==be||we.morphTargets!==ue||we.morphNormals!==Ie||we.morphColors!==ke||we.morphTargetsCount!==ht||we.numLightProbeGrids!==mi(w.state.lightProbeGridArray)?gi=!0:(we.outputColorSpace!==ee||we.toneMapping!==je)&&(_i=!0):(gi=!0,we.__version=C.version);let Rt=we.currentProgram;(gi===!0||_i===!0)&&(Rt=_i===!0?fa(C,T,P,ee,je):ci(C,T,P),F&&C.isNodeMaterial&&F.onUpdateProgram(C,Rt,we));let qe=!1,xt=!1,ut=!1,Oe=Rt.getUniforms(),tt=we.uniforms;if(ve.useProgram(Rt.program)&&(qe=!0,xt=!0,ut=!0),C.id!==pe&&(pe=C.id,xt=!0),qe||q!==d){ve.buffers.depth.getReversed()&&d.reversedDepth!==!0&&(d._reversedDepth=!0,d.updateProjectionMatrix()),Oe.setValue(B,"projectionMatrix",d.projectionMatrix),Oe.setValue(B,"viewMatrix",d.matrixWorldInverse);let Ke=Oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(B,_t.setFromMatrixPosition(d.matrixWorld)),vt.logarithmicDepthBuffer&&Oe.setValue(B,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&Oe.setValue(B,"isOrthographic",d.isOrthographicCamera===!0),q!==d&&(q=d,xt=!0,ut=!0)}if(we.needsLights&&(zt.state.sunShadowMap.length>0&&Oe.setValue(B,"sunShadowMap",zt.state.sunShadowMap,Ue),zt.state.directionalShadowMap.length>0&&Oe.setValue(B,"directionalShadowMap",zt.state.directionalShadowMap,Ue),zt.state.spotShadowMap.length>0&&Oe.setValue(B,"spotShadowMap",zt.state.spotShadowMap,Ue),zt.state.pointShadowMap.length>0&&Oe.setValue(B,"pointShadowMap",zt.state.pointShadowMap,Ue)),P.isSkinnedMesh){Oe.setOptional(B,P,"bindMatrix"),Oe.setOptional(B,P,"bindMatrixInverse");let Ke=P.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(B,"boneTexture",Ke.boneTexture,Ue))}P.isBatchedMesh&&(Oe.setOptional(B,P,"batchingTexture"),Oe.setValue(B,"batchingTexture",P._matricesTexture,Ue),Oe.setOptional(B,P,"batchingIdTexture"),Oe.setValue(B,"batchingIdTexture",P._indirectTexture,Ue),Oe.setOptional(B,P,"batchingColorTexture"),P._colorsTexture!==null&&Oe.setValue(B,"batchingColorTexture",P._colorsTexture,Ue));let St=D.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&L.update(P,D,Rt),(xt||we.receiveShadow!==P.receiveShadow)&&(we.receiveShadow=P.receiveShadow,Oe.setValue(B,"receiveShadow",P.receiveShadow)),(C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial)&&C.envMap===null&&T.environment!==null&&(tt.envMapIntensity.value=T.environmentIntensity),tt.dfgLUT!==void 0&&(tt.dfgLUT.value=U_()),xt){if(Oe.setValue(B,"toneMappingExposure",A.toneMappingExposure),we.needsLights&&jn(tt,ut),J&&C.fog===!0&&Q.refreshFogUniforms(tt,J),Q.refreshMaterialUniforms(tt,C,Re,Ae,w.state.transmissionRenderTarget[d.id]),we.needsLights&&we.numLightProbeGrids>0){let Ke=R,mt=0;for(let Oi of w.state.lightProbeGridArray)Oi.texture!==null&&(Ke.textures[mt]=Oi.texture,Ke.min[mt]=Oi.boundingBox.min,Ke.max[mt]=Oi.boundingBox.max,Ke.resolution[mt]=Oi.resolution,mt++);for(let Oi in Ke)Ke[Oi].length=mt;tt.probesSH.value=Ke.textures,tt.probesMin.value=Ke.min,tt.probesMax.value=Ke.max,tt.probesResolution.value=Ke.resolution}Ln.upload(B,ma(we),tt,Ue)}if(C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Ln.upload(B,ma(we),tt,Ue),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&Oe.setValue(B,"center",P.center),Oe.setValue(B,"modelViewMatrix",P.modelViewMatrix),Oe.setValue(B,"normalMatrix",P.normalMatrix),Oe.setValue(B,"modelMatrix",P.matrixWorld),C.uniformsGroups!==void 0){let Ke=C.uniformsGroups;for(let mt=0,Oi=Ke.length;mt<Oi;mt++){let qo=Ke[mt];ge.update(qo,Rt),ge.bind(qo,Rt)}}return Rt}function jn(d,T){d.ambientLightColor.needsUpdate=T,d.lightProbe.needsUpdate=T,d.sunLights.needsUpdate=T,d.sunLightShadows.needsUpdate=T,d.directionalLights.needsUpdate=T,d.directionalLightShadows.needsUpdate=T,d.pointLights.needsUpdate=T,d.pointLightShadows.needsUpdate=T,d.spotLights.needsUpdate=T,d.spotLightShadows.needsUpdate=T,d.rectAreaLights.needsUpdate=T,d.hemisphereLights.needsUpdate=T}function O(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(d,T,D){let C=Le.get(d);C.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,C.__autoAllocateDepthBuffer===!1&&(C.__useRenderToTexture=!1),Le.get(d.texture).__webglTexture=T,Le.get(d.depthTexture).__webglTexture=C.__autoAllocateDepthBuffer?void 0:D,C.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,T){let D=Le.get(d);D.__webglFramebuffer=T,D.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(d,T=0,D=0){W=d,k=T,te=D;let C=null,P=!1,J=!1;if(d){let ie=Le.get(d);if(ie.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(B.FRAMEBUFFER,ie.__webglFramebuffer),K.copy(d.viewport),ce.copy(d.scissor),De=d.scissorTest,ve.viewport(K),ve.scissor(ce),ve.setScissorTest(De),pe=-1;return}else if(ie.__webglFramebuffer===void 0)Ue.setupRenderTarget(d);else if(ie.__hasExternalTextures)Ue.rebindTextures(d,Le.get(d.texture).__webglTexture,Le.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){let j=d.depthTexture;if(ie.__boundDepthTexture!==j){if(j!==null&&Le.has(j)&&(d.width!==j.image.width||d.height!==j.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(d)}}let ee=d.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(J=!0);let ne=Le.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(ne[T])?C=ne[T][D]:C=ne[T],P=!0):d.samples>0&&Ue.useMultisampledRTT(d)===!1?C=Le.get(d).__webglMultisampledFramebuffer:Array.isArray(ne)?C=ne[D]:C=ne,K.copy(d.viewport),ce.copy(d.scissor),De=d.scissorTest}else K.copy(Qe).multiplyScalar(Re).floor(),ce.copy(Ce).multiplyScalar(Re).floor(),De=Pt;if(D!==0&&(C=H),ve.bindFramebuffer(B.FRAMEBUFFER,C)&&ve.drawBuffers(d,C),ve.viewport(K),ve.scissor(ce),ve.setScissorTest(De),P){let ie=Le.get(d.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+T,ie.__webglTexture,D)}else if(J){let ie=T;for(let ee=0;ee<d.textures.length;ee++){let ne=Le.get(d.textures[ee]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ee,ne.__webglTexture,D,ie)}}else if(d!==null&&D!==0){let ie=Le.get(d.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ie.__webglTexture,D)}pe=-1};function Z(d){let T=Le.get(d);return(T.__readFormat!==d.format||T.__readType!==d.type)&&(T.__readFormat=d.format,T.__readType=d.type,T.__formatReadable=vt.textureFormatReadable(d.format),T.__typeReadable=vt.textureTypeReadable(d.type)),T}this.readRenderTargetPixels=function(d,T,D,C,P,J,ie,ee=0){if(!(d&&d.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Le.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&ie!==void 0&&(ne=ne[ie],Array.isArray(ne)&&(ne=ne[0])),ne){ve.bindFramebuffer(B.FRAMEBUFFER,ne);try{let j=d.textures[ee],Se=j.format,be=j.type;d.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ee);let ue=Z(j);if(ue.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ue.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=d.width-C&&D>=0&&D<=d.height-P&&B.readPixels(T,D,C,P,oe.convert(Se),oe.convert(be),J)}finally{let j=W!==null?Le.get(W).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,j)}}},this.readRenderTargetPixelsAsync=async function(d,T,D,C,P,J,ie,ee=0){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Le.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&ie!==void 0&&(ne=ne[ie],Array.isArray(ne)&&(ne=ne[0])),ne)if(T>=0&&T<=d.width-C&&D>=0&&D<=d.height-P){ve.bindFramebuffer(B.FRAMEBUFFER,ne);let j=d.textures[ee],Se=j.format,be=j.type;d.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ee);let ue=Z(j);if(ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ie),B.bufferData(B.PIXEL_PACK_BUFFER,J.byteLength,B.STREAM_READ),B.readPixels(T,D,C,P,oe.convert(Se),oe.convert(be),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ke=W!==null?Le.get(W).__webglFramebuffer:null;ve.bindFramebuffer(B.FRAMEBUFFER,ke);let je=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Uu(B,je,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ie),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,J),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ie),B.deleteSync(je),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(d,T=null,D=0){let C=Math.pow(2,-D),P=Math.floor(d.image.width*C),J=Math.floor(d.image.height*C),ie=T!==null?T.x:0,ee=T!==null?T.y:0;Ue.setTexture2D(d,0),B.copyTexSubImage2D(B.TEXTURE_2D,D,0,0,ie,ee,P,J),ve.unbindTexture()},this.copyTextureToTexture=function(d,T,D=null,C=null,P=0,J=0){let ie,ee,ne,j,Se,be,ue,Ie,ke,je=d.isCompressedTexture?d.mipmaps[J]:d.image;if(D!==null)ie=D.max.x-D.min.x,ee=D.max.y-D.min.y,ne=D.isBox3?D.max.z-D.min.z:1,j=D.min.x,Se=D.min.y,be=D.isBox3?D.min.z:0;else{let Oe=Math.pow(2,-P);ie=Math.floor(je.width*Oe),ee=Math.floor(je.height*Oe),d.isDataArrayTexture?ne=je.depth:d.isData3DTexture?ne=Math.floor(je.depth*Oe):ne=1,j=0,Se=0,be=0}C!==null?(ue=C.x,Ie=C.y,ke=C.z):(ue=0,Ie=0,ke=0);let rt=oe.convert(T.format),ht=oe.convert(T.type),we;T.isData3DTexture?(Ue.setTexture3D(T,0),we=B.TEXTURE_3D):T.isDataArrayTexture||T.isCompressedArrayTexture?(Ue.setTexture2DArray(T,0),we=B.TEXTURE_2D_ARRAY):(Ue.setTexture2D(T,0),we=B.TEXTURE_2D),ve.activeTexture(B.TEXTURE0),ve.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,T.flipY),ve.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),ve.pixelStorei(B.UNPACK_ALIGNMENT,T.unpackAlignment);let zt=ve.getParameter(B.UNPACK_ROW_LENGTH),gi=ve.getParameter(B.UNPACK_IMAGE_HEIGHT),_i=ve.getParameter(B.UNPACK_SKIP_PIXELS),Rt=ve.getParameter(B.UNPACK_SKIP_ROWS),qe=ve.getParameter(B.UNPACK_SKIP_IMAGES);ve.pixelStorei(B.UNPACK_ROW_LENGTH,je.width),ve.pixelStorei(B.UNPACK_IMAGE_HEIGHT,je.height),ve.pixelStorei(B.UNPACK_SKIP_PIXELS,j),ve.pixelStorei(B.UNPACK_SKIP_ROWS,Se),ve.pixelStorei(B.UNPACK_SKIP_IMAGES,be);let xt=d.isDataArrayTexture||d.isData3DTexture,ut=T.isDataArrayTexture||T.isData3DTexture;if(d.isDepthTexture){let Oe=Le.get(d),tt=Le.get(T),St=Le.get(Oe.__renderTarget),Ke=Le.get(tt.__renderTarget);ve.bindFramebuffer(B.READ_FRAMEBUFFER,St.__webglFramebuffer),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let mt=0;mt<ne;mt++)xt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(d).__webglTexture,P,be+mt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Le.get(T).__webglTexture,J,ke+mt)),B.blitFramebuffer(j,Se,j+ie,Se+ee,ue,Ie,ue+ie,Ie+ee,B.DEPTH_BUFFER_BIT,B.NEAREST);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(P!==0||d.isRenderTargetTexture||Le.has(d)){let Oe=Le.get(d),tt=Le.get(T);ve.bindFramebuffer(B.READ_FRAMEBUFFER,Y),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,I);for(let St=0;St<ne;St++)xt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,P,be+St):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,P),ut?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.__webglTexture,J,ke+St):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tt.__webglTexture,J),P!==0?B.blitFramebuffer(j,Se,j+ie,Se+ee,ue,Ie,ue+ie,Ie+ee,B.COLOR_BUFFER_BIT,B.NEAREST):ut?B.copyTexSubImage3D(we,J,ue,Ie,ke+St,j,Se,ie,ee):B.copyTexSubImage2D(we,J,ue,Ie,j,Se,ie,ee);ve.bindFramebuffer(B.READ_FRAMEBUFFER,null),ve.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ut?d.isDataTexture||d.isData3DTexture?B.texSubImage3D(we,J,ue,Ie,ke,ie,ee,ne,rt,ht,je.data):T.isCompressedArrayTexture?B.compressedTexSubImage3D(we,J,ue,Ie,ke,ie,ee,ne,rt,je.data):B.texSubImage3D(we,J,ue,Ie,ke,ie,ee,ne,rt,ht,je):d.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,ue,Ie,ie,ee,rt,ht,je.data):d.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,ue,Ie,je.width,je.height,rt,je.data):B.texSubImage2D(B.TEXTURE_2D,J,ue,Ie,ie,ee,rt,ht,je);ve.pixelStorei(B.UNPACK_ROW_LENGTH,zt),ve.pixelStorei(B.UNPACK_IMAGE_HEIGHT,gi),ve.pixelStorei(B.UNPACK_SKIP_PIXELS,_i),ve.pixelStorei(B.UNPACK_SKIP_ROWS,Rt),ve.pixelStorei(B.UNPACK_SKIP_IMAGES,qe),J===0&&T.generateMipmaps===!0&&T.mipmapsAutoUpdate===!0&&B.generateMipmap(we),ve.unbindTexture()},this.initRenderTarget=function(d){Le.get(d).__webglFramebuffer===void 0&&Ue.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?Ue.setTextureCube(d,0):d.isData3DTexture?Ue.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?Ue.setTexture2DArray(d,0):Ue.setTexture2D(d,0),ve.unbindTexture()},this.resetState=function(){k=0,te=0,W=null,ve.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}});var Dh={};Qh(Dh,{createScene:()=>G_});function Do(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let i=t;return i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61),((i^i>>>14)>>>0)/4294967296}}function Tr(e,t){let i=Math.imul(e,374761393)+Math.imul(t,668265263)|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967295}function la(e,t){let i=Math.floor(e),r=Math.floor(t),a=e-i,n=t-r,s=a*a*(3-2*a),o=n*n*(3-2*n),l=at(Tr(i,r),Tr(i+1,r),s),c=at(Tr(i,r+1),Tr(i+1,r+1),s);return at(l,c,o)*2-1}function Sh(e,t,i=4){let r=0,a=.5,n=1;for(let s=0;s<i;s+=1)r+=a*la(e*n+s*17.3,t*n-s*9.1),n*=2.03,a*=.5;return r}function Eh(e,t){let i=[e[0],...e,e[e.length-1]],r=[],a=(n,s,o,l,c,h)=>{let p=c*c,u=p*c;return .5*(2*s[h]+(o[h]-n[h])*c+(2*n[h]-5*s[h]+4*o[h]-l[h])*p+(3*s[h]-n[h]-3*o[h]+l[h])*u)};for(let n=1;n<i.length-2;n+=1)for(let s=0;s<t;s+=1){let o=s/t;r.push([a(i[n-1],i[n],i[n+1],i[n+2],o,0),a(i[n-1],i[n],i[n+1],i[n+2],o,1)])}return r.push(e[e.length-1]),r}function Rh(e,t,i,r,a,n){let s=a-i,o=n-r,l=Vt(((e-i)*s+(t-r)*o)/(s*s+o*o||1),0,1);return Math.hypot(e-(i+s*l),t-(r+o*l))}function Th(e){let t=[0];for(let s=1;s<e.length;s+=1)t.push(t[s-1]+Math.hypot(e[s][0]-e[s-1][0],e[s][1]-e[s-1][1]));let i=t[t.length-1],r=e.map(s=>s[0]),a=e.map(s=>s[1]),n={x0:Math.min(...r),x1:Math.max(...r),z0:Math.min(...a),z1:Math.max(...a)};return{length:i,at(s,o){let l=Vt(s,0,1)*i,c=1;for(;c<t.length-1&&t[c]<l;)c+=1;let h=t[c]-t[c-1]||1,p=(l-t[c-1])/h,u=e[c-1],_=e[c];return o.x=at(u[0],_[0],p),o.z=at(u[1],_[1],p),o.tx=(_[0]-u[0])/h,o.tz=(_[1]-u[1])/h,o},distance(s,o,l){if(s<n.x0-l||s>n.x1+l||o<n.z0-l||o>n.z1+l)return 1/0;let c=1/0;for(let h=1;h<e.length;h+=1){let p=e[h-1],u=e[h];c=Math.min(c,Rh(s,o,p[0],p[1],u[0],u[1]))}return c}}}function Ph(e,t){let i=Kt.h*Math.pow(Vt(1-Math.hypot(e-Kt.x,(t-Kt.z)/.92)/25,0,1),1.7),r=11.5*Math.pow(Vt(1-Math.hypot(e+13.5,t+9)/12.5,0,1),1.5),a=8.6*Math.pow(Vt(1-Math.hypot((e-12.5)/1.35,t+8.5)/11,0,1),1.4);return Mh(i,Mh(r,a,1.5),1.5)}function Uo(e,t){let i=0;return Ch.forEach(r=>{let a=r.line.distance(e,t,r.half+bh);a<1/0&&(i=Math.max(i,1-ca(r.half,r.half+bh,a)))}),i}function Oo(e,t){let i=Math.hypot((e-Va.x)/Va.rx,(t-Va.z)/Va.rz);return 1-ca(.8,1.25,i)}function Nh(e,t){let i=Ph(e,t),r=ca(.3,5,i),a=1-Math.abs(la(e*.07+11,t*.07+5)),n=(Sh(e*.11+3.1,t*.11-1.7)*1.7+(a-.5)*1.5)*(.5+i/Kt.h),s=Uo(e,t),o=i+r*n*(1-.85*s),l=(Sh(e*.08-7,t*.08+2,2)+1)*.25*Lh(e,t);return o=Math.max(o,0)+l*(1-r),at(o,Va.y,Oo(e,t))}function Mt(e,t){let i=Nh(e,t),r=1-ca(1.2,2.4,Math.hypot(e-Kt.x,t-Kt.z));return at(i,Gn,r)}function wh(e,t,i){let r=8.2+la(e*.18+4,t*.18)*1.6;return i>r||Math.hypot(e/25,(t-2.5)/22)+la(e*.16-6,t*.16+3)*.12>1||la(e*.13-2,t*.13+8)<-.22||Oo(e,t)>.02||Uo(e,t)>.02||B_(e,t)<1.8?!1:Math.hypot(e-Kt.x,t-Kt.z)>3}function z_(){let e=(u,_)=>{let x=Hn[u].line.at(_,{});return[x.x,Mt(x.x,x.z),x.z]},t=e("easy",.42),i=e("easy",.5),r=e("expert",.5),a=e("expert",.5),n=Mt(ti.x,ti.z),s=[(Ze.bottom[0]+Ze.top[0])/2,0,(Ze.bottom[1]+Ze.top[1])/2];s[1]=Mt(s[0],s[2]);let o=.68,l=at(Ze.bottom[0],Ze.top[0],o),c=at(Ze.bottom[1],Ze.top[1],o),h=at(Mt(...Ze.bottom)+2,Mt(...Ze.top)+2,o),p=Math.max(Mt(l,c)+2.8,h)+1.8;return{lift:{anchor:[l,p,c],target:[s[0],s[1]+3,s[2]-.8],distance:44,azimuth:64,elevation:24},easy:{anchor:[t[0],t[1]+2,t[2]],target:[i[0],i[1]+1,i[2]],distance:36,azimuth:40,elevation:26},expert:{anchor:[r[0],r[1]+2,r[2]],target:[a[0],a[1]+1,a[2]],distance:36,azimuth:-34,elevation:24},lodge:{anchor:[ti.x,n+3.6,ti.z],target:[ti.x+1.2,n+1,ti.z-.6],distance:23,azimuth:18,elevation:26},summit:{anchor:[Kt.x,Gn+3.4,Kt.z],target:[Kt.x,Gn-.6,Kt.z],distance:24,azimuth:-42,elevation:28}}}function Io(e,t,i,r,a=6){let n=new V().subVectors(t,e),s=n.length(),o=new gt(new lr(i,i,s,a,1),r);return o.position.copy(e).addScaledVector(n,.5),o.quaternion.setFromUnitVectors(O_,n.normalize()),o}function Ii(e,t,i,r){return new gt(new Ti(e,t,i),r)}function H_(){let t=document.createElement("canvas");t.width=32,t.height=32;let i=t.getContext("2d"),r=i.createImageData(32,32);for(let a=0;a<32;a+=1)for(let n=0;n<32;n+=1){let s=Math.hypot(n+.5-16,a+.5-16)/16,o=(a*32+n)*4;r.data[o]=255,r.data[o+1]=255,r.data[o+2]=255,r.data[o+3]=Math.round(255*(1-ca(.35,1,s)))}return i.putImageData(r,0,0),new Hc(t)}async function G_(e){let{container:t,labelLayer:i,landmarks:r,canvasLabel:a,getInsetLeft:n=()=>0,durations:s,onSelect:o=()=>{},onInteract:l=()=>{},onZoomLimits:c=()=>{},onContextLost:h=()=>{},onContextRestored:p=()=>{}}=e,u=!!e.poster,_=window.matchMedia(`(min-width: ${_a.wide}px)`),x=()=>_.matches,M=e.quality||(u||x()?"high":"low"),g=e.motion!==!1,f=!!e.reduced,b=e.weather==="snow"?"snow":"clear",R=document.createElement("canvas");R.className="scene__canvas",R.setAttribute("role","img"),R.setAttribute("aria-label",a(b)),t.prepend(R);let y=new _h({canvas:R,antialias:M==="high",powerPreference:"high-performance"});y.shadowMap.enabled=!0;let w=new Lc,N=new Cc(Fi.clear.sky,60,300);w.fog=N,w.background=new Ge(Fi.clear.sky);let m=new di(yt.fov,1,.5,3e3),S=(O,Z={})=>new Co({color:O,flatShading:!0,...Z}),A={terrain:new Co({vertexColors:!0,flatShading:!0}),valley:S(Ut.valley),farPeak:S(Ut.farPeak),tree:S(Ut.tree),treeSnow:S(Ut.treeSnow),rock:S(Ut.rock),structure:S(Ut.structure),accent:S(Ut.accent),wood:S(Ut.wood),dark:S(Ut.jacketDark),blob:new Ao({color:Ut.shadow,transparent:!0,opacity:.14,depthWrite:!1})},z=new Yt,F=new pi;w.add(F);let H=[],Y=(O,Z,d)=>{let T=new gt(new Wc(d,12).rotateX(-Math.PI/2),A.blob);T.position.set(O,Mt(O,Z)+.04,Z),F.add(T)},I=new th(Fi.clear.sky,Ut.snowCover,Ar.clear.hemi);w.add(I);let k=new ah(Fi.clear.keyLight,Ar.clear.key);k.position.set(-24,30,22),k.shadow.mapSize.set(Ht.shadowMapSize,Ht.shadowMapSize),Object.assign(k.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:110}),k.shadow.bias=-6e-4,k.shadow.normalBias=.04,w.add(k);let te=M==="high"?Ht.terrainSegmentsHigh:Ht.terrainSegmentsLow,W=new Fa(yh,yh,te,te).rotateX(-Math.PI/2),pe=W.attributes.position;for(let O=0;O<pe.count;O+=1)pe.setY(O,Mt(pe.getX(O),pe.getZ(O)));let q=W.toNonIndexed();W.dispose(),q.computeVertexNormals(),q.computeBoundingSphere();{let O=q.attributes.position,Z=new Float32Array(O.count*3),d={groomed:new Ge(Ut.groomed),rock:new Ge(Ut.rock),forest:new Ge(Ut.forestFloor),valley:new Ge(Ut.valley),snow:new Ge(Ut.snowCover)},T=new V,D=new V,C=new V,P=new V,J=new V;for(let ie=0;ie<O.count/3;ie+=1){T.fromBufferAttribute(O,ie*3),D.fromBufferAttribute(O,ie*3+1),C.fromBufferAttribute(O,ie*3+2);let ee=P.subVectors(D,T).cross(J.subVectors(C,T)).normalize().y,ne=(T.x+D.x+C.x)/3,j=(T.z+D.z+C.z)/3,Se=(T.y+D.y+C.y)/3,be=d.snow;Oo(ne,j)>.5||Uo(ne,j)>.55?be=d.groomed:Math.abs(ee)<.78&&Se>1.5||Se>11.5&&la(ne*.5,j*.5)>.35?be=d.rock:wh(ne,j,Se)?be=d.forest:(Se<.6&&Ph(ne,j)<.3||Lh(ne,j)<.5)&&(be=d.valley);let ue=1+(Tr(ie,7)-.5)*.05;for(let Ie=0;Ie<3;Ie+=1)Z.set([be.r*ue,be.g*ue,be.b*ue],(ie*3+Ie)*3)}q.setAttribute("color",new bt(Z,3))}let K=new gt(q,A.terrain);K.receiveShadow=!0,w.add(K);let ce=new gt(new Fa(1600,1600).rotateX(-Math.PI/2),A.valley);ce.position.y=-.08,ce.receiveShadow=!0,w.add(ce);{let O=Do(5),Z=new sa(1,1,9,3,!0),d=Z.attributes.position;for(let C=0;C<d.count;C+=1){let P=d.getY(C);if(P>.49)continue;let J=1+(Tr(C,3)-.5)*.5;d.setXYZ(C,d.getX(C)*J,P+(Tr(C,11)-.5)*.12*(P+.5),d.getZ(C)*J)}let T=16,D=new qi(Z,A.farPeak,T);for(let C=0;C<T;C+=1){let P=C/T*Er+O()*.25,J=210+O()*50,ie=5+O()*5,ee=40+O()*20;z.position.set(Math.sin(P)*J,ie/2-1,-Math.cos(P)*J),z.rotation.set(0,O()*Er,0),z.scale.set(ee,ie,ee),z.updateMatrix(),D.setMatrixAt(C,z.matrix)}Z.computeVertexNormals(),z.scale.setScalar(1),z.rotation.set(0,0,0),D.frustumCulled=!1,w.add(D)}let De=(()=>{let O=new pi,[Z,d]=Ze.bottom,[T,D]=Ze.top,C=T-Z,P=D-d,J=Math.hypot(C,P),ie=C/J,ee=P/J,ne=-ee,j=ie,Se=Math.atan2(ie,ee),be=Mt(Z,d)+2,ue=Mt(T,D)+2,Ie=[{x:Z,z:d,y:be}];for(let qe=1;qe<=Ze.towers;qe+=1){let xt=qe/(Ze.towers+1),ut=at(Z,T,xt),Oe=at(d,D,xt),tt=Mt(ut,Oe),St=Math.max(at(be,ue,xt),tt+2.8);Ie.push({x:ut,z:Oe,y:St}),O.add(Io(new V(ut,tt-.3,Oe),new V(ut,St+.12,Oe),.09,A.rock));let Ke=Ii(Ze.gauge*2+.3,.12,.14,A.rock);Ke.position.set(ut,St+.12,Oe),Ke.rotation.y=Se,O.add(Ke)}Ie.push({x:T,z:D,y:ue}),[[Z,d],[T,D]].forEach(([qe,xt],ut)=>{let Oe=Mt(qe,xt),tt=new pi;tt.position.set(qe,Oe,xt),tt.rotation.y=Se;let St=Ii(1.9,1.3,1.7,A.structure);St.position.y=.45;let Ke=Ii(2.3,.18,2.1,A.accent);Ke.position.y=1.2;let mt=new gt(new lr(Ze.gauge+.05,Ze.gauge+.05,.1,14),A.rock);mt.position.set(0,2,ut===0?-.9:.9),tt.add(St,Ke,mt),O.add(tt),ut===0&&Y(qe,xt,1.5)}),[1,-1].forEach(qe=>{for(let xt=1;xt<Ie.length;xt+=1){let ut=Ie[xt-1],Oe=Ie[xt];O.add(Io(new V(ut.x+ne*Ze.gauge*qe,ut.y,ut.z+j*Ze.gauge*qe),new V(Oe.x+ne*Ze.gauge*qe,Oe.y,Oe.z+j*Ze.gauge*qe),.025,A.rock,4))}});let ke=[...Ie.map(qe=>[qe.x+ne*Ze.gauge,qe.y,qe.z+j*Ze.gauge]),...Ie.slice().reverse().map(qe=>[qe.x-ne*Ze.gauge,qe.y,qe.z-j*Ze.gauge])];ke.push(ke[0]);let je=[0];for(let qe=1;qe<ke.length;qe+=1)je.push(je[qe-1]+Math.hypot(ke[qe][0]-ke[qe-1][0],ke[qe][1]-ke[qe-1][1],ke[qe][2]-ke[qe-1][2]));let rt=je[je.length-1],ht=new Ti(.05,.75,.05).translate(0,-.375,0),we=new Ti(.62,.08,.34).translate(0,-.8,.05),zt=new Ti(.62,.34,.06).translate(0,-.62,-.13),gi=new qi(ht,A.rock,Ze.chairs),_i=new qi(we,A.accent,Ze.chairs),Rt=new qi(zt,A.accent,Ze.chairs);return[gi,_i,Rt].forEach(qe=>{qe.frustumCulled=!1,O.add(qe)}),w.add(O),H.push(O),{group:O,update(qe){let xt=qe/ur.lift%1*rt;for(let ut=0;ut<Ze.chairs;ut+=1){let Oe=(xt+ut/Ze.chairs*rt)%rt,tt=1;for(;tt<je.length-1&&je[tt]<Oe;)tt+=1;let St=(Oe-je[tt-1])/(je[tt]-je[tt-1]||1),Ke=ke[tt-1],mt=ke[tt];z.position.set(at(Ke[0],mt[0],St),at(Ke[1],mt[1],St),at(Ke[2],mt[2],St)),z.rotation.set(0,Math.atan2(mt[0]-Ke[0],mt[2]-Ke[2]),0),z.updateMatrix(),gi.setMatrixAt(ut,z.matrix),_i.setMatrixAt(ut,z.matrix),Rt.setMatrixAt(ut,z.matrix)}z.rotation.set(0,0,0),gi.instanceMatrix.needsUpdate=!0,_i.instanceMatrix.needsUpdate=!0,Rt.instanceMatrix.needsUpdate=!0}}})();{let O=new pi;O.position.set(ti.x,Mt(ti.x,ti.z),ti.z),O.rotation.y=ti.rot;let Z=Ii(3.2,1.3,2.2,A.wood);Z.position.y=.6;let d=1.45,T=new gt(new lr(d,d,3.7,3,1,!1,Math.PI/2).rotateZ(Math.PI/2),A.accent);T.position.y=1.25+d/2;let D=Ii(.36,.9,.36,A.rock);D.position.set(.9,2.5,-.35);let C=Ii(.6,.9,.06,A.dark);C.position.set(-.6,.45,1.11),[.35,1.15].forEach(ie=>{let ee=Ii(.5,.42,.06,A.structure);ee.position.set(ie,.72,1.11),O.add(ee)});let P=Ii(1.2,.9,1,A.structure);P.position.set(3.4,.45,.6);let J=Ii(1.4,.14,1.2,A.accent);J.position.set(3.4,.97,.6),O.add(Z,T,D,C,P,J),w.add(O),H.push(O),Y(ti.x,ti.z,2.3)}{let O=new pi;O.position.set(Kt.x,Gn,Kt.z);let Z=new gt(new lr(1.1,1.5,1.6,8),A.rock);Z.position.y=-.5;let d=new gt(new lr(1.7,1.7,.16,8),A.structure);d.position.y=.38;let T=new gt(new lr(.72,.78,.9,8),A.structure);T.position.y=.91;let D=new gt(new sa(1,.7,8),A.accent);D.position.y=1.71,O.add(Z,d,T,D),O.add(Io(new V(1.3,.4,.4),new V(1.3,2.4,.4),.04,A.rock,4));let C=Ii(.06,.36,.6,A.accent);C.position.set(1.3,2.2,.72),O.add(C),w.add(O),H.push(O)}let $=(()=>{let O=Do(21),Z=[],d=(ee,ne)=>{let j=Mt(ee+.5,ne)-Mt(ee-.5,ne),Se=Mt(ee,ne+.5)-Mt(ee,ne-.5);return Math.hypot(j,Se)},T=(ee,ne)=>Math.hypot(ee-ti.x,ne-ti.z)<4.6||Math.hypot(ee-Ze.bottom[0],ne-Ze.bottom[1])<2.6||Math.hypot(ee-Ze.top[0],ne-Ze.top[1])<2.6;for(let ee=0;ee<6e3&&Z.length<240;ee+=1){let ne=(O()*2-1)*30,j=(O()*2-1)*30,Se=Mt(ne,j);!wh(ne,j,Se)||d(ne,j)>1.1||T(ne,j)||Z.some(be=>Math.hypot(ne-be.x,j-be.z)<1.05)||Z.push({x:ne,z:j,y:Se,s:.8+O()*.5,r:O()*Er})}let D=new qi(new sa(.62,1.15,6,1,!0),A.tree,Z.length),C=new qi(new sa(.46,.95,6,1,!0),A.tree,Z.length),P=new qi(new sa(.27,.46,6,1,!0),A.treeSnow,Z.length),J=[[D,.62],[C,1.28],[P,1.66]];Z.forEach((ee,ne)=>{z.rotation.set(0,ee.r,0),z.scale.setScalar(ee.s),J.forEach(([j,Se])=>{z.position.set(ee.x,ee.y+Se*ee.s,ee.z),z.updateMatrix(),j.setMatrixAt(ne,z.matrix)})}),z.scale.setScalar(1),z.rotation.set(0,0,0);let ie=new pi;return J.forEach(([ee])=>{ee.frustumCulled=!1,ie.add(ee)}),w.add(ie),H.push(ie),{count:Z.length}})();{let O=[],Z={};Ch.forEach(T=>{let D=Math.floor(T.line.length/2.4);for(let C=1;C<D;C+=1)T.line.at(C/D,Z),[1,-1].forEach(P=>{let J=Z.x-Z.tz*(T.half+.35)*P,ie=Z.z+Z.tx*(T.half+.35)*P;O.push([J,Mt(J,ie),ie])})});let d=new qi(new Ti(.08,.7,.08).translate(0,.35,0),A.accent,O.length);O.forEach(([T,D,C],P)=>{z.position.set(T,D-.05,C),z.updateMatrix(),d.setMatrixAt(P,z.matrix)}),d.frustumCulled=!1,w.add(d)}let he=(()=>{let O=new Ti(.3,.46,.24),Z=new Kc(.13,8,6),d=new Ti(.34,.04,1),T=[{run:"easy",period:ur.easyRun,phase:.1,turns:5,jacket:A.accent},{run:"easy",period:ur.easyRun,phase:.6,turns:4,jacket:A.dark},{run:"expert",period:ur.expertRun,phase:.25,turns:6,jacket:A.dark},{run:"expert",period:ur.expertRun,phase:.75,turns:6,jacket:A.accent}].map(C=>{let P=new pi,J=new gt(O,C.jacket);J.position.y=.33;let ie=new gt(Z,A.structure);ie.position.y=.7;let ee=new gt(d,A.dark);return ee.position.y=.03,P.add(J,ie,ee),P.rotation.order="YXZ",w.add(P),H.push(P),{...C,group:P,line:Hn[C.run].line,half:Hn[C.run].half}}),D={};return{update(C){T.forEach(P=>{let J=(C/P.period+P.phase)%1;P.line.at(J,D);let ie=J*P.turns*Er,ee=P.half*.55,ne=Math.sin(ie)*ee,j=Math.cos(ie)*ee*P.turns*Er/P.line.length,Se=-D.tz,be=D.tx,ue=D.x+Se*ne,Ie=D.z+be*ne,ke=D.tx+Se*j,je=D.tz+be*j,rt=Math.hypot(ke,je)||1,ht=Mt(ue,Ie),we=Mt(ue+ke/rt*.5,Ie+je/rt*.5);P.group.position.set(ue,ht,Ie),P.group.rotation.set(Math.atan2(ht-we,.5),Math.atan2(ke,je),-j*.6),P.group.visible=J>.015&&J<.985})}}})(),Ee={x:34,z0:-30,z1:34,top:28,wind:.6},Ae=new Float32Array(Ht.flakesHigh*5);{let O=Do(91);for(let Z=0;Z<Ht.flakesHigh;Z+=1)Ae.set([(O()*2-1)*Ee.x,at(Ee.z0,Ee.z1,O()),O()*Ee.top,1.1+O()*1.1,O()*Er],Z*5)}let Re=new Ei;Re.setAttribute("position",new bt(new Float32Array(Ht.flakesHigh*3),3));let fe=Re.attributes.position.array,Xe={value:Ht.flakeMaxPx},Qe=H_();A.flake=new Ro({color:Ut.flake,size:.85,map:Qe,transparent:!0,opacity:0,depthWrite:!1}),A.flake.onBeforeCompile=O=>{O.uniforms.maxPointSize=Xe,O.vertexShader=`uniform float maxPointSize;
${O.vertexShader.replace("#include <fog_vertex>",`gl_PointSize = min( gl_PointSize, maxPointSize );
#include <fog_vertex>`)}`};let Ce=new Bc(Re,A.flake);Ce.frustumCulled=!1,Ce.visible=!1,w.add(Ce);let Pt=()=>M==="high"?Ht.flakesHigh:Ht.flakesLow;function Ft(O){let Z=Pt(),d=Ee.x*2;for(let T=0;T<Z;T+=1){let D=T*5,C=Ae[D+4],P=(Ae[D+2]-Ae[D+3]*O)%Ee.top;P<0&&(P+=Ee.top);let J=Ae[D]+Ee.wind*O+Math.sin(O*.8+C)*.4+Ee.x;J=(J%d+d)%d-Ee.x;let ie=Ae[D+1]+Math.cos(O*.6+C)*.4;fe[T*3]=J,fe[T*3+1]=P,fe[T*3+2]=ie}Re.setDrawRange(0,Z),Re.attributes.position.needsUpdate=!0}H.forEach(O=>{O.traverse(Z=>{Z.isMesh&&(Z.castShadow=!0,Z.receiveShadow=!0)})});let ft=b==="snow"?1:0,dt={near:Ar.clear.fogNear,far:Ar.clear.fogFar},Wt=new Ge,Qt=new Ge,_t=(O,Z,d,T)=>T.copy(Wt.set(O)).lerp(Qt.set(Z),d),st=Ar;function It(O){_t(Fi.clear.sky,Fi.snow.sky,O,w.background),N.color.copy(w.background),I.color.copy(w.background),I.intensity=at(st.clear.hemi,st.snow.hemi,O),_t(Fi.clear.keyLight,Fi.snow.keyLight,O,k.color),k.intensity=at(st.clear.key,st.snow.key,O),k.shadow.intensity=at(st.clear.shadow,st.snow.shadow,O),dt.near=at(st.clear.fogNear,st.snow.fogNear,O),dt.far=at(st.clear.fogFar,st.snow.fogFar,O),A.flake.opacity=at(st.clear.flakes,st.snow.flakes,O),Ce.visible=A.flake.opacity>.01}It(ft);function Xt(){let O=window.devicePixelRatio||1;return u?1:Math.min(O,M==="high"?Ht.pixelRatioHigh:Ht.pixelRatioLow)}function ii(){k.castShadow=M==="high",F.visible=M!=="high"}ii();let B=yt.elevationMin*bi,$t=yt.elevationMax*bi,Te={az:yt.startAzimuth*bi,el:yt.startElevation*bi,dist:60,target:Ah.clone()},vt=60,ve=1,nt=0,Le=90,Ue=!0,At=!1,E=null,v=null,G="",se=O=>Vt(O,yt.minDistance,Le);function Q(){let O=Te.dist<=yt.minDistance+.01,Z=Te.dist>=Le-.01,d=`${O}|${Z}`;d!==G&&(G=d,c({atMin:O,atMax:Z}))}function _e(){let{az:O,el:Z,dist:d,target:T}=Te;m.position.set(T.x+d*Math.cos(Z)*Math.sin(O),T.y+d*Math.sin(Z),T.z+d*Math.cos(Z)*Math.cos(O));let D=Mt(m.position.x,m.position.z)+yt.groundClearance;m.position.y<D&&(m.position.y=D),m.lookAt(T),N.near=d+dt.near,N.far=d+dt.far,Q()}function de(O,Z){let d={az:Te.az+F_((O.az??Te.az)-Te.az),el:Vt(O.el??Te.el,B,$t),dist:se(O.dist??Te.dist),target:(O.target??Te.target).clone()};if(f||Z<=0){Te.az=d.az,Te.el=d.el,Te.dist=d.dist,Te.target.copy(d.target),E=null,Bt();return}E={from:{az:Te.az,el:Te.el,dist:Te.dist,target:Te.target.clone()},to:d,start:performance.now(),duration:Z},Bt()}function U(O){if(!E)return;let{from:Z,to:d,start:T,duration:D}=E,C=xh(Vt((O-T)/D,0,1));Te.az=at(Z.az,d.az,C),Te.el=at(Z.el,d.el,C),Te.dist=at(Z.dist,d.dist,C),Te.target.lerpVectors(Z.target,d.target,C),C>=1&&(E=null)}function re(O){if(!v)return;let{from:Z,to:d,start:T,duration:D}=v,C=xh(Vt((O-T)/D,0,1));ft=at(Z,d,C),It(ft),C>=1&&(v=null)}function xe(){E=null,Ue=!1,At||(At=!0,l())}let L=z_(),X=r.map(({id:O,name:Z})=>{let d=document.createElement("button");d.type="button",d.className="marker is-hidden",d.tabIndex=-1,d.dataset.id=O;let T=document.createElement("span");T.className="marker__pill";let D=document.createElement("span");return D.className="marker__text",D.textContent=Z,T.append(D),d.append(T),d.addEventListener("click",()=>o(O)),i.append(d),{id:O,el:d,anchor:new V(...L[O].anchor),occluded:!1,shown:!1,current:!1,half:null,height:0,pillW:0,pillH:0}}),ae=!1,oe=new V,me=0;function ge(O){let d=m.position;for(let T=1;T<28;T+=1){let D=T/28,C=at(d.x,O.x,D),P=at(d.y,O.y,D),J=at(d.z,O.z,D);if(P<Mt(C,J)-.25)return!0}return!1}let Pe=e.avoid||[];function le(O){if(!ae)return;let Z=t.clientWidth,d=t.clientHeight,T=O-me>120;T&&(me=O),X.forEach(j=>{j.half===null&&(j.half=j.el.offsetWidth/2,j.height=j.el.offsetHeight,j.pillW=j.el.firstElementChild.offsetWidth,j.pillH=j.el.firstElementChild.offsetHeight)});let D=t.getBoundingClientRect(),C=Pe.map(j=>j.getBoundingClientRect()).filter(j=>j.width>0&&j.height>0).map(j=>({l:j.left-D.left,t:j.top-D.top,r:j.right-D.left,b:j.bottom-D.top})),P=4,J=(j,Se)=>j.l<Se.r+P&&j.r>Se.l-P&&j.t<Se.b+P&&j.b>Se.t-P,ie=(j,Se,be)=>{let ue=be-j.height/2;return{l:Se-j.pillW/2,r:Se+j.pillW/2,t:ue-j.pillH/2,b:ue+j.pillH/2}},ee=X.map(j=>{T&&(j.occluded=ge(j.anchor)),oe.copy(j.anchor).project(m);let Se=(oe.x*.5+.5)*Z,be=oe.z<1&&Se>nt&&oe.x<1.02&&oe.y>-1.02&&oe.y<1.08,ue=nt+j.half+P,Ie=Vt(Se,ue,Math.max(ue,Z-j.half-P)),ke=Vt((-oe.y*.5+.5)*d,j.height+P,Math.max(j.height+P,d-P));return{m:j,x:Ie,y:ke,depth:oe.z,candidate:be&&!j.occluded}});ee.sort((j,Se)=>Number(Se.m.current)-Number(j.m.current)||j.depth-Se.depth);let ne=[];ee.forEach(j=>{let{y:Se}=j,be=j.candidate;if(be){let ue=ie(j.m,j.x,Se),Ie=j.m.current&&C.find(ke=>J(ue,ke));Ie&&(Se+=Ie.t>d/2?Ie.t-P*2-ue.b:Ie.b+P*2-ue.t,Se=Vt(Se,j.m.height+P,Math.max(j.m.height+P,d-P)),ue=ie(j.m,j.x,Se)),C.some(ke=>J(ue,ke))||ne.some(ke=>J(ue,ke))?be=!1:ne.push(ue)}j.m.el.style.transform=`translate3d(${j.x.toFixed(1)}px, ${Se.toFixed(1)}px, 0) translate(-50%, -100%)`,be!==j.m.shown&&(j.m.shown=be,j.m.el.classList.toggle("is-hidden",!be))})}let Ne=7.4,Ve=0,Me=0,lt=!document.hidden,ct=!0,br=!1,wr=!1,Lt={warmUntil:0,frames:0,total:0,prev:0};function ja(){return g&&!u}function Bt(){!Ve&&lt&&ct&&!br&&!wr&&(Ve=requestAnimationFrame(pa))}function Ui(O){O!==M&&(M=O,ii(),Zi())}function da(O,Z){if(!Z||M!=="high"||u||e.quality){Lt.warmUntil=0,Lt.prev=0;return}if(!Lt.warmUntil){Lt.warmUntil=O+Ht.warmupMs,Lt.frames=0,Lt.total=0,Lt.prev=O;return}let d=O-Lt.prev;Lt.prev=O,!(O<Lt.warmUntil)&&(Lt.frames+=1,Lt.total+=d,Lt.total>=Ht.sampleWindowMs&&(Lt.total/Lt.frames>Ht.slowFrameMs&&Ui("low"),Lt.frames=0,Lt.total=0))}function pa(O){Ve=0;let Z=Me?Math.min((O-Me)/1e3,.1):0;Me=O;let d=ja();d&&(Ne+=Z,!At&&!f&&!E&&(Te.az+=Z/ur.autoRotate*Er)),U(O),re(O),De.update(Ne),he.update(Ne),Ce.visible&&Ft(Ne),_e(),y.render(w,m),le(O),da(O,d),d||E||v?Bt():Me=0}function Zi(){let O=t.clientWidth,Z=t.clientHeight;if(!O||!Z)return;y.setPixelRatio(Xt()),y.setSize(O,Z,!1),Xe.value=Ht.flakeMaxPx*y.getPixelRatio(),m.aspect=O/Z;let d=Math.min(n(),O*.6);d>0?m.setViewOffset(O,Z,-d/2,0,O,Z):m.clearViewOffset(),m.updateProjectionMatrix(),nt=d,ve=(O-d)/Z,vt=u?Zo(e.posterSize||"wide"):xa(O-d,Z),X.forEach(T=>{T.half=null}),Le=vt*yt.maxDistanceFactor,Ue&&!E&&(Te.dist=vt),Te.dist=se(Te.dist),Me=0,Bt()}let hr=new AbortController,{signal:li}=hr,mi=new Map,ci=null,fa=()=>{let[O,Z]=[...mi.values()];return{d:Math.max(1,Math.hypot(O.x-Z.x,O.y-Z.y)),my:(O.y+Z.y)/2}};R.addEventListener("pointerdown",O=>{O.pointerType==="mouse"&&O.button!==0||(xe(),mi.set(O.pointerId,{x:O.clientX,y:O.clientY,type:O.pointerType}),O.pointerType==="mouse"&&R.setPointerCapture(O.pointerId),ci=mi.size===2?fa():null)},{signal:li}),R.addEventListener("pointermove",O=>{let Z=mi.get(O.pointerId);if(!Z)return;let d=O.clientX-Z.x,T=O.clientY-Z.y;Z.x=O.clientX,Z.y=O.clientY;let D=Math.PI/Math.max(320,t.clientHeight);if(mi.size===1)Te.az-=d*D*1.3,(Z.type==="mouse"||x())&&(Te.el=Vt(Te.el+T*D,B,$t));else if(mi.size===2&&ci){let C=fa();Te.dist=se(Te.dist*(ci.d/C.d)),Te.el=Vt(Te.el+(C.my-ci.my)*D,B,$t),ci=C}Bt()},{signal:li});let ma=O=>{mi.delete(O.pointerId),ci=mi.size===2?fa():null};R.addEventListener("pointerup",ma,{signal:li}),R.addEventListener("pointercancel",ma,{signal:li}),R.addEventListener("wheel",O=>{if(!x())return;O.preventDefault(),xe();let Z=O.deltaMode===1?O.deltaY*16:O.deltaY;Te.dist=se(Te.dist*Math.exp(Z*.0012)),Bt()},{passive:!1,signal:li}),R.addEventListener("webglcontextlost",O=>{O.preventDefault(),br=!0,Ve&&cancelAnimationFrame(Ve),Ve=0,h()},{signal:li}),R.addEventListener("webglcontextrestored",()=>{br=!1,Me=0,Bt(),p()},{signal:li}),document.addEventListener("visibilitychange",()=>{lt=!document.hidden,Me=0,Bt()},{signal:li});let ga=new ResizeObserver(()=>Zi());ga.observe(t);let qa=new IntersectionObserver(O=>{ct=O.some(Z=>Z.isIntersecting),Me=0,Bt()});qa.observe(t),_.addEventListener("change",()=>Zi(),{signal:li}),Zi(),await new Promise(O=>{requestAnimationFrame(Z=>{pa(Z),O()})}),ae=!0;let jn=O=>de({az:yt.startAzimuth*bi,el:yt.startElevation*bi,dist:vt,target:Ah},O);return{canvas:R,relayout(){Zi()},focus(O){let Z=L[O];Z&&(xe(),de({az:Z.azimuth*bi,el:Z.elevation*bi,dist:Z.distance*Vt(1.25/ve,1,2),target:new V(...Z.target)},s.camera))},reset(){E=null,jn(s.camera),Ue=!0},rotateStep(O){xe(),de({az:Te.az+O*yt.stepRotate*bi},s.cameraStep)},zoomStep(O){xe();let Z=O>0?yt.stepZoom:1/yt.stepZoom;de({dist:Te.dist*Z},s.cameraStep)},setSelected(O){X.forEach(Z=>{Z.current=Z.id===O,Z.el.classList.toggle("is-current",Z.current),Z.half=null}),Bt()},setWeather(O,Z){b=O,R.setAttribute("aria-label",a(b));let d=O==="snow"?1:0;if(!Z||f||!g){v=null,ft=d,It(ft),Bt();return}v={from:ft,to:d,start:performance.now(),duration:s.weatherShift},Bt()},setMotion(O){g=O,Me=0,Bt()},setReduced(O){f=O,Bt()},loseContextForTest(){y.forceContextLoss()},get quality(){return M},cameraState(){return{azimuth:Te.az/bi,elevation:Te.el/bi,distance:Te.dist,target:Te.target.toArray(),tweening:!!E}},stats(){return{calls:y.info.render.calls,triangles:y.info.render.triangles,points:y.info.render.points,trees:$.count,quality:M}},dispose(){wr=!0,Ve&&cancelAnimationFrame(Ve),hr.abort(),ga.disconnect(),qa.disconnect(),w.traverse(O=>{O.geometry&&O.geometry.dispose()}),Object.values(A).forEach(O=>O.dispose()),Qe.dispose(),y.dispose(),R.remove(),X.forEach(O=>O.el.remove())}}}var bi,Er,O_,Vt,at,xh,F_,ca,Mh,yh,Kt,Va,ti,Ze,Hn,Ch,bh,Lh,Gn,B_,Ah,Ih=Ya(()=>{vh();Ka();Yn();bi=Math.PI/180,Er=Math.PI*2,O_=new V(0,1,0),Vt=(e,t,i)=>Math.min(i,Math.max(t,e)),at=(e,t,i)=>e+(t-e)*i,xh=e=>1-Math.pow(1-e,3),F_=e=>Math.atan2(Math.sin(e),Math.cos(e)),ca=(e,t,i)=>{let r=Vt((i-e)/(t-e),0,1);return r*r*(3-2*r)},Mh=(e,t,i)=>{let r=Vt(.5+.5*(e-t)/i,0,1);return at(t,e,r)+i*r*(1-r)};yh=72,Kt={x:0,z:-6,h:19},Va={x:.6,z:16.6,rx:10.5,rz:4.4,y:.3},ti={x:-2.6,z:17.4,rot:.2},Ze={bottom:[2.4,14.4],top:[.9,-2],towers:5,chairs:22,gauge:.55};Hn={easy:{half:1.9,line:Th(Eh([[4.6,-1.4],[8.9,2.4],[6.2,6.4],[9.9,10.2],[6,14.4]],10))},expert:{half:1.35,line:Th(Eh([[-2.6,-3.2],[-5.2,2],[-7,7.8],[-5.4,14]],10))}},Ch=Object.values(Hn),bh=1.6;Lh=(e,t)=>1-ca(22,32,Math.hypot(e,t-2));Gn=Nh(Kt.x,Kt.z);B_=(e,t)=>Rh(e,t,Ze.bottom[0],Ze.bottom[1],Ze.top[0],Ze.top[1]);Ah=new V(.4,6.4,2.6)});Ka();Yn();var ha=document.documentElement,Yi=new URLSearchParams(window.location.search),Zt={state:Yi.get("state"),poster:Yi.get("poster"),weather:Yi.get("weather"),select:Yi.get("select"),motion:Yi.get("motion"),quality:["high","low"].includes(Yi.get("quality"))?Yi.get("quality"):void 0,size:["wide","medium","narrow"].includes(Yi.get("size"))?Yi.get("size"):"wide"},kt=(e,t=document)=>t.querySelector(e),ka=(e,t=document)=>[...t.querySelectorAll(e)],ze={scene:kt("#scene"),labels:kt(".scene__labels"),poster:kt(".scene__poster"),posterImg:kt(".scene__poster img"),posterSources:ka(".scene__poster source"),progress:kt(".scene__progress"),controls:kt(".scene__controls"),toggles:kt(".scene__toggles"),motionBtn:kt('[data-action="motion"]'),weatherBtn:kt('[data-action="weather"]'),zoomIn:kt('[data-action="zoom-in"]'),zoomOut:kt('[data-action="zoom-out"]'),bannerRegion:kt(".banner-region"),announcer:kt("[data-announcer]"),backdrop:kt(".panel-backdrop"),landmarkButtons:ka(".landmark"),details:ka("[data-detail]")},V_=e=>getComputedStyle(ha).getPropertyValue(e).trim(),Ki=e=>parseFloat(V_(e))||0,cr={camera:Ki("--ds-motion-camera"),cameraStep:Ki("--ds-motion-camera-step"),weatherShift:Ki("--ds-motion-weather-shift"),crossfade:Ki("--ds-motion-crossfade"),loadingDelay:Ki("--ds-motion-loading-delay"),loadingMin:Ki("--ds-motion-loading-min"),loadingSlow:Ki("--ds-motion-loading-slow"),contextRestore:Ki("--ds-motion-context-restore"),hintHold:Ki("--ds-motion-hint-hold")},Jt={motionStop:"\uC6C0\uC9C1\uC784 \uBA48\uCD94\uAE30",motionStart:"\uC6C0\uC9C1\uC784 \uB2E4\uC2DC \uCF1C\uAE30",toSnow:"\uB208 \uB0B4\uB9AC\uAC8C \uD558\uAE30",toClear:"\uB208 \uADF8\uCE58\uAC8C \uD558\uAE30",progress:"\uC0B0\uC744 \uADF8\uB9AC\uB294 \uC911\uC774\uC5D0\uC694",slow:"\uC5F0\uACB0\uC774 \uB290\uB824 3D \uC7A5\uBA74 \uD30C\uC77C\uC744 \uBC1B\uB294 \uB370 \uC2DC\uAC04\uC774 \uAC78\uB824\uC694. \uBAA9\uB85D\uC740 \uC9C0\uAE08 \uBCFC \uC218 \uC788\uC5B4\uC694.",slowAction:"3D \uC5C6\uC774 \uBCF4\uAE30",failed:"\uC774 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C\uB294 3D \uC7A5\uBA74\uC744 \uADF8\uB9B4 \uC218 \uC5C6\uC5B4\uC694. \uBAA9\uB85D\uC5D0\uC11C \uBA85\uC18C\uB97C \uACE0\uB974\uBA74 \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC5B4\uC694.",lost:"3D \uC7A5\uBA74\uC774 \uBA48\uCDC4\uC5B4\uC694. \uB2E4\uC2DC \uADF8\uB9AC\uBA74 \uC774\uC5B4\uC11C \uBCFC \uC218 \uC788\uC5B4\uC694.",lostAction:"\uB2E4\uC2DC \uADF8\uB9AC\uAE30",closeBanner:"\uC54C\uB9BC \uB2EB\uAE30",viewing:e=>`${e} \uBCF4\uB294 \uC911`,altClear:"\uB208 \uB36E\uC778 \uC0B0 \uD558\uB098\uC5D0 \uB9AC\uD504\uD2B8, \uCD08\uAE09 \uC2AC\uB85C\uD504, \uC0C1\uAE09 \uC2AC\uB85C\uD504, \uC0B0\uC7A5, \uC815\uC0C1 \uC804\uB9DD\uB300\uAC00 \uC788\uB294 3D \uC7A5\uBA74",altSnow:"\uB208\uC774 \uB0B4\uB9AC\uB294 \uC0B0. \uB9AC\uD504\uD2B8, \uCD08\uAE09 \uC2AC\uB85C\uD504, \uC0C1\uAE09 \uC2AC\uB85C\uD504, \uC0B0\uC7A5, \uC815\uC0C1 \uC804\uB9DD\uB300\uAC00 \uD750\uB9AC\uAC8C \uBCF4\uC774\uB294 3D \uC7A5\uBA74"},Vo=ze.landmarkButtons.map(e=>({id:e.dataset.id,name:kt(".landmark__name",e).textContent.trim()})),k_=e=>Vo.find(t=>t.id===e)?.name??"",kn=window.matchMedia("(prefers-reduced-motion: reduce)"),Gh=window.matchMedia(`(min-width: ${_a.wide}px)`),Je={mode:"loading",selected:null,weather:Zt.weather==="snow"||Zt.poster==="snow"?"snow":"clear",reduced:kn.matches,motion:Zt.motion!=="off"&&!kn.matches&&!Zt.poster},wt=null,Fo=null,Wa=!1,Wn=0,Uh=!1,Oh=new ResizeObserver(()=>{Ho(),wt?.relayout()}),Vh=e=>new Promise(t=>setTimeout(t,e));function ua(e){Je.mode=e,ha.dataset.mode=e}function ko(e){ze.announcer.textContent="",e&&requestAnimationFrame(()=>ze.announcer.textContent=e)}function Wo(){ze.landmarkButtons.forEach(t=>{t.dataset.id===Je.selected?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")});let e=Je.selected??"intro";ze.details.forEach(t=>t.classList.toggle("is-current",t.dataset.detail===e)),wt?.setSelected(Je.selected)}function kh(){let e=new URL(window.location.href);Je.selected?e.searchParams.set("select",Je.selected):e.searchParams.delete("select");try{window.history.replaceState(null,"",e)}catch{}}function zo(e){Vo.some(t=>t.id===e)&&(Je.selected=e,Wo(),kh(),ko(Jt.viewing(k_(e))),wt&&Je.mode==="ready"&&wt.focus(e))}function Wh(){let e=Je.selected!==null;Je.selected=null,Wo(),kh(),wt&&Je.mode==="ready"&&wt.reset(),e&&ko("")}function Bo(){ze.motionBtn.textContent=Je.motion?Jt.motionStop:Jt.motionStart,wt?.setMotion(Je.motion)}function Fh(e,t){return`assets/poster-${e}-${t}.webp`}var Xh=e=>e==="snow"?Jt.altSnow:Jt.altClear;function W_(){ze.posterSources.forEach(e=>{e.srcset=Fh(Je.weather,e.dataset.size)}),ze.posterImg.src=Fh(Je.weather,"narrow"),ze.posterImg.alt=Xh(Je.weather)}var X_=window.matchMedia(`(min-width: ${_a.medium}px)`);function j_(){return Gh.matches?"wide":X_.matches?"medium":"narrow"}function Ho(){if(Zt.poster)return;let e=ze.scene.clientWidth,t=ze.scene.clientHeight;if(!e||!t)return;let i=j_(),r=ze.posterImg;if(r.naturalWidth&&r.naturalWidth!==va[i].width){ze.poster.classList.remove("is-placed");return}let a=Jo(i,e,t,Kh());ze.poster.classList.toggle("is-placed",!!a),a&&Object.entries(a).forEach(([n,s])=>{ze.poster.style.setProperty(`--poster-${n}`,`${s.toFixed(1)}px`)})}function q_(){return ka(".tooltip",ze.controls).some(t=>getComputedStyle(t).visibility==="visible")?(ze.controls.classList.add("is-tip-dismissed"),ka(".icon-btn.is-tip",ze.controls).forEach(t=>t.classList.remove("is-tip")),!0):!1}function Bh(e){ha.dataset.weather=Je.weather,ze.weatherBtn.textContent=Je.weather==="snow"?Jt.toClear:Jt.toSnow,W_(),wt?.setWeather(Je.weather,e)}function zh(e,t){let i=kt(".tooltip",e);e.setAttribute("aria-disabled",t?"true":"false"),i.textContent=t?i.dataset.limit:e.getAttribute("aria-label"),t?e.setAttribute("aria-describedby",i.id):e.removeAttribute("aria-describedby")}function Y_({atMin:e,atMax:t}){zh(ze.zoomIn,e),zh(ze.zoomOut,t)}function K_(e){!wt||Je.mode!=="ready"||(e==="rotate-left"?wt.rotateStep(1):e==="rotate-right"?wt.rotateStep(-1):e==="zoom-in"?wt.zoomStep(1):e==="zoom-out"?wt.zoomStep(-1):e==="reset"&&Wh())}function Hh(e,t){let i=document.createElement("button");return i.type="button",i.className=e,i.textContent=t,i}function Xa(){ze.bannerRegion.replaceChildren()}function Xo({text:e,action:t,onAction:i}){let r=document.createElement("div");r.className="banner";let a=document.createElement("div");a.className="banner__body";let n=document.createElement("p");if(n.className="banner__text",n.textContent=e,a.append(n),t){let o=Hh("btn",t);o.addEventListener("click",i),a.append(o)}let s=Hh("icon-btn icon-btn--plain","");s.setAttribute("aria-label",Jt.closeBanner),s.innerHTML='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',s.addEventListener("click",Xa),r.append(a,s),ze.bannerRegion.replaceChildren(r)}var Go=0,Vn=0;function jh(){clearTimeout(Go),Go=setTimeout(()=>{ze.progress.textContent=Jt.progress,Vn=performance.now()},cr.loadingDelay)}async function jo(){if(clearTimeout(Go),Vn){let e=cr.loadingMin-(performance.now()-Vn);e>0&&await Vh(e)}ze.progress.textContent="",Vn=0}function qh(){ze.poster.classList.remove("is-fading"),ze.poster.hidden=!1}function Yh(){ze.poster.classList.add("is-fading"),setTimeout(()=>{Je.mode==="ready"&&(ze.poster.hidden=!0)},Je.reduced?0:cr.crossfade)}function Xn(e){ua("fallback"),jo(),qh(),e?Xo({text:e}):Xa()}function Z_(){Wa=!0,Xn(null)}function J_(){Je.mode==="loading"&&(jo(),Xo({text:Jt.slow,action:Jt.slowAction,onAction:Z_}))}function Q_(){ua("lost"),qh(),clearTimeout(Wn),Wn=setTimeout(()=>{Xo({text:Jt.lost,action:Jt.lostAction,onAction:e0})},cr.contextRestore)}function $_(){clearTimeout(Wn),Xa(),ua("ready"),Yh()}async function e0(){Xa(),clearTimeout(Wn),wt?.dispose(),wt=null,ua("loading"),jh();try{await Zh()}catch(e){console.error(e),Xn(Jt.failed)}}function t0(){try{let e=document.createElement("canvas").getContext("webgl2");return e?.getExtension("WEBGL_lose_context")?.loseContext(),!!e}catch{return!1}}function Kh(){return!Gh.matches||Zt.poster?0:ze.backdrop.getBoundingClientRect().right-ze.scene.getBoundingClientRect().left}async function Zh(){if(Fo=Fo||await Promise.resolve().then(()=>(Ih(),Dh)),Wa)return;let e=await Fo.createScene({container:ze.scene,labelLayer:ze.labels,landmarks:Vo,canvasLabel:Xh,getInsetLeft:Kh,durations:cr,weather:Je.weather,motion:Je.motion,reduced:Je.reduced,poster:!!Zt.poster,posterSize:Zt.size,avoid:[ze.toggles,ze.controls],quality:Zt.quality,onSelect:zo,onZoomLimits:Y_,onContextLost:Q_,onContextRestored:$_});if(Wa){e.dispose();return}wt=e,window.skiMountain={scene:wt,state:Je},await jo(),Xa(),ua("ready"),wt.setSelected(Je.selected),Je.selected&&wt.focus(Je.selected),Yh(),Zt.poster&&(ha.dataset.posterReady="true"),Zt.state==="lost"&&!Uh&&(Uh=!0,setTimeout(()=>wt?.loseContextForTest(),800))}async function i0(){if(window.skiMountainBooted=!0,ha.classList.add("js"),ua("loading"),Zt.poster&&ha.classList.add("is-poster"),Wo(),Bo(),Bh(!1),Ho(),ze.posterImg.addEventListener("load",Ho),Oh.observe(ze.scene),Oh.observe(ze.backdrop),Zt.select&&zo(Zt.select),ze.landmarkButtons.forEach(t=>{t.addEventListener("click",()=>zo(t.dataset.id))}),ze.controls.addEventListener("click",t=>{if(t.target.closest(".tooltip"))return;let i=t.target.closest("[data-action]");if(i){if(i.getAttribute("aria-disabled")==="true"){let r=kt(".tooltip",i);i.classList.add("is-tip"),ko(r.textContent),clearTimeout(i.tipTimer),i.tipTimer=setTimeout(()=>i.classList.remove("is-tip"),cr.hintHold);return}K_(i.dataset.action)}}),ze.motionBtn.addEventListener("click",()=>{Je.motion=!Je.motion,Bo()}),ze.weatherBtn.addEventListener("click",()=>{Je.weather=Je.weather==="snow"?"clear":"snow",Bh(!0)}),document.addEventListener("keydown",t=>{t.key!=="Escape"||t.defaultPrevented||q_()||Wh()}),ze.controls.addEventListener("pointerleave",()=>ze.controls.classList.remove("is-tip-dismissed")),ze.controls.addEventListener("focusin",()=>ze.controls.classList.remove("is-tip-dismissed")),kn.addEventListener("change",()=>{Je.reduced=kn.matches,wt?.setReduced(Je.reduced),Je.reduced&&(Je.motion=!1,Bo())}),Zt.state==="nowebgl"||!t0()){Xn(Jt.failed);return}jh();let e=setTimeout(J_,cr.loadingSlow);try{if(Zt.state==="slow"&&await Vh(cr.loadingSlow+3e4),Wa)return;await Zh()}catch(t){console.error(t),Wa||Xn(Jt.failed)}finally{clearTimeout(e)}}i0();})();
